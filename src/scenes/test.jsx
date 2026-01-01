import * as squint_core from 'squint-cljs/core.js';
import { Circle, makeScene2D } from '@motion-canvas/2d';
import { createRef } from '@motion-canvas/core';
var example_scene = function* (view) {
const circle1 = createRef();
view.add(<Circle ref={circle1} size={320} fill="lightseagreen"></Circle>);
return (yield* circle1().scale(2, 2).to(1, 2));

};
var default$ = makeScene2D(example_scene);

export { example_scene }
export default default$
