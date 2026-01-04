import * as squint_core from 'squint-cljs/core.js';
var anim = (() => {
const f70 = (function (var_args) {
const args711 = [];
const len__23050__auto__2 = arguments.length;
let i723 = 0;
while(true){
if ((i723 < len__23050__auto__2)) {
args711.push((arguments[i723]));
let G__4 = (i723 + 1);
i723 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args711.length)) ? (args711.slice(2)) : (null));
return f70.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f70.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), body)));

});
f70.cljs$lang$maxFixedArity = 2;
return f70;

})();
var defscene = (() => {
const f74 = (function (var_args) {
const args751 = [];
const len__23050__auto__2 = arguments.length;
let i763 = 0;
while(true){
if ((i763 < len__23050__auto__2)) {
args751.push((arguments[i763]));
let G__4 = (i763 + 1);
i763 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args751.length)) ? (args751.slice(4)) : (null));
return f74.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f74.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, name, args, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("defn")), squint_core.list(squint_core.with_meta(name, ({"gen": true}))), squint_core.list(args), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("def")), squint_core.list(cljs.core.symbol("default")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("makeScene2D")), squint_core.list(name))))))))))));

});
f74.cljs$lang$maxFixedArity = 4;
return f74;

})();
var anim_all = (() => {
const f78 = (function (var_args) {
const args791 = [];
const len__23050__auto__2 = arguments.length;
let i803 = 0;
while(true){
if ((i803 < len__23050__auto__2)) {
args791.push((arguments[i803]));
let G__4 = (i803 + 1);
i803 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args791.length)) ? (args791.slice(2)) : (null));
return f78.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f78.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("all")), animations)))))));

});
f78.cljs$lang$maxFixedArity = 2;
return f78;

})();
var anim_any = (() => {
const f82 = (function (var_args) {
const args831 = [];
const len__23050__auto__2 = arguments.length;
let i843 = 0;
while(true){
if ((i843 < len__23050__auto__2)) {
args831.push((arguments[i843]));
let G__4 = (i843 + 1);
i843 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args831.length)) ? (args831.slice(2)) : (null));
return f82.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f82.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("any")), animations)))))));

});
f82.cljs$lang$maxFixedArity = 2;
return f82;

})();
var anim_seq = (() => {
const f86 = (function (var_args) {
const args871 = [];
const len__23050__auto__2 = arguments.length;
let i883 = 0;
while(true){
if ((i883 < len__23050__auto__2)) {
args871.push((arguments[i883]));
let G__4 = (i883 + 1);
i883 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args871.length)) ? (args871.slice(2)) : (null));
return f86.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f86.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.map((function (anim) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(anim))));

}), animations))));

});
f86.cljs$lang$maxFixedArity = 2;
return f86;

})();
var anim_chain = (() => {
const f90 = (function (var_args) {
const args911 = [];
const len__23050__auto__2 = arguments.length;
let i923 = 0;
while(true){
if ((i923 < len__23050__auto__2)) {
args911.push((arguments[i923]));
let G__4 = (i923 + 1);
i923 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args911.length)) ? (args911.slice(2)) : (null));
return f90.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f90.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, animations) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("chain")), animations)))))));

});
f90.cljs$lang$maxFixedArity = 2;
return f90;

})();
var play_and_restore = (() => {
const f94 = (function (var_args) {
const args951 = [];
const len__23050__auto__2 = arguments.length;
let i963 = 0;
while(true){
if ((i963 < len__23050__auto__2)) {
args951.push((arguments[i963]));
let G__4 = (i963 + 1);
i963 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args951.length)) ? (args951.slice(4)) : (null));
return f94.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f94.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, node_expr, duration, body) {
const node_sym6 = gensym("node");
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(node_sym6), squint_core.list(node_expr)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".save")), squint_core.list(node_sym6))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(node_sym6)))))), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("anim")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".restore")), squint_core.list(node_sym6), squint_core.list(duration))))))))))));

});
f94.cljs$lang$maxFixedArity = 4;
return f94;

})();
var wait_for = function (_AMPERSAND_form, _AMPERSAND_env, secs) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("waitFor")), squint_core.list(secs))))))));

};
var anim_delay = (() => {
const f98 = (function (var_args) {
const args991 = [];
const len__23050__auto__2 = arguments.length;
let i1003 = 0;
while(true){
if ((i1003 < len__23050__auto__2)) {
args991.push((arguments[i1003]));
let G__4 = (i1003 + 1);
i1003 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((3 < args991.length)) ? (args991.slice(3)) : (null));
return f98.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f98.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, secs, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/delay")), squint_core.list(secs), body)))))));

});
f98.cljs$lang$maxFixedArity = 3;
return f98;

})();
var anim_seq = function (_AMPERSAND_form, _AMPERSAND_env, secs, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("apply")), squint_core.list(cljs.core.symbol("sequence")), squint_core.list(secs), squint_core.list(body))))))));

};
var add_node = (() => {
const f102 = (function (var_args) {
const args1031 = [];
const len__23050__auto__2 = arguments.length;
let i1043 = 0;
while(true){
if ((i1043 < len__23050__auto__2)) {
args1031.push((arguments[i1043]));
let G__4 = (i1043 + 1);
i1043 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((2 < args1031.length)) ? (args1031.slice(2)) : (null));
return f102.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), argseq__23220__auto__5);

});
f102.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".add")), squint_core.list(cljs.core.symbol("view")), body)));

});
f102.cljs$lang$maxFixedArity = 2;
return f102;

})();
var add_n_nodes = (() => {
const f106 = (function (var_args) {
const args1071 = [];
const len__23050__auto__2 = arguments.length;
let i1083 = 0;
while(true){
if ((i1083 < len__23050__auto__2)) {
args1071.push((arguments[i1083]));
let G__4 = (i1083 + 1);
i1083 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((3 < args1071.length)) ? (args1071.slice(3)) : (null));
return f106.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f106.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, count, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".add")), squint_core.list(cljs.core.symbol("view")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".map")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/range")), squint_core.list(count))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("i"))))))), body)))))))))));

});
f106.cljs$lang$maxFixedArity = 3;
return f106;

})();
var anim_all_nodes = (() => {
const f110 = (function (var_args) {
const args1111 = [];
const len__23050__auto__2 = arguments.length;
let i1123 = 0;
while(true){
if ((i1123 < len__23050__auto__2)) {
args1111.push((arguments[i1123]));
let G__4 = (i1123 + 1);
i1123 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((3 < args1111.length)) ? (args1111.slice(3)) : (null));
return f110.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f110.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, nodes, body) {
const node_sym6 = gensym("node");
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("apply")), squint_core.list(cljs.core.symbol("m/all")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol(".map")), squint_core.list(nodes), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(node_sym6)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("let")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(node_sym6)))))), body)))))))))))))))))));

});
f110.cljs$lang$maxFixedArity = 3;
return f110;

})();
var spawn_anims = (() => {
const f114 = (function (var_args) {
const args1151 = [];
const len__23050__auto__2 = arguments.length;
let i1163 = 0;
while(true){
if ((i1163 < len__23050__auto__2)) {
args1151.push((arguments[i1163]));
let G__4 = (i1163 + 1);
i1163 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((4 < args1151.length)) ? (args1151.slice(4)) : (null));
return f114.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), argseq__23220__auto__5);

});
f114.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, nodes, total_duration, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("doseq")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(nodes)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js*")), squint_core.list("yield ~{}"), body)))))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("waitFor")), squint_core.list(total_duration))))))))))));

});
f114.cljs$lang$maxFixedArity = 4;
return f114;

})();
var spawn_stagger_anims = (() => {
const f118 = (function (var_args) {
const args1191 = [];
const len__23050__auto__2 = arguments.length;
let i1203 = 0;
while(true){
if ((i1203 < len__23050__auto__2)) {
args1191.push((arguments[i1203]));
let G__4 = (i1203 + 1);
i1203 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((5 < args1191.length)) ? (args1191.slice(5)) : (null));
return f118.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), (arguments[3]), (arguments[4]), argseq__23220__auto__5);

});
f118.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, nodes, stagger_delay, total_duration, body) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("do")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("doseq")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("it")), squint_core.list(nodes)))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js*")), squint_core.list("yield ~{}"), body)))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/waitFor")), squint_core.list(stagger_delay))))))))))))), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("js-yield*")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("m/waitFor")), squint_core.list(total_duration))))))))))));

});
f118.cljs$lang$maxFixedArity = 5;
return f118;

})();
var loop_anim = (() => {
const f122 = (function (var_args) {
const args1231 = [];
const len__23050__auto__2 = arguments.length;
let i1243 = 0;
while(true){
if ((i1243 < len__23050__auto__2)) {
args1231.push((arguments[i1243]));
let G__4 = (i1243 + 1);
i1243 = G__4;
continue;
};break;
}
;
const argseq__23220__auto__5 = (((3 < args1231.length)) ? (args1231.slice(3)) : (null));
return f122.cljs$core$IFn$_invoke$arity$variadic((arguments[0]), (arguments[1]), (arguments[2]), argseq__23220__auto__5);

});
f122.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form, _AMPERSAND_env, times, body) {
if ((times === "infinite")) {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("anim")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("loop")), squint_core.list(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("fn")), squint_core.list(squint_core.with_meta(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat()))), squint_core.apply(clojure.core.array_map, clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list("gen"), squint_core.list(true), squint_core.list("async"), squint_core.list(true))))))), body)))))))))))} else {
return clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("dotimes")), squint_core.list(squint_core.vec(clojure.core.sequence(squint_core.seq(squint_core.concat(squint_core.list(cljs.core.symbol("___69__auto__")), squint_core.list(times)))))), body)))};

});
f122.cljs$lang$maxFixedArity = 3;
return f122;

})();

export { wait_for, defscene, anim_delay, anim_all, anim_seq, loop_anim, anim, add_n_nodes, add_node, spawn_anims, anim_all_nodes, anim_chain, anim_any, spawn_stagger_anims, play_and_restore }
