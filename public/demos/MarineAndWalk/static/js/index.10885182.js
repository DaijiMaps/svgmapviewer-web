(()=>{var t,e,n,o,i={303(t,e,n){var o={"./floor-1F.svg":"901","./floor-2F.svg":"440","./floor-B1F.svg":"851"};function i(t){return n(r(t))}function r(t){if(!n.o(o,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=303},901(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-1F.f224c4f3.svg"},440(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-2F.1a8d8122.svg"},851(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-B1F.10d55ed7.svg"},898(t,e,n){"use strict";let o,i,r;var a,l=n(797);let s={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:s,internals:s,origin:s,measures:s,viewbox:s,points:s,lines:s,multilinestrings:s,multipolygons:s},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,l.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(t){return(0,l.createElement)("p",{},t.info.title)}};function d(t){c={...c,...t}}var p=n(617);n(58);var u=n(815),h=n(622);let f=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),x=u.Ay$.array(f),g=u.Ay$.object({ids:x}),m=h.codec(h.string(),g,{decode:(t,e)=>{try{return JSON.parse(t)}catch(n){return n instanceof h.ZodError&&e.issues.push({code:"invalid_format",format:"json",input:t,message:n.message}),h.NEVER}},encode:t=>JSON.stringify(t)}),y=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),w=u.Ay$.set(y),v=u.Ay$.object({ids:w}),S=u.Ay$.codec(g,v,{decode:t=>({ids:new Set(t.ids)}),encode:t=>({ids:Array.from(t.ids)})});u.Ay$.pipe(m,S);let E=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var j=n(997);function N(t,e,n){let[o,i,r]=t,[a,l]=e;return o*a+i*l+r*n}function D(t,e,n){return[N(function(t){let[[e],[n],[o]]=t;return[e,n,o]}(t),e,n),N(function(t){let[[,e],[,n],[,o]]=t;return[e,n,o]}(t),e,n)]}function k(t,e){let n=t.x+e.x,o=t.y+e.y;return{...t,x:n,y:o}}function b(t,e){let n=t.x-e.x,o=t.y-e.y;return{...t,x:n,y:o}}var A=n(304);let O=n(853).I3(function(t,e){return A._k.compare(t.x,e.x)||A._k.compare(t.y,e.y)}),T={x:0,y:0};function M(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,o="number"==typeof e?e:e instanceof Array?e[1]:e.y,i=t.x*n,r=t.y*o;return{...t,x:i,y:r}}function $(t,e,n,o){return{x:t,y:e,width:n,height:o}}let L={x:0,y:0,width:1,height:1};function R(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function C(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function I(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function z(t,e){return{...t,x:e.x,y:e.y}}function F(t){return function(t){let{x:e,y:n,width:o,height:i}=t;return`${e} ${n} ${o} ${i}`}(function(t,e){let{x:n,y:o,width:i,height:r}=t;return{x:e(n),y:e(o),width:e(i),height:e(r)}}(t,function(t){return Math.round(100*t)/100}))}function H(t){let{x:e,y:n,width:o,height:i}=t;return{tl:{x:e,y:n},br:{x:e+o,y:n+i}}}function U(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function W(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function Y(t){let[[e,n],[o,i]]=t;return{tl:{x:e,y:n},br:{x:o,y:i}}}function P(t,e){return[D(t,function(t){let[e]=t;return e}(e),0),D(t,function(t){let[,e]=t;return e}(e),0),D(t,function(t){let[,,e]=t;return e}(e),1)]}function Z(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function q(t,e,n,o){var i,r;return i=function(t,e){let[n,o]=e;return[Z(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),Z([-n,-o])].reduce(P)}("number"==typeof(r=e)?[r,r]:"x"in r?[r.x,r.y]:r,[n,o]),(0,j.Fs)(t,H,W,t=>(function(t,e){let[n,o]=t;return[e(n),e(o)]})(t,t=>D(i,t,1)),Y,U)}function B(t){return Math.round(100*t)/100}function G(t){return Math.round(1e7*t)/1e7}var V=n(599),X=n(112),_=n(125),K=n(609),J=n(292);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function tt(t){t.forEach(t=>t())}function te(t,e){t.forEach(t=>t(e))}let tn={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},to={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function ti(t){return void 0!==t&&"number"==typeof t}function tr(t,e,n,o,i,r){return new DOMMatrixReadOnly(t instanceof Array?t:ti(t)&&ti(e)&&ti(n)&&ti(o)&&ti(i)&&ti(r)?[t,e,n,o,i,r]:void 0)}let ta={container:L,scroll:L,content:tr(),svgOffset:{x:-0,y:-0},svgScale:1,svg:L};function tl(t){let{container:e,outer:n,svgScale:o,inner:i}=t,{x:r,y:a}=n;return{container:e,scroll:e,content:tr(),svgOffset:{x:-r,y:-a},svgScale:o,svg:i}}function ts(t){let{scroll:e,content:n,svgOffset:o,svgScale:i,svg:r}=t;return tr().translate(e.x,e.y).multiply(n).translate(-o.x,-o.y).scale(1/i,1/i).translate(-r.x,-r.y)}function tc(t,e){let n=t.height,o=n*e;return $((t.width-o)/2,0,o,n)}function td(t,e){let n=t.width,o=n/e;return $(0,(t.height-o)/2,n,o)}let tp={...ta,config:{fontSize:16,container:L,outer:L,inner:L,svgScale:1}};function tu(t,e){let n=C(t.scroll);return th(t,e,e,n)}function th(t,e,n,o){let i=ts(t).inverse().transformPoint(o),r=q(t.scroll,[e,n],o.x,o.y),a=M(t.svgOffset,[e,n]),l=q(t.svg,[e,n],i.x,i.y);return{...t,scroll:r,svgOffset:a,svg:l}}function tf(t,e){var n,o;let i=C({...t.scroll,x:0,y:0}),r=(n=i.x,o=i.y,tr().translate(n,o).rotate(e).translate(-n,-o)).multiply(t.content);return{...t,content:r}}function tx(t,e){let n=t.scroll,o=b(M(e,-1),n);return(0,j.Fs)(t,t=>({...t,scroll:I(t.scroll,o)}),t=>{let e,o,i,r,a,l,s;return e=z(t.scroll,n),o=t.content.inverse(),r=k(i=C(t.scroll),b(t.scroll,n)),a=o.transformPoint(i),l=M(b(o.transformPoint(r),a),-t.svgScale),s=I(t.svg,l),{...t,scroll:e,svg:s}})}function tg(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,o=e.scrollTop,i=e.scrollWidth,r=e.scrollHeight;if(null===n)return!1;let a=i-t.width,l=r-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${r}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),o!==c&&(e.scrollTop=c);let d=e.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let p=e.scrollTop;return!(Math.abs(p-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${o} vs. real=${p}`),!1)}let tm={scroll:L,client:{width:0,height:0},timeStamp:0};function ty(t){let e=t.currentTarget;null!==e&&(tm={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})}let tw=(0,X.e)(tp),tv=(0,_.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,K.a)({zoom:(t,e)=>e.zoom}),updateRotate:(0,K.a)({}),updateSvgMatrix:(0,K.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return function(t){let{content:e,svgOffset:n,svgScale:o,svg:i}=t;return e.translate(-n.x,-n.y).scale(1/o,1/o).translate(-i.x,-i.y)}(e)}}),updateGeoMatrix:(0,K.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,K.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:o}=t,i=Math.max(n.width,n.height)/2*o,r=Math.round(Math.log10(i)),a=(e=i/Math.pow(10,r-1),Q.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,r-1);return{svg:s,client:s/o}}(e)}}),updateScroll:(0,K.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:o,client:i}=e,r=n.geoMatrix,a={x:o.x+i.width/2,y:o.y+i.height/2};return r.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:o,client:i}=e,r=n.geoMatrix,a={x:o.x,y:o.y},l={x:o.x+i.width,y:o.y+i.height};return{start:r.transformPoint(a),end:r.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:tp,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:T,distanceRadius:{svg:0,client:0},geoRange:{start:T,end:T},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,K.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),t=>{let{event:e}=t;return tw.set(e.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,J.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:t=>{let{event:e}=t;return e}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}}},"STYLE.MODE":{actions:(0,K.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:(0,K.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,K.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,K.a)({animation:t=>{let{event:{animation:e}}=t;return null===e?"":function(t){let{matrix:e,origin:n}=t,o=tr();return`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${o.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${e.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(e)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,K.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,K.a)({animation:null,animating:!1}),target:"Idle"}}}}}),tS=(0,J.c)(tv,{systemId:"system-viewer1"});function tE(t){tS.send(t)}function tj(t){return(0,V.d4)(tS,e=>t(e.context))}function tN(){tE({type:"STYLE.SCROLL",currentScroll:tm})}function tD(){return tj(t=>t.layout.container)}function tk(){return tj(t=>t.distanceRadius)}let tb=`
position: absolute;
left: 0;
top: 0;
`,tA=`
position: absolute;
right: 0;
top: 0;
`,tO=`
position: absolute;
left: 0;
bottom: 0;
`,tT=`
position: absolute;
right: 0;
bottom: 0;
`,tM=`
margin: 0;
`,t$=`
padding: 0;
`,tL=`
${tM} ${t$}
`,tR=`
box-sizing: border-box;
`,tC=`
width: 100vw;
height: 100vh;
height: 100svh;
`,tI=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tz=`
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
`,tP=`
cubic-bezier(0, 0, 0, 1)
`,tZ=`
cubic-bezier(1, 0, 1, 1)
`,tq=`
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
`,tB={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tG=n(238);let tV={init:new Set,rendered:new Set},tX=function(t){te(tV.init,t)},t_=function(){tt(tV.rendered)},tK=(0,X.e)(0),tJ=(0,_.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,K.a)({blobs:t=>{let{context:e,event:{fidx:n,blob:o}}=t;return new Map(e.blobs.set(n,o))},urls:t=>{let{context:e,event:{fidx:n,blob:o}}=t;return new Map(e.urls.set(n,URL.createObjectURL(o)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,K.a)({nfloors:t=>{let{event:e}=t;return e.nfloors},fidx:t=>{let{event:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tK.set(e.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:[(0,K.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tK.set(e.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:t=>{let{context:e}=t;return e.fidx===e.nfloors-1}},{actions:(0,tG.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx+1}})}],"LEVEL.DOWN":[{guard:t=>{let{context:e}=t;return 0===e.fidx}},{actions:(0,tG.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,K.a)({prevFidx:null}),target:"Idle"}}}}}),tQ=(0,J.c)(tJ);tQ.on("LOCK",t=>{let e,{fidx:n}=t;return e=n,te(tB.lock,e)});let t0=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function t1(){var t;let{fidx:e,prevFidx:n,urls:o}=(t=t=>{let{fidx:e,prevFidx:n,urls:o}=t;return{fidx:e,prevFidx:n,urls:o}},(0,V.d4)(tQ,e=>t(e.context))),i=(0,l.useMemo)(()=>(function(t,e,n){let o=c.floorsConfig;if(void 0===o)return null;let i=o.floors.map((o,i)=>{var r,a,l,s,c,d,p;return r=t,a=e,l=n,(s=i)!=r||l?s===a?(c=s,`
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
${i}
${tq}
`})(e,n,void 0===o.get(e)),[e,n,o]),r=(0,l.useCallback)(t=>()=>{let n;return t!==e?void 0:(n=t,te(tB.selectDone,n))},[e]),a=(0,l.useCallback)(t=>()=>{let o;return null!==n||t===e?void 0:(o=t,te(tB.lock,o))},[e,n]);return{fidx:e,prevFidx:n,style:i,fidxToOnAnimationEnd:r,fidxToOnClick:a,urls:o}}t0.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:t,blob:n}=e;tQ.send({type:"IMAGE",fidx:t,blob:n})}}},t0.onerror=t=>{console.error("floors error",t)},t0.onmessageerror=t=>{console.error("floors messageerror",t)};var t5=n(284);function t2(){let t=tj(t=>t.rendered);(0,l.useEffect)(()=>{requestAnimationFrame(()=>t_())},[t]);let e=tj(t=>t.shown),n=tj(t=>t.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${tP};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",o=tj(t=>t.layout.scroll),i=`
.content {
  width: ${B(o.width)}px;
  height: ${B(o.height)}px;
}
`;return(0,p.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,i]})}let t3=new Map;function t9(t,e,n){(0,l.useEffect)(()=>(function(t,e,n){let o=void 0===n?document:t3.get(n)??null;if(null===o)return;let i=o.querySelector(`#${t}`)??null;if(null===i||null!==i.shadowRoot)return;let r=i.attachShadow({mode:"open"});t3.set(t,r),(0,t5.createRoot)(r).render(e)})(t,e,n),[t,n,e])}let t4={bus:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,p.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,p.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,p.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,p.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,p.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,p.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,p.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,p.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,p.jsx)("use",{x:"8.5",href:"#_person2"}),(0,p.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,p.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36,-36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,p.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,p.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,p.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,p.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,p.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,p.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,p.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,p.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,p.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,p.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,p.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,p.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,p.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,p.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,p.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,p.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,p.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function t6(){return(0,p.jsx)("g",{className:"assets",children:(0,p.jsx)(t7,{})})}function t7(){return(0,p.jsx)("g",{className:"symbols",children:Object.entries(t4).map((t,e)=>{let[n,o]=t;return(0,p.jsx)(l.Fragment,{children:o({id:n})},e)})})}function t8(t){return t>.5?-1:+(t<.5)}function et(t){return t<.3?1:t>.7?-1:0}function ee(t,e,n,o){let i={x:e/2,y:n/2},r=e/20,a=r/2;function l(e){var n;let o,i;return n={x:t.h,y:t.v},o=e.x*n.x,i=e.y*n.y,{...e,x:o,y:i}}let s=t.th<Math.PI/4,c=0===t.v,d=0===t.h,p=l(M(i,-1)),u=l(c||d?b(M(i,-1),{x:o,y:o}):b(M(i,-1),{x:s?o:0,y:s?0:o})),[h,f]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:r})]:[{x:0,y:0},l({x:r,y:0})],x=k(p,h),g=k(p,f);return{p,q:u,a:x,b:g}}function en(t){return{open:t,animating:!1}}function eo(t){return t.open||t.animating?null:{open:!0,animating:!0}}function ei(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function er(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function ea(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function el(t){let{open:e,animating:n}=t;return e||n}let es={start:new Set,end:new Set,endDone:new Set},ec={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ed={p:T,psvg:T,fidx:0,layout:ta,info:{title:""}};function ep(t){return function(e,n){let o=e[n],i=t(o);return e[n]=null===i?o:i,e}}let eu=(0,_.mj)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return el(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return el(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,K.a)({canceling:()=>!0}),endCancel:(0,K.a)({canceling:()=>!1}),open:(0,K.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:o}=e;return ep(eo)(n,o)}}),close:(0,K.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:o}=e;return ep(er)(n,o)}}),handle:(0,K.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:o}=e;return ep(n[o].open?ei:ea)(n,o)}})}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,detail:ed,m:{header:en(!0),detail:en(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,K.a)({detail:t=>{let{event:{psvg:e,fidx:n,info:o,layout:i}}=t;return{psvg:e,p:ts(i).transformPoint(e),fidx:n,info:o,layout:i}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,J.n)("animationEnded")},{actions:(0,K.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,J.n)("isDetailVisible")},{actions:(0,K.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,J.n)("animationEnded")},{actions:(0,K.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,J.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,K.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tG.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,K.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,J.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,K.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,J.r)({type:"DONE"})]}}}}}),eh=(0,J.c)(eu);function ef(){return(0,V.d4)(eh,t=>t.context)}function ex(){return ef().m.header}function eg(){return ef().m.detail}function em(t){return(0,p.jsxs)("div",{className:"balloon",children:[(0,p.jsx)(ew,{...t}),t.children,(0,p.jsx)("style",{children:ey})]})}eh.on("CLOSE.DONE",()=>tt(ec.closeDone));let ey=`
.balloon,
.balloon-svg {
  ${tb}
  ${tU}
  z-index: 10;
  will-change: opacity, transform;
}
`;function ew(t){let e=t._hv;if(null===e)return(0,p.jsx)("svg",{});let{viewBox:n,width:o,height:i,fg:r,bg:a}=function(t,e){let{bw:n,bh:o,lh:i,d:r,width:a,height:l}=e,s=$(-a/2,-a/2,a,l),{body:c,leg:d}=function(t,e,n,o){let i={x:e/2,y:n/2},r=`
m${-i.x},${-i.y}
h${e}
v${n}
h${-e}
z
`,{p:a,q:l,a:s,b:c}=ee(t,e,n,o),d=b(l,s),p=b(c,l),u=b(a,c);return{body:r,leg:`
m${s.x},${s.y}
l${d.x},${d.y}
l${p.x},${p.y}
l${u.x},${u.y}
z
`}}(t,n,o,i);function p(t){return`M${t},${t} ${c} M${t},${t} ${d}`}return{viewBox:s,width:a,height:l,bg:p(r),fg:p(0)}}(e,t._size);return(0,p.jsxs)("svg",{className:"balloon-svg",viewBox:F(n),width:o,height:i,children:[(0,p.jsx)("path",{className:"bg",d:a}),(0,p.jsx)("path",{className:"fg",d:r}),(0,p.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function ev(t){let{_p:e,_hv:n,_size:o,_leg:i}=t,r=eg(),a=null!==e&&null!==n&&el(r)?function(t,e,n,o){let{open:i,animating:r}=t,{width:a,height:l}=n,s=M(o.q,-1);if(r){let[t,n]=i?[0,1]:[1,0],[o,r]=i?[0,1]:[1,0],[c,d]=i?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[p,u]=i?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],h=i?tP:tZ;return`
.detail,
.balloon {
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --dp-x: ${s.x}px;
  --dp-y: ${s.y}px;
  --oa: ${t};
  --ob: ${n};
  --sa: ${o};
  --sb: ${r};
  --timing: ${h};
  --dxa: ${c};
  --dxb: ${p};
  --dya: ${d};
  --dyb: ${u};
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
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
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
`}(r,e,o,i):".balloon, .detail { visibility: hidden; }";return(0,p.jsx)("style",{children:a})}let eS={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},eE=()=>tt(eS.zoomIn),ej=()=>tt(eS.zoomOut),eN=()=>tt(eS.rotate),eD=()=>tt(eS.reset),ek=()=>tt(eS.recenter),eb={multiStart:new Set,multiEnd:new Set,zoom:new Set},eA=(0,X.e)("panning");eA.subscribe(t=>{let e;return e=t,te(to.mode,e)});let eO=(0,_.mj)({types:{},guards:{isHoming:t=>{let{context:{animationReq:e}}=t;return null!==e&&"home"===e.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,K.a)({rendered:!0}),emitGetScroll:(0,tG.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tG.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNC",pos:e.scroll}}),emitSyncScrollSync:(0,tG.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNCSYNC",pos:e.scroll}}),calcZoomAnimation:(0,K.a)({animation:t=>{var e,n,o,i,r,a,l,s,d,p,u;let h,f,x,g,m,y,w,v,{context:{animationReq:S,layout:E}}=t;return null===S?null:"zoom"===S.type?(e=E,n=S.z,o=S.p,h=ts(e).inverse().transformPoint(o),f=1/(i=n,Math.pow(c.zoomFactor,i)),x=tr().scale(1/f,1/f),{type:"Zoom",svg:q(e.svg,f,h.x,h.y),svgScale:e.svgScale*f,q:x,o}):"home"===S.type?(r=E,g=C((a=function(t){let{config:e,content:n}=t;return{config:e,...tl(e),content:n}}(E)).config.inner),m=ts(r).transformPoint(g),y=a.svgScale/r.svgScale,v=(function(t,e){if(t instanceof DOMMatrixReadOnly)return tr(1,0,0,1,t.e,t.f);if("number"==typeof t&&"number"==typeof e)return tr(1,0,0,1,t,e);throw Error("dommatrixreadonlyTranslateOnly")})((w=C(r.container)).x-m.x,w.y-m.y).multiply((l=1/y,s=1/y,d=m.x,p=m.y,tr().scale(l,s,1,d,p,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:v,o:null}):(u=S.p,{type:"Rotate",deg:90,q:tr().rotate(90),o:u})}}),updateLayoutFromZoom:(0,K.a)({prevLayout:t=>{let{context:{layout:e}}=t;return e},layout:t=>{let{context:{layout:e,animation:n}}=t;return function(t,e){var n,o,i;return null===e?t:"Move"===e.type?(n=e.move,{...t,scroll:z(t.scroll,n)}):"Zoom"===e.type?(o=e.svg,i=e.svgScale,{...t,svg:o,svgScale:i}):tf(t,e.deg)}(e,n)}}),endZoom:(0,K.a)({prevLayout:null,animation:null,zoom:t=>{let{context:{zoom:e,animationReq:n}}=t;return e*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:t=>{let{context:{rotate:e,animationReq:n}}=t;return e+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,K.a)({cursor:t=>{let{context:{origLayout:e}}=t;return C(e.container)},layout:t=>{let{context:{origLayout:e,rotate:n}}=t;return tf(tu(e,9),n)}}),emitSyncAnimation:(0,tG.a)(t=>{let{context:{animation:e}}=t;return{type:"SYNC.ANIMATION",animation:e}}),emitZoomStart:(0,tG.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.START",layout:e,zoom:n}}),emitZoomEnd:(0,tG.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.END",layout:e,zoom:n}}),resetCursor:(0,K.a)({cursor:t=>{let{context:{layout:e}}=t;return C(e.container)}}),resizeLayout:(0,K.a)({rendered:!1,origLayout:(t,e)=>{let{layout:n}=e;return n},layout:(t,e)=>{let{layout:n}=e;return tu(n,9)}}),updateLayoutFromScroll:(0,K.a)({layout:t=>{let{context:e}=t,{scroll:n}=tm;return tx(e.layout,n)}}),emitSyncLayout:(0,tG.a)(t=>{let{context:{layout:e,rendered:n}}=t;return{type:"SYNC.LAYOUT",layout:e,force:n}}),emitSearchStart:(0,tG.a)(t=>{let{context:{layout:e,cursor:n}}=t,{scroll:o}=tm;return{type:"SEARCH.START",req:{psvg:ts(tx(e,o)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,tG.a)((t,e)=>{let{context:n}=t,{res:o}=e,{scroll:i}=tm,r=tx(n.layout,i);return{type:"SEARCH.END.DONE",res:null===o?null:{...o,layout:r}}}),emitSwitch:(0,tG.a)((t,e)=>{let{fidx:n}=e;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,tG.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:tp,prevLayout:null,layout:tp,cursor:C(tp.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,J.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"Resizing"},SEARCH:{actions:(0,K.a)({cursor:t=>{let{event:{pos:e}}=t;return e}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,K.a)({animationReq:t=>{let{context:{layout:e},event:{z:n,p:o}}=t;return{type:"zoom",z:n,p:o??C(e.container)}}}),target:"Zooming"},HOME:{actions:(0,K.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,K.a)({animationReq:t=>{let{context:{layout:e}}=t;return{type:"rotate",deg:90,p:C(e.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,K.a)({animationReq:null}),type:"final"}}}}}),eT=(0,J.c)(eO,{systemId:"system-viewer1"});function eM(t){eT.send(t)}eT.on("SEARCH.START",t=>{let e,{req:n}=t;return e=n,te(es.start,e)}),eT.on("SEARCH.END.DONE",t=>{let e,n,{res:o}=t;null===o?eT.send({type:"SEARCH.DONE"}):(e=o,te(es.endDone,e),n=o.psvg,te(ec.open,n))}),eT.on("ZOOM.START",t=>{let e;return e=t,te(to.zoomStart,e)}),eT.on("ZOOM.END",t=>{let e;return e=t,te(to.zoomEnd,e)}),eT.on("SWITCH",t=>{let e,{fidx:n}=t;return e=n,te(tB.select,e)}),eT.on("SWITCH.DONE",()=>tt(tB.unlock)),eT.on("SYNC.ANIMATION",t=>{let e,{animation:n}=t,o=(null==n?void 0:n.q)??null,i=(null==n?void 0:n.o)??null;null!==o&&(e={matrix:o,origin:i},te(to.animation,e))}),eT.on("SYNC.LAYOUT",t=>{let e,{layout:n,force:o}=t;return e={layout:n,force:o},te(to.layout,e)}),eT.on("SCROLL.SYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.sync,e)}),eT.on("SCROLL.SYNCSYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.syncSync,e)}),eT.on("SCROLL.GET",()=>tt(tn.get));let e$=!1,eL=!1;function eR(t){e$="locked"===t,eL="locked"===t}function eC(){let t=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",eI),()=>{e.removeEventListener("wheel",eI)}},[t]),t}function eI(t){let e=t.currentTarget;eL&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function ez(t){let e,{_detail:n}=t,o=eC();return(0,p.jsxs)("div",{ref:o,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void eh.send(t)},children:[c.renderInfo&&(1!==(e=Object.values(n.info)).length||"string"!=typeof e[0]||""!==e[0])&&c.renderInfo({info:n.info}),(0,p.jsx)("style",{children:eF})]})}let eF=`
.detail {
  ${tb}
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
`;function eH(){return t9("detail",(0,p.jsx)(eU,{}),"ui"),(0,p.jsx)("div",{id:"detail"})}function eU(){return(0,p.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,p.jsx)(eW,{}),(0,p.jsx)(eY,{})]})}function eW(){let t,e,n,o,i,r,a,l,s,c,d,u,h=ef().detail,f=(r=h.p,a=h.layout,l=function(t,e){let{x:n,y:o}=e,i=t.width/t.height,r={x:n/t.width,y:o/t.height},a=i>1?t8(r.x):et(r.x);return{h:a,v:i>1?et(r.y):t8(r.y),th:Math.atan2(t.height,t.width)}}(h.layout.container,r),s=a.container.width,e=50*(t=.01*Math.min(s,c=a.container.height)),n=50*t,o=10*t,i=e/100,u=ee(l,(d={bw:e,bh:n,lh:o,d:i,width:e+2*o+2*i,height:n+2*o+2*i}).bw,d.bh,d.lh),{_p:r,_hv:l,_W:s,_H:c,_size:d,_leg:u});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(em,{...f}),(0,p.jsx)(ez,{_detail:h}),(0,p.jsx)(ev,{...f})]})}function eY(){return(0,p.jsx)("svg",{id:"ui-svg-defs",children:(0,p.jsx)("defs",{children:(0,p.jsx)(t6,{})})})}function eP(){return t9("footer",(0,p.jsx)(eZ,{}),"ui"),(0,p.jsx)("div",{id:"footer"})}function eZ(){let t=c;return(0,p.jsxs)("div",{className:"ui-content footer",children:[(0,p.jsx)("p",{children:t.copyright}),(0,p.jsxs)("style",{children:[eq,(0,p.jsx)(eB,{})]})]})}let eq=`
.footer {
  ${tO}
  ${tI}
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
`;function eB(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],o=t?tP:tZ;return(0,p.jsx)(p.Fragment,{children:`
.footer {
  --duration: 300ms;
  --timing: ${o};
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
`})}function eG(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("g",{id:"measure",children:(0,p.jsx)(e_,{})})})}function eV(){let{svg:t}=tk();return(0,p.jsxs)("div",{id:"distance",children:[(0,p.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),e0.map(e=>(0,p.jsxs)(l.Fragment,{children:[(0,p.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,p.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,p.jsx)("style",{children:(0,p.jsx)(eQ,{})})]})}function eX(){let t=tj(t=>t.geoPoint),e=t.x>0?"E":"W",n=t.y>0?"N":"S",o=`${e} ${G(Math.abs(t.x))}`,i=`${n} ${G(Math.abs(t.y))}`;return(0,p.jsxs)("div",{id:"coordinate",children:[(0,p.jsx)("p",{id:"longitude",children:o}),(0,p.jsx)("p",{id:"latitude",children:i}),(0,p.jsx)("style",{children:(0,p.jsx)(eJ,{})})]})}function e_(){let{width:t,height:e}=tD(),{client:n}=tk(),o=(0,l.useMemo)(()=>`M0,${e/2} h${t}`,[e,t]),i=(0,l.useMemo)(()=>`M${t/2},0 v${e}`,[e,t]),r=(0,l.useMemo)(()=>e0.map(o=>(function(t){let{width:e,height:n,r:o}=t;return`M${e/2},${n/2} m-${o},0 a${o},${o} 0,1,0 ${2*o},0 a${o},${o} 0,1,0 -${2*o},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(o+1)})),[n,e,t]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:o}),(0,p.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),r.map((t,e)=>(0,p.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function eK(){let{open:t,animating:e}=ex(),[n,o]=t?[0,1]:[1,0],i=e?`
.guides {
  --timing: ${t?tP:tZ};
  --duration: 300ms;
  --oa: ${n};
  --ob: ${o};
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
  --ob: ${o};
  opacity: var(--ob);
  will-change: opacity;
}
`;return(0,p.jsx)(p.Fragment,{children:i})}function eJ(){let{width:t,height:e}=tD(),n=`
#distance,
#coordinate {
  ${tb}
  width: ${t}px;
  height: ${e}px;
}
`,o=`
#longitude {
  ${tT}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${tO}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,p.jsxs)(p.Fragment,{children:[n,o,i]})}function eQ(){let{width:t,height:e}=tD(),{client:n}=tk(),o=`
.distance {
  ${tb}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,r=e0.map(o=>`
#distance-x-${o+1} {
  transform: translate(${t/2+n*(o+1)}px, ${e/2}px) scale(0.5);
}
`),a=e0.map(o=>`
#distance-y-${o+1} {
  transform: translate(${t/2}px, ${e/2+n*(o+1)}px) scale(0.5);
}
`);return(0,p.jsxs)(p.Fragment,{children:[i,o,r,a]})}let e0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function e1(){return t9("guides",(0,p.jsx)(e5,{}),"ui"),(0,p.jsx)("div",{id:"guides"})}function e5(){var t;return!((null==(t=c.uiConfig)?void 0:t.showGuides)??!0)||c.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"ui-content guides",children:[(0,p.jsx)("svg",{className:"guides",children:(0,p.jsx)(eG,{})}),(0,p.jsx)(eV,{}),(0,p.jsx)(eX,{}),(0,p.jsxs)("style",{children:[e2,(0,p.jsx)(eK,{})]})]})}let e2=`
.guides {
  ${tb}
  ${tC}
  ${tU}
  z-index: 2;
}

text {
  ${tF}
}
`;function e3(){let{fidx:t,fidxToOnClick:e}=t1(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"floors",children:[(0,p.jsx)("ul",{className:"floor-list",children:n.floors.map((n,o)=>{let{name:i}=n;return(0,p.jsx)("li",{className:`floor-item ${e7(o===t)}`,onClick:e(o),children:i},o)})}),(0,p.jsx)("style",{children:e9})]})}let e9=`
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
`;function e4(){let{fidx:t}=t1(),e=c.floorsConfig;return void 0===e||e.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{children:[e.floors.map((e,n)=>(0,p.jsx)("h2",{className:`floor-name ${e7(n===t)}`,children:e.name},n)),(0,p.jsx)("style",{children:e6})]})}let e6=`
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
`;function e7(t){return t?"selected":"unselected"}function e8(){return t9("header",(0,p.jsx)(nt,{}),"ui"),(0,p.jsx)("div",{id:"header"})}function nt(){let t=c;return(0,p.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void eh.send(t)},children:[(0,p.jsx)("h1",{className:"title",onClick:()=>eD(),children:t.title}),(0,p.jsx)(e4,{}),(0,p.jsxs)("style",{children:[ne,(0,p.jsx)(nn,{})]})]})}let ne=`
.header {
  ${tb}
  ${tI}
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

`;function nn(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],o=t?tP:tZ;return(0,p.jsx)(p.Fragment,{children:`
.header {
  --timing: ${o};
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
`})}return(0,p.jsx)(p.Fragment,{children:`
.header {
  --b: ${+!!t};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function no(){return t9("left",(0,p.jsx)(ni,{}),"ui"),(0,p.jsx)("div",{id:"left"})}function ni(){return(0,p.jsxs)("div",{className:"ui-content left bottom",children:[(0,p.jsx)(e3,{}),(0,p.jsxs)("style",{children:[nr,(0,p.jsx)(na,{})]})]})}let nr=`
.left {
  ${tb}
  ${tz}
  padding: 0.4em;
  font-size: smaller;
  ${tU}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],o=t?tP:tZ;return(0,p.jsx)(p.Fragment,{children:`
.left {
  --timing: ${o};
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
`})}return(0,p.jsx)(p.Fragment,{children:`
.left {
  --b: ${+!!t};
  transform-origin: 0% 50%;
  opacity: var(--b);
  transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nl(){return(0,p.jsx)("div",{className:"button-item fullscreen",onClick:()=>tt(eS.fullscreen),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ns})})})}let ns=`
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
`;function nc(){return(0,p.jsx)("div",{className:"button-item home",onClick:()=>eD(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nd})})})}let nd=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function np(){return c.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"button-item position",onClick:()=>tt(eS.position),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nf})})})}let nu=3*Math.sqrt(2),nh=nu+6,nf=`
M 0,0
m 0,${nh/2}
l -3,-3
a ${nu},${nu} 0,1,1 6,0
z
m 0,${-nh+nu+nu/2}
a ${nu/2},${nu/2} 0,1,0 0,${-nu}
a ${nu/2},${nu/2} 0,1,0 0,${nu}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function nx(){return(0,p.jsx)("div",{className:"button-item recenter",onClick:()=>ek(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ng})})})}let ng=`
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
`;function nm(){return(0,p.jsx)("div",{className:"button-item rotate",onClick:()=>eN(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ny})})})}let ny=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nw(){return(0,p.jsx)("div",{className:"button-item zoom-in",onClick:()=>eE(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nv})})})}let nv=`
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
`;function nS(){return(0,p.jsx)("div",{className:"button-item zoom-out",onClick:()=>ej(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nE})})})}let nE=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nj(){return t9("right",(0,p.jsx)(nN,{}),"ui"),(0,p.jsx)("div",{id:"right"})}function nN(){return(0,p.jsxs)("div",{className:"ui-content right bottom",children:[(0,p.jsx)(nk,{}),(0,p.jsx)("style",{children:nD})]})}let nD=`
.right {
  ${tA}
  ${tz}
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
`;function nk(){return(0,p.jsxs)("div",{className:"button",children:[(0,p.jsx)(np,{}),(0,p.jsx)(nc,{}),(0,p.jsx)(nl,{}),(0,p.jsx)(nx,{}),(0,p.jsx)(nm,{}),(0,p.jsx)(nS,{}),(0,p.jsx)(nw,{}),(0,p.jsxs)("style",{children:[nb,(0,p.jsx)(nA,{})]})]})}let nb=`
.button {
  font-size: large;
  margin: 0;
  ${tI}
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
`;function nA(){let{open:t,animating:e}=ex();if(e){let[e,n]=t?[0,1]:[1,0],o=t?tP:tZ;return(0,p.jsx)(p.Fragment,{children:`
.right {
  --timing: ${o};
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
`})}function nO(){return t9("screen",(0,p.jsx)(nT,{}),"ui"),(0,p.jsx)("div",{id:"screen"})}function nT(){let t=eC();return(0,p.jsx)("div",{ref:t,className:"ui-content screen",onClick:()=>tt(ec.close),children:(0,p.jsxs)("style",{children:[nM,(0,p.jsx)(n$,{})]})})}let nM=`
.screen {
  ${tb}
  ${tC}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function n$(){let{open:t,animating:e}=eg(),n=tj(t=>t.animating);if(!e)return t?(0,p.jsx)(p.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,p.jsx)(p.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,p.jsx)(p.Fragment,{children:".screen { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],o=t?tP:tZ;return(0,p.jsx)(p.Fragment,{children:`
.screen {
  --duration: 400ms;
  --timing: ${o};
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
`})}}function nL(){return t9("ui",(0,p.jsx)(nR,{})),(0,p.jsx)("div",{id:"ui"})}function nR(){return(0,p.jsxs)("div",{className:"ui",children:[(0,p.jsx)(nO,{}),(0,p.jsx)(e8,{}),(0,p.jsx)(eP,{}),(0,p.jsx)(no,{}),(0,p.jsx)(nj,{}),(0,p.jsx)(e1,{}),(0,p.jsx)(eH,{})]})}function nC(){var t,e,n;let o;return null!==(o=(null==(n=document.querySelector("#ui"))||null==(e=n.shadowRoot)||null==(t=e.children)?void 0:t.length)??null)&&o>0}function nI(){ek()}var nz=n(469),nF=n(336),nH=n(5);let nU=nz.OZ(O),nW=nF.aU(A._k),nY=nF.tf(),nP=nF.JI(A.Eq,nz.CA());function nZ(t){return(0,j.Fs)(t,nF.zu(nU),nz.x1(t=>0===t.length?nH.dv:nH.zN(t[0])))}function nq(t){let e;return t.length<2||null===(e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y})))?null:M(e,1/t.length)}function nB(t){return new Map((0,j.Fs)(t.changedTouches,Array.from,nz.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let nG=(0,_.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z},isModeIdle:t=>{let{context:{mode:e}}=t;return"idle"===e},isModePanning:t=>{let{context:{mode:e}}=t;return"pan"===e},isModePinching:t=>{let{context:{mode:e}}=t;return"pinch"===e}},actions:{updateTouches:(0,K.a)({touches:t=>{var e;let n,o,i,a,l,s,c,d,p,{context:{touches:u},event:h}=t;return"TOUCH.START"===h.type?(e=h.ev,i=nq(o=nZ(n=nP.concat(u.vecs,nB(e)))),l=2!==o.length?null:.5>Math.abs((a=b(o[0],o[1])).y/a.x),{...u,vecs:n,points:o,cursor:i,horizontal:l}):"TOUCH.MOVE"===h.type?function(t,e){var n,o,i,a;let l,s=nB(e),c=nW.mapWithIndex(t.vecs,(t,e)=>(0,j.Fs)(s.get(t),nH.k$,nH.AU(()=>e,nz.xW(e)))),d=nZ(c),p=nq(d),[u,h]=d;if(null===p||u===r||h===r)return{...t,vecs:c,points:d,cursor:p};let f=(n=t.dists,o=Math.sqrt((i=u,a=h,Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2))),l=Math.pow((n.length>0?n[0]:o)-o,2),0===n.length||l>0?[o,...n]:n),x=function(t){let[e,n,o,i]=t;return e===r||n===r||o===r||i===r?null:e<n&&n<o&&o<i?-1:e>n&&n>o&&o>i?1:null}(f);return{vecs:c,points:d,cursor:p,dists:f,z:x,horizontal:t.horizontal}}(u,h.ev):"TOUCH.END"===h.type?(s=nB(h.ev),p=nq(d=nZ(c=nY.filterMapWithIndex(u.vecs,(t,e)=>s.has(t)?nH.dv:nH.zN(e)))),{vecs:c,points:d,cursor:p,dists:0===c.size?[]:u.dists,z:0===c.size?null:u.z,horizontal:u.horizontal}):u}}),raiseOp:(0,J.r)(t=>{let{event:e}=t;return"TOUCH.START"===e.type?{type:"STARTED"}:"TOUCH.MOVE"===e.type?{type:"MOVED"}:"TOUCH.END"===e.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,K.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,K.a)({mode:"pan"}),enterPinch:(0,K.a)({mode:"pinch"}),emitMulti:(0,tG.a)(t=>{let{context:{touches:e}}=t;return{type:"MULTI",touches:e}}),emitZoom:(0,tG.a)(t=>{let{context:{touches:e}}=t;return{type:"ZOOM",touches:e}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,J.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,J.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,J.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),nV=(0,J.c)(nG),nX=!1;function n_(t){nV.send({type:"TOUCH.START",ev:t})}function nK(t){nV.send({type:"TOUCH.MOVE",ev:t})}function nJ(t){nV.send({type:"TOUCH.END",ev:t})}function nQ(){nV.send({type:"CANCEL"})}function n0(t){e$||eM({type:"SEARCH",pos:{x:t.pageX,y:t.pageY}})}function n1(t){let e;null!==t&&(e=t,te(tn.eventTick,e))}function n5(t){return(0,p.jsxs)("div",{id:"viewer",className:"container",onTouchStart:n_,onTouchMove:nK,onTouchEnd:nJ,onClick:n0,onContextMenu:nI,onScroll:n1,onAnimationEnd:t=>{var e;(e={type:"ANIMATION.END",ev:t}).ev.stopPropagation(),eM(e),tt(to.animationEnd)},children:[t.children,(0,p.jsx)(n2,{})]})}function n2(){let t=`
.container {
  ${tb}
  ${tC}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{children:t}),(0,p.jsx)(n3,{}),(0,p.jsx)(n9,{}),(0,p.jsx)(n4,{})]})}function n3(){let t=tj(t=>t.layout.content),e=`
.content {
  ${tb}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,p.jsx)("style",{children:e})}function n9(){let t=tj(t=>t.animation);return(0,p.jsx)("style",{children:t})}function n4(){let{style:t}=t1();return null===t?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("style",{children:t})}function n6(){return null!==document.querySelector(".container")}nV.on("MULTI",t=>{let{touches:e}=t;2===e.vecs.size?(nX=!0,tt(eb.multiStart)):(tt(eb.multiEnd),nX=!1)}),nV.on("ZOOM",t=>{let e,{touches:n}=t,o=n.cursor,i=n.z;null!==o&&null!==i&&(e={z:i>0?1:-1,p:o},te(eb.zoom,e))});var n7=n(376);async function n8(t){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){n(t)},{enableHighAccuracy:!0,timeout:t,maximumAge:0})})}let ot=(0,_.mj)({types:{events:{},emitted:{}},actors:{api:(0,n7.Sx)(()=>n8(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,K.a)({position:t=>{let{event:e}=t;return e.output}}),(0,tG.a)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,K.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),oe=(0,J.c)(ot),on=(0,_.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tG.a)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tG.a)(t=>{let{event:e}=t;return e}),target:"Done"}}},Done:{always:"Idle"}}}),oo=(0,J.c)(on);function oi(t){oo.send(t)}oo.on("SEARCH",t=>{let{req:{psvg:e}}=t,n=c.mapCoord.matrix.inverse().transformPoint(e),o=tK.get();or.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:o}})}),oo.on("SEARCH.DONE",t=>{let e,{res:n}=t;return e=n,te(es.end,e)});let or=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function oa(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}or.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":oi({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let o;n=e.res,null===(o=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),oi({type:"SEARCH.DONE",res:null})):oi({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:o}});break;case"SEARCH.ERROR":console.log("search error!",e.error),oi({type:"SEARCH.DONE",res:null})}},or.onerror=t=>{console.error("search error",t)},or.onmessageerror=t=>{console.error("search messageerror",t)};let ol=(0,_.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:t=>{let{event:{key:e}}=t;return"r"===e},shouldRecenter:t=>{let{event:{key:e}}=t;return"c"===e},shouldRotate:t=>{let{event:{key:e}}=t;return"t"===e},shouldZoom:t=>{let{event:{key:e}}=t;return 0!==oa(e)},shouldFloorLevelUp:t=>{let{event:{key:e}}=t;return"u"===e},shouldFloorLevelDown:t=>{let{event:{key:e}}=t;return"d"===e}},actions:{reset:(0,tG.a)({type:"RESET"}),recenter:(0,tG.a)({type:"RECENTER"}),rotate:(0,tG.a)({type:"ROTATE"}),zoom:(0,tG.a)((t,e)=>{let{z:n}=e;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tG.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tG.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,K.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:o,control:i}=t;return{shift:"Shift"===e||n,alt:"Alt"===e||o,control:"Control"===e||i}})(e.mod,n.key)}}),handleUp:(0,K.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:o,control:i}=t;return{shift:"Shift"!==e&&n,alt:"Alt"!==e&&o,control:"Control"!==e&&i}})(e.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:t=>{let{event:{key:e}}=t;return{z:oa(e)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),os=(0,J.c)(ol);os.on("RESET",eD),os.on("RECENTER",ek),os.on("ROTATE",eN),os.on("ZOOM.IN",eE),os.on("ZOOM.OUT",ej),os.on("FLOOR.LEVEL.UP",()=>tt(tB.levelUp)),os.on("FLOOR.LEVEL.DOWN",()=>tt(tB.levelDown));let oc=(0,_.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:L,next:L,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,K.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,J.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:t=>{let{context:e}=t;return console.log("resize: ignoring height-only change",e)},target:"Idle"},{guard:t=>{let{context:e}=t;return!R(e.prev,e.next)},actions:[(0,K.a)({waited:0}),(0,tG.a)(t=>{var e,n,o,i;let r,a,{context:l}=t;return{type:"LAYOUT",layout:(e=c.fontSize,n=l.next,r=C((i={config:o=function(t,e,n,o){var i;let r,a,l,s,{outer:c,scale:d}=(i=o??n,r=e.width/e.height,s=(l=r>(a=i.width/i.height))?tc(e,a):td(e,a),{outer:s,inner:l?tc(i,r):td(i,r),scale:l?i.height/e.height:i.width/e.width,rO:r,rI:a,v:l});return{fontSize:t,container:e,outer:c,inner:o??n,svgScale:d}}(e,n,c.origViewBox,c.origBoundingBox),...tl(o)}).scroll),a=i.container.width/i.container.height,th(i,a<1?1/a:1,a<1?1:+a,r)),force:!l.first}}),(0,K.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,K.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,J.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:t=>{let{context:{next:e}}=t;return R(e,tw.get().container)},actions:(0,K.a)({prev:t=>{let{context:{next:e}}=t;return e}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),od=(0,J.c)(oc);od.on("LAYOUT",t=>{let e;return e=t,te(to.resize,e)}),window.addEventListener("resize",()=>{od.send({type:"RESIZE"})});let op=(0,_.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,K.a)({ticked:!1}),set:(0,K.a)({ticked:!0}),expire:(0,tG.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ou=(0,_.mj)({types:{},actions:{getScroll:(0,K.a)({scroll:()=>(function(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,o=t.scrollWidth,i=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),$(e,n,o,i)}return null})()}),syncScroll:(t,e)=>{let{pos:n}=e;return tg(n)}},actors:{syncScrollLogic:(0,n7.Sx)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!tg(e))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,tG.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,K.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,tG.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,K.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),oh=(0,J.c)(ou,{systemId:"system-scroll1"});function of(t){oh.send(t)}oh.on("SCROLL.GET.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.getDone,e)}),oh.on("SCROLL.SYNCSYNC.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.syncSyncDone,e)});let ox=(a=()=>tt(tn.eventExpire),o=op.provide({delays:{DURATION:500}}),(i=(0,J.c)(o)).on("EXPIRE",a),i.start(),{tick:function(){i.send({type:"TICK"})}}),og=(0,X.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function om(t){var e;t.getMapNames&&(e=t.getMapNames({data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig}),og.trigger.set({names:e}))}async function oy(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let ow=`
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
  ${tb}
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

${E}
`,ov=function(){var t;let e=(null==(t=c.cartoConfig)?void 0:t.backgroundColor)??c.backgroundColor??"darkgray",n={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n5,{...n,children:c.renderMap(n)}),(0,p.jsx)(nL,{}),(0,p.jsxs)("style",{children:[ow,`body { background-color: ${e}; }`]})]})};function oS(t){let{origViewBox:e,url:n}=t;return(0,p.jsx)("image",{href:n,x:e.x,y:e.y,width:e.width,height:e.height})}function oE(t){let{origViewBox:e,url:n,labels:o}=t;return void 0===o?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("svg",{href:n,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:F(e),children:[(0,p.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),o.map((t,e)=>(0,p.jsxs)("text",{...oD(t.attrs),children:["id"in t.attrs&&"style"in t.attrs&&(0,p.jsx)("style",{children:`#${t.attrs.id} { ${t.attrs.style}; }`}),t.children&&t.children.map((t,e)=>(0,p.jsx)("tspan",{...oD(t.attrs),children:t.text??""},e))]},e))]})}let oj=/^[{].*$/,oN=/^style$/;function oD(t){return Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return!e.match(oj)&&!e.match(oN)}).map(t=>{var e;let[n,o]=t;return[!(e=n).match(/^.*-.*$/)||e.match(/^(aria|data)-.*$/)?e:e.split("-").map((t,e)=>{var n;let o;return 0===e?t:(o=(n=t).match(/^(.)(.*)$/))?`${o[1].toUpperCase()}${o[2]}`:n}).join(""),o]}))}var ok=JSON.parse('{"1F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"BAYSIDE GEIHINKAN VERANDA minatomirai","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text39","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"62.4505","y":"172.96297"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan36","x":"62.4505","y":"172.96297"},"text":"BAYSIDE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan37","x":"62.4505","y":"186.46297"},"text":"GEIHINKAN"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan38","x":"62.4505","y":"199.96297"},"text":"VERANDA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan39","x":"62.4505","y":"213.46297"},"text":"minatomirai"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pie Holic","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text41","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"62.085999","y":"107.81398"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan40","x":"62.085999","y":"107.81398"},"text":"Pie"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan41","x":"62.085999","y":"125.81398"},"text":"Holic"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Ron Herman","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text43","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:14px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"167.38101","y":"99.429321"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan42","x":"167.38101","y":"99.429321"},"text":"Ron"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan43","x":"167.38101","y":"120.42932"},"text":"Herman"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Frank&Eileen","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text44","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"222.44051","y":"97.124985"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan44","x":"222.44051","y":"97.124985"},"text":"Frank"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"222.44051","y":"107.62498","id":"tspan91"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"222.44051","y":"118.12498","id":"tspan92"},"text":"Eileen"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Gente di Mare","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text47","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"327.479","y":"114.50247"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan45","x":"327.479","y":"114.50247"},"text":"Gente"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan46","x":"327.479","y":"125.00247"},"text":"di"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan47","x":"327.479","y":"135.50247"},"text":"Mare"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Carhartt WIP Store Yokohama","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text51","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"105.09797","y":"-365.125","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan51","x":"105.09797","y":"-365.125"},"text":"Carhartt WIP"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"105.09797","y":"-354.625","id":"tspan127"},"text":"Store Yokohama"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Salon de BIOGANCE Cafe","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text55","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"109.84601","y":"-400.125","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan53","x":"109.84601","y":"-400.125"},"text":"Salon de"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan55","x":"109.84601","y":"-389.625"},"text":"BIOGANCE Cafe"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"paw’s living","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text57","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:10px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"479.79001","y":"79.86998"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan56","x":"479.79001","y":"79.86998"},"text":"paw’s"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan57","x":"479.79001","y":"94.86998"},"text":"living"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Styles Annex","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text59","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"485.14398","y":"125.49997"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan58","x":"485.14398","y":"125.49997"},"text":"Styles"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan59","x":"485.14398","y":"143.49997"},"text":"Annex"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"COS","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text60","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:16px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"484.90402","y":"193.21997"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan60","x":"484.90402","y":"193.21997"},"text":"COS"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"KUSHITANI PERFORMANCE STORE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text63","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"237.36349","y":"-230.50099","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan61","x":"237.36349","y":"-230.50099"},"text":"KUSHITANI"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan62","x":"237.36349","y":"-220.00099"},"text":"PERFORMANCE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan63","x":"237.36349","y":"-209.50099"},"text":"STORE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"YANUK","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text64","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"237.5","y":"-253.258","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan64","x":"237.5","y":"-253.258"},"text":"YANUK"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"NEIGHBORHOOD","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text65","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"209.86966","y":"-289.9975","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan65","x":"209.86966","y":"-289.9975"},"text":"NEIGHBORHOOD"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"GREENROOM GALLERY","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text67","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"210.13297","y":"-330.2475","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan66","x":"210.13297","y":"-330.2475"},"text":"GREENROOM"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan67","x":"210.13297","y":"-319.7475"},"text":"GALLERY"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"DENHAM","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text68","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\'","x":"219.99998","y":"-394.99051","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan68","x":"219.99998","y":"-394.99051"},"text":"DENHAM"}]}],"2F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ZEBRA Coffee & Croissant","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text72","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline;opacity:1","x":"167.33351","y":"87.932823"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan69","x":"167.33351","y":"87.932823"},"text":"ZEBRA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan70","x":"167.33351","y":"101.43282"},"text":"Coffee"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan71","x":"167.33351","y":"114.93282"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan72","x":"167.33351","y":"128.43283"},"text":"Croissant"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Miguel Juani","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text74","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"104.94734","y":"-226.649","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan73","x":"104.94734","y":"-226.649"},"text":"Miguel"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan74","x":"104.94734","y":"-213.149"},"text":"Juani"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"A16","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text75","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:14px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"312.86398","y":"110.00632"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan75","x":"312.86398","y":"110.00632"},"text":"A16"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Hawaiian Cafe ＆ Restaurant Merengue Makana","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text80","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"109.928","y":"-490.04401","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan77","x":"109.928","y":"-490.04401"},"text":"Hawaiian"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan79","x":"109.928","y":"-478.04401"},"text":"Cafe & Restaurant"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan80","x":"109.928","y":"-466.04401"},"text":"Merengue Makana"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"LOVST BY NARUMIYA","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text83","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:12px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"226.89999","y":"-181.21001","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan81","x":"226.89999","y":"-181.21001"},"text":"LOVST"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan82","x":"226.89999","y":"-163.21001"},"text":"BY"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan83","x":"226.89999","y":"-145.21001"},"text":"NARUMIYA"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"焼肉うしすけ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text84","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"232.04549","y":"220.19519"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan84","x":"232.04549","y":"220.19519"},"text":"焼肉"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"232.04549","y":"234.55132","id":"tspan119"},"text":"うしすけ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"コリアン うしすけ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text86","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"219.65265","y":"-330.63989","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan85","x":"219.65265","y":"-330.63989"},"text":"コリアン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan86","x":"219.65265","y":"-319.47403"},"text":"うしすけ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Roller Coast","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text88","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"362.25848","y":"217.37634"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan87","x":"362.25848","y":"217.37634"},"text":"Roller"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan88","x":"362.25848","y":"227.87634"},"text":"Coast"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"COS","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text48","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:16px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"479.90402","y":"193.21999"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan48","x":"479.90402","y":"193.21999"},"text":"COS"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"DENHAM","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text49","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:7px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"219.99998","y":"-394.99051","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan49","x":"219.99998","y":"-394.99051"},"text":"DENHAM"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"BAYSIDE GEIHINKAN VERANDA minatomirai","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text89","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:9px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"62.4505","y":"140.46298"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan54","x":"62.4505","y":"140.46298"},"text":"BAYSIDE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan76","x":"62.4505","y":"153.96298"},"text":"GEIHINKAN"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan78","x":"62.4505","y":"167.46298"},"text":"VERANDA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan89","x":"62.4505","y":"180.96298"},"text":"minatomirai"}]}]}');let ob=["B1F","1F","2F"].map(t=>({name:t,href:n(303)(`./floor-${t}.svg`),labels:(null==ok?void 0:ok[t])??void 0})),oA=Object.values(JSON.parse('{"B1F":{"AB1F-Content-(ViewBox)":{"x":0,"y":0}},"1F":{"A1F-Content-(ViewBox)":{"x":0,"y":0},"A1F-Shops-1":{"x":62.5,"y":112.5},"A1F-Shops-2":{"x":62.5,"y":190},"A1F-Shops-3":{"x":167.5,"y":105.001},"A1F-Shops-4":{"x":222.5,"y":105},"A1F-Shops-5":{"x":312.5,"y":82.503},"A1F-Shops-6":{"x":327.5,"y":122.5},"A1F-Shops-7":{"x":362.5,"y":105},"A1F-Shops-8":{"x":397.5,"y":110},"A1F-Shops-9":{"x":480,"y":85},"A1F-Shops-10":{"x":485,"y":130},"A1F-Shops-11":{"x":485,"y":187.5},"A1F-Shops-12":{"x":167.5,"y":227.5},"A1F-Shops-13":{"x":222.5,"y":237.5},"A1F-Shops-14":{"x":257.5,"y":237.5},"A1F-Shops-15":{"x":292.5,"y":210.003},"A1F-Shops-16":{"x":327.5,"y":210.001},"A1F-Shops-17":{"x":362.5,"y":215},"A1F-Shops-18":{"x":397.5,"y":220}},"2F":{"A2F-Content-(ViewBox)":{"x":0,"y":0},"A2F-Shops-1":{"x":62.5,"y":157.5},"A2F-Shops-2":{"x":167.5,"y":105.001},"A2F-Shops-3":{"x":222.5,"y":105.001},"A2F-Shops-4":{"x":312.5,"y":105.001},"A2F-Shops-5":{"x":380,"y":105.001},"A2F-Shops-6":{"x":480,"y":110},"A2F-Shops-7":{"x":480,"y":187.5},"A2F-Shops-8":{"x":167.5,"y":227.5},"A2F-Shops-9":{"x":232.5,"y":225.001},"A2F-Shops-10":{"x":292.5,"y":215.003},"A2F-Shops-11":{"x":327.5,"y":220.001},"A2F-Shops-12":{"x":362.5,"y":220.001},"A2F-Shops-13":{"x":397.5,"y":220}}}')).concat().flatMap((t,e)=>Object.entries(t).map(t=>{let[n,o]=t;return[n,{coord:o,fidx:e}]}));function oO(t){let[e,n]=t;return n.map(t=>[e,t])}function oT(t){return t.reduce(function(t,e){let[n,o]=e,i=new Set([...t.get(n)??new Set,o]);return new Map([...t,[n,i]])},new Map)}let oM=Object.values(JSON.parse('{"B1F":{},"1F":{"BAYSIDE GEIHINKAN VERANDA minatomirai":["A1F-Shops-2"],"Pie Holic":["A1F-Shops-1"],"Ron Herman":["A1F-Shops-3"],"Frank&Eileen":["A1F-Shops-4"],"Gente di Mare":["A1F-Shops-6"],"Carhartt WIP Store Yokohama":["A1F-Shops-7"],"Salon de BIOGANCE Cafe":["A1F-Shops-8"],"paw’s living":["A1F-Shops-9"],"Styles Annex":["A1F-Shops-10"],"COS":["A1F-Shops-11"],"KUSHITANI PERFORMANCE STORE":["A1F-Shops-13"],"YANUK":["A1F-Shops-14"],"NEIGHBORHOOD":["A1F-Shops-15"],"GREENROOM GALLERY":["A1F-Shops-16"],"DENHAM":["A1F-Shops-18"]},"2F":{"ZEBRA Coffee & Croissant":["A2F-Shops-2"],"Miguel Juani":["A2F-Shops-3"],"A16":["A2F-Shops-4"],"Hawaiian Cafe ＆ Restaurant『Merengue Makana』":["A2F-Shops-6"],"LOVST BY NARUMIYA":["A2F-Shops-8"],"焼肉うしすけ":["A2F-Shops-9"],"コリアン うしすけ":["A2F-Shops-11"],"Roller Coast":["A2F-Shops-12"],"DENHAM":["A2F-Shops-13"],"COS":["A2F-Shops-7"],"BAYSIDE GEIHINKAN VERANDA minatomirai":["A2F-Shops-1"]}}')).flatMap(function(t){return Object.entries(t)});oT(Array.from(oM).flatMap(oO));let o$=oT(Array.from(oM).flatMap(oO).map(t=>{let[e,n]=t;return[n,e]}));var oL=JSON.parse('{"x":20.0,"y":50.0,"width":510.0,"height":235.0}');!function(t){let e;tV.init.add(t=>{if(t.floorsConfig){let e=t.floorsConfig.floors.length,n=t.floorsConfig.initialFidx;tQ.send({type:"INIT",nfloors:e,fidx:n}),t0.postMessage({type:"INIT",cfg:t.floorsConfig})}}),tB.select.add(t=>tQ.send({type:"SELECT",fidx:t})),tB.levelUp.add(()=>tQ.send({type:"LEVEL.UP"})),tB.levelDown.add(()=>tQ.send({type:"LEVEL.DOWN"})),tB.selectDone.add(t=>tQ.send({type:"SELECT.DONE",fidx:t})),eS.fullscreen.add(oy),tV.init.add(om),eS.position.add(()=>{var t;return t={type:"GET"},void oe.send(t)}),tn.eventTick.add(ty),tn.eventTick.add(ox.tick),tn.get.add(()=>of({type:"GET"})),tn.sync.add(t=>of({type:"SYNC",pos:t})),tn.syncSync.add(t=>of({type:"SYNCSYNC",pos:t})),tV.init.add(t=>{if(t.getSearchEntries){let e=t.getSearchEntries(t);or.postMessage({type:"INIT",entries:e})}}),es.start.add(function(t){oo.send({type:"SEARCH",req:t})}),to.layout.add(function(t){let{layout:e,force:n}=t;tE({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>tN())}),to.zoomStart.add(function(t){tE({type:"STYLE.ZOOM",...t})}),to.zoomEnd.add(function(t){tE({type:"STYLE.ZOOM",zoom:t.zoom})}),to.animation.add(function(t){tE({type:"STYLE.ANIMATION",animation:t})}),to.animationEnd.add(function(){tE({type:"STYLE.ANIMATION.END"})}),to.mode.add(function(t){tE({type:"STYLE.MODE",mode:t})}),tn.eventExpire.add(tN),eS.reset.add(nQ),eS.fullscreen.add(nQ),eS.position.add(nQ),eS.recenter.add(nQ),eS.zoomOut.add(nQ),eS.zoomIn.add(nQ),es.endDone.add(t=>eh.send({type:"DETAIL",...t})),ec.open.add(()=>{let t;return t=!0,te(ec.openDone,t)}),ec.openDone.add(t=>eh.send({type:t?"OPEN":"CANCEL"})),ec.close.add(()=>eh.send({type:"CANCEL"})),ec.closeDone.add(()=>{requestAnimationFrame(()=>{var t,e;null==(e=t3.get("detail"))||null==(t=e.querySelector(".detail"))||t.scroll(0,0)})}),tB.lock.add(t=>eM({type:"SWITCH",fidx:t})),tB.selectDone.add(()=>eM({type:"SWITCH.DONE"})),es.end.add(t=>eT.send({type:"SEARCH.END",res:t})),ec.open.add(()=>eA.set("locked")),ec.closeDone.add(()=>eM({type:"SEARCH.DONE"})),ec.closeDone.add(()=>eA.set("panning")),tn.getDone.add(t=>{null!==t&&eM({type:"SCROLL.GET.DONE",scroll:t})}),tn.syncSyncDone.add(t=>{null!==t&&eM({type:"SCROLL.SYNCSYNC.DONE",scroll:t})}),to.resize.add(t=>{let{layout:e,force:n}=t;return eM({type:"RESIZE",layout:e,force:n})}),to.mode.add(eR),to.zoomStart.add(()=>{eL=!0}),to.zoomEnd.add(()=>{eL=!1}),eS.reset.add(()=>eM({type:"HOME"})),eS.recenter.add(()=>eM({type:"RECENTER"})),eS.rotate.add(()=>eM({type:"ROTATE"})),eS.zoomOut.add(()=>eM({type:"ZOOM",z:-1,p:null})),eS.zoomIn.add(()=>eM({type:"ZOOM",z:1,p:null})),eb.multiStart.add(()=>tt(tn.get)),eb.multiStart.add(()=>eA.set("touching")),eb.multiEnd.add(()=>eA.set("panning")),eb.zoom.add(t=>{let{z:e,p:n}=t;return eM({type:"ZOOM",z:e>0?1:-1,p:n})}),tV.rendered.add(()=>eM({type:"RENDERED"})),tQ.start(),os.start(),oe.start(),od.start(),oh.start(),oo.start(),tS.start(),nV.start(),eh.start(),eT.start();let n=(d({origViewBox:e={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0},isContainerRendered:n6,isUiRendered:nC,...t}),d({...c}),{...c,origViewBox:e,...t});tX(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.2.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let o=document.getElementById(n.root);if(null===o)throw Error("#root not found!");o.onwheel=function(t){var e;let n=o.children[0];t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||eL)&&t.preventDefault()},o.oncontextmenu=function(t){t.preventDefault()},o.ontouchmove=function(t){if(eL){var e;if(t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui")return;t.preventDefault()}else if(!nX)return;t.preventDefault()},document.title=n.title,document.body.onkeydown=t=>{var e;return e={type:"DOWN",key:t.key},void os.send(e)},document.body.onkeyup=t=>{var e;return e={type:"UP",key:t.key},void os.send(e)},(0,t5.createRoot)(o).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(ov,{})}));let i=document.getElementById("style-root");if(null===i)throw Error("#style-root not found!");(0,t5.createRoot)(i).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(t2,{})}))}({renderMap:function(t){let{floors:e,data:{origViewBox:n}}=t,{viewBox:o,width:i,height:r}=function(){let{scroll:t,svg:e}=tj(t=>t.layout);return{viewBox:F(e),width:B(t.width),height:B(t.height)}}(),{fidxToOnAnimationEnd:a,urls:s}=t1();return void 0===e?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"content",children:(0,p.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:o,width:i,height:r,children:e.floors.map((t,e)=>(0,p.jsx)(l.Fragment,{children:(0,p.jsxs)("g",{className:`floor fidx-${e}`,onAnimationEnd:a(e),children:[(0,p.jsx)(oS,{origViewBox:n,idx:e,url:s.get(e),onAnimationEnd:a(e),labels:t.labels}),(0,p.jsx)(oE,{origViewBox:n,idx:e,url:s.get(e),onAnimationEnd:a(e),labels:t.labels})]})},e))})})},isMapRendered:function(){return!0},...{root:"root",title:"MARINE & WALK YOKOHAMA",backgroundColor:"#808080",origViewBox:JSON.parse('{"x":0,"y":0,"width":555.88959,"height":300.0}'),origBoundingBox:oL,zoomFactor:2,floorsConfig:{floors:ob,initialFidx:1},...{getSearchEntries:function(){return oA.map(t=>{let[e,n]=t;return{address:e,pos:n}})},getSearchInfo:function(t){let e=o$.get(t.address);return void 0===e||e.size<1?null:{title:Array.from(e)[0],x:{tag:"unknown"}}},renderInfo:function(t){return(0,p.jsx)("p",{children:t.info.title})}}}})}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return i[t](n,n.exports,a),n.exports}a.m=i,a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.u=t=>"static/js/async/"+t+"."+({147:"1ab12be8",968:"11934e1b"})[t]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],a.O=(e,n,o,i)=>{if(n){i=i||0;for(var r=t.length;r>0&&t[r-1][2]>i;r--)t[r]=t[r-1];t[r]=[n,o,i];return}for(var l=1/0,r=0;r<t.length;r++){for(var[n,o,i]=t[r],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(t=>a.O[t](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){t.splice(r--,1);var d=o();void 0!==d&&(e=d)}}return e},a.p="/demos/MarineAndWalk/",a.b=document.baseURI||self.location.href,e={410:0},a.O.j=t=>0===e[t],n=(t,n)=>{var o,i,[r,l,s]=n,c=0;if(r.some(t=>0!==e[t])){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(s)var d=s(a)}for(t&&t(n);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},(o=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o));var l=a.O(void 0,["783","845","902"],()=>a(898));l=a.O(l)})();