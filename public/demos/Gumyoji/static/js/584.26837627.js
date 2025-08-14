/*! For license information please see 584.26837627.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["584"],{4107:function(t,e,n){n.d(e,{v9:()=>a});var r=n(8446),i=n(6757);function o(t,e){return t===e}function a(t,e,n=o){let s=(0,r.useCallback)(e=>{if(!t)return()=>{};let{unsubscribe:n}=t.subscribe(e);return n},[t]),u=(0,r.useCallback)(()=>t?.getSnapshot(),[t]);return(0,i.useSyncExternalStoreWithSelector)(s,u,u,e,n)}n(7364)},2951:function(t,e,n){let r;function i(t,e,n){let r="object"==typeof t,i=r?t:void 0;return{next:(r?t.next:t)?.bind(i),error:(r?t.error:e)?.bind(i),complete:(r?t.complete:n)?.bind(i)}}n.d(e,{a:()=>x});let o=[],{link:a,unlink:s,propagate:u,checkDirty:l,endTracking:c,startTracking:f,shallowPropagate:d}=function({update:t,notify:e,unwatched:n}){return{link:function(t,e){let n,r=e._depsTail;if(void 0!==r&&r.dep===t)return;let i=4&e._flags;if(i&&void 0!==(n=void 0!==r?r.nextDep:e._deps)&&n.dep===t){e._depsTail=n;return}let a=t._subsTail;if(void 0!==a&&a.sub===e&&(!i||o(a,e)))return;let s=e._depsTail=t._subsTail={dep:t,sub:e,prevDep:r,nextDep:n,prevSub:a,nextSub:void 0};void 0!==n&&(n.prevDep=s),void 0!==r?r.nextDep=s:e._deps=s,void 0!==a?a.nextSub=s:t._subs=s},unlink:r,propagate:function(t){let n,r=t.nextSub;t:for(;;){let i=t.sub,a=i._flags;if(3&a&&(60&a?12&a?4&a?!(48&a)&&o(t,i)?(i._flags=40|a,a&=1):a=0:i._flags=-9&a|32:a=0:i._flags=32|a,2&a&&e(i),1&a)){let e=i._subs;if(void 0!==e){t=e,void 0!==e.nextSub&&(n={value:r,prev:n},r=t.nextSub);continue}}if(void 0!==(t=r)){r=t.nextSub;continue}for(;void 0!==n;)if(t=n.value,n=n.prev,void 0!==t){r=t.nextSub;continue t}break}},checkDirty:function(e,n){let r,o=0;t:for(;;){let a=e.dep,s=a._flags,u=!1;if(16&n._flags)u=!0;else if((17&s)==17){if(t(a)){let t=a._subs;void 0!==t.nextSub&&i(t),u=!0}}else if((33&s)==33){(void 0!==e.nextSub||void 0!==e.prevSub)&&(r={value:e,prev:r}),e=a._deps,n=a,++o;continue}if(!u&&void 0!==e.nextDep){e=e.nextDep;continue}for(;o;){--o;let a=n._subs,s=void 0!==a.nextSub;if(s?(e=r.value,r=r.prev):e=a,u){if(t(n)){s&&i(a),n=e.sub;continue}}else n._flags&=-33;if(n=e.sub,void 0!==e.nextDep){e=e.nextDep;continue t}u=!1}return u}},endTracking:function(t){let e=t._depsTail,n=void 0!==e?e.nextDep:t._deps;for(;void 0!==n;)n=r(n,t);t._flags&=-5},startTracking:function(t){t._depsTail=void 0,t._flags=-57&t._flags|4},shallowPropagate:i};function r(t,e=t.sub){let i=t.dep,o=t.prevDep,a=t.nextDep,s=t.nextSub,u=t.prevSub;return void 0!==a?a.prevDep=o:e._depsTail=o,void 0!==o?o.nextDep=a:e._deps=a,void 0!==s?s.prevSub=u:i._subsTail=u,void 0!==u?u.nextSub=s:void 0===(i._subs=s)&&n(i),a}function i(t){do{let n=t.sub,r=t.nextSub,i=n._flags;(48&i)==32&&(n._flags=16|i,2&i&&e(n)),t=r}while(void 0!==t)}function o(t,e){let n=e._depsTail;if(void 0!==n){let r=e._deps;do{if(r===t)return!0;if(r===n)break;r=r.nextDep}while(void 0!==r)}return!1}}({update:t=>t._update(),notify(t){o[h++]=t},unwatched(t){let e=t._deps;if(void 0!==e){t._flags=17;do e=s(e,t);while(void 0!==e)}}}),p=0,h=0;function m(t,e){let n="function"==typeof t,s={_snapshot:n?void 0:t,_subs:void 0,_subsTail:void 0,_flags:0,get:()=>(void 0!==r&&a(s,r),s._snapshot),subscribe(t){let e=i(t),n={current:!1},o=function(t){let e=()=>{let e=r;r=n,f(n);try{return t()}finally{r=e,c(n)}},n={_deps:void 0,_depsTail:void 0,_flags:2,notify(){let t=this._flags;16&t||32&t&&l(this._deps,this)?e():32&t&&(this._flags=-33&t)},stop(){f(this),c(this)}};return e(),n}(()=>{s.get(),n.current?e.next?.(s._snapshot):n.current=!0});return{unsubscribe:()=>{o.stop()}}},_update(i){let o=r,a=e?.compare??Object.is;r=s,f(s);try{let e=s._snapshot,r="function"==typeof i?i(e):void 0===i&&n?t(t=>t.get()):i;if(void 0===e||!a(e,r))return s._snapshot=r,!0;return!1}finally{r=o,c(s)}}};return n?Object.assign(s,{_deps:void 0,_depsTail:void 0,_flags:17,get(){let t=this._flags;if(16&t||32&t&&l(s._deps,s)){if(s._update()){let t=s._subs;void 0!==t&&d(t)}}else 32&t&&(s._flags=-33&t);return void 0!==r&&a(s,r),s._snapshot}}):Object.assign(s,{set(t){if(s._update(t)){let t=s._subs;if(void 0!==t){for(u(t),d(t);p<h;){let t=o[p];o[p++]=void 0,t.notify()}p=0,h=0}}}}),s}let g="function"==typeof Symbol&&Symbol.observable||"@@observable",y=new WeakMap;function v(t,e){let n,r=t.getInitialSnapshot(),o=r,a=m(o),s=t=>{if(!n)return;let e=t.type,r=n.get(e);r&&r.forEach(e=>e(t))},u=t.transition,l={get _snapshot(){return a._snapshot},on(t,e){n||(n=new Map);let r=n.get(t);r||(r=new Set,n.set(t,r));let i=e.bind(void 0);return r.add(i),{unsubscribe(){r.delete(i)}}},transition:t.transition,sessionId:Math.random().toString(36).slice(6),send(t){let n;y.get(l)?.forEach(e=>{e.next?.({type:"@xstate.event",event:t,sourceRef:void 0,actorRef:l,rootId:l.sessionId})});for(let r of([o,n]=u(o,t),y.get(l)?.forEach(e=>{e.next?.({type:"@xstate.snapshot",event:t,snapshot:o,actorRef:l,rootId:l.sessionId})}),a.set(o),n))"function"==typeof r?r():(e?.[r.type]?.(r),s(r))},getSnapshot:()=>o,get:()=>a.get(),getInitialSnapshot:()=>r,subscribe:a.subscribe.bind(a),[g](){return this},inspect:t=>{let e=i(t);return y.set(l,y.get(l)??new Set),y.get(l).add(e),e.next?.({type:"@xstate.actor",actorRef:l,rootId:l.sessionId}),e.next?.({type:"@xstate.snapshot",snapshot:r,event:{type:"@xstate.init"},actorRef:l,rootId:l.sessionId}),{unsubscribe:()=>y.get(l)?.delete(e)}},trigger:new Proxy({},{get:(t,e)=>t=>{l.send({type:e,...t})}}),select:(t,e=Object.is)=>m(()=>t(l.get().context),{compare:e})};return l}function x(t){var e,n;if("transition"in t)return v(t);return v({getInitialSnapshot:()=>({status:"active",context:t.context,output:void 0,error:void 0}),transition:(e=t.on,(t,n)=>{let r=t.context,i=e?.[n.type],o=[],a={emit:new Proxy({},{get:(t,e)=>t=>{o.push({...t,type:e})}}),effect:t=>{o.push(t)}};if(!i)return[t,o];if("function"==typeof i){let t;r=(t=r,Object.assign({},r,i?.(t,n,a)))}else{let t={};for(let e of Object.keys(i)){let o=i[e];t[e]="function"==typeof o?o(r,n,a):o}r=Object.assign({},r,t)}return[{...t,context:r},o]})},t.emits)}},1018:function(t,e,n){n.d(e,{v9:()=>o});var r=n(8446);function i(t,e){return t===e}function o(t,e,n=i){let a=function(t,e){let n=(0,r.useRef)(void 0);return r=>{let i=t(r);return n.current&&e(n.current,i)?n.current:n.current=i}}(e,n);return(0,r.useSyncExternalStore)((0,r.useCallback)(e=>t.subscribe(e).unsubscribe,[t]),()=>a(t.get()),()=>a(t.get()))}},1842:function(t,e,n){function r(t){return function(e,n){return t.chain(e,function(e){return t.map(n(e),function(){return e})})}}n.d(e,{ij:()=>y,G:()=>l,YP:()=>u,g_:()=>g});var i,o=n(2679);function a(t){return function(e,n){return t.map(e,function(){return n})}}var s=n(875),u=s.YP,l=s.G,c=function(t,e){return(0,o.zG)(t,d(e))},f="Option",d=function(t){return function(e){return m(e)?u:l(t(e.value))}},p={URI:f,map:c};(0,o.OB)(2,a(p)),a(p);var h={URI:f,map:c,ap:function(t,e){var n;return(0,o.zG)(t,(n=e,function(t){return m(t)||m(n)?u:l(t.value(n.value))}))},chain:(0,o.OB)(2,function(t,e){return m(t)?u:e(t.value)})};(0,o.OB)(2,function(t,e){return m(t)?e():t}),s.pC;var m=function(t){return"None"===t._tag},g=function(t,e){return function(n){return m(n)?t():e(n.value)}};r(h),i={URI:f,fromEither:function(t){return"Left"===t._tag?u:l(t.right)}},r(h);var y=function(t){return null==t?u:l(t)};s.F4,s.Xl},7625:function(t,e,n){n.d(e,{Zt:()=>i});var r=n(2679),i=function(t){return{equals:function(e,n){return e===n||0===t(e,n)},compare:function(e,n){return e===n?0:t(e,n)}}};r.W8},5792:function(t,e,n){n.d(e,{pR:()=>v,jj:()=>p,jG:()=>y,zo:()=>h,DZ:()=>g,UI:()=>m,DY:()=>d});var r=n(875),i=n(2736),o=n(7625);n(2679);var a=r.Xl,s=r.Od,u=(r.ri,r.YM);r.F4;var l=u,c=r.Gb,f=function(t){return 0===t.length},d=function(t){return function(e){return e.length<=1?e:e.slice().sort(t.compare)}},p=function(t){var e=function(e){if(1===e.length)return e;for(var n=[l(e)],r=c(e),i=function(e){n.every(function(n){return!t.equals(n,e)})&&n.push(e)},o=0;o<r.length;o++)i(r[o]);return n};return function(t){return s(t)?e(t):t}},h=function(t){return function(e){return f(e)?t:f(t)?e:e.concat(t)}},m=function(t){return function(e){return e.map(function(e){return t(e)})}},g=function(t){var e;return e=function(e,n){return t(n)},function(t){for(var n=[],i=0;i<t.length;i++){var o=e(i,t[i]);r.pC(o)&&n.push(o.value)}return n}},y=function(){return{concat:function(t,e){return f(t)?e:f(e)?t:t.concat(e)}}},v=function(t){return(0,o.Zt)(function(e,n){for(var r=e.length,o=n.length,a=Math.min(r,o),s=0;s<a;s++){var u=t.compare(e[s],n[s]);if(0!==u)return u}return i.Df.compare(r,o)})};r.F4},2679:function(t,e,n){n.d(e,{OB:()=>l,SK:()=>u,W8:()=>o,a9:()=>i,ls:()=>a,zG:()=>s});var r=function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};function i(t){return function(){return t}}var o=i(!0);function a(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return function(){return e(t.apply(this,arguments))};case 3:return function(){return n(e(t.apply(this,arguments)))};case 4:return function(){return r(n(e(t.apply(this,arguments))))};case 5:return function(){return i(r(n(e(t.apply(this,arguments)))))};case 6:return function(){return o(i(r(n(e(t.apply(this,arguments))))))};case 7:return function(){return a(o(i(r(n(e(t.apply(this,arguments)))))))};case 8:return function(){return s(a(o(i(r(n(e(t.apply(this,arguments))))))))};case 9:return function(){return u(s(a(o(i(r(n(e(t.apply(this,arguments)))))))))}}}function s(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return e(t);case 3:return n(e(t));case 4:return r(n(e(t)));case 5:return i(r(n(e(t))));case 6:return o(i(r(n(e(t)))));case 7:return a(o(i(r(n(e(t))))));case 8:return s(a(o(i(r(n(e(t)))))));case 9:return u(s(a(o(i(r(n(e(t))))))));default:for(var l=arguments[0],c=1;c<arguments.length;c++)l=arguments[c](l);return l}}var u=function(t,e){return e},l=function(t,e){var n="number"==typeof t?function(e){return e.length>=t}:t;return function(){var t=Array.from(arguments);return n(arguments)?e.apply(this,t):function(n){return e.apply(void 0,r([n],t,!1))}}}},875:function(t,e,n){n.d(e,{F4:()=>p,G:()=>a,Gb:()=>f,Od:()=>l,Xl:()=>d,YM:()=>c,YP:()=>o,nM:()=>s,pC:()=>i,r1:()=>h,ri:()=>u});var r=function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))},i=function(t){return"Some"===t._tag},o={_tag:"None"},a=function(t){return{_tag:"Some",value:t}},s=function(t){return"Left"===t._tag},u=function(t){return[t]},l=function(t){return t.length>0},c=function(t){return t[0]},f=function(t){return t.slice(1)},d=[],p={};Object.prototype.hasOwnProperty;var h=function(t){return r([t[0]],t.slice(1),!0)}},2736:function(t,e,n){n.d(e,{Df:()=>i,Eq:()=>r});var r={equals:function(t,e){return t===e}},i={equals:r.equals,compare:function(t,e){return t<e?-1:+(t>e)}};r.equals,i.compare},2093:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getApplicativeMonoid=function(t){var e=(0,r.getApplySemigroup)(t);return function(n){return{concat:e(n).concat,empty:t.of(n.empty)}}},e.getApplicativeComposition=function(t,e){var n=(0,o.getFunctorComposition)(t,e).map,a=(0,r.ap)(t,e);return{map:n,of:function(n){return t.of(e.of(n))},ap:function(t,e){return(0,i.pipe)(t,a(e))}}};var r=n(3608),i=n(3897),o=n(3506)},3608:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ap=function(t,e){return function(n){return function(r){return t.ap(t.map(r,function(t){return function(n){return e.ap(t,n)}}),n)}}},e.apFirst=function(t){return function(e){return function(n){return t.ap(t.map(n,function(t){return function(){return t}}),e)}}},e.apSecond=function(t){return function(e){return function(n){return t.ap(t.map(n,function(){return function(t){return t}}),e)}}},e.apS=function(t){return function(e,n){return function(r){return t.ap(t.map(r,function(t){return function(n){var r;return Object.assign({},t,((r={})[e]=n,r))}}),n)}}},e.getApplySemigroup=function(t){return function(e){return{concat:function(n,r){return t.ap(t.map(n,function(t){return function(n){return e.concat(t,n)}}),r)}}}},e.sequenceT=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=e.length,i=(s.has.call(l,r)||(l[r]=u(a.tuple,r-1,[])),l[r]),o=t.map(e[0],i),c=1;c<r;c++)o=t.ap(o,e[c]);return o}},e.sequenceS=function(t){return function(e){for(var n=Object.keys(e),r=n.length,i=function(t){var e=t.length;switch(e){case 1:return function(e){var n;return(n={})[t[0]]=e,n};case 2:return function(e){return function(n){var r;return(r={})[t[0]]=e,r[t[1]]=n,r}};case 3:return function(e){return function(n){return function(r){var i;return(i={})[t[0]]=e,i[t[1]]=n,i[t[2]]=r,i}}};case 4:return function(e){return function(n){return function(r){return function(i){var o;return(o={})[t[0]]=e,o[t[1]]=n,o[t[2]]=r,o[t[3]]=i,o}}}};case 5:return function(e){return function(n){return function(r){return function(i){return function(o){var a;return(a={})[t[0]]=e,a[t[1]]=n,a[t[2]]=r,a[t[3]]=i,a[t[4]]=o,a}}}}};default:return u(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var i={},o=0;o<e;o++)i[t[o]]=n[o];return i},e-1,[])}}(n),o=t.map(e[n[0]],i),a=1;a<r;a++)o=t.ap(o,e[n[a]]);return o}};var a=n(3897),s=o(n(5557));function u(t,e,n){return function(r){for(var i=Array(n.length+1),o=0;o<n.length;o++)i[o]=n[o];return i[n.length]=r,0===e?t.apply(null,i):u(t,e-1,i)}}var l={1:function(t){return[t]},2:function(t){return function(e){return[t,e]}},3:function(t){return function(e){return function(n){return[t,e,n]}}},4:function(t){return function(e){return function(n){return function(r){return[t,e,n,r]}}}},5:function(t){return function(e){return function(n){return function(r){return function(i){return[t,e,n,r,i]}}}}}}},3391:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.chainFirst=function(t){var e=n(t);return function(t){return function(n){return e(n,t)}}},e.tap=n,e.bind=function(t){return function(e,n){return function(r){return t.chain(r,function(r){return t.map(n(r),function(t){var n;return Object.assign({},r,((n={})[e]=t,n))})})}}};function n(t){return function(e,n){return t.chain(e,function(e){return t.map(n(e),function(){return e})})}}},461:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.eqDate=e.eqNumber=e.eqString=e.eqBoolean=e.eq=e.strictEqual=e.getStructEq=e.getTupleEq=e.Contravariant=e.getMonoid=e.getSemigroup=e.eqStrict=e.URI=e.contramap=e.tuple=e.struct=e.fromEquals=void 0;var r=n(3897);e.fromEquals=function(t){return{equals:function(e,n){return e===n||t(e,n)}}},e.struct=function(t){return(0,e.fromEquals)(function(e,n){for(var r in t)if(!t[r].equals(e[r],n[r]))return!1;return!0})},e.tuple=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(0,e.fromEquals)(function(e,n){return t.every(function(t,r){return t.equals(e[r],n[r])})})},e.contramap=function(t){return function(n){return(0,e.fromEquals)(function(e,r){return n.equals(t(e),t(r))})}},e.URI="Eq",e.eqStrict={equals:function(t,e){return t===e}};var i={equals:function(){return!0}};e.getSemigroup=function(){return{concat:function(t,n){return(0,e.fromEquals)(function(e,r){return t.equals(e,r)&&n.equals(e,r)})}}},e.getMonoid=function(){return{concat:(0,e.getSemigroup)().concat,empty:i}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,r.pipe)(t,(0,e.contramap)(n))}},e.getTupleEq=e.tuple,e.getStructEq=e.struct,e.strictEqual=e.eqStrict.equals,e.eq=e.Contravariant,e.eqBoolean=e.eqStrict,e.eqString=e.eqStrict,e.eqNumber=e.eqStrict,e.eqDate={equals:function(t,e){return t.valueOf()===e.valueOf()}}},1258:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.fromOption=l,e.fromPredicate=function(t){return function(e,n){return function(r){return t.fromEither(e(r)?u.right(r):u.left(n(r)))}}},e.fromOptionK=c,e.chainOptionK=function(t,e){var n=c(t);return function(t){var r=n(t);return function(t){return function(n){return e.chain(n,r(t))}}}},e.fromEitherK=f,e.chainEitherK=function(t,e){var n=f(t);return function(t){return function(r){return e.chain(r,n(t))}}},e.chainFirstEitherK=function(t,e){var n=d(t,e);return function(t){return function(e){return n(e,t)}}},e.filterOrElse=function(t,e){return function(n,r){return function(i){return e.chain(i,function(e){return t.fromEither(n(e)?u.right(e):u.left(r(e)))})}}},e.tapEither=d;var a=n(3391),s=n(3897),u=o(n(5557));function l(t){return function(e){return function(n){return t.fromEither(u.isNone(n)?u.left(e()):u.right(n.value))}}}function c(t){var e=l(t);return function(t){var n=e(t);return function(t){return(0,s.flow)(t,n)}}}function f(t){return function(e){return(0,s.flow)(e,t.fromEither)}}function d(t,e){var n=f(t),r=(0,a.tap)(e);return function(t,e){return r(t,n(e))}}},3506:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.map=i,e.flap=function(t){return function(e){return function(n){return t.map(n,function(t){return t(e)})}}},e.bindTo=function(t){return function(e){return function(n){return t.map(n,function(t){var n;return(n={})[e]=t,n})}}},e.let=function(t){return function(e,n){return function(r){return t.map(r,function(t){var r;return Object.assign({},t,((r={})[e]=n(t),r))})}}},e.getFunctorComposition=function(t,e){var n=i(t,e);return{map:function(t,e){return(0,r.pipe)(t,n(e))}}},e.as=o,e.asUnit=function(t){var e=o(t);return function(t){return e(t,void 0)}};var r=n(3897);function i(t,e){return function(n){return function(r){return t.map(r,function(t){return e.map(t,n)})}}}function o(t){return function(e,n){return t.map(e,function(){return n})}}},0:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.concatAll=e.endo=e.filterSecond=e.filterFirst=e.reverse=void 0,e.reverse=function(t){return{concat:function(e,n){return t.concat(n,e)}}},e.filterFirst=function(t){return function(e){return{concat:function(n,r){return t(n)?e.concat(n,r):r}}}},e.filterSecond=function(t){return function(e){return{concat:function(n,r){return t(r)?e.concat(n,r):n}}}},e.endo=function(t){return function(e){return{concat:function(n,r){return e.concat(t(n),t(r))}}}},e.concatAll=function(t){return function(e){return function(n){return n.reduce(function(e,n){return t.concat(e,n)},e)}}}},3334:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.throwError=e.Witherable=e.wilt=e.wither=e.Traversable=e.sequence=e.traverse=e.Filterable=e.partitionMap=e.partition=e.filterMap=e.filter=e.Compactable=e.separate=e.compact=e.Extend=e.extend=e.Alternative=e.guard=e.Zero=e.zero=e.Alt=e.alt=e.altW=e.orElse=e.Foldable=e.reduceRight=e.foldMap=e.reduce=e.Monad=e.Chain=e.flatMap=e.Applicative=e.Apply=e.ap=e.Pointed=e.of=e.asUnit=e.as=e.Functor=e.map=e.getMonoid=e.getOrd=e.getEq=e.getShow=e.URI=e.getRight=e.getLeft=e.some=e.none=void 0,e.getLastMonoid=e.getFirstMonoid=e.getApplyMonoid=e.getApplySemigroup=e.option=e.mapNullable=e.chainFirst=e.chain=e.sequenceArray=e.traverseArray=e.traverseArrayWithIndex=e.traverseReadonlyArrayWithIndex=e.traverseReadonlyNonEmptyArrayWithIndex=e.ApT=e.apS=e.bind=e.let=e.bindTo=e.Do=e.exists=e.toUndefined=e.toNullable=e.chainNullableK=e.fromNullableK=e.tryCatchK=e.tryCatch=e.fromNullable=e.chainFirstEitherK=e.chainEitherK=e.fromEitherK=e.duplicate=e.tapEither=e.tap=e.flatten=e.apSecond=e.apFirst=e.flap=e.getOrElse=e.getOrElseW=e.fold=e.match=e.foldW=e.matchW=e.isNone=e.isSome=e.FromEither=e.fromEither=e.MonadThrow=void 0,e.fromPredicate=function(t){return function(n){return t(n)?(0,e.some)(n):e.none}},e.elem=function t(n){return function(r,i){if(void 0===i){var o=t(n);return function(t){return o(r,t)}}return!(0,e.isNone)(i)&&n.equals(r,i.value)}},e.getRefinement=function(t){return function(n){return(0,e.isSome)(t(n))}};var a=n(2093),s=n(3608),u=o(n(3391)),l=n(1258),c=n(3897),f=n(3506),d=o(n(5557)),p=n(5383),h=n(4352),m=n(2036),g=n(2035),y=n(5968);e.none=d.none,e.some=d.some,e.getLeft=function(t){return"Right"===t._tag?e.none:(0,e.some)(t.left)},e.getRight=function(t){return"Left"===t._tag?e.none:(0,e.some)(t.right)};var v=function(t,n){return(0,c.pipe)(t,(0,e.map)(n))},x=function(t,n){return(0,c.pipe)(t,(0,e.ap)(n))},b=function(t,n,r){return(0,c.pipe)(t,(0,e.reduce)(n,r))},w=function(t){var n=(0,e.foldMap)(t);return function(t,e){return(0,c.pipe)(t,n(e))}},j=function(t,n,r){return(0,c.pipe)(t,(0,e.reduceRight)(n,r))},S=function(t){var n=(0,e.traverse)(t);return function(t,e){return(0,c.pipe)(t,n(e))}},_=function(t,n){return(0,c.pipe)(t,(0,e.alt)(n))},M=function(t,n){return(0,c.pipe)(t,(0,e.filter)(n))},E=function(t,n){return(0,c.pipe)(t,(0,e.filterMap)(n))},O=function(t,n){return(0,c.pipe)(t,(0,e.extend)(n))},$=function(t,n){return(0,c.pipe)(t,(0,e.partition)(n))},k=function(t,n){return(0,c.pipe)(t,(0,e.partitionMap)(n))};e.URI="Option",e.getShow=function(t){return{show:function(n){return(0,e.isNone)(n)?"none":"some(".concat(t.show(n.value),")")}}},e.getEq=function(t){return{equals:function(n,r){return n===r||((0,e.isNone)(n)?(0,e.isNone)(r):!(0,e.isNone)(r)&&t.equals(n.value,r.value))}}},e.getOrd=function(t){return{equals:(0,e.getEq)(t).equals,compare:function(n,r){return n===r?0:(0,e.isSome)(n)?(0,e.isSome)(r)?t.compare(n.value,r.value):1:-1}}},e.getMonoid=function(t){return{concat:function(n,r){return(0,e.isNone)(n)?r:(0,e.isNone)(r)?n:(0,e.some)(t.concat(n.value,r.value))},empty:e.none}},e.map=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.some)(t(n.value))}},e.Functor={URI:e.URI,map:v},e.as=(0,c.dual)(2,(0,f.as)(e.Functor)),e.asUnit=(0,f.asUnit)(e.Functor),e.of=e.some,e.Pointed={URI:e.URI,of:e.of},e.ap=function(t){return function(n){return(0,e.isNone)(n)||(0,e.isNone)(t)?e.none:(0,e.some)(n.value(t.value))}},e.Apply={URI:e.URI,map:v,ap:x},e.Applicative={URI:e.URI,map:v,ap:x,of:e.of},e.flatMap=(0,c.dual)(2,function(t,n){return(0,e.isNone)(t)?e.none:n(t.value)}),e.Chain={URI:e.URI,map:v,ap:x,chain:e.flatMap},e.Monad={URI:e.URI,map:v,ap:x,of:e.of,chain:e.flatMap},e.reduce=function(t,n){return function(r){return(0,e.isNone)(r)?t:n(t,r.value)}},e.foldMap=function(t){return function(n){return function(r){return(0,e.isNone)(r)?t.empty:n(r.value)}}},e.reduceRight=function(t,n){return function(r){return(0,e.isNone)(r)?t:n(r.value,t)}},e.Foldable={URI:e.URI,reduce:b,foldMap:w,reduceRight:j},e.orElse=(0,c.dual)(2,function(t,n){return(0,e.isNone)(t)?n():t}),e.altW=e.orElse,e.alt=e.orElse,e.Alt={URI:e.URI,map:v,alt:_},e.zero=function(){return e.none},e.Zero={URI:e.URI,zero:e.zero},e.guard=(0,y.guard)(e.Zero,e.Pointed),e.Alternative={URI:e.URI,map:v,ap:x,of:e.of,alt:_,zero:e.zero},e.extend=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.some)(t(n))}},e.Extend={URI:e.URI,map:v,extend:O},e.compact=(0,e.flatMap)(c.identity);var R=(0,m.separated)(e.none,e.none);e.separate=function(t){return(0,e.isNone)(t)?R:(0,m.separated)((0,e.getLeft)(t.value),(0,e.getRight)(t.value))},e.Compactable={URI:e.URI,compact:e.compact,separate:e.separate},e.filter=function(t){return function(n){return(0,e.isNone)(n)?e.none:t(n.value)?n:e.none}},e.filterMap=function(t){return function(n){return(0,e.isNone)(n)?e.none:t(n.value)}},e.partition=function(t){return function(e){return(0,m.separated)(M(e,(0,p.not)(t)),M(e,t))}},e.partitionMap=function(t){return(0,c.flow)((0,e.map)(t),e.separate)},e.Filterable={URI:e.URI,map:v,compact:e.compact,separate:e.separate,filter:M,filterMap:E,partition:$,partitionMap:k},e.traverse=function(t){return function(n){return function(r){return(0,e.isNone)(r)?t.of(e.none):t.map(n(r.value),e.some)}}},e.sequence=function(t){return function(n){return(0,e.isNone)(n)?t.of(e.none):t.map(n.value,e.some)}},e.Traversable={URI:e.URI,map:v,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence};var N=(0,g.witherDefault)(e.Traversable,e.Compactable),I=(0,g.wiltDefault)(e.Traversable,e.Compactable);e.wither=function(t){var e=N(t);return function(t){return function(n){return e(n,t)}}},e.wilt=function(t){var e=I(t);return function(t){return function(n){return e(n,t)}}},e.Witherable={URI:e.URI,map:v,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence,compact:e.compact,separate:e.separate,filter:M,filterMap:E,partition:$,partitionMap:k,wither:N,wilt:I},e.throwError=function(){return e.none},e.MonadThrow={URI:e.URI,map:v,ap:x,of:e.of,chain:e.flatMap,throwError:e.throwError},e.fromEither=e.getRight,e.FromEither={URI:e.URI,fromEither:e.fromEither},e.isSome=d.isSome,e.isNone=function(t){return"None"===t._tag},e.matchW=function(t,n){return function(r){return(0,e.isNone)(r)?t():n(r.value)}},e.foldW=e.matchW,e.match=e.matchW,e.fold=e.match,e.getOrElseW=function(t){return function(n){return(0,e.isNone)(n)?t():n.value}},e.getOrElse=e.getOrElseW,e.flap=(0,f.flap)(e.Functor),e.apFirst=(0,s.apFirst)(e.Apply),e.apSecond=(0,s.apSecond)(e.Apply),e.flatten=e.compact,e.tap=(0,c.dual)(2,u.tap(e.Chain)),e.tapEither=(0,c.dual)(2,(0,l.tapEither)(e.FromEither,e.Chain)),e.duplicate=(0,e.extend)(c.identity),e.fromEitherK=(0,l.fromEitherK)(e.FromEither),e.chainEitherK=(0,l.chainEitherK)(e.FromEither,e.Chain),e.chainFirstEitherK=e.tapEither,e.fromNullable=function(t){return null==t?e.none:(0,e.some)(t)},e.tryCatch=function(t){try{return(0,e.some)(t())}catch(t){return e.none}},e.tryCatchK=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(0,e.tryCatch)(function(){return t.apply(void 0,n)})}},e.fromNullableK=function(t){return(0,c.flow)(t,e.fromNullable)},e.chainNullableK=function(t){return function(n){return(0,e.isNone)(n)?e.none:(0,e.fromNullable)(t(n.value))}},e.toNullable=(0,e.match)(c.constNull,c.identity),e.toUndefined=(0,e.match)(c.constUndefined,c.identity),e.exists=function(t){return function(n){return!(0,e.isNone)(n)&&t(n.value)}},e.Do=(0,e.of)(d.emptyRecord),e.bindTo=(0,f.bindTo)(e.Functor);var D=(0,f.let)(e.Functor);e.let=D,e.bind=u.bind(e.Chain),e.apS=(0,s.apS)(e.Apply),e.ApT=(0,e.of)(d.emptyReadonlyArray),e.traverseReadonlyNonEmptyArrayWithIndex=function(t){return function(n){var r=t(0,d.head(n));if((0,e.isNone)(r))return e.none;for(var i=[r.value],o=1;o<n.length;o++){var a=t(o,n[o]);if((0,e.isNone)(a))return e.none;i.push(a.value)}return(0,e.some)(i)}},e.traverseReadonlyArrayWithIndex=function(t){var n=(0,e.traverseReadonlyNonEmptyArrayWithIndex)(t);return function(t){return d.isNonEmpty(t)?n(t):e.ApT}},e.traverseArrayWithIndex=e.traverseReadonlyArrayWithIndex,e.traverseArray=function(t){return(0,e.traverseReadonlyArrayWithIndex)(function(e,n){return t(n)})},e.sequenceArray=(0,e.traverseArray)(c.identity),e.chain=e.flatMap,e.chainFirst=e.tap,e.mapNullable=e.chainNullableK,e.option={URI:e.URI,map:v,of:e.of,ap:x,chain:e.flatMap,reduce:b,foldMap:w,reduceRight:j,traverse:S,sequence:e.sequence,zero:e.zero,alt:_,extend:O,compact:e.compact,separate:e.separate,filter:M,filterMap:E,partition:$,partitionMap:k,wither:N,wilt:I,throwError:e.throwError},e.getApplySemigroup=(0,s.getApplySemigroup)(e.Apply),e.getApplyMonoid=(0,a.getApplicativeMonoid)(e.Applicative),e.getFirstMonoid=function(){return(0,e.getMonoid)((0,h.first)())},e.getLastMonoid=function(){return(0,e.getMonoid)((0,h.last)())}},1352:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ordDate=e.ordNumber=e.ordString=e.ordBoolean=e.ord=e.getDualOrd=e.getTupleOrd=e.between=e.clamp=e.max=e.min=e.geq=e.leq=e.gt=e.lt=e.equals=e.trivial=e.Contravariant=e.getMonoid=e.getSemigroup=e.URI=e.contramap=e.reverse=e.tuple=e.fromCompare=e.equalsDefault=void 0;var r=n(461),i=n(3897);e.equalsDefault=function(t){return function(e,n){return e===n||0===t(e,n)}},e.fromCompare=function(t){return{equals:(0,e.equalsDefault)(t),compare:function(e,n){return e===n?0:t(e,n)}}},e.tuple=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(0,e.fromCompare)(function(e,n){for(var r=0;r<t.length-1;r++){var i=t[r].compare(e[r],n[r]);if(0!==i)return i}return t[r].compare(e[r],n[r])})},e.reverse=function(t){return(0,e.fromCompare)(function(e,n){return t.compare(n,e)})},e.contramap=function(t){return function(n){return(0,e.fromCompare)(function(e,r){return n.compare(t(e),t(r))})}},e.URI="Ord",e.getSemigroup=function(){return{concat:function(t,n){return(0,e.fromCompare)(function(e,r){var i=t.compare(e,r);return 0!==i?i:n.compare(e,r)})}}},e.getMonoid=function(){return{concat:(0,e.getSemigroup)().concat,empty:(0,e.fromCompare)(function(){return 0})}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,i.pipe)(t,(0,e.contramap)(n))}},e.trivial={equals:i.constTrue,compare:(0,i.constant)(0)},e.equals=function(t){return function(e){return function(n){return n===e||0===t.compare(n,e)}}},e.lt=function(t){return function(e,n){return -1===t.compare(e,n)}},e.gt=function(t){return function(e,n){return 1===t.compare(e,n)}},e.leq=function(t){return function(e,n){return 1!==t.compare(e,n)}},e.geq=function(t){return function(e,n){return -1!==t.compare(e,n)}},e.min=function(t){return function(e,n){return e===n||1>t.compare(e,n)?e:n}},e.max=function(t){return function(e,n){return e===n||t.compare(e,n)>-1?e:n}},e.clamp=function(t){var n=(0,e.min)(t),r=(0,e.max)(t);return function(t,e){return function(i){return r(n(i,e),t)}}},e.between=function(t){var n=(0,e.lt)(t),r=(0,e.gt)(t);return function(t,e){return function(i){return!(n(i,t)||r(i,e))}}},e.getTupleOrd=e.tuple,e.getDualOrd=e.reverse,e.ord=e.Contravariant;var o={equals:r.eqStrict.equals,compare:function(t,e){return t<e?-1:+(t>e)}};e.ordBoolean=o,e.ordString=o,e.ordNumber=o,e.ordDate=(0,i.pipe)(e.ordNumber,(0,e.contramap)(function(t){return t.valueOf()}))},5383:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.and=e.or=e.not=e.Contravariant=e.getMonoidAll=e.getSemigroupAll=e.getMonoidAny=e.getSemigroupAny=e.URI=e.contramap=void 0;var r=n(3897);e.contramap=function(t){return function(e){return(0,r.flow)(t,e)}},e.URI="Predicate",e.getSemigroupAny=function(){return{concat:function(t,n){return(0,r.pipe)(t,(0,e.or)(n))}}},e.getMonoidAny=function(){return{concat:(0,e.getSemigroupAny)().concat,empty:r.constFalse}},e.getSemigroupAll=function(){return{concat:function(t,n){return(0,r.pipe)(t,(0,e.and)(n))}}},e.getMonoidAll=function(){return{concat:(0,e.getSemigroupAll)().concat,empty:r.constTrue}},e.Contravariant={URI:e.URI,contramap:function(t,n){return(0,r.pipe)(t,(0,e.contramap)(n))}},e.not=function(t){return function(e){return!t(e)}},e.or=function(t){return function(e){return function(n){return e(n)||t(n)}}},e.and=function(t){return function(e){return function(n){return e(n)&&t(n)}}}},4352:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.semigroupProduct=e.semigroupSum=e.semigroupString=e.getFunctionSemigroup=e.semigroupAny=e.semigroupAll=e.getIntercalateSemigroup=e.getMeetSemigroup=e.getJoinSemigroup=e.getDualSemigroup=e.getStructSemigroup=e.getTupleSemigroup=e.getFirstSemigroup=e.getLastSemigroup=e.getObjectSemigroup=e.semigroupVoid=e.concatAll=e.last=e.first=e.intercalate=e.tuple=e.struct=e.reverse=e.constant=e.max=e.min=void 0,e.fold=function(t){var n=(0,e.concatAll)(t);return function(t,e){return void 0===e?n(t):n(t)(e)}};var a=n(3897),s=o(n(5557)),u=o(n(0)),l=o(n(1352));e.min=function(t){return{concat:l.min(t)}},e.max=function(t){return{concat:l.max(t)}},e.constant=function(t){return{concat:function(){return t}}},e.reverse=u.reverse,e.struct=function(t){return{concat:function(e,n){var r={};for(var i in t)s.has.call(t,i)&&(r[i]=t[i].concat(e[i],n[i]));return r}}},e.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return{concat:function(e,n){return t.map(function(t,r){return t.concat(e[r],n[r])})}}},e.intercalate=function(t){return function(e){return{concat:function(n,r){return e.concat(n,e.concat(t,r))}}}},e.first=function(){return{concat:a.identity}},e.last=function(){return{concat:function(t,e){return e}}},e.concatAll=u.concatAll,e.semigroupVoid=(0,e.constant)(void 0),e.getObjectSemigroup=function(){return{concat:function(t,e){return Object.assign({},t,e)}}},e.getLastSemigroup=e.last,e.getFirstSemigroup=e.first,e.getTupleSemigroup=e.tuple,e.getStructSemigroup=e.struct,e.getDualSemigroup=e.reverse,e.getJoinSemigroup=e.max,e.getMeetSemigroup=e.min,e.getIntercalateSemigroup=e.intercalate,e.semigroupAll={concat:function(t,e){return t&&e}},e.semigroupAny={concat:function(t,e){return t||e}},e.getFunctionSemigroup=a.getSemigroup,e.semigroupString={concat:function(t,e){return t+e}},e.semigroupSum={concat:function(t,e){return t+e}},e.semigroupProduct={concat:function(t,e){return t*e}}},2036:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.right=e.left=e.flap=e.Functor=e.Bifunctor=e.URI=e.bimap=e.mapLeft=e.map=e.separated=void 0;var r=n(3897),i=n(3506);e.separated=function(t,e){return{left:t,right:e}},e.map=function(t){return function(n){return(0,e.separated)((0,e.left)(n),t((0,e.right)(n)))}},e.mapLeft=function(t){return function(n){return(0,e.separated)(t((0,e.left)(n)),(0,e.right)(n))}},e.bimap=function(t,n){return function(r){return(0,e.separated)(t((0,e.left)(r)),n((0,e.right)(r)))}},e.URI="Separated",e.Bifunctor={URI:e.URI,mapLeft:function(t,n){return(0,r.pipe)(t,(0,e.mapLeft)(n))},bimap:function(t,n,i){return(0,r.pipe)(t,(0,e.bimap)(n,i))}},e.Functor={URI:e.URI,map:function(t,n){return(0,r.pipe)(t,(0,e.map)(n))}},e.flap=(0,i.flap)(e.Functor),e.left=function(t){return t.left},e.right=function(t){return t.right}},2035:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.wiltDefault=function(t,e){return function(n){var r=t.traverse(n);return function(t,i){return n.map(r(t,i),e.separate)}}},e.witherDefault=function(t,e){return function(n){var r=t.traverse(n);return function(t,i){return n.map(r(t,i),e.compact)}}},e.filterE=function(t){return function(e){var n=t.wither(e);return function(t){return function(r){return n(r,function(n){return e.map(t(n),function(t){return t?a.some(n):a.none})})}}}};var a=o(n(5557))},5968:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.guard=function(t,e){return function(n){return n?e.of(void 0):t.zero()}}},3897:function(t,e){var n=this&&this.__spreadArray||function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};function r(t){return t}function i(t){return function(){return t}}function o(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return function(){return e(t.apply(this,arguments))};case 3:return function(){return n(e(t.apply(this,arguments)))};case 4:return function(){return r(n(e(t.apply(this,arguments))))};case 5:return function(){return i(r(n(e(t.apply(this,arguments)))))};case 6:return function(){return o(i(r(n(e(t.apply(this,arguments))))))};case 7:return function(){return a(o(i(r(n(e(t.apply(this,arguments)))))))};case 8:return function(){return s(a(o(i(r(n(e(t.apply(this,arguments))))))))};case 9:return function(){return u(s(a(o(i(r(n(e(t.apply(this,arguments)))))))))}}}function a(t){throw Error("Called `absurd` function which should be uncallable")}Object.defineProperty(e,"__esModule",{value:!0}),e.dual=e.getEndomorphismMonoid=e.SK=e.hole=e.constVoid=e.constUndefined=e.constNull=e.constFalse=e.constTrue=e.unsafeCoerce=e.apply=e.getRing=e.getSemiring=e.getMonoid=e.getSemigroup=e.getBooleanAlgebra=void 0,e.identity=r,e.constant=i,e.flip=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length>1?t(e[1],e[0]):function(n){return t(n)(e[0])}}},e.flow=o,e.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t},e.increment=function(t){return t+1},e.decrement=function(t){return t-1},e.absurd=a,e.tupled=function(t){return function(e){return t.apply(void 0,e)}},e.untupled=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t(e)}},e.pipe=function(t,e,n,r,i,o,a,s,u){switch(arguments.length){case 1:return t;case 2:return e(t);case 3:return n(e(t));case 4:return r(n(e(t)));case 5:return i(r(n(e(t))));case 6:return o(i(r(n(e(t)))));case 7:return a(o(i(r(n(e(t))))));case 8:return s(a(o(i(r(n(e(t)))))));case 9:return u(s(a(o(i(r(n(e(t))))))));default:for(var l=arguments[0],c=1;c<arguments.length;c++)l=arguments[c](l);return l}},e.not=function(t){return function(e){return!t(e)}},e.getBooleanAlgebra=function(t){return function(){return{meet:function(e,n){return function(r){return t.meet(e(r),n(r))}},join:function(e,n){return function(r){return t.join(e(r),n(r))}},zero:function(){return t.zero},one:function(){return t.one},implies:function(e,n){return function(r){return t.implies(e(r),n(r))}},not:function(e){return function(n){return t.not(e(n))}}}}},e.getSemigroup=function(t){return function(){return{concat:function(e,n){return function(r){return t.concat(e(r),n(r))}}}}},e.getMonoid=function(t){var n=(0,e.getSemigroup)(t);return function(){return{concat:n().concat,empty:function(){return t.empty}}}},e.getSemiring=function(t){return{add:function(e,n){return function(r){return t.add(e(r),n(r))}},zero:function(){return t.zero},mul:function(e,n){return function(r){return t.mul(e(r),n(r))}},one:function(){return t.one}}},e.getRing=function(t){var n=(0,e.getSemiring)(t);return{add:n.add,mul:n.mul,one:n.one,zero:n.zero,sub:function(e,n){return function(r){return t.sub(e(r),n(r))}}}},e.apply=function(t){return function(e){return e(t)}},e.unsafeCoerce=r,e.constTrue=i(!0),e.constFalse=i(!1),e.constNull=i(null),e.constUndefined=i(void 0),e.constVoid=e.constUndefined,e.hole=a,e.SK=function(t,e){return e},e.getEndomorphismMonoid=function(){return{concat:function(t,e){return o(t,e)},empty:r}},e.dual=function(t,e){var r="number"==typeof t?function(e){return e.length>=t}:t;return function(){var t=Array.from(arguments);return r(arguments)?e.apply(this,t):function(r){return e.apply(void 0,n([r],t,!1))}}}},5557:function(t,e,n){var r=this&&this.__spreadArray||function(t,e,n){if(n||2==arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.flatMapReader=e.flatMapTask=e.flatMapIO=e.flatMapEither=e.flatMapOption=e.flatMapNullable=e.liftOption=e.liftNullable=e.fromReadonlyNonEmptyArray=e.has=e.emptyRecord=e.emptyReadonlyArray=e.tail=e.head=e.isNonEmpty=e.singleton=e.right=e.left=e.isRight=e.isLeft=e.some=e.none=e.isSome=e.isNone=void 0;var i=n(3897);e.isNone=function(t){return"None"===t._tag},e.isSome=function(t){return"Some"===t._tag},e.none={_tag:"None"},e.some=function(t){return{_tag:"Some",value:t}},e.isLeft=function(t){return"Left"===t._tag},e.isRight=function(t){return"Right"===t._tag},e.left=function(t){return{_tag:"Left",left:t}},e.right=function(t){return{_tag:"Right",right:t}},e.singleton=function(t){return[t]},e.isNonEmpty=function(t){return t.length>0},e.head=function(t){return t[0]},e.tail=function(t){return t.slice(1)},e.emptyReadonlyArray=[],e.emptyRecord={},e.has=Object.prototype.hasOwnProperty,e.fromReadonlyNonEmptyArray=function(t){return r([t[0]],t.slice(1),!0)},e.liftNullable=function(t){return function(n,r){return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var a=n.apply(void 0,i);return t.fromEither(null==a?(0,e.left)(r.apply(void 0,i)):(0,e.right)(a))}}},e.liftOption=function(t){return function(n,r){return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var a=n.apply(void 0,i);return t.fromEither((0,e.isNone)(a)?(0,e.left)(r.apply(void 0,i)):(0,e.right)(a.value))}}},e.flatMapNullable=function(t,n){return(0,i.dual)(3,function(r,i,o){return n.flatMap(r,(0,e.liftNullable)(t)(i,o))})},e.flatMapOption=function(t,n){return(0,i.dual)(3,function(r,i,o){return n.flatMap(r,(0,e.liftOption)(t)(i,o))})},e.flatMapEither=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromEither(r(e))})})},e.flatMapIO=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromIO(r(e))})})},e.flatMapTask=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromTask(r(e))})})},e.flatMapReader=function(t,e){return(0,i.dual)(2,function(n,r){return e.flatMap(n,function(e){return t.fromReader(r(e))})})}},3211:function(t,e,n){var r=n(8446),i="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,u=r.useDebugValue;function l(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!i(t,n)}catch(t){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=o({inst:{value:n,getSnapshot:e}}),i=r[0].inst,c=r[1];return s(function(){i.value=n,i.getSnapshot=e,l(i)&&c({inst:i})},[t,n,e]),a(function(){return l(i)&&c({inst:i}),t(function(){l(i)&&c({inst:i})})},[t]),u(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},9206:function(t,e,n){var r=n(8446),i=n(7364),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=i.useSyncExternalStore,s=r.useRef,u=r.useEffect,l=r.useMemo,c=r.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=a(t,(f=l(function(){function t(t){if(!u){if(u=!0,a=t,t=r(t),void 0!==i&&d.hasValue){var e=d.value;if(i(e,t))return s=e}return s=t}if(e=s,o(a,t))return e;var n=r(t);return void 0!==i&&i(e,n)?(a=t,e):(a=t,s=n)}var a,s,u=!1,l=void 0===n?null:n;return[function(){return t(e())},null===l?void 0:function(){return t(l())}]},[e,n,r,i]))[0],f[1]);return u(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},7364:function(t,e,n){t.exports=n(3211)},6757:function(t,e,n){t.exports=n(9206)},8895:function(t,e,n){n.d(e,{p4:()=>u});var r,i=n(7984);let o="xstate.promise.resolve",a="xstate.promise.reject",s=new WeakMap;function u(t){return{config:t,transition:(t,e,n)=>{if("active"!==t.status)return t;switch(e.type){case o:{let n=e.data;return{...t,status:"done",output:n,input:void 0}}case a:return{...t,status:"error",error:e.data,input:void 0};case i.X:return s.get(n.self)?.abort(),{...t,status:"stopped",input:void 0};default:return t}},start:(e,{self:n,system:r,emit:i})=>{if("active"!==e.status)return;let u=new AbortController;s.set(n,u),Promise.resolve(t({input:e.input,system:r,self:n,signal:u.signal,emit:i})).then(t=>{"active"===n.getSnapshot().status&&(s.delete(n),r._relay(n,n,{type:o,data:t}))},t=>{"active"===n.getSnapshot().status&&(s.delete(n),r._relay(n,n,{type:a,data:t}))})},getInitialSnapshot:(t,e)=>({status:"active",output:void 0,error:void 0,input:e}),getPersistedSnapshot:t=>t,restoreSnapshot:t=>t}}r=void 0,t=>t},5497:function(t,e,n){n.d(e,{a:()=>m,e:()=>u});var r,i=n(7984),o=n(9908);function a(t,e,n,r,{event:i}){return[e,{event:"function"==typeof i?i(n,r):i},void 0]}function s(t,{event:e}){t.defer(()=>t.emit(e))}function u(t){function e(t,e){}return e.type="xstate.emit",e.event=t,e.resolve=a,e.execute=s,e}let l=((r={}).Parent="#_parent",r.Internal="#_internal",r);function c(t,e,n,r,{to:i,event:o,id:a,delay:s},u){let c,f,d=e.machine.implementations.delays;if("string"==typeof o)throw Error(`Only event objects may be used with sendTo; use sendTo({ type: "${o}" }) instead`);let p="function"==typeof o?o(n,r):o;if("string"==typeof s){let t=d&&d[s];c="function"==typeof t?t(n,r):t}else c="function"==typeof s?s(n,r):s;let h="function"==typeof i?i(n,r):i;if("string"==typeof h){if(!(f=h===l.Parent?t.self._parent:h===l.Internal?t.self:h.startsWith("#_")?e.children[h.slice(2)]:u.deferredActorIds?.includes(h)?h:e.children[h]))throw Error(`Unable to send event to actor '${h}' from machine '${e.machine.id}'.`)}else f=h||t.self;return[e,{to:f,targetId:"string"==typeof h?h:void 0,event:p,id:a,delay:c},void 0]}function f(t,e,n){"string"==typeof n.to&&(n.to=e.children[n.to])}function d(t,e){t.defer(()=>{let{to:n,event:r,delay:o,id:a}=e;if("number"==typeof o)return void t.system.scheduler.schedule(t.self,n,r,o,a);t.system._relay(t.self,n,r.type===i.T?(0,i.U)(t.self.id,r.data):r)})}function p(t,e,n){function r(t,e){}return r.type="xstate.sendTo",r.to=t,r.event=e,r.id=n?.id,r.delay=n?.delay,r.resolve=c,r.retryResolve=f,r.execute=d,r}function h(t,e,n,r,{collect:a}){let s=[],c=function(t){s.push(t)};return c.assign=(...t)=>{s.push((0,o.a)(...t))},c.cancel=(...t)=>{s.push((0,i.f)(...t))},c.raise=(...t)=>{s.push((0,i.r)(...t))},c.sendTo=(...t)=>{s.push(p(...t))},c.sendParent=(...t)=>{s.push(function(t,e){return p(l.Parent,t,e)}(...t))},c.spawnChild=(...t)=>{s.push((0,i.h)(...t))},c.stopChild=(...t)=>{s.push((0,i.k)(...t))},c.emit=(...t)=>{s.push(u(...t))},a({context:n.context,event:n.event,enqueue:c,check:t=>(0,i.w)(t,e.context,n.event,e),self:t.self,system:t.system},r),[e,void 0,s]}function m(t){function e(t,e){}return e.type="xstate.enqueueActions",e.collect=t,e.resolve=h,e}},7984:function(t,e,n){n.d(e,{$:()=>R,B:()=>tr,C:()=>tO,D:()=>J,E:()=>tD,F:()=>te,G:()=>t_,H:()=>function t(e,n,r,i){if("string"==typeof n){let t=td(e,n).next(r,i);return t&&t.length?t:e.next(r,i)}if(1===Object.keys(n).length){let o=Object.keys(n),a=t(td(e,o[0]),n[o[0]],r,i);return a&&a.length?a:e.next(r,i)}let o=[];for(let a of Object.keys(n)){let s=n[a];if(!s)continue;let u=t(td(e,a),s,r,i);u&&o.push(...u)}return o.length?o:e.next(r,i)},I:()=>tS,J:()=>p,K:()=>tb,L:()=>tf,M:()=>g,N:()=>s,O:()=>tn,P:()=>tp,Q:()=>tT,R:()=>E,S:()=>a,T:()=>l,U:()=>d,V:()=>N,W:()=>tA,X:()=>c,a:()=>Y,c:()=>A,f:()=>z,g:()=>th,h:()=>U,k:()=>W,l:()=>v,n:()=>G,q:()=>ta,r:()=>tL,t:()=>x,u:()=>j,v:()=>to,w:()=>B,x:()=>M,y:()=>ti,z:()=>ts});var r,i=n(6474);class o{constructor(t){this._process=t,this._active=!1,this._current=null,this._last=null}start(){this._active=!0,this.flush()}clear(){this._current&&(this._current.next=null,this._last=this._current)}enqueue(t){let e={value:t,next:null};if(this._current){this._last.next=e,this._last=e;return}this._current=e,this._last=e,this._active&&this.flush()}flush(){for(;this._current;){let t=this._current;this._process(t.value),this._current=t.next}this._last=null}}let a=".",s="",u="xstate.init",l="xstate.error",c="xstate.stop";function f(t,e){return{type:`xstate.done.state.${t}`,output:e}}function d(t,e){return{type:`xstate.error.actor.${t}`,error:e,actorId:t}}function p(t){return{type:u,input:t}}function h(t){setTimeout(()=>{throw t})}let m="function"==typeof Symbol&&Symbol.observable||"@@observable";function g(t){if(w(t))return t;let e=[],n="";for(let r=0;r<t.length;r++){switch(t.charCodeAt(r)){case 92:n+=t[r+1],r++;continue;case 46:e.push(n),n="";continue}n+=t[r]}return e.push(n),e}function y(t){var e;return(e=t)&&"object"==typeof e&&"machine"in e&&"value"in e?t.value:"string"!=typeof t?t:function(t){if(1===t.length)return t[0];let e={},n=e;for(let e=0;e<t.length-1;e++)if(e===t.length-2)n[t[e]]=t[e+1];else{let r=n;n={},r[t[e]]=n}return e}(g(t))}function v(t,e){let n={},r=Object.keys(t);for(let i=0;i<r.length;i++){let o=r[i];n[o]=e(t[o],o,t,i)}return n}function x(t){var e;return void 0===t?[]:w(e=t)?e:[e]}function b(t,e,n,r){return"function"==typeof t?t({context:e,event:n,self:r}):t}function w(t){return Array.isArray(t)}function j(t){var e;return(w(e=t)?e:[e]).map(t=>void 0===t||"string"==typeof t?{target:t}:t)}function S(t){if(void 0!==t&&""!==t)return x(t)}function _(t,e,n){let r="object"==typeof t,i=r?t:void 0;return{next:(r?t.next:t)?.bind(i),error:(r?t.error:e)?.bind(i),complete:(r?t.complete:n)?.bind(i)}}function M(t,e){return`${e}.${t}`}function E(t,e){let n=e.match(/^xstate\.invoke\.(\d+)\.(.*)/);if(!n)return t.implementations.actors[e];let[,r,i]=n,o=t.getStateNodeById(i).config.invoke;return(Array.isArray(o)?o[r]:o).src}function O(t,e){return`${t.sessionId}.${e}`}let $=0,k=!1,R=1,N=((r={})[r.NotStarted=0]="NotStarted",r[r.Running=1]="Running",r[r.Stopped=2]="Stopped",r),I={clock:{setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t)},logger:console.log.bind(console),devTools:!1};class D{constructor(t,e){this.logic=t,this._snapshot=void 0,this.clock=void 0,this.options=void 0,this.id=void 0,this.mailbox=new o(this._process.bind(this)),this.observers=new Set,this.eventListeners=new Map,this.logger=void 0,this._processingStatus=N.NotStarted,this._parent=void 0,this._syncSnapshot=void 0,this.ref=void 0,this._actorScope=void 0,this._systemId=void 0,this.sessionId=void 0,this.system=void 0,this._doneEvent=void 0,this.src=void 0,this._deferred=[];let n={...I,...e},{clock:r,logger:i,parent:a,syncSnapshot:s,id:u,systemId:l,inspect:c}=n;this.system=a?a.system:function(t,e){let n=new Map,r=new Map,i=new WeakMap,o=new Set,a={},{clock:s,logger:u}=e,l={schedule:(t,e,n,r,i=Math.random().toString(36).slice(2))=>{let o={source:t,target:e,event:n,delay:r,id:i,startedAt:Date.now()},u=O(t,i);c._snapshot._scheduledEvents[u]=o;let l=s.setTimeout(()=>{delete a[u],delete c._snapshot._scheduledEvents[u],c._relay(t,e,n)},r);a[u]=l},cancel:(t,e)=>{let n=O(t,e),r=a[n];delete a[n],delete c._snapshot._scheduledEvents[n],void 0!==r&&s.clearTimeout(r)},cancelAll:t=>{for(let e in c._snapshot._scheduledEvents){let n=c._snapshot._scheduledEvents[e];n.source===t&&l.cancel(t,n.id)}}},c={_snapshot:{_scheduledEvents:(e?.snapshot&&e.snapshot.scheduler)??{}},_bookId:()=>`x:${$++}`,_register:(t,e)=>(n.set(t,e),t),_unregister:t=>{n.delete(t.sessionId);let e=i.get(t);void 0!==e&&(r.delete(e),i.delete(t))},get:t=>r.get(t),_set:(t,e)=>{let n=r.get(t);if(n&&n!==e)throw Error(`Actor with system ID '${t}' already exists.`);r.set(t,e),i.set(e,t)},inspect:t=>{let e=_(t);return o.add(e),{unsubscribe(){o.delete(e)}}},_sendInspectionEvent:e=>{if(!o.size)return;let n={...e,rootId:t.sessionId};o.forEach(t=>t.next?.(n))},_relay:(t,e,n)=>{c._sendInspectionEvent({type:"@xstate.event",sourceRef:t,actorRef:e,event:n}),e._send(n)},scheduler:l,getSnapshot:()=>({_scheduledEvents:{...c._snapshot._scheduledEvents}}),start:()=>{let t=c._snapshot._scheduledEvents;for(let e in c._snapshot._scheduledEvents={},t){let{source:n,target:r,event:i,delay:o,id:a}=t[e];l.schedule(n,r,i,o,a)}},_clock:s,_logger:u};return c}(this,{clock:r,logger:i}),c&&!a&&this.system.inspect(_(c)),this.sessionId=this.system._bookId(),this.id=u??this.sessionId,this.logger=e?.logger??this.system._logger,this.clock=e?.clock??this.system._clock,this._parent=a,this._syncSnapshot=s,this.options=n,this.src=n.src??t,this.ref=this,this._actorScope={self:this,id:this.id,sessionId:this.sessionId,logger:this.logger,defer:t=>{this._deferred.push(t)},system:this.system,stopChild:t=>{if(t._parent!==this)throw Error(`Cannot stop child actor ${t.id} of ${this.id} because it is not a child`);t._stop()},emit:t=>{let e=this.eventListeners.get(t.type),n=this.eventListeners.get("*");if(e||n)for(let r of[...e?e.values():[],...n?n.values():[]])try{r(t)}catch(t){h(t)}},actionExecutor:t=>{let e=()=>{if(this._actorScope.system._sendInspectionEvent({type:"@xstate.action",actorRef:this,action:{type:t.type,params:t.params}}),!t.exec)return;let e=k;try{k=!0,t.exec(t.info,t.params)}finally{k=e}};this._processingStatus===N.Running?e():this._deferred.push(e)}},this.send=this.send.bind(this),this.system._sendInspectionEvent({type:"@xstate.actor",actorRef:this}),l&&(this._systemId=l,this.system._set(l,this)),this._initState(e?.snapshot??e?.state),l&&"active"!==this._snapshot.status&&this.system._unregister(this)}_initState(t){try{this._snapshot=t?this.logic.restoreSnapshot?this.logic.restoreSnapshot(t,this._actorScope):t:this.logic.getInitialSnapshot(this._actorScope,this.options?.input)}catch(t){this._snapshot={status:"error",output:void 0,error:t}}}update(t,e){let n;for(this._snapshot=t;n=this._deferred.shift();)try{n()}catch(e){this._deferred.length=0,this._snapshot={...t,status:"error",error:e}}switch(this._snapshot.status){case"active":for(let e of this.observers)try{e.next?.(t)}catch(t){h(t)}break;case"done":var r;for(let e of this.observers)try{e.next?.(t)}catch(t){h(t)}this._stopProcedure(),this._complete(),this._doneEvent=(r=this.id,{type:`xstate.done.actor.${r}`,output:this._snapshot.output,actorId:r}),this._parent&&this.system._relay(this,this._parent,this._doneEvent);break;case"error":this._error(this._snapshot.error)}this.system._sendInspectionEvent({type:"@xstate.snapshot",actorRef:this,event:e,snapshot:t})}subscribe(t,e,n){let r=_(t,e,n);if(this._processingStatus!==N.Stopped)this.observers.add(r);else switch(this._snapshot.status){case"done":try{r.complete?.()}catch(t){h(t)}break;case"error":{let t=this._snapshot.error;if(r.error)try{r.error(t)}catch(t){h(t)}else h(t)}}return{unsubscribe:()=>{this.observers.delete(r)}}}on(t,e){let n=this.eventListeners.get(t);n||(n=new Set,this.eventListeners.set(t,n));let r=e.bind(void 0);return n.add(r),{unsubscribe:()=>{n.delete(r)}}}start(){if(this._processingStatus===N.Running)return this;this._syncSnapshot&&this.subscribe({next:t=>{"active"===t.status&&this.system._relay(this,this._parent,{type:`xstate.snapshot.${this.id}`,snapshot:t})},error:()=>{}}),this.system._register(this.sessionId,this),this._systemId&&this.system._set(this._systemId,this),this._processingStatus=N.Running;let t=p(this.options.input);switch(this.system._sendInspectionEvent({type:"@xstate.event",sourceRef:this._parent,actorRef:this,event:t}),this._snapshot.status){case"done":return this.update(this._snapshot,t),this;case"error":return this._error(this._snapshot.error),this}if(this._parent||this.system.start(),this.logic.start)try{this.logic.start(this._snapshot,this._actorScope)}catch(t){return this._snapshot={...this._snapshot,status:"error",error:t},this._error(t),this}return this.update(this._snapshot,t),this.options.devTools&&this.attachDevTools(),this.mailbox.start(),this}_process(t){let e,n;try{e=this.logic.transition(this._snapshot,t,this._actorScope)}catch(t){n={err:t}}if(n){let{err:t}=n;this._snapshot={...this._snapshot,status:"error",error:t},this._error(t);return}this.update(e,t),t.type===c&&(this._stopProcedure(),this._complete())}_stop(){return this._processingStatus===N.Stopped||((this.mailbox.clear(),this._processingStatus===N.NotStarted)?this._processingStatus=N.Stopped:this.mailbox.enqueue({type:c})),this}stop(){if(this._parent)throw Error("A non-root actor cannot be stopped directly.");return this._stop()}_complete(){for(let t of this.observers)try{t.complete?.()}catch(t){h(t)}this.observers.clear()}_reportError(t){if(!this.observers.size){this._parent||h(t);return}let e=!1;for(let n of this.observers){let r=n.error;e||=!r;try{r?.(t)}catch(t){h(t)}}this.observers.clear(),e&&h(t)}_error(t){this._stopProcedure(),this._reportError(t),this._parent&&this.system._relay(this,this._parent,d(this.id,t))}_stopProcedure(){return this._processingStatus!==N.Running||(this.system.scheduler.cancelAll(this),this.mailbox.clear(),this.mailbox=new o(this._process.bind(this)),this._processingStatus=N.Stopped,this.system._unregister(this)),this}_send(t){this._processingStatus!==N.Stopped&&this.mailbox.enqueue(t)}send(t){this.system._relay(void 0,this,t)}attachDevTools(){let{devTools:t}=this.options;t&&("function"==typeof t?t:i.tm)(this)}toJSON(){return{xstate$$type:R,id:this.id}}getPersistedSnapshot(t){return this.logic.getPersistedSnapshot(this._snapshot,t)}[m](){return this}getSnapshot(){return this._snapshot}}function A(t,...[e]){return new D(t,e)}function T(t,e,n,r,{sendId:i}){return[e,{sendId:"function"==typeof i?i(n,r):i},void 0]}function C(t,e){t.defer(()=>{t.system.scheduler.cancel(t.self,e.sendId)})}function z(t){function e(t,e){}return e.type="xstate.cancel",e.sendId=t,e.resolve=T,e.execute=C,e}function L(t,e,n,r,{id:i,systemId:o,src:a,input:s,syncSnapshot:u}){let l,c,f="string"==typeof a?E(e.machine,a):a,d="function"==typeof i?i(n):i;return f&&(c="function"==typeof s?s({context:e.context,event:n.event,self:t.self}):s,l=A(f,{id:d,src:a,parent:t.self,syncSnapshot:u,systemId:o,input:c})),[tA(e,{children:{...e.children,[d]:l}}),{id:i,systemId:o,actorRef:l,src:a,input:c},void 0]}function F(t,{actorRef:e}){e&&t.defer(()=>{e._processingStatus!==N.Stopped&&e.start()})}function U(...[t,{id:e,systemId:n,input:r,syncSnapshot:i=!1}={}]){function o(t,e){}return o.type="xstate.spawnChild",o.id=e,o.systemId=n,o.src=t,o.input=r,o.syncSnapshot=i,o.resolve=L,o.execute=F,o}function q(t,e,n,r,{actorRef:i}){let o="function"==typeof i?i(n,r):i,a="string"==typeof o?e.children[o]:o,s=e.children;return a&&(s={...s},delete s[a.id]),[tA(e,{children:s}),a,void 0]}function P(t,e){if(e){if(t.system._unregister(e),e._processingStatus!==N.Running)return void t.stopChild(e);t.defer(()=>{t.stopChild(e)})}}function W(t){function e(t,e){}return e.type="xstate.stopChild",e.actorRef=t,e.resolve=q,e.execute=P,e}function Z(t,{context:e,event:n},{guards:r}){return!B(r[0],e,n,t)}function G(t){function e(t,e){return!1}return e.check=Z,e.guards=[t],e}function H(t,{context:e,event:n},{guards:r}){return r.every(r=>B(r,e,n,t))}function Y(t){function e(t,e){return!1}return e.check=H,e.guards=t,e}function B(t,e,n,r){let{machine:i}=r,o="function"==typeof t,a=o?t:i.implementations.guards["string"==typeof t?t:t.type];if(!o&&!a)throw Error(`Guard '${"string"==typeof t?t:t.type}' is not implemented.'.`);if("function"!=typeof a)return B(a,e,n,r);let s={context:e,event:n},u=o||"string"==typeof t?void 0:"params"in t?"function"==typeof t.params?t.params({context:e,event:n}):t.params:void 0;return"check"in a?a.check(r,s,a):a(s,u)}let K=t=>"atomic"===t.type||"final"===t.type;function X(t){return Object.values(t.states).filter(t=>"history"!==t.type)}function V(t,e){let n=[];if(e===t)return n;let r=t.parent;for(;r&&r!==e;)n.push(r),r=r.parent;return n}function J(t){let e=new Set(t),n=Q(e);for(let t of e)if("compound"!==t.type||n.get(t)&&n.get(t).length){if("parallel"===t.type){for(let n of X(t))if("history"!==n.type&&!e.has(n))for(let t of tc(n))e.add(t)}}else tc(t).forEach(t=>e.add(t));for(let t of e){let n=t.parent;for(;n;)e.add(n),n=n.parent}return e}function Q(t){let e=new Map;for(let n of t)e.has(n)||e.set(n,[]),n.parent&&(e.has(n.parent)||e.set(n.parent,[]),e.get(n.parent).push(n));return e}function tt(t,e){return function t(e,n){let r=n.get(e);if(!r)return{};if("compound"===e.type){let t=r[0];if(!t)return{};if(K(t))return t.key}let i={};for(let e of r)i[e.key]=t(e,n);return i}(t,Q(J(e)))}function te(t,e){return"compound"===e.type?X(e).some(e=>"final"===e.type&&t.has(e)):"parallel"===e.type?X(e).every(e=>te(t,e)):"final"===e.type}let tn=t=>"#"===t[0];function tr(t,e){return t.transitions.get(e)||[...t.transitions.keys()].filter(t=>{if("*"===t)return!0;if(!t.endsWith(".*"))return!1;let n=t.split("."),r=e.split(".");for(let t=0;t<n.length;t++){let e=n[t],i=r[t];if("*"===e)return t===n.length-1;if(e!==i)return!1}return!0}).sort((t,e)=>e.length-t.length).flatMap(e=>t.transitions.get(e))}function ti(t){let e=t.config.after;return e?Object.keys(e).flatMap(n=>{let r=e[n],i=Number.isNaN(+n)?n:+n,o=(e=>{var n;let r=(n=t.id,{type:`xstate.after.${e}.${n}`}),i=r.type;return t.entry.push(tL(r,{id:i,delay:e})),t.exit.push(z(i)),i})(i);return x("string"==typeof r?{target:r}:r).map(t=>({...t,event:o,delay:i}))}).map(e=>{let{delay:n}=e;return{...to(t,e.event,e),delay:n}}):[]}function to(t,e,n){let r=S(n.target),i=n.reenter??!1,o=function(t,e){if(void 0!==e)return e.map(e=>{if("string"!=typeof e)return e;if(tn(e))return t.machine.getStateNodeById(e);let n=e[0]===a;if(n&&!t.parent)return tp(t,e.slice(1));let r=n?t.key+e:e;if(t.parent)try{return tp(t.parent,r)}catch(e){throw Error(`Invalid transition definition for state node '${t.id}':
${e.message}`)}throw Error(`Invalid target: "${e}" is not a valid target from the root node. Did you mean ".${e}"?`)})}(t,r),s={...n,actions:x(n.actions),guard:n.guard,target:o,source:t,reenter:i,eventType:e,toJSON:()=>({...s,source:`#${t.id}`,target:o?o.map(t=>`#${t.id}`):void 0})};return s}function ta(t){let e=new Map;if(t.config.on)for(let n of Object.keys(t.config.on)){if(n===s)throw Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');let r=t.config.on[n];e.set(n,j(r).map(e=>to(t,n,e)))}if(t.config.onDone){let n=`xstate.done.state.${t.id}`;e.set(n,j(t.config.onDone).map(e=>to(t,n,e)))}for(let n of t.invoke){if(n.onDone){let r=`xstate.done.actor.${n.id}`;e.set(r,j(n.onDone).map(e=>to(t,r,e)))}if(n.onError){let r=`xstate.error.actor.${n.id}`;e.set(r,j(n.onError).map(e=>to(t,r,e)))}if(n.onSnapshot){let r=`xstate.snapshot.${n.id}`;e.set(r,j(n.onSnapshot).map(e=>to(t,r,e)))}}for(let n of t.after){let t=e.get(n.eventType);t||(t=[],e.set(n.eventType,t)),t.push(n)}return e}function ts(t,e){let n="string"==typeof e?t.states[e]:e?t.states[e.target]:void 0;if(!n&&e)throw Error(`Initial state node "${e}" not found on parent state node #${t.id}`);let r={source:t,actions:e&&"string"!=typeof e?x(e.actions):[],eventType:null,reenter:!1,target:n?[n]:[],toJSON:()=>({...r,source:`#${t.id}`,target:n?[`#${n.id}`]:[]})};return r}function tu(t){let e=S(t.config.target);return e?{target:e.map(e=>"string"==typeof e?tp(t.parent,e):e)}:t.parent.initial}function tl(t){return"history"===t.type}function tc(t){let e=tf(t);for(let n of e)for(let r of V(n,t))e.add(r);return e}function tf(t){let e=new Set;return!function t(n){if(!e.has(n)){if(e.add(n),"compound"===n.type)t(n.initial.target[0]);else if("parallel"===n.type)for(let e of X(n))t(e)}}(t),e}function td(t,e){if(tn(e))return t.machine.getStateNodeById(e);if(!t.states)throw Error(`Unable to retrieve child state '${e}' from '${t.id}'; no child states exist.`);let n=t.states[e];if(!n)throw Error(`Child state '${e}' does not exist on '${t.id}'`);return n}function tp(t,e){if("string"==typeof e&&tn(e))try{return t.machine.getStateNodeById(e)}catch{}let n=g(e).slice(),r=t;for(;n.length;){let t=n.shift();if(!t.length)break;r=td(r,t)}return r}function th(t,e){if("string"==typeof e){let n=t.states[e];if(!n)throw Error(`State '${e}' does not exist on '${t.id}'`);return[t,n]}let n=Object.keys(e),r=n.map(e=>td(t,e)).filter(Boolean);return[t.machine.root,t].concat(r,n.reduce((n,r)=>{let i=td(t,r);if(!i)return n;let o=th(i,e[r]);return n.concat(o)},[]))}function tm(t,e){let n=t;for(;n.parent&&n.parent!==e;)n=n.parent;return n.parent===e}function tg(t,e,n){let r=new Set;for(let i of t){let t=!1,o=new Set;for(let a of r)if(function(t,e){let n=new Set(t),r=new Set(e);for(let t of n)if(r.has(t))return!0;for(let t of r)if(n.has(t))return!0;return!1}(tx([i],e,n),tx([a],e,n)))if(tm(i.source,a.source))o.add(a);else{t=!0;break}if(!t){for(let t of o)r.delete(t);r.add(i)}}return Array.from(r)}function ty(t,e){if(!t.target)return[];let n=new Set;for(let r of t.target)if(tl(r))if(e[r.id])for(let t of e[r.id])n.add(t);else for(let t of ty(tu(r),e))n.add(t);else n.add(r);return[...n]}function tv(t,e){let n=ty(t,e);if(!n)return;if(!t.reenter&&n.every(e=>e===t.source||tm(e,t.source)))return t.source;let r=function(t){let[e,...n]=t;for(let t of V(e,void 0))if(n.every(e=>tm(e,t)))return t}(n.concat(t.source));return r||(t.reenter?void 0:t.source.machine.root)}function tx(t,e,n){let r=new Set;for(let i of t)if(i.target?.length){let t=tv(i,n);for(let n of(i.reenter&&i.source===t&&r.add(t),e))tm(n,t)&&r.add(n)}return[...r]}function tb(t,e,n,r,i,o){if(!t.length)return e;let a=new Set(e._nodes),s=e.historyValue,u=tg(t,a,s),l=e;i||([l,s]=function(t,e,n,r,i,o,a,s){let u,l=t,c=tx(r,i,o);for(let t of(c.sort((t,e)=>e.order-t.order),c))for(let e of function(t){return Object.keys(t.states).map(e=>t.states[e]).filter(t=>"history"===t.type)}(t)){let n;n="deep"===e.history?e=>K(e)&&tm(e,t):e=>e.parent===t,(u??={...o})[e.id]=Array.from(i).filter(n)}for(let t of c)l=tS(l,e,n,[...t.exit,...t.invoke.map(t=>W(t.id))],a,void 0),i.delete(t);return[l,u||o]}(l,r,n,u,a,s,o,n.actionExecutor)),l=function(t,e,n,r,i,o,a,s){let u=t,l=new Set,c=new Set;(function(t,e,n,r){for(let i of t){let t=tv(i,e);for(let o of i.target||[])!tl(o)&&(i.source!==o||i.source!==t||i.reenter)&&(r.add(o),n.add(o)),tw(o,e,n,r);for(let o of ty(i,e)){let a=V(o,t);t?.type==="parallel"&&a.push(t),tj(r,e,n,a,!i.source.parent&&i.reenter?void 0:t)}}})(r,a,c,l),s&&c.add(t.machine.root);let d=new Set;for(let t of[...l].sort((t,e)=>t.order-e.order)){i.add(t);let r=[];for(let e of(r.push(...t.entry),t.invoke))r.push(U(e.src,{...e,syncSnapshot:!!e.onSnapshot}));if(c.has(t)){let e=t.initial.actions;r.push(...e)}if(u=tS(u,e,n,r,o,t.invoke.map(t=>t.id)),"final"===t.type){let r=t.parent,a=r?.type==="parallel"?r:r?.parent,s=a||t;for(r?.type==="compound"&&o.push(f(r.id,void 0!==t.output?b(t.output,u.context,e,n.self):void 0));a?.type==="parallel"&&!d.has(a)&&te(i,a);)d.add(a),o.push(f(a.id)),s=a,a=a.parent;if(a)continue;u=tA(u,{status:"done",output:function(t,e,n,r,i){if(void 0===r.output)return;let o=f(i.id,void 0!==i.output&&i.parent?b(i.output,t.context,e,n.self):void 0);return b(r.output,t.context,o,n.self)}(u,e,n,u.machine.root,s)})}}return u}(l=tS(l,r,n,u.flatMap(t=>t.actions),o,void 0),r,n,u,a,o,s,i);let c=[...a];"done"===l.status&&(l=tS(l,r,n,c.sort((t,e)=>e.order-t.order).flatMap(t=>t.exit),o,void 0));try{if(s===e.historyValue&&function(t,e){if(t.length!==e.size)return!1;for(let n of t)if(!e.has(n))return!1;return!0}(e._nodes,a))return l;return tA(l,{_nodes:c,historyValue:s})}catch(t){throw t}}function tw(t,e,n,r){var i,o,a,s;if(tl(t))if(e[t.id]){let a=e[t.id];for(let t of a)r.add(t),tw(t,e,n,r);for(let s of a){i=s,o=t.parent,tj(r,e,n,V(i,o))}}else{let i=tu(t);for(let o of i.target)r.add(o),i===t.parent?.initial&&n.add(t.parent),tw(o,e,n,r);for(let o of i.target){a=o,s=t.parent,tj(r,e,n,V(a,s))}}else if("compound"===t.type){let[i]=t.initial.target;tl(i)||(r.add(i),n.add(i)),tw(i,e,n,r),tj(r,e,n,V(i,t))}else if("parallel"===t.type)for(let i of X(t).filter(t=>!tl(t)))[...r].some(t=>tm(t,i))||(tl(i)||(r.add(i),n.add(i)),tw(i,e,n,r))}function tj(t,e,n,r,i){for(let o of r)if((!i||tm(o,i))&&t.add(o),"parallel"===o.type)for(let r of X(o).filter(t=>!tl(t)))[...t].some(t=>tm(t,r))||(t.add(r),tw(r,e,n,t))}function tS(t,e,n,r,i,o){let a=o?[]:void 0,s=function t(e,n,r,i,o,a){let{machine:s}=e,u=e;for(let e of i){var l;let i="function"==typeof e,c=i?e:(l="string"==typeof e?e:e.type,s.implementations.actions[l]),f={context:u.context,event:n,self:r.self,system:r.system},d=i||"string"==typeof e?void 0:"params"in e?"function"==typeof e.params?e.params({context:u.context,event:n}):e.params:void 0;if(!c||!("resolve"in c)){r.actionExecutor({type:"string"==typeof e?e:"object"==typeof e?e.type:e.name||"(anonymous)",info:f,params:d,exec:c});continue}let[p,h,m]=c.resolve(r,u,f,d,c,o);u=p,"retryResolve"in c&&a?.push([c,h]),"execute"in c&&r.actionExecutor({type:c.type,info:f,params:h,exec:c.execute.bind(null,r,h)}),m&&(u=t(u,n,r,m,o,a))}return u}(t,e,n,r,{internalQueue:i,deferredActorIds:o},a);return a?.forEach(([t,e])=>{t.retryResolve(n,s,e)}),s}function t_(t,e,n,r){let i=t,o=[];function a(t,e,r){n.system._sendInspectionEvent({type:"@xstate.microstep",actorRef:n.self,event:e,snapshot:t,_transitions:r}),o.push(t)}if(e.type===c)return a(i=tA(tM(i,e,n),{status:"stopped"}),e,[]),{snapshot:i,microstates:o};let s=e;if(s.type!==u){let e=s,u=e.type.startsWith("xstate.error.actor"),l=tE(e,i);if(u&&!l.length)return a(i=tA(t,{status:"error",error:e.error}),e,[]),{snapshot:i,microstates:o};a(i=tb(l,t,n,s,!1,r),e,l)}let l=!0;for(;"active"===i.status;){let t=l?function(t,e){let n=new Set;for(let r of t._nodes.filter(K))e:for(let i of[r].concat(V(r,void 0)))if(i.always){for(let r of i.always)if(void 0===r.guard||B(r.guard,t.context,e,t)){n.add(r);break e}}return tg(Array.from(n),new Set(t._nodes),t.historyValue)}(i,s):[],e=t.length?i:void 0;if(!t.length){if(!r.length)break;t=tE(s=r.shift(),i)}l=(i=tb(t,i,n,s,!1,r))!==e,a(i,s,t)}return"active"!==i.status&&tM(i,s,n),{snapshot:i,microstates:o}}function tM(t,e,n){return tS(t,e,n,Object.values(t.children).map(t=>W(t)),[],void 0)}function tE(t,e){return e.machine.getTransitionData(e,t)}function tO(t,e){let n=J(th(t,e));return tt(t,[...n])}let t$=function(t){return function t(e,n){let r=y(e),i=y(n);return"string"==typeof i?"string"==typeof r&&i===r:"string"==typeof r?r in i:Object.keys(r).every(e=>e in i&&t(r[e],i[e]))}(t,this.value)},tk=function(t){return this.tags.has(t)},tR=function(t){let e=this.machine.getTransitionData(this,t);return!!e?.length&&e.some(t=>void 0!==t.target||t.actions.length)},tN=function(){let{_nodes:t,tags:e,machine:n,getMeta:r,toJSON:i,can:o,hasTag:a,matches:s,...u}=this;return{...u,tags:Array.from(e)}},tI=function(){return this._nodes.reduce((t,e)=>(void 0!==e.meta&&(t[e.id]=e.meta),t),{})};function tD(t,e){return{status:t.status,output:t.output,error:t.error,machine:e,context:t.context,_nodes:t._nodes,value:tt(e.root,t._nodes),tags:new Set(t._nodes.flatMap(t=>t.tags)),children:t.children,historyValue:t.historyValue||{},matches:t$,hasTag:tk,can:tR,getMeta:tI,toJSON:tN}}function tA(t,e={}){return tD({...t,...e},t.machine)}function tT(t,e){let{_nodes:n,tags:r,machine:i,children:o,context:a,can:s,hasTag:u,matches:l,getMeta:c,toJSON:f,...d}=t,p={};for(let t in o){let n=o[t];p[t]={snapshot:n.getPersistedSnapshot(e),src:n.src,systemId:n._systemId,syncSnapshot:n._syncSnapshot}}return{...d,context:function t(e){let n;for(let r in e){let i=e[r];if(i&&"object"==typeof i)if("sessionId"in i&&"send"in i&&"ref"in i)(n??=Array.isArray(e)?e.slice():{...e})[r]={xstate$$type:R,id:i.id};else{let o=t(i);o!==i&&((n??=Array.isArray(e)?e.slice():{...e})[r]=o)}}return n??e}(a),children:p,historyValue:function(t){if("object"!=typeof t||null===t)return{};let e={};for(let n in t){let r=t[n];Array.isArray(r)&&(e[n]=r.map(t=>({id:t.id})))}return e}(d.historyValue)}}function tC(t,e,n,r,{event:i,id:o,delay:a},{internalQueue:s}){let u,l=e.machine.implementations.delays;if("string"==typeof i)throw Error(`Only event objects may be used with raise; use raise({ type: "${i}" }) instead`);let c="function"==typeof i?i(n,r):i;if("string"==typeof a){let t=l&&l[a];u="function"==typeof t?t(n,r):t}else u="function"==typeof a?a(n,r):a;return"number"!=typeof u&&s.push(c),[e,{event:c,id:o,delay:u},void 0]}function tz(t,e){let{event:n,delay:r,id:i}=e;if("number"==typeof r)return void t.defer(()=>{let e=t.self;t.system.scheduler.schedule(e,e,n,r,i)})}function tL(t,e){function n(t,e){}return n.type="xstate.raise",n.event=t,n.id=e?.id,n.delay=e?.delay,n.resolve=tC,n.execute=tz,n}},8040:function(t,e,n){n.d(e,{A:()=>tL});var r=n(6966),i=n(8446),o=n(629),a=n(1108);function s({x:t,y:e}){return`${t},${e}`}function u(t){return(0,r.jsx)("g",{className:"map-layers",children:t.mapLayers.map((e,n)=>(0,r.jsx)(i.Fragment,{children:"line"===e.type?function(t,e){var n;let u=void 0!==e.filter?(n=e.filter,o.O.mapData.lines.features.filter(t=>n(t.properties)).map(t=>({name:d(t.properties.name),id:(0,a.Mh)(t.properties)+"",tags:c(t.properties),width:l(t.properties),vs:t.geometry.coordinates}))):void 0!==e.data?e.data.map(t=>({tags:[],vs:t})):[];return 0===u.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("g",{className:e.name,style:{contain:"content"},children:u.map((n,o)=>(0,r.jsx)(i.Fragment,{children:function(t,{id:e,tags:n,width:i,widthScale:o,vs:a},u,l,c){return(0,r.jsx)("path",{id:void 0===e?void 0:`path${e}`,className:[u,...n].join(" ").replaceAll(/;/g,"_"),strokeWidth:(i??l??1)*(o??c??1),d:function(e){return(function(t,e){let[n,r]=t[0];return`M${s(e.transformPoint({x:n,y:r}))}`+t.slice(1).map(([t,n])=>e.transformPoint({x:t,y:n})).map(t=>`L${s(t)}`)})(e,t).replaceAll(/([.]\d\d)\d*/g,"$1")}(a)})}(t,n,e.name,e.width,e.widthScale)},o))})}(t.m,e):function(t,e){var n;let u=void 0!==e.filter?(n=e.filter,o.O.mapData.multipolygons.features.filter(t=>n(t.properties)).map(t=>({name:d(t.properties.name),id:(0,a.Mh)(t.properties)+"",tags:c(t.properties),width:l(t.properties),vs:t.geometry.coordinates}))):void 0!==e.data?e.data.map(t=>({tags:[],vs:t})):[];return 0===u.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("g",{className:e.name,children:u.map((n,o)=>(0,r.jsx)(i.Fragment,{children:function(t,{id:e,tags:n,width:i,widthScale:o,vs:a},u,l,c){return(0,r.jsx)("path",{id:e,className:[u,...n].join(" ").replaceAll(/;/g,"_"),strokeWidth:(i??l??1)*(o??c??1),d:function(e){return e.map(e=>e.map(e=>(function(t,e){let[n,r]=t[0];return`M${s(e.transformPoint({x:n,y:r}))}`+t.slice(1,-1).map(([t,n])=>e.transformPoint({x:t,y:n})).map(t=>`L${s(t)}`)+"Z"})(e,t)).join("")).join("").replaceAll(/([.]\d\d)\d*/g,"$1")}(a)})}(t,n,e.name,e.width,e.widthScale)},o))})}(t.m,e)},n))})}function l(t){let e=t?.other_tags?.match(/"width"=>"([1-9][.0-9]*)"/);return e?Math.round(Number(e[1])):void 0}function c(t){return f.flatMap(e=>e(t))}let f=[function(t){let e=t?.other_tags?.match(/"access"=>"([^"][^"]*)"/);return e?[`access-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"service"=>"([^"][^"]*)"/);return e?[`service-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"surface"=>"([^"][^"]*)"/);return e?[`surface-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"lanes"=>"([^"][^"]*)"/);return e?[`lanes-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"tunnel"=>"([^"][^"]*)"/);return e?[`tunnel-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"building"=>"([^"][^"]*)"/);return e?[`building-${e[1]}`]:[]},function(t){let e=t?.other_tags?.match(/"level"=>"([^"][^"]*)"/);return e?[`level-${e[1]}`]:[]}];function d(t){return t===d||null===t?void 0:t}var p=n(8339),h=n(3518);function m({pointsFilter:t,polygonsFilter:e,linesFilter:n,data:r}){var i,a,s,u,l,c;let f=o.O.mapData,d=void 0===t?[]:(i=f.points.features,a=t,i.filter(t=>a(t.properties)).flatMap(g)),p=void 0===n?[]:(s=f.lines.features,u=n,s.filter(t=>u(t.properties)).flatMap(g));return[...d,...p,...void 0===e?[]:(l=f.multipolygons.features,c=e,l.filter(t=>c(t.properties)).flatMap(g)),...void 0===r?[]:r]}function g(t){let e=t.properties.centroid_x,n=t.properties.centroid_y;return null===e||null===n?[]:[(0,h.v)(e,n)]}function y(t){let e=25/t.fontSize;return(0,r.jsxs)("defs",{className:"map-markers",children:[t.mapMarkers.map((n,i)=>(0,r.jsx)("g",{children:(0,r.jsx)(v,{m:t.m,sz:e,name:n.name,href:n.name,vs:m(n)})},i)),(0,r.jsx)(x,{sz:e}),(0,r.jsx)(b,{sz:e}),(0,r.jsx)("style",{children:(0,r.jsx)(w,{...t})})]})}function v(t){return(0,r.jsx)(r.Fragment,{children:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n},i)=>(0,r.jsx)("use",{className:`${t.name}-${i}`,href:t.href,style:{transform:`translate(${(0,p.mh)(e)}px, ${(0,p.mh)(n)}px)scale(var(${t.sz}))`}},i))})}function x(t){var e;let n=t.sz/2;return(0,r.jsx)("path",{id:"point-name-marker",fill:"white",fillOpacity:"0.5",stroke:"none",strokeWidth:n/20,d:(e=n,`
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
`})(n,e).replaceAll(/([.]\d\d)\d*/g,"$1")})}function w(t){let e=(0,a.Ki)(),n=t.s*t.fontSize*.9;if(null===e)return(0,r.jsx)(r.Fragment,{children:`
#position {
  display: none;
}`});let{x:i,y:s}=o.O.mapCoord.matrix.transformPoint({x:e.coords.longitude,y:e.coords.latitude});return(0,r.jsx)(r.Fragment,{children:`
#position {
  display: initial !important;
  transform: translate(${i}px, ${s}px) scale(${n});
}
`})}function j(t,e,n){let r=t.name;return null===r||"string"!=typeof r||void 0!==e&&r.match(e)?[]:(void 0===n?r:r.replace(n," $1 ")).trim().split(S).map(t=>t.trim())}let S=/[ 　][ 　]*/;function _(t){return(0,r.jsx)("g",{className:"map-objects",children:t.mapObjects.map((e,n)=>(0,r.jsx)("g",{children:(0,r.jsx)(M,{m:t.m,name:e.name,path:e.path,width:e.width,vs:m(e)})},n))})}function M(t){return(0,r.jsx)("path",{className:t.name,fill:"none",stroke:"black",strokeWidth:t.width,d:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n})=>`M ${e},${n}`.replaceAll(/([.]\d\d)\d*/g,"$1")+t.path).join("")})}function E(t){return(0,r.jsx)("g",{className:"map-symbols",children:t.mapSymbols.map((e,n)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("g",{className:e.name,children:(0,r.jsx)(O,{name:e.name,href:e.href,vs:m(e),m:t.m})})},n))})}function O(t){return(0,r.jsx)(r.Fragment,{children:t.vs.map(([e,n])=>t.m.transformPoint({x:e,y:n})).map(({x:e,y:n},i)=>(0,r.jsx)("use",{className:`${t.name}-${i}`,href:t.href,style:{transform:`translate(${e}px, ${n}px)`.replaceAll(/([.]\d\d)\d*/g,"$1")+"scale(var(--map-symbol-size))"}},i))})}var $=n(7611);let k="map-svg-layers",R="map-svg-objects",N="map-svg-symbols",I="map-svg-markers",D="map-svg-labels",A="map-html";var T=n(5234),C=n(9199),z=n(3985);function L(){return(0,$.pR)(A,(0,r.jsx)(F,{})),(0,r.jsx)("div",{id:A,className:"content svg"})}function F(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"map-html-content",children:(0,r.jsx)(q,{})}),(0,r.jsx)(U,{})]})}function U(){let t=(0,T.$Y)(),{scroll:e}=t,n=(0,C.YL)(t),i=`
#map-html-content {
  position: absolute;
  left: 0;
  top: 0;
  width: ${(0,p.mh)(e.width)}px;
  height: ${(0,p.mh)(e.height)}px;
  transform: ${n.toString()};
  transform-origin: left top;
}
`;return(0,r.jsx)("style",{children:i})}function q(){let{pointNames:t}=(0,z.ux)(),e=o.O.mapCoord.matrix;return(0,r.jsx)(r.Fragment,{children:t.map(t=>({...t,pos:e.transformPoint(t.pos)})).map((t,e)=>(0,r.jsx)("div",{style:{position:"absolute",left:0,top:0,transform:`translate(${t.pos.x}px, ${t.pos.y}px) scale(0.025) translate(-50%, -50%)`,transformOrigin:"left top"},children:t.name.map((t,e)=>(0,r.jsx)("p",{style:{margin:0,textAlign:"center",width:"20em"},children:t},e))},e))})}var P=n(3690);function W(t,e){return(-.5*t+(e+.5))*1.2}function Z(){return(0,$.pR)(D,(0,r.jsx)(G,{})),(0,r.jsx)("div",{id:D,className:"content svg"})}function G(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(V,{}),(0,r.jsx)(B,{}),(0,r.jsx)(K,{}),(0,r.jsx)("style",{children:H})]})}let H=`
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
`;function Y(){let{pointNames:t,areaNames:e}=(0,z.ux)(),n=o.O.mapCoord.matrix;return(0,r.jsxs)("g",{id:"map-svg-labels1",children:[(0,r.jsx)("g",{children:t.map(t=>({...t,pos:n.transformPoint(t.pos)})).map(({id:t,pos:{x:e,y:n},size:i},o)=>(0,r.jsx)("use",{href:`#name-${t}`,style:{transform:`translate(${(0,p.mh)(e)}px, ${(0,p.mh)(n)}px) scale(${Math.round(i/10)/16})`}},o))}),(0,r.jsx)("g",{children:e.map(t=>({...t,pos:n.transformPoint(t.pos)})).map(({id:t,pos:{x:e,y:n},size:i},o)=>(0,r.jsx)("use",{id:`use-${t}`,href:`#name-${t}`,style:{transform:`translate(${(0,p.mh)(e)}px, ${(0,p.mh)(n)}px) scale(${Math.round(i/10)/16})`}},o))})]})}function B(){let{areaRange:t}=(0,z.fF)(),e=Array.from(t.insides.keys()).map(t=>`#use-${t}`).join(", "),n=Array.from(t.outsides.keys()).map(t=>`#use-${t}`).join(", ");return(0,r.jsx)("style",{children:`
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
`})}function K(){let{sizes:t}=(0,z.ux)(),e=(0,T.bM)(),n=(0,i.useMemo)(()=>{var n,r;return n=t,r=e,n.map(t=>{let e=Math.pow(2,t)/r;return{size:t,opacity:(0,p.mh)(Math.pow(e>1e3?0:e<0?1:(1e3-e)/1e3,2))}})},[e,t]);return(0,r.jsx)("style",{children:`
${n.map(({size:t,opacity:e})=>`
.size-${t} {
  opacity: ${e};
}
`).reduce((t,e)=>t+e)}
`})}function X(){let{scroll:t,svg:e}=(0,T.$Y)();return(0,r.jsx)("svg",{id:"map-svg-labels-content",viewBox:(0,P.nE)(e),width:(0,p.mh)(t.width),height:(0,p.mh)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-labels1"})})}function V(){let{pointNames:t,areaNames:e}=(0,z.ux)();return(0,r.jsx)("svg",{id:"map-svg-labels-defs",children:(0,r.jsxs)("defs",{children:[(0,r.jsx)("g",{children:t.map((t,e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(J,{_poi:t})},e))}),(0,r.jsx)("g",{children:e.map((t,e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(J,{_poi:t})},e))}),(0,r.jsx)(Y,{})]})})}function J(t){let{id:e,name:n}=t._poi,{sizeMap:o}=(0,z.ux)(),a=null===e?void 0:o.get(e);return void 0===a?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("text",{id:`name-${e}`,className:`size-${a}`,children:n.map((t,e)=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("tspan",{textAnchor:"middle",alignmentBaseline:"middle",x:"0",y:(0,p.mh)(16*W(n.length,e)),fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,children:t}),(0,r.jsx)("tspan",{textAnchor:"middle",alignmentBaseline:"middle",x:"0",y:(0,p.mh)(16*W(n.length,e)),fill:"black",children:t})]},e))})}function Q(){return(0,$.pR)(k,(0,r.jsx)(tt,{})),(0,r.jsx)("div",{id:k,className:"content svg"})}function tt(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tn,{}),(0,r.jsx)(tr,{}),(0,r.jsx)("style",{children:te})]})}let te=`
#map-svg-svg,
#map1 {
  contain: content;
  pointer-events: none;
}
#map-svg-defs {
  display: none;
}
`;function tn(){let{scroll:t,svg:e}=(0,T.$Y)();return(0,r.jsx)("svg",{id:"map-svg-layers-content",viewBox:(0,P.nE)(e),width:(0,p.mh)(t.width),height:(0,p.mh)(t.height),children:(0,r.jsx)("use",{href:"#map1"})})}function tr(){let t=o.O;return(0,r.jsxs)("svg",{id:"map-svg-defs",viewBox:"0 0 1 1",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("g",{id:t.map,className:"map",children:[(0,r.jsx)(u,{m:o.O.mapCoord.matrix,mapLayers:t.getMapLayers()}),(0,r.jsx)("style",{children:t.mapSvgStyle})]})}),(0,r.jsx)("style",{children:`
.map-layers,
.map-objects,
.map-symbols,
path {
  contain: content;
}
`})]})}var ti=n(3274);function to(){return(0,$.pR)(I,(0,r.jsx)(ta,{})),(0,r.jsx)("div",{id:I,className:"content svg"})}function ta(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tu,{}),(0,r.jsx)(tl,{}),(0,r.jsx)("style",{children:ts})]})}let ts=`
#map-svg-markers-svg,
#map-svg-markers1 {
  contain: content;
  pointer-events: none;
}
#map-svg-markers-defs {
  display: none;
}
`;function tu(){let{scroll:t,svg:e}=(0,T.$Y)();return(0,r.jsx)("svg",{id:"map-svg-markers-content",viewBox:(0,P.nE)(e),width:(0,p.mh)(t.width),height:(0,p.mh)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-markers1"})})}function tl(){let{fontSize:t}=(0,T.xX)(),e=(0,T.bM)();return(0,r.jsxs)("svg",{id:"map-svg-markers-defs",children:[(0,r.jsx)(y,{m:o.O.mapCoord.matrix,mapMarkers:o.O.getMapMarkers(),fontSize:t,s:e}),(0,r.jsxs)("g",{id:"map-svg-markers1",children:[(0,r.jsx)(tc,{}),(0,r.jsx)("style",{children:(0,r.jsx)(ti.W,{})}),(0,r.jsx)("use",{href:"#position"})]})]})}function tc(){let{pointNames:t}=(0,z.ux)(),e=o.O.mapCoord.matrix;return(0,r.jsx)("g",{children:t.map(t=>({...t,pos:e.transformPoint(t.pos)})).map(({pos:t},e)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(tf,{pos:t})},e))})}function tf(t){let{pos:e}=t;return(0,r.jsx)("use",{href:"#point-name-marker",style:{transform:`translate(${(0,p.mh)(e.x)}px, ${(0,p.mh)(e.y)}px)`}})}function td(){return(0,$.pR)(R,(0,r.jsx)(tp,{})),(0,r.jsx)("div",{id:R,className:"content svg"})}function tp(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tm,{}),(0,r.jsx)(tg,{}),(0,r.jsx)("style",{children:th})]})}let th=`
#map-svg-svg,
#map1 {
  contain: content;
  pointer-events: none;
}
#map-svg-defs {
  display: none;
}
`;function tm(){let{scroll:t,svg:e}=(0,T.$Y)();return(0,r.jsx)("svg",{id:"map-svg-objects-content",viewBox:(0,P.nE)(e),width:(0,p.mh)(t.width),height:(0,p.mh)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-objects1"})})}function tg(){let t=o.O;return(0,r.jsxs)("svg",{id:"map-svg-objects-defs",viewBox:"0 0 1 1",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("g",{id:"map-svg-objects1",children:(0,r.jsx)(_,{m:o.O.mapCoord.matrix,mapObjects:t.getMapObjects()})})}),(0,r.jsx)("style",{children:`
.map-layers,
.map-objects,
.map-symbols,
path {
  contain: content;
}
`})]})}var ty=n(7463);function tv(){return(0,$.pR)(N,(0,r.jsx)(tx,{})),(0,r.jsx)("div",{id:N,className:"content svg"})}function tx(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tw,{}),(0,r.jsx)(tj,{}),(0,r.jsx)("style",{children:tb})]})}let tb=`
#map-svg-symbols-svg,
#map-svg-symbols1 {
  contain: content;
  pointer-events: none;
}
#map-svg-symbols-defs {
  display: none;
}
`;function tw(){let{scroll:t,svg:e}=(0,T.$Y)();return(0,r.jsx)("svg",{id:"map-svg-symbols-content",viewBox:(0,P.nE)(e),width:(0,p.mh)(t.width),height:(0,p.mh)(t.height),children:(0,r.jsx)("use",{href:"#map-svg-symbols1"})})}function tj(){return(0,r.jsx)("svg",{id:"map-svg-symbols-defs",children:(0,r.jsxs)("g",{id:"map-svg-symbols1",children:[(0,r.jsx)("defs",{children:(0,r.jsx)(ty.FP,{})}),(0,r.jsx)(E,{m:o.O.mapCoord.matrix,mapSymbols:o.O.getMapSymbols()}),(0,r.jsx)("style",{children:(0,r.jsx)(ti.W,{})})]})})}var tS=n(7536);let t_=`
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
`,tM="m -0.7,0 v -0.4 m 1.4,0.4 v -0.4 m 0.3,0 h -2",tE="m 0,1 h -1 v -2 h 2 v 2 h -1 v -2 m -0.5,1 m -0.2,-0.2 l 0.2,0.2 l -0.2,0.2 m 0.2,-0.2 h -1",tO="m 0,0 v -1.4 h -0.7 m 0,0.6 h 0.7 m 0,-0.3 h 0.7",t$="m -0.4,0 v -0.7 m 0.8,0.7 v -0.7 m 0.1,0 h -1 v -0.7 h 1 z",tk="m -0.5 0 v -0.3 h 1 v 0.3 m -0.75 -0.3 v -1.2 h 0.5 v 1.2",tR="m -0.5 0 v -0.3 h 1 v 0.3 m -0.5 -0.3 s -0.4 -0.75 0 -0.75 h 0 a 0.125 0.125 0 0 1 0 -0.25 a 0.125 0.125 0 0 1 0 0.25 s 0.4 0 0 0.75",tN="m -0.9 0 v -2 m 1.8 2 v -2 m -2.3 0 h 2.8 m -2.6 0.4 h 2.4",tI="m 0,0 0,-4 m 0,2 c 3,0 2,-6 0,-6 c -2,0 -3,6 0,6 z",tD="m -0.5,0 v -1.8 h 1 v 1.8 z m 0.1,-0.9 v -0.7 h 0.8 v 0.7 z m 0.6,0.2 h 0.2 m -0.7,0.5 v -0.2 h 0.6 v 0.2 z",tA="m -0.5,-1 l 0.15,1 h 0.7 l 0.15,-1";Object.entries({bench:tM,entrance:tE,guide_post:tO,info_board:t$,monument:tk,statue:tR,torii:tN,tree:tI,vending_machine:tD,waste_basket:tA});var tT=n(9052);function tC(t){let e=new Map([...Object.keys(t.properties).filter(t=>"other_tags"!==t&&!t.match(/^centroid|^area$/)).filter(e=>e in t.properties&&t.properties instanceof Object&&null!==t.properties[e]).map(e=>[e,String(t.properties[e])]),...t.properties.other_tags?.split(/","/g).map(t=>t.split(/"=>"/).map(t=>t.replace(/"/,"")))??[]]);return(0,r.jsx)("table",{className:"properties",style:{display:"block",fontSize:"x-small",borderSpacing:0,margin:"1em 0.5em",maxWidth:"calc(50vmin - 2em)",overflowX:"scroll",overscrollBehaviorX:"none",touchAction:"pan-x pan-y"},children:(0,r.jsx)("tbody",{style:{border:0},children:(0,r.jsx)(tz,{tags:e})})})}function tz(t){return(0,r.jsx)(r.Fragment,{children:Array.from(t.tags.entries()).map(([t,e],n)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsx)("tr",{style:{margin:0,boxSizing:"border-box"},children:(0,r.jsxs)("td",{style:{border:"0.5px darkgray solid",margin:0,padding:"0.25em",boxSizing:"border-box",scrollbarWidth:"none",width:"calc(50vmin - 2em)"},children:[(0,r.jsxs)("span",{style:{color:"gray"},children:[t," "]}),(0,r.jsx)("span",{style:{},children:e})]})})},n))})}let tL={getMapLayers:()=>[{type:"multipolygon",name:"island",filter:t=>!!t.natural?.match(/^coastline$/)},{type:"multipolygon",name:"area",data:(tS.Ow.cartoConfig?.internals??tS.Ow.mapData.internals).features.map(t=>t.geometry.coordinates)},{type:"line",name:"cliff",filter:t=>!!t.other_tags?.match(/"natural"=>"(cliff)"/)},{type:"multipolygon",name:"rock",filter:t=>!!t.natural?.match(/rock|bare_rock/)},{type:"multipolygon",name:"grass",filter:t=>!!t.landuse?.match(/grass/)},{type:"multipolygon",name:"forest",filter:t=>!!t.landuse?.match(/forest/)||!!t.natural?.match(/wood/)},{type:"multipolygon",name:"garden",filter:t=>!!t.leisure?.match(/garden/)},{type:"multipolygon",name:"farmland",filter:t=>!!t.landuse?.match(/farmland/)},{type:"multipolygon",name:"water",filter:t=>!!t.natural?.match(/^water$/)},{type:"line",name:"ditch",filter:t=>!!t.waterway?.match(/^(ditch)$/)},{type:"line",name:"stream",filter:t=>!!t.waterway?.match(/^(stream)$/)},{type:"line",name:"river",filter:t=>!!t.waterway?.match(/^(river)$/)},{type:"multipolygon",name:"wetland",filter:t=>!!t.natural?.match(/wetland/)},{type:"multipolygon",name:"playground",filter:t=>!!t.tourism?.match(/zoo/)||!!t.leisure?.match(/ice_rink|pitch|playground/)||!!t.landuse?.match(/recreation_ground/)},{type:"multipolygon",name:"grave_yard",filter:t=>!!t.amenity?.match(/grave_yard/)},{type:"multipolygon",name:"parking",filter:t=>!!t.amenity?.match(/(parking|bicycle_parking)/)},{type:"multipolygon",name:"building",filter:t=>!!t.building?.match(/./)&&!t.building?.match(/roof/)},{type:"line",name:"path",width:1,filter:t=>!!t.highway?.match(/^(path|track)$/)},{type:"line",name:"footway",width:1,filter:t=>!!t.highway?.match(/^(footway|steps)$/)},{type:"line",name:"steps",width:1,filter:t=>!!t.highway?.match(/^(steps)$/)},{type:"line",name:"cycleway",width:3,filter:t=>!!t.highway?.match(/^(cycleway)$/)},{type:"line",name:"service",width:4,filter:t=>!!t.highway?.match(/^(service)$/)},{type:"line",name:"pedestrian",width:8,filter:t=>!!t.highway?.match(/^(pedestrian)$/)},{type:"line",name:"road",width:6,filter:t=>!!t.highway?.match(/./)&&!t.highway?.match(/^(footway|path|pedestrian|steps|cycleway|track|service)$/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.other_tags?.match(/("highway"=>"service"|"area:highway"=>"service")/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.man_made?.match(/bridge/)},{type:"multipolygon",name:"pedestrian-area",filter:t=>!!t.other_tags?.match(/"pedestrian"/)},{type:"line",name:"escalator background",filter:t=>!!t.highway?.match(/^(steps)$/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{type:"line",name:"escalator foreground",filter:t=>!!t.highway?.match(/^(steps)$/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{type:"line",name:"wall",filter:t=>!!t.barrier?.match(/^(wall)$/)},{type:"line",name:"fence",filter:t=>!!t.barrier?.match(/^(fence)$/)},{type:"line",name:"retaining-wall",filter:t=>!!t.barrier?.match(/^(retaining_wall)$/)},{type:"line",name:"bridge shadow",widthScale:1.8,filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"bridge edge",widthScale:1.4,filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"bridge road",filter:t=>!!t.other_tags?.match(/"bridge"/)},{type:"line",name:"tunnel shadow",widthScale:1.8,filter:t=>!!t.other_tags?.match(/"tunnel"/)},{type:"multipolygon",name:"roof",filter:t=>!!t.building?.match(/./)&&!!t.building?.match(/roof/)}],getMapObjects:()=>[{name:"benches",path:tM,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"bench"/)},{name:"entrances",path:tE,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"entrance"/)},{name:"guide-posts",path:tO,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"guidepost"/)},{name:"info-boards",path:t$,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"information"=>"(board|map)"/)},{name:"trees1",path:tI,width:.15,pointsFilter:t=>!!t.other_tags?.match(/"tree"/)},{name:"torii",path:tN,width:.05,pointsFilter:t=>!!t.man_made?.match(/^torii$/)||!!t.other_tags?.match(/"amenity"=>"place_of_worship"/)&&!!t.other_tags?.match(/"religion"=>"shinto"/)},{name:"monument",path:tk,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"historic"=>"(monument|memorial|tomb)"/)},{name:"statue",path:tR,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"artwork_type"=>"statue"/)},{name:"vending-machine",path:tD,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"vending_machine"/)},{name:"waste-basket",path:tA,width:.05,pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"waste_basket"/)}],getMapSymbols:()=>[{name:"toilets",href:"#XToilets",pointsFilter:t=>!!t.other_tags?.match(/"toilets"/),polygonsFilter:t=>"toilets"===t.building||"toilets"===t.amenity||!!t.other_tags?.match(/"toilets"/)},{name:"parkings",href:"#XParking",pointsFilter:t=>!!t.other_tags?.match(/"parking"/),polygonsFilter:t=>"parking"===t.amenity||!!t.other_tags?.match(/"parking"/)},{name:"drinking-fountains",href:"#XDrinkingFountain",pointsFilter:t=>!!t.other_tags?.match(/"amenity"=>"drinking_water"/)},{name:"elevators",href:"#XElevator",pointsFilter:t=>!!t.highway?.match(/elevator/)},{name:"escalators",href:"#XEscalator",linesFilter:t=>!!t.highway?.match(/steps/)&&!!t.other_tags?.match(/"conveying"=>"yes"/)},{name:"buses",href:"#XBus",pointsFilter:t=>!!t.other_tags?.match(/"bus"=>"yes"/)},{name:"informations",href:"#XInformation",pointsFilter:t=>!!t.other_tags?.match(/"tourism"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/),polygonsFilter:t=>!!t.other_tags?.match(/"tourist"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/)}],getMapMarkers:()=>[{name:"all"}],getMapNames:function(){let t=o.O.cartoConfig?.skipNamePattern,e=o.O.cartoConfig?.splitNamePattern;return[...o.O.mapData.points.features.flatMap(({properties:n})=>{let r=(0,a.Mh)(n);if(null===n.centroid_x||null===n.centroid_y)return[];let i=[n.centroid_x,n.centroid_y],o=(0,h.Bh)(i),s=j(n,t,e);return 0===s.length?[]:[{id:null===r?null:r,name:s,pos:o,size:0,area:void 0}]}),...o.O.mapData.multipolygons.features.flatMap(({properties:n})=>{let r=(0,a.Mh)(n);if(null===n.centroid_x||null===n.centroid_y)return[];let i=[n.centroid_x,n.centroid_y],o=(0,h.Bh)(i),s=function t(e){return e===t||null===e?void 0:e}(n?.area),u=j(n,t,e);return 0===u.length?[]:[{id:null===r?null:r,name:u,pos:o,size:0,area:s}]})]},searchEntries:[{filter:t=>!!t?.other_tags?.match(/"toilets"/),getInfo:(t,e)=>({title:"toilets",x:{tag:"facility",title:"toilets",address:e,properties:t}})},{filter:t=>!!t?.other_tags?.match(/"bus_stop"/),getInfo:(t,e)=>({title:"bus_stop",x:{tag:"facility",title:"bus_stop",address:e,properties:t}})},{filter:t=>"highway"in t&&!!t.highway?.match(/elevator/)&&!t.other_tags?.match(/"level"=>"[1-9][^"]*"/),getInfo:(t,e)=>({title:"elevator",x:{tag:"facility",title:"elevator",address:e,properties:t}})},{filter:t=>"highway"in t&&!!t.highway?.match(/steps/)&&!!t.other_tags?.match(/"conveying"=>"yes"/),getInfo:(t,e)=>({title:"elevator",x:{tag:"facility",title:"escalator",address:e,properties:t}})},{filter:t=>!!t?.other_tags?.match(/"amenity"=>"drinking_water"/),getInfo:(t,e)=>({title:"water",x:{tag:"facility",title:"water",address:e,properties:t}})},{filter:t=>!!t.other_tags?.match(/"tourism"=>"information"/)&&!!t.other_tags?.match(/"information"=>"office"/),getInfo:(t,e)=>({title:"information",x:{tag:"facility",title:"information",address:e,properties:t}})},{filter:t=>!!t.name?.match(/./),getInfo:(t,e)=>({title:"shop",x:{tag:"shop",address:e,properties:t}})}],renderInfo:function(t){let e=tS.Ow.mapMap,n=Number(t.info.x.address),i="address"in t.info.x?(0,a.Ty)(n,e):null;return null===i?(0,r.jsxs)("p",{children:["XXX info not found (osm_id=",t.info.x.address,") XXX"]}):"shop"===t.info.x.tag?function(t){let e=(0,a.SX)(t.properties,"website"),n=Number(t.properties.osm_id??""),i=Number(("osm_way_id"in t.properties&&t.properties.osm_way_id)??""),o=0!==n?n:0!==i?i:0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:[t.properties.name??t.x.name," ",0!==o&&(0,r.jsx)(tS.mN,{_id:o})]}),(0,r.jsxs)("p",{children:[null!==e&&(0,r.jsx)("a",{target:"_blank",href:e,children:"\uD83C\uDF10"}),0!==n&&(0,r.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/node/${n}`,children:"\uD83D\uDDFA️"}),0!==i&&(0,r.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/way/${i}`,children:"\uD83D\uDDFA️"})]}),(0,r.jsx)(tC,{properties:t.properties})]})}({x:t.info.x,properties:i}):function(t){let e=void 0!==t.x.title&&tT.lm.get(t.x.title);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1em"},children:(0,r.jsx)("svg",{style:{display:"block"},viewBox:"-36 -36 72 72",width:"3em",height:"3em",children:e&&(0,r.jsx)("use",{href:e})})}),(0,r.jsx)("p",{children:t.x.properties.name}),(0,r.jsx)(tC,{properties:t.properties})]})}({x:t.info.x,properties:i})},mapSvgStyle:t_,renderMap:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q,{}),(0,r.jsx)(td,{}),(0,r.jsx)(tv,{}),(0,r.jsx)(to,{}),(0,r.jsx)(Z,{}),(0,r.jsx)(L,{})]})},isMapRendered:function(){return(0,$.kq)(k)}}},3274:function(t,e,n){n.d(e,{W:()=>d,w:()=>c});var r=n(6966),i=n(8446),o=n(7427),a=n(2870),s=n(5282),u=n(8339),l=n(5234);function c(){let t=document.getElementById("style-root");if(null===t)throw Error("#style-root not found!");(0,o.createRoot)(t).render((0,r.jsx)(i.StrictMode,{children:(0,r.jsx)(f,{})}))}function f(){let t=(0,l.Se)();(0,i.useEffect)(()=>{requestAnimationFrame(a.yx)},[t]);let e=(0,l.ff)(),n=(0,l.Sn)()?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${s.w6};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",o=(0,l._U)(),c=`
.content {
  width: ${(0,u.mh)(o.width)}px;
  height: ${(0,u.mh)(o.height)}px;
}
`;return(0,r.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,c]})}function d(){let t=(0,l.xX)(),e=(0,l.bM)(),n=(0,l.BO)(),i=t.fontSize*(.5+.5*Math.log2(Math.max(1,n)))*e,o=`
use,
.map-symbols,
.map-markers {
  --map-symbol-size: ${i/72};
}
`;return(0,r.jsx)(r.Fragment,{children:o})}},629:function(t,e,n){n.d(e,{f:()=>a,O:()=>o});var r=n(8446);let i={type:"",name:"",crs:{type:"",properties:{name:""}},features:[]},o={root:"root",map:"map",href:"map.svg",width:0,height:0,fontSize:16,origViewBox:{x:0,y:0,width:0,height:0},title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,getMapLayers:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],getMapNames:()=>[],searchEntries:[],renderInfo:function(t){return(0,r.createElement)("p",{},t.info.title)},mapSvgStyle:"",renderMap:function(){return(0,r.createElement)("div")},isMapRendered:()=>!0,mapData:{areas:i,internals:i,origin:i,measures:i,viewbox:i,points:i,lines:i,multilinestrings:i,multipolygons:i},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly}};function a(t){o={...o,...t}}},2870:function(t,e,n){n.d(e,{A7:()=>y,CB:()=>b,Dj:()=>s,E4:()=>i,F_:()=>q,G6:()=>u,GU:()=>f,Js:()=>d,Oc:()=>G,Pj:()=>B,Rd:()=>h,U1:()=>M,Ug:()=>r,XV:()=>v,XW:()=>l,aL:()=>U,aU:()=>Y,bQ:()=>c,bT:()=>D,cR:()=>E,df:()=>W,er:()=>O,hp:()=>w,iD:()=>o,iZ:()=>I,j7:()=>$,jg:()=>g,k3:()=>T,l4:()=>K,lJ:()=>a,lw:()=>L,lz:()=>_,mI:()=>C,oC:()=>R,qC:()=>H,r6:()=>Z,rA:()=>x,rH:()=>P,tZ:()=>j,u5:()=>p,uo:()=>k,vh:()=>A,wG:()=>N,yH:()=>z,yx:()=>F,zC:()=>S});let r=new Set,i=new Set,o=new Set,a=new Set,s=new Set,u=new Set,l=new Set,c=new Set,f=new Set,d=new Set,p=new Set,h=new Set,m=new Set,g=new Set,y=new Set,v=new Set,x=new Set,b=new Set,w=new Set,j=new Set,S=new Set,_=new Set,M=new Set,E=new Set,O=new Set,$=new Set,k=new Set;function R(t){r.forEach(e=>e(t))}function N(t){i.forEach(e=>e(t))}function I(t,e){o.forEach(n=>n({psvg:t,info:e}))}function D(t,e){a.forEach(n=>n({psvg:t,info:e}))}function A(t,e,n){s.forEach(r=>r(t,e,n))}function T(t,e,n){u.forEach(r=>r(t,e,n))}function C(t){l.forEach(e=>e(t))}function z(){c.forEach(t=>t())}function L(){f.forEach(t=>t())}function F(){g.forEach(t=>t())}function U(t,e){y.forEach(n=>n(t,e))}function q(t,e){v.forEach(n=>n(t,e))}function P(t,e,n){x.forEach(r=>r(t,e,n))}function W(t,e){b.forEach(n=>n(t,e))}function Z(t){w.forEach(e=>e(t))}function G(t){j.forEach(e=>e(t))}function H(t){d.forEach(e=>e(t))}function Y(t){p.forEach(e=>e(t))}function B(t){h.forEach(e=>e(t))}function K(){m.forEach(t=>t())}},7536:function(t,e,n){n.d(e,{im:()=>nv,Ow:()=>f.O,mN:()=>v});var r,i,o,a,s,u,l,c,f=n(629),d=n(2870),p=n(6966),h=n(2951),m=n(1018);let g={context:{ids:new Set}},y=(0,h.a)({context:function(){let t=function(t){if(!t)return;let e=JSON.parse(t);if("context"in e&&"ids"in e.context)return{...e,context:{...e.context,ids:new Set(e.context.ids)}}}(localStorage.getItem("svgmapviewer:likes"));return void 0===t?g:t}().context,on:{like:(t,e)=>({...t,ids:new Set(Array.from(t.ids.add(e.id)))}),unlike:(t,e)=>(t.ids.delete(e.id),{...t,ids:new Set(Array.from(t.ids))})}});function v(t){let{_id:e}=t;return(0,m.v9)(y,t=>t.context.ids).has(e)?(0,p.jsx)("span",{className:"like liked",onClick:()=>y.trigger.unlike({id:e}),children:"★"}):(0,p.jsx)("span",{className:"like not-liked",onClick:()=>y.trigger.like({id:e}),children:"☆"})}y.subscribe(function(t){localStorage.setItem("svgmapviewer:likes",JSON.stringify({...t,context:{...t.context,ids:Array.from(t.context.ids.keys())}}))});let x=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var b=n(4107),w=n(8446),j=n(2992),S=n(9908),_=n(7984),M=n(5282);let E=(0,j.cY)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null},initial:"Idle",states:{Idle:{on:{SELECT:[{guard:({event:t})=>t.force??!1,actions:(0,S.a)({fidx:({event:t})=>t.fidx})},{guard:({context:t,event:e})=>t.fidx!==e.fidx,actions:(0,S.a)({fidx:({event:t})=>t.fidx,prevFidx:({context:t})=>t.fidx}),target:"Animating"}]}},Animating:{on:{DONE:{actions:(0,S.a)({prevFidx:null}),target:"Idle"}}}}}),O=(0,_.c)(E);function $(){let{fidx:t,prevFidx:e}=(0,b.v9)(O,t=>t.context),n=function(t,e){let n=f.O.floorsConfig;if(void 0===n)return null;let r=n.floors.map((n,r)=>r===t||r===e?"":`
.fidx-${r} {
  visibility: hidden;
}
`).join(""),i=null===e?"":`
.fidx-${e} {
  will-change: opacity;
  animation: xxx-disappearing ${M.Bp} linear;
}
.fidx-${t} {
  will-change: opacity;
  animation: xxx-appearing ${M.Bp} linear;
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
`}(t,e),r=(0,w.useCallback)(e=>e===t?()=>(0,d.Pj)(e):void 0,[t]),i=(0,w.useCallback)(n=>null!==e||n===t?void 0:()=>(0,d.qC)(n),[t,e]);return{fidx:t,prevFidx:e,style:n,fidxToOnAnimationEnd:r,fidxToOnClick:i}}O.start(),d.u5.add(function(t){O.send({type:"SELECT",fidx:t})}),d.Rd.add(function(t){O.send({type:"DONE",fidx:t})});var k=n(1108),R=n(3985);function N(t,e,n){let r=(0,k.Mh)(t);if(null===r)return null;let i=t.name;if(null!==i&&void 0!==n&&i.match(n))return null;let{centroid_x:o,centroid_y:a}=t;return null===o||null===a||0===e.filter(e=>e.filter(t)).length?null:{a:r+"",lonlat:{x:o,y:a}}}let I=new Worker(new URL(n.p+n.u("686"),n.b),Object.assign({},{type:"module"},{type:void 0}));I.onmessage=t=>{let e=t.data;"INIT.DONE"===e.type||"SEARCH.DONE"===e.type&&function(t){let e=function(t,e,n){let r=Number(n.address),i=(0,k.Ls)(r,t);if(null===i)return null;let o=i.properties,a=e.flatMap(t=>t.filter(o)?[t.getInfo(o,n.address)]:[]);return 0===a.length?null:a[0]}(f.O.mapMap,f.O.searchEntries,t);if(null===e)return;let n=f.O.mapCoord.matrix.transformPoint(t.lonlat);(0,d.iZ)(n,e)}(e.res)},I.onerror=t=>{console.log("error",t)},I.onmessageerror=t=>{console.log("messageerror",t)},d.E4.add(function(t){let e=f.O.mapCoord.matrix.inverse().transformPoint(t);I.postMessage({type:"SEARCH",pgeo:e})});var D=n(5497);let A=(0,j.cY)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Idle",states:{Idle:{on:{SEARCH:{actions:(0,D.e)(({event:t})=>t),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,D.e)(({event:t})=>t),target:"Done"},"SEARCH.CANCEL":{target:"Done"}}},Done:{always:"Idle"}}}),T=(0,_.c)(A);function C(t){T.send({type:"SEARCH",psvg:t})}function z(t){T.send(null===t?{type:"SEARCH.CANCEL"}:{type:"SEARCH.DONE",...t})}T.on("SEARCH",({psvg:t})=>(0,d.wG)(t)),T.on("SEARCH.DONE",({psvg:t,info:e})=>(0,d.bT)(t,e)),T.start();var L=n(7611),F=n(7463),U=n(3690),q=n(9616);function P(t){return t>.5?-1:+(t<.5)}function W(t){return t<.3?1:t>.7?-1:0}function Z(t,e,n,r){let i=e/2,o=n/2,a=e/20,s=a/2,u=(0,q.lM)(-i*t.h,-o*t.v),l=0===t.h||0===t.v?(0,q.lM)(-(i+r)*t.h,-(o+r)*t.v):(0,q.lM)(-(i+r*Math.cos(t.th))*t.h,-(o+r*Math.sin(t.th))*t.v),[c,f]=0===t.h?[(0,q.lM)(-s,0),(0,q.lM)(s,0)]:0===t.v?[(0,q.lM)(0,-s),(0,q.lM)(0,s)]:t.th<Math.PI/4?[(0,q.lM)(0,0),(0,q.lM)(0,a*t.v)]:[(0,q.lM)(0,0),(0,q.lM)(a*t.h,0)],d=(0,q.uI)(u,c),p=(0,q.uI)(u,f);return{p:u,q:l,a:d,b:p}}function G(t){return{open:t,animating:!1}}function H(t){return t.open||t.animating?null:{open:!0,animating:!0}}function Y(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function B(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function K(t){return t.open||!t.animating?null:{open:!1,animating:!1}}var X=n(9199);let V={p:q.kh,psvg:q.kh,layout:X.MN,info:{title:""}};function J(t){return function(e,n){let r=e[n],i=t(r);return e[n]=null===i?r:i,e}}function Q(t,e){return function({open:t,animating:e}){return t||e}(t[e])}let tt=(0,j.cY)({types:{},guards:{isHeaderVisible:({context:{m:t}})=>Q(t,"header"),isDetailVisible:({context:{m:t}})=>Q(t,"detail"),animationEnded:({context:{animationEnded:t}})=>t.header&&t.detail},actions:{startCancel:(0,S.a)({canceling:()=>!0}),endCancel:(0,S.a)({canceling:()=>!1}),open:(0,S.a)({m:({context:{m:t}},{part:e})=>J(H)(t,e)}),close:(0,S.a)({m:({context:{m:t}},{part:e})=>J(B)(t,e)}),handle:(0,S.a)({m:({context:{m:t}},{part:e})=>J(t[e].open?Y:K)(t,e)})}}).createMachine({type:"parallel",id:"ui",context:({input:t})=>({...t,all:{open:!1,animating:!1},canceling:!1,detail:V,m:{header:G(!0),detail:G(!1)},animationEnded:{header:!0,detail:!0}}),states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,S.a)({detail:({event:{psvg:t,info:e,layout:n}})=>({psvg:t,p:(0,X.vT)(n).transformPoint(t),info:e,layout:n})}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,_.n)("animationEnded")},{actions:(0,S.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,_.n)("isDetailVisible")},{actions:(0,S.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,_.n)("animationEnded")},{actions:(0,S.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,_.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,S.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,D.e)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,S.a)({animationEnded:({context:t})=>({...t.animationEnded,header:!0})}),(0,_.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,S.a)({animationEnded:({context:t})=>({...t.animationEnded,detail:!0})}),(0,_.r)({type:"DONE"})]}}}}});function te(){return(0,b.v9)(tr,t=>t.context.m.header)}function tn(){return(0,b.v9)(tr,t=>t.context.m.detail)}let tr=(0,_.c)(tt);tr.on("CLOSE.DONE",d.lw),tr.start();function ti(t){return(0,p.jsxs)("div",{className:"balloon",children:[(0,p.jsx)(ta,{...t}),t.children,(0,p.jsx)("style",{children:to})]})}d.Dj.add(function(t,e,n){tr.send({type:"DETAIL",psvg:t,info:e,layout:n})}),d.XW.add(function(t){tr.send({type:t?"OPEN":"CANCEL"})}),d.bQ.add(function(){tr.send({type:"CANCEL"})}),d.GU.add(function(){requestAnimationFrame(()=>(function(){let t=L.eM.get("detail");if(void 0===t)return;let e=t.querySelector(".detail");null!==e&&e.scroll(0,0)})())});let to=`
.balloon,
.balloon-svg {
  ${M.sF}
  ${M.lm}
  z-index: ${M.X2};
  will-change: opacity, transform;
}
`;function ta(t){let e=t._hv;if(null===e)return(0,p.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(t,e){let{bw:n,bh:r,ll:i,d:o,width:a,height:s}=e,u=(0,U.BZ)(-a/2,-a/2,a,s),{body:l,leg:c}=function(t,e,n,r){let i=e/2,o=n/2,a=`
m${-i},${-o}
h${e}
v${n}
h${-e}
z
`,{p:s,q:u,a:l,b:c}=Z(t,e,n,r),f=(0,q.m7)(u,l),d=(0,q.m7)(c,u),p=(0,q.m7)(s,c);return{body:a,leg:`
m${l.x},${l.y}
l${f.x},${f.y}
l${d.x},${d.y}
l${p.x},${p.y}
z
`}}(t,n,r,i);return{viewBox:u,width:a,height:s,bg:`M${o},${o}`+l+`M${o},${o}`+c,fg:"M0,0"+l+"M0,0"+c}}(e,t._size);return(0,p.jsxs)("svg",{className:"balloon-svg",viewBox:(0,U.nE)(n),width:r,height:i,children:[(0,p.jsx)("path",{className:"bg",d:a}),(0,p.jsx)("path",{className:"fg",d:o}),(0,p.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function ts({_p:t,_hv:e,_size:n,_leg:r}){let i=tn(),o=null!==t&&null!==e&&function({open:t,animating:e}){return t||e}(i)?function({open:t,animating:e},n,r,i,o){let{bw:a,bh:s,width:u,height:l}=i,c=(0,q.m7)(o.q,o.p),f=(0,q.lM)((a/2+Math.abs(c.x))*r.h,(s/2+Math.abs(c.y))*r.v);if(e){let[e,r]=t?[0,1]:[1,0],[i,o]=t?[0,1]:[1,0],[a,s]=t?["0px","var(--dp-x)"]:["var(--dp-x)","0px"],[c,d]=t?["0px","var(--dp-y)"]:["var(--dp-y)","0px"],p=t?M.w6:M.Dg;return`
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
  --duration: ${M.Cq}ms;
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
`}(i,t,e,n,r):".balloon, .detail { visibility: hidden; }";return(0,p.jsx)("style",{children:o})}var tu=n(2679),tl=n(8096),tc=n(82);function tf(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}var td=n(1916),tp=n(8895);let th=(0,j.cY)({types:{},actions:{getScroll:(0,S.a)({scroll:()=>(0,td.O_)()}),syncScroll:(t,{pos:e})=>(0,td.Zt)(e)},actors:{syncScrollLogic:(0,tp.p4)(async({input:t})=>{if(null===t)throw Error("input is null");if(!(0,td.Zt)(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:({event:t})=>({pos:t.pos})}]},GET:{actions:["getScroll",(0,D.e)(({context:{scroll:t}})=>({type:"SCROLL.GET.DONE",scroll:t}))]},SYNCSYNC:{actions:(0,S.a)({dest:({event:t})=>t.pos}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:({context:t})=>t.dest,onDone:{actions:["getScroll",(0,D.e)(({context:{scroll:t}})=>({type:"SCROLL.SYNCSYNC.DONE",scroll:t})),(0,S.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),tm={slideDoneCbs:new Set,getDoneCbs:new Set,syncSyncDoneCbs:new Set},tg=(0,_.c)(th,{systemId:"system-scroll1"});function ty(t){tg.send(t)}tg.on("SCROLL.SLIDE.DONE",t=>tm.slideDoneCbs.forEach(e=>e(t))),tg.on("SCROLL.GET.DONE",t=>tm.getDoneCbs.forEach(e=>e(t))),tg.on("SCROLL.SYNCSYNC.DONE",t=>tm.syncSyncDoneCbs.forEach(e=>e(t)));let tv="panning",tx=(0,j.cY)({types:{},guards:{shouldReset:(t,{ev:e})=>"r"===e.key,shouldRecenter:(t,{ev:e})=>"c"===e.key,shouldRotate:(t,{ev:e})=>"t"===e.key,shouldZoom:(t,{ev:e})=>0!==tf(e.key),isTouching:({context:{touching:t}})=>t,isHoming:({context:{homing:t}})=>t,isZoomWanted:({context:{want_animation:t}})=>"zoom"===t,isRotateWanted:({context:{want_animation:t}})=>"rotate"===t,isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>f.O.isMapRendered(),isUiRendered:()=>f.O.isUiRendered()},actions:{syncScroll:({context:{layout:t}})=>ty({type:"SYNC",pos:t.scroll}),syncScrollSync:({context:{layout:t}})=>ty({type:"SYNCSYNC",pos:t.scroll}),getScroll:()=>ty({type:"GET"}),zoomKey:(0,S.a)({z:(t,{ev:e})=>tf(e.key)}),zoomHome:(0,S.a)({z:()=>null,zoom:()=>1,homing:()=>!0}),zoomEvent:(0,S.a)({z:(t,{z:e})=>e,cursor:({context:{cursor:t}},{p:e})=>null===e?t:e}),startZoom:(0,S.a)({animation:({context:{layout:t,cursor:e,z:n}})=>null===n?function(t,e){let n=(0,U.be)(e.config.svg),r=(0,X.vT)(t).transformPoint(n),i=e.svgScale.s/t.svgScale.s,o=(0,U.be)(t.container),a=new DOMMatrixReadOnly().translate(o.x,o.y).scale(1/i).translate(-r.x,-r.y);return{move:null,zoom:{svg:e.svg,svgScale:e.svgScale,q:a,o:null},rotate:null}}(t,(0,tc.nl)(t)):function(t,e,n){var r,i;let o=(0,X.vT)(t).inverse().transformPoint(n),a=1/(i=e,Math.pow(f.O.zoomFactor,i)),s=new DOMMatrixReadOnly().scale(1/a,1/a);return{move:null,zoom:{svg:(0,tl.x2)(t.svg,a,o.x,o.y),svgScale:(r=t.svgScale,"x"in r?{x:r.x*a,y:r.y*a}:{s:r.s*a}),q:s,o:n},rotate:null}}(t,n,e)}),startRotate:(0,S.a)({animation:({context:{layout:t,cursor:e}})=>{var n,r;return n=0,r=e,{move:null,zoom:null,rotate:{deg:90,q:new DOMMatrixReadOnly().rotate(90),o:r}}}}),updateZoom:(0,S.a)({prevLayout:({context:{layout:t}})=>t,layout:({context:{layout:t,animation:e}})=>null===e?t:(0,tu.zG)(t,t=>null===e.move?t:(0,tc.v4)(t,e.move.move),t=>null===e.zoom?t:(0,tc.J8)(t,e.zoom.svg,e.zoom.svgScale),t=>null===e.rotate?t:(0,tc.vY)(t,e.rotate.deg))}),endZoom:(0,S.a)({prevLayout:null,want_animation:null,animation:null,z:null,zoom:({context:{z:t,zoom:e}})=>null===t?e:e*Math.pow(2,t)}),endRotate:(0,S.a)({prevLayout:null,want_animation:null,animation:null}),wantZoom:(0,S.a)({want_animation:"zoom"}),wantRotate:(0,S.a)({want_animation:"rotate"}),syncAnimation:({context:{animation:t}})=>{let e=t?.move?.q??t?.zoom?.q??t?.rotate?.q??null,n=t?.move?.o??t?.zoom?.o??t?.rotate?.o??null;null!==e&&(0,d.r6)({matrix:e,origin:n})},syncLayout:({context:{layout:t,rendered:e}})=>(0,d.F_)(t,e),resetCursor:(0,S.a)({cursor:({context:{layout:t}})=>(0,U.be)(t.container)}),cursor:(0,S.a)({cursor:(t,{ev:e})=>(0,q.lM)(e.pageX,e.pageY)}),setModeToPanning:(0,S.a)({mode:tv,cursor:({context:{layout:t}})=>(0,U.be)(t.container)}),setModeToTouching:(0,S.a)({mode:"touching"}),setModeToLocked:(0,S.a)({mode:"locked"}),startTouching:(0,S.a)({touching:!0}),endTouching:(0,S.a)({touching:!1}),notifyTouching:(0,_.r)({type:"TOUCHING"}),notifyTouchingDone:(0,_.r)({type:"TOUCHING.DONE"}),startAnimating:(0,S.a)({animating:()=>!0}),stopAnimating:(0,S.a)({animating:()=>!1}),resizeLayout:(0,S.a)({rendered:!1,origLayout:(t,{layout:e})=>e,layout:(t,{layout:e})=>(0,tc.Ul)(e,9)}),updateLayoutFromScroll:(0,S.a)({layout:({context:t})=>{let{scroll:e}=(0,td.so)();return(0,tc.p1)(t.layout,e)}}),notifyZoomStart:(0,D.e)(({context:{layout:t,zoom:e,z:n}})=>({type:"ZOOM.START",layout:t,zoom:e,z:null===n?0:n})),notifyZoomEnd:(0,D.e)(({context:{layout:t,zoom:e}})=>({type:"ZOOM.END",layout:t,zoom:e})),notifySearch:(0,D.e)(({context:t})=>{let{scroll:e}=(0,td.so)(),n=(0,tc.p1)(t.layout,e);return{type:"SEARCH",psvg:(0,X.vT)(n).inverse().transformPoint(t.cursor)}}),notifySearchDone:(0,_.r)({type:"SEARCH.DONE"}),notifySearchEndDone:(0,D.e)(({context:t},{res:e})=>{let{scroll:n}=(0,td.so)(),r=(0,tc.p1)(t.layout,n);return{type:"SEARCH.END.DONE",psvg:e.psvg,info:e.info,layout:r}}),endHoming:(0,S.a)({cursor:({context:t})=>(0,U.be)(t.origLayout.container),layout:({context:t})=>(0,tc.vY)((0,tc.Ul)(t.origLayout,9),(0,tc.lQ)(t.layout)),homing:()=>!1}),notifyMode:(0,D.e)(({context:{mode:t}})=>({type:"MODE",mode:t})),notifyLock:(0,D.e)({type:"LOCK",ok:!0}),setRendered:(0,S.a)({rendered:!0}),notifySwitch:(0,D.e)((t,{fidx:e})=>({type:"SWITCH",fidx:e})),notifySwitchDone:(0,D.e)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"Resizing",context:{origLayout:tc.qF,layout:tc.qF,prevLayout:null,cursor:(0,U.be)(tc.qF.container),z:null,zoom:1,homing:!1,want_animation:null,animation:null,mode:tv,touching:!1,animating:!1,rendered:!1},on:{"TOUCH.LOCK":{actions:["startTouching","notifyTouching","setModeToTouching","notifyMode"]},"TOUCH.UNLOCK":{actions:["endTouching","notifyTouchingDone","setModeToPanning","notifyMode"]},"SEARCH.LOCK":{actions:["notifyLock","setModeToLocked","notifyMode"]},"SEARCH.UNLOCK":{actions:["setModeToPanning","notifyMode","notifySearchDone"]}},states:{Resizing:{initial:"WaitingForResizeRequest",onDone:"Appearing",states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:({event:t})=>t},target:"WaitingForMapRendered"}}},WaitingForWindowStabilized:{id:"Resizing-WaitingForWindowStabilized",after:{500:{target:"WaitingForMapRendered"}}},WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,_.a)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"syncLayout",on:{RENDERED:{actions:["setRendered","syncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"syncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Done"}}},Done:{type:"final"}}},Appearing:{on:{"ANIMATION.END":{target:"Panning"}}},Panning:{on:{RESIZE:{actions:[{type:"resizeLayout",params:({event:t})=>t}],target:"#Resizing-WaitingForWindowStabilized"},"LAYOUT.RESET":{actions:["zoomHome","wantZoom"],target:"Zooming"},"KEY.UP":[{guard:{type:"shouldZoom",params:({event:t})=>({ev:t.ev})},actions:[{type:"zoomKey",params:({event:t})=>({ev:t.ev})},"wantZoom"],target:"Zooming"},{guard:{type:"shouldRotate",params:({event:t})=>({ev:t.ev})},actions:"wantRotate",target:"Zooming"}],CLICK:{guard:()=>f.O.searchEntries.length>0,actions:[{type:"cursor",params:({event:t})=>({ev:t.ev})}],target:"Searching"},SWITCH:{actions:{type:"notifySwitch",params:({event:t})=>t},target:"Switching"},CONTEXTMENU:{target:"Recentering"},ROTATE:{actions:"wantRotate",target:"Zooming"},RECENTER:{target:"Recentering"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:({event:{z:t,p:e}})=>({z:t,p:e})},"wantZoom"],target:"Zooming"},TOUCHING:{target:"Touching"}}},Touching:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Waiting"}}},Waiting:{on:{"TOUCHING.DONE":{target:"Done"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:({event:{z:t,p:e}})=>({z:t,p:e})},"wantZoom"],target:"#Zooming"}}},Done:{type:"final"}}},Searching:{initial:"Starting",onDone:"Panning",states:{Starting:{always:{actions:"notifySearch",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"notifySearchEndDone",params:({event:t})=>t},target:"WaitingForSearchUnlock"}}},WaitingForSearchUnlock:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Panning",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"notifySwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","syncLayout","syncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:[{guard:"isZoomWanted",actions:["updateLayoutFromScroll","startZoom","updateZoom","notifyZoomStart"],target:"Animating"},{guard:"isRotateWanted",actions:["updateLayoutFromScroll","startRotate","updateZoom","notifyZoomStart"],target:"Animating"}]},Animating:{initial:"Starting",onDone:"Done",states:{Starting:{always:{actions:["startAnimating","syncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":[{guard:"isZoomWanted",actions:["endZoom","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"},{guard:"isRotateWanted",actions:["endRotate","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"}]}},Homing:{always:[{guard:"isHoming",actions:["endHoming","syncLayout","syncScroll"],target:"Done"},{target:"Done"}]},Done:{type:"final"}}},Done:{type:"final"}}}}});function tb(t){tw.send(t)}let tw=(0,_.c)(tx,{systemId:"system-viewer1"});tw.on("SEARCH",({psvg:t})=>(0,d.oC)(t)),tw.on("SEARCH.END.DONE",({psvg:t,info:e,layout:n})=>{(0,d.vh)(t,e,n),(0,d.k3)(t,e,n)}),tw.on("LOCK",({ok:t})=>(0,d.mI)(t)),tw.on("ZOOM.START",({layout:t,zoom:e,z:n})=>(0,d.rH)(t,e,n)),tw.on("ZOOM.END",({layout:t,zoom:e})=>(0,d.df)(t,e)),tw.on("LAYOUT",({layout:t})=>(0,d.df)(t,1)),tw.on("MODE",({mode:t})=>(0,d.Oc)(t)),tw.on("SWITCH",({fidx:t})=>(0,d.aU)(t)),tw.on("SWITCH.DONE",()=>(0,d.l4)()),tw.start(),d.Js.add(function(t){tb({type:"SWITCH",fidx:t})}),d.Rd.add(function(){tb({type:"SWITCH.DONE"})}),d.lJ.add(function(t){tw.send({type:"SEARCH.END",res:t})}),d.G6.add(function(t){tw.send({type:"SEARCH.LOCK",psvg:t})}),d.GU.add(function(){tw.send({type:"SEARCH.UNLOCK"})}),d.A7.add(function(t,e){tb({type:"RESIZE",layout:t,force:e})}),tm.getDoneCbs.add(function(t){null!==t.scroll&&tb({type:"SCROLL.GET.DONE",scroll:t.scroll})}),tm.syncSyncDoneCbs.add(function(t){null!==t.scroll&&tb({type:"SCROLL.SYNCSYNC.DONE",scroll:t.scroll})});let tj=!1,tS=!1;function t_(t,e){e?.preventDefault,e?.stopPropagation===!1||t.ev.stopPropagation(),tb(t)}function tM(){let t=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",tE),()=>{e.removeEventListener("wheel",tE)}},[t]),t}function tE(t){let e=t.currentTarget;tS&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function tO(t){let{_detail:e}=t,n=tM();return(0,p.jsxs)("div",{ref:n,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void tr.send(t)},children:[f.O.renderInfo&&!function(t){let e=Object.values(t.info);return 1===e.length&&"string"==typeof e[0]&&""===e[0]}(e)&&f.O.renderInfo({info:e.info}),(0,p.jsx)("style",{children:t$})]})}d.tZ.add(function(t){tj="locked"===t,tS="locked"===t}),d.rA.add(function(){tS=!0}),d.CB.add(function(){tS=!1}),d.U1.add(function(){tb({type:"LAYOUT.RESET"})}),d.cR.add(function(){tb({type:"RECENTER"})}),d.er.add(function(){tb({type:"ROTATE"})}),d.lz.add(function(){tb({type:"ZOOM.ZOOM",z:-1,p:null})}),d.zC.add(function(){tb({type:"ZOOM.ZOOM",z:1,p:null})}),d.jg.add(function(){tb({type:"RENDERED"})});let t$=`
.detail {
  ${M.sF}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${M.R$}
  ${M.QG}
  z-index: ${M.Ru};
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
  ${M.jg}
  margin: 1.5em;
  text-align: center;
}

p {
  ${M.jg}
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
`;function tk(){return(0,L.pR)("detail",(0,p.jsx)(tR,{}),"ui"),(0,p.jsx)("div",{id:"detail"})}function tR(){return(0,p.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,p.jsx)(tN,{}),(0,p.jsx)(tI,{})]})}function tN(){let t=(0,b.v9)(tr,t=>t.context.detail),e=function(t){let e=t.p,n=t.layout,r=function(t,{x:e,y:n}){let r=t.width/t.height,i=(0,q.lM)(e/t.width,n/t.height),o=r>1?P(i.x):W(i.x);return{h:o,v:r>1?W(i.y):P(i.y),th:Math.atan2(t.height,t.width)}}(t.layout.container,e),i=n.container.width,o=n.container.height,a=function(t,e){let n=.01*Math.min(t,e),r=50*n,i=50*n,o=10*n,a=r/100;return{bw:r,bh:i,ll:o,d:a,width:r+2*o+2*a,height:i+2*o+2*a}}(i,o),s=Z(r,a.bw,a.bh,a.ll);return{_p:e,_hv:r,_W:i,_H:o,_size:a,_leg:s}}(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(ti,{...e}),(0,p.jsx)(tO,{_detail:t}),(0,p.jsx)(ts,{...e})]})}function tI(){return(0,p.jsx)("svg",{id:"ui-svg-defs",children:(0,p.jsx)("defs",{children:(0,p.jsx)(F.FP,{})})})}function tD(){return(0,L.pR)("footer",(0,p.jsx)(tA,{}),"ui"),(0,p.jsx)("div",{id:"footer"})}function tA(){let t=f.O;return(0,p.jsxs)("div",{className:"ui-content footer",children:[(0,p.jsx)("p",{children:t.copyright}),(0,p.jsxs)("style",{children:[tT,(0,p.jsx)(tC,{})]})]})}let tT=`
.footer {
  ${M.sP}
  ${M.fD}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${M.jg}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function tC(){let{open:t,animating:e}=te();if(e){let[e,n]=t?[0,1]:[1,0],r=t?M.w6:M.Dg;return(0,p.jsx)(p.Fragment,{children:`
.footer {
  --duration: ${M.t_}ms;
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
`})}return(0,p.jsx)(p.Fragment,{children:`
.footer {
  --b: ${+!!t};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}var tz=n(5234),tL=n(8339);function tF(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("g",{id:"measure",children:(0,p.jsx)(tP,{})})})}function tU(){let{svg:t}=(0,tz.PG)();return(0,p.jsxs)("div",{id:"distance",children:[(0,p.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),tH.map(e=>(0,p.jsxs)(w.Fragment,{children:[(0,p.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,p.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,p.jsx)("style",{children:(0,p.jsx)(tG,{})})]})}function tq(){let t=(0,tz.Ru)(),e=t.x>0?"E":"W",n=t.y>0?"N":"S",r=`${e} ${(0,tL.lQ)(Math.abs(t.x))}`,i=`${n} ${(0,tL.lQ)(Math.abs(t.y))}`;return(0,p.jsxs)("div",{id:"coordinate",children:[(0,p.jsx)("p",{id:"longitude",children:r}),(0,p.jsx)("p",{id:"latitude",children:i}),(0,p.jsx)("style",{children:(0,p.jsx)(tZ,{})})]})}function tP(){let{width:t,height:e}=(0,tz.Q)(),{client:n}=(0,tz.PG)(),r=`M0,${e/2} h${t}`,i=`M${t/2},0 v${e}`,o=tH.map(r=>(function({width:t,height:e,r:n}){return`M${t/2},${e/2} m-${n},0 a${n},${n} 0,1,0 ${2*n},0 a${n},${n} 0,1,0 -${2*n},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(r+1)}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,p.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((t,e)=>(0,p.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function tW(){let{open:t,animating:e}=te(),[n,r]=t?[0,1]:[1,0],i=t?M.w6:M.Dg,o=e?`
.guides {
  --timing: ${i};
  --duration: ${M.t_}ms;
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
`;return(0,p.jsx)(p.Fragment,{children:o})}function tZ(){let{width:t,height:e}=(0,tz.Q)(),n=`
#distance,
#coordinate {
  ${M.sF}
  width: ${t}px;
  height: ${e}px;
}
`,r=`
#longitude {
  ${M.L}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${M.sP}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,p.jsxs)(p.Fragment,{children:[n,r,i]})}function tG(){let{width:t,height:e}=(0,tz.Q)(),{client:n}=(0,tz.PG)(),r=`
.distance {
  ${M.sF}
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
`);return(0,p.jsxs)(p.Fragment,{children:[i,r,o,a]})}let tH=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function tY(){return(0,L.pR)("guides",(0,p.jsx)(tB,{}),"ui"),(0,p.jsx)("div",{id:"guides"})}function tB(){return f.O.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"ui-content guides",children:[(0,p.jsx)("svg",{className:"guides",children:(0,p.jsx)(tF,{})}),(0,p.jsx)(tU,{}),(0,p.jsx)(tq,{}),(0,p.jsxs)("style",{children:[tK,(0,p.jsx)(tW,{})]})]})}let tK=`
.guides {
  ${M.sF}
  ${M.sY}
  ${M.lm}
  z-index: ${M.sr};
}

text {
  ${M.jg}
}
`;function tX(){let{fidx:t,fidxToOnClick:e}=$(),n=f.O.floorsConfig;return void 0===n||n.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"floors",children:[(0,p.jsx)("ul",{className:"floor-list",children:n.floors.map(({name:n},r)=>(0,p.jsx)("li",{className:`floor-item ${t0(r===t)}`,onClick:e(r),children:n},r))}),(0,p.jsx)("style",{children:tV})]})}let tV=`
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
  ${M.Kp}
}
.floor-item {
  text-align: center;
  padding: 0.5em 0.75em;
  border: 1.5px solid black;
  pointer-events: initial;
  will-change: opacity;
  transition: opacity ${M.Bp};
}
.floor-item.selected {
  opacity: 1;
}
.floor-item.unselected {
  opacity: 0.5;
}
`;function tJ(){let{fidx:t}=$(),e=f.O.floorsConfig;return void 0===e||e.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{children:[e.floors.map((e,n)=>(0,p.jsx)("h2",{className:`floor-name ${t0(n===t)}`,children:e.name},n)),(0,p.jsx)("style",{children:tQ})]})}let tQ=`
.floor-name {
  position: absolute;
  transform: translate(-50%, 0);
  margin: 0.25em 0;
  font-size: 4em;
  will-change: opacity;
  transition: opacity ${M.Bp};
}
.floor-name.selected {
  opacity: 1;
}
.floor-name.unselected {
  opacity: 0;
}
`;function t0(t){return t?"selected":"unselected"}function t1(){return(0,L.pR)("header",(0,p.jsx)(t5,{}),"ui"),(0,p.jsx)("div",{id:"header"})}function t5(){let t=f.O;return(0,p.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void tr.send(t)},children:[(0,p.jsx)("h1",{className:"title",onClick:()=>void d.U1.forEach(t=>t()),children:t.title}),(0,p.jsx)(tJ,{}),(0,p.jsxs)("style",{children:[t2,(0,p.jsx)(t3,{})]})]})}let t2=`
.header {
  ${M.sF}
  ${M.fD}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${M.jg}
  ${M.R$}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function t3(){let{open:t,animating:e}=te();if(e){let[e,n]=t?[0,1]:[1,0],r=t?M.w6:M.Dg;return(0,p.jsx)(p.Fragment,{children:`
.header {
  --timing: ${r};
  --duration: ${M.t_}ms;
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
`})}return(0,p.jsx)(p.Fragment,{children:`
.header {
  --b: ${+!!t};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function t6(){return(0,L.pR)("left",(0,p.jsx)(t7,{}),"ui"),(0,p.jsx)("div",{id:"left"})}function t7(){return(0,p.jsxs)("div",{className:"ui-content left bottom",children:[(0,p.jsx)(tX,{}),(0,p.jsx)("style",{children:t4})]})}let t4=`
.left {
  ${M.sF}
  ${M.b8}
  padding: 0.4em;
  font-size: smaller;
  ${M.lm}

  transform-origin: 100% 50%;
  transform: translateY(calc(-50% + 50vh));
  transform: translateY(calc(-50% + 50svh));
}

.left {
  top: initial;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function t9(){return(0,L.pR)("right",(0,p.jsx)(t8,{}),"ui"),(0,p.jsx)("div",{id:"right"})}function t8(){return(0,p.jsxs)("div",{className:"ui-content right bottom",children:[(0,p.jsx)(ee,{}),(0,p.jsx)("style",{children:et})]})}let et=`
.right {
  ${M.Kv}
  ${M.b8}
  padding: 0.4em;
  font-size: smaller;
  ${M.lm}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function ee(){return(0,p.jsxs)("div",{className:"zoom",children:[(0,p.jsx)(er,{}),(0,p.jsx)(ei,{}),(0,p.jsx)(eo,{}),(0,p.jsx)(ea,{}),(0,p.jsx)(es,{}),(0,p.jsx)(eu,{}),(0,p.jsxs)("style",{children:[en,(0,p.jsx)(el,{})]})]})}let en=`
.zoom {
  font-size: large;
  margin: 0;
  ${M.fD}
}

.zoom-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${M.R$}
  cursor: default;
  ${M.Kp}
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
`;function er(){return(0,p.jsx)("div",{className:"zoom-item fullscreen",onClick:()=>void d.uo.forEach(t=>t()),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ey})})})}function ei(){return f.O.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"zoom-item position",onClick:()=>void d.j7.forEach(t=>t()),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:eg})})})}function eo(){return(0,p.jsx)("div",{className:"zoom-item recenter",onClick:()=>void d.cR.forEach(t=>t()),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ep})})})}function ea(){return(0,p.jsx)("div",{className:"zoom-item rotate",onClick:()=>void d.er.forEach(t=>t()),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ed})})})}function es(){return(0,p.jsx)("div",{className:"zoom-item zoom-out",onClick:()=>void d.lz.forEach(t=>t()),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ef})})})}function eu(){return(0,p.jsx)("div",{className:"zoom-item zoom-in",onClick:()=>void d.zC.forEach(t=>t()),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ec})})})}function el(){let{open:t,animating:e}=te();if(e){let[e,n]=t?[0,1]:[1,0],r=t?M.w6:M.Dg;return(0,p.jsx)(p.Fragment,{children:`
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
`})}return(0,p.jsx)(p.Fragment,{children:`
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
`})}let ec=`
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
`,ef=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`,ed=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`,ep=`
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
`,eh=3*Math.sqrt(2),em=eh+6,eg=`
M 0,0
m 0,${em/2}
l -3,-3
a ${eh},${eh} 0,1,1 6,0
z
m 0,${-em+eh+eh/2}
a ${eh/2},${eh/2} 0,1,0 0,${-eh}
a ${eh/2},${eh/2} 0,1,0 0,${eh}
`.replaceAll(/([.]\d\d)\d*/g,"$1"),ey=`
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
`;function ev(){return(0,L.pR)("shadow",(0,p.jsx)(ex,{}),"ui"),(0,p.jsx)("div",{id:"shadow"})}function ex(){let t=tM();return(0,p.jsx)("div",{ref:t,className:"ui-content shadow",onClick:()=>(0,d.yH)(),children:(0,p.jsxs)("style",{children:[eb,(0,p.jsx)(ew,{})]})})}let eb=`
.shadow {
  ${M.sF}
  ${M.sY}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: ${M.Bt};
  will-change: opacity;
}
`;function ew(){let{open:t,animating:e}=tn(),n=(0,tz.PH)();if(!e)return t?(0,p.jsx)(p.Fragment,{children:`
.shadow {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,p.jsx)(p.Fragment,{children:".shadow { display: initial; opacity: 0; }"}):(0,p.jsx)(p.Fragment,{children:".shadow { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],r=t?M.w6:M.Dg;return(0,p.jsx)(p.Fragment,{children:`
.shadow {
  --duration: ${M.Cq}ms;
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
`})}}function ej(){return(0,L.pR)("ui",(0,p.jsx)(eS,{})),(0,p.jsx)("div",{id:"ui"})}function eS(){return(0,p.jsxs)("div",{className:"ui",children:[(0,p.jsx)(ev,{}),(0,p.jsx)(t1,{}),(0,p.jsx)(tD,{}),(0,p.jsx)(t6,{}),(0,p.jsx)(t9,{}),(0,p.jsx)(tY,{}),(0,p.jsx)(tk,{})]})}function e_(){return(0,L.kq)("ui")}var eM=n(5792),eE=n(875),eO=function(t,e){return{left:t,right:e}},e$=function(t){return 0===t.size},ek=function(t){return function(e){return Array.from(e.keys()).sort(t.compare)}},eR=new Map,eN=function(t,e){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1];r.set(a,e(a,s))}return r},eI=function(t,e){return eN(t,function(t,n){return e(n)})},eD=function(t,e){return(0,tu.zG)(t,function(t){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1];e(a,s)&&r.set(a,s)}return r})},eA=function(t,e){return(0,tu.zG)(t,function(t){for(var n,r=new Map,i=t.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=e(a,o[1]);eE.pC(s)&&r.set(a,s.value)}return r})},eT=function(t,e){return(0,tu.zG)(t,function(t){for(var n,r=new Map,i=new Map,o=t.entries();!(n=o.next()).done;){var a=n.value,s=a[0],u=a[1];e(s,u)?i.set(s,u):r.set(s,u)}return eO(r,i)})},eC=function(t,e){return(0,tu.zG)(t,function(t){for(var n,r=new Map,i=new Map,o=t.entries();!(n=o.next()).done;){var a=n.value,s=a[0],u=e(s,a[1]);eE.nM(u)?r.set(s,u.left):i.set(s,u.right)}return eO(r,i)})},ez=function(t){for(var e,n=new Map,r=t.entries();!(e=r.next()).done;){var i=e.value,o=i[0],a=i[1];eE.pC(a)&&n.set(o,a.value)}return n},eL=function(t){for(var e,n=new Map,r=new Map,i=t.entries();!(e=i.next()).done;){var o=e.value,a=o[0],s=o[1];eE.nM(s)?n.set(a,s.left):r.set(a,s.right)}return eO(n,r)},eF="ReadonlyMap",eU={URI:eF,compact:ez,separate:eL},eq=function(t){var e=eG(t);return function(t,n){return e(t,function(t,e,r){return n(e,r)})}},eP=function(t){var e=eH(t);return function(t){var n=e(t);return function(t){return n(function(e,n){return t(n)})}}},eW=function(t){var e=eY(t);return function(t,n){return e(t,function(t,e,r){return n(e,r)})}},eZ=function(t){var e=eq(t),n=eP(t),r=eW(t);return{URI:eF,_E:void 0,reduce:function(t,n,r){return(0,tu.zG)(t,e(n,r))},foldMap:function(t){var e=n(t);return function(t,n){return(0,tu.zG)(t,e(n))}},reduceRight:function(t,e,n){return(0,tu.zG)(t,r(e,n))}}},eG=function(t){var e=ek(t);return function(t,n){return function(r){for(var i=t,o=0,a=e(r);o<a.length;o++){var s=a[o];i=n(s,i,r.get(s))}return i}}},eH=function(t){var e=ek(t);return function(t){return function(n){return function(r){for(var i=t.empty,o=0,a=e(r);o<a.length;o++){var s=a[o];i=t.concat(i,n(s,r.get(s)))}return i}}}},eY=function(t){var e=ek(t);return function(t,n){return function(r){for(var i=t,o=e(r),a=o.length,s=a-1;s>=0;s--){var u=o[s];i=n(u,r.get(u),i)}return i}}},eB=function(t){var e=eZ(t),n=eG(t),r=eH(t),i=eY(t);return{URI:eF,_E:void 0,reduce:e.reduce,foldMap:e.foldMap,reduceRight:e.reduceRight,reduceWithIndex:function(t,e,r){return(0,tu.zG)(t,n(e,r))},foldMapWithIndex:function(t){var e=r(t);return function(t,n){return(0,tu.zG)(t,e(n))}},reduceRightWithIndex:function(t,e,n){return(0,tu.zG)(t,i(e,n))}}},eK=n(2736),eX=n(1842);let eV=eM.pR(q.a4),eJ={URI:eF,_E:void 0,map:eI,compact:ez,separate:eL,filter:function(t,e){return eD(t,function(t,n){return e(n)})},filterMap:function(t,e){return eA(t,function(t,n){return e(n)})},partition:function(t,e){return eT(t,function(t,n){return e(n)})},partitionMap:function(t,e){return eC(t,function(t,n){return e(n)})},reduce:(i=eB(r=eK.Df),o=ek(r),a=function(t){return function(e,n){for(var r=t.of(new Map),i=o(e),a=i.length,s=0;s<a;s++)!function(o){var a=i[o],s=e.get(a);r=t.ap(t.map(r,function(t){return function(e){return t.set(a,e)}}),n(a,s))}(s);return r}},s={URI:eF,_E:void 0,map:eI,mapWithIndex:eN,reduce:i.reduce,foldMap:i.foldMap,reduceRight:i.reduceRight,reduceWithIndex:i.reduceWithIndex,foldMapWithIndex:i.foldMapWithIndex,reduceRightWithIndex:i.reduceRightWithIndex,traverse:function(t){var e=a(t);return function(t,n){return e(t,function(t,e){return n(e)})}},sequence:function(t){var e=a(t);return function(t){return e(t,tu.SK)}},traverseWithIndex:a}).reduce,foldMap:s.foldMap,reduceRight:s.reduceRight,traverse:s.traverse,sequence:s.sequence,mapWithIndex:eN,reduceWithIndex:s.reduceWithIndex,foldMapWithIndex:s.foldMapWithIndex,reduceRightWithIndex:s.reduceRightWithIndex,traverseWithIndex:s.traverseWithIndex,wilt:function(t){var e=s.traverse(t);return function(n,r){return t.map(e(n,r),eU.separate)}},wither:function(t){var e=s.traverse(t);return function(n,r){return t.map(e(n,r),eU.compact)}}},eQ=(u=eK.Eq,l=eM.jG(),c=function t(e){return function(n,r){if(void 0===r){var i,o=t(e);return function(t){return o(n,t)}}for(var a=r.entries();!(i=a.next()).done;){var s=i.value,u=s[0],l=s[1];if(e.equals(u,n))return eE.G([u,l])}return eE.YP}}(u),{concat:function(t,e){if(e$(t))return e;if(e$(e))return t;for(var n,r=new Map(t),i=e.entries();!(n=i.next()).done;){var o=n.value,a=o[0],s=o[1],u=c(a,t);eE.pC(u)?r.set(u.value[0],l.concat(u.value[1],s)):r.set(a,s)}return r},empty:eR});function e0(t){return(0,tu.zG)(t,function(t){return Array.from(t.values()).sort(eV.compare)},eM.DZ(t=>0===t.length?eX.YP:eX.G(t[0])))}function e1(t){return t.length<2?null:(0,q.oe)(t)}function e5(t){return new Map((0,tu.zG)(t.changedTouches,Array.from,eM.UI(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let e2=(0,j.cY)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:({context:{touches:t}})=>0===t.vecs.size,isSingleTouching:({context:{touches:t}})=>1===t.vecs.size,isDoubleTouching:({context:{touches:t}})=>2===t.vecs.size,isManyTouching:({context:{touches:t}})=>t.vecs.size>2,isZooming:({context:{touches:t}})=>null!==t.z},actions:{handleTouchStart:(0,D.a)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>"TOUCH.START"!==e.type?t:function(t,e){let n=eQ.concat(t.vecs,e5(e)),r=e0(n),i=e1(r),o=2!==r.length?null:.5>Math.abs((0,q.$B)(r[0],r[1]));return{...t,vecs:n,points:r,cursor:i,horizontal:o}}(t,e.ev)}),t.raise({type:"STARTED"})}),handleTouchMove:(0,D.a)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>"TOUCH.MOVE"!==e.type?t:function(t,e,n){let r=e5(e),i=eJ.mapWithIndex(t.vecs,(t,e)=>(0,tu.zG)(r.get(t),eX.ij,eX.g_(()=>e,eM.zo(e)))),o=e0(i),a=e1(o),[s,u]=o;if(null===a||(0,tL.o8)(s)||(0,tL.o8)(u))return{...t,vecs:i,points:o,cursor:a};let l=function(t,e,n){let r=Math.pow((t.length>0?t[0]:e)-e,2);return 0===t.length||r>0?[e,...t]:t}(t.dists,(0,q.$k)(s,u),0),c=function([t,e,n,r]){return(0,tL.o8)(t)||(0,tL.o8)(e)||(0,tL.o8)(n)||(0,tL.o8)(r)?null:t<e&&e<n&&n<r?-1:t>e&&e>n&&n>r?1:null}(l);return{vecs:i,points:o,cursor:a,dists:l,z:c,horizontal:t.horizontal}}(t,e.ev,0)}),t.raise({type:"MOVED"})}),handleTouchEnd:(0,D.a)(({enqueue:t})=>{t.assign({touches:({context:{touches:t},event:e})=>"TOUCH.END"!==e.type?t:function(t,e){let n=e5(e),r=eA(t.vecs,(t,e)=>n.has(t)?eX.YP:eX.G(e)),i=e0(r),o=e1(i);return{vecs:r,points:i,cursor:o,dists:0===r.size?[]:t.dists,z:0===r.size?null:t.z,horizontal:t.horizontal}}(t,e.ev)}),t.raise({type:"ENDED"})}),resetTouches:(0,S.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),notifyTouching:(0,D.a)(({enqueue:t,context:e})=>t.emit(2===e.touches.vecs.size?{type:"MULTI.START"}:{type:"MULTI.END"})),notifyZoom:(0,D.a)(({context:t,enqueue:e})=>{let n=t.touches.cursor,r=t.touches.z;null!==n&&null!==r&&e.emit({type:"ZOOM",p:n,z:r})})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:"handleTouchStart"},"TOUCH.MOVE":{actions:"handleTouchMove"},"TOUCH.END":{actions:"handleTouchEnd"},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"notifyTouching",exit:"notifyTouching",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"notifyZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),e3=(0,_.c)(e2),e6=!1;function e7(t){e3.send({type:"TOUCH.START",ev:t})}function e4(t){e3.send({type:"TOUCH.MOVE",ev:t})}function e9(t){e3.send({type:"TOUCH.END",ev:t})}function e8(){e3.send({type:"CANCEL"})}function nt(t){tj||t_({type:"CLICK",ev:t})}function ne(t){t_({type:"CONTEXTMENU",ev:t})}function nn(t){t_({type:"WHEEL",ev:t})}function nr(t){null!==t&&(0,td.mS)(t)}function ni(t){tb({type:"KEY.DOWN",ev:t})}function no(t){tb({type:"KEY.UP",ev:t})}function na(){let t=(0,w.useRef)(null);return(0,p.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:e7,onTouchMove:e4,onTouchEnd:e9,onClick:nt,onContextMenu:ne,onScroll:nr,onWheel:nn,onAnimationEnd:t=>{t_({type:"ANIMATION.END",ev:t}),(0,tz.ix)()},children:[f.O.renderMap(),(0,p.jsx)("style",{children:ns}),(0,p.jsx)(nu,{}),(0,p.jsx)(nl,{}),(0,p.jsx)(nc,{})]})}e3.on("MULTI.START",()=>{e6=!0,tb({type:"TOUCH.LOCK"})}),e3.on("MULTI.END",()=>{tb({type:"TOUCH.UNLOCK"}),e6=!1}),e3.on("ZOOM",({z:t,p:e})=>{tb({type:"ZOOM.ZOOM",z:t>0?1:-1,p:e})}),e3.start(),d.U1.add(e8),d.uo.add(e8),d.j7.add(e8),d.cR.add(e8),d.lz.add(e8),d.zC.add(e8);let ns=`
.container {
  ${M.sF}
  ${M.sY}

  scrollbar-width: thin;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;function nu(){let t=(0,tz.QS)(),e=`
.content {
  ${M.sF}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
}
`;return(0,p.jsx)("style",{children:e})}function nl(){let t=(0,tz._7)(),e=null===t?"":function({matrix:t,origin:e}){let n=new DOMMatrixReadOnly;return`
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
`}(t);return(0,p.jsx)("style",{children:e})}function nc(){let{style:t}=$();return null===t?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("style",{children:t})}function nf(){return null!==document.querySelector(".container")}let nd=(0,j.cY)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:U.bf,next:U.bf,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Busy"}}},Busy:{after:{500:{actions:[(0,S.a)({next:()=>(0,tL.JX)()}),(0,_.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:({context:t})=>t.waited>1e4,target:"Aborting"},{guard:({context:{prev:t,next:e}})=>t.width===e.width&&.2>Math.abs(1-e.height/t.height),actions:()=>console.log("resize: ignoring height-only change"),target:"Idle"},{guard:({context:t})=>!(0,U.eq)(t.prev,t.next),actions:[(0,S.a)({prev:({context:t})=>t.next,waited:0}),(0,D.e)(({context:t})=>({type:"LAYOUT",layout:(0,tc.D0)(f.O.origViewBox,f.O.fontSize,t.next),force:!t.first})),(0,S.a)({first:!1})],target:"Idle"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,S.a)({waited:({context:t})=>t.waited+500})],target:"Busy"}},Aborting:{}}}),np=(0,_.c)(nd);np.on("LAYOUT",({layout:t,force:e})=>(0,d.aL)(t,e)),np.start(),window.addEventListener("resize",()=>{np.send({type:"RESIZE"})});var nh=n(7427);let nm=`
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
  ${M.sF}
  ${M.sY}
  ${M.$i}
  ${M.QG}
  ${M.KA}
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

${x}
`,ng=function(){let t=f.O.cartoConfig?.backgroundColor??"darkgray";return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(na,{}),(0,p.jsx)(ej,{}),(0,p.jsxs)("style",{children:[nm,`body { background-color: ${t}; }`]})]})};var ny=n(3274);function nv(t){var e,n;let r={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0};(0,f.f)({origViewBox:r,isContainerRendered:nf,isUiRendered:e_,...t}),(0,f.f)({...f.O});let i={...f.O,origViewBox:r,...t};O.start(),(0,k.A2)(),np.start(),tg.start(),T.start(),(0,tz.Ze)(),e3.start(),tr.start(),tw.start(),d.Ug.add(C),d.iD.add(z),t.getMapNames&&(0,R.F1)(t.getMapNames()),i.searchEntries.length>0&&(e=function(t,e){let n=f.O.cartoConfig?.skipNamePattern;return[...t.points.features.flatMap(({properties:t})=>{let r=N(t,e,n);return null===r?[]:[r]}),...t.multipolygons.features.flatMap(({properties:t})=>{let r=N(t,e,n);return null===r?[]:[r]})]}(i.mapData,i.searchEntries),I.postMessage({type:"INIT",entries:e})),void 0!==i.floorsConfig&&(n=i.floorsConfig.fidx,O.send({type:"SELECT",fidx:n,force:!0}));let o=document.getElementById(i.root);if(null===o)throw Error("#root not found!");o.onwheel=function(t){let e=o.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==e&&e.clientWidth===e.scrollWidth||tS)&&t.preventDefault()},o.oncontextmenu=function(t){t.preventDefault()},o.ontouchmove=function(t){if(tS){if(t.target instanceof HTMLDivElement&&t.target?.id==="ui")return;t.preventDefault()}else if(!e6)return;t.preventDefault()},document.title=i.title,document.body.onkeydown=ni,document.body.onkeyup=no,(0,nh.createRoot)(o).render((0,p.jsx)(w.StrictMode,{children:(0,p.jsx)(ng,{})})),(0,ny.w)()}},3690:function(t,e,n){function r(t,e,n,r){return{x:t,y:e,width:n,height:r}}n.d(e,{Ao:()=>l,BZ:()=>r,JG:()=>a,M2:()=>f,be:()=>s,bf:()=>i,eq:()=>o,nE:()=>c,pB:()=>u});let i={x:0,y:0,width:1,height:1};function o(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function a(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}function s(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function u(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function l(t,e){return{...t,x:e.x,y:e.y}}function c(t){return function({x:t,y:e,width:n,height:r}){return`${t} ${e} ${n} ${r}`}(function({x:t,y:e,width:n,height:r},i){return{x:i(t),y:i(e),width:i(n),height:i(r)}}(t,function(t){return Math.round(100*t)/100}))}function f([t,e],n){return[n(t),n(e)]}},8096:function(t,e,n){n.d(e,{x2:()=>m,bA:()=>h});function r(t,e,n){return[function([t,e,n],[r,i],o){return t*r+e*i+n*o}(function([[t],[e],[n]]){return[t,e,n]}(t),e,n),function([t,e,n],[r,i],o){return t*r+e*i+n*o}(function([[,t],[,e],[,n]]){return[t,e,n]}(t),e,n)]}function i(t,e){return[r(t,function([t]){return t}(e),0),r(t,function([,t]){return t}(e),0),r(t,function([,,t]){return t}(e),1)]}function o([t,e]){return[[1,0],[0,1],[t,e]]}function a([t,e]){return[[t,0],[0,e],[0,0]]}var s=n(2679),u=n(3690);function l({x:t,y:e,width:n,height:r}){return{tl:{x:t,y:e},br:{x:t+n,y:e+r}}}function c({tl:t,br:e}){return{x:t.x,y:t.y,width:e.x-t.x,height:e.y-t.y}}function f({tl:t,br:e}){return[[t.x,t.y],[e.x,e.y]]}function d([[t,e],[n,r]]){return{tl:{x:t,y:e},br:{x:n,y:r}}}function p(t,e){return(0,s.zG)(t,l,f,t=>(0,u.M2)(t,t=>r(e,t,1)),d,c)}function h(t,e){return p(t,a(g(e)))}function m(t,e,n,r){return p(t,function(t,e){let[n,r]=e;return[o(e),a(t),o([-n,-r])].reduce(i)}(g(e),[n,r]))}function g(t){return"number"==typeof t?[t,t]:"x"in t?[t.x,t.y]:t}},7463:function(t,e,n){n.d(e,{FP:()=>o});var r=n(6966),i=n(9052);function o(){return(0,r.jsx)("g",{className:"assets",children:(0,r.jsx)(a,{})})}function a(){return(0,r.jsxs)("g",{className:"symbols",children:[(0,r.jsx)(i.Gc,{}),(0,r.jsx)(i.rw,{}),(0,r.jsx)(i.qD,{}),(0,r.jsx)(i.cH,{}),(0,r.jsx)(i.d,{}),(0,r.jsx)(i.Ue,{}),(0,r.jsx)(i.Qc,{}),(0,r.jsx)(i.AW,{})]})}},9052:function(t,e,n){n.d(e,{lm:()=>d,rw:()=>o,qD:()=>a,Qc:()=>c,AW:()=>f,Ue:()=>l,Gc:()=>i,d:()=>u,cH:()=>s});var r=n(6966);function i(){return(0,r.jsxs)("g",{id:"XBus",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,r.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,r.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,r.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})}function o(){return(0,r.jsxs)("g",{id:"XDrinkingFountain",children:[(0,r.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,r.jsxs)("g",{fill:"white",stroke:"none",children:[(0,r.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,r.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,r.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,r.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,r.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,r.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,r.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,r.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,r.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,r.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,r.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,r.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,r.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,r.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,r.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,r.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,r.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,r.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})}function a(){return(0,r.jsxs)("g",{id:"XElevator",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,r.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,r.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,r.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,r.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,r.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,r.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,r.jsx)("use",{x:"8.5",href:"#_person2"}),(0,r.jsx)("use",{x:"17",href:"#_person2"})]})}function s(){return(0,r.jsxs)("g",{id:"XEscalator",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,r.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,r.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})}function u(){return(0,r.jsxs)("g",{id:"XInformation",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,r.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,r.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})}function l(){return(0,r.jsxs)("g",{id:"XParking",children:[(0,r.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,r.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})}function c(){return(0,r.jsxs)("g",{id:"XStairs",transform:"translate(-36, -36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})}function f(){return(0,r.jsxs)("g",{id:"XToilets",transform:"translate(-36,-36)",children:[(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,r.jsxs)("g",{fill:"white",stroke:"none",children:[(0,r.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,r.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,r.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,r.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,r.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})}let d=new Map(Object.entries({bus:"#XBus",elevator:"#XElevator",escalator:"#XEscalator",information:"#XInformation",parking:"#XParking",stairs:"#XStairs",toilets:"#XToilets",water:"#XDrinkingFountain"}))},5282:function(t,e,n){n.d(e,{$i:()=>l,Bp:()=>O,Bt:()=>b,Cq:()=>M,Dg:()=>_,KA:()=>m,Kp:()=>v,Kv:()=>i,L:()=>a,QG:()=>c,R$:()=>y,Ru:()=>j,X2:()=>w,b8:()=>p,fD:()=>d,jg:()=>h,lm:()=>g,sF:()=>r,sP:()=>o,sY:()=>f,sr:()=>x,t_:()=>E,w6:()=>S});let r=`
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
`,x=2,b=5,w=10,j=11,S=`
cubic-bezier(0, 0, 0, 1)
`,_=`
cubic-bezier(1, 0, 1, 1)
`,M=400,E=300,O="250ms"},7611:function(t,e,n){n.d(e,{eM:()=>o,kq:()=>s,pR:()=>a});var r=n(8446),i=n(7427);let o=new Map;function a(t,e,n){(0,r.useEffect)(()=>(function(t,e,n){let r=void 0===n?document:o.get(n)??null;if(null===r)return;let a=r.querySelector(`#${t}`)??null;if(null===a||null!==a.shadowRoot)return;let s=a.attachShadow({mode:"open"});o.set(t,s),(0,i.createRoot)(s).render(e)})(t,e,n),[t,n,e])}function s(t){let e=document.querySelector(`#${t}`)?.shadowRoot?.children?.length??null;return null!==e&&e>0}},1108:function(t,e,n){n.d(e,{Ty:()=>_,Ls:()=>S,Zm:()=>c,Mh:()=>M,A2:()=>w,Ki:()=>j,_K:()=>a,SX:()=>E});var r=n(5792),i=n(1842),o=n(2679);function a(t){var e,n,a,s;return{pointMap:(e=t.points,(0,o.zG)(e.features,r.DZ(t=>{let e=t.properties.osm_id;return null===e?i.YP:i.G([Number(e),t])}),t=>new Map(t))),lineMap:(n=t.lines,(0,o.zG)(n.features,r.DZ(t=>{let e=t.properties.osm_id;return null===e?i.YP:i.G([Number(e),t])}),t=>new Map(t))),multilinestringMap:(a=t.multilinestrings,(0,o.zG)(a.features,r.DZ(t=>{let e=t.properties.osm_id;return null===e?i.YP:i.G([Number(e),t])}),t=>new Map(t))),multipolygonMap:(s=t.multipolygons,(0,o.zG)(s.features,r.DZ(t=>{let e=t.properties.osm_id,n=t.properties.osm_way_id,r=null!==e?e:null!==n?n:null;return null===r?i.YP:i.G([Number(r),t])}),t=>new Map(t)))}}var s=n(8096),u=n(3518),l=n(9616);function c({origin:t,measures:e,viewbox:n}){let r=(0,l.vy)(t.features[0].geometry.coordinates),i=e.features[0],o=e.features[1],a=(0,l.vy)(i.geometry.coordinates[1]),c=(0,l.vy)(o.geometry.coordinates[1]),f=(0,l.lM)(i.properties.ellipsoidal_distance,o.properties.ellipsoidal_distance),d=(0,l.lM)(a.x-r.x,c.y-r.y),p=(0,l.an)(f,d);return{mapCoord:{matrix:new DOMMatrixReadOnly().scale(p.x,p.y).translate(-r.x,-r.y)},mapViewBox:(0,s.bA)(function(t){let e=t.features[0].geometry.coordinates,[n,r]=(0,u.lu)(e[1],e[0]),i=t.features[1].geometry.coordinates,[o,a]=(0,u.lu)(i[1],i[0]);return{x:n,y:r,width:o,height:a}}(n),p)}}var f=n(4107),d=n(2992),p=n(8895),h=n(9908),m=n(5497),g=n(7984),y=n(2870);async function v(){return new Promise((t,e)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(t){e(t)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}let x=(0,d.cY)({types:{events:{},emitted:{}},actors:{api:(0,p.p4)(v)},delays:{TIMEOUT:5e3}}).createMachine({id:"geoloc",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,h.a)({position:({event:t})=>t.output}),(0,m.e)(({event:t})=>({type:"POSITION",position:t.output}))],target:"Idle"},onError:{actions:(0,h.a)({error:({event:t})=>JSON.stringify(t)}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),b=(0,g.c)(x);function w(){b.start()}function j(){return(0,f.v9)(b,t=>t.context.position)}function S(t,e){if(void 0===t)return null;let n=e.pointMap.get(t);if(void 0!==n)return n;let r=e.lineMap.get(t);if(void 0!==r)return r;let i=e.multipolygonMap.get(t);return void 0!==i?i:null}function _(t,e){return S(t,e)?.properties??null}function M(t){let e="osm_id"in t&&"string"==typeof t.osm_id?t.osm_id:"osm_way_id"in t&&"string"==typeof t.osm_way_id?t.osm_way_id:null;return null===e?null:Number(e)}function E(t,e){let n=RegExp(`\\"${e}\\"=>\\"([^"][^"]*)\\"`);if(null===t.other_tags)return null;let r=n.exec(String(t.other_tags));return null===r?null:r[1]}w(),y.j7.add(function(){b.send({type:"GET"})})},3985:function(t,e,n){n.d(e,{F1:()=>p,fF:()=>m,ux:()=>h});var r=n(2951),i=n(1018),o=n(5792),a=n(1842),s=n(2736),u=n(2679),l=n(3334),c=n(8446),f=n(5234);let d=(0,r.a)({context:{names:[]},on:{set:(t,{names:e})=>({names:e})}});function p(t){d.trigger.set({names:t})}function h(){let t=(0,i.v9)(d,t=>t.context.names),e=(0,c.useMemo)(()=>t.filter(({id:t,area:e})=>void 0!==t&&void 0===e),[t]),n=(0,c.useMemo)(()=>t.flatMap(({id:t,name:e,pos:n,area:r})=>void 0===t||void 0===r?[]:[{id:t,name:e,pos:n,area:r,size:Math.sqrt(r)}]),[t]),{sizeMap:r,sizes:l}=(0,c.useMemo)(()=>(function(t){let e=new Map((0,u.zG)(t,o.DZ(({id:t,size:e})=>null===t?a.YP:a.G({id:t,size:e})),o.UI(({id:t,size:e})=>[t,Math.round(Math.log2(e))]))),n=(0,u.zG)(e.values(),t=>Array.from(t),o.DY(s.Df),o.jj(s.Eq));return{sizeMap:e,sizes:n}})(n),[n]);return{pointNames:e,areaNames:n,sizeMap:r,sizes:l}}function m(){let t=(0,f.hg)(),e=(0,f.bM)(),{sizes:n,sizeMap:r,pointNames:i,areaNames:a}=h(),s=(0,u.zG)(n,o.UI(t=>{let n=Math.pow(2,t)/10/4;return[t,n<e]}),t=>new Map(t));return{pointRange:(0,c.useMemo)(()=>g(i,t,r,s),[i,t,r,s]),areaRange:(0,c.useMemo)(()=>g(a,t,r,s),[a,t,r,s])}}function g(t,e,n,r){let i=(0,u.zG)(t,o.DZ(({id:t,pos:i})=>{if(null===t)return l.none;let o=n.get(t);if(void 0===o)return l.none;let a=r.get(o);if(void 0===a)return l.none;let s=function(t,e){let{start:n,end:r}=e;return function(t,e,n){return(e-t)*(n-e)>0}(n.x,t.x,r.x)&&function(t,e,n){return(e-t)*(n-e)>0}(n.y,t.y,r.y)}(i,e);return(0,l.some)({id:t,inout:s,small:a})}));return{insides:(0,u.zG)(i,o.DZ(({id:t,inout:e,small:n})=>e&&!n?(0,l.some)(t):l.none),t=>new Set(t)),outsides:(0,u.zG)(i,o.DZ(({id:t,inout:e,small:n})=>e&&!n?l.none:(0,l.some)(t)),t=>new Set(t))}}},3518:function(t,e,n){function r(t,e){return[t,e]}function i([t,e],[n,r]){return[t-n,e-r]}function o([t,e]){return{x:t,y:e}}n.d(e,{Bh:()=>o,lu:()=>i,v:()=>r})},8339:function(t,e,n){n.d(e,{JX:()=>o,lQ:()=>s,mh:()=>a,o8:()=>i});let r=void 0,i=t=>t===r;function o(){return{x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight}}function a(t){return Math.round(100*t)/100}function s(t){return Math.round(1e7*t)/1e7}},9616:function(t,e,n){function r(t,e){let n=t.x+e.x,r=t.y+e.y;return{...t,x:n,y:r}}function i(t,e){let n=t.x-e.x,r=t.y-e.y;return{...t,x:n,y:r}}function o(t,e){let n=i(t,e);return n.y/n.x}function a(t,e){var n,r;return Math.sqrt((n=t,r=e,Math.pow(n.x-r.x,2)+Math.pow(n.y-r.y,2)))}function s(t,e){let n=t.x/e.x,r=t.y/e.y;return{...t,x:n,y:r}}n.d(e,{$B:()=>o,ip:()=>p,m7:()=>i,uI:()=>r,$k:()=>a,an:()=>s,vy:()=>d,kh:()=>f,oe:()=>h,lM:()=>c,a4:()=>l});var u=n(2736);let l=n(7625).Zt(function(t,e){return u.Df.compare(t.x,e.x)||u.Df.compare(t.y,e.y)});function c(t,e){return{x:t,y:e}}let f={x:0,y:0};function d([t,e]){return{x:t,y:e}}function p(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,r="number"==typeof e?e:e instanceof Array?e[1]:e.y,i=t.x*n,o=t.y*r;return{...t,x:i,y:o}}function h(t){let e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y}));return null===e?null:p(e,1/t.length)}},9199:function(t,e,n){n.d(e,{$l:()=>c,EL:()=>a,MN:()=>o,YL:()=>s,vT:()=>l,wS:()=>u});var r=n(3690),i=n(9616);let o={container:r.bf,scroll:r.bf,content:new DOMMatrixReadOnly,svgOffset:{x:0,y:0},svgScale:{s:1},svg:r.bf};function a({container:t,svgOffset:e,svgScale:n,svg:i}){return{container:(0,r.JG)(t),scroll:(0,r.JG)(t),content:new DOMMatrixReadOnly,svgOffset:e,svgScale:n,svg:(0,r.JG)(i)}}function s({svgOffset:t,svgScale:e,svg:n}){return new DOMMatrixReadOnly().translate(-t.x,-t.y).scale(1/e.s,1/e.s).translate(-n.x,-n.y)}function u({content:t,svgOffset:e,svgScale:n,svg:r}){return new DOMMatrixReadOnly().multiply(t).translate(-e.x,-e.y).scale(1/n.s,1/n.s).translate(-r.x,-r.y)}function l({scroll:t,content:e,svgOffset:n,svgScale:r,svg:i}){return new DOMMatrixReadOnly().translate(t.x,t.y).multiply(e).translate(-n.x,-n.y).scale(1/r.s,1/r.s).translate(-i.x,-i.y)}function c(t){return(0,i.ip)(t,-1)}},82:function(t,e,n){n.d(e,{lQ:()=>d,p1:()=>v,nl:()=>c,vY:()=>y,qF:()=>l,v4:()=>m,Ul:()=>h,D0:()=>p,J8:()=>g});var r=n(2679),i=n(3690),o=n(8096),a=n(9616),s=n(9199);let u={fontSize:16,container:i.bf,svgOffset:{x:0,y:0},svgScale:{s:1},svg:i.bf},l={...s.MN,config:u};function c({config:t,content:e}){let n=(0,s.EL)(t),r=f(e);return y({config:t,...n},r)}function f({a:t,b:e,c:n,d:r}){let i=new DOMMatrixReadOnly([t,e,n,r,0,0]).transformPoint({x:1,y:0});return Math.atan2(i.y,i.x)/Math.PI*180}function d(t){return f(t.content)}function p(t,e,n){var r=function(t,e,n){let[[r,i],o]=function(t,e){let n=t.width/t.height,r=e.width/e.height,[i,o]=n>r?[(t.width-t.height*r)/2,0]:[0,(t.height-t.width/r)/2];return[[i,o],n>r?e.height/t.height:e.width/t.width]}(n,e);return{fontSize:t,container:n,svgOffset:{x:-r,y:-i},svgScale:{s:o},svg:e}}(e,t,n);let i=(0,s.EL)(r);return{config:r,...i}}function h(t,e){return function(t,e,n){let r=(0,s.vT)(t).inverse().transformPoint(n),i=t.container.width/t.container.height,u=i<1?e/i:e,l=i<1?e:e*i;return{...t,scroll:(0,o.x2)(t.scroll,[u,l],n.x,n.y),svgOffset:(0,a.ip)(t.svgOffset,[u,l]),svg:(0,o.x2)(t.svg,[u,l],r.x,r.y)}}(t,e,(0,i.be)(t.scroll))}function m(t,e){return{...t,scroll:(0,i.Ao)(t.scroll,e)}}function g(t,e,n){return{...t,svg:(0,i.JG)(e),svgScale:n}}function y(t,e){let n=t.scroll.width/2,r=t.scroll.height/2,i=new DOMMatrixReadOnly().translate(n,r).rotate(e).translate(-n,-r).multiply(t.content);return{...t,content:i}}function v(t,e){let n=(0,a.m7)((0,s.$l)(e),t.scroll);return(0,r.zG)(t,t=>({...t,scroll:(0,i.pB)(t.scroll,n)}),e=>(function(t,e){let n=t.content.inverse(),r=(0,a.lM)(t.scroll.width/2,t.scroll.height/2),o=(0,a.m7)(t.scroll,e),s=(0,a.uI)(r,o),u=n.transformPoint(r),l=n.transformPoint(s),c=(0,a.m7)(l,u),f=(0,a.ip)(c,-t.svgScale.s);return{...t,scroll:(0,i.Ao)(t.scroll,e),svg:(0,i.pB)(t.svg,f)}})(e,(0,i.JG)(t.scroll)))}},1916:function(t,e,n){n.d(e,{O_:()=>o,ZG:()=>u,Zt:()=>i,mS:()=>l,so:()=>s});var r=n(3690);function i(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,r=e.scrollTop,i=e.scrollWidth,o=e.scrollHeight;if(null===n)return!1;let a=i-t.width,s=o-t.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${t.width}, ${t.height}]`),!1;let u=Math.round(-t.x),l=Math.round(-t.y);if(u<0||l<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==u&&(e.scrollLeft=u),r!==l&&(e.scrollTop=l);let c=e.scrollLeft;if(Math.abs(c-u)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${c}`),!1;let f=e.scrollTop;return!(Math.abs(f-l)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${f}`),!1)}function o(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),(0,r.BZ)(e,n,i,o)}return null}let a={scroll:r.bf,client:{width:0,height:0},timeStamp:0};function s(){return a}let u=new Set;function l(t){u.forEach(e=>e(t))}u.add(function(t){let e=t.currentTarget;null!==e&&(a={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})})},5234:function(t,e,n){n.d(e,{BO:()=>T,Ze:()=>v,bM:()=>D,ff:()=>S,Se:()=>w,PH:()=>_,Q:()=>E,QS:()=>A,ix:()=>b,Sn:()=>j,PG:()=>R,hg:()=>N,_U:()=>O,Ru:()=>k,_7:()=>$,$Y:()=>M,xX:()=>I});var r=n(4107),i=n(2992),o=n(9908),a=n(7984),s=n(629),u=n(2870);let l=[1,2,2.5,5,10,15,20,25,30,40,50];var c=n(5497);let f=(0,i.cY)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,o.a)({ticked:!1}),set:(0,o.a)({ticked:!0}),call:(0,c.e)({type:"CALL"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["call","clear"],target:"Idle"}},on:{TICK:{guard:({context:t})=>!t.ticked,actions:{type:"set",params:({event:t})=>t},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:({event:t})=>t},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["call","clear"],target:"Idle"}}}});var d=n(9616),p=n(9199),h=n(82),m=n(1916);let g=(0,i.cY)({types:{events:{},context:{}},actions:{updateZoom:(0,o.a)({zoom:(t,e)=>e.zoom,z:(t,e)=>e.z}),updateRotate:(0,o.a)({}),updateSvgMatrix:(0,o.a)({svgMatrix:({context:{layout:t}})=>(0,p.wS)(t)}),updateGeoMatrix:(0,o.a)({geoMatrix:({context:t})=>t.svgMatrix.multiply(s.O.mapCoord.matrix).inverse()}),updateDistanceRadius:(0,o.a)({distanceRadius:({context:{layout:t}})=>(function({container:t,svgScale:e}){var n;let r=Math.max(t.width,t.height)/2*e.s,i=Math.round(Math.log10(r)),o=(n=r/Math.pow(10,i-1),l.flatMap(t=>{let e=Math.floor(n/t);return e<3||e>=10?[]:[{u:t,n:e}]}));if(o.length<1)throw Error("findDiv");let{u:a}=o[0],s=a*Math.pow(10,i-1);return{svg:s,client:s/e.s}})(t)}),updateScroll:(0,o.a)({geoPoint:({context:t},{scroll:e,client:n})=>{let r=t.geoMatrix,i={x:e.x+n.width/2,y:e.y+n.height/2};return r.transformPoint(i)},geoRange:({context:t},{scroll:e,client:n})=>{let r=t.geoMatrix,i={x:e.x,y:e.y},o={x:e.x+n.width,y:e.y+n.height};return{start:r.transformPoint(i),end:r.transformPoint(o)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:h.qF,zoom:1,z:null,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:d.kh,distanceRadius:{svg:0,client:0},geoRange:{start:d.kh,end:d.kh},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,o.a)({rendered:({event:t})=>t.rendered,layout:({event:t})=>t.layout}),"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,a.r)(({event:{rendered:t}})=>({type:"LAYOUT.DONE",rendered:t}))]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:({event:t})=>t}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:({event:t})=>t.currentScroll}},"STYLE.MODE":{actions:(0,o.a)({mode:({event:t})=>t.mode})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:({event:t})=>t.rendered,actions:(0,o.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,o.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,o.a)({animation:({event:{animation:t}})=>t,animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:({event:t})=>!t.rendered,actions:(0,o.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,o.a)({animation:null,animating:!1}),target:"Idle"}}}}}),y=(0,a.c)(g,{systemId:"system-viewer1"});function v(){y.start()}function x(t){y.send(t)}function b(){y.send({type:"STYLE.ANIMATION.END"})}function w(){return(0,r.v9)(y,t=>t.context.rendered)}function j(){return(0,r.v9)(y,t=>t.context.appearing)}function S(){return(0,r.v9)(y,t=>t.context.shown)}function _(){return(0,r.v9)(y,t=>t.context.animating)}function M(){return(0,r.v9)(y,t=>t.context.layout)}function E(){return(0,r.v9)(y,t=>t.context.layout.container)}function O(){return(0,r.v9)(y,t=>t.context.layout.scroll)}function $(){return(0,r.v9)(y,t=>t.context.animation)}function k(){return(0,r.v9)(y,t=>t.context.geoPoint)}function R(){return(0,r.v9)(y,t=>t.context.distanceRadius)}function N(){return(0,r.v9)(y,t=>t.context.geoRange)}function I(){return(0,r.v9)(y,t=>t.context.layout.config)}function D(){return(0,r.v9)(y,t=>t.context.layout.svgScale.s)}function A(){return(0,r.v9)(y,t=>t.context.layout.content)}function T(){return(0,r.v9)(y,t=>t.context.zoom)}function C(){x({type:"STYLE.SCROLL",currentScroll:(0,m.so)()})}y.start(),u.XV.add(function(t,e){x({type:"STYLE.LAYOUT",layout:t,rendered:e}),requestAnimationFrame(()=>C())}),u.rA.add(function(t,e,n){x({type:"STYLE.ZOOM",zoom:e,z:n})}),u.CB.add(function(t,e){x({type:"STYLE.ZOOM",zoom:e,z:null})}),u.hp.add(function(t){x({type:"STYLE.ANIMATION",animation:t})}),u.tZ.add(function(t){x({type:"STYLE.MODE",mode:t})});let z=function(t,e){let n=f.provide({delays:{DURATION:500}}),r=(0,a.c)(n);return r.on("CALL",e),r.start(),{machine:n,actor:r,tick:function(){r.send({type:"TICK"})}}}(0,C);m.ZG.add(z.tick)}}]);