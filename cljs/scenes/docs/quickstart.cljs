(ns scenes.docs.quickstart
  (:require ["@motion-canvas/2d" :refer [Circle Rect makeScene2D]]
            ["@motion-canvas/core" :refer [createRef all]])
  (:require-macros [macros :refer [anim defscene anim-all anim-seq ><<]]))

(defscene quickstart [view]
  (let [circle (createRef)]
    (.add view #jsx [Circle {:ref circle
                             :x -300
                             :size 140
                             :fill "#e13238"}])
    (anim-all
     (-> (circle) (.position.x 300 1) (.to -300 1))
     (-> (circle) (.fill "#e6a700" 1) (.to "#e13238" 1)))))

