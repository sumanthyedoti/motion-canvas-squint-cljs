import * as squint_core from 'squint-cljs/core.js';
import { Circle, Rect, makeScene2D } from '@motion-canvas/2d';
import * as m from '@motion-canvas/core';
import { createRef, all, any, chain, sequence, loop, waitFor, makeRef } from '@motion-canvas/core';
var flicker = function* (circle) {
circle().fill("red");
yield;
circle().fill("blue");
yield;
circle().fill("red");
yield;
return 1;

};
var animation_flow = function* (view) {
const circle1 = createRef();
view.add(<Circle ref={circle1} x={-200} size={140} fill="#e13238"></Circle>);
(yield* flicker(circle1));
(yield* waitFor(1));
const rect2 = createRef();
view.add(<Rect ref={rect2} size={140} fill="#fff"></Rect>);
(yield* all(rect2().fill("red", 2), rect2().opacity(1, 1)));
(yield* any(rect2().fill("blue", 1), rect2().opacity(0, 2)));
(yield* rect2().opacity(1, 1));
(yield* waitFor(1));
const rect3 = createRef();
view.add(<Rect ref={rect3} size={140} x={200} opacity={0} fill="#fff"></Rect>);
(yield* chain(rect3().opacity(1, 0.5), rect3().fill("red", 1), rect3().opacity(0.5, 0.5), rect3().opacity(1, 0.5)));
(yield* all(rect3().fill("#fff", 1), chain(rect3().rotation(45, 1), rect3().opacity(0.7, 0.5))));
const circle4 = createRef();
view.add(<Circle ref={circle4} size={140} x={-200} y={200} opacity={0} fill="red"></Circle>);
(yield* circle4().opacity(0.5, 0.1));
(yield* m.delay(1, circle4().fill("#00ff00", 1)));
(yield* all(circle4().opacity(1, 0.5), m.delay(1, circle4().fill("#ff0000", 2))));
const rect15 = createRef();
const rect26 = createRef();
const rect37 = createRef();
view.add(<><Rect ref={rect15} x={-100} y={200} width={100} height={100} fill="orange"></Rect><Rect ref={rect26} x={-100} y={200} width={100} height={100} fill="purple"></Rect><Rect ref={rect37} x={-100} y={200} width={100} height={100} fill="cyan"></Rect></>);
const rects8 = [rect15, rect26, rect37];
(yield* squint_core.apply(sequence, 0.1, squint_core.map((function (rect) {
return rect().x(0, 1);

}), rects8)));
const rects9 = [];
view.add(m.range(5).map((function (i) {
return <Rect ref={m.makeRef(rects9, i)} width={100} height={100} x={(-250 + (125 * i))} fill="#88C0D0" radius={10}></Rect>;

})));
(yield* waitFor(1));
(yield* squint_core.apply(m.all, rects9.map((function (rect) {
return m.all(rect.rotation(100, 1).to(-100, 1), rect.position.y(100, 1).to(-100, 2).to(0, 1));

}))));
(yield* squint_core.apply(m.all, rects9.map((function (node234) {
const it10 = node234;
return m.all(it10.rotation(100, 1).to(-100, 1), it10.position.y(100, 1).to(-100, 2).to(0, 1));

}))));
for (let G__11 of squint_core.iterable(rects9)) {
const rect12 = G__11;
yield rect12.position.y(100, 1).to(-100, 2).to(0, 1)
};
(yield* m.waitFor(4));
for (let G__13 of squint_core.iterable(rects9)) {
const it14 = G__13;
yield it14.position.y(100, 1).to(-100, 2).to(0, 1)
};
(yield* waitFor(4));
for (let G__15 of squint_core.iterable(rects9)) {
const rect16 = G__15;
yield rect16.position.y(100, 1).to(-100, 2).to(0, 1);
(yield* m.waitFor(0.1))
};
(yield* m.waitFor(4));
for (let G__17 of squint_core.iterable(rects9)) {
const it18 = G__17;
yield it18.position.y(100, 1).to(-100, 2).to(0, 1);
(yield* m.waitFor(0.1))
};
return (yield* m.waitFor(4));

};
var default$ = makeScene2D(animation_flow);

export { flicker, animation_flow }
export default default$
