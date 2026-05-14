(()=>{var e,t,n,r,i={4303(e,t,n){var r={"./floor-Main.svg":"1575"};function i(e){return n(o(e))}function o(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=()=>Object.keys(r),i.resolve=o,e.exports=i,i.id=4303},1575(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-Main.576377384d.svg"},4970(e,t,n){"use strict";let r,i,o;var a,l=n(1371);let s={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:s,internals:s,origin:s,measures:s,viewbox:s,points:s,lines:s,multilinestrings:s,multipolygons:s},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,l.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(e){return(0,l.createElement)("p",{},e.info.title)}};function d(e){c={...c,...e}}var u=n(9099);n(2304);var h=n(1761),g=n(9843),x=n(5032),p=n(4631);let m=h.Ay$.union([h.Ay$.number(),h.Ay$.string()]),f=h.Ay$.array(m),y=h.Ay$.object({ids:f}),v=g.codec(g.string(),y,{decode:(e,t)=>{try{return JSON.parse(e)}catch(n){return n instanceof x.G&&t.issues.push({code:"invalid_format",format:"json",input:e,message:n.message}),p.tm}},encode:e=>JSON.stringify(e)}),w=h.Ay$.union([h.Ay$.number(),h.Ay$.string()]),j=h.Ay$.set(w),S=h.Ay$.object({ids:j}),E=h.Ay$.codec(y,S,{decode:e=>({ids:new Set(e.ids)}),encode:e=>({ids:Array.from(e.ids)})});h.Ay$.pipe(v,E);let b=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var O=n(4997);function $(e,t,n){let[r,i,o]=e,[a,l]=t;return r*a+i*l+o*n}function M(e,t,n){return[$(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),$(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function k(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function N(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}var T=n(8304);let D=n(5223).I3(function(e,t){return T._k.compare(e.x,t.x)||T._k.compare(e.y,t.y)}),L={x:0,y:0};function C(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,i=e.x*n,o=e.y*r;return{...e,x:i,y:o}}function R(e,t,n,r){return{x:e,y:t,width:n,height:r}}let A={x:0,y:0,width:1,height:1};function I(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function z(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function H(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function F(e,t){return{...e,x:t.x,y:t.y}}function U(e){return function(e){let{x:t,y:n,width:r,height:i}=e;return`${t} ${n} ${r} ${i}`}(function(e,t){let{x:n,y:r,width:i,height:o}=e;return{x:t(n),y:t(r),width:t(i),height:t(o)}}(e,function(e){return Math.round(100*e)/100}))}function W(e){let{x:t,y:n,width:r,height:i}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+i}}}function q(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function P(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function Z(e){let[[t,n],[r,i]]=e;return{tl:{x:t,y:n},br:{x:r,y:i}}}function Y(e,t){return[M(e,function(e){let[t]=e;return t}(t),0),M(e,function(e){let[,t]=e;return t}(t),0),M(e,function(e){let[,,t]=e;return t}(t),1)]}function V(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function _(e,t,n,r){var i,o;return i=function(e,t){let[n,r]=t;return[V(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),V([-n,-r])].reduce(Y)}("number"==typeof(o=t)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,O.Fs)(e,W,P,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>M(i,e,1)),Z,q)}function B(e){return Math.round(100*e)/100}function G(e){return Math.round(1e7*e)/1e7}var X=n(2203),J=n(9041),K=n(5227),Q=n(6058),ee=n(5114);let et=[1,2,2.5,5,10,15,20,25,30,40,50];function en(e){e.forEach(e=>e())}function er(e,t){e.forEach(e=>e(t))}let ei={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},eo={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function ea(e){return void 0!==e&&"number"==typeof e}function el(e,t,n,r,i,o){return new DOMMatrixReadOnly(e instanceof Array?e:ea(e)&&ea(t)&&ea(n)&&ea(r)&&ea(i)&&ea(o)?[e,t,n,r,i,o]:void 0)}let es={container:A,scroll:A,content:el(),svgOffset:{x:-0,y:-0},svgScale:1,svg:A};function ec(e){let{container:t,outer:n,svgScale:r,inner:i}=e,{x:o,y:a}=n;return{container:t,scroll:t,content:el(),svgOffset:{x:-o,y:-a},svgScale:r,svg:i}}function ed(e){let{scroll:t,content:n,svgOffset:r,svgScale:i,svg:o}=e;return el().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/i,1/i).translate(-o.x,-o.y)}function eu(e,t){let n=e.height,r=n*t;return R((e.width-r)/2,0,r,n)}function eh(e,t){let n=e.width,r=n/t;return R(0,(e.height-r)/2,n,r)}let eg={...es,config:{fontSize:16,container:A,outer:A,inner:A,svgScale:1}};function ex(e,t){let n=z(e.scroll);return ep(e,t,t,n)}function ep(e,t,n,r){let i=ed(e).inverse().transformPoint(r),o=_(e.scroll,[t,n],r.x,r.y),a=C(e.svgOffset,[t,n]),l=_(e.svg,[t,n],i.x,i.y);return{...e,scroll:o,svgOffset:a,svg:l}}function em(e,t){var n,r;let i=z({...e.scroll,x:0,y:0}),o=(n=i.x,r=i.y,el().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:o}}function ef(e,t){let n=e.scroll,r=N(C(t,-1),n);return(0,O.Fs)(e,e=>({...e,scroll:H(e.scroll,r)}),e=>{let t,r,i,o,a,l,s;return t=F(e.scroll,n),r=e.content.inverse(),o=k(i=z(e.scroll),N(e.scroll,n)),a=r.transformPoint(i),l=C(N(r.transformPoint(o),a),-e.svgScale),s=H(e.svg,l),{...e,scroll:t,svg:s}})}function ey(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;if(null===n)return!1;let a=i-e.width,l=o-e.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${e.width}, ${e.height}]`),!1;let s=Math.round(-e.x),c=Math.round(-e.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==s&&(t.scrollLeft=s),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=t.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let ev={scroll:A,client:{width:0,height:0},timeStamp:0};function ew(e){let t=e.currentTarget;null!==t&&(ev={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let ej=(0,J.e)(eg),eS=(0,K.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,Q.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,Q.a)({}),updateSvgMatrix:(0,Q.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:i}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-i.x,-i.y)}(t)}}),updateGeoMatrix:(0,Q.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,Q.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,i=Math.max(n.width,n.height)/2*r,o=Math.round(Math.log10(i)),a=(t=i/Math.pow(10,o-1),et.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,Q.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:eg,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:L,distanceRadius:{svg:0,client:0},geoRange:{start:L,end:L},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,Q.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return ej.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,ee.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,Q.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,Q.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,Q.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,Q.a)({animation:e=>{var t,n,r;let{event:{animation:i}}=e;return null===i?"":(t=i.from,n=i.to,r=i.origin,`
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
`)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,Q.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,Q.a)({animation:null,animating:!1}),target:"Idle"}}}}}),eE=(0,ee.c)(eS,{systemId:"system-viewer1"});function eb(e){eE.send(e)}function eO(e){return(0,X.d4)(eE,t=>e(t.context))}function e$(){eb({type:"STYLE.SCROLL",currentScroll:ev})}function eM(){return eO(e=>e.layout.container)}function ek(){return eO(e=>e.distanceRadius)}let eN=`
position: absolute;
left: 0;
top: 0;
`,eT=`
position: absolute;
right: 0;
top: 0;
`,eD=`
position: absolute;
left: 0;
bottom: 0;
`,eL=`
position: absolute;
right: 0;
bottom: 0;
`,eC=`
margin: 0;
`,eR=`
padding: 0;
`,eA=`
${eC} ${eR}
`,eI=`
box-sizing: border-box;
`,ez=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eH=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eF=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eU=`
-webkit-user-select: none;
user-select: none;
`,eW=`
touch-action: none;
`,eq=`
pointer-events: none;
`,eP=`
pointer-events: initial;
`,eZ=`
background-color: rgba(255, 255, 255, 0.5);
`,eY=`
cubic-bezier(0, 0, 0, 1)
`,eV=`
cubic-bezier(1, 0, 1, 1)
`,e_=`
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
`,eB={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var eG=n(4319);let eX={init:new Set,rendered:new Set},eJ=function(e){er(eX.init,e)},eK=function(){en(eX.rendered)},eQ=(0,J.e)(0),e0=(0,K.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,Q.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,Q.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eQ.set(t.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,Q.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eQ.set(t.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,eG.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,eG.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,Q.a)({prevFidx:null}),target:"Idle"}}}}}),e1=(0,ee.c)(e0);e1.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,er(eB.lock,t)});let e5=new Worker(new URL(n.p+n.u(760),n.b),Object.assign({},{type:"module"},{type:void 0}));function e2(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,X.d4)(e1,t=>e(t.context))),i=(0,l.useMemo)(()=>(function(e,t,n){let r=c.floorsConfig;if(void 0===r)return null;let i=r.floors.map((r,i)=>{var o,a,l,s,c,d,u;return o=e,a=t,l=n,(s=i)!=o||l?s===a?(c=s,`
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
${e_}
`})(t,n,void 0===r.get(t)),[t,n,r]),o=(0,l.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,er(eB.selectDone,n))},[t]),a=(0,l.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,er(eB.lock,r))},[t,n]);return{fidx:t,prevFidx:n,style:i,fidxToOnAnimationEnd:o,fidxToOnClick:a,urls:r}}e5.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;e1.send({type:"IMAGE",fidx:e,blob:n})}}},e5.onerror=e=>{console.error("floors error",e)},e5.onmessageerror=e=>{console.error("floors messageerror",e)};var e3=n(1642),e4=n(3772);let e6=`
:root {
  font-family: 'sans-serif';
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
`;function e7(){let e=eO(e=>e.rendered);(0,l.useEffect)(()=>{requestAnimationFrame(()=>eK())},[e]);let t=eO(e=>e.shown),n=eO(e=>e.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${eY};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",r=eO(e=>e.layout.scroll),i=`
.content {
  width: ${B(r.width)}px;
  height: ${B(r.height)}px;
}
`;return(0,u.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,i]})}let e8=new Map;function e9(e,t,n){(0,l.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:e8.get(n)??null;if(null===r)return;let i=r.querySelector(`#${e}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});e8.set(e,o),(0,e4.createRoot)(o).render(t)})(e,t,n),[e,n,t])}let te={bus:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,u.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,u.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,u.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,u.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,u.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,u.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,u.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,u.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,u.jsx)("use",{x:"8.5",href:"#_person2"}),(0,u.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,u.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,u.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,u.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,u.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,u.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,u.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,u.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,u.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,u.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,u.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,u.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,u.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,u.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,u.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,u.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,u.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,u.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,u.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function tt(){return(0,u.jsx)("g",{className:"assets",children:(0,u.jsx)(tn,{})})}function tn(){return(0,u.jsx)("g",{className:"symbols",children:Object.entries(te).map((e,t)=>{let[n,r]=e;return(0,u.jsx)(l.Fragment,{children:r({id:n})},t)})})}function tr(e){return e>.5?-1:+(e<.5)}function ti(e){return e<.3?1:e>.7?-1:0}function to(e,t,n,r){let i={x:t/2,y:n/2},o=t/20,a=o/2;function l(t){var n;let r,i;return n={x:e.h,y:e.v},r=t.x*n.x,i=t.y*n.y,{...t,x:r,y:i}}let s=e.th<Math.PI/4,c=0===e.v,d=0===e.h,u=l(C(i,-1)),h=l(c||d?N(C(i,-1),{x:r,y:r}):N(C(i,-1),{x:s?r:0,y:s?0:r})),[g,x]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],p=k(u,g),m=k(u,x);return{p:u,q:h,a:p,b:m}}function ta(e){return{open:e,animating:!1}}function tl(e){return e.open||e.animating?null:{open:!0,animating:!0}}function ts(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function tc(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function td(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function tu(e){let{open:t,animating:n}=e;return t||n}let th={start:new Set,end:new Set,endDone:new Set},tg={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},tx={p:L,psvg:L,fidx:0,layout:es,info:{title:""}};function tp(e){return function(t,n){let r=t[n],i=e(r);return t[n]=null===i?r:i,t}}let tm=(0,K.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return tu(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return tu(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,Q.a)({canceling:()=>!0}),endCancel:(0,Q.a)({canceling:()=>!1}),open:(0,Q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tp(tl)(n,r)}}),close:(0,Q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tp(tc)(n,r)}}),handle:(0,Q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tp(n[r].open?ts:td)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:tx,m:{header:ta(!0),detail:ta(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,Q.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:i}}=e;return{psvg:t,p:ed(i).transformPoint(t),fidx:n,info:r,layout:i}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,ee.n)("animationEnded")},{actions:(0,Q.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,ee.n)("isDetailVisible")},{actions:(0,Q.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,ee.n)("animationEnded")},{actions:(0,Q.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,ee.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,Q.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,eG.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,Q.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,ee.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,Q.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,ee.r)({type:"DONE"})]}}}}}),tf=(0,ee.c)(tm);function ty(){return(0,X.d4)(tf,e=>e.context)}function tv(){return ty().m.header}function tw(){return ty().m.detail}function tj(e){return(0,u.jsxs)("div",{className:"balloon",children:[(0,u.jsx)(tE,{...e}),e.children,(0,u.jsx)("style",{children:tS})]})}tf.on("CLOSE.DONE",()=>en(tg.closeDone));let tS=`
.balloon,
.balloon-svg {
  ${eN}
  ${eq}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tE(e){let t=e._hv;if(null===t)return(0,u.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(e,t){let{bw:n,bh:r,lh:i,d:o,width:a,height:l}=t,s=R(-a/2,-a/2,a,l),{body:c,leg:d}=function(e,t,n,r){let i={x:t/2,y:n/2},o=`
m${-i.x},${-i.y}
h${t}
v${n}
h${-t}
z
`,{p:a,q:l,a:s,b:c}=to(e,t,n,r),d=N(l,s),u=N(c,l),h=N(a,c);return{body:o,leg:`
m${s.x},${s.y}
l${d.x},${d.y}
l${u.x},${u.y}
l${h.x},${h.y}
z
`}}(e,n,r,i);function u(e){return`M${e},${e} ${c} M${e},${e} ${d}`}return{viewBox:s,width:a,height:l,bg:u(o),fg:u(0)}}(t,e._size);return(0,u.jsxs)("svg",{className:"balloon-svg",viewBox:U(n),width:r,height:i,children:[(0,u.jsx)("path",{className:"bg",d:a}),(0,u.jsx)("path",{className:"fg",d:o}),(0,u.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tb(e){let{_p:t,_hv:n,_size:r,_leg:i}=e,o=tw(),a=null!==t&&null!==n&&tu(o)?function(e,t,n,r){let{open:i,animating:o}=e,{width:a,height:l}=n,s=C(r.q,-1);if(o){let[e,n]=i?[0,1]:[1,0],[r,o]=i?[0,1]:[1,0],[c,d]=i?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[u,h]=i?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],g=i?eY:eV;return`
.detail,
.balloon {
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --dp-x: ${s.x}px;
  --dp-y: ${s.y}px;
  --oa: ${e};
  --ob: ${n};
  --sa: ${r};
  --sb: ${o};
  --timing: ${g};
  --dxa: ${c};
  --dxb: ${u};
  --dya: ${d};
  --dyb: ${h};
  --pww: ${-a/2}px;
  --phh: ${-l/2}px;
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
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --sb: 1;
  --dp-x: ${s.x}px;
  --dp-y: ${s.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-a/2}px;
  --phh: ${-l/2}px;
  
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
`}(o,t,r,i):".balloon, .detail { visibility: hidden; }";return(0,u.jsx)("style",{children:a})}let tO={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},t$=()=>en(tO.zoomIn),tM=()=>en(tO.zoomOut),tk=()=>en(tO.rotate),tN=()=>en(tO.reset),tT=()=>en(tO.recenter),tD={multiStart:new Set,multiEnd:new Set,zoom:new Set},tL=(0,J.e)("panning");tL.subscribe(e=>{let t;return t=e,er(eo.mode,t)});let tC=(0,K.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,Q.a)({rendered:!0}),emitGetScroll:(0,eG.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,eG.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,eG.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,Q.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,i={type:"zoom",z:n,p:r??z(e.layout.container)};return{...e,animationReq:i}}(n,t)}),prepareHome:(0,Q.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,Q.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:z(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,Q.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,Q.a)(e=>{var t,n,r,i,o,a,l,s,d,u,h,g,x;let p,m,f,y,v,w,j,S,E,b,O,$,{context:M}=e;return t=M.animationReq,n=M.layout,b=null===t?null:"zoom"===t.type?(r=n,i=t.z,o=t.p,p=ed(r).inverse().transformPoint(o),m=1/(a=i,Math.pow(c.zoomFactor,a)),f=el().scale(1/m,1/m),{type:"Zoom",svg:_(r.svg,m,p.x,p.y),svgScale:r.svgScale*m,q:{from:el(),to:f,origin:o}}):"home"===t.type?(l=n,y=z((s=function(e){let{config:t,content:n}=e;return{config:t,...ec(t),content:n}}(n)).config.inner),v=ed(l).transformPoint(y),w=s.svgScale/l.svgScale,S=(function(e,t){if(e instanceof DOMMatrixReadOnly)return el(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return el(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((j=z(l.container)).x-v.x,j.y-v.y).multiply((d=1/w,u=1/w,h=v.x,g=v.y,el().scale(d,u,1,h,g,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:el(),to:S,origin:null}}):(x=t.p,E=el().rotate(90),{type:"Rotate",deg:90,q:{from:el(),to:E,origin:x}}),O=M.layout,$=function(e,t){var n,r,i;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:F(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,i=t.svgScale,{...e,svg:r,svgScale:i}):em(e,t.deg)}(M.layout,b),{...M,animation:b,prevLayout:O,layout:$}}),endZoom:(0,Q.a)(e=>{var t,n;let r,i,{context:o}=e;return r=o.zoom*(null===(t=o.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),i=o.rotate+(null===(n=o.animationReq)||"rotate"!==n.type?0:n.deg),{...o,prevLayout:null,animation:null,zoom:r,rotate:i}}),endHome:(0,Q.a)(e=>{let t,n,{context:r}=e;return t=z(r.origLayout.container),n=em(ex(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,eG.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,eG.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,Q.a)(e=>{let t,{context:n}=e;return t=z(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,Q.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:ex(n,9)}}(n,t)}),resetScroll:(0,Q.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=ev,n=ef(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,eG.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,Q.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,eG.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=ev;return{type:"SEARCH.START",req:{psvg:ed(ef(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,eG.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=ev,i=ef(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:i}}}(n,t)}),emitSwitch:(0,eG.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,eG.a)({type:"SWITCH.DONE"})}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:eg,prevLayout:null,layout:eg,cursor:z(eg.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,ee.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{actions:"prepareHome",target:"Zooming"},ROTATE:{actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:"clearAnimation",type:"final"}}}}}),tR=(0,ee.c)(tC,{systemId:"system-viewer1"});function tA(e){tR.send(e)}tR.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,er(th.start,t)}),tR.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tR.send({type:"SEARCH.DONE"}):(t=r,er(th.endDone,t),n=r.psvg,er(tg.open,n))}),tR.on("ZOOM.START",e=>{let t;return t=e,er(eo.zoomStart,t)}),tR.on("ZOOM.END",e=>{let t;return t=e,er(eo.zoomEnd,t)}),tR.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,er(eB.select,t)}),tR.on("SWITCH.DONE",()=>en(eB.unlock)),tR.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},er(eo.layout,t)}),tR.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,er(ei.sync,t)}),tR.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,er(ei.syncSync,t)}),tR.on("SCROLL.GET",()=>en(ei.get));let tI=!1,tz=!1;function tH(e){tI="locked"===e,tz="locked"===e}function tF(){let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tU),()=>{t.removeEventListener("wheel",tU)}},[e]),e}function tU(e){let t=e.currentTarget;tz&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function tW(e){let t,{_detail:n}=e,r=tF();return(0,u.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void tf.send(e)},children:[c.renderInfo&&(1!==(t=Object.values(n.info)).length||"string"!=typeof t[0]||""!==t[0])&&c.renderInfo({info:n.info}),(0,u.jsx)("style",{children:tq})]})}let tq=`
.detail {
  ${eN}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eP}
  ${eI}
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
  ${eU}
  margin: 1.5em;
  text-align: center;
}

p {
  ${eU}
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
`;function tP(){return e9("detail",(0,u.jsx)(tZ,{}),"ui"),(0,u.jsx)("div",{id:"detail"})}function tZ(){return(0,u.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,u.jsx)(tY,{}),(0,u.jsx)(tV,{})]})}function tY(){let e,t,n,r,i,o,a,l,s,c,d,h,g=ty().detail,x=(o=g.p,a=g.layout,l=function(e,t){let{x:n,y:r}=t,i=e.width/e.height,o={x:n/e.width,y:r/e.height},a=i>1?tr(o.x):ti(o.x);return{h:a,v:i>1?ti(o.y):tr(o.y),th:Math.atan2(e.height,e.width)}}(g.layout.container,o),s=a.container.width,t=50*(e=.01*Math.min(s,c=a.container.height)),n=50*e,r=10*e,i=t/100,h=to(l,(d={bw:t,bh:n,lh:r,d:i,width:t+2*r+2*i,height:n+2*r+2*i}).bw,d.bh,d.lh),{_p:o,_hv:l,_W:s,_H:c,_size:d,_leg:h});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(tj,{...x}),(0,u.jsx)(tW,{_detail:g}),(0,u.jsx)(tb,{...x})]})}function tV(){return(0,u.jsx)("svg",{id:"ui-svg-defs",children:(0,u.jsx)("defs",{children:(0,u.jsx)(tt,{})})})}function t_(){return e9("footer",(0,u.jsx)(tB,{}),"ui"),(0,u.jsx)("div",{id:"footer"})}function tB(){let e=c;return(0,u.jsxs)("div",{className:"ui-content footer",children:[(0,u.jsx)("p",{children:(0,u.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:e.copyright})}),(0,u.jsxs)("style",{children:[tG,(0,u.jsx)(tX,{})]})]})}let tG=`
.footer {
  ${eD}
  ${eH}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${eU}
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
}
`;function tX(){let{open:e,animating:t}=tv();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eV;return(0,u.jsx)(u.Fragment,{children:`
.footer {
  --duration: 300ms;
  --timing: ${r};
  --a: ${t};
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
  --b: ${+!!e};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function tJ(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("g",{id:"measure",children:(0,u.jsx)(t0,{})})})}function tK(){let{svg:e}=ek();return(0,u.jsxs)("div",{id:"distance",children:[(0,u.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),t3.map(t=>(0,u.jsxs)(l.Fragment,{children:[(0,u.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,u.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,u.jsx)("style",{children:(0,u.jsx)(t2,{})})]})}function tQ(){let e=eO(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${G(Math.abs(e.x))}`,i=`${n} ${G(Math.abs(e.y))}`;return(0,u.jsxs)("div",{id:"coordinate",children:[(0,u.jsx)("p",{id:"longitude",children:r}),(0,u.jsx)("p",{id:"latitude",children:i}),(0,u.jsx)("style",{children:(0,u.jsx)(t5,{})})]})}function t0(){let{width:e,height:t}=eM(),{client:n}=ek(),r=(0,l.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),i=(0,l.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),o=(0,l.useMemo)(()=>t3.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,u.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((e,t)=>(0,u.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function t1(){let{open:e,animating:t}=tv(),[n,r]=e?[0,1]:[1,0],i=t?`
.guides {
  --timing: ${e?eY:eV};
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
`;return(0,u.jsx)(u.Fragment,{children:i})}function t5(){let{width:e,height:t}=eM(),n=`
#distance,
#coordinate {
  ${eN}
  width: ${e}px;
  height: ${t}px;
}
`,r=`
#longitude {
  ${eL}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-t/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${eD}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,u.jsxs)(u.Fragment,{children:[n,r,i]})}function t2(){let{width:e,height:t}=eM(),{client:n}=ek(),r=`
.distance {
  ${eN}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${e/2}px, ${t/2}px) scale(0.5);
}
`,o=t3.map(r=>`
#distance-x-${r+1} {
  transform: translate(${e/2+n*(r+1)}px, ${t/2}px) scale(0.5);
}
`),a=t3.map(r=>`
#distance-y-${r+1} {
  transform: translate(${e/2}px, ${t/2+n*(r+1)}px) scale(0.5);
}
`);return(0,u.jsxs)(u.Fragment,{children:[i,r,o,a]})}let t3=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function t4(){return e9("guides",(0,u.jsx)(t6,{}),"ui"),(0,u.jsx)("div",{id:"guides"})}function t6(){return!(c.uiConfig?.showGuides??!0)||c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"ui-content guides",children:[(0,u.jsx)("svg",{className:"guides",children:(0,u.jsx)(tJ,{})}),(0,u.jsx)(tK,{}),(0,u.jsx)(tQ,{}),(0,u.jsxs)("style",{children:[t7,(0,u.jsx)(t1,{})]})]})}let t7=`
.guides {
  ${eN}
  ${ez}
  ${eq}
  z-index: 2;
}

text {
  ${eU}
}
`;function t8(){let{fidx:e,fidxToOnClick:t}=e2(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"floors",children:[(0,u.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:i}=n;return(0,u.jsx)("li",{className:`floor-item ${nn(r===e)}`,onClick:t(r),children:i},r)})}),(0,u.jsx)("style",{children:t9})]})}let t9=`
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
  ${eZ}
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
`;function ne(){let{fidx:e}=e2(),t=c.floorsConfig;return void 0===t||t.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{children:[t.floors.map((t,n)=>(0,u.jsx)("h2",{className:`floor-name ${nn(n===e)}`,children:t.name},n)),(0,u.jsx)("style",{children:nt})]})}let nt=`
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
`;function nn(e){return e?"selected":"unselected"}function nr(){return e9("header",(0,u.jsx)(ni,{}),"ui"),(0,u.jsx)("div",{id:"header"})}function ni(){let e=c;return(0,u.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void tf.send(e)},children:[(0,u.jsx)("h1",{className:"title",onClick:()=>tN(),children:e.title}),(0,u.jsx)(ne,{}),(0,u.jsxs)("style",{children:[no,(0,u.jsx)(na,{})]})]})}let no=`
.header {
  ${eN}
  ${eH}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${eU}
  ${eP}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function na(){let{open:e,animating:t}=tv();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eV;return(0,u.jsx)(u.Fragment,{children:`
.header {
  --timing: ${r};
  --duration: 300ms;
  --a: ${t};
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
  --b: ${+!!e};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nl(){return e9("left",(0,u.jsx)(ns,{}),"ui"),(0,u.jsx)("div",{id:"left"})}function ns(){return(0,u.jsxs)("div",{className:"ui-content left bottom",children:[(0,u.jsx)(t8,{}),(0,u.jsxs)("style",{children:[nc,(0,u.jsx)(nd,{})]})]})}let nc=`
.left {
  ${eN}
  ${eF}
  padding: 0.4em;
  font-size: smaller;
  ${eq}
}

.left {
  top: initial;
  align-items: end;
}
`;function nd(){let{open:e,animating:t}=tv();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eV;return(0,u.jsx)(u.Fragment,{children:`
.left {
  --timing: ${r};
  --duration: 300ms;
  --a: ${t};
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
  --b: ${+!!e};
  transform-origin: 0% 50%;
  opacity: var(--b);
  transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nu(){return(0,u.jsx)("div",{className:"button-item fullscreen",onClick:()=>en(tO.fullscreen),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nh})})})}let nh=`
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
`;function ng(){return(0,u.jsx)("div",{className:"button-item home",onClick:()=>tN(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nx})})})}let nx=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function np(){return c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"button-item position",onClick:()=>en(tO.position),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ny})})})}let nm=3*Math.sqrt(2),nf=nm+6,ny=`
M 0,0
m 0,${nf/2}
l -3,-3
a ${nm},${nm} 0,1,1 6,0
z
m 0,${-nf+nm+nm/2}
a ${nm/2},${nm/2} 0,1,0 0,${-nm}
a ${nm/2},${nm/2} 0,1,0 0,${nm}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function nv(){return(0,u.jsx)("div",{className:"button-item recenter",onClick:()=>tT(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nw})})})}let nw=`
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
`;function nj(){return(0,u.jsx)("div",{className:"button-item rotate",onClick:()=>tk(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nS})})})}let nS=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nE(){return(0,u.jsx)("div",{className:"button-item zoom-in",onClick:()=>t$(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nb})})})}let nb=`
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
`;function nO(){return(0,u.jsx)("div",{className:"button-item zoom-out",onClick:()=>tM(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:n$})})})}let n$=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nM(){return e9("right",(0,u.jsx)(nk,{}),"ui"),(0,u.jsx)("div",{id:"right"})}function nk(){return(0,u.jsxs)("div",{className:"ui-content right bottom",children:[(0,u.jsx)(nT,{}),(0,u.jsx)("style",{children:nN})]})}let nN=`
.right {
  ${eT}
  ${eF}
  padding: 0.4em;
  font-size: smaller;
  ${eq}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nT(){return(0,u.jsxs)("div",{className:"button",children:[(0,u.jsx)(np,{}),(0,u.jsx)(ng,{}),(0,u.jsx)(nu,{}),(0,u.jsx)(nv,{}),(0,u.jsx)(nj,{}),(0,u.jsx)(nO,{}),(0,u.jsx)(nE,{}),(0,u.jsxs)("style",{children:[nD,(0,u.jsx)(nL,{})]})]})}let nD=`
.button {
  font-size: large;
  margin: 0;
  ${eH}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${eP}
  cursor: default;
  ${eZ}
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
`;function nL(){let{open:e,animating:t}=tv();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eV;return(0,u.jsx)(u.Fragment,{children:`
.right {
  --timing: ${r};
  --a: ${t};
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
  --b: ${+!!e};
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
`})}function nC(){return e9("screen",(0,u.jsx)(nR,{}),"ui"),(0,u.jsx)("div",{id:"screen"})}function nR(){let e=tF();return(0,u.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>en(tg.close),children:(0,u.jsxs)("style",{children:[nA,(0,u.jsx)(nI,{})]})})}let nA=`
.screen {
  ${eN}
  ${ez}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nI(){let{open:e,animating:t}=tw(),n=eO(e=>e.animating);if(!t)return e?(0,u.jsx)(u.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,u.jsx)(u.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,u.jsx)(u.Fragment,{children:".screen { display: none; }"});{let[t,n]=e?[0,.3]:[.3,0],r=e?eY:eV;return(0,u.jsx)(u.Fragment,{children:`
.screen {
  --duration: 400ms;
  --timing: ${r};
  --a: ${t};
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
`})}}function nz(){return e9("ui",(0,u.jsx)(nH,{})),(0,u.jsx)("div",{id:"ui"})}function nH(){return(0,u.jsxs)("div",{className:"ui",children:[(0,u.jsx)(nC,{}),(0,u.jsx)(nr,{}),(0,u.jsx)(t_,{}),(0,u.jsx)(nl,{}),(0,u.jsx)(nM,{}),(0,u.jsx)(t4,{}),(0,u.jsx)(tP,{})]})}function nF(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function nU(){tT()}var nW=n(8973),nq=n(9116),nP=n(1277);let nZ=nW.OZ(D),nY=nq.aU(T._k),nV=nq.tf(),n_=nq.JI(T.Eq,nW.CA());function nB(e){return(0,O.Fs)(e,nq.zu(nZ),nW.x1(e=>0===e.length?nP.dv:nP.zN(e[0])))}function nG(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:C(t,1/e.length)}function nX(e){return new Map((0,O.Fs)(e.changedTouches,Array.from,nW.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let nJ=(0,K.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,Q.a)({touches:e=>{var t;let n,r,i,a,l,s,c,d,u,{context:{touches:h},event:g}=e;return"TOUCH.START"===g.type?(t=g.ev,i=nG(r=nB(n=n_.concat(h.vecs,nX(t)))),l=2!==r.length?null:.5>Math.abs((a=N(r[0],r[1])).y/a.x),{...h,vecs:n,points:r,cursor:i,horizontal:l}):"TOUCH.MOVE"===g.type?function(e,t){var n,r,i,a;let l,s=nX(t),c=nY.mapWithIndex(e.vecs,(e,t)=>(0,O.Fs)(s.get(e),nP.k$,nP.AU(()=>t,nW.xW(t)))),d=nB(c),u=nG(d),[h,g]=d;if(null===u||h===o||g===o)return{...e,vecs:c,points:d,cursor:u};let x=(n=e.dists,r=Math.sqrt((i=h,a=g,Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2))),l=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||l>0?[r,...n]:n),p=function(e){let[t,n,r,i]=e;return t===o||n===o||r===o||i===o?null:t<n&&n<r&&r<i?-1:t>n&&n>r&&r>i?1:null}(x);return{vecs:c,points:d,cursor:u,dists:x,z:p,horizontal:e.horizontal}}(h,g.ev):"TOUCH.END"===g.type?(s=nX(g.ev),u=nG(d=nB(c=nV.filterMapWithIndex(h.vecs,(e,t)=>s.has(e)?nP.dv:nP.zN(t)))),{vecs:c,points:d,cursor:u,dists:0===c.size?[]:h.dists,z:0===c.size?null:h.z,horizontal:h.horizontal}):h}}),raiseOp:(0,ee.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,Q.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,Q.a)({mode:"pan"}),enterPinch:(0,Q.a)({mode:"pinch"}),emitMulti:(0,eG.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,eG.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,ee.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,ee.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,ee.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),nK=(0,ee.c)(nJ),nQ=!1;function n0(e){nK.send({type:"TOUCH.START",ev:e})}function n1(e){nK.send({type:"TOUCH.MOVE",ev:e})}function n5(e){nK.send({type:"TOUCH.END",ev:e})}function n2(){nK.send({type:"CANCEL"})}function n3(e){tI||tA({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n4(e){let t;null!==e&&(t=e,er(ei.eventTick,t))}function n6(e){return(0,u.jsxs)("div",{id:"viewer",className:"container",onTouchStart:n0,onTouchMove:n1,onTouchEnd:n5,onClick:n3,onContextMenu:nU,onScroll:n4,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),tA(t),en(eo.animationEnd)},children:[e.children,(0,u.jsx)(n7,{})]})}function n7(){let e=`
.container {
  ${eN}
  ${ez}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("style",{children:e}),(0,u.jsx)(n8,{}),(0,u.jsx)(n9,{}),(0,u.jsx)(re,{})]})}function n8(){let e=eO(e=>e.layout.content),t=`
.content {
  ${eN}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,u.jsx)("style",{children:t})}function n9(){let e=eO(e=>e.animation);return(0,u.jsx)("style",{children:e})}function re(){let{style:e}=e2();return null===e?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("style",{children:e})}function rt(){return null!==document.querySelector(".container")}nK.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(nQ=!0,en(tD.multiStart)):(en(tD.multiEnd),nQ=!1)}),nK.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,i=n.z;null!==r&&null!==i&&(t={z:i>0?1:-1,p:r},er(tD.zoom,t))});var rn=n(1586);async function rr(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let ri=(0,K.mj)({types:{events:{},emitted:{}},actors:{api:(0,rn.Sx)(()=>rr(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,Q.a)({position:e=>{let{event:t}=e;return t.output}}),(0,eG.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,Q.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),ro=(0,ee.c)(ri),ra=(0,K.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,eG.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eG.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),rl=(0,ee.c)(ra);function rs(e){rl.send(e)}rl.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=c.mapCoord.matrix.inverse().transformPoint(t),r=eQ.get();rc.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rl.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,er(th.end,t)});let rc=new Worker(new URL(n.p+n.u(502),n.b),Object.assign({},{type:"module"},{type:void 0}));function rd(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}rc.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":rs({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=t.res,null===(r=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),rs({type:"SEARCH.DONE",res:null})):rs({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",t.error),rs({type:"SEARCH.DONE",res:null})}},rc.onerror=e=>{console.error("search error",e)},rc.onmessageerror=e=>{console.error("search messageerror",e)};let ru=(0,K.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==rd(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,eG.a)({type:"RESET"}),recenter:(0,eG.a)({type:"RECENTER"}),rotate:(0,eG.a)({type:"ROTATE"}),zoom:(0,eG.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,eG.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,eG.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,Q.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||i}})(t.mod,n.key)}}),handleUp:(0,Q.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&i}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:rd(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),rh=(0,ee.c)(ru);rh.on("RESET",tN),rh.on("RECENTER",tT),rh.on("ROTATE",tk),rh.on("ZOOM.IN",t$),rh.on("ZOOM.OUT",tM),rh.on("FLOOR.LEVEL.UP",()=>en(eB.levelUp)),rh.on("FLOOR.LEVEL.DOWN",()=>en(eB.levelDown));let rg=(0,K.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:A,next:A,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,Q.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,ee.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!I(t.prev,t.next)},actions:[(0,Q.a)({waited:0}),(0,eG.a)(e=>{var t,n,r,i;let o,a,{context:l}=e;return{type:"LAYOUT",layout:(t=c.fontSize,n=l.next,o=z((i={config:r=function(e,t,n,r){var i;let o,a,l,s,{outer:c,scale:d}=(i=r??n,o=t.width/t.height,s=(l=o>(a=i.width/i.height))?eu(t,a):eh(t,a),{outer:s,inner:l?eu(i,o):eh(i,o),scale:l?i.height/t.height:i.width/t.width,rO:o,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,c.origViewBox,c.origBoundingBox),...ec(r)}).scroll),a=i.container.width/i.container.height,ep(i,a<1?1/a:1,a<1?1:+a,o)),force:!l.first}}),(0,Q.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,Q.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,ee.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return I(t,ej.get().container)},actions:(0,Q.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rx=(0,ee.c)(rg);rx.on("LAYOUT",e=>{let t;return t=e,er(eo.resize,t)}),window.addEventListener("resize",()=>{rx.send({type:"RESIZE"})});let rp=(0,K.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,Q.a)({ticked:!1}),set:(0,Q.a)({ticked:!0}),expire:(0,eG.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),rm=(0,K.mj)({types:{},actions:{getScroll:(0,Q.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,i=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),R(t,n,r,i)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return ey(n)}},actors:{syncScrollLogic:(0,rn.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!ey(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,eG.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,Q.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,eG.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,Q.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rf=(0,ee.c)(rm,{systemId:"system-scroll1"});function ry(e){rf.send(e)}rf.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,er(ei.getDone,t)}),rf.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,er(ei.syncSyncDone,t)});let rv=(a=()=>en(ei.eventExpire),r=rp.provide({delays:{DURATION:500}}),(i=(0,ee.c)(r)).on("EXPIRE",a),i.start(),{tick:function(){i.send({type:"TICK"})}}),rw=(0,J.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function rj(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),rw.trigger.set({names:t}))}async function rS(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rE=`
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
  ${eN}
  ${ez}
  ${eA}
  ${eI}
  ${eW}
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
`,rb=function(){let e=c.cartoConfig?.backgroundColor??c.backgroundColor??"darkgray",t={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n6,{...t,children:c.renderMap(t)}),(0,u.jsx)(nz,{}),(0,u.jsxs)("style",{children:[rE,`body { background-color: ${e}; }`]})]})};function rO(e){let{origViewBox:t,url:n}=e;return(0,u.jsx)("image",{href:n,x:t.x,y:t.y,width:t.width,height:t.height})}function r$(e){let{origViewBox:t,url:n,labels:r}=e;return void 0===r?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("svg",{href:n,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:U(t),children:[(0,u.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),r.map((e,t)=>(0,u.jsxs)("text",{...rN(e.attrs),children:["id"in e.attrs&&"style"in e.attrs&&(0,u.jsx)("style",{children:`#${e.attrs.id} { ${e.attrs.style}; }`}),e.children&&e.children.map((e,t)=>(0,u.jsx)("tspan",{...rN(e.attrs),children:e.text??""},t))]},t))]})}let rM=/^[{].*$/,rk=/^style$/;function rN(e){return Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!t.match(rM)&&!t.match(rk)}).map(e=>{var t;let[n,r]=e;return[!(t=n).match(/^.*-.*$/)||t.match(/^(aria|data)-.*$/)?t:t.split("-").map((e,t)=>{var n;let r;return 0===t?e:(r=(n=e).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}var rT=JSON.parse('{"Main":{"contentId":"g3"}}');let rD={},rL=Object.keys(rT).map(e=>({name:e,href:n(4303)(`./floor-${e}.svg`),labels:rD?.[e]??void 0})),rC=[...Object.entries(JSON.parse('{"AMain-Content-(ViewBox)":{"x":0,"y":0}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})];function rR(e){let[t,n]=e;return n.map(e=>[t,e])}function rA(e){return e.reduce(function(e,t){let[n,r]=t,i=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,i]])},new Map)}let rI=Object.values({Main:{}}).flatMap(function(e){return Object.entries(e)});rA(Array.from(rI).flatMap(rR));let rz=rA(Array.from(rI).flatMap(rR).map(e=>{let[t,n]=e;return[n,t]}));var rH=JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}');!function(e){let t;eX.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;e1.send({type:"INIT",nfloors:t,fidx:n}),e5.postMessage({type:"INIT",cfg:e.floorsConfig})}}),eB.select.add(e=>e1.send({type:"SELECT",fidx:e})),eB.levelUp.add(()=>e1.send({type:"LEVEL.UP"})),eB.levelDown.add(()=>e1.send({type:"LEVEL.DOWN"})),eB.selectDone.add(e=>e1.send({type:"SELECT.DONE",fidx:e})),tO.fullscreen.add(rS),eX.init.add(rj),tO.position.add(()=>{var e;return e={type:"GET"},void ro.send(e)}),ei.eventTick.add(ew),ei.eventTick.add(rv.tick),ei.get.add(()=>ry({type:"GET"})),ei.sync.add(e=>ry({type:"SYNC",pos:e})),ei.syncSync.add(e=>ry({type:"SYNCSYNC",pos:e})),eX.init.add(e=>{if(e.getSearchEntries){let t=e.getSearchEntries(e);rc.postMessage({type:"INIT",entries:t})}}),th.start.add(function(e){rl.send({type:"SEARCH",req:e})}),eo.layout.add(function(e){let{layout:t,force:n}=e;eb({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>e$())}),eo.zoomStart.add(function(e){eb({type:"STYLE.ZOOM",...e}),eb({type:"STYLE.ANIMATION",animation:e.q})}),eo.zoomEnd.add(function(e){eb({type:"STYLE.ZOOM",zoom:e.zoom}),eb({type:"STYLE.ANIMATION",animation:e.q})}),eo.animationEnd.add(function(){eb({type:"STYLE.ANIMATION.END"})}),eo.mode.add(function(e){eb({type:"STYLE.MODE",mode:e})}),ei.eventExpire.add(e$),tO.reset.add(n2),tO.fullscreen.add(n2),tO.position.add(n2),tO.recenter.add(n2),tO.zoomOut.add(n2),tO.zoomIn.add(n2),th.endDone.add(e=>tf.send({type:"DETAIL",...e})),tg.open.add(()=>{let e;return e=!0,er(tg.openDone,e)}),tg.openDone.add(e=>tf.send({type:e?"OPEN":"CANCEL"})),tg.close.add(()=>tf.send({type:"CANCEL"})),tg.closeDone.add(()=>{requestAnimationFrame(()=>void e8.get("detail")?.querySelector(".detail")?.scroll(0,0))}),eB.lock.add(e=>tA({type:"SWITCH",fidx:e})),eB.selectDone.add(()=>tA({type:"SWITCH.DONE"})),th.end.add(e=>tR.send({type:"SEARCH.END",res:e})),tg.open.add(()=>tL.set("locked")),tg.closeDone.add(()=>tA({type:"SEARCH.DONE"})),tg.closeDone.add(()=>tL.set("panning")),ei.getDone.add(e=>{null!==e&&tA({type:"SCROLL.GET.DONE",scroll:e})}),ei.syncSyncDone.add(e=>{null!==e&&tA({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),eo.resize.add(e=>{let{layout:t,force:n}=e;return tA({type:"RESIZE",layout:t,force:n})}),eo.mode.add(tH),eo.zoomStart.add(()=>{tz=!0}),eo.zoomEnd.add(()=>{tz=!1}),tO.reset.add(()=>tA({type:"HOME"})),tO.recenter.add(()=>tA({type:"RECENTER"})),tO.rotate.add(()=>tA({type:"ROTATE"})),tO.zoomOut.add(()=>tA({type:"ZOOM",z:-1,p:null})),tO.zoomIn.add(()=>tA({type:"ZOOM",z:1,p:null})),tD.multiStart.add(()=>en(ei.get)),tD.multiStart.add(()=>tL.set("touching")),tD.multiEnd.add(()=>tL.set("panning")),tD.zoom.add(e=>{let{z:t,p:n}=e;return tA({type:"ZOOM",z:t>0?1:-1,p:n})}),eX.rendered.add(()=>tA({type:"RENDERED"})),e1.start(),rh.start(),ro.start(),rx.start(),rf.start(),rl.start(),eE.start(),nK.start(),tf.start(),tR.start();let n=(d({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:rt,isUiRendered:nF,...e}),d({...c}),{...c,origViewBox:t,...e});eJ(n);let r=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.3.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),r.get("info")){let e=document.getElementById(c.root);if(null===e)throw Error("#root not found!");(0,e4.createRoot)(e).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"svgmapviewer"}),(0,u.jsx)("h2",{children:n.title}),(0,u.jsx)("div",{className:"info",children:(0,u.jsx)(e3.h,{className:"qrcode",marginSize:6,value:document.location.href,width:"60vmin",height:"60vmin"})}),(0,u.jsx)("div",{children:(0,u.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,u.jsx)("style",{children:e6})]})}))}else{let e=document.getElementById(n.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||tz)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(tz){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!nQ)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rh.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rh.send(t)},(0,e4.createRoot)(e).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(rb,{})}));let t=document.getElementById("style-root");if(null===t)throw Error("#style-root not found!");(0,e4.createRoot)(t).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(e7,{})}))}}({renderMap:function(e){let{floors:t,data:{origViewBox:n}}=e,{viewBox:r,width:i,height:o}=function(){let{scroll:e,svg:t}=eO(e=>e.layout);return{viewBox:U(t),width:B(e.width),height:B(e.height)}}(),{fidxToOnAnimationEnd:a,urls:s}=e2();return void 0===t?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"content",children:(0,u.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:i,height:o,children:t.floors.map((e,t)=>(0,u.jsx)(l.Fragment,{children:(0,u.jsxs)("g",{className:`floor fidx-${t}`,onAnimationEnd:a(t),children:[(0,u.jsx)(rO,{origViewBox:n,idx:t,url:s.get(t),onAnimationEnd:a(t),labels:e.labels}),(0,u.jsx)(r$,{origViewBox:n,idx:t,url:s.get(t),onAnimationEnd:a(t),labels:e.labels})]})},t))})})},isMapRendered:function(){return!0},...{root:"root",title:"Higashi-Tsukuba Utopia",copyright:"Map image and info @ Higashi-Tsukuba Utopia, map app @ Daiji Maps",backgroundColor:"white",origViewBox:JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}'),origBoundingBox:rH,zoomFactor:2,floorsConfig:{floors:rL,initialFidx:0},...{getSearchEntries:function(){return rC.map(e=>{let[t,n]=e;return{address:t,pos:n}})},getSearchInfo:function(e){let t=rz.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},renderInfo:function(e){return(0,u.jsx)("p",{children:e.info.title})}}}})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.m=i,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.u=e=>"static/js/async/"+e+"."+({502:"81d3a9a108",760:"4cbab458e4"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,i)=>{if(n){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[n,r,i];return}for(var l=1/0,o=0;o<e.length;o++){for(var[n,r,i]=e[o],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(o--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/HigashiTsukubaUtopia/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,i,[o,l,s]=n,c=0;if(o.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","753","220"],()=>a(4970));l=a.O(l)})();