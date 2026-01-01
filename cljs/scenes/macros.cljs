(ns scenes.macros
  (:require ["@motion-canvas/2d" :refer [Circle Rect makeScene2D]]
            ["@motion-canvas/core" :refer [createRef all]])
  (:require-macros [macros :refer [anim add-node defscene anim-all anim-seq ><<]]))

(defscene macro-scene [view]
  (let [circle (createRef)
        rect (createRef)]
    (add-node [Circle {:ref circle
                       :size 320
                       :fill "lightseagreen"}])
    (add-node  [Rect {:ref rect
                      :width 200
                      :height 100
                      :radius 20
                      :fill "coral"}])
    (anim
     (-> (circle)
         (.scale 2 2)
         (.to 1 2)))

    (let [node (circle)]
      (.save node)
      (anim (-> node (.scale 2 1)))
      (anim-all (-> node (.position.x 300 1))
                (-> node (.scale 2 1)))
      (anim (.restore node 1)))

    (><< (rect) 1
         (anim-all
          (.rotation 45 1)
          (.opacity 0.5 1)))

    (anim-all
     (-> (circle) (.scale 2 1))
     (-> (rect) (.opacity 1 1))
     (-> (rect) (.rotation 360 1)))
    (anim-seq
     (-> (circle) (.opacity 1 1))
     (-> (circle) (.scale 1 1)))))

