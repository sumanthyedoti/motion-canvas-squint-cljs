(ns motioncanvas.positioning
  "Easy helpers for reactive positioning, Cardinal directions and properties")

;; ============================================================================
;; Reactive Property Getters (wrap in fn for JSX)
;; ============================================================================

(defn- keyword->method [kw]
  (case kw
    ;; Positions
    :middle      (fn [n] (.middle n))
    :top         (fn [n] (.top n))
    :bottom      (fn [n] (.bottom n))
    :left        (fn [n] (.left n))
    :right       (fn [n] (.right n))
    :top-left    (fn [n] (.topLeft n))
    :top-right   (fn [n] (.topRight n))
    :bottom-left (fn [n] (.bottomLeft n))
    :bottom-right (fn [n] (.bottomRight n))

    ;; Properties
    :rotation    (fn [n] (.rotation n))
    :position    (fn [n] (.position n))
    :scale       (fn [n] (.scale n))
    :opacity     (fn [n] (.opacity n))
    :fill        (fn [n] (.fill n))
    :width       (fn [n] (.width n))
    :height      (fn [n] (.height n))))

(defn bind
  "Bind to a node's property reactively.
   Usage in JSX: :rotation (bind rect :rotation)
                :right (bind rect :left)"
  [node-ref prop]
  (fn [] ((keyword->method prop) (node-ref))))

;; ============================================================================
;; Specific Position Helpers (more readable)
;; ============================================================================

(defn at-middle
  "Position at node's middle"
  [node-ref]
  (fn [] (.middle (node-ref))))

(defn at-top
  "Position at node's top"
  [node-ref]
  (fn [] (.top (node-ref))))

(defn at-bottom
  "Position at node's bottom"
  [node-ref]
  (fn [] (.bottom (node-ref))))

(defn at-left
  "Position at node's left"
  [node-ref]
  (fn [] (.left (node-ref))))

(defn at-right
  "Position at node's right"
  [node-ref]
  (fn [] (.right (node-ref))))

(defn at-top-left
  "Position at node's top-left corner"
  [node-ref]
  (fn [] (.topLeft (node-ref))))

(defn at-top-right
  "Position at node's top-right corner"
  [node-ref]
  (fn [] (.topRight (node-ref))))

(defn at-bottom-left
  "Position at node's bottom-left corner"
  [node-ref]
  (fn [] (.bottomLeft (node-ref))))

(defn at-bottom-right
  "Position at node's bottom-right corner"
  [node-ref]
  (fn [] (.bottomRight (node-ref))))

;; ============================================================================
;; Property Sync Helpers
;; ============================================================================

(defn same-rotation
  "Sync rotation with node"
  [node-ref]
  (fn [] (.rotation (node-ref))))

(defn same-scale
  "Sync scale with node"
  [node-ref]
  (fn [] (.scale (node-ref))))

(defn same-opacity
  "Sync opacity with node"
  [node-ref]
  (fn [] (.opacity (node-ref))))

(defn same-fill
  "Sync fill color with node"
  [node-ref]
  (fn [] (.fill (node-ref))))

