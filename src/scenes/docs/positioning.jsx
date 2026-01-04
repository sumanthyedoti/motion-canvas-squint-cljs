import * as squint_core from 'squint-cljs/core.js';
import * as d from '@motion-canvas/2d';
import { Circle, Rect, makeScene2D, Grid, Line, Node, Layout, Txt } from '@motion-canvas/2d';
import * as m from '@motion-canvas/core';
import { Vector2, createRef, createSignal, all, any, chain, sequence, loop, waitFor, makeRef } from '@motion-canvas/core';
import * as v from './../../motioncanvas/vectors.mjs';
import * as pos from './../../motioncanvas/positioning.mjs';
var RED = "#ff6470";
var GREEN = "#99C47A";
var BLUE = "#68ABDF";
var positioning = function* (view) {
view.fill("#222");
const group1 = createRef();
const scale2 = createSignal(1);
view.add(<Node ref={group1} x={-100}><Grid width={1920} height={1920} spacing={(function () {
return (scale2() * 60);

})} stroke="#444" lineWidth={1} lineCap="square" cache={true}></Grid><Circle size={(function () {
return (scale2() * 120);

})} stroke={BLUE} lineWidth={4} startAngle={110} endAngle={340}></Circle><Line stroke={RED} lineWidth={4} endArrow={true} arrowSize={10} points={[v.origin(), (function () {
return v.right((scale2() * 70));

})]}></Line><Line stroke={GREEN} lineWidth={4} endArrow={true} arrowSize={10} points={[v.origin(), (function () {
return v.up((scale2() * 70));

})]}></Line><Circle size={20} fill="#fff"></Circle></Node>);
(yield* group1().position.x(100, 0.8));
(yield* group1().rotation(30, 0.8));
(yield* scale2(2, 0.8));
(yield* group1().position.x(-100, 0.8));
(yield* all(group1().rotation(0, 0.8), scale2(1, 0.8)));
const circle_a3 = createRef();
const circle_b4 = createRef();
view.add(<><Node position={[200, 100]}><Circle position={[0, 100]} ref={circle_a3} width={150} height={150} fill="white"></Circle></Node><Circle ref={circle_b4} width={100} height={100} fill="red"></Circle></>);
(yield* waitFor(1));
circle_b4().absolutePosition(circle_a3().absolutePosition());
(yield* waitFor(1));
return (yield* circle_b4().absolutePosition([400, 400], 1));

};
var default$ = makeScene2D(positioning);

export { RED, GREEN, BLUE, positioning }
export default default$
