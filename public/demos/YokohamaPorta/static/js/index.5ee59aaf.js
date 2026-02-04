(()=>{"use strict";var e,t,n,r,o={433(e,t,n){let r,o,i;var a,s=n(797);let l={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:l,internals:l,origin:l,measures:l,viewbox:l,points:l,lines:l,multilinestrings:l,multipolygons:l},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(e){return(0,s.createElement)("p",{},e.info.title)}};function d(e){c={...c,...e}}var u=n(617);n(639);var h=n(815),p=n(622);let x=h.Ay$.union([h.Ay$.number(),h.Ay$.string()]),g=h.Ay$.array(x),y=h.Ay$.object({ids:g}),m=p.codec(p.string(),y,{decode:(e,t)=>{try{return JSON.parse(e)}catch(n){return n instanceof p.ZodError&&t.issues.push({code:"invalid_format",format:"json",input:e,message:n.message}),p.NEVER}},encode:e=>JSON.stringify(e)}),f=h.Ay$.union([h.Ay$.number(),h.Ay$.string()]),S=h.Ay$.set(f),v=h.Ay$.object({ids:S}),A=h.Ay$.codec(y,v,{decode:e=>({ids:new Set(e.ids)}),encode:e=>({ids:Array.from(e.ids)})});h.Ay$.pipe(m,A);let j=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var w=n(997);function E(e,t,n){let[r,o,i]=e,[a,s]=t;return r*a+o*s+i*n}function F(e,t,n){return[E(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),E(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function N(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function B(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}var b=n(304);let O=n(853).I3(function(e,t){return b._k.compare(e.x,t.x)||b._k.compare(e.y,t.y)}),M={x:0,y:0};function k(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,o=e.x*n,i=e.y*r;return{...e,x:o,y:i}}function $(e,t,n,r){return{x:e,y:t,width:n,height:r}}let T={x:0,y:0,width:1,height:1};function C(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function D(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function R(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function I(e,t){return{...e,x:t.x,y:t.y}}function L(e){return function(e){let{x:t,y:n,width:r,height:o}=e;return`${t} ${n} ${r} ${o}`}(function(e,t){let{x:n,y:r,width:o,height:i}=e;return{x:t(n),y:t(r),width:t(o),height:t(i)}}(e,function(e){return Math.round(100*e)/100}))}function z(e){let{x:t,y:n,width:r,height:o}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+o}}}function H(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function W(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function U(e){let[[t,n],[r,o]]=e;return{tl:{x:t,y:n},br:{x:r,y:o}}}function Y(e,t){return[F(e,function(e){let[t]=e;return t}(t),0),F(e,function(e){let[,t]=e;return t}(t),0),F(e,function(e){let[,,t]=e;return t}(t),1)]}function q(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function Z(e,t,n,r){var o,i;return o=function(e,t){let[n,r]=t;return[q(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),q([-n,-r])].reduce(Y)}("number"==typeof(i=t)?[i,i]:"x"in i?[i.x,i.y]:i,[n,r]),(0,w.Fs)(e,z,W,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>F(o,e,1)),U,H)}function G(e){return Math.round(100*e)/100}function P(e){return Math.round(1e7*e)/1e7}var X=n(838),_=n(922),V=n(28),J=n(486),K=n(276);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function ee(e){e.forEach(e=>e())}function et(e,t){e.forEach(e=>e(t))}let en={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},er={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function eo(e){return void 0!==e&&"number"==typeof e}function ei(e,t,n,r,o,i){return new DOMMatrixReadOnly(e instanceof Array?e:eo(e)&&eo(t)&&eo(n)&&eo(r)&&eo(o)&&eo(i)?[e,t,n,r,o,i]:void 0)}let ea={container:T,scroll:T,content:ei(),svgOffset:{x:-0,y:-0},svgScale:1,svg:T};function es(e){let{container:t,outer:n,svgScale:r,inner:o}=e,{x:i,y:a}=n;return{container:t,scroll:t,content:ei(),svgOffset:{x:-i,y:-a},svgScale:r,svg:o}}function el(e){let{scroll:t,content:n,svgOffset:r,svgScale:o,svg:i}=e;return ei().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/o,1/o).translate(-i.x,-i.y)}function ec(e,t){let n=e.height,r=n*t;return $((e.width-r)/2,0,r,n)}function ed(e,t){let n=e.width,r=n/t;return $(0,(e.height-r)/2,n,r)}let eu={...ea,config:{fontSize:16,container:T,outer:T,inner:T,svgScale:1}};function eh(e,t){let n=D(e.scroll);return ep(e,t,t,n)}function ep(e,t,n,r){let o=el(e).inverse().transformPoint(r),i=Z(e.scroll,[t,n],r.x,r.y),a=k(e.svgOffset,[t,n]),s=Z(e.svg,[t,n],o.x,o.y);return{...e,scroll:i,svgOffset:a,svg:s}}function ex(e,t){var n,r;let o=D({...e.scroll,x:0,y:0}),i=(n=o.x,r=o.y,ei().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:i}}function eg(e,t){let n=e.scroll,r=B(k(t,-1),n);return(0,w.Fs)(e,e=>({...e,scroll:R(e.scroll,r)}),e=>{let t,r,o,i,a,s,l;return t=I(e.scroll,n),r=e.content.inverse(),i=N(o=D(e.scroll),B(e.scroll,n)),a=r.transformPoint(o),s=k(B(r.transformPoint(i),a),-e.svgScale),l=R(e.svg,s),{...e,scroll:t,svg:l}})}function ey(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,o=t.scrollWidth,i=t.scrollHeight;if(null===n)return!1;let a=o-e.width,s=i-e.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${i}] vs. request=[${e.width}, ${e.height}]`),!1;let l=Math.round(-e.x),c=Math.round(-e.y);if(l<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==l&&(t.scrollLeft=l),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-l)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=t.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let em={scroll:T,client:{width:0,height:0},timeStamp:0};function ef(e){let t=e.currentTarget;null!==t&&(em={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let eS=(0,_.e)(eu),ev=(0,V.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,J.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,J.a)({}),updateSvgMatrix:(0,J.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:o}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-o.x,-o.y)}(t)}}),updateGeoMatrix:(0,J.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,J.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,o=Math.max(n.width,n.height)/2*r,i=Math.round(Math.log10(o)),a=(t=o/Math.pow(10,i-1),Q.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:s}=a[0],l=s*Math.pow(10,i-1);return{svg:l,client:l/r}}(t)}}),updateScroll:(0,J.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x+o.width/2,y:r.y+o.height/2};return i.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x,y:r.y},s={x:r.x+o.width,y:r.y+o.height};return{start:i.transformPoint(a),end:i.transformPoint(s)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:eu,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:M,distanceRadius:{svg:0,client:0},geoRange:{start:M,end:M},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,J.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return eS.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,K.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,J.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,J.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,J.a)({animation:e=>{let{event:{animation:t}}=e;return null===t?"":function(e){let{matrix:t,origin:n}=e,r=ei();return`
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
`}(t)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,J.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({animation:null,animating:!1}),target:"Idle"}}}}}),eA=(0,K.c)(ev,{systemId:"system-viewer1"});function ej(e){eA.send(e)}function ew(e){return(0,X.d4)(eA,t=>e(t.context))}function eE(){ej({type:"STYLE.SCROLL",currentScroll:em})}function eF(){return ew(e=>e.layout.container)}function eN(){return ew(e=>e.distanceRadius)}let eB=`
position: absolute;
left: 0;
top: 0;
`,eb=`
position: absolute;
right: 0;
top: 0;
`,eO=`
position: absolute;
left: 0;
bottom: 0;
`,eM=`
position: absolute;
right: 0;
bottom: 0;
`,ek=`
margin: 0;
`,e$=`
padding: 0;
`,eT=`
${ek} ${e$}
`,eC=`
box-sizing: border-box;
`,eD=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eR=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eI=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eL=`
-webkit-user-select: none;
user-select: none;
`,ez=`
touch-action: none;
`,eH=`
pointer-events: none;
`,eW=`
pointer-events: initial;
`,eU=`
background-color: rgba(255, 255, 255, 0.5);
`,eY=`
cubic-bezier(0, 0, 0, 1)
`,eq=`
cubic-bezier(1, 0, 1, 1)
`,eZ=`
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
`,eG={lock:new Set,select:new Set,selectDone:new Set,unlock:new Set},eP={init:new Set,rendered:new Set},eX=function(e){et(eP.init,e)},e_=function(){ee(eP.rendered)},eV=(0,_.e)(0),eJ=(0,V.mj)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null,blobs:new Map,urls:new Map},initial:"Idle",on:{IMAGE:{actions:(0,J.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Idle:{on:{SELECT:[{guard:e=>{let{event:t}=e;return t.force??!1},actions:[(0,J.a)({fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eV.set(t.fidx)}]},{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,J.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eV.set(t.fidx)}],target:"Animating"}]}},Animating:{on:{"SELECT.DONE":{actions:(0,J.a)({prevFidx:null}),target:"Idle"}}}}}),eK=(0,K.c)(eJ),eQ=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function e0(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,X.d4)(eK,t=>e(t.context))),o=(0,s.useMemo)(()=>(function(e,t,n){let r=c.floorsConfig;if(void 0===r)return null;let o=r.floors.map((r,o)=>{var i,a,s,l,c,d,u;return i=e,a=t,s=n,(l=o)!=i||s?l===a?(c=l,`
.fidx-${c} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(d=l,`
.fidx-${d} {
  visibility: hidden;
}
  `):(u=l,`
.fidx-${u} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${o}
${eZ}
`})(t,n,void 0===r.get(t)),[t,n,r]),i=(0,s.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,et(eG.selectDone,n))},[t]),a=(0,s.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,et(eG.lock,r))},[t,n]);return{fidx:t,prevFidx:n,style:o,fidxToOnAnimationEnd:i,fidxToOnClick:a,urls:r}}eQ.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;eK.send({type:"IMAGE",fidx:e,blob:n})}}},eQ.onerror=e=>{console.error("floors error",e)},eQ.onmessageerror=e=>{console.error("floors messageerror",e)};var e1=n(284);function e5(){let e=ew(e=>e.rendered);(0,s.useEffect)(()=>{requestAnimationFrame(()=>e_())},[e]);let t=ew(e=>e.shown),n=ew(e=>e.appearing)?`
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
`:"",r=ew(e=>e.layout.scroll),o=`
.content {
  width: ${G(r.width)}px;
  height: ${G(r.height)}px;
}
`;return(0,u.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,o]})}let e2=new Map;function e3(e,t,n){(0,s.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:e2.get(n)??null;if(null===r)return;let o=r.querySelector(`#${e}`)??null;if(null===o||null!==o.shadowRoot)return;let i=o.attachShadow({mode:"open"});e2.set(e,i),(0,e1.createRoot)(i).render(t)})(e,t,n),[e,n,t])}let e4={bus:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,u.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,u.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,u.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,u.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,u.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,u.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,u.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,u.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,u.jsx)("use",{x:"8.5",href:"#_person2"}),(0,u.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,u.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,u.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,u.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,u.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,u.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,u.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,u.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,u.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,u.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,u.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,u.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,u.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,u.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,u.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,u.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,u.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,u.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,u.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function e6(){return(0,u.jsx)("g",{className:"assets",children:(0,u.jsx)(e7,{})})}function e7(){return(0,u.jsx)("g",{className:"symbols",children:Object.entries(e4).map((e,t)=>{let[n,r]=e;return(0,u.jsx)(s.Fragment,{children:r({id:n})},t)})})}function e8(e){return e>.5?-1:+(e<.5)}function e9(e){return e<.3?1:e>.7?-1:0}function te(e,t,n,r){let o={x:t/2,y:n/2},i=t/20,a=i/2;function s(t){var n;let r,o;return n={x:e.h,y:e.v},r=t.x*n.x,o=t.y*n.y,{...t,x:r,y:o}}let l=e.th<Math.PI/4,c=0===e.v,d=0===e.h,u=s(k(o,-1)),h=s(c||d?B(k(o,-1),{x:r,y:r}):B(k(o,-1),{x:l?r:0,y:l?0:r})),[p,x]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:l?[{x:0,y:0},s({x:0,y:i})]:[{x:0,y:0},s({x:i,y:0})],g=N(u,p),y=N(u,x);return{p:u,q:h,a:g,b:y}}function tt(e){return{open:e,animating:!1}}function tn(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tr(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function to(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function ti(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function ta(e){let{open:t,animating:n}=e;return t||n}var ts=n(269);let tl={start:new Set,end:new Set,endDone:new Set},tc={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},td={p:M,psvg:M,fidx:0,layout:ea,info:{title:""}};function tu(e){return function(t,n){let r=t[n],o=e(r);return t[n]=null===o?r:o,t}}let th=(0,V.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return ta(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return ta(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,J.a)({canceling:()=>!0}),endCancel:(0,J.a)({canceling:()=>!1}),open:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tu(tn)(n,r)}}),close:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tu(to)(n,r)}}),handle:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tu(n[r].open?tr:ti)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:td,m:{header:tt(!0),detail:tt(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,J.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:o}}=e;return{psvg:t,p:el(o).transformPoint(t),fidx:n,info:r,layout:o}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,K.n)("isDetailVisible")},{actions:(0,J.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,K.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,J.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,ts.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,J.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,K.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,J.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,K.r)({type:"DONE"})]}}}}}),tp=(0,K.c)(th);function tx(){return(0,X.d4)(tp,e=>e.context)}function tg(){return tx().m.header}function ty(){return tx().m.detail}function tm(e){return(0,u.jsxs)("div",{className:"balloon",children:[(0,u.jsx)(tS,{...e}),e.children,(0,u.jsx)("style",{children:tf})]})}tp.on("CLOSE.DONE",()=>ee(tc.closeDone));let tf=`
.balloon,
.balloon-svg {
  ${eB}
  ${eH}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tS(e){let t=e._hv;if(null===t)return(0,u.jsx)("svg",{});let{viewBox:n,width:r,height:o,fg:i,bg:a}=function(e,t){let{bw:n,bh:r,lh:o,d:i,width:a,height:s}=t,l=$(-a/2,-a/2,a,s),{body:c,leg:d}=function(e,t,n,r){let o={x:t/2,y:n/2},i=`
m${-o.x},${-o.y}
h${t}
v${n}
h${-t}
z
`,{p:a,q:s,a:l,b:c}=te(e,t,n,r),d=B(s,l),u=B(c,s),h=B(a,c);return{body:i,leg:`
m${l.x},${l.y}
l${d.x},${d.y}
l${u.x},${u.y}
l${h.x},${h.y}
z
`}}(e,n,r,o);return{viewBox:l,width:a,height:s,bg:`M${i},${i}`+c+`M${i},${i}`+d,fg:"M0,0"+c+"M0,0"+d}}(t,e._size);return(0,u.jsxs)("svg",{className:"balloon-svg",viewBox:L(n),width:r,height:o,children:[(0,u.jsx)("path",{className:"bg",d:a}),(0,u.jsx)("path",{className:"fg",d:i}),(0,u.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tv(e){let{_p:t,_hv:n,_size:r,_leg:o}=e,i=ty(),a=null!==t&&null!==n&&ta(i)?function(e,t,n,r,o){let{open:i,animating:a}=e,{width:s,height:l}=r,c=k(o.q,-1);if(a){let[e,n]=i?[0,1]:[1,0],[r,o]=i?[0,1]:[1,0],[a,d]=i?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[u,h]=i?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],p=i?eY:eq;return`
.detail,
.balloon {
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --dp-x: ${c.x}px;
  --dp-y: ${c.y}px;
  --oa: ${e};
  --ob: ${n};
  --sa: ${r};
  --sb: ${o};
  --timing: ${p};
  --dxa: ${a};
  --dxb: ${u};
  --dya: ${d};
  --dyb: ${h};
  --pww: ${-s/2}px;
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
  --dp-x: ${c.x}px;
  --dp-y: ${c.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-s/2}px;
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
`}(i,t,0,r,o):".balloon, .detail { visibility: hidden; }";return(0,u.jsx)("style",{children:a})}let tA={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},tj=()=>ee(tA.zoomIn),tw=()=>ee(tA.zoomOut),tE=()=>ee(tA.rotate),tF=()=>ee(tA.reset),tN=()=>ee(tA.recenter),tB={multiStart:new Set,multiEnd:new Set,zoom:new Set},tb=(0,_.e)("panning");tb.subscribe(e=>{let t;return t=e,et(er.mode,t)});let tO=(0,V.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,J.a)({rendered:!0}),emitGetScroll:(0,ts.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,ts.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}),emitSyncScrollSync:(0,ts.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}),calcZoomAnimation:(0,J.a)({animation:e=>{var t,n,r,o,i,a,s,l,d,u,h,p,x;let g,y,m,f,S,v,A,j,{context:{animationReq:w,layout:E}}=e;return null===w?null:"zoom"===w.type?(t=E,n=w.z,r=w.p,g=el(t).inverse().transformPoint(r),y=1/(o=n,Math.pow(c.zoomFactor,o)),m=ei().scale(1/y,1/y),{type:"Zoom",svg:Z(t.svg,y,g.x,g.y),svgScale:t.svgScale*y,q:m,o:r}):"home"===w.type?(i=E,f=D((a=function(e){let{config:t,content:n}=e;return{config:t,...es(t),content:n}}(E)).config.inner),S=el(i).transformPoint(f),v=a.svgScale/i.svgScale,j=(function(e,t){if(e instanceof DOMMatrixReadOnly)return ei(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return ei(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((A=D(i.container)).x-S.x,A.y-S.y).multiply((s=1/v,l=1/v,d=S.x,u=S.y,ei().scale(s,l,1,d,u,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:j,o:null}):(h=0,p=90,x=w.p,{type:"Rotate",deg:90,q:ei().rotate(90),o:x})}}),updateLayoutFromZoom:(0,J.a)({prevLayout:e=>{let{context:{layout:t}}=e;return t},layout:e=>{let{context:{layout:t,animation:n}}=e;return function(e,t){var n,r,o;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:I(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,o=t.svgScale,{...e,svg:r,svgScale:o}):ex(e,t.deg)}(t,n)}}),endZoom:(0,J.a)({prevLayout:null,animation:null,zoom:e=>{let{context:{zoom:t,animationReq:n}}=e;return t*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:e=>{let{context:{rotate:t,animationReq:n}}=e;return t+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,J.a)({cursor:e=>{let{context:{origLayout:t}}=e;return D(t.container)},layout:e=>{let{context:{origLayout:t,rotate:n}}=e;return ex(eh(t,9),n)}}),emitSyncAnimation:(0,ts.a)(e=>{let{context:{animation:t}}=e;return{type:"SYNC.ANIMATION",animation:t}}),emitZoomStart:(0,ts.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.START",layout:t,zoom:n}}),emitZoomEnd:(0,ts.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.END",layout:t,zoom:n}}),resetCursor:(0,J.a)({cursor:e=>{let{context:{layout:t}}=e;return D(t.container)}}),resizeLayout:(0,J.a)({rendered:!1,origLayout:(e,t)=>{let{layout:n}=t;return n},layout:(e,t)=>{let{layout:n}=t;return eh(n,9)}}),updateLayoutFromScroll:(0,J.a)({layout:e=>{let{context:t}=e,{scroll:n}=em;return eg(t.layout,n)}}),emitSyncLayout:(0,ts.a)(e=>{let{context:{layout:t,rendered:n}}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}),emitSearchStart:(0,ts.a)(e=>{let{context:{layout:t,cursor:n}}=e,{scroll:r}=em;return{type:"SEARCH.START",req:{psvg:el(eg(t,r)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,ts.a)((e,t)=>{let{context:n}=e,{res:r}=t,{scroll:o}=em,i=eg(n.layout,o);return{type:"SEARCH.END.DONE",res:null===r?null:{...r,layout:i}}}),emitSwitch:(0,ts.a)((e,t)=>{let{fidx:n}=t;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,ts.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:eu,prevLayout:null,layout:eu,cursor:D(eu.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,K.e)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:(0,J.a)({cursor:e=>{let{event:{pos:t}}=e;return t}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,J.a)({animationReq:e=>{let{context:{layout:t},event:{z:n,p:r}}=e;return{type:"zoom",z:n,p:r??D(t.container)}}}),target:"Zooming"},HOME:{actions:(0,J.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,J.a)({animationReq:e=>{let{context:{layout:t}}=e;return{type:"rotate",deg:90,p:D(t.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,J.a)({animationReq:null}),type:"final"}}}}}),tM=(0,K.c)(tO,{systemId:"system-viewer1"});function tk(e){tM.send(e)}tM.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,et(tl.start,t)}),tM.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tM.send({type:"SEARCH.DONE"}):(t=r,et(tl.endDone,t),n=r.psvg,et(tc.open,n))}),tM.on("ZOOM.START",e=>{let t;return t=e,et(er.zoomStart,t)}),tM.on("ZOOM.END",e=>{let t;return t=e,et(er.zoomEnd,t)}),tM.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,et(eG.select,t)}),tM.on("SWITCH.DONE",()=>ee(eG.unlock)),tM.on("SYNC.ANIMATION",e=>{let t,{animation:n}=e,r=(null==n?void 0:n.q)??null,o=(null==n?void 0:n.o)??null;null!==r&&(t={matrix:r,origin:o},et(er.animation,t))}),tM.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},et(er.layout,t)}),tM.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,et(en.sync,t)}),tM.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,et(en.syncSync,t)}),tM.on("SCROLL.GET",()=>ee(en.get));let t$=!1,tT=!1;function tC(e){t$="locked"===e,tT="locked"===e}function tD(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tR),()=>{t.removeEventListener("wheel",tR)}},[e]),e}function tR(e){let t=e.currentTarget;tT&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function tI(e){let t,{_detail:n}=e,r=tD();return(0,u.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void tp.send(e)},children:[c.renderInfo&&(1!==(t=Object.values(n.info)).length||"string"!=typeof t[0]||""!==t[0])&&c.renderInfo({info:n.info}),(0,u.jsx)("style",{children:tL})]})}let tL=`
.detail {
  ${eB}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eW}
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
  ${eL}
  margin: 1.5em;
  text-align: center;
}

p {
  ${eL}
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
`;function tz(){return e3("detail",(0,u.jsx)(tH,{}),"ui"),(0,u.jsx)("div",{id:"detail"})}function tH(){return(0,u.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,u.jsx)(tW,{}),(0,u.jsx)(tU,{})]})}function tW(){let e,t,n,r,o,i,a,s,l,c,d,h,p=tx().detail,x=(i=p.p,a=p.layout,s=function(e,t){let{x:n,y:r}=t,o=e.width/e.height,i={x:n/e.width,y:r/e.height},a=o>1?e8(i.x):e9(i.x);return{h:a,v:o>1?e9(i.y):e8(i.y),th:Math.atan2(e.height,e.width)}}(p.layout.container,i),l=a.container.width,t=50*(e=.01*Math.min(l,c=a.container.height)),n=50*e,r=10*e,o=t/100,h=te(s,(d={bw:t,bh:n,lh:r,d:o,width:t+2*r+2*o,height:n+2*r+2*o}).bw,d.bh,d.lh),{_p:i,_hv:s,_W:l,_H:c,_size:d,_leg:h});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(tm,{...x}),(0,u.jsx)(tI,{_detail:p}),(0,u.jsx)(tv,{...x})]})}function tU(){return(0,u.jsx)("svg",{id:"ui-svg-defs",children:(0,u.jsx)("defs",{children:(0,u.jsx)(e6,{})})})}function tY(){return e3("footer",(0,u.jsx)(tq,{}),"ui"),(0,u.jsx)("div",{id:"footer"})}function tq(){let e=c;return(0,u.jsxs)("div",{className:"ui-content footer",children:[(0,u.jsx)("p",{children:e.copyright}),(0,u.jsxs)("style",{children:[tZ,(0,u.jsx)(tG,{})]})]})}let tZ=`
.footer {
  ${eO}
  ${eR}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${eL}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function tG(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eq;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function tP(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("g",{id:"measure",children:(0,u.jsx)(tV,{})})})}function tX(){let{svg:e}=eN();return(0,u.jsxs)("div",{id:"distance",children:[(0,u.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),t0.map(t=>(0,u.jsxs)(s.Fragment,{children:[(0,u.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,u.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,u.jsx)("style",{children:(0,u.jsx)(tQ,{})})]})}function t_(){let e=ew(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${P(Math.abs(e.x))}`,o=`${n} ${P(Math.abs(e.y))}`;return(0,u.jsxs)("div",{id:"coordinate",children:[(0,u.jsx)("p",{id:"longitude",children:r}),(0,u.jsx)("p",{id:"latitude",children:o}),(0,u.jsx)("style",{children:(0,u.jsx)(tK,{})})]})}function tV(){let{width:e,height:t}=eF(),{client:n}=eN(),r=(0,s.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),o=(0,s.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),i=(0,s.useMemo)(()=>t0.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,u.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:o}),i.map((e,t)=>(0,u.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function tJ(){let{open:e,animating:t}=tg(),[n,r]=e?[0,1]:[1,0],o=t?`
.guides {
  --timing: ${e?eY:eq};
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
`;return(0,u.jsx)(u.Fragment,{children:o})}function tK(){let{width:e,height:t}=eF(),n=`
#distance,
#coordinate {
  ${eB}
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
`,o=`
#latitude {
  ${eO}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,u.jsxs)(u.Fragment,{children:[n,r,o]})}function tQ(){let{width:e,height:t}=eF(),{client:n}=eN(),r=`
.distance {
  ${eB}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,o=`
#distance-origin {
  transform: translate(${e/2}px, ${t/2}px) scale(0.5);
}
`,i=t0.map(r=>`
#distance-x-${r+1} {
  transform: translate(${e/2+n*(r+1)}px, ${t/2}px) scale(0.5);
}
`),a=t0.map(r=>`
#distance-y-${r+1} {
  transform: translate(${e/2}px, ${t/2+n*(r+1)}px) scale(0.5);
}
`);return(0,u.jsxs)(u.Fragment,{children:[o,r,i,a]})}let t0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function t1(){return e3("guides",(0,u.jsx)(t5,{}),"ui"),(0,u.jsx)("div",{id:"guides"})}function t5(){var e;return!((null==(e=c.uiConfig)?void 0:e.showGuides)??!0)||c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"ui-content guides",children:[(0,u.jsx)("svg",{className:"guides",children:(0,u.jsx)(tP,{})}),(0,u.jsx)(tX,{}),(0,u.jsx)(t_,{}),(0,u.jsxs)("style",{children:[t2,(0,u.jsx)(tJ,{})]})]})}let t2=`
.guides {
  ${eB}
  ${eD}
  ${eH}
  z-index: 2;
}

text {
  ${eL}
}
`;function t3(){let{fidx:e,fidxToOnClick:t}=e0(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"floors",children:[(0,u.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:o}=n;return(0,u.jsx)("li",{className:`floor-item ${t8(r===e)}`,onClick:t(r),children:o},r)})}),(0,u.jsx)("style",{children:t4})]})}let t4=`
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
  ${eU}
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
`;function t6(){let{fidx:e}=e0(),t=c.floorsConfig;return void 0===t||t.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{children:[t.floors.map((t,n)=>(0,u.jsx)("h2",{className:`floor-name ${t8(n===e)}`,children:t.name},n)),(0,u.jsx)("style",{children:t7})]})}let t7=`
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
`;function t8(e){return e?"selected":"unselected"}function t9(){return e3("header",(0,u.jsx)(ne,{}),"ui"),(0,u.jsx)("div",{id:"header"})}function ne(){let e=c;return(0,u.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void tp.send(e)},children:[(0,u.jsx)("h1",{className:"title",onClick:()=>tF(),children:e.title}),(0,u.jsx)(t6,{}),(0,u.jsxs)("style",{children:[nt,(0,u.jsx)(nn,{})]})]})}let nt=`
.header {
  ${eB}
  ${eR}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${eL}
  ${eW}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function nn(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eq;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function nr(){return e3("left",(0,u.jsx)(no,{}),"ui"),(0,u.jsx)("div",{id:"left"})}function no(){return(0,u.jsxs)("div",{className:"ui-content left bottom",children:[(0,u.jsx)(t3,{}),(0,u.jsxs)("style",{children:[ni,(0,u.jsx)(na,{})]})]})}let ni=`
.left {
  ${eB}
  ${eI}
  padding: 0.4em;
  font-size: smaller;
  ${eH}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eq;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function ns(){return(0,u.jsx)("div",{className:"button-item fullscreen",onClick:()=>ee(tA.fullscreen),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nl})})})}let nl=`
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
`;function nc(){return(0,u.jsx)("div",{className:"button-item home",onClick:()=>tF(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nd})})})}let nd=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nu(){return c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"button-item position",onClick:()=>ee(tA.position),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nx})})})}let nh=3*Math.sqrt(2),np=nh+6,nx=`
M 0,0
m 0,${np/2}
l -3,-3
a ${nh},${nh} 0,1,1 6,0
z
m 0,${-np+nh+nh/2}
a ${nh/2},${nh/2} 0,1,0 0,${-nh}
a ${nh/2},${nh/2} 0,1,0 0,${nh}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function ng(){return(0,u.jsx)("div",{className:"button-item recenter",onClick:()=>tN(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ny})})})}let ny=`
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
`;function nm(){return(0,u.jsx)("div",{className:"button-item rotate",onClick:()=>tE(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nf})})})}let nf=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nS(){return(0,u.jsx)("div",{className:"button-item zoom-in",onClick:()=>tj(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nv})})})}let nv=`
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
`;function nA(){return(0,u.jsx)("div",{className:"button-item zoom-out",onClick:()=>tw(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nj})})})}let nj=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nw(){return e3("right",(0,u.jsx)(nE,{}),"ui"),(0,u.jsx)("div",{id:"right"})}function nE(){return(0,u.jsxs)("div",{className:"ui-content right bottom",children:[(0,u.jsx)(nN,{}),(0,u.jsx)("style",{children:nF})]})}let nF=`
.right {
  ${eb}
  ${eI}
  padding: 0.4em;
  font-size: smaller;
  ${eH}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nN(){return(0,u.jsxs)("div",{className:"button",children:[(0,u.jsx)(nu,{}),(0,u.jsx)(nc,{}),(0,u.jsx)(ns,{}),(0,u.jsx)(ng,{}),(0,u.jsx)(nm,{}),(0,u.jsx)(nA,{}),(0,u.jsx)(nS,{}),(0,u.jsxs)("style",{children:[nB,(0,u.jsx)(nb,{})]})]})}let nB=`
.button {
  font-size: large;
  margin: 0;
  ${eR}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${eW}
  cursor: default;
  ${eU}
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
`;function nb(){let{open:e,animating:t}=tg();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eq;return(0,u.jsx)(u.Fragment,{children:`
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
`})}function nO(){return e3("screen",(0,u.jsx)(nM,{}),"ui"),(0,u.jsx)("div",{id:"screen"})}function nM(){let e=tD();return(0,u.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>ee(tc.close),children:(0,u.jsxs)("style",{children:[nk,(0,u.jsx)(n$,{})]})})}let nk=`
.screen {
  ${eB}
  ${eD}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function n$(){let{open:e,animating:t}=ty(),n=ew(e=>e.animating);if(!t)return e?(0,u.jsx)(u.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,u.jsx)(u.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,u.jsx)(u.Fragment,{children:".screen { display: none; }"});{let[t,n]=e?[0,.3]:[.3,0],r=e?eY:eq;return(0,u.jsx)(u.Fragment,{children:`
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
`})}}function nT(){return e3("ui",(0,u.jsx)(nC,{})),(0,u.jsx)("div",{id:"ui"})}function nC(){return(0,u.jsxs)("div",{className:"ui",children:[(0,u.jsx)(nO,{}),(0,u.jsx)(t9,{}),(0,u.jsx)(tY,{}),(0,u.jsx)(nr,{}),(0,u.jsx)(nw,{}),(0,u.jsx)(t1,{}),(0,u.jsx)(tz,{})]})}function nD(){var e,t,n;let r;return null!==(r=(null==(n=document.querySelector("#ui"))||null==(t=n.shadowRoot)||null==(e=t.children)?void 0:e.length)??null)&&r>0}function nR(){tN()}var nI=n(469),nL=n(336),nz=n(5);let nH=nI.OZ(O),nW=nL.aU(b._k),nU=nL.tf(),nY=nL.JI(b.Eq,nI.CA());function nq(e){return(0,w.Fs)(e,nL.zu(nH),nI.x1(e=>0===e.length?nz.dv:nz.zN(e[0])))}function nZ(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:k(t,1/e.length)}function nG(e){return new Map((0,w.Fs)(e.changedTouches,Array.from,nI.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let nP=(0,V.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z}},actions:{updateTouches:(0,J.a)({touches:e=>{var t;let n,r,o,a,s,l,c,d,u,{context:{touches:h},event:p}=e;return"TOUCH.START"===p.type?(t=p.ev,o=nZ(r=nq(n=nY.concat(h.vecs,nG(t)))),s=2!==r.length?null:.5>Math.abs((a=B(r[0],r[1])).y/a.x),{...h,vecs:n,points:r,cursor:o,horizontal:s}):"TOUCH.MOVE"===p.type?function(e,t,n){var r,o,a,s;let l,c=nG(t),d=nW.mapWithIndex(e.vecs,(e,t)=>(0,w.Fs)(c.get(e),nz.k$,nz.AU(()=>t,nI.xW(t)))),u=nq(d),h=nZ(u),[p,x]=u;if(null===h||p===i||x===i)return{...e,vecs:d,points:u,cursor:h};let g=(r=e.dists,o=Math.sqrt((a=p,s=x,Math.pow(a.x-s.x,2)+Math.pow(a.y-s.y,2))),l=Math.pow((r.length>0?r[0]:o)-o,2),0===r.length||l>0?[o,...r]:r),y=function(e){let[t,n,r,o]=e;return t===i||n===i||r===i||o===i?null:t<n&&n<r&&r<o?-1:t>n&&n>r&&r>o?1:null}(g);return{vecs:d,points:u,cursor:h,dists:g,z:y,horizontal:e.horizontal}}(h,p.ev,0):"TOUCH.END"===p.type?(l=nG(p.ev),u=nZ(d=nq(c=nU.filterMapWithIndex(h.vecs,(e,t)=>l.has(e)?nz.dv:nz.zN(t)))),{vecs:c,points:d,cursor:u,dists:0===c.size?[]:h.dists,z:0===c.size?null:h.z,horizontal:h.horizontal}):h}}),raiseOp:(0,K.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,J.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),emitMulti:(0,ts.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,ts.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),nX=(0,K.c)(nP),n_=!1;function nV(e){nX.send({type:"TOUCH.START",ev:e})}function nJ(e){nX.send({type:"TOUCH.MOVE",ev:e})}function nK(e){nX.send({type:"TOUCH.END",ev:e})}function nQ(){nX.send({type:"CANCEL"})}function n0(e){t$||tk({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n1(e){let t;null!==e&&(t=e,et(en.eventTick,t))}function n5(e){return(0,u.jsxs)("div",{id:"viewer",className:"container",onTouchStart:nV,onTouchMove:nJ,onTouchEnd:nK,onClick:n0,onContextMenu:nR,onScroll:n1,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),tk(t),ee(er.animationEnd)},children:[e.children,(0,u.jsx)(n2,{})]})}function n2(){let e=`
.container {
  ${eB}
  ${eD}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("style",{children:e}),(0,u.jsx)(n3,{}),(0,u.jsx)(n4,{}),(0,u.jsx)(n6,{})]})}function n3(){let e=ew(e=>e.layout.content),t=`
.content {
  ${eB}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,u.jsx)("style",{children:t})}function n4(){let e=ew(e=>e.animation);return(0,u.jsx)("style",{children:e})}function n6(){let{style:e}=e0();return null===e?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("style",{children:e})}function n7(){return null!==document.querySelector(".container")}nX.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(n_=!0,ee(tB.multiStart)):(ee(tB.multiEnd),n_=!1)}),nX.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,o=n.z;null!==r&&null!==o&&(t={z:o>0?1:-1,p:r},et(tB.zoom,t))});var n8=n(685);async function n9(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let re=(0,V.mj)({types:{events:{},emitted:{}},actors:{api:(0,n8.Sx)(()=>n9(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,J.a)({position:e=>{let{event:t}=e;return t.output}}),(0,ts.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,J.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rt=(0,K.c)(re),rn=(0,V.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,ts.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,ts.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),rr=(0,K.c)(rn);function ro(e){rr.send(e)}rr.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=c.mapCoord.matrix.inverse().transformPoint(t),r=eV.get();ri.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rr.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,et(tl.end,t)});let ri=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function ra(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}ri.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":ro({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=t.res,null===(r=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),ro({type:"SEARCH.DONE",res:null})):ro({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",t.error),ro({type:"SEARCH.DONE",res:null})}},ri.onerror=e=>{console.error("search error",e)},ri.onmessageerror=e=>{console.error("search messageerror",e)};let rs=(0,V.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ra(t)}},actions:{reset:(0,ts.a)({type:"RESET"}),recenter:(0,ts.a)({type:"RECENTER"}),rotate:(0,ts.a)({type:"ROTATE"}),zoom:(0,ts.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),handleDown:(0,J.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||o}})(t.mod,n.key)}}),handleUp:(0,J.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&o}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ra(t)}}}},{actions:"handleUp"}]}}}}),rl=(0,K.c)(rs);rl.on("RESET",tF),rl.on("RECENTER",tN),rl.on("ROTATE",tE),rl.on("ZOOM.IN",tj),rl.on("ZOOM.OUT",tw);let rc=(0,V.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:T,next:T,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,J.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,K.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!C(t.prev,t.next)},actions:[(0,J.a)({waited:0}),(0,ts.a)(e=>{var t,n,r,o;let i,a,{context:s}=e;return{type:"LAYOUT",layout:(t=c.fontSize,n=s.next,i=D((o={config:r=function(e,t,n,r){var o;let i,a,s,l,{outer:c,scale:d}=(o=r??n,i=t.width/t.height,l=(s=i>(a=o.width/o.height))?ec(t,a):ed(t,a),{outer:l,inner:s?ec(o,i):ed(o,i),scale:s?o.height/t.height:o.width/t.width,rO:i,rI:a,v:s});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,c.origViewBox,c.origBoundingBox),...es(r)}).scroll),a=o.container.width/o.container.height,ep(o,a<1?1/a:1,a<1?1:+a,i)),force:!s.first}}),(0,J.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,J.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,K.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return C(t,eS.get().container)},actions:(0,J.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rd=(0,K.c)(rc);rd.on("LAYOUT",e=>{let t;return t=e,et(er.resize,t)}),window.addEventListener("resize",()=>{rd.send({type:"RESIZE"})});let ru=(0,V.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,J.a)({ticked:!1}),set:(0,J.a)({ticked:!0}),expire:(0,ts.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),rh=(0,V.mj)({types:{},actions:{getScroll:(0,J.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,o=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),$(t,n,r,o)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return ey(n)}},actors:{syncScrollLogic:(0,n8.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!ey(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,ts.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,J.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,ts.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,J.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rp=(0,K.c)(rh,{systemId:"system-scroll1"});function rx(e){rp.send(e)}rp.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.getDone,t)}),rp.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.syncSyncDone,t)});let rg=(a=()=>ee(en.eventExpire),r=ru.provide({delays:{DURATION:500}}),(o=(0,K.c)(r)).on("EXPIRE",a),o.start(),{tick:function(){o.send({type:"TICK"})}}),ry=(0,_.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function rm(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),ry.trigger.set({names:t}))}async function rf(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rS=`
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
  ${eB}
  ${eD}
  ${eT}
  ${eC}
  ${ez}
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
`,rv=function(){var e;let t=(null==(e=c.cartoConfig)?void 0:e.backgroundColor)??c.backgroundColor??"darkgray",n={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n5,{...n,children:c.renderMap(n)}),(0,u.jsx)(nT,{}),(0,u.jsxs)("style",{children:[rS,`body { background-color: ${t}; }`]})]})};function rA(e){let{origViewBox:t,idx:n,url:r,onAnimationEnd:o}=e;return(0,u.jsx)("image",{className:`floor fidx-${n}`,href:r,x:t.x,y:t.y,width:t.width,height:t.height,onAnimationEnd:o})}let rj=n.p+"static/svg/floor-B1F.0e96d592.svg",rw=Object.values(JSON.parse('{"B1F":{"AB1F-Shops-S-A-1":{"x":768,"y":113},"AB1F-Shops-S-A-2":{"x":766,"y":145},"AB1F-Shops-S-A-3":{"x":762,"y":164},"AB1F-Shops-S-A-4":{"x":761,"y":186},"AB1F-Shops-S-A-5":{"x":762,"y":211},"AB1F-Shops-S-A-6":{"x":763,"y":242},"AB1F-Shops-S-A-7":{"x":762,"y":317},"AB1F-Shops-S-A-8":{"x":763,"y":338},"AB1F-Shops-S-B-1":{"x":646,"y":404},"AB1F-Shops-S-B-2":{"x":632,"y":422},"AB1F-Shops-S-B-3":{"x":611,"y":447},"AB1F-Shops-S-B-4":{"x":579,"y":487},"AB1F-Shops-S-B-5":{"x":527,"y":485},"AB1F-Shops-S-B-6":{"x":514,"y":474},"AB1F-Shops-S-B-7":{"x":498,"y":462},"AB1F-Shops-S-B-8":{"x":477,"y":443},"AB1F-Shops-S-B-9":{"x":454,"y":427},"AB1F-Shops-S-C-1":{"x":555,"y":439},"AB1F-Shops-S-C-2":{"x":531,"y":421},"AB1F-Shops-S-C-3":{"x":509,"y":402},"AB1F-Shops-S-C-4":{"x":500,"y":369},"AB1F-Shops-S-C-5":{"x":525,"y":355},"AB1F-Shops-S-C-6":{"x":572,"y":372},"AB1F-Shops-S-C-7":{"x":594,"y":397},"AB1F-Shops-S-C-8":{"x":571,"y":416},"AB1F-Shops-S-D-1":{"x":687,"y":111},"AB1F-Shops-S-D-2":{"x":664,"y":110},"AB1F-Shops-S-D-3":{"x":637,"y":110},"AB1F-Shops-S-D-4":{"x":612,"y":111},"AB1F-Shops-S-D-5":{"x":579,"y":121},"AB1F-Shops-S-D-6":{"x":539,"y":112},"AB1F-Shops-S-D-7":{"x":543,"y":62},"AB1F-Shops-S-E-1":{"x":696,"y":209},"AB1F-Shops-S-E-2":{"x":663,"y":205},"AB1F-Shops-S-E-3":{"x":636,"y":204},"AB1F-Shops-S-E-4":{"x":635,"y":171},"AB1F-Shops-S-E-5":{"x":663,"y":171},"AB1F-Shops-S-E-6":{"x":695,"y":177},"AB1F-Shops-S-F-1":{"x":587,"y":209},"AB1F-Shops-S-F-2":{"x":550,"y":210},"AB1F-Shops-S-F-3":{"x":549,"y":187},"AB1F-Shops-S-F-4":{"x":548,"y":164},"AB1F-Shops-S-F-5":{"x":587,"y":177},"AB1F-Shops-S-G-1":{"x":693,"y":300},"AB1F-Shops-S-G-2":{"x":683,"y":328},"AB1F-Shops-S-G-3":{"x":663,"y":312},"AB1F-Shops-S-G-4":{"x":637,"y":311},"AB1F-Shops-S-G-5":{"x":611,"y":312},"AB1F-Shops-S-G-6":{"x":584,"y":309},"AB1F-Shops-S-G-7":{"x":557,"y":311},"AB1F-Shops-S-G-8":{"x":536,"y":309},"AB1F-Shops-S-G-9":{"x":543,"y":265},"AB1F-Shops-S-G-10":{"x":591,"y":263},"AB1F-Shops-S-G-11":{"x":651,"y":265},"AB1F-Shops-S-G-12":{"x":708,"y":252},"AB1F-Shops-S-H-1":{"x":497,"y":81},"AB1F-Shops-S-H-2":{"x":498,"y":119},"AB1F-Shops-S-H-3":{"x":467,"y":118},"AB1F-Shops-S-H-4":{"x":466,"y":91},"AB1F-Shops-S-H-5":{"x":466,"y":69},"AB1F-Shops-S-I-1":{"x":490,"y":163},"AB1F-Shops-S-I-2":{"x":477,"y":198},"AB1F-Shops-S-I-3":{"x":459,"y":163},"AB1F-Shops-S-J-1":{"x":483,"y":275},"AB1F-Shops-S-J-2":{"x":486,"y":312},"AB1F-Shops-S-K-1":{"x":439,"y":372},"AB1F-Shops-S-K-2":{"x":421,"y":391},"AB1F-Shops-S-K-3":{"x":411,"y":410},"AB1F-Shops-N-1-1":{"x":372,"y":67},"AB1F-Shops-N-1-2":{"x":328,"y":67},"AB1F-Shops-N-1-3":{"x":279,"y":59},"AB1F-Shops-N-1-4":{"x":238,"y":38},"AB1F-Shops-N-1-5":{"x":223,"y":27},"AB1F-Shops-N-2-1":{"x":377,"y":106},"AB1F-Shops-N-2-2":{"x":338,"y":105},"AB1F-Shops-N-2-3":{"x":370,"y":126},"AB1F-Shops-N-2-4":{"x":330,"y":124},"AB1F-Shops-N-2-5":{"x":307,"y":118},"AB1F-Shops-N-2-6":{"x":279,"y":111},"AB1F-Shops-N-2-7":{"x":251,"y":101},"AB1F-Shops-N-2-8":{"x":204,"y":75},"AB1F-Shops-N-3-1":{"x":368,"y":186},"AB1F-Shops-N-3-2":{"x":358,"y":163},"AB1F-Shops-N-3-3":{"x":310,"y":173},"AB1F-Shops-N-3-4":{"x":271,"y":156},"AB1F-Shops-N-3-5":{"x":276,"y":187},"AB1F-Shops-N-3-6":{"x":245,"y":173},"AB1F-Shops-N-3-7":{"x":229,"y":142},"AB1F-Shops-N-3-8":{"x":216,"y":163},"AB1F-Shops-N-3-9":{"x":171,"y":122},"AB1F-Shops-N-4-1":{"x":309,"y":242},"AB1F-Shops-N-4-2":{"x":327,"y":271},"AB1F-Shops-N-4-3":{"x":291,"y":267},"AB1F-Shops-N-4-4":{"x":237,"y":275},"AB1F-Shops-N-4-5":{"x":206,"y":237},"AB1F-Shops-N-4-6":{"x":176,"y":264},"AB1F-Shops-N-4-7":{"x":174,"y":228},"AB1F-Shops-N-4-8":{"x":143,"y":190},"AB1F-Shops-N-4-9":{"x":118,"y":172},"AB1F-Shops-N-4-10":{"x":119,"y":219},"AB1F-Shops-N-4-11":{"x":90,"y":251},"AB1F-Shops-N-5-1":{"x":337,"y":317},"AB1F-Shops-N-5-2":{"x":320,"y":316},"AB1F-Shops-N-5-3":{"x":299,"y":314},"AB1F-Shops-N-5-4":{"x":240,"y":341},"AB1F-Shops-N-5-5":{"x":171,"y":301},"AB1F-Shops-N-5-6":{"x":142,"y":287},"AB1F-Shops-N-5-7":{"x":130,"y":305},"AB1F-Shops-U-1":{"x":526,"y":522},"AB1F-Shops-U-2":{"x":398,"y":420}}}')).concat().flatMap((e,t)=>Object.entries(e).map(e=>{let[n,r]=e;return[n,{coord:r,fidx:t}]}));function rE(e){let[t,n]=e;return n.map(e=>[t,e])}function rF(e){return e.reduce(function(e,t){let[n,r]=t,o=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,o]])},new Map)}let rN=Object.values(JSON.parse('{"B1F":{"12Twelve Agenda":["AB1F-Shops-N-2-6"],"3COINS+plus":["AB1F-Shops-N-4-5"],"AENA":["AB1F-Shops-S-E-3"],"aimerfeel":["AB1F-Shops-S-G-4"],"AINZ&TULPE":["AB1F-Shops-S-C-6"],"AKOMEYA TOKYO":["AB1F-Shops-S-I-2"],"AMOSTYLE BY Triumph":["AB1F-Shops-N-2-8"],"AMPHI":["AB1F-Shops-N-3-2"],"Anker Store":["AB1F-Shops-S-H-1"],"BIEWS EYEBROW STUDIO":["AB1F-Shops-S-D-7"],"Capricious":["AB1F-Shops-N-2-7"],"CHIC":["AB1F-Shops-S-H-4"],"DHC":["AB1F-Shops-N-2-5"],"DoCLASSE":["AB1F-Shops-S-F-5"],"Dr.ストレッチ":["AB1F-Shops-S-E-5"],"fitfit":["AB1F-Shops-S-F-1"],"formforma":["AB1F-Shops-N-1-3"],"Heartdance":["AB1F-Shops-S-F-3"],"iPhone修理救急便":["AB1F-Shops-N-1-5"],"Jayro":["AB1F-Shops-S-G-7"],"J・マーケット":["AB1F-Shops-N-1-4"],"Laline":["AB1F-Shops-N-2-1"],"LUSH":["AB1F-Shops-U-1"],"L’OCCITANE":["AB1F-Shops-N-1-1"],"Mayfair Hampstead":["AB1F-Shops-S-I-3"],"MINI SOF":["AB1F-Shops-N-5-1"],"MISCH MASCH":["AB1F-Shops-N-3-1"],"MOOMIN SHOP CASUAL EDITION":["AB1F-Shops-S-D-6"],"NARACAMICIE":["AB1F-Shops-N-1-2"],"OWNDAYS":["AB1F-Shops-S-D-3"],"PXストア":["AB1F-Shops-S-F-2"],"RANDA":["AB1F-Shops-S-G-5"],"ROP\xc9 PICNIC":["AB1F-Shops-N-4-1"],"Samantha Thavasa Petit Choice":["AB1F-Shops-S-K-1"],"SM2":["AB1F-Shops-N-4-8"],"SoupStockTokyo":["AB1F-Shops-N-4-2"],"Techichi":["AB1F-Shops-N-3-4"],"WithGreen":["AB1F-Shops-S-C-5"],"いしがまやハンバーグ":["AB1F-Shops-S-C-3"],"えきめんや":["AB1F-Shops-S-B-2"],"おだしもん":["AB1F-Shops-N-4-6"],"きものやまと":["AB1F-Shops-S-D-4"],"こめらく":["AB1F-Shops-N-5-5"],"ごはんすすむ":["AB1F-Shops-S-B-8"],"はなまる うどん":["AB1F-Shops-S-G-1"],"まぐろ問屋 三浦三崎港":["AB1F-Shops-S-A-1"],"みずほ銀行ATMコーナー":["AB1F-Shops-N-5-2"],"アシックスウォーキング":["AB1F-Shops-S-E-4"],"アテニア":["AB1F-Shops-N-2-4"],"アフラックよくわかる!ほけん案内":["AB1F-Shops-S-C-7"],"アーモワール カプリス":["AB1F-Shops-S-I-1"],"ウンナナクール":["AB1F-Shops-N-2-2"],"オグラ":["AB1F-Shops-S-H-2"],"クイーンズ ウェイ":["AB1F-Shops-S-D-2"],"クォーク":["AB1F-Shops-U-2"],"コラージュ ガリャルダガランテ":["AB1F-Shops-N-2-3"],"ゴンチャ":["AB1F-Shops-N-4-7"],"サイアム オーキッド":["AB1F-Shops-S-E-1"],"サンドラッグ":["AB1F-Shops-N-3-9"],"サーティワン アイスクリーム":["AB1F-Shops-S-G-2"],"シャツプラザ":["AB1F-Shops-S-G-8"],"ジャン フランソワ":["AB1F-Shops-N-4-4"],"スターバックス コーヒー":["AB1F-Shops-S-G-10"],"セブンイレブン":["AB1F-Shops-S-G-11"],"タリーズ コーヒー":["AB1F-Shops-N-4-10"],"ダイアナ":["AB1F-Shops-S-G-9"],"チャンスセンター":["AB1F-Shops-N-5-7"],"チュチュアンナ":["AB1F-Shops-N-3-3"],"トラべレックス":["AB1F-Shops-N-3-7"],"ハニーズ":["AB1F-Shops-S-G-6"],"ビアード パパ":["AB1F-Shops-S-K-2"],"フルーツ ピークス":["AB1F-Shops-S-J-1"],"プロント":["AB1F-Shops-S-C-4"],"マクドナルド":["AB1F-Shops-N-5-4"],"ミスター ドーナツ":["AB1F-Shops-S-G-3"],"ミズノショップ":["AB1F-Shops-S-E-2"],"リーガル":["AB1F-Shops-N-3-8"],"ルピシア":["AB1F-Shops-S-H-5"],"ローソン":["AB1F-Shops-N-4-11"],"七宝麻辣湯":["AB1F-Shops-S-C-8"],"三本珈琲店":["AB1F-Shops-S-C-1"],"上等カレー":["AB1F-Shops-S-A-3"],"匠 Jang":["AB1F-Shops-S-B-4"],"博多一風堂":["AB1F-Shops-S-C-2"],"吾照里":["AB1F-Shops-S-A-7"],"和幸":["AB1F-Shops-S-A-6"],"山下本気うどん":["AB1F-Shops-N-4-3"],"崎陽軒 中華食堂":["AB1F-Shops-S-A-8"],"広州市場":["AB1F-Shops-S-A-4"],"日本旅行":["AB1F-Shops-N-3-7"],"春水堂":["AB1F-Shops-S-B-9"],"昭和堂薬局":["AB1F-Shops-N-4-9"],"東京ますいわ屋":["AB1F-Shops-S-D-5"],"東京純豆腐":["AB1F-Shops-N-5-6"],"杵屋":["AB1F-Shops-S-A-2"],"横浜くりこ庵":["AB1F-Shops-N-5-3"],"横浜銀行ATMセンター":["AB1F-Shops-S-K-3"],"江戸前横丁 すし横 ばく天 ろ鰻":["AB1F-Shops-S-B-1"],"沖縄時間":["AB1F-Shops-S-A-5"],"洋麺屋五右衛門":["AB1F-Shops-S-E-6"],"浪花ろばた八角":["AB1F-Shops-S-B-3"],"牛たん とろろ 麦めし ねぎし":["AB1F-Shops-S-B-7"],"玉泉亭":["AB1F-Shops-S-B-6"],"第2チャンスセンター":["AB1F-Shops-S-G-12"],"美容の館グレース":["AB1F-Shops-S-D-1"],"舎鈴":["AB1F-Shops-S-B-5"],"銀座マギー":["AB1F-Shops-S-H-3"],"銀座ワシントン":["AB1F-Shops-N-3-6"],"青山フラワーマーケット":["AB1F-Shops-S-J-2"]}}')).flatMap(function(e){return Object.entries(e)});rF(Array.from(rN).flatMap(rE));let rB=rF(Array.from(rN).flatMap(rE).map(e=>{let[t,n]=e;return[n,t]}));function rb(e){return(0,u.jsx)("p",{children:e.tag})}function rO(e){return(0,u.jsx)("p",{children:e.tag})}function rM(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[e.info.x.tag,":",e.kind.tag]}),(0,u.jsx)("p",{children:e.info.title}),"stairs"===e.kind.tag?(0,u.jsx)(rb,{...e.kind}):"toilet"===e.kind.tag?(0,u.jsx)(rO,{...e.kind}):(0,u.jsx)(u.Fragment,{})]})}function rk(e){return(0,u.jsx)("p",{children:e.tag})}function r$(e){return(0,u.jsx)("p",{children:e.tag})}function rT(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[e.info.x.tag,":",e.kind.tag]}),(0,u.jsx)("p",{children:e.info.title}),"book"===e.kind.tag?(0,u.jsx)(rk,{...e.kind}):"restaurant"===e.kind.tag?(0,u.jsx)(r$,{...e.kind}):(0,u.jsx)(u.Fragment,{})]})}function rC(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("p",{children:e.info.title})})}var rD=JSON.parse('{"x":46.92,"y":13.12,"width":746.35,"height":536.83}');!function(e){let t;eP.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.initialFidx;eK.send({type:"SELECT",fidx:t,force:!0}),eQ.postMessage({type:"INIT",cfg:e.floorsConfig})}}),eG.select.add(e=>eK.send({type:"SELECT",fidx:e})),eG.selectDone.add(e=>eK.send({type:"SELECT.DONE",fidx:e})),tA.fullscreen.add(rf),eP.init.add(rm),tA.position.add(()=>{var e;return e={type:"GET"},void rt.send(e)}),en.eventTick.add(ef),en.eventTick.add(rg.tick),en.get.add(()=>rx({type:"GET"})),en.sync.add(e=>rx({type:"SYNC",pos:e})),en.syncSync.add(e=>rx({type:"SYNCSYNC",pos:e})),eP.init.add(e=>{if(e.getSearchEntries){let t=e.getSearchEntries(e);ri.postMessage({type:"INIT",entries:t})}}),tl.start.add(function(e){rr.send({type:"SEARCH",req:e})}),er.layout.add(function(e){let{layout:t,force:n}=e;ej({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>eE())}),er.zoomStart.add(function(e){ej({type:"STYLE.ZOOM",...e})}),er.zoomEnd.add(function(e){ej({type:"STYLE.ZOOM",zoom:e.zoom})}),er.animation.add(function(e){ej({type:"STYLE.ANIMATION",animation:e})}),er.animationEnd.add(function(){ej({type:"STYLE.ANIMATION.END"})}),er.mode.add(function(e){ej({type:"STYLE.MODE",mode:e})}),en.eventExpire.add(eE),tA.reset.add(nQ),tA.fullscreen.add(nQ),tA.position.add(nQ),tA.recenter.add(nQ),tA.zoomOut.add(nQ),tA.zoomIn.add(nQ),tl.endDone.add(e=>tp.send({type:"DETAIL",...e})),tc.open.add(()=>{let e;return e=!0,et(tc.openDone,e)}),tc.openDone.add(e=>tp.send({type:e?"OPEN":"CANCEL"})),tc.close.add(()=>tp.send({type:"CANCEL"})),tc.closeDone.add(()=>{requestAnimationFrame(()=>{var e,t;null==(t=e2.get("detail"))||null==(e=t.querySelector(".detail"))||e.scroll(0,0)})}),eG.lock.add(e=>tk({type:"SWITCH",fidx:e})),eG.selectDone.add(()=>tk({type:"SWITCH.DONE"})),tl.end.add(e=>tM.send({type:"SEARCH.END",res:e})),tc.open.add(()=>tb.set("locked")),tc.closeDone.add(()=>tk({type:"SEARCH.DONE"})),tc.closeDone.add(()=>tb.set("panning")),en.getDone.add(e=>{null!==e&&tk({type:"SCROLL.GET.DONE",scroll:e})}),en.syncSyncDone.add(e=>{null!==e&&tk({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),er.resize.add(e=>{let{layout:t,force:n}=e;return tk({type:"RESIZE",layout:t,force:n})}),er.mode.add(tC),er.zoomStart.add(()=>{tT=!0}),er.zoomEnd.add(()=>{tT=!1}),tA.reset.add(()=>tk({type:"HOME"})),tA.recenter.add(()=>tk({type:"RECENTER"})),tA.rotate.add(()=>tk({type:"ROTATE"})),tA.zoomOut.add(()=>tk({type:"ZOOM",z:-1,p:null})),tA.zoomIn.add(()=>tk({type:"ZOOM",z:1,p:null})),tB.multiStart.add(()=>ee(en.get)),tB.multiStart.add(()=>tb.set("touching")),tB.multiEnd.add(()=>tb.set("panning")),tB.zoom.add(e=>{let{z:t,p:n}=e;return tk({type:"ZOOM",z:t>0?1:-1,p:n})}),eP.rendered.add(()=>tk({type:"RENDERED"})),eK.start(),rl.start(),rt.start(),rd.start(),rp.start(),rr.start(),eA.start(),nX.start(),tp.start(),tM.start();let n=(d({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:n7,isUiRendered:nD,...e}),d({...c}),{...c,origViewBox:t,...e});eX(n);let r=document.getElementById(n.root);if(null===r)throw Error("#root not found!");r.onwheel=function(e){var t;let n=r.children[0];e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||tT)&&e.preventDefault()},r.oncontextmenu=function(e){e.preventDefault()},r.ontouchmove=function(e){if(tT){var t;if(e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui")return;e.preventDefault()}else if(!n_)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rl.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rl.send(t)},(0,e1.createRoot)(r).render((0,u.jsx)(s.StrictMode,{children:(0,u.jsx)(rv,{})}));let o=document.getElementById("style-root");if(null===o)throw Error("#style-root not found!");(0,e1.createRoot)(o).render((0,u.jsx)(s.StrictMode,{children:(0,u.jsx)(e5,{})}))}({renderMap:function(e){let{floors:t,data:{origViewBox:n}}=e,{viewBox:r,width:o,height:i}=function(){let{scroll:e,svg:t}=ew(e=>e.layout);return{viewBox:L(t),width:G(e.width),height:G(e.height)}}(),{fidxToOnAnimationEnd:a,urls:l}=e0();return void 0===t?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"content",children:(0,u.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:o,height:i,children:t.floors.map((e,t)=>(0,u.jsx)(s.Fragment,{children:(0,u.jsx)(rA,{origViewBox:n,idx:t,url:l.get(t),onAnimationEnd:a(t)})},t))})})},isMapRendered:function(){return!0},...{root:"root",title:"Yokohama Porta (svgmapviewer demo)",origViewBox:JSON.parse('{"x":0,"y":0,"width":800,"height":550}'),origBoundingBox:rD,zoomFactor:2,floorsConfig:{floors:[{name:"B1F",href:rj}],initialFidx:0},...{getSearchEntries:function(){return rw.map(e=>{let[t,n]=e;return{address:t,pos:n}})},getSearchInfo:function(e){let t=rB.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},renderInfo:function(e){return"facility"===e.info.x.tag?(0,u.jsx)(rM,{info:e.info,kind:e.info.x.kind}):"shop"===e.info.x.tag?(0,u.jsx)(rT,{info:e.info,kind:e.info.x.kind}):"unknown"===e.info.x.tag?(0,u.jsx)(rC,{info:e.info}):(0,u.jsx)(u.Fragment,{})}}}})}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.u=e=>"static/js/async/"+e+"."+({147:"61200f51",968:"871aa4b5"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,o)=>{if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var s=1/0,i=0;i<e.length;i++){for(var[n,r,o]=e[i],l=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(l=!1,o<s&&(s=o));if(l){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/YokohamaPorta/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,o,[i,s,l]=n,c=0;if(i.some(e=>0!==t[e])){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},(r=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var s=a.O(void 0,["783","45","773"],()=>a(433));s=a.O(s)})();