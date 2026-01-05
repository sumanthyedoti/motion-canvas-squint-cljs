import * as squint_core from 'squint-cljs/core.js';
import * as d from '@motion-canvas/2d';
import { Circle, Rect, makeScene2D, Grid, Line, Node, Layout, Txt } from '@motion-canvas/2d';
import * as m from '@motion-canvas/core';
import { Vector2, createRef, createSignal, all, any, chain, sequence, loop, waitFor, makeRef, DEFAULT } from '@motion-canvas/core';
import * as v from './../../motioncanvas/vectors.mjs';
import * as pos from './../../motioncanvas/positioning.mjs';
var signals = function* (view) {
view.add(<Rect width="100%" height="100%" fill="#757575"></Rect>);
const primitive_signal1 = createSignal(30);
const vector_signal2 = Vector2.createSignal(Vector2.up);
view.add(<Layout position={[-700, -350]} direction="column" gap={15} alignItems="center"><Circle size={primitive_signal1} fill="#ff6b6b"></Circle><Txt fill="#ffe66d" fontSize={18} y={60}>{(function () {
return `${"Node fill: "}${circle_ref().fill()??''}`;

})}</Txt></Layout>);
(yield* waitFor(0.5));
console.log("Retrieved:", primitive_signal1(), vector_signal2());
primitive_signal1(10);
vector_signal2((new Vector2(2, 3)));
(yield* waitFor(0.5));
(yield* primitive_signal1(60, 1));
const radius3 = createSignal(1);
const area4 = createSignal((function () {
console.log("area recalculated!");
return (Math.PI * radius3() * radius3());

}));
view.add(<Layout position={[0, -350]} direction="column" gap={10} alignItems="center"><Circle size={(function () {
return (radius3() * 40);

})} fill="#ffe66d"></Circle><Txt fill="#aaa" fontSize={18}>{(function () {
return `${"Area: "}${area4().toFixed(2)??''}`;

})}</Txt></Layout>);
area4();
area4();
(yield* waitFor(0.5));
radius3(2);
radius3(3);
radius3(10);
area4();
(yield* waitFor(0.5));
(yield* radius3(5, 1));
const signal_with_default5 = createSignal(30);
const text_ref6 = createRef();
view.add(<Layout position={[700, -350]} direction="column" gap={20} fontSize={10} alignItems="center"><Txt ref={text_ref6} fill="#fff" fontSize={20}>Custom Line Height</Txt><Circle size={signal_with_default5} fill="#9370DB"></Circle></Layout>);
signal_with_default5(70);
(yield* waitFor(0.5));
signal_with_default5(DEFAULT);
(yield* waitFor(0.5));
text_ref6().fontSize(60);
(yield* all(signal_with_default5(100, 1)));
(yield* waitFor(0.3));
(yield* all(signal_with_default5(DEFAULT, 1)));
(yield* waitFor(0.5));
text_ref6().fontSize(DEFAULT);
(yield* waitFor(0.5));
const radius7 = createSignal(3);
const area8 = createSignal((function () {
return (Math.PI * radius7() * radius7());

}));
const scale9 = 100;
view.add(<><Circle width={(function () {
return (radius7() * scale9 * 2);

})} height={(function () {
return (radius7() * scale9 * 2);

})} fill="#e13238"></Circle><Line points={[v.origin(), (function () {
return v.right((radius7() * scale9));

})]} lineDash={[20, 20]} startArrow={true} endArrow={true} endOffset={8} lineWidth={8} stroke="#242424"></Line><Txt text={(function () {
return `${"r = "}${radius7().toFixed(2)??''}`;

})} x={(function () {
return ((radius7() * scale9) / 2);

})} fill="#242424" fontWeight={700} fontSize={56} offsetY={-1} padding={20} cache={true}></Txt><Txt text={(function () {
return `${"A = "}${area8().toFixed(2)??''}`;

})} y={(function () {
return (radius7() * scale9);

})} fill="#e13238" fontWeight={700} fontSize={56} offsetY={-1} padding={20} cache={true}></Txt></>);
(yield* radius7(4, 2).to(3, 2));
return (yield* waitFor(1));

};
var default$ = makeScene2D(signals);

export { signals }
export default default$
