(()=>{var t,e,n,i,o={303(t,e,n){var i={"./floor-1F.svg":"901","./floor-2F.svg":"440","./floor-3F.svg":"71","./floor-4F.svg":"514","./floor-5F.svg":"993"};function o(t){return n(r(t))}function r(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id=303},901(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-1F.74bbc0dd.svg"},440(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-2F.7517a183.svg"},71(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-3F.8b612a1a.svg"},514(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-4F.45b82693.svg"},993(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-5F.85a2c3e3.svg"},898(t,e,n){"use strict";let i,o,r;var a,s=n(797);let l={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let d={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:l,internals:l,origin:l,measures:l,viewbox:l,points:l,lines:l,multilinestrings:l,multipolygons:l},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,s.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(t){return(0,s.createElement)("p",{},t.info.title)}};function c(t){d={...d,...t}}var p=n(617);n(58);var x=n(815),h=n(622);let u=x.Ay$.union([x.Ay$.number(),x.Ay$.string()]),g=x.Ay$.array(u),f=x.Ay$.object({ids:g}),y=h.codec(h.string(),f,{decode:(t,e)=>{try{return JSON.parse(t)}catch(n){return n instanceof h.ZodError&&e.issues.push({code:"invalid_format",format:"json",input:t,message:n.message}),h.NEVER}},encode:t=>JSON.stringify(t)}),m=x.Ay$.union([x.Ay$.number(),x.Ay$.string()]),w=x.Ay$.set(m),S=x.Ay$.object({ids:w}),v=x.Ay$.codec(f,S,{decode:t=>({ids:new Set(t.ids)}),encode:t=>({ids:Array.from(t.ids)})});x.Ay$.pipe(y,v);let D=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var k=n(997);function b(t,e,n){let[i,o,r]=t,[a,s]=e;return i*a+o*s+r*n}function E(t,e,n){return[b(function(t){let[[e],[n],[i]]=t;return[e,n,i]}(t),e,n),b(function(t){let[[,e],[,n],[,i]]=t;return[e,n,i]}(t),e,n)]}function T(t,e){let n=t.x+e.x,i=t.y+e.y;return{...t,x:n,y:i}}function A(t,e){let n=t.x-e.x,i=t.y-e.y;return{...t,x:n,y:i}}var j=n(304);let O=n(853).I3(function(t,e){return j._k.compare(t.x,e.x)||j._k.compare(t.y,e.y)}),N={x:0,y:0};function z(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,i="number"==typeof e?e:e instanceof Array?e[1]:e.y,o=t.x*n,r=t.y*i;return{...t,x:o,y:r}}function F(t,e,n,i){return{x:t,y:e,width:n,height:i}}let M={x:0,y:0,width:1,height:1};function $(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function R(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function C(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function L(t,e){return{...t,x:e.x,y:e.y}}function I(t){return function(t){let{x:e,y:n,width:i,height:o}=t;return`${e} ${n} ${i} ${o}`}(function(t,e){let{x:n,y:i,width:o,height:r}=t;return{x:e(n),y:e(i),width:e(o),height:e(r)}}(t,function(t){return Math.round(100*t)/100}))}function U(t){let{x:e,y:n,width:i,height:o}=t;return{tl:{x:e,y:n},br:{x:e+i,y:n+o}}}function H(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function P(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function W(t){let[[e,n],[i,o]]=t;return{tl:{x:e,y:n},br:{x:i,y:o}}}function Y(t,e){return[E(t,function(t){let[e]=t;return e}(e),0),E(t,function(t){let[,e]=t;return e}(e),0),E(t,function(t){let[,,e]=t;return e}(e),1)]}function Z(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function q(t,e,n,i){var o,r;return o=function(t,e){let[n,i]=e;return[Z(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),Z([-n,-i])].reduce(Y)}("number"==typeof(r=e)?[r,r]:"x"in r?[r.x,r.y]:r,[n,i]),(0,k.Fs)(t,U,P,t=>(function(t,e){let[n,i]=t;return[e(n),e(i)]})(t,t=>E(o,t,1)),W,H)}function V(t){return Math.round(100*t)/100}function B(t){return Math.round(1e7*t)/1e7}var G=n(599),K=n(112),X=n(125),_=n(609),J=n(292);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function tt(t){t.forEach(t=>t())}function te(t,e){t.forEach(t=>t(e))}let tn={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ti={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function to(t){return void 0!==t&&"number"==typeof t}function tr(t,e,n,i,o,r){return new DOMMatrixReadOnly(t instanceof Array?t:to(t)&&to(e)&&to(n)&&to(i)&&to(o)&&to(r)?[t,e,n,i,o,r]:void 0)}let ta={container:M,scroll:M,content:tr(),svgOffset:{x:-0,y:-0},svgScale:1,svg:M};function ts(t){let{container:e,outer:n,svgScale:i,inner:o}=t,{x:r,y:a}=n;return{container:e,scroll:e,content:tr(),svgOffset:{x:-r,y:-a},svgScale:i,svg:o}}function tl(t){let{scroll:e,content:n,svgOffset:i,svgScale:o,svg:r}=t;return tr().translate(e.x,e.y).multiply(n).translate(-i.x,-i.y).scale(1/o,1/o).translate(-r.x,-r.y)}function td(t,e){let n=t.height,i=n*e;return F((t.width-i)/2,0,i,n)}function tc(t,e){let n=t.width,i=n/e;return F(0,(t.height-i)/2,n,i)}let tp={...ta,config:{fontSize:16,container:M,outer:M,inner:M,svgScale:1}};function tx(t,e){let n=R(t.scroll);return th(t,e,e,n)}function th(t,e,n,i){let o=tl(t).inverse().transformPoint(i),r=q(t.scroll,[e,n],i.x,i.y),a=z(t.svgOffset,[e,n]),s=q(t.svg,[e,n],o.x,o.y);return{...t,scroll:r,svgOffset:a,svg:s}}function tu(t,e){var n,i;let o=R({...t.scroll,x:0,y:0}),r=(n=o.x,i=o.y,tr().translate(n,i).rotate(e).translate(-n,-i)).multiply(t.content);return{...t,content:r}}function tg(t,e){let n=t.scroll,i=A(z(e,-1),n);return(0,k.Fs)(t,t=>({...t,scroll:C(t.scroll,i)}),t=>{let e,i,o,r,a,s,l;return e=L(t.scroll,n),i=t.content.inverse(),r=T(o=R(t.scroll),A(t.scroll,n)),a=i.transformPoint(o),s=z(A(i.transformPoint(r),a),-t.svgScale),l=C(t.svg,s),{...t,scroll:e,svg:l}})}function tf(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,i=e.scrollTop,o=e.scrollWidth,r=e.scrollHeight;if(null===n)return!1;let a=o-t.width,s=r-t.height;if(Math.abs(a)>1||Math.abs(s)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${r}] vs. request=[${t.width}, ${t.height}]`),!1;let l=Math.round(-t.x),d=Math.round(-t.y);if(l<0||d<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==l&&(e.scrollLeft=l),i!==d&&(e.scrollTop=d);let c=e.scrollLeft;if(Math.abs(c-l)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${c}`),!1;let p=e.scrollTop;return!(Math.abs(p-d)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${i} vs. real=${p}`),!1)}let ty={scroll:M,client:{width:0,height:0},timeStamp:0};function tm(t){let e=t.currentTarget;null!==e&&(ty={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})}let tw=(0,K.e)(tp),tS=(0,X.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,_.a)({zoom:(t,e)=>e.zoom}),updateRotate:(0,_.a)({}),updateSvgMatrix:(0,_.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return function(t){let{content:e,svgOffset:n,svgScale:i,svg:o}=t;return e.translate(-n.x,-n.y).scale(1/i,1/i).translate(-o.x,-o.y)}(e)}}),updateGeoMatrix:(0,_.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(d.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,_.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:i}=t,o=Math.max(n.width,n.height)/2*i,r=Math.round(Math.log10(o)),a=(e=o/Math.pow(10,r-1),Q.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:s}=a[0],l=s*Math.pow(10,r-1);return{svg:l,client:l/i}}(e)}}),updateScroll:(0,_.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x+o.width/2,y:i.y+o.height/2};return r.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x,y:i.y},s={x:i.x+o.width,y:i.y+o.height};return{start:r.transformPoint(a),end:r.transformPoint(s)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:tp,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:N,distanceRadius:{svg:0,client:0},geoRange:{start:N,end:N},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,_.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),t=>{let{event:e}=t;return tw.set(e.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,J.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:t=>{let{event:e}=t;return e}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}}},"STYLE.MODE":{actions:(0,_.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:(0,_.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,_.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,_.a)({animation:t=>{let{event:{animation:e}}=t;return null===e?"":function(t){let{matrix:e,origin:n}=t,i=tr();return`
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
`}(e)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,_.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,_.a)({animation:null,animating:!1}),target:"Idle"}}}}}),tv=(0,J.c)(tS,{systemId:"system-viewer1"});function tD(t){tv.send(t)}function tk(t){return(0,G.d4)(tv,e=>t(e.context))}function tb(){tD({type:"STYLE.SCROLL",currentScroll:ty})}function tE(){return tk(t=>t.layout.container)}function tT(){return tk(t=>t.distanceRadius)}let tA=`
position: absolute;
left: 0;
top: 0;
`,tj=`
position: absolute;
right: 0;
top: 0;
`,tO=`
position: absolute;
left: 0;
bottom: 0;
`,tN=`
position: absolute;
right: 0;
bottom: 0;
`,tz=`
margin: 0;
`,tF=`
padding: 0;
`,tM=`
${tz} ${tF}
`,t$=`
box-sizing: border-box;
`,tR=`
width: 100vw;
height: 100vh;
height: 100svh;
`,tC=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tL=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tI=`
-webkit-user-select: none;
user-select: none;
`,tU=`
touch-action: none;
`,tH=`
pointer-events: none;
`,tP=`
pointer-events: initial;
`,tW=`
background-color: rgba(255, 255, 255, 0.5);
`,tY=`
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
`,tV={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tB=n(238);let tG={init:new Set,rendered:new Set},tK=function(t){te(tG.init,t)},tX=function(){tt(tG.rendered)},t_=(0,K.e)(0),tJ=(0,X.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,_.a)({blobs:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.blobs.set(n,i))},urls:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.urls.set(n,URL.createObjectURL(i)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,_.a)({nfloors:t=>{let{event:e}=t;return e.nfloors},fidx:t=>{let{event:e}=t;return e.fidx}}),t=>{let{event:e}=t;return t_.set(e.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:[(0,_.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),t=>{let{event:e}=t;return t_.set(e.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:t=>{let{context:e}=t;return e.fidx===e.nfloors-1}},{actions:(0,tB.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx+1}})}],"LEVEL.DOWN":[{guard:t=>{let{context:e}=t;return 0===e.fidx}},{actions:(0,tB.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,_.a)({prevFidx:null}),target:"Idle"}}}}}),tQ=(0,J.c)(tJ);tQ.on("LOCK",t=>{let e,{fidx:n}=t;return e=n,te(tV.lock,e)});let t0=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function t1(){var t;let{fidx:e,prevFidx:n,urls:i}=(t=t=>{let{fidx:e,prevFidx:n,urls:i}=t;return{fidx:e,prevFidx:n,urls:i}},(0,G.d4)(tQ,e=>t(e.context))),o=(0,s.useMemo)(()=>(function(t,e,n){let i=d.floorsConfig;if(void 0===i)return null;let o=i.floors.map((i,o)=>{var r,a,s,l,d,c,p;return r=t,a=e,s=n,(l=o)!=r||s?l===a?(d=l,`
.fidx-${d} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(c=l,`
.fidx-${c} {
  visibility: hidden;
}
  `):(p=l,`
.fidx-${p} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${o}
${tq}
`})(e,n,void 0===i.get(e)),[e,n,i]),r=(0,s.useCallback)(t=>()=>{let n;return t!==e?void 0:(n=t,te(tV.selectDone,n))},[e]),a=(0,s.useCallback)(t=>()=>{let i;return null!==n||t===e?void 0:(i=t,te(tV.lock,i))},[e,n]);return{fidx:e,prevFidx:n,style:o,fidxToOnAnimationEnd:r,fidxToOnClick:a,urls:i}}t0.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:t,blob:n}=e;tQ.send({type:"IMAGE",fidx:t,blob:n})}}},t0.onerror=t=>{console.error("floors error",t)},t0.onmessageerror=t=>{console.error("floors messageerror",t)};var t2=n(284);function t5(){let t=tk(t=>t.rendered);(0,s.useEffect)(()=>{requestAnimationFrame(()=>tX())},[t]);let e=tk(t=>t.shown),n=tk(t=>t.appearing)?`
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
`:"",i=tk(t=>t.layout.scroll),o=`
.content {
  width: ${V(i.width)}px;
  height: ${V(i.height)}px;
}
`;return(0,p.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,o]})}let t3=new Map;function t6(t,e,n){(0,s.useEffect)(()=>(function(t,e,n){let i=void 0===n?document:t3.get(n)??null;if(null===i)return;let o=i.querySelector(`#${t}`)??null;if(null===o||null!==o.shadowRoot)return;let r=o.attachShadow({mode:"open"});t3.set(t,r),(0,t2.createRoot)(r).render(e)})(t,e,n),[t,n,e])}let t7={bus:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,p.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,p.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,p.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,p.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,p.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,p.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,p.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,p.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,p.jsx)("use",{x:"8.5",href:"#_person2"}),(0,p.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,p.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36,-36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,p.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,p.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,p.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,p.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,p.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,p.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,p.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,p.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,p.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,p.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,p.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,p.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,p.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,p.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,p.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,p.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,p.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function t4(){return(0,p.jsx)("g",{className:"assets",children:(0,p.jsx)(t8,{})})}function t8(){return(0,p.jsx)("g",{className:"symbols",children:Object.entries(t7).map((t,e)=>{let[n,i]=t;return(0,p.jsx)(s.Fragment,{children:i({id:n})},e)})})}function t9(t){return t>.5?-1:+(t<.5)}function et(t){return t<.3?1:t>.7?-1:0}function ee(t,e,n,i){let o={x:e/2,y:n/2},r=e/20,a=r/2;function s(e){var n;let i,o;return n={x:t.h,y:t.v},i=e.x*n.x,o=e.y*n.y,{...e,x:i,y:o}}let l=t.th<Math.PI/4,d=0===t.v,c=0===t.h,p=s(z(o,-1)),x=s(d||c?A(z(o,-1),{x:i,y:i}):A(z(o,-1),{x:l?i:0,y:l?0:i})),[h,u]=c?[{x:-a,y:0},{x:a,y:0}]:d?[{x:0,y:-a},{x:0,y:a}]:l?[{x:0,y:0},s({x:0,y:r})]:[{x:0,y:0},s({x:r,y:0})],g=T(p,h),f=T(p,u);return{p,q:x,a:g,b:f}}function en(t){return{open:t,animating:!1}}function ei(t){return t.open||t.animating?null:{open:!0,animating:!0}}function eo(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function er(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function ea(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function es(t){let{open:e,animating:n}=t;return e||n}let el={start:new Set,end:new Set,endDone:new Set},ed={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ec={p:N,psvg:N,fidx:0,layout:ta,info:{title:""}};function ep(t){return function(e,n){let i=e[n],o=t(i);return e[n]=null===o?i:o,e}}let ex=(0,X.mj)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return es(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return es(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,_.a)({canceling:()=>!0}),endCancel:(0,_.a)({canceling:()=>!1}),open:(0,_.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(ei)(n,i)}}),close:(0,_.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(er)(n,i)}}),handle:(0,_.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(n[i].open?eo:ea)(n,i)}})}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,detail:ec,m:{header:en(!0),detail:en(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,_.a)({detail:t=>{let{event:{psvg:e,fidx:n,info:i,layout:o}}=t;return{psvg:e,p:tl(o).transformPoint(e),fidx:n,info:i,layout:o}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,J.n)("animationEnded")},{actions:(0,_.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,J.n)("isDetailVisible")},{actions:(0,_.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,J.n)("animationEnded")},{actions:(0,_.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,J.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,_.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tB.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,_.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,J.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,_.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,J.r)({type:"DONE"})]}}}}}),eh=(0,J.c)(ex);function eu(){return(0,G.d4)(eh,t=>t.context)}function eg(){return eu().m.header}function ef(){return eu().m.detail}function ey(t){return(0,p.jsxs)("div",{className:"balloon",children:[(0,p.jsx)(ew,{...t}),t.children,(0,p.jsx)("style",{children:em})]})}eh.on("CLOSE.DONE",()=>tt(ed.closeDone));let em=`
.balloon,
.balloon-svg {
  ${tA}
  ${tH}
  z-index: 10;
  will-change: opacity, transform;
}
`;function ew(t){let e=t._hv;if(null===e)return(0,p.jsx)("svg",{});let{viewBox:n,width:i,height:o,fg:r,bg:a}=function(t,e){let{bw:n,bh:i,lh:o,d:r,width:a,height:s}=e,l=F(-a/2,-a/2,a,s),{body:d,leg:c}=function(t,e,n,i){let o={x:e/2,y:n/2},r=`
m${-o.x},${-o.y}
h${e}
v${n}
h${-e}
z
`,{p:a,q:s,a:l,b:d}=ee(t,e,n,i),c=A(s,l),p=A(d,s),x=A(a,d);return{body:r,leg:`
m${l.x},${l.y}
l${c.x},${c.y}
l${p.x},${p.y}
l${x.x},${x.y}
z
`}}(t,n,i,o);function p(t){return`M${t},${t} ${d} M${t},${t} ${c}`}return{viewBox:l,width:a,height:s,bg:p(r),fg:p(0)}}(e,t._size);return(0,p.jsxs)("svg",{className:"balloon-svg",viewBox:I(n),width:i,height:o,children:[(0,p.jsx)("path",{className:"bg",d:a}),(0,p.jsx)("path",{className:"fg",d:r}),(0,p.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function eS(t){let{_p:e,_hv:n,_size:i,_leg:o}=t,r=ef(),a=null!==e&&null!==n&&es(r)?function(t,e,n,i){let{open:o,animating:r}=t,{width:a,height:s}=n,l=z(i.q,-1);if(r){let[t,n]=o?[0,1]:[1,0],[i,r]=o?[0,1]:[1,0],[d,c]=o?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[p,x]=o?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],h=o?tY:tZ;return`
.detail,
.balloon {
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --dp-x: ${l.x}px;
  --dp-y: ${l.y}px;
  --oa: ${t};
  --ob: ${n};
  --sa: ${i};
  --sb: ${r};
  --timing: ${h};
  --dxa: ${d};
  --dxb: ${p};
  --dya: ${c};
  --dyb: ${x};
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
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
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
`}(r,e,i,o):".balloon, .detail { visibility: hidden; }";return(0,p.jsx)("style",{children:a})}let ev={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},eD=()=>tt(ev.zoomIn),ek=()=>tt(ev.zoomOut),eb=()=>tt(ev.rotate),eE=()=>tt(ev.reset),eT=()=>tt(ev.recenter),eA={multiStart:new Set,multiEnd:new Set,zoom:new Set},ej=(0,K.e)("panning");ej.subscribe(t=>{let e;return e=t,te(ti.mode,e)});let eO=(0,X.mj)({types:{},guards:{isHoming:t=>{let{context:{animationReq:e}}=t;return null!==e&&"home"===e.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>d.isMapRendered(),isUiRendered:()=>d.isUiRendered()},actions:{setRendered:(0,_.a)({rendered:!0}),emitGetScroll:(0,tB.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tB.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNC",pos:e.scroll}}),emitSyncScrollSync:(0,tB.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNCSYNC",pos:e.scroll}}),calcZoomAnimation:(0,_.a)({animation:t=>{var e,n,i,o,r,a,s,l,c,p,x;let h,u,g,f,y,m,w,S,{context:{animationReq:v,layout:D}}=t;return null===v?null:"zoom"===v.type?(e=D,n=v.z,i=v.p,h=tl(e).inverse().transformPoint(i),u=1/(o=n,Math.pow(d.zoomFactor,o)),g=tr().scale(1/u,1/u),{type:"Zoom",svg:q(e.svg,u,h.x,h.y),svgScale:e.svgScale*u,q:g,o:i}):"home"===v.type?(r=D,f=R((a=function(t){let{config:e,content:n}=t;return{config:e,...ts(e),content:n}}(D)).config.inner),y=tl(r).transformPoint(f),m=a.svgScale/r.svgScale,S=(function(t,e){if(t instanceof DOMMatrixReadOnly)return tr(1,0,0,1,t.e,t.f);if("number"==typeof t&&"number"==typeof e)return tr(1,0,0,1,t,e);throw Error("dommatrixreadonlyTranslateOnly")})((w=R(r.container)).x-y.x,w.y-y.y).multiply((s=1/m,l=1/m,c=y.x,p=y.y,tr().scale(s,l,1,c,p,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:S,o:null}):(x=v.p,{type:"Rotate",deg:90,q:tr().rotate(90),o:x})}}),updateLayoutFromZoom:(0,_.a)({prevLayout:t=>{let{context:{layout:e}}=t;return e},layout:t=>{let{context:{layout:e,animation:n}}=t;return function(t,e){var n,i,o;return null===e?t:"Move"===e.type?(n=e.move,{...t,scroll:L(t.scroll,n)}):"Zoom"===e.type?(i=e.svg,o=e.svgScale,{...t,svg:i,svgScale:o}):tu(t,e.deg)}(e,n)}}),endZoom:(0,_.a)({prevLayout:null,animation:null,zoom:t=>{let{context:{zoom:e,animationReq:n}}=t;return e*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:t=>{let{context:{rotate:e,animationReq:n}}=t;return e+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,_.a)({cursor:t=>{let{context:{origLayout:e}}=t;return R(e.container)},layout:t=>{let{context:{origLayout:e,rotate:n}}=t;return tu(tx(e,9),n)}}),emitSyncAnimation:(0,tB.a)(t=>{let{context:{animation:e}}=t;return{type:"SYNC.ANIMATION",animation:e}}),emitZoomStart:(0,tB.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.START",layout:e,zoom:n}}),emitZoomEnd:(0,tB.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.END",layout:e,zoom:n}}),resetCursor:(0,_.a)({cursor:t=>{let{context:{layout:e}}=t;return R(e.container)}}),resizeLayout:(0,_.a)({rendered:!1,origLayout:(t,e)=>{let{layout:n}=e;return n},layout:(t,e)=>{let{layout:n}=e;return tx(n,9)}}),updateLayoutFromScroll:(0,_.a)({layout:t=>{let{context:e}=t,{scroll:n}=ty;return tg(e.layout,n)}}),emitSyncLayout:(0,tB.a)(t=>{let{context:{layout:e,rendered:n}}=t;return{type:"SYNC.LAYOUT",layout:e,force:n}}),emitSearchStart:(0,tB.a)(t=>{let{context:{layout:e,cursor:n}}=t,{scroll:i}=ty;return{type:"SEARCH.START",req:{psvg:tl(tg(e,i)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,tB.a)((t,e)=>{let{context:n}=t,{res:i}=e,{scroll:o}=ty,r=tg(n.layout,o);return{type:"SEARCH.END.DONE",res:null===i?null:{...i,layout:r}}}),emitSwitch:(0,tB.a)((t,e)=>{let{fidx:n}=e;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,tB.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:tp,prevLayout:null,layout:tp,cursor:R(tp.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,J.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"Resizing"},SEARCH:{actions:(0,_.a)({cursor:t=>{let{event:{pos:e}}=t;return e}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,_.a)({animationReq:t=>{let{context:{layout:e},event:{z:n,p:i}}=t;return{type:"zoom",z:n,p:i??R(e.container)}}}),target:"Zooming"},HOME:{actions:(0,_.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,_.a)({animationReq:t=>{let{context:{layout:e}}=t;return{type:"rotate",deg:90,p:R(e.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,_.a)({animationReq:null}),type:"final"}}}}}),eN=(0,J.c)(eO,{systemId:"system-viewer1"});function ez(t){eN.send(t)}eN.on("SEARCH.START",t=>{let e,{req:n}=t;return e=n,te(el.start,e)}),eN.on("SEARCH.END.DONE",t=>{let e,n,{res:i}=t;null===i?eN.send({type:"SEARCH.DONE"}):(e=i,te(el.endDone,e),n=i.psvg,te(ed.open,n))}),eN.on("ZOOM.START",t=>{let e;return e=t,te(ti.zoomStart,e)}),eN.on("ZOOM.END",t=>{let e;return e=t,te(ti.zoomEnd,e)}),eN.on("SWITCH",t=>{let e,{fidx:n}=t;return e=n,te(tV.select,e)}),eN.on("SWITCH.DONE",()=>tt(tV.unlock)),eN.on("SYNC.ANIMATION",t=>{let e,{animation:n}=t,i=(null==n?void 0:n.q)??null,o=(null==n?void 0:n.o)??null;null!==i&&(e={matrix:i,origin:o},te(ti.animation,e))}),eN.on("SYNC.LAYOUT",t=>{let e,{layout:n,force:i}=t;return e={layout:n,force:i},te(ti.layout,e)}),eN.on("SCROLL.SYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.sync,e)}),eN.on("SCROLL.SYNCSYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.syncSync,e)}),eN.on("SCROLL.GET",()=>tt(tn.get));let eF=!1,eM=!1;function e$(t){eF="locked"===t,eM="locked"===t}function eR(){let t=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",eC),()=>{e.removeEventListener("wheel",eC)}},[t]),t}function eC(t){let e=t.currentTarget;eM&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function eL(t){let e,{_detail:n}=t,i=eR();return(0,p.jsxs)("div",{ref:i,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void eh.send(t)},children:[d.renderInfo&&(1!==(e=Object.values(n.info)).length||"string"!=typeof e[0]||""!==e[0])&&d.renderInfo({info:n.info}),(0,p.jsx)("style",{children:eI})]})}let eI=`
.detail {
  ${tA}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${tP}
  ${t$}
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
`;function eU(){return t6("detail",(0,p.jsx)(eH,{}),"ui"),(0,p.jsx)("div",{id:"detail"})}function eH(){return(0,p.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,p.jsx)(eP,{}),(0,p.jsx)(eW,{})]})}function eP(){let t,e,n,i,o,r,a,s,l,d,c,x,h=eu().detail,u=(r=h.p,a=h.layout,s=function(t,e){let{x:n,y:i}=e,o=t.width/t.height,r={x:n/t.width,y:i/t.height},a=o>1?t9(r.x):et(r.x);return{h:a,v:o>1?et(r.y):t9(r.y),th:Math.atan2(t.height,t.width)}}(h.layout.container,r),l=a.container.width,e=50*(t=.01*Math.min(l,d=a.container.height)),n=50*t,i=10*t,o=e/100,x=ee(s,(c={bw:e,bh:n,lh:i,d:o,width:e+2*i+2*o,height:n+2*i+2*o}).bw,c.bh,c.lh),{_p:r,_hv:s,_W:l,_H:d,_size:c,_leg:x});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(ey,{...u}),(0,p.jsx)(eL,{_detail:h}),(0,p.jsx)(eS,{...u})]})}function eW(){return(0,p.jsx)("svg",{id:"ui-svg-defs",children:(0,p.jsx)("defs",{children:(0,p.jsx)(t4,{})})})}function eY(){return t6("footer",(0,p.jsx)(eZ,{}),"ui"),(0,p.jsx)("div",{id:"footer"})}function eZ(){let t=d;return(0,p.jsxs)("div",{className:"ui-content footer",children:[(0,p.jsx)("p",{children:t.copyright}),(0,p.jsxs)("style",{children:[eq,(0,p.jsx)(eV,{})]})]})}let eq=`
.footer {
  ${tO}
  ${tC}
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
`;function eV(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
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
`})}function eB(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("g",{id:"measure",children:(0,p.jsx)(eX,{})})})}function eG(){let{svg:t}=tT();return(0,p.jsxs)("div",{id:"distance",children:[(0,p.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),e0.map(e=>(0,p.jsxs)(s.Fragment,{children:[(0,p.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,p.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,p.jsx)("style",{children:(0,p.jsx)(eQ,{})})]})}function eK(){let t=tk(t=>t.geoPoint),e=t.x>0?"E":"W",n=t.y>0?"N":"S",i=`${e} ${B(Math.abs(t.x))}`,o=`${n} ${B(Math.abs(t.y))}`;return(0,p.jsxs)("div",{id:"coordinate",children:[(0,p.jsx)("p",{id:"longitude",children:i}),(0,p.jsx)("p",{id:"latitude",children:o}),(0,p.jsx)("style",{children:(0,p.jsx)(eJ,{})})]})}function eX(){let{width:t,height:e}=tE(),{client:n}=tT(),i=(0,s.useMemo)(()=>`M0,${e/2} h${t}`,[e,t]),o=(0,s.useMemo)(()=>`M${t/2},0 v${e}`,[e,t]),r=(0,s.useMemo)(()=>e0.map(i=>(function(t){let{width:e,height:n,r:i}=t;return`M${e/2},${n/2} m-${i},0 a${i},${i} 0,1,0 ${2*i},0 a${i},${i} 0,1,0 -${2*i},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(i+1)})),[n,e,t]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),(0,p.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:o}),r.map((t,e)=>(0,p.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function e_(){let{open:t,animating:e}=eg(),[n,i]=t?[0,1]:[1,0],o=e?`
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
`;return(0,p.jsx)(p.Fragment,{children:o})}function eJ(){let{width:t,height:e}=tE(),n=`
#distance,
#coordinate {
  ${tA}
  width: ${t}px;
  height: ${e}px;
}
`,i=`
#longitude {
  ${tN}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,o=`
#latitude {
  ${tO}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,p.jsxs)(p.Fragment,{children:[n,i,o]})}function eQ(){let{width:t,height:e}=tE(),{client:n}=tT(),i=`
.distance {
  ${tA}
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
`);return(0,p.jsxs)(p.Fragment,{children:[o,i,r,a]})}let e0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function e1(){return t6("guides",(0,p.jsx)(e2,{}),"ui"),(0,p.jsx)("div",{id:"guides"})}function e2(){var t;return!((null==(t=d.uiConfig)?void 0:t.showGuides)??!0)||d.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"ui-content guides",children:[(0,p.jsx)("svg",{className:"guides",children:(0,p.jsx)(eB,{})}),(0,p.jsx)(eG,{}),(0,p.jsx)(eK,{}),(0,p.jsxs)("style",{children:[e5,(0,p.jsx)(e_,{})]})]})}let e5=`
.guides {
  ${tA}
  ${tR}
  ${tH}
  z-index: 2;
}

text {
  ${tI}
}
`;function e3(){let{fidx:t,fidxToOnClick:e}=t1(),n=d.floorsConfig;return void 0===n||n.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"floors",children:[(0,p.jsx)("ul",{className:"floor-list",children:n.floors.map((n,i)=>{let{name:o}=n;return(0,p.jsx)("li",{className:`floor-item ${e8(i===t)}`,onClick:e(i),children:o},i)})}),(0,p.jsx)("style",{children:e6})]})}let e6=`
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
  ${tW}
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
`;function e7(){let{fidx:t}=t1(),e=d.floorsConfig;return void 0===e||e.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{children:[e.floors.map((e,n)=>(0,p.jsx)("h2",{className:`floor-name ${e8(n===t)}`,children:e.name},n)),(0,p.jsx)("style",{children:e4})]})}let e4=`
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
`;function e8(t){return t?"selected":"unselected"}function e9(){return t6("header",(0,p.jsx)(nt,{}),"ui"),(0,p.jsx)("div",{id:"header"})}function nt(){let t=d;return(0,p.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void eh.send(t)},children:[(0,p.jsx)("h1",{className:"title",onClick:()=>eE(),children:t.title}),(0,p.jsx)(e7,{}),(0,p.jsxs)("style",{children:[ne,(0,p.jsx)(nn,{})]})]})}let ne=`
.header {
  ${tA}
  ${tC}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${tI}
  ${tP}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function nn(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
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
`})}function ni(){return t6("left",(0,p.jsx)(no,{}),"ui"),(0,p.jsx)("div",{id:"left"})}function no(){return(0,p.jsxs)("div",{className:"ui-content left bottom",children:[(0,p.jsx)(e3,{}),(0,p.jsxs)("style",{children:[nr,(0,p.jsx)(na,{})]})]})}let nr=`
.left {
  ${tA}
  ${tL}
  padding: 0.4em;
  font-size: smaller;
  ${tH}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
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
`})}function ns(){return(0,p.jsx)("div",{className:"button-item fullscreen",onClick:()=>tt(ev.fullscreen),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nl})})})}let nl=`
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
`;function nd(){return(0,p.jsx)("div",{className:"button-item home",onClick:()=>eE(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nc})})})}let nc=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function np(){return d.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"button-item position",onClick:()=>tt(ev.position),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nu})})})}let nx=3*Math.sqrt(2),nh=nx+6,nu=`
M 0,0
m 0,${nh/2}
l -3,-3
a ${nx},${nx} 0,1,1 6,0
z
m 0,${-nh+nx+nx/2}
a ${nx/2},${nx/2} 0,1,0 0,${-nx}
a ${nx/2},${nx/2} 0,1,0 0,${nx}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function ng(){return(0,p.jsx)("div",{className:"button-item recenter",onClick:()=>eT(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nf})})})}let nf=`
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
`;function ny(){return(0,p.jsx)("div",{className:"button-item rotate",onClick:()=>eb(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nm})})})}let nm=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nw(){return(0,p.jsx)("div",{className:"button-item zoom-in",onClick:()=>eD(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nS})})})}let nS=`
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
`;function nv(){return(0,p.jsx)("div",{className:"button-item zoom-out",onClick:()=>ek(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nD})})})}let nD=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nk(){return t6("right",(0,p.jsx)(nb,{}),"ui"),(0,p.jsx)("div",{id:"right"})}function nb(){return(0,p.jsxs)("div",{className:"ui-content right bottom",children:[(0,p.jsx)(nT,{}),(0,p.jsx)("style",{children:nE})]})}let nE=`
.right {
  ${tj}
  ${tL}
  padding: 0.4em;
  font-size: smaller;
  ${tH}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nT(){return(0,p.jsxs)("div",{className:"button",children:[(0,p.jsx)(np,{}),(0,p.jsx)(nd,{}),(0,p.jsx)(ns,{}),(0,p.jsx)(ng,{}),(0,p.jsx)(ny,{}),(0,p.jsx)(nv,{}),(0,p.jsx)(nw,{}),(0,p.jsxs)("style",{children:[nA,(0,p.jsx)(nj,{})]})]})}let nA=`
.button {
  font-size: large;
  margin: 0;
  ${tC}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${tP}
  cursor: default;
  ${tW}
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
`;function nj(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tY:tZ;return(0,p.jsx)(p.Fragment,{children:`
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
`})}function nO(){return t6("screen",(0,p.jsx)(nN,{}),"ui"),(0,p.jsx)("div",{id:"screen"})}function nN(){let t=eR();return(0,p.jsx)("div",{ref:t,className:"ui-content screen",onClick:()=>tt(ed.close),children:(0,p.jsxs)("style",{children:[nz,(0,p.jsx)(nF,{})]})})}let nz=`
.screen {
  ${tA}
  ${tR}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nF(){let{open:t,animating:e}=ef(),n=tk(t=>t.animating);if(!e)return t?(0,p.jsx)(p.Fragment,{children:`
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
`})}}function nM(){return t6("ui",(0,p.jsx)(n$,{})),(0,p.jsx)("div",{id:"ui"})}function n$(){return(0,p.jsxs)("div",{className:"ui",children:[(0,p.jsx)(nO,{}),(0,p.jsx)(e9,{}),(0,p.jsx)(eY,{}),(0,p.jsx)(ni,{}),(0,p.jsx)(nk,{}),(0,p.jsx)(e1,{}),(0,p.jsx)(eU,{})]})}function nR(){var t,e,n;let i;return null!==(i=(null==(n=document.querySelector("#ui"))||null==(e=n.shadowRoot)||null==(t=e.children)?void 0:t.length)??null)&&i>0}function nC(){eT()}var nL=n(469),nI=n(336),nU=n(5);let nH=nL.OZ(O),nP=nI.aU(j._k),nW=nI.tf(),nY=nI.JI(j.Eq,nL.CA());function nZ(t){return(0,k.Fs)(t,nI.zu(nH),nL.x1(t=>0===t.length?nU.dv:nU.zN(t[0])))}function nq(t){let e;return t.length<2||null===(e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y})))?null:z(e,1/t.length)}function nV(t){return new Map((0,k.Fs)(t.changedTouches,Array.from,nL.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let nB=(0,X.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z},isModeIdle:t=>{let{context:{mode:e}}=t;return"idle"===e},isModePanning:t=>{let{context:{mode:e}}=t;return"pan"===e},isModePinching:t=>{let{context:{mode:e}}=t;return"pinch"===e}},actions:{updateTouches:(0,_.a)({touches:t=>{var e;let n,i,o,a,s,l,d,c,p,{context:{touches:x},event:h}=t;return"TOUCH.START"===h.type?(e=h.ev,o=nq(i=nZ(n=nY.concat(x.vecs,nV(e)))),s=2!==i.length?null:.5>Math.abs((a=A(i[0],i[1])).y/a.x),{...x,vecs:n,points:i,cursor:o,horizontal:s}):"TOUCH.MOVE"===h.type?function(t,e){var n,i,o,a;let s,l=nV(e),d=nP.mapWithIndex(t.vecs,(t,e)=>(0,k.Fs)(l.get(t),nU.k$,nU.AU(()=>e,nL.xW(e)))),c=nZ(d),p=nq(c),[x,h]=c;if(null===p||x===r||h===r)return{...t,vecs:d,points:c,cursor:p};let u=(n=t.dists,i=Math.sqrt((o=x,a=h,Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2))),s=Math.pow((n.length>0?n[0]:i)-i,2),0===n.length||s>0?[i,...n]:n),g=function(t){let[e,n,i,o]=t;return e===r||n===r||i===r||o===r?null:e<n&&n<i&&i<o?-1:e>n&&n>i&&i>o?1:null}(u);return{vecs:d,points:c,cursor:p,dists:u,z:g,horizontal:t.horizontal}}(x,h.ev):"TOUCH.END"===h.type?(l=nV(h.ev),p=nq(c=nZ(d=nW.filterMapWithIndex(x.vecs,(t,e)=>l.has(t)?nU.dv:nU.zN(e)))),{vecs:d,points:c,cursor:p,dists:0===d.size?[]:x.dists,z:0===d.size?null:x.z,horizontal:x.horizontal}):x}}),raiseOp:(0,J.r)(t=>{let{event:e}=t;return"TOUCH.START"===e.type?{type:"STARTED"}:"TOUCH.MOVE"===e.type?{type:"MOVED"}:"TOUCH.END"===e.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,_.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,_.a)({mode:"pan"}),enterPinch:(0,_.a)({mode:"pinch"}),emitMulti:(0,tB.a)(t=>{let{context:{touches:e}}=t;return{type:"MULTI",touches:e}}),emitZoom:(0,tB.a)(t=>{let{context:{touches:e}}=t;return{type:"ZOOM",touches:e}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,J.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,J.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,J.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),nG=(0,J.c)(nB),nK=!1;function nX(t){nG.send({type:"TOUCH.START",ev:t})}function n_(t){nG.send({type:"TOUCH.MOVE",ev:t})}function nJ(t){nG.send({type:"TOUCH.END",ev:t})}function nQ(){nG.send({type:"CANCEL"})}function n0(t){eF||ez({type:"SEARCH",pos:{x:t.pageX,y:t.pageY}})}function n1(t){let e;null!==t&&(e=t,te(tn.eventTick,e))}function n2(t){return(0,p.jsxs)("div",{id:"viewer",className:"container",onTouchStart:nX,onTouchMove:n_,onTouchEnd:nJ,onClick:n0,onContextMenu:nC,onScroll:n1,onAnimationEnd:t=>{var e;(e={type:"ANIMATION.END",ev:t}).ev.stopPropagation(),ez(e),tt(ti.animationEnd)},children:[t.children,(0,p.jsx)(n5,{})]})}function n5(){let t=`
.container {
  ${tA}
  ${tR}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{children:t}),(0,p.jsx)(n3,{}),(0,p.jsx)(n6,{}),(0,p.jsx)(n7,{})]})}function n3(){let t=tk(t=>t.layout.content),e=`
.content {
  ${tA}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,p.jsx)("style",{children:e})}function n6(){let t=tk(t=>t.animation);return(0,p.jsx)("style",{children:t})}function n7(){let{style:t}=t1();return null===t?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("style",{children:t})}function n4(){return null!==document.querySelector(".container")}nG.on("MULTI",t=>{let{touches:e}=t;2===e.vecs.size?(nK=!0,tt(eA.multiStart)):(tt(eA.multiEnd),nK=!1)}),nG.on("ZOOM",t=>{let e,{touches:n}=t,i=n.cursor,o=n.z;null!==i&&null!==o&&(e={z:o>0?1:-1,p:i},te(eA.zoom,e))});var n8=n(376);async function n9(t){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){n(t)},{enableHighAccuracy:!0,timeout:t,maximumAge:0})})}let it=(0,X.mj)({types:{events:{},emitted:{}},actors:{api:(0,n8.Sx)(()=>n9(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,_.a)({position:t=>{let{event:e}=t;return e.output}}),(0,tB.a)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,_.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),ie=(0,J.c)(it),ii=(0,X.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tB.a)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tB.a)(t=>{let{event:e}=t;return e}),target:"Done"}}},Done:{always:"Idle"}}}),io=(0,J.c)(ii);function ir(t){io.send(t)}io.on("SEARCH",t=>{let{req:{psvg:e}}=t,n=d.mapCoord.matrix.inverse().transformPoint(e),i=t_.get();ia.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:i}})}),io.on("SEARCH.DONE",t=>{let e,{res:n}=t;return e=n,te(el.end,e)});let ia=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function is(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}ia.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":ir({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let i;n=e.res,null===(i=d.getSearchInfo(n,d.mapMap,d.osmSearchEntries))?(console.log("info not found!",n),ir({type:"SEARCH.DONE",res:null})):ir({type:"SEARCH.DONE",res:{psvg:d.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:i}});break;case"SEARCH.ERROR":console.log("search error!",e.error),ir({type:"SEARCH.DONE",res:null})}},ia.onerror=t=>{console.error("search error",t)},ia.onmessageerror=t=>{console.error("search messageerror",t)};let il=(0,X.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:t=>{let{event:{key:e}}=t;return"r"===e},shouldRecenter:t=>{let{event:{key:e}}=t;return"c"===e},shouldRotate:t=>{let{event:{key:e}}=t;return"t"===e},shouldZoom:t=>{let{event:{key:e}}=t;return 0!==is(e)},shouldFloorLevelUp:t=>{let{event:{key:e}}=t;return"u"===e},shouldFloorLevelDown:t=>{let{event:{key:e}}=t;return"d"===e}},actions:{reset:(0,tB.a)({type:"RESET"}),recenter:(0,tB.a)({type:"RECENTER"}),rotate:(0,tB.a)({type:"ROTATE"}),zoom:(0,tB.a)((t,e)=>{let{z:n}=e;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tB.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tB.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,_.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"===e||n,alt:"Alt"===e||i,control:"Control"===e||o}})(e.mod,n.key)}}),handleUp:(0,_.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"!==e&&n,alt:"Alt"!==e&&i,control:"Control"!==e&&o}})(e.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:t=>{let{event:{key:e}}=t;return{z:is(e)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),id=(0,J.c)(il);id.on("RESET",eE),id.on("RECENTER",eT),id.on("ROTATE",eb),id.on("ZOOM.IN",eD),id.on("ZOOM.OUT",ek),id.on("FLOOR.LEVEL.UP",()=>tt(tV.levelUp)),id.on("FLOOR.LEVEL.DOWN",()=>tt(tV.levelDown));let ic=(0,X.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:M,next:M,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,_.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,J.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:t=>{let{context:e}=t;return console.log("resize: ignoring height-only change",e)},target:"Idle"},{guard:t=>{let{context:e}=t;return!$(e.prev,e.next)},actions:[(0,_.a)({waited:0}),(0,tB.a)(t=>{var e,n,i,o;let r,a,{context:s}=t;return{type:"LAYOUT",layout:(e=d.fontSize,n=s.next,r=R((o={config:i=function(t,e,n,i){var o;let r,a,s,l,{outer:d,scale:c}=(o=i??n,r=e.width/e.height,l=(s=r>(a=o.width/o.height))?td(e,a):tc(e,a),{outer:l,inner:s?td(o,r):tc(o,r),scale:s?o.height/e.height:o.width/e.width,rO:r,rI:a,v:s});return{fontSize:t,container:e,outer:d,inner:i??n,svgScale:c}}(e,n,d.origViewBox,d.origBoundingBox),...ts(i)}).scroll),a=o.container.width/o.container.height,th(o,a<1?1/a:1,a<1?1:+a,r)),force:!s.first}}),(0,_.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,_.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,J.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:t=>{let{context:{next:e}}=t;return $(e,tw.get().container)},actions:(0,_.a)({prev:t=>{let{context:{next:e}}=t;return e}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),ip=(0,J.c)(ic);ip.on("LAYOUT",t=>{let e;return e=t,te(ti.resize,e)}),window.addEventListener("resize",()=>{ip.send({type:"RESIZE"})});let ix=(0,X.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,_.a)({ticked:!1}),set:(0,_.a)({ticked:!0}),expire:(0,tB.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ih=(0,X.mj)({types:{},actions:{getScroll:(0,_.a)({scroll:()=>(function(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),F(e,n,i,o)}return null})()}),syncScroll:(t,e)=>{let{pos:n}=e;return tf(n)}},actors:{syncScrollLogic:(0,n8.Sx)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!tf(e))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,tB.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,_.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,tB.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,_.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),iu=(0,J.c)(ih,{systemId:"system-scroll1"});function ig(t){iu.send(t)}iu.on("SCROLL.GET.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.getDone,e)}),iu.on("SCROLL.SYNCSYNC.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.syncSyncDone,e)});let iy=(a=()=>tt(tn.eventExpire),i=ix.provide({delays:{DURATION:500}}),(o=(0,J.c)(i)).on("EXPIRE",a),o.start(),{tick:function(){o.send({type:"TICK"})}}),im=(0,K.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function iw(t){var e;t.getMapNames&&(e=t.getMapNames({data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig}),im.trigger.set({names:e}))}async function iS(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let iv=`
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
  ${tA}
  ${tR}
  ${tM}
  ${t$}
  ${tU}
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

${D}
`,iD=function(){var t;let e=(null==(t=d.cartoConfig)?void 0:t.backgroundColor)??d.backgroundColor??"darkgray",n={data:d,render:d,carto:d.cartoConfig,floors:d.floorsConfig};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n2,{...n,children:d.renderMap(n)}),(0,p.jsx)(nM,{}),(0,p.jsxs)("style",{children:[iv,`body { background-color: ${e}; }`]})]})};function ik(t){let{origViewBox:e,url:n}=t;return(0,p.jsx)("image",{href:n,x:e.x,y:e.y,width:e.width,height:e.height})}function ib(t){let{origViewBox:e,url:n,labels:i}=t;return void 0===i?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("svg",{href:n,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:I(e),children:[(0,p.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),i.map((t,e)=>(0,p.jsxs)("text",{...iA(t.attrs),children:["id"in t.attrs&&"style"in t.attrs&&(0,p.jsx)("style",{children:`#${t.attrs.id} { ${t.attrs.style}; }`}),t.children&&t.children.map((t,e)=>(0,p.jsx)("tspan",{...iA(t.attrs),children:t.text??""},e))]},e))]})}let iE=/^[{].*$/,iT=/^style$/;function iA(t){return Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return!e.match(iE)&&!e.match(iT)}).map(t=>{var e;let[n,i]=t;return[!(e=n).match(/^.*-.*$/)||e.match(/^(aria|data)-.*$/)?e:e.split("-").map((t,e)=>{var n;let i;return 0===e?t:(i=(n=t).match(/^(.)(.*)$/))?`${i[1].toUpperCase()}${i[2]}`:n}).join(""),i]}))}var ij=JSON.parse('["1F","2F","3F","4F","5F"]'),iO=JSON.parse('{"2F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"サーティワン アイスクリーム","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text4","style":"font-size:9.44882px;display:inline","x":"2787.5996","y":"998.41638"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan3","x":"2787.5996","y":"998.41638"},"text":"サーティワン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan4","x":"2787.5996","y":"1013.4884"},"text":"アイスクリーム"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"新橋　まこちゃん","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text6","style":"font-size:9.44882px;display:inline","x":"2673.3665","y":"1010.5534"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan5","x":"2673.3665","y":"1010.5534"},"text":"新橋"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan6","x":"2673.3665","y":"1025.6255"},"text":"まこちゃん"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"とんかつ檍","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text7","style":"font-size:9.44882px;display:inline","x":"2620.6196","y":"1017.2889"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan7","x":"2620.6196","y":"1017.2889"},"text":"とんかつ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2620.6196","y":"1032.361","id":"tspan79"},"text":"檍"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"羅家 東京豚饅","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text9","style":"font-size:9.44882px;display:inline","x":"2569.9602","y":"1024.5345"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan8","x":"2569.9602","y":"1024.5345"},"text":"羅家"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan9","x":"2569.9602","y":"1039.6066"},"text":"東京豚饅"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"おにぎり戸越屋","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text10","style":"font-size:9.44882px;display:inline","x":"2518.5298","y":"1031.4921"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan10","x":"2518.5298","y":"1031.4921"},"text":"おにぎり"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2518.5298","y":"1046.5641","id":"tspan80"},"text":"戸越屋"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Soup Stock Tokyo","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text40","style":"font-size:9.44882px;display:inline","x":"2461.2639","y":"1025.584"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan11","x":"2461.2639","y":"1025.584"},"text":"Soup"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan12","x":"2461.2639","y":"1039.7572"},"text":"Stock"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan40","x":"2461.2639","y":"1053.9304"},"text":"Tokyo"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"どうとんぼり神座","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text41","style":"font-size:13.2283px;display:inline","x":"2330.5967","y":"1023.2877"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan41","x":"2330.5967","y":"1023.2877"},"text":"どうとんぼり"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2330.5967","y":"1044.3885","id":"tspan81"},"text":"神座"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"セブン-イレブン","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text42","style":"font-size:18.8976px;display:inline","x":"2216.8967","y":"1026.2222"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan42","x":"2216.8967","y":"1026.2222"},"text":"セブン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2216.8967","y":"1056.3662","id":"tspan82"},"text":"イレブン"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"L\'Atelier du Pain","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text45","style":"font-size:13.2283px;display:inline","x":"2068.2686","y":"1033.8206"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan43","x":"2068.2686","y":"1033.8206"},"text":"L\'Atelier"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan44","x":"2068.2686","y":"1053.663"},"text":"du"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan45","x":"2068.2686","y":"1073.5055"},"text":"Pain"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"マーキーズ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text46","style":"font-size:15.1181px;display:inline","x":"1853.8854","y":"1081.0035"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan46","x":"1853.8854","y":"1081.0035"},"text":"マーキーズ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Cath Kidston","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text48","style":"font-size:15.1181px;display:inline","x":"1714.8224","y":"1075.2797"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan47","x":"1714.8224","y":"1075.2797"},"text":"Cath"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan48","x":"1714.8224","y":"1097.9568"},"text":"Kidston"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ANTIDOTE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text49","style":"font-size:15.1181px;display:inline","x":"1560.8635","y":"1090.3881"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan49","x":"1560.8635","y":"1090.3881"},"text":"ANTIDOTE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"TULLY\'S COFFEE ＆TEA","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text52","style":"font-size:11.3386px;display:inline","x":"1442.4896","y":"1077.2101"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan50","x":"1442.4896","y":"1077.2101"},"text":"TULLY\'S"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan51","x":"1442.4896","y":"1094.218"},"text":"COFFEE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan52","x":"1442.4896","y":"1112.3044"},"text":"＆TEA"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"NATURE&MEAT GROVE PARK VIEW","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text56","style":"font-size:9.44882px;display:inline","x":"1334.7532","y":"1071.632"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan53","x":"1334.7532","y":"1071.632"},"text":"NATURE&MEAT"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan54","x":"1334.7532","y":"1085.8052"},"text":"GROVE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan55","x":"1334.7532","y":"1099.9784"},"text":"PARK"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan56","x":"1334.7532","y":"1114.1516"},"text":"VIEW"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Standard Products","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text58","style":"font-size:18.8976px;display:inline","x":"1517.7758","y":"931.86243"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan57","x":"1517.7758","y":"931.86243"},"text":"Standard"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan58","x":"1517.7758","y":"960.2088"},"text":"Products"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"TSUTAYA BOOKSTORE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text60","style":"font-size:18.8976px;display:inline","x":"1816.5016","y":"925.35767"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1816.5016","y":"925.35767","id":"tspan85"},"text":"TSUTAYA BOOKSTORE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"スターバックス（TSUTAYA BOOKSTORE）","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text62","style":"font-size:18.8976px;display:inline","x":"1816.063","y":"956.09363"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan62","x":"1816.063","y":"956.09363"},"text":"スターバックス"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pet Plus Trimming Salon","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text66","style":"font-size:9.44882px;display:inline","x":"1264.4543","y":"811.8501"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan64","x":"1264.4543","y":"811.8501"},"text":"Pet Plus"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan65","x":"1264.4543","y":"826.02332"},"text":"Trimming"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan66","x":"1264.4543","y":"840.19653"},"text":"Salon"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pet Plus","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text68","style":"font-size:17.0079px;display:inline","x":"1336.2533","y":"769.30249"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan68","x":"1336.2533","y":"769.30249"},"text":"Pet Plus"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"shop in","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text70","style":"font-size:15.1181px;display:inline","x":"1546.3979","y":"768.39136"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan70","x":"1546.3979","y":"768.39136"},"text":"shop in"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"JINS","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text71","style":"font-size:17.0079px;display:inline","x":"1670.5765","y":"754.69067"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan71","x":"1670.5765","y":"754.69067"},"text":"JINS"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ウエルシア","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text72","style":"font-size:17.0079px;display:inline","x":"1814.3438","y":"754.68951"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan72","x":"1814.3438","y":"754.68951"},"text":"ウエルシア"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"AKOMEYA TOKYO","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text74","style":"font-size:15.1181px;display:inline","x":"1969.8876","y":"729.40918"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan73","x":"1969.8876","y":"729.40918"},"text":"AKOMEYA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan74","x":"1969.8876","y":"752.0863"},"text":"TOKYO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"cotta","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text75","style":"font-size:13.2283px;display:inline","x":"2322.8413","y":"893.21912"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan75","x":"2322.8413","y":"893.21912"},"text":"cotta"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ビオラル","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text76","style":"font-size:13.2283px;display:inline","x":"2412.207","y":"862.59937"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan76","x":"2412.207","y":"862.59937"},"text":"ビオラル"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ライフ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text77","style":"font-size:45.3543px;display:inline","x":"2769.2427","y":"759.17041"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan77","x":"2769.2427","y":"759.17041"},"text":"ライフ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ポニークリーニング","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text78","style":"font-size:7.55906px;display:inline","x":"2972.7759","y":"863.40674"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan78","x":"2972.7759","y":"863.40674"},"text":"ポニー"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2972.7759","y":"875.46436","id":"tspan87"},"text":"クリーニング"}]}],"3F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"WOODBERRY COFFEE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text176","x":"2781.1768","y":"1000.8459","style":"font-size:10.3937px"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan175","x":"2781.1768","y":"1000.8459"},"text":"WOODBERRY"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan176","x":"2781.1768","y":"1016.4365"},"text":"COFFEE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"リンツ ショコラ ブティック","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text179","style":"font-size:8.50394px","x":"2640.6299","y":"1021.9713"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan177","x":"2640.6299","y":"1021.9713"},"text":"リンツ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan178","x":"2640.6299","y":"1035.5361"},"text":"ショコラ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan179","x":"2640.6299","y":"1049.101"},"text":"ブティック"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"SuiSavon-首里石鹸-","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text180","style":"font-size:7.55906px","x":"2559.3796","y":"1036.1885"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan180","x":"2559.3796","y":"1036.1885"},"text":"SuiSavon"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2559.3796","y":"1048.2461","id":"tspan240"},"text":"-首里石鹸-"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ANEMONE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text181","style":"font-size:8.50394px","x":"2462.3965","y":"1049.2201"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan181","x":"2462.3965","y":"1049.2201"},"text":"ANEMONE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"FACTORY MARKET","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text183","style":"font-size:7.55906px","x":"2407.748","y":"1041.4243"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan182","x":"2407.748","y":"1041.4243"},"text":"FACTORY"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan183","x":"2407.748","y":"1052.7629"},"text":"MARKET"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ロクシタン","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text184","style":"font-size:8.50394px","x":"2356.291","y":"1046.563"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan184","x":"2356.291","y":"1046.563"},"text":"ロクシタン"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ACE Bags & Luggage","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text188","style":"font-size:7.55906px","x":"2304.637","y":"1029.2334"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan185","x":"2304.637","y":"1029.2334"},"text":"ACE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan186","x":"2304.637","y":"1040.572"},"text":"Bags"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan187","x":"2304.637","y":"1051.9105"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan188","x":"2304.637","y":"1063.2491"},"text":"Luggage"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"WithGreen","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text189","style":"font-size:9.44882px","x":"2230.7805","y":"1051.5284"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan189","x":"2230.7805","y":"1051.5284"},"text":"WithGreen"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ロジウラカリィ サムライ.","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text191","style":"font-size:7.55906px","x":"2167.8501","y":"1051.186"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan190","x":"2167.8501","y":"1051.186"},"text":"ロジウラカリィ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan191","x":"2167.8501","y":"1063.2437"},"text":"サムライ."}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"そば道","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text192","style":"font-size:11.3386px","x":"2064.1096","y":"1065.1399"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan192","x":"2064.1096","y":"1065.1399"},"text":"そば道"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"仲卸直営 とろぼっち","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text194","style":"font-size:10.3937px","x":"1834.3767","y":"1075.9238"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan193","x":"1834.3767","y":"1075.9238"},"text":"仲卸直営"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan194","x":"1834.3767","y":"1092.5031"},"text":"とろぼっち"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Mare & Oyster","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text197","style":"font-size:10.3937px","x":"1597.9531","y":"1091.9186"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1597.9531","y":"1091.9186","id":"tspan243"},"text":"Mare & Oyster"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pizzeria&Trattoria GONZO","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text199","style":"font-size:15.1181px","x":"1382.3188","y":"1083.5612"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan198","x":"1382.3188","y":"1083.5612"},"text":"Pizzeria&Trattoria"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan199","x":"1382.3188","y":"1106.2383"},"text":"GONZO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"yellow 大井町","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text201","style":"font-size:13.2283px","x":"1553.146","y":"908.27899"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan200","x":"1553.146","y":"908.27899"},"text":"yellow"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan201","x":"1553.146","y":"929.37976"},"text":"大井町"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"SHARE LOUNGE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text203","style":"font-size:22.6772px","x":"1795.7881","y":"928.75885"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan202","x":"1795.7881","y":"928.75885"},"text":"SHARE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan203","x":"1795.7881","y":"962.77466"},"text":"LOUNGE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"シズラー","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text204","style":"font-size:22.6772px","x":"760.07147","y":"806.27069"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan204","x":"760.07147","y":"806.27069"},"text":"シズラー"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ＴＯＨＯシネマズ 大井町","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text206","style":"font-size:22.6772px;display:inline","x":"1322.0604","y":"603.41748"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan205","x":"1322.0604","y":"603.41748"},"text":"ＴＯＨＯシネマズ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan206","x":"1322.0604","y":"639.59045"},"text":"大井町"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"玉","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text207","style":"font-size:15.1181px","x":"1491.7375","y":"756.6944"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan207","x":"1491.7375","y":"756.6944"},"text":"玉"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"青龍門","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text208","style":"font-size:9.44882px","x":"1629.8827","y":"666.57111"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan208","x":"1629.8827","y":"666.57111"},"text":"青龍門"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"大かまど飯 寅福 大井町食堂","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text211","x":"1686.387","y":"656.8869"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan209","x":"1686.387","y":"656.8869"},"text":"大かまど飯"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan210","x":"1686.387","y":"664.86255"},"text":"寅福"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan211","x":"1686.387","y":"672.83813"},"text":"大井町食堂"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"韓美膳","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text212","style":"font-size:9.44882px","x":"1743.1694","y":"666.58527"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan212","x":"1743.1694","y":"666.58527"},"text":"韓美膳"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"鰹水・肉汁つけうどん凜","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text213","x":"1787.5175","y":"701.39545"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan213","x":"1787.5175","y":"701.39545"},"text":"鰹水・肉汁"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1787.5175","y":"709.37109","id":"tspan244"},"text":"つけうどん"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1787.5175","y":"717.34668","id":"tspan245"},"text":"凜"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"\xc8 PRONTO","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text215","style":"font-size:5.66929px","x":"1881.7725","y":"739.34955"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan214","x":"1881.7725","y":"739.34955"},"text":"\xc8"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan215","x":"1881.7725","y":"747.85345"},"text":"PRONTO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"47CREPE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text216","style":"font-size:7.55906px","x":"1686.5643","y":"774.51959"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan216","x":"1686.5643","y":"774.51959"},"text":"47CREPE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"青山フラワーマーケット","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text217","style":"font-size:9.44882px","x":"2395.1636","y":"851.39252"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan217","x":"2395.1636","y":"851.39252"},"text":"青山"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2395.1636","y":"866.46454","id":"tspan59"},"text":"フラワーマーケット"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"中川政七商店","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text218","style":"font-size:13.2283px","x":"2549.7512","y":"841.84753"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan218","x":"2549.7512","y":"841.84753"},"text":"中川政七商店"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ISHIYA G","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text220","x":"2654.2739","y":"859.06152"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan219","x":"2654.2739","y":"859.06152"},"text":"ISHIYA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan220","x":"2654.2739","y":"866.56152"},"text":"G"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"和菓子 結","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text222","x":"2689.4561","y":"858.93121"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan221","x":"2689.4561","y":"858.93121"},"text":"和菓子"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan222","x":"2689.4561","y":"866.90686"},"text":"結"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"きりのさか by 中央軒煎餅","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text225","x":"860.94336","y":"-2709.771","transform":"rotate(90)","style":"font-size:3.77953px"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan223","x":"860.94336","y":"-2709.771"},"text":"きりのさか"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan225","x":"860.94336","y":"-2703.7422"},"text":"by 中央軒煎餅"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ラ・メゾン アンソレイユターブル パティスリー","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text228","x":"860.92163","y":"-2741.8486","style":"font-size:2.83465px","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan226","x":"860.92163","y":"-2741.8486"},"text":"ラ・メゾン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan227","x":"860.92163","y":"-2737.3269"},"text":"アンソレイユターブル"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan228","x":"860.92163","y":"-2732.8054"},"text":"パティスリー"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"DEAN & DELUCA","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text231","style":"font-size:11.3386px","x":"2847.4226","y":"750.16962"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan229","x":"2847.4226","y":"750.16962"},"text":"DEAN"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan230","x":"2847.4226","y":"767.17749"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan231","x":"2847.4226","y":"784.18542"},"text":"DELUCA"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"治一郎","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text232","style":"font-size:10.3937px","x":"2694.7891","y":"810.95435"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan232","x":"2694.7891","y":"810.95435"},"text":"治一郎"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"les joues de b\xe9b\xe9","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text236","style":"font-size:15.1181px","x":"2653.2681","y":"683.55872"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan234","x":"2653.2681","y":"683.55872"},"text":"les joues"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan236","x":"2653.2681","y":"706.23584"},"text":"de b\xe9b\xe9"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"NewDays","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text237","style":"font-size:11.3386px","x":"3187.363","y":"734.61945"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan237","x":"3187.363","y":"734.61945"},"text":"NewDays"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"そばいち","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text238","style":"display:inline;font-size:10.3937px","x":"3187.967","y":"876.95392","transform":"translate(0.31615,-0.02507)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan238","x":"3187.967","y":"876.95392"},"text":"そばいち"}]}]}');let iN=ij.map(t=>({name:t,href:n(303)(`./floor-${t}.svg`),labels:(null==iO?void 0:iO[t])??void 0})),iz=Object.values(JSON.parse('{"1F":{"A1F-Content-(ViewBox)":{"x":0,"y":0}},"2F":{"A2F-Content-(ViewBox)":{"x":0,"y":0},"A2F-Shops-1":{"x":2787.633,"y":1002.343},"A2F-Shops-2":{"x":2673.916,"y":1013.549},"A2F-Shops-3":{"x":2620.812,"y":1020.774},"A2F-Shops-4":{"x":2569.678,"y":1027.821},"A2F-Shops-5":{"x":2518.34,"y":1034.889},"A2F-Shops-6":{"x":2461.124,"y":1037.392},"A2F-Shops-7":{"x":2330.392,"y":1029.023},"A2F-Shops-8":{"x":2216.639,"y":1033.387},"A2F-Shops-9":{"x":2068.837,"y":1048.702},"A2F-Shops-10":{"x":1854.286,"y":1074.941},"A2F-Shops-11":{"x":1714.966,"y":1080.949},"A2F-Shops-12":{"x":1560.402,"y":1084.983},"A2F-Shops-13":{"x":1442.217,"y":1090.732},"A2F-Shops-14":{"x":1335.221,"y":1089.467},"A2F-Shops-15":{"x":1521.3,"y":939.432},"A2F-Shops-16":{"x":1816.168,"y":933.897},"A2F-Shops-17":{"x":1264.299,"y":821.759},"A2F-Shops-18":{"x":1336.729,"y":762.924},"A2F-Shops-19":{"x":1546.088,"y":764.415},"A2F-Shops-20":{"x":1669.335,"y":750.039},"A2F-Shops-21":{"x":1814.93,"y":748.175},"A2F-Shops-22":{"x":1969.88,"y":735.343},"A2F-Shops-23":{"x":2322.683,"y":888.927},"A2F-Shops-24":{"x":2412.665,"y":857.226},"A2F-Shops-25":{"x":2769.278,"y":742.101},"A2F-Shops-26":{"x":2973.231,"y":865.979}},"3F":{"A3F-Content-(ViewBox)":{"x":0,"y":0},"A3F-Shops-1":{"x":2781.327,"y":1004.926},"A3F-Shops-2":{"x":2640.63,"y":1032.658},"A3F-Shops-3":{"x":2559.444,"y":1038.576},"A3F-Shops-4":{"x":2462.137,"y":1045.036},"A3F-Shops-5":{"x":2408.133,"y":1044.353},"A3F-Shops-6":{"x":2356.584,"y":1043.297},"A3F-Shops-7":{"x":2304.8,"y":1042.113},"A3F-Shops-8":{"x":2230.525,"y":1047.985},"A3F-Shops-9":{"x":2167.85,"y":1053.335},"A3F-Shops-10":{"x":2064.49,"y":1060.792},"A3F-Shops-11":{"x":1834.647,"y":1080.149},"A3F-Shops-12":{"x":1716.762,"y":1086.47},"A3F-Shops-13":{"x":1598.4,"y":1089.408},"A3F-Shops-14":{"x":1382.47,"y":1089.495},"A3F-Shops-15":{"x":1553.212,"y":914.365},"A3F-Shops-16":{"x":1796.253,"y":937.671},"A3F-Shops-17":{"x":760.185,"y":797.12},"A3F-Shops-18":{"x":1323.637,"y":612.966},"A3F-Shops-19":{"x":1491.745,"y":751.138},"A3F-Shops-20":{"x":1629.731,"y":662.99},"A3F-Shops-21":{"x":1686.425,"y":662.99},"A3F-Shops-22":{"x":1743.117,"y":662.99},"A3F-Shops-23":{"x":1787.502,"y":707.466},"A3F-Shops-24":{"x":1881.883,"y":740.937},"A3F-Shops-25":{"x":1686.425,"y":771.821},"A3F-Shops-26":{"x":2395.112,"y":855.286},"A3F-Shops-27":{"x":2550.075,"y":836.86},"A3F-Shops-28":{"x":2654.414,"y":861.026},"A3F-Shops-29":{"x":2689.404,"y":861.026},"A3F-Shops-30":{"x":2707.787,"y":861.026},"A3F-Shops-31":{"x":2738.425,"y":861.026},"A3F-Shops-32":{"x":2847.995,"y":763.175},"A3F-Shops-33":{"x":2694.737,"y":807.026},"A3F-Shops-34":{"x":2653.601,"y":689.228},"A3F-Shops-35":{"x":3187.684,"y":731.943},"A3F-Shops-36":{"x":3187.686,"y":873.025}},"4F":{"A4F-Content-(ViewBox)":{"x":0,"y":0}},"5F":{"A5F-Content-(ViewBox)":{"x":0,"y":0}}}')).concat().flatMap((t,e)=>Object.entries(t).map(t=>{let[n,i]=t;return[n,{coord:i,fidx:e}]}));function iF(t){let[e,n]=t;return n.map(t=>[e,t])}function iM(t){return t.reduce(function(t,e){let[n,i]=e,o=new Set([...t.get(n)??new Set,i]);return new Map([...t,[n,o]])},new Map)}let i$=Object.values(JSON.parse('{"1F":{},"2F":{"サーティワン アイスクリーム":["A2F-Shops-1"],"新橋　まこちゃん":["A2F-Shops-2"],"とんかつ檍":["A2F-Shops-3"],"羅家 東京豚饅":["A2F-Shops-4"],"おにぎり戸越屋":["A2F-Shops-5"],"Soup Stock Tokyo":["A2F-Shops-6"],"どうとんぼり神座":["A2F-Shops-7"],"セブン-イレブン":["A2F-Shops-8"],"L\'Atelier du Pain":["A2F-Shops-9"],"マーキーズ":["A2F-Shops-10"],"Cath Kidston":["A2F-Shops-11"],"ANTIDOTE":["A2F-Shops-12"],"TULLY\'S COFFEE ＆TEA":["A2F-Shops-13"],"NATURE&MEAT GROVE PARK VIEW":["A2F-Shops-14"],"Standard Products":["A2F-Shops-15"],"TSUTAYA BOOKSTORE":["A2F-Shops-16"],"スターバックス（TSUTAYA BOOKSTORE）":["A2F-Shops-16"],"Pet Plus Trimming Salon":["A2F-Shops-17"],"Pet Plus":["A2F-Shops-18"],"shop in":["A2F-Shops-19"],"JINS":["A2F-Shops-20"],"ウエルシア":["A2F-Shops-21"],"AKOMEYA TOKYO":["A2F-Shops-22"],"cotta":["A2F-Shops-23"],"ビオラル":["A2F-Shops-24"],"ライフ":["A2F-Shops-25"],"ポニークリーニング":["A2F-Shops-26"]},"3F":{"WOODBERRY COFFEE":["A3F-Shops-1"],"リンツ ショコラ ブティック":["A3F-Shops-2"],"SuiSavon-首里石鹸-":["A3F-Shops-3"],"ANEMONE":["A3F-Shops-4"],"FACTORY MARKET":["A3F-Shops-5"],"ロクシタン":["A3F-Shops-6"],"ACE Bags & Luggage":["A3F-Shops-7"],"WithGreen":["A3F-Shops-8"],"ロジウラカリィ サムライ.":["A3F-Shops-9"],"そば道":["A3F-Shops-10"],"仲卸直営 とろぼっち":["A3F-Shops-11"],"Mare & Oyster":["A3F-Shops-13"],"Pizzeria&Trattoria GONZO":["A3F-Shops-14"],"yellow 大井町":["A3F-Shops-15"],"SHARE LOUNGE":["A3F-Shops-16"],"シズラー":["A3F-Shops-17"],"ＴＯＨＯシネマズ 大井町":["A3F-Shops-18"],"玉":["A3F-Shops-19"],"青龍門":["A3F-Shops-20"],"大かまど飯 寅福 大井町食堂":["A3F-Shops-21"],"韓美膳":["A3F-Shops-22"],"鰹水・肉汁つけうどん凜":["A3F-Shops-23"],"\xc8 PRONTO":["A3F-Shops-24"],"47CREPE":["A3F-Shops-25"],"青山フラワーマーケット":["A3F-Shops-26"],"中川政七商店":["A3F-Shops-27"],"ISHIYA G":["A3F-Shops-28"],"和菓子 結":["A3F-Shops-29"],"きりのさか by 中央軒煎餅":["A3F-Shops-30"],"ラ・メゾン アンソレイユターブル パティスリー":["A3F-Shops-31"],"DEAN & DELUCA":["A3F-Shops-32"],"治一郎":["A3F-Shops-33"],"les joues de b\xe9b\xe9":["A3F-Shops-34"],"NewDays":["A3F-Shops-35"],"そばいち":["A3F-Shops-36"]},"4F":{},"5F":{}}')).flatMap(function(t){return Object.entries(t)});iM(Array.from(i$).flatMap(iF));let iR=iM(Array.from(i$).flatMap(iF).map(t=>{let[e,n]=t;return[n,e]}));var iC=JSON.parse('{"x":0,"y":0,"width":3500.0,"height":1400.0}');!function(t){let e;tG.init.add(t=>{if(t.floorsConfig){let e=t.floorsConfig.floors.length,n=t.floorsConfig.initialFidx;tQ.send({type:"INIT",nfloors:e,fidx:n}),t0.postMessage({type:"INIT",cfg:t.floorsConfig})}}),tV.select.add(t=>tQ.send({type:"SELECT",fidx:t})),tV.levelUp.add(()=>tQ.send({type:"LEVEL.UP"})),tV.levelDown.add(()=>tQ.send({type:"LEVEL.DOWN"})),tV.selectDone.add(t=>tQ.send({type:"SELECT.DONE",fidx:t})),ev.fullscreen.add(iS),tG.init.add(iw),ev.position.add(()=>{var t;return t={type:"GET"},void ie.send(t)}),tn.eventTick.add(tm),tn.eventTick.add(iy.tick),tn.get.add(()=>ig({type:"GET"})),tn.sync.add(t=>ig({type:"SYNC",pos:t})),tn.syncSync.add(t=>ig({type:"SYNCSYNC",pos:t})),tG.init.add(t=>{if(t.getSearchEntries){let e=t.getSearchEntries(t);ia.postMessage({type:"INIT",entries:e})}}),el.start.add(function(t){io.send({type:"SEARCH",req:t})}),ti.layout.add(function(t){let{layout:e,force:n}=t;tD({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>tb())}),ti.zoomStart.add(function(t){tD({type:"STYLE.ZOOM",...t})}),ti.zoomEnd.add(function(t){tD({type:"STYLE.ZOOM",zoom:t.zoom})}),ti.animation.add(function(t){tD({type:"STYLE.ANIMATION",animation:t})}),ti.animationEnd.add(function(){tD({type:"STYLE.ANIMATION.END"})}),ti.mode.add(function(t){tD({type:"STYLE.MODE",mode:t})}),tn.eventExpire.add(tb),ev.reset.add(nQ),ev.fullscreen.add(nQ),ev.position.add(nQ),ev.recenter.add(nQ),ev.zoomOut.add(nQ),ev.zoomIn.add(nQ),el.endDone.add(t=>eh.send({type:"DETAIL",...t})),ed.open.add(()=>{let t;return t=!0,te(ed.openDone,t)}),ed.openDone.add(t=>eh.send({type:t?"OPEN":"CANCEL"})),ed.close.add(()=>eh.send({type:"CANCEL"})),ed.closeDone.add(()=>{requestAnimationFrame(()=>{var t,e;null==(e=t3.get("detail"))||null==(t=e.querySelector(".detail"))||t.scroll(0,0)})}),tV.lock.add(t=>ez({type:"SWITCH",fidx:t})),tV.selectDone.add(()=>ez({type:"SWITCH.DONE"})),el.end.add(t=>eN.send({type:"SEARCH.END",res:t})),ed.open.add(()=>ej.set("locked")),ed.closeDone.add(()=>ez({type:"SEARCH.DONE"})),ed.closeDone.add(()=>ej.set("panning")),tn.getDone.add(t=>{null!==t&&ez({type:"SCROLL.GET.DONE",scroll:t})}),tn.syncSyncDone.add(t=>{null!==t&&ez({type:"SCROLL.SYNCSYNC.DONE",scroll:t})}),ti.resize.add(t=>{let{layout:e,force:n}=t;return ez({type:"RESIZE",layout:e,force:n})}),ti.mode.add(e$),ti.zoomStart.add(()=>{eM=!0}),ti.zoomEnd.add(()=>{eM=!1}),ev.reset.add(()=>ez({type:"HOME"})),ev.recenter.add(()=>ez({type:"RECENTER"})),ev.rotate.add(()=>ez({type:"ROTATE"})),ev.zoomOut.add(()=>ez({type:"ZOOM",z:-1,p:null})),ev.zoomIn.add(()=>ez({type:"ZOOM",z:1,p:null})),eA.multiStart.add(()=>tt(tn.get)),eA.multiStart.add(()=>ej.set("touching")),eA.multiEnd.add(()=>ej.set("panning")),eA.zoom.add(t=>{let{z:e,p:n}=t;return ez({type:"ZOOM",z:e>0?1:-1,p:n})}),tG.rendered.add(()=>ez({type:"RENDERED"})),tQ.start(),id.start(),ie.start(),ip.start(),iu.start(),io.start(),tv.start(),nG.start(),eh.start(),eN.start();let n=(c({origViewBox:e={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0},isContainerRendered:n4,isUiRendered:nR,...t}),c({...d}),{...d,origViewBox:e,...t});tK(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.2.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let i=document.getElementById(n.root);if(null===i)throw Error("#root not found!");i.onwheel=function(t){var e;let n=i.children[0];t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||eM)&&t.preventDefault()},i.oncontextmenu=function(t){t.preventDefault()},i.ontouchmove=function(t){if(eM){var e;if(t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui")return;t.preventDefault()}else if(!nK)return;t.preventDefault()},document.title=n.title,document.body.onkeydown=t=>{var e;return e={type:"DOWN",key:t.key},void id.send(e)},document.body.onkeyup=t=>{var e;return e={type:"UP",key:t.key},void id.send(e)},(0,t2.createRoot)(i).render((0,p.jsx)(s.StrictMode,{children:(0,p.jsx)(iD,{})}));let o=document.getElementById("style-root");if(null===o)throw Error("#style-root not found!");(0,t2.createRoot)(o).render((0,p.jsx)(s.StrictMode,{children:(0,p.jsx)(t5,{})}))}({renderMap:function(t){let{floors:e,data:{origViewBox:n}}=t,{viewBox:i,width:o,height:r}=function(){let{scroll:t,svg:e}=tk(t=>t.layout);return{viewBox:I(e),width:V(t.width),height:V(t.height)}}(),{fidxToOnAnimationEnd:a,urls:l}=t1();return void 0===e?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"content",children:(0,p.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:i,width:o,height:r,children:e.floors.map((t,e)=>(0,p.jsx)(s.Fragment,{children:(0,p.jsxs)("g",{className:`floor fidx-${e}`,onAnimationEnd:a(e),children:[(0,p.jsx)(ik,{origViewBox:n,idx:e,url:l.get(e),onAnimationEnd:a(e),labels:t.labels}),(0,p.jsx)(ib,{origViewBox:n,idx:e,url:l.get(e),onAnimationEnd:a(e),labels:t.labels})]})},e))})})},isMapRendered:function(){return!0},...{root:"root",title:"OIMACHI TRACKS",backgroundColor:"white",origViewBox:JSON.parse('{"x":0,"y":0,"width":3500.0,"height":1400.0}'),origBoundingBox:iC,zoomFactor:2,floorsConfig:{floors:iN,initialFidx:1},...{getSearchEntries:function(){return iz.map(t=>{let[e,n]=t;return{address:e,pos:n}})},getSearchInfo:function(t){let e=iR.get(t.address);return void 0===e||e.size<1?null:{title:Array.from(e)[0],x:{tag:"unknown"}}},renderInfo:function(t){return(0,p.jsx)("p",{children:t.info.title})}}}})}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return o[t](n,n.exports,a),n.exports}a.m=o,a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.u=t=>"static/js/async/"+t+"."+({147:"142190ae",968:"111aa571"})[t]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],a.O=(e,n,i,o)=>{if(n){o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[n,i,o];return}for(var s=1/0,r=0;r<t.length;r++){for(var[n,i,o]=t[r],l=!0,d=0;d<n.length;d++)(!1&o||s>=o)&&Object.keys(a.O).every(t=>a.O[t](n[d]))?n.splice(d--,1):(l=!1,o<s&&(s=o));if(l){t.splice(r--,1);var c=i();void 0!==c&&(e=c)}}return e},a.p="/demos/OimachiTracks/",a.b=document.baseURI||self.location.href,e={410:0},a.O.j=t=>0===e[t],n=(t,n)=>{var i,o,[r,s,l]=n,d=0;if(r.some(t=>0!==e[t])){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var c=l(a)}for(t&&t(n);d<r.length;d++)o=r[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},(i=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var s=a.O(void 0,["783","845","902"],()=>a(898));s=a.O(s)})();