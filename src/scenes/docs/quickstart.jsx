import * as squint_core from 'squint-cljs/core.js';
import { Circle, Rect, makeScene2D } from '@motion-canvas/2d';
import { createRef, all } from '@motion-canvas/core';
var quickstart = function* (view) {
const circle1 = createRef();
view.add(<Circle ref={circle1} x={-300} size={140} fill="#e13238"></Circle>);
return (yield* all(circle1().position.x(300, 1).to(-300, 1), circle1().fill("#e6a700", 1).to("#e13238", 1)));

};
var default$ = makeScene2D(quickstart);

export { quickstart }
export default default$
