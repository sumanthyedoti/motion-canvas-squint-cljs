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
     (defn ^:async ^:gen scene-function [view]
       ...)
     (def default (makeScene2D scene-function))
   
   Write:
     (defscene my-scene [view]
       ...)
   
   Automatically:
   - Adds ^:async ^:gen metadata
   - Creates the makeScene2D wrapper
   - Exports as default"
  [name args & body]
  `(do
     (defn ~(with-meta name {:gen true}) ~args
       ~@body)
     (def ~'default (~'makeScene2D ~name))))

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

(defmacro anim-all
  "Run multiple animations in parallel with automatic yielding.
   
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

(defmacro ><<
  "Automatically save node state, run animations, & restore.

  Use When: Any time you want to animate away from initial state then return

  Without macro:
  (let [node (circle)]
    (.save node)
    (anim-all (-> node (.position.x 300 1))
              (-> node (.scale 2 1)))
    (anim (.restore node 1)))

  With macro:
  (anim-and-restore (circle) 1
                    (anim-all
                      (.position.x 300 1)
                      (.scale 2 1)))

  The restore happens automatically!"
  [node-expr duration & body]
  (let [node-sym (gensym "node")]  ; ← Unique symbol
    `(let [~node-sym ~node-expr]
       (.save ~node-sym)
       ~@(map (fn [anim-form]
                (let [[anim-type & ops] anim-form]
                  `(~anim-type
                    ~@(map (fn [op] `(-> ~node-sym ~op)) ops))))
              body)
       (~'anim (.restore ~node-sym ~duration)))))

