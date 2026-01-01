import * as squint_core from 'squint-cljs/core.js';
import { Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import * as core from '@motion-canvas/core';
import { Color, all, beginSlide, cancel, createRef, createSignal, easeInOutCubic } from '@motion-canvas/core';
var YELLOW = "#FFC66D";
var RED = "#FF6470";
var GREEN = "#99C47A";
var BLUE = "#68ABDF";
var arr = [1, 2, 3];
arr.push(4);
arr;
var main_scene = function* (view) {
const backdrop1 = createRef();
const title2 = createRef();
const rotation3 = createSignal(0);
const rotationScale4 = createSignal(0);
view.fontFamily("'JetBrains Mono', monospace").fontWeight(700).fontSize(256);
view.add(<Rect cache={true} ref={backdrop1} width="50%" height="50%" fill={RED} radius={40} smoothCorners={true} rotation={(function () {
return (rotation3() * rotationScale4());

})}><Txt ref={title2} scale={0.5} compositeOperation="destination-out" rotation={(function () {
return (-1 * rotation3() * rotationScale4());

})}>START</Txt></Rect>);
(yield* beginSlide("start"));
(yield* all(backdrop1().fill(GREEN, 0.6, easeInOutCubic, Color.createLerp("lab")), backdrop1().size.x("60%", 0.6), title2().text("CONTENT", 0.6)));
(yield* beginSlide("content"));
const loopTask5 = (yield core.loop(Infinity, (function () {
return rotation3(-5, 1).to(5, 1);

})));
(yield* all(backdrop1().fill(BLUE, 0.6, easeInOutCubic, Color.createLerp("lab")), backdrop1().size.x("70%", 0.6), title2().text("ANIMATION", 0.6), rotationScale4(1, 0.6)));
(yield* beginSlide("animation"));
(yield* all(backdrop1().fill(YELLOW, 0.6, easeInOutCubic, Color.createLerp("lab")), backdrop1().size.x("50%", 0.6), title2().text("FINISH", 0.6), rotationScale4(0, 0.6)));
cancel(loopTask5);
return (yield* beginSlide("finish"));

};
var default$ = makeScene2D(main_scene);

export { YELLOW, RED, GREEN, BLUE, arr, main_scene }
export default default$
