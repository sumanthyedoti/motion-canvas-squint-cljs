import * as squint_core from 'squint-cljs/core.js';
var anim = (() => {
const f25 = (function (var_args) {
const args261 = [];
const len__23050__auto__2 = arguments.length;
let i273 = 0;
while(true){
if ((i273 < len__23050__auto__2)) {
args261.push((arguments[i273]));
let G__4 = (i273 + 1);
i273 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args261.length)) ? (args261.slice(2)) : (null));
return f25.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f25.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), body)));

});
f25.cljs$lang$maxFixedArity = 2;
return f25;

})();
var defscene = (() => {
const f29 = (function (var_args) {
const args301 = [];
const len__23050__auto__2 = arguments.length;
let i313 = 0;
while(true){
if ((i313 < len__23050__auto__2)) {
args301.push((arguments[i313]));
let G__4 = (i313 + 1);
i313 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args301.length)) ? (args301.slice(4)) : (null));
return f29.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f29.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, name, args, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("defn")), squint_core.list(squint_core.with_meta(name, ({"async": true, "gen": true}))), squint_core.list(args), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("def")), squint_core.list(cljs.core.symbol("default")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("makeScene2D")), squint_core.list(name))))))))))));

});
f29.cljs$lang$maxFixedArity = 4;
return f29;

})();
var with_node = (() => {
const f33 = (function (var_args) {
const args341 = [];
const len__23050__auto__2 = arguments.length;
let i353 = 0;
while(true){
if ((i353 < len__23050__auto__2)) {
args341.push((arguments[i353]));
let G__4 = (i353 + 1);
i353 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((3 < args341.length)) ? (args341.slice(3)) : (null));
return f33.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f33.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, node_expr, operations) {
const node_sym6 = gensym("node");
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(node_sym6), squint_core.list(node_expr)))))), squint_core.map((function (op) {
if (squint_core.truth_((() => {
const and__23248__auto__7 = squint_core.list_QMARK_(op);
if (squint_core.truth_(and__23248__auto__7)) {
return symbol_QMARK_(squint_core.first(op))} else {
return and__23248__auto__7};

})())) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(squint_core.first(op)), squint_core.list(node_sym6), squint_core.rest(op))))} else {
return op};

}), operations), squint_core.list(node_sym6))));

});
f33.cljs$lang$maxFixedArity = 3;
return f33;

})();
var anim_seq = (() => {
const f37 = (function (var_args) {
const args381 = [];
const len__23050__auto__2 = arguments.length;
let i393 = 0;
while(true){
if ((i393 < len__23050__auto__2)) {
args381.push((arguments[i393]));
let G__4 = (i393 + 1);
i393 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args381.length)) ? (args381.slice(2)) : (null));
return f37.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f37.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.map((function (anim) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(anim))));

}), animations))));

});
f37.cljs$lang$maxFixedArity = 2;
return f37;

})();
var anim_all = (() => {
const f41 = (function (var_args) {
const args421 = [];
const len__23050__auto__2 = arguments.length;
let i433 = 0;
while(true){
if ((i433 < len__23050__auto__2)) {
args421.push((arguments[i433]));
let G__4 = (i433 + 1);
i433 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args421.length)) ? (args421.slice(2)) : (null));
return f41.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f41.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("all")), animations)))))));

});
f41.cljs$lang$maxFixedArity = 2;
return f41;

})();
var deftween = (() => {
const f45 = (function (var_args) {
const args461 = [];
const len__23050__auto__2 = arguments.length;
let i473 = 0;
while(true){
if ((i473 < len__23050__auto__2)) {
args461.push((arguments[i473]));
let G__4 = (i473 + 1);
i473 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((5 < args461.length)) ? (args461.slice(5)) : (null));
return f45.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), (arguments[4]), argseq__23220__auto__5);

});
f45.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, name, node_params, value_params, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("defn")), squint_core.list(name), squint_core.list(node_params), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("tween")), squint_core.list(2), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(value_params), body)))))))))));

});
f45.cljs$lang$maxFixedArity = 5;
return f45;

})();

export { anim, defscene, with_node, anim_seq, anim_all, deftween }
