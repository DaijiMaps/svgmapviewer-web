(()=>{"use strict";var e,t,n,r,o={7282(e,t,n){let r,o,i,a,l,s,c,u,d;var h,p=n(376),y=n(8783),x=n(5906);let g={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let m={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:g,internals:g,origin:g,measures:g,viewbox:g,points:g,lines:g,multilinestrings:g,multipolygons:g},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,x.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,RenderInfo:function(e){return(0,x.createElement)("p",{},e.info.title)}},f=(0,p.e)(m),S=()=>(0,y.fp)(f);var v=n(4202);n(437);var A=n(215);let w=A.gPz([A.wNn,A.QfV]),b=A.O31(w);r=A._kM({ids:b}),A.mj7(r);let F=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var B=n(3024);function j(e,t,n){let[r,o,i]=e,[a,l]=t;return r*a+o*l+i*n}function E(e,t,n){return[j(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),j(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function M(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function O(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}let N={x:0,y:0};function k(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,o=e.x*n,i=e.y*r;return{...e,x:o,y:i}}function $(e,t,n,r){return{x:e,y:t,width:n,height:r}}let R={x:0,y:0,width:1,height:1};function D(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function T(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function z(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function C(e,t){return{...e,x:t.x,y:t.y}}function L(e){return function(e){let{x:t,y:n,width:r,height:o}=e;return`${t} ${n} ${r} ${o}`}(function(e,t){let{x:n,y:r,width:o,height:i}=e;return{x:t(n),y:t(r),width:t(o),height:t(i)}}(e,function(e){return Math.round(100*e)/100}))}function I(e){let{x:t,y:n,width:r,height:o}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+o}}}function H(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function P(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function U(e){let[[t,n],[r,o]]=e;return{tl:{x:t,y:n},br:{x:r,y:o}}}function W(e,t){return[E(e,function(e){let[t]=e;return t}(t),0),E(e,function(e){let[,t]=e;return t}(t),0),E(e,function(e){let[,,t]=e;return t}(t),1)]}function Y(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function Z(e,t,n,r){var o,i;return o=function(e,t){let[n,r]=t;return[Y(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),Y([-n,-r])].reduce(W)}("number"==typeof(i=t)?[i,i]:"x"in i?[i.x,i.y]:i,[n,r]),(0,B.Fs)(e,I,P,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>E(o,e,1)),U,H)}var q=n(9008),V=n(3342),G=n(4700),X=n(7686);let _=[1,2,2.5,5,10,15,20,25,30,40,50];function K(e){Promise.all(Array.from(e,e=>Promise.resolve(e()))).catch(e=>console.log("notifyCbs0",e))}function J(e,t){Promise.all(Array.from(e,e=>Promise.resolve(e(t)))).catch(e=>console.log("notifyCbs",e))}let Q={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ee={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function et(e,t,n){(0,x.useEffect)(()=>{let r=t.current;return r&&e.set(n,r),()=>{r&&e.delete(n)}},[n,t,e])}let en=new Map,er=e=>.5+.5*Math.log2(Math.max(1,e)),eo=`
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
`,ex=`
-webkit-user-select: none;
user-select: none;
`,eg=`
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
`,eF;function eB(e){return Math.round(100*e)/100}function ej(e){return Math.round(1e3*e)/1e3}function eE(e){return Math.round(1e7*e)/1e7}let eM=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function eO(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("g",{id:"measure",children:(0,v.jsx)(eD,{})})})}function eN(){let e=(0,x.useRef)(null);return et(eY,e,"distance"),(0,v.jsxs)("div",{ref:e,id:"distance",children:[(0,v.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),eM.map(e=>(0,v.jsxs)(x.Fragment,{children:[(0,v.jsx)("p",{id:`distance-x-${e+1}`,className:"distance distance-x","data-idx":e+1,style:{"--distance-idx":`${e+1}`}}),(0,v.jsx)("p",{id:`distance-y-${e+1}`,className:"distance distance-y","data-idx":e+1,style:{"--distance-idx":`${e+1}`}})]},e)),(0,v.jsx)("style",{children:(0,v.jsx)(eZ,{})})]})}let ek=new Map;function e$(){let e=(0,x.useRef)(null),t=(0,x.useRef)(null);return et(ek,e,"lon"),et(ek,t,"lat"),(0,v.jsxs)("div",{id:"coordinate",children:[(0,v.jsx)("p",{ref:e,id:"longitude"}),(0,v.jsx)("p",{ref:t,id:"latitude"}),(0,v.jsx)("style",{children:(0,v.jsx)(eC,{})})]})}let eR=new Map;function eD(){let e=(0,x.useRef)(null),t=(0,x.useRef)(null);return et(eR,e,"horizontal"),et(eR,t,"vertical"),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("path",{ref:e,id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),(0,v.jsx)("path",{ref:t,id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),eM.map((e,t)=>(0,v.jsx)(x.Fragment,{children:(0,v.jsx)(eT,{idx:t})},t))]})}function eT(e){let{idx:t}=e,n=(0,x.useRef)(null);return et(eR,n,`ring${t}`),(0,v.jsx)("path",{ref:n,id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"})}let ez=new Map;function eC(){return(0,v.jsxs)(v.Fragment,{children:[eP,eU,eW]})}let eL="100vw",eI="100svh",eH="var(--distance-radius-client)",eP=`
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
`,eY=new Map;function eZ(){return(0,v.jsxs)(v.Fragment,{children:[eV,eq,eG,eX]})}let eq=`
.distance {
  ${eo}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: 0% 0%;
}
`,eV=`
#distance-origin {
  transform: translate(calc(${eL} / 2), calc(${eI} / 2)) scale(0.5);
}
`,eG=(o=`${eH} * var(--distance-idx)`,i=`${eL} / 2 + ${o}`,a=`${eI} / 2`,`
.distance-x {
  transform: translate(calc(${i}), calc(${a})) scale(0.5);
}
`),eX=(l=`${eH} * var(--distance-idx)`,s=`${eL} / 2`,c=`${eI} / 2 + ${l}`,`
.distance-y {
  transform: translate(calc(${s}), calc(${c})) scale(0.5);
}
`);function e_(e){return void 0!==e&&"number"==typeof e}function eK(e,t,n,r,o,i){return new DOMMatrixReadOnly(e instanceof Array?e:e_(e)&&e_(t)&&e_(n)&&e_(r)&&e_(o)&&e_(i)?[e,t,n,r,o,i]:void 0)}function eJ(e){let{container:t,outer:n,svgScale:r,inner:o}=e,{x:i,y:a}=n;return{container:t,scroll:t,content:eK(),svgOffset:{x:-i,y:-a},svgScale:r,svg:o}}function eQ(e){return eK().multiply(function(e){let{svgOffset:t}=e;return eK().translate(-t.x,-t.y)}(e)).multiply(function(e){let{svgScale:t}=e;return eK().scale(1/t,1/t)}(e)).multiply(function(e){let{svg:t}=e;return eK().translate(-t.x,-t.y)}(e))}function e0(e){return e.content.multiply(eQ(e))}function e1(e){return(function(e){let{scroll:t}=e;return eK().translate(t.x,t.y)})(e).multiply(e0(e))}function e5(e,t){let n=e.height,r=n*t;return $((e.width-r)/2,0,r,n)}function e2(e,t){let n=e.width,r=n/t;return $(0,(e.height-r)/2,n,r)}let e3={...{container:R,scroll:R,content:eK(),svgOffset:{x:-0,y:-0},svgScale:1,svg:R},config:{fontSize:16,container:R,outer:R,inner:R,svgScale:1}};function e4(e,t){let n=T(e.scroll);return e6(e,t,t,n)}function e6(e,t,n,r){let o=e1(e).inverse().transformPoint(r),i=Z(e.scroll,[t,n],r.x,r.y),a=k(e.svgOffset,[t,n]),l=Z(e.svg,[t,n],o.x,o.y);return{...e,scroll:i,svgOffset:a,svg:l}}function e8(e,t){var n,r;let o=T({...e.scroll,x:0,y:0}),i=(n=o.x,r=o.y,eK().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:i}}function e7(e,t){let n=e.scroll,r=O(k(t,-1),n);return(0,B.Fs)(e,e=>({...e,scroll:z(e.scroll,r)}),e=>{let t,r,o,i,a,l,s;return t=C(e.scroll,n),r=e.content.inverse(),i=M(o=T(e.scroll),O(e.scroll,n)),a=r.transformPoint(o),l=k(O(r.transformPoint(i),a),-e.svgScale),s=z(e.svg,l),{...e,scroll:t,svg:s}})}function e9(e,t,n){e.classList.add(n?t:`not-${t}`),e.classList.remove(n?`not-${t}`:t)}let te=(e,t,n)=>(1-n)*e+n*t,tt=e=>1-(1-e)**3,tn=new Map,tr=new Map,to=new Map,ti=new Map,ta=new Map,tl=new Map;function ts(e,t){let n=null===e||null===e.origin?"0% 0%":`${e.origin.x}px ${e?.origin.y}px`,r=e?.to.b!==0,o=r||null===e?null:tu({animation:e,zoom:t},0),i=r||null===e?null:tu({animation:e,zoom:t},1),a=r&&null!==e?td({animation:e,zoom:t},0):null,l=r&&null!==e?td({animation:e,zoom:t},1):null,s=null!==e?"transform":null,c=null!==e?n:null,u=null!==a?"container-rotate 500ms ease":null!==o?"container-zoom 500ms ease":null;Array.from(ti,e=>{let[,r]=e,d=r.style.setProperty.bind(r.style);d("--zoom-origin",n),d("--zoom-zoom",t.toString()),d("--zoom-s",null),d("--zoom-s-inv",null),d("--zoom-k",null),d("--zoom-k-inv",null),d("--zoom-tx-a",(o&&`${o.tx}px`)??null),d("--zoom-ty-a",(o&&`${o.ty}px`)??null),d("--zoom-tx-b",(i&&`${i.tx}px`)??null),d("--zoom-ty-b",(i&&`${i.ty}px`)??null),d("--zoom-s-a",(o&&`${o.s}`)??null),d("--zoom-s-b",(i&&`${i.s}`)??null),d("--rotate-deg-a",(a&&`${a.deg}deg`)??null),d("--rotate-deg-b",(l&&`${l.deg}deg`)??null),d("will-change",s),d("transform-origin",c),d("animation",u)}),Array.from(ta,t=>{let[,n]=t,o=n.style.setProperty.bind(n.style);o("--zoom-s",null===e?null:e.to.a.toString()),o("--zoom-s-symbols",null===e?null:e.to.a.toString()),e9(n,"zooming",null!==e),r&&e9(n,"rotating",null!==e)}),Array.from(tl,t=>{let[,n]=t;e9(n,"zooming",null!==e),r&&e9(n,"rotating",null!==e)})}let tc=e=>.5+.5*Math.log2(Math.max(1,e));function tu(e,t){let{animation:n,zoom:r}=e,o=n.from,i=n.to,a=te(o.e,i.e,tt(t)),l=te(o.f,i.f,tt(t)),s=te(o.a,i.a,tt(t)),c=r*s,u=te(r,c,tt(t)),d=te(tc(r),tc(r*s),tt(t));return{tx:a,ty:l,s,sinv:1/s,z:u,zinv:1/u,k:d,kinv:1/d}}function td(e,t){let{animation:n}=e,r=te(th(n.from),th(n.to),tt(t));return{deg:r,deginv:1/r}}function th(e){let t=180/Math.PI*Math.atan2(e.b,e.a);return t>=0?t:t+360}let tp=new Map,ty=new Set,tx=new Map;function tg(){return!tp.has("S")&&(ty.add("S"),!0)}let tm=(0,p.e)({scroll:R,client:{width:0,height:0},timeStamp:0});function tf(e){let t=e.currentTarget;null!==t&&tm.set({scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}function tS(){return tm.get()}let tv=new Map;function tA(e,t){Array.from(tv,n=>{let[,r]=n;e9(r,"shown",e),e9(r,"appearing",t)})}let tw=`
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
`,tb=new Map,tF=(0,p.e)(e3),tB=(0,V.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,G.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,G.a)({}),updateSvgMatrix:(0,G.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return e0(t)}}),updateGeoMatrix:(0,G.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(f.get().mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,G.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,o=Math.max(n.width,n.height)/2*r,i=Math.round(Math.log10(o)),a=(t=o/Math.pow(10,i-1),_.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,i-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,G.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x+o.width/2,y:r.y+o.height/2};return i.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:o}=t,i=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+o.width,y:r.y+o.height};return{start:i.transformPoint(a),end:i.transformPoint(l)}}}),updateCoord:e=>{let t,n,r,o,{context:{geoPoint:i}}=e;return t=i.x>0?"E":"W",n=i.y>0?"N":"S",r=`${t} ${eE(Math.abs(i.x))}`,o=`${n} ${eE(Math.abs(i.y))}`,void Array.from(ek,e=>{let[t,n]=e;"lon"===t&&(n.textContent=r),"lat"===t&&(n.textContent=o)})},updateDistance:e=>{let{context:{distanceRadius:t}}=e;return function(e){let{svg:t,client:n}=e;Array.from(eY,e=>{let[,r]=e;Array.from(r.children,e=>{let n=e.getAttribute("data-idx");if(!n)return;let r=Number(n);"number"==typeof r&&(e.textContent=`${t*r}m`)}),r.style.setProperty.bind(r.style)("--distance-radius-client",`${n}px`)})}(t)},updateMeasure:e=>{var t,n,r;let o,i,a,l,{context:{layout:s,distanceRadius:c}}=e;return t=s.container.width,n=s.container.height,r=c.client,o=`M0,${n/2} h${t}`,i=`M${t/2},0 v${n}`,(a=eR.get("horizontal"))&&a.setAttribute("d",o),void((l=eR.get("vertical"))&&l.setAttribute("d",i),eM.forEach(e=>{let o=eR.get(`ring${e}`);if(!o)return;let i=function(e){let{width:t,height:n,r}=e,o=`${t}:${n}:${r}`,i=ez.get(o),a=`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1");return i||ez.set(o,a),a}({width:t,height:n,r:eB(r*(e+1))});o.setAttribute("d",i)}))}}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e3,zoom:1,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:N,distanceRadius:{svg:0,client:0},geoRange:{start:N,end:N},mode:"panning"},on:{"STYLE.LAYOUT":{actions:[(0,G.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return tF.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius","updateDistance","updateMeasure",(0,X.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}}),e=>{var t;let n,{context:r}=e;return n=eQ(t=r.layout),void(Array.from(tn,e=>{let[,r]=e,o=r.style.setProperty.bind(r.style);o("--layout-content-matrix",t.content.toString()),o("--layout-scroll-width",`${eB(t.scroll.width)}px`),o("--layout-scroll-height",`${eB(t.scroll.height)}px`),o("--layout-svg-to-content-matrix",new DOMMatrixReadOnly([n.a,n.b,n.c,n.d,eB(n.e),eB(n.f)]).toString())}),Array.from(tr,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svg-x",`${eB(t.svg.x).toString()}px`),r("--layout-svg-y",`${eB(t.svg.y).toString()}px`),r("--layout-svg-width",`${eB(t.svg.width).toString()}px`),r("--layout-svg-height",`${eB(t.svg.height).toString()}px`)}))},e=>{var t;let{context:n}=e;return t=n.layout,void Array.from(to,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svgscale",`${eB(t.svgScale)}`),r("--layout-fontsize",`${eB(t.config.fontSize)}`)})},e=>{var t,n;let r,o,{context:i}=e;return t=i.layout,r=er(n=i.zoom),o=t.config.fontSize*t.svgScale*er(n),void Array.from(en,e=>{let[,t]=e,n=t.style.setProperty.bind(t.style);n("--map-symbol-size",`${o/72}`),n("--map-symbol-size-k",`${r}`)})}]},"STYLE.ZOOM":{actions:[{type:"updateZoom",params:e=>{let{event:t}=e;return t}},e=>{let{context:{zoom:t}}=e;return ts(null,t)}]},"STYLE.SCROLL":{actions:[{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}},"updateCoord"]},"STYLE.MODE":{actions:(0,G.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",entry:e=>{let{context:t}=e;return tA(t.shown,t.appearing)},states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:[(0,G.a)({appearing:!0}),e=>{let{context:t}=e;return tA(t.shown,t.appearing)}],target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:[(0,G.a)({appearing:!1,shown:!0}),e=>{let{context:{zoom:t}}=e;return ts(null,t)},e=>{let{context:t}=e;return tA(t.shown,t.appearing)},"updateDistance","updateMeasure"],target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:[e=>{let{context:{zoom:t},event:{animation:n}}=e;return ts(n,t)},(0,G.a)({animating:!0}),()=>{var e;let t,n;return e="zoom",t=performance.now(),n=requestAnimationFrame(function n(r){if(Math.abs(r-t)/500<1){let t=requestAnimationFrame(n);tb.set(e,t)}else{let t=tb.get(e);void 0!==t&&cancelAnimationFrame(t),tb.delete(e)}}),void tb.set(e,n)}],target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,G.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:[e=>{let{context:{zoom:t}}=e;return ts(null,t)},(0,G.a)({animating:!1})],target:"Idle"}}}}}),tj=(0,X.c)(tB,{systemId:"system-viewer1"});function tE(e){tj.send(e)}function tM(e){return(0,q.d4)(tj,t=>e(t.context))}function tO(){tE({type:"STYLE.SCROLL",currentScroll:tS()})}let tN={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tk=n(1717);let t$={init:new Set,rendered:new Set},tR=function(e){J(t$.init,e)},tD=function(){K(t$.rendered)},tT=new Map,tz=(0,p.e)(0),tC=(0,V.mj)({types:{context:{},events:{},emitted:{}},actions:{updateInit:()=>void Array.from(tT,e=>{let t,[n,r]=e;(t=r.style.setProperty.bind(r.style))("will-change",null),t("animation",null),t("visibility","hidden")}),updateLoad:e=>{let t,{context:{fidx:n}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tT,e=>{var n;let r,[o,i]=e;return n=t.test(o),r=i.style.setProperty.bind(i.style),void(n?(r("will-change","opacity"),r("animation",`${ew} 250ms linear`),r("visibility",null)):(r("will-change",null),r("animation",null),r("visibility","hidden")))})},updateSwitch:e=>{let t,{context:{fidx:n,prevFidx:r}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tT,(e,o)=>{let[i,a]=e;return function(e,t,n,r){let o=e.style.setProperty.bind(e.style);if(t){let e=`${n?ew:"xxx-disappearing"} 250ms linear`;o("will-change","opacity"),o("animation",e),o("visibility",r?null:"hidden")}else o("will-change",null),o("animation",null),o("visibility",n?null:"hidden")}(a,null!==r,t.test(i),o===r||o===n)})}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:-1},initial:"Uninited",states:{Uninited:{on:{INIT:{actions:[(0,G.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return tz.set(t.fidx)},"updateInit"],target:"Loading"}}},Loading:{on:{IMAGE:{actions:(0,G.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}}),target:"Loaded"}}},Loaded:{always:[{guard:e=>{let{context:t}=e;return t.nfloors===t.blobs.size},actions:"updateLoad",target:"Animating"},"Loading"]},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,G.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return tz.set(t.fidx)},"updateSwitch"],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,tk.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,tk.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:[(0,G.a)({prevFidx:null}),"updateSwitch"],target:"Idle"}}}}}),tL=(0,X.c)(tC);tL.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,J(tN.lock,t)});let tI=new Worker(new URL(n.p+n.u(103),n.b),Object.assign({},{type:"module"},{type:void 0}));function tH(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,q.d4)(tL,t=>e(t.context))),o=(0,x.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,J(tN.selectDone,n))},[t]),i=(0,x.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,J(tN.lock,r))},[t,n]);return{fidx:t,prevFidx:n,fidxToOnAnimationEnd:o,fidxToOnClick:i,urls:r}}tI.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;tL.send({type:"IMAGE",fidx:e,blob:n})}}},tI.onerror=e=>{console.error("floors error",e)},tI.onmessageerror=e=>{console.error("floors messageerror",e)};var tP=n(5193),tU=n(3166);let tW=`
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
`,tY=new Map;function tZ(e,t,n){(0,x.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:tY.get(n)??null;if(null===r)return;let o=r.querySelector(`#${e}`)??null;if(null===o||null!==o.shadowRoot)return;let i=o.attachShadow({mode:"open"});tY.set(e,i),(0,tU.createRoot)(i).render(t)})(e,t,n),[e,n,t])}let tq={bus:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,v.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,v.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,v.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,v.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,v.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,v.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,v.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,v.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,v.jsx)("use",{x:"8.5",href:"#_person2"}),(0,v.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,v.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,v.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,v.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,v.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,v.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,v.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,v.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,v.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,v.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,v.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,v.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,v.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,v.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,v.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,v.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,v.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,v.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,v.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,v.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function tV(){return(0,v.jsx)("g",{className:"assets",children:(0,v.jsx)(tG,{})})}function tG(){return(0,v.jsx)("g",{className:"symbols",children:Object.entries(tq).map((e,t)=>{let[n,r]=e;return(0,v.jsx)(x.Fragment,{children:r({id:n})},t)})})}function tX(e){return e>.5?-1:+(e<.5)}function t_(e){return e<.3?1:e>.7?-1:0}function tK(e){return{open:e,animating:!1}}function tJ(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tQ(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function t0(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function t1(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function t5(e){let{open:t,animating:n}=e;return t||n}function t2(e,t,n,r){let o={x:t/2,y:n/2},i=t/20,a=i/2;function l(t){var n;let r,o;return n={x:e.h,y:e.v},r=t.x*n.x,o=t.y*n.y,{...t,x:r,y:o}}let s=e.th<Math.PI/4,c=0===e.v,u=0===e.h,d=l(k(o,-1)),h=l(c||u?O(k(o,-1),{x:r,y:r}):O(k(o,-1),{x:s?r:0,y:s?0:r})),[p,y]=u?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:i})]:[{x:0,y:0},l({x:i,y:0})],x=M(d,p),g=M(d,y);return{p:d,q:h,a:x,b:g}}let t3=e=>{let{x:t,y:n}=e;return`${ej(t)}, ${ej(n)}`},t4=`
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
`,t6=new Map,t8=new Map;function t7(e,t){let{open:n,animating:r}=t;Array.from(e,e=>{let[,t]=e;t.classList.add(n?"opened":"closed"),t.classList.remove(n?"closed":"opened"),e9(t,"animating",r)})}let t9=new Map,ne=new Map,nt=new Map,nn=new Map,nr=new Map;function no(){var e;let t=(0,x.useRef)(null),n=(0,x.useRef)(null),r=(0,x.useRef)(null),o=(0,x.useRef)(null);return et(t8,t,"balloon"),et(t9,t,"balloon"),et(ne,n,e="balloon"),et(nt,r,e),et(nn,o,e),(0,v.jsxs)("div",{ref:t,className:"balloon",children:[(0,v.jsxs)(na,{ref:n,children:[(0,v.jsx)("path",{ref:r,className:"bg"}),(0,v.jsx)("path",{ref:o,className:"fg"}),(0,v.jsx)("style",{children:nl})]}),(0,v.jsx)("style",{children:ni})]})}let ni=`
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
`,ns={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},nc=()=>K(ns.zoomIn),nu=()=>K(ns.zoomOut),nd=()=>K(ns.rotate),nh=()=>K(ns.reset),np=()=>K(ns.recenter),ny={start:new Set,end:new Set,endDone:new Set},nx={multiStart:new Set,multiEnd:new Set,zoom:new Set},ng={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},nm=(0,p.e)(!1),nf=e=>nm.set(()=>e),nS=(0,p.e)("panning");nS.subscribe(e=>{let t;return t=e,J(ee.mode,t)});let nv=(0,V.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>f.get().isMapRendered(),isUiRendered:()=>f.get().isUiRendered()},actions:{setRendered:(0,G.a)({rendered:!0}),emitGetScroll:(0,tk.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tk.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,tk.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,G.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,o={type:"zoom",z:n,p:r??T(e.layout.container)};return{...e,animationReq:o}}(n,t)}),prepareHome:(0,G.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,G.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:T(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,G.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,G.a)(e=>{var t,n,r,o,i,a,l,s,c,u,d,h,p;let y,x,g,m,S,v,A,w,b,F,B,j,{context:E}=e;return t=E.animationReq,n=E.layout,F=null===t?null:"zoom"===t.type?(r=n,o=t.z,i=t.p,y=e1(r).inverse().transformPoint(i),x=1/(a=o,Math.pow(f.get().zoomFactor,a)),g=eK().scale(1/x,1/x),{type:"Zoom",svg:Z(r.svg,x,y.x,y.y),svgScale:r.svgScale*x,q:{from:eK(),to:g,origin:i}}):"home"===t.type?(l=n,m=T((s=function(e){let{config:t,content:n}=e;return{config:t,...eJ(t),content:n}}(n)).config.inner),S=e1(l).transformPoint(m),v=s.svgScale/l.svgScale,w=(function(e,t){if(e instanceof DOMMatrixReadOnly)return eK(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return eK(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((A=T(l.container)).x-S.x,A.y-S.y).multiply((c=1/v,u=1/v,d=S.x,h=S.y,eK().scale(c,u,1,d,h,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:eK(),to:w,origin:null}}):(p=t.p,b=eK().rotate(90),{type:"Rotate",deg:90,q:{from:eK(),to:b,origin:p}}),B=E.layout,j=function(e,t){var n,r,o;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:C(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,o=t.svgScale,{...e,svg:r,svgScale:o}):e8(e,t.deg)}(E.layout,F),{...E,animation:F,prevLayout:B,layout:j}}),endZoom:(0,G.a)(e=>{var t,n;let r,o,{context:i}=e;return r=i.zoom*(null===(t=i.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),o=i.rotate+(null===(n=i.animationReq)||"rotate"!==n.type?0:n.deg),{...i,prevLayout:null,animation:null,zoom:r,rotate:o}}),endHome:(0,G.a)(e=>{let t,n,{context:r}=e;return t=T(r.origLayout.container),n=e8(e4(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,tk.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,tk.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,G.a)(e=>{let t,{context:n}=e;return t=T(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,G.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:e4(n,9)}}(n,t)}),resetScroll:(0,G.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tS(),n=e7(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,tk.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,G.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,tk.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tS();return{type:"SEARCH.START",req:{psvg:e1(e7(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,tk.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=tS(),o=e7(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:o}}}(n,t)}),emitSwitch:(0,tk.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,tk.a)({type:"SWITCH.DONE"}),enterZooming:()=>nf(!0),exitZooming:()=>nf(!1),unlockScroll:()=>!!ty.has("S")&&(ty.delete("S"),!0)}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:e3,prevLayout:null,layout:e3,cursor:T(e3.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,X.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{actions:"emitZoomEnd",target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{guard:()=>tg(),actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{guard:()=>tg(),actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{guard:()=>tg(),target:"Recentering"},ZOOM:{guard:()=>tg(),actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{guard:()=>tg(),actions:"prepareHome",target:"Zooming"},ROTATE:{guard:()=>tg(),actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",entry:"enterZooming",exit:["exitZooming","unlockScroll"],states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Rendering2"},{target:"Rendering2"}]},Rendering2:{after:{50:{target:"Done"}}},Done:{entry:"clearAnimation",type:"final"}}}}}),nA=(0,X.c)(nv,{systemId:"system-viewer1"});function nw(e){nA.send(e)}nA.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,J(ny.start,t)}),nA.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?nA.send({type:"SEARCH.DONE"}):(t=r,J(ny.endDone,t),n=r.psvg,J(ng.open,n))}),nA.on("ZOOM.START",e=>{let t;return t=e,J(ee.zoomStart,t)}),nA.on("ZOOM.END",e=>{let t;return t=e,J(ee.zoomEnd,t)}),nA.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,J(tN.select,t)}),nA.on("SWITCH.DONE",()=>K(tN.unlock)),nA.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},J(ee.layout,t)}),nA.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.sync,t)}),nA.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.syncSync,t)}),nA.on("SCROLL.GET",()=>K(Q.get));let nb=!1,nF=!1;function nB(e){nb="locked"===e,nF="locked"===e}function nj(e){(0,x.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",nE),()=>{t.removeEventListener("wheel",nE)}},[e])}function nE(e){let t=e.currentTarget;nF&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function nM(e){return function(t,n){let r=t[n],o=e(r);return t[n]=null===o?r:o,t}}let nO=(0,V.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return t5(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return t5(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,G.a)({canceling:()=>!0}),endCancel:(0,G.a)({canceling:()=>!1}),open:(0,G.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nM(tJ)(n,r)}}),close:(0,G.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nM(t0)(n,r)}}),handle:(0,G.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nM(n[r].open?tQ:t1)(n,r)}}),updateDetail:(0,G.a)({detail:(e,t)=>t,p:(e,t)=>{let{psvg:n,layout:r}=t;return e1(r).transformPoint(n)}}),updateBalloon:(0,G.a)({balloon:e=>{var t;let n,r,o,i,a,l,s,c,u,d,{context:{detail:h,p}}=e;return h&&p&&(t=h.layout,l=function(e,t){let{x:n,y:r}=t,o=e.width/e.height,i={x:n/e.width,y:r/e.height},a=o>1?tX(i.x):t_(i.x);return{h:a,v:o>1?t_(i.y):tX(i.y),th:Math.atan2(e.height,e.width)}}(t.container,p),s=t.container.width,r=50*(n=.01*Math.min(s,c=t.container.height)),o=50*n,i=10*n,a=r/100,d=t2(l,(u={bw:r,bh:o,lh:i,d:a,width:r+2*i+2*a,height:o+2*i+2*a}).bw,u.bh,u.lh),{_p:p,_hv:l,_W:s,_H:c,_size:u,_leg:d})}}),updateBalloonPaths:(0,G.a)({balloonPaths:e=>{let{context:{balloon:t}}=e;return t?._hv&&function(e,t){let{bw:n,bh:r,lh:o,d:i,width:a,height:l}=t,s=$(-a/2,-a/2,a,l),{body:c,leg:u}=function(e,t,n,r){let o={x:t/2,y:n/2},i=`
m${ej(-o.x)},${ej(-o.y)}
h${ej(t)}
v${ej(n)}
h${ej(-t)}
z
`,{p:a,q:l,a:s,b:c}=t2(e,t,n,r),u=O(l,s),d=O(c,l),h=O(a,c);return{body:i,leg:`
m${t3(s)}
l${t3(u)}
l${t3(d)}
l${t3(h)}
z
`}}(e,n,r,o);function d(e){return`M${ej(e)},${ej(e)} ${c} M${ej(e)},${ej(e)} ${u}`}return{viewBox:s,width:a,height:l,bg:d(i),fg:d(0)}}(t._hv,t._size)||void 0}}),updateHeaderStyle:e=>{let{context:t}=e;t7(t6,t.m.header)},updateBalloonStyle:e=>{let{context:t}=e;t.balloon&&function(e,t){let{_p:n,_hv:r,_size:o,_leg:i}=e,a=function(e,t,n,r,o){let{open:i,animating:a}=o;if(null!==e&&null!==t&&t5({open:i,animating:a})){let{width:t,height:o}=n,{a:l,b:s,timing:c,txa:u,txb:d}=function(e,t,n,r){let o=k(r,-1);if(t){let{a:t,b:r}=e?{a:0,b:1}:{a:1,b:0},i=e?{a:N,b:o}:{a:o,b:N},{a:a,b:l}={a:M(n,i.a),b:M(n,i.b)};return{a:t,b:r,timing:e?ev:eA,txa:a,txb:l}}{let{b:e}={a:0,b:1};return{a:null,b:e,timing:null,txa:null,txb:M(n,o)}}}(i,a,e,r.q),h=`${ej(-t/2)}px`,p=`${ej(-o/2)}px`,y=u&&`${ej(u.x)}px`,x=u&&`${ej(u.y)}px`;return{visibility:null,a:l,b:s,timing:c,pww:h,phh:p,txax:y,txay:x,txbx:d&&`${ej(d.x)}px`,txby:d&&`${ej(d.y)}px`}}return{visibility:"hidden",a:null,b:null,timing:null,pww:null,phh:null,txax:null,txay:null,txbx:null,txby:null}}(n,r,o,i,t);Array.from(t9,e=>{let[,t]=e;!function(e,t){let{visibility:n,a:r,b:o,timing:i,pww:a,phh:l,txax:s,txay:c,txbx:u,txby:d}=t,h=e.style.setProperty.bind(e.style);h("visibility",n),h("--balloon-pww",a),h("--balloon-phh",l),h("--a",null===r?null:r.toString()),h("--b",null===o?null:o.toString()),h("--timing",i),h("--balloon-tx-a-x",s),h("--balloon-tx-a-y",c),h("--balloon-tx-b-x",u),h("--balloon-tx-b-y",d)}(t,a)})}(t.balloon,t.m.detail),t.balloonPaths&&function(e){let{viewBox:t,width:n,height:r,bg:o,fg:i}=e;Array.from(ne,e=>{let[,o]=e;o.setAttribute("viewBox",L(t)),o.setAttribute("width",`${n}`),o.setAttribute("height",`${r}`)}),Array.from(nt,e=>{let[,t]=e;return t.setAttribute("d",o)}),Array.from(nn,e=>{let[,t]=e;return t.setAttribute("d",i)})}(t.balloonPaths)},updateDetailStyle:e=>{let{context:t}=e,n=t.m.detail;requestAnimationFrame(()=>{t7(t8,n),requestAnimationFrame(()=>(function(e){let{open:t,animating:n}=e;t||n||Array.from(nr,e=>{let[,t]=e;t.scroll(0,0)})})(n))})}}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,m:{header:tK(!0),detail:tK(!1)},animationEnded:{header:!0,detail:!0}}},on:{RENDERED:{actions:["updateHeaderStyle","updateDetailStyle","updateBalloonStyle"]}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:[{type:"updateDetail",params:e=>{let{event:{type:t,...n}}=e;return n}},"updateBalloon","updateBalloonPaths"],target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,X.n)("animationEnded")},{actions:(0,G.a)({animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,X.n)("isDetailVisible")},{target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,X.n)("animationEnded")},{actions:(0,G.a)({animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],exit:"endCancel",on:{DONE:[{guard:(0,X.n)("isHeaderVisible")},{guard:"isDetailVisible"},{target:"Closed"}]}},Closed:{entry:(0,tk.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},"updateHeaderStyle",(0,G.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,X.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},"updateBalloonStyle","updateDetailStyle",(0,G.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,X.r)({type:"DONE"})]}}}}}),nN=(0,X.c)(nO);function nk(e){nN.send(e)}function n$(){let e=(0,x.useRef)(null);nj(e),et(t9,e,"detail"),et(t8,e,"detail"),et(nr,e,"detail");let t=(0,q.d4)(nN,e=>e.context.detail),n=S();return(0,v.jsxs)("div",{ref:e,className:"detail",onAnimationEnd:()=>nk({type:"DETAIL.ANIMATION.END"}),children:[n.RenderInfo&&t&&(0,v.jsx)(n.RenderInfo,{info:t.info}),(0,v.jsx)("style",{children:nR})]})}nN.on("CLOSE.DONE",()=>K(ng.closeDone));let nR=`
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
    ${ex}
    margin: 1.5em;
    text-align: center;
  }
  & p {
    ${ex}
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
`;function nD(){return tZ("detail",(0,v.jsx)(nT,{}),"ui"),(0,v.jsx)("div",{id:"detail"})}function nT(){return(0,v.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,v.jsx)(no,{}),(0,v.jsx)(n$,{}),(0,v.jsx)("style",{children:t4}),(0,v.jsx)(nz,{})]})}function nz(){return(0,v.jsx)("svg",{id:"ui-svg-defs",children:(0,v.jsx)("defs",{children:(0,v.jsx)(tV,{})})})}function nC(){return tZ("footer",(0,v.jsx)(nL,{}),"ui"),(0,v.jsx)("div",{id:"footer"})}function nL(){let e=(0,x.useRef)(null);et(t6,e,"footer");let t=S();return(0,v.jsxs)("div",{ref:e,className:"ui-content footer",children:[(0,v.jsx)("p",{children:(0,v.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:t.copyright})}),(0,v.jsx)("style",{children:nI})]})}let nI=`
.footer {
  ${ea}
  ${ep}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${ex}
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
`;function nH(){return tZ("guides",(0,v.jsx)(nP,{}),"ui"),(0,v.jsx)("div",{id:"guides"})}function nP(){let e,t=(0,x.useRef)(null);return et(t6,t,"guides"),et(tl,t,"guides"),(e=S(),(e.uiConfig?.showGuides??!0)&&!e.mapCoord.matrix.isIdentity)?(0,v.jsxs)("div",{ref:t,className:"ui-content guides",children:[(0,v.jsx)("svg",{className:"guides",children:(0,v.jsx)(eO,{})}),(0,v.jsx)(eN,{}),(0,v.jsx)(e$,{}),(0,v.jsx)("style",{children:nU})]}):(0,v.jsx)(v.Fragment,{})}let nU=`
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
  ${ex}
}
@keyframes xxx-measure {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;function nW(){let e=(0,x.useRef)(null),{fidx:t,fidxToOnClick:n}=tH(),r=S();return et(tx,e,"floors"),void 0===r.floorsConfig||r.floorsConfig.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{ref:e,className:"floors",children:[(0,v.jsx)("ul",{className:"floor-list",children:r.floorsConfig.floors.map((e,r)=>{let{name:o}=e;return(0,v.jsx)("li",{className:`floor-item ${nV(r===t)}`,onClick:n(r),children:o},r)})}),(0,v.jsx)("style",{children:nY})]})}let nY=`
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
`;function nZ(){let{fidx:e}=tH(),t=S().floorsConfig;return void 0===t||t.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{children:[t.floors.map((t,n)=>(0,v.jsx)("h2",{className:`floor-name ${nV(n===e)}`,children:t.name},n)),(0,v.jsx)("style",{children:nq})]})}let nq=`
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
`;function nV(e){return e?"selected":"unselected"}function nG(){return tZ("header",(0,v.jsx)(nX,{}),"ui"),(0,v.jsx)("div",{id:"header"})}function nX(){let e=(0,x.useRef)(null);(0,x.useEffect)(()=>{requestAnimationFrame(()=>nk({type:"RENDERED"}))},[]),et(t6,e,"header");let t=S();return(0,v.jsxs)("div",{ref:e,className:"ui-content header",onAnimationEnd:()=>nk({type:"HEADER.ANIMATION.END"}),children:[(0,v.jsx)("h1",{className:"title",onClick:()=>nh(),children:t.title}),(0,v.jsx)(nZ,{}),(0,v.jsx)("style",{children:n_})]})}let n_=`
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
  ${ex}
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
`;function nK(){return tZ("left",(0,v.jsx)(nJ,{}),"ui"),(0,v.jsx)("div",{id:"left"})}function nJ(){let e=(0,x.useRef)(null);return et(t6,e,"left"),(0,v.jsxs)("div",{ref:e,className:"ui-content left bottom",children:[(0,v.jsx)(nW,{}),(0,v.jsx)("style",{children:nQ})]})}let nQ=`
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
`;function n3(){return S().mapCoord.matrix.isIdentity?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)("div",{className:"button-item position",onClick:()=>K(ns.position),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n8})})})}let n4=3*Math.sqrt(2),n6=n4+6,n8=`
M 0,0
m 0,${n6/2}
l -3,-3
a ${n4},${n4} 0,1,1 6,0
z
m 0,${-n6+n4+n4/2}
a ${n4/2},${n4/2} 0,1,0 0,${-n4}
a ${n4/2},${n4/2} 0,1,0 0,${n4}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function n7(){return(0,v.jsx)("div",{className:"button-item recenter",onClick:()=>np(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n9})})})}let n9=`
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
`;function ra(){return tZ("right",(0,v.jsx)(rl,{}),"ui"),(0,v.jsx)("div",{id:"right"})}function rl(){let e=(0,x.useRef)(null);return et(t6,e,"right"),(0,v.jsxs)("div",{ref:e,className:"ui-content right bottom",children:[(0,v.jsx)(rc,{}),(0,v.jsx)("style",{children:rs})]})}let rs=`
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
`;function rc(){let e=(0,x.useRef)(null);return et(tx,e,"buttons"),(0,v.jsxs)("div",{ref:e,className:"buttons",children:[(0,v.jsx)(n3,{}),(0,v.jsx)(n5,{}),(0,v.jsx)(n0,{}),(0,v.jsx)(n7,{}),(0,v.jsx)(re,{}),(0,v.jsx)(ro,{}),(0,v.jsx)(rn,{}),(0,v.jsx)("style",{children:ru})]})}let ru=`
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
`;function rd(e){nm.get()&&e.preventDefault()}function rh(e){(0,x.useEffect)(()=>{let t=e.current;return t&&t.addEventListener("touchmove",rd),()=>{t&&t.removeEventListener("touchmove",rd)}},[e])}function rp(){return tZ("screen",(0,v.jsx)(ry,{}),"ui"),(0,v.jsx)("div",{id:"screen"})}function ry(){let e=(0,x.useRef)(null);return et(t8,e,"screen"),rh(e),nj(e),(0,v.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>K(ng.close),children:(0,v.jsx)("style",{children:rx})})}let rx=`
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
`;function rg(){return tZ("ui",(0,v.jsx)(rm,{})),(0,v.jsx)("div",{id:"ui"})}function rm(){let e=(0,x.useRef)(null);return et(tv,e,"ui"),(0,v.jsxs)("div",{ref:e,className:"ui",children:[(0,v.jsx)(rp,{}),(0,v.jsx)(nG,{}),(0,v.jsx)(nC,{}),(0,v.jsx)(nK,{}),(0,v.jsx)(ra,{}),(0,v.jsx)(nH,{}),(0,v.jsx)(nD,{}),(0,v.jsx)("style",{children:tw})]})}function rf(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function rS(){np()}let rv=new Map;function rA(e,t){let n=rv.get(t);if(n)return function(e,t){let n=e.scrollLeft,r=e.scrollTop,o=e.scrollWidth,i=e.scrollHeight;if(null===n)return!1;let a=o-t.width,l=i-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${i}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),r!==c&&(e.scrollTop=c);let u=e.scrollLeft;if(Math.abs(u-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${u}`),!1;let d=e.scrollTop;return!(Math.abs(d-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${d}`),!1)}(n,e)}var rw=n(8077),rb=n(990),rF=n(4465),rB=n(5909);let rj=(e,t)=>(function e(t,n,r){let o=Math.min(t.length,n.length),i=t[r],a=n[r];if(r>=o||i===eF||a===eF)return rw.pH(t.length,n.length);let l=rw.pH(i.x,a.x)||rw.pH(i.y,a.y);return 0===l?e(t,n,r+1):l})(e,t,0);function rE(e){return(0,B.Fs)(e.values(),rb.Ts,rb.di(rj),rb.x1(e=>0===e.length?rB.xT:rB.Py(e[0])))}function rM(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:k(t,1/e.length)}function rO(e){return new Map((0,B.Fs)(e.changedTouches,e=>rb.O3.from(e),rb.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let rN=(0,V.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,G.a)({touches:e=>{var t,n,r;let o,i,a,l,s,c,u,d,h,{context:{touches:p},event:y}=e;return"TOUCH.START"===y.type?(t=y.ev,n=p.vecs,r=rO(t),a=rM(i=rE(o=(0,B.Fs)([...n.entries(),...r.entries()],rb.TS(new Map,(e,t)=>{let[n,r]=t,o=rF.fromUndefinedOr(e.get(n)),i=rF.isSome(o)?[...o.value,...r]:r;return new Map(e).set(n,i)})))),s=2!==i.length?null:.5>Math.abs((l=O(i[0],i[1])).y/l.x),{...p,vecs:o,points:i,cursor:a,horizontal:s}):"TOUCH.MOVE"===y.type?function(e,t){var n,r,o,i;let a,l=rO(t),s=new Map((0,B.Fs)(e.vecs.entries(),rb.Ts,rb.Tj(e=>{let t,[n,r]=e;return[n,(t=rF.fromUndefinedOr(l.get(n)),rF.isSome(t)?[...t.value,...r]:r)]}))),c=rE(s),u=rM(c),[d,h]=c;if(null===u||d===eF||h===eF)return{...e,vecs:s,points:c,cursor:u};let p=(n=e.dists,r=Math.sqrt((o=d,i=h,Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2))),a=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||a>0?[r,...n]:n),y=function(e){let[t,n,r,o]=e;return t===eF||n===eF||r===eF||o===eF?null:t<n&&n<r&&r<o?-1:t>n&&n>r&&r>o?1:null}(p);return{vecs:s,points:c,cursor:u,dists:p,z:y,horizontal:e.horizontal}}(p,y.ev):"TOUCH.END"===y.type?(c=rO(y.ev),h=rM(d=rE(u=new Map((0,B.Fs)(p.vecs.entries(),rb.Ts,rb.x1(e=>{let[t,n]=e;return c.has(t)?rB.xT:rB.Py([t,n])}))))),{vecs:u,points:d,cursor:h,dists:0===u.size?[]:p.dists,z:0===u.size?null:p.z,horizontal:p.horizontal}):p}}),raiseOp:(0,X.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,G.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,G.a)({mode:"pan"}),enterPinch:(0,G.a)({mode:"pinch"}),emitMulti:(0,tk.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,tk.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,X.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,X.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,X.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),rk=(0,X.c)(rN),r$=!1;function rR(e){rk.send({type:"TOUCH.START",ev:e})}function rD(e){rk.send({type:"TOUCH.MOVE",ev:e})}function rT(e){rk.send({type:"TOUCH.END",ev:e})}function rz(){rk.send({type:"CANCEL"})}function rC(e){nb||nw({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function rL(e){if(null!==e){let t,n,r;(t=tp.get("S"))&&clearTimeout(t),n=setTimeout(()=>{tp.delete("S"),Array.from(tx,e=>{let[,t]=e;return e9(t,"locked",!1)})},200),tp.set("S",n),Array.from(tx,e=>{let[,t]=e;return e9(t,"locked",!0)}),r=e,J(Q.eventTick,r)}}function rI(e){let t=(0,x.useRef)(null);return et(t8,t,"container"),rh(t),et(ti,t,"container"),et(tv,t,"container"),et(rv,t,"container"),(0,v.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:rR,onTouchMove:rD,onTouchEnd:rT,onClick:rC,onContextMenu:rS,onScroll:rL,onAnimationEnd:e=>{var t;t={type:"ANIMATION.END",ev:e},t.ev?.stopPropagation(),nw(t),K(ee.animationEnd)},children:[e.children,(0,v.jsx)("style",{children:rH})]})}rk.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(r$=!0,K(nx.multiStart)):(K(nx.multiEnd),r$=!1)}),rk.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,o=n.z;null!==r&&null!==o&&(t={z:o>0?1:-1,p:r},J(nx.zoom,t))});let rH=`
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
`;function rP(){return null!==document.querySelector(".container")}var rU=n(3071);async function rW(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let rY=(0,V.mj)({types:{events:{},emitted:{}},actors:{api:(0,rU.Sx)(()=>rW(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,G.a)({position:e=>{let{event:t}=e;return t.output}}),(0,tk.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,G.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rZ=(0,X.c)(rY);function rq(e){let[t,n]=e;return n.map(e=>[t,e])}function rV(e){return e.reduce(function(e,t){let[n,r]=t,o=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,o]])},new Map)}function rG(e){return rV(Array.from(e).flatMap(rq).map(e=>{let[t,n]=e;return[n,t]}))}let rX=(0,p.e)(null),r_=(0,p.e)(null),rK=(0,p.e)(null),rJ=(0,p.e)(null),rQ=(0,V.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tk.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tk.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),r0=(0,X.c)(rQ);function r1(e){r0.send(e)}r0.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=f.get().mapCoord.matrix.inverse().transformPoint(t),r=tz.get();r5.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),r0.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,J(ny.end,t)});let r5=new Worker(new URL(n.p+n.u(559),n.b),Object.assign({},{type:"module"},{type:void 0}));r5.onmessage=async e=>{let t=e.data;switch(t.type){case"INIT.DONE":return r1({type:"INIT.DONE"});case"SEARCH.DONE":var n;let r;return(n=t.res,r=f.get(),Promise.resolve((e=>{let t=f.get().searchNames,n=(()=>{let e,t=f.get();if(t.getInfoByName)return t.getInfoByName;let n=rJ.get();if(null!==n)return n;let r=(e=t.searchInfos??[],t=>(e=>{let t=rK.get();if(null!==t)return t;let n=new Map(e.map(e=>[e.name,e.info]));return rK.set(n),n})(e??[]).get(t)||null);return rJ.set(r),r})();if(void 0===t||void 0===n)return null;let r=(e=>{let t=r_.get();if(null!==t)return t;let n=rG(e);return r_.set(n),n})((e=>{let t=rX.get();if(null!==t)return t;let n=e.map(e=>[e.name,e.addresses]);return rX.set(n),n})(t)).get(e.address);return void 0===r||r.size<1?null:n(Array.from(r)[0])})(n)).then(e=>null!==e?e:r.getSearchInfo(n,r.mapMap,r.osmSearchEntries)).then(e=>null===e?(console.log("info not found!",n),r1({type:"SEARCH.DONE",res:null})):r1({type:"SEARCH.DONE",res:{psvg:r.mapCoord.matrix.transformPoint(n.floorPos.coord),fidx:n.floorPos.fidx,info:e}}))).catch(e=>console.log("SEARCH.DONE",e));case"SEARCH.ERROR":return console.log("search error!",t.error),r1({type:"SEARCH.DONE",res:null})}},r5.onerror=e=>{console.error("search error",e)},r5.onmessageerror=e=>{console.error("search messageerror",e)};var r2=n(5318);let r3=Math.round,r4=document.createElement("div"),r6=new Map,r8=()=>{let e=f.get();var t=e.cartoConfig?.backgroundColor??e.backgroundColor??"darkgray";let n=r6.get(t);if(n)return n;r4.style.color=t,document.body.appendChild(r4);let r=getComputedStyle(r4).color;return document.body.removeChild(r4),r6.set(t,r),r},r7=new Map,r9=new Map;function oe(e){let t=(()=>{let e=r7.get("color");if(e)return e;let t=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:r8()});return t.parentNode||document.head.appendChild(t),r7.set("color",t),t})(),n={color:t.getAttribute("content")||r8()},{p:r,q:o}=(()=>{var e;let t=r8(),n=r9.get(t);if(n)return{p:t,q:n};let r=function(e){let{r:t,g:n,b:r}=e;return`rgb(${r3(t)}, ${r3(n)}, ${r3(r)})`}({r:(e=function(e){let t=e.match(/\d+/g);if(!t||3!==t.length)throw Error("invalid color!");let n=Number(t[0]);return{r:n,g:Number(t[1]),b:Number(t[2])}}(t)).r/2,g:e.g/2,b:e.b/2});return r9.set(t,r),{p:t,q:r}})(),i=e?o:r;(0,r2.i)(n,{color:i,duration:400,ease:"outQuad",onRender:()=>t.setAttribute("content",n.color)}),(0,r2.i)(document.body,{backgroundColor:i,duration:400,ease:"outQuad"}),(0,r2.i)(".container",{opacity:e?.5:1,duration:400,ease:"outQuad"})}function ot(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let on=(0,V.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==ot(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,tk.a)({type:"RESET"}),recenter:(0,tk.a)({type:"RECENTER"}),rotate:(0,tk.a)({type:"ROTATE"}),zoom:(0,tk.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tk.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tk.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,G.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||o}})(t.mod,n.key)}}),handleUp:(0,G.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:o}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&o}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:ot(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),or=(0,X.c)(on);or.on("RESET",nh),or.on("RECENTER",np),or.on("ROTATE",nd),or.on("ZOOM.IN",nc),or.on("ZOOM.OUT",nu),or.on("FLOOR.LEVEL.UP",()=>K(tN.levelUp)),or.on("FLOOR.LEVEL.DOWN",()=>K(tN.levelDown));let oo=(0,V.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:R,next:R,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,G.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,X.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!D(t.prev,t.next)},actions:[(0,G.a)({waited:0}),(0,tk.a)(e=>{var t,n,r,o;let i,a,{context:l}=e,s=f.get();return{type:"LAYOUT",layout:(t=s.fontSize,n=l.next,i=T((o={config:r=function(e,t,n,r){var o;let i,a,l,s,{outer:c,scale:u}=(o=r??n,i=t.width/t.height,s=(l=i>(a=o.width/o.height))?e5(t,a):e2(t,a),{outer:s,inner:l?e5(o,i):e2(o,i),scale:l?o.height/t.height:o.width/t.width,rO:i,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:u}}(t,n,s.origViewBox,s.origBoundingBox),...eJ(r)}).scroll),a=o.container.width/o.container.height,e6(o,a<1?1/a:1,a<1?1:+a,i)),force:!l.first}}),(0,G.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,G.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,X.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return D(t,tF.get().container)},actions:(0,G.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),oi=(0,X.c)(oo);oi.on("LAYOUT",e=>{let t;return t=e,J(ee.resize,t)}),window.addEventListener("resize",()=>{oi.send({type:"RESIZE"})});let oa=(0,V.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,G.a)({ticked:!1}),set:(0,G.a)({ticked:!0}),expire:(0,tk.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),ol=(0,V.mj)({types:{},actions:{getScroll:(0,G.a)({scroll:e=>{let{context:t}=e;return function(e){let t=rv.get(e);if(t)return $(t.scrollLeft,t.scrollTop,t.scrollWidth,t.scrollHeight)}("container")??t.scroll}}),syncScroll:(e,t)=>{let{pos:n}=t;return rA(n,"container")}},actors:{syncScrollLogic:(0,rU.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!rA(t,"container"))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,tk.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,G.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,tk.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,G.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),os=(0,X.c)(ol,{systemId:"system-scroll1"});function oc(e){os.send(e)}os.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.getDone,t)}),os.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.syncSyncDone,t)});let ou=(h=()=>K(Q.eventExpire),u=oa.provide({delays:{DURATION:500}}),(d=(0,X.c)(u)).on("EXPIRE",h),d.start(),{tick:function(){d.send({type:"TICK"})}}),od=(0,p.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function oh(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),od.trigger.set({names:t}))}async function op(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let oy=`
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
`,ox=`
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
  ${eg}
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
`,og=function(){let e,t=S(),n=t.cartoConfig?.backgroundColor??t.backgroundColor??"darkgray",r={data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig};return e=tM(e=>e.rendered),(0,x.useEffect)(()=>{requestAnimationFrame(()=>tD())},[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(rI,{...r,children:t.renderMap(r)}),(0,v.jsx)(rg,{}),(0,v.jsxs)("style",{children:[ox,`body { background-color: ${n}; }`]})]})};function om(e){return tZ(`map-floors-html-labels-${e.fidx}`,(0,v.jsx)(of,{...e}),"map-floors-html"),(0,v.jsx)("div",{id:`map-floors-html-labels-${e.fidx}`})}function of(e){let{labels:t}=e;return(0,v.jsxs)("div",{className:"labels",children:[t?.map((e,t)=>(0,v.jsx)(x.Fragment,{children:(0,v.jsx)(oS,{_text:e})},t)),(0,v.jsx)("style",{children:ov})]})}function oS(e){let{_text:t}=e;return(0,v.jsx)("div",{className:"label",style:{"--x":(t.attrs?.x||0)+"px","--y":(t.attrs?.y||0)+"px","--rotate":(t.attrs?.rotate||0)+"deg","--scale2":(t.attrs?.scale2||1)+"","--scale1":(t.attrs?.scale1||1)+""},children:t.children?.map((e,t)=>(0,v.jsx)("p",{children:e.text??""},t))})}let ov=`
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
`;function oA(e){let t=(0,x.useRef)(null);return et(tn,t,"map-floors-html-content"),tZ("map-floors-html",(0,v.jsx)(ow,{...e})),(0,v.jsx)("div",{ref:t,id:"map-floors-html",className:"content"})}function ow(e){return(0,v.jsxs)("div",{className:"map-floors-html-content",children:[(0,v.jsx)(ob,{...e}),(0,v.jsx)("style",{children:oF})]})}function ob(e){let{floors:t}=e,n=(0,x.useRef)(null);return et(tn,n,"map-floors-html"),(0,v.jsx)("div",{ref:n,className:"map-floors-html",children:t?.floors.map((e,n)=>(0,v.jsx)(x.Fragment,{children:(0,v.jsx)(oB,{fidx:n,floor:e,labelsMap:t?.labelsMap})},n))})}let oF=`
.map-floors-html {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
  transform: var(--layout-svg-to-content-matrix) !important;
  transform-origin: 0% 0% !important;
}
`;function oB(e){let{fidx:t,floor:n,labelsMap:r}=e,o=(0,x.useRef)(null);return et(tT,o,`html-${t}`),(0,v.jsx)("div",{ref:o,className:`floor fidx-${t}`,children:(0,v.jsx)(om,{fidx:t,labels:n.labels??function(e,t){if(void 0===e)return;let n=Array.from(oj.values());if(1===n.length)return n[0].get(t);let r=e instanceof Map?e:new Map(e instanceof Array?e:Object.entries(e));return oj.add(r),r.get(t)}(r,n.name.toLowerCase())})})}let oj=new Set;function oE(e){let{floors:t,data:{origViewBox:n}}=e,r=(0,x.useRef)(null);et(tn,r,"map-floors-svg");let o=tH();return(0,v.jsxs)("div",{ref:r,className:"content map-floors-svg",children:[(0,v.jsx)(oO,{children:t?.floors.map((e,t)=>(0,v.jsx)(x.Fragment,{children:(0,v.jsx)(oN,{fidx:t,origViewBox:n,ctx:o})},t))}),(0,v.jsx)("style",{children:oM})]})}let oM=`
svg.content-svg {
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
${eb}
`;function oO(e){let t=(0,x.useRef)(null),{viewBox:n}=function(){let{svg:e}=tM(e=>e.layout);return{viewBox:L(e)}}();return et(tn,t,"floors-svg"),(0,v.jsx)("svg",{ref:t,id:"map-svg-floors",className:"content-svg",viewBox:n,children:e.children})}function oN(e){let{fidx:t,origViewBox:n,ctx:{fidxToOnAnimationEnd:r,urls:o}}=e,i=(0,x.useRef)(null);return et(tT,i,`svg-${t}`),(0,v.jsx)("g",{ref:i,className:`floor fidx-${t}`,onAnimationEnd:r(t),children:(0,v.jsx)(ok,{fidx:t,origViewBox:n,url:o.get(t)})})}function ok(e){let{origViewBox:t,url:n}=e;return(0,v.jsx)("image",{x:t.x,y:t.y,width:t.width,height:t.height,href:n})}let o$=n.p+"static/svg/floor-B1F.89605a5437.svg",oR=[...Object.entries(JSON.parse('{"AB1F-Shops-1-1-1":{"x":353,"y":10},"AB1F-Shops-1-1-2":{"x":401,"y":10},"AB1F-Shops-1-1-3":{"x":449,"y":10},"AB1F-Shops-1-2-1":{"x":341,"y":46},"AB1F-Shops-1-2-2":{"x":341,"y":74},"AB1F-Shops-1-2-3":{"x":341,"y":115},"AB1F-Shops-1-2-4":{"x":341,"y":154},"AB1F-Shops-1-3-1":{"x":401,"y":87},"AB1F-Shops-1-3-2":{"x":437,"y":62.5},"AB1F-Shops-1-3-3":{"x":437,"y":77},"AB1F-Shops-1-3-4":{"x":437,"y":90.5},"AB1F-Shops-1-3-5":{"x":437,"y":105},"AB1F-Shops-1-3-6":{"x":420,"y":122},"AB1F-Shops-1-3-7":{"x":420,"y":140},"AB1F-Shops-1-3-8":{"x":401,"y":158},"AB1F-Shops-1-3-9":{"x":436,"y":158},"AB1F-Shops-1-4-1":{"x":495,"y":65},"AB1F-Shops-1-4-2":{"x":495,"y":92},"AB1F-Shops-1-4-3":{"x":495,"y":121},"AB1F-Shops-1-4-4":{"x":495,"y":140},"AB1F-Shops-1-4-5":{"x":495,"y":158},"AB1F-Shops-2-1":{"x":343,"y":190},"AB1F-Shops-2-2":{"x":338,"y":215},"AB1F-Shops-2-3":{"x":343,"y":240},"AB1F-Shops-2-4":{"x":403,"y":190},"AB1F-Shops-2-5":{"x":398,"y":210},"AB1F-Shops-2-6":{"x":438,"y":210},"AB1F-Shops-2-7":{"x":418,"y":240},"AB1F-Shops-2-8":{"x":418,"y":260},"AB1F-Shops-2-9":{"x":493,"y":190},"AB1F-Shops-2-10":{"x":493,"y":215},"AB1F-Shops-2-11":{"x":493,"y":255},"AB1F-Shops-3-1":{"x":343,"y":300},"AB1F-Shops-3-2":{"x":343,"y":315},"AB1F-Shops-3-3":{"x":343,"y":335},"AB1F-Shops-3-4":{"x":343,"y":355},"AB1F-Shops-3-5":{"x":343,"y":370},"AB1F-Shops-3-6":{"x":343,"y":395},"AB1F-Shops-3-7":{"x":343,"y":410},"AB1F-Shops-3-8":{"x":418,"y":300},"AB1F-Shops-3-9":{"x":398,"y":325},"AB1F-Shops-3-10":{"x":403,"y":345},"AB1F-Shops-3-11":{"x":403,"y":365},"AB1F-Shops-3-12":{"x":403,"y":390},"AB1F-Shops-3-13":{"x":418,"y":410},"AB1F-Shops-3-14":{"x":438,"y":390},"AB1F-Shops-3-15":{"x":438,"y":375},"AB1F-Shops-3-16":{"x":433,"y":355},"AB1F-Shops-3-17":{"x":438,"y":340},"AB1F-Shops-3-18":{"x":438,"y":320},"AB1F-Shops-3-19":{"x":493,"y":300},"AB1F-Shops-3-20":{"x":493,"y":330},"AB1F-Shops-3-21":{"x":493,"y":355},"AB1F-Shops-3-22":{"x":493,"y":395},"AB1F-Shops-4-1":{"x":253,"y":465},"AB1F-Shops-4-2":{"x":288,"y":475},"AB1F-Shops-4-3":{"x":288,"y":450},"AB1F-Shops-5-1":{"x":8,"y":525},"AB1F-Shops-5-2":{"x":13,"y":610},"AB1F-Shops-5-3":{"x":8,"y":635},"AB1F-Shops-5-4":{"x":33,"y":630},"AB1F-Shops-5-5":{"x":33,"y":605},"AB1F-Shops-5-6":{"x":68,"y":605},"AB1F-Shops-5-7":{"x":63,"y":630},"AB1F-Shops-5-8":{"x":78,"y":630},"AB1F-Shops-5-9":{"x":98,"y":635},"AB1F-Shops-5-10":{"x":103,"y":615},"AB1F-Shops-5-11":{"x":103,"y":600},"AB1F-Shops-5-12":{"x":73,"y":540},"AB1F-Shops-5-13":{"x":103,"y":540},"AB1F-Shops-5-14":{"x":98,"y":490},"AB1F-Shops-6-1":{"x":143,"y":555},"AB1F-Shops-6-2":{"x":163,"y":540},"AB1F-Shops-6-3":{"x":183,"y":540},"AB1F-Shops-6-4":{"x":198,"y":540},"AB1F-Shops-6-5":{"x":218,"y":555},"AB1F-Shops-6-6":{"x":218,"y":530},"AB1F-Shops-6-7":{"x":273,"y":530},"AB1F-Shops-6-8":{"x":258,"y":550},"AB1F-Shops-6-9":{"x":288,"y":555},"AB1F-Shops-6-10":{"x":138,"y":605},"AB1F-Shops-6-11":{"x":138,"y":630},"AB1F-Shops-6-12":{"x":168,"y":605},"AB1F-Shops-6-13":{"x":178,"y":630},"AB1F-Shops-6-14":{"x":198,"y":605},"AB1F-Shops-6-15":{"x":203,"y":630},"AB1F-Shops-6-16":{"x":218,"y":605},"AB1F-Shops-6-17":{"x":238,"y":605},"AB1F-Shops-6-18":{"x":258,"y":630},"AB1F-Shops-6-19":{"x":258,"y":610},"AB1F-Shops-6-20":{"x":288,"y":605},"AB1F-Shops-6-21":{"x":298,"y":630},"AB1F-Shops-7-1":{"x":398,"y":450},"AB1F-Shops-7-2":{"x":448,"y":475},"AB1F-Shops-7-3":{"x":483,"y":450},"AB1F-Shops-7-4":{"x":553,"y":470},"AB1F-Shops-7-5":{"x":603,"y":460},"AB1F-Shops-8-1":{"x":378,"y":525},"AB1F-Shops-8-2":{"x":413,"y":525},"AB1F-Shops-8-3":{"x":448,"y":525},"AB1F-Shops-8-4":{"x":483,"y":525},"AB1F-Shops-8-5":{"x":483,"y":555},"AB1F-Shops-8-6":{"x":438,"y":555},"AB1F-Shops-8-7":{"x":378,"y":550},"AB1F-Shops-8-8":{"x":378,"y":605},"AB1F-Shops-8-9":{"x":403,"y":605},"AB1F-Shops-8-10":{"x":433,"y":605},"AB1F-Shops-8-11":{"x":458,"y":605},"AB1F-Shops-8-12":{"x":488,"y":605},"AB1F-Shops-8-13":{"x":488,"y":630},"AB1F-Shops-8-14":{"x":458,"y":630},"AB1F-Shops-8-15":{"x":418,"y":630},"AB1F-Shops-8-16":{"x":378,"y":630},"AB1F-Shops-9-1":{"x":533,"y":530},"AB1F-Shops-9-2":{"x":548,"y":525},"AB1F-Shops-9-3":{"x":573,"y":530},"AB1F-Shops-9-4":{"x":608,"y":540},"AB1F-Shops-9-5":{"x":573,"y":555},"AB1F-Shops-9-6":{"x":538,"y":555},"AB1F-Shops-10-1":{"x":648,"y":545},"AB1F-Shops-10-2":{"x":678,"y":540},"AB1F-Shops-10-3":{"x":708,"y":545},"AB1F-Shops-10-4":{"x":743,"y":545},"AB1F-Shops-10-5":{"x":763,"y":545},"AB1F-Shops-10-6":{"x":778,"y":540},"AB1F-Shops-10-7":{"x":803,"y":545},"AB1F-Shops-10-8":{"x":823,"y":540},"AB1F-Shops-10-9":{"x":853,"y":540},"AB1F-Shops-10-10":{"x":873,"y":540},"AB1F-Shops-10-11":{"x":893,"y":540},"AB1F-Shops-10-12":{"x":913,"y":540},"AB1F-Shops-10-13":{"x":943,"y":540},"AB1F-Shops-10-14":{"x":963,"y":540},"AB1F-Shops-10-15":{"x":993,"y":540},"AB1F-Shops-11-1":{"x":533,"y":605},"AB1F-Shops-11-2":{"x":563,"y":605},"AB1F-Shops-11-3":{"x":593,"y":605},"AB1F-Shops-11-4":{"x":613,"y":605},"AB1F-Shops-11-5":{"x":613,"y":630},"AB1F-Shops-11-6":{"x":598,"y":630},"AB1F-Shops-11-7":{"x":578,"y":630},"AB1F-Shops-11-8":{"x":543,"y":630},"AB1F-Shops-11-9":{"x":643,"y":635},"AB1F-Shops-11-10":{"x":658,"y":610},"AB1F-Shops-11-11":{"x":688,"y":615},"AB1F-Shops-11-12":{"x":708,"y":615},"AB1F-Shops-11-13":{"x":738,"y":605},"AB1F-Shops-11-14":{"x":738,"y":620},"AB1F-Shops-11-15":{"x":738,"y":635},"AB1F-Shops-11-16":{"x":758,"y":610},"AB1F-Shops-11-17":{"x":783,"y":610},"AB1F-Shops-11-18":{"x":798,"y":610},"AB1F-Shops-11-19":{"x":818,"y":610},"AB1F-Shops-11-20":{"x":783,"y":635},"AB1F-Shops-11-21":{"x":863,"y":605},"AB1F-Shops-11-22":{"x":863,"y":635},"AB1F-Shops-11-23":{"x":893,"y":620},"AB1F-Shops-11-24":{"x":913,"y":620},"AB1F-Shops-11-25":{"x":943,"y":620},"AB1F-Shops-12-1":{"x":893,"y":700},"AB1F-Shops-12-2":{"x":813,"y":700},"AB1F-Shops-12-3":{"x":778,"y":695},"AB1F-Shops-12-4":{"x":753,"y":685},"AB1F-Shops-12-5":{"x":758,"y":710},"AB1F-Shops-12-6":{"x":738,"y":710},"AB1F-Shops-12-7":{"x":738,"y":685},"AB1F-Shops-12-8":{"x":688,"y":695}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})],oD=Object.values(JSON.parse('{"B1F":{"3COINS":["AB1F-Shops-11-11"],"CHAYA":["AB1F-Shops-1-4-1"],"CHIYODA HAKI-GOKOCHI":["AB1F-Shops-10-1"],"Dr.ストレッチ":["AB1F-Shops-9-2"],"iPhone修理救急便":["AB1F-Shops-8-14"],"J・マーケット":["AB1F-Shops-5-1"],"J・マーケット（八重洲地下2番通り）":["AB1F-Shops-1-3-4"],"RE/SET(リセット)":["AB1F-Shops-3-5"],"Shoeshine TOKYO by靴みがき本舗":["AB1F-Shops-3-16"],"Standard Products / THREEPPY":["AB1F-Shops-7-2"],"WWS":["AB1F-Shops-8-5"],"Zoff":["AB1F-Shops-6-12"],"あーす・ぺっとはうす":["AB1F-Shops-11-4"],"いきなり！ステーキ":["AB1F-Shops-11-13"],"いと井":["AB1F-Shops-5-7"],"えびそば一幻":["AB1F-Shops-10-14"],"おでん屋たけし":["AB1F-Shops-11-19"],"おらが蕎麦":["AB1F-Shops-10-7"],"がっとん":["AB1F-Shops-5-2"],"しゃぶしゃぶ但馬屋":["AB1F-Shops-1-1-3"],"ちょもらんま酒場":["AB1F-Shops-1-2-2"],"てんや":["AB1F-Shops-11-22"],"ひもの野郎":["AB1F-Shops-10-15"],"ぷらす鍼灸整骨院":["AB1F-Shops-2-8"],"ほけん百花":["AB1F-Shops-2-11"],"まくらぼ":["AB1F-Shops-9-1"],"らーめん七彩飯店":["AB1F-Shops-1-4-4"],"りそな銀行ATM":["AB1F-Shops-6-21"],"アイシティ":["AB1F-Shops-3-1"],"アイリスメガネ":["AB1F-Shops-9-6"],"アエナ":["AB1F-Shops-6-3"],"アシックス ウォーキング":["AB1F-Shops-6-2"],"アストリア":["AB1F-Shops-8-1"],"アトリエはるか":["AB1F-Shops-6-6"],"アルプス":["AB1F-Shops-5-11"],"アロマ珈琲":["AB1F-Shops-1-3-6"],"アンテナアメリカ":["AB1F-Shops-11-8"],"イオン銀行":["AB1F-Shops-2-7"],"インティミッシミ":["AB1F-Shops-8-11"],"エイチ・アイ・エス":["AB1F-Shops-2-3"],"エリックサウス":["AB1F-Shops-1-4-3"],"エルベンス ドゥ":["AB1F-Shops-6-14"],"エルーラ":["AB1F-Shops-8-12"],"エース バッグス＆ラゲージ":["AB1F-Shops-11-2","AB1F-Shops-12-8"],"オッズオネスト":["AB1F-Shops-3-4"],"オリックスレンタカー":["AB1F-Shops-2-1"],"オリヒカ":["AB1F-Shops-9-4"],"オーバカナル":["AB1F-Shops-7-1"],"カッフェ イタリアン・トマト":["AB1F-Shops-6-10"],"カフェカルディーノ/ハガレ":["AB1F-Shops-10-4"],"カラーフィールド":["AB1F-Shops-6-16"],"カルディコーヒーファーム":["AB1F-Shops-6-4"],"カレー＆ビリヤニ ニルヴァーナTokyo":["AB1F-Shops-12-6"],"キャンドゥ":["AB1F-Shops-6-1"],"キリンシティ":["AB1F-Shops-10-12"],"クイーンズウェイ / GINZA BODY CARE":["AB1F-Shops-7-5"],"ココカラファイン ヤエチカ北口店":["AB1F-Shops-5-12"],"ココカラファイン ヤエチカ南口店":["AB1F-Shops-11-12"],"サイアムオーキッド":["AB1F-Shops-11-25"],"サロン コスメティック ザ スパ":["AB1F-Shops-11-1"],"ザ・カーブ・ド・オイスター":["AB1F-Shops-12-2"],"スシロー":["AB1F-Shops-12-3"],"スターバックス コーヒー":["AB1F-Shops-2-2"],"ストラ":["AB1F-Shops-8-13"],"セブン-イレブン":["AB1F-Shops-12-1"],"タカキュー":["AB1F-Shops-3-22"],"タリーズコーヒー":["AB1F-Shops-1-1-1"],"チャージ":["AB1F-Shops-6-15"],"チュチュアンナ":["AB1F-Shops-6-9"],"ディファレンス":["AB1F-Shops-11-3"],"トウキョウシャツ":["AB1F-Shops-3-21"],"トッコ クローゼット":["AB1F-Shops-8-2"],"トヨタレンタカー":["AB1F-Shops-9-3"],"トラベレックス":["AB1F-Shops-1-3-2"],"ドゥクラッセ":["AB1F-Shops-8-6"],"ドン・キホーテ(お菓子ドンキ・お酒ドンキ)":["AB1F-Shops-6-5"],"ナチュラルビューティーベーシック":["AB1F-Shops-6-20"],"ネイルクイック":["AB1F-Shops-3-10"],"バビーズ ヤエチカ":["AB1F-Shops-2-5"],"パウワウ":["AB1F-Shops-8-3"],"ビューズアイブロウスタジオ":["AB1F-Shops-3-18"],"ファス":["AB1F-Shops-3-9"],"ファミリーマート":["AB1F-Shops-6-7"],"フィットフィット":["AB1F-Shops-8-10"],"フラガ・ベイシカ":["AB1F-Shops-8-9"],"フランクリン・プランナー":["AB1F-Shops-2-9"],"ブレフ":["AB1F-Shops-3-20"],"プロント":["AB1F-Shops-10-9"],"ペッパーランチ":["AB1F-Shops-1-2-4"],"マジックミシン":["AB1F-Shops-3-15"],"マツモトキヨシ":["AB1F-Shops-3-19"],"マドラス":["AB1F-Shops-11-10"],"マネケン":["AB1F-Shops-11-15"],"マンモスコーヒー":["AB1F-Shops-3-11"],"ミスターミニット":["AB1F-Shops-6-11"],"ミズノ":["AB1F-Shops-10-3"],"メガネスーパー":["AB1F-Shops-3-7"],"ユナイテッドアローズ グリーンレーベル リラクシング":["AB1F-Shops-8-7"],"ユニクロ":["AB1F-Shops-3-8"],"ラッシュ":["AB1F-Shops-6-19"],"ラフィネ":["AB1F-Shops-3-3"],"リアット！":["AB1F-Shops-3-14"],"リカーズハセガワ北口店":["AB1F-Shops-5-13"],"リカーズハセガワ本店":["AB1F-Shops-1-3-1"],"リブ":["AB1F-Shops-6-17"],"リーガル":["AB1F-Shops-9-5"],"ルーニィ":["AB1F-Shops-8-16"],"ロクシタン":["AB1F-Shops-8-8"],"ローソン":["AB1F-Shops-2-10"],"ワコール ザ ストア":["AB1F-Shops-8-4"],"三井住友銀行ＡＴＭ":["AB1F-Shops-4-2"],"三六":["AB1F-Shops-1-2-3"],"三陽食堂":["AB1F-Shops-1-3-9"],"串の味 東八":["AB1F-Shops-10-6"],"俺のイタリアン":["AB1F-Shops-11-7"],"元祖油堂":["AB1F-Shops-5-3"],"八重洲もつ焼酒場てけてけ":["AB1F-Shops-11-21"],"八重洲サービスセンター":["AB1F-Shops-3-17"],"八重洲地下街郵便局":["AB1F-Shops-4-1"],"初藤":["AB1F-Shops-4-3"],"労金キャッシュサービス":["AB1F-Shops-1-3-3"],"北海道フーディスト":["AB1F-Shops-3-13"],"卵と私":["AB1F-Shops-10-13"],"吉野家":["AB1F-Shops-1-3-8"],"吾照里":["AB1F-Shops-10-11"],"和幸":["AB1F-Shops-1-1-2"],"喜八堂":["AB1F-Shops-2-6"],"大衆酒場　神田屋":["AB1F-Shops-1-2-1"],"奥芝商店":["AB1F-Shops-12-7"],"宝くじショップ":["AB1F-Shops-1-3-5"],"山田養蜂場":["AB1F-Shops-3-6"],"恵那栗工房 良平堂":["AB1F-Shops-7-3"],"星乃珈琲店":["AB1F-Shops-7-4"],"梅もと":["AB1F-Shops-5-10"],"梅蘭":["AB1F-Shops-10-5"],"楽天モバイル":["AB1F-Shops-2-4"],"洋麺屋 五右衛門":["AB1F-Shops-11-23"],"海人酒房":["AB1F-Shops-10-10"],"游亀亭":["AB1F-Shops-11-5"],"牛たん ねぎし":["AB1F-Shops-1-4-2"],"玉丁本店":["AB1F-Shops-11-17"],"町田商店":["AB1F-Shops-5-4"],"番外地":["AB1F-Shops-6-13"],"神乃珈琲":["AB1F-Shops-8-15"],"秋葉原カリガリ":["AB1F-Shops-12-4"],"立鮨 すし横":["AB1F-Shops-5-9"],"築地 すし好":["AB1F-Shops-11-24"],"蕎麦きり みよた":["AB1F-Shops-1-4-5"],"証明写真コーナー（八重洲地下１番通り）":["AB1F-Shops-3-2"],"証明写真コーナー（北）​":["AB1F-Shops-5-14"],"証明写真コーナー（南）":["AB1F-Shops-11-14"],"豚山":["AB1F-Shops-5-5"],"鉄板酒場 鐵一":["AB1F-Shops-11-18"],"銀座ライオン":["AB1F-Shops-1-3-7"],"長岡食堂":["AB1F-Shops-5-8"],"風雲児":["AB1F-Shops-5-6"],"香十":["AB1F-Shops-3-12"],"鶏三和":["AB1F-Shops-11-16"],"麦まる":["AB1F-Shops-10-8"],"ＡＢＣマート":["AB1F-Shops-10-2"]}}')).flatMap(function(e){return Object.entries(e)});rV(Array.from(oD).flatMap(rq));let oT=rG(oD);var oz=JSON.parse('{"x":0,"y":0,"width":1011.5499,"height":720.84001}');!function(e){let t,n;t$.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;tL.send({type:"INIT",nfloors:t,fidx:n}),tI.postMessage({type:"INIT",cfg:e.floorsConfig,base:e.base})}}),tN.select.add(e=>tL.send({type:"SELECT",fidx:e})),tN.levelUp.add(()=>tL.send({type:"LEVEL.UP"})),tN.levelDown.add(()=>tL.send({type:"LEVEL.DOWN"})),tN.selectDone.add(e=>tL.send({type:"SELECT.DONE",fidx:e})),ns.fullscreen.add(op),t$.init.add(oh),ns.position.add(()=>{var e;return e={type:"GET"},void rZ.send(e)}),Q.eventTick.add(tf),Q.eventTick.add(ou.tick),Q.get.add(()=>oc({type:"GET"})),Q.sync.add(e=>oc({type:"SYNC",pos:e})),Q.syncSync.add(e=>oc({type:"SYNCSYNC",pos:e})),t$.init.add(e=>e.searchAddresses?Promise.resolve(e.searchAddresses).then(e=>{let t=e.map(e=>({...e,pos:e.floorPos}));r5.postMessage({type:"INIT",entries:t})}):e.getSearchEntries?Promise.resolve(e.getSearchEntries(e)).then(e=>{r5.postMessage({type:"INIT",entries:e})}):void 0),ny.start.add(function(e){r0.send({type:"SEARCH",req:e})}),ee.layout.add(function(e){let{layout:t,force:n}=e;tE({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>tO())}),ee.zoomStart.add(function(e){tE({type:"STYLE.ZOOM",...e}),tE({type:"STYLE.ANIMATION",animation:e.q})}),ee.zoomEnd.add(function(e){tE({type:"STYLE.ZOOM",zoom:e.zoom}),tE({type:"STYLE.ANIMATION",animation:e.q})}),ee.animationEnd.add(function(){tE({type:"STYLE.ANIMATION.END"})}),ee.mode.add(function(e){tE({type:"STYLE.MODE",mode:e})}),Q.eventExpire.add(tO),ns.reset.add(rz),ns.fullscreen.add(rz),ns.position.add(rz),ns.recenter.add(rz),ns.zoomOut.add(rz),ns.zoomIn.add(rz),ny.endDone.add(e=>nN.send({type:"DETAIL",...e})),ng.open.add(()=>{let e;return e=!0,J(ng.openDone,e)}),ng.openDone.add(e=>nN.send({type:e?"OPEN":"CANCEL"})),ng.close.add(()=>nN.send({type:"CANCEL"})),tN.lock.add(e=>nw({type:"SWITCH",fidx:e})),tN.selectDone.add(()=>nw({type:"SWITCH.DONE"})),ny.end.add(e=>nA.send({type:"SEARCH.END",res:e})),ng.open.add(()=>nS.set("locked")),ng.closeDone.add(()=>nw({type:"SEARCH.DONE"})),ng.closeDone.add(()=>nS.set("panning")),Q.getDone.add(e=>{null!==e&&nw({type:"SCROLL.GET.DONE",scroll:e})}),Q.syncSyncDone.add(e=>{null!==e&&nw({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),ee.resize.add(e=>{let{layout:t,force:n}=e;return nw({type:"RESIZE",layout:t,force:n})}),ee.mode.add(nB),ee.zoomStart.add(()=>{nF=!0}),ee.zoomEnd.add(()=>{nF=!1}),ns.reset.add(()=>nw({type:"HOME"})),ns.recenter.add(()=>nw({type:"RECENTER"})),ns.rotate.add(()=>nw({type:"ROTATE"})),ns.zoomOut.add(()=>nw({type:"ZOOM",z:-1,p:null})),ns.zoomIn.add(()=>nw({type:"ZOOM",z:1,p:null})),nx.multiStart.add(()=>K(Q.get)),nx.multiStart.add(()=>nS.set("touching")),nx.multiEnd.add(()=>nS.set("panning")),nx.zoom.add(e=>{let{z:t,p:n}=e;return nw({type:"ZOOM",z:t>0?1:-1,p:n})}),t$.rendered.add(()=>nw({type:"RENDERED"})),tL.start(),or.start(),rZ.start(),oi.start(),os.start(),r0.start(),tj.start(),ng.open.add(()=>oe(!0)),ng.close.add(()=>oe(!1)),rk.start(),nN.start(),nA.start();let r=(n={origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:rP,isUiRendered:rf,...e},f.set(e=>({...e,...n})),{...f.get(),origViewBox:t,...e});tR(r);let o=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.6.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),o.get("info")){let e=f.get(),t=document.getElementById(e.root);if(null===t)throw Error("#root not found!");(0,tU.createRoot)(t).render((0,v.jsx)(x.StrictMode,{children:(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"svgmapviewer"}),(0,v.jsx)("h2",{children:r.title}),(0,v.jsx)("div",{className:"info",children:(0,v.jsx)(tP.h,{className:"qrcode",marginSize:6,value:document.location.origin+document.location.pathname,width:"60vmin",height:"60vmin"})}),(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,v.jsx)("style",{children:tW})]})}))}else{let e=document.getElementById(r.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||nF)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(nF){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!r$)return;e.preventDefault()},document.title=r.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void or.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void or.send(t)},(0,tU.createRoot)(e).render((0,v.jsx)(x.StrictMode,{children:(0,v.jsx)(og,{})}))}}({renderMap:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(oE,{...e}),(0,v.jsx)(oA,{...e})]})},isMapRendered:function(){return!0},...{root:"root",title:"Yaechika",backgroundColor:"#ffffff",origViewBox:JSON.parse('{"x":0,"y":0,"width":1011.5499,"height":720.84001}'),origBoundingBox:oz,zoomFactor:2,floorsConfig:{floors:[{name:"B1F",href:o$}],initialFidx:0},...{getSearchEntries:function(){return oR.map(e=>{let[t,n]=e;return{address:t,floorPos:n}})},getSearchInfo:function(e){let t=oT.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},RenderInfo:function(e){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("p",{children:e.info.title})})}}}})}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,a.d=(e,t,n)=>{var r=(t,n)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[n]:t[r]})};r(t,"get"),r(n,"value")},a.u=e=>"static/js/async/"+e+"."+({103:"701a8e1820",559:"d872af5de6"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,o)=>{if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var l=1/0,i=0;i<e.length;i++){for(var[n,r,o]=e[i],s=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t},a.p="/demos/Yaechika/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,o,[i,l,s]=n,c=0;if(i.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var u=s(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","460","667"],()=>a(7282));l=a.O(l)})();