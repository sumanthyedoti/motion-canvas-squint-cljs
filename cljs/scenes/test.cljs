(ns test
  (:require ["@motion-canvas/2d" :refer [Circle makeScene2D]]
            ["@motion-canvas/core" :refer [createRef]]))

(defn ^:gen example-scene [view]
  (let [circle (createRef)]
    (.add view
          #jsx [Circle {:ref circle
                        :size 320
                        :fill "lightseagreen"}])
    (js-yield*
     (-> (circle)
         (.scale 2 2)
         (.to 1 2)))))

(def default (makeScene2D example-scene))
