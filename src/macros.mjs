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
var anim_all = (() => {
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
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("all")), animations)))))));

});
f9.cljs$lang$maxFixedArity = 2;
return f9;

})();
var anim_any = (() => {
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
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("any")), animations)))))));

});
f13.cljs$lang$maxFixedArity = 2;
return f13;

})();
var anim_seq = (() => {
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
const argseq__23220__auto__5 = (((2 < args181.length)) ? (args181.slice(2)) : (null));
return f17.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f17.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.map((function (anim) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(anim))));

}), animations))));

});
f17.cljs$lang$maxFixedArity = 2;
return f17;

})();
var anim_chain = (() => {
const f21 = (function (var_args) {
const args221 = [];
const len__23050__auto__2 = arguments.length;
let i233 = 0;
while(true){
if ((i233 < len__23050__auto__2)) {
args221.push((arguments[i233]));
let G__4 = (i233 + 1);
i233 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args221.length)) ? (args221.slice(2)) : (null));
return f21.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f21.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("chain")), animations)))))));

});
f21.cljs$lang$maxFixedArity = 2;
return f21;

})();
var play_and_restore = (() => {
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
const argseq__23220__auto__5 = (((4 < args261.length)) ? (args261.slice(4)) : (null));
return f25.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f25.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, node_expr, duration, body) {
const node_sym6 = gensym("node");
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(node_sym6), squint_core.list(node_expr)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".save")), squint_core.list(node_sym6))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(node_sym6)))))), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("anim")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".restore")), squint_core.list(node_sym6), squint_core.list(duration))))))))))));

});
f25.cljs$lang$maxFixedArity = 4;
return f25;

})();
var wait_for = function (_AMPERSAND_form, _AMPERSAND_env, secs) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("waitFor")), squint_core.list(secs))))))));

};
var anim_delay = (() => {
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
const argseq__23220__auto__5 = (((3 < args301.length)) ? (args301.slice(3)) : (null));
return f29.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f29.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, secs, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/delay")), squint_core.list(secs), body)))))));

});
f29.cljs$lang$maxFixedArity = 3;
return f29;

})();
var anim_seq = function (_AMPERSAND_form, _AMPERSAND_env, secs, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("apply")), squint_core.list(cljs.core.symbol("sequence")), squint_core.list(secs), squint_core.list(body))))))));

};
var add_node = (() => {
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
const argseq__23220__auto__5 = (((2 < args341.length)) ? (args341.slice(2)) : (null));
return f33.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f33.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".add")), squint_core.list(cljs.core.symbol("view")), body)));

});
f33.cljs$lang$maxFixedArity = 2;
return f33;

})();
var add_n_nodes = (() => {
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
const argseq__23220__auto__5 = (((3 < args381.length)) ? (args381.slice(3)) : (null));
return f37.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f37.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, count, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".add")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".map")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/range")), squint_core.list(count))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("i"))))))), body)))))))))));

});
f37.cljs$lang$maxFixedArity = 3;
return f37;

})();
var anim_all_nodes = (() => {
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
const argseq__23220__auto__5 = (((3 < args421.length)) ? (args421.slice(3)) : (null));
return f41.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f41.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, nodes, body) {
const node_sym6 = gensym("node");
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("apply")), squint_core.list(cljs.core.symbol("m/all")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".map")), squint_core.list(nodes), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(node_sym6)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(node_sym6)))))), body)))))))))))))))))));

});
f41.cljs$lang$maxFixedArity = 3;
return f41;

})();
var spawn_anims = (() => {
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
const argseq__23220__auto__5 = (((4 < args461.length)) ? (args461.slice(4)) : (null));
return f45.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f45.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, nodes, total_duration, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("doseq")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(nodes)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js*")), squint_core.list("yield ~{}"), body)))))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("waitFor")), squint_core.list(total_duration))))))))))));

});
f45.cljs$lang$maxFixedArity = 4;
return f45;

})();
var spawn_stagger_anims = (() => {
const f49 = (function (var_args) {
const args501 = [];
const len__23050__auto__2 = arguments.length;
let i513 = 0;
while(true){
if ((i513 < len__23050__auto__2)) {
args501.push((arguments[i513]));
let G__4 = (i513 + 1);
i513 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((5 < args501.length)) ? (args501.slice(5)) : (null));
return f49.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), (arguments[4]), argseq__23220__auto__5);

});
f49.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, nodes, stagger_delay, total_duration, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("doseq")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(nodes)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js*")), squint_core.list("yield ~{}"), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/waitFor")), squint_core.list(stagger_delay))))))))))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/waitFor")), squint_core.list(total_duration))))))))))));

});
f49.cljs$lang$maxFixedArity = 5;
return f49;

})();
var anim_repeat = (() => {
const f53 = (function (var_args) {
const args541 = [];
const len__23050__auto__2 = arguments.length;
let i553 = 0;
while(true){
if ((i553 < len__23050__auto__2)) {
args541.push((arguments[i553]));
let G__4 = (i553 + 1);
i553 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((3 < args541.length)) ? (args541.slice(3)) : (null));
return f53.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f53.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, times, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("anim")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/loopFor")), squint_core.list(times), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat())))), body)))))))))));

});
f53.cljs$lang$maxFixedArity = 3;
return f53;

})();
var anim_loop = (() => {
const f57 = (function (var_args) {
const args581 = [];
const len__23050__auto__2 = arguments.length;
let i593 = 0;
while(true){
if ((i593 < len__23050__auto__2)) {
args581.push((arguments[i593]));
let G__4 = (i593 + 1);
i593 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args581.length)) ? (args581.slice(2)) : (null));
return f57.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f57.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/loop")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat())))), body)))))))))));

});
f57.cljs$lang$maxFixedArity = 2;
return f57;

})();
var find_all = (() => {
const f61 = (function (var_args) {
const args621 = [];
const len__23050__auto__2 = arguments.length;
let i633 = 0;
while(true){
if ((i633 < len__23050__auto__2)) {
args621.push((arguments[i633]));
let G__4 = (i633 + 1);
i633 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args621.length)) ? (args621.slice(2)) : (null));
return f61.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f61.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, predicate_body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".findAll")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("node"))))))), predicate_body)))))));

});
f61.cljs$lang$maxFixedArity = 2;
return f61;

})();
var find_first = (() => {
const f65 = (function (var_args) {
const args661 = [];
const len__23050__auto__2 = arguments.length;
let i673 = 0;
while(true){
if ((i673 < len__23050__auto__2)) {
args661.push((arguments[i673]));
let G__4 = (i673 + 1);
i673 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args661.length)) ? (args661.slice(2)) : (null));
return f65.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f65.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, predicate_body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".findFirst")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("node"))))))), predicate_body)))))));

});
f65.cljs$lang$maxFixedArity = 2;
return f65;

})();
var find_last = (() => {
const f69 = (function (var_args) {
const args701 = [];
const len__23050__auto__2 = arguments.length;
let i713 = 0;
while(true){
if ((i713 < len__23050__auto__2)) {
args701.push((arguments[i713]));
let G__4 = (i713 + 1);
i713 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args701.length)) ? (args701.slice(2)) : (null));
return f69.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f69.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, predicate_body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".findLast")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("node"))))))), predicate_body)))))));

});
f69.cljs$lang$maxFixedArity = 2;
return f69;

})();

export { find_first, wait_for, defscene, anim_delay, anim_all, anim_seq, anim_repeat, anim, add_n_nodes, add_node, spawn_anims, anim_all_nodes, find_all, anim_chain, anim_any, spawn_stagger_anims, play_and_restore, anim_loop, find_last }
