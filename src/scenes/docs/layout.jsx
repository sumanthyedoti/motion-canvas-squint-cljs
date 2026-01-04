import * as squint_core from 'squint-cljs/core.js';
import * as d from '@motion-canvas/2d';
import { Circle, Rect, makeScene2D, Grid, Line, Node, Layout, Txt } from '@motion-canvas/2d';
import * as m from '@motion-canvas/core';
import { Vector2, createRef, createSignal, all, any, chain, sequence, loop, waitFor, makeRef } from '@motion-canvas/core';
import * as v from './../../motioncanvas/vectors.mjs';
import * as pos from './../../motioncanvas/positioning.mjs';
var RED = "#ff6470";
var scene_function = function* (view) {
view.fill("#656565");
const col_a1 = createRef();
const col_b2 = createRef();
const row_a3 = createRef();
view.add(<Layout layout={true} gap={10} y={-200} padding={10} width={440} height={240}><Rect ref={col_a1} grow={1} fill="#242424" radius={4}></Rect><Layout gap={10} direction="column" grow={3}><Rect ref={row_a3} grow={8} fill={RED} radius={4} stroke="#fff" lineWidth={4} margin={2}><Circle layout={false} width={20} height={20} fill="#fff"></Circle></Rect><Rect grow={2} fill="#242424" radius={4}></Rect></Layout><Rect ref={col_b2} grow={3} fill="#242424" radius={4}></Rect></Layout>);
(yield* all(col_b2().grow(1, 0.8), col_a1().grow(2, 0.8)));
(yield* row_a3().grow(1, 0.8));
(yield* all(col_b2().grow(3, 0.8), col_a1().grow(1, 0.8)));
(yield* row_a3().grow(8, 0.8));
const group4 = createRef();
view.add(<Layout layout={true} direction="column" width={200} y={100} gap={10}><Node opacity={0.1} ref={group4}><Rect height={50} fill="#ff6470"></Rect><Rect height={50} fill="#ff6470"></Rect></Node><Rect height={50} fill="#ff6470"></Rect><Txt fontSize={20}>3 times (blocks)</Txt></Layout>);
(yield* m.loopFor(3, (function () {
return group4().opacity(0.1, 0.5).to(1, 0.5);

})));
const group5 = createRef();
view.add(<Layout layout={true} direction="column" width={200} x={300} y={100} gap={10}><Node opacity={0.1} ref={group5}><Rect height={50} fill="#ff6470"></Rect><Rect height={50} fill="#ff6470"></Rect></Node><Rect height={50} fill="#ff6470"></Rect><Txt fontSize={20}>Loop (does'nt block)</Txt></Layout>);
(yield m.loop((function () {
return group5().opacity(0.1, 0.5).to(1, 0.5);

})));
const rect6 = createRef();
view.add(<><Rect ref={rect6} x={-400} y={100} width={200} height={100} rotation={-10} fill="#333333"></Rect><Rect size={50} fill="#e6a700" rotation={(function () {
return rect6().rotation();

})} right={pos.at_left(rect6)}></Rect><Rect size={100} fill="#e13238" rotation={10} bottomLeft={pos.at_bottom_right(rect6)}></Rect></>);
return (yield* rect6().rotation(10, 1).back(1).to(10, 1).to(-10, 1).to(10, 1).to(-10, 1));

};
var default$ = makeScene2D(scene_function);

export { RED, scene_function }
export default default$
