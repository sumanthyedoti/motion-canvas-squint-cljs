(ns scenes.docs.positioning
  (:refer-clojure :exclude [delay])
  (:require ["@motion-canvas/2d" :as d :refer [Circle Rect makeScene2D Grid Line Node Layout Txt]]
            ["@motion-canvas/core" :as m :refer [Vector2 createRef createSignal all any chain sequence loop waitFor makeRef]]
            [motioncanvas.vectors :as v]
            [motioncanvas.positioning :as pos])
  (:require-macros [macros :refer [defscene add-node add-n-nodes wait-for
                                   anim anim-all anim-any anim-chain anim-seq anim-delay anim-all-nodes play-and-restore
                                   spawn-anims spawn-stagger-anims
                                   find-all find-first find-last]]))

; https://motioncanvas.io/docs/positioning/

(def RED "#ff6470")
(def GREEN "#99C47A")
(def BLUE "#68ABDF")

(defscene positioning [view]
  (.fill view "#222")
  (let [group (createRef)
        scale (createSignal 1)]

    (add-node #jsx [Node {:ref group :x -100}
                    [Grid {:width 1920
                           :height 1920
                           :spacing #(* (scale) 60)
                           :stroke "#444"
                           :lineWidth 1
                           :lineCap "square"
                           :cache true}]
                    [Circle {:size #(* (scale) 120)
                             :stroke BLUE
                             :lineWidth 4
                             :startAngle 110
                             :endAngle 340}]
                    [Line {:stroke RED
                           :lineWidth 4
                           :endArrow true
                           :arrowSize 10
                           :points [(v/origin)
                                    #(v/right (* (scale) 70))]}]
                    [Line {:stroke GREEN
                           :lineWidth 4
                           :endArrow true
                           :arrowSize 10
                           :points [(v/origin)
                                    #(v/up (* (scale) 70))]}]
                    [Circle {:size 20 :fill "#fff"}]])

    (anim (-> (group) (.position.x 100 0.8)))
    (anim (-> (group) (.rotation 30 0.8)))
    (anim (scale 2 0.8))
    (anim (-> (group) (.position.x -100 0.8)))
    (anim-all (-> (group) (.rotation 0 0.8))
              (scale 1 0.8)))

  (let [circle-a (createRef)
        circle-b (createRef)]

    (add-node #jsx [:<>
             ;; CircleA nested in positioned parent
                    [Node
                     {:position [200 100]}
                     [Circle {:position [0 100]
                              :ref circle-a
                              :width 150
                              :height 150
                              :fill "white"}]]
             ;; CircleB at root level
                    [Circle {:ref circle-b
                             :width 100
                             :height 100
                             :fill "red"}]])

    (wait-for 1)
    ;; Copy circleA's absolute position to circleB
    ;; circleA is at [0, 100] relative to parent at [200, 100]
    ;; So absolute position is [200, 200]
    (->> (.absolutePosition (circle-a)) (.absolutePosition (circle-b)))

    ;; Now circleB will be at the same screen position as circleA
    ;; even though they have different parents

    (wait-for 1)
    ;; Animate circleB - it moves in absolute coordinates
    (anim (-> (circle-b) (.absolutePosition [400 400] 1)))))

