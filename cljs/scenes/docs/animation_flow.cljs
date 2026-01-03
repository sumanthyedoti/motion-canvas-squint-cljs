(ns scenes.docs.animation_flow
  (:refer-clojure :exclude [delay])
  (:require ["@motion-canvas/2d" :refer [Circle Rect makeScene2D]]
            ["@motion-canvas/core" :as m :refer [createRef all any chain sequence loop waitFor makeRef]])
  (:require-macros [macros :refer [anim defscene anim-all anim-any anim-chain anim-seq anim-delay ><<
                                   wait-for add-node add-n-nodes anim-all-nodes spawn-anims]]))

(defn ^:gen flicker [circle]
  (-> (circle) (.fill "red"))
  (js* "yield")
  (-> (circle) (.fill "blue"))
  (js* "yield")
  (-> (circle) (.fill "red"))
  (js* "yield")
  1)

(defscene animation_flow [view]
  ; flicker
  (let [circle (createRef)]
    (.add view #jsx [Circle {:ref circle
                             :x -200
                             :size 140
                             :fill "#e13238"}])
    (js-yield* (flicker circle)))
  (wait-for 1)
  ; all any
  (let [rect (createRef)]
    (.add view #jsx [Rect {:ref rect
                           :size 140
                           :fill "#fff"}])
    (anim-all
     (-> (rect) (.fill "red" 2))
     (-> (rect) (.opacity 1 1)))
    (anim-any
     (-> (rect) (.fill "blue" 1))
     (-> (rect) (.opacity 0 2)))

    (anim
     (-> (rect) (.opacity 1 1))))

  (wait-for 1)
; chain
  (let [rect (createRef)]
    (.add view #jsx [Rect {:ref rect
                           :size 140
                           :x 200
                           :opacity 0
                           :fill "#fff"}])

    (anim-chain
     (-> (rect) (.opacity 1 0.5))
     (-> (rect) (.fill "red" 1))
     (-> (rect) (.opacity 0.5 0.5))
     (-> (rect) (.opacity 1 0.5)))

    (anim-all
     (-> (rect) (.fill "#fff" 1))
     (chain
      (-> (rect) (.rotation 45 1))
      (-> (rect) (.opacity 0.7 0.5)))))
  ; delay
  (let [circle (createRef)]
    (.add view #jsx [Circle {:ref circle
                             :size 140
                             :x -200
                             :y 200
                             :opacity 0
                             :fill "red"}])
    (anim (-> (circle) (.opacity 0.5 0.1)))
    (anim-delay 1 (-> (circle) (.fill "#00ff00" 1)))
    (anim-all
     (-> (circle) (.opacity 1 0.5))
     (m/delay 1 (-> (circle) (.fill "#ff0000" 2)))))

  (let [rect1 (createRef)
        rect2 (createRef)
        rect3 (createRef)]

    (add-node #jsx [:<>
                    [Rect {:ref rect1 :x -100 :y 200 :width 100 :height 100 :fill "orange"}]
                    [Rect {:ref rect2 :x -100 :y 200 :width 100 :height 100 :fill "purple"}]
                    [Rect {:ref rect3 :x -100 :y 200 :width 100 :height 100 :fill "cyan"}]])

    ;; Create collection of nodes
    (let [rects [rect1 rect2 rect3]]

      ;; Animate them with stagger
      (anim-seq 0.1
                (map (fn [rect] (.x (rect) 0 1)) rects))))

  (let [rects #js []]

    ;; Create 5 rects
    (add-n-nodes 5 #jsx [Rect {:ref (m/makeRef rects i)
                               :width 100
                               :height 100
                               :x (+ -250 (* 125 i))
                               :fill "#88C0D0"
                               :radius 10}])

    (wait-for 1)

    ;; Animate them
    (js-yield*
     (apply m/all
            (.map rects
                  (fn [rect]
                    (m/all
                     (-> rect (.rotation 100 1) (.to -100 1))
                     (-> rect (.position.y 100 1) (.to -100 2) (.to 0 1)))))))

    (anim-all-nodes rects (m/all
                           (-> it (.rotation 100 1) (.to -100 1))
                           (-> it (.position.y 100 1) (.to -100 2) (.to 0 1))))

    (doseq [rect rects]
      (js* "yield ~{}" (-> rect .-position (.y 100 1) (.to -100 2) (.to 0 1))))
    ;; Wait for animations to complete
    (js-yield* (m/waitFor 4))

    (spawn-anims rects 4
                 (-> it .-position (.y 100 1) (.to -100 2) (.to 0 1)))))






