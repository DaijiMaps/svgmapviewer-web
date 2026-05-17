/*! For license information please see 632.dd4c498e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["632"],{9568(t,e,n){n.d(e,{d4:()=>a});var r=n(8822),i=n(6427);function o(t,e){return t===e}function a(t,e,n=o){let s=(0,r.useCallback)(e=>{if(!t)return()=>{};let{unsubscribe:n}=t.subscribe(e);return n},[t]),l=(0,r.useCallback)(()=>t?.getSnapshot(),[t]);return(0,i.useSyncExternalStoreWithSelector)(s,l,l,e,n)}n(869)},7879(t,e,n){let r;function i(t,e,n){let r="object"==typeof t,i=r?t:void 0;return{next:(r?t.next:t)?.bind(i),error:(r?t.error:e)?.bind(i),complete:(r?t.complete:n)?.bind(i)}}n.d(e,{a:()=>x});let o=[],{link:a,unlink:s,propagate:l,checkDirty:u,endTracking:c,startTracking:f,shallowPropagate:d}=function({update:t,notify:e,unwatched:n}){let r=0;return{link:function(t,e){let n=e._depsTail;if(void 0!==n&&n.dep===t)return;let i=void 0!==n?n.nextDep:e._deps;if(void 0!==i&&i.dep===t){i.version=r,e._depsTail=i;return}let o=t._subsTail;if(void 0!==o&&o.version===r&&o.sub===e)return;let a=e._depsTail=t._subsTail={version:r,dep:t,sub:e,prevDep:n,nextDep:i,prevSub:o,nextSub:void 0};void 0!==i&&(i.prevDep=a),void 0!==n?n.nextDep=a:e._deps=a,void 0!==o?o.nextSub=a:t._subs=a},unlink:i,propagate:function(t){let n,r=t.nextSub;t:for(;;){let i=t.sub,o=i._flags;if(60&o?12&o?4&o?!(48&o)&&function(t,e){let n=e._depsTail;for(;void 0!==n;){if(n===t)return!0;n=n.prevDep}return!1}(t,i)?(i._flags=40|o,o&=1):o=0:i._flags=-9&o|32:o=0:i._flags=32|o,2&o&&e(i),1&o){let e=i._subs;if(void 0!==e){let i=(t=e).nextSub;void 0!==i&&(n={value:r,prev:n},r=i);continue}}if(void 0!==(t=r)){r=t.nextSub;continue}for(;void 0!==n;)if(t=n.value,n=n.prev,void 0!==t){r=t.nextSub;continue t}break}},checkDirty:function(e,n){let r,i=0;t:for(;;){let a=e.dep,s=a._flags,l=!1;if(16&n._flags)l=!0;else if((17&s)==17){if(t(a)){let t=a._subs;void 0!==t.nextSub&&o(t),l=!0}}else if((33&s)==33){(void 0!==e.nextSub||void 0!==e.prevSub)&&(r={value:e,prev:r}),e=a._deps,n=a,++i;continue}if(!l){let t=e.nextDep;if(void 0!==t){e=t;continue}}for(;i--;){let i=n._subs,a=void 0!==i.nextSub;if(a?(e=r.value,r=r.prev):e=i,l){if(t(n)){a&&o(i),n=e.sub;continue}}else n._flags&=-33;n=e.sub;let s=e.nextDep;if(void 0!==s){e=s;continue t}l=!1}return l}},endTracking:function(t){let e=t._depsTail,n=void 0!==e?e.nextDep:t._deps;for(;void 0!==n;)n=i(n,t);t._flags&=-5},startTracking:function(t){++r,t._depsTail=void 0,t._flags=-57&t._flags|4},shallowPropagate:o};function i(t,e=t.sub){let r=t.dep,o=t.prevDep,a=t.nextDep,s=t.nextSub,l=t.prevSub;return void 0!==a?a.prevDep=o:e._depsTail=o,void 0!==o?o.nextDep=a:e._deps=a,void 0!==s?s.prevSub=l:r._subsTail=l,void 0!==l?l.nextSub=s:void 0===(r._subs=s)&&n(r),a}function o(t){do{let n=t.sub,r=n._flags;(48&r)==32&&(n._flags=16|r,2&r&&e(n))}while(void 0!==(t=t.nextSub))}}({update:t=>t._update(),notify(t){o[h++]=t},unwatched(t){let e=t._deps;if(void 0!==e){t._flags=17;do e=s(e,t);while(void 0!==e)}}}),p=0,h=0;function m(t,e){let n="function"==typeof t,s={_snapshot:n?void 0:t,_subs:void 0,_subsTail:void 0,_flags:0,get:()=>(void 0!==r&&a(s,r),s._snapshot),subscribe(t){var e;let n,o,a=i(t),l={current:!1},d=(e=()=>{s.get(),l.current?a.next?.(s._snapshot):l.current=!0},n=()=>{let t=r;r=o,f(o);try{return e()}finally{r=t,c(o)}},o={_deps:void 0,_depsTail:void 0,_flags:2,notify(){let t=this._flags;16&t||32&t&&u(this._deps,this)?n():32&t&&(this._flags=-33&t)},stop(){f(this),c(this)}},n(),o);return{unsubscribe:()=>{d.stop()}}},_update(i){let o=r,a=e?.compare??Object.is;r=s,f(s);try{let e=s._snapshot,r="function"==typeof i?i(e):void 0===i&&n?t(t=>t.get(),e):i;if(void 0===e||!a(e,r))return s._snapshot=r,!0;return!1}finally{r=o,c(s)}}};return n?Object.assign(s,{_deps:void 0,_depsTail:void 0,_flags:17,get(){let t=this._flags;if(16&t||32&t&&u(s._deps,s)){if(s._update()){let t=s._subs;void 0!==t&&d(t)}}else 32&t&&(s._flags=-33&t);return void 0!==r&&a(s,r),s._snapshot}}):Object.assign(s,{set(t){if(s._update(t)){let t=s._subs;if(void 0!==t){for(l(t),d(t);p<h;){let t=o[p];o[p++]=void 0,t.notify()}p=0,h=0}}}}),s}let g="function"==typeof Symbol&&Symbol.observable||"@@observable",y=new WeakMap;function v(t,e){let n,r=t.getInitialSnapshot(),o=r,a=m(o),s=t=>{if(!n)return;let e=t.type,r=n.get(e);r&&r.forEach(e=>e(t))},l=t.transition,u={get _snapshot(){return a._snapshot},on(t,e){n||(n=new Map);let r=n.get(t);r||(r=new Set,n.set(t,r));let i=e.bind(void 0);return r.add(i),{unsubscribe(){r.delete(i)}}},transition:t.transition,sessionId:Math.random().toString(36).slice(6),send(t){y.get(u)?.forEach(e=>{e.next?.({type:"@xstate.event",event:t,sourceRef:void 0,actorRef:u,rootId:u.sessionId})}),function(t){let[n,r]=l(o,t);for(let i of(o=n,y.get(u)?.forEach(e=>{e.next?.({type:"@xstate.snapshot",event:t,snapshot:n,actorRef:u,rootId:u.sessionId})}),a.set(n),r))"function"==typeof i?i():(e?.[i.type]?.(i),s(i))}(t)},getSnapshot:()=>o,get:()=>a.get(),getInitialSnapshot:()=>r,subscribe:a.subscribe.bind(a),[g](){return this},inspect:t=>{let e=i(t);return y.set(u,y.get(u)??new Set),y.get(u).add(e),e.next?.({type:"@xstate.actor",actorRef:u,rootId:u.sessionId}),e.next?.({type:"@xstate.snapshot",snapshot:r,event:{type:"@xstate.init"},actorRef:u,rootId:u.sessionId}),{unsubscribe:()=>y.get(u)?.delete(e)}},trigger:new Proxy({},{get:(t,e)=>t=>{u.send({...t,type:e})}}),select:(t,e=Object.is)=>m(()=>t(u.get().context),{compare:e})};return u}function x(t){var e;if("transition"in t)return v(t);return v({getInitialSnapshot:()=>({status:"active",context:t.context,output:void 0,error:void 0}),transition:(e=t.on,(t,n)=>{let r=t.context,i=e?.[n.type],o=[],a={emit:new Proxy({},{get:(t,e)=>t=>{o.push({...t,type:e})}}),effect:t=>{o.push(t)}};if(!i)return[t,o];let s=i(r,n,a)??r;return[s===r?t:{...t,context:s},o]})},t.emits)}},2674(t,e,n){n.d(e,{d4:()=>a});var r=n(8822);function i(t,e){return t===e}function o(t){return t}function a(t,e=o,n=i){let s,l=(s=(0,r.useRef)(void 0),t=>{let r=e(t);return s.current&&n(s.current,r)?s.current:s.current=r});return(0,r.useSyncExternalStore)((0,r.useCallback)(e=>t.subscribe(e).unsubscribe,[t]),()=>l(t.get()),()=>l(t.get()))}},9005(t,e,n){function r(t){return function(e,n){return t.chain(e,function(e){return t.map(n(e),function(){return e})})}}n.d(e,{zN:()=>u,AU:()=>g,k$:()=>y,dv:()=>l});var i,o=n(4997);function a(t){return function(e,n){return t.map(e,function(){return n})}}var s=n(6128),l=s.dv,u=s.zN,c=function(t,e){return(0,o.Fs)(t,d(e))},f="Option",d=function(t){return function(e){return m(e)?l:u(t(e.value))}},p={URI:f,map:c};(0,o.XY)(2,a(p)),a(p);var h={URI:f,map:c,ap:function(t,e){var n;return(0,o.Fs)(t,(n=e,function(t){return m(t)||m(n)?l:u(t.value(n.value))}))},chain:(0,o.XY)(2,function(t,e){return m(t)?l:e(t.value)})};(0,o.XY)(2,function(t,e){return m(t)?e():t}),s.Ru;var m=function(t){return"None"===t._tag},g=function(t,e){return function(n){return m(n)?t():e(n.value)}};r(h),i={URI:f,fromEither:function(t){return"Left"===t._tag?l:u(t.right)}},r(h);var y=function(t){return null==t?l:u(t)};s.FR,s.rb},4853(t,e,n){n.d(e,{I3:()=>i});var r=n(4997),i=function(t){return{equals:function(e,n){return e===n||0===t(e,n)},compare:function(e,n){return e===n?0:t(e,n)}}};r.ue},5469(t,e,n){n.d(e,{sb:()=>p,Tj:()=>m,x1:()=>g,OZ:()=>v,xW:()=>h,CA:()=>y,di:()=>d});var r=n(6128),i=n(8304),o=n(4853);n(4997);var a=r.rb,s=r.J_,l=(r.Gr,r.d5);r.FR;var u=l,c=r.RT,f=function(t){return 0===t.length},d=function(t){return function(e){return e.length<=1?e:e.slice().sort(t.compare)}},p=function(t){var e=function(e){if(1===e.length)return e;for(var n=[u(e)],r=c(e),i=function(e){n.every(function(n){return!t.equals(n,e)})&&n.push(e)},o=0;o<r.length;o++)i(r[o]);return n};return function(t){return s(t)?e(t):t}},h=function(t){return function(e){return f(e)?t:f(t)?e:e.concat(t)}},m=function(t){return function(e){return e.map(function(e){return t(e)})}},g=function(t){var e;return e=function(e,n){return t(n)},function(t){for(var n=[],i=0;i<t.length;i++){var o=e(i,t[i]);r.Ru(o)&&n.push(o.value)}return n}},y=function(){return{concat:function(t,e){return f(t)?e:f(e)?t:t.concat(e)}}},v=function(t){return(0,o.I3)(function(e,n){for(var r=e.length,o=n.length,a=Math.min(r,o),s=0;s<a;s++){var l=t.compare(e[s],n[s]);if(0!==l)return l}return i._k.compare(r,o)})};r.FR},4997(t,e,n){n.d(e,{Fs:()=>s,L3:()=>a,SK:()=>l,XY:()=>u,dY:()=>i,ue:()=>o});var r=function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};function i(t){return function(){return t}}var o=i(!0);function a(t,e,n,r,i,o,a,s,l){switch(arguments.length){case 1:return t;case 2:return function(){return e(t.apply(this,arguments))};case 3:return function(){return n(e(t.apply(this,arguments)))};case 4:return function(){return r(n(e(t.apply(this,arguments))))};case 5:return function(){return i(r(n(e(t.apply(this,arguments)))))};case 6:return function(){return o(i(r(n(e(t.apply(this,arguments))))))};case 7:return function(){return a(o(i(r(n(e(t.apply(this,arguments)))))))};case 8:return function(){return s(a(o(i(r(n(e(t.apply(this,arguments))))))))};case 9:return function(){return l(s(a(o(i(r(n(e(t.apply(this,arguments)))))))))}}}function s(t,e,n,r,i,o,a,s,l){switch(arguments.length){case 1:return t;case 2:return e(t);case 3:return n(e(t));case 4:return r(n(e(t)));case 5:return i(r(n(e(t))));case 6:return o(i(r(n(e(t)))));case 7:return a(o(i(r(n(e(t))))));case 8:return s(a(o(i(r(n(e(t)))))));case 9:return l(s(a(o(i(r(n(e(t))))))));default:for(var u=arguments[0],c=1;c<arguments.length;c++)u=arguments[c](u);return u}}var l=function(t,e){return e},u=function(t,e){var n="number"==typeof t?function(e){return e.length>=t}:t;return function(){var t=Array.from(arguments);return n(arguments)?e.apply(this,t):function(n){return e.apply(void 0,r([n],t,!1))}}}},6128(t,e,n){n.d(e,{FR:()=>p,Gr:()=>l,J_:()=>u,OC:()=>s,RT:()=>f,Ru:()=>i,aO:()=>h,d5:()=>c,dv:()=>o,rb:()=>d,zN:()=>a});var r=function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))},i=function(t){return"Some"===t._tag},o={_tag:"None"},a=function(t){return{_tag:"Some",value:t}},s=function(t){return"Left"===t._tag},l=function(t){return[t]},u=function(t){return t.length>0},c=function(t){return t[0]},f=function(t){return t.slice(1)},d=[],p={};Object.prototype.hasOwnProperty;var h=function(t){return r([t[0]],t.slice(1),!0)}},8304(t,e,n){n.d(e,{Eq:()=>r,_k:()=>i});var r={equals:function(t,e){return t===e}},i={equals:r.equals,compare:function(t,e){return t<e?-1:+(t>e)}};r.equals,i.compare},5286(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getApplicativeMonoid=function(t){var e=(0,r.getApplySemigroup)(t);return function(n){return{concat:e(n).concat,empty:t.of(n.empty)}}},e.getApplicativeComposition=function(t,e){var n=(0,o.getFunctorComposition)(t,e).map,a=(0,r.ap)(t,e);return{map:n,of:function(n){return t.of(e.of(n))},ap:function(t,e){return(0,i.pipe)(t,a(e))}}};var r=n(7900),i=n(3166),o=n(8411)},7900(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ap=function(t,e){return function(n){return function(r){return t.ap(t.map(r,function(t){return function(n){return e.ap(t,n)}}),n)}}},e.apFirst=function(t){return function(e){return function(n){return t.ap(t.map(n,function(t){return function(){return t}}),e)}}},e.apSecond=function(t){return function(e){return function(n){return t.ap(t.map(n,function(){return function(t){return t}}),e)}}},e.apS=function(t){return function(e,n){return function(r){return t.ap(t.map(r,function(t){return function(n){var r;return Object.assign({},t,((r={})[e]=n,r))}}),n)}}},e.getApplySemigroup=function(t){return function(e){return{concat:function(n,r){return t.ap(t.map(n,function(t){return function(n){return e.concat(t,n)}}),r)}}}},e.sequenceT=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=e.length,i=(s.has.call(u,r)||(u[r]=l(a.tuple,r-1,[])),u[r]),o=t.map(e[0],i),c=1;c<r;c++)o=t.ap(o,e[c]);return o}},e.sequenceS=function(t){return function(e){for(var n=Object.keys(e),r=n.length,i=function(t){var e=t.length;switch(e){case 1:return function(e){var n;return(n={})[t[0]]=e,n};case 2:return function(e){return function(n){var r;return(r={})[t[0]]=e,r[t[1]]=n,r}};case 3:return function(e){return function(n){return function(r){var i;return(i={})[t[0]]=e,i[t[1]]=n,i[t[2]]=r,i}}};case 4:return function(e){return function(n){return function(r){return function(i){var o;return(o={})[t[0]]=e,o[t[1]]=n,o[t[2]]=r,o[t[3]]=i,o}}}};case 5:return function(e){return function(n){return function(r){return function(i){return function(o){var a;return(a={})[t[0]]=e,a[t[1]]=n,a[t[2]]=r,a[t[3]]=i,a[t[4]]=o,a}}}}};default:return l(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var i={},o=0;o<e;o++)i[t[o]]=n[o];return i},e-1,[])}}(n),o=t.map(e[n[0]],i),a=1;a<r;a++)o=t.ap(o,e[n[a]]);return o}};var a=n(3166),s=o(n(7003));function l(t,e,n){return function(r){for(var i=Array(n.length+1),o=0;o<n.length;o++)i[o]=n[o];return i[n.length]=r,0===e?t.apply(null,i):l(t,e-1,i)}}var u={1:function(t){return[t]},2:function(t){return function(e){return[t,e]}},3:function(t){return function(e){return function(n){return[t,e,n]}}},4:function(t){return function(e){return function(n){return function(r){return[t,e,n,r]}}}},5:function(t){return function(e){return function(n){return function(r){return function(i){return[t,e,n,r,i]}}}}}}},5069(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.chainFirst=function(t){var e=n(t);return function(t){return function(n){return e(n,t)}}},e.tap=n,e.bind=function(t){return function(e,n){return function(r){return t.chain(r,function(r){return t.map(n(r),function(t){var n;return Object.assign({},r,((n={})[e]=t,n))})})}}};function n(t){return function(e,n){return t.chain(e,function(e){return t.map(n(e),function(){return e})})}}},5636(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.eqDate=e.eqNumber=e.eqString=e.eqBoolean=e.eq=e.strictEqual=e.getStructEq=e.getTupleEq=e.Contravariant=e.getMonoid=e.getSemigroup=e.eqStrict=e.URI=e.contramap=e.tuple=e.struct=e.fromEquals=void 0;var r=n(3166);e.fromEquals=function(t){return{equals:function(e,n){return e===n||t(e,n)}}},e.struct=function(t){return(0,e.fromEquals)(function(e,n){for(var r in t)if(!t[r].equals(e[r],n[r]))return!1;return!0})},e.tuple=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(0,e.fromEquals)(function(e,n){return t.every(function(t,r){return t.equals(e[r],n[r])})})},e.contramap=function(t){return function(n){return(0,e.fromEquals)(function(e,r){return n.equals(t(e),t(r))})}},e.URI="Eq",e.eqStrict={equals:function(t,e){return t===e}};var i={equals:function(){return!0}};e.getSemigroup=function(){return{concat:function(t,n){return(0,e.fromEquals)(function(e,r){return t.equals(e,r)&&n.equals(e,r)})}}},e.getMonoid=function(){return{concat:(0,e.getSemigroup)().concat,empty:i}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,r.pipe)(t,(0,e.contramap)(n))}},e.getTupleEq=e.tuple,e.getStructEq=e.struct,e.strictEqual=e.eqStrict.equals,e.eq=e.Contravariant,e.eqBoolean=e.eqStrict,e.eqString=e.eqStrict,e.eqNumber=e.eqStrict,e.eqDate={equals:function(t,e){return t.valueOf()===e.valueOf()}}},3399(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.fromOption=u,e.fromPredicate=function(t){return function(e,n){return function(r){return t.fromEither(e(r)?l.right(r):l.left(n(r)))}}},e.fromOptionK=c,e.chainOptionK=function(t,e){var n=c(t);return function(t){var r=n(t);return function(t){return function(n){return e.chain(n,r(t))}}}},e.fromEitherK=f,e.chainEitherK=function(t,e){var n=f(t);return function(t){return function(r){return e.chain(r,n(t))}}},e.chainFirstEitherK=function(t,e){var n=d(t,e);return function(t){return function(e){return n(e,t)}}},e.filterOrElse=function(t,e){return function(n,r){return function(i){return e.chain(i,function(e){return t.fromEither(n(e)?l.right(e):l.left(r(e)))})}}},e.tapEither=d;var a=n(5069),s=n(3166),l=o(n(7003));function u(t){return function(e){return function(n){return t.fromEither(l.isNone(n)?l.left(e()):l.right(n.value))}}}function c(t){var e=u(t);return function(t){var n=e(t);return function(t){return(0,s.flow)(t,n)}}}function f(t){return function(e){return(0,s.flow)(e,t.fromEither)}}function d(t,e){var n=f(t),r=(0,a.tap)(e);return function(t,e){return r(t,n(e))}}},8411(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.map=i,e.flap=function(t){return function(e){return function(n){return t.map(n,function(t){return t(e)})}}},e.bindTo=function(t){return function(e){return function(n){return t.map(n,function(t){var n;return(n={})[e]=t,n})}}},e.let=function(t){return function(e,n){return function(r){return t.map(r,function(t){var r;return Object.assign({},t,((r={})[e]=n(t),r))})}}},e.getFunctorComposition=function(t,e){var n=i(t,e);return{map:function(t,e){return(0,r.pipe)(t,n(e))}}},e.as=o,e.asUnit=function(t){var e=o(t);return function(t){return e(t,void 0)}};var r=n(3166);function i(t,e){return function(n){return function(r){return t.map(r,function(t){return e.map(t,n)})}}}function o(t){return function(e,n){return t.map(e,function(){return n})}}},5717(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.concatAll=e.endo=e.filterSecond=e.filterFirst=e.reverse=void 0,e.reverse=function(t){return{concat:function(e,n){return t.concat(n,e)}}},e.filterFirst=function(t){return function(e){return{concat:function(n,r){return t(n)?e.concat(n,r):r}}}},e.filterSecond=function(t){return function(e){return{concat:function(n,r){return t(r)?e.concat(n,r):n}}}},e.endo=function(t){return function(e){return{concat:function(n,r){return e.concat(t(n),t(r))}}}},e.concatAll=function(t){return function(e){return function(n){return n.reduce(function(e,n){return t.concat(e,n)},e)}}}},199(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.throwError=e.Witherable=e.wilt=e.wither=e.Traversable=e.sequence=e.traverse=e.Filterable=e.partitionMap=e.partition=e.filterMap=e.filter=e.Compactable=e.separate=e.compact=e.Extend=e.extend=e.Alternative=e.guard=e.Zero=e.zero=e.Alt=e.alt=e.altW=e.orElse=e.Foldable=e.reduceRight=e.foldMap=e.reduce=e.Monad=e.Chain=e.flatMap=e.Applicative=e.Apply=e.ap=e.Pointed=e.of=e.asUnit=e.as=e.Functor=e.map=e.getMonoid=e.getOrd=e.getEq=e.getShow=e.URI=e.getRight=e.getLeft=e.some=e.none=void 0,e.getLastMonoid=e.getFirstMonoid=e.getApplyMonoid=e.getApplySemigroup=e.option=e.mapNullable=e.chainFirst=e.chain=e.sequenceArray=e.traverseArray=e.traverseArrayWithIndex=e.traverseReadonlyArrayWithIndex=e.traverseReadonlyNonEmptyArrayWithIndex=e.ApT=e.apS=e.bind=e.let=e.bindTo=e.Do=e.exists=e.toUndefined=e.toNullable=e.chainNullableK=e.fromNullableK=e.tryCatchK=e.tryCatch=e.fromNullable=e.chainFirstEitherK=e.chainEitherK=e.fromEitherK=e.duplicate=e.tapEither=e.tap=e.flatten=e.apSecond=e.apFirst=e.flap=e.getOrElse=e.getOrElseW=e.fold=e.match=e.foldW=e.matchW=e.isNone=e.isSome=e.FromEither=e.fromEither=e.MonadThrow=void 0,e.fromPredicate=function(t){return function(n){return t(n)?(0,e.some)(n):e.none}},e.elem=function t(n){return function(r,i){if(void 0===i){var o=t(n);return function(t){return o(r,t)}}return!(0,e.isNone)(i)&&n.equals(r,i.value)}},e.getRefinement=function(t){return function(n){return(0,e.isSome)(t(n))}};var a=n(5286),s=n(7900),l=o(n(5069)),u=n(3399),c=n(3166),f=n(8411),d=o(n(7003)),p=n(6725),h=n(7257),m=n(4679),g=n(285),y=n(8404);e.none=d.none,e.some=d.some,e.getLeft=function(t){return"Right"===t._tag?e.none:(0,e.some)(t.left)},e.getRight=function(t){return"Left"===t._tag?e.none:(0,e.some)(t.right)};var v=function(t,n){return(0,c.pipe)(t,(0,e.map)(n))},x=function(t,n){return(0,c.pipe)(t,(0,e.ap)(n))},b=function(t,n,r){return(0,c.pipe)(t,(0,e.reduce)(n,r))},w=function(t){var n=(0,e.foldMap)(t);return function(t,e){return(0,c.pipe)(t,n(e))}},j=function(t,n,r){return(0,c.pipe)(t,(0,e.reduceRight)(n,r))},S=function(t){var n=(0,e.traverse)(t);return function(t,e){return(0,c.pipe)(t,n(e))}},_=function(t,n){return(0,c.pipe)(t,(0,e.alt)(n))},M=function(t,n){return(0,c.pipe)(t,(0,e.filter)(n))},E=function(t,n){return(0,c.pipe)(t,(0,e.filterMap)(n))},O=function(t,n){return(0,c.pipe)(t,(0,e.extend)(n))},$=function(t,n){return(0,c.pipe)(t,(0,e.partition)(n))},k=function(t,n){return(0,c.pipe)(t,(0,e.partitionMap)(n))};e.URI="Option",e.getShow=function(t){return{show:function(n){return(0,e.isNone)(n)?"none":"some(".concat(t.show(n.value),")")}}},e.getEq=function(t){return{equals:function(n,r){return n===r||((0,e.isNone)(n)?(0,e.isNone)(r):!(0,e.isNone)(r)&&t.equals(n.value,r.value))}}},e.getOrd=function(t){return{equals:(0,e.getEq)(t).equals,compare:function(n,r){return n===r?0:(0,e.isSome)(n)?(0,e.isSome)(r)?t.compare(n.value,r.value):1:(0,e.isSome)(r)?-1:0}}},e.getMonoid=function(t){return{concat:function(n,r){return(0,e.isNone)(n)?r:(0,e.isNone)(r)?n:(0,e.some)(t.concat(n.value,r.value))},empty:e.none}},e.map=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.some)(t(n.value))}},e.Functor={URI:e.URI,map:v},e.as=(0,c.dual)(2,(0,f.as)(e.Functor)),e.asUnit=(0,f.asUnit)(e.Functor),e.of=e.some,e.Pointed={URI:e.URI,of:e.of},e.ap=function(t){return function(n){return(0,e.isNone)(n)||(0,e.isNone)(t)?e.none:(0,e.some)(n.value(t.value))}},e.Apply={URI:e.URI,map:v,ap:x},e.Applicative={URI:e.URI,map:v,ap:x,of:e.of},e.flatMap=(0,c.dual)(2,function(t,n){return(0,e.isNone)(t)?e.none:n(t.value)}),e.Chain={URI:e.URI,map:v,ap:x,chain:e.flatMap},e.Monad={URI:e.URI,map:v,ap:x,of:e.of,chain:e.flatMap},e.reduce=function(t,n){return function(r){return(0,e.isNone)(r)?t:n(t,r.value)}},e.foldMap=function(t){return function(n){return function(r){return(0,e.isNone)(r)?t.empty:n(r.value)}}},e.reduceRight=function(t,n){return function(r){return(0,e.isNone)(r)?t:n(r.value,t)}},e.Foldable={URI:e.URI,reduce:b,foldMap:w,reduceRight:j},e.orElse=(0,c.dual)(2,function(t,n){return(0,e.isNone)(t)?n():t}),e.altW=e.orElse,e.alt=e.orElse,e.Alt={URI:e.URI,map:v,alt:_},e.zero=function(){return e.none},e.Zero={URI:e.URI,zero:e.zero},e.guard=(0,y.guard)(e.Zero,e.Pointed),e.Alternative={URI:e.URI,map:v,ap:x,of:e.of,alt:_,zero:e.zero},e.extend=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.some)(t(n))}},e.Extend={URI:e.URI,map:v,extend:O},e.compact=(0,e.flatMap)(c.identity);var N=(0,m.separated)(e.none,e.none);e.separate=function(t){return(0,e.isNone)(t)?N:(0,m.separated)((0,e.getLeft)(t.value),(0,e.getRight)(t.value))},e.Compactable={URI:e.URI,compact:e.compact,separate:e.separate},e.filter=function(t){return function(n){return(0,e.isNone)(n)?e.none:t(n.value)?n:e.none}},e.filterMap=function(t){return function(n){return(0,e.isNone)(n)?e.none:t(n.value)}},e.partition=function(t){return function(e){return(0,m.separated)(M(e,(0,p.not)(t)),M(e,t))}},e.partitionMap=function(t){return(0,c.flow)((0,e.map)(t),e.separate)},e.Filterable={URI:e.URI,map:v,compact:e.compact,separate:e.separate,filter:M,filterMap:E,partition:$,partitionMap:k},e.traverse=function(t){return function(n){return function(r){return(0,e.isNone)(r)?t.of(e.none):t.map(n(r.value),e.some)}}},e.sequence=function(t){return function(n){return(0,e.isNone)(n)?t.of(e.none):t.map(n.value,e.some)}},e.Traversable={URI:e.URI,map:v,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence};var R=(0,g.witherDefault)(e.Traversable,e.Compactable),I=(0,g.wiltDefault)(e.Traversable,e.Compactable);e.wither=function(t){var e=R(t);return function(t){return function(n){return e(n,t)}}},e.wilt=function(t){var e=I(t);return function(t){return function(n){return e(n,t)}}},e.Witherable={URI:e.URI,map:v,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence,compact:e.compact,separate:e.separate,filter:M,filterMap:E,partition:$,partitionMap:k,wither:R,wilt:I},e.throwError=function(){return e.none},e.MonadThrow={URI:e.URI,map:v,ap:x,of:e.of,chain:e.flatMap,throwError:e.throwError},e.fromEither=e.getRight,e.FromEither={URI:e.URI,fromEither:e.fromEither},e.isSome=d.isSome,e.isNone=function(t){return"None"===t._tag},e.matchW=function(t,n){return function(r){return(0,e.isNone)(r)?t():n(r.value)}},e.foldW=e.matchW,e.match=e.matchW,e.fold=e.match,e.getOrElseW=function(t){return function(n){return(0,e.isNone)(n)?t():n.value}},e.getOrElse=e.getOrElseW,e.flap=(0,f.flap)(e.Functor),e.apFirst=(0,s.apFirst)(e.Apply),e.apSecond=(0,s.apSecond)(e.Apply),e.flatten=e.compact,e.tap=(0,c.dual)(2,l.tap(e.Chain)),e.tapEither=(0,c.dual)(2,(0,u.tapEither)(e.FromEither,e.Chain)),e.duplicate=(0,e.extend)(c.identity),e.fromEitherK=(0,u.fromEitherK)(e.FromEither),e.chainEitherK=(0,u.chainEitherK)(e.FromEither,e.Chain),e.chainFirstEitherK=e.tapEither,e.fromNullable=function(t){return null==t?e.none:(0,e.some)(t)},e.tryCatch=function(t){try{return(0,e.some)(t())}catch(t){return e.none}},e.tryCatchK=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(0,e.tryCatch)(function(){return t.apply(void 0,n)})}},e.fromNullableK=function(t){return(0,c.flow)(t,e.fromNullable)},e.chainNullableK=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.fromNullable)(t(n.value))}},e.toNullable=(0,e.match)(c.constNull,c.identity),e.toUndefined=(0,e.match)(c.constUndefined,c.identity),e.exists=function(t){return function(n){return!(0,e.isNone)(n)&&t(n.value)}},e.Do=(0,e.of)(d.emptyRecord),e.bindTo=(0,f.bindTo)(e.Functor);var A=(0,f.let)(e.Functor);e.let=A,e.bind=l.bind(e.Chain),e.apS=(0,s.apS)(e.Apply),e.ApT=(0,e.of)(d.emptyReadonlyArray),e.traverseReadonlyNonEmptyArrayWithIndex=function(t){return function(n){var r=t(0,d.head(n));if((0,e.isNone)(r))return e.none;for(var i=[r.value],o=1;o<n.length;o++){var a=t(o,n[o]);if((0,e.isNone)(a))return e.none;i.push(a.value)}return(0,e.some)(i)}},e.traverseReadonlyArrayWithIndex=function(t){var n=(0,e.traverseReadonlyNonEmptyArrayWithIndex)(t);return function(t){return d.isNonEmpty(t)?n(t):e.ApT}},e.traverseArrayWithIndex=e.traverseReadonlyArrayWithIndex,e.traverseArray=function(t){return(0,e.traverseReadonlyArrayWithIndex)(function(e,n){return t(n)})},e.sequenceArray=(0,e.traverseArray)(c.identity),e.chain=e.flatMap,e.chainFirst=e.tap,e.mapNullable=e.chainNullableK,e.option={URI:e.URI,map:v,of:e.of,ap:x,chain:e.flatMap,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence,zero:e.zero,alt:_,extend:O,compact:e.compact,separate:e.separate,filter:M,filterMap:E,partition:$,partitionMap:k,wither:R,wilt:I,throwError:e.throwError},e.getApplySemigroup=(0,s.getApplySemigroup)(e.Apply),e.getApplyMonoid=(0,a.getApplicativeMonoid)(e.Applicative),e.getFirstMonoid=function(){return(0,e.getMonoid)((0,h.first)())},e.getLastMonoid=function(){return(0,e.getMonoid)((0,h.last)())}},6939(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ordDate=e.ordNumber=e.ordString=e.ordBoolean=e.ord=e.getDualOrd=e.getTupleOrd=e.between=e.clamp=e.max=e.min=e.geq=e.leq=e.gt=e.lt=e.equals=e.trivial=e.Contravariant=e.getMonoid=e.getSemigroup=e.URI=e.contramap=e.reverse=e.tuple=e.fromCompare=e.equalsDefault=void 0;var r=n(5636),i=n(3166);e.equalsDefault=function(t){return function(e,n){return e===n||0===t(e,n)}},e.fromCompare=function(t){return{equals:(0,e.equalsDefault)(t),compare:function(e,n){return e===n?0:t(e,n)}}},e.tuple=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(0,e.fromCompare)(function(e,n){for(var r=0;r<t.length-1;r++){var i=t[r].compare(e[r],n[r]);if(0!==i)return i}return t[r].compare(e[r],n[r])})},e.reverse=function(t){return(0,e.fromCompare)(function(e,n){return t.compare(n,e)})},e.contramap=function(t){return function(n){return(0,e.fromCompare)(function(e,r){return n.compare(t(e),t(r))})}},e.URI="Ord",e.getSemigroup=function(){return{concat:function(t,n){return(0,e.fromCompare)(function(e,r){var i=t.compare(e,r);return 0!==i?i:n.compare(e,r)})}}},e.getMonoid=function(){return{concat:(0,e.getSemigroup)().concat,empty:(0,e.fromCompare)(function(){return 0})}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,i.pipe)(t,(0,e.contramap)(n))}},e.trivial={equals:i.constTrue,compare:(0,i.constant)(0)},e.equals=function(t){return function(e){return function(n){return n===e||0===t.compare(n,e)}}},e.lt=function(t){return function(e,n){return -1===t.compare(e,n)}},e.gt=function(t){return function(e,n){return 1===t.compare(e,n)}},e.leq=function(t){return function(e,n){return 1!==t.compare(e,n)}},e.geq=function(t){return function(e,n){return -1!==t.compare(e,n)}},e.min=function(t){return function(e,n){return e===n||1>t.compare(e,n)?e:n}},e.max=function(t){return function(e,n){return e===n||t.compare(e,n)>-1?e:n}},e.clamp=function(t){var n=(0,e.min)(t),r=(0,e.max)(t);return function(t,e){return function(i){return r(n(i,e),t)}}},e.between=function(t){var n=(0,e.lt)(t),r=(0,e.gt)(t);return function(t,e){return function(i){return!(n(i,t)||r(i,e))}}},e.getTupleOrd=e.tuple,e.getDualOrd=e.reverse,e.ord=e.Contravariant;var o={equals:r.eqStrict.equals,compare:function(t,e){return t<e?-1:+(t>e)}};e.ordBoolean=o,e.ordString=o,e.ordNumber=o,e.ordDate=(0,i.pipe)(e.ordNumber,(0,e.contramap)(function(t){return t.valueOf()}))},6725(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.and=e.or=e.not=e.Contravariant=e.getMonoidAll=e.getSemigroupAll=e.getMonoidAny=e.getSemigroupAny=e.URI=e.contramap=void 0;var r=n(3166);e.contramap=function(t){return function(e){return(0,r.flow)(t,e)}},e.URI="Predicate",e.getSemigroupAny=function(){return{concat:function(t,n){return(0,r.pipe)(t,(0,e.or)(n))}}},e.getMonoidAny=function(){return{concat:(0,e.getSemigroupAny)().concat,empty:r.constFalse}},e.getSemigroupAll=function(){return{concat:function(t,n){return(0,r.pipe)(t,(0,e.and)(n))}}},e.getMonoidAll=function(){return{concat:(0,e.getSemigroupAll)().concat,empty:r.constTrue}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,r.pipe)(t,(0,e.contramap)(n))}},e.not=function(t){return function(e){return!t(e)}},e.or=function(t){return function(e){return function(n){return e(n)||t(n)}}},e.and=function(t){return function(e){return function(n){return e(n)&&t(n)}}}},7257(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.semigroupProduct=e.semigroupSum=e.semigroupString=e.getFunctionSemigroup=e.semigroupAny=e.semigroupAll=e.getIntercalateSemigroup=e.getMeetSemigroup=e.getJoinSemigroup=e.getDualSemigroup=e.getStructSemigroup=e.getTupleSemigroup=e.getFirstSemigroup=e.getLastSemigroup=e.getObjectSemigroup=e.semigroupVoid=e.concatAll=e.last=e.first=e.intercalate=e.tuple=e.struct=e.reverse=e.constant=e.max=e.min=void 0,e.fold=function(t){var n=(0,e.concatAll)(t);return function(t,e){return void 0===e?n(t):n(t)(e)}};var a=n(3166),s=o(n(7003)),l=o(n(5717)),u=o(n(6939));e.min=function(t){return{concat:u.min(t)}},e.max=function(t){return{concat:u.max(t)}},e.constant=function(t){return{concat:function(){return t}}},e.reverse=l.reverse,e.struct=function(t){return{concat:function(e,n){var r={};for(var i in t)s.has.call(t,i)&&(r[i]=t[i].concat(e[i],n[i]));return r}}},e.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return{concat:function(e,n){return t.map(function(t,r){return t.concat(e[r],n[r])})}}},e.intercalate=function(t){return function(e){return{concat:function(n,r){return e.concat(n,e.concat(t,r))}}}},e.first=function(){return{concat:a.identity}},e.last=function(){return{concat:function(t,e){return e}}},e.concatAll=l.concatAll,e.semigroupVoid=(0,e.constant)(void 0),e.getObjectSemigroup=function(){return{concat:function(t,e){return Object.assign({},t,e)}}},e.getLastSemigroup=e.last,e.getFirstSemigroup=e.first,e.getTupleSemigroup=e.tuple,e.getStructSemigroup=e.struct,e.getDualSemigroup=e.reverse,e.getJoinSemigroup=e.max,e.getMeetSemigroup=e.min,e.getIntercalateSemigroup=e.intercalate,e.semigroupAll={concat:function(t,e){return t&&e}},e.semigroupAny={concat:function(t,e){return t||e}},e.getFunctionSemigroup=a.getSemigroup,e.semigroupString={concat:function(t,e){return t+e}},e.semigroupSum={concat:function(t,e){return t+e}},e.semigroupProduct={concat:function(t,e){return t*e}}},4679(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.right=e.left=e.flap=e.Functor=e.Bifunctor=e.URI=e.bimap=e.mapLeft=e.map=e.separated=void 0;var r=n(3166),i=n(8411);e.separated=function(t,e){return{left:t,right:e}},e.map=function(t){return function(n){return(0,e.separated)((0,e.left)(n),t((0,e.right)(n)))}},e.mapLeft=function(t){return function(n){return(0,e.separated)(t((0,e.left)(n)),(0,e.right)(n))}},e.bimap=function(t,n){return function(r){return(0,e.separated)(t((0,e.left)(r)),n((0,e.right)(r)))}},e.URI="Separated",e.Bifunctor={URI:e.URI,mapLeft:function(t,n){return(0,r.pipe)(t,(0,e.mapLeft)(n))},bimap:function(t,n,i){return(0,r.pipe)(t,(0,e.bimap)(n,i))}},e.Functor={URI:e.URI,map:function(t,n){return(0,r.pipe)(t,(0,e.map)(n))}},e.flap=(0,i.flap)(e.Functor),e.left=function(t){return t.left},e.right=function(t){return t.right}},285(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.wiltDefault=function(t,e){return function(n){var r=t.traverse(n);return function(t,i){return n.map(r(t,i),e.separate)}}},e.witherDefault=function(t,e){return function(n){var r=t.traverse(n);return function(t,i){return n.map(r(t,i),e.compact)}}},e.filterE=function(t){return function(e){var n=t.wither(e);return function(t){return function(r){return n(r,function(n){return e.map(t(n),function(t){return t?a.some(n):a.none})})}}}};var a=o(n(7003))},8404(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.guard=function(t,e){return function(n){return n?e.of(void 0):t.zero()}}},3166(t,e){var n=this&&this.__spreadArray||function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};function r(t){return t}function i(t){return function(){return t}}function o(t,e,n,r,i,o,a,s,l){switch(arguments.length){case 1:return t;case 2:return function(){return e(t.apply(this,arguments))};case 3:return function(){return n(e(t.apply(this,arguments)))};case 4:return function(){return r(n(e(t.apply(this,arguments))))};case 5:return function(){return i(r(n(e(t.apply(this,arguments)))))};case 6:return function(){return o(i(r(n(e(t.apply(this,arguments))))))};case 7:return function(){return a(o(i(r(n(e(t.apply(this,arguments)))))))};case 8:return function(){return s(a(o(i(r(n(e(t.apply(this,arguments))))))))};case 9:return function(){return l(s(a(o(i(r(n(e(t.apply(this,arguments)))))))))}}}function a(t){throw Error("Called `absurd` function which should be uncallable")}Object.defineProperty(e,"__esModule",{value:!0}),e.dual=e.getEndomorphismMonoid=e.SK=e.hole=e.constVoid=e.constUndefined=e.constNull=e.constFalse=e.constTrue=e.unsafeCoerce=e.apply=e.getRing=e.getSemiring=e.getMonoid=e.getSemigroup=e.getBooleanAlgebra=void 0,e.identity=r,e.constant=i,e.flip=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length>1?t(e[1],e[0]):function(n){return t(n)(e[0])}}},e.flow=o,e.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t},e.increment=function(t){return t+1},e.decrement=function(t){return t-1},e.absurd=a,e.tupled=function(t){return function(e){return t.apply(void 0,e)}},e.untupled=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t(e)}},e.pipe=function(t,e,n,r,i,o,a,s,l){switch(arguments.length){case 1:return t;case 2:return e(t);case 3:return n(e(t));case 4:return r(n(e(t)));case 5:return i(r(n(e(t))));case 6:return o(i(r(n(e(t)))));case 7:return a(o(i(r(n(e(t))))));case 8:return s(a(o(i(r(n(e(t)))))));case 9:return l(s(a(o(i(r(n(e(t))))))));default:for(var u=arguments[0],c=1;c<arguments.length;c++)u=arguments[c](u);return u}},e.not=function(t){return function(e){return!t(e)}},e.getBooleanAlgebra=function(t){return function(){return{meet:function(e,n){return function(r){return t.meet(e(r),n(r))}},join:function(e,n){return function(r){return t.join(e(r),n(r))}},zero:function(){return t.zero},one:function(){return t.one},implies:function(e,n){return function(r){return t.implies(e(r),n(r))}},not:function(e){return function(n){return t.not(e(n))}}}}},e.getSemigroup=function(t){return function(){return{concat:function(e,n){return function(r){return t.concat(e(r),n(r))}}}}},e.getMonoid=function(t){var n=(0,e.getSemigroup)(t);return function(){return{concat:n().concat,empty:function(){return t.empty}}}},e.getSemiring=function(t){return{add:function(e,n){return function(r){return t.add(e(r),n(r))}},zero:function(){return t.zero},mul:function(e,n){return function(r){return t.mul(e(r),n(r))}},one:function(){return t.one}}},e.getRing=function(t){var n=(0,e.getSemiring)(t);return{add:n.add,mul:n.mul,one:n.one,zero:n.zero,sub:function(e,n){return function(r){return t.sub(e(r),n(r))}}}},e.apply=function(t){return function(e){return e(t)}},e.unsafeCoerce=r,e.constTrue=i(!0),e.constFalse=i(!1),e.constNull=i(null),e.constUndefined=i(void 0),e.constVoid=e.constUndefined,e.hole=a,e.SK=function(t,e){return e},e.getEndomorphismMonoid=function(){return{concat:function(t,e){return o(t,e)},empty:r}},e.dual=function(t,e){var r="number"==typeof t?function(e){return e.length>=t}:t;return function(){var t=Array.from(arguments);return r(arguments)?e.apply(this,t):function(r){return e.apply(void 0,n([r],t,!1))}}}},7003(t,e,n){var r=this&&this.__spreadArray||function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.flatMapReader=e.flatMapTask=e.flatMapIO=e.flatMapEither=e.flatMapOption=e.flatMapNullable=e.liftOption=e.liftNullable=e.fromReadonlyNonEmptyArray=e.has=e.emptyRecord=e.emptyReadonlyArray=e.tail=e.head=e.isNonEmpty=e.singleton=e.right=e.left=e.isRight=e.isLeft=e.some=e.none=e.isSome=e.isNone=void 0;var i=n(3166);e.isNone=function(t){return"None"===t._tag},e.isSome=function(t){return"Some"===t._tag},e.none={_tag:"None"},e.some=function(t){return{_tag:"Some",value:t}},e.isLeft=function(t){return"Left"===t._tag},e.isRight=function(t){return"Right"===t._tag},e.left=function(t){return{_tag:"Left",left:t}},e.right=function(t){return{_tag:"Right",right:t}},e.singleton=function(t){return[t]},e.isNonEmpty=function(t){return t.length>0},e.head=function(t){return t[0]},e.tail=function(t){return t.slice(1)},e.emptyReadonlyArray=[],e.emptyRecord={},e.has=Object.prototype.hasOwnProperty,e.fromReadonlyNonEmptyArray=function(t){return r([t[0]],t.slice(1),!0)},e.liftNullable=function(t){return function(n,r){return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var a=n.apply(void 0,i);return t.fromEither(null==a?(0,e.left)(r.apply(void 0,i)):(0,e.right)(a))}}},e.liftOption=function(t){return function(n,r){return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var a=n.apply(void 0,i);return t.fromEither((0,e.isNone)(a)?(0,e.left)(r.apply(void 0,i)):(0,e.right)(a.value))}}},e.flatMapNullable=function(t,n){return(0,i.dual)(3,function(r,i,o){return n.flatMap(r,(0,e.liftNullable)(t)(i,o))})},e.flatMapOption=function(t,n){return(0,i.dual)(3,function(r,i,o){return n.flatMap(r,(0,e.liftOption)(t)(i,o))})},e.flatMapEither=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromEither(r(e))})})},e.flatMapIO=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromIO(r(e))})})},e.flatMapTask=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromTask(r(e))})})},e.flatMapReader=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromReader(r(e))})})}},9146(t,e,n){var r=n(8822),i="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function u(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!i(t,n)}catch(t){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=o({inst:{value:n,getSnapshot:e}}),i=r[0].inst,c=r[1];return s(function(){i.value=n,i.getSnapshot=e,u(i)&&c({inst:i})},[t,n,e]),a(function(){return u(i)&&c({inst:i}),t(function(){u(i)&&c({inst:i})})},[t]),l(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},2245(t,e,n){var r=n(8822),i=n(869),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=i.useSyncExternalStore,s=r.useRef,l=r.useEffect,u=r.useMemo,c=r.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=a(t,(f=u(function(){function t(t){if(!l){if(l=!0,a=t,t=r(t),void 0!==i&&d.hasValue){var e=d.value;if(i(e,t))return s=e}return s=t}if(e=s,o(a,t))return e;var n=r(t);return void 0!==i&&i(e,n)?(a=t,e):(a=t,s=n)}var a,s,l=!1,u=void 0===n?null:n;return[function(){return t(e())},null===u?void 0:function(){return t(u())}]},[e,n,r,i]))[0],f[1]);return l(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},869(t,e,n){t.exports=n(9146)},6427(t,e,n){t.exports=n(2245)},452(t,e,n){n.d(e,{Sx:()=>l});var r,i=n(3088);let o="xstate.promise.resolve",a="xstate.promise.reject",s=new WeakMap;function l(t){return{config:t,transition:(t,e,n)=>{if("active"!==t.status)return t;switch(e.type){case o:{let n=e.data;return{...t,status:"done",output:n,input:void 0}}case a:return{...t,status:"error",error:e.data,input:void 0};case i.X:return s.get(n.self)?.abort(),{...t,status:"stopped",input:void 0};default:return t}},start:(e,{self:n,system:r,emit:i})=>{if("active"!==e.status)return;let l=new AbortController;s.set(n,l),Promise.resolve(t({input:e.input,system:r,self:n,signal:l.signal,emit:i})).then(t=>{"active"===n.getSnapshot().status&&(s.delete(n),r._relay(n,n,{type:o,data:t}))},t=>{"active"===n.getSnapshot().status&&(s.delete(n),r._relay(n,n,{type:a,data:t}))})},getInitialSnapshot:(t,e)=>({status:"active",output:void 0,error:void 0,input:e}),getPersistedSnapshot:t=>t,restoreSnapshot:t=>t}}r=void 0,t=>t},3088(t,e,n){n.d(e,{$:()=>N,B:()=>ts,C:()=>tr,D:()=>tO,E:()=>G,F:()=>tA,G:()=>te,H:()=>t_,I:()=>function t(e,n,r,i){if("string"==typeof n){let t;return(t=td(e,n).next(r,i))&&t.length?t:e.next(r,i)}if(1===Object.keys(n).length){let o,a;return(a=t(td(e,(o=Object.keys(n))[0]),n[o[0]],r,i))&&a.length?a:e.next(r,i)}let o=[];for(let a of Object.keys(n)){let s=n[a];if(!s)continue;let l=t(td(e,a),s,r,i);l&&o.push(...l)}return o.length?o:e.next(r,i)},J:()=>tS,K:()=>p,L:()=>tb,M:()=>tf,N:()=>s,O:()=>g,P:()=>tn,Q:()=>tp,R:()=>tT,S:()=>a,T:()=>E,U:()=>u,V:()=>d,W:()=>R,X:()=>c,Y:()=>tC,a:()=>L,b:()=>U,c:()=>C,d:()=>X,g:()=>th,n:()=>Z,q:()=>v,r:()=>tz,s:()=>W,t:()=>x,u:()=>ta,v:()=>j,w:()=>to,x:()=>V,y:()=>M,z:()=>ti});var r,i=n(6760);class o{constructor(t){this._process=t,this._active=!1,this._current=null,this._last=null}start(){this._active=!0,this.flush()}clear(){this._current&&(this._current.next=null,this._last=this._current)}enqueue(t){let e={value:t,next:null};if(this._current){this._last.next=e,this._last=e;return}this._current=e,this._last=e,this._active&&this.flush()}flush(){for(;this._current;){let t=this._current;this._process(t.value),this._current=t.next}this._last=null}}let a=".",s="",l="xstate.init",u="xstate.error",c="xstate.stop";function f(t,e){return{type:`xstate.done.state.${t}`,output:e}}function d(t,e){return{type:`xstate.error.actor.${t}`,error:e,actorId:t}}function p(t){return{type:l,input:t}}function h(t){setTimeout(()=>{throw t})}let m="function"==typeof Symbol&&Symbol.observable||"@@observable";function g(t){if(w(t))return t;let e=[],n="";for(let r=0;r<t.length;r++){switch(t.charCodeAt(r)){case 92:n+=t[r+1],r++;continue;case 46:e.push(n),n="";continue}n+=t[r]}return e.push(n),e}function y(t){var e;return(e=t)&&"object"==typeof e&&"machine"in e&&"value"in e?t.value:"string"!=typeof t?t:function(t){if(1===t.length)return t[0];let e={},n=e;for(let e=0;e<t.length-1;e++)if(e===t.length-2)n[t[e]]=t[e+1];else{let r=n;n={},r[t[e]]=n}return e}(g(t))}function v(t,e){let n={},r=Object.keys(t);for(let i=0;i<r.length;i++){let o=r[i];n[o]=e(t[o],o,t,i)}return n}function x(t){var e;return void 0===t?[]:w(e=t)?e:[e]}function b(t,e,n,r){return"function"==typeof t?t({context:e,event:n,self:r}):t}function w(t){return Array.isArray(t)}function j(t){var e;return(w(e=t)?e:[e]).map(t=>void 0===t||"string"==typeof t?{target:t}:t)}function S(t){if(void 0!==t&&""!==t)return x(t)}function _(t,e,n){let r="object"==typeof t,i=r?t:void 0;return{next:(r?t.next:t)?.bind(i),error:(r?t.error:e)?.bind(i),complete:(r?t.complete:n)?.bind(i)}}function M(t,e){return`${e}.${t}`}function E(t,e){let n=e.match(/^xstate\.invoke\.(\d+)\.(.*)/);if(!n)return t.implementations.actors[e];let[,r,i]=n,o=t.getStateNodeById(i).config.invoke;return(Array.isArray(o)?o[r]:o).src}function O(t,e){return`${t.sessionId}.${e}`}let $=0,k=!1,N=1,R=((r={})[r.NotStarted=0]="NotStarted",r[r.Running=1]="Running",r[r.Stopped=2]="Stopped",r),I={clock:{setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t)},logger:console.log.bind(console),devTools:!1};class A{constructor(t,e){this.logic=t,this._snapshot=void 0,this.clock=void 0,this.options=void 0,this.id=void 0,this.mailbox=new o(this._process.bind(this)),this.observers=new Set,this.eventListeners=new Map,this.logger=void 0,this._processingStatus=R.NotStarted,this._parent=void 0,this._syncSnapshot=void 0,this.ref=void 0,this._actorScope=void 0,this.systemId=void 0,this.sessionId=void 0,this.system=void 0,this._doneEvent=void 0,this.src=void 0,this._deferred=[];const n={...I,...e},{clock:r,logger:i,parent:a,syncSnapshot:s,id:l,systemId:u,inspect:c}=n;this.system=a?a.system:function(t,e){let n=new Map,r=new Map,i=new WeakMap,o=new Set,a={},{clock:s,logger:l}=e,u={schedule:(t,e,n,r,i=Math.random().toString(36).slice(2))=>{let o={source:t,target:e,event:n,delay:r,id:i,startedAt:Date.now()},l=O(t,i);c._snapshot._scheduledEvents[l]=o;let u=s.setTimeout(()=>{delete a[l],delete c._snapshot._scheduledEvents[l],c._relay(t,e,n)},r);a[l]=u},cancel:(t,e)=>{let n=O(t,e),r=a[n];delete a[n],delete c._snapshot._scheduledEvents[n],void 0!==r&&s.clearTimeout(r)},cancelAll:t=>{for(let e in c._snapshot._scheduledEvents){let n=c._snapshot._scheduledEvents[e];n.source===t&&u.cancel(t,n.id)}}},c={_snapshot:{_scheduledEvents:(e?.snapshot&&e.snapshot.scheduler)??{}},_bookId:()=>`x:${$++}`,_register:(t,e)=>(n.set(t,e),t),_unregister:t=>{n.delete(t.sessionId);let e=i.get(t);void 0!==e&&(r.delete(e),i.delete(t))},get:t=>r.get(t),getAll:()=>Object.fromEntries(r.entries()),_set:(t,e)=>{let n=r.get(t);if(n&&n!==e)throw Error(`Actor with system ID '${t}' already exists.`);r.set(t,e),i.set(e,t)},inspect:t=>{let e=_(t);return o.add(e),{unsubscribe(){o.delete(e)}}},_sendInspectionEvent:e=>{if(!o.size)return;let n={...e,rootId:t.sessionId};o.forEach(t=>t.next?.(n))},_relay:(t,e,n)=>{c._sendInspectionEvent({type:"@xstate.event",sourceRef:t,actorRef:e,event:n}),e._send(n)},scheduler:u,getSnapshot:()=>({_scheduledEvents:{...c._snapshot._scheduledEvents}}),start:()=>{let t=c._snapshot._scheduledEvents;for(let e in c._snapshot._scheduledEvents={},t){let{source:n,target:r,event:i,delay:o,id:a}=t[e];u.schedule(n,r,i,o,a)}},_clock:s,_logger:l};return c}(this,{clock:r,logger:i}),c&&!a&&this.system.inspect(_(c)),this.sessionId=this.system._bookId(),this.id=l??this.sessionId,this.logger=e?.logger??this.system._logger,this.clock=e?.clock??this.system._clock,this._parent=a,this._syncSnapshot=s,this.options=n,this.src=n.src??t,this.ref=this,this._actorScope={self:this,id:this.id,sessionId:this.sessionId,logger:this.logger,defer:t=>{this._deferred.push(t)},system:this.system,stopChild:t=>{if(t._parent!==this)throw Error(`Cannot stop child actor ${t.id} of ${this.id} because it is not a child`);t._stop()},emit:t=>{let e=this.eventListeners.get(t.type),n=this.eventListeners.get("*");if(e||n)for(let r of[...e?e.values():[],...n?n.values():[]])try{r(t)}catch(t){h(t)}},actionExecutor:t=>{let e=()=>{if(this._actorScope.system._sendInspectionEvent({type:"@xstate.action",actorRef:this,action:{type:t.type,params:t.params}}),!t.exec)return;let e=k;try{k=!0,t.exec(t.info,t.params)}finally{k=e}};this._processingStatus===R.Running?e():this._deferred.push(e)}},this.send=this.send.bind(this),this.system._sendInspectionEvent({type:"@xstate.actor",actorRef:this}),u&&(this.systemId=u,this.system._set(u,this)),this._initState(e?.snapshot??e?.state),u&&"active"!==this._snapshot.status&&this.system._unregister(this)}_initState(t){try{this._snapshot=t?this.logic.restoreSnapshot?this.logic.restoreSnapshot(t,this._actorScope):t:this.logic.getInitialSnapshot(this._actorScope,this.options?.input)}catch(t){this._snapshot={status:"error",output:void 0,error:t}}}update(t,e){let n;for(this._snapshot=t;n=this._deferred.shift();)try{n()}catch(e){this._deferred.length=0,this._snapshot={...t,status:"error",error:e}}switch(this._snapshot.status){case"active":for(let e of this.observers)try{e.next?.(t)}catch(t){h(t)}break;case"done":var r;for(let e of this.observers)try{e.next?.(t)}catch(t){h(t)}this._stopProcedure(),this._complete(),this._doneEvent=(r=this.id,{type:`xstate.done.actor.${r}`,output:this._snapshot.output,actorId:r}),this._parent&&this.system._relay(this,this._parent,this._doneEvent);break;case"error":this._error(this._snapshot.error)}this.system._sendInspectionEvent({type:"@xstate.snapshot",actorRef:this,event:e,snapshot:t})}subscribe(t,e,n){let r=_(t,e,n);if(this._processingStatus!==R.Stopped)this.observers.add(r);else switch(this._snapshot.status){case"done":try{r.complete?.()}catch(t){h(t)}break;case"error":{let t=this._snapshot.error;if(r.error)try{r.error(t)}catch(t){h(t)}else h(t)}}return{unsubscribe:()=>{this.observers.delete(r)}}}on(t,e){let n=this.eventListeners.get(t);n||(n=new Set,this.eventListeners.set(t,n));let r=e.bind(void 0);return n.add(r),{unsubscribe:()=>{n.delete(r)}}}start(){if(this._processingStatus===R.Running)return this;this._syncSnapshot&&this.subscribe({next:t=>{"active"===t.status&&this.system._relay(this,this._parent,{type:`xstate.snapshot.${this.id}`,snapshot:t})},error:()=>{}}),this.system._register(this.sessionId,this),this.systemId&&this.system._set(this.systemId,this),this._processingStatus=R.Running;let t=p(this.options.input);switch(this.system._sendInspectionEvent({type:"@xstate.event",sourceRef:this._parent,actorRef:this,event:t}),this._snapshot.status){case"done":return this.update(this._snapshot,t),this;case"error":return this._error(this._snapshot.error),this}if(this._parent||this.system.start(),this.logic.start)try{this.logic.start(this._snapshot,this._actorScope)}catch(t){return this._snapshot={...this._snapshot,status:"error",error:t},this._error(t),this}return this.update(this._snapshot,t),this.options.devTools&&this.attachDevTools(),this.mailbox.start(),this}_process(t){let e,n;try{e=this.logic.transition(this._snapshot,t,this._actorScope)}catch(t){n={err:t}}if(n){let{err:t}=n;this._snapshot={...this._snapshot,status:"error",error:t},this._error(t);return}this.update(e,t),t.type===c&&(this._stopProcedure(),this._complete())}_stop(){return this._processingStatus===R.Stopped||((this.mailbox.clear(),this._processingStatus===R.NotStarted)?this._processingStatus=R.Stopped:this.mailbox.enqueue({type:c})),this}stop(){if(this._parent)throw Error("A non-root actor cannot be stopped directly.");return this._stop()}_complete(){for(let t of this.observers)try{t.complete?.()}catch(t){h(t)}this.observers.clear()}_reportError(t){if(!this.observers.size){this._parent||h(t);return}let e=!1;for(let n of this.observers){let r=n.error;e||=!r;try{r?.(t)}catch(t){h(t)}}this.observers.clear(),e&&h(t)}_error(t){this._stopProcedure(),this._reportError(t),this._parent&&this.system._relay(this,this._parent,d(this.id,t))}_stopProcedure(){return this._processingStatus!==R.Running||(this.system.scheduler.cancelAll(this),this.mailbox.clear(),this.mailbox=new o(this._process.bind(this)),this._processingStatus=R.Stopped,this.system._unregister(this)),this}_send(t){this._processingStatus!==R.Stopped&&this.mailbox.enqueue(t)}send(t){this.system._relay(void 0,this,t)}attachDevTools(){let{devTools:t}=this.options;t&&("function"==typeof t?t:i.s)(this)}toJSON(){return{xstate$$type:N,id:this.id}}getPersistedSnapshot(t){return this.logic.getPersistedSnapshot(this._snapshot,t)}[m](){return this}getSnapshot(){return this._snapshot}}function C(t,...[e]){return new A(t,e)}function T(t,e,n,r,{sendId:i}){return[e,{sendId:"function"==typeof i?i(n,r):i},void 0]}function D(t,e){t.defer(()=>{t.system.scheduler.cancel(t.self,e.sendId)})}function L(t){function e(t,e){}return e.type="xstate.cancel",e.sendId=t,e.resolve=T,e.execute=D,e}function z(t,e,n,r,{id:i,systemId:o,src:a,input:s,syncSnapshot:l}){let u,c,f="string"==typeof a?E(e.machine,a):a,d="function"==typeof i?i(n):i;return f&&(c="function"==typeof s?s({context:e.context,event:n.event,self:t.self}):s,u=C(f,{id:d,src:a,parent:t.self,syncSnapshot:l,systemId:o,input:c})),[tC(e,{children:{...e.children,[d]:u}}),{id:i,systemId:o,actorRef:u,src:a,input:c},void 0]}function F(t,{actorRef:e}){e&&t.defer(()=>{e._processingStatus!==R.Stopped&&e.start()})}function U(...[t,{id:e,systemId:n,input:r,syncSnapshot:i=!1}={}]){function o(t,e){}return o.type="xstate.spawnChild",o.id=e,o.systemId=n,o.src=t,o.input=r,o.syncSnapshot=i,o.resolve=z,o.execute=F,o}function q(t,e,n,r,{actorRef:i}){let o="function"==typeof i?i(n,r):i,a="string"==typeof o?e.children[o]:o,s=e.children;return a&&(s={...s},delete s[a.id]),[tC(e,{children:s}),a,void 0]}function P(t,e){if(e){if(t.system._unregister(e),e._processingStatus!==R.Running)return void t.stopChild(e);t.defer(()=>{t.stopChild(e)})}}function W(t){function e(t,e){}return e.type="xstate.stopChild",e.actorRef=t,e.resolve=q,e.execute=P,e}function H(t,{context:e,event:n},{guards:r}){return!V(r[0],e,n,t)}function Z(t){function e(t,e){return!1}return e.check=H,e.guards=[t],e}function K(t,{context:e,event:n},{guards:r}){return r.every(r=>V(r,e,n,t))}function X(t){function e(t,e){return!1}return e.check=K,e.guards=t,e}function V(t,e,n,r){let{machine:i}=r,o="function"==typeof t,a=o?t:i.implementations.guards["string"==typeof t?t:t.type];if(!o&&!a)throw Error(`Guard '${"string"==typeof t?t:t.type}' is not implemented.'.`);if("function"!=typeof a)return V(a,e,n,r);let s={context:e,event:n},l=o||"string"==typeof t?void 0:"params"in t?"function"==typeof t.params?t.params({context:e,event:n}):t.params:void 0;return"check"in a?a.check(r,s,a):a(s,l)}let B=t=>"atomic"===t.type||"final"===t.type;function Y(t){return Object.values(t.states).filter(t=>"history"!==t.type)}function J(t,e){let n=[];if(e===t)return n;let r=t.parent;for(;r&&r!==e;)n.push(r),r=r.parent;return n}function G(t){let e=new Set(t),n=Q(e);for(let t of e)if("compound"!==t.type||n.get(t)&&n.get(t).length){if("parallel"===t.type){for(let n of Y(t))if("history"!==n.type&&!e.has(n))for(let t of tc(n))e.add(t)}}else tc(t).forEach(t=>e.add(t));for(let t of e){let n=t.parent;for(;n;)e.add(n),n=n.parent}return e}function Q(t){let e=new Map;for(let n of t)e.has(n)||e.set(n,[]),n.parent&&(e.has(n.parent)||e.set(n.parent,[]),e.get(n.parent).push(n));return e}function tt(t,e){return function t(e,n){let r=n.get(e);if(!r)return{};if("compound"===e.type){let t=r[0];if(!t)return{};if(B(t))return t.key}let i={};for(let e of r)i[e.key]=t(e,n);return i}(t,Q(G(e)))}function te(t,e){return"compound"===e.type?Y(e).some(e=>"final"===e.type&&t.has(e)):"parallel"===e.type?Y(e).every(e=>te(t,e)):"final"===e.type}let tn=t=>"#"===t[0];function tr(t,e){return t.transitions.get(e)||[...t.transitions.keys()].filter(t=>(function(t,e){if(e===t||"*"===e)return!0;if(!e.endsWith(".*"))return!1;let n=e.split("."),r=t.split(".");for(let t=0;t<n.length;t++){let e=n[t],i=r[t];if("*"===e)return t===n.length-1;if(e!==i)return!1}return!0})(e,t)).sort((t,e)=>e.length-t.length).flatMap(e=>t.transitions.get(e))}function ti(t){let e=t.config.after;return e?Object.keys(e).flatMap(n=>{var r;let i,o,a=e[n],s=Number.isNaN(+n)?n:+n,l=(r=t.id,o=(i={type:`xstate.after.${s}.${r}`}).type,t.entry.push(tz(i,{id:o,delay:s})),t.exit.push(L(o)),o);return x("string"==typeof a?{target:a}:a).map(t=>({...t,event:l,delay:s}))}).map(e=>{let{delay:n}=e;return{...to(t,e.event,e),delay:n}}):[]}function to(t,e,n){let r=S(n.target),i=n.reenter??!1,o=function(t,e){if(void 0!==e)return e.map(e=>{if("string"!=typeof e)return e;if(tn(e))return t.machine.getStateNodeById(e);let n=e[0]===a;if(n&&!t.parent)return tp(t,e.slice(1));let r=n?t.key+e:e;if(t.parent)try{return tp(t.parent,r)}catch(e){throw Error(`Invalid transition definition for state node '${t.id}':
${e.message}`)}throw Error(`Invalid target: "${e}" is not a valid target from the root node. Did you mean ".${e}"?`)})}(t,r),s={...n,actions:x(n.actions),guard:n.guard,target:o,source:t,reenter:i,eventType:e,toJSON:()=>({...s,source:`#${t.id}`,target:o?o.map(t=>`#${t.id}`):void 0})};return s}function ta(t){let e=new Map;if(t.config.on)for(let n of Object.keys(t.config.on)){if(n===s)throw Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');let r=t.config.on[n];e.set(n,j(r).map(e=>to(t,n,e)))}if(t.config.onDone){let n=`xstate.done.state.${t.id}`;e.set(n,j(t.config.onDone).map(e=>to(t,n,e)))}for(let n of t.invoke){if(n.onDone){let r=`xstate.done.actor.${n.id}`;e.set(r,j(n.onDone).map(e=>to(t,r,e)))}if(n.onError){let r=`xstate.error.actor.${n.id}`;e.set(r,j(n.onError).map(e=>to(t,r,e)))}if(n.onSnapshot){let r=`xstate.snapshot.${n.id}`;e.set(r,j(n.onSnapshot).map(e=>to(t,r,e)))}}for(let n of t.after){let t=e.get(n.eventType);t||(t=[],e.set(n.eventType,t)),t.push(n)}return e}function ts(t,e){let n="string"==typeof e?t.states[e]:e?t.states[e.target]:void 0;if(!n&&e)throw Error(`Initial state node "${e}" not found on parent state node #${t.id}`);let r={source:t,actions:e&&"string"!=typeof e?x(e.actions):[],eventType:null,reenter:!1,target:n?[n]:[],toJSON:()=>({...r,source:`#${t.id}`,target:n?[`#${n.id}`]:[]})};return r}function tl(t){let e=S(t.config.target);return e?{target:e.map(e=>"string"==typeof e?tp(t.parent,e):e)}:t.parent.initial}function tu(t){return"history"===t.type}function tc(t){let e=tf(t);for(let n of e)for(let r of J(n,t))e.add(r);return e}function tf(t){let e=new Set;return!function t(n){if(!e.has(n)){if(e.add(n),"compound"===n.type)t(n.initial.target[0]);else if("parallel"===n.type)for(let e of Y(n))t(e)}}(t),e}function td(t,e){if(tn(e))return t.machine.getStateNodeById(e);if(!t.states)throw Error(`Unable to retrieve child state '${e}' from '${t.id}'; no child states exist.`);let n=t.states[e];if(!n)throw Error(`Child state '${e}' does not exist on '${t.id}'`);return n}function tp(t,e){if("string"==typeof e&&tn(e))try{return t.machine.getStateNodeById(e)}catch{}let n=g(e).slice(),r=t;for(;n.length;){let t=n.shift();if(!t.length)break;r=td(r,t)}return r}function th(t,e){if("string"==typeof e){let n=t.states[e];if(!n)throw Error(`State '${e}' does not exist on '${t.id}'`);return[t,n]}let n=Object.keys(e),r=n.map(e=>td(t,e)).filter(Boolean);return[t.machine.root,t].concat(r,n.reduce((n,r)=>{let i=td(t,r);if(!i)return n;let o=th(i,e[r]);return n.concat(o)},[]))}function tm(t,e){let n=t;for(;n.parent&&n.parent!==e;)n=n.parent;return n.parent===e}function tg(t,e,n){let r=new Set;for(let i of t){let t=!1,o=new Set;for(let a of r)if(function(t,e){let n=new Set(t),r=new Set(e);for(let t of n)if(r.has(t))return!0;for(let t of r)if(n.has(t))return!0;return!1}(tx([i],e,n),tx([a],e,n)))if(tm(i.source,a.source))o.add(a);else{t=!0;break}if(!t){for(let t of o)r.delete(t);r.add(i)}}return Array.from(r)}function ty(t,e){if(!t.target)return[];let n=new Set;for(let r of t.target)if(tu(r))if(e[r.id])for(let t of e[r.id])n.add(t);else for(let t of ty(tl(r),e))n.add(t);else n.add(r);return[...n]}function tv(t,e){let n=ty(t,e);if(!n)return;if(!t.reenter&&n.every(e=>e===t.source||tm(e,t.source)))return t.source;let r=function(t){let[e,...n]=t;for(let t of J(e,void 0))if(n.every(e=>tm(e,t)))return t}(n.concat(t.source));return r||(t.reenter?void 0:t.source.machine.root)}function tx(t,e,n){let r=new Set;for(let i of t)if(i.target?.length){let t=tv(i,n);for(let n of(i.reenter&&i.source===t&&r.add(t),e))tm(n,t)&&r.add(n)}return[...r]}function tb(t,e,n,r,i,o){if(!t.length)return e;let a=new Set(e._nodes),s=e.historyValue,l=tg(t,a,s),u=e;i||([u,s]=function(t,e,n,r,i,o,a,s){let l,u=t,c=tx(r,i,o);for(let t of(c.sort((t,e)=>e.order-t.order),c))for(let e of function(t){return Object.keys(t.states).map(e=>t.states[e]).filter(t=>"history"===t.type)}(t)){let n;n="deep"===e.history?e=>B(e)&&tm(e,t):e=>e.parent===t,(l??={...o})[e.id]=Array.from(i).filter(n)}for(let t of c)u=tS(u,e,n,[...t.exit,...t.invoke.map(t=>W(t.id))],a,void 0),i.delete(t);return[u,l||o]}(u,r,n,l,a,s,o,n.actionExecutor)),u=function(t,e,n,r,i,o,a,s){let l=t,u=new Set,c=new Set;(function(t,e,n,r){for(let i of t){let t=tv(i,e);for(let o of i.target||[])!tu(o)&&(i.source!==o||i.source!==t||i.reenter)&&(r.add(o),n.add(o)),tw(o,e,n,r);for(let o of ty(i,e)){let a=J(o,t);t?.type==="parallel"&&a.push(t),tj(r,e,n,a,!i.source.parent&&i.reenter?void 0:t)}}})(r,a,c,u),s&&c.add(t.machine.root);let d=new Set;for(let t of[...u].sort((t,e)=>t.order-e.order)){i.add(t);let r=[];for(let e of(r.push(...t.entry),t.invoke))r.push(U(e.src,{...e,syncSnapshot:!!e.onSnapshot}));if(c.has(t)){let e=t.initial.actions;r.push(...e)}if(l=tS(l,e,n,r,o,t.invoke.map(t=>t.id)),"final"===t.type){let r=t.parent,a=r?.type==="parallel"?r:r?.parent,s=a||t;for(r?.type==="compound"&&o.push(f(r.id,void 0!==t.output?b(t.output,l.context,e,n.self):void 0));a?.type==="parallel"&&!d.has(a)&&te(i,a);)d.add(a),o.push(f(a.id)),s=a,a=a.parent;if(a)continue;l=tC(l,{status:"done",output:function(t,e,n,r,i){if(void 0===r.output)return;let o=f(i.id,void 0!==i.output&&i.parent?b(i.output,t.context,e,n.self):void 0);return b(r.output,t.context,o,n.self)}(l,e,n,l.machine.root,s)})}}return l}(u=tS(u,r,n,l.flatMap(t=>t.actions),o,void 0),r,n,l,a,o,s,i);let c=[...a];"done"===u.status&&(u=tS(u,r,n,c.sort((t,e)=>e.order-t.order).flatMap(t=>t.exit),o,void 0));try{if(s===e.historyValue&&function(t,e){if(t.length!==e.size)return!1;for(let n of t)if(!e.has(n))return!1;return!0}(e._nodes,a))return u;return tC(u,{_nodes:c,historyValue:s})}catch(t){throw t}}function tw(t,e,n,r){var i,o,a,s;if(tu(t))if(e[t.id]){let a=e[t.id];for(let t of a)r.add(t),tw(t,e,n,r);for(let s of a){i=s,o=t.parent,tj(r,e,n,J(i,o))}}else{let i=tl(t);for(let o of i.target)r.add(o),i===t.parent?.initial&&n.add(t.parent),tw(o,e,n,r);for(let o of i.target){a=o,s=t.parent,tj(r,e,n,J(a,s))}}else if("compound"===t.type){let[i]=t.initial.target;tu(i)||(r.add(i),n.add(i)),tw(i,e,n,r),tj(r,e,n,J(i,t))}else if("parallel"===t.type)for(let i of Y(t).filter(t=>!tu(t)))[...r].some(t=>tm(t,i))||(tu(i)||(r.add(i),n.add(i)),tw(i,e,n,r))}function tj(t,e,n,r,i){for(let o of r)if((!i||tm(o,i))&&t.add(o),"parallel"===o.type)for(let r of Y(o).filter(t=>!tu(t)))[...t].some(t=>tm(t,r))||(t.add(r),tw(r,e,n,t))}function tS(t,e,n,r,i,o){let a=o?[]:void 0,s=function t(e,n,r,i,o,a){let{machine:s}=e,l=e;for(let e of i){var u;let i="function"==typeof e,c=i?e:(u="string"==typeof e?e:e.type,s.implementations.actions[u]),f={context:l.context,event:n,self:r.self,system:r.system},d=i||"string"==typeof e?void 0:"params"in e?"function"==typeof e.params?e.params({context:l.context,event:n}):e.params:void 0;if(!c||!("resolve"in c)){r.actionExecutor({type:"string"==typeof e?e:"object"==typeof e?e.type:e.name||"(anonymous)",info:f,params:d,exec:c});continue}let[p,h,m]=c.resolve(r,l,f,d,c,o);l=p,"retryResolve"in c&&a?.push([c,h]),"execute"in c&&r.actionExecutor({type:c.type,info:f,params:h,exec:c.execute.bind(null,r,h)}),m&&(l=t(l,n,r,m,o,a))}return l}(t,e,n,r,{internalQueue:i,deferredActorIds:o},a);return a?.forEach(([t,e])=>{t.retryResolve(n,s,e)}),s}function t_(t,e,n,r){let i=t,o=[];function a(t,e,r){n.system._sendInspectionEvent({type:"@xstate.microstep",actorRef:n.self,event:e,snapshot:t,_transitions:r}),o.push(t)}if(e.type===c)return a(i=tC(tM(i,e,n),{status:"stopped"}),e,[]),{snapshot:i,microstates:o};let s=e;if(s.type!==l){let e=s,l=e.type.startsWith("xstate.error.actor"),u=tE(e,i);if(l&&!u.length)return a(i=tC(t,{status:"error",error:e.error}),e,[]),{snapshot:i,microstates:o};a(i=tb(u,t,n,s,!1,r),e,u)}let u=!0;for(;"active"===i.status;){let t=u?function(t,e){let n=new Set;for(let r of t._nodes.filter(B))e:for(let i of[r].concat(J(r,void 0)))if(i.always){for(let r of i.always)if(void 0===r.guard||V(r.guard,t.context,e,t)){n.add(r);break e}}return tg(Array.from(n),new Set(t._nodes),t.historyValue)}(i,s):[],e=t.length?i:void 0;if(!t.length){if(!r.length)break;t=tE(s=r.shift(),i)}u=(i=tb(t,i,n,s,!1,r))!==e,a(i,s,t)}return"active"!==i.status&&tM(i,s,n),{snapshot:i,microstates:o}}function tM(t,e,n){return tS(t,e,n,Object.values(t.children).map(t=>W(t)),[],void 0)}function tE(t,e){return e.machine.getTransitionData(e,t)}function tO(t,e){let n=G(th(t,e));return tt(t,[...n])}let t$=function(t){return function t(e,n){let r=y(e),i=y(n);return"string"==typeof i?"string"==typeof r&&i===r:"string"==typeof r?r in i:Object.keys(r).every(e=>e in i&&t(r[e],i[e]))}(t,this.value)},tk=function(t){return this.tags.has(t)},tN=function(t){let e=this.machine.getTransitionData(this,t);return!!e?.length&&e.some(t=>void 0!==t.target||t.actions.length)},tR=function(){let{_nodes:t,tags:e,machine:n,getMeta:r,toJSON:i,can:o,hasTag:a,matches:s,...l}=this;return{...l,tags:Array.from(e)}},tI=function(){return this._nodes.reduce((t,e)=>(void 0!==e.meta&&(t[e.id]=e.meta),t),{})};function tA(t,e){return{status:t.status,output:t.output,error:t.error,machine:e,context:t.context,_nodes:t._nodes,value:tt(e.root,t._nodes),tags:new Set(t._nodes.flatMap(t=>t.tags)),children:t.children,historyValue:t.historyValue||{},matches:t$,hasTag:tk,can:tN,getMeta:tI,toJSON:tR}}function tC(t,e={}){return tA({...t,...e},t.machine)}function tT(t,e){let{_nodes:n,tags:r,machine:i,children:o,context:a,can:s,hasTag:l,matches:u,getMeta:c,toJSON:f,...d}=t,p={};for(let t in o){let n=o[t];p[t]={snapshot:n.getPersistedSnapshot(e),src:n.src,systemId:n.systemId,syncSnapshot:n._syncSnapshot}}return{...d,context:function t(e){let n;for(let r in e){let i=e[r];if(i&&"object"==typeof i)if("sessionId"in i&&"send"in i&&"ref"in i)(n??=Array.isArray(e)?e.slice():{...e})[r]={xstate$$type:N,id:i.id};else{let o=t(i);o!==i&&((n??=Array.isArray(e)?e.slice():{...e})[r]=o)}}return n??e}(a),children:p,historyValue:function(t){if("object"!=typeof t||null===t)return{};let e={};for(let n in t){let r=t[n];Array.isArray(r)&&(e[n]=r.map(t=>({id:t.id})))}return e}(d.historyValue)}}function tD(t,e,n,r,{event:i,id:o,delay:a},{internalQueue:s}){let l,u=e.machine.implementations.delays;if("string"==typeof i)throw Error(`Only event objects may be used with raise; use raise({ type: "${i}" }) instead`);let c="function"==typeof i?i(n,r):i;if("string"==typeof a){let t=u&&u[a];l="function"==typeof t?t(n,r):t}else l="function"==typeof a?a(n,r):a;return"number"!=typeof l&&s.push(c),[e,{event:c,id:o,delay:l},void 0]}function tL(t,e){let{event:n,delay:r,id:i}=e;if("number"==typeof r)return void t.defer(()=>{let e=t.self;t.system.scheduler.schedule(e,e,n,r,i)})}function tz(t,e){function n(t,e){}return n.type="xstate.raise",n.event=t,n.id=e?.id,n.delay=e?.delay,n.resolve=tD,n.execute=tL,n}},5067(t,e,n){n.d(e,{Xs:()=>tL,FB:()=>tz});var r=n(2742),i=n(8822),o=n(4468);function a({x:t,y:e}){return`${t},${e}`}function s(t){return(0,r.jsx)("g",{className:"map-layers",children:t.mapLayers.map((e,n)=>(0,r.jsx)(i.Fragment,{children:"line"===e.type?function(t,e,n){var s,c;let d=void 0!==n.filter?(s=t,c=n.filter,s.lines.features.filter(t=>c(t.properties)).map(t=>({name:f(t.properties.name),id:(0,o.bh)(t.properties)+"",tags:u(t.properties),width:l(t.properties),vs:t.geometry.coordinates}))):void 0!==n.data?n.data.map(t=>({tags:[],vs:t})):[];return 0===d.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("g",{className:n.name,style:{contain:"content"},children:d.map((t,o)=>(0,r.jsx)(i.Fragment,{children:function(t,{id:e,tags:n,width:i,widthScale:o,vs:s},l,u,c){return(0,r.jsx)("path",{id:void 0===e?void 0:`path${e}`,className:[l,...n].join(" ").replaceAll(/;/g,"_"),strokeWidth:(i??u??1)*(o??c??1),d:function(e){return(function(t,e){let[n,r]=t[0];return`M${a(e.transformPoint({x:n,y:r}))}`+t.slice(1).map(([t,n])=>e.transformPoint({x:t,y:n})).map(t=>`L${a(t)}`)})(e,t).replaceAll(/([.]\d\d)\d*/g,"$1")}(s)})}(e,t,n.name,n.width,n.widthScale)},o))})}(t.data.mapData,t.m,e):function(t,e,n){var s,c;let d=void 0!==n.filter?(s=t,c=n.filter,s.multipolygons.features.filter(t=>c(t.properties)).map(t=>({name:f(t.properties.name),id:(0,o.bh)(t.properties)+"",tags:u(t.properties),width:l(t.properties),vs:t.geometry.coordinates}))):void 0!==n.data?n.data.map(t=>({tags:[],vs:t})):[];return 0===d.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("g",{className:n.name,children:d.map((t,o)=>(0,r.jsx)(i.Fragment,{children:function(t,{id:e,tags:n,width:i,widthScale:o,vs:s},l,u,c){return(0,r.jsx)("path",{id:e,className:[l,...n].join(" ").replaceAll(/;/g,"_"),strokeWidth:(i??u??1)*(o??c??1),d:function(e){return e.map(e=>e.map(e=>(function(t,e){let[n,r]=t[0];return`M${a(e.transformPoint({x:n,y:r}))}`+t.slice(1,-1).map(([t,n])=>e.transformPoint({x:t,y:n})).map(t=>`L${a(t)}`)+"Z"})(e,t)).join("")).join("").replaceAll(/([.]\d\d)\d*/g,"$1")}(s)})}(e,t,n.name,n.width,n.widthScale)},o))})}(t.data.mapData,t.m,e)},n))})}function l(t){let e=t?.other_tags?.match(/"width"=>"([1-9][.0-9]*)"/);return e?Math.round(Number(e[1])):void 0}function u(t){return c.flatMap(e=>e(t))}let c=[function(t){let e=t?.other_tags?.match(/"access"=>"([^"][^"]*)"/);return e?[`access-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"service"=>"([^"][^"]*)"/);return e?[`service-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"surface"=>"([^"][^"]*)"/);return e?[`surface-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"lanes"=>"([^"][^"]*)"/);return e?[`lanes-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"tunnel"=>"([^"][^"]*)"/);return e?[`tunnel-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"building"=>"([^"][^"]*)"/);return e?[`building-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"level"=>"([^"][^"]*)"/);return e?[`level-${e[1]}`]:[]}];function f(t){return t===f||null===t?void 0:t}var d=n(9538),p=n(3e3);function h(t,{pointsFilter:e,polygonsFilter:n,linesFilter:r,data:i}){var o,a,s,l,u,c;return[...void 0===e?[]:(o=t.points.features,a=e,o.filter(t=>a(t.properties)).flatMap(m)),...void 0===r?[]:(s=t.lines.features,l=r,s.filter(t=>l(t.properties)).flatMap(m)),...void 0===n?[]:(u=t.multipolygons.features,c=n,u.filter(t=>c(t.properties)).flatMap(m)),...void 0===i?[]:i]}function m(t){let e=t.properties.centroid_x,n=t.properties.centroid_y;return null===e||null===n?[]:[(0,p.v)(e,n)]}function g(t){let e=25/t.fontSize;return(0,r.jsxs)("defs",{className:"map-markers",children:[t.mapMarkers.map((n,i)=>(0,r.jsx)("g",{children:(0,r.jsx)(y,{m:t.m,sz:e,name:n.name,href:n.name,vs:h(t.data.mapData,n)})},i)),(0,r.jsx)(v,{sz:e}),(0,r.jsx)(x,{sz:e}),(0,r.jsx)("style",{children:(0,r.jsx)(b,{...t})})]})}function y(t){return(0,r.jsx)(r.Fragment,{children:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n},i)=>(0,r.jsx)("use",{className:`${t.name}-${i}`,href:t.href,style:{transform:`translate(${(0,d.$V)(e)}px, ${(0,d.$V)(n)}px)scale(var(${t.sz}))`}},i))})}function v(t){var e;let n=t.sz/2;return(0,r.jsx)("path",{id:"point-name-marker",fill:"white",fillOpacity:"0.5",stroke:"none",strokeWidth:n/20,d:(e=n,`
M 0,0
m ${-e},0
a ${e},${e} 0,1,1 ${2*e},0
a ${e},${e} 0,1,1 ${-2*e},0
z
`).replaceAll(/([.]\d\d)\d*/g,"$1")})}function x(t){let e=t.sz/2,n=e/Math.sqrt(2);return(0,r.jsx)("path",{id:"position",className:"position",fill:"red",fillOpacity:"1",stroke:"none",d:(function(t,e){return`

M 0,0
l ${-t},${-t}
a ${e},${e} 0,1,1 ${2*t},0
z

m 0,${-t-e/4}
a ${e/2},${e/2} 0,1,0 0,${-e}
a ${e/2},${e/2} 0,1,0 0,${e}
z
`})(n,e).replaceAll(/([.]\d\d)\d*/g,"$1")})}function b(t){let e=(0,o.Jl)(),n=t.s*t.fontSize*.9;if(null===e)return(0,r.jsx)(r.Fragment,{children:`
#position {
  display: none;
}`});let{x:i,y:a}=t.data.mapCoord.matrix.transformPoint({x:e.coords.longitude,y:e.coords.latitude});return(0,r.jsx)(r.Fragment,{children:`
#position {
  display: initial !important;
  transform: translate(${i}px, ${a}px) scale(${n});
}
`})}function w(t,e,n){let r=t.name;return null===r||"string"!=typeof r||void 0!==e&&r.match(e)?[]:(void 0===n?r:r.replace(n," $1 ")).trim().split(j).map(t=>t.trim())}let j=/[ 　][ 　]*/;function S(t){return(0,r.jsx)("g",{className:"map-objects",children:t.mapObjects.map((e,n)=>(0,r.jsx)("g",{children:(0,r.jsx)(_,{m:t.m,name:e.name,path:e.path,width:e.width,vs:h(t.data.mapData,e)})},n))})}function _(t){return(0,r.jsx)("path",{className:t.name,fill:"none",stroke:"black",strokeWidth:t.width,d:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n})=>`M ${e},${n}`.replaceAll(/([.]\d\d)\d*/g,"$1")+t.path).join("")})}function M(t){return(0,r.jsx)("g",{className:"map-symbols",children:t.mapSymbols.map((e,n)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("g",{className:e.name,children:(0,r.jsx)(E,{name:e.name,href:e.href,vs:h(t.data.mapData,e),m:t.m})})},n))})}function E(t){return(0,r.jsx)(r.Fragment,{children:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n},i)=>(0,r.jsx)("use",{className:`${t.name}-${i}`,href:t.href,style:{transform:`translate(${e}px, ${n}px)`.replaceAll(/([.]\d\d)\d*/g,"$1")+"scale(var(--map-symbol-size))"}},i))})}var O=n(1943);let $="map-svg-layers",k="map-svg-objects",N="map-svg-symbols",R="map-svg-markers",I="map-svg-labels",A="map-html";var C=n(9815),T=n(7807),D=n(4630);function L(t){return(0,O._U)(A,(0,r.jsx)(z,{...t})),(0,r.jsx)("div",{id:A,className:"content svg"})}function z(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"map-html-content",children:(0,r.jsx)(U,{...t})}),(0,r.jsx)(F,{})]})}function F(){let t=(0,C.gK)(),{scroll:e}=t,n=(0,T.ZI)(t),i=`
#map-html-content {
  position: absolute;
  left: 0;
  top: 0;
  width: ${(0,d.$V)(e.width)}px;
  height: ${(0,d.$V)(e.height)}px;
  transform: ${n.toString()};
  transform-origin: left top;
}
`;return(0,r.jsx)("style",{children:i})}function U(t){let{pointNames:e}=(0,D.Ev)(),n=t.data.mapCoord.matrix;return(0,r.jsx)(r.Fragment,{children:e.map(t=>({...t,pos:n.transformPoint(t.pos)})).map((t,e)=>(0,r.jsx)("div",{style:{position:"absolute",left:0,top:0,transform:`translate(${t.pos.x}px, ${t.pos.y}px) scale(0.025) translate(-50%, -50%)`,transformOrigin:"left top"},children:t.name.map((t,e)=>(0,r.jsx)("p",{style:{margin:0,textAlign:"center",width:"20em"},children:t},e))},e))})}var q=n(2852);function P(t,e){return(-.5*t+(e+.5))*1.2}function W(t){return(0,O._U)(I,(0,r.jsx)(H,{...t})),(0,r.jsx)("div",{id:I,className:"content svg"})}function H(t){let e=t.carto?.filterLabelsByRange??!0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B,{}),(0,r.jsx)(Y,{...t}),e?(0,r.jsx)(X,{}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(V,{}),(0,r.jsx)("style",{children:Z})]})}let Z=`
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
`;function K(t){let{pointNames:e,areaNames:n}=(0,D.Ev)(),i=t.data.mapCoord.matrix;return(0,r.jsxs)("g",{id:"map-svg-labels1",children:[(0,r.jsx)("g",{children:e.map(t=>({...t,pos:i.transformPoint(t.pos)})).map(({id:t,pos:{x:e,y:n},size:i},o)=>(0,r.jsx)("use",{href:`#name-${t}`,style:{transform:`translate(${(0,d.$V)(e)}px, ${(0,d.$V)(n)}px) scale(${Math.round(i/10)/16})`}},o))}),(0,r.jsx)("g",{children:n.map(t=>({...t,pos:i.transformPoint(t.pos)})).map(({id:t,pos:{x:e,y:n},size:i},o)=>(0,r.jsx)("use",{id:`use-${t}`,href:`#name-${t}`,style:{transform:`translate(${(0,d.$V)(e)}px, ${(0,d.$V)(n)}px) scale(${Math.round(i/10)/16})`}},o))})]})}function X(){let{areaRange:t}=(0,D.HD)(),e=Array.from(t.insides.keys()).map(t=>`#use-${t}`).join(", "),n=Array.from(t.outsides.keys()).map(t=>`#use-${t}`).join(", ");return(0,r.jsx)("style",{children:`
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
`})}function V(){let{sizes:t}=(0,D.Ev)(),e=(0,C.tX)(),n=(0,i.useMemo)(()=>{var n,r;return n=t,r=e,n.map(t=>{let e=Math.pow(2,t)/r;return{size:t,opacity:(0,d.$V)(Math.pow(e>1e3?0:e<0?1:(1e3-e)/1e3,2))}})},[e,t]);return(0,r.jsx)("style",{children:`
${n.map(({size:t,opacity:e})=>`
.size-${t} {
  opacity: ${e};
}
`).reduce((t,e)=>t+e)}
`})}function B(){let{scroll:t,svg:e}=(0,C.gK)();return(0,r.jsx)("svg",{id:"map-svg-labels-content",viewBox:(0,q.C6)(e),width:(0,d.$V)(t.width),height:(0,d.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-labels1"})})}function Y(t){let{pointNames:e,areaNames:n}=(0,D.Ev)();return(0,r.jsx)("svg",{id:"map-svg-labels-defs",children:(0,r.jsxs)("defs",{children:[(0,r.jsx)("g",{children:e.map((t,e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(J,{_poi:t})},e))}),(0,r.jsx)("g",{children:n.map((t,e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(J,{_poi:t})},e))}),(0,r.jsx)(K,{...t})]})})}function J(t){let{id:e,name:n}=t._poi,{sizeMap:o}=(0,D.Ev)(),a=null===e?void 0:o.get(e);return void 0===a?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("text",{id:`name-${e}`,className:`size-${a}`,children:n.map((t,e)=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("tspan",{textAnchor:"middle",alignmentBaseline:"middle",x:"0",y:(0,d.$V)(16*P(n.length,e)),fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,children:t}),(0,r.jsx)("tspan",{textAnchor:"middle",alignmentBaseline:"middle",x:"0",y:(0,d.$V)(16*P(n.length,e)),fill:"black",children:t})]},e))})}function G(t){return(0,O._U)($,(0,r.jsx)(Q,{...t})),(0,r.jsx)("div",{id:$,className:"content svg"})}function Q(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(te,{}),(0,r.jsx)(tn,{...t}),(0,r.jsx)("style",{children:tt})]})}let tt=`
#map-svg-svg,
#map1 {
  contain: content;
  pointer-events: none;
}
#map-svg-defs {
  display: none;
}
`;function te(){let{scroll:t,svg:e}=(0,C.gK)();return(0,r.jsx)("svg",{id:"map-svg-layers-content",viewBox:(0,q.C6)(e),width:(0,d.$V)(t.width),height:(0,d.$V)(t.height),children:(0,r.jsx)("use",{href:"#map1"})})}function tn(t){return(0,r.jsxs)("svg",{id:"map-svg-defs",viewBox:"0 0 1 1",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("g",{id:"map1",className:"map",children:[(0,r.jsx)(s,{...t,m:t.data.mapCoord.matrix,mapLayers:t.render.getMapLayers()}),(0,r.jsx)("style",{children:t.render.mapSvgStyle})]})}),(0,r.jsx)("style",{children:`
.map-layers,
.map-objects,
.map-symbols,
path {
  contain: content;
}
`})]})}var tr=n(9306);function ti(t){return(0,O._U)(R,(0,r.jsx)(to,{...t})),(0,r.jsx)("div",{id:R,className:"content svg"})}function to(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ts,{}),(0,r.jsx)(tl,{...t}),(0,r.jsx)("style",{children:ta})]})}let ta=`
#map-svg-markers-svg,
#map-svg-markers1 {
  contain: content;
  pointer-events: none;
}
#map-svg-markers-defs {
  display: none;
}
`;function ts(){let{scroll:t,svg:e}=(0,C.gK)();return(0,r.jsx)("svg",{id:"map-svg-markers-content",viewBox:(0,q.C6)(e),width:(0,d.$V)(t.width),height:(0,d.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-markers1"})})}function tl(t){let{fontSize:e}=(0,C.mG)(),n=(0,C.tX)();return(0,r.jsxs)("svg",{id:"map-svg-markers-defs",children:[(0,r.jsx)(g,{...t,m:t.data.mapCoord.matrix,mapMarkers:t.render.getMapMarkers(),fontSize:e,s:n}),(0,r.jsxs)("g",{id:"map-svg-markers1",children:[(0,r.jsx)(tu,{...t}),(0,r.jsx)("style",{children:(0,r.jsx)(tr.Q,{})}),(0,r.jsx)("use",{href:"#position"})]})]})}function tu(t){let{pointNames:e}=(0,D.Ev)(),n=t.data.mapCoord.matrix;return(0,r.jsx)("g",{children:e.map(t=>({...t,pos:n.transformPoint(t.pos)})).map(({pos:t},e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(tc,{pos:t})},e))})}function tc(t){let{pos:e}=t;return(0,r.jsx)("use",{href:"#point-name-marker",style:{transform:`translate(${(0,d.$V)(e.x)}px, ${(0,d.$V)(e.y)}px)`}})}function tf(t){return(0,O._U)(k,(0,r.jsx)(td,{...t})),(0,r.jsx)("div",{id:k,className:"content svg"})}function td(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(th,{}),(0,r.jsx)(tm,{...t}),(0,r.jsx)("style",{children:tp})]})}let tp=`
#map-svg-svg,
#map1 {
  contain: content;
  pointer-events: none;
}
#map-svg-defs {
  display: none;
}
`;function th(){let{scroll:t,svg:e}=(0,C.gK)();return(0,r.jsx)("svg",{id:"map-svg-objects-content",viewBox:(0,q.C6)(e),width:(0,d.$V)(t.width),height:(0,d.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-objects1"})})}function tm(t){return(0,r.jsxs)("svg",{id:"map-svg-objects-defs",viewBox:"0 0 1 1",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("g",{id:"map-svg-objects1",children:(0,r.jsx)(S,{...t,m:t.data.mapCoord.matrix,mapObjects:t.render.getMapObjects()})})}),(0,r.jsx)("style",{children:`
.map-layers,
.map-objects,
.map-symbols,
path {
  contain: content;
}
`})]})}var tg=n(6770);function ty(t){return(0,O._U)(N,(0,r.jsx)(tv,{...t})),(0,r.jsx)("div",{id:N,className:"content svg"})}function tv(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tb,{}),(0,r.jsx)(tw,{...t}),(0,r.jsx)("style",{children:tx})]})}let tx=`
#map-svg-symbols-svg,
#map-svg-symbols1 {
  contain: content;
  pointer-events: none;
}
#map-svg-symbols-defs {
  display: none;
}
`;function tb(){let{scroll:t,svg:e}=(0,C.gK)();return(0,r.jsx)("svg",{id:"map-svg-symbols-content",viewBox:(0,q.C6)(e),width:(0,d.$V)(t.width),height:(0,d.$V)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-symbols1"})})}function tw(t){return(0,r.jsx)("svg",{id:"map-svg-symbols-defs",children:(0,r.jsxs)("g",{id:"map-svg-symbols1",children:[(0,r.jsx)("defs",{children:(0,r.jsx)(tg.n5,{})}),(0,r.jsx)(M,{...t,m:t.data.mapCoord.matrix,mapSymbols:t.render.getMapSymbols()}),(0,r.jsx)("style",{children:(0,r.jsx)(tr.Q,{})})]})})}var tj=n(7640);let tS=`
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
`,t_="m -0.7,0 v -0.4 m 1.4,0.4 v -0.4 m 0.3,0 h -2",tM="m 0,1 h -1 v -2 h 2 v 2 h -1 v -2 m -0.5,1 m -0.2,-0.2 l 0.2,0.2 l -0.2,0.2 m 0.2,-0.2 h -1",tE="m 0,0 v -1.4 h -0.7 m 0,0.6 h 0.7 m 0,-0.3 h 0.7",tO="m -0.4,0 v -0.7 m 0.8,0.7 v -0.7 m 0.1,0 h -1 v -0.7 h 1 z",t$="m -0.5 0 v -0.3 h 1 v 0.3 m -0.75 -0.3 v -1.2 h 0.5 v 1.2",tk="m -0.5 0 v -0.3 h 1 v 0.3 m -0.5 -0.3 s -0.4 -0.75 0 -0.75 h 0 a 0.125 0.125 0 0 1 0 -0.25 a 0.125 0.125 0 0 1 0 0.25 s 0.4 0 0 0.75",tN="m -0.9 0 v -2 m 1.8 2 v -2 m -2.3 0 h 2.8 m -2.6 0.4 h 2.4",tR="m 0,0 0,-4 m 0,2 c 3,0 2,-6 0,-6 c -2,0 -3,6 0,6 z",tI="m -0.5,0 v -1.8 h 1 v 1.8 z m 0.1,-0.9 v -0.7 h 0.8 v 0.7 z m 0.6,0.2 h 0.2 m -0.7,0.5 v -0.2 h 0.6 v 0.2 z",tA="m -0.5,-1 l 0.15,1 h 0.7 l 0.15,-1";Object.entries({bench:t_,entrance:tM,guide_post:tE,info_board:tO,monument:t$,statue:tk,torii:tN,tree:tR,vending_machine:tI,waste_basket:tA});var tC=n(9975);function tT(t){let e=new Map([...Object.keys(t.properties).filter(t=>"other_tags"!==t&&!t.match(/^centroid|^area$/)).filter(e=>e in t.properties&&t.properties instanceof Object&&null!==t.properties[e]).map(e=>[e,String(t.properties[e])]),...t.properties.other_tags?.split(/","/g).map(t=>t.split(/"=>"/).map(t=>t.replace(/"/,"")))??[]]);return(0,r.jsx)("table",{className:"properties",style:{display:"block",fontSize:"x-small",borderSpacing:0,margin:"1em 0.5em",maxWidth:"calc(50vmin - 2em)",overflowX:"scroll",overscrollBehaviorX:"none",touchAction:"pan-x pan-y"},children:(0,r.jsx)("tbody",{style:{border:0},children:(0,r.jsx)(tD,{tags:e})})})}function tD(t){return(0,r.jsx)(r.Fragment,{children:Array.from(t.tags.entries()).map(([t,e],n)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)("tr",{style:{margin:0,boxSizing:"border-box"},children:(0,r.jsxs)("td",{style:{border:"0.5px darkgray solid",margin:0,padding:"0.25em",boxSizing:"border-box",scrollbarWidth:"none",width:"calc(50vmin - 2em)"},children:[(0,r.jsxs)("span",{style:{color:"gray"},children:[t," "]}),(0,r.jsx)("span",{style:{},children:e})]})})},n))})}let tL={getMapLayers:()=>[{type:"multipolygon",name:"island",filter:t=>!!t.natural?.match(/^coastline$/)},{type:"multipolygon",name:"area",data:(tj.b9.cartoConfig?.internals??tj.b9.mapData.internals).features.map(t=>t.geometry.coordinates)},{type:"line",name:"cliff",filter:t=>!!t.other_tags?.match(/"natural"=>"(cliff)"/)},{type:"multipolygon",name:"rock",filter:t=>!!t.natural?.match(/rock|bare_rock/)},{type:"multipolygon",name:"grass",filter:t=>!!t.landuse?.match(/grass/)},{type:"multipolygon",name:"forest",filter:t=>!!t.landuse?.match(/forest/)||!!t.natural?.match(/wood/)},{type:"multipolygon",name:"garden",filter:t=>!!t.leisure?.match(/garden/)},{type:"multipolygon",name:"farmland",filter:t=>!!t.landuse?.match(/farmland/)},{type:"multipolygon",name:"water",filter:t=>!!t.natural?.match(/^water$/)},{type:"line",name:"ditch",filter:t=>!!t.waterway?.match(/^(ditch)$/)},{type:"line",name:"drain",filter:t=>!!t.waterway?.match(/^(drain)$/)},{type:"line",name:"stream",filter:t=>!!t.waterway?.match(/^(stream)$/)},{type:"line",name:"river",filter:t=>!!t.waterway?.match(/^(river)$/)},{type:"multipolygon",name:"wetland",filter:t=>!!t.natural?.match(/wetland/)},{type:"multipolygon",name:"playground",filter:t=>!!t.tourism?.match(/zoo/)||!!t.leisure?.match(/ice_rink|pitch|playground/)||!!t.landuse?.match(/recreation_ground/)},{type:"multipolygon",name:"grave_yard",filter:t=>!!t.amenity?.match(/grave_yard/)},{type:"multipolygon",name:"parking",filter:t=>!!t.amenity?.match(/(parking|bicycle_parking)/)},{type:"multipolygon",name:"building",filter:t=>!!t.building?.match(/./)&&!t.building?.match(/roof/)},{type:"line",name:"path",width:1,filter:t=>!!t.highway?.match(/^(path|track)$/)},{type:"line",name:"footway",width:1,filter:t=>!!t.highway?.match(/^(footway|steps)$/)},{type:"line",name:"steps",width:1,filter:t=>!!t.highway?.match(/^(steps)$/)},{type:"line",name:"cycleway",width:3,filter:t=>!!t.highway?.match(/^(cycleway)$/)},{type:"line",name:"service",width:4,filter:t=>!!t.highway?.match(/^(service)$/)},{type:"line",name:"pedestrian",width:8,filter:t=>!!t.highway?.match(/^(pedestrian)$/)},{type:"line",name:"road",width:6,filter:t=>!!t.highway?.match(/./)&&!t.highway?.match(/^(footway|path|pedestrian|steps|cycleway|track|service)$/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.other_tags?.match(/("highway"=>"service"|"area:highway"=>"service")/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.man_made?.match(/bridge/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.other_tags?.match(/"pedestrian"/)},{type:"line",name:"escalator background",filter:t=>!!t.highway?.match(/^(steps)$/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{type:"line",name:"escalator foreground",filter:t=>!!t.highway?.match(/^(steps)$/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{type:"line",name:"wall",filter:t=>!!t.barrier?.match(/^(wall)$/)},{type:"line",name:"fence",filter:t=>!!t.barrier?.match(/^(fence)$/)},{type:"line",name:"retaining-wall",filter:t=>!!t.barrier?.match(/^(retaining_wall)$/)},{type:"line",name:"bridge shadow",widthScale:1.8,filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"bridge edge",widthScale:1.4,filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"bridge road",filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"tunnel shadow",widthScale:1.8,filter:t=>!!t.highway?.match(/./)&&!!t.other_tags?.match(/"tunnel"/)},{type:"multipolygon",name:"roof",filter:t=>!!t.building?.match(/./)&&!!t.building?.match(/roof/)}],getMapObjects:()=>[{name:"benches",path:t_,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"bench"/)},{name:"entrances",path:tM,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"entrance"/)},{name:"guide-posts",path:tE,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"guidepost"/)},{name:"info-boards",path:tO,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"information"=>"(board|map)"/)},{name:"trees1",path:tR,width:.15,pointsFilter:t=>!!t.other_tags?.match(/"tree"/)},{name:"torii",path:tN,width:.05,pointsFilter:t=>!!t.man_made?.match(/^torii$/)||!!t.other_tags?.match(/"amenity"=>"place_of_worship"/)&&!!t.other_tags?.match(/"religion"=>"shinto"/)},{name:"monument",path:t$,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"historic"=>"(monument|memorial|tomb)"/)},{name:"statue",path:tk,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"artwork_type"=>"statue"/)},{name:"vending-machine",path:tI,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"vending_machine"/)},{name:"waste-basket",path:tA,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"waste_basket"/)}],getMapSymbols:()=>[{name:"toilets",href:"#XToilets",pointsFilter:t=>!!t.other_tags?.match(/"toilets"/),polygonsFilter:t=>"toilets"===t.building||"toilets"===t.amenity||!!t.other_tags?.match(/"toilets"/)},{name:"parkings",href:"#XParking",pointsFilter:t=>!!t.other_tags?.match(/"parking"/),polygonsFilter:t=>"parking"===t.amenity||!!t.other_tags?.match(/"parking"/)},{name:"drinking-fountains",href:"#XDrinkingFountain",pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"drinking_water"/)},{name:"elevators",href:"#XElevator",pointsFilter:t=>!!t.highway?.match(/elevator/)},{name:"escalators",href:"#XEscalator",linesFilter:t=>!!t.highway?.match(/steps/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{name:"buses",href:"#XBus",pointsFilter:t=>!!t.other_tags?.match(/"bus"=>"yes"/)},{name:"informations",href:"#XInformation",pointsFilter:t=>!!t.other_tags?.match(/"tourism"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/),polygonsFilter:t=>!!t.other_tags?.match(/"tourist"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/)}],getMapMarkers:()=>[{name:"all"}],mapSvgStyle:tS,renderMap:function(t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(G,{...t}),(0,r.jsx)(tf,{...t}),(0,r.jsx)(ty,{...t}),(0,r.jsx)(ti,{...t}),(0,r.jsx)(W,{...t}),(0,r.jsx)(L,{...t})]})},isMapRendered:function(){return(0,O.O4)($)}},tz={searchEntries:[{filter:t=>!!t?.other_tags?.match(/"toilets"/),getInfo:(t,e)=>({title:"toilets",x:{tag:"facility",title:"toilets",address:e,properties:t}})},{filter:t=>!!t?.other_tags?.match(/"bus_stop"/),getInfo:(t,e)=>({title:"bus_stop",x:{tag:"facility",title:"bus_stop",address:e,properties:t}})},{filter:t=>"highway"in t&&!!t.highway?.match(/elevator/)&&!t.other_tags?.match(/"level"=>"[1-9][^"]*"/),getInfo:(t,e)=>({title:"elevator",x:{tag:"facility",title:"elevator",address:e,properties:t}})},{filter:t=>"highway"in t&&!!t.highway?.match(/steps/)&&!!t.other_tags?.match(/"conveying"=>"yes"/),getInfo:(t,e)=>({title:"elevator",x:{tag:"facility",title:"escalator",address:e,properties:t}})},{filter:t=>!!t?.other_tags?.match(/"amenity"=>"drinking_water"/),getInfo:(t,e)=>({title:"water",x:{tag:"facility",title:"water",address:e,properties:t}})},{filter:t=>!!t.other_tags?.match(/"tourism"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/),getInfo:(t,e)=>({title:"information",x:{tag:"facility",title:"information",address:e,properties:t}})},{filter:t=>!!t.name?.match(/./),getInfo:(t,e)=>({title:"shop",x:{tag:"shop",address:e,properties:t}})}],getMapNames:function(t){var e,n;let r=t.carto?.skipNamePattern,i=t.carto?.splitNamePattern;return[...(e=t.data.mapData,e.points.features.flatMap(({properties:t})=>{let e=(0,o.bh)(t);if(null===t.centroid_x||null===t.centroid_y)return[];let n=[t.centroid_x,t.centroid_y],a=(0,p.t6)(n),s=w(t,r,i);return 0===s.length?[]:[{id:null===e?null:e,name:s,pos:a,size:0,area:void 0}]})),...(n=t.data.mapData,n.multipolygons.features.flatMap(({properties:t})=>{let e=(0,o.bh)(t);if(null===t.centroid_x||null===t.centroid_y)return[];let n=[t.centroid_x,t.centroid_y],a=(0,p.t6)(n),s=function t(e){return e===t||null===e?void 0:e}(t?.area),l=w(t,r,i);return 0===l.length?[]:[{id:null===e?null:e,name:l,pos:a,size:0,area:s}]}))]},getAddressEntries:o.Bn,getAddressInfo:o.t6,renderInfo:function(t){var e,n;let i,a,s,l,u,c=tj.b9.mapMap,f=Number(t.info.x.address),d="address"in t.info.x?(0,o.Ly)(f,c):null;return null===d?(0,r.jsxs)("p",{children:["XXX info not found (osm_id=",t.info.x.address,") XXX"]}):"shop"===t.info.x.tag?(e={x:t.info.x,properties:d},i=(0,o.De)(e.properties,"website"),a=Number(e.properties.osm_id??""),s=Number(("osm_way_id"in e.properties&&e.properties.osm_way_id)??""),l=0!==a?a:0!==s?s:0,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:[e.properties.name??e.x.name," ",0!==l&&(0,r.jsx)(tj.OV,{_id:l})]}),(0,r.jsxs)("p",{children:[null!==i&&(0,r.jsx)("a",{target:"_blank",href:i,children:"\uD83C\uDF10"}),0!==a&&(0,r.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/node/${a}`,children:"\uD83D\uDDFA️"}),0!==s&&(0,r.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/way/${s}`,children:"\uD83D\uDDFA️"})]}),(0,r.jsx)(tT,{properties:e.properties})]})):(u=void 0!==(n={x:t.info.x,properties:d}).x.title&&tC.Ci.get(n.x.title),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1em"},children:(0,r.jsx)("svg",{style:{display:"block"},viewBox:"-36 -36 72 72",width:"3em",height:"3em",children:u&&(0,r.jsx)("use",{href:u})})}),(0,r.jsx)("p",{children:n.x.properties.name}),(0,r.jsx)(tT,{properties:n.properties})]}))}}},9306(t,e,n){n.d(e,{Q:()=>d,y:()=>c});var r=n(2742),i=n(8822),o=n(6230),a=n(555),s=n(4207),l=n(9538),u=n(9815);function c(){let t=document.getElementById("style-root");if(null===t)throw Error("#style-root not found!");(0,o.createRoot)(t).render((0,r.jsx)(i.StrictMode,{children:(0,r.jsx)(f,{})}))}function f(){let t=(0,u.Jc)();(0,i.useEffect)(()=>{requestAnimationFrame(a.FK)},[t]);let e=(0,u.xE)(),n=(0,u.fQ)()?`
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
`:"",o=(0,u.nQ)(),c=`
.content {
  width: ${(0,l.$V)(o.width)}px;
  height: ${(0,l.$V)(o.height)}px;
}
`;return(0,r.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,c]})}function d(){let t=(0,u.mG)(),e=(0,u.tX)(),n=(0,u.f4)(),i=t.fontSize*(.5+.5*Math.log2(Math.max(1,n)))*e,o=`
use,
.map-symbols,
.map-markers {
  --map-symbol-size: ${i/72};
}
`;return(0,r.jsx)(r.Fragment,{children:o})}},8874(t,e,n){n.d(e,{b:()=>o,M:()=>a});var r=n(8822);let i={type:"",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let o={root:"root",href:"map.svg",width:0,height:0,fontSize:16,origViewBox:{x:0,y:0,width:0,height:0},title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,getMapLayers:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],getMapNames:()=>[],getAddressEntries:()=>[],getAddressInfo:()=>null,searchEntries:[],renderInfo:function(t){return(0,r.createElement)("p",{},t.info.title)},mapSvgStyle:"",renderMap:function(){return(0,r.createElement)("div")},isMapRendered:()=>!0,mapData:{areas:i,internals:i,origin:i,measures:i,viewbox:i,points:i,lines:i,multilinestrings:i,multipolygons:i},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly}};function a(t){o={...o,...t}}},555(t,e,n){n.d(e,{AI:()=>W,Aq:()=>z,Dl:()=>i,F0:()=>S,FK:()=>q,JK:()=>E,K0:()=>H,K3:()=>B,Lc:()=>l,Lg:()=>b,Mf:()=>s,NI:()=>D,NX:()=>u,Nd:()=>v,Oe:()=>C,P9:()=>c,QN:()=>Z,Qc:()=>F,Qd:()=>O,S0:()=>I,SN:()=>M,Ud:()=>j,Wu:()=>d,XX:()=>y,YA:()=>U,ZJ:()=>r,an:()=>K,cL:()=>_,dK:()=>o,eI:()=>A,eT:()=>J,gO:()=>Y,jb:()=>V,lC:()=>f,lu:()=>w,mk:()=>x,mr:()=>L,qk:()=>P,r7:()=>p,rD:()=>h,sw:()=>k,t$:()=>X,ul:()=>g,wb:()=>a,yU:()=>$,zb:()=>T});let r=new Set,i=new Set,o=new Set,a=new Set,s=new Set,l=new Set,u=new Set,c=new Set,f=new Set,d=new Set,p=new Set,h=new Set,m=new Set,g=new Set,y=new Set,v=new Set,x=new Set,b=new Set,w=new Set,j=new Set,S=new Set,_=new Set,M=new Set,E=new Set,O=new Set,$=new Set,k=new Set;function N(t){t.forEach(t=>t())}function R(t,e){t.forEach(t=>t(e))}function I(t){R(r,t)}function A(t){R(i,t)}function C(t){R(o,t)}function T(t){R(a,t)}function D(t){R(s,t)}function L(t){R(l,t)}function z(t){R(u,t)}function F(){N(c)}function U(){N(f)}function q(){N(g)}function P(t){R(y,t)}function W(t){R(v,t)}function H(t){R(x,t)}function Z(t){R(b,t)}function K(t){R(w,t)}function X(t){R(j,t)}function V(t){R(d,t)}function B(t){R(p,t)}function Y(t){R(h,t)}function J(){N(m)}},7640(t,e,n){let r;n.d(e,{pb:()=>ny,OV:()=>x,b9:()=>d.b});var i,o,a,s,l,u,c,f,d=n(8874),p=n(555),h=n(2742),m=n(7879),g=n(2674);let y={context:{ids:new Set}},v=(0,m.a)({context:(void 0===(r=function(t){if(!t)return;let e=JSON.parse(t);if("context"in e&&"ids"in e.context)return{...e,context:{...e.context,ids:new Set(e.context.ids)}}}(localStorage.getItem("svgmapviewer:likes")))?y:r).context,on:{like:(t,e)=>({...t,ids:new Set(Array.from(t.ids.add(e.id)))}),unlike:(t,e)=>(t.ids.delete(e.id),{...t,ids:new Set(Array.from(t.ids))})}});function x(t){let{_id:e}=t;return(0,g.d4)(v,t=>t.context.ids).has(e)?(0,h.jsx)("span",{className:"like liked",onClick:()=>v.trigger.unlike({id:e}),children:"★"}):(0,h.jsx)("span",{className:"like not-liked",onClick:()=>v.trigger.like({id:e}),children:"☆"})}v.subscribe(function(t){localStorage.setItem("svgmapviewer:likes",JSON.stringify({...t,context:{...t.context,ids:Array.from(t.context.ids.keys())}}))});let b=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var w=n(9568),j=n(8822),S=n(1433),_=n(9886),M=n(3088),E=n(4207);let O=(0,S.mj)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null},initial:"Idle",states:{Idle:{on:{SELECT:[{guard:({event:t})=>t.force??!1,actions:(0,_.a)({fidx:({event:t})=>t.fidx})},{guard:({context:t,event:e})=>t.fidx!==e.fidx,actions:(0,_.a)({fidx:({event:t})=>t.fidx,prevFidx:({context:t})=>t.fidx}),target:"Animating"}]}},Animating:{on:{DONE:{actions:(0,_.a)({prevFidx:null}),target:"Idle"}}}}}),$=(0,M.c)(O);function k(){let{fidx:t,prevFidx:e}=(0,w.d4)($,t=>t.context),n=function(t,e){let n=d.b.floorsConfig;if(void 0===n)return null;let r=n.floors.map((n,r)=>r===t||r===e?"":`
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
`}(t,e),r=(0,j.useCallback)(e=>e===t?()=>(0,p.gO)(e):void 0,[t]),i=(0,j.useCallback)(n=>null!==e||n===t?void 0:()=>(0,p.jb)(n),[t,e]);return{fidx:t,prevFidx:e,style:n,fidxToOnAnimationEnd:r,fidxToOnClick:i}}$.start(),p.r7.add(function(t){$.send({type:"SELECT",fidx:t})}),p.rD.add(function(t){$.send({type:"DONE",fidx:t})});var N=n(4468),R=n(4630),I=n(3952);let A=(0,S.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Idle",states:{Idle:{on:{SEARCH:{actions:(0,I.a)(({event:t})=>t),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,I.a)(({event:t})=>t),target:"Done"},"SEARCH.CANCEL":{actions:(0,I.a)(({event:t})=>t),target:"Done"}}},Done:{always:"Idle"}}}),C=(0,M.c)(A);C.on("SEARCH",({psvg:t})=>(0,p.eI)(t)),C.on("SEARCH.DONE",t=>(0,p.zb)(t)),C.on("SEARCH.CANCEL",()=>(0,p.zb)(null)),C.start(),p.ZJ.add(function(t){C.send({type:"SEARCH",psvg:t})}),p.dK.add(function(t){C.send(null===t?{type:"SEARCH.CANCEL"}:{type:"SEARCH.DONE",...t})});var T=n(1943),D=n(6770),L=n(2852),z=n(1851);function F(t){return t>.5?-1:+(t<.5)}function U(t){return t<.3?1:t>.7?-1:0}function q(t,e,n,r){let i=e/2,o=n/2,a=e/20,s=a/2,l=(0,z.Lp)(-i*t.h,-o*t.v),u=0===t.h||0===t.v?(0,z.Lp)(-(i+r)*t.h,-(o+r)*t.v):(0,z.Lp)(-(i+r*Math.cos(t.th))*t.h,-(o+r*Math.sin(t.th))*t.v),[c,f]=0===t.h?[(0,z.Lp)(-s,0),(0,z.Lp)(s,0)]:0===t.v?[(0,z.Lp)(0,-s),(0,z.Lp)(0,s)]:t.th<Math.PI/4?[(0,z.Lp)(0,0),(0,z.Lp)(0,a*t.v)]:[(0,z.Lp)(0,0),(0,z.Lp)(a*t.h,0)],d=(0,z.CO)(l,c),p=(0,z.CO)(l,f);return{p:l,q:u,a:d,b:p}}function P(t){return{open:t,animating:!1}}function W(t){return t.open||t.animating?null:{open:!0,animating:!0}}function H(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function Z(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function K(t){return t.open||!t.animating?null:{open:!1,animating:!1}}var X=n(7807);let V={p:z.P,psvg:z.P,layout:X.TL,info:{title:""}};function B(t){return function(e,n){let r=e[n],i=t(r);return e[n]=null===i?r:i,e}}function Y(t,e){return function({open:t,animating:e}){return t||e}(t[e])}let J=(0,S.mj)({types:{},guards:{isHeaderVisible:({context:{m:t}})=>Y(t,"header"),isDetailVisible:({context:{m:t}})=>Y(t,"detail"),animationEnded:({context:{animationEnded:t}})=>t.header&&t.detail},actions:{startCancel:(0,_.a)({canceling:()=>!0}),endCancel:(0,_.a)({canceling:()=>!1}),open:(0,_.a)({m:({context:{m:t}},{part:e})=>B(W)(t,e)}),close:(0,_.a)({m:({context:{m:t}},{part:e})=>B(Z)(t,e)}),handle:(0,_.a)({m:({context:{m:t}},{part:e})=>B(t[e].open?H:K)(t,e)})}}).createMachine({type:"parallel",id:"ui",context:({input:t})=>({...t,all:{open:!1,animating:!1},canceling:!1,detail:V,m:{header:P(!0),detail:P(!1)},animationEnded:{header:!0,detail:!0}}),states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,_.a)({detail:({event:{psvg:t,info:e,layout:n}})=>({psvg:t,p:(0,X.ut)(n).transformPoint(t),info:e,layout:n})}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,M.n)("animationEnded")},{actions:(0,_.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,M.n)("isDetailVisible")},{actions:(0,_.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,M.n)("animationEnded")},{actions:(0,_.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,M.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,_.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,I.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,_.a)({animationEnded:({context:t})=>({...t.animationEnded,header:!0})}),(0,M.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,_.a)({animationEnded:({context:t})=>({...t.animationEnded,detail:!0})}),(0,M.r)({type:"DONE"})]}}}}});function G(){return(0,w.d4)(tt,t=>t.context.m.header)}function Q(){return(0,w.d4)(tt,t=>t.context.m.detail)}let tt=(0,M.c)(J);tt.on("CLOSE.DONE",p.YA),tt.start();function te(t){return(0,h.jsxs)("div",{className:"balloon",children:[(0,h.jsx)(tr,{...t}),t.children,(0,h.jsx)("style",{children:tn})]})}p.Mf.add(function(t){tt.send({type:"DETAIL",...t})}),p.NX.add(function(t){tt.send({type:t?"OPEN":"CANCEL"})}),p.P9.add(function(){tt.send({type:"CANCEL"})}),p.lC.add(function(){requestAnimationFrame(()=>(function(){let t=T.NC.get("detail");if(void 0===t)return;let e=t.querySelector(".detail");null!==e&&e.scroll(0,0)})())});let tn=`
.balloon,
.balloon-svg {
  ${E.oO}
  ${E.pU}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tr(t){let e=t._hv;if(null===e)return(0,h.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(t,e){let{bw:n,bh:r,ll:i,d:o,width:a,height:s}=e,l=(0,L.aP)(-a/2,-a/2,a,s),{body:u,leg:c}=function(t,e,n,r){let i=e/2,o=n/2,a=`
m${-i},${-o}
h${e}
v${n}
h${-e}
z
`,{p:s,q:l,a:u,b:c}=q(t,e,n,r),f=(0,z.R_)(l,u),d=(0,z.R_)(c,l),p=(0,z.R_)(s,c);return{body:a,leg:`
m${u.x},${u.y}
l${f.x},${f.y}
l${d.x},${d.y}
l${p.x},${p.y}
z
`}}(t,n,r,i);return{viewBox:l,width:a,height:s,bg:`M${o},${o}`+u+`M${o},${o}`+c,fg:"M0,0"+u+"M0,0"+c}}(e,t._size);return(0,h.jsxs)("svg",{className:"balloon-svg",viewBox:(0,L.C6)(n),width:r,height:i,children:[(0,h.jsx)("path",{className:"bg",d:a}),(0,h.jsx)("path",{className:"fg",d:o}),(0,h.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function ti({_p:t,_hv:e,_size:n,_leg:r}){let i=Q(),o=null!==t&&null!==e&&function({open:t,animating:e}){return t||e}(i)?function({open:t,animating:e},n,r,i,o){let{bw:a,bh:s,width:l,height:u}=i,c=(0,z.R_)(o.q,o.p),f=(0,z.Lp)((a/2+Math.abs(c.x))*r.h,(s/2+Math.abs(c.y))*r.v);if(e){let[e,r]=t?[0,1]:[1,0],[i,o]=t?[0,1]:[1,0],[a,s]=t?["0px","var(--dp-x)"]:["var(--dp-x)","0px"],[c,d]=t?["0px","var(--dp-y)"]:["var(--dp-y)","0px"],p=t?E.c5:E.F9;return`
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
  --pww: ${-l/2}px;
  --phh: ${-u/2}px;
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
  --pww: ${-l/2}px;
  --phh: ${-u/2}px;
}

.detail {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
}

.balloon {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
}
`}(i,t,e,n,r):".balloon, .detail { visibility: hidden; }";return(0,h.jsx)("style",{children:o})}var to=n(4997),ta=n(496),ts=n(8053);function tl(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}var tu=n(7917),tc=n(452);let tf=(0,S.mj)({types:{},actions:{getScroll:(0,_.a)({scroll:()=>(0,tu.KT)()}),syncScroll:(t,{pos:e})=>(0,tu.l9)(e)},actors:{syncScrollLogic:(0,tc.Sx)(async({input:t})=>{if(null===t)throw Error("input is null");if(!(0,tu.l9)(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:({event:t})=>({pos:t.pos})}]},GET:{actions:["getScroll",(0,I.a)(({context:{scroll:t}})=>({type:"SCROLL.GET.DONE",scroll:t}))]},SYNCSYNC:{actions:(0,_.a)({dest:({event:t})=>t.pos}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:({context:t})=>t.dest,onDone:{actions:["getScroll",(0,I.a)(({context:{scroll:t}})=>({type:"SCROLL.SYNCSYNC.DONE",scroll:t})),(0,_.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),td={slideDoneCbs:new Set,getDoneCbs:new Set,syncSyncDoneCbs:new Set},tp=(0,M.c)(tf,{systemId:"system-scroll1"});function th(t){tp.send(t)}tp.on("SCROLL.SLIDE.DONE",t=>td.slideDoneCbs.forEach(e=>e(t))),tp.on("SCROLL.GET.DONE",t=>td.getDoneCbs.forEach(e=>e(t))),tp.on("SCROLL.SYNCSYNC.DONE",t=>td.syncSyncDoneCbs.forEach(e=>e(t)));let tm="panning",tg=(0,S.mj)({types:{},guards:{shouldReset:(t,{ev:e})=>"r"===e.key,shouldRecenter:(t,{ev:e})=>"c"===e.key,shouldRotate:(t,{ev:e})=>"t"===e.key,shouldZoom:(t,{ev:e})=>0!==tl(e.key),isTouching:({context:{touching:t}})=>t,isHoming:({context:{homing:t}})=>t,isZoomWanted:({context:{want_animation:t}})=>"zoom"===t,isRotateWanted:({context:{want_animation:t}})=>"rotate"===t,isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>d.b.isMapRendered(),isUiRendered:()=>d.b.isUiRendered()},actions:{syncScroll:({context:{layout:t}})=>th({type:"SYNC",pos:t.scroll}),syncScrollSync:({context:{layout:t}})=>th({type:"SYNCSYNC",pos:t.scroll}),getScroll:()=>th({type:"GET"}),zoomKey:(0,_.a)({z:(t,{ev:e})=>tl(e.key)}),zoomHome:(0,_.a)({z:()=>null,zoom:()=>1,homing:()=>!0}),zoomEvent:(0,_.a)({z:(t,{z:e})=>e,cursor:({context:{cursor:t}},{p:e})=>null===e?t:e}),startZoom:(0,_.a)({animation:({context:{layout:t,cursor:e,z:n}})=>{var r,i,o;let a,s,l,u,c,f,p,h;return null===n?(r=(0,ts.SH)(t),a=(0,L.gX)(r.config.svg),s=(0,X.ut)(t).transformPoint(a),l=r.svgScale.s/t.svgScale.s,u=(0,L.gX)(t.container),c=new DOMMatrixReadOnly().translate(u.x,u.y).scale(1/l).translate(-s.x,-s.y),{move:null,zoom:{svg:r.svg,svgScale:r.svgScale,q:c,o:null},rotate:null}):(f=(0,X.ut)(t).inverse().transformPoint(e),p=1/(o=n,Math.pow(d.b.zoomFactor,o)),h=new DOMMatrixReadOnly().scale(1/p,1/p),{move:null,zoom:{svg:(0,ta.aE)(t.svg,p,f.x,f.y),svgScale:(i=t.svgScale,"x"in i?{x:i.x*p,y:i.y*p}:{s:i.s*p}),q:h,o:e},rotate:null})}}),startRotate:(0,_.a)({animation:({context:{layout:t,cursor:e}})=>({move:null,zoom:null,rotate:{deg:90,q:new DOMMatrixReadOnly().rotate(90),o:e}})}),updateZoom:(0,_.a)({prevLayout:({context:{layout:t}})=>t,layout:({context:{layout:t,animation:e}})=>null===e?t:(0,to.Fs)(t,t=>null===e.move?t:(0,ts.a4)(t,e.move.move),t=>null===e.zoom?t:(0,ts.c7)(t,e.zoom.svg,e.zoom.svgScale),t=>null===e.rotate?t:(0,ts.KS)(t,e.rotate.deg))}),endZoom:(0,_.a)({prevLayout:null,want_animation:null,animation:null,z:null,zoom:({context:{z:t,zoom:e}})=>null===t?e:e*Math.pow(2,t)}),endRotate:(0,_.a)({prevLayout:null,want_animation:null,animation:null}),wantZoom:(0,_.a)({want_animation:"zoom"}),wantRotate:(0,_.a)({want_animation:"rotate"}),syncAnimation:({context:{animation:t}})=>{let e=t?.move?.q??t?.zoom?.q??t?.rotate?.q??null,n=t?.move?.o??t?.zoom?.o??t?.rotate?.o??null;null!==e&&(0,p.an)({matrix:e,origin:n})},syncLayout:({context:{layout:t,rendered:e}})=>(0,p.AI)({layout:t,force:e}),resetCursor:(0,_.a)({cursor:({context:{layout:t}})=>(0,L.gX)(t.container)}),cursor:(0,_.a)({cursor:(t,{ev:e})=>(0,z.Lp)(e.pageX,e.pageY)}),setModeToPanning:(0,_.a)({mode:tm,cursor:({context:{layout:t}})=>(0,L.gX)(t.container)}),setModeToTouching:(0,_.a)({mode:"touching"}),setModeToLocked:(0,_.a)({mode:"locked"}),startTouching:(0,_.a)({touching:!0}),endTouching:(0,_.a)({touching:!1}),notifyTouching:(0,M.r)({type:"TOUCHING"}),notifyTouchingDone:(0,M.r)({type:"TOUCHING.DONE"}),startAnimating:(0,_.a)({animating:()=>!0}),stopAnimating:(0,_.a)({animating:()=>!1}),resizeLayout:(0,_.a)({rendered:!1,origLayout:(t,{layout:e})=>e,layout:(t,{layout:e})=>(0,ts.sC)(e,9)}),updateLayoutFromScroll:(0,_.a)({layout:({context:t})=>{let{scroll:e}=(0,tu.Vs)();return(0,ts.Qc)(t.layout,e)}}),notifyZoomStart:(0,I.a)(({context:{layout:t,zoom:e,z:n}})=>({type:"ZOOM.START",layout:t,zoom:e,z:null===n?0:n})),notifyZoomEnd:(0,I.a)(({context:{layout:t,zoom:e}})=>({type:"ZOOM.END",layout:t,zoom:e})),notifySearch:(0,I.a)(({context:t})=>{let{scroll:e}=(0,tu.Vs)(),n=(0,ts.Qc)(t.layout,e);return{type:"SEARCH",psvg:(0,X.ut)(n).inverse().transformPoint(t.cursor)}}),notifySearchDone:(0,M.r)({type:"SEARCH.DONE"}),notifySearchEndDone:(0,I.a)(({context:t},{res:e})=>{let{scroll:n}=(0,tu.Vs)(),r=(0,ts.Qc)(t.layout,n);return{type:"SEARCH.END.DONE",res:null===e?null:{psvg:e.psvg,info:e.info,layout:r}}}),endHoming:(0,_.a)({cursor:({context:t})=>(0,L.gX)(t.origLayout.container),layout:({context:t})=>(0,ts.KS)((0,ts.sC)(t.origLayout,9),(0,ts.aF)(t.layout)),homing:()=>!1}),notifyMode:(0,I.a)(({context:{mode:t}})=>({type:"MODE",mode:t})),notifyLock:(0,I.a)({type:"LOCK",ok:!0}),setRendered:(0,_.a)({rendered:!0}),notifySwitch:(0,I.a)((t,{fidx:e})=>({type:"SWITCH",fidx:e})),notifySwitchDone:(0,I.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"Resizing",context:{origLayout:ts.O4,layout:ts.O4,prevLayout:null,cursor:(0,L.gX)(ts.O4.container),z:null,zoom:1,homing:!1,want_animation:null,animation:null,mode:tm,touching:!1,animating:!1,rendered:!1},on:{"TOUCH.LOCK":{actions:["startTouching","notifyTouching","setModeToTouching","notifyMode"]},"TOUCH.UNLOCK":{actions:["endTouching","notifyTouchingDone","setModeToPanning","notifyMode"]},"SEARCH.LOCK":{actions:["notifyLock","setModeToLocked","notifyMode"]},"SEARCH.UNLOCK":{actions:["setModeToPanning","notifyMode","notifySearchDone"]}},states:{Resizing:{initial:"WaitingForResizeRequest",onDone:"Appearing",states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:({event:t})=>t},target:"WaitingForMapRendered"}}},WaitingForWindowStabilized:{id:"Resizing-WaitingForWindowStabilized",after:{500:{target:"WaitingForMapRendered"}}},WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,M.d)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"syncLayout",on:{RENDERED:{actions:["setRendered","syncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"syncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Done"}}},Done:{type:"final"}}},Appearing:{on:{"ANIMATION.END":{target:"Panning"}}},Panning:{on:{RESIZE:{actions:[{type:"resizeLayout",params:({event:t})=>t}],target:"#Resizing-WaitingForWindowStabilized"},"LAYOUT.RESET":{actions:["zoomHome","wantZoom"],target:"Zooming"},"KEY.UP":[{guard:{type:"shouldZoom",params:({event:t})=>({ev:t.ev})},actions:[{type:"zoomKey",params:({event:t})=>({ev:t.ev})},"wantZoom"],target:"Zooming"},{guard:{type:"shouldRotate",params:({event:t})=>({ev:t.ev})},actions:"wantRotate",target:"Zooming"}],CLICK:{guard:()=>d.b.searchEntries.length>0,actions:[{type:"cursor",params:({event:t})=>({ev:t.ev})}],target:"Searching"},SWITCH:{actions:{type:"notifySwitch",params:({event:t})=>t},target:"Switching"},CONTEXTMENU:{target:"Recentering"},ROTATE:{actions:"wantRotate",target:"Zooming"},RECENTER:{target:"Recentering"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:({event:{z:t,p:e}})=>({z:t,p:e})},"wantZoom"],target:"Zooming"},TOUCHING:{target:"Touching"}}},Touching:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Waiting"}}},Waiting:{on:{"TOUCHING.DONE":{target:"Done"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:({event:{z:t,p:e}})=>({z:t,p:e})},"wantZoom"],target:"#Zooming"}}},Done:{type:"final"}}},Searching:{initial:"Starting",onDone:"Panning",states:{Starting:{always:{actions:"notifySearch",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"notifySearchEndDone",params:({event:t})=>t},target:"WaitingForSearchUnlock"}}},WaitingForSearchUnlock:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Panning",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"notifySwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","syncLayout","syncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:[{guard:"isZoomWanted",actions:["updateLayoutFromScroll","startZoom","updateZoom","notifyZoomStart"],target:"Animating"},{guard:"isRotateWanted",actions:["updateLayoutFromScroll","startRotate","updateZoom","notifyZoomStart"],target:"Animating"}]},Animating:{initial:"Starting",onDone:"Done",states:{Starting:{always:{actions:["startAnimating","syncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":[{guard:"isZoomWanted",actions:["endZoom","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"},{guard:"isRotateWanted",actions:["endRotate","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"}]}},Homing:{always:[{guard:"isHoming",actions:["endHoming","syncLayout","syncScroll"],target:"Done"},{target:"Done"}]},Done:{type:"final"}}},Done:{type:"final"}}}}});function ty(t){tv.send(t)}let tv=(0,M.c)(tg,{systemId:"system-viewer1"});function tx(){tv.send({type:"SEARCH.UNLOCK"})}tv.on("SEARCH",({psvg:t})=>(0,p.S0)(t)),tv.on("SEARCH.END.DONE",({res:t})=>{null===t?tx():((0,p.NI)(t),(0,p.mr)(t.psvg))}),tv.on("LOCK",({ok:t})=>(0,p.Aq)(t)),tv.on("ZOOM.START",t=>(0,p.K0)(t)),tv.on("ZOOM.END",t=>(0,p.QN)(t)),tv.on("LAYOUT",({layout:t})=>(0,p.QN)({layout:t,zoom:1})),tv.on("MODE",({mode:t})=>(0,p.t$)(t)),tv.on("SWITCH",({fidx:t})=>(0,p.K3)(t)),tv.on("SWITCH.DONE",()=>(0,p.eT)()),tv.start(),p.Wu.add(function(t){ty({type:"SWITCH",fidx:t})}),p.rD.add(function(){ty({type:"SWITCH.DONE"})}),p.wb.add(function(t){tv.send({type:"SEARCH.END",res:t})}),p.Lc.add(function(t){tv.send({type:"SEARCH.LOCK",psvg:t})}),p.lC.add(tx),p.XX.add(function({layout:t,force:e}){ty({type:"RESIZE",layout:t,force:e})}),td.getDoneCbs.add(function(t){null!==t.scroll&&ty({type:"SCROLL.GET.DONE",scroll:t.scroll})}),td.syncSyncDoneCbs.add(function(t){null!==t.scroll&&ty({type:"SCROLL.SYNCSYNC.DONE",scroll:t.scroll})});let tb=!1,tw=!1;function tj(t,e){e?.preventDefault,e?.stopPropagation===!1||t.ev.stopPropagation(),ty(t)}function tS(){let t=(0,j.useRef)(null);return(0,j.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",t_),()=>{e.removeEventListener("wheel",t_)}},[t]),t}function t_(t){let e=t.currentTarget;tw&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function tM(t){let e,{_detail:n}=t,r=tS();return(0,h.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void tt.send(t)},children:[d.b.renderInfo&&(1!==(e=Object.values(n.info)).length||"string"!=typeof e[0]||""!==e[0])&&d.b.renderInfo({info:n.info}),(0,h.jsx)("style",{children:tE})]})}p.Ud.add(function(t){tb="locked"===t,tw="locked"===t}),p.mk.add(function(){tw=!0}),p.Lg.add(function(){tw=!1}),p.SN.add(function(){ty({type:"LAYOUT.RESET"})}),p.JK.add(function(){ty({type:"RECENTER"})}),p.Qd.add(function(){ty({type:"ROTATE"})}),p.cL.add(function(){ty({type:"ZOOM.ZOOM",z:-1,p:null})}),p.F0.add(function(){ty({type:"ZOOM.ZOOM",z:1,p:null})}),p.ul.add(function(){ty({type:"RENDERED"})});let tE=`
.detail {
  ${E.oO}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${E.HX}
  ${E.Sp}
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
  ${E.ex}
  margin: 1.5em;
  text-align: center;
}

p {
  ${E.ex}
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
`;function tO(){return(0,T._U)("detail",(0,h.jsx)(t$,{}),"ui"),(0,h.jsx)("div",{id:"detail"})}function t$(){return(0,h.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,h.jsx)(tk,{}),(0,h.jsx)(tN,{})]})}function tk(){let t,e,n,r,i,o,a,s,l,u,c,f,d=(0,w.d4)(tt,t=>t.context.detail),p=(o=d.p,a=d.layout,s=function(t,{x:e,y:n}){let r=t.width/t.height,i=(0,z.Lp)(e/t.width,n/t.height),o=r>1?F(i.x):U(i.x);return{h:o,v:r>1?U(i.y):F(i.y),th:Math.atan2(t.height,t.width)}}(d.layout.container,o),l=a.container.width,e=50*(t=.01*Math.min(l,u=a.container.height)),n=50*t,r=10*t,i=e/100,f=q(s,(c={bw:e,bh:n,ll:r,d:i,width:e+2*r+2*i,height:n+2*r+2*i}).bw,c.bh,c.ll),{_p:o,_hv:s,_W:l,_H:u,_size:c,_leg:f});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(te,{...p}),(0,h.jsx)(tM,{_detail:d}),(0,h.jsx)(ti,{...p})]})}function tN(){return(0,h.jsx)("svg",{id:"ui-svg-defs",children:(0,h.jsx)("defs",{children:(0,h.jsx)(D.n5,{})})})}function tR(){return(0,T._U)("footer",(0,h.jsx)(tI,{}),"ui"),(0,h.jsx)("div",{id:"footer"})}function tI(){let t=d.b;return(0,h.jsxs)("div",{className:"ui-content footer",children:[(0,h.jsx)("p",{children:t.copyright}),(0,h.jsxs)("style",{children:[tA,(0,h.jsx)(tC,{})]})]})}let tA=`
.footer {
  ${E.Kr}
  ${E.pC}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${E.ex}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function tC(){let{open:t,animating:e}=G();if(e){let[e,n]=t?[0,1]:[1,0],r=t?E.c5:E.F9;return(0,h.jsx)(h.Fragment,{children:`
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
`})}var tT=n(9815),tD=n(9538);function tL(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("g",{id:"measure",children:(0,h.jsx)(tU,{})})})}function tz(){let{svg:t}=(0,tT.hi)();return(0,h.jsxs)("div",{id:"distance",children:[(0,h.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),tH.map(e=>(0,h.jsxs)(j.Fragment,{children:[(0,h.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,h.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,h.jsx)("style",{children:(0,h.jsx)(tW,{})})]})}function tF(){let t=(0,tT.rr)(),e=t.x>0?"E":"W",n=t.y>0?"N":"S",r=`${e} ${(0,tD.gs)(Math.abs(t.x))}`,i=`${n} ${(0,tD.gs)(Math.abs(t.y))}`;return(0,h.jsxs)("div",{id:"coordinate",children:[(0,h.jsx)("p",{id:"longitude",children:r}),(0,h.jsx)("p",{id:"latitude",children:i}),(0,h.jsx)("style",{children:(0,h.jsx)(tP,{})})]})}function tU(){let{width:t,height:e}=(0,tT.zZ)(),{client:n}=(0,tT.hi)(),r=`M0,${e/2} h${t}`,i=`M${t/2},0 v${e}`,o=tH.map(r=>(function({width:t,height:e,r:n}){return`M${t/2},${e/2} m-${n},0 a${n},${n} 0,1,0 ${2*n},0 a${n},${n} 0,1,0 -${2*n},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(r+1)}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,h.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((t,e)=>(0,h.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function tq(){let{open:t,animating:e}=G(),[n,r]=t?[0,1]:[1,0],i=t?E.c5:E.F9,o=e?`
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
`;return(0,h.jsx)(h.Fragment,{children:o})}function tP(){let{width:t,height:e}=(0,tT.zZ)(),n=`
#distance,
#coordinate {
  ${E.oO}
  width: ${t}px;
  height: ${e}px;
}
`,r=`
#longitude {
  ${E.$D}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${E.Kr}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,h.jsxs)(h.Fragment,{children:[n,r,i]})}function tW(){let{width:t,height:e}=(0,tT.zZ)(),{client:n}=(0,tT.hi)(),r=`
.distance {
  ${E.oO}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,o=tH.map(r=>`
#distance-x-${r+1} {
  transform: translate(${t/2+n*(r+1)}px, ${e/2}px) scale(0.5);
}
`),a=tH.map(r=>`
#distance-y-${r+1} {
  transform: translate(${t/2}px, ${e/2+n*(r+1)}px) scale(0.5);
}
`);return(0,h.jsxs)(h.Fragment,{children:[i,r,o,a]})}let tH=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function tZ(){return(0,T._U)("guides",(0,h.jsx)(tK,{}),"ui"),(0,h.jsx)("div",{id:"guides"})}function tK(){return!(d.b.uiConfig?.showGuides??!0)||d.b.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"ui-content guides",children:[(0,h.jsx)("svg",{className:"guides",children:(0,h.jsx)(tL,{})}),(0,h.jsx)(tz,{}),(0,h.jsx)(tF,{}),(0,h.jsxs)("style",{children:[tX,(0,h.jsx)(tq,{})]})]})}let tX=`
.guides {
  ${E.oO}
  ${E.Tp}
  ${E.pU}
  z-index: 2;
}

text {
  ${E.ex}
}
`;function tV(){let{fidx:t,fidxToOnClick:e}=k(),n=d.b.floorsConfig;return void 0===n||n.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"floors",children:[(0,h.jsx)("ul",{className:"floor-list",children:n.floors.map(({name:n},r)=>(0,h.jsx)("li",{className:`floor-item ${tG(r===t)}`,onClick:e(r),children:n},r))}),(0,h.jsx)("style",{children:tB})]})}let tB=`
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
  ${E.xP}
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
`;function tY(){let{fidx:t}=k(),e=d.b.floorsConfig;return void 0===e||e.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{children:[e.floors.map((e,n)=>(0,h.jsx)("h2",{className:`floor-name ${tG(n===t)}`,children:e.name},n)),(0,h.jsx)("style",{children:tJ})]})}let tJ=`
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
`;function tG(t){return t?"selected":"unselected"}function tQ(){return(0,T._U)("header",(0,h.jsx)(t0,{}),"ui"),(0,h.jsx)("div",{id:"header"})}function t0(){let t=d.b;return(0,h.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void tt.send(t)},children:[(0,h.jsx)("h1",{className:"title",onClick:()=>void p.SN.forEach(t=>t()),children:t.title}),(0,h.jsx)(tY,{}),(0,h.jsxs)("style",{children:[t1,(0,h.jsx)(t5,{})]})]})}let t1=`
.header {
  ${E.oO}
  ${E.pC}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${E.ex}
  ${E.HX}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function t5(){let{open:t,animating:e}=G();if(e){let[e,n]=t?[0,1]:[1,0],r=t?E.c5:E.F9;return(0,h.jsx)(h.Fragment,{children:`
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
`})}function t2(){return(0,T._U)("left",(0,h.jsx)(t3,{}),"ui"),(0,h.jsx)("div",{id:"left"})}function t3(){return(0,h.jsxs)("div",{className:"ui-content left bottom",children:[(0,h.jsx)(tV,{}),(0,h.jsx)("style",{children:t4})]})}let t4=`
.left {
  ${E.oO}
  ${E.BQ}
  padding: 0.4em;
  font-size: smaller;
  ${E.pU}

  transform-origin: 100% 50%;
  transform: translateY(calc(-50% + 50vh));
  transform: translateY(calc(-50% + 50svh));
}

.left {
  top: initial;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function t6(){return(0,T._U)("right",(0,h.jsx)(t7,{}),"ui"),(0,h.jsx)("div",{id:"right"})}function t7(){return(0,h.jsxs)("div",{className:"ui-content right bottom",children:[(0,h.jsx)(t9,{}),(0,h.jsx)("style",{children:t8})]})}let t8=`
.right {
  ${E.J$}
  ${E.BQ}
  padding: 0.4em;
  font-size: smaller;
  ${E.pU}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function t9(){return(0,h.jsxs)("div",{className:"zoom",children:[(0,h.jsx)(ee,{}),(0,h.jsx)(en,{}),(0,h.jsx)(er,{}),(0,h.jsx)(ei,{}),(0,h.jsx)(eo,{}),(0,h.jsx)(ea,{}),(0,h.jsxs)("style",{children:[et,(0,h.jsx)(es,{})]})]})}let et=`
.zoom {
  font-size: large;
  margin: 0;
  ${E.pC}
}

.zoom-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${E.HX}
  cursor: default;
  ${E.xP}
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
`;function ee(){return(0,h.jsx)("div",{className:"zoom-item fullscreen",onClick:()=>void p.sw.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:em})})})}function en(){return d.b.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("div",{className:"zoom-item position",onClick:()=>void p.yU.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:eh})})})}function er(){return(0,h.jsx)("div",{className:"zoom-item recenter",onClick:()=>void p.JK.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ef})})})}function ei(){return(0,h.jsx)("div",{className:"zoom-item rotate",onClick:()=>void p.Qd.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ec})})})}function eo(){return(0,h.jsx)("div",{className:"zoom-item zoom-out",onClick:()=>void p.cL.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:eu})})})}function ea(){return(0,h.jsx)("div",{className:"zoom-item zoom-in",onClick:()=>void p.F0.forEach(t=>t()),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:el})})})}function es(){let{open:t,animating:e}=G();if(e){let[e,n]=t?[0,1]:[1,0],r=t?E.c5:E.F9;return(0,h.jsx)(h.Fragment,{children:`
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
`})}let el=`
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
`,eu=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`,ec=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`,ef=`
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
`,ed=3*Math.sqrt(2),ep=ed+6,eh=`
M 0,0
m 0,${ep/2}
l -3,-3
a ${ed},${ed} 0,1,1 6,0
z
m 0,${-ep+ed+ed/2}
a ${ed/2},${ed/2} 0,1,0 0,${-ed}
a ${ed/2},${ed/2} 0,1,0 0,${ed}
`.replaceAll(/([.]\d\d)\d*/g,"$1"),em=`
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
`;function eg(){return(0,T._U)("shadow",(0,h.jsx)(ey,{}),"ui"),(0,h.jsx)("div",{id:"shadow"})}function ey(){let t=tS();return(0,h.jsx)("div",{ref:t,className:"ui-content shadow",onClick:()=>(0,p.Qc)(),children:(0,h.jsxs)("style",{children:[ev,(0,h.jsx)(ex,{})]})})}let ev=`
.shadow {
  ${E.oO}
  ${E.Tp}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function ex(){let{open:t,animating:e}=Q(),n=(0,tT.Q7)();if(!e)return t?(0,h.jsx)(h.Fragment,{children:`
.shadow {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,h.jsx)(h.Fragment,{children:".shadow { display: initial; opacity: 0; }"}):(0,h.jsx)(h.Fragment,{children:".shadow { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],r=t?E.c5:E.F9;return(0,h.jsx)(h.Fragment,{children:`
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
`})}}function eb(){return(0,T._U)("ui",(0,h.jsx)(ew,{})),(0,h.jsx)("div",{id:"ui"})}function ew(){return(0,h.jsxs)("div",{className:"ui",children:[(0,h.jsx)(eg,{}),(0,h.jsx)(tQ,{}),(0,h.jsx)(tR,{}),(0,h.jsx)(t2,{}),(0,h.jsx)(t6,{}),(0,h.jsx)(tZ,{}),(0,h.jsx)(tO,{})]})}function ej(){return(0,T.O4)("ui")}var eS=n(5469),e_=n(6128),eM=function(t,e){return{left:t,right:e}},eE=function(t){return 0===t.size},eO=function(t){return function(e){return Array.from(e.keys()).sort(t.compare)}},e$=new Map,ek=function(t,e){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1];r.set(a,e(a,s))}return r},eN=function(t,e){return ek(t,function(t,n){return e(n)})},eR=function(t,e){return(0,to.Fs)(t,function(t){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1];e(a,s)&&r.set(a,s)}return r})},eI=function(t,e){return(0,to.Fs)(t,function(t){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=e(a,o[1]);e_.Ru(s)&&r.set(a,s.value)}return r})},eA=function(t,e){return(0,to.Fs)(t,function(t){for(var n,r=new Map,i=new Map,o=t.entries();!(n=o.next()).done;){var a=n.value,s=a[0],l=a[1];e(s,l)?i.set(s,l):r.set(s,l)}return eM(r,i)})},eC=function(t,e){return(0,to.Fs)(t,function(t){for(var n,r=new Map,i=new Map,o=t.entries();!(n=o.next()).done;){var a=n.value,s=a[0],l=e(s,a[1]);e_.OC(l)?r.set(s,l.left):i.set(s,l.right)}return eM(r,i)})},eT=function(t){for(var e,n=new Map,r=t.entries();!(e=r.next()).done;){var i=e.value,o=i[0],a=i[1];e_.Ru(a)&&n.set(o,a.value)}return n},eD=function(t){for(var e,n=new Map,r=new Map,i=t.entries();!(e=i.next()).done;){var o=e.value,a=o[0],s=o[1];e_.OC(s)?n.set(a,s.left):r.set(a,s.right)}return eM(n,r)},eL="ReadonlyMap",ez={URI:eL,compact:eT,separate:eD},eF=function(t){var e=eW(t);return function(t,n){return e(t,function(t,e,r){return n(e,r)})}},eU=function(t){var e=eH(t);return function(t){var n=e(t);return function(t){return n(function(e,n){return t(n)})}}},eq=function(t){var e=eZ(t);return function(t,n){return e(t,function(t,e,r){return n(e,r)})}},eP=function(t){var e=eF(t),n=eU(t),r=eq(t);return{URI:eL,_E:void 0,reduce:function(t,n,r){return(0,to.Fs)(t,e(n,r))},foldMap:function(t){var e=n(t);return function(t,n){return(0,to.Fs)(t,e(n))}},reduceRight:function(t,e,n){return(0,to.Fs)(t,r(e,n))}}},eW=function(t){var e=eO(t);return function(t,n){return function(r){for(var i=t,o=0,a=e(r);o<a.length;o++){var s=a[o];i=n(s,i,r.get(s))}return i}}},eH=function(t){var e=eO(t);return function(t){return function(n){return function(r){for(var i=t.empty,o=0,a=e(r);o<a.length;o++){var s=a[o];i=t.concat(i,n(s,r.get(s)))}return i}}}},eZ=function(t){var e=eO(t);return function(t,n){return function(r){for(var i=t,o=e(r),a=o.length,s=a-1;s>=0;s--){var l=o[s];i=n(l,r.get(l),i)}return i}}},eK=function(t){var e=eP(t),n=eW(t),r=eH(t),i=eZ(t);return{URI:eL,_E:void 0,reduce:e.reduce,foldMap:e.foldMap,reduceRight:e.reduceRight,reduceWithIndex:function(t,e,r){return(0,to.Fs)(t,n(e,r))},foldMapWithIndex:function(t){var e=r(t);return function(t,n){return(0,to.Fs)(t,e(n))}},reduceRightWithIndex:function(t,e,n){return(0,to.Fs)(t,i(e,n))}}},eX=n(8304),eV=n(9005);let eB=eS.OZ(z.yK),eY={URI:eL,_E:void 0,map:eN,compact:eT,separate:eD,filter:function(t,e){return eR(t,function(t,n){return e(n)})},filterMap:function(t,e){return eI(t,function(t,n){return e(n)})},partition:function(t,e){return eA(t,function(t,n){return e(n)})},partitionMap:function(t,e){return eC(t,function(t,n){return e(n)})},reduce:(o=eK(i=eX._k),a=eO(i),s=function(t){return function(e,n){for(var r=t.of(new Map),i=a(e),o=i.length,s=0;s<o;s++)!function(o){var a=i[o],s=e.get(a);r=t.ap(t.map(r,function(t){return function(e){return t.set(a,e)}}),n(a,s))}(s);return r}},l={URI:eL,_E:void 0,map:eN,mapWithIndex:ek,reduce:o.reduce,foldMap:o.foldMap,reduceRight:o.reduceRight,reduceWithIndex:o.reduceWithIndex,foldMapWithIndex:o.foldMapWithIndex,reduceRightWithIndex:o.reduceRightWithIndex,traverse:function(t){var e=s(t);return function(t,n){return e(t,function(t,e){return n(e)})}},sequence:function(t){var e=s(t);return function(t){return e(t,to.SK)}},traverseWithIndex:s}).reduce,foldMap:l.foldMap,reduceRight:l.reduceRight,traverse:l.traverse,sequence:l.sequence,mapWithIndex:ek,reduceWithIndex:l.reduceWithIndex,foldMapWithIndex:l.foldMapWithIndex,reduceRightWithIndex:l.reduceRightWithIndex,traverseWithIndex:l.traverseWithIndex,wilt:function(t){var e=l.traverse(t);return function(n,r){return t.map(e(n,r),ez.separate)}},wither:function(t){var e=l.traverse(t);return function(n,r){return t.map(e(n,r),ez.compact)}}},eJ=(u=eX.Eq,c=eS.CA(),f=function t(e){return function(n,r){if(void 0===r){var i,o=t(e);return function(t){return o(n,t)}}for(var a=r.entries();!(i=a.next()).done;){var s=i.value,l=s[0],u=s[1];if(e.equals(l,n))return e_.zN([l,u])}return e_.dv}}(u),{concat:function(t,e){if(eE(t))return e;if(eE(e))return t;for(var n,r=new Map(t),i=e.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1],l=f(a,t);e_.Ru(l)?r.set(l.value[0],c.concat(l.value[1],s)):r.set(a,s)}return r},empty:e$});function eG(t){return(0,to.Fs)(t,function(t){return Array.from(t.values()).sort(eB.compare)},eS.x1(t=>0===t.length?eV.dv:eV.zN(t[0])))}function eQ(t){return t.length<2?null:(0,z.H7)(t)}function e0(t){return new Map((0,to.Fs)(t.changedTouches,Array.from,eS.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let e1=(0,S.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:({context:{touches:t}})=>0===t.vecs.size,isSingleTouching:({context:{touches:t}})=>1===t.vecs.size,isDoubleTouching:({context:{touches:t}})=>2===t.vecs.size,isManyTouching:({context:{touches:t}})=>t.vecs.size>2,isZooming:({context:{touches:t}})=>null!==t.z},actions:{handleTouchStart:(0,I.e)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>{var n;let r,i,o,a;return"TOUCH.START"!==e.type?t:(n=e.ev,o=eQ(i=eG(r=eJ.concat(t.vecs,e0(n)))),a=2!==i.length?null:.5>Math.abs((0,z.Ge)(i[0],i[1])),{...t,vecs:r,points:i,cursor:o,horizontal:a})}}),t.raise({type:"STARTED"})}),handleTouchMove:(0,I.e)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>"TOUCH.MOVE"!==e.type?t:function(t,e,n){var r,i;let o,a=e0(e),s=eY.mapWithIndex(t.vecs,(t,e)=>(0,to.Fs)(a.get(t),eV.k$,eV.AU(()=>e,eS.xW(e)))),l=eG(s),u=eQ(l),[c,f]=l;if(null===u||(0,tD.b0)(c)||(0,tD.b0)(f))return{...t,vecs:s,points:l,cursor:u};let d=(r=t.dists,i=(0,z.Ri)(c,f),o=Math.pow((r.length>0?r[0]:i)-i,2),0===r.length||o>0?[i,...r]:r),p=function([t,e,n,r]){return(0,tD.b0)(t)||(0,tD.b0)(e)||(0,tD.b0)(n)||(0,tD.b0)(r)?null:t<e&&e<n&&n<r?-1:t>e&&e>n&&n>r?1:null}(d);return{vecs:s,points:l,cursor:u,dists:d,z:p,horizontal:t.horizontal}}(t,e.ev,0)}),t.raise({type:"MOVED"})}),handleTouchEnd:(0,I.e)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>{let n,r,i,o;return"TOUCH.END"!==e.type?t:(n=e0(e.ev),o=eQ(i=eG(r=eI(t.vecs,(t,e)=>n.has(t)?eV.dv:eV.zN(e)))),{vecs:r,points:i,cursor:o,dists:0===r.size?[]:t.dists,z:0===r.size?null:t.z,horizontal:t.horizontal})}}),t.raise({type:"ENDED"})}),resetTouches:(0,_.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),notifyTouching:(0,I.e)(({enqueue:t,context:e})=>t.emit(2===e.touches.vecs.size?{type:"MULTI.START"}:{type:"MULTI.END"})),notifyZoom:(0,I.e)(({context:t,enqueue:e})=>{let n=t.touches.cursor,r=t.touches.z;null!==n&&null!==r&&e.emit({type:"ZOOM",p:n,z:r})})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:"handleTouchStart"},"TOUCH.MOVE":{actions:"handleTouchMove"},"TOUCH.END":{actions:"handleTouchEnd"},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"notifyTouching",exit:"notifyTouching",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"notifyZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),e5=(0,M.c)(e1),e2=!1;function e3(t){e5.send({type:"TOUCH.START",ev:t})}function e4(t){e5.send({type:"TOUCH.MOVE",ev:t})}function e6(t){e5.send({type:"TOUCH.END",ev:t})}function e7(){e5.send({type:"CANCEL"})}function e8(t){tb||tj({type:"CLICK",ev:t})}function e9(t){tj({type:"CONTEXTMENU",ev:t})}function nt(t){tj({type:"WHEEL",ev:t})}function ne(t){null!==t&&(0,tu.PH)(t)}function nn(t){ty({type:"KEY.DOWN",ev:t})}function nr(t){ty({type:"KEY.UP",ev:t})}function ni(t){let e=(0,j.useRef)(null);return(0,h.jsxs)("div",{ref:e,id:"viewer",className:"container",onTouchStart:e3,onTouchMove:e4,onTouchEnd:e6,onClick:e8,onContextMenu:e9,onScroll:ne,onWheel:nt,onAnimationEnd:t=>{tj({type:"ANIMATION.END",ev:t}),(0,tT.Zm)()},children:[t.children,(0,h.jsx)("style",{children:no}),(0,h.jsx)(na,{}),(0,h.jsx)(ns,{}),(0,h.jsx)(nl,{})]})}e5.on("MULTI.START",()=>{e2=!0,ty({type:"TOUCH.LOCK"})}),e5.on("MULTI.END",()=>{ty({type:"TOUCH.UNLOCK"}),e2=!1}),e5.on("ZOOM",({z:t,p:e})=>{ty({type:"ZOOM.ZOOM",z:t>0?1:-1,p:e})}),e5.start(),p.SN.add(e7),p.sw.add(e7),p.yU.add(e7),p.JK.add(e7),p.cL.add(e7),p.F0.add(e7);let no=`
.container {
  ${E.oO}
  ${E.Tp}

  scrollbar-width: thin;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;function na(){let t=(0,tT.p$)(),e=`
.content {
  ${E.oO}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
}
`;return(0,h.jsx)("style",{children:e})}function ns(){let t=(0,tT.sM)(),e=null===t?"":function({matrix:t,origin:e}){let n=new DOMMatrixReadOnly;return`
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
`}(t);return(0,h.jsx)("style",{children:e})}function nl(){let{style:t}=k();return null===t?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("style",{children:t})}function nu(){return null!==document.querySelector(".container")}let nc=(0,S.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:L.zA,next:L.zA,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Busy"}}},Busy:{after:{500:{actions:[(0,_.a)({next:()=>(0,tD.aJ)()}),(0,M.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:({context:t})=>t.waited>1e4,target:"Aborting"},{guard:({context:{prev:t,next:e}})=>t.width===e.width&&.2>Math.abs(1-e.height/t.height),actions:()=>console.log("resize: ignoring height-only change"),target:"Idle"},{guard:({context:t})=>!(0,L.eq)(t.prev,t.next),actions:[(0,_.a)({prev:({context:t})=>t.next,waited:0}),(0,I.a)(({context:t})=>({type:"LAYOUT",layout:(0,ts.jC)(d.b.origViewBox,d.b.fontSize,t.next),force:!t.first})),(0,_.a)({first:!1})],target:"Idle"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,_.a)({waited:({context:t})=>t.waited+500})],target:"Busy"}},Aborting:{}}}),nf=(0,M.c)(nc);nf.on("LAYOUT",t=>(0,p.qk)(t)),nf.start(),window.addEventListener("resize",()=>{nf.send({type:"RESIZE"})});var nd=n(6230);let np=`
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
  ${E.oO}
  ${E.Tp}
  ${E.Xj}
  ${E.Sp}
  ${E.a5}
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
`,nh=function(){let t=d.b.cartoConfig?.backgroundColor??d.b.backgroundColor??"darkgray",e={data:d.b,render:d.b,carto:d.b.cartoConfig,floors:d.b.floorsConfig};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ni,{...e,children:d.b.renderMap(e)}),(0,h.jsx)(eb,{}),(0,h.jsxs)("style",{children:[np,`body { background-color: ${t}; }`]})]})},nm=new Worker(new URL(n.p+n.u("386"),n.b),Object.assign({},{type:"module"},{type:void 0}));nm.onmessage=t=>{let e=t.data;"INIT.DONE"===e.type||"SEARCH.DONE"===e.type&&function(t){let e=d.b.getAddressInfo(d.b.mapMap,d.b.searchEntries,t);if(null===e)(0,p.Oe)(null);else{let n=d.b.mapCoord.matrix.transformPoint(t.coord);(0,p.Oe)({psvg:n,info:e})}}(e.res)},nm.onerror=t=>{console.log("error",t)},nm.onmessageerror=t=>{console.log("messageerror",t)},p.Dl.add(function(t){let e=d.b.mapCoord.matrix.inverse().transformPoint(t);nm.postMessage({type:"SEARCH",pgeo:e})});var ng=n(9306);function ny(t){var e,n;let r={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0};(0,d.M)({origViewBox:r,isContainerRendered:nu,isUiRendered:ej,...t}),(0,d.M)({...d.b});let i={...d.b,origViewBox:r,...t};$.start(),(0,N.v4)(),nf.start(),tp.start(),C.start(),(0,tT.f3)(),e5.start(),tt.start(),tv.start(),t.getMapNames&&(0,R.j3)(t.getMapNames({data:i,render:i,carto:i.cartoConfig,floors:i.floorsConfig})),t.getAddressEntries&&i.searchEntries.length>0&&(e=t.getAddressEntries(i),nm.postMessage({type:"INIT",entries:e})),void 0!==i.floorsConfig&&(n=i.floorsConfig.fidx,$.send({type:"SELECT",fidx:n,force:!0}));let o=document.getElementById(i.root);if(null===o)throw Error("#root not found!");o.onwheel=function(t){let e=o.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==e&&e.clientWidth===e.scrollWidth||tw)&&t.preventDefault()},o.oncontextmenu=function(t){t.preventDefault()},o.ontouchmove=function(t){if(tw){if(t.target instanceof HTMLDivElement&&t.target?.id==="ui")return;t.preventDefault()}else if(!e2)return;t.preventDefault()},document.title=i.title,document.body.onkeydown=nn,document.body.onkeyup=nr,(0,nd.createRoot)(o).render((0,h.jsx)(j.StrictMode,{children:(0,h.jsx)(nh,{})})),(0,ng.y)()}},2852(t,e,n){function r(t,e,n,r){return{x:t,y:e,width:n,height:r}}n.d(e,{C:()=>a,C6:()=>c,Cy:()=>l,DJ:()=>f,aP:()=>r,eq:()=>o,gX:()=>s,tw:()=>u,zA:()=>i});let i={x:0,y:0,width:1,height:1};function o(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function a(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}function s(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function l(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function u(t,e){return{...t,x:e.x,y:e.y}}function c(t){return function({x:t,y:e,width:n,height:r}){return`${t} ${e} ${n} ${r}`}(function({x:t,y:e,width:n,height:r},i){return{x:i(t),y:i(e),width:i(n),height:i(r)}}(t,function(t){return Math.round(100*t)/100}))}function f([t,e],n){return[n(t),n(e)]}},496(t,e,n){n.d(e,{hs:()=>h,aE:()=>m});function r(t,e,n){return[function([t,e,n],[r,i],o){return t*r+e*i+n*o}(function([[t],[e],[n]]){return[t,e,n]}(t),e,n),function([t,e,n],[r,i],o){return t*r+e*i+n*o}(function([[,t],[,e],[,n]]){return[t,e,n]}(t),e,n)]}function i(t,e){return[r(t,function([t]){return t}(e),0),r(t,function([,t]){return t}(e),0),r(t,function([,,t]){return t}(e),1)]}function o([t,e]){return[[1,0],[0,1],[t,e]]}function a([t,e]){return[[t,0],[0,e],[0,0]]}var s=n(4997),l=n(2852);function u({x:t,y:e,width:n,height:r}){return{tl:{x:t,y:e},br:{x:t+n,y:e+r}}}function c({tl:t,br:e}){return{x:t.x,y:t.y,width:e.x-t.x,height:e.y-t.y}}function f({tl:t,br:e}){return[[t.x,t.y],[e.x,e.y]]}function d([[t,e],[n,r]]){return{tl:{x:t,y:e},br:{x:n,y:r}}}function p(t,e){return(0,s.Fs)(t,u,f,t=>(0,l.DJ)(t,t=>r(e,t,1)),d,c)}function h(t,e){return p(t,a(g(e)))}function m(t,e,n,r){return p(t,function(t,e){let[n,r]=e;return[o(e),a(t),o([-n,-r])].reduce(i)}(g(e),[n,r]))}function g(t){return"number"==typeof t?[t,t]:"x"in t?[t.x,t.y]:t}},6770(t,e,n){n.d(e,{n5:()=>o});var r=n(2742),i=n(9975);function o(){return(0,r.jsx)("g",{className:"assets",children:(0,r.jsx)(a,{})})}function a(){return(0,r.jsxs)("g",{className:"symbols",children:[(0,r.jsx)(i.z7,{}),(0,r.jsx)(i.Z$,{}),(0,r.jsx)(i.HM,{}),(0,r.jsx)(i.lP,{}),(0,r.jsx)(i.$$,{}),(0,r.jsx)(i.D0,{}),(0,r.jsx)(i.Nz,{}),(0,r.jsx)(i.rl,{})]})}},9975(t,e,n){n.d(e,{$$:()=>l,HM:()=>a,Ci:()=>d,z7:()=>i,Nz:()=>c,Z$:()=>o,lP:()=>s,rl:()=>f,D0:()=>u});var r=n(2742);function i(){return(0,r.jsxs)("g",{id:"XBus",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,r.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,r.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,r.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})}function o(){return(0,r.jsxs)("g",{id:"XDrinkingFountain",children:[(0,r.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,r.jsxs)("g",{fill:"white",stroke:"none",children:[(0,r.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,r.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,r.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,r.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,r.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,r.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,r.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,r.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,r.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,r.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,r.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,r.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,r.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,r.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,r.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,r.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,r.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,r.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})}function a(){return(0,r.jsxs)("g",{id:"XElevator",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,r.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,r.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,r.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,r.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,r.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,r.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,r.jsx)("use",{x:"8.5",href:"#_person2"}),(0,r.jsx)("use",{x:"17",href:"#_person2"})]})}function s(){return(0,r.jsxs)("g",{id:"XEscalator",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,r.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,r.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})}function l(){return(0,r.jsxs)("g",{id:"XInformation",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,r.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,r.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})}function u(){return(0,r.jsxs)("g",{id:"XParking",children:[(0,r.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,r.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})}function c(){return(0,r.jsxs)("g",{id:"XStairs",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})}function f(){return(0,r.jsxs)("g",{id:"XToilets",transform:"translate(-36,-36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsxs)("g",{fill:"white",stroke:"none",children:[(0,r.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,r.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,r.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,r.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,r.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})}let d=new Map(Object.entries({bus:"#XBus",elevator:"#XElevator",escalator:"#XEscalator",information:"#XInformation",parking:"#XParking",stairs:"#XStairs",toilets:"#XToilets",water:"#XDrinkingFountain"}))},4207(t,e,n){n.d(e,{$D:()=>a,BQ:()=>p,F9:()=>b,HX:()=>y,J$:()=>i,Kr:()=>o,Sp:()=>c,Tp:()=>f,Xj:()=>u,a5:()=>m,c5:()=>x,ex:()=>h,oO:()=>r,pC:()=>d,pU:()=>g,xP:()=>v});let r=`
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
`,l=`
padding: 0;
`,u=`
${s} ${l}
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
`},1943(t,e,n){n.d(e,{NC:()=>o,O4:()=>s,_U:()=>a});var r=n(8822),i=n(6230);let o=new Map;function a(t,e,n){(0,r.useEffect)(()=>(function(t,e,n){let r=void 0===n?document:o.get(n)??null;if(null===r)return;let a=r.querySelector(`#${t}`)??null;if(null===a||null!==a.shadowRoot)return;let s=a.attachShadow({mode:"open"});o.set(t,s),(0,i.createRoot)(s).render(e)})(t,e,n),[t,n,e])}function s(t){let e=document.querySelector(`#${t}`)?.shadowRoot?.children?.length??null;return null!==e&&e>0}},4468(t,e,n){function r(t,e){if(void 0===t)return null;let n=e.pointMap.get(t);if(void 0!==n)return n;let r=e.lineMap.get(t);if(void 0!==r)return r;let i=e.multipolygonMap.get(t);return void 0!==i?i:null}function i(t,e){return r(t,e)?.properties??null}function o(t){let e="osm_id"in t&&"string"==typeof t.osm_id?t.osm_id:"osm_way_id"in t&&"string"==typeof t.osm_way_id?t.osm_way_id:null;return null===e?null:Number(e)}function a(t,e){let n=RegExp(`\\"${e}\\"=>\\"([^"][^"]*)\\"`);if(null===t.other_tags)return null;let r=n.exec(String(t.other_tags));return null===r?null:r[1]}function s(t){let e=t.cartoConfig?.skipNamePattern;return[...t.mapData.points.features.flatMap(({properties:n})=>{let r=l(n,t.searchEntries,e);return null===r?[]:[r]}),...t.mapData.multipolygons.features.flatMap(({properties:n})=>{let r=l(n,t.searchEntries,e);return null===r?[]:[r]})]}function l(t,e,n){let r=o(t);if(null===r)return null;let i=t.name;if(null!==i&&void 0!==n&&i.match(n))return null;let{centroid_x:a,centroid_y:s}=t;return null===a||null===s||0===e.filter(e=>e.filter(t)).length?null:{a:r+"",coord:{x:a,y:s}}}function u(t,e,n){let i=r(Number(n.address),t);if(null===i)return null;let o=i.properties,a=e.flatMap(t=>t.filter(o)?[t.getInfo(o,n.address)]:[]);return 0===a.length?null:a[0]}n.d(e,{De:()=>a,v4:()=>$,fP:()=>p,t6:()=>u,bh:()=>o,Ly:()=>i,Bn:()=>s,Jl:()=>k,Aq:()=>y});var c=n(5469),f=n(9005),d=n(4997);function p(t){var e,n,r,i;return{pointMap:(e=t.points,(0,d.Fs)(e.features,c.x1(t=>{let e=t.properties.osm_id;return null===e?f.dv:f.zN([Number(e),t])}),t=>new Map(t))),lineMap:(n=t.lines,(0,d.Fs)(n.features,c.x1(t=>{let e=t.properties.osm_id;return null===e?f.dv:f.zN([Number(e),t])}),t=>new Map(t))),multilinestringMap:(r=t.multilinestrings,(0,d.Fs)(r.features,c.x1(t=>{let e=t.properties.osm_id;return null===e?f.dv:f.zN([Number(e),t])}),t=>new Map(t))),multipolygonMap:(i=t.multipolygons,(0,d.Fs)(i.features,c.x1(t=>{let e=t.properties.osm_id,n=t.properties.osm_way_id,r=null!==e?e:null!==n?n:null;return null===r?f.dv:f.zN([Number(r),t])}),t=>new Map(t)))}}var h=n(496),m=n(3e3),g=n(1851);function y({origin:t,measures:e,viewbox:n}){let r=(0,g.t0)(t.features[0].geometry.coordinates),i=e.features[0],o=e.features[1],a=(0,g.t0)(i.geometry.coordinates[1]),s=(0,g.t0)(o.geometry.coordinates[1]),l=(0,g.Lp)(i.properties.ellipsoidal_distance,o.properties.ellipsoidal_distance),u=(0,g.Lp)(a.x-r.x,s.y-r.y),c=(0,g.Qn)(l,u);return{mapCoord:{matrix:new DOMMatrixReadOnly().scale(c.x,c.y).translate(-r.x,-r.y)},mapViewBox:(0,h.hs)(function(t){let e=t.features[0].geometry.coordinates,[n,r]=(0,m.jb)(e[1],e[0]),i=t.features[1].geometry.coordinates,[o,a]=(0,m.jb)(i[1],i[0]);return{x:n,y:r,width:o,height:a}}(n),c)}}var v=n(9568),x=n(1433),b=n(452),w=n(9886),j=n(3952),S=n(3088),_=n(555);async function M(){return new Promise((t,e)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(t){e(t)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}let E=(0,x.mj)({types:{events:{},emitted:{}},actors:{api:(0,b.Sx)(M)},delays:{TIMEOUT:5e3}}).createMachine({id:"geoloc",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,w.a)({position:({event:t})=>t.output}),(0,j.a)(({event:t})=>({type:"POSITION",position:t.output}))],target:"Idle"},onError:{actions:(0,w.a)({error:({event:t})=>JSON.stringify(t)}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),O=(0,S.c)(E);function $(){O.start()}function k(){return(0,v.d4)(O,t=>t.context.position)}$(),_.yU.add(function(){O.send({type:"GET"})})},4630(t,e,n){n.d(e,{Ev:()=>h,HD:()=>m,j3:()=>p});var r=n(7879),i=n(2674),o=n(5469),a=n(9005),s=n(8304),l=n(4997),u=n(199),c=n(8822),f=n(9815);let d=(0,r.a)({context:{names:[]},on:{set:(t,{names:e})=>({names:e})}});function p(t){d.trigger.set({names:t})}function h(){let t=(0,i.d4)(d,t=>t.context.names),e=(0,c.useMemo)(()=>t.filter(({id:t,area:e})=>void 0!==t&&void 0===e),[t]),n=(0,c.useMemo)(()=>t.flatMap(({id:t,name:e,pos:n,area:r})=>void 0===t||void 0===r?[]:[{id:t,name:e,pos:n,area:r,size:Math.sqrt(r)}]),[t]),{sizeMap:r,sizes:u}=(0,c.useMemo)(()=>{var t;let e,r;return t=n,e=new Map((0,l.Fs)(t,o.x1(({id:t,size:e})=>null===t?a.dv:a.zN({id:t,size:e})),o.Tj(({id:t,size:e})=>[t,Math.round(Math.log2(e))]))),r=(0,l.Fs)(e.values(),t=>Array.from(t),o.di(s._k),o.sb(s.Eq)),{sizeMap:e,sizes:r}},[n]);return{pointNames:e,areaNames:n,sizeMap:r,sizes:u}}function m(){let t=(0,f.JZ)(),e=(0,f.tX)(),{sizes:n,sizeMap:r,pointNames:i,areaNames:a}=h(),s=(0,l.Fs)(n,o.Tj(t=>{let n=Math.pow(2,t)/10/4;return[t,n<e]}),t=>new Map(t));return{pointRange:(0,c.useMemo)(()=>g(i,t,r,s),[i,t,r,s]),areaRange:(0,c.useMemo)(()=>g(a,t,r,s),[a,t,r,s])}}function g(t,e,n,r){let i=(0,l.Fs)(t,o.x1(({id:t,pos:i})=>{if(null===t)return u.none;let o=n.get(t);if(void 0===o)return u.none;let a=r.get(o);if(void 0===a)return u.none;let s=function(t,e){let{start:n,end:r}=e;return function(t,e,n){return(e-t)*(n-e)>0}(n.x,t.x,r.x)&&function(t,e,n){return(e-t)*(n-e)>0}(n.y,t.y,r.y)}(i,e);return(0,u.some)({id:t,inout:s,small:a})}));return{insides:(0,l.Fs)(i,o.x1(({id:t,inout:e,small:n})=>e&&!n?(0,u.some)(t):u.none),t=>new Set(t)),outsides:(0,l.Fs)(i,o.x1(({id:t,inout:e,small:n})=>e&&!n?u.none:(0,u.some)(t)),t=>new Set(t))}}},3e3(t,e,n){function r(t,e){return[t,e]}function i([t,e],[n,r]){return[t-n,e-r]}function o([t,e]){return{x:t,y:e}}n.d(e,{jb:()=>i,t6:()=>o,v:()=>r})},9538(t,e,n){n.d(e,{$V:()=>a,aJ:()=>o,b0:()=>i,gs:()=>s});let r,i=t=>t===r;function o(){return{x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight}}function a(t){return Math.round(100*t)/100}function s(t){return Math.round(1e7*t)/1e7}},1851(t,e,n){function r(t,e){let n=t.x+e.x,r=t.y+e.y;return{...t,x:n,y:r}}function i(t,e){let n=t.x-e.x,r=t.y-e.y;return{...t,x:n,y:r}}function o(t,e){let n=i(t,e);return n.y/n.x}function a(t,e){var n,r;return Math.sqrt((n=t,r=e,Math.pow(n.x-r.x,2)+Math.pow(n.y-r.y,2)))}function s(t,e){let n=t.x/e.x,r=t.y/e.y;return{...t,x:n,y:r}}n.d(e,{P:()=>f,H7:()=>h,Lp:()=>c,Ri:()=>a,R_:()=>i,Xd:()=>p,CO:()=>r,yK:()=>u,Qn:()=>s,t0:()=>d,Ge:()=>o});var l=n(8304);let u=n(4853).I3(function(t,e){return l._k.compare(t.x,e.x)||l._k.compare(t.y,e.y)});function c(t,e){return{x:t,y:e}}let f={x:0,y:0};function d([t,e]){return{x:t,y:e}}function p(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,r="number"==typeof e?e:e instanceof Array?e[1]:e.y,i=t.x*n,o=t.y*r;return{...t,x:i,y:o}}function h(t){let e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y}));return null===e?null:p(e,1/t.length)}},7807(t,e,n){n.d(e,{CO:()=>a,Ez:()=>c,J:()=>l,TL:()=>o,ZI:()=>s,ut:()=>u});var r=n(2852),i=n(1851);let o={container:r.zA,scroll:r.zA,content:new DOMMatrixReadOnly,svgOffset:{x:0,y:0},svgScale:{s:1},svg:r.zA};function a({container:t,svgOffset:e,svgScale:n,svg:i}){return{container:(0,r.C)(t),scroll:(0,r.C)(t),content:new DOMMatrixReadOnly,svgOffset:e,svgScale:n,svg:(0,r.C)(i)}}function s({svgOffset:t,svgScale:e,svg:n}){return new DOMMatrixReadOnly().translate(-t.x,-t.y).scale(1/e.s,1/e.s).translate(-n.x,-n.y)}function l({content:t,svgOffset:e,svgScale:n,svg:r}){return new DOMMatrixReadOnly().multiply(t).translate(-e.x,-e.y).scale(1/n.s,1/n.s).translate(-r.x,-r.y)}function u({scroll:t,content:e,svgOffset:n,svgScale:r,svg:i}){return new DOMMatrixReadOnly().translate(t.x,t.y).multiply(e).translate(-n.x,-n.y).scale(1/r.s,1/r.s).translate(-i.x,-i.y)}function c(t){return(0,i.Xd)(t,-1)}},8053(t,e,n){n.d(e,{O4:()=>u,SH:()=>c,Qc:()=>v,KS:()=>y,aF:()=>d,sC:()=>h,jC:()=>p,c7:()=>g,a4:()=>m});var r=n(4997),i=n(2852),o=n(496),a=n(1851),s=n(7807);let l={fontSize:16,container:i.zA,svgOffset:{x:0,y:0},svgScale:{s:1},svg:i.zA},u={...s.TL,config:l};function c({config:t,content:e}){let n=(0,s.CO)(t),r=f(e);return y({config:t,...n},r)}function f({a:t,b:e,c:n,d:r}){let i=new DOMMatrixReadOnly([t,e,n,r,0,0]).transformPoint({x:1,y:0});return Math.atan2(i.y,i.x)/Math.PI*180}function d(t){return f(t.content)}function p(t,e,n){var r;let i;return r=function(t,e,n){let[[r,i],o]=function(t,e){let n=t.width/t.height,r=e.width/e.height,[i,o]=n>r?[(t.width-t.height*r)/2,0]:[0,(t.height-t.width/r)/2];return[[i,o],n>r?e.height/t.height:e.width/t.width]}(n,e);return{fontSize:t,container:n,svgOffset:{x:-r,y:-i},svgScale:{s:o},svg:e}}(e,t,n),i=(0,s.CO)(r),{config:r,...i}}function h(t,e){var n,r,l;let u,c,f,d;return n=t,r=e,l=(0,i.gX)(t.scroll),u=(0,s.ut)(n).inverse().transformPoint(l),f=(c=n.container.width/n.container.height)<1?r/c:r,d=c<1?r:r*c,{...n,scroll:(0,o.aE)(n.scroll,[f,d],l.x,l.y),svgOffset:(0,a.Xd)(n.svgOffset,[f,d]),svg:(0,o.aE)(n.svg,[f,d],u.x,u.y)}}function m(t,e){return{...t,scroll:(0,i.tw)(t.scroll,e)}}function g(t,e,n){return{...t,svg:(0,i.C)(e),svgScale:n}}function y(t,e){let n=t.scroll.width/2,r=t.scroll.height/2,i=new DOMMatrixReadOnly().translate(n,r).rotate(e).translate(-n,-r).multiply(t.content);return{...t,content:i}}function v(t,e){let n=(0,a.R_)((0,s.Ez)(e),t.scroll);return(0,r.Fs)(t,t=>({...t,scroll:(0,i.Cy)(t.scroll,n)}),e=>{var n;let r,o,s,l,u,c,f,d;return n=(0,i.C)(t.scroll),r=e.content.inverse(),o=(0,a.Lp)(e.scroll.width/2,e.scroll.height/2),s=(0,a.R_)(e.scroll,n),l=(0,a.CO)(o,s),u=r.transformPoint(o),c=r.transformPoint(l),f=(0,a.R_)(c,u),d=(0,a.Xd)(f,-e.svgScale.s),{...e,scroll:(0,i.tw)(e.scroll,n),svg:(0,i.Cy)(e.svg,d)}})}},7917(t,e,n){n.d(e,{KT:()=>o,PH:()=>u,Vs:()=>s,l9:()=>i,wq:()=>l});var r=n(2852);function i(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,r=e.scrollTop,i=e.scrollWidth,o=e.scrollHeight;if(null===n)return!1;let a=i-t.width,s=o-t.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${t.width}, ${t.height}]`),!1;let l=Math.round(-t.x),u=Math.round(-t.y);if(l<0||u<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==l&&(e.scrollLeft=l),r!==u&&(e.scrollTop=u);let c=e.scrollLeft;if(Math.abs(c-l)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${c}`),!1;let f=e.scrollTop;return!(Math.abs(f-u)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${f}`),!1)}function o(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),(0,r.aP)(e,n,i,o)}return null}let a={scroll:r.zA,client:{width:0,height:0},timeStamp:0};function s(){return a}let l=new Set;function u(t){l.forEach(e=>e(t))}l.add(function(t){let e=t.currentTarget;null!==e&&(a={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})})},9815(t,e,n){let r,i;n.d(e,{Q7:()=>E,JZ:()=>A,rr:()=>R,zZ:()=>$,hi:()=>I,Jc:()=>S,p$:()=>D,f4:()=>L,mG:()=>C,fQ:()=>_,f3:()=>b,Zm:()=>j,nQ:()=>k,sM:()=>N,xE:()=>M,tX:()=>T,gK:()=>O});var o=n(9568),a=n(1433),s=n(9886),l=n(3088),u=n(8874),c=n(555);let f=[1,2,2.5,5,10,15,20,25,30,40,50];var d=n(3952);let p=(0,a.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,s.a)({ticked:!1}),set:(0,s.a)({ticked:!0}),call:(0,d.a)({type:"CALL"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["call","clear"],target:"Idle"}},on:{TICK:{guard:({context:t})=>!t.ticked,actions:{type:"set",params:({event:t})=>t},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:({event:t})=>t},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["call","clear"],target:"Idle"}}}});var h=n(1851),m=n(7807),g=n(8053),y=n(7917);let v=(0,a.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,s.a)({zoom:(t,e)=>e.zoom,z:(t,e)=>e.z}),updateRotate:(0,s.a)({}),updateSvgMatrix:(0,s.a)({svgMatrix:({context:{layout:t}})=>(0,m.J)(t)}),updateGeoMatrix:(0,s.a)({geoMatrix:({context:t})=>t.svgMatrix.multiply(u.b.mapCoord.matrix).inverse()}),updateDistanceRadius:(0,s.a)({distanceRadius:({context:{layout:t}})=>(function({container:t,svgScale:e}){var n;let r=Math.max(t.width,t.height)/2*e.s,i=Math.round(Math.log10(r)),o=(n=r/Math.pow(10,i-1),f.flatMap(t=>{let e=Math.floor(n/t);return e<3||e>=10?[]:[{u:t,n:e}]}));if(o.length<1)throw Error("findDiv");let{u:a}=o[0],s=a*Math.pow(10,i-1);return{svg:s,client:s/e.s}})(t)}),updateScroll:(0,s.a)({geoPoint:({context:t},{scroll:e,client:n})=>{let r=t.geoMatrix,i={x:e.x+n.width/2,y:e.y+n.height/2};return r.transformPoint(i)},geoRange:({context:t},{scroll:e,client:n})=>{let r=t.geoMatrix,i={x:e.x,y:e.y},o={x:e.x+n.width,y:e.y+n.height};return{start:r.transformPoint(i),end:r.transformPoint(o)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:g.O4,zoom:1,z:null,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:h.P,distanceRadius:{svg:0,client:0},geoRange:{start:h.P,end:h.P},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,s.a)({rendered:({event:t})=>t.rendered,layout:({event:t})=>t.layout}),"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,l.r)(({event:{rendered:t}})=>({type:"LAYOUT.DONE",rendered:t}))]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:({event:t})=>t}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:({event:t})=>t.currentScroll}},"STYLE.MODE":{actions:(0,s.a)({mode:({event:t})=>t.mode})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:({event:t})=>t.rendered,actions:(0,s.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,s.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,s.a)({animation:({event:{animation:t}})=>t,animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:({event:t})=>!t.rendered,actions:(0,s.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,s.a)({animation:null,animating:!1}),target:"Idle"}}}}}),x=(0,l.c)(v,{systemId:"system-viewer1"});function b(){x.start()}function w(t){x.send(t)}function j(){x.send({type:"STYLE.ANIMATION.END"})}function S(){return(0,o.d4)(x,t=>t.context.rendered)}function _(){return(0,o.d4)(x,t=>t.context.appearing)}function M(){return(0,o.d4)(x,t=>t.context.shown)}function E(){return(0,o.d4)(x,t=>t.context.animating)}function O(){return(0,o.d4)(x,t=>t.context.layout)}function $(){return(0,o.d4)(x,t=>t.context.layout.container)}function k(){return(0,o.d4)(x,t=>t.context.layout.scroll)}function N(){return(0,o.d4)(x,t=>t.context.animation)}function R(){return(0,o.d4)(x,t=>t.context.geoPoint)}function I(){return(0,o.d4)(x,t=>t.context.distanceRadius)}function A(){return(0,o.d4)(x,t=>t.context.geoRange)}function C(){return(0,o.d4)(x,t=>t.context.layout.config)}function T(){return(0,o.d4)(x,t=>t.context.layout.svgScale.s)}function D(){return(0,o.d4)(x,t=>t.context.layout.content)}function L(){return(0,o.d4)(x,t=>t.context.zoom)}function z(){w({type:"STYLE.SCROLL",currentScroll:(0,y.Vs)()})}x.start(),c.Nd.add(function({layout:t,force:e}){w({type:"STYLE.LAYOUT",layout:t,rendered:e}),requestAnimationFrame(()=>z())}),c.mk.add(function(t){w({type:"STYLE.ZOOM",...t})}),c.Lg.add(function(t){w({type:"STYLE.ZOOM",zoom:t.zoom,z:null})}),c.lu.add(function(t){w({type:"STYLE.ANIMATION",animation:t})}),c.Ud.add(function(t){w({type:"STYLE.MODE",mode:t})});let F=(r=p.provide({delays:{DURATION:500}}),(i=(0,l.c)(r)).on("CALL",z),i.start(),{machine:r,actor:i,tick:function(){i.send({type:"TICK"})}});y.wq.add(F.tick)}}]);