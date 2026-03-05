(()=>{var e,t,n,r,i={303(e,t,n){var r={"./floor-1F.svg":"901","./floor-2F.svg":"440","./floor-B1F.svg":"851"};function i(e){return n(o(e))}function o(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=303},901(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-1F.206aa7c9.svg"},440(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-2F.2b1d75fb.svg"},851(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-B1F.da789734.svg"},497(e,t,n){"use strict";let r,i,o;var a,l=n(797);let s={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:s,internals:s,origin:s,measures:s,viewbox:s,points:s,lines:s,multilinestrings:s,multipolygons:s},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,l.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(e){return(0,l.createElement)("p",{},e.info.title)}};function d(e){c={...c,...e}}var u=n(617);n(639);var x=n(815),h=n(622);let p=x.Ay$.union([x.Ay$.number(),x.Ay$.string()]),g=x.Ay$.array(p),m=x.Ay$.object({ids:g}),y=h.codec(h.string(),m,{decode:(e,t)=>{try{return JSON.parse(e)}catch(n){return n instanceof h.ZodError&&t.issues.push({code:"invalid_format",format:"json",input:e,message:n.message}),h.NEVER}},encode:e=>JSON.stringify(e)}),f=x.Ay$.union([x.Ay$.number(),x.Ay$.string()]),v=x.Ay$.set(f),S=x.Ay$.object({ids:v}),j=x.Ay$.codec(m,S,{decode:e=>({ids:new Set(e.ids)}),encode:e=>({ids:Array.from(e.ids)})});x.Ay$.pipe(y,j);let w=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var E=n(997);function A(e,t,n){let[r,i,o]=e,[a,l]=t;return r*a+i*l+o*n}function b(e,t,n){return[A(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),A(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function F(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function O(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}var $=n(304);let k=n(853).I3(function(e,t){return $._k.compare(e.x,t.x)||$._k.compare(e.y,t.y)}),M={x:0,y:0};function N(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,i=e.x*n,o=e.y*r;return{...e,x:i,y:o}}function T(e,t,n,r){return{x:e,y:t,width:n,height:r}}let D={x:0,y:0,width:1,height:1};function C(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function R(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function L(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function I(e,t){return{...e,x:t.x,y:t.y}}function z(e){return function(e){let{x:t,y:n,width:r,height:i}=e;return`${t} ${n} ${r} ${i}`}(function(e,t){let{x:n,y:r,width:i,height:o}=e;return{x:t(n),y:t(r),width:t(i),height:t(o)}}(e,function(e){return Math.round(100*e)/100}))}function H(e){let{x:t,y:n,width:r,height:i}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+i}}}function W(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function U(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function q(e){let[[t,n],[r,i]]=e;return{tl:{x:t,y:n},br:{x:r,y:i}}}function Z(e,t){return[b(e,function(e){let[t]=e;return t}(t),0),b(e,function(e){let[,t]=e;return t}(t),0),b(e,function(e){let[,,t]=e;return t}(t),1)]}function Y(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function B(e,t,n,r){var i,o;return i=function(e,t){let[n,r]=t;return[Y(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),Y([-n,-r])].reduce(Z)}("number"==typeof(o=t)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,E.Fs)(e,H,U,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>b(i,e,1)),q,W)}function P(e){return Math.round(100*e)/100}function V(e){return Math.round(1e7*e)/1e7}var X=n(838),_=n(922),G=n(28),J=n(486),K=n(276);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function ee(e){e.forEach(e=>e())}function et(e,t){e.forEach(e=>e(t))}let en={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},er={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function ei(e){return void 0!==e&&"number"==typeof e}function eo(e,t,n,r,i,o){return new DOMMatrixReadOnly(e instanceof Array?e:ei(e)&&ei(t)&&ei(n)&&ei(r)&&ei(i)&&ei(o)?[e,t,n,r,i,o]:void 0)}let ea={container:D,scroll:D,content:eo(),svgOffset:{x:-0,y:-0},svgScale:1,svg:D};function el(e){let{container:t,outer:n,svgScale:r,inner:i}=e,{x:o,y:a}=n;return{container:t,scroll:t,content:eo(),svgOffset:{x:-o,y:-a},svgScale:r,svg:i}}function es(e){let{scroll:t,content:n,svgOffset:r,svgScale:i,svg:o}=e;return eo().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/i,1/i).translate(-o.x,-o.y)}function ec(e,t){let n=e.height,r=n*t;return T((e.width-r)/2,0,r,n)}function ed(e,t){let n=e.width,r=n/t;return T(0,(e.height-r)/2,n,r)}let eu={...ea,config:{fontSize:16,container:D,outer:D,inner:D,svgScale:1}};function ex(e,t){let n=R(e.scroll);return eh(e,t,t,n)}function eh(e,t,n,r){let i=es(e).inverse().transformPoint(r),o=B(e.scroll,[t,n],r.x,r.y),a=N(e.svgOffset,[t,n]),l=B(e.svg,[t,n],i.x,i.y);return{...e,scroll:o,svgOffset:a,svg:l}}function ep(e,t){var n,r;let i=R({...e.scroll,x:0,y:0}),o=(n=i.x,r=i.y,eo().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:o}}function eg(e,t){let n=e.scroll,r=O(N(t,-1),n);return(0,E.Fs)(e,e=>({...e,scroll:L(e.scroll,r)}),e=>{let t,r,i,o,a,l,s;return t=I(e.scroll,n),r=e.content.inverse(),o=F(i=R(e.scroll),O(e.scroll,n)),a=r.transformPoint(i),l=N(O(r.transformPoint(o),a),-e.svgScale),s=L(e.svg,l),{...e,scroll:t,svg:s}})}function em(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;if(null===n)return!1;let a=i-e.width,l=o-e.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${e.width}, ${e.height}]`),!1;let s=Math.round(-e.x),c=Math.round(-e.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==s&&(t.scrollLeft=s),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=t.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let ey={scroll:D,client:{width:0,height:0},timeStamp:0};function ef(e){let t=e.currentTarget;null!==t&&(ey={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let ev=(0,_.e)(eu),eS=(0,G.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,J.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,J.a)({}),updateSvgMatrix:(0,J.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:i}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-i.x,-i.y)}(t)}}),updateGeoMatrix:(0,J.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,J.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,i=Math.max(n.width,n.height)/2*r,o=Math.round(Math.log10(i)),a=(t=i/Math.pow(10,o-1),Q.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,J.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:eu,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:M,distanceRadius:{svg:0,client:0},geoRange:{start:M,end:M},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,J.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return ev.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,K.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,J.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,J.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,J.a)({animation:e=>{let{event:{animation:t}}=e;return null===t?"":function(e){let{matrix:t,origin:n}=e,r=eo();return`
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
    transform: ${t.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(t)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,J.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({animation:null,animating:!1}),target:"Idle"}}}}}),ej=(0,K.c)(eS,{systemId:"system-viewer1"});function ew(e){ej.send(e)}function eE(e){return(0,X.d4)(ej,t=>e(t.context))}function eA(){ew({type:"STYLE.SCROLL",currentScroll:ey})}function eb(){return eE(e=>e.layout.container)}function eF(){return eE(e=>e.distanceRadius)}let eO=`
position: absolute;
left: 0;
top: 0;
`,e$=`
position: absolute;
right: 0;
top: 0;
`,ek=`
position: absolute;
left: 0;
bottom: 0;
`,eM=`
position: absolute;
right: 0;
bottom: 0;
`,eN=`
margin: 0;
`,eT=`
padding: 0;
`,eD=`
${eN} ${eT}
`,eC=`
box-sizing: border-box;
`,eR=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eL=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eI=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,ez=`
-webkit-user-select: none;
user-select: none;
`,eH=`
touch-action: none;
`,eW=`
pointer-events: none;
`,eU=`
pointer-events: initial;
`,eq=`
background-color: rgba(255, 255, 255, 0.5);
`,eZ=`
cubic-bezier(0, 0, 0, 1)
`,eY=`
cubic-bezier(1, 0, 1, 1)
`,eB=`
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
`,eP={lock:new Set,select:new Set,selectDone:new Set,unlock:new Set},eV={init:new Set,rendered:new Set},eX=function(e){et(eV.init,e)},e_=function(){ee(eV.rendered)},eG=(0,_.e)(0),eJ=(0,G.mj)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null,blobs:new Map,urls:new Map},initial:"Idle",on:{IMAGE:{actions:(0,J.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Idle:{on:{SELECT:[{guard:e=>{let{event:t}=e;return t.force??!1},actions:[(0,J.a)({fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eG.set(t.fidx)}]},{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,J.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eG.set(t.fidx)}],target:"Animating"}]}},Animating:{on:{"SELECT.DONE":{actions:(0,J.a)({prevFidx:null}),target:"Idle"}}}}}),eK=(0,K.c)(eJ),eQ=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function e0(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,X.d4)(eK,t=>e(t.context))),i=(0,l.useMemo)(()=>(function(e,t,n){let r=c.floorsConfig;if(void 0===r)return null;let i=r.floors.map((r,i)=>{var o,a,l,s,c,d,u;return o=e,a=t,l=n,(s=i)!=o||l?s===a?(c=s,`
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
${eB}
`})(t,n,void 0===r.get(t)),[t,n,r]),o=(0,l.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,et(eP.selectDone,n))},[t]),a=(0,l.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,et(eP.lock,r))},[t,n]);return{fidx:t,prevFidx:n,style:i,fidxToOnAnimationEnd:o,fidxToOnClick:a,urls:r}}eQ.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;eK.send({type:"IMAGE",fidx:e,blob:n})}}},eQ.onerror=e=>{console.error("floors error",e)},eQ.onmessageerror=e=>{console.error("floors messageerror",e)};var e1=n(284);function e5(){let e=eE(e=>e.rendered);(0,l.useEffect)(()=>{requestAnimationFrame(()=>e_())},[e]);let t=eE(e=>e.shown),n=eE(e=>e.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${eZ};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",r=eE(e=>e.layout.scroll),i=`
.content {
  width: ${P(r.width)}px;
  height: ${P(r.height)}px;
}
`;return(0,u.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,i]})}let e2=new Map;function e3(e,t,n){(0,l.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:e2.get(n)??null;if(null===r)return;let i=r.querySelector(`#${e}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});e2.set(e,o),(0,e1.createRoot)(o).render(t)})(e,t,n),[e,n,t])}let e6={bus:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,u.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,u.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,u.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,u.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,u.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,u.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,u.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,u.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,u.jsx)("use",{x:"8.5",href:"#_person2"}),(0,u.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,u.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,u.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,u.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,u.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,u.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,u.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,u.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,u.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,u.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,u.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,u.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,u.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,u.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,u.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,u.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,u.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,u.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,u.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function e4(){return(0,u.jsx)("g",{className:"assets",children:(0,u.jsx)(e7,{})})}function e7(){return(0,u.jsx)("g",{className:"symbols",children:Object.entries(e6).map((e,t)=>{let[n,r]=e;return(0,u.jsx)(l.Fragment,{children:r({id:n})},t)})})}function e8(e){return e>.5?-1:+(e<.5)}function e9(e){return e<.3?1:e>.7?-1:0}function te(e,t,n,r){let i={x:t/2,y:n/2},o=t/20,a=o/2;function l(t){var n;let r,i;return n={x:e.h,y:e.v},r=t.x*n.x,i=t.y*n.y,{...t,x:r,y:i}}let s=e.th<Math.PI/4,c=0===e.v,d=0===e.h,u=l(N(i,-1)),x=l(c||d?O(N(i,-1),{x:r,y:r}):O(N(i,-1),{x:s?r:0,y:s?0:r})),[h,p]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],g=F(u,h),m=F(u,p);return{p:u,q:x,a:g,b:m}}function tt(e){return{open:e,animating:!1}}function tn(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tr(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function ti(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function to(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function ta(e){let{open:t,animating:n}=e;return t||n}var tl=n(269);let ts={start:new Set,end:new Set,endDone:new Set},tc={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},td={p:M,psvg:M,fidx:0,layout:ea,info:{title:""}};function tu(e){return function(t,n){let r=t[n],i=e(r);return t[n]=null===i?r:i,t}}let tx=(0,G.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return ta(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return ta(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,J.a)({canceling:()=>!0}),endCancel:(0,J.a)({canceling:()=>!1}),open:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tu(tn)(n,r)}}),close:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tu(ti)(n,r)}}),handle:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tu(n[r].open?tr:to)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:td,m:{header:tt(!0),detail:tt(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,J.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:i}}=e;return{psvg:t,p:es(i).transformPoint(t),fidx:n,info:r,layout:i}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,K.n)("isDetailVisible")},{actions:(0,J.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,K.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,J.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tl.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,J.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,K.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,J.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,K.r)({type:"DONE"})]}}}}}),th=(0,K.c)(tx);function tp(){return(0,X.d4)(th,e=>e.context)}function tg(){return tp().m.header}function tm(){return tp().m.detail}function ty(e){return(0,u.jsxs)("div",{className:"balloon",children:[(0,u.jsx)(tv,{...e}),e.children,(0,u.jsx)("style",{children:tf})]})}th.on("CLOSE.DONE",()=>ee(tc.closeDone));let tf=`
.balloon,
.balloon-svg {
  ${eO}
  ${eW}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tv(e){let t=e._hv;if(null===t)return(0,u.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(e,t){let{bw:n,bh:r,lh:i,d:o,width:a,height:l}=t,s=T(-a/2,-a/2,a,l),{body:c,leg:d}=function(e,t,n,r){let i={x:t/2,y:n/2},o=`
m${-i.x},${-i.y}
h${t}
v${n}
h${-t}
z
`,{p:a,q:l,a:s,b:c}=te(e,t,n,r),d=O(l,s),u=O(c,l),x=O(a,c);return{body:o,leg:`
m${s.x},${s.y}
l${d.x},${d.y}
l${u.x},${u.y}
l${x.x},${x.y}
z
`}}(e,n,r,i);return{viewBox:s,width:a,height:l,bg:`M${o},${o}`+c+`M${o},${o}`+d,fg:"M0,0"+c+"M0,0"+d}}(t,e._size);return(0,u.jsxs)("svg",{className:"balloon-svg",viewBox:z(n),width:r,height:i,children:[(0,u.jsx)("path",{className:"bg",d:a}),(0,u.jsx)("path",{className:"fg",d:o}),(0,u.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tS(e){let{_p:t,_hv:n,_size:r,_leg:i}=e,o=tm(),a=null!==t&&null!==n&&ta(o)?function(e,t,n,r,i){let{open:o,animating:a}=e,{width:l,height:s}=r,c=N(i.q,-1);if(a){let[e,n]=o?[0,1]:[1,0],[r,i]=o?[0,1]:[1,0],[a,d]=o?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[u,x]=o?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],h=o?eZ:eY;return`
.detail,
.balloon {
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --dp-x: ${c.x}px;
  --dp-y: ${c.y}px;
  --oa: ${e};
  --ob: ${n};
  --sa: ${r};
  --sb: ${i};
  --timing: ${h};
  --dxa: ${a};
  --dxb: ${u};
  --dya: ${d};
  --dyb: ${x};
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
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
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
`}(o,t,0,r,i):".balloon, .detail { visibility: hidden; }";return(0,u.jsx)("style",{children:a})}let tj={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},tw=()=>ee(tj.zoomIn),tE=()=>ee(tj.zoomOut),tA=()=>ee(tj.rotate),tb=()=>ee(tj.reset),tF=()=>ee(tj.recenter),tO={multiStart:new Set,multiEnd:new Set,zoom:new Set},t$=(0,_.e)("panning");t$.subscribe(e=>{let t;return t=e,et(er.mode,t)});let tk=(0,G.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,J.a)({rendered:!0}),emitGetScroll:(0,tl.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tl.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}),emitSyncScrollSync:(0,tl.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}),calcZoomAnimation:(0,J.a)({animation:e=>{var t,n,r,i,o,a,l,s,d,u,x,h,p;let g,m,y,f,v,S,j,w,{context:{animationReq:E,layout:A}}=e;return null===E?null:"zoom"===E.type?(t=A,n=E.z,r=E.p,g=es(t).inverse().transformPoint(r),m=1/(i=n,Math.pow(c.zoomFactor,i)),y=eo().scale(1/m,1/m),{type:"Zoom",svg:B(t.svg,m,g.x,g.y),svgScale:t.svgScale*m,q:y,o:r}):"home"===E.type?(o=A,f=R((a=function(e){let{config:t,content:n}=e;return{config:t,...el(t),content:n}}(A)).config.inner),v=es(o).transformPoint(f),S=a.svgScale/o.svgScale,w=(function(e,t){if(e instanceof DOMMatrixReadOnly)return eo(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return eo(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((j=R(o.container)).x-v.x,j.y-v.y).multiply((l=1/S,s=1/S,d=v.x,u=v.y,eo().scale(l,s,1,d,u,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:w,o:null}):(x=0,h=90,p=E.p,{type:"Rotate",deg:90,q:eo().rotate(90),o:p})}}),updateLayoutFromZoom:(0,J.a)({prevLayout:e=>{let{context:{layout:t}}=e;return t},layout:e=>{let{context:{layout:t,animation:n}}=e;return function(e,t){var n,r,i;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:I(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,i=t.svgScale,{...e,svg:r,svgScale:i}):ep(e,t.deg)}(t,n)}}),endZoom:(0,J.a)({prevLayout:null,animation:null,zoom:e=>{let{context:{zoom:t,animationReq:n}}=e;return t*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:e=>{let{context:{rotate:t,animationReq:n}}=e;return t+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,J.a)({cursor:e=>{let{context:{origLayout:t}}=e;return R(t.container)},layout:e=>{let{context:{origLayout:t,rotate:n}}=e;return ep(ex(t,9),n)}}),emitSyncAnimation:(0,tl.a)(e=>{let{context:{animation:t}}=e;return{type:"SYNC.ANIMATION",animation:t}}),emitZoomStart:(0,tl.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.START",layout:t,zoom:n}}),emitZoomEnd:(0,tl.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.END",layout:t,zoom:n}}),resetCursor:(0,J.a)({cursor:e=>{let{context:{layout:t}}=e;return R(t.container)}}),resizeLayout:(0,J.a)({rendered:!1,origLayout:(e,t)=>{let{layout:n}=t;return n},layout:(e,t)=>{let{layout:n}=t;return ex(n,9)}}),updateLayoutFromScroll:(0,J.a)({layout:e=>{let{context:t}=e,{scroll:n}=ey;return eg(t.layout,n)}}),emitSyncLayout:(0,tl.a)(e=>{let{context:{layout:t,rendered:n}}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}),emitSearchStart:(0,tl.a)(e=>{let{context:{layout:t,cursor:n}}=e,{scroll:r}=ey;return{type:"SEARCH.START",req:{psvg:es(eg(t,r)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,tl.a)((e,t)=>{let{context:n}=e,{res:r}=t,{scroll:i}=ey,o=eg(n.layout,i);return{type:"SEARCH.END.DONE",res:null===r?null:{...r,layout:o}}}),emitSwitch:(0,tl.a)((e,t)=>{let{fidx:n}=t;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,tl.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:eu,prevLayout:null,layout:eu,cursor:R(eu.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,K.e)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:(0,J.a)({cursor:e=>{let{event:{pos:t}}=e;return t}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,J.a)({animationReq:e=>{let{context:{layout:t},event:{z:n,p:r}}=e;return{type:"zoom",z:n,p:r??R(t.container)}}}),target:"Zooming"},HOME:{actions:(0,J.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,J.a)({animationReq:e=>{let{context:{layout:t}}=e;return{type:"rotate",deg:90,p:R(t.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,J.a)({animationReq:null}),type:"final"}}}}}),tM=(0,K.c)(tk,{systemId:"system-viewer1"});function tN(e){tM.send(e)}tM.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,et(ts.start,t)}),tM.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tM.send({type:"SEARCH.DONE"}):(t=r,et(ts.endDone,t),n=r.psvg,et(tc.open,n))}),tM.on("ZOOM.START",e=>{let t;return t=e,et(er.zoomStart,t)}),tM.on("ZOOM.END",e=>{let t;return t=e,et(er.zoomEnd,t)}),tM.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,et(eP.select,t)}),tM.on("SWITCH.DONE",()=>ee(eP.unlock)),tM.on("SYNC.ANIMATION",e=>{let t,{animation:n}=e,r=(null==n?void 0:n.q)??null,i=(null==n?void 0:n.o)??null;null!==r&&(t={matrix:r,origin:i},et(er.animation,t))}),tM.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},et(er.layout,t)}),tM.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,et(en.sync,t)}),tM.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,et(en.syncSync,t)}),tM.on("SCROLL.GET",()=>ee(en.get));let tT=!1,tD=!1;function tC(e){tT="locked"===e,tD="locked"===e}function tR(){let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tL),()=>{t.removeEventListener("wheel",tL)}},[e]),e}function tL(e){let t=e.currentTarget;tD&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function tI(e){let t,{_detail:n}=e,r=tR();return(0,u.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void th.send(e)},children:[c.renderInfo&&(1!==(t=Object.values(n.info)).length||"string"!=typeof t[0]||""!==t[0])&&c.renderInfo({info:n.info}),(0,u.jsx)("style",{children:tz})]})}let tz=`
.detail {
  ${eO}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eU}
  ${eC}
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
  ${ez}
  margin: 1.5em;
  text-align: center;
}

p {
  ${ez}
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
`;function tH(){return e3("detail",(0,u.jsx)(tW,{}),"ui"),(0,u.jsx)("div",{id:"detail"})}function tW(){return(0,u.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,u.jsx)(tU,{}),(0,u.jsx)(tq,{})]})}function tU(){let e,t,n,r,i,o,a,l,s,c,d,x,h=tp().detail,p=(o=h.p,a=h.layout,l=function(e,t){let{x:n,y:r}=t,i=e.width/e.height,o={x:n/e.width,y:r/e.height},a=i>1?e8(o.x):e9(o.x);return{h:a,v:i>1?e9(o.y):e8(o.y),th:Math.atan2(e.height,e.width)}}(h.layout.container,o),s=a.container.width,t=50*(e=.01*Math.min(s,c=a.container.height)),n=50*e,r=10*e,i=t/100,x=te(l,(d={bw:t,bh:n,lh:r,d:i,width:t+2*r+2*i,height:n+2*r+2*i}).bw,d.bh,d.lh),{_p:o,_hv:l,_W:s,_H:c,_size:d,_leg:x});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ty,{...p}),(0,u.jsx)(tI,{_detail:h}),(0,u.jsx)(tS,{...p})]})}function tq(){return(0,u.jsx)("svg",{id:"ui-svg-defs",children:(0,u.jsx)("defs",{children:(0,u.jsx)(e4,{})})})}function tZ(){return e3("footer",(0,u.jsx)(tY,{}),"ui"),(0,u.jsx)("div",{id:"footer"})}function tY(){let e=c;return(0,u.jsxs)("div",{className:"ui-content footer",children:[(0,u.jsx)("p",{children:e.copyright}),(0,u.jsxs)("style",{children:[tB,(0,u.jsx)(tP,{})]})]})}let tB=`
.footer {
  ${ek}
  ${eL}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${ez}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function tP(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eY;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function tV(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("g",{id:"measure",children:(0,u.jsx)(tG,{})})})}function tX(){let{svg:e}=eF();return(0,u.jsxs)("div",{id:"distance",children:[(0,u.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),t0.map(t=>(0,u.jsxs)(l.Fragment,{children:[(0,u.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,u.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,u.jsx)("style",{children:(0,u.jsx)(tQ,{})})]})}function t_(){let e=eE(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${V(Math.abs(e.x))}`,i=`${n} ${V(Math.abs(e.y))}`;return(0,u.jsxs)("div",{id:"coordinate",children:[(0,u.jsx)("p",{id:"longitude",children:r}),(0,u.jsx)("p",{id:"latitude",children:i}),(0,u.jsx)("style",{children:(0,u.jsx)(tK,{})})]})}function tG(){let{width:e,height:t}=eb(),{client:n}=eF(),r=(0,l.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),i=(0,l.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),o=(0,l.useMemo)(()=>t0.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,u.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((e,t)=>(0,u.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function tJ(){let{open:e,animating:t}=tg(),[n,r]=e?[0,1]:[1,0],i=t?`
.guides {
  --timing: ${e?eZ:eY};
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
`;return(0,u.jsx)(u.Fragment,{children:i})}function tK(){let{width:e,height:t}=eb(),n=`
#distance,
#coordinate {
  ${eO}
  width: ${e}px;
  height: ${t}px;
}
`,r=`
#longitude {
  ${eM}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-t/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${ek}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,u.jsxs)(u.Fragment,{children:[n,r,i]})}function tQ(){let{width:e,height:t}=eb(),{client:n}=eF(),r=`
.distance {
  ${eO}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${e/2}px, ${t/2}px) scale(0.5);
}
`,o=t0.map(r=>`
#distance-x-${r+1} {
  transform: translate(${e/2+n*(r+1)}px, ${t/2}px) scale(0.5);
}
`),a=t0.map(r=>`
#distance-y-${r+1} {
  transform: translate(${e/2}px, ${t/2+n*(r+1)}px) scale(0.5);
}
`);return(0,u.jsxs)(u.Fragment,{children:[i,r,o,a]})}let t0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function t1(){return e3("guides",(0,u.jsx)(t5,{}),"ui"),(0,u.jsx)("div",{id:"guides"})}function t5(){var e;return!((null==(e=c.uiConfig)?void 0:e.showGuides)??!0)||c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"ui-content guides",children:[(0,u.jsx)("svg",{className:"guides",children:(0,u.jsx)(tV,{})}),(0,u.jsx)(tX,{}),(0,u.jsx)(t_,{}),(0,u.jsxs)("style",{children:[t2,(0,u.jsx)(tJ,{})]})]})}let t2=`
.guides {
  ${eO}
  ${eR}
  ${eW}
  z-index: 2;
}

text {
  ${ez}
}
`;function t3(){let{fidx:e,fidxToOnClick:t}=e0(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"floors",children:[(0,u.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:i}=n;return(0,u.jsx)("li",{className:`floor-item ${t8(r===e)}`,onClick:t(r),children:i},r)})}),(0,u.jsx)("style",{children:t6})]})}let t6=`
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
  ${eq}
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
`;function t4(){let{fidx:e}=e0(),t=c.floorsConfig;return void 0===t||t.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{children:[t.floors.map((t,n)=>(0,u.jsx)("h2",{className:`floor-name ${t8(n===e)}`,children:t.name},n)),(0,u.jsx)("style",{children:t7})]})}let t7=`
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
`;function t8(e){return e?"selected":"unselected"}function t9(){return e3("header",(0,u.jsx)(ne,{}),"ui"),(0,u.jsx)("div",{id:"header"})}function ne(){let e=c;return(0,u.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void th.send(e)},children:[(0,u.jsx)("h1",{className:"title",onClick:()=>tb(),children:e.title}),(0,u.jsx)(t4,{}),(0,u.jsxs)("style",{children:[nt,(0,u.jsx)(nn,{})]})]})}let nt=`
.header {
  ${eO}
  ${eL}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${ez}
  ${eU}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function nn(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eY;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function nr(){return e3("left",(0,u.jsx)(ni,{}),"ui"),(0,u.jsx)("div",{id:"left"})}function ni(){return(0,u.jsxs)("div",{className:"ui-content left bottom",children:[(0,u.jsx)(t3,{}),(0,u.jsxs)("style",{children:[no,(0,u.jsx)(na,{})]})]})}let no=`
.left {
  ${eO}
  ${eI}
  padding: 0.4em;
  font-size: smaller;
  ${eW}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eY;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function nl(){return(0,u.jsx)("div",{className:"button-item fullscreen",onClick:()=>ee(tj.fullscreen),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ns})})})}let ns=`
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
`;function nc(){return(0,u.jsx)("div",{className:"button-item home",onClick:()=>tb(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nd})})})}let nd=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nu(){return c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"button-item position",onClick:()=>ee(tj.position),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:np})})})}let nx=3*Math.sqrt(2),nh=nx+6,np=`
M 0,0
m 0,${nh/2}
l -3,-3
a ${nx},${nx} 0,1,1 6,0
z
m 0,${-nh+nx+nx/2}
a ${nx/2},${nx/2} 0,1,0 0,${-nx}
a ${nx/2},${nx/2} 0,1,0 0,${nx}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function ng(){return(0,u.jsx)("div",{className:"button-item recenter",onClick:()=>tF(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nm})})})}let nm=`
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
`;function ny(){return(0,u.jsx)("div",{className:"button-item rotate",onClick:()=>tA(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nf})})})}let nf=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nv(){return(0,u.jsx)("div",{className:"button-item zoom-in",onClick:()=>tw(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nS})})})}let nS=`
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
`;function nj(){return(0,u.jsx)("div",{className:"button-item zoom-out",onClick:()=>tE(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nw})})})}let nw=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nE(){return e3("right",(0,u.jsx)(nA,{}),"ui"),(0,u.jsx)("div",{id:"right"})}function nA(){return(0,u.jsxs)("div",{className:"ui-content right bottom",children:[(0,u.jsx)(nF,{}),(0,u.jsx)("style",{children:nb})]})}let nb=`
.right {
  ${e$}
  ${eI}
  padding: 0.4em;
  font-size: smaller;
  ${eW}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nF(){return(0,u.jsxs)("div",{className:"button",children:[(0,u.jsx)(nu,{}),(0,u.jsx)(nc,{}),(0,u.jsx)(nl,{}),(0,u.jsx)(ng,{}),(0,u.jsx)(ny,{}),(0,u.jsx)(nj,{}),(0,u.jsx)(nv,{}),(0,u.jsxs)("style",{children:[nO,(0,u.jsx)(n$,{})]})]})}let nO=`
.button {
  font-size: large;
  margin: 0;
  ${eL}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${eU}
  cursor: default;
  ${eq}
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
`;function n$(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eY;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function nk(){return e3("screen",(0,u.jsx)(nM,{}),"ui"),(0,u.jsx)("div",{id:"screen"})}function nM(){let e=tR();return(0,u.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>ee(tc.close),children:(0,u.jsxs)("style",{children:[nN,(0,u.jsx)(nT,{})]})})}let nN=`
.screen {
  ${eO}
  ${eR}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nT(){let{open:e,animating:t}=tm(),n=eE(e=>e.animating);if(!t)return e?(0,u.jsx)(u.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,u.jsx)(u.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,u.jsx)(u.Fragment,{children:".screen { display: none; }"});{let[t,n]=e?[0,.3]:[.3,0],r=e?eZ:eY;return(0,u.jsx)(u.Fragment,{children:`
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
`})}}function nD(){return e3("ui",(0,u.jsx)(nC,{})),(0,u.jsx)("div",{id:"ui"})}function nC(){return(0,u.jsxs)("div",{className:"ui",children:[(0,u.jsx)(nk,{}),(0,u.jsx)(t9,{}),(0,u.jsx)(tZ,{}),(0,u.jsx)(nr,{}),(0,u.jsx)(nE,{}),(0,u.jsx)(t1,{}),(0,u.jsx)(tH,{})]})}function nR(){var e,t,n;let r;return null!==(r=(null==(n=document.querySelector("#ui"))||null==(t=n.shadowRoot)||null==(e=t.children)?void 0:e.length)??null)&&r>0}function nL(){tF()}var nI=n(469),nz=n(336),nH=n(5);let nW=nI.OZ(k),nU=nz.aU($._k),nq=nz.tf(),nZ=nz.JI($.Eq,nI.CA());function nY(e){return(0,E.Fs)(e,nz.zu(nW),nI.x1(e=>0===e.length?nH.dv:nH.zN(e[0])))}function nB(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:N(t,1/e.length)}function nP(e){return new Map((0,E.Fs)(e.changedTouches,Array.from,nI.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let nV=(0,G.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z}},actions:{updateTouches:(0,J.a)({touches:e=>{var t;let n,r,i,a,l,s,c,d,u,{context:{touches:x},event:h}=e;return"TOUCH.START"===h.type?(t=h.ev,i=nB(r=nY(n=nZ.concat(x.vecs,nP(t)))),l=2!==r.length?null:.5>Math.abs((a=O(r[0],r[1])).y/a.x),{...x,vecs:n,points:r,cursor:i,horizontal:l}):"TOUCH.MOVE"===h.type?function(e,t,n){var r,i,a,l;let s,c=nP(t),d=nU.mapWithIndex(e.vecs,(e,t)=>(0,E.Fs)(c.get(e),nH.k$,nH.AU(()=>t,nI.xW(t)))),u=nY(d),x=nB(u),[h,p]=u;if(null===x||h===o||p===o)return{...e,vecs:d,points:u,cursor:x};let g=(r=e.dists,i=Math.sqrt((a=h,l=p,Math.pow(a.x-l.x,2)+Math.pow(a.y-l.y,2))),s=Math.pow((r.length>0?r[0]:i)-i,2),0===r.length||s>0?[i,...r]:r),m=function(e){let[t,n,r,i]=e;return t===o||n===o||r===o||i===o?null:t<n&&n<r&&r<i?-1:t>n&&n>r&&r>i?1:null}(g);return{vecs:d,points:u,cursor:x,dists:g,z:m,horizontal:e.horizontal}}(x,h.ev,0):"TOUCH.END"===h.type?(s=nP(h.ev),u=nB(d=nY(c=nq.filterMapWithIndex(x.vecs,(e,t)=>s.has(e)?nH.dv:nH.zN(t)))),{vecs:c,points:d,cursor:u,dists:0===c.size?[]:x.dists,z:0===c.size?null:x.z,horizontal:x.horizontal}):x}}),raiseOp:(0,K.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,J.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),emitMulti:(0,tl.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,tl.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),nX=(0,K.c)(nV),n_=!1;function nG(e){nX.send({type:"TOUCH.START",ev:e})}function nJ(e){nX.send({type:"TOUCH.MOVE",ev:e})}function nK(e){nX.send({type:"TOUCH.END",ev:e})}function nQ(){nX.send({type:"CANCEL"})}function n0(e){tT||tN({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n1(e){let t;null!==e&&(t=e,et(en.eventTick,t))}function n5(e){return(0,u.jsxs)("div",{id:"viewer",className:"container",onTouchStart:nG,onTouchMove:nJ,onTouchEnd:nK,onClick:n0,onContextMenu:nL,onScroll:n1,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),tN(t),ee(er.animationEnd)},children:[e.children,(0,u.jsx)(n2,{})]})}function n2(){let e=`
.container {
  ${eO}
  ${eR}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("style",{children:e}),(0,u.jsx)(n3,{}),(0,u.jsx)(n6,{}),(0,u.jsx)(n4,{})]})}function n3(){let e=eE(e=>e.layout.content),t=`
.content {
  ${eO}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,u.jsx)("style",{children:t})}function n6(){let e=eE(e=>e.animation);return(0,u.jsx)("style",{children:e})}function n4(){let{style:e}=e0();return null===e?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("style",{children:e})}function n7(){return null!==document.querySelector(".container")}nX.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(n_=!0,ee(tO.multiStart)):(ee(tO.multiEnd),n_=!1)}),nX.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,i=n.z;null!==r&&null!==i&&(t={z:i>0?1:-1,p:r},et(tO.zoom,t))});var n8=n(685);async function n9(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let re=(0,G.mj)({types:{events:{},emitted:{}},actors:{api:(0,n8.Sx)(()=>n9(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,J.a)({position:e=>{let{event:t}=e;return t.output}}),(0,tl.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,J.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rt=(0,K.c)(re),rn=(0,G.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tl.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tl.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),rr=(0,K.c)(rn);function ri(e){rr.send(e)}rr.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=c.mapCoord.matrix.inverse().transformPoint(t),r=eG.get();ro.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rr.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,et(ts.end,t)});let ro=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function ra(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}ro.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":ri({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=t.res,null===(r=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),ri({type:"SEARCH.DONE",res:null})):ri({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",t.error),ri({type:"SEARCH.DONE",res:null})}},ro.onerror=e=>{console.error("search error",e)},ro.onmessageerror=e=>{console.error("search messageerror",e)};let rl=(0,G.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ra(t)}},actions:{reset:(0,tl.a)({type:"RESET"}),recenter:(0,tl.a)({type:"RECENTER"}),rotate:(0,tl.a)({type:"ROTATE"}),zoom:(0,tl.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),handleDown:(0,J.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||i}})(t.mod,n.key)}}),handleUp:(0,J.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&i}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ra(t)}}}},{actions:"handleUp"}]}}}}),rs=(0,K.c)(rl);rs.on("RESET",tb),rs.on("RECENTER",tF),rs.on("ROTATE",tA),rs.on("ZOOM.IN",tw),rs.on("ZOOM.OUT",tE);let rc=(0,G.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:D,next:D,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,J.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,K.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!C(t.prev,t.next)},actions:[(0,J.a)({waited:0}),(0,tl.a)(e=>{var t,n,r,i,o,a;let l,s,{context:d}=e;return{type:"LAYOUT",layout:(t=c.fontSize,n=d.next,r=c.origViewBox,i=c.origBoundingBox,console.log("viewbox",r),console.log("bbox",i),l=R((a={config:o=function(e,t,n,r){var i;let o,a,l,s,{outer:c,scale:d}=(i=r??n,o=t.width/t.height,s=(l=o>(a=i.width/i.height))?ec(t,a):ed(t,a),{outer:s,inner:l?ec(i,o):ed(i,o),scale:l?i.height/t.height:i.width/t.width,rO:o,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,r,i),...el(o)}).scroll),s=a.container.width/a.container.height,eh(a,s<1?1/s:1,s<1?1:+s,l)),force:!d.first}}),(0,J.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,J.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,K.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return C(t,ev.get().container)},actions:(0,J.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rd=(0,K.c)(rc);rd.on("LAYOUT",e=>{let t;return t=e,et(er.resize,t)}),window.addEventListener("resize",()=>{rd.send({type:"RESIZE"})});let ru=(0,G.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,J.a)({ticked:!1}),set:(0,J.a)({ticked:!0}),expire:(0,tl.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),rx=(0,G.mj)({types:{},actions:{getScroll:(0,J.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,i=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),T(t,n,r,i)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return em(n)}},actors:{syncScrollLogic:(0,n8.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!em(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,tl.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,J.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,tl.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,J.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rh=(0,K.c)(rx,{systemId:"system-scroll1"});function rp(e){rh.send(e)}rh.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.getDone,t)}),rh.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.syncSyncDone,t)});let rg=(a=()=>ee(en.eventExpire),r=ru.provide({delays:{DURATION:500}}),(i=(0,K.c)(r)).on("EXPIRE",a),i.start(),{tick:function(){i.send({type:"TICK"})}}),rm=(0,_.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function ry(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),rm.trigger.set({names:t}))}async function rf(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rv=`
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
  ${eO}
  ${eR}
  ${eD}
  ${eC}
  ${eH}
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

${w}
`,rS=function(){var e;let t=(null==(e=c.cartoConfig)?void 0:e.backgroundColor)??c.backgroundColor??"darkgray",n={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n5,{...n,children:c.renderMap(n)}),(0,u.jsx)(nD,{}),(0,u.jsxs)("style",{children:[rv,`body { background-color: ${t}; }`]})]})};function rj(e){let{origViewBox:t,url:n}=e;return(0,u.jsx)("image",{href:n,x:t.x,y:t.y,width:t.width,height:t.height})}function rw(e){let{origViewBox:t,url:n,labels:r}=e;return void 0===r?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("svg",{href:n,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:z(t),children:[(0,u.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),r.map((e,t)=>(0,u.jsxs)("text",{...rb(e.attrs),children:["id"in e.attrs&&"style"in e.attrs&&(0,u.jsx)("style",{children:`#${e.attrs.id} { ${e.attrs.style}; }`}),e.children&&e.children.map((e,t)=>(0,u.jsx)("tspan",{...rb(e.attrs),children:e.text??""},t))]},t))]})}let rE=/^[{].*$/,rA=/^style$/;function rb(e){return Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!t.match(rE)&&!t.match(rA)}).map(e=>{var t;let[n,r]=e;return[!(t=n).match(/^.*-.*$/)||t.match(/^(aria|data)-.*$/)?t:t.split("-").map((e,t)=>{var n;let r;return 0===t?e:(r=(n=e).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}var rF=JSON.parse('{"B1F":{"contentId":"g352"},"1F":{"contentId":"g183"},"2F":{"contentId":"g339"}}');let rO={},r$=Object.keys(rF).map(e=>({name:e,href:n(303)(`./floor-${e}.svg`),labels:(null==rO?void 0:rO[e])??void 0})),rk=Object.values(JSON.parse('{"B1F":{"AB1F-Content-(ViewBox)":{"x":0,"y":0},"AB1F-Facilities-1":{"x":-23,"y":67},"AB1F-Facilities-2":{"x":15.983,"y":56},"AB1F-Facilities-3":{"x":31.958,"y":51.667},"AB1F-Facilities-4":{"x":-7.833,"y":92.208},"AB1F-Facilities-5":{"x":47,"y":84.042},"AB1F-Facilities-6":{"x":-2,"y":66.083},"AB1F-Facilities-7":{"x":-5,"y":82},"AB1F-Facilities-8":{"x":27,"y":89}},"1F":{"A1F-Content-(ViewBox)":{"x":0,"y":0},"A1F-Facilities-1":{"x":-8,"y":67.5},"A1F-Facilities-2":{"x":26,"y":49.5},"A1F-Facilities-3":{"x":-44.218,"y":119.014},"A1F-Facilities-4":{"x":-23,"y":67},"A1F-Facilities-5":{"x":-124.056,"y":-73},"A1F-Facilities-6":{"x":-110,"y":-73},"A1F-Facilities-7":{"x":26,"y":-65.5},"A1F-Facilities-8":{"x":18,"y":-65.5},"A1F-Facilities-9":{"x":146,"y":-73},"A1F-Facilities-10":{"x":168.056,"y":-73},"A1F-Facilities-11":{"x":-6.944,"y":113.056},"A1F-Facilities-12":{"x":27,"y":92},"A1F-Facilities-13":{"x":17,"y":62},"A1F-Facilities-14":{"x":154,"y":-73},"A1F-Facilities-15":{"x":-102,"y":-73},"A1F-Shops-1":{"x":122.5,"y":122.5},"A1F-Shops-2":{"x":202.5,"y":117.5},"A1F-Shops-3":{"x":202.5,"y":75},"A1F-Shops-4":{"x":202.5,"y":32.5},"A1F-Shops-5":{"x":202.5,"y":-15},"A1F-Shops-6":{"x":202.5,"y":-60},"A1F-Shops-7":{"x":100,"y":-62.5},"A1F-Shops-8":{"x":-50.028,"y":-61.972},"A1F-Shops-9":{"x":-152.5,"y":-60},"A1F-Shops-10":{"x":-152.5,"y":27.5},"A1F-Shops-11":{"x":-152.5,"y":117.5},"A1F-Shops-12":{"x":-72.5,"y":122.5},"A1F-Shops-13":{"x":-62.5,"y":77.5},"A1F-Shops-14":{"x":25,"y":20},"A1F-Shops-15":{"x":112.5,"y":77.5}},"2F":{"A2F-Content-(ViewBox)":{"x":0,"y":0},"A2F-Facilities-1":{"x":-23,"y":67},"A2F-Facilities-2":{"x":-124.056,"y":-73},"A2F-Facilities-3":{"x":-110,"y":-73},"A2F-Facilities-4":{"x":26,"y":-65.5},"A2F-Facilities-5":{"x":18,"y":-65.5},"A2F-Facilities-6":{"x":146,"y":-73},"A2F-Facilities-7":{"x":168.056,"y":-73},"A2F-Facilities-8":{"x":17,"y":62},"A2F-Facilities-9":{"x":27,"y":87},"A2F-Facilities-10":{"x":154,"y":-73},"A2F-Facilities-11":{"x":-102,"y":-73},"A2F-Shops-1":{"x":95,"y":122.5},"A2F-Shops-2":{"x":152.5,"y":122.5},"A2F-Shops-3":{"x":202.5,"y":117.5},"A2F-Shops-4":{"x":202.5,"y":75},"A2F-Shops-5":{"x":202.5,"y":32.5},"A2F-Shops-6":{"x":202.5,"y":-15},"A2F-Shops-7":{"x":202.5,"y":-60},"A2F-Shops-8":{"x":100,"y":-62.5},"A2F-Shops-9":{"x":-50,"y":-62.5},"A2F-Shops-10":{"x":-152.5,"y":-60},"A2F-Shops-11":{"x":-152.5,"y":-54},"A2F-Shops-12":{"x":-152.5,"y":62.5},"A2F-Shops-13":{"x":-152.5,"y":117.5},"A2F-Shops-14":{"x":-72.5,"y":122.5},"A2F-Shops-15":{"x":-62.5,"y":77.5},"A2F-Shops-16":{"x":-5,"y":137.5},"A2F-Shops-17":{"x":25,"y":137.5},"A2F-Shops-18":{"x":55,"y":137.5},"A2F-Shops-19":{"x":112.5,"y":77.5}}}')).concat().flatMap((e,t)=>Object.entries(e).map(e=>{let[n,r]=e;return[n,{coord:r,fidx:t}]}));function rM(e){let[t,n]=e;return n.map(e=>[t,e])}function rN(e){return e.reduce(function(e,t){let[n,r]=t,i=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,i]])},new Map)}let rT=Object.values(JSON.parse('{"B1F":{},"1F":{"11":["A1F-Shops-1"],"12":["A1F-Shops-2"],"14":["A1F-Shops-6"],"15":["A1F-Shops-7"],"16":["A1F-Shops-8"],"17":["A1F-Shops-9"],"18":["A1F-Shops-10"],"19":["A1F-Shops-11"],"20":["A1F-Shops-12"],"13-1":["A1F-Shops-3"],"13-2":["A1F-Shops-4"],"13-3":["A1F-Shops-5"],"T-3":["A1F-Shops-15"],"T-4":["A1F-Shops-13"],"T-5":["A1F-Shops-14"]},"2F":{"2":["A2F-Shops-3"],"4":["A2F-Shops-7"],"5":["A2F-Shops-8"],"6":["A2F-Shops-9"],"7":["A2F-Shops-10"],"9":["A2F-Shops-13"],"10":["A2F-Shops-14"],"1-1":["A2F-Shops-1"],"1-2":["A2F-Shops-2"],"3-1":["A2F-Shops-4"],"3-2":["A2F-Shops-5"],"3-3":["A2F-Shops-6"],"8-1":["A2F-Shops-11"],"8-2":["A2F-Shops-12"],"T1":["A2F-Shops-19"],"T2":["A2F-Shops-15"],"N":["A2F-Shops-16"],"IL-1":["A2F-Shops-18"],"IL-2":["A2F-Shops-17"]}}')).flatMap(function(e){return Object.entries(e)});rN(Array.from(rT).flatMap(rM));let rD=rN(Array.from(rT).flatMap(rM).map(e=>{let[t,n]=e;return[n,t]}));function rC(e){return(0,u.jsx)("p",{children:e.tag})}function rR(e){return(0,u.jsx)("p",{children:e.tag})}function rL(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[e.info.x.tag,":",e.kind.tag]}),(0,u.jsx)("p",{children:e.info.title}),"stairs"===e.kind.tag?(0,u.jsx)(rC,{...e.kind}):"toilet"===e.kind.tag?(0,u.jsx)(rR,{...e.kind}):(0,u.jsx)(u.Fragment,{})]})}function rI(e){return(0,u.jsx)("p",{children:e.tag})}function rz(e){return(0,u.jsx)("p",{children:e.tag})}function rH(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[e.info.x.tag,":",e.kind.tag]}),(0,u.jsx)("p",{children:e.info.title}),"book"===e.kind.tag?(0,u.jsx)(rI,{...e.kind}):"restaurant"===e.kind.tag?(0,u.jsx)(rz,{...e.kind}):(0,u.jsx)(u.Fragment,{})]})}function rW(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("p",{children:e.info.title})})}var rU=JSON.parse('{"x":-180.0,"y":-85.0,"width":409.99988,"height":240.0}');!function(e){let t;eV.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.initialFidx;eK.send({type:"SELECT",fidx:t,force:!0}),eQ.postMessage({type:"INIT",cfg:e.floorsConfig})}}),eP.select.add(e=>eK.send({type:"SELECT",fidx:e})),eP.selectDone.add(e=>eK.send({type:"SELECT.DONE",fidx:e})),tj.fullscreen.add(rf),eV.init.add(ry),tj.position.add(()=>{var e;return e={type:"GET"},void rt.send(e)}),en.eventTick.add(ef),en.eventTick.add(rg.tick),en.get.add(()=>rp({type:"GET"})),en.sync.add(e=>rp({type:"SYNC",pos:e})),en.syncSync.add(e=>rp({type:"SYNCSYNC",pos:e})),eV.init.add(e=>{if(e.getSearchEntries){let t=e.getSearchEntries(e);ro.postMessage({type:"INIT",entries:t})}}),ts.start.add(function(e){rr.send({type:"SEARCH",req:e})}),er.layout.add(function(e){let{layout:t,force:n}=e;ew({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>eA())}),er.zoomStart.add(function(e){ew({type:"STYLE.ZOOM",...e})}),er.zoomEnd.add(function(e){ew({type:"STYLE.ZOOM",zoom:e.zoom})}),er.animation.add(function(e){ew({type:"STYLE.ANIMATION",animation:e})}),er.animationEnd.add(function(){ew({type:"STYLE.ANIMATION.END"})}),er.mode.add(function(e){ew({type:"STYLE.MODE",mode:e})}),en.eventExpire.add(eA),tj.reset.add(nQ),tj.fullscreen.add(nQ),tj.position.add(nQ),tj.recenter.add(nQ),tj.zoomOut.add(nQ),tj.zoomIn.add(nQ),ts.endDone.add(e=>th.send({type:"DETAIL",...e})),tc.open.add(()=>{let e;return e=!0,et(tc.openDone,e)}),tc.openDone.add(e=>th.send({type:e?"OPEN":"CANCEL"})),tc.close.add(()=>th.send({type:"CANCEL"})),tc.closeDone.add(()=>{requestAnimationFrame(()=>{var e,t;null==(t=e2.get("detail"))||null==(e=t.querySelector(".detail"))||e.scroll(0,0)})}),eP.lock.add(e=>tN({type:"SWITCH",fidx:e})),eP.selectDone.add(()=>tN({type:"SWITCH.DONE"})),ts.end.add(e=>tM.send({type:"SEARCH.END",res:e})),tc.open.add(()=>t$.set("locked")),tc.closeDone.add(()=>tN({type:"SEARCH.DONE"})),tc.closeDone.add(()=>t$.set("panning")),en.getDone.add(e=>{null!==e&&tN({type:"SCROLL.GET.DONE",scroll:e})}),en.syncSyncDone.add(e=>{null!==e&&tN({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),er.resize.add(e=>{let{layout:t,force:n}=e;return tN({type:"RESIZE",layout:t,force:n})}),er.mode.add(tC),er.zoomStart.add(()=>{tD=!0}),er.zoomEnd.add(()=>{tD=!1}),tj.reset.add(()=>tN({type:"HOME"})),tj.recenter.add(()=>tN({type:"RECENTER"})),tj.rotate.add(()=>tN({type:"ROTATE"})),tj.zoomOut.add(()=>tN({type:"ZOOM",z:-1,p:null})),tj.zoomIn.add(()=>tN({type:"ZOOM",z:1,p:null})),tO.multiStart.add(()=>ee(en.get)),tO.multiStart.add(()=>t$.set("touching")),tO.multiEnd.add(()=>t$.set("panning")),tO.zoom.add(e=>{let{z:t,p:n}=e;return tN({type:"ZOOM",z:t>0?1:-1,p:n})}),eV.rendered.add(()=>tN({type:"RENDERED"})),eK.start(),rs.start(),rt.start(),rd.start(),rh.start(),rr.start(),ej.start(),nX.start(),th.start(),tM.start();let n=(d({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:n7,isUiRendered:nR,...e}),d({...c}),{...c,origViewBox:t,...e});eX(n);let r=document.getElementById(n.root);if(null===r)throw Error("#root not found!");r.onwheel=function(e){var t;let n=r.children[0];e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||tD)&&e.preventDefault()},r.oncontextmenu=function(e){e.preventDefault()},r.ontouchmove=function(e){if(tD){var t;if(e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui")return;e.preventDefault()}else if(!n_)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rs.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rs.send(t)},(0,e1.createRoot)(r).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(rS,{})}));let i=document.getElementById("style-root");if(null===i)throw Error("#style-root not found!");(0,e1.createRoot)(i).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(e5,{})}))}({renderMap:function(e){let{floors:t,data:{origViewBox:n}}=e,{viewBox:r,width:i,height:o}=function(){let{scroll:e,svg:t}=eE(e=>e.layout);return{viewBox:z(t),width:P(e.width),height:P(e.height)}}(),{fidxToOnAnimationEnd:a,urls:s}=e0();return void 0===t?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"content",children:(0,u.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:i,height:o,children:t.floors.map((e,t)=>(0,u.jsx)(l.Fragment,{children:(0,u.jsxs)("g",{className:`floor fidx-${t}`,onAnimationEnd:a(t),children:[(0,u.jsx)(rj,{origViewBox:n,idx:t,url:s.get(t),onAnimationEnd:a(t),labels:e.labels}),(0,u.jsx)(rw,{origViewBox:n,idx:t,url:s.get(t),onAnimationEnd:a(t),labels:e.labels})]})},t))})})},isMapRendered:function(){return!0},...{root:"root",title:"Tokyo National Museum",backgroundColor:"gray",origViewBox:JSON.parse('{"x":-185.0,"y":-100.0,"width":420.0,"height":340.0}'),origBoundingBox:rU,zoomFactor:2,floorsConfig:{floors:r$,initialFidx:1},...{getSearchEntries:function(){return rk.map(e=>{let[t,n]=e;return{address:t,pos:n}})},getSearchInfo:function(e){let t=rD.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},renderInfo:function(e){return"facility"===e.info.x.tag?(0,u.jsx)(rL,{info:e.info,kind:e.info.x.kind}):"shop"===e.info.x.tag?(0,u.jsx)(rH,{info:e.info,kind:e.info.x.kind}):"unknown"===e.info.x.tag?(0,u.jsx)(rW,{info:e.info}):(0,u.jsx)(u.Fragment,{})}}}})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.m=i,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.u=e=>"static/js/async/"+e+"."+({147:"e3fabc94",968:"292525c6"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,i)=>{if(n){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[n,r,i];return}for(var l=1/0,o=0;o<e.length;o++){for(var[n,r,i]=e[o],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(o--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/TokyoNationalMuseum/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,i,[o,l,s]=n,c=0;if(o.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},(r=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","45","773"],()=>a(497));l=a.O(l)})();