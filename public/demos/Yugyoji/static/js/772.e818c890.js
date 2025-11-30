/*! For license information please see 772.e818c890.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["772"],{7147:function(t,e,n){n.d(e,{d4:()=>a});var r=n(4825),i=n(2298);function o(t,e){return t===e}function a(t,e,n=o){let s=(0,r.useCallback)(e=>{if(!t)return()=>{};let{unsubscribe:n}=t.subscribe(e);return n},[t]),u=(0,r.useCallback)(()=>t?.getSnapshot(),[t]);return(0,i.useSyncExternalStoreWithSelector)(s,u,u,e,n)}n(112)},8147:function(t,e,n){let r;function i(t,e,n){let r="object"==typeof t,i=r?t:void 0;return{next:(r?t.next:t)?.bind(i),error:(r?t.error:e)?.bind(i),complete:(r?t.complete:n)?.bind(i)}}n.d(e,{a:()=>x});let o=[],{link:a,unlink:s,propagate:u,checkDirty:l,endTracking:c,startTracking:f,shallowPropagate:d}=function({update:t,notify:e,unwatched:n}){let r=0;return{link:function(t,e){let n=e._depsTail;if(void 0!==n&&n.dep===t)return;let i=void 0!==n?n.nextDep:e._deps;if(void 0!==i&&i.dep===t){i.version=r,e._depsTail=i;return}let o=t._subsTail;if(void 0!==o&&o.version===r&&o.sub===e)return;let a=e._depsTail=t._subsTail={version:r,dep:t,sub:e,prevDep:n,nextDep:i,prevSub:o,nextSub:void 0};void 0!==i&&(i.prevDep=a),void 0!==n?n.nextDep=a:e._deps=a,void 0!==o?o.nextSub=a:t._subs=a},unlink:i,propagate:function(t){let n,r=t.nextSub;t:for(;;){let i=t.sub,o=i._flags;if(60&o?12&o?4&o?!(48&o)&&function(t,e){let n=e._depsTail;for(;void 0!==n;){if(n===t)return!0;n=n.prevDep}return!1}(t,i)?(i._flags=40|o,o&=1):o=0:i._flags=-9&o|32:o=0:i._flags=32|o,2&o&&e(i),1&o){let e=i._subs;if(void 0!==e){let i=(t=e).nextSub;void 0!==i&&(n={value:r,prev:n},r=i);continue}}if(void 0!==(t=r)){r=t.nextSub;continue}for(;void 0!==n;)if(t=n.value,n=n.prev,void 0!==t){r=t.nextSub;continue t}break}},checkDirty:function(e,n){let r,i=0;t:for(;;){let a=e.dep,s=a._flags,u=!1;if(16&n._flags)u=!0;else if((17&s)==17){if(t(a)){let t=a._subs;void 0!==t.nextSub&&o(t),u=!0}}else if((33&s)==33){(void 0!==e.nextSub||void 0!==e.prevSub)&&(r={value:e,prev:r}),e=a._deps,n=a,++i;continue}if(!u){let t=e.nextDep;if(void 0!==t){e=t;continue}}for(;i--;){let i=n._subs,a=void 0!==i.nextSub;if(a?(e=r.value,r=r.prev):e=i,u){if(t(n)){a&&o(i),n=e.sub;continue}}else n._flags&=-33;n=e.sub;let s=e.nextDep;if(void 0!==s){e=s;continue t}u=!1}return u}},endTracking:function(t){let e=t._depsTail,n=void 0!==e?e.nextDep:t._deps;for(;void 0!==n;)n=i(n,t);t._flags&=-5},startTracking:function(t){++r,t._depsTail=void 0,t._flags=-57&t._flags|4},shallowPropagate:o};function i(t,e=t.sub){let r=t.dep,o=t.prevDep,a=t.nextDep,s=t.nextSub,u=t.prevSub;return void 0!==a?a.prevDep=o:e._depsTail=o,void 0!==o?o.nextDep=a:e._deps=a,void 0!==s?s.prevSub=u:r._subsTail=u,void 0!==u?u.nextSub=s:void 0===(r._subs=s)&&n(r),a}function o(t){do{let n=t.sub,r=n._flags;(48&r)==32&&(n._flags=16|r,2&r&&e(n))}while(void 0!==(t=t.nextSub))}}({update:t=>t._update(),notify(t){o[h++]=t},unwatched(t){let e=t._deps;if(void 0!==e){t._flags=17;do e=s(e,t);while(void 0!==e)}}}),p=0,h=0;function m(t,e){let n="function"==typeof t,s={_snapshot:n?void 0:t,_subs:void 0,_subsTail:void 0,_flags:0,get:()=>(void 0!==r&&a(s,r),s._snapshot),subscribe(t){var e;let n,o,a=i(t),u={current:!1},d=(e=()=>{s.get(),u.current?a.next?.(s._snapshot):u.current=!0},n=()=>{let t=r;r=o,f(o);try{return e()}finally{r=t,c(o)}},o={_deps:void 0,_depsTail:void 0,_flags:2,notify(){let t=this._flags;16&t||32&t&&l(this._deps,this)?n():32&t&&(this._flags=-33&t)},stop(){f(this),c(this)}},n(),o);return{unsubscribe:()=>{d.stop()}}},_update(i){let o=r,a=e?.compare??Object.is;r=s,f(s);try{let e=s._snapshot,r="function"==typeof i?i(e):void 0===i&&n?t(t=>t.get(),e):i;if(void 0===e||!a(e,r))return s._snapshot=r,!0;return!1}finally{r=o,c(s)}}};return n?Object.assign(s,{_deps:void 0,_depsTail:void 0,_flags:17,get(){let t=this._flags;if(16&t||32&t&&l(s._deps,s)){if(s._update()){let t=s._subs;void 0!==t&&d(t)}}else 32&t&&(s._flags=-33&t);return void 0!==r&&a(s,r),s._snapshot}}):Object.assign(s,{set(t){if(s._update(t)){let t=s._subs;if(void 0!==t){for(u(t),d(t);p<h;){let t=o[p];o[p++]=void 0,t.notify()}p=0,h=0}}}}),s}let g="function"==typeof Symbol&&Symbol.observable||"@@observable",y=new WeakMap;function v(t,e){let n,r=t.getInitialSnapshot(),o=r,a=m(o),s=t=>{if(!n)return;let e=t.type,r=n.get(e);r&&r.forEach(e=>e(t))},u=t.transition,l={get _snapshot(){return a._snapshot},on(t,e){n||(n=new Map);let r=n.get(t);r||(r=new Set,n.set(t,r));let i=e.bind(void 0);return r.add(i),{unsubscribe(){r.delete(i)}}},transition:t.transition,sessionId:Math.random().toString(36).slice(6),send(t){y.get(l)?.forEach(e=>{e.next?.({type:"@xstate.event",event:t,sourceRef:void 0,actorRef:l,rootId:l.sessionId})}),function(t){let[n,r]=u(o,t);for(let i of(o=n,y.get(l)?.forEach(e=>{e.next?.({type:"@xstate.snapshot",event:t,snapshot:n,actorRef:l,rootId:l.sessionId})}),a.set(n),r))"function"==typeof i?i():(e?.[i.type]?.(i),s(i))}(t)},getSnapshot:()=>o,get:()=>a.get(),getInitialSnapshot:()=>r,subscribe:a.subscribe.bind(a),[g](){return this},inspect:t=>{let e=i(t);return y.set(l,y.get(l)??new Set),y.get(l).add(e),e.next?.({type:"@xstate.actor",actorRef:l,rootId:l.sessionId}),e.next?.({type:"@xstate.snapshot",snapshot:r,event:{type:"@xstate.init"},actorRef:l,rootId:l.sessionId}),{unsubscribe:()=>y.get(l)?.delete(e)}},trigger:new Proxy({},{get:(t,e)=>t=>{l.send({...t,type:e})}}),select:(t,e=Object.is)=>m(()=>t(l.get().context),{compare:e})};return l}function x(t){var e;if("transition"in t)return v(t);return v({getInitialSnapshot:()=>({status:"active",context:t.context,output:void 0,error:void 0}),transition:(e=t.on,(t,n)=>{let r=t.context,i=e?.[n.type],o=[],a={emit:new Proxy({},{get:(t,e)=>t=>{o.push({...t,type:e})}}),effect:t=>{o.push(t)}};if(!i)return[t,o];let s=i(r,n,a)??r;return[s===r?t:{...t,context:s},o]})},t.emits)}},1046:function(t,e,n){n.d(e,{d4:()=>a});var r=n(4825);function i(t,e){return t===e}function o(t){return t}function a(t,e=o,n=i){let s,u=(s=(0,r.useRef)(void 0),t=>{let r=e(t);return s.current&&n(s.current,r)?s.current:s.current=r});return(0,r.useSyncExternalStore)((0,r.useCallback)(e=>t.subscribe(e).unsubscribe,[t]),()=>u(t.get()),()=>u(t.get()))}},9005:function(t,e,n){function r(t){return function(e,n){return t.chain(e,function(e){return t.map(n(e),function(){return e})})}}n.d(e,{zN:()=>l,AU:()=>g,k$:()=>y,dv:()=>u});var i,o=n(4997);function a(t){return function(e,n){return t.map(e,function(){return n})}}var s=n(6128),u=s.dv,l=s.zN,c=function(t,e){return(0,o.Fs)(t,d(e))},f="Option",d=function(t){return function(e){return m(e)?u:l(t(e.value))}},p={URI:f,map:c};(0,o.XY)(2,a(p)),a(p);var h={URI:f,map:c,ap:function(t,e){var n;return(0,o.Fs)(t,(n=e,function(t){return m(t)||m(n)?u:l(t.value(n.value))}))},chain:(0,o.XY)(2,function(t,e){return m(t)?u:e(t.value)})};(0,o.XY)(2,function(t,e){return m(t)?e():t}),s.Ru;var m=function(t){return"None"===t._tag},g=function(t,e){return function(n){return m(n)?t():e(n.value)}};r(h),i={URI:f,fromEither:function(t){return"Left"===t._tag?u:l(t.right)}},r(h);var y=function(t){return null==t?u:l(t)};s.FR,s.rb},4853:function(t,e,n){n.d(e,{I3:()=>i});var r=n(4997),i=function(t){return{equals:function(e,n){return e===n||0===t(e,n)},compare:function(e,n){return e===n?0:t(e,n)}}};r.ue},5469:function(t,e,n){n.d(e,{sb:()=>p,Tj:()=>m,x1:()=>g,OZ:()=>v,xW:()=>h,CA:()=>y,di:()=>d});var r=n(6128),i=n(8304),o=n(4853);n(4997);var a=r.rb,s=r.J_,u=(r.Gr,r.d5);r.FR;var l=u,c=r.RT,f=function(t){return 0===t.length},d=function(t){return function(e){return e.length<=1?e:e.slice().sort(t.compare)}},p=function(t){var e=function(e){if(1===e.length)return e;for(var n=[l(e)],r=c(e),i=function(e){n.every(function(n){return!t.equals(n,e)})&&n.push(e)},o=0;o<r.length;o++)i(r[o]);return n};return function(t){return s(t)?e(t):t}},h=function(t){return function(e){return f(e)?t:f(t)?e:e.concat(t)}},m=function(t){return function(e){return e.map(function(e){return t(e)})}},g=function(t){var e;return e=function(e,n){return t(n)},function(t){for(var n=[],i=0;i<t.length;i++){var o=e(i,t[i]);r.Ru(o)&&n.push(o.value)}return n}},y=function(){return{concat:function(t,e){return f(t)?e:f(e)?t:t.concat(e)}}},v=function(t){return(0,o.I3)(function(e,n){for(var r=e.length,o=n.length,a=Math.min(r,o),s=0;s<a;s++){var u=t.compare(e[s],n[s]);if(0!==u)return u}return i._k.compare(r,o)})};r.FR},4997:function(t,e,n){n.d(e,{Fs:()=>s,L3:()=>a,SK:()=>u,XY:()=>l,dY:()=>i,ue:()=>o});var r=function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};function i(t){return function(){return t}}var o=i(!0);function a(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return function(){return e(t.apply(this,arguments))};case 3:return function(){return n(e(t.apply(this,arguments)))};case 4:return function(){return r(n(e(t.apply(this,arguments))))};case 5:return function(){return i(r(n(e(t.apply(this,arguments)))))};case 6:return function(){return o(i(r(n(e(t.apply(this,arguments))))))};case 7:return function(){return a(o(i(r(n(e(t.apply(this,arguments)))))))};case 8:return function(){return s(a(o(i(r(n(e(t.apply(this,arguments))))))))};case 9:return function(){return u(s(a(o(i(r(n(e(t.apply(this,arguments)))))))))}}}function s(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return e(t);case 3:return n(e(t));case 4:return r(n(e(t)));case 5:return i(r(n(e(t))));case 6:return o(i(r(n(e(t)))));case 7:return a(o(i(r(n(e(t))))));case 8:return s(a(o(i(r(n(e(t)))))));case 9:return u(s(a(o(i(r(n(e(t))))))));default:for(var l=arguments[0],c=1;c<arguments.length;c++)l=arguments[c](l);return l}}var u=function(t,e){return e},l=function(t,e){var n="number"==typeof t?function(e){return e.length>=t}:t;return function(){var t=Array.from(arguments);return n(arguments)?e.apply(this,t):function(n){return e.apply(void 0,r([n],t,!1))}}}},6128:function(t,e,n){n.d(e,{FR:()=>p,Gr:()=>u,J_:()=>l,OC:()=>s,RT:()=>f,Ru:()=>i,aO:()=>h,d5:()=>c,dv:()=>o,rb:()=>d,zN:()=>a});var r=function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))},i=function(t){return"Some"===t._tag},o={_tag:"None"},a=function(t){return{_tag:"Some",value:t}},s=function(t){return"Left"===t._tag},u=function(t){return[t]},l=function(t){return t.length>0},c=function(t){return t[0]},f=function(t){return t.slice(1)},d=[],p={};Object.prototype.hasOwnProperty;var h=function(t){return r([t[0]],t.slice(1),!0)}},8304:function(t,e,n){n.d(e,{Eq:()=>r,_k:()=>i});var r={equals:function(t,e){return t===e}},i={equals:r.equals,compare:function(t,e){return t<e?-1:+(t>e)}};r.equals,i.compare},5286:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getApplicativeMonoid=function(t){var e=(0,r.getApplySemigroup)(t);return function(n){return{concat:e(n).concat,empty:t.of(n.empty)}}},e.getApplicativeComposition=function(t,e){var n=(0,o.getFunctorComposition)(t,e).map,a=(0,r.ap)(t,e);return{map:n,of:function(n){return t.of(e.of(n))},ap:function(t,e){return(0,i.pipe)(t,a(e))}}};var r=n(7900),i=n(3166),o=n(8411)},7900:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ap=function(t,e){return function(n){return function(r){return t.ap(t.map(r,function(t){return function(n){return e.ap(t,n)}}),n)}}},e.apFirst=function(t){return function(e){return function(n){return t.ap(t.map(n,function(t){return function(){return t}}),e)}}},e.apSecond=function(t){return function(e){return function(n){return t.ap(t.map(n,function(){return function(t){return t}}),e)}}},e.apS=function(t){return function(e,n){return function(r){return t.ap(t.map(r,function(t){return function(n){var r;return Object.assign({},t,((r={})[e]=n,r))}}),n)}}},e.getApplySemigroup=function(t){return function(e){return{concat:function(n,r){return t.ap(t.map(n,function(t){return function(n){return e.concat(t,n)}}),r)}}}},e.sequenceT=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=e.length,i=(s.has.call(l,r)||(l[r]=u(a.tuple,r-1,[])),l[r]),o=t.map(e[0],i),c=1;c<r;c++)o=t.ap(o,e[c]);return o}},e.sequenceS=function(t){return function(e){for(var n=Object.keys(e),r=n.length,i=function(t){var e=t.length;switch(e){case 1:return function(e){var n;return(n={})[t[0]]=e,n};case 2:return function(e){return function(n){var r;return(r={})[t[0]]=e,r[t[1]]=n,r}};case 3:return function(e){return function(n){return function(r){var i;return(i={})[t[0]]=e,i[t[1]]=n,i[t[2]]=r,i}}};case 4:return function(e){return function(n){return function(r){return function(i){var o;return(o={})[t[0]]=e,o[t[1]]=n,o[t[2]]=r,o[t[3]]=i,o}}}};case 5:return function(e){return function(n){return function(r){return function(i){return function(o){var a;return(a={})[t[0]]=e,a[t[1]]=n,a[t[2]]=r,a[t[3]]=i,a[t[4]]=o,a}}}}};default:return u(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var i={},o=0;o<e;o++)i[t[o]]=n[o];return i},e-1,[])}}(n),o=t.map(e[n[0]],i),a=1;a<r;a++)o=t.ap(o,e[n[a]]);return o}};var a=n(3166),s=o(n(7003));function u(t,e,n){return function(r){for(var i=Array(n.length+1),o=0;o<n.length;o++)i[o]=n[o];return i[n.length]=r,0===e?t.apply(null,i):u(t,e-1,i)}}var l={1:function(t){return[t]},2:function(t){return function(e){return[t,e]}},3:function(t){return function(e){return function(n){return[t,e,n]}}},4:function(t){return function(e){return function(n){return function(r){return[t,e,n,r]}}}},5:function(t){return function(e){return function(n){return function(r){return function(i){return[t,e,n,r,i]}}}}}}},5069:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.chainFirst=function(t){var e=n(t);return function(t){return function(n){return e(n,t)}}},e.tap=n,e.bind=function(t){return function(e,n){return function(r){return t.chain(r,function(r){return t.map(n(r),function(t){var n;return Object.assign({},r,((n={})[e]=t,n))})})}}};function n(t){return function(e,n){return t.chain(e,function(e){return t.map(n(e),function(){return e})})}}},5636:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.eqDate=e.eqNumber=e.eqString=e.eqBoolean=e.eq=e.strictEqual=e.getStructEq=e.getTupleEq=e.Contravariant=e.getMonoid=e.getSemigroup=e.eqStrict=e.URI=e.contramap=e.tuple=e.struct=e.fromEquals=void 0;var r=n(3166);e.fromEquals=function(t){return{equals:function(e,n){return e===n||t(e,n)}}},e.struct=function(t){return(0,e.fromEquals)(function(e,n){for(var r in t)if(!t[r].equals(e[r],n[r]))return!1;return!0})},e.tuple=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(0,e.fromEquals)(function(e,n){return t.every(function(t,r){return t.equals(e[r],n[r])})})},e.contramap=function(t){return function(n){return(0,e.fromEquals)(function(e,r){return n.equals(t(e),t(r))})}},e.URI="Eq",e.eqStrict={equals:function(t,e){return t===e}};var i={equals:function(){return!0}};e.getSemigroup=function(){return{concat:function(t,n){return(0,e.fromEquals)(function(e,r){return t.equals(e,r)&&n.equals(e,r)})}}},e.getMonoid=function(){return{concat:(0,e.getSemigroup)().concat,empty:i}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,r.pipe)(t,(0,e.contramap)(n))}},e.getTupleEq=e.tuple,e.getStructEq=e.struct,e.strictEqual=e.eqStrict.equals,e.eq=e.Contravariant,e.eqBoolean=e.eqStrict,e.eqString=e.eqStrict,e.eqNumber=e.eqStrict,e.eqDate={equals:function(t,e){return t.valueOf()===e.valueOf()}}},3399:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.fromOption=l,e.fromPredicate=function(t){return function(e,n){return function(r){return t.fromEither(e(r)?u.right(r):u.left(n(r)))}}},e.fromOptionK=c,e.chainOptionK=function(t,e){var n=c(t);return function(t){var r=n(t);return function(t){return function(n){return e.chain(n,r(t))}}}},e.fromEitherK=f,e.chainEitherK=function(t,e){var n=f(t);return function(t){return function(r){return e.chain(r,n(t))}}},e.chainFirstEitherK=function(t,e){var n=d(t,e);return function(t){return function(e){return n(e,t)}}},e.filterOrElse=function(t,e){return function(n,r){return function(i){return e.chain(i,function(e){return t.fromEither(n(e)?u.right(e):u.left(r(e)))})}}},e.tapEither=d;var a=n(5069),s=n(3166),u=o(n(7003));function l(t){return function(e){return function(n){return t.fromEither(u.isNone(n)?u.left(e()):u.right(n.value))}}}function c(t){var e=l(t);return function(t){var n=e(t);return function(t){return(0,s.flow)(t,n)}}}function f(t){return function(e){return(0,s.flow)(e,t.fromEither)}}function d(t,e){var n=f(t),r=(0,a.tap)(e);return function(t,e){return r(t,n(e))}}},8411:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.map=i,e.flap=function(t){return function(e){return function(n){return t.map(n,function(t){return t(e)})}}},e.bindTo=function(t){return function(e){return function(n){return t.map(n,function(t){var n;return(n={})[e]=t,n})}}},e.let=function(t){return function(e,n){return function(r){return t.map(r,function(t){var r;return Object.assign({},t,((r={})[e]=n(t),r))})}}},e.getFunctorComposition=function(t,e){var n=i(t,e);return{map:function(t,e){return(0,r.pipe)(t,n(e))}}},e.as=o,e.asUnit=function(t){var e=o(t);return function(t){return e(t,void 0)}};var r=n(3166);function i(t,e){return function(n){return function(r){return t.map(r,function(t){return e.map(t,n)})}}}function o(t){return function(e,n){return t.map(e,function(){return n})}}},5717:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.concatAll=e.endo=e.filterSecond=e.filterFirst=e.reverse=void 0,e.reverse=function(t){return{concat:function(e,n){return t.concat(n,e)}}},e.filterFirst=function(t){return function(e){return{concat:function(n,r){return t(n)?e.concat(n,r):r}}}},e.filterSecond=function(t){return function(e){return{concat:function(n,r){return t(r)?e.concat(n,r):n}}}},e.endo=function(t){return function(e){return{concat:function(n,r){return e.concat(t(n),t(r))}}}},e.concatAll=function(t){return function(e){return function(n){return n.reduce(function(e,n){return t.concat(e,n)},e)}}}},199:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.throwError=e.Witherable=e.wilt=e.wither=e.Traversable=e.sequence=e.traverse=e.Filterable=e.partitionMap=e.partition=e.filterMap=e.filter=e.Compactable=e.separate=e.compact=e.Extend=e.extend=e.Alternative=e.guard=e.Zero=e.zero=e.Alt=e.alt=e.altW=e.orElse=e.Foldable=e.reduceRight=e.foldMap=e.reduce=e.Monad=e.Chain=e.flatMap=e.Applicative=e.Apply=e.ap=e.Pointed=e.of=e.asUnit=e.as=e.Functor=e.map=e.getMonoid=e.getOrd=e.getEq=e.getShow=e.URI=e.getRight=e.getLeft=e.some=e.none=void 0,e.getLastMonoid=e.getFirstMonoid=e.getApplyMonoid=e.getApplySemigroup=e.option=e.mapNullable=e.chainFirst=e.chain=e.sequenceArray=e.traverseArray=e.traverseArrayWithIndex=e.traverseReadonlyArrayWithIndex=e.traverseReadonlyNonEmptyArrayWithIndex=e.ApT=e.apS=e.bind=e.let=e.bindTo=e.Do=e.exists=e.toUndefined=e.toNullable=e.chainNullableK=e.fromNullableK=e.tryCatchK=e.tryCatch=e.fromNullable=e.chainFirstEitherK=e.chainEitherK=e.fromEitherK=e.duplicate=e.tapEither=e.tap=e.flatten=e.apSecond=e.apFirst=e.flap=e.getOrElse=e.getOrElseW=e.fold=e.match=e.foldW=e.matchW=e.isNone=e.isSome=e.FromEither=e.fromEither=e.MonadThrow=void 0,e.fromPredicate=function(t){return function(n){return t(n)?(0,e.some)(n):e.none}},e.elem=function t(n){return function(r,i){if(void 0===i){var o=t(n);return function(t){return o(r,t)}}return!(0,e.isNone)(i)&&n.equals(r,i.value)}},e.getRefinement=function(t){return function(n){return(0,e.isSome)(t(n))}};var a=n(5286),s=n(7900),u=o(n(5069)),l=n(3399),c=n(3166),f=n(8411),d=o(n(7003)),p=n(6725),h=n(9638),m=n(4679),g=n(285),y=n(8404);e.none=d.none,e.some=d.some,e.getLeft=function(t){return"Right"===t._tag?e.none:(0,e.some)(t.left)},e.getRight=function(t){return"Left"===t._tag?e.none:(0,e.some)(t.right)};var v=function(t,n){return(0,c.pipe)(t,(0,e.map)(n))},x=function(t,n){return(0,c.pipe)(t,(0,e.ap)(n))},b=function(t,n,r){return(0,c.pipe)(t,(0,e.reduce)(n,r))},w=function(t){var n=(0,e.foldMap)(t);return function(t,e){return(0,c.pipe)(t,n(e))}},j=function(t,n,r){return(0,c.pipe)(t,(0,e.reduceRight)(n,r))},S=function(t){var n=(0,e.traverse)(t);return function(t,e){return(0,c.pipe)(t,n(e))}},_=function(t,n){return(0,c.pipe)(t,(0,e.alt)(n))},E=function(t,n){return(0,c.pipe)(t,(0,e.filter)(n))},M=function(t,n){return(0,c.pipe)(t,(0,e.filterMap)(n))},O=function(t,n){return(0,c.pipe)(t,(0,e.extend)(n))},$=function(t,n){return(0,c.pipe)(t,(0,e.partition)(n))},k=function(t,n){return(0,c.pipe)(t,(0,e.partitionMap)(n))};e.URI="Option",e.getShow=function(t){return{show:function(n){return(0,e.isNone)(n)?"none":"some(".concat(t.show(n.value),")")}}},e.getEq=function(t){return{equals:function(n,r){return n===r||((0,e.isNone)(n)?(0,e.isNone)(r):!(0,e.isNone)(r)&&t.equals(n.value,r.value))}}},e.getOrd=function(t){return{equals:(0,e.getEq)(t).equals,compare:function(n,r){return n===r?0:(0,e.isSome)(n)?(0,e.isSome)(r)?t.compare(n.value,r.value):1:(0,e.isSome)(r)?-1:0}}},e.getMonoid=function(t){return{concat:function(n,r){return(0,e.isNone)(n)?r:(0,e.isNone)(r)?n:(0,e.some)(t.concat(n.value,r.value))},empty:e.none}},e.map=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.some)(t(n.value))}},e.Functor={URI:e.URI,map:v},e.as=(0,c.dual)(2,(0,f.as)(e.Functor)),e.asUnit=(0,f.asUnit)(e.Functor),e.of=e.some,e.Pointed={URI:e.URI,of:e.of},e.ap=function(t){return function(n){return(0,e.isNone)(n)||(0,e.isNone)(t)?e.none:(0,e.some)(n.value(t.value))}},e.Apply={URI:e.URI,map:v,ap:x},e.Applicative={URI:e.URI,map:v,ap:x,of:e.of},e.flatMap=(0,c.dual)(2,function(t,n){return(0,e.isNone)(t)?e.none:n(t.value)}),e.Chain={URI:e.URI,map:v,ap:x,chain:e.flatMap},e.Monad={URI:e.URI,map:v,ap:x,of:e.of,chain:e.flatMap},e.reduce=function(t,n){return function(r){return(0,e.isNone)(r)?t:n(t,r.value)}},e.foldMap=function(t){return function(n){return function(r){return(0,e.isNone)(r)?t.empty:n(r.value)}}},e.reduceRight=function(t,n){return function(r){return(0,e.isNone)(r)?t:n(r.value,t)}},e.Foldable={URI:e.URI,reduce:b,foldMap:w,reduceRight:j},e.orElse=(0,c.dual)(2,function(t,n){return(0,e.isNone)(t)?n():t}),e.altW=e.orElse,e.alt=e.orElse,e.Alt={URI:e.URI,map:v,alt:_},e.zero=function(){return e.none},e.Zero={URI:e.URI,zero:e.zero},e.guard=(0,y.guard)(e.Zero,e.Pointed),e.Alternative={URI:e.URI,map:v,ap:x,of:e.of,alt:_,zero:e.zero},e.extend=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.some)(t(n))}},e.Extend={URI:e.URI,map:v,extend:O},e.compact=(0,e.flatMap)(c.identity);var N=(0,m.separated)(e.none,e.none);e.separate=function(t){return(0,e.isNone)(t)?N:(0,m.separated)((0,e.getLeft)(t.value),(0,e.getRight)(t.value))},e.Compactable={URI:e.URI,compact:e.compact,separate:e.separate},e.filter=function(t){return function(n){return(0,e.isNone)(n)?e.none:t(n.value)?n:e.none}},e.filterMap=function(t){return function(n){return(0,e.isNone)(n)?e.none:t(n.value)}},e.partition=function(t){return function(e){return(0,m.separated)(E(e,(0,p.not)(t)),E(e,t))}},e.partitionMap=function(t){return(0,c.flow)((0,e.map)(t),e.separate)},e.Filterable={URI:e.URI,map:v,compact:e.compact,separate:e.separate,filter:E,filterMap:M,partition:$,partitionMap:k},e.traverse=function(t){return function(n){return function(r){return(0,e.isNone)(r)?t.of(e.none):t.map(n(r.value),e.some)}}},e.sequence=function(t){return function(n){return(0,e.isNone)(n)?t.of(e.none):t.map(n.value,e.some)}},e.Traversable={URI:e.URI,map:v,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence};var R=(0,g.witherDefault)(e.Traversable,e.Compactable),I=(0,g.wiltDefault)(e.Traversable,e.Compactable);e.wither=function(t){var e=R(t);return function(t){return function(n){return e(n,t)}}},e.wilt=function(t){var e=I(t);return function(t){return function(n){return e(n,t)}}},e.Witherable={URI:e.URI,map:v,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence,compact:e.compact,separate:e.separate,filter:E,filterMap:M,partition:$,partitionMap:k,wither:R,wilt:I},e.throwError=function(){return e.none},e.MonadThrow={URI:e.URI,map:v,ap:x,of:e.of,chain:e.flatMap,throwError:e.throwError},e.fromEither=e.getRight,e.FromEither={URI:e.URI,fromEither:e.fromEither},e.isSome=d.isSome,e.isNone=function(t){return"None"===t._tag},e.matchW=function(t,n){return function(r){return(0,e.isNone)(r)?t():n(r.value)}},e.foldW=e.matchW,e.match=e.matchW,e.fold=e.match,e.getOrElseW=function(t){return function(n){return(0,e.isNone)(n)?t():n.value}},e.getOrElse=e.getOrElseW,e.flap=(0,f.flap)(e.Functor),e.apFirst=(0,s.apFirst)(e.Apply),e.apSecond=(0,s.apSecond)(e.Apply),e.flatten=e.compact,e.tap=(0,c.dual)(2,u.tap(e.Chain)),e.tapEither=(0,c.dual)(2,(0,l.tapEither)(e.FromEither,e.Chain)),e.duplicate=(0,e.extend)(c.identity),e.fromEitherK=(0,l.fromEitherK)(e.FromEither),e.chainEitherK=(0,l.chainEitherK)(e.FromEither,e.Chain),e.chainFirstEitherK=e.tapEither,e.fromNullable=function(t){return null==t?e.none:(0,e.some)(t)},e.tryCatch=function(t){try{return(0,e.some)(t())}catch(t){return e.none}},e.tryCatchK=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(0,e.tryCatch)(function(){return t.apply(void 0,n)})}},e.fromNullableK=function(t){return(0,c.flow)(t,e.fromNullable)},e.chainNullableK=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.fromNullable)(t(n.value))}},e.toNullable=(0,e.match)(c.constNull,c.identity),e.toUndefined=(0,e.match)(c.constUndefined,c.identity),e.exists=function(t){return function(n){return!(0,e.isNone)(n)&&t(n.value)}},e.Do=(0,e.of)(d.emptyRecord),e.bindTo=(0,f.bindTo)(e.Functor);var C=(0,f.let)(e.Functor);e.let=C,e.bind=u.bind(e.Chain),e.apS=(0,s.apS)(e.Apply),e.ApT=(0,e.of)(d.emptyReadonlyArray),e.traverseReadonlyNonEmptyArrayWithIndex=function(t){return function(n){var r=t(0,d.head(n));if((0,e.isNone)(r))return e.none;for(var i=[r.value],o=1;o<n.length;o++){var a=t(o,n[o]);if((0,e.isNone)(a))return e.none;i.push(a.value)}return(0,e.some)(i)}},e.traverseReadonlyArrayWithIndex=function(t){var n=(0,e.traverseReadonlyNonEmptyArrayWithIndex)(t);return function(t){return d.isNonEmpty(t)?n(t):e.ApT}},e.traverseArrayWithIndex=e.traverseReadonlyArrayWithIndex,e.traverseArray=function(t){return(0,e.traverseReadonlyArrayWithIndex)(function(e,n){return t(n)})},e.sequenceArray=(0,e.traverseArray)(c.identity),e.chain=e.flatMap,e.chainFirst=e.tap,e.mapNullable=e.chainNullableK,e.option={URI:e.URI,map:v,of:e.of,ap:x,chain:e.flatMap,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence,zero:e.zero,alt:_,extend:O,compact:e.compact,separate:e.separate,filter:E,filterMap:M,partition:$,partitionMap:k,wither:R,wilt:I,throwError:e.throwError},e.getApplySemigroup=(0,s.getApplySemigroup)(e.Apply),e.getApplyMonoid=(0,a.getApplicativeMonoid)(e.Applicative),e.getFirstMonoid=function(){return(0,e.getMonoid)((0,h.first)())},e.getLastMonoid=function(){return(0,e.getMonoid)((0,h.last)())}},6939:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ordDate=e.ordNumber=e.ordString=e.ordBoolean=e.ord=e.getDualOrd=e.getTupleOrd=e.between=e.clamp=e.max=e.min=e.geq=e.leq=e.gt=e.lt=e.equals=e.trivial=e.Contravariant=e.getMonoid=e.getSemigroup=e.URI=e.contramap=e.reverse=e.tuple=e.fromCompare=e.equalsDefault=void 0;var r=n(5636),i=n(3166);e.equalsDefault=function(t){return function(e,n){return e===n||0===t(e,n)}},e.fromCompare=function(t){return{equals:(0,e.equalsDefault)(t),compare:function(e,n){return e===n?0:t(e,n)}}},e.tuple=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(0,e.fromCompare)(function(e,n){for(var r=0;r<t.length-1;r++){var i=t[r].compare(e[r],n[r]);if(0!==i)return i}return t[r].compare(e[r],n[r])})},e.reverse=function(t){return(0,e.fromCompare)(function(e,n){return t.compare(n,e)})},e.contramap=function(t){return function(n){return(0,e.fromCompare)(function(e,r){return n.compare(t(e),t(r))})}},e.URI="Ord",e.getSemigroup=function(){return{concat:function(t,n){return(0,e.fromCompare)(function(e,r){var i=t.compare(e,r);return 0!==i?i:n.compare(e,r)})}}},e.getMonoid=function(){return{concat:(0,e.getSemigroup)().concat,empty:(0,e.fromCompare)(function(){return 0})}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,i.pipe)(t,(0,e.contramap)(n))}},e.trivial={equals:i.constTrue,compare:(0,i.constant)(0)},e.equals=function(t){return function(e){return function(n){return n===e||0===t.compare(n,e)}}},e.lt=function(t){return function(e,n){return -1===t.compare(e,n)}},e.gt=function(t){return function(e,n){return 1===t.compare(e,n)}},e.leq=function(t){return function(e,n){return 1!==t.compare(e,n)}},e.geq=function(t){return function(e,n){return -1!==t.compare(e,n)}},e.min=function(t){return function(e,n){return e===n||1>t.compare(e,n)?e:n}},e.max=function(t){return function(e,n){return e===n||t.compare(e,n)>-1?e:n}},e.clamp=function(t){var n=(0,e.min)(t),r=(0,e.max)(t);return function(t,e){return function(i){return r(n(i,e),t)}}},e.between=function(t){var n=(0,e.lt)(t),r=(0,e.gt)(t);return function(t,e){return function(i){return!(n(i,t)||r(i,e))}}},e.getTupleOrd=e.tuple,e.getDualOrd=e.reverse,e.ord=e.Contravariant;var o={equals:r.eqStrict.equals,compare:function(t,e){return t<e?-1:+(t>e)}};e.ordBoolean=o,e.ordString=o,e.ordNumber=o,e.ordDate=(0,i.pipe)(e.ordNumber,(0,e.contramap)(function(t){return t.valueOf()}))},6725:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.and=e.or=e.not=e.Contravariant=e.getMonoidAll=e.getSemigroupAll=e.getMonoidAny=e.getSemigroupAny=e.URI=e.contramap=void 0;var r=n(3166);e.contramap=function(t){return function(e){return(0,r.flow)(t,e)}},e.URI="Predicate",e.getSemigroupAny=function(){return{concat:function(t,n){return(0,r.pipe)(t,(0,e.or)(n))}}},e.getMonoidAny=function(){return{concat:(0,e.getSemigroupAny)().concat,empty:r.constFalse}},e.getSemigroupAll=function(){return{concat:function(t,n){return(0,r.pipe)(t,(0,e.and)(n))}}},e.getMonoidAll=function(){return{concat:(0,e.getSemigroupAll)().concat,empty:r.constTrue}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,r.pipe)(t,(0,e.contramap)(n))}},e.not=function(t){return function(e){return!t(e)}},e.or=function(t){return function(e){return function(n){return e(n)||t(n)}}},e.and=function(t){return function(e){return function(n){return e(n)&&t(n)}}}},9638:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.semigroupProduct=e.semigroupSum=e.semigroupString=e.getFunctionSemigroup=e.semigroupAny=e.semigroupAll=e.getIntercalateSemigroup=e.getMeetSemigroup=e.getJoinSemigroup=e.getDualSemigroup=e.getStructSemigroup=e.getTupleSemigroup=e.getFirstSemigroup=e.getLastSemigroup=e.getObjectSemigroup=e.semigroupVoid=e.concatAll=e.last=e.first=e.intercalate=e.tuple=e.struct=e.reverse=e.constant=e.max=e.min=void 0,e.fold=function(t){var n=(0,e.concatAll)(t);return function(t,e){return void 0===e?n(t):n(t)(e)}};var a=n(3166),s=o(n(7003)),u=o(n(5717)),l=o(n(6939));e.min=function(t){return{concat:l.min(t)}},e.max=function(t){return{concat:l.max(t)}},e.constant=function(t){return{concat:function(){return t}}},e.reverse=u.reverse,e.struct=function(t){return{concat:function(e,n){var r={};for(var i in t)s.has.call(t,i)&&(r[i]=t[i].concat(e[i],n[i]));return r}}},e.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return{concat:function(e,n){return t.map(function(t,r){return t.concat(e[r],n[r])})}}},e.intercalate=function(t){return function(e){return{concat:function(n,r){return e.concat(n,e.concat(t,r))}}}},e.first=function(){return{concat:a.identity}},e.last=function(){return{concat:function(t,e){return e}}},e.concatAll=u.concatAll,e.semigroupVoid=(0,e.constant)(void 0),e.getObjectSemigroup=function(){return{concat:function(t,e){return Object.assign({},t,e)}}},e.getLastSemigroup=e.last,e.getFirstSemigroup=e.first,e.getTupleSemigroup=e.tuple,e.getStructSemigroup=e.struct,e.getDualSemigroup=e.reverse,e.getJoinSemigroup=e.max,e.getMeetSemigroup=e.min,e.getIntercalateSemigroup=e.intercalate,e.semigroupAll={concat:function(t,e){return t&&e}},e.semigroupAny={concat:function(t,e){return t||e}},e.getFunctionSemigroup=a.getSemigroup,e.semigroupString={concat:function(t,e){return t+e}},e.semigroupSum={concat:function(t,e){return t+e}},e.semigroupProduct={concat:function(t,e){return t*e}}},4679:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.right=e.left=e.flap=e.Functor=e.Bifunctor=e.URI=e.bimap=e.mapLeft=e.map=e.separated=void 0;var r=n(3166),i=n(8411);e.separated=function(t,e){return{left:t,right:e}},e.map=function(t){return function(n){return(0,e.separated)((0,e.left)(n),t((0,e.right)(n)))}},e.mapLeft=function(t){return function(n){return(0,e.separated)(t((0,e.left)(n)),(0,e.right)(n))}},e.bimap=function(t,n){return function(r){return(0,e.separated)(t((0,e.left)(r)),n((0,e.right)(r)))}},e.URI="Separated",e.Bifunctor={URI:e.URI,mapLeft:function(t,n){return(0,r.pipe)(t,(0,e.mapLeft)(n))},bimap:function(t,n,i){return(0,r.pipe)(t,(0,e.bimap)(n,i))}},e.Functor={URI:e.URI,map:function(t,n){return(0,r.pipe)(t,(0,e.map)(n))}},e.flap=(0,i.flap)(e.Functor),e.left=function(t){return t.left},e.right=function(t){return t.right}},285:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.wiltDefault=function(t,e){return function(n){var r=t.traverse(n);return function(t,i){return n.map(r(t,i),e.separate)}}},e.witherDefault=function(t,e){return function(n){var r=t.traverse(n);return function(t,i){return n.map(r(t,i),e.compact)}}},e.filterE=function(t){return function(e){var n=t.wither(e);return function(t){return function(r){return n(r,function(n){return e.map(t(n),function(t){return t?a.some(n):a.none})})}}}};var a=o(n(7003))},8404:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.guard=function(t,e){return function(n){return n?e.of(void 0):t.zero()}}},3166:function(t,e){var n=this&&this.__spreadArray||function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};function r(t){return t}function i(t){return function(){return t}}function o(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return function(){return e(t.apply(this,arguments))};case 3:return function(){return n(e(t.apply(this,arguments)))};case 4:return function(){return r(n(e(t.apply(this,arguments))))};case 5:return function(){return i(r(n(e(t.apply(this,arguments)))))};case 6:return function(){return o(i(r(n(e(t.apply(this,arguments))))))};case 7:return function(){return a(o(i(r(n(e(t.apply(this,arguments)))))))};case 8:return function(){return s(a(o(i(r(n(e(t.apply(this,arguments))))))))};case 9:return function(){return u(s(a(o(i(r(n(e(t.apply(this,arguments)))))))))}}}function a(t){throw Error("Called `absurd` function which should be uncallable")}Object.defineProperty(e,"__esModule",{value:!0}),e.dual=e.getEndomorphismMonoid=e.SK=e.hole=e.constVoid=e.constUndefined=e.constNull=e.constFalse=e.constTrue=e.unsafeCoerce=e.apply=e.getRing=e.getSemiring=e.getMonoid=e.getSemigroup=e.getBooleanAlgebra=void 0,e.identity=r,e.constant=i,e.flip=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length>1?t(e[1],e[0]):function(n){return t(n)(e[0])}}},e.flow=o,e.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t},e.increment=function(t){return t+1},e.decrement=function(t){return t-1},e.absurd=a,e.tupled=function(t){return function(e){return t.apply(void 0,e)}},e.untupled=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t(e)}},e.pipe=function(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return e(t);case 3:return n(e(t));case 4:return r(n(e(t)));case 5:return i(r(n(e(t))));case 6:return o(i(r(n(e(t)))));case 7:return a(o(i(r(n(e(t))))));case 8:return s(a(o(i(r(n(e(t)))))));case 9:return u(s(a(o(i(r(n(e(t))))))));default:for(var l=arguments[0],c=1;c<arguments.length;c++)l=arguments[c](l);return l}},e.not=function(t){return function(e){return!t(e)}},e.getBooleanAlgebra=function(t){return function(){return{meet:function(e,n){return function(r){return t.meet(e(r),n(r))}},join:function(e,n){return function(r){return t.join(e(r),n(r))}},zero:function(){return t.zero},one:function(){return t.one},implies:function(e,n){return function(r){return t.implies(e(r),n(r))}},not:function(e){return function(n){return t.not(e(n))}}}}},e.getSemigroup=function(t){return function(){return{concat:function(e,n){return function(r){return t.concat(e(r),n(r))}}}}},e.getMonoid=function(t){var n=(0,e.getSemigroup)(t);return function(){return{concat:n().concat,empty:function(){return t.empty}}}},e.getSemiring=function(t){return{add:function(e,n){return function(r){return t.add(e(r),n(r))}},zero:function(){return t.zero},mul:function(e,n){return function(r){return t.mul(e(r),n(r))}},one:function(){return t.one}}},e.getRing=function(t){var n=(0,e.getSemiring)(t);return{add:n.add,mul:n.mul,one:n.one,zero:n.zero,sub:function(e,n){return function(r){return t.sub(e(r),n(r))}}}},e.apply=function(t){return function(e){return e(t)}},e.unsafeCoerce=r,e.constTrue=i(!0),e.constFalse=i(!1),e.constNull=i(null),e.constUndefined=i(void 0),e.constVoid=e.constUndefined,e.hole=a,e.SK=function(t,e){return e},e.getEndomorphismMonoid=function(){return{concat:function(t,e){return o(t,e)},empty:r}},e.dual=function(t,e){var r="number"==typeof t?function(e){return e.length>=t}:t;return function(){var t=Array.from(arguments);return r(arguments)?e.apply(this,t):function(r){return e.apply(void 0,n([r],t,!1))}}}},7003:function(t,e,n){var r=this&&this.__spreadArray||function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.flatMapReader=e.flatMapTask=e.flatMapIO=e.flatMapEither=e.flatMapOption=e.flatMapNullable=e.liftOption=e.liftNullable=e.fromReadonlyNonEmptyArray=e.has=e.emptyRecord=e.emptyReadonlyArray=e.tail=e.head=e.isNonEmpty=e.singleton=e.right=e.left=e.isRight=e.isLeft=e.some=e.none=e.isSome=e.isNone=void 0;var i=n(3166);e.isNone=function(t){return"None"===t._tag},e.isSome=function(t){return"Some"===t._tag},e.none={_tag:"None"},e.some=function(t){return{_tag:"Some",value:t}},e.isLeft=function(t){return"Left"===t._tag},e.isRight=function(t){return"Right"===t._tag},e.left=function(t){return{_tag:"Left",left:t}},e.right=function(t){return{_tag:"Right",right:t}},e.singleton=function(t){return[t]},e.isNonEmpty=function(t){return t.length>0},e.head=function(t){return t[0]},e.tail=function(t){return t.slice(1)},e.emptyReadonlyArray=[],e.emptyRecord={},e.has=Object.prototype.hasOwnProperty,e.fromReadonlyNonEmptyArray=function(t){return r([t[0]],t.slice(1),!0)},e.liftNullable=function(t){return function(n,r){return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var a=n.apply(void 0,i);return t.fromEither(null==a?(0,e.left)(r.apply(void 0,i)):(0,e.right)(a))}}},e.liftOption=function(t){return function(n,r){return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var a=n.apply(void 0,i);return t.fromEither((0,e.isNone)(a)?(0,e.left)(r.apply(void 0,i)):(0,e.right)(a.value))}}},e.flatMapNullable=function(t,n){return(0,i.dual)(3,function(r,i,o){return n.flatMap(r,(0,e.liftNullable)(t)(i,o))})},e.flatMapOption=function(t,n){return(0,i.dual)(3,function(r,i,o){return n.flatMap(r,(0,e.liftOption)(t)(i,o))})},e.flatMapEither=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromEither(r(e))})})},e.flatMapIO=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromIO(r(e))})})},e.flatMapTask=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromTask(r(e))})})},e.flatMapReader=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromReader(r(e))})})}},733:function(t,e,n){var r=n(4825),i="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,u=r.useDebugValue;function l(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!i(t,n)}catch(t){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=o({inst:{value:n,getSnapshot:e}}),i=r[0].inst,c=r[1];return s(function(){i.value=n,i.getSnapshot=e,l(i)&&c({inst:i})},[t,n,e]),a(function(){return l(i)&&c({inst:i}),t(function(){l(i)&&c({inst:i})})},[t]),u(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},8130:function(t,e,n){var r=n(4825),i=n(112),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=i.useSyncExternalStore,s=r.useRef,u=r.useEffect,l=r.useMemo,c=r.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=a(t,(f=l(function(){function t(t){if(!u){if(u=!0,a=t,t=r(t),void 0!==i&&d.hasValue){var e=d.value;if(i(e,t))return s=e}return s=t}if(e=s,o(a,t))return e;var n=r(t);return void 0!==i&&i(e,n)?(a=t,e):(a=t,s=n)}var a,s,u=!1,l=void 0===n?null:n;return[function(){return t(e())},null===l?void 0:function(){return t(l())}]},[e,n,r,i]))[0],f[1]);return u(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},112:function(t,e,n){t.exports=n(733)},2298:function(t,e,n){t.exports=n(8130)},7883:function(t,e,n){n.d(e,{Sx:()=>u});var r,i=n(4927);let o="xstate.promise.resolve",a="xstate.promise.reject",s=new WeakMap;function u(t){return{config:t,transition:(t,e,n)=>{if("active"!==t.status)return t;switch(e.type){case o:{let n=e.data;return{...t,status:"done",output:n,input:void 0}}case a:return{...t,status:"error",error:e.data,input:void 0};case i.X:return s.get(n.self)?.abort(),{...t,status:"stopped",input:void 0};default:return t}},start:(e,{self:n,system:r,emit:i})=>{if("active"!==e.status)return;let u=new AbortController;s.set(n,u),Promise.resolve(t({input:e.input,system:r,self:n,signal:u.signal,emit:i})).then(t=>{"active"===n.getSnapshot().status&&(s.delete(n),r._relay(n,n,{type:o,data:t}))},t=>{"active"===n.getSnapshot().status&&(s.delete(n),r._relay(n,n,{type:a,data:t}))})},getInitialSnapshot:(t,e)=>({status:"active",output:void 0,error:void 0,input:e}),getPersistedSnapshot:t=>t,restoreSnapshot:t=>t}}r=void 0,t=>t},4927:function(t,e,n){n.d(e,{$:()=>N,B:()=>tr,C:()=>tO,D:()=>G,E:()=>tC,F:()=>te,G:()=>t_,H:()=>function t(e,n,r,i){if("string"==typeof n){let t;return(t=td(e,n).next(r,i))&&t.length?t:e.next(r,i)}if(1===Object.keys(n).length){let o,a;return(a=t(td(e,(o=Object.keys(n))[0]),n[o[0]],r,i))&&a.length?a:e.next(r,i)}let o=[];for(let a of Object.keys(n)){let s=n[a];if(!s)continue;let u=t(td(e,a),s,r,i);u&&o.push(...u)}return o.length?o:e.next(r,i)},I:()=>tS,J:()=>p,K:()=>tb,L:()=>tf,M:()=>g,N:()=>s,O:()=>tn,P:()=>tp,Q:()=>tT,R:()=>M,S:()=>a,T:()=>l,U:()=>d,V:()=>R,W:()=>tA,X:()=>c,a:()=>L,b:()=>U,c:()=>A,d:()=>X,g:()=>th,l:()=>v,n:()=>Z,q:()=>ta,r:()=>tz,s:()=>W,t:()=>x,u:()=>j,v:()=>to,w:()=>V,x:()=>E,y:()=>ti,z:()=>ts});var r,i=n(6095);class o{constructor(t){this._process=t,this._active=!1,this._current=null,this._last=null}start(){this._active=!0,this.flush()}clear(){this._current&&(this._current.next=null,this._last=this._current)}enqueue(t){let e={value:t,next:null};if(this._current){this._last.next=e,this._last=e;return}this._current=e,this._last=e,this._active&&this.flush()}flush(){for(;this._current;){let t=this._current;this._process(t.value),this._current=t.next}this._last=null}}let a=".",s="",u="xstate.init",l="xstate.error",c="xstate.stop";function f(t,e){return{type:`xstate.done.state.${t}`,output:e}}function d(t,e){return{type:`xstate.error.actor.${t}`,error:e,actorId:t}}function p(t){return{type:u,input:t}}function h(t){setTimeout(()=>{throw t})}let m="function"==typeof Symbol&&Symbol.observable||"@@observable";function g(t){if(w(t))return t;let e=[],n="";for(let r=0;r<t.length;r++){switch(t.charCodeAt(r)){case 92:n+=t[r+1],r++;continue;case 46:e.push(n),n="";continue}n+=t[r]}return e.push(n),e}function y(t){var e;return(e=t)&&"object"==typeof e&&"machine"in e&&"value"in e?t.value:"string"!=typeof t?t:function(t){if(1===t.length)return t[0];let e={},n=e;for(let e=0;e<t.length-1;e++)if(e===t.length-2)n[t[e]]=t[e+1];else{let r=n;n={},r[t[e]]=n}return e}(g(t))}function v(t,e){let n={},r=Object.keys(t);for(let i=0;i<r.length;i++){let o=r[i];n[o]=e(t[o],o,t,i)}return n}function x(t){var e;return void 0===t?[]:w(e=t)?e:[e]}function b(t,e,n,r){return"function"==typeof t?t({context:e,event:n,self:r}):t}function w(t){return Array.isArray(t)}function j(t){var e;return(w(e=t)?e:[e]).map(t=>void 0===t||"string"==typeof t?{target:t}:t)}function S(t){if(void 0!==t&&""!==t)return x(t)}function _(t,e,n){let r="object"==typeof t,i=r?t:void 0;return{next:(r?t.next:t)?.bind(i),error:(r?t.error:e)?.bind(i),complete:(r?t.complete:n)?.bind(i)}}function E(t,e){return`${e}.${t}`}function M(t,e){let n=e.match(/^xstate\.invoke\.(\d+)\.(.*)/);if(!n)return t.implementations.actors[e];let[,r,i]=n,o=t.getStateNodeById(i).config.invoke;return(Array.isArray(o)?o[r]:o).src}function O(t,e){return`${t.sessionId}.${e}`}let $=0,k=!1,N=1,R=((r={})[r.NotStarted=0]="NotStarted",r[r.Running=1]="Running",r[r.Stopped=2]="Stopped",r),I={clock:{setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t)},logger:console.log.bind(console),devTools:!1};class C{constructor(t,e){this.logic=t,this._snapshot=void 0,this.clock=void 0,this.options=void 0,this.id=void 0,this.mailbox=new o(this._process.bind(this)),this.observers=new Set,this.eventListeners=new Map,this.logger=void 0,this._processingStatus=R.NotStarted,this._parent=void 0,this._syncSnapshot=void 0,this.ref=void 0,this._actorScope=void 0,this.systemId=void 0,this.sessionId=void 0,this.system=void 0,this._doneEvent=void 0,this.src=void 0,this._deferred=[];const n={...I,...e},{clock:r,logger:i,parent:a,syncSnapshot:s,id:u,systemId:l,inspect:c}=n;this.system=a?a.system:function(t,e){let n=new Map,r=new Map,i=new WeakMap,o=new Set,a={},{clock:s,logger:u}=e,l={schedule:(t,e,n,r,i=Math.random().toString(36).slice(2))=>{let o={source:t,target:e,event:n,delay:r,id:i,startedAt:Date.now()},u=O(t,i);c._snapshot._scheduledEvents[u]=o;let l=s.setTimeout(()=>{delete a[u],delete c._snapshot._scheduledEvents[u],c._relay(t,e,n)},r);a[u]=l},cancel:(t,e)=>{let n=O(t,e),r=a[n];delete a[n],delete c._snapshot._scheduledEvents[n],void 0!==r&&s.clearTimeout(r)},cancelAll:t=>{for(let e in c._snapshot._scheduledEvents){let n=c._snapshot._scheduledEvents[e];n.source===t&&l.cancel(t,n.id)}}},c={_snapshot:{_scheduledEvents:(e?.snapshot&&e.snapshot.scheduler)??{}},_bookId:()=>`x:${$++}`,_register:(t,e)=>(n.set(t,e),t),_unregister:t=>{n.delete(t.sessionId);let e=i.get(t);void 0!==e&&(r.delete(e),i.delete(t))},get:t=>r.get(t),getAll:()=>Object.fromEntries(r.entries()),_set:(t,e)=>{let n=r.get(t);if(n&&n!==e)throw Error(`Actor with system ID '${t}' already exists.`);r.set(t,e),i.set(e,t)},inspect:t=>{let e=_(t);return o.add(e),{unsubscribe(){o.delete(e)}}},_sendInspectionEvent:e=>{if(!o.size)return;let n={...e,rootId:t.sessionId};o.forEach(t=>t.next?.(n))},_relay:(t,e,n)=>{c._sendInspectionEvent({type:"@xstate.event",sourceRef:t,actorRef:e,event:n}),e._send(n)},scheduler:l,getSnapshot:()=>({_scheduledEvents:{...c._snapshot._scheduledEvents}}),start:()=>{let t=c._snapshot._scheduledEvents;for(let e in c._snapshot._scheduledEvents={},t){let{source:n,target:r,event:i,delay:o,id:a}=t[e];l.schedule(n,r,i,o,a)}},_clock:s,_logger:u};return c}(this,{clock:r,logger:i}),c&&!a&&this.system.inspect(_(c)),this.sessionId=this.system._bookId(),this.id=u??this.sessionId,this.logger=e?.logger??this.system._logger,this.clock=e?.clock??this.system._clock,this._parent=a,this._syncSnapshot=s,this.options=n,this.src=n.src??t,this.ref=this,this._actorScope={self:this,id:this.id,sessionId:this.sessionId,logger:this.logger,defer:t=>{this._deferred.push(t)},system:this.system,stopChild:t=>{if(t._parent!==this)throw Error(`Cannot stop child actor ${t.id} of ${this.id} because it is not a child`);t._stop()},emit:t=>{let e=this.eventListeners.get(t.type),n=this.eventListeners.get("*");if(e||n)for(let r of[...e?e.values():[],...n?n.values():[]])try{r(t)}catch(t){h(t)}},actionExecutor:t=>{let e=()=>{if(this._actorScope.system._sendInspectionEvent({type:"@xstate.action",actorRef:this,action:{type:t.type,params:t.params}}),!t.exec)return;let e=k;try{k=!0,t.exec(t.info,t.params)}finally{k=e}};this._processingStatus===R.Running?e():this._deferred.push(e)}},this.send=this.send.bind(this),this.system._sendInspectionEvent({type:"@xstate.actor",actorRef:this}),l&&(this.systemId=l,this.system._set(l,this)),this._initState(e?.snapshot??e?.state),l&&"active"!==this._snapshot.status&&this.system._unregister(this)}_initState(t){try{this._snapshot=t?this.logic.restoreSnapshot?this.logic.restoreSnapshot(t,this._actorScope):t:this.logic.getInitialSnapshot(this._actorScope,this.options?.input)}catch(t){this._snapshot={status:"error",output:void 0,error:t}}}update(t,e){let n;for(this._snapshot=t;n=this._deferred.shift();)try{n()}catch(e){this._deferred.length=0,this._snapshot={...t,status:"error",error:e}}switch(this._snapshot.status){case"active":for(let e of this.observers)try{e.next?.(t)}catch(t){h(t)}break;case"done":var r;for(let e of this.observers)try{e.next?.(t)}catch(t){h(t)}this._stopProcedure(),this._complete(),this._doneEvent=(r=this.id,{type:`xstate.done.actor.${r}`,output:this._snapshot.output,actorId:r}),this._parent&&this.system._relay(this,this._parent,this._doneEvent);break;case"error":this._error(this._snapshot.error)}this.system._sendInspectionEvent({type:"@xstate.snapshot",actorRef:this,event:e,snapshot:t})}subscribe(t,e,n){let r=_(t,e,n);if(this._processingStatus!==R.Stopped)this.observers.add(r);else switch(this._snapshot.status){case"done":try{r.complete?.()}catch(t){h(t)}break;case"error":{let t=this._snapshot.error;if(r.error)try{r.error(t)}catch(t){h(t)}else h(t)}}return{unsubscribe:()=>{this.observers.delete(r)}}}on(t,e){let n=this.eventListeners.get(t);n||(n=new Set,this.eventListeners.set(t,n));let r=e.bind(void 0);return n.add(r),{unsubscribe:()=>{n.delete(r)}}}start(){if(this._processingStatus===R.Running)return this;this._syncSnapshot&&this.subscribe({next:t=>{"active"===t.status&&this.system._relay(this,this._parent,{type:`xstate.snapshot.${this.id}`,snapshot:t})},error:()=>{}}),this.system._register(this.sessionId,this),this.systemId&&this.system._set(this.systemId,this),this._processingStatus=R.Running;let t=p(this.options.input);switch(this.system._sendInspectionEvent({type:"@xstate.event",sourceRef:this._parent,actorRef:this,event:t}),this._snapshot.status){case"done":return this.update(this._snapshot,t),this;case"error":return this._error(this._snapshot.error),this}if(this._parent||this.system.start(),this.logic.start)try{this.logic.start(this._snapshot,this._actorScope)}catch(t){return this._snapshot={...this._snapshot,status:"error",error:t},this._error(t),this}return this.update(this._snapshot,t),this.options.devTools&&this.attachDevTools(),this.mailbox.start(),this}_process(t){let e,n;try{e=this.logic.transition(this._snapshot,t,this._actorScope)}catch(t){n={err:t}}if(n){let{err:t}=n;this._snapshot={...this._snapshot,status:"error",error:t},this._error(t);return}this.update(e,t),t.type===c&&(this._stopProcedure(),this._complete())}_stop(){return this._processingStatus===R.Stopped||((this.mailbox.clear(),this._processingStatus===R.NotStarted)?this._processingStatus=R.Stopped:this.mailbox.enqueue({type:c})),this}stop(){if(this._parent)throw Error("A non-root actor cannot be stopped directly.");return this._stop()}_complete(){for(let t of this.observers)try{t.complete?.()}catch(t){h(t)}this.observers.clear()}_reportError(t){if(!this.observers.size){this._parent||h(t);return}let e=!1;for(let n of this.observers){let r=n.error;e||=!r;try{r?.(t)}catch(t){h(t)}}this.observers.clear(),e&&h(t)}_error(t){this._stopProcedure(),this._reportError(t),this._parent&&this.system._relay(this,this._parent,d(this.id,t))}_stopProcedure(){return this._processingStatus!==R.Running||(this.system.scheduler.cancelAll(this),this.mailbox.clear(),this.mailbox=new o(this._process.bind(this)),this._processingStatus=R.Stopped,this.system._unregister(this)),this}_send(t){this._processingStatus!==R.Stopped&&this.mailbox.enqueue(t)}send(t){this.system._relay(void 0,this,t)}attachDevTools(){let{devTools:t}=this.options;t&&("function"==typeof t?t:i.s)(this)}toJSON(){return{xstate$$type:N,id:this.id}}getPersistedSnapshot(t){return this.logic.getPersistedSnapshot(this._snapshot,t)}[m](){return this}getSnapshot(){return this._snapshot}}function A(t,...[e]){return new C(t,e)}function T(t,e,n,r,{sendId:i}){return[e,{sendId:"function"==typeof i?i(n,r):i},void 0]}function D(t,e){t.defer(()=>{t.system.scheduler.cancel(t.self,e.sendId)})}function L(t){function e(t,e){}return e.type="xstate.cancel",e.sendId=t,e.resolve=T,e.execute=D,e}function z(t,e,n,r,{id:i,systemId:o,src:a,input:s,syncSnapshot:u}){let l,c,f="string"==typeof a?M(e.machine,a):a,d="function"==typeof i?i(n):i;return f&&(c="function"==typeof s?s({context:e.context,event:n.event,self:t.self}):s,l=A(f,{id:d,src:a,parent:t.self,syncSnapshot:u,systemId:o,input:c})),[tA(e,{children:{...e.children,[d]:l}}),{id:i,systemId:o,actorRef:l,src:a,input:c},void 0]}function F(t,{actorRef:e}){e&&t.defer(()=>{e._processingStatus!==R.Stopped&&e.start()})}function U(...[t,{id:e,systemId:n,input:r,syncSnapshot:i=!1}={}]){function o(t,e){}return o.type="xstate.spawnChild",o.id=e,o.systemId=n,o.src=t,o.input=r,o.syncSnapshot=i,o.resolve=z,o.execute=F,o}function q(t,e,n,r,{actorRef:i}){let o="function"==typeof i?i(n,r):i,a="string"==typeof o?e.children[o]:o,s=e.children;return a&&(s={...s},delete s[a.id]),[tA(e,{children:s}),a,void 0]}function P(t,e){if(e){if(t.system._unregister(e),e._processingStatus!==R.Running)return void t.stopChild(e);t.defer(()=>{t.stopChild(e)})}}function W(t){function e(t,e){}return e.type="xstate.stopChild",e.actorRef=t,e.resolve=q,e.execute=P,e}function H(t,{context:e,event:n},{guards:r}){return!V(r[0],e,n,t)}function Z(t){function e(t,e){return!1}return e.check=H,e.guards=[t],e}function K(t,{context:e,event:n},{guards:r}){return r.every(r=>V(r,e,n,t))}function X(t){function e(t,e){return!1}return e.check=K,e.guards=t,e}function V(t,e,n,r){let{machine:i}=r,o="function"==typeof t,a=o?t:i.implementations.guards["string"==typeof t?t:t.type];if(!o&&!a)throw Error(`Guard '${"string"==typeof t?t:t.type}' is not implemented.'.`);if("function"!=typeof a)return V(a,e,n,r);let s={context:e,event:n},u=o||"string"==typeof t?void 0:"params"in t?"function"==typeof t.params?t.params({context:e,event:n}):t.params:void 0;return"check"in a?a.check(r,s,a):a(s,u)}let B=t=>"atomic"===t.type||"final"===t.type;function Y(t){return Object.values(t.states).filter(t=>"history"!==t.type)}function J(t,e){let n=[];if(e===t)return n;let r=t.parent;for(;r&&r!==e;)n.push(r),r=r.parent;return n}function G(t){let e=new Set(t),n=Q(e);for(let t of e)if("compound"!==t.type||n.get(t)&&n.get(t).length){if("parallel"===t.type){for(let n of Y(t))if("history"!==n.type&&!e.has(n))for(let t of tc(n))e.add(t)}}else tc(t).forEach(t=>e.add(t));for(let t of e){let n=t.parent;for(;n;)e.add(n),n=n.parent}return e}function Q(t){let e=new Map;for(let n of t)e.has(n)||e.set(n,[]),n.parent&&(e.has(n.parent)||e.set(n.parent,[]),e.get(n.parent).push(n));return e}function tt(t,e){return function t(e,n){let r=n.get(e);if(!r)return{};if("compound"===e.type){let t=r[0];if(!t)return{};if(B(t))return t.key}let i={};for(let e of r)i[e.key]=t(e,n);return i}(t,Q(G(e)))}function te(t,e){return"compound"===e.type?Y(e).some(e=>"final"===e.type&&t.has(e)):"parallel"===e.type?Y(e).every(e=>te(t,e)):"final"===e.type}let tn=t=>"#"===t[0];function tr(t,e){return t.transitions.get(e)||[...t.transitions.keys()].filter(t=>{if("*"===t)return!0;if(!t.endsWith(".*"))return!1;let n=t.split("."),r=e.split(".");for(let t=0;t<n.length;t++){let e=n[t],i=r[t];if("*"===e)return t===n.length-1;if(e!==i)return!1}return!0}).sort((t,e)=>e.length-t.length).flatMap(e=>t.transitions.get(e))}function ti(t){let e=t.config.after;return e?Object.keys(e).flatMap(n=>{var r;let i,o,a=e[n],s=Number.isNaN(+n)?n:+n,u=(r=t.id,o=(i={type:`xstate.after.${s}.${r}`}).type,t.entry.push(tz(i,{id:o,delay:s})),t.exit.push(L(o)),o);return x("string"==typeof a?{target:a}:a).map(t=>({...t,event:u,delay:s}))}).map(e=>{let{delay:n}=e;return{...to(t,e.event,e),delay:n}}):[]}function to(t,e,n){let r=S(n.target),i=n.reenter??!1,o=function(t,e){if(void 0!==e)return e.map(e=>{if("string"!=typeof e)return e;if(tn(e))return t.machine.getStateNodeById(e);let n=e[0]===a;if(n&&!t.parent)return tp(t,e.slice(1));let r=n?t.key+e:e;if(t.parent)try{return tp(t.parent,r)}catch(e){throw Error(`Invalid transition definition for state node '${t.id}':
${e.message}`)}throw Error(`Invalid target: "${e}" is not a valid target from the root node. Did you mean ".${e}"?`)})}(t,r),s={...n,actions:x(n.actions),guard:n.guard,target:o,source:t,reenter:i,eventType:e,toJSON:()=>({...s,source:`#${t.id}`,target:o?o.map(t=>`#${t.id}`):void 0})};return s}function ta(t){let e=new Map;if(t.config.on)for(let n of Object.keys(t.config.on)){if(n===s)throw Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');let r=t.config.on[n];e.set(n,j(r).map(e=>to(t,n,e)))}if(t.config.onDone){let n=`xstate.done.state.${t.id}`;e.set(n,j(t.config.onDone).map(e=>to(t,n,e)))}for(let n of t.invoke){if(n.onDone){let r=`xstate.done.actor.${n.id}`;e.set(r,j(n.onDone).map(e=>to(t,r,e)))}if(n.onError){let r=`xstate.error.actor.${n.id}`;e.set(r,j(n.onError).map(e=>to(t,r,e)))}if(n.onSnapshot){let r=`xstate.snapshot.${n.id}`;e.set(r,j(n.onSnapshot).map(e=>to(t,r,e)))}}for(let n of t.after){let t=e.get(n.eventType);t||(t=[],e.set(n.eventType,t)),t.push(n)}return e}function ts(t,e){let n="string"==typeof e?t.states[e]:e?t.states[e.target]:void 0;if(!n&&e)throw Error(`Initial state node "${e}" not found on parent state node #${t.id}`);let r={source:t,actions:e&&"string"!=typeof e?x(e.actions):[],eventType:null,reenter:!1,target:n?[n]:[],toJSON:()=>({...r,source:`#${t.id}`,target:n?[`#${n.id}`]:[]})};return r}function tu(t){let e=S(t.config.target);return e?{target:e.map(e=>"string"==typeof e?tp(t.parent,e):e)}:t.parent.initial}function tl(t){return"history"===t.type}function tc(t){let e=tf(t);for(let n of e)for(let r of J(n,t))e.add(r);return e}function tf(t){let e=new Set;return!function t(n){if(!e.has(n)){if(e.add(n),"compound"===n.type)t(n.initial.target[0]);else if("parallel"===n.type)for(let e of Y(n))t(e)}}(t),e}function td(t,e){if(tn(e))return t.machine.getStateNodeById(e);if(!t.states)throw Error(`Unable to retrieve child state '${e}' from '${t.id}'; no child states exist.`);let n=t.states[e];if(!n)throw Error(`Child state '${e}' does not exist on '${t.id}'`);return n}function tp(t,e){if("string"==typeof e&&tn(e))try{return t.machine.getStateNodeById(e)}catch{}let n=g(e).slice(),r=t;for(;n.length;){let t=n.shift();if(!t.length)break;r=td(r,t)}return r}function th(t,e){if("string"==typeof e){let n=t.states[e];if(!n)throw Error(`State '${e}' does not exist on '${t.id}'`);return[t,n]}let n=Object.keys(e),r=n.map(e=>td(t,e)).filter(Boolean);return[t.machine.root,t].concat(r,n.reduce((n,r)=>{let i=td(t,r);if(!i)return n;let o=th(i,e[r]);return n.concat(o)},[]))}function tm(t,e){let n=t;for(;n.parent&&n.parent!==e;)n=n.parent;return n.parent===e}function tg(t,e,n){let r=new Set;for(let i of t){let t=!1,o=new Set;for(let a of r)if(function(t,e){let n=new Set(t),r=new Set(e);for(let t of n)if(r.has(t))return!0;for(let t of r)if(n.has(t))return!0;return!1}(tx([i],e,n),tx([a],e,n)))if(tm(i.source,a.source))o.add(a);else{t=!0;break}if(!t){for(let t of o)r.delete(t);r.add(i)}}return Array.from(r)}function ty(t,e){if(!t.target)return[];let n=new Set;for(let r of t.target)if(tl(r))if(e[r.id])for(let t of e[r.id])n.add(t);else for(let t of ty(tu(r),e))n.add(t);else n.add(r);return[...n]}function tv(t,e){let n=ty(t,e);if(!n)return;if(!t.reenter&&n.every(e=>e===t.source||tm(e,t.source)))return t.source;let r=function(t){let[e,...n]=t;for(let t of J(e,void 0))if(n.every(e=>tm(e,t)))return t}(n.concat(t.source));return r||(t.reenter?void 0:t.source.machine.root)}function tx(t,e,n){let r=new Set;for(let i of t)if(i.target?.length){let t=tv(i,n);for(let n of(i.reenter&&i.source===t&&r.add(t),e))tm(n,t)&&r.add(n)}return[...r]}function tb(t,e,n,r,i,o){if(!t.length)return e;let a=new Set(e._nodes),s=e.historyValue,u=tg(t,a,s),l=e;i||([l,s]=function(t,e,n,r,i,o,a,s){let u,l=t,c=tx(r,i,o);for(let t of(c.sort((t,e)=>e.order-t.order),c))for(let e of function(t){return Object.keys(t.states).map(e=>t.states[e]).filter(t=>"history"===t.type)}(t)){let n;n="deep"===e.history?e=>B(e)&&tm(e,t):e=>e.parent===t,(u??={...o})[e.id]=Array.from(i).filter(n)}for(let t of c)l=tS(l,e,n,[...t.exit,...t.invoke.map(t=>W(t.id))],a,void 0),i.delete(t);return[l,u||o]}(l,r,n,u,a,s,o,n.actionExecutor)),l=function(t,e,n,r,i,o,a,s){let u=t,l=new Set,c=new Set;(function(t,e,n,r){for(let i of t){let t=tv(i,e);for(let o of i.target||[])!tl(o)&&(i.source!==o||i.source!==t||i.reenter)&&(r.add(o),n.add(o)),tw(o,e,n,r);for(let o of ty(i,e)){let a=J(o,t);t?.type==="parallel"&&a.push(t),tj(r,e,n,a,!i.source.parent&&i.reenter?void 0:t)}}})(r,a,c,l),s&&c.add(t.machine.root);let d=new Set;for(let t of[...l].sort((t,e)=>t.order-e.order)){i.add(t);let r=[];for(let e of(r.push(...t.entry),t.invoke))r.push(U(e.src,{...e,syncSnapshot:!!e.onSnapshot}));if(c.has(t)){let e=t.initial.actions;r.push(...e)}if(u=tS(u,e,n,r,o,t.invoke.map(t=>t.id)),"final"===t.type){let r=t.parent,a=r?.type==="parallel"?r:r?.parent,s=a||t;for(r?.type==="compound"&&o.push(f(r.id,void 0!==t.output?b(t.output,u.context,e,n.self):void 0));a?.type==="parallel"&&!d.has(a)&&te(i,a);)d.add(a),o.push(f(a.id)),s=a,a=a.parent;if(a)continue;u=tA(u,{status:"done",output:function(t,e,n,r,i){if(void 0===r.output)return;let o=f(i.id,void 0!==i.output&&i.parent?b(i.output,t.context,e,n.self):void 0);return b(r.output,t.context,o,n.self)}(u,e,n,u.machine.root,s)})}}return u}(l=tS(l,r,n,u.flatMap(t=>t.actions),o,void 0),r,n,u,a,o,s,i);let c=[...a];"done"===l.status&&(l=tS(l,r,n,c.sort((t,e)=>e.order-t.order).flatMap(t=>t.exit),o,void 0));try{if(s===e.historyValue&&function(t,e){if(t.length!==e.size)return!1;for(let n of t)if(!e.has(n))return!1;return!0}(e._nodes,a))return l;return tA(l,{_nodes:c,historyValue:s})}catch(t){throw t}}function tw(t,e,n,r){var i,o,a,s;if(tl(t))if(e[t.id]){let a=e[t.id];for(let t of a)r.add(t),tw(t,e,n,r);for(let s of a){i=s,o=t.parent,tj(r,e,n,J(i,o))}}else{let i=tu(t);for(let o of i.target)r.add(o),i===t.parent?.initial&&n.add(t.parent),tw(o,e,n,r);for(let o of i.target){a=o,s=t.parent,tj(r,e,n,J(a,s))}}else if("compound"===t.type){let[i]=t.initial.target;tl(i)||(r.add(i),n.add(i)),tw(i,e,n,r),tj(r,e,n,J(i,t))}else if("parallel"===t.type)for(let i of Y(t).filter(t=>!tl(t)))[...r].some(t=>tm(t,i))||(tl(i)||(r.add(i),n.add(i)),tw(i,e,n,r))}function tj(t,e,n,r,i){for(let o of r)if((!i||tm(o,i))&&t.add(o),"parallel"===o.type)for(let r of Y(o).filter(t=>!tl(t)))[...t].some(t=>tm(t,r))||(t.add(r),tw(r,e,n,t))}function tS(t,e,n,r,i,o){let a=o?[]:void 0,s=function t(e,n,r,i,o,a){let{machine:s}=e,u=e;for(let e of i){var l;let i="function"==typeof e,c=i?e:(l="string"==typeof e?e:e.type,s.implementations.actions[l]),f={context:u.context,event:n,self:r.self,system:r.system},d=i||"string"==typeof e?void 0:"params"in e?"function"==typeof e.params?e.params({context:u.context,event:n}):e.params:void 0;if(!c||!("resolve"in c)){r.actionExecutor({type:"string"==typeof e?e:"object"==typeof e?e.type:e.name||"(anonymous)",info:f,params:d,exec:c});continue}let[p,h,m]=c.resolve(r,u,f,d,c,o);u=p,"retryResolve"in c&&a?.push([c,h]),"execute"in c&&r.actionExecutor({type:c.type,info:f,params:h,exec:c.execute.bind(null,r,h)}),m&&(u=t(u,n,r,m,o,a))}return u}(t,e,n,r,{internalQueue:i,deferredActorIds:o},a);return a?.forEach(([t,e])=>{t.retryResolve(n,s,e)}),s}function t_(t,e,n,r){let i=t,o=[];function a(t,e,r){n.system._sendInspectionEvent({type:"@xstate.microstep",actorRef:n.self,event:e,snapshot:t,_transitions:r}),o.push(t)}if(e.type===c)return a(i=tA(tE(i,e,n),{status:"stopped"}),e,[]),{snapshot:i,microstates:o};let s=e;if(s.type!==u){let e=s,u=e.type.startsWith("xstate.error.actor"),l=tM(e,i);if(u&&!l.length)return a(i=tA(t,{status:"error",error:e.error}),e,[]),{snapshot:i,microstates:o};a(i=tb(l,t,n,s,!1,r),e,l)}let l=!0;for(;"active"===i.status;){let t=l?function(t,e){let n=new Set;for(let r of t._nodes.filter(B))e:for(let i of[r].concat(J(r,void 0)))if(i.always){for(let r of i.always)if(void 0===r.guard||V(r.guard,t.context,e,t)){n.add(r);break e}}return tg(Array.from(n),new Set(t._nodes),t.historyValue)}(i,s):[],e=t.length?i:void 0;if(!t.length){if(!r.length)break;t=tM(s=r.shift(),i)}l=(i=tb(t,i,n,s,!1,r))!==e,a(i,s,t)}return"active"!==i.status&&tE(i,s,n),{snapshot:i,microstates:o}}function tE(t,e,n){return tS(t,e,n,Object.values(t.children).map(t=>W(t)),[],void 0)}function tM(t,e){return e.machine.getTransitionData(e,t)}function tO(t,e){let n=G(th(t,e));return tt(t,[...n])}let t$=function(t){return function t(e,n){let r=y(e),i=y(n);return"string"==typeof i?"string"==typeof r&&i===r:"string"==typeof r?r in i:Object.keys(r).every(e=>e in i&&t(r[e],i[e]))}(t,this.value)},tk=function(t){return this.tags.has(t)},tN=function(t){let e=this.machine.getTransitionData(this,t);return!!e?.length&&e.some(t=>void 0!==t.target||t.actions.length)},tR=function(){let{_nodes:t,tags:e,machine:n,getMeta:r,toJSON:i,can:o,hasTag:a,matches:s,...u}=this;return{...u,tags:Array.from(e)}},tI=function(){return this._nodes.reduce((t,e)=>(void 0!==e.meta&&(t[e.id]=e.meta),t),{})};function tC(t,e){return{status:t.status,output:t.output,error:t.error,machine:e,context:t.context,_nodes:t._nodes,value:tt(e.root,t._nodes),tags:new Set(t._nodes.flatMap(t=>t.tags)),children:t.children,historyValue:t.historyValue||{},matches:t$,hasTag:tk,can:tN,getMeta:tI,toJSON:tR}}function tA(t,e={}){return tC({...t,...e},t.machine)}function tT(t,e){let{_nodes:n,tags:r,machine:i,children:o,context:a,can:s,hasTag:u,matches:l,getMeta:c,toJSON:f,...d}=t,p={};for(let t in o){let n=o[t];p[t]={snapshot:n.getPersistedSnapshot(e),src:n.src,systemId:n.systemId,syncSnapshot:n._syncSnapshot}}return{...d,context:function t(e){let n;for(let r in e){let i=e[r];if(i&&"object"==typeof i)if("sessionId"in i&&"send"in i&&"ref"in i)(n??=Array.isArray(e)?e.slice():{...e})[r]={xstate$$type:N,id:i.id};else{let o=t(i);o!==i&&((n??=Array.isArray(e)?e.slice():{...e})[r]=o)}}return n??e}(a),children:p,historyValue:function(t){if("object"!=typeof t||null===t)return{};let e={};for(let n in t){let r=t[n];Array.isArray(r)&&(e[n]=r.map(t=>({id:t.id})))}return e}(d.historyValue)}}function tD(t,e,n,r,{event:i,id:o,delay:a},{internalQueue:s}){let u,l=e.machine.implementations.delays;if("string"==typeof i)throw Error(`Only event objects may be used with raise; use raise({ type: "${i}" }) instead`);let c="function"==typeof i?i(n,r):i;if("string"==typeof a){let t=l&&l[a];u="function"==typeof t?t(n,r):t}else u="function"==typeof a?a(n,r):a;return"number"!=typeof u&&s.push(c),[e,{event:c,id:o,delay:u},void 0]}function tL(t,e){let{event:n,delay:r,id:i}=e;if("number"==typeof r)return void t.defer(()=>{let e=t.self;t.system.scheduler.schedule(e,e,n,r,i)})}function tz(t,e){function n(t,e){}return n.type="xstate.raise",n.event=t,n.id=e?.id,n.delay=e?.delay,n.resolve=tD,n.execute=tL,n}},895:function(t,e,n){n.d(e,{X:()=>tz});var r=n(5997),i=n(4825),o=n(9026),a=n(2147);function s({x:t,y:e}){return`${t},${e}`}function u(t){return(0,r.jsx)("g",{className:"map-layers",children:t.mapLayers.map((e,n)=>(0,r.jsx)(i.Fragment,{children:"line"===e.type?function(t,e){var n;let u=void 0!==e.filter?(n=e.filter,o.b.mapData.lines.features.filter(t=>n(t.properties)).map(t=>({name:d(t.properties.name),id:(0,a.bh)(t.properties)+"",tags:c(t.properties),width:l(t.properties),vs:t.geometry.coordinates}))):void 0!==e.data?e.data.map(t=>({tags:[],vs:t})):[];return 0===u.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("g",{className:e.name,style:{contain:"content"},children:u.map((n,o)=>(0,r.jsx)(i.Fragment,{children:function(t,{id:e,tags:n,width:i,widthScale:o,vs:a},u,l,c){return(0,r.jsx)("path",{id:void 0===e?void 0:`path${e}`,className:[u,...n].join(" ").replaceAll(/;/g,"_"),strokeWidth:(i??l??1)*(o??c??1),d:function(e){return(function(t,e){let[n,r]=t[0];return`M${s(e.transformPoint({x:n,y:r}))}`+t.slice(1).map(([t,n])=>e.transformPoint({x:t,y:n})).map(t=>`L${s(t)}`)})(e,t).replaceAll(/([.]\d\d)\d*/g,"$1")}(a)})}(t,n,e.name,e.width,e.widthScale)},o))})}(t.m,e):function(t,e){var n;let u=void 0!==e.filter?(n=e.filter,o.b.mapData.multipolygons.features.filter(t=>n(t.properties)).map(t=>({name:d(t.properties.name),id:(0,a.bh)(t.properties)+"",tags:c(t.properties),width:l(t.properties),vs:t.geometry.coordinates}))):void 0!==e.data?e.data.map(t=>({tags:[],vs:t})):[];return 0===u.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("g",{className:e.name,children:u.map((n,o)=>(0,r.jsx)(i.Fragment,{children:function(t,{id:e,tags:n,width:i,widthScale:o,vs:a},u,l,c){return(0,r.jsx)("path",{id:e,className:[u,...n].join(" ").replaceAll(/;/g,"_"),strokeWidth:(i??l??1)*(o??c??1),d:function(e){return e.map(e=>e.map(e=>(function(t,e){let[n,r]=t[0];return`M${s(e.transformPoint({x:n,y:r}))}`+t.slice(1,-1).map(([t,n])=>e.transformPoint({x:t,y:n})).map(t=>`L${s(t)}`)+"Z"})(e,t)).join("")).join("").replaceAll(/([.]\d\d)\d*/g,"$1")}(a)})}(t,n,e.name,e.width,e.widthScale)},o))})}(t.m,e)},n))})}function l(t){let e=t?.other_tags?.match(/"width"=>"([1-9][.0-9]*)"/);return e?Math.round(Number(e[1])):void 0}function c(t){return f.flatMap(e=>e(t))}let f=[function(t){let e=t?.other_tags?.match(/"access"=>"([^"][^"]*)"/);return e?[`access-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"service"=>"([^"][^"]*)"/);return e?[`service-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"surface"=>"([^"][^"]*)"/);return e?[`surface-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"lanes"=>"([^"][^"]*)"/);return e?[`lanes-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"tunnel"=>"([^"][^"]*)"/);return e?[`tunnel-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"building"=>"([^"][^"]*)"/);return e?[`building-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"level"=>"([^"][^"]*)"/);return e?[`level-${e[1]}`]:[]}];function d(t){return t===d||null===t?void 0:t}var p=n(1121),h=n(5835);function m({pointsFilter:t,polygonsFilter:e,linesFilter:n,data:r}){var i,a,s,u,l,c;let f=o.b.mapData;return[...void 0===t?[]:(i=f.points.features,a=t,i.filter(t=>a(t.properties)).flatMap(g)),...void 0===n?[]:(s=f.lines.features,u=n,s.filter(t=>u(t.properties)).flatMap(g)),...void 0===e?[]:(l=f.multipolygons.features,c=e,l.filter(t=>c(t.properties)).flatMap(g)),...void 0===r?[]:r]}function g(t){let e=t.properties.centroid_x,n=t.properties.centroid_y;return null===e||null===n?[]:[(0,h.v)(e,n)]}function y(t){let e=25/t.fontSize;return(0,r.jsxs)("defs",{className:"map-markers",children:[t.mapMarkers.map((n,i)=>(0,r.jsx)("g",{children:(0,r.jsx)(v,{m:t.m,sz:e,name:n.name,href:n.name,vs:m(n)})},i)),(0,r.jsx)(x,{sz:e}),(0,r.jsx)(b,{sz:e}),(0,r.jsx)("style",{children:(0,r.jsx)(w,{...t})})]})}function v(t){return(0,r.jsx)(r.Fragment,{children:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n},i)=>(0,r.jsx)("use",{className:`${t.name}-${i}`,href:t.href,style:{transform:`translate(${(0,p.$V)(e)}px, ${(0,p.$V)(n)}px)scale(var(${t.sz}))`}},i))})}function x(t){var e;let n=t.sz/2;return(0,r.jsx)("path",{id:"point-name-marker",fill:"white",fillOpacity:"0.5",stroke:"none",strokeWidth:n/20,d:(e=n,`
M 0,0
m ${-e},0
a ${e},${e} 0,1,1 ${2*e},0
a ${e},${e} 0,1,1 ${-2*e},0
z
`).replaceAll(/([.]\d\d)\d*/g,"$1")})}function b(t){let e=t.sz/2,n=e/Math.sqrt(2);return(0,r.jsx)("path",{id:"position",className:"position",fill:"red",fillOpacity:"1",stroke:"none",d:(function(t,e){return`

M 0,0
l ${-t},${-t}
a ${e},${e} 0,1,1 ${2*t},0
z

m 0,${-t-e/4}
a ${e/2},${e/2} 0,1,0 0,${-e}
a ${e/2},${e/2} 0,1,0 0,${e}
z
`})(n,e).replaceAll(/([.]\d\d)\d*/g,"$1")})}function w(t){let e=(0,a.Jl)(),n=t.s*t.fontSize*.9;if(null===e)return(0,r.jsx)(r.Fragment,{children:`
#position {
  display: none;
}`});let{x:i,y:s}=o.b.mapCoord.matrix.transformPoint({x:e.coords.longitude,y:e.coords.latitude});return(0,r.jsx)(r.Fragment,{children:`
#position {
  display: initial !important;
  transform: translate(${i}px, ${s}px) scale(${n});
}
`})}function j(t,e,n){let r=t.name;return null===r||"string"!=typeof r||void 0!==e&&r.match(e)?[]:(void 0===n?r:r.replace(n," $1 ")).trim().split(S).map(t=>t.trim())}let S=/[ 　][ 　]*/;function _(t){return(0,r.jsx)("g",{className:"map-objects",children:t.mapObjects.map((e,n)=>(0,r.jsx)("g",{children:(0,r.jsx)(E,{m:t.m,name:e.name,path:e.path,width:e.width,vs:m(e)})},n))})}function E(t){return(0,r.jsx)("path",{className:t.name,fill:"none",stroke:"black",strokeWidth:t.width,d:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n})=>`M ${e},${n}`.replaceAll(/([.]\d\d)\d*/g,"$1")+t.path).join("")})}function M(t){return(0,r.jsx)("g",{className:"map-symbols",children:t.mapSymbols.map((e,n)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("g",{className:e.name,children:(0,r.jsx)(O,{name:e.name,href:e.href,vs:m(e),m:t.m})})},n))})}function O(t){return(0,r.jsx)(r.Fragment,{children:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n},i)=>(0,r.jsx)("use",{className:`${t.name}-${i}`,href:t.href,style:{transform:`translate(${e}px, ${n}px)`.replaceAll(/([.]\d\d)\d*/g,"$1")+"scale(var(--map-symbol-size))"}},i))})}var $=n(2216);let k="map-svg-layers",N="map-svg-objects",R="map-svg-symbols",I="map-svg-markers",C="map-svg-labels",A="map-html";var T=n(7809),D=n(210),L=n(2585);function z(){return(0,$._U)(A,(0,r.jsx)(F,{})),(0,r.jsx)("div",{id:A,className:"content svg"})}function F(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"map-html-content",children:(0,r.jsx)(q,{})}),(0,r.jsx)(U,{})]})}function U(){let t=(0,T.gK)(),{scroll:e}=t,n=(0,D.ZI)(t),i=`
#map-html-content {
  position: absolute;
  left: 0;
  top: 0;
  width: ${(0,p.$V)(e.width)}px;
  height: ${(0,p.$V)(e.height)}px;
  transform: ${n.toString()};
  transform-origin: left top;
}
`;return(0,r.jsx)("style",{children:i})}function q(){let{pointNames:t}=(0,L.Ev)(),e=o.b.mapCoord.matrix;return(0,r.jsx)(r.Fragment,{children:t.map(t=>({...t,pos:e.transformPoint(t.pos)})).map((t,e)=>(0,r.jsx)("div",{style:{position:"absolute",left:0,top:0,transform:`translate(${t.pos.x}px, ${t.pos.y}px) scale(0.025) translate(-50%, -50%)`,transformOrigin:"left top"},children:t.name.map((t,e)=>(0,r.jsx)("p",{style:{margin:0,textAlign:"center",width:"20em"},children:t},e))},e))})}var P=n(8569);function W(t,e){return(-.5*t+(e+.5))*1.2}function H(){return(0,$._U)(C,(0,r.jsx)(Z,{})),(0,r.jsx)("div",{id:C,className:"content svg"})}function Z(){let t=o.b.cartoConfig?.filterLabelsByRange??!0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{}),(0,r.jsx)(J,{}),t?(0,r.jsx)(V,{}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(B,{}),(0,r.jsx)("style",{children:K})]})}let K=`
#map-svg-labels-svg,
#map-svg-labels1 {
  contain: content;
  pointer-events: none;
}
#map-svg-labels-defs {
  display: none;
}
text, tspan {
  contain: layout;
}
`;function X(){let{pointNames:t,areaNames:e}=(0,L.Ev)(),n=o.b.mapCoord.matrix;return(0,r.jsxs)("g",{id:"map-svg-labels1",children:[(0,r.jsx)("g",{children:t.map(t=>({...t,pos:n.transformPoint(t.pos)})).map(({id:t,pos:{x:e,y:n},size:i},o)=>(0,r.jsx)("use",{href:`#name-${t}`,style:{transform:`translate(${(0,p.$V)(e)}px, ${(0,p.$V)(n)}px) scale(${Math.round(i/10)/16})`}},o))}),(0,r.jsx)("g",{children:e.map(t=>({...t,pos:n.transformPoint(t.pos)})).map(({id:t,pos:{x:e,y:n},size:i},o)=>(0,r.jsx)("use",{id:`use-${t}`,href:`#name-${t}`,style:{transform:`translate(${(0,p.$V)(e)}px, ${(0,p.$V)(n)}px) scale(${Math.round(i/10)/16})`}},o))})]})}function V(){let{areaRange:t}=(0,L.HD)(),e=Array.from(t.insides.keys()).map(t=>`#use-${t}`).join(", "),n=Array.from(t.outsides.keys()).map(t=>`#use-${t}`).join(", ");return(0,r.jsx)("style",{children:`
${e} {
  display: initial;
}
${n} {
  display: none;
}
/* define these to kick style re-calculation */
use {
  --n-insides: ${e.length};
  --n-outsides: ${n.length};
}
`})}function B(){let{sizes:t}=(0,L.Ev)(),e=(0,T.tX)(),n=(0,i.useMemo)(()=>{var n,r;return n=t,r=e,n.map(t=>{let e=Math.pow(2,t)/r;return{size:t,opacity:(0,p.$V)(Math.pow(e>1e3?0:e<0?1:(1e3-e)/1e3,2))}})},[e,t]);return(0,r.jsx)("style",{children:`
${n.map(({size:t,opacity:e})=>`
.size-${t} {
  opacity: ${e};
}
`).reduce((t,e)=>t+e)}
`})}function Y(){let{scroll:t,svg:e}=(0,T.gK)();return(0,r.jsx)("svg",{id:"map-svg-labels-content",viewBox:(0,P.C6)(e),width:(0,p.$V)(t.width),height:(0,p.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-labels1"})})}function J(){let{pointNames:t,areaNames:e}=(0,L.Ev)();return(0,r.jsx)("svg",{id:"map-svg-labels-defs",children:(0,r.jsxs)("defs",{children:[(0,r.jsx)("g",{children:t.map((t,e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(G,{_poi:t})},e))}),(0,r.jsx)("g",{children:e.map((t,e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(G,{_poi:t})},e))}),(0,r.jsx)(X,{})]})})}function G(t){let{id:e,name:n}=t._poi,{sizeMap:o}=(0,L.Ev)(),a=null===e?void 0:o.get(e);return void 0===a?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("text",{id:`name-${e}`,className:`size-${a}`,children:n.map((t,e)=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("tspan",{textAnchor:"middle",alignmentBaseline:"middle",x:"0",y:(0,p.$V)(16*W(n.length,e)),fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,children:t}),(0,r.jsx)("tspan",{textAnchor:"middle",alignmentBaseline:"middle",x:"0",y:(0,p.$V)(16*W(n.length,e)),fill:"black",children:t})]},e))})}function Q(){return(0,$._U)(k,(0,r.jsx)(tt,{})),(0,r.jsx)("div",{id:k,className:"content svg"})}function tt(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tn,{}),(0,r.jsx)(tr,{}),(0,r.jsx)("style",{children:te})]})}let te=`
#map-svg-svg,
#map1 {
  contain: content;
  pointer-events: none;
}
#map-svg-defs {
  display: none;
}
`;function tn(){let{scroll:t,svg:e}=(0,T.gK)();return(0,r.jsx)("svg",{id:"map-svg-layers-content",viewBox:(0,P.C6)(e),width:(0,p.$V)(t.width),height:(0,p.$V)(t.height),children:(0,r.jsx)("use",{href:"#map1"})})}function tr(){let t=o.b;return(0,r.jsxs)("svg",{id:"map-svg-defs",viewBox:"0 0 1 1",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("g",{id:t.map,className:"map",children:[(0,r.jsx)(u,{m:o.b.mapCoord.matrix,mapLayers:t.getMapLayers()}),(0,r.jsx)("style",{children:t.mapSvgStyle})]})}),(0,r.jsx)("style",{children:`
.map-layers,
.map-objects,
.map-symbols,
path {
  contain: content;
}
`})]})}var ti=n(3229);function to(){return(0,$._U)(I,(0,r.jsx)(ta,{})),(0,r.jsx)("div",{id:I,className:"content svg"})}function ta(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tu,{}),(0,r.jsx)(tl,{}),(0,r.jsx)("style",{children:ts})]})}let ts=`
#map-svg-markers-svg,
#map-svg-markers1 {
  contain: content;
  pointer-events: none;
}
#map-svg-markers-defs {
  display: none;
}
`;function tu(){let{scroll:t,svg:e}=(0,T.gK)();return(0,r.jsx)("svg",{id:"map-svg-markers-content",viewBox:(0,P.C6)(e),width:(0,p.$V)(t.width),height:(0,p.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-markers1"})})}function tl(){let{fontSize:t}=(0,T.mG)(),e=(0,T.tX)();return(0,r.jsxs)("svg",{id:"map-svg-markers-defs",children:[(0,r.jsx)(y,{m:o.b.mapCoord.matrix,mapMarkers:o.b.getMapMarkers(),fontSize:t,s:e}),(0,r.jsxs)("g",{id:"map-svg-markers1",children:[(0,r.jsx)(tc,{}),(0,r.jsx)("style",{children:(0,r.jsx)(ti.Q,{})}),(0,r.jsx)("use",{href:"#position"})]})]})}function tc(){let{pointNames:t}=(0,L.Ev)(),e=o.b.mapCoord.matrix;return(0,r.jsx)("g",{children:t.map(t=>({...t,pos:e.transformPoint(t.pos)})).map(({pos:t},e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(tf,{pos:t})},e))})}function tf(t){let{pos:e}=t;return(0,r.jsx)("use",{href:"#point-name-marker",style:{transform:`translate(${(0,p.$V)(e.x)}px, ${(0,p.$V)(e.y)}px)`}})}function td(){return(0,$._U)(N,(0,r.jsx)(tp,{})),(0,r.jsx)("div",{id:N,className:"content svg"})}function tp(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tm,{}),(0,r.jsx)(tg,{}),(0,r.jsx)("style",{children:th})]})}let th=`
#map-svg-svg,
#map1 {
  contain: content;
  pointer-events: none;
}
#map-svg-defs {
  display: none;
}
`;function tm(){let{scroll:t,svg:e}=(0,T.gK)();return(0,r.jsx)("svg",{id:"map-svg-objects-content",viewBox:(0,P.C6)(e),width:(0,p.$V)(t.width),height:(0,p.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-objects1"})})}function tg(){let t=o.b;return(0,r.jsxs)("svg",{id:"map-svg-objects-defs",viewBox:"0 0 1 1",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("g",{id:"map-svg-objects1",children:(0,r.jsx)(_,{m:o.b.mapCoord.matrix,mapObjects:t.getMapObjects()})})}),(0,r.jsx)("style",{children:`
.map-layers,
.map-objects,
.map-symbols,
path {
  contain: content;
}
`})]})}var ty=n(4063);function tv(){return(0,$._U)(R,(0,r.jsx)(tx,{})),(0,r.jsx)("div",{id:R,className:"content svg"})}function tx(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tw,{}),(0,r.jsx)(tj,{}),(0,r.jsx)("style",{children:tb})]})}let tb=`
#map-svg-symbols-svg,
#map-svg-symbols1 {
  contain: content;
  pointer-events: none;
}
#map-svg-symbols-defs {
  display: none;
}
`;function tw(){let{scroll:t,svg:e}=(0,T.gK)();return(0,r.jsx)("svg",{id:"map-svg-symbols-content",viewBox:(0,P.C6)(e),width:(0,p.$V)(t.width),height:(0,p.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-symbols1"})})}function tj(){return(0,r.jsx)("svg",{id:"map-svg-symbols-defs",children:(0,r.jsxs)("g",{id:"map-svg-symbols1",children:[(0,r.jsx)("defs",{children:(0,r.jsx)(ty.n5,{})}),(0,r.jsx)(M,{m:o.b.mapCoord.matrix,mapSymbols:o.b.getMapSymbols()}),(0,r.jsx)("style",{children:(0,r.jsx)(ti.Q,{})})]})})}var tS=n(2636);let t_=`
.island {
  fill: darkgray;
  fill-opacity: 1;
}

.area {
  fill: #bcd35f;
  fill-opacity: 1;
}

.cliff {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
  stroke-width: 10px;
}

.rock {
  fill: gray;
  fill-opacity: 0.5;
}

.grave_yard {
  fill: black;
  fill-opacity: 0.1;
}

.parking {
  fill: white;
  fill-opacity: 0.25;
}

.building {
  fill: lightgray;
}

.roof {
  fill: lightgray;
  fill-opacity: 0.5;
}

.pedestrian-area {
  fill: white;
  stroke: white;
  stroke-width: 0.5px;
}

.water {
  fill: lightblue;
}

.ditch {
  fill: none;
  stroke: lightblue;
  stroke-width: 0.25px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.drain {
  fill: none;
  stroke: lightblue;
  stroke-width: 0.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stream {
  fill: none;
  stroke: lightblue;
  stroke-width: 1px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.river {
  fill: none;
  stroke: lightblue;
  stroke-width: 5px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wetland {
  fill: lightblue;
  fill-opacity: 0.5;
}

.grass {
  fill: khaki;
  fill-opacity: 0.25;
}

.farmland {
  fill: khaki;
  fill-opacity: 0.5;
}

.forest,
.garden {
  fill: darkgreen;
  fill-opacity: 0.2;
}

.playground {
  fill: red;
  fill-opacity: 0.05;
}

.road {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.service {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.path {
  fill: none;
  stroke: khaki;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cycleway {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pedestrian,
.footway {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.footway-bridge {
  fill: none;
  stroke: black;
}

.steps {
  fill: none;
  stroke: black;
  stroke-opacity: 0.25;
  stroke-dasharray: 0.5, 0.5;
  stroke-dashoffset: 0.5;
}

.access {
  stroke-opacity: 0.25;
}

.escalator.background {
  fill: none;
  stroke: black;
  stroke-width: 1.5px;
}
.escalator.foreground {
  fill: none;
  stroke: white;
  stroke-width: 1px;
  stroke-dasharray: 0.5, 0.5;
  stroke-dashoffset: 0.5;
}

.tunnel {
}

.bridge {
  fill: none;
  stroke: white;
}
.bridge.shadow {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
}
.bridge.edge {
  fill: none;
  stroke: black;
}

.tunnel.shadow {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
}

.wall {
  fill: none;
  stroke: black;
  stroke-width: 0.5px;
}

.fence {
  fill: none;
  stroke: black;
  stroke-width: 0.25px;
}

.retaining-wall {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
  stroke-width: 0.5px;
}

text,
tspan {
  font-size: 2.5px;
  font-weight: initial;
  text-anchor: middle;
}
`,tE="m -0.7,0 v -0.4 m 1.4,0.4 v -0.4 m 0.3,0 h -2",tM="m 0,1 h -1 v -2 h 2 v 2 h -1 v -2 m -0.5,1 m -0.2,-0.2 l 0.2,0.2 l -0.2,0.2 m 0.2,-0.2 h -1",tO="m 0,0 v -1.4 h -0.7 m 0,0.6 h 0.7 m 0,-0.3 h 0.7",t$="m -0.4,0 v -0.7 m 0.8,0.7 v -0.7 m 0.1,0 h -1 v -0.7 h 1 z",tk="m -0.5 0 v -0.3 h 1 v 0.3 m -0.75 -0.3 v -1.2 h 0.5 v 1.2",tN="m -0.5 0 v -0.3 h 1 v 0.3 m -0.5 -0.3 s -0.4 -0.75 0 -0.75 h 0 a 0.125 0.125 0 0 1 0 -0.25 a 0.125 0.125 0 0 1 0 0.25 s 0.4 0 0 0.75",tR="m -0.9 0 v -2 m 1.8 2 v -2 m -2.3 0 h 2.8 m -2.6 0.4 h 2.4",tI="m 0,0 0,-4 m 0,2 c 3,0 2,-6 0,-6 c -2,0 -3,6 0,6 z",tC="m -0.5,0 v -1.8 h 1 v 1.8 z m 0.1,-0.9 v -0.7 h 0.8 v 0.7 z m 0.6,0.2 h 0.2 m -0.7,0.5 v -0.2 h 0.6 v 0.2 z",tA="m -0.5,-1 l 0.15,1 h 0.7 l 0.15,-1";Object.entries({bench:tE,entrance:tM,guide_post:tO,info_board:t$,monument:tk,statue:tN,torii:tR,tree:tI,vending_machine:tC,waste_basket:tA});var tT=n(7571);function tD(t){let e=new Map([...Object.keys(t.properties).filter(t=>"other_tags"!==t&&!t.match(/^centroid|^area$/)).filter(e=>e in t.properties&&t.properties instanceof Object&&null!==t.properties[e]).map(e=>[e,String(t.properties[e])]),...t.properties.other_tags?.split(/","/g).map(t=>t.split(/"=>"/).map(t=>t.replace(/"/,"")))??[]]);return(0,r.jsx)("table",{className:"properties",style:{display:"block",fontSize:"x-small",borderSpacing:0,margin:"1em 0.5em",maxWidth:"calc(50vmin - 2em)",overflowX:"scroll",overscrollBehaviorX:"none",touchAction:"pan-x pan-y"},children:(0,r.jsx)("tbody",{style:{border:0},children:(0,r.jsx)(tL,{tags:e})})})}function tL(t){return(0,r.jsx)(r.Fragment,{children:Array.from(t.tags.entries()).map(([t,e],n)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)("tr",{style:{margin:0,boxSizing:"border-box"},children:(0,r.jsxs)("td",{style:{border:"0.5px darkgray solid",margin:0,padding:"0.25em",boxSizing:"border-box",scrollbarWidth:"none",width:"calc(50vmin - 2em)"},children:[(0,r.jsxs)("span",{style:{color:"gray"},children:[t," "]}),(0,r.jsx)("span",{style:{},children:e})]})})},n))})}let tz={getMapLayers:()=>[{type:"multipolygon",name:"island",filter:t=>!!t.natural?.match(/^coastline$/)},{type:"multipolygon",name:"area",data:(tS.b9.cartoConfig?.internals??tS.b9.mapData.internals).features.map(t=>t.geometry.coordinates)},{type:"line",name:"cliff",filter:t=>!!t.other_tags?.match(/"natural"=>"(cliff)"/)},{type:"multipolygon",name:"rock",filter:t=>!!t.natural?.match(/rock|bare_rock/)},{type:"multipolygon",name:"grass",filter:t=>!!t.landuse?.match(/grass/)},{type:"multipolygon",name:"forest",filter:t=>!!t.landuse?.match(/forest/)||!!t.natural?.match(/wood/)},{type:"multipolygon",name:"garden",filter:t=>!!t.leisure?.match(/garden/)},{type:"multipolygon",name:"farmland",filter:t=>!!t.landuse?.match(/farmland/)},{type:"multipolygon",name:"water",filter:t=>!!t.natural?.match(/^water$/)},{type:"line",name:"ditch",filter:t=>!!t.waterway?.match(/^(ditch)$/)},{type:"line",name:"drain",filter:t=>!!t.waterway?.match(/^(drain)$/)},{type:"line",name:"stream",filter:t=>!!t.waterway?.match(/^(stream)$/)},{type:"line",name:"river",filter:t=>!!t.waterway?.match(/^(river)$/)},{type:"multipolygon",name:"wetland",filter:t=>!!t.natural?.match(/wetland/)},{type:"multipolygon",name:"playground",filter:t=>!!t.tourism?.match(/zoo/)||!!t.leisure?.match(/ice_rink|pitch|playground/)||!!t.landuse?.match(/recreation_ground/)},{type:"multipolygon",name:"grave_yard",filter:t=>!!t.amenity?.match(/grave_yard/)},{type:"multipolygon",name:"parking",filter:t=>!!t.amenity?.match(/(parking|bicycle_parking)/)},{type:"multipolygon",name:"building",filter:t=>!!t.building?.match(/./)&&!t.building?.match(/roof/)},{type:"line",name:"path",width:1,filter:t=>!!t.highway?.match(/^(path|track)$/)},{type:"line",name:"footway",width:1,filter:t=>!!t.highway?.match(/^(footway|steps)$/)},{type:"line",name:"steps",width:1,filter:t=>!!t.highway?.match(/^(steps)$/)},{type:"line",name:"cycleway",width:3,filter:t=>!!t.highway?.match(/^(cycleway)$/)},{type:"line",name:"service",width:4,filter:t=>!!t.highway?.match(/^(service)$/)},{type:"line",name:"pedestrian",width:8,filter:t=>!!t.highway?.match(/^(pedestrian)$/)},{type:"line",name:"road",width:6,filter:t=>!!t.highway?.match(/./)&&!t.highway?.match(/^(footway|path|pedestrian|steps|cycleway|track|service)$/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.other_tags?.match(/("highway"=>"service"|"area:highway"=>"service")/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.man_made?.match(/bridge/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.other_tags?.match(/"pedestrian"/)},{type:"line",name:"escalator background",filter:t=>!!t.highway?.match(/^(steps)$/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{type:"line",name:"escalator foreground",filter:t=>!!t.highway?.match(/^(steps)$/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{type:"line",name:"wall",filter:t=>!!t.barrier?.match(/^(wall)$/)},{type:"line",name:"fence",filter:t=>!!t.barrier?.match(/^(fence)$/)},{type:"line",name:"retaining-wall",filter:t=>!!t.barrier?.match(/^(retaining_wall)$/)},{type:"line",name:"bridge shadow",widthScale:1.8,filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"bridge edge",widthScale:1.4,filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"bridge road",filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"tunnel shadow",widthScale:1.8,filter:t=>!!t.highway?.match(/./)&&!!t.other_tags?.match(/"tunnel"/)},{type:"multipolygon",name:"roof",filter:t=>!!t.building?.match(/./)&&!!t.building?.match(/roof/)}],getMapObjects:()=>[{name:"benches",path:tE,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"bench"/)},{name:"entrances",path:tM,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"entrance"/)},{name:"guide-posts",path:tO,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"guidepost"/)},{name:"info-boards",path:t$,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"information"=>"(board|map)"/)},{name:"trees1",path:tI,width:.15,pointsFilter:t=>!!t.other_tags?.match(/"tree"/)},{name:"torii",path:tR,width:.05,pointsFilter:t=>!!t.man_made?.match(/^torii$/)||!!t.other_tags?.match(/"amenity"=>"place_of_worship"/)&&!!t.other_tags?.match(/"religion"=>"shinto"/)},{name:"monument",path:tk,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"historic"=>"(monument|memorial|tomb)"/)},{name:"statue",path:tN,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"artwork_type"=>"statue"/)},{name:"vending-machine",path:tC,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"vending_machine"/)},{name:"waste-basket",path:tA,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"waste_basket"/)}],getMapSymbols:()=>[{name:"toilets",href:"#XToilets",pointsFilter:t=>!!t.other_tags?.match(/"toilets"/),polygonsFilter:t=>"toilets"===t.building||"toilets"===t.amenity||!!t.other_tags?.match(/"toilets"/)},{name:"parkings",href:"#XParking",pointsFilter:t=>!!t.other_tags?.match(/"parking"/),polygonsFilter:t=>"parking"===t.amenity||!!t.other_tags?.match(/"parking"/)},{name:"drinking-fountains",href:"#XDrinkingFountain",pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"drinking_water"/)},{name:"elevators",href:"#XElevator",pointsFilter:t=>!!t.highway?.match(/elevator/)},{name:"escalators",href:"#XEscalator",linesFilter:t=>!!t.highway?.match(/steps/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{name:"buses",href:"#XBus",pointsFilter:t=>!!t.other_tags?.match(/"bus"=>"yes"/)},{name:"informations",href:"#XInformation",pointsFilter:t=>!!t.other_tags?.match(/"tourism"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/),polygonsFilter:t=>!!t.other_tags?.match(/"tourist"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/)}],getMapMarkers:()=>[{name:"all"}],getMapNames:function(){let t=o.b.cartoConfig?.skipNamePattern,e=o.b.cartoConfig?.splitNamePattern;return[...o.b.mapData.points.features.flatMap(({properties:n})=>{let r=(0,a.bh)(n);if(null===n.centroid_x||null===n.centroid_y)return[];let i=[n.centroid_x,n.centroid_y],o=(0,h.t6)(i),s=j(n,t,e);return 0===s.length?[]:[{id:null===r?null:r,name:s,pos:o,size:0,area:void 0}]}),...o.b.mapData.multipolygons.features.flatMap(({properties:n})=>{let r=(0,a.bh)(n);if(null===n.centroid_x||null===n.centroid_y)return[];let i=[n.centroid_x,n.centroid_y],o=(0,h.t6)(i),s=function t(e){return e===t||null===e?void 0:e}(n?.area),u=j(n,t,e);return 0===u.length?[]:[{id:null===r?null:r,name:u,pos:o,size:0,area:s}]})]},searchEntries:[{filter:t=>!!t?.other_tags?.match(/"toilets"/),getInfo:(t,e)=>({title:"toilets",x:{tag:"facility",title:"toilets",address:e,properties:t}})},{filter:t=>!!t?.other_tags?.match(/"bus_stop"/),getInfo:(t,e)=>({title:"bus_stop",x:{tag:"facility",title:"bus_stop",address:e,properties:t}})},{filter:t=>"highway"in t&&!!t.highway?.match(/elevator/)&&!t.other_tags?.match(/"level"=>"[1-9][^"]*"/),getInfo:(t,e)=>({title:"elevator",x:{tag:"facility",title:"elevator",address:e,properties:t}})},{filter:t=>"highway"in t&&!!t.highway?.match(/steps/)&&!!t.other_tags?.match(/"conveying"=>"yes"/),getInfo:(t,e)=>({title:"elevator",x:{tag:"facility",title:"escalator",address:e,properties:t}})},{filter:t=>!!t?.other_tags?.match(/"amenity"=>"drinking_water"/),getInfo:(t,e)=>({title:"water",x:{tag:"facility",title:"water",address:e,properties:t}})},{filter:t=>!!t.other_tags?.match(/"tourism"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/),getInfo:(t,e)=>({title:"information",x:{tag:"facility",title:"information",address:e,properties:t}})},{filter:t=>!!t.name?.match(/./),getInfo:(t,e)=>({title:"shop",x:{tag:"shop",address:e,properties:t}})}],renderInfo:function(t){var e,n;let i,o,s,u,l,c=tS.b9.mapMap,f=Number(t.info.x.address),d="address"in t.info.x?(0,a.Ly)(f,c):null;return null===d?(0,r.jsxs)("p",{children:["XXX info not found (osm_id=",t.info.x.address,") XXX"]}):"shop"===t.info.x.tag?(e={x:t.info.x,properties:d},i=(0,a.De)(e.properties,"website"),o=Number(e.properties.osm_id??""),s=Number(("osm_way_id"in e.properties&&e.properties.osm_way_id)??""),u=0!==o?o:0!==s?s:0,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:[e.properties.name??e.x.name," ",0!==u&&(0,r.jsx)(tS.OV,{_id:u})]}),(0,r.jsxs)("p",{children:[null!==i&&(0,r.jsx)("a",{target:"_blank",href:i,children:"\uD83C\uDF10"}),0!==o&&(0,r.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/node/${o}`,children:"\uD83D\uDDFA️"}),0!==s&&(0,r.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/way/${s}`,children:"\uD83D\uDDFA️"})]}),(0,r.jsx)(tD,{properties:e.properties})]})):(l=void 0!==(n={x:t.info.x,properties:d}).x.title&&tT.Ci.get(n.x.title),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1em"},children:(0,r.jsx)("svg",{style:{display:"block"},viewBox:"-36 -36 72 72",width:"3em",height:"3em",children:l&&(0,r.jsx)("use",{href:l})})}),(0,r.jsx)("p",{children:n.x.properties.name}),(0,r.jsx)(tD,{properties:n.properties})]}))},mapSvgStyle:t_,renderMap:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q,{}),(0,r.jsx)(td,{}),(0,r.jsx)(tv,{}),(0,r.jsx)(to,{}),(0,r.jsx)(H,{}),(0,r.jsx)(z,{})]})},isMapRendered:function(){return(0,$.O4)(k)}}},3229:function(t,e,n){n.d(e,{Q:()=>d,y:()=>c});var r=n(5997),i=n(4825),o=n(6556),a=n(4040),s=n(9512),u=n(1121),l=n(7809);function c(){let t=document.getElementById("style-root");if(null===t)throw Error("#style-root not found!");(0,o.createRoot)(t).render((0,r.jsx)(i.StrictMode,{children:(0,r.jsx)(f,{})}))}function f(){let t=(0,l.Jc)();(0,i.useEffect)(()=>{requestAnimationFrame(a.FK)},[t]);let e=(0,l.xE)(),n=(0,l.fQ)()?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${s.c5};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",o=(0,l.nQ)(),c=`
.content {
  width: ${(0,u.$V)(o.width)}px;
  height: ${(0,u.$V)(o.height)}px;
}
`;return(0,r.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,c]})}function d(){let t=(0,l.mG)(),e=(0,l.tX)(),n=(0,l.f4)(),i=t.fontSize*(.5+.5*Math.log2(Math.max(1,n)))*e,o=`
use,
.map-symbols,
.map-markers {
  --map-symbol-size: ${i/72};
}
`;return(0,r.jsx)(r.Fragment,{children:o})}},9026:function(t,e,n){n.d(e,{b:()=>o,M:()=>a});var r=n(4825);let i={type:"",name:"",crs:{type:"",properties:{name:""}},features:[]},o={root:"root",map:"map",href:"map.svg",width:0,height:0,fontSize:16,origViewBox:{x:0,y:0,width:0,height:0},title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,getMapLayers:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],getMapNames:()=>[],searchEntries:[],renderInfo:function(t){return(0,r.createElement)("p",{},t.info.title)},mapSvgStyle:"",renderMap:function(){return(0,r.createElement)("div")},isMapRendered:()=>!0,mapData:{areas:i,internals:i,origin:i,measures:i,viewbox:i,points:i,lines:i,multilinestrings:i,multipolygons:i},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly}};function a(t){o={...o,...t}}},4040:function(t,e,n){n.d(e,{AI:()=>q,Aq:()=>D,Dl:()=>i,F0:()=>S,FK:()=>F,JK:()=>M,K0:()=>P,K3:()=>X,Lc:()=>u,Lg:()=>b,Mf:()=>s,NI:()=>A,NX:()=>l,Nd:()=>v,Oe:()=>I,P9:()=>c,QN:()=>W,Qc:()=>L,Qd:()=>O,S0:()=>N,SN:()=>E,Ud:()=>j,Wu:()=>d,XX:()=>y,YA:()=>z,ZJ:()=>r,an:()=>H,cL:()=>_,dK:()=>o,eI:()=>R,eT:()=>B,gO:()=>V,jb:()=>K,lC:()=>f,lu:()=>w,mk:()=>x,mr:()=>T,qk:()=>U,r7:()=>p,rD:()=>h,sw:()=>k,t$:()=>Z,ul:()=>g,wb:()=>a,yU:()=>$,zb:()=>C});let r=new Set,i=new Set,o=new Set,a=new Set,s=new Set,u=new Set,l=new Set,c=new Set,f=new Set,d=new Set,p=new Set,h=new Set,m=new Set,g=new Set,y=new Set,v=new Set,x=new Set,b=new Set,w=new Set,j=new Set,S=new Set,_=new Set,E=new Set,M=new Set,O=new Set,$=new Set,k=new Set;function N(t){r.forEach(e=>e(t))}function R(t){i.forEach(e=>e(t))}function I(t,e){o.forEach(n=>n({psvg:t,info:e}))}function C(t,e){a.forEach(n=>n({psvg:t,info:e}))}function A(t,e,n){s.forEach(r=>r(t,e,n))}function T(t,e,n){u.forEach(r=>r(t,e,n))}function D(t){l.forEach(e=>e(t))}function L(){c.forEach(t=>t())}function z(){f.forEach(t=>t())}function F(){g.forEach(t=>t())}function U(t,e){y.forEach(n=>n(t,e))}function q(t,e){v.forEach(n=>n(t,e))}function P(t,e,n){x.forEach(r=>r(t,e,n))}function W(t,e){b.forEach(n=>n(t,e))}function H(t){w.forEach(e=>e(t))}function Z(t){j.forEach(e=>e(t))}function K(t){d.forEach(e=>e(t))}function X(t){p.forEach(e=>e(t))}function V(t){h.forEach(e=>e(t))}function B(){m.forEach(t=>t())}},2636:function(t,e,n){let r;n.d(e,{pb:()=>nx,OV:()=>x,b9:()=>d.b});var i,o,a,s,u,l,c,f,d=n(9026),p=n(4040),h=n(5997),m=n(8147),g=n(1046);let y={context:{ids:new Set}},v=(0,m.a)({context:(void 0===(r=function(t){if(!t)return;let e=JSON.parse(t);if("context"in e&&"ids"in e.context)return{...e,context:{...e.context,ids:new Set(e.context.ids)}}}(localStorage.getItem("svgmapviewer:likes")))?y:r).context,on:{like:(t,e)=>({...t,ids:new Set(Array.from(t.ids.add(e.id)))}),unlike:(t,e)=>(t.ids.delete(e.id),{...t,ids:new Set(Array.from(t.ids))})}});function x(t){let{_id:e}=t;return(0,g.d4)(v,t=>t.context.ids).has(e)?(0,h.jsx)("span",{className:"like liked",onClick:()=>v.trigger.unlike({id:e}),children:"★"}):(0,h.jsx)("span",{className:"like not-liked",onClick:()=>v.trigger.like({id:e}),children:"☆"})}v.subscribe(function(t){localStorage.setItem("svgmapviewer:likes",JSON.stringify({...t,context:{...t.context,ids:Array.from(t.context.ids.keys())}}))});let b=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var w=n(7147),j=n(4825),S=n(9323),_=n(7257),E=n(4927),M=n(9512);let O=(0,S.mj)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null},initial:"Idle",states:{Idle:{on:{SELECT:[{guard:({event:t})=>t.force??!1,actions:(0,_.a)({fidx:({event:t})=>t.fidx})},{guard:({context:t,event:e})=>t.fidx!==e.fidx,actions:(0,_.a)({fidx:({event:t})=>t.fidx,prevFidx:({context:t})=>t.fidx}),target:"Animating"}]}},Animating:{on:{DONE:{actions:(0,_.a)({prevFidx:null}),target:"Idle"}}}}}),$=(0,E.c)(O);function k(){let{fidx:t,prevFidx:e}=(0,w.d4)($,t=>t.context),n=function(t,e){let n=d.b.floorsConfig;if(void 0===n)return null;let r=n.floors.map((n,r)=>r===t||r===e?"":`
.fidx-${r} {
  visibility: hidden;
}
`).join(""),i=null===e?"":`
.fidx-${e} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
.fidx-${t} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
@keyframes xxx-disappearing {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;return`
${r}
${i}
`}(t,e),r=(0,j.useCallback)(e=>e===t?()=>(0,p.gO)(e):void 0,[t]),i=(0,j.useCallback)(n=>null!==e||n===t?void 0:()=>(0,p.jb)(n),[t,e]);return{fidx:t,prevFidx:e,style:n,fidxToOnAnimationEnd:r,fidxToOnClick:i}}$.start(),p.r7.add(function(t){$.send({type:"SELECT",fidx:t})}),p.rD.add(function(t){$.send({type:"DONE",fidx:t})});var N=n(2147),R=n(2585);function I(t,e,n){let r=(0,N.bh)(t);if(null===r)return null;let i=t.name;if(null!==i&&void 0!==n&&i.match(n))return null;let{centroid_x:o,centroid_y:a}=t;return null===o||null===a||0===e.filter(e=>e.filter(t)).length?null:{a:r+"",lonlat:{x:o,y:a}}}let C=new Worker(new URL(n.p+n.u("131"),n.b),Object.assign({},{type:"module"},{type:void 0}));C.onmessage=t=>{let e=t.data;"INIT.DONE"===e.type||"SEARCH.DONE"===e.type&&function(t){let e=function(t,e,n){let r=Number(n.address),i=(0,N.Su)(r,t);if(null===i)return null;let o=i.properties,a=e.flatMap(t=>t.filter(o)?[t.getInfo(o,n.address)]:[]);return 0===a.length?null:a[0]}(d.b.mapMap,d.b.searchEntries,t);if(null===e)return;let n=d.b.mapCoord.matrix.transformPoint(t.lonlat);(0,p.Oe)(n,e)}(e.res)},C.onerror=t=>{console.log("error",t)},C.onmessageerror=t=>{console.log("messageerror",t)},p.Dl.add(function(t){let e=d.b.mapCoord.matrix.inverse().transformPoint(t);C.postMessage({type:"SEARCH",pgeo:e})});var A=n(4822);let T=(0,S.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Idle",states:{Idle:{on:{SEARCH:{actions:(0,A.a)(({event:t})=>t),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,A.a)(({event:t})=>t),target:"Done"},"SEARCH.CANCEL":{target:"Done"}}},Done:{always:"Idle"}}}),D=(0,E.c)(T);function L(t){D.send({type:"SEARCH",psvg:t})}function z(t){D.send(null===t?{type:"SEARCH.CANCEL"}:{type:"SEARCH.DONE",...t})}D.on("SEARCH",({psvg:t})=>(0,p.eI)(t)),D.on("SEARCH.DONE",({psvg:t,info:e})=>(0,p.zb)(t,e)),D.start();var F=n(2216),U=n(4063),q=n(8569),P=n(3099);function W(t){return t>.5?-1:+(t<.5)}function H(t){return t<.3?1:t>.7?-1:0}function Z(t,e,n,r){let i=e/2,o=n/2,a=e/20,s=a/2,u=(0,P.Lp)(-i*t.h,-o*t.v),l=0===t.h||0===t.v?(0,P.Lp)(-(i+r)*t.h,-(o+r)*t.v):(0,P.Lp)(-(i+r*Math.cos(t.th))*t.h,-(o+r*Math.sin(t.th))*t.v),[c,f]=0===t.h?[(0,P.Lp)(-s,0),(0,P.Lp)(s,0)]:0===t.v?[(0,P.Lp)(0,-s),(0,P.Lp)(0,s)]:t.th<Math.PI/4?[(0,P.Lp)(0,0),(0,P.Lp)(0,a*t.v)]:[(0,P.Lp)(0,0),(0,P.Lp)(a*t.h,0)],d=(0,P.CO)(u,c),p=(0,P.CO)(u,f);return{p:u,q:l,a:d,b:p}}function K(t){return{open:t,animating:!1}}function X(t){return t.open||t.animating?null:{open:!0,animating:!0}}function V(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function B(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function Y(t){return t.open||!t.animating?null:{open:!1,animating:!1}}var J=n(210);let G={p:P.P,psvg:P.P,layout:J.TL,info:{title:""}};function Q(t){return function(e,n){let r=e[n],i=t(r);return e[n]=null===i?r:i,e}}function tt(t,e){return function({open:t,animating:e}){return t||e}(t[e])}let te=(0,S.mj)({types:{},guards:{isHeaderVisible:({context:{m:t}})=>tt(t,"header"),isDetailVisible:({context:{m:t}})=>tt(t,"detail"),animationEnded:({context:{animationEnded:t}})=>t.header&&t.detail},actions:{startCancel:(0,_.a)({canceling:()=>!0}),endCancel:(0,_.a)({canceling:()=>!1}),open:(0,_.a)({m:({context:{m:t}},{part:e})=>Q(X)(t,e)}),close:(0,_.a)({m:({context:{m:t}},{part:e})=>Q(B)(t,e)}),handle:(0,_.a)({m:({context:{m:t}},{part:e})=>Q(t[e].open?V:Y)(t,e)})}}).createMachine({type:"parallel",id:"ui",context:({input:t})=>({...t,all:{open:!1,animating:!1},canceling:!1,detail:G,m:{header:K(!0),detail:K(!1)},animationEnded:{header:!0,detail:!0}}),states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,_.a)({detail:({event:{psvg:t,info:e,layout:n}})=>({psvg:t,p:(0,J.ut)(n).transformPoint(t),info:e,layout:n})}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,E.n)("animationEnded")},{actions:(0,_.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,E.n)("isDetailVisible")},{actions:(0,_.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,E.n)("animationEnded")},{actions:(0,_.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,E.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,_.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,A.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,_.a)({animationEnded:({context:t})=>({...t.animationEnded,header:!0})}),(0,E.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,_.a)({animationEnded:({context:t})=>({...t.animationEnded,detail:!0})}),(0,E.r)({type:"DONE"})]}}}}});function tn(){return(0,w.d4)(ti,t=>t.context.m.header)}function tr(){return(0,w.d4)(ti,t=>t.context.m.detail)}let ti=(0,E.c)(te);ti.on("CLOSE.DONE",p.YA),ti.start();function to(t){return(0,h.jsxs)("div",{className:"balloon",children:[(0,h.jsx)(ts,{...t}),t.children,(0,h.jsx)("style",{children:ta})]})}p.Mf.add(function(t,e,n){ti.send({type:"DETAIL",psvg:t,info:e,layout:n})}),p.NX.add(function(t){ti.send({type:t?"OPEN":"CANCEL"})}),p.P9.add(function(){ti.send({type:"CANCEL"})}),p.lC.add(function(){requestAnimationFrame(()=>(function(){let t=F.NC.get("detail");if(void 0===t)return;let e=t.querySelector(".detail");null!==e&&e.scroll(0,0)})())});let ta=`
.balloon,
.balloon-svg {
  ${M.oO}
  ${M.pU}
  z-index: 10;
  will-change: opacity, transform;
}
`;function ts(t){let e=t._hv;if(null===e)return(0,h.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(t,e){let{bw:n,bh:r,ll:i,d:o,width:a,height:s}=e,u=(0,q.aP)(-a/2,-a/2,a,s),{body:l,leg:c}=function(t,e,n,r){let i=e/2,o=n/2,a=`
m${-i},${-o}
h${e}
v${n}
h${-e}
z
`,{p:s,q:u,a:l,b:c}=Z(t,e,n,r),f=(0,P.R_)(u,l),d=(0,P.R_)(c,u),p=(0,P.R_)(s,c);return{body:a,leg:`
m${l.x},${l.y}
l${f.x},${f.y}
l${d.x},${d.y}
l${p.x},${p.y}
z
`}}(t,n,r,i);return{viewBox:u,width:a,height:s,bg:`M${o},${o}`+l+`M${o},${o}`+c,fg:"M0,0"+l+"M0,0"+c}}(e,t._size);return(0,h.jsxs)("svg",{className:"balloon-svg",viewBox:(0,q.C6)(n),width:r,height:i,children:[(0,h.jsx)("path",{className:"bg",d:a}),(0,h.jsx)("path",{className:"fg",d:o}),(0,h.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tu({_p:t,_hv:e,_size:n,_leg:r}){let i=tr(),o=null!==t&&null!==e&&function({open:t,animating:e}){return t||e}(i)?function({open:t,animating:e},n,r,i,o){let{bw:a,bh:s,width:u,height:l}=i,c=(0,P.R_)(o.q,o.p),f=(0,P.Lp)((a/2+Math.abs(c.x))*r.h,(s/2+Math.abs(c.y))*r.v);if(e){let[e,r]=t?[0,1]:[1,0],[i,o]=t?[0,1]:[1,0],[a,s]=t?["0px","var(--dp-x)"]:["var(--dp-x)","0px"],[c,d]=t?["0px","var(--dp-y)"]:["var(--dp-y)","0px"],p=t?M.c5:M.F9;return`
.detail,
.balloon {
  --q-x: ${n.x}px;
  --q-y: ${n.y}px;
  --dp-x: ${f.x}px;
  --dp-y: ${f.y}px;
  --oa: ${e};
  --ob: ${r};
  --sa: ${i};
  --sb: ${o};
  --timing: ${p};
  --dxa: ${a};
  --dxb: ${s};
  --dya: ${c};
  --dyb: ${d};
  --pww: ${-u/2}px;
  --phh: ${-l/2}px;
  --duration: 400ms;
  transform-origin: 0 0;
  will-change: opacity, transform;
}

.detail {
  animation: xxx-detail var(--duration) var(--timing);
}

.balloon {
  animation: xxx-balloon var(--duration) var(--timing);
}

@keyframes xxx-detail {
  from {
    opacity: var(--oa);
    transform: translate(calc(var(--q-x) + var(--dxa)), calc(var(--q-y) + var(--dya))) scale(var(--sa)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--ob);
    transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
}

@keyframes xxx-balloon {
  from {
    opacity: var(--oa);
    transform: translate(calc(var(--q-x) + var(--dxa)), calc(var(--q-y) + var(--dya))) scale(var(--sa)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--ob);
    transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
}
`}return`
.detail,
.balloon {
  --q-x: ${n.x}px;
  --q-y: ${n.y}px;
  --sb: 1;
  --dp-x: ${f.x}px;
  --dp-y: ${f.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-u/2}px;
  --phh: ${-l/2}px;
}

.detail {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
}

.balloon {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
}
`}(i,t,e,n,r):".balloon, .detail { visibility: hidden; }";return(0,h.jsx)("style",{children:o})}var tl=n(4997),tc=n(7836),tf=n(4917);function td(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}var tp=n(3098),th=n(7883);let tm=(0,S.mj)({types:{},actions:{getScroll:(0,_.a)({scroll:()=>(0,tp.KT)()}),syncScroll:(t,{pos:e})=>(0,tp.l9)(e)},actors:{syncScrollLogic:(0,th.Sx)(async({input:t})=>{if(null===t)throw Error("input is null");if(!(0,tp.l9)(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:({event:t})=>({pos:t.pos})}]},GET:{actions:["getScroll",(0,A.a)(({context:{scroll:t}})=>({type:"SCROLL.GET.DONE",scroll:t}))]},SYNCSYNC:{actions:(0,_.a)({dest:({event:t})=>t.pos}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:({context:t})=>t.dest,onDone:{actions:["getScroll",(0,A.a)(({context:{scroll:t}})=>({type:"SCROLL.SYNCSYNC.DONE",scroll:t})),(0,_.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),tg={slideDoneCbs:new Set,getDoneCbs:new Set,syncSyncDoneCbs:new Set},ty=(0,E.c)(tm,{systemId:"system-scroll1"});function tv(t){ty.send(t)}ty.on("SCROLL.SLIDE.DONE",t=>tg.slideDoneCbs.forEach(e=>e(t))),ty.on("SCROLL.GET.DONE",t=>tg.getDoneCbs.forEach(e=>e(t))),ty.on("SCROLL.SYNCSYNC.DONE",t=>tg.syncSyncDoneCbs.forEach(e=>e(t)));let tx="panning",tb=(0,S.mj)({types:{},guards:{shouldReset:(t,{ev:e})=>"r"===e.key,shouldRecenter:(t,{ev:e})=>"c"===e.key,shouldRotate:(t,{ev:e})=>"t"===e.key,shouldZoom:(t,{ev:e})=>0!==td(e.key),isTouching:({context:{touching:t}})=>t,isHoming:({context:{homing:t}})=>t,isZoomWanted:({context:{want_animation:t}})=>"zoom"===t,isRotateWanted:({context:{want_animation:t}})=>"rotate"===t,isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>d.b.isMapRendered(),isUiRendered:()=>d.b.isUiRendered()},actions:{syncScroll:({context:{layout:t}})=>tv({type:"SYNC",pos:t.scroll}),syncScrollSync:({context:{layout:t}})=>tv({type:"SYNCSYNC",pos:t.scroll}),getScroll:()=>tv({type:"GET"}),zoomKey:(0,_.a)({z:(t,{ev:e})=>td(e.key)}),zoomHome:(0,_.a)({z:()=>null,zoom:()=>1,homing:()=>!0}),zoomEvent:(0,_.a)({z:(t,{z:e})=>e,cursor:({context:{cursor:t}},{p:e})=>null===e?t:e}),startZoom:(0,_.a)({animation:({context:{layout:t,cursor:e,z:n}})=>{var r,i,o;let a,s,u,l,c,f,p,h;return null===n?(r=(0,tf.SH)(t),a=(0,q.gX)(r.config.svg),s=(0,J.ut)(t).transformPoint(a),u=r.svgScale.s/t.svgScale.s,l=(0,q.gX)(t.container),c=new DOMMatrixReadOnly().translate(l.x,l.y).scale(1/u).translate(-s.x,-s.y),{move:null,zoom:{svg:r.svg,svgScale:r.svgScale,q:c,o:null},rotate:null}):(f=(0,J.ut)(t).inverse().transformPoint(e),p=1/(o=n,Math.pow(d.b.zoomFactor,o)),h=new DOMMatrixReadOnly().scale(1/p,1/p),{move:null,zoom:{svg:(0,tc.aE)(t.svg,p,f.x,f.y),svgScale:(i=t.svgScale,"x"in i?{x:i.x*p,y:i.y*p}:{s:i.s*p}),q:h,o:e},rotate:null})}}),startRotate:(0,_.a)({animation:({context:{layout:t,cursor:e}})=>({move:null,zoom:null,rotate:{deg:90,q:new DOMMatrixReadOnly().rotate(90),o:e}})}),updateZoom:(0,_.a)({prevLayout:({context:{layout:t}})=>t,layout:({context:{layout:t,animation:e}})=>null===e?t:(0,tl.Fs)(t,t=>null===e.move?t:(0,tf.a4)(t,e.move.move),t=>null===e.zoom?t:(0,tf.c7)(t,e.zoom.svg,e.zoom.svgScale),t=>null===e.rotate?t:(0,tf.KS)(t,e.rotate.deg))}),endZoom:(0,_.a)({prevLayout:null,want_animation:null,animation:null,z:null,zoom:({context:{z:t,zoom:e}})=>null===t?e:e*Math.pow(2,t)}),endRotate:(0,_.a)({prevLayout:null,want_animation:null,animation:null}),wantZoom:(0,_.a)({want_animation:"zoom"}),wantRotate:(0,_.a)({want_animation:"rotate"}),syncAnimation:({context:{animation:t}})=>{let e=t?.move?.q??t?.zoom?.q??t?.rotate?.q??null,n=t?.move?.o??t?.zoom?.o??t?.rotate?.o??null;null!==e&&(0,p.an)({matrix:e,origin:n})},syncLayout:({context:{layout:t,rendered:e}})=>(0,p.AI)(t,e),resetCursor:(0,_.a)({cursor:({context:{layout:t}})=>(0,q.gX)(t.container)}),cursor:(0,_.a)({cursor:(t,{ev:e})=>(0,P.Lp)(e.pageX,e.pageY)}),setModeToPanning:(0,_.a)({mode:tx,cursor:({context:{layout:t}})=>(0,q.gX)(t.container)}),setModeToTouching:(0,_.a)({mode:"touching"}),setModeToLocked:(0,_.a)({mode:"locked"}),startTouching:(0,_.a)({touching:!0}),endTouching:(0,_.a)({touching:!1}),notifyTouching:(0,E.r)({type:"TOUCHING"}),notifyTouchingDone:(0,E.r)({type:"TOUCHING.DONE"}),startAnimating:(0,_.a)({animating:()=>!0}),stopAnimating:(0,_.a)({animating:()=>!1}),resizeLayout:(0,_.a)({rendered:!1,origLayout:(t,{layout:e})=>e,layout:(t,{layout:e})=>(0,tf.sC)(e,9)}),updateLayoutFromScroll:(0,_.a)({layout:({context:t})=>{let{scroll:e}=(0,tp.Vs)();return(0,tf.Qc)(t.layout,e)}}),notifyZoomStart:(0,A.a)(({context:{layout:t,zoom:e,z:n}})=>({type:"ZOOM.START",layout:t,zoom:e,z:null===n?0:n})),notifyZoomEnd:(0,A.a)(({context:{layout:t,zoom:e}})=>({type:"ZOOM.END",layout:t,zoom:e})),notifySearch:(0,A.a)(({context:t})=>{let{scroll:e}=(0,tp.Vs)(),n=(0,tf.Qc)(t.layout,e);return{type:"SEARCH",psvg:(0,J.ut)(n).inverse().transformPoint(t.cursor)}}),notifySearchDone:(0,E.r)({type:"SEARCH.DONE"}),notifySearchEndDone:(0,A.a)(({context:t},{res:e})=>{let{scroll:n}=(0,tp.Vs)(),r=(0,tf.Qc)(t.layout,n);return{type:"SEARCH.END.DONE",psvg:e.psvg,info:e.info,layout:r}}),endHoming:(0,_.a)({cursor:({context:t})=>(0,q.gX)(t.origLayout.container),layout:({context:t})=>(0,tf.KS)((0,tf.sC)(t.origLayout,9),(0,tf.aF)(t.layout)),homing:()=>!1}),notifyMode:(0,A.a)(({context:{mode:t}})=>({type:"MODE",mode:t})),notifyLock:(0,A.a)({type:"LOCK",ok:!0}),setRendered:(0,_.a)({rendered:!0}),notifySwitch:(0,A.a)((t,{fidx:e})=>({type:"SWITCH",fidx:e})),notifySwitchDone:(0,A.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"Resizing",context:{origLayout:tf.O4,layout:tf.O4,prevLayout:null,cursor:(0,q.gX)(tf.O4.container),z:null,zoom:1,homing:!1,want_animation:null,animation:null,mode:tx,touching:!1,animating:!1,rendered:!1},on:{"TOUCH.LOCK":{actions:["startTouching","notifyTouching","setModeToTouching","notifyMode"]},"TOUCH.UNLOCK":{actions:["endTouching","notifyTouchingDone","setModeToPanning","notifyMode"]},"SEARCH.LOCK":{actions:["notifyLock","setModeToLocked","notifyMode"]},"SEARCH.UNLOCK":{actions:["setModeToPanning","notifyMode","notifySearchDone"]}},states:{Resizing:{initial:"WaitingForResizeRequest",onDone:"Appearing",states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:({event:t})=>t},target:"WaitingForMapRendered"}}},WaitingForWindowStabilized:{id:"Resizing-WaitingForWindowStabilized",after:{500:{target:"WaitingForMapRendered"}}},WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,E.d)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"syncLayout",on:{RENDERED:{actions:["setRendered","syncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"syncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Done"}}},Done:{type:"final"}}},Appearing:{on:{"ANIMATION.END":{target:"Panning"}}},Panning:{on:{RESIZE:{actions:[{type:"resizeLayout",params:({event:t})=>t}],target:"#Resizing-WaitingForWindowStabilized"},"LAYOUT.RESET":{actions:["zoomHome","wantZoom"],target:"Zooming"},"KEY.UP":[{guard:{type:"shouldZoom",params:({event:t})=>({ev:t.ev})},actions:[{type:"zoomKey",params:({event:t})=>({ev:t.ev})},"wantZoom"],target:"Zooming"},{guard:{type:"shouldRotate",params:({event:t})=>({ev:t.ev})},actions:"wantRotate",target:"Zooming"}],CLICK:{guard:()=>d.b.searchEntries.length>0,actions:[{type:"cursor",params:({event:t})=>({ev:t.ev})}],target:"Searching"},SWITCH:{actions:{type:"notifySwitch",params:({event:t})=>t},target:"Switching"},CONTEXTMENU:{target:"Recentering"},ROTATE:{actions:"wantRotate",target:"Zooming"},RECENTER:{target:"Recentering"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:({event:{z:t,p:e}})=>({z:t,p:e})},"wantZoom"],target:"Zooming"},TOUCHING:{target:"Touching"}}},Touching:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Waiting"}}},Waiting:{on:{"TOUCHING.DONE":{target:"Done"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:({event:{z:t,p:e}})=>({z:t,p:e})},"wantZoom"],target:"#Zooming"}}},Done:{type:"final"}}},Searching:{initial:"Starting",onDone:"Panning",states:{Starting:{always:{actions:"notifySearch",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"notifySearchEndDone",params:({event:t})=>t},target:"WaitingForSearchUnlock"}}},WaitingForSearchUnlock:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Panning",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"notifySwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","syncLayout","syncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:[{guard:"isZoomWanted",actions:["updateLayoutFromScroll","startZoom","updateZoom","notifyZoomStart"],target:"Animating"},{guard:"isRotateWanted",actions:["updateLayoutFromScroll","startRotate","updateZoom","notifyZoomStart"],target:"Animating"}]},Animating:{initial:"Starting",onDone:"Done",states:{Starting:{always:{actions:["startAnimating","syncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":[{guard:"isZoomWanted",actions:["endZoom","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"},{guard:"isRotateWanted",actions:["endRotate","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"}]}},Homing:{always:[{guard:"isHoming",actions:["endHoming","syncLayout","syncScroll"],target:"Done"},{target:"Done"}]},Done:{type:"final"}}},Done:{type:"final"}}}}});function tw(t){tj.send(t)}let tj=(0,E.c)(tb,{systemId:"system-viewer1"});tj.on("SEARCH",({psvg:t})=>(0,p.S0)(t)),tj.on("SEARCH.END.DONE",({psvg:t,info:e,layout:n})=>{(0,p.NI)(t,e,n),(0,p.mr)(t,e,n)}),tj.on("LOCK",({ok:t})=>(0,p.Aq)(t)),tj.on("ZOOM.START",({layout:t,zoom:e,z:n})=>(0,p.K0)(t,e,n)),tj.on("ZOOM.END",({layout:t,zoom:e})=>(0,p.QN)(t,e)),tj.on("LAYOUT",({layout:t})=>(0,p.QN)(t,1)),tj.on("MODE",({mode:t})=>(0,p.t$)(t)),tj.on("SWITCH",({fidx:t})=>(0,p.K3)(t)),tj.on("SWITCH.DONE",()=>(0,p.eT)()),tj.start(),p.Wu.add(function(t){tw({type:"SWITCH",fidx:t})}),p.rD.add(function(){tw({type:"SWITCH.DONE"})}),p.wb.add(function(t){tj.send({type:"SEARCH.END",res:t})}),p.Lc.add(function(t){tj.send({type:"SEARCH.LOCK",psvg:t})}),p.lC.add(function(){tj.send({type:"SEARCH.UNLOCK"})}),p.XX.add(function(t,e){tw({type:"RESIZE",layout:t,force:e})}),tg.getDoneCbs.add(function(t){null!==t.scroll&&tw({type:"SCROLL.GET.DONE",scroll:t.scroll})}),tg.syncSyncDoneCbs.add(function(t){null!==t.scroll&&tw({type:"SCROLL.SYNCSYNC.DONE",scroll:t.scroll})});let tS=!1,t_=!1;function tE(t,e){e?.preventDefault,e?.stopPropagation===!1||t.ev.stopPropagation(),tw(t)}function tM(){let t=(0,j.useRef)(null);return(0,j.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",tO),()=>{e.removeEventListener("wheel",tO)}},[t]),t}function tO(t){let e=t.currentTarget;t_&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function t$(t){let e,{_detail:n}=t,r=tM();return(0,h.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void ti.send(t)},children:[d.b.renderInfo&&(1!==(e=Object.values(n.info)).length||"string"!=typeof e[0]||""!==e[0])&&d.b.renderInfo({info:n.info}),(0,h.jsx)("style",{children:tk})]})}p.Ud.add(function(t){tS="locked"===t,t_="locked"===t}),p.mk.add(function(){t_=!0}),p.Lg.add(function(){t_=!1}),p.SN.add(function(){tw({type:"LAYOUT.RESET"})}),p.JK.add(function(){tw({type:"RECENTER"})}),p.Qd.add(function(){tw({type:"ROTATE"})}),p.cL.add(function(){tw({type:"ZOOM.ZOOM",z:-1,p:null})}),p.F0.add(function(){tw({type:"ZOOM.ZOOM",z:1,p:null})}),p.ul.add(function(){tw({type:"RENDERED"})});let tk=`
.detail {
  ${M.oO}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${M.HX}
  ${M.Sp}
  z-index: 11;
  will-change: opacity, transform;
  cursor: default;
  touch-action: pan-y;
  overscroll-behavior-x: none;
  overscroll-behavior-y: none;
}

.like {
  pointer-events: initial;
}

.liked {
  color: orange;
}

h1,
h2,
h3,
h4 {
  ${M.ex}
  margin: 1.5em;
  text-align: center;
}

p {
  ${M.ex}
  margin: 0.5em;
}

a {
  text-decoration: none;
}

table, tbody, th, tr, td {
}

#ui-svg-defs {
  display: none;
}
`;function tN(){return(0,F._U)("detail",(0,h.jsx)(tR,{}),"ui"),(0,h.jsx)("div",{id:"detail"})}function tR(){return(0,h.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,h.jsx)(tI,{}),(0,h.jsx)(tC,{})]})}function tI(){let t,e,n,r,i,o,a,s,u,l,c,f,d=(0,w.d4)(ti,t=>t.context.detail),p=(o=d.p,a=d.layout,s=function(t,{x:e,y:n}){let r=t.width/t.height,i=(0,P.Lp)(e/t.width,n/t.height),o=r>1?W(i.x):H(i.x);return{h:o,v:r>1?H(i.y):W(i.y),th:Math.atan2(t.height,t.width)}}(d.layout.container,o),u=a.container.width,e=50*(t=.01*Math.min(u,l=a.container.height)),n=50*t,r=10*t,i=e/100,f=Z(s,(c={bw:e,bh:n,ll:r,d:i,width:e+2*r+2*i,height:n+2*r+2*i}).bw,c.bh,c.ll),{_p:o,_hv:s,_W:u,_H:l,_size:c,_leg:f});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(to,{...p}),(0,h.jsx)(t$,{_detail:d}),(0,h.jsx)(tu,{...p})]})}function tC(){return(0,h.jsx)("svg",{id:"ui-svg-defs",children:(0,h.jsx)("defs",{children:(0,h.jsx)(U.n5,{})})})}function tA(){return(0,F._U)("footer",(0,h.jsx)(tT,{}),"ui"),(0,h.jsx)("div",{id:"footer"})}function tT(){let t=d.b;return(0,h.jsxs)("div",{className:"ui-content footer",children:[(0,h.jsx)("p",{children:t.copyright}),(0,h.jsxs)("style",{children:[tD,(0,h.jsx)(tL,{})]})]})}let tD=`
.footer {
  ${M.Kr}
  ${M.pC}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${M.ex}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function tL(){let{open:t,animating:e}=tn();if(e){let[e,n]=t?[0,1]:[1,0],r=t?M.c5:M.F9;return(0,h.jsx)(h.Fragment,{children:`
.footer {
  --duration: 300ms;
  --timing: ${r};
  --a: ${e};
  --b: ${n};
  transform-origin: 50% 100%;
  animation: xxx-footer var(--duration) var(--timing);
  will-change: opacity, transform;
}

@keyframes xxx-footer {
  from {
    opacity: var(--a);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--a)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b)) translate3d(0px, 0px, 0px);
  }
}
`})}return(0,h.jsx)(h.Fragment,{children:`
.footer {
  --b: ${+!!t};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}var tz=n(7809),tF=n(1121);function tU(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("g",{id:"measure",children:(0,h.jsx)(tW,{})})})}function tq(){let{svg:t}=(0,tz.hi)();return(0,h.jsxs)("div",{id:"distance",children:[(0,h.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),tX.map(e=>(0,h.jsxs)(j.Fragment,{children:[(0,h.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,h.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,h.jsx)("style",{children:(0,h.jsx)(tK,{})})]})}function tP(){let t=(0,tz.rr)(),e=t.x>0?"E":"W",n=t.y>0?"N":"S",r=`${e} ${(0,tF.gs)(Math.abs(t.x))}`,i=`${n} ${(0,tF.gs)(Math.abs(t.y))}`;return(0,h.jsxs)("div",{id:"coordinate",children:[(0,h.jsx)("p",{id:"longitude",children:r}),(0,h.jsx)("p",{id:"latitude",children:i}),(0,h.jsx)("style",{children:(0,h.jsx)(tZ,{})})]})}function tW(){let{width:t,height:e}=(0,tz.zZ)(),{client:n}=(0,tz.hi)(),r=`M0,${e/2} h${t}`,i=`M${t/2},0 v${e}`,o=tX.map(r=>(function({width:t,height:e,r:n}){return`M${t/2},${e/2} m-${n},0 a${n},${n} 0,1,0 ${2*n},0 a${n},${n} 0,1,0 -${2*n},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(r+1)}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,h.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((t,e)=>(0,h.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function tH(){let{open:t,animating:e}=tn(),[n,r]=t?[0,1]:[1,0],i=t?M.c5:M.F9,o=e?`
.guides {
  --timing: ${i};
  --duration: 300ms;
  --oa: ${n};
  --ob: ${r};
  animation: xxx-measure var(--duration) var(--timing);
  will-change: opacity;
}

@keyframes xxx-measure {
  from {
    opacity: var(--oa);
  }
  to {
    opacity: var(--ob);
  }
}
`:`
.guides {
  --ob: ${r};
  opacity: var(--ob);
  will-change: opacity;
}
`;return(0,h.jsx)(h.Fragment,{children:o})}function tZ(){let{width:t,height:e}=(0,tz.zZ)(),n=`
#distance,
#coordinate {
  ${M.oO}
  width: ${t}px;
  height: ${e}px;
}
`,r=`
#longitude {
  ${M.$D}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${M.Kr}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,h.jsxs)(h.Fragment,{children:[n,r,i]})}function tK(){let{width:t,height:e}=(0,tz.zZ)(),{client:n}=(0,tz.hi)(),r=`
.distance {
  ${M.oO}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,o=tX.map(r=>`
#distance-x-${r+1} {
  transform: translate(${t/2+n*(r+1)}px, ${e/2}px) scale(0.5);
}
`),a=tX.map(r=>`
#distance-y-${r+1} {
  transform: translate(${t/2}px, ${e/2+n*(r+1)}px) scale(0.5);
}
`);return(0,h.jsxs)(h.Fragment,{children:[i,r,o,a]})}let tX=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function tV(){return(0,F._U)("guides",(0,h.jsx)(tB,{}),"ui"),(0,h.jsx)("div",{id:"guides"})}function tB(){return!(d.b.uiConfig?.showGuides??!0)||d.b.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"ui-content guides",children:[(0,h.jsx)("svg",{className:"guides",children:(0,h.jsx)(tU,{})}),(0,h.jsx)(tq,{}),(0,h.jsx)(tP,{}),(0,h.jsxs)("style",{children:[tY,(0,h.jsx)(tH,{})]})]})}let tY=`
.guides {
  ${M.oO}
  ${M.Tp}
  ${M.pU}
  z-index: 2;
}

text {
  ${M.ex}
}
`;function tJ(){let{fidx:t,fidxToOnClick:e}=k(),n=d.b.floorsConfig;return void 0===n||n.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"floors",children:[(0,h.jsx)("ul",{className:"floor-list",children:n.floors.map(({name:n},r)=>(0,h.jsx)("li",{className:`floor-item ${t1(r===t)}`,onClick:e(r),children:n},r))}),(0,h.jsx)("style",{children:tG})]})}let tG=`
.floors {
  max-width: calc(100vw - 2em);
  overflow-x: scroll;
  scrollbar-width: none;
  pointer-events: initial;
  touch-action: pan-x;
}
.floor-list {
  margin: 0.25em;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  ${M.xP}
}
.floor-item {
  text-align: center;
  padding: 0.5em 0.75em;
  border: 1.5px solid black;
  pointer-events: initial;
  will-change: opacity;
  transition: opacity 250ms;
}
.floor-item.selected {
  opacity: 1;
}
.floor-item.unselected {
  opacity: 0.5;
}
`;function tQ(){let{fidx:t}=k(),e=d.b.floorsConfig;return void 0===e||e.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{children:[e.floors.map((e,n)=>(0,h.jsx)("h2",{className:`floor-name ${t1(n===t)}`,children:e.name},n)),(0,h.jsx)("style",{children:t0})]})}let t0=`
.floor-name {
  position: absolute;
  transform: translate(-50%, 0);
  margin: 0.25em 0;
  font-size: 4em;
  will-change: opacity;
  transition: opacity 250ms;
}
.floor-name.selected {
  opacity: 1;
}
.floor-name.unselected {
  opacity: 0;
}
`;function t1(t){return t?"selected":"unselected"}function t5(){return(0,F._U)("header",(0,h.jsx)(t2,{}),"ui"),(0,h.jsx)("div",{id:"header"})}function t2(){let t=d.b;return(0,h.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void ti.send(t)},children:[(0,h.jsx)("h1",{className:"title",onClick:()=>void p.SN.forEach(t=>t()),children:t.title}),(0,h.jsx)(tQ,{}),(0,h.jsxs)("style",{children:[t3,(0,h.jsx)(t4,{})]})]})}let t3=`
.header {
  ${M.oO}
  ${M.pC}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${M.ex}
  ${M.HX}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function t4(){let{open:t,animating:e}=tn();if(e){let[e,n]=t?[0,1]:[1,0],r=t?M.c5:M.F9;return(0,h.jsx)(h.Fragment,{children:`
.header {
  --timing: ${r};
  --duration: 300ms;
  --a: ${e};
  --b: ${n};
  transform-origin: 50% 0%;
  animation: xxx-header var(--duration) var(--timing);
  will-change: opacity, transform;
}

@keyframes xxx-header {
  from {
    opacity: var(--a);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--a)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b)) translate3d(0px, 0px, 0px);
  }
}
`})}return(0,h.jsx)(h.Fragment,{children:`
.header {
  --b: ${+!!t};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function t7(){return(0,F._U)("left",(0,h.jsx)(t6,{}),"ui"),(0,h.jsx)("div",{id:"left"})}function t6(){return(0,h.jsxs)("div",{className:"ui-content left bottom",children:[(0,h.jsx)(tJ,{}),(0,h.jsx)("style",{children:t9})]})}let t9=`
.left {
  ${M.oO}
  ${M.BQ}
  padding: 0.4em;
  font-size: smaller;
  ${M.pU}

  transform-origin: 100% 50%;
  transform: translateY(calc(-50% + 50vh));
  transform: translateY(calc(-50% + 50svh));
}

.left {
  top: initial;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function t8(){return(0,F._U)("right",(0,h.jsx)(et,{}),"ui"),(0,h.jsx)("div",{id:"right"})}function et(){return(0,h.jsxs)("div",{className:"ui-content right bottom",children:[(0,h.jsx)(en,{}),(0,h.jsx)("style",{children:ee})]})}let ee=`
.right {
  ${M.J$}
  ${M.BQ}
  padding: 0.4em;
  font-size: smaller;
  ${M.pU}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function en(){return(0,h.jsxs)("div",{className:"zoom",children:[(0,h.jsx)(ei,{}),(0,h.jsx)(eo,{}),(0,h.jsx)(ea,{}),(0,h.jsx)(es,{}),(0,h.jsx)(eu,{}),(0,h.jsx)(el,{}),(0,h.jsxs)("style",{children:[er,(0,h.jsx)(ec,{})]})]})}let er=`
.zoom {
  font-size: large;
  margin: 0;
  ${M.pC}
}

.zoom-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${M.HX}
  cursor: default;
  ${M.xP}
}
.zoom-item > svg {
  display: block;
  width: 1.25em;
  height: 1.25em;
  pointer-events: none;
}
.zoom-item > svg > path {
  stroke: black;
  stroke-width: 0.4;
  fill: none;
}

.fullscreen {
  display: none;
}
`;function ei(){return(0,h.jsx)("div",{className:"zoom-item fullscreen",onClick:()=>void p.sw.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ev})})})}function eo(){return d.b.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("div",{className:"zoom-item position",onClick:()=>void p.yU.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ey})})})}function ea(){return(0,h.jsx)("div",{className:"zoom-item recenter",onClick:()=>void p.JK.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:eh})})})}function es(){return(0,h.jsx)("div",{className:"zoom-item rotate",onClick:()=>void p.Qd.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ep})})})}function eu(){return(0,h.jsx)("div",{className:"zoom-item zoom-out",onClick:()=>void p.cL.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ed})})})}function el(){return(0,h.jsx)("div",{className:"zoom-item zoom-in",onClick:()=>void p.F0.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ef})})})}function ec(){let{open:t,animating:e}=tn();if(e){let[e,n]=t?[0,1]:[1,0],r=t?M.c5:M.F9;return(0,h.jsx)(h.Fragment,{children:`
.right {
  --timing: ${r};
  --a: ${e};
  --b: ${n};
  transform-origin: 100% 50%;
  animation: xxx-right 300ms var(--timing);
  will-change: opacity, transform;
}
.bottom {
  transform-origin: 100% 100%;
}

@keyframes xxx-right {
  from {
    opacity: var(--a);
    transform: scale(var(--a)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: scale(var(--b)) translate3d(0px, 0px, 0px);
  }
}
`})}return(0,h.jsx)(h.Fragment,{children:`
.right {
  --b: ${+!!t};
  transform-origin: 100% 50%;
  opacity: var(--b);
  /*
  transform: scale(var(--b));
  */
  will-change: opacity, transform;
}
.bottom {
  transform-origin: 100% 100%;
}
`})}let ef=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
m-2.5,-2.5
v5
`,ed=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`,ep=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`,eh=`
M0,5
V-5
M5,0
H-5
M5,0
m-2,-1
l2,1
l-2,1
M-5,0
m2,1
l-2,-1
l2,-1
M0,5
m1,-2
l-1,2
l-1,-2
M0,-5
m-1,2
l1,-2
l1,2
`,em=3*Math.sqrt(2),eg=em+6,ey=`
M 0,0
m 0,${eg/2}
l -3,-3
a ${em},${em} 0,1,1 6,0
z
m 0,${-eg+em+em/2}
a ${em/2},${em/2} 0,1,0 0,${-em}
a ${em/2},${em/2} 0,1,0 0,${em}
`.replaceAll(/([.]\d\d)\d*/g,"$1"),ev=`
M0,0
m5,5
m-1,-1
h-8
v-8
h8
z
m1,-1
v-8
h-8
`;function ex(){return(0,F._U)("shadow",(0,h.jsx)(eb,{}),"ui"),(0,h.jsx)("div",{id:"shadow"})}function eb(){let t=tM();return(0,h.jsx)("div",{ref:t,className:"ui-content shadow",onClick:()=>(0,p.Qc)(),children:(0,h.jsxs)("style",{children:[ew,(0,h.jsx)(ej,{})]})})}let ew=`
.shadow {
  ${M.oO}
  ${M.Tp}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function ej(){let{open:t,animating:e}=tr(),n=(0,tz.Q7)();if(!e)return t?(0,h.jsx)(h.Fragment,{children:`
.shadow {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,h.jsx)(h.Fragment,{children:".shadow { display: initial; opacity: 0; }"}):(0,h.jsx)(h.Fragment,{children:".shadow { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],r=t?M.c5:M.F9;return(0,h.jsx)(h.Fragment,{children:`
.shadow {
  --duration: 400ms;
  --timing: ${r};
  --a: ${e};
  --b: ${n};
  will-change: opacity;
  animation: xxx-shadow var(--duration) var(--timing);
}

@keyframes xxx-shadow {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`})}}function eS(){return(0,F._U)("ui",(0,h.jsx)(e_,{})),(0,h.jsx)("div",{id:"ui"})}function e_(){return(0,h.jsxs)("div",{className:"ui",children:[(0,h.jsx)(ex,{}),(0,h.jsx)(t5,{}),(0,h.jsx)(tA,{}),(0,h.jsx)(t7,{}),(0,h.jsx)(t8,{}),(0,h.jsx)(tV,{}),(0,h.jsx)(tN,{})]})}function eE(){return(0,F.O4)("ui")}var eM=n(5469),eO=n(6128),e$=function(t,e){return{left:t,right:e}},ek=function(t){return 0===t.size},eN=function(t){return function(e){return Array.from(e.keys()).sort(t.compare)}},eR=new Map,eI=function(t,e){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1];r.set(a,e(a,s))}return r},eC=function(t,e){return eI(t,function(t,n){return e(n)})},eA=function(t,e){return(0,tl.Fs)(t,function(t){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1];e(a,s)&&r.set(a,s)}return r})},eT=function(t,e){return(0,tl.Fs)(t,function(t){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=e(a,o[1]);eO.Ru(s)&&r.set(a,s.value)}return r})},eD=function(t,e){return(0,tl.Fs)(t,function(t){for(var n,r=new Map,i=new Map,o=t.entries();!(n=o.next()).done;){var a=n.value,s=a[0],u=a[1];e(s,u)?i.set(s,u):r.set(s,u)}return e$(r,i)})},eL=function(t,e){return(0,tl.Fs)(t,function(t){for(var n,r=new Map,i=new Map,o=t.entries();!(n=o.next()).done;){var a=n.value,s=a[0],u=e(s,a[1]);eO.OC(u)?r.set(s,u.left):i.set(s,u.right)}return e$(r,i)})},ez=function(t){for(var e,n=new Map,r=t.entries();!(e=r.next()).done;){var i=e.value,o=i[0],a=i[1];eO.Ru(a)&&n.set(o,a.value)}return n},eF=function(t){for(var e,n=new Map,r=new Map,i=t.entries();!(e=i.next()).done;){var o=e.value,a=o[0],s=o[1];eO.OC(s)?n.set(a,s.left):r.set(a,s.right)}return e$(n,r)},eU="ReadonlyMap",eq={URI:eU,compact:ez,separate:eF},eP=function(t){var e=eK(t);return function(t,n){return e(t,function(t,e,r){return n(e,r)})}},eW=function(t){var e=eX(t);return function(t){var n=e(t);return function(t){return n(function(e,n){return t(n)})}}},eH=function(t){var e=eV(t);return function(t,n){return e(t,function(t,e,r){return n(e,r)})}},eZ=function(t){var e=eP(t),n=eW(t),r=eH(t);return{URI:eU,_E:void 0,reduce:function(t,n,r){return(0,tl.Fs)(t,e(n,r))},foldMap:function(t){var e=n(t);return function(t,n){return(0,tl.Fs)(t,e(n))}},reduceRight:function(t,e,n){return(0,tl.Fs)(t,r(e,n))}}},eK=function(t){var e=eN(t);return function(t,n){return function(r){for(var i=t,o=0,a=e(r);o<a.length;o++){var s=a[o];i=n(s,i,r.get(s))}return i}}},eX=function(t){var e=eN(t);return function(t){return function(n){return function(r){for(var i=t.empty,o=0,a=e(r);o<a.length;o++){var s=a[o];i=t.concat(i,n(s,r.get(s)))}return i}}}},eV=function(t){var e=eN(t);return function(t,n){return function(r){for(var i=t,o=e(r),a=o.length,s=a-1;s>=0;s--){var u=o[s];i=n(u,r.get(u),i)}return i}}},eB=function(t){var e=eZ(t),n=eK(t),r=eX(t),i=eV(t);return{URI:eU,_E:void 0,reduce:e.reduce,foldMap:e.foldMap,reduceRight:e.reduceRight,reduceWithIndex:function(t,e,r){return(0,tl.Fs)(t,n(e,r))},foldMapWithIndex:function(t){var e=r(t);return function(t,n){return(0,tl.Fs)(t,e(n))}},reduceRightWithIndex:function(t,e,n){return(0,tl.Fs)(t,i(e,n))}}},eY=n(8304),eJ=n(9005);let eG=eM.OZ(P.yK),eQ={URI:eU,_E:void 0,map:eC,compact:ez,separate:eF,filter:function(t,e){return eA(t,function(t,n){return e(n)})},filterMap:function(t,e){return eT(t,function(t,n){return e(n)})},partition:function(t,e){return eD(t,function(t,n){return e(n)})},partitionMap:function(t,e){return eL(t,function(t,n){return e(n)})},reduce:(o=eB(i=eY._k),a=eN(i),s=function(t){return function(e,n){for(var r=t.of(new Map),i=a(e),o=i.length,s=0;s<o;s++)!function(o){var a=i[o],s=e.get(a);r=t.ap(t.map(r,function(t){return function(e){return t.set(a,e)}}),n(a,s))}(s);return r}},u={URI:eU,_E:void 0,map:eC,mapWithIndex:eI,reduce:o.reduce,foldMap:o.foldMap,reduceRight:o.reduceRight,reduceWithIndex:o.reduceWithIndex,foldMapWithIndex:o.foldMapWithIndex,reduceRightWithIndex:o.reduceRightWithIndex,traverse:function(t){var e=s(t);return function(t,n){return e(t,function(t,e){return n(e)})}},sequence:function(t){var e=s(t);return function(t){return e(t,tl.SK)}},traverseWithIndex:s}).reduce,foldMap:u.foldMap,reduceRight:u.reduceRight,traverse:u.traverse,sequence:u.sequence,mapWithIndex:eI,reduceWithIndex:u.reduceWithIndex,foldMapWithIndex:u.foldMapWithIndex,reduceRightWithIndex:u.reduceRightWithIndex,traverseWithIndex:u.traverseWithIndex,wilt:function(t){var e=u.traverse(t);return function(n,r){return t.map(e(n,r),eq.separate)}},wither:function(t){var e=u.traverse(t);return function(n,r){return t.map(e(n,r),eq.compact)}}},e0=(l=eY.Eq,c=eM.CA(),f=function t(e){return function(n,r){if(void 0===r){var i,o=t(e);return function(t){return o(n,t)}}for(var a=r.entries();!(i=a.next()).done;){var s=i.value,u=s[0],l=s[1];if(e.equals(u,n))return eO.zN([u,l])}return eO.dv}}(l),{concat:function(t,e){if(ek(t))return e;if(ek(e))return t;for(var n,r=new Map(t),i=e.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1],u=f(a,t);eO.Ru(u)?r.set(u.value[0],c.concat(u.value[1],s)):r.set(a,s)}return r},empty:eR});function e1(t){return(0,tl.Fs)(t,function(t){return Array.from(t.values()).sort(eG.compare)},eM.x1(t=>0===t.length?eJ.dv:eJ.zN(t[0])))}function e5(t){return t.length<2?null:(0,P.H7)(t)}function e2(t){return new Map((0,tl.Fs)(t.changedTouches,Array.from,eM.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let e3=(0,S.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:({context:{touches:t}})=>0===t.vecs.size,isSingleTouching:({context:{touches:t}})=>1===t.vecs.size,isDoubleTouching:({context:{touches:t}})=>2===t.vecs.size,isManyTouching:({context:{touches:t}})=>t.vecs.size>2,isZooming:({context:{touches:t}})=>null!==t.z},actions:{handleTouchStart:(0,A.e)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>{var n;let r,i,o,a;return"TOUCH.START"!==e.type?t:(n=e.ev,o=e5(i=e1(r=e0.concat(t.vecs,e2(n)))),a=2!==i.length?null:.5>Math.abs((0,P.Ge)(i[0],i[1])),{...t,vecs:r,points:i,cursor:o,horizontal:a})}}),t.raise({type:"STARTED"})}),handleTouchMove:(0,A.e)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>"TOUCH.MOVE"!==e.type?t:function(t,e,n){var r,i;let o,a=e2(e),s=eQ.mapWithIndex(t.vecs,(t,e)=>(0,tl.Fs)(a.get(t),eJ.k$,eJ.AU(()=>e,eM.xW(e)))),u=e1(s),l=e5(u),[c,f]=u;if(null===l||(0,tF.b0)(c)||(0,tF.b0)(f))return{...t,vecs:s,points:u,cursor:l};let d=(r=t.dists,i=(0,P.Ri)(c,f),o=Math.pow((r.length>0?r[0]:i)-i,2),0===r.length||o>0?[i,...r]:r),p=function([t,e,n,r]){return(0,tF.b0)(t)||(0,tF.b0)(e)||(0,tF.b0)(n)||(0,tF.b0)(r)?null:t<e&&e<n&&n<r?-1:t>e&&e>n&&n>r?1:null}(d);return{vecs:s,points:u,cursor:l,dists:d,z:p,horizontal:t.horizontal}}(t,e.ev,0)}),t.raise({type:"MOVED"})}),handleTouchEnd:(0,A.e)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>{let n,r,i,o;return"TOUCH.END"!==e.type?t:(n=e2(e.ev),o=e5(i=e1(r=eT(t.vecs,(t,e)=>n.has(t)?eJ.dv:eJ.zN(e)))),{vecs:r,points:i,cursor:o,dists:0===r.size?[]:t.dists,z:0===r.size?null:t.z,horizontal:t.horizontal})}}),t.raise({type:"ENDED"})}),resetTouches:(0,_.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),notifyTouching:(0,A.e)(({enqueue:t,context:e})=>t.emit(2===e.touches.vecs.size?{type:"MULTI.START"}:{type:"MULTI.END"})),notifyZoom:(0,A.e)(({context:t,enqueue:e})=>{let n=t.touches.cursor,r=t.touches.z;null!==n&&null!==r&&e.emit({type:"ZOOM",p:n,z:r})})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:"handleTouchStart"},"TOUCH.MOVE":{actions:"handleTouchMove"},"TOUCH.END":{actions:"handleTouchEnd"},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"notifyTouching",exit:"notifyTouching",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"notifyZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),e4=(0,E.c)(e3),e7=!1;function e6(t){e4.send({type:"TOUCH.START",ev:t})}function e9(t){e4.send({type:"TOUCH.MOVE",ev:t})}function e8(t){e4.send({type:"TOUCH.END",ev:t})}function nt(){e4.send({type:"CANCEL"})}function ne(t){tS||tE({type:"CLICK",ev:t})}function nn(t){tE({type:"CONTEXTMENU",ev:t})}function nr(t){tE({type:"WHEEL",ev:t})}function ni(t){null!==t&&(0,tp.PH)(t)}function no(t){tw({type:"KEY.DOWN",ev:t})}function na(t){tw({type:"KEY.UP",ev:t})}function ns(){let t=(0,j.useRef)(null);return(0,h.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:e6,onTouchMove:e9,onTouchEnd:e8,onClick:ne,onContextMenu:nn,onScroll:ni,onWheel:nr,onAnimationEnd:t=>{tE({type:"ANIMATION.END",ev:t}),(0,tz.Zm)()},children:[d.b.renderMap(),(0,h.jsx)("style",{children:nu}),(0,h.jsx)(nl,{}),(0,h.jsx)(nc,{}),(0,h.jsx)(nf,{})]})}e4.on("MULTI.START",()=>{e7=!0,tw({type:"TOUCH.LOCK"})}),e4.on("MULTI.END",()=>{tw({type:"TOUCH.UNLOCK"}),e7=!1}),e4.on("ZOOM",({z:t,p:e})=>{tw({type:"ZOOM.ZOOM",z:t>0?1:-1,p:e})}),e4.start(),p.SN.add(nt),p.sw.add(nt),p.yU.add(nt),p.JK.add(nt),p.cL.add(nt),p.F0.add(nt);let nu=`
.container {
  ${M.oO}
  ${M.Tp}

  scrollbar-width: thin;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;function nl(){let t=(0,tz.p$)(),e=`
.content {
  ${M.oO}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
}
`;return(0,h.jsx)("style",{children:e})}function nc(){let t=(0,tz.sM)(),e=null===t?"":function({matrix:t,origin:e}){let n=new DOMMatrixReadOnly;return`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===e?"left top":`${e.x}px ${e.y}px`};
    transform: ${n.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===e?"left top":`${e.x}px ${e.y}px`};
    transform: ${t.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(t);return(0,h.jsx)("style",{children:e})}function nf(){let{style:t}=k();return null===t?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("style",{children:t})}function nd(){return null!==document.querySelector(".container")}let np=(0,S.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:q.zA,next:q.zA,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Busy"}}},Busy:{after:{500:{actions:[(0,_.a)({next:()=>(0,tF.aJ)()}),(0,E.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:({context:t})=>t.waited>1e4,target:"Aborting"},{guard:({context:{prev:t,next:e}})=>t.width===e.width&&.2>Math.abs(1-e.height/t.height),actions:()=>console.log("resize: ignoring height-only change"),target:"Idle"},{guard:({context:t})=>!(0,q.eq)(t.prev,t.next),actions:[(0,_.a)({prev:({context:t})=>t.next,waited:0}),(0,A.a)(({context:t})=>({type:"LAYOUT",layout:(0,tf.jC)(d.b.origViewBox,d.b.fontSize,t.next),force:!t.first})),(0,_.a)({first:!1})],target:"Idle"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,_.a)({waited:({context:t})=>t.waited+500})],target:"Busy"}},Aborting:{}}}),nh=(0,E.c)(np);nh.on("LAYOUT",({layout:t,force:e})=>(0,p.qk)(t,e)),nh.start(),window.addEventListener("resize",()=>{nh.send({type:"RESIZE"})});var nm=n(6556);let ng=`
:root {
  cursor: move;
  font-family: sans-serif;
  font-weight: lighter;
  user-select: none;
}

html, body {
  overflow: hidden;
}

body {
  ${M.oO}
  ${M.Tp}
  ${M.Xj}
  ${M.Sp}
  ${M.a5}
  background-color: darkgray;
}

svg {
  display: block;
}

ul {
  list-style: none;
}

a:link {
  text-decoration: none;
}

${b}
`,ny=function(){let t=d.b.cartoConfig?.backgroundColor??d.b.backgroundColor??"darkgray";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ns,{}),(0,h.jsx)(eS,{}),(0,h.jsxs)("style",{children:[ng,`body { background-color: ${t}; }`]})]})};var nv=n(3229);function nx(t){var e,n,r,i;let o,a={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0};(0,d.M)({origViewBox:a,isContainerRendered:nd,isUiRendered:eE,...t}),(0,d.M)({...d.b});let s={...d.b,origViewBox:a,...t};$.start(),(0,N.v4)(),nh.start(),ty.start(),D.start(),(0,tz.f3)(),e4.start(),ti.start(),tj.start(),p.ZJ.add(L),p.dK.add(z),t.getMapNames&&(0,R.j3)(t.getMapNames()),s.searchEntries.length>0&&(e=s.mapData,r=[...(n=s.searchEntries,o=d.b.cartoConfig?.skipNamePattern,e.points.features.flatMap(({properties:t})=>{let e=I(t,n,o);return null===e?[]:[e]})),...e.multipolygons.features.flatMap(({properties:t})=>{let e=I(t,n,o);return null===e?[]:[e]})],C.postMessage({type:"INIT",entries:r})),void 0!==s.floorsConfig&&(i=s.floorsConfig.fidx,$.send({type:"SELECT",fidx:i,force:!0}));let u=document.getElementById(s.root);if(null===u)throw Error("#root not found!");u.onwheel=function(t){let e=u.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==e&&e.clientWidth===e.scrollWidth||t_)&&t.preventDefault()},u.oncontextmenu=function(t){t.preventDefault()},u.ontouchmove=function(t){if(t_){if(t.target instanceof HTMLDivElement&&t.target?.id==="ui")return;t.preventDefault()}else if(!e7)return;t.preventDefault()},document.title=s.title,document.body.onkeydown=no,document.body.onkeyup=na,(0,nm.createRoot)(u).render((0,h.jsx)(j.StrictMode,{children:(0,h.jsx)(ny,{})})),(0,nv.y)()}},8569:function(t,e,n){function r(t,e,n,r){return{x:t,y:e,width:n,height:r}}n.d(e,{C:()=>a,C6:()=>c,Cy:()=>u,DJ:()=>f,aP:()=>r,eq:()=>o,gX:()=>s,tw:()=>l,zA:()=>i});let i={x:0,y:0,width:1,height:1};function o(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function a(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}function s(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function u(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function l(t,e){return{...t,x:e.x,y:e.y}}function c(t){return function({x:t,y:e,width:n,height:r}){return`${t} ${e} ${n} ${r}`}(function({x:t,y:e,width:n,height:r},i){return{x:i(t),y:i(e),width:i(n),height:i(r)}}(t,function(t){return Math.round(100*t)/100}))}function f([t,e],n){return[n(t),n(e)]}},7836:function(t,e,n){n.d(e,{hs:()=>h,aE:()=>m});function r(t,e,n){return[function([t,e,n],[r,i],o){return t*r+e*i+n*o}(function([[t],[e],[n]]){return[t,e,n]}(t),e,n),function([t,e,n],[r,i],o){return t*r+e*i+n*o}(function([[,t],[,e],[,n]]){return[t,e,n]}(t),e,n)]}function i(t,e){return[r(t,function([t]){return t}(e),0),r(t,function([,t]){return t}(e),0),r(t,function([,,t]){return t}(e),1)]}function o([t,e]){return[[1,0],[0,1],[t,e]]}function a([t,e]){return[[t,0],[0,e],[0,0]]}var s=n(4997),u=n(8569);function l({x:t,y:e,width:n,height:r}){return{tl:{x:t,y:e},br:{x:t+n,y:e+r}}}function c({tl:t,br:e}){return{x:t.x,y:t.y,width:e.x-t.x,height:e.y-t.y}}function f({tl:t,br:e}){return[[t.x,t.y],[e.x,e.y]]}function d([[t,e],[n,r]]){return{tl:{x:t,y:e},br:{x:n,y:r}}}function p(t,e){return(0,s.Fs)(t,l,f,t=>(0,u.DJ)(t,t=>r(e,t,1)),d,c)}function h(t,e){return p(t,a(g(e)))}function m(t,e,n,r){return p(t,function(t,e){let[n,r]=e;return[o(e),a(t),o([-n,-r])].reduce(i)}(g(e),[n,r]))}function g(t){return"number"==typeof t?[t,t]:"x"in t?[t.x,t.y]:t}},4063:function(t,e,n){n.d(e,{n5:()=>o});var r=n(5997),i=n(7571);function o(){return(0,r.jsx)("g",{className:"assets",children:(0,r.jsx)(a,{})})}function a(){return(0,r.jsxs)("g",{className:"symbols",children:[(0,r.jsx)(i.z7,{}),(0,r.jsx)(i.Z$,{}),(0,r.jsx)(i.HM,{}),(0,r.jsx)(i.lP,{}),(0,r.jsx)(i.$$,{}),(0,r.jsx)(i.D0,{}),(0,r.jsx)(i.Nz,{}),(0,r.jsx)(i.rl,{})]})}},7571:function(t,e,n){n.d(e,{$$:()=>u,HM:()=>a,Ci:()=>d,z7:()=>i,Nz:()=>c,Z$:()=>o,lP:()=>s,rl:()=>f,D0:()=>l});var r=n(5997);function i(){return(0,r.jsxs)("g",{id:"XBus",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,r.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,r.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,r.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})}function o(){return(0,r.jsxs)("g",{id:"XDrinkingFountain",children:[(0,r.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,r.jsxs)("g",{fill:"white",stroke:"none",children:[(0,r.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,r.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,r.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,r.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,r.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,r.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,r.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,r.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,r.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,r.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,r.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,r.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,r.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,r.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,r.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,r.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,r.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,r.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})}function a(){return(0,r.jsxs)("g",{id:"XElevator",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,r.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,r.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,r.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,r.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,r.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,r.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,r.jsx)("use",{x:"8.5",href:"#_person2"}),(0,r.jsx)("use",{x:"17",href:"#_person2"})]})}function s(){return(0,r.jsxs)("g",{id:"XEscalator",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,r.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,r.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})}function u(){return(0,r.jsxs)("g",{id:"XInformation",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,r.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,r.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})}function l(){return(0,r.jsxs)("g",{id:"XParking",children:[(0,r.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,r.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})}function c(){return(0,r.jsxs)("g",{id:"XStairs",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})}function f(){return(0,r.jsxs)("g",{id:"XToilets",transform:"translate(-36,-36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsxs)("g",{fill:"white",stroke:"none",children:[(0,r.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,r.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,r.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,r.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,r.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})}let d=new Map(Object.entries({bus:"#XBus",elevator:"#XElevator",escalator:"#XEscalator",information:"#XInformation",parking:"#XParking",stairs:"#XStairs",toilets:"#XToilets",water:"#XDrinkingFountain"}))},9512:function(t,e,n){n.d(e,{$D:()=>a,BQ:()=>p,F9:()=>b,HX:()=>y,J$:()=>i,Kr:()=>o,Sp:()=>c,Tp:()=>f,Xj:()=>l,a5:()=>m,c5:()=>x,ex:()=>h,oO:()=>r,pC:()=>d,pU:()=>g,xP:()=>v});let r=`
position: absolute;
left: 0;
top: 0;
`,i=`
position: absolute;
right: 0;
top: 0;
`,o=`
position: absolute;
left: 0;
bottom: 0;
`,a=`
position: absolute;
right: 0;
bottom: 0;
`,s=`
margin: 0;
`,u=`
padding: 0;
`,l=`
${s} ${u}
`,c=`
box-sizing: border-box;
`,f=`
width: 100vw;
height: 100vh;
height: 100svh;
`,d=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,p=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,h=`
-webkit-user-select: none;
user-select: none;
`,m=`
touch-action: none;
`,g=`
pointer-events: none;
`,y=`
pointer-events: initial;
`,v=`
background-color: rgba(255, 255, 255, 0.5);
`,x=`
cubic-bezier(0, 0, 0, 1)
`,b=`
cubic-bezier(1, 0, 1, 1)
`},2216:function(t,e,n){n.d(e,{NC:()=>o,O4:()=>s,_U:()=>a});var r=n(4825),i=n(6556);let o=new Map;function a(t,e,n){(0,r.useEffect)(()=>(function(t,e,n){let r=void 0===n?document:o.get(n)??null;if(null===r)return;let a=r.querySelector(`#${t}`)??null;if(null===a||null!==a.shadowRoot)return;let s=a.attachShadow({mode:"open"});o.set(t,s),(0,i.createRoot)(s).render(e)})(t,e,n),[t,n,e])}function s(t){let e=document.querySelector(`#${t}`)?.shadowRoot?.children?.length??null;return null!==e&&e>0}},2147:function(t,e,n){n.d(e,{Su:()=>S,De:()=>M,fP:()=>a,v4:()=>w,bh:()=>E,Ly:()=>_,Jl:()=>j,Aq:()=>c});var r=n(5469),i=n(9005),o=n(4997);function a(t){var e,n,a,s;return{pointMap:(e=t.points,(0,o.Fs)(e.features,r.x1(t=>{let e=t.properties.osm_id;return null===e?i.dv:i.zN([Number(e),t])}),t=>new Map(t))),lineMap:(n=t.lines,(0,o.Fs)(n.features,r.x1(t=>{let e=t.properties.osm_id;return null===e?i.dv:i.zN([Number(e),t])}),t=>new Map(t))),multilinestringMap:(a=t.multilinestrings,(0,o.Fs)(a.features,r.x1(t=>{let e=t.properties.osm_id;return null===e?i.dv:i.zN([Number(e),t])}),t=>new Map(t))),multipolygonMap:(s=t.multipolygons,(0,o.Fs)(s.features,r.x1(t=>{let e=t.properties.osm_id,n=t.properties.osm_way_id,r=null!==e?e:null!==n?n:null;return null===r?i.dv:i.zN([Number(r),t])}),t=>new Map(t)))}}var s=n(7836),u=n(5835),l=n(3099);function c({origin:t,measures:e,viewbox:n}){let r=(0,l.t0)(t.features[0].geometry.coordinates),i=e.features[0],o=e.features[1],a=(0,l.t0)(i.geometry.coordinates[1]),c=(0,l.t0)(o.geometry.coordinates[1]),f=(0,l.Lp)(i.properties.ellipsoidal_distance,o.properties.ellipsoidal_distance),d=(0,l.Lp)(a.x-r.x,c.y-r.y),p=(0,l.Qn)(f,d);return{mapCoord:{matrix:new DOMMatrixReadOnly().scale(p.x,p.y).translate(-r.x,-r.y)},mapViewBox:(0,s.hs)(function(t){let e=t.features[0].geometry.coordinates,[n,r]=(0,u.jb)(e[1],e[0]),i=t.features[1].geometry.coordinates,[o,a]=(0,u.jb)(i[1],i[0]);return{x:n,y:r,width:o,height:a}}(n),p)}}var f=n(7147),d=n(9323),p=n(7883),h=n(7257),m=n(4822),g=n(4927),y=n(4040);async function v(){return new Promise((t,e)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(t){e(t)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}let x=(0,d.mj)({types:{events:{},emitted:{}},actors:{api:(0,p.Sx)(v)},delays:{TIMEOUT:5e3}}).createMachine({id:"geoloc",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,h.a)({position:({event:t})=>t.output}),(0,m.a)(({event:t})=>({type:"POSITION",position:t.output}))],target:"Idle"},onError:{actions:(0,h.a)({error:({event:t})=>JSON.stringify(t)}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),b=(0,g.c)(x);function w(){b.start()}function j(){return(0,f.d4)(b,t=>t.context.position)}function S(t,e){if(void 0===t)return null;let n=e.pointMap.get(t);if(void 0!==n)return n;let r=e.lineMap.get(t);if(void 0!==r)return r;let i=e.multipolygonMap.get(t);return void 0!==i?i:null}function _(t,e){return S(t,e)?.properties??null}function E(t){let e="osm_id"in t&&"string"==typeof t.osm_id?t.osm_id:"osm_way_id"in t&&"string"==typeof t.osm_way_id?t.osm_way_id:null;return null===e?null:Number(e)}function M(t,e){let n=RegExp(`\\"${e}\\"=>\\"([^"][^"]*)\\"`);if(null===t.other_tags)return null;let r=n.exec(String(t.other_tags));return null===r?null:r[1]}w(),y.yU.add(function(){b.send({type:"GET"})})},2585:function(t,e,n){n.d(e,{Ev:()=>h,HD:()=>m,j3:()=>p});var r=n(8147),i=n(1046),o=n(5469),a=n(9005),s=n(8304),u=n(4997),l=n(199),c=n(4825),f=n(7809);let d=(0,r.a)({context:{names:[]},on:{set:(t,{names:e})=>({names:e})}});function p(t){d.trigger.set({names:t})}function h(){let t=(0,i.d4)(d,t=>t.context.names),e=(0,c.useMemo)(()=>t.filter(({id:t,area:e})=>void 0!==t&&void 0===e),[t]),n=(0,c.useMemo)(()=>t.flatMap(({id:t,name:e,pos:n,area:r})=>void 0===t||void 0===r?[]:[{id:t,name:e,pos:n,area:r,size:Math.sqrt(r)}]),[t]),{sizeMap:r,sizes:l}=(0,c.useMemo)(()=>{var t;let e,r;return t=n,e=new Map((0,u.Fs)(t,o.x1(({id:t,size:e})=>null===t?a.dv:a.zN({id:t,size:e})),o.Tj(({id:t,size:e})=>[t,Math.round(Math.log2(e))]))),r=(0,u.Fs)(e.values(),t=>Array.from(t),o.di(s._k),o.sb(s.Eq)),{sizeMap:e,sizes:r}},[n]);return{pointNames:e,areaNames:n,sizeMap:r,sizes:l}}function m(){let t=(0,f.JZ)(),e=(0,f.tX)(),{sizes:n,sizeMap:r,pointNames:i,areaNames:a}=h(),s=(0,u.Fs)(n,o.Tj(t=>{let n=Math.pow(2,t)/10/4;return[t,n<e]}),t=>new Map(t));return{pointRange:(0,c.useMemo)(()=>g(i,t,r,s),[i,t,r,s]),areaRange:(0,c.useMemo)(()=>g(a,t,r,s),[a,t,r,s])}}function g(t,e,n,r){let i=(0,u.Fs)(t,o.x1(({id:t,pos:i})=>{if(null===t)return l.none;let o=n.get(t);if(void 0===o)return l.none;let a=r.get(o);if(void 0===a)return l.none;let s=function(t,e){let{start:n,end:r}=e;return function(t,e,n){return(e-t)*(n-e)>0}(n.x,t.x,r.x)&&function(t,e,n){return(e-t)*(n-e)>0}(n.y,t.y,r.y)}(i,e);return(0,l.some)({id:t,inout:s,small:a})}));return{insides:(0,u.Fs)(i,o.x1(({id:t,inout:e,small:n})=>e&&!n?(0,l.some)(t):l.none),t=>new Set(t)),outsides:(0,u.Fs)(i,o.x1(({id:t,inout:e,small:n})=>e&&!n?l.none:(0,l.some)(t)),t=>new Set(t))}}},5835:function(t,e,n){function r(t,e){return[t,e]}function i([t,e],[n,r]){return[t-n,e-r]}function o([t,e]){return{x:t,y:e}}n.d(e,{jb:()=>i,t6:()=>o,v:()=>r})},1121:function(t,e,n){n.d(e,{$V:()=>a,aJ:()=>o,b0:()=>i,gs:()=>s});let r,i=t=>t===r;function o(){return{x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight}}function a(t){return Math.round(100*t)/100}function s(t){return Math.round(1e7*t)/1e7}},3099:function(t,e,n){function r(t,e){let n=t.x+e.x,r=t.y+e.y;return{...t,x:n,y:r}}function i(t,e){let n=t.x-e.x,r=t.y-e.y;return{...t,x:n,y:r}}function o(t,e){let n=i(t,e);return n.y/n.x}function a(t,e){var n,r;return Math.sqrt((n=t,r=e,Math.pow(n.x-r.x,2)+Math.pow(n.y-r.y,2)))}function s(t,e){let n=t.x/e.x,r=t.y/e.y;return{...t,x:n,y:r}}n.d(e,{P:()=>f,H7:()=>h,Lp:()=>c,Ri:()=>a,R_:()=>i,Xd:()=>p,CO:()=>r,yK:()=>l,Qn:()=>s,t0:()=>d,Ge:()=>o});var u=n(8304);let l=n(4853).I3(function(t,e){return u._k.compare(t.x,e.x)||u._k.compare(t.y,e.y)});function c(t,e){return{x:t,y:e}}let f={x:0,y:0};function d([t,e]){return{x:t,y:e}}function p(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,r="number"==typeof e?e:e instanceof Array?e[1]:e.y,i=t.x*n,o=t.y*r;return{...t,x:i,y:o}}function h(t){let e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y}));return null===e?null:p(e,1/t.length)}},210:function(t,e,n){n.d(e,{CO:()=>a,Ez:()=>c,J:()=>u,TL:()=>o,ZI:()=>s,ut:()=>l});var r=n(8569),i=n(3099);let o={container:r.zA,scroll:r.zA,content:new DOMMatrixReadOnly,svgOffset:{x:0,y:0},svgScale:{s:1},svg:r.zA};function a({container:t,svgOffset:e,svgScale:n,svg:i}){return{container:(0,r.C)(t),scroll:(0,r.C)(t),content:new DOMMatrixReadOnly,svgOffset:e,svgScale:n,svg:(0,r.C)(i)}}function s({svgOffset:t,svgScale:e,svg:n}){return new DOMMatrixReadOnly().translate(-t.x,-t.y).scale(1/e.s,1/e.s).translate(-n.x,-n.y)}function u({content:t,svgOffset:e,svgScale:n,svg:r}){return new DOMMatrixReadOnly().multiply(t).translate(-e.x,-e.y).scale(1/n.s,1/n.s).translate(-r.x,-r.y)}function l({scroll:t,content:e,svgOffset:n,svgScale:r,svg:i}){return new DOMMatrixReadOnly().translate(t.x,t.y).multiply(e).translate(-n.x,-n.y).scale(1/r.s,1/r.s).translate(-i.x,-i.y)}function c(t){return(0,i.Xd)(t,-1)}},4917:function(t,e,n){n.d(e,{O4:()=>l,SH:()=>c,Qc:()=>v,KS:()=>y,aF:()=>d,sC:()=>h,jC:()=>p,c7:()=>g,a4:()=>m});var r=n(4997),i=n(8569),o=n(7836),a=n(3099),s=n(210);let u={fontSize:16,container:i.zA,svgOffset:{x:0,y:0},svgScale:{s:1},svg:i.zA},l={...s.TL,config:u};function c({config:t,content:e}){let n=(0,s.CO)(t),r=f(e);return y({config:t,...n},r)}function f({a:t,b:e,c:n,d:r}){let i=new DOMMatrixReadOnly([t,e,n,r,0,0]).transformPoint({x:1,y:0});return Math.atan2(i.y,i.x)/Math.PI*180}function d(t){return f(t.content)}function p(t,e,n){var r;let i;return r=function(t,e,n){let[[r,i],o]=function(t,e){let n=t.width/t.height,r=e.width/e.height,[i,o]=n>r?[(t.width-t.height*r)/2,0]:[0,(t.height-t.width/r)/2];return[[i,o],n>r?e.height/t.height:e.width/t.width]}(n,e);return{fontSize:t,container:n,svgOffset:{x:-r,y:-i},svgScale:{s:o},svg:e}}(e,t,n),i=(0,s.CO)(r),{config:r,...i}}function h(t,e){var n,r,u;let l,c,f,d;return n=t,r=e,u=(0,i.gX)(t.scroll),l=(0,s.ut)(n).inverse().transformPoint(u),f=(c=n.container.width/n.container.height)<1?r/c:r,d=c<1?r:r*c,{...n,scroll:(0,o.aE)(n.scroll,[f,d],u.x,u.y),svgOffset:(0,a.Xd)(n.svgOffset,[f,d]),svg:(0,o.aE)(n.svg,[f,d],l.x,l.y)}}function m(t,e){return{...t,scroll:(0,i.tw)(t.scroll,e)}}function g(t,e,n){return{...t,svg:(0,i.C)(e),svgScale:n}}function y(t,e){let n=t.scroll.width/2,r=t.scroll.height/2,i=new DOMMatrixReadOnly().translate(n,r).rotate(e).translate(-n,-r).multiply(t.content);return{...t,content:i}}function v(t,e){let n=(0,a.R_)((0,s.Ez)(e),t.scroll);return(0,r.Fs)(t,t=>({...t,scroll:(0,i.Cy)(t.scroll,n)}),e=>{var n;let r,o,s,u,l,c,f,d;return n=(0,i.C)(t.scroll),r=e.content.inverse(),o=(0,a.Lp)(e.scroll.width/2,e.scroll.height/2),s=(0,a.R_)(e.scroll,n),u=(0,a.CO)(o,s),l=r.transformPoint(o),c=r.transformPoint(u),f=(0,a.R_)(c,l),d=(0,a.Xd)(f,-e.svgScale.s),{...e,scroll:(0,i.tw)(e.scroll,n),svg:(0,i.Cy)(e.svg,d)}})}},3098:function(t,e,n){n.d(e,{KT:()=>o,PH:()=>l,Vs:()=>s,l9:()=>i,wq:()=>u});var r=n(8569);function i(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,r=e.scrollTop,i=e.scrollWidth,o=e.scrollHeight;if(null===n)return!1;let a=i-t.width,s=o-t.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${t.width}, ${t.height}]`),!1;let u=Math.round(-t.x),l=Math.round(-t.y);if(u<0||l<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==u&&(e.scrollLeft=u),r!==l&&(e.scrollTop=l);let c=e.scrollLeft;if(Math.abs(c-u)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${c}`),!1;let f=e.scrollTop;return!(Math.abs(f-l)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${f}`),!1)}function o(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),(0,r.aP)(e,n,i,o)}return null}let a={scroll:r.zA,client:{width:0,height:0},timeStamp:0};function s(){return a}let u=new Set;function l(t){u.forEach(e=>e(t))}u.add(function(t){let e=t.currentTarget;null!==e&&(a={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})})},7809:function(t,e,n){let r,i;n.d(e,{Q7:()=>M,JZ:()=>C,rr:()=>R,zZ:()=>$,hi:()=>I,Jc:()=>S,p$:()=>D,f4:()=>L,mG:()=>A,fQ:()=>_,f3:()=>b,Zm:()=>j,nQ:()=>k,sM:()=>N,xE:()=>E,tX:()=>T,gK:()=>O});var o=n(7147),a=n(9323),s=n(7257),u=n(4927),l=n(9026),c=n(4040);let f=[1,2,2.5,5,10,15,20,25,30,40,50];var d=n(4822);let p=(0,a.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,s.a)({ticked:!1}),set:(0,s.a)({ticked:!0}),call:(0,d.a)({type:"CALL"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["call","clear"],target:"Idle"}},on:{TICK:{guard:({context:t})=>!t.ticked,actions:{type:"set",params:({event:t})=>t},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:({event:t})=>t},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["call","clear"],target:"Idle"}}}});var h=n(3099),m=n(210),g=n(4917),y=n(3098);let v=(0,a.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,s.a)({zoom:(t,e)=>e.zoom,z:(t,e)=>e.z}),updateRotate:(0,s.a)({}),updateSvgMatrix:(0,s.a)({svgMatrix:({context:{layout:t}})=>(0,m.J)(t)}),updateGeoMatrix:(0,s.a)({geoMatrix:({context:t})=>t.svgMatrix.multiply(l.b.mapCoord.matrix).inverse()}),updateDistanceRadius:(0,s.a)({distanceRadius:({context:{layout:t}})=>(function({container:t,svgScale:e}){var n;let r=Math.max(t.width,t.height)/2*e.s,i=Math.round(Math.log10(r)),o=(n=r/Math.pow(10,i-1),f.flatMap(t=>{let e=Math.floor(n/t);return e<3||e>=10?[]:[{u:t,n:e}]}));if(o.length<1)throw Error("findDiv");let{u:a}=o[0],s=a*Math.pow(10,i-1);return{svg:s,client:s/e.s}})(t)}),updateScroll:(0,s.a)({geoPoint:({context:t},{scroll:e,client:n})=>{let r=t.geoMatrix,i={x:e.x+n.width/2,y:e.y+n.height/2};return r.transformPoint(i)},geoRange:({context:t},{scroll:e,client:n})=>{let r=t.geoMatrix,i={x:e.x,y:e.y},o={x:e.x+n.width,y:e.y+n.height};return{start:r.transformPoint(i),end:r.transformPoint(o)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:g.O4,zoom:1,z:null,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:h.P,distanceRadius:{svg:0,client:0},geoRange:{start:h.P,end:h.P},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,s.a)({rendered:({event:t})=>t.rendered,layout:({event:t})=>t.layout}),"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,u.r)(({event:{rendered:t}})=>({type:"LAYOUT.DONE",rendered:t}))]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:({event:t})=>t}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:({event:t})=>t.currentScroll}},"STYLE.MODE":{actions:(0,s.a)({mode:({event:t})=>t.mode})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:({event:t})=>t.rendered,actions:(0,s.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,s.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,s.a)({animation:({event:{animation:t}})=>t,animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:({event:t})=>!t.rendered,actions:(0,s.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,s.a)({animation:null,animating:!1}),target:"Idle"}}}}}),x=(0,u.c)(v,{systemId:"system-viewer1"});function b(){x.start()}function w(t){x.send(t)}function j(){x.send({type:"STYLE.ANIMATION.END"})}function S(){return(0,o.d4)(x,t=>t.context.rendered)}function _(){return(0,o.d4)(x,t=>t.context.appearing)}function E(){return(0,o.d4)(x,t=>t.context.shown)}function M(){return(0,o.d4)(x,t=>t.context.animating)}function O(){return(0,o.d4)(x,t=>t.context.layout)}function $(){return(0,o.d4)(x,t=>t.context.layout.container)}function k(){return(0,o.d4)(x,t=>t.context.layout.scroll)}function N(){return(0,o.d4)(x,t=>t.context.animation)}function R(){return(0,o.d4)(x,t=>t.context.geoPoint)}function I(){return(0,o.d4)(x,t=>t.context.distanceRadius)}function C(){return(0,o.d4)(x,t=>t.context.geoRange)}function A(){return(0,o.d4)(x,t=>t.context.layout.config)}function T(){return(0,o.d4)(x,t=>t.context.layout.svgScale.s)}function D(){return(0,o.d4)(x,t=>t.context.layout.content)}function L(){return(0,o.d4)(x,t=>t.context.zoom)}function z(){w({type:"STYLE.SCROLL",currentScroll:(0,y.Vs)()})}x.start(),c.Nd.add(function(t,e){w({type:"STYLE.LAYOUT",layout:t,rendered:e}),requestAnimationFrame(()=>z())}),c.mk.add(function(t,e,n){w({type:"STYLE.ZOOM",zoom:e,z:n})}),c.Lg.add(function(t,e){w({type:"STYLE.ZOOM",zoom:e,z:null})}),c.lu.add(function(t){w({type:"STYLE.ANIMATION",animation:t})}),c.Ud.add(function(t){w({type:"STYLE.MODE",mode:t})});let F=(r=p.provide({delays:{DURATION:500}}),(i=(0,u.c)(r)).on("CALL",z),i.start(),{machine:r,actor:i,tick:function(){i.send({type:"TICK"})}});y.wq.add(F.tick)}}]);