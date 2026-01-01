(ns scenes.macro-slides
  (:require ["@motion-canvas/2d" :refer [Rect Txt makeScene2D]]
            ["@motion-canvas/core" :as core :refer [Color all beginSlide cancel createRef createSignal easeInOutCubic]])
  (:require-macros [macros :refer [add-node anim defscene, anim-all anim-seq ><<]]))

(def YELLOW "#FFC66D")
(def RED "#FF6470")
(def GREEN "#99C47A")
(def BLUE "#68ABDF")

(def arr #js [1 2 3])
(.push arr 4)
arr

(defscene main-scene [view]
  (-> view
      (.fontFamily "'JetBrains Mono', monospace")
      (.fontWeight 700)
      (.fontSize 256))

  (let [backdrop (createRef)
        title (createRef)
        rotation (createSignal 0)
        rotationScale (createSignal 0)]

    (add-node [:Rect {:cache true
                      :ref backdrop
                      :width "50%"
                      :height "50%"
                      :fill RED
                      :radius 40
                      :smoothCorners true
                      :rotation #(* (rotation) (rotationScale))}
               [:Txt {:ref title
                      :scale 0.5
                      :compositeOperation "destination-out"
                      :rotation #(* -1 (rotation) (rotationScale))}
                "START"]])

    (anim (beginSlide "start"))
    (anim-all
     (.fill (backdrop) GREEN 0.6 easeInOutCubic (.createLerp Color "lab"))
     (-> (backdrop) (.-size) (.x "60%" 0.6))
     (.text (title) "CONTENT" 0.6))

    (anim (beginSlide "content"))
    (let [loopTask (js-yield (core/loop (js* "Infinity") (fn [] (-> (rotation -5 1) (.to 5 1)))))]
      (anim-all
       (.fill (backdrop) BLUE 0.6 easeInOutCubic (.createLerp Color "lab"))
       (-> (backdrop) (.-size) (.x "70%" 0.6))
       (.text (title) "ANIMATION" 0.6)
       (rotationScale 1 0.6))

      (anim (beginSlide "animation"))
      (anim
       (all
        (.fill (backdrop) YELLOW 0.6 easeInOutCubic (.createLerp Color "lab"))
        (-> (backdrop) (.-size) (.x "50%" 0.6))
        (.text (title) "FINISH" 0.6)
        (rotationScale 0 0.6)))
      (cancel loopTask)

      (anim (beginSlide "finish")))))
