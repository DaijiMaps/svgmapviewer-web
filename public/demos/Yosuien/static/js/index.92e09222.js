(()=>{"use strict";var e={561:function(e,n,t){var l,r,a,i,o=t(4249);let u={type:"",name:"",crs:{type:"",properties:{name:""}},features:[]},s={root:"root",map:"map",href:"map.svg",width:0,height:0,fontSize:16,origViewBox:{x:0,y:0,width:0,height:0},title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,getMapLayers:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],getMapNames:()=>[],searchEntries:[],renderInfo:function(e){return(0,o.createElement)("p",{},e.info.title)},mapSvgStyle:"",renderMap:function(){return(0,o.createElement)("div")},isMapRendered:()=>!0,mapData:{areas:u,internals:u,origin:u,measures:u,viewbox:u,points:u,lines:u,multilinestrings:u,multipolygons:u},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly}};function d(e){s={...s,...e}}let c=new Set,y=new Set,m=new Set,p=new Set,g=new Set,h=new Set,_=new Set,f=new Set,x=new Set,w=new Set,v=new Set,b=new Set,S=new Set,E=new Set,F=new Set,j=new Set,M=new Set,L=new Set,k=new Set,O=new Set,z=new Set,$=new Set,T=new Set,D=new Set,C=new Set,N=new Set,R=new Set;function A(){E.forEach(e=>e())}function P(e,n){L.forEach(t=>t(e,n))}var I=t(8586),H=t(4649);t(9701);let W={context:{ids:new Set}};(0,H.a)({context:function(){let e=function(e){if(!e)return;let n=JSON.parse(e);if("context"in n&&"ids"in n.context)return{...n,context:{...n.context,ids:new Set(n.context.ids)}}}(localStorage.getItem("svgmapviewer:likes"));return void 0===e?W:e}().context,on:{like:(e,n)=>({...e,ids:new Set(Array.from(e.ids.add(n.id)))}),unlike:(e,n)=>(e.ids.delete(n.id),{...e,ids:new Set(Array.from(e.ids))})}}).subscribe(function(e){localStorage.setItem("svgmapviewer:likes",JSON.stringify({...e,context:{...e.context,ids:Array.from(e.context.ids.keys())}}))});let Z=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var Y=t(2158),U=t(9621),G=t(64),X=t(2662);let q=`
position: absolute;
left: 0;
top: 0;
`,B=`
position: absolute;
right: 0;
top: 0;
`,K=`
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
`,en=`
box-sizing: border-box;
`,et=`
width: 100vw;
height: 100vh;
height: 100svh;
`,el=`
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
`,ey="250ms",em=(0,U.cY)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null},initial:"Idle",states:{Idle:{on:{SELECT:[{guard:e=>{let{event:n}=e;return n.force??!1},actions:(0,G.a)({fidx:e=>{let{event:n}=e;return n.fidx}})},{guard:e=>{let{context:n,event:t}=e;return n.fidx!==t.fidx},actions:(0,G.a)({fidx:e=>{let{event:n}=e;return n.fidx},prevFidx:e=>{let{context:n}=e;return n.fidx}}),target:"Animating"}]}},Animating:{on:{DONE:{actions:(0,G.a)({prevFidx:null}),target:"Idle"}}}}}),ep=(0,X.c)(em);function eg(){let{fidx:e,prevFidx:n}=(0,Y.v9)(ep,e=>e.context),t=function(e,n){let t=s.floorsConfig;if(void 0===t)return null;let l=t.floors.map((t,l)=>l===e||l===n?"":`
.fidx-${l} {
  visibility: hidden;
}
`).join(""),r=null===n?"":`
.fidx-${n} {
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
${l}
${r}
`}(e,n),l=(0,o.useCallback)(n=>n===e?()=>{b.forEach(e=>e(n))}:void 0,[e]),r=(0,o.useCallback)(t=>null!==n||t===e?void 0:()=>{w.forEach(e=>e(t))},[e,n]);return{fidx:e,prevFidx:n,style:t,fidxToOnAnimationEnd:l,fidxToOnClick:r}}ep.start(),v.add(function(e){ep.send({type:"SELECT",fidx:e})}),b.add(function(e){ep.send({type:"DONE",fidx:e})});var eh=t(6058),e_=t(5185),ef=t(8945);function ex(e,n,t){let[l,r,a]=e,[i,o]=n;return l*i+r*o+a*t}function ew(e,n,t){return[ex(function(e){let[[n],[t],[l]]=e;return[n,t,l]}(e),n,t),ex(function(e){let[[,n],[,t],[,l]]=e;return[n,t,l]}(e),n,t)]}function ev(e,n){return[ew(e,function(e){let[n]=e;return n}(n),0),ew(e,function(e){let[,n]=e;return n}(n),0),ew(e,function(e){let[,,n]=e;return n}(n),1)]}function eb(e){let[n,t]=e;return[[1,0],[0,1],[n,t]]}function eS(e){let[n,t]=e;return[[n,0],[0,t],[0,0]]}function eE(e,n,t,l){return{x:e,y:n,width:t,height:l}}let eF={x:0,y:0,width:1,height:1};function ej(e){return{x:e.x,y:e.y,width:e.width,height:e.height}}function eM(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function eL(e,n){return{...e,x:e.x+n.x,y:e.y+n.y}}function ek(e,n){return{...e,x:n.x,y:n.y}}function eO(e){let{x:n,y:t,width:l,height:r}=e;return{tl:{x:n,y:t},br:{x:n+l,y:t+r}}}function ez(e){let{tl:n,br:t}=e;return{x:n.x,y:n.y,width:t.x-n.x,height:t.y-n.y}}function e$(e){let{tl:n,br:t}=e;return[[n.x,n.y],[t.x,t.y]]}function eT(e){let[[n,t],[l,r]]=e;return{tl:{x:n,y:t},br:{x:l,y:r}}}function eD(e,n){return(0,ef.zG)(e,eO,e$,e=>(function(e,n){let[t,l]=e;return[n(t),n(l)]})(e,e=>ew(n,e,1)),eT,ez)}function eC(e,n,t,l){return eD(e,function(e,n){let[t,l]=n;return[eb(n),eS(e),eb([-t,-l])].reduce(ev)}(eN(n),[t,l]))}function eN(e){return"number"==typeof e?[e,e]:"x"in e?[e.x,e.y]:e}function eR(e,n){let[t,l]=e,[r,a]=n;return[t-r,l-a]}function eA(e,n){let t=e.x+n.x,l=e.y+n.y;return{...e,x:t,y:l}}function eP(e,n){let t=e.x-n.x,l=e.y-n.y;return{...e,x:t,y:l}}var eI=t(592);let eH=t(6750).Zt(function(e,n){return eI.Df.compare(e.x,n.x)||eI.Df.compare(e.y,n.y)}),eW={x:0,y:0};function eZ(e){let[n,t]=e;return{x:n,y:t}}function eY(e,n){let t="number"==typeof n?n:n instanceof Array?n[0]:n.x,l="number"==typeof n?n:n instanceof Array?n[1]:n.y,r=e.x*t,a=e.y*l;return{...e,x:r,y:a}}var eU=t(6011),eG=t(5582);async function eX(){return new Promise((e,n)=>{navigator.geolocation.getCurrentPosition(function(n){e(n)},function(e){n(e)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}let eq=(0,U.cY)({types:{events:{},emitted:{}},actors:{api:(0,eU.p4)(eX)},delays:{TIMEOUT:5e3}}).createMachine({id:"geoloc",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,G.a)({position:e=>{let{event:n}=e;return n.output}}),(0,eG.e)(e=>{let{event:n}=e;return{type:"POSITION",position:n.output}})],target:"Idle"},onError:{actions:(0,G.a)({error:e=>{let{event:n}=e;return JSON.stringify(n)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),eB=(0,X.c)(eq);eB.start(),N.add(function(){eB.send({type:"GET"})});let eK=[1,2,2.5,5,10,15,20,25,30,40,50],eV=(0,U.cY)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,G.a)({ticked:!1}),set:(0,G.a)({ticked:!0}),call:(0,eG.e)({type:"CALL"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["call","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:n}=e;return!n.ticked},actions:{type:"set",params:e=>{let{event:n}=e;return n}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:n}=e;return n}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["call","clear"],target:"Idle"}}}}),eJ={container:eF,scroll:eF,content:new DOMMatrixReadOnly,svgOffset:{x:0,y:0},svgScale:{s:1},svg:eF};function eQ(e){let{container:n,svgOffset:t,svgScale:l,svg:r}=e;return{container:ej(n),scroll:ej(n),content:new DOMMatrixReadOnly,svgOffset:t,svgScale:l,svg:ej(r)}}function e1(e){let{scroll:n,content:t,svgOffset:l,svgScale:r,svg:a}=e;return new DOMMatrixReadOnly().translate(n.x,n.y).multiply(t).translate(-l.x,-l.y).scale(1/r.s,1/r.s).translate(-a.x,-a.y)}let e3={...eJ,config:{fontSize:16,container:eF,svgOffset:{x:0,y:0},svgScale:{s:1},svg:eF}};function e5(e){let{a:n,b:t,c:l,d:r}=e,a=new DOMMatrixReadOnly([n,t,l,r,0,0]).transformPoint({x:1,y:0});return Math.atan2(a.y,a.x)/Math.PI*180}function e9(e,n){return function(e,n,t){let l=e1(e).inverse().transformPoint(t),r=e.container.width/e.container.height,a=r<1?n/r:n,i=r<1?n:n*r;return{...e,scroll:eC(e.scroll,[a,i],t.x,t.y),svgOffset:eY(e.svgOffset,[a,i]),svg:eC(e.svg,[a,i],l.x,l.y)}}(e,n,eM(e.scroll))}function e0(e,n){let t=e.scroll.width/2,l=e.scroll.height/2,r=new DOMMatrixReadOnly().translate(t,l).rotate(n).translate(-t,-l).multiply(e.content);return{...e,content:r}}function e4(e,n){let t=eP(eY(n,-1),e.scroll);return(0,ef.zG)(e,e=>({...e,scroll:eL(e.scroll,t)}),n=>(function(e,n){let t=e.content.inverse(),l={x:e.scroll.width/2,y:e.scroll.height/2},r=eA(l,eP(e.scroll,n)),a=t.transformPoint(l),i=eY(eP(t.transformPoint(r),a),-e.svgScale.s);return{...e,scroll:ek(e.scroll,n),svg:eL(e.svg,i)}})(n,ej(e.scroll)))}function e2(e){if(null===e)return!0;let n=document.querySelector(".container");if(null===n)return!1;let t=n.scrollLeft,l=n.scrollTop,r=n.scrollWidth,a=n.scrollHeight;if(null===t)return!1;let i=r-e.width,o=a-e.height;if(Math.abs(i)>1||Math.abs(o)>1)return console.log(`scroll: target ${i>0?"larger":"smaller"} than expected: target=[${r}, ${a}] vs. request=[${e.width}, ${e.height}]`),!1;let u=Math.round(-e.x),s=Math.round(-e.y);if(u<0||s<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;t!==u&&(n.scrollLeft=u),l!==s&&(n.scrollTop=s);let d=n.scrollLeft;if(Math.abs(d-u)>1)return console.log(`scroll: scrollLeft not reflected: expected=${t} vs. real=${d}`),!1;let c=n.scrollTop;return!(Math.abs(c-s)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${l} vs. real=${c}`),!1)}let e8={scroll:eF,client:{width:0,height:0},timeStamp:0},e6=new Set;e6.add(function(e){let n=e.currentTarget;null!==n&&(e8={scroll:{x:n.scrollLeft,y:n.scrollTop,width:n.scrollWidth,height:n.scrollHeight},client:{width:n.clientWidth,height:n.clientHeight},timeStamp:e.timeStamp})});let e7=(0,U.cY)({types:{events:{},context:{}},actions:{updateZoom:(0,G.a)({zoom:(e,n)=>n.zoom,z:(e,n)=>n.z}),updateRotate:(0,G.a)({}),updateSvgMatrix:(0,G.a)({svgMatrix:e=>{let{context:{layout:n}}=e;return function(e){let{content:n,svgOffset:t,svgScale:l,svg:r}=e;return new DOMMatrixReadOnly().multiply(n).translate(-t.x,-t.y).scale(1/l.s,1/l.s).translate(-r.x,-r.y)}(n)}}),updateGeoMatrix:(0,G.a)({geoMatrix:e=>{let{context:n}=e;return n.svgMatrix.multiply(s.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,G.a)({distanceRadius:e=>{let{context:{layout:n}}=e;return function(e){var n;let{container:t,svgScale:l}=e,r=Math.max(t.width,t.height)/2*l.s,a=Math.round(Math.log10(r)),i=(n=r/Math.pow(10,a-1),eK.flatMap(e=>{let t=Math.floor(n/e);return t<3||t>=10?[]:[{u:e,n:t}]}));if(i.length<1)throw Error("findDiv");let{u:o}=i[0],u=o*Math.pow(10,a-1);return{svg:u,client:u/l.s}}(n)}}),updateScroll:(0,G.a)({geoPoint:(e,n)=>{let{context:t}=e,{scroll:l,client:r}=n,a=t.geoMatrix,i={x:l.x+r.width/2,y:l.y+r.height/2};return a.transformPoint(i)},geoRange:(e,n)=>{let{context:t}=e,{scroll:l,client:r}=n,a=t.geoMatrix,i={x:l.x,y:l.y},o={x:l.x+r.width,y:l.y+r.height};return{start:a.transformPoint(i),end:a.transformPoint(o)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e3,zoom:1,z:null,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:eW,distanceRadius:{svg:0,client:0},geoRange:{start:eW,end:eW},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,G.a)({rendered:e=>{let{event:n}=e;return n.rendered},layout:e=>{let{event:n}=e;return n.layout}}),"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,X.r)(e=>{let{event:{rendered:n}}=e;return{type:"LAYOUT.DONE",rendered:n}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:n}=e;return n}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:n}=e;return n.currentScroll}}},"STYLE.MODE":{actions:(0,G.a)({mode:e=>{let{event:n}=e;return n.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:n}=e;return n.rendered},actions:(0,G.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,G.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,G.a)({animation:e=>{let{event:{animation:n}}=e;return n},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:n}=e;return!n.rendered},actions:(0,G.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,G.a)({animation:null,animating:!1}),target:"Idle"}}}}}),ne=(0,X.c)(e7,{systemId:"system-viewer1"});function nn(e){ne.send(e)}function nt(){return(0,Y.v9)(ne,e=>e.context.layout.container)}function nl(){return(0,Y.v9)(ne,e=>e.context.distanceRadius)}function nr(){nn({type:"STYLE.SCROLL",currentScroll:e8})}ne.start(),j.add(function(e,n){nn({type:"STYLE.LAYOUT",layout:e,rendered:n}),requestAnimationFrame(()=>nr())}),M.add(function(e,n,t){nn({type:"STYLE.ZOOM",zoom:n,z:t})}),L.add(function(e,n){nn({type:"STYLE.ZOOM",zoom:n,z:null})}),k.add(function(e){nn({type:"STYLE.ANIMATION",animation:e})}),O.add(function(e){nn({type:"STYLE.MODE",mode:e})});let na=function(e,n){let t=eV.provide({delays:{DURATION:500}}),l=(0,X.c)(t);return l.on("CALL",n),l.start(),{machine:t,actor:l,tick:function(){l.send({type:"TICK"})}}}(0,nr);e6.add(na.tick);let ni=(0,H.a)({context:{names:[]},on:{set:(e,n)=>{let{names:t}=n;return{names:t}}}});function no(e,n,t){let l=function(e){let n="osm_id"in e&&"string"==typeof e.osm_id?e.osm_id:"osm_way_id"in e&&"string"==typeof e.osm_way_id?e.osm_way_id:null;return null===n?null:Number(n)}(e);if(null===l)return null;let r=e.name;if(null!==r&&void 0!==t&&r.match(t))return null;let{centroid_x:a,centroid_y:i}=e;return null===a||null===i||0===n.filter(n=>n.filter(e)).length?null:{a:l+"",lonlat:{x:a,y:i}}}let nu=new Worker(new URL(t.p+t.u("469"),t.b),Object.assign({},{type:"module"},{type:void 0}));nu.onmessage=e=>{let n=e.data;"INIT.DONE"===n.type||"SEARCH.DONE"===n.type&&function(e){var n;let t=function(e,n,t){let l=function(e,n){if(void 0===e)return null;let t=n.pointMap.get(e);if(void 0!==t)return t;let l=n.lineMap.get(e);if(void 0!==l)return l;let r=n.multipolygonMap.get(e);return void 0!==r?r:null}(Number(t.address),e);if(null===l)return null;let r=l.properties,a=n.flatMap(e=>e.filter(r)?[e.getInfo(r,t.address)]:[]);return 0===a.length?null:a[0]}(s.mapMap,s.searchEntries,e);null!==t&&(n=s.mapCoord.matrix.transformPoint(e.lonlat),m.forEach(e=>e({psvg:n,info:t})))}(n.res)},nu.onerror=e=>{console.log("error",e)},nu.onmessageerror=e=>{console.log("messageerror",e)},y.add(function(e){let n=s.mapCoord.matrix.inverse().transformPoint(e);nu.postMessage({type:"SEARCH",pgeo:n})});let ns=(0,U.cY)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Idle",states:{Idle:{on:{SEARCH:{actions:(0,eG.e)(e=>{let{event:n}=e;return n}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eG.e)(e=>{let{event:n}=e;return n}),target:"Done"},"SEARCH.CANCEL":{target:"Done"}}},Done:{always:"Idle"}}}),nd=(0,X.c)(ns);function nc(e){nd.send({type:"SEARCH",psvg:e})}function ny(e){nd.send(null===e?{type:"SEARCH.CANCEL"}:{type:"SEARCH.DONE",...e})}nd.on("SEARCH",e=>{let{psvg:n}=e;y.forEach(e=>e(n))}),nd.on("SEARCH.DONE",e=>{let{psvg:n,info:t}=e;p.forEach(e=>e({psvg:n,info:t}))}),nd.start();var nm=t(4428);let np=new Map;function ng(e,n,t){(0,o.useEffect)(()=>(function(e,n,t){let l=void 0===t?document:np.get(t)??null;if(null===l)return;let r=l.querySelector(`#${e}`)??null;if(null===r||null!==r.shadowRoot)return;let a=r.attachShadow({mode:"open"});np.set(e,a),(0,nm.createRoot)(a).render(n)})(e,n,t),[e,t,n])}function nh(){return(0,I.jsxs)("g",{id:"XBus",transform:"translate(-36, -36)",children:[(0,I.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,I.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,I.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,I.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,I.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})}function n_(){return(0,I.jsxs)("g",{id:"XDrinkingFountain",children:[(0,I.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,I.jsxs)("g",{fill:"white",stroke:"none",children:[(0,I.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,I.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,I.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,I.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,I.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,I.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,I.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,I.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,I.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,I.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,I.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,I.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,I.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,I.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,I.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,I.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,I.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,I.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})}function nf(){return(0,I.jsxs)("g",{id:"XElevator",transform:"translate(-36, -36)",children:[(0,I.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,I.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,I.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,I.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,I.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,I.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,I.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,I.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,I.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,I.jsx)("use",{x:"8.5",href:"#_person2"}),(0,I.jsx)("use",{x:"17",href:"#_person2"})]})}function nx(){return(0,I.jsxs)("g",{id:"XEscalator",transform:"translate(-36, -36)",children:[(0,I.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,I.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,I.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,I.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})}function nw(){return(0,I.jsxs)("g",{id:"XInformation",transform:"translate(-36, -36)",children:[(0,I.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,I.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,I.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,I.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})}function nv(){return(0,I.jsxs)("g",{id:"XParking",children:[(0,I.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,I.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})}function nb(){return(0,I.jsxs)("g",{id:"XStairs",transform:"translate(-36, -36)",children:[(0,I.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,I.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})}function nS(){return(0,I.jsxs)("g",{id:"XToilets",transform:"translate(-36,-36)",children:[(0,I.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,I.jsxs)("g",{fill:"white",stroke:"none",children:[(0,I.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,I.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,I.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,I.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,I.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})}function nE(){return(0,I.jsx)("g",{className:"assets",children:(0,I.jsx)(nF,{})})}function nF(){return(0,I.jsxs)("g",{className:"symbols",children:[(0,I.jsx)(nh,{}),(0,I.jsx)(n_,{}),(0,I.jsx)(nf,{}),(0,I.jsx)(nx,{}),(0,I.jsx)(nw,{}),(0,I.jsx)(nv,{}),(0,I.jsx)(nb,{}),(0,I.jsx)(nS,{})]})}function nj(e){return e>.5?-1:+(e<.5)}function nM(e){return e<.3?1:e>.7?-1:0}function nL(e,n,t,l){let r=n/2,a=t/2,i=n/20,o=i/2,u={x:-r*e.h,y:-a*e.v},s=0===e.h||0===e.v?{x:-(r+l)*e.h,y:-(a+l)*e.v}:{x:-(r+l*Math.cos(e.th))*e.h,y:-(a+l*Math.sin(e.th))*e.v},[d,c]=0===e.h?[{x:-o,y:0},{x:o,y:0}]:0===e.v?[{x:0,y:-o},{x:0,y:o}]:e.th<Math.PI/4?[{x:0,y:0},{x:0,y:i*e.v}]:[{x:0,y:0},{x:i*e.h,y:0}],y=eA(u,d),m=eA(u,c);return{p:u,q:s,a:y,b:m}}function nk(e){return{open:e,animating:!1}}function nO(e){return e.open||e.animating?null:{open:!0,animating:!0}}function nz(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function n$(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function nT(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function nD(e){let{open:n,animating:t}=e;return n||t}Object.entries({bus:"#XBus",elevator:"#XElevator",escalator:"#XEscalator",information:"#XInformation",parking:"#XParking",stairs:"#XStairs",toilets:"#XToilets",water:"#XDrinkingFountain"});let nC={p:eW,psvg:eW,layout:eJ,info:{title:""}};function nN(e){return function(n,t){let l=n[t],r=e(l);return n[t]=null===r?l:r,n}}let nR=(0,U.cY)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:n}}=e;return nD(n.header)},isDetailVisible:e=>{let{context:{m:n}}=e;return nD(n.detail)},animationEnded:e=>{let{context:{animationEnded:n}}=e;return n.header&&n.detail}},actions:{startCancel:(0,G.a)({canceling:()=>!0}),endCancel:(0,G.a)({canceling:()=>!1}),open:(0,G.a)({m:(e,n)=>{let{context:{m:t}}=e,{part:l}=n;return nN(nO)(t,l)}}),close:(0,G.a)({m:(e,n)=>{let{context:{m:t}}=e,{part:l}=n;return nN(n$)(t,l)}}),handle:(0,G.a)({m:(e,n)=>{let{context:{m:t}}=e,{part:l}=n;return nN(t[l].open?nz:nT)(t,l)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:n}=e;return{...n,all:{open:!1,animating:!1},canceling:!1,detail:nC,m:{header:nk(!0),detail:nk(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,G.a)({detail:e=>{let{event:{psvg:n,info:t,layout:l}}=e;return{psvg:n,p:e1(l).transformPoint(n),info:t,layout:l}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,X.n)("animationEnded")},{actions:(0,G.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,X.n)("isDetailVisible")},{actions:(0,G.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,X.n)("animationEnded")},{actions:(0,G.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,X.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,G.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,eG.e)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,G.a)({animationEnded:e=>{let{context:n}=e;return{...n.animationEnded,header:!0}}}),(0,X.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,G.a)({animationEnded:e=>{let{context:n}=e;return{...n.animationEnded,detail:!0}}}),(0,X.r)({type:"DONE"})]}}}}});function nA(){return(0,Y.v9)(nI,e=>e.context.m.header)}function nP(){return(0,Y.v9)(nI,e=>e.context.m.detail)}let nI=(0,X.c)(nR);nI.on("CLOSE.DONE",function(){x.forEach(e=>e())}),nI.start();function nH(e){return(0,I.jsxs)("div",{className:"balloon",children:[(0,I.jsx)(nZ,{...e}),e.children,(0,I.jsx)("style",{children:nW})]})}g.add(function(e,n,t){nI.send({type:"DETAIL",psvg:e,info:n,layout:t})}),_.add(function(e){nI.send({type:e?"OPEN":"CANCEL"})}),f.add(function(){nI.send({type:"CANCEL"})}),x.add(function(){requestAnimationFrame(()=>(function(){let e=np.get("detail");if(void 0===e)return;let n=e.querySelector(".detail");null!==n&&n.scroll(0,0)})())});let nW=`
.balloon,
.balloon-svg {
  ${q}
  ${eo}
  z-index: 10;
  will-change: opacity, transform;
}
`;function nZ(e){let n=e._hv;if(null===n)return(0,I.jsx)("svg",{});let{viewBox:t,width:l,height:r,fg:a,bg:i}=function(e,n){let{bw:t,bh:l,ll:r,d:a,width:i,height:o}=n,u=eE(-i/2,-i/2,i,o),{body:s,leg:d}=function(e,n,t,l){let r=n/2,a=t/2,i=`
m${-r},${-a}
h${n}
v${t}
h${-n}
z
`,{p:o,q:u,a:s,b:d}=nL(e,n,t,l),c=eP(u,s),y=eP(d,u),m=eP(o,d);return{body:i,leg:`
m${s.x},${s.y}
l${c.x},${c.y}
l${y.x},${y.y}
l${m.x},${m.y}
z
`}}(e,t,l,r);return{viewBox:u,width:i,height:o,bg:`M${a},${a}`+s+`M${a},${a}`+d,fg:"M0,0"+s+"M0,0"+d}}(n,e._size);return(0,I.jsxs)("svg",{className:"balloon-svg",viewBox:function(e){let{x:n,y:t,width:l,height:r}=e;return`${n} ${t} ${l} ${r}`}(function(e,n){let{x:t,y:l,width:r,height:a}=e;return{x:n(t),y:n(l),width:n(r),height:n(a)}}(t,function(e){return Math.round(100*e)/100})),width:l,height:r,children:[(0,I.jsx)("path",{className:"bg",d:i}),(0,I.jsx)("path",{className:"fg",d:a}),(0,I.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function nY(e){let{_p:n,_hv:t,_size:l,_leg:r}=e,a=nP(),i=null!==n&&null!==t&&nD(a)?function(e,n,t,l,r){let{open:a,animating:i}=e,{bw:o,bh:u,width:s,height:d}=l,c=eP(r.q,r.p),y={x:(o/2+Math.abs(c.x))*t.h,y:(u/2+Math.abs(c.y))*t.v};if(i){let[e,t]=a?[0,1]:[1,0],[l,r]=a?[0,1]:[1,0],[i,o]=a?["0px","var(--dp-x)"]:["var(--dp-x)","0px"],[u,c]=a?["0px","var(--dp-y)"]:["var(--dp-y)","0px"],m=a?ed:ec;return`
.detail,
.balloon {
  --q-x: ${n.x}px;
  --q-y: ${n.y}px;
  --dp-x: ${y.x}px;
  --dp-y: ${y.y}px;
  --oa: ${e};
  --ob: ${t};
  --sa: ${l};
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
  --q-x: ${n.x}px;
  --q-y: ${n.y}px;
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
`}(a,n,t,l,r):".balloon, .detail { visibility: hidden; }";return(0,I.jsx)("style",{children:i})}function nU(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let nG=(0,U.cY)({types:{},actions:{getScroll:(0,G.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let n=e.scrollLeft,t=e.scrollTop,l=e.scrollWidth,r=e.scrollHeight;return e.scrollLeft=Number(n)+1,e.scrollLeft=Number(n),eE(n,t,l,r)}return null})()}),syncScroll:(e,n)=>{let{pos:t}=n;return e2(t)}},actors:{syncScrollLogic:(0,eU.p4)(async e=>{let{input:n}=e;if(null===n)throw Error("input is null");if(!e2(n))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:n}=e;return{pos:n.pos}}}]},GET:{actions:["getScroll",(0,eG.e)(e=>{let{context:{scroll:n}}=e;return{type:"SCROLL.GET.DONE",scroll:n}})]},SYNCSYNC:{actions:(0,G.a)({dest:e=>{let{event:n}=e;return n.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:n}=e;return n.dest},onDone:{actions:["getScroll",(0,eG.e)(e=>{let{context:{scroll:n}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:n}}),(0,G.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),nX={slideDoneCbs:new Set,getDoneCbs:new Set,syncSyncDoneCbs:new Set},nq=(0,X.c)(nG,{systemId:"system-scroll1"});function nB(e){nq.send(e)}nq.on("SCROLL.SLIDE.DONE",e=>nX.slideDoneCbs.forEach(n=>n(e))),nq.on("SCROLL.GET.DONE",e=>nX.getDoneCbs.forEach(n=>n(e))),nq.on("SCROLL.SYNCSYNC.DONE",e=>nX.syncSyncDoneCbs.forEach(n=>n(e)));let nK="panning",nV=(0,U.cY)({types:{},guards:{shouldReset:(e,n)=>{let{ev:t}=n;return"r"===t.key},shouldRecenter:(e,n)=>{let{ev:t}=n;return"c"===t.key},shouldRotate:(e,n)=>{let{ev:t}=n;return"t"===t.key},shouldZoom:(e,n)=>{let{ev:t}=n;return 0!==nU(t.key)},isTouching:e=>{let{context:{touching:n}}=e;return n},isHoming:e=>{let{context:{homing:n}}=e;return n},isZoomWanted:e=>{let{context:{want_animation:n}}=e;return"zoom"===n},isRotateWanted:e=>{let{context:{want_animation:n}}=e;return"rotate"===n},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>s.isMapRendered(),isUiRendered:()=>s.isUiRendered()},actions:{syncScroll:e=>{let{context:{layout:n}}=e;return nB({type:"SYNC",pos:n.scroll})},syncScrollSync:e=>{let{context:{layout:n}}=e;return nB({type:"SYNCSYNC",pos:n.scroll})},getScroll:()=>nB({type:"GET"}),zoomKey:(0,G.a)({z:(e,n)=>{let{ev:t}=n;return nU(t.key)}}),zoomHome:(0,G.a)({z:()=>null,zoom:()=>1,homing:()=>!0}),zoomEvent:(0,G.a)({z:(e,n)=>{let{z:t}=n;return t},cursor:(e,n)=>{let{context:{cursor:t}}=e,{p:l}=n;return null===l?t:l}}),startZoom:(0,G.a)({animation:e=>{let{context:{layout:n,cursor:t,z:l}}=e;return null===l?function(e,n){let t=eM(n.config.svg),l=e1(e).transformPoint(t),r=n.svgScale.s/e.svgScale.s,a=eM(e.container),i=new DOMMatrixReadOnly().translate(a.x,a.y).scale(1/r).translate(-l.x,-l.y);return{move:null,zoom:{svg:n.svg,svgScale:n.svgScale,q:i,o:null},rotate:null}}(n,function(e){let{config:n,content:t}=e,l=eQ(n),r=e5(t);return e0({config:n,...l},r)}(n)):function(e,n,t){var l,r;let a=e1(e).inverse().transformPoint(t),i=1/(r=n,Math.pow(s.zoomFactor,r)),o=new DOMMatrixReadOnly().scale(1/i,1/i);return{move:null,zoom:{svg:eC(e.svg,i,a.x,a.y),svgScale:(l=e.svgScale,"x"in l?{x:l.x*i,y:l.y*i}:{s:l.s*i}),q:o,o:t},rotate:null}}(n,l,t)}}),startRotate:(0,G.a)({animation:e=>{let{context:{layout:n,cursor:t}}=e;return{move:null,zoom:null,rotate:{deg:90,q:new DOMMatrixReadOnly().rotate(90),o:t}}}}),updateZoom:(0,G.a)({prevLayout:e=>{let{context:{layout:n}}=e;return n},layout:e=>{let{context:{layout:n,animation:t}}=e;return null===t?n:(0,ef.zG)(n,e=>{var n;return null===t.move?e:(n=t.move.move,{...e,scroll:ek(e.scroll,n)})},e=>{var n,l;return null===t.zoom?e:(n=t.zoom.svg,l=t.zoom.svgScale,{...e,svg:ej(n),svgScale:l})},e=>null===t.rotate?e:e0(e,t.rotate.deg))}}),endZoom:(0,G.a)({prevLayout:null,want_animation:null,animation:null,z:null,zoom:e=>{let{context:{z:n,zoom:t}}=e;return null===n?t:t*Math.pow(2,n)}}),endRotate:(0,G.a)({prevLayout:null,want_animation:null,animation:null}),wantZoom:(0,G.a)({want_animation:"zoom"}),wantRotate:(0,G.a)({want_animation:"rotate"}),syncAnimation:e=>{var n,t,l,r,a,i,o;let{context:{animation:u}}=e,s=(null==u||null==(n=u.move)?void 0:n.q)??(null==u||null==(t=u.zoom)?void 0:t.q)??(null==u||null==(l=u.rotate)?void 0:l.q)??null,d=(null==u||null==(r=u.move)?void 0:r.o)??(null==u||null==(a=u.zoom)?void 0:a.o)??(null==u||null==(i=u.rotate)?void 0:i.o)??null;null!==s&&(o={matrix:s,origin:d},k.forEach(e=>e(o)))},syncLayout:e=>{let{context:{layout:n,rendered:t}}=e;j.forEach(e=>e(n,t))},resetCursor:(0,G.a)({cursor:e=>{let{context:{layout:n}}=e;return eM(n.container)}}),cursor:(0,G.a)({cursor:(e,n)=>{let{ev:t}=n;return{x:t.pageX,y:t.pageY}}}),setModeToPanning:(0,G.a)({mode:nK,cursor:e=>{let{context:{layout:n}}=e;return eM(n.container)}}),setModeToTouching:(0,G.a)({mode:"touching"}),setModeToLocked:(0,G.a)({mode:"locked"}),startTouching:(0,G.a)({touching:!0}),endTouching:(0,G.a)({touching:!1}),notifyTouching:(0,X.r)({type:"TOUCHING"}),notifyTouchingDone:(0,X.r)({type:"TOUCHING.DONE"}),startAnimating:(0,G.a)({animating:()=>!0}),stopAnimating:(0,G.a)({animating:()=>!1}),resizeLayout:(0,G.a)({rendered:!1,origLayout:(e,n)=>{let{layout:t}=n;return t},layout:(e,n)=>{let{layout:t}=n;return e9(t,9)}}),updateLayoutFromScroll:(0,G.a)({layout:e=>{let{context:n}=e,{scroll:t}=e8;return e4(n.layout,t)}}),notifyZoomStart:(0,eG.e)(e=>{let{context:{layout:n,zoom:t,z:l}}=e;return{type:"ZOOM.START",layout:n,zoom:t,z:null===l?0:l}}),notifyZoomEnd:(0,eG.e)(e=>{let{context:{layout:n,zoom:t}}=e;return{type:"ZOOM.END",layout:n,zoom:t}}),notifySearch:(0,eG.e)(e=>{let{context:n}=e,{scroll:t}=e8;return{type:"SEARCH",psvg:e1(e4(n.layout,t)).inverse().transformPoint(n.cursor)}}),notifySearchDone:(0,X.r)({type:"SEARCH.DONE"}),notifySearchEndDone:(0,eG.e)((e,n)=>{let{context:t}=e,{res:l}=n,{scroll:r}=e8,a=e4(t.layout,r);return{type:"SEARCH.END.DONE",psvg:l.psvg,info:l.info,layout:a}}),endHoming:(0,G.a)({cursor:e=>{let{context:n}=e;return eM(n.origLayout.container)},layout:e=>{let{context:n}=e;return e0(e9(n.origLayout,9),e5(n.layout.content))},homing:()=>!1}),notifyMode:(0,eG.e)(e=>{let{context:{mode:n}}=e;return{type:"MODE",mode:n}}),notifyLock:(0,eG.e)({type:"LOCK",ok:!0}),setRendered:(0,G.a)({rendered:!0}),notifySwitch:(0,eG.e)((e,n)=>{let{fidx:t}=n;return{type:"SWITCH",fidx:t}}),notifySwitchDone:(0,eG.e)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"Resizing",context:{origLayout:e3,layout:e3,prevLayout:null,cursor:eM(e3.container),z:null,zoom:1,homing:!1,want_animation:null,animation:null,mode:nK,touching:!1,animating:!1,rendered:!1},on:{"TOUCH.LOCK":{actions:["startTouching","notifyTouching","setModeToTouching","notifyMode"]},"TOUCH.UNLOCK":{actions:["endTouching","notifyTouchingDone","setModeToPanning","notifyMode"]},"SEARCH.LOCK":{actions:["notifyLock","setModeToLocked","notifyMode"]},"SEARCH.UNLOCK":{actions:["setModeToPanning","notifyMode","notifySearchDone"]}},states:{Resizing:{initial:"WaitingForResizeRequest",onDone:"Appearing",states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:n}=e;return n}},target:"WaitingForMapRendered"}}},WaitingForWindowStabilized:{id:"Resizing-WaitingForWindowStabilized",after:{500:{target:"WaitingForMapRendered"}}},WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,X.a)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"syncLayout",on:{RENDERED:{actions:["setRendered","syncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"syncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Done"}}},Done:{type:"final"}}},Appearing:{on:{"ANIMATION.END":{target:"Panning"}}},Panning:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:n}=e;return n}}],target:"#Resizing-WaitingForWindowStabilized"},"LAYOUT.RESET":{actions:["zoomHome","wantZoom"],target:"Zooming"},"KEY.UP":[{guard:{type:"shouldZoom",params:e=>{let{event:n}=e;return{ev:n.ev}}},actions:[{type:"zoomKey",params:e=>{let{event:n}=e;return{ev:n.ev}}},"wantZoom"],target:"Zooming"},{guard:{type:"shouldRotate",params:e=>{let{event:n}=e;return{ev:n.ev}}},actions:"wantRotate",target:"Zooming"}],CLICK:{guard:()=>s.searchEntries.length>0,actions:[{type:"cursor",params:e=>{let{event:n}=e;return{ev:n.ev}}}],target:"Searching"},SWITCH:{actions:{type:"notifySwitch",params:e=>{let{event:n}=e;return n}},target:"Switching"},CONTEXTMENU:{target:"Recentering"},ROTATE:{actions:"wantRotate",target:"Zooming"},RECENTER:{target:"Recentering"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:e=>{let{event:{z:n,p:t}}=e;return{z:n,p:t}}},"wantZoom"],target:"Zooming"},TOUCHING:{target:"Touching"}}},Touching:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Waiting"}}},Waiting:{on:{"TOUCHING.DONE":{target:"Done"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:e=>{let{event:{z:n,p:t}}=e;return{z:n,p:t}}},"wantZoom"],target:"#Zooming"}}},Done:{type:"final"}}},Searching:{initial:"Starting",onDone:"Panning",states:{Starting:{always:{actions:"notifySearch",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"notifySearchEndDone",params:e=>{let{event:n}=e;return n}},target:"WaitingForSearchUnlock"}}},WaitingForSearchUnlock:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Panning",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"notifySwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","syncLayout","syncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:[{guard:"isZoomWanted",actions:["updateLayoutFromScroll","startZoom","updateZoom","notifyZoomStart"],target:"Animating"},{guard:"isRotateWanted",actions:["updateLayoutFromScroll","startRotate","updateZoom","notifyZoomStart"],target:"Animating"}]},Animating:{initial:"Starting",onDone:"Done",states:{Starting:{always:{actions:["startAnimating","syncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":[{guard:"isZoomWanted",actions:["endZoom","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"},{guard:"isRotateWanted",actions:["endRotate","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"}]}},Homing:{always:[{guard:"isHoming",actions:["endHoming","syncLayout","syncScroll"],target:"Done"},{target:"Done"}]},Done:{type:"final"}}},Done:{type:"final"}}}}});function nJ(e){nQ.send(e)}let nQ=(0,X.c)(nV,{systemId:"system-viewer1"});nQ.on("SEARCH",e=>{let{psvg:n}=e;c.forEach(e=>e(n))}),nQ.on("SEARCH.END.DONE",e=>{let{psvg:n,info:t,layout:l}=e;g.forEach(e=>e(n,t,l)),h.forEach(e=>e(n,t,l))}),nQ.on("LOCK",e=>{let{ok:n}=e;_.forEach(e=>e(n))}),nQ.on("ZOOM.START",e=>{let{layout:n,zoom:t,z:l}=e;M.forEach(e=>e(n,t,l))}),nQ.on("ZOOM.END",e=>{let{layout:n,zoom:t}=e;return P(n,t)}),nQ.on("LAYOUT",e=>{let{layout:n}=e;return P(n,1)}),nQ.on("MODE",e=>{let{mode:n}=e;O.forEach(e=>e(n))}),nQ.on("SWITCH",e=>{let{fidx:n}=e;v.forEach(e=>e(n))}),nQ.on("SWITCH.DONE",()=>void S.forEach(e=>e())),nQ.start(),w.add(function(e){nJ({type:"SWITCH",fidx:e})}),b.add(function(){nJ({type:"SWITCH.DONE"})}),p.add(function(e){nQ.send({type:"SEARCH.END",res:e})}),h.add(function(e){nQ.send({type:"SEARCH.LOCK",psvg:e})}),x.add(function(){nQ.send({type:"SEARCH.UNLOCK"})}),F.add(function(e,n){nJ({type:"RESIZE",layout:e,force:n})}),nX.getDoneCbs.add(function(e){null!==e.scroll&&nJ({type:"SCROLL.GET.DONE",scroll:e.scroll})}),nX.syncSyncDoneCbs.add(function(e){null!==e.scroll&&nJ({type:"SCROLL.SYNCSYNC.DONE",scroll:e.scroll})});let n1=!1,n3=!1;function n5(e,n){null==n||n.preventDefault,(null==n?void 0:n.stopPropagation)===!1||e.ev.stopPropagation(),nJ(e)}function n9(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let n=e.current;if(n)return n.addEventListener("wheel",n0),()=>{n.removeEventListener("wheel",n0)}},[e]),e}function n0(e){let n=e.currentTarget;n3&&n instanceof HTMLDivElement&&n.scrollWidth===n.clientWidth&&n.scrollHeight===n.clientHeight&&e.preventDefault()}function n4(e){let{_detail:n}=e,t=n9();return(0,I.jsxs)("div",{ref:t,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void nI.send(e)},children:[s.renderInfo&&!function(e){let n=Object.values(e.info);return 1===n.length&&"string"==typeof n[0]&&""===n[0]}(n)&&s.renderInfo({info:n.info}),(0,I.jsx)("style",{children:n2})]})}O.add(function(e){n1="locked"===e,n3="locked"===e}),M.add(function(){n3=!0}),L.add(function(){n3=!1}),T.add(function(){nJ({type:"LAYOUT.RESET"})}),D.add(function(){nJ({type:"RECENTER"})}),C.add(function(){nJ({type:"ROTATE"})}),$.add(function(){nJ({type:"ZOOM.ZOOM",z:-1,p:null})}),z.add(function(){nJ({type:"ZOOM.ZOOM",z:1,p:null})}),E.add(function(){nJ({type:"RENDERED"})});let n2=`
.detail {
  ${q}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${eu}
  ${en}
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
`;function n8(){return ng("detail",(0,I.jsx)(n6,{}),"ui"),(0,I.jsx)("div",{id:"detail"})}function n6(){return(0,I.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,I.jsx)(n7,{}),(0,I.jsx)(te,{})]})}function n7(){let e=(0,Y.v9)(nI,e=>e.context.detail),n=function(e){let n=e.p,t=e.layout,l=function(e,n){let{x:t,y:l}=n,r=e.width/e.height,a={x:t/e.width,y:l/e.height},i=r>1?nj(a.x):nM(a.x);return{h:i,v:r>1?nM(a.y):nj(a.y),th:Math.atan2(e.height,e.width)}}(e.layout.container,n),r=t.container.width,a=t.container.height,i=function(e,n){let t=.01*Math.min(e,n),l=50*t,r=50*t,a=10*t,i=l/100;return{bw:l,bh:r,ll:a,d:i,width:l+2*a+2*i,height:r+2*a+2*i}}(r,a),o=nL(l,i.bw,i.bh,i.ll);return{_p:n,_hv:l,_W:r,_H:a,_size:i,_leg:o}}(e);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(nH,{...n}),(0,I.jsx)(n4,{_detail:e}),(0,I.jsx)(nY,{...n})]})}function te(){return(0,I.jsx)("svg",{id:"ui-svg-defs",children:(0,I.jsx)("defs",{children:(0,I.jsx)(nE,{})})})}function tn(){return ng("footer",(0,I.jsx)(tt,{}),"ui"),(0,I.jsx)("div",{id:"footer"})}function tt(){let e=s;return(0,I.jsxs)("div",{className:"ui-content footer",children:[(0,I.jsx)("p",{children:e.copyright}),(0,I.jsxs)("style",{children:[tl,(0,I.jsx)(tr,{})]})]})}let tl=`
.footer {
  ${K}
  ${el}
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
`;function tr(){let{open:e,animating:n}=nA();if(n){let[n,t]=e?[0,1]:[1,0],l=e?ed:ec;return(0,I.jsx)(I.Fragment,{children:`
.footer {
  --duration: 300ms;
  --timing: ${l};
  --a: ${n};
  --b: ${t};
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
`})}return(0,I.jsx)(I.Fragment,{children:`
.footer {
  --b: ${+!!e};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}let ta=void 0;function ti(e){return Math.round(100*e)/100}function to(e){return Math.round(1e7*e)/1e7}function tu(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("g",{id:"measure",children:(0,I.jsx)(tc,{})})})}function ts(){let{svg:e}=nl();return(0,I.jsxs)("div",{id:"distance",children:[(0,I.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),tg.map(n=>(0,I.jsxs)(o.Fragment,{children:[(0,I.jsxs)("p",{id:`distance-x-${n+1}`,className:"distance distance-x",children:[e*(n+1),"m"]}),(0,I.jsxs)("p",{id:`distance-y-${n+1}`,className:"distance distance-y",children:[e*(n+1),"m"]})]},n)),(0,I.jsx)("style",{children:(0,I.jsx)(tp,{})})]})}function td(){let e=(0,Y.v9)(ne,e=>e.context.geoPoint),n=e.x>0?"E":"W",t=e.y>0?"N":"S",l=`${n} ${to(Math.abs(e.x))}`,r=`${t} ${to(Math.abs(e.y))}`;return(0,I.jsxs)("div",{id:"coordinate",children:[(0,I.jsx)("p",{id:"longitude",children:l}),(0,I.jsx)("p",{id:"latitude",children:r}),(0,I.jsx)("style",{children:(0,I.jsx)(tm,{})})]})}function tc(){let{width:e,height:n}=nt(),{client:t}=nl(),l=`M0,${n/2} h${e}`,r=`M${e/2},0 v${n}`,a=tg.map(l=>(function(e){let{width:n,height:t,r:l}=e;return`M${n/2},${t/2} m-${l},0 a${l},${l} 0,1,0 ${2*l},0 a${l},${l} 0,1,0 -${2*l},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:n,r:t*(l+1)}));return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:l}),(0,I.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),a.map((e,n)=>(0,I.jsx)("path",{id:`measure-ring-${n+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},n))]})}function ty(){let{open:e,animating:n}=nA(),[t,l]=e?[0,1]:[1,0],r=n?`
.guides {
  --timing: ${e?ed:ec};
  --duration: 300ms;
  --oa: ${t};
  --ob: ${l};
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
  --ob: ${l};
  opacity: var(--ob);
  will-change: opacity;
}
`;return(0,I.jsx)(I.Fragment,{children:r})}function tm(){let{width:e,height:n}=nt(),t=`
#distance,
#coordinate {
  ${q}
  width: ${e}px;
  height: ${n}px;
}
`,l=`
#longitude {
  ${V}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-n/2}px) scale(0.5);
}
`,r=`
#latitude {
  ${K}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-n/2}px) scale(0.5);
}
`;return(0,I.jsxs)(I.Fragment,{children:[t,l,r]})}function tp(){let{width:e,height:n}=nt(),{client:t}=nl(),l=`
.distance {
  ${q}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,r=`
#distance-origin {
  transform: translate(${e/2}px, ${n/2}px) scale(0.5);
}
`,a=tg.map(l=>`
#distance-x-${l+1} {
  transform: translate(${e/2+t*(l+1)}px, ${n/2}px) scale(0.5);
}
`),i=tg.map(l=>`
#distance-y-${l+1} {
  transform: translate(${e/2}px, ${n/2+t*(l+1)}px) scale(0.5);
}
`);return(0,I.jsxs)(I.Fragment,{children:[r,l,a,i]})}let tg=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function th(){return ng("guides",(0,I.jsx)(t_,{}),"ui"),(0,I.jsx)("div",{id:"guides"})}function t_(){return s.mapCoord.matrix.isIdentity?(0,I.jsx)(I.Fragment,{}):(0,I.jsxs)("div",{className:"ui-content guides",children:[(0,I.jsx)("svg",{className:"guides",children:(0,I.jsx)(tu,{})}),(0,I.jsx)(ts,{}),(0,I.jsx)(td,{}),(0,I.jsxs)("style",{children:[tf,(0,I.jsx)(ty,{})]})]})}let tf=`
.guides {
  ${q}
  ${et}
  ${eo}
  z-index: 2;
}

text {
  ${ea}
}
`;function tx(){let{fidx:e,fidxToOnClick:n}=eg(),t=s.floorsConfig;return void 0===t||t.floors.length<2?(0,I.jsx)(I.Fragment,{}):(0,I.jsxs)("div",{className:"floors",children:[(0,I.jsx)("ul",{className:"floor-list",children:t.floors.map((t,l)=>{let{name:r}=t;return(0,I.jsx)("li",{className:`floor-item ${tS(l===e)}`,onClick:n(l),children:r},l)})}),(0,I.jsx)("style",{children:tw})]})}let tw=`
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
`;function tv(){let{fidx:e}=eg(),n=s.floorsConfig;return void 0===n||n.floors.length<2?(0,I.jsx)(I.Fragment,{}):(0,I.jsxs)("div",{children:[n.floors.map((n,t)=>(0,I.jsx)("h2",{className:`floor-name ${tS(t===e)}`,children:n.name},t)),(0,I.jsx)("style",{children:tb})]})}let tb=`
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
`;function tS(e){return e?"selected":"unselected"}function tE(){return ng("header",(0,I.jsx)(tF,{}),"ui"),(0,I.jsx)("div",{id:"header"})}function tF(){let e=s;return(0,I.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void nI.send(e)},children:[(0,I.jsx)("h1",{className:"title",onClick:()=>void T.forEach(e=>e()),children:e.title}),(0,I.jsx)(tv,{}),(0,I.jsxs)("style",{children:[tj,(0,I.jsx)(tM,{})]})]})}let tj=`
.header {
  ${q}
  ${el}
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

`;function tM(){let{open:e,animating:n}=nA();if(n){let[n,t]=e?[0,1]:[1,0],l=e?ed:ec;return(0,I.jsx)(I.Fragment,{children:`
.header {
  --timing: ${l};
  --duration: 300ms;
  --a: ${n};
  --b: ${t};
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
`})}return(0,I.jsx)(I.Fragment,{children:`
.header {
  --b: ${+!!e};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function tL(){return ng("left",(0,I.jsx)(tk,{}),"ui"),(0,I.jsx)("div",{id:"left"})}function tk(){return(0,I.jsxs)("div",{className:"ui-content left bottom",children:[(0,I.jsx)(tx,{}),(0,I.jsx)("style",{children:tO})]})}let tO=`
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
`;function tz(){return ng("right",(0,I.jsx)(t$,{}),"ui"),(0,I.jsx)("div",{id:"right"})}function t$(){return(0,I.jsxs)("div",{className:"ui-content right bottom",children:[(0,I.jsx)(tD,{}),(0,I.jsx)("style",{children:tT})]})}let tT=`
.right {
  ${B}
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
`;function tD(){return(0,I.jsxs)("div",{className:"zoom",children:[(0,I.jsx)(tN,{}),(0,I.jsx)(tR,{}),(0,I.jsx)(tA,{}),(0,I.jsx)(tP,{}),(0,I.jsx)(tI,{}),(0,I.jsx)(tH,{}),(0,I.jsxs)("style",{children:[tC,(0,I.jsx)(tW,{})]})]})}let tC=`
.zoom {
  font-size: large;
  margin: 0;
  ${el}
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
`;function tN(){return(0,I.jsx)("div",{className:"zoom-item fullscreen",onClick:()=>void R.forEach(e=>e()),children:(0,I.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,I.jsx)("path",{d:tK})})})}function tR(){return s.mapCoord.matrix.isIdentity?(0,I.jsx)(I.Fragment,{}):(0,I.jsx)("div",{className:"zoom-item position",onClick:()=>void N.forEach(e=>e()),children:(0,I.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,I.jsx)("path",{d:tB})})})}function tA(){return(0,I.jsx)("div",{className:"zoom-item recenter",onClick:()=>void D.forEach(e=>e()),children:(0,I.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,I.jsx)("path",{d:tG})})})}function tP(){return(0,I.jsx)("div",{className:"zoom-item rotate",onClick:()=>void C.forEach(e=>e()),children:(0,I.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,I.jsx)("path",{d:tU})})})}function tI(){return(0,I.jsx)("div",{className:"zoom-item zoom-out",onClick:()=>void $.forEach(e=>e()),children:(0,I.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,I.jsx)("path",{d:tY})})})}function tH(){return(0,I.jsx)("div",{className:"zoom-item zoom-in",onClick:()=>void z.forEach(e=>e()),children:(0,I.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,I.jsx)("path",{d:tZ})})})}function tW(){let{open:e,animating:n}=nA();if(n){let[n,t]=e?[0,1]:[1,0],l=e?ed:ec;return(0,I.jsx)(I.Fragment,{children:`
.right {
  --timing: ${l};
  --a: ${n};
  --b: ${t};
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
`})}return(0,I.jsx)(I.Fragment,{children:`
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
`})}let tZ=`
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
`,tY=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`,tU=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`,tG=`
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
`,tX=3*Math.sqrt(2),tq=tX+6,tB=`
M 0,0
m 0,${tq/2}
l -3,-3
a ${tX},${tX} 0,1,1 6,0
z
m 0,${-tq+tX+tX/2}
a ${tX/2},${tX/2} 0,1,0 0,${-tX}
a ${tX/2},${tX/2} 0,1,0 0,${tX}
`.replaceAll(/([.]\d\d)\d*/g,"$1"),tK=`
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
`;function tV(){return ng("shadow",(0,I.jsx)(tJ,{}),"ui"),(0,I.jsx)("div",{id:"shadow"})}function tJ(){let e=n9();return(0,I.jsx)("div",{ref:e,className:"ui-content shadow",onClick:()=>void f.forEach(e=>e()),children:(0,I.jsxs)("style",{children:[tQ,(0,I.jsx)(t1,{})]})})}let tQ=`
.shadow {
  ${q}
  ${et}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function t1(){let{open:e,animating:n}=nP(),t=(0,Y.v9)(ne,e=>e.context.animating);if(!n)return e?(0,I.jsx)(I.Fragment,{children:`
.shadow {
  opacity: 0.3;
  will-change: opacity;
}
`}):t?(0,I.jsx)(I.Fragment,{children:".shadow { display: initial; opacity: 0; }"}):(0,I.jsx)(I.Fragment,{children:".shadow { display: none; }"});{let[n,t]=e?[0,.3]:[.3,0],l=e?ed:ec;return(0,I.jsx)(I.Fragment,{children:`
.shadow {
  --duration: 400ms;
  --timing: ${l};
  --a: ${n};
  --b: ${t};
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
`})}}function t3(){return ng("ui",(0,I.jsx)(t5,{})),(0,I.jsx)("div",{id:"ui"})}function t5(){return(0,I.jsxs)("div",{className:"ui",children:[(0,I.jsx)(tV,{}),(0,I.jsx)(tE,{}),(0,I.jsx)(tn,{}),(0,I.jsx)(tL,{}),(0,I.jsx)(tz,{}),(0,I.jsx)(th,{}),(0,I.jsx)(n8,{})]})}function t9(){var e,n,t;let l=(null==(t=document.querySelector("#ui"))||null==(n=t.shadowRoot)||null==(e=n.children)?void 0:e.length)??null;return null!==l&&l>0}var t0=t(8544);let t4=eh.pR(eH),t2=t0.YH(eI.Df),t8=t0.qO(),t6=t0.uZ(eI.Eq,eh.jG());function t7(e){return(0,ef.zG)(e,t0.VO(t4),eh.DZ(e=>0===e.length?e_.YP:e_.G(e[0])))}function le(e){return e.length<2?null:function(e){let n=0===e.length?null:e.reduce((e,n)=>({x:e.x+n.x,y:e.y+n.y}));return null===n?null:eY(n,1/e.length)}(e)}function ln(e){return new Map((0,ef.zG)(e.changedTouches,Array.from,eh.UI(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let lt=(0,U.cY)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:e=>{let{context:{touches:n}}=e;return 0===n.vecs.size},isSingleTouching:e=>{let{context:{touches:n}}=e;return 1===n.vecs.size},isDoubleTouching:e=>{let{context:{touches:n}}=e;return 2===n.vecs.size},isManyTouching:e=>{let{context:{touches:n}}=e;return n.vecs.size>2},isZooming:e=>{let{context:{touches:n}}=e;return null!==n.z}},actions:{handleTouchStart:(0,eG.a)(e=>{let{enqueue:n}=e;n.assign({touches:e=>{let{context:{touches:n},event:t}=e;return"TOUCH.START"!==t.type?n:function(e,n){let t=t6.concat(e.vecs,ln(n)),l=t7(t),r=le(l),a=2!==l.length?null:.5>Math.abs(function(e,n){let t=eP(e,n);return t.y/t.x}(l[0],l[1]));return{...e,vecs:t,points:l,cursor:r,horizontal:a}}(n,t.ev)}}),n.raise({type:"STARTED"})}),handleTouchMove:(0,eG.a)(e=>{let{enqueue:n}=e;n.assign({touches:e=>{let{context:{touches:n},event:t}=e;return"TOUCH.MOVE"!==t.type?n:function(e,n,t){var l,r;let a=ln(n),i=t2.mapWithIndex(e.vecs,(e,n)=>(0,ef.zG)(a.get(e),e_.ij,e_.g_(()=>n,eh.zo(n)))),o=t7(i),u=le(o),[s,d]=o;if(null===u||s===ta||d===ta)return{...e,vecs:i,points:o,cursor:u};let c=function(e,n,t){let l=Math.pow((e.length>0?e[0]:n)-n,2);return 0===e.length||l>0?[n,...e]:e}(e.dists,Math.sqrt((l=s,r=d,Math.pow(l.x-r.x,2)+Math.pow(l.y-r.y,2))),0),y=function(e){let[n,t,l,r]=e;return n===ta||t===ta||l===ta||r===ta?null:n<t&&t<l&&l<r?-1:n>t&&t>l&&l>r?1:null}(c);return{vecs:i,points:o,cursor:u,dists:c,z:y,horizontal:e.horizontal}}(n,t.ev,0)}}),n.raise({type:"MOVED"})}),handleTouchEnd:(0,eG.a)(e=>{let{enqueue:n}=e;n.assign({touches:e=>{let{context:{touches:n},event:t}=e;return"TOUCH.END"!==t.type?n:function(e,n){let t=ln(n),l=t8.filterMapWithIndex(e.vecs,(e,n)=>t.has(e)?e_.YP:e_.G(n)),r=t7(l),a=le(r);return{vecs:l,points:r,cursor:a,dists:0===l.size?[]:e.dists,z:0===l.size?null:e.z,horizontal:e.horizontal}}(n,t.ev)}}),n.raise({type:"ENDED"})}),resetTouches:(0,G.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),notifyTouching:(0,eG.a)(e=>{let{enqueue:n,context:t}=e;return n.emit(2===t.touches.vecs.size?{type:"MULTI.START"}:{type:"MULTI.END"})}),notifyZoom:(0,eG.a)(e=>{let{context:n,enqueue:t}=e,l=n.touches.cursor,r=n.touches.z;null!==l&&null!==r&&t.emit({type:"ZOOM",p:l,z:r})})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:"handleTouchStart"},"TOUCH.MOVE":{actions:"handleTouchMove"},"TOUCH.END":{actions:"handleTouchEnd"},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"notifyTouching",exit:"notifyTouching",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"notifyZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),ll=(0,X.c)(lt),lr=!1;function la(e){ll.send({type:"TOUCH.START",ev:e})}function li(e){ll.send({type:"TOUCH.MOVE",ev:e})}function lo(e){ll.send({type:"TOUCH.END",ev:e})}function lu(){ll.send({type:"CANCEL"})}function ls(e){n1||n5({type:"CLICK",ev:e})}function ld(e){n5({type:"CONTEXTMENU",ev:e})}function lc(e){n5({type:"WHEEL",ev:e})}function ly(e){null!==e&&e6.forEach(n=>n(e))}function lm(e){nJ({type:"KEY.DOWN",ev:e})}function lp(e){nJ({type:"KEY.UP",ev:e})}function lg(){let e=(0,o.useRef)(null);return(0,I.jsxs)("div",{ref:e,id:"viewer",className:"container",onTouchStart:la,onTouchMove:li,onTouchEnd:lo,onClick:ls,onContextMenu:ld,onScroll:ly,onWheel:lc,onAnimationEnd:e=>{n5({type:"ANIMATION.END",ev:e}),ne.send({type:"STYLE.ANIMATION.END"})},children:[s.renderMap(),(0,I.jsx)("style",{children:lh}),(0,I.jsx)(l_,{}),(0,I.jsx)(lf,{}),(0,I.jsx)(lx,{})]})}ll.on("MULTI.START",()=>{lr=!0,nJ({type:"TOUCH.LOCK"})}),ll.on("MULTI.END",()=>{nJ({type:"TOUCH.UNLOCK"}),lr=!1}),ll.on("ZOOM",e=>{let{z:n,p:t}=e;nJ({type:"ZOOM.ZOOM",z:n>0?1:-1,p:t})}),ll.start(),T.add(lu),R.add(lu),N.add(lu),D.add(lu),$.add(lu),z.add(lu);let lh=`
.container {
  ${q}
  ${et}

  scrollbar-width: thin;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;function l_(){let e=(0,Y.v9)(ne,e=>e.context.layout.content),n=`
.content {
  ${q}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
}
`;return(0,I.jsx)("style",{children:n})}function lf(){let e=(0,Y.v9)(ne,e=>e.context.animation),n=null===e?"":function(e){let{matrix:n,origin:t}=e,l=new DOMMatrixReadOnly;return`
#viewer {
  will-change: transform;
  animation: container-zoom 500ms ease;
}
@keyframes container-zoom {
  from {
    transform-origin: ${null===t?"left top":`${t.x}px ${t.y}px`};
    transform: ${l.toString()} translate3d(0px, 0px, 0px);
  }
  to {
    transform-origin: ${null===t?"left top":`${t.x}px ${t.y}px`};
    transform: ${n.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(e);return(0,I.jsx)("style",{children:n})}function lx(){let{style:e}=eg();return null===e?(0,I.jsx)(I.Fragment,{}):(0,I.jsx)("style",{children:e})}function lw(){return null!==document.querySelector(".container")}let lv=(0,U.cY)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:eF,next:eF,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Busy"}}},Busy:{after:{500:{actions:[(0,G.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,X.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:n}=e;return n.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:n,next:t}}=e;return n.width===t.width&&.2>Math.abs(1-t.height/n.height)},actions:()=>console.log("resize: ignoring height-only change"),target:"Idle"},{guard:e=>{var n,t;let{context:l}=e;return n=l.prev,t=l.next,n.x!==t.x||n.y!==t.y||n.width!==t.width||n.height!==t.height},actions:[(0,G.a)({prev:e=>{let{context:n}=e;return n.next},waited:0}),(0,eG.e)(e=>{var n;let{context:t}=e;return{type:"LAYOUT",layout:(n=s.origViewBox,function(e){let n=eQ(e);return{config:e,...n}}(function(e,n,t){let[[l,r],a]=function(e,n){let t=e.width/e.height,l=n.width/n.height,[r,a]=t>l?[(e.width-e.height*l)/2,0]:[0,(e.height-e.width/l)/2];return[[r,a],t>l?n.height/e.height:n.width/e.width]}(t,n);return{fontSize:e,container:t,svgOffset:{x:-l,y:-r},svgScale:{s:a},svg:n}}(s.fontSize,n,t.next))),force:!t.first}}),(0,G.a)({first:!1})],target:"Idle"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,G.a)({waited:e=>{let{context:n}=e;return n.waited+500}})],target:"Busy"}},Aborting:{}}}),lb=(0,X.c)(lv);lb.on("LAYOUT",e=>{let{layout:n,force:t}=e;F.forEach(e=>e(n,t))}),lb.start(),window.addEventListener("resize",()=>{lb.send({type:"RESIZE"})});let lS=`
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
  ${et}
  ${ee}
  ${en}
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
`,lE=function(){var e;let n=(null==(e=s.cartoConfig)?void 0:e.backgroundColor)??"darkgray";return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(lg,{}),(0,I.jsx)(t3,{}),(0,I.jsxs)("style",{children:[lS,`body { background-color: ${n}; }`]})]})};function lF(){let e=(0,Y.v9)(ne,e=>e.context.rendered);(0,o.useEffect)(()=>{requestAnimationFrame(A)},[e]);let n=(0,Y.v9)(ne,e=>e.context.shown),t=(0,Y.v9)(ne,e=>e.context.appearing)?`
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
`:"",l=(0,Y.v9)(ne,e=>e.context.layout.scroll),r=`
.content {
  width: ${ti(l.width)}px;
  height: ${ti(l.height)}px;
}
`;return(0,I.jsxs)("style",{children:[n?"":"#viewer, #ui { opacity: 0; }",t,r]})}var lj=t(2270),lM=t(5641),lL=t(360);let lk=`
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
`;var lO=t(5092),lz=t(1725),l$=t(2638);function lT(e){var n;let t=new Map([...Object.keys(e.properties).filter(e=>"other_tags"!==e&&!e.match(/^centroid|^area$/)).filter(n=>n in e.properties&&e.properties instanceof Object&&null!==e.properties[n]).map(n=>[n,String(e.properties[n])]),...(null==(n=e.properties.other_tags)?void 0:n.split(/","/g).map(e=>e.split(/"=>"/).map(e=>e.replace(/"/,""))))??[]]);return(0,I.jsx)("table",{className:"properties",style:{display:"block",fontSize:"x-small",borderSpacing:0,margin:"1em 0.5em",maxWidth:"calc(50vmin - 2em)",overflowX:"scroll",overscrollBehaviorX:"none",touchAction:"pan-x pan-y"},children:(0,I.jsx)("tbody",{style:{border:0},children:(0,I.jsx)(lD,{tags:t})})})}function lD(e){return(0,I.jsx)(I.Fragment,{children:Array.from(e.tags.entries()).map((e,n)=>{let[t,l]=e;return(0,I.jsx)(o.Fragment,{children:(0,I.jsx)("tr",{style:{margin:0,boxSizing:"border-box"},children:(0,I.jsxs)("td",{style:{border:"0.5px darkgray solid",margin:0,padding:"0.25em",boxSizing:"border-box",scrollbarWidth:"none",width:"calc(50vmin - 2em)"},children:[(0,I.jsxs)("span",{style:{color:"gray"},children:[t," "]}),(0,I.jsx)("span",{style:{},children:l})]})})},n)})})}let lC=[{filter:e=>{var n;return!!(null==e||null==(n=e.other_tags)?void 0:n.match(/"toilets"/))},getInfo:(e,n)=>({title:"toilets",x:{tag:"facility",title:"toilets",address:n,properties:e}})},{filter:e=>{var n;return!!(null==e||null==(n=e.other_tags)?void 0:n.match(/"bus_stop"/))},getInfo:(e,n)=>({title:"bus_stop",x:{tag:"facility",title:"bus_stop",address:n,properties:e}})},{filter:e=>{var n,t;return"highway"in e&&!!(null==(n=e.highway)?void 0:n.match(/elevator/))&&!(null==(t=e.other_tags)?void 0:t.match(/"level"=>"[1-9][^"]*"/))},getInfo:(e,n)=>({title:"elevator",x:{tag:"facility",title:"elevator",address:n,properties:e}})},{filter:e=>{var n,t;return"highway"in e&&!!(null==(n=e.highway)?void 0:n.match(/steps/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"conveying"=>"yes"/))},getInfo:(e,n)=>({title:"elevator",x:{tag:"facility",title:"escalator",address:n,properties:e}})},{filter:e=>{var n;return!!(null==e||null==(n=e.other_tags)?void 0:n.match(/"amenity"=>"drinking_water"/))},getInfo:(e,n)=>({title:"water",x:{tag:"facility",title:"water",address:n,properties:e}})},{filter:e=>{var n,t;return!!(null==(n=e.other_tags)?void 0:n.match(/"tourism"=>"information"/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"information"=>"office"/))},getInfo:(e,n)=>({title:"information",x:{tag:"facility",title:"information",address:n,properties:e}})},{filter:e=>{var n;return!!(null==(n=e.name)?void 0:n.match(/./))},getInfo:(e,n)=>({title:"shop",x:{tag:"shop",address:n,properties:e}})}],lN={getMapLayers:()=>{var e;return[{type:"multipolygon",name:"island",filter:e=>{var n;return!!(null==(n=e.natural)?void 0:n.match(/^coastline$/))}},{type:"multipolygon",name:"area",data:((null==(e=lL.Ow.cartoConfig)?void 0:e.internals)??lL.Ow.mapData.internals).features.map(e=>e.geometry.coordinates)},{type:"line",name:"cliff",filter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"natural"=>"(cliff)"/))}},{type:"multipolygon",name:"rock",filter:e=>{var n;return!!(null==(n=e.natural)?void 0:n.match(/rock|bare_rock/))}},{type:"multipolygon",name:"grass",filter:e=>{var n;return!!(null==(n=e.landuse)?void 0:n.match(/grass/))}},{type:"multipolygon",name:"forest",filter:e=>{var n,t;return!!(null==(n=e.landuse)?void 0:n.match(/forest/))||!!(null==(t=e.natural)?void 0:t.match(/wood/))}},{type:"multipolygon",name:"garden",filter:e=>{var n;return!!(null==(n=e.leisure)?void 0:n.match(/garden/))}},{type:"multipolygon",name:"farmland",filter:e=>{var n;return!!(null==(n=e.landuse)?void 0:n.match(/farmland/))}},{type:"multipolygon",name:"water",filter:e=>{var n;return!!(null==(n=e.natural)?void 0:n.match(/^water$/))}},{type:"line",name:"ditch",filter:e=>{var n;return!!(null==(n=e.waterway)?void 0:n.match(/^(ditch)$/))}},{type:"line",name:"stream",filter:e=>{var n;return!!(null==(n=e.waterway)?void 0:n.match(/^(stream)$/))}},{type:"line",name:"river",filter:e=>{var n;return!!(null==(n=e.waterway)?void 0:n.match(/^(river)$/))}},{type:"multipolygon",name:"wetland",filter:e=>{var n;return!!(null==(n=e.natural)?void 0:n.match(/wetland/))}},{type:"multipolygon",name:"playground",filter:e=>{var n,t,l;return!!(null==(n=e.tourism)?void 0:n.match(/zoo/))||!!(null==(t=e.leisure)?void 0:t.match(/ice_rink|pitch|playground/))||!!(null==(l=e.landuse)?void 0:l.match(/recreation_ground/))}},{type:"multipolygon",name:"grave_yard",filter:e=>{var n;return!!(null==(n=e.amenity)?void 0:n.match(/grave_yard/))}},{type:"multipolygon",name:"parking",filter:e=>{var n;return!!(null==(n=e.amenity)?void 0:n.match(/(parking|bicycle_parking)/))}},{type:"multipolygon",name:"building",filter:e=>{var n,t;return!!(null==(n=e.building)?void 0:n.match(/./))&&!(null==(t=e.building)?void 0:t.match(/roof/))}},{type:"line",name:"path",width:1,filter:e=>{var n;return!!(null==(n=e.highway)?void 0:n.match(/^(path|track)$/))}},{type:"line",name:"footway",width:1,filter:e=>{var n;return!!(null==(n=e.highway)?void 0:n.match(/^(footway|steps)$/))}},{type:"line",name:"steps",width:1,filter:e=>{var n;return!!(null==(n=e.highway)?void 0:n.match(/^(steps)$/))}},{type:"line",name:"cycleway",width:3,filter:e=>{var n;return!!(null==(n=e.highway)?void 0:n.match(/^(cycleway)$/))}},{type:"line",name:"service",width:4,filter:e=>{var n;return!!(null==(n=e.highway)?void 0:n.match(/^(service)$/))}},{type:"line",name:"pedestrian",width:8,filter:e=>{var n;return!!(null==(n=e.highway)?void 0:n.match(/^(pedestrian)$/))}},{type:"line",name:"road",width:6,filter:e=>{var n,t;return!!(null==(n=e.highway)?void 0:n.match(/./))&&!(null==(t=e.highway)?void 0:t.match(/^(footway|path|pedestrian|steps|cycleway|track|service)$/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/("highway"=>"service"|"area:highway"=>"service")/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var n;return!!(null==(n=e.man_made)?void 0:n.match(/bridge/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"pedestrian"/))}},{type:"line",name:"escalator background",filter:e=>{var n,t;return!!(null==(n=e.highway)?void 0:n.match(/^(steps)$/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"conveying"=>"yes"/))}},{type:"line",name:"escalator foreground",filter:e=>{var n,t;return!!(null==(n=e.highway)?void 0:n.match(/^(steps)$/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"conveying"=>"yes"/))}},{type:"line",name:"wall",filter:e=>{var n;return!!(null==(n=e.barrier)?void 0:n.match(/^(wall)$/))}},{type:"line",name:"fence",filter:e=>{var n;return!!(null==(n=e.barrier)?void 0:n.match(/^(fence)$/))}},{type:"line",name:"retaining-wall",filter:e=>{var n;return!!(null==(n=e.barrier)?void 0:n.match(/^(retaining_wall)$/))}},{type:"line",name:"bridge shadow",widthScale:1.8,filter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"bridge"/))}},{type:"line",name:"bridge edge",widthScale:1.4,filter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"bridge"/))}},{type:"line",name:"bridge road",filter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"bridge"/))}},{type:"line",name:"tunnel shadow",widthScale:1.8,filter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"tunnel"/))}},{type:"multipolygon",name:"roof",filter:e=>{var n,t;return!!(null==(n=e.building)?void 0:n.match(/./))&&!!(null==(t=e.building)?void 0:t.match(/roof/))}}]},getMapObjects:()=>[{name:"benches",path:lO.MX,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"bench"/))}},{name:"entrances",path:lO.TP,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"entrance"/))}},{name:"guide-posts",path:lO.Y0,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"guidepost"/))}},{name:"info-boards",path:lO.NQ,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"information"=>"(board|map)"/))}},{name:"trees1",path:lO.Tw,width:.15,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"tree"/))}},{name:"torii",path:lO.Yn,width:.05,pointsFilter:e=>{var n,t,l;return!!(null==(n=e.man_made)?void 0:n.match(/^torii$/))||!!(null==(t=e.other_tags)?void 0:t.match(/"amenity"=>"place_of_worship"/))&&!!(null==(l=e.other_tags)?void 0:l.match(/"religion"=>"shinto"/))}},{name:"monument",path:lO.KX,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"historic"=>"(monument|memorial|tomb)"/))}},{name:"statue",path:lO.$Y,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"artwork_type"=>"statue"/))}},{name:"vending-machine",path:lO.ps,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"amenity"=>"vending_machine"/))}},{name:"waste-basket",path:lO.R4,width:.05,pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"amenity"=>"waste_basket"/))}}],getMapSymbols:()=>[{name:"toilets",href:"#XToilets",pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"toilets"/))},polygonsFilter:e=>{var n;return"toilets"===e.building||"toilets"===e.amenity||!!(null==(n=e.other_tags)?void 0:n.match(/"toilets"/))}},{name:"parkings",href:"#XParking",pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"parking"/))},polygonsFilter:e=>{var n;return"parking"===e.amenity||!!(null==(n=e.other_tags)?void 0:n.match(/"parking"/))}},{name:"drinking-fountains",href:"#XDrinkingFountain",pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"amenity"=>"drinking_water"/))}},{name:"elevators",href:"#XElevator",pointsFilter:e=>{var n;return!!(null==(n=e.highway)?void 0:n.match(/elevator/))}},{name:"escalators",href:"#XEscalator",linesFilter:e=>{var n,t;return!!(null==(n=e.highway)?void 0:n.match(/steps/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"conveying"=>"yes"/))}},{name:"buses",href:"#XBus",pointsFilter:e=>{var n;return!!(null==(n=e.other_tags)?void 0:n.match(/"bus"=>"yes"/))}},{name:"informations",href:"#XInformation",pointsFilter:e=>{var n,t;return!!(null==(n=e.other_tags)?void 0:n.match(/"tourism"=>"information"/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"information"=>"office"/))},polygonsFilter:e=>{var n,t;return!!(null==(n=e.other_tags)?void 0:n.match(/"tourist"=>"information"/))&&!!(null==(t=e.other_tags)?void 0:t.match(/"information"=>"office"/))}}],getMapMarkers:()=>[{name:"all"}],getMapNames:lj.Qs,searchEntries:lC,renderInfo:function(e){let n=lL.Ow.mapMap,t=Number(e.info.x.address),l="address"in e.info.x?(0,l$.Ty)(t,n):null;return null===l?(0,I.jsxs)("p",{children:["XXX info not found (osm_id=",e.info.x.address,") XXX"]}):"shop"===e.info.x.tag?function(e){let n=(0,l$.SX)(e.properties,"website"),t=Number(e.properties.osm_id??""),l=Number(("osm_way_id"in e.properties&&e.properties.osm_way_id)??""),r=0!==t?t:0!==l?l:0;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("p",{children:[e.properties.name??e.x.name," ",0!==r&&(0,I.jsx)(lL.mN,{_id:r})]}),(0,I.jsxs)("p",{children:[null!==n&&(0,I.jsx)("a",{target:"_blank",href:n,children:"\uD83C\uDF10"}),0!==t&&(0,I.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/node/${t}`,children:"\uD83D\uDDFA️"}),0!==l&&(0,I.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/way/${l}`,children:"\uD83D\uDDFA️"})]}),(0,I.jsx)(lT,{properties:e.properties})]})}({x:e.info.x,properties:l}):function(e){let n=void 0!==e.x.title&&lz.lm.get(e.x.title);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1em"},children:(0,I.jsx)("svg",{style:{display:"block"},viewBox:"-36 -36 72 72",width:"3em",height:"3em",children:n&&(0,I.jsx)("use",{href:n})})}),(0,I.jsx)("p",{children:e.x.properties.name}),(0,I.jsx)(lT,{properties:e.properties})]})}({x:e.info.x,properties:l})},mapSvgStyle:lk,renderMap:lM.d,isMapRendered:lM.W};var lR=JSON.parse('{"type":"FeatureCollection","name":"areas","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"layer":"XXX","path":"polygon&uid={b0359fe1-e258-4ab4-8a7d-db8c3223d655}"},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1513007,34.194933],[135.1514,34.1949552],[135.151465699999989,34.1948975],[135.1515904,34.1948509],[135.151641399999988,34.1948032],[135.1516387,34.1947322],[135.1516387,34.1946401],[135.151648099999989,34.1945936],[135.151691,34.1944693],[135.15172050000001,34.1943606],[135.1517311,34.1942937],[135.151747300000011,34.1942696],[135.152071,34.1942166],[135.15223,34.194213],[135.1522769,34.1942128],[135.152352799999989,34.1942126],[135.1523578,34.1941636],[135.1523588,34.1941484],[135.1523726,34.1940371],[135.1523876,34.1937194],[135.1523896,34.193692],[135.1523913,34.1936676],[135.1524375,34.1936474],[135.1529947,34.1936596],[135.154412,34.1936982],[135.154410500000012,34.1935228],[135.1544121,34.1929446],[135.1541747,34.1928875],[135.1537308,34.1928265],[135.1530898,34.1927465],[135.1528658,34.192761],[135.1526489,34.1927993],[135.1525225,34.1928254],[135.152409799999987,34.192862],[135.1523106,34.1929085],[135.152220699999987,34.1929552],[135.1520303,34.1930761],[135.1519592,34.1931348],[135.1518849,34.1932096],[135.1517916,34.1933417],[135.1516642,34.1935658],[135.1515693,34.1938738],[135.1515393,34.1941364],[135.1515736,34.1943329],[135.151505899999989,34.1945414],[135.151414100000011,34.1946989],[135.1513349,34.1948315],[135.1513007,34.194933]]]]}}]}'),lA=JSON.parse('{"type":"FeatureCollection","name":"areas","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"layer":"XXX","path":"polygon&uid={b0359fe1-e258-4ab4-8a7d-db8c3223d655}"},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1513007,34.194933],[135.1514,34.1949552],[135.151465699999989,34.1948975],[135.1515904,34.1948509],[135.151641399999988,34.1948032],[135.1516387,34.1947322],[135.1516387,34.1946401],[135.151648099999989,34.1945936],[135.151691,34.1944693],[135.15172050000001,34.1943606],[135.1517311,34.1942937],[135.151747300000011,34.1942696],[135.152071,34.1942166],[135.15223,34.194213],[135.1522769,34.1942128],[135.152352799999989,34.1942126],[135.1523578,34.1941636],[135.1523588,34.1941484],[135.1523726,34.1940371],[135.1523876,34.1937194],[135.1523896,34.193692],[135.1523913,34.1936676],[135.1524375,34.1936474],[135.1529947,34.1936596],[135.154412,34.1936982],[135.154410500000012,34.1935228],[135.1544121,34.1929446],[135.1541747,34.1928875],[135.1537308,34.1928265],[135.1530898,34.1927465],[135.1528658,34.192761],[135.1526489,34.1927993],[135.1525225,34.1928254],[135.152409799999987,34.192862],[135.1523106,34.1929085],[135.152220699999987,34.1929552],[135.1520303,34.1930761],[135.1519592,34.1931348],[135.1518849,34.1932096],[135.1517916,34.1933417],[135.1516642,34.1935658],[135.1515693,34.1938738],[135.1515393,34.1941364],[135.1515736,34.1943329],[135.151505899999989,34.1945414],[135.151414100000011,34.1946989],[135.1513349,34.1948315],[135.1513007,34.194933]]]]}}]}'),lP=JSON.parse('{"type":"FeatureCollection","name":"map-lines","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"850108777","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15243480013038,"centroid_y":34.193312414686993},"geometry":{"type":"LineString","coordinates":[[135.1523975,34.1934615],[135.15244770000001,34.1934307],[135.152464,34.1934046],[135.152470099999988,34.1933645],[135.152468199999987,34.1933276],[135.1524388,34.1932931],[135.1524274,34.1932531],[135.1524011,34.19322],[135.152405499999986,34.193193],[135.152403600000014,34.1931417]]}},{"type":"Feature","properties":{"osm_id":"1075441845","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1522742,"centroid_y":34.1938519},"geometry":{"type":"LineString","coordinates":[[135.1522521,34.1938519],[135.152296299999989,34.1938519]]}},{"type":"Feature","properties":{"osm_id":"1075441846","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15250259559087,"centroid_y":34.193422007571492},"geometry":{"type":"LineString","coordinates":[[135.1524643,34.1934692],[135.1524942,34.193423],[135.152548700000011,34.1933821]]}},{"type":"Feature","properties":{"osm_id":"1075441847","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15241055448664,"centroid_y":34.193606732391508},"geometry":{"type":"LineString","coordinates":[[135.1523962,34.1935992],[135.1523929,34.1936075],[135.152435,34.1936074]]}},{"type":"Feature","properties":{"osm_id":"1075441848","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15228782855644,"centroid_y":34.193833380605156},"geometry":{"type":"LineString","coordinates":[[135.1522525,34.1942464],[135.152254699999986,34.194149],[135.1522559,34.1941117],[135.152252800000014,34.1940381],[135.1522425,34.1938808],[135.1522374,34.1938539],[135.152238399999987,34.1938144],[135.1522627,34.1937657],[135.1522938,34.193701],[135.152294500000011,34.1936564],[135.1523506,34.1936357],[135.1523617,34.1936166],[135.1523833,34.1935925],[135.1523693,34.1935681],[135.1523693,34.1935392],[135.152369599999986,34.1935138],[135.152368200000012,34.1934895],[135.1523975,34.1934615]]}},{"type":"Feature","properties":{"osm_id":"1075441849","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1520829637131,"centroid_y":34.194164387018979},"geometry":{"type":"LineString","coordinates":[[135.15223,34.194213],[135.152071,34.1942166],[135.1520346,34.1941741],[135.1520179,34.1940899],[135.1520195,34.1940248]]}},{"type":"Feature","properties":{"osm_id":"1075441850","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15185919566659,"centroid_y":34.193521142940689},"geometry":{"type":"LineString","coordinates":[[135.151883,34.1935351],[135.1518613,34.1935198],[135.1518335,34.193511]]}},{"type":"Feature","properties":{"osm_id":"1075441851","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1519359283883,"centroid_y":34.193402618048047},"geometry":{"type":"LineString","coordinates":[[135.1518313,34.1933779],[135.152013399999987,34.1934157],[135.1519851,34.1934438]]}},{"type":"Feature","properties":{"osm_id":"1075441852","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15217451701352,"centroid_y":34.193372321361792},"geometry":{"type":"LineString","coordinates":[[135.1521712,34.1932212],[135.1521765,34.1932487],[135.1521732,34.1934855],[135.1521727,34.1935239]]}},{"type":"Feature","properties":{"osm_id":"1075441853","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15348024566299,"centroid_y":34.193666526867148},"geometry":{"type":"LineString","coordinates":[[135.1523913,34.1936676],[135.1524375,34.1936474],[135.1529947,34.1936596],[135.154412,34.1936982],[135.154410500000012,34.1935228]]}},{"type":"Feature","properties":{"osm_id":"1075441855","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15301638748608,"centroid_y":34.193601485173318},"geometry":{"type":"LineString","coordinates":[[135.1525825,34.1935761],[135.1526352,34.1935921],[135.1528223,34.1935951],[135.1529509,34.1935918],[135.153061900000012,34.1935951],[135.153154699999988,34.193606],[135.153230400000012,34.1936149],[135.15345210000001,34.193622]]}},{"type":"Feature","properties":{"osm_id":"1075441856","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15220025535285,"centroid_y":34.194001487670306},"geometry":{"type":"LineString","coordinates":[[135.1521301,34.1940269],[135.1522224,34.1940251],[135.1522248,34.1939302]]}},{"type":"Feature","properties":{"osm_id":"1075441857","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15237684723428,"centroid_y":34.193905266757696},"geometry":{"type":"LineString","coordinates":[[135.1523565,34.1940818],[135.1523565,34.1940571],[135.1523566,34.1940408],[135.1523726,34.1940371],[135.1523876,34.1937194]]}},{"type":"Feature","properties":{"osm_id":"1075441858","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15193900563131,"centroid_y":34.193547523719523},"geometry":{"type":"LineString","coordinates":[[135.1517969,34.1933933],[135.1519465,34.1934316],[135.151991400000014,34.1934552],[135.1519908,34.1935049],[135.151974700000011,34.19353],[135.1519693,34.1935402],[135.151956,34.1935635],[135.1519604,34.1936114],[135.1519508,34.1937945]]}},{"type":"Feature","properties":{"osm_id":"1075441859","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15230102219871,"centroid_y":34.193324369544641},"geometry":{"type":"LineString","coordinates":[[135.152348,34.193336],[135.152348499999988,34.1933172],[135.1522971,34.1933156],[135.152282500000013,34.1933145],[135.1522685,34.1933153],[135.1522688,34.1933612]]}},{"type":"Feature","properties":{"osm_id":"1075441860","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15171825,"centroid_y":34.1940541},"geometry":{"type":"LineString","coordinates":[[135.1517269,34.1940528],[135.1517096,34.1940554]]}},{"type":"Feature","properties":{"osm_id":"1075441861","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15230714747648,"centroid_y":34.19406359359369},"geometry":{"type":"LineString","coordinates":[[135.1522821,34.1940941],[135.1522821,34.194058],[135.1523565,34.1940571]]}},{"type":"Feature","properties":{"osm_id":"1075441863","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.151921,"centroid_y":34.19321165},"geometry":{"type":"LineString","coordinates":[[135.1519561,34.1932291],[135.1518859,34.1931942]]}},{"type":"Feature","properties":{"osm_id":"1075441864","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"no\\"","area":null,"centroid_x":135.15250527453108,"centroid_y":34.193426203370429},"geometry":{"type":"LineString","coordinates":[[135.152548200000012,34.1934445],[135.1524942,34.193423],[135.152464,34.1934046]]}},{"type":"Feature","properties":{"osm_id":"1075441865","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1520109,"centroid_y":34.1934311},"geometry":{"type":"LineString","coordinates":[[135.1520304,34.193407],[135.151991400000014,34.1934552]]}},{"type":"Feature","properties":{"osm_id":"1075441866","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15218804818886,"centroid_y":34.193185149225904},"geometry":{"type":"LineString","coordinates":[[135.1522113,34.1931774],[135.1521947,34.1931825],[135.152165,34.1931935]]}},{"type":"Feature","properties":{"osm_id":"1075441867","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15204529763145,"centroid_y":34.193130221906358},"geometry":{"type":"LineString","coordinates":[[135.15211930000001,34.1930982],[135.152077600000013,34.1931029],[135.1520497,34.1931193],[135.1519802,34.1931812]]}},{"type":"Feature","properties":{"osm_id":"1075441868","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1521496,"centroid_y":34.19320365},"geometry":{"type":"LineString","coordinates":[[135.1521497,34.1931715],[135.1521495,34.1932358]]}},{"type":"Feature","properties":{"osm_id":"1075441869","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15239165778206,"centroid_y":34.19352922182896},"geometry":{"type":"LineString","coordinates":[[135.152348499999988,34.1935359],[135.1523693,34.1935392],[135.1523865,34.1935232],[135.1524133,34.1935244],[135.1524368,34.1935276]]}},{"type":"Feature","properties":{"osm_id":"1075441870","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15232914112684,"centroid_y":34.194203373224511},"geometry":{"type":"LineString","coordinates":[[135.1523578,34.1941636],[135.152352799999989,34.1942126],[135.1522769,34.1942128],[135.1522769,34.1942167]]}},{"type":"Feature","properties":{"osm_id":"1075441871","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1532588890673,"centroid_y":34.192995793412472},"geometry":{"type":"LineString","coordinates":[[135.1533148,34.1930768],[135.153314,34.1929572],[135.1532001,34.1929651],[135.1531842,34.1930186],[135.153243800000013,34.1930274]]}},{"type":"Feature","properties":{"osm_id":"1075441872","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15386829987474,"centroid_y":34.192943787566634},"geometry":{"type":"LineString","coordinates":[[135.1535558,34.1928997],[135.1535887,34.1929058],[135.153845499999989,34.1929352],[135.1539024,34.1929453],[135.154014499999988,34.1929679],[135.1541801,34.1929929]]}},{"type":"Feature","properties":{"osm_id":"1075441873","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15336077699024,"centroid_y":34.193115839354839},"geometry":{"type":"LineString","coordinates":[[135.1533608,34.1931269],[135.1533612,34.1931171],[135.15336,34.1931048]]}},{"type":"Feature","properties":{"osm_id":"1075441874","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15251395148954,"centroid_y":34.193552769696034},"geometry":{"type":"LineString","coordinates":[[135.1524636,34.1936066],[135.152528600000011,34.1936062],[135.1525302,34.193494],[135.152476400000012,34.1934931]]}},{"type":"Feature","properties":{"osm_id":"1075441875","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"gate","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15238947131994,"centroid_y":34.193693501520791},"geometry":{"type":"LineString","coordinates":[[135.1523876,34.1937194],[135.1523896,34.193692],[135.1523913,34.1936676]]}},{"type":"Feature","properties":{"osm_id":"1075441876","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15294105032814,"centroid_y":34.193079989896056},"geometry":{"type":"LineString","coordinates":[[135.1534373,34.1930999],[135.1534172,34.1931152],[135.1533612,34.1931171],[135.153337099999987,34.1931147],[135.1532937,34.1931336],[135.1532216,34.1931136],[135.1531425,34.1931045],[135.1529459,34.1931085],[135.1528261,34.1930896],[135.1527087,34.1930483],[135.152626700000013,34.193022],[135.152497,34.1930049],[135.152444,34.1929845]]}},{"type":"Feature","properties":{"osm_id":"1075441877","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1523543,"centroid_y":34.19359345},"geometry":{"type":"LineString","coordinates":[[135.1523439,34.1935933],[135.1523647,34.1935936]]}},{"type":"Feature","properties":{"osm_id":"1075441878","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15216475,"centroid_y":34.1933874},"geometry":{"type":"LineString","coordinates":[[135.152168,34.1933053],[135.1521615,34.1934695]]}},{"type":"Feature","properties":{"osm_id":"1075441880","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15220879211077,"centroid_y":34.193586044700496},"geometry":{"type":"LineString","coordinates":[[135.152194,34.1935882],[135.152207299999986,34.1935862],[135.152223600000013,34.193584]]}},{"type":"Feature","properties":{"osm_id":"1075441881","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1522778,"centroid_y":34.1941876},"geometry":{"type":"LineString","coordinates":[[135.152278700000011,34.1941624],[135.1522769,34.1942128]]}},{"type":"Feature","properties":{"osm_id":"1075441882","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15220991961039,"centroid_y":34.193675609358046},"geometry":{"type":"LineString","coordinates":[[135.1522272,34.193782],[135.1522277,34.1936616],[135.1521854,34.1936614],[135.1521878,34.1935842],[135.1521974,34.1935833]]}},{"type":"Feature","properties":{"osm_id":"1075441883","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15218009334819,"centroid_y":34.194061782368507},"geometry":{"type":"LineString","coordinates":[[135.152231300000011,34.1940976],[135.1522306,34.1940539],[135.152124500000014,34.1940527],[135.152123499999988,34.1940875]]}},{"type":"Feature","properties":{"osm_id":"1075441884","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15186224892258,"centroid_y":34.193922186763388},"geometry":{"type":"LineString","coordinates":[[135.1517509,34.1941481],[135.151738599999987,34.1940994],[135.1517328,34.1940762],[135.1517269,34.1940528],[135.1517242,34.1940361],[135.1517371,34.1940015],[135.1517709,34.1939765],[135.151979899999986,34.1939797],[135.151980400000014,34.1939682],[135.151981,34.1939521],[135.1519816,34.1939352],[135.1519846,34.1938567],[135.1519706,34.193856],[135.1519717,34.1937946],[135.1519508,34.1937945],[135.1519018,34.1937941],[135.151736,34.1937927]]}},{"type":"Feature","properties":{"osm_id":"1075441885","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15222623394695,"centroid_y":34.193364185342539},"geometry":{"type":"LineString","coordinates":[[135.15219110000001,34.1933881],[135.1521923,34.1933607],[135.1522688,34.1933612],[135.1522814,34.193362]]}},{"type":"Feature","properties":{"osm_id":"1075441886","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1522545957925,"centroid_y":34.193285475842174},"geometry":{"type":"LineString","coordinates":[[135.152282500000013,34.1933145],[135.1522919,34.1932953],[135.1522922,34.1932769],[135.1522679,34.1932698],[135.1522424,34.1932808],[135.1521908,34.1932962]]}},{"type":"Feature","properties":{"osm_id":"1075441887","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15210829727695,"centroid_y":34.193188921833382},"geometry":{"type":"LineString","coordinates":[[135.1521199,34.1931658],[135.1521084,34.1931722],[135.1521065,34.19321],[135.1520989,34.1932126]]}},{"type":"Feature","properties":{"osm_id":"1075441889","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15222985,"centroid_y":34.1941862},"geometry":{"type":"LineString","coordinates":[[135.1522297,34.1941594],[135.15223,34.194213]]}},{"type":"Feature","properties":{"osm_id":"1075441890","name":"御船佐屋","highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1535248,"centroid_y":34.19362055},"geometry":{"type":"LineString","coordinates":[[135.153524800000014,34.1936292],[135.153524800000014,34.1936119]]}},{"type":"Feature","properties":{"osm_id":"1075441891","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.152066686414,"centroid_y":34.193430733737905},"geometry":{"type":"LineString","coordinates":[[135.152088,34.1934581],[135.15206280000001,34.1934144],[135.1520384,34.1934267]]}},{"type":"Feature","properties":{"osm_id":"1075441892","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1518221,"centroid_y":34.1936396},"geometry":{"type":"LineString","coordinates":[[135.151884599999988,34.1935587],[135.1517596,34.1937205]]}},{"type":"Feature","properties":{"osm_id":"1075441893","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15356352064873,"centroid_y":34.193268819929308},"geometry":{"type":"LineString","coordinates":[[135.1535594,34.1932424],[135.1535676,34.1932736],[135.1535595,34.1932948]]}},{"type":"Feature","properties":{"osm_id":"1075441894","name":null,"highway":"service","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"service\\"=>\\"parking_aisle\\"","area":null,"centroid_x":135.15176707081537,"centroid_y":34.194216868834324},"geometry":{"type":"LineString","coordinates":[[135.1517834,34.1942856],[135.1517747,34.1942495],[135.1517509,34.1941481]]}},{"type":"Feature","properties":{"osm_id":"1075441895","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"permissive\\"","area":null,"centroid_x":135.15232927610319,"centroid_y":34.193306852492611},"geometry":{"type":"LineString","coordinates":[[135.1523144,34.1933469],[135.1522976,34.193338],[135.1522971,34.1933156],[135.1523071,34.1932868],[135.1523362,34.193278],[135.1523515,34.1932874],[135.152367700000013,34.1933109],[135.1523736,34.1933366]]}},{"type":"Feature","properties":{"osm_id":"1075441896","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15172415000001,"centroid_y":34.19407825},"geometry":{"type":"LineString","coordinates":[[135.1517155,34.1940803],[135.1517328,34.1940762]]}},{"type":"Feature","properties":{"osm_id":"1075441897","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15223952731284,"centroid_y":34.193628844465145},"geometry":{"type":"LineString","coordinates":[[135.152294500000011,34.1936564],[135.152207299999986,34.1936196],[135.152207299999986,34.1935862]]}},{"type":"Feature","properties":{"osm_id":"1075441900","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15229355000002,"centroid_y":34.1940375},"geometry":{"type":"LineString","coordinates":[[135.152252800000014,34.1940381],[135.1523343,34.1940369]]}},{"type":"Feature","properties":{"osm_id":"1075441901","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15166745,"centroid_y":34.19398075},"geometry":{"type":"LineString","coordinates":[[135.151667800000013,34.1940088],[135.1516671,34.1939527]]}},{"type":"Feature","properties":{"osm_id":"1075441902","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1519986,"centroid_y":34.19354185},"geometry":{"type":"LineString","coordinates":[[135.1519845,34.1935412],[135.1520127,34.1935425]]}},{"type":"Feature","properties":{"osm_id":"1075441903","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15211830183839,"centroid_y":34.193362492782207},"geometry":{"type":"LineString","coordinates":[[135.1524011,34.19322],[135.152307900000011,34.1932195],[135.1522799,34.1932352],[135.1522362,34.1932358],[135.1522076,34.1932139],[135.1521948,34.193194],[135.1521596,34.1932103],[135.1521583,34.1932323],[135.15215950000001,34.1932427],[135.1521567,34.1933451],[135.1521541,34.1934484],[135.1521362,34.1934625],[135.1521117,34.1934661],[135.152070400000014,34.1934739],[135.1520332,34.193496],[135.1519908,34.1935049],[135.1519228,34.1934957],[135.1517987,34.193489]]}},{"type":"Feature","properties":{"osm_id":"1075441905","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15172975,"centroid_y":34.19410135},"geometry":{"type":"LineString","coordinates":[[135.151720899999987,34.1941033],[135.151738599999987,34.1940994]]}},{"type":"Feature","properties":{"osm_id":"1075441906","name":null,"highway":"service","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"service\\"=>\\"parking_aisle\\"","area":null,"centroid_x":135.15193670411583,"centroid_y":34.194199180545496},"geometry":{"type":"LineString","coordinates":[[135.151950699999986,34.1942661],[135.1519427,34.1942289],[135.151923,34.1941322]]}},{"type":"Feature","properties":{"osm_id":"1075441907","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1522251,"centroid_y":34.19388085},"geometry":{"type":"LineString","coordinates":[[135.1522425,34.1938808],[135.1522077,34.1938809]]}},{"type":"Feature","properties":{"osm_id":"1075441908","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15171960694806,"centroid_y":34.193919531879281},"geometry":{"type":"LineString","coordinates":[[135.15211930000001,34.1930982],[135.1521199,34.1931658],[135.1521138,34.1932433],[135.1520844,34.1933489],[135.1520693,34.193399],[135.1520304,34.193407],[135.1518189,34.1933634],[135.1517969,34.1933933],[135.1517715,34.1934377],[135.1517111,34.1935697],[135.1516722,34.1936717],[135.15164,34.1937849],[135.1516172,34.1938836],[135.1516011,34.1939812],[135.1515904,34.19405],[135.1515877,34.1941765],[135.151593100000014,34.1942585],[135.1516052,34.1943074],[135.1516306,34.194344],[135.151621299999988,34.1944038],[135.151599800000014,34.1944194],[135.1515622,34.1945669],[135.1515274,34.1946213],[135.1515086,34.1947256],[135.1514965,34.1947555],[135.151485799999989,34.1947721],[135.1514563,34.1947866],[135.151463,34.1948132],[135.1514845,34.1948265],[135.1514751,34.1948498],[135.1514536,34.1948664]]}},{"type":"Feature","properties":{"osm_id":"1075441909","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15186939682749,"centroid_y":34.19415128884755},"geometry":{"type":"LineString","coordinates":[[135.1520477,34.1942048],[135.1520194,34.194181],[135.1520045,34.1941023],[135.151830600000011,34.1941337],[135.151718100000011,34.1941519],[135.1517499,34.1942593]]}},{"type":"Feature","properties":{"osm_id":"1075441910","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15213665,"centroid_y":34.193243},"geometry":{"type":"LineString","coordinates":[[135.15215950000001,34.1932427],[135.1521138,34.1932433]]}},{"type":"Feature","properties":{"osm_id":"1075441911","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"fence","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15187560206363,"centroid_y":34.194040082584827},"geometry":{"type":"LineString","coordinates":[[135.151830600000011,34.1941337],[135.1517986,34.1940168],[135.1520195,34.1940248]]}},{"type":"Feature","properties":{"osm_id":"1075441913","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15246791054454,"centroid_y":34.193629286764917},"geometry":{"type":"LineString","coordinates":[[135.152362399999987,34.1936499],[135.1523886,34.1936286],[135.152555299999989,34.1936303],[135.152555299999989,34.1936023]]}},{"type":"Feature","properties":{"osm_id":"1075441915","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1533703707816,"centroid_y":34.192884850441523},"geometry":{"type":"LineString","coordinates":[[135.153364399999987,34.1929195],[135.1533652,34.1928977],[135.1533739,34.19288],[135.153376,34.19285]]}},{"type":"Feature","properties":{"osm_id":"1075441916","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15193085,"centroid_y":34.1935381},"geometry":{"type":"LineString","coordinates":[[135.151905,34.1935369],[135.1519567,34.1935393]]}},{"type":"Feature","properties":{"osm_id":"1075441917","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15252149858827,"centroid_y":34.193570841247642},"geometry":{"type":"LineString","coordinates":[[135.1523617,34.1936166],[135.1524485,34.1936192],[135.1525412,34.1936192],[135.1525427,34.1935921],[135.1525825,34.1935761],[135.1526078,34.1935281],[135.1525885,34.1934859],[135.152548200000012,34.1934445]]}},{"type":"Feature","properties":{"osm_id":"1075441918","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1520905,"centroid_y":34.19343255},"geometry":{"type":"LineString","coordinates":[[135.1521117,34.1934661],[135.1520693,34.193399]]}},{"type":"Feature","properties":{"osm_id":"1075441919","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15167872655493,"centroid_y":34.193884722623181},"geometry":{"type":"LineString","coordinates":[[135.1516594,34.1942789],[135.151621799999987,34.194017],[135.15167120000001,34.1938076],[135.151713300000011,34.1936836],[135.151798500000012,34.1935053]]}},{"type":"Feature","properties":{"osm_id":"1075441920","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15195257193523,"centroid_y":34.193544766121427},"geometry":{"type":"LineString","coordinates":[[135.1517758,34.1936756],[135.1518547,34.1935549],[135.151897,34.1935282],[135.151974700000011,34.19353],[135.1520217,34.193522],[135.152073300000012,34.1934917],[135.1521732,34.1934855]]}},{"type":"Feature","properties":{"osm_id":"1075443407","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15205747578463,"centroid_y":34.194006946793664},"geometry":{"type":"LineString","coordinates":[[135.1520578,34.1939592],[135.1520529,34.1940233],[135.1520703,34.1940515]]}},{"type":"Feature","properties":{"osm_id":"1075443408","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15202528833822,"centroid_y":34.193878597544071},"geometry":{"type":"LineString","coordinates":[[135.1520271,34.1938337],[135.1520257,34.1938955],[135.15202,34.1939231]]}},{"type":"Feature","properties":{"osm_id":"1075443409","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1521181957331,"centroid_y":34.19393177384088},"geometry":{"type":"LineString","coordinates":[[135.151981,34.1939521],[135.1520033,34.1939522],[135.1520749,34.1939463],[135.152209199999987,34.1939159],[135.1522425,34.1938808]]}},{"type":"Feature","properties":{"osm_id":"1075443410","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"permissive\\"","area":null,"centroid_x":135.15208591175167,"centroid_y":34.194019453873352},"geometry":{"type":"LineString","coordinates":[[135.1520749,34.1939463],[135.152068899999989,34.1939937],[135.1520997,34.1940302],[135.1521027,34.1940598],[135.152085699999986,34.1940906]]}},{"type":"Feature","properties":{"osm_id":"1075443412","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15190245,"centroid_y":34.19380805},"geometry":{"type":"LineString","coordinates":[[135.1519018,34.1937941],[135.1519031,34.193822]]}},{"type":"Feature","properties":{"osm_id":"1075445140","name":"太鼓橋","highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":10,"other_tags":"\\"bridge\\"=>\\"yes\\"","area":null,"centroid_x":135.15350563225041,"centroid_y":34.193181275703992},"geometry":{"type":"LineString","coordinates":[[135.1534876,34.1931553],[135.15350620000001,34.1931814],[135.153523,34.1932077]]}},{"type":"Feature","properties":{"osm_id":"1075445141","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":10,"other_tags":"\\"bridge\\"=>\\"yes\\"","area":null,"centroid_x":135.1538093,"centroid_y":34.19357025},"geometry":{"type":"LineString","coordinates":[[135.1538095,34.1935518],[135.153809099999989,34.1935887]]}},{"type":"Feature","properties":{"osm_id":"1075445142","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":10,"other_tags":"\\"bridge\\"=>\\"yes\\"","area":null,"centroid_x":135.15381324999998,"centroid_y":34.19336165},"geometry":{"type":"LineString","coordinates":[[135.1538131,34.1933486],[135.1538134,34.1933747]]}},{"type":"Feature","properties":{"osm_id":"1075445143","name":"三ツ橋","highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":10,"other_tags":"\\"bridge\\"=>\\"yes\\"","area":null,"centroid_x":135.15381225,"centroid_y":34.1934632},"geometry":{"type":"LineString","coordinates":[[135.1538123,34.1934464],[135.1538122,34.19348]]}},{"type":"Feature","properties":{"osm_id":"1075445144","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15240304999998,"centroid_y":34.1931345},"geometry":{"type":"LineString","coordinates":[[135.1523858,34.1931347],[135.152420299999989,34.1931343]]}},{"type":"Feature","properties":{"osm_id":"1075445145","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":10,"other_tags":"\\"bridge\\"=>\\"yes\\"","area":null,"centroid_x":135.15240345000001,"centroid_y":34.19313495},"geometry":{"type":"LineString","coordinates":[[135.152403600000014,34.1931417],[135.1524033,34.1931282]]}},{"type":"Feature","properties":{"osm_id":"1075445146","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15368185445899,"centroid_y":34.193283021189451},"geometry":{"type":"LineString","coordinates":[[135.153523,34.1932077],[135.1535594,34.1932424],[135.1536085,34.1932753],[135.1536568,34.1932938],[135.1537238,34.1932984],[135.153815,34.1932968],[135.1538131,34.1933486]]}},{"type":"Feature","properties":{"osm_id":"1075445147","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15381085000001,"centroid_y":34.1935159},"geometry":{"type":"LineString","coordinates":[[135.1538122,34.19348],[135.1538095,34.1935518]]}},{"type":"Feature","properties":{"osm_id":"1075445148","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15297114086647,"centroid_y":34.192961569594544},"geometry":{"type":"LineString","coordinates":[[135.1524033,34.1931282],[135.1524043,34.193105],[135.152405,34.1930876],[135.152418,34.1930515],[135.1524059,34.1930255],[135.152416100000011,34.1930014],[135.152444,34.1929845],[135.1524589,34.1929553],[135.152499799999987,34.1929337],[135.1525575,34.192926],[135.152676500000013,34.1929245],[135.1527342,34.1929245],[135.1528142,34.1929383],[135.15287,34.1929306],[135.1529314,34.1929291],[135.1529909,34.192906],[135.1530263,34.1929045],[135.1530783,34.1929153],[135.1531137,34.1929091],[135.1531583,34.1928937],[135.15319550000001,34.1928906],[135.153242,34.1929122],[135.153281099999987,34.1929153],[135.1533425,34.1929306],[135.1533964,34.1929291],[135.1534318,34.1929568],[135.153469,34.1929907],[135.1534857,34.1930107],[135.1534857,34.1930337],[135.1534522,34.193046],[135.1534373,34.1930999],[135.153457800000012,34.1931122],[135.1534634,34.1931291],[135.1534876,34.1931553]]}},{"type":"Feature","properties":{"osm_id":"1075445149","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15381285000001,"centroid_y":34.19341055},"geometry":{"type":"LineString","coordinates":[[135.1538134,34.1933747],[135.1538123,34.1934464]]}},{"type":"Feature","properties":{"osm_id":"1075445150","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15319958951937,"centroid_y":34.193552824326517},"geometry":{"type":"LineString","coordinates":[[135.153809099999989,34.1935887],[135.1538094,34.1936323],[135.1537815,34.1936492],[135.1536978,34.1936476],[135.153524800000014,34.1936292],[135.15345210000001,34.193622],[135.1534466,34.1936215],[135.153374,34.1936086],[135.153296,34.1935745],[135.1532319,34.1935242],[135.15319740000001,34.1935092],[135.153134099999988,34.1935076],[135.15303560000001,34.1935322],[135.1529965,34.1935353],[135.1529611,34.1935276],[135.1529258,34.1935107],[135.1528849,34.193503],[135.152842099999987,34.1934984],[135.152808599999986,34.1934876],[135.1527826,34.1934707],[135.152728599999989,34.1934569],[135.1526821,34.1934615],[135.1526282,34.1934569],[135.152548200000012,34.1934445]]}},{"type":"Feature","properties":{"osm_id":"1075465578","name":null,"highway":"service","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"private\\"","area":null,"centroid_x":135.15235723018236,"centroid_y":34.193678491090928},"geometry":{"type":"LineString","coordinates":[[135.152294500000011,34.1936564],[135.1523896,34.193692],[135.1524215,34.1936923]]}},{"type":"Feature","properties":{"osm_id":"1075465580","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.1543764,"centroid_y":34.1937231},"geometry":{"type":"LineString","coordinates":[[135.1543764,34.1936905],[135.1543764,34.1937557]]}},{"type":"Feature","properties":{"osm_id":"1076057668","name":"御馬場","highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15229234393388,"centroid_y":34.193028430616287},"geometry":{"type":"LineString","coordinates":[[135.1524589,34.1929553],[135.152387,34.1929565],[135.1523119,34.19303],[135.1521975,34.193087],[135.15211930000001,34.1930982]]}},{"type":"Feature","properties":{"osm_id":"1076265387","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.15342185,"centroid_y":34.1928888},"geometry":{"type":"LineString","coordinates":[[135.153395,34.1928814],[135.153448700000013,34.1928962]]}},{"type":"Feature","properties":{"osm_id":"1076265388","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15338444999998,"centroid_y":34.1928807},"geometry":{"type":"LineString","coordinates":[[135.1533739,34.19288],[135.153395,34.1928814]]}},{"type":"Feature","properties":{"osm_id":"1076265389","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15320277814561,"centroid_y":34.19285581733719},"geometry":{"type":"LineString","coordinates":[[135.15211930000001,34.1930982],[135.1521108,34.1930417],[135.1521845,34.1930017],[135.15228110000001,34.1929418],[135.1524004,34.1928853],[135.152517100000011,34.1928453],[135.1526472,34.1928165],[135.1528202,34.1927843],[135.152922100000012,34.1927699],[135.153050900000011,34.192761],[135.1531515,34.1927699],[135.1532614,34.1927876],[135.153321799999986,34.1927965],[135.153417,34.1928043],[135.1536798,34.1928331],[135.1538689,34.1928575],[135.153997299999986,34.1928769],[135.154103600000013,34.192893],[135.1543155,34.1929352],[135.1543799,34.1929585]]}},{"type":"Feature","properties":{"osm_id":"1076265390","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15341269243785,"centroid_y":34.1928684571986},"geometry":{"type":"LineString","coordinates":[[135.1533964,34.1929291],[135.153413,34.1929019],[135.153415599999988,34.1928531],[135.153417,34.1928043]]}},{"type":"Feature","properties":{"osm_id":"1076275230","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.1541150224989,"centroid_y":34.192941445739045},"geometry":{"type":"LineString","coordinates":[[135.1541908,34.1930184],[135.1542029,34.1929629],[135.1541278,34.192944],[135.154054699999989,34.1929196],[135.1540071,34.192893],[135.153997299999986,34.1928769]]}},{"type":"Feature","properties":{"osm_id":"1076275231","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15385221966912,"centroid_y":34.192971830228416},"geometry":{"type":"LineString","coordinates":[[135.1534318,34.1929568],[135.153489400000012,34.1929302],[135.1535692,34.1929285],[135.1536745,34.1929407],[135.1537999,34.1929574],[135.15389110000001,34.1929746],[135.1539682,34.1929862],[135.15407350000001,34.1930039],[135.1541908,34.1930184],[135.154276,34.193035]]}},{"type":"Feature","properties":{"osm_id":"1076275232","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.1535407,"centroid_y":34.19289915},"geometry":{"type":"LineString","coordinates":[[135.1535256,34.1928986],[135.1535558,34.1928997]]}},{"type":"Feature","properties":{"osm_id":"1076275233","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15348715,"centroid_y":34.1928974},"geometry":{"type":"LineString","coordinates":[[135.153448700000013,34.1928962],[135.1535256,34.1928986]]}},{"type":"Feature","properties":{"osm_id":"1076275234","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.15419685000001,"centroid_y":34.1929951},"geometry":{"type":"LineString","coordinates":[[135.1541801,34.1929929],[135.1542136,34.1929973]]}},{"type":"Feature","properties":{"osm_id":"1076275235","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15435640335724,"centroid_y":34.193292343350308},"geometry":{"type":"LineString","coordinates":[[135.1542136,34.1929973],[135.1543213,34.1930124],[135.1543762,34.1930418],[135.1543648,34.193165],[135.15437510000001,34.1934689],[135.1543764,34.1936905]]}},{"type":"Feature","properties":{"osm_id":"1076285230","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.15213065,"centroid_y":34.19319835},"geometry":{"type":"LineString","coordinates":[[135.152165,34.1931935],[135.152096300000011,34.1932032]]}},{"type":"Feature","properties":{"osm_id":"1076483798","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"private\\"","area":null,"centroid_x":135.15219695,"centroid_y":34.19357175},"geometry":{"type":"LineString","coordinates":[[135.152207299999986,34.1935862],[135.1521866,34.1935573]]}},{"type":"Feature","properties":{"osm_id":"1076494908","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"hedge","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15214755,"centroid_y":34.19335125},"geometry":{"type":"LineString","coordinates":[[135.1521502,34.1932545],[135.1521449,34.193448]]}},{"type":"Feature","properties":{"osm_id":"1076494909","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.1521681,"centroid_y":34.19320735},"geometry":{"type":"LineString","coordinates":[[135.152165,34.1931935],[135.1521712,34.1932212]]}},{"type":"Feature","properties":{"osm_id":"1076517555","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.1533641,"centroid_y":34.19293675},"geometry":{"type":"LineString","coordinates":[[135.1533638,34.192954],[135.153364399999987,34.1929195]]}},{"type":"Feature","properties":{"osm_id":"1076517556","name":null,"highway":null,"waterway":"ditch","aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"culvert\\"","area":null,"centroid_x":135.1533798,"centroid_y":34.19281005},"geometry":{"type":"LineString","coordinates":[[135.153376,34.19285],[135.153383600000012,34.1927701]]}},{"type":"Feature","properties":{"osm_id":"1076517557","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15155525215053,"centroid_y":34.19464907750362},"geometry":{"type":"LineString","coordinates":[[135.1515274,34.1946213],[135.1515569,34.1946368],[135.151566300000013,34.1946523],[135.1515622,34.1946878]]}},{"type":"Feature","properties":{"osm_id":"1332144596","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15206712602122,"centroid_y":34.193646538714496},"geometry":{"type":"LineString","coordinates":[[135.1520232,34.1937422],[135.152028800000011,34.1936157],[135.1521761,34.1936217]]}},{"type":"Feature","properties":{"osm_id":"1332144597","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15219071434763,"centroid_y":34.193723342850099},"geometry":{"type":"LineString","coordinates":[[135.152188200000012,34.1937803],[135.152193899999986,34.1936772],[135.1521818,34.1936772]]}},{"type":"Feature","properties":{"osm_id":"1332144598","name":null,"highway":null,"waterway":null,"aerialway":null,"barrier":"wall","man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15211621924382,"centroid_y":34.194196747542023},"geometry":{"type":"LineString","coordinates":[[135.1521445,34.1941571],[135.152155099999987,34.1942033],[135.1520477,34.1942048]]}},{"type":"Feature","properties":{"osm_id":"1332144599","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15307867420239,"centroid_y":34.193564027561742},"geometry":{"type":"LineString","coordinates":[[135.1529965,34.1935353],[135.1530539,34.1935496],[135.153111200000012,34.1935743],[135.153154699999988,34.193606]]}},{"type":"Feature","properties":{"osm_id":"1332144600","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15228504208181,"centroid_y":34.19325952135852},"geometry":{"type":"LineString","coordinates":[[135.1522362,34.1932358],[135.152276199999989,34.1932589],[135.1523362,34.193278]]}},{"type":"Feature","properties":{"osm_id":"1332144601","name":null,"highway":"path","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":135.15239456661718,"centroid_y":34.193295880122768},"geometry":{"type":"LineString","coordinates":[[135.1523515,34.1932874],[135.1523877,34.1933011],[135.1524388,34.1932931]]}}]}'),lI=JSON.parse('{"type":"FeatureCollection","name":"map-multilinestrings","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[]}'),lH=JSON.parse('{"type":"FeatureCollection","name":"map-multipolygons","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"6203959","osm_way_id":null,"name":null,"type":"multipolygon","aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"pond\\"","area":12197.768171257339,"centroid_x":135.15351639615082,"centroid_y":34.193308516862139},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152504,34.1933156],[135.152510400000011,34.1933401],[135.152537200000012,34.1933523],[135.152548700000011,34.1933821],[135.1525899,34.1934064],[135.1526687,34.1934022],[135.152737,34.193421],[135.1527916,34.1934046],[135.1529065,34.1934509],[135.153093500000011,34.1934517],[135.153152799999987,34.1934832],[135.1532479,34.193503],[135.1533657,34.1935562],[135.153485100000012,34.1936043],[135.153524800000014,34.1936119],[135.1536868,34.1936295],[135.1537945,34.1936318],[135.1537945,34.1935836],[135.1538227,34.1935841],[135.1538246,34.1936343],[135.154079,34.1936368],[135.154277799999988,34.1936338],[135.1543044,34.1936108],[135.1542897,34.1930831],[135.154235,34.1930493],[135.1540853,34.1930482],[135.1540829,34.1930799],[135.154051900000013,34.1930767],[135.154019299999987,34.1930769],[135.154022200000014,34.1930405],[135.1539883,34.1930073],[135.153928,34.1930051],[135.1538792,34.1930239],[135.153842,34.1930004],[135.153786,34.1929781],[135.1536932,34.1929621],[135.1536453,34.1929546],[135.1535994,34.1929562],[135.1535504,34.192969],[135.1535068,34.1929917],[135.1535405,34.1930204],[135.153541,34.1930389],[135.1535337,34.193055],[135.1534723,34.1930564],[135.153468299999986,34.1930794],[135.1534761,34.1931082],[135.1534876,34.1931553],[135.153466900000012,34.1931484],[135.1534498,34.1931562],[135.1534129,34.1931552],[135.153392200000013,34.1931296],[135.1533608,34.1931269],[135.1533234,34.1931274],[135.153325200000012,34.1931432],[135.1532975,34.193155],[135.153219799999988,34.1931604],[135.1531462,34.1931442],[135.1530153,34.1931476],[135.152950299999986,34.1931393],[135.1528046,34.1931709],[135.1527666,34.193167],[135.1527307,34.1931411],[135.152705700000013,34.1930894],[135.152679400000011,34.1930616],[135.1526306,34.193035],[135.152519,34.1930254],[135.1524688,34.1930594],[135.152422,34.1930771],[135.152420299999989,34.1931343],[135.1524212,34.1931895],[135.152445199999988,34.1932099],[135.1524801,34.1932362],[135.152497899999986,34.1932835],[135.152504,34.1933156]],[[135.1535336,34.1931992],[135.1535874,34.1931701],[135.1536275,34.1931936],[135.153634399999987,34.1932243],[135.153629599999988,34.1932699],[135.153656,34.1932706],[135.153655,34.1932846],[135.153825399999988,34.1932857],[135.1538267,34.193355],[135.1538019,34.193355],[135.153800499999988,34.1933046],[135.1536271,34.1933053],[135.153624900000011,34.1933323],[135.1535924,34.1933538],[135.153557299999989,34.1933519],[135.1535245,34.1933343],[135.1535058,34.1933135],[135.1535111,34.1932173],[135.153523,34.1932077],[135.1535336,34.1931992]],[[135.1537952,34.1934499],[135.1537965,34.1933683],[135.1538287,34.1933672],[135.1538301,34.1934488],[135.1537952,34.1934499]],[[135.153793799999988,34.1935553],[135.1537925,34.1934748],[135.1538247,34.1934743],[135.153825399999988,34.1935553],[135.153793799999988,34.1935553]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"106465869","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"river\\"","area":94995.954766839743,"centroid_x":135.15316895926975,"centroid_y":34.193409518381387},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.149756700000012,34.195019],[135.1503276,34.1948094],[135.1508461,34.1948642],[135.1510348,34.1948914],[135.1510558,34.1948221],[135.151016199999987,34.1947989],[135.151508,34.1941958],[135.1515068,34.1941351],[135.1515393,34.1941364],[135.1515693,34.1938738],[135.151654799999989,34.1935652],[135.1517694,34.1933567],[135.1518859,34.1931942],[135.1519566,34.1931259],[135.152032600000013,34.1930654],[135.152274,34.1929162],[135.1523776,34.1928631],[135.1524527,34.1928331],[135.1526462,34.1927883],[135.1528671,34.1927521],[135.1529758,34.192741],[135.1530889,34.1927405],[135.153383600000012,34.1927701],[135.1535759,34.1927965],[135.1541709,34.1928772],[135.1542887,34.1929008],[135.1545395,34.1929662],[135.154758,34.1930133],[135.1549123,34.1930539],[135.1550541,34.1931248],[135.1552647,34.1932308],[135.1553079,34.1932669],[135.1553414,34.1933322],[135.155384,34.1935546],[135.1554305,34.1935643],[135.155469399999987,34.194304],[135.155495300000013,34.1952949],[135.1555338,34.1959455],[135.155500100000012,34.1959563],[135.155528299999986,34.1964407],[135.1555031,34.1964707],[135.1555463,34.1964806],[135.1555955,34.1984526],[135.1557709,34.1984395],[135.155708,34.1968601],[135.1557673,34.1968593],[135.155765800000012,34.196791],[135.1557065,34.1967919],[135.1556899,34.1963588],[135.1557426,34.1963577],[135.1557386,34.1962363],[135.1556859,34.1962375],[135.1556701,34.1939509],[135.155635100000012,34.1934045],[135.1556931,34.1933931],[135.1556688,34.1933017],[135.15557,34.1930298],[135.155581899999987,34.1930122],[135.1560638,34.1928646],[135.156018,34.1927169],[135.155772399999989,34.1925802],[135.1549713,34.1921807],[135.154769499999986,34.1921408],[135.154744,34.1921102],[135.1529854,34.1920773],[135.1524542,34.1920585],[135.1520282,34.1920127],[135.1520281,34.1920467],[135.151658700000013,34.1920397],[135.151570600000014,34.1920538],[135.1514939,34.1920867],[135.1514343,34.1921243],[135.151391600000011,34.1921925],[135.150707,34.1941288],[135.150586,34.1944137],[135.1504981,34.1945072],[135.1502556,34.1946038],[135.1500026,34.194641],[135.149601100000012,34.194593],[135.149683399999986,34.1948195],[135.149756700000012,34.195019]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"547853809","name":"S字の森","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"forest","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"leaf_cycle\\"=>\\"evergreen\\",\\"leaf_type\\"=>\\"needleleaved\\"","area":75038.42321407795,"centroid_x":135.15277932423371,"centroid_y":34.195832602883812},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1533937,34.2022644],[135.153535,34.202286],[135.1536638,34.2022483],[135.153653,34.2016449],[135.153500799999989,34.2009928],[135.1528356,34.1980823],[135.1518793,34.1949763],[135.1516387,34.1945192],[135.1518077,34.1940112],[135.1516575,34.1939202],[135.1518199,34.1935403],[135.15200440000001,34.1935471],[135.1523585,34.1936323],[135.153358,34.1936562],[135.15439330000001,34.1936873],[135.154426199999989,34.1931993],[135.1546454,34.1931748],[135.154683,34.1932635],[135.154758,34.1930133],[135.1541747,34.1928875],[135.1537308,34.1928265],[135.1530898,34.1927465],[135.1528658,34.192761],[135.1526489,34.1927993],[135.1525225,34.1928254],[135.152409799999987,34.192862],[135.1523106,34.1929085],[135.152220699999987,34.1929552],[135.1520303,34.1930761],[135.1519592,34.1931348],[135.1518849,34.1932096],[135.1517916,34.1933417],[135.1516494,34.1936628],[135.1515233,34.194162],[135.1515475,34.1943218],[135.151464299999986,34.1945592],[135.1513329,34.1947877],[135.1512131,34.1950243],[135.1520437,34.1967599],[135.1524273,34.1976717],[135.1526381,34.1985406],[135.152915400000012,34.1995419],[135.15313,34.2005779],[135.1532909,34.2014342],[135.1533937,34.2022644]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108769","name":"養翠亭","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":573.30724427103996,"centroid_x":135.15229924072182,"centroid_y":34.19345897149131},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1523439,34.1935933],[135.152348499999988,34.1935359],[135.1523512,34.193503],[135.1523391,34.1935003],[135.152377699999988,34.1934192],[135.152434,34.1934185],[135.1524324,34.193338],[135.1523736,34.1933366],[135.152348,34.193336],[135.15234860000001,34.1933448],[135.1523488,34.1933473],[135.1523144,34.1933469],[135.152297299999987,34.1933467],[135.152294899999987,34.1934152],[135.152252299999986,34.1934152],[135.1522507,34.1933879],[135.1522048,34.1933872],[135.1522056,34.1934145],[135.152181500000012,34.1934158],[135.1521783,34.1935136],[135.152229799999986,34.1935143],[135.152229,34.1935874],[135.1523439,34.1935933]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108770","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":41.24540589004755,"centroid_x":135.15206034752364,"centroid_y":34.193570340272913},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1520858,34.1935974],[135.152085,34.1935422],[135.1520368,34.1935429],[135.15203360000001,34.1935974],[135.1520858,34.1935974]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108771","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":6.886790057644248,"centroid_x":135.15209224999998,"centroid_y":34.1935219},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1520842,34.1935083],[135.1520834,34.1935355],[135.1521003,34.1935355],[135.15210110000001,34.1935083],[135.1520842,34.1935083]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108772","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":299.22076930105686,"centroid_x":135.1521055690676,"centroid_y":34.193738471671153},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1521751,34.1936619],[135.152048,34.1936632],[135.152048,34.1936978],[135.152036,34.1936985],[135.1520344,34.193751],[135.152046399999989,34.1937517],[135.1520456,34.1938275],[135.1521204,34.1938275],[135.152121200000011,34.1937923],[135.152176700000012,34.1937916],[135.1521751,34.1936619]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108773","name":"事務所","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":108.91981603205204,"centroid_x":135.15217717271801,"centroid_y":34.19385106587896},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1521325,34.1938182],[135.1521325,34.1938987],[135.152207299999986,34.193898],[135.1522077,34.1938809],[135.1522081,34.1938634],[135.152219300000013,34.1938634],[135.152219300000013,34.1937776],[135.1522024,34.1937776],[135.1522008,34.1938182],[135.1521325,34.1938182]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108774","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":78.190136693418026,"centroid_x":135.15207884933443,"centroid_y":34.193866772833339},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152036,34.1938974],[135.152121200000011,34.1938974],[135.152122,34.1938368],[135.1520368,34.1938355],[135.152036,34.1938974]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108775","name":"湊御殿","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":405.65684771537781,"centroid_x":135.15183339718456,"centroid_y":34.193879861008782},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1517184,34.1939379],[135.1519443,34.1939406],[135.1519556,34.1938648],[135.151941099999988,34.1938648],[135.151943499999987,34.1938235],[135.1519031,34.193822],[135.151724,34.1938155],[135.1517184,34.1939379]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"850108776","name":"預り御長屋","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":83.02385251224041,"centroid_x":135.15230877826164,"centroid_y":34.193942322552466},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152280600000012,34.1939906],[135.1523421,34.1939866],[135.1523345,34.1938942],[135.1522784,34.1938949],[135.152280600000012,34.1939906]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441844","name":null,"type":null,"aeroway":null,"amenity":"parking","admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":471.69749639183283,"centroid_x":135.15187693729683,"centroid_y":34.194181091266451},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152027,34.1942159],[135.1520194,34.194181],[135.1520045,34.1941023],[135.1519223,34.1941172],[135.1517509,34.1941481],[135.151718100000011,34.1941519],[135.1517499,34.1942593],[135.1517747,34.1942495],[135.1519427,34.1942289],[135.152027,34.1942159]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441854","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":"garden","man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":185.98705090582371,"centroid_x":135.15245319332888,"centroid_y":34.19354186161587},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152400699999987,34.1935918],[135.1525145,34.1935935],[135.1525206,34.1934997],[135.1523807,34.1934892],[135.152400699999987,34.1935918]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441862","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":"garden","man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":271.76622760295868,"centroid_x":135.15194724865447,"centroid_y":34.193328124159677},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1520767,34.1933063],[135.1519538,34.1932934],[135.1518941,34.1932572],[135.151817099999988,34.1933323],[135.1518553,34.1933537],[135.1520262,34.193389],[135.1520767,34.1933063]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441879","name":"御船蔵","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"pond\\"","area":262.0943865031004,"centroid_x":135.15203488667214,"centroid_y":34.193217377665732},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1521009,34.1931105],[135.152082799999988,34.1931114],[135.1520133,34.1931697],[135.1519561,34.1932291],[135.1519465,34.193239],[135.1519419,34.1932681],[135.1519629,34.1932803],[135.151984,34.1932866],[135.1520796,34.1932891],[135.152096300000011,34.1932032],[135.1521009,34.1931105]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441888","name":"アヤメ池","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"reservoir\\"","area":60.973889254033566,"centroid_x":135.15242674349113,"centroid_y":34.193519031479234},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1523937,34.1935657],[135.1524541,34.1935688],[135.1524368,34.1935276],[135.1524643,34.1934692],[135.152395500000011,34.1934807],[135.1524133,34.1935244],[135.1523937,34.1935657]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441898","name":"魚溜め","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"pond\\"","area":169.79266160726547,"centroid_x":135.15336524585067,"centroid_y":34.193028946928898},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1533268,34.1931041],[135.15336,34.1931048],[135.1534009,34.1931033],[135.1534057,34.1929568],[135.1533638,34.192954],[135.15332810000001,34.1929544],[135.1533268,34.1931041]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441899","name":"守護神","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":"wayside_shrine","land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":22.944574233610183,"centroid_x":135.15355186891213,"centroid_y":34.193314094613378},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1535395,34.1932909],[135.1535275,34.1933297],[135.1535633,34.1933379],[135.1535767,34.1932982],[135.1535595,34.1932948],[135.1535395,34.1932909]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441904","name":null,"type":null,"aeroway":null,"amenity":"toilets","admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":82.708766162395477,"centroid_x":135.151686469173,"centroid_y":34.194071434284218},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.151671099999987,34.1941261],[135.1517245,34.1941185],[135.151720899999987,34.1941033],[135.1517155,34.1940803],[135.1517096,34.1940554],[135.1517002,34.1940155],[135.1516495,34.1940241],[135.151671099999987,34.1941261]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441912","name":"魚溜め","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"water","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"water\\"=>\\"pond\\"","area":219.25955890119076,"centroid_x":135.15231789516304,"centroid_y":34.193143456690251},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152386299999989,34.193071],[135.152348100000012,34.1930761],[135.152302,34.1930979],[135.15223180000001,34.1931449],[135.1522113,34.1931774],[135.1522687,34.1931927],[135.1523334,34.1931943],[135.1523848,34.1931919],[135.1523858,34.1931347],[135.152386299999989,34.193071]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075441914","name":"正門","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":187.00004707463086,"centroid_x":135.1522399984502,"centroid_y":34.194121402054805},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1521218,34.194094],[135.1521224,34.1941486],[135.152254699999986,34.194149],[135.1523588,34.1941484],[135.152357200000012,34.1940839],[135.1523183,34.1940844],[135.152318,34.1941005],[135.1522747,34.1941008],[135.152275,34.1941118],[135.1522559,34.1941117],[135.15223610000001,34.1941121],[135.1522358,34.194101],[135.15220930000001,34.194101],[135.152208,34.19408],[135.1521852,34.19408],[135.152183799999989,34.1940938],[135.1521218,34.194094]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075443411","name":"桃畠跡","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":"garden","man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":422.51724345982075,"centroid_x":135.15186556453023,"centroid_y":34.193696770631966},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.151738200000011,34.1937819],[135.151938,34.1937831],[135.1519403,34.1935615],[135.1519034,34.1935603],[135.1517543,34.1937376],[135.151738200000011,34.1937819]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075443413","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"roof","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"layer\\"=>\\"2\\"","area":11.021122585982084,"centroid_x":135.15199213559737,"centroid_y":34.193951876084611},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1519816,34.1939352],[135.151981,34.1939521],[135.151980400000014,34.1939682],[135.1520026,34.1939686],[135.1520033,34.1939522],[135.152003799999989,34.1939355],[135.1519816,34.1939352]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1075443414","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":"garden","man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":96.163140192627907,"centroid_x":135.15216429141327,"centroid_y":34.19397856006956},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152207299999986,34.1939345],[135.1521086,34.1939554],[135.1521276,34.1940169],[135.1522081,34.1940136],[135.152207299999986,34.1939345]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1076057669","name":"金柑畑跡","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":"garden","man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":444.8111938610673,"centroid_x":135.15291865218475,"centroid_y":34.193032380519},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.152744,34.1929888],[135.1527769,34.19308],[135.15309640000001,34.1930741],[135.153125,34.1930362],[135.152940199999989,34.1929758],[135.152744,34.1929888]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1076530802","name":"養翠園","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":"park","man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":40549.403908923268,"centroid_x":135.15286935937226,"centroid_y":34.193448021018376},"geometry":{"type":"MultiPolygon","coordinates":[[[[135.1513007,34.194933],[135.1514,34.1949552],[135.151465699999989,34.1948975],[135.1515904,34.1948509],[135.151641399999988,34.1948032],[135.1516387,34.1947322],[135.1516387,34.1946401],[135.151648099999989,34.1945936],[135.151691,34.1944693],[135.15172050000001,34.1943606],[135.1517311,34.1942937],[135.151747300000011,34.1942696],[135.152071,34.1942166],[135.15223,34.194213],[135.1522769,34.1942128],[135.152352799999989,34.1942126],[135.1523578,34.1941636],[135.1523588,34.1941484],[135.1523726,34.1940371],[135.1523876,34.1937194],[135.1523896,34.193692],[135.1523913,34.1936676],[135.1524375,34.1936474],[135.1529947,34.1936596],[135.154412,34.1936982],[135.154410500000012,34.1935228],[135.1544121,34.1929446],[135.1541747,34.1928875],[135.1537308,34.1928265],[135.1530898,34.1927465],[135.1528658,34.192761],[135.1526489,34.1927993],[135.1525225,34.1928254],[135.152409799999987,34.192862],[135.1523106,34.1929085],[135.152220699999987,34.1929552],[135.1520303,34.1930761],[135.1519592,34.1931348],[135.1518849,34.1932096],[135.1517916,34.1933417],[135.1516642,34.1935658],[135.1515693,34.1938738],[135.1515393,34.1941364],[135.1515736,34.1943329],[135.151505899999989,34.1945414],[135.151414100000011,34.1946989],[135.1513349,34.1948315],[135.1513007,34.194933]]]]}}]}'),lW=JSON.parse('{"type":"FeatureCollection","name":"map-points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"4177730755","name":"船着場","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":null,"area":null,"centroid_x":135.152504,"centroid_y":34.1933156},"geometry":{"type":"Point","coordinates":[135.152504,34.1933156]}},{"type":"Feature","properties":{"osm_id":"7931190382","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"ford\\"=>\\"yes\\"","area":null,"centroid_x":135.1524942,"centroid_y":34.193423},"geometry":{"type":"Point","coordinates":[135.1524942,34.193423]}},{"type":"Feature","properties":{"osm_id":"9863116257","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1530119,"centroid_y":34.1935024},"geometry":{"type":"Point","coordinates":[135.1530119,34.1935024]}},{"type":"Feature","properties":{"osm_id":"9863116260","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"amenity\\"=>\\"vending_machine\\",\\"vending\\"=>\\"drinks\\"","area":null,"centroid_x":135.1520348,"centroid_y":34.1942107},"geometry":{"type":"Point","coordinates":[135.1520348,34.1942107]}},{"type":"Feature","properties":{"osm_id":"9863116287","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1524661,"centroid_y":34.1932553},"geometry":{"type":"Point","coordinates":[135.1524661,34.1932553]}},{"type":"Feature","properties":{"osm_id":"9863116297","name":null,"barrier":"gate","highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":null,"area":null,"centroid_x":135.1522374,"centroid_y":34.1938539},"geometry":{"type":"Point","coordinates":[135.1522374,34.1938539]}},{"type":"Feature","properties":{"osm_id":"9863116303","name":"御船蔵","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1521072,"centroid_y":34.1933475},"geometry":{"type":"Point","coordinates":[135.152107199999989,34.1933475]}},{"type":"Feature","properties":{"osm_id":"9863116311","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.153161,"centroid_y":34.1929894},"geometry":{"type":"Point","coordinates":[135.153161,34.1929894]}},{"type":"Feature","properties":{"osm_id":"9863122984","name":"湊御殿","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1519977,"centroid_y":34.1938837},"geometry":{"type":"Point","coordinates":[135.15199770000001,34.1938837]}},{"type":"Feature","properties":{"osm_id":"9863122988","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1521459,"centroid_y":34.1940383},"geometry":{"type":"Point","coordinates":[135.1521459,34.1940383]}},{"type":"Feature","properties":{"osm_id":"9863122995","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1523075,"centroid_y":34.1938511},"geometry":{"type":"Point","coordinates":[135.1523075,34.1938511]}},{"type":"Feature","properties":{"osm_id":"9863122997","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1521035,"centroid_y":34.1940887},"geometry":{"type":"Point","coordinates":[135.15210350000001,34.1940887]}},{"type":"Feature","properties":{"osm_id":"9863123002","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1520575,"centroid_y":34.1939321},"geometry":{"type":"Point","coordinates":[135.152057500000012,34.1939321]}},{"type":"Feature","properties":{"osm_id":"9863123005","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1520527,"centroid_y":34.193959},"geometry":{"type":"Point","coordinates":[135.152052700000013,34.193959]}},{"type":"Feature","properties":{"osm_id":"9863123009","name":null,"barrier":"gate","highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":null,"area":null,"centroid_x":135.1519693,"centroid_y":34.1935402},"geometry":{"type":"Point","coordinates":[135.1519693,34.1935402]}},{"type":"Feature","properties":{"osm_id":"9863123010","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1520159,"centroid_y":34.193961},"geometry":{"type":"Point","coordinates":[135.1520159,34.193961]}},{"type":"Feature","properties":{"osm_id":"9863123011","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1522799,"centroid_y":34.1937811},"geometry":{"type":"Point","coordinates":[135.1522799,34.1937811]}},{"type":"Feature","properties":{"osm_id":"9863123015","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1522865,"centroid_y":34.1938807},"geometry":{"type":"Point","coordinates":[135.1522865,34.1938807]}},{"type":"Feature","properties":{"osm_id":"9863159340","name":null,"barrier":"gate","highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":null,"area":null,"centroid_x":135.1522971,"centroid_y":34.1933156},"geometry":{"type":"Point","coordinates":[135.1522971,34.1933156]}},{"type":"Feature","properties":{"osm_id":"9863159348","name":null,"barrier":"gate","highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":null,"area":null,"centroid_x":135.1517509,"centroid_y":34.1941481},"geometry":{"type":"Point","coordinates":[135.1517509,34.1941481]}},{"type":"Feature","properties":{"osm_id":"9863159357","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1522211,"centroid_y":34.1932604},"geometry":{"type":"Point","coordinates":[135.1522211,34.1932604]}},{"type":"Feature","properties":{"osm_id":"9863159388","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.15227,"centroid_y":34.193286},"geometry":{"type":"Point","coordinates":[135.15227,34.193286]}},{"type":"Feature","properties":{"osm_id":"9863159407","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1538197,"centroid_y":34.1936493},"geometry":{"type":"Point","coordinates":[135.153819700000014,34.1936493]}},{"type":"Feature","properties":{"osm_id":"9863159428","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1521301,"centroid_y":34.1933553},"geometry":{"type":"Point","coordinates":[135.1521301,34.1933553]}},{"type":"Feature","properties":{"osm_id":"9863159430","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1528076,"centroid_y":34.1934567},"geometry":{"type":"Point","coordinates":[135.152807599999988,34.1934567]}},{"type":"Feature","properties":{"osm_id":"9863159440","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1520452,"centroid_y":34.1941323},"geometry":{"type":"Point","coordinates":[135.1520452,34.1941323]}},{"type":"Feature","properties":{"osm_id":"9863159462","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":"torii","other_tags":null,"area":null,"centroid_x":135.1535676,"centroid_y":34.1932736},"geometry":{"type":"Point","coordinates":[135.1535676,34.1932736]}},{"type":"Feature","properties":{"osm_id":"9863159464","name":"名勝　養翠園","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1522811,"centroid_y":34.1942019},"geometry":{"type":"Point","coordinates":[135.15228110000001,34.1942019]}},{"type":"Feature","properties":{"osm_id":"9863159478","name":"元、金カン畑","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1529478,"centroid_y":34.1930882},"geometry":{"type":"Point","coordinates":[135.1529478,34.1930882]}},{"type":"Feature","properties":{"osm_id":"9863159487","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"stone\\"","area":null,"centroid_x":135.1535428,"centroid_y":34.1932544},"geometry":{"type":"Point","coordinates":[135.1535428,34.1932544]}},{"type":"Feature","properties":{"osm_id":"9863159491","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1523724,"centroid_y":34.1935924},"geometry":{"type":"Point","coordinates":[135.1523724,34.1935924]}},{"type":"Feature","properties":{"osm_id":"9863159492","name":null,"barrier":"gate","highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":null,"area":null,"centroid_x":135.1522073,"centroid_y":34.1935862},"geometry":{"type":"Point","coordinates":[135.152207299999986,34.1935862]}},{"type":"Feature","properties":{"osm_id":"9863159510","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1523475,"centroid_y":34.1940139},"geometry":{"type":"Point","coordinates":[135.1523475,34.1940139]}},{"type":"Feature","properties":{"osm_id":"9863159516","name":"北の庭","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1529567,"centroid_y":34.1935447},"geometry":{"type":"Point","coordinates":[135.1529567,34.1935447]}},{"type":"Feature","properties":{"osm_id":"9863159519","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1519933,"centroid_y":34.1935188},"geometry":{"type":"Point","coordinates":[135.151993299999987,34.1935188]}},{"type":"Feature","properties":{"osm_id":"9863159524","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1522782,"centroid_y":34.1933425},"geometry":{"type":"Point","coordinates":[135.152278200000012,34.1933425]}},{"type":"Feature","properties":{"osm_id":"9863159531","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1522478,"centroid_y":34.1932904},"geometry":{"type":"Point","coordinates":[135.1522478,34.1932904]}},{"type":"Feature","properties":{"osm_id":"9863159532","name":"名勝　養翠園","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":135.1523033,"centroid_y":34.1942011},"geometry":{"type":"Point","coordinates":[135.1523033,34.1942011]}},{"type":"Feature","properties":{"osm_id":"9863437779","name":"狐山","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"peak\\"","area":null,"centroid_x":135.1527836,"centroid_y":34.1931402},"geometry":{"type":"Point","coordinates":[135.1527836,34.1931402]}},{"type":"Feature","properties":{"osm_id":"9868165468","name":"時雨亭跡","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"archaeological_site\\"","area":null,"centroid_x":135.1535232,"centroid_y":34.1928431},"geometry":{"type":"Point","coordinates":[135.1535232,34.1928431]}},{"type":"Feature","properties":{"osm_id":"9868165469","name":"鴨寄せ","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":null,"area":null,"centroid_x":135.1540519,"centroid_y":34.1930767},"geometry":{"type":"Point","coordinates":[135.154051900000013,34.1930767]}},{"type":"Feature","properties":{"osm_id":"9868165475","name":"弁天社","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"building\\"=>\\"wayside_shrine\\"","area":null,"centroid_x":135.15354,"centroid_y":34.1933122},"geometry":{"type":"Point","coordinates":[135.15354,34.1933122]}},{"type":"Feature","properties":{"osm_id":"9868165476","name":"稲荷社","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"building\\"=>\\"wayside_shrine\\"","area":null,"centroid_x":135.1535605,"centroid_y":34.193317},"geometry":{"type":"Point","coordinates":[135.1535605,34.193317]}},{"type":"Feature","properties":{"osm_id":"9868165482","name":"夜泊石","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"stone\\"","area":null,"centroid_x":135.1526122,"centroid_y":34.193381},"geometry":{"type":"Point","coordinates":[135.1526122,34.193381]}},{"type":"Feature","properties":{"osm_id":"9869682180","name":"八千代御腰掛跡","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"archaeological_site\\"","area":null,"centroid_x":135.1515931,"centroid_y":34.1942585},"geometry":{"type":"Point","coordinates":[135.151593100000014,34.1942585]}},{"type":"Feature","properties":{"osm_id":"9871920379","name":"八千代亭跡","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"archaeological_site\\"","area":null,"centroid_x":135.1516186,"centroid_y":34.1944582},"geometry":{"type":"Point","coordinates":[135.1516186,34.1944582]}},{"type":"Feature","properties":{"osm_id":"9871920389","name":"高燈籠","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"archaeological_site\\"","area":null,"centroid_x":135.1514965,"centroid_y":34.1947932},"geometry":{"type":"Point","coordinates":[135.1514965,34.1947932]}},{"type":"Feature","properties":{"osm_id":"9871920390","name":"神様松","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.151459,"centroid_y":34.1947633},"geometry":{"type":"Point","coordinates":[135.151459,34.1947633]}},{"type":"Feature","properties":{"osm_id":"12325413381","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1535239,"centroid_y":34.1933284},"geometry":{"type":"Point","coordinates":[135.15352390000001,34.1933284]}},{"type":"Feature","properties":{"osm_id":"12325413382","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1536026,"centroid_y":34.1933403},"geometry":{"type":"Point","coordinates":[135.1536026,34.1933403]}},{"type":"Feature","properties":{"osm_id":"12325413383","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1535996,"centroid_y":34.1933132},"geometry":{"type":"Point","coordinates":[135.1535996,34.1933132]}},{"type":"Feature","properties":{"osm_id":"12325413384","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1535387,"centroid_y":34.1932586},"geometry":{"type":"Point","coordinates":[135.153538700000013,34.1932586]}},{"type":"Feature","properties":{"osm_id":"12325413385","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"natural\\"=>\\"tree\\"","area":null,"centroid_x":135.1535702,"centroid_y":34.1931881},"geometry":{"type":"Point","coordinates":[135.1535702,34.1931881]}}]}'),lZ=JSON.parse('{"type":"FeatureCollection","name":"measures","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"direction":"x","distance":1.5520999999978358e-3,"ellipsoidal_distance":143.06388390729595},"geometry":{"type":"LineString","coordinates":[[135.15286,34.193851],[135.1544121,34.193851]]}},{"type":"Feature","properties":{"direction":"y","distance":1.1045000000038385e-3,"ellipsoidal_distance":122.51763693658717},"geometry":{"type":"LineString","coordinates":[[135.15286,34.193851],[135.15286,34.1927465]]}}]}');let lY={areas:lR,internals:lA,origin:JSON.parse('{"type":"FeatureCollection","name":"origin","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[135.15286,34.193851]}}]}'),measures:lZ,viewbox:JSON.parse('{"type":"FeatureCollection","name":"viewbox","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"direction":null,"distance":null,"ellipsoidal_distance":null},"geometry":{"type":"LineString","coordinates":[[135.15286,34.193851],[135.1513007,34.1949552]]}},{"type":"Feature","properties":{"direction":null,"distance":null,"ellipsoidal_distance":null},"geometry":{"type":"LineString","coordinates":[[135.1513007,34.1949552],[135.1544121,34.1927465]]}}]}'),points:lW,lines:lP,multilinestrings:lI,multipolygons:lH},lU={pointMap:(l=lY.points,(0,ef.zG)(l.features,eh.DZ(e=>{let n=e.properties.osm_id;return null===n?e_.YP:e_.G([Number(n),e])}),e=>new Map(e))),lineMap:(r=lY.lines,(0,ef.zG)(r.features,eh.DZ(e=>{let n=e.properties.osm_id;return null===n?e_.YP:e_.G([Number(n),e])}),e=>new Map(e))),multilinestringMap:(a=lY.multilinestrings,(0,ef.zG)(a.features,eh.DZ(e=>{let n=e.properties.osm_id;return null===n?e_.YP:e_.G([Number(n),e])}),e=>new Map(e))),multipolygonMap:(i=lY.multipolygons,(0,ef.zG)(i.features,eh.DZ(e=>{let n=e.properties.osm_id,t=e.properties.osm_way_id,l=null!==n?n:null!==t?t:null;return null===l?e_.YP:e_.G([Number(l),e])}),e=>new Map(e)))},{mapCoord:lG,mapViewBox:lX}=function(e){let{origin:n,measures:t,viewbox:l}=e,r=eZ(n.features[0].geometry.coordinates),a=t.features[0],i=t.features[1],o=eZ(a.geometry.coordinates[1]),u=eZ(i.geometry.coordinates[1]),s=function(e,n){let t=e.x/n.x,l=e.y/n.y;return{...e,x:t,y:l}}({x:a.properties.ellipsoidal_distance,y:i.properties.ellipsoidal_distance},{x:o.x-r.x,y:u.y-r.y});return{mapCoord:{matrix:new DOMMatrixReadOnly().scale(s.x,s.y).translate(-r.x,-r.y)},mapViewBox:eD(function(e){let n=e.features[0].geometry.coordinates,[t,l]=eR(n[1],n[0]),r=e.features[1].geometry.coordinates,[a,i]=eR(r[1],r[0]);return{x:t,y:l,width:a,height:i}}(l),eS(eN(s)))}}(lY);document.title=`svgmapviewer @ ${window.location.host}`,!function(e){var n,t,l;let r={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0};d({origViewBox:r,isContainerRendered:lw,isUiRendered:t9,...e}),d({...s});let a={...s,origViewBox:r,...e};ep.start(),eB.start(),lb.start(),nq.start(),nd.start(),ne.start(),ll.start(),nI.start(),nQ.start(),c.add(nc),m.add(ny),e.getMapNames&&(n=e.getMapNames(),ni.trigger.set({names:n})),a.searchEntries.length>0&&(t=function(e,n){var t;let l=null==(t=s.cartoConfig)?void 0:t.skipNamePattern;return[...e.points.features.flatMap(e=>{let{properties:t}=e,r=no(t,n,l);return null===r?[]:[r]}),...e.multipolygons.features.flatMap(e=>{let{properties:t}=e,r=no(t,n,l);return null===r?[]:[r]})]}(a.mapData,a.searchEntries),nu.postMessage({type:"INIT",entries:t})),void 0!==a.floorsConfig&&(l=a.floorsConfig.fidx,ep.send({type:"SELECT",fidx:l,force:!0}));let i=document.getElementById(a.root);if(null===i)throw Error("#root not found!");i.onwheel=function(e){var n;let t=i.children[0];e.target instanceof HTMLDivElement&&(null==(n=e.target)?void 0:n.id)==="ui"||(null!==t&&t.clientWidth===t.scrollWidth||n3)&&e.preventDefault()},i.oncontextmenu=function(e){e.preventDefault()},i.ontouchmove=function(e){if(n3){var n;if(e.target instanceof HTMLDivElement&&(null==(n=e.target)?void 0:n.id)==="ui")return;e.preventDefault()}else if(!lr)return;e.preventDefault()},document.title=a.title,document.body.onkeydown=lm,document.body.onkeyup=lp,(0,nm.createRoot)(i).render((0,I.jsx)(o.StrictMode,{children:(0,I.jsx)(lE,{})}));let u=document.getElementById("style-root");if(null===u)throw Error("#style-root not found!");(0,nm.createRoot)(u).render((0,I.jsx)(o.StrictMode,{children:(0,I.jsx)(lF,{})}))}({mapData:lY,mapMap:lU,mapCoord:lG,origViewBox:lX,...lN,title:"Yosuien",copyright:"@ Daiji Maps | map data @ OpenStreetMap contributers",zoomFactor:3,root:"root",map:"map1"})}},n={};function t(l){var r=n[l];if(void 0!==r)return r.exports;var a=n[l]={exports:{}};return e[l].call(a.exports,a,a.exports,t),a.exports}t.m=e,t.d=(e,n)=>{for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})},t.u=e=>"static/js/async/"+e+"."+({469:"5ab87319",547:"f9caa48e"})[e]+".js",t.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=[];t.O=(n,l,r,a)=>{if(l){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[l,r,a];return}for(var o=1/0,i=0;i<e.length;i++){for(var[l,r,a]=e[i],u=!0,s=0;s<l.length;s++)(!1&a||o>=a)&&Object.keys(t.O).every(e=>t.O[e](l[s]))?l.splice(s--,1):(u=!1,a<o&&(o=a));if(u){e.splice(i--,1);var d=r();void 0!==d&&(n=d)}}return n}})(),t.p="./",(()=>{t.b=document.baseURI||self.location.href;var e={980:0};t.O.j=n=>0===e[n];var n=(n,l)=>{var r,a,[i,o,u]=l,s=0;if(i.some(n=>0!==e[n])){for(r in o)t.o(o,r)&&(t.m[r]=o[r]);if(u)var d=u(t)}for(n&&n(l);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},l=self.webpackChunk=self.webpackChunk||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))})();var l=t.O(void 0,["361","825","639"],function(){return t(561)});l=t.O(l)})();