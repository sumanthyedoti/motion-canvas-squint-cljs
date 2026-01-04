import * as squint_core from 'squint-cljs/core.js';
import * as d from '@motion-canvas/2d';
import { Circle, Rect, makeScene2D, Grid, Line, Node, Layout, Txt } from '@motion-canvas/2d';
import * as m from '@motion-canvas/core';
import { Vector2, createRef, createSignal, all, any, chain, sequence, loop, waitFor, makeRef } from '@motion-canvas/core';
import * as v from './../../motioncanvas/vectors.mjs';
var tutorial_position = function* (view) {
view.fill("#777");
const parent1 = createRef();
const local_child2 = createRef();
const absolute_child3 = createRef();
const label4 = createRef();
view.add(<><Rect ref={parent1} width={300} height={300} fill="#242424" stroke="#fff" lineWidth={2}><Circle ref={local_child2} position={[-100, 0]} size={40} fill="#ff6b6b"></Circle><Circle ref={absolute_child3} size={40} fill="#4ecdc4"></Circle></Rect><Txt ref={label4} y={-400} fontSize={40} fill="#fff" text="Position: Local vs Absolute"></Txt></>);
absolute_child3().absolutePosition([100, 100]);
(yield* waitFor(1));
label4().text("Parent moves right →");
(yield* parent1().position.x(200, 1.5));
(yield* waitFor(0.5));
label4().text("Parent rotates ↻");
(yield* parent1().rotation(45, 1.5));
(yield* waitFor(0.5));
label4().text("Red moved with parent, Blue stayed in world space!");
(yield* waitFor(2));
const leader5 = createRef();
const follower6 = createRef();
const pinned7 = createRef();
view.add(<><Circle ref={leader5} position={[-300, 0]} size={60} fill="#ff6b6b"><Txt text="Leader" y={-50} fontSize={24} fill="#fff"></Txt></Circle><Circle ref={follower6} size={40} fill="#4ecdc4"><Txt text="Follower" y={-40} fontSize={20} fill="#fff"></Txt></Circle><Circle ref={pinned7} size={30} fill="#ffe66d"><Txt text="Pinned" y={50} fontSize={18} fill="#000"></Txt></Circle></>);
follower6().absolutePosition((function () {
return leader5().absolutePosition();

}));
pinned7().absolutePosition((function () {
return [30, 30];

}));
(yield* waitFor(1));
(yield* all(leader5().position.x(300, 2), leader5().position.y(200, 2)));
(yield* leader5().position.y(-200, 2));
(yield* leader5().position.x(-300, 2));
(yield* waitFor(1));
const parent8 = createRef();
const local_rect9 = createRef();
const absolute_rect10 = createRef();
view.add(<><Txt y={300} fontSize={40} fill="#fff" text="Scale: Local vs Absolute"></Txt><Rect ref={parent8} width={200} height={200} fill="#242424" stroke="#fff" lineWidth={2}><Rect ref={local_rect9} x={-60} width={40} height={40} fill="#ff6b6b"></Rect><Rect ref={absolute_rect10} x={80} width={40} height={40} fill="#4ecdc4"></Rect></Rect></>);
absolute_rect10().absoluteScale([2, 2]);
(yield* waitFor(1));
(yield* parent8().scale(2, 1.5));
(yield* local_rect9().scale(2, 1.5));
(yield* waitFor(1));
(yield* parent8().scale(0.5, 1.5));
(yield* waitFor(1));
const parent11 = createRef();
const local_arrow12 = createRef();
const absolute_arrow13 = createRef();
view.add(<><Txt y={-300} fontSize={40} fill="#fff" text="Rotation: Local vs Absolute"></Txt><Rect ref={parent11} width={300} height={200} fill="#242424" stroke="#fff" lineWidth={2}><Rect ref={local_arrow12} x={-100} width={80} height={20} fill="#ff6b6b" rotation={0}></Rect><Rect ref={absolute_arrow13} x={100} width={80} height={20} fill="#4ecdc4" rotation={0}></Rect></Rect></>);
absolute_arrow13().absoluteRotation(0);
(yield* waitFor(1));
(yield* parent11().rotation(90, 2));
(yield* waitFor(1));
(yield* parent11().rotation(180, 2));
(yield* waitFor(1));
(yield* parent11().rotation(0, 2));
return (yield* waitFor(1));

};
var default$ = makeScene2D(tutorial_position);

export { tutorial_position }
export default default$
