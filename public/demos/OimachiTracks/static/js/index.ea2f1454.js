(()=>{var t,e,n,i,r={303(t,e,n){var i={"./floor-1F.svg":"901","./floor-2F.svg":"440","./floor-3F.svg":"71","./floor-4F.svg":"514","./floor-5F.svg":"993"};function r(t){return n(o(t))}function o(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=303},901(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-1F.fb96320c.svg"},440(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-2F.eaa35335.svg"},71(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-3F.dffeaf66.svg"},514(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-4F.2f5139cc.svg"},993(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-5F.1d90cfd7.svg"},898(t,e,n){"use strict";let i,r,o;var a,l=n(797);let s={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let d={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:s,internals:s,origin:s,measures:s,viewbox:s,points:s,lines:s,multilinestrings:s,multipolygons:s},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,l.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(t){return(0,l.createElement)("p",{},t.info.title)}};function c(t){d={...d,...t}}var p=n(617);n(774);var u=n(815),x=n(622);let h=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),g=u.Ay$.array(h),f=u.Ay$.object({ids:g}),y=x.codec(x.string(),f,{decode:(t,e)=>{try{return JSON.parse(t)}catch(n){return n instanceof x.ZodError&&e.issues.push({code:"invalid_format",format:"json",input:t,message:n.message}),x.NEVER}},encode:t=>JSON.stringify(t)}),m=u.Ay$.union([u.Ay$.number(),u.Ay$.string()]),w=u.Ay$.set(m),v=u.Ay$.object({ids:w}),S=u.Ay$.codec(f,v,{decode:t=>({ids:new Set(t.ids)}),encode:t=>({ids:Array.from(t.ids)})});u.Ay$.pipe(y,S);let E=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var j=n(997);function b(t,e,n){let[i,r,o]=t,[a,l]=e;return i*a+r*l+o*n}function D(t,e,n){return[b(function(t){let[[e],[n],[i]]=t;return[e,n,i]}(t),e,n),b(function(t){let[[,e],[,n],[,i]]=t;return[e,n,i]}(t),e,n)]}function k(t,e){let n=t.x+e.x,i=t.y+e.y;return{...t,x:n,y:i}}function T(t,e){let n=t.x-e.x,i=t.y-e.y;return{...t,x:n,y:i}}var O=n(304);let A=n(853).I3(function(t,e){return O._k.compare(t.x,e.x)||O._k.compare(t.y,e.y)}),N={x:0,y:0};function $(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,i="number"==typeof e?e:e instanceof Array?e[1]:e.y,r=t.x*n,o=t.y*i;return{...t,x:r,y:o}}function M(t,e,n,i){return{x:t,y:e,width:n,height:i}}let z={x:0,y:0,width:1,height:1};function L(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function C(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function R(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function F(t,e){return{...t,x:e.x,y:e.y}}function I(t){return function(t){let{x:e,y:n,width:i,height:r}=t;return`${e} ${n} ${i} ${r}`}(function(t,e){let{x:n,y:i,width:r,height:o}=t;return{x:e(n),y:e(i),width:e(r),height:e(o)}}(t,function(t){return Math.round(100*t)/100}))}function U(t){let{x:e,y:n,width:i,height:r}=t;return{tl:{x:e,y:n},br:{x:e+i,y:n+r}}}function H(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function W(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function Y(t){let[[e,n],[i,r]]=t;return{tl:{x:e,y:n},br:{x:i,y:r}}}function P(t,e){return[D(t,function(t){let[e]=t;return e}(e),0),D(t,function(t){let[,e]=t;return e}(e),0),D(t,function(t){let[,,e]=t;return e}(e),1)]}function q(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function Z(t,e,n,i){var r,o;return r=function(t,e){let[n,i]=e;return[q(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),q([-n,-i])].reduce(P)}("number"==typeof(o=e)?[o,o]:"x"in o?[o.x,o.y]:o,[n,i]),(0,j.Fs)(t,U,W,t=>(function(t,e){let[n,i]=t;return[e(n),e(i)]})(t,t=>D(r,t,1)),Y,H)}function V(t){return Math.round(100*t)/100}function B(t){return Math.round(1e7*t)/1e7}var G=n(510),K=n(437),X=n(967),_=n(282),J=n(92);let Q=[1,2,2.5,5,10,15,20,25,30,40,50];function tt(t){t.forEach(t=>t())}function te(t,e){t.forEach(t=>t(e))}let tn={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ti={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function tr(t){return void 0!==t&&"number"==typeof t}function to(t,e,n,i,r,o){return new DOMMatrixReadOnly(t instanceof Array?t:tr(t)&&tr(e)&&tr(n)&&tr(i)&&tr(r)&&tr(o)?[t,e,n,i,r,o]:void 0)}let ta={container:z,scroll:z,content:to(),svgOffset:{x:-0,y:-0},svgScale:1,svg:z};function tl(t){let{container:e,outer:n,svgScale:i,inner:r}=t,{x:o,y:a}=n;return{container:e,scroll:e,content:to(),svgOffset:{x:-o,y:-a},svgScale:i,svg:r}}function ts(t){let{scroll:e,content:n,svgOffset:i,svgScale:r,svg:o}=t;return to().translate(e.x,e.y).multiply(n).translate(-i.x,-i.y).scale(1/r,1/r).translate(-o.x,-o.y)}function td(t,e){let n=t.height,i=n*e;return M((t.width-i)/2,0,i,n)}function tc(t,e){let n=t.width,i=n/e;return M(0,(t.height-i)/2,n,i)}let tp={...ta,config:{fontSize:16,container:z,outer:z,inner:z,svgScale:1}};function tu(t,e){let n=C(t.scroll);return tx(t,e,e,n)}function tx(t,e,n,i){let r=ts(t).inverse().transformPoint(i),o=Z(t.scroll,[e,n],i.x,i.y),a=$(t.svgOffset,[e,n]),l=Z(t.svg,[e,n],r.x,r.y);return{...t,scroll:o,svgOffset:a,svg:l}}function th(t,e){var n,i;let r=C({...t.scroll,x:0,y:0}),o=(n=r.x,i=r.y,to().translate(n,i).rotate(e).translate(-n,-i)).multiply(t.content);return{...t,content:o}}function tg(t,e){let n=t.scroll,i=T($(e,-1),n);return(0,j.Fs)(t,t=>({...t,scroll:R(t.scroll,i)}),t=>{let e,i,r,o,a,l,s;return e=F(t.scroll,n),i=t.content.inverse(),o=k(r=C(t.scroll),T(t.scroll,n)),a=i.transformPoint(r),l=$(T(i.transformPoint(o),a),-t.svgScale),s=R(t.svg,l),{...t,scroll:e,svg:s}})}function tf(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,i=e.scrollTop,r=e.scrollWidth,o=e.scrollHeight;if(null===n)return!1;let a=r-t.width,l=o-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${r}, ${o}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),d=Math.round(-t.y);if(s<0||d<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),i!==d&&(e.scrollTop=d);let c=e.scrollLeft;if(Math.abs(c-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${c}`),!1;let p=e.scrollTop;return!(Math.abs(p-d)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${i} vs. real=${p}`),!1)}let ty={scroll:z,client:{width:0,height:0},timeStamp:0};function tm(t){let e=t.currentTarget;null!==e&&(ty={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})}let tw=(0,K.e)(tp),tv=(0,X.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,_.a)({zoom:(t,e)=>e.zoom}),updateRotate:(0,_.a)({}),updateSvgMatrix:(0,_.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return function(t){let{content:e,svgOffset:n,svgScale:i,svg:r}=t;return e.translate(-n.x,-n.y).scale(1/i,1/i).translate(-r.x,-r.y)}(e)}}),updateGeoMatrix:(0,_.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(d.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,_.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:i}=t,r=Math.max(n.width,n.height)/2*i,o=Math.round(Math.log10(r)),a=(e=r/Math.pow(10,o-1),Q.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/i}}(e)}}),updateScroll:(0,_.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:i,client:r}=e,o=n.geoMatrix,a={x:i.x+r.width/2,y:i.y+r.height/2};return o.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:i,client:r}=e,o=n.geoMatrix,a={x:i.x,y:i.y},l={x:i.x+r.width,y:i.y+r.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:tp,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:N,distanceRadius:{svg:0,client:0},geoRange:{start:N,end:N},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,_.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),t=>{let{event:e}=t;return tw.set(e.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,J.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:t=>{let{event:e}=t;return e}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}}},"STYLE.MODE":{actions:(0,_.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:(0,_.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,_.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,_.a)({animation:t=>{let{event:{animation:e}}=t;return null===e?"":function(t){let{matrix:e,origin:n}=t,i=to();return`
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
`}(e)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,_.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,_.a)({animation:null,animating:!1}),target:"Idle"}}}}}),tS=(0,J.c)(tv,{systemId:"system-viewer1"});function tE(t){tS.send(t)}function tj(t){return(0,G.d4)(tS,e=>t(e.context))}function tb(){tE({type:"STYLE.SCROLL",currentScroll:ty})}function tD(){return tj(t=>t.layout.container)}function tk(){return tj(t=>t.distanceRadius)}let tT=`
position: absolute;
left: 0;
top: 0;
`,tO=`
position: absolute;
right: 0;
top: 0;
`,tA=`
position: absolute;
left: 0;
bottom: 0;
`,tN=`
position: absolute;
right: 0;
bottom: 0;
`,t$=`
margin: 0;
`,tM=`
padding: 0;
`,tz=`
${t$} ${tM}
`,tL=`
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
`,tU=`
touch-action: none;
`,tH=`
pointer-events: none;
`,tW=`
pointer-events: initial;
`,tY=`
background-color: rgba(255, 255, 255, 0.5);
`,tP=`
cubic-bezier(0, 0, 0, 1)
`,tq=`
cubic-bezier(1, 0, 1, 1)
`,tZ=`
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
`,tV={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tB=n(473);let tG={init:new Set,rendered:new Set},tK=function(t){te(tG.init,t)},tX=function(){tt(tG.rendered)},t_=(0,K.e)(0),tJ=(0,X.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,_.a)({blobs:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.blobs.set(n,i))},urls:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.urls.set(n,URL.createObjectURL(i)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,_.a)({nfloors:t=>{let{event:e}=t;return e.nfloors},fidx:t=>{let{event:e}=t;return e.fidx}}),t=>{let{event:e}=t;return t_.set(e.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:[(0,_.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),t=>{let{event:e}=t;return t_.set(e.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:t=>{let{context:e}=t;return e.fidx===e.nfloors-1}},{actions:(0,tB.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx+1}})}],"LEVEL.DOWN":[{guard:t=>{let{context:e}=t;return 0===e.fidx}},{actions:(0,tB.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,_.a)({prevFidx:null}),target:"Idle"}}}}}),tQ=(0,J.c)(tJ);tQ.on("LOCK",t=>{let e,{fidx:n}=t;return e=n,te(tV.lock,e)});let t0=new Worker(new URL(n.p+n.u("968"),n.b),Object.assign({},{type:"module"},{type:void 0}));function t1(){var t;let{fidx:e,prevFidx:n,urls:i}=(t=t=>{let{fidx:e,prevFidx:n,urls:i}=t;return{fidx:e,prevFidx:n,urls:i}},(0,G.d4)(tQ,e=>t(e.context))),r=(0,l.useMemo)(()=>(function(t,e,n){let i=d.floorsConfig;if(void 0===i)return null;let r=i.floors.map((i,r)=>{var o,a,l,s,d,c,p;return o=t,a=e,l=n,(s=r)!=o||l?s===a?(d=s,`
.fidx-${d} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(c=s,`
.fidx-${c} {
  visibility: hidden;
}
  `):(p=s,`
.fidx-${p} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${r}
${tZ}
`})(e,n,void 0===i.get(e)),[e,n,i]),o=(0,l.useCallback)(t=>()=>{let n;return t!==e?void 0:(n=t,te(tV.selectDone,n))},[e]),a=(0,l.useCallback)(t=>()=>{let i;return null!==n||t===e?void 0:(i=t,te(tV.lock,i))},[e,n]);return{fidx:e,prevFidx:n,style:r,fidxToOnAnimationEnd:o,fidxToOnClick:a,urls:i}}t0.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:t,blob:n}=e;tQ.send({type:"IMAGE",fidx:t,blob:n})}}},t0.onerror=t=>{console.error("floors error",t)},t0.onmessageerror=t=>{console.error("floors messageerror",t)};var t5=n(284);function t2(){let t=tj(t=>t.rendered);(0,l.useEffect)(()=>{requestAnimationFrame(()=>tX())},[t]);let e=tj(t=>t.shown),n=tj(t=>t.appearing)?`
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
`:"",i=tj(t=>t.layout.scroll),r=`
.content {
  width: ${V(i.width)}px;
  height: ${V(i.height)}px;
}
`;return(0,p.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,r]})}let t3=new Map;function t6(t,e,n){(0,l.useEffect)(()=>(function(t,e,n){let i=void 0===n?document:t3.get(n)??null;if(null===i)return;let r=i.querySelector(`#${t}`)??null;if(null===r||null!==r.shadowRoot)return;let o=r.attachShadow({mode:"open"});t3.set(t,o),(0,t5.createRoot)(o).render(e)})(t,e,n),[t,n,e])}let t4={bus:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,p.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,p.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,p.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,p.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,p.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,p.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,p.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,p.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,p.jsx)("use",{x:"8.5",href:"#_person2"}),(0,p.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,p.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,p.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,p.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,p.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,p.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36,-36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,p.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,p.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,p.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,p.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,p.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,children:[(0,p.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,p.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,p.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,p.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,p.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,p.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,p.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,p.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,p.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,p.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,p.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,p.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,p.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,p.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,p.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(t){return(0,p.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,p.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,p.jsxs)("g",{fill:"white",stroke:"none",children:[(0,p.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,p.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,p.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function t7(){return(0,p.jsx)("g",{className:"assets",children:(0,p.jsx)(t8,{})})}function t8(){return(0,p.jsx)("g",{className:"symbols",children:Object.entries(t4).map((t,e)=>{let[n,i]=t;return(0,p.jsx)(l.Fragment,{children:i({id:n})},e)})})}function t9(t){return t>.5?-1:+(t<.5)}function et(t){return t<.3?1:t>.7?-1:0}function ee(t,e,n,i){let r={x:e/2,y:n/2},o=e/20,a=o/2;function l(e){var n;let i,r;return n={x:t.h,y:t.v},i=e.x*n.x,r=e.y*n.y,{...e,x:i,y:r}}let s=t.th<Math.PI/4,d=0===t.v,c=0===t.h,p=l($(r,-1)),u=l(d||c?T($(r,-1),{x:i,y:i}):T($(r,-1),{x:s?i:0,y:s?0:i})),[x,h]=c?[{x:-a,y:0},{x:a,y:0}]:d?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],g=k(p,x),f=k(p,h);return{p,q:u,a:g,b:f}}function en(t){return{open:t,animating:!1}}function ei(t){return t.open||t.animating?null:{open:!0,animating:!0}}function er(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function eo(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function ea(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function el(t){let{open:e,animating:n}=t;return e||n}let es={start:new Set,end:new Set,endDone:new Set},ed={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ec={p:N,psvg:N,fidx:0,layout:ta,info:{title:""}};function ep(t){return function(e,n){let i=e[n],r=t(i);return e[n]=null===r?i:r,e}}let eu=(0,X.mj)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return el(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return el(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,_.a)({canceling:()=>!0}),endCancel:(0,_.a)({canceling:()=>!1}),open:(0,_.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(ei)(n,i)}}),close:(0,_.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(eo)(n,i)}}),handle:(0,_.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return ep(n[i].open?er:ea)(n,i)}})}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,detail:ec,m:{header:en(!0),detail:en(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,_.a)({detail:t=>{let{event:{psvg:e,fidx:n,info:i,layout:r}}=t;return{psvg:e,p:ts(r).transformPoint(e),fidx:n,info:i,layout:r}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,J.n)("animationEnded")},{actions:(0,_.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,J.n)("isDetailVisible")},{actions:(0,_.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,J.n)("animationEnded")},{actions:(0,_.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,J.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,_.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tB.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,_.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,J.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,_.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,J.r)({type:"DONE"})]}}}}}),ex=(0,J.c)(eu);function eh(){return(0,G.d4)(ex,t=>t.context)}function eg(){return eh().m.header}function ef(){return eh().m.detail}function ey(t){return(0,p.jsxs)("div",{className:"balloon",children:[(0,p.jsx)(ew,{...t}),t.children,(0,p.jsx)("style",{children:em})]})}ex.on("CLOSE.DONE",()=>tt(ed.closeDone));let em=`
.balloon,
.balloon-svg {
  ${tT}
  ${tH}
  z-index: 10;
  will-change: opacity, transform;
}
`;function ew(t){let e=t._hv;if(null===e)return(0,p.jsx)("svg",{});let{viewBox:n,width:i,height:r,fg:o,bg:a}=function(t,e){let{bw:n,bh:i,lh:r,d:o,width:a,height:l}=e,s=M(-a/2,-a/2,a,l),{body:d,leg:c}=function(t,e,n,i){let r={x:e/2,y:n/2},o=`
m${-r.x},${-r.y}
h${e}
v${n}
h${-e}
z
`,{p:a,q:l,a:s,b:d}=ee(t,e,n,i),c=T(l,s),p=T(d,l),u=T(a,d);return{body:o,leg:`
m${s.x},${s.y}
l${c.x},${c.y}
l${p.x},${p.y}
l${u.x},${u.y}
z
`}}(t,n,i,r);return{viewBox:s,width:a,height:l,bg:`M${o},${o}`+d+`M${o},${o}`+c,fg:"M0,0"+d+"M0,0"+c}}(e,t._size);return(0,p.jsxs)("svg",{className:"balloon-svg",viewBox:I(n),width:i,height:r,children:[(0,p.jsx)("path",{className:"bg",d:a}),(0,p.jsx)("path",{className:"fg",d:o}),(0,p.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function ev(t){let{_p:e,_hv:n,_size:i,_leg:r}=t,o=ef(),a=null!==e&&null!==n&&el(o)?function(t,e,n,i,r){let{open:o,animating:a}=t,{width:l,height:s}=i,d=$(r.q,-1);if(a){let[t,n]=o?[0,1]:[1,0],[i,r]=o?[0,1]:[1,0],[a,c]=o?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[p,u]=o?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],x=o?tP:tq;return`
.detail,
.balloon {
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --dp-x: ${d.x}px;
  --dp-y: ${d.y}px;
  --oa: ${t};
  --ob: ${n};
  --sa: ${i};
  --sb: ${r};
  --timing: ${x};
  --dxa: ${a};
  --dxb: ${p};
  --dya: ${c};
  --dyb: ${u};
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
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --sb: 1;
  --dp-x: ${d.x}px;
  --dp-y: ${d.y}px;
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
`}(o,e,0,i,r):".balloon, .detail { visibility: hidden; }";return(0,p.jsx)("style",{children:a})}let eS={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},eE=()=>tt(eS.zoomIn),ej=()=>tt(eS.zoomOut),eb=()=>tt(eS.rotate),eD=()=>tt(eS.reset),ek=()=>tt(eS.recenter),eT={multiStart:new Set,multiEnd:new Set,zoom:new Set},eO=(0,K.e)("panning");eO.subscribe(t=>{let e;return e=t,te(ti.mode,e)});let eA=(0,X.mj)({types:{},guards:{isHoming:t=>{let{context:{animationReq:e}}=t;return null!==e&&"home"===e.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>d.isMapRendered(),isUiRendered:()=>d.isUiRendered()},actions:{setRendered:(0,_.a)({rendered:!0}),emitGetScroll:(0,tB.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tB.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNC",pos:e.scroll}}),emitSyncScrollSync:(0,tB.a)(t=>{let{context:{layout:e}}=t;return{type:"SCROLL.SYNCSYNC",pos:e.scroll}}),calcZoomAnimation:(0,_.a)({animation:t=>{var e,n,i,r,o,a,l,s,c,p,u,x,h;let g,f,y,m,w,v,S,E,{context:{animationReq:j,layout:b}}=t;return null===j?null:"zoom"===j.type?(e=b,n=j.z,i=j.p,g=ts(e).inverse().transformPoint(i),f=1/(r=n,Math.pow(d.zoomFactor,r)),y=to().scale(1/f,1/f),{type:"Zoom",svg:Z(e.svg,f,g.x,g.y),svgScale:e.svgScale*f,q:y,o:i}):"home"===j.type?(o=b,m=C((a=function(t){let{config:e,content:n}=t;return{config:e,...tl(e),content:n}}(b)).config.inner),w=ts(o).transformPoint(m),v=a.svgScale/o.svgScale,E=(function(t,e){if(t instanceof DOMMatrixReadOnly)return to(1,0,0,1,t.e,t.f);if("number"==typeof t&&"number"==typeof e)return to(1,0,0,1,t,e);throw Error("dommatrixreadonlyTranslateOnly")})((S=C(o.container)).x-w.x,S.y-w.y).multiply((l=1/v,s=1/v,c=w.x,p=w.y,to().scale(l,s,1,c,p,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:E,o:null}):(u=0,x=90,h=j.p,{type:"Rotate",deg:90,q:to().rotate(90),o:h})}}),updateLayoutFromZoom:(0,_.a)({prevLayout:t=>{let{context:{layout:e}}=t;return e},layout:t=>{let{context:{layout:e,animation:n}}=t;return function(t,e){var n,i,r;return null===e?t:"Move"===e.type?(n=e.move,{...t,scroll:F(t.scroll,n)}):"Zoom"===e.type?(i=e.svg,r=e.svgScale,{...t,svg:i,svgScale:r}):th(t,e.deg)}(e,n)}}),endZoom:(0,_.a)({prevLayout:null,animation:null,zoom:t=>{let{context:{zoom:e,animationReq:n}}=t;return e*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:t=>{let{context:{rotate:e,animationReq:n}}=t;return e+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,_.a)({cursor:t=>{let{context:{origLayout:e}}=t;return C(e.container)},layout:t=>{let{context:{origLayout:e,rotate:n}}=t;return th(tu(e,9),n)}}),emitSyncAnimation:(0,tB.a)(t=>{let{context:{animation:e}}=t;return{type:"SYNC.ANIMATION",animation:e}}),emitZoomStart:(0,tB.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.START",layout:e,zoom:n}}),emitZoomEnd:(0,tB.a)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.END",layout:e,zoom:n}}),resetCursor:(0,_.a)({cursor:t=>{let{context:{layout:e}}=t;return C(e.container)}}),resizeLayout:(0,_.a)({rendered:!1,origLayout:(t,e)=>{let{layout:n}=e;return n},layout:(t,e)=>{let{layout:n}=e;return tu(n,9)}}),updateLayoutFromScroll:(0,_.a)({layout:t=>{let{context:e}=t,{scroll:n}=ty;return tg(e.layout,n)}}),emitSyncLayout:(0,tB.a)(t=>{let{context:{layout:e,rendered:n}}=t;return{type:"SYNC.LAYOUT",layout:e,force:n}}),emitSearchStart:(0,tB.a)(t=>{let{context:{layout:e,cursor:n}}=t,{scroll:i}=ty;return{type:"SEARCH.START",req:{psvg:ts(tg(e,i)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,tB.a)((t,e)=>{let{context:n}=t,{res:i}=e,{scroll:r}=ty,o=tg(n.layout,r);return{type:"SEARCH.END.DONE",res:null===i?null:{...i,layout:o}}}),emitSwitch:(0,tB.a)((t,e)=>{let{fidx:n}=e;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,tB.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:tp,prevLayout:null,layout:tp,cursor:C(tp.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,J.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"Resizing"},SEARCH:{actions:(0,_.a)({cursor:t=>{let{event:{pos:e}}=t;return e}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,_.a)({animationReq:t=>{let{context:{layout:e},event:{z:n,p:i}}=t;return{type:"zoom",z:n,p:i??C(e.container)}}}),target:"Zooming"},HOME:{actions:(0,_.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,_.a)({animationReq:t=>{let{context:{layout:e}}=t;return{type:"rotate",deg:90,p:C(e.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,_.a)({animationReq:null}),type:"final"}}}}}),eN=(0,J.c)(eA,{systemId:"system-viewer1"});function e$(t){eN.send(t)}eN.on("SEARCH.START",t=>{let e,{req:n}=t;return e=n,te(es.start,e)}),eN.on("SEARCH.END.DONE",t=>{let e,n,{res:i}=t;null===i?eN.send({type:"SEARCH.DONE"}):(e=i,te(es.endDone,e),n=i.psvg,te(ed.open,n))}),eN.on("ZOOM.START",t=>{let e;return e=t,te(ti.zoomStart,e)}),eN.on("ZOOM.END",t=>{let e;return e=t,te(ti.zoomEnd,e)}),eN.on("SWITCH",t=>{let e,{fidx:n}=t;return e=n,te(tV.select,e)}),eN.on("SWITCH.DONE",()=>tt(tV.unlock)),eN.on("SYNC.ANIMATION",t=>{let e,{animation:n}=t,i=(null==n?void 0:n.q)??null,r=(null==n?void 0:n.o)??null;null!==i&&(e={matrix:i,origin:r},te(ti.animation,e))}),eN.on("SYNC.LAYOUT",t=>{let e,{layout:n,force:i}=t;return e={layout:n,force:i},te(ti.layout,e)}),eN.on("SCROLL.SYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.sync,e)}),eN.on("SCROLL.SYNCSYNC",t=>{let e,{pos:n}=t;return e=n,te(tn.syncSync,e)}),eN.on("SCROLL.GET",()=>tt(tn.get));let eM=!1,ez=!1;function eL(t){eM="locked"===t,ez="locked"===t}function eC(){let t=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",eR),()=>{e.removeEventListener("wheel",eR)}},[t]),t}function eR(t){let e=t.currentTarget;ez&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function eF(t){let e,{_detail:n}=t,i=eC();return(0,p.jsxs)("div",{ref:i,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void ex.send(t)},children:[d.renderInfo&&(1!==(e=Object.values(n.info)).length||"string"!=typeof e[0]||""!==e[0])&&d.renderInfo({info:n.info}),(0,p.jsx)("style",{children:eI})]})}let eI=`
.detail {
  ${tT}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${tW}
  ${tL}
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
`;function eU(){return t6("detail",(0,p.jsx)(eH,{}),"ui"),(0,p.jsx)("div",{id:"detail"})}function eH(){return(0,p.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,p.jsx)(eW,{}),(0,p.jsx)(eY,{})]})}function eW(){let t,e,n,i,r,o,a,l,s,d,c,u,x=eh().detail,h=(o=x.p,a=x.layout,l=function(t,e){let{x:n,y:i}=e,r=t.width/t.height,o={x:n/t.width,y:i/t.height},a=r>1?t9(o.x):et(o.x);return{h:a,v:r>1?et(o.y):t9(o.y),th:Math.atan2(t.height,t.width)}}(x.layout.container,o),s=a.container.width,e=50*(t=.01*Math.min(s,d=a.container.height)),n=50*t,i=10*t,r=e/100,u=ee(l,(c={bw:e,bh:n,lh:i,d:r,width:e+2*i+2*r,height:n+2*i+2*r}).bw,c.bh,c.lh),{_p:o,_hv:l,_W:s,_H:d,_size:c,_leg:u});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(ey,{...h}),(0,p.jsx)(eF,{_detail:x}),(0,p.jsx)(ev,{...h})]})}function eY(){return(0,p.jsx)("svg",{id:"ui-svg-defs",children:(0,p.jsx)("defs",{children:(0,p.jsx)(t7,{})})})}function eP(){return t6("footer",(0,p.jsx)(eq,{}),"ui"),(0,p.jsx)("div",{id:"footer"})}function eq(){let t=d;return(0,p.jsxs)("div",{className:"ui-content footer",children:[(0,p.jsx)("p",{children:t.copyright}),(0,p.jsxs)("style",{children:[eZ,(0,p.jsx)(eV,{})]})]})}let eZ=`
.footer {
  ${tA}
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
`;function eV(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tP:tq;return(0,p.jsx)(p.Fragment,{children:`
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
`})}function eB(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("g",{id:"measure",children:(0,p.jsx)(eX,{})})})}function eG(){let{svg:t}=tk();return(0,p.jsxs)("div",{id:"distance",children:[(0,p.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),e0.map(e=>(0,p.jsxs)(l.Fragment,{children:[(0,p.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,p.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,p.jsx)("style",{children:(0,p.jsx)(eQ,{})})]})}function eK(){let t=tj(t=>t.geoPoint),e=t.x>0?"E":"W",n=t.y>0?"N":"S",i=`${e} ${B(Math.abs(t.x))}`,r=`${n} ${B(Math.abs(t.y))}`;return(0,p.jsxs)("div",{id:"coordinate",children:[(0,p.jsx)("p",{id:"longitude",children:i}),(0,p.jsx)("p",{id:"latitude",children:r}),(0,p.jsx)("style",{children:(0,p.jsx)(eJ,{})})]})}function eX(){let{width:t,height:e}=tD(),{client:n}=tk(),i=(0,l.useMemo)(()=>`M0,${e/2} h${t}`,[e,t]),r=(0,l.useMemo)(()=>`M${t/2},0 v${e}`,[e,t]),o=(0,l.useMemo)(()=>e0.map(i=>(function(t){let{width:e,height:n,r:i}=t;return`M${e/2},${n/2} m-${i},0 a${i},${i} 0,1,0 ${2*i},0 a${i},${i} 0,1,0 -${2*i},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(i+1)})),[n,e,t]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),(0,p.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),o.map((t,e)=>(0,p.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function e_(){let{open:t,animating:e}=eg(),[n,i]=t?[0,1]:[1,0],r=e?`
.guides {
  --timing: ${t?tP:tq};
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
`;return(0,p.jsx)(p.Fragment,{children:r})}function eJ(){let{width:t,height:e}=tD(),n=`
#distance,
#coordinate {
  ${tT}
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
`,r=`
#latitude {
  ${tA}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,p.jsxs)(p.Fragment,{children:[n,i,r]})}function eQ(){let{width:t,height:e}=tD(),{client:n}=tk(),i=`
.distance {
  ${tT}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,r=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,o=e0.map(i=>`
#distance-x-${i+1} {
  transform: translate(${t/2+n*(i+1)}px, ${e/2}px) scale(0.5);
}
`),a=e0.map(i=>`
#distance-y-${i+1} {
  transform: translate(${t/2}px, ${e/2+n*(i+1)}px) scale(0.5);
}
`);return(0,p.jsxs)(p.Fragment,{children:[r,i,o,a]})}let e0=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function e1(){return t6("guides",(0,p.jsx)(e5,{}),"ui"),(0,p.jsx)("div",{id:"guides"})}function e5(){var t;return!((null==(t=d.uiConfig)?void 0:t.showGuides)??!0)||d.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"ui-content guides",children:[(0,p.jsx)("svg",{className:"guides",children:(0,p.jsx)(eB,{})}),(0,p.jsx)(eG,{}),(0,p.jsx)(eK,{}),(0,p.jsxs)("style",{children:[e2,(0,p.jsx)(e_,{})]})]})}let e2=`
.guides {
  ${tT}
  ${tC}
  ${tH}
  z-index: 2;
}

text {
  ${tI}
}
`;function e3(){let{fidx:t,fidxToOnClick:e}=t1(),n=d.floorsConfig;return void 0===n||n.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{className:"floors",children:[(0,p.jsx)("ul",{className:"floor-list",children:n.floors.map((n,i)=>{let{name:r}=n;return(0,p.jsx)("li",{className:`floor-item ${e8(i===t)}`,onClick:e(i),children:r},i)})}),(0,p.jsx)("style",{children:e6})]})}let e6=`
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
`;function e4(){let{fidx:t}=t1(),e=d.floorsConfig;return void 0===e||e.floors.length<2?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)("div",{children:[e.floors.map((e,n)=>(0,p.jsx)("h2",{className:`floor-name ${e8(n===t)}`,children:e.name},n)),(0,p.jsx)("style",{children:e7})]})}let e7=`
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
`;function e8(t){return t?"selected":"unselected"}function e9(){return t6("header",(0,p.jsx)(nt,{}),"ui"),(0,p.jsx)("div",{id:"header"})}function nt(){let t=d;return(0,p.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void ex.send(t)},children:[(0,p.jsx)("h1",{className:"title",onClick:()=>eD(),children:t.title}),(0,p.jsx)(e4,{}),(0,p.jsxs)("style",{children:[ne,(0,p.jsx)(nn,{})]})]})}let ne=`
.header {
  ${tT}
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

`;function nn(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tP:tq;return(0,p.jsx)(p.Fragment,{children:`
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
`})}function ni(){return t6("left",(0,p.jsx)(nr,{}),"ui"),(0,p.jsx)("div",{id:"left"})}function nr(){return(0,p.jsxs)("div",{className:"ui-content left bottom",children:[(0,p.jsx)(e3,{}),(0,p.jsxs)("style",{children:[no,(0,p.jsx)(na,{})]})]})}let no=`
.left {
  ${tT}
  ${tF}
  padding: 0.4em;
  font-size: smaller;
  ${tH}
}

.left {
  top: initial;
  align-items: end;
}
`;function na(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tP:tq;return(0,p.jsx)(p.Fragment,{children:`
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
`;function nd(){return(0,p.jsx)("div",{className:"button-item home",onClick:()=>eD(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nc})})})}let nc=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function np(){return d.mapCoord.matrix.isIdentity?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"button-item position",onClick:()=>tt(eS.position),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nh})})})}let nu=3*Math.sqrt(2),nx=nu+6,nh=`
M 0,0
m 0,${nx/2}
l -3,-3
a ${nu},${nu} 0,1,1 6,0
z
m 0,${-nx+nu+nu/2}
a ${nu/2},${nu/2} 0,1,0 0,${-nu}
a ${nu/2},${nu/2} 0,1,0 0,${nu}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function ng(){return(0,p.jsx)("div",{className:"button-item recenter",onClick:()=>ek(),children:(0,p.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,p.jsx)("path",{d:nf})})})}let nf=`
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
`;function nj(){return t6("right",(0,p.jsx)(nb,{}),"ui"),(0,p.jsx)("div",{id:"right"})}function nb(){return(0,p.jsxs)("div",{className:"ui-content right bottom",children:[(0,p.jsx)(nk,{}),(0,p.jsx)("style",{children:nD})]})}let nD=`
.right {
  ${tO}
  ${tF}
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
`;function nk(){return(0,p.jsxs)("div",{className:"button",children:[(0,p.jsx)(np,{}),(0,p.jsx)(nd,{}),(0,p.jsx)(nl,{}),(0,p.jsx)(ng,{}),(0,p.jsx)(ny,{}),(0,p.jsx)(nS,{}),(0,p.jsx)(nw,{}),(0,p.jsxs)("style",{children:[nT,(0,p.jsx)(nO,{})]})]})}let nT=`
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
`;function nO(){let{open:t,animating:e}=eg();if(e){let[e,n]=t?[0,1]:[1,0],i=t?tP:tq;return(0,p.jsx)(p.Fragment,{children:`
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
`})}function nA(){return t6("screen",(0,p.jsx)(nN,{}),"ui"),(0,p.jsx)("div",{id:"screen"})}function nN(){let t=eC();return(0,p.jsx)("div",{ref:t,className:"ui-content screen",onClick:()=>tt(ed.close),children:(0,p.jsxs)("style",{children:[n$,(0,p.jsx)(nM,{})]})})}let n$=`
.screen {
  ${tT}
  ${tC}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nM(){let{open:t,animating:e}=ef(),n=tj(t=>t.animating);if(!e)return t?(0,p.jsx)(p.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,p.jsx)(p.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,p.jsx)(p.Fragment,{children:".screen { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],i=t?tP:tq;return(0,p.jsx)(p.Fragment,{children:`
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
`})}}function nz(){return t6("ui",(0,p.jsx)(nL,{})),(0,p.jsx)("div",{id:"ui"})}function nL(){return(0,p.jsxs)("div",{className:"ui",children:[(0,p.jsx)(nA,{}),(0,p.jsx)(e9,{}),(0,p.jsx)(eP,{}),(0,p.jsx)(ni,{}),(0,p.jsx)(nj,{}),(0,p.jsx)(e1,{}),(0,p.jsx)(eU,{})]})}function nC(){var t,e,n;let i;return null!==(i=(null==(n=document.querySelector("#ui"))||null==(e=n.shadowRoot)||null==(t=e.children)?void 0:t.length)??null)&&i>0}function nR(){ek()}var nF=n(469),nI=n(336),nU=n(5);let nH=nF.OZ(A),nW=nI.aU(O._k),nY=nI.tf(),nP=nI.JI(O.Eq,nF.CA());function nq(t){return(0,j.Fs)(t,nI.zu(nH),nF.x1(t=>0===t.length?nU.dv:nU.zN(t[0])))}function nZ(t){let e;return t.length<2||null===(e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y})))?null:$(e,1/t.length)}function nV(t){return new Map((0,j.Fs)(t.changedTouches,Array.from,nF.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let nB=(0,X.mj)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z}},actions:{updateTouches:(0,_.a)({touches:t=>{var e;let n,i,r,a,l,s,d,c,p,{context:{touches:u},event:x}=t;return"TOUCH.START"===x.type?(e=x.ev,r=nZ(i=nq(n=nP.concat(u.vecs,nV(e)))),l=2!==i.length?null:.5>Math.abs((a=T(i[0],i[1])).y/a.x),{...u,vecs:n,points:i,cursor:r,horizontal:l}):"TOUCH.MOVE"===x.type?function(t,e,n){var i,r,a,l;let s,d=nV(e),c=nW.mapWithIndex(t.vecs,(t,e)=>(0,j.Fs)(d.get(t),nU.k$,nU.AU(()=>e,nF.xW(e)))),p=nq(c),u=nZ(p),[x,h]=p;if(null===u||x===o||h===o)return{...t,vecs:c,points:p,cursor:u};let g=(i=t.dists,r=Math.sqrt((a=x,l=h,Math.pow(a.x-l.x,2)+Math.pow(a.y-l.y,2))),s=Math.pow((i.length>0?i[0]:r)-r,2),0===i.length||s>0?[r,...i]:i),f=function(t){let[e,n,i,r]=t;return e===o||n===o||i===o||r===o?null:e<n&&n<i&&i<r?-1:e>n&&n>i&&i>r?1:null}(g);return{vecs:c,points:p,cursor:u,dists:g,z:f,horizontal:t.horizontal}}(u,x.ev,0):"TOUCH.END"===x.type?(s=nV(x.ev),p=nZ(c=nq(d=nY.filterMapWithIndex(u.vecs,(t,e)=>s.has(t)?nU.dv:nU.zN(e)))),{vecs:d,points:c,cursor:p,dists:0===d.size?[]:u.dists,z:0===d.size?null:u.z,horizontal:u.horizontal}):u}}),raiseOp:(0,J.r)(t=>{let{event:e}=t;return"TOUCH.START"===e.type?{type:"STARTED"}:"TOUCH.MOVE"===e.type?{type:"MOVED"}:"TOUCH.END"===e.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,_.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),emitMulti:(0,tB.a)(t=>{let{context:{touches:e}}=t;return{type:"MULTI",touches:e}}),emitZoom:(0,tB.a)(t=>{let{context:{touches:e}}=t;return{type:"ZOOM",touches:e}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),nG=(0,J.c)(nB),nK=!1;function nX(t){nG.send({type:"TOUCH.START",ev:t})}function n_(t){nG.send({type:"TOUCH.MOVE",ev:t})}function nJ(t){nG.send({type:"TOUCH.END",ev:t})}function nQ(){nG.send({type:"CANCEL"})}function n0(t){eM||e$({type:"SEARCH",pos:{x:t.pageX,y:t.pageY}})}function n1(t){let e;null!==t&&(e=t,te(tn.eventTick,e))}function n5(t){return(0,p.jsxs)("div",{id:"viewer",className:"container",onTouchStart:nX,onTouchMove:n_,onTouchEnd:nJ,onClick:n0,onContextMenu:nR,onScroll:n1,onAnimationEnd:t=>{var e;(e={type:"ANIMATION.END",ev:t}).ev.stopPropagation(),e$(e),tt(ti.animationEnd)},children:[t.children,(0,p.jsx)(n2,{})]})}function n2(){let t=`
.container {
  ${tT}
  ${tC}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{children:t}),(0,p.jsx)(n3,{}),(0,p.jsx)(n6,{}),(0,p.jsx)(n4,{})]})}function n3(){let t=tj(t=>t.layout.content),e=`
.content {
  ${tT}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,p.jsx)("style",{children:e})}function n6(){let t=tj(t=>t.animation);return(0,p.jsx)("style",{children:t})}function n4(){let{style:t}=t1();return null===t?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("style",{children:t})}function n7(){return null!==document.querySelector(".container")}nG.on("MULTI",t=>{let{touches:e}=t;2===e.vecs.size?(nK=!0,tt(eT.multiStart)):(tt(eT.multiEnd),nK=!1)}),nG.on("ZOOM",t=>{let e,{touches:n}=t,i=n.cursor,r=n.z;null!==i&&null!==r&&(e={z:r>0?1:-1,p:i},te(eT.zoom,e))});var n8=n(751);async function n9(t){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){n(t)},{enableHighAccuracy:!0,timeout:t,maximumAge:0})})}let it=(0,X.mj)({types:{events:{},emitted:{}},actors:{api:(0,n8.Sx)(()=>n9(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,_.a)({position:t=>{let{event:e}=t;return e.output}}),(0,tB.a)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,_.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),ie=(0,J.c)(it),ii=(0,X.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tB.a)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tB.a)(t=>{let{event:e}=t;return e}),target:"Done"}}},Done:{always:"Idle"}}}),ir=(0,J.c)(ii);function io(t){ir.send(t)}ir.on("SEARCH",t=>{let{req:{psvg:e}}=t,n=d.mapCoord.matrix.inverse().transformPoint(e),i=t_.get();ia.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:i}})}),ir.on("SEARCH.DONE",t=>{let e,{res:n}=t;return e=n,te(es.end,e)});let ia=new Worker(new URL(n.p+n.u("147"),n.b),Object.assign({},{type:"module"},{type:void 0}));function il(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}ia.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":io({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let i;n=e.res,null===(i=d.getSearchInfo(n,d.mapMap,d.osmSearchEntries))?(console.log("info not found!",n),io({type:"SEARCH.DONE",res:null})):io({type:"SEARCH.DONE",res:{psvg:d.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:i}});break;case"SEARCH.ERROR":console.log("search error!",e.error),io({type:"SEARCH.DONE",res:null})}},ia.onerror=t=>{console.error("search error",t)},ia.onmessageerror=t=>{console.error("search messageerror",t)};let is=(0,X.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:t=>{let{event:{key:e}}=t;return"r"===e},shouldRecenter:t=>{let{event:{key:e}}=t;return"c"===e},shouldRotate:t=>{let{event:{key:e}}=t;return"t"===e},shouldZoom:t=>{let{event:{key:e}}=t;return 0!==il(e)},shouldFloorLevelUp:t=>{let{event:{key:e}}=t;return"u"===e},shouldFloorLevelDown:t=>{let{event:{key:e}}=t;return"d"===e}},actions:{reset:(0,tB.a)({type:"RESET"}),recenter:(0,tB.a)({type:"RECENTER"}),rotate:(0,tB.a)({type:"ROTATE"}),zoom:(0,tB.a)((t,e)=>{let{z:n}=e;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tB.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tB.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,_.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:r}=t;return{shift:"Shift"===e||n,alt:"Alt"===e||i,control:"Control"===e||r}})(e.mod,n.key)}}),handleUp:(0,_.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:r}=t;return{shift:"Shift"!==e&&n,alt:"Alt"!==e&&i,control:"Control"!==e&&r}})(e.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:t=>{let{event:{key:e}}=t;return{z:il(e)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),id=(0,J.c)(is);id.on("RESET",eD),id.on("RECENTER",ek),id.on("ROTATE",eb),id.on("ZOOM.IN",eE),id.on("ZOOM.OUT",ej),id.on("FLOOR.LEVEL.UP",()=>tt(tV.levelUp)),id.on("FLOOR.LEVEL.DOWN",()=>tt(tV.levelDown));let ic=(0,X.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:z,next:z,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,_.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,J.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:t=>{let{context:e}=t;return console.log("resize: ignoring height-only change",e)},target:"Idle"},{guard:t=>{let{context:e}=t;return!L(e.prev,e.next)},actions:[(0,_.a)({waited:0}),(0,tB.a)(t=>{var e,n,i,r;let o,a,{context:l}=t;return{type:"LAYOUT",layout:(e=d.fontSize,n=l.next,o=C((r={config:i=function(t,e,n,i){var r;let o,a,l,s,{outer:d,scale:c}=(r=i??n,o=e.width/e.height,s=(l=o>(a=r.width/r.height))?td(e,a):tc(e,a),{outer:s,inner:l?td(r,o):tc(r,o),scale:l?r.height/e.height:r.width/e.width,rO:o,rI:a,v:l});return{fontSize:t,container:e,outer:d,inner:i??n,svgScale:c}}(e,n,d.origViewBox,d.origBoundingBox),...tl(i)}).scroll),a=r.container.width/r.container.height,tx(r,a<1?1/a:1,a<1?1:+a,o)),force:!l.first}}),(0,_.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,_.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,J.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:t=>{let{context:{next:e}}=t;return L(e,tw.get().container)},actions:(0,_.a)({prev:t=>{let{context:{next:e}}=t;return e}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),ip=(0,J.c)(ic);ip.on("LAYOUT",t=>{let e;return e=t,te(ti.resize,e)}),window.addEventListener("resize",()=>{ip.send({type:"RESIZE"})});let iu=(0,X.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,_.a)({ticked:!1}),set:(0,_.a)({ticked:!0}),expire:(0,tB.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ix=(0,X.mj)({types:{},actions:{getScroll:(0,_.a)({scroll:()=>(function(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,i=t.scrollWidth,r=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),M(e,n,i,r)}return null})()}),syncScroll:(t,e)=>{let{pos:n}=e;return tf(n)}},actors:{syncScrollLogic:(0,n8.Sx)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!tf(e))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,tB.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,_.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,tB.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,_.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),ih=(0,J.c)(ix,{systemId:"system-scroll1"});function ig(t){ih.send(t)}ih.on("SCROLL.GET.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.getDone,e)}),ih.on("SCROLL.SYNCSYNC.DONE",t=>{let e,{scroll:n}=t;return e=n,te(tn.syncSyncDone,e)});let iy=(a=()=>tt(tn.eventExpire),i=iu.provide({delays:{DURATION:500}}),(r=(0,J.c)(i)).on("EXPIRE",a),r.start(),{tick:function(){r.send({type:"TICK"})}}),im=(0,K.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function iw(t){var e;t.getMapNames&&(e=t.getMapNames({data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig}),im.trigger.set({names:e}))}async function iv(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let iS=`
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
  ${tT}
  ${tC}
  ${tz}
  ${tL}
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

${E}
`,iE=function(){var t;let e=(null==(t=d.cartoConfig)?void 0:t.backgroundColor)??d.backgroundColor??"darkgray",n={data:d,render:d,carto:d.cartoConfig,floors:d.floorsConfig};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n5,{...n,children:d.renderMap(n)}),(0,p.jsx)(nz,{}),(0,p.jsxs)("style",{children:[iS,`body { background-color: ${e}; }`]})]})};function ij(t){let{origViewBox:e,url:n}=t;return(0,p.jsx)("image",{href:n,x:e.x,y:e.y,width:e.width,height:e.height})}function ib(t){let{origViewBox:e,url:n,labels:i}=t;return void 0===i?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("svg",{href:n,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:I(e),children:i.map((t,e)=>(0,p.jsxs)("text",{...iT(t.attrs),children:["id"in t.attrs&&"style"in t.attrs&&(0,p.jsx)("style",{children:`#${t.attrs.id} { ${t.attrs.style}; }`}),t.children&&t.children.map((t,e)=>(0,p.jsx)("tspan",{...iT(t.attrs),children:t.text??""},e))]},e))})}let iD=/^[{].*$/,ik=/^style$/;function iT(t){return Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return!e.match(iD)&&!e.match(ik)}).map(t=>{var e;let[n,i]=t;return[!(e=n).match(/^.*-.*$/)||e.match(/^(aria|data)-.*$/)?e:e.split("-").map((t,e)=>{var n;let i;return 0===e?t:(i=(n=t).match(/^(.)(.*)$/))?`${i[1].toUpperCase()}${i[2]}`:n}).join(""),i]}))}var iO=JSON.parse('{"2F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"サーティワン アイスクリーム","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text4","style":"font-size:9.44882px;display:inline","x":"2787.5996","y":"998.41638"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan3","x":"2787.5996","y":"998.41638"},"text":"サーティワン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan4","x":"2787.5996","y":"1013.4884"},"text":"アイスクリーム"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"新橋　まこちゃん","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text6","style":"font-size:9.44882px;display:inline","x":"2673.3665","y":"1010.5534"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan5","x":"2673.3665","y":"1010.5534"},"text":"新橋"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan6","x":"2673.3665","y":"1025.6255"},"text":"まこちゃん"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"とんかつ檍","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text7","style":"font-size:9.44882px;display:inline","x":"2620.6196","y":"1017.2889"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan7","x":"2620.6196","y":"1017.2889"},"text":"とんかつ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2620.6196","y":"1032.361","id":"tspan79"},"text":"檍"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"羅家 東京豚饅","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text9","style":"font-size:9.44882px;display:inline","x":"2569.9602","y":"1024.5345"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan8","x":"2569.9602","y":"1024.5345"},"text":"羅家"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan9","x":"2569.9602","y":"1039.6066"},"text":"東京豚饅"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"おにぎり戸越屋","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text10","style":"font-size:9.44882px;display:inline","x":"2518.5298","y":"1031.4921"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan10","x":"2518.5298","y":"1031.4921"},"text":"おにぎり"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2518.5298","y":"1046.5641","id":"tspan80"},"text":"戸越屋"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Soup Stock Tokyo","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text40","style":"font-size:9.44882px;display:inline","x":"2461.2639","y":"1025.584"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan11","x":"2461.2639","y":"1025.584"},"text":"Soup"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan12","x":"2461.2639","y":"1039.7572"},"text":"Stock"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan40","x":"2461.2639","y":"1053.9304"},"text":"Tokyo"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"どうとんぼり神座","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text41","style":"font-size:13.2283px;display:inline","x":"2330.5967","y":"1023.2877"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan41","x":"2330.5967","y":"1023.2877","style":"font-size:13.2283px"},"text":"どうとんぼり"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2330.5967","y":"1044.3885","id":"tspan81","style":"font-size:13.2283px"},"text":"神座"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"セブン-イレブン","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text42","style":"font-size:18.8976px;display:inline","x":"2216.8967","y":"1026.2222"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan42","x":"2216.8967","y":"1026.2222"},"text":"セブン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2216.8967","y":"1056.3662","id":"tspan82"},"text":"イレブン"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"L\'Atelier du Pain","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text45","style":"font-size:13.2283px;display:inline","x":"2068.2686","y":"1033.8206"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan43","x":"2068.2686","y":"1033.8206","style":"font-size:13.2283px"},"text":"L\'Atelier"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan44","x":"2068.2686","y":"1053.663","style":"font-size:13.2283px"},"text":"du"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan45","x":"2068.2686","y":"1073.5055","style":"font-size:13.2283px"},"text":"Pain"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"マーキーズ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text46","style":"font-size:15.1181px;display:inline","x":"1853.8854","y":"1081.0035"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan46","x":"1853.8854","y":"1081.0035","style":"font-size:15.1181px"},"text":"マーキーズ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Cath Kidston","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text48","style":"font-size:15.1181px;display:inline","x":"1714.8224","y":"1075.2797"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan47","x":"1714.8224","y":"1075.2797","style":"font-size:15.1181px"},"text":"Cath"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan48","x":"1714.8224","y":"1097.9568","style":"font-size:15.1181px"},"text":"Kidston"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ANTIDOTE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text49","style":"font-size:15.1181px;display:inline","x":"1560.8635","y":"1090.3881"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan49","x":"1560.8635","y":"1090.3881","style":"font-size:15.1181px"},"text":"ANTIDOTE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"TULLY\'S COFFEE ＆TEA","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text52","style":"font-size:11.3386px;display:inline","x":"1442.4896","y":"1077.2101"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan50","x":"1442.4896","y":"1077.2101","style":"font-size:11.3386px"},"text":"TULLY\'S"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan51","x":"1442.4896","y":"1094.218","style":"font-size:11.3386px"},"text":"COFFEE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan52","x":"1442.4896","y":"1112.3044","style":"font-size:11.3386px"},"text":"＆TEA"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"NATURE&MEAT GROVE PARK VIEW","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text56","style":"font-size:9.44882px;display:inline","x":"1334.7532","y":"1071.632"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan53","x":"1334.7532","y":"1071.632","style":"font-size:9.44882px"},"text":"NATURE&MEAT"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan54","x":"1334.7532","y":"1085.8052","style":"font-size:9.44882px"},"text":"GROVE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan55","x":"1334.7532","y":"1099.9784","style":"font-size:9.44882px"},"text":"PARK"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan56","x":"1334.7532","y":"1114.1516","style":"font-size:9.44882px"},"text":"VIEW"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Standard Products","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text58","style":"font-size:18.8976px;display:inline","x":"1517.7758","y":"931.86243"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan57","x":"1517.7758","y":"931.86243"},"text":"Standard"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan58","x":"1517.7758","y":"960.2088"},"text":"Products"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"TSUTAYA BOOKSTORE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text60","style":"font-size:18.8976px;display:inline","x":"1816.5016","y":"925.35767"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1816.5016","y":"925.35767","id":"tspan85"},"text":"TSUTAYA BOOKSTORE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"スターバックス（TSUTAYA BOOKSTORE）","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text62","style":"font-size:18.8976px;display:inline","x":"1816.063","y":"956.09363"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan62","x":"1816.063","y":"956.09363"},"text":"スターバックス"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pet Plus Trimming Salon","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text66","style":"font-size:9.44882px;display:inline","x":"1264.4543","y":"811.8501"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan64","x":"1264.4543","y":"811.8501"},"text":"Pet Plus"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan65","x":"1264.4543","y":"826.02332"},"text":"Trimming"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan66","x":"1264.4543","y":"840.19653"},"text":"Salon"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pet Plus","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text68","style":"font-size:17.0079px;display:inline","x":"1336.2533","y":"769.30249"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan68","x":"1336.2533","y":"769.30249","style":"font-size:17.0079px"},"text":"Pet Plus"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"shop in","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text70","style":"font-size:15.1181px;display:inline","x":"1546.3979","y":"768.39136"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan70","x":"1546.3979","y":"768.39136","style":"font-size:15.1181px"},"text":"shop in"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"JINS","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text71","style":"font-size:17.0079px;display:inline","x":"1670.5765","y":"754.69067"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan71","x":"1670.5765","y":"754.69067","style":"font-size:17.0079px"},"text":"JINS"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ウエルシア","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text72","style":"font-size:17.0079px;display:inline","x":"1814.3438","y":"754.68951"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan72","x":"1814.3438","y":"754.68951","style":"font-size:17.0079px"},"text":"ウエルシア"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"AKOMEYA TOKYO","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text74","style":"font-size:15.1181px;display:inline","x":"1969.8876","y":"729.40918"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan73","x":"1969.8876","y":"729.40918","style":"font-size:15.1181px"},"text":"AKOMEYA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan74","x":"1969.8876","y":"752.0863","style":"font-size:15.1181px"},"text":"TOKYO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"cotta","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text75","style":"font-size:13.2283px;display:inline","x":"2322.8413","y":"893.21912"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan75","x":"2322.8413","y":"893.21912","style":"font-size:13.2283px"},"text":"cotta"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ビオラル","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text76","style":"font-size:13.2283px;display:inline","x":"2412.207","y":"862.59937"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan76","x":"2412.207","y":"862.59937"},"text":"ビオラル"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ライフ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text77","style":"font-size:45.3543px;display:inline","x":"2769.2427","y":"759.17041"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan77","x":"2769.2427","y":"759.17041"},"text":"ライフ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ポニークリーニング","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text78","style":"font-size:7.55906px;display:inline","x":"2972.7759","y":"863.40674"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan78","x":"2972.7759","y":"863.40674"},"text":"ポニー"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2972.7759","y":"875.46436","id":"tspan87"},"text":"クリーニング"}]}]}');let iA=JSON.parse('["1F","2F","3F","4F","5F"]').map(t=>({name:t,href:n(303)(`./floor-${t}.svg`),labels:(null==iO?void 0:iO[t])??void 0})),iN=Object.values(JSON.parse('{"1F":{"A1F-Content-(ViewBox)":{"x":0,"y":0}},"2F":{"A2F-Content-(ViewBox)":{"x":0,"y":0},"A2F-Shops-1":{"x":2787.633,"y":1002.343},"A2F-Shops-2":{"x":2673.916,"y":1013.549},"A2F-Shops-3":{"x":2620.812,"y":1020.774},"A2F-Shops-4":{"x":2569.678,"y":1027.821},"A2F-Shops-5":{"x":2518.34,"y":1034.889},"A2F-Shops-6":{"x":2461.124,"y":1037.392},"A2F-Shops-7":{"x":2330.392,"y":1029.023},"A2F-Shops-8":{"x":2216.639,"y":1033.387},"A2F-Shops-9":{"x":2068.837,"y":1048.702},"A2F-Shops-10":{"x":1854.286,"y":1074.941},"A2F-Shops-11":{"x":1714.966,"y":1080.949},"A2F-Shops-12":{"x":1560.402,"y":1084.983},"A2F-Shops-13":{"x":1442.217,"y":1090.732},"A2F-Shops-14":{"x":1335.221,"y":1089.467},"A2F-Shops-15":{"x":1521.3,"y":939.432},"A2F-Shops-16":{"x":1816.168,"y":933.897},"A2F-Shops-17":{"x":1264.299,"y":821.759},"A2F-Shops-18":{"x":1336.729,"y":762.924},"A2F-Shops-19":{"x":1546.088,"y":764.415},"A2F-Shops-20":{"x":1669.335,"y":750.039},"A2F-Shops-21":{"x":1814.93,"y":748.175},"A2F-Shops-22":{"x":1969.88,"y":735.343},"A2F-Shops-23":{"x":2322.683,"y":888.927},"A2F-Shops-24":{"x":2412.665,"y":857.226},"A2F-Shops-25":{"x":2769.278,"y":742.101},"A2F-Shops-26":{"x":2973.231,"y":865.979}},"3F":{"A3F-Content-(ViewBox)":{"x":0,"y":0}},"4F":{"A4F-Content-(ViewBox)":{"x":0,"y":0}},"5F":{"A5F-Content-(ViewBox)":{"x":0,"y":0}}}')).concat().flatMap((t,e)=>Object.entries(t).map(t=>{let[n,i]=t;return[n,{coord:i,fidx:e}]}));function i$(t){let[e,n]=t;return n.map(t=>[e,t])}function iM(t){return t.reduce(function(t,e){let[n,i]=e,r=new Set([...t.get(n)??new Set,i]);return new Map([...t,[n,r]])},new Map)}let iz=Object.values(JSON.parse('{"1F":{},"2F":{"サーティワン アイスクリーム":["A2F-Shops-1"],"新橋　まこちゃん":["A2F-Shops-2"],"とんかつ檍":["A2F-Shops-3"],"羅家 東京豚饅":["A2F-Shops-4"],"おにぎり戸越屋":["A2F-Shops-5"],"Soup Stock Tokyo":["A2F-Shops-6"],"どうとんぼり神座":["A2F-Shops-7"],"セブン-イレブン":["A2F-Shops-8"],"L\'Atelier du Pain":["A2F-Shops-9"],"マーキーズ":["A2F-Shops-10"],"Cath Kidston":["A2F-Shops-11"],"ANTIDOTE":["A2F-Shops-12"],"TULLY\'S COFFEE ＆TEA":["A2F-Shops-13"],"NATURE&MEAT GROVE PARK VIEW":["A2F-Shops-14"],"Standard Products":["A2F-Shops-15"],"TSUTAYA BOOKSTORE":["A2F-Shops-16"],"スターバックス（TSUTAYA BOOKSTORE）":["A2F-Shops-16"],"Pet Plus Trimming Salon":["A2F-Shops-17"],"Pet Plus":["A2F-Shops-18"],"shop in":["A2F-Shops-19"],"JINS":["A2F-Shops-20"],"ウエルシア":["A2F-Shops-21"],"AKOMEYA TOKYO":["A2F-Shops-22"],"cotta":["A2F-Shops-23"],"ビオラル":["A2F-Shops-24"],"ライフ":["A2F-Shops-25"],"ポニークリーニング":["A2F-Shops-26"]},"3F":{},"4F":{},"5F":{}}')).flatMap(function(t){return Object.entries(t)});iM(Array.from(iz).flatMap(i$));let iL=iM(Array.from(iz).flatMap(i$).map(t=>{let[e,n]=t;return[n,e]}));var iC=JSON.parse('{"x":0,"y":0,"width":3500.0,"height":1400.0}');!function(t){let e;tG.init.add(t=>{if(t.floorsConfig){let e=t.floorsConfig.floors.length,n=t.floorsConfig.initialFidx;tQ.send({type:"INIT",nfloors:e,fidx:n}),t0.postMessage({type:"INIT",cfg:t.floorsConfig})}}),tV.select.add(t=>tQ.send({type:"SELECT",fidx:t})),tV.levelUp.add(()=>tQ.send({type:"LEVEL.UP"})),tV.levelDown.add(()=>tQ.send({type:"LEVEL.DOWN"})),tV.selectDone.add(t=>tQ.send({type:"SELECT.DONE",fidx:t})),eS.fullscreen.add(iv),tG.init.add(iw),eS.position.add(()=>{var t;return t={type:"GET"},void ie.send(t)}),tn.eventTick.add(tm),tn.eventTick.add(iy.tick),tn.get.add(()=>ig({type:"GET"})),tn.sync.add(t=>ig({type:"SYNC",pos:t})),tn.syncSync.add(t=>ig({type:"SYNCSYNC",pos:t})),tG.init.add(t=>{if(t.getSearchEntries){let e=t.getSearchEntries(t);ia.postMessage({type:"INIT",entries:e})}}),es.start.add(function(t){ir.send({type:"SEARCH",req:t})}),ti.layout.add(function(t){let{layout:e,force:n}=t;tE({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>tb())}),ti.zoomStart.add(function(t){tE({type:"STYLE.ZOOM",...t})}),ti.zoomEnd.add(function(t){tE({type:"STYLE.ZOOM",zoom:t.zoom})}),ti.animation.add(function(t){tE({type:"STYLE.ANIMATION",animation:t})}),ti.animationEnd.add(function(){tE({type:"STYLE.ANIMATION.END"})}),ti.mode.add(function(t){tE({type:"STYLE.MODE",mode:t})}),tn.eventExpire.add(tb),eS.reset.add(nQ),eS.fullscreen.add(nQ),eS.position.add(nQ),eS.recenter.add(nQ),eS.zoomOut.add(nQ),eS.zoomIn.add(nQ),es.endDone.add(t=>ex.send({type:"DETAIL",...t})),ed.open.add(()=>{let t;return t=!0,te(ed.openDone,t)}),ed.openDone.add(t=>ex.send({type:t?"OPEN":"CANCEL"})),ed.close.add(()=>ex.send({type:"CANCEL"})),ed.closeDone.add(()=>{requestAnimationFrame(()=>{var t,e;null==(e=t3.get("detail"))||null==(t=e.querySelector(".detail"))||t.scroll(0,0)})}),tV.lock.add(t=>e$({type:"SWITCH",fidx:t})),tV.selectDone.add(()=>e$({type:"SWITCH.DONE"})),es.end.add(t=>eN.send({type:"SEARCH.END",res:t})),ed.open.add(()=>eO.set("locked")),ed.closeDone.add(()=>e$({type:"SEARCH.DONE"})),ed.closeDone.add(()=>eO.set("panning")),tn.getDone.add(t=>{null!==t&&e$({type:"SCROLL.GET.DONE",scroll:t})}),tn.syncSyncDone.add(t=>{null!==t&&e$({type:"SCROLL.SYNCSYNC.DONE",scroll:t})}),ti.resize.add(t=>{let{layout:e,force:n}=t;return e$({type:"RESIZE",layout:e,force:n})}),ti.mode.add(eL),ti.zoomStart.add(()=>{ez=!0}),ti.zoomEnd.add(()=>{ez=!1}),eS.reset.add(()=>e$({type:"HOME"})),eS.recenter.add(()=>e$({type:"RECENTER"})),eS.rotate.add(()=>e$({type:"ROTATE"})),eS.zoomOut.add(()=>e$({type:"ZOOM",z:-1,p:null})),eS.zoomIn.add(()=>e$({type:"ZOOM",z:1,p:null})),eT.multiStart.add(()=>tt(tn.get)),eT.multiStart.add(()=>eO.set("touching")),eT.multiEnd.add(()=>eO.set("panning")),eT.zoom.add(t=>{let{z:e,p:n}=t;return e$({type:"ZOOM",z:e>0?1:-1,p:n})}),tG.rendered.add(()=>e$({type:"RENDERED"})),tQ.start(),id.start(),ie.start(),ip.start(),ih.start(),ir.start(),tS.start(),nG.start(),ex.start(),eN.start();let n=(c({origViewBox:e={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0},isContainerRendered:n7,isUiRendered:nC,...t}),c({...d}),{...d,origViewBox:e,...t});tK(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.1.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let i=document.getElementById(n.root);if(null===i)throw Error("#root not found!");i.onwheel=function(t){var e;let n=i.children[0];t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||ez)&&t.preventDefault()},i.oncontextmenu=function(t){t.preventDefault()},i.ontouchmove=function(t){if(ez){var e;if(t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui")return;t.preventDefault()}else if(!nK)return;t.preventDefault()},document.title=n.title,document.body.onkeydown=t=>{var e;return e={type:"DOWN",key:t.key},void id.send(e)},document.body.onkeyup=t=>{var e;return e={type:"UP",key:t.key},void id.send(e)},(0,t5.createRoot)(i).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(iE,{})}));let r=document.getElementById("style-root");if(null===r)throw Error("#style-root not found!");(0,t5.createRoot)(r).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(t2,{})}))}({renderMap:function(t){let{floors:e,data:{origViewBox:n}}=t,{viewBox:i,width:r,height:o}=function(){let{scroll:t,svg:e}=tj(t=>t.layout);return{viewBox:I(e),width:V(t.width),height:V(t.height)}}(),{fidxToOnAnimationEnd:a,urls:s}=t1();return void 0===e?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"content",children:(0,p.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:i,width:r,height:o,children:e.floors.map((t,e)=>(0,p.jsx)(l.Fragment,{children:(0,p.jsxs)("g",{className:`floor fidx-${e}`,onAnimationEnd:a(e),children:[(0,p.jsx)(ij,{origViewBox:n,idx:e,url:s.get(e),onAnimationEnd:a(e),labels:t.labels}),(0,p.jsx)(ib,{origViewBox:n,idx:e,url:s.get(e),onAnimationEnd:a(e),labels:t.labels})]})},e))})})},isMapRendered:function(){return!0},...{root:"root",title:"OIMACHI TRACKS",backgroundColor:"white",origViewBox:JSON.parse('{"x":0,"y":0,"width":3500.0,"height":1400.0}'),origBoundingBox:iC,zoomFactor:2,floorsConfig:{floors:iA,initialFidx:1},...{getSearchEntries:function(){return iN.map(t=>{let[e,n]=t;return{address:e,pos:n}})},getSearchInfo:function(t){let e=iL.get(t.address);return void 0===e||e.size<1?null:{title:Array.from(e)[0],x:{tag:"unknown"}}},renderInfo:function(t){return(0,p.jsx)("p",{children:t.info.title})}}}})}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={exports:{}};return r[t](n,n.exports,a),n.exports}a.m=r,a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.u=t=>"static/js/async/"+t+"."+({147:"0d5f0eaa",968:"1177cf61"})[t]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],a.O=(e,n,i,r)=>{if(n){r=r||0;for(var o=t.length;o>0&&t[o-1][2]>r;o--)t[o]=t[o-1];t[o]=[n,i,r];return}for(var l=1/0,o=0;o<t.length;o++){for(var[n,i,r]=t[o],s=!0,d=0;d<n.length;d++)(!1&r||l>=r)&&Object.keys(a.O).every(t=>a.O[t](n[d]))?n.splice(d--,1):(s=!1,r<l&&(l=r));if(s){t.splice(o--,1);var c=i();void 0!==c&&(e=c)}}return e},a.p="/demos/OimachiTracks/",a.b=document.baseURI||self.location.href,e={410:0},a.O.j=t=>0===e[t],n=(t,n)=>{var i,r,[o,l,s]=n,d=0;if(o.some(t=>0!==e[t])){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(s)var c=s(a)}for(t&&t(n);d<o.length;d++)r=o[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},(i=self.webpackChunksvgmapviewer_example_floors=self.webpackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var l=a.O(void 0,["783","491","357"],()=>a(898));l=a.O(l)})();