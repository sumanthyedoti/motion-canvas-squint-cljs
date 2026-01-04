import * as squint_core from 'squint-cljs/core.js';
import { Vector2 } from '@motion-canvas/core';
var find_all = (() => {
const f247 = (function (var_args) {
const args2481 = [];
const len__23050__auto__2 = arguments.length;
let i2493 = 0;
while(true){
if ((i2493 < len__23050__auto__2)) {
args2481.push((arguments[i2493]));
let G__4 = (i2493 + 1);
i2493 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args2481.length)) ? (args2481.slice(2)) : (null));
return f247.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f247.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, predicate_body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".findAll")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("node"))))))), predicate_body)))))));

});
f247.cljs$lang$maxFixedArity = 2;
return f247;

})();
var find_first = (() => {
const f251 = (function (var_args) {
const args2521 = [];
const len__23050__auto__2 = arguments.length;
let i2533 = 0;
while(true){
if ((i2533 < len__23050__auto__2)) {
args2521.push((arguments[i2533]));
let G__4 = (i2533 + 1);
i2533 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args2521.length)) ? (args2521.slice(2)) : (null));
return f251.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f251.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, predicate_body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".findFirst")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("node"))))))), predicate_body)))))));

});
f251.cljs$lang$maxFixedArity = 2;
return f251;

})();
var find_last = (() => {
const f255 = (function (var_args) {
const args2561 = [];
const len__23050__auto__2 = arguments.length;
let i2573 = 0;
while(true){
if ((i2573 < len__23050__auto__2)) {
args2561.push((arguments[i2573]));
let G__4 = (i2573 + 1);
i2573 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args2561.length)) ? (args2561.slice(2)) : (null));
return f255.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f255.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, predicate_body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".findLast")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("node"))))))), predicate_body)))))));

});
f255.cljs$lang$maxFixedArity = 2;
return f255;

})();

export { find_all, find_first, find_last }
