(ns macros
  "Essential macros for Motion Canvas in Squint
   
   These macros reduce boilerplate and make animations more declarative.")

;; ============================================================================
;; The Most Powerful Macro: anim
;; ============================================================================

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
   
   This is the MOST USED macro - it eliminates 90% of js-yield* boilerplate!"
  [& body]
  `(js-yield* ~@body))

;; ============================================================================
;; Scene Definition Macro
;; ============================================================================

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
     (defn ~(with-meta name {:async true :gen true}) ~args
       ~@body)
     (def ~'default (makeScene2D ~name))))

;; ============================================================================
;; Node Threading Macro
;; ============================================================================

(defmacro with-node
  "Thread a node reference through multiple operations.
   
   Instead of:
     (let [n (circle)]
       (-> n (.scale 2 1))
       (-> n (.opacity 0 0.5)))
   
   Write:
     (with-node (circle)
       (.scale 2 1)
       (.opacity 0 0.5))
   
   Each expression receives the node as first argument."
  [node-expr & operations]
  (let [node-sym (gensym "node")]
    `(let [~node-sym ~node-expr]
       ~@(map (fn [op]
                (if (and (list? op) (symbol? (first op)))
                  ;; Method call: (.method args)
                  `(~(first op) ~node-sym ~@(rest op))
                  ;; Expression: evaluate as-is
                  op))
              operations)
       ~node-sym)))

;; ============================================================================
;; Animation Sequence Macro
;; ============================================================================

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
     ~@(map (fn [anim] `(js-yield* ~anim)) animations)))

;; ============================================================================
;; Parallel Animation Macro
;; ============================================================================

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
  `(js-yield*
    (all ~@animations)))

;; ============================================================================
;; Tween Helper Macro
;; ============================================================================

(defmacro deftween
  "Define a reusable tween animation.
   
   Instead of:
     (defn my-tween [node]
       (tween 2
         (fn [value]
           (-> node .-position (.x (map -300 300 value))))))
   
   Write:
     (deftween my-tween [node]
       [value]
       (-> node .-position (.x (map -300 300 value))))
   
   The [value] parameter is the tween interpolation value (0-1)."
  [name node-params value-params & body]
  `(defn ~name ~node-params
     (tween 2
            (fn ~value-params
              ~@body))))

;; ============================================================================
;; Usage Examples (in comments)
;; ============================================================================

(comment
  ;; Example 1: Basic anim usage
  (anim (-> (circle) (.scale 2 1)))

  ;; Example 2: defscene
  (defscene my-animation [view]
    (.add view #jsx [Circle {:ref circle}])
    (anim (-> (circle) (.scale 2 1))))

  ;; Example 3: with-node
  (anim
   (with-node (circle)
     (.scale 2 1)
     (.opacity 0 0.5)
     (.rotation 360 1)))

  ;; Example 4: anim-seq
  (anim-seq
   (-> (circle) (.scale 2 1))
   (-> (circle) (.opacity 0 1))
   (-> (circle) (.scale 1 1)))

  ;; Example 5: anim-all
  (anim-all
   (-> circle1 (.scale 2 1))
   (-> circle2 (.opacity 0 1))
   (-> circle3 (.rotation 360 1))))
