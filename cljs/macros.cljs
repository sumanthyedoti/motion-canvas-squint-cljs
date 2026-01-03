(ns macros
  "Essential macros for Motion Canvas in Squint")

(defmacro anim
  "Automatically wrap animation expressions in js-yield*.
   
   Instead of:
     (js-yield* (-> (circle) (.scale 2 1)))
   
   Write:
     (anim (-> (circle) (.scale 2 1)))
   
   Works with:
   - Single animations
   - Threading macros
   - all, sequence, chain
   - Custom tweens
   
   "
  [& body]
  `(~'js-yield* ~@body))

(defmacro defscene
  "Define a Motion Canvas scene with less boilerplate.
   
   Instead of:
     (defn ^:gen scene-function [view]
       ...)
     (def default (makeScene2D scene-function))
   
   Write:
     (defscene my-scene [view]
       ...)
   
   Automatically:
   - Adds ^:gen metadata
   - Creates the makeScene2D wrapper
   - Exports as default"
  [name args & body]
  `(do
     (defn ~(with-meta name {:gen true}) ~args
       ~@body)
     (def ~'default (~'makeScene2D ~name))))

(defmacro anim-all
  " Run all tasks concurrently and wait for all of them to finish.
    Run multiple animations in parallel with automatic yielding.

   
   Instead of:
     (js-yield*
       (all
         (-> node1 (.scale 2 1))
         (-> node2 (.opacity 0 1))))
   
   Write:
     (anim-all
       (-> node1 (.scale 2 1))
       (-> node2 (.opacity 0 1)))
   
   Automatically wraps in js-yield* and all."
  [& animations]
  `(~'js-yield*
    (~'all ~@animations)))

(defmacro anim-any
  "Run all tasks concurrently and wait for any of them to finish.
   
   Instead of:
     (js-yield*
       (any
         (-> node1 (.scale 2 1))
         (-> node2 (.opacity 0 1))))
   
   Write:
     (anim-any
       (-> node1 (.scale 2 1))
       (-> node2 (.opacity 0 1)))
   
   Automatically wraps in js-yield* and all."
  [& animations]
  `(~'js-yield*
    (~'any ~@animations)))

(defmacro anim-seq
  "Create a sequence of animations that automatically yield.
   
   Instead of:
     (js-yield* anim1)
     (js-yield* anim2)
     (js-yield* anim3)
   
   Write:
     (anim-seq
       anim1
       anim2
       anim3)
   
   Each expression is automatically yielded in sequence."
  [& animations]
  `(do
     ~@(map (fn [anim] `(~'js-yield* ~anim)) animations)))

(defmacro anim-chain
  "Run tasks one after another.
   
  Instead of:
  (js-yield* anim1)
  (js-yield* anim2)
  (js-yield* anim3)
  OR
  (js-yield*
    (chain
      (-> node1 (.scale 2 1))
      (-> node2 (.opacity 0 1))))
   
   Write:
   (anim-chain
     (-> node1 (.scale 2 1))
     (-> node2 (.opacity 0 1)))
   
   Automatically wraps in js-yield* and all."
  [& animations]
  `(~'js-yield*
    (~'chain ~@animations)))

(defmacro play-and-restore
  "Automatically save node state, run animations, & restore.

  Use When: Any time you want to animate away from initial state then return

  Without macro:
  (let [node (circle)]
    (.save node)
    (anim-all (-> node (.position.x 300 1))
              (-> node (.scale 2 1)))
    (anim (.restore node 1)))

  With macro:
  (save-and-restore (circle) 1
                    (anim-all
                      (-> it (.position.x 300 1))
                      (-> it (.scale 2 1))))
  (save-and-restore (circle) 1
                    (anim
                      (-> it (.scale 2 1))))

  The restore happens automatically!"
  [node-expr duration & body]
  (let [node-sym (gensym "node")]
    `(let [~node-sym ~node-expr]
       (.save ~node-sym)
       (let [~'it ~node-sym]  ; Make 'it' available locally
         ~@body)
       (~'anim (.restore ~node-sym ~duration)))))

(defmacro wait-for [secs]
  `(~'js-yield* (~'waitFor ~secs)))

(defmacro anim-delay
  " Run the given generator or callback after a specific amount of time.
  "

  [secs & body]
  `(~'js-yield* (~'m/delay ~secs ~@body)))

(defmacro anim-seq
  " Start all tasks one after another with a constant delay between.
  "
  [secs body]
  `(~'js-yield* (apply ~'sequence ~secs ~body)))

(defmacro add-node
  "
   Usage:
   (add-node #jsx [Rect {:ref (m/makeRef rects i)
                 :x (+ -250 (* 125 i))}])"
  [& body]
  `(.add ~'view ~@body))

(defmacro add-n-nodes
  "Add N nodes to view with range mapping.
   The variable 'i' is available in the node template.
   
   Usage:
   (add-n-nodes 5
     #jsx [Rect {:ref (m/makeRef rects i)
                 :x (+ -250 (* 125 i))}])"
  [count & body]
  `(.add ~'view
         (.map (m/range ~count)
               (fn [~'i]
                 ~@body))))

(defmacro anim-all-nodes
  "Animate all nodes in a collection in parallel.
   The variable 'it' is available in the animation body.

   - automatic duration

   Before:
   (js-yield*
        (apply m/all
               (.map rects
                     (fn [rect]
                       (-> rect .-position (.y 100 1) (.to -100 2) (.to 0 1))))))
      
   Usage:
   (anim-all-nodes rects
     (-> it .-position (.y 100 1) (.to -100 2) (.to 0 1)))"
  [nodes & body]
  (let [node-sym (gensym "node")]
    `(~'js-yield*
      (apply ~'m/all
             (.map ~nodes
                   (fn [~node-sym]
                     (let [~'it ~node-sym]
                       ~@body)))))))

(defmacro spawn-anims
  "Start all animations immediately without waiting, then wait for total duration.
   The variable 'it' is available in the animation body.

   you have to figure out how long it would take for the generator in the loop to complete, 
   but is useful in some situations.

   - More control over timing

   
   Usage:
   (spawn-animations rects 4
     (-> it .-position (.y 100 1) (.to -100 2) (.to 0 1)))"
  ([nodes total-duration & body]
   `(do
      (doseq [~'it ~nodes]
        (js* "yield ~{}" ~@body))
      (~'js-yield* (~'waitFor ~total-duration)))))

(defmacro spawn-stagger-anims
  "Spawn animations with delay between each, then wait for total duration.
  
  - Can add delays between spawns if needed and wait for specified total duration
   
   Usage:
   (stagger-spawn rects 0.1 4
     (-> node .-position (.y 100 1) (.to -100 2) (.to 0 1)))"
  [nodes stagger-delay total-duration & body]
  `(do
     (doseq [~'it ~nodes]
       (js* "yield ~{}" ~@body)
       (~'js-yield* (~'m/waitFor ~stagger-delay)))
     (~'js-yield* (~'m/waitFor ~total-duration))))

;; --------------------
;; ---- DOM Macros ----
;; --------------------

(defmacro find-all
  "Find all nodes matching predicate. Variable 'node' available in predicate.
   
   Usage:
   (find-all (d/is Txt))
   (find-all (instance? Txt node))
   (let [texts (find-all (> (-> node (.scale.x)) 1))]
     ...)
   "

  [& predicate-body]
  `(~'.findAll ~'view
               (fn [~'node]
                 ~@predicate-body)))

(defmacro find-first
  "Find all nodes matching predicate. Variable 'node' available in predicate.
   
   Usage:
   (find-first (d/is Txt))
   (find-first (instance? Txt node))
   (let [texts (find-first (> (-> node (.scale.x)) 1))]
     ...)
   "
  [& predicate-body]
  `(~'.findFirst ~'view
                 (fn [~'node]
                   ~@predicate-body)))

(defmacro find-last
  "Find all nodes matching predicate. Variable 'node' available in predicate.
   
   Usage:
   (find-last (d/is Txt))
   (find-last (instance? Txt node))
   (let [texts (find-last (> (-> node (.scale.x)) 1))]
     ...)
   "
  [& predicate-body]
  `(~'.findLast ~'view
                (fn [~'node]
                  ~@predicate-body)))

(defmacro find-ancestor
  "Find the closest ancestor of this node that matches the given predicate.
   Variable 'node' available in predicate.
   
   Usage:
   (find-last (d/is Txt))
   (find-last (instance? Txt node))
   (let [texts (find-last (> (-> node (.scale.x)) 1))]
     ...)
   "
  [& predicate-body]
  `(~'.findAncestor ~'view
                    (fn [~'node]
                      ~@predicate-body)))
