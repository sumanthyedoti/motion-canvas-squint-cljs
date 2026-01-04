import * as squint_core from 'squint-cljs/core.js';
import { Vector2 } from '@motion-canvas/core';
var origin = function () {
return Vector2.zero;

};
var at = function (x, y) {
return (new Vector2(x, y));

};
var right = function (distance) {
return Vector2.right.scale(distance);

};
var left = function (distance) {
return Vector2.left.scale(distance);

};
var up = function (distance) {
return Vector2.up.scale(distance);

};
var down = function (distance) {
return Vector2.down.scale(distance);

};
var at_angle = function (angle, distance) {
return Vector2.fromDegrees(angle).scale(distance);

};
var polar = function (angle, distance) {
return at_angle(angle, distance);

};
var from_to = function (from_vec, to_vec) {
return to_vec.sub(from_vec);

};
var distance_between = function (vec1, vec2) {
return vec2.sub(vec1).magnitude();

};

export { origin, right, up, distance_between, from_to, polar, down, at_angle, at, left }
