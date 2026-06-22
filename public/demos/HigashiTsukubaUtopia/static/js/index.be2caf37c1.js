(()=>{var e,t,n,r,i={4303(e,t,n){var r={"./floor-Main.svg":"1575"};function i(e){return n(o(e))}function o(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=()=>Object.keys(r),i.resolve=o,e.exports=i,i.id=4303},1575(e,t,n){"use strict";e.exports=n.p+"static/svg/floor-Main.576377384d.svg"},7261(e,t,n){"use strict";let r,i,o,a,l,s,c,d,u;var g,h=n(376),p=n(8783),m=n(5906);let f={type:"Feature",name:"",crs:{type:"",properties:{name:""}},features:[]};new DOMMatrixReadOnly;let y={root:"root",href:"map.svg",width:0,height:0,fontSize:16,title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,mapData:{areas:f,internals:f,origin:f,measures:f,viewbox:f,points:f,lines:f,multilinestrings:f,multipolygons:f},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly},origViewBox:{x:0,y:0,width:0,height:0},renderMap:function(){return(0,m.createElement)("div")},isMapRendered:()=>!0,getMapNames:()=>[],getMapPaths:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],mapSvgStyle:"",osmSearchEntries:[],getSearchEntries:()=>[],getSearchInfo:()=>null,RenderInfo:function(e){return(0,m.createElement)("p",{},e.info.title)}},x=(0,h.e)(y),v=()=>(0,p.fp)(x);var w=n(4202);n(437);var b=n(215);let S=b.gPz([b.wNn,b.QfV]),j=b.O31(S);r=b._kM({ids:j}),b.mj7(r);let E=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var M=n(3024);function O(e,t,n){let[r,i,o]=e,[a,l]=t;return r*a+i*l+o*n}function k(e,t,n){return[O(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),O(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function N(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function $(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}let D={x:0,y:0};function R(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,i=e.x*n,o=e.y*r;return{...e,x:i,y:o}}function T(e,t,n,r){return{x:e,y:t,width:n,height:r}}let z={x:0,y:0,width:1,height:1};function C(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function L(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function A(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function I(e,t){return{...e,x:t.x,y:t.y}}function H(e){return function(e){let{x:t,y:n,width:r,height:i}=e;return`${t} ${n} ${r} ${i}`}(function(e,t){let{x:n,y:r,width:i,height:o}=e;return{x:t(n),y:t(r),width:t(i),height:t(o)}}(e,function(e){return Math.round(100*e)/100}))}function P(e){let{x:t,y:n,width:r,height:i}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+i}}}function U(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function F(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function W(e){let[[t,n],[r,i]]=e;return{tl:{x:t,y:n},br:{x:r,y:i}}}function Z(e,t){return[k(e,function(e){let[t]=e;return t}(t),0),k(e,function(e){let[,t]=e;return t}(t),0),k(e,function(e){let[,,t]=e;return t}(t),1)]}function Y(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function q(e,t,n,r){var i,o;return i=function(e,t){let[n,r]=t;return[Y(t),function(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}(e),Y([-n,-r])].reduce(Z)}("number"==typeof(o=t)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,M.Fs)(e,P,F,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>k(i,e,1)),W,U)}var B=n(9008),V=n(3342),X=n(4700),_=n(7686);let G=[1,2,2.5,5,10,15,20,25,30,40,50];function K(e){Promise.all(Array.from(e,e=>Promise.resolve(e()))).catch(e=>console.log("notifyCbs0",e))}function J(e,t){Promise.all(Array.from(e,e=>Promise.resolve(e(t)))).catch(e=>console.log("notifyCbs",e))}let Q={eventTick:new Set,eventExpire:new Set,get:new Set,getDone:new Set,sync:new Set,syncSync:new Set,syncSyncDone:new Set},ee={resize:new Set,layout:new Set,zoomStart:new Set,zoomEnd:new Set,animationEnd:new Set,mode:new Set};function et(e,t,n){(0,m.useEffect)(()=>{let r=t.current;return r&&e.set(n,r),()=>{r&&e.delete(n)}},[n,t,e])}let en=new Map,er=e=>.5+.5*Math.log2(Math.max(1,e)),ei=`
position: absolute;
left: 0;
top: 0;
`,eo=`
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
`,ed=`
${es} ${ec}
`,eu=`
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
`,ep=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,em=`
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
`,eE;function eM(e){return Math.round(100*e)/100}function eO(e){return Math.round(1e3*e)/1e3}function ek(e){return Math.round(1e7*e)/1e7}let eN=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function e$(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("g",{id:"measure",children:(0,w.jsx)(eC,{})})})}function eD(){let e=(0,m.useRef)(null);return et(eY,e,"distance"),(0,w.jsxs)("div",{ref:e,id:"distance",children:[(0,w.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),eN.map(e=>(0,w.jsxs)(m.Fragment,{children:[(0,w.jsx)("p",{id:`distance-x-${e+1}`,className:"distance distance-x","data-idx":e+1,style:{"--distance-idx":`${e+1}`}}),(0,w.jsx)("p",{id:`distance-y-${e+1}`,className:"distance distance-y","data-idx":e+1,style:{"--distance-idx":`${e+1}`}})]},e)),(0,w.jsx)("style",{children:(0,w.jsx)(eq,{})})]})}let eR=new Map;function eT(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null);return et(eR,e,"lon"),et(eR,t,"lat"),(0,w.jsxs)("div",{id:"coordinate",children:[(0,w.jsx)("p",{ref:e,id:"longitude"}),(0,w.jsx)("p",{ref:t,id:"latitude"}),(0,w.jsx)("style",{children:(0,w.jsx)(eI,{})})]})}let ez=new Map;function eC(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null);return et(ez,e,"horizontal"),et(ez,t,"vertical"),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("path",{ref:e,id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),(0,w.jsx)("path",{ref:t,id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"}),eN.map((e,t)=>(0,w.jsx)(m.Fragment,{children:(0,w.jsx)(eL,{idx:t})},t))]})}function eL(e){let{idx:t}=e,n=(0,m.useRef)(null);return et(ez,n,`ring${t}`),(0,w.jsx)("path",{ref:n,id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none"})}let eA=new Map;function eI(){return(0,w.jsxs)(w.Fragment,{children:[eF,eW,eZ]})}let eH="100vw",eP="100svh",eU="var(--distance-radius-client)",eF=`
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
  ${ea}
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
`,eX=(i=`${eU} * var(--distance-idx)`,o=`${eH} / 2 + ${i}`,a=`${eP} / 2`,`
.distance-x {
  transform: translate(calc(${o}), calc(${a})) scale(0.5);
}
`),e_=(l=`${eU} * var(--distance-idx)`,s=`${eH} / 2`,c=`${eP} / 2 + ${l}`,`
.distance-y {
  transform: translate(calc(${s}), calc(${c})) scale(0.5);
}
`);function eG(e){return void 0!==e&&"number"==typeof e}function eK(e,t,n,r,i,o){return new DOMMatrixReadOnly(e instanceof Array?e:eG(e)&&eG(t)&&eG(n)&&eG(r)&&eG(i)&&eG(o)?[e,t,n,r,i,o]:void 0)}function eJ(e){let{container:t,outer:n,svgScale:r,inner:i}=e,{x:o,y:a}=n;return{container:t,scroll:t,content:eK(),svgOffset:{x:-o,y:-a},svgScale:r,svg:i}}function eQ(e){return eK().multiply(function(e){let{svgOffset:t}=e;return eK().translate(-t.x,-t.y)}(e)).multiply(function(e){let{svgScale:t}=e;return eK().scale(1/t,1/t)}(e)).multiply(function(e){let{svg:t}=e;return eK().translate(-t.x,-t.y)}(e))}function e0(e){return e.content.multiply(eQ(e))}function e1(e){return(function(e){let{scroll:t}=e;return eK().translate(t.x,t.y)})(e).multiply(e0(e))}function e5(e,t){let n=e.height,r=n*t;return T((e.width-r)/2,0,r,n)}function e2(e,t){let n=e.width,r=n/t;return T(0,(e.height-r)/2,n,r)}let e3={...{container:z,scroll:z,content:eK(),svgOffset:{x:-0,y:-0},svgScale:1,svg:z},config:{fontSize:16,container:z,outer:z,inner:z,svgScale:1}};function e4(e,t){let n=L(e.scroll);return e6(e,t,t,n)}function e6(e,t,n,r){let i=e1(e).inverse().transformPoint(r),o=q(e.scroll,[t,n],r.x,r.y),a=R(e.svgOffset,[t,n]),l=q(e.svg,[t,n],i.x,i.y);return{...e,scroll:o,svgOffset:a,svg:l}}function e7(e,t){var n,r;let i=L({...e.scroll,x:0,y:0}),o=(n=i.x,r=i.y,eK().translate(n,r).rotate(t).translate(-n,-r)).multiply(e.content);return{...e,content:o}}function e8(e,t){let n=e.scroll,r=$(R(t,-1),n);return(0,M.Fs)(e,e=>({...e,scroll:A(e.scroll,r)}),e=>{let t,r,i,o,a,l,s;return t=I(e.scroll,n),r=e.content.inverse(),o=N(i=L(e.scroll),$(e.scroll,n)),a=r.transformPoint(i),l=R($(r.transformPoint(o),a),-e.svgScale),s=A(e.svg,l),{...e,scroll:t,svg:s}})}let e9=new Map;function te(e,t,n){let r=performance.now(),i=requestAnimationFrame(function i(o){let a=Math.abs(o-r)/t;if(n?.tickcb?.(a,n?.cbdata),a<1){let t=requestAnimationFrame(i);e9.set(e,t)}else{let t=e9.get(e);void 0!==t&&cancelAnimationFrame(t),e9.delete(e),n?.donecb?.(n?.cbdata)}});e9.set(e,i)}function tt(e,t,n){e.classList.add(n?t:`not-${t}`),e.classList.remove(n?`not-${t}`:t)}let tn=(e,t,n)=>(1-n)*e+n*t,tr=e=>1-(1-e)**3;var ti=n(1717);let to={zoomIn:new Set,zoomOut:new Set,rotate:new Set,reset:new Set,recenter:new Set,fullscreen:new Set,position:new Set},ta=()=>K(to.zoomIn),tl=()=>K(to.zoomOut),ts=()=>K(to.rotate),tc=()=>K(to.reset),td=()=>K(to.recenter),tu={lock:new Set,select:new Set,levelUp:new Set,levelDown:new Set,selectDone:new Set,unlock:new Set},tg={init:new Set,rendered:new Set},th=function(e){J(tg.init,e)},tp=function(){K(tg.rendered)},tm={start:new Set,end:new Set,endDone:new Set},tf={multiStart:new Set,multiEnd:new Set,zoom:new Set},ty={open:new Set,openDone:new Set,close:new Set,closeDone:new Set},tx=(0,h.e)(!1),tv=e=>tx.set(()=>e),tw=new Map,tb=new Set,tS=new Map;function tj(){return!tw.has("S")&&(tb.add("S"),!0)}let tE=(0,h.e)({scroll:z,client:{width:0,height:0},timeStamp:0});function tM(e){let t=e.currentTarget;null!==t&&tE.set({scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})}function tO(){return tE.get()}let tk=(0,h.e)("panning");tk.subscribe(e=>{let t;return t=e,J(ee.mode,t)});let tN=(0,V.mj)({types:{},guards:{isHoming:e=>{let{context:{animationReq:t}}=e;return null!==t&&"home"===t.type},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>x.get().isMapRendered(),isUiRendered:()=>x.get().isUiRendered()},actions:{setRendered:(0,X.a)({rendered:!0}),emitGetScroll:(0,ti.a)(()=>({type:"SCROLL.GET"})),emitSyncScroll:(0,ti.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNC",pos:t.scroll}}(t)}),emitSyncScrollSync:(0,ti.a)(e=>{let{context:t}=e;return function(e){let{layout:t}=e;return{type:"SCROLL.SYNCSYNC",pos:t.scroll}}(t)}),prepareZoom:(0,X.a)((e,t)=>{let{context:n}=e;return function(e,t){let{z:n,p:r}=t,i={type:"zoom",z:n,p:r??L(e.layout.container)};return{...e,animationReq:i}}(n,t)}),prepareHome:(0,X.a)(e=>{let{context:t}=e;return{...t,animationReq:{type:"home"}}}),prepareRotate:(0,X.a)(e=>{let t,{context:n}=e;return t={type:"rotate",deg:90,p:L(n.layout.container)},{...n,animationReq:t}}),clearAnimation:(0,X.a)(e=>{let{context:t}=e;return{...t,animationReq:null}}),startZoom:(0,X.a)(e=>{var t,n,r,i,o,a,l,s,c,d,u,g,h;let p,m,f,y,v,w,b,S,j,E,M,O,{context:k}=e;return t=k.animationReq,n=k.layout,E=null===t?null:"zoom"===t.type?(r=n,i=t.z,o=t.p,p=e1(r).inverse().transformPoint(o),m=1/(a=i,Math.pow(x.get().zoomFactor,a)),f=eK().scale(1/m,1/m),{type:"Zoom",svg:q(r.svg,m,p.x,p.y),svgScale:r.svgScale*m,q:{from:eK(),to:f,origin:o}}):"home"===t.type?(l=n,y=L((s=function(e){let{config:t,content:n}=e;return{config:t,...eJ(t),content:n}}(n)).config.inner),v=e1(l).transformPoint(y),w=s.svgScale/l.svgScale,S=(function(e,t){if(e instanceof DOMMatrixReadOnly)return eK(1,0,0,1,e.e,e.f);if("number"==typeof e&&"number"==typeof t)return eK(1,0,0,1,e,t);throw Error("dommatrixreadonlyTranslateOnly")})((b=L(l.container)).x-v.x,b.y-v.y).multiply((c=1/w,d=1/w,u=v.x,g=v.y,eK().scale(c,d,1,u,g,0))),{type:"Zoom",svg:s.svg,svgScale:s.svgScale,q:{from:eK(),to:S,origin:null}}):(h=t.p,j=eK().rotate(90),{type:"Rotate",deg:90,q:{from:eK(),to:j,origin:h}}),M=k.layout,O=function(e,t){var n,r,i;return null===t?e:"Move"===t.type?(n=t.move,{...e,scroll:I(e.scroll,n)}):"Zoom"===t.type?(r=t.svg,i=t.svgScale,{...e,svg:r,svgScale:i}):e7(e,t.deg)}(k.layout,E),{...k,animation:E,prevLayout:M,layout:O}}),endZoom:(0,X.a)(e=>{var t,n;let r,i,{context:o}=e;return r=o.zoom*(null===(t=o.animationReq)||"zoom"!==t.type?1:Math.pow(2,t.z)),i=o.rotate+(null===(n=o.animationReq)||"rotate"!==n.type?0:n.deg),{...o,prevLayout:null,animation:null,zoom:r,rotate:i}}),endHome:(0,X.a)(e=>{let t,n,{context:r}=e;return t=L(r.origLayout.container),n=e7(e4(r.origLayout,9),r.rotate),{...r,cursor:t,layout:n}}),emitZoomStart:(0,ti.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.START",layout:t,zoom:n,q:r?.q??null}}(t)}),emitZoomEnd:(0,ti.a)(e=>{let{context:t}=e;return function(e){let{layout:t,zoom:n,animation:r}=e;return{type:"ZOOM.END",layout:t,zoom:n,q:r?.q??null}}(t)}),resetCursor:(0,X.a)(e=>{let t,{context:n}=e;return t=L(n.layout.container),{...n,cursor:t}}),resizeLayout:(0,X.a)((e,t)=>{let{context:n}=e;return function(e,t){let{layout:n}=t;return{...e,rendered:!1,origLayout:n,layout:e4(n,9)}}(n,t)}),resetScroll:(0,X.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tO(),n=e8(e.layout,t);return{...e,layout:n}}(t)}),emitSyncLayout:(0,ti.a)(e=>{let{context:t}=e;return function(e){let{layout:t,rendered:n}=e;return{type:"SYNC.LAYOUT",layout:t,force:n}}(t)}),prepareSearch:(0,X.a)((e,t)=>{let{context:n}=e;return function(e,t){let{pos:n}=t;return{...e,cursor:n}}(n,t)}),emitSearchStart:(0,ti.a)(e=>{let{context:t}=e;return function(e){let{scroll:t}=tO();return{type:"SEARCH.START",req:{psvg:e1(e8(e.layout,t)).inverse().transformPoint(e.cursor)}}}(t)}),emitSearchEndDone:(0,ti.a)((e,t)=>{let{context:n}=e;return function(e,t){let{res:n}=t,{scroll:r}=tO(),i=e8(e.layout,r);return{type:"SEARCH.END.DONE",res:null===n?null:{...n,layout:i}}}(n,t)}),emitSwitch:(0,ti.a)((e,t)=>{let{context:n}=e;return function(e){let{fidx:t}=e;return{type:"SWITCH",fidx:t}}(t)}),emitSwitchDone:(0,ti.a)({type:"SWITCH.DONE"}),enterZooming:()=>tv(!0),exitZooming:()=>tv(!1),unlockScroll:()=>!!tb.has("S")&&(tb.delete("S"),!0)}}).createMachine({id:"viewer",initial:"WaitingForResizeRequest",context:{rendered:!1,origLayout:e3,prevLayout:null,layout:e3,cursor:L(e3.container),zoom:1,rotate:0,animationReq:null,animation:null},states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"Resizing"}}},Resizing:{initial:"WaitingForMapRendered",onDone:"Idle",states:{WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,_.j)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"emitSyncLayout",on:{RENDERED:{actions:["setRendered","emitSyncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"emitSyncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Appearing"}}},Appearing:{on:{"ANIMATION.END":{actions:"emitZoomEnd",target:"Done"}}},Done:{type:"final"}}},Idle:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"Resizing"},SEARCH:{guard:()=>tj(),actions:{type:"prepareSearch",params:e=>{let{event:t}=e;return t}},target:"Searching"},SWITCH:{guard:()=>tj(),actions:{type:"emitSwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},RECENTER:{guard:()=>tj(),target:"Recentering"},ZOOM:{guard:()=>tj(),actions:{type:"prepareZoom",params:e=>{let{event:t}=e;return t}},target:"Zooming"},HOME:{guard:()=>tj(),actions:"prepareHome",target:"Zooming"},ROTATE:{guard:()=>tj(),actions:"prepareRotate",target:"Zooming"}}},Searching:{initial:"Starting",onDone:"Idle",states:{Starting:{always:{actions:"emitSearchStart",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"emitSearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchDone"}}},WaitingForSearchDone:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Idle",states:{Animating:{on:{"SWITCH.DONE":{actions:"emitSwitchDone",target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Idle",states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Layouting"}}},Layouting:{always:{actions:["emitSyncLayout","emitSyncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Idle",entry:"enterZooming",exit:["exitZooming","unlockScroll"],states:{Stopping:{entry:"emitGetScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{actions:"resetScroll",target:"Starting"}}},Starting:{always:{actions:["startZoom","emitZoomStart"],target:"Ending"}},Ending:{on:{"ANIMATION.END":{actions:["endZoom","emitZoomEnd","emitSyncLayout","emitSyncScroll"],target:"Homing"}}},Homing:{always:[{guard:"isHoming",actions:["endHome","emitSyncLayout","emitSyncScroll"],target:"Rendering2"},{target:"Rendering2"}]},Rendering2:{after:{50:{target:"Done"}}},Done:{entry:"clearAnimation",type:"final"}}}}}),t$=(0,_.c)(tN,{systemId:"system-viewer1"});function tD(e){t$.send(e)}t$.on("SEARCH.START",e=>{let t,{req:n}=e;return t=n,J(tm.start,t)}),t$.on("SEARCH.END.DONE",e=>{let t,n,{res:r}=e;null===r?t$.send({type:"SEARCH.DONE"}):(t=r,J(tm.endDone,t),n=r.psvg,J(ty.open,n))}),t$.on("ZOOM.START",e=>{let t;return t=e,J(ee.zoomStart,t)}),t$.on("ZOOM.END",e=>{let t;return t=e,J(ee.zoomEnd,t)}),t$.on("SWITCH",e=>{let t,{fidx:n}=e;return t=n,J(tu.select,t)}),t$.on("SWITCH.DONE",()=>K(tu.unlock)),t$.on("SYNC.LAYOUT",e=>{let t,{layout:n,force:r}=e;return t={layout:n,force:r},J(ee.layout,t)}),t$.on("SCROLL.SYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.sync,t)}),t$.on("SCROLL.SYNCSYNC",e=>{let t,{pos:n}=e;return t=n,J(Q.syncSync,t)}),t$.on("SCROLL.GET",()=>K(Q.get));let tR=!1,tT=!1;function tz(e){tR="locked"===e,tT="locked"===e}let tC=new Map,tL=new Map,tA=new Map,tI=new Map,tH=new Map,tP=new Map;function tU(e,t){let n=null===e||null===e.origin?"0% 0%":`${e.origin.x}px ${e?.origin.y}px`,r=e?.to.b!==0;Array.from(tI,i=>{let[,o]=i,a=o.style.setProperty.bind(o.style);tt(o,"zooming",null!==e),r&&tt(o,"rotating",null!==e),a("--zoom-origin",n),a("--zoom-zoom",t.toString()),a("--zoom-s",null),a("--zoom-s-inv",null),a("--zoom-k",null),a("--zoom-k-inv",null)}),Array.from(tH,t=>{let[,n]=t,i=n.style.setProperty.bind(n.style);i("--zoom-s",null===e?null:e.to.a.toString()),i("--zoom-s-symbols",null===e?null:e.to.a.toString()),tt(n,"zooming",null!==e),r&&tt(n,"rotating",null!==e)}),Array.from(tP,t=>{let[,n]=t;tt(n,"zooming",null!==e),r&&tt(n,"rotating",null!==e)}),null!==e&&te("zoom",500,{tickcb:tW,donecb:()=>{tD({type:"ANIMATION.END"}),K(ee.animationEnd)},cbdata:{animation:e,zoom:t}})}let tF=e=>.5+.5*Math.log2(Math.max(1,e));function tW(e,t){t&&(0===t.animation.to.b?function(e,t){let{tx:n,ty:r,s:i,sinv:o,z:a,zinv:l,k:s,kinv:c}=function(e,t){let{animation:n,zoom:r}=e,i=n.from,o=n.to,a=tn(i.e,o.e,tr(t)),l=tn(i.f,o.f,tr(t)),s=tn(i.a,o.a,tr(t)),c=r*s,d=tn(r,c,tr(t)),u=tn(tF(r),tF(r*s),tr(t));return{tx:a,ty:l,s,sinv:1/s,z:d,zinv:1/d,k:u,kinv:1/u}}(t,e);Array.from(tI,e=>{let[,t]=e,d=t.style.setProperty.bind(t.style);d("--zoom-tx",`${n}px`),d("--zoom-ty",`${r}px`),d("--zoom-s",`${i}`),d("--zoom-s-inv",`${o}`),d("--zoom-z",`${a}`),d("--zoom-z-inv",`${l}`),d("--zoom-k",`${s}`),d("--zoom-k-inv",`${c}`)})}(e,t):function(e,t){let{deg:n,deginv:r}=function(e,t){let{animation:n}=e,r=tn(tZ(n.from),tZ(n.to),tr(t));return{deg:r,deginv:1/r}}(t,e);Array.from(tI,e=>{let[,t]=e,i=t.style.setProperty.bind(t.style);i("--zoom-deg",`${n}deg`),i("--zoom-deg-inv",`${r}deg`)})}(e,t))}function tZ(e){let t=180/Math.PI*Math.atan2(e.b,e.a);return t>=0?t:t+360}let tY=new Map;function tq(e,t){Array.from(tY,n=>{let[,r]=n;tt(r,"shown",e),tt(r,"appearing",t)})}let tB=`
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
`,tV=(0,h.e)(e3),tX=(0,V.mj)({types:{events:{},context:{}},actions:{updateZoom:(0,X.a)({zoom:(e,t)=>t.zoom}),updateRotate:(0,X.a)({}),updateSvgMatrix:(0,X.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return e0(t)}}),updateGeoMatrix:(0,X.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(x.get().mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,X.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,i=Math.max(n.width,n.height)/2*r,o=Math.round(Math.log10(i)),a=(t=i/Math.pow(10,o-1),G.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r}}(t)}}),updateScroll:(0,X.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:i}=t,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}}),updateCoord:e=>{let t,n,r,i,{context:{geoPoint:o}}=e;return t=o.x>0?"E":"W",n=o.y>0?"N":"S",r=`${t} ${ek(Math.abs(o.x))}`,i=`${n} ${ek(Math.abs(o.y))}`,void Array.from(eR,e=>{let[t,n]=e;"lon"===t&&(n.textContent=r),"lat"===t&&(n.textContent=i)})},updateDistance:e=>{let{context:{distanceRadius:t}}=e;return function(e){let{svg:t,client:n}=e;Array.from(eY,e=>{let[,r]=e;Array.from(r.children,e=>{let n=e.getAttribute("data-idx");if(!n)return;let r=Number(n);"number"==typeof r&&(e.textContent=`${t*r}m`)}),r.style.setProperty.bind(r.style)("--distance-radius-client",`${n}px`)})}(t)},updateMeasure:e=>{var t,n,r;let i,o,a,l,{context:{layout:s,distanceRadius:c}}=e;return t=s.container.width,n=s.container.height,r=c.client,i=`M0,${n/2} h${t}`,o=`M${t/2},0 v${n}`,(a=ez.get("horizontal"))&&a.setAttribute("d",i),void((l=ez.get("vertical"))&&l.setAttribute("d",o),eN.forEach(e=>{let i=ez.get(`ring${e}`);if(!i)return;let o=function(e){let{width:t,height:n,r}=e,i=`${t}:${n}:${r}`,o=eA.get(i),a=`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1");return o||eA.set(i,a),a}({width:t,height:n,r:eM(r*(e+1))});i.setAttribute("d",o)}))}}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e3,zoom:1,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:D,distanceRadius:{svg:0,client:0},geoRange:{start:D,end:D},mode:"panning"},on:{"STYLE.LAYOUT":{actions:[(0,X.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),e=>{let{event:t}=e;return tV.set(t.layout)},"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius","updateDistance","updateMeasure",(0,_.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}}),e=>{var t;let n,{context:r}=e;return n=eQ(t=r.layout),void(Array.from(tC,e=>{let[,r]=e,i=r.style.setProperty.bind(r.style);i("--layout-content-matrix",t.content.toString()),i("--layout-scroll-width",`${eM(t.scroll.width)}px`),i("--layout-scroll-height",`${eM(t.scroll.height)}px`),i("--layout-svg-to-content-matrix",new DOMMatrixReadOnly([n.a,n.b,n.c,n.d,eM(n.e),eM(n.f)]).toString())}),Array.from(tL,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svg-x",`${eM(t.svg.x).toString()}px`),r("--layout-svg-y",`${eM(t.svg.y).toString()}px`),r("--layout-svg-width",`${eM(t.svg.width).toString()}px`),r("--layout-svg-height",`${eM(t.svg.height).toString()}px`)}))},e=>{var t;let{context:n}=e;return t=n.layout,void Array.from(tA,e=>{let[,n]=e,r=n.style.setProperty.bind(n.style);r("--layout-svgscale",`${eM(t.svgScale)}`),r("--layout-fontsize",`${eM(t.config.fontSize)}`)})},e=>{var t,n;let r,i,{context:o}=e;return t=o.layout,r=er(n=o.zoom),i=t.config.fontSize*t.svgScale*er(n),void Array.from(en,e=>{let[,t]=e,n=t.style.setProperty.bind(t.style);n("--map-symbol-size",`${i/72}`),n("--map-symbol-size-k",`${r}`)})}]},"STYLE.ZOOM":{actions:[{type:"updateZoom",params:e=>{let{event:t}=e;return t}},e=>{let{context:{zoom:t}}=e;return tU(null,t)}]},"STYLE.SCROLL":{actions:[{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}},"updateCoord"]},"STYLE.MODE":{actions:(0,X.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",entry:e=>{let{context:t}=e;return tq(t.shown,t.appearing)},states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:[(0,X.a)({appearing:!0}),e=>{let{context:t}=e;return tq(t.shown,t.appearing)}],target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:[(0,X.a)({appearing:!1,shown:!0}),e=>{let{context:{zoom:t}}=e;return tU(null,t)},e=>{let{context:t}=e;return tq(t.shown,t.appearing)},"updateDistance","updateMeasure"],target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:[e=>{let{context:{zoom:t},event:{animation:n}}=e;return tU(n,t)},(0,X.a)({animating:!0}),()=>te("zoom",500)],target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,X.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:[e=>{let{context:{zoom:t}}=e;return tU(null,t)},(0,X.a)({animating:!1})],target:"Idle"}}}}}),t_=(0,_.c)(tX,{systemId:"system-viewer1"});function tG(e){t_.send(e)}function tK(e){return(0,B.d4)(t_,t=>e(t.context))}function tJ(){tG({type:"STYLE.SCROLL",currentScroll:tO()})}let tQ=new Map,t0=(0,h.e)(0),t1=(0,V.mj)({types:{context:{},events:{},emitted:{}},actions:{updateInit:()=>void Array.from(tQ,e=>{let t,[n,r]=e;(t=r.style.setProperty.bind(r.style))("will-change",null),t("animation",null),t("visibility","hidden")}),updateLoad:e=>{let t,{context:{fidx:n}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tQ,e=>{var n;let r,[i,o]=e;return n=t.test(i),r=o.style.setProperty.bind(o.style),void(n?(r("will-change","opacity"),r("animation",`${eS} 250ms linear`),r("visibility",null)):(r("will-change",null),r("animation",null),r("visibility","hidden")))})},updateSwitch:e=>{let t,{context:{fidx:n,prevFidx:r}}=e;return t=RegExp(`^.*-${n}$`),void Array.from(tQ,e=>{let[n,i]=e;return function(e,t,n){let r=e.style.setProperty.bind(e.style);if(t){let e=`${n?eS:"xxx-disappearing"} 250ms linear`;r("will-change","opacity"),r("animation",e),r("visibility",null)}else r("will-change",null),r("animation",null),r("visibility",n?null:"hidden")}(i,null!==r,t.test(n))})}}}).createMachine({id:"floors1",context:{nfloors:0,blobs:new Map,urls:new Map,fidx:0,prevFidx:-1},initial:"Uninited",states:{Uninited:{on:{INIT:{actions:[(0,X.a)({nfloors:e=>{let{event:t}=e;return t.nfloors},fidx:e=>{let{event:t}=e;return t.fidx}}),e=>{let{event:t}=e;return t0.set(t.fidx)},"updateInit"],target:"Loading"}}},Loading:{on:{IMAGE:{actions:(0,X.a)({blobs:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.blobs.set(n,r))},urls:e=>{let{context:t,event:{fidx:n,blob:r}}=e;return new Map(t.urls.set(n,URL.createObjectURL(r)))}}),target:"Loaded"}}},Loaded:{always:[{guard:e=>{let{context:t}=e;return t.nfloors===t.blobs.size},actions:"updateLoad",target:"Animating"},"Loading"]},Idle:{on:{SELECT:{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:[(0,X.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),e=>{let{event:t}=e;return t0.set(t.fidx)},"updateSwitch"],target:"Animating"},"LEVEL.UP":[{guard:e=>{let{context:t}=e;return t.fidx===t.nfloors-1}},{actions:(0,ti.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx+1}})}],"LEVEL.DOWN":[{guard:e=>{let{context:t}=e;return 0===t.fidx}},{actions:(0,ti.a)(e=>{let{context:t}=e;return{type:"LOCK",fidx:t.fidx-1}})}]}},Animating:{on:{"SELECT.DONE":{actions:[(0,X.a)({prevFidx:null}),"updateSwitch"],target:"Idle"}}}}}),t5=(0,_.c)(t1);t5.on("LOCK",e=>{let t,{fidx:n}=e;return t=n,J(tu.lock,t)});let t2=new Worker(new URL(n.p+n.u(103),n.b),Object.assign({},{type:"module"},{type:void 0}));function t3(){var e;let{fidx:t,prevFidx:n,urls:r}=(e=e=>{let{fidx:t,prevFidx:n,urls:r}=e;return{fidx:t,prevFidx:n,urls:r}},(0,B.d4)(t5,t=>e(t.context))),i=(0,m.useCallback)(e=>()=>{let n;return e!==t?void 0:(n=e,J(tu.selectDone,n))},[t]),o=(0,m.useCallback)(e=>()=>{let r;return null!==n||e===t?void 0:(r=e,J(tu.lock,r))},[t,n]);return{fidx:t,prevFidx:n,fidxToOnAnimationEnd:i,fidxToOnClick:o,urls:r}}t2.onmessage=e=>{let t=e.data;switch(t.type){case"INIT.DONE":break;case"FETCH.DONE":{let{fidx:e,blob:n}=t;t5.send({type:"IMAGE",fidx:e,blob:n})}}},t2.onerror=e=>{console.error("floors error",e)},t2.onmessageerror=e=>{console.error("floors messageerror",e)};var t4=n(5193),t6=n(3166);let t7=`
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
`,t8=new Map;function t9(e,t,n){(0,m.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:t8.get(n)??null;if(null===r)return;let i=r.querySelector(`#${e}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});t8.set(e,o),(0,t6.createRoot)(o).render(t)})(e,t,n),[e,n,t])}let ne={bus:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,w.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,w.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,w.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})},elevator:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,w.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,w.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,w.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,w.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,w.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,w.jsx)("use",{x:"8.5",href:"#_person2"}),(0,w.jsx)("use",{x:"17",href:"#_person2"})]})},escalator:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,w.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})},escalator_down:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,w.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,w.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},escalator_up:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,w.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"}),(0,w.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},information:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,w.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,w.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})},locker:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 34.625,11 a 7.5,7.5 0 1 0 0,7 l 2.375,0 2.5,-2.5 2,2 2,-2 2,2 2,-2 2,2 2.5,-2.5 c 0.5,-0.5 0.5,-1 0,-1.5 L 49.5,11 z M 27,14.5 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"16.5",y:"26.5",width:"39",height:"32",fill:"none",stroke:"white",strokeWidth:"5"}),(0,w.jsx)("path",{d:"M 33.5,31.5 A 1.5,1.5 0 0 0 32,33 l 0,2.5 -3,0 0,18 14.5,0 0,-18 -3.5,0 0,-2.5 a 1.5,1.5 0 0 0 -1.5,-1.5 l -5,0 z m 0,1.5 5,0 0,2.5 -5,0 0,-2.5 z m -8,2.5 A 2.5,2.5 0 0 0 23,38 l 0,13 a 2.5,2.5 0 0 0 2.5,2.5 l 2,0 0,-18 -2,0 z m 19.5,0 0,18 1.5,0 A 2.5,2.5 0 0 0 49,51 l 0,-13 a 2.5,2.5 0 0 0 -2.5,-2.5 l -1.5,0 z",fill:"white",stroke:"none"})]})},parking:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,children:[(0,w.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,w.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})},smoking:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("rect",{x:"8",y:"46",height:"8",width:"48",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"57.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,w.jsx)("rect",{x:"61.75",y:"46",width:"2.5",height:"8",fill:"white",stroke:"none"}),(0,w.jsx)("path",{d:"m 59,44 0,-5 a 3.5,3.5 0 0 0 -3.5,-3.5 l -9,0 A 5,5 0 0 1 42,28 6.5,6.5 0 0 1 42,15",fill:"none",stroke:"white",strokeWidth:"2.5"}),(0,w.jsx)("path",{d:"m 63,44 0,-6 a 9,9 0 0 0 -9,-9 l -5,0 A 6.5,6.5 0 0 0 44,18",fill:"none",stroke:"white",strokeWidth:"2.5"})]})},stairs:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})},stairs_down:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,w.jsx)("path",{d:"M 42,57 54,45 m -12,3 0,9 9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},stairs_up:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"}),(0,w.jsx)("path",{d:"M 54,45 42,57 m 12,-3 0,-9 -9,0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})},toilets:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36,-36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,w.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,w.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,w.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,w.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})},toilets_men:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"36",cy:"9",r:"5"}),(0,w.jsx)("path",{d:"m 24,22 0,15.5 a 2.25,2.25 0 0 0 4.5,0 l 0,-14.5 1,0 0,39.5 a 3,3 0 0 0 6,0 l 0,-22.5 1,0 0,22.5 a 3,3 0 0 0 6,0 l 0,-39.5 1,0 0,14.5 a 2.25,2.25 0 0 0 4.5,0 L 48,22 a 7,7 0 0 0 -7,-7 l -10,0 a 7,7 0 0 0 -7,7 z"})]})]})},toilets_women:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"36",cy:"10",r:"5"}),(0,w.jsx)("path",{d:"m 35.5,64 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -6.5,0 7,-23.5 -1,0 -4.1,13.4 a 2.1,2.1 0 0 1 -4,-1.2 L 26.5,20.5 A 6.5,6.5 0 0 1 33,16 l 6,0 a 6.5,6.5 0 0 1 6.5,4.5 l 4.6,15.2 a 2.1,2.1 0 0 1 -4,1.2 L 42,23.5 l -1,0 7,23.5 -6.5,0 0,17 a 2.5,2.5 0 0 1 -5,0 l 0,-17 -1,0 z"})]})]})},water:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,children:[(0,w.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,w.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,w.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,w.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,w.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,w.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,w.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,w.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,w.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,w.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,w.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,w.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,w.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,w.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,w.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,w.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,w.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,w.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})},wheelchair:function(e){return(0,w.jsxs)("g",{id:`X${e.id}`,transform:"translate(-36, -36)",children:[(0,w.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,w.jsxs)("g",{fill:"white",stroke:"none",children:[(0,w.jsx)("circle",{cx:"30",cy:"11.75",r:"5"}),(0,w.jsx)("path",{d:"m 63.5,55.5 a 2.25,2.25 0 0 0 0,-4.5 l -4,0 L 51,36.5 C 50.48,35.61 49.5,35 48.5,35 L 36,35 35.8,31 45,31 a 2.25,2.25 0 0 0 0,-4.5 l -9.5,0 -0.2,-4.3 c -0.18,-2.6 -2.2,-4.75 -4.9,-4.6 -2.7,0.15 -5,2.5 -4.8,5.1 L 26.45,38 c 0.2,2.6 2.45,4.5 5.05,4.5 l 16.5,0 6.5,11.5 c 0.25,0.5 1.3,1.5 2.5,1.5 z"}),(0,w.jsx)("path",{d:"M 23.2,29 A 19,19 0 1 0 50.9,52.5 L 48.2,48 A 15,15 0 1 1 23.5,33.8 z"})]})]})}};function nt(){return(0,w.jsx)("g",{className:"assets",children:(0,w.jsx)(nn,{})})}function nn(){return(0,w.jsx)("g",{className:"symbols",children:Object.entries(ne).map((e,t)=>{let[n,r]=e;return(0,w.jsx)(m.Fragment,{children:r({id:n})},t)})})}function nr(e){return e>.5?-1:+(e<.5)}function ni(e){return e<.3?1:e>.7?-1:0}function no(e){return{open:e,animating:!1}}function na(e){return e.open||e.animating?null:{open:!0,animating:!0}}function nl(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function ns(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function nc(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function nd(e){let{open:t,animating:n}=e;return t||n}function nu(e,t,n,r){let i={x:t/2,y:n/2},o=t/20,a=o/2;function l(t){var n;let r,i;return n={x:e.h,y:e.v},r=t.x*n.x,i=t.y*n.y,{...t,x:r,y:i}}let s=e.th<Math.PI/4,c=0===e.v,d=0===e.h,u=l(R(i,-1)),g=l(c||d?$(R(i,-1),{x:r,y:r}):$(R(i,-1),{x:s?r:0,y:s?0:r})),[h,p]=d?[{x:-a,y:0},{x:a,y:0}]:c?[{x:0,y:-a},{x:0,y:a}]:s?[{x:0,y:0},l({x:0,y:o})]:[{x:0,y:0},l({x:o,y:0})],m=N(u,h),f=N(u,p);return{p:u,q:g,a:m,b:f}}let ng=e=>{let{x:t,y:n}=e;return`${eO(t)}, ${eO(n)}`},nh=`
.not-animating {
  transform-origin: 0 0;
  opacity: var(--b);
  &.detail {
    transform: translate(var(--balloon-tx-b-x), var(--balloon-tx-b-y)) scale(var(--b)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
  &.balloon {
    transform: translate(var(--balloon-tx-b-x), var(--balloon-tx-b-y)) scale(var(--b)) translate(var(--balloon-pww), var(--balloon-phh)) translate3d(0px, 0px, 0px);
  }
}

.animating {
  &.detail,
  &.balloon {
    --duration: 400ms;
    transform-origin: 0 0;
    will-change: opacity, transform;
  }
  &.detail {
    animation: xxx-detail var(--duration) var(--timing);
  }
  &.balloon {
    animation: xxx-balloon var(--duration) var(--timing);
  }
  &.closed {
    --timing: ${eb};
  }
  &.opened {
    --timing: ${ew};
  }
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
`,np=new Map,nm=new Map;function nf(e,t){let{open:n,animating:r}=t;Array.from(e,e=>{let[,t]=e;t.classList.add(n?"opened":"closed"),t.classList.remove(n?"closed":"opened"),tt(t,"animating",r)})}let ny=new Map,nx=new Map;function nv(e){return function(t,n){let r=t[n],i=e(r);return t[n]=null===i?r:i,t}}let nw=(0,V.mj)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return nd(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return nd(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,X.a)({canceling:()=>!0}),endCancel:(0,X.a)({canceling:()=>!1}),open:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nv(na)(n,r)}}),close:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nv(ns)(n,r)}}),handle:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return nv(n[r].open?nl:nc)(n,r)}}),updateDetail:(0,X.a)({detail:(e,t)=>t,p:(e,t)=>{let{psvg:n,layout:r}=t;return e1(r).transformPoint(n)}}),updateBalloon:(0,X.a)({balloon:e=>{var t;let n,r,i,o,a,l,s,c,d,u,{context:{detail:g,p:h}}=e;return g&&h&&(t=g.layout,l=function(e,t){let{x:n,y:r}=t,i=e.width/e.height,o={x:n/e.width,y:r/e.height},a=i>1?nr(o.x):ni(o.x);return{h:a,v:i>1?ni(o.y):nr(o.y),th:Math.atan2(e.height,e.width)}}(t.container,h),s=t.container.width,r=50*(n=.01*Math.min(s,c=t.container.height)),i=50*n,o=10*n,a=r/100,u=nu(l,(d={bw:r,bh:i,lh:o,d:a,width:r+2*o+2*a,height:i+2*o+2*a}).bw,d.bh,d.lh),{_p:h,_hv:l,_W:s,_H:c,_size:d,_leg:u})}}),updateBalloonPaths:(0,X.a)({balloonPaths:e=>{let{context:{balloon:t}}=e;return t?._hv&&function(e,t){let{bw:n,bh:r,lh:i,d:o,width:a,height:l}=t,s=T(-a/2,-a/2,a,l),{body:c,leg:d}=function(e,t,n,r){let i={x:t/2,y:n/2},o=`
m${eO(-i.x)},${eO(-i.y)}
h${eO(t)}
v${eO(n)}
h${eO(-t)}
z
`,{p:a,q:l,a:s,b:c}=nu(e,t,n,r),d=$(l,s),u=$(c,l),g=$(a,c);return{body:o,leg:`
m${ng(s)}
l${ng(d)}
l${ng(u)}
l${ng(g)}
z
`}}(e,n,r,i);function u(e){return`M${eO(e)},${eO(e)} ${c} M${eO(e)},${eO(e)} ${d}`}return{viewBox:s,width:a,height:l,bg:u(o),fg:u(0)}}(t._hv,t._size)||void 0}}),updateHeaderStyle:e=>{let{context:t}=e;nf(np,t.m.header)},updateBalloonStyle:e=>{let{context:t}=e;return t.balloon&&function(e,t){let{_p:n,_hv:r,_size:i,_leg:o}=e,a=function(e,t,n,r,i){let{open:o,animating:a}=i;if(null!==e&&null!==t&&nd({open:o,animating:a})){let{width:t,height:i}=n,{a:l,b:s,timing:c,txa:d,txb:u}=function(e,t,n,r){let i=R(r,-1);if(t){let{a:t,b:r}=e?{a:0,b:1}:{a:1,b:0},o=e?{a:D,b:i}:{a:i,b:D},{a:a,b:l}={a:N(n,o.a),b:N(n,o.b)};return{a:t,b:r,timing:e?ew:eb,txa:a,txb:l}}{let{b:e}={a:0,b:1};return{a:null,b:e,timing:null,txa:null,txb:N(n,i)}}}(o,a,e,r.q),g=`${eO(-t/2)}px`,h=`${eO(-i/2)}px`,p=d&&`${eO(d.x)}px`,m=d&&`${eO(d.y)}px`;return{visibility:null,a:l,b:s,timing:c,pww:g,phh:h,txax:p,txay:m,txbx:u&&`${eO(u.x)}px`,txby:u&&`${eO(u.y)}px`}}return{visibility:"hidden",a:null,b:null,timing:null,pww:null,phh:null,txax:null,txay:null,txbx:null,txby:null}}(n,r,i,o,t);Array.from(ny,e=>{let[,t]=e;!function(e,t){let{visibility:n,a:r,b:i,timing:o,pww:a,phh:l,txax:s,txay:c,txbx:d,txby:u}=t,g=e.style.setProperty.bind(e.style);g("visibility",n),g("--balloon-pww",a),g("--balloon-phh",l),g("--a",null===r?null:r.toString()),g("--b",null===i?null:i.toString()),g("--timing",o),g("--balloon-tx-a-x",s),g("--balloon-tx-a-y",c),g("--balloon-tx-b-x",d),g("--balloon-tx-b-y",u)}(t,a)})}(t.balloon,t.m.detail)},updateDetailStyle:e=>{let{context:t}=e,n=t.m.detail;requestAnimationFrame(()=>{nf(nm,n),requestAnimationFrame(()=>(function(e){let{open:t,animating:n}=e;t||n||Array.from(nx,e=>{let[,t]=e;t.scroll(0,0)})})(n))})}}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,m:{header:no(!0),detail:no(!1)},animationEnded:{header:!0,detail:!0}}},on:{RENDERED:{actions:["updateHeaderStyle","updateDetailStyle","updateBalloonStyle"]}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:[{type:"updateDetail",params:e=>{let{event:{type:t,...n}}=e;return n}},"updateBalloon","updateBalloonPaths"],target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,_.n)("animationEnded")},{actions:(0,X.a)({animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,_.n)("isDetailVisible")},{target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,_.n)("animationEnded")},{actions:(0,X.a)({animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}},"updateHeaderStyle","updateBalloonStyle","updateDetailStyle"],exit:"endCancel",on:{DONE:[{guard:(0,_.n)("isHeaderVisible")},{guard:"isDetailVisible"},{target:"Closed"}]}},Closed:{entry:(0,ti.a)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},"updateHeaderStyle",(0,X.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,_.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},"updateBalloonStyle","updateDetailStyle",(0,X.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,_.r)({type:"DONE"})]}}}}}),nb=(0,_.c)(nw);function nS(e){nb.send(e)}function nj(){let e=(0,m.useRef)(null);et(nm,e,"balloon"),et(ny,e,"balloon");let t=(0,B.d4)(nb,e=>e.context.balloonPaths);return(0,w.jsxs)("div",{ref:e,className:"balloon",children:[t&&(0,w.jsxs)(nM,{...t,children:[(0,w.jsx)("path",{className:"bg",d:t.bg}),(0,w.jsx)("path",{className:"fg",d:t.fg}),(0,w.jsx)("style",{children:nO})]}),(0,w.jsx)("style",{children:nE})]})}nb.on("CLOSE.DONE",()=>K(ty.closeDone));let nE=`
.balloon,
.balloon-svg {
  ${ei}
  ${ey}
  z-index: 10;
  will-change: opacity, transform;
}
`;function nM(e){let{viewBox:t,width:n,height:r,children:i}=e;return(0,w.jsx)("svg",{className:"balloon-svg",viewBox:t&&H(t),width:n,height:r,children:i})}let nO=`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`;function nk(e){(0,m.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",nN),()=>{t.removeEventListener("wheel",nN)}},[e])}function nN(e){let t=e.currentTarget;tT&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function n$(){let e=(0,m.useRef)(null);nk(e),et(ny,e,"detail"),et(nm,e,"detail"),et(nx,e,"detail");let t=(0,B.d4)(nb,e=>e.context.detail),n=v();return(0,w.jsxs)("div",{ref:e,className:"detail",onAnimationEnd:()=>nS({type:"DETAIL.ANIMATION.END"}),children:[n.RenderInfo&&t&&(0,w.jsx)(n.RenderInfo,{info:t.info}),(0,w.jsx)("style",{children:nD})]})}let nD=`
.detail {
  ${ei}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${ex}
  ${eu}
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
`;function nR(){return t9("detail",(0,w.jsx)(nT,{}),"ui"),(0,w.jsx)("div",{id:"detail"})}function nT(){return(0,w.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,w.jsx)(nj,{}),(0,w.jsx)(n$,{}),(0,w.jsx)("style",{children:nh}),(0,w.jsx)(nz,{})]})}function nz(){return(0,w.jsx)("svg",{id:"ui-svg-defs",children:(0,w.jsx)("defs",{children:(0,w.jsx)(nt,{})})})}function nC(){return t9("footer",(0,w.jsx)(nL,{}),"ui"),(0,w.jsx)("div",{id:"footer"})}function nL(){let e=(0,m.useRef)(null);et(np,e,"footer");let t=v();return(0,w.jsxs)("div",{ref:e,className:"ui-content footer",children:[(0,w.jsx)("p",{children:(0,w.jsx)("a",{href:document.location.href+"?info=1",target:"_blank",children:t.copyright})}),(0,w.jsx)("style",{children:nA})]})}let nA=`
.footer {
  ${ea}
  ${eh}
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
`;function nI(){return t9("guides",(0,w.jsx)(nH,{}),"ui"),(0,w.jsx)("div",{id:"guides"})}function nH(){let e,t=(0,m.useRef)(null);return et(np,t,"guides"),et(tP,t,"guides"),(e=v(),(e.uiConfig?.showGuides??!0)&&!e.mapCoord.matrix.isIdentity)?(0,w.jsxs)("div",{ref:t,className:"ui-content guides",children:[(0,w.jsx)("svg",{className:"guides",children:(0,w.jsx)(e$,{})}),(0,w.jsx)(eD,{}),(0,w.jsx)(eT,{}),(0,w.jsx)("style",{children:nP})]}):(0,w.jsx)(w.Fragment,{})}let nP=`
.guides {
  ${ei}
  ${eg}
  ${ey}
  transform: translate(0%, 0%);
  z-index: 2;
}
.guides {
  &.not-animating {
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
    opacity: var(--b);
    will-change: opacity;
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
    animation: xxx-measure var(--duration) var(--timing);
    will-change: opacity;
  }
  &.zooming {
    display: none;
    --b: 0;
  }
  &.not-zooming {
  }
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
`;function nU(){let e=(0,m.useRef)(null),{fidx:t,fidxToOnClick:n}=t3(),r=v();return et(tS,e,"floors"),void 0===r.floorsConfig||r.floorsConfig.floors.length<2?(0,w.jsx)(w.Fragment,{}):(0,w.jsxs)("div",{ref:e,className:"floors",children:[(0,w.jsx)("ul",{className:"floor-list",children:r.floorsConfig.floors.map((e,r)=>{let{name:i}=e;return(0,w.jsx)("li",{className:`floor-item ${nY(r===t)}`,onClick:n(r),children:i},r)})}),(0,w.jsx)("style",{children:nF})]})}let nF=`
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
`;function nW(){let{fidx:e}=t3(),t=v().floorsConfig;return void 0===t||t.floors.length<2?(0,w.jsx)(w.Fragment,{}):(0,w.jsxs)("div",{children:[t.floors.map((t,n)=>(0,w.jsx)("h2",{className:`floor-name ${nY(n===e)}`,children:t.name},n)),(0,w.jsx)("style",{children:nZ})]})}let nZ=`
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
`;function nY(e){return e?"selected":"unselected"}function nq(){return t9("header",(0,w.jsx)(nB,{}),"ui"),(0,w.jsx)("div",{id:"header"})}function nB(){let e=(0,m.useRef)(null);(0,m.useEffect)(()=>{requestAnimationFrame(()=>nS({type:"RENDERED"}))},[]),et(np,e,"header");let t=v();return(0,w.jsxs)("div",{ref:e,className:"ui-content header",onAnimationEnd:()=>nS({type:"HEADER.ANIMATION.END"}),children:[(0,w.jsx)("h1",{className:"title",onClick:()=>tc(),children:t.title}),(0,w.jsx)(nW,{}),(0,w.jsx)("style",{children:nV})]})}let nV=`
.header {
  ${ei}
  ${eh}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
  & h1,
  & h2,
  & p {
    ${em}
    ${ex}
  }
  & h1,
  & h2 {
    margin: 0.25em 0;
    font-weight: 100;
    cursor: default;
    text-align: center;
  }
  & h1 {
    font-size: large;
  }
}
.header {
  transform-origin: 50% 0%;
  &.not-animating {
    opacity: var(--b);
    transform: translate(calc(50vw - 50%), 0%) scale(var(--b)) translate3d(0px, 0px, 0px);
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
    will-change: initial;
    animation: none;
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
    animation: xxx-header var(--duration) var(--timing);
  }
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
`;function nX(){return t9("left",(0,w.jsx)(n_,{}),"ui"),(0,w.jsx)("div",{id:"left"})}function n_(){let e=(0,m.useRef)(null);return et(np,e,"left"),(0,w.jsxs)("div",{ref:e,className:"ui-content left bottom",children:[(0,w.jsx)(nU,{}),(0,w.jsx)("style",{children:nG})]})}let nG=`
.left {
  ${ei}
  ${ep}
  padding: 0.4em;
  font-size: smaller;
  ${ey}
  top: initial;
  align-items: end;
}
.left {
  transform-origin: 0% 50%;
  transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
  transform: translate(0%, calc(50svh - 50%)) scale(var(--b));
  &.not-animating {
    opacity: var(--b);
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
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
    animation: xxx-left var(--duration) var(--timing) forwards;
  }
}
@keyframes xxx-left {
  from {
    opacity: var(--a);
    transform: translate(0%, calc(50vh - 50%)) scale(var(--a));
    transform: translate(0%, calc(50svh - 50%)) scale(var(--a));
  }
  to {
    opacity: var(--b);
    transform: translate(0%, calc(50vh - 50%)) scale(var(--b));
    transform: translate(0%, calc(50svh - 50%)) scale(var(--b));
  }
}
`;function nK(){return(0,w.jsx)("div",{className:"button-item fullscreen",onClick:()=>K(to.fullscreen),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:nJ})})})}let nJ=`
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
`;function nQ(){return(0,w.jsx)("div",{className:"button-item home",onClick:()=>tc(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n0})})})}let n0=`
m-5,1
l5,-5
l5,5
m-2,-2
l0,5
l-6,0
l0,-5
`;function n1(){return v().mapCoord.matrix.isIdentity?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)("div",{className:"button-item position",onClick:()=>K(to.position),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n3})})})}let n5=3*Math.sqrt(2),n2=n5+6,n3=`
M 0,0
m 0,${n2/2}
l -3,-3
a ${n5},${n5} 0,1,1 6,0
z
m 0,${-n2+n5+n5/2}
a ${n5/2},${n5/2} 0,1,0 0,${-n5}
a ${n5/2},${n5/2} 0,1,0 0,${n5}
`.replaceAll(/([.]\d\d)\d*/g,"$1");function n4(){return(0,w.jsx)("div",{className:"button-item recenter",onClick:()=>td(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n6})})})}let n6=`
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
`;function n7(){return(0,w.jsx)("div",{className:"button-item rotate",onClick:()=>ts(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:n8})})})}let n8=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`;function n9(){return(0,w.jsx)("div",{className:"button-item zoom-in",onClick:()=>ta(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:re})})})}let re=`
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
`;function rt(){return(0,w.jsx)("div",{className:"button-item zoom-out",onClick:()=>tl(),children:(0,w.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,w.jsx)("path",{d:rn})})})}let rn=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`;function rr(){return t9("right",(0,w.jsx)(ri,{}),"ui"),(0,w.jsx)("div",{id:"right"})}function ri(){let e=(0,m.useRef)(null);return et(np,e,"right"),(0,w.jsxs)("div",{ref:e,className:"ui-content right bottom",children:[(0,w.jsx)(ra,{}),(0,w.jsx)("style",{children:ro})]})}let ro=`
.right {
  ${eo}
  ${ep}
  padding: 0.4em;
  font-size: smaller;
  ${ey}
  top: initial;
  bottom: 0;
  align-items: end;
}
.right {
  transform-origin: 100% 50%;
  &.bottom {
    transform-origin: 100% 100%;
  }
  transform: translate3d(0px, 0px, 0px);
  &.not-animating {
    opacity: var(--b);
    transform: scale(var(--b));
    &.closed {
      --b: 0;
    }
    &.opened {
      --b: 1;
    }
    will-change: initial;
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
    animation: xxx-right var(--duration) var(--timing) forwards;
  }
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
`;function ra(){let e=(0,m.useRef)(null);return et(tS,e,"buttons"),(0,w.jsxs)("div",{ref:e,className:"buttons",children:[(0,w.jsx)(n1,{}),(0,w.jsx)(nQ,{}),(0,w.jsx)(nK,{}),(0,w.jsx)(n4,{}),(0,w.jsx)(n7,{}),(0,w.jsx)(rt,{}),(0,w.jsx)(n9,{}),(0,w.jsx)("style",{children:rl})]})}let rl=`
.buttons {
  font-size: large;
  margin: 0;
  ${eh}
  &.locked {
    & > .button-item {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
.button-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${ex}
  cursor: default;
  ${ev}
  transition: opacity 100ms;
  & > svg {
    display: block;
    width: 1.25em;
    height: 1.25em;
    pointer-events: none;
    & > path {
      stroke: black;
      stroke-width: 0.4;
      fill: none;
    }
  }
}

.fullscreen {
  display: none;
}
`;function rs(e){tx.get()&&e.preventDefault()}function rc(e){(0,m.useEffect)(()=>{let t=e.current;return t&&t.addEventListener("touchmove",rs),()=>{t&&t.removeEventListener("touchmove",rs)}},[e])}function rd(){return t9("screen",(0,w.jsx)(ru,{}),"ui"),(0,w.jsx)("div",{id:"screen"})}function ru(){let e=(0,m.useRef)(null);return et(nm,e,"screen"),rc(e),nk(e),(0,w.jsx)("div",{ref:e,className:"ui-content screen",onClick:()=>K(ty.close),children:(0,w.jsx)("style",{children:rg})})}let rg=`
.screen {
  ${ei}
  ${eg}
  background-color: none;
  cursor: default;
  pointer-events: none;
  z-index: 5;
}
.screen {
  &.not-animating {
    &.closed {
      display: none;
      &.zooming {
        display: initial;
      }
    }
    &.opened {
      pointer-events: initial;
    }
  }
  &.animating {
    &.closed {
      --a: 0.3;
      --b: 0;
      --timing: ${eb};
    }
    &.opened {
      --a: 0;
      --b: 0.3;
      --timing: ${ew};
    }
    --duration: 400ms;
    will-change: opacity;
    animation: xxx-screen var(--duration) var(--timing);
  }
}
@keyframes xxx-screen {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`;function rh(){return t9("ui",(0,w.jsx)(rp,{})),(0,w.jsx)("div",{id:"ui"})}function rp(){let e=(0,m.useRef)(null);return et(tY,e,"ui"),(0,w.jsxs)("div",{ref:e,className:"ui",children:[(0,w.jsx)(rd,{}),(0,w.jsx)(nq,{}),(0,w.jsx)(nC,{}),(0,w.jsx)(nX,{}),(0,w.jsx)(rr,{}),(0,w.jsx)(nI,{}),(0,w.jsx)(nR,{}),(0,w.jsx)("style",{children:tB})]})}function rm(){let e;return null!==(e=document.querySelector("#ui")?.shadowRoot?.children?.length??null)&&e>0}function rf(){td()}let ry=new Map;function rx(e,t){let n=ry.get(t);if(n)return function(e,t){let n=e.scrollLeft,r=e.scrollTop,i=e.scrollWidth,o=e.scrollHeight;if(null===n)return!1;let a=i-t.width,l=o-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),r!==c&&(e.scrollTop=c);let d=e.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=e.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}(n,e)}var rv=n(8077),rw=n(990),rb=n(4465),rS=n(5909);let rj=(e,t)=>(function e(t,n,r){let i=Math.min(t.length,n.length),o=t[r],a=n[r];if(r>=i||o===eE||a===eE)return rv.pH(t.length,n.length);let l=rv.pH(o.x,a.x)||rv.pH(o.y,a.y);return 0===l?e(t,n,r+1):l})(e,t,0);function rE(e){return(0,M.Fs)(e.values(),rw.Ts,rw.di(rj),rw.x1(e=>0===e.length?rS.xT:rS.Py(e[0])))}function rM(e){let t;return e.length<2||null===(t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y})))?null:R(t,1/e.length)}function rO(e){return new Map((0,M.Fs)(e.changedTouches,e=>rw.O3.from(e),rw.Tj(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let rk=(0,V.mj)({types:{context:{},events:{},emitted:{},tags:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z},isModeIdle:e=>{let{context:{mode:t}}=e;return"idle"===t},isModePanning:e=>{let{context:{mode:t}}=e;return"pan"===t},isModePinching:e=>{let{context:{mode:t}}=e;return"pinch"===t}},actions:{updateTouches:(0,X.a)({touches:e=>{var t,n,r;let i,o,a,l,s,c,d,u,g,{context:{touches:h},event:p}=e;return"TOUCH.START"===p.type?(t=p.ev,n=h.vecs,r=rO(t),a=rM(o=rE(i=(0,M.Fs)([...n.entries(),...r.entries()],rw.TS(new Map,(e,t)=>{let[n,r]=t,i=rb.fromUndefinedOr(e.get(n)),o=rb.isSome(i)?[...i.value,...r]:r;return new Map(e).set(n,o)})))),s=2!==o.length?null:.5>Math.abs((l=$(o[0],o[1])).y/l.x),{...h,vecs:i,points:o,cursor:a,horizontal:s}):"TOUCH.MOVE"===p.type?function(e,t){var n,r,i,o;let a,l=rO(t),s=new Map((0,M.Fs)(e.vecs.entries(),rw.Ts,rw.Tj(e=>{let t,[n,r]=e;return[n,(t=rb.fromUndefinedOr(l.get(n)),rb.isSome(t)?[...t.value,...r]:r)]}))),c=rE(s),d=rM(c),[u,g]=c;if(null===d||u===eE||g===eE)return{...e,vecs:s,points:c,cursor:d};let h=(n=e.dists,r=Math.sqrt((i=u,o=g,Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2))),a=Math.pow((n.length>0?n[0]:r)-r,2),0===n.length||a>0?[r,...n]:n),p=function(e){let[t,n,r,i]=e;return t===eE||n===eE||r===eE||i===eE?null:t<n&&n<r&&r<i?-1:t>n&&n>r&&r>i?1:null}(h);return{vecs:s,points:c,cursor:d,dists:h,z:p,horizontal:e.horizontal}}(h,p.ev):"TOUCH.END"===p.type?(c=rO(p.ev),g=rM(u=rE(d=new Map((0,M.Fs)(h.vecs.entries(),rw.Ts,rw.x1(e=>{let[t,n]=e;return c.has(t)?rS.xT:rS.Py([t,n])}))))),{vecs:d,points:u,cursor:g,dists:0===d.size?[]:h.dists,z:0===d.size?null:h.z,horizontal:h.horizontal}):h}}),raiseOp:(0,_.r)(e=>{let{event:t}=e;return"TOUCH.START"===t.type?{type:"STARTED"}:"TOUCH.MOVE"===t.type?{type:"MOVED"}:"TOUCH.END"===t.type?{type:"ENDED"}:{type:"NONE"}}),resetTouches:(0,X.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}),mode:"idle"}),enterPan:(0,X.a)({mode:"pan"}),enterPinch:(0,X.a)({mode:"pinch"}),emitMulti:(0,ti.a)(e=>{let{context:{touches:t}}=e;return{type:"MULTI",touches:t}}),emitZoom:(0,ti.a)(e=>{let{context:{touches:t}}=e;return{type:"ZOOM",touches:t}})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null},mode:"idle"},on:{"TOUCH.START":{actions:["updateTouches","raiseOp"]},"TOUCH.MOVE":{actions:["updateTouches","raiseOp"]},"TOUCH.END":{actions:["updateTouches","raiseOp"]},CANCEL:{target:".Canceling"}},states:{Idle:{tags:"none",entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{tags:"single",on:{STARTED:[{guard:(0,_.j)(["isModeIdle","isDoubleTouching"]),actions:"enterPinch",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isModeIdle",actions:"enterPan"},ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{tags:"double",entry:"emitMulti",exit:"emitMulti",on:{STARTED:[{guard:(0,_.j)(["isManyTouching"]),target:"ManyTouching"}],MOVED:{guard:(0,_.j)(["isModePinching","isZooming"]),actions:"emitZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{tags:"many",on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{tags:"cancel",on:{ENDED:[{target:"Idle"}]}}}}),rN=(0,_.c)(rk),r$=!1;function rD(e){rN.send({type:"TOUCH.START",ev:e})}function rR(e){rN.send({type:"TOUCH.MOVE",ev:e})}function rT(e){rN.send({type:"TOUCH.END",ev:e})}function rz(){rN.send({type:"CANCEL"})}function rC(e){tR||tD({type:"SEARCH",pos:{x:e.pageX,y:e.pageY}})}function rL(e){if(null!==e){let t,n,r;(t=tw.get("S"))&&clearTimeout(t),n=setTimeout(()=>{tw.delete("S"),Array.from(tS,e=>{let[,t]=e;return tt(t,"locked",!1)})},200),tw.set("S",n),Array.from(tS,e=>{let[,t]=e;return tt(t,"locked",!0)}),r=e,J(Q.eventTick,r)}}function rA(e){let t=(0,m.useRef)(null);return et(nm,t,"container"),rc(t),et(tI,t,"container"),et(tY,t,"container"),et(ry,t,"container"),(0,w.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:rD,onTouchMove:rR,onTouchEnd:rT,onClick:rC,onContextMenu:rf,onScroll:rL,onAnimationEnd:e=>{var t;t={type:"ANIMATION.END",ev:e},t.ev?.stopPropagation(),tD(t),K(ee.animationEnd)},children:[e.children,(0,w.jsx)("style",{children:rI})]})}rN.on("MULTI",e=>{let{touches:t}=e;2===t.vecs.size?(r$=!0,K(tf.multiStart)):(K(tf.multiEnd),r$=!1)}),rN.on("ZOOM",e=>{let t,{touches:n}=e,r=n.cursor,i=n.z;null!==r&&null!==i&&(t={z:i>0?1:-1,p:r},J(tf.zoom,t))});let rI=`
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

  &.zooming {
    transform-origin: var(--zoom-origin);
    transform: translate(var(--zoom-tx), var(--zoom-ty)) scale(var(--zoom-s)) translate3d(0px, 0px, 0px);
    will-change: transform;
    /*
    animation: container-zoom 500ms ease;
    */
    &.rotating {
      transform: rotate(var(--zoom-deg)) translate3d(0px, 0px, 0px);
    }
  }
  & > .content {
    ${ei}
    contain: strict;
    transform: var(--layout-content-matrix) translate3d(0, 0, 0);
    transform-origin: 0% 0%;
    pointer-events: none;
    width: var(--layout-scroll-width);
    height: var(--layout-scroll-height);
  }
  &.not-shown {
    opacity: 0;
  }
  &.shown {
  }
  &.not-appearing {
  }
  &.appearing {
    will-change: opacity;
    animation: xxx-appearing 2s ${ew};
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
`;function rH(){return null!==document.querySelector(".container")}var rP=n(3071);async function rU(e){return new Promise((t,n)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(e){n(e)},{enableHighAccuracy:!0,timeout:e,maximumAge:0})})}let rF=(0,V.mj)({types:{events:{},emitted:{}},actors:{api:(0,rP.Sx)(()=>rU(5e3))},delays:{TIMEOUT:5e3}}).createMachine({id:"position",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,X.a)({position:e=>{let{event:t}=e;return t.output}}),(0,ti.a)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,X.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),rW=(0,_.c)(rF);function rZ(e){let[t,n]=e;return n.map(e=>[t,e])}function rY(e){return e.reduce(function(e,t){let[n,r]=t,i=new Set([...e.get(n)??new Set,r]);return new Map([...e,[n,i]])},new Map)}function rq(e){return rY(Array.from(e).flatMap(rZ).map(e=>{let[t,n]=e;return[n,t]}))}let rB=(0,h.e)(null),rV=(0,h.e)(null),rX=(0,h.e)(null),r_=(0,h.e)(null),rG=(0,V.mj)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Uninited",states:{Uninited:{on:{"INIT.DONE":{target:"Idle"}}},Idle:{on:{SEARCH:{actions:(0,ti.a)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,ti.a)(e=>{let{event:t}=e;return t}),target:"Done"}}},Done:{always:"Idle"}}}),rK=(0,_.c)(rG);function rJ(e){rK.send(e)}rK.on("SEARCH",e=>{let{req:{psvg:t}}=e,n=x.get().mapCoord.matrix.inverse().transformPoint(t),r=t0.get();rQ.postMessage({type:"SEARCH",greq:{pgeo:n,fidx:r}})}),rK.on("SEARCH.DONE",e=>{let t,{res:n}=e;return t=n,J(tm.end,t)});let rQ=new Worker(new URL(n.p+n.u(559),n.b),Object.assign({},{type:"module"},{type:void 0}));rQ.onmessage=async e=>{let t=e.data;switch(t.type){case"INIT.DONE":return rJ({type:"INIT.DONE"});case"SEARCH.DONE":var n;let r;return(n=t.res,r=x.get(),Promise.resolve((e=>{let t=x.get().searchNames,n=(()=>{let e,t=x.get();if(t.getInfoByName)return t.getInfoByName;let n=r_.get();if(null!==n)return n;let r=(e=t.searchInfos??[],t=>(e=>{let t=rX.get();if(null!==t)return t;let n=new Map(e.map(e=>[e.name,e.info]));return rX.set(n),n})(e??[]).get(t)||null);return r_.set(r),r})();if(void 0===t||void 0===n)return null;let r=(e=>{let t=rV.get();if(null!==t)return t;let n=rq(e);return rV.set(n),n})((e=>{let t=rB.get();if(null!==t)return t;let n=e.map(e=>[e.name,e.addresses]);return rB.set(n),n})(t)).get(e.address);return void 0===r||r.size<1?null:n(Array.from(r)[0])})(n)).then(e=>null!==e?e:r.getSearchInfo(n,r.mapMap,r.osmSearchEntries)).then(e=>null===e?(console.log("info not found!",n),rJ({type:"SEARCH.DONE",res:null})):rJ({type:"SEARCH.DONE",res:{psvg:r.mapCoord.matrix.transformPoint(n.floorPos.coord),fidx:n.floorPos.fidx,info:e}}))).catch(e=>console.log("SEARCH.DONE",e));case"SEARCH.ERROR":return console.log("search error!",t.error),rJ({type:"SEARCH.DONE",res:null})}},rQ.onerror=e=>{console.error("search error",e)},rQ.onmessageerror=e=>{console.error("search messageerror",e)};var r0=n(5318);let r1=Math.round,r5=document.createElement("div"),r2=new Map,r3=()=>{let e=x.get();var t=e.cartoConfig?.backgroundColor??e.backgroundColor??"darkgray";let n=r2.get(t);if(n)return n;r5.style.color=t,document.body.appendChild(r5);let r=getComputedStyle(r5).color;return document.body.removeChild(r5),r2.set(t,r),r},r4=new Map,r6=new Map;function r7(e){let t=(()=>{let e=r4.get("color");if(e)return e;let t=document.querySelector('meta[name="theme-color"]')||Object.assign(document.createElement("meta"),{name:"theme-color",content:r3()});return t.parentNode||document.head.appendChild(t),r4.set("color",t),t})(),n={color:t.getAttribute("content")||r3()},{p:r,q:i}=(()=>{var e;let t=r3(),n=r6.get(t);if(n)return{p:t,q:n};let r=function(e){let{r:t,g:n,b:r}=e;return`rgb(${r1(t)}, ${r1(n)}, ${r1(r)})`}({r:(e=function(e){let t=e.match(/\d+/g);if(!t||3!==t.length)throw Error("invalid color!");let n=Number(t[0]);return{r:n,g:Number(t[1]),b:Number(t[2])}}(t)).r/2,g:e.g/2,b:e.b/2});return r6.set(t,r),{p:t,q:r}})(),o=e?i:r;(0,r0.i)(n,{color:o,duration:400,ease:"outQuad",onRender:()=>t.setAttribute("content",n.color)}),(0,r0.i)(document.body,{backgroundColor:o,duration:400,ease:"outQuad"}),(0,r0.i)(".container",{opacity:e?.5:1,duration:400,ease:"outQuad"})}function r8(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let r9=(0,V.mj)({types:{context:{},events:{},emitted:{}},guards:{shouldReset:e=>{let{event:{key:t}}=e;return"r"===t},shouldRecenter:e=>{let{event:{key:t}}=e;return"c"===t},shouldRotate:e=>{let{event:{key:t}}=e;return"t"===t},shouldZoom:e=>{let{event:{key:t}}=e;return 0!==r8(t)},shouldFloorLevelUp:e=>{let{event:{key:t}}=e;return"u"===t},shouldFloorLevelDown:e=>{let{event:{key:t}}=e;return"d"===t}},actions:{reset:(0,ti.a)({type:"RESET"}),recenter:(0,ti.a)({type:"RECENTER"}),rotate:(0,ti.a)({type:"ROTATE"}),zoom:(0,ti.a)((e,t)=>{let{z:n}=t;return{type:n>0?"ZOOM.IN":n<0?"ZOOM.OUT":"NOP"}}),floorLevelUp:(0,ti.a)({type:"FLOOR.LEVEL.UP"}),floorLevelDown:(0,ti.a)({type:"FLOOR.LEVEL.DOWN"}),handleDown:(0,X.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"===t||n,alt:"Alt"===t||r,control:"Control"===t||i}})(t.mod,n.key)}}),handleUp:(0,X.a)({mod:e=>{let{context:t,event:n}=e;return((e,t)=>{let{shift:n,alt:r,control:i}=e;return{shift:"Shift"!==t&&n,alt:"Alt"!==t&&r,control:"Control"!==t&&i}})(t.mod,n.key)}})}}).createMachine({id:"keyboard1",context:{mod:{shift:!1,alt:!1,control:!1}},initial:"Idle",states:{Idle:{on:{DOWN:{actions:"handleDown"},UP:[{guard:"shouldReset",actions:"reset"},{guard:"shouldRecenter",actions:"recenter"},{guard:"shouldRotate",actions:"rotate"},{guard:"shouldZoom",actions:{type:"zoom",params:e=>{let{event:{key:t}}=e;return{z:r8(t)}}}},{guard:"shouldFloorLevelUp",actions:"floorLevelUp"},{guard:"shouldFloorLevelDown",actions:"floorLevelDown"},{actions:"handleUp"}]}}}}),ie=(0,_.c)(r9);ie.on("RESET",tc),ie.on("RECENTER",td),ie.on("ROTATE",ts),ie.on("ZOOM.IN",ta),ie.on("ZOOM.OUT",tl),ie.on("FLOOR.LEVEL.UP",()=>K(tu.levelUp)),ie.on("FLOOR.LEVEL.DOWN",()=>K(tu.levelDown));let it=(0,V.mj)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:z,next:z,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Syncing"}}},Syncing:{after:{500:{actions:[(0,X.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,_.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:e=>{let{context:t}=e;return console.log("resize: ignoring height-only change",t)},target:"Idle"},{guard:e=>{let{context:t}=e;return!C(t.prev,t.next)},actions:[(0,X.a)({waited:0}),(0,ti.a)(e=>{var t,n,r,i;let o,a,{context:l}=e,s=x.get();return{type:"LAYOUT",layout:(t=s.fontSize,n=l.next,o=L((i={config:r=function(e,t,n,r){var i;let o,a,l,s,{outer:c,scale:d}=(i=r??n,o=t.width/t.height,s=(l=o>(a=i.width/i.height))?e5(t,a):e2(t,a),{outer:s,inner:l?e5(i,o):e2(i,o),scale:l?i.height/t.height:i.width/t.width,rO:o,rI:a,v:l});return{fontSize:e,container:t,outer:c,inner:r??n,svgScale:d}}(t,n,s.origViewBox,s.origBoundingBox),...eJ(r)}).scroll),a=i.container.width/i.container.height,e6(i,a<1?1/a:1,a<1?1:+a,o)),force:!l.first}}),(0,X.a)({first:!1})],target:"Checking"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,X.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Syncing"}},Checking:{after:{1e3:{actions:(0,_.r)({type:"EXPIRED"})}},on:{EXPIRED:[{guard:e=>{let{context:{next:t}}=e;return C(t,tV.get().container)},actions:(0,X.a)({prev:e=>{let{context:{next:t}}=e;return t}}),target:"Idle"},{target:"Syncing"}]}},Aborting:{}}}),ir=(0,_.c)(it);ir.on("LAYOUT",e=>{let t;return t=e,J(ee.resize,t)}),window.addEventListener("resize",()=>{ir.send({type:"RESIZE"})});let ii=(0,V.mj)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,X.a)({ticked:!1}),set:(0,X.a)({ticked:!0}),expire:(0,ti.a)({type:"EXPIRE"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["expire","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["expire","clear"],target:"Idle"}}}}),io=(0,V.mj)({types:{},actions:{getScroll:(0,X.a)({scroll:e=>{let{context:t}=e;return function(e){let t=ry.get(e);if(t)return T(t.scrollLeft,t.scrollTop,t.scrollWidth,t.scrollHeight)}("container")??t.scroll}}),syncScroll:(e,t)=>{let{pos:n}=t;return rx(n,"container")}},actors:{syncScrollLogic:(0,rP.Sx)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!rx(t,"container"))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,ti.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,X.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,ti.a)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,X.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),ia=(0,_.c)(io,{systemId:"system-scroll1"});function il(e){ia.send(e)}ia.on("SCROLL.GET.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.getDone,t)}),ia.on("SCROLL.SYNCSYNC.DONE",e=>{let t,{scroll:n}=e;return t=n,J(Q.syncSyncDone,t)});let is=(g=()=>K(Q.eventExpire),d=ii.provide({delays:{DURATION:500}}),(u=(0,_.c)(d)).on("EXPIRE",g),u.start(),{tick:function(){u.send({type:"TICK"})}}),ic=(0,h.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function id(e){var t;e.getMapNames&&(t=e.getMapNames({data:e,render:e,carto:e.cartoConfig,floors:e.floorsConfig}),ic.trigger.set({names:t}))}async function iu(){document.fullscreenElement?await document.exitFullscreen().catch():await document.documentElement.requestFullscreen().catch()}let ig=`
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
`,ih=`
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
  ${ed}
  ${eu}
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
${ig}
`,ip=function(){let e,t=v(),n=t.cartoConfig?.backgroundColor??t.backgroundColor??"darkgray",r={data:t,render:t,carto:t.cartoConfig,floors:t.floorsConfig};return e=tK(e=>e.rendered),(0,m.useEffect)(()=>{requestAnimationFrame(()=>tp())},[e]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(rA,{...r,children:t.renderMap(r)}),(0,w.jsx)(rh,{}),(0,w.jsxs)("style",{children:[ih,`body { background-color: ${n}; }`]})]})};function im(e){let{labels:t}=e;return(0,w.jsxs)("div",{className:"labels",children:[t?.map((e,t)=>(0,w.jsx)(m.Fragment,{children:(0,w.jsx)(iy,{_text:e})},t)),(0,w.jsx)("style",{children:ix})]})}function iy(e){let{_text:t}=e;return(0,w.jsx)("div",{className:"label",style:{"--x":(t.attrs?.x||0)+"px","--y":(t.attrs?.y||0)+"px","--rotate":(t.attrs?.rotate||0)+"deg","--scale2":(t.attrs?.scale2||1)+"","--scale1":(t.attrs?.scale1||1)+""},children:t.children?.map((e,t)=>(0,w.jsx)("p",{children:e.text??""},t))})}let ix=`
@property --zoom {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}
div.labels {
  /* default */
  --zoom: 1;
  --zoom-zoom: 1;
}
div.label {
  position: absolute;
  transform-origin: 0% 0%;
  /*
  transform: translate(var(--x), var(--y)) rotate(var(--rotate)) scale(var(--zoom-z-inv)) scale(var(--scale2)) scale(var(--scale1)) translate(-50%, -50%);
  */
  transform: translate(var(--x), var(--y)) rotate(var(--rotate)) scale(var(--scale2)) scale(var(--scale1)) translate(-50%, -50%);
  text-align: center;
  font-family: 'Noto Sans JP', 'Noto Sans', 'sans-serif' !important;
  font-weight: 200 !important;
  &.zooming {
    & > div.label {
      /*
      animation: xxx-label-scale 500ms ease;
      */
    }
  }
  & > p {
    margin: 0;
  }
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
`;function iv(e){let t=(0,m.useRef)(null);return et(tC,t,"map-floors-html-content"),(0,w.jsxs)("div",{ref:t,className:"content map-floors-html-content",children:[(0,w.jsx)(iw,{...e}),(0,w.jsx)("style",{children:ib})]})}function iw(e){let{floors:t}=e,n=(0,m.useRef)(null);return et(tC,n,"map-floors-html"),(0,w.jsx)("div",{ref:n,className:"map-floors-html",children:t?.floors.map((e,n)=>(0,w.jsx)(m.Fragment,{children:(0,w.jsx)(iS,{fidx:n,floor:e,labelsMap:t?.labelsMap})},n))})}let ib=`
.map-floors-html {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
  transform: var(--layout-svg-to-content-matrix) !important;
  transform-origin: 0% 0% !important;
}
`;function iS(e){let{fidx:t,floor:n,labelsMap:r}=e,i=(0,m.useRef)(null);return et(tQ,i,`html-${t}`),(0,w.jsx)("div",{ref:i,className:`floor fidx-${t}`,children:(0,w.jsx)(im,{fidx:t,labels:n.labels??function(e,t){if(void 0===e)return;let n=Array.from(ij.values());if(1===n.length)return n[0].get(t);let r=e instanceof Map?e:new Map(e instanceof Array?e:Object.entries(e));return ij.add(r),r.get(t)}(r,n.name.toLowerCase())})})}let ij=new Set;function iE(e){let{floors:t,data:{origViewBox:n}}=e,r=(0,m.useRef)(null);et(tC,r,"map-floors-svg");let i=t3();return(0,w.jsxs)("div",{ref:r,className:"content map-floors-svg",children:[(0,w.jsx)(iO,{children:t?.floors.map((e,t)=>(0,w.jsx)(m.Fragment,{children:(0,w.jsx)(ik,{fidx:t,origViewBox:n,ctx:i})},t))}),(0,w.jsx)("style",{children:iM})]})}let iM=`
svg.content-svg {
  width: var(--layout-scroll-width);
  height: var(--layout-scroll-height);
}
${ej}
`;function iO(e){let t=(0,m.useRef)(null),{viewBox:n}=function(){let{svg:e}=tK(e=>e.layout);return{viewBox:H(e)}}();return et(tC,t,"floors-svg"),(0,w.jsx)("svg",{ref:t,id:"map-svg-floors",className:"content-svg",viewBox:n,children:e.children})}function ik(e){let{fidx:t,origViewBox:n,ctx:{fidxToOnAnimationEnd:r,urls:i}}=e,o=(0,m.useRef)(null);return et(tQ,o,`svg-${t}`),(0,w.jsx)("g",{ref:o,className:`floor fidx-${t}`,onAnimationEnd:r(t),children:(0,w.jsx)(iN,{fidx:t,origViewBox:n,url:i.get(t)})})}function iN(e){let{origViewBox:t,url:n}=e;return(0,w.jsx)("image",{x:t.x,y:t.y,width:t.width,height:t.height,href:n})}var i$=JSON.parse('{"Main":{"contentId":"g3"}}');let iD={},iR=Object.keys(i$).map(e=>({name:e,href:n(4303)(`./floor-${e}.svg`),labels:iD?.[e]??void 0})),iT=[...Object.entries(JSON.parse('{"AMain-Content-(ViewBox)":{"x":0,"y":0}}')).map(e=>{let[t,n]=e;return[t,{coord:n,fidx:0}]})],iz=Object.values({Main:{}}).flatMap(function(e){return Object.entries(e)});rY(Array.from(iz).flatMap(rZ));let iC=rq(iz);var iL=JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}');!function(e){let t,n;tg.init.add(e=>{if(e.floorsConfig){let t=e.floorsConfig.floors.length,n=e.floorsConfig.initialFidx;t5.send({type:"INIT",nfloors:t,fidx:n}),t2.postMessage({type:"INIT",cfg:e.floorsConfig,base:e.base})}}),tu.select.add(e=>t5.send({type:"SELECT",fidx:e})),tu.levelUp.add(()=>t5.send({type:"LEVEL.UP"})),tu.levelDown.add(()=>t5.send({type:"LEVEL.DOWN"})),tu.selectDone.add(e=>t5.send({type:"SELECT.DONE",fidx:e})),to.fullscreen.add(iu),tg.init.add(id),to.position.add(()=>{var e;return e={type:"GET"},void rW.send(e)}),Q.eventTick.add(tM),Q.eventTick.add(is.tick),Q.get.add(()=>il({type:"GET"})),Q.sync.add(e=>il({type:"SYNC",pos:e})),Q.syncSync.add(e=>il({type:"SYNCSYNC",pos:e})),tg.init.add(e=>e.searchAddresses?Promise.resolve(e.searchAddresses).then(e=>{let t=e.map(e=>({...e,pos:e.floorPos}));rQ.postMessage({type:"INIT",entries:t})}):e.getSearchEntries?Promise.resolve(e.getSearchEntries(e)).then(e=>{rQ.postMessage({type:"INIT",entries:e})}):void 0),tm.start.add(function(e){rK.send({type:"SEARCH",req:e})}),ee.layout.add(function(e){let{layout:t,force:n}=e;tG({type:"STYLE.LAYOUT",layout:t,rendered:n}),requestAnimationFrame(()=>tJ())}),ee.zoomStart.add(function(e){tG({type:"STYLE.ZOOM",...e}),tG({type:"STYLE.ANIMATION",animation:e.q})}),ee.zoomEnd.add(function(e){tG({type:"STYLE.ZOOM",zoom:e.zoom}),tG({type:"STYLE.ANIMATION",animation:e.q})}),ee.animationEnd.add(function(){tG({type:"STYLE.ANIMATION.END"})}),ee.mode.add(function(e){tG({type:"STYLE.MODE",mode:e})}),Q.eventExpire.add(tJ),to.reset.add(rz),to.fullscreen.add(rz),to.position.add(rz),to.recenter.add(rz),to.zoomOut.add(rz),to.zoomIn.add(rz),tm.endDone.add(e=>nb.send({type:"DETAIL",...e})),ty.open.add(()=>{let e;return e=!0,J(ty.openDone,e)}),ty.openDone.add(e=>nb.send({type:e?"OPEN":"CANCEL"})),ty.close.add(()=>nb.send({type:"CANCEL"})),tu.lock.add(e=>tD({type:"SWITCH",fidx:e})),tu.selectDone.add(()=>tD({type:"SWITCH.DONE"})),tm.end.add(e=>t$.send({type:"SEARCH.END",res:e})),ty.open.add(()=>tk.set("locked")),ty.closeDone.add(()=>tD({type:"SEARCH.DONE"})),ty.closeDone.add(()=>tk.set("panning")),Q.getDone.add(e=>{null!==e&&tD({type:"SCROLL.GET.DONE",scroll:e})}),Q.syncSyncDone.add(e=>{null!==e&&tD({type:"SCROLL.SYNCSYNC.DONE",scroll:e})}),ee.resize.add(e=>{let{layout:t,force:n}=e;return tD({type:"RESIZE",layout:t,force:n})}),ee.mode.add(tz),ee.zoomStart.add(()=>{tT=!0}),ee.zoomEnd.add(()=>{tT=!1}),to.reset.add(()=>tD({type:"HOME"})),to.recenter.add(()=>tD({type:"RECENTER"})),to.rotate.add(()=>tD({type:"ROTATE"})),to.zoomOut.add(()=>tD({type:"ZOOM",z:-1,p:null})),to.zoomIn.add(()=>tD({type:"ZOOM",z:1,p:null})),tf.multiStart.add(()=>K(Q.get)),tf.multiStart.add(()=>tk.set("touching")),tf.multiEnd.add(()=>tk.set("panning")),tf.zoom.add(e=>{let{z:t,p:n}=e;return tD({type:"ZOOM",z:t>0?1:-1,p:n})}),tg.rendered.add(()=>tD({type:"RENDERED"})),t5.start(),ie.start(),rW.start(),ir.start(),ia.start(),rK.start(),t_.start(),ty.open.add(()=>r7(!0)),ty.close.add(()=>r7(!1)),rN.start(),nb.start(),t$.start();let r=(n={origViewBox:t={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0},isContainerRendered:rH,isUiRendered:rm,...e},x.set(e=>({...e,...n})),{...x.get(),origViewBox:t,...e});th(r);let i=new URL(document.location.href).searchParams;if(console.group(),console.log("Welcome to svgmapviewer!"),console.log("Version:","0.5.0"),console.log("GitHub:","https://github.com/DaijiMaps/svgmapviewer"),console.groupEnd(),i.get("info")){let e=x.get(),t=document.getElementById(e.root);if(null===t)throw Error("#root not found!");(0,t6.createRoot)(t).render((0,w.jsx)(m.StrictMode,{children:(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:"svgmapviewer"}),(0,w.jsx)("h2",{children:r.title}),(0,w.jsx)("div",{className:"info",children:(0,w.jsx)(t4.h,{className:"qrcode",marginSize:6,value:document.location.href,width:"60vmin",height:"60vmin"})}),(0,w.jsx)("div",{children:(0,w.jsx)("p",{children:"Copyright © Daiji Maps"})}),(0,w.jsx)("style",{children:t7})]})}))}else{let e=document.getElementById(r.root);if(null===e)throw Error("#root not found!");e.onwheel=function(t){let n=e.children[0];t.target instanceof HTMLDivElement&&t.target?.id==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||tT)&&t.preventDefault()},e.oncontextmenu=function(e){e.preventDefault()},e.ontouchmove=function(e){if(tT){if(e.target instanceof HTMLDivElement&&e.target?.id==="ui")return;e.preventDefault()}else if(!r$)return;e.preventDefault()},document.title=r.title,document.body.onkeydown=e=>{var t;return t={type:"DOWN",key:e.key},void ie.send(t)},document.body.onkeyup=e=>{var t;return t={type:"UP",key:e.key},void ie.send(t)},(0,t6.createRoot)(e).render((0,w.jsx)(m.StrictMode,{children:(0,w.jsx)(ip,{})}))}}({renderMap:function(e){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(iE,{...e}),(0,w.jsx)(iv,{...e})]})},isMapRendered:function(){return!0},...{root:"root",title:"Higashi-Tsukuba Utopia",copyright:"Map image and info @ Higashi-Tsukuba Utopia, map app @ Daiji Maps",backgroundColor:"white",origViewBox:JSON.parse('{"x":5.0,"y":0,"width":4027.0,"height":3024.0}'),origBoundingBox:iL,zoomFactor:2,floorsConfig:{floors:iR,initialFidx:0},...{getSearchEntries:function(){return iT.map(e=>{let[t,n]=e;return{address:t,floorPos:n}})},getSearchInfo:function(e){let t=iC.get(e.address);return void 0===t||t.size<1?null:{title:Array.from(t)[0],x:{tag:"unknown"}}},RenderInfo:function(e){return(0,w.jsx)("p",{children:e.info.title})}}}})}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.m=i,a.d=(e,t,n)=>{var r=(t,n)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,[n]:t[r]})};r(t,"get"),r(n,"value")},a.u=e=>"static/js/async/"+e+"."+({103:"c3c4ebd63a",559:"dd5d25c6a8"})[e]+".js",a.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],a.O=(t,n,r,i)=>{if(n){i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[n,r,i];return}for(var l=1/0,o=0;o<e.length;o++){for(var[n,r,i]=e[o],s=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every(e=>a.O[e](n[c]))?n.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(o--,1);var d=r();void 0!==d&&(t=d)}}return t},a.p="/demos/HigashiTsukubaUtopia/",a.b=document.baseURI||self.location.href,t={410:0},a.O.j=e=>0===t[e],n=(e,n)=>{var r,i,[o,l,s]=n,c=0;if(o.some(e=>0!==t[e])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var d=s(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},(r=self.rspackChunksvgmapviewer_example_floors=self.rspackChunksvgmapviewer_example_floors||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var l=a.O(void 0,["783","460","667"],()=>a(7261));l=a.O(l)})();