import * as squint_core from 'squint-cljs/core.js';
import * as d from '@motion-canvas/2d';
import { Circle, Rect, makeScene2D, Layout, Txt } from '@motion-canvas/2d';
import * as m from '@motion-canvas/core';
import { createRef, all, any, chain, sequence, loop, waitFor, makeRef } from '@motion-canvas/core';
var node_hierarchy = function* (view) {
view.fill("#222");
view.add(<Layout layout={true} gap={20} alignItems="center"><Txt fill="#fff">Example</Txt><Rect fill="#f3303f" padding={20} gap={20}><Txt fill="#fff">42</Txt><Circle size={60} fill="#FFC66D"></Circle><Txt fill="#fff">!!!</Txt></Rect></Layout>);
const texts1 = view.findAll((function (node) {
const c__23185__auto__2 = Txt;
const x__23186__auto__3 = node;
const ret__23187__auto__4 = (x__23186__auto__3 instanceof c__23185__auto__2);
return ret__23187__auto__4;

}));
(yield* squint_core.apply(m.all, texts1.map((function (node239) {
const it5 = node239;
return it5.fill("orange", 1).back(1);

}))));
const text6 = view.findFirst((function (node) {
const c__23185__auto__7 = Txt;
const x__23186__auto__8 = node;
const ret__23187__auto__9 = (x__23186__auto__8 instanceof c__23185__auto__7);
return ret__23187__auto__9;

}));
(yield* text6.fill("green", 1).back(1));
const text10 = view.findLast((function (node) {
const c__23185__auto__11 = Txt;
const x__23186__auto__12 = node;
const ret__23187__auto__13 = (x__23186__auto__12 instanceof c__23185__auto__11);
return ret__23187__auto__13;

}));
return (yield* text10.fill("red", 1).back(1));

};
var default$ = makeScene2D(node_hierarchy);

export { node_hierarchy }
export default default$
