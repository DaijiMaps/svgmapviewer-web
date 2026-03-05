(()=>{var t,e,n,r,i={303(t,e,n){var r={"./floor-1F.svg":"901"};function i(t){return n(o(t))}function o(t){if(!n.o(r,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=303},901(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-1F.29573c43.svg"},76(t,e,n){"use strict";let r,i,o;var a,l=n(797);let s={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:s,internals:s,origin:s,measures:s,viewbox:s,points:s,lines:s,multilinestrings:s,multipolygons:s},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,l.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(t){return(0,l.createElement)("p",{},t.info.title)}};function d(t){c={...c,...t}}var u=n(617);n(774);var p=n(815),h=n(622);let f=p.Ay$.union([p.Ay$.number(),p.Ay$.string()]),x=p.Ay$.array(f),g=p.Ay$.object({ids:x}),m=h.codec(h.string(),g,{decode:(t,e)=>{try{return JSON.parse(t)}catch(n){return n instanceof h.ZodError&&e.issues.push({code:"invalid_format",format:"json",input:t,message:n.message}),h.NEVER}},encode:t=>JSON.stringify(t)}),y=p.Ay$.union([p.Ay$.number(),p.Ay$.string()]),v=p.Ay$.set(y),w=p.Ay$.object({ids:v}),S=p.Ay$.codec(g,w,{decode:t=>({ids:new Set(t.ids)}),encode:t=>({ids:Array.from(t.ids)})});p.Ay$.pipe(m,S);let j=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var E=n(997);function O(t,e,n){let[r,i,o]=t,[a,l]=e;return r*a+i*l+o*n}function b(t,e,n){return[O(function(t){let[[e],[n],[r]]=t;return[e,n,r]}(t),e,n),O(function(t){let[[,e],[,n],[,r]]=t;return[e,n,r]}(t),e,n)]}function k(t,e){let n=t.x+e.x,r=t.y+e.y;return{...t,x:n,y:r}}function N(t,e){let n=t.x-e.x,r=t.y-e.y;return{...t,x:n,y:r}}var A=n(304);let D=n(853).I3(function(t,e){return A._k.compare(t.x,e.x)||A._k.compare(t.y,e.y)}),M={x:0,y:0};function $(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,r="number"==typeof e?e:e instanceof Array?e[1]:e.y,i=t.x*n,o=t.y*r;return{...t,x:i,y:o}}function T(t,e,n,r){return{x:t,y:e,width:n,height:r}}let L={x:0,y:0,width:1,height:1};function R(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function C(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function z(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function I(t,e){return{...t,x:e.x,y:e.y}}function F(t){return function(t){let{x:e,y:n,width:r,height:i}=t;return`${e} ${n} ${r} ${i}`}(function(t,e){let{x:n,y:r,width:i,height:o}=t;return{x:e(n),y:e(r),width:e(i),height:e(o)}}(t,function(t){return Math.round(100*t)/100}))}function H(t){let{x:e,y:n,width:r,height:i}=t;return{tl:{x:e,y:n},br:{x:e+r,y:n+i}}}function U(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function W(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function Y(t){let[[e,n],[r,i]]=t;return{tl:{x:e,y:n},br:{x:r,y:i}}}function q(t,e){return[b(t,function(t){let[e]=t;return e}(e),0),b(t,function(t){let[,e]=t;return e}(e),0),b(t,function(t){let[,,e]=t;return e}(e),1)]}function Z(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function P(t,e,n,r){var i,o;return i=function(t,e){let[n,r]=e;return[Z(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),Z([-n,-r])].reduce(q)}("number"==typeof(o=e)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,E.Fs)(t,H,W,t=>(function(t,e){let[n,r]=t;return[e(n),e(r)]})(t,t=>b(i,t,1)),Y,U)}function B(t){return Math.round(100*t)/100}function V(t){return Math.round(1e7*t)/1e7}var G=n(510),X=n(437),_=n(967),K=n(282),J=n(92);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function tt(t){t.forEach(t=>t())}function te(t,e){t.forEach(t=>t(e))}let tn={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},tr={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function ti(t){return void 0!==t&&"number"==typeof t}function to(t,e,n,r,i,o){return new DOMMatrixReadOnly(t instanceof Array?t:ti(t)&&ti(e)&&ti(n)&&ti(r)&&ti(i)&&ti(o)?[t,e,n,r,i,o]:void 0)}let ta={container:L,scroll:L,content:to(),svgOffset:{x:-0,y:-0},svgScale:1,svg:L};function tl(t){let{container:e,outer:n,svgScale:r,inner:i}=t,{x:o,y:a}=n;return{container:e,scroll:e,content:to(),svgOffset:{x:-o,y:-a},svgScale:r,svg:i}}function ts(t){let{scroll:e,content:n,svgOffset:r,svgScale:i,svg:o}=t;return to().translate(e.x,e.y).multiply(n).translate(-r.x,-r.y).scale(1/i,1/i).translate(-o.x,-o.y)}function tc(t,e){let n=t.height,r=n*e;return T((t.width-r)/2,0,r,n)}function td(t,e){let n=t.width,r=n/e;return T(0,(t.height-r)/2,n,r)}let tu={...ta,config:{fontSize:16,container:L,outer:L,inner:L,svgScale:1}};function tp(t,e){let n=C(t.scroll);return th(t,e,e,n)}function th(t,e,n,r){let i=ts(t).inverse().transformPoint(r),o=P(t.scroll,[e,n],r.x,r.y),a=$(t.svgOffset,[e,n]),l=P(t.svg,[e,n],i.x,i.y);return{...t,scroll:o,svgOffset:a,svg:l}}function tf(t,e){var n,r;let i=C({...t.scroll,x:0,y:0}),o=(n=i.x,r=i.y,to().translate(n,r).rotate(e).translate(-n,-r)).multiply(t.content);return{...t,content:o}}function tx(t,e){let n=t.scroll,r=N($(e,-1),n);return(0,E.Fs)(t,t=>({...t,scroll:z(t.scroll,r)}),t=>{let e,r,i,o,a,l,s;return e=I(t.scroll,n),r=t.content.inverse(),o=k(i=C(t.scroll),N(t.scroll,n)),a=r.transformPoint(i),l=$(N(r.transformPoint(o),a),-t.svgScale),s=z(t.svg,l),{...t,scroll:e,svg:s}})}function tg(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,r=e.scrollTop,i=e.scrollWidth,o=e.scrollHeight;if(null===n)return!1;let a=i-t.width,l=o-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),r!==c&&(e.scrollTop=c);let d=e.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=e.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let tm={scroll:L,client:{width:0,height:0},timeStamp:0};function ty(t){let e=t.currentTarget;null!==e&&(tm={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})}let tv=(0,X.e)(tu),tw=(0,_.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,K.a)({zoom:(t,e)=>e.zoom}),updateRotate:(0,K.a)({}),updateSvgMatrix:(0,K.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return function(t){let{content:e,svgOffset:n,svgScale:r,svg:i}=t;return e.translate(-n.x,-n.y).scale(1/r,1/r).translate(-i.x,-i.y)}(e)}}),updateGeoMatrix:(0,K.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,K.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:r}=t,i=Math.max(n.width,n.height)/2*r,o=Math.round(Math.log10(i)),a=(e=i/Math.pow(10,o-1),Q.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r}}(e)}}),updateScroll:(0,K.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:r,client:i}=e,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:r,client:i}=e,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:tu,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:M,distanceRadius:{svg:0,client:0},geoRange:{start:M,end:M},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,K.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),t=>{let{event:e}=t;return tv.set(e.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,J.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:t=>{let{event:e}=t;return e}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}}},"STYLE.MODE":{actions:(0,K.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:(0,K.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,K.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,K.a)({animation:t=>{let{event:{animation:e}}=t;return null===e?"":function(t){let{matrix:e,origin:n}=t,r=to();return`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${r.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${e.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(e)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,K.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,K.a)({animation:null,animating:!1}),target:"Idle"}}}}}),tS=(0,J.c)(tw,{systemId:"system-viewer1"});function tj(t){tS.send(t)}function tE(t){return(0,G.d4)(tS,e=>t(e.context))}function tO(){tj({type:"STYLE.SCROLL",currentScroll:tm})}function tb(){return tE(t=>t.layout.container)}function tk(){return tE(t=>t.distanceRadius)}let tN=`
position: absolute;
left: 0;
top: 0;
`,tA=`
position: absolute;
right: 0;
top: 0;
`,tD=`
position: absolute;
left: 0;
bottom: 0;
`,tM=`
position: absolute;
right: 0;
bottom: 0;
`,t$=`
margin: 0;
`,tT=`
padding: 0;
`,tL=`
${t$} ${tT}
`,tR=`
box-sizing: border-box;
`,tC=`
width: 100vw;
height: 100vh;
height: 100svh;
`,tz=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tI=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tF=`
-webkit-user-select: none;
user-select: none;
`,tH=`
touch-action: none;
`,tU=`
pointer-events: none;
`,tW=`
pointer-events: initial;
`,tY=`
background-color: rgba(255, 255, 255, 0.5);
`,tq=`
cubic-bezier(0, 0, 0, 1)
`,tZ=`
cubic-bezier(1, 0, 1, 1)
`,tP=`
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
`,tB={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tV=n(473);let tG={init:new Set,rendered:new Set},tX=function(t){te(tG.init,t)},t_=function(){tt(tG.rendered)},tK=(0,X.e)(0),tJ=(0,_.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,K.a)({blobs:t=>{let{context:e,event:{fidx:n,blob:r}}=t;return new Map(e.blobs.set(n,r))},urls:t=>{let{context:e,event:{fidx:n,blob:r}}=t;return new Map(e.urls.set(n,URL.createObjectURL(r)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,K.a)({nfloors:t=>{let{event:e}=t;return e.nfloors},fidx:t=>{let{event:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tK.set(e.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:[(0,K.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tK.set(e.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:t=>{let{context:e}=t;return e.fidx===e.nfloors-1}},{actions:(0,tV.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx+1}})}],"LEVEL.DOWN":[{guard:t=>{let{context:e}=t;return 0===e.fidx}},{actions:(0,tV.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,K.a)({prevFidx:null}),target:"Idle"}}}}}),tQ=(0,J.c)(tJ);tQ.on("LOCK",t=>{let e,{fidx:n}=t;return e=n,te(tB.lock,e)});let t0=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function t1(){var t;let{fidx:e,prevFidx:n,urls:r}=(t=t=>{let{fidx:e,prevFidx:n,urls:r}=t;return{fidx:e,prevFidx:n,urls:r}},(0,G.d4)(tQ,e=>t(e.context))),i=(0,l.useMemo)(()=>(function(t,e,n){let r=c.floorsConfig;if(void 0===r)return null;let i=r.floors.map((r,i)=>{var o,a,l,s,c,d,u;return o=t,a=e,l=n,(s=i)!=o||l?s===a?(c=s,`
.fidx-${c} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(d=s,`
.fidx-${d} {
  visibility: hidden;
}
  `):(u=s,`
.fidx-${u} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${i}
${tP}
`})(e,n,void 0===r.get(e)),[e,n,r]),o=(0,l.useCallback)(t=>()=>{let n;return t!==e?void 0:(n=t,te(tB.selectDone,n))},[e]),a=(0,l.useCallback)(t=>()=>{let r;return null!==n||t===e?void 0:(r=t,te(tB.lock,r))},[e,n]);return{fidx:e,prevFidx:n,style:i,fidxToOnAnimationEnd:o,fidxToOnClick:a,urls:r}}t0.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:t,blob:n}=e;tQ.send({type:"IMAGE",fidx:t,blob:n})}}},t0.onerror=t=>{console.error("floors error",t)},t0.onmessageerror=t=>{console.error("floors messageerror",t)};var t5=n(284);function t2(){let t=tE(t=>t.rendered);(0,l.useEffect)(()=>{requestAnimationFrame(()=>t_())},[t]);let e=tE(t=>t.shown),n=tE(t=>t.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${tq};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",r=tE(t=>t.layout.scroll),i=`
.content {
  width: ${B(r.width)}px;
  height: ${B(r.height)}px;
}
`;return(0,u.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,i]})}let t3=new Map;function t4(t,e,n){(0,l.useEffect)(()=>(function(t,e,n){let r=void 0===n?document:t3.get(n)??null;if(null===r)return;let i=r.querySelector(`#${t}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});t3.set(t,o),(0,t5.createRoot)(o).render(e)})(t,e,n),[t,n,e])}let t7={bus:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,u.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,u.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,u.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,u.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,u.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,u.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,u.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,u.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,u.jsx)("use",{x:"8.5",href:"#_person2"}),(0,u.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,u.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36,-36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,u.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,u.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,u.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,u.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,u.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,u.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,u.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,u.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,u.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,u.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,u.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,u.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,u.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,u.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,u.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,u.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,u.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function t6(){return(0,u.jsx)("g",{className:"assets",children:(0,u.jsx)(t8,{})})}function t8(){return(0,u.jsx)("g",{className:"symbols",children:Object.entries(t7).map((t,e)=>{let[n,r]=t;return(0,u.jsx)(l.Fragment,{children:r({id:n})},e)})})}function t9(t){return t>.5?-1:+(t<.5)}function et(t){return t<.3?1:t>.7?-1:0}function ee(t,e,n,r){let i={x:e/2,y:n/2},o=e/20,a=o/2;function l(e){var n;let r,i;return n={x:t.h,y:t.v},r=e.x*n.x,i=e.y*n.y,{...e,x:r,y:i}}let s=t.th<Math.PI/4,c=0===t.v,d=0===t.h,u=l($(i,-1)),p=l(c||d?N($(i,-1),{x:r,y:r}):N($(i,-1),{x:s?r:0,y:s?0:r})),[h,f]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],x=k(u,h),g=k(u,f);return{p:u,q:p,a:x,b:g}}function en(t){return{open:t,animating:!1}}function er(t){return t.open||t.animating?null:{open:!0,animating:!0}}function ei(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function eo(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function ea(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function el(t){let{open:e,animating:n}=t;return e||n}let es={start:new Set,end:new Set,endDone:new Set},ec={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ed={p:M,psvg:M,fidx:0,layout:ta,info:{title:""}};function eu(t){return function(e,n){let r=e[n],i=t(r);return e[n]=null===i?r:i,e}}let ep=(0,_.mj)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return el(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return el(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,K.a)({canceling:()=>!0}),endCancel:(0,K.a)({canceling:()=>!1}),open:(0,K.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:r}=e;return eu(er)(n,r)}}),close:(0,K.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:r}=e;return eu(eo)(n,r)}}),handle:(0,K.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:r}=e;return eu(n[r].open?ei:ea)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,detail:ed,m:{header:en(!0),detail:en(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,K.a)({detail:t=>{let{event:{psvg:e,fidx:n,info:r,layout:i}}=t;return{psvg:e,p:ts(i).transformPoint(e),fidx:n,info:r,layout:i}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,J.n)("animationEnded")},{actions:(0,K.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,J.n)("isDetailVisible")},{actions:(0,K.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,J.n)("animationEnded")},{actions:(0,K.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,J.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,K.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tV.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,K.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,J.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,K.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,J.r)({type:"DONE"})]}}}}}),eh=(0,J.c)(ep);function ef(){return(0,G.d4)(eh,t=>t.context)}function ex(){return ef().m.header}function eg(){return ef().m.detail}function em(t){return(0,u.jsxs)("div",{className:"balloon",children:[(0,u.jsx)(ev,{...t}),t.children,(0,u.jsx)("style",{children:ey})]})}eh.on("CLOSE.DONE",()=>tt(ec.closeDone));let ey=`
.balloon,
.balloon-svg {
  ${tN}
  ${tU}
  z-index: 10;
  will-change: opacity, transform;
}
`;function ev(t){let e=t._hv;if(null===e)return(0,u.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(t,e){let{bw:n,bh:r,lh:i,d:o,width:a,height:l}=e,s=T(-a/2,-a/2,a,l),{body:c,leg:d}=function(t,e,n,r){let i={x:e/2,y:n/2},o=`
m${-i.x},${-i.y}
h${e}
v${n}
h${-e}
z
`,{p:a,q:l,a:s,b:c}=ee(t,e,n,r),d=N(l,s),u=N(c,l),p=N(a,c);return{body:o,leg:`
m${s.x},${s.y}
l${d.x},${d.y}
l${u.x},${u.y}
l${p.x},${p.y}
z
`}}(t,n,r,i);return{viewBox:s,width:a,height:l,bg:`M${o},${o}`+c+`M${o},${o}`+d,fg:"M0,0"+c+"M0,0"+d}}(e,t._size);return(0,u.jsxs)("svg",{className:"balloon-svg",viewBox:F(n),width:r,height:i,children:[(0,u.jsx)("path",{className:"bg",d:a}),(0,u.jsx)("path",{className:"fg",d:o}),(0,u.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function ew(t){let{_p:e,_hv:n,_size:r,_leg:i}=t,o=eg(),a=null!==e&&null!==n&&el(o)?function(t,e,n,r,i){let{open:o,animating:a}=t,{width:l,height:s}=r,c=$(i.q,-1);if(a){let[t,n]=o?[0,1]:[1,0],[r,i]=o?[0,1]:[1,0],[a,d]=o?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[u,p]=o?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],h=o?tq:tZ;return`
.detail,
.balloon {
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --dp-x: ${c.x}px;
  --dp-y: ${c.y}px;
  --oa: ${t};
  --ob: ${n};
  --sa: ${r};
  --sb: ${i};
  --timing: ${h};
  --dxa: ${a};
  --dxb: ${u};
  --dya: ${d};
  --dyb: ${p};
  --pww: ${-l/2}px;
  --phh: ${-s/2}px;
  --duration: 400ms;
  
  --qxa: calc(var(--q-x) + var(--dxa));
  --qya: calc(var(--q-y) + var(--dya));
  --qxb: calc(var(--q-x) + var(--dxb));
  --qyb: calc(var(--q-y) + var(--dyb));
  --tx1a: translate(var(--qxa), var(--qya));
  --tx1b: translate(var(--qxb), var(--qyb));

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
    transform: var(--tx1a) scale(var(--sa)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--ob);
    transform: var(--tx1b) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
}

@keyframes xxx-balloon {
  from {
    opacity: var(--oa);
    transform: var(--tx1a) scale(var(--sa)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--ob);
    transform: var(--tx1b) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
}
`}return`
.detail,
.balloon {
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --sb: 1;
  --dp-x: ${c.x}px;
  --dp-y: ${c.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-l/2}px;
  --phh: ${-s/2}px;
  
  --qxb: calc(var(--q-x) + var(--dxb));
  --qyb: calc(var(--q-y) + var(--dyb));
  --tx1: translate(var(--qxb), var(--qyb));
}

.detail {
  transform-origin: 0 0;
  transform: var(--tx1) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
}

.balloon {
  transform-origin: 0 0;
  transform: var(--tx1) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
}
`}(o,e,0,r,i):".balloon, .detail { visibility: hidden; }";return(0,u.jsx)("style",{children:a})}let eS={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},ej=()=>tt(eS.zoomIn),eE=()=>tt(eS.zoomOut),eO=()=>tt(eS.rotate),eb=()=>tt(eS.reset),ek=()=>tt(eS.recenter),eN={multiStart:new Set,multiEnd:new Set,zoom:new Set},eA=(0,X.e)("panning");eA.subscribe(t=>{let e;return e=t,te(tr.mode,e)});let eD=(0,_.mj)({types:{},guards:{isHoming:t=>{let{context:{animationReq:e}}=t;return null!==e&&"home"===e.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,K.a)({rendered:!0}),emitGetScroll:(0,tV.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tV.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNC",pos:e.scroll}}),emitSyncScrollSync:(0,tV.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNCSYNC",pos:e.scroll}}),calcZoomAnimation:(0,K.a)({animation:t=>{var e,n,r,i,o,a,l,s,d,u,p,h,f;let x,g,m,y,v,w,S,j,{context:{animationReq:E,layout:O}}=t;return null===E?null:"zoom"===E.type?(e=O,n=E.z,r=E.p,x=ts(e).inverse().transformPoint(r),g=1/(i=n,Math.pow(c.zoomFactor,i)),m=to().scale(1/g,1/g),{type:"Zoom",svg:P(e.svg,g,x.x,x.y),svgScale:e.svgScale*g,q:m,o:r}):"home"===E.type?(o=O,y=C((a=function(t){let{config:e,content:n}=t;return{config:e,...tl(e),content:n}}(O)).config.inner),v=ts(o).transformPoint(y),w=a.svgScale/o.svgScale,j=(function(t,e){if(t instanceof DOMMatrixReadOnly)return to(1,0,0,1,t.e,t.f);if("number"==typeof t&&"number"==typeof e)return to(1,0,0,1,t,e);throw Error("dommatrixreadonlyTranslateOnly")})((S=C(o.container)).x-v.x,S.y-v.y).multiply((l=1/w,s=1/w,d=v.x,u=v.y,to().scale(l,s,1,d,u,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:j,o:null}):(p=0,h=90,f=E.p,{type:"Rotate",deg:90,q:to().rotate(90),o:f})}}),updateLayoutFromZoom:(0,K.a)({prevLayout:t=>{let{context:{layout:e}}=t;return e},layout:t=>{let{context:{layout:e,animation:n}}=t;return function(t,e){var n,r,i;return null===e?t:"Move"===e.type?(n=e.move,{...t,scroll:I(t.scroll,n)}):"Zoom"===e.type?(r=e.svg,i=e.svgScale,{...t,svg:r,svgScale:i}):tf(t,e.deg)}(e,n)}}),endZoom:(0,K.a)({prevLayout:null,animation:null,zoom:t=>{let{context:{zoom:e,animationReq:n}}=t;return e*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:t=>{let{context:{rotate:e,animationReq:n}}=t;return e+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,K.a)({cursor:t=>{let{context:{origLayout:e}}=t;return C(e.container)},layout:t=>{let{context:{origLayout:e,rotate:n}}=t;return tf(tp(e,9),n)}}),emitSyncAnimation:(0,tV.a)(t=>{let{context:{animation:e}}=t;return{type:"SYNC.ANIMATION",animation:e}}),emitZoomStart:(0,tV.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.START",layout:e,zoom:n}}),emitZoomEnd:(0,tV.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.END",layout:e,zoom:n}}),resetCursor:(0,K.a)({cursor:t=>{let{context:{layout:e}}=t;return C(e.container)}}),resizeLayout:(0,K.a)({rendered:!1,origLayout:(t,e)=>{let{layout:n}=e;return n},layout:(t,e)=>{let{layout:n}=e;return tp(n,9)}}),updateLayoutFromScroll:(0,K.a)({layout:t=>{let{context:e}=t,{scroll:n}=tm;return tx(e.layout,n)}}),emitSyncLayout:(0,tV.a)(t=>{let{context:{layout:e,rendered:n}}=t;return{type:"SYNC.LAYOUT",layout:e,force:n}}),emitSearchStart:(0,tV.a)(t=>{let{context:{layout:e,cursor:n}}=t,{scroll:r}=tm;return{type:"SEARCH.START",req:{psvg:ts(tx(e,r)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,tV.a)((t,e)=>{let{context:n}=t,{res:r}=e,{scroll:i}=tm,o=tx(n.layout,i);return{type:"SEARCH.END.DONE",res:null===r?null:{...r,layout:o}}}),emitSwitch:(0,tV.a)((t,e)=>{let{fidx:n}=e;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,tV.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:tu,prevLayout:null,layout:tu,cursor:C(tu.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,J.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"Resizing"},SEARCH:{actions:(0,K.a)({cursor:t=>{let{event:{pos:e}}=t;return e}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,K.a)({animationReq:t=>{let{context:{layout:e},event:{z:n,p:r}}=t;return{type:"zoom",z:n,p:r??C(e.container)}}}),target:"Zooming"},HOME:{actions:(0,K.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,K.a)({animationReq:t=>{let{context:{layout:e}}=t;return{type:"rotate",deg:90,p:C(e.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,K.a)({animationReq:null}),type:"final"}}}}}),eM=(0,J.c)(eD,{systemId:"system-viewer1"});function e$(t){eM.send(t)}eM.on("SEARCH.START",t=>{let e,{req:n}=t;return e=n,te(es.start,e)}),eM.on("SEARCH.END.DONE",t=>{let e,n,{res:r}=t;null===r?eM.send({type:"SEARCH.DONE"}):(e=r,te(es.endDone,e),n=r.psvg,te(ec.open,n))}),eM.on("ZOOM.START",t=>{let e;return e=t,te(tr.zoomStart,e)}),eM.on("ZOOM.END",t=>{let e;return e=t,te(tr.zoomEnd,e)}),eM.on("SWITCH",t=>{let e,{fidx:n}=t;return e=n,te(tB.select,e)}),eM.on("SWITCH.DONE",()=>tt(tB.unlock)),eM.on("SYNC.ANIMATION",t=>{let e,{animation:n}=t,r=(null==n?void 0:n.q)??null,i=(null==n?void 0:n.o)??null;null!==r&&(e={matrix:r,origin:i},te(tr.animation,e))}),eM.on("SYNC.LAYOUT",t=>{let e,{layout:n,force:r}=t;return e={layout:n,force:r},te(tr.layout,e)}),eM.on("SCROLL.SYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.sync,e)}),eM.on("SCROLL.SYNCSYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.syncSync,e)}),eM.on("SCROLL.GET",()=>tt(tn.get));let eT=!1,eL=!1;function eR(t){eT="locked"===t,eL="locked"===t}function eC(){let t=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",ez),()=>{e.removeEventListener("wheel",ez)}},[t]),t}function ez(t){let e=t.currentTarget;eL&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function eI(t){let e,{_detail:n}=t,r=eC();return(0,u.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void eh.send(t)},children:[c.renderInfo&&(1!==(e=Object.values(n.info)).length||"string"!=typeof e[0]||""!==e[0])&&c.renderInfo({info:n.info}),(0,u.jsx)("style",{children:eF})]})}let eF=`
.detail {
  ${tN}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${tW}
  ${tR}
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
  ${tF}
  margin: 1.5em;
  text-align: center;
}

p {
  ${tF}
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
`;function eH(){return t4("detail",(0,u.jsx)(eU,{}),"ui"),(0,u.jsx)("div",{id:"detail"})}function eU(){return(0,u.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,u.jsx)(eW,{}),(0,u.jsx)(eY,{})]})}function eW(){let t,e,n,r,i,o,a,l,s,c,d,p,h=ef().detail,f=(o=h.p,a=h.layout,l=function(t,e){let{x:n,y:r}=e,i=t.width/t.height,o={x:n/t.width,y:r/t.height},a=i>1?t9(o.x):et(o.x);return{h:a,v:i>1?et(o.y):t9(o.y),th:Math.atan2(t.height,t.width)}}(h.layout.container,o),s=a.container.width,e=50*(t=.01*Math.min(s,c=a.container.height)),n=50*t,r=10*t,i=e/100,p=ee(l,(d={bw:e,bh:n,lh:r,d:i,width:e+2*r+2*i,height:n+2*r+2*i}).bw,d.bh,d.lh),{_p:o,_hv:l,_W:s,_H:c,_size:d,_leg:p});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(em,{...f}),(0,u.jsx)(eI,{_detail:h}),(0,u.jsx)(ew,{...f})]})}function eY(){return(0,u.jsx)("svg",{id:"ui-svg-defs",children:(0,u.jsx)("defs",{children:(0,u.jsx)(t6,{})})})}function eq(){return t4("footer",(0,u.jsx)(eZ,{}),"ui"),(0,u.jsx)("div",{id:"footer"})}function eZ(){let t=c;return(0,u.jsxs)("div",{className:"ui-content footer",children:[(0,u.jsx)("p",{children:t.copyright}),(0,u.jsxs)("style",{children:[eP,(0,u.jsx)(eB,{})]})]})}let eP=`
.footer {
  ${tD}
  ${tz}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${tF}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function eB(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],r=t?tq:tZ;return(0,u.jsx)(u.Fragment,{children:`
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
`})}return(0,u.jsx)(u.Fragment,{children:`
.footer {
  --b: ${+!!t};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function eV(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("g",{id:"measure",children:(0,u.jsx)(e_,{})})})}function eG(){let{svg:t}=tk();return(0,u.jsxs)("div",{id:"distance",children:[(0,u.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),e0.map(e=>(0,u.jsxs)(l.Fragment,{children:[(0,u.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,u.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,u.jsx)("style",{children:(0,u.jsx)(eQ,{})})]})}function eX(){let t=tE(t=>t.geoPoint),e=t.x>0?"E":"W",n=t.y>0?"N":"S",r=`${e} ${V(Math.abs(t.x))}`,i=`${n} ${V(Math.abs(t.y))}`;return(0,u.jsxs)("div",{id:"coordinate",children:[(0,u.jsx)("p",{id:"longitude",children:r}),(0,u.jsx)("p",{id:"latitude",children:i}),(0,u.jsx)("style",{children:(0,u.jsx)(eJ,{})})]})}function e_(){let{width:t,height:e}=tb(),{client:n}=tk(),r=(0,l.useMemo)(()=>`M0,${e/2} h${t}`,[e,t]),i=(0,l.useMemo)(()=>`M${t/2},0 v${e}`,[e,t]),o=(0,l.useMemo)(()=>e0.map(r=>(function(t){let{width:e,height:n,r}=t;return`M${e/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(r+1)})),[n,e,t]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,u.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((t,e)=>(0,u.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function eK(){let{open:t,animating:e}=ex(),[n,r]=t?[0,1]:[1,0],i=e?`
.guides {
  --timing: ${t?tq:tZ};
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
`;return(0,u.jsx)(u.Fragment,{children:i})}function eJ(){let{width:t,height:e}=tb(),n=`
#distance,
#coordinate {
  ${tN}
  width: ${t}px;
  height: ${e}px;
}
`,r=`
#longitude {
  ${tM}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${tD}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,u.jsxs)(u.Fragment,{children:[n,r,i]})}function eQ(){let{width:t,height:e}=tb(),{client:n}=tk(),r=`
.distance {
  ${tN}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,o=e0.map(r=>`
#distance-x-${r+1} {
  transform: translate(${t/2+n*(r+1)}px, ${e/2}px) scale(0.5);
}
`),a=e0.map(r=>`
#distance-y-${r+1} {
  transform: translate(${t/2}px, ${e/2+n*(r+1)}px) scale(0.5);
}
`);return(0,u.jsxs)(u.Fragment,{children:[i,r,o,a]})}let e0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function e1(){return t4("guides",(0,u.jsx)(e5,{}),"ui"),(0,u.jsx)("div",{id:"guides"})}function e5(){var t;return!((null==(t=c.uiConfig)?void 0:t.showGuides)??!0)||c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"ui-content guides",children:[(0,u.jsx)("svg",{className:"guides",children:(0,u.jsx)(eV,{})}),(0,u.jsx)(eG,{}),(0,u.jsx)(eX,{}),(0,u.jsxs)("style",{children:[e2,(0,u.jsx)(eK,{})]})]})}let e2=`
.guides {
  ${tN}
  ${tC}
  ${tU}
  z-index: 2;
}

text {
  ${tF}
}
`;function e3(){let{fidx:t,fidxToOnClick:e}=t1(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"floors",children:[(0,u.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:i}=n;return(0,u.jsx)("li",{className:`floor-item ${e8(r===t)}`,onClick:e(r),children:i},r)})}),(0,u.jsx)("style",{children:e4})]})}let e4=`
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
  ${tY}
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
`;function e7(){let{fidx:t}=t1(),e=c.floorsConfig;return void 0===e||e.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{children:[e.floors.map((e,n)=>(0,u.jsx)("h2",{className:`floor-name ${e8(n===t)}`,children:e.name},n)),(0,u.jsx)("style",{children:e6})]})}let e6=`
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
`;function e8(t){return t?"selected":"unselected"}function e9(){return t4("header",(0,u.jsx)(nt,{}),"ui"),(0,u.jsx)("div",{id:"header"})}function nt(){let t=c;return(0,u.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void eh.send(t)},children:[(0,u.jsx)("h1",{className:"title",onClick:()=>eb(),children:t.title}),(0,u.jsx)(e7,{}),(0,u.jsxs)("style",{children:[ne,(0,u.jsx)(nn,{})]})]})}let ne=`
.header {
  ${tN}
  ${tz}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${tF}
  ${tW}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function nn(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],r=t?tq:tZ;return(0,u.jsx)(u.Fragment,{children:`
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
`})}return(0,u.jsx)(u.Fragment,{children:`
.header {
  --b: ${+!!t};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nr(){return t4("left",(0,u.jsx)(ni,{}),"ui"),(0,u.jsx)("div",{id:"left"})}function ni(){return(0,u.jsxs)("div",{className:"ui-content left bottom",children:[(0,u.jsx)(e3,{}),(0,u.jsxs)("style",{children:[no,(0,u.jsx)(na,{})]})]})}let no=`
.left {
  ${tN}
  ${tI}
  padding: 0.4em;
  font-size: smaller;
  ${tU}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],r=t?tq:tZ;return(0,u.jsx)(u.Fragment,{children:`
.left {
  --timing: ${r};
  --duration: 300ms;
  --a: ${e};
  --b: ${n};
  transform-origin: 0% 50%;
  animation: xxx-left var(--duration) var(--timing);
  will-change: opacity, transform;
}

@keyframes xxx-left {
  from {
    opacity: var(--a);
    transform: translate(0%, calc(50vh - 50%)) scale(var(--a)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: translate(0%, calc(50vh - 50%)) scale(var(--b)) translate3d(0px, 0px, 0px);
  }
}
`})}return(0,u.jsx)(u.Fragment,{children:`
.left {
  --b: ${+!!t};
  transform-origin: 0% 50%;
  opacity: var(--b);
  transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nl(){return(0,u.jsx)("div",{className:"button-item fullscreen",onClick:()=>tt(eS.fullscreen),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ns})})})}let ns=`
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
`;function nc(){return(0,u.jsx)("div",{className:"button-item home",onClick:()=>eb(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nd})})})}let nd=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nu(){return c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"button-item position",onClick:()=>tt(eS.position),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nf})})})}let np=3*Math.sqrt(2),nh=np+6,nf=`
M 0,0
m 0,${nh/2}
l -3,-3
a ${np},${np} 0,1,1 6,0
z
m 0,${-nh+np+np/2}
a ${np/2},${np/2} 0,1,0 0,${-np}
a ${np/2},${np/2} 0,1,0 0,${np}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function nx(){return(0,u.jsx)("div",{className:"button-item recenter",onClick:()=>ek(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ng})})})}let ng=`
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
`;function nm(){return(0,u.jsx)("div",{className:"button-item rotate",onClick:()=>eO(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ny})})})}let ny=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nv(){return(0,u.jsx)("div",{className:"button-item zoom-in",onClick:()=>ej(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nw})})})}let nw=`
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
`;function nS(){return(0,u.jsx)("div",{className:"button-item zoom-out",onClick:()=>eE(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nj})})})}let nj=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nE(){return t4("right",(0,u.jsx)(nO,{}),"ui"),(0,u.jsx)("div",{id:"right"})}function nO(){return(0,u.jsxs)("div",{className:"ui-content right bottom",children:[(0,u.jsx)(nk,{}),(0,u.jsx)("style",{children:nb})]})}let nb=`
.right {
  ${tA}
  ${tI}
  padding: 0.4em;
  font-size: smaller;
  ${tU}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nk(){return(0,u.jsxs)("div",{className:"button",children:[(0,u.jsx)(nu,{}),(0,u.jsx)(nc,{}),(0,u.jsx)(nl,{}),(0,u.jsx)(nx,{}),(0,u.jsx)(nm,{}),(0,u.jsx)(nS,{}),(0,u.jsx)(nv,{}),(0,u.jsxs)("style",{children:[nN,(0,u.jsx)(nA,{})]})]})}let nN=`
.button {
  font-size: large;
  margin: 0;
  ${tz}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${tW}
  cursor: default;
  ${tY}
}
.button-item > svg {
  display: block;
  width: 1.25em;
  height: 1.25em;
  pointer-events: none;
}
.button-item > svg > path {
  stroke: black;
  stroke-width: 0.4;
  fill: none;
}

.fullscreen {
  display: none;
}
`;function nA(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],r=t?tq:tZ;return(0,u.jsx)(u.Fragment,{children:`
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
`})}return(0,u.jsx)(u.Fragment,{children:`
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
`})}function nD(){return t4("screen",(0,u.jsx)(nM,{}),"ui"),(0,u.jsx)("div",{id:"screen"})}function nM(){let t=eC();return(0,u.jsx)("div",{ref:t,className:"ui-content screen",onClick:()=>tt(ec.close),children:(0,u.jsxs)("style",{children:[n$,(0,u.jsx)(nT,{})]})})}let n$=`
.screen {
  ${tN}
  ${tC}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nT(){let{open:t,animating:e}=eg(),n=tE(t=>t.animating);if(!e)return t?(0,u.jsx)(u.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,u.jsx)(u.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,u.jsx)(u.Fragment,{children:".screen { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],r=t?tq:tZ;return(0,u.jsx)(u.Fragment,{children:`
.screen {
  --duration: 400ms;
  --timing: ${r};
  --a: ${e};
  --b: ${n};
  will-change: opacity;
  animation: xxx-screen var(--duration) var(--timing);
}

@keyframes xxx-screen {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`})}}function nL(){return t4("ui",(0,u.jsx)(nR,{})),(0,u.jsx)("div",{id:"ui"})}function nR(){return(0,u.jsxs)("div",{className:"ui",children:[(0,u.jsx)(nD,{}),(0,u.jsx)(e9,{}),(0,u.jsx)(eq,{}),(0,u.jsx)(nr,{}),(0,u.jsx)(nE,{}),(0,u.jsx)(e1,{}),(0,u.jsx)(eH,{})]})}function nC(){var t,e,n;let r;return null!==(r=(null==(n=document.querySelector("#ui"))||null==(e=n.shadowRoot)||null==(t=e.children)?void 0:t.length)??null)&&r>0}function nz(){ek()}var nI=n(469),nF=n(336),nH=n(5);let nU=nI.OZ(D),nW=nF.aU(A._k),nY=nF.tf(),nq=nF.JI(A.Eq,nI.CA());function nZ(t){return(0,E.Fs)(t,nF.zu(nU),nI.x1(t=>0===t.length?nH.dv:nH.zN(t[0])))}function nP(t){let e;return t.length<2||null===(e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y})))?null:$(e,1/t.length)}function nB(t){return new Map((0,E.Fs)(t.changedTouches,Array.from,nI.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let nV=(0,_.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z}},actions:{updateTouches:(0,K.a)({touches:t=>{var e;let n,r,i,a,l,s,c,d,u,{context:{touches:p},event:h}=t;return"TOUCH.START"===h.type?(e=h.ev,i=nP(r=nZ(n=nq.concat(p.vecs,nB(e)))),l=2!==r.length?null:.5>Math.abs((a=N(r[0],r[1])).y/a.x),{...p,vecs:n,points:r,cursor:i,horizontal:l}):"TOUCH.MOVE"===h.type?function(t,e,n){var r,i,a,l;let s,c=nB(e),d=nW.mapWithIndex(t.vecs,(t,e)=>(0,E.Fs)(c.get(t),nH.k$,nH.AU(()=>e,nI.xW(e)))),u=nZ(d),p=nP(u),[h,f]=u;if(null===p||h===o||f===o)return{...t,vecs:d,points:u,cursor:p};let x=(r=t.dists,i=Math.sqrt((a=h,l=f,Math.pow(a.x-l.x,2)+Math.pow(a.y-l.y,2))),s=Math.pow((r.length>0?r[0]:i)-i,2),0===r.length||s>0?[i,...r]:r),g=function(t){let[e,n,r,i]=t;return e===o||n===o||r===o||i===o?null:e<n&&n<r&&r<i?-1:e>n&&n>r&&r>i?1:null}(x);return{vecs:d,points:u,cursor:p,dists:x,z:g,horizontal:t.horizontal}}(p,h.ev,0):"TOUCH.END"===h.type?(s=nB(h.ev),u=nP(d=nZ(c=nY.filterMapWithIndex(p.vecs,(t,e)=>s.has(t)?nH.dv:nH.zN(e)))),{vecs:c,points:d,cursor:u,dists:0===c.size?[]:p.dists,z:0===c.size?null:p.z,horizontal:p.horizontal}):p}}),raiseOp:(0,J.r)(t=>{let{event:e}=t;return"TOUCH.START"===e.type?{type:"STARTED"}:"TOUCH.MOVE"===e.type?{type:"MOVED"}:"TOUCH.END"===e.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,K.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),emitMulti:(0,tV.a)(t=>{let{context:{touches:e}}=t;return{type:"MULTI",touches:e}}),emitZoom:(0,tV.a)(t=>{let{context:{touches:e}}=t;return{type:"ZOOM",touches:e}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),nG=(0,J.c)(nV),nX=!1;function n_(t){nG.send({type:"TOUCH.START",ev:t})}function nK(t){nG.send({type:"TOUCH.MOVE",ev:t})}function nJ(t){nG.send({type:"TOUCH.END",ev:t})}function nQ(){nG.send({type:"CANCEL"})}function n0(t){eT||e$({type:"SEARCH",pos:{x:t.pageX,y:t.pageY}})}function n1(t){let e;null!==t&&(e=t,te(tn.eventTick,e))}function n5(t){return(0,u.jsxs)("div",{id:"viewer",className:"container",onTouchStart:n_,onTouchMove:nK,onTouchEnd:nJ,onClick:n0,onContextMenu:nz,onScroll:n1,onAnimationEnd:t=>{var e;(e={type:"ANIMATION.END",ev:t}).ev.stopPropagation(),e$(e),tt(tr.animationEnd)},children:[t.children,(0,u.jsx)(n2,{})]})}function n2(){let t=`
.container {
  ${tN}
  ${tC}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("style",{children:t}),(0,u.jsx)(n3,{}),(0,u.jsx)(n4,{}),(0,u.jsx)(n7,{})]})}function n3(){let t=tE(t=>t.layout.content),e=`
.content {
  ${tN}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,u.jsx)("style",{children:e})}function n4(){let t=tE(t=>t.animation);return(0,u.jsx)("style",{children:t})}function n7(){let{style:t}=t1();return null===t?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("style",{children:t})}function n6(){return null!==document.querySelector(".container")}nG.on("MULTI",t=>{let{touches:e}=t;2===e.vecs.size?(nX=!0,tt(eN.multiStart)):(tt(eN.multiEnd),nX=!1)}),nG.on("ZOOM",t=>{let e,{touches:n}=t,r=n.cursor,i=n.z;null!==r&&null!==i&&(e={z:i>0?1:-1,p:r},te(eN.zoom,e))});var n8=n(751);async function n9(t){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){n(t)},{enableHighAccuracy:!0,timeout:t,maximumAge:0})})}let rt=(0,_.mj)({types:{events:{},emitted:{}},actors:{api:(0,n8.Sx)(()=>n9(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,K.a)({position:t=>{let{event:e}=t;return e.output}}),(0,tV.a)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,K.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),re=(0,J.c)(rt),rn=(0,_.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tV.a)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tV.a)(t=>{let{event:e}=t;return e}),target:"Done"}}},Done:{always:"Idle"}}}),rr=(0,J.c)(rn);function ri(t){rr.send(t)}rr.on("SEARCH",t=>{let{req:{psvg:e}}=t,n=c.mapCoord.matrix.inverse().transformPoint(e),r=tK.get();ro.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rr.on("SEARCH.DONE",t=>{let e,{res:n}=t;return e=n,te(es.end,e)});let ro=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function ra(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}ro.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":ri({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=e.res,null===(r=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),ri({type:"SEARCH.DONE",res:null})):ri({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",e.error),ri({type:"SEARCH.DONE",res:null})}},ro.onerror=t=>{console.error("search error",t)},ro.onmessageerror=t=>{console.error("search messageerror",t)};let rl=(0,_.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:t=>{let{event:{key:e}}=t;return"r"===e},shouldRecenter:t=>{let{event:{key:e}}=t;return"c"===e},shouldRotate:t=>{let{event:{key:e}}=t;return"t"===e},shouldZoom:t=>{let{event:{key:e}}=t;return 0!==ra(e)},shouldFloorLevelUp:t=>{let{event:{key:e}}=t;return"u"===e},shouldFloorLevelDown:t=>{let{event:{key:e}}=t;return"d"===e}},actions:{reset:(0,tV.a)({type:"RESET"}),recenter:(0,tV.a)({type:"RECENTER"}),rotate:(0,tV.a)({type:"ROTATE"}),zoom:(0,tV.a)((t,e)=>{let{z:n}=e;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tV.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tV.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,K.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:r,control:i}=t;return{shift:"Shift"===e||n,alt:"Alt"===e||r,control:"Control"===e||i}})(e.mod,n.key)}}),handleUp:(0,K.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:r,control:i}=t;return{shift:"Shift"!==e&&n,alt:"Alt"!==e&&r,control:"Control"!==e&&i}})(e.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:t=>{let{event:{key:e}}=t;return{z:ra(e)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),rs=(0,J.c)(rl);rs.on("RESET",eb),rs.on("RECENTER",ek),rs.on("ROTATE",eO),rs.on("ZOOM.IN",ej),rs.on("ZOOM.OUT",eE),rs.on("FLOOR.LEVEL.UP",()=>tt(tB.levelUp)),rs.on("FLOOR.LEVEL.DOWN",()=>tt(tB.levelDown));let rc=(0,_.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:L,next:L,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,K.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,J.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:t=>{let{context:e}=t;return console.log("resize: ignoring height-only change",e)},target:"Idle"},{guard:t=>{let{context:e}=t;return!R(e.prev,e.next)},actions:[(0,K.a)({waited:0}),(0,tV.a)(t=>{var e,n,r,i;let o,a,{context:l}=t;return{type:"LAYOUT",layout:(e=c.fontSize,n=l.next,o=C((i={config:r=function(t,e,n,r){var i;let o,a,l,s,{outer:c,scale:d}=(i=r??n,o=e.width/e.height,s=(l=o>(a=i.width/i.height))?tc(e,a):td(e,a),{outer:s,inner:l?tc(i,o):td(i,o),scale:l?i.height/e.height:i.width/e.width,rO:o,rI:a,v:l});return{fontSize:t,container:e,outer:c,inner:r??n,svgScale:d}}(e,n,c.origViewBox,c.origBoundingBox),...tl(r)}).scroll),a=i.container.width/i.container.height,th(i,a<1?1/a:1,a<1?1:+a,o)),force:!l.first}}),(0,K.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,K.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,J.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:t=>{let{context:{next:e}}=t;return R(e,tv.get().container)},actions:(0,K.a)({prev:t=>{let{context:{next:e}}=t;return e}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rd=(0,J.c)(rc);rd.on("LAYOUT",t=>{let e;return e=t,te(tr.resize,e)}),window.addEventListener("resize",()=>{rd.send({type:"RESIZE"})});let ru=(0,_.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,K.a)({ticked:!1}),set:(0,K.a)({ticked:!0}),expire:(0,tV.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),rp=(0,_.mj)({types:{},actions:{getScroll:(0,K.a)({scroll:()=>(function(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,r=t.scrollWidth,i=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),T(e,n,r,i)}return null})()}),syncScroll:(t,e)=>{let{pos:n}=e;return tg(n)}},actors:{syncScrollLogic:(0,n8.Sx)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!tg(e))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,tV.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,K.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,tV.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,K.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rh=(0,J.c)(rp,{systemId:"system-scroll1"});function rf(t){rh.send(t)}rh.on("SCROLL.GET.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.getDone,e)}),rh.on("SCROLL.SYNCSYNC.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.syncSyncDone,e)});let rx=(a=()=>tt(tn.eventExpire),r=ru.provide({delays:{DURATION:500}}),(i=(0,J.c)(r)).on("EXPIRE",a),i.start(),{tick:function(){i.send({type:"TICK"})}}),rg=(0,X.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function rm(t){var e;t.getMapNames&&(e=t.getMapNames({data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig}),rg.trigger.set({names:e}))}async function ry(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rv=`
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
  ${tN}
  ${tC}
  ${tL}
  ${tR}
  ${tH}
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

${j}
`,rw=function(){var t;let e=(null==(t=c.cartoConfig)?void 0:t.backgroundColor)??c.backgroundColor??"darkgray",n={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n5,{...n,children:c.renderMap(n)}),(0,u.jsx)(nL,{}),(0,u.jsxs)("style",{children:[rv,`body { background-color: ${e}; }`]})]})};function rS(t){let{origViewBox:e,url:n}=t;return(0,u.jsx)("image",{href:n,x:e.x,y:e.y,width:e.width,height:e.height})}function rj(t){let{origViewBox:e,url:n,labels:r}=t;return void 0===r?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("svg",{href:n,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:F(e),children:r.map((t,e)=>(0,u.jsxs)("text",{...rb(t.attrs),children:["id"in t.attrs&&"style"in t.attrs&&(0,u.jsx)("style",{children:`#${t.attrs.id} { ${t.attrs.style}; }`}),t.children&&t.children.map((t,e)=>(0,u.jsx)("tspan",{...rb(t.attrs),children:t.text??""},e))]},e))})}let rE=/^[{].*$/,rO=/^style$/;function rb(t){return Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return!e.match(rE)&&!e.match(rO)}).map(t=>{var e;let[n,r]=t;return[!(e=n).match(/^.*-.*$/)||e.match(/^(aria|data)-.*$/)?e:e.split("-").map((t,e)=>{var n;let r;return 0===e?t:(r=(n=t).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}var rk=JSON.parse('{"1F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"FARO @ A1F-Shops-1","x":"184.90588","y":"565.14087","font-size":"2px","text-anchor":"middle","id":"text445","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:18.8976px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan445"},"text":"FARO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"溶岩窯パン工房ブロートバウム @ A1F-Shops-2","x":"200.30005","y":"384.93304","font-size":"2px","text-anchor":"middle","id":"text446","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan462","x":"200.30005","y":"384.93304"},"text":"溶岩窯"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan463","x":"200.30005","y":"405.26877"},"text":"パン工房"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"200.30005","y":"425.60452","id":"tspan465"},"text":"ブロートバウム"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"BUTCHER’S TABLE 横須賀松坂屋 @ A1F-Shops-3","x":"397.44934","y":"359.05832","font-size":"2px","text-anchor":"middle","id":"text447","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:13.2283px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan467","x":"397.44934","y":"359.05832"},"text":"BUTCHER’S"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan468","x":"397.44934","y":"375.59369"},"text":"TABLE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"397.44934","y":"393.38742","id":"tspan470"},"text":"横須賀松坂屋"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"HONEY BEE @ A1F-Shops-4","x":"489.64713","y":"366.98288","font-size":"2px","text-anchor":"middle","id":"text448","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:18.8976px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan472","x":"489.64713","y":"366.98288"},"text":"HONEY"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan473","x":"489.64713","y":"390.60489"},"text":"BEE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"MARLOWE @ A1F-Shops-5","x":"397.06207","y":"576.71765","font-size":"2px","text-anchor":"middle","id":"text449","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:13.2283px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan2"},"text":"MARLOWE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"H’s CREAM @ A1F-Shops-6","x":"482.95801","y":"576.71155","font-size":"2px","text-anchor":"middle","id":"text450","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:13.2283px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan3"},"text":"H’s CREAM"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"YOKOSUKA GELATO FACTORY @ A1F-Shops-7","x":"574.18048","y":"561.02551","font-size":"2px","text-anchor":"middle","id":"text451","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12.2835px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan475","x":"574.18048","y":"561.02551"},"text":"YOKOSUKA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"574.18048","y":"576.37988","id":"tspan478"},"text":"GELATO"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan476","x":"574.18048","y":"591.73425"},"text":"FACTORY"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"あがっとこ @ A1F-Shops-8","x":"658.13934","y":"377.93732","font-size":"2px","text-anchor":"middle","id":"text452","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan4"},"text":"あがっとこ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"長井水産 @ A1F-Shops-10","x":"741.20752","y":"536.30713","font-size":"2px","text-anchor":"middle","id":"text453","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:18.8976px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan453"},"text":"長井水産"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"長井水産 @ A1F-Shops-9","x":"751.06946","y":"377.60474","font-size":"2px","text-anchor":"middle","id":"text454","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan5"},"text":"長井水産"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"長井水産 @ A1F-Shops-12","x":"914.21692","y":"393.15323","font-size":"2px","text-anchor":"middle","id":"text455","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan6"},"text":"長井水産"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"長井水産 @ A1F-Shops-11","x":"914.53644","y":"548.49725","font-size":"2px","text-anchor":"middle","id":"text456","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan7"},"text":"長井水産"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"PINO GRILL @ A1F-Shops-13","x":"442.96451","y":"271.80389","font-size":"2px","text-anchor":"middle","id":"text457","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:18.8976px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan457"},"text":"PINO GRILL"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"横須賀ビール TAPROOM @ A1F-Shops-14","x":"657.94757","y":"224.05449","font-size":"2px","text-anchor":"middle","id":"text458","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:13.2283px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan480","x":"657.94757","y":"224.05449"},"text":"横須賀ビール"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"657.94757","y":"240.58986","id":"tspan482"},"text":"TAPROOM"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"東京古着 @ A1F-Shops-15","x":"657.94287","y":"297.17993","font-size":"2px","text-anchor":"middle","id":"text459","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"id":"tspan8"},"text":"東京古着"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ヨコスカスーベニアショップ @ A1F-Shops-16","x":"750.55212","y":"244.27087","font-size":"2px","text-anchor":"middle","id":"text460","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan483","x":"750.55212","y":"244.27087"},"text":"ヨコスカ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan484","x":"750.55212","y":"264.6066"},"text":"スーベニア"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"750.55212","y":"284.94235","id":"tspan486"},"text":"ショップ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"船主(ふなおさ) @ A1F-Shops-18","x":"913.90601","y":"253.88361","font-size":"2px","text-anchor":"middle","id":"text461","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:15.1181px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';fill:#ffffff"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan488","x":"913.90601","y":"253.88361"},"text":"船主"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan489","x":"913.90601","y":"274.21933"},"text":"(ふなおさ)"}]}]}');let rN=Object.keys(JSON.parse('{"1F":{"contentId":"g383"}}')).map(t=>({name:t,href:n(303)(`./floor-${t}.svg`),labels:(null==rk?void 0:rk[t])??void 0})),rA=Object.values(JSON.parse('{"1F":{"A1F-Content-(ViewBox)":{"x":0,"y":0},"A1F-Shops-1":{"x":185.254,"y":558.384},"A1F-Shops-2":{"x":200.806,"y":399.154},"A1F-Shops-3":{"x":397.284,"y":371.944},"A1F-Shops-4":{"x":490.592,"y":371.944},"A1F-Shops-5":{"x":397.32,"y":571.989},"A1F-Shops-6":{"x":482.958,"y":571.989},"A1F-Shops-7":{"x":574.18,"y":571.989},"A1F-Shops-8":{"x":657.769,"y":371.943},"A1F-Shops-9":{"x":751.077,"y":371.943},"A1F-Shops-10":{"x":741.216,"y":529.336},"A1F-Shops-11":{"x":914.544,"y":542.836},"A1F-Shops-12":{"x":914.224,"y":387.491},"A1F-Shops-13":{"x":443.702,"y":265.048},"A1F-Shops-14":{"x":657.769,"y":226.865},"A1F-Shops-15":{"x":657.769,"y":291.427},"A1F-Shops-16":{"x":750.794,"y":259.217},"A1F-Shops-17":{"x":871.6,"y":95.817},"A1F-Shops-18":{"x":913.906,"y":258.934},"A1F-Shops-19":{"x":572.237,"y":95.818},"A1F-Shops-20":{"x":658.088,"y":95.816},"A1F-Shops-21":{"x":743.16,"y":95.817}}}')).concat().flatMap((t,e)=>Object.entries(t).map(t=>{let[n,r]=t;return[n,{coord:r,fidx:e}]}));function rD(t){let[e,n]=t;return n.map(t=>[e,t])}function rM(t){return t.reduce(function(t,e){let[n,r]=e,i=new Set([...t.get(n)??new Set,r]);return new Map([...t,[n,i]])},new Map)}let r$=Object.values(JSON.parse('{"1F":{"FARO":["A1F-Shops-1"],"溶岩窯パン工房ブロートバウム":["A1F-Shops-2"],"BUTCHER’S TABLE 横須賀松坂屋":["A1F-Shops-3"],"HONEY BEE":["A1F-Shops-4"],"MARLOWE":["A1F-Shops-5"],"H’s CREAM":["A1F-Shops-6"],"YOKOSUKA GELATO FACTORY":["A1F-Shops-7"],"あがっとこ":["A1F-Shops-8"],"長井水産":["A1F-Shops-10","A1F-Shops-9","A1F-Shops-12","A1F-Shops-11"],"PINO GRILL":["A1F-Shops-13"],"横須賀ビール TAPROOM":["A1F-Shops-14"],"東京古着":["A1F-Shops-15"],"ヨコスカスーベニアショップ":["A1F-Shops-16"],"船主(ふなおさ)":["A1F-Shops-18"]}}')).flatMap(function(t){return Object.entries(t)});rM(Array.from(r$).flatMap(rD));let rT=rM(Array.from(r$).flatMap(rD).map(t=>{let[e,n]=t;return[n,e]}));var rL=JSON.parse('{"x":0,"y":0,"width":1130.0,"height":730.0}');!function(t){let e;tG.init.add(t=>{if(t.floorsConfig){let e=t.floorsConfig.floors.length,n=t.floorsConfig.initialFidx;tQ.send({type:"INIT",nfloors:e,fidx:n}),t0.postMessage({type:"INIT",cfg:t.floorsConfig})}}),tB.select.add(t=>tQ.send({type:"SELECT",fidx:t})),tB.levelUp.add(()=>tQ.send({type:"LEVEL.UP"})),tB.levelDown.add(()=>tQ.send({type:"LEVEL.DOWN"})),tB.selectDone.add(t=>tQ.send({type:"SELECT.DONE",fidx:t})),eS.fullscreen.add(ry),tG.init.add(rm),eS.position.add(()=>{var t;return t={type:"GET"},void re.send(t)}),tn.eventTick.add(ty),tn.eventTick.add(rx.tick),tn.get.add(()=>rf({type:"GET"})),tn.sync.add(t=>rf({type:"SYNC",pos:t})),tn.syncSync.add(t=>rf({type:"SYNCSYNC",pos:t})),tG.init.add(t=>{if(t.getSearchEntries){let e=t.getSearchEntries(t);ro.postMessage({type:"INIT",entries:e})}}),es.start.add(function(t){rr.send({type:"SEARCH",req:t})}),tr.layout.add(function(t){let{layout:e,force:n}=t;tj({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>tO())}),tr.zoomStart.add(function(t){tj({type:"STYLE.ZOOM",...t})}),tr.zoomEnd.add(function(t){tj({type:"STYLE.ZOOM",zoom:t.zoom})}),tr.animation.add(function(t){tj({type:"STYLE.ANIMATION",animation:t})}),tr.animationEnd.add(function(){tj({type:"STYLE.ANIMATION.END"})}),tr.mode.add(function(t){tj({type:"STYLE.MODE",mode:t})}),tn.eventExpire.add(tO),eS.reset.add(nQ),eS.fullscreen.add(nQ),eS.position.add(nQ),eS.recenter.add(nQ),eS.zoomOut.add(nQ),eS.zoomIn.add(nQ),es.endDone.add(t=>eh.send({type:"DETAIL",...t})),ec.open.add(()=>{let t;return t=!0,te(ec.openDone,t)}),ec.openDone.add(t=>eh.send({type:t?"OPEN":"CANCEL"})),ec.close.add(()=>eh.send({type:"CANCEL"})),ec.closeDone.add(()=>{requestAnimationFrame(()=>{var t,e;null==(e=t3.get("detail"))||null==(t=e.querySelector(".detail"))||t.scroll(0,0)})}),tB.lock.add(t=>e$({type:"SWITCH",fidx:t})),tB.selectDone.add(()=>e$({type:"SWITCH.DONE"})),es.end.add(t=>eM.send({type:"SEARCH.END",res:t})),ec.open.add(()=>eA.set("locked")),ec.closeDone.add(()=>e$({type:"SEARCH.DONE"})),ec.closeDone.add(()=>eA.set("panning")),tn.getDone.add(t=>{null!==t&&e$({type:"SCROLL.GET.DONE",scroll:t})}),tn.syncSyncDone.add(t=>{null!==t&&e$({type:"SCROLL.SYNCSYNC.DONE",scroll:t})}),tr.resize.add(t=>{let{layout:e,force:n}=t;return e$({type:"RESIZE",layout:e,force:n})}),tr.mode.add(eR),tr.zoomStart.add(()=>{eL=!0}),tr.zoomEnd.add(()=>{eL=!1}),eS.reset.add(()=>e$({type:"HOME"})),eS.recenter.add(()=>e$({type:"RECENTER"})),eS.rotate.add(()=>e$({type:"ROTATE"})),eS.zoomOut.add(()=>e$({type:"ZOOM",z:-1,p:null})),eS.zoomIn.add(()=>e$({type:"ZOOM",z:1,p:null})),eN.multiStart.add(()=>tt(tn.get)),eN.multiStart.add(()=>eA.set("touching")),eN.multiEnd.add(()=>eA.set("panning")),eN.zoom.add(t=>{let{z:e,p:n}=t;return e$({type:"ZOOM",z:e>0?1:-1,p:n})}),tG.rendered.add(()=>e$({type:"RENDERED"})),tQ.start(),rs.start(),re.start(),rd.start(),rh.start(),rr.start(),tS.start(),nG.start(),eh.start(),eM.start();let n=(d({origViewBox:e={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0},isContainerRendered:n6,isUiRendered:nC,...t}),d({...c}),{...c,origViewBox:e,...t});tX(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.1.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let r=document.getElementById(n.root);if(null===r)throw Error("#root not found!");r.onwheel=function(t){var e;let n=r.children[0];t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||eL)&&t.preventDefault()},r.oncontextmenu=function(t){t.preventDefault()},r.ontouchmove=function(t){if(eL){var e;if(t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui")return;t.preventDefault()}else if(!nX)return;t.preventDefault()},document.title=n.title,document.body.onkeydown=t=>{var e;return e={type:"DOWN",key:t.key},void rs.send(e)},document.body.onkeyup=t=>{var e;return e={type:"UP",key:t.key},void rs.send(e)},(0,t5.createRoot)(r).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(rw,{})}));let i=document.getElementById("style-root");if(null===i)throw Error("#style-root not found!");(0,t5.createRoot)(i).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(t2,{})}))}({renderMap:function(t){let{floors:e,data:{origViewBox:n}}=t,{viewBox:r,width:i,height:o}=function(){let{scroll:t,svg:e}=tE(t=>t.layout);return{viewBox:F(e),width:B(t.width),height:B(t.height)}}(),{fidxToOnAnimationEnd:a,urls:s}=t1();return void 0===e?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"content",children:(0,u.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:i,height:o,children:e.floors.map((t,e)=>(0,u.jsx)(l.Fragment,{children:(0,u.jsxs)("g",{className:`floor fidx-${e}`,onAnimationEnd:a(e),children:[(0,u.jsx)(rS,{origViewBox:n,idx:e,url:s.get(e),onAnimationEnd:a(e),labels:t.labels}),(0,u.jsx)(rj,{origViewBox:n,idx:e,url:s.get(e),onAnimationEnd:a(e),labels:t.labels})]})},e))})})},isMapRendered:function(){return!0},...{root:"root",title:"Yokosuka Port Market",backgroundColor:"white",origViewBox:JSON.parse('{"x":0,"y":0,"width":1130.0,"height":730.0}'),origBoundingBox:rL,zoomFactor:2,floorsConfig:{floors:rN,initialFidx:0},...{getSearchEntries:function(){return rA.map(t=>{let[e,n]=t;return{address:e,pos:n}})},getSearchInfo:function(t){let e=rT.get(t.address);return void 0===e||e.size<1?null:{title:Array.from(e)[0],x:{tag:"unknown"}}},renderInfo:function(t){return(0,u.jsx)("p",{children:t.info.title})}}}})}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={exports:{}};return i[t](n,n.exports,a),n.exports}a.m=i,a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.u=t=>"static/js/async/"+t+"."+({147:"0c913067",968:"c5d8d5e9"})[t]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],a.O=(e,n,r,i)=>{if(n){i=i||0;for(var o=t.length;o>0&&t[o-1][2]>i;o--)t[o]=t[o-1];t[o]=[n,r,i];return}for(var l=1/0,o=0;o<t.length;o++){for(var[n,r,i]=t[o],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(t=>a.O[t](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){t.splice(o--,1);var d=r();void 0!==d&&(e=d)}}return e},a.p="/demos/YokosukaPortMarket/",a.b=document.baseURI||self.location.href,e={410:0},a.O.j=t=>0===e[t],n=(t,n)=>{var r,i,[o,l,s]=n,c=0;if(o.some(t=>0!==e[t])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(t&&t(n);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},(r=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","491","357"],()=>a(76));l=a.O(l)})();