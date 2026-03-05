(()=>{var t,e,n,i,o={303(t,e,n){var i={"./floor-4F.svg":"514"};function o(t){return n(r(t))}function r(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id=303},514(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-4F.507d6237.svg"},898(t,e,n){"use strict";let i,o,r;var a,s=n(797);let l={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:l,internals:l,origin:l,measures:l,viewbox:l,points:l,lines:l,multilinestrings:l,multipolygons:l},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(t){return(0,s.createElement)("p",{},t.info.title)}};function d(t){c={...c,...t}}var p=n(617);n(774);var f=n(815),h=n(622);let x=f.Ay$.union([f.Ay$.number(),f.Ay$.string()]),m=f.Ay$.array(x),u=f.Ay$.object({ids:m}),y=h.codec(h.string(),u,{decode:(t,e)=>{try{return JSON.parse(t)}catch(n){return n instanceof h.ZodError&&e.issues.push({code:"invalid_format",format:"json",input:t,message:n.message}),h.NEVER}},encode:t=>JSON.stringify(t)}),g=f.Ay$.union([f.Ay$.number(),f.Ay$.string()]),w=f.Ay$.set(g),v=f.Ay$.object({ids:w}),S=f.Ay$.codec(u,v,{decode:t=>({ids:new Set(t.ids)}),encode:t=>({ids:Array.from(t.ids)})});f.Ay$.pipe(y,S);let k=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var j=n(997);function N(t,e,n){let[i,o,r]=t,[a,s]=e;return i*a+o*s+r*n}function b(t,e,n){return[N(function(t){let[[e],[n],[i]]=t;return[e,n,i]}(t),e,n),N(function(t){let[[,e],[,n],[,i]]=t;return[e,n,i]}(t),e,n)]}function E(t,e){let n=t.x+e.x,i=t.y+e.y;return{...t,x:n,y:i}}function O(t,e){let n=t.x-e.x,i=t.y-e.y;return{...t,x:n,y:i}}var z=n(304);let L=n(853).I3(function(t,e){return z._k.compare(t.x,e.x)||z._k.compare(t.y,e.y)}),A={x:0,y:0};function $(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,i="number"==typeof e?e:e instanceof Array?e[1]:e.y,o=t.x*n,r=t.y*i;return{...t,x:o,y:r}}function D(t,e,n,i){return{x:t,y:e,width:n,height:i}}let M={x:0,y:0,width:1,height:1};function T(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function C(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function R(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function F(t,e){return{...t,x:e.x,y:e.y}}function I(t){return function(t){let{x:e,y:n,width:i,height:o}=t;return`${e} ${n} ${i} ${o}`}(function(t,e){let{x:n,y:i,width:o,height:r}=t;return{x:e(n),y:e(i),width:e(o),height:e(r)}}(t,function(t){return Math.round(100*t)/100}))}function H(t){let{x:e,y:n,width:i,height:o}=t;return{tl:{x:e,y:n},br:{x:e+i,y:n+o}}}function U(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function W(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function q(t){let[[e,n],[i,o]]=t;return{tl:{x:e,y:n},br:{x:i,y:o}}}function Y(t,e){return[b(t,function(t){let[e]=t;return e}(e),0),b(t,function(t){let[,e]=t;return e}(e),0),b(t,function(t){let[,,e]=t;return e}(e),1)]}function Z(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function P(t,e,n,i){var o,r;return o=function(t,e){let[n,i]=e;return[Z(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),Z([-n,-i])].reduce(Y)}("number"==typeof(r=e)?[r,r]:"x"in r?[r.x,r.y]:r,[n,i]),(0,j.Fs)(t,H,W,t=>(function(t,e){let[n,i]=t;return[e(n),e(i)]})(t,t=>b(o,t,1)),q,U)}function V(t){return Math.round(100*t)/100}function X(t){return Math.round(1e7*t)/1e7}var _=n(510),G=n(437),B=n(967),J=n(282),K=n(92);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function tt(t){t.forEach(t=>t())}function te(t,e){t.forEach(t=>t(e))}let tn={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ti={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function to(t){return void 0!==t&&"number"==typeof t}function tr(t,e,n,i,o,r){return new DOMMatrixReadOnly(t instanceof Array?t:to(t)&&to(e)&&to(n)&&to(i)&&to(o)&&to(r)?[t,e,n,i,o,r]:void 0)}let ta={container:M,scroll:M,content:tr(),svgOffset:{x:-0,y:-0},svgScale:1,svg:M};function ts(t){let{container:e,outer:n,svgScale:i,inner:o}=t,{x:r,y:a}=n;return{container:e,scroll:e,content:tr(),svgOffset:{x:-r,y:-a},svgScale:i,svg:o}}function tl(t){let{scroll:e,content:n,svgOffset:i,svgScale:o,svg:r}=t;return tr().translate(e.x,e.y).multiply(n).translate(-i.x,-i.y).scale(1/o,1/o).translate(-r.x,-r.y)}function tc(t,e){let n=t.height,i=n*e;return D((t.width-i)/2,0,i,n)}function td(t,e){let n=t.width,i=n/e;return D(0,(t.height-i)/2,n,i)}let tp={...ta,config:{fontSize:16,container:M,outer:M,inner:M,svgScale:1}};function tf(t,e){let n=C(t.scroll);return th(t,e,e,n)}function th(t,e,n,i){let o=tl(t).inverse().transformPoint(i),r=P(t.scroll,[e,n],i.x,i.y),a=$(t.svgOffset,[e,n]),s=P(t.svg,[e,n],o.x,o.y);return{...t,scroll:r,svgOffset:a,svg:s}}function tx(t,e){var n,i;let o=C({...t.scroll,x:0,y:0}),r=(n=o.x,i=o.y,tr().translate(n,i).rotate(e).translate(-n,-i)).multiply(t.content);return{...t,content:r}}function tm(t,e){let n=t.scroll,i=O($(e,-1),n);return(0,j.Fs)(t,t=>({...t,scroll:R(t.scroll,i)}),t=>{let e,i,o,r,a,s,l;return e=F(t.scroll,n),i=t.content.inverse(),r=E(o=C(t.scroll),O(t.scroll,n)),a=i.transformPoint(o),s=$(O(i.transformPoint(r),a),-t.svgScale),l=R(t.svg,s),{...t,scroll:e,svg:l}})}function tu(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,i=e.scrollTop,o=e.scrollWidth,r=e.scrollHeight;if(null===n)return!1;let a=o-t.width,s=r-t.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${r}] vs. request=[${t.width}, ${t.height}]`),!1;let l=Math.round(-t.x),c=Math.round(-t.y);if(l<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==l&&(e.scrollLeft=l),i!==c&&(e.scrollTop=c);let d=e.scrollLeft;if(Math.abs(d-l)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let p=e.scrollTop;return!(Math.abs(p-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${i} vs. real=${p}`),!1)}let ty={scroll:M,client:{width:0,height:0},timeStamp:0};function tg(t){let e=t.currentTarget;null!==e&&(ty={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})}let tw=(0,G.e)(tp),tv=(0,B.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,J.a)({zoom:(t,e)=>e.zoom}),updateRotate:(0,J.a)({}),updateSvgMatrix:(0,J.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return function(t){let{content:e,svgOffset:n,svgScale:i,svg:o}=t;return e.translate(-n.x,-n.y).scale(1/i,1/i).translate(-o.x,-o.y)}(e)}}),updateGeoMatrix:(0,J.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,J.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:i}=t,o=Math.max(n.width,n.height)/2*i,r=Math.round(Math.log10(o)),a=(e=o/Math.pow(10,r-1),Q.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:s}=a[0],l=s*Math.pow(10,r-1);return{svg:l,client:l/i}}(e)}}),updateScroll:(0,J.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x+o.width/2,y:i.y+o.height/2};return r.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x,y:i.y},s={x:i.x+o.width,y:i.y+o.height};return{start:r.transformPoint(a),end:r.transformPoint(s)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:tp,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:A,distanceRadius:{svg:0,client:0},geoRange:{start:A,end:A},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,J.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),t=>{let{event:e}=t;return tw.set(e.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,K.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:t=>{let{event:e}=t;return e}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}}},"STYLE.MODE":{actions:(0,J.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:(0,J.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,J.a)({animation:t=>{let{event:{animation:e}}=t;return null===e?"":function(t){let{matrix:e,origin:n}=t,i=tr();return`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${i.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${e.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(e)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,J.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,J.a)({animation:null,animating:!1}),target:"Idle"}}}}}),tS=(0,K.c)(tv,{systemId:"system-viewer1"});function tk(t){tS.send(t)}function tj(t){return(0,_.d4)(tS,e=>t(e.context))}function tN(){tk({type:"STYLE.SCROLL",currentScroll:ty})}function tb(){return tj(t=>t.layout.container)}function tE(){return tj(t=>t.distanceRadius)}let tO=`
position: absolute;
left: 0;
top: 0;
`,tz=`
position: absolute;
right: 0;
top: 0;
`,tL=`
position: absolute;
left: 0;
bottom: 0;
`,tA=`
position: absolute;
right: 0;
bottom: 0;
`,t$=`
margin: 0;
`,tD=`
padding: 0;
`,tM=`
${t$} ${tD}
`,tT=`
box-sizing: border-box;
`,tC=`
width: 100vw;
height: 100vh;
height: 100svh;
`,tR=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tF=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tI=`
-webkit-user-select: none;
user-select: none;
`,tH=`
touch-action: none;
`,tU=`
pointer-events: none;
`,tW=`
pointer-events: initial;
`,tq=`
background-color: rgba(255, 255, 255, 0.5);
`,tY=`
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
`,tV={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tX=n(473);let t_={init:new Set,rendered:new Set},tG=function(t){te(t_.init,t)},tB=function(){tt(t_.rendered)},tJ=(0,G.e)(0),tK=(0,B.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,J.a)({blobs:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.blobs.set(n,i))},urls:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.urls.set(n,URL.createObjectURL(i)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,J.a)({nfloors:t=>{let{event:e}=t;return e.nfloors},fidx:t=>{let{event:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tJ.set(e.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:[(0,J.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),t=>{let{event:e}=t;return tJ.set(e.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:t=>{let{context:e}=t;return e.fidx===e.nfloors-1}},{actions:(0,tX.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx+1}})}],"LEVEL.DOWN":[{guard:t=>{let{context:e}=t;return 0===e.fidx}},{actions:(0,tX.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,J.a)({prevFidx:null}),target:"Idle"}}}}}),tQ=(0,K.c)(tK);tQ.on("LOCK",t=>{let e,{fidx:n}=t;return e=n,te(tV.lock,e)});let t0=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function t1(){var t;let{fidx:e,prevFidx:n,urls:i}=(t=t=>{let{fidx:e,prevFidx:n,urls:i}=t;return{fidx:e,prevFidx:n,urls:i}},(0,_.d4)(tQ,e=>t(e.context))),o=(0,s.useMemo)(()=>(function(t,e,n){let i=c.floorsConfig;if(void 0===i)return null;let o=i.floors.map((i,o)=>{var r,a,s,l,c,d,p;return r=t,a=e,s=n,(l=o)!=r||s?l===a?(c=l,`
.fidx-${c} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(d=l,`
.fidx-${d} {
  visibility: hidden;
}
  `):(p=l,`
.fidx-${p} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${o}
${tP}
`})(e,n,void 0===i.get(e)),[e,n,i]),r=(0,s.useCallback)(t=>()=>{let n;return t!==e?void 0:(n=t,te(tV.selectDone,n))},[e]),a=(0,s.useCallback)(t=>()=>{let i;return null!==n||t===e?void 0:(i=t,te(tV.lock,i))},[e,n]);return{fidx:e,prevFidx:n,style:o,fidxToOnAnimationEnd:r,fidxToOnClick:a,urls:i}}t0.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:t,blob:n}=e;tQ.send({type:"IMAGE",fidx:t,blob:n})}}},t0.onerror=t=>{console.error("floors error",t)},t0.onmessageerror=t=>{console.error("floors messageerror",t)};var t2=n(284);function t5(){let t=tj(t=>t.rendered);(0,s.useEffect)(()=>{requestAnimationFrame(()=>tB())},[t]);let e=tj(t=>t.shown),n=tj(t=>t.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${tY};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",i=tj(t=>t.layout.scroll),o=`
.content {
  width: ${V(i.width)}px;
  height: ${V(i.height)}px;
}
`;return(0,p.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,o]})}let t3=new Map;function t4(t,e,n){(0,s.useEffect)(()=>(function(t,e,n){let i=void 0===n?document:t3.get(n)??null;if(null===i)return;let o=i.querySelector(`#${t}`)??null;if(null===o||null!==o.shadowRoot)return;let r=o.attachShadow({mode:"open"});t3.set(t,r),(0,t2.createRoot)(r).render(e)})(t,e,n),[t,n,e])}let t6={bus:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,p.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,p.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,p.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,p.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,p.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,p.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,p.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,p.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,p.jsx)("use",{x:"8.5",href:"#_person2"}),(0,p.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,p.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36,-36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,p.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,p.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,p.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,p.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,p.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,p.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,p.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,p.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,p.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,p.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,p.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,p.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,p.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,p.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,p.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,p.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,p.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function t7(){return(0,p.jsx)("g",{className:"assets",children:(0,p.jsx)(t9,{})})}function t9(){return(0,p.jsx)("g",{className:"symbols",children:Object.entries(t6).map((t,e)=>{let[n,i]=t;return(0,p.jsx)(s.Fragment,{children:i({id:n})},e)})})}function t8(t){return t>.5?-1:+(t<.5)}function et(t){return t<.3?1:t>.7?-1:0}function ee(t,e,n,i){let o={x:e/2,y:n/2},r=e/20,a=r/2;function s(e){var n;let i,o;return n={x:t.h,y:t.v},i=e.x*n.x,o=e.y*n.y,{...e,x:i,y:o}}let l=t.th<Math.PI/4,c=0===t.v,d=0===t.h,p=s($(o,-1)),f=s(c||d?O($(o,-1),{x:i,y:i}):O($(o,-1),{x:l?i:0,y:l?0:i})),[h,x]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:l?[{x:0,y:0},s({x:0,y:r})]:[{x:0,y:0},s({x:r,y:0})],m=E(p,h),u=E(p,x);return{p,q:f,a:m,b:u}}function en(t){return{open:t,animating:!1}}function ei(t){return t.open||t.animating?null:{open:!0,animating:!0}}function eo(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function er(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function ea(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function es(t){let{open:e,animating:n}=t;return e||n}let el={start:new Set,end:new Set,endDone:new Set},ec={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ed={p:A,psvg:A,fidx:0,layout:ta,info:{title:""}};function ep(t){return function(e,n){let i=e[n],o=t(i);return e[n]=null===o?i:o,e}}let ef=(0,B.mj)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return es(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return es(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,J.a)({canceling:()=>!0}),endCancel:(0,J.a)({canceling:()=>!1}),open:(0,J.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(ei)(n,i)}}),close:(0,J.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(er)(n,i)}}),handle:(0,J.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(n[i].open?eo:ea)(n,i)}})}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,detail:ed,m:{header:en(!0),detail:en(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,J.a)({detail:t=>{let{event:{psvg:e,fidx:n,info:i,layout:o}}=t;return{psvg:e,p:tl(o).transformPoint(e),fidx:n,info:i,layout:o}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,K.n)("isDetailVisible")},{actions:(0,J.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,K.n)("animationEnded")},{actions:(0,J.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,K.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,J.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tX.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,J.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,K.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,J.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,K.r)({type:"DONE"})]}}}}}),eh=(0,K.c)(ef);function ex(){return(0,_.d4)(eh,t=>t.context)}function em(){return ex().m.header}function eu(){return ex().m.detail}function ey(t){return(0,p.jsxs)("div",{className:"balloon",children:[(0,p.jsx)(ew,{...t}),t.children,(0,p.jsx)("style",{children:eg})]})}eh.on("CLOSE.DONE",()=>tt(ec.closeDone));let eg=`
.balloon,
.balloon-svg {
  ${tO}
  ${tU}
  z-index: 10;
  will-change: opacity, transform;
}
`;function ew(t){let e=t._hv;if(null===e)return(0,p.jsx)("svg",{});let{viewBox:n,width:i,height:o,fg:r,bg:a}=function(t,e){let{bw:n,bh:i,lh:o,d:r,width:a,height:s}=e,l=D(-a/2,-a/2,a,s),{body:c,leg:d}=function(t,e,n,i){let o={x:e/2,y:n/2},r=`
m${-o.x},${-o.y}
h${e}
v${n}
h${-e}
z
`,{p:a,q:s,a:l,b:c}=ee(t,e,n,i),d=O(s,l),p=O(c,s),f=O(a,c);return{body:r,leg:`
m${l.x},${l.y}
l${d.x},${d.y}
l${p.x},${p.y}
l${f.x},${f.y}
z
`}}(t,n,i,o);return{viewBox:l,width:a,height:s,bg:`M${r},${r}`+c+`M${r},${r}`+d,fg:"M0,0"+c+"M0,0"+d}}(e,t._size);return(0,p.jsxs)("svg",{className:"balloon-svg",viewBox:I(n),width:i,height:o,children:[(0,p.jsx)("path",{className:"bg",d:a}),(0,p.jsx)("path",{className:"fg",d:r}),(0,p.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function ev(t){let{_p:e,_hv:n,_size:i,_leg:o}=t,r=eu(),a=null!==e&&null!==n&&es(r)?function(t,e,n,i,o){let{open:r,animating:a}=t,{width:s,height:l}=i,c=$(o.q,-1);if(a){let[t,n]=r?[0,1]:[1,0],[i,o]=r?[0,1]:[1,0],[a,d]=r?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[p,f]=r?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],h=r?tY:tZ;return`
.detail,
.balloon {
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --dp-x: ${c.x}px;
  --dp-y: ${c.y}px;
  --oa: ${t};
  --ob: ${n};
  --sa: ${i};
  --sb: ${o};
  --timing: ${h};
  --dxa: ${a};
  --dxb: ${p};
  --dya: ${d};
  --dyb: ${f};
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
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
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
`}(r,e,0,i,o):".balloon, .detail { visibility: hidden; }";return(0,p.jsx)("style",{children:a})}let eS={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},ek=()=>tt(eS.zoomIn),ej=()=>tt(eS.zoomOut),eN=()=>tt(eS.rotate),eb=()=>tt(eS.reset),eE=()=>tt(eS.recenter),eO={multiStart:new Set,multiEnd:new Set,zoom:new Set},ez=(0,G.e)("panning");ez.subscribe(t=>{let e;return e=t,te(ti.mode,e)});let eL=(0,B.mj)({types:{},guards:{isHoming:t=>{let{context:{animationReq:e}}=t;return null!==e&&"home"===e.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,J.a)({rendered:!0}),emitGetScroll:(0,tX.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tX.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNC",pos:e.scroll}}),emitSyncScrollSync:(0,tX.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNCSYNC",pos:e.scroll}}),calcZoomAnimation:(0,J.a)({animation:t=>{var e,n,i,o,r,a,s,l,d,p,f,h,x;let m,u,y,g,w,v,S,k,{context:{animationReq:j,layout:N}}=t;return null===j?null:"zoom"===j.type?(e=N,n=j.z,i=j.p,m=tl(e).inverse().transformPoint(i),u=1/(o=n,Math.pow(c.zoomFactor,o)),y=tr().scale(1/u,1/u),{type:"Zoom",svg:P(e.svg,u,m.x,m.y),svgScale:e.svgScale*u,q:y,o:i}):"home"===j.type?(r=N,g=C((a=function(t){let{config:e,content:n}=t;return{config:e,...ts(e),content:n}}(N)).config.inner),w=tl(r).transformPoint(g),v=a.svgScale/r.svgScale,k=(function(t,e){if(t instanceof DOMMatrixReadOnly)return tr(1,0,0,1,t.e,t.f);if("number"==typeof t&&"number"==typeof e)return tr(1,0,0,1,t,e);throw Error("dommatrixreadonlyTranslateOnly")})((S=C(r.container)).x-w.x,S.y-w.y).multiply((s=1/v,l=1/v,d=w.x,p=w.y,tr().scale(s,l,1,d,p,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:k,o:null}):(f=0,h=90,x=j.p,{type:"Rotate",deg:90,q:tr().rotate(90),o:x})}}),updateLayoutFromZoom:(0,J.a)({prevLayout:t=>{let{context:{layout:e}}=t;return e},layout:t=>{let{context:{layout:e,animation:n}}=t;return function(t,e){var n,i,o;return null===e?t:"Move"===e.type?(n=e.move,{...t,scroll:F(t.scroll,n)}):"Zoom"===e.type?(i=e.svg,o=e.svgScale,{...t,svg:i,svgScale:o}):tx(t,e.deg)}(e,n)}}),endZoom:(0,J.a)({prevLayout:null,animation:null,zoom:t=>{let{context:{zoom:e,animationReq:n}}=t;return e*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:t=>{let{context:{rotate:e,animationReq:n}}=t;return e+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,J.a)({cursor:t=>{let{context:{origLayout:e}}=t;return C(e.container)},layout:t=>{let{context:{origLayout:e,rotate:n}}=t;return tx(tf(e,9),n)}}),emitSyncAnimation:(0,tX.a)(t=>{let{context:{animation:e}}=t;return{type:"SYNC.ANIMATION",animation:e}}),emitZoomStart:(0,tX.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.START",layout:e,zoom:n}}),emitZoomEnd:(0,tX.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.END",layout:e,zoom:n}}),resetCursor:(0,J.a)({cursor:t=>{let{context:{layout:e}}=t;return C(e.container)}}),resizeLayout:(0,J.a)({rendered:!1,origLayout:(t,e)=>{let{layout:n}=e;return n},layout:(t,e)=>{let{layout:n}=e;return tf(n,9)}}),updateLayoutFromScroll:(0,J.a)({layout:t=>{let{context:e}=t,{scroll:n}=ty;return tm(e.layout,n)}}),emitSyncLayout:(0,tX.a)(t=>{let{context:{layout:e,rendered:n}}=t;return{type:"SYNC.LAYOUT",layout:e,force:n}}),emitSearchStart:(0,tX.a)(t=>{let{context:{layout:e,cursor:n}}=t,{scroll:i}=ty;return{type:"SEARCH.START",req:{psvg:tl(tm(e,i)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,tX.a)((t,e)=>{let{context:n}=t,{res:i}=e,{scroll:o}=ty,r=tm(n.layout,o);return{type:"SEARCH.END.DONE",res:null===i?null:{...i,layout:r}}}),emitSwitch:(0,tX.a)((t,e)=>{let{fidx:n}=e;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,tX.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:tp,prevLayout:null,layout:tp,cursor:C(tp.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,K.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"Resizing"},SEARCH:{actions:(0,J.a)({cursor:t=>{let{event:{pos:e}}=t;return e}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,J.a)({animationReq:t=>{let{context:{layout:e},event:{z:n,p:i}}=t;return{type:"zoom",z:n,p:i??C(e.container)}}}),target:"Zooming"},HOME:{actions:(0,J.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,J.a)({animationReq:t=>{let{context:{layout:e}}=t;return{type:"rotate",deg:90,p:C(e.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,J.a)({animationReq:null}),type:"final"}}}}}),eA=(0,K.c)(eL,{systemId:"system-viewer1"});function e$(t){eA.send(t)}eA.on("SEARCH.START",t=>{let e,{req:n}=t;return e=n,te(el.start,e)}),eA.on("SEARCH.END.DONE",t=>{let e,n,{res:i}=t;null===i?eA.send({type:"SEARCH.DONE"}):(e=i,te(el.endDone,e),n=i.psvg,te(ec.open,n))}),eA.on("ZOOM.START",t=>{let e;return e=t,te(ti.zoomStart,e)}),eA.on("ZOOM.END",t=>{let e;return e=t,te(ti.zoomEnd,e)}),eA.on("SWITCH",t=>{let e,{fidx:n}=t;return e=n,te(tV.select,e)}),eA.on("SWITCH.DONE",()=>tt(tV.unlock)),eA.on("SYNC.ANIMATION",t=>{let e,{animation:n}=t,i=(null==n?void 0:n.q)??null,o=(null==n?void 0:n.o)??null;null!==i&&(e={matrix:i,origin:o},te(ti.animation,e))}),eA.on("SYNC.LAYOUT",t=>{let e,{layout:n,force:i}=t;return e={layout:n,force:i},te(ti.layout,e)}),eA.on("SCROLL.SYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.sync,e)}),eA.on("SCROLL.SYNCSYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.syncSync,e)}),eA.on("SCROLL.GET",()=>tt(tn.get));let eD=!1,eM=!1;function eT(t){eD="locked"===t,eM="locked"===t}function eC(){let t=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",eR),()=>{e.removeEventListener("wheel",eR)}},[t]),t}function eR(t){let e=t.currentTarget;eM&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function eF(t){let e,{_detail:n}=t,i=eC();return(0,p.jsxs)("div",{ref:i,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void eh.send(t)},children:[c.renderInfo&&(1!==(e=Object.values(n.info)).length||"string"!=typeof e[0]||""!==e[0])&&c.renderInfo({info:n.info}),(0,p.jsx)("style",{children:eI})]})}let eI=`
.detail {
  ${tO}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${tW}
  ${tT}
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
  ${tI}
  margin: 1.5em;
  text-align: center;
}

p {
  ${tI}
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
`;function eH(){return t4("detail",(0,p.jsx)(eU,{}),"ui"),(0,p.jsx)("div",{id:"detail"})}function eU(){return(0,p.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,p.jsx)(eW,{}),(0,p.jsx)(eq,{})]})}function eW(){let t,e,n,i,o,r,a,s,l,c,d,f,h=ex().detail,x=(r=h.p,a=h.layout,s=function(t,e){let{x:n,y:i}=e,o=t.width/t.height,r={x:n/t.width,y:i/t.height},a=o>1?t8(r.x):et(r.x);return{h:a,v:o>1?et(r.y):t8(r.y),th:Math.atan2(t.height,t.width)}}(h.layout.container,r),l=a.container.width,e=50*(t=.01*Math.min(l,c=a.container.height)),n=50*t,i=10*t,o=e/100,f=ee(s,(d={bw:e,bh:n,lh:i,d:o,width:e+2*i+2*o,height:n+2*i+2*o}).bw,d.bh,d.lh),{_p:r,_hv:s,_W:l,_H:c,_size:d,_leg:f});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(ey,{...x}),(0,p.jsx)(eF,{_detail:h}),(0,p.jsx)(ev,{...x})]})}function eq(){return(0,p.jsx)("svg",{id:"ui-svg-defs",children:(0,p.jsx)("defs",{children:(0,p.jsx)(t7,{})})})}function eY(){return t4("footer",(0,p.jsx)(eZ,{}),"ui"),(0,p.jsx)("div",{id:"footer"})}function eZ(){let t=c;return(0,p.jsxs)("div",{className:"ui-content footer",children:[(0,p.jsx)("p",{children:t.copyright}),(0,p.jsxs)("style",{children:[eP,(0,p.jsx)(eV,{})]})]})}let eP=`
.footer {
  ${tL}
  ${tR}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${tI}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function eV(){let{open:t,animating:e}=em();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
.footer {
  --duration: 300ms;
  --timing: ${i};
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
`})}function eX(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("g",{id:"measure",children:(0,p.jsx)(eB,{})})})}function e_(){let{svg:t}=tE();return(0,p.jsxs)("div",{id:"distance",children:[(0,p.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),e0.map(e=>(0,p.jsxs)(s.Fragment,{children:[(0,p.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,p.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,p.jsx)("style",{children:(0,p.jsx)(eQ,{})})]})}function eG(){let t=tj(t=>t.geoPoint),e=t.x>0?"E":"W",n=t.y>0?"N":"S",i=`${e} ${X(Math.abs(t.x))}`,o=`${n} ${X(Math.abs(t.y))}`;return(0,p.jsxs)("div",{id:"coordinate",children:[(0,p.jsx)("p",{id:"longitude",children:i}),(0,p.jsx)("p",{id:"latitude",children:o}),(0,p.jsx)("style",{children:(0,p.jsx)(eK,{})})]})}function eB(){let{width:t,height:e}=tb(),{client:n}=tE(),i=(0,s.useMemo)(()=>`M0,${e/2} h${t}`,[e,t]),o=(0,s.useMemo)(()=>`M${t/2},0 v${e}`,[e,t]),r=(0,s.useMemo)(()=>e0.map(i=>(function(t){let{width:e,height:n,r:i}=t;return`M${e/2},${n/2} m-${i},0 a${i},${i} 0,1,0 ${2*i},0 a${i},${i} 0,1,0 -${2*i},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(i+1)})),[n,e,t]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),(0,p.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:o}),r.map((t,e)=>(0,p.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function eJ(){let{open:t,animating:e}=em(),[n,i]=t?[0,1]:[1,0],o=e?`
.guides {
  --timing: ${t?tY:tZ};
  --duration: 300ms;
  --oa: ${n};
  --ob: ${i};
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
  --ob: ${i};
  opacity: var(--ob);
  will-change: opacity;
}
`;return(0,p.jsx)(p.Fragment,{children:o})}function eK(){let{width:t,height:e}=tb(),n=`
#distance,
#coordinate {
  ${tO}
  width: ${t}px;
  height: ${e}px;
}
`,i=`
#longitude {
  ${tA}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,o=`
#latitude {
  ${tL}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,p.jsxs)(p.Fragment,{children:[n,i,o]})}function eQ(){let{width:t,height:e}=tb(),{client:n}=tE(),i=`
.distance {
  ${tO}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,o=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,r=e0.map(i=>`
#distance-x-${i+1} {
  transform: translate(${t/2+n*(i+1)}px, ${e/2}px) scale(0.5);
}
`),a=e0.map(i=>`
#distance-y-${i+1} {
  transform: translate(${t/2}px, ${e/2+n*(i+1)}px) scale(0.5);
}
`);return(0,p.jsxs)(p.Fragment,{children:[o,i,r,a]})}let e0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function e1(){return t4("guides",(0,p.jsx)(e2,{}),"ui"),(0,p.jsx)("div",{id:"guides"})}function e2(){var t;return!((null==(t=c.uiConfig)?void 0:t.showGuides)??!0)||c.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"ui-content guides",children:[(0,p.jsx)("svg",{className:"guides",children:(0,p.jsx)(eX,{})}),(0,p.jsx)(e_,{}),(0,p.jsx)(eG,{}),(0,p.jsxs)("style",{children:[e5,(0,p.jsx)(eJ,{})]})]})}let e5=`
.guides {
  ${tO}
  ${tC}
  ${tU}
  z-index: 2;
}

text {
  ${tI}
}
`;function e3(){let{fidx:t,fidxToOnClick:e}=t1(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"floors",children:[(0,p.jsx)("ul",{className:"floor-list",children:n.floors.map((n,i)=>{let{name:o}=n;return(0,p.jsx)("li",{className:`floor-item ${e9(i===t)}`,onClick:e(i),children:o},i)})}),(0,p.jsx)("style",{children:e4})]})}let e4=`
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
  ${tq}
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
`;function e6(){let{fidx:t}=t1(),e=c.floorsConfig;return void 0===e||e.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{children:[e.floors.map((e,n)=>(0,p.jsx)("h2",{className:`floor-name ${e9(n===t)}`,children:e.name},n)),(0,p.jsx)("style",{children:e7})]})}let e7=`
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
`;function e9(t){return t?"selected":"unselected"}function e8(){return t4("header",(0,p.jsx)(nt,{}),"ui"),(0,p.jsx)("div",{id:"header"})}function nt(){let t=c;return(0,p.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void eh.send(t)},children:[(0,p.jsx)("h1",{className:"title",onClick:()=>eb(),children:t.title}),(0,p.jsx)(e6,{}),(0,p.jsxs)("style",{children:[ne,(0,p.jsx)(nn,{})]})]})}let ne=`
.header {
  ${tO}
  ${tR}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${tI}
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

`;function nn(){let{open:t,animating:e}=em();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
.header {
  --timing: ${i};
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
`})}function ni(){return t4("left",(0,p.jsx)(no,{}),"ui"),(0,p.jsx)("div",{id:"left"})}function no(){return(0,p.jsxs)("div",{className:"ui-content left bottom",children:[(0,p.jsx)(e3,{}),(0,p.jsxs)("style",{children:[nr,(0,p.jsx)(na,{})]})]})}let nr=`
.left {
  ${tO}
  ${tF}
  padding: 0.4em;
  font-size: smaller;
  ${tU}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:t,animating:e}=em();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
.left {
  --timing: ${i};
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
`})}function ns(){return(0,p.jsx)("div",{className:"button-item fullscreen",onClick:()=>tt(eS.fullscreen),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nl})})})}let nl=`
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
`;function nc(){return(0,p.jsx)("div",{className:"button-item home",onClick:()=>eb(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nd})})})}let nd=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function np(){return c.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"button-item position",onClick:()=>tt(eS.position),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nx})})})}let nf=3*Math.sqrt(2),nh=nf+6,nx=`
M 0,0
m 0,${nh/2}
l -3,-3
a ${nf},${nf} 0,1,1 6,0
z
m 0,${-nh+nf+nf/2}
a ${nf/2},${nf/2} 0,1,0 0,${-nf}
a ${nf/2},${nf/2} 0,1,0 0,${nf}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function nm(){return(0,p.jsx)("div",{className:"button-item recenter",onClick:()=>eE(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nu})})})}let nu=`
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
`;function ny(){return(0,p.jsx)("div",{className:"button-item rotate",onClick:()=>eN(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:ng})})})}let ng=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nw(){return(0,p.jsx)("div",{className:"button-item zoom-in",onClick:()=>ek(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nv})})})}let nv=`
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
`;function nS(){return(0,p.jsx)("div",{className:"button-item zoom-out",onClick:()=>ej(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nk})})})}let nk=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nj(){return t4("right",(0,p.jsx)(nN,{}),"ui"),(0,p.jsx)("div",{id:"right"})}function nN(){return(0,p.jsxs)("div",{className:"ui-content right bottom",children:[(0,p.jsx)(nE,{}),(0,p.jsx)("style",{children:nb})]})}let nb=`
.right {
  ${tz}
  ${tF}
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
`;function nE(){return(0,p.jsxs)("div",{className:"button",children:[(0,p.jsx)(np,{}),(0,p.jsx)(nc,{}),(0,p.jsx)(ns,{}),(0,p.jsx)(nm,{}),(0,p.jsx)(ny,{}),(0,p.jsx)(nS,{}),(0,p.jsx)(nw,{}),(0,p.jsxs)("style",{children:[nO,(0,p.jsx)(nz,{})]})]})}let nO=`
.button {
  font-size: large;
  margin: 0;
  ${tR}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${tW}
  cursor: default;
  ${tq}
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
`;function nz(){let{open:t,animating:e}=em();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
.right {
  --timing: ${i};
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
`})}function nL(){return t4("screen",(0,p.jsx)(nA,{}),"ui"),(0,p.jsx)("div",{id:"screen"})}function nA(){let t=eC();return(0,p.jsx)("div",{ref:t,className:"ui-content screen",onClick:()=>tt(ec.close),children:(0,p.jsxs)("style",{children:[n$,(0,p.jsx)(nD,{})]})})}let n$=`
.screen {
  ${tO}
  ${tC}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nD(){let{open:t,animating:e}=eu(),n=tj(t=>t.animating);if(!e)return t?(0,p.jsx)(p.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,p.jsx)(p.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,p.jsx)(p.Fragment,{children:".screen { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
.screen {
  --duration: 400ms;
  --timing: ${i};
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
`})}}function nM(){return t4("ui",(0,p.jsx)(nT,{})),(0,p.jsx)("div",{id:"ui"})}function nT(){return(0,p.jsxs)("div",{className:"ui",children:[(0,p.jsx)(nL,{}),(0,p.jsx)(e8,{}),(0,p.jsx)(eY,{}),(0,p.jsx)(ni,{}),(0,p.jsx)(nj,{}),(0,p.jsx)(e1,{}),(0,p.jsx)(eH,{})]})}function nC(){var t,e,n;let i;return null!==(i=(null==(n=document.querySelector("#ui"))||null==(e=n.shadowRoot)||null==(t=e.children)?void 0:t.length)??null)&&i>0}function nR(){eE()}var nF=n(469),nI=n(336),nH=n(5);let nU=nF.OZ(L),nW=nI.aU(z._k),nq=nI.tf(),nY=nI.JI(z.Eq,nF.CA());function nZ(t){return(0,j.Fs)(t,nI.zu(nU),nF.x1(t=>0===t.length?nH.dv:nH.zN(t[0])))}function nP(t){let e;return t.length<2||null===(e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y})))?null:$(e,1/t.length)}function nV(t){return new Map((0,j.Fs)(t.changedTouches,Array.from,nF.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let nX=(0,B.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z}},actions:{updateTouches:(0,J.a)({touches:t=>{var e;let n,i,o,a,s,l,c,d,p,{context:{touches:f},event:h}=t;return"TOUCH.START"===h.type?(e=h.ev,o=nP(i=nZ(n=nY.concat(f.vecs,nV(e)))),s=2!==i.length?null:.5>Math.abs((a=O(i[0],i[1])).y/a.x),{...f,vecs:n,points:i,cursor:o,horizontal:s}):"TOUCH.MOVE"===h.type?function(t,e,n){var i,o,a,s;let l,c=nV(e),d=nW.mapWithIndex(t.vecs,(t,e)=>(0,j.Fs)(c.get(t),nH.k$,nH.AU(()=>e,nF.xW(e)))),p=nZ(d),f=nP(p),[h,x]=p;if(null===f||h===r||x===r)return{...t,vecs:d,points:p,cursor:f};let m=(i=t.dists,o=Math.sqrt((a=h,s=x,Math.pow(a.x-s.x,2)+Math.pow(a.y-s.y,2))),l=Math.pow((i.length>0?i[0]:o)-o,2),0===i.length||l>0?[o,...i]:i),u=function(t){let[e,n,i,o]=t;return e===r||n===r||i===r||o===r?null:e<n&&n<i&&i<o?-1:e>n&&n>i&&i>o?1:null}(m);return{vecs:d,points:p,cursor:f,dists:m,z:u,horizontal:t.horizontal}}(f,h.ev,0):"TOUCH.END"===h.type?(l=nV(h.ev),p=nP(d=nZ(c=nq.filterMapWithIndex(f.vecs,(t,e)=>l.has(t)?nH.dv:nH.zN(e)))),{vecs:c,points:d,cursor:p,dists:0===c.size?[]:f.dists,z:0===c.size?null:f.z,horizontal:f.horizontal}):f}}),raiseOp:(0,K.r)(t=>{let{event:e}=t;return"TOUCH.START"===e.type?{type:"STARTED"}:"TOUCH.MOVE"===e.type?{type:"MOVED"}:"TOUCH.END"===e.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,J.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),emitMulti:(0,tX.a)(t=>{let{context:{touches:e}}=t;return{type:"MULTI",touches:e}}),emitZoom:(0,tX.a)(t=>{let{context:{touches:e}}=t;return{type:"ZOOM",touches:e}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),n_=(0,K.c)(nX),nG=!1;function nB(t){n_.send({type:"TOUCH.START",ev:t})}function nJ(t){n_.send({type:"TOUCH.MOVE",ev:t})}function nK(t){n_.send({type:"TOUCH.END",ev:t})}function nQ(){n_.send({type:"CANCEL"})}function n0(t){eD||e$({type:"SEARCH",pos:{x:t.pageX,y:t.pageY}})}function n1(t){let e;null!==t&&(e=t,te(tn.eventTick,e))}function n2(t){return(0,p.jsxs)("div",{id:"viewer",className:"container",onTouchStart:nB,onTouchMove:nJ,onTouchEnd:nK,onClick:n0,onContextMenu:nR,onScroll:n1,onAnimationEnd:t=>{var e;(e={type:"ANIMATION.END",ev:t}).ev.stopPropagation(),e$(e),tt(ti.animationEnd)},children:[t.children,(0,p.jsx)(n5,{})]})}function n5(){let t=`
.container {
  ${tO}
  ${tC}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{children:t}),(0,p.jsx)(n3,{}),(0,p.jsx)(n4,{}),(0,p.jsx)(n6,{})]})}function n3(){let t=tj(t=>t.layout.content),e=`
.content {
  ${tO}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,p.jsx)("style",{children:e})}function n4(){let t=tj(t=>t.animation);return(0,p.jsx)("style",{children:t})}function n6(){let{style:t}=t1();return null===t?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("style",{children:t})}function n7(){return null!==document.querySelector(".container")}n_.on("MULTI",t=>{let{touches:e}=t;2===e.vecs.size?(nG=!0,tt(eO.multiStart)):(tt(eO.multiEnd),nG=!1)}),n_.on("ZOOM",t=>{let e,{touches:n}=t,i=n.cursor,o=n.z;null!==i&&null!==o&&(e={z:o>0?1:-1,p:i},te(eO.zoom,e))});var n9=n(751);async function n8(t){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){n(t)},{enableHighAccuracy:!0,timeout:t,maximumAge:0})})}let it=(0,B.mj)({types:{events:{},emitted:{}},actors:{api:(0,n9.Sx)(()=>n8(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,J.a)({position:t=>{let{event:e}=t;return e.output}}),(0,tX.a)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,J.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),ie=(0,K.c)(it),ii=(0,B.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tX.a)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tX.a)(t=>{let{event:e}=t;return e}),target:"Done"}}},Done:{always:"Idle"}}}),io=(0,K.c)(ii);function ir(t){io.send(t)}io.on("SEARCH",t=>{let{req:{psvg:e}}=t,n=c.mapCoord.matrix.inverse().transformPoint(e),i=tJ.get();ia.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:i}})}),io.on("SEARCH.DONE",t=>{let e,{res:n}=t;return e=n,te(el.end,e)});let ia=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function is(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}ia.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":ir({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let i;n=e.res,null===(i=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),ir({type:"SEARCH.DONE",res:null})):ir({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:i}});break;case"SEARCH.ERROR":console.log("search error!",e.error),ir({type:"SEARCH.DONE",res:null})}},ia.onerror=t=>{console.error("search error",t)},ia.onmessageerror=t=>{console.error("search messageerror",t)};let il=(0,B.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:t=>{let{event:{key:e}}=t;return"r"===e},shouldRecenter:t=>{let{event:{key:e}}=t;return"c"===e},shouldRotate:t=>{let{event:{key:e}}=t;return"t"===e},shouldZoom:t=>{let{event:{key:e}}=t;return 0!==is(e)},shouldFloorLevelUp:t=>{let{event:{key:e}}=t;return"u"===e},shouldFloorLevelDown:t=>{let{event:{key:e}}=t;return"d"===e}},actions:{reset:(0,tX.a)({type:"RESET"}),recenter:(0,tX.a)({type:"RECENTER"}),rotate:(0,tX.a)({type:"ROTATE"}),zoom:(0,tX.a)((t,e)=>{let{z:n}=e;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tX.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tX.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,J.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"===e||n,alt:"Alt"===e||i,control:"Control"===e||o}})(e.mod,n.key)}}),handleUp:(0,J.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"!==e&&n,alt:"Alt"!==e&&i,control:"Control"!==e&&o}})(e.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:t=>{let{event:{key:e}}=t;return{z:is(e)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),ic=(0,K.c)(il);ic.on("RESET",eb),ic.on("RECENTER",eE),ic.on("ROTATE",eN),ic.on("ZOOM.IN",ek),ic.on("ZOOM.OUT",ej),ic.on("FLOOR.LEVEL.UP",()=>tt(tV.levelUp)),ic.on("FLOOR.LEVEL.DOWN",()=>tt(tV.levelDown));let id=(0,B.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:M,next:M,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,J.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,K.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:t=>{let{context:e}=t;return console.log("resize: ignoring height-only change",e)},target:"Idle"},{guard:t=>{let{context:e}=t;return!T(e.prev,e.next)},actions:[(0,J.a)({waited:0}),(0,tX.a)(t=>{var e,n,i,o;let r,a,{context:s}=t;return{type:"LAYOUT",layout:(e=c.fontSize,n=s.next,r=C((o={config:i=function(t,e,n,i){var o;let r,a,s,l,{outer:c,scale:d}=(o=i??n,r=e.width/e.height,l=(s=r>(a=o.width/o.height))?tc(e,a):td(e,a),{outer:l,inner:s?tc(o,r):td(o,r),scale:s?o.height/e.height:o.width/e.width,rO:r,rI:a,v:s});return{fontSize:t,container:e,outer:c,inner:i??n,svgScale:d}}(e,n,c.origViewBox,c.origBoundingBox),...ts(i)}).scroll),a=o.container.width/o.container.height,th(o,a<1?1/a:1,a<1?1:+a,r)),force:!s.first}}),(0,J.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,J.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,K.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:t=>{let{context:{next:e}}=t;return T(e,tw.get().container)},actions:(0,J.a)({prev:t=>{let{context:{next:e}}=t;return e}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),ip=(0,K.c)(id);ip.on("LAYOUT",t=>{let e;return e=t,te(ti.resize,e)}),window.addEventListener("resize",()=>{ip.send({type:"RESIZE"})});let ih=(0,B.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,J.a)({ticked:!1}),set:(0,J.a)({ticked:!0}),expire:(0,tX.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ix=(0,B.mj)({types:{},actions:{getScroll:(0,J.a)({scroll:()=>(function(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),D(e,n,i,o)}return null})()}),syncScroll:(t,e)=>{let{pos:n}=e;return tu(n)}},actors:{syncScrollLogic:(0,n9.Sx)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!tu(e))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,tX.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,J.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,tX.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,J.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),im=(0,K.c)(ix,{systemId:"system-scroll1"});function iu(t){im.send(t)}im.on("SCROLL.GET.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.getDone,e)}),im.on("SCROLL.SYNCSYNC.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.syncSyncDone,e)});let iy=(a=()=>tt(tn.eventExpire),i=ih.provide({delays:{DURATION:500}}),(o=(0,K.c)(i)).on("EXPIRE",a),o.start(),{tick:function(){o.send({type:"TICK"})}}),ig=(0,G.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function iw(t){var e;t.getMapNames&&(e=t.getMapNames({data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig}),ig.trigger.set({names:e}))}async function iv(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let iS=`
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
  ${tO}
  ${tC}
  ${tM}
  ${tT}
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

${k}
`,ik=function(){var t;let e=(null==(t=c.cartoConfig)?void 0:t.backgroundColor)??c.backgroundColor??"darkgray",n={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n2,{...n,children:c.renderMap(n)}),(0,p.jsx)(nM,{}),(0,p.jsxs)("style",{children:[iS,`body { background-color: ${e}; }`]})]})};function ij(t){let{origViewBox:e,url:n}=t;return(0,p.jsx)("image",{href:n,x:e.x,y:e.y,width:e.width,height:e.height})}function iN(t){let{origViewBox:e,url:n,labels:i}=t;return void 0===i?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("svg",{href:n,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:I(e),children:i.map((t,e)=>(0,p.jsxs)("text",{...iO(t.attrs),children:["id"in t.attrs&&"style"in t.attrs&&(0,p.jsx)("style",{children:`#${t.attrs.id} { ${t.attrs.style}; }`}),t.children&&t.children.map((t,e)=>(0,p.jsx)("tspan",{...iO(t.attrs),children:t.text??""},e))]},e))})}let ib=/^[{].*$/,iE=/^style$/;function iO(t){return Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return!e.match(ib)&&!e.match(iE)}).map(t=>{var e;let[n,i]=t;return[!(e=n).match(/^.*-.*$/)||e.match(/^(aria|data)-.*$/)?e:e.split("-").map((t,e)=>{var n;let i;return 0===e?t:(i=(n=t).match(/^(.)(.*)$/))?`${i[1].toUpperCase()}${i[2]}`:n}).join(""),i]}))}var iz=JSON.parse('{"4F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"64 金属/船舶工学 566.6←550","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text94","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"119.25086","y":"183.27722","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan94","x":"119.25086","y":"183.27722"},"text":"64 金属/船舶工学 566.6←550"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"66 ペット/園芸 645.6←616","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text103","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.24918","y":"165.95625","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan103","x":"122.24918","y":"165.95625"},"text":"66 ペット/園芸 645.6←616"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"66 農業 610→615.9","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text106","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.25294","y":"167.45586","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan106","x":"122.25294","y":"167.45586"},"text":"66 農業 610→615.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"65 金属/化学工学 566.7→587.9","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text100","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.32086","y":"176.09792","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan100","x":"122.32086","y":"176.09792"},"text":"65 金属/化学工学 566.7→587.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"65 製造工学 609.0←588","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text97","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.31966","y":"174.59801","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan97","x":"122.31966","y":"174.59801"},"text":"65 製造工学 609.0←588"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"64 情報・電子工学 548.3→549.9","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text91","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"119.25285","y":"184.77666","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan91","x":"119.25285","y":"184.77666"},"text":"64 情報・電子工学 548.3→549.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"63 通信・電気工学 548.2←541","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text88","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.39292","y":"191.91672","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan88","x":"122.39292","y":"191.91672"},"text":"63 通信・電気工学 548.2←541"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"63 機械・電気工学 537→540.9","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text85","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.90199","y":"193.42735","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan85","x":"122.90199","y":"193.42735"},"text":"63 機械・電気工学 537→540.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"62 機械工学/建築 536.8←527","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text82","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.32188","y":"200.57707","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan82","x":"122.32188","y":"200.57707"},"text":"62 機械工学/建築 536.8←527"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"62 建築 523→526.9","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text79","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.32124","y":"202.07896","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan79","x":"122.32124","y":"202.07896"},"text":"62 建築 523→526.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"61 建築/環境工学 522.9←519.2","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text73","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.32455","y":"209.24049","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan73","x":"122.32455","y":"209.24049"},"text":"61 建築/環境工学 522.9←519.2"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"61 都市・環境工学 518→519.1","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text76","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.79375px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","x":"122.39313","y":"210.73753","transform":"rotate(-30)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan76","x":"122.39313","y":"210.73753"},"text":"61 都市・環境工学 518→519.1"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"60 技術工学 502→509.6","x":"122.31764","y":"219.52313","font-size":"2px","text-anchor":"middle","id":"text284","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan284"},"text":"60 技術工学 502→509.6"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"60 建設・土木工学 517.9←509.8","x":"122.32002","y":"218.02283","font-size":"2px","text-anchor":"middle","id":"text283","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan283"},"text":"60 建設・土木工学 517.9←509.8"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"59 技術工学/薬学 501.9←499","x":"122.31638","y":"226.56117","font-size":"2px","text-anchor":"middle","id":"text282","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan282"},"text":"59 技術工学/薬学 501.9←499"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"59 医学 498.1→498.9","x":"122.31658","y":"228.06116","font-size":"2px","text-anchor":"middle","id":"text281","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan281"},"text":"59 医学 498.1→498.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"58 医学 498.1←495.6","x":"119.23515","y":"235.25621","font-size":"2px","text-anchor":"middle","id":"text280","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan280"},"text":"58 医学 498.1←495.6"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"58 医学 494.4→495.5","x":"119.24066","y":"236.75273","font-size":"2px","text-anchor":"middle","id":"text279","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan279"},"text":"58 医学 494.4→495.5"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"57 医学 494.3←493.71","x":"122.38877","y":"243.87997","font-size":"2px","text-anchor":"middle","id":"text278","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan278"},"text":"57 医学 494.3←493.71"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"57 医学 493→493.7","x":"122.31737","y":"245.37997","font-size":"2px","text-anchor":"middle","id":"text277","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan277"},"text":"57 医学 493→493.7"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"56 医学 492.9←491.5","x":"122.31825","y":"252.52507","font-size":"2px","text-anchor":"middle","id":"text276","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan276"},"text":"56 医学 492.9←491.5"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"56 動物学 490→491.4","x":"122.30109","y":"254.02727","font-size":"2px","text-anchor":"middle","id":"text275","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan275"},"text":"56 動物学 490→491.4"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"55 動物学 489.9←481.3","x":"122.31892","y":"261.20181","font-size":"2px","text-anchor":"middle","id":"text273","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan273"},"text":"55 動物学 489.9←481.3"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"55 生物学/植物学 467.5→481.2","x":"122.32005","y":"262.70279","font-size":"2px","text-anchor":"middle","id":"text274","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan274"},"text":"55 生物学/植物学 467.5→481.2"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"54 生物学 467.4←460","x":"122.31434","y":"269.86334","font-size":"2px","text-anchor":"middle","id":"text272","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan272"},"text":"54 生物学 467.4←460"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"54 天文学/地学 443→459.9","x":"122.31654","y":"271.36295","font-size":"2px","text-anchor":"middle","id":"text271","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan271"},"text":"54 天文学/地学 443→459.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"53 天文学/化学 442.9←429","x":"122.31634","y":"278.52249","font-size":"2px","text-anchor":"middle","id":"text269","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan269"},"text":"53 天文学/化学 442.9←429"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"53 数学/物理 417.1→428.9","x":"122.31654","y":"280.02249","font-size":"2px","text-anchor":"middle","id":"text270","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan270"},"text":"53 数学/物理 417.1→428.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"52 数学 417.1←413","x":"119.25937","y":"287.18619","font-size":"2px","text-anchor":"middle","id":"text267","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan267"},"text":"52 数学 417.1←413"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"52 自然科学一般/数学407→412.9","x":"119.2568","y":"288.68591","font-size":"2px","text-anchor":"middle","id":"text268","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan268"},"text":"52 自然科学一般/数学407→412.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"51 自然科学一般 ＪＩＳ規格 407←400","x":"122.31435","y":"295.84335","font-size":"2px","text-anchor":"middle","id":"text266","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan266"},"text":"51 自然科学一般 ＪＩＳ規格 407←400"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"51 ＪＩＳハンドブック ＪＩＳ規格","x":"122.27268","y":"297.37006","font-size":"2px","text-anchor":"middle","id":"text265","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan265"},"text":"51 ＪＩＳハンドブック ＪＩＳ規格"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"50 医療・健康情報コーナー 999←000","x":"122.23006","y":"304.51254","font-size":"2px","text-anchor":"middle","id":"text264","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan264"},"text":"50 医療・健康情報コーナー 999←000"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"79 653.7←645.6 獣医学/ペット","x":"93.786751","y":"165.97141","font-size":"2px","text-anchor":"middle","id":"text316","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan316"},"text":"79 653.7←645.6 獣医学/ペット"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"79 653.8→669.9 水産業/漁業","x":"93.716164","y":"167.48715","font-size":"2px","text-anchor":"middle","id":"text317","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan317"},"text":"79 653.8→669.9 水産業/漁業"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"78 雑誌 №301→№360","x":"93.751984","y":"176.12077","font-size":"2px","text-anchor":"middle","id":"text315","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan315"},"text":"78 雑誌 №301→№360"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"77 雑誌 №300←№226","x":"89.250381","y":"183.28094","font-size":"2px","text-anchor":"middle","id":"text314","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan314"},"text":"77 雑誌 №300←№226"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"77 雑誌 №151→№225","x":"89.255981","y":"184.77763","font-size":"2px","text-anchor":"middle","id":"text313","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan313"},"text":"77 雑誌 №151→№225"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"76 雑誌 №150←№76","x":"89.250374","y":"191.94151","font-size":"2px","text-anchor":"middle","id":"text311","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan311"},"text":"76 雑誌 №150←№76"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"76 雑誌 № 1→№50","x":"89.252167","y":"193.44153","font-size":"2px","text-anchor":"middle","id":"text312","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan312"},"text":"76 雑誌 № 1→№50"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"70 参考書 513.1←507.7","x":"92.254829","y":"261.22018","font-size":"2px","text-anchor":"middle","id":"text304","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan304"},"text":"70 参考書 513.1←507.7"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"70 参考書 500→507.6","x":"92.250389","y":"262.72403","font-size":"2px","text-anchor":"middle","id":"text303","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan303"},"text":"70 参考書 500→507.6"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"69 参考書 499.9←498.5","x":"89.255119","y":"269.87952","font-size":"2px","text-anchor":"middle","id":"text302","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan302"},"text":"69 参考書 499.9←498.5"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"69 参考書 490.9→498.4","x":"89.237953","y":"271.38171","font-size":"2px","text-anchor":"middle","id":"text301","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan301"},"text":"69 参考書 490.9→498.4"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"68 参考書 490.8←480.7","x":"89.254051","y":"278.54007","font-size":"2px","text-anchor":"middle","id":"text300","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan300"},"text":"68 参考書 490.8←480.7"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"68 参考書 460→480.6","x":"89.249809","y":"280.04236","font-size":"2px","text-anchor":"middle","id":"text299","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan299"},"text":"68 参考書 460→480.6"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"67 参考書 459.9←425","x":"89.239037","y":"287.19028","font-size":"2px","text-anchor":"middle","id":"text298","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan298"},"text":"67 参考書 459.9←425"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"67 参考書 007，007.6，400→424.9","x":"89.237328","y":"288.69318","font-size":"2px","text-anchor":"middle","id":"text297","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan297"},"text":"67 参考書 007，007.6，400→424.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"71 参考書 539.9←524.2","x":"89.257484","y":"252.55045","font-size":"2px","text-anchor":"middle","id":"text306","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan306"},"text":"71 参考書 539.9←524.2"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"71 参考書 513.8→524.0","x":"89.252182","y":"254.04974","font-size":"2px","text-anchor":"middle","id":"text305","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan305"},"text":"71 参考書 513.8→524.0"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"72 参考書 585.9←566","x":"89.250366","y":"243.90366","font-size":"2px","text-anchor":"middle","id":"text308","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan308"},"text":"72 参考書 585.9←566"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"72 参考書 540→565.9","x":"89.254166","y":"245.40324","font-size":"2px","text-anchor":"middle","id":"text307","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan307"},"text":"72 参考書 540→565.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"73 参考書 669.9←616","x":"89.250473","y":"235.24327","font-size":"2px","text-anchor":"middle","id":"text310","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan310"},"text":"73 参考書 669.9←616"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"73 参考書 586→615.9","x":"89.254089","y":"236.74251","font-size":"2px","text-anchor":"middle","id":"text309","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan309"},"text":"73 参考書 586→615.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"73 参考書 586→615.9","x":"89.254089","y":"236.74251","font-size":"2px","text-anchor":"middle","id":"text133","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan133"},"text":"73 参考書 586→615.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"73 参考書 586→615.9","x":"89.254089","y":"236.74251","font-size":"2px","text-anchor":"middle","id":"text134","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan134"},"text":"73 参考書 586→615.9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"73 参考書 586→615.9","x":"89.254089","y":"236.74251","font-size":"2px","text-anchor":"middle","id":"text135","style":"font-style:normal;font-variant:normal;font-weight:300;font-stretch:normal;font-size:0.8px;font-family:\'Noto Sans\';-inkscape-font-specification:\'Noto Sans Light\';display:inline","transform":"rotate(-30)"},"children":[{"attrs":{"id":"tspan135"},"text":"73 参考書 586→615.9"}]}]}');let iL=["4F"].map(t=>({name:t,href:n(303)(`./floor-${t}.svg`),labels:(null==iz?void 0:iz[t])??void 0})),iA=Object.values(JSON.parse('{"4F":{"A4F-Facilities-1":{"x":287.628,"y":243.875},"A4F-Facilities-2":{"x":258.081,"y":219.5},"A4F-Facilities-3":{"x":273.884,"y":231.5},"A4F-Facilities-4":{"x":290.875,"y":215},"A4F-Facilities-5":{"x":281.409,"y":210.625},"A4F-Facilities-6":{"x":297.37,"y":227},"A4F-Facilities-7":{"x":258.081,"y":234.5},"A4F-Facilities-8":{"x":271.215,"y":220.9},"A4F-Facilities-None":{"x":225.923,"y":287},"A4F-Shops-1-1-1":{"x":188.711,"y":82.35},"A4F-Shops-1-1-2":{"x":189.461,"y":83.649},"A4F-Shops-1-2-1":{"x":193.09,"y":89.8},"A4F-Shops-1-2-2":{"x":193.841,"y":91.099},"A4F-Shops-1-3-1":{"x":194.773,"y":98.85},"A4F-Shops-1-3-2":{"x":195.523,"y":100.149},"A4F-Shops-1-4-1":{"x":201.751,"y":104.8},"A4F-Shops-1-4-2":{"x":202.501,"y":106.099},"A4F-Shops-1-5-1":{"x":206.081,"y":112.3},"A4F-Shops-1-5-2":{"x":206.831,"y":113.599},"A4F-Shops-1-6-1":{"x":210.412,"y":119.801},"A4F-Shops-1-6-2":{"x":211.162,"y":121.099},"A4F-Shops-1-7-1":{"x":214.802,"y":127.405},"A4F-Shops-1-7-2":{"x":215.552,"y":128.704},"A4F-Shops-1-8-1":{"x":219.072,"y":134.801},"A4F-Shops-1-8-2":{"x":219.822,"y":136.1},"A4F-Shops-1-9-1":{"x":220.754,"y":143.869},"A4F-Shops-1-9-2":{"x":221.504,"y":145.168},"A4F-Shops-1-10-1":{"x":227.732,"y":149.801},"A4F-Shops-1-10-2":{"x":228.482,"y":151.1},"A4F-Shops-1-11-1":{"x":232.055,"y":157.289},"A4F-Shops-1-11-2":{"x":232.805,"y":158.587},"A4F-Shops-1-12-1":{"x":236.392,"y":164.8},"A4F-Shops-1-12-2":{"x":237.142,"y":166.099},"A4F-Shops-1-13-1":{"x":240.723,"y":172.301},"A4F-Shops-1-13-2":{"x":241.473,"y":173.6},"A4F-Shops-1-14-1":{"x":245.052,"y":179.8},"A4F-Shops-1-14-2":{"x":245.803,"y":181.099},"A4F-Shops-1-15-1":{"x":246.735,"y":188.833},"A4F-Shops-1-15-2":{"x":247.485,"y":190.132},"A4F-Shops-1-16-1":{"x":253.713,"y":194.8},"A4F-Shops-1-16-2":{"x":254.463,"y":196.099},"A4F-Shops-1-17-1":{"x":257.974,"y":202.35},"A4F-Shops-1-17-2":{"x":258.724,"y":203.649},"A4F-Shops-2-1-1":{"x":164.03,"y":96.6},"A4F-Shops-2-1-2":{"x":164.779,"y":97.899},"A4F-Shops-2-2-1":{"x":168.359,"y":104.1},"A4F-Shops-2-2-2":{"x":169.109,"y":105.399},"A4F-Shops-2-3-1":{"x":168.792,"y":113.85},"A4F-Shops-2-3-2":{"x":169.542,"y":115.149},"A4F-Shops-2-4-1":{"x":173.123,"y":121.35},"A4F-Shops-2-4-2":{"x":173.873,"y":122.649},"A4F-Shops-2-5-1":{"x":177.453,"y":128.85},"A4F-Shops-2-5-2":{"x":178.203,"y":130.149},"A4F-Shops-2-6-1":{"x":184.381,"y":134.85},"A4F-Shops-2-6-2":{"x":185.131,"y":136.149},"A4F-Shops-2-7-1":{"x":194.774,"y":158.85},"A4F-Shops-2-7-2":{"x":195.523,"y":160.149},"A4F-Shops-2-8-1":{"x":199.104,"y":166.351},"A4F-Shops-2-8-2":{"x":199.854,"y":167.65},"A4F-Shops-2-9-1":{"x":203.427,"y":173.838},"A4F-Shops-2-9-2":{"x":204.177,"y":175.137},"A4F-Shops-2-10-1":{"x":210.361,"y":179.849},"A4F-Shops-2-10-2":{"x":211.112,"y":181.15},"A4F-Shops-2-11-1":{"x":212.094,"y":188.851},"A4F-Shops-2-11-2":{"x":212.844,"y":190.15},"A4F-Shops-2-12-1":{"x":216.424,"y":196.35},"A4F-Shops-2-12-2":{"x":217.174,"y":197.649},"A4F-Shops-2-13-1":{"x":220.736,"y":203.85},"A4F-Shops-2-13-2":{"x":221.486,"y":205.149}}}')).concat().flatMap((t,e)=>Object.entries(t).map(t=>{let[n,i]=t;return[n,{coord:i,fidx:e}]}));function i$(t){let[e,n]=t;return n.map(t=>[e,t])}function iD(t){return t.reduce(function(t,e){let[n,i]=e,o=new Set([...t.get(n)??new Set,i]);return new Map([...t,[n,o]])},new Map)}let iM=Object.values({"4F":{}}).flatMap(function(t){return Object.entries(t)});iD(Array.from(iM).flatMap(i$));let iT=iD(Array.from(iM).flatMap(i$).map(t=>{let[e,n]=t;return[n,e]}));var iC=JSON.parse('{"x":45.55772,"y":63.267948,"width":418.69299,"height":288.46408}');!function(t){let e;t_.init.add(t=>{if(t.floorsConfig){let e=t.floorsConfig.floors.length,n=t.floorsConfig.initialFidx;tQ.send({type:"INIT",nfloors:e,fidx:n}),t0.postMessage({type:"INIT",cfg:t.floorsConfig})}}),tV.select.add(t=>tQ.send({type:"SELECT",fidx:t})),tV.levelUp.add(()=>tQ.send({type:"LEVEL.UP"})),tV.levelDown.add(()=>tQ.send({type:"LEVEL.DOWN"})),tV.selectDone.add(t=>tQ.send({type:"SELECT.DONE",fidx:t})),eS.fullscreen.add(iv),t_.init.add(iw),eS.position.add(()=>{var t;return t={type:"GET"},void ie.send(t)}),tn.eventTick.add(tg),tn.eventTick.add(iy.tick),tn.get.add(()=>iu({type:"GET"})),tn.sync.add(t=>iu({type:"SYNC",pos:t})),tn.syncSync.add(t=>iu({type:"SYNCSYNC",pos:t})),t_.init.add(t=>{if(t.getSearchEntries){let e=t.getSearchEntries(t);ia.postMessage({type:"INIT",entries:e})}}),el.start.add(function(t){io.send({type:"SEARCH",req:t})}),ti.layout.add(function(t){let{layout:e,force:n}=t;tk({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>tN())}),ti.zoomStart.add(function(t){tk({type:"STYLE.ZOOM",...t})}),ti.zoomEnd.add(function(t){tk({type:"STYLE.ZOOM",zoom:t.zoom})}),ti.animation.add(function(t){tk({type:"STYLE.ANIMATION",animation:t})}),ti.animationEnd.add(function(){tk({type:"STYLE.ANIMATION.END"})}),ti.mode.add(function(t){tk({type:"STYLE.MODE",mode:t})}),tn.eventExpire.add(tN),eS.reset.add(nQ),eS.fullscreen.add(nQ),eS.position.add(nQ),eS.recenter.add(nQ),eS.zoomOut.add(nQ),eS.zoomIn.add(nQ),el.endDone.add(t=>eh.send({type:"DETAIL",...t})),ec.open.add(()=>{let t;return t=!0,te(ec.openDone,t)}),ec.openDone.add(t=>eh.send({type:t?"OPEN":"CANCEL"})),ec.close.add(()=>eh.send({type:"CANCEL"})),ec.closeDone.add(()=>{requestAnimationFrame(()=>{var t,e;null==(e=t3.get("detail"))||null==(t=e.querySelector(".detail"))||t.scroll(0,0)})}),tV.lock.add(t=>e$({type:"SWITCH",fidx:t})),tV.selectDone.add(()=>e$({type:"SWITCH.DONE"})),el.end.add(t=>eA.send({type:"SEARCH.END",res:t})),ec.open.add(()=>ez.set("locked")),ec.closeDone.add(()=>e$({type:"SEARCH.DONE"})),ec.closeDone.add(()=>ez.set("panning")),tn.getDone.add(t=>{null!==t&&e$({type:"SCROLL.GET.DONE",scroll:t})}),tn.syncSyncDone.add(t=>{null!==t&&e$({type:"SCROLL.SYNCSYNC.DONE",scroll:t})}),ti.resize.add(t=>{let{layout:e,force:n}=t;return e$({type:"RESIZE",layout:e,force:n})}),ti.mode.add(eT),ti.zoomStart.add(()=>{eM=!0}),ti.zoomEnd.add(()=>{eM=!1}),eS.reset.add(()=>e$({type:"HOME"})),eS.recenter.add(()=>e$({type:"RECENTER"})),eS.rotate.add(()=>e$({type:"ROTATE"})),eS.zoomOut.add(()=>e$({type:"ZOOM",z:-1,p:null})),eS.zoomIn.add(()=>e$({type:"ZOOM",z:1,p:null})),eO.multiStart.add(()=>tt(tn.get)),eO.multiStart.add(()=>ez.set("touching")),eO.multiEnd.add(()=>ez.set("panning")),eO.zoom.add(t=>{let{z:e,p:n}=t;return e$({type:"ZOOM",z:e>0?1:-1,p:n})}),t_.rendered.add(()=>e$({type:"RENDERED"})),tQ.start(),ic.start(),ie.start(),ip.start(),im.start(),io.start(),tS.start(),n_.start(),eh.start(),eA.start();let n=(d({origViewBox:e={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0},isContainerRendered:n7,isUiRendered:nC,...t}),d({...c}),{...c,origViewBox:e,...t});tG(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.1.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let i=document.getElementById(n.root);if(null===i)throw Error("#root not found!");i.onwheel=function(t){var e;let n=i.children[0];t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||eM)&&t.preventDefault()},i.oncontextmenu=function(t){t.preventDefault()},i.ontouchmove=function(t){if(eM){var e;if(t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui")return;t.preventDefault()}else if(!nG)return;t.preventDefault()},document.title=n.title,document.body.onkeydown=t=>{var e;return e={type:"DOWN",key:t.key},void ic.send(e)},document.body.onkeyup=t=>{var e;return e={type:"UP",key:t.key},void ic.send(e)},(0,t2.createRoot)(i).render((0,p.jsx)(s.StrictMode,{children:(0,p.jsx)(ik,{})}));let o=document.getElementById("style-root");if(null===o)throw Error("#style-root not found!");(0,t2.createRoot)(o).render((0,p.jsx)(s.StrictMode,{children:(0,p.jsx)(t5,{})}))}({renderMap:function(t){let{floors:e,data:{origViewBox:n}}=t,{viewBox:i,width:o,height:r}=function(){let{scroll:t,svg:e}=tj(t=>t.layout);return{viewBox:I(e),width:V(t.width),height:V(t.height)}}(),{fidxToOnAnimationEnd:a,urls:l}=t1();return void 0===e?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"content",children:(0,p.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:i,width:o,height:r,children:e.floors.map((t,e)=>(0,p.jsx)(s.Fragment,{children:(0,p.jsxs)("g",{className:`floor fidx-${e}`,onAnimationEnd:a(e),children:[(0,p.jsx)(ij,{origViewBox:n,idx:e,url:l.get(e),onAnimationEnd:a(e),labels:t.labels}),(0,p.jsx)(iN,{origViewBox:n,idx:e,url:l.get(e),onAnimationEnd:a(e),labels:t.labels})]})},e))})})},isMapRendered:function(){return!0},...{root:"root",title:"Yokohama City Central Library",backgroundColor:"gray",origViewBox:JSON.parse('{"x":25.0,"y":50.0,"width":450.0,"height":325.0}'),origBoundingBox:iC,zoomFactor:2,floorsConfig:{floors:iL,initialFidx:0},...{getSearchEntries:function(){return iA.map(t=>{let[e,n]=t;return{address:e,pos:n}})},getSearchInfo:function(t){let e=iT.get(t.address);return void 0===e||e.size<1?null:{title:Array.from(e)[0],x:{tag:"unknown"}}},renderInfo:function(t){return(0,p.jsx)("p",{children:t.info.title})}}}})}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return o[t](n,n.exports,a),n.exports}a.m=o,a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.u=t=>"static/js/async/"+t+"."+({147:"c217208a",968:"25712e22"})[t]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],a.O=(e,n,i,o)=>{if(n){o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[n,i,o];return}for(var s=1/0,r=0;r<t.length;r++){for(var[n,i,o]=t[r],l=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every(t=>a.O[t](n[c]))?n.splice(c--,1):(l=!1,o<s&&(s=o));if(l){t.splice(r--,1);var d=i();void 0!==d&&(e=d)}}return e},a.p="/demos/YokohamaCityCentralLibrary/",a.b=document.baseURI||self.location.href,e={410:0},a.O.j=t=>0===e[t],n=(t,n)=>{var i,o,[r,s,l]=n,c=0;if(r.some(t=>0!==e[t])){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var d=l(a)}for(t&&t(n);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},(i=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var s=a.O(void 0,["783","491","357"],()=>a(898));s=a.O(s)})();