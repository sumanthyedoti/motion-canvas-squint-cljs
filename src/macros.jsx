import * as squint_core from 'squint-cljs/core.js';
var anim = (() => {
const f1055 = (function (var_args) {
const args10561 = [];
const len__23050__auto__2 = arguments.length;
let i10573 = 0;
while(true){
if ((i10573 < len__23050__auto__2)) {
args10561.push((arguments[i10573]));
let G__4 = (i10573 + 1);
i10573 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args10561.length)) ? (args10561.slice(2)) : (null));
return f1055.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f1055.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), body)));

});
f1055.cljs$lang$maxFixedArity = 2;
return f1055;

})();
var defscene = (() => {
const f1059 = (function (var_args) {
const args10601 = [];
const len__23050__auto__2 = arguments.length;
let i10613 = 0;
while(true){
if ((i10613 < len__23050__auto__2)) {
args10601.push((arguments[i10613]));
let G__4 = (i10613 + 1);
i10613 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args10601.length)) ? (args10601.slice(4)) : (null));
return f1059.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f1059.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, name, args, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("defn")), squint_core.list(squint_core.with_meta(name, ({"gen": true}))), squint_core.list(args), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("def")), squint_core.list(cljs.core.symbol("default")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("makeScene2D")), squint_core.list(name))))))))))));

});
f1059.cljs$lang$maxFixedArity = 4;
return f1059;

})();
var anim_seq = (() => {
const f1063 = (function (var_args) {
const args10641 = [];
const len__23050__auto__2 = arguments.length;
let i10653 = 0;
while(true){
if ((i10653 < len__23050__auto__2)) {
args10641.push((arguments[i10653]));
let G__4 = (i10653 + 1);
i10653 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args10641.length)) ? (args10641.slice(2)) : (null));
return f1063.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f1063.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.map((function (anim) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(anim))));

}), animations))));

});
f1063.cljs$lang$maxFixedArity = 2;
return f1063;

})();
var anim_all = (() => {
const f1067 = (function (var_args) {
const args10681 = [];
const len__23050__auto__2 = arguments.length;
let i10693 = 0;
while(true){
if ((i10693 < len__23050__auto__2)) {
args10681.push((arguments[i10693]));
let G__4 = (i10693 + 1);
i10693 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args10681.length)) ? (args10681.slice(2)) : (null));
return f1067.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f1067.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("all")), animations)))))));

});
f1067.cljs$lang$maxFixedArity = 2;
return f1067;

})();
var anim_any = (() => {
const f1071 = (function (var_args) {
const args10721 = [];
const len__23050__auto__2 = arguments.length;
let i10733 = 0;
while(true){
if ((i10733 < len__23050__auto__2)) {
args10721.push((arguments[i10733]));
let G__4 = (i10733 + 1);
i10733 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args10721.length)) ? (args10721.slice(2)) : (null));
return f1071.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f1071.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("any")), animations)))))));

});
f1071.cljs$lang$maxFixedArity = 2;
return f1071;

})();
var _GT__LT__LT_ = (() => {
const f1075 = (function (var_args) {
const args10761 = [];
const len__23050__auto__2 = arguments.length;
let i10773 = 0;
while(true){
if ((i10773 < len__23050__auto__2)) {
args10761.push((arguments[i10773]));
let G__4 = (i10773 + 1);
i10773 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args10761.length)) ? (args10761.slice(4)) : (null));
return f1075.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f1075.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, node_expr, duration, body) {
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
f1075.cljs$lang$maxFixedArity = 4;
return f1075;

})();
var wait_for = function (_AMPERSAND_form, _AMPERSAND_env, secs) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("waitFor")), squint_core.list(secs))))))));

};

export { anim, defscene, anim_seq, anim_all, anim_any, _GT__LT__LT_, wait_for }
