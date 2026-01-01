import * as squint_core from 'squint-cljs/core.js';
import { Circle, Rect, makeScene2D } from '@motion-canvas/2d';
import { createRef, all } from '@motion-canvas/core';
var macro_scene = function* (view) {
const circle1 = createRef();
const rect2 = createRef();
view.add(<Circle ref={circle1} size={320} fill="lightseagreen"></Circle>);
view.add(<Rect ref={rect2} width={200} height={100} radius={20} fill="coral"></Rect>);
(yield* circle1().scale(2, 2).to(1, 2));
const node3 = circle1();
node3.save();
(yield* node3.scale(2, 1));
(yield* all(node3.position.x(300, 1), node3.scale(2, 1)));
(yield* node3.restore(1));
const node854 = rect2();
node854.save();
(yield* all(node854.rotation(45, 1), node854.opacity(0.5, 1)));
(yield* node854.restore(1));
(yield* all(circle1().scale(2, 1), rect2().opacity(1, 1), rect2().rotation(360, 1)));
(yield* circle1().opacity(1, 1));
return (yield* circle1().scale(1, 1));

};
var default$ = makeScene2D(macro_scene);

export { macro_scene }
export default default$
