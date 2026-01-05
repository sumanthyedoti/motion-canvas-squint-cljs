(ns scenes.docs.signals
  (:refer-clojure :exclude [delay])
  (:require ["@motion-canvas/2d" :as d :refer [Circle Rect makeScene2D Grid Line Node Layout Txt]]
            ["@motion-canvas/core" :as m :refer [Vector2 createRef createSignal all any chain sequence loop waitFor makeRef DEFAULT]]
            [motioncanvas.vectors :as v]
            [motioncanvas.positioning :as pos])
  (:require-macros [macros :refer [defscene add-node add-n-nodes wait-for
                                   anim anim-all anim-any anim-chain anim-seq anim-delay anim-all-nodes play-and-restore
                                   spawn-anims spawn-stagger-anims
                                   find-all find-first find-last]]))

(defscene signals [view]
  (add-node #jsx [Rect {:width "100%" :height "100%" :fill "#757575"}])

  (let [primitive-signal (createSignal 30)
        vector-signal (Vector2.createSignal Vector2.up)]

    (add-node #jsx [Layout {:position [-700 -350] :direction "column" :gap 15
                            :alignItems "center"}

;; Node with signal property
                    [Circle {:size primitive-signal :fill "#ff6b6b"}]
                    [Txt {:fill "#ffe66d" :fontSize 18 :y 60}
                     (fn [] (str "Node fill: " (.fill (circle-ref))))]])

;; Demonstrate the three actions
    (anim (waitFor 0.5))

    ;; Retrieve signal
    (js/console.log "Retrieved:" (primitive-signal) (vector-signal))

    ;; Update signal
    (primitive-signal 10)
    (vector-signal (Vector2. 2 3))

    (anim (waitFor 0.5))

    ;; Tween signal
    (anim
     (primitive-signal 60 1)))

  ;; ========================================================================
  ;; Functions, Laziness, Caching, Dependency Tracking (Middle Center)
  ;; ========================================================================
  ;; Instead of the actual value, a signal can be provided with a function
  ;; that computes the value dynamically

  (let [radius (createSignal 1)
        area (createSignal
              (fn []
                 ;; This demonstrates when the signal is calculated
                (js/console.log "area recalculated!")
                (* js/Math.PI (radius) (radius))))]

    (add-node #jsx [Layout {:position [0 -350] :direction "column" :gap 10
                            :alignItems "center"}
                    [Circle {:size (fn [] (* (radius) 40))
                             :fill "#ffe66d"}]
                    [Txt {:fill "#aaa" :fontSize 18}
                     (fn [] (str "Area: " (.toFixed (area) 2)))]])

    ;; Laziness: only calculated when requested
    (area) ; <- "area recalculated!" logged here
    (area) ; <- nothing logged (cached)

    (anim (waitFor 0.5))

    ;; Dependency tracking: radius changes notify area
    (radius 2)
    (radius 3)
    (radius 10)
    (area) ; <- "area recalculated!" logged here (once)

    (anim (waitFor 0.5))
    ;; Animate to show dependency
    (anim (radius 5 1)))

  ;; ========================================================================
  ;; DEFAULT Values (Bottom)
  ;; ========================================================================

  (let [signal-with-default (createSignal 30)  ; <- initial value is 3
        text-ref (createRef)]

    (add-node #jsx [Layout {:position [700 -350] :direction "column" :gap 20
                            :fontSize 10
                            :alignItems "center"}
             ;; Text with custom lineHeight
                    [Txt {:ref text-ref
                          :fill "#fff"
                          :fontSize 20}
                     "Custom Line Height"]

             ;; Circle to demonstrate DEFAULT
                    [Circle {:size signal-with-default :fill "#9370DB"}]])

;; Change signal value
    (signal-with-default 70)

    (anim (waitFor 0.5))

    ;; Reset to DEFAULT (initial value of 3)
    (signal-with-default DEFAULT)

    (anim (waitFor 0.5))
    (.fontSize (text-ref) 60)

    ;; Tween to DEFAULT
    (anim-all
     (signal-with-default 100 1))

    (anim (waitFor 0.3))

    (anim-all
     (signal-with-default DEFAULT 1))

    (anim (waitFor 0.5))

    ;; Reset text fontSize to DEFAULT (inherited from parent)
    (.fontSize (text-ref) DEFAULT) ;;  ⚠️ fontSize not animation

    (anim (waitFor 0.5)))

  (let [radius (createSignal 3)
        ;; Computed signal - depends on radius
        area (createSignal (fn [] (* js/Math.PI (radius) (radius))))
        scale 100]

    ;;; Visualize circle with radius and area
    (add-node #jsx [:<>
             ;; Circle - reactive size based on radius
                    [Circle {:width (fn [] (* (radius) scale 2))
                             :height (fn [] (* (radius) scale 2))
                             :fill "#e13238"}]

             ;; Radius line - reactive length
                    [Line {:points [(v/origin)
                                    (fn [] (v/right
                                            (* (radius) scale)))]
                           :lineDash [20 20]
                           :startArrow true
                           :endArrow true
                           :endOffset 8
                           :lineWidth 8
                           :stroke "#242424"}]

             ;; Radius label - reactive text and position
                    [Txt {:text (fn [] (str "r = " (.toFixed (radius) 2)))
                          :x (fn [] (/ (* (radius) scale) 2))
                          :fill "#242424"
                          :fontWeight 700
                          :fontSize 56
                          :offsetY -1
                          :padding 20
                          :cache true}]

             ;; Area label - fixed props
                    [Txt {:text (fn [] (str "A = " (.toFixed (area) 2)))
                          :y (fn [] (* (radius) scale))
                          :fill "#e13238"
                          :fontWeight 700
                          :fontSize 56
                          :offsetY -1
                          :padding 20
                          :cache true}]])

;; Animate the radius signal - everything else updates automatically!
    (anim (-> (radius 4 2) (.to 3 2)))
    (anim (waitFor 1))))
