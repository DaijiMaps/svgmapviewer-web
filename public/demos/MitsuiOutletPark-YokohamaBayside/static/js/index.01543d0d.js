(()=>{var e,t,n,r,o={303(e,t,n){var r={"./floor-1F.svg":"901","./floor-2F.svg":"440","./floor-3F.svg":"71"};function o(e){return n(i(e))}function i(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=303},901(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-1F.e32e8c29.svg"},440(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-2F.5686f181.svg"},71(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-3F.757f05a6.svg"},854(e,t,n){"use strict";let r,o,i;var a,s=n(797);let l={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:l,internals:l,origin:l,measures:l,viewbox:l,points:l,lines:l,multilinestrings:l,multipolygons:l},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(e){return(0,s.createElement)("p",{},e.info.title)}};function d(e){c={...c,...e}}var h=n(617);n(774);var u=n(815),p=n(622);let x=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),y=u.Ay$.array(x),g=u.Ay$.object({ids:y}),m=p.codec(p.string(),g,{decode:(e,t)=>{try{return JSON.parse(e)}catch(n){return n instanceof p.ZodError&&t.issues.push({code:"invalid_format",format:"json",input:e,message:n.message}),p.NEVER}},encode:e=>JSON.stringify(e)}),f=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),S=u.Ay$.set(f),A=u.Ay$.object({ids:S}),v=u.Ay$.codec(g,A,{decode:e=>({ids:new Set(e.ids)}),encode:e=>({ids:Array.from(e.ids)})});u.Ay$.pipe(m,v);let E=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var F=n(997);function w(e,t,n){let[r,o,i]=e,[a,s]=t;return r*a+o*s+i*n}function j(e,t,n){return[w(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),w(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function O(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function T(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}var L=n(304);let N=n(853).I3(function(e,t){return L._k.compare(e.x,t.x)||L._k.compare(e.y,t.y)}),b={x:0,y:0};function M(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,o=e.x*n,i=e.y*r;return{...e,x:o,y:i}}function R(e,t,n,r){return{x:e,y:t,width:n,height:r}}let $={x:0,y:0,width:1,height:1};function C(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function k(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function D(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function I(e,t){return{...e,x:t.x,y:t.y}}function z(e){return function(e){let{x:t,y:n,width:r,height:o}=e;return`${t} ${n} ${r} ${o}`}(function(e,t){let{x:n,y:r,width:o,height:i}=e;return{x:t(n),y:t(r),width:t(o),height:t(i)}}(e,function(e){return Math.round(100*e)/100}))}function U(e){let{x:t,y:n,width:r,height:o}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+o}}}function H(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function W(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function Y(e){let[[t,n],[r,o]]=e;return{tl:{x:t,y:n},br:{x:r,y:o}}}function P(e,t){return[j(e,function(e){let[t]=e;return t}(t),0),j(e,function(e){let[,t]=e;return t}(t),0),j(e,function(e){let[,,t]=e;return t}(t),1)]}function B(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function Z(e,t,n,r){var o,i;return o=function(e,t){let[n,r]=t;return[B(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),B([-n,-r])].reduce(P)}("number"==typeof(i=t)?[i,i]:"x"in i?[i.x,i.y]:i,[n,r]),(0,F.Fs)(e,U,W,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>j(o,e,1)),Y,H)}function q(e){return Math.round(100*e)/100}function G(e){return Math.round(1e7*e)/1e7}var V=n(510),X=n(437),K=n(967),_=n(282),J=n(92);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function ee(e){e.forEach(e=>e())}function et(e,t){e.forEach(e=>e(t))}let en={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},er={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function eo(e){return void 0!==e&&"number"==typeof e}function ei(e,t,n,r,o,i){return new DOMMatrixReadOnly(e instanceof Array?e:eo(e)&&eo(t)&&eo(n)&&eo(r)&&eo(o)&&eo(i)?[e,t,n,r,o,i]:void 0)}let ea={container:$,scroll:$,content:ei(),svgOffset:{x:-0,y:-0},svgScale:1,svg:$};function es(e){let{container:t,outer:n,svgScale:r,inner:o}=e,{x:i,y:a}=n;return{container:t,scroll:t,content:ei(),svgOffset:{x:-i,y:-a},svgScale:r,svg:o}}function el(e){let{scroll:t,content:n,svgOffset:r,svgScale:o,svg:i}=e;return ei().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/o,1/o).translate(-i.x,-i.y)}function ec(e,t){let n=e.height,r=n*t;return R((e.width-r)/2,0,r,n)}function ed(e,t){let n=e.width,r=n/t;return R(0,(e.height-r)/2,n,r)}let eh={...ea,config:{fontSize:16,container:$,outer:$,inner:$,svgScale:1}};function eu(e,t){let n=k(e.scroll);return ep(e,t,t,n)}function ep(e,t,n,r){let o=el(e).inverse().transformPoint(r),i=Z(e.scroll,[t,n],r.x,r.y),a=M(e.svgOffset,[t,n]),s=Z(e.svg,[t,n],o.x,o.y);return{...e,scroll:i,svgOffset:a,svg:s}}function ex(e,t){var n,r;let o=k({...e.scroll,x:0,y:0}),i=(n=o.x,r=o.y,ei().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:i}}function ey(e,t){let n=e.scroll,r=T(M(t,-1),n);return(0,F.Fs)(e,e=>({...e,scroll:D(e.scroll,r)}),e=>{let t,r,o,i,a,s,l;return t=I(e.scroll,n),r=e.content.inverse(),i=O(o=k(e.scroll),T(e.scroll,n)),a=r.transformPoint(o),s=M(T(r.transformPoint(i),a),-e.svgScale),l=D(e.svg,s),{...e,scroll:t,svg:l}})}function eg(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,o=t.scrollWidth,i=t.scrollHeight;if(null===n)return!1;let a=o-e.width,s=i-e.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${i}] vs. request=[${e.width}, ${e.height}]`),!1;let l=Math.round(-e.x),c=Math.round(-e.y);if(l<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==l&&(t.scrollLeft=l),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-l)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let h=t.scrollTop;return!(Math.abs(h-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${h}`),!1)}let em={scroll:$,client:{width:0,height:0},timeStamp:0};function ef(e){let t=e.currentTarget;null!==t&&(em={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let eS=(0,X.e)(eh),eA=(0,K.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,_.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,_.a)({}),updateSvgMatrix:(0,_.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:o}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-o.x,-o.y)}(t)}}),updateGeoMatrix:(0,_.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,_.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,o=Math.max(n.width,n.height)/2*r,i=Math.round(Math.log10(o)),a=(t=o/Math.pow(10,i-1),Q.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:s}=a[0],l=s*Math.pow(10,i-1);return{svg:l,client:l/r}}(t)}}),updateScroll:(0,_.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x+o.width/2,y:r.y+o.height/2};return i.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x,y:r.y},s={x:r.x+o.width,y:r.y+o.height};return{start:i.transformPoint(a),end:i.transformPoint(s)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:eh,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:b,distanceRadius:{svg:0,client:0},geoRange:{start:b,end:b},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,_.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return eS.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,J.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,_.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,_.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,_.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,_.a)({animation:e=>{let{event:{animation:t}}=e;return null===t?"":function(e){let{matrix:t,origin:n}=e,r=ei();return`
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
`}(t)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,_.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,_.a)({animation:null,animating:!1}),target:"Idle"}}}}}),ev=(0,J.c)(eA,{systemId:"system-viewer1"});function eE(e){ev.send(e)}function eF(e){return(0,V.d4)(ev,t=>e(t.context))}function ew(){eE({type:"STYLE.SCROLL",currentScroll:em})}function ej(){return eF(e=>e.layout.container)}function eO(){return eF(e=>e.distanceRadius)}let eT=`
position: absolute;
left: 0;
top: 0;
`,eL=`
position: absolute;
right: 0;
top: 0;
`,eN=`
position: absolute;
left: 0;
bottom: 0;
`,eb=`
position: absolute;
right: 0;
bottom: 0;
`,eM=`
margin: 0;
`,eR=`
padding: 0;
`,e$=`
${eM} ${eR}
`,eC=`
box-sizing: border-box;
`,ek=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eD=`
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
`,eU=`
touch-action: none;
`,eH=`
pointer-events: none;
`,eW=`
pointer-events: initial;
`,eY=`
background-color: rgba(255, 255, 255, 0.5);
`,eP=`
cubic-bezier(0, 0, 0, 1)
`,eB=`
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
`,eq={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var eG=n(473);let eV={init:new Set,rendered:new Set},eX=function(e){et(eV.init,e)},eK=function(){ee(eV.rendered)},e_=(0,X.e)(0),eJ=(0,K.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,_.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,_.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return e_.set(t.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,_.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return e_.set(t.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,eG.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,eG.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,_.a)({prevFidx:null}),target:"Idle"}}}}}),eQ=(0,J.c)(eJ);eQ.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,et(eq.lock,t)});let e0=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function e1(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,V.d4)(eQ,t=>e(t.context))),o=(0,s.useMemo)(()=>(function(e,t,n){let r=c.floorsConfig;if(void 0===r)return null;let o=r.floors.map((r,o)=>{var i,a,s,l,c,d,h;return i=e,a=t,s=n,(l=o)!=i||s?l===a?(c=l,`
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
`})(t,n,void 0===r.get(t)),[t,n,r]),i=(0,s.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,et(eq.selectDone,n))},[t]),a=(0,s.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,et(eq.lock,r))},[t,n]);return{fidx:t,prevFidx:n,style:o,fidxToOnAnimationEnd:i,fidxToOnClick:a,urls:r}}e0.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;eQ.send({type:"IMAGE",fidx:e,blob:n})}}},e0.onerror=e=>{console.error("floors error",e)},e0.onmessageerror=e=>{console.error("floors messageerror",e)};var e2=n(284);function e5(){let e=eF(e=>e.rendered);(0,s.useEffect)(()=>{requestAnimationFrame(()=>eK())},[e]);let t=eF(e=>e.shown),n=eF(e=>e.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${eP};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",r=eF(e=>e.layout.scroll),o=`
.content {
  width: ${q(r.width)}px;
  height: ${q(r.height)}px;
}
`;return(0,h.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,o]})}let e3=new Map;function e4(e,t,n){(0,s.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:e3.get(n)??null;if(null===r)return;let o=r.querySelector(`#${e}`)??null;if(null===o||null!==o.shadowRoot)return;let i=o.attachShadow({mode:"open"});e3.set(e,i),(0,e2.createRoot)(i).render(t)})(e,t,n),[e,n,t])}let e7={bus:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,h.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,h.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,h.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,h.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,h.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,h.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,h.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,h.jsx)("use",{x:"8.5",href:"#_person2"}),(0,h.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,h.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,h.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,h.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,children:[(0,h.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,h.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,h.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,h.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,h.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,h.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,h.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,h.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,h.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,h.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,h.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,h.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,children:[(0,h.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,h.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,h.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,h.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,h.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,h.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,h.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,h.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,h.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,h.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,h.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,h.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,h.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,h.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,h.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,h.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,h.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,h.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,h.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,h.jsxs)("g",{fill:"white",stroke:"none",children:[(0,h.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,h.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,h.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function e6(){return(0,h.jsx)("g",{className:"assets",children:(0,h.jsx)(e9,{})})}function e9(){return(0,h.jsx)("g",{className:"symbols",children:Object.entries(e7).map((e,t)=>{let[n,r]=e;return(0,h.jsx)(s.Fragment,{children:r({id:n})},t)})})}function e8(e){return e>.5?-1:+(e<.5)}function te(e){return e<.3?1:e>.7?-1:0}function tt(e,t,n,r){let o={x:t/2,y:n/2},i=t/20,a=i/2;function s(t){var n;let r,o;return n={x:e.h,y:e.v},r=t.x*n.x,o=t.y*n.y,{...t,x:r,y:o}}let l=e.th<Math.PI/4,c=0===e.v,d=0===e.h,h=s(M(o,-1)),u=s(c||d?T(M(o,-1),{x:r,y:r}):T(M(o,-1),{x:l?r:0,y:l?0:r})),[p,x]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:l?[{x:0,y:0},s({x:0,y:i})]:[{x:0,y:0},s({x:i,y:0})],y=O(h,p),g=O(h,x);return{p:h,q:u,a:y,b:g}}function tn(e){return{open:e,animating:!1}}function tr(e){return e.open||e.animating?null:{open:!0,animating:!0}}function to(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function ti(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function ta(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function ts(e){let{open:t,animating:n}=e;return t||n}let tl={start:new Set,end:new Set,endDone:new Set},tc={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},td={p:b,psvg:b,fidx:0,layout:ea,info:{title:""}};function th(e){return function(t,n){let r=t[n],o=e(r);return t[n]=null===o?r:o,t}}let tu=(0,K.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return ts(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return ts(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,_.a)({canceling:()=>!0}),endCancel:(0,_.a)({canceling:()=>!1}),open:(0,_.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return th(tr)(n,r)}}),close:(0,_.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return th(ti)(n,r)}}),handle:(0,_.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return th(n[r].open?to:ta)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:td,m:{header:tn(!0),detail:tn(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,_.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:o}}=e;return{psvg:t,p:el(o).transformPoint(t),fidx:n,info:r,layout:o}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,J.n)("animationEnded")},{actions:(0,_.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,J.n)("isDetailVisible")},{actions:(0,_.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,J.n)("animationEnded")},{actions:(0,_.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,J.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,_.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,eG.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,_.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,J.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,_.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,J.r)({type:"DONE"})]}}}}}),tp=(0,J.c)(tu);function tx(){return(0,V.d4)(tp,e=>e.context)}function ty(){return tx().m.header}function tg(){return tx().m.detail}function tm(e){return(0,h.jsxs)("div",{className:"balloon",children:[(0,h.jsx)(tS,{...e}),e.children,(0,h.jsx)("style",{children:tf})]})}tp.on("CLOSE.DONE",()=>ee(tc.closeDone));let tf=`
.balloon,
.balloon-svg {
  ${eT}
  ${eH}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tS(e){let t=e._hv;if(null===t)return(0,h.jsx)("svg",{});let{viewBox:n,width:r,height:o,fg:i,bg:a}=function(e,t){let{bw:n,bh:r,lh:o,d:i,width:a,height:s}=t,l=R(-a/2,-a/2,a,s),{body:c,leg:d}=function(e,t,n,r){let o={x:t/2,y:n/2},i=`
m${-o.x},${-o.y}
h${t}
v${n}
h${-t}
z
`,{p:a,q:s,a:l,b:c}=tt(e,t,n,r),d=T(s,l),h=T(c,s),u=T(a,c);return{body:i,leg:`
m${l.x},${l.y}
l${d.x},${d.y}
l${h.x},${h.y}
l${u.x},${u.y}
z
`}}(e,n,r,o);return{viewBox:l,width:a,height:s,bg:`M${i},${i}`+c+`M${i},${i}`+d,fg:"M0,0"+c+"M0,0"+d}}(t,e._size);return(0,h.jsxs)("svg",{className:"balloon-svg",viewBox:z(n),width:r,height:o,children:[(0,h.jsx)("path",{className:"bg",d:a}),(0,h.jsx)("path",{className:"fg",d:i}),(0,h.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tA(e){let{_p:t,_hv:n,_size:r,_leg:o}=e,i=tg(),a=null!==t&&null!==n&&ts(i)?function(e,t,n,r,o){let{open:i,animating:a}=e,{width:s,height:l}=r,c=M(o.q,-1);if(a){let[e,n]=i?[0,1]:[1,0],[r,o]=i?[0,1]:[1,0],[a,d]=i?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[h,u]=i?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],p=i?eP:eB;return`
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
  --dxb: ${h};
  --dya: ${d};
  --dyb: ${u};
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
`}(i,t,0,r,o):".balloon, .detail { visibility: hidden; }";return(0,h.jsx)("style",{children:a})}let tv={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},tE=()=>ee(tv.zoomIn),tF=()=>ee(tv.zoomOut),tw=()=>ee(tv.rotate),tj=()=>ee(tv.reset),tO=()=>ee(tv.recenter),tT={multiStart:new Set,multiEnd:new Set,zoom:new Set},tL=(0,X.e)("panning");tL.subscribe(e=>{let t;return t=e,et(er.mode,t)});let tN=(0,K.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,_.a)({rendered:!0}),emitGetScroll:(0,eG.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,eG.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}),emitSyncScrollSync:(0,eG.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}),calcZoomAnimation:(0,_.a)({animation:e=>{var t,n,r,o,i,a,s,l,d,h,u,p,x;let y,g,m,f,S,A,v,E,{context:{animationReq:F,layout:w}}=e;return null===F?null:"zoom"===F.type?(t=w,n=F.z,r=F.p,y=el(t).inverse().transformPoint(r),g=1/(o=n,Math.pow(c.zoomFactor,o)),m=ei().scale(1/g,1/g),{type:"Zoom",svg:Z(t.svg,g,y.x,y.y),svgScale:t.svgScale*g,q:m,o:r}):"home"===F.type?(i=w,f=k((a=function(e){let{config:t,content:n}=e;return{config:t,...es(t),content:n}}(w)).config.inner),S=el(i).transformPoint(f),A=a.svgScale/i.svgScale,E=(function(e,t){if(e instanceof DOMMatrixReadOnly)return ei(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return ei(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((v=k(i.container)).x-S.x,v.y-S.y).multiply((s=1/A,l=1/A,d=S.x,h=S.y,ei().scale(s,l,1,d,h,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:E,o:null}):(u=0,p=90,x=F.p,{type:"Rotate",deg:90,q:ei().rotate(90),o:x})}}),updateLayoutFromZoom:(0,_.a)({prevLayout:e=>{let{context:{layout:t}}=e;return t},layout:e=>{let{context:{layout:t,animation:n}}=e;return function(e,t){var n,r,o;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:I(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,o=t.svgScale,{...e,svg:r,svgScale:o}):ex(e,t.deg)}(t,n)}}),endZoom:(0,_.a)({prevLayout:null,animation:null,zoom:e=>{let{context:{zoom:t,animationReq:n}}=e;return t*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:e=>{let{context:{rotate:t,animationReq:n}}=e;return t+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,_.a)({cursor:e=>{let{context:{origLayout:t}}=e;return k(t.container)},layout:e=>{let{context:{origLayout:t,rotate:n}}=e;return ex(eu(t,9),n)}}),emitSyncAnimation:(0,eG.a)(e=>{let{context:{animation:t}}=e;return{type:"SYNC.ANIMATION",animation:t}}),emitZoomStart:(0,eG.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.START",layout:t,zoom:n}}),emitZoomEnd:(0,eG.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.END",layout:t,zoom:n}}),resetCursor:(0,_.a)({cursor:e=>{let{context:{layout:t}}=e;return k(t.container)}}),resizeLayout:(0,_.a)({rendered:!1,origLayout:(e,t)=>{let{layout:n}=t;return n},layout:(e,t)=>{let{layout:n}=t;return eu(n,9)}}),updateLayoutFromScroll:(0,_.a)({layout:e=>{let{context:t}=e,{scroll:n}=em;return ey(t.layout,n)}}),emitSyncLayout:(0,eG.a)(e=>{let{context:{layout:t,rendered:n}}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}),emitSearchStart:(0,eG.a)(e=>{let{context:{layout:t,cursor:n}}=e,{scroll:r}=em;return{type:"SEARCH.START",req:{psvg:el(ey(t,r)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,eG.a)((e,t)=>{let{context:n}=e,{res:r}=t,{scroll:o}=em,i=ey(n.layout,o);return{type:"SEARCH.END.DONE",res:null===r?null:{...r,layout:i}}}),emitSwitch:(0,eG.a)((e,t)=>{let{fidx:n}=t;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,eG.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:eh,prevLayout:null,layout:eh,cursor:k(eh.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,J.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:(0,_.a)({cursor:e=>{let{event:{pos:t}}=e;return t}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,_.a)({animationReq:e=>{let{context:{layout:t},event:{z:n,p:r}}=e;return{type:"zoom",z:n,p:r??k(t.container)}}}),target:"Zooming"},HOME:{actions:(0,_.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,_.a)({animationReq:e=>{let{context:{layout:t}}=e;return{type:"rotate",deg:90,p:k(t.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,_.a)({animationReq:null}),type:"final"}}}}}),tb=(0,J.c)(tN,{systemId:"system-viewer1"});function tM(e){tb.send(e)}tb.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,et(tl.start,t)}),tb.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tb.send({type:"SEARCH.DONE"}):(t=r,et(tl.endDone,t),n=r.psvg,et(tc.open,n))}),tb.on("ZOOM.START",e=>{let t;return t=e,et(er.zoomStart,t)}),tb.on("ZOOM.END",e=>{let t;return t=e,et(er.zoomEnd,t)}),tb.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,et(eq.select,t)}),tb.on("SWITCH.DONE",()=>ee(eq.unlock)),tb.on("SYNC.ANIMATION",e=>{let t,{animation:n}=e,r=(null==n?void 0:n.q)??null,o=(null==n?void 0:n.o)??null;null!==r&&(t={matrix:r,origin:o},et(er.animation,t))}),tb.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},et(er.layout,t)}),tb.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,et(en.sync,t)}),tb.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,et(en.syncSync,t)}),tb.on("SCROLL.GET",()=>ee(en.get));let tR=!1,t$=!1;function tC(e){tR="locked"===e,t$="locked"===e}function tk(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tD),()=>{t.removeEventListener("wheel",tD)}},[e]),e}function tD(e){let t=e.currentTarget;t$&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function tI(e){let t,{_detail:n}=e,r=tk();return(0,h.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void tp.send(e)},children:[c.renderInfo&&(1!==(t=Object.values(n.info)).length||"string"!=typeof t[0]||""!==t[0])&&c.renderInfo({info:n.info}),(0,h.jsx)("style",{children:tz})]})}let tz=`
.detail {
  ${eT}
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
`;function tU(){return e4("detail",(0,h.jsx)(tH,{}),"ui"),(0,h.jsx)("div",{id:"detail"})}function tH(){return(0,h.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,h.jsx)(tW,{}),(0,h.jsx)(tY,{})]})}function tW(){let e,t,n,r,o,i,a,s,l,c,d,u,p=tx().detail,x=(i=p.p,a=p.layout,s=function(e,t){let{x:n,y:r}=t,o=e.width/e.height,i={x:n/e.width,y:r/e.height},a=o>1?e8(i.x):te(i.x);return{h:a,v:o>1?te(i.y):e8(i.y),th:Math.atan2(e.height,e.width)}}(p.layout.container,i),l=a.container.width,t=50*(e=.01*Math.min(l,c=a.container.height)),n=50*e,r=10*e,o=t/100,u=tt(s,(d={bw:t,bh:n,lh:r,d:o,width:t+2*r+2*o,height:n+2*r+2*o}).bw,d.bh,d.lh),{_p:i,_hv:s,_W:l,_H:c,_size:d,_leg:u});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(tm,{...x}),(0,h.jsx)(tI,{_detail:p}),(0,h.jsx)(tA,{...x})]})}function tY(){return(0,h.jsx)("svg",{id:"ui-svg-defs",children:(0,h.jsx)("defs",{children:(0,h.jsx)(e6,{})})})}function tP(){return e4("footer",(0,h.jsx)(tB,{}),"ui"),(0,h.jsx)("div",{id:"footer"})}function tB(){let e=c;return(0,h.jsxs)("div",{className:"ui-content footer",children:[(0,h.jsx)("p",{children:e.copyright}),(0,h.jsxs)("style",{children:[tZ,(0,h.jsx)(tq,{})]})]})}let tZ=`
.footer {
  ${eN}
  ${eD}
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
`;function tq(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eP:eB;return(0,h.jsx)(h.Fragment,{children:`
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
`})}function tG(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("g",{id:"measure",children:(0,h.jsx)(tK,{})})})}function tV(){let{svg:e}=eO();return(0,h.jsxs)("div",{id:"distance",children:[(0,h.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),t0.map(t=>(0,h.jsxs)(s.Fragment,{children:[(0,h.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,h.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,h.jsx)("style",{children:(0,h.jsx)(tQ,{})})]})}function tX(){let e=eF(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${G(Math.abs(e.x))}`,o=`${n} ${G(Math.abs(e.y))}`;return(0,h.jsxs)("div",{id:"coordinate",children:[(0,h.jsx)("p",{id:"longitude",children:r}),(0,h.jsx)("p",{id:"latitude",children:o}),(0,h.jsx)("style",{children:(0,h.jsx)(tJ,{})})]})}function tK(){let{width:e,height:t}=ej(),{client:n}=eO(),r=(0,s.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),o=(0,s.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),i=(0,s.useMemo)(()=>t0.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,h.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:o}),i.map((e,t)=>(0,h.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function t_(){let{open:e,animating:t}=ty(),[n,r]=e?[0,1]:[1,0],o=t?`
.guides {
  --timing: ${e?eP:eB};
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
`;return(0,h.jsx)(h.Fragment,{children:o})}function tJ(){let{width:e,height:t}=ej(),n=`
#distance,
#coordinate {
  ${eT}
  width: ${e}px;
  height: ${t}px;
}
`,r=`
#longitude {
  ${eb}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-t/2}px) scale(0.5);
}
`,o=`
#latitude {
  ${eN}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,h.jsxs)(h.Fragment,{children:[n,r,o]})}function tQ(){let{width:e,height:t}=ej(),{client:n}=eO(),r=`
.distance {
  ${eT}
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
`);return(0,h.jsxs)(h.Fragment,{children:[o,r,i,a]})}let t0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function t1(){return e4("guides",(0,h.jsx)(t2,{}),"ui"),(0,h.jsx)("div",{id:"guides"})}function t2(){var e;return!((null==(e=c.uiConfig)?void 0:e.showGuides)??!0)||c.mapCoord.matrix.isIdentity?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"ui-content guides",children:[(0,h.jsx)("svg",{className:"guides",children:(0,h.jsx)(tG,{})}),(0,h.jsx)(tV,{}),(0,h.jsx)(tX,{}),(0,h.jsxs)("style",{children:[t5,(0,h.jsx)(t_,{})]})]})}let t5=`
.guides {
  ${eT}
  ${ek}
  ${eH}
  z-index: 2;
}

text {
  ${ez}
}
`;function t3(){let{fidx:e,fidxToOnClick:t}=e1(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{className:"floors",children:[(0,h.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:o}=n;return(0,h.jsx)("li",{className:`floor-item ${t9(r===e)}`,onClick:t(r),children:o},r)})}),(0,h.jsx)("style",{children:t4})]})}let t4=`
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
  ${eY}
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
`;function t7(){let{fidx:e}=e1(),t=c.floorsConfig;return void 0===t||t.floors.length<2?(0,h.jsx)(h.Fragment,{}):(0,h.jsxs)("div",{children:[t.floors.map((t,n)=>(0,h.jsx)("h2",{className:`floor-name ${t9(n===e)}`,children:t.name},n)),(0,h.jsx)("style",{children:t6})]})}let t6=`
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
`;function t9(e){return e?"selected":"unselected"}function t8(){return e4("header",(0,h.jsx)(ne,{}),"ui"),(0,h.jsx)("div",{id:"header"})}function ne(){let e=c;return(0,h.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void tp.send(e)},children:[(0,h.jsx)("h1",{className:"title",onClick:()=>tj(),children:e.title}),(0,h.jsx)(t7,{}),(0,h.jsxs)("style",{children:[nt,(0,h.jsx)(nn,{})]})]})}let nt=`
.header {
  ${eT}
  ${eD}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${ez}
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

`;function nn(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eP:eB;return(0,h.jsx)(h.Fragment,{children:`
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
  ${eT}
  ${eI}
  padding: 0.4em;
  font-size: smaller;
  ${eH}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eP:eB;return(0,h.jsx)(h.Fragment,{children:`
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
`.replaceAll(/([.]\d\d)\d*/g,"$1");function ny(){return(0,h.jsx)("div",{className:"button-item recenter",onClick:()=>tO(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:ng})})})}let ng=`
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
`;function nm(){return(0,h.jsx)("div",{className:"button-item rotate",onClick:()=>tw(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nf})})})}let nf=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nS(){return(0,h.jsx)("div",{className:"button-item zoom-in",onClick:()=>tE(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nA})})})}let nA=`
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
`;function nv(){return(0,h.jsx)("div",{className:"button-item zoom-out",onClick:()=>tF(),children:(0,h.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,h.jsx)("path",{d:nE})})})}let nE=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nF(){return e4("right",(0,h.jsx)(nw,{}),"ui"),(0,h.jsx)("div",{id:"right"})}function nw(){return(0,h.jsxs)("div",{className:"ui-content right bottom",children:[(0,h.jsx)(nO,{}),(0,h.jsx)("style",{children:nj})]})}let nj=`
.right {
  ${eL}
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
`;function nO(){return(0,h.jsxs)("div",{className:"button",children:[(0,h.jsx)(nh,{}),(0,h.jsx)(nc,{}),(0,h.jsx)(ns,{}),(0,h.jsx)(ny,{}),(0,h.jsx)(nm,{}),(0,h.jsx)(nv,{}),(0,h.jsx)(nS,{}),(0,h.jsxs)("style",{children:[nT,(0,h.jsx)(nL,{})]})]})}let nT=`
.button {
  font-size: large;
  margin: 0;
  ${eD}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${eW}
  cursor: default;
  ${eY}
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
`;function nL(){let{open:e,animating:t}=ty();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eP:eB;return(0,h.jsx)(h.Fragment,{children:`
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
`})}function nN(){return e4("screen",(0,h.jsx)(nb,{}),"ui"),(0,h.jsx)("div",{id:"screen"})}function nb(){let e=tk();return(0,h.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>ee(tc.close),children:(0,h.jsxs)("style",{children:[nM,(0,h.jsx)(nR,{})]})})}let nM=`
.screen {
  ${eT}
  ${ek}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nR(){let{open:e,animating:t}=tg(),n=eF(e=>e.animating);if(!t)return e?(0,h.jsx)(h.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,h.jsx)(h.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,h.jsx)(h.Fragment,{children:".screen { display: none; }"});{let[t,n]=e?[0,.3]:[.3,0],r=e?eP:eB;return(0,h.jsx)(h.Fragment,{children:`
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
`})}}function n$(){return e4("ui",(0,h.jsx)(nC,{})),(0,h.jsx)("div",{id:"ui"})}function nC(){return(0,h.jsxs)("div",{className:"ui",children:[(0,h.jsx)(nN,{}),(0,h.jsx)(t8,{}),(0,h.jsx)(tP,{}),(0,h.jsx)(nr,{}),(0,h.jsx)(nF,{}),(0,h.jsx)(t1,{}),(0,h.jsx)(tU,{})]})}function nk(){var e,t,n;let r;return null!==(r=(null==(n=document.querySelector("#ui"))||null==(t=n.shadowRoot)||null==(e=t.children)?void 0:e.length)??null)&&r>0}function nD(){tO()}var nI=n(469),nz=n(336),nU=n(5);let nH=nI.OZ(N),nW=nz.aU(L._k),nY=nz.tf(),nP=nz.JI(L.Eq,nI.CA());function nB(e){return(0,F.Fs)(e,nz.zu(nH),nI.x1(e=>0===e.length?nU.dv:nU.zN(e[0])))}function nZ(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:M(t,1/e.length)}function nq(e){return new Map((0,F.Fs)(e.changedTouches,Array.from,nI.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let nG=(0,K.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z}},actions:{updateTouches:(0,_.a)({touches:e=>{var t;let n,r,o,a,s,l,c,d,h,{context:{touches:u},event:p}=e;return"TOUCH.START"===p.type?(t=p.ev,o=nZ(r=nB(n=nP.concat(u.vecs,nq(t)))),s=2!==r.length?null:.5>Math.abs((a=T(r[0],r[1])).y/a.x),{...u,vecs:n,points:r,cursor:o,horizontal:s}):"TOUCH.MOVE"===p.type?function(e,t,n){var r,o,a,s;let l,c=nq(t),d=nW.mapWithIndex(e.vecs,(e,t)=>(0,F.Fs)(c.get(e),nU.k$,nU.AU(()=>t,nI.xW(t)))),h=nB(d),u=nZ(h),[p,x]=h;if(null===u||p===i||x===i)return{...e,vecs:d,points:h,cursor:u};let y=(r=e.dists,o=Math.sqrt((a=p,s=x,Math.pow(a.x-s.x,2)+Math.pow(a.y-s.y,2))),l=Math.pow((r.length>0?r[0]:o)-o,2),0===r.length||l>0?[o,...r]:r),g=function(e){let[t,n,r,o]=e;return t===i||n===i||r===i||o===i?null:t<n&&n<r&&r<o?-1:t>n&&n>r&&r>o?1:null}(y);return{vecs:d,points:h,cursor:u,dists:y,z:g,horizontal:e.horizontal}}(u,p.ev,0):"TOUCH.END"===p.type?(l=nq(p.ev),h=nZ(d=nB(c=nY.filterMapWithIndex(u.vecs,(e,t)=>l.has(e)?nU.dv:nU.zN(t)))),{vecs:c,points:d,cursor:h,dists:0===c.size?[]:u.dists,z:0===c.size?null:u.z,horizontal:u.horizontal}):u}}),raiseOp:(0,J.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,_.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),emitMulti:(0,eG.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,eG.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),nV=(0,J.c)(nG),nX=!1;function nK(e){nV.send({type:"TOUCH.START",ev:e})}function n_(e){nV.send({type:"TOUCH.MOVE",ev:e})}function nJ(e){nV.send({type:"TOUCH.END",ev:e})}function nQ(){nV.send({type:"CANCEL"})}function n0(e){tR||tM({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n1(e){let t;null!==e&&(t=e,et(en.eventTick,t))}function n2(e){return(0,h.jsxs)("div",{id:"viewer",className:"container",onTouchStart:nK,onTouchMove:n_,onTouchEnd:nJ,onClick:n0,onContextMenu:nD,onScroll:n1,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),tM(t),ee(er.animationEnd)},children:[e.children,(0,h.jsx)(n5,{})]})}function n5(){let e=`
.container {
  ${eT}
  ${ek}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("style",{children:e}),(0,h.jsx)(n3,{}),(0,h.jsx)(n4,{}),(0,h.jsx)(n7,{})]})}function n3(){let e=eF(e=>e.layout.content),t=`
.content {
  ${eT}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,h.jsx)("style",{children:t})}function n4(){let e=eF(e=>e.animation);return(0,h.jsx)("style",{children:e})}function n7(){let{style:e}=e1();return null===e?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("style",{children:e})}function n6(){return null!==document.querySelector(".container")}nV.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(nX=!0,ee(tT.multiStart)):(ee(tT.multiEnd),nX=!1)}),nV.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,o=n.z;null!==r&&null!==o&&(t={z:o>0?1:-1,p:r},et(tT.zoom,t))});var n9=n(751);async function n8(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let re=(0,K.mj)({types:{events:{},emitted:{}},actors:{api:(0,n9.Sx)(()=>n8(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,_.a)({position:e=>{let{event:t}=e;return t.output}}),(0,eG.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,_.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rt=(0,J.c)(re),rn=(0,K.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,eG.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eG.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),rr=(0,J.c)(rn);function ro(e){rr.send(e)}rr.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=c.mapCoord.matrix.inverse().transformPoint(t),r=e_.get();ri.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rr.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,et(tl.end,t)});let ri=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function ra(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}ri.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":ro({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=t.res,null===(r=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),ro({type:"SEARCH.DONE",res:null})):ro({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",t.error),ro({type:"SEARCH.DONE",res:null})}},ri.onerror=e=>{console.error("search error",e)},ri.onmessageerror=e=>{console.error("search messageerror",e)};let rs=(0,K.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ra(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,eG.a)({type:"RESET"}),recenter:(0,eG.a)({type:"RECENTER"}),rotate:(0,eG.a)({type:"ROTATE"}),zoom:(0,eG.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,eG.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,eG.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,_.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||o}})(t.mod,n.key)}}),handleUp:(0,_.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&o}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ra(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),rl=(0,J.c)(rs);rl.on("RESET",tj),rl.on("RECENTER",tO),rl.on("ROTATE",tw),rl.on("ZOOM.IN",tE),rl.on("ZOOM.OUT",tF),rl.on("FLOOR.LEVEL.UP",()=>ee(eq.levelUp)),rl.on("FLOOR.LEVEL.DOWN",()=>ee(eq.levelDown));let rc=(0,K.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:$,next:$,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,_.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,J.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!C(t.prev,t.next)},actions:[(0,_.a)({waited:0}),(0,eG.a)(e=>{var t,n,r,o;let i,a,{context:s}=e;return{type:"LAYOUT",layout:(t=c.fontSize,n=s.next,i=k((o={config:r=function(e,t,n,r){var o;let i,a,s,l,{outer:c,scale:d}=(o=r??n,i=t.width/t.height,l=(s=i>(a=o.width/o.height))?ec(t,a):ed(t,a),{outer:l,inner:s?ec(o,i):ed(o,i),scale:s?o.height/t.height:o.width/t.width,rO:i,rI:a,v:s});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,c.origViewBox,c.origBoundingBox),...es(r)}).scroll),a=o.container.width/o.container.height,ep(o,a<1?1/a:1,a<1?1:+a,i)),force:!s.first}}),(0,_.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,_.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,J.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return C(t,eS.get().container)},actions:(0,_.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rd=(0,J.c)(rc);rd.on("LAYOUT",e=>{let t;return t=e,et(er.resize,t)}),window.addEventListener("resize",()=>{rd.send({type:"RESIZE"})});let rh=(0,K.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,_.a)({ticked:!1}),set:(0,_.a)({ticked:!0}),expire:(0,eG.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ru=(0,K.mj)({types:{},actions:{getScroll:(0,_.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,o=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),R(t,n,r,o)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return eg(n)}},actors:{syncScrollLogic:(0,n9.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!eg(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,eG.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,_.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,eG.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,_.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rp=(0,J.c)(ru,{systemId:"system-scroll1"});function rx(e){rp.send(e)}rp.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.getDone,t)}),rp.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,et(en.syncSyncDone,t)});let ry=(a=()=>ee(en.eventExpire),r=rh.provide({delays:{DURATION:500}}),(o=(0,J.c)(r)).on("EXPIRE",a),o.start(),{tick:function(){o.send({type:"TICK"})}}),rg=(0,X.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function rm(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),rg.trigger.set({names:t}))}async function rf(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rS=`
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
  ${eT}
  ${ek}
  ${e$}
  ${eC}
  ${eU}
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

${E}
`,rA=function(){var e;let t=(null==(e=c.cartoConfig)?void 0:e.backgroundColor)??c.backgroundColor??"darkgray",n={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n2,{...n,children:c.renderMap(n)}),(0,h.jsx)(n$,{}),(0,h.jsxs)("style",{children:[rS,`body { background-color: ${t}; }`]})]})};function rv(e){let{origViewBox:t,url:n}=e;return(0,h.jsx)("image",{href:n,x:t.x,y:t.y,width:t.width,height:t.height})}function rE(e){let{origViewBox:t,url:n,labels:r}=e;return void 0===r?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("svg",{href:n,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:z(t),children:r.map((e,t)=>(0,h.jsxs)("text",{...rj(e.attrs),children:["id"in e.attrs&&"style"in e.attrs&&(0,h.jsx)("style",{children:`#${e.attrs.id} { ${e.attrs.style}; }`}),e.children&&e.children.map((e,t)=>(0,h.jsx)("tspan",{...rj(e.attrs),children:e.text??""},t))]},t))})}let rF=/^[{].*$/,rw=/^style$/;function rj(e){return Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!t.match(rF)&&!t.match(rw)}).map(e=>{var t;let[n,r]=e;return[!(t=n).match(/^.*-.*$/)||t.match(/^(aria|data)-.*$/)?t:t.split("-").map((e,t)=>{var n;let r;return 0===t?e:(r=(n=e).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}let rO=Object.keys(JSON.parse('{"1F":{"contentId":"g1"},"2F":{"contentId":"g1359"},"3F":{"contentId":"g6"}}')).map(e=>({name:e,href:n(303)(`./floor-${e}.svg`)})),rT=Object.values(JSON.parse('{"1F":{"A1F-Shops-1-1":{"x":143.974,"y":593.07},"A1F-Shops-1-2":{"x":141.974,"y":547.07},"A1F-Shops-1-3":{"x":139.974,"y":527.07},"A1F-Shops-1-4":{"x":139.974,"y":509.07},"A1F-Shops-1-5":{"x":139.974,"y":489.07},"A1F-Shops-1-6":{"x":138.974,"y":466.07},"A1F-Shops-1-7":{"x":139.974,"y":448.07},"A1F-Shops-1-8":{"x":151.974,"y":424.07},"A1F-Shops-1-9":{"x":151.974,"y":408.07},"A1F-Shops-1-10":{"x":151.974,"y":384.07},"A1F-Shops-1-11":{"x":153.974,"y":365.07},"A1F-Shops-1-12":{"x":144.974,"y":344.07},"A1F-Shops-1-13":{"x":147.974,"y":311.07},"A1F-Shops-1-14":{"x":226.974,"y":300.07},"A1F-Shops-1-15":{"x":250.974,"y":294.07},"A1F-Shops-1-16":{"x":272.974,"y":293.07},"A1F-Shops-1-17":{"x":299.974,"y":295.07},"A1F-Shops-1-18":{"x":355.974,"y":304.07},"A1F-Shops-1-19":{"x":360.974,"y":365.07},"A1F-Shops-1-20":{"x":360.974,"y":385.07},"A1F-Shops-1-21":{"x":360.974,"y":405.07},"A1F-Shops-1-22":{"x":360.974,"y":425.07},"A1F-Shops-1-23":{"x":360.974,"y":445.07},"A1F-Shops-1-24":{"x":357.974,"y":507.07},"A1F-Shops-1-25":{"x":355.974,"y":527.07},"A1F-Shops-1-26":{"x":362.974,"y":547.07},"A1F-Shops-1-27":{"x":361.974,"y":566.07},"A1F-Shops-1-28":{"x":321.974,"y":620.07},"A1F-Shops-1-29":{"x":293.974,"y":624.07},"A1F-Shops-1-30":{"x":260.974,"y":627.07},"A1F-Shops-1-31":{"x":229.974,"y":637.07},"A1F-Shops-1-32":{"x":199.974,"y":642.07},"A1F-Shops-1-33":{"x":198.974,"y":537.07},"A1F-Shops-1-34":{"x":197.974,"y":510.07},"A1F-Shops-1-35":{"x":197.974,"y":488.07},"A1F-Shops-1-36":{"x":196.974,"y":467.07},"A1F-Shops-1-37":{"x":197.974,"y":449.07},"A1F-Shops-1-38":{"x":192.974,"y":426.07},"A1F-Shops-1-39":{"x":198.974,"y":405.07},"A1F-Shops-1-40":{"x":229.974,"y":344.07},"A1F-Shops-1-41":{"x":249.974,"y":344.07},"A1F-Shops-1-42":{"x":279.974,"y":343.07},"A1F-Shops-1-43":{"x":319.974,"y":384.07},"A1F-Shops-1-44":{"x":320.974,"y":403.07},"A1F-Shops-1-45":{"x":303.974,"y":426.07},"A1F-Shops-1-46":{"x":301.974,"y":455.07},"A1F-Shops-1-47":{"x":302.974,"y":520.07},"A1F-Shops-1-48":{"x":303.974,"y":546.07},"A1F-Shops-1-49":{"x":252.974,"y":571.07},"A1F-Shops-1-50":{"x":219.974,"y":579.07},"A1F-Shops-2-1":{"x":288,"y":209.205},"A1F-Shops-2-2":{"x":288,"y":162.205},"A1F-Shops-2-3":{"x":289,"y":127.205},"A1F-Shops-2-4":{"x":221,"y":172.205},"A1F-Shops-2-5":{"x":191,"y":217.205},"A1F-Shops-3-1":{"x":449,"y":461.205},"A1F-Shops-3-2":{"x":448,"y":424.205},"A1F-Shops-3-3":{"x":447,"y":383.205},"A1F-Shops-3-4":{"x":496,"y":327.205},"A1F-Shops-3-5":{"x":505,"y":387.205},"A1F-Shops-3-6":{"x":504,"y":411.205},"A1F-Shops-3-7":{"x":504,"y":435.205},"A1F-Shops-3-8":{"x":475,"y":568.205},"A1F-Shops-4-1":{"x":476.852,"y":602.072},"A1F-Shops-4-2":{"x":322.335,"y":656.311},"A1F-Shops-4-3":{"x":344.974,"y":602.07}},"2F":{"A2F-Shops-1-1":{"x":142.039,"y":604.451},"A2F-Shops-1-2":{"x":139.922,"y":556.562},"A2F-Shops-1-3":{"x":138.334,"y":531.426},"A2F-Shops-1-4":{"x":138.864,"y":512.376},"A2F-Shops-1-5":{"x":145.478,"y":491.21},"A2F-Shops-1-6":{"x":136.747,"y":470.308},"A2F-Shops-1-7":{"x":137.805,"y":445.966},"A2F-Shops-1-8":{"x":145.478,"y":424.799},"A2F-Shops-1-9":{"x":151.034,"y":407.601},"A2F-Shops-1-10":{"x":152.093,"y":390.403},"A2F-Shops-1-11":{"x":153.68,"y":367.914},"A2F-Shops-1-12":{"x":146.272,"y":326.374},"A2F-Shops-1-13":{"x":206.332,"y":323.993},"A2F-Shops-1-14":{"x":228.028,"y":303.885},"A2F-Shops-1-15":{"x":261.63,"y":288.01},"A2F-Shops-1-16":{"x":273.536,"y":321.347},"A2F-Shops-1-17":{"x":296.026,"y":329.814},"A2F-Shops-1-18":{"x":316.928,"y":297.005},"A2F-Shops-1-19":{"x":364.553,"y":356.272},"A2F-Shops-1-20":{"x":364.553,"y":381.937},"A2F-Shops-1-21":{"x":364.289,"y":409.453},"A2F-Shops-1-22":{"x":364.553,"y":428.768},"A2F-Shops-1-23":{"x":364.289,"y":449.67},"A2F-Shops-1-24":{"x":364.289,"y":509.995},"A2F-Shops-1-25":{"x":364.553,"y":531.426},"A2F-Shops-1-26":{"x":363.759,"y":551.005},"A2F-Shops-1-27":{"x":364.289,"y":577.464},"A2F-Shops-1-28":{"x":328.041,"y":630.645},"A2F-Shops-1-29":{"x":282.532,"y":633.291},"A2F-Shops-1-30":{"x":251.047,"y":636.995},"A2F-Shops-1-31":{"x":208.184,"y":643.345},"A2F-Shops-1-32":{"x":205.009,"y":550.212},"A2F-Shops-1-33":{"x":203.422,"y":531.691},"A2F-Shops-1-34":{"x":202.099,"y":512.376},"A2F-Shops-1-35":{"x":203.157,"y":491.739},"A2F-Shops-1-36":{"x":203.157,"y":470.572},"A2F-Shops-1-37":{"x":202.628,"y":452.845},"A2F-Shops-1-38":{"x":197.601,"y":429.033},"A2F-Shops-1-39":{"x":300.524,"y":421.36},"A2F-Shops-1-40":{"x":292.851,"y":367.914},"A2F-Shops-1-41":{"x":299.73,"y":520.578},"A2F-Shops-1-42":{"x":299.995,"y":549.418},"A2F-Shops-1-43":{"x":251.576,"y":575.082},"A2F-Shops-1-44":{"x":221.943,"y":575.082},"A2F-Shops-1-45":{"x":205.009,"y":408.13},"A2F-Shops-2-1":{"x":437.314,"y":438.822},"A2F-Shops-2-2":{"x":436.784,"y":419.772},"A2F-Shops-2-3":{"x":437.049,"y":399.928},"A2F-Shops-2-4":{"x":436.255,"y":382.73},"A2F-Shops-2-5":{"x":436.784,"y":363.945},"A2F-Shops-2-6":{"x":436.784,"y":346.483},"A2F-Shops-2-7":{"x":437.049,"y":328.755},"A2F-Shops-2-8":{"x":472.239,"y":306.266},"A2F-Shops-2-9":{"x":492.347,"y":306.001},"A2F-Shops-2-10":{"x":492.611,"y":402.31},"A2F-Shops-2-11":{"x":465.359,"y":567.939},"A2F-Shops-3-1":{"x":466.418,"y":599.689}},"3F":{"A3F-Shops-1-1":{"x":148.653,"y":623.501},"A3F-Shops-1-2":{"x":143.891,"y":592.016},"A3F-Shops-1-3":{"x":142.568,"y":572.966},"A3F-Shops-1-4":{"x":140.981,"y":551.535},"A3F-Shops-1-5":{"x":138.07,"y":530.368},"A3F-Shops-1-6":{"x":137.276,"y":499.412},"A3F-Shops-1-7":{"x":138.335,"y":458.931},"A3F-Shops-1-8":{"x":149.976,"y":412.629},"A3F-Shops-1-9":{"x":151.299,"y":386.964},"A3F-Shops-1-10":{"x":153.151,"y":366.856},"A3F-Shops-1-11":{"x":145.743,"y":347.012},"A3F-Shops-1-12":{"x":155.797,"y":316.056},"A3F-Shops-1-13":{"x":248.137,"y":308.118},"A3F-Shops-1-14":{"x":315.341,"y":308.647},"A3F-Shops-1-15":{"x":354.764,"y":348.07},"A3F-Shops-1-16":{"x":363.76,"y":366.856},"A3F-Shops-1-17":{"x":365.347,"y":387.758},"A3F-Shops-1-18":{"x":364.818,"y":407.866},"A3F-Shops-1-19":{"x":357.939,"y":435.118},"A3F-Shops-1-20":{"x":355.028,"y":509.466},"A3F-Shops-1-21":{"x":365.612,"y":531.162},"A3F-Shops-1-22":{"x":364.553,"y":549.683},"A3F-Shops-1-23":{"x":360.32,"y":578.522},"A3F-Shops-1-24":{"x":306.874,"y":634.085},"A3F-Shops-1-25":{"x":251.841,"y":639.112},"A3F-Shops-1-26":{"x":230.674,"y":640.17},"A3F-Shops-1-27":{"x":197.866,"y":644.139},"A3F-Shops-1-28":{"x":203.951,"y":540.422},"A3F-Shops-1-29":{"x":194.162,"y":512.906},"A3F-Shops-1-30":{"x":202.364,"y":492.533},"A3F-Shops-1-31":{"x":197.601,"y":470.308},"A3F-Shops-1-32":{"x":197.337,"y":454.168},"A3F-Shops-1-33":{"x":197.866,"y":428.768},"A3F-Shops-1-34":{"x":205.01,"y":407.601},"A3F-Shops-1-35":{"x":293.38,"y":371.089},"A3F-Shops-1-36":{"x":298.937,"y":401.516},"A3F-Shops-1-37":{"x":299.466,"y":429.297},"A3F-Shops-1-38":{"x":301.583,"y":452.845},"A3F-Shops-1-39":{"x":299.731,"y":510.524},"A3F-Shops-1-40":{"x":300.789,"y":531.162},"A3F-Shops-1-41":{"x":300.789,"y":551.535},"A3F-Shops-1-42":{"x":235.172,"y":574.289}}}')).concat().flatMap((e,t)=>Object.entries(e).map(e=>{let[n,r]=e;return[n,{coord:r,fidx:t}]}));function rL(e){let[t,n]=e;return n.map(e=>[t,e])}function rN(e){return e.reduce(function(e,t){let[n,r]=t,o=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,o]])},new Map)}let rb=Object.values(JSON.parse('{"1F":{"23区":["A1F-Shops-1-12"],"ABAHOUSE":["A1F-Shops-1-29"],"ACE BAGS&LUGGAGE":["A1F-Shops-1-6"],"ADAM ET ROP\xc9":["A1F-Shops-1-24"],"alfredoBANNISTER":["A1F-Shops-1-25"],"AS KNOW AS outlet":["A1F-Shops-1-38"],"AVIREX DEPOT":["A1F-Shops-1-27"],"BAYSIDE FOOD HALL":["A1F-Shops-3-8"],"BLUE LABEL / BLACK LABEL　CRESTBRIDGE":["A1F-Shops-1-33"],"Celule":["A1F-Shops-1-8"],"Ciaopanic BY PALGROUPOUTLET":["A1F-Shops-1-28"],"Cobra Puma Golf":["A1F-Shops-1-31"],"crocs":["A1F-Shops-1-5"],"DIESEL":["A1F-Shops-1-50"],"FEILER":["A1F-Shops-1-43"],"FREAK\'S STORE OUTLET":["A1F-Shops-1-47"],"FREDY&GLOSTER OUTLET":["A1F-Shops-1-14"],"GAP OUTLET":["A1F-Shops-1-18"],"Glorious Chain Caf\xe9":["A1F-Shops-1-49"],"HELLY HANSEN":["A1F-Shops-1-23"],"LACOSTE OUTLET":["A1F-Shops-1-32"],"MEYER":["A1F-Shops-1-37"],"moda Clea OUTLET":["A1F-Shops-1-19"],"nano･universe":["A1F-Shops-1-30"],"NATURAL BEAUTY BASIC":["A1F-Shops-1-34"],"NICE CLAUP OUTLET":["A1F-Shops-1-11"],"ORiental TRaffic OUTLET":["A1F-Shops-1-10"],"POLICE OUTLET by Lunetterie":["A1F-Shops-1-3"],"REGAL FACTORY STORE":["A1F-Shops-1-36"],"russet":["A1F-Shops-1-7"],"SHEL\'TTER/MOUSSY":["A1F-Shops-1-26"],"T-fal OUTLET STORE":["A1F-Shops-1-15"],"TAKEO KIKUCHI":["A1F-Shops-1-35"],"TOMMY HILFIGER":["A1F-Shops-1-1"],"Triumph":["A1F-Shops-1-22"],"UCHINO Factory Outlet":["A1F-Shops-1-20"],"UNTITLED/INDIVI":["A1F-Shops-1-21"],"URBAN RESEARCH ware house":["A1F-Shops-1-46"],"VERITE":["A1F-Shops-1-9"],"yutori no kukan market by 栗原 はるみ":["A1F-Shops-1-40"],"ZWILLING/STAUB":["A1F-Shops-1-39"],"もみじ茶屋":["A1F-Shops-3-5"],"シルバニアファミリー森のお家/ジグソーパズルのお店マスターピース":["A1F-Shops-1-44"],"スターバックス コーヒー":["A1F-Shops-3-3"],"テンピュール":["A1F-Shops-1-17"],"バナナ･リパブリック ファクトリーストア":["A1F-Shops-1-13"],"ママのリフォーム":["A1F-Shops-4-3"],"マリーナサロン":["A1F-Shops-4-1"],"ミゲル フアニ":["A1F-Shops-3-7"],"リサマリ":["A1F-Shops-1-48"],"ル・クルーゼ":["A1F-Shops-1-41"],"レゴ\xaeストア":["A1F-Shops-1-42"],"ワコール ファクトリーストア":["A1F-Shops-1-16"],"回転寿司 函館まるかつ水産":["A1F-Shops-3-4"],"成城石井":["A1F-Shops-3-2"],"春水堂":["A1F-Shops-3-6"]},"2F":{"ARMANI OUTLET":["A2F-Shops-1-23"],"BALLY":["A2F-Shops-1-25"],"BC STOCK　（JOURNAL STANDARD/EDIFICE IENA/SPICK&SPAN）":["A2F-Shops-1-31"],"BEAMS OUTLET":["A2F-Shops-1-29"],"BOTANIST Factory / and Habit":["A2F-Shops-1-32"],"BRIEFING":["A2F-Shops-1-45"],"CALVIN KLEIN":["A2F-Shops-1-33"],"COACH":["A2F-Shops-1-39"],"Cosmetics & Designer Fragrances":["A2F-Shops-1-36"],"CURRY＆NAN DIYA EXPRESS":["A2F-Shops-2-3"],"FURLA":["A2F-Shops-1-27"],"garage YOKOHAMA":["A2F-Shops-2-11"],"Gente di Mare":["A2F-Shops-1-35"],"genten":["A2F-Shops-1-37"],"Import Outer & Select Shop YOKOHAMA":["A2F-Shops-1-9"],"J.PRESS":["A2F-Shops-1-6"],"kate spade new york":["A2F-Shops-1-41"],"kate spade new york kids":["A2F-Shops-1-42"],"LONCAFE":["A2F-Shops-2-1"],"MARC JACOBS":["A2F-Shops-1-13"],"Merengue":["A2F-Shops-2-10"],"Michael Kors":["A2F-Shops-1-1"],"MOONBAT OUTLET":["A2F-Shops-1-11"],"NOLLEY\'S OUTLET":["A2F-Shops-1-14"],"Paul Smith BAG":["A2F-Shops-1-10"],"Paul Smith UNDERWEAR":["A2F-Shops-1-43"],"POLO RALPH LAUREN FACTORY STORE":["A2F-Shops-1-28"],"RIEDEL THE CELLAR Ginza":["A2F-Shops-1-2"],"SAINT JAMES":["A2F-Shops-1-4"],"Samsonite BLACK LABEL":["A2F-Shops-1-5"],"SCOTCH GRAIN":["A2F-Shops-1-16"],"SeeP EYEVAN":["A2F-Shops-1-38"],"SHIPS OUTLET":["A2F-Shops-1-15"],"STRASBURGO":["A2F-Shops-1-24"],"THE NORTH FACE":["A2F-Shops-1-7"],"TOMORROWLAND":["A2F-Shops-1-18"],"TUMI":["A2F-Shops-1-21"],"UMAMI BURGER":["A2F-Shops-2-2"],"UNITED ARROWS LTD. OUTLET":["A2F-Shops-1-12"],"アフタヌーンティー・リビング":["A2F-Shops-1-34"],"コール ハーン":["A2F-Shops-1-19"],"ハンティング・ワールド":["A2F-Shops-1-8"],"ブルックス ブラザーズ":["A2F-Shops-1-22"],"ボス アウトレット":["A2F-Shops-1-20"],"リンツ ショコラ ブティック＆カフェ":["A2F-Shops-1-44"],"中華そば 髙野":["A2F-Shops-2-8"],"全国ご当地 てっぱん屋台":["A2F-Shops-2-6"],"帽子屋 OUTLET":["A2F-Shops-1-30"],"梅蘭":["A2F-Shops-2-4"],"江之島亭":["A2F-Shops-2-5"],"白楽栗山製麺":["A2F-Shops-2-7"],"難波千日前 釜たけうどん 明石焼":["A2F-Shops-2-9"]},"3F":{"AIGLE OUTLET":["A3F-Shops-1-18"],"Callaway":["A3F-Shops-1-30"],"carcru stock":["A3F-Shops-1-9"],"CITIZEN":["A3F-Shops-1-29"],"Colantotte OUTLET":["A3F-Shops-1-2"],"Columbia":["A3F-Shops-1-19"],"DESCENTE STORE":["A3F-Shops-1-42"],"EDWIN/SOMETHING":["A3F-Shops-1-28"],"Foxfire FACTORY OUTLET":["A3F-Shops-1-17"],"Fukuske Outlet":["A3F-Shops-1-25"],"GARMIN":["A3F-Shops-1-4"],"GREGORY":["A3F-Shops-1-41"],"HAWKINS":["A3F-Shops-1-38"],"HOKA":["A3F-Shops-1-11"],"HURLEY OUTLET STORE":["A3F-Shops-1-35"],"Lee OUTLET":["A3F-Shops-1-39"],"LEVI\' S\xae FACTORY OUTLET":["A3F-Shops-1-21"],"LOCAL MOTION":["A3F-Shops-1-10"],"MFC STORE":["A3F-Shops-1-31"],"MITSUMINE":["A3F-Shops-1-26"],"mont-bell/mont-bell factory outlet":["A3F-Shops-1-12"],"New Balance Factory Store":["A3F-Shops-1-23"],"NIKE UNITE YOKOHAMA":["A3F-Shops-1-13"],"PET PARADISE":["A3F-Shops-1-8"],"PUMA OUTLET":["A3F-Shops-1-27"],"QUIKSILVER OUTLET STORE / BILLABONG OUTLET STORE":["A3F-Shops-1-7"],"Ray-Ban":["A3F-Shops-1-15"],"ROCCA&FRIENDS CREPERIE to TEA":["A3F-Shops-1-32"],"Timberland":["A3F-Shops-1-22"],"TRAVISMATHEW":["A3F-Shops-1-34"],"UNDER ARMOUR FACTORY HOUSE":["A3F-Shops-1-1"],"VAN OUTLET":["A3F-Shops-1-3"],"アシックス ファクトリーアウトレット":["A3F-Shops-1-14"],"アディダス ファクトリーアウトレット":["A3F-Shops-1-24"],"アディダスゴルフ ファクトリー アウトレット":["A3F-Shops-1-36"],"オロビアンコ":["A3F-Shops-1-20"],"セイコーアウトレット":["A3F-Shops-1-5"],"チャンピオン":["A3F-Shops-1-40"],"テーラーメイド":["A3F-Shops-1-16"],"ニューバランスゴルフ":["A3F-Shops-1-6"],"ｿﾞﾌ ｱｳﾄﾚｯﾄ":["A3F-Shops-1-37"]}}')).flatMap(function(e){return Object.entries(e)});rN(Array.from(rb).flatMap(rL));let rM=rN(Array.from(rb).flatMap(rL).map(e=>{let[t,n]=e;return[n,t]}));var rR=JSON.parse('{"x":120.85,"y":276.05,"width":261.42,"height":385.96}');!function(e){let t;eV.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;eQ.send({type:"INIT",nfloors:t,fidx:n}),e0.postMessage({type:"INIT",cfg:e.floorsConfig})}}),eq.select.add(e=>eQ.send({type:"SELECT",fidx:e})),eq.levelUp.add(()=>eQ.send({type:"LEVEL.UP"})),eq.levelDown.add(()=>eQ.send({type:"LEVEL.DOWN"})),eq.selectDone.add(e=>eQ.send({type:"SELECT.DONE",fidx:e})),tv.fullscreen.add(rf),eV.init.add(rm),tv.position.add(()=>{var e;return e={type:"GET"},void rt.send(e)}),en.eventTick.add(ef),en.eventTick.add(ry.tick),en.get.add(()=>rx({type:"GET"})),en.sync.add(e=>rx({type:"SYNC",pos:e})),en.syncSync.add(e=>rx({type:"SYNCSYNC",pos:e})),eV.init.add(e=>{if(e.getSearchEntries){let t=e.getSearchEntries(e);ri.postMessage({type:"INIT",entries:t})}}),tl.start.add(function(e){rr.send({type:"SEARCH",req:e})}),er.layout.add(function(e){let{layout:t,force:n}=e;eE({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>ew())}),er.zoomStart.add(function(e){eE({type:"STYLE.ZOOM",...e})}),er.zoomEnd.add(function(e){eE({type:"STYLE.ZOOM",zoom:e.zoom})}),er.animation.add(function(e){eE({type:"STYLE.ANIMATION",animation:e})}),er.animationEnd.add(function(){eE({type:"STYLE.ANIMATION.END"})}),er.mode.add(function(e){eE({type:"STYLE.MODE",mode:e})}),en.eventExpire.add(ew),tv.reset.add(nQ),tv.fullscreen.add(nQ),tv.position.add(nQ),tv.recenter.add(nQ),tv.zoomOut.add(nQ),tv.zoomIn.add(nQ),tl.endDone.add(e=>tp.send({type:"DETAIL",...e})),tc.open.add(()=>{let e;return e=!0,et(tc.openDone,e)}),tc.openDone.add(e=>tp.send({type:e?"OPEN":"CANCEL"})),tc.close.add(()=>tp.send({type:"CANCEL"})),tc.closeDone.add(()=>{requestAnimationFrame(()=>{var e,t;null==(t=e3.get("detail"))||null==(e=t.querySelector(".detail"))||e.scroll(0,0)})}),eq.lock.add(e=>tM({type:"SWITCH",fidx:e})),eq.selectDone.add(()=>tM({type:"SWITCH.DONE"})),tl.end.add(e=>tb.send({type:"SEARCH.END",res:e})),tc.open.add(()=>tL.set("locked")),tc.closeDone.add(()=>tM({type:"SEARCH.DONE"})),tc.closeDone.add(()=>tL.set("panning")),en.getDone.add(e=>{null!==e&&tM({type:"SCROLL.GET.DONE",scroll:e})}),en.syncSyncDone.add(e=>{null!==e&&tM({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),er.resize.add(e=>{let{layout:t,force:n}=e;return tM({type:"RESIZE",layout:t,force:n})}),er.mode.add(tC),er.zoomStart.add(()=>{t$=!0}),er.zoomEnd.add(()=>{t$=!1}),tv.reset.add(()=>tM({type:"HOME"})),tv.recenter.add(()=>tM({type:"RECENTER"})),tv.rotate.add(()=>tM({type:"ROTATE"})),tv.zoomOut.add(()=>tM({type:"ZOOM",z:-1,p:null})),tv.zoomIn.add(()=>tM({type:"ZOOM",z:1,p:null})),tT.multiStart.add(()=>ee(en.get)),tT.multiStart.add(()=>tL.set("touching")),tT.multiEnd.add(()=>tL.set("panning")),tT.zoom.add(e=>{let{z:t,p:n}=e;return tM({type:"ZOOM",z:t>0?1:-1,p:n})}),eV.rendered.add(()=>tM({type:"RENDERED"})),eQ.start(),rl.start(),rt.start(),rd.start(),rp.start(),rr.start(),ev.start(),nV.start(),tp.start(),tb.start();let n=(d({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:n6,isUiRendered:nk,...e}),d({...c}),{...c,origViewBox:t,...e});eX(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.1.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let r=document.getElementById(n.root);if(null===r)throw Error("#root not found!");r.onwheel=function(e){var t;let n=r.children[0];e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||t$)&&e.preventDefault()},r.oncontextmenu=function(e){e.preventDefault()},r.ontouchmove=function(e){if(t$){var t;if(e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui")return;e.preventDefault()}else if(!nX)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rl.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rl.send(t)},(0,e2.createRoot)(r).render((0,h.jsx)(s.StrictMode,{children:(0,h.jsx)(rA,{})}));let o=document.getElementById("style-root");if(null===o)throw Error("#style-root not found!");(0,e2.createRoot)(o).render((0,h.jsx)(s.StrictMode,{children:(0,h.jsx)(e5,{})}))}({renderMap:function(e){let{floors:t,data:{origViewBox:n}}=e,{viewBox:r,width:o,height:i}=function(){let{scroll:e,svg:t}=eF(e=>e.layout);return{viewBox:z(t),width:q(e.width),height:q(e.height)}}(),{fidxToOnAnimationEnd:a,urls:l}=e1();return void 0===t?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("div",{className:"content",children:(0,h.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:o,height:i,children:t.floors.map((e,t)=>(0,h.jsx)(s.Fragment,{children:(0,h.jsxs)("g",{className:`floor fidx-${t}`,onAnimationEnd:a(t),children:[(0,h.jsx)(rv,{origViewBox:n,idx:t,url:l.get(t),onAnimationEnd:a(t),labels:e.labels}),(0,h.jsx)(rE,{origViewBox:n,idx:t,url:l.get(t),onAnimationEnd:a(t),labels:e.labels})]})},t))})})},isMapRendered:function(){return!0},...{root:"root",title:"Yokohama Bayside",backgroundColor:"white",origViewBox:JSON.parse('{"x":0,"y":82.21,"width":588.08,"height":694.48}'),origBoundingBox:rR,zoomFactor:2,floorsConfig:{floors:rO,initialFidx:0},...{getSearchEntries:function(){return rT.map(e=>{let[t,n]=e;return{address:t,pos:n}})},getSearchInfo:function(e){let t=rM.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},renderInfo:function(e){return(0,h.jsx)("p",{children:e.info.title})}}}})}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.u=e=>"static/js/async/"+e+"."+({147:"72d63822",968:"00046466"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,o)=>{if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var s=1/0,i=0;i<e.length;i++){for(var[n,r,o]=e[i],l=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(l=!1,o<s&&(s=o));if(l){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/MitsuiOutletPark-YokohamaBayside/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,o,[i,s,l]=n,c=0;if(i.some(e=>0!==t[e])){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},(r=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var s=a.O(void 0,["783","491","357"],()=>a(854));s=a.O(s)})();