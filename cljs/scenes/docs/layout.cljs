(ns scenes.docs.layout
  (:refer-clojure :exclude [delay])
  (:require ["@motion-canvas/2d" :as d :refer [Circle Rect makeScene2D Grid Line Node Layout Txt]]
            ["@motion-canvas/core" :as m :refer [Vector2 createRef createSignal all any chain sequence loop waitFor makeRef]]
            [motioncanvas.vectors :as v]
            [motioncanvas.positioning :as pos])
  (:require-macros [macros :refer [defscene defscene-local add-node add-n-nodes wait-for
                                   anim anim-all anim-any anim-chain anim-seq anim-delay anim-all-nodes play-and-restore
                                   anim-loop anim-repeat
                                   spawn-anims spawn-stagger-anims
                                   find-all find-first find-last]]))

(def RED "#ff6470")

(defscene scene-function [view]
  (.fill view "#656565")
  (let [col-a (createRef)
        col-b (createRef)
        row-a (createRef)]

    (add-node #jsx [Layout {:layout true
                            :gap 10
                            :y -200
                            :padding 10
                            :width 440
                            :height 240}
                    [Rect {:ref col-a
                           :grow 1
                           :fill "#242424"
                           :radius 4}]

                    [Layout {:gap 10
                             :direction "column"
                             :grow 3}
                     [Rect {:ref row-a
                            :grow 8
                            :fill RED
                            :radius 4
                            :stroke "#fff"
                            :lineWidth 4
                            :margin 2}
                      [Circle {:layout false
                               :width 20
                               :height 20
                               :fill "#fff"}]]

                     [Rect {:grow 2
                            :fill "#242424"
                            :radius 4}]]

                    [Rect {:ref col-b
                           :grow 3
                           :fill "#242424"
                           :radius 4}]])

    (anim-all (-> (col-b) (.grow 1 0.8))
              (.grow (col-a) 2 0.8))
    (anim (-> (row-a) (.grow  1 0.8)))
    (anim-all (-> (col-b) (.grow  3 0.8))
              (.grow (col-a) 1 0.8))
    (anim (-> (row-a) (.grow  8 0.8))))

;;;; -------
  ;;;; Groups
  ;;;; -------

  (let [group (createRef)]
    (add-node #jsx [Layout {:layout true
                            :direction "column"
                            :width 200
                            :y 100
                            :gap 10}
                    [Node {:opacity 0.1
                           :ref group}
                     [Rect {:height 50
                            :fill "#ff6470"}]
                     [Rect {:height 50
                            :fill "#ff6470"}]]
                    [Rect {:height 50
                           :fill "#ff6470"}]
                    [Txt {:fontSize 20} "3 times (blocks)"]])
    (anim-repeat 3
                 (-> (group) (.opacity 0.1 0.5) (.to 1 0.5))))

  (let [group (createRef)]
    (add-node #jsx [Layout {:layout true
                            :direction "column"
                            :width 200
                            :x 300
                            :y 100
                            :gap 10}
                    [Node {:opacity 0.1
                           :ref group}
                     [Rect {:height 50
                            :fill "#ff6470"}]
                     [Rect {:height 50
                            :fill "#ff6470"}]]
                    [Rect {:height 50
                           :fill "#ff6470"}]
                    [Txt {:fontSize 20} "Loop (does'nt block)"]])

    (anim-loop
     (-> (group) (.opacity 0.1 0.5) (.to 1 0.5))))

;;;; --------------------
  ;;;; Cardinal directions
  ;;;; --------------------

  (let [rect (createRef)]
    (add-node #jsx [:<>
                    [Rect {:ref rect
                           :x -400
                           :y 100
                           :width 200
                           :height 100
                           :rotation -10
                           :fill "#333333"}]
                    ;; Yellow rect - follows rotation, positioned at left edge
                    [Rect {:size 50
                           :fill "#e6a700"
                           :rotation (fn [] (.rotation (rect)))
                           :right (pos/at-left rect)}]
                    ;; Red rect - positioned at bottom-right corner
                    [Rect {:size 100
                           :fill "#e13238"
                           :rotation 10
                           :bottomLeft (pos/at-bottom-right rect)}]])

    ;; Animate rotation back and forth
    (anim (-> (rect)
              (.rotation 10 1) (.back 1)
              (.to 10 1) (.to -10 1)
              (.to 10 1) (.to -10 1)))))
