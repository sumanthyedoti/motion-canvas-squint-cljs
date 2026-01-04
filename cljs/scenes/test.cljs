(ns scenes.test
  (:require ["@motion-canvas/2d" :refer [Circle makeScene2D]]
            ["@motion-canvas/core" :refer [createRef]])
  (:require-macros [macros :refer [anim defscene]]))

(defscene example-scene [view]
  (let [circle (createRef)]
    (.add view
          #jsx [Circle {:ref circle
                        :size 320
                        :fill "lightseagreen"}])
    (anim
     (-> (circle)
         (.scale 2 2)
         (.to 1 2))))
  (anim-seq
   (-> (circle) (.scale 2 1))
   (-> (circle) (.opacity 0 1))
   (-> (circle) (.scale 1 1))))

