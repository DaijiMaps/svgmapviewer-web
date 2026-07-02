(()=>{var e,t,n,r,i={4303(e,t,n){var r={"./floor-Main.svg":"1575"};function i(e){return n(a(e))}function a(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=()=>Object.keys(r),i.resolve=a,e.exports=i,i.id=4303},1575(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-Main.3a5e259e7a.svg"},3031(e,t,n){"use strict";let r,i,a,o,l,s,c,u,d;var g,h=n(376),m=n(8783),p=n(5906);let f={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let y={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:f,internals:f,origin:f,measures:f,viewbox:f,points:f,lines:f,multilinestrings:f,multipolygons:f},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,p.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,RenderInfo:function(e){return(0,p.createElement)("p",{},e.info.title)}},x=(0,h.e)(y),v=()=>(0,m.fp)(x);var w=n(4202);n(437);var b=n(215);let S=b.gPz([b.wNn,b.QfV]),j=b.O31(S);r=b._kM({ids:j}),b.mj7(r);let E=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var M=n(3024);function O(e,t,n){let[r,i,a]=e,[o,l]=t;return r*o+i*l+a*n}function k(e,t,n){return[O(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),O(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function N(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function $(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}let R={x:0,y:0};function D(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,i=e.x*n,a=e.y*r;return{...e,x:i,y:a}}function T(e,t,n,r){return{x:e,y:t,width:n,height:r}}let z={x:0,y:0,width:1,height:1};function C(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function A(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function L(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function I(e,t){return{...e,x:t.x,y:t.y}}function H(e){return function(e){let{x:t,y:n,width:r,height:i}=e;return`${t} ${n} ${r} ${i}`}(function(e,t){let{x:n,y:r,width:i,height:a}=e;return{x:t(n),y:t(r),width:t(i),height:t(a)}}(e,function(e){return Math.round(100*e)/100}))}function P(e){let{x:t,y:n,width:r,height:i}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+i}}}function U(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function F(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function W(e){let[[t,n],[r,i]]=e;return{tl:{x:t,y:n},br:{x:r,y:i}}}function Z(e,t){return[k(e,function(e){let[t]=e;return t}(t),0),k(e,function(e){let[,t]=e;return t}(t),0),k(e,function(e){let[,,t]=e;return t}(t),1)]}function Y(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function q(e,t,n,r){var i,a;return i=function(e,t){let[n,r]=t;return[Y(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),Y([-n,-r])].reduce(Z)}("number"==typeof(a=t)?[a,a]:"x"in a?[a.x,a.y]:a,[n,r]),(0,M.Fs)(e,P,F,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>k(i,e,1)),W,U)}var B=n(9008),V=n(3342),X=n(4700),_=n(7686);let G=[1,2,2.5,5,10,15,20,25,30,40,50];function K(e){Promise.all(Array.from(e,e=>Promise.resolve(e()))).catch(e=>console.log("notifyCbs0",e))}function J(e,t){Promise.all(Array.from(e,e=>Promise.resolve(e(t)))).catch(e=>console.log("notifyCbs",e))}let Q={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ee={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function et(e,t,n){(0,p.useEffect)(()=>{let r=t.current;return r&&e.set(n,r),()=>{r&&e.delete(n)}},[n,t,e])}let en=new Map,er=e=>.5+.5*Math.log2(Math.max(1,e)),ei=`
position: absolute;
left: 0;
top: 0;
`,ea=`
position: absolute;
right: 0;
top: 0;
`,eo=`
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
`,eg=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eh=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,em=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,ep=`
-webkit-user-select: none;
user-select: none;
`,ef=`
touch-action: none;
`,ey=`
pointer-events: none;
`,ex=`
pointer-events: initial;
`,ev=`
background-color: rgba(255, 255, 255, 0.5);
`,ew=`
cubic-bezier(0, 0, 0, 1)
`,eb=`
cubic-bezier(1, 0, 1, 1)
`,eS="xxx-appearing",ej=`
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
`,eE;function eM(e){return Math.round(100*e)/100}function eO(e){return Math.round(1e3*e)/1e3}function ek(e){return Math.round(1e7*e)/1e7}let eN=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function e$(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("g",{id:"measure",children:(0,w.jsx)(eC,{})})})}function eR(){let e=(0,p.useRef)(null);return et(eY,e,"distance"),(0,w.jsxs)("div",{ref:e,id:"distance",children:[(0,w.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),eN.map(e=>(0,w.jsxs)(p.Fragment,{children:[(0,w.jsx)("p",{id:`distance-x-${e+1}`,className:"distance distance-x","data-idx":e+1,style:{"--distance-idx":`${e+1}`}}),(0,w.jsx)("p",{id:`distance-y-${e+1}`,className:"distance distance-y","data-idx":e+1,style:{"--distance-idx":`${e+1}`}})]},e)),(0,w.jsx)("style",{children:(0,w.jsx)(eq,{})})]})}let eD=new Map;function eT(){let e=(0,p.useRef)(null),t=(0,p.useRef)(null);return et(eD,e,"lon"),et(eD,t,"lat"),(0,w.jsxs)("div",{id:"coordinate",children:[(0,w.jsx)("p",{ref:e,id:"longitude"}),(0,w.jsx)("p",{ref:t,id:"latitude"}),(0,w.jsx)("style",{children:(0,w.jsx)(eI,{})})]})}let ez=new Map;function eC(){let e=(0,p.useRef)(null),t=(0,p.useRef)(null);return et(ez,e,"horizontal"),et(ez,t,"vertical"),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("path",{ref:e,id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),(0,w.jsx)("path",{ref:t,id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),eN.map((e,t)=>(0,w.jsx)(p.Fragment,{children:(0,w.jsx)(eA,{idx:t})},t))]})}function eA(e){let{idx:t}=e,n=(0,p.useRef)(null);return et(ez,n,`ring${t}`),(0,w.jsx)("path",{ref:n,id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"})}let eL=new Map;function eI(){return(0,w.jsxs)(w.Fragment,{children:[eF,eW,eZ]})}let eH="100vw",eP="100svh",eU="var(--distance-radius-client)",eF=`
#distance,
#coordinate {
  ${ei}
  width: ${eH};
  height: ${eP};
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
  transform: translate(calc(${eH} / -2), calc(${eP} / -2)) scale(0.5);
}
`,eZ=`
#latitude {
  ${eo}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(calc(${eH} / 2), calc(${eP} / -2)) scale(0.5);
}
`,eY=new Map;function eq(){return(0,w.jsxs)(w.Fragment,{children:[eV,eB,eX,e_]})}let eB=`
.distance {
  ${ei}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: 0% 0%;
}
`,eV=`
#distance-origin {
  transform: translate(calc(${eH} / 2), calc(${eP} / 2)) scale(0.5);
}
`,eX=(i=`${eU} * var(--distance-idx)`,a=`${eH} / 2 + ${i}`,o=`${eP} / 2`,`
.distance-x {
  transform: translate(calc(${a}), calc(${o})) scale(0.5);
}
`),e_=(l=`${eU} * var(--distance-idx)`,s=`${eH} / 2`,c=`${eP} / 2 + ${l}`,`
.distance-y {
  transform: translate(calc(${s}), calc(${c})) scale(0.5);
}
`);function eG(e){return void 0!==e&&"number"==typeof e}function eK(e,t,n,r,i,a){return new DOMMatrixReadOnly(e instanceof Array?e:eG(e)&&eG(t)&&eG(n)&&eG(r)&&eG(i)&&eG(a)?[e,t,n,r,i,a]:void 0)}function eJ(e){let{container:t,outer:n,svgScale:r,inner:i}=e,{x:a,y:o}=n;return{container:t,scroll:t,content:eK(),svgOffset:{x:-a,y:-o},svgScale:r,svg:i}}function eQ(e){return eK().multiply(function(e){let{svgOffset:t}=e;return eK().translate(-t.x,-t.y)}(e)).multiply(function(e){let{svgScale:t}=e;return eK().scale(1/t,1/t)}(e)).multiply(function(e){let{svg:t}=e;return eK().translate(-t.x,-t.y)}(e))}function e0(e){return e.content.multiply(eQ(e))}function e1(e){return(function(e){let{scroll:t}=e;return eK().translate(t.x,t.y)})(e).multiply(e0(e))}function e5(e,t){let n=e.height,r=n*t;return T((e.width-r)/2,0,r,n)}function e2(e,t){let n=e.width,r=n/t;return T(0,(e.height-r)/2,n,r)}let e3={...{container:z,scroll:z,content:eK(),svgOffset:{x:-0,y:-0},svgScale:1,svg:z},config:{fontSize:16,container:z,outer:z,inner:z,svgScale:1}};function e4(e,t){let n=A(e.scroll);return e6(e,t,t,n)}function e6(e,t,n,r){let i=e1(e).inverse().transformPoint(r),a=q(e.scroll,[t,n],r.x,r.y),o=D(e.svgOffset,[t,n]),l=q(e.svg,[t,n],i.x,i.y);return{...e,scroll:a,svgOffset:o,svg:l}}function e7(e,t){var n,r;let i=A({...e.scroll,x:0,y:0}),a=(n=i.x,r=i.y,eK().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:a}}function e8(e,t){let n=e.scroll,r=$(D(t,-1),n);return(0,M.Fs)(e,e=>({...e,scroll:L(e.scroll,r)}),e=>{let t,r,i,a,o,l,s;return t=I(e.scroll,n),r=e.content.inverse(),a=N(i=A(e.scroll),$(e.scroll,n)),o=r.transformPoint(i),l=D($(r.transformPoint(a),o),-e.svgScale),s=L(e.svg,l),{...e,scroll:t,svg:s}})}function e9(e,t,n){e.classList.add(n?t:`not-${t}`),e.classList.remove(n?`not-${t}`:t)}let te=(e,t,n)=>(1-n)*e+n*t,tt=e=>1-(1-e)**3,tn=new Map,tr=new Map,ti=new Map,ta=new Map,to=new Map,tl=new Map;function ts(e,t){let n=null===e||null===e.origin?"0% 0%":`${e.origin.x}px ${e?.origin.y}px`,r=e?.to.b!==0,i=r||null===e?null:tu({animation:e,zoom:t},0),a=r||null===e?null:tu({animation:e,zoom:t},1),o=r&&null!==e?td({animation:e,zoom:t},0):null,l=r&&null!==e?td({animation:e,zoom:t},1):null,s=null!==e?"transform":null,c=null!==e?n:null,u=null!==o?"container-rotate 500ms ease":null!==i?"container-zoom 500ms ease":null;Array.from(ta,e=>{let[,r]=e,d=r.style.setProperty.bind(r.style);d("--zoom-origin",n),d("--zoom-zoom",t.toString()),d("--zoom-s",null),d("--zoom-s-inv",null),d("--zoom-k",null),d("--zoom-k-inv",null),d("--zoom-tx-a",(i&&`${i.tx}px`)??null),d("--zoom-ty-a",(i&&`${i.ty}px`)??null),d("--zoom-tx-b",(a&&`${a.tx}px`)??null),d("--zoom-ty-b",(a&&`${a.ty}px`)??null),d("--zoom-s-a",(i&&`${i.s}`)??null),d("--zoom-s-b",(a&&`${a.s}`)??null),d("--rotate-deg-a",(o&&`${o.deg}deg`)??null),d("--rotate-deg-b",(l&&`${l.deg}deg`)??null),d("will-change",s),d("transform-origin",c),d("animation",u)}),Array.from(to,t=>{let[,n]=t,i=n.style.setProperty.bind(n.style);i("--zoom-s",null===e?null:e.to.a.toString()),i("--zoom-s-symbols",null===e?null:e.to.a.toString()),e9(n,"zooming",null!==e),r&&e9(n,"rotating",null!==e)}),Array.from(tl,t=>{let[,n]=t;e9(n,"zooming",null!==e),r&&e9(n,"rotating",null!==e)})}let tc=e=>.5+.5*Math.log2(Math.max(1,e));function tu(e,t){let{animation:n,zoom:r}=e,i=n.from,a=n.to,o=te(i.e,a.e,tt(t)),l=te(i.f,a.f,tt(t)),s=te(i.a,a.a,tt(t)),c=r*s,u=te(r,c,tt(t)),d=te(tc(r),tc(r*s),tt(t));return{tx:o,ty:l,s,sinv:1/s,z:u,zinv:1/u,k:d,kinv:1/d}}function td(e,t){let{animation:n}=e,r=te(tg(n.from),tg(n.to),tt(t));return{deg:r,deginv:1/r}}function tg(e){let t=180/Math.PI*Math.atan2(e.b,e.a);return t>=0?t:t+360}let th=new Map,tm=new Set,tp=new Map;function tf(){return!th.has("S")&&(tm.add("S"),!0)}let ty=(0,h.e)({scroll:z,client:{width:0,height:0},timeStamp:0});function tx(e){let t=e.currentTarget;null!==t&&ty.set({scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}function tv(){return ty.get()}let tw=new Map;function tb(e,t){Array.from(tw,n=>{let[,r]=n;e9(r,"shown",e),e9(r,"appearing",t)})}let tS=`
.not-shown {
  opacity: 0;
}
.shown {
}
.not-appearing {
}
.appearing {
  will-change: opacity;
  animation: xxx-appearing 2s ${ew};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`,tj=new Map,tE=(0,h.e)(e3),tM=(0,V.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,X.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,X.a)({}),updateSvgMatrix:(0,X.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return e0(t)}}),updateGeoMatrix:(0,X.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(x.get().mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,X.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,i=Math.max(n.width,n.height)/2*r,a=Math.round(Math.log10(i)),o=(t=i/Math.pow(10,a-1),G.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(o.length<1)throw Error("findDiv");let{u:l}=o[0],s=l*Math.pow(10,a-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,X.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,a=n.geoMatrix,o={x:r.x+i.width/2,y:r.y+i.height/2};return a.transformPoint(o)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,a=n.geoMatrix,o={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:a.transformPoint(o),end:a.transformPoint(l)}}}),updateCoord:e=>{let t,n,r,i,{context:{geoPoint:a}}=e;return t=a.x>0?"E":"W",n=a.y>0?"N":"S",r=`${t} ${ek(Math.abs(a.x))}`,i=`${n} ${ek(Math.abs(a.y))}`,void Array.from(eD,e=>{let[t,n]=e;"lon"===t&&(n.textContent=r),"lat"===t&&(n.textContent=i)})},updateDistance:e=>{let{context:{distanceRadius:t}}=e;return function(e){let{svg:t,client:n}=e;Array.from(eY,e=>{let[,r]=e;Array.from(r.children,e=>{let n=e.getAttribute("data-idx");if(!n)return;let r=Number(n);"number"==typeof r&&(e.textContent=`${t*r}m`)}),r.style.setProperty.bind(r.style)("--distance-radius-client",`${n}px`)})}(t)},updateMeasure:e=>{var t,n,r;let i,a,o,l,{context:{layout:s,distanceRadius:c}}=e;return t=s.container.width,n=s.container.height,r=c.client,i=`M0,${n/2} h${t}`,a=`M${t/2},0 v${n}`,(o=ez.get("horizontal"))&&o.setAttribute("d",i),void((l=ez.get("vertical"))&&l.setAttribute("d",a),eN.forEach(e=>{let i=ez.get(`ring${e}`);if(!i)return;let a=function(e){let{width:t,height:n,r}=e,i=`${t}:${n}:${r}`,a=eL.get(i),o=`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1");return a||eL.set(i,o),o}({width:t,height:n,r:eM(r*(e+1))});i.setAttribute("d",a)}))}}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e3,zoom:1,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:R,distanceRadius:{svg:0,client:0},geoRange:{start:R,end:R},mode:"panning"},on:{"STYLE.LAYOUT":{actions:[(0,X.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return tE.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius","updateDistance","updateMeasure",(0,_.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}}),e=>{var t;let n,{context:r}=e;return n=eQ(t=r.layout),void(Array.from(tn,e=>{let[,r]=e,i=r.style.setProperty.bind(r.style);i("--layout-content-matrix",t.content.toString()),i("--layout-scroll-width",`${eM(t.scroll.width)}px`),i("--layout-scroll-height",`${eM(t.scroll.height)}px`),i("--layout-svg-to-content-matrix",new DOMMatrixReadOnly([n.a,n.b,n.c,n.d,eM(n.e),eM(n.f)]).toString())}),Array.from(tr,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svg-x",`${eM(t.svg.x).toString()}px`),r("--layout-svg-y",`${eM(t.svg.y).toString()}px`),r("--layout-svg-width",`${eM(t.svg.width).toString()}px`),r("--layout-svg-height",`${eM(t.svg.height).toString()}px`)}))},e=>{var t;let{context:n}=e;return t=n.layout,void Array.from(ti,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svgscale",`${eM(t.svgScale)}`),r("--layout-fontsize",`${eM(t.config.fontSize)}`)})},e=>{var t,n;let r,i,{context:a}=e;return t=a.layout,r=er(n=a.zoom),i=t.config.fontSize*t.svgScale*er(n),void Array.from(en,e=>{let[,t]=e,n=t.style.setProperty.bind(t.style);n("--map-symbol-size",`${i/72}`),n("--map-symbol-size-k",`${r}`)})}]},"STYLE.ZOOM":{actions:[{type:"updateZoom",params:e=>{let{event:t}=e;return t}},e=>{let{context:{zoom:t}}=e;return ts(null,t)}]},"STYLE.SCROLL":{actions:[{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}},"updateCoord"]},"STYLE.MODE":{actions:(0,X.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",entry:e=>{let{context:t}=e;return tb(t.shown,t.appearing)},states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:[(0,X.a)({appearing:!0}),e=>{let{context:t}=e;return tb(t.shown,t.appearing)}],target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:[(0,X.a)({appearing:!1,shown:!0}),e=>{let{context:{zoom:t}}=e;return ts(null,t)},e=>{let{context:t}=e;return tb(t.shown,t.appearing)},"updateDistance","updateMeasure"],target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:[e=>{let{context:{zoom:t},event:{animation:n}}=e;return ts(n,t)},(0,X.a)({animating:!0}),()=>{var e;let t,n;return e="zoom",t=performance.now(),n=requestAnimationFrame(function n(r){if(Math.abs(r-t)/500<1){let t=requestAnimationFrame(n);tj.set(e,t)}else{let t=tj.get(e);void 0!==t&&cancelAnimationFrame(t),tj.delete(e)}}),void tj.set(e,n)}],target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,X.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:[e=>{let{context:{zoom:t}}=e;return ts(null,t)},(0,X.a)({animating:!1})],target:"Idle"}}}}}),tO=(0,_.c)(tM,{systemId:"system-viewer1"});function tk(e){tO.send(e)}function tN(e){return(0,B.d4)(tO,t=>e(t.context))}function t$(){tk({type:"STYLE.SCROLL",currentScroll:tv()})}let tR={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var tD=n(1717);let tT={init:new Set,rendered:new Set},tz=function(e){J(tT.init,e)},tC=function(){K(tT.rendered)},tA=new Map,tL=(0,h.e)(0),tI=(0,V.mj)({types:{context:{},events:{},emitted:{}},actions:{updateInit:()=>void Array.from(tA,e=>{let t,[n,r]=e;(t=r.style.setProperty.bind(r.style))("will-change",null),t("animation",null),t("visibility","hidden")}),updateLoad:e=>{let t,{context:{fidx:n}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tA,e=>{var n;let r,[i,a]=e;return n=t.test(i),r=a.style.setProperty.bind(a.style),void(n?(r("will-change","opacity"),r("animation",`${eS} 250ms linear`),r("visibility",null)):(r("will-change",null),r("animation",null),r("visibility","hidden")))})},updateSwitch:e=>{let t,{context:{fidx:n,prevFidx:r}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tA,(e,i)=>{let[a,o]=e;return function(e,t,n,r){let i=e.style.setProperty.bind(e.style);if(t){let e=`${n?eS:"xxx-disappearing"} 250ms linear`;i("will-change","opacity"),i("animation",e),i("visibility",r?null:"hidden")}else i("will-change",null),i("animation",null),i("visibility",n?null:"hidden")}(o,null!==r,t.test(a),i===r||i===n)})}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:-1},initial:"Uninited",states:{Uninited:{on:{INIT:{actions:[(0,X.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return tL.set(t.fidx)},"updateInit"],target:"Loading"}}},Loading:{on:{IMAGE:{actions:(0,X.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}}),target:"Loaded"}}},Loaded:{always:[{guard:e=>{let{context:t}=e;return t.nfloors===t.blobs.size},actions:"updateLoad",target:"Animating"},"Loading"]},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,X.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return tL.set(t.fidx)},"updateSwitch"],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,tD.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,tD.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:[(0,X.a)({prevFidx:null}),"updateSwitch"],target:"Idle"}}}}}),tH=(0,_.c)(tI);tH.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,J(tR.lock,t)});let tP=new Worker(new URL(n.p+n.u(103),n.b),Object.assign({},{type:"module"},{type:void 0}));function tU(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,B.d4)(tH,t=>e(t.context))),i=(0,p.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,J(tR.selectDone,n))},[t]),a=(0,p.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,J(tR.lock,r))},[t,n]);return{fidx:t,prevFidx:n,fidxToOnAnimationEnd:i,fidxToOnClick:a,urls:r}}tP.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;tH.send({type:"IMAGE",fidx:e,blob:n})}}},tP.onerror=e=>{console.error("floors error",e)},tP.onmessageerror=e=>{console.error("floors messageerror",e)};var tF=n(5193),tW=n(3166);let tZ=`
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
`,tY=new Map;function tq(e,t,n){(0,p.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:tY.get(n)??null;if(null===r)return;let i=r.querySelector(`#${e}`)??null;if(null===i||null!==i.shadowRoot)return;let a=i.attachShadow({mode:"open"});tY.set(e,a),(0,tW.createRoot)(a).render(t)})(e,t,n),[e,n,t])}let tB={bus:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,w.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,w.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,w.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,w.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,w.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,w.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,w.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,w.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,w.jsx)("use",{x:"8.5",href:"#_person2"}),(0,w.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,w.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,w.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,w.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,w.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,w.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,w.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,w.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,w.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,children:[(0,w.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,w.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,w.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,w.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,w.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,w.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,w.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,w.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,w.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,w.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,w.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,w.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,children:[(0,w.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,w.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,w.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,w.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,w.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,w.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,w.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,w.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,w.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,w.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,w.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,w.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,w.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,w.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,w.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,w.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,w.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,w.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,w.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,w.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function tV(){return(0,w.jsx)("g",{className:"assets",children:(0,w.jsx)(tX,{})})}function tX(){return(0,w.jsx)("g",{className:"symbols",children:Object.entries(tB).map((e,t)=>{let[n,r]=e;return(0,w.jsx)(p.Fragment,{children:r({id:n})},t)})})}function t_(e){return e>.5?-1:+(e<.5)}function tG(e){return e<.3?1:e>.7?-1:0}function tK(e){return{open:e,animating:!1}}function tJ(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tQ(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function t0(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function t1(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function t5(e){let{open:t,animating:n}=e;return t||n}function t2(e,t,n,r){let i={x:t/2,y:n/2},a=t/20,o=a/2;function l(t){var n;let r,i;return n={x:e.h,y:e.v},r=t.x*n.x,i=t.y*n.y,{...t,x:r,y:i}}let s=e.th<Math.PI/4,c=0===e.v,u=0===e.h,d=l(D(i,-1)),g=l(c||u?$(D(i,-1),{x:r,y:r}):$(D(i,-1),{x:s?r:0,y:s?0:r})),[h,m]=u?[{x:-o,y:0},{x:o,y:0}]:c?[{x:0,y:-o},{x:0,y:o}]:s?[{x:0,y:0},l({x:0,y:a})]:[{x:0,y:0},l({x:a,y:0})],p=N(d,h),f=N(d,m);return{p:d,q:g,a:p,b:f}}let t3=e=>{let{x:t,y:n}=e;return`${eO(t)}, ${eO(n)}`},t4=`
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
  --timing: ${eb};
}
.animating.opened {
  --timing: ${ew};
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
`,t6=new Map,t7=new Map;function t8(e,t){let{open:n,animating:r}=t;Array.from(e,e=>{let[,t]=e;t.classList.add(n?"opened":"closed"),t.classList.remove(n?"closed":"opened"),e9(t,"animating",r)})}let t9=new Map,ne=new Map,nt=new Map,nn=new Map,nr=new Map;function ni(){var e;let t=(0,p.useRef)(null),n=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null);return et(t7,t,"balloon"),et(t9,t,"balloon"),et(ne,n,e="balloon"),et(nt,r,e),et(nn,i,e),(0,w.jsxs)("div",{ref:t,className:"balloon",children:[(0,w.jsxs)(no,{ref:n,children:[(0,w.jsx)("path",{ref:r,className:"bg"}),(0,w.jsx)("path",{ref:i,className:"fg"}),(0,w.jsx)("style",{children:nl})]}),(0,w.jsx)("style",{children:na})]})}let na=`
.balloon,
.balloon-svg {
  ${ei}
  ${ey}
  z-index: 10;
  will-change: opacity, transform;
}
`;function no(e){let{ref:t,children:n}=e;return(0,w.jsx)("svg",{ref:t,className:"balloon-svg",viewBox:"0 0 0 0",width:0,height:0,children:n})}let nl=`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`,ns={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},nc=()=>K(ns.zoomIn),nu=()=>K(ns.zoomOut),nd=()=>K(ns.rotate),ng=()=>K(ns.reset),nh=()=>K(ns.recenter),nm={start:new Set,end:new Set,endDone:new Set},np={multiStart:new Set,multiEnd:new Set,zoom:new Set},nf={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ny=(0,h.e)(!1),nx=e=>ny.set(()=>e),nv=(0,h.e)("panning");nv.subscribe(e=>{let t;return t=e,J(ee.mode,t)});let nw=(0,V.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>x.get().isMapRendered(),isUiRendered:()=>x.get().isUiRendered()},actions:{setRendered:(0,X.a)({rendered:!0}),emitGetScroll:(0,tD.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,X.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,i={type:"zoom",z:n,p:r??A(e.layout.container)};return{...e,animationReq:i}}(n,t)}),prepareHome:(0,X.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,X.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:A(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,X.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,X.a)(e=>{var t,n,r,i,a,o,l,s,c,u,d,g,h;let m,p,f,y,v,w,b,S,j,E,M,O,{context:k}=e;return t=k.animationReq,n=k.layout,E=null===t?null:"zoom"===t.type?(r=n,i=t.z,a=t.p,m=e1(r).inverse().transformPoint(a),p=1/(o=i,Math.pow(x.get().zoomFactor,o)),f=eK().scale(1/p,1/p),{type:"Zoom",svg:q(r.svg,p,m.x,m.y),svgScale:r.svgScale*p,q:{from:eK(),to:f,origin:a}}):"home"===t.type?(l=n,y=A((s=function(e){let{config:t,content:n}=e;return{config:t,...eJ(t),content:n}}(n)).config.inner),v=e1(l).transformPoint(y),w=s.svgScale/l.svgScale,S=(function(e,t){if(e instanceof DOMMatrixReadOnly)return eK(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return eK(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((b=A(l.container)).x-v.x,b.y-v.y).multiply((c=1/w,u=1/w,d=v.x,g=v.y,eK().scale(c,u,1,d,g,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:eK(),to:S,origin:null}}):(h=t.p,j=eK().rotate(90),{type:"Rotate",deg:90,q:{from:eK(),to:j,origin:h}}),M=k.layout,O=function(e,t){var n,r,i;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:I(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,i=t.svgScale,{...e,svg:r,svgScale:i}):e7(e,t.deg)}(k.layout,E),{...k,animation:E,prevLayout:M,layout:O}}),endZoom:(0,X.a)(e=>{var t,n;let r,i,{context:a}=e;return r=a.zoom*(null===(t=a.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),i=a.rotate+(null===(n=a.animationReq)||"rotate"!==n.type?0:n.deg),{...a,prevLayout:null,animation:null,zoom:r,rotate:i}}),endHome:(0,X.a)(e=>{let t,n,{context:r}=e;return t=A(r.origLayout.container),n=e7(e4(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,X.a)(e=>{let t,{context:n}=e;return t=A(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,X.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:e4(n,9)}}(n,t)}),resetScroll:(0,X.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tv(),n=e8(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,X.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,tD.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tv();return{type:"SEARCH.START",req:{psvg:e1(e8(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,tD.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=tv(),i=e8(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:i}}}(n,t)}),emitSwitch:(0,tD.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,tD.a)({type:"SWITCH.DONE"}),enterZooming:()=>nx(!0),exitZooming:()=>nx(!1),unlockScroll:()=>!!tm.has("S")&&(tm.delete("S"),!0)}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:e3,prevLayout:null,layout:e3,cursor:A(e3.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,_.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{actions:"emitZoomEnd",target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{guard:()=>tf(),actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{guard:()=>tf(),actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{guard:()=>tf(),target:"Recentering"},ZOOM:{guard:()=>tf(),actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{guard:()=>tf(),actions:"prepareHome",target:"Zooming"},ROTATE:{guard:()=>tf(),actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",entry:"enterZooming",exit:["exitZooming","unlockScroll"],states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Rendering2"},{target:"Rendering2"}]},Rendering2:{after:{50:{target:"Done"}}},Done:{entry:"clearAnimation",type:"final"}}}}}),nb=(0,_.c)(nw,{systemId:"system-viewer1"});function nS(e){nb.send(e)}nb.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,J(nm.start,t)}),nb.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?nb.send({type:"SEARCH.DONE"}):(t=r,J(nm.endDone,t),n=r.psvg,J(nf.open,n))}),nb.on("ZOOM.START",e=>{let t;return t=e,J(ee.zoomStart,t)}),nb.on("ZOOM.END",e=>{let t;return t=e,J(ee.zoomEnd,t)}),nb.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,J(tR.select,t)}),nb.on("SWITCH.DONE",()=>K(tR.unlock)),nb.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},J(ee.layout,t)}),nb.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.sync,t)}),nb.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.syncSync,t)}),nb.on("SCROLL.GET",()=>K(Q.get));let nj=!1,nE=!1;function nM(e){nj="locked"===e,nE="locked"===e}function nO(e){(0,p.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",nk),()=>{t.removeEventListener("wheel",nk)}},[e])}function nk(e){let t=e.currentTarget;nE&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function nN(e){return function(t,n){let r=t[n],i=e(r);return t[n]=null===i?r:i,t}}let n$=(0,V.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return t5(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return t5(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,X.a)({canceling:()=>!0}),endCancel:(0,X.a)({canceling:()=>!1}),open:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nN(tJ)(n,r)}}),close:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nN(t0)(n,r)}}),handle:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nN(n[r].open?tQ:t1)(n,r)}}),updateDetail:(0,X.a)({detail:(e,t)=>t,p:(e,t)=>{let{psvg:n,layout:r}=t;return e1(r).transformPoint(n)}}),updateBalloon:(0,X.a)({balloon:e=>{var t;let n,r,i,a,o,l,s,c,u,d,{context:{detail:g,p:h}}=e;return g&&h&&(t=g.layout,l=function(e,t){let{x:n,y:r}=t,i=e.width/e.height,a={x:n/e.width,y:r/e.height},o=i>1?t_(a.x):tG(a.x);return{h:o,v:i>1?tG(a.y):t_(a.y),th:Math.atan2(e.height,e.width)}}(t.container,h),s=t.container.width,r=50*(n=.01*Math.min(s,c=t.container.height)),i=50*n,a=10*n,o=r/100,d=t2(l,(u={bw:r,bh:i,lh:a,d:o,width:r+2*a+2*o,height:i+2*a+2*o}).bw,u.bh,u.lh),{_p:h,_hv:l,_W:s,_H:c,_size:u,_leg:d})}}),updateBalloonPaths:(0,X.a)({balloonPaths:e=>{let{context:{balloon:t}}=e;return t?._hv&&function(e,t){let{bw:n,bh:r,lh:i,d:a,width:o,height:l}=t,s=T(-o/2,-o/2,o,l),{body:c,leg:u}=function(e,t,n,r){let i={x:t/2,y:n/2},a=`
m${eO(-i.x)},${eO(-i.y)}
h${eO(t)}
v${eO(n)}
h${eO(-t)}
z
`,{p:o,q:l,a:s,b:c}=t2(e,t,n,r),u=$(l,s),d=$(c,l),g=$(o,c);return{body:a,leg:`
m${t3(s)}
l${t3(u)}
l${t3(d)}
l${t3(g)}
z
`}}(e,n,r,i);function d(e){return`M${eO(e)},${eO(e)} ${c} M${eO(e)},${eO(e)} ${u}`}return{viewBox:s,width:o,height:l,bg:d(a),fg:d(0)}}(t._hv,t._size)||void 0}}),updateHeaderStyle:e=>{let{context:t}=e;t8(t6,t.m.header)},updateBalloonStyle:e=>{let{context:t}=e;t.balloon&&function(e,t){let{_p:n,_hv:r,_size:i,_leg:a}=e,o=function(e,t,n,r,i){let{open:a,animating:o}=i;if(null!==e&&null!==t&&t5({open:a,animating:o})){let{width:t,height:i}=n,{a:l,b:s,timing:c,txa:u,txb:d}=function(e,t,n,r){let i=D(r,-1);if(t){let{a:t,b:r}=e?{a:0,b:1}:{a:1,b:0},a=e?{a:R,b:i}:{a:i,b:R},{a:o,b:l}={a:N(n,a.a),b:N(n,a.b)};return{a:t,b:r,timing:e?ew:eb,txa:o,txb:l}}{let{b:e}={a:0,b:1};return{a:null,b:e,timing:null,txa:null,txb:N(n,i)}}}(a,o,e,r.q),g=`${eO(-t/2)}px`,h=`${eO(-i/2)}px`,m=u&&`${eO(u.x)}px`,p=u&&`${eO(u.y)}px`;return{visibility:null,a:l,b:s,timing:c,pww:g,phh:h,txax:m,txay:p,txbx:d&&`${eO(d.x)}px`,txby:d&&`${eO(d.y)}px`}}return{visibility:"hidden",a:null,b:null,timing:null,pww:null,phh:null,txax:null,txay:null,txbx:null,txby:null}}(n,r,i,a,t);Array.from(t9,e=>{let[,t]=e;!function(e,t){let{visibility:n,a:r,b:i,timing:a,pww:o,phh:l,txax:s,txay:c,txbx:u,txby:d}=t,g=e.style.setProperty.bind(e.style);g("visibility",n),g("--balloon-pww",o),g("--balloon-phh",l),g("--a",null===r?null:r.toString()),g("--b",null===i?null:i.toString()),g("--timing",a),g("--balloon-tx-a-x",s),g("--balloon-tx-a-y",c),g("--balloon-tx-b-x",u),g("--balloon-tx-b-y",d)}(t,o)})}(t.balloon,t.m.detail),t.balloonPaths&&function(e){let{viewBox:t,width:n,height:r,bg:i,fg:a}=e;Array.from(ne,e=>{let[,i]=e;i.setAttribute("viewBox",H(t)),i.setAttribute("width",`${n}`),i.setAttribute("height",`${r}`)}),Array.from(nt,e=>{let[,t]=e;return t.setAttribute("d",i)}),Array.from(nn,e=>{let[,t]=e;return t.setAttribute("d",a)})}(t.balloonPaths)},updateDetailStyle:e=>{let{context:t}=e,n=t.m.detail;requestAnimationFrame(()=>{t8(t7,n),requestAnimationFrame(()=>(function(e){let{open:t,animating:n}=e;t||n||Array.from(nr,e=>{let[,t]=e;t.scroll(0,0)})})(n))})}}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,m:{header:tK(!0),detail:tK(!1)},animationEnded:{header:!0,detail:!0}}},on:{RENDERED:{actions:["updateHeaderStyle","updateDetailStyle","updateBalloonStyle"]}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:[{type:"updateDetail",params:e=>{let{event:{type:t,...n}}=e;return n}},"updateBalloon","updateBalloonPaths"],target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,_.n)("animationEnded")},{actions:(0,X.a)({animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,_.n)("isDetailVisible")},{target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,_.n)("animationEnded")},{actions:(0,X.a)({animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],exit:"endCancel",on:{DONE:[{guard:(0,_.n)("isHeaderVisible")},{guard:"isDetailVisible"},{target:"Closed"}]}},Closed:{entry:(0,tD.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},"updateHeaderStyle",(0,X.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,_.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},"updateBalloonStyle","updateDetailStyle",(0,X.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,_.r)({type:"DONE"})]}}}}}),nR=(0,_.c)(n$);function nD(e){nR.send(e)}function nT(){let e=(0,p.useRef)(null);nO(e),et(t9,e,"detail"),et(t7,e,"detail"),et(nr,e,"detail");let t=(0,B.d4)(nR,e=>e.context.detail),n=v();return(0,w.jsxs)("div",{ref:e,className:"detail",onAnimationEnd:()=>nD({type:"DETAIL.ANIMATION.END"}),children:[n.RenderInfo&&t&&(0,w.jsx)(n.RenderInfo,{info:t.info}),(0,w.jsx)("style",{children:nz})]})}nR.on("CLOSE.DONE",()=>K(nf.closeDone));let nz=`
.detail {
  ${ei}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${ex}
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
    ${ep}
    margin: 1.5em;
    text-align: center;
  }
  & p {
    ${ep}
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
`;function nC(){return tq("detail",(0,w.jsx)(nA,{}),"ui"),(0,w.jsx)("div",{id:"detail"})}function nA(){return(0,w.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,w.jsx)(ni,{}),(0,w.jsx)(nT,{}),(0,w.jsx)("style",{children:t4}),(0,w.jsx)(nL,{})]})}function nL(){return(0,w.jsx)("svg",{id:"ui-svg-defs",children:(0,w.jsx)("defs",{children:(0,w.jsx)(tV,{})})})}function nI(){return tq("footer",(0,w.jsx)(nH,{}),"ui"),(0,w.jsx)("div",{id:"footer"})}function nH(){let e=(0,p.useRef)(null);et(t6,e,"footer");let t=v();return(0,w.jsxs)("div",{ref:e,className:"ui-content footer",children:[(0,w.jsx)("p",{children:(0,w.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:t.copyright})}),(0,w.jsx)("style",{children:nP})]})}let nP=`
.footer {
  ${eo}
  ${eh}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${ep}
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
      --timing: ${eb};
    }
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${ew};
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
`;function nU(){return tq("guides",(0,w.jsx)(nF,{}),"ui"),(0,w.jsx)("div",{id:"guides"})}function nF(){let e,t=(0,p.useRef)(null);return et(t6,t,"guides"),et(tl,t,"guides"),(e=v(),(e.uiConfig?.showGuides??!0)&&!e.mapCoord.matrix.isIdentity)?(0,w.jsxs)("div",{ref:t,className:"ui-content guides",children:[(0,w.jsx)("svg",{className:"guides",children:(0,w.jsx)(e$,{})}),(0,w.jsx)(eR,{}),(0,w.jsx)(eT,{}),(0,w.jsx)("style",{children:nW})]}):(0,w.jsx)(w.Fragment,{})}let nW=`
.guides {
  ${ei}
  ${eg}
  ${ey}
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
  --timing: ${eb};
}
.guides.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ew};
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
  ${ep}
}
@keyframes xxx-measure {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;function nZ(){let e=(0,p.useRef)(null),{fidx:t,fidxToOnClick:n}=tU(),r=v();return et(tp,e,"floors"),void 0===r.floorsConfig||r.floorsConfig.floors.length<2?(0,w.jsx)(w.Fragment,{}):(0,w.jsxs)("div",{ref:e,className:"floors",children:[(0,w.jsx)("ul",{className:"floor-list",children:r.floorsConfig.floors.map((e,r)=>{let{name:i}=e;return(0,w.jsx)("li",{className:`floor-item ${nV(r===t)}`,onClick:n(r),children:i},r)})}),(0,w.jsx)("style",{children:nY})]})}let nY=`
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
  ${ev}
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
`;function nq(){let{fidx:e}=tU(),t=v().floorsConfig;return void 0===t||t.floors.length<2?(0,w.jsx)(w.Fragment,{}):(0,w.jsxs)("div",{children:[t.floors.map((t,n)=>(0,w.jsx)("h2",{className:`floor-name ${nV(n===e)}`,children:t.name},n)),(0,w.jsx)("style",{children:nB})]})}let nB=`
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
`;function nV(e){return e?"selected":"unselected"}function nX(){return tq("header",(0,w.jsx)(n_,{}),"ui"),(0,w.jsx)("div",{id:"header"})}function n_(){let e=(0,p.useRef)(null);(0,p.useEffect)(()=>{requestAnimationFrame(()=>nD({type:"RENDERED"}))},[]),et(t6,e,"header");let t=v();return(0,w.jsxs)("div",{ref:e,className:"ui-content header",onAnimationEnd:()=>nD({type:"HEADER.ANIMATION.END"}),children:[(0,w.jsx)("h1",{className:"title",onClick:()=>ng(),children:t.title}),(0,w.jsx)(nq,{}),(0,w.jsx)("style",{children:nG})]})}let nG=`
.header {
  ${ei}
  ${eh}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}
.header h1,
.header h2,
.header p {
  ${ep}
  ${ex}
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
  --timing: ${eb};
}
.header.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ew};
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
`;function nK(){return tq("left",(0,w.jsx)(nJ,{}),"ui"),(0,w.jsx)("div",{id:"left"})}function nJ(){let e=(0,p.useRef)(null);return et(t6,e,"left"),(0,w.jsxs)("div",{ref:e,className:"ui-content left bottom",children:[(0,w.jsx)(nZ,{}),(0,w.jsx)("style",{children:nQ})]})}let nQ=`
.left {
  ${ei}
  ${em}
  padding: 0.4em;
  font-size: smaller;
  ${ey}
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
  --timing: ${eb};
}
.left.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ew};
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
`;function n0(){return(0,w.jsx)("div",{className:"button-item fullscreen",onClick:()=>K(ns.fullscreen),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n1})})})}let n1=`
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
`;function n5(){return(0,w.jsx)("div",{className:"button-item home",onClick:()=>ng(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n2})})})}let n2=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function n3(){return v().mapCoord.matrix.isIdentity?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)("div",{className:"button-item position",onClick:()=>K(ns.position),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n7})})})}let n4=3*Math.sqrt(2),n6=n4+6,n7=`
M 0,0
m 0,${n6/2}
l -3,-3
a ${n4},${n4} 0,1,1 6,0
z
m 0,${-n6+n4+n4/2}
a ${n4/2},${n4/2} 0,1,0 0,${-n4}
a ${n4/2},${n4/2} 0,1,0 0,${n4}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function n8(){return(0,w.jsx)("div",{className:"button-item recenter",onClick:()=>nh(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n9})})})}let n9=`
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
`;function re(){return(0,w.jsx)("div",{className:"button-item rotate",onClick:()=>nd(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:rt})})})}let rt=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function rn(){return(0,w.jsx)("div",{className:"button-item zoom-in",onClick:()=>nc(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:rr})})})}let rr=`
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
`;function ri(){return(0,w.jsx)("div",{className:"button-item zoom-out",onClick:()=>nu(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:ra})})})}let ra=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function ro(){return tq("right",(0,w.jsx)(rl,{}),"ui"),(0,w.jsx)("div",{id:"right"})}function rl(){let e=(0,p.useRef)(null);return et(t6,e,"right"),(0,w.jsxs)("div",{ref:e,className:"ui-content right bottom",children:[(0,w.jsx)(rc,{}),(0,w.jsx)("style",{children:rs})]})}let rs=`
.right {
  ${ea}
  ${em}
  padding: 0.4em;
  font-size: smaller;
  ${ey}
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
  --timing: ${eb};
}
.right.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${ew};
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
`;function rc(){let e=(0,p.useRef)(null);return et(tp,e,"buttons"),(0,w.jsxs)("div",{ref:e,className:"buttons",children:[(0,w.jsx)(n3,{}),(0,w.jsx)(n5,{}),(0,w.jsx)(n0,{}),(0,w.jsx)(n8,{}),(0,w.jsx)(re,{}),(0,w.jsx)(ri,{}),(0,w.jsx)(rn,{}),(0,w.jsx)("style",{children:ru})]})}let ru=`
.buttons {
  font-size: large;
  margin: 0;
  ${eh}
}
.button.locked > .button-item {
  opacity: 0.5;
  pointer-events: none;
}
.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${ex}
  cursor: default;
  ${ev}
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
`;function rd(e){ny.get()&&e.preventDefault()}function rg(e){(0,p.useEffect)(()=>{let t=e.current;return t&&t.addEventListener("touchmove",rd),()=>{t&&t.removeEventListener("touchmove",rd)}},[e])}function rh(){return tq("screen",(0,w.jsx)(rm,{}),"ui"),(0,w.jsx)("div",{id:"screen"})}function rm(){let e=(0,p.useRef)(null);return et(t7,e,"screen"),rg(e),nO(e),(0,w.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>K(nf.close),children:(0,w.jsx)("style",{children:rp})})}let rp=`
.screen {
  ${ei}
  ${eg}
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
  --timing: ${eb};
}
.screen.animating.opened {
  --a: 0;
  --b: 0.3;
  --timing: ${ew};
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
`;function rf(){return tq("ui",(0,w.jsx)(ry,{})),(0,w.jsx)("div",{id:"ui"})}function ry(){let e=(0,p.useRef)(null);return et(tw,e,"ui"),(0,w.jsxs)("div",{ref:e,className:"ui",children:[(0,w.jsx)(rh,{}),(0,w.jsx)(nX,{}),(0,w.jsx)(nI,{}),(0,w.jsx)(nK,{}),(0,w.jsx)(ro,{}),(0,w.jsx)(nU,{}),(0,w.jsx)(nC,{}),(0,w.jsx)("style",{children:tS})]})}function rx(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function rv(){nh()}let rw=new Map;function rb(e,t){let n=rw.get(t);if(n)return function(e,t){let n=e.scrollLeft,r=e.scrollTop,i=e.scrollWidth,a=e.scrollHeight;if(null===n)return!1;let o=i-t.width,l=a-t.height;if(Math.abs(o)>1||Math.abs(l)>1)return console.log(`scroll: target ${o>0?"larger":"smaller"} than expected: target=[${i}, ${a}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),r!==c&&(e.scrollTop=c);let u=e.scrollLeft;if(Math.abs(u-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${u}`),!1;let d=e.scrollTop;return!(Math.abs(d-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${d}`),!1)}(n,e)}var rS=n(8077),rj=n(990),rE=n(4465),rM=n(5909);let rO=(e,t)=>(function e(t,n,r){let i=Math.min(t.length,n.length),a=t[r],o=n[r];if(r>=i||a===eE||o===eE)return rS.pH(t.length,n.length);let l=rS.pH(a.x,o.x)||rS.pH(a.y,o.y);return 0===l?e(t,n,r+1):l})(e,t,0);function rk(e){return(0,M.Fs)(e.values(),rj.Ts,rj.di(rO),rj.x1(e=>0===e.length?rM.xT:rM.Py(e[0])))}function rN(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:D(t,1/e.length)}function r$(e){return new Map((0,M.Fs)(e.changedTouches,e=>rj.O3.from(e),rj.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let rR=(0,V.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,X.a)({touches:e=>{var t,n,r;let i,a,o,l,s,c,u,d,g,{context:{touches:h},event:m}=e;return"TOUCH.START"===m.type?(t=m.ev,n=h.vecs,r=r$(t),o=rN(a=rk(i=(0,M.Fs)([...n.entries(),...r.entries()],rj.TS(new Map,(e,t)=>{let[n,r]=t,i=rE.fromUndefinedOr(e.get(n)),a=rE.isSome(i)?[...i.value,...r]:r;return new Map(e).set(n,a)})))),s=2!==a.length?null:.5>Math.abs((l=$(a[0],a[1])).y/l.x),{...h,vecs:i,points:a,cursor:o,horizontal:s}):"TOUCH.MOVE"===m.type?function(e,t){var n,r,i,a;let o,l=r$(t),s=new Map((0,M.Fs)(e.vecs.entries(),rj.Ts,rj.Tj(e=>{let t,[n,r]=e;return[n,(t=rE.fromUndefinedOr(l.get(n)),rE.isSome(t)?[...t.value,...r]:r)]}))),c=rk(s),u=rN(c),[d,g]=c;if(null===u||d===eE||g===eE)return{...e,vecs:s,points:c,cursor:u};let h=(n=e.dists,r=Math.sqrt((i=d,a=g,Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2))),o=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||o>0?[r,...n]:n),m=function(e){let[t,n,r,i]=e;return t===eE||n===eE||r===eE||i===eE?null:t<n&&n<r&&r<i?-1:t>n&&n>r&&r>i?1:null}(h);return{vecs:s,points:c,cursor:u,dists:h,z:m,horizontal:e.horizontal}}(h,m.ev):"TOUCH.END"===m.type?(c=r$(m.ev),g=rN(d=rk(u=new Map((0,M.Fs)(h.vecs.entries(),rj.Ts,rj.x1(e=>{let[t,n]=e;return c.has(t)?rM.xT:rM.Py([t,n])}))))),{vecs:u,points:d,cursor:g,dists:0===u.size?[]:h.dists,z:0===u.size?null:h.z,horizontal:h.horizontal}):h}}),raiseOp:(0,_.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,X.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,X.a)({mode:"pan"}),enterPinch:(0,X.a)({mode:"pinch"}),emitMulti:(0,tD.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,tD.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,_.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,_.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,_.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),rD=(0,_.c)(rR),rT=!1;function rz(e){rD.send({type:"TOUCH.START",ev:e})}function rC(e){rD.send({type:"TOUCH.MOVE",ev:e})}function rA(e){rD.send({type:"TOUCH.END",ev:e})}function rL(){rD.send({type:"CANCEL"})}function rI(e){nj||nS({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function rH(e){if(null!==e){let t,n,r;(t=th.get("S"))&&clearTimeout(t),n=setTimeout(()=>{th.delete("S"),Array.from(tp,e=>{let[,t]=e;return e9(t,"locked",!1)})},200),th.set("S",n),Array.from(tp,e=>{let[,t]=e;return e9(t,"locked",!0)}),r=e,J(Q.eventTick,r)}}function rP(e){let t=(0,p.useRef)(null);return et(t7,t,"container"),rg(t),et(ta,t,"container"),et(tw,t,"container"),et(rw,t,"container"),(0,w.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:rz,onTouchMove:rC,onTouchEnd:rA,onClick:rI,onContextMenu:rv,onScroll:rH,onAnimationEnd:e=>{var t;t={type:"ANIMATION.END",ev:e},t.ev?.stopPropagation(),nS(t),K(ee.animationEnd)},children:[e.children,(0,w.jsx)("style",{children:rU})]})}rD.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(rT=!0,K(np.multiStart)):(K(np.multiEnd),rT=!1)}),rD.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,i=n.z;null!==r&&null!==i&&(t={z:i>0?1:-1,p:r},J(np.zoom,t))});let rU=`
.container {
  ${ei}
  ${eg}

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
  ${ei}
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
  animation: xxx-appearing 2s ${ew};
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
`;function rF(){return null!==document.querySelector(".container")}var rW=n(3071);async function rZ(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let rY=(0,V.mj)({types:{events:{},emitted:{}},actors:{api:(0,rW.Sx)(()=>rZ(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,X.a)({position:e=>{let{event:t}=e;return t.output}}),(0,tD.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,X.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rq=(0,_.c)(rY);function rB(e){let[t,n]=e;return n.map(e=>[t,e])}function rV(e){return e.reduce(function(e,t){let[n,r]=t,i=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,i]])},new Map)}function rX(e){return rV(Array.from(e).flatMap(rB).map(e=>{let[t,n]=e;return[n,t]}))}let r_=(0,h.e)(null),rG=(0,h.e)(null),rK=(0,h.e)(null),rJ=(0,h.e)(null),rQ=(0,V.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,tD.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tD.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),r0=(0,_.c)(rQ);function r1(e){r0.send(e)}r0.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=x.get().mapCoord.matrix.inverse().transformPoint(t),r=tL.get();r5.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),r0.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,J(nm.end,t)});let r5=new Worker(new URL(n.p+n.u(559),n.b),Object.assign({},{type:"module"},{type:void 0}));r5.onmessage=async e=>{let t=e.data;switch(t.type){case"INIT.DONE":return r1({type:"INIT.DONE"});case"SEARCH.DONE":var n;let r;return(n=t.res,r=x.get(),Promise.resolve((e=>{let t=x.get().searchNames,n=(()=>{let e,t=x.get();if(t.getInfoByName)return t.getInfoByName;let n=rJ.get();if(null!==n)return n;let r=(e=t.searchInfos??[],t=>(e=>{let t=rK.get();if(null!==t)return t;let n=new Map(e.map(e=>[e.name,e.info]));return rK.set(n),n})(e??[]).get(t)||null);return rJ.set(r),r})();if(void 0===t||void 0===n)return null;let r=(e=>{let t=rG.get();if(null!==t)return t;let n=rX(e);return rG.set(n),n})((e=>{let t=r_.get();if(null!==t)return t;let n=e.map(e=>[e.name,e.addresses]);return r_.set(n),n})(t)).get(e.address);return void 0===r||r.size<1?null:n(Array.from(r)[0])})(n)).then(e=>null!==e?e:r.getSearchInfo(n,r.mapMap,r.osmSearchEntries)).then(e=>null===e?(console.log("info not found!",n),r1({type:"SEARCH.DONE",res:null})):r1({type:"SEARCH.DONE",res:{psvg:r.mapCoord.matrix.transformPoint(n.floorPos.coord),fidx:n.floorPos.fidx,info:e}}))).catch(e=>console.log("SEARCH.DONE",e));case"SEARCH.ERROR":return console.log("search error!",t.error),r1({type:"SEARCH.DONE",res:null})}},r5.onerror=e=>{console.error("search error",e)},r5.onmessageerror=e=>{console.error("search messageerror",e)};var r2=n(5318);let r3=Math.round,r4=document.createElement("div"),r6=new Map,r7=()=>{let e=x.get();var t=e.cartoConfig?.backgroundColor??e.backgroundColor??"darkgray";let n=r6.get(t);if(n)return n;r4.style.color=t,document.body.appendChild(r4);let r=getComputedStyle(r4).color;return document.body.removeChild(r4),r6.set(t,r),r},r8=new Map,r9=new Map;function ie(e){let t=(()=>{let e=r8.get("color");if(e)return e;let t=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:r7()});return t.parentNode||document.head.appendChild(t),r8.set("color",t),t})(),n={color:t.getAttribute("content")||r7()},{p:r,q:i}=(()=>{var e;let t=r7(),n=r9.get(t);if(n)return{p:t,q:n};let r=function(e){let{r:t,g:n,b:r}=e;return`rgb(${r3(t)}, ${r3(n)}, ${r3(r)})`}({r:(e=function(e){let t=e.match(/\d+/g);if(!t||3!==t.length)throw Error("invalid color!");let n=Number(t[0]);return{r:n,g:Number(t[1]),b:Number(t[2])}}(t)).r/2,g:e.g/2,b:e.b/2});return r9.set(t,r),{p:t,q:r}})(),a=e?i:r;(0,r2.i)(n,{color:a,duration:400,ease:"outQuad",onRender:()=>t.setAttribute("content",n.color)}),(0,r2.i)(document.body,{backgroundColor:a,duration:400,ease:"outQuad"}),(0,r2.i)(".container",{opacity:e?.5:1,duration:400,ease:"outQuad"})}function it(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let ir=(0,V.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==it(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,tD.a)({type:"RESET"}),recenter:(0,tD.a)({type:"RECENTER"}),rotate:(0,tD.a)({type:"ROTATE"}),zoom:(0,tD.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,tD.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,tD.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,X.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||i}})(t.mod,n.key)}}),handleUp:(0,X.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&i}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:it(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),ii=(0,_.c)(ir);ii.on("RESET",ng),ii.on("RECENTER",nh),ii.on("ROTATE",nd),ii.on("ZOOM.IN",nc),ii.on("ZOOM.OUT",nu),ii.on("FLOOR.LEVEL.UP",()=>K(tR.levelUp)),ii.on("FLOOR.LEVEL.DOWN",()=>K(tR.levelDown));let ia=(0,V.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:z,next:z,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,X.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,_.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!C(t.prev,t.next)},actions:[(0,X.a)({waited:0}),(0,tD.a)(e=>{var t,n,r,i;let a,o,{context:l}=e,s=x.get();return{type:"LAYOUT",layout:(t=s.fontSize,n=l.next,a=A((i={config:r=function(e,t,n,r){var i;let a,o,l,s,{outer:c,scale:u}=(i=r??n,a=t.width/t.height,s=(l=a>(o=i.width/i.height))?e5(t,o):e2(t,o),{outer:s,inner:l?e5(i,a):e2(i,a),scale:l?i.height/t.height:i.width/t.width,rO:a,rI:o,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:u}}(t,n,s.origViewBox,s.origBoundingBox),...eJ(r)}).scroll),o=i.container.width/i.container.height,e6(i,o<1?1/o:1,o<1?1:+o,a)),force:!l.first}}),(0,X.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,X.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,_.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return C(t,tE.get().container)},actions:(0,X.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),io=(0,_.c)(ia);io.on("LAYOUT",e=>{let t;return t=e,J(ee.resize,t)}),window.addEventListener("resize",()=>{io.send({type:"RESIZE"})});let il=(0,V.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,X.a)({ticked:!1}),set:(0,X.a)({ticked:!0}),expire:(0,tD.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),is=(0,V.mj)({types:{},actions:{getScroll:(0,X.a)({scroll:e=>{let{context:t}=e;return function(e){let t=rw.get(e);if(t)return T(t.scrollLeft,t.scrollTop,t.scrollWidth,t.scrollHeight)}("container")??t.scroll}}),syncScroll:(e,t)=>{let{pos:n}=t;return rb(n,"container")}},actors:{syncScrollLogic:(0,rW.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!rb(t,"container"))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,tD.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,X.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,tD.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,X.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),ic=(0,_.c)(is,{systemId:"system-scroll1"});function iu(e){ic.send(e)}ic.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.getDone,t)}),ic.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.syncSyncDone,t)});let id=(g=()=>K(Q.eventExpire),u=il.provide({delays:{DURATION:500}}),(d=(0,_.c)(u)).on("EXPIRE",g),d.start(),{tick:function(){d.send({type:"TICK"})}}),ig=(0,h.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function ih(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),ig.trigger.set({names:t}))}async function im(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let ip=`
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
`,iy=`
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
  ${ei}
  ${eg}
  ${eu}
  ${ed}
  ${ef}
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
${ip}
`,ix=function(){let e,t=v(),n=t.cartoConfig?.backgroundColor??t.backgroundColor??"darkgray",r={data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig};return e=tN(e=>e.rendered),(0,p.useEffect)(()=>{requestAnimationFrame(()=>tC())},[e]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(rP,{...r,children:t.renderMap(r)}),(0,w.jsx)(rf,{}),(0,w.jsxs)("style",{children:[iy,`body { background-color: ${n}; }`]})]})};function iv(e){return tq(`map-floors-html-labels-${e.fidx}`,(0,w.jsx)(iw,{...e}),"map-floors-html"),(0,w.jsx)("div",{id:`map-floors-html-labels-${e.fidx}`})}function iw(e){let{labels:t}=e;return(0,w.jsxs)("div",{className:"labels",children:[t?.map((e,t)=>(0,w.jsx)(p.Fragment,{children:(0,w.jsx)(ib,{_text:e})},t)),(0,w.jsx)("style",{children:iS})]})}function ib(e){let{_text:t}=e;return(0,w.jsx)("div",{className:"label",style:{"--x":(t.attrs?.x||0)+"px","--y":(t.attrs?.y||0)+"px","--rotate":(t.attrs?.rotate||0)+"deg","--scale2":(t.attrs?.scale2||1)+"","--scale1":(t.attrs?.scale1||1)+""},children:t.children?.map((e,t)=>(0,w.jsx)("p",{children:e.text??""},t))})}let iS=`
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
`;function ij(e){let t=(0,p.useRef)(null);return et(tn,t,"map-floors-html-content"),tq("map-floors-html",(0,w.jsx)(iE,{...e})),(0,w.jsx)("div",{ref:t,id:"map-floors-html",className:"content"})}function iE(e){return(0,w.jsxs)("div",{className:"map-floors-html-content",children:[(0,w.jsx)(iM,{...e}),(0,w.jsx)("style",{children:iO})]})}function iM(e){let{floors:t}=e,n=(0,p.useRef)(null);return et(tn,n,"map-floors-html"),(0,w.jsx)("div",{ref:n,className:"map-floors-html",children:t?.floors.map((e,n)=>(0,w.jsx)(p.Fragment,{children:(0,w.jsx)(ik,{fidx:n,floor:e,labelsMap:t?.labelsMap})},n))})}let iO=`
.map-floors-html {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
  transform: var(--layout-svg-to-content-matrix) !important;
  transform-origin: 0% 0% !important;
}
`;function ik(e){let{fidx:t,floor:n,labelsMap:r}=e,i=(0,p.useRef)(null);return et(tA,i,`html-${t}`),(0,w.jsx)("div",{ref:i,className:`floor fidx-${t}`,children:(0,w.jsx)(iv,{fidx:t,labels:n.labels??function(e,t){if(void 0===e)return;let n=Array.from(iN.values());if(1===n.length)return n[0].get(t);let r=e instanceof Map?e:new Map(e instanceof Array?e:Object.entries(e));return iN.add(r),r.get(t)}(r,n.name.toLowerCase())})})}let iN=new Set;function i$(e){let{floors:t,data:{origViewBox:n}}=e,r=(0,p.useRef)(null);et(tn,r,"map-floors-svg");let i=tU();return(0,w.jsxs)("div",{ref:r,className:"content map-floors-svg",children:[(0,w.jsx)(iD,{children:t?.floors.map((e,t)=>(0,w.jsx)(p.Fragment,{children:(0,w.jsx)(iT,{fidx:t,origViewBox:n,ctx:i})},t))}),(0,w.jsx)("style",{children:iR})]})}let iR=`
svg.content-svg {
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
${ej}
`;function iD(e){let t=(0,p.useRef)(null),{viewBox:n}=function(){let{svg:e}=tN(e=>e.layout);return{viewBox:H(e)}}();return et(tn,t,"floors-svg"),(0,w.jsx)("svg",{ref:t,id:"map-svg-floors",className:"content-svg",viewBox:n,children:e.children})}function iT(e){let{fidx:t,origViewBox:n,ctx:{fidxToOnAnimationEnd:r,urls:i}}=e,a=(0,p.useRef)(null);return et(tA,a,`svg-${t}`),(0,w.jsx)("g",{ref:a,className:`floor fidx-${t}`,onAnimationEnd:r(t),children:(0,w.jsx)(iz,{fidx:t,origViewBox:n,url:i.get(t)})})}function iz(e){let{origViewBox:t,url:n}=e;return(0,w.jsx)("image",{x:t.x,y:t.y,width:t.width,height:t.height,href:n})}var iC=JSON.parse('{"Main":{"contentId":"g3"}}');let iA={},iL=Object.keys(iC).map(e=>({name:e,href:n(4303)(`./floor-${e}.svg`),labels:iA?.[e]??void 0})),iI=[...Object.entries(JSON.parse('{"AMain-Content-(ViewBox)":{"x":0,"y":0}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})],iH=Object.values({Main:{}}).flatMap(function(e){return Object.entries(e)});rV(Array.from(iH).flatMap(rB));let iP=rX(iH);var iU=JSON.parse('{"x":358.49521,"y":48.593903,"width":1165.437,"height":1019.562}');!function(e){let t,n;tT.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;tH.send({type:"INIT",nfloors:t,fidx:n}),tP.postMessage({type:"INIT",cfg:e.floorsConfig,base:e.base})}}),tR.select.add(e=>tH.send({type:"SELECT",fidx:e})),tR.levelUp.add(()=>tH.send({type:"LEVEL.UP"})),tR.levelDown.add(()=>tH.send({type:"LEVEL.DOWN"})),tR.selectDone.add(e=>tH.send({type:"SELECT.DONE",fidx:e})),ns.fullscreen.add(im),tT.init.add(ih),ns.position.add(()=>{var e;return e={type:"GET"},void rq.send(e)}),Q.eventTick.add(tx),Q.eventTick.add(id.tick),Q.get.add(()=>iu({type:"GET"})),Q.sync.add(e=>iu({type:"SYNC",pos:e})),Q.syncSync.add(e=>iu({type:"SYNCSYNC",pos:e})),tT.init.add(e=>e.searchAddresses?Promise.resolve(e.searchAddresses).then(e=>{let t=e.map(e=>({...e,pos:e.floorPos}));r5.postMessage({type:"INIT",entries:t})}):e.getSearchEntries?Promise.resolve(e.getSearchEntries(e)).then(e=>{r5.postMessage({type:"INIT",entries:e})}):void 0),nm.start.add(function(e){r0.send({type:"SEARCH",req:e})}),ee.layout.add(function(e){let{layout:t,force:n}=e;tk({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>t$())}),ee.zoomStart.add(function(e){tk({type:"STYLE.ZOOM",...e}),tk({type:"STYLE.ANIMATION",animation:e.q})}),ee.zoomEnd.add(function(e){tk({type:"STYLE.ZOOM",zoom:e.zoom}),tk({type:"STYLE.ANIMATION",animation:e.q})}),ee.animationEnd.add(function(){tk({type:"STYLE.ANIMATION.END"})}),ee.mode.add(function(e){tk({type:"STYLE.MODE",mode:e})}),Q.eventExpire.add(t$),ns.reset.add(rL),ns.fullscreen.add(rL),ns.position.add(rL),ns.recenter.add(rL),ns.zoomOut.add(rL),ns.zoomIn.add(rL),nm.endDone.add(e=>nR.send({type:"DETAIL",...e})),nf.open.add(()=>{let e;return e=!0,J(nf.openDone,e)}),nf.openDone.add(e=>nR.send({type:e?"OPEN":"CANCEL"})),nf.close.add(()=>nR.send({type:"CANCEL"})),tR.lock.add(e=>nS({type:"SWITCH",fidx:e})),tR.selectDone.add(()=>nS({type:"SWITCH.DONE"})),nm.end.add(e=>nb.send({type:"SEARCH.END",res:e})),nf.open.add(()=>nv.set("locked")),nf.closeDone.add(()=>nS({type:"SEARCH.DONE"})),nf.closeDone.add(()=>nv.set("panning")),Q.getDone.add(e=>{null!==e&&nS({type:"SCROLL.GET.DONE",scroll:e})}),Q.syncSyncDone.add(e=>{null!==e&&nS({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),ee.resize.add(e=>{let{layout:t,force:n}=e;return nS({type:"RESIZE",layout:t,force:n})}),ee.mode.add(nM),ee.zoomStart.add(()=>{nE=!0}),ee.zoomEnd.add(()=>{nE=!1}),ns.reset.add(()=>nS({type:"HOME"})),ns.recenter.add(()=>nS({type:"RECENTER"})),ns.rotate.add(()=>nS({type:"ROTATE"})),ns.zoomOut.add(()=>nS({type:"ZOOM",z:-1,p:null})),ns.zoomIn.add(()=>nS({type:"ZOOM",z:1,p:null})),np.multiStart.add(()=>K(Q.get)),np.multiStart.add(()=>nv.set("touching")),np.multiEnd.add(()=>nv.set("panning")),np.zoom.add(e=>{let{z:t,p:n}=e;return nS({type:"ZOOM",z:t>0?1:-1,p:n})}),tT.rendered.add(()=>nS({type:"RENDERED"})),tH.start(),ii.start(),rq.start(),io.start(),ic.start(),r0.start(),tO.start(),nf.open.add(()=>ie(!0)),nf.close.add(()=>ie(!1)),rD.start(),nR.start(),nb.start();let r=(n={origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:rF,isUiRendered:rx,...e},x.set(e=>({...e,...n})),{...x.get(),origViewBox:t,...e});tz(r);let i=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.6.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),i.get("info")){let e=x.get(),t=document.getElementById(e.root);if(null===t)throw Error("#root not found!");(0,tW.createRoot)(t).render((0,w.jsx)(p.StrictMode,{children:(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:"svgmapviewer"}),(0,w.jsx)("h2",{children:r.title}),(0,w.jsx)("div",{className:"info",children:(0,w.jsx)(tF.h,{className:"qrcode",marginSize:6,value:document.location.origin+document.location.pathname,width:"60vmin",height:"60vmin"})}),(0,w.jsx)("div",{children:(0,w.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,w.jsx)("style",{children:tZ})]})}))}else{let e=document.getElementById(r.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||nE)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(nE){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!rT)return;e.preventDefault()},document.title=r.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void ii.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void ii.send(t)},(0,tW.createRoot)(e).render((0,w.jsx)(p.StrictMode,{children:(0,w.jsx)(ix,{})}))}}({renderMap:function(e){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i$,{...e}),(0,w.jsx)(ij,{...e})]})},isMapRendered:function(){return!0},...{root:"root",title:"Yanaka Cemestery",backgroundColor:"white",origViewBox:JSON.parse('{"x":0,"y":0,"width":1587.4,"height":1122.52}'),origBoundingBox:iU,zoomFactor:2,floorsConfig:{floors:iL,initialFidx:0},...{getSearchEntries:function(){return iI.map(e=>{let[t,n]=e;return{address:t,floorPos:n}})},getSearchInfo:function(e){let t=iP.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},RenderInfo:function(e){return(0,w.jsx)("p",{children:e.info.title})}}}})}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,o),n.exports}o.m=i,o.d=(e,t,n)=>{var r=(t,n)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[n]:t[r]})};r(t,"get"),r(n,"value")},o.u=e=>"static/js/async/"+e+"."+({103:"6718ec5ff5",559:"168c1dc515"})[e]+".js",o.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],o.O=(t,n,r,i)=>{if(n){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,r,i];return}for(var l=1/0,a=0;a<e.length;a++){for(var[n,r,i]=e[a],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(o.O).every(e=>o.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(a--,1);var u=r();void 0!==u&&(t=u)}}return t},o.p="/demos/YanakaCemetery/",o.b=document.baseURI||self.location.href,t={410:0},o.O.j=e=>0===t[e],n=(e,n)=>{var r,i,[a,l,s]=n,c=0;if(a.some(e=>0!==t[e])){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)var u=s(o)}for(e&&e(n);c<a.length;c++)i=a[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=o.O(void 0,["783","460","667"],()=>o(3031));l=o.O(l)})();