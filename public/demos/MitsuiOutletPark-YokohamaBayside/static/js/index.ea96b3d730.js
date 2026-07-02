(()=>{"use strict";var e,t,n,r,o={8118(e,t,n){let r,o,i,a,l,s,c,u,d;var h,p=n(376),y=n(8783),g=n(5906);let x={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let m={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:x,internals:x,origin:x,measures:x,viewbox:x,points:x,lines:x,multilinestrings:x,multipolygons:x},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,g.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,RenderInfo:function(e){return(0,g.createElement)("p",{},e.info.title)}},f=(0,p.e)(m),S=()=>(0,y.fp)(f);var v=n(4202);n(437);var A=n(215);let E=A.gPz([A.wNn,A.QfV]),w=A.O31(E);r=A._kM({ids:w}),A.mj7(r);let F=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var b=n(3024);function j(e,t,n){let[r,o,i]=e,[a,l]=t;return r*a+o*l+i*n}function O(e,t,n){return[j(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),j(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function T(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function M(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}let R={x:0,y:0};function L(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,o=e.x*n,i=e.y*r;return{...e,x:o,y:i}}function N(e,t,n,r){return{x:e,y:t,width:n,height:r}}let C={x:0,y:0,width:1,height:1};function k(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function D(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function $(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function I(e,t){return{...e,x:t.x,y:t.y}}function z(e){return function(e){let{x:t,y:n,width:r,height:o}=e;return`${t} ${n} ${r} ${o}`}(function(e,t){let{x:n,y:r,width:o,height:i}=e;return{x:t(n),y:t(r),width:t(o),height:t(i)}}(e,function(e){return Math.round(100*e)/100}))}function U(e){let{x:t,y:n,width:r,height:o}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+o}}}function H(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function P(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function W(e){let[[t,n],[r,o]]=e;return{tl:{x:t,y:n},br:{x:r,y:o}}}function Y(e,t){return[O(e,function(e){let[t]=e;return t}(t),0),O(e,function(e){let[,t]=e;return t}(t),0),O(e,function(e){let[,,t]=e;return t}(t),1)]}function B(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function Z(e,t,n,r){var o,i;return o=function(e,t){let[n,r]=t;return[B(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),B([-n,-r])].reduce(Y)}("number"==typeof(i=t)?[i,i]:"x"in i?[i.x,i.y]:i,[n,r]),(0,b.Fs)(e,U,P,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>O(o,e,1)),W,H)}var G=n(9008),V=n(3342),q=n(4700),X=n(7686);let K=[1,2,2.5,5,10,15,20,25,30,40,50];function _(e){Promise.all(Array.from(e,e=>Promise.resolve(e()))).catch(e=>console.log("notifyCbs0",e))}function J(e,t){Promise.all(Array.from(e,e=>Promise.resolve(e(t)))).catch(e=>console.log("notifyCbs",e))}let Q={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ee={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function et(e,t,n){(0,g.useEffect)(()=>{let r=t.current;return r&&e.set(n,r),()=>{r&&e.delete(n)}},[n,t,e])}let en=new Map,er=e=>.5+.5*Math.log2(Math.max(1,e)),eo=`
position: absolute;
left: 0;
top: 0;
`,ei=`
position: absolute;
right: 0;
top: 0;
`,ea=`
position: absolute;
left: 0;
bottom: 0;
`,el=`
position: absolute;
right: 0;
bottom: 0;
`,es=`
margin: 0;
`,ec=`
padding: 0;
`,eu=`
${es} ${ec}
`,ed=`
box-sizing: border-box;
`,eh=`
width: 100vw;
height: 100vh;
height: 100svh;
`,ep=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,ey=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eg=`
-webkit-user-select: none;
user-select: none;
`,ex=`
touch-action: none;
`,em=`
pointer-events: none;
`,ef=`
pointer-events: initial;
`,eS=`
background-color: rgba(255, 255, 255, 0.5);
`,ev=`
cubic-bezier(0, 0, 0, 1)
`,eA=`
cubic-bezier(1, 0, 1, 1)
`,eE="xxx-appearing",ew=`
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
`,eF;function eb(e){return Math.round(100*e)/100}function ej(e){return Math.round(1e3*e)/1e3}function eO(e){return Math.round(1e7*e)/1e7}let eT=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function eM(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("g",{id:"measure",children:(0,v.jsx)(ek,{})})})}function eR(){let e=(0,g.useRef)(null);return et(eB,e,"distance"),(0,v.jsxs)("div",{ref:e,id:"distance",children:[(0,v.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),eT.map(e=>(0,v.jsxs)(g.Fragment,{children:[(0,v.jsx)("p",{id:`distance-x-${e+1}`,className:"distance distance-x","data-idx":e+1,style:{"--distance-idx":`${e+1}`}}),(0,v.jsx)("p",{id:`distance-y-${e+1}`,className:"distance distance-y","data-idx":e+1,style:{"--distance-idx":`${e+1}`}})]},e)),(0,v.jsx)("style",{children:(0,v.jsx)(eZ,{})})]})}let eL=new Map;function eN(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null);return et(eL,e,"lon"),et(eL,t,"lat"),(0,v.jsxs)("div",{id:"coordinate",children:[(0,v.jsx)("p",{ref:e,id:"longitude"}),(0,v.jsx)("p",{ref:t,id:"latitude"}),(0,v.jsx)("style",{children:(0,v.jsx)(eI,{})})]})}let eC=new Map;function ek(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null);return et(eC,e,"horizontal"),et(eC,t,"vertical"),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("path",{ref:e,id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),(0,v.jsx)("path",{ref:t,id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),eT.map((e,t)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(eD,{idx:t})},t))]})}function eD(e){let{idx:t}=e,n=(0,g.useRef)(null);return et(eC,n,`ring${t}`),(0,v.jsx)("path",{ref:n,id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"})}let e$=new Map;function eI(){return(0,v.jsxs)(v.Fragment,{children:[eP,eW,eY]})}let ez="100vw",eU="100svh",eH="var(--distance-radius-client)",eP=`
#distance,
#coordinate {
  ${eo}
  width: ${ez};
  height: ${eU};
  /*
  transform: translate3d(0, 0, 0);
  */
}
`,eW=`
#longitude {
  ${el}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(calc(${ez} / -2), calc(${eU} / -2)) scale(0.5);
}
`,eY=`
#latitude {
  ${ea}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(calc(${ez} / 2), calc(${eU} / -2)) scale(0.5);
}
`,eB=new Map;function eZ(){return(0,v.jsxs)(v.Fragment,{children:[eV,eG,eq,eX]})}let eG=`
.distance {
  ${eo}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: 0% 0%;
}
`,eV=`
#distance-origin {
  transform: translate(calc(${ez} / 2), calc(${eU} / 2)) scale(0.5);
}
`,eq=(o=`${eH} * var(--distance-idx)`,i=`${ez} / 2 + ${o}`,a=`${eU} / 2`,`
.distance-x {
  transform: translate(calc(${i}), calc(${a})) scale(0.5);
}
`),eX=(l=`${eH} * var(--distance-idx)`,s=`${ez} / 2`,c=`${eU} / 2 + ${l}`,`
.distance-y {
  transform: translate(calc(${s}), calc(${c})) scale(0.5);
}
`);function eK(e){return void 0!==e&&"number"==typeof e}function e_(e,t,n,r,o,i){return new DOMMatrixReadOnly(e instanceof Array?e:eK(e)&&eK(t)&&eK(n)&&eK(r)&&eK(o)&&eK(i)?[e,t,n,r,o,i]:void 0)}function eJ(e){let{container:t,outer:n,svgScale:r,inner:o}=e,{x:i,y:a}=n;return{container:t,scroll:t,content:e_(),svgOffset:{x:-i,y:-a},svgScale:r,svg:o}}function eQ(e){return e_().multiply(function(e){let{svgOffset:t}=e;return e_().translate(-t.x,-t.y)}(e)).multiply(function(e){let{svgScale:t}=e;return e_().scale(1/t,1/t)}(e)).multiply(function(e){let{svg:t}=e;return e_().translate(-t.x,-t.y)}(e))}function e0(e){return e.content.multiply(eQ(e))}function e1(e){return(function(e){let{scroll:t}=e;return e_().translate(t.x,t.y)})(e).multiply(e0(e))}function e2(e,t){let n=e.height,r=n*t;return N((e.width-r)/2,0,r,n)}function e5(e,t){let n=e.width,r=n/t;return N(0,(e.height-r)/2,n,r)}let e3={...{container:C,scroll:C,content:e_(),svgOffset:{x:-0,y:-0},svgScale:1,svg:C},config:{fontSize:16,container:C,outer:C,inner:C,svgScale:1}};function e4(e,t){let n=D(e.scroll);return e7(e,t,t,n)}function e7(e,t,n,r){let o=e1(e).inverse().transformPoint(r),i=Z(e.scroll,[t,n],r.x,r.y),a=L(e.svgOffset,[t,n]),l=Z(e.svg,[t,n],o.x,o.y);return{...e,scroll:i,svgOffset:a,svg:l}}function e6(e,t){var n,r;let o=D({...e.scroll,x:0,y:0}),i=(n=o.x,r=o.y,e_().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:i}}function e9(e,t){let n=e.scroll,r=M(L(t,-1),n);return(0,b.Fs)(e,e=>({...e,scroll:$(e.scroll,r)}),e=>{let t,r,o,i,a,l,s;return t=I(e.scroll,n),r=e.content.inverse(),i=T(o=D(e.scroll),M(e.scroll,n)),a=r.transformPoint(o),l=L(M(r.transformPoint(i),a),-e.svgScale),s=$(e.svg,l),{...e,scroll:t,svg:s}})}function e8(e,t,n){e.classList.add(n?t:`not-${t}`),e.classList.remove(n?`not-${t}`:t)}let te=(e,t,n)=>(1-n)*e+n*t,tt=e=>1-(1-e)**3,tn=new Map,tr=new Map,to=new Map,ti=new Map,ta=new Map,tl=new Map;function ts(e,t){let n=null===e||null===e.origin?"0% 0%":`${e.origin.x}px ${e?.origin.y}px`,r=e?.to.b!==0,o=r||null===e?null:tu({animation:e,zoom:t},0),i=r||null===e?null:tu({animation:e,zoom:t},1),a=r&&null!==e?td({animation:e,zoom:t},0):null,l=r&&null!==e?td({animation:e,zoom:t},1):null,s=null!==e?"transform":null,c=null!==e?n:null,u=null!==a?"container-rotate 500ms ease":null!==o?"container-zoom 500ms ease":null;Array.from(ti,e=>{let[,r]=e,d=r.style.setProperty.bind(r.style);d("--zoom-origin",n),d("--zoom-zoom",t.toString()),d("--zoom-s",null),d("--zoom-s-inv",null),d("--zoom-k",null),d("--zoom-k-inv",null),d("--zoom-tx-a",(o&&`${o.tx}px`)??null),d("--zoom-ty-a",(o&&`${o.ty}px`)??null),d("--zoom-tx-b",(i&&`${i.tx}px`)??null),d("--zoom-ty-b",(i&&`${i.ty}px`)??null),d("--zoom-s-a",(o&&`${o.s}`)??null),d("--zoom-s-b",(i&&`${i.s}`)??null),d("--rotate-deg-a",(a&&`${a.deg}deg`)??null),d("--rotate-deg-b",(l&&`${l.deg}deg`)??null),d("will-change",s),d("transform-origin",c),d("animation",u)}),Array.from(ta,t=>{let[,n]=t,o=n.style.setProperty.bind(n.style);o("--zoom-s",null===e?null:e.to.a.toString()),o("--zoom-s-symbols",null===e?null:e.to.a.toString()),e8(n,"zooming",null!==e),r&&e8(n,"rotating",null!==e)}),Array.from(tl,t=>{let[,n]=t;e8(n,"zooming",null!==e),r&&e8(n,"rotating",null!==e)})}let tc=e=>.5+.5*Math.log2(Math.max(1,e));function tu(e,t){let{animation:n,zoom:r}=e,o=n.from,i=n.to,a=te(o.e,i.e,tt(t)),l=te(o.f,i.f,tt(t)),s=te(o.a,i.a,tt(t)),c=r*s,u=te(r,c,tt(t)),d=te(tc(r),tc(r*s),tt(t));return{tx:a,ty:l,s,sinv:1/s,z:u,zinv:1/u,k:d,kinv:1/d}}function td(e,t){let{animation:n}=e,r=te(th(n.from),th(n.to),tt(t));return{deg:r,deginv:1/r}}function th(e){let t=180/Math.PI*Math.atan2(e.b,e.a);return t>=0?t:t+360}let tp=new Map,ty=new Set,tg=new Map;function tx(){return!tp.has("S")&&(ty.add("S"),!0)}let tm=(0,p.e)({scroll:C,client:{width:0,height:0},timeStamp:0});function tf(e){let t=e.currentTarget;null!==t&&tm.set({scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}function tS(){return tm.get()}let tv=new Map;function tA(e,t){Array.from(tv,n=>{let[,r]=n;e8(r,"shown",e),e8(r,"appearing",t)})}let tE=`
.not-shown {
  opacity: 0;
}
.shown {
}
.not-appearing {
}
.appearing {
  will-change: opacity;
  animation: xxx-appearing 2s ${ev};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`,tw=new Map,tF=(0,p.e)(e3),tb=(0,V.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,q.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,q.a)({}),updateSvgMatrix:(0,q.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return e0(t)}}),updateGeoMatrix:(0,q.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(f.get().mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,q.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,o=Math.max(n.width,n.height)/2*r,i=Math.round(Math.log10(o)),a=(t=o/Math.pow(10,i-1),K.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,i-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,q.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x+o.width/2,y:r.y+o.height/2};return i.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+o.width,y:r.y+o.height};return{start:i.transformPoint(a),end:i.transformPoint(l)}}}),updateCoord:e=>{let t,n,r,o,{context:{geoPoint:i}}=e;return t=i.x>0?"E":"W",n=i.y>0?"N":"S",r=`${t} ${eO(Math.abs(i.x))}`,o=`${n} ${eO(Math.abs(i.y))}`,void Array.from(eL,e=>{let[t,n]=e;"lon"===t&&(n.textContent=r),"lat"===t&&(n.textContent=o)})},updateDistance:e=>{let{context:{distanceRadius:t}}=e;return function(e){let{svg:t,client:n}=e;Array.from(eB,e=>{let[,r]=e;Array.from(r.children,e=>{let n=e.getAttribute("data-idx");if(!n)return;let r=Number(n);"number"==typeof r&&(e.textContent=`${t*r}m`)}),r.style.setProperty.bind(r.style)("--distance-radius-client",`${n}px`)})}(t)},updateMeasure:e=>{var t,n,r;let o,i,a,l,{context:{layout:s,distanceRadius:c}}=e;return t=s.container.width,n=s.container.height,r=c.client,o=`M0,${n/2} h${t}`,i=`M${t/2},0 v${n}`,(a=eC.get("horizontal"))&&a.setAttribute("d",o),void((l=eC.get("vertical"))&&l.setAttribute("d",i),eT.forEach(e=>{let o=eC.get(`ring${e}`);if(!o)return;let i=function(e){let{width:t,height:n,r}=e,o=`${t}:${n}:${r}`,i=e$.get(o),a=`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1");return i||e$.set(o,a),a}({width:t,height:n,r:eb(r*(e+1))});o.setAttribute("d",i)}))}}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e3,zoom:1,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:R,distanceRadius:{svg:0,client:0},geoRange:{start:R,end:R},mode:"panning"},on:{"STYLE.LAYOUT":{actions:[(0,q.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return tF.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius","updateDistance","updateMeasure",(0,X.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}}),e=>{var t;let n,{context:r}=e;return n=eQ(t=r.layout),void(Array.from(tn,e=>{let[,r]=e,o=r.style.setProperty.bind(r.style);o("--layout-content-matrix",t.content.toString()),o("--layout-scroll-width",`${eb(t.scroll.width)}px`),o("--layout-scroll-height",`${eb(t.scroll.height)}px`),o("--layout-svg-to-content-matrix",new DOMMatrixReadOnly([n.a,n.b,n.c,n.d,eb(n.e),eb(n.f)]).toString())}),Array.from(tr,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svg-x",`${eb(t.svg.x).toString()}px`),r("--layout-svg-y",`${eb(t.svg.y).toString()}px`),r("--layout-svg-width",`${eb(t.svg.width).toString()}px`),r("--layout-svg-height",`${eb(t.svg.height).toString()}px`)}))},e=>{var t;let{context:n}=e;return t=n.layout,void Array.from(to,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svgscale",`${eb(t.svgScale)}`),r("--layout-fontsize",`${eb(t.config.fontSize)}`)})},e=>{var t,n;let r,o,{context:i}=e;return t=i.layout,r=er(n=i.zoom),o=t.config.fontSize*t.svgScale*er(n),void Array.from(en,e=>{let[,t]=e,n=t.style.setProperty.bind(t.style);n("--map-symbol-size",`${o/72}`),n("--map-symbol-size-k",`${r}`)})}]},"STYLE.ZOOM":{actions:[{type:"updateZoom",params:e=>{let{event:t}=e;return t}},e=>{let{context:{zoom:t}}=e;return ts(null,t)}]},"STYLE.SCROLL":{actions:[{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}},"updateCoord"]},"STYLE.MODE":{actions:(0,q.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",entry:e=>{let{context:t}=e;return tA(t.shown,t.appearing)},states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:[(0,q.a)({appearing:!0}),e=>{let{context:t}=e;return tA(t.shown,t.appearing)}],target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:[(0,q.a)({appearing:!1,shown:!0}),e=>{let{context:{zoom:t}}=e;return ts(null,t)},e=>{let{context:t}=e;return tA(t.shown,t.appearing)},"updateDistance","updateMeasure"],target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:[e=>{let{context:{zoom:t},event:{animation:n}}=e;return ts(n,t)},(0,q.a)({animating:!0}),()=>{var e;let t,n;return e="zoom",t=performance.now(),n=requestAnimationFrame(function n(r){if(Math.abs(r-t)/500<1){let t=requestAnimationFrame(n);tw.set(e,t)}else{let t=tw.get(e);void 0!==t&&cancelAnimationFrame(t),tw.delete(e)}}),void tw.set(e,n)}],target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,q.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:[e=>{let{context:{zoom:t}}=e;return ts(null,t)},(0,q.a)({animating:!1})],target:"Idle"}}}}}),tj=(0,X.c)(tb,{systemId:"system-viewer1"});function tO(e){tj.send(e)}function tT(e){return(0,G.d4)(tj,t=>e(t.context))}function tM(){tO({type:"STYLE.SCROLL",currentScroll:tS()})}let tR={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tL=n(1717);let tN={init:new Set,rendered:new Set},tC=function(e){J(tN.init,e)},tk=function(){_(tN.rendered)},tD=new Map,t$=(0,p.e)(0),tI=(0,V.mj)({types:{context:{},events:{},emitted:{}},actions:{updateInit:()=>void Array.from(tD,e=>{let t,[n,r]=e;(t=r.style.setProperty.bind(r.style))("will-change",null),t("animation",null),t("visibility","hidden")}),updateLoad:e=>{let t,{context:{fidx:n}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tD,e=>{var n;let r,[o,i]=e;return n=t.test(o),r=i.style.setProperty.bind(i.style),void(n?(r("will-change","opacity"),r("animation",`${eE} 250ms linear`),r("visibility",null)):(r("will-change",null),r("animation",null),r("visibility","hidden")))})},updateSwitch:e=>{let t,{context:{fidx:n,prevFidx:r}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tD,(e,o)=>{let[i,a]=e;return function(e,t,n,r){let o=e.style.setProperty.bind(e.style);if(t){let e=`${n?eE:"xxx-disappearing"} 250ms linear`;o("will-change","opacity"),o("animation",e),o("visibility",r?null:"hidden")}else o("will-change",null),o("animation",null),o("visibility",n?null:"hidden")}(a,null!==r,t.test(i),o===r||o===n)})}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:-1},initial:"Uninited",states:{Uninited:{on:{INIT:{actions:[(0,q.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return t$.set(t.fidx)},"updateInit"],target:"Loading"}}},Loading:{on:{IMAGE:{actions:(0,q.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}}),target:"Loaded"}}},Loaded:{always:[{guard:e=>{let{context:t}=e;return t.nfloors===t.blobs.size},actions:"updateLoad",target:"Animating"},"Loading"]},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,q.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return t$.set(t.fidx)},"updateSwitch"],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,tL.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,tL.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:[(0,q.a)({prevFidx:null}),"updateSwitch"],target:"Idle"}}}}}),tz=(0,X.c)(tI);tz.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,J(tR.lock,t)});let tU=new Worker(new URL(n.p+n.u(103),n.b),Object.assign({},{type:"module"},{type:void 0}));function tH(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,G.d4)(tz,t=>e(t.context))),o=(0,g.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,J(tR.selectDone,n))},[t]),i=(0,g.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,J(tR.lock,r))},[t,n]);return{fidx:t,prevFidx:n,fidxToOnAnimationEnd:o,fidxToOnClick:i,urls:r}}tU.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;tz.send({type:"IMAGE",fidx:e,blob:n})}}},tU.onerror=e=>{console.error("floors error",e)},tU.onmessageerror=e=>{console.error("floors messageerror",e)};var tP=n(5193),tW=n(3166);let tY=`
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
`,tB=new Map;function tZ(e,t,n){(0,g.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:tB.get(n)??null;if(null===r)return;let o=r.querySelector(`#${e}`)??null;if(null===o||null!==o.shadowRoot)return;let i=o.attachShadow({mode:"open"});tB.set(e,i),(0,tW.createRoot)(i).render(t)})(e,t,n),[e,n,t])}let tG={bus:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,v.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,v.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,v.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,v.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,v.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,v.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,v.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,v.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,v.jsx)("use",{x:"8.5",href:"#_person2"}),(0,v.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,v.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,v.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,v.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,v.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,v.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,v.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,v.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,v.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,v.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,v.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,v.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,v.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,v.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,v.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,v.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,v.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,v.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,v.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function tV(){return(0,v.jsx)("g",{className:"assets",children:(0,v.jsx)(tq,{})})}function tq(){return(0,v.jsx)("g",{className:"symbols",children:Object.entries(tG).map((e,t)=>{let[n,r]=e;return(0,v.jsx)(g.Fragment,{children:r({id:n})},t)})})}function tX(e){return e>.5?-1:+(e<.5)}function tK(e){return e<.3?1:e>.7?-1:0}function t_(e){return{open:e,animating:!1}}function tJ(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tQ(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function t0(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function t1(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function t2(e){let{open:t,animating:n}=e;return t||n}function t5(e,t,n,r){let o={x:t/2,y:n/2},i=t/20,a=i/2;function l(t){var n;let r,o;return n={x:e.h,y:e.v},r=t.x*n.x,o=t.y*n.y,{...t,x:r,y:o}}let s=e.th<Math.PI/4,c=0===e.v,u=0===e.h,d=l(L(o,-1)),h=l(c||u?M(L(o,-1),{x:r,y:r}):M(L(o,-1),{x:s?r:0,y:s?0:r})),[p,y]=u?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:i})]:[{x:0,y:0},l({x:i,y:0})],g=T(d,p),x=T(d,y);return{p:d,q:h,a:g,b:x}}let t3=e=>{let{x:t,y:n}=e;return`${ej(t)}, ${ej(n)}`},t4=`
.not-animating {
  transform-origin: 0 0;
  opacity: var(--b);
}
.not-animating.detail {
  transform: translate(var(--balloon-tx-b-x), var(--balloon-tx-b-y)) scale(var(--b)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
}
.not-animating.balloon {
  transform: translate(var(--balloon-tx-b-x), var(--balloon-tx-b-y)) scale(var(--b)) translate(var(--balloon-pww), var(--balloon-phh)) translate3d(0px, 0px, 0px);
}
.animating.detail,
.animating.balloon {
  --duration: 400ms;
  transform-origin: 0 0;
  will-change: opacity, transform;
}
.animating.detail {
  animation: xxx-detail var(--duration) var(--timing);
}
.animating.balloon {
  animation: xxx-balloon var(--duration) var(--timing);
}
.animating.closed {
  --timing: ${eA};
}
.animating.opened {
  --timing: ${ev};
}
@keyframes xxx-detail {
  from {
    opacity: var(--a);
    transform: translate(var(--balloon-tx-a-x), var(--balloon-tx-a-y)) scale(var(--a)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: translate(var(--balloon-tx-b-x), var(--balloon-tx-b-y)) scale(var(--b)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
}

@keyframes xxx-balloon {
  from {
    opacity: var(--a);
    transform: translate(var(--balloon-tx-a-x), var(--balloon-tx-a-y)) scale(var(--a)) translate(var(--balloon-pww), var(--balloon-phh)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--b);
    transform: translate(var(--balloon-tx-b-x), var(--balloon-tx-b-y)) scale(var(--b)) translate(var(--balloon-pww), var(--balloon-phh)) translate3d(0px, 0px, 0px);
  }
}
`,t7=new Map,t6=new Map;function t9(e,t){let{open:n,animating:r}=t;Array.from(e,e=>{let[,t]=e;t.classList.add(n?"opened":"closed"),t.classList.remove(n?"closed":"opened"),e8(t,"animating",r)})}let t8=new Map,ne=new Map,nt=new Map,nn=new Map,nr=new Map;function no(){var e;let t=(0,g.useRef)(null),n=(0,g.useRef)(null),r=(0,g.useRef)(null),o=(0,g.useRef)(null);return et(t6,t,"balloon"),et(t8,t,"balloon"),et(ne,n,e="balloon"),et(nt,r,e),et(nn,o,e),(0,v.jsxs)("div",{ref:t,className:"balloon",children:[(0,v.jsxs)(na,{ref:n,children:[(0,v.jsx)("path",{ref:r,className:"bg"}),(0,v.jsx)("path",{ref:o,className:"fg"}),(0,v.jsx)("style",{children:nl})]}),(0,v.jsx)("style",{children:ni})]})}let ni=`
.balloon,
.balloon-svg {
  ${eo}
  ${em}
  z-index: 10;
  will-change: opacity, transform;
}
`;function na(e){let{ref:t,children:n}=e;return(0,v.jsx)("svg",{ref:t,className:"balloon-svg",viewBox:"0 0 0 0",width:0,height:0,children:n})}let nl=`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`,ns={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},nc=()=>_(ns.zoomIn),nu=()=>_(ns.zoomOut),nd=()=>_(ns.rotate),nh=()=>_(ns.reset),np=()=>_(ns.recenter),ny={start:new Set,end:new Set,endDone:new Set},ng={multiStart:new Set,multiEnd:new Set,zoom:new Set},nx={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},nm=(0,p.e)(!1),nf=e=>nm.set(()=>e),nS=(0,p.e)("panning");nS.subscribe(e=>{let t;return t=e,J(ee.mode,t)});let nv=(0,V.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>f.get().isMapRendered(),isUiRendered:()=>f.get().isUiRendered()},actions:{setRendered:(0,q.a)({rendered:!0}),emitGetScroll:(0,tL.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tL.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,tL.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,q.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,o={type:"zoom",z:n,p:r??D(e.layout.container)};return{...e,animationReq:o}}(n,t)}),prepareHome:(0,q.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,q.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:D(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,q.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,q.a)(e=>{var t,n,r,o,i,a,l,s,c,u,d,h,p;let y,g,x,m,S,v,A,E,w,F,b,j,{context:O}=e;return t=O.animationReq,n=O.layout,F=null===t?null:"zoom"===t.type?(r=n,o=t.z,i=t.p,y=e1(r).inverse().transformPoint(i),g=1/(a=o,Math.pow(f.get().zoomFactor,a)),x=e_().scale(1/g,1/g),{type:"Zoom",svg:Z(r.svg,g,y.x,y.y),svgScale:r.svgScale*g,q:{from:e_(),to:x,origin:i}}):"home"===t.type?(l=n,m=D((s=function(e){let{config:t,content:n}=e;return{config:t,...eJ(t),content:n}}(n)).config.inner),S=e1(l).transformPoint(m),v=s.svgScale/l.svgScale,E=(function(e,t){if(e instanceof DOMMatrixReadOnly)return e_(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return e_(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((A=D(l.container)).x-S.x,A.y-S.y).multiply((c=1/v,u=1/v,d=S.x,h=S.y,e_().scale(c,u,1,d,h,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:e_(),to:E,origin:null}}):(p=t.p,w=e_().rotate(90),{type:"Rotate",deg:90,q:{from:e_(),to:w,origin:p}}),b=O.layout,j=function(e,t){var n,r,o;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:I(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,o=t.svgScale,{...e,svg:r,svgScale:o}):e6(e,t.deg)}(O.layout,F),{...O,animation:F,prevLayout:b,layout:j}}),endZoom:(0,q.a)(e=>{var t,n;let r,o,{context:i}=e;return r=i.zoom*(null===(t=i.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),o=i.rotate+(null===(n=i.animationReq)||"rotate"!==n.type?0:n.deg),{...i,prevLayout:null,animation:null,zoom:r,rotate:o}}),endHome:(0,q.a)(e=>{let t,n,{context:r}=e;return t=D(r.origLayout.container),n=e6(e4(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,tL.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,tL.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,q.a)(e=>{let t,{context:n}=e;return t=D(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,q.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:e4(n,9)}}(n,t)}),resetScroll:(0,q.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tS(),n=e9(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,tL.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,q.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,tL.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tS();return{type:"SEARCH.START",req:{psvg:e1(e9(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,tL.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=tS(),o=e9(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:o}}}(n,t)}),emitSwitch:(0,tL.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,tL.a)({type:"SWITCH.DONE"}),enterZooming:()=>nf(!0),exitZooming:()=>nf(!1),unlockScroll:()=>!!ty.has("S")&&(ty.delete("S"),!0)}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:e3,prevLayout:null,layout:e3,cursor:D(e3.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,X.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{actions:"emitZoomEnd",target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{guard:()=>tx(),actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{guard:()=>tx(),actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{guard:()=>tx(),target:"Recentering"},ZOOM:{guard:()=>tx(),actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{guard:()=>tx(),actions:"prepareHome",target:"Zooming"},ROTATE:{guard:()=>tx(),actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",entry:"enterZooming",exit:["exitZooming","unlockScroll"],states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Rendering2"},{target:"Rendering2"}]},Rendering2:{after:{50:{target:"Done"}}},Done:{entry:"clearAnimation",type:"final"}}}}}),nA=(0,X.c)(nv,{systemId:"system-viewer1"});function nE(e){nA.send(e)}nA.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,J(ny.start,t)}),nA.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?nA.send({type:"SEARCH.DONE"}):(t=r,J(ny.endDone,t),n=r.psvg,J(nx.open,n))}),nA.on("ZOOM.START",e=>{let t;return t=e,J(ee.zoomStart,t)}),nA.on("ZOOM.END",e=>{let t;return t=e,J(ee.zoomEnd,t)}),nA.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,J(tR.select,t)}),nA.on("SWITCH.DONE",()=>_(tR.unlock)),nA.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},J(ee.layout,t)}),nA.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.sync,t)}),nA.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.syncSync,t)}),nA.on("SCROLL.GET",()=>_(Q.get));let nw=!1,nF=!1;function nb(e){nw="locked"===e,nF="locked"===e}function nj(e){(0,g.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",nO),()=>{t.removeEventListener("wheel",nO)}},[e])}function nO(e){let t=e.currentTarget;nF&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function nT(e){return function(t,n){let r=t[n],o=e(r);return t[n]=null===o?r:o,t}}let nM=(0,V.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return t2(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return t2(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,q.a)({canceling:()=>!0}),endCancel:(0,q.a)({canceling:()=>!1}),open:(0,q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nT(tJ)(n,r)}}),close:(0,q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nT(t0)(n,r)}}),handle:(0,q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nT(n[r].open?tQ:t1)(n,r)}}),updateDetail:(0,q.a)({detail:(e,t)=>t,p:(e,t)=>{let{psvg:n,layout:r}=t;return e1(r).transformPoint(n)}}),updateBalloon:(0,q.a)({balloon:e=>{var t;let n,r,o,i,a,l,s,c,u,d,{context:{detail:h,p}}=e;return h&&p&&(t=h.layout,l=function(e,t){let{x:n,y:r}=t,o=e.width/e.height,i={x:n/e.width,y:r/e.height},a=o>1?tX(i.x):tK(i.x);return{h:a,v:o>1?tK(i.y):tX(i.y),th:Math.atan2(e.height,e.width)}}(t.container,p),s=t.container.width,r=50*(n=.01*Math.min(s,c=t.container.height)),o=50*n,i=10*n,a=r/100,d=t5(l,(u={bw:r,bh:o,lh:i,d:a,width:r+2*i+2*a,height:o+2*i+2*a}).bw,u.bh,u.lh),{_p:p,_hv:l,_W:s,_H:c,_size:u,_leg:d})}}),updateBalloonPaths:(0,q.a)({balloonPaths:e=>{let{context:{balloon:t}}=e;return t?._hv&&function(e,t){let{bw:n,bh:r,lh:o,d:i,width:a,height:l}=t,s=N(-a/2,-a/2,a,l),{body:c,leg:u}=function(e,t,n,r){let o={x:t/2,y:n/2},i=`
m${ej(-o.x)},${ej(-o.y)}
h${ej(t)}
v${ej(n)}
h${ej(-t)}
z
`,{p:a,q:l,a:s,b:c}=t5(e,t,n,r),u=M(l,s),d=M(c,l),h=M(a,c);return{body:i,leg:`
m${t3(s)}
l${t3(u)}
l${t3(d)}
l${t3(h)}
z
`}}(e,n,r,o);function d(e){return`M${ej(e)},${ej(e)} ${c} M${ej(e)},${ej(e)} ${u}`}return{viewBox:s,width:a,height:l,bg:d(i),fg:d(0)}}(t._hv,t._size)||void 0}}),updateHeaderStyle:e=>{let{context:t}=e;t9(t7,t.m.header)},updateBalloonStyle:e=>{let{context:t}=e;t.balloon&&function(e,t){let{_p:n,_hv:r,_size:o,_leg:i}=e,a=function(e,t,n,r,o){let{open:i,animating:a}=o;if(null!==e&&null!==t&&t2({open:i,animating:a})){let{width:t,height:o}=n,{a:l,b:s,timing:c,txa:u,txb:d}=function(e,t,n,r){let o=L(r,-1);if(t){let{a:t,b:r}=e?{a:0,b:1}:{a:1,b:0},i=e?{a:R,b:o}:{a:o,b:R},{a:a,b:l}={a:T(n,i.a),b:T(n,i.b)};return{a:t,b:r,timing:e?ev:eA,txa:a,txb:l}}{let{b:e}={a:0,b:1};return{a:null,b:e,timing:null,txa:null,txb:T(n,o)}}}(i,a,e,r.q),h=`${ej(-t/2)}px`,p=`${ej(-o/2)}px`,y=u&&`${ej(u.x)}px`,g=u&&`${ej(u.y)}px`;return{visibility:null,a:l,b:s,timing:c,pww:h,phh:p,txax:y,txay:g,txbx:d&&`${ej(d.x)}px`,txby:d&&`${ej(d.y)}px`}}return{visibility:"hidden",a:null,b:null,timing:null,pww:null,phh:null,txax:null,txay:null,txbx:null,txby:null}}(n,r,o,i,t);Array.from(t8,e=>{let[,t]=e;!function(e,t){let{visibility:n,a:r,b:o,timing:i,pww:a,phh:l,txax:s,txay:c,txbx:u,txby:d}=t,h=e.style.setProperty.bind(e.style);h("visibility",n),h("--balloon-pww",a),h("--balloon-phh",l),h("--a",null===r?null:r.toString()),h("--b",null===o?null:o.toString()),h("--timing",i),h("--balloon-tx-a-x",s),h("--balloon-tx-a-y",c),h("--balloon-tx-b-x",u),h("--balloon-tx-b-y",d)}(t,a)})}(t.balloon,t.m.detail),t.balloonPaths&&function(e){let{viewBox:t,width:n,height:r,bg:o,fg:i}=e;Array.from(ne,e=>{let[,o]=e;o.setAttribute("viewBox",z(t)),o.setAttribute("width",`${n}`),o.setAttribute("height",`${r}`)}),Array.from(nt,e=>{let[,t]=e;return t.setAttribute("d",o)}),Array.from(nn,e=>{let[,t]=e;return t.setAttribute("d",i)})}(t.balloonPaths)},updateDetailStyle:e=>{let{context:t}=e,n=t.m.detail;requestAnimationFrame(()=>{t9(t6,n),requestAnimationFrame(()=>(function(e){let{open:t,animating:n}=e;t||n||Array.from(nr,e=>{let[,t]=e;t.scroll(0,0)})})(n))})}}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,m:{header:t_(!0),detail:t_(!1)},animationEnded:{header:!0,detail:!0}}},on:{RENDERED:{actions:["updateHeaderStyle","updateDetailStyle","updateBalloonStyle"]}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:[{type:"updateDetail",params:e=>{let{event:{type:t,...n}}=e;return n}},"updateBalloon","updateBalloonPaths"],target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,X.n)("animationEnded")},{actions:(0,q.a)({animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,X.n)("isDetailVisible")},{target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,X.n)("animationEnded")},{actions:(0,q.a)({animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],exit:"endCancel",on:{DONE:[{guard:(0,X.n)("isHeaderVisible")},{guard:"isDetailVisible"},{target:"Closed"}]}},Closed:{entry:(0,tL.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},"updateHeaderStyle",(0,q.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,X.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},"updateBalloonStyle","updateDetailStyle",(0,q.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,X.r)({type:"DONE"})]}}}}}),nR=(0,X.c)(nM);function nL(e){nR.send(e)}function nN(){let e=(0,g.useRef)(null);nj(e),et(t8,e,"detail"),et(t6,e,"detail"),et(nr,e,"detail");let t=(0,G.d4)(nR,e=>e.context.detail),n=S();return(0,v.jsxs)("div",{ref:e,className:"detail",onAnimationEnd:()=>nL({type:"DETAIL.ANIMATION.END"}),children:[n.RenderInfo&&t&&(0,v.jsx)(n.RenderInfo,{info:t.info}),(0,v.jsx)("style",{children:nC})]})}nR.on("CLOSE.DONE",()=>_(nx.closeDone));let nC=`
.detail {
  ${eo}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${ef}
  ${ed}
  z-index: 11;
  visibility: hidden;
  &.opened,
  &.animating {
    visibility: initial;
  }
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
    ${eg}
    margin: 1.5em;
    text-align: center;
  }
  & p {
    ${eg}
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
`;function nk(){return tZ("detail",(0,v.jsx)(nD,{}),"ui"),(0,v.jsx)("div",{id:"detail"})}function nD(){return(0,v.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,v.jsx)(no,{}),(0,v.jsx)(nN,{}),(0,v.jsx)("style",{children:t4}),(0,v.jsx)(n$,{})]})}function n$(){return(0,v.jsx)("svg",{id:"ui-svg-defs",children:(0,v.jsx)("defs",{children:(0,v.jsx)(tV,{})})})}function nI(){return tZ("footer",(0,v.jsx)(nz,{}),"ui"),(0,v.jsx)("div",{id:"footer"})}function nz(){let e=(0,g.useRef)(null);et(t7,e,"footer");let t=S();return(0,v.jsxs)("div",{ref:e,className:"ui-content footer",children:[(0,v.jsx)("p",{children:(0,v.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:t.copyright})}),(0,v.jsx)("style",{children:nU})]})}let nU=`
.footer {
  ${ea}
  ${ep}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${eg}
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
.footer {
  --b: 1;
  transform-origin: 50% 100%;
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  opacity: var(--b);
  &.not-animating {
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
    will-change: initial;
    animation: initial;
  }
  &.animating {
    &.closed {
      --a: 1;
      --b: 0;
      --timing: ${eA};
    }
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${ev};
    }
    --duration: 400ms;
    will-change: opacity, transform;
    animation: xxx-footer var(--duration) var(--timing);
  }
}
@keyframes xxx-footer {
  from {
    opacity: var(--a);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--a));
  }
  to {
    opacity: var(--b);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  }
}
`;function nH(){return tZ("guides",(0,v.jsx)(nP,{}),"ui"),(0,v.jsx)("div",{id:"guides"})}function nP(){let e,t=(0,g.useRef)(null);return et(t7,t,"guides"),et(tl,t,"guides"),(e=S(),(e.uiConfig?.showGuides??!0)&&!e.mapCoord.matrix.isIdentity)?(0,v.jsxs)("div",{ref:t,className:"ui-content guides",children:[(0,v.jsx)("svg",{className:"guides",children:(0,v.jsx)(eM,{})}),(0,v.jsx)(eR,{}),(0,v.jsx)(eN,{}),(0,v.jsx)("style",{children:nW})]}):(0,v.jsx)(v.Fragment,{})}let nW=`
.guides {
  ${eo}
  ${eh}
  ${em}
  transform: translate(0%, 0%);
  z-index: 2;
}
.guides.not-animating.closed {
  --b: 0;
}
.guides.not-animating.opened {
  --b: 1;
}
.guides.not-animating {
  opacity: var(--b);
  will-change: opacity;
}
.guides.animating.closed {
  --a: 1;
  --b: 0;
  --timing: ${eA};
}
.guides.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ev};
}
.guides.animating {
  --duration: 400ms;
  animation: xxx-measure var(--duration) var(--timing);
  will-change: opacity;
}
.guides.zooming {
  display: none;
  --b: 0;
}
.guides.not-zooming {
}
text {
  ${eg}
}
@keyframes xxx-measure {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;function nY(){let e=(0,g.useRef)(null),{fidx:t,fidxToOnClick:n}=tH(),r=S();return et(tg,e,"floors"),void 0===r.floorsConfig||r.floorsConfig.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{ref:e,className:"floors",children:[(0,v.jsx)("ul",{className:"floor-list",children:r.floorsConfig.floors.map((e,r)=>{let{name:o}=e;return(0,v.jsx)("li",{className:`floor-item ${nV(r===t)}`,onClick:n(r),children:o},r)})}),(0,v.jsx)("style",{children:nB})]})}let nB=`
.floors {
  max-width: calc(100vw - 2em);
  overflow-x: scroll;
  scrollbar-width: none;
  pointer-events: initial;
  touch-action: pan-x;
  &.locked {
    & > .floor-list {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
.floor-list {
  margin: 0.25em;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  ${eS}
  transition: opacity 100ms;
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
`;function nZ(){let{fidx:e}=tH(),t=S().floorsConfig;return void 0===t||t.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{children:[t.floors.map((t,n)=>(0,v.jsx)("h2",{className:`floor-name ${nV(n===e)}`,children:t.name},n)),(0,v.jsx)("style",{children:nG})]})}let nG=`
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
`;function nV(e){return e?"selected":"unselected"}function nq(){return tZ("header",(0,v.jsx)(nX,{}),"ui"),(0,v.jsx)("div",{id:"header"})}function nX(){let e=(0,g.useRef)(null);(0,g.useEffect)(()=>{requestAnimationFrame(()=>nL({type:"RENDERED"}))},[]),et(t7,e,"header");let t=S();return(0,v.jsxs)("div",{ref:e,className:"ui-content header",onAnimationEnd:()=>nL({type:"HEADER.ANIMATION.END"}),children:[(0,v.jsx)("h1",{className:"title",onClick:()=>nh(),children:t.title}),(0,v.jsx)(nZ,{}),(0,v.jsx)("style",{children:nK})]})}let nK=`
.header {
  ${eo}
  ${ep}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}
.header h1,
.header h2,
.header p {
  ${eg}
  ${ef}
}
.header h1,
.header h2 {
  margin: 0.25em 0;
  font-weight: 100;
  cursor: default;
  text-align: center;
}
.header h1 {
  font-size: large;
}
.header {
  transform-origin: 50% 0%;
}
.header.not-animating.closed {
  --b: 0;
}
.header.not-animating.opened {
  --b: 1;
}
.header.not-animating {
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b)) translate3d(0px, 0px, 0px);
  will-change: initial;
  animation: none;
}
.header.animating.closed {
  --a: 1;
  --b: 0;
  --timing: ${eA};
}
.header.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ev};
}
.header.animating {
  --duration: 400ms;
  will-change: opacity, transform;
  animation: xxx-header var(--duration) var(--timing);
}
@keyframes xxx-header {
  from {
    opacity: var(--a);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--a));
  }
  to {
    opacity: var(--b);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  }
}
`;function n_(){return tZ("left",(0,v.jsx)(nJ,{}),"ui"),(0,v.jsx)("div",{id:"left"})}function nJ(){let e=(0,g.useRef)(null);return et(t7,e,"left"),(0,v.jsxs)("div",{ref:e,className:"ui-content left bottom",children:[(0,v.jsx)(nY,{}),(0,v.jsx)("style",{children:nQ})]})}let nQ=`
.left {
  ${eo}
  ${ey}
  padding: 0.4em;
  font-size: smaller;
  ${em}
  top: initial;
  align-items: end;
}
.left {
  --hh: 50vh;
  --hh: 50svh;
  transform-origin: 0% 50%;
  transform: translate(0%, calc(var(--hh) - 50%)) scale(var(--b));
}
.left.not-animating.closed {
    --b: 0;
}
.left.not-animating.opened {
    --b: 1;
}
.left.not-animating {
  opacity: var(--b);
}
.left.animating.closed {
  --a: 1;
  --b: 0;
  --timing: ${eA};
}
.left.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ev};
}
.left.animating {
  --duration: 400ms;
  will-change: opacity, transform;
  animation: xxx-left var(--duration) var(--timing) forwards;
}
@keyframes xxx-left {
  from {
    opacity: var(--a);
    transform: translate(0%, calc(var(--hh) - 50%)) scale(var(--a));
  }
  to {
    opacity: var(--b);
    transform: translate(0%, calc(var(--hh) - 50%)) scale(var(--b));
  }
}
`;function n0(){return(0,v.jsx)("div",{className:"button-item fullscreen",onClick:()=>_(ns.fullscreen),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n1})})})}let n1=`
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
`;function n2(){return(0,v.jsx)("div",{className:"button-item home",onClick:()=>nh(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n5})})})}let n5=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function n3(){return S().mapCoord.matrix.isIdentity?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)("div",{className:"button-item position",onClick:()=>_(ns.position),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n6})})})}let n4=3*Math.sqrt(2),n7=n4+6,n6=`
M 0,0
m 0,${n7/2}
l -3,-3
a ${n4},${n4} 0,1,1 6,0
z
m 0,${-n7+n4+n4/2}
a ${n4/2},${n4/2} 0,1,0 0,${-n4}
a ${n4/2},${n4/2} 0,1,0 0,${n4}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function n9(){return(0,v.jsx)("div",{className:"button-item recenter",onClick:()=>np(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n8})})})}let n8=`
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
`;function re(){return(0,v.jsx)("div",{className:"button-item rotate",onClick:()=>nd(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:rt})})})}let rt=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function rn(){return(0,v.jsx)("div",{className:"button-item zoom-in",onClick:()=>nc(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:rr})})})}let rr=`
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
`;function ro(){return(0,v.jsx)("div",{className:"button-item zoom-out",onClick:()=>nu(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:ri})})})}let ri=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function ra(){return tZ("right",(0,v.jsx)(rl,{}),"ui"),(0,v.jsx)("div",{id:"right"})}function rl(){let e=(0,g.useRef)(null);return et(t7,e,"right"),(0,v.jsxs)("div",{ref:e,className:"ui-content right bottom",children:[(0,v.jsx)(rc,{}),(0,v.jsx)("style",{children:rs})]})}let rs=`
.right {
  ${ei}
  ${ey}
  padding: 0.4em;
  font-size: smaller;
  ${em}
  top: initial;
  bottom: 0;
  align-items: end;
}
.right {
  transform-origin: 100% 50%;
}
.right.bottom {
  transform-origin: 100% 100%;
}
.right {
  transform: translate3d(0px, 0px, 0px);
}
.right.not-animating.closed {
--b: 0;
}
.right.not-animating.opened {
--b: 1;
}
.right.not-animating {
  opacity: var(--b);
  transform: scale(var(--b));
  will-change: initial;
}
.right.animating.closed {
  --a: 1;
  --b: 0;
  --timing: ${eA};
}
.right.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ev};
}
.right.animating {
  --duration: 400ms;
  will-change: opacity, transform;
  animation: xxx-right var(--duration) var(--timing) forwards;
}
@keyframes xxx-right {
  from {
    opacity: var(--a);
    transform: scale(var(--a));
  }
  to {
    opacity: var(--b);
    transform: scale(var(--b));
  }
}
`;function rc(){let e=(0,g.useRef)(null);return et(tg,e,"buttons"),(0,v.jsxs)("div",{ref:e,className:"buttons",children:[(0,v.jsx)(n3,{}),(0,v.jsx)(n2,{}),(0,v.jsx)(n0,{}),(0,v.jsx)(n9,{}),(0,v.jsx)(re,{}),(0,v.jsx)(ro,{}),(0,v.jsx)(rn,{}),(0,v.jsx)("style",{children:ru})]})}let ru=`
.buttons {
  font-size: large;
  margin: 0;
  ${ep}
}
.button.locked > .button-item {
  opacity: 0.5;
  pointer-events: none;
}
.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${ef}
  cursor: default;
  ${eS}
  transition: opacity 100ms;
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
`;function rd(e){nm.get()&&e.preventDefault()}function rh(e){(0,g.useEffect)(()=>{let t=e.current;return t&&t.addEventListener("touchmove",rd),()=>{t&&t.removeEventListener("touchmove",rd)}},[e])}function rp(){return tZ("screen",(0,v.jsx)(ry,{}),"ui"),(0,v.jsx)("div",{id:"screen"})}function ry(){let e=(0,g.useRef)(null);return et(t6,e,"screen"),rh(e),nj(e),(0,v.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>_(nx.close),children:(0,v.jsx)("style",{children:rg})})}let rg=`
.screen {
  ${eo}
  ${eh}
  background-color: none;
  cursor: default;
  pointer-events: none;
  z-index: 5;
}
.screen.not-animating.closed {
  display: none;
}
.screen.not-animating.closed.zooming {
  display: initial;
}
.screen.not-animating.opened {
  pointer-events: initial;
}
.screen.animating.closed {
  --a: 0.3;
  --b: 0;
  --timing: ${eA};
}
.screen.animating.opened {
  --a: 0;
  --b: 0.3;
  --timing: ${ev};
}
.screen.animating {
  --duration: 400ms;
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
`;function rx(){return tZ("ui",(0,v.jsx)(rm,{})),(0,v.jsx)("div",{id:"ui"})}function rm(){let e=(0,g.useRef)(null);return et(tv,e,"ui"),(0,v.jsxs)("div",{ref:e,className:"ui",children:[(0,v.jsx)(rp,{}),(0,v.jsx)(nq,{}),(0,v.jsx)(nI,{}),(0,v.jsx)(n_,{}),(0,v.jsx)(ra,{}),(0,v.jsx)(nH,{}),(0,v.jsx)(nk,{}),(0,v.jsx)("style",{children:tE})]})}function rf(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function rS(){np()}let rv=new Map;function rA(e,t){let n=rv.get(t);if(n)return function(e,t){let n=e.scrollLeft,r=e.scrollTop,o=e.scrollWidth,i=e.scrollHeight;if(null===n)return!1;let a=o-t.width,l=i-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${i}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),r!==c&&(e.scrollTop=c);let u=e.scrollLeft;if(Math.abs(u-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${u}`),!1;let d=e.scrollTop;return!(Math.abs(d-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${d}`),!1)}(n,e)}var rE=n(8077),rw=n(990),rF=n(4465),rb=n(5909);let rj=(e,t)=>(function e(t,n,r){let o=Math.min(t.length,n.length),i=t[r],a=n[r];if(r>=o||i===eF||a===eF)return rE.pH(t.length,n.length);let l=rE.pH(i.x,a.x)||rE.pH(i.y,a.y);return 0===l?e(t,n,r+1):l})(e,t,0);function rO(e){return(0,b.Fs)(e.values(),rw.Ts,rw.di(rj),rw.x1(e=>0===e.length?rb.xT:rb.Py(e[0])))}function rT(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:L(t,1/e.length)}function rM(e){return new Map((0,b.Fs)(e.changedTouches,e=>rw.O3.from(e),rw.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let rR=(0,V.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,q.a)({touches:e=>{var t,n,r;let o,i,a,l,s,c,u,d,h,{context:{touches:p},event:y}=e;return"TOUCH.START"===y.type?(t=y.ev,n=p.vecs,r=rM(t),a=rT(i=rO(o=(0,b.Fs)([...n.entries(),...r.entries()],rw.TS(new Map,(e,t)=>{let[n,r]=t,o=rF.fromUndefinedOr(e.get(n)),i=rF.isSome(o)?[...o.value,...r]:r;return new Map(e).set(n,i)})))),s=2!==i.length?null:.5>Math.abs((l=M(i[0],i[1])).y/l.x),{...p,vecs:o,points:i,cursor:a,horizontal:s}):"TOUCH.MOVE"===y.type?function(e,t){var n,r,o,i;let a,l=rM(t),s=new Map((0,b.Fs)(e.vecs.entries(),rw.Ts,rw.Tj(e=>{let t,[n,r]=e;return[n,(t=rF.fromUndefinedOr(l.get(n)),rF.isSome(t)?[...t.value,...r]:r)]}))),c=rO(s),u=rT(c),[d,h]=c;if(null===u||d===eF||h===eF)return{...e,vecs:s,points:c,cursor:u};let p=(n=e.dists,r=Math.sqrt((o=d,i=h,Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2))),a=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||a>0?[r,...n]:n),y=function(e){let[t,n,r,o]=e;return t===eF||n===eF||r===eF||o===eF?null:t<n&&n<r&&r<o?-1:t>n&&n>r&&r>o?1:null}(p);return{vecs:s,points:c,cursor:u,dists:p,z:y,horizontal:e.horizontal}}(p,y.ev):"TOUCH.END"===y.type?(c=rM(y.ev),h=rT(d=rO(u=new Map((0,b.Fs)(p.vecs.entries(),rw.Ts,rw.x1(e=>{let[t,n]=e;return c.has(t)?rb.xT:rb.Py([t,n])}))))),{vecs:u,points:d,cursor:h,dists:0===u.size?[]:p.dists,z:0===u.size?null:p.z,horizontal:p.horizontal}):p}}),raiseOp:(0,X.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,q.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,q.a)({mode:"pan"}),enterPinch:(0,q.a)({mode:"pinch"}),emitMulti:(0,tL.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,tL.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,X.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,X.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,X.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),rL=(0,X.c)(rR),rN=!1;function rC(e){rL.send({type:"TOUCH.START",ev:e})}function rk(e){rL.send({type:"TOUCH.MOVE",ev:e})}function rD(e){rL.send({type:"TOUCH.END",ev:e})}function r$(){rL.send({type:"CANCEL"})}function rI(e){nw||nE({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function rz(e){if(null!==e){let t,n,r;(t=tp.get("S"))&&clearTimeout(t),n=setTimeout(()=>{tp.delete("S"),Array.from(tg,e=>{let[,t]=e;return e8(t,"locked",!1)})},200),tp.set("S",n),Array.from(tg,e=>{let[,t]=e;return e8(t,"locked",!0)}),r=e,J(Q.eventTick,r)}}function rU(e){let t=(0,g.useRef)(null);return et(t6,t,"container"),rh(t),et(ti,t,"container"),et(tv,t,"container"),et(rv,t,"container"),(0,v.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:rC,onTouchMove:rk,onTouchEnd:rD,onClick:rI,onContextMenu:rS,onScroll:rz,onAnimationEnd:e=>{var t;t={type:"ANIMATION.END",ev:e},t.ev?.stopPropagation(),nE(t),_(ee.animationEnd)},children:[e.children,(0,v.jsx)("style",{children:rH})]})}rL.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(rN=!0,_(ng.multiStart)):(_(ng.multiEnd),rN=!1)}),rL.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,o=n.z;null!==r&&null!==o&&(t={z:o>0?1:-1,p:r},J(ng.zoom,t))});let rH=`
.container {
  ${eo}
  ${eh}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
.container.zooming {
  will-change: transform;
  transform-origin: var(--zoom-origin);
  animation: container-zoom 500ms ease;
}
.container.rotating {
  animation: container-rotate 500ms ease;
}
.container > .content {
  ${eo}
  contain: strict;
  transform: var(--layout-content-matrix) translate3d(0, 0, 0);
  transform-origin: 0% 0%;
  pointer-events: none;
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
.container.not-shown {
  opacity: 0;
}
.container.shown {
}
.container.not-appearing {
}
.container.appearing {
  will-change: opacity;
  animation: xxx-appearing 2s ${ev};
}
@keyframes container-zoom {
  from {
    transform: translate(var(--zoom-tx-a), var(--zoom-ty-a)) scale(var(--zoom-s-a)) translate3d(0px, 0px, 0px);
  }
  to {
    transform: translate(var(--zoom-tx-b), var(--zoom-ty-b)) scale(var(--zoom-s-b)) translate3d(0px, 0px, 0px);
  }
}
@keyframes container-rotate {
  from {
    transform: rotate(var(--rotate-deg-a)) translate3d(0px, 0px, 0px);
  }
  to {
    transform: rotate(var(--rotate-deg-b)) translate3d(0px, 0px, 0px);
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
`;function rP(){return null!==document.querySelector(".container")}var rW=n(3071);async function rY(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let rB=(0,V.mj)({types:{events:{},emitted:{}},actors:{api:(0,rW.Sx)(()=>rY(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,q.a)({position:e=>{let{event:t}=e;return t.output}}),(0,tL.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,q.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rZ=(0,X.c)(rB);function rG(e){let[t,n]=e;return n.map(e=>[t,e])}function rV(e){return e.reduce(function(e,t){let[n,r]=t,o=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,o]])},new Map)}function rq(e){return rV(Array.from(e).flatMap(rG).map(e=>{let[t,n]=e;return[n,t]}))}let rX=(0,p.e)(null),rK=(0,p.e)(null),r_=(0,p.e)(null),rJ=(0,p.e)(null),rQ=(0,V.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tL.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tL.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),r0=(0,X.c)(rQ);function r1(e){r0.send(e)}r0.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=f.get().mapCoord.matrix.inverse().transformPoint(t),r=t$.get();r2.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),r0.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,J(ny.end,t)});let r2=new Worker(new URL(n.p+n.u(559),n.b),Object.assign({},{type:"module"},{type:void 0}));r2.onmessage=async e=>{let t=e.data;switch(t.type){case"INIT.DONE":return r1({type:"INIT.DONE"});case"SEARCH.DONE":var n;let r;return(n=t.res,r=f.get(),Promise.resolve((e=>{let t=f.get().searchNames,n=(()=>{let e,t=f.get();if(t.getInfoByName)return t.getInfoByName;let n=rJ.get();if(null!==n)return n;let r=(e=t.searchInfos??[],t=>(e=>{let t=r_.get();if(null!==t)return t;let n=new Map(e.map(e=>[e.name,e.info]));return r_.set(n),n})(e??[]).get(t)||null);return rJ.set(r),r})();if(void 0===t||void 0===n)return null;let r=(e=>{let t=rK.get();if(null!==t)return t;let n=rq(e);return rK.set(n),n})((e=>{let t=rX.get();if(null!==t)return t;let n=e.map(e=>[e.name,e.addresses]);return rX.set(n),n})(t)).get(e.address);return void 0===r||r.size<1?null:n(Array.from(r)[0])})(n)).then(e=>null!==e?e:r.getSearchInfo(n,r.mapMap,r.osmSearchEntries)).then(e=>null===e?(console.log("info not found!",n),r1({type:"SEARCH.DONE",res:null})):r1({type:"SEARCH.DONE",res:{psvg:r.mapCoord.matrix.transformPoint(n.floorPos.coord),fidx:n.floorPos.fidx,info:e}}))).catch(e=>console.log("SEARCH.DONE",e));case"SEARCH.ERROR":return console.log("search error!",t.error),r1({type:"SEARCH.DONE",res:null})}},r2.onerror=e=>{console.error("search error",e)},r2.onmessageerror=e=>{console.error("search messageerror",e)};var r5=n(5318);let r3=Math.round,r4=document.createElement("div"),r7=new Map,r6=()=>{let e=f.get();var t=e.cartoConfig?.backgroundColor??e.backgroundColor??"darkgray";let n=r7.get(t);if(n)return n;r4.style.color=t,document.body.appendChild(r4);let r=getComputedStyle(r4).color;return document.body.removeChild(r4),r7.set(t,r),r},r9=new Map,r8=new Map;function oe(e){let t=(()=>{let e=r9.get("color");if(e)return e;let t=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:r6()});return t.parentNode||document.head.appendChild(t),r9.set("color",t),t})(),n={color:t.getAttribute("content")||r6()},{p:r,q:o}=(()=>{var e;let t=r6(),n=r8.get(t);if(n)return{p:t,q:n};let r=function(e){let{r:t,g:n,b:r}=e;return`rgb(${r3(t)}, ${r3(n)}, ${r3(r)})`}({r:(e=function(e){let t=e.match(/\d+/g);if(!t||3!==t.length)throw Error("invalid color!");let n=Number(t[0]);return{r:n,g:Number(t[1]),b:Number(t[2])}}(t)).r/2,g:e.g/2,b:e.b/2});return r8.set(t,r),{p:t,q:r}})(),i=e?o:r;(0,r5.i)(n,{color:i,duration:400,ease:"outQuad",onRender:()=>t.setAttribute("content",n.color)}),(0,r5.i)(document.body,{backgroundColor:i,duration:400,ease:"outQuad"}),(0,r5.i)(".container",{opacity:e?.5:1,duration:400,ease:"outQuad"})}function ot(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let on=(0,V.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ot(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,tL.a)({type:"RESET"}),recenter:(0,tL.a)({type:"RECENTER"}),rotate:(0,tL.a)({type:"ROTATE"}),zoom:(0,tL.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tL.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tL.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,q.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||o}})(t.mod,n.key)}}),handleUp:(0,q.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&o}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ot(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),or=(0,X.c)(on);or.on("RESET",nh),or.on("RECENTER",np),or.on("ROTATE",nd),or.on("ZOOM.IN",nc),or.on("ZOOM.OUT",nu),or.on("FLOOR.LEVEL.UP",()=>_(tR.levelUp)),or.on("FLOOR.LEVEL.DOWN",()=>_(tR.levelDown));let oo=(0,V.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:C,next:C,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,q.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,X.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!k(t.prev,t.next)},actions:[(0,q.a)({waited:0}),(0,tL.a)(e=>{var t,n,r,o;let i,a,{context:l}=e,s=f.get();return{type:"LAYOUT",layout:(t=s.fontSize,n=l.next,i=D((o={config:r=function(e,t,n,r){var o;let i,a,l,s,{outer:c,scale:u}=(o=r??n,i=t.width/t.height,s=(l=i>(a=o.width/o.height))?e2(t,a):e5(t,a),{outer:s,inner:l?e2(o,i):e5(o,i),scale:l?o.height/t.height:o.width/t.width,rO:i,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:u}}(t,n,s.origViewBox,s.origBoundingBox),...eJ(r)}).scroll),a=o.container.width/o.container.height,e7(o,a<1?1/a:1,a<1?1:+a,i)),force:!l.first}}),(0,q.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,q.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,X.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return k(t,tF.get().container)},actions:(0,q.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),oi=(0,X.c)(oo);oi.on("LAYOUT",e=>{let t;return t=e,J(ee.resize,t)}),window.addEventListener("resize",()=>{oi.send({type:"RESIZE"})});let oa=(0,V.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,q.a)({ticked:!1}),set:(0,q.a)({ticked:!0}),expire:(0,tL.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ol=(0,V.mj)({types:{},actions:{getScroll:(0,q.a)({scroll:e=>{let{context:t}=e;return function(e){let t=rv.get(e);if(t)return N(t.scrollLeft,t.scrollTop,t.scrollWidth,t.scrollHeight)}("container")??t.scroll}}),syncScroll:(e,t)=>{let{pos:n}=t;return rA(n,"container")}},actors:{syncScrollLogic:(0,rW.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!rA(t,"container"))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,tL.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,q.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,tL.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,q.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),os=(0,X.c)(ol,{systemId:"system-scroll1"});function oc(e){os.send(e)}os.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.getDone,t)}),os.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.syncSyncDone,t)});let ou=(h=()=>_(Q.eventExpire),u=oa.provide({delays:{DURATION:500}}),(d=(0,X.c)(u)).on("EXPIRE",h),d.start(),{tick:function(){d.send({type:"TICK"})}}),od=(0,p.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function oh(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),od.trigger.set({names:t}))}async function op(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let oy=`
@property --a {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --balloon-opacity {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --balloon-phh {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --balloon-pww {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --balloon-scale {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --balloon-translate-x {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --balloon-translate-y {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --balloon-tx-a-x {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --balloon-tx-a-y {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --balloon-tx-b-x {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --balloon-tx-b-y {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --b {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --distance-idx {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
@property --distance-radius-client {
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
@property --hh {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
/*
@property --layout-container-height {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --layout-container-width {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
*/
@property --layout-content-matrix {
  syntax: '*';
  inherits: false;
  initial-value: matrix(1, 0, 0, 1, 0, 0);
}
@property --layout-fontsize {
  syntax: '<number>';
  inherits: true;
  initial-value: 16;
}
@property --layout-scroll-height {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --layout-scroll-width {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --layout-svg-x {
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
@property --layout-svg-y {
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
@property --layout-svg-width {
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
@property --layout-svg-height {
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
@property --layout-svgscale {
  syntax: '<number>';
  inherits: true;
  initial-value: 1;
}
@property --layout-svg-to-content-matrix {
  syntax: '*';
  inherits: false;
  initial-value: matrix(1, 0, 0, 1, 0, 0);
}
@property --poi-scale {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --poi-x {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --poi-y {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --zoom-deg {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
@property --zoom-deg-inv {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
@property --zoom-k-inv {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --zoom-k {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --zoom-origin {
  syntax: '<length-percentage>+';
  inherits: false;
  initial-value: 0% 0%;
}
@property --zoom-s-inv-symbols {
  syntax: '<number>';
  inherits: true;
  initial-value: 1;
}
@property --zoom-s-inv {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --zoom-s-symbols {
  syntax: '<number>';
  inherits: true;
  initial-value: 1;
}
@property --zoom-s {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --zoom-tx {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --zoom-ty {
  syntax: '<length>';
  inherits: false;
  initial-value: 0;
}
@property --zoom-z-inv {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --zoom-zoom {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
@property --zoom-z {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
`,og=`
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
  ${eo}
  ${eh}
  ${eu}
  ${ed}
  ${ex}
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
${oy}
`,ox=function(){let e,t=S(),n=t.cartoConfig?.backgroundColor??t.backgroundColor??"darkgray",r={data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig};return e=tT(e=>e.rendered),(0,g.useEffect)(()=>{requestAnimationFrame(()=>tk())},[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(rU,{...r,children:t.renderMap(r)}),(0,v.jsx)(rx,{}),(0,v.jsxs)("style",{children:[og,`body { background-color: ${n}; }`]})]})};function om(e){return tZ(`map-floors-html-labels-${e.fidx}`,(0,v.jsx)(of,{...e}),"map-floors-html"),(0,v.jsx)("div",{id:`map-floors-html-labels-${e.fidx}`})}function of(e){let{labels:t}=e;return(0,v.jsxs)("div",{className:"labels",children:[t?.map((e,t)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(oS,{_text:e})},t)),(0,v.jsx)("style",{children:ov})]})}function oS(e){let{_text:t}=e;return(0,v.jsx)("div",{className:"label",style:{"--x":(t.attrs?.x||0)+"px","--y":(t.attrs?.y||0)+"px","--rotate":(t.attrs?.rotate||0)+"deg","--scale2":(t.attrs?.scale2||1)+"","--scale1":(t.attrs?.scale1||1)+""},children:t.children?.map((e,t)=>(0,v.jsx)("p",{children:e.text??""},t))})}let ov=`
@property --zoom {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
.labels {
  /* default */
  --zoom: 1;
  --zoom-zoom: 1;
}
.label {
  position: absolute;
  transform-origin: 0% 0%;
  /*
  transform: translate(var(--x), var(--y)) rotate(var(--rotate)) scale(var(--zoom-z-inv)) scale(var(--scale2)) scale(var(--scale1)) translate(-50%, -50%);
  */
  transform: translate(var(--x), var(--y)) rotate(var(--rotate)) scale(var(--scale2)) scale(var(--scale1)) translate(-50%, -50%);
  text-align: center;
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
.label > p {
  margin: 0;
}
/*
@keyframes xxx-label-scale {
  from {
    --zoom: 1;
  }
  to {
    --zoom: var(--zoom-z-inv-b);
  }
}
*/
`;function oA(e){let t=(0,g.useRef)(null);return et(tn,t,"map-floors-html-content"),tZ("map-floors-html",(0,v.jsx)(oE,{...e})),(0,v.jsx)("div",{ref:t,id:"map-floors-html",className:"content"})}function oE(e){return(0,v.jsxs)("div",{className:"map-floors-html-content",children:[(0,v.jsx)(ow,{...e}),(0,v.jsx)("style",{children:oF})]})}function ow(e){let{floors:t}=e,n=(0,g.useRef)(null);return et(tn,n,"map-floors-html"),(0,v.jsx)("div",{ref:n,className:"map-floors-html",children:t?.floors.map((e,n)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(ob,{fidx:n,floor:e,labelsMap:t?.labelsMap})},n))})}let oF=`
.map-floors-html {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
  transform: var(--layout-svg-to-content-matrix) !important;
  transform-origin: 0% 0% !important;
}
`;function ob(e){let{fidx:t,floor:n,labelsMap:r}=e,o=(0,g.useRef)(null);return et(tD,o,`html-${t}`),(0,v.jsx)("div",{ref:o,className:`floor fidx-${t}`,children:(0,v.jsx)(om,{fidx:t,labels:n.labels??function(e,t){if(void 0===e)return;let n=Array.from(oj.values());if(1===n.length)return n[0].get(t);let r=e instanceof Map?e:new Map(e instanceof Array?e:Object.entries(e));return oj.add(r),r.get(t)}(r,n.name.toLowerCase())})})}let oj=new Set;function oO(e){let{floors:t,data:{origViewBox:n}}=e,r=(0,g.useRef)(null);et(tn,r,"map-floors-svg");let o=tH();return(0,v.jsxs)("div",{ref:r,className:"content map-floors-svg",children:[(0,v.jsx)(oM,{children:t?.floors.map((e,t)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(oR,{fidx:t,origViewBox:n,ctx:o})},t))}),(0,v.jsx)("style",{children:oT})]})}let oT=`
svg.content-svg {
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
${ew}
`;function oM(e){let t=(0,g.useRef)(null),{viewBox:n}=function(){let{svg:e}=tT(e=>e.layout);return{viewBox:z(e)}}();return et(tn,t,"floors-svg"),(0,v.jsx)("svg",{ref:t,id:"map-svg-floors",className:"content-svg",viewBox:n,children:e.children})}function oR(e){let{fidx:t,origViewBox:n,ctx:{fidxToOnAnimationEnd:r,urls:o}}=e,i=(0,g.useRef)(null);return et(tD,i,`svg-${t}`),(0,v.jsx)("g",{ref:i,className:`floor fidx-${t}`,onAnimationEnd:r(t),children:(0,v.jsx)(oL,{fidx:t,origViewBox:n,url:o.get(t)})})}function oL(e){let{origViewBox:t,url:n}=e;return(0,v.jsx)("image",{x:t.x,y:t.y,width:t.width,height:t.height,href:n})}let oN=n.p+"static/svg/floor-1F.e32e8c2928.svg",oC=n.p+"static/svg/floor-2F.5686f181e6.svg",ok=n.p+"static/svg/floor-3F.757f05a6e8.svg";function oD(e,t){return Object.entries(e).map(e=>{let[n,r]=e;return[n,{coord:r,fidx:t}]})}var o$=JSON.parse('{"A1F-Shops-1-1":{"x":143.974,"y":593.07},"A1F-Shops-1-2":{"x":141.974,"y":547.07},"A1F-Shops-1-3":{"x":139.974,"y":527.07},"A1F-Shops-1-4":{"x":139.974,"y":509.07},"A1F-Shops-1-5":{"x":139.974,"y":489.07},"A1F-Shops-1-6":{"x":138.974,"y":466.07},"A1F-Shops-1-7":{"x":139.974,"y":448.07},"A1F-Shops-1-8":{"x":151.974,"y":424.07},"A1F-Shops-1-9":{"x":151.974,"y":408.07},"A1F-Shops-1-10":{"x":151.974,"y":384.07},"A1F-Shops-1-11":{"x":153.974,"y":365.07},"A1F-Shops-1-12":{"x":144.974,"y":344.07},"A1F-Shops-1-13":{"x":147.974,"y":311.07},"A1F-Shops-1-14":{"x":226.974,"y":300.07},"A1F-Shops-1-15":{"x":250.974,"y":294.07},"A1F-Shops-1-16":{"x":272.974,"y":293.07},"A1F-Shops-1-17":{"x":299.974,"y":295.07},"A1F-Shops-1-18":{"x":355.974,"y":304.07},"A1F-Shops-1-19":{"x":360.974,"y":365.07},"A1F-Shops-1-20":{"x":360.974,"y":385.07},"A1F-Shops-1-21":{"x":360.974,"y":405.07},"A1F-Shops-1-22":{"x":360.974,"y":425.07},"A1F-Shops-1-23":{"x":360.974,"y":445.07},"A1F-Shops-1-24":{"x":357.974,"y":507.07},"A1F-Shops-1-25":{"x":355.974,"y":527.07},"A1F-Shops-1-26":{"x":362.974,"y":547.07},"A1F-Shops-1-27":{"x":361.974,"y":566.07},"A1F-Shops-1-28":{"x":321.974,"y":620.07},"A1F-Shops-1-29":{"x":293.974,"y":624.07},"A1F-Shops-1-30":{"x":260.974,"y":627.07},"A1F-Shops-1-31":{"x":229.974,"y":637.07},"A1F-Shops-1-32":{"x":199.974,"y":642.07},"A1F-Shops-1-33":{"x":198.974,"y":537.07},"A1F-Shops-1-34":{"x":197.974,"y":510.07},"A1F-Shops-1-35":{"x":197.974,"y":488.07},"A1F-Shops-1-36":{"x":196.974,"y":467.07},"A1F-Shops-1-37":{"x":197.974,"y":449.07},"A1F-Shops-1-38":{"x":192.974,"y":426.07},"A1F-Shops-1-39":{"x":198.974,"y":405.07},"A1F-Shops-1-40":{"x":229.974,"y":344.07},"A1F-Shops-1-41":{"x":249.974,"y":344.07},"A1F-Shops-1-42":{"x":279.974,"y":343.07},"A1F-Shops-1-43":{"x":319.974,"y":384.07},"A1F-Shops-1-44":{"x":320.974,"y":403.07},"A1F-Shops-1-45":{"x":303.974,"y":426.07},"A1F-Shops-1-46":{"x":301.974,"y":455.07},"A1F-Shops-1-47":{"x":302.974,"y":520.07},"A1F-Shops-1-48":{"x":303.974,"y":546.07},"A1F-Shops-1-49":{"x":252.974,"y":571.07},"A1F-Shops-1-50":{"x":219.974,"y":579.07},"A1F-Shops-2-1":{"x":288,"y":209.205},"A1F-Shops-2-2":{"x":288,"y":162.205},"A1F-Shops-2-3":{"x":289,"y":127.205},"A1F-Shops-2-4":{"x":221,"y":172.205},"A1F-Shops-2-5":{"x":191,"y":217.205},"A1F-Shops-3-1":{"x":449,"y":461.205},"A1F-Shops-3-2":{"x":448,"y":424.205},"A1F-Shops-3-3":{"x":447,"y":383.205},"A1F-Shops-3-4":{"x":496,"y":327.205},"A1F-Shops-3-5":{"x":505,"y":387.205},"A1F-Shops-3-6":{"x":504,"y":411.205},"A1F-Shops-3-7":{"x":504,"y":435.205},"A1F-Shops-3-8":{"x":475,"y":568.205},"A1F-Shops-4-1":{"x":476.852,"y":602.072},"A1F-Shops-4-2":{"x":322.335,"y":656.311},"A1F-Shops-4-3":{"x":344.974,"y":602.07}}'),oI=JSON.parse('{"A2F-Shops-1-1":{"x":142.039,"y":604.451},"A2F-Shops-1-2":{"x":139.922,"y":556.562},"A2F-Shops-1-3":{"x":138.334,"y":531.426},"A2F-Shops-1-4":{"x":138.864,"y":512.376},"A2F-Shops-1-5":{"x":145.478,"y":491.21},"A2F-Shops-1-6":{"x":136.747,"y":470.308},"A2F-Shops-1-7":{"x":137.805,"y":445.966},"A2F-Shops-1-8":{"x":145.478,"y":424.799},"A2F-Shops-1-9":{"x":151.034,"y":407.601},"A2F-Shops-1-10":{"x":152.093,"y":390.403},"A2F-Shops-1-11":{"x":153.68,"y":367.914},"A2F-Shops-1-12":{"x":146.272,"y":326.374},"A2F-Shops-1-13":{"x":206.332,"y":323.993},"A2F-Shops-1-14":{"x":228.028,"y":303.885},"A2F-Shops-1-15":{"x":261.63,"y":288.01},"A2F-Shops-1-16":{"x":273.536,"y":321.347},"A2F-Shops-1-17":{"x":296.026,"y":329.814},"A2F-Shops-1-18":{"x":316.928,"y":297.005},"A2F-Shops-1-19":{"x":364.553,"y":356.272},"A2F-Shops-1-20":{"x":364.553,"y":381.937},"A2F-Shops-1-21":{"x":364.289,"y":409.453},"A2F-Shops-1-22":{"x":364.553,"y":428.768},"A2F-Shops-1-23":{"x":364.289,"y":449.67},"A2F-Shops-1-24":{"x":364.289,"y":509.995},"A2F-Shops-1-25":{"x":364.553,"y":531.426},"A2F-Shops-1-26":{"x":363.759,"y":551.005},"A2F-Shops-1-27":{"x":364.289,"y":577.464},"A2F-Shops-1-28":{"x":328.041,"y":630.645},"A2F-Shops-1-29":{"x":282.532,"y":633.291},"A2F-Shops-1-30":{"x":251.047,"y":636.995},"A2F-Shops-1-31":{"x":208.184,"y":643.345},"A2F-Shops-1-32":{"x":205.009,"y":550.212},"A2F-Shops-1-33":{"x":203.422,"y":531.691},"A2F-Shops-1-34":{"x":202.099,"y":512.376},"A2F-Shops-1-35":{"x":203.157,"y":491.739},"A2F-Shops-1-36":{"x":203.157,"y":470.572},"A2F-Shops-1-37":{"x":202.628,"y":452.845},"A2F-Shops-1-38":{"x":197.601,"y":429.033},"A2F-Shops-1-39":{"x":300.524,"y":421.36},"A2F-Shops-1-40":{"x":292.851,"y":367.914},"A2F-Shops-1-41":{"x":299.73,"y":520.578},"A2F-Shops-1-42":{"x":299.995,"y":549.418},"A2F-Shops-1-43":{"x":251.576,"y":575.082},"A2F-Shops-1-44":{"x":221.943,"y":575.082},"A2F-Shops-1-45":{"x":205.009,"y":408.13},"A2F-Shops-2-1":{"x":437.314,"y":438.822},"A2F-Shops-2-2":{"x":436.784,"y":419.772},"A2F-Shops-2-3":{"x":437.049,"y":399.928},"A2F-Shops-2-4":{"x":436.255,"y":382.73},"A2F-Shops-2-5":{"x":436.784,"y":363.945},"A2F-Shops-2-6":{"x":436.784,"y":346.483},"A2F-Shops-2-7":{"x":437.049,"y":328.755},"A2F-Shops-2-8":{"x":472.239,"y":306.266},"A2F-Shops-2-9":{"x":492.347,"y":306.001},"A2F-Shops-2-10":{"x":492.611,"y":402.31},"A2F-Shops-2-11":{"x":465.359,"y":567.939},"A2F-Shops-3-1":{"x":466.418,"y":599.689}}'),oz=JSON.parse('{"A3F-Shops-1-1":{"x":148.653,"y":623.501},"A3F-Shops-1-2":{"x":143.891,"y":592.016},"A3F-Shops-1-3":{"x":142.568,"y":572.966},"A3F-Shops-1-4":{"x":140.981,"y":551.535},"A3F-Shops-1-5":{"x":138.07,"y":530.368},"A3F-Shops-1-6":{"x":137.276,"y":499.412},"A3F-Shops-1-7":{"x":138.335,"y":458.931},"A3F-Shops-1-8":{"x":149.976,"y":412.629},"A3F-Shops-1-9":{"x":151.299,"y":386.964},"A3F-Shops-1-10":{"x":153.151,"y":366.856},"A3F-Shops-1-11":{"x":145.743,"y":347.012},"A3F-Shops-1-12":{"x":155.797,"y":316.056},"A3F-Shops-1-13":{"x":248.137,"y":308.118},"A3F-Shops-1-14":{"x":315.341,"y":308.647},"A3F-Shops-1-15":{"x":354.764,"y":348.07},"A3F-Shops-1-16":{"x":363.76,"y":366.856},"A3F-Shops-1-17":{"x":365.347,"y":387.758},"A3F-Shops-1-18":{"x":364.818,"y":407.866},"A3F-Shops-1-19":{"x":357.939,"y":435.118},"A3F-Shops-1-20":{"x":355.028,"y":509.466},"A3F-Shops-1-21":{"x":365.612,"y":531.162},"A3F-Shops-1-22":{"x":364.553,"y":549.683},"A3F-Shops-1-23":{"x":360.32,"y":578.522},"A3F-Shops-1-24":{"x":306.874,"y":634.085},"A3F-Shops-1-25":{"x":251.841,"y":639.112},"A3F-Shops-1-26":{"x":230.674,"y":640.17},"A3F-Shops-1-27":{"x":197.866,"y":644.139},"A3F-Shops-1-28":{"x":203.951,"y":540.422},"A3F-Shops-1-29":{"x":194.162,"y":512.906},"A3F-Shops-1-30":{"x":202.364,"y":492.533},"A3F-Shops-1-31":{"x":197.601,"y":470.308},"A3F-Shops-1-32":{"x":197.337,"y":454.168},"A3F-Shops-1-33":{"x":197.866,"y":428.768},"A3F-Shops-1-34":{"x":205.01,"y":407.601},"A3F-Shops-1-35":{"x":293.38,"y":371.089},"A3F-Shops-1-36":{"x":298.937,"y":401.516},"A3F-Shops-1-37":{"x":299.466,"y":429.297},"A3F-Shops-1-38":{"x":301.583,"y":452.845},"A3F-Shops-1-39":{"x":299.731,"y":510.524},"A3F-Shops-1-40":{"x":300.789,"y":531.162},"A3F-Shops-1-41":{"x":300.789,"y":551.535},"A3F-Shops-1-42":{"x":235.172,"y":574.289}}');let oU=[...oD(o$,0),...oD(oI,1),...oD(oz,2)],oH=Object.values(JSON.parse('{"1F":{"23区":["A1F-Shops-1-12"],"ABAHOUSE":["A1F-Shops-1-29"],"ACE BAGS&LUGGAGE":["A1F-Shops-1-6"],"ADAM ET ROPÉ":["A1F-Shops-1-24"],"alfredoBANNISTER":["A1F-Shops-1-25"],"AS KNOW AS outlet":["A1F-Shops-1-38"],"AVIREX DEPOT":["A1F-Shops-1-27"],"BAYSIDE FOOD HALL":["A1F-Shops-3-8"],"BLUE LABEL / BLACK LABEL　CRESTBRIDGE":["A1F-Shops-1-33"],"Celule":["A1F-Shops-1-8"],"Ciaopanic BY PALGROUPOUTLET":["A1F-Shops-1-28"],"Cobra Puma Golf":["A1F-Shops-1-31"],"crocs":["A1F-Shops-1-5"],"DIESEL":["A1F-Shops-1-50"],"FEILER":["A1F-Shops-1-43"],"FREAK\'S STORE OUTLET":["A1F-Shops-1-47"],"FREDY&GLOSTER OUTLET":["A1F-Shops-1-14"],"GAP OUTLET":["A1F-Shops-1-18"],"Glorious Chain Café":["A1F-Shops-1-49"],"HELLY HANSEN":["A1F-Shops-1-23"],"LACOSTE OUTLET":["A1F-Shops-1-32"],"MEYER":["A1F-Shops-1-37"],"moda Clea OUTLET":["A1F-Shops-1-19"],"nano･universe":["A1F-Shops-1-30"],"NATURAL BEAUTY BASIC":["A1F-Shops-1-34"],"NICE CLAUP OUTLET":["A1F-Shops-1-11"],"ORiental TRaffic OUTLET":["A1F-Shops-1-10"],"POLICE OUTLET by Lunetterie":["A1F-Shops-1-3"],"REGAL FACTORY STORE":["A1F-Shops-1-36"],"russet":["A1F-Shops-1-7"],"SHEL\'TTER/MOUSSY":["A1F-Shops-1-26"],"T-fal OUTLET STORE":["A1F-Shops-1-15"],"TAKEO KIKUCHI":["A1F-Shops-1-35"],"TOMMY HILFIGER":["A1F-Shops-1-1"],"Triumph":["A1F-Shops-1-22"],"UCHINO Factory Outlet":["A1F-Shops-1-20"],"UNTITLED/INDIVI":["A1F-Shops-1-21"],"URBAN RESEARCH ware house":["A1F-Shops-1-46"],"VERITE":["A1F-Shops-1-9"],"yutori no kukan market by 栗原 はるみ":["A1F-Shops-1-40"],"ZWILLING/STAUB":["A1F-Shops-1-39"],"もみじ茶屋":["A1F-Shops-3-5"],"シルバニアファミリー森のお家/ジグソーパズルのお店マスターピース":["A1F-Shops-1-44"],"スターバックス コーヒー":["A1F-Shops-3-3"],"テンピュール":["A1F-Shops-1-17"],"バナナ･リパブリック ファクトリーストア":["A1F-Shops-1-13"],"ママのリフォーム":["A1F-Shops-4-3"],"マリーナサロン":["A1F-Shops-4-1"],"ミゲル フアニ":["A1F-Shops-3-7"],"リサマリ":["A1F-Shops-1-48"],"ル・クルーゼ":["A1F-Shops-1-41"],"レゴ®ストア":["A1F-Shops-1-42"],"ワコール ファクトリーストア":["A1F-Shops-1-16"],"回転寿司 函館まるかつ水産":["A1F-Shops-3-4"],"成城石井":["A1F-Shops-3-2"],"春水堂":["A1F-Shops-3-6"]},"2F":{"ARMANI OUTLET":["A2F-Shops-1-23"],"BALLY":["A2F-Shops-1-25"],"BC STOCK　（JOURNAL STANDARD/EDIFICE IENA/SPICK&SPAN）":["A2F-Shops-1-31"],"BEAMS OUTLET":["A2F-Shops-1-29"],"BOTANIST Factory / and Habit":["A2F-Shops-1-32"],"BRIEFING":["A2F-Shops-1-45"],"CALVIN KLEIN":["A2F-Shops-1-33"],"COACH":["A2F-Shops-1-39"],"Cosmetics & Designer Fragrances":["A2F-Shops-1-36"],"CURRY＆NAN DIYA EXPRESS":["A2F-Shops-2-3"],"FURLA":["A2F-Shops-1-27"],"garage YOKOHAMA":["A2F-Shops-2-11"],"Gente di Mare":["A2F-Shops-1-35"],"genten":["A2F-Shops-1-37"],"Import Outer & Select Shop YOKOHAMA":["A2F-Shops-1-9"],"J.PRESS":["A2F-Shops-1-6"],"kate spade new york":["A2F-Shops-1-41"],"kate spade new york kids":["A2F-Shops-1-42"],"LONCAFE":["A2F-Shops-2-1"],"MARC JACOBS":["A2F-Shops-1-13"],"Merengue":["A2F-Shops-2-10"],"Michael Kors":["A2F-Shops-1-1"],"MOONBAT OUTLET":["A2F-Shops-1-11"],"NOLLEY\'S OUTLET":["A2F-Shops-1-14"],"Paul Smith BAG":["A2F-Shops-1-10"],"Paul Smith UNDERWEAR":["A2F-Shops-1-43"],"POLO RALPH LAUREN FACTORY STORE":["A2F-Shops-1-28"],"RIEDEL THE CELLAR Ginza":["A2F-Shops-1-2"],"SAINT JAMES":["A2F-Shops-1-4"],"Samsonite BLACK LABEL":["A2F-Shops-1-5"],"SCOTCH GRAIN":["A2F-Shops-1-16"],"SeeP EYEVAN":["A2F-Shops-1-38"],"SHIPS OUTLET":["A2F-Shops-1-15"],"STRASBURGO":["A2F-Shops-1-24"],"THE NORTH FACE":["A2F-Shops-1-7"],"TOMORROWLAND":["A2F-Shops-1-18"],"TUMI":["A2F-Shops-1-21"],"UMAMI BURGER":["A2F-Shops-2-2"],"UNITED ARROWS LTD. OUTLET":["A2F-Shops-1-12"],"アフタヌーンティー・リビング":["A2F-Shops-1-34"],"コール ハーン":["A2F-Shops-1-19"],"ハンティング・ワールド":["A2F-Shops-1-8"],"ブルックス ブラザーズ":["A2F-Shops-1-22"],"ボス アウトレット":["A2F-Shops-1-20"],"リンツ ショコラ ブティック＆カフェ":["A2F-Shops-1-44"],"中華そば 髙野":["A2F-Shops-2-8"],"全国ご当地 てっぱん屋台":["A2F-Shops-2-6"],"帽子屋 OUTLET":["A2F-Shops-1-30"],"梅蘭":["A2F-Shops-2-4"],"江之島亭":["A2F-Shops-2-5"],"白楽栗山製麺":["A2F-Shops-2-7"],"難波千日前 釜たけうどん 明石焼":["A2F-Shops-2-9"]},"3F":{"AIGLE OUTLET":["A3F-Shops-1-18"],"Callaway":["A3F-Shops-1-30"],"carcru stock":["A3F-Shops-1-9"],"CITIZEN":["A3F-Shops-1-29"],"Colantotte OUTLET":["A3F-Shops-1-2"],"Columbia":["A3F-Shops-1-19"],"DESCENTE STORE":["A3F-Shops-1-42"],"EDWIN/SOMETHING":["A3F-Shops-1-28"],"Foxfire FACTORY OUTLET":["A3F-Shops-1-17"],"Fukuske Outlet":["A3F-Shops-1-25"],"GARMIN":["A3F-Shops-1-4"],"GREGORY":["A3F-Shops-1-41"],"HAWKINS":["A3F-Shops-1-38"],"HOKA":["A3F-Shops-1-11"],"HURLEY OUTLET STORE":["A3F-Shops-1-35"],"Lee OUTLET":["A3F-Shops-1-39"],"LEVI\' S® FACTORY OUTLET":["A3F-Shops-1-21"],"LOCAL MOTION":["A3F-Shops-1-10"],"MFC STORE":["A3F-Shops-1-31"],"MITSUMINE":["A3F-Shops-1-26"],"mont-bell/mont-bell factory outlet":["A3F-Shops-1-12"],"New Balance Factory Store":["A3F-Shops-1-23"],"NIKE UNITE YOKOHAMA":["A3F-Shops-1-13"],"PET PARADISE":["A3F-Shops-1-8"],"PUMA OUTLET":["A3F-Shops-1-27"],"QUIKSILVER OUTLET STORE / BILLABONG OUTLET STORE":["A3F-Shops-1-7"],"Ray-Ban":["A3F-Shops-1-15"],"ROCCA&FRIENDS CREPERIE to TEA":["A3F-Shops-1-32"],"Timberland":["A3F-Shops-1-22"],"TRAVISMATHEW":["A3F-Shops-1-34"],"UNDER ARMOUR FACTORY HOUSE":["A3F-Shops-1-1"],"VAN OUTLET":["A3F-Shops-1-3"],"アシックス ファクトリーアウトレット":["A3F-Shops-1-14"],"アディダス ファクトリーアウトレット":["A3F-Shops-1-24"],"アディダスゴルフ ファクトリー アウトレット":["A3F-Shops-1-36"],"オロビアンコ":["A3F-Shops-1-20"],"セイコーアウトレット":["A3F-Shops-1-5"],"チャンピオン":["A3F-Shops-1-40"],"テーラーメイド":["A3F-Shops-1-16"],"ニューバランスゴルフ":["A3F-Shops-1-6"],"ｿﾞﾌ ｱｳﾄﾚｯﾄ":["A3F-Shops-1-37"]}}')).flatMap(function(e){return Object.entries(e)});rV(Array.from(oH).flatMap(rG));let oP=rq(oH);var oW=JSON.parse('{"x":120.85,"y":276.05,"width":261.42,"height":385.96}');!function(e){let t,n;tN.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;tz.send({type:"INIT",nfloors:t,fidx:n}),tU.postMessage({type:"INIT",cfg:e.floorsConfig,base:e.base})}}),tR.select.add(e=>tz.send({type:"SELECT",fidx:e})),tR.levelUp.add(()=>tz.send({type:"LEVEL.UP"})),tR.levelDown.add(()=>tz.send({type:"LEVEL.DOWN"})),tR.selectDone.add(e=>tz.send({type:"SELECT.DONE",fidx:e})),ns.fullscreen.add(op),tN.init.add(oh),ns.position.add(()=>{var e;return e={type:"GET"},void rZ.send(e)}),Q.eventTick.add(tf),Q.eventTick.add(ou.tick),Q.get.add(()=>oc({type:"GET"})),Q.sync.add(e=>oc({type:"SYNC",pos:e})),Q.syncSync.add(e=>oc({type:"SYNCSYNC",pos:e})),tN.init.add(e=>e.searchAddresses?Promise.resolve(e.searchAddresses).then(e=>{let t=e.map(e=>({...e,pos:e.floorPos}));r2.postMessage({type:"INIT",entries:t})}):e.getSearchEntries?Promise.resolve(e.getSearchEntries(e)).then(e=>{r2.postMessage({type:"INIT",entries:e})}):void 0),ny.start.add(function(e){r0.send({type:"SEARCH",req:e})}),ee.layout.add(function(e){let{layout:t,force:n}=e;tO({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>tM())}),ee.zoomStart.add(function(e){tO({type:"STYLE.ZOOM",...e}),tO({type:"STYLE.ANIMATION",animation:e.q})}),ee.zoomEnd.add(function(e){tO({type:"STYLE.ZOOM",zoom:e.zoom}),tO({type:"STYLE.ANIMATION",animation:e.q})}),ee.animationEnd.add(function(){tO({type:"STYLE.ANIMATION.END"})}),ee.mode.add(function(e){tO({type:"STYLE.MODE",mode:e})}),Q.eventExpire.add(tM),ns.reset.add(r$),ns.fullscreen.add(r$),ns.position.add(r$),ns.recenter.add(r$),ns.zoomOut.add(r$),ns.zoomIn.add(r$),ny.endDone.add(e=>nR.send({type:"DETAIL",...e})),nx.open.add(()=>{let e;return e=!0,J(nx.openDone,e)}),nx.openDone.add(e=>nR.send({type:e?"OPEN":"CANCEL"})),nx.close.add(()=>nR.send({type:"CANCEL"})),tR.lock.add(e=>nE({type:"SWITCH",fidx:e})),tR.selectDone.add(()=>nE({type:"SWITCH.DONE"})),ny.end.add(e=>nA.send({type:"SEARCH.END",res:e})),nx.open.add(()=>nS.set("locked")),nx.closeDone.add(()=>nE({type:"SEARCH.DONE"})),nx.closeDone.add(()=>nS.set("panning")),Q.getDone.add(e=>{null!==e&&nE({type:"SCROLL.GET.DONE",scroll:e})}),Q.syncSyncDone.add(e=>{null!==e&&nE({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),ee.resize.add(e=>{let{layout:t,force:n}=e;return nE({type:"RESIZE",layout:t,force:n})}),ee.mode.add(nb),ee.zoomStart.add(()=>{nF=!0}),ee.zoomEnd.add(()=>{nF=!1}),ns.reset.add(()=>nE({type:"HOME"})),ns.recenter.add(()=>nE({type:"RECENTER"})),ns.rotate.add(()=>nE({type:"ROTATE"})),ns.zoomOut.add(()=>nE({type:"ZOOM",z:-1,p:null})),ns.zoomIn.add(()=>nE({type:"ZOOM",z:1,p:null})),ng.multiStart.add(()=>_(Q.get)),ng.multiStart.add(()=>nS.set("touching")),ng.multiEnd.add(()=>nS.set("panning")),ng.zoom.add(e=>{let{z:t,p:n}=e;return nE({type:"ZOOM",z:t>0?1:-1,p:n})}),tN.rendered.add(()=>nE({type:"RENDERED"})),tz.start(),or.start(),rZ.start(),oi.start(),os.start(),r0.start(),tj.start(),nx.open.add(()=>oe(!0)),nx.close.add(()=>oe(!1)),rL.start(),nR.start(),nA.start();let r=(n={origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:rP,isUiRendered:rf,...e},f.set(e=>({...e,...n})),{...f.get(),origViewBox:t,...e});tC(r);let o=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.6.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),o.get("info")){let e=f.get(),t=document.getElementById(e.root);if(null===t)throw Error("#root not found!");(0,tW.createRoot)(t).render((0,v.jsx)(g.StrictMode,{children:(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"svgmapviewer"}),(0,v.jsx)("h2",{children:r.title}),(0,v.jsx)("div",{className:"info",children:(0,v.jsx)(tP.h,{className:"qrcode",marginSize:6,value:document.location.origin+document.location.pathname,width:"60vmin",height:"60vmin"})}),(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,v.jsx)("style",{children:tY})]})}))}else{let e=document.getElementById(r.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||nF)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(nF){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!rN)return;e.preventDefault()},document.title=r.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void or.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void or.send(t)},(0,tW.createRoot)(e).render((0,v.jsx)(g.StrictMode,{children:(0,v.jsx)(ox,{})}))}}({renderMap:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(oO,{...e}),(0,v.jsx)(oA,{...e})]})},isMapRendered:function(){return!0},...{root:"root",title:"Mitsui Outlet Park - Yokohama Bayside",backgroundColor:"#ffffff",origViewBox:JSON.parse('{"x":0,"y":82.21,"width":588.08,"height":694.48}'),origBoundingBox:oW,zoomFactor:2,floorsConfig:{floors:[{name:"1F",href:oN},{name:"2F",href:oC},{name:"3F",href:ok}],initialFidx:0},...{getSearchEntries:function(){return oU.map(e=>{let[t,n]=e;return{address:t,floorPos:n}})},getSearchInfo:function(e){let t=oP.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},RenderInfo:function(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("p",{children:e.info.title})})}}}})}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,a.d=(e,t,n)=>{var r=(t,n)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[n]:t[r]})};r(t,"get"),r(n,"value")},a.u=e=>"static/js/async/"+e+"."+({103:"98fb596a4d",559:"5336194504"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,o)=>{if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var l=1/0,i=0;i<e.length;i++){for(var[n,r,o]=e[i],s=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t},a.p="/demos/MitsuiOutletPark-YokohamaBayside/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,o,[i,l,s]=n,c=0;if(i.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var u=s(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","460","667"],()=>a(8118));l=a.O(l)})();