import * as squint_core from 'squint-cljs/core.js';
var keyword__GT_method = function (kw) {
const G__731 = kw;
switch (G__731) {case "middle":
return function (n) {
return n.middle();

};

break;
case "top":
return function (n) {
return n.top();

};

break;
case "bottom":
return function (n) {
return n.bottom();

};

break;
case "left":
return function (n) {
return n.left();

};

break;
case "right":
return function (n) {
return n.right();

};

break;
case "top-left":
return function (n) {
return n.topLeft();

};

break;
case "top-right":
return function (n) {
return n.topRight();

};

break;
case "bottom-left":
return function (n) {
return n.bottomLeft();

};

break;
case "bottom-right":
return function (n) {
return n.bottomRight();

};

break;
case "rotation":
return function (n) {
return n.rotation();

};

break;
case "position":
return function (n) {
return n.position();

};

break;
case "scale":
return function (n) {
return n.scale();

};

break;
case "opacity":
return function (n) {
return n.opacity();

};

break;
case "fill":
return function (n) {
return n.fill();

};

break;
case "width":
return function (n) {
return n.width();

};

break;
case "height":
return function (n) {
return n.height();

};

break;
default:
throw (new Error(`${"No matching clause: "}${G__731??''}`))};

};
var bind = function (node_ref, prop) {
return function () {
return keyword__GT_method(prop)(node_ref());

};

};
var at_middle = function (node_ref) {
return function () {
return node_ref().middle();

};

};
var at_top = function (node_ref) {
return function () {
return node_ref().top();

};

};
var at_bottom = function (node_ref) {
return function () {
return node_ref().bottom();

};

};
var at_left = function (node_ref) {
return function () {
return node_ref().left();

};

};
var at_right = function (node_ref) {
return function () {
return node_ref().right();

};

};
var at_top_left = function (node_ref) {
return function () {
return node_ref().topLeft();

};

};
var at_top_right = function (node_ref) {
return function () {
return node_ref().topRight();

};

};
var at_bottom_left = function (node_ref) {
return function () {
return node_ref().bottomLeft();

};

};
var at_bottom_right = function (node_ref) {
return function () {
return node_ref().bottomRight();

};

};
var same_rotation = function (node_ref) {
return function () {
return node_ref().rotation();

};

};
var same_scale = function (node_ref) {
return function () {
return node_ref().scale();

};

};
var same_opacity = function (node_ref) {
return function () {
return node_ref().opacity();

};

};
var same_fill = function (node_ref) {
return function () {
return node_ref().fill();

};

};

export { at_left, at_right, same_rotation, bind, at_bottom_left, at_bottom_right, same_opacity, at_top_left, at_top_right, same_scale, same_fill, at_middle, at_top, at_bottom }
