(()=>{"use strict";var e,t,n,r,o={7282(e,t,n){let r,o,i,a,l,s,c,u,d;var h,p=n(376),g=n(8783),m=n(5906);let y={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let x={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:y,internals:y,origin:y,measures:y,viewbox:y,points:y,lines:y,multilinestrings:y,multipolygons:y},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,m.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,RenderInfo:function(e){return(0,m.createElement)("p",{},e.info.title)}},f=(0,p.e)(x),S=()=>(0,g.fp)(f);var v=n(4202);n(437);var A=n(215);let w=A.gPz([A.wNn,A.QfV]),b=A.O31(w);r=A._kM({ids:b}),A.mj7(r);let E=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var j=n(3024);function N(e,t,n){let[r,o,i]=e,[a,l]=t;return r*a+o*l+i*n}function F(e,t,n){return[N(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),N(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function M(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function B(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}let O={x:0,y:0};function D(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,o=e.x*n,i=e.y*r;return{...e,x:o,y:i}}function k(e,t,n,r){return{x:e,y:t,width:n,height:r}}let C={x:0,y:0,width:1,height:1};function $(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function R(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function T(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function z(e,t){return{...e,x:t.x,y:t.y}}function L(e){return function(e){let{x:t,y:n,width:r,height:o}=e;return`${t} ${n} ${r} ${o}`}(function(e,t){let{x:n,y:r,width:o,height:i}=e;return{x:t(n),y:t(r),width:t(o),height:t(i)}}(e,function(e){return Math.round(100*e)/100}))}function I(e){let{x:t,y:n,width:r,height:o}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+o}}}function H(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function P(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function U(e){let[[t,n],[r,o]]=e;return{tl:{x:t,y:n},br:{x:r,y:o}}}function W(e,t){return[F(e,function(e){let[t]=e;return t}(t),0),F(e,function(e){let[,t]=e;return t}(t),0),F(e,function(e){let[,,t]=e;return t}(t),1)]}function Y(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function Z(e,t,n,r){var o,i;return o=function(e,t){let[n,r]=t;return[Y(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),Y([-n,-r])].reduce(W)}("number"==typeof(i=t)?[i,i]:"x"in i?[i.x,i.y]:i,[n,r]),(0,j.Fs)(e,I,P,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>F(o,e,1)),U,H)}var G=n(9008),q=n(3342),V=n(4700),X=n(7686);let _=[1,2,2.5,5,10,15,20,25,30,40,50];function K(e){Promise.all(Array.from(e,e=>Promise.resolve(e()))).catch(e=>console.log("notifyCbs0",e))}function J(e,t){Promise.all(Array.from(e,e=>Promise.resolve(e(t)))).catch(e=>console.log("notifyCbs",e))}let Q={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ee={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function et(e,t,n){(0,m.useEffect)(()=>{let r=t.current;return r&&e.set(n,r),()=>{r&&e.delete(n)}},[n,t,e])}let en=new Map,er=e=>.5+.5*Math.log2(Math.max(1,e)),eo=`
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
`,eg=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,em=`
-webkit-user-select: none;
user-select: none;
`,ey=`
touch-action: none;
`,ex=`
pointer-events: none;
`,ef=`
pointer-events: initial;
`,eS=`
background-color: rgba(255, 255, 255, 0.5);
`,ev=`
cubic-bezier(0, 0, 0, 1)
`,eA=`
cubic-bezier(1, 0, 1, 1)
`,ew="xxx-appearing",eb=`
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
`,eE;function ej(e){return Math.round(100*e)/100}function eN(e){return Math.round(1e3*e)/1e3}function eF(e){return Math.round(1e7*e)/1e7}let eM=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function eB(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("g",{id:"measure",children:(0,v.jsx)(e$,{})})})}function eO(){let e=(0,m.useRef)(null);return et(eY,e,"distance"),(0,v.jsxs)("div",{ref:e,id:"distance",children:[(0,v.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),eM.map(e=>(0,v.jsxs)(m.Fragment,{children:[(0,v.jsx)("p",{id:`distance-x-${e+1}`,className:"distance distance-x","data-idx":e+1,style:{"--distance-idx":`${e+1}`}}),(0,v.jsx)("p",{id:`distance-y-${e+1}`,className:"distance distance-y","data-idx":e+1,style:{"--distance-idx":`${e+1}`}})]},e)),(0,v.jsx)("style",{children:(0,v.jsx)(eZ,{})})]})}let eD=new Map;function ek(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null);return et(eD,e,"lon"),et(eD,t,"lat"),(0,v.jsxs)("div",{id:"coordinate",children:[(0,v.jsx)("p",{ref:e,id:"longitude"}),(0,v.jsx)("p",{ref:t,id:"latitude"}),(0,v.jsx)("style",{children:(0,v.jsx)(ez,{})})]})}let eC=new Map;function e$(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null);return et(eC,e,"horizontal"),et(eC,t,"vertical"),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("path",{ref:e,id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),(0,v.jsx)("path",{ref:t,id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),eM.map((e,t)=>(0,v.jsx)(m.Fragment,{children:(0,v.jsx)(eR,{idx:t})},t))]})}function eR(e){let{idx:t}=e,n=(0,m.useRef)(null);return et(eC,n,`ring${t}`),(0,v.jsx)("path",{ref:n,id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"})}let eT=new Map;function ez(){return(0,v.jsxs)(v.Fragment,{children:[eP,eU,eW]})}let eL="100vw",eI="100svh",eH="var(--distance-radius-client)",eP=`
#distance,
#coordinate {
  ${eo}
  width: ${eL};
  height: ${eI};
  /*
  transform: translate3d(0, 0, 0);
  */
}
`,eU=`
#longitude {
  ${el}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(calc(${eL} / -2), calc(${eI} / -2)) scale(0.5);
}
`,eW=`
#latitude {
  ${ea}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(calc(${eL} / 2), calc(${eI} / -2)) scale(0.5);
}
`,eY=new Map;function eZ(){return(0,v.jsxs)(v.Fragment,{children:[eq,eG,eV,eX]})}let eG=`
.distance {
  ${eo}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: 0% 0%;
}
`,eq=`
#distance-origin {
  transform: translate(calc(${eL} / 2), calc(${eI} / 2)) scale(0.5);
}
`,eV=(o=`${eH} * var(--distance-idx)`,i=`${eL} / 2 + ${o}`,a=`${eI} / 2`,`
.distance-x {
  transform: translate(calc(${i}), calc(${a})) scale(0.5);
}
`),eX=(l=`${eH} * var(--distance-idx)`,s=`${eL} / 2`,c=`${eI} / 2 + ${l}`,`
.distance-y {
  transform: translate(calc(${s}), calc(${c})) scale(0.5);
}
`);function e_(e){return void 0!==e&&"number"==typeof e}function eK(e,t,n,r,o,i){return new DOMMatrixReadOnly(e instanceof Array?e:e_(e)&&e_(t)&&e_(n)&&e_(r)&&e_(o)&&e_(i)?[e,t,n,r,o,i]:void 0)}function eJ(e){let{container:t,outer:n,svgScale:r,inner:o}=e,{x:i,y:a}=n;return{container:t,scroll:t,content:eK(),svgOffset:{x:-i,y:-a},svgScale:r,svg:o}}function eQ(e){return eK().multiply(function(e){let{svgOffset:t}=e;return eK().translate(-t.x,-t.y)}(e)).multiply(function(e){let{svgScale:t}=e;return eK().scale(1/t,1/t)}(e)).multiply(function(e){let{svg:t}=e;return eK().translate(-t.x,-t.y)}(e))}function e0(e){return e.content.multiply(eQ(e))}function e1(e){return(function(e){let{scroll:t}=e;return eK().translate(t.x,t.y)})(e).multiply(e0(e))}function e5(e,t){let n=e.height,r=n*t;return k((e.width-r)/2,0,r,n)}function e2(e,t){let n=e.width,r=n/t;return k(0,(e.height-r)/2,n,r)}let e3={...{container:C,scroll:C,content:eK(),svgOffset:{x:-0,y:-0},svgScale:1,svg:C},config:{fontSize:16,container:C,outer:C,inner:C,svgScale:1}};function e4(e,t){let n=R(e.scroll);return e6(e,t,t,n)}function e6(e,t,n,r){let o=e1(e).inverse().transformPoint(r),i=Z(e.scroll,[t,n],r.x,r.y),a=D(e.svgOffset,[t,n]),l=Z(e.svg,[t,n],o.x,o.y);return{...e,scroll:i,svgOffset:a,svg:l}}function e7(e,t){var n,r;let o=R({...e.scroll,x:0,y:0}),i=(n=o.x,r=o.y,eK().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:i}}function e8(e,t){let n=e.scroll,r=B(D(t,-1),n);return(0,j.Fs)(e,e=>({...e,scroll:T(e.scroll,r)}),e=>{let t,r,o,i,a,l,s;return t=z(e.scroll,n),r=e.content.inverse(),i=M(o=R(e.scroll),B(e.scroll,n)),a=r.transformPoint(o),l=D(B(r.transformPoint(i),a),-e.svgScale),s=T(e.svg,l),{...e,scroll:t,svg:s}})}function e9(e,t,n){e.classList.add(n?t:`not-${t}`),e.classList.remove(n?`not-${t}`:t)}let te=(e,t,n)=>(1-n)*e+n*t,tt=e=>1-(1-e)**3,tn=new Map,tr=new Map,to=new Map,ti=new Map,ta=new Map,tl=new Map;function ts(e,t){let n=null===e||null===e.origin?"0% 0%":`${e.origin.x}px ${e?.origin.y}px`,r=e?.to.b!==0,o=r||null===e?null:tu({animation:e,zoom:t},0),i=r||null===e?null:tu({animation:e,zoom:t},1),a=r&&null!==e?td({animation:e,zoom:t},0):null,l=r&&null!==e?td({animation:e,zoom:t},1):null,s=null!==e?"transform":null,c=null!==e?n:null,u=null!==a?"container-rotate 500ms ease":null!==o?"container-zoom 500ms ease":null;Array.from(ti,e=>{let[,r]=e,d=r.style.setProperty.bind(r.style);d("--zoom-origin",n),d("--zoom-zoom",t.toString()),d("--zoom-s",null),d("--zoom-s-inv",null),d("--zoom-k",null),d("--zoom-k-inv",null),d("--zoom-tx-a",(o&&`${o.tx}px`)??null),d("--zoom-ty-a",(o&&`${o.ty}px`)??null),d("--zoom-tx-b",(i&&`${i.tx}px`)??null),d("--zoom-ty-b",(i&&`${i.ty}px`)??null),d("--zoom-s-a",(o&&`${o.s}`)??null),d("--zoom-s-b",(i&&`${i.s}`)??null),d("--rotate-deg-a",(a&&`${a.deg}deg`)??null),d("--rotate-deg-b",(l&&`${l.deg}deg`)??null),d("will-change",s),d("transform-origin",c),d("animation",u)}),Array.from(ta,t=>{let[,n]=t,o=n.style.setProperty.bind(n.style);o("--zoom-s",null===e?null:e.to.a.toString()),o("--zoom-s-symbols",null===e?null:e.to.a.toString()),e9(n,"zooming",null!==e),r&&e9(n,"rotating",null!==e)}),Array.from(tl,t=>{let[,n]=t;e9(n,"zooming",null!==e),r&&e9(n,"rotating",null!==e)})}let tc=e=>.5+.5*Math.log2(Math.max(1,e));function tu(e,t){let{animation:n,zoom:r}=e,o=n.from,i=n.to,a=te(o.e,i.e,tt(t)),l=te(o.f,i.f,tt(t)),s=te(o.a,i.a,tt(t)),c=r*s,u=te(r,c,tt(t)),d=te(tc(r),tc(r*s),tt(t));return{tx:a,ty:l,s,sinv:1/s,z:u,zinv:1/u,k:d,kinv:1/d}}function td(e,t){let{animation:n}=e,r=te(th(n.from),th(n.to),tt(t));return{deg:r,deginv:1/r}}function th(e){let t=180/Math.PI*Math.atan2(e.b,e.a);return t>=0?t:t+360}let tp=new Map,tg=new Set,tm=new Map;function ty(){return!tp.has("S")&&(tg.add("S"),!0)}let tx=(0,p.e)({scroll:C,client:{width:0,height:0},timeStamp:0});function tf(e){let t=e.currentTarget;null!==t&&tx.set({scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}function tS(){return tx.get()}let tv=new Map;function tA(e,t){Array.from(tv,n=>{let[,r]=n;e9(r,"shown",e),e9(r,"appearing",t)})}let tw=`
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
`,tb=new Map,tE=(0,p.e)(e3),tj=(0,q.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,V.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,V.a)({}),updateSvgMatrix:(0,V.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return e0(t)}}),updateGeoMatrix:(0,V.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(f.get().mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,V.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,o=Math.max(n.width,n.height)/2*r,i=Math.round(Math.log10(o)),a=(t=o/Math.pow(10,i-1),_.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,i-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,V.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x+o.width/2,y:r.y+o.height/2};return i.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+o.width,y:r.y+o.height};return{start:i.transformPoint(a),end:i.transformPoint(l)}}}),updateCoord:e=>{let t,n,r,o,{context:{geoPoint:i}}=e;return t=i.x>0?"E":"W",n=i.y>0?"N":"S",r=`${t} ${eF(Math.abs(i.x))}`,o=`${n} ${eF(Math.abs(i.y))}`,void Array.from(eD,e=>{let[t,n]=e;"lon"===t&&(n.textContent=r),"lat"===t&&(n.textContent=o)})},updateDistance:e=>{let{context:{distanceRadius:t}}=e;return function(e){let{svg:t,client:n}=e;Array.from(eY,e=>{let[,r]=e;Array.from(r.children,e=>{let n=e.getAttribute("data-idx");if(!n)return;let r=Number(n);"number"==typeof r&&(e.textContent=`${t*r}m`)}),r.style.setProperty.bind(r.style)("--distance-radius-client",`${n}px`)})}(t)},updateMeasure:e=>{var t,n,r;let o,i,a,l,{context:{layout:s,distanceRadius:c}}=e;return t=s.container.width,n=s.container.height,r=c.client,o=`M0,${n/2} h${t}`,i=`M${t/2},0 v${n}`,(a=eC.get("horizontal"))&&a.setAttribute("d",o),void((l=eC.get("vertical"))&&l.setAttribute("d",i),eM.forEach(e=>{let o=eC.get(`ring${e}`);if(!o)return;let i=function(e){let{width:t,height:n,r}=e,o=`${t}:${n}:${r}`,i=eT.get(o),a=`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1");return i||eT.set(o,a),a}({width:t,height:n,r:ej(r*(e+1))});o.setAttribute("d",i)}))}}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e3,zoom:1,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:O,distanceRadius:{svg:0,client:0},geoRange:{start:O,end:O},mode:"panning"},on:{"STYLE.LAYOUT":{actions:[(0,V.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return tE.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius","updateDistance","updateMeasure",(0,X.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}}),e=>{var t;let n,{context:r}=e;return n=eQ(t=r.layout),void(Array.from(tn,e=>{let[,r]=e,o=r.style.setProperty.bind(r.style);o("--layout-content-matrix",t.content.toString()),o("--layout-scroll-width",`${ej(t.scroll.width)}px`),o("--layout-scroll-height",`${ej(t.scroll.height)}px`),o("--layout-svg-to-content-matrix",new DOMMatrixReadOnly([n.a,n.b,n.c,n.d,ej(n.e),ej(n.f)]).toString())}),Array.from(tr,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svg-x",`${ej(t.svg.x).toString()}px`),r("--layout-svg-y",`${ej(t.svg.y).toString()}px`),r("--layout-svg-width",`${ej(t.svg.width).toString()}px`),r("--layout-svg-height",`${ej(t.svg.height).toString()}px`)}))},e=>{var t;let{context:n}=e;return t=n.layout,void Array.from(to,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svgscale",`${ej(t.svgScale)}`),r("--layout-fontsize",`${ej(t.config.fontSize)}`)})},e=>{var t,n;let r,o,{context:i}=e;return t=i.layout,r=er(n=i.zoom),o=t.config.fontSize*t.svgScale*er(n),void Array.from(en,e=>{let[,t]=e,n=t.style.setProperty.bind(t.style);n("--map-symbol-size",`${o/72}`),n("--map-symbol-size-k",`${r}`)})}]},"STYLE.ZOOM":{actions:[{type:"updateZoom",params:e=>{let{event:t}=e;return t}},e=>{let{context:{zoom:t}}=e;return ts(null,t)}]},"STYLE.SCROLL":{actions:[{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}},"updateCoord"]},"STYLE.MODE":{actions:(0,V.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",entry:e=>{let{context:t}=e;return tA(t.shown,t.appearing)},states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:[(0,V.a)({appearing:!0}),e=>{let{context:t}=e;return tA(t.shown,t.appearing)}],target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:[(0,V.a)({appearing:!1,shown:!0}),e=>{let{context:{zoom:t}}=e;return ts(null,t)},e=>{let{context:t}=e;return tA(t.shown,t.appearing)},"updateDistance","updateMeasure"],target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:[e=>{let{context:{zoom:t},event:{animation:n}}=e;return ts(n,t)},(0,V.a)({animating:!0}),()=>{var e;let t,n;return e="zoom",t=performance.now(),n=requestAnimationFrame(function n(r){if(Math.abs(r-t)/500<1){let t=requestAnimationFrame(n);tb.set(e,t)}else{let t=tb.get(e);void 0!==t&&cancelAnimationFrame(t),tb.delete(e)}}),void tb.set(e,n)}],target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,V.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:[e=>{let{context:{zoom:t}}=e;return ts(null,t)},(0,V.a)({animating:!1})],target:"Idle"}}}}}),tN=(0,X.c)(tj,{systemId:"system-viewer1"});function tF(e){tN.send(e)}function tM(e){return(0,G.d4)(tN,t=>e(t.context))}function tB(){tF({type:"STYLE.SCROLL",currentScroll:tS()})}let tO={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tD=n(1717);let tk={init:new Set,rendered:new Set},tC=function(e){J(tk.init,e)},t$=function(){K(tk.rendered)},tR=new Map,tT=(0,p.e)(0),tz=(0,q.mj)({types:{context:{},events:{},emitted:{}},actions:{updateInit:()=>void Array.from(tR,e=>{let t,[n,r]=e;(t=r.style.setProperty.bind(r.style))("will-change",null),t("animation",null),t("visibility","hidden")}),updateLoad:e=>{let t,{context:{fidx:n}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tR,e=>{var n;let r,[o,i]=e;return n=t.test(o),r=i.style.setProperty.bind(i.style),void(n?(r("will-change","opacity"),r("animation",`${ew} 250ms linear`),r("visibility",null)):(r("will-change",null),r("animation",null),r("visibility","hidden")))})},updateSwitch:e=>{let t,{context:{fidx:n,prevFidx:r}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tR,(e,o)=>{let[i,a]=e;return function(e,t,n,r){let o=e.style.setProperty.bind(e.style);if(t){let e=`${n?ew:"xxx-disappearing"} 250ms linear`;o("will-change","opacity"),o("animation",e),o("visibility",r?null:"hidden")}else o("will-change",null),o("animation",null),o("visibility",n?null:"hidden")}(a,null!==r,t.test(i),o===r||o===n)})}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:-1},initial:"Uninited",states:{Uninited:{on:{INIT:{actions:[(0,V.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return tT.set(t.fidx)},"updateInit"],target:"Loading"}}},Loading:{on:{IMAGE:{actions:(0,V.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}}),target:"Loaded"}}},Loaded:{always:[{guard:e=>{let{context:t}=e;return t.nfloors===t.blobs.size},actions:"updateLoad",target:"Animating"},"Loading"]},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,V.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return tT.set(t.fidx)},"updateSwitch"],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,tD.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,tD.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:[(0,V.a)({prevFidx:null}),"updateSwitch"],target:"Idle"}}}}}),tL=(0,X.c)(tz);tL.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,J(tO.lock,t)});let tI=new Worker(new URL(n.p+n.u(103),n.b),Object.assign({},{type:"module"},{type:void 0}));function tH(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,G.d4)(tL,t=>e(t.context))),o=(0,m.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,J(tO.selectDone,n))},[t]),i=(0,m.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,J(tO.lock,r))},[t,n]);return{fidx:t,prevFidx:n,fidxToOnAnimationEnd:o,fidxToOnClick:i,urls:r}}tI.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;tL.send({type:"IMAGE",fidx:e,blob:n})}}},tI.onerror=e=>{console.error("floors error",e)},tI.onmessageerror=e=>{console.error("floors messageerror",e)};var tP=n(5193),tU=n(3166);let tW=`
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
`,tY=new Map;function tZ(e,t,n){(0,m.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:tY.get(n)??null;if(null===r)return;let o=r.querySelector(`#${e}`)??null;if(null===o||null!==o.shadowRoot)return;let i=o.attachShadow({mode:"open"});tY.set(e,i),(0,tU.createRoot)(i).render(t)})(e,t,n),[e,n,t])}let tG={bus:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,v.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,v.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,v.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,v.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,v.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,v.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,v.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,v.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,v.jsx)("use",{x:"8.5",href:"#_person2"}),(0,v.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,v.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,v.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,v.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,v.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,v.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,v.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,v.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,v.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,v.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,v.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,v.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,v.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,v.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,v.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,v.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,v.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,v.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,v.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function tq(){return(0,v.jsx)("g",{className:"assets",children:(0,v.jsx)(tV,{})})}function tV(){return(0,v.jsx)("g",{className:"symbols",children:Object.entries(tG).map((e,t)=>{let[n,r]=e;return(0,v.jsx)(m.Fragment,{children:r({id:n})},t)})})}function tX(e){return e>.5?-1:+(e<.5)}function t_(e){return e<.3?1:e>.7?-1:0}function tK(e){return{open:e,animating:!1}}function tJ(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tQ(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function t0(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function t1(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function t5(e){let{open:t,animating:n}=e;return t||n}function t2(e,t,n,r){let o={x:t/2,y:n/2},i=t/20,a=i/2;function l(t){var n;let r,o;return n={x:e.h,y:e.v},r=t.x*n.x,o=t.y*n.y,{...t,x:r,y:o}}let s=e.th<Math.PI/4,c=0===e.v,u=0===e.h,d=l(D(o,-1)),h=l(c||u?B(D(o,-1),{x:r,y:r}):B(D(o,-1),{x:s?r:0,y:s?0:r})),[p,g]=u?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:i})]:[{x:0,y:0},l({x:i,y:0})],m=M(d,p),y=M(d,g);return{p:d,q:h,a:m,b:y}}let t3=e=>{let{x:t,y:n}=e;return`${eN(t)}, ${eN(n)}`},t4=`
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
`,t6=new Map,t7=new Map;function t8(e,t){let{open:n,animating:r}=t;Array.from(e,e=>{let[,t]=e;t.classList.add(n?"opened":"closed"),t.classList.remove(n?"closed":"opened"),e9(t,"animating",r)})}let t9=new Map,ne=new Map,nt=new Map,nn=new Map,nr=new Map;function no(){var e;let t=(0,m.useRef)(null),n=(0,m.useRef)(null),r=(0,m.useRef)(null),o=(0,m.useRef)(null);return et(t7,t,"balloon"),et(t9,t,"balloon"),et(ne,n,e="balloon"),et(nt,r,e),et(nn,o,e),(0,v.jsxs)("div",{ref:t,className:"balloon",children:[(0,v.jsxs)(na,{ref:n,children:[(0,v.jsx)("path",{ref:r,className:"bg"}),(0,v.jsx)("path",{ref:o,className:"fg"}),(0,v.jsx)("style",{children:nl})]}),(0,v.jsx)("style",{children:ni})]})}let ni=`
.balloon,
.balloon-svg {
  ${eo}
  ${ex}
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
`,ns={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},nc=()=>K(ns.zoomIn),nu=()=>K(ns.zoomOut),nd=()=>K(ns.rotate),nh=()=>K(ns.reset),np=()=>K(ns.recenter),ng={start:new Set,end:new Set,endDone:new Set},nm={multiStart:new Set,multiEnd:new Set,zoom:new Set},ny={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},nx=(0,p.e)(!1),nf=e=>nx.set(()=>e),nS=(0,p.e)("panning");nS.subscribe(e=>{let t;return t=e,J(ee.mode,t)});let nv=(0,q.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>f.get().isMapRendered(),isUiRendered:()=>f.get().isUiRendered()},actions:{setRendered:(0,V.a)({rendered:!0}),emitGetScroll:(0,tD.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,V.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,o={type:"zoom",z:n,p:r??R(e.layout.container)};return{...e,animationReq:o}}(n,t)}),prepareHome:(0,V.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,V.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:R(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,V.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,V.a)(e=>{var t,n,r,o,i,a,l,s,c,u,d,h,p;let g,m,y,x,S,v,A,w,b,E,j,N,{context:F}=e;return t=F.animationReq,n=F.layout,E=null===t?null:"zoom"===t.type?(r=n,o=t.z,i=t.p,g=e1(r).inverse().transformPoint(i),m=1/(a=o,Math.pow(f.get().zoomFactor,a)),y=eK().scale(1/m,1/m),{type:"Zoom",svg:Z(r.svg,m,g.x,g.y),svgScale:r.svgScale*m,q:{from:eK(),to:y,origin:i}}):"home"===t.type?(l=n,x=R((s=function(e){let{config:t,content:n}=e;return{config:t,...eJ(t),content:n}}(n)).config.inner),S=e1(l).transformPoint(x),v=s.svgScale/l.svgScale,w=(function(e,t){if(e instanceof DOMMatrixReadOnly)return eK(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return eK(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((A=R(l.container)).x-S.x,A.y-S.y).multiply((c=1/v,u=1/v,d=S.x,h=S.y,eK().scale(c,u,1,d,h,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:eK(),to:w,origin:null}}):(p=t.p,b=eK().rotate(90),{type:"Rotate",deg:90,q:{from:eK(),to:b,origin:p}}),j=F.layout,N=function(e,t){var n,r,o;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:z(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,o=t.svgScale,{...e,svg:r,svgScale:o}):e7(e,t.deg)}(F.layout,E),{...F,animation:E,prevLayout:j,layout:N}}),endZoom:(0,V.a)(e=>{var t,n;let r,o,{context:i}=e;return r=i.zoom*(null===(t=i.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),o=i.rotate+(null===(n=i.animationReq)||"rotate"!==n.type?0:n.deg),{...i,prevLayout:null,animation:null,zoom:r,rotate:o}}),endHome:(0,V.a)(e=>{let t,n,{context:r}=e;return t=R(r.origLayout.container),n=e7(e4(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,V.a)(e=>{let t,{context:n}=e;return t=R(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,V.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:e4(n,9)}}(n,t)}),resetScroll:(0,V.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tS(),n=e8(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,V.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tS();return{type:"SEARCH.START",req:{psvg:e1(e8(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,tD.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=tS(),o=e8(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:o}}}(n,t)}),emitSwitch:(0,tD.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,tD.a)({type:"SWITCH.DONE"}),enterZooming:()=>nf(!0),exitZooming:()=>nf(!1),unlockScroll:()=>!!tg.has("S")&&(tg.delete("S"),!0)}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:e3,prevLayout:null,layout:e3,cursor:R(e3.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,X.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{actions:"emitZoomEnd",target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{guard:()=>ty(),actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{guard:()=>ty(),actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{guard:()=>ty(),target:"Recentering"},ZOOM:{guard:()=>ty(),actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{guard:()=>ty(),actions:"prepareHome",target:"Zooming"},ROTATE:{guard:()=>ty(),actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",entry:"enterZooming",exit:["exitZooming","unlockScroll"],states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Rendering2"},{target:"Rendering2"}]},Rendering2:{after:{50:{target:"Done"}}},Done:{entry:"clearAnimation",type:"final"}}}}}),nA=(0,X.c)(nv,{systemId:"system-viewer1"});function nw(e){nA.send(e)}nA.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,J(ng.start,t)}),nA.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?nA.send({type:"SEARCH.DONE"}):(t=r,J(ng.endDone,t),n=r.psvg,J(ny.open,n))}),nA.on("ZOOM.START",e=>{let t;return t=e,J(ee.zoomStart,t)}),nA.on("ZOOM.END",e=>{let t;return t=e,J(ee.zoomEnd,t)}),nA.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,J(tO.select,t)}),nA.on("SWITCH.DONE",()=>K(tO.unlock)),nA.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},J(ee.layout,t)}),nA.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.sync,t)}),nA.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.syncSync,t)}),nA.on("SCROLL.GET",()=>K(Q.get));let nb=!1,nE=!1;function nj(e){nb="locked"===e,nE="locked"===e}function nN(e){(0,m.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",nF),()=>{t.removeEventListener("wheel",nF)}},[e])}function nF(e){let t=e.currentTarget;nE&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function nM(e){return function(t,n){let r=t[n],o=e(r);return t[n]=null===o?r:o,t}}let nB=(0,q.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return t5(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return t5(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,V.a)({canceling:()=>!0}),endCancel:(0,V.a)({canceling:()=>!1}),open:(0,V.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nM(tJ)(n,r)}}),close:(0,V.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nM(t0)(n,r)}}),handle:(0,V.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nM(n[r].open?tQ:t1)(n,r)}}),updateDetail:(0,V.a)({detail:(e,t)=>t,p:(e,t)=>{let{psvg:n,layout:r}=t;return e1(r).transformPoint(n)}}),updateBalloon:(0,V.a)({balloon:e=>{var t;let n,r,o,i,a,l,s,c,u,d,{context:{detail:h,p}}=e;return h&&p&&(t=h.layout,l=function(e,t){let{x:n,y:r}=t,o=e.width/e.height,i={x:n/e.width,y:r/e.height},a=o>1?tX(i.x):t_(i.x);return{h:a,v:o>1?t_(i.y):tX(i.y),th:Math.atan2(e.height,e.width)}}(t.container,p),s=t.container.width,r=50*(n=.01*Math.min(s,c=t.container.height)),o=50*n,i=10*n,a=r/100,d=t2(l,(u={bw:r,bh:o,lh:i,d:a,width:r+2*i+2*a,height:o+2*i+2*a}).bw,u.bh,u.lh),{_p:p,_hv:l,_W:s,_H:c,_size:u,_leg:d})}}),updateBalloonPaths:(0,V.a)({balloonPaths:e=>{let{context:{balloon:t}}=e;return t?._hv&&function(e,t){let{bw:n,bh:r,lh:o,d:i,width:a,height:l}=t,s=k(-a/2,-a/2,a,l),{body:c,leg:u}=function(e,t,n,r){let o={x:t/2,y:n/2},i=`
m${eN(-o.x)},${eN(-o.y)}
h${eN(t)}
v${eN(n)}
h${eN(-t)}
z
`,{p:a,q:l,a:s,b:c}=t2(e,t,n,r),u=B(l,s),d=B(c,l),h=B(a,c);return{body:i,leg:`
m${t3(s)}
l${t3(u)}
l${t3(d)}
l${t3(h)}
z
`}}(e,n,r,o);function d(e){return`M${eN(e)},${eN(e)} ${c} M${eN(e)},${eN(e)} ${u}`}return{viewBox:s,width:a,height:l,bg:d(i),fg:d(0)}}(t._hv,t._size)||void 0}}),updateHeaderStyle:e=>{let{context:t}=e;t8(t6,t.m.header)},updateBalloonStyle:e=>{let{context:t}=e;t.balloon&&function(e,t){let{_p:n,_hv:r,_size:o,_leg:i}=e,a=function(e,t,n,r,o){let{open:i,animating:a}=o;if(null!==e&&null!==t&&t5({open:i,animating:a})){let{width:t,height:o}=n,{a:l,b:s,timing:c,txa:u,txb:d}=function(e,t,n,r){let o=D(r,-1);if(t){let{a:t,b:r}=e?{a:0,b:1}:{a:1,b:0},i=e?{a:O,b:o}:{a:o,b:O},{a:a,b:l}={a:M(n,i.a),b:M(n,i.b)};return{a:t,b:r,timing:e?ev:eA,txa:a,txb:l}}{let{b:e}={a:0,b:1};return{a:null,b:e,timing:null,txa:null,txb:M(n,o)}}}(i,a,e,r.q),h=`${eN(-t/2)}px`,p=`${eN(-o/2)}px`,g=u&&`${eN(u.x)}px`,m=u&&`${eN(u.y)}px`;return{visibility:null,a:l,b:s,timing:c,pww:h,phh:p,txax:g,txay:m,txbx:d&&`${eN(d.x)}px`,txby:d&&`${eN(d.y)}px`}}return{visibility:"hidden",a:null,b:null,timing:null,pww:null,phh:null,txax:null,txay:null,txbx:null,txby:null}}(n,r,o,i,t);Array.from(t9,e=>{let[,t]=e;!function(e,t){let{visibility:n,a:r,b:o,timing:i,pww:a,phh:l,txax:s,txay:c,txbx:u,txby:d}=t,h=e.style.setProperty.bind(e.style);h("visibility",n),h("--balloon-pww",a),h("--balloon-phh",l),h("--a",null===r?null:r.toString()),h("--b",null===o?null:o.toString()),h("--timing",i),h("--balloon-tx-a-x",s),h("--balloon-tx-a-y",c),h("--balloon-tx-b-x",u),h("--balloon-tx-b-y",d)}(t,a)})}(t.balloon,t.m.detail),t.balloonPaths&&function(e){let{viewBox:t,width:n,height:r,bg:o,fg:i}=e;Array.from(ne,e=>{let[,o]=e;o.setAttribute("viewBox",L(t)),o.setAttribute("width",`${n}`),o.setAttribute("height",`${r}`)}),Array.from(nt,e=>{let[,t]=e;return t.setAttribute("d",o)}),Array.from(nn,e=>{let[,t]=e;return t.setAttribute("d",i)})}(t.balloonPaths)},updateDetailStyle:e=>{let{context:t}=e,n=t.m.detail;requestAnimationFrame(()=>{t8(t7,n),requestAnimationFrame(()=>(function(e){let{open:t,animating:n}=e;t||n||Array.from(nr,e=>{let[,t]=e;t.scroll(0,0)})})(n))})}}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,m:{header:tK(!0),detail:tK(!1)},animationEnded:{header:!0,detail:!0}}},on:{RENDERED:{actions:["updateHeaderStyle","updateDetailStyle","updateBalloonStyle"]}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:[{type:"updateDetail",params:e=>{let{event:{type:t,...n}}=e;return n}},"updateBalloon","updateBalloonPaths"],target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,X.n)("animationEnded")},{actions:(0,V.a)({animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,X.n)("isDetailVisible")},{target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,X.n)("animationEnded")},{actions:(0,V.a)({animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],exit:"endCancel",on:{DONE:[{guard:(0,X.n)("isHeaderVisible")},{guard:"isDetailVisible"},{target:"Closed"}]}},Closed:{entry:(0,tD.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},"updateHeaderStyle",(0,V.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,X.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},"updateBalloonStyle","updateDetailStyle",(0,V.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,X.r)({type:"DONE"})]}}}}}),nO=(0,X.c)(nB);function nD(e){nO.send(e)}function nk(){let e=(0,m.useRef)(null);nN(e),et(t9,e,"detail"),et(t7,e,"detail"),et(nr,e,"detail");let t=(0,G.d4)(nO,e=>e.context.detail),n=S();return(0,v.jsxs)("div",{ref:e,className:"detail",onAnimationEnd:()=>nD({type:"DETAIL.ANIMATION.END"}),children:[n.RenderInfo&&t&&(0,v.jsx)(n.RenderInfo,{info:t.info}),(0,v.jsx)("style",{children:nC})]})}nO.on("CLOSE.DONE",()=>K(ny.closeDone));let nC=`
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
    ${em}
    margin: 1.5em;
    text-align: center;
  }
  & p {
    ${em}
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
`;function n$(){return tZ("detail",(0,v.jsx)(nR,{}),"ui"),(0,v.jsx)("div",{id:"detail"})}function nR(){return(0,v.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,v.jsx)(no,{}),(0,v.jsx)(nk,{}),(0,v.jsx)("style",{children:t4}),(0,v.jsx)(nT,{})]})}function nT(){return(0,v.jsx)("svg",{id:"ui-svg-defs",children:(0,v.jsx)("defs",{children:(0,v.jsx)(tq,{})})})}function nz(){return tZ("footer",(0,v.jsx)(nL,{}),"ui"),(0,v.jsx)("div",{id:"footer"})}function nL(){let e=(0,m.useRef)(null);et(t6,e,"footer");let t=S();return(0,v.jsxs)("div",{ref:e,className:"ui-content footer",children:[(0,v.jsx)("p",{children:(0,v.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:t.copyright})}),(0,v.jsx)("style",{children:nI})]})}let nI=`
.footer {
  ${ea}
  ${ep}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${em}
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
`;function nH(){return tZ("guides",(0,v.jsx)(nP,{}),"ui"),(0,v.jsx)("div",{id:"guides"})}function nP(){let e,t=(0,m.useRef)(null);return et(t6,t,"guides"),et(tl,t,"guides"),(e=S(),(e.uiConfig?.showGuides??!0)&&!e.mapCoord.matrix.isIdentity)?(0,v.jsxs)("div",{ref:t,className:"ui-content guides",children:[(0,v.jsx)("svg",{className:"guides",children:(0,v.jsx)(eB,{})}),(0,v.jsx)(eO,{}),(0,v.jsx)(ek,{}),(0,v.jsx)("style",{children:nU})]}):(0,v.jsx)(v.Fragment,{})}let nU=`
.guides {
  ${eo}
  ${eh}
  ${ex}
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
  ${em}
}
@keyframes xxx-measure {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;function nW(){let e=(0,m.useRef)(null),{fidx:t,fidxToOnClick:n}=tH(),r=S();return et(tm,e,"floors"),void 0===r.floorsConfig||r.floorsConfig.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{ref:e,className:"floors",children:[(0,v.jsx)("ul",{className:"floor-list",children:r.floorsConfig.floors.map((e,r)=>{let{name:o}=e;return(0,v.jsx)("li",{className:`floor-item ${nq(r===t)}`,onClick:n(r),children:o},r)})}),(0,v.jsx)("style",{children:nY})]})}let nY=`
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
`;function nZ(){let{fidx:e}=tH(),t=S().floorsConfig;return void 0===t||t.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{children:[t.floors.map((t,n)=>(0,v.jsx)("h2",{className:`floor-name ${nq(n===e)}`,children:t.name},n)),(0,v.jsx)("style",{children:nG})]})}let nG=`
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
`;function nq(e){return e?"selected":"unselected"}function nV(){return tZ("header",(0,v.jsx)(nX,{}),"ui"),(0,v.jsx)("div",{id:"header"})}function nX(){let e=(0,m.useRef)(null);(0,m.useEffect)(()=>{requestAnimationFrame(()=>nD({type:"RENDERED"}))},[]),et(t6,e,"header");let t=S();return(0,v.jsxs)("div",{ref:e,className:"ui-content header",onAnimationEnd:()=>nD({type:"HEADER.ANIMATION.END"}),children:[(0,v.jsx)("h1",{className:"title",onClick:()=>nh(),children:t.title}),(0,v.jsx)(nZ,{}),(0,v.jsx)("style",{children:n_})]})}let n_=`
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
  ${em}
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
`;function nK(){return tZ("left",(0,v.jsx)(nJ,{}),"ui"),(0,v.jsx)("div",{id:"left"})}function nJ(){let e=(0,m.useRef)(null);return et(t6,e,"left"),(0,v.jsxs)("div",{ref:e,className:"ui-content left bottom",children:[(0,v.jsx)(nW,{}),(0,v.jsx)("style",{children:nQ})]})}let nQ=`
.left {
  ${eo}
  ${eg}
  padding: 0.4em;
  font-size: smaller;
  ${ex}
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
`;function n0(){return(0,v.jsx)("div",{className:"button-item fullscreen",onClick:()=>K(ns.fullscreen),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n1})})})}let n1=`
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
`;function n5(){return(0,v.jsx)("div",{className:"button-item home",onClick:()=>nh(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n2})})})}let n2=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function n3(){return S().mapCoord.matrix.isIdentity?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)("div",{className:"button-item position",onClick:()=>K(ns.position),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n7})})})}let n4=3*Math.sqrt(2),n6=n4+6,n7=`
M 0,0
m 0,${n6/2}
l -3,-3
a ${n4},${n4} 0,1,1 6,0
z
m 0,${-n6+n4+n4/2}
a ${n4/2},${n4/2} 0,1,0 0,${-n4}
a ${n4/2},${n4/2} 0,1,0 0,${n4}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function n8(){return(0,v.jsx)("div",{className:"button-item recenter",onClick:()=>np(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n9})})})}let n9=`
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
`;function ra(){return tZ("right",(0,v.jsx)(rl,{}),"ui"),(0,v.jsx)("div",{id:"right"})}function rl(){let e=(0,m.useRef)(null);return et(t6,e,"right"),(0,v.jsxs)("div",{ref:e,className:"ui-content right bottom",children:[(0,v.jsx)(rc,{}),(0,v.jsx)("style",{children:rs})]})}let rs=`
.right {
  ${ei}
  ${eg}
  padding: 0.4em;
  font-size: smaller;
  ${ex}
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
`;function rc(){let e=(0,m.useRef)(null);return et(tm,e,"buttons"),(0,v.jsxs)("div",{ref:e,className:"buttons",children:[(0,v.jsx)(n3,{}),(0,v.jsx)(n5,{}),(0,v.jsx)(n0,{}),(0,v.jsx)(n8,{}),(0,v.jsx)(re,{}),(0,v.jsx)(ro,{}),(0,v.jsx)(rn,{}),(0,v.jsx)("style",{children:ru})]})}let ru=`
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
`;function rd(e){nx.get()&&e.preventDefault()}function rh(e){(0,m.useEffect)(()=>{let t=e.current;return t&&t.addEventListener("touchmove",rd),()=>{t&&t.removeEventListener("touchmove",rd)}},[e])}function rp(){return tZ("screen",(0,v.jsx)(rg,{}),"ui"),(0,v.jsx)("div",{id:"screen"})}function rg(){let e=(0,m.useRef)(null);return et(t7,e,"screen"),rh(e),nN(e),(0,v.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>K(ny.close),children:(0,v.jsx)("style",{children:rm})})}let rm=`
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
`;function ry(){return tZ("ui",(0,v.jsx)(rx,{})),(0,v.jsx)("div",{id:"ui"})}function rx(){let e=(0,m.useRef)(null);return et(tv,e,"ui"),(0,v.jsxs)("div",{ref:e,className:"ui",children:[(0,v.jsx)(rp,{}),(0,v.jsx)(nV,{}),(0,v.jsx)(nz,{}),(0,v.jsx)(nK,{}),(0,v.jsx)(ra,{}),(0,v.jsx)(nH,{}),(0,v.jsx)(n$,{}),(0,v.jsx)("style",{children:tw})]})}function rf(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function rS(){np()}let rv=new Map;function rA(e,t){let n=rv.get(t);if(n)return function(e,t){let n=e.scrollLeft,r=e.scrollTop,o=e.scrollWidth,i=e.scrollHeight;if(null===n)return!1;let a=o-t.width,l=i-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${i}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),r!==c&&(e.scrollTop=c);let u=e.scrollLeft;if(Math.abs(u-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${u}`),!1;let d=e.scrollTop;return!(Math.abs(d-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${d}`),!1)}(n,e)}var rw=n(8077),rb=n(990),rE=n(4465),rj=n(5909);let rN=(e,t)=>(function e(t,n,r){let o=Math.min(t.length,n.length),i=t[r],a=n[r];if(r>=o||i===eE||a===eE)return rw.pH(t.length,n.length);let l=rw.pH(i.x,a.x)||rw.pH(i.y,a.y);return 0===l?e(t,n,r+1):l})(e,t,0);function rF(e){return(0,j.Fs)(e.values(),rb.Ts,rb.di(rN),rb.x1(e=>0===e.length?rj.xT:rj.Py(e[0])))}function rM(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:D(t,1/e.length)}function rB(e){return new Map((0,j.Fs)(e.changedTouches,e=>rb.O3.from(e),rb.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let rO=(0,q.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,V.a)({touches:e=>{var t,n,r;let o,i,a,l,s,c,u,d,h,{context:{touches:p},event:g}=e;return"TOUCH.START"===g.type?(t=g.ev,n=p.vecs,r=rB(t),a=rM(i=rF(o=(0,j.Fs)([...n.entries(),...r.entries()],rb.TS(new Map,(e,t)=>{let[n,r]=t,o=rE.fromUndefinedOr(e.get(n)),i=rE.isSome(o)?[...o.value,...r]:r;return new Map(e).set(n,i)})))),s=2!==i.length?null:.5>Math.abs((l=B(i[0],i[1])).y/l.x),{...p,vecs:o,points:i,cursor:a,horizontal:s}):"TOUCH.MOVE"===g.type?function(e,t){var n,r,o,i;let a,l=rB(t),s=new Map((0,j.Fs)(e.vecs.entries(),rb.Ts,rb.Tj(e=>{let t,[n,r]=e;return[n,(t=rE.fromUndefinedOr(l.get(n)),rE.isSome(t)?[...t.value,...r]:r)]}))),c=rF(s),u=rM(c),[d,h]=c;if(null===u||d===eE||h===eE)return{...e,vecs:s,points:c,cursor:u};let p=(n=e.dists,r=Math.sqrt((o=d,i=h,Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2))),a=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||a>0?[r,...n]:n),g=function(e){let[t,n,r,o]=e;return t===eE||n===eE||r===eE||o===eE?null:t<n&&n<r&&r<o?-1:t>n&&n>r&&r>o?1:null}(p);return{vecs:s,points:c,cursor:u,dists:p,z:g,horizontal:e.horizontal}}(p,g.ev):"TOUCH.END"===g.type?(c=rB(g.ev),h=rM(d=rF(u=new Map((0,j.Fs)(p.vecs.entries(),rb.Ts,rb.x1(e=>{let[t,n]=e;return c.has(t)?rj.xT:rj.Py([t,n])}))))),{vecs:u,points:d,cursor:h,dists:0===u.size?[]:p.dists,z:0===u.size?null:p.z,horizontal:p.horizontal}):p}}),raiseOp:(0,X.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,V.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,V.a)({mode:"pan"}),enterPinch:(0,V.a)({mode:"pinch"}),emitMulti:(0,tD.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,tD.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,X.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,X.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,X.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),rD=(0,X.c)(rO),rk=!1;function rC(e){rD.send({type:"TOUCH.START",ev:e})}function r$(e){rD.send({type:"TOUCH.MOVE",ev:e})}function rR(e){rD.send({type:"TOUCH.END",ev:e})}function rT(){rD.send({type:"CANCEL"})}function rz(e){nb||nw({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function rL(e){if(null!==e){let t,n,r;(t=tp.get("S"))&&clearTimeout(t),n=setTimeout(()=>{tp.delete("S"),Array.from(tm,e=>{let[,t]=e;return e9(t,"locked",!1)})},200),tp.set("S",n),Array.from(tm,e=>{let[,t]=e;return e9(t,"locked",!0)}),r=e,J(Q.eventTick,r)}}function rI(e){let t=(0,m.useRef)(null);return et(t7,t,"container"),rh(t),et(ti,t,"container"),et(tv,t,"container"),et(rv,t,"container"),(0,v.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:rC,onTouchMove:r$,onTouchEnd:rR,onClick:rz,onContextMenu:rS,onScroll:rL,onAnimationEnd:e=>{var t;t={type:"ANIMATION.END",ev:e},t.ev?.stopPropagation(),nw(t),K(ee.animationEnd)},children:[e.children,(0,v.jsx)("style",{children:rH})]})}rD.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(rk=!0,K(nm.multiStart)):(K(nm.multiEnd),rk=!1)}),rD.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,o=n.z;null!==r&&null!==o&&(t={z:o>0?1:-1,p:r},J(nm.zoom,t))});let rH=`
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
`;function rP(){return null!==document.querySelector(".container")}var rU=n(3071);async function rW(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let rY=(0,q.mj)({types:{events:{},emitted:{}},actors:{api:(0,rU.Sx)(()=>rW(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,V.a)({position:e=>{let{event:t}=e;return t.output}}),(0,tD.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,V.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rZ=(0,X.c)(rY);function rG(e){let[t,n]=e;return n.map(e=>[t,e])}function rq(e){return e.reduce(function(e,t){let[n,r]=t,o=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,o]])},new Map)}function rV(e){return rq(Array.from(e).flatMap(rG).map(e=>{let[t,n]=e;return[n,t]}))}let rX=(0,p.e)(null),r_=(0,p.e)(null),rK=(0,p.e)(null),rJ=(0,p.e)(null),rQ=(0,q.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tD.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tD.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),r0=(0,X.c)(rQ);function r1(e){r0.send(e)}r0.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=f.get().mapCoord.matrix.inverse().transformPoint(t),r=tT.get();r5.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),r0.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,J(ng.end,t)});let r5=new Worker(new URL(n.p+n.u(559),n.b),Object.assign({},{type:"module"},{type:void 0}));r5.onmessage=async e=>{let t=e.data;switch(t.type){case"INIT.DONE":return r1({type:"INIT.DONE"});case"SEARCH.DONE":var n;let r;return(n=t.res,r=f.get(),Promise.resolve((e=>{let t=f.get().searchNames,n=(()=>{let e,t=f.get();if(t.getInfoByName)return t.getInfoByName;let n=rJ.get();if(null!==n)return n;let r=(e=t.searchInfos??[],t=>(e=>{let t=rK.get();if(null!==t)return t;let n=new Map(e.map(e=>[e.name,e.info]));return rK.set(n),n})(e??[]).get(t)||null);return rJ.set(r),r})();if(void 0===t||void 0===n)return null;let r=(e=>{let t=r_.get();if(null!==t)return t;let n=rV(e);return r_.set(n),n})((e=>{let t=rX.get();if(null!==t)return t;let n=e.map(e=>[e.name,e.addresses]);return rX.set(n),n})(t)).get(e.address);return void 0===r||r.size<1?null:n(Array.from(r)[0])})(n)).then(e=>null!==e?e:r.getSearchInfo(n,r.mapMap,r.osmSearchEntries)).then(e=>null===e?(console.log("info not found!",n),r1({type:"SEARCH.DONE",res:null})):r1({type:"SEARCH.DONE",res:{psvg:r.mapCoord.matrix.transformPoint(n.floorPos.coord),fidx:n.floorPos.fidx,info:e}}))).catch(e=>console.log("SEARCH.DONE",e));case"SEARCH.ERROR":return console.log("search error!",t.error),r1({type:"SEARCH.DONE",res:null})}},r5.onerror=e=>{console.error("search error",e)},r5.onmessageerror=e=>{console.error("search messageerror",e)};var r2=n(5318);let r3=Math.round,r4=document.createElement("div"),r6=new Map,r7=()=>{let e=f.get();var t=e.cartoConfig?.backgroundColor??e.backgroundColor??"darkgray";let n=r6.get(t);if(n)return n;r4.style.color=t,document.body.appendChild(r4);let r=getComputedStyle(r4).color;return document.body.removeChild(r4),r6.set(t,r),r},r8=new Map,r9=new Map;function oe(e){let t=(()=>{let e=r8.get("color");if(e)return e;let t=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:r7()});return t.parentNode||document.head.appendChild(t),r8.set("color",t),t})(),n={color:t.getAttribute("content")||r7()},{p:r,q:o}=(()=>{var e;let t=r7(),n=r9.get(t);if(n)return{p:t,q:n};let r=function(e){let{r:t,g:n,b:r}=e;return`rgb(${r3(t)}, ${r3(n)}, ${r3(r)})`}({r:(e=function(e){let t=e.match(/\d+/g);if(!t||3!==t.length)throw Error("invalid color!");let n=Number(t[0]);return{r:n,g:Number(t[1]),b:Number(t[2])}}(t)).r/2,g:e.g/2,b:e.b/2});return r9.set(t,r),{p:t,q:r}})(),i=e?o:r;(0,r2.i)(n,{color:i,duration:400,ease:"outQuad",onRender:()=>t.setAttribute("content",n.color)}),(0,r2.i)(document.body,{backgroundColor:i,duration:400,ease:"outQuad"}),(0,r2.i)(".container",{opacity:e?.5:1,duration:400,ease:"outQuad"})}function ot(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let on=(0,q.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ot(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,tD.a)({type:"RESET"}),recenter:(0,tD.a)({type:"RECENTER"}),rotate:(0,tD.a)({type:"ROTATE"}),zoom:(0,tD.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tD.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tD.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,V.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||o}})(t.mod,n.key)}}),handleUp:(0,V.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&o}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ot(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),or=(0,X.c)(on);or.on("RESET",nh),or.on("RECENTER",np),or.on("ROTATE",nd),or.on("ZOOM.IN",nc),or.on("ZOOM.OUT",nu),or.on("FLOOR.LEVEL.UP",()=>K(tO.levelUp)),or.on("FLOOR.LEVEL.DOWN",()=>K(tO.levelDown));let oo=(0,q.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:C,next:C,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,V.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,X.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!$(t.prev,t.next)},actions:[(0,V.a)({waited:0}),(0,tD.a)(e=>{var t,n,r,o;let i,a,{context:l}=e,s=f.get();return{type:"LAYOUT",layout:(t=s.fontSize,n=l.next,i=R((o={config:r=function(e,t,n,r){var o;let i,a,l,s,{outer:c,scale:u}=(o=r??n,i=t.width/t.height,s=(l=i>(a=o.width/o.height))?e5(t,a):e2(t,a),{outer:s,inner:l?e5(o,i):e2(o,i),scale:l?o.height/t.height:o.width/t.width,rO:i,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:u}}(t,n,s.origViewBox,s.origBoundingBox),...eJ(r)}).scroll),a=o.container.width/o.container.height,e6(o,a<1?1/a:1,a<1?1:+a,i)),force:!l.first}}),(0,V.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,V.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,X.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return $(t,tE.get().container)},actions:(0,V.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),oi=(0,X.c)(oo);oi.on("LAYOUT",e=>{let t;return t=e,J(ee.resize,t)}),window.addEventListener("resize",()=>{oi.send({type:"RESIZE"})});let oa=(0,q.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,V.a)({ticked:!1}),set:(0,V.a)({ticked:!0}),expire:(0,tD.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ol=(0,q.mj)({types:{},actions:{getScroll:(0,V.a)({scroll:e=>{let{context:t}=e;return function(e){let t=rv.get(e);if(t)return k(t.scrollLeft,t.scrollTop,t.scrollWidth,t.scrollHeight)}("container")??t.scroll}}),syncScroll:(e,t)=>{let{pos:n}=t;return rA(n,"container")}},actors:{syncScrollLogic:(0,rU.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!rA(t,"container"))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,tD.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,V.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,tD.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,V.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),os=(0,X.c)(ol,{systemId:"system-scroll1"});function oc(e){os.send(e)}os.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.getDone,t)}),os.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.syncSyncDone,t)});let ou=(h=()=>K(Q.eventExpire),u=oa.provide({delays:{DURATION:500}}),(d=(0,X.c)(u)).on("EXPIRE",h),d.start(),{tick:function(){d.send({type:"TICK"})}}),od=(0,p.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function oh(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),od.trigger.set({names:t}))}async function op(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let og=`
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
`,om=`
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
  ${ey}
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
${og}
`,oy=function(){let e,t=S(),n=t.cartoConfig?.backgroundColor??t.backgroundColor??"darkgray",r={data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig};return e=tM(e=>e.rendered),(0,m.useEffect)(()=>{requestAnimationFrame(()=>t$())},[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(rI,{...r,children:t.renderMap(r)}),(0,v.jsx)(ry,{}),(0,v.jsxs)("style",{children:[om,`body { background-color: ${n}; }`]})]})};function ox(e){return tZ(`map-floors-html-labels-${e.fidx}`,(0,v.jsx)(of,{...e}),"map-floors-html"),(0,v.jsx)("div",{id:`map-floors-html-labels-${e.fidx}`})}function of(e){let{labels:t}=e;return(0,v.jsxs)("div",{className:"labels",children:[t?.map((e,t)=>(0,v.jsx)(m.Fragment,{children:(0,v.jsx)(oS,{_text:e})},t)),(0,v.jsx)("style",{children:ov})]})}function oS(e){let{_text:t}=e;return(0,v.jsx)("div",{className:"label",style:{"--x":(t.attrs?.x||0)+"px","--y":(t.attrs?.y||0)+"px","--rotate":(t.attrs?.rotate||0)+"deg","--scale2":(t.attrs?.scale2||1)+"","--scale1":(t.attrs?.scale1||1)+""},children:t.children?.map((e,t)=>(0,v.jsx)("p",{children:e.text??""},t))})}let ov=`
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
`;function oA(e){let t=(0,m.useRef)(null);return et(tn,t,"map-floors-html-content"),tZ("map-floors-html",(0,v.jsx)(ow,{...e})),(0,v.jsx)("div",{ref:t,id:"map-floors-html",className:"content"})}function ow(e){return(0,v.jsxs)("div",{className:"map-floors-html-content",children:[(0,v.jsx)(ob,{...e}),(0,v.jsx)("style",{children:oE})]})}function ob(e){let{floors:t}=e,n=(0,m.useRef)(null);return et(tn,n,"map-floors-html"),(0,v.jsx)("div",{ref:n,className:"map-floors-html",children:t?.floors.map((e,n)=>(0,v.jsx)(m.Fragment,{children:(0,v.jsx)(oj,{fidx:n,floor:e,labelsMap:t?.labelsMap})},n))})}let oE=`
.map-floors-html {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
  transform: var(--layout-svg-to-content-matrix) !important;
  transform-origin: 0% 0% !important;
}
`;function oj(e){let{fidx:t,floor:n,labelsMap:r}=e,o=(0,m.useRef)(null);return et(tR,o,`html-${t}`),(0,v.jsx)("div",{ref:o,className:`floor fidx-${t}`,children:(0,v.jsx)(ox,{fidx:t,labels:n.labels??function(e,t){if(void 0===e)return;let n=Array.from(oN.values());if(1===n.length)return n[0].get(t);let r=e instanceof Map?e:new Map(e instanceof Array?e:Object.entries(e));return oN.add(r),r.get(t)}(r,n.name.toLowerCase())})})}let oN=new Set;function oF(e){let{floors:t,data:{origViewBox:n}}=e,r=(0,m.useRef)(null);et(tn,r,"map-floors-svg");let o=tH();return(0,v.jsxs)("div",{ref:r,className:"content map-floors-svg",children:[(0,v.jsx)(oB,{children:t?.floors.map((e,t)=>(0,v.jsx)(m.Fragment,{children:(0,v.jsx)(oO,{fidx:t,origViewBox:n,ctx:o})},t))}),(0,v.jsx)("style",{children:oM})]})}let oM=`
svg.content-svg {
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
${eb}
`;function oB(e){let t=(0,m.useRef)(null),{viewBox:n}=function(){let{svg:e}=tM(e=>e.layout);return{viewBox:L(e)}}();return et(tn,t,"floors-svg"),(0,v.jsx)("svg",{ref:t,id:"map-svg-floors",className:"content-svg",viewBox:n,children:e.children})}function oO(e){let{fidx:t,origViewBox:n,ctx:{fidxToOnAnimationEnd:r,urls:o}}=e,i=(0,m.useRef)(null);return et(tR,i,`svg-${t}`),(0,v.jsx)("g",{ref:i,className:`floor fidx-${t}`,onAnimationEnd:r(t),children:(0,v.jsx)(oD,{fidx:t,origViewBox:n,url:o.get(t)})})}function oD(e){let{origViewBox:t,url:n}=e;return(0,v.jsx)("image",{x:t.x,y:t.y,width:t.width,height:t.height,href:n})}let ok=n.p+"static/svg/floor-B1F.0e96d59282.svg",oC=[...Object.entries(JSON.parse('{"AB1F-Shops-S-A-1":{"x":768,"y":113},"AB1F-Shops-S-A-2":{"x":766,"y":145},"AB1F-Shops-S-A-3":{"x":762,"y":164},"AB1F-Shops-S-A-4":{"x":761,"y":186},"AB1F-Shops-S-A-5":{"x":762,"y":211},"AB1F-Shops-S-A-6":{"x":763,"y":242},"AB1F-Shops-S-A-7":{"x":762,"y":317},"AB1F-Shops-S-A-8":{"x":763,"y":338},"AB1F-Shops-S-B-1":{"x":646,"y":404},"AB1F-Shops-S-B-2":{"x":632,"y":422},"AB1F-Shops-S-B-3":{"x":611,"y":447},"AB1F-Shops-S-B-4":{"x":579,"y":487},"AB1F-Shops-S-B-5":{"x":527,"y":485},"AB1F-Shops-S-B-6":{"x":514,"y":474},"AB1F-Shops-S-B-7":{"x":498,"y":462},"AB1F-Shops-S-B-8":{"x":477,"y":443},"AB1F-Shops-S-B-9":{"x":454,"y":427},"AB1F-Shops-S-C-1":{"x":555,"y":439},"AB1F-Shops-S-C-2":{"x":531,"y":421},"AB1F-Shops-S-C-3":{"x":509,"y":402},"AB1F-Shops-S-C-4":{"x":500,"y":369},"AB1F-Shops-S-C-5":{"x":525,"y":355},"AB1F-Shops-S-C-6":{"x":572,"y":372},"AB1F-Shops-S-C-7":{"x":594,"y":397},"AB1F-Shops-S-C-8":{"x":571,"y":416},"AB1F-Shops-S-D-1":{"x":687,"y":111},"AB1F-Shops-S-D-2":{"x":664,"y":110},"AB1F-Shops-S-D-3":{"x":637,"y":110},"AB1F-Shops-S-D-4":{"x":612,"y":111},"AB1F-Shops-S-D-5":{"x":579,"y":121},"AB1F-Shops-S-D-6":{"x":539,"y":112},"AB1F-Shops-S-D-7":{"x":543,"y":62},"AB1F-Shops-S-E-1":{"x":696,"y":209},"AB1F-Shops-S-E-2":{"x":663,"y":205},"AB1F-Shops-S-E-3":{"x":636,"y":204},"AB1F-Shops-S-E-4":{"x":635,"y":171},"AB1F-Shops-S-E-5":{"x":663,"y":171},"AB1F-Shops-S-E-6":{"x":695,"y":177},"AB1F-Shops-S-F-1":{"x":587,"y":209},"AB1F-Shops-S-F-2":{"x":550,"y":210},"AB1F-Shops-S-F-3":{"x":549,"y":187},"AB1F-Shops-S-F-4":{"x":548,"y":164},"AB1F-Shops-S-F-5":{"x":587,"y":177},"AB1F-Shops-S-G-1":{"x":693,"y":300},"AB1F-Shops-S-G-2":{"x":683,"y":328},"AB1F-Shops-S-G-3":{"x":663,"y":312},"AB1F-Shops-S-G-4":{"x":637,"y":311},"AB1F-Shops-S-G-5":{"x":611,"y":312},"AB1F-Shops-S-G-6":{"x":584,"y":309},"AB1F-Shops-S-G-7":{"x":557,"y":311},"AB1F-Shops-S-G-8":{"x":536,"y":309},"AB1F-Shops-S-G-9":{"x":543,"y":265},"AB1F-Shops-S-G-10":{"x":591,"y":263},"AB1F-Shops-S-G-11":{"x":651,"y":265},"AB1F-Shops-S-G-12":{"x":708,"y":252},"AB1F-Shops-S-H-1":{"x":497,"y":81},"AB1F-Shops-S-H-2":{"x":498,"y":119},"AB1F-Shops-S-H-3":{"x":467,"y":118},"AB1F-Shops-S-H-4":{"x":466,"y":91},"AB1F-Shops-S-H-5":{"x":466,"y":69},"AB1F-Shops-S-I-1":{"x":490,"y":163},"AB1F-Shops-S-I-2":{"x":477,"y":198},"AB1F-Shops-S-I-3":{"x":459,"y":163},"AB1F-Shops-S-J-1":{"x":483,"y":275},"AB1F-Shops-S-J-2":{"x":486,"y":312},"AB1F-Shops-S-K-1":{"x":439,"y":372},"AB1F-Shops-S-K-2":{"x":421,"y":391},"AB1F-Shops-S-K-3":{"x":411,"y":410},"AB1F-Shops-N-1-1":{"x":372,"y":67},"AB1F-Shops-N-1-2":{"x":328,"y":67},"AB1F-Shops-N-1-3":{"x":279,"y":59},"AB1F-Shops-N-1-4":{"x":238,"y":38},"AB1F-Shops-N-1-5":{"x":223,"y":27},"AB1F-Shops-N-2-1":{"x":377,"y":106},"AB1F-Shops-N-2-2":{"x":338,"y":105},"AB1F-Shops-N-2-3":{"x":370,"y":126},"AB1F-Shops-N-2-4":{"x":330,"y":124},"AB1F-Shops-N-2-5":{"x":307,"y":118},"AB1F-Shops-N-2-6":{"x":279,"y":111},"AB1F-Shops-N-2-7":{"x":251,"y":101},"AB1F-Shops-N-2-8":{"x":204,"y":75},"AB1F-Shops-N-3-1":{"x":368,"y":186},"AB1F-Shops-N-3-2":{"x":358,"y":163},"AB1F-Shops-N-3-3":{"x":310,"y":173},"AB1F-Shops-N-3-4":{"x":271,"y":156},"AB1F-Shops-N-3-5":{"x":276,"y":187},"AB1F-Shops-N-3-6":{"x":245,"y":173},"AB1F-Shops-N-3-7":{"x":229,"y":142},"AB1F-Shops-N-3-8":{"x":216,"y":163},"AB1F-Shops-N-3-9":{"x":171,"y":122},"AB1F-Shops-N-4-1":{"x":309,"y":242},"AB1F-Shops-N-4-2":{"x":327,"y":271},"AB1F-Shops-N-4-3":{"x":291,"y":267},"AB1F-Shops-N-4-4":{"x":237,"y":275},"AB1F-Shops-N-4-5":{"x":206,"y":237},"AB1F-Shops-N-4-6":{"x":176,"y":264},"AB1F-Shops-N-4-7":{"x":174,"y":228},"AB1F-Shops-N-4-8":{"x":143,"y":190},"AB1F-Shops-N-4-9":{"x":118,"y":172},"AB1F-Shops-N-4-10":{"x":119,"y":219},"AB1F-Shops-N-4-11":{"x":90,"y":251},"AB1F-Shops-N-5-1":{"x":337,"y":317},"AB1F-Shops-N-5-2":{"x":320,"y":316},"AB1F-Shops-N-5-3":{"x":299,"y":314},"AB1F-Shops-N-5-4":{"x":240,"y":341},"AB1F-Shops-N-5-5":{"x":171,"y":301},"AB1F-Shops-N-5-6":{"x":142,"y":287},"AB1F-Shops-N-5-7":{"x":130,"y":305},"AB1F-Shops-U-1":{"x":526,"y":522},"AB1F-Shops-U-2":{"x":398,"y":420}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})],o$=Object.values(JSON.parse('{"B1F":{"12Twelve Agenda":["AB1F-Shops-N-2-6"],"3COINS+plus":["AB1F-Shops-N-4-5"],"AENA":["AB1F-Shops-S-E-3"],"aimerfeel":["AB1F-Shops-S-G-4"],"AINZ&TULPE":["AB1F-Shops-S-C-6"],"AKOMEYA TOKYO":["AB1F-Shops-S-I-2"],"AMOSTYLE BY Triumph":["AB1F-Shops-N-2-8"],"AMPHI":["AB1F-Shops-N-3-2"],"Anker Store":["AB1F-Shops-S-H-1"],"BIEWS EYEBROW STUDIO":["AB1F-Shops-S-D-7"],"Capricious":["AB1F-Shops-N-2-7"],"CHIC":["AB1F-Shops-S-H-4"],"DHC":["AB1F-Shops-N-2-5"],"DoCLASSE":["AB1F-Shops-S-F-5"],"Dr.ストレッチ":["AB1F-Shops-S-E-5"],"fitfit":["AB1F-Shops-S-F-1"],"formforma":["AB1F-Shops-N-1-3"],"Heartdance":["AB1F-Shops-S-F-3"],"iPhone修理救急便":["AB1F-Shops-N-1-5"],"Jayro":["AB1F-Shops-S-G-7"],"J・マーケット":["AB1F-Shops-N-1-4"],"Laline":["AB1F-Shops-N-2-1"],"LUSH":["AB1F-Shops-U-1"],"L’OCCITANE":["AB1F-Shops-N-1-1"],"Mayfair Hampstead":["AB1F-Shops-S-I-3"],"MINI SOF":["AB1F-Shops-N-5-1"],"MISCH MASCH":["AB1F-Shops-N-3-1"],"MOOMIN SHOP CASUAL EDITION":["AB1F-Shops-S-D-6"],"NARACAMICIE":["AB1F-Shops-N-1-2"],"OWNDAYS":["AB1F-Shops-S-D-3"],"PXストア":["AB1F-Shops-S-F-2"],"RANDA":["AB1F-Shops-S-G-5"],"ROPÉ PICNIC":["AB1F-Shops-N-4-1"],"Samantha Thavasa Petit Choice":["AB1F-Shops-S-K-1"],"SM2":["AB1F-Shops-N-4-8"],"SoupStockTokyo":["AB1F-Shops-N-4-2"],"Techichi":["AB1F-Shops-N-3-4"],"WithGreen":["AB1F-Shops-S-C-5"],"いしがまやハンバーグ":["AB1F-Shops-S-C-3"],"えきめんや":["AB1F-Shops-S-B-2"],"おだしもん":["AB1F-Shops-N-4-6"],"きものやまと":["AB1F-Shops-S-D-4"],"こめらく":["AB1F-Shops-N-5-5"],"ごはんすすむ":["AB1F-Shops-S-B-8"],"はなまる うどん":["AB1F-Shops-S-G-1"],"まぐろ問屋 三浦三崎港":["AB1F-Shops-S-A-1"],"みずほ銀行ATMコーナー":["AB1F-Shops-N-5-2"],"アシックスウォーキング":["AB1F-Shops-S-E-4"],"アテニア":["AB1F-Shops-N-2-4"],"アフラックよくわかる!ほけん案内":["AB1F-Shops-S-C-7"],"アーモワール カプリス":["AB1F-Shops-S-I-1"],"ウンナナクール":["AB1F-Shops-N-2-2"],"オグラ":["AB1F-Shops-S-H-2"],"クイーンズ ウェイ":["AB1F-Shops-S-D-2"],"クォーク":["AB1F-Shops-U-2"],"コラージュ ガリャルダガランテ":["AB1F-Shops-N-2-3"],"ゴンチャ":["AB1F-Shops-N-4-7"],"サイアム オーキッド":["AB1F-Shops-S-E-1"],"サンドラッグ":["AB1F-Shops-N-3-9"],"サーティワン アイスクリーム":["AB1F-Shops-S-G-2"],"シャツプラザ":["AB1F-Shops-S-G-8"],"ジャン フランソワ":["AB1F-Shops-N-4-4"],"スターバックス コーヒー":["AB1F-Shops-S-G-10"],"セブンイレブン":["AB1F-Shops-S-G-11"],"タリーズ コーヒー":["AB1F-Shops-N-4-10"],"ダイアナ":["AB1F-Shops-S-G-9"],"チャンスセンター":["AB1F-Shops-N-5-7"],"チュチュアンナ":["AB1F-Shops-N-3-3"],"トラべレックス":["AB1F-Shops-N-3-7"],"ハニーズ":["AB1F-Shops-S-G-6"],"ビアード パパ":["AB1F-Shops-S-K-2"],"フルーツ ピークス":["AB1F-Shops-S-J-1"],"プロント":["AB1F-Shops-S-C-4"],"マクドナルド":["AB1F-Shops-N-5-4"],"ミスター ドーナツ":["AB1F-Shops-S-G-3"],"ミズノショップ":["AB1F-Shops-S-E-2"],"リーガル":["AB1F-Shops-N-3-8"],"ルピシア":["AB1F-Shops-S-H-5"],"ローソン":["AB1F-Shops-N-4-11"],"七宝麻辣湯":["AB1F-Shops-S-C-8"],"三本珈琲店":["AB1F-Shops-S-C-1"],"上等カレー":["AB1F-Shops-S-A-3"],"匠 Jang":["AB1F-Shops-S-B-4"],"博多一風堂":["AB1F-Shops-S-C-2"],"吾照里":["AB1F-Shops-S-A-7"],"和幸":["AB1F-Shops-S-A-6"],"山下本気うどん":["AB1F-Shops-N-4-3"],"崎陽軒 中華食堂":["AB1F-Shops-S-A-8"],"広州市場":["AB1F-Shops-S-A-4"],"日本旅行":["AB1F-Shops-N-3-7"],"春水堂":["AB1F-Shops-S-B-9"],"昭和堂薬局":["AB1F-Shops-N-4-9"],"東京ますいわ屋":["AB1F-Shops-S-D-5"],"東京純豆腐":["AB1F-Shops-N-5-6"],"杵屋":["AB1F-Shops-S-A-2"],"横浜くりこ庵":["AB1F-Shops-N-5-3"],"横浜銀行ATMセンター":["AB1F-Shops-S-K-3"],"江戸前横丁 すし横 ばく天 ろ鰻":["AB1F-Shops-S-B-1"],"沖縄時間":["AB1F-Shops-S-A-5"],"洋麺屋五右衛門":["AB1F-Shops-S-E-6"],"浪花ろばた八角":["AB1F-Shops-S-B-3"],"牛たん とろろ 麦めし ねぎし":["AB1F-Shops-S-B-7"],"玉泉亭":["AB1F-Shops-S-B-6"],"第2チャンスセンター":["AB1F-Shops-S-G-12"],"美容の館グレース":["AB1F-Shops-S-D-1"],"舎鈴":["AB1F-Shops-S-B-5"],"銀座マギー":["AB1F-Shops-S-H-3"],"銀座ワシントン":["AB1F-Shops-N-3-6"],"青山フラワーマーケット":["AB1F-Shops-S-J-2"]}}')).flatMap(function(e){return Object.entries(e)});rq(Array.from(o$).flatMap(rG));let oR=rV(o$);var oT=JSON.parse('{"x":46.92,"y":13.12,"width":746.35,"height":536.83}');!function(e){let t,n;tk.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;tL.send({type:"INIT",nfloors:t,fidx:n}),tI.postMessage({type:"INIT",cfg:e.floorsConfig,base:e.base})}}),tO.select.add(e=>tL.send({type:"SELECT",fidx:e})),tO.levelUp.add(()=>tL.send({type:"LEVEL.UP"})),tO.levelDown.add(()=>tL.send({type:"LEVEL.DOWN"})),tO.selectDone.add(e=>tL.send({type:"SELECT.DONE",fidx:e})),ns.fullscreen.add(op),tk.init.add(oh),ns.position.add(()=>{var e;return e={type:"GET"},void rZ.send(e)}),Q.eventTick.add(tf),Q.eventTick.add(ou.tick),Q.get.add(()=>oc({type:"GET"})),Q.sync.add(e=>oc({type:"SYNC",pos:e})),Q.syncSync.add(e=>oc({type:"SYNCSYNC",pos:e})),tk.init.add(e=>e.searchAddresses?Promise.resolve(e.searchAddresses).then(e=>{let t=e.map(e=>({...e,pos:e.floorPos}));r5.postMessage({type:"INIT",entries:t})}):e.getSearchEntries?Promise.resolve(e.getSearchEntries(e)).then(e=>{r5.postMessage({type:"INIT",entries:e})}):void 0),ng.start.add(function(e){r0.send({type:"SEARCH",req:e})}),ee.layout.add(function(e){let{layout:t,force:n}=e;tF({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>tB())}),ee.zoomStart.add(function(e){tF({type:"STYLE.ZOOM",...e}),tF({type:"STYLE.ANIMATION",animation:e.q})}),ee.zoomEnd.add(function(e){tF({type:"STYLE.ZOOM",zoom:e.zoom}),tF({type:"STYLE.ANIMATION",animation:e.q})}),ee.animationEnd.add(function(){tF({type:"STYLE.ANIMATION.END"})}),ee.mode.add(function(e){tF({type:"STYLE.MODE",mode:e})}),Q.eventExpire.add(tB),ns.reset.add(rT),ns.fullscreen.add(rT),ns.position.add(rT),ns.recenter.add(rT),ns.zoomOut.add(rT),ns.zoomIn.add(rT),ng.endDone.add(e=>nO.send({type:"DETAIL",...e})),ny.open.add(()=>{let e;return e=!0,J(ny.openDone,e)}),ny.openDone.add(e=>nO.send({type:e?"OPEN":"CANCEL"})),ny.close.add(()=>nO.send({type:"CANCEL"})),tO.lock.add(e=>nw({type:"SWITCH",fidx:e})),tO.selectDone.add(()=>nw({type:"SWITCH.DONE"})),ng.end.add(e=>nA.send({type:"SEARCH.END",res:e})),ny.open.add(()=>nS.set("locked")),ny.closeDone.add(()=>nw({type:"SEARCH.DONE"})),ny.closeDone.add(()=>nS.set("panning")),Q.getDone.add(e=>{null!==e&&nw({type:"SCROLL.GET.DONE",scroll:e})}),Q.syncSyncDone.add(e=>{null!==e&&nw({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),ee.resize.add(e=>{let{layout:t,force:n}=e;return nw({type:"RESIZE",layout:t,force:n})}),ee.mode.add(nj),ee.zoomStart.add(()=>{nE=!0}),ee.zoomEnd.add(()=>{nE=!1}),ns.reset.add(()=>nw({type:"HOME"})),ns.recenter.add(()=>nw({type:"RECENTER"})),ns.rotate.add(()=>nw({type:"ROTATE"})),ns.zoomOut.add(()=>nw({type:"ZOOM",z:-1,p:null})),ns.zoomIn.add(()=>nw({type:"ZOOM",z:1,p:null})),nm.multiStart.add(()=>K(Q.get)),nm.multiStart.add(()=>nS.set("touching")),nm.multiEnd.add(()=>nS.set("panning")),nm.zoom.add(e=>{let{z:t,p:n}=e;return nw({type:"ZOOM",z:t>0?1:-1,p:n})}),tk.rendered.add(()=>nw({type:"RENDERED"})),tL.start(),or.start(),rZ.start(),oi.start(),os.start(),r0.start(),tN.start(),ny.open.add(()=>oe(!0)),ny.close.add(()=>oe(!1)),rD.start(),nO.start(),nA.start();let r=(n={origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:rP,isUiRendered:rf,...e},f.set(e=>({...e,...n})),{...f.get(),origViewBox:t,...e});tC(r);let o=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.6.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),o.get("info")){let e=f.get(),t=document.getElementById(e.root);if(null===t)throw Error("#root not found!");(0,tU.createRoot)(t).render((0,v.jsx)(m.StrictMode,{children:(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"svgmapviewer"}),(0,v.jsx)("h2",{children:r.title}),(0,v.jsx)("div",{className:"info",children:(0,v.jsx)(tP.h,{className:"qrcode",marginSize:6,value:document.location.origin+document.location.pathname,width:"60vmin",height:"60vmin"})}),(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,v.jsx)("style",{children:tW})]})}))}else{let e=document.getElementById(r.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||nE)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(nE){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!rk)return;e.preventDefault()},document.title=r.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void or.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void or.send(t)},(0,tU.createRoot)(e).render((0,v.jsx)(m.StrictMode,{children:(0,v.jsx)(oy,{})}))}}({renderMap:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(oF,{...e}),(0,v.jsx)(oA,{...e})]})},isMapRendered:function(){return!0},...{root:"root",title:"Yokohama Porta",backgroundColor:"#ffffff",origViewBox:JSON.parse('{"x":0,"y":0,"width":800,"height":550}'),origBoundingBox:oT,zoomFactor:2,floorsConfig:{floors:[{name:"B1F",href:ok}],initialFidx:0},...{getSearchEntries:function(){return oC.map(e=>{let[t,n]=e;return{address:t,floorPos:n}})},getSearchInfo:function(e){let t=oR.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},RenderInfo:function(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("p",{children:e.info.title})})}}}})}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,a.d=(e,t,n)=>{var r=(t,n)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[n]:t[r]})};r(t,"get"),r(n,"value")},a.u=e=>"static/js/async/"+e+"."+({103:"443540df96",559:"a6b3b9a893"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,o)=>{if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var l=1/0,i=0;i<e.length;i++){for(var[n,r,o]=e[i],s=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t},a.p="/demos/YokohamaPorta/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,o,[i,l,s]=n,c=0;if(i.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var u=s(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","460","667"],()=>a(7282));l=a.O(l)})();