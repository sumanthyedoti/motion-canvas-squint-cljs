(ns motioncanvas.vectors
  "Vector helpers for Motion Canvas"
  (:require ["@motion-canvas/core" :refer [Vector2]]))

;; ============================================================================
;; Simple Vector Helpers (Functions - no macro needed!)
;; ============================================================================

(defn origin
  "Zero vector (0, 0)"
  []
  Vector2.zero)

(defn at
  "Create vector at coordinates"
  [x y]
  (Vector2. x y))

(defn right
  "Point right by distance"
  [distance]
  (.scale Vector2.right distance))

(defn left
  "Point left by distance"
  [distance]
  (.scale (.-left Vector2) distance))

(defn up
  "Point up by distance"
  [distance]
  (.scale (.-up Vector2) distance))

(defn down
  "Point down by distance"
  [distance]
  (Vector2.down.scale distance))

;; ============================================================================
;; Angle-based helpers
;; ============================================================================

(defn at-angle
  "Point at angle (degrees) with distance"
  [angle distance]
  (.scale (.fromDegrees Vector2 angle) distance))

(defn polar
  "Alias for at-angle"
  [angle distance]
  (at-angle angle distance))

;; ============================================================================
;; Common patterns
;; ============================================================================

(defn from-to
  "Vector from one point to another"
  [from-vec to-vec]
  (.sub to-vec from-vec))

(defn distance-between
  "Distance between two vectors"
  [vec1 vec2]
  (.magnitude (.sub vec2 vec1)))

