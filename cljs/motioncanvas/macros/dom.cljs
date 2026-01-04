(ns motioncanvas.macros.dom
  "Vector helpers for Motion Canvas"
  (:require ["@motion-canvas/core" :refer [Vector2]]))

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

