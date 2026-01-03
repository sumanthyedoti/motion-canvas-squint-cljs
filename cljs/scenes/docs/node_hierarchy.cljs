(ns scenes.docs.animation_flow
  (:refer-clojure :exclude [delay])
  (:require ["@motion-canvas/2d" :as d :refer [Circle Rect makeScene2D Layout Txt]]
            ["@motion-canvas/core" :as m :refer [createRef all any chain sequence loop waitFor makeRef]])
  (:require-macros [macros :refer [anim defscene anim-all anim-any anim-chain anim-seq anim-delay ><<
                                   wait-for add-node add-n-nodes anim-all-nodes spawn-anims spawn-stagger-anims
                                   find-all find-first find-last]]))

(defscene node_hierarchy [view]
  (.fill view "#222")
  (add-node #jsx [Layout {:layout true
                          :gap 20
                          :alignItems "center"}
                  [Txt {:fill "#fff"}
                   "Example"]
                  [Rect {:fill "#f3303f"
                         :padding 20
                         :gap 20}
                   [Txt {:fill "#fff"}
                    "42"]
                   [Circle {:size 60
                            :fill "#FFC66D"}]
                   [Txt {:fill "#fff"}
                    "!!!"]]])

  (let [texts (find-all (instance? Txt node))]
    (anim-all-nodes texts
                    (-> it (.fill "orange", 1) (.back 1))))
  (let [text (find-first (instance? Txt node))]
    (anim
     (-> text (.fill "green", 1) (.back 1))))
  (let [text (find-last (instance? Txt node))]
    (anim
     (-> text (.fill "red", 1) (.back 1)))))
