(()=>{var t,e,n,i,o={4303(t,e,n){var i={"./floor-1F.svg":"5901","./floor-2F.svg":"1440","./floor-B1F.svg":"6851"};function o(t){return n(r(t))}function r(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=()=>Object.keys(i),o.resolve=r,t.exports=o,o.id=4303},5901(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-1F.f224c4f338.svg"},1440(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-2F.1a8d81228d.svg"},6851(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-B1F.10d55ed7c8.svg"},9182(t,e,n){"use strict";t.exports=n.p+"static/svg/ron-herman.3d3fd83999.svg"},20(t,e,n){"use strict";let i,o,r,a;var l,s=n(1371);let c={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let d={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:c,internals:c,origin:c,measures:c,viewbox:c,points:c,lines:c,multilinestrings:c,multipolygons:c},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(t){return(0,s.createElement)("p",{},t.info.title)}};function p(t){d={...d,...t}}var u=n(9099);n(2304);var h=n(215);let f=h.gPz([h.wNn,h.QfV]),g=h.O31(f);i=h._kM({ids:g}),h.mj7(i);let x=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var m=n(3024);function y(t,e,n){let[i,o,r]=t,[a,l]=e;return i*a+o*l+r*n}function w(t,e,n){return[y(function(t){let[[e],[n],[i]]=t;return[e,n,i]}(t),e,n),y(function(t){let[[,e],[,n],[,i]]=t;return[e,n,i]}(t),e,n)]}function v(t,e){let n=t.x+e.x,i=t.y+e.y;return{...t,x:n,y:i}}function S(t,e){let n=t.x-e.x,i=t.y-e.y;return{...t,x:n,y:i}}let E={x:0,y:0};function j(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,i="number"==typeof e?e:e instanceof Array?e[1]:e.y,o=t.x*n,r=t.y*i;return{...t,x:o,y:r}}function N(t,e,n,i){return{x:t,y:e,width:n,height:i}}let b={x:0,y:0,width:1,height:1};function D(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function k(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function O(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function A(t,e){return{...t,x:e.x,y:e.y}}function T(t){return function(t){let{x:e,y:n,width:i,height:o}=t;return`${e} ${n} ${i} ${o}`}(function(t,e){let{x:n,y:i,width:o,height:r}=t;return{x:e(n),y:e(i),width:e(o),height:e(r)}}(t,function(t){return Math.round(100*t)/100}))}function M(t){let{x:e,y:n,width:i,height:o}=t;return{tl:{x:e,y:n},br:{x:e+i,y:n+o}}}function R(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function L(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function C(t){let[[e,n],[i,o]]=t;return{tl:{x:e,y:n},br:{x:i,y:o}}}function $(t,e){return[w(t,function(t){let[e]=t;return e}(e),0),w(t,function(t){let[,e]=t;return e}(e),0),w(t,function(t){let[,,e]=t;return e}(e),1)]}function z(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function I(t,e,n,i){var o,r;return o=function(t,e){let[n,i]=e;return[z(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),z([-n,-i])].reduce($)}("number"==typeof(r=e)?[r,r]:"x"in r?[r.x,r.y]:r,[n,i]),(0,m.Fs)(t,M,L,t=>(function(t,e){let[n,i]=t;return[e(n),e(i)]})(t,t=>w(o,t,1)),C,R)}function F(t){return Math.round(100*t)/100}function H(t){return Math.round(1e7*t)/1e7}var U=n(2203),W=n(9041),Y=n(5227),P=n(6058),B=n(5114);let Z=[1,2,2.5,5,10,15,20,25,30,40,50];function G(t){t.forEach(t=>t())}function V(t,e){t.forEach(t=>t(e))}let q={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},_={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function X(t){return void 0!==t&&"number"==typeof t}function K(t,e,n,i,o,r){return new DOMMatrixReadOnly(t instanceof Array?t:X(t)&&X(e)&&X(n)&&X(i)&&X(o)&&X(r)?[t,e,n,i,o,r]:void 0)}let J={container:b,scroll:b,content:K(),svgOffset:{x:-0,y:-0},svgScale:1,svg:b};function Q(t){let{container:e,outer:n,svgScale:i,inner:o}=t,{x:r,y:a}=n;return{container:e,scroll:e,content:K(),svgOffset:{x:-r,y:-a},svgScale:i,svg:o}}function tt(t){let{scroll:e,content:n,svgOffset:i,svgScale:o,svg:r}=t;return K().translate(e.x,e.y).multiply(n).translate(-i.x,-i.y).scale(1/o,1/o).translate(-r.x,-r.y)}function te(t,e){let n=t.height,i=n*e;return N((t.width-i)/2,0,i,n)}function tn(t,e){let n=t.width,i=n/e;return N(0,(t.height-i)/2,n,i)}let ti={...J,config:{fontSize:16,container:b,outer:b,inner:b,svgScale:1}};function to(t,e){let n=k(t.scroll);return tr(t,e,e,n)}function tr(t,e,n,i){let o=tt(t).inverse().transformPoint(i),r=I(t.scroll,[e,n],i.x,i.y),a=j(t.svgOffset,[e,n]),l=I(t.svg,[e,n],o.x,o.y);return{...t,scroll:r,svgOffset:a,svg:l}}function ta(t,e){var n,i;let o=k({...t.scroll,x:0,y:0}),r=(n=o.x,i=o.y,K().translate(n,i).rotate(e).translate(-n,-i)).multiply(t.content);return{...t,content:r}}function tl(t,e){let n=t.scroll,i=S(j(e,-1),n);return(0,m.Fs)(t,t=>({...t,scroll:O(t.scroll,i)}),t=>{let e,i,o,r,a,l,s;return e=A(t.scroll,n),i=t.content.inverse(),r=v(o=k(t.scroll),S(t.scroll,n)),a=i.transformPoint(o),l=j(S(i.transformPoint(r),a),-t.svgScale),s=O(t.svg,l),{...t,scroll:e,svg:s}})}function ts(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,i=e.scrollTop,o=e.scrollWidth,r=e.scrollHeight;if(null===n)return!1;let a=o-t.width,l=r-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${r}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),i!==c&&(e.scrollTop=c);let d=e.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let p=e.scrollTop;return!(Math.abs(p-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${i} vs. real=${p}`),!1)}let tc={scroll:b,client:{width:0,height:0},timeStamp:0};function td(t){let e=t.currentTarget;null!==e&&(tc={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})}let tp=(0,W.e)(ti),tu=(0,Y.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,P.a)({zoom:(t,e)=>e.zoom}),updateRotate:(0,P.a)({}),updateSvgMatrix:(0,P.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return function(t){let{content:e,svgOffset:n,svgScale:i,svg:o}=t;return e.translate(-n.x,-n.y).scale(1/i,1/i).translate(-o.x,-o.y)}(e)}}),updateGeoMatrix:(0,P.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(d.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,P.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:i}=t,o=Math.max(n.width,n.height)/2*i,r=Math.round(Math.log10(o)),a=(e=o/Math.pow(10,r-1),Z.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,r-1);return{svg:s,client:s/i}}(e)}}),updateScroll:(0,P.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x+o.width/2,y:i.y+o.height/2};return r.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x,y:i.y},l={x:i.x+o.width,y:i.y+o.height};return{start:r.transformPoint(a),end:r.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:ti,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:E,distanceRadius:{svg:0,client:0},geoRange:{start:E,end:E},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,P.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),t=>{let{event:e}=t;return tp.set(e.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,B.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:t=>{let{event:e}=t;return e}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}}},"STYLE.MODE":{actions:(0,P.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:(0,P.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,P.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,P.a)({animation:t=>{var e,n,i;let{event:{animation:o}}=t;return null===o?"":(e=o.from,n=o.to,i=o.origin,`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===i?"left top":`${i.x}px ${i.y}px`};
    transform: ${e.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===i?"left top":`${i.x}px ${i.y}px`};
    transform: ${n.toString()} translate3d(0px, 0px, 0px);
  }
}
`)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,P.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,P.a)({animation:null,animating:!1}),target:"Idle"}}}}}),th=(0,B.c)(tu,{systemId:"system-viewer1"});function tf(t){th.send(t)}function tg(t){return(0,U.d4)(th,e=>t(e.context))}function tx(){tf({type:"STYLE.SCROLL",currentScroll:tc})}function tm(){return tg(t=>t.layout.container)}function ty(){return tg(t=>t.distanceRadius)}function tw(t){let e=tg(t=>t.animating);(0,s.useEffect)(()=>{null!==t.current&&(e?(t.current.classList.add("zooming"),t.current.classList.remove("not-zooming")):(t.current.classList.remove("zooming"),t.current.classList.add("not-zooming")))},[t,e])}let tv=`
position: absolute;
left: 0;
top: 0;
`,tS=`
position: absolute;
right: 0;
top: 0;
`,tE=`
position: absolute;
left: 0;
bottom: 0;
`,tj=`
position: absolute;
right: 0;
bottom: 0;
`,tN=`
margin: 0;
`,tb=`
padding: 0;
`,tD=`
${tN} ${tb}
`,tk=`
box-sizing: border-box;
`,tO=`
width: 100vw;
height: 100vh;
height: 100svh;
`,tA=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tT=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tM=`
-webkit-user-select: none;
user-select: none;
`,tR=`
touch-action: none;
`,tL=`
pointer-events: none;
`,tC=`
pointer-events: initial;
`,t$=`
background-color: rgba(255, 255, 255, 0.5);
`,tz=`
cubic-bezier(0, 0, 0, 1)
`,tI=`
cubic-bezier(1, 0, 1, 1)
`,tF=`
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
`,tH={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tU=n(4319);let tW={init:new Set,rendered:new Set},tY=function(t){V(tW.init,t)},tP=function(){G(tW.rendered)},tB=(0,W.e)(0),tZ=(0,Y.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,P.a)({blobs:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.blobs.set(n,i))},urls:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.urls.set(n,URL.createObjectURL(i)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,P.a)({nfloors:t=>{let{event:e}=t;return e.nfloors},fidx:t=>{let{event:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tB.set(e.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:[(0,P.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tB.set(e.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:t=>{let{context:e}=t;return e.fidx===e.nfloors-1}},{actions:(0,tU.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx+1}})}],"LEVEL.DOWN":[{guard:t=>{let{context:e}=t;return 0===e.fidx}},{actions:(0,tU.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,P.a)({prevFidx:null}),target:"Idle"}}}}}),tG=(0,B.c)(tZ);tG.on("LOCK",t=>{let e,{fidx:n}=t;return e=n,V(tH.lock,e)});let tV=new Worker(new URL(n.p+n.u(760),n.b),Object.assign({},{type:"module"},{type:void 0}));function tq(){var t;let{fidx:e,prevFidx:n,urls:i}=(t=t=>{let{fidx:e,prevFidx:n,urls:i}=t;return{fidx:e,prevFidx:n,urls:i}},(0,U.d4)(tG,e=>t(e.context))),o=(0,s.useMemo)(()=>(function(t,e,n){let i=d.floorsConfig;if(void 0===i)return null;let o=i.floors.map((i,o)=>{var r,a,l,s,c,d,p;return r=t,a=e,l=n,(s=o)!=r||l?s===a?(c=s,`
.fidx-${c} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(d=s,`
.fidx-${d} {
  visibility: hidden;
}
  `):(p=s,`
.fidx-${p} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${o}
${tF}
`})(e,n,void 0===i.get(e)),[e,n,i]),r=(0,s.useCallback)(t=>()=>{let n;return t!==e?void 0:(n=t,V(tH.selectDone,n))},[e]),a=(0,s.useCallback)(t=>()=>{let i;return null!==n||t===e?void 0:(i=t,V(tH.lock,i))},[e,n]);return{fidx:e,prevFidx:n,style:o,fidxToOnAnimationEnd:r,fidxToOnClick:a,urls:i}}tV.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:t,blob:n}=e;tG.send({type:"IMAGE",fidx:t,blob:n})}}},tV.onerror=t=>{console.error("floors error",t)},tV.onmessageerror=t=>{console.error("floors messageerror",t)};var t_=n(1642),tX=n(3772);let tK=`
:root {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 2em;
}
a, a:link, a:visited, a:hover, a:active {
  color: black;
}
`;function tJ(){let t=tg(t=>t.rendered);(0,s.useEffect)(()=>{requestAnimationFrame(()=>tP())},[t]);let e=tg(t=>t.shown),n=tg(t=>t.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${tz};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",i=tg(t=>t.layout.scroll),o=`
.content {
  width: ${F(i.width)}px;
  height: ${F(i.height)}px;
}
`;return(0,u.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,o]})}let tQ=new Map;function t0(t,e,n){(0,s.useEffect)(()=>(function(t,e,n){let i=void 0===n?document:tQ.get(n)??null;if(null===i)return;let o=i.querySelector(`#${t}`)??null;if(null===o||null!==o.shadowRoot)return;let r=o.attachShadow({mode:"open"});tQ.set(t,r),(0,tX.createRoot)(r).render(e)})(t,e,n),[t,n,e])}let t1={bus:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,u.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,u.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,u.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,u.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,u.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,u.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,u.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,u.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,u.jsx)("use",{x:"8.5",href:"#_person2"}),(0,u.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,u.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36,-36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,u.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,u.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,u.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,u.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,u.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,u.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,u.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,u.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,u.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,u.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,u.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,u.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,u.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,u.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,u.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(t){return(0,u.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,u.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,u.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function t5(){return(0,u.jsx)("g",{className:"assets",children:(0,u.jsx)(t2,{})})}function t2(){return(0,u.jsx)("g",{className:"symbols",children:Object.entries(t1).map((t,e)=>{let[n,i]=t;return(0,u.jsx)(s.Fragment,{children:i({id:n})},e)})})}function t3(t){return t>.5?-1:+(t<.5)}function t4(t){return t<.3?1:t>.7?-1:0}function t9(t){return{open:t,animating:!1}}function t6(t){return t.open||t.animating?null:{open:!0,animating:!0}}function t7(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function t8(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function et(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function ee(t){let{open:e,animating:n}=t;return e||n}let en={start:new Set,end:new Set,endDone:new Set},ei={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},eo={p:E,psvg:E,fidx:0,layout:J,info:{title:""}};function er(t){return function(e,n){let i=e[n],o=t(i);return e[n]=null===o?i:o,e}}let ea=(0,Y.mj)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return ee(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return ee(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,P.a)({canceling:()=>!0}),endCancel:(0,P.a)({canceling:()=>!1}),open:(0,P.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return er(t6)(n,i)}}),close:(0,P.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return er(t8)(n,i)}}),handle:(0,P.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return er(n[i].open?t7:et)(n,i)}})}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,detail:eo,m:{header:t9(!0),detail:t9(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,P.a)({detail:t=>{let{event:{psvg:e,fidx:n,info:i,layout:o}}=t;return{psvg:e,p:tt(o).transformPoint(e),fidx:n,info:i,layout:o}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,B.n)("animationEnded")},{actions:(0,P.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,B.n)("isDetailVisible")},{actions:(0,P.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,B.n)("animationEnded")},{actions:(0,P.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,B.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,P.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tU.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,P.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,B.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,P.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,B.r)({type:"DONE"})]}}}}}),el=(0,B.c)(ea);function es(){return(0,U.d4)(el,t=>t.context)}function ec(t){ep(t,es().m.header)}function ed(t){ep(t,es().m.detail)}function ep(t,e){let{open:n,animating:i}=e;(0,s.useEffect)(()=>{if(null===t.current)return;let e=t.current;e.classList.remove(i?"not-animating":"animating"),e.classList.add(i?"animating":"not-animating"),e.classList.remove(n?"closed":"opened"),e.classList.add(n?"opened":"closed")},[i,n,t])}function eu(t,e,n,i){let o={x:e/2,y:n/2},r=e/20,a=r/2;function l(e){var n;let i,o;return n={x:t.h,y:t.v},i=e.x*n.x,o=e.y*n.y,{...e,x:i,y:o}}let s=t.th<Math.PI/4,c=0===t.v,d=0===t.h,p=l(j(o,-1)),u=l(c||d?S(j(o,-1),{x:i,y:i}):S(j(o,-1),{x:s?i:0,y:s?0:i})),[h,f]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:r})]:[{x:0,y:0},l({x:r,y:0})],g=v(p,h),x=v(p,f);return{p,q:u,a:g,b:x}}el.on("CLOSE.DONE",()=>G(ei.closeDone));let eh=`
.not-animating {
  &.detail {
    transform-origin: 0 0;
    transform: translate(var(--tx-b-x), var(--tx-b-y)) scale(var(--b)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
  &.balloon {
    transform-origin: 0 0;
    transform: translate(var(--tx-b-x), var(--tx-b-y)) scale(var(--b)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
}

.animating {
  &.detail,
  &.balloon {
    --duration: 400ms;
    transform-origin: 0 0;
    will-change: opacity, transform;
  }
  &.detail {
    animation: xxx-detail var(--duration) var(--timing);
  }
  &.balloon {
    animation: xxx-balloon var(--duration) var(--timing);
  }
  &.opened {
    --timing: ${tz};
  }
  &.closed {
    --timing: ${tI};
  }
}

@keyframes xxx-detail {
  from {
    opacity: var(--a);
    transform: translate(var(--tx-a-x), var(--tx-a-y)) scale(var(--a)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: translate(var(--tx-b-x), var(--tx-b-y)) scale(var(--b)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
}

@keyframes xxx-balloon {
  from {
    opacity: var(--a);
    transform: translate(var(--tx-a-x), var(--tx-a-y)) scale(var(--a)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: translate(var(--tx-b-x), var(--tx-b-y)) scale(var(--b)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
}
`;function ef(t,e,n,i,o){let{open:r,animating:a}=es().m.detail;(0,s.useEffect)(()=>{if(null===t.current)return;let l=t.current,s=(t,e)=>l.style.setProperty(t,null===e?null:String(e));if(null===e||null===n||!ee({open:r,animating:a}))return void s("visibility","hidden");let{width:c,height:d}=i,p=j(o.q,-1);if(s("visibility",null),s("--pww",`${-c/2}px`),s("--phh",`${-d/2}px`),a){let{a:t,b:n}=r?{a:0,b:1}:{a:1,b:0},i=r?tz:tI,o=r?{a:E,b:p}:{a:p,b:E},a={a:v(e,o.a),b:v(e,o.b)};s("--a",t),s("--b",n),s("--timing",`${i}`),s("--tx-a-x",`${a.a.x}px`),s("--tx-a-y",`${a.a.y}px`),s("--tx-b-x",`${a.b.x}px`),s("--tx-b-y",`${a.b.y}px`);return}{let{b:t}={a:0,b:1},n=v(e,p);s("--a",null),s("--b",t),s("--timing",null),s("--tx-a-x",null),s("--tx-a-y",null),s("--tx-b-x",`${n.x}px`),s("--tx-b-y",`${n.y}px`);return}},[e,n,a,o.q,r,t,i])}function eg(t){let e=(0,s.useRef)(null);return ed(e),ef(e,t._p,t._hv,t._size,t._leg),(0,u.jsxs)("div",{ref:e,className:"balloon",children:[(0,u.jsx)(em,{...t}),t.children,(0,u.jsx)("style",{children:ex})]})}let ex=`
.balloon,
.balloon-svg {
  ${tv}
  ${tL}
  z-index: 10;
  will-change: opacity, transform;
}
`;function em(t){let e=t._hv;return null===e?(0,u.jsx)("svg",{}):(0,u.jsx)(ey,{...t,hv:e})}function ey(t){let{viewBox:e,width:n,height:i,fg:o,bg:r}=(0,s.useMemo)(()=>(function(t,e){let{bw:n,bh:i,lh:o,d:r,width:a,height:l}=e,s=N(-a/2,-a/2,a,l),{body:c,leg:d}=function(t,e,n,i){let o={x:e/2,y:n/2},r=`
m${-o.x},${-o.y}
h${e}
v${n}
h${-e}
z
`,{p:a,q:l,a:s,b:c}=eu(t,e,n,i),d=S(l,s),p=S(c,l),u=S(a,c);return{body:r,leg:`
m${s.x},${s.y}
l${d.x},${d.y}
l${p.x},${p.y}
l${u.x},${u.y}
z
`}}(t,n,i,o);function p(t){return`M${t},${t} ${c} M${t},${t} ${d}`}return{viewBox:s,width:a,height:l,bg:p(r),fg:p(0)}})(t.hv,t._size),[t._size,t.hv]);return(0,u.jsxs)("svg",{className:"balloon-svg",viewBox:T(e),width:n,height:i,children:[(0,u.jsx)("path",{className:"bg",d:r}),(0,u.jsx)("path",{className:"fg",d:o}),(0,u.jsx)("style",{children:ew})]})}let ew=`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`,ev={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},eS=()=>G(ev.zoomIn),eE=()=>G(ev.zoomOut),ej=()=>G(ev.rotate),eN=()=>G(ev.reset),eb=()=>G(ev.recenter),eD={multiStart:new Set,multiEnd:new Set,zoom:new Set},ek=(0,W.e)("panning");ek.subscribe(t=>{let e;return e=t,V(_.mode,e)});let eO=(0,Y.mj)({types:{},guards:{isHoming:t=>{let{context:{animationReq:e}}=t;return null!==e&&"home"===e.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>d.isMapRendered(),isUiRendered:()=>d.isUiRendered()},actions:{setRendered:(0,P.a)({rendered:!0}),emitGetScroll:(0,tU.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tU.a)(t=>{let{context:e}=t;return function(t){let{layout:e}=t;return{type:"SCROLL.SYNC",pos:e.scroll}}(e)}),emitSyncScrollSync:(0,tU.a)(t=>{let{context:e}=t;return function(t){let{layout:e}=t;return{type:"SCROLL.SYNCSYNC",pos:e.scroll}}(e)}),prepareZoom:(0,P.a)((t,e)=>{let{context:n}=t;return function(t,e){let{z:n,p:i}=e,o={type:"zoom",z:n,p:i??k(t.layout.container)};return{...t,animationReq:o}}(n,e)}),prepareHome:(0,P.a)(t=>{let{context:e}=t;return{...e,animationReq:{type:"home"}}}),prepareRotate:(0,P.a)(t=>{let e,{context:n}=t;return e={type:"rotate",deg:90,p:k(n.layout.container)},{...n,animationReq:e}}),clearAnimation:(0,P.a)(t=>{let{context:e}=t;return{...e,animationReq:null}}),startZoom:(0,P.a)(t=>{var e,n,i,o,r,a,l,s,c,p,u,h,f;let g,x,m,y,w,v,S,E,j,N,b,D,{context:O}=t;return e=O.animationReq,n=O.layout,N=null===e?null:"zoom"===e.type?(i=n,o=e.z,r=e.p,g=tt(i).inverse().transformPoint(r),x=1/(a=o,Math.pow(d.zoomFactor,a)),m=K().scale(1/x,1/x),{type:"Zoom",svg:I(i.svg,x,g.x,g.y),svgScale:i.svgScale*x,q:{from:K(),to:m,origin:r}}):"home"===e.type?(l=n,y=k((s=function(t){let{config:e,content:n}=t;return{config:e,...Q(e),content:n}}(n)).config.inner),w=tt(l).transformPoint(y),v=s.svgScale/l.svgScale,E=(function(t,e){if(t instanceof DOMMatrixReadOnly)return K(1,0,0,1,t.e,t.f);if("number"==typeof t&&"number"==typeof e)return K(1,0,0,1,t,e);throw Error("dommatrixreadonlyTranslateOnly")})((S=k(l.container)).x-w.x,S.y-w.y).multiply((c=1/v,p=1/v,u=w.x,h=w.y,K().scale(c,p,1,u,h,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:K(),to:E,origin:null}}):(f=e.p,j=K().rotate(90),{type:"Rotate",deg:90,q:{from:K(),to:j,origin:f}}),b=O.layout,D=function(t,e){var n,i,o;return null===e?t:"Move"===e.type?(n=e.move,{...t,scroll:A(t.scroll,n)}):"Zoom"===e.type?(i=e.svg,o=e.svgScale,{...t,svg:i,svgScale:o}):ta(t,e.deg)}(O.layout,N),{...O,animation:N,prevLayout:b,layout:D}}),endZoom:(0,P.a)(t=>{var e,n;let i,o,{context:r}=t;return i=r.zoom*(null===(e=r.animationReq)||"zoom"!==e.type?1:Math.pow(2,e.z)),o=r.rotate+(null===(n=r.animationReq)||"rotate"!==n.type?0:n.deg),{...r,prevLayout:null,animation:null,zoom:i,rotate:o}}),endHome:(0,P.a)(t=>{let e,n,{context:i}=t;return e=k(i.origLayout.container),n=ta(to(i.origLayout,9),i.rotate),{...i,cursor:e,layout:n}}),emitZoomStart:(0,tU.a)(t=>{let{context:e}=t;return function(t){let{layout:e,zoom:n,animation:i}=t;return{type:"ZOOM.START",layout:e,zoom:n,q:i?.q??null}}(e)}),emitZoomEnd:(0,tU.a)(t=>{let{context:e}=t;return function(t){let{layout:e,zoom:n,animation:i}=t;return{type:"ZOOM.END",layout:e,zoom:n,q:i?.q??null}}(e)}),resetCursor:(0,P.a)(t=>{let e,{context:n}=t;return e=k(n.layout.container),{...n,cursor:e}}),resizeLayout:(0,P.a)((t,e)=>{let{context:n}=t;return function(t,e){let{layout:n}=e;return{...t,rendered:!1,origLayout:n,layout:to(n,9)}}(n,e)}),resetScroll:(0,P.a)(t=>{let{context:e}=t;return function(t){let{scroll:e}=tc,n=tl(t.layout,e);return{...t,layout:n}}(e)}),emitSyncLayout:(0,tU.a)(t=>{let{context:e}=t;return function(t){let{layout:e,rendered:n}=t;return{type:"SYNC.LAYOUT",layout:e,force:n}}(e)}),prepareSearch:(0,P.a)((t,e)=>{let{context:n}=t;return function(t,e){let{pos:n}=e;return{...t,cursor:n}}(n,e)}),emitSearchStart:(0,tU.a)(t=>{let{context:e}=t;return function(t){let{scroll:e}=tc;return{type:"SEARCH.START",req:{psvg:tt(tl(t.layout,e)).inverse().transformPoint(t.cursor)}}}(e)}),emitSearchEndDone:(0,tU.a)((t,e)=>{let{context:n}=t;return function(t,e){let{res:n}=e,{scroll:i}=tc,o=tl(t.layout,i);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:o}}}(n,e)}),emitSwitch:(0,tU.a)((t,e)=>{let{context:n}=t;return function(t){let{fidx:e}=t;return{type:"SWITCH",fidx:e}}(e)}),emitSwitchDone:(0,tU.a)({type:"SWITCH.DONE"})}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:ti,prevLayout:null,layout:ti,cursor:k(ti.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,B.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"Resizing"},SEARCH:{actions:{type:"prepareSearch",params:t=>{let{event:e}=t;return e}},target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:{type:"prepareZoom",params:t=>{let{event:e}=t;return e}},target:"Zooming"},HOME:{actions:"prepareHome",target:"Zooming"},ROTATE:{actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:"clearAnimation",type:"final"}}}}}),eA=(0,B.c)(eO,{systemId:"system-viewer1"});function eT(t){eA.send(t)}eA.on("SEARCH.START",t=>{let e,{req:n}=t;return e=n,V(en.start,e)}),eA.on("SEARCH.END.DONE",t=>{let e,n,{res:i}=t;null===i?eA.send({type:"SEARCH.DONE"}):(e=i,V(en.endDone,e),n=i.psvg,V(ei.open,n))}),eA.on("ZOOM.START",t=>{let e;return e=t,V(_.zoomStart,e)}),eA.on("ZOOM.END",t=>{let e;return e=t,V(_.zoomEnd,e)}),eA.on("SWITCH",t=>{let e,{fidx:n}=t;return e=n,V(tH.select,e)}),eA.on("SWITCH.DONE",()=>G(tH.unlock)),eA.on("SYNC.LAYOUT",t=>{let e,{layout:n,force:i}=t;return e={layout:n,force:i},V(_.layout,e)}),eA.on("SCROLL.SYNC",t=>{let e,{pos:n}=t;return e=n,V(q.sync,e)}),eA.on("SCROLL.SYNCSYNC",t=>{let e,{pos:n}=t;return e=n,V(q.syncSync,e)}),eA.on("SCROLL.GET",()=>G(q.get));let eM=!1,eR=!1;function eL(t){eM="locked"===t,eR="locked"===t}function eC(t){(0,s.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",e$),()=>{e.removeEventListener("wheel",e$)}},[t])}function e$(t){let e=t.currentTarget;eR&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function ez(t){let e,n=(0,s.useRef)(null);return eC(n),ed(n),ef(n,t._p,t._hv,t._size,t._leg),(0,u.jsxs)("div",{ref:n,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void el.send(t)},children:[d.renderInfo&&(1!==(e=Object.values(t._detail.info)).length||"string"!=typeof e[0]||""!==e[0])&&d.renderInfo({info:t._detail.info}),(0,u.jsx)("style",{children:eI})]})}let eI=`
.detail {
  ${tv}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${tC}
  ${tk}
  z-index: 11;
  will-change: opacity, transform;
  cursor: default;
  touch-action: pan-y;
  overscroll-behavior-x: none;
  overscroll-behavior-y: none;
  &.like {
    pointer-events: initial;
  }
  &.liked {
    color: orange;
  }
  & h1,
  & h2,
  & h3,
  & h4 {
    ${tM}
    margin: 1.5em;
    text-align: center;
  }
  & p {
    ${tM}
    margin: 0.5em;
  }
  & a {
    text-decoration: none;
  }
  & table, & tbody, & th, & tr, & td {
  }
}

#ui-svg-defs {
  display: none;
}
`;function eF(){return t0("detail",(0,u.jsx)(eH,{}),"ui"),(0,u.jsx)("div",{id:"detail"})}function eH(){return(0,u.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,u.jsx)(eU,{}),(0,u.jsx)(eW,{})]})}function eU(){let t=es().detail,e=(0,s.useMemo)(()=>{let e,n,i,o,r,a,l,s,c,d,p,u;return e=t.p,n=t.layout,i=function(t,e){let{x:n,y:i}=e,o=t.width/t.height,r={x:n/t.width,y:i/t.height},a=o>1?t3(r.x):t4(r.x);return{h:a,v:o>1?t4(r.y):t3(r.y),th:Math.atan2(t.height,t.width)}}(t.layout.container,e),o=n.container.width,c=50*(s=.01*Math.min(o,r=n.container.height)),d=50*s,p=10*s,u=c/100,l=eu(i,(a={bw:c,bh:d,lh:p,d:u,width:c+2*p+2*u,height:d+2*p+2*u}).bw,a.bh,a.lh),{_p:e,_hv:i,_W:o,_H:r,_size:a,_leg:l}},[t]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(eg,{...e}),(0,u.jsx)(ez,{...e,_detail:t}),(0,u.jsx)("style",{children:eh})]})}function eW(){return(0,u.jsx)("svg",{id:"ui-svg-defs",children:(0,u.jsx)("defs",{children:(0,u.jsx)(t5,{})})})}function eY(){return t0("footer",(0,u.jsx)(eP,{}),"ui"),(0,u.jsx)("div",{id:"footer"})}function eP(){let t=(0,s.useRef)(null);return ec(t),(0,u.jsxs)("div",{ref:t,className:"ui-content footer",children:[(0,u.jsx)("p",{children:(0,u.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:d.copyright})}),(0,u.jsx)("style",{children:eB})]})}let eB=`
.footer {
  ${tE}
  ${tA}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${tM}
    pointer-events: initial;
  }
  & > h2 {
    font-size: x-small;
    margin: 0;
  }
  & > p {
    margin: 0.25em;
    & > a {
      color: black;
      &:link, &:visited, &:hover, &:active {
        color: black;
      }
    }
  }
  will-change: initial;
  transform-origin: 50% 100%;
  
  &.opened {
    --opened: 1;
  }
  &.closed {
    --closed: 1;
  }
  &.not-animating {
    --animating: 0;
    --a: initial;
    &.opened {
      --b: 1;
    }
    &.closed {
      --b: 0;
    }
    --duration: initial;
    --timing: initial;
    will-change: initial;
    animation: initial;
    opacity: var(--b);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  }
  &.animating {
    --animating: 1;
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${tz};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${tI};
    }
    --duration: 300ms;
    will-change: opacity, transform;
    animation: xxx-footer var(--duration) var(--timing);
    opacity: initial;
    transform: initial;
  }
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
`;function eZ(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("g",{id:"measure",children:(0,u.jsx)(eq,{})})})}function eG(){let{svg:t}=ty();return(0,u.jsxs)("div",{id:"distance",children:[(0,u.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),eK.map(e=>(0,u.jsxs)(s.Fragment,{children:[(0,u.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,u.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,u.jsx)("style",{children:(0,u.jsx)(eX,{})})]})}function eV(){let t=tg(t=>t.geoPoint),e=t.x>0?"E":"W",n=t.y>0?"N":"S",i=`${e} ${H(Math.abs(t.x))}`,o=`${n} ${H(Math.abs(t.y))}`;return(0,u.jsxs)("div",{id:"coordinate",children:[(0,u.jsx)("p",{id:"longitude",children:i}),(0,u.jsx)("p",{id:"latitude",children:o}),(0,u.jsx)("style",{children:(0,u.jsx)(e_,{})})]})}function eq(){let{width:t,height:e}=tm(),{client:n}=ty(),i=(0,s.useMemo)(()=>`M0,${e/2} h${t}`,[e,t]),o=(0,s.useMemo)(()=>`M${t/2},0 v${e}`,[e,t]),r=(0,s.useMemo)(()=>eK.map(i=>(function(t){let{width:e,height:n,r:i}=t;return`M${e/2},${n/2} m-${i},0 a${i},${i} 0,1,0 ${2*i},0 a${i},${i} 0,1,0 -${2*i},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(i+1)})),[n,e,t]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),(0,u.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:o}),r.map((t,e)=>(0,u.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function e_(){let{width:t,height:e}=tm(),n=`
#distance,
#coordinate {
  ${tv}
  width: ${t}px;
  height: ${e}px;
}
`,i=`
#longitude {
  ${tj}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,o=`
#latitude {
  ${tE}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,u.jsxs)(u.Fragment,{children:[n,i,o]})}function eX(){let{width:t,height:e}=tm(),{client:n}=ty(),i=`
.distance {
  ${tv}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,o=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,r=eK.map(i=>`
#distance-x-${i+1} {
  transform: translate(${t/2+n*(i+1)}px, ${e/2}px) scale(0.5);
}
`),a=eK.map(i=>`
#distance-y-${i+1} {
  transform: translate(${t/2}px, ${e/2+n*(i+1)}px) scale(0.5);
}
`);return(0,u.jsxs)(u.Fragment,{children:[o,i,r,a]})}let eK=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function eJ(){return t0("guides",(0,u.jsx)(e0,{}),"ui"),(0,u.jsx)("div",{id:"guides"})}let eQ=(d.uiConfig?.showGuides??!0)&&!d.mapCoord.matrix.isIdentity;function e0(){let t=(0,s.useRef)(null);return ec(t),eQ?(0,u.jsxs)("div",{ref:t,className:"ui-content guides",children:[(0,u.jsx)("svg",{className:"guides",children:(0,u.jsx)(eZ,{})}),(0,u.jsx)(eG,{}),(0,u.jsx)(eV,{}),(0,u.jsx)("style",{children:e1})]}):(0,u.jsx)(u.Fragment,{})}let e1=`
.guides {
  ${tv}
  ${tO}
  ${tL}
  z-index: 2;
  
  &.not-animating {
    &.opened {
      --ob: 1;
    }
    &.closed {
      --ob: 0;
    }
    opacity: var(--ob);
    will-change: opacity;
  }
  &.animating {
    &.opened {
      --oa: 0;
      --ob: 1;
      --timing: ${tz};
    }
    &.closed {
      --oa: 1;
      --ob: 0;
      --timing: ${tI};
    }
    --duration: 300ms;
    animation: xxx-measure var(--duration) var(--timing);
    will-change: opacity;
  }
}

text {
  ${tM}
}

@keyframes xxx-measure {
  from {
    opacity: var(--oa);
  }
  to {
    opacity: var(--ob);
  }
}
`;function e5(){let{fidx:t,fidxToOnClick:e}=tq(),n=d.floorsConfig;return void 0===n||n.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"floors",children:[(0,u.jsx)("ul",{className:"floor-list",children:n.floors.map((n,i)=>{let{name:o}=n;return(0,u.jsx)("li",{className:`floor-item ${e9(i===t)}`,onClick:e(i),children:o},i)})}),(0,u.jsx)("style",{children:e2})]})}let e2=`
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
  ${t$}
}
.floor-item {
  text-align: center;
  padding: 0.5em 0.75em;
  border: 1.5px solid black;
  pointer-events: initial;
  will-change: opacity;
  transition: opacity 250ms;
  &.selected {
    opacity: 1;
  }
  &.unselected {
    opacity: 0.5;
  }
}
`;function e3(){let{fidx:t}=tq(),e=d.floorsConfig;return void 0===e||e.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{children:[e.floors.map((e,n)=>(0,u.jsx)("h2",{className:`floor-name ${e9(n===t)}`,children:e.name},n)),(0,u.jsx)("style",{children:e4})]})}let e4=`
.floor-name {
  position: absolute;
  transform: translate(-50%, 0);
  margin: 0.25em 0;
  font-size: 4em;
  will-change: opacity;
  transition: opacity 250ms;
  &.selected {
    opacity: 1;
  }
  &.unselected {
    opacity: 0;
  }
}
`;function e9(t){return t?"selected":"unselected"}function e6(){return t0("header",(0,u.jsx)(e7,{}),"ui"),(0,u.jsx)("div",{id:"header"})}function e7(){let t=(0,s.useRef)(null);return ec(t),(0,u.jsxs)("div",{ref:t,className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void el.send(t)},children:[(0,u.jsx)("h1",{className:"title",onClick:()=>eN(),children:d.title}),(0,u.jsx)(e3,{}),(0,u.jsx)("style",{children:e8})]})}let e8=`
.header {
  ${tv}
  ${tA}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
  & h1,
  & h2,
  & p {
    ${tM}
    ${tC}
  }
  & h1,
  & h2 {
    margin: 0.25em;
    font-weight: 100;
    cursor: default;
    text-align: center;
    font-size: large;
  }
  transform-origin: 50% 0%;
  
  &.not-animating {
    &.opened {
      --b: 1;
    }
    &.closed {
      --b: 0;
    }
    will-change: initial;
    animation: none;
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
    opacity: var(--b);
  }
  &.animating {
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${tz};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${tI};
    }
    --duration: 300ms;
    will-change: opacity, transform;
    animation: xxx-header var(--duration) var(--timing);
  }
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
`;function nt(){return t0("left",(0,u.jsx)(ne,{}),"ui"),(0,u.jsx)("div",{id:"left"})}function ne(){let t=(0,s.useRef)(null);return ec(t),(0,u.jsxs)("div",{ref:t,className:"ui-content left bottom",children:[(0,u.jsx)(e5,{}),(0,u.jsx)("style",{children:nn})]})}let nn=`
.left {
  ${tv}
  ${tT}
  padding: 0.4em;
  font-size: smaller;
  ${tL}
  top: initial;
  align-items: end;
  
  &.not-animating {
    &.opened {
      --b: 1;
    }
    &.closed {
      --b: 0;
    }
    transform-origin: 0% 50%;
    opacity: var(--b);
    transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
    will-change: opacity, transform;
  }
  &.animating {
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${tz};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${tI};
    }
    --duration: 300ms;
    transform-origin: 0% 50%;
    animation: xxx-left var(--duration) var(--timing);
    will-change: opacity, transform;
  }
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
`;function ni(){return(0,u.jsx)("div",{className:"button-item fullscreen",onClick:()=>G(ev.fullscreen),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:no})})})}let no=`
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
`;function nr(){return(0,u.jsx)("div",{className:"button-item home",onClick:()=>eN(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:na})})})}let na=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nl(){return d.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"button-item position",onClick:()=>G(ev.position),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nd})})})}let ns=3*Math.sqrt(2),nc=ns+6,nd=`
M 0,0
m 0,${nc/2}
l -3,-3
a ${ns},${ns} 0,1,1 6,0
z
m 0,${-nc+ns+ns/2}
a ${ns/2},${ns/2} 0,1,0 0,${-ns}
a ${ns/2},${ns/2} 0,1,0 0,${ns}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function np(){return(0,u.jsx)("div",{className:"button-item recenter",onClick:()=>eb(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nu})})})}let nu=`
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
`;function nh(){return(0,u.jsx)("div",{className:"button-item rotate",onClick:()=>ej(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nf})})})}let nf=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function ng(){return(0,u.jsx)("div",{className:"button-item zoom-in",onClick:()=>eS(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nx})})})}let nx=`
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
`;function nm(){return(0,u.jsx)("div",{className:"button-item zoom-out",onClick:()=>eE(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ny})})})}let ny=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nw(){return t0("right",(0,u.jsx)(nv,{}),"ui"),(0,u.jsx)("div",{id:"right"})}function nv(){let t=(0,s.useRef)(null);return ec(t),(0,u.jsxs)("div",{ref:t,className:"ui-content right bottom",children:[(0,u.jsx)(nE,{}),(0,u.jsx)("style",{children:nS})]})}let nS=`
.right {
  ${tS}
  ${tT}
  padding: 0.4em;
  font-size: smaller;
  ${tL}

  transform-origin: 100% 50%;

  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 50%;
  &.bottom {
    transform-origin: 100% 100%;
  }
  
  &.not-animating {
    &.opened {
      --b: 1;
    }
    &.closed {
      --b: 0;
    }
    opacity: var(--b);
    /*
    transform: scale(var(--b));
    will-change: initial;
    */
  }
  &.animating {
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${tz};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${tI};
    }
    animation: xxx-right 300ms var(--timing);
    will-change: opacity, transform;
  }
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
`;function nE(){return(0,u.jsxs)("div",{className:"button",children:[(0,u.jsx)(nl,{}),(0,u.jsx)(nr,{}),(0,u.jsx)(ni,{}),(0,u.jsx)(np,{}),(0,u.jsx)(nh,{}),(0,u.jsx)(nm,{}),(0,u.jsx)(ng,{}),(0,u.jsx)("style",{children:nj})]})}let nj=`
.button {
  font-size: large;
  margin: 0;
  ${tA}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${tC}
  cursor: default;
  ${t$}
  & > svg {
    display: block;
    width: 1.25em;
    height: 1.25em;
    pointer-events: none;
    & > path {
      stroke: black;
      stroke-width: 0.4;
      fill: none;
    }
  }
}

.fullscreen {
  display: none;
}
`;function nN(){return t0("screen",(0,u.jsx)(nb,{}),"ui"),(0,u.jsx)("div",{id:"screen"})}function nb(){let t=(0,s.useRef)(null);return ed(t),tw(t),eC(t),(0,u.jsx)("div",{ref:t,className:"ui-content screen",onClick:()=>G(ei.close),children:(0,u.jsx)("style",{children:nD})})}let nD=`
.screen {
  ${tv}
  ${tO}
  background-color: none;
  cursor: default;
  pointer-events: none;
  z-index: 5;
  will-change: opacity;
  &.not-animating {
    &.opened {
      pointer-events: initial;
    }
    &.closed {
      &.not-zooming {
        display: none;
      }
      &.zooming {
        display: initial;
        opacity: 0;
      }
    }
    opacity: 0.3;
    will-change: opacity;
  }
  &.animating {
    &.opened {
      --a: 0;
      --b: 0.3;
      --timing: ${tz};
    }
    &.closed {
      --a: 0.3;
      --b: 0;
      --timing: ${tI};
    }
    --duration: 400ms;
    will-change: opacity;
    animation: xxx-screen var(--duration) var(--timing);
  }
}
@keyframes xxx-screen {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;function nk(){return t0("ui",(0,u.jsx)(nO,{})),(0,u.jsx)("div",{id:"ui"})}function nO(){return(0,u.jsxs)("div",{className:"ui",children:[(0,u.jsx)(nN,{}),(0,u.jsx)(e6,{}),(0,u.jsx)(eY,{}),(0,u.jsx)(nt,{}),(0,u.jsx)(nw,{}),(0,u.jsx)(eJ,{}),(0,u.jsx)(eF,{})]})}function nA(){let t;return null!==(t=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&t>0}function nT(){eb()}var nM=n(8077),nR=n(990),nL=n(4465),nC=n(5909);let n$=(t,e)=>(function t(e,n,i){let o=Math.min(e.length,n.length),r=e[i],l=n[i];if(i>=o||r===a||l===a)return nM.pH(e.length,n.length);let s=nM.pH(r.x,l.x)||nM.pH(r.y,l.y);return 0===s?t(e,n,i+1):s})(t,e,0);function nz(t){return(0,m.Fs)(t.values(),nR.Ts,nR.di(n$),nR.x1(t=>0===t.length?nC.xT:nC.Py(t[0])))}function nI(t){let e;return t.length<2||null===(e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y})))?null:j(e,1/t.length)}function nF(t){return new Map((0,m.Fs)(t.changedTouches,t=>nR.O3.from(t),nR.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let nH=(0,Y.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z},isModeIdle:t=>{let{context:{mode:e}}=t;return"idle"===e},isModePanning:t=>{let{context:{mode:e}}=t;return"pan"===e},isModePinching:t=>{let{context:{mode:e}}=t;return"pinch"===e}},actions:{updateTouches:(0,P.a)({touches:t=>{var e,n,i;let o,r,l,s,c,d,p,u,h,{context:{touches:f},event:g}=t;return"TOUCH.START"===g.type?(e=g.ev,n=f.vecs,i=nF(e),l=nI(r=nz(o=(0,m.Fs)([...n.entries(),...i.entries()],nR.TS(new Map,(t,e)=>{let[n,i]=e,o=nL.fromUndefinedOr(t.get(n)),r=nL.isSome(o)?[...o.value,...i]:i;return new Map(t).set(n,r)})))),c=2!==r.length?null:.5>Math.abs((s=S(r[0],r[1])).y/s.x),{...f,vecs:o,points:r,cursor:l,horizontal:c}):"TOUCH.MOVE"===g.type?function(t,e){var n,i,o,r;let l,s=nF(e),c=new Map((0,m.Fs)(t.vecs.entries(),nR.Ts,nR.Tj(t=>{let e,[n,i]=t;return[n,(e=nL.fromUndefinedOr(s.get(n)),nL.isSome(e)?[...e.value,...i]:i)]}))),d=nz(c),p=nI(d),[u,h]=d;if(null===p||u===a||h===a)return{...t,vecs:c,points:d,cursor:p};let f=(n=t.dists,i=Math.sqrt((o=u,r=h,Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2))),l=Math.pow((n.length>0?n[0]:i)-i,2),0===n.length||l>0?[i,...n]:n),g=function(t){let[e,n,i,o]=t;return e===a||n===a||i===a||o===a?null:e<n&&n<i&&i<o?-1:e>n&&n>i&&i>o?1:null}(f);return{vecs:c,points:d,cursor:p,dists:f,z:g,horizontal:t.horizontal}}(f,g.ev):"TOUCH.END"===g.type?(d=nF(g.ev),h=nI(u=nz(p=new Map((0,m.Fs)(f.vecs.entries(),nR.Ts,nR.x1(t=>{let[e,n]=t;return d.has(e)?nC.xT:nC.Py([e,n])}))))),{vecs:p,points:u,cursor:h,dists:0===p.size?[]:f.dists,z:0===p.size?null:f.z,horizontal:f.horizontal}):f}}),raiseOp:(0,B.r)(t=>{let{event:e}=t;return"TOUCH.START"===e.type?{type:"STARTED"}:"TOUCH.MOVE"===e.type?{type:"MOVED"}:"TOUCH.END"===e.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,P.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,P.a)({mode:"pan"}),enterPinch:(0,P.a)({mode:"pinch"}),emitMulti:(0,tU.a)(t=>{let{context:{touches:e}}=t;return{type:"MULTI",touches:e}}),emitZoom:(0,tU.a)(t=>{let{context:{touches:e}}=t;return{type:"ZOOM",touches:e}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,B.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,B.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,B.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),nU=(0,B.c)(nH),nW=!1;function nY(t){nU.send({type:"TOUCH.START",ev:t})}function nP(t){nU.send({type:"TOUCH.MOVE",ev:t})}function nB(t){nU.send({type:"TOUCH.END",ev:t})}function nZ(){nU.send({type:"CANCEL"})}function nG(t){eM||eT({type:"SEARCH",pos:{x:t.pageX,y:t.pageY}})}function nV(t){let e;null!==t&&(e=t,V(q.eventTick,e))}function nq(t){let e=(0,s.useRef)(null);return ed(e),tw(e),(0,u.jsxs)("div",{ref:e,id:"viewer",className:"container",onTouchStart:nY,onTouchMove:nP,onTouchEnd:nB,onClick:nG,onContextMenu:nT,onScroll:nV,onAnimationEnd:t=>{var e;(e={type:"ANIMATION.END",ev:t}).ev.stopPropagation(),eT(e),G(_.animationEnd)},children:[t.children,(0,u.jsx)(n_,{})]})}function n_(){let t=`
.container {
  ${tv}
  ${tO}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;

  /*
  &.not-animating {
    &.opened {
      opacity: 0.5;
    }
    &.closed {
      opacity: 1;
    }
  }
  &.animating {
    &.opened {
      --a: 1;
      --b: 0.5;
      --timing: ${tz};
    }
    &.closed {
      --a: 0.5;
      --b: 1;
      --timing: ${tI};
    }
    --duration: 400ms;
    animation: xxx-container var(--duration) var(--timing);
  }
  */
}
@keyframes xxx-container {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("style",{children:t}),(0,u.jsx)(nX,{}),(0,u.jsx)(nK,{}),(0,u.jsx)(nJ,{})]})}function nX(){let t=tg(t=>t.layout.content),e=`
.content {
  ${tv}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,u.jsx)("style",{children:e})}function nK(){let t=tg(t=>t.animation);return(0,u.jsx)("style",{children:t})}function nJ(){let{style:t}=tq();return null===t?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("style",{children:t})}function nQ(){return null!==document.querySelector(".container")}nU.on("MULTI",t=>{let{touches:e}=t;2===e.vecs.size?(nW=!0,G(eD.multiStart)):(G(eD.multiEnd),nW=!1)}),nU.on("ZOOM",t=>{let e,{touches:n}=t,i=n.cursor,o=n.z;null!==i&&null!==o&&(e={z:o>0?1:-1,p:i},V(eD.zoom,e))});var n0=n(1586);async function n1(t){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){n(t)},{enableHighAccuracy:!0,timeout:t,maximumAge:0})})}let n5=(0,Y.mj)({types:{events:{},emitted:{}},actors:{api:(0,n0.Sx)(()=>n1(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,P.a)({position:t=>{let{event:e}=t;return e.output}}),(0,tU.a)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,P.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),n2=(0,B.c)(n5),n3=(0,Y.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tU.a)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tU.a)(t=>{let{event:e}=t;return e}),target:"Done"}}},Done:{always:"Idle"}}}),n4=(0,B.c)(n3);function n9(t){n4.send(t)}n4.on("SEARCH",t=>{let{req:{psvg:e}}=t,n=d.mapCoord.matrix.inverse().transformPoint(e),i=tB.get();n6.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:i}})}),n4.on("SEARCH.DONE",t=>{let e,{res:n}=t;return e=n,V(en.end,e)});let n6=new Worker(new URL(n.p+n.u(502),n.b),Object.assign({},{type:"module"},{type:void 0}));n6.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":n9({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let i;n=e.res,null===(i=d.getSearchInfo(n,d.mapMap,d.osmSearchEntries))?(console.log("info not found!",n),n9({type:"SEARCH.DONE",res:null})):n9({type:"SEARCH.DONE",res:{psvg:d.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:i}});break;case"SEARCH.ERROR":console.log("search error!",e.error),n9({type:"SEARCH.DONE",res:null})}},n6.onerror=t=>{console.error("search error",t)},n6.onmessageerror=t=>{console.error("search messageerror",t)};var n7=n(5318);let n8=Math.round,it=document.createElement("div"),ie=()=>{var t;let e;return t=d.cartoConfig?.backgroundColor??d.backgroundColor??"darkgray",it.style.color=t,document.body.appendChild(it),e=getComputedStyle(it).color,document.body.removeChild(it),e},ii=new Map,io=new Map;function ir(t){let e=(()=>{let t=ii.get("color");if(t)return t;let e=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:ie()});return e.parentNode||document.head.appendChild(e),ii.set("color",e),e})(),n={color:e.getAttribute("content")||ie()},{p:i,q:o}=(()=>{var t;let e=ie(),n=io.get(e);if(n)return{p:e,q:n};let i=function(t){let{r:e,g:n,b:i}=t;return`rgb(${n8(e)}, ${n8(n)}, ${n8(i)})`}({r:(t=function(t){let e=t.match(/\d+/g);if(!e||3!==e.length)throw Error("invalid color!");let n=Number(e[0]);return{r:n,g:Number(e[1]),b:Number(e[2])}}(e)).r/2,g:t.g/2,b:t.b/2});return io.set(e,i),{p:e,q:i}})(),r=t?o:i;(0,n7.i)(n,{color:r,duration:400,ease:"outQuad",onRender:()=>e.setAttribute("content",n.color)}),(0,n7.i)(document.body,{backgroundColor:r,duration:400,ease:"outQuad"}),(0,n7.i)(".container",{opacity:t?.5:1,duration:400,ease:"outQuad"})}function ia(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}let il=(0,Y.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:t=>{let{event:{key:e}}=t;return"r"===e},shouldRecenter:t=>{let{event:{key:e}}=t;return"c"===e},shouldRotate:t=>{let{event:{key:e}}=t;return"t"===e},shouldZoom:t=>{let{event:{key:e}}=t;return 0!==ia(e)},shouldFloorLevelUp:t=>{let{event:{key:e}}=t;return"u"===e},shouldFloorLevelDown:t=>{let{event:{key:e}}=t;return"d"===e}},actions:{reset:(0,tU.a)({type:"RESET"}),recenter:(0,tU.a)({type:"RECENTER"}),rotate:(0,tU.a)({type:"ROTATE"}),zoom:(0,tU.a)((t,e)=>{let{z:n}=e;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tU.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tU.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,P.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"===e||n,alt:"Alt"===e||i,control:"Control"===e||o}})(e.mod,n.key)}}),handleUp:(0,P.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"!==e&&n,alt:"Alt"!==e&&i,control:"Control"!==e&&o}})(e.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:t=>{let{event:{key:e}}=t;return{z:ia(e)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),is=(0,B.c)(il);is.on("RESET",eN),is.on("RECENTER",eb),is.on("ROTATE",ej),is.on("ZOOM.IN",eS),is.on("ZOOM.OUT",eE),is.on("FLOOR.LEVEL.UP",()=>G(tH.levelUp)),is.on("FLOOR.LEVEL.DOWN",()=>G(tH.levelDown));let ic=(0,Y.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:b,next:b,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,P.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,B.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:t=>{let{context:e}=t;return console.log("resize: ignoring height-only change",e)},target:"Idle"},{guard:t=>{let{context:e}=t;return!D(e.prev,e.next)},actions:[(0,P.a)({waited:0}),(0,tU.a)(t=>{var e,n,i,o;let r,a,{context:l}=t;return{type:"LAYOUT",layout:(e=d.fontSize,n=l.next,r=k((o={config:i=function(t,e,n,i){var o;let r,a,l,s,{outer:c,scale:d}=(o=i??n,r=e.width/e.height,s=(l=r>(a=o.width/o.height))?te(e,a):tn(e,a),{outer:s,inner:l?te(o,r):tn(o,r),scale:l?o.height/e.height:o.width/e.width,rO:r,rI:a,v:l});return{fontSize:t,container:e,outer:c,inner:i??n,svgScale:d}}(e,n,d.origViewBox,d.origBoundingBox),...Q(i)}).scroll),a=o.container.width/o.container.height,tr(o,a<1?1/a:1,a<1?1:+a,r)),force:!l.first}}),(0,P.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,P.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,B.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:t=>{let{context:{next:e}}=t;return D(e,tp.get().container)},actions:(0,P.a)({prev:t=>{let{context:{next:e}}=t;return e}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),id=(0,B.c)(ic);id.on("LAYOUT",t=>{let e;return e=t,V(_.resize,e)}),window.addEventListener("resize",()=>{id.send({type:"RESIZE"})});let ip=(0,Y.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,P.a)({ticked:!1}),set:(0,P.a)({ticked:!0}),expire:(0,tU.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),iu=(0,Y.mj)({types:{},actions:{getScroll:(0,P.a)({scroll:()=>(function(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),N(e,n,i,o)}return null})()}),syncScroll:(t,e)=>{let{pos:n}=e;return ts(n)}},actors:{syncScrollLogic:(0,n0.Sx)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!ts(e))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,tU.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,P.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,tU.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,P.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),ih=(0,B.c)(iu,{systemId:"system-scroll1"});function ig(t){ih.send(t)}ih.on("SCROLL.GET.DONE",t=>{let e,{scroll:n}=t;return e=n,V(q.getDone,e)}),ih.on("SCROLL.SYNCSYNC.DONE",t=>{let e,{scroll:n}=t;return e=n,V(q.syncSyncDone,e)});let ix=(l=()=>G(q.eventExpire),o=ip.provide({delays:{DURATION:500}}),(r=(0,B.c)(o)).on("EXPIRE",l),r.start(),{tick:function(){r.send({type:"TICK"})}}),im=(0,W.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function iy(t){var e;t.getMapNames&&(e=t.getMapNames({data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig}),im.trigger.set({names:e}))}async function iw(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let iv=`
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
  ${tv}
  ${tO}
  ${tD}
  ${tk}
  ${tR}
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
`,iS=function(){let t=d.cartoConfig?.backgroundColor??d.backgroundColor??"darkgray",e={data:d,render:d,carto:d.cartoConfig,floors:d.floorsConfig};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(nq,{...e,children:d.renderMap(e)}),(0,u.jsx)(nk,{}),(0,u.jsxs)("style",{children:[iv,`body { background-color: ${t}; }`]})]})};function iE(t){let{origViewBox:e,url:n}=t;return(0,u.jsx)("image",{href:n,x:e.x,y:e.y,width:e.width,height:e.height})}function ij(t){let{origViewBox:e,url:n,labels:i}=t;return void 0===i?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("svg",{href:n,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:T(e),children:[(0,u.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),i.map((t,e)=>(0,u.jsxs)("text",{...iD(t.attrs),children:["id"in t.attrs&&"style"in t.attrs&&(0,u.jsx)("style",{children:`#${t.attrs.id} { ${t.attrs.style}; }`}),t.children&&t.children.map((t,e)=>(0,u.jsx)("tspan",{...iD(t.attrs),children:t.text??""},e))]},e))]})}let iN=/^[{].*$/,ib=/^style$/;function iD(t){return Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return!e.match(iN)&&!e.match(ib)}).map(t=>{var e;let[n,i]=t;return[!(e=n).match(/^.*-.*$/)||e.match(/^(aria|data)-.*$/)?e:e.split("-").map((t,e)=>{var n;let i;return 0===e?t:(i=(n=t).match(/^(.)(.*)$/))?`${i[1].toUpperCase()}${i[2]}`:n}).join(""),i]}))}var ik=JSON.parse('{"1F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"BAYSIDE GEIHINKAN VERANDA minatomirai","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text39","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"62.4505","y":"172.96297"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan36","x":"62.4505","y":"172.96297"},"text":"BAYSIDE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan37","x":"62.4505","y":"186.46297"},"text":"GEIHINKAN"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan38","x":"62.4505","y":"199.96297"},"text":"VERANDA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan39","x":"62.4505","y":"213.46297"},"text":"minatomirai"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pie Holic","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text41","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"62.085999","y":"107.81398"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan40","x":"62.085999","y":"107.81398"},"text":"Pie"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan41","x":"62.085999","y":"125.81398"},"text":"Holic"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Ron Herman","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text43","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:14px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"167.38101","y":"99.429321"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan42","x":"167.38101","y":"99.429321"},"text":"Ron"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan43","x":"167.38101","y":"120.42932"},"text":"Herman"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Frank&Eileen","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text44","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"222.44051","y":"97.124985"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan44","x":"222.44051","y":"97.124985"},"text":"Frank"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"222.44051","y":"107.62498","id":"tspan91"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"222.44051","y":"118.12498","id":"tspan92"},"text":"Eileen"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Gente di Mare","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text47","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"327.479","y":"114.50247"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan45","x":"327.479","y":"114.50247"},"text":"Gente"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan46","x":"327.479","y":"125.00247"},"text":"di"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan47","x":"327.479","y":"135.50247"},"text":"Mare"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Carhartt WIP Store Yokohama","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text51","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"105.09797","y":"-365.125","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan51","x":"105.09797","y":"-365.125"},"text":"Carhartt WIP"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"105.09797","y":"-354.625","id":"tspan127"},"text":"Store Yokohama"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Salon de BIOGANCE Cafe","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text55","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"109.84601","y":"-400.125","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan53","x":"109.84601","y":"-400.125"},"text":"Salon de"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan55","x":"109.84601","y":"-389.625"},"text":"BIOGANCE Cafe"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"paw’s living","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text57","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:10px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"479.79001","y":"79.86998"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan56","x":"479.79001","y":"79.86998"},"text":"paw’s"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan57","x":"479.79001","y":"94.86998"},"text":"living"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Styles Annex","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text59","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"485.14398","y":"125.49997"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan58","x":"485.14398","y":"125.49997"},"text":"Styles"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan59","x":"485.14398","y":"143.49997"},"text":"Annex"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"COS","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text60","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:16px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"484.90402","y":"193.21997"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan60","x":"484.90402","y":"193.21997"},"text":"COS"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"KUSHITANI PERFORMANCE STORE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text63","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"237.36349","y":"-230.50099","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan61","x":"237.36349","y":"-230.50099"},"text":"KUSHITANI"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan62","x":"237.36349","y":"-220.00099"},"text":"PERFORMANCE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan63","x":"237.36349","y":"-209.50099"},"text":"STORE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"YANUK","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text64","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"237.5","y":"-253.258","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan64","x":"237.5","y":"-253.258"},"text":"YANUK"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"NEIGHBORHOOD","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text65","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"209.86966","y":"-289.9975","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan65","x":"209.86966","y":"-289.9975"},"text":"NEIGHBORHOOD"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"GREENROOM GALLERY","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text67","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"210.13297","y":"-330.2475","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan66","x":"210.13297","y":"-330.2475"},"text":"GREENROOM"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan67","x":"210.13297","y":"-319.7475"},"text":"GALLERY"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"DENHAM","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text68","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"219.99998","y":"-394.99051","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan68","x":"219.99998","y":"-394.99051"},"text":"DENHAM"}]}],"2F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ZEBRA Coffee & Croissant","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text72","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline;opacity:1","x":"167.33351","y":"87.932823"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan69","x":"167.33351","y":"87.932823"},"text":"ZEBRA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan70","x":"167.33351","y":"101.43282"},"text":"Coffee"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan71","x":"167.33351","y":"114.93282"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan72","x":"167.33351","y":"128.43283"},"text":"Croissant"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Miguel Juani","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text74","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"104.94734","y":"-226.649","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan73","x":"104.94734","y":"-226.649"},"text":"Miguel"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan74","x":"104.94734","y":"-213.149"},"text":"Juani"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"A16","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text75","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:14px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"312.86398","y":"110.00632"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan75","x":"312.86398","y":"110.00632"},"text":"A16"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Hawaiian Cafe ＆ Restaurant Merengue Makana","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text80","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"109.928","y":"-490.04401","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan77","x":"109.928","y":"-490.04401"},"text":"Hawaiian"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan79","x":"109.928","y":"-478.04401"},"text":"Cafe & Restaurant"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan80","x":"109.928","y":"-466.04401"},"text":"Merengue Makana"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"LOVST BY NARUMIYA","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text83","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"226.89999","y":"-181.21001","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan81","x":"226.89999","y":"-181.21001"},"text":"LOVST"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan82","x":"226.89999","y":"-163.21001"},"text":"BY"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan83","x":"226.89999","y":"-145.21001"},"text":"NARUMIYA"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"焼肉うしすけ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text84","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"232.04549","y":"220.19519"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan84","x":"232.04549","y":"220.19519"},"text":"焼肉"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"232.04549","y":"234.55132","id":"tspan119"},"text":"うしすけ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"コリアン うしすけ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text86","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"219.65265","y":"-330.63989","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan85","x":"219.65265","y":"-330.63989"},"text":"コリアン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan86","x":"219.65265","y":"-319.47403"},"text":"うしすけ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Roller Coast","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text88","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"362.25848","y":"217.37634"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan87","x":"362.25848","y":"217.37634"},"text":"Roller"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan88","x":"362.25848","y":"227.87634"},"text":"Coast"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"COS","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text48","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:16px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"479.90402","y":"193.21999"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan48","x":"479.90402","y":"193.21999"},"text":"COS"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"DENHAM","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text49","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"219.99998","y":"-394.99051","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan49","x":"219.99998","y":"-394.99051"},"text":"DENHAM"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"BAYSIDE GEIHINKAN VERANDA minatomirai","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text89","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"62.4505","y":"140.46298"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan54","x":"62.4505","y":"140.46298"},"text":"BAYSIDE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan76","x":"62.4505","y":"153.96298"},"text":"GEIHINKAN"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan78","x":"62.4505","y":"167.46298"},"text":"VERANDA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan89","x":"62.4505","y":"180.96298"},"text":"minatomirai"}]}]}');let iO=["B1F","1F","2F"].map(t=>({name:t,href:n(4303)(`./floor-${t}.svg`),labels:ik?.[t]??void 0})),iA=Object.values(JSON.parse('{"B1F":{"AB1F-Content-(ViewBox)":{"x":0,"y":0}},"1F":{"A1F-Content-(ViewBox)":{"x":0,"y":0},"A1F-Shops-1":{"x":62.5,"y":112.5},"A1F-Shops-2":{"x":62.5,"y":190},"A1F-Shops-3":{"x":167.5,"y":105.001},"A1F-Shops-4":{"x":222.5,"y":105},"A1F-Shops-5":{"x":312.5,"y":82.503},"A1F-Shops-6":{"x":327.5,"y":122.5},"A1F-Shops-7":{"x":362.5,"y":105},"A1F-Shops-8":{"x":397.5,"y":110},"A1F-Shops-9":{"x":480,"y":85},"A1F-Shops-10":{"x":485,"y":130},"A1F-Shops-11":{"x":485,"y":187.5},"A1F-Shops-12":{"x":167.5,"y":227.5},"A1F-Shops-13":{"x":222.5,"y":237.5},"A1F-Shops-14":{"x":257.5,"y":237.5},"A1F-Shops-15":{"x":292.5,"y":210.003},"A1F-Shops-16":{"x":327.5,"y":210.001},"A1F-Shops-17":{"x":362.5,"y":215},"A1F-Shops-18":{"x":397.5,"y":220}},"2F":{"A2F-Content-(ViewBox)":{"x":0,"y":0},"A2F-Shops-1":{"x":62.5,"y":157.5},"A2F-Shops-2":{"x":167.5,"y":105.001},"A2F-Shops-3":{"x":222.5,"y":105.001},"A2F-Shops-4":{"x":312.5,"y":105.001},"A2F-Shops-5":{"x":380,"y":105.001},"A2F-Shops-6":{"x":480,"y":110},"A2F-Shops-7":{"x":480,"y":187.5},"A2F-Shops-8":{"x":167.5,"y":227.5},"A2F-Shops-9":{"x":232.5,"y":225.001},"A2F-Shops-10":{"x":292.5,"y":215.003},"A2F-Shops-11":{"x":327.5,"y":220.001},"A2F-Shops-12":{"x":362.5,"y":220.001},"A2F-Shops-13":{"x":397.5,"y":220}}}')).concat().flatMap((t,e)=>Object.entries(t).map(t=>{let[n,i]=t;return[n,{coord:i,fidx:e}]}));function iT(t){let[e,n]=t;return n.map(t=>[e,t])}function iM(t){return t.reduce(function(t,e){let[n,i]=e,o=new Set([...t.get(n)??new Set,i]);return new Map([...t,[n,o]])},new Map)}let iR=Object.values(JSON.parse('{"B1F":{},"1F":{"BAYSIDE GEIHINKAN VERANDA minatomirai":["A1F-Shops-2"],"Pie Holic":["A1F-Shops-1"],"Ron Herman":["A1F-Shops-3"],"Frank&Eileen":["A1F-Shops-4"],"Gente di Mare":["A1F-Shops-6"],"Carhartt WIP Store Yokohama":["A1F-Shops-7"],"Salon de BIOGANCE Cafe":["A1F-Shops-8"],"paw’s living":["A1F-Shops-9"],"Styles Annex":["A1F-Shops-10"],"COS":["A1F-Shops-11"],"KUSHITANI PERFORMANCE STORE":["A1F-Shops-13"],"YANUK":["A1F-Shops-14"],"NEIGHBORHOOD":["A1F-Shops-15"],"GREENROOM GALLERY":["A1F-Shops-16"],"DENHAM":["A1F-Shops-18"]},"2F":{"ZEBRA Coffee & Croissant":["A2F-Shops-2"],"Miguel Juani":["A2F-Shops-3"],"A16":["A2F-Shops-4"],"Hawaiian Cafe ＆ Restaurant『Merengue Makana』":["A2F-Shops-6"],"LOVST BY NARUMIYA":["A2F-Shops-8"],"焼肉うしすけ":["A2F-Shops-9"],"コリアン うしすけ":["A2F-Shops-11"],"Roller Coast":["A2F-Shops-12"],"DENHAM":["A2F-Shops-13"],"COS":["A2F-Shops-7"],"BAYSIDE GEIHINKAN VERANDA minatomirai":["A2F-Shops-1"]}}')).flatMap(function(t){return Object.entries(t)});iM(Array.from(iR).flatMap(iT));let iL=iM(Array.from(iR).flatMap(iT).map(t=>{let[e,n]=t;return[n,e]})),iC=new URL(n(9182),n.b);var i$=JSON.parse('{"x":20.0,"y":50.0,"width":510.0,"height":235.0}');!function(t){let e;tW.init.add(t=>{if(t.floorsConfig){let e=t.floorsConfig.floors.length,n=t.floorsConfig.initialFidx;tG.send({type:"INIT",nfloors:e,fidx:n}),tV.postMessage({type:"INIT",cfg:t.floorsConfig})}}),tH.select.add(t=>tG.send({type:"SELECT",fidx:t})),tH.levelUp.add(()=>tG.send({type:"LEVEL.UP"})),tH.levelDown.add(()=>tG.send({type:"LEVEL.DOWN"})),tH.selectDone.add(t=>tG.send({type:"SELECT.DONE",fidx:t})),ev.fullscreen.add(iw),tW.init.add(iy),ev.position.add(()=>{var t;return t={type:"GET"},void n2.send(t)}),q.eventTick.add(td),q.eventTick.add(ix.tick),q.get.add(()=>ig({type:"GET"})),q.sync.add(t=>ig({type:"SYNC",pos:t})),q.syncSync.add(t=>ig({type:"SYNCSYNC",pos:t})),tW.init.add(t=>{if(t.getSearchEntries){let e=t.getSearchEntries(t);n6.postMessage({type:"INIT",entries:e})}}),en.start.add(function(t){n4.send({type:"SEARCH",req:t})}),_.layout.add(function(t){let{layout:e,force:n}=t;tf({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>tx())}),_.zoomStart.add(function(t){tf({type:"STYLE.ZOOM",...t}),tf({type:"STYLE.ANIMATION",animation:t.q})}),_.zoomEnd.add(function(t){tf({type:"STYLE.ZOOM",zoom:t.zoom}),tf({type:"STYLE.ANIMATION",animation:t.q})}),_.animationEnd.add(function(){tf({type:"STYLE.ANIMATION.END"})}),_.mode.add(function(t){tf({type:"STYLE.MODE",mode:t})}),q.eventExpire.add(tx),ev.reset.add(nZ),ev.fullscreen.add(nZ),ev.position.add(nZ),ev.recenter.add(nZ),ev.zoomOut.add(nZ),ev.zoomIn.add(nZ),en.endDone.add(t=>el.send({type:"DETAIL",...t})),ei.open.add(()=>{let t;return t=!0,V(ei.openDone,t)}),ei.openDone.add(t=>el.send({type:t?"OPEN":"CANCEL"})),ei.close.add(()=>el.send({type:"CANCEL"})),ei.closeDone.add(()=>{requestAnimationFrame(()=>void tQ.get("detail")?.querySelector(".detail")?.scroll(0,0))}),tH.lock.add(t=>eT({type:"SWITCH",fidx:t})),tH.selectDone.add(()=>eT({type:"SWITCH.DONE"})),en.end.add(t=>eA.send({type:"SEARCH.END",res:t})),ei.open.add(()=>ek.set("locked")),ei.closeDone.add(()=>eT({type:"SEARCH.DONE"})),ei.closeDone.add(()=>ek.set("panning")),q.getDone.add(t=>{null!==t&&eT({type:"SCROLL.GET.DONE",scroll:t})}),q.syncSyncDone.add(t=>{null!==t&&eT({type:"SCROLL.SYNCSYNC.DONE",scroll:t})}),_.resize.add(t=>{let{layout:e,force:n}=t;return eT({type:"RESIZE",layout:e,force:n})}),_.mode.add(eL),_.zoomStart.add(()=>{eR=!0}),_.zoomEnd.add(()=>{eR=!1}),ev.reset.add(()=>eT({type:"HOME"})),ev.recenter.add(()=>eT({type:"RECENTER"})),ev.rotate.add(()=>eT({type:"ROTATE"})),ev.zoomOut.add(()=>eT({type:"ZOOM",z:-1,p:null})),ev.zoomIn.add(()=>eT({type:"ZOOM",z:1,p:null})),eD.multiStart.add(()=>G(q.get)),eD.multiStart.add(()=>ek.set("touching")),eD.multiEnd.add(()=>ek.set("panning")),eD.zoom.add(t=>{let{z:e,p:n}=t;return eT({type:"ZOOM",z:e>0?1:-1,p:n})}),tW.rendered.add(()=>eT({type:"RENDERED"})),tG.start(),is.start(),n2.start(),id.start(),ih.start(),n4.start(),th.start(),ei.open.add(()=>ir(!0)),ei.close.add(()=>ir(!1)),nU.start(),el.start(),eA.start();let n=(p({origViewBox:e={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0},isContainerRendered:nQ,isUiRendered:nA,...t}),p({...d}),{...d,origViewBox:e,...t});tY(n);let i=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.3.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),i.get("info")){let t=document.getElementById(d.root);if(null===t)throw Error("#root not found!");(0,tX.createRoot)(t).render((0,u.jsx)(s.StrictMode,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"svgmapviewer"}),(0,u.jsx)("h2",{children:n.title}),(0,u.jsx)("div",{className:"info",children:(0,u.jsx)(t_.h,{className:"qrcode",marginSize:6,value:document.location.href,width:"60vmin",height:"60vmin"})}),(0,u.jsx)("div",{children:(0,u.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,u.jsx)("style",{children:tK})]})}))}else{let t=document.getElementById(n.root);if(null===t)throw Error("#root not found!");t.onwheel=function(e){let n=t.children[0];e.target instanceof HTMLDivElement&&e.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||eR)&&e.preventDefault()},t.oncontextmenu=function(t){t.preventDefault()},t.ontouchmove=function(t){if(eR){if(t.target instanceof HTMLDivElement&&t.target?.id==="ui")return;t.preventDefault()}else if(!nW)return;t.preventDefault()},document.title=n.title,document.body.onkeydown=t=>{var e;return e={type:"DOWN",key:t.key},void is.send(e)},document.body.onkeyup=t=>{var e;return e={type:"UP",key:t.key},void is.send(e)},(0,tX.createRoot)(t).render((0,u.jsx)(s.StrictMode,{children:(0,u.jsx)(iS,{})}));let e=document.getElementById("style-root");if(null===e)throw Error("#style-root not found!");(0,tX.createRoot)(e).render((0,u.jsx)(s.StrictMode,{children:(0,u.jsx)(tJ,{})}))}}({renderMap:function(t){let{floors:e,data:{origViewBox:n}}=t,{viewBox:i,width:o,height:r}=function(){let{scroll:t,svg:e}=tg(t=>t.layout);return{viewBox:T(e),width:F(t.width),height:F(t.height)}}(),{fidxToOnAnimationEnd:a,urls:l}=tq();return void 0===e?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"content",children:(0,u.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:i,width:o,height:r,children:e.floors.map((t,e)=>(0,u.jsx)(s.Fragment,{children:(0,u.jsxs)("g",{className:`floor fidx-${e}`,onAnimationEnd:a(e),children:[(0,u.jsx)(iE,{origViewBox:n,idx:e,url:l.get(e),onAnimationEnd:a(e),labels:t.labels}),(0,u.jsx)(ij,{origViewBox:n,idx:e,url:l.get(e),onAnimationEnd:a(e),labels:t.labels})]})},e))})})},isMapRendered:function(){return!0},...{root:"root",title:"MARINE & WALK YOKOHAMA",backgroundColor:"#808080",origViewBox:JSON.parse('{"x":0,"y":0,"width":555.88959,"height":300.0}'),origBoundingBox:i$,zoomFactor:2,floorsConfig:{floors:iO,initialFidx:1},...{getSearchEntries:function(){return iA.map(t=>{let[e,n]=t;return{address:e,pos:n}})},getSearchInfo:function(t){let e=iL.get(t.address);return void 0===e||e.size<1?null:{title:Array.from(e)[0],x:{tag:"unknown"}}},renderInfo:function(t){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("svg",{className:"picture",preserveAspectRatio:"none",viewBox:"0 0 731.12 627",children:(0,u.jsx)("image",{href:iC.href})}),(0,u.jsx)("p",{children:t.info.title}),(0,u.jsx)("style",{children:`
.picture {
  display: block;
  width: 90%;
  margin: 5%;
}
image {
  width: 90%;
}
`})]})}}}})}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return o[t](n,n.exports,a),n.exports}a.m=o,a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.u=t=>"static/js/async/"+t+"."+({502:"a25547c785",760:"65984c680b"})[t]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],a.O=(e,n,i,o)=>{if(n){o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[n,i,o];return}for(var l=1/0,r=0;r<t.length;r++){for(var[n,i,o]=t[r],s=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every(t=>a.O[t](n[c]))?n.splice(c--,1):(s=!1,o<l&&(l=o));if(s){t.splice(r--,1);var d=i();void 0!==d&&(e=d)}}return e},a.p="/demos/MarineAndWalk/",a.b=document.baseURI||self.location.href,e={410:0},a.O.j=t=>0===e[t],n=(t,n)=>{var i,o,[r,l,s]=n,c=0;if(r.some(t=>0!==e[t])){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(s)var d=s(a)}for(t&&t(n);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},(i=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var l=a.O(void 0,["783","753","980"],()=>a(20));l=a.O(l)})();