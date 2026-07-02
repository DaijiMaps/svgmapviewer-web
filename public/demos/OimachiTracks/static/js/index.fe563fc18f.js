(()=>{var t,e,n,i,o={4303(t,e,n){var i={"./floor-1F.svg":"5901","./floor-2F.svg":"1440","./floor-3F.svg":"71","./floor-4F.svg":"3514","./floor-5F.svg":"3993"};function o(t){return n(r(t))}function r(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=()=>Object.keys(i),o.resolve=r,t.exports=o,o.id=4303},5901(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-1F.74bbc0ddb4.svg"},1440(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-2F.7517a183f2.svg"},71(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-3F.8b612a1a39.svg"},3514(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-4F.45b826933a.svg"},3993(t,e,n){"use strict";t.exports=n.p+"static/svg/floor-5F.85a2c3e38e.svg"},9965(t,e,n){"use strict";let i,o,r,a,l,s,d,c,p;var u,h=n(376),x=n(8783),g=n(5906);let f={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let y={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:f,internals:f,origin:f,measures:f,viewbox:f,points:f,lines:f,multilinestrings:f,multipolygons:f},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,g.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,RenderInfo:function(t){return(0,g.createElement)("p",{},t.info.title)}},m=(0,h.e)(y),w=()=>(0,x.fp)(m);var v=n(4202);n(437);var S=n(215);let b=S.gPz([S.wNn,S.QfV]),D=S.O31(b);i=S._kM({ids:D}),S.mj7(i);let k=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var E=n(3024);function A(t,e,n){let[i,o,r]=t,[a,l]=e;return i*a+o*l+r*n}function T(t,e,n){return[A(function(t){let[[e],[n],[i]]=t;return[e,n,i]}(t),e,n),A(function(t){let[[,e],[,n],[,i]]=t;return[e,n,i]}(t),e,n)]}function j(t,e){let n=t.x+e.x,i=t.y+e.y;return{...t,x:n,y:i}}function z(t,e){let n=t.x-e.x,i=t.y-e.y;return{...t,x:n,y:i}}let N={x:0,y:0};function O(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,i="number"==typeof e?e:e instanceof Array?e[1]:e.y,o=t.x*n,r=t.y*i;return{...t,x:o,y:r}}function M(t,e,n,i){return{x:t,y:e,width:n,height:i}}let R={x:0,y:0,width:1,height:1};function F(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function $(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function C(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function L(t,e){return{...t,x:e.x,y:e.y}}function I(t){return function(t){let{x:e,y:n,width:i,height:o}=t;return`${e} ${n} ${i} ${o}`}(function(t,e){let{x:n,y:i,width:o,height:r}=t;return{x:e(n),y:e(i),width:e(o),height:e(r)}}(t,function(t){return Math.round(100*t)/100}))}function P(t){let{x:e,y:n,width:i,height:o}=t;return{tl:{x:e,y:n},br:{x:e+i,y:n+o}}}function H(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function U(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function W(t){let[[e,n],[i,o]]=t;return{tl:{x:e,y:n},br:{x:i,y:o}}}function Y(t,e){return[T(t,function(t){let[e]=t;return e}(e),0),T(t,function(t){let[,e]=t;return e}(e),0),T(t,function(t){let[,,e]=t;return e}(e),1)]}function Z(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function B(t,e,n,i){var o,r;return o=function(t,e){let[n,i]=e;return[Z(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),Z([-n,-i])].reduce(Y)}("number"==typeof(r=e)?[r,r]:"x"in r?[r.x,r.y]:r,[n,i]),(0,E.Fs)(t,P,U,t=>(function(t,e){let[n,i]=t;return[e(n),e(i)]})(t,t=>T(o,t,1)),W,H)}var V=n(9008),q=n(3342),G=n(4700),K=n(7686);let X=[1,2,2.5,5,10,15,20,25,30,40,50];function _(t){Promise.all(Array.from(t,t=>Promise.resolve(t()))).catch(t=>console.log("notifyCbs0",t))}function J(t,e){Promise.all(Array.from(t,t=>Promise.resolve(t(e)))).catch(t=>console.log("notifyCbs",t))}let Q={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},tt={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function te(t,e,n){(0,g.useEffect)(()=>{let i=e.current;return i&&t.set(n,i),()=>{i&&t.delete(n)}},[n,e,t])}let tn=new Map,ti=t=>.5+.5*Math.log2(Math.max(1,t)),to=`
position: absolute;
left: 0;
top: 0;
`,tr=`
position: absolute;
right: 0;
top: 0;
`,ta=`
position: absolute;
left: 0;
bottom: 0;
`,tl=`
position: absolute;
right: 0;
bottom: 0;
`,ts=`
margin: 0;
`,td=`
padding: 0;
`,tc=`
${ts} ${td}
`,tp=`
box-sizing: border-box;
`,tu=`
width: 100vw;
height: 100vh;
height: 100svh;
`,th=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tx=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tg=`
-webkit-user-select: none;
user-select: none;
`,tf=`
touch-action: none;
`,ty=`
pointer-events: none;
`,tm=`
pointer-events: initial;
`,tw=`
background-color: rgba(255, 255, 255, 0.5);
`,tv=`
cubic-bezier(0, 0, 0, 1)
`,tS=`
cubic-bezier(1, 0, 1, 1)
`,tb="xxx-appearing",tD=`
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
`,tk;function tE(t){return Math.round(100*t)/100}function tA(t){return Math.round(1e3*t)/1e3}function tT(t){return Math.round(1e7*t)/1e7}let tj=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function tz(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("g",{id:"measure",children:(0,v.jsx)(tF,{})})})}function tN(){let t=(0,g.useRef)(null);return te(tZ,t,"distance"),(0,v.jsxs)("div",{ref:t,id:"distance",children:[(0,v.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),tj.map(t=>(0,v.jsxs)(g.Fragment,{children:[(0,v.jsx)("p",{id:`distance-x-${t+1}`,className:"distance distance-x","data-idx":t+1,style:{"--distance-idx":`${t+1}`}}),(0,v.jsx)("p",{id:`distance-y-${t+1}`,className:"distance distance-y","data-idx":t+1,style:{"--distance-idx":`${t+1}`}})]},t)),(0,v.jsx)("style",{children:(0,v.jsx)(tB,{})})]})}let tO=new Map;function tM(){let t=(0,g.useRef)(null),e=(0,g.useRef)(null);return te(tO,t,"lon"),te(tO,e,"lat"),(0,v.jsxs)("div",{id:"coordinate",children:[(0,v.jsx)("p",{ref:t,id:"longitude"}),(0,v.jsx)("p",{ref:e,id:"latitude"}),(0,v.jsx)("style",{children:(0,v.jsx)(tL,{})})]})}let tR=new Map;function tF(){let t=(0,g.useRef)(null),e=(0,g.useRef)(null);return te(tR,t,"horizontal"),te(tR,e,"vertical"),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("path",{ref:t,id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),(0,v.jsx)("path",{ref:e,id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),tj.map((t,e)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(t$,{idx:e})},e))]})}function t$(t){let{idx:e}=t,n=(0,g.useRef)(null);return te(tR,n,`ring${e}`),(0,v.jsx)("path",{ref:n,id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"})}let tC=new Map;function tL(){return(0,v.jsxs)(v.Fragment,{children:[tU,tW,tY]})}let tI="100vw",tP="100svh",tH="var(--distance-radius-client)",tU=`
#distance,
#coordinate {
  ${to}
  width: ${tI};
  height: ${tP};
  /*
  transform: translate3d(0, 0, 0);
  */
}
`,tW=`
#longitude {
  ${tl}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(calc(${tI} / -2), calc(${tP} / -2)) scale(0.5);
}
`,tY=`
#latitude {
  ${ta}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(calc(${tI} / 2), calc(${tP} / -2)) scale(0.5);
}
`,tZ=new Map;function tB(){return(0,v.jsxs)(v.Fragment,{children:[tq,tV,tG,tK]})}let tV=`
.distance {
  ${to}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: 0% 0%;
}
`,tq=`
#distance-origin {
  transform: translate(calc(${tI} / 2), calc(${tP} / 2)) scale(0.5);
}
`,tG=(o=`${tH} * var(--distance-idx)`,r=`${tI} / 2 + ${o}`,a=`${tP} / 2`,`
.distance-x {
  transform: translate(calc(${r}), calc(${a})) scale(0.5);
}
`),tK=(l=`${tH} * var(--distance-idx)`,s=`${tI} / 2`,d=`${tP} / 2 + ${l}`,`
.distance-y {
  transform: translate(calc(${s}), calc(${d})) scale(0.5);
}
`);function tX(t){return void 0!==t&&"number"==typeof t}function t_(t,e,n,i,o,r){return new DOMMatrixReadOnly(t instanceof Array?t:tX(t)&&tX(e)&&tX(n)&&tX(i)&&tX(o)&&tX(r)?[t,e,n,i,o,r]:void 0)}function tJ(t){let{container:e,outer:n,svgScale:i,inner:o}=t,{x:r,y:a}=n;return{container:e,scroll:e,content:t_(),svgOffset:{x:-r,y:-a},svgScale:i,svg:o}}function tQ(t){return t_().multiply(function(t){let{svgOffset:e}=t;return t_().translate(-e.x,-e.y)}(t)).multiply(function(t){let{svgScale:e}=t;return t_().scale(1/e,1/e)}(t)).multiply(function(t){let{svg:e}=t;return t_().translate(-e.x,-e.y)}(t))}function t0(t){return t.content.multiply(tQ(t))}function t1(t){return(function(t){let{scroll:e}=t;return t_().translate(e.x,e.y)})(t).multiply(t0(t))}function t2(t,e){let n=t.height,i=n*e;return M((t.width-i)/2,0,i,n)}function t5(t,e){let n=t.width,i=n/e;return M(0,(t.height-i)/2,n,i)}let t3={...{container:R,scroll:R,content:t_(),svgOffset:{x:-0,y:-0},svgScale:1,svg:R},config:{fontSize:16,container:R,outer:R,inner:R,svgScale:1}};function t6(t,e){let n=$(t.scroll);return t7(t,e,e,n)}function t7(t,e,n,i){let o=t1(t).inverse().transformPoint(i),r=B(t.scroll,[e,n],i.x,i.y),a=O(t.svgOffset,[e,n]),l=B(t.svg,[e,n],o.x,o.y);return{...t,scroll:r,svgOffset:a,svg:l}}function t4(t,e){var n,i;let o=$({...t.scroll,x:0,y:0}),r=(n=o.x,i=o.y,t_().translate(n,i).rotate(e).translate(-n,-i)).multiply(t.content);return{...t,content:r}}function t8(t,e){let n=t.scroll,i=z(O(e,-1),n);return(0,E.Fs)(t,t=>({...t,scroll:C(t.scroll,i)}),t=>{let e,i,o,r,a,l,s;return e=L(t.scroll,n),i=t.content.inverse(),r=j(o=$(t.scroll),z(t.scroll,n)),a=i.transformPoint(o),l=O(z(i.transformPoint(r),a),-t.svgScale),s=C(t.svg,l),{...t,scroll:e,svg:s}})}function t9(t,e,n){t.classList.add(n?e:`not-${e}`),t.classList.remove(n?`not-${e}`:e)}let et=(t,e,n)=>(1-n)*t+n*e,ee=t=>1-(1-t)**3,en=new Map,ei=new Map,eo=new Map,er=new Map,ea=new Map,el=new Map;function es(t,e){let n=null===t||null===t.origin?"0% 0%":`${t.origin.x}px ${t?.origin.y}px`,i=t?.to.b!==0,o=i||null===t?null:ec({animation:t,zoom:e},0),r=i||null===t?null:ec({animation:t,zoom:e},1),a=i&&null!==t?ep({animation:t,zoom:e},0):null,l=i&&null!==t?ep({animation:t,zoom:e},1):null,s=null!==t?"transform":null,d=null!==t?n:null,c=null!==a?"container-rotate 500ms ease":null!==o?"container-zoom 500ms ease":null;Array.from(er,t=>{let[,i]=t,p=i.style.setProperty.bind(i.style);p("--zoom-origin",n),p("--zoom-zoom",e.toString()),p("--zoom-s",null),p("--zoom-s-inv",null),p("--zoom-k",null),p("--zoom-k-inv",null),p("--zoom-tx-a",(o&&`${o.tx}px`)??null),p("--zoom-ty-a",(o&&`${o.ty}px`)??null),p("--zoom-tx-b",(r&&`${r.tx}px`)??null),p("--zoom-ty-b",(r&&`${r.ty}px`)??null),p("--zoom-s-a",(o&&`${o.s}`)??null),p("--zoom-s-b",(r&&`${r.s}`)??null),p("--rotate-deg-a",(a&&`${a.deg}deg`)??null),p("--rotate-deg-b",(l&&`${l.deg}deg`)??null),p("will-change",s),p("transform-origin",d),p("animation",c)}),Array.from(ea,e=>{let[,n]=e,o=n.style.setProperty.bind(n.style);o("--zoom-s",null===t?null:t.to.a.toString()),o("--zoom-s-symbols",null===t?null:t.to.a.toString()),t9(n,"zooming",null!==t),i&&t9(n,"rotating",null!==t)}),Array.from(el,e=>{let[,n]=e;t9(n,"zooming",null!==t),i&&t9(n,"rotating",null!==t)})}let ed=t=>.5+.5*Math.log2(Math.max(1,t));function ec(t,e){let{animation:n,zoom:i}=t,o=n.from,r=n.to,a=et(o.e,r.e,ee(e)),l=et(o.f,r.f,ee(e)),s=et(o.a,r.a,ee(e)),d=i*s,c=et(i,d,ee(e)),p=et(ed(i),ed(i*s),ee(e));return{tx:a,ty:l,s,sinv:1/s,z:c,zinv:1/c,k:p,kinv:1/p}}function ep(t,e){let{animation:n}=t,i=et(eu(n.from),eu(n.to),ee(e));return{deg:i,deginv:1/i}}function eu(t){let e=180/Math.PI*Math.atan2(t.b,t.a);return e>=0?e:e+360}let eh=new Map,ex=new Set,eg=new Map;function ef(){return!eh.has("S")&&(ex.add("S"),!0)}let ey=(0,h.e)({scroll:R,client:{width:0,height:0},timeStamp:0});function em(t){let e=t.currentTarget;null!==e&&ey.set({scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})}function ew(){return ey.get()}let ev=new Map;function eS(t,e){Array.from(ev,n=>{let[,i]=n;t9(i,"shown",t),t9(i,"appearing",e)})}let eb=`
.not-shown {
  opacity: 0;
}
.shown {
}
.not-appearing {
}
.appearing {
  will-change: opacity;
  animation: xxx-appearing 2s ${tv};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`,eD=new Map,ek=(0,h.e)(t3),eE=(0,q.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,G.a)({zoom:(t,e)=>e.zoom}),updateRotate:(0,G.a)({}),updateSvgMatrix:(0,G.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return t0(e)}}),updateGeoMatrix:(0,G.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(m.get().mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,G.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:i}=t,o=Math.max(n.width,n.height)/2*i,r=Math.round(Math.log10(o)),a=(e=o/Math.pow(10,r-1),X.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,r-1);return{svg:s,client:s/i}}(e)}}),updateScroll:(0,G.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x+o.width/2,y:i.y+o.height/2};return r.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:i,client:o}=e,r=n.geoMatrix,a={x:i.x,y:i.y},l={x:i.x+o.width,y:i.y+o.height};return{start:r.transformPoint(a),end:r.transformPoint(l)}}}),updateCoord:t=>{let e,n,i,o,{context:{geoPoint:r}}=t;return e=r.x>0?"E":"W",n=r.y>0?"N":"S",i=`${e} ${tT(Math.abs(r.x))}`,o=`${n} ${tT(Math.abs(r.y))}`,void Array.from(tO,t=>{let[e,n]=t;"lon"===e&&(n.textContent=i),"lat"===e&&(n.textContent=o)})},updateDistance:t=>{let{context:{distanceRadius:e}}=t;return function(t){let{svg:e,client:n}=t;Array.from(tZ,t=>{let[,i]=t;Array.from(i.children,t=>{let n=t.getAttribute("data-idx");if(!n)return;let i=Number(n);"number"==typeof i&&(t.textContent=`${e*i}m`)}),i.style.setProperty.bind(i.style)("--distance-radius-client",`${n}px`)})}(e)},updateMeasure:t=>{var e,n,i;let o,r,a,l,{context:{layout:s,distanceRadius:d}}=t;return e=s.container.width,n=s.container.height,i=d.client,o=`M0,${n/2} h${e}`,r=`M${e/2},0 v${n}`,(a=tR.get("horizontal"))&&a.setAttribute("d",o),void((l=tR.get("vertical"))&&l.setAttribute("d",r),tj.forEach(t=>{let o=tR.get(`ring${t}`);if(!o)return;let r=function(t){let{width:e,height:n,r:i}=t,o=`${e}:${n}:${i}`,r=tC.get(o),a=`M${e/2},${n/2} m-${i},0 a${i},${i} 0,1,0 ${2*i},0 a${i},${i} 0,1,0 -${2*i},0`.replaceAll(/([.]\d)\d*/g,"$1");return r||tC.set(o,a),a}({width:e,height:n,r:tE(i*(t+1))});o.setAttribute("d",r)}))}}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:t3,zoom:1,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:N,distanceRadius:{svg:0,client:0},geoRange:{start:N,end:N},mode:"panning"},on:{"STYLE.LAYOUT":{actions:[(0,G.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),t=>{let{event:e}=t;return ek.set(e.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius","updateDistance","updateMeasure",(0,K.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}}),t=>{var e;let n,{context:i}=t;return n=tQ(e=i.layout),void(Array.from(en,t=>{let[,i]=t,o=i.style.setProperty.bind(i.style);o("--layout-content-matrix",e.content.toString()),o("--layout-scroll-width",`${tE(e.scroll.width)}px`),o("--layout-scroll-height",`${tE(e.scroll.height)}px`),o("--layout-svg-to-content-matrix",new DOMMatrixReadOnly([n.a,n.b,n.c,n.d,tE(n.e),tE(n.f)]).toString())}),Array.from(ei,t=>{let[,n]=t,i=n.style.setProperty.bind(n.style);i("--layout-svg-x",`${tE(e.svg.x).toString()}px`),i("--layout-svg-y",`${tE(e.svg.y).toString()}px`),i("--layout-svg-width",`${tE(e.svg.width).toString()}px`),i("--layout-svg-height",`${tE(e.svg.height).toString()}px`)}))},t=>{var e;let{context:n}=t;return e=n.layout,void Array.from(eo,t=>{let[,n]=t,i=n.style.setProperty.bind(n.style);i("--layout-svgscale",`${tE(e.svgScale)}`),i("--layout-fontsize",`${tE(e.config.fontSize)}`)})},t=>{var e,n;let i,o,{context:r}=t;return e=r.layout,i=ti(n=r.zoom),o=e.config.fontSize*e.svgScale*ti(n),void Array.from(tn,t=>{let[,e]=t,n=e.style.setProperty.bind(e.style);n("--map-symbol-size",`${o/72}`),n("--map-symbol-size-k",`${i}`)})}]},"STYLE.ZOOM":{actions:[{type:"updateZoom",params:t=>{let{event:e}=t;return e}},t=>{let{context:{zoom:e}}=t;return es(null,e)}]},"STYLE.SCROLL":{actions:[{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}},"updateCoord"]},"STYLE.MODE":{actions:(0,G.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",entry:t=>{let{context:e}=t;return eS(e.shown,e.appearing)},states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:[(0,G.a)({appearing:!0}),t=>{let{context:e}=t;return eS(e.shown,e.appearing)}],target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:[(0,G.a)({appearing:!1,shown:!0}),t=>{let{context:{zoom:e}}=t;return es(null,e)},t=>{let{context:e}=t;return eS(e.shown,e.appearing)},"updateDistance","updateMeasure"],target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:[t=>{let{context:{zoom:e},event:{animation:n}}=t;return es(n,e)},(0,G.a)({animating:!0}),()=>{var t;let e,n;return t="zoom",e=performance.now(),n=requestAnimationFrame(function n(i){if(Math.abs(i-e)/500<1){let e=requestAnimationFrame(n);eD.set(t,e)}else{let e=eD.get(t);void 0!==e&&cancelAnimationFrame(e),eD.delete(t)}}),void eD.set(t,n)}],target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,G.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:[t=>{let{context:{zoom:e}}=t;return es(null,e)},(0,G.a)({animating:!1})],target:"Idle"}}}}}),eA=(0,K.c)(eE,{systemId:"system-viewer1"});function eT(t){eA.send(t)}function ej(t){return(0,V.d4)(eA,e=>t(e.context))}function ez(){eT({type:"STYLE.SCROLL",currentScroll:ew()})}let eN={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var eO=n(1717);let eM={init:new Set,rendered:new Set},eR=function(t){J(eM.init,t)},eF=function(){_(eM.rendered)},e$=new Map,eC=(0,h.e)(0),eL=(0,q.mj)({types:{context:{},events:{},emitted:{}},actions:{updateInit:()=>void Array.from(e$,t=>{let e,[n,i]=t;(e=i.style.setProperty.bind(i.style))("will-change",null),e("animation",null),e("visibility","hidden")}),updateLoad:t=>{let e,{context:{fidx:n}}=t;return e=RegExp(`^.*-${n}$`),void Array.from(e$,t=>{var n;let i,[o,r]=t;return n=e.test(o),i=r.style.setProperty.bind(r.style),void(n?(i("will-change","opacity"),i("animation",`${tb} 250ms linear`),i("visibility",null)):(i("will-change",null),i("animation",null),i("visibility","hidden")))})},updateSwitch:t=>{let e,{context:{fidx:n,prevFidx:i}}=t;return e=RegExp(`^.*-${n}$`),void Array.from(e$,(t,o)=>{let[r,a]=t;return function(t,e,n,i){let o=t.style.setProperty.bind(t.style);if(e){let t=`${n?tb:"xxx-disappearing"} 250ms linear`;o("will-change","opacity"),o("animation",t),o("visibility",i?null:"hidden")}else o("will-change",null),o("animation",null),o("visibility",n?null:"hidden")}(a,null!==i,e.test(r),o===i||o===n)})}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:-1},initial:"Uninited",states:{Uninited:{on:{INIT:{actions:[(0,G.a)({nfloors:t=>{let{event:e}=t;return e.nfloors},fidx:t=>{let{event:e}=t;return e.fidx}}),t=>{let{event:e}=t;return eC.set(e.fidx)},"updateInit"],target:"Loading"}}},Loading:{on:{IMAGE:{actions:(0,G.a)({blobs:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.blobs.set(n,i))},urls:t=>{let{context:e,event:{fidx:n,blob:i}}=t;return new Map(e.urls.set(n,URL.createObjectURL(i)))}}),target:"Loaded"}}},Loaded:{always:[{guard:t=>{let{context:e}=t;return e.nfloors===e.blobs.size},actions:"updateLoad",target:"Animating"},"Loading"]},Idle:{on:{SELECT:{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:[(0,G.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),t=>{let{event:e}=t;return eC.set(e.fidx)},"updateSwitch"],target:"Animating"},"LEVEL.UP":[{guard:t=>{let{context:e}=t;return e.fidx===e.nfloors-1}},{actions:(0,eO.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx+1}})}],"LEVEL.DOWN":[{guard:t=>{let{context:e}=t;return 0===e.fidx}},{actions:(0,eO.a)(t=>{let{context:e}=t;return{type:"LOCK",fidx:e.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:[(0,G.a)({prevFidx:null}),"updateSwitch"],target:"Idle"}}}}}),eI=(0,K.c)(eL);eI.on("LOCK",t=>{let e,{fidx:n}=t;return e=n,J(eN.lock,e)});let eP=new Worker(new URL(n.p+n.u(103),n.b),Object.assign({},{type:"module"},{type:void 0}));function eH(){var t;let{fidx:e,prevFidx:n,urls:i}=(t=t=>{let{fidx:e,prevFidx:n,urls:i}=t;return{fidx:e,prevFidx:n,urls:i}},(0,V.d4)(eI,e=>t(e.context))),o=(0,g.useCallback)(t=>()=>{let n;return t!==e?void 0:(n=t,J(eN.selectDone,n))},[e]),r=(0,g.useCallback)(t=>()=>{let i;return null!==n||t===e?void 0:(i=t,J(eN.lock,i))},[e,n]);return{fidx:e,prevFidx:n,fidxToOnAnimationEnd:o,fidxToOnClick:r,urls:i}}eP.onmessage=t=>{let e=t.data;switch(e.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:t,blob:n}=e;eI.send({type:"IMAGE",fidx:t,blob:n})}}},eP.onerror=t=>{console.error("floors error",t)},eP.onmessageerror=t=>{console.error("floors messageerror",t)};var eU=n(5193),eW=n(3166);let eY=`
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
`,eZ=new Map;function eB(t,e,n){(0,g.useEffect)(()=>(function(t,e,n){let i=void 0===n?document:eZ.get(n)??null;if(null===i)return;let o=i.querySelector(`#${t}`)??null;if(null===o||null!==o.shadowRoot)return;let r=o.attachShadow({mode:"open"});eZ.set(t,r),(0,eW.createRoot)(r).render(e)})(t,e,n),[t,n,e])}let eV={bus:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,v.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,v.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,v.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,v.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,v.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,v.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,v.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,v.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,v.jsx)("use",{x:"8.5",href:"#_person2"}),(0,v.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,v.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,v.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,v.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,v.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,v.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36,-36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,v.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,v.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,v.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,v.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,v.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,children:[(0,v.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,v.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,v.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,v.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,v.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,v.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,v.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,v.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,v.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,v.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,v.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,v.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,v.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,v.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,v.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(t){return(0,v.jsxs)("g",{id:`X${t.id}`,transform:"translate(-36, -36)",children:[(0,v.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,v.jsxs)("g",{fill:"white",stroke:"none",children:[(0,v.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,v.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,v.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function eq(){return(0,v.jsx)("g",{className:"assets",children:(0,v.jsx)(eG,{})})}function eG(){return(0,v.jsx)("g",{className:"symbols",children:Object.entries(eV).map((t,e)=>{let[n,i]=t;return(0,v.jsx)(g.Fragment,{children:i({id:n})},e)})})}function eK(t){return t>.5?-1:+(t<.5)}function eX(t){return t<.3?1:t>.7?-1:0}function e_(t){return{open:t,animating:!1}}function eJ(t){return t.open||t.animating?null:{open:!0,animating:!0}}function eQ(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function e0(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function e1(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function e2(t){let{open:e,animating:n}=t;return e||n}function e5(t,e,n,i){let o={x:e/2,y:n/2},r=e/20,a=r/2;function l(e){var n;let i,o;return n={x:t.h,y:t.v},i=e.x*n.x,o=e.y*n.y,{...e,x:i,y:o}}let s=t.th<Math.PI/4,d=0===t.v,c=0===t.h,p=l(O(o,-1)),u=l(d||c?z(O(o,-1),{x:i,y:i}):z(O(o,-1),{x:s?i:0,y:s?0:i})),[h,x]=c?[{x:-a,y:0},{x:a,y:0}]:d?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:r})]:[{x:0,y:0},l({x:r,y:0})],g=j(p,h),f=j(p,x);return{p,q:u,a:g,b:f}}let e3=t=>{let{x:e,y:n}=t;return`${tA(e)}, ${tA(n)}`},e6=`
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
  --timing: ${tS};
}
.animating.opened {
  --timing: ${tv};
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
`,e7=new Map,e4=new Map;function e8(t,e){let{open:n,animating:i}=e;Array.from(t,t=>{let[,e]=t;e.classList.add(n?"opened":"closed"),e.classList.remove(n?"closed":"opened"),t9(e,"animating",i)})}let e9=new Map,nt=new Map,ne=new Map,nn=new Map,ni=new Map;function no(){var t;let e=(0,g.useRef)(null),n=(0,g.useRef)(null),i=(0,g.useRef)(null),o=(0,g.useRef)(null);return te(e4,e,"balloon"),te(e9,e,"balloon"),te(nt,n,t="balloon"),te(ne,i,t),te(nn,o,t),(0,v.jsxs)("div",{ref:e,className:"balloon",children:[(0,v.jsxs)(na,{ref:n,children:[(0,v.jsx)("path",{ref:i,className:"bg"}),(0,v.jsx)("path",{ref:o,className:"fg"}),(0,v.jsx)("style",{children:nl})]}),(0,v.jsx)("style",{children:nr})]})}let nr=`
.balloon,
.balloon-svg {
  ${to}
  ${ty}
  z-index: 10;
  will-change: opacity, transform;
}
`;function na(t){let{ref:e,children:n}=t;return(0,v.jsx)("svg",{ref:e,className:"balloon-svg",viewBox:"0 0 0 0",width:0,height:0,children:n})}let nl=`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`,ns={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},nd=()=>_(ns.zoomIn),nc=()=>_(ns.zoomOut),np=()=>_(ns.rotate),nu=()=>_(ns.reset),nh=()=>_(ns.recenter),nx={start:new Set,end:new Set,endDone:new Set},ng={multiStart:new Set,multiEnd:new Set,zoom:new Set},nf={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},ny=(0,h.e)(!1),nm=t=>ny.set(()=>t),nw=(0,h.e)("panning");nw.subscribe(t=>{let e;return e=t,J(tt.mode,e)});let nv=(0,q.mj)({types:{},guards:{isHoming:t=>{let{context:{animationReq:e}}=t;return null!==e&&"home"===e.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>m.get().isMapRendered(),isUiRendered:()=>m.get().isUiRendered()},actions:{setRendered:(0,G.a)({rendered:!0}),emitGetScroll:(0,eO.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,eO.a)(t=>{let{context:e}=t;return function(t){let{layout:e}=t;return{type:"SCROLL.SYNC",pos:e.scroll}}(e)}),emitSyncScrollSync:(0,eO.a)(t=>{let{context:e}=t;return function(t){let{layout:e}=t;return{type:"SCROLL.SYNCSYNC",pos:e.scroll}}(e)}),prepareZoom:(0,G.a)((t,e)=>{let{context:n}=t;return function(t,e){let{z:n,p:i}=e,o={type:"zoom",z:n,p:i??$(t.layout.container)};return{...t,animationReq:o}}(n,e)}),prepareHome:(0,G.a)(t=>{let{context:e}=t;return{...e,animationReq:{type:"home"}}}),prepareRotate:(0,G.a)(t=>{let e,{context:n}=t;return e={type:"rotate",deg:90,p:$(n.layout.container)},{...n,animationReq:e}}),clearAnimation:(0,G.a)(t=>{let{context:e}=t;return{...e,animationReq:null}}),startZoom:(0,G.a)(t=>{var e,n,i,o,r,a,l,s,d,c,p,u,h;let x,g,f,y,w,v,S,b,D,k,E,A,{context:T}=t;return e=T.animationReq,n=T.layout,k=null===e?null:"zoom"===e.type?(i=n,o=e.z,r=e.p,x=t1(i).inverse().transformPoint(r),g=1/(a=o,Math.pow(m.get().zoomFactor,a)),f=t_().scale(1/g,1/g),{type:"Zoom",svg:B(i.svg,g,x.x,x.y),svgScale:i.svgScale*g,q:{from:t_(),to:f,origin:r}}):"home"===e.type?(l=n,y=$((s=function(t){let{config:e,content:n}=t;return{config:e,...tJ(e),content:n}}(n)).config.inner),w=t1(l).transformPoint(y),v=s.svgScale/l.svgScale,b=(function(t,e){if(t instanceof DOMMatrixReadOnly)return t_(1,0,0,1,t.e,t.f);if("number"==typeof t&&"number"==typeof e)return t_(1,0,0,1,t,e);throw Error("dommatrixreadonlyTranslateOnly")})((S=$(l.container)).x-w.x,S.y-w.y).multiply((d=1/v,c=1/v,p=w.x,u=w.y,t_().scale(d,c,1,p,u,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:t_(),to:b,origin:null}}):(h=e.p,D=t_().rotate(90),{type:"Rotate",deg:90,q:{from:t_(),to:D,origin:h}}),E=T.layout,A=function(t,e){var n,i,o;return null===e?t:"Move"===e.type?(n=e.move,{...t,scroll:L(t.scroll,n)}):"Zoom"===e.type?(i=e.svg,o=e.svgScale,{...t,svg:i,svgScale:o}):t4(t,e.deg)}(T.layout,k),{...T,animation:k,prevLayout:E,layout:A}}),endZoom:(0,G.a)(t=>{var e,n;let i,o,{context:r}=t;return i=r.zoom*(null===(e=r.animationReq)||"zoom"!==e.type?1:Math.pow(2,e.z)),o=r.rotate+(null===(n=r.animationReq)||"rotate"!==n.type?0:n.deg),{...r,prevLayout:null,animation:null,zoom:i,rotate:o}}),endHome:(0,G.a)(t=>{let e,n,{context:i}=t;return e=$(i.origLayout.container),n=t4(t6(i.origLayout,9),i.rotate),{...i,cursor:e,layout:n}}),emitZoomStart:(0,eO.a)(t=>{let{context:e}=t;return function(t){let{layout:e,zoom:n,animation:i}=t;return{type:"ZOOM.START",layout:e,zoom:n,q:i?.q??null}}(e)}),emitZoomEnd:(0,eO.a)(t=>{let{context:e}=t;return function(t){let{layout:e,zoom:n,animation:i}=t;return{type:"ZOOM.END",layout:e,zoom:n,q:i?.q??null}}(e)}),resetCursor:(0,G.a)(t=>{let e,{context:n}=t;return e=$(n.layout.container),{...n,cursor:e}}),resizeLayout:(0,G.a)((t,e)=>{let{context:n}=t;return function(t,e){let{layout:n}=e;return{...t,rendered:!1,origLayout:n,layout:t6(n,9)}}(n,e)}),resetScroll:(0,G.a)(t=>{let{context:e}=t;return function(t){let{scroll:e}=ew(),n=t8(t.layout,e);return{...t,layout:n}}(e)}),emitSyncLayout:(0,eO.a)(t=>{let{context:e}=t;return function(t){let{layout:e,rendered:n}=t;return{type:"SYNC.LAYOUT",layout:e,force:n}}(e)}),prepareSearch:(0,G.a)((t,e)=>{let{context:n}=t;return function(t,e){let{pos:n}=e;return{...t,cursor:n}}(n,e)}),emitSearchStart:(0,eO.a)(t=>{let{context:e}=t;return function(t){let{scroll:e}=ew();return{type:"SEARCH.START",req:{psvg:t1(t8(t.layout,e)).inverse().transformPoint(t.cursor)}}}(e)}),emitSearchEndDone:(0,eO.a)((t,e)=>{let{context:n}=t;return function(t,e){let{res:n}=e,{scroll:i}=ew(),o=t8(t.layout,i);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:o}}}(n,e)}),emitSwitch:(0,eO.a)((t,e)=>{let{context:n}=t;return function(t){let{fidx:e}=t;return{type:"SWITCH",fidx:e}}(e)}),emitSwitchDone:(0,eO.a)({type:"SWITCH.DONE"}),enterZooming:()=>nm(!0),exitZooming:()=>nm(!1),unlockScroll:()=>!!ex.has("S")&&(ex.delete("S"),!0)}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:t3,prevLayout:null,layout:t3,cursor:$(t3.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,K.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{actions:"emitZoomEnd",target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"Resizing"},SEARCH:{guard:()=>ef(),actions:{type:"prepareSearch",params:t=>{let{event:e}=t;return e}},target:"Searching"},SWITCH:{guard:()=>ef(),actions:{type:"emitSwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},RECENTER:{guard:()=>ef(),target:"Recentering"},ZOOM:{guard:()=>ef(),actions:{type:"prepareZoom",params:t=>{let{event:e}=t;return e}},target:"Zooming"},HOME:{guard:()=>ef(),actions:"prepareHome",target:"Zooming"},ROTATE:{guard:()=>ef(),actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",entry:"enterZooming",exit:["exitZooming","unlockScroll"],states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Rendering2"},{target:"Rendering2"}]},Rendering2:{after:{50:{target:"Done"}}},Done:{entry:"clearAnimation",type:"final"}}}}}),nS=(0,K.c)(nv,{systemId:"system-viewer1"});function nb(t){nS.send(t)}nS.on("SEARCH.START",t=>{let e,{req:n}=t;return e=n,J(nx.start,e)}),nS.on("SEARCH.END.DONE",t=>{let e,n,{res:i}=t;null===i?nS.send({type:"SEARCH.DONE"}):(e=i,J(nx.endDone,e),n=i.psvg,J(nf.open,n))}),nS.on("ZOOM.START",t=>{let e;return e=t,J(tt.zoomStart,e)}),nS.on("ZOOM.END",t=>{let e;return e=t,J(tt.zoomEnd,e)}),nS.on("SWITCH",t=>{let e,{fidx:n}=t;return e=n,J(eN.select,e)}),nS.on("SWITCH.DONE",()=>_(eN.unlock)),nS.on("SYNC.LAYOUT",t=>{let e,{layout:n,force:i}=t;return e={layout:n,force:i},J(tt.layout,e)}),nS.on("SCROLL.SYNC",t=>{let e,{pos:n}=t;return e=n,J(Q.sync,e)}),nS.on("SCROLL.SYNCSYNC",t=>{let e,{pos:n}=t;return e=n,J(Q.syncSync,e)}),nS.on("SCROLL.GET",()=>_(Q.get));let nD=!1,nk=!1;function nE(t){nD="locked"===t,nk="locked"===t}function nA(t){(0,g.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",nT),()=>{e.removeEventListener("wheel",nT)}},[t])}function nT(t){let e=t.currentTarget;nk&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function nj(t){return function(e,n){let i=e[n],o=t(i);return e[n]=null===o?i:o,e}}let nz=(0,q.mj)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return e2(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return e2(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,G.a)({canceling:()=>!0}),endCancel:(0,G.a)({canceling:()=>!1}),open:(0,G.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return nj(eJ)(n,i)}}),close:(0,G.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return nj(e0)(n,i)}}),handle:(0,G.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:i}=e;return nj(n[i].open?eQ:e1)(n,i)}}),updateDetail:(0,G.a)({detail:(t,e)=>e,p:(t,e)=>{let{psvg:n,layout:i}=e;return t1(i).transformPoint(n)}}),updateBalloon:(0,G.a)({balloon:t=>{var e;let n,i,o,r,a,l,s,d,c,p,{context:{detail:u,p:h}}=t;return u&&h&&(e=u.layout,l=function(t,e){let{x:n,y:i}=e,o=t.width/t.height,r={x:n/t.width,y:i/t.height},a=o>1?eK(r.x):eX(r.x);return{h:a,v:o>1?eX(r.y):eK(r.y),th:Math.atan2(t.height,t.width)}}(e.container,h),s=e.container.width,i=50*(n=.01*Math.min(s,d=e.container.height)),o=50*n,r=10*n,a=i/100,p=e5(l,(c={bw:i,bh:o,lh:r,d:a,width:i+2*r+2*a,height:o+2*r+2*a}).bw,c.bh,c.lh),{_p:h,_hv:l,_W:s,_H:d,_size:c,_leg:p})}}),updateBalloonPaths:(0,G.a)({balloonPaths:t=>{let{context:{balloon:e}}=t;return e?._hv&&function(t,e){let{bw:n,bh:i,lh:o,d:r,width:a,height:l}=e,s=M(-a/2,-a/2,a,l),{body:d,leg:c}=function(t,e,n,i){let o={x:e/2,y:n/2},r=`
m${tA(-o.x)},${tA(-o.y)}
h${tA(e)}
v${tA(n)}
h${tA(-e)}
z
`,{p:a,q:l,a:s,b:d}=e5(t,e,n,i),c=z(l,s),p=z(d,l),u=z(a,d);return{body:r,leg:`
m${e3(s)}
l${e3(c)}
l${e3(p)}
l${e3(u)}
z
`}}(t,n,i,o);function p(t){return`M${tA(t)},${tA(t)} ${d} M${tA(t)},${tA(t)} ${c}`}return{viewBox:s,width:a,height:l,bg:p(r),fg:p(0)}}(e._hv,e._size)||void 0}}),updateHeaderStyle:t=>{let{context:e}=t;e8(e7,e.m.header)},updateBalloonStyle:t=>{let{context:e}=t;e.balloon&&function(t,e){let{_p:n,_hv:i,_size:o,_leg:r}=t,a=function(t,e,n,i,o){let{open:r,animating:a}=o;if(null!==t&&null!==e&&e2({open:r,animating:a})){let{width:e,height:o}=n,{a:l,b:s,timing:d,txa:c,txb:p}=function(t,e,n,i){let o=O(i,-1);if(e){let{a:e,b:i}=t?{a:0,b:1}:{a:1,b:0},r=t?{a:N,b:o}:{a:o,b:N},{a:a,b:l}={a:j(n,r.a),b:j(n,r.b)};return{a:e,b:i,timing:t?tv:tS,txa:a,txb:l}}{let{b:t}={a:0,b:1};return{a:null,b:t,timing:null,txa:null,txb:j(n,o)}}}(r,a,t,i.q),u=`${tA(-e/2)}px`,h=`${tA(-o/2)}px`,x=c&&`${tA(c.x)}px`,g=c&&`${tA(c.y)}px`;return{visibility:null,a:l,b:s,timing:d,pww:u,phh:h,txax:x,txay:g,txbx:p&&`${tA(p.x)}px`,txby:p&&`${tA(p.y)}px`}}return{visibility:"hidden",a:null,b:null,timing:null,pww:null,phh:null,txax:null,txay:null,txbx:null,txby:null}}(n,i,o,r,e);Array.from(e9,t=>{let[,e]=t;!function(t,e){let{visibility:n,a:i,b:o,timing:r,pww:a,phh:l,txax:s,txay:d,txbx:c,txby:p}=e,u=t.style.setProperty.bind(t.style);u("visibility",n),u("--balloon-pww",a),u("--balloon-phh",l),u("--a",null===i?null:i.toString()),u("--b",null===o?null:o.toString()),u("--timing",r),u("--balloon-tx-a-x",s),u("--balloon-tx-a-y",d),u("--balloon-tx-b-x",c),u("--balloon-tx-b-y",p)}(e,a)})}(e.balloon,e.m.detail),e.balloonPaths&&function(t){let{viewBox:e,width:n,height:i,bg:o,fg:r}=t;Array.from(nt,t=>{let[,o]=t;o.setAttribute("viewBox",I(e)),o.setAttribute("width",`${n}`),o.setAttribute("height",`${i}`)}),Array.from(ne,t=>{let[,e]=t;return e.setAttribute("d",o)}),Array.from(nn,t=>{let[,e]=t;return e.setAttribute("d",r)})}(e.balloonPaths)},updateDetailStyle:t=>{let{context:e}=t,n=e.m.detail;requestAnimationFrame(()=>{e8(e4,n),requestAnimationFrame(()=>(function(t){let{open:e,animating:n}=t;e||n||Array.from(ni,t=>{let[,e]=t;e.scroll(0,0)})})(n))})}}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,m:{header:e_(!0),detail:e_(!1)},animationEnded:{header:!0,detail:!0}}},on:{RENDERED:{actions:["updateHeaderStyle","updateDetailStyle","updateBalloonStyle"]}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:[{type:"updateDetail",params:t=>{let{event:{type:e,...n}}=t;return n}},"updateBalloon","updateBalloonPaths"],target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,K.n)("animationEnded")},{actions:(0,G.a)({animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,K.n)("isDetailVisible")},{target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,K.n)("animationEnded")},{actions:(0,G.a)({animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],exit:"endCancel",on:{DONE:[{guard:(0,K.n)("isHeaderVisible")},{guard:"isDetailVisible"},{target:"Closed"}]}},Closed:{entry:(0,eO.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},"updateHeaderStyle",(0,G.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,K.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},"updateBalloonStyle","updateDetailStyle",(0,G.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,K.r)({type:"DONE"})]}}}}}),nN=(0,K.c)(nz);function nO(t){nN.send(t)}function nM(){let t=(0,g.useRef)(null);nA(t),te(e9,t,"detail"),te(e4,t,"detail"),te(ni,t,"detail");let e=(0,V.d4)(nN,t=>t.context.detail),n=w();return(0,v.jsxs)("div",{ref:t,className:"detail",onAnimationEnd:()=>nO({type:"DETAIL.ANIMATION.END"}),children:[n.RenderInfo&&e&&(0,v.jsx)(n.RenderInfo,{info:e.info}),(0,v.jsx)("style",{children:nR})]})}nN.on("CLOSE.DONE",()=>_(nf.closeDone));let nR=`
.detail {
  ${to}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${tm}
  ${tp}
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
    ${tg}
    margin: 1.5em;
    text-align: center;
  }
  & p {
    ${tg}
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
`;function nF(){return eB("detail",(0,v.jsx)(n$,{}),"ui"),(0,v.jsx)("div",{id:"detail"})}function n$(){return(0,v.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,v.jsx)(no,{}),(0,v.jsx)(nM,{}),(0,v.jsx)("style",{children:e6}),(0,v.jsx)(nC,{})]})}function nC(){return(0,v.jsx)("svg",{id:"ui-svg-defs",children:(0,v.jsx)("defs",{children:(0,v.jsx)(eq,{})})})}function nL(){return eB("footer",(0,v.jsx)(nI,{}),"ui"),(0,v.jsx)("div",{id:"footer"})}function nI(){let t=(0,g.useRef)(null);te(e7,t,"footer");let e=w();return(0,v.jsxs)("div",{ref:t,className:"ui-content footer",children:[(0,v.jsx)("p",{children:(0,v.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:e.copyright})}),(0,v.jsx)("style",{children:nP})]})}let nP=`
.footer {
  ${ta}
  ${th}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
  & > h2,
  & > p {
    ${tg}
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
      --timing: ${tS};
    }
    &.opened {
      --a: 0;
      --b: 1;
      --timing: ${tv};
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
`;function nH(){return eB("guides",(0,v.jsx)(nU,{}),"ui"),(0,v.jsx)("div",{id:"guides"})}function nU(){let t,e=(0,g.useRef)(null);return te(e7,e,"guides"),te(el,e,"guides"),(t=w(),(t.uiConfig?.showGuides??!0)&&!t.mapCoord.matrix.isIdentity)?(0,v.jsxs)("div",{ref:e,className:"ui-content guides",children:[(0,v.jsx)("svg",{className:"guides",children:(0,v.jsx)(tz,{})}),(0,v.jsx)(tN,{}),(0,v.jsx)(tM,{}),(0,v.jsx)("style",{children:nW})]}):(0,v.jsx)(v.Fragment,{})}let nW=`
.guides {
  ${to}
  ${tu}
  ${ty}
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
  --timing: ${tS};
}
.guides.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${tv};
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
  ${tg}
}
@keyframes xxx-measure {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;function nY(){let t=(0,g.useRef)(null),{fidx:e,fidxToOnClick:n}=eH(),i=w();return te(eg,t,"floors"),void 0===i.floorsConfig||i.floorsConfig.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{ref:t,className:"floors",children:[(0,v.jsx)("ul",{className:"floor-list",children:i.floorsConfig.floors.map((t,i)=>{let{name:o}=t;return(0,v.jsx)("li",{className:`floor-item ${nq(i===e)}`,onClick:n(i),children:o},i)})}),(0,v.jsx)("style",{children:nZ})]})}let nZ=`
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
  ${tw}
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
`;function nB(){let{fidx:t}=eH(),e=w().floorsConfig;return void 0===e||e.floors.length<2?(0,v.jsx)(v.Fragment,{}):(0,v.jsxs)("div",{children:[e.floors.map((e,n)=>(0,v.jsx)("h2",{className:`floor-name ${nq(n===t)}`,children:e.name},n)),(0,v.jsx)("style",{children:nV})]})}let nV=`
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
`;function nq(t){return t?"selected":"unselected"}function nG(){return eB("header",(0,v.jsx)(nK,{}),"ui"),(0,v.jsx)("div",{id:"header"})}function nK(){let t=(0,g.useRef)(null);(0,g.useEffect)(()=>{requestAnimationFrame(()=>nO({type:"RENDERED"}))},[]),te(e7,t,"header");let e=w();return(0,v.jsxs)("div",{ref:t,className:"ui-content header",onAnimationEnd:()=>nO({type:"HEADER.ANIMATION.END"}),children:[(0,v.jsx)("h1",{className:"title",onClick:()=>nu(),children:e.title}),(0,v.jsx)(nB,{}),(0,v.jsx)("style",{children:nX})]})}let nX=`
.header {
  ${to}
  ${th}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}
.header h1,
.header h2,
.header p {
  ${tg}
  ${tm}
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
  --timing: ${tS};
}
.header.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${tv};
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
`;function n_(){return eB("left",(0,v.jsx)(nJ,{}),"ui"),(0,v.jsx)("div",{id:"left"})}function nJ(){let t=(0,g.useRef)(null);return te(e7,t,"left"),(0,v.jsxs)("div",{ref:t,className:"ui-content left bottom",children:[(0,v.jsx)(nY,{}),(0,v.jsx)("style",{children:nQ})]})}let nQ=`
.left {
  ${to}
  ${tx}
  padding: 0.4em;
  font-size: smaller;
  ${ty}
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
  --timing: ${tS};
}
.left.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${tv};
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
`;function n2(){return(0,v.jsx)("div",{className:"button-item home",onClick:()=>nu(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n5})})})}let n5=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function n3(){return w().mapCoord.matrix.isIdentity?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)("div",{className:"button-item position",onClick:()=>_(ns.position),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n4})})})}let n6=3*Math.sqrt(2),n7=n6+6,n4=`
M 0,0
m 0,${n7/2}
l -3,-3
a ${n6},${n6} 0,1,1 6,0
z
m 0,${-n7+n6+n6/2}
a ${n6/2},${n6/2} 0,1,0 0,${-n6}
a ${n6/2},${n6/2} 0,1,0 0,${n6}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function n8(){return(0,v.jsx)("div",{className:"button-item recenter",onClick:()=>nh(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:n9})})})}let n9=`
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
`;function it(){return(0,v.jsx)("div",{className:"button-item rotate",onClick:()=>np(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:ie})})})}let ie=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function ii(){return(0,v.jsx)("div",{className:"button-item zoom-in",onClick:()=>nd(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:io})})})}let io=`
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
`;function ir(){return(0,v.jsx)("div",{className:"button-item zoom-out",onClick:()=>nc(),children:(0,v.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,v.jsx)("path",{d:ia})})})}let ia=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function il(){return eB("right",(0,v.jsx)(is,{}),"ui"),(0,v.jsx)("div",{id:"right"})}function is(){let t=(0,g.useRef)(null);return te(e7,t,"right"),(0,v.jsxs)("div",{ref:t,className:"ui-content right bottom",children:[(0,v.jsx)(ic,{}),(0,v.jsx)("style",{children:id})]})}let id=`
.right {
  ${tr}
  ${tx}
  padding: 0.4em;
  font-size: smaller;
  ${ty}
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
  --timing: ${tS};
}
.right.animating.opened {
  --a: 0;
  --b: 1;
  --timing: ${tv};
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
`;function ic(){let t=(0,g.useRef)(null);return te(eg,t,"buttons"),(0,v.jsxs)("div",{ref:t,className:"buttons",children:[(0,v.jsx)(n3,{}),(0,v.jsx)(n2,{}),(0,v.jsx)(n0,{}),(0,v.jsx)(n8,{}),(0,v.jsx)(it,{}),(0,v.jsx)(ir,{}),(0,v.jsx)(ii,{}),(0,v.jsx)("style",{children:ip})]})}let ip=`
.buttons {
  font-size: large;
  margin: 0;
  ${th}
}
.button.locked > .button-item {
  opacity: 0.5;
  pointer-events: none;
}
.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${tm}
  cursor: default;
  ${tw}
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
`;function iu(t){ny.get()&&t.preventDefault()}function ih(t){(0,g.useEffect)(()=>{let e=t.current;return e&&e.addEventListener("touchmove",iu),()=>{e&&e.removeEventListener("touchmove",iu)}},[t])}function ix(){return eB("screen",(0,v.jsx)(ig,{}),"ui"),(0,v.jsx)("div",{id:"screen"})}function ig(){let t=(0,g.useRef)(null);return te(e4,t,"screen"),ih(t),nA(t),(0,v.jsx)("div",{ref:t,className:"ui-content screen",onClick:()=>_(nf.close),children:(0,v.jsx)("style",{children:iy})})}let iy=`
.screen {
  ${to}
  ${tu}
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
  --timing: ${tS};
}
.screen.animating.opened {
  --a: 0;
  --b: 0.3;
  --timing: ${tv};
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
`;function im(){return eB("ui",(0,v.jsx)(iw,{})),(0,v.jsx)("div",{id:"ui"})}function iw(){let t=(0,g.useRef)(null);return te(ev,t,"ui"),(0,v.jsxs)("div",{ref:t,className:"ui",children:[(0,v.jsx)(ix,{}),(0,v.jsx)(nG,{}),(0,v.jsx)(nL,{}),(0,v.jsx)(n_,{}),(0,v.jsx)(il,{}),(0,v.jsx)(nH,{}),(0,v.jsx)(nF,{}),(0,v.jsx)("style",{children:eb})]})}function iv(){let t;return null!==(t=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&t>0}function iS(){nh()}let ib=new Map;function iD(t,e){let n=ib.get(e);if(n)return function(t,e){let n=t.scrollLeft,i=t.scrollTop,o=t.scrollWidth,r=t.scrollHeight;if(null===n)return!1;let a=o-e.width,l=r-e.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${o}, ${r}] vs. request=[${e.width}, ${e.height}]`),!1;let s=Math.round(-e.x),d=Math.round(-e.y);if(s<0||d<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==s&&(t.scrollLeft=s),i!==d&&(t.scrollTop=d);let c=t.scrollLeft;if(Math.abs(c-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${c}`),!1;let p=t.scrollTop;return!(Math.abs(p-d)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${i} vs. real=${p}`),!1)}(n,t)}var ik=n(8077),iE=n(990),iA=n(4465),iT=n(5909);let ij=(t,e)=>(function t(e,n,i){let o=Math.min(e.length,n.length),r=e[i],a=n[i];if(i>=o||r===tk||a===tk)return ik.pH(e.length,n.length);let l=ik.pH(r.x,a.x)||ik.pH(r.y,a.y);return 0===l?t(e,n,i+1):l})(t,e,0);function iz(t){return(0,E.Fs)(t.values(),iE.Ts,iE.di(ij),iE.x1(t=>0===t.length?iT.xT:iT.Py(t[0])))}function iN(t){let e;return t.length<2||null===(e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y})))?null:O(e,1/t.length)}function iO(t){return new Map((0,E.Fs)(t.changedTouches,t=>iE.O3.from(t),iE.Tj(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let iM=(0,q.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z},isModeIdle:t=>{let{context:{mode:e}}=t;return"idle"===e},isModePanning:t=>{let{context:{mode:e}}=t;return"pan"===e},isModePinching:t=>{let{context:{mode:e}}=t;return"pinch"===e}},actions:{updateTouches:(0,G.a)({touches:t=>{var e,n,i;let o,r,a,l,s,d,c,p,u,{context:{touches:h},event:x}=t;return"TOUCH.START"===x.type?(e=x.ev,n=h.vecs,i=iO(e),a=iN(r=iz(o=(0,E.Fs)([...n.entries(),...i.entries()],iE.TS(new Map,(t,e)=>{let[n,i]=e,o=iA.fromUndefinedOr(t.get(n)),r=iA.isSome(o)?[...o.value,...i]:i;return new Map(t).set(n,r)})))),s=2!==r.length?null:.5>Math.abs((l=z(r[0],r[1])).y/l.x),{...h,vecs:o,points:r,cursor:a,horizontal:s}):"TOUCH.MOVE"===x.type?function(t,e){var n,i,o,r;let a,l=iO(e),s=new Map((0,E.Fs)(t.vecs.entries(),iE.Ts,iE.Tj(t=>{let e,[n,i]=t;return[n,(e=iA.fromUndefinedOr(l.get(n)),iA.isSome(e)?[...e.value,...i]:i)]}))),d=iz(s),c=iN(d),[p,u]=d;if(null===c||p===tk||u===tk)return{...t,vecs:s,points:d,cursor:c};let h=(n=t.dists,i=Math.sqrt((o=p,r=u,Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2))),a=Math.pow((n.length>0?n[0]:i)-i,2),0===n.length||a>0?[i,...n]:n),x=function(t){let[e,n,i,o]=t;return e===tk||n===tk||i===tk||o===tk?null:e<n&&n<i&&i<o?-1:e>n&&n>i&&i>o?1:null}(h);return{vecs:s,points:d,cursor:c,dists:h,z:x,horizontal:t.horizontal}}(h,x.ev):"TOUCH.END"===x.type?(d=iO(x.ev),u=iN(p=iz(c=new Map((0,E.Fs)(h.vecs.entries(),iE.Ts,iE.x1(t=>{let[e,n]=t;return d.has(e)?iT.xT:iT.Py([e,n])}))))),{vecs:c,points:p,cursor:u,dists:0===c.size?[]:h.dists,z:0===c.size?null:h.z,horizontal:h.horizontal}):h}}),raiseOp:(0,K.r)(t=>{let{event:e}=t;return"TOUCH.START"===e.type?{type:"STARTED"}:"TOUCH.MOVE"===e.type?{type:"MOVED"}:"TOUCH.END"===e.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,G.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,G.a)({mode:"pan"}),enterPinch:(0,G.a)({mode:"pinch"}),emitMulti:(0,eO.a)(t=>{let{context:{touches:e}}=t;return{type:"MULTI",touches:e}}),emitZoom:(0,eO.a)(t=>{let{context:{touches:e}}=t;return{type:"ZOOM",touches:e}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,K.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,K.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,K.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),iR=(0,K.c)(iM),iF=!1;function i$(t){iR.send({type:"TOUCH.START",ev:t})}function iC(t){iR.send({type:"TOUCH.MOVE",ev:t})}function iL(t){iR.send({type:"TOUCH.END",ev:t})}function iI(){iR.send({type:"CANCEL"})}function iP(t){nD||nb({type:"SEARCH",pos:{x:t.pageX,y:t.pageY}})}function iH(t){if(null!==t){let e,n,i;(e=eh.get("S"))&&clearTimeout(e),n=setTimeout(()=>{eh.delete("S"),Array.from(eg,t=>{let[,e]=t;return t9(e,"locked",!1)})},200),eh.set("S",n),Array.from(eg,t=>{let[,e]=t;return t9(e,"locked",!0)}),i=t,J(Q.eventTick,i)}}function iU(t){let e=(0,g.useRef)(null);return te(e4,e,"container"),ih(e),te(er,e,"container"),te(ev,e,"container"),te(ib,e,"container"),(0,v.jsxs)("div",{ref:e,id:"viewer",className:"container",onTouchStart:i$,onTouchMove:iC,onTouchEnd:iL,onClick:iP,onContextMenu:iS,onScroll:iH,onAnimationEnd:t=>{var e;e={type:"ANIMATION.END",ev:t},e.ev?.stopPropagation(),nb(e),_(tt.animationEnd)},children:[t.children,(0,v.jsx)("style",{children:iW})]})}iR.on("MULTI",t=>{let{touches:e}=t;2===e.vecs.size?(iF=!0,_(ng.multiStart)):(_(ng.multiEnd),iF=!1)}),iR.on("ZOOM",t=>{let e,{touches:n}=t,i=n.cursor,o=n.z;null!==i&&null!==o&&(e={z:o>0?1:-1,p:i},J(ng.zoom,e))});let iW=`
.container {
  ${to}
  ${tu}

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
  ${to}
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
  animation: xxx-appearing 2s ${tv};
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
`;function iY(){return null!==document.querySelector(".container")}var iZ=n(3071);async function iB(t){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(t){n(t)},{enableHighAccuracy:!0,timeout:t,maximumAge:0})})}let iV=(0,q.mj)({types:{events:{},emitted:{}},actors:{api:(0,iZ.Sx)(()=>iB(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,G.a)({position:t=>{let{event:e}=t;return e.output}}),(0,eO.a)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,G.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),iq=(0,K.c)(iV);function iG(t){let[e,n]=t;return n.map(t=>[e,t])}function iK(t){return t.reduce(function(t,e){let[n,i]=e,o=new Set([...t.get(n)??new Set,i]);return new Map([...t,[n,o]])},new Map)}function iX(t){return iK(Array.from(t).flatMap(iG).map(t=>{let[e,n]=t;return[n,e]}))}let i_=(0,h.e)(null),iJ=(0,h.e)(null),iQ=(0,h.e)(null),i0=(0,h.e)(null),i1=(0,q.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,eO.a)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eO.a)(t=>{let{event:e}=t;return e}),target:"Done"}}},Done:{always:"Idle"}}}),i2=(0,K.c)(i1);function i5(t){i2.send(t)}i2.on("SEARCH",t=>{let{req:{psvg:e}}=t,n=m.get().mapCoord.matrix.inverse().transformPoint(e),i=eC.get();i3.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:i}})}),i2.on("SEARCH.DONE",t=>{let e,{res:n}=t;return e=n,J(nx.end,e)});let i3=new Worker(new URL(n.p+n.u(559),n.b),Object.assign({},{type:"module"},{type:void 0}));i3.onmessage=async t=>{let e=t.data;switch(e.type){case"INIT.DONE":return i5({type:"INIT.DONE"});case"SEARCH.DONE":var n;let i;return(n=e.res,i=m.get(),Promise.resolve((t=>{let e=m.get().searchNames,n=(()=>{let t,e=m.get();if(e.getInfoByName)return e.getInfoByName;let n=i0.get();if(null!==n)return n;let i=(t=e.searchInfos??[],e=>(t=>{let e=iQ.get();if(null!==e)return e;let n=new Map(t.map(t=>[t.name,t.info]));return iQ.set(n),n})(t??[]).get(e)||null);return i0.set(i),i})();if(void 0===e||void 0===n)return null;let i=(t=>{let e=iJ.get();if(null!==e)return e;let n=iX(t);return iJ.set(n),n})((t=>{let e=i_.get();if(null!==e)return e;let n=t.map(t=>[t.name,t.addresses]);return i_.set(n),n})(e)).get(t.address);return void 0===i||i.size<1?null:n(Array.from(i)[0])})(n)).then(t=>null!==t?t:i.getSearchInfo(n,i.mapMap,i.osmSearchEntries)).then(t=>null===t?(console.log("info not found!",n),i5({type:"SEARCH.DONE",res:null})):i5({type:"SEARCH.DONE",res:{psvg:i.mapCoord.matrix.transformPoint(n.floorPos.coord),fidx:n.floorPos.fidx,info:t}}))).catch(t=>console.log("SEARCH.DONE",t));case"SEARCH.ERROR":return console.log("search error!",e.error),i5({type:"SEARCH.DONE",res:null})}},i3.onerror=t=>{console.error("search error",t)},i3.onmessageerror=t=>{console.error("search messageerror",t)};var i6=n(5318);let i7=Math.round,i4=document.createElement("div"),i8=new Map,i9=()=>{let t=m.get();var e=t.cartoConfig?.backgroundColor??t.backgroundColor??"darkgray";let n=i8.get(e);if(n)return n;i4.style.color=e,document.body.appendChild(i4);let i=getComputedStyle(i4).color;return document.body.removeChild(i4),i8.set(e,i),i},ot=new Map,oe=new Map;function on(t){let e=(()=>{let t=ot.get("color");if(t)return t;let e=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:i9()});return e.parentNode||document.head.appendChild(e),ot.set("color",e),e})(),n={color:e.getAttribute("content")||i9()},{p:i,q:o}=(()=>{var t;let e=i9(),n=oe.get(e);if(n)return{p:e,q:n};let i=function(t){let{r:e,g:n,b:i}=t;return`rgb(${i7(e)}, ${i7(n)}, ${i7(i)})`}({r:(t=function(t){let e=t.match(/\d+/g);if(!e||3!==e.length)throw Error("invalid color!");let n=Number(e[0]);return{r:n,g:Number(e[1]),b:Number(e[2])}}(e)).r/2,g:t.g/2,b:t.b/2});return oe.set(e,i),{p:e,q:i}})(),r=t?o:i;(0,i6.i)(n,{color:r,duration:400,ease:"outQuad",onRender:()=>e.setAttribute("content",n.color)}),(0,i6.i)(document.body,{backgroundColor:r,duration:400,ease:"outQuad"}),(0,i6.i)(".container",{opacity:t?.5:1,duration:400,ease:"outQuad"})}function oi(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}let oo=(0,q.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:t=>{let{event:{key:e}}=t;return"r"===e},shouldRecenter:t=>{let{event:{key:e}}=t;return"c"===e},shouldRotate:t=>{let{event:{key:e}}=t;return"t"===e},shouldZoom:t=>{let{event:{key:e}}=t;return 0!==oi(e)},shouldFloorLevelUp:t=>{let{event:{key:e}}=t;return"u"===e},shouldFloorLevelDown:t=>{let{event:{key:e}}=t;return"d"===e}},actions:{reset:(0,eO.a)({type:"RESET"}),recenter:(0,eO.a)({type:"RECENTER"}),rotate:(0,eO.a)({type:"ROTATE"}),zoom:(0,eO.a)((t,e)=>{let{z:n}=e;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,eO.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,eO.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,G.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"===e||n,alt:"Alt"===e||i,control:"Control"===e||o}})(e.mod,n.key)}}),handleUp:(0,G.a)({mod:t=>{let{context:e,event:n}=t;return((t,e)=>{let{shift:n,alt:i,control:o}=t;return{shift:"Shift"!==e&&n,alt:"Alt"!==e&&i,control:"Control"!==e&&o}})(e.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:t=>{let{event:{key:e}}=t;return{z:oi(e)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),or=(0,K.c)(oo);or.on("RESET",nu),or.on("RECENTER",nh),or.on("ROTATE",np),or.on("ZOOM.IN",nd),or.on("ZOOM.OUT",nc),or.on("FLOOR.LEVEL.UP",()=>_(eN.levelUp)),or.on("FLOOR.LEVEL.DOWN",()=>_(eN.levelDown));let oa=(0,q.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:R,next:R,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,G.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,K.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:t=>{let{context:e}=t;return console.log("resize: ignoring height-only change",e)},target:"Idle"},{guard:t=>{let{context:e}=t;return!F(e.prev,e.next)},actions:[(0,G.a)({waited:0}),(0,eO.a)(t=>{var e,n,i,o;let r,a,{context:l}=t,s=m.get();return{type:"LAYOUT",layout:(e=s.fontSize,n=l.next,r=$((o={config:i=function(t,e,n,i){var o;let r,a,l,s,{outer:d,scale:c}=(o=i??n,r=e.width/e.height,s=(l=r>(a=o.width/o.height))?t2(e,a):t5(e,a),{outer:s,inner:l?t2(o,r):t5(o,r),scale:l?o.height/e.height:o.width/e.width,rO:r,rI:a,v:l});return{fontSize:t,container:e,outer:d,inner:i??n,svgScale:c}}(e,n,s.origViewBox,s.origBoundingBox),...tJ(i)}).scroll),a=o.container.width/o.container.height,t7(o,a<1?1/a:1,a<1?1:+a,r)),force:!l.first}}),(0,G.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,G.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,K.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:t=>{let{context:{next:e}}=t;return F(e,ek.get().container)},actions:(0,G.a)({prev:t=>{let{context:{next:e}}=t;return e}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),ol=(0,K.c)(oa);ol.on("LAYOUT",t=>{let e;return e=t,J(tt.resize,e)}),window.addEventListener("resize",()=>{ol.send({type:"RESIZE"})});let os=(0,q.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,G.a)({ticked:!1}),set:(0,G.a)({ticked:!0}),expire:(0,eO.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),od=(0,q.mj)({types:{},actions:{getScroll:(0,G.a)({scroll:t=>{let{context:e}=t;return function(t){let e=ib.get(t);if(e)return M(e.scrollLeft,e.scrollTop,e.scrollWidth,e.scrollHeight)}("container")??e.scroll}}),syncScroll:(t,e)=>{let{pos:n}=e;return iD(n,"container")}},actors:{syncScrollLogic:(0,iZ.Sx)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!iD(e,"container"))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,eO.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,G.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,eO.a)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,G.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),oc=(0,K.c)(od,{systemId:"system-scroll1"});function op(t){oc.send(t)}oc.on("SCROLL.GET.DONE",t=>{let e,{scroll:n}=t;return e=n,J(Q.getDone,e)}),oc.on("SCROLL.SYNCSYNC.DONE",t=>{let e,{scroll:n}=t;return e=n,J(Q.syncSyncDone,e)});let ou=(u=()=>_(Q.eventExpire),c=os.provide({delays:{DURATION:500}}),(p=(0,K.c)(c)).on("EXPIRE",u),p.start(),{tick:function(){p.send({type:"TICK"})}}),oh=(0,h.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function ox(t){var e;t.getMapNames&&(e=t.getMapNames({data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig}),oh.trigger.set({names:e}))}async function og(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let of=`
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
`,oy=`
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
  ${to}
  ${tu}
  ${tc}
  ${tp}
  ${tf}
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
${of}
`,om=function(){let t,e=w(),n=e.cartoConfig?.backgroundColor??e.backgroundColor??"darkgray",i={data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig};return t=ej(t=>t.rendered),(0,g.useEffect)(()=>{requestAnimationFrame(()=>eF())},[t]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(iU,{...i,children:e.renderMap(i)}),(0,v.jsx)(im,{}),(0,v.jsxs)("style",{children:[oy,`body { background-color: ${n}; }`]})]})};function ow(t){return eB(`map-floors-html-labels-${t.fidx}`,(0,v.jsx)(ov,{...t}),"map-floors-html"),(0,v.jsx)("div",{id:`map-floors-html-labels-${t.fidx}`})}function ov(t){let{labels:e}=t;return(0,v.jsxs)("div",{className:"labels",children:[e?.map((t,e)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(oS,{_text:t})},e)),(0,v.jsx)("style",{children:ob})]})}function oS(t){let{_text:e}=t;return(0,v.jsx)("div",{className:"label",style:{"--x":(e.attrs?.x||0)+"px","--y":(e.attrs?.y||0)+"px","--rotate":(e.attrs?.rotate||0)+"deg","--scale2":(e.attrs?.scale2||1)+"","--scale1":(e.attrs?.scale1||1)+""},children:e.children?.map((t,e)=>(0,v.jsx)("p",{children:t.text??""},e))})}let ob=`
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
`;function oD(t){let e=(0,g.useRef)(null);return te(en,e,"map-floors-html-content"),eB("map-floors-html",(0,v.jsx)(ok,{...t})),(0,v.jsx)("div",{ref:e,id:"map-floors-html",className:"content"})}function ok(t){return(0,v.jsxs)("div",{className:"map-floors-html-content",children:[(0,v.jsx)(oE,{...t}),(0,v.jsx)("style",{children:oA})]})}function oE(t){let{floors:e}=t,n=(0,g.useRef)(null);return te(en,n,"map-floors-html"),(0,v.jsx)("div",{ref:n,className:"map-floors-html",children:e?.floors.map((t,n)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(oT,{fidx:n,floor:t,labelsMap:e?.labelsMap})},n))})}let oA=`
.map-floors-html {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
  transform: var(--layout-svg-to-content-matrix) !important;
  transform-origin: 0% 0% !important;
}
`;function oT(t){let{fidx:e,floor:n,labelsMap:i}=t,o=(0,g.useRef)(null);return te(e$,o,`html-${e}`),(0,v.jsx)("div",{ref:o,className:`floor fidx-${e}`,children:(0,v.jsx)(ow,{fidx:e,labels:n.labels??function(t,e){if(void 0===t)return;let n=Array.from(oj.values());if(1===n.length)return n[0].get(e);let i=t instanceof Map?t:new Map(t instanceof Array?t:Object.entries(t));return oj.add(i),i.get(e)}(i,n.name.toLowerCase())})})}let oj=new Set;function oz(t){let{floors:e,data:{origViewBox:n}}=t,i=(0,g.useRef)(null);te(en,i,"map-floors-svg");let o=eH();return(0,v.jsxs)("div",{ref:i,className:"content map-floors-svg",children:[(0,v.jsx)(oO,{children:e?.floors.map((t,e)=>(0,v.jsx)(g.Fragment,{children:(0,v.jsx)(oM,{fidx:e,origViewBox:n,ctx:o})},e))}),(0,v.jsx)("style",{children:oN})]})}let oN=`
svg.content-svg {
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
${tD}
`;function oO(t){let e=(0,g.useRef)(null),{viewBox:n}=function(){let{svg:t}=ej(t=>t.layout);return{viewBox:I(t)}}();return te(en,e,"floors-svg"),(0,v.jsx)("svg",{ref:e,id:"map-svg-floors",className:"content-svg",viewBox:n,children:t.children})}function oM(t){let{fidx:e,origViewBox:n,ctx:{fidxToOnAnimationEnd:i,urls:o}}=t,r=(0,g.useRef)(null);return te(e$,r,`svg-${e}`),(0,v.jsx)("g",{ref:r,className:`floor fidx-${e}`,onAnimationEnd:i(e),children:(0,v.jsx)(oR,{fidx:e,origViewBox:n,url:o.get(e)})})}function oR(t){let{origViewBox:e,url:n}=t;return(0,v.jsx)("image",{x:e.x,y:e.y,width:e.width,height:e.height,href:n})}var oF=JSON.parse('["1F","2F","3F","4F","5F"]'),o$=JSON.parse('{"2F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"サーティワン アイスクリーム","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text4","style":"font-size:9.44882px;display:inline","x":"2787.5996","y":"998.41638"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan3","x":"2787.5996","y":"998.41638"},"text":"サーティワン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan4","x":"2787.5996","y":"1013.4884"},"text":"アイスクリーム"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"新橋　まこちゃん","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text6","style":"font-size:9.44882px;display:inline","x":"2673.3665","y":"1010.5534"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan5","x":"2673.3665","y":"1010.5534"},"text":"新橋"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan6","x":"2673.3665","y":"1025.6255"},"text":"まこちゃん"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"とんかつ檍","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text7","style":"font-size:9.44882px;display:inline","x":"2620.6196","y":"1017.2889"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan7","x":"2620.6196","y":"1017.2889"},"text":"とんかつ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2620.6196","y":"1032.361","id":"tspan79"},"text":"檍"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"羅家 東京豚饅","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text9","style":"font-size:9.44882px;display:inline","x":"2569.9602","y":"1024.5345"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan8","x":"2569.9602","y":"1024.5345"},"text":"羅家"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan9","x":"2569.9602","y":"1039.6066"},"text":"東京豚饅"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"おにぎり戸越屋","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text10","style":"font-size:9.44882px;display:inline","x":"2518.5298","y":"1031.4921"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan10","x":"2518.5298","y":"1031.4921"},"text":"おにぎり"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2518.5298","y":"1046.5641","id":"tspan80"},"text":"戸越屋"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Soup Stock Tokyo","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text40","style":"font-size:9.44882px;display:inline","x":"2461.2639","y":"1025.584"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan11","x":"2461.2639","y":"1025.584"},"text":"Soup"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan12","x":"2461.2639","y":"1039.7572"},"text":"Stock"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan40","x":"2461.2639","y":"1053.9304"},"text":"Tokyo"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"どうとんぼり神座","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text41","style":"font-size:13.2283px;display:inline","x":"2330.5967","y":"1023.2877"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan41","x":"2330.5967","y":"1023.2877"},"text":"どうとんぼり"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2330.5967","y":"1044.3885","id":"tspan81"},"text":"神座"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"セブン-イレブン","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text42","style":"font-size:18.8976px;display:inline","x":"2216.8967","y":"1026.2222"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan42","x":"2216.8967","y":"1026.2222"},"text":"セブン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2216.8967","y":"1056.3662","id":"tspan82"},"text":"イレブン"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"L\'Atelier du Pain","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text45","style":"font-size:13.2283px;display:inline","x":"2068.2686","y":"1033.8206"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan43","x":"2068.2686","y":"1033.8206"},"text":"L\'Atelier"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan44","x":"2068.2686","y":"1053.663"},"text":"du"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan45","x":"2068.2686","y":"1073.5055"},"text":"Pain"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"マーキーズ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text46","style":"font-size:15.1181px;display:inline","x":"1853.8854","y":"1081.0035"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan46","x":"1853.8854","y":"1081.0035"},"text":"マーキーズ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Cath Kidston","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text48","style":"font-size:15.1181px;display:inline","x":"1714.8224","y":"1075.2797"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan47","x":"1714.8224","y":"1075.2797"},"text":"Cath"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan48","x":"1714.8224","y":"1097.9568"},"text":"Kidston"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ANTIDOTE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text49","style":"font-size:15.1181px;display:inline","x":"1560.8635","y":"1090.3881"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan49","x":"1560.8635","y":"1090.3881"},"text":"ANTIDOTE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"TULLY\'S COFFEE ＆TEA","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text52","style":"font-size:11.3386px;display:inline","x":"1442.4896","y":"1077.2101"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan50","x":"1442.4896","y":"1077.2101"},"text":"TULLY\'S"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan51","x":"1442.4896","y":"1094.218"},"text":"COFFEE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan52","x":"1442.4896","y":"1112.3044"},"text":"＆TEA"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"NATURE&MEAT GROVE PARK VIEW","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text56","style":"font-size:9.44882px;display:inline","x":"1334.7532","y":"1071.632"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan53","x":"1334.7532","y":"1071.632"},"text":"NATURE&MEAT"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan54","x":"1334.7532","y":"1085.8052"},"text":"GROVE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan55","x":"1334.7532","y":"1099.9784"},"text":"PARK"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan56","x":"1334.7532","y":"1114.1516"},"text":"VIEW"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Standard Products","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text58","style":"font-size:18.8976px;display:inline","x":"1517.7758","y":"931.86243"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan57","x":"1517.7758","y":"931.86243"},"text":"Standard"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan58","x":"1517.7758","y":"960.2088"},"text":"Products"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"TSUTAYA BOOKSTORE","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text60","style":"font-size:18.8976px;display:inline","x":"1816.5016","y":"925.35767"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1816.5016","y":"925.35767","id":"tspan85"},"text":"TSUTAYA BOOKSTORE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"スターバックス（TSUTAYA BOOKSTORE）","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text62","style":"font-size:18.8976px;display:inline","x":"1816.063","y":"956.09363"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan62","x":"1816.063","y":"956.09363"},"text":"スターバックス"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pet Plus Trimming Salon","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text66","style":"font-size:9.44882px;display:inline","x":"1264.4543","y":"811.8501"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan64","x":"1264.4543","y":"811.8501"},"text":"Pet Plus"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan65","x":"1264.4543","y":"826.02332"},"text":"Trimming"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan66","x":"1264.4543","y":"840.19653"},"text":"Salon"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pet Plus","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text68","style":"font-size:17.0079px;display:inline","x":"1336.2533","y":"769.30249"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan68","x":"1336.2533","y":"769.30249"},"text":"Pet Plus"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"shop in","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text70","style":"font-size:15.1181px;display:inline","x":"1546.3979","y":"768.39136"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan70","x":"1546.3979","y":"768.39136"},"text":"shop in"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"JINS","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text71","style":"font-size:17.0079px;display:inline","x":"1670.5765","y":"754.69067"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan71","x":"1670.5765","y":"754.69067"},"text":"JINS"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ウエルシア","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text72","style":"font-size:17.0079px;display:inline","x":"1814.3438","y":"754.68951"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan72","x":"1814.3438","y":"754.68951"},"text":"ウエルシア"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"AKOMEYA TOKYO","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text74","style":"font-size:15.1181px;display:inline","x":"1969.8876","y":"729.40918"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan73","x":"1969.8876","y":"729.40918"},"text":"AKOMEYA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan74","x":"1969.8876","y":"752.0863"},"text":"TOKYO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"cotta","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text75","style":"font-size:13.2283px;display:inline","x":"2322.8413","y":"893.21912"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan75","x":"2322.8413","y":"893.21912"},"text":"cotta"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ビオラル","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text76","style":"font-size:13.2283px;display:inline","x":"2412.207","y":"862.59937"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan76","x":"2412.207","y":"862.59937"},"text":"ビオラル"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ライフ","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text77","style":"font-size:45.3543px;display:inline","x":"2769.2427","y":"759.17041"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan77","x":"2769.2427","y":"759.17041"},"text":"ライフ"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ポニークリーニング","font-family":"\'Noto Sans\'","font-size":"5","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text78","style":"font-size:7.55906px;display:inline","x":"2972.7759","y":"863.40674"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan78","x":"2972.7759","y":"863.40674"},"text":"ポニー"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2972.7759","y":"875.46436","id":"tspan87"},"text":"クリーニング"}]}],"3F":[{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"WOODBERRY COFFEE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text176","x":"2781.1768","y":"1000.8459","style":"font-size:10.3937px"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan175","x":"2781.1768","y":"1000.8459"},"text":"WOODBERRY"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan176","x":"2781.1768","y":"1016.4365"},"text":"COFFEE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"リンツ ショコラ ブティック","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text179","style":"font-size:8.50394px","x":"2640.6299","y":"1021.9713"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan177","x":"2640.6299","y":"1021.9713"},"text":"リンツ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan178","x":"2640.6299","y":"1035.5361"},"text":"ショコラ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan179","x":"2640.6299","y":"1049.101"},"text":"ブティック"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"SuiSavon-首里石鹸-","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text180","style":"font-size:7.55906px","x":"2559.3796","y":"1036.1885"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan180","x":"2559.3796","y":"1036.1885"},"text":"SuiSavon"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2559.3796","y":"1048.2461","id":"tspan240"},"text":"-首里石鹸-"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ANEMONE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text181","style":"font-size:8.50394px","x":"2462.3965","y":"1049.2201"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan181","x":"2462.3965","y":"1049.2201"},"text":"ANEMONE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"FACTORY MARKET","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text183","style":"font-size:7.55906px","x":"2407.748","y":"1041.4243"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan182","x":"2407.748","y":"1041.4243"},"text":"FACTORY"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan183","x":"2407.748","y":"1052.7629"},"text":"MARKET"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ロクシタン","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text184","style":"font-size:8.50394px","x":"2356.291","y":"1046.563"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan184","x":"2356.291","y":"1046.563"},"text":"ロクシタン"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ACE Bags & Luggage","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text188","style":"font-size:7.55906px","x":"2304.637","y":"1029.2334"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan185","x":"2304.637","y":"1029.2334"},"text":"ACE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan186","x":"2304.637","y":"1040.572"},"text":"Bags"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan187","x":"2304.637","y":"1051.9105"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan188","x":"2304.637","y":"1063.2491"},"text":"Luggage"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"WithGreen","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text189","style":"font-size:9.44882px","x":"2230.7805","y":"1051.5284"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan189","x":"2230.7805","y":"1051.5284"},"text":"WithGreen"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ロジウラカリィ サムライ.","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text191","style":"font-size:7.55906px","x":"2167.8501","y":"1051.186"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan190","x":"2167.8501","y":"1051.186"},"text":"ロジウラカリィ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan191","x":"2167.8501","y":"1063.2437"},"text":"サムライ."}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"そば道","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text192","style":"font-size:11.3386px","x":"2064.1096","y":"1065.1399"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan192","x":"2064.1096","y":"1065.1399"},"text":"そば道"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"仲卸直営 とろぼっち","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text194","style":"font-size:10.3937px","x":"1834.3767","y":"1075.9238"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan193","x":"1834.3767","y":"1075.9238"},"text":"仲卸直営"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan194","x":"1834.3767","y":"1092.5031"},"text":"とろぼっち"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Mare & Oyster","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text197","style":"font-size:10.3937px","x":"1597.9531","y":"1091.9186"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1597.9531","y":"1091.9186","id":"tspan243"},"text":"Mare & Oyster"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"Pizzeria&Trattoria GONZO","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text199","style":"font-size:15.1181px","x":"1382.3188","y":"1083.5612"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan198","x":"1382.3188","y":"1083.5612"},"text":"Pizzeria&Trattoria"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan199","x":"1382.3188","y":"1106.2383"},"text":"GONZO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"yellow 大井町","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text201","style":"font-size:13.2283px","x":"1553.146","y":"908.27899"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan200","x":"1553.146","y":"908.27899"},"text":"yellow"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan201","x":"1553.146","y":"929.37976"},"text":"大井町"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"SHARE LOUNGE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text203","style":"font-size:22.6772px","x":"1795.7881","y":"928.75885"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan202","x":"1795.7881","y":"928.75885"},"text":"SHARE"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan203","x":"1795.7881","y":"962.77466"},"text":"LOUNGE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"シズラー","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text204","style":"font-size:22.6772px","x":"760.07147","y":"806.27069"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan204","x":"760.07147","y":"806.27069"},"text":"シズラー"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ＴＯＨＯシネマズ 大井町","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text206","style":"font-size:22.6772px;display:inline","x":"1322.0604","y":"603.41748"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan205","x":"1322.0604","y":"603.41748"},"text":"ＴＯＨＯシネマズ"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan206","x":"1322.0604","y":"639.59045"},"text":"大井町"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"玉","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text207","style":"font-size:15.1181px","x":"1491.7375","y":"756.6944"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan207","x":"1491.7375","y":"756.6944"},"text":"玉"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"青龍門","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text208","style":"font-size:9.44882px","x":"1629.8827","y":"666.57111"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan208","x":"1629.8827","y":"666.57111"},"text":"青龍門"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"大かまど飯 寅福 大井町食堂","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text211","x":"1686.387","y":"656.8869"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan209","x":"1686.387","y":"656.8869"},"text":"大かまど飯"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan210","x":"1686.387","y":"664.86255"},"text":"寅福"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan211","x":"1686.387","y":"672.83813"},"text":"大井町食堂"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"韓美膳","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text212","style":"font-size:9.44882px","x":"1743.1694","y":"666.58527"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan212","x":"1743.1694","y":"666.58527"},"text":"韓美膳"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"鰹水・肉汁つけうどん凜","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text213","x":"1787.5175","y":"701.39545"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan213","x":"1787.5175","y":"701.39545"},"text":"鰹水・肉汁"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1787.5175","y":"709.37109","id":"tspan244"},"text":"つけうどん"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"1787.5175","y":"717.34668","id":"tspan245"},"text":"凜"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"È PRONTO","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text215","style":"font-size:5.66929px","x":"1881.7725","y":"739.34955"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan214","x":"1881.7725","y":"739.34955"},"text":"È"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan215","x":"1881.7725","y":"747.85345"},"text":"PRONTO"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"47CREPE","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text216","style":"font-size:7.55906px","x":"1686.5643","y":"774.51959"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan216","x":"1686.5643","y":"774.51959"},"text":"47CREPE"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"青山フラワーマーケット","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text217","style":"font-size:9.44882px","x":"2395.1636","y":"851.39252"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan217","x":"2395.1636","y":"851.39252"},"text":"青山"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","x":"2395.1636","y":"866.46454","id":"tspan59"},"text":"フラワーマーケット"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"中川政七商店","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text218","style":"font-size:13.2283px","x":"2549.7512","y":"841.84753"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan218","x":"2549.7512","y":"841.84753"},"text":"中川政七商店"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ISHIYA G","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text220","x":"2654.2739","y":"859.06152"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan219","x":"2654.2739","y":"859.06152"},"text":"ISHIYA"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan220","x":"2654.2739","y":"866.56152"},"text":"G"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"和菓子 結","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text222","x":"2689.4561","y":"858.93121"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan221","x":"2689.4561","y":"858.93121"},"text":"和菓子"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan222","x":"2689.4561","y":"866.90686"},"text":"結"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"きりのさか by 中央軒煎餅","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text225","x":"860.94336","y":"-2709.771","transform":"rotate(90)","style":"font-size:3.77953px"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan223","x":"860.94336","y":"-2709.771"},"text":"きりのさか"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan225","x":"860.94336","y":"-2703.7422"},"text":"by 中央軒煎餅"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"ラ・メゾン アンソレイユターブル パティスリー","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text228","x":"860.92163","y":"-2741.8486","style":"font-size:2.83465px","transform":"rotate(90)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan226","x":"860.92163","y":"-2741.8486"},"text":"ラ・メゾン"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan227","x":"860.92163","y":"-2737.3269"},"text":"アンソレイユターブル"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan228","x":"860.92163","y":"-2732.8054"},"text":"パティスリー"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"DEAN & DELUCA","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text231","style":"font-size:11.3386px","x":"2847.4226","y":"750.16962"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan229","x":"2847.4226","y":"750.16962"},"text":"DEAN"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan230","x":"2847.4226","y":"767.17749"},"text":"&"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan231","x":"2847.4226","y":"784.18542"},"text":"DELUCA"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"治一郎","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text232","style":"font-size:10.3937px","x":"2694.7891","y":"810.95435"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan232","x":"2694.7891","y":"810.95435"},"text":"治一郎"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"les joues de bébé","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text236","style":"font-size:15.1181px","x":"2653.2681","y":"683.55872"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan234","x":"2653.2681","y":"683.55872"},"text":"les joues"},{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan236","x":"2653.2681","y":"706.23584"},"text":"de bébé"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"NewDays","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text237","style":"font-size:11.3386px","x":"3187.363","y":"734.61945"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan237","x":"3187.363","y":"734.61945"},"text":"NewDays"}]},{"attrs":{"{http://www.inkscape.org/namespaces/inkscape}label":"そばいち","font-family":"\'Noto Sans\'","font-size":"5px","font-weight":"200","line-height":"1.5","text-anchor":"middle","text-align":"center","writing-mode":"lr-tb","direction":"ltr","fill":"#000000","stroke":"none","id":"text238","style":"display:inline;font-size:10.3937px","x":"3187.967","y":"876.95392","transform":"translate(0.31615,-0.02507)"},"children":[{"attrs":{"{http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd}role":"line","id":"tspan238","x":"3187.967","y":"876.95392"},"text":"そばいち"}]}]}');let oC=oF.map(t=>({name:t,href:n(4303)(`./floor-${t}.svg`),labels:o$?.[t]??void 0}));function oL(t,e){return Object.entries(t).map(t=>{let[n,i]=t;return[n,{coord:i,fidx:e}]})}var oI=JSON.parse('{"A1F-Content-(ViewBox)":{"x":0,"y":0}}'),oP=JSON.parse('{"A2F-Content-(ViewBox)":{"x":0,"y":0},"A2F-Shops-1":{"x":2787.633,"y":1002.343},"A2F-Shops-2":{"x":2673.916,"y":1013.549},"A2F-Shops-3":{"x":2620.812,"y":1020.774},"A2F-Shops-4":{"x":2569.678,"y":1027.821},"A2F-Shops-5":{"x":2518.34,"y":1034.889},"A2F-Shops-6":{"x":2461.124,"y":1037.392},"A2F-Shops-7":{"x":2330.392,"y":1029.023},"A2F-Shops-8":{"x":2216.639,"y":1033.387},"A2F-Shops-9":{"x":2068.837,"y":1048.702},"A2F-Shops-10":{"x":1854.286,"y":1074.941},"A2F-Shops-11":{"x":1714.966,"y":1080.949},"A2F-Shops-12":{"x":1560.402,"y":1084.983},"A2F-Shops-13":{"x":1442.217,"y":1090.732},"A2F-Shops-14":{"x":1335.221,"y":1089.467},"A2F-Shops-15":{"x":1521.3,"y":939.432},"A2F-Shops-16":{"x":1816.168,"y":933.897},"A2F-Shops-17":{"x":1264.299,"y":821.759},"A2F-Shops-18":{"x":1336.729,"y":762.924},"A2F-Shops-19":{"x":1546.088,"y":764.415},"A2F-Shops-20":{"x":1669.335,"y":750.039},"A2F-Shops-21":{"x":1814.93,"y":748.175},"A2F-Shops-22":{"x":1969.88,"y":735.343},"A2F-Shops-23":{"x":2322.683,"y":888.927},"A2F-Shops-24":{"x":2412.665,"y":857.226},"A2F-Shops-25":{"x":2769.278,"y":742.101},"A2F-Shops-26":{"x":2973.231,"y":865.979}}'),oH=JSON.parse('{"A3F-Content-(ViewBox)":{"x":0,"y":0},"A3F-Shops-1":{"x":2781.327,"y":1004.926},"A3F-Shops-2":{"x":2640.63,"y":1032.658},"A3F-Shops-3":{"x":2559.444,"y":1038.576},"A3F-Shops-4":{"x":2462.137,"y":1045.036},"A3F-Shops-5":{"x":2408.133,"y":1044.353},"A3F-Shops-6":{"x":2356.584,"y":1043.297},"A3F-Shops-7":{"x":2304.8,"y":1042.113},"A3F-Shops-8":{"x":2230.525,"y":1047.985},"A3F-Shops-9":{"x":2167.85,"y":1053.335},"A3F-Shops-10":{"x":2064.49,"y":1060.792},"A3F-Shops-11":{"x":1834.647,"y":1080.149},"A3F-Shops-12":{"x":1716.762,"y":1086.47},"A3F-Shops-13":{"x":1598.4,"y":1089.408},"A3F-Shops-14":{"x":1382.47,"y":1089.495},"A3F-Shops-15":{"x":1553.212,"y":914.365},"A3F-Shops-16":{"x":1796.253,"y":937.671},"A3F-Shops-17":{"x":760.185,"y":797.12},"A3F-Shops-18":{"x":1323.637,"y":612.966},"A3F-Shops-19":{"x":1491.745,"y":751.138},"A3F-Shops-20":{"x":1629.731,"y":662.99},"A3F-Shops-21":{"x":1686.425,"y":662.99},"A3F-Shops-22":{"x":1743.117,"y":662.99},"A3F-Shops-23":{"x":1787.502,"y":707.466},"A3F-Shops-24":{"x":1881.883,"y":740.937},"A3F-Shops-25":{"x":1686.425,"y":771.821},"A3F-Shops-26":{"x":2395.112,"y":855.286},"A3F-Shops-27":{"x":2550.075,"y":836.86},"A3F-Shops-28":{"x":2654.414,"y":861.026},"A3F-Shops-29":{"x":2689.404,"y":861.026},"A3F-Shops-30":{"x":2707.787,"y":861.026},"A3F-Shops-31":{"x":2738.425,"y":861.026},"A3F-Shops-32":{"x":2847.995,"y":763.175},"A3F-Shops-33":{"x":2694.737,"y":807.026},"A3F-Shops-34":{"x":2653.601,"y":689.228},"A3F-Shops-35":{"x":3187.684,"y":731.943},"A3F-Shops-36":{"x":3187.686,"y":873.025}}'),oU=JSON.parse('{"A4F-Content-(ViewBox)":{"x":0,"y":0}}'),oW=JSON.parse('{"A5F-Content-(ViewBox)":{"x":0,"y":0}}');let oY=[...oL(oI,0),...oL(oP,1),...oL(oH,2),...oL(oU,3),...oL(oW,4)],oZ=Object.values(JSON.parse('{"1F":{},"2F":{"サーティワン アイスクリーム":["A2F-Shops-1"],"新橋　まこちゃん":["A2F-Shops-2"],"とんかつ檍":["A2F-Shops-3"],"羅家 東京豚饅":["A2F-Shops-4"],"おにぎり戸越屋":["A2F-Shops-5"],"Soup Stock Tokyo":["A2F-Shops-6"],"どうとんぼり神座":["A2F-Shops-7"],"セブン-イレブン":["A2F-Shops-8"],"L\'Atelier du Pain":["A2F-Shops-9"],"マーキーズ":["A2F-Shops-10"],"Cath Kidston":["A2F-Shops-11"],"ANTIDOTE":["A2F-Shops-12"],"TULLY\'S COFFEE ＆TEA":["A2F-Shops-13"],"NATURE&MEAT GROVE PARK VIEW":["A2F-Shops-14"],"Standard Products":["A2F-Shops-15"],"TSUTAYA BOOKSTORE":["A2F-Shops-16"],"スターバックス（TSUTAYA BOOKSTORE）":["A2F-Shops-16"],"Pet Plus Trimming Salon":["A2F-Shops-17"],"Pet Plus":["A2F-Shops-18"],"shop in":["A2F-Shops-19"],"JINS":["A2F-Shops-20"],"ウエルシア":["A2F-Shops-21"],"AKOMEYA TOKYO":["A2F-Shops-22"],"cotta":["A2F-Shops-23"],"ビオラル":["A2F-Shops-24"],"ライフ":["A2F-Shops-25"],"ポニークリーニング":["A2F-Shops-26"]},"3F":{"WOODBERRY COFFEE":["A3F-Shops-1"],"リンツ ショコラ ブティック":["A3F-Shops-2"],"SuiSavon-首里石鹸-":["A3F-Shops-3"],"ANEMONE":["A3F-Shops-4"],"FACTORY MARKET":["A3F-Shops-5"],"ロクシタン":["A3F-Shops-6"],"ACE Bags & Luggage":["A3F-Shops-7"],"WithGreen":["A3F-Shops-8"],"ロジウラカリィ サムライ.":["A3F-Shops-9"],"そば道":["A3F-Shops-10"],"仲卸直営 とろぼっち":["A3F-Shops-11"],"Mare & Oyster":["A3F-Shops-13"],"Pizzeria&Trattoria GONZO":["A3F-Shops-14"],"yellow 大井町":["A3F-Shops-15"],"SHARE LOUNGE":["A3F-Shops-16"],"シズラー":["A3F-Shops-17"],"ＴＯＨＯシネマズ 大井町":["A3F-Shops-18"],"玉":["A3F-Shops-19"],"青龍門":["A3F-Shops-20"],"大かまど飯 寅福 大井町食堂":["A3F-Shops-21"],"韓美膳":["A3F-Shops-22"],"鰹水・肉汁つけうどん凜":["A3F-Shops-23"],"È PRONTO":["A3F-Shops-24"],"47CREPE":["A3F-Shops-25"],"青山フラワーマーケット":["A3F-Shops-26"],"中川政七商店":["A3F-Shops-27"],"ISHIYA G":["A3F-Shops-28"],"和菓子 結":["A3F-Shops-29"],"きりのさか by 中央軒煎餅":["A3F-Shops-30"],"ラ・メゾン アンソレイユターブル パティスリー":["A3F-Shops-31"],"DEAN & DELUCA":["A3F-Shops-32"],"治一郎":["A3F-Shops-33"],"les joues de bébé":["A3F-Shops-34"],"NewDays":["A3F-Shops-35"],"そばいち":["A3F-Shops-36"]},"4F":{},"5F":{}}')).flatMap(function(t){return Object.entries(t)});iK(Array.from(oZ).flatMap(iG));let oB=iX(oZ);var oV=JSON.parse('{"x":0,"y":0,"width":3500.0,"height":1400.0}');!function(t){let e,n;eM.init.add(t=>{if(t.floorsConfig){let e=t.floorsConfig.floors.length,n=t.floorsConfig.initialFidx;eI.send({type:"INIT",nfloors:e,fidx:n}),eP.postMessage({type:"INIT",cfg:t.floorsConfig,base:t.base})}}),eN.select.add(t=>eI.send({type:"SELECT",fidx:t})),eN.levelUp.add(()=>eI.send({type:"LEVEL.UP"})),eN.levelDown.add(()=>eI.send({type:"LEVEL.DOWN"})),eN.selectDone.add(t=>eI.send({type:"SELECT.DONE",fidx:t})),ns.fullscreen.add(og),eM.init.add(ox),ns.position.add(()=>{var t;return t={type:"GET"},void iq.send(t)}),Q.eventTick.add(em),Q.eventTick.add(ou.tick),Q.get.add(()=>op({type:"GET"})),Q.sync.add(t=>op({type:"SYNC",pos:t})),Q.syncSync.add(t=>op({type:"SYNCSYNC",pos:t})),eM.init.add(t=>t.searchAddresses?Promise.resolve(t.searchAddresses).then(t=>{let e=t.map(t=>({...t,pos:t.floorPos}));i3.postMessage({type:"INIT",entries:e})}):t.getSearchEntries?Promise.resolve(t.getSearchEntries(t)).then(t=>{i3.postMessage({type:"INIT",entries:t})}):void 0),nx.start.add(function(t){i2.send({type:"SEARCH",req:t})}),tt.layout.add(function(t){let{layout:e,force:n}=t;eT({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>ez())}),tt.zoomStart.add(function(t){eT({type:"STYLE.ZOOM",...t}),eT({type:"STYLE.ANIMATION",animation:t.q})}),tt.zoomEnd.add(function(t){eT({type:"STYLE.ZOOM",zoom:t.zoom}),eT({type:"STYLE.ANIMATION",animation:t.q})}),tt.animationEnd.add(function(){eT({type:"STYLE.ANIMATION.END"})}),tt.mode.add(function(t){eT({type:"STYLE.MODE",mode:t})}),Q.eventExpire.add(ez),ns.reset.add(iI),ns.fullscreen.add(iI),ns.position.add(iI),ns.recenter.add(iI),ns.zoomOut.add(iI),ns.zoomIn.add(iI),nx.endDone.add(t=>nN.send({type:"DETAIL",...t})),nf.open.add(()=>{let t;return t=!0,J(nf.openDone,t)}),nf.openDone.add(t=>nN.send({type:t?"OPEN":"CANCEL"})),nf.close.add(()=>nN.send({type:"CANCEL"})),eN.lock.add(t=>nb({type:"SWITCH",fidx:t})),eN.selectDone.add(()=>nb({type:"SWITCH.DONE"})),nx.end.add(t=>nS.send({type:"SEARCH.END",res:t})),nf.open.add(()=>nw.set("locked")),nf.closeDone.add(()=>nb({type:"SEARCH.DONE"})),nf.closeDone.add(()=>nw.set("panning")),Q.getDone.add(t=>{null!==t&&nb({type:"SCROLL.GET.DONE",scroll:t})}),Q.syncSyncDone.add(t=>{null!==t&&nb({type:"SCROLL.SYNCSYNC.DONE",scroll:t})}),tt.resize.add(t=>{let{layout:e,force:n}=t;return nb({type:"RESIZE",layout:e,force:n})}),tt.mode.add(nE),tt.zoomStart.add(()=>{nk=!0}),tt.zoomEnd.add(()=>{nk=!1}),ns.reset.add(()=>nb({type:"HOME"})),ns.recenter.add(()=>nb({type:"RECENTER"})),ns.rotate.add(()=>nb({type:"ROTATE"})),ns.zoomOut.add(()=>nb({type:"ZOOM",z:-1,p:null})),ns.zoomIn.add(()=>nb({type:"ZOOM",z:1,p:null})),ng.multiStart.add(()=>_(Q.get)),ng.multiStart.add(()=>nw.set("touching")),ng.multiEnd.add(()=>nw.set("panning")),ng.zoom.add(t=>{let{z:e,p:n}=t;return nb({type:"ZOOM",z:e>0?1:-1,p:n})}),eM.rendered.add(()=>nb({type:"RENDERED"})),eI.start(),or.start(),iq.start(),ol.start(),oc.start(),i2.start(),eA.start(),nf.open.add(()=>on(!0)),nf.close.add(()=>on(!1)),iR.start(),nN.start(),nS.start();let i=(n={origViewBox:e={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0},isContainerRendered:iY,isUiRendered:iv,...t},m.set(t=>({...t,...n})),{...m.get(),origViewBox:e,...t});eR(i);let o=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.6.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),o.get("info")){let t=m.get(),e=document.getElementById(t.root);if(null===e)throw Error("#root not found!");(0,eW.createRoot)(e).render((0,v.jsx)(g.StrictMode,{children:(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"svgmapviewer"}),(0,v.jsx)("h2",{children:i.title}),(0,v.jsx)("div",{className:"info",children:(0,v.jsx)(eU.h,{className:"qrcode",marginSize:6,value:document.location.origin+document.location.pathname,width:"60vmin",height:"60vmin"})}),(0,v.jsx)("div",{children:(0,v.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,v.jsx)("style",{children:eY})]})}))}else{let t=document.getElementById(i.root);if(null===t)throw Error("#root not found!");t.onwheel=function(e){let n=t.children[0];e.target instanceof HTMLDivElement&&e.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||nk)&&e.preventDefault()},t.oncontextmenu=function(t){t.preventDefault()},t.ontouchmove=function(t){if(nk){if(t.target instanceof HTMLDivElement&&t.target?.id==="ui")return;t.preventDefault()}else if(!iF)return;t.preventDefault()},document.title=i.title,document.body.onkeydown=t=>{var e;return e={type:"DOWN",key:t.key},void or.send(e)},document.body.onkeyup=t=>{var e;return e={type:"UP",key:t.key},void or.send(e)},(0,eW.createRoot)(t).render((0,v.jsx)(g.StrictMode,{children:(0,v.jsx)(om,{})}))}}({renderMap:function(t){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(oz,{...t}),(0,v.jsx)(oD,{...t})]})},isMapRendered:function(){return!0},...{root:"root",title:"OIMACHI TRACKS",backgroundColor:"white",origViewBox:JSON.parse('{"x":0,"y":0,"width":3500.0,"height":1400.0}'),origBoundingBox:oV,zoomFactor:2,floorsConfig:{floors:oC,initialFidx:1},...{getSearchEntries:function(){return oY.map(t=>{let[e,n]=t;return{address:e,floorPos:n}})},getSearchInfo:function(t){let e=oB.get(t.address);return void 0===e||e.size<1?null:{title:Array.from(e)[0],x:{tag:"unknown"}}},RenderInfo:function(t){return(0,v.jsx)("p",{children:t.info.title})}}}})}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return o[t](n,n.exports,a),n.exports}a.m=o,a.d=(t,e,n)=>{var i=(e,n)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,[n]:e[i]})};i(e,"get"),i(n,"value")},a.u=t=>"static/js/async/"+t+"."+({103:"ec647e4be9",559:"c928dcafba"})[t]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=[],a.O=(e,n,i,o)=>{if(n){o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[n,i,o];return}for(var l=1/0,r=0;r<t.length;r++){for(var[n,i,o]=t[r],s=!0,d=0;d<n.length;d++)(!1&o||l>=o)&&Object.keys(a.O).every(t=>a.O[t](n[d]))?n.splice(d--,1):(s=!1,o<l&&(l=o));if(s){t.splice(r--,1);var c=i();void 0!==c&&(e=c)}}return e},a.p="/demos/OimachiTracks/",a.b=document.baseURI||self.location.href,e={410:0},a.O.j=t=>0===e[t],n=(t,n)=>{var i,o,[r,l,s]=n,d=0;if(r.some(t=>0!==e[t])){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(s)var c=s(a)}for(t&&t(n);d<r.length;d++)o=r[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},(i=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var l=a.O(void 0,["783","460","667"],()=>a(9965));l=a.O(l)})();