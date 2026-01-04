(ns scenes.docs.nodes
  (:refer-clojure :exclude [delay])
  (:require ["@motion-canvas/2d" :as d :refer [Circle Rect makeScene2D Grid Line Node Layout Txt]]
            ["@motion-canvas/core" :as m :refer [Vector2 createRef createSignal all any chain sequence loop waitFor makeRef]]
            [motioncanvas.vectors :as v])
  (:require-macros [macros :refer [defscene add-node add-n-nodes wait-for
                                   anim anim-all anim-any anim-chain anim-seq anim-delay anim-all-nodes play-and-restore
                                   spawn-anims spawn-stagger-anims
                                   find-all find-first find-last]]))

(defscene tutorial-position [view]
  (.fill view "#777")
  (let [parent (createRef)
        local-child (createRef)
        absolute-child (createRef)
        label (createRef)]

    (.add view
          #jsx [:<>
             ;; Parent container (will move and rotate)
                [Rect {:ref parent
                       :width 300
                       :height 300
                       :fill "#242424"
                       :stroke "#fff"
                       :lineWidth 2}

              ;; Local position child (moves with parent)
                 [Circle {:ref local-child
                          :position [-100 0]  ; ← Relative to parent
                          :size 40
                          :fill "#ff6b6b"}]

              ;; Absolute position child (stays in world space)
                 [Circle {:ref absolute-child
                          :size 40
                          :fill "#4ecdc4"}]]

                [Txt {:ref label
                      :y -400
                      :fontSize 40
                      :fill "#fff"
                      :text "Position: Local vs Absolute"}]])

    ;; Set absolute-child to world position [100, 0]
    (.absolutePosition (absolute-child) [100 100])

    (js-yield* (waitFor 1))

    ;; Move parent - watch what happens!
    (.text (label) "Parent moves right →")
    (js-yield* (.position.x (parent) 200 1.5))

    (js-yield* (waitFor 0.5))

    ;; Rotate parent
    (.text (label) "Parent rotates ↻")
    (js-yield* (.rotation (parent) 45 1.5))

    (js-yield* (waitFor 0.5))

    ;; Result:
    ;; - Red circle (local) moved and rotated WITH parent
    ;; - Blue circle (absolute) stayed at world position [100, 0]

    (.text (label) "Red moved with parent, Blue stayed in world space!")
    (js-yield* (waitFor 2)))

  ;;; ---
  ;;; 2
  ;;; ---
  (let [leader (createRef)
        follower (createRef)
        pinned (createRef)]

    (.add view
          #jsx [:<>
             ;; Leader circle
                [Circle {:ref leader
                         :position [-300 0]
                         :size 60
                         :fill "#ff6b6b"}
                 [Txt {:text "Leader"
                       :y -50
                       :fontSize 24
                       :fill "#fff"}]]

             ;; Follower - continuously matches leader's position
                [Circle {:ref follower
                         :size 40
                         :fill "#4ecdc4"}
                 [Txt {:text "Follower"
                       :y -40
                       :fontSize 20
                       :fill "#fff"}]]

             ;; Pinned to top-right corner
                [Circle {:ref pinned
                         :size 30
                         :fill "#ffe66d"}
                 [Txt {:text "Pinned"
                       :y 50
                       :fontSize 18
                       :fill "#000"}]]])

    ;; Make follower continuously follow leader
    (.absolutePosition (follower)
                       (fn [] (.absolutePosition (leader))))

    ;; Pin to top-right corner (always stays there)
    (.absolutePosition (pinned)
                       (fn [] [30 30]))

    (js-yield* (waitFor 1))

    ;; Animate leader - follower automatically follows!
    (js-yield* (all
                (.position.x (leader) 300 2)
                (.position.y (leader) 200 2)))

    (js-yield* (.position.y (leader) -200 2))

    (js-yield* (.position.x (leader) -300 2))

    ;; Follower stayed with leader, pinned stayed in corner!
    (js-yield* (waitFor 1)))

  ;;; ---
  ;;; 3
  ;;; ---
  (let [parent (createRef)
        local-rect (createRef)
        absolute-rect (createRef)]

    (.add view
          #jsx [:<>
                [Txt {:y 300
                      :fontSize 40
                      :fill "#fff"
                      :text "Scale: Local vs Absolute"}]

             ;; Parent (will scale)
                [Rect {:ref parent
                       :width 200
                       :height 200
                       :fill "#242424"
                       :stroke "#fff"
                       :lineWidth 2}

              ;; Local scale (scales WITH parent)
                 [Rect {:ref local-rect
                        :x -60
                        :width 40
                        :height 40
                        :fill "#ff6b6b"}]

              ;; Absolute scale (maintains world scale)
                 [Rect {:ref absolute-rect
                        :x 80
                        :width 40
                        :height 40
                        :fill "#4ecdc4"}]]])

    ;; Set absolute scale in world space
    (.absoluteScale (absolute-rect) [2 2])

    (js-yield* (waitFor 1))

    ;; Scale parent up
    (js-yield* (.scale (parent) 2 1.5))
    (js-yield* (.scale (local-rect) 2 1.5))

    ;; Result:
    ;; - Red rect (local) doubled in size (parent scale × local scale)
    ;; - Blue rect (absolute) stayed at world scale [2, 2]

    (js-yield* (waitFor 1))

    ;; Scale parent down
    (js-yield* (.scale (parent) 0.5 1.5))

    ;; Red shrinks with parent, Blue maintains absolute scale
    (js-yield* (waitFor 1)))

  ;;; ---
  ;;; 4
  ;;; ---
  (let [parent (createRef)
        local-arrow (createRef)
        absolute-arrow (createRef)]

    (.add view
          #jsx [:<>
                [Txt {:y -300
                      :fontSize 40
                      :fill "#fff"
                      :text "Rotation: Local vs Absolute"}]

             ;; Parent container
                [Rect {:ref parent
                       :width 300
                       :height 200
                       :fill "#242424"
                       :stroke "#fff"
                       :lineWidth 2}

              ;; Local rotation (rotates WITH parent)
                 [Rect {:ref local-arrow
                        :x -100
                        :width 80
                        :height 20
                        :fill "#ff6b6b"
                        :rotation 0}]

              ;; Absolute rotation (maintains world rotation)
                 [Rect {:ref absolute-arrow
                        :x 100
                        :width 80
                        :height 20
                        :fill "#4ecdc4"
                        :rotation 0}]]])

    ;; Set absolute rotation to point right (0°)
    (.absoluteRotation (absolute-arrow) 0)

    (js-yield* (waitFor 1))

    ;; Rotate parent
    (js-yield* (.rotation (parent) 90 2))

    ;; Result:
    ;; - Red arrow rotated WITH parent (now pointing down)
    ;; - Blue arrow stayed pointing right (absolute 0°)

    (js-yield* (waitFor 1))

    ;; Continue rotating
    (js-yield* (.rotation (parent) 180 2))

    (js-yield* (waitFor 1))

    (js-yield* (.rotation (parent) 0 2))

    (js-yield* (waitFor 1))))
