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
   The variable 'node' is available in the animation body.

   Before:
   (js-yield*
        (apply m/all
               (.map rects
                     (fn [rect]
                       (-> rect .-position (.y 100 1) (.to -100 2) (.to 0 1))))))
      
   Usage:
   (anim-all-nodes rects
     (-> node .-position (.y 100 1) (.to -100 2) (.to 0 1)))"
  [nodes & body]
  `(~'js-yield*
    (apply m/all
           (.map ~nodes
                 (fn [~'it]
                   ~@body)))))
