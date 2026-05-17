(()=>{var e,t,n,r,i={4303(e,t,n){var r={"./floor-Main.svg":"1575"};function i(e){return n(o(e))}function o(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=()=>Object.keys(r),i.resolve=o,e.exports=i,i.id=4303},1575(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-Main.576377384d.svg"},6162(e,t,n){"use strict";let r,i,o,a;var l,s=n(1371);let c={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let d={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:c,internals:c,origin:c,measures:c,viewbox:c,points:c,lines:c,multilinestrings:c,multipolygons:c},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(e){return(0,s.createElement)("p",{},e.info.title)}};function u(e){d={...d,...e}}var h=n(9099);n(2304);var g=n(215);let p=g.gPz([g.wNn,g.QfV]),m=g.O31(p);r=g._kM({ids:m}),g.mj7(r);let x=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var f=n(3024);function y(e,t,n){let[r,i,o]=e,[a,l]=t;return r*a+i*l+o*n}function v(e,t,n){return[y(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),y(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function w(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function j(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}let E={x:0,y:0};function S(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,i=e.x*n,o=e.y*r;return{...e,x:i,y:o}}function b(e,t,n,r){return{x:e,y:t,width:n,height:r}}let O={x:0,y:0,width:1,height:1};function M(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function k(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function N(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function T(e,t){return{...e,x:t.x,y:t.y}}function $(e){return function(e){let{x:t,y:n,width:r,height:i}=e;return`${t} ${n} ${r} ${i}`}(function(e,t){let{x:n,y:r,width:i,height:o}=e;return{x:t(n),y:t(r),width:t(i),height:t(o)}}(e,function(e){return Math.round(100*e)/100}))}function D(e){let{x:t,y:n,width:r,height:i}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+i}}}function L(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function C(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function R(e){let[[t,n],[r,i]]=e;return{tl:{x:t,y:n},br:{x:r,y:i}}}function A(e,t){return[v(e,function(e){let[t]=e;return t}(t),0),v(e,function(e){let[,t]=e;return t}(t),0),v(e,function(e){let[,,t]=e;return t}(t),1)]}function I(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function z(e,t,n,r){var i,o;return i=function(e,t){let[n,r]=t;return[I(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),I([-n,-r])].reduce(A)}("number"==typeof(o=t)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,f.Fs)(e,D,C,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>v(i,e,1)),R,L)}function H(e){return Math.round(100*e)/100}function U(e){return Math.round(1e7*e)/1e7}var W=n(2203),F=n(9041),P=n(5227),Y=n(6058),Z=n(5114);let q=[1,2,2.5,5,10,15,20,25,30,40,50];function V(e){e.forEach(e=>e())}function _(e,t){e.forEach(e=>e(t))}let B={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},X={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function G(e){return void 0!==e&&"number"==typeof e}function K(e,t,n,r,i,o){return new DOMMatrixReadOnly(e instanceof Array?e:G(e)&&G(t)&&G(n)&&G(r)&&G(i)&&G(o)?[e,t,n,r,i,o]:void 0)}let J={container:O,scroll:O,content:K(),svgOffset:{x:-0,y:-0},svgScale:1,svg:O};function Q(e){let{container:t,outer:n,svgScale:r,inner:i}=e,{x:o,y:a}=n;return{container:t,scroll:t,content:K(),svgOffset:{x:-o,y:-a},svgScale:r,svg:i}}function ee(e){let{scroll:t,content:n,svgOffset:r,svgScale:i,svg:o}=e;return K().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/i,1/i).translate(-o.x,-o.y)}function et(e,t){let n=e.height,r=n*t;return b((e.width-r)/2,0,r,n)}function en(e,t){let n=e.width,r=n/t;return b(0,(e.height-r)/2,n,r)}let er={...J,config:{fontSize:16,container:O,outer:O,inner:O,svgScale:1}};function ei(e,t){let n=k(e.scroll);return eo(e,t,t,n)}function eo(e,t,n,r){let i=ee(e).inverse().transformPoint(r),o=z(e.scroll,[t,n],r.x,r.y),a=S(e.svgOffset,[t,n]),l=z(e.svg,[t,n],i.x,i.y);return{...e,scroll:o,svgOffset:a,svg:l}}function ea(e,t){var n,r;let i=k({...e.scroll,x:0,y:0}),o=(n=i.x,r=i.y,K().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:o}}function el(e,t){let n=e.scroll,r=j(S(t,-1),n);return(0,f.Fs)(e,e=>({...e,scroll:N(e.scroll,r)}),e=>{let t,r,i,o,a,l,s;return t=T(e.scroll,n),r=e.content.inverse(),o=w(i=k(e.scroll),j(e.scroll,n)),a=r.transformPoint(i),l=S(j(r.transformPoint(o),a),-e.svgScale),s=N(e.svg,l),{...e,scroll:t,svg:s}})}function es(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;if(null===n)return!1;let a=i-e.width,l=o-e.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${e.width}, ${e.height}]`),!1;let s=Math.round(-e.x),c=Math.round(-e.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==s&&(t.scrollLeft=s),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=t.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let ec={scroll:O,client:{width:0,height:0},timeStamp:0};function ed(e){let t=e.currentTarget;null!==t&&(ec={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let eu=(0,F.e)(er),eh=(0,P.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,Y.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,Y.a)({}),updateSvgMatrix:(0,Y.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:i}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-i.x,-i.y)}(t)}}),updateGeoMatrix:(0,Y.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(d.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,Y.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,i=Math.max(n.width,n.height)/2*r,o=Math.round(Math.log10(i)),a=(t=i/Math.pow(10,o-1),q.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,Y.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:er,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:E,distanceRadius:{svg:0,client:0},geoRange:{start:E,end:E},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,Y.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return eu.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,Z.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,Y.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,Y.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,Y.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,Y.a)({animation:e=>{var t,n,r;let{event:{animation:i}}=e;return null===i?"":(t=i.from,n=i.to,r=i.origin,`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===r?"left top":`${r.x}px ${r.y}px`};
    transform: ${t.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===r?"left top":`${r.x}px ${r.y}px`};
    transform: ${n.toString()} translate3d(0px, 0px, 0px);
  }
}
`)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,Y.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,Y.a)({animation:null,animating:!1}),target:"Idle"}}}}}),eg=(0,Z.c)(eh,{systemId:"system-viewer1"});function ep(e){eg.send(e)}function em(e){return(0,W.d4)(eg,t=>e(t.context))}function ex(){ep({type:"STYLE.SCROLL",currentScroll:ec})}function ef(){return em(e=>e.layout.container)}function ey(){return em(e=>e.distanceRadius)}function ev(e){let t=em(e=>e.animating);(0,s.useEffect)(()=>{null!==e.current&&(t?(e.current.classList.add("zooming"),e.current.classList.remove("not-zooming")):(e.current.classList.remove("zooming"),e.current.classList.add("not-zooming")))},[e,t])}let ew=`
position: absolute;
left: 0;
top: 0;
`,ej=`
position: absolute;
right: 0;
top: 0;
`,eE=`
position: absolute;
left: 0;
bottom: 0;
`,eS=`
position: absolute;
right: 0;
bottom: 0;
`,eb=`
margin: 0;
`,eO=`
padding: 0;
`,eM=`
${eb} ${eO}
`,ek=`
box-sizing: border-box;
`,eN=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eT=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,e$=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eD=`
-webkit-user-select: none;
user-select: none;
`,eL=`
touch-action: none;
`,eC=`
pointer-events: none;
`,eR=`
pointer-events: initial;
`,eA=`
background-color: rgba(255, 255, 255, 0.5);
`,eI=`
cubic-bezier(0, 0, 0, 1)
`,ez=`
cubic-bezier(1, 0, 1, 1)
`,eH=`
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
`,eU={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var eW=n(4319);let eF={init:new Set,rendered:new Set},eP=function(e){_(eF.init,e)},eY=function(){V(eF.rendered)},eZ=(0,F.e)(0),eq=(0,P.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,Y.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,Y.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eZ.set(t.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,Y.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eZ.set(t.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,eW.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,eW.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,Y.a)({prevFidx:null}),target:"Idle"}}}}}),eV=(0,Z.c)(eq);eV.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,_(eU.lock,t)});let e_=new Worker(new URL(n.p+n.u(760),n.b),Object.assign({},{type:"module"},{type:void 0}));function eB(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,W.d4)(eV,t=>e(t.context))),i=(0,s.useMemo)(()=>(function(e,t,n){let r=d.floorsConfig;if(void 0===r)return null;let i=r.floors.map((r,i)=>{var o,a,l,s,c,d,u;return o=e,a=t,l=n,(s=i)!=o||l?s===a?(c=s,`
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
${eH}
`})(t,n,void 0===r.get(t)),[t,n,r]),o=(0,s.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,_(eU.selectDone,n))},[t]),a=(0,s.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,_(eU.lock,r))},[t,n]);return{fidx:t,prevFidx:n,style:i,fidxToOnAnimationEnd:o,fidxToOnClick:a,urls:r}}e_.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;eV.send({type:"IMAGE",fidx:e,blob:n})}}},e_.onerror=e=>{console.error("floors error",e)},e_.onmessageerror=e=>{console.error("floors messageerror",e)};var eX=n(1642),eG=n(3772);let eK=`
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
`;function eJ(){let e=em(e=>e.rendered);(0,s.useEffect)(()=>{requestAnimationFrame(()=>eY())},[e]);let t=em(e=>e.shown),n=em(e=>e.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${eI};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",r=em(e=>e.layout.scroll),i=`
.content {
  width: ${H(r.width)}px;
  height: ${H(r.height)}px;
}
`;return(0,h.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,i]})}let eQ=new Map;function e0(e,t,n){(0,s.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:eQ.get(n)??null;if(null===r)return;let i=r.querySelector(`#${e}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});eQ.set(e,o),(0,eG.createRoot)(o).render(t)})(e,t,n),[e,n,t])}let e1={bus:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,h.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,h.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,h.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,h.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,h.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,h.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,h.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,h.jsx)("use",{x:"8.5",href:"#_person2"}),(0,h.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,h.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,h.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,children:[(0,h.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,h.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,h.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,h.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,h.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,h.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,h.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,h.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,h.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,children:[(0,h.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,h.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,h.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,h.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,h.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,h.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,h.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,h.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,h.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,h.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,h.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,h.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,h.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,h.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,h.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,h.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,h.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,h.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,h.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,h.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function e5(){return(0,h.jsx)("g",{className:"assets",children:(0,h.jsx)(e2,{})})}function e2(){return(0,h.jsx)("g",{className:"symbols",children:Object.entries(e1).map((e,t)=>{let[n,r]=e;return(0,h.jsx)(s.Fragment,{children:r({id:n})},t)})})}function e3(e){return e>.5?-1:+(e<.5)}function e4(e){return e<.3?1:e>.7?-1:0}function e6(e){return{open:e,animating:!1}}function e7(e){return e.open||e.animating?null:{open:!0,animating:!0}}function e8(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function e9(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function te(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function tt(e){let{open:t,animating:n}=e;return t||n}let tn={start:new Set,end:new Set,endDone:new Set},tr={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ti={p:E,psvg:E,fidx:0,layout:J,info:{title:""}};function to(e){return function(t,n){let r=t[n],i=e(r);return t[n]=null===i?r:i,t}}let ta=(0,P.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return tt(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return tt(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,Y.a)({canceling:()=>!0}),endCancel:(0,Y.a)({canceling:()=>!1}),open:(0,Y.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return to(e7)(n,r)}}),close:(0,Y.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return to(e9)(n,r)}}),handle:(0,Y.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return to(n[r].open?e8:te)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:ti,m:{header:e6(!0),detail:e6(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,Y.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:i}}=e;return{psvg:t,p:ee(i).transformPoint(t),fidx:n,info:r,layout:i}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,Z.n)("animationEnded")},{actions:(0,Y.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,Z.n)("isDetailVisible")},{actions:(0,Y.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,Z.n)("animationEnded")},{actions:(0,Y.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,Z.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,Y.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,eW.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,Y.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,Z.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,Y.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,Z.r)({type:"DONE"})]}}}}}),tl=(0,Z.c)(ta);function ts(){return(0,W.d4)(tl,e=>e.context)}function tc(e){tu(e,ts().m.header)}function td(e){tu(e,ts().m.detail)}function tu(e,t){let{open:n,animating:r}=t;(0,s.useEffect)(()=>{if(null===e.current)return;let t=e.current;t.classList.remove(r?"not-animating":"animating"),t.classList.add(r?"animating":"not-animating"),t.classList.remove(n?"closed":"opened"),t.classList.add(n?"opened":"closed")},[r,n,e])}function th(e,t,n,r){let i={x:t/2,y:n/2},o=t/20,a=o/2;function l(t){var n;let r,i;return n={x:e.h,y:e.v},r=t.x*n.x,i=t.y*n.y,{...t,x:r,y:i}}let s=e.th<Math.PI/4,c=0===e.v,d=0===e.h,u=l(S(i,-1)),h=l(c||d?j(S(i,-1),{x:r,y:r}):j(S(i,-1),{x:s?r:0,y:s?0:r})),[g,p]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],m=w(u,g),x=w(u,p);return{p:u,q:h,a:m,b:x}}tl.on("CLOSE.DONE",()=>V(tr.closeDone));let tg=`
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
    --timing: ${eI};
  }
  &.closed {
    --timing: ${ez};
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
`;function tp(e,t,n,r,i){let{open:o,animating:a}=ts().m.detail;(0,s.useEffect)(()=>{if(null===e.current)return;let l=e.current,s=(e,t)=>l.style.setProperty(e,null===t?null:String(t));if(null===t||null===n||!tt({open:o,animating:a}))return void s("visibility","hidden");let{width:c,height:d}=r,u=S(i.q,-1);if(s("visibility",null),s("--pww",`${-c/2}px`),s("--phh",`${-d/2}px`),a){let{a:e,b:n}=o?{a:0,b:1}:{a:1,b:0},r=o?eI:ez,i=o?{a:E,b:u}:{a:u,b:E},a={a:w(t,i.a),b:w(t,i.b)};s("--a",e),s("--b",n),s("--timing",`${r}`),s("--tx-a-x",`${a.a.x}px`),s("--tx-a-y",`${a.a.y}px`),s("--tx-b-x",`${a.b.x}px`),s("--tx-b-y",`${a.b.y}px`);return}{let{b:e}={a:0,b:1},n=w(t,u);s("--a",null),s("--b",e),s("--timing",null),s("--tx-a-x",null),s("--tx-a-y",null),s("--tx-b-x",`${n.x}px`),s("--tx-b-y",`${n.y}px`);return}},[t,n,a,i.q,o,e,r])}function tm(e){let t=(0,s.useRef)(null);return td(t),tp(t,e._p,e._hv,e._size,e._leg),(0,h.jsxs)("div",{ref:t,className:"balloon",children:[(0,h.jsx)(tf,{...e}),e.children,(0,h.jsx)("style",{children:tx})]})}let tx=`
.balloon,
.balloon-svg {
  ${ew}
  ${eC}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tf(e){let t=e._hv;return null===t?(0,h.jsx)("svg",{}):(0,h.jsx)(ty,{...e,hv:t})}function ty(e){let{viewBox:t,width:n,height:r,fg:i,bg:o}=(0,s.useMemo)(()=>(function(e,t){let{bw:n,bh:r,lh:i,d:o,width:a,height:l}=t,s=b(-a/2,-a/2,a,l),{body:c,leg:d}=function(e,t,n,r){let i={x:t/2,y:n/2},o=`
m${-i.x},${-i.y}
h${t}
v${n}
h${-t}
z
`,{p:a,q:l,a:s,b:c}=th(e,t,n,r),d=j(l,s),u=j(c,l),h=j(a,c);return{body:o,leg:`
m${s.x},${s.y}
l${d.x},${d.y}
l${u.x},${u.y}
l${h.x},${h.y}
z
`}}(e,n,r,i);function u(e){return`M${e},${e} ${c} M${e},${e} ${d}`}return{viewBox:s,width:a,height:l,bg:u(o),fg:u(0)}})(e.hv,e._size),[e._size,e.hv]);return(0,h.jsxs)("svg",{className:"balloon-svg",viewBox:$(t),width:n,height:r,children:[(0,h.jsx)("path",{className:"bg",d:o}),(0,h.jsx)("path",{className:"fg",d:i}),(0,h.jsx)("style",{children:tv})]})}let tv=`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`,tw={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},tj=()=>V(tw.zoomIn),tE=()=>V(tw.zoomOut),tS=()=>V(tw.rotate),tb=()=>V(tw.reset),tO=()=>V(tw.recenter),tM={multiStart:new Set,multiEnd:new Set,zoom:new Set},tk=(0,F.e)("panning");tk.subscribe(e=>{let t;return t=e,_(X.mode,t)});let tN=(0,P.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>d.isMapRendered(),isUiRendered:()=>d.isUiRendered()},actions:{setRendered:(0,Y.a)({rendered:!0}),emitGetScroll:(0,eW.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,eW.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,eW.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,Y.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,i={type:"zoom",z:n,p:r??k(e.layout.container)};return{...e,animationReq:i}}(n,t)}),prepareHome:(0,Y.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,Y.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:k(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,Y.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,Y.a)(e=>{var t,n,r,i,o,a,l,s,c,u,h,g,p;let m,x,f,y,v,w,j,E,S,b,O,M,{context:N}=e;return t=N.animationReq,n=N.layout,b=null===t?null:"zoom"===t.type?(r=n,i=t.z,o=t.p,m=ee(r).inverse().transformPoint(o),x=1/(a=i,Math.pow(d.zoomFactor,a)),f=K().scale(1/x,1/x),{type:"Zoom",svg:z(r.svg,x,m.x,m.y),svgScale:r.svgScale*x,q:{from:K(),to:f,origin:o}}):"home"===t.type?(l=n,y=k((s=function(e){let{config:t,content:n}=e;return{config:t,...Q(t),content:n}}(n)).config.inner),v=ee(l).transformPoint(y),w=s.svgScale/l.svgScale,E=(function(e,t){if(e instanceof DOMMatrixReadOnly)return K(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return K(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((j=k(l.container)).x-v.x,j.y-v.y).multiply((c=1/w,u=1/w,h=v.x,g=v.y,K().scale(c,u,1,h,g,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:K(),to:E,origin:null}}):(p=t.p,S=K().rotate(90),{type:"Rotate",deg:90,q:{from:K(),to:S,origin:p}}),O=N.layout,M=function(e,t){var n,r,i;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:T(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,i=t.svgScale,{...e,svg:r,svgScale:i}):ea(e,t.deg)}(N.layout,b),{...N,animation:b,prevLayout:O,layout:M}}),endZoom:(0,Y.a)(e=>{var t,n;let r,i,{context:o}=e;return r=o.zoom*(null===(t=o.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),i=o.rotate+(null===(n=o.animationReq)||"rotate"!==n.type?0:n.deg),{...o,prevLayout:null,animation:null,zoom:r,rotate:i}}),endHome:(0,Y.a)(e=>{let t,n,{context:r}=e;return t=k(r.origLayout.container),n=ea(ei(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,eW.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,eW.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,Y.a)(e=>{let t,{context:n}=e;return t=k(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,Y.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:ei(n,9)}}(n,t)}),resetScroll:(0,Y.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=ec,n=el(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,eW.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,Y.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,eW.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=ec;return{type:"SEARCH.START",req:{psvg:ee(el(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,eW.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=ec,i=el(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:i}}}(n,t)}),emitSwitch:(0,eW.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,eW.a)({type:"SWITCH.DONE"})}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:er,prevLayout:null,layout:er,cursor:k(er.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,Z.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{actions:"prepareHome",target:"Zooming"},ROTATE:{actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:"clearAnimation",type:"final"}}}}}),tT=(0,Z.c)(tN,{systemId:"system-viewer1"});function t$(e){tT.send(e)}tT.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,_(tn.start,t)}),tT.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tT.send({type:"SEARCH.DONE"}):(t=r,_(tn.endDone,t),n=r.psvg,_(tr.open,n))}),tT.on("ZOOM.START",e=>{let t;return t=e,_(X.zoomStart,t)}),tT.on("ZOOM.END",e=>{let t;return t=e,_(X.zoomEnd,t)}),tT.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,_(eU.select,t)}),tT.on("SWITCH.DONE",()=>V(eU.unlock)),tT.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},_(X.layout,t)}),tT.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,_(B.sync,t)}),tT.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,_(B.syncSync,t)}),tT.on("SCROLL.GET",()=>V(B.get));let tD=!1,tL=!1;function tC(e){tD="locked"===e,tL="locked"===e}function tR(e){(0,s.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tA),()=>{t.removeEventListener("wheel",tA)}},[e])}function tA(e){let t=e.currentTarget;tL&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function tI(e){let t,n=(0,s.useRef)(null);return tR(n),td(n),tp(n,e._p,e._hv,e._size,e._leg),(0,h.jsxs)("div",{ref:n,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void tl.send(e)},children:[d.renderInfo&&(1!==(t=Object.values(e._detail.info)).length||"string"!=typeof t[0]||""!==t[0])&&d.renderInfo({info:e._detail.info}),(0,h.jsx)("style",{children:tz})]})}let tz=`
.detail {
  ${ew}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eR}
  ${ek}
  z-index: 11;
  will-change: opacity, transform;
  cursor: default;
  touch-action: pan-y;
  overscroll-behavior-x: none;
  overscroll-behavior-y: none;
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
    ${eD}
    margin: 1.5em;
    text-align: center;
  }
  p {
    ${eD}
    margin: 0.5em;
  }
  a {
    text-decoration: none;
  }
  table, tbody, th, tr, td {
  }
}

#ui-svg-defs {
  display: none;
}
`;function tH(){return e0("detail",(0,h.jsx)(tU,{}),"ui"),(0,h.jsx)("div",{id:"detail"})}function tU(){return(0,h.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,h.jsx)(tW,{}),(0,h.jsx)(tF,{})]})}function tW(){let e=ts().detail,t=(0,s.useMemo)(()=>{let t,n,r,i,o,a,l,s,c,d,u,h;return t=e.p,n=e.layout,r=function(e,t){let{x:n,y:r}=t,i=e.width/e.height,o={x:n/e.width,y:r/e.height},a=i>1?e3(o.x):e4(o.x);return{h:a,v:i>1?e4(o.y):e3(o.y),th:Math.atan2(e.height,e.width)}}(e.layout.container,t),i=n.container.width,c=50*(s=.01*Math.min(i,o=n.container.height)),d=50*s,u=10*s,h=c/100,l=th(r,(a={bw:c,bh:d,lh:u,d:h,width:c+2*u+2*h,height:d+2*u+2*h}).bw,a.bh,a.lh),{_p:t,_hv:r,_W:i,_H:o,_size:a,_leg:l}},[e]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(tm,{...t}),(0,h.jsx)(tI,{...t,_detail:e}),(0,h.jsx)("style",{children:tg})]})}function tF(){return(0,h.jsx)("svg",{id:"ui-svg-defs",children:(0,h.jsx)("defs",{children:(0,h.jsx)(e5,{})})})}function tP(){return e0("footer",(0,h.jsx)(tY,{}),"ui"),(0,h.jsx)("div",{id:"footer"})}function tY(){let e=(0,s.useRef)(null);return tc(e),(0,h.jsxs)("div",{ref:e,className:"ui-content footer",children:[(0,h.jsx)("p",{children:(0,h.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:d.copyright})}),(0,h.jsx)("style",{children:tZ})]})}let tZ=`
.footer {
  ${eE}
  ${eT}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${eD}
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
      --timing: ${eI};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${ez};
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
`;function tq(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("g",{id:"measure",children:(0,h.jsx)(tB,{})})})}function tV(){let{svg:e}=ey();return(0,h.jsxs)("div",{id:"distance",children:[(0,h.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),tK.map(t=>(0,h.jsxs)(s.Fragment,{children:[(0,h.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,h.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,h.jsx)("style",{children:(0,h.jsx)(tG,{})})]})}function t_(){let e=em(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${U(Math.abs(e.x))}`,i=`${n} ${U(Math.abs(e.y))}`;return(0,h.jsxs)("div",{id:"coordinate",children:[(0,h.jsx)("p",{id:"longitude",children:r}),(0,h.jsx)("p",{id:"latitude",children:i}),(0,h.jsx)("style",{children:(0,h.jsx)(tX,{})})]})}function tB(){let{width:e,height:t}=ef(),{client:n}=ey(),r=(0,s.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),i=(0,s.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),o=(0,s.useMemo)(()=>tK.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,h.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((e,t)=>(0,h.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function tX(){let{width:e,height:t}=ef(),n=`
#distance,
#coordinate {
  ${ew}
  width: ${e}px;
  height: ${t}px;
}
`,r=`
#longitude {
  ${eS}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-t/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${eE}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,h.jsxs)(h.Fragment,{children:[n,r,i]})}function tG(){let{width:e,height:t}=ef(),{client:n}=ey(),r=`
.distance {
  ${ew}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${e/2}px, ${t/2}px) scale(0.5);
}
`,o=tK.map(r=>`
#distance-x-${r+1} {
  transform: translate(${e/2+n*(r+1)}px, ${t/2}px) scale(0.5);
}
`),a=tK.map(r=>`
#distance-y-${r+1} {
  transform: translate(${e/2}px, ${t/2+n*(r+1)}px) scale(0.5);
}
`);return(0,h.jsxs)(h.Fragment,{children:[i,r,o,a]})}let tK=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function tJ(){return e0("guides",(0,h.jsx)(t0,{}),"ui"),(0,h.jsx)("div",{id:"guides"})}let tQ=(d.uiConfig?.showGuides??!0)&&!d.mapCoord.matrix.isIdentity;function t0(){let e=(0,s.useRef)(null);return tc(e),tQ?(0,h.jsxs)("div",{ref:e,className:"ui-content guides",children:[(0,h.jsx)("svg",{className:"guides",children:(0,h.jsx)(tq,{})}),(0,h.jsx)(tV,{}),(0,h.jsx)(t_,{}),(0,h.jsx)("style",{children:t1})]}):(0,h.jsx)(h.Fragment,{})}let t1=`
.guides {
  ${ew}
  ${eN}
  ${eC}
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
      --timing: ${eI};
    }
    &.closed {
      --oa: 1;
      --ob: 0;
      --timing: ${ez};
    }
    --duration: 300ms;
    animation: xxx-measure var(--duration) var(--timing);
    will-change: opacity;
  }
}

text {
  ${eD}
}

@keyframes xxx-measure {
  from {
    opacity: var(--oa);
  }
  to {
    opacity: var(--ob);
  }
}
`;function t5(){let{fidx:e,fidxToOnClick:t}=eB(),n=d.floorsConfig;return void 0===n||n.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"floors",children:[(0,h.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:i}=n;return(0,h.jsx)("li",{className:`floor-item ${t6(r===e)}`,onClick:t(r),children:i},r)})}),(0,h.jsx)("style",{children:t2})]})}let t2=`
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
  ${eA}
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
`;function t3(){let{fidx:e}=eB(),t=d.floorsConfig;return void 0===t||t.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{children:[t.floors.map((t,n)=>(0,h.jsx)("h2",{className:`floor-name ${t6(n===e)}`,children:t.name},n)),(0,h.jsx)("style",{children:t4})]})}let t4=`
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
`;function t6(e){return e?"selected":"unselected"}function t7(){return e0("header",(0,h.jsx)(t8,{}),"ui"),(0,h.jsx)("div",{id:"header"})}function t8(){let e=(0,s.useRef)(null);return tc(e),(0,h.jsxs)("div",{ref:e,className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void tl.send(e)},children:[(0,h.jsx)("h1",{className:"title",onClick:()=>tb(),children:d.title}),(0,h.jsx)(t3,{}),(0,h.jsx)("style",{children:t9})]})}let t9=`
.header {
  ${ew}
  ${eT}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
  h1,
  h2,
  p {
    ${eD}
    ${eR}
  }
  h1,
  h2 {
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
    will-change: none;
    animation: none;
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
    opacity: var(--b);
  }
  &.animating {
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${eI};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${ez};
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
`;function ne(){return e0("left",(0,h.jsx)(nt,{}),"ui"),(0,h.jsx)("div",{id:"left"})}function nt(){let e=(0,s.useRef)(null);return tc(e),(0,h.jsxs)("div",{ref:e,className:"ui-content left bottom",children:[(0,h.jsx)(t5,{}),(0,h.jsx)("style",{children:nn})]})}let nn=`
.left {
  ${ew}
  ${e$}
  padding: 0.4em;
  font-size: smaller;
  ${eC}
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
      --timing: ${eI};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${ez};
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
`;function nr(){return(0,h.jsx)("div",{className:"button-item fullscreen",onClick:()=>V(tw.fullscreen),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ni})})})}let ni=`
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
`;function no(){return(0,h.jsx)("div",{className:"button-item home",onClick:()=>tb(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:na})})})}let na=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nl(){return d.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("div",{className:"button-item position",onClick:()=>V(tw.position),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nd})})})}let ns=3*Math.sqrt(2),nc=ns+6,nd=`
M 0,0
m 0,${nc/2}
l -3,-3
a ${ns},${ns} 0,1,1 6,0
z
m 0,${-nc+ns+ns/2}
a ${ns/2},${ns/2} 0,1,0 0,${-ns}
a ${ns/2},${ns/2} 0,1,0 0,${ns}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function nu(){return(0,h.jsx)("div",{className:"button-item recenter",onClick:()=>tO(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nh})})})}let nh=`
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
`;function ng(){return(0,h.jsx)("div",{className:"button-item rotate",onClick:()=>tS(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:np})})})}let np=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nm(){return(0,h.jsx)("div",{className:"button-item zoom-in",onClick:()=>tj(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nx})})})}let nx=`
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
`;function nf(){return(0,h.jsx)("div",{className:"button-item zoom-out",onClick:()=>tE(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ny})})})}let ny=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nv(){return e0("right",(0,h.jsx)(nw,{}),"ui"),(0,h.jsx)("div",{id:"right"})}function nw(){let e=(0,s.useRef)(null);return tc(e),(0,h.jsxs)("div",{ref:e,className:"ui-content right bottom",children:[(0,h.jsx)(nE,{}),(0,h.jsx)("style",{children:nj})]})}let nj=`
.right {
  ${ej}
  ${e$}
  padding: 0.4em;
  font-size: smaller;
  ${eC}

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
      --timing: ${eI};
    }
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${ez};
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
`;function nE(){return(0,h.jsxs)("div",{className:"button",children:[(0,h.jsx)(nl,{}),(0,h.jsx)(no,{}),(0,h.jsx)(nr,{}),(0,h.jsx)(nu,{}),(0,h.jsx)(ng,{}),(0,h.jsx)(nf,{}),(0,h.jsx)(nm,{}),(0,h.jsx)("style",{children:nS})]})}let nS=`
.button {
  font-size: large;
  margin: 0;
  ${eT}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${eR}
  cursor: default;
  ${eA}
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
`;function nb(){return e0("screen",(0,h.jsx)(nO,{}),"ui"),(0,h.jsx)("div",{id:"screen"})}function nO(){let e=(0,s.useRef)(null);return td(e),ev(e),tR(e),(0,h.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>V(tr.close),children:(0,h.jsx)("style",{children:nM})})}let nM=`
.screen {
  ${ew}
  ${eN}
  background-color: none;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
  &.not-animating {
    &.opened {
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
      --timing: ${eI};
    }
    &.closed {
      --a: 0.3;
      --b: 0;
      --timing: ${ez};
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
`;function nk(){return e0("ui",(0,h.jsx)(nN,{})),(0,h.jsx)("div",{id:"ui"})}function nN(){return(0,h.jsxs)("div",{className:"ui",children:[(0,h.jsx)(nb,{}),(0,h.jsx)(t7,{}),(0,h.jsx)(tP,{}),(0,h.jsx)(ne,{}),(0,h.jsx)(nv,{}),(0,h.jsx)(tJ,{}),(0,h.jsx)(tH,{})]})}function nT(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function n$(){tO()}var nD=n(8077),nL=n(990),nC=n(4465),nR=n(5909);let nA=(e,t)=>(function e(t,n,r){let i=Math.min(t.length,n.length),o=t[r],l=n[r];if(r>=i||o===a||l===a)return nD.pH(t.length,n.length);let s=nD.pH(o.x,l.x)||nD.pH(o.y,l.y);return 0===s?e(t,n,r+1):s})(e,t,0);function nI(e){return(0,f.Fs)(e.values(),nL.Ts,nL.di(nA),nL.x1(e=>0===e.length?nR.xT:nR.Py(e[0])))}function nz(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:S(t,1/e.length)}function nH(e){return new Map((0,f.Fs)(e.changedTouches,e=>nL.O3.from(e),nL.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let nU=(0,P.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,Y.a)({touches:e=>{var t,n,r;let i,o,l,s,c,d,u,h,g,{context:{touches:p},event:m}=e;return"TOUCH.START"===m.type?(t=m.ev,n=p.vecs,r=nH(t),l=nz(o=nI(i=(0,f.Fs)([...n.entries(),...r.entries()],nL.TS(new Map,(e,t)=>{let[n,r]=t,i=nC.fromUndefinedOr(e.get(n)),o=nC.isSome(i)?[...i.value,...r]:r;return new Map(e).set(n,o)})))),c=2!==o.length?null:.5>Math.abs((s=j(o[0],o[1])).y/s.x),{...p,vecs:i,points:o,cursor:l,horizontal:c}):"TOUCH.MOVE"===m.type?function(e,t){var n,r,i,o;let l,s=nH(t),c=new Map((0,f.Fs)(e.vecs.entries(),nL.Ts,nL.Tj(e=>{let t,[n,r]=e;return[n,(t=nC.fromUndefinedOr(s.get(n)),nC.isSome(t)?[...t.value,...r]:r)]}))),d=nI(c),u=nz(d),[h,g]=d;if(null===u||h===a||g===a)return{...e,vecs:c,points:d,cursor:u};let p=(n=e.dists,r=Math.sqrt((i=h,o=g,Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2))),l=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||l>0?[r,...n]:n),m=function(e){let[t,n,r,i]=e;return t===a||n===a||r===a||i===a?null:t<n&&n<r&&r<i?-1:t>n&&n>r&&r>i?1:null}(p);return{vecs:c,points:d,cursor:u,dists:p,z:m,horizontal:e.horizontal}}(p,m.ev):"TOUCH.END"===m.type?(d=nH(m.ev),g=nz(h=nI(u=new Map((0,f.Fs)(p.vecs.entries(),nL.Ts,nL.x1(e=>{let[t,n]=e;return d.has(t)?nR.xT:nR.Py([t,n])}))))),{vecs:u,points:h,cursor:g,dists:0===u.size?[]:p.dists,z:0===u.size?null:p.z,horizontal:p.horizontal}):p}}),raiseOp:(0,Z.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,Y.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,Y.a)({mode:"pan"}),enterPinch:(0,Y.a)({mode:"pinch"}),emitMulti:(0,eW.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,eW.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,Z.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,Z.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,Z.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),nW=(0,Z.c)(nU),nF=!1;function nP(e){nW.send({type:"TOUCH.START",ev:e})}function nY(e){nW.send({type:"TOUCH.MOVE",ev:e})}function nZ(e){nW.send({type:"TOUCH.END",ev:e})}function nq(){nW.send({type:"CANCEL"})}function nV(e){tD||t$({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n_(e){let t;null!==e&&(t=e,_(B.eventTick,t))}function nB(e){let t=(0,s.useRef)(null);return td(t),ev(t),(0,h.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:nP,onTouchMove:nY,onTouchEnd:nZ,onClick:nV,onContextMenu:n$,onScroll:n_,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),t$(t),V(X.animationEnd)},children:[e.children,(0,h.jsx)(nX,{})]})}function nX(){let e=`
.container {
  ${ew}
  ${eN}

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
      --timing: ${eI};
    }
    &.closed {
      --a: 0.5;
      --b: 1;
      --timing: ${ez};
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
`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("style",{children:e}),(0,h.jsx)(nG,{}),(0,h.jsx)(nK,{}),(0,h.jsx)(nJ,{})]})}function nG(){let e=em(e=>e.layout.content),t=`
.content {
  ${ew}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,h.jsx)("style",{children:t})}function nK(){let e=em(e=>e.animation);return(0,h.jsx)("style",{children:e})}function nJ(){let{style:e}=eB();return null===e?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("style",{children:e})}function nQ(){return null!==document.querySelector(".container")}nW.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(nF=!0,V(tM.multiStart)):(V(tM.multiEnd),nF=!1)}),nW.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,i=n.z;null!==r&&null!==i&&(t={z:i>0?1:-1,p:r},_(tM.zoom,t))});var n0=n(1586);async function n1(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let n5=(0,P.mj)({types:{events:{},emitted:{}},actors:{api:(0,n0.Sx)(()=>n1(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,Y.a)({position:e=>{let{event:t}=e;return t.output}}),(0,eW.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,Y.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),n2=(0,Z.c)(n5),n3=(0,P.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,eW.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eW.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),n4=(0,Z.c)(n3);function n6(e){n4.send(e)}n4.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=d.mapCoord.matrix.inverse().transformPoint(t),r=eZ.get();n7.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),n4.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,_(tn.end,t)});let n7=new Worker(new URL(n.p+n.u(502),n.b),Object.assign({},{type:"module"},{type:void 0}));n7.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":n6({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=t.res,null===(r=d.getSearchInfo(n,d.mapMap,d.osmSearchEntries))?(console.log("info not found!",n),n6({type:"SEARCH.DONE",res:null})):n6({type:"SEARCH.DONE",res:{psvg:d.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",t.error),n6({type:"SEARCH.DONE",res:null})}},n7.onerror=e=>{console.error("search error",e)},n7.onmessageerror=e=>{console.error("search messageerror",e)};var n8=n(5318);let n9=Math.round,re=document.createElement("div"),rt=e=>{re.style.color=e,document.body.appendChild(re);let t=getComputedStyle(re).color;return document.body.removeChild(re),t},rn=()=>d.cartoConfig?.backgroundColor??d.backgroundColor??"darkgray",rr=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:rn()});rr.parentNode||document.head.appendChild(rr);let ri=new Map;function ro(e){let t={color:rr.getAttribute("content")||rt(rn())},{p:n,q:r}=(()=>{var e;let t=rt(rn()),n=ri.get(t);if(n)return{p:t,q:n};let r=function(e){let{r:t,g:n,b:r}=e;return`rgb(${n9(t)}, ${n9(n)}, ${n9(r)})`}({r:(e=function(e){let t=e.match(/\d+/g);if(!t||3!==t.length)throw Error("invalid color!");let n=Number(t[0]);return{r:n,g:Number(t[1]),b:Number(t[2])}}(t)).r/2,g:e.g/2,b:e.b/2});return ri.set(t,r),{p:t,q:r}})(),i=e?r:n;(0,n8.i)(t,{color:i,duration:400,ease:"outQuad",onRender:()=>rr.setAttribute("content",t.color)}),(0,n8.i)(document.body,{backgroundColor:i,duration:400,ease:"outQuad"}),(0,n8.i)(".container",{opacity:e?.5:1,duration:400,ease:"outQuad"})}function ra(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let rl=(0,P.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ra(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,eW.a)({type:"RESET"}),recenter:(0,eW.a)({type:"RECENTER"}),rotate:(0,eW.a)({type:"ROTATE"}),zoom:(0,eW.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,eW.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,eW.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,Y.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||i}})(t.mod,n.key)}}),handleUp:(0,Y.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&i}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ra(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),rs=(0,Z.c)(rl);rs.on("RESET",tb),rs.on("RECENTER",tO),rs.on("ROTATE",tS),rs.on("ZOOM.IN",tj),rs.on("ZOOM.OUT",tE),rs.on("FLOOR.LEVEL.UP",()=>V(eU.levelUp)),rs.on("FLOOR.LEVEL.DOWN",()=>V(eU.levelDown));let rc=(0,P.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:O,next:O,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,Y.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,Z.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!M(t.prev,t.next)},actions:[(0,Y.a)({waited:0}),(0,eW.a)(e=>{var t,n,r,i;let o,a,{context:l}=e;return{type:"LAYOUT",layout:(t=d.fontSize,n=l.next,o=k((i={config:r=function(e,t,n,r){var i;let o,a,l,s,{outer:c,scale:d}=(i=r??n,o=t.width/t.height,s=(l=o>(a=i.width/i.height))?et(t,a):en(t,a),{outer:s,inner:l?et(i,o):en(i,o),scale:l?i.height/t.height:i.width/t.width,rO:o,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,d.origViewBox,d.origBoundingBox),...Q(r)}).scroll),a=i.container.width/i.container.height,eo(i,a<1?1/a:1,a<1?1:+a,o)),force:!l.first}}),(0,Y.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,Y.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,Z.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return M(t,eu.get().container)},actions:(0,Y.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rd=(0,Z.c)(rc);rd.on("LAYOUT",e=>{let t;return t=e,_(X.resize,t)}),window.addEventListener("resize",()=>{rd.send({type:"RESIZE"})});let ru=(0,P.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,Y.a)({ticked:!1}),set:(0,Y.a)({ticked:!0}),expire:(0,eW.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),rh=(0,P.mj)({types:{},actions:{getScroll:(0,Y.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,i=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),b(t,n,r,i)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return es(n)}},actors:{syncScrollLogic:(0,n0.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!es(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,eW.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,Y.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,eW.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,Y.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rg=(0,Z.c)(rh,{systemId:"system-scroll1"});function rp(e){rg.send(e)}rg.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,_(B.getDone,t)}),rg.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,_(B.syncSyncDone,t)});let rm=(l=()=>V(B.eventExpire),i=ru.provide({delays:{DURATION:500}}),(o=(0,Z.c)(i)).on("EXPIRE",l),o.start(),{tick:function(){o.send({type:"TICK"})}}),rx=(0,F.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function rf(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),rx.trigger.set({names:t}))}async function ry(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rv=`
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
  ${ew}
  ${eN}
  ${eM}
  ${ek}
  ${eL}
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
`,rw=function(){let e=d.cartoConfig?.backgroundColor??d.backgroundColor??"darkgray",t={data:d,render:d,carto:d.cartoConfig,floors:d.floorsConfig};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(nB,{...t,children:d.renderMap(t)}),(0,h.jsx)(nk,{}),(0,h.jsxs)("style",{children:[rv,`body { background-color: ${e}; }`]})]})};function rj(e){let{origViewBox:t,url:n}=e;return(0,h.jsx)("image",{href:n,x:t.x,y:t.y,width:t.width,height:t.height})}function rE(e){let{origViewBox:t,url:n,labels:r}=e;return void 0===r?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("svg",{href:n,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:$(t),children:[(0,h.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),r.map((e,t)=>(0,h.jsxs)("text",{...rO(e.attrs),children:["id"in e.attrs&&"style"in e.attrs&&(0,h.jsx)("style",{children:`#${e.attrs.id} { ${e.attrs.style}; }`}),e.children&&e.children.map((e,t)=>(0,h.jsx)("tspan",{...rO(e.attrs),children:e.text??""},t))]},t))]})}let rS=/^[{].*$/,rb=/^style$/;function rO(e){return Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!t.match(rS)&&!t.match(rb)}).map(e=>{var t;let[n,r]=e;return[!(t=n).match(/^.*-.*$/)||t.match(/^(aria|data)-.*$/)?t:t.split("-").map((e,t)=>{var n;let r;return 0===t?e:(r=(n=e).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}var rM=JSON.parse('{"Main":{"contentId":"g3"}}');let rk={},rN=Object.keys(rM).map(e=>({name:e,href:n(4303)(`./floor-${e}.svg`),labels:rk?.[e]??void 0})),rT=[...Object.entries(JSON.parse('{"AMain-Content-(ViewBox)":{"x":0,"y":0}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})];function r$(e){let[t,n]=e;return n.map(e=>[t,e])}function rD(e){return e.reduce(function(e,t){let[n,r]=t,i=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,i]])},new Map)}let rL=Object.values({Main:{}}).flatMap(function(e){return Object.entries(e)});rD(Array.from(rL).flatMap(r$));let rC=rD(Array.from(rL).flatMap(r$).map(e=>{let[t,n]=e;return[n,t]}));var rR=JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}');!function(e){let t;eF.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;eV.send({type:"INIT",nfloors:t,fidx:n}),e_.postMessage({type:"INIT",cfg:e.floorsConfig})}}),eU.select.add(e=>eV.send({type:"SELECT",fidx:e})),eU.levelUp.add(()=>eV.send({type:"LEVEL.UP"})),eU.levelDown.add(()=>eV.send({type:"LEVEL.DOWN"})),eU.selectDone.add(e=>eV.send({type:"SELECT.DONE",fidx:e})),tw.fullscreen.add(ry),eF.init.add(rf),tw.position.add(()=>{var e;return e={type:"GET"},void n2.send(e)}),B.eventTick.add(ed),B.eventTick.add(rm.tick),B.get.add(()=>rp({type:"GET"})),B.sync.add(e=>rp({type:"SYNC",pos:e})),B.syncSync.add(e=>rp({type:"SYNCSYNC",pos:e})),eF.init.add(e=>{if(e.getSearchEntries){let t=e.getSearchEntries(e);n7.postMessage({type:"INIT",entries:t})}}),tn.start.add(function(e){n4.send({type:"SEARCH",req:e})}),X.layout.add(function(e){let{layout:t,force:n}=e;ep({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>ex())}),X.zoomStart.add(function(e){ep({type:"STYLE.ZOOM",...e}),ep({type:"STYLE.ANIMATION",animation:e.q})}),X.zoomEnd.add(function(e){ep({type:"STYLE.ZOOM",zoom:e.zoom}),ep({type:"STYLE.ANIMATION",animation:e.q})}),X.animationEnd.add(function(){ep({type:"STYLE.ANIMATION.END"})}),X.mode.add(function(e){ep({type:"STYLE.MODE",mode:e})}),B.eventExpire.add(ex),tw.reset.add(nq),tw.fullscreen.add(nq),tw.position.add(nq),tw.recenter.add(nq),tw.zoomOut.add(nq),tw.zoomIn.add(nq),tn.endDone.add(e=>tl.send({type:"DETAIL",...e})),tr.open.add(()=>{let e;return e=!0,_(tr.openDone,e)}),tr.openDone.add(e=>tl.send({type:e?"OPEN":"CANCEL"})),tr.close.add(()=>tl.send({type:"CANCEL"})),tr.closeDone.add(()=>{requestAnimationFrame(()=>void eQ.get("detail")?.querySelector(".detail")?.scroll(0,0))}),eU.lock.add(e=>t$({type:"SWITCH",fidx:e})),eU.selectDone.add(()=>t$({type:"SWITCH.DONE"})),tn.end.add(e=>tT.send({type:"SEARCH.END",res:e})),tr.open.add(()=>tk.set("locked")),tr.closeDone.add(()=>t$({type:"SEARCH.DONE"})),tr.closeDone.add(()=>tk.set("panning")),B.getDone.add(e=>{null!==e&&t$({type:"SCROLL.GET.DONE",scroll:e})}),B.syncSyncDone.add(e=>{null!==e&&t$({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),X.resize.add(e=>{let{layout:t,force:n}=e;return t$({type:"RESIZE",layout:t,force:n})}),X.mode.add(tC),X.zoomStart.add(()=>{tL=!0}),X.zoomEnd.add(()=>{tL=!1}),tw.reset.add(()=>t$({type:"HOME"})),tw.recenter.add(()=>t$({type:"RECENTER"})),tw.rotate.add(()=>t$({type:"ROTATE"})),tw.zoomOut.add(()=>t$({type:"ZOOM",z:-1,p:null})),tw.zoomIn.add(()=>t$({type:"ZOOM",z:1,p:null})),tM.multiStart.add(()=>V(B.get)),tM.multiStart.add(()=>tk.set("touching")),tM.multiEnd.add(()=>tk.set("panning")),tM.zoom.add(e=>{let{z:t,p:n}=e;return t$({type:"ZOOM",z:t>0?1:-1,p:n})}),eF.rendered.add(()=>t$({type:"RENDERED"})),eV.start(),rs.start(),n2.start(),rd.start(),rg.start(),n4.start(),eg.start(),tr.open.add(()=>ro(!0)),tr.close.add(()=>ro(!1)),nW.start(),tl.start(),tT.start();let n=(u({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:nQ,isUiRendered:nT,...e}),u({...d}),{...d,origViewBox:t,...e});eP(n);let r=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.3.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),r.get("info")){let e=document.getElementById(d.root);if(null===e)throw Error("#root not found!");(0,eG.createRoot)(e).render((0,h.jsx)(s.StrictMode,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"svgmapviewer"}),(0,h.jsx)("h2",{children:n.title}),(0,h.jsx)("div",{className:"info",children:(0,h.jsx)(eX.h,{className:"qrcode",marginSize:6,value:document.location.href,width:"60vmin",height:"60vmin"})}),(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,h.jsx)("style",{children:eK})]})}))}else{let e=document.getElementById(n.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||tL)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(tL){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!nF)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rs.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rs.send(t)},(0,eG.createRoot)(e).render((0,h.jsx)(s.StrictMode,{children:(0,h.jsx)(rw,{})}));let t=document.getElementById("style-root");if(null===t)throw Error("#style-root not found!");(0,eG.createRoot)(t).render((0,h.jsx)(s.StrictMode,{children:(0,h.jsx)(eJ,{})}))}}({renderMap:function(e){let{floors:t,data:{origViewBox:n}}=e,{viewBox:r,width:i,height:o}=function(){let{scroll:e,svg:t}=em(e=>e.layout);return{viewBox:$(t),width:H(e.width),height:H(e.height)}}(),{fidxToOnAnimationEnd:a,urls:l}=eB();return void 0===t?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("div",{className:"content",children:(0,h.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:i,height:o,children:t.floors.map((e,t)=>(0,h.jsx)(s.Fragment,{children:(0,h.jsxs)("g",{className:`floor fidx-${t}`,onAnimationEnd:a(t),children:[(0,h.jsx)(rj,{origViewBox:n,idx:t,url:l.get(t),onAnimationEnd:a(t),labels:e.labels}),(0,h.jsx)(rE,{origViewBox:n,idx:t,url:l.get(t),onAnimationEnd:a(t),labels:e.labels})]})},t))})})},isMapRendered:function(){return!0},...{root:"root",title:"Higashi-Tsukuba Utopia",copyright:"Map image and info @ Higashi-Tsukuba Utopia, map app @ Daiji Maps",backgroundColor:"white",origViewBox:JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}'),origBoundingBox:rR,zoomFactor:2,floorsConfig:{floors:rN,initialFidx:0},...{getSearchEntries:function(){return rT.map(e=>{let[t,n]=e;return{address:t,pos:n}})},getSearchInfo:function(e){let t=rC.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},renderInfo:function(e){return(0,h.jsx)("p",{children:e.info.title})}}}})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.m=i,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.u=e=>"static/js/async/"+e+"."+({502:"81d3a9a108",760:"4cbab458e4"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,i)=>{if(n){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[n,r,i];return}for(var l=1/0,o=0;o<e.length;o++){for(var[n,r,i]=e[o],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(o--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/HigashiTsukubaUtopia/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,i,[o,l,s]=n,c=0;if(o.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","753","980"],()=>a(6162));l=a.O(l)})();