(()=>{"use strict";var e,t,n,r,o={984(e,t,n){let r,o,i;var a,s=n(797);let l={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:l,internals:l,origin:l,measures:l,viewbox:l,points:l,lines:l,multilinestrings:l,multipolygons:l},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(e){return(0,s.createElement)("p",{},e.info.title)}};function d(e){c={...c,...e}}var h=n(617);n(58);var u=n(815),p=n(622);let x=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),y=u.Ay$.array(x),g=u.Ay$.object({ids:y}),m=p.codec(p.string(),g,{decode:(e,t)=>{try{return JSON.parse(e)}catch(n){return n instanceof p.ZodError&&t.issues.push({code:"invalid_format",format:"json",input:e,message:n.message}),p.NEVER}},encode:e=>JSON.stringify(e)}),f=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),S=u.Ay$.set(f),A=u.Ay$.object({ids:S}),v=u.Ay$.codec(g,A,{decode:e=>({ids:new Set(e.ids)}),encode:e=>({ids:Array.from(e.ids)})});u.Ay$.pipe(m,v);let F=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var w=n(997);function B(e,t,n){let[r,o,i]=e,[a,s]=t;return r*a+o*s+i*n}function j(e,t,n){return[B(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),B(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function E(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function b(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}var O=n(304);let $=n(853).I3(function(e,t){return O._k.compare(e.x,t.x)||O._k.compare(e.y,t.y)}),M={x:0,y:0};function N(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,o=e.x*n,i=e.y*r;return{...e,x:o,y:i}}function k(e,t,n,r){return{x:e,y:t,width:n,height:r}}let T={x:0,y:0,width:1,height:1};function D(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function L(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function C(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function R(e,t){return{...e,x:t.x,y:t.y}}function I(e){return function(e){let{x:t,y:n,width:r,height:o}=e;return`${t} ${n} ${r} ${o}`}(function(e,t){let{x:n,y:r,width:o,height:i}=e;return{x:t(n),y:t(r),width:t(o),height:t(i)}}(e,function(e){return Math.round(100*e)/100}))}function z(e){let{x:t,y:n,width:r,height:o}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+o}}}function H(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function W(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function U(e){let[[t,n],[r,o]]=e;return{tl:{x:t,y:n},br:{x:r,y:o}}}function Y(e,t){return[j(e,function(e){let[t]=e;return t}(t),0),j(e,function(e){let[,t]=e;return t}(t),0),j(e,function(e){let[,,t]=e;return t}(t),1)]}function P(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function Z(e,t,n,r){var o,i;return o=function(e,t){let[n,r]=t;return[P(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),P([-n,-r])].reduce(Y)}("number"==typeof(i=t)?[i,i]:"x"in i?[i.x,i.y]:i,[n,r]),(0,w.Fs)(e,z,W,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>j(o,e,1)),U,H)}function q(e){return Math.round(100*e)/100}function V(e){return Math.round(1e7*e)/1e7}var G=n(599),X=n(112),_=n(125),J=n(609),K=n(292);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function ee(e){e.forEach(e=>e())}function et(e,t){e.forEach(e=>e(t))}let en={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},er={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function eo(e){return void 0!==e&&"number"==typeof e}function ei(e,t,n,r,o,i){return new DOMMatrixReadOnly(e instanceof Array?e:eo(e)&&eo(t)&&eo(n)&&eo(r)&&eo(o)&&eo(i)?[e,t,n,r,o,i]:void 0)}let ea={container:T,scroll:T,content:ei(),svgOffset:{x:-0,y:-0},svgScale:1,svg:T};function es(e){let{container:t,outer:n,svgScale:r,inner:o}=e,{x:i,y:a}=n;return{container:t,scroll:t,content:ei(),svgOffset:{x:-i,y:-a},svgScale:r,svg:o}}function el(e){let{scroll:t,content:n,svgOffset:r,svgScale:o,svg:i}=e;return ei().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/o,1/o).translate(-i.x,-i.y)}function ec(e,t){let n=e.height,r=n*t;return k((e.width-r)/2,0,r,n)}function ed(e,t){let n=e.width,r=n/t;return k(0,(e.height-r)/2,n,r)}let eh={...ea,config:{fontSize:16,container:T,outer:T,inner:T,svgScale:1}};function eu(e,t){let n=L(e.scroll);return ep(e,t,t,n)}function ep(e,t,n,r){let o=el(e).inverse().transformPoint(r),i=Z(e.scroll,[t,n],r.x,r.y),a=N(e.svgOffset,[t,n]),s=Z(e.svg,[t,n],o.x,o.y);return{...e,scroll:i,svgOffset:a,svg:s}}function ex(e,t){var n,r;let o=L({...e.scroll,x:0,y:0}),i=(n=o.x,r=o.y,ei().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:i}}function ey(e,t){let n=e.scroll,r=b(N(t,-1),n);return(0,w.Fs)(e,e=>({...e,scroll:C(e.scroll,r)}),e=>{let t,r,o,i,a,s,l;return t=R(e.scroll,n),r=e.content.inverse(),i=E(o=L(e.scroll),b(e.scroll,n)),a=r.transformPoint(o),s=N(b(r.transformPoint(i),a),-e.svgScale),l=C(e.svg,s),{...e,scroll:t,svg:l}})}function eg(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,o=t.scrollWidth,i=t.scrollHeight;if(null===n)return!1;let a=o-e.width,s=i-e.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${i}] vs. request=[${e.width}, ${e.height}]`),!1;let l=Math.round(-e.x),c=Math.round(-e.y);if(l<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==l&&(t.scrollLeft=l),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-l)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let h=t.scrollTop;return!(Math.abs(h-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${h}`),!1)}let em={scroll:T,client:{width:0,height:0},timeStamp:0};function ef(e){let t=e.currentTarget;null!==t&&(em={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let eS=(0,X.e)(eh),eA=(0,_.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,J.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,J.a)({}),updateSvgMatrix:(0,J.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:o}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-o.x,-o.y)}(t)}}),updateGeoMatrix:(0,J.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,J.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,o=Math.max(n.width,n.height)/2*r,i=Math.round(Math.log10(o)),a=(t=o/Math.pow(10,i-1),Q.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:s}=a[0],l=s*Math.pow(10,i-1);return{svg:l,client:l/r}}(t)}}),updateScroll:(0,J.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x+o.width/2,y:r.y+o.height/2};return i.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x,y:r.y},s={x:r.x+o.width,y:r.y+o.height};return{start:i.transformPoint(a),end:i.transformPoint(s)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:eh,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:M,distanceRadius:{svg:0,client:0},geoRange:{start:M,end:M},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,J.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return eS.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,K.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,J.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,J.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,J.a)({animation:e=>{let{event:{animation:t}}=e;return null===t?"":function(e){let{matrix:t,origin:n}=e,r=ei();return`
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
`}(t)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,J.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({animation:null,animating:!1}),target:"Idle"}}}}}),ev=(0,K.c)(eA,{systemId:"system-viewer1"});function eF(e){ev.send(e)}function ew(e){return(0,G.d4)(ev,t=>e(t.context))}function eB(){eF({type:"STYLE.SCROLL",currentScroll:em})}function ej(){return ew(e=>e.layout.container)}function eE(){return ew(e=>e.distanceRadius)}let eb=`
position: absolute;
left: 0;
top: 0;
`,eO=`
position: absolute;
right: 0;
top: 0;
`,e$=`
position: absolute;
left: 0;
bottom: 0;
`,eM=`
position: absolute;
right: 0;
bottom: 0;
`,eN=`
margin: 0;
`,ek=`
padding: 0;
`,eT=`
${eN} ${ek}
`,eD=`
box-sizing: border-box;
`,eL=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eC=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eR=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eI=`
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
`,eP=`
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
`,eq={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var eV=n(238);let eG={init:new Set,rendered:new Set},eX=function(e){et(eG.init,e)},e_=function(){ee(eG.rendered)},eJ=(0,X.e)(0),eK=(0,_.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,J.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,J.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eJ.set(t.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,J.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eJ.set(t.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,eV.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,eV.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,J.a)({prevFidx:null}),target:"Idle"}}}}}),eQ=(0,K.c)(eK);eQ.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,et(eq.lock,t)});let e0=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function e1(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,G.d4)(eQ,t=>e(t.context))),o=(0,s.useMemo)(()=>(function(e,t,n){let r=c.floorsConfig;if(void 0===r)return null;let o=r.floors.map((r,o)=>{var i,a,s,l,c,d,h;return i=e,a=t,s=n,(l=o)!=i||s?l===a?(c=l,`
.fidx-${c} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(d=l,`
.fidx-${d} {
  visibility: hidden;
}
  `):(h=l,`
.fidx-${h} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${o}
${eZ}
`})(t,n,void 0===r.get(t)),[t,n,r]),i=(0,s.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,et(eq.selectDone,n))},[t]),a=(0,s.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,et(eq.lock,r))},[t,n]);return{fidx:t,prevFidx:n,style:o,fidxToOnAnimationEnd:i,fidxToOnClick:a,urls:r}}e0.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;eQ.send({type:"IMAGE",fidx:e,blob:n})}}},e0.onerror=e=>{console.error("floors error",e)},e0.onmessageerror=e=>{console.error("floors messageerror",e)};var e5=n(284);function e2(){let e=ew(e=>e.rendered);(0,s.useEffect)(()=>{requestAnimationFrame(()=>e_())},[e]);let t=ew(e=>e.shown),n=ew(e=>e.appearing)?`
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
  width: ${q(r.width)}px;
  height: ${q(r.height)}px;
}
`;return(0,h.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,o]})}let e3=new Map;function e4(e,t,n){(0,s.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:e3.get(n)??null;if(null===r)return;let o=r.querySelector(`#${e}`)??null;if(null===o||null!==o.shadowRoot)return;let i=o.attachShadow({mode:"open"});e3.set(e,i),(0,e5.createRoot)(i).render(t)})(e,t,n),[e,n,t])}let e6={bus:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,h.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,h.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,h.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,h.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,h.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,h.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,h.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,h.jsx)("use",{x:"8.5",href:"#_person2"}),(0,h.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,h.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,h.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,children:[(0,h.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,h.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,h.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,h.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,h.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,h.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,h.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,h.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,h.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,children:[(0,h.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,h.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,h.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,h.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,h.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,h.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,h.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,h.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,h.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,h.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,h.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,h.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,h.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,h.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,h.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,h.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,h.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,h.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,h.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,h.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function e8(){return(0,h.jsx)("g",{className:"assets",children:(0,h.jsx)(e7,{})})}function e7(){return(0,h.jsx)("g",{className:"symbols",children:Object.entries(e6).map((e,t)=>{let[n,r]=e;return(0,h.jsx)(s.Fragment,{children:r({id:n})},t)})})}function e9(e){return e>.5?-1:+(e<.5)}function te(e){return e<.3?1:e>.7?-1:0}function tt(e,t,n,r){let o={x:t/2,y:n/2},i=t/20,a=i/2;function s(t){var n;let r,o;return n={x:e.h,y:e.v},r=t.x*n.x,o=t.y*n.y,{...t,x:r,y:o}}let l=e.th<Math.PI/4,c=0===e.v,d=0===e.h,h=s(N(o,-1)),u=s(c||d?b(N(o,-1),{x:r,y:r}):b(N(o,-1),{x:l?r:0,y:l?0:r})),[p,x]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:l?[{x:0,y:0},s({x:0,y:i})]:[{x:0,y:0},s({x:i,y:0})],y=E(h,p),g=E(h,x);return{p:h,q:u,a:y,b:g}}function tn(e){return{open:e,animating:!1}}function tr(e){return e.open||e.animating?null:{open:!0,animating:!0}}function to(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function ti(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function ta(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function ts(e){let{open:t,animating:n}=e;return t||n}let tl={start:new Set,end:new Set,endDone:new Set},tc={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},td={p:M,psvg:M,fidx:0,layout:ea,info:{title:""}};function th(e){return function(t,n){let r=t[n],o=e(r);return t[n]=null===o?r:o,t}}let tu=(0,_.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return ts(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return ts(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,J.a)({canceling:()=>!0}),endCancel:(0,J.a)({canceling:()=>!1}),open:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return th(tr)(n,r)}}),close:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return th(ti)(n,r)}}),handle:(0,J.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return th(n[r].open?to:ta)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:td,m:{header:tn(!0),detail:tn(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,J.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:o}}=e;return{psvg:t,p:el(o).transformPoint(t),fidx:n,info:r,layout:o}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,K.n)("isDetailVisible")},{actions:(0,J.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,K.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,J.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,eV.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,J.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,K.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,J.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,K.r)({type:"DONE"})]}}}}}),tp=(0,K.c)(tu);function tx(){return(0,G.d4)(tp,e=>e.context)}function ty(){return tx().m.header}function tg(){return tx().m.detail}function tm(e){return(0,h.jsxs)("div",{className:"balloon",children:[(0,h.jsx)(tS,{...e}),e.children,(0,h.jsx)("style",{children:tf})]})}tp.on("CLOSE.DONE",()=>ee(tc.closeDone));let tf=`
.balloon,
.balloon-svg {
  ${eb}
  ${eH}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tS(e){let t=e._hv;if(null===t)return(0,h.jsx)("svg",{});let{viewBox:n,width:r,height:o,fg:i,bg:a}=function(e,t){let{bw:n,bh:r,lh:o,d:i,width:a,height:s}=t,l=k(-a/2,-a/2,a,s),{body:c,leg:d}=function(e,t,n,r){let o={x:t/2,y:n/2},i=`
m${-o.x},${-o.y}
h${t}
v${n}
h${-t}
z
`,{p:a,q:s,a:l,b:c}=tt(e,t,n,r),d=b(s,l),h=b(c,s),u=b(a,c);return{body:i,leg:`
m${l.x},${l.y}
l${d.x},${d.y}
l${h.x},${h.y}
l${u.x},${u.y}
z
`}}(e,n,r,o);function h(e){return`M${e},${e} ${c} M${e},${e} ${d}`}return{viewBox:l,width:a,height:s,bg:h(i),fg:h(0)}}(t,e._size);return(0,h.jsxs)("svg",{className:"balloon-svg",viewBox:I(n),width:r,height:o,children:[(0,h.jsx)("path",{className:"bg",d:a}),(0,h.jsx)("path",{className:"fg",d:i}),(0,h.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tA(e){let{_p:t,_hv:n,_size:r,_leg:o}=e,i=tg(),a=null!==t&&null!==n&&ts(i)?function(e,t,n,r){let{open:o,animating:i}=e,{width:a,height:s}=n,l=N(r.q,-1);if(i){let[e,n]=o?[0,1]:[1,0],[r,i]=o?[0,1]:[1,0],[c,d]=o?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[h,u]=o?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],p=o?eY:eP;return`
.detail,
.balloon {
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --dp-x: ${l.x}px;
  --dp-y: ${l.y}px;
  --oa: ${e};
  --ob: ${n};
  --sa: ${r};
  --sb: ${i};
  --timing: ${p};
  --dxa: ${c};
  --dxb: ${h};
  --dya: ${d};
  --dyb: ${u};
  --pww: ${-a/2}px;
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
  --dp-x: ${l.x}px;
  --dp-y: ${l.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-a/2}px;
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
`}(i,t,r,o):".balloon, .detail { visibility: hidden; }";return(0,h.jsx)("style",{children:a})}let tv={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},tF=()=>ee(tv.zoomIn),tw=()=>ee(tv.zoomOut),tB=()=>ee(tv.rotate),tj=()=>ee(tv.reset),tE=()=>ee(tv.recenter),tb={multiStart:new Set,multiEnd:new Set,zoom:new Set},tO=(0,X.e)("panning");tO.subscribe(e=>{let t;return t=e,et(er.mode,t)});let t$=(0,_.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,J.a)({rendered:!0}),emitGetScroll:(0,eV.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,eV.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}),emitSyncScrollSync:(0,eV.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}),calcZoomAnimation:(0,J.a)({animation:e=>{var t,n,r,o,i,a,s,l,d,h,u;let p,x,y,g,m,f,S,A,{context:{animationReq:v,layout:F}}=e;return null===v?null:"zoom"===v.type?(t=F,n=v.z,r=v.p,p=el(t).inverse().transformPoint(r),x=1/(o=n,Math.pow(c.zoomFactor,o)),y=ei().scale(1/x,1/x),{type:"Zoom",svg:Z(t.svg,x,p.x,p.y),svgScale:t.svgScale*x,q:y,o:r}):"home"===v.type?(i=F,g=L((a=function(e){let{config:t,content:n}=e;return{config:t,...es(t),content:n}}(F)).config.inner),m=el(i).transformPoint(g),f=a.svgScale/i.svgScale,A=(function(e,t){if(e instanceof DOMMatrixReadOnly)return ei(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return ei(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((S=L(i.container)).x-m.x,S.y-m.y).multiply((s=1/f,l=1/f,d=m.x,h=m.y,ei().scale(s,l,1,d,h,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:A,o:null}):(u=v.p,{type:"Rotate",deg:90,q:ei().rotate(90),o:u})}}),updateLayoutFromZoom:(0,J.a)({prevLayout:e=>{let{context:{layout:t}}=e;return t},layout:e=>{let{context:{layout:t,animation:n}}=e;return function(e,t){var n,r,o;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:R(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,o=t.svgScale,{...e,svg:r,svgScale:o}):ex(e,t.deg)}(t,n)}}),endZoom:(0,J.a)({prevLayout:null,animation:null,zoom:e=>{let{context:{zoom:t,animationReq:n}}=e;return t*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:e=>{let{context:{rotate:t,animationReq:n}}=e;return t+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,J.a)({cursor:e=>{let{context:{origLayout:t}}=e;return L(t.container)},layout:e=>{let{context:{origLayout:t,rotate:n}}=e;return ex(eu(t,9),n)}}),emitSyncAnimation:(0,eV.a)(e=>{let{context:{animation:t}}=e;return{type:"SYNC.ANIMATION",animation:t}}),emitZoomStart:(0,eV.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.START",layout:t,zoom:n}}),emitZoomEnd:(0,eV.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.END",layout:t,zoom:n}}),resetCursor:(0,J.a)({cursor:e=>{let{context:{layout:t}}=e;return L(t.container)}}),resizeLayout:(0,J.a)({rendered:!1,origLayout:(e,t)=>{let{layout:n}=t;return n},layout:(e,t)=>{let{layout:n}=t;return eu(n,9)}}),updateLayoutFromScroll:(0,J.a)({layout:e=>{let{context:t}=e,{scroll:n}=em;return ey(t.layout,n)}}),emitSyncLayout:(0,eV.a)(e=>{let{context:{layout:t,rendered:n}}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}),emitSearchStart:(0,eV.a)(e=>{let{context:{layout:t,cursor:n}}=e,{scroll:r}=em;return{type:"SEARCH.START",req:{psvg:el(ey(t,r)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,eV.a)((e,t)=>{let{context:n}=e,{res:r}=t,{scroll:o}=em,i=ey(n.layout,o);return{type:"SEARCH.END.DONE",res:null===r?null:{...r,layout:i}}}),emitSwitch:(0,eV.a)((e,t)=>{let{fidx:n}=t;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,eV.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:eh,prevLayout:null,layout:eh,cursor:L(eh.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,K.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:(0,J.a)({cursor:e=>{let{event:{pos:t}}=e;return t}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,J.a)({animationReq:e=>{let{context:{layout:t},event:{z:n,p:r}}=e;return{type:"zoom",z:n,p:r??L(t.container)}}}),target:"Zooming"},HOME:{actions:(0,J.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,J.a)({animationReq:e=>{let{context:{layout:t}}=e;return{type:"rotate",deg:90,p:L(t.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,J.a)({animationReq:null}),type:"final"}}}}}),tM=(0,K.c)(t$,{systemId:"system-viewer1"});function tN(e){tM.send(e)}tM.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,et(tl.start,t)}),tM.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tM.send({type:"SEARCH.DONE"}):(t=r,et(tl.endDone,t),n=r.psvg,et(tc.open,n))}),tM.on("ZOOM.START",e=>{let t;return t=e,et(er.zoomStart,t)}),tM.on("ZOOM.END",e=>{let t;return t=e,et(er.zoomEnd,t)}),tM.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,et(eq.select,t)}),tM.on("SWITCH.DONE",()=>ee(eq.unlock)),tM.on("SYNC.ANIMATION",e=>{let t,{animation:n}=e,r=(null==n?void 0:n.q)??null,o=(null==n?void 0:n.o)??null;null!==r&&(t={matrix:r,origin:o},et(er.animation,t))}),tM.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},et(er.layout,t)}),tM.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,et(en.sync,t)}),tM.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,et(en.syncSync,t)}),tM.on("SCROLL.GET",()=>ee(en.get));let tk=!1,tT=!1;function tD(e){tk="locked"===e,tT="locked"===e}function tL(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tC),()=>{t.removeEventListener("wheel",tC)}},[e]),e}function tC(e){let t=e.currentTarget;tT&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function tR(e){let t,{_detail:n}=e,r=tL();return(0,h.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void tp.send(e)},children:[c.renderInfo&&(1!==(t=Object.values(n.info)).length||"string"!=typeof t[0]||""!==t[0])&&c.renderInfo({info:n.info}),(0,h.jsx)("style",{children:tI})]})}let tI=`
.detail {
  ${eb}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eW}
  ${eD}
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
  ${eI}
  margin: 1.5em;
  text-align: center;
}

p {
  ${eI}
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
`;function tz(){return e4("detail",(0,h.jsx)(tH,{}),"ui"),(0,h.jsx)("div",{id:"detail"})}function tH(){return(0,h.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,h.jsx)(tW,{}),(0,h.jsx)(tU,{})]})}function tW(){let e,t,n,r,o,i,a,s,l,c,d,u,p=tx().detail,x=(i=p.p,a=p.layout,s=function(e,t){let{x:n,y:r}=t,o=e.width/e.height,i={x:n/e.width,y:r/e.height},a=o>1?e9(i.x):te(i.x);return{h:a,v:o>1?te(i.y):e9(i.y),th:Math.atan2(e.height,e.width)}}(p.layout.container,i),l=a.container.width,t=50*(e=.01*Math.min(l,c=a.container.height)),n=50*e,r=10*e,o=t/100,u=tt(s,(d={bw:t,bh:n,lh:r,d:o,width:t+2*r+2*o,height:n+2*r+2*o}).bw,d.bh,d.lh),{_p:i,_hv:s,_W:l,_H:c,_size:d,_leg:u});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(tm,{...x}),(0,h.jsx)(tR,{_detail:p}),(0,h.jsx)(tA,{...x})]})}function tU(){return(0,h.jsx)("svg",{id:"ui-svg-defs",children:(0,h.jsx)("defs",{children:(0,h.jsx)(e8,{})})})}function tY(){return e4("footer",(0,h.jsx)(tP,{}),"ui"),(0,h.jsx)("div",{id:"footer"})}function tP(){let e=c;return(0,h.jsxs)("div",{className:"ui-content footer",children:[(0,h.jsx)("p",{children:e.copyright}),(0,h.jsxs)("style",{children:[tZ,(0,h.jsx)(tq,{})]})]})}let tZ=`
.footer {
  ${e$}
  ${eC}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${eI}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function tq(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eP;return(0,h.jsx)(h.Fragment,{children:`
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
`})}return(0,h.jsx)(h.Fragment,{children:`
.footer {
  --b: ${+!!e};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function tV(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("g",{id:"measure",children:(0,h.jsx)(t_,{})})})}function tG(){let{svg:e}=eE();return(0,h.jsxs)("div",{id:"distance",children:[(0,h.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),t0.map(t=>(0,h.jsxs)(s.Fragment,{children:[(0,h.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,h.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,h.jsx)("style",{children:(0,h.jsx)(tQ,{})})]})}function tX(){let e=ew(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${V(Math.abs(e.x))}`,o=`${n} ${V(Math.abs(e.y))}`;return(0,h.jsxs)("div",{id:"coordinate",children:[(0,h.jsx)("p",{id:"longitude",children:r}),(0,h.jsx)("p",{id:"latitude",children:o}),(0,h.jsx)("style",{children:(0,h.jsx)(tK,{})})]})}function t_(){let{width:e,height:t}=ej(),{client:n}=eE(),r=(0,s.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),o=(0,s.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),i=(0,s.useMemo)(()=>t0.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,h.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:o}),i.map((e,t)=>(0,h.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function tJ(){let{open:e,animating:t}=ty(),[n,r]=e?[0,1]:[1,0],o=t?`
.guides {
  --timing: ${e?eY:eP};
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
`;return(0,h.jsx)(h.Fragment,{children:o})}function tK(){let{width:e,height:t}=ej(),n=`
#distance,
#coordinate {
  ${eb}
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
  ${e$}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,h.jsxs)(h.Fragment,{children:[n,r,o]})}function tQ(){let{width:e,height:t}=ej(),{client:n}=eE(),r=`
.distance {
  ${eb}
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
`);return(0,h.jsxs)(h.Fragment,{children:[o,r,i,a]})}let t0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function t1(){return e4("guides",(0,h.jsx)(t5,{}),"ui"),(0,h.jsx)("div",{id:"guides"})}function t5(){var e;return!((null==(e=c.uiConfig)?void 0:e.showGuides)??!0)||c.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"ui-content guides",children:[(0,h.jsx)("svg",{className:"guides",children:(0,h.jsx)(tV,{})}),(0,h.jsx)(tG,{}),(0,h.jsx)(tX,{}),(0,h.jsxs)("style",{children:[t2,(0,h.jsx)(tJ,{})]})]})}let t2=`
.guides {
  ${eb}
  ${eL}
  ${eH}
  z-index: 2;
}

text {
  ${eI}
}
`;function t3(){let{fidx:e,fidxToOnClick:t}=e1(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"floors",children:[(0,h.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:o}=n;return(0,h.jsx)("li",{className:`floor-item ${t7(r===e)}`,onClick:t(r),children:o},r)})}),(0,h.jsx)("style",{children:t4})]})}let t4=`
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
`;function t6(){let{fidx:e}=e1(),t=c.floorsConfig;return void 0===t||t.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{children:[t.floors.map((t,n)=>(0,h.jsx)("h2",{className:`floor-name ${t7(n===e)}`,children:t.name},n)),(0,h.jsx)("style",{children:t8})]})}let t8=`
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
`;function t7(e){return e?"selected":"unselected"}function t9(){return e4("header",(0,h.jsx)(ne,{}),"ui"),(0,h.jsx)("div",{id:"header"})}function ne(){let e=c;return(0,h.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void tp.send(e)},children:[(0,h.jsx)("h1",{className:"title",onClick:()=>tj(),children:e.title}),(0,h.jsx)(t6,{}),(0,h.jsxs)("style",{children:[nt,(0,h.jsx)(nn,{})]})]})}let nt=`
.header {
  ${eb}
  ${eC}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${eI}
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

`;function nn(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eP;return(0,h.jsx)(h.Fragment,{children:`
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
`})}return(0,h.jsx)(h.Fragment,{children:`
.header {
  --b: ${+!!e};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nr(){return e4("left",(0,h.jsx)(no,{}),"ui"),(0,h.jsx)("div",{id:"left"})}function no(){return(0,h.jsxs)("div",{className:"ui-content left bottom",children:[(0,h.jsx)(t3,{}),(0,h.jsxs)("style",{children:[ni,(0,h.jsx)(na,{})]})]})}let ni=`
.left {
  ${eb}
  ${eR}
  padding: 0.4em;
  font-size: smaller;
  ${eH}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eP;return(0,h.jsx)(h.Fragment,{children:`
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
`})}return(0,h.jsx)(h.Fragment,{children:`
.left {
  --b: ${+!!e};
  transform-origin: 0% 50%;
  opacity: var(--b);
  transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
  will-change: opacity, transform;
}
`})}function ns(){return(0,h.jsx)("div",{className:"button-item fullscreen",onClick:()=>ee(tv.fullscreen),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nl})})})}let nl=`
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
`;function nc(){return(0,h.jsx)("div",{className:"button-item home",onClick:()=>tj(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nd})})})}let nd=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nh(){return c.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("div",{className:"button-item position",onClick:()=>ee(tv.position),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nx})})})}let nu=3*Math.sqrt(2),np=nu+6,nx=`
M 0,0
m 0,${np/2}
l -3,-3
a ${nu},${nu} 0,1,1 6,0
z
m 0,${-np+nu+nu/2}
a ${nu/2},${nu/2} 0,1,0 0,${-nu}
a ${nu/2},${nu/2} 0,1,0 0,${nu}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function ny(){return(0,h.jsx)("div",{className:"button-item recenter",onClick:()=>tE(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ng})})})}let ng=`
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
`;function nm(){return(0,h.jsx)("div",{className:"button-item rotate",onClick:()=>tB(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nf})})})}let nf=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nS(){return(0,h.jsx)("div",{className:"button-item zoom-in",onClick:()=>tF(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nA})})})}let nA=`
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
`;function nv(){return(0,h.jsx)("div",{className:"button-item zoom-out",onClick:()=>tw(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nF})})})}let nF=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nw(){return e4("right",(0,h.jsx)(nB,{}),"ui"),(0,h.jsx)("div",{id:"right"})}function nB(){return(0,h.jsxs)("div",{className:"ui-content right bottom",children:[(0,h.jsx)(nE,{}),(0,h.jsx)("style",{children:nj})]})}let nj=`
.right {
  ${eO}
  ${eR}
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
`;function nE(){return(0,h.jsxs)("div",{className:"button",children:[(0,h.jsx)(nh,{}),(0,h.jsx)(nc,{}),(0,h.jsx)(ns,{}),(0,h.jsx)(ny,{}),(0,h.jsx)(nm,{}),(0,h.jsx)(nv,{}),(0,h.jsx)(nS,{}),(0,h.jsxs)("style",{children:[nb,(0,h.jsx)(nO,{})]})]})}let nb=`
.button {
  font-size: large;
  margin: 0;
  ${eC}
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
`;function nO(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eY:eP;return(0,h.jsx)(h.Fragment,{children:`
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
`})}return(0,h.jsx)(h.Fragment,{children:`
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
`})}function n$(){return e4("screen",(0,h.jsx)(nM,{}),"ui"),(0,h.jsx)("div",{id:"screen"})}function nM(){let e=tL();return(0,h.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>ee(tc.close),children:(0,h.jsxs)("style",{children:[nN,(0,h.jsx)(nk,{})]})})}let nN=`
.screen {
  ${eb}
  ${eL}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nk(){let{open:e,animating:t}=tg(),n=ew(e=>e.animating);if(!t)return e?(0,h.jsx)(h.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,h.jsx)(h.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,h.jsx)(h.Fragment,{children:".screen { display: none; }"});{let[t,n]=e?[0,.3]:[.3,0],r=e?eY:eP;return(0,h.jsx)(h.Fragment,{children:`
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
`})}}function nT(){return e4("ui",(0,h.jsx)(nD,{})),(0,h.jsx)("div",{id:"ui"})}function nD(){return(0,h.jsxs)("div",{className:"ui",children:[(0,h.jsx)(n$,{}),(0,h.jsx)(t9,{}),(0,h.jsx)(tY,{}),(0,h.jsx)(nr,{}),(0,h.jsx)(nw,{}),(0,h.jsx)(t1,{}),(0,h.jsx)(tz,{})]})}function nL(){var e,t,n;let r;return null!==(r=(null==(n=document.querySelector("#ui"))||null==(t=n.shadowRoot)||null==(e=t.children)?void 0:e.length)??null)&&r>0}function nC(){tE()}var nR=n(469),nI=n(336),nz=n(5);let nH=nR.OZ($),nW=nI.aU(O._k),nU=nI.tf(),nY=nI.JI(O.Eq,nR.CA());function nP(e){return(0,w.Fs)(e,nI.zu(nH),nR.x1(e=>0===e.length?nz.dv:nz.zN(e[0])))}function nZ(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:N(t,1/e.length)}function nq(e){return new Map((0,w.Fs)(e.changedTouches,Array.from,nR.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let nV=(0,_.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,J.a)({touches:e=>{var t;let n,r,o,a,s,l,c,d,h,{context:{touches:u},event:p}=e;return"TOUCH.START"===p.type?(t=p.ev,o=nZ(r=nP(n=nY.concat(u.vecs,nq(t)))),s=2!==r.length?null:.5>Math.abs((a=b(r[0],r[1])).y/a.x),{...u,vecs:n,points:r,cursor:o,horizontal:s}):"TOUCH.MOVE"===p.type?function(e,t){var n,r,o,a;let s,l=nq(t),c=nW.mapWithIndex(e.vecs,(e,t)=>(0,w.Fs)(l.get(e),nz.k$,nz.AU(()=>t,nR.xW(t)))),d=nP(c),h=nZ(d),[u,p]=d;if(null===h||u===i||p===i)return{...e,vecs:c,points:d,cursor:h};let x=(n=e.dists,r=Math.sqrt((o=u,a=p,Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2))),s=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||s>0?[r,...n]:n),y=function(e){let[t,n,r,o]=e;return t===i||n===i||r===i||o===i?null:t<n&&n<r&&r<o?-1:t>n&&n>r&&r>o?1:null}(x);return{vecs:c,points:d,cursor:h,dists:x,z:y,horizontal:e.horizontal}}(u,p.ev):"TOUCH.END"===p.type?(l=nq(p.ev),h=nZ(d=nP(c=nU.filterMapWithIndex(u.vecs,(e,t)=>l.has(e)?nz.dv:nz.zN(t)))),{vecs:c,points:d,cursor:h,dists:0===c.size?[]:u.dists,z:0===c.size?null:u.z,horizontal:u.horizontal}):u}}),raiseOp:(0,K.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,J.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,J.a)({mode:"pan"}),enterPinch:(0,J.a)({mode:"pinch"}),emitMulti:(0,eV.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,eV.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,K.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,K.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,K.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),nG=(0,K.c)(nV),nX=!1;function n_(e){nG.send({type:"TOUCH.START",ev:e})}function nJ(e){nG.send({type:"TOUCH.MOVE",ev:e})}function nK(e){nG.send({type:"TOUCH.END",ev:e})}function nQ(){nG.send({type:"CANCEL"})}function n0(e){tk||tN({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n1(e){let t;null!==e&&(t=e,et(en.eventTick,t))}function n5(e){return(0,h.jsxs)("div",{id:"viewer",className:"container",onTouchStart:n_,onTouchMove:nJ,onTouchEnd:nK,onClick:n0,onContextMenu:nC,onScroll:n1,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),tN(t),ee(er.animationEnd)},children:[e.children,(0,h.jsx)(n2,{})]})}function n2(){let e=`
.container {
  ${eb}
  ${eL}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("style",{children:e}),(0,h.jsx)(n3,{}),(0,h.jsx)(n4,{}),(0,h.jsx)(n6,{})]})}function n3(){let e=ew(e=>e.layout.content),t=`
.content {
  ${eb}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,h.jsx)("style",{children:t})}function n4(){let e=ew(e=>e.animation);return(0,h.jsx)("style",{children:e})}function n6(){let{style:e}=e1();return null===e?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("style",{children:e})}function n8(){return null!==document.querySelector(".container")}nG.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(nX=!0,ee(tb.multiStart)):(ee(tb.multiEnd),nX=!1)}),nG.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,o=n.z;null!==r&&null!==o&&(t={z:o>0?1:-1,p:r},et(tb.zoom,t))});var n7=n(376);async function n9(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let re=(0,_.mj)({types:{events:{},emitted:{}},actors:{api:(0,n7.Sx)(()=>n9(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,J.a)({position:e=>{let{event:t}=e;return t.output}}),(0,eV.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,J.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rt=(0,K.c)(re),rn=(0,_.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,eV.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eV.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),rr=(0,K.c)(rn);function ro(e){rr.send(e)}rr.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=c.mapCoord.matrix.inverse().transformPoint(t),r=eJ.get();ri.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rr.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,et(tl.end,t)});let ri=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function ra(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}ri.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":ro({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=t.res,null===(r=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),ro({type:"SEARCH.DONE",res:null})):ro({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",t.error),ro({type:"SEARCH.DONE",res:null})}},ri.onerror=e=>{console.error("search error",e)},ri.onmessageerror=e=>{console.error("search messageerror",e)};let rs=(0,_.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ra(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,eV.a)({type:"RESET"}),recenter:(0,eV.a)({type:"RECENTER"}),rotate:(0,eV.a)({type:"ROTATE"}),zoom:(0,eV.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,eV.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,eV.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,J.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||o}})(t.mod,n.key)}}),handleUp:(0,J.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&o}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ra(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),rl=(0,K.c)(rs);rl.on("RESET",tj),rl.on("RECENTER",tE),rl.on("ROTATE",tB),rl.on("ZOOM.IN",tF),rl.on("ZOOM.OUT",tw),rl.on("FLOOR.LEVEL.UP",()=>ee(eq.levelUp)),rl.on("FLOOR.LEVEL.DOWN",()=>ee(eq.levelDown));let rc=(0,_.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:T,next:T,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,J.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,K.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!D(t.prev,t.next)},actions:[(0,J.a)({waited:0}),(0,eV.a)(e=>{var t,n,r,o;let i,a,{context:s}=e;return{type:"LAYOUT",layout:(t=c.fontSize,n=s.next,i=L((o={config:r=function(e,t,n,r){var o;let i,a,s,l,{outer:c,scale:d}=(o=r??n,i=t.width/t.height,l=(s=i>(a=o.width/o.height))?ec(t,a):ed(t,a),{outer:l,inner:s?ec(o,i):ed(o,i),scale:s?o.height/t.height:o.width/t.width,rO:i,rI:a,v:s});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,c.origViewBox,c.origBoundingBox),...es(r)}).scroll),a=o.container.width/o.container.height,ep(o,a<1?1/a:1,a<1?1:+a,i)),force:!s.first}}),(0,J.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,J.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,K.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return D(t,eS.get().container)},actions:(0,J.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rd=(0,K.c)(rc);rd.on("LAYOUT",e=>{let t;return t=e,et(er.resize,t)}),window.addEventListener("resize",()=>{rd.send({type:"RESIZE"})});let rh=(0,_.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,J.a)({ticked:!1}),set:(0,J.a)({ticked:!0}),expire:(0,eV.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ru=(0,_.mj)({types:{},actions:{getScroll:(0,J.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,o=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),k(t,n,r,o)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return eg(n)}},actors:{syncScrollLogic:(0,n7.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!eg(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,eV.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,J.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,eV.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,J.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rp=(0,K.c)(ru,{systemId:"system-scroll1"});function rx(e){rp.send(e)}rp.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.getDone,t)}),rp.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.syncSyncDone,t)});let ry=(a=()=>ee(en.eventExpire),r=rh.provide({delays:{DURATION:500}}),(o=(0,K.c)(r)).on("EXPIRE",a),o.start(),{tick:function(){o.send({type:"TICK"})}}),rg=(0,X.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function rm(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),rg.trigger.set({names:t}))}async function rf(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rS=`
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
  ${eb}
  ${eL}
  ${eT}
  ${eD}
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

${F}
`,rA=function(){var e;let t=(null==(e=c.cartoConfig)?void 0:e.backgroundColor)??c.backgroundColor??"darkgray",n={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n5,{...n,children:c.renderMap(n)}),(0,h.jsx)(nT,{}),(0,h.jsxs)("style",{children:[rS,`body { background-color: ${t}; }`]})]})};function rv(e){let{origViewBox:t,url:n}=e;return(0,h.jsx)("image",{href:n,x:t.x,y:t.y,width:t.width,height:t.height})}function rF(e){let{origViewBox:t,url:n,labels:r}=e;return void 0===r?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("svg",{href:n,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:I(t),children:[(0,h.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),r.map((e,t)=>(0,h.jsxs)("text",{...rj(e.attrs),children:["id"in e.attrs&&"style"in e.attrs&&(0,h.jsx)("style",{children:`#${e.attrs.id} { ${e.attrs.style}; }`}),e.children&&e.children.map((e,t)=>(0,h.jsx)("tspan",{...rj(e.attrs),children:e.text??""},t))]},t))]})}let rw=/^[{].*$/,rB=/^style$/;function rj(e){return Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!t.match(rw)&&!t.match(rB)}).map(e=>{var t;let[n,r]=e;return[!(t=n).match(/^.*-.*$/)||t.match(/^(aria|data)-.*$/)?t:t.split("-").map((e,t)=>{var n;let r;return 0===t?e:(r=(n=e).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}let rE=n.p+"static/svg/floor-B1F.89605a54.svg",rb=Object.values(JSON.parse('{"B1F":{"AB1F-Shops-1-1-1":{"x":353,"y":10},"AB1F-Shops-1-1-2":{"x":401,"y":10},"AB1F-Shops-1-1-3":{"x":449,"y":10},"AB1F-Shops-1-2-1":{"x":341,"y":46},"AB1F-Shops-1-2-2":{"x":341,"y":74},"AB1F-Shops-1-2-3":{"x":341,"y":115},"AB1F-Shops-1-2-4":{"x":341,"y":154},"AB1F-Shops-1-3-1":{"x":401,"y":87},"AB1F-Shops-1-3-2":{"x":437,"y":62.5},"AB1F-Shops-1-3-3":{"x":437,"y":77},"AB1F-Shops-1-3-4":{"x":437,"y":90.5},"AB1F-Shops-1-3-5":{"x":437,"y":105},"AB1F-Shops-1-3-6":{"x":420,"y":122},"AB1F-Shops-1-3-7":{"x":420,"y":140},"AB1F-Shops-1-3-8":{"x":401,"y":158},"AB1F-Shops-1-3-9":{"x":436,"y":158},"AB1F-Shops-1-4-1":{"x":495,"y":65},"AB1F-Shops-1-4-2":{"x":495,"y":92},"AB1F-Shops-1-4-3":{"x":495,"y":121},"AB1F-Shops-1-4-4":{"x":495,"y":140},"AB1F-Shops-1-4-5":{"x":495,"y":158},"AB1F-Shops-2-1":{"x":343,"y":190},"AB1F-Shops-2-2":{"x":338,"y":215},"AB1F-Shops-2-3":{"x":343,"y":240},"AB1F-Shops-2-4":{"x":403,"y":190},"AB1F-Shops-2-5":{"x":398,"y":210},"AB1F-Shops-2-6":{"x":438,"y":210},"AB1F-Shops-2-7":{"x":418,"y":240},"AB1F-Shops-2-8":{"x":418,"y":260},"AB1F-Shops-2-9":{"x":493,"y":190},"AB1F-Shops-2-10":{"x":493,"y":215},"AB1F-Shops-2-11":{"x":493,"y":255},"AB1F-Shops-3-1":{"x":343,"y":300},"AB1F-Shops-3-2":{"x":343,"y":315},"AB1F-Shops-3-3":{"x":343,"y":335},"AB1F-Shops-3-4":{"x":343,"y":355},"AB1F-Shops-3-5":{"x":343,"y":370},"AB1F-Shops-3-6":{"x":343,"y":395},"AB1F-Shops-3-7":{"x":343,"y":410},"AB1F-Shops-3-8":{"x":418,"y":300},"AB1F-Shops-3-9":{"x":398,"y":325},"AB1F-Shops-3-10":{"x":403,"y":345},"AB1F-Shops-3-11":{"x":403,"y":365},"AB1F-Shops-3-12":{"x":403,"y":390},"AB1F-Shops-3-13":{"x":418,"y":410},"AB1F-Shops-3-14":{"x":438,"y":390},"AB1F-Shops-3-15":{"x":438,"y":375},"AB1F-Shops-3-16":{"x":433,"y":355},"AB1F-Shops-3-17":{"x":438,"y":340},"AB1F-Shops-3-18":{"x":438,"y":320},"AB1F-Shops-3-19":{"x":493,"y":300},"AB1F-Shops-3-20":{"x":493,"y":330},"AB1F-Shops-3-21":{"x":493,"y":355},"AB1F-Shops-3-22":{"x":493,"y":395},"AB1F-Shops-4-1":{"x":253,"y":465},"AB1F-Shops-4-2":{"x":288,"y":475},"AB1F-Shops-4-3":{"x":288,"y":450},"AB1F-Shops-5-1":{"x":8,"y":525},"AB1F-Shops-5-2":{"x":13,"y":610},"AB1F-Shops-5-3":{"x":8,"y":635},"AB1F-Shops-5-4":{"x":33,"y":630},"AB1F-Shops-5-5":{"x":33,"y":605},"AB1F-Shops-5-6":{"x":68,"y":605},"AB1F-Shops-5-7":{"x":63,"y":630},"AB1F-Shops-5-8":{"x":78,"y":630},"AB1F-Shops-5-9":{"x":98,"y":635},"AB1F-Shops-5-10":{"x":103,"y":615},"AB1F-Shops-5-11":{"x":103,"y":600},"AB1F-Shops-5-12":{"x":73,"y":540},"AB1F-Shops-5-13":{"x":103,"y":540},"AB1F-Shops-5-14":{"x":98,"y":490},"AB1F-Shops-6-1":{"x":143,"y":555},"AB1F-Shops-6-2":{"x":163,"y":540},"AB1F-Shops-6-3":{"x":183,"y":540},"AB1F-Shops-6-4":{"x":198,"y":540},"AB1F-Shops-6-5":{"x":218,"y":555},"AB1F-Shops-6-6":{"x":218,"y":530},"AB1F-Shops-6-7":{"x":273,"y":530},"AB1F-Shops-6-8":{"x":258,"y":550},"AB1F-Shops-6-9":{"x":288,"y":555},"AB1F-Shops-6-10":{"x":138,"y":605},"AB1F-Shops-6-11":{"x":138,"y":630},"AB1F-Shops-6-12":{"x":168,"y":605},"AB1F-Shops-6-13":{"x":178,"y":630},"AB1F-Shops-6-14":{"x":198,"y":605},"AB1F-Shops-6-15":{"x":203,"y":630},"AB1F-Shops-6-16":{"x":218,"y":605},"AB1F-Shops-6-17":{"x":238,"y":605},"AB1F-Shops-6-18":{"x":258,"y":630},"AB1F-Shops-6-19":{"x":258,"y":610},"AB1F-Shops-6-20":{"x":288,"y":605},"AB1F-Shops-6-21":{"x":298,"y":630},"AB1F-Shops-7-1":{"x":398,"y":450},"AB1F-Shops-7-2":{"x":448,"y":475},"AB1F-Shops-7-3":{"x":483,"y":450},"AB1F-Shops-7-4":{"x":553,"y":470},"AB1F-Shops-7-5":{"x":603,"y":460},"AB1F-Shops-8-1":{"x":378,"y":525},"AB1F-Shops-8-2":{"x":413,"y":525},"AB1F-Shops-8-3":{"x":448,"y":525},"AB1F-Shops-8-4":{"x":483,"y":525},"AB1F-Shops-8-5":{"x":483,"y":555},"AB1F-Shops-8-6":{"x":438,"y":555},"AB1F-Shops-8-7":{"x":378,"y":550},"AB1F-Shops-8-8":{"x":378,"y":605},"AB1F-Shops-8-9":{"x":403,"y":605},"AB1F-Shops-8-10":{"x":433,"y":605},"AB1F-Shops-8-11":{"x":458,"y":605},"AB1F-Shops-8-12":{"x":488,"y":605},"AB1F-Shops-8-13":{"x":488,"y":630},"AB1F-Shops-8-14":{"x":458,"y":630},"AB1F-Shops-8-15":{"x":418,"y":630},"AB1F-Shops-8-16":{"x":378,"y":630},"AB1F-Shops-9-1":{"x":533,"y":530},"AB1F-Shops-9-2":{"x":548,"y":525},"AB1F-Shops-9-3":{"x":573,"y":530},"AB1F-Shops-9-4":{"x":608,"y":540},"AB1F-Shops-9-5":{"x":573,"y":555},"AB1F-Shops-9-6":{"x":538,"y":555},"AB1F-Shops-10-1":{"x":648,"y":545},"AB1F-Shops-10-2":{"x":678,"y":540},"AB1F-Shops-10-3":{"x":708,"y":545},"AB1F-Shops-10-4":{"x":743,"y":545},"AB1F-Shops-10-5":{"x":763,"y":545},"AB1F-Shops-10-6":{"x":778,"y":540},"AB1F-Shops-10-7":{"x":803,"y":545},"AB1F-Shops-10-8":{"x":823,"y":540},"AB1F-Shops-10-9":{"x":853,"y":540},"AB1F-Shops-10-10":{"x":873,"y":540},"AB1F-Shops-10-11":{"x":893,"y":540},"AB1F-Shops-10-12":{"x":913,"y":540},"AB1F-Shops-10-13":{"x":943,"y":540},"AB1F-Shops-10-14":{"x":963,"y":540},"AB1F-Shops-10-15":{"x":993,"y":540},"AB1F-Shops-11-1":{"x":533,"y":605},"AB1F-Shops-11-2":{"x":563,"y":605},"AB1F-Shops-11-3":{"x":593,"y":605},"AB1F-Shops-11-4":{"x":613,"y":605},"AB1F-Shops-11-5":{"x":613,"y":630},"AB1F-Shops-11-6":{"x":598,"y":630},"AB1F-Shops-11-7":{"x":578,"y":630},"AB1F-Shops-11-8":{"x":543,"y":630},"AB1F-Shops-11-9":{"x":643,"y":635},"AB1F-Shops-11-10":{"x":658,"y":610},"AB1F-Shops-11-11":{"x":688,"y":615},"AB1F-Shops-11-12":{"x":708,"y":615},"AB1F-Shops-11-13":{"x":738,"y":605},"AB1F-Shops-11-14":{"x":738,"y":620},"AB1F-Shops-11-15":{"x":738,"y":635},"AB1F-Shops-11-16":{"x":758,"y":610},"AB1F-Shops-11-17":{"x":783,"y":610},"AB1F-Shops-11-18":{"x":798,"y":610},"AB1F-Shops-11-19":{"x":818,"y":610},"AB1F-Shops-11-20":{"x":783,"y":635},"AB1F-Shops-11-21":{"x":863,"y":605},"AB1F-Shops-11-22":{"x":863,"y":635},"AB1F-Shops-11-23":{"x":893,"y":620},"AB1F-Shops-11-24":{"x":913,"y":620},"AB1F-Shops-11-25":{"x":943,"y":620},"AB1F-Shops-12-1":{"x":893,"y":700},"AB1F-Shops-12-2":{"x":813,"y":700},"AB1F-Shops-12-3":{"x":778,"y":695},"AB1F-Shops-12-4":{"x":753,"y":685},"AB1F-Shops-12-5":{"x":758,"y":710},"AB1F-Shops-12-6":{"x":738,"y":710},"AB1F-Shops-12-7":{"x":738,"y":685},"AB1F-Shops-12-8":{"x":688,"y":695}}}')).concat().flatMap((e,t)=>Object.entries(e).map(e=>{let[n,r]=e;return[n,{coord:r,fidx:t}]}));function rO(e){let[t,n]=e;return n.map(e=>[t,e])}function r$(e){return e.reduce(function(e,t){let[n,r]=t,o=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,o]])},new Map)}let rM=Object.values(JSON.parse('{"B1F":{"3COINS":["AB1F-Shops-11-11"],"CHAYA":["AB1F-Shops-1-4-1"],"CHIYODA HAKI-GOKOCHI":["AB1F-Shops-10-1"],"Dr.ストレッチ":["AB1F-Shops-9-2"],"iPhone修理救急便":["AB1F-Shops-8-14"],"J・マーケット":["AB1F-Shops-5-1"],"J・マーケット（八重洲地下2番通り）":["AB1F-Shops-1-3-4"],"RE/SET(リセット)":["AB1F-Shops-3-5"],"Shoeshine TOKYO by靴みがき本舗":["AB1F-Shops-3-16"],"Standard Products / THREEPPY":["AB1F-Shops-7-2"],"WWS":["AB1F-Shops-8-5"],"Zoff":["AB1F-Shops-6-12"],"あーす・ぺっとはうす":["AB1F-Shops-11-4"],"いきなり！ステーキ":["AB1F-Shops-11-13"],"いと井":["AB1F-Shops-5-7"],"えびそば一幻":["AB1F-Shops-10-14"],"おでん屋たけし":["AB1F-Shops-11-19"],"おらが蕎麦":["AB1F-Shops-10-7"],"がっとん":["AB1F-Shops-5-2"],"しゃぶしゃぶ但馬屋":["AB1F-Shops-1-1-3"],"ちょもらんま酒場":["AB1F-Shops-1-2-2"],"てんや":["AB1F-Shops-11-22"],"ひもの野郎":["AB1F-Shops-10-15"],"ぷらす鍼灸整骨院":["AB1F-Shops-2-8"],"ほけん百花":["AB1F-Shops-2-11"],"まくらぼ":["AB1F-Shops-9-1"],"らーめん七彩飯店":["AB1F-Shops-1-4-4"],"りそな銀行ATM":["AB1F-Shops-6-21"],"アイシティ":["AB1F-Shops-3-1"],"アイリスメガネ":["AB1F-Shops-9-6"],"アエナ":["AB1F-Shops-6-3"],"アシックス ウォーキング":["AB1F-Shops-6-2"],"アストリア":["AB1F-Shops-8-1"],"アトリエはるか":["AB1F-Shops-6-6"],"アルプス":["AB1F-Shops-5-11"],"アロマ珈琲":["AB1F-Shops-1-3-6"],"アンテナアメリカ":["AB1F-Shops-11-8"],"イオン銀行":["AB1F-Shops-2-7"],"インティミッシミ":["AB1F-Shops-8-11"],"エイチ・アイ・エス":["AB1F-Shops-2-3"],"エリックサウス":["AB1F-Shops-1-4-3"],"エルベンス ドゥ":["AB1F-Shops-6-14"],"エルーラ":["AB1F-Shops-8-12"],"エース バッグス＆ラゲージ":["AB1F-Shops-11-2","AB1F-Shops-12-8"],"オッズオネスト":["AB1F-Shops-3-4"],"オリックスレンタカー":["AB1F-Shops-2-1"],"オリヒカ":["AB1F-Shops-9-4"],"オーバカナル":["AB1F-Shops-7-1"],"カッフェ イタリアン・トマト":["AB1F-Shops-6-10"],"カフェカルディーノ/ハガレ":["AB1F-Shops-10-4"],"カラーフィールド":["AB1F-Shops-6-16"],"カルディコーヒーファーム":["AB1F-Shops-6-4"],"カレー＆ビリヤニ ニルヴァーナTokyo":["AB1F-Shops-12-6"],"キャンドゥ":["AB1F-Shops-6-1"],"キリンシティ":["AB1F-Shops-10-12"],"クイーンズウェイ / GINZA BODY CARE":["AB1F-Shops-7-5"],"ココカラファイン ヤエチカ北口店":["AB1F-Shops-5-12"],"ココカラファイン ヤエチカ南口店":["AB1F-Shops-11-12"],"サイアムオーキッド":["AB1F-Shops-11-25"],"サロン コスメティック ザ スパ":["AB1F-Shops-11-1"],"ザ・カーブ・ド・オイスター":["AB1F-Shops-12-2"],"スシロー":["AB1F-Shops-12-3"],"スターバックス コーヒー":["AB1F-Shops-2-2"],"ストラ":["AB1F-Shops-8-13"],"セブン-イレブン":["AB1F-Shops-12-1"],"タカキュー":["AB1F-Shops-3-22"],"タリーズコーヒー":["AB1F-Shops-1-1-1"],"チャージ":["AB1F-Shops-6-15"],"チュチュアンナ":["AB1F-Shops-6-9"],"ディファレンス":["AB1F-Shops-11-3"],"トウキョウシャツ":["AB1F-Shops-3-21"],"トッコ クローゼット":["AB1F-Shops-8-2"],"トヨタレンタカー":["AB1F-Shops-9-3"],"トラベレックス":["AB1F-Shops-1-3-2"],"ドゥクラッセ":["AB1F-Shops-8-6"],"ドン・キホーテ(お菓子ドンキ・お酒ドンキ)":["AB1F-Shops-6-5"],"ナチュラルビューティーベーシック":["AB1F-Shops-6-20"],"ネイルクイック":["AB1F-Shops-3-10"],"バビーズ ヤエチカ":["AB1F-Shops-2-5"],"パウワウ":["AB1F-Shops-8-3"],"ビューズアイブロウスタジオ":["AB1F-Shops-3-18"],"ファス":["AB1F-Shops-3-9"],"ファミリーマート":["AB1F-Shops-6-7"],"フィットフィット":["AB1F-Shops-8-10"],"フラガ・ベイシカ":["AB1F-Shops-8-9"],"フランクリン・プランナー":["AB1F-Shops-2-9"],"ブレフ":["AB1F-Shops-3-20"],"プロント":["AB1F-Shops-10-9"],"ペッパーランチ":["AB1F-Shops-1-2-4"],"マジックミシン":["AB1F-Shops-3-15"],"マツモトキヨシ":["AB1F-Shops-3-19"],"マドラス":["AB1F-Shops-11-10"],"マネケン":["AB1F-Shops-11-15"],"マンモスコーヒー":["AB1F-Shops-3-11"],"ミスターミニット":["AB1F-Shops-6-11"],"ミズノ":["AB1F-Shops-10-3"],"メガネスーパー":["AB1F-Shops-3-7"],"ユナイテッドアローズ グリーンレーベル リラクシング":["AB1F-Shops-8-7"],"ユニクロ":["AB1F-Shops-3-8"],"ラッシュ":["AB1F-Shops-6-19"],"ラフィネ":["AB1F-Shops-3-3"],"リアット！":["AB1F-Shops-3-14"],"リカーズハセガワ北口店":["AB1F-Shops-5-13"],"リカーズハセガワ本店":["AB1F-Shops-1-3-1"],"リブ":["AB1F-Shops-6-17"],"リーガル":["AB1F-Shops-9-5"],"ルーニィ":["AB1F-Shops-8-16"],"ロクシタン":["AB1F-Shops-8-8"],"ローソン":["AB1F-Shops-2-10"],"ワコール ザ ストア":["AB1F-Shops-8-4"],"三井住友銀行ＡＴＭ":["AB1F-Shops-4-2"],"三六":["AB1F-Shops-1-2-3"],"三陽食堂":["AB1F-Shops-1-3-9"],"串の味 東八":["AB1F-Shops-10-6"],"俺のイタリアン":["AB1F-Shops-11-7"],"元祖油堂":["AB1F-Shops-5-3"],"八重洲もつ焼酒場てけてけ":["AB1F-Shops-11-21"],"八重洲サービスセンター":["AB1F-Shops-3-17"],"八重洲地下街郵便局":["AB1F-Shops-4-1"],"初藤":["AB1F-Shops-4-3"],"労金キャッシュサービス":["AB1F-Shops-1-3-3"],"北海道フーディスト":["AB1F-Shops-3-13"],"卵と私":["AB1F-Shops-10-13"],"吉野家":["AB1F-Shops-1-3-8"],"吾照里":["AB1F-Shops-10-11"],"和幸":["AB1F-Shops-1-1-2"],"喜八堂":["AB1F-Shops-2-6"],"大衆酒場　神田屋":["AB1F-Shops-1-2-1"],"奥芝商店":["AB1F-Shops-12-7"],"宝くじショップ":["AB1F-Shops-1-3-5"],"山田養蜂場":["AB1F-Shops-3-6"],"恵那栗工房 良平堂":["AB1F-Shops-7-3"],"星乃珈琲店":["AB1F-Shops-7-4"],"梅もと":["AB1F-Shops-5-10"],"梅蘭":["AB1F-Shops-10-5"],"楽天モバイル":["AB1F-Shops-2-4"],"洋麺屋 五右衛門":["AB1F-Shops-11-23"],"海人酒房":["AB1F-Shops-10-10"],"游亀亭":["AB1F-Shops-11-5"],"牛たん ねぎし":["AB1F-Shops-1-4-2"],"玉丁本店":["AB1F-Shops-11-17"],"町田商店":["AB1F-Shops-5-4"],"番外地":["AB1F-Shops-6-13"],"神乃珈琲":["AB1F-Shops-8-15"],"秋葉原カリガリ":["AB1F-Shops-12-4"],"立鮨 すし横":["AB1F-Shops-5-9"],"築地 すし好":["AB1F-Shops-11-24"],"蕎麦きり みよた":["AB1F-Shops-1-4-5"],"証明写真コーナー（八重洲地下１番通り）":["AB1F-Shops-3-2"],"証明写真コーナー（北）​":["AB1F-Shops-5-14"],"証明写真コーナー（南）":["AB1F-Shops-11-14"],"豚山":["AB1F-Shops-5-5"],"鉄板酒場 鐵一":["AB1F-Shops-11-18"],"銀座ライオン":["AB1F-Shops-1-3-7"],"長岡食堂":["AB1F-Shops-5-8"],"風雲児":["AB1F-Shops-5-6"],"香十":["AB1F-Shops-3-12"],"鶏三和":["AB1F-Shops-11-16"],"麦まる":["AB1F-Shops-10-8"],"ＡＢＣマート":["AB1F-Shops-10-2"]}}')).flatMap(function(e){return Object.entries(e)});r$(Array.from(rM).flatMap(rO));let rN=r$(Array.from(rM).flatMap(rO).map(e=>{let[t,n]=e;return[n,t]}));var rk=JSON.parse('{"x":0,"y":0,"width":1011.5499,"height":720.84001}');!function(e){let t;eG.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;eQ.send({type:"INIT",nfloors:t,fidx:n}),e0.postMessage({type:"INIT",cfg:e.floorsConfig})}}),eq.select.add(e=>eQ.send({type:"SELECT",fidx:e})),eq.levelUp.add(()=>eQ.send({type:"LEVEL.UP"})),eq.levelDown.add(()=>eQ.send({type:"LEVEL.DOWN"})),eq.selectDone.add(e=>eQ.send({type:"SELECT.DONE",fidx:e})),tv.fullscreen.add(rf),eG.init.add(rm),tv.position.add(()=>{var e;return e={type:"GET"},void rt.send(e)}),en.eventTick.add(ef),en.eventTick.add(ry.tick),en.get.add(()=>rx({type:"GET"})),en.sync.add(e=>rx({type:"SYNC",pos:e})),en.syncSync.add(e=>rx({type:"SYNCSYNC",pos:e})),eG.init.add(e=>{if(e.getSearchEntries){let t=e.getSearchEntries(e);ri.postMessage({type:"INIT",entries:t})}}),tl.start.add(function(e){rr.send({type:"SEARCH",req:e})}),er.layout.add(function(e){let{layout:t,force:n}=e;eF({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>eB())}),er.zoomStart.add(function(e){eF({type:"STYLE.ZOOM",...e})}),er.zoomEnd.add(function(e){eF({type:"STYLE.ZOOM",zoom:e.zoom})}),er.animation.add(function(e){eF({type:"STYLE.ANIMATION",animation:e})}),er.animationEnd.add(function(){eF({type:"STYLE.ANIMATION.END"})}),er.mode.add(function(e){eF({type:"STYLE.MODE",mode:e})}),en.eventExpire.add(eB),tv.reset.add(nQ),tv.fullscreen.add(nQ),tv.position.add(nQ),tv.recenter.add(nQ),tv.zoomOut.add(nQ),tv.zoomIn.add(nQ),tl.endDone.add(e=>tp.send({type:"DETAIL",...e})),tc.open.add(()=>{let e;return e=!0,et(tc.openDone,e)}),tc.openDone.add(e=>tp.send({type:e?"OPEN":"CANCEL"})),tc.close.add(()=>tp.send({type:"CANCEL"})),tc.closeDone.add(()=>{requestAnimationFrame(()=>{var e,t;null==(t=e3.get("detail"))||null==(e=t.querySelector(".detail"))||e.scroll(0,0)})}),eq.lock.add(e=>tN({type:"SWITCH",fidx:e})),eq.selectDone.add(()=>tN({type:"SWITCH.DONE"})),tl.end.add(e=>tM.send({type:"SEARCH.END",res:e})),tc.open.add(()=>tO.set("locked")),tc.closeDone.add(()=>tN({type:"SEARCH.DONE"})),tc.closeDone.add(()=>tO.set("panning")),en.getDone.add(e=>{null!==e&&tN({type:"SCROLL.GET.DONE",scroll:e})}),en.syncSyncDone.add(e=>{null!==e&&tN({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),er.resize.add(e=>{let{layout:t,force:n}=e;return tN({type:"RESIZE",layout:t,force:n})}),er.mode.add(tD),er.zoomStart.add(()=>{tT=!0}),er.zoomEnd.add(()=>{tT=!1}),tv.reset.add(()=>tN({type:"HOME"})),tv.recenter.add(()=>tN({type:"RECENTER"})),tv.rotate.add(()=>tN({type:"ROTATE"})),tv.zoomOut.add(()=>tN({type:"ZOOM",z:-1,p:null})),tv.zoomIn.add(()=>tN({type:"ZOOM",z:1,p:null})),tb.multiStart.add(()=>ee(en.get)),tb.multiStart.add(()=>tO.set("touching")),tb.multiEnd.add(()=>tO.set("panning")),tb.zoom.add(e=>{let{z:t,p:n}=e;return tN({type:"ZOOM",z:t>0?1:-1,p:n})}),eG.rendered.add(()=>tN({type:"RENDERED"})),eQ.start(),rl.start(),rt.start(),rd.start(),rp.start(),rr.start(),ev.start(),nG.start(),tp.start(),tM.start();let n=(d({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:n8,isUiRendered:nL,...e}),d({...c}),{...c,origViewBox:t,...e});eX(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.2.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let r=document.getElementById(n.root);if(null===r)throw Error("#root not found!");r.onwheel=function(e){var t;let n=r.children[0];e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||tT)&&e.preventDefault()},r.oncontextmenu=function(e){e.preventDefault()},r.ontouchmove=function(e){if(tT){var t;if(e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui")return;e.preventDefault()}else if(!nX)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rl.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rl.send(t)},(0,e5.createRoot)(r).render((0,h.jsx)(s.StrictMode,{children:(0,h.jsx)(rA,{})}));let o=document.getElementById("style-root");if(null===o)throw Error("#style-root not found!");(0,e5.createRoot)(o).render((0,h.jsx)(s.StrictMode,{children:(0,h.jsx)(e2,{})}))}({renderMap:function(e){let{floors:t,data:{origViewBox:n}}=e,{viewBox:r,width:o,height:i}=function(){let{scroll:e,svg:t}=ew(e=>e.layout);return{viewBox:I(t),width:q(e.width),height:q(e.height)}}(),{fidxToOnAnimationEnd:a,urls:l}=e1();return void 0===t?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("div",{className:"content",children:(0,h.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:o,height:i,children:t.floors.map((e,t)=>(0,h.jsx)(s.Fragment,{children:(0,h.jsxs)("g",{className:`floor fidx-${t}`,onAnimationEnd:a(t),children:[(0,h.jsx)(rv,{origViewBox:n,idx:t,url:l.get(t),onAnimationEnd:a(t),labels:e.labels}),(0,h.jsx)(rF,{origViewBox:n,idx:t,url:l.get(t),onAnimationEnd:a(t),labels:e.labels})]})},t))})})},isMapRendered:function(){return!0},...{root:"root",title:"Yaechika (svgmapviewer demo)",origViewBox:JSON.parse('{"x":0,"y":0,"width":1011.5499,"height":720.84001}'),origBoundingBox:rk,zoomFactor:2,floorsConfig:{floors:[{name:"B1F",href:rE}],initialFidx:0},...{getSearchEntries:function(){return rb.map(e=>{let[t,n]=e;return{address:t,pos:n}})},getSearchInfo:function(e){let t=rN.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},renderInfo:function(e){return(0,h.jsx)("p",{children:e.info.title})}}}})}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.u=e=>"static/js/async/"+e+"."+({147:"4b182986",968:"f7305dae"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,o)=>{if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var s=1/0,i=0;i<e.length;i++){for(var[n,r,o]=e[i],l=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(l=!1,o<s&&(s=o));if(l){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/Yaechika/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,o,[i,s,l]=n,c=0;if(i.some(e=>0!==t[e])){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},(r=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var s=a.O(void 0,["783","845","902"],()=>a(984));s=a.O(s)})();