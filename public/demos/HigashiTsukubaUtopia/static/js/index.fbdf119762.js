(()=>{var e,t,n,r,i={4303(e,t,n){var r={"./floor-Main.svg":"1575"};function i(e){return n(o(e))}function o(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=()=>Object.keys(r),i.resolve=o,e.exports=i,i.id=4303},1575(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-Main.576377384d.svg"},6807(e,t,n){"use strict";let r,i,o;var a,l=n(1371);let s={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let c={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:s,internals:s,origin:s,measures:s,viewbox:s,points:s,lines:s,multilinestrings:s,multipolygons:s},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,l.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,renderInfo:function(e){return(0,l.createElement)("p",{},e.info.title)}};function d(e){c={...c,...e}}var u=n(9099);n(2304);var h=n(1761),x=n(9843),g=n(5032),p=n(4631);let m=h.Ay$.union([h.Ay$.number(),h.Ay$.string()]),f=h.Ay$.array(m),y=h.Ay$.object({ids:f}),v=x.codec(x.string(),y,{decode:(e,t)=>{try{return JSON.parse(e)}catch(n){return n instanceof g.G&&t.issues.push({code:"invalid_format",format:"json",input:e,message:n.message}),p.tm}},encode:e=>JSON.stringify(e)}),w=h.Ay$.union([h.Ay$.number(),h.Ay$.string()]),j=h.Ay$.set(w),S=h.Ay$.object({ids:j}),E=h.Ay$.codec(y,S,{decode:e=>({ids:new Set(e.ids)}),encode:e=>({ids:Array.from(e.ids)})});h.Ay$.pipe(v,E);let b=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var O=n(4997);function $(e,t,n){let[r,i,o]=e,[a,l]=t;return r*a+i*l+o*n}function M(e,t,n){return[$(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),$(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function N(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function k(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}var T=n(8304);let D=n(5223).I3(function(e,t){return T._k.compare(e.x,t.x)||T._k.compare(e.y,t.y)}),L={x:0,y:0};function C(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,i=e.x*n,o=e.y*r;return{...e,x:i,y:o}}function R(e,t,n,r){return{x:e,y:t,width:n,height:r}}let A={x:0,y:0,width:1,height:1};function I(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function z(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function F(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function H(e,t){return{...e,x:t.x,y:t.y}}function U(e){return function(e){let{x:t,y:n,width:r,height:i}=e;return`${t} ${n} ${r} ${i}`}(function(e,t){let{x:n,y:r,width:i,height:o}=e;return{x:t(n),y:t(r),width:t(i),height:t(o)}}(e,function(e){return Math.round(100*e)/100}))}function W(e){let{x:t,y:n,width:r,height:i}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+i}}}function q(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function P(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function Y(e){let[[t,n],[r,i]]=e;return{tl:{x:t,y:n},br:{x:r,y:i}}}function Z(e,t){return[M(e,function(e){let[t]=e;return t}(t),0),M(e,function(e){let[,t]=e;return t}(t),0),M(e,function(e){let[,,t]=e;return t}(t),1)]}function V(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function G(e,t,n,r){var i,o;return i=function(e,t){let[n,r]=t;return[V(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),V([-n,-r])].reduce(Z)}("number"==typeof(o=t)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,O.Fs)(e,W,P,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>M(i,e,1)),Y,q)}function X(e){return Math.round(100*e)/100}function _(e){return Math.round(1e7*e)/1e7}var B=n(2203),J=n(9041),K=n(5227),Q=n(6058),ee=n(5114);let et=[1,2,2.5,5,10,15,20,25,30,40,50];function en(e){e.forEach(e=>e())}function er(e,t){e.forEach(e=>e(t))}let ei={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},eo={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animation:new Set,animationEnd:new Set,mode:new Set};function ea(e){return void 0!==e&&"number"==typeof e}function el(e,t,n,r,i,o){return new DOMMatrixReadOnly(e instanceof Array?e:ea(e)&&ea(t)&&ea(n)&&ea(r)&&ea(i)&&ea(o)?[e,t,n,r,i,o]:void 0)}let es={container:A,scroll:A,content:el(),svgOffset:{x:-0,y:-0},svgScale:1,svg:A};function ec(e){let{container:t,outer:n,svgScale:r,inner:i}=e,{x:o,y:a}=n;return{container:t,scroll:t,content:el(),svgOffset:{x:-o,y:-a},svgScale:r,svg:i}}function ed(e){let{scroll:t,content:n,svgOffset:r,svgScale:i,svg:o}=e;return el().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/i,1/i).translate(-o.x,-o.y)}function eu(e,t){let n=e.height,r=n*t;return R((e.width-r)/2,0,r,n)}function eh(e,t){let n=e.width,r=n/t;return R(0,(e.height-r)/2,n,r)}let ex={...es,config:{fontSize:16,container:A,outer:A,inner:A,svgScale:1}};function eg(e,t){let n=z(e.scroll);return ep(e,t,t,n)}function ep(e,t,n,r){let i=ed(e).inverse().transformPoint(r),o=G(e.scroll,[t,n],r.x,r.y),a=C(e.svgOffset,[t,n]),l=G(e.svg,[t,n],i.x,i.y);return{...e,scroll:o,svgOffset:a,svg:l}}function em(e,t){var n,r;let i=z({...e.scroll,x:0,y:0}),o=(n=i.x,r=i.y,el().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:o}}function ef(e,t){let n=e.scroll,r=k(C(t,-1),n);return(0,O.Fs)(e,e=>({...e,scroll:F(e.scroll,r)}),e=>{let t,r,i,o,a,l,s;return t=H(e.scroll,n),r=e.content.inverse(),o=N(i=z(e.scroll),k(e.scroll,n)),a=r.transformPoint(i),l=C(k(r.transformPoint(o),a),-e.svgScale),s=F(e.svg,l),{...e,scroll:t,svg:s}})}function ey(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,i=t.scrollWidth,o=t.scrollHeight;if(null===n)return!1;let a=i-e.width,l=o-e.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${e.width}, ${e.height}]`),!1;let s=Math.round(-e.x),c=Math.round(-e.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==s&&(t.scrollLeft=s),r!==c&&(t.scrollTop=c);let d=t.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=t.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let ev={scroll:A,client:{width:0,height:0},timeStamp:0};function ew(e){let t=e.currentTarget;null!==t&&(ev={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}let ej=(0,J.e)(ex),eS=(0,K.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,Q.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,Q.a)({}),updateSvgMatrix:(0,Q.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:i}=e;return t.translate(-n.x,-n.y).scale(1/r,1/r).translate(-i.x,-i.y)}(t)}}),updateGeoMatrix:(0,Q.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(c.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,Q.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,i=Math.max(n.width,n.height)/2*r,o=Math.round(Math.log10(i)),a=(t=i/Math.pow(10,o-1),et.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,Q.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:ex,zoom:1,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:L,distanceRadius:{svg:0,client:0},geoRange:{start:L,end:L},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,Q.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return ej.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,ee.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,Q.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,Q.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,Q.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,Q.a)({animation:e=>{let{event:{animation:t}}=e;return null===t?"":function(e){let{matrix:t,origin:n}=e,r=el();return`
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
`}(t)},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,Q.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,Q.a)({animation:null,animating:!1}),target:"Idle"}}}}}),eE=(0,ee.c)(eS,{systemId:"system-viewer1"});function eb(e){eE.send(e)}function eO(e){return(0,B.d4)(eE,t=>e(t.context))}function e$(){eb({type:"STYLE.SCROLL",currentScroll:ev})}function eM(){return eO(e=>e.layout.container)}function eN(){return eO(e=>e.distanceRadius)}let ek=`
position: absolute;
left: 0;
top: 0;
`,eT=`
position: absolute;
right: 0;
top: 0;
`,eD=`
position: absolute;
left: 0;
bottom: 0;
`,eL=`
position: absolute;
right: 0;
bottom: 0;
`,eC=`
margin: 0;
`,eR=`
padding: 0;
`,eA=`
${eC} ${eR}
`,eI=`
box-sizing: border-box;
`,ez=`
width: 100vw;
height: 100vh;
height: 100svh;
`,eF=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eH=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,eU=`
-webkit-user-select: none;
user-select: none;
`,eW=`
touch-action: none;
`,eq=`
pointer-events: none;
`,eP=`
pointer-events: initial;
`,eY=`
background-color: rgba(255, 255, 255, 0.5);
`,eZ=`
cubic-bezier(0, 0, 0, 1)
`,eV=`
cubic-bezier(1, 0, 1, 1)
`,eG=`
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
`,eX={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set};var e_=n(4319);let eB={init:new Set,rendered:new Set},eJ=function(e){er(eB.init,e)},eK=function(){en(eB.rendered)},eQ=(0,J.e)(0),e0=(0,K.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:null},initial:"Uninited",on:{IMAGE:{actions:(0,Q.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}})}},states:{Uninited:{on:{INIT:{actions:[(0,Q.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eQ.set(t.fidx)}],target:"Idle"}}},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,Q.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return eQ.set(t.fidx)}],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,e_.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,e_.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:(0,Q.a)({prevFidx:null}),target:"Idle"}}}}}),e1=(0,ee.c)(e0);e1.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,er(eX.lock,t)});let e5=new Worker(new URL(n.p+n.u(760),n.b),Object.assign({},{type:"module"},{type:void 0}));function e2(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,B.d4)(e1,t=>e(t.context))),i=(0,l.useMemo)(()=>(function(e,t,n){let r=c.floorsConfig;if(void 0===r)return null;let i=r.floors.map((r,i)=>{var o,a,l,s,c,d,u;return o=e,a=t,l=n,(s=i)!=o||l?s===a?(c=s,`
.fidx-${c} {
  will-change: opacity;
  animation: xxx-disappearing 250ms linear;
}
`):(d=s,`
.fidx-${d} {
  visibility: hidden;
}
  `):(u=s,`
.fidx-${u} {
  will-change: opacity;
  animation: xxx-appearing 250ms linear;
}
`)}).join("");return`
${i}
${eG}
`})(t,n,void 0===r.get(t)),[t,n,r]),o=(0,l.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,er(eX.selectDone,n))},[t]),a=(0,l.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,er(eX.lock,r))},[t,n]);return{fidx:t,prevFidx:n,style:i,fidxToOnAnimationEnd:o,fidxToOnClick:a,urls:r}}e5.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;e1.send({type:"IMAGE",fidx:e,blob:n})}}},e5.onerror=e=>{console.error("floors error",e)},e5.onmessageerror=e=>{console.error("floors messageerror",e)};var e3=n(3772);function e4(){let e=eO(e=>e.rendered);(0,l.useEffect)(()=>{requestAnimationFrame(()=>eK())},[e]);let t=eO(e=>e.shown),n=eO(e=>e.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${eZ};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",r=eO(e=>e.layout.scroll),i=`
.content {
  width: ${X(r.width)}px;
  height: ${X(r.height)}px;
}
`;return(0,u.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,i]})}let e6=new Map;function e7(e,t,n){(0,l.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:e6.get(n)??null;if(null===r)return;let i=r.querySelector(`#${e}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});e6.set(e,o),(0,e3.createRoot)(o).render(t)})(e,t,n),[e,n,t])}let e8={bus:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,u.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,u.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,u.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,u.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,u.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,u.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,u.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,u.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,u.jsx)("use",{x:"8.5",href:"#_person2"}),(0,u.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,u.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,u.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,u.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,u.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,u.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,u.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,u.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,u.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,u.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,u.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,children:[(0,u.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,u.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,u.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,u.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,u.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,u.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,u.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,u.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,u.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,u.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,u.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,u.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,u.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,u.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,u.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,u.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,u.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,u.jsxs)("g",{fill:"white",stroke:"none",children:[(0,u.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,u.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,u.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function e9(){return(0,u.jsx)("g",{className:"assets",children:(0,u.jsx)(te,{})})}function te(){return(0,u.jsx)("g",{className:"symbols",children:Object.entries(e8).map((e,t)=>{let[n,r]=e;return(0,u.jsx)(l.Fragment,{children:r({id:n})},t)})})}function tt(e){return e>.5?-1:+(e<.5)}function tn(e){return e<.3?1:e>.7?-1:0}function tr(e,t,n,r){let i={x:t/2,y:n/2},o=t/20,a=o/2;function l(t){var n;let r,i;return n={x:e.h,y:e.v},r=t.x*n.x,i=t.y*n.y,{...t,x:r,y:i}}let s=e.th<Math.PI/4,c=0===e.v,d=0===e.h,u=l(C(i,-1)),h=l(c||d?k(C(i,-1),{x:r,y:r}):k(C(i,-1),{x:s?r:0,y:s?0:r})),[x,g]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],p=N(u,x),m=N(u,g);return{p:u,q:h,a:p,b:m}}function ti(e){return{open:e,animating:!1}}function to(e){return e.open||e.animating?null:{open:!0,animating:!0}}function ta(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function tl(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function ts(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function tc(e){let{open:t,animating:n}=e;return t||n}let td={start:new Set,end:new Set,endDone:new Set},tu={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},th={p:L,psvg:L,fidx:0,layout:es,info:{title:""}};function tx(e){return function(t,n){let r=t[n],i=e(r);return t[n]=null===i?r:i,t}}let tg=(0,K.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return tc(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return tc(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,Q.a)({canceling:()=>!0}),endCancel:(0,Q.a)({canceling:()=>!1}),open:(0,Q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tx(to)(n,r)}}),close:(0,Q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tx(tl)(n,r)}}),handle:(0,Q.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tx(n[r].open?ta:ts)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:th,m:{header:ti(!0),detail:ti(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,Q.a)({detail:e=>{let{event:{psvg:t,fidx:n,info:r,layout:i}}=e;return{psvg:t,p:ed(i).transformPoint(t),fidx:n,info:r,layout:i}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,ee.n)("animationEnded")},{actions:(0,Q.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,ee.n)("isDetailVisible")},{actions:(0,Q.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,ee.n)("animationEnded")},{actions:(0,Q.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,ee.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,Q.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,e_.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,Q.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,ee.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,Q.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,ee.r)({type:"DONE"})]}}}}}),tp=(0,ee.c)(tg);function tm(){return(0,B.d4)(tp,e=>e.context)}function tf(){return tm().m.header}function ty(){return tm().m.detail}function tv(e){return(0,u.jsxs)("div",{className:"balloon",children:[(0,u.jsx)(tj,{...e}),e.children,(0,u.jsx)("style",{children:tw})]})}tp.on("CLOSE.DONE",()=>en(tu.closeDone));let tw=`
.balloon,
.balloon-svg {
  ${ek}
  ${eq}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tj(e){let t=e._hv;if(null===t)return(0,u.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(e,t){let{bw:n,bh:r,lh:i,d:o,width:a,height:l}=t,s=R(-a/2,-a/2,a,l),{body:c,leg:d}=function(e,t,n,r){let i={x:t/2,y:n/2},o=`
m${-i.x},${-i.y}
h${t}
v${n}
h${-t}
z
`,{p:a,q:l,a:s,b:c}=tr(e,t,n,r),d=k(l,s),u=k(c,l),h=k(a,c);return{body:o,leg:`
m${s.x},${s.y}
l${d.x},${d.y}
l${u.x},${u.y}
l${h.x},${h.y}
z
`}}(e,n,r,i);function u(e){return`M${e},${e} ${c} M${e},${e} ${d}`}return{viewBox:s,width:a,height:l,bg:u(o),fg:u(0)}}(t,e._size);return(0,u.jsxs)("svg",{className:"balloon-svg",viewBox:U(n),width:r,height:i,children:[(0,u.jsx)("path",{className:"bg",d:a}),(0,u.jsx)("path",{className:"fg",d:o}),(0,u.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tS(e){let{_p:t,_hv:n,_size:r,_leg:i}=e,o=ty(),a=null!==t&&null!==n&&tc(o)?function(e,t,n,r){let{open:i,animating:o}=e,{width:a,height:l}=n,s=C(r.q,-1);if(o){let[e,n]=i?[0,1]:[1,0],[r,o]=i?[0,1]:[1,0],[c,d]=i?["0px","0px"]:["var(--dp-x)","var(--dp-y)"],[u,h]=i?["var(--dp-x)","var(--dp-y)"]:["0px","0px"],x=i?eZ:eV;return`
.detail,
.balloon {
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --dp-x: ${s.x}px;
  --dp-y: ${s.y}px;
  --oa: ${e};
  --ob: ${n};
  --sa: ${r};
  --sb: ${o};
  --timing: ${x};
  --dxa: ${c};
  --dxb: ${u};
  --dya: ${d};
  --dyb: ${h};
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
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
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
`}(o,t,r,i):".balloon, .detail { visibility: hidden; }";return(0,u.jsx)("style",{children:a})}let tE={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},tb=()=>en(tE.zoomIn),tO=()=>en(tE.zoomOut),t$=()=>en(tE.rotate),tM=()=>en(tE.reset),tN=()=>en(tE.recenter),tk={multiStart:new Set,multiEnd:new Set,zoom:new Set},tT=(0,J.e)("panning");tT.subscribe(e=>{let t;return t=e,er(eo.mode,t)});let tD=(0,K.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>c.isMapRendered(),isUiRendered:()=>c.isUiRendered()},actions:{setRendered:(0,Q.a)({rendered:!0}),emitGetScroll:(0,e_.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,e_.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}),emitSyncScrollSync:(0,e_.a)(e=>{let{context:{layout:t}}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}),calcZoomAnimation:(0,Q.a)({animation:e=>{var t,n,r,i,o,a,l,s,d,u,h;let x,g,p,m,f,y,v,w,{context:{animationReq:j,layout:S}}=e;return null===j?null:"zoom"===j.type?(t=S,n=j.z,r=j.p,x=ed(t).inverse().transformPoint(r),g=1/(i=n,Math.pow(c.zoomFactor,i)),p=el().scale(1/g,1/g),{type:"Zoom",svg:G(t.svg,g,x.x,x.y),svgScale:t.svgScale*g,q:p,o:r}):"home"===j.type?(o=S,m=z((a=function(e){let{config:t,content:n}=e;return{config:t,...ec(t),content:n}}(S)).config.inner),f=ed(o).transformPoint(m),y=a.svgScale/o.svgScale,w=(function(e,t){if(e instanceof DOMMatrixReadOnly)return el(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return el(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((v=z(o.container)).x-f.x,v.y-f.y).multiply((l=1/y,s=1/y,d=f.x,u=f.y,el().scale(l,s,1,d,u,0))),{type:"Zoom",svg:a.svg,svgScale:a.svgScale,q:w,o:null}):(h=j.p,{type:"Rotate",deg:90,q:el().rotate(90),o:h})}}),updateLayoutFromZoom:(0,Q.a)({prevLayout:e=>{let{context:{layout:t}}=e;return t},layout:e=>{let{context:{layout:t,animation:n}}=e;return function(e,t){var n,r,i;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:H(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,i=t.svgScale,{...e,svg:r,svgScale:i}):em(e,t.deg)}(t,n)}}),endZoom:(0,Q.a)({prevLayout:null,animation:null,zoom:e=>{let{context:{zoom:t,animationReq:n}}=e;return t*(null===n||"zoom"!==n.type?1:Math.pow(2,n.z))},rotate:e=>{let{context:{rotate:t,animationReq:n}}=e;return t+(null===n||"rotate"!==n.type?0:n.deg)}}),endHome:(0,Q.a)({cursor:e=>{let{context:{origLayout:t}}=e;return z(t.container)},layout:e=>{let{context:{origLayout:t,rotate:n}}=e;return em(eg(t,9),n)}}),emitSyncAnimation:(0,e_.a)(e=>{let{context:{animation:t}}=e;return{type:"SYNC.ANIMATION",animation:t}}),emitZoomStart:(0,e_.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.START",layout:t,zoom:n}}),emitZoomEnd:(0,e_.a)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.END",layout:t,zoom:n}}),resetCursor:(0,Q.a)({cursor:e=>{let{context:{layout:t}}=e;return z(t.container)}}),resizeLayout:(0,Q.a)({rendered:!1,origLayout:(e,t)=>{let{layout:n}=t;return n},layout:(e,t)=>{let{layout:n}=t;return eg(n,9)}}),updateLayoutFromScroll:(0,Q.a)({layout:e=>{let{context:t}=e,{scroll:n}=ev;return ef(t.layout,n)}}),emitSyncLayout:(0,e_.a)(e=>{let{context:{layout:t,rendered:n}}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}),emitSearchStart:(0,e_.a)(e=>{let{context:{layout:t,cursor:n}}=e,{scroll:r}=ev;return{type:"SEARCH.START",req:{psvg:ed(ef(t,r)).inverse().transformPoint(n)}}}),emitSearchEndDone:(0,e_.a)((e,t)=>{let{context:n}=e,{res:r}=t,{scroll:i}=ev,o=ef(n.layout,i);return{type:"SEARCH.END.DONE",res:null===r?null:{...r,layout:o}}}),emitSwitch:(0,e_.a)((e,t)=>{let{fidx:n}=t;return{type:"SWITCH",fidx:n}}),emitSwitchDone:(0,e_.a)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:ex,prevLayout:null,layout:ex,cursor:z(ex.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,ee.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{actions:(0,Q.a)({cursor:e=>{let{event:{pos:t}}=e;return t}}),target:"Searching"},SWITCH:{actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{target:"Recentering"},ZOOM:{actions:(0,Q.a)({animationReq:e=>{let{context:{layout:t},event:{z:n,p:r}}=e;return{type:"zoom",z:n,p:r??z(t.container)}}}),target:"Zooming"},HOME:{actions:(0,Q.a)({animationReq:{type:"home"}}),target:"Zooming"},ROTATE:{actions:(0,Q.a)({animationReq:e=>{let{context:{layout:t}}=e;return{type:"rotate",deg:90,p:z(t.container)}}}),target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"emitSwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:{actions:["updateLayoutFromScroll","calcZoomAnimation","updateLayoutFromZoom","emitZoomStart","emitSyncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitSyncLayout","emitSyncScroll","emitZoomEnd","emitSyncAnimation"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Done"},{target:"Done"}]},Done:{entry:(0,Q.a)({animationReq:null}),type:"final"}}}}}),tL=(0,ee.c)(tD,{systemId:"system-viewer1"});function tC(e){tL.send(e)}tL.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,er(td.start,t)}),tL.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?tL.send({type:"SEARCH.DONE"}):(t=r,er(td.endDone,t),n=r.psvg,er(tu.open,n))}),tL.on("ZOOM.START",e=>{let t;return t=e,er(eo.zoomStart,t)}),tL.on("ZOOM.END",e=>{let t;return t=e,er(eo.zoomEnd,t)}),tL.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,er(eX.select,t)}),tL.on("SWITCH.DONE",()=>en(eX.unlock)),tL.on("SYNC.ANIMATION",e=>{let t,{animation:n}=e,r=n?.q??null,i=n?.o??null;null!==r&&(t={matrix:r,origin:i},er(eo.animation,t))}),tL.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},er(eo.layout,t)}),tL.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,er(ei.sync,t)}),tL.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,er(ei.syncSync,t)}),tL.on("SCROLL.GET",()=>en(ei.get));let tR=!1,tA=!1;function tI(e){tR="locked"===e,tA="locked"===e}function tz(){let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",tF),()=>{t.removeEventListener("wheel",tF)}},[e]),e}function tF(e){let t=e.currentTarget;tA&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function tH(e){let t,{_detail:n}=e,r=tz();return(0,u.jsxs)("div",{ref:r,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void tp.send(e)},children:[c.renderInfo&&(1!==(t=Object.values(n.info)).length||"string"!=typeof t[0]||""!==t[0])&&c.renderInfo({info:n.info}),(0,u.jsx)("style",{children:tU})]})}let tU=`
.detail {
  ${ek}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eP}
  ${eI}
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
  ${eU}
  margin: 1.5em;
  text-align: center;
}

p {
  ${eU}
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
`;function tW(){return e7("detail",(0,u.jsx)(tq,{}),"ui"),(0,u.jsx)("div",{id:"detail"})}function tq(){return(0,u.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,u.jsx)(tP,{}),(0,u.jsx)(tY,{})]})}function tP(){let e,t,n,r,i,o,a,l,s,c,d,h,x=tm().detail,g=(o=x.p,a=x.layout,l=function(e,t){let{x:n,y:r}=t,i=e.width/e.height,o={x:n/e.width,y:r/e.height},a=i>1?tt(o.x):tn(o.x);return{h:a,v:i>1?tn(o.y):tt(o.y),th:Math.atan2(e.height,e.width)}}(x.layout.container,o),s=a.container.width,t=50*(e=.01*Math.min(s,c=a.container.height)),n=50*e,r=10*e,i=t/100,h=tr(l,(d={bw:t,bh:n,lh:r,d:i,width:t+2*r+2*i,height:n+2*r+2*i}).bw,d.bh,d.lh),{_p:o,_hv:l,_W:s,_H:c,_size:d,_leg:h});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(tv,{...g}),(0,u.jsx)(tH,{_detail:x}),(0,u.jsx)(tS,{...g})]})}function tY(){return(0,u.jsx)("svg",{id:"ui-svg-defs",children:(0,u.jsx)("defs",{children:(0,u.jsx)(e9,{})})})}function tZ(){return e7("footer",(0,u.jsx)(tV,{}),"ui"),(0,u.jsx)("div",{id:"footer"})}function tV(){let e=c;return(0,u.jsxs)("div",{className:"ui-content footer",children:[(0,u.jsx)("p",{children:e.copyright}),(0,u.jsxs)("style",{children:[tG,(0,u.jsx)(tX,{})]})]})}let tG=`
.footer {
  ${eD}
  ${eF}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${eU}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function tX(){let{open:e,animating:t}=tf();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eV;return(0,u.jsx)(u.Fragment,{children:`
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
`})}return(0,u.jsx)(u.Fragment,{children:`
.footer {
  --b: ${+!!e};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function t_(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("g",{id:"measure",children:(0,u.jsx)(tK,{})})})}function tB(){let{svg:e}=eN();return(0,u.jsxs)("div",{id:"distance",children:[(0,u.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),t5.map(t=>(0,u.jsxs)(l.Fragment,{children:[(0,u.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,u.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,u.jsx)("style",{children:(0,u.jsx)(t1,{})})]})}function tJ(){let e=eO(e=>e.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${_(Math.abs(e.x))}`,i=`${n} ${_(Math.abs(e.y))}`;return(0,u.jsxs)("div",{id:"coordinate",children:[(0,u.jsx)("p",{id:"longitude",children:r}),(0,u.jsx)("p",{id:"latitude",children:i}),(0,u.jsx)("style",{children:(0,u.jsx)(t0,{})})]})}function tK(){let{width:e,height:t}=eM(),{client:n}=eN(),r=(0,l.useMemo)(()=>`M0,${t/2} h${e}`,[t,e]),i=(0,l.useMemo)(()=>`M${e/2},0 v${t}`,[t,e]),o=(0,l.useMemo)(()=>t5.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)})),[n,t,e]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,u.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((e,t)=>(0,u.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function tQ(){let{open:e,animating:t}=tf(),[n,r]=e?[0,1]:[1,0],i=t?`
.guides {
  --timing: ${e?eZ:eV};
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
`;return(0,u.jsx)(u.Fragment,{children:i})}function t0(){let{width:e,height:t}=eM(),n=`
#distance,
#coordinate {
  ${ek}
  width: ${e}px;
  height: ${t}px;
}
`,r=`
#longitude {
  ${eL}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-t/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${eD}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,u.jsxs)(u.Fragment,{children:[n,r,i]})}function t1(){let{width:e,height:t}=eM(),{client:n}=eN(),r=`
.distance {
  ${ek}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${e/2}px, ${t/2}px) scale(0.5);
}
`,o=t5.map(r=>`
#distance-x-${r+1} {
  transform: translate(${e/2+n*(r+1)}px, ${t/2}px) scale(0.5);
}
`),a=t5.map(r=>`
#distance-y-${r+1} {
  transform: translate(${e/2}px, ${t/2+n*(r+1)}px) scale(0.5);
}
`);return(0,u.jsxs)(u.Fragment,{children:[i,r,o,a]})}let t5=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function t2(){return e7("guides",(0,u.jsx)(t3,{}),"ui"),(0,u.jsx)("div",{id:"guides"})}function t3(){return!(c.uiConfig?.showGuides??!0)||c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"ui-content guides",children:[(0,u.jsx)("svg",{className:"guides",children:(0,u.jsx)(t_,{})}),(0,u.jsx)(tB,{}),(0,u.jsx)(tJ,{}),(0,u.jsxs)("style",{children:[t4,(0,u.jsx)(tQ,{})]})]})}let t4=`
.guides {
  ${ek}
  ${ez}
  ${eq}
  z-index: 2;
}

text {
  ${eU}
}
`;function t6(){let{fidx:e,fidxToOnClick:t}=e2(),n=c.floorsConfig;return void 0===n||n.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{className:"floors",children:[(0,u.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:i}=n;return(0,u.jsx)("li",{className:`floor-item ${ne(r===e)}`,onClick:t(r),children:i},r)})}),(0,u.jsx)("style",{children:t7})]})}let t7=`
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
`;function t8(){let{fidx:e}=e2(),t=c.floorsConfig;return void 0===t||t.floors.length<2?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("div",{children:[t.floors.map((t,n)=>(0,u.jsx)("h2",{className:`floor-name ${ne(n===e)}`,children:t.name},n)),(0,u.jsx)("style",{children:t9})]})}let t9=`
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
`;function ne(e){return e?"selected":"unselected"}function nt(){return e7("header",(0,u.jsx)(nn,{}),"ui"),(0,u.jsx)("div",{id:"header"})}function nn(){let e=c;return(0,u.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void tp.send(e)},children:[(0,u.jsx)("h1",{className:"title",onClick:()=>tM(),children:e.title}),(0,u.jsx)(t8,{}),(0,u.jsxs)("style",{children:[nr,(0,u.jsx)(ni,{})]})]})}let nr=`
.header {
  ${ek}
  ${eF}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${eU}
  ${eP}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function ni(){let{open:e,animating:t}=tf();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eV;return(0,u.jsx)(u.Fragment,{children:`
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
`})}return(0,u.jsx)(u.Fragment,{children:`
.header {
  --b: ${+!!e};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function no(){return e7("left",(0,u.jsx)(na,{}),"ui"),(0,u.jsx)("div",{id:"left"})}function na(){return(0,u.jsxs)("div",{className:"ui-content left bottom",children:[(0,u.jsx)(t6,{}),(0,u.jsxs)("style",{children:[nl,(0,u.jsx)(ns,{})]})]})}let nl=`
.left {
  ${ek}
  ${eH}
  padding: 0.4em;
  font-size: smaller;
  ${eq}
}

.left {
  top: initial;
  align-items: end;
}
`;function ns(){let{open:e,animating:t}=tf();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eV;return(0,u.jsx)(u.Fragment,{children:`
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
`})}return(0,u.jsx)(u.Fragment,{children:`
.left {
  --b: ${+!!e};
  transform-origin: 0% 50%;
  opacity: var(--b);
  transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nc(){return(0,u.jsx)("div",{className:"button-item fullscreen",onClick:()=>en(tE.fullscreen),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nd})})})}let nd=`
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
`;function nu(){return(0,u.jsx)("div",{className:"button-item home",onClick:()=>tM(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nh})})})}let nh=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function nx(){return c.mapCoord.matrix.isIdentity?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"button-item position",onClick:()=>en(tE.position),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nm})})})}let ng=3*Math.sqrt(2),np=ng+6,nm=`
M 0,0
m 0,${np/2}
l -3,-3
a ${ng},${ng} 0,1,1 6,0
z
m 0,${-np+ng+ng/2}
a ${ng/2},${ng/2} 0,1,0 0,${-ng}
a ${ng/2},${ng/2} 0,1,0 0,${ng}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function nf(){return(0,u.jsx)("div",{className:"button-item recenter",onClick:()=>tN(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:ny})})})}let ny=`
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
`;function nv(){return(0,u.jsx)("div",{className:"button-item rotate",onClick:()=>t$(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nw})})})}let nw=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function nj(){return(0,u.jsx)("div",{className:"button-item zoom-in",onClick:()=>tb(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nS})})})}let nS=`
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
`;function nE(){return(0,u.jsx)("div",{className:"button-item zoom-out",onClick:()=>tO(),children:(0,u.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,u.jsx)("path",{d:nb})})})}let nb=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function nO(){return e7("right",(0,u.jsx)(n$,{}),"ui"),(0,u.jsx)("div",{id:"right"})}function n$(){return(0,u.jsxs)("div",{className:"ui-content right bottom",children:[(0,u.jsx)(nN,{}),(0,u.jsx)("style",{children:nM})]})}let nM=`
.right {
  ${eT}
  ${eH}
  padding: 0.4em;
  font-size: smaller;
  ${eq}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nN(){return(0,u.jsxs)("div",{className:"button",children:[(0,u.jsx)(nx,{}),(0,u.jsx)(nu,{}),(0,u.jsx)(nc,{}),(0,u.jsx)(nf,{}),(0,u.jsx)(nv,{}),(0,u.jsx)(nE,{}),(0,u.jsx)(nj,{}),(0,u.jsxs)("style",{children:[nk,(0,u.jsx)(nT,{})]})]})}let nk=`
.button {
  font-size: large;
  margin: 0;
  ${eF}
}

.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${eP}
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
`;function nT(){let{open:e,animating:t}=tf();if(t){let[t,n]=e?[0,1]:[1,0],r=e?eZ:eV;return(0,u.jsx)(u.Fragment,{children:`
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
`})}return(0,u.jsx)(u.Fragment,{children:`
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
`})}function nD(){return e7("screen",(0,u.jsx)(nL,{}),"ui"),(0,u.jsx)("div",{id:"screen"})}function nL(){let e=tz();return(0,u.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>en(tu.close),children:(0,u.jsxs)("style",{children:[nC,(0,u.jsx)(nR,{})]})})}let nC=`
.screen {
  ${ek}
  ${ez}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nR(){let{open:e,animating:t}=ty(),n=eO(e=>e.animating);if(!t)return e?(0,u.jsx)(u.Fragment,{children:`
.screen {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,u.jsx)(u.Fragment,{children:".screen { display: initial; opacity: 0; }"}):(0,u.jsx)(u.Fragment,{children:".screen { display: none; }"});{let[t,n]=e?[0,.3]:[.3,0],r=e?eZ:eV;return(0,u.jsx)(u.Fragment,{children:`
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
`})}}function nA(){return e7("ui",(0,u.jsx)(nI,{})),(0,u.jsx)("div",{id:"ui"})}function nI(){return(0,u.jsxs)("div",{className:"ui",children:[(0,u.jsx)(nD,{}),(0,u.jsx)(nt,{}),(0,u.jsx)(tZ,{}),(0,u.jsx)(no,{}),(0,u.jsx)(nO,{}),(0,u.jsx)(t2,{}),(0,u.jsx)(tW,{})]})}function nz(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function nF(){tN()}var nH=n(8973),nU=n(9116),nW=n(1277);let nq=nH.OZ(D),nP=nU.aU(T._k),nY=nU.tf(),nZ=nU.JI(T.Eq,nH.CA());function nV(e){return(0,O.Fs)(e,nU.zu(nq),nH.x1(e=>0===e.length?nW.dv:nW.zN(e[0])))}function nG(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:C(t,1/e.length)}function nX(e){return new Map((0,O.Fs)(e.changedTouches,Array.from,nH.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let n_=(0,K.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,Q.a)({touches:e=>{var t;let n,r,i,a,l,s,c,d,u,{context:{touches:h},event:x}=e;return"TOUCH.START"===x.type?(t=x.ev,i=nG(r=nV(n=nZ.concat(h.vecs,nX(t)))),l=2!==r.length?null:.5>Math.abs((a=k(r[0],r[1])).y/a.x),{...h,vecs:n,points:r,cursor:i,horizontal:l}):"TOUCH.MOVE"===x.type?function(e,t){var n,r,i,a;let l,s=nX(t),c=nP.mapWithIndex(e.vecs,(e,t)=>(0,O.Fs)(s.get(e),nW.k$,nW.AU(()=>t,nH.xW(t)))),d=nV(c),u=nG(d),[h,x]=d;if(null===u||h===o||x===o)return{...e,vecs:c,points:d,cursor:u};let g=(n=e.dists,r=Math.sqrt((i=h,a=x,Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2))),l=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||l>0?[r,...n]:n),p=function(e){let[t,n,r,i]=e;return t===o||n===o||r===o||i===o?null:t<n&&n<r&&r<i?-1:t>n&&n>r&&r>i?1:null}(g);return{vecs:c,points:d,cursor:u,dists:g,z:p,horizontal:e.horizontal}}(h,x.ev):"TOUCH.END"===x.type?(s=nX(x.ev),u=nG(d=nV(c=nY.filterMapWithIndex(h.vecs,(e,t)=>s.has(e)?nW.dv:nW.zN(t)))),{vecs:c,points:d,cursor:u,dists:0===c.size?[]:h.dists,z:0===c.size?null:h.z,horizontal:h.horizontal}):h}}),raiseOp:(0,ee.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,Q.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,Q.a)({mode:"pan"}),enterPinch:(0,Q.a)({mode:"pinch"}),emitMulti:(0,e_.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,e_.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,ee.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,ee.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,ee.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),nB=(0,ee.c)(n_),nJ=!1;function nK(e){nB.send({type:"TOUCH.START",ev:e})}function nQ(e){nB.send({type:"TOUCH.MOVE",ev:e})}function n0(e){nB.send({type:"TOUCH.END",ev:e})}function n1(){nB.send({type:"CANCEL"})}function n5(e){tR||tC({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function n2(e){let t;null!==e&&(t=e,er(ei.eventTick,t))}function n3(e){return(0,u.jsxs)("div",{id:"viewer",className:"container",onTouchStart:nK,onTouchMove:nQ,onTouchEnd:n0,onClick:n5,onContextMenu:nF,onScroll:n2,onAnimationEnd:e=>{var t;(t={type:"ANIMATION.END",ev:e}).ev.stopPropagation(),tC(t),en(eo.animationEnd)},children:[e.children,(0,u.jsx)(n4,{})]})}function n4(){let e=`
.container {
  ${ek}
  ${ez}

  scrollbar-behavior: smooth;
  scrollbar-width: none;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("style",{children:e}),(0,u.jsx)(n6,{}),(0,u.jsx)(n7,{}),(0,u.jsx)(n8,{})]})}function n6(){let e=eO(e=>e.layout.content),t=`
.content {
  ${ek}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
  pointer-events: none;
}
`;return(0,u.jsx)("style",{children:t})}function n7(){let e=eO(e=>e.animation);return(0,u.jsx)("style",{children:e})}function n8(){let{style:e}=e2();return null===e?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("style",{children:e})}function n9(){return null!==document.querySelector(".container")}nB.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(nJ=!0,en(tk.multiStart)):(en(tk.multiEnd),nJ=!1)}),nB.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,i=n.z;null!==r&&null!==i&&(t={z:i>0?1:-1,p:r},er(tk.zoom,t))});var re=n(1586);async function rt(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let rn=(0,K.mj)({types:{events:{},emitted:{}},actors:{api:(0,re.Sx)(()=>rt(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,Q.a)({position:e=>{let{event:t}=e;return t.output}}),(0,e_.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,Q.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rr=(0,ee.c)(rn),ri=(0,K.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,e_.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,e_.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),ro=(0,ee.c)(ri);function ra(e){ro.send(e)}ro.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=c.mapCoord.matrix.inverse().transformPoint(t),r=eQ.get();rl.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),ro.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,er(td.end,t)});let rl=new Worker(new URL(n.p+n.u(502),n.b),Object.assign({},{type:"module"},{type:void 0}));function rs(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}rl.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":ra({type:"INIT.DONE"});break;case"SEARCH.DONE":var n;let r;n=t.res,null===(r=c.getSearchInfo(n,c.mapMap,c.osmSearchEntries))?(console.log("info not found!",n),ra({type:"SEARCH.DONE",res:null})):ra({type:"SEARCH.DONE",res:{psvg:c.mapCoord.matrix.transformPoint(n.pos.coord),fidx:n.pos.fidx,info:r}});break;case"SEARCH.ERROR":console.log("search error!",t.error),ra({type:"SEARCH.DONE",res:null})}},rl.onerror=e=>{console.error("search error",e)},rl.onmessageerror=e=>{console.error("search messageerror",e)};let rc=(0,K.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==rs(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,e_.a)({type:"RESET"}),recenter:(0,e_.a)({type:"RECENTER"}),rotate:(0,e_.a)({type:"ROTATE"}),zoom:(0,e_.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,e_.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,e_.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,Q.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||i}})(t.mod,n.key)}}),handleUp:(0,Q.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&i}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:rs(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),rd=(0,ee.c)(rc);rd.on("RESET",tM),rd.on("RECENTER",tN),rd.on("ROTATE",t$),rd.on("ZOOM.IN",tb),rd.on("ZOOM.OUT",tO),rd.on("FLOOR.LEVEL.UP",()=>en(eX.levelUp)),rd.on("FLOOR.LEVEL.DOWN",()=>en(eX.levelDown));let ru=(0,K.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:A,next:A,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,Q.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,ee.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!I(t.prev,t.next)},actions:[(0,Q.a)({waited:0}),(0,e_.a)(e=>{var t,n,r,i;let o,a,{context:l}=e;return{type:"LAYOUT",layout:(t=c.fontSize,n=l.next,o=z((i={config:r=function(e,t,n,r){var i;let o,a,l,s,{outer:c,scale:d}=(i=r??n,o=t.width/t.height,s=(l=o>(a=i.width/i.height))?eu(t,a):eh(t,a),{outer:s,inner:l?eu(i,o):eh(i,o),scale:l?i.height/t.height:i.width/t.width,rO:o,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,c.origViewBox,c.origBoundingBox),...ec(r)}).scroll),a=i.container.width/i.container.height,ep(i,a<1?1/a:1,a<1?1:+a,o)),force:!l.first}}),(0,Q.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,Q.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,ee.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return I(t,ej.get().container)},actions:(0,Q.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),rh=(0,ee.c)(ru);rh.on("LAYOUT",e=>{let t;return t=e,er(eo.resize,t)}),window.addEventListener("resize",()=>{rh.send({type:"RESIZE"})});let rx=(0,K.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,Q.a)({ticked:!1}),set:(0,Q.a)({ticked:!0}),expire:(0,e_.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),rg=(0,K.mj)({types:{},actions:{getScroll:(0,Q.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,i=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),R(t,n,r,i)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return ey(n)}},actors:{syncScrollLogic:(0,re.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!ey(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,e_.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,Q.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,e_.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,Q.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),rp=(0,ee.c)(rg,{systemId:"system-scroll1"});function rm(e){rp.send(e)}rp.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,er(ei.getDone,t)}),rp.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,er(ei.syncSyncDone,t)});let rf=(a=()=>en(ei.eventExpire),r=rx.provide({delays:{DURATION:500}}),(i=(0,ee.c)(r)).on("EXPIRE",a),i.start(),{tick:function(){i.send({type:"TICK"})}}),ry=(0,J.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function rv(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),ry.trigger.set({names:t}))}async function rw(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let rj=`
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
  ${ek}
  ${ez}
  ${eA}
  ${eI}
  ${eW}
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

${b}
`,rS=function(){let e=c.cartoConfig?.backgroundColor??c.backgroundColor??"darkgray",t={data:c,render:c,carto:c.cartoConfig,floors:c.floorsConfig};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n3,{...t,children:c.renderMap(t)}),(0,u.jsx)(nA,{}),(0,u.jsxs)("style",{children:[rj,`body { background-color: ${e}; }`]})]})};function rE(e){let{origViewBox:t,url:n}=e;return(0,u.jsx)("image",{href:n,x:t.x,y:t.y,width:t.width,height:t.height})}function rb(e){let{origViewBox:t,url:n,labels:r}=e;return void 0===r?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)("svg",{href:n,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:U(t),children:[(0,u.jsx)("style",{children:`
text, tspan {
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
}
`}),r.map((e,t)=>(0,u.jsxs)("text",{...rM(e.attrs),children:["id"in e.attrs&&"style"in e.attrs&&(0,u.jsx)("style",{children:`#${e.attrs.id} { ${e.attrs.style}; }`}),e.children&&e.children.map((e,t)=>(0,u.jsx)("tspan",{...rM(e.attrs),children:e.text??""},t))]},t))]})}let rO=/^[{].*$/,r$=/^style$/;function rM(e){return Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return!t.match(rO)&&!t.match(r$)}).map(e=>{var t;let[n,r]=e;return[!(t=n).match(/^.*-.*$/)||t.match(/^(aria|data)-.*$/)?t:t.split("-").map((e,t)=>{var n;let r;return 0===t?e:(r=(n=e).match(/^(.)(.*)$/))?`${r[1].toUpperCase()}${r[2]}`:n}).join(""),r]}))}var rN=JSON.parse('{"Main":{"contentId":"g3"}}');let rk={},rT=Object.keys(rN).map(e=>({name:e,href:n(4303)(`./floor-${e}.svg`),labels:rk?.[e]??void 0})),rD=[...Object.entries(JSON.parse('{"AMain-Content-(ViewBox)":{"x":0,"y":0}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})];function rL(e){let[t,n]=e;return n.map(e=>[t,e])}function rC(e){return e.reduce(function(e,t){let[n,r]=t,i=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,i]])},new Map)}let rR=Object.values({Main:{}}).flatMap(function(e){return Object.entries(e)});rC(Array.from(rR).flatMap(rL));let rA=rC(Array.from(rR).flatMap(rL).map(e=>{let[t,n]=e;return[n,t]}));var rI=JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}');!function(e){let t;eB.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;e1.send({type:"INIT",nfloors:t,fidx:n}),e5.postMessage({type:"INIT",cfg:e.floorsConfig})}}),eX.select.add(e=>e1.send({type:"SELECT",fidx:e})),eX.levelUp.add(()=>e1.send({type:"LEVEL.UP"})),eX.levelDown.add(()=>e1.send({type:"LEVEL.DOWN"})),eX.selectDone.add(e=>e1.send({type:"SELECT.DONE",fidx:e})),tE.fullscreen.add(rw),eB.init.add(rv),tE.position.add(()=>{var e;return e={type:"GET"},void rr.send(e)}),ei.eventTick.add(ew),ei.eventTick.add(rf.tick),ei.get.add(()=>rm({type:"GET"})),ei.sync.add(e=>rm({type:"SYNC",pos:e})),ei.syncSync.add(e=>rm({type:"SYNCSYNC",pos:e})),eB.init.add(e=>{if(e.getSearchEntries){let t=e.getSearchEntries(e);rl.postMessage({type:"INIT",entries:t})}}),td.start.add(function(e){ro.send({type:"SEARCH",req:e})}),eo.layout.add(function(e){let{layout:t,force:n}=e;eb({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>e$())}),eo.zoomStart.add(function(e){eb({type:"STYLE.ZOOM",...e})}),eo.zoomEnd.add(function(e){eb({type:"STYLE.ZOOM",zoom:e.zoom})}),eo.animation.add(function(e){eb({type:"STYLE.ANIMATION",animation:e})}),eo.animationEnd.add(function(){eb({type:"STYLE.ANIMATION.END"})}),eo.mode.add(function(e){eb({type:"STYLE.MODE",mode:e})}),ei.eventExpire.add(e$),tE.reset.add(n1),tE.fullscreen.add(n1),tE.position.add(n1),tE.recenter.add(n1),tE.zoomOut.add(n1),tE.zoomIn.add(n1),td.endDone.add(e=>tp.send({type:"DETAIL",...e})),tu.open.add(()=>{let e;return e=!0,er(tu.openDone,e)}),tu.openDone.add(e=>tp.send({type:e?"OPEN":"CANCEL"})),tu.close.add(()=>tp.send({type:"CANCEL"})),tu.closeDone.add(()=>{requestAnimationFrame(()=>void e6.get("detail")?.querySelector(".detail")?.scroll(0,0))}),eX.lock.add(e=>tC({type:"SWITCH",fidx:e})),eX.selectDone.add(()=>tC({type:"SWITCH.DONE"})),td.end.add(e=>tL.send({type:"SEARCH.END",res:e})),tu.open.add(()=>tT.set("locked")),tu.closeDone.add(()=>tC({type:"SEARCH.DONE"})),tu.closeDone.add(()=>tT.set("panning")),ei.getDone.add(e=>{null!==e&&tC({type:"SCROLL.GET.DONE",scroll:e})}),ei.syncSyncDone.add(e=>{null!==e&&tC({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),eo.resize.add(e=>{let{layout:t,force:n}=e;return tC({type:"RESIZE",layout:t,force:n})}),eo.mode.add(tI),eo.zoomStart.add(()=>{tA=!0}),eo.zoomEnd.add(()=>{tA=!1}),tE.reset.add(()=>tC({type:"HOME"})),tE.recenter.add(()=>tC({type:"RECENTER"})),tE.rotate.add(()=>tC({type:"ROTATE"})),tE.zoomOut.add(()=>tC({type:"ZOOM",z:-1,p:null})),tE.zoomIn.add(()=>tC({type:"ZOOM",z:1,p:null})),tk.multiStart.add(()=>en(ei.get)),tk.multiStart.add(()=>tT.set("touching")),tk.multiEnd.add(()=>tT.set("panning")),tk.zoom.add(e=>{let{z:t,p:n}=e;return tC({type:"ZOOM",z:t>0?1:-1,p:n})}),eB.rendered.add(()=>tC({type:"RENDERED"})),e1.start(),rd.start(),rr.start(),rh.start(),rp.start(),ro.start(),eE.start(),nB.start(),tp.start(),tL.start();let n=(d({origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:n9,isUiRendered:nz,...e}),d({...c}),{...c,origViewBox:t,...e});eJ(n),console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.2.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd();let r=document.getElementById(n.root);if(null===r)throw Error("#root not found!");r.onwheel=function(e){let t=r.children[0];e.target instanceof HTMLDivElement&&e.target?.id==="ui"||(null!==t&&t.clientWidth===t.scrollWidth||tA)&&e.preventDefault()},r.oncontextmenu=function(e){e.preventDefault()},r.ontouchmove=function(e){if(tA){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!nJ)return;e.preventDefault()},document.title=n.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void rd.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void rd.send(t)},(0,e3.createRoot)(r).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(rS,{})}));let i=document.getElementById("style-root");if(null===i)throw Error("#style-root not found!");(0,e3.createRoot)(i).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(e4,{})}))}({renderMap:function(e){let{floors:t,data:{origViewBox:n}}=e,{viewBox:r,width:i,height:o}=function(){let{scroll:e,svg:t}=eO(e=>e.layout);return{viewBox:U(t),width:X(e.width),height:X(e.height)}}(),{fidxToOnAnimationEnd:a,urls:s}=e2();return void 0===t?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"content",children:(0,u.jsx)("svg",{id:"map-svg-floors",className:"content-svg",viewBox:r,width:i,height:o,children:t.floors.map((e,t)=>(0,u.jsx)(l.Fragment,{children:(0,u.jsxs)("g",{className:`floor fidx-${t}`,onAnimationEnd:a(t),children:[(0,u.jsx)(rE,{origViewBox:n,idx:t,url:s.get(t),onAnimationEnd:a(t),labels:e.labels}),(0,u.jsx)(rb,{origViewBox:n,idx:t,url:s.get(t),onAnimationEnd:a(t),labels:e.labels})]})},t))})})},isMapRendered:function(){return!0},...{root:"root",title:"Higashi-Tsukuba Utopia",copyright:"Map image and info @ Higashi-Tsukuba Utopia, map app @ Daiji Maps",backgroundColor:"white",origViewBox:JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}'),origBoundingBox:rI,zoomFactor:2,floorsConfig:{floors:rT,initialFidx:0},...{getSearchEntries:function(){return rD.map(e=>{let[t,n]=e;return{address:t,pos:n}})},getSearchInfo:function(e){let t=rA.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},renderInfo:function(e){return(0,u.jsx)("p",{children:e.info.title})}}}})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.m=i,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.u=e=>"static/js/async/"+e+"."+({502:"81d3a9a108",760:"4cbab458e4"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,i)=>{if(n){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[n,r,i];return}for(var l=1/0,o=0;o<e.length;o++){for(var[n,r,i]=e[o],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(o--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/HigashiTsukubaUtopia/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,i,[o,l,s]=n,c=0;if(o.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","753","573"],()=>a(6807));l=a.O(l)})();