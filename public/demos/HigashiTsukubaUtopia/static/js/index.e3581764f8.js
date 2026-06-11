(()=>{var e,t,n,r,i={4303(e,t,n){var r={"./floor-Main.svg":"1575"};function i(e){return n(o(e))}function o(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=()=>Object.keys(r),i.resolve=o,e.exports=i,i.id=4303},1575(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-Main.576377384d.svg"},5055(e,t,n){"use strict";let r,i,o,a;var l,s=n(1371);let c={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let d={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:c,internals:c,origin:c,measures:c,viewbox:c,points:c,lines:c,multilinestrings:c,multipolygons:c},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,RenderInfo:function(e){return(0,s.createElement)("p",{},e.info.title)}};function u(e){d={...d,...e}}var g=n(9099);n(2304);var h=n(215);let p=h.gPz([h.wNn,h.QfV]),m=h.O31(p);r=h._kM({ids:m}),h.mj7(r);let x=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var f=n(3024);function y(e,t,n){let[r,i,o]=e,[a,l]=t;return r*a+i*l+o*n}function v(e,t,n){return[y(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),y(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function w(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function S(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}let j={x:0,y:0};function E(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,i=e.x*n,o=e.y*r;return{...e,x:i,y:o}}function b(e,t,n,r){return{x:e,y:t,width:n,height:r}}let M={x:0,y:0,width:1,height:1};function O(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function N(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function k(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function D(e,t){return{...e,x:t.x,y:t.y}}function T(e){return function(e){let{x:t,y:n,width:r,height:i}=e;return`${t} ${n} ${r} ${i}`}(function(e,t){let{x:n,y:r,width:i,height:o}=e;return{x:t(n),y:t(r),width:t(i),height:t(o)}}(e,function(e){return Math.round(100*e)/100}))}function L(e){let{x:t,y:n,width:r,height:i}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+i}}}function R(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function $(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function C(e){let[[t,n],[r,i]]=e;return{tl:{x:t,y:n},br:{x:r,y:i}}}function A(e,t){return[v(e,function(e){let[t]=e;return t}(t),0),v(e,function(e){let[,t]=e;return t}(t),0),v(e,function(e){let[,,t]=e;return t}(t),1)]}function I(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function z(e,t,n,r){var i,o;return i=function(e,t){let[n,r]=t;return[I(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),I([-n,-r])].reduce(A)}("number"==typeof(o=t)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,f.Fs)(e,L,$,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>v(i,e,1)),C,R)}var H=n(3295),U=n(9041),P=n(3342),W=n(4700),F=n(7686);let Z=[1,2,2.5,5,10,15,20,25,30,40,50];function Y(e){Promise.all(Array.from(e,e=>Promise.resolve(e()))).catch(e=>console.log("notifyCbs0",e))}function q(e,t){Promise.all(Array.from(e,e=>Promise.resolve(e(t)))).catch(e=>console.log("notifyCbs",e))}let V={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},B={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set},_=new Map;function X(e){return void 0!==e&&"number"==typeof e}function G(e,t,n,r,i,o){return new DOMMatrixReadOnly(e instanceof Array?e:X(e)&&X(t)&&X(n)&&X(r)&&X(i)&&X(o)?[e,t,n,r,i,o]:void 0)}let K={container:M,scroll:M,content:G(),svgOffset:{x:-0,y:-0},svgScale:1,svg:M};function J(e){let{container:t,outer:n,svgScale:r,inner:i}=e,{x:o,y:a}=n;return{container:t,scroll:t,content:G(),svgOffset:{x:-o,y:-a},svgScale:r,svg:i}}function Q(e){let{scroll:t,content:n,svgOffset:r,svgScale:i,svg:o}=e;return G().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/i,1/i).translate(-o.x,-o.y)}function ee(e,t){let n=e.height,r=n*t;return b((e.width-r)/2,0,r,n)}function et(e,t){let n=e.width,r=n/t;return b(0,(e.height-r)/2,n,r)}let en={...K,config:{fontSize:16,container:M,outer:M,inner:M,svgScale:1}};function er(e,t){let n=N(e.scroll);return ei(e,t,t,n)}function ei(e,t,n,r){let i=Q(e).inverse().transformPoint(r),o=z(e.scroll,[t,n],r.x,r.y),a=E(e.svgOffset,[t,n]),l=z(e.svg,[t,n],i.x,i.y);return{...e,scroll:o,svgOffset:a,svg:l}}function eo(e,t){var n,r;let i=N({...e.scroll,x:0,y:0}),o=(n=i.x,r=i.y,G().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:o}}function ea(e,t){let n=e.scroll,r=S(E(t,-1),n);return(0,f.Fs)(e,e=>({...e,scroll:k(e.scroll,r)}),e=>{let t,r,i,o,a,l,s;return t=D(e.scroll,n),r=e.content.inverse(),o=w(i=N(e.scroll),S(e.scroll,n)),a=r.transformPoint(i),l=E(S(r.transformPoint(o),a),-e.svgScale),s=k(e.svg,l),{...e,scroll:t,svg:s}})}let el=(0,U.e)(!1),es=e=>el.set(()=>e),ec=new Map;function ed(e,t){(0,s.useEffect)(()=>{let n=e.current;return n&&ec.set(t,n),()=>{n&&ec.delete(t)}},[t,e])}function eu(e){let t=e?.from.toString(),n=e?.to.toString(),r=e?.origin===null?"left top":`${e?.origin.x}px ${e?.origin.y}px`;Array.from(ec,i=>{let[,o]=i;if(null===e)o.classList.remove("zooming");else{o.classList.add("zooming");let e=o.style.setProperty.bind(o.style);e("--zoom-transform-origin-p",r),e("--zoom-transform-origin-q",r),e("--zoom-transform-p",`${t} translate3d(0px, 0px, 0px)`),e("--zoom-transform-q",`${n} translate3d(0px, 0px, 0px)`)}})}function eg(e){return Math.round(100*e)/100}function eh(e){return Math.round(1e3*e)/1e3}function ep(e){return Math.round(1e7*e)/1e7}let em=new Map;function ex(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;if(null===n)return!1;let a=i-e.width,l=o-e.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${e.width}, ${e.height}]`),!1;let s=Math.round(-e.x),c=Math.round(-e.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==s&&(t.scrollLeft=s),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=t.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let ef={scroll:M,client:{width:0,height:0},timeStamp:0};function ey(e){let t=e.currentTarget;null!==t&&(ef={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let ev=`
position: absolute;
left: 0;
top: 0;
`,ew=`
position: absolute;
right: 0;
top: 0;
`,eS=`
position: absolute;
left: 0;
bottom: 0;
`,ej=`
position: absolute;
right: 0;
bottom: 0;
`,eE=`
margin: 0;
`,eb=`
padding: 0;
`,eM=`
${eE} ${eb}
`,eO=`
box-sizing: border-box;
`,eN=`
width: 100vw;
height: 100vh;
height: 100svh;
`,ek=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eD=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eT=`
-webkit-user-select: none;
user-select: none;
`,eL=`
touch-action: none;
`,eR=`
pointer-events: none;
`,e$=`
pointer-events: initial;
`,eC=`
background-color: rgba(255, 255, 255, 0.5);
`,eA=`
cubic-bezier(0, 0, 0, 1)
`,eI=`
cubic-bezier(1, 0, 1, 1)
`,ez=`
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
`,eH=new Map;function eU(e,t){(0,s.useEffect)(()=>{let n=e.current;return n&&eH.set(t,n),()=>{n&&eH.delete(t)}},[t,e])}function eP(e,t){Array.from(eH,n=>{let[,r]=n;e?(r.classList.add("shown"),r.classList.remove("not-shown")):(r.classList.remove("shown"),r.classList.add("not-shown")),t?(r.classList.add("appearing"),r.classList.remove("not-appearing")):(r.classList.remove("appearing"),r.classList.add("not-appearing"))})}let eW=`
.not-shown {
  opacity: 0;
}
.shown {
}
.not-appearing {
}
.appearing {
  will-change: opacity;
  animation: xxx-appearing 2s ${eA};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`,eF=(0,U.e)(en),eZ=(0,P.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,W.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,W.a)({}),updateSvgMatrix:(0,W.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:i}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-i.x,-i.y)}(t)}}),updateGeoMatrix:(0,W.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(d.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,W.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,i=Math.max(n.width,n.height)/2*r,o=Math.round(Math.log10(i)),a=(t=i/Math.pow(10,o-1),Z.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,W.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:en,zoom:1,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:j,distanceRadius:{svg:0,client:0},geoRange:{start:j,end:j},mode:"panning"},on:{"STYLE.LAYOUT":{actions:[(0,W.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return eF.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,F.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}}),e=>{var t;let n,{context:r}=e;return n=function(e){let{svgOffset:t,svgScale:n,svg:r}=e;return G().translate(-t.x,-t.y).scale(1/n,1/n).translate(-r.x,-r.y)}(t=r.layout),void Array.from(em,e=>{let[,r]=e,i=r.style.setProperty.bind(r.style);i("--layout-content-matrix",t.content.toString()),i("--layout-scroll-width",`${eg(t.scroll.width)}px`),i("--layout-scroll-height",`${eg(t.scroll.height)}px`),i("--layout-svg-to-content-matrix",n.toString())})},e=>{var t,n;let r,{context:i}=e;return t=i.layout,n=i.zoom,r=t.config.fontSize*(.5+.5*Math.log2(Math.max(1,n)))*t.svgScale,void Array.from(_,e=>{let[,t]=e;t.style.setProperty.bind(t.style)("--map-symbol-size",`${r/72}`)})}]},"STYLE.ZOOM":{actions:[{type:"updateZoom",params:e=>{let{event:t}=e;return t}}]},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,W.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",entry:e=>{let{context:t}=e;return eP(t.shown,t.appearing)},states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:[(0,W.a)({appearing:!0}),e=>{let{context:t}=e;return eP(t.shown,t.appearing)}],target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:[(0,W.a)({appearing:!1,shown:!0}),()=>eu(null),e=>{let{context:t}=e;return eP(t.shown,t.appearing)}],target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:[e=>{let{event:{animation:t}}=e;return eu(t)},(0,W.a)({animating:!0})],target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,W.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:[()=>eu(null),(0,W.a)({animating:!1})],target:"Idle"}}}}}),eY=(0,F.c)(eZ,{systemId:"system-viewer1"});function eq(e){eY.send(e)}function eV(e){return(0,H.d4)(eY,t=>e(t.context))}function eB(){eq({type:"STYLE.SCROLL",currentScroll:ef})}function e_(){return eV(e=>e.layout.container)}function eX(){return eV(e=>e.distanceRadius)}let eG={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var eK=n(1717);let eJ={init:new Set,rendered:new Set},eQ=function(e){q(eJ.init,e)},e0=function(){Y(eJ.rendered)},e1=(0,U.e)(0),e5=(0,P.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,W.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,W.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return e1.set(t.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,W.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return e1.set(t.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,eK.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,eK.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,W.a)({prevFidx:null}),target:"Idle"}}}}}),e2=(0,F.c)(e5);e2.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,q(eG.lock,t)});let e3=new Worker(new URL(n.p+n.u(103),n.b),Object.assign({},{type:"module"},{type:void 0}));e3.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;e2.send({type:"IMAGE",fidx:e,blob:n})}}},e3.onerror=e=>{console.error("floors error",e)},e3.onmessageerror=e=>{console.error("floors messageerror",e)};let e4=new Map;function e6(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,H.d4)(e2,t=>e(t.context))),i=(0,s.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,q(eG.selectDone,n))},[t]),o=(0,s.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,q(eG.lock,r))},[t,n]);return(0,s.useEffect)(()=>{Array.from(e4,e=>{let[i,o]=e,a=void 0===r.get(t),l=o.style.setProperty.bind(o.style);i!=t||a?i===n?(l("will-change","opacity"),l("animation","xxx-disappearing 250ms linear"),l("visibility",null)):(l("will-change",null),l("animation",null),l("visibility","hidden")):(l("will-change","opacity"),l("animation","xxx-appearing 250ms linear"),l("visibility",null))})},[t,n,r]),{fidx:t,prevFidx:n,fidxToOnAnimationEnd:i,fidxToOnClick:o,urls:r}}var e7=n(1642),e9=n(3772);let e8=`
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
`,te=new Map;function tt(e,t,n){(0,s.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:te.get(n)??null;if(null===r)return;let i=r.querySelector(`#${e}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});te.set(e,o),(0,e9.createRoot)(o).render(t)})(e,t,n),[e,n,t])}let tn={bus:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,g.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,g.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,g.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,g.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,g.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,g.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,g.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,g.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,g.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,g.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,g.jsx)("use",{x:"8.5",href:"#_person2"}),(0,g.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,g.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,g.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,g.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,g.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,g.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,g.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,g.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,g.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,g.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,g.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,g.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,g.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,children:[(0,g.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,g.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,g.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,g.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,g.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,g.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,g.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,g.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsxs)("g",{fill:"white",stroke:"none",children:[(0,g.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,g.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,g.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,g.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,g.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsxs)("g",{fill:"white",stroke:"none",children:[(0,g.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,g.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsxs)("g",{fill:"white",stroke:"none",children:[(0,g.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,g.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,children:[(0,g.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,g.jsxs)("g",{fill:"white",stroke:"none",children:[(0,g.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,g.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,g.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,g.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,g.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,g.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,g.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,g.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,g.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,g.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,g.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,g.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,g.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,g.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,g.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,g.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,g.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,g.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,g.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,g.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,g.jsxs)("g",{fill:"white",stroke:"none",children:[(0,g.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,g.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,g.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function tr(){return(0,g.jsx)("g",{className:"assets",children:(0,g.jsx)(ti,{})})}function ti(){return(0,g.jsx)("g",{className:"symbols",children:Object.entries(tn).map((e,t)=>{let[n,r]=e;return(0,g.jsx)(s.Fragment,{children:r({id:n})},t)})})}function to(e){return e>.5?-1:+(e<.5)}function ta(e){return e<.3?1:e>.7?-1:0}function tl(e){return{open:e,animating:!1}}function ts(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tc(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function td(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function tu(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function tg(e){let{open:t,animating:n}=e;return t||n}let th=new Map,tp=new Map;function tm(e,t,n){(0,s.useEffect)(()=>{let r=t.current;return r&&e.set(n,r),()=>{r&&e.delete(n)}},[n,t,e])}function tx(e,t){let{open:n,animating:r}=t;Array.from(e,e=>{let[,t]=e;t.classList.remove(n?"closed":"opened"),t.classList.add(n?"opened":"closed"),t.classList.remove(r?"not-animating":"animating"),t.classList.add(r?"animating":"not-animating")})}function tf(e){let t,n,r,i,o,a=e.p,l=e.layout,s=function(e,t){let{x:n,y:r}=t,i=e.width/e.height,o={x:n/e.width,y:r/e.height},a=i>1?to(o.x):ta(o.x);return{h:a,v:i>1?ta(o.y):to(o.y),th:Math.atan2(e.height,e.width)}}(e.layout.container,a),c=l.container.width,d=l.container.height,u=(n=50*(t=.01*Math.min(c,d)),r=50*t,i=10*t,o=n/100,{bw:n,bh:r,lh:i,d:o,width:n+2*i+2*o,height:r+2*i+2*o}),g=ty(s,u.bw,u.bh,u.lh);return{_p:a,_hv:s,_W:c,_H:d,_size:u,_leg:g}}function ty(e,t,n,r){let i={x:t/2,y:n/2},o=t/20,a=o/2;function l(t){var n;let r,i;return n={x:e.h,y:e.v},r=t.x*n.x,i=t.y*n.y,{...t,x:r,y:i}}let s=e.th<Math.PI/4,c=0===e.v,d=0===e.h,u=l(E(i,-1)),g=l(c||d?S(E(i,-1),{x:r,y:r}):S(E(i,-1),{x:s?r:0,y:s?0:r})),[h,p]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],m=w(u,h),x=w(u,p);return{p:u,q:g,a:m,b:x}}let tv=`
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
  &.closed {
    --timing: ${eI};
  }
  &.opened {
    --timing: ${eA};
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
`,tw=new Map;function tS(e){let t=(0,s.useRef)(null);return tm(tp,t,"balloon"),tm(tw,t,"balloon"),(0,g.jsxs)("div",{ref:t,className:"balloon",children:[(0,g.jsx)(tE,{...e}),e.children,(0,g.jsx)("style",{children:tj})]})}let tj=`
.balloon,
.balloon-svg {
  ${ev}
  ${eR}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tE(e){let t=(0,s.useMemo)(()=>tf(e._detail),[e._detail]),{viewBox:n,width:r,height:i,fg:o,bg:a}=(0,s.useMemo)(()=>null===t._hv?{viewBox:void 0,width:void 0,height:void 0,fg:void 0,bg:void 0}:function(e,t){let{bw:n,bh:r,lh:i,d:o,width:a,height:l}=t,s=b(-a/2,-a/2,a,l),{body:c,leg:d}=function(e,t,n,r){let i={x:t/2,y:n/2},o=`
m${eh(-i.x)},${eh(-i.y)}
h${eh(t)}
v${eh(n)}
h${eh(-t)}
z
`,{p:a,q:l,a:s,b:c}=ty(e,t,n,r),d=S(l,s),u=S(c,l),g=S(a,c);return{body:o,leg:`
m${eh(s.x)},${eh(s.y)}
l${eh(d.x)},${eh(d.y)}
l${eh(u.x)},${eh(u.y)}
l${eh(g.x)},${eh(g.y)}
z
`}}(e,n,r,i);function u(e){return`M${eh(e)},${eh(e)} ${c} M${eh(e)},${eh(e)} ${d}`}return{viewBox:s,width:a,height:l,bg:u(o),fg:u(0)}}(t._hv,t._size),[t._size,t._hv]);return(0,g.jsxs)("svg",{className:"balloon-svg",viewBox:n&&T(n),width:r,height:i,children:[(0,g.jsx)("path",{className:"bg",d:a}),(0,g.jsx)("path",{className:"fg",d:o}),(0,g.jsx)("style",{children:tb})]})}let tb=`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`,tM={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},tO=()=>Y(tM.zoomIn),tN=()=>Y(tM.zoomOut),tk=()=>Y(tM.rotate),tD=()=>Y(tM.reset),tT=()=>Y(tM.recenter),tL={start:new Set,end:new Set,endDone:new Set},tR={multiStart:new Set,multiEnd:new Set,zoom:new Set},t$={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},tC=(0,U.e)("panning");tC.subscribe(e=>{let t;return t=e,q(B.mode,t)});let tA=(0,P.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>d.isMapRendered(),isUiRendered:()=>d.isUiRendered()},actions:{setRendered:(0,W.a)({rendered:!0}),emitGetScroll:(0,eK.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,eK.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,eK.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,W.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,i={type:"zoom",z:n,p:r??N(e.layout.container)};return{...e,animationReq:i}}(n,t)}),prepareHome:(0,W.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,W.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:N(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,W.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,W.a)(e=>{var t,n,r,i,o,a,l,s,c,u,g,h,p;let m,x,f,y,v,w,S,j,E,b,M,O,{context:k}=e;return t=k.animationReq,n=k.layout,b=null===t?null:"zoom"===t.type?(r=n,i=t.z,o=t.p,m=Q(r).inverse().transformPoint(o),x=1/(a=i,Math.pow(d.zoomFactor,a)),f=G().scale(1/x,1/x),{type:"Zoom",svg:z(r.svg,x,m.x,m.y),svgScale:r.svgScale*x,q:{from:G(),to:f,origin:o}}):"home"===t.type?(l=n,y=N((s=function(e){let{config:t,content:n}=e;return{config:t,...J(t),content:n}}(n)).config.inner),v=Q(l).transformPoint(y),w=s.svgScale/l.svgScale,j=(function(e,t){if(e instanceof DOMMatrixReadOnly)return G(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return G(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((S=N(l.container)).x-v.x,S.y-v.y).multiply((c=1/w,u=1/w,g=v.x,h=v.y,G().scale(c,u,1,g,h,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:G(),to:j,origin:null}}):(p=t.p,E=G().rotate(90),{type:"Rotate",deg:90,q:{from:G(),to:E,origin:p}}),M=k.layout,O=function(e,t){var n,r,i;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:D(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,i=t.svgScale,{...e,svg:r,svgScale:i}):eo(e,t.deg)}(k.layout,b),{...k,animation:b,prevLayout:M,layout:O}}),endZoom:(0,W.a)(e=>{var t,n;let r,i,{context:o}=e;return r=o.zoom*(null===(t=o.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),i=o.rotate+(null===(n=o.animationReq)||"rotate"!==n.type?0:n.deg),{...o,prevLayout:null,animation:null,zoom:r,rotate:i}}),endHome:(0,W.a)(e=>{let t,n,{context:r}=e;return t=N(r.origLayout.container),n=eo(er(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,eK.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,eK.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,W.a)(e=>{let t,{context:n}=e;return t=N(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,W.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:er(n,9)}}(n,t)}),resetScroll:(0,W.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=ef,n=ea(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,eK.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,W.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,eK.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=ef;return{type:"SEARCH.START",req:{psvg:Q(ea(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,eK.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=ef,i=ea(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:i}}}(n,t)}),emitSwitch:(0,eK.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,eK.a)({type:"SWITCH.DONE"}),enterZooming:()=>es(!0),exitZooming:()=>es(!1)}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:en,prevLayout:null,layout:en,cursor:N(en.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,F.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{actions:"prepareHome",target:"Zooming"},ROTATE:{actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",entry:"enterZooming",exit:"exitZooming",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Rendering2"},{target:"Rendering2"}]},Rendering2:{after:{50:{target:"Done"}}},Done:{entry:"clearAnimation",type:"final"}}}}}),tI=(0,F.c)(tA,{systemId:"system-viewer1"});function tz(e){tI.send(e)}tI.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,q(tL.start,t)}),tI.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tI.send({type:"SEARCH.DONE"}):(t=r,q(tL.endDone,t),n=r.psvg,q(t$.open,n))}),tI.on("ZOOM.START",e=>{let t;return t=e,q(B.zoomStart,t)}),tI.on("ZOOM.END",e=>{let t;return t=e,q(B.zoomEnd,t)}),tI.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,q(eG.select,t)}),tI.on("SWITCH.DONE",()=>Y(eG.unlock)),tI.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},q(B.layout,t)}),tI.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,q(V.sync,t)}),tI.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,q(V.syncSync,t)}),tI.on("SCROLL.GET",()=>Y(V.get));let tH=!1,tU=!1;function tP(e){tH="locked"===e,tU="locked"===e}function tW(e){(0,s.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tF),()=>{t.removeEventListener("wheel",tF)}},[e])}function tF(e){let t=e.currentTarget;tU&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}let tZ={p:j,psvg:j,fidx:0,layout:K,info:{title:""}};function tY(e){return function(t,n){let r=t[n],i=e(r);return t[n]=null===i?r:i,t}}let tq=(0,P.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return tg(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return tg(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,W.a)({canceling:()=>!0}),endCancel:(0,W.a)({canceling:()=>!1}),open:(0,W.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tY(ts)(n,r)}}),close:(0,W.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tY(td)(n,r)}}),handle:(0,W.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tY(n[r].open?tc:tu)(n,r)}}),updateHeaderStyle:e=>{let{context:t}=e;tx(th,t.m.header)},updateDetailStyle:e=>{let{context:t}=e;tx(tp,t.m.detail)},updateBalloonStyle:e=>{let{context:t}=e;return function(e,t){let{_p:n,_hv:r,_size:i,_leg:o}=tf(e);Array.from(tw,e=>{let[,a]=e;!function(e,t,n,r,i,o){let{open:a,animating:l}=o,s=(t,n)=>e.style.setProperty(t,null===n?null:String(n));if(null===t||null===n||!tg({open:a,animating:l}))return s("visibility","hidden");let{width:c,height:d}=r,u=E(i.q,-1);if(s("visibility",null),s("--pww",`${eh(-c/2)}px`),s("--phh",`${eh(-d/2)}px`),l){let{a:e,b:n}=a?{a:0,b:1}:{a:1,b:0},r=a?eA:eI,i=a?{a:j,b:u}:{a:u,b:j},o={a:w(t,i.a),b:w(t,i.b)};s("--a",e),s("--b",n),s("--timing",`${r}`),s("--tx-a-x",`${eh(o.a.x)}px`),s("--tx-a-y",`${eh(o.a.y)}px`),s("--tx-b-x",`${eh(o.b.x)}px`),s("--tx-b-y",`${eh(o.b.y)}px`)}else{let{b:e}={a:0,b:1},n=w(t,u);s("--a",null),s("--b",e),s("--timing",null),s("--tx-a-x",null),s("--tx-a-y",null),s("--tx-b-x",`${eh(n.x)}px`),s("--tx-b-y",`${eh(n.y)}px`)}}(a,n,r,i,o,t)})}(t.detail,t.m.detail)}}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:tZ,m:{header:tl(!0),detail:tl(!1)},animationEnded:{header:!0,detail:!0}}},on:{RENDERED:{actions:["updateHeaderStyle","updateDetailStyle","updateBalloonStyle"]}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,W.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:i}}=e;return{psvg:t,p:Q(i).transformPoint(t),fidx:n,info:r,layout:i}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,F.n)("animationEnded")},{actions:(0,W.a)({animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}},"updateHeaderStyle","updateDetailStyle","updateBalloonStyle"],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,F.n)("isDetailVisible")},{target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,F.n)("animationEnded")},{actions:(0,W.a)({animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}},"updateHeaderStyle","updateDetailStyle","updateBalloonStyle"],exit:"endCancel",on:{DONE:[{guard:(0,F.n)("isHeaderVisible")},{guard:"isDetailVisible"},{target:"Closed"}]}},Closed:{entry:(0,eK.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},"updateHeaderStyle",(0,W.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,F.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},"updateDetailStyle","updateBalloonStyle",(0,W.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,F.r)({type:"DONE"})]}}}}}),tV=(0,F.c)(tq);function tB(e){tV.send(e)}function t_(e){let t,n=(0,s.useRef)(null);return tW(n),tm(tp,n,"detail"),tm(tw,n,"detail"),(0,g.jsxs)("div",{ref:n,className:"detail",onAnimationEnd:()=>tB({type:"DETAIL.ANIMATION.END"}),children:[d.RenderInfo&&(1!==(t=Object.values(e._detail.info)).length||"string"!=typeof t[0]||""!==t[0])&&(0,g.jsx)(d.RenderInfo,{info:e._detail.info}),(0,g.jsx)("style",{children:tX})]})}tV.on("CLOSE.DONE",()=>Y(t$.closeDone));let tX=`
.detail {
  ${ev}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${e$}
  ${eO}
  z-index: 11;
  will-change: opacity, transform;
  cursor: default;
  touch-action: pan-y;
  overscroll-behavior-x: none;
  overscroll-behavior-y: none;
  scrollbar-width: none;
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
    ${eT}
    margin: 1.5em;
    text-align: center;
  }
  & p {
    ${eT}
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
`;function tG(){return tt("detail",(0,g.jsx)(tK,{}),"ui"),(0,g.jsx)("div",{id:"detail"})}function tK(){return(0,g.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,g.jsx)(tJ,{}),(0,g.jsx)(tQ,{})]})}function tJ(){let e=(0,H.d4)(tV,e=>e.context.detail);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(tS,{_detail:e}),(0,g.jsx)(t_,{_detail:e}),(0,g.jsx)("style",{children:tv})]})}function tQ(){return(0,g.jsx)("svg",{id:"ui-svg-defs",children:(0,g.jsx)("defs",{children:(0,g.jsx)(tr,{})})})}function t0(){return tt("footer",(0,g.jsx)(t1,{}),"ui"),(0,g.jsx)("div",{id:"footer"})}function t1(){let e=(0,s.useRef)(null);return tm(th,e,"footer"),(0,g.jsxs)("div",{ref:e,className:"ui-content footer",children:[(0,g.jsx)("p",{children:(0,g.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:d.copyright})}),(0,g.jsx)("style",{children:t5})]})}let t5=`
.footer {
  ${eS}
  ${ek}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${eT}
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
  
  &.closed {
    --closed: 1;
  }
  &.opened {
    --opened: 1;
  }
  &.not-animating {
    --animating: 0;
    --a: initial;
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
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
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${eI};
    }
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${eA};
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
`;function t2(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("g",{id:"measure",children:(0,g.jsx)(t6,{})})})}function t3(){let{svg:e}=eX();return(0,g.jsxs)("div",{id:"distance",children:[(0,g.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),t8.map(t=>(0,g.jsxs)(s.Fragment,{children:[(0,g.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,g.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,g.jsx)("style",{children:(0,g.jsx)(t9,{})})]})}function t4(){let e=eV(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${ep(Math.abs(e.x))}`,i=`${n} ${ep(Math.abs(e.y))}`;return(0,g.jsxs)("div",{id:"coordinate",children:[(0,g.jsx)("p",{id:"longitude",children:r}),(0,g.jsx)("p",{id:"latitude",children:i}),(0,g.jsx)("style",{children:(0,g.jsx)(t7,{})})]})}function t6(){let{width:e,height:t}=e_(),{client:n}=eX(),r=(0,s.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),i=(0,s.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),o=(0,s.useMemo)(()=>t8.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,g.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((e,t)=>(0,g.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function t7(){let{width:e,height:t}=e_(),n=`
#distance,
#coordinate {
  ${ev}
  width: ${e}px;
  height: ${t}px;
}
`,r=`
#longitude {
  ${ej}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-t/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${eS}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,g.jsxs)(g.Fragment,{children:[n,r,i]})}function t9(){let{width:e,height:t}=e_(),{client:n}=eX(),r=`
.distance {
  ${ev}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${e/2}px, ${t/2}px) scale(0.5);
}
`,o=t8.map(r=>`
#distance-x-${r+1} {
  transform: translate(${e/2+n*(r+1)}px, ${t/2}px) scale(0.5);
}
`),a=t8.map(r=>`
#distance-y-${r+1} {
  transform: translate(${e/2}px, ${t/2+n*(r+1)}px) scale(0.5);
}
`);return(0,g.jsxs)(g.Fragment,{children:[i,r,o,a]})}let t8=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function ne(){return tt("guides",(0,g.jsx)(nn,{}),"ui"),(0,g.jsx)("div",{id:"guides"})}let nt=(d.uiConfig?.showGuides??!0)&&!d.mapCoord.matrix.isIdentity;function nn(){let e=(0,s.useRef)(null);return tm(th,e,"guides"),nt?(0,g.jsxs)("div",{ref:e,className:"ui-content guides",children:[(0,g.jsx)("svg",{className:"guides",children:(0,g.jsx)(t2,{})}),(0,g.jsx)(t3,{}),(0,g.jsx)(t4,{}),(0,g.jsx)("style",{children:nr})]}):(0,g.jsx)(g.Fragment,{})}let nr=`
.guides {
  ${ev}
  ${eN}
  ${eR}
  z-index: 2;
  
  &.not-animating {
    &.closed {
      --ob: 0;
    }
    &.opened {
      --ob: 1;
    }
    opacity: var(--ob);
    will-change: opacity;
  }
  &.animating {
    &.closed {
      --oa: 1;
      --ob: 0;
      --timing: ${eI};
    }
    &.opened {
      --oa: 0;
      --ob: 1;
      --timing: ${eA};
    }
    --duration: 300ms;
    animation: xxx-measure var(--duration) var(--timing);
    will-change: opacity;
  }
}

text {
  ${eT}
}

@keyframes xxx-measure {
  from {
    opacity: var(--oa);
  }
  to {
    opacity: var(--ob);
  }
}
`;function ni(){let{fidx:e,fidxToOnClick:t}=e6(),n=d.floorsConfig;return void 0===n||n.floors.length<2?(0,g.jsx)(g.Fragment,{}):(0,g.jsxs)("div",{className:"floors",children:[(0,g.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:i}=n;return(0,g.jsx)("li",{className:`floor-item ${ns(r===e)}`,onClick:t(r),children:i},r)})}),(0,g.jsx)("style",{children:no})]})}let no=`
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
  ${eC}
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
`;function na(){let{fidx:e}=e6(),t=d.floorsConfig;return void 0===t||t.floors.length<2?(0,g.jsx)(g.Fragment,{}):(0,g.jsxs)("div",{children:[t.floors.map((t,n)=>(0,g.jsx)("h2",{className:`floor-name ${ns(n===e)}`,children:t.name},n)),(0,g.jsx)("style",{children:nl})]})}let nl=`
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
`;function ns(e){return e?"selected":"unselected"}function nc(){return tt("header",(0,g.jsx)(nd,{}),"ui"),(0,g.jsx)("div",{id:"header"})}function nd(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{requestAnimationFrame(()=>tB({type:"RENDERED"}))},[]),tm(th,e,"header"),(0,g.jsxs)("div",{ref:e,className:"ui-content header",onAnimationEnd:()=>tB({type:"HEADER.ANIMATION.END"}),children:[(0,g.jsx)("h1",{className:"title",onClick:()=>tD(),children:d.title}),(0,g.jsx)(na,{}),(0,g.jsx)("style",{children:nu})]})}let nu=`
.header {
  ${ev}
  ${ek}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
  & h1,
  & h2,
  & p {
    ${eT}
    ${e$}
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
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
    will-change: initial;
    animation: none;
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
    opacity: var(--b);
  }
  &.animating {
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${eI};
    }
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${eA};
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
`;function ng(){return tt("left",(0,g.jsx)(nh,{}),"ui"),(0,g.jsx)("div",{id:"left"})}function nh(){let e=(0,s.useRef)(null);return tm(th,e,"left"),(0,g.jsxs)("div",{ref:e,className:"ui-content left bottom",children:[(0,g.jsx)(ni,{}),(0,g.jsx)("style",{children:np})]})}let np=`
.left {
  ${ev}
  ${eD}
  padding: 0.4em;
  font-size: smaller;
  ${eR}
  top: initial;
  align-items: end;
  
  &.not-animating {
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
    transform-origin: 0% 50%;
    opacity: var(--b);
    transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
    will-change: opacity, transform;
  }
  &.animating {
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${eI};
    }
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${eA};
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
`;function nm(){return(0,g.jsx)("div",{className:"button-item fullscreen",onClick:()=>Y(tM.fullscreen),children:(0,g.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,g.jsx)("path",{d:nx})})})}let nx=`
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
`;function nf(){return(0,g.jsx)("div",{className:"button-item home",onClick:()=>tD(),children:(0,g.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,g.jsx)("path",{d:ny})})})}let ny=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nv(){return d.mapCoord.matrix.isIdentity?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)("div",{className:"button-item position",onClick:()=>Y(tM.position),children:(0,g.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,g.jsx)("path",{d:nj})})})}let nw=3*Math.sqrt(2),nS=nw+6,nj=`
M 0,0
m 0,${nS/2}
l -3,-3
a ${nw},${nw} 0,1,1 6,0
z
m 0,${-nS+nw+nw/2}
a ${nw/2},${nw/2} 0,1,0 0,${-nw}
a ${nw/2},${nw/2} 0,1,0 0,${nw}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function nE(){return(0,g.jsx)("div",{className:"button-item recenter",onClick:()=>tT(),children:(0,g.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,g.jsx)("path",{d:nb})})})}let nb=`
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
`;function nM(){return(0,g.jsx)("div",{className:"button-item rotate",onClick:()=>tk(),children:(0,g.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,g.jsx)("path",{d:nO})})})}let nO=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nN(){return(0,g.jsx)("div",{className:"button-item zoom-in",onClick:()=>tO(),children:(0,g.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,g.jsx)("path",{d:nk})})})}let nk=`
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
`;function nD(){return(0,g.jsx)("div",{className:"button-item zoom-out",onClick:()=>tN(),children:(0,g.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,g.jsx)("path",{d:nT})})})}let nT=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nL(){return tt("right",(0,g.jsx)(nR,{}),"ui"),(0,g.jsx)("div",{id:"right"})}function nR(){let e=(0,s.useRef)(null);return tm(th,e,"right"),(0,g.jsxs)("div",{ref:e,className:"ui-content right bottom",children:[(0,g.jsx)(nC,{}),(0,g.jsx)("style",{children:n$})]})}let n$=`
.right {
  ${ew}
  ${eD}
  padding: 0.4em;
  font-size: smaller;
  ${eR}

  transform-origin: 100% 50%;

  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 50%;
  &.bottom {
    transform-origin: 100% 100%;
  }
  
  &.not-animating {
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
    opacity: var(--b);
    /*
    transform: scale(var(--b));
    will-change: initial;
    */
  }
  &.animating {
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${eI};
    }
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${eA};
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
`;function nC(){return(0,g.jsxs)("div",{className:"button",children:[(0,g.jsx)(nv,{}),(0,g.jsx)(nf,{}),(0,g.jsx)(nm,{}),(0,g.jsx)(nE,{}),(0,g.jsx)(nM,{}),(0,g.jsx)(nD,{}),(0,g.jsx)(nN,{}),(0,g.jsx)("style",{children:nA})]})}let nA=`
.button {
  font-size: large;
  margin: 0;
  ${ek}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${e$}
  cursor: default;
  ${eC}
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
`;function nI(e){el.get()&&e.preventDefault()}function nz(e){(0,s.useEffect)(()=>{let t=e.current;return t&&t.addEventListener("touchmove",nI),()=>{t&&t.removeEventListener("touchmove",nI)}},[e])}function nH(){return tt("screen",(0,g.jsx)(nU,{}),"ui"),(0,g.jsx)("div",{id:"screen"})}function nU(){let e=(0,s.useRef)(null);return tm(tp,e,"screen"),ed(e,"screen"),nz(e),tW(e),(0,g.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>Y(t$.close),children:(0,g.jsx)("style",{children:nP})})}let nP=`
.screen {
  ${ev}
  ${eN}
  background-color: none;
  cursor: default;
  pointer-events: none;
  z-index: 5;
  &.not-animating {
    &.closed {
      opacity: 0;
      display: none;
      &.zooming {
        display: initial;
      }
    }
    &.opened {
      pointer-events: initial;
      opacity: 0.3;
    }
  }
  &.animating {
    &.closed {
      --a: 0.3;
      --b: 0;
      --timing: ${eI};
    }
    &.opened {
      --a: 0;
      --b: 0.3;
      --timing: ${eA};
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
`;function nW(){return tt("ui",(0,g.jsx)(nF,{})),(0,g.jsx)("div",{id:"ui"})}function nF(){let e=(0,s.useRef)(null);return eU(e,"ui"),(0,g.jsxs)("div",{ref:e,className:"ui",children:[(0,g.jsx)(nH,{}),(0,g.jsx)(nc,{}),(0,g.jsx)(t0,{}),(0,g.jsx)(ng,{}),(0,g.jsx)(nL,{}),(0,g.jsx)(ne,{}),(0,g.jsx)(tG,{}),(0,g.jsx)("style",{children:eW})]})}function nZ(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function nY(){tT()}var nq=n(8077),nV=n(990),nB=n(4465),n_=n(5909);let nX=(e,t)=>(function e(t,n,r){let i=Math.min(t.length,n.length),o=t[r],l=n[r];if(r>=i||o===a||l===a)return nq.pH(t.length,n.length);let s=nq.pH(o.x,l.x)||nq.pH(o.y,l.y);return 0===s?e(t,n,r+1):s})(e,t,0);function nG(e){return(0,f.Fs)(e.values(),nV.Ts,nV.di(nX),nV.x1(e=>0===e.length?n_.xT:n_.Py(e[0])))}function nK(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:E(t,1/e.length)}function nJ(e){return new Map((0,f.Fs)(e.changedTouches,e=>nV.O3.from(e),nV.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let nQ=(0,P.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,W.a)({touches:e=>{var t,n,r;let i,o,l,s,c,d,u,g,h,{context:{touches:p},event:m}=e;return"TOUCH.START"===m.type?(t=m.ev,n=p.vecs,r=nJ(t),l=nK(o=nG(i=(0,f.Fs)([...n.entries(),...r.entries()],nV.TS(new Map,(e,t)=>{let[n,r]=t,i=nB.fromUndefinedOr(e.get(n)),o=nB.isSome(i)?[...i.value,...r]:r;return new Map(e).set(n,o)})))),c=2!==o.length?null:.5>Math.abs((s=S(o[0],o[1])).y/s.x),{...p,vecs:i,points:o,cursor:l,horizontal:c}):"TOUCH.MOVE"===m.type?function(e,t){var n,r,i,o;let l,s=nJ(t),c=new Map((0,f.Fs)(e.vecs.entries(),nV.Ts,nV.Tj(e=>{let t,[n,r]=e;return[n,(t=nB.fromUndefinedOr(s.get(n)),nB.isSome(t)?[...t.value,...r]:r)]}))),d=nG(c),u=nK(d),[g,h]=d;if(null===u||g===a||h===a)return{...e,vecs:c,points:d,cursor:u};let p=(n=e.dists,r=Math.sqrt((i=g,o=h,Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2))),l=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||l>0?[r,...n]:n),m=function(e){let[t,n,r,i]=e;return t===a||n===a||r===a||i===a?null:t<n&&n<r&&r<i?-1:t>n&&n>r&&r>i?1:null}(p);return{vecs:c,points:d,cursor:u,dists:p,z:m,horizontal:e.horizontal}}(p,m.ev):"TOUCH.END"===m.type?(d=nJ(m.ev),h=nK(g=nG(u=new Map((0,f.Fs)(p.vecs.entries(),nV.Ts,nV.x1(e=>{let[t,n]=e;return d.has(t)?n_.xT:n_.Py([t,n])}))))),{vecs:u,points:g,cursor:h,dists:0===u.size?[]:p.dists,z:0===u.size?null:p.z,horizontal:p.horizontal}):p}}),raiseOp:(0,F.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,W.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,W.a)({mode:"pan"}),enterPinch:(0,W.a)({mode:"pinch"}),emitMulti:(0,eK.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,eK.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,F.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,F.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,F.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),n0=(0,F.c)(nQ),n1=!1;function n5(e){n0.send({type:"TOUCH.START",ev:e})}function n2(e){n0.send({type:"TOUCH.MOVE",ev:e})}function n3(e){n0.send({type:"TOUCH.END",ev:e})}function n4(){n0.send({type:"CANCEL"})}function n6(e){tH||tz({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n7(e){let t;null!==e&&(t=e,q(V.eventTick,t))}function n9(e){var t;let n=(0,s.useRef)(null);return tm(tp,n,"container"),nz(n),ed(n,"container"),t="container",(0,s.useEffect)(()=>{let e=n.current;return e&&em.set(t,e),()=>{e&&em.delete(t)}},[t,n]),eU(n,"container"),(0,g.jsxs)("div",{ref:n,id:"viewer",className:"container",onTouchStart:n5,onTouchMove:n2,onTouchEnd:n3,onClick:n6,onContextMenu:nY,onScroll:n7,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),tz(t),Y(B.animationEnd)},children:[e.children,(0,g.jsx)("style",{children:n8})]})}n0.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(n1=!0,Y(tR.multiStart)):(Y(tR.multiEnd),n1=!1)}),n0.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,i=n.z;null!==r&&null!==i&&(t={z:i>0?1:-1,p:r},q(tR.zoom,t))});let n8=`
.container {
  ${ev}
  ${eN}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;

  &.zooming {
    will-change: transform;
    animation: container-zoom 500ms ease;
  }
  & > .content {
    ${ev}
    contain: strict;
    transform: var(--layout-content-matrix) translate3d(0, 0, 0);
    transform-origin: left top;
    pointer-events: none;
    width: var(--layout-scroll-width);
    height: var(--layout-scroll-height);
  }
  &.not-shown {
    opacity: 0;
  }
  &.shown {
  }
  &.not-appearing {
  }
  &.appearing {
    will-change: opacity;
    animation: xxx-appearing 2s ${eA};
  }
}
@keyframes xxx-container {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
@keyframes container-zoom {
  from {
    transform-origin: var(--zoom-transform-origin-p);
    transform: var(--zoom-transform-p);
  }
  to {
    transform-origin: var(--zoom-transform-origin-q);
    transform: var(--zoom-transform-q);
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
`;function re(){return null!==document.querySelector(".container")}var rt=n(3071);async function rn(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let rr=(0,P.mj)({types:{events:{},emitted:{}},actors:{api:(0,rt.Sx)(()=>rn(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,W.a)({position:e=>{let{event:t}=e;return t.output}}),(0,eK.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,W.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),ri=(0,F.c)(rr);function ro(e){let[t,n]=e;return n.map(e=>[t,e])}function ra(e){return e.reduce(function(e,t){let[n,r]=t,i=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,i]])},new Map)}function rl(e){return ra(Array.from(e).flatMap(ro).map(e=>{let[t,n]=e;return[n,t]}))}let rs=(0,U.e)(null),rc=(0,U.e)(null),rd=(0,U.e)(null),ru=(0,U.e)(null),rg=(0,P.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,eK.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eK.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),rh=(0,F.c)(rg);function rp(e){rh.send(e)}rh.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=d.mapCoord.matrix.inverse().transformPoint(t),r=e1.get();rm.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rh.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,q(tL.end,t)});let rm=new Worker(new URL(n.p+n.u(559),n.b),Object.assign({},{type:"module"},{type:void 0}));rm.onmessage=async e=>{let t=e.data;switch(t.type){case"INIT.DONE":return rp({type:"INIT.DONE"});case"SEARCH.DONE":var n;return Promise.resolve((e=>{let t=d.searchNames,n=(()=>{let e;if(d.getInfoByName)return d.getInfoByName;let t=ru.get();if(null!==t)return t;let n=(e=d.searchInfos??[],t=>(e=>{let t=rd.get();if(null!==t)return t;let n=new Map(e.map(e=>[e.name,e.info]));return rd.set(n),n})(e??[]).get(t)||null);return ru.set(n),n})();if(void 0===t||void 0===n)return null;let r=(e=>{let t=rc.get();if(null!==t)return t;let n=rl(e);return rc.set(n),n})((e=>{let t=rs.get();if(null!==t)return t;let n=e.map(e=>[e.name,e.addresses]);return rs.set(n),n})(t)).get(e.address);return void 0===r||r.size<1?null:n(Array.from(r)[0])})(n=t.res)).then(e=>null!==e?e:d.getSearchInfo(n,d.mapMap,d.osmSearchEntries)).then(e=>null===e?(console.log("info not found!",n),rp({type:"SEARCH.DONE",res:null})):rp({type:"SEARCH.DONE",res:{psvg:d.mapCoord.matrix.transformPoint(n.floorPos.coord),fidx:n.floorPos.fidx,info:e}})).catch(e=>console.log("SEARCH.DONE",e));case"SEARCH.ERROR":return console.log("search error!",t.error),rp({type:"SEARCH.DONE",res:null})}},rm.onerror=e=>{console.error("search error",e)},rm.onmessageerror=e=>{console.error("search messageerror",e)};var rx=n(5318);let rf=Math.round,ry=document.createElement("div"),rv=()=>{var e;let t;return e=d.cartoConfig?.backgroundColor??d.backgroundColor??"darkgray",ry.style.color=e,document.body.appendChild(ry),t=getComputedStyle(ry).color,document.body.removeChild(ry),t},rw=new Map;function rS(e){let t,n=((t=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:rv()})).parentNode||document.head.appendChild(t),t),r={color:n.getAttribute("content")||rv()},{p:i,q:o}=(()=>{var e;let t=rv(),n=rw.get(t);if(n)return{p:t,q:n};let r=function(e){let{r:t,g:n,b:r}=e;return`rgb(${rf(t)}, ${rf(n)}, ${rf(r)})`}({r:(e=function(e){let t=e.match(/\d+/g);if(!t||3!==t.length)throw Error("invalid color!");let n=Number(t[0]);return{r:n,g:Number(t[1]),b:Number(t[2])}}(t)).r/2,g:e.g/2,b:e.b/2});return rw.set(t,r),{p:t,q:r}})(),a=e?o:i;(0,rx.i)(r,{color:a,duration:400,ease:"outQuad",onRender:()=>n.setAttribute("content",r.color)}),(0,rx.i)(document.body,{backgroundColor:a,duration:400,ease:"outQuad"}),(0,rx.i)(".container",{opacity:e?.5:1,duration:400,ease:"outQuad"})}function rj(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let rE=(0,P.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==rj(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,eK.a)({type:"RESET"}),recenter:(0,eK.a)({type:"RECENTER"}),rotate:(0,eK.a)({type:"ROTATE"}),zoom:(0,eK.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,eK.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,eK.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,W.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||i}})(t.mod,n.key)}}),handleUp:(0,W.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&i}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:rj(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),rb=(0,F.c)(rE);rb.on("RESET",tD),rb.on("RECENTER",tT),rb.on("ROTATE",tk),rb.on("ZOOM.IN",tO),rb.on("ZOOM.OUT",tN),rb.on("FLOOR.LEVEL.UP",()=>Y(eG.levelUp)),rb.on("FLOOR.LEVEL.DOWN",()=>Y(eG.levelDown));let rM=(0,P.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:M,next:M,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,W.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,F.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!O(t.prev,t.next)},actions:[(0,W.a)({waited:0}),(0,eK.a)(e=>{var t,n,r,i;let o,a,{context:l}=e;return{type:"LAYOUT",layout:(t=d.fontSize,n=l.next,o=N((i={config:r=function(e,t,n,r){var i;let o,a,l,s,{outer:c,scale:d}=(i=r??n,o=t.width/t.height,s=(l=o>(a=i.width/i.height))?ee(t,a):et(t,a),{outer:s,inner:l?ee(i,o):et(i,o),scale:l?i.height/t.height:i.width/t.width,rO:o,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,d.origViewBox,d.origBoundingBox),...J(r)}).scroll),a=i.container.width/i.container.height,ei(i,a<1?1/a:1,a<1?1:+a,o)),force:!l.first}}),(0,W.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,W.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,F.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return O(t,eF.get().container)},actions:(0,W.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rO=(0,F.c)(rM);rO.on("LAYOUT",e=>{let t;return t=e,q(B.resize,t)}),window.addEventListener("resize",()=>{rO.send({type:"RESIZE"})});let rN=(0,P.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,W.a)({ticked:!1}),set:(0,W.a)({ticked:!0}),expire:(0,eK.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),rk=(0,P.mj)({types:{},actions:{getScroll:(0,W.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,i=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),b(t,n,r,i)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return ex(n)}},actors:{syncScrollLogic:(0,rt.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!ex(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,eK.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,W.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,eK.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,W.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rD=(0,F.c)(rk,{systemId:"system-scroll1"});function rT(e){rD.send(e)}rD.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,q(V.getDone,t)}),rD.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,q(V.syncSyncDone,t)});let rL=(l=()=>Y(V.eventExpire),i=rN.provide({delays:{DURATION:500}}),(o=(0,F.c)(i)).on("EXPIRE",l),o.start(),{tick:function(){o.send({type:"TICK"})}}),rR=(0,U.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function r$(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),rR.trigger.set({names:t}))}async function rC(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rA=`
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
  ${ev}
  ${eN}
  ${eM}
  ${eO}
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
`,rI=function(){let e,t=d.cartoConfig?.backgroundColor??d.backgroundColor??"darkgray",n={data:d,render:d,carto:d.cartoConfig,floors:d.floorsConfig};return e=eV(e=>e.rendered),(0,s.useEffect)(()=>{requestAnimationFrame(()=>e0())},[e]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n9,{...n,children:d.renderMap(n)}),(0,g.jsx)(nW,{}),(0,g.jsxs)("style",{children:[rA,`body { background-color: ${t}; }`]})]})};function rz(e){let{viewBox:t}=function(){let{svg:e}=eV(e=>e.layout);return{viewBox:T(e)}}();return(0,g.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:t,children:e.children})}function rH(e){let{floors:t,...n}=e,r=e6();return(0,g.jsx)(g.Fragment,{children:(t?.floors??[]).map((e,i)=>(0,g.jsx)(s.Fragment,{children:(0,g.jsx)(rU,{floors:t,...n,ctx:r,floor:e,idx:i,labelsMap:t?.labelsMap})},i))})}function rU(e){let{data:{origViewBox:t},ctx:{fidxToOnAnimationEnd:n,urls:r},floor:i,idx:o,labelsMap:a}=e,l=(0,s.useCallback)(e=>{e?e4.set(o,e):e4.delete(o)},[o]);return(0,g.jsxs)("g",{ref:l,className:`floor fidx-${o}`,onAnimationEnd:n(o),children:[(0,g.jsx)(rP,{origViewBox:t,idx:o,url:r.get(o),onAnimationEnd:n(o),labels:i.labels??a?.get(i.name.toLowerCase())}),(0,g.jsx)(rW,{origViewBox:t,idx:o,url:r.get(o),onAnimationEnd:n(o),labels:i.labels??a?.get(i.name.toLowerCase())})]})}function rP(e){let{origViewBox:t,url:n}=e;return(0,g.jsx)("image",{href:n,x:t.x,y:t.y,width:t.width,height:t.height})}function rW(e){let{origViewBox:t,url:n,labels:r}=e;return void 0===r?(0,g.jsx)(g.Fragment,{}):(0,g.jsxs)("svg",{href:n,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:T(t),children:[(0,g.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),r.map((e,t)=>(0,g.jsxs)("text",{...rq(e.attrs),children:["id"in e.attrs&&"style"in e.attrs&&(0,g.jsx)("style",{children:`#${e.attrs.id} { ${e.attrs.style}; }`}),e.children&&e.children.map((e,t)=>(0,g.jsx)("tspan",{...rq(e.attrs),children:e.text??""},t))]},t))]})}let rF=/^[{].*$/,rZ=/^style$/,rY=/(?:text-align)|(?:line-height)/;function rq(e){return Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!t.match(rF)&&!t.match(rZ)&&!t.match(rY)}).map(e=>{var t;let[n,r]=e;return[!(t=n).match(/^.*-.*$/)||t.match(/^(aria|data)-.*$/)?t:t.split("-").map((e,t)=>{var n;let r;return 0===t?e:(r=(n=e).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}var rV=JSON.parse('{"Main":{"contentId":"g3"}}');let rB={},r_=Object.keys(rV).map(e=>({name:e,href:n(4303)(`./floor-${e}.svg`),labels:rB?.[e]??void 0})),rX=[...Object.entries(JSON.parse('{"AMain-Content-(ViewBox)":{"x":0,"y":0}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})],rG=Object.values({Main:{}}).flatMap(function(e){return Object.entries(e)});ra(Array.from(rG).flatMap(ro));let rK=rl(rG);var rJ=JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}');!function(e){let t;eJ.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;e2.send({type:"INIT",nfloors:t,fidx:n}),e3.postMessage({type:"INIT",cfg:e.floorsConfig,base:e.base})}}),eG.select.add(e=>e2.send({type:"SELECT",fidx:e})),eG.levelUp.add(()=>e2.send({type:"LEVEL.UP"})),eG.levelDown.add(()=>e2.send({type:"LEVEL.DOWN"})),eG.selectDone.add(e=>e2.send({type:"SELECT.DONE",fidx:e})),tM.fullscreen.add(rC),eJ.init.add(r$),tM.position.add(()=>{var e;return e={type:"GET"},void ri.send(e)}),V.eventTick.add(ey),V.eventTick.add(rL.tick),V.get.add(()=>rT({type:"GET"})),V.sync.add(e=>rT({type:"SYNC",pos:e})),V.syncSync.add(e=>rT({type:"SYNCSYNC",pos:e})),eJ.init.add(e=>e.searchAddresses?Promise.resolve(e.searchAddresses).then(e=>{let t=e.map(e=>({...e,pos:e.floorPos}));rm.postMessage({type:"INIT",entries:t})}):e.getSearchEntries?Promise.resolve(e.getSearchEntries(e)).then(e=>{rm.postMessage({type:"INIT",entries:e})}):void 0),tL.start.add(function(e){rh.send({type:"SEARCH",req:e})}),B.layout.add(function(e){let{layout:t,force:n}=e;eq({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>eB())}),B.zoomStart.add(function(e){eq({type:"STYLE.ZOOM",...e}),eq({type:"STYLE.ANIMATION",animation:e.q})}),B.zoomEnd.add(function(e){eq({type:"STYLE.ZOOM",zoom:e.zoom}),eq({type:"STYLE.ANIMATION",animation:e.q})}),B.animationEnd.add(function(){eq({type:"STYLE.ANIMATION.END"})}),B.mode.add(function(e){eq({type:"STYLE.MODE",mode:e})}),V.eventExpire.add(eB),tM.reset.add(n4),tM.fullscreen.add(n4),tM.position.add(n4),tM.recenter.add(n4),tM.zoomOut.add(n4),tM.zoomIn.add(n4),tL.endDone.add(e=>tV.send({type:"DETAIL",...e})),t$.open.add(()=>{let e;return e=!0,q(t$.openDone,e)}),t$.openDone.add(e=>tV.send({type:e?"OPEN":"CANCEL"})),t$.close.add(()=>tV.send({type:"CANCEL"})),t$.closeDone.add(()=>{requestAnimationFrame(()=>void te.get("detail")?.querySelector(".detail")?.scroll(0,0))}),eG.lock.add(e=>tz({type:"SWITCH",fidx:e})),eG.selectDone.add(()=>tz({type:"SWITCH.DONE"})),tL.end.add(e=>tI.send({type:"SEARCH.END",res:e})),t$.open.add(()=>tC.set("locked")),t$.closeDone.add(()=>tz({type:"SEARCH.DONE"})),t$.closeDone.add(()=>tC.set("panning")),V.getDone.add(e=>{null!==e&&tz({type:"SCROLL.GET.DONE",scroll:e})}),V.syncSyncDone.add(e=>{null!==e&&tz({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),B.resize.add(e=>{let{layout:t,force:n}=e;return tz({type:"RESIZE",layout:t,force:n})}),B.mode.add(tP),B.zoomStart.add(()=>{tU=!0}),B.zoomEnd.add(()=>{tU=!1}),tM.reset.add(()=>tz({type:"HOME"})),tM.recenter.add(()=>tz({type:"RECENTER"})),tM.rotate.add(()=>tz({type:"ROTATE"})),tM.zoomOut.add(()=>tz({type:"ZOOM",z:-1,p:null})),tM.zoomIn.add(()=>tz({type:"ZOOM",z:1,p:null})),tR.multiStart.add(()=>Y(V.get)),tR.multiStart.add(()=>tC.set("touching")),tR.multiEnd.add(()=>tC.set("panning")),tR.zoom.add(e=>{let{z:t,p:n}=e;return tz({type:"ZOOM",z:t>0?1:-1,p:n})}),eJ.rendered.add(()=>tz({type:"RENDERED"})),e2.start(),rb.start(),ri.start(),rO.start(),rD.start(),rh.start(),eY.start(),t$.open.add(()=>rS(!0)),t$.close.add(()=>rS(!1)),n0.start(),tV.start(),tI.start();let n=(u({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:re,isUiRendered:nZ,...e}),u({...d}),{...d,origViewBox:t,...e});eQ(n);let r=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.5.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),r.get("info")){let e=document.getElementById(d.root);if(null===e)throw Error("#root not found!");(0,e9.createRoot)(e).render((0,g.jsx)(s.StrictMode,{children:(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{children:"svgmapviewer"}),(0,g.jsx)("h2",{children:n.title}),(0,g.jsx)("div",{className:"info",children:(0,g.jsx)(e7.h,{className:"qrcode",marginSize:6,value:document.location.href,width:"60vmin",height:"60vmin"})}),(0,g.jsx)("div",{children:(0,g.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,g.jsx)("style",{children:e8})]})}))}else{let e=document.getElementById(n.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||tU)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(tU){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!n1)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rb.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rb.send(t)},(0,e9.createRoot)(e).render((0,g.jsx)(s.StrictMode,{children:(0,g.jsx)(rI,{})}))}}({renderMap:function(e){return(0,g.jsxs)("div",{className:"content",children:[(0,g.jsx)(rz,{children:(0,g.jsx)(rH,{...e})}),(0,g.jsx)("style",{children:ez}),(0,g.jsx)("style",{children:`
svg.content-svg {
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
`})]})},isMapRendered:function(){return!0},...{root:"root",title:"Higashi-Tsukuba Utopia",copyright:"Map image and info @ Higashi-Tsukuba Utopia, map app @ Daiji Maps",backgroundColor:"white",origViewBox:JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}'),origBoundingBox:rJ,zoomFactor:2,floorsConfig:{floors:r_,initialFidx:0},...{getSearchEntries:function(){return rX.map(e=>{let[t,n]=e;return{address:t,floorPos:n}})},getSearchInfo:function(e){let t=rK.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},RenderInfo:function(e){return(0,g.jsx)("p",{children:e.info.title})}}}})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.m=i,a.d=(e,t,n)=>{var r=(t,n)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[n]:t[r]})};r(t,"get"),r(n,"value")},a.u=e=>"static/js/async/"+e+"."+({103:"c3c4ebd63a",559:"340e5da25f"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,i)=>{if(n){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[n,r,i];return}for(var l=1/0,o=0;o<e.length;o++){for(var[n,r,i]=e[o],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(o--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/HigashiTsukubaUtopia/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,i,[o,l,s]=n,c=0;if(o.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","460","37"],()=>a(5055));l=a.O(l)})();