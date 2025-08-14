(()=>{"use strict";var e={561:function(e,l,n){var t,r,a,i,o=n(4249);let u={type:"",name:"",crs:{type:"",properties:{name:""}},features:[]},s={root:"root",map:"map",href:"map.svg",width:0,height:0,fontSize:16,origViewBox:{x:0,y:0,width:0,height:0},title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,getMapLayers:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],getMapNames:()=>[],searchEntries:[],renderInfo:function(e){return(0,o.createElement)("p",{},e.info.title)},mapSvgStyle:"",renderMap:function(){return(0,o.createElement)("div")},isMapRendered:()=>!0,mapData:{areas:u,internals:u,origin:u,measures:u,viewbox:u,points:u,lines:u,multilinestrings:u,multipolygons:u},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly}};function d(e){s={...s,...e}}let c=new Set,y=new Set,m=new Set,p=new Set,g=new Set,h=new Set,f=new Set,_=new Set,x=new Set,w=new Set,v=new Set,b=new Set,S=new Set,M=new Set,E=new Set,j=new Set,k=new Set,O=new Set,F=new Set,L=new Set,T=new Set,$=new Set,C=new Set,D=new Set,N=new Set,z=new Set,R=new Set;function A(){M.forEach(e=>e())}function I(e,l){O.forEach(n=>n(e,l))}var P=n(8586),H=n(4649);n(9701);let W={context:{ids:new Set}};(0,H.a)({context:function(){let e=function(e){if(!e)return;let l=JSON.parse(e);if("context"in l&&"ids"in l.context)return{...l,context:{...l.context,ids:new Set(l.context.ids)}}}(localStorage.getItem("svgmapviewer:likes"));return void 0===e?W:e}().context,on:{like:(e,l)=>({...e,ids:new Set(Array.from(e.ids.add(l.id)))}),unlike:(e,l)=>(e.ids.delete(l.id),{...e,ids:new Set(Array.from(e.ids))})}}).subscribe(function(e){localStorage.setItem("svgmapviewer:likes",JSON.stringify({...e,context:{...e.context,ids:Array.from(e.context.ids.keys())}}))});let Z=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var Y=n(2158),U=n(9621),X=n(64),G=n(2662);let q=`
position: absolute;
left: 0;
top: 0;
`,K=`
position: absolute;
right: 0;
top: 0;
`,B=`
position: absolute;
left: 0;
bottom: 0;
`,V=`
position: absolute;
right: 0;
bottom: 0;
`,J=`
margin: 0;
`,Q=`
padding: 0;
`,ee=`
${J} ${Q}
`,el=`
box-sizing: border-box;
`,en=`
width: 100vw;
height: 100vh;
height: 100svh;
`,et=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,er=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,ea=`
-webkit-user-select: none;
user-select: none;
`,ei=`
touch-action: none;
`,eo=`
pointer-events: none;
`,eu=`
pointer-events: initial;
`,es=`
background-color: rgba(255, 255, 255, 0.5);
`,ed=`
cubic-bezier(0, 0, 0, 1)
`,ec=`
cubic-bezier(1, 0, 1, 1)
`,ey="250ms",em=(0,U.cY)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null},initial:"Idle",states:{Idle:{on:{SELECT:[{guard:e=>{let{event:l}=e;return l.force??!1},actions:(0,X.a)({fidx:e=>{let{event:l}=e;return l.fidx}})},{guard:e=>{let{context:l,event:n}=e;return l.fidx!==n.fidx},actions:(0,X.a)({fidx:e=>{let{event:l}=e;return l.fidx},prevFidx:e=>{let{context:l}=e;return l.fidx}}),target:"Animating"}]}},Animating:{on:{DONE:{actions:(0,X.a)({prevFidx:null}),target:"Idle"}}}}}),ep=(0,G.c)(em);function eg(){let{fidx:e,prevFidx:l}=(0,Y.v9)(ep,e=>e.context),n=function(e,l){let n=s.floorsConfig;if(void 0===n)return null;let t=n.floors.map((n,t)=>t===e||t===l?"":`
.fidx-${t} {
  visibility: hidden;
}
`).join(""),r=null===l?"":`
.fidx-${l} {
  will-change: opacity;
  animation: xxx-disappearing ${ey} linear;
}
.fidx-${e} {
  will-change: opacity;
  animation: xxx-appearing ${ey} linear;
}
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
`;return`
${t}
${r}
`}(e,l),t=(0,o.useCallback)(l=>l===e?()=>{b.forEach(e=>e(l))}:void 0,[e]),r=(0,o.useCallback)(n=>null!==l||n===e?void 0:()=>{w.forEach(e=>e(n))},[e,l]);return{fidx:e,prevFidx:l,style:n,fidxToOnAnimationEnd:t,fidxToOnClick:r}}ep.start(),v.add(function(e){ep.send({type:"SELECT",fidx:e})}),b.add(function(e){ep.send({type:"DONE",fidx:e})});var eh=n(6058),ef=n(5185),e_=n(8945);function ex(e,l,n){let[t,r,a]=e,[i,o]=l;return t*i+r*o+a*n}function ew(e,l,n){return[ex(function(e){let[[l],[n],[t]]=e;return[l,n,t]}(e),l,n),ex(function(e){let[[,l],[,n],[,t]]=e;return[l,n,t]}(e),l,n)]}function ev(e,l){return[ew(e,function(e){let[l]=e;return l}(l),0),ew(e,function(e){let[,l]=e;return l}(l),0),ew(e,function(e){let[,,l]=e;return l}(l),1)]}function eb(e){let[l,n]=e;return[[1,0],[0,1],[l,n]]}function eS(e){let[l,n]=e;return[[l,0],[0,n],[0,0]]}function eM(e,l,n,t){return{x:e,y:l,width:n,height:t}}let eE={x:0,y:0,width:1,height:1};function ej(e){return{x:e.x,y:e.y,width:e.width,height:e.height}}function ek(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function eO(e,l){return{...e,x:e.x+l.x,y:e.y+l.y}}function eF(e,l){return{...e,x:l.x,y:l.y}}function eL(e){let{x:l,y:n,width:t,height:r}=e;return{tl:{x:l,y:n},br:{x:l+t,y:n+r}}}function eT(e){let{tl:l,br:n}=e;return{x:l.x,y:l.y,width:n.x-l.x,height:n.y-l.y}}function e$(e){let{tl:l,br:n}=e;return[[l.x,l.y],[n.x,n.y]]}function eC(e){let[[l,n],[t,r]]=e;return{tl:{x:l,y:n},br:{x:t,y:r}}}function eD(e,l){return(0,e_.zG)(e,eL,e$,e=>(function(e,l){let[n,t]=e;return[l(n),l(t)]})(e,e=>ew(l,e,1)),eC,eT)}function eN(e,l,n,t){return eD(e,function(e,l){let[n,t]=l;return[eb(l),eS(e),eb([-n,-t])].reduce(ev)}(ez(l),[n,t]))}function ez(e){return"number"==typeof e?[e,e]:"x"in e?[e.x,e.y]:e}function eR(e,l){let[n,t]=e,[r,a]=l;return[n-r,t-a]}function eA(e,l){let n=e.x+l.x,t=e.y+l.y;return{...e,x:n,y:t}}function eI(e,l){let n=e.x-l.x,t=e.y-l.y;return{...e,x:n,y:t}}var eP=n(592);let eH=n(6750).Zt(function(e,l){return eP.Df.compare(e.x,l.x)||eP.Df.compare(e.y,l.y)}),eW={x:0,y:0};function eZ(e){let[l,n]=e;return{x:l,y:n}}function eY(e,l){let n="number"==typeof l?l:l instanceof Array?l[0]:l.x,t="number"==typeof l?l:l instanceof Array?l[1]:l.y,r=e.x*n,a=e.y*t;return{...e,x:r,y:a}}var eU=n(6011),eX=n(5582);async function eG(){return new Promise((e,l)=>{navigator.geolocation.getCurrentPosition(function(l){e(l)},function(e){l(e)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}let eq=(0,U.cY)({types:{events:{},emitted:{}},actors:{api:(0,eU.p4)(eG)},delays:{TIMEOUT:5e3}}).createMachine({id:"geoloc",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,X.a)({position:e=>{let{event:l}=e;return l.output}}),(0,eX.e)(e=>{let{event:l}=e;return{type:"POSITION",position:l.output}})],target:"Idle"},onError:{actions:(0,X.a)({error:e=>{let{event:l}=e;return JSON.stringify(l)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),eK=(0,G.c)(eq);eK.start(),z.add(function(){eK.send({type:"GET"})});let eB=[1,2,2.5,5,10,15,20,25,30,40,50],eV=(0,U.cY)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,X.a)({ticked:!1}),set:(0,X.a)({ticked:!0}),call:(0,eX.e)({type:"CALL"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["call","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:l}=e;return!l.ticked},actions:{type:"set",params:e=>{let{event:l}=e;return l}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:l}=e;return l}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["call","clear"],target:"Idle"}}}}),eJ={container:eE,scroll:eE,content:new DOMMatrixReadOnly,svgOffset:{x:0,y:0},svgScale:{s:1},svg:eE};function eQ(e){let{container:l,svgOffset:n,svgScale:t,svg:r}=e;return{container:ej(l),scroll:ej(l),content:new DOMMatrixReadOnly,svgOffset:n,svgScale:t,svg:ej(r)}}function e5(e){let{scroll:l,content:n,svgOffset:t,svgScale:r,svg:a}=e;return new DOMMatrixReadOnly().translate(l.x,l.y).multiply(n).translate(-t.x,-t.y).scale(1/r.s,1/r.s).translate(-a.x,-a.y)}let e7={...eJ,config:{fontSize:16,container:eE,svgOffset:{x:0,y:0},svgScale:{s:1},svg:eE}};function e3(e){let{a:l,b:n,c:t,d:r}=e,a=new DOMMatrixReadOnly([l,n,t,r,0,0]).transformPoint({x:1,y:0});return Math.atan2(a.y,a.x)/Math.PI*180}function e0(e,l){return function(e,l,n){let t=e5(e).inverse().transformPoint(n),r=e.container.width/e.container.height,a=r<1?l/r:l,i=r<1?l:l*r;return{...e,scroll:eN(e.scroll,[a,i],n.x,n.y),svgOffset:eY(e.svgOffset,[a,i]),svg:eN(e.svg,[a,i],t.x,t.y)}}(e,l,ek(e.scroll))}function e1(e,l){let n=e.scroll.width/2,t=e.scroll.height/2,r=new DOMMatrixReadOnly().translate(n,t).rotate(l).translate(-n,-t).multiply(e.content);return{...e,content:r}}function e6(e,l){let n=eI(eY(l,-1),e.scroll);return(0,e_.zG)(e,e=>({...e,scroll:eO(e.scroll,n)}),l=>(function(e,l){let n=e.content.inverse(),t={x:e.scroll.width/2,y:e.scroll.height/2},r=eA(t,eI(e.scroll,l)),a=n.transformPoint(t),i=eY(eI(n.transformPoint(r),a),-e.svgScale.s);return{...e,scroll:eF(e.scroll,l),svg:eO(e.svg,i)}})(l,ej(e.scroll)))}function e4(e){if(null===e)return!0;let l=document.querySelector(".container");if(null===l)return!1;let n=l.scrollLeft,t=l.scrollTop,r=l.scrollWidth,a=l.scrollHeight;if(null===n)return!1;let i=r-e.width,o=a-e.height;if(Math.abs(i)>1||Math.abs(o)>1)return console.log(`scroll: target ${i>0?"larger":"smaller"} than expected: target=[${r}, ${a}] vs. request=[${e.width}, ${e.height}]`),!1;let u=Math.round(-e.x),s=Math.round(-e.y);if(u<0||s<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==u&&(l.scrollLeft=u),t!==s&&(l.scrollTop=s);let d=l.scrollLeft;if(Math.abs(d-u)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let c=l.scrollTop;return!(Math.abs(c-s)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${t} vs. real=${c}`),!1)}let e8={scroll:eE,client:{width:0,height:0},timeStamp:0},e9=new Set;e9.add(function(e){let l=e.currentTarget;null!==l&&(e8={scroll:{x:l.scrollLeft,y:l.scrollTop,width:l.scrollWidth,height:l.scrollHeight},client:{width:l.clientWidth,height:l.clientHeight},timeStamp:e.timeStamp})});let e2=(0,U.cY)({types:{events:{},context:{}},actions:{updateZoom:(0,X.a)({zoom:(e,l)=>l.zoom,z:(e,l)=>l.z}),updateRotate:(0,X.a)({}),updateSvgMatrix:(0,X.a)({svgMatrix:e=>{let{context:{layout:l}}=e;return function(e){let{content:l,svgOffset:n,svgScale:t,svg:r}=e;return new DOMMatrixReadOnly().multiply(l).translate(-n.x,-n.y).scale(1/t.s,1/t.s).translate(-r.x,-r.y)}(l)}}),updateGeoMatrix:(0,X.a)({geoMatrix:e=>{let{context:l}=e;return l.svgMatrix.multiply(s.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,X.a)({distanceRadius:e=>{let{context:{layout:l}}=e;return function(e){var l;let{container:n,svgScale:t}=e,r=Math.max(n.width,n.height)/2*t.s,a=Math.round(Math.log10(r)),i=(l=r/Math.pow(10,a-1),eB.flatMap(e=>{let n=Math.floor(l/e);return n<3||n>=10?[]:[{u:e,n}]}));if(i.length<1)throw Error("findDiv");let{u:o}=i[0],u=o*Math.pow(10,a-1);return{svg:u,client:u/t.s}}(l)}}),updateScroll:(0,X.a)({geoPoint:(e,l)=>{let{context:n}=e,{scroll:t,client:r}=l,a=n.geoMatrix,i={x:t.x+r.width/2,y:t.y+r.height/2};return a.transformPoint(i)},geoRange:(e,l)=>{let{context:n}=e,{scroll:t,client:r}=l,a=n.geoMatrix,i={x:t.x,y:t.y},o={x:t.x+r.width,y:t.y+r.height};return{start:a.transformPoint(i),end:a.transformPoint(o)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e7,zoom:1,z:null,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:eW,distanceRadius:{svg:0,client:0},geoRange:{start:eW,end:eW},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,X.a)({rendered:e=>{let{event:l}=e;return l.rendered},layout:e=>{let{event:l}=e;return l.layout}}),"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,G.r)(e=>{let{event:{rendered:l}}=e;return{type:"LAYOUT.DONE",rendered:l}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:l}=e;return l}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:l}=e;return l.currentScroll}}},"STYLE.MODE":{actions:(0,X.a)({mode:e=>{let{event:l}=e;return l.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:l}=e;return l.rendered},actions:(0,X.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,X.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,X.a)({animation:e=>{let{event:{animation:l}}=e;return l},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:l}=e;return!l.rendered},actions:(0,X.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,X.a)({animation:null,animating:!1}),target:"Idle"}}}}}),le=(0,G.c)(e2,{systemId:"system-viewer1"});function ll(e){le.send(e)}function ln(){return(0,Y.v9)(le,e=>e.context.layout.container)}function lt(){return(0,Y.v9)(le,e=>e.context.distanceRadius)}function lr(){ll({type:"STYLE.SCROLL",currentScroll:e8})}le.start(),j.add(function(e,l){ll({type:"STYLE.LAYOUT",layout:e,rendered:l}),requestAnimationFrame(()=>lr())}),k.add(function(e,l,n){ll({type:"STYLE.ZOOM",zoom:l,z:n})}),O.add(function(e,l){ll({type:"STYLE.ZOOM",zoom:l,z:null})}),F.add(function(e){ll({type:"STYLE.ANIMATION",animation:e})}),L.add(function(e){ll({type:"STYLE.MODE",mode:e})});let la=function(e,l){let n=eV.provide({delays:{DURATION:500}}),t=(0,G.c)(n);return t.on("CALL",l),t.start(),{machine:n,actor:t,tick:function(){t.send({type:"TICK"})}}}(0,lr);e9.add(la.tick);let li=(0,H.a)({context:{names:[]},on:{set:(e,l)=>{let{names:n}=l;return{names:n}}}});function lo(e,l,n){let t=function(e){let l="osm_id"in e&&"string"==typeof e.osm_id?e.osm_id:"osm_way_id"in e&&"string"==typeof e.osm_way_id?e.osm_way_id:null;return null===l?null:Number(l)}(e);if(null===t)return null;let r=e.name;if(null!==r&&void 0!==n&&r.match(n))return null;let{centroid_x:a,centroid_y:i}=e;return null===a||null===i||0===l.filter(l=>l.filter(e)).length?null:{a:t+"",lonlat:{x:a,y:i}}}let lu=new Worker(new URL(n.p+n.u("469"),n.b),Object.assign({},{type:"module"},{type:void 0}));lu.onmessage=e=>{let l=e.data;"INIT.DONE"===l.type||"SEARCH.DONE"===l.type&&function(e){var l;let n=function(e,l,n){let t=function(e,l){if(void 0===e)return null;let n=l.pointMap.get(e);if(void 0!==n)return n;let t=l.lineMap.get(e);if(void 0!==t)return t;let r=l.multipolygonMap.get(e);return void 0!==r?r:null}(Number(n.address),e);if(null===t)return null;let r=t.properties,a=l.flatMap(e=>e.filter(r)?[e.getInfo(r,n.address)]:[]);return 0===a.length?null:a[0]}(s.mapMap,s.searchEntries,e);null!==n&&(l=s.mapCoord.matrix.transformPoint(e.lonlat),m.forEach(e=>e({psvg:l,info:n})))}(l.res)},lu.onerror=e=>{console.log("error",e)},lu.onmessageerror=e=>{console.log("messageerror",e)},y.add(function(e){let l=s.mapCoord.matrix.inverse().transformPoint(e);lu.postMessage({type:"SEARCH",pgeo:l})});let ls=(0,U.cY)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Idle",states:{Idle:{on:{SEARCH:{actions:(0,eX.e)(e=>{let{event:l}=e;return l}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eX.e)(e=>{let{event:l}=e;return l}),target:"Done"},"SEARCH.CANCEL":{target:"Done"}}},Done:{always:"Idle"}}}),ld=(0,G.c)(ls);function lc(e){ld.send({type:"SEARCH",psvg:e})}function ly(e){ld.send(null===e?{type:"SEARCH.CANCEL"}:{type:"SEARCH.DONE",...e})}ld.on("SEARCH",e=>{let{psvg:l}=e;y.forEach(e=>e(l))}),ld.on("SEARCH.DONE",e=>{let{psvg:l,info:n}=e;p.forEach(e=>e({psvg:l,info:n}))}),ld.start();var lm=n(4428);let lp=new Map;function lg(e,l,n){(0,o.useEffect)(()=>(function(e,l,n){let t=void 0===n?document:lp.get(n)??null;if(null===t)return;let r=t.querySelector(`#${e}`)??null;if(null===r||null!==r.shadowRoot)return;let a=r.attachShadow({mode:"open"});lp.set(e,a),(0,lm.createRoot)(a).render(l)})(e,l,n),[e,n,l])}function lh(){return(0,P.jsxs)("g",{id:"XBus",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,P.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,P.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,P.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})}function lf(){return(0,P.jsxs)("g",{id:"XDrinkingFountain",children:[(0,P.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,P.jsxs)("g",{fill:"white",stroke:"none",children:[(0,P.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,P.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,P.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,P.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,P.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,P.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,P.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,P.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,P.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,P.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,P.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,P.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,P.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,P.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,P.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,P.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,P.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,P.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})}function l_(){return(0,P.jsxs)("g",{id:"XElevator",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,P.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,P.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,P.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,P.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,P.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,P.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,P.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,P.jsx)("use",{x:"8.5",href:"#_person2"}),(0,P.jsx)("use",{x:"17",href:"#_person2"})]})}function lx(){return(0,P.jsxs)("g",{id:"XEscalator",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,P.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,P.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})}function lw(){return(0,P.jsxs)("g",{id:"XInformation",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,P.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,P.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})}function lv(){return(0,P.jsxs)("g",{id:"XParking",children:[(0,P.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,P.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})}function lb(){return(0,P.jsxs)("g",{id:"XStairs",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})}function lS(){return(0,P.jsxs)("g",{id:"XToilets",transform:"translate(-36,-36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsxs)("g",{fill:"white",stroke:"none",children:[(0,P.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,P.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,P.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,P.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,P.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})}function lM(){return(0,P.jsx)("g",{className:"assets",children:(0,P.jsx)(lE,{})})}function lE(){return(0,P.jsxs)("g",{className:"symbols",children:[(0,P.jsx)(lh,{}),(0,P.jsx)(lf,{}),(0,P.jsx)(l_,{}),(0,P.jsx)(lx,{}),(0,P.jsx)(lw,{}),(0,P.jsx)(lv,{}),(0,P.jsx)(lb,{}),(0,P.jsx)(lS,{})]})}function lj(e){return e>.5?-1:+(e<.5)}function lk(e){return e<.3?1:e>.7?-1:0}function lO(e,l,n,t){let r=l/2,a=n/2,i=l/20,o=i/2,u={x:-r*e.h,y:-a*e.v},s=0===e.h||0===e.v?{x:-(r+t)*e.h,y:-(a+t)*e.v}:{x:-(r+t*Math.cos(e.th))*e.h,y:-(a+t*Math.sin(e.th))*e.v},[d,c]=0===e.h?[{x:-o,y:0},{x:o,y:0}]:0===e.v?[{x:0,y:-o},{x:0,y:o}]:e.th<Math.PI/4?[{x:0,y:0},{x:0,y:i*e.v}]:[{x:0,y:0},{x:i*e.h,y:0}],y=eA(u,d),m=eA(u,c);return{p:u,q:s,a:y,b:m}}function lF(e){return{open:e,animating:!1}}function lL(e){return e.open||e.animating?null:{open:!0,animating:!0}}function lT(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function l$(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function lC(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function lD(e){let{open:l,animating:n}=e;return l||n}Object.entries({bus:"#XBus",elevator:"#XElevator",escalator:"#XEscalator",information:"#XInformation",parking:"#XParking",stairs:"#XStairs",toilets:"#XToilets",water:"#XDrinkingFountain"});let lN={p:eW,psvg:eW,layout:eJ,info:{title:""}};function lz(e){return function(l,n){let t=l[n],r=e(t);return l[n]=null===r?t:r,l}}let lR=(0,U.cY)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:l}}=e;return lD(l.header)},isDetailVisible:e=>{let{context:{m:l}}=e;return lD(l.detail)},animationEnded:e=>{let{context:{animationEnded:l}}=e;return l.header&&l.detail}},actions:{startCancel:(0,X.a)({canceling:()=>!0}),endCancel:(0,X.a)({canceling:()=>!1}),open:(0,X.a)({m:(e,l)=>{let{context:{m:n}}=e,{part:t}=l;return lz(lL)(n,t)}}),close:(0,X.a)({m:(e,l)=>{let{context:{m:n}}=e,{part:t}=l;return lz(l$)(n,t)}}),handle:(0,X.a)({m:(e,l)=>{let{context:{m:n}}=e,{part:t}=l;return lz(n[t].open?lT:lC)(n,t)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:l}=e;return{...l,all:{open:!1,animating:!1},canceling:!1,detail:lN,m:{header:lF(!0),detail:lF(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,X.a)({detail:e=>{let{event:{psvg:l,info:n,layout:t}}=e;return{psvg:l,p:e5(t).transformPoint(l),info:n,layout:t}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,G.n)("animationEnded")},{actions:(0,X.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,G.n)("isDetailVisible")},{actions:(0,X.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,G.n)("animationEnded")},{actions:(0,X.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,G.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,X.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,eX.e)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,X.a)({animationEnded:e=>{let{context:l}=e;return{...l.animationEnded,header:!0}}}),(0,G.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,X.a)({animationEnded:e=>{let{context:l}=e;return{...l.animationEnded,detail:!0}}}),(0,G.r)({type:"DONE"})]}}}}});function lA(){return(0,Y.v9)(lP,e=>e.context.m.header)}function lI(){return(0,Y.v9)(lP,e=>e.context.m.detail)}let lP=(0,G.c)(lR);lP.on("CLOSE.DONE",function(){x.forEach(e=>e())}),lP.start();function lH(e){return(0,P.jsxs)("div",{className:"balloon",children:[(0,P.jsx)(lZ,{...e}),e.children,(0,P.jsx)("style",{children:lW})]})}g.add(function(e,l,n){lP.send({type:"DETAIL",psvg:e,info:l,layout:n})}),f.add(function(e){lP.send({type:e?"OPEN":"CANCEL"})}),_.add(function(){lP.send({type:"CANCEL"})}),x.add(function(){requestAnimationFrame(()=>(function(){let e=lp.get("detail");if(void 0===e)return;let l=e.querySelector(".detail");null!==l&&l.scroll(0,0)})())});let lW=`
.balloon,
.balloon-svg {
  ${q}
  ${eo}
  z-index: 10;
  will-change: opacity, transform;
}
`;function lZ(e){let l=e._hv;if(null===l)return(0,P.jsx)("svg",{});let{viewBox:n,width:t,height:r,fg:a,bg:i}=function(e,l){let{bw:n,bh:t,ll:r,d:a,width:i,height:o}=l,u=eM(-i/2,-i/2,i,o),{body:s,leg:d}=function(e,l,n,t){let r=l/2,a=n/2,i=`
m${-r},${-a}
h${l}
v${n}
h${-l}
z
`,{p:o,q:u,a:s,b:d}=lO(e,l,n,t),c=eI(u,s),y=eI(d,u),m=eI(o,d);return{body:i,leg:`
m${s.x},${s.y}
l${c.x},${c.y}
l${y.x},${y.y}
l${m.x},${m.y}
z
`}}(e,n,t,r);return{viewBox:u,width:i,height:o,bg:`M${a},${a}`+s+`M${a},${a}`+d,fg:"M0,0"+s+"M0,0"+d}}(l,e._size);return(0,P.jsxs)("svg",{className:"balloon-svg",viewBox:function(e){let{x:l,y:n,width:t,height:r}=e;return`${l} ${n} ${t} ${r}`}(function(e,l){let{x:n,y:t,width:r,height:a}=e;return{x:l(n),y:l(t),width:l(r),height:l(a)}}(n,function(e){return Math.round(100*e)/100})),width:t,height:r,children:[(0,P.jsx)("path",{className:"bg",d:i}),(0,P.jsx)("path",{className:"fg",d:a}),(0,P.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function lY(e){let{_p:l,_hv:n,_size:t,_leg:r}=e,a=lI(),i=null!==l&&null!==n&&lD(a)?function(e,l,n,t,r){let{open:a,animating:i}=e,{bw:o,bh:u,width:s,height:d}=t,c=eI(r.q,r.p),y={x:(o/2+Math.abs(c.x))*n.h,y:(u/2+Math.abs(c.y))*n.v};if(i){let[e,n]=a?[0,1]:[1,0],[t,r]=a?[0,1]:[1,0],[i,o]=a?["0px","var(--dp-x)"]:["var(--dp-x)","0px"],[u,c]=a?["0px","var(--dp-y)"]:["var(--dp-y)","0px"],m=a?ed:ec;return`
.detail,
.balloon {
  --q-x: ${l.x}px;
  --q-y: ${l.y}px;
  --dp-x: ${y.x}px;
  --dp-y: ${y.y}px;
  --oa: ${e};
  --ob: ${n};
  --sa: ${t};
  --sb: ${r};
  --timing: ${m};
  --dxa: ${i};
  --dxb: ${o};
  --dya: ${u};
  --dyb: ${c};
  --pww: ${-s/2}px;
  --phh: ${-d/2}px;
  --duration: 400ms;
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
    transform: translate(calc(var(--q-x) + var(--dxa)), calc(var(--q-y) + var(--dya))) scale(var(--sa)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--ob);
    transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
  }
}

@keyframes xxx-balloon {
  from {
    opacity: var(--oa);
    transform: translate(calc(var(--q-x) + var(--dxa)), calc(var(--q-y) + var(--dya))) scale(var(--sa)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
  to {
    opacity: var(--ob);
    transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
  }
}
`}return`
.detail,
.balloon {
  --q-x: ${l.x}px;
  --q-y: ${l.y}px;
  --sb: 1;
  --dp-x: ${y.x}px;
  --dp-y: ${y.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-s/2}px;
  --phh: ${-d/2}px;
}

.detail {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
}

.balloon {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
}
`}(a,l,n,t,r):".balloon, .detail { visibility: hidden; }";return(0,P.jsx)("style",{children:i})}function lU(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let lX=(0,U.cY)({types:{},actions:{getScroll:(0,X.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let l=e.scrollLeft,n=e.scrollTop,t=e.scrollWidth,r=e.scrollHeight;return e.scrollLeft=Number(l)+1,e.scrollLeft=Number(l),eM(l,n,t,r)}return null})()}),syncScroll:(e,l)=>{let{pos:n}=l;return e4(n)}},actors:{syncScrollLogic:(0,eU.p4)(async e=>{let{input:l}=e;if(null===l)throw Error("input is null");if(!e4(l))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:l}=e;return{pos:l.pos}}}]},GET:{actions:["getScroll",(0,eX.e)(e=>{let{context:{scroll:l}}=e;return{type:"SCROLL.GET.DONE",scroll:l}})]},SYNCSYNC:{actions:(0,X.a)({dest:e=>{let{event:l}=e;return l.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:l}=e;return l.dest},onDone:{actions:["getScroll",(0,eX.e)(e=>{let{context:{scroll:l}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:l}}),(0,X.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),lG={slideDoneCbs:new Set,getDoneCbs:new Set,syncSyncDoneCbs:new Set},lq=(0,G.c)(lX,{systemId:"system-scroll1"});function lK(e){lq.send(e)}lq.on("SCROLL.SLIDE.DONE",e=>lG.slideDoneCbs.forEach(l=>l(e))),lq.on("SCROLL.GET.DONE",e=>lG.getDoneCbs.forEach(l=>l(e))),lq.on("SCROLL.SYNCSYNC.DONE",e=>lG.syncSyncDoneCbs.forEach(l=>l(e)));let lB="panning",lV=(0,U.cY)({types:{},guards:{shouldReset:(e,l)=>{let{ev:n}=l;return"r"===n.key},shouldRecenter:(e,l)=>{let{ev:n}=l;return"c"===n.key},shouldRotate:(e,l)=>{let{ev:n}=l;return"t"===n.key},shouldZoom:(e,l)=>{let{ev:n}=l;return 0!==lU(n.key)},isTouching:e=>{let{context:{touching:l}}=e;return l},isHoming:e=>{let{context:{homing:l}}=e;return l},isZoomWanted:e=>{let{context:{want_animation:l}}=e;return"zoom"===l},isRotateWanted:e=>{let{context:{want_animation:l}}=e;return"rotate"===l},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>s.isMapRendered(),isUiRendered:()=>s.isUiRendered()},actions:{syncScroll:e=>{let{context:{layout:l}}=e;return lK({type:"SYNC",pos:l.scroll})},syncScrollSync:e=>{let{context:{layout:l}}=e;return lK({type:"SYNCSYNC",pos:l.scroll})},getScroll:()=>lK({type:"GET"}),zoomKey:(0,X.a)({z:(e,l)=>{let{ev:n}=l;return lU(n.key)}}),zoomHome:(0,X.a)({z:()=>null,zoom:()=>1,homing:()=>!0}),zoomEvent:(0,X.a)({z:(e,l)=>{let{z:n}=l;return n},cursor:(e,l)=>{let{context:{cursor:n}}=e,{p:t}=l;return null===t?n:t}}),startZoom:(0,X.a)({animation:e=>{let{context:{layout:l,cursor:n,z:t}}=e;return null===t?function(e,l){let n=ek(l.config.svg),t=e5(e).transformPoint(n),r=l.svgScale.s/e.svgScale.s,a=ek(e.container),i=new DOMMatrixReadOnly().translate(a.x,a.y).scale(1/r).translate(-t.x,-t.y);return{move:null,zoom:{svg:l.svg,svgScale:l.svgScale,q:i,o:null},rotate:null}}(l,function(e){let{config:l,content:n}=e,t=eQ(l),r=e3(n);return e1({config:l,...t},r)}(l)):function(e,l,n){var t,r;let a=e5(e).inverse().transformPoint(n),i=1/(r=l,Math.pow(s.zoomFactor,r)),o=new DOMMatrixReadOnly().scale(1/i,1/i);return{move:null,zoom:{svg:eN(e.svg,i,a.x,a.y),svgScale:(t=e.svgScale,"x"in t?{x:t.x*i,y:t.y*i}:{s:t.s*i}),q:o,o:n},rotate:null}}(l,t,n)}}),startRotate:(0,X.a)({animation:e=>{let{context:{layout:l,cursor:n}}=e;return{move:null,zoom:null,rotate:{deg:90,q:new DOMMatrixReadOnly().rotate(90),o:n}}}}),updateZoom:(0,X.a)({prevLayout:e=>{let{context:{layout:l}}=e;return l},layout:e=>{let{context:{layout:l,animation:n}}=e;return null===n?l:(0,e_.zG)(l,e=>{var l;return null===n.move?e:(l=n.move.move,{...e,scroll:eF(e.scroll,l)})},e=>{var l,t;return null===n.zoom?e:(l=n.zoom.svg,t=n.zoom.svgScale,{...e,svg:ej(l),svgScale:t})},e=>null===n.rotate?e:e1(e,n.rotate.deg))}}),endZoom:(0,X.a)({prevLayout:null,want_animation:null,animation:null,z:null,zoom:e=>{let{context:{z:l,zoom:n}}=e;return null===l?n:n*Math.pow(2,l)}}),endRotate:(0,X.a)({prevLayout:null,want_animation:null,animation:null}),wantZoom:(0,X.a)({want_animation:"zoom"}),wantRotate:(0,X.a)({want_animation:"rotate"}),syncAnimation:e=>{var l,n,t,r,a,i,o;let{context:{animation:u}}=e,s=(null==u||null==(l=u.move)?void 0:l.q)??(null==u||null==(n=u.zoom)?void 0:n.q)??(null==u||null==(t=u.rotate)?void 0:t.q)??null,d=(null==u||null==(r=u.move)?void 0:r.o)??(null==u||null==(a=u.zoom)?void 0:a.o)??(null==u||null==(i=u.rotate)?void 0:i.o)??null;null!==s&&(o={matrix:s,origin:d},F.forEach(e=>e(o)))},syncLayout:e=>{let{context:{layout:l,rendered:n}}=e;j.forEach(e=>e(l,n))},resetCursor:(0,X.a)({cursor:e=>{let{context:{layout:l}}=e;return ek(l.container)}}),cursor:(0,X.a)({cursor:(e,l)=>{let{ev:n}=l;return{x:n.pageX,y:n.pageY}}}),setModeToPanning:(0,X.a)({mode:lB,cursor:e=>{let{context:{layout:l}}=e;return ek(l.container)}}),setModeToTouching:(0,X.a)({mode:"touching"}),setModeToLocked:(0,X.a)({mode:"locked"}),startTouching:(0,X.a)({touching:!0}),endTouching:(0,X.a)({touching:!1}),notifyTouching:(0,G.r)({type:"TOUCHING"}),notifyTouchingDone:(0,G.r)({type:"TOUCHING.DONE"}),startAnimating:(0,X.a)({animating:()=>!0}),stopAnimating:(0,X.a)({animating:()=>!1}),resizeLayout:(0,X.a)({rendered:!1,origLayout:(e,l)=>{let{layout:n}=l;return n},layout:(e,l)=>{let{layout:n}=l;return e0(n,9)}}),updateLayoutFromScroll:(0,X.a)({layout:e=>{let{context:l}=e,{scroll:n}=e8;return e6(l.layout,n)}}),notifyZoomStart:(0,eX.e)(e=>{let{context:{layout:l,zoom:n,z:t}}=e;return{type:"ZOOM.START",layout:l,zoom:n,z:null===t?0:t}}),notifyZoomEnd:(0,eX.e)(e=>{let{context:{layout:l,zoom:n}}=e;return{type:"ZOOM.END",layout:l,zoom:n}}),notifySearch:(0,eX.e)(e=>{let{context:l}=e,{scroll:n}=e8;return{type:"SEARCH",psvg:e5(e6(l.layout,n)).inverse().transformPoint(l.cursor)}}),notifySearchDone:(0,G.r)({type:"SEARCH.DONE"}),notifySearchEndDone:(0,eX.e)((e,l)=>{let{context:n}=e,{res:t}=l,{scroll:r}=e8,a=e6(n.layout,r);return{type:"SEARCH.END.DONE",psvg:t.psvg,info:t.info,layout:a}}),endHoming:(0,X.a)({cursor:e=>{let{context:l}=e;return ek(l.origLayout.container)},layout:e=>{let{context:l}=e;return e1(e0(l.origLayout,9),e3(l.layout.content))},homing:()=>!1}),notifyMode:(0,eX.e)(e=>{let{context:{mode:l}}=e;return{type:"MODE",mode:l}}),notifyLock:(0,eX.e)({type:"LOCK",ok:!0}),setRendered:(0,X.a)({rendered:!0}),notifySwitch:(0,eX.e)((e,l)=>{let{fidx:n}=l;return{type:"SWITCH",fidx:n}}),notifySwitchDone:(0,eX.e)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"Resizing",context:{origLayout:e7,layout:e7,prevLayout:null,cursor:ek(e7.container),z:null,zoom:1,homing:!1,want_animation:null,animation:null,mode:lB,touching:!1,animating:!1,rendered:!1},on:{"TOUCH.LOCK":{actions:["startTouching","notifyTouching","setModeToTouching","notifyMode"]},"TOUCH.UNLOCK":{actions:["endTouching","notifyTouchingDone","setModeToPanning","notifyMode"]},"SEARCH.LOCK":{actions:["notifyLock","setModeToLocked","notifyMode"]},"SEARCH.UNLOCK":{actions:["setModeToPanning","notifyMode","notifySearchDone"]}},states:{Resizing:{initial:"WaitingForResizeRequest",onDone:"Appearing",states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:l}=e;return l}},target:"WaitingForMapRendered"}}},WaitingForWindowStabilized:{id:"Resizing-WaitingForWindowStabilized",after:{500:{target:"WaitingForMapRendered"}}},WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,G.a)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"syncLayout",on:{RENDERED:{actions:["setRendered","syncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"syncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Done"}}},Done:{type:"final"}}},Appearing:{on:{"ANIMATION.END":{target:"Panning"}}},Panning:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:l}=e;return l}}],target:"#Resizing-WaitingForWindowStabilized"},"LAYOUT.RESET":{actions:["zoomHome","wantZoom"],target:"Zooming"},"KEY.UP":[{guard:{type:"shouldZoom",params:e=>{let{event:l}=e;return{ev:l.ev}}},actions:[{type:"zoomKey",params:e=>{let{event:l}=e;return{ev:l.ev}}},"wantZoom"],target:"Zooming"},{guard:{type:"shouldRotate",params:e=>{let{event:l}=e;return{ev:l.ev}}},actions:"wantRotate",target:"Zooming"}],CLICK:{guard:()=>s.searchEntries.length>0,actions:[{type:"cursor",params:e=>{let{event:l}=e;return{ev:l.ev}}}],target:"Searching"},SWITCH:{actions:{type:"notifySwitch",params:e=>{let{event:l}=e;return l}},target:"Switching"},CONTEXTMENU:{target:"Recentering"},ROTATE:{actions:"wantRotate",target:"Zooming"},RECENTER:{target:"Recentering"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:e=>{let{event:{z:l,p:n}}=e;return{z:l,p:n}}},"wantZoom"],target:"Zooming"},TOUCHING:{target:"Touching"}}},Touching:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Waiting"}}},Waiting:{on:{"TOUCHING.DONE":{target:"Done"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:e=>{let{event:{z:l,p:n}}=e;return{z:l,p:n}}},"wantZoom"],target:"#Zooming"}}},Done:{type:"final"}}},Searching:{initial:"Starting",onDone:"Panning",states:{Starting:{always:{actions:"notifySearch",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"notifySearchEndDone",params:e=>{let{event:l}=e;return l}},target:"WaitingForSearchUnlock"}}},WaitingForSearchUnlock:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Panning",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"notifySwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","syncLayout","syncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:[{guard:"isZoomWanted",actions:["updateLayoutFromScroll","startZoom","updateZoom","notifyZoomStart"],target:"Animating"},{guard:"isRotateWanted",actions:["updateLayoutFromScroll","startRotate","updateZoom","notifyZoomStart"],target:"Animating"}]},Animating:{initial:"Starting",onDone:"Done",states:{Starting:{always:{actions:["startAnimating","syncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":[{guard:"isZoomWanted",actions:["endZoom","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"},{guard:"isRotateWanted",actions:["endRotate","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"}]}},Homing:{always:[{guard:"isHoming",actions:["endHoming","syncLayout","syncScroll"],target:"Done"},{target:"Done"}]},Done:{type:"final"}}},Done:{type:"final"}}}}});function lJ(e){lQ.send(e)}let lQ=(0,G.c)(lV,{systemId:"system-viewer1"});lQ.on("SEARCH",e=>{let{psvg:l}=e;c.forEach(e=>e(l))}),lQ.on("SEARCH.END.DONE",e=>{let{psvg:l,info:n,layout:t}=e;g.forEach(e=>e(l,n,t)),h.forEach(e=>e(l,n,t))}),lQ.on("LOCK",e=>{let{ok:l}=e;f.forEach(e=>e(l))}),lQ.on("ZOOM.START",e=>{let{layout:l,zoom:n,z:t}=e;k.forEach(e=>e(l,n,t))}),lQ.on("ZOOM.END",e=>{let{layout:l,zoom:n}=e;return I(l,n)}),lQ.on("LAYOUT",e=>{let{layout:l}=e;return I(l,1)}),lQ.on("MODE",e=>{let{mode:l}=e;L.forEach(e=>e(l))}),lQ.on("SWITCH",e=>{let{fidx:l}=e;v.forEach(e=>e(l))}),lQ.on("SWITCH.DONE",()=>void S.forEach(e=>e())),lQ.start(),w.add(function(e){lJ({type:"SWITCH",fidx:e})}),b.add(function(){lJ({type:"SWITCH.DONE"})}),p.add(function(e){lQ.send({type:"SEARCH.END",res:e})}),h.add(function(e){lQ.send({type:"SEARCH.LOCK",psvg:e})}),x.add(function(){lQ.send({type:"SEARCH.UNLOCK"})}),E.add(function(e,l){lJ({type:"RESIZE",layout:e,force:l})}),lG.getDoneCbs.add(function(e){null!==e.scroll&&lJ({type:"SCROLL.GET.DONE",scroll:e.scroll})}),lG.syncSyncDoneCbs.add(function(e){null!==e.scroll&&lJ({type:"SCROLL.SYNCSYNC.DONE",scroll:e.scroll})});let l5=!1,l7=!1;function l3(e,l){null==l||l.preventDefault,(null==l?void 0:l.stopPropagation)===!1||e.ev.stopPropagation(),lJ(e)}function l0(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let l=e.current;if(l)return l.addEventListener("wheel",l1),()=>{l.removeEventListener("wheel",l1)}},[e]),e}function l1(e){let l=e.currentTarget;l7&&l instanceof HTMLDivElement&&l.scrollWidth===l.clientWidth&&l.scrollHeight===l.clientHeight&&e.preventDefault()}function l6(e){let{_detail:l}=e,n=l0();return(0,P.jsxs)("div",{ref:n,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void lP.send(e)},children:[s.renderInfo&&!function(e){let l=Object.values(e.info);return 1===l.length&&"string"==typeof l[0]&&""===l[0]}(l)&&s.renderInfo({info:l.info}),(0,P.jsx)("style",{children:l4})]})}L.add(function(e){l5="locked"===e,l7="locked"===e}),k.add(function(){l7=!0}),O.add(function(){l7=!1}),C.add(function(){lJ({type:"LAYOUT.RESET"})}),D.add(function(){lJ({type:"RECENTER"})}),N.add(function(){lJ({type:"ROTATE"})}),$.add(function(){lJ({type:"ZOOM.ZOOM",z:-1,p:null})}),T.add(function(){lJ({type:"ZOOM.ZOOM",z:1,p:null})}),M.add(function(){lJ({type:"RENDERED"})});let l4=`
.detail {
  ${q}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eu}
  ${el}
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
  ${ea}
  margin: 1.5em;
  text-align: center;
}

p {
  ${ea}
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
`;function l8(){return lg("detail",(0,P.jsx)(l9,{}),"ui"),(0,P.jsx)("div",{id:"detail"})}function l9(){return(0,P.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,P.jsx)(l2,{}),(0,P.jsx)(ne,{})]})}function l2(){let e=(0,Y.v9)(lP,e=>e.context.detail),l=function(e){let l=e.p,n=e.layout,t=function(e,l){let{x:n,y:t}=l,r=e.width/e.height,a={x:n/e.width,y:t/e.height},i=r>1?lj(a.x):lk(a.x);return{h:i,v:r>1?lk(a.y):lj(a.y),th:Math.atan2(e.height,e.width)}}(e.layout.container,l),r=n.container.width,a=n.container.height,i=function(e,l){let n=.01*Math.min(e,l),t=50*n,r=50*n,a=10*n,i=t/100;return{bw:t,bh:r,ll:a,d:i,width:t+2*a+2*i,height:r+2*a+2*i}}(r,a),o=lO(t,i.bw,i.bh,i.ll);return{_p:l,_hv:t,_W:r,_H:a,_size:i,_leg:o}}(e);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(lH,{...l}),(0,P.jsx)(l6,{_detail:e}),(0,P.jsx)(lY,{...l})]})}function ne(){return(0,P.jsx)("svg",{id:"ui-svg-defs",children:(0,P.jsx)("defs",{children:(0,P.jsx)(lM,{})})})}function nl(){return lg("footer",(0,P.jsx)(nn,{}),"ui"),(0,P.jsx)("div",{id:"footer"})}function nn(){let e=s;return(0,P.jsxs)("div",{className:"ui-content footer",children:[(0,P.jsx)("p",{children:e.copyright}),(0,P.jsxs)("style",{children:[nt,(0,P.jsx)(nr,{})]})]})}let nt=`
.footer {
  ${B}
  ${et}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${ea}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function nr(){let{open:e,animating:l}=lA();if(l){let[l,n]=e?[0,1]:[1,0],t=e?ed:ec;return(0,P.jsx)(P.Fragment,{children:`
.footer {
  --duration: 300ms;
  --timing: ${t};
  --a: ${l};
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
`})}return(0,P.jsx)(P.Fragment,{children:`
.footer {
  --b: ${+!!e};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}let na=void 0;function ni(e){return Math.round(100*e)/100}function no(e){return Math.round(1e7*e)/1e7}function nu(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)("g",{id:"measure",children:(0,P.jsx)(nc,{})})})}function ns(){let{svg:e}=lt();return(0,P.jsxs)("div",{id:"distance",children:[(0,P.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),ng.map(l=>(0,P.jsxs)(o.Fragment,{children:[(0,P.jsxs)("p",{id:`distance-x-${l+1}`,className:"distance distance-x",children:[e*(l+1),"m"]}),(0,P.jsxs)("p",{id:`distance-y-${l+1}`,className:"distance distance-y",children:[e*(l+1),"m"]})]},l)),(0,P.jsx)("style",{children:(0,P.jsx)(np,{})})]})}function nd(){let e=(0,Y.v9)(le,e=>e.context.geoPoint),l=e.x>0?"E":"W",n=e.y>0?"N":"S",t=`${l} ${no(Math.abs(e.x))}`,r=`${n} ${no(Math.abs(e.y))}`;return(0,P.jsxs)("div",{id:"coordinate",children:[(0,P.jsx)("p",{id:"longitude",children:t}),(0,P.jsx)("p",{id:"latitude",children:r}),(0,P.jsx)("style",{children:(0,P.jsx)(nm,{})})]})}function nc(){let{width:e,height:l}=ln(),{client:n}=lt(),t=`M0,${l/2} h${e}`,r=`M${e/2},0 v${l}`,a=ng.map(t=>(function(e){let{width:l,height:n,r:t}=e;return`M${l/2},${n/2} m-${t},0 a${t},${t} 0,1,0 ${2*t},0 a${t},${t} 0,1,0 -${2*t},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:l,r:n*(t+1)}));return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t}),(0,P.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),a.map((e,l)=>(0,P.jsx)("path",{id:`measure-ring-${l+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},l))]})}function ny(){let{open:e,animating:l}=lA(),[n,t]=e?[0,1]:[1,0],r=l?`
.guides {
  --timing: ${e?ed:ec};
  --duration: 300ms;
  --oa: ${n};
  --ob: ${t};
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
  --ob: ${t};
  opacity: var(--ob);
  will-change: opacity;
}
`;return(0,P.jsx)(P.Fragment,{children:r})}function nm(){let{width:e,height:l}=ln(),n=`
#distance,
#coordinate {
  ${q}
  width: ${e}px;
  height: ${l}px;
}
`,t=`
#longitude {
  ${V}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-l/2}px) scale(0.5);
}
`,r=`
#latitude {
  ${B}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-l/2}px) scale(0.5);
}
`;return(0,P.jsxs)(P.Fragment,{children:[n,t,r]})}function np(){let{width:e,height:l}=ln(),{client:n}=lt(),t=`
.distance {
  ${q}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,r=`
#distance-origin {
  transform: translate(${e/2}px, ${l/2}px) scale(0.5);
}
`,a=ng.map(t=>`
#distance-x-${t+1} {
  transform: translate(${e/2+n*(t+1)}px, ${l/2}px) scale(0.5);
}
`),i=ng.map(t=>`
#distance-y-${t+1} {
  transform: translate(${e/2}px, ${l/2+n*(t+1)}px) scale(0.5);
}
`);return(0,P.jsxs)(P.Fragment,{children:[r,t,a,i]})}let ng=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function nh(){return lg("guides",(0,P.jsx)(nf,{}),"ui"),(0,P.jsx)("div",{id:"guides"})}function nf(){return s.mapCoord.matrix.isIdentity?(0,P.jsx)(P.Fragment,{}):(0,P.jsxs)("div",{className:"ui-content guides",children:[(0,P.jsx)("svg",{className:"guides",children:(0,P.jsx)(nu,{})}),(0,P.jsx)(ns,{}),(0,P.jsx)(nd,{}),(0,P.jsxs)("style",{children:[n_,(0,P.jsx)(ny,{})]})]})}let n_=`
.guides {
  ${q}
  ${en}
  ${eo}
  z-index: 2;
}

text {
  ${ea}
}
`;function nx(){let{fidx:e,fidxToOnClick:l}=eg(),n=s.floorsConfig;return void 0===n||n.floors.length<2?(0,P.jsx)(P.Fragment,{}):(0,P.jsxs)("div",{className:"floors",children:[(0,P.jsx)("ul",{className:"floor-list",children:n.floors.map((n,t)=>{let{name:r}=n;return(0,P.jsx)("li",{className:`floor-item ${nS(t===e)}`,onClick:l(t),children:r},t)})}),(0,P.jsx)("style",{children:nw})]})}let nw=`
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
  ${es}
}
.floor-item {
  text-align: center;
  padding: 0.5em 0.75em;
  border: 1.5px solid black;
  pointer-events: initial;
  will-change: opacity;
  transition: opacity ${ey};
}
.floor-item.selected {
  opacity: 1;
}
.floor-item.unselected {
  opacity: 0.5;
}
`;function nv(){let{fidx:e}=eg(),l=s.floorsConfig;return void 0===l||l.floors.length<2?(0,P.jsx)(P.Fragment,{}):(0,P.jsxs)("div",{children:[l.floors.map((l,n)=>(0,P.jsx)("h2",{className:`floor-name ${nS(n===e)}`,children:l.name},n)),(0,P.jsx)("style",{children:nb})]})}let nb=`
.floor-name {
  position: absolute;
  transform: translate(-50%, 0);
  margin: 0.25em 0;
  font-size: 4em;
  will-change: opacity;
  transition: opacity ${ey};
}
.floor-name.selected {
  opacity: 1;
}
.floor-name.unselected {
  opacity: 0;
}
`;function nS(e){return e?"selected":"unselected"}function nM(){return lg("header",(0,P.jsx)(nE,{}),"ui"),(0,P.jsx)("div",{id:"header"})}function nE(){let e=s;return(0,P.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void lP.send(e)},children:[(0,P.jsx)("h1",{className:"title",onClick:()=>void C.forEach(e=>e()),children:e.title}),(0,P.jsx)(nv,{}),(0,P.jsxs)("style",{children:[nj,(0,P.jsx)(nk,{})]})]})}let nj=`
.header {
  ${q}
  ${et}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${ea}
  ${eu}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function nk(){let{open:e,animating:l}=lA();if(l){let[l,n]=e?[0,1]:[1,0],t=e?ed:ec;return(0,P.jsx)(P.Fragment,{children:`
.header {
  --timing: ${t};
  --duration: 300ms;
  --a: ${l};
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
`})}return(0,P.jsx)(P.Fragment,{children:`
.header {
  --b: ${+!!e};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nO(){return lg("left",(0,P.jsx)(nF,{}),"ui"),(0,P.jsx)("div",{id:"left"})}function nF(){return(0,P.jsxs)("div",{className:"ui-content left bottom",children:[(0,P.jsx)(nx,{}),(0,P.jsx)("style",{children:nL})]})}let nL=`
.left {
  ${q}
  ${er}
  padding: 0.4em;
  font-size: smaller;
  ${eo}

  transform-origin: 100% 50%;
  transform: translateY(calc(-50% + 50vh));
  transform: translateY(calc(-50% + 50svh));
}

.left {
  top: initial;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nT(){return lg("right",(0,P.jsx)(n$,{}),"ui"),(0,P.jsx)("div",{id:"right"})}function n$(){return(0,P.jsxs)("div",{className:"ui-content right bottom",children:[(0,P.jsx)(nD,{}),(0,P.jsx)("style",{children:nC})]})}let nC=`
.right {
  ${K}
  ${er}
  padding: 0.4em;
  font-size: smaller;
  ${eo}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nD(){return(0,P.jsxs)("div",{className:"zoom",children:[(0,P.jsx)(nz,{}),(0,P.jsx)(nR,{}),(0,P.jsx)(nA,{}),(0,P.jsx)(nI,{}),(0,P.jsx)(nP,{}),(0,P.jsx)(nH,{}),(0,P.jsxs)("style",{children:[nN,(0,P.jsx)(nW,{})]})]})}let nN=`
.zoom {
  font-size: large;
  margin: 0;
  ${et}
}

.zoom-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${eu}
  cursor: default;
  ${es}
}
.zoom-item > svg {
  display: block;
  width: 1.25em;
  height: 1.25em;
  pointer-events: none;
}
.zoom-item > svg > path {
  stroke: black;
  stroke-width: 0.4;
  fill: none;
}

.fullscreen {
  display: none;
}
`;function nz(){return(0,P.jsx)("div",{className:"zoom-item fullscreen",onClick:()=>void R.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nB})})})}function nR(){return s.mapCoord.matrix.isIdentity?(0,P.jsx)(P.Fragment,{}):(0,P.jsx)("div",{className:"zoom-item position",onClick:()=>void z.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nK})})})}function nA(){return(0,P.jsx)("div",{className:"zoom-item recenter",onClick:()=>void D.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nX})})})}function nI(){return(0,P.jsx)("div",{className:"zoom-item rotate",onClick:()=>void N.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nU})})})}function nP(){return(0,P.jsx)("div",{className:"zoom-item zoom-out",onClick:()=>void $.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nY})})})}function nH(){return(0,P.jsx)("div",{className:"zoom-item zoom-in",onClick:()=>void T.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nZ})})})}function nW(){let{open:e,animating:l}=lA();if(l){let[l,n]=e?[0,1]:[1,0],t=e?ed:ec;return(0,P.jsx)(P.Fragment,{children:`
.right {
  --timing: ${t};
  --a: ${l};
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
`})}return(0,P.jsx)(P.Fragment,{children:`
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
`})}let nZ=`
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
`,nY=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`,nU=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`,nX=`
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
`,nG=3*Math.sqrt(2),nq=nG+6,nK=`
M 0,0
m 0,${nq/2}
l -3,-3
a ${nG},${nG} 0,1,1 6,0
z
m 0,${-nq+nG+nG/2}
a ${nG/2},${nG/2} 0,1,0 0,${-nG}
a ${nG/2},${nG/2} 0,1,0 0,${nG}
`.replaceAll(/([.]\d\d)\d*/g,"$1"),nB=`
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
`;function nV(){return lg("shadow",(0,P.jsx)(nJ,{}),"ui"),(0,P.jsx)("div",{id:"shadow"})}function nJ(){let e=l0();return(0,P.jsx)("div",{ref:e,className:"ui-content shadow",onClick:()=>void _.forEach(e=>e()),children:(0,P.jsxs)("style",{children:[nQ,(0,P.jsx)(n5,{})]})})}let nQ=`
.shadow {
  ${q}
  ${en}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function n5(){let{open:e,animating:l}=lI(),n=(0,Y.v9)(le,e=>e.context.animating);if(!l)return e?(0,P.jsx)(P.Fragment,{children:`
.shadow {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,P.jsx)(P.Fragment,{children:".shadow { display: initial; opacity: 0; }"}):(0,P.jsx)(P.Fragment,{children:".shadow { display: none; }"});{let[l,n]=e?[0,.3]:[.3,0],t=e?ed:ec;return(0,P.jsx)(P.Fragment,{children:`
.shadow {
  --duration: 400ms;
  --timing: ${t};
  --a: ${l};
  --b: ${n};
  will-change: opacity;
  animation: xxx-shadow var(--duration) var(--timing);
}

@keyframes xxx-shadow {
  from {
    opacity: var(--a);
  }
  to {
    opacity: var(--b);
  }
}
`})}}function n7(){return lg("ui",(0,P.jsx)(n3,{})),(0,P.jsx)("div",{id:"ui"})}function n3(){return(0,P.jsxs)("div",{className:"ui",children:[(0,P.jsx)(nV,{}),(0,P.jsx)(nM,{}),(0,P.jsx)(nl,{}),(0,P.jsx)(nO,{}),(0,P.jsx)(nT,{}),(0,P.jsx)(nh,{}),(0,P.jsx)(l8,{})]})}function n0(){var e,l,n;let t=(null==(n=document.querySelector("#ui"))||null==(l=n.shadowRoot)||null==(e=l.children)?void 0:e.length)??null;return null!==t&&t>0}var n1=n(8544);let n6=eh.pR(eH),n4=n1.YH(eP.Df),n8=n1.qO(),n9=n1.uZ(eP.Eq,eh.jG());function n2(e){return(0,e_.zG)(e,n1.VO(n6),eh.DZ(e=>0===e.length?ef.YP:ef.G(e[0])))}function te(e){return e.length<2?null:function(e){let l=0===e.length?null:e.reduce((e,l)=>({x:e.x+l.x,y:e.y+l.y}));return null===l?null:eY(l,1/e.length)}(e)}function tl(e){return new Map((0,e_.zG)(e.changedTouches,Array.from,eh.UI(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let tn=(0,U.cY)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:e=>{let{context:{touches:l}}=e;return 0===l.vecs.size},isSingleTouching:e=>{let{context:{touches:l}}=e;return 1===l.vecs.size},isDoubleTouching:e=>{let{context:{touches:l}}=e;return 2===l.vecs.size},isManyTouching:e=>{let{context:{touches:l}}=e;return l.vecs.size>2},isZooming:e=>{let{context:{touches:l}}=e;return null!==l.z}},actions:{handleTouchStart:(0,eX.a)(e=>{let{enqueue:l}=e;l.assign({touches:e=>{let{context:{touches:l},event:n}=e;return"TOUCH.START"!==n.type?l:function(e,l){let n=n9.concat(e.vecs,tl(l)),t=n2(n),r=te(t),a=2!==t.length?null:.5>Math.abs(function(e,l){let n=eI(e,l);return n.y/n.x}(t[0],t[1]));return{...e,vecs:n,points:t,cursor:r,horizontal:a}}(l,n.ev)}}),l.raise({type:"STARTED"})}),handleTouchMove:(0,eX.a)(e=>{let{enqueue:l}=e;l.assign({touches:e=>{let{context:{touches:l},event:n}=e;return"TOUCH.MOVE"!==n.type?l:function(e,l,n){var t,r;let a=tl(l),i=n4.mapWithIndex(e.vecs,(e,l)=>(0,e_.zG)(a.get(e),ef.ij,ef.g_(()=>l,eh.zo(l)))),o=n2(i),u=te(o),[s,d]=o;if(null===u||s===na||d===na)return{...e,vecs:i,points:o,cursor:u};let c=function(e,l,n){let t=Math.pow((e.length>0?e[0]:l)-l,2);return 0===e.length||t>0?[l,...e]:e}(e.dists,Math.sqrt((t=s,r=d,Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))),0),y=function(e){let[l,n,t,r]=e;return l===na||n===na||t===na||r===na?null:l<n&&n<t&&t<r?-1:l>n&&n>t&&t>r?1:null}(c);return{vecs:i,points:o,cursor:u,dists:c,z:y,horizontal:e.horizontal}}(l,n.ev,0)}}),l.raise({type:"MOVED"})}),handleTouchEnd:(0,eX.a)(e=>{let{enqueue:l}=e;l.assign({touches:e=>{let{context:{touches:l},event:n}=e;return"TOUCH.END"!==n.type?l:function(e,l){let n=tl(l),t=n8.filterMapWithIndex(e.vecs,(e,l)=>n.has(e)?ef.YP:ef.G(l)),r=n2(t),a=te(r);return{vecs:t,points:r,cursor:a,dists:0===t.size?[]:e.dists,z:0===t.size?null:e.z,horizontal:e.horizontal}}(l,n.ev)}}),l.raise({type:"ENDED"})}),resetTouches:(0,X.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),notifyTouching:(0,eX.a)(e=>{let{enqueue:l,context:n}=e;return l.emit(2===n.touches.vecs.size?{type:"MULTI.START"}:{type:"MULTI.END"})}),notifyZoom:(0,eX.a)(e=>{let{context:l,enqueue:n}=e,t=l.touches.cursor,r=l.touches.z;null!==t&&null!==r&&n.emit({type:"ZOOM",p:t,z:r})})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:"handleTouchStart"},"TOUCH.MOVE":{actions:"handleTouchMove"},"TOUCH.END":{actions:"handleTouchEnd"},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"notifyTouching",exit:"notifyTouching",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"notifyZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),tt=(0,G.c)(tn),tr=!1;function ta(e){tt.send({type:"TOUCH.START",ev:e})}function ti(e){tt.send({type:"TOUCH.MOVE",ev:e})}function to(e){tt.send({type:"TOUCH.END",ev:e})}function tu(){tt.send({type:"CANCEL"})}function ts(e){l5||l3({type:"CLICK",ev:e})}function td(e){l3({type:"CONTEXTMENU",ev:e})}function tc(e){l3({type:"WHEEL",ev:e})}function ty(e){null!==e&&e9.forEach(l=>l(e))}function tm(e){lJ({type:"KEY.DOWN",ev:e})}function tp(e){lJ({type:"KEY.UP",ev:e})}function tg(){let e=(0,o.useRef)(null);return(0,P.jsxs)("div",{ref:e,id:"viewer",className:"container",onTouchStart:ta,onTouchMove:ti,onTouchEnd:to,onClick:ts,onContextMenu:td,onScroll:ty,onWheel:tc,onAnimationEnd:e=>{l3({type:"ANIMATION.END",ev:e}),le.send({type:"STYLE.ANIMATION.END"})},children:[s.renderMap(),(0,P.jsx)("style",{children:th}),(0,P.jsx)(tf,{}),(0,P.jsx)(t_,{}),(0,P.jsx)(tx,{})]})}tt.on("MULTI.START",()=>{tr=!0,lJ({type:"TOUCH.LOCK"})}),tt.on("MULTI.END",()=>{lJ({type:"TOUCH.UNLOCK"}),tr=!1}),tt.on("ZOOM",e=>{let{z:l,p:n}=e;lJ({type:"ZOOM.ZOOM",z:l>0?1:-1,p:n})}),tt.start(),C.add(tu),R.add(tu),z.add(tu),D.add(tu),$.add(tu),T.add(tu);let th=`
.container {
  ${q}
  ${en}

  scrollbar-width: thin;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;function tf(){let e=(0,Y.v9)(le,e=>e.context.layout.content),l=`
.content {
  ${q}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
}
`;return(0,P.jsx)("style",{children:l})}function t_(){let e=(0,Y.v9)(le,e=>e.context.animation),l=null===e?"":function(e){let{matrix:l,origin:n}=e,t=new DOMMatrixReadOnly;return`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${t.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===n?"left top":`${n.x}px ${n.y}px`};
    transform: ${l.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(e);return(0,P.jsx)("style",{children:l})}function tx(){let{style:e}=eg();return null===e?(0,P.jsx)(P.Fragment,{}):(0,P.jsx)("style",{children:e})}function tw(){return null!==document.querySelector(".container")}let tv=(0,U.cY)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:eE,next:eE,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Busy"}}},Busy:{after:{500:{actions:[(0,X.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,G.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:l}=e;return l.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:l,next:n}}=e;return l.width===n.width&&.2>Math.abs(1-n.height/l.height)},actions:()=>console.log("resize: ignoring height-only change"),target:"Idle"},{guard:e=>{var l,n;let{context:t}=e;return l=t.prev,n=t.next,l.x!==n.x||l.y!==n.y||l.width!==n.width||l.height!==n.height},actions:[(0,X.a)({prev:e=>{let{context:l}=e;return l.next},waited:0}),(0,eX.e)(e=>{var l;let{context:n}=e;return{type:"LAYOUT",layout:(l=s.origViewBox,function(e){let l=eQ(e);return{config:e,...l}}(function(e,l,n){let[[t,r],a]=function(e,l){let n=e.width/e.height,t=l.width/l.height,[r,a]=n>t?[(e.width-e.height*t)/2,0]:[0,(e.height-e.width/t)/2];return[[r,a],n>t?l.height/e.height:l.width/e.width]}(n,l);return{fontSize:e,container:n,svgOffset:{x:-t,y:-r},svgScale:{s:a},svg:l}}(s.fontSize,l,n.next))),force:!n.first}}),(0,X.a)({first:!1})],target:"Idle"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,X.a)({waited:e=>{let{context:l}=e;return l.waited+500}})],target:"Busy"}},Aborting:{}}}),tb=(0,G.c)(tv);tb.on("LAYOUT",e=>{let{layout:l,force:n}=e;E.forEach(e=>e(l,n))}),tb.start(),window.addEventListener("resize",()=>{tb.send({type:"RESIZE"})});let tS=`
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
  ${q}
  ${en}
  ${ee}
  ${el}
  ${ei}
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

${Z}
`,tM=function(){var e;let l=(null==(e=s.cartoConfig)?void 0:e.backgroundColor)??"darkgray";return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(tg,{}),(0,P.jsx)(n7,{}),(0,P.jsxs)("style",{children:[tS,`body { background-color: ${l}; }`]})]})};function tE(){let e=(0,Y.v9)(le,e=>e.context.rendered);(0,o.useEffect)(()=>{requestAnimationFrame(A)},[e]);let l=(0,Y.v9)(le,e=>e.context.shown),n=(0,Y.v9)(le,e=>e.context.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${ed};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",t=(0,Y.v9)(le,e=>e.context.layout.scroll),r=`
.content {
  width: ${ni(t.width)}px;
  height: ${ni(t.height)}px;
}
`;return(0,P.jsxs)("style",{children:[l?"":"#viewer, #ui { opacity: 0; }",n,r]})}var tj=n(2270),tk=n(5641),tO=n(360);let tF=`
.island {
  fill: darkgray;
  fill-opacity: 1;
}

.area {
  fill: #bcd35f;
  fill-opacity: 1;
}

.cliff {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
  stroke-width: 10px;
}

.rock {
  fill: gray;
  fill-opacity: 0.5;
}

.grave_yard {
  fill: black;
  fill-opacity: 0.1;
}

.parking {
  fill: white;
  fill-opacity: 0.25;
}

.building {
  fill: lightgray;
}

.roof {
  fill: lightgray;
  fill-opacity: 0.5;
}

.pedestrian-area {
  fill: white;
  stroke: white;
  stroke-width: 0.5px;
}

.water {
  fill: lightblue;
}

.ditch {
  fill: none;
  stroke: lightblue;
  stroke-width: 0.25px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stream {
  fill: none;
  stroke: lightblue;
  stroke-width: 1px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.river {
  fill: none;
  stroke: lightblue;
  stroke-width: 5px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wetland {
  fill: lightblue;
  fill-opacity: 0.5;
}

.grass {
  fill: khaki;
  fill-opacity: 0.25;
}

.farmland {
  fill: khaki;
  fill-opacity: 0.5;
}

.forest,
.garden {
  fill: darkgreen;
  fill-opacity: 0.2;
}

.playground {
  fill: red;
  fill-opacity: 0.05;
}

.road {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.service {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.path {
  fill: none;
  stroke: khaki;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cycleway {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pedestrian,
.footway {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.footway-bridge {
  fill: none;
  stroke: black;
}

.steps {
  fill: none;
  stroke: black;
  stroke-opacity: 0.25;
  stroke-dasharray: 0.5, 0.5;
  stroke-dashoffset: 0.5;
}

.access {
  stroke-opacity: 0.25;
}

.escalator.background {
  fill: none;
  stroke: black;
  stroke-width: 1.5px;
}
.escalator.foreground {
  fill: none;
  stroke: white;
  stroke-width: 1px;
  stroke-dasharray: 0.5, 0.5;
  stroke-dashoffset: 0.5;
}

.tunnel {
}

.bridge {
  fill: none;
  stroke: white;
}
.bridge.shadow {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
}
.bridge.edge {
  fill: none;
  stroke: black;
}

.tunnel.shadow {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
}

.wall {
  fill: none;
  stroke: black;
  stroke-width: 0.5px;
}

.fence {
  fill: none;
  stroke: black;
  stroke-width: 0.25px;
}

.retaining-wall {
  fill: none;
  stroke: black;
  stroke-opacity: 0.2;
  stroke-width: 0.5px;
}

text,
tspan {
  font-size: 2.5px;
  font-weight: initial;
  text-anchor: middle;
}
`;var tL=n(5092),tT=n(1725),t$=n(2638);function tC(e){var l;let n=new Map([...Object.keys(e.properties).filter(e=>"other_tags"!==e&&!e.match(/^centroid|^area$/)).filter(l=>l in e.properties&&e.properties instanceof Object&&null!==e.properties[l]).map(l=>[l,String(e.properties[l])]),...(null==(l=e.properties.other_tags)?void 0:l.split(/","/g).map(e=>e.split(/"=>"/).map(e=>e.replace(/"/,""))))??[]]);return(0,P.jsx)("table",{className:"properties",style:{display:"block",fontSize:"x-small",borderSpacing:0,margin:"1em 0.5em",maxWidth:"calc(50vmin - 2em)",overflowX:"scroll",overscrollBehaviorX:"none",touchAction:"pan-x pan-y"},children:(0,P.jsx)("tbody",{style:{border:0},children:(0,P.jsx)(tD,{tags:n})})})}function tD(e){return(0,P.jsx)(P.Fragment,{children:Array.from(e.tags.entries()).map((e,l)=>{let[n,t]=e;return(0,P.jsx)(o.Fragment,{children:(0,P.jsx)("tr",{style:{margin:0,boxSizing:"border-box"},children:(0,P.jsxs)("td",{style:{border:"0.5px darkgray solid",margin:0,padding:"0.25em",boxSizing:"border-box",scrollbarWidth:"none",width:"calc(50vmin - 2em)"},children:[(0,P.jsxs)("span",{style:{color:"gray"},children:[n," "]}),(0,P.jsx)("span",{style:{},children:t})]})})},l)})})}let tN=[{filter:e=>{var l;return!!(null==e||null==(l=e.other_tags)?void 0:l.match(/"toilets"/))},getInfo:(e,l)=>({title:"toilets",x:{tag:"facility",title:"toilets",address:l,properties:e}})},{filter:e=>{var l;return!!(null==e||null==(l=e.other_tags)?void 0:l.match(/"bus_stop"/))},getInfo:(e,l)=>({title:"bus_stop",x:{tag:"facility",title:"bus_stop",address:l,properties:e}})},{filter:e=>{var l,n;return"highway"in e&&!!(null==(l=e.highway)?void 0:l.match(/elevator/))&&!(null==(n=e.other_tags)?void 0:n.match(/"level"=>"[1-9][^"]*"/))},getInfo:(e,l)=>({title:"elevator",x:{tag:"facility",title:"elevator",address:l,properties:e}})},{filter:e=>{var l,n;return"highway"in e&&!!(null==(l=e.highway)?void 0:l.match(/steps/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))},getInfo:(e,l)=>({title:"elevator",x:{tag:"facility",title:"escalator",address:l,properties:e}})},{filter:e=>{var l;return!!(null==e||null==(l=e.other_tags)?void 0:l.match(/"amenity"=>"drinking_water"/))},getInfo:(e,l)=>({title:"water",x:{tag:"facility",title:"water",address:l,properties:e}})},{filter:e=>{var l,n;return!!(null==(l=e.other_tags)?void 0:l.match(/"tourism"=>"information"/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"information"=>"office"/))},getInfo:(e,l)=>({title:"information",x:{tag:"facility",title:"information",address:l,properties:e}})},{filter:e=>{var l;return!!(null==(l=e.name)?void 0:l.match(/./))},getInfo:(e,l)=>({title:"shop",x:{tag:"shop",address:l,properties:e}})}],tz={getMapLayers:()=>{var e;return[{type:"multipolygon",name:"island",filter:e=>{var l;return!!(null==(l=e.natural)?void 0:l.match(/^coastline$/))}},{type:"multipolygon",name:"area",data:((null==(e=tO.Ow.cartoConfig)?void 0:e.internals)??tO.Ow.mapData.internals).features.map(e=>e.geometry.coordinates)},{type:"line",name:"cliff",filter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"natural"=>"(cliff)"/))}},{type:"multipolygon",name:"rock",filter:e=>{var l;return!!(null==(l=e.natural)?void 0:l.match(/rock|bare_rock/))}},{type:"multipolygon",name:"grass",filter:e=>{var l;return!!(null==(l=e.landuse)?void 0:l.match(/grass/))}},{type:"multipolygon",name:"forest",filter:e=>{var l,n;return!!(null==(l=e.landuse)?void 0:l.match(/forest/))||!!(null==(n=e.natural)?void 0:n.match(/wood/))}},{type:"multipolygon",name:"garden",filter:e=>{var l;return!!(null==(l=e.leisure)?void 0:l.match(/garden/))}},{type:"multipolygon",name:"farmland",filter:e=>{var l;return!!(null==(l=e.landuse)?void 0:l.match(/farmland/))}},{type:"multipolygon",name:"water",filter:e=>{var l;return!!(null==(l=e.natural)?void 0:l.match(/^water$/))}},{type:"line",name:"ditch",filter:e=>{var l;return!!(null==(l=e.waterway)?void 0:l.match(/^(ditch)$/))}},{type:"line",name:"stream",filter:e=>{var l;return!!(null==(l=e.waterway)?void 0:l.match(/^(stream)$/))}},{type:"line",name:"river",filter:e=>{var l;return!!(null==(l=e.waterway)?void 0:l.match(/^(river)$/))}},{type:"multipolygon",name:"wetland",filter:e=>{var l;return!!(null==(l=e.natural)?void 0:l.match(/wetland/))}},{type:"multipolygon",name:"playground",filter:e=>{var l,n,t;return!!(null==(l=e.tourism)?void 0:l.match(/zoo/))||!!(null==(n=e.leisure)?void 0:n.match(/ice_rink|pitch|playground/))||!!(null==(t=e.landuse)?void 0:t.match(/recreation_ground/))}},{type:"multipolygon",name:"grave_yard",filter:e=>{var l;return!!(null==(l=e.amenity)?void 0:l.match(/grave_yard/))}},{type:"multipolygon",name:"parking",filter:e=>{var l;return!!(null==(l=e.amenity)?void 0:l.match(/(parking|bicycle_parking)/))}},{type:"multipolygon",name:"building",filter:e=>{var l,n;return!!(null==(l=e.building)?void 0:l.match(/./))&&!(null==(n=e.building)?void 0:n.match(/roof/))}},{type:"line",name:"path",width:1,filter:e=>{var l;return!!(null==(l=e.highway)?void 0:l.match(/^(path|track)$/))}},{type:"line",name:"footway",width:1,filter:e=>{var l;return!!(null==(l=e.highway)?void 0:l.match(/^(footway|steps)$/))}},{type:"line",name:"steps",width:1,filter:e=>{var l;return!!(null==(l=e.highway)?void 0:l.match(/^(steps)$/))}},{type:"line",name:"cycleway",width:3,filter:e=>{var l;return!!(null==(l=e.highway)?void 0:l.match(/^(cycleway)$/))}},{type:"line",name:"service",width:4,filter:e=>{var l;return!!(null==(l=e.highway)?void 0:l.match(/^(service)$/))}},{type:"line",name:"pedestrian",width:8,filter:e=>{var l;return!!(null==(l=e.highway)?void 0:l.match(/^(pedestrian)$/))}},{type:"line",name:"road",width:6,filter:e=>{var l,n;return!!(null==(l=e.highway)?void 0:l.match(/./))&&!(null==(n=e.highway)?void 0:n.match(/^(footway|path|pedestrian|steps|cycleway|track|service)$/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/("highway"=>"service"|"area:highway"=>"service")/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var l;return!!(null==(l=e.man_made)?void 0:l.match(/bridge/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"pedestrian"/))}},{type:"line",name:"escalator background",filter:e=>{var l,n;return!!(null==(l=e.highway)?void 0:l.match(/^(steps)$/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))}},{type:"line",name:"escalator foreground",filter:e=>{var l,n;return!!(null==(l=e.highway)?void 0:l.match(/^(steps)$/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))}},{type:"line",name:"wall",filter:e=>{var l;return!!(null==(l=e.barrier)?void 0:l.match(/^(wall)$/))}},{type:"line",name:"fence",filter:e=>{var l;return!!(null==(l=e.barrier)?void 0:l.match(/^(fence)$/))}},{type:"line",name:"retaining-wall",filter:e=>{var l;return!!(null==(l=e.barrier)?void 0:l.match(/^(retaining_wall)$/))}},{type:"line",name:"bridge shadow",widthScale:1.8,filter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"bridge"/))}},{type:"line",name:"bridge edge",widthScale:1.4,filter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"bridge"/))}},{type:"line",name:"bridge road",filter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"bridge"/))}},{type:"line",name:"tunnel shadow",widthScale:1.8,filter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"tunnel"/))}},{type:"multipolygon",name:"roof",filter:e=>{var l,n;return!!(null==(l=e.building)?void 0:l.match(/./))&&!!(null==(n=e.building)?void 0:n.match(/roof/))}}]},getMapObjects:()=>[{name:"benches",path:tL.MX,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"bench"/))}},{name:"entrances",path:tL.TP,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"entrance"/))}},{name:"guide-posts",path:tL.Y0,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"guidepost"/))}},{name:"info-boards",path:tL.NQ,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"information"=>"(board|map)"/))}},{name:"trees1",path:tL.Tw,width:.15,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"tree"/))}},{name:"torii",path:tL.Yn,width:.05,pointsFilter:e=>{var l,n,t;return!!(null==(l=e.man_made)?void 0:l.match(/^torii$/))||!!(null==(n=e.other_tags)?void 0:n.match(/"amenity"=>"place_of_worship"/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"religion"=>"shinto"/))}},{name:"monument",path:tL.KX,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"historic"=>"(monument|memorial|tomb)"/))}},{name:"statue",path:tL.$Y,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"artwork_type"=>"statue"/))}},{name:"vending-machine",path:tL.ps,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"amenity"=>"vending_machine"/))}},{name:"waste-basket",path:tL.R4,width:.05,pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"amenity"=>"waste_basket"/))}}],getMapSymbols:()=>[{name:"toilets",href:"#XToilets",pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"toilets"/))},polygonsFilter:e=>{var l;return"toilets"===e.building||"toilets"===e.amenity||!!(null==(l=e.other_tags)?void 0:l.match(/"toilets"/))}},{name:"parkings",href:"#XParking",pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"parking"/))},polygonsFilter:e=>{var l;return"parking"===e.amenity||!!(null==(l=e.other_tags)?void 0:l.match(/"parking"/))}},{name:"drinking-fountains",href:"#XDrinkingFountain",pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"amenity"=>"drinking_water"/))}},{name:"elevators",href:"#XElevator",pointsFilter:e=>{var l;return!!(null==(l=e.highway)?void 0:l.match(/elevator/))}},{name:"escalators",href:"#XEscalator",linesFilter:e=>{var l,n;return!!(null==(l=e.highway)?void 0:l.match(/steps/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))}},{name:"buses",href:"#XBus",pointsFilter:e=>{var l;return!!(null==(l=e.other_tags)?void 0:l.match(/"bus"=>"yes"/))}},{name:"informations",href:"#XInformation",pointsFilter:e=>{var l,n;return!!(null==(l=e.other_tags)?void 0:l.match(/"tourism"=>"information"/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"information"=>"office"/))},polygonsFilter:e=>{var l,n;return!!(null==(l=e.other_tags)?void 0:l.match(/"tourist"=>"information"/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"information"=>"office"/))}}],getMapMarkers:()=>[{name:"all"}],getMapNames:tj.Qs,searchEntries:tN,renderInfo:function(e){let l=tO.Ow.mapMap,n=Number(e.info.x.address),t="address"in e.info.x?(0,t$.Ty)(n,l):null;return null===t?(0,P.jsxs)("p",{children:["XXX info not found (osm_id=",e.info.x.address,") XXX"]}):"shop"===e.info.x.tag?function(e){let l=(0,t$.SX)(e.properties,"website"),n=Number(e.properties.osm_id??""),t=Number(("osm_way_id"in e.properties&&e.properties.osm_way_id)??""),r=0!==n?n:0!==t?t:0;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("p",{children:[e.properties.name??e.x.name," ",0!==r&&(0,P.jsx)(tO.mN,{_id:r})]}),(0,P.jsxs)("p",{children:[null!==l&&(0,P.jsx)("a",{target:"_blank",href:l,children:"\uD83C\uDF10"}),0!==n&&(0,P.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/node/${n}`,children:"\uD83D\uDDFA️"}),0!==t&&(0,P.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/way/${t}`,children:"\uD83D\uDDFA️"})]}),(0,P.jsx)(tC,{properties:e.properties})]})}({x:e.info.x,properties:t}):function(e){let l=void 0!==e.x.title&&tT.lm.get(e.x.title);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1em"},children:(0,P.jsx)("svg",{style:{display:"block"},viewBox:"-36 -36 72 72",width:"3em",height:"3em",children:l&&(0,P.jsx)("use",{href:l})})}),(0,P.jsx)("p",{children:e.x.properties.name}),(0,P.jsx)(tC,{properties:e.properties})]})}({x:e.info.x,properties:t})},mapSvgStyle:tF,renderMap:tk.d,isMapRendered:tk.W};var tR=JSON.parse('{"features":[{"geometry":{"coordinates":[[[[135.7870893,34.6747685],[135.785831,34.6747634],[135.7855481,34.6747622],[135.7852714,34.674754],[135.7851302,34.6747376],[135.7849907,34.6747276],[135.7846559,34.6747225],[135.7841874,34.6747083],[135.7842123,34.675462],[135.7835268,34.6754659],[135.7835476,34.6760088],[135.7835568,34.6769809],[135.7857434,34.6769979],[135.7859741,34.6770051],[135.7862673,34.6770181],[135.7865482,34.6769957],[135.7872456,34.6769142],[135.7871182,34.6751736],[135.7870893,34.6747685]]]],"type":"MultiPolygon"},"properties":{"id":0,"layer":"XXX","path":"Polygon&uid={56b01477-66a5-48f4-a139-8f4878902527}"},"type":"Feature"}],"type":"FeatureCollection"}'),tA=JSON.parse('{"features":[{"geometry":{"coordinates":[[[[135.7870893,34.6747685],[135.785831,34.6747634],[135.7855481,34.6747622],[135.7852714,34.674754],[135.7851302,34.6747376],[135.7849907,34.6747276],[135.7846559,34.6747225],[135.7841874,34.6747083],[135.7842123,34.675462],[135.7835268,34.6754659],[135.7835476,34.6760088],[135.7835568,34.6769809],[135.7857434,34.6769979],[135.7859741,34.6770051],[135.7862673,34.6770181],[135.7865482,34.6769957],[135.7872456,34.6769142],[135.7871182,34.6751736],[135.7870893,34.6747685]]]],"type":"MultiPolygon"},"properties":{"id":0,"layer":"XXX","path":"Polygon&uid={56b01477-66a5-48f4-a139-8f4878902527}"},"type":"Feature"}],"type":"FeatureCollection"}'),tI=JSON.parse('{"type":"FeatureCollection","name":"map-lines","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"457907040","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7849574,"centroid_y":34.67636285},"geometry":{"type":"LineString","coordinates":[[135.7849617,34.6762985],[135.7849531,34.6764272]]}},{"type":"Feature","properties":{"osm_id":"457907048","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7865234,"centroid_y":34.6765997},"geometry":{"type":"LineString","coordinates":[[135.7865172,34.6765717],[135.7865296,34.6766277]]}},{"type":"Feature","properties":{"osm_id":"457907049","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":20,"other_tags":"\\"bridge\\"=>\\"yes\\",\\"layer\\"=>\\"1\\"","area":null,"centroid_x":135.7865119,"centroid_y":34.67654765},"geometry":{"type":"LineString","coordinates":[[135.7865066,34.6765236],[135.7865172,34.6765717]]}},{"type":"Feature","properties":{"osm_id":"457907050","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7864579,"centroid_y":34.67633745000001},"geometry":{"type":"LineString","coordinates":[[135.7864092,34.6761513],[135.7865066,34.6765236]]}},{"type":"Feature","properties":{"osm_id":"457907051","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78518556334535,"centroid_y":34.675194501108493},"geometry":{"type":"LineString","coordinates":[[135.7848472,34.6750415],[135.78520850000001,34.67504],[135.785278299999987,34.6751292],[135.7852806,34.6754099],[135.7852811,34.6754678],[135.7854006,34.6754698]]}},{"type":"Feature","properties":{"osm_id":"457907052","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"surface\\"=>\\"unpaved\\"","area":null,"centroid_x":135.78484103189152,"centroid_y":34.675138820448758},"geometry":{"type":"LineString","coordinates":[[135.7848505,34.6748146],[135.7848472,34.6750415],[135.78484370000001,34.6753208],[135.784808,34.6753205],[135.784807300000011,34.6753769],[135.7848409,34.6753772],[135.7848404,34.6754148]]}},{"type":"Feature","properties":{"osm_id":"457907053","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78426760220316,"centroid_y":34.675724620349193},"geometry":{"type":"LineString","coordinates":[[135.7845,34.6757264],[135.784239500000012,34.6757235],[135.7840352,34.6757249]]}},{"type":"Feature","properties":{"osm_id":"457907054","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78446712652664,"centroid_y":34.67579474230827},"geometry":{"type":"LineString","coordinates":[[135.7842386,34.6754901],[135.7845074,34.675482],[135.7845,34.6757264],[135.7844905,34.6763084]]}},{"type":"Feature","properties":{"osm_id":"457907056","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78389162807736,"centroid_y":34.675677080268734},"geometry":{"type":"LineString","coordinates":[[135.7842382,34.6755093],[135.7841027,34.6755124],[135.78393220000001,34.6755138],[135.783755899999989,34.6755153],[135.78375650000001,34.6755274],[135.7837288,34.675527],[135.7837352,34.6758798],[135.784108300000014,34.6758812]]}},{"type":"Feature","properties":{"osm_id":"457907058","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7858017869664,"centroid_y":34.675511625855897},"geometry":{"type":"LineString","coordinates":[[135.7854088,34.6758615],[135.7853986,34.6758295],[135.785399,34.6757507],[135.7854001,34.675554],[135.7854006,34.6754698],[135.7856425,34.6754636],[135.785975400000012,34.6754552],[135.786021799999986,34.675454],[135.786492399999986,34.675442]]}},{"type":"Feature","properties":{"osm_id":"457907059","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78553802567595,"centroid_y":34.675960468636895},"geometry":{"type":"LineString","coordinates":[[135.7858879,34.6758669],[135.7854088,34.6758615],[135.7854146,34.6762799]]}},{"type":"Feature","properties":{"osm_id":"457907060","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78592989483653,"centroid_y":34.675971115081254},"geometry":{"type":"LineString","coordinates":[[135.785923,34.6761886],[135.7858879,34.6758669],[135.786062500000014,34.6758654]]}},{"type":"Feature","properties":{"osm_id":"457907066","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78514659373252,"centroid_y":34.675870976041999},"geometry":{"type":"LineString","coordinates":[[135.7847128,34.674769],[135.7842504,34.6747577],[135.7842386,34.6754901],[135.7842382,34.6755093],[135.784239500000012,34.6757235],[135.784240399999987,34.6758944],[135.784242,34.6760448],[135.7842437,34.6762083],[135.784244699999988,34.6763055],[135.7843878,34.6763072],[135.7844905,34.6763084],[135.7849617,34.6762985],[135.7850566,34.6763],[135.7853084,34.6763038],[135.7854146,34.6762799],[135.7857521,34.6762147],[135.785863799999987,34.6761931],[135.785923,34.6761886],[135.7864092,34.6761513],[135.7867531,34.676125],[135.7870634,34.6761048],[135.7871983,34.6761068]]}},{"type":"Feature","properties":{"osm_id":"854909341","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78600980954505,"centroid_y":34.675357933123109},"geometry":{"type":"LineString","coordinates":[[135.785975400000012,34.6754552],[135.7859866,34.6753707],[135.786007500000011,34.675331],[135.7860815,34.6752847]]}},{"type":"Feature","properties":{"osm_id":"854909342","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78602515,"centroid_y":34.6755393},"geometry":{"type":"LineString","coordinates":[[135.786028499999986,34.6756246],[135.786021799999986,34.675454]]}},{"type":"Feature","properties":{"osm_id":"854909343","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78567126188182,"centroid_y":34.675228941421082},"geometry":{"type":"LineString","coordinates":[[135.7856425,34.6754636],[135.785645,34.6751079],[135.785813600000012,34.6751103]]}},{"type":"Feature","properties":{"osm_id":"854909344","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7842073,"centroid_y":34.6758944},"geometry":{"type":"LineString","coordinates":[[135.7841742,34.6758944],[135.784240399999987,34.6758944]]}},{"type":"Feature","properties":{"osm_id":"854909345","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78421175,"centroid_y":34.6760448},"geometry":{"type":"LineString","coordinates":[[135.784242,34.6760448],[135.784181499999988,34.6760448]]}},{"type":"Feature","properties":{"osm_id":"854909346","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78408216343138,"centroid_y":34.676167431144549},"geometry":{"type":"LineString","coordinates":[[135.7842437,34.6762083],[135.784090600000013,34.6762093],[135.7840809,34.6761465],[135.783971799999989,34.6761315],[135.7839706,34.6760937],[135.7839476,34.6760887]]}},{"type":"Feature","properties":{"osm_id":"854909355","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78510255412741,"centroid_y":34.676095898300872},"geometry":{"type":"LineString","coordinates":[[135.7850566,34.6763],[135.7850736,34.6760797],[135.7851427,34.6760777],[135.7851498,34.6758973]]}},{"type":"Feature","properties":{"osm_id":"854909356","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78511447938007,"centroid_y":34.67617395346403},"geometry":{"type":"LineString","coordinates":[[135.7851427,34.6760777],[135.7851463,34.6761076],[135.7851451,34.6761694],[135.78508690000001,34.6761694],[135.7850857,34.6762731]]}},{"type":"Feature","properties":{"osm_id":"854909357","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78520134273921,"centroid_y":34.676202192358573},"geometry":{"type":"LineString","coordinates":[[135.7851451,34.6761694],[135.785216600000012,34.6761694],[135.785216100000014,34.6761854],[135.785213,34.6762781]]}},{"type":"Feature","properties":{"osm_id":"854909358","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78534021541435,"centroid_y":34.676097181689038},"geometry":{"type":"LineString","coordinates":[[135.785216100000014,34.6761854],[135.785366900000014,34.6761834],[135.785373,34.6759524],[135.785329100000013,34.6759511]]}},{"type":"Feature","properties":{"osm_id":"854909359","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78578738790782,"centroid_y":34.676393296732464},"geometry":{"type":"LineString","coordinates":[[135.7857521,34.6762147],[135.7857669,34.6762711],[135.7858166,34.6765432],[135.7857836,34.6765426]]}},{"type":"Feature","properties":{"osm_id":"854909362","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7867454,"centroid_y":34.6760388},"geometry":{"type":"LineString","coordinates":[[135.7867531,34.676125],[135.7867377,34.6759526]]}},{"type":"Feature","properties":{"osm_id":"1121979578","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.783933,"centroid_y":34.675569},"geometry":{"type":"LineString","coordinates":[[135.78393220000001,34.6755138],[135.7839338,34.6756242]]}},{"type":"Feature","properties":{"osm_id":"1121979579","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78438574052191,"centroid_y":34.676390296254503},"geometry":{"type":"LineString","coordinates":[[135.7843878,34.6763072],[135.7843828,34.6763888],[135.7843762,34.6764424],[135.7844146,34.6764465]]}},{"type":"Feature","properties":{"osm_id":"1122298112","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78467461732194,"centroid_y":34.676342250388828},"geometry":{"type":"LineString","coordinates":[[135.7844237,34.6763338],[135.7848727,34.6763429],[135.7848802,34.6764012]]}},{"type":"Feature","properties":{"osm_id":"1122298113","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78428225511868,"centroid_y":34.676375664172276},"geometry":{"type":"LineString","coordinates":[[135.784269,34.6764658],[135.784265299999987,34.6763353],[135.7843473,34.6763368]]}},{"type":"Feature","properties":{"osm_id":"1122298114","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78525574032585,"centroid_y":34.676354171208907},"geometry":{"type":"LineString","coordinates":[[135.785092600000013,34.6763767],[135.7852174,34.6763675],[135.785215599999987,34.6763537],[135.785422399999987,34.6763322]]}},{"type":"Feature","properties":{"osm_id":"1122298115","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78560656889289,"centroid_y":34.67633981197956},"geometry":{"type":"LineString","coordinates":[[135.78540670000001,34.6763105],[135.7854231,34.6763105],[135.785422399999987,34.6763322],[135.7854223,34.6763442],[135.7854992,34.6763355],[135.7854992,34.6763233],[135.7857112,34.6763011],[135.7857096,34.676328],[135.7857301,34.6763287],[135.7857333,34.6764654]]}},{"type":"Feature","properties":{"osm_id":"1122298116","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78556168156655,"centroid_y":34.675323582311279},"geometry":{"type":"LineString","coordinates":[[135.7855001,34.6753573],[135.785595,34.6752994],[135.7856237,34.6753156]]}},{"type":"Feature","properties":{"osm_id":"1122298117","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78555243219884,"centroid_y":34.67527821755715},"geometry":{"type":"LineString","coordinates":[[135.785616299999987,34.6752274],[135.7856171,34.6752725],[135.7855025,34.6752786],[135.7855021,34.6753114],[135.7854704,34.67531]]}},{"type":"Feature","properties":{"osm_id":"1122298118","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78583650135965,"centroid_y":34.675200427787018},"geometry":{"type":"LineString","coordinates":[[135.7859159,34.6750349],[135.785879,34.6750342],[135.785878200000013,34.675049],[135.785830800000014,34.6750504],[135.785827500000011,34.675111],[135.7858267,34.6751763],[135.7858168,34.6752039],[135.7858291,34.6753358],[135.7858348,34.6754321]]}},{"type":"Feature","properties":{"osm_id":"1122298119","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78594737256884,"centroid_y":34.674861453424462},"geometry":{"type":"LineString","coordinates":[[135.7859535,34.6747899],[135.7859535,34.6748632],[135.785940399999987,34.6748646],[135.7859413,34.6749326]]}},{"type":"Feature","properties":{"osm_id":"1122298120","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78568589709258,"centroid_y":34.674786882194347},"geometry":{"type":"LineString","coordinates":[[135.785303699999986,34.6747828],[135.7859535,34.6747899],[135.7860681,34.6747899]]}},{"type":"Feature","properties":{"osm_id":"1122298121","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78587886562619,"centroid_y":34.67523280802574},"geometry":{"type":"LineString","coordinates":[[135.785867599999989,34.6751924],[135.785881499999988,34.675214],[135.7858798,34.6752761]]}},{"type":"Feature","properties":{"osm_id":"1122536029","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78387011720883,"centroid_y":34.675743896799723},"geometry":{"type":"LineString","coordinates":[[135.784094399999987,34.6757391],[135.78409640000001,34.6758508],[135.7837546,34.6758558],[135.7837485,34.6755436],[135.7838954,34.6755453]]}},{"type":"Feature","properties":{"osm_id":"1122536030","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78406578781153,"centroid_y":34.675586803425105},"geometry":{"type":"LineString","coordinates":[[135.7839576,34.6755419],[135.7840995,34.6755403],[135.784094399999987,34.6757098]]}},{"type":"Feature","properties":{"osm_id":"1122536031","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"retaining_wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78399991477113,"centroid_y":34.675670426790774},"geometry":{"type":"LineString","coordinates":[[135.7839597,34.6756586],[135.7840138,34.6756586],[135.7840148,34.6757081]]}},{"type":"Feature","properties":{"osm_id":"1122536032","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"retaining_wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78389744744598,"centroid_y":34.675753245109284},"geometry":{"type":"LineString","coordinates":[[135.7840138,34.6757433],[135.7840117,34.6757962],[135.7838362,34.675797],[135.7838332,34.6756569],[135.7838832,34.6756577]]}},{"type":"Feature","properties":{"osm_id":"1122536033","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78393295000001,"centroid_y":34.6756688},"geometry":{"type":"LineString","coordinates":[[135.783932099999987,34.6756571],[135.7839338,34.6756805]]}},{"type":"Feature","properties":{"osm_id":"1122536034","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78393295000001,"centroid_y":34.67564065000001},"geometry":{"type":"LineString","coordinates":[[135.7839338,34.6756242],[135.783932099999987,34.6756571]]}},{"type":"Feature","properties":{"osm_id":"1122536035","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78393769461277,"centroid_y":34.675723357276603},"geometry":{"type":"LineString","coordinates":[[135.7840076,34.6757251],[135.7839849,34.6757253],[135.78398390000001,34.6756805],[135.7839338,34.6756805],[135.7838821,34.6756805],[135.7838837,34.6757656],[135.783987200000013,34.6757656],[135.7839849,34.6757253]]}},{"type":"Feature","properties":{"osm_id":"1122536036","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7840214,"centroid_y":34.675725},"geometry":{"type":"LineString","coordinates":[[135.7840352,34.6757249],[135.7840076,34.6757251]]}},{"type":"Feature","properties":{"osm_id":"1122536041","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78508764999998,"centroid_y":34.6747757},"geometry":{"type":"LineString","coordinates":[[135.7849708,34.6747697],[135.7852045,34.6747817]]}},{"type":"Feature","properties":{"osm_id":"1122536042","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78442106134111,"centroid_y":34.674743043621589},"geometry":{"type":"LineString","coordinates":[[135.784722,34.6747533],[135.7842776,34.6747381],[135.7842446,34.6747369],[135.7842073,34.6747354],[135.7841201,34.6747337]]}},{"type":"Feature","properties":{"osm_id":"1122573166","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78420619011266,"centroid_y":34.674743153539012},"geometry":{"type":"LineString","coordinates":[[135.7842415,34.6746873],[135.7842436,34.6747156],[135.7842446,34.6747369],[135.7842504,34.6747577],[135.7841201,34.6747509]]}},{"type":"Feature","properties":{"osm_id":"1122573169","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7854402,"centroid_y":34.67555355},"geometry":{"type":"LineString","coordinates":[[135.7854001,34.675554],[135.785480299999989,34.6755531]]}},{"type":"Feature","properties":{"osm_id":"1122573170","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78543175,"centroid_y":34.6757507},"geometry":{"type":"LineString","coordinates":[[135.785399,34.6757507],[135.785464499999989,34.6757507]]}},{"type":"Feature","properties":{"osm_id":"1270411873","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.78615848708731,"centroid_y":34.67587991245729},"geometry":{"type":"LineString","coordinates":[[135.78615,34.6759047],[135.7861504,34.6758715],[135.7861833,34.6758718]]}},{"type":"Feature","properties":{"osm_id":"1270411874","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"incline\\"=>\\"up\\",\\"wheelchair\\"=>\\"yes\\"","area":null,"centroid_x":135.78610057033399,"centroid_y":34.675941404417479},"geometry":{"type":"LineString","coordinates":[[135.786062500000014,34.6758654],[135.7860619,34.6759912],[135.786088400000011,34.6759913],[135.78608890000001,34.6758784],[135.7861111,34.6758785],[135.7861106,34.675996],[135.786149599999987,34.6759961],[135.78615,34.6759047]]}},{"type":"Feature","properties":{"osm_id":"1270411875","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"surface\\"=>\\"unpaved\\"","area":null,"centroid_x":135.78516825891279,"centroid_y":34.675420284334251},"geometry":{"type":"LineString","coordinates":[[135.785107399999987,34.6754832],[135.7851083,34.6754085],[135.7852806,34.6754099]]}},{"type":"Feature","properties":{"osm_id":"1270411876","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"surface\\"=>\\"unpaved\\"","area":null,"centroid_x":135.78515977197796,"centroid_y":34.675710499327224},"geometry":{"type":"LineString","coordinates":[[135.7851512,34.675785],[135.7851705,34.6757852],[135.785172,34.6756638],[135.7851052,34.6756632]]}},{"type":"Feature","properties":{"osm_id":"1270411877","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"surface\\"=>\\"unpaved\\"","area":null,"centroid_x":135.78508816091644,"centroid_y":34.675688971495141},"geometry":{"type":"LineString","coordinates":[[135.7850561,34.6754828],[135.785107399999987,34.6754832],[135.7851052,34.6756632],[135.785024099999987,34.6756625],[135.7850226,34.6757839],[135.7851512,34.675785],[135.7851498,34.6758973]]}},{"type":"Feature","properties":{"osm_id":"1270411878","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"covered\\"=>\\"yes\\"","area":null,"centroid_x":135.7848518,"centroid_y":34.6747728},"geometry":{"type":"LineString","coordinates":[[135.7848531,34.674731],[135.7848505,34.6748146]]}},{"type":"Feature","properties":{"osm_id":"1270411879","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.7848538,"centroid_y":34.67471575},"geometry":{"type":"LineString","coordinates":[[135.7848545,34.6747005],[135.7848531,34.674731]]}},{"type":"Feature","properties":{"osm_id":"1270411880","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"surface\\"=>\\"unpaved\\"","area":null,"centroid_x":135.78486846063535,"centroid_y":34.6753496733958},"geometry":{"type":"LineString","coordinates":[[135.7848409,34.6753772],[135.7848784,34.6753775],[135.784879100000012,34.6753211],[135.78484370000001,34.6753208]]}},{"type":"Feature","properties":{"osm_id":"1270411881","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"covered\\"=>\\"yes\\"","area":null,"centroid_x":135.78492036420877,"centroid_y":34.675478030903726},"geometry":{"type":"LineString","coordinates":[[135.785035,34.6754826],[135.7848396,34.6754809],[135.7848401,34.6754398]]}},{"type":"Feature","properties":{"osm_id":"1270411882","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"incline\\"=>\\"up\\",\\"step_count\\"=>\\"6\\",\\"surface\\"=>\\"paving_stones\\"","area":null,"centroid_x":135.78504555000001,"centroid_y":34.6754827},"geometry":{"type":"LineString","coordinates":[[135.7850561,34.6754828],[135.785035,34.6754826]]}},{"type":"Feature","properties":{"osm_id":"1270411883","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"incline\\"=>\\"up\\",\\"step_count\\"=>\\"6\\",\\"surface\\"=>\\"paving_stones\\"","area":null,"centroid_x":135.78484025,"centroid_y":34.6754273},"geometry":{"type":"LineString","coordinates":[[135.7848404,34.6754148],[135.7848401,34.6754398]]}}]}'),tP=JSON.parse('{"type":"FeatureCollection","name":"map-multilinestrings","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[]}'),tH=JSON.parse('{"type":"FeatureCollection","name":"map-multipolygons","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"6768597","osm_way_id":null,"name":null,"type":"multipolygon","aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"forest","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":27023.969151988626,"centroid_x":135.78645696970045,"centroid_y":34.676116146635408},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.786032400000011,34.6754049],[135.78598980000001,34.6755082],[135.7856014,34.675505],[135.7855942,34.675882],[135.7854534,34.6758793],[135.785444,34.6761986],[135.785984500000012,34.6761496],[135.7859794,34.676993],[135.7862673,34.6770071],[135.7865535,34.6769824],[135.787234899999987,34.6769054],[135.787171300000011,34.6760404],[135.7869997,34.6760354],[135.786976900000013,34.6756869],[135.78712440000001,34.6754663],[135.7871102,34.6752078],[135.7861763,34.6752029],[135.786032400000011,34.6754049]],[[135.7868803,34.6768036],[135.786868,34.6767332],[135.7868005,34.676634],[135.7866912,34.6765805],[135.786565200000013,34.676554],[135.7865172,34.6765717],[135.786480899999987,34.6765851],[135.786430200000012,34.6766257],[135.7863575,34.6767262],[135.78630290000001,34.6768015],[135.7862295,34.6768353],[135.7862084,34.6768044],[135.7862259,34.6767316],[135.7863653,34.6765838],[135.786457899999988,34.6765309],[135.7865066,34.6765236],[135.7865826,34.6765121],[135.7866912,34.6765221],[135.7868397,34.6765799],[135.78691520000001,34.6766169],[135.7870223,34.6768309],[135.7870213,34.6768955],[135.7869876,34.676911],[135.7869288,34.6769104],[135.7868937,34.6768808],[135.7868803,34.6768036]],[[135.786773,34.6764424],[135.7867502,34.6763894],[135.7867583,34.6763133],[135.7867891,34.6762769],[135.7868267,34.6762472],[135.7868535,34.676213],[135.786848099999986,34.6761722],[135.786876299999989,34.6761347],[135.7869407,34.6761314],[135.7869474,34.6761622],[135.786982200000011,34.6762141],[135.7870292,34.6762328],[135.7870801,34.6762593],[135.7870962,34.6762891],[135.787070699999987,34.676331],[135.787098899999989,34.6763784],[135.7870761,34.6764358],[135.7870211,34.6764446],[135.786962100000011,34.6764358],[135.786854799999986,34.6764523],[135.786773,34.6764424]],[[135.786071600000014,34.6760398],[135.786058200000014,34.6760029],[135.786016600000011,34.675951],[135.7859549,34.6759102],[135.7858383,34.6758793],[135.7857042,34.6758529],[135.7856277,34.6757933],[135.7856089,34.6757117],[135.7856224,34.675661],[135.7857189,34.6756466],[135.7857699,34.6756566],[135.78579,34.675704],[135.7858745,34.6757426],[135.7859322,34.6757492],[135.7859925,34.6757139],[135.7860287,34.6756764],[135.7860877,34.6756731],[135.7861749,34.6756676],[135.7863982,34.6756703],[135.7863989,34.6760746],[135.7861809,34.6760735],[135.786128,34.6760586],[135.786071600000014,34.6760398]],[[135.786793100000011,34.6759814],[135.7867301,34.6759615],[135.786707299999989,34.6759317],[135.7867046,34.6759031],[135.7867019,34.6758645],[135.7867221,34.6758336],[135.786765,34.6758281],[135.7868092,34.6758137],[135.7868307,34.6757861],[135.7868521,34.6757564],[135.7869045,34.6757586],[135.7869433,34.6757773],[135.786942,34.6758545],[135.786938,34.6758975],[135.7869514,34.6759637],[135.7869447,34.6759924],[135.7868267,34.6760078],[135.786793100000011,34.6759814]],[[135.786673799999988,34.6755851],[135.7866175,34.6755653],[135.78655040000001,34.6755697],[135.7865169,34.6755851],[135.7864659,34.6755642],[135.7864123,34.675562],[135.7863466,34.6755278],[135.7863197,34.6755013],[135.7862178,34.6755234],[135.78617220000001,34.6755333],[135.786133299999989,34.6755046],[135.7861615,34.6754252],[135.7862419,34.6754164],[135.786322399999989,34.675423],[135.786342499999989,34.6753965],[135.7864123,34.6754076],[135.786449800000014,34.6753921],[135.7864941,34.6754274],[135.7865531,34.6754671],[135.786640299999988,34.675466],[135.786720699999989,34.6754616],[135.786777,34.675466],[135.786814600000014,34.6755101],[135.7868039,34.6755476],[135.7867542,34.6755885],[135.786673799999988,34.6755851]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"218644927","name":"唐招提寺","type":null,"aeroway":null,"amenity":"place_of_worship","admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":"heritage","land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"heritage\\"=>\\"1\\",\\"heritage:operator\\"=>\\"whc\\",\\"name:en\\"=>\\"Toshodaiji temple\\",\\"name:zh\\"=>\\"唐招提寺\\",\\"ref:whc\\"=>\\"870-006\\",\\"religion\\"=>\\"buddhist\\",\\"whc:criteria\\"=>\\"(ii),(iii),(iv),(vi)\\",\\"whc:inscription_date\\"=>\\"1998\\",\\"wikidata\\"=>\\"Q973175\\",\\"wikimedia_commons\\"=>\\"Category:Toshodaiji\\",\\"wikipedia\\"=>\\"ja:唐招提寺\\"","area":115075.31283766031,"centroid_x":135.78544027835312,"centroid_y":34.675922754148274},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7870893,34.6747685],[135.785831,34.6747634],[135.7855481,34.6747622],[135.7852714,34.674754],[135.7851302,34.6747376],[135.7849907,34.6747276],[135.7846559,34.6747225],[135.7841874,34.6747083],[135.7842123,34.675462],[135.7835268,34.6754659],[135.7835476,34.6760088],[135.783556800000014,34.6769809],[135.7857434,34.6769979],[135.7859741,34.6770051],[135.7862673,34.6770181],[135.7865482,34.6769957],[135.7871364,34.676927],[135.7872456,34.6769142],[135.7871182,34.6751736],[135.7870893,34.6747685]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510574","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"forest","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":10187.964649200439,"centroid_x":135.78392870631026,"centroid_y":34.676466761397712},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7841166,34.6762691],[135.783731,34.6762712],[135.7837293,34.6760687],[135.7841625,34.6760663],[135.7841612,34.6759159],[135.783686,34.6759185],[135.7836824,34.675488],[135.7842052,34.6754851],[135.7842051,34.6754716],[135.7840546,34.6754724],[135.7835402,34.6754758],[135.783569,34.6761202],[135.783576900000014,34.6769666],[135.78493610000001,34.6769747],[135.7849374,34.6768426],[135.7841139,34.676836],[135.7841166,34.6762691]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510576","name":"南大門","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":"city_gate","land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":313.79982785880566,"centroid_x":135.78484625744736,"centroid_y":34.674772740391951},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7849703,34.6748155],[135.7849708,34.6747697],[135.7849713,34.6747319],[135.7848531,34.674731],[135.7847223,34.6747299],[135.784722,34.6747533],[135.7847213,34.6748136],[135.7848505,34.6748146],[135.7849703,34.6748155]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510577","name":"経蔵","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"wikidata\\"=>\\"Q107020488\\",\\"wikimedia_commons\\"=>\\"Category:Sutra Storehouse, Toshodai-ji\\"","area":95.435220941901207,"centroid_x":135.78552244154136,"centroid_y":34.675557449622353},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.785479400000014,34.6755943],[135.7855638,34.6755956],[135.7855655,34.6755206],[135.7854811,34.6755193],[135.785480299999989,34.6755531],[135.785479400000014,34.6755943]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510578","name":"宝蔵","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"wikidata\\"=>\\"Q107020492\\",\\"wikimedia_commons\\"=>\\"Category:Treasure House, Toshodai-ji\\"","area":204.42175808176398,"centroid_x":135.7855215435761,"centroid_y":34.675752320856503},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7854659,34.6756916],[135.785464499999989,34.6757507],[135.785463099999987,34.6758109],[135.7855764,34.6758127],[135.7855812,34.6756948],[135.7854659,34.6756916]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510579","name":"礼堂","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":1022.5073948502541,"centroid_x":135.7852627805878,"centroid_y":34.67584388325465},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7853373,34.6755984],[135.785199799999987,34.6755962],[135.7851882,34.6760893],[135.78532580000001,34.6760915],[135.785329100000013,34.6759511],[135.7853373,34.6755984]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510580","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":265.07242537289858,"centroid_x":135.78540151804188,"centroid_y":34.675292431460655},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7854692,34.6753571],[135.7854704,34.67531],[135.7854726,34.6752303],[135.785333900000012,34.6752278],[135.7853304,34.6753545],[135.7854692,34.6753571]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510581","name":"鼓楼","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"wikidata\\"=>\\"Q107020490\\",\\"wikimedia_commons\\"=>\\"Category:Korō, Toshodai-ji\\"","area":124.88871198892593,"centroid_x":135.7851051,"centroid_y":34.67572465},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.785059600000011,34.6757706],[135.7851484,34.675772],[135.7851506,34.6756787],[135.7850618,34.6756773],[135.785059600000011,34.6757706]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510582","name":"新宝蔵","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"wikidata\\"=>\\"Q123246926\\"","area":1141.4586976468563,"centroid_x":135.78628151628169,"centroid_y":34.675872625102208},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.786182700000012,34.6760652],[135.7863792,34.6760656],[135.7863803,34.67568],[135.7861838,34.6756797],[135.7861833,34.6758718],[135.786182700000012,34.6760652]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510583","name":"講堂","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"wikidata\\"=>\\"Q107020489\\",\\"wikimedia_commons\\"=>\\"Category:Lecture Hall, Toshodai-ji\\"","area":1171.8009137511253,"centroid_x":135.78483162032077,"centroid_y":34.675881875532184},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7850521,34.6757972],[135.7846166,34.6757881],[135.7846111,34.6759665],[135.785046599999987,34.6759757],[135.7850521,34.6757972]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510584","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":183.03324960544705,"centroid_x":135.78574208605215,"centroid_y":34.675292824663053},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7858124,34.6753365],[135.7858144,34.6752514],[135.785671799999989,34.6752491],[135.7856698,34.6753343],[135.7858124,34.6753365]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510585","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":112.98758608335629,"centroid_x":135.78591674861329,"centroid_y":34.675317695109854},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.785872,34.675276],[135.785870100000011,34.675358],[135.785961500000013,34.6753594],[135.785963400000014,34.6752774],[135.7858798,34.6752761],[135.785872,34.675276]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"293510586","name":"金堂","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"wikidata\\"=>\\"Q107020491\\"","area":1273.9560513198376,"centroid_x":135.78483176962544,"centroid_y":34.675544160113247},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784628,34.6756468],[135.7850329,34.6756503],[135.785035,34.6754826],[135.7850355,34.6754415],[135.7848401,34.6754398],[135.784630600000014,34.6754381],[135.784628,34.6756468]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907041","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"forest","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":4227.738733664155,"centroid_x":135.78529187900489,"centroid_y":34.675078396483407},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7849156,34.6747855],[135.7849233,34.675336],[135.7851503,34.6753364],[135.78526020000001,34.6752019],[135.785620099999988,34.6752019],[135.7856194,34.6751438],[135.7860091,34.6751456],[135.7860072,34.6750127],[135.7851905,34.6750205],[135.785194499999989,34.6747888],[135.7849156,34.6747855]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907046","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"forest","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":4796.7913193404675,"centroid_x":135.78455742851239,"centroid_y":34.676013032965294},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7842652,34.6755132],[135.7842594,34.6762746],[135.7850396,34.6762785],[135.7850417,34.6760069],[135.7844787,34.676004],[135.7844824,34.6755143],[135.7842652,34.6755132]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907047","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"forest","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":4367.6233120858669,"centroid_x":135.784503813257,"centroid_y":34.675085472578331},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784277800000012,34.67478],[135.7842699,34.6754455],[135.7844804,34.6754472],[135.784481699999986,34.6753344],[135.784752700000013,34.6753366],[135.7847592,34.6747839],[135.784277800000012,34.67478]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907061","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":1288.0576134622097,"centroid_x":135.7866589876418,"centroid_y":34.676687566824874},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7868803,34.6768036],[135.7868937,34.6768808],[135.7869288,34.6769104],[135.7869876,34.676911],[135.7870213,34.6768955],[135.7870223,34.6768309],[135.78691520000001,34.6766169],[135.7868397,34.6765799],[135.7866912,34.6765221],[135.7865826,34.6765121],[135.7865066,34.6765236],[135.786457899999988,34.6765309],[135.7863653,34.6765838],[135.7862259,34.6767316],[135.7862084,34.6768044],[135.7862295,34.6768353],[135.78630290000001,34.6768015],[135.7863575,34.6767262],[135.786430200000012,34.6766257],[135.786480899999987,34.6765851],[135.7865172,34.6765717],[135.786565200000013,34.676554],[135.7866912,34.6765805],[135.7868005,34.676634],[135.786868,34.6767332],[135.7868803,34.6768036]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907062","name":"水鏡天神社","type":null,"aeroway":null,"amenity":"place_of_worship","admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"religion\\"=>\\"shinto\\",\\"wikidata\\"=>\\"Q48757104\\",\\"wikipedia\\"=>\\"ja:水鏡天神社\\"","area":75.50432924926281,"centroid_x":135.78683040619651,"centroid_y":34.675437774494846},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.786801200000014,34.6754794],[135.7868623,34.6754781],[135.786859600000014,34.6753961],[135.7867985,34.6753975],[135.786801200000014,34.6754794]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907063","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":186.98891440033913,"centroid_x":135.78682767020953,"centroid_y":34.675895375664474},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.78673950000001,34.6759288],[135.786913,34.6759334],[135.7869158,34.6758619],[135.786742299999986,34.6758574],[135.78673950000001,34.6759288]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907064","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":112.90161122381687,"centroid_x":135.7865504,"centroid_y":34.6760288},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7864935,34.6760625],[135.7866099,34.6760594],[135.786607299999986,34.6759951],[135.7864909,34.6759982],[135.7864935,34.6760625]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907065","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":230.77489338815212,"centroid_x":135.78688325000005,"centroid_y":34.67634775000001},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7868162,34.6764048],[135.7869516,34.6764038],[135.7869503,34.6762907],[135.7868149,34.6762917],[135.7868162,34.6764048]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907067","name":"高麗門","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":50.258656822144985,"centroid_x":135.78525382468106,"centroid_y":34.674799052817626},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7852039,34.6748153],[135.785303199999987,34.6748164],[135.785303699999986,34.6747828],[135.7852045,34.6747817],[135.7852039,34.6748153]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907068","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":170.56735070049763,"centroid_x":135.7838733,"centroid_y":34.6761578},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.783823899999987,34.6762146],[135.783924500000012,34.6762135],[135.7839227,34.676101],[135.7838221,34.6761021],[135.783823899999987,34.6762146]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907069","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":39.662099830806255,"centroid_x":135.7841987746969,"centroid_y":34.676427756015926},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784168099999988,34.6764491],[135.784228500000012,34.67645],[135.784229399999987,34.6764064],[135.784169100000014,34.6764055],[135.784168099999988,34.6764491]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907070","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":127.20698640495539,"centroid_x":135.7847852,"centroid_y":34.67641205},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7847104,34.6764407],[135.7848606,34.6764396],[135.78486,34.6763834],[135.7847098,34.6763845],[135.7847104,34.6764407]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907071","name":"地蔵堂","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":77.365045972168446,"centroid_x":135.7850864,"centroid_y":34.67648815},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.785043,34.6765174],[135.785127499999987,34.6765196],[135.7851298,34.6764589],[135.7850453,34.6764567],[135.785043,34.6765174]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907072","name":"中興堂","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":159.09134289622307,"centroid_x":135.78495315000001,"centroid_y":34.67662605},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7848955,34.6766718],[135.7850095,34.6766729],[135.7850108,34.6765803],[135.784896800000013,34.6765792],[135.7848955,34.6766718]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907073","name":"開山堂","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":108.84349565207958,"centroid_x":135.7851457,"centroid_y":34.67623555},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.785100699999987,34.6762758],[135.7851892,34.6762769],[135.785190699999987,34.6761953],[135.785102200000011,34.6761942],[135.785100699999987,34.6762758]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907074","name":"御影堂","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":1214.4176186025143,"centroid_x":135.7855216912979,"centroid_y":34.676601953441356},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7853132,34.6767493],[135.785593,34.6767189],[135.7855784,34.6766281],[135.785701100000011,34.6766148],[135.785697199999987,34.6765908],[135.7857897,34.6765808],[135.7857836,34.6765426],[135.7857765,34.6764986],[135.785684,34.6765086],[135.7856688,34.6764142],[135.7855639,34.6764256],[135.7855826,34.6765416],[135.78528510000001,34.6765739],[135.7853132,34.6767493]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907075","name":"本坊","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":831.94725989922881,"centroid_x":135.78439991039997,"centroid_y":34.676534248889936},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784456299999988,34.6765791],[135.7845984,34.676578],[135.7845965,34.6764115],[135.784454399999987,34.6764127],[135.784455400000013,34.6765008],[135.7843101,34.6765019],[135.7843096,34.6764655],[135.784269,34.6764658],[135.7842028,34.6764664],[135.7842048,34.6766409],[135.784365,34.6766396],[135.7843661,34.6767313],[135.784401300000013,34.6767311],[135.7844007,34.676685],[135.784381200000013,34.6766852],[135.784380199999987,34.6765979],[135.7843112,34.6765984],[135.7843107,34.6765549],[135.784456,34.6765537],[135.784456299999988,34.6765791]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"457907076","name":"寺務所","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":976.73536725342274,"centroid_x":135.78562592751476,"centroid_y":34.674899416121214},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7854471,34.6749791],[135.785838,34.6749754],[135.7858358,34.6748209],[135.7854418,34.6748246],[135.7854423,34.67486],[135.7853792,34.6748606],[135.7853801,34.6749256],[135.7854463,34.6749249],[135.7854471,34.6749791]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909336","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":1157.6612162590027,"centroid_x":135.78670725507763,"centroid_y":34.675099490511123},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7863501,34.6750414],[135.7863501,34.6751497],[135.7870641,34.6751566],[135.787069699999989,34.6750506],[135.7863501,34.6750414]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909337","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":85.588794432580471,"centroid_x":135.7862381,"centroid_y":34.67482845},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.786179299999986,34.6748526],[135.7862969,34.6748526],[135.7862969,34.6748043],[135.786179299999986,34.6748043],[135.786179299999986,34.6748526]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909338","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":435.82349573075771,"centroid_x":135.78648988508871,"centroid_y":34.674893566372376},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7863529,34.674947],[135.786624499999988,34.674947],[135.786624499999988,34.6748388],[135.7863557,34.6748411],[135.7863529,34.674947]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909339","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":707.94841582141817,"centroid_x":135.78688728424814,"centroid_y":34.674922343971033},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7866965,34.674857],[135.786698,34.674924],[135.7867568,34.6749253],[135.7867568,34.6749501],[135.786787,34.6749513],[135.7867885,34.6750072],[135.787036,34.6750072],[135.787039,34.6748483],[135.786761399999989,34.6748471],[135.7867583,34.6748583],[135.7866965,34.674857]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909340","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":38.743932394310832,"centroid_x":135.78642188866721,"centroid_y":34.675532697676964},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7863946,34.6755096],[135.786394,34.6755559],[135.786448799999988,34.6755563],[135.786449800000014,34.6755091],[135.7863946,34.6755096]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909347","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":25.419332692399621,"centroid_x":135.78414565719456,"centroid_y":34.67620190210166},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7841258,34.6761814],[135.7841258,34.6762232],[135.784165800000011,34.6762232],[135.7841646,34.6761794],[135.7841258,34.6761814]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909348","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":162.09862014651299,"centroid_x":135.78401557053147,"centroid_y":34.676301992348904},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7839682,34.6763448],[135.784093,34.6763448],[135.7840943,34.6763129],[135.7840761,34.6763129],[135.7840773,34.6762631],[135.7839209,34.6762641],[135.7839209,34.676293],[135.783969399999989,34.676295],[135.7839682,34.6763448]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909349","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":179.57771326974034,"centroid_x":135.7840076,"centroid_y":34.67644255},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7839634,34.6763708],[135.7839706,34.6765173],[135.784051799999986,34.6765143],[135.784044599999987,34.6763678],[135.7839634,34.6763708]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909350","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":78.093043282628059,"centroid_x":135.78411370427875,"centroid_y":34.676526499532876},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7840846,34.6765711],[135.7841427,34.6765711],[135.7841427,34.6764814],[135.7840846,34.6764824],[135.7840846,34.6765711]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909351","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":24.127632945775986,"centroid_x":135.78412244986512,"centroid_y":34.676619294552488},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784106400000013,34.6766449],[135.7841379,34.6766439],[135.7841391,34.676594],[135.784106400000013,34.676595],[135.784106400000013,34.6766449]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909352","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":72.295380488038063,"centroid_x":135.7848084433966,"centroid_y":34.676568243568369},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784773,34.676609],[135.7848239,34.676612],[135.7848239,34.6765791],[135.7848445,34.6765801],[135.784849400000013,34.6765332],[135.7847815,34.6765302],[135.784773,34.676609]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909353","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":95.382487125694752,"centroid_x":135.78495946050751,"centroid_y":34.676478225779356},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7849148,34.6764445],[135.78491120000001,34.6765123],[135.785004500000014,34.6765123],[135.785006900000013,34.6764435],[135.7849148,34.6764445]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909354","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":31.460669130086899,"centroid_x":135.78541478954665,"centroid_y":34.676011652546869},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7853984,34.6760448],[135.7854299,34.6760448],[135.785431100000011,34.675978],[135.7853996,34.675979],[135.7853984,34.6760448]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909360","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":28.445275537669659,"centroid_x":135.78577658410234,"centroid_y":34.676318019375387},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7857402,34.676307],[135.7857402,34.6763329],[135.78581410000001,34.6763289],[135.785811700000011,34.676303],[135.7857402,34.676307]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909361","name":"三暁庵","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":78.992652982473373,"centroid_x":135.78619761665445,"centroid_y":34.676307843367383},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7861644,34.6763458],[135.7862408,34.6763369],[135.7862311,34.6762691],[135.786153500000012,34.6762801],[135.7861644,34.6763458]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909363","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":21.172843225300312,"centroid_x":135.786749147829,"centroid_y":34.676049011201968},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.786720800000012,34.6760626],[135.786779200000012,34.6760594],[135.7867779,34.6760359],[135.7867195,34.6760381],[135.786720800000012,34.6760626]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909364","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":192.08489702641964,"centroid_x":135.7865521331087,"centroid_y":34.67592325913342},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7864753,34.6759782],[135.7865129,34.6759782],[135.7865129,34.6759569],[135.786638900000014,34.6759558],[135.786638900000014,34.6758842],[135.7864727,34.6758842],[135.7864753,34.6759782]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909365","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":25.771300978958607,"centroid_x":135.78710015635707,"centroid_y":34.676100034080775},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.787083200000012,34.6761225],[135.787119600000011,34.6761235],[135.7871183,34.6760776],[135.787079299999988,34.6760776],[135.787083200000012,34.6761225]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909366","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":14.292150935158134,"centroid_x":135.78691527309942,"centroid_y":34.6761555251462},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7868961,34.6761428],[135.786897399999987,34.6761684],[135.786933800000014,34.6761684],[135.786933800000014,34.6761428],[135.7868961,34.6761428]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"854909367","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":36.573871396481991,"centroid_x":135.78701402764096,"centroid_y":34.676407748847012},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.786978,34.6763917],[135.7869767,34.6764248],[135.7870507,34.6764237],[135.7870507,34.6763906],[135.786978,34.6763917]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1121979574","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"reservoir\\"","area":62.315581455826759,"centroid_x":135.78419502826722,"centroid_y":34.675807017598707},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784175800000014,34.6758699],[135.7842109,34.6758699],[135.7842109,34.6757381],[135.784182499999986,34.6757409],[135.784175800000014,34.6758699]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1121979575","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"reservoir\\"","area":76.336500257253647,"centroid_x":135.78419718034371,"centroid_y":34.675623847785751},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7841775,34.6757024],[135.7842092,34.6757024],[135.7842176,34.6755459],[135.7841842,34.6755473],[135.7841775,34.6757024]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1121979576","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"reservoir\\"","area":57.033764186315238,"centroid_x":135.7842042,"centroid_y":34.6759708},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7841875,34.6759111],[135.784189199999986,34.6760305],[135.7842209,34.6760305],[135.7842192,34.6759111],[135.7841875,34.6759111]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1121979577","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"reservoir\\"","area":58.631431832909584,"centroid_x":135.78420507545619,"centroid_y":34.676126424461572},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7841909,34.6761925],[135.7842192,34.6761925],[135.7842209,34.6760621],[135.784189199999986,34.6760635],[135.7841909,34.6761925]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1122536037","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"roof","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":39.219195760786533,"centroid_x":135.78392716339638,"centroid_y":34.675547751290615},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7838954,34.6755453],[135.7838974,34.6755688],[135.7839587,34.6755688],[135.7839576,34.6755419],[135.7839587,34.6755268],[135.7838964,34.6755268],[135.7838954,34.6755453]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1122536038","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"roof","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"1\\"","area":18.938267130404711,"centroid_x":135.7840952757868,"centroid_y":34.675724428626346},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.784094399999987,34.6757098],[135.784073799999987,34.6757092],[135.7840745,34.6757393],[135.784094399999987,34.6757391],[135.7841166,34.6757399],[135.784115899999989,34.6757092],[135.784094399999987,34.6757098]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1122536039","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":58.12884246557951,"centroid_x":135.78457529650913,"centroid_y":34.675725725468432},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7845431,34.6757556],[135.784606700000012,34.6757546],[135.7846104,34.6756962],[135.784540600000014,34.6756983],[135.7845431,34.6757556]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1122536040","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":89.877422630786896,"centroid_x":135.78500785588218,"centroid_y":34.676755511726192},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7850448,34.6767156],[135.784964,34.6767217],[135.784971399999989,34.6767951],[135.785050899999987,34.6767901],[135.7850448,34.6767156]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1122573165","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":22.739524475298822,"centroid_x":135.78424314288898,"centroid_y":34.674726158813009},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7842776,34.6747381],[135.7842784,34.6747156],[135.7842436,34.6747156],[135.7842062,34.6747156],[135.7842073,34.6747354],[135.7842446,34.6747369],[135.7842776,34.6747381]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1122573167","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":83.430738113820553,"centroid_x":135.78431763024781,"centroid_y":34.675293802901834},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7843693,34.6752672],[135.7842647,34.6752679],[135.7842647,34.6753202],[135.7843718,34.6753195],[135.7843693,34.6752672]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1122573168","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":25.642184805124998,"centroid_x":135.78606122439336,"centroid_y":34.675680192349901},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.786029,34.675668],[135.7860284,34.6756943],[135.7860942,34.6756921],[135.786093599999987,34.6756662],[135.786029,34.675668]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1237463916","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":115.83494257181883,"centroid_x":135.78572173373308,"centroid_y":34.675188625140407},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.7857833,34.6752196],[135.7857827,34.6751569],[135.7856602,34.6751576],[135.785660799999988,34.6752204],[135.7857833,34.6752196]]]]}}]}'),tW=JSON.parse('{"type":"FeatureCollection","name":"map-points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"4539704660","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"entrance\\"=>\\"main\\"","area":null,"centroid_x":135.7861833,"centroid_y":34.6758718},"geometry":{"type":"Point","coordinates":[135.7861833,34.6758718]}},{"type":"Feature","properties":{"osm_id":"10264940466","name":"戒壇","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"monument\\"","area":null,"centroid_x":135.7839293,"centroid_y":34.6757205},"geometry":{"type":"Point","coordinates":[135.783929300000011,34.6757205]}},{"type":"Feature","properties":{"osm_id":"10266651031","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.7841545,"centroid_y":34.675804},"geometry":{"type":"Point","coordinates":[135.7841545,34.675804]}},{"type":"Feature","properties":{"osm_id":"10266651032","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.7841407,"centroid_y":34.6756315},"geometry":{"type":"Point","coordinates":[135.7841407,34.6756315]}},{"type":"Feature","properties":{"osm_id":"10266651033","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.7841386,"centroid_y":34.6755578},"geometry":{"type":"Point","coordinates":[135.7841386,34.6755578]}},{"type":"Feature","properties":{"osm_id":"11795793633","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"payment:cash\\"=>\\"yes\\",\\"shop\\"=>\\"ticket\\"","area":null,"centroid_x":135.7847926,"centroid_y":34.6747524},"geometry":{"type":"Point","coordinates":[135.7847926,34.6747524]}},{"type":"Feature","properties":{"osm_id":"11795793643","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"emergency\\"=>\\"fire_hydrant\\",\\"fire_hydrant:type\\"=>\\"pillar\\"","area":null,"centroid_x":135.7851729,"centroid_y":34.6754886},"geometry":{"type":"Point","coordinates":[135.7851729,34.6754886]}},{"type":"Feature","properties":{"osm_id":"11795793644","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.7851887,"centroid_y":34.6754881},"geometry":{"type":"Point","coordinates":[135.7851887,34.6754881]}},{"type":"Feature","properties":{"osm_id":"11795793662","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"shop\\"=>\\"gift\\"","area":null,"centroid_x":135.7854042,"centroid_y":34.6752894},"geometry":{"type":"Point","coordinates":[135.785404199999988,34.6752894]}}]}'),tZ=JSON.parse('{"type":"FeatureCollection","name":"measures","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"direction":"x","distance":1.8555999999989581e-3,"ellipsoidal_distance":170.05960101263611},"geometry":{"type":"LineString","coordinates":[[135.78539,34.675863],[135.7872456,34.675863]]}},{"type":"Feature","properties":{"direction":"y","distance":1.1547000000007301e-3,"ellipsoidal_distance":128.09623031880406},"geometry":{"type":"LineString","coordinates":[[135.78539,34.675863],[135.78539,34.6747083]]}}]}');let tY={areas:tR,internals:tA,origin:JSON.parse('{"type":"FeatureCollection","name":"origin","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[135.78539,34.675863]}}]}'),measures:tZ,viewbox:JSON.parse('{"type":"FeatureCollection","name":"viewbox","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"direction":null,"distance":null,"ellipsoidal_distance":null},"geometry":{"type":"LineString","coordinates":[[135.78539,34.675863],[135.7835268,34.6770181]]}},{"type":"Feature","properties":{"direction":null,"distance":null,"ellipsoidal_distance":null},"geometry":{"type":"LineString","coordinates":[[135.7835268,34.6770181],[135.7872456,34.6747083]]}}]}'),points:tW,lines:tI,multilinestrings:tP,multipolygons:tH},tU={pointMap:(t=tY.points,(0,e_.zG)(t.features,eh.DZ(e=>{let l=e.properties.osm_id;return null===l?ef.YP:ef.G([Number(l),e])}),e=>new Map(e))),lineMap:(r=tY.lines,(0,e_.zG)(r.features,eh.DZ(e=>{let l=e.properties.osm_id;return null===l?ef.YP:ef.G([Number(l),e])}),e=>new Map(e))),multilinestringMap:(a=tY.multilinestrings,(0,e_.zG)(a.features,eh.DZ(e=>{let l=e.properties.osm_id;return null===l?ef.YP:ef.G([Number(l),e])}),e=>new Map(e))),multipolygonMap:(i=tY.multipolygons,(0,e_.zG)(i.features,eh.DZ(e=>{let l=e.properties.osm_id,n=e.properties.osm_way_id,t=null!==l?l:null!==n?n:null;return null===t?ef.YP:ef.G([Number(t),e])}),e=>new Map(e)))},{mapCoord:tX,mapViewBox:tG}=function(e){let{origin:l,measures:n,viewbox:t}=e,r=eZ(l.features[0].geometry.coordinates),a=n.features[0],i=n.features[1],o=eZ(a.geometry.coordinates[1]),u=eZ(i.geometry.coordinates[1]),s=function(e,l){let n=e.x/l.x,t=e.y/l.y;return{...e,x:n,y:t}}({x:a.properties.ellipsoidal_distance,y:i.properties.ellipsoidal_distance},{x:o.x-r.x,y:u.y-r.y});return{mapCoord:{matrix:new DOMMatrixReadOnly().scale(s.x,s.y).translate(-r.x,-r.y)},mapViewBox:eD(function(e){let l=e.features[0].geometry.coordinates,[n,t]=eR(l[1],l[0]),r=e.features[1].geometry.coordinates,[a,i]=eR(r[1],r[0]);return{x:n,y:t,width:a,height:i}}(t),eS(ez(s)))}}(tY);document.title=`svgmapviewer @ ${window.location.host}`,!function(e){var l,n,t;let r={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0};d({origViewBox:r,isContainerRendered:tw,isUiRendered:n0,...e}),d({...s});let a={...s,origViewBox:r,...e};ep.start(),eK.start(),tb.start(),lq.start(),ld.start(),le.start(),tt.start(),lP.start(),lQ.start(),c.add(lc),m.add(ly),e.getMapNames&&(l=e.getMapNames(),li.trigger.set({names:l})),a.searchEntries.length>0&&(n=function(e,l){var n;let t=null==(n=s.cartoConfig)?void 0:n.skipNamePattern;return[...e.points.features.flatMap(e=>{let{properties:n}=e,r=lo(n,l,t);return null===r?[]:[r]}),...e.multipolygons.features.flatMap(e=>{let{properties:n}=e,r=lo(n,l,t);return null===r?[]:[r]})]}(a.mapData,a.searchEntries),lu.postMessage({type:"INIT",entries:n})),void 0!==a.floorsConfig&&(t=a.floorsConfig.fidx,ep.send({type:"SELECT",fidx:t,force:!0}));let i=document.getElementById(a.root);if(null===i)throw Error("#root not found!");i.onwheel=function(e){var l;let n=i.children[0];e.target instanceof HTMLDivElement&&(null==(l=e.target)?void 0:l.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||l7)&&e.preventDefault()},i.oncontextmenu=function(e){e.preventDefault()},i.ontouchmove=function(e){if(l7){var l;if(e.target instanceof HTMLDivElement&&(null==(l=e.target)?void 0:l.id)==="ui")return;e.preventDefault()}else if(!tr)return;e.preventDefault()},document.title=a.title,document.body.onkeydown=tm,document.body.onkeyup=tp,(0,lm.createRoot)(i).render((0,P.jsx)(o.StrictMode,{children:(0,P.jsx)(tM,{})}));let u=document.getElementById("style-root");if(null===u)throw Error("#style-root not found!");(0,lm.createRoot)(u).render((0,P.jsx)(o.StrictMode,{children:(0,P.jsx)(tE,{})}))}({mapData:tY,mapMap:tU,mapCoord:tX,origViewBox:tG,...tz,title:"Toshodaiji",copyright:"@ Daiji Maps | map data @ OpenStreetMap contributers",zoomFactor:3,root:"root",map:"map1"})}},l={};function n(t){var r=l[t];if(void 0!==r)return r.exports;var a=l[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.d=(e,l)=>{for(var t in l)n.o(l,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})},n.u=e=>"static/js/async/"+e+"."+({469:"d9ca6725",547:"3a7af0ff"})[e]+".js",n.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e=[];n.O=(l,t,r,a)=>{if(t){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[t,r,a];return}for(var o=1/0,i=0;i<e.length;i++){for(var[t,r,a]=e[i],u=!0,s=0;s<t.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every(e=>n.O[e](t[s]))?t.splice(s--,1):(u=!1,a<o&&(o=a));if(u){e.splice(i--,1);var d=r();void 0!==d&&(l=d)}}return l}})(),n.p="/",(()=>{n.b=document.baseURI||self.location.href;var e={980:0};n.O.j=l=>0===e[l];var l=(l,t)=>{var r,a,[i,o,u]=t,s=0;if(i.some(l=>0!==e[l])){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(u)var d=u(n)}for(l&&l(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var t=n.O(void 0,["361","825","639"],function(){return n(561)});t=n.O(t)})();