import * as squint_core from 'squint-cljs/core.js';
var anim = (() => {
const f1 = (function (var_args) {
const args21 = [];
const len__23050__auto__2 = arguments.length;
let i33 = 0;
while(true){
if ((i33 < len__23050__auto__2)) {
args21.push((arguments[i33]));
let G__4 = (i33 + 1);
i33 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args21.length)) ? (args21.slice(2)) : (null));
return f1.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), body)));

});
f1.cljs$lang$maxFixedArity = 2;
return f1;

})();
var defscene = (() => {
const f5 = (function (var_args) {
const args61 = [];
const len__23050__auto__2 = arguments.length;
let i73 = 0;
while(true){
if ((i73 < len__23050__auto__2)) {
args61.push((arguments[i73]));
let G__4 = (i73 + 1);
i73 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args61.length)) ? (args61.slice(4)) : (null));
return f5.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f5.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, name, args, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("defn")), squint_core.list(squint_core.with_meta(name, ({"gen": true}))), squint_core.list(args), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("def")), squint_core.list(cljs.core.symbol("default")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("makeScene2D")), squint_core.list(name))))))))))));

});
f5.cljs$lang$maxFixedArity = 4;
return f5;

})();
var anim_seq = (() => {
const f9 = (function (var_args) {
const args101 = [];
const len__23050__auto__2 = arguments.length;
let i113 = 0;
while(true){
if ((i113 < len__23050__auto__2)) {
args101.push((arguments[i113]));
let G__4 = (i113 + 1);
i113 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args101.length)) ? (args101.slice(2)) : (null));
return f9.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f9.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.map((function (anim) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(anim))));

}), animations))));

});
f9.cljs$lang$maxFixedArity = 2;
return f9;

})();
var anim_all = (() => {
const f13 = (function (var_args) {
const args141 = [];
const len__23050__auto__2 = arguments.length;
let i153 = 0;
while(true){
if ((i153 < len__23050__auto__2)) {
args141.push((arguments[i153]));
let G__4 = (i153 + 1);
i153 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args141.length)) ? (args141.slice(2)) : (null));
return f13.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f13.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("all")), animations)))))));

});
f13.cljs$lang$maxFixedArity = 2;
return f13;

})();
var _GT__LT__LT_ = (() => {
const f17 = (function (var_args) {
const args181 = [];
const len__23050__auto__2 = arguments.length;
let i193 = 0;
while(true){
if ((i193 < len__23050__auto__2)) {
args181.push((arguments[i193]));
let G__4 = (i193 + 1);
i193 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args181.length)) ? (args181.slice(4)) : (null));
return f17.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f17.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, node_expr, duration, body) {
const node_sym6 = gensym("node");
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(node_sym6), squint_core.list(node_expr)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".save")), squint_core.list(node_sym6))))), squint_core.map((function (anim_form) {
const vec__710 = anim_form;
const seq__811 = squint_core.seq(vec__710);
const first__912 = squint_core.first(seq__811);
const seq__813 = squint_core.next(seq__811);
const anim_type14 = first__912;
const ops15 = seq__813;
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(anim_type14), squint_core.map((function (op) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("->")), squint_core.list(node_sym6), squint_core.list(op))));

}), ops15))));

}), body), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("anim")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".restore")), squint_core.list(node_sym6), squint_core.list(duration))))))))))));

});
f17.cljs$lang$maxFixedArity = 4;
return f17;

})();

export { anim, defscene, anim_seq, anim_all, _GT__LT__LT_ }
