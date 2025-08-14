(()=>{"use strict";var e={561:function(e,t,n){var r,l,a,i,o=n(4249);let s={type:"",name:"",crs:{type:"",properties:{name:""}},features:[]},u={root:"root",map:"map",href:"map.svg",width:0,height:0,fontSize:16,origViewBox:{x:0,y:0,width:0,height:0},title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,getMapLayers:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],getMapNames:()=>[],searchEntries:[],renderInfo:function(e){return(0,o.createElement)("p",{},e.info.title)},mapSvgStyle:"",renderMap:function(){return(0,o.createElement)("div")},isMapRendered:()=>!0,mapData:{areas:s,internals:s,origin:s,measures:s,viewbox:s,points:s,lines:s,multilinestrings:s,multipolygons:s},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly}};function c(e){u={...u,...e}}let d=new Set,m=new Set,p=new Set,y=new Set,g=new Set,h=new Set,f=new Set,x=new Set,_=new Set,w=new Set,v=new Set,b=new Set,S=new Set,E=new Set,j=new Set,M=new Set,k=new Set,O=new Set,$=new Set,C=new Set,T=new Set,D=new Set,N=new Set,F=new Set,L=new Set,z=new Set,R=new Set;function A(){E.forEach(e=>e())}function I(e,t){O.forEach(n=>n(e,t))}var P=n(8586),H=n(4649);n(9701);let W={context:{ids:new Set}};(0,H.a)({context:function(){let e=function(e){if(!e)return;let t=JSON.parse(e);if("context"in t&&"ids"in t.context)return{...t,context:{...t.context,ids:new Set(t.context.ids)}}}(localStorage.getItem("svgmapviewer:likes"));return void 0===e?W:e}().context,on:{like:(e,t)=>({...e,ids:new Set(Array.from(e.ids.add(t.id)))}),unlike:(e,t)=>(e.ids.delete(t.id),{...e,ids:new Set(Array.from(e.ids))})}}).subscribe(function(e){localStorage.setItem("svgmapviewer:likes",JSON.stringify({...e,context:{...e.context,ids:Array.from(e.context.ids.keys())}}))});let Z=`
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
`,et=`
box-sizing: border-box;
`,en=`
width: 100vw;
height: 100vh;
height: 100svh;
`,er=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,el=`
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
`,es=`
pointer-events: initial;
`,eu=`
background-color: rgba(255, 255, 255, 0.5);
`,ec=`
cubic-bezier(0, 0, 0, 1)
`,ed=`
cubic-bezier(1, 0, 1, 1)
`,em="250ms",ep=(0,U.cY)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null},initial:"Idle",states:{Idle:{on:{SELECT:[{guard:e=>{let{event:t}=e;return t.force??!1},actions:(0,X.a)({fidx:e=>{let{event:t}=e;return t.fidx}})},{guard:e=>{let{context:t,event:n}=e;return t.fidx!==n.fidx},actions:(0,X.a)({fidx:e=>{let{event:t}=e;return t.fidx},prevFidx:e=>{let{context:t}=e;return t.fidx}}),target:"Animating"}]}},Animating:{on:{DONE:{actions:(0,X.a)({prevFidx:null}),target:"Idle"}}}}}),ey=(0,G.c)(ep);function eg(){let{fidx:e,prevFidx:t}=(0,Y.v9)(ey,e=>e.context),n=function(e,t){let n=u.floorsConfig;if(void 0===n)return null;let r=n.floors.map((n,r)=>r===e||r===t?"":`
.fidx-${r} {
  visibility: hidden;
}
`).join(""),l=null===t?"":`
.fidx-${t} {
  will-change: opacity;
  animation: xxx-disappearing ${em} linear;
}
.fidx-${e} {
  will-change: opacity;
  animation: xxx-appearing ${em} linear;
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
${r}
${l}
`}(e,t),r=(0,o.useCallback)(t=>t===e?()=>{b.forEach(e=>e(t))}:void 0,[e]),l=(0,o.useCallback)(n=>null!==t||n===e?void 0:()=>{w.forEach(e=>e(n))},[e,t]);return{fidx:e,prevFidx:t,style:n,fidxToOnAnimationEnd:r,fidxToOnClick:l}}ey.start(),v.add(function(e){ey.send({type:"SELECT",fidx:e})}),b.add(function(e){ey.send({type:"DONE",fidx:e})});var eh=n(6058),ef=n(5185),ex=n(8945);function e_(e,t,n){let[r,l,a]=e,[i,o]=t;return r*i+l*o+a*n}function ew(e,t,n){return[e_(function(e){let[[t],[n],[r]]=e;return[t,n,r]}(e),t,n),e_(function(e){let[[,t],[,n],[,r]]=e;return[t,n,r]}(e),t,n)]}function ev(e,t){return[ew(e,function(e){let[t]=e;return t}(t),0),ew(e,function(e){let[,t]=e;return t}(t),0),ew(e,function(e){let[,,t]=e;return t}(t),1)]}function eb(e){let[t,n]=e;return[[1,0],[0,1],[t,n]]}function eS(e){let[t,n]=e;return[[t,0],[0,n],[0,0]]}function eE(e,t,n,r){return{x:e,y:t,width:n,height:r}}let ej={x:0,y:0,width:1,height:1};function eM(e){return{x:e.x,y:e.y,width:e.width,height:e.height}}function ek(e){return{x:e.x+.5*e.width,y:e.y+.5*e.height}}function eO(e,t){return{...e,x:e.x+t.x,y:e.y+t.y}}function e$(e,t){return{...e,x:t.x,y:t.y}}function eC(e){let{x:t,y:n,width:r,height:l}=e;return{tl:{x:t,y:n},br:{x:t+r,y:n+l}}}function eT(e){let{tl:t,br:n}=e;return{x:t.x,y:t.y,width:n.x-t.x,height:n.y-t.y}}function eD(e){let{tl:t,br:n}=e;return[[t.x,t.y],[n.x,n.y]]}function eN(e){let[[t,n],[r,l]]=e;return{tl:{x:t,y:n},br:{x:r,y:l}}}function eF(e,t){return(0,ex.zG)(e,eC,eD,e=>(function(e,t){let[n,r]=e;return[t(n),t(r)]})(e,e=>ew(t,e,1)),eN,eT)}function eL(e,t,n,r){return eF(e,function(e,t){let[n,r]=t;return[eb(t),eS(e),eb([-n,-r])].reduce(ev)}(ez(t),[n,r]))}function ez(e){return"number"==typeof e?[e,e]:"x"in e?[e.x,e.y]:e}function eR(e,t){let[n,r]=e,[l,a]=t;return[n-l,r-a]}function eA(e,t){let n=e.x+t.x,r=e.y+t.y;return{...e,x:n,y:r}}function eI(e,t){let n=e.x-t.x,r=e.y-t.y;return{...e,x:n,y:r}}var eP=n(592);let eH=n(6750).Zt(function(e,t){return eP.Df.compare(e.x,t.x)||eP.Df.compare(e.y,t.y)}),eW={x:0,y:0};function eZ(e){let[t,n]=e;return{x:t,y:n}}function eY(e,t){let n="number"==typeof t?t:t instanceof Array?t[0]:t.x,r="number"==typeof t?t:t instanceof Array?t[1]:t.y,l=e.x*n,a=e.y*r;return{...e,x:l,y:a}}var eU=n(6011),eX=n(5582);async function eG(){return new Promise((e,t)=>{navigator.geolocation.getCurrentPosition(function(t){e(t)},function(e){t(e)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}let eq=(0,U.cY)({types:{events:{},emitted:{}},actors:{api:(0,eU.p4)(eG)},delays:{TIMEOUT:5e3}}).createMachine({id:"geoloc",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,X.a)({position:e=>{let{event:t}=e;return t.output}}),(0,eX.e)(e=>{let{event:t}=e;return{type:"POSITION",position:t.output}})],target:"Idle"},onError:{actions:(0,X.a)({error:e=>{let{event:t}=e;return JSON.stringify(t)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),eB=(0,G.c)(eq);eB.start(),z.add(function(){eB.send({type:"GET"})});let eK=[1,2,2.5,5,10,15,20,25,30,40,50],eV=(0,U.cY)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,X.a)({ticked:!1}),set:(0,X.a)({ticked:!0}),call:(0,eX.e)({type:"CALL"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["call","clear"],target:"Idle"}},on:{TICK:{guard:e=>{let{context:t}=e;return!t.ticked},actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:e=>{let{event:t}=e;return t}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["call","clear"],target:"Idle"}}}}),eJ={container:ej,scroll:ej,content:new DOMMatrixReadOnly,svgOffset:{x:0,y:0},svgScale:{s:1},svg:ej};function eQ(e){let{container:t,svgOffset:n,svgScale:r,svg:l}=e;return{container:eM(t),scroll:eM(t),content:new DOMMatrixReadOnly,svgOffset:n,svgScale:r,svg:eM(l)}}function e9(e){let{scroll:t,content:n,svgOffset:r,svgScale:l,svg:a}=e;return new DOMMatrixReadOnly().translate(t.x,t.y).multiply(n).translate(-r.x,-r.y).scale(1/l.s,1/l.s).translate(-a.x,-a.y)}let e3={...eJ,config:{fontSize:16,container:ej,svgOffset:{x:0,y:0},svgScale:{s:1},svg:ej}};function e5(e){let{a:t,b:n,c:r,d:l}=e,a=new DOMMatrixReadOnly([t,n,r,l,0,0]).transformPoint({x:1,y:0});return Math.atan2(a.y,a.x)/Math.PI*180}function e0(e,t){return function(e,t,n){let r=e9(e).inverse().transformPoint(n),l=e.container.width/e.container.height,a=l<1?t/l:t,i=l<1?t:t*l;return{...e,scroll:eL(e.scroll,[a,i],n.x,n.y),svgOffset:eY(e.svgOffset,[a,i]),svg:eL(e.svg,[a,i],r.x,r.y)}}(e,t,ek(e.scroll))}function e1(e,t){let n=e.scroll.width/2,r=e.scroll.height/2,l=new DOMMatrixReadOnly().translate(n,r).rotate(t).translate(-n,-r).multiply(e.content);return{...e,content:l}}function e6(e,t){let n=eI(eY(t,-1),e.scroll);return(0,ex.zG)(e,e=>({...e,scroll:eO(e.scroll,n)}),t=>(function(e,t){let n=e.content.inverse(),r={x:e.scroll.width/2,y:e.scroll.height/2},l=eA(r,eI(e.scroll,t)),a=n.transformPoint(r),i=eY(eI(n.transformPoint(l),a),-e.svgScale.s);return{...e,scroll:e$(e.scroll,t),svg:eO(e.svg,i)}})(t,eM(e.scroll)))}function e2(e){if(null===e)return!0;let t=document.querySelector(".container");if(null===t)return!1;let n=t.scrollLeft,r=t.scrollTop,l=t.scrollWidth,a=t.scrollHeight;if(null===n)return!1;let i=l-e.width,o=a-e.height;if(Math.abs(i)>1||Math.abs(o)>1)return console.log(`scroll: target ${i>0?"larger":"smaller"} than expected: target=[${l}, ${a}] vs. request=[${e.width}, ${e.height}]`),!1;let s=Math.round(-e.x),u=Math.round(-e.y);if(s<0||u<0)return console.error(`scroll: out-of-bound request: [${e.x}], [${e.y}]`),!1;n!==s&&(t.scrollLeft=s),r!==u&&(t.scrollTop=u);let c=t.scrollLeft;if(Math.abs(c-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${c}`),!1;let d=t.scrollTop;return!(Math.abs(d-u)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${d}`),!1)}let e8={scroll:ej,client:{width:0,height:0},timeStamp:0},e4=new Set;e4.add(function(e){let t=e.currentTarget;null!==t&&(e8={scroll:{x:t.scrollLeft,y:t.scrollTop,width:t.scrollWidth,height:t.scrollHeight},client:{width:t.clientWidth,height:t.clientHeight},timeStamp:e.timeStamp})});let e7=(0,U.cY)({types:{events:{},context:{}},actions:{updateZoom:(0,X.a)({zoom:(e,t)=>t.zoom,z:(e,t)=>t.z}),updateRotate:(0,X.a)({}),updateSvgMatrix:(0,X.a)({svgMatrix:e=>{let{context:{layout:t}}=e;return function(e){let{content:t,svgOffset:n,svgScale:r,svg:l}=e;return new DOMMatrixReadOnly().multiply(t).translate(-n.x,-n.y).scale(1/r.s,1/r.s).translate(-l.x,-l.y)}(t)}}),updateGeoMatrix:(0,X.a)({geoMatrix:e=>{let{context:t}=e;return t.svgMatrix.multiply(u.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,X.a)({distanceRadius:e=>{let{context:{layout:t}}=e;return function(e){var t;let{container:n,svgScale:r}=e,l=Math.max(n.width,n.height)/2*r.s,a=Math.round(Math.log10(l)),i=(t=l/Math.pow(10,a-1),eK.flatMap(e=>{let n=Math.floor(t/e);return n<3||n>=10?[]:[{u:e,n}]}));if(i.length<1)throw Error("findDiv");let{u:o}=i[0],s=o*Math.pow(10,a-1);return{svg:s,client:s/r.s}}(t)}}),updateScroll:(0,X.a)({geoPoint:(e,t)=>{let{context:n}=e,{scroll:r,client:l}=t,a=n.geoMatrix,i={x:r.x+l.width/2,y:r.y+l.height/2};return a.transformPoint(i)},geoRange:(e,t)=>{let{context:n}=e,{scroll:r,client:l}=t,a=n.geoMatrix,i={x:r.x,y:r.y},o={x:r.x+l.width,y:r.y+l.height};return{start:a.transformPoint(i),end:a.transformPoint(o)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:e3,zoom:1,z:null,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:eW,distanceRadius:{svg:0,client:0},geoRange:{start:eW,end:eW},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,X.a)({rendered:e=>{let{event:t}=e;return t.rendered},layout:e=>{let{event:t}=e;return t.layout}}),"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,G.r)(e=>{let{event:{rendered:t}}=e;return{type:"LAYOUT.DONE",rendered:t}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:e=>{let{event:t}=e;return t}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:e=>{let{event:t}=e;return t.currentScroll}}},"STYLE.MODE":{actions:(0,X.a)({mode:e=>{let{event:t}=e;return t.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return t.rendered},actions:(0,X.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,X.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,X.a)({animation:e=>{let{event:{animation:t}}=e;return t},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:e=>{let{event:t}=e;return!t.rendered},actions:(0,X.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,X.a)({animation:null,animating:!1}),target:"Idle"}}}}}),te=(0,G.c)(e7,{systemId:"system-viewer1"});function tt(e){te.send(e)}function tn(){return(0,Y.v9)(te,e=>e.context.layout.container)}function tr(){return(0,Y.v9)(te,e=>e.context.distanceRadius)}function tl(){tt({type:"STYLE.SCROLL",currentScroll:e8})}te.start(),M.add(function(e,t){tt({type:"STYLE.LAYOUT",layout:e,rendered:t}),requestAnimationFrame(()=>tl())}),k.add(function(e,t,n){tt({type:"STYLE.ZOOM",zoom:t,z:n})}),O.add(function(e,t){tt({type:"STYLE.ZOOM",zoom:t,z:null})}),$.add(function(e){tt({type:"STYLE.ANIMATION",animation:e})}),C.add(function(e){tt({type:"STYLE.MODE",mode:e})});let ta=function(e,t){let n=eV.provide({delays:{DURATION:500}}),r=(0,G.c)(n);return r.on("CALL",t),r.start(),{machine:n,actor:r,tick:function(){r.send({type:"TICK"})}}}(0,tl);e4.add(ta.tick);let ti=(0,H.a)({context:{names:[]},on:{set:(e,t)=>{let{names:n}=t;return{names:n}}}});function to(e,t,n){let r=function(e){let t="osm_id"in e&&"string"==typeof e.osm_id?e.osm_id:"osm_way_id"in e&&"string"==typeof e.osm_way_id?e.osm_way_id:null;return null===t?null:Number(t)}(e);if(null===r)return null;let l=e.name;if(null!==l&&void 0!==n&&l.match(n))return null;let{centroid_x:a,centroid_y:i}=e;return null===a||null===i||0===t.filter(t=>t.filter(e)).length?null:{a:r+"",lonlat:{x:a,y:i}}}let ts=new Worker(new URL(n.p+n.u("469"),n.b),Object.assign({},{type:"module"},{type:void 0}));ts.onmessage=e=>{let t=e.data;"INIT.DONE"===t.type||"SEARCH.DONE"===t.type&&function(e){var t;let n=function(e,t,n){let r=function(e,t){if(void 0===e)return null;let n=t.pointMap.get(e);if(void 0!==n)return n;let r=t.lineMap.get(e);if(void 0!==r)return r;let l=t.multipolygonMap.get(e);return void 0!==l?l:null}(Number(n.address),e);if(null===r)return null;let l=r.properties,a=t.flatMap(e=>e.filter(l)?[e.getInfo(l,n.address)]:[]);return 0===a.length?null:a[0]}(u.mapMap,u.searchEntries,e);null!==n&&(t=u.mapCoord.matrix.transformPoint(e.lonlat),p.forEach(e=>e({psvg:t,info:n})))}(t.res)},ts.onerror=e=>{console.log("error",e)},ts.onmessageerror=e=>{console.log("messageerror",e)},m.add(function(e){let t=u.mapCoord.matrix.inverse().transformPoint(e);ts.postMessage({type:"SEARCH",pgeo:t})});let tu=(0,U.cY)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Idle",states:{Idle:{on:{SEARCH:{actions:(0,eX.e)(e=>{let{event:t}=e;return t}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,eX.e)(e=>{let{event:t}=e;return t}),target:"Done"},"SEARCH.CANCEL":{target:"Done"}}},Done:{always:"Idle"}}}),tc=(0,G.c)(tu);function td(e){tc.send({type:"SEARCH",psvg:e})}function tm(e){tc.send(null===e?{type:"SEARCH.CANCEL"}:{type:"SEARCH.DONE",...e})}tc.on("SEARCH",e=>{let{psvg:t}=e;m.forEach(e=>e(t))}),tc.on("SEARCH.DONE",e=>{let{psvg:t,info:n}=e;y.forEach(e=>e({psvg:t,info:n}))}),tc.start();var tp=n(4428);let ty=new Map;function tg(e,t,n){(0,o.useEffect)(()=>(function(e,t,n){let r=void 0===n?document:ty.get(n)??null;if(null===r)return;let l=r.querySelector(`#${e}`)??null;if(null===l||null!==l.shadowRoot)return;let a=l.attachShadow({mode:"open"});ty.set(e,a),(0,tp.createRoot)(a).render(t)})(e,t,n),[e,n,t])}function th(){return(0,P.jsxs)("g",{id:"XBus",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,P.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,P.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,P.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})}function tf(){return(0,P.jsxs)("g",{id:"XDrinkingFountain",children:[(0,P.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,P.jsxs)("g",{fill:"white",stroke:"none",children:[(0,P.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,P.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,P.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,P.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,P.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,P.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,P.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,P.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,P.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,P.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,P.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,P.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,P.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,P.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,P.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,P.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,P.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,P.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})}function tx(){return(0,P.jsxs)("g",{id:"XElevator",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,P.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,P.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,P.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,P.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,P.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,P.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,P.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,P.jsx)("use",{x:"8.5",href:"#_person2"}),(0,P.jsx)("use",{x:"17",href:"#_person2"})]})}function t_(){return(0,P.jsxs)("g",{id:"XEscalator",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,P.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,P.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})}function tw(){return(0,P.jsxs)("g",{id:"XInformation",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,P.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,P.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})}function tv(){return(0,P.jsxs)("g",{id:"XParking",children:[(0,P.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,P.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})}function tb(){return(0,P.jsxs)("g",{id:"XStairs",transform:"translate(-36, -36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})}function tS(){return(0,P.jsxs)("g",{id:"XToilets",transform:"translate(-36,-36)",children:[(0,P.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,P.jsxs)("g",{fill:"white",stroke:"none",children:[(0,P.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,P.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,P.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,P.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,P.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})}function tE(){return(0,P.jsx)("g",{className:"assets",children:(0,P.jsx)(tj,{})})}function tj(){return(0,P.jsxs)("g",{className:"symbols",children:[(0,P.jsx)(th,{}),(0,P.jsx)(tf,{}),(0,P.jsx)(tx,{}),(0,P.jsx)(t_,{}),(0,P.jsx)(tw,{}),(0,P.jsx)(tv,{}),(0,P.jsx)(tb,{}),(0,P.jsx)(tS,{})]})}function tM(e){return e>.5?-1:+(e<.5)}function tk(e){return e<.3?1:e>.7?-1:0}function tO(e,t,n,r){let l=t/2,a=n/2,i=t/20,o=i/2,s={x:-l*e.h,y:-a*e.v},u=0===e.h||0===e.v?{x:-(l+r)*e.h,y:-(a+r)*e.v}:{x:-(l+r*Math.cos(e.th))*e.h,y:-(a+r*Math.sin(e.th))*e.v},[c,d]=0===e.h?[{x:-o,y:0},{x:o,y:0}]:0===e.v?[{x:0,y:-o},{x:0,y:o}]:e.th<Math.PI/4?[{x:0,y:0},{x:0,y:i*e.v}]:[{x:0,y:0},{x:i*e.h,y:0}],m=eA(s,c),p=eA(s,d);return{p:s,q:u,a:m,b:p}}function t$(e){return{open:e,animating:!1}}function tC(e){return e.open||e.animating?null:{open:!0,animating:!0}}function tT(e){return e.open&&e.animating?{open:!0,animating:!1}:null}function tD(e){return!e.open||e.animating?null:{open:!1,animating:!0}}function tN(e){return e.open||!e.animating?null:{open:!1,animating:!1}}function tF(e){let{open:t,animating:n}=e;return t||n}Object.entries({bus:"#XBus",elevator:"#XElevator",escalator:"#XEscalator",information:"#XInformation",parking:"#XParking",stairs:"#XStairs",toilets:"#XToilets",water:"#XDrinkingFountain"});let tL={p:eW,psvg:eW,layout:eJ,info:{title:""}};function tz(e){return function(t,n){let r=t[n],l=e(r);return t[n]=null===l?r:l,t}}let tR=(0,U.cY)({types:{},guards:{isHeaderVisible:e=>{let{context:{m:t}}=e;return tF(t.header)},isDetailVisible:e=>{let{context:{m:t}}=e;return tF(t.detail)},animationEnded:e=>{let{context:{animationEnded:t}}=e;return t.header&&t.detail}},actions:{startCancel:(0,X.a)({canceling:()=>!0}),endCancel:(0,X.a)({canceling:()=>!1}),open:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tz(tC)(n,r)}}),close:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tz(tD)(n,r)}}),handle:(0,X.a)({m:(e,t)=>{let{context:{m:n}}=e,{part:r}=t;return tz(n[r].open?tT:tN)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:e=>{let{input:t}=e;return{...t,all:{open:!1,animating:!1},canceling:!1,detail:tL,m:{header:t$(!0),detail:t$(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,X.a)({detail:e=>{let{event:{psvg:t,info:n,layout:r}}=e;return{psvg:t,p:e9(r).transformPoint(t),info:n,layout:r}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,G.n)("animationEnded")},{actions:(0,X.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,G.n)("isDetailVisible")},{actions:(0,X.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,G.n)("animationEnded")},{actions:(0,X.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,G.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,X.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,eX.e)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,X.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,header:!0}}}),(0,G.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,X.a)({animationEnded:e=>{let{context:t}=e;return{...t.animationEnded,detail:!0}}}),(0,G.r)({type:"DONE"})]}}}}});function tA(){return(0,Y.v9)(tP,e=>e.context.m.header)}function tI(){return(0,Y.v9)(tP,e=>e.context.m.detail)}let tP=(0,G.c)(tR);tP.on("CLOSE.DONE",function(){_.forEach(e=>e())}),tP.start();function tH(e){return(0,P.jsxs)("div",{className:"balloon",children:[(0,P.jsx)(tZ,{...e}),e.children,(0,P.jsx)("style",{children:tW})]})}g.add(function(e,t,n){tP.send({type:"DETAIL",psvg:e,info:t,layout:n})}),f.add(function(e){tP.send({type:e?"OPEN":"CANCEL"})}),x.add(function(){tP.send({type:"CANCEL"})}),_.add(function(){requestAnimationFrame(()=>(function(){let e=ty.get("detail");if(void 0===e)return;let t=e.querySelector(".detail");null!==t&&t.scroll(0,0)})())});let tW=`
.balloon,
.balloon-svg {
  ${q}
  ${eo}
  z-index: 10;
  will-change: opacity, transform;
}
`;function tZ(e){let t=e._hv;if(null===t)return(0,P.jsx)("svg",{});let{viewBox:n,width:r,height:l,fg:a,bg:i}=function(e,t){let{bw:n,bh:r,ll:l,d:a,width:i,height:o}=t,s=eE(-i/2,-i/2,i,o),{body:u,leg:c}=function(e,t,n,r){let l=t/2,a=n/2,i=`
m${-l},${-a}
h${t}
v${n}
h${-t}
z
`,{p:o,q:s,a:u,b:c}=tO(e,t,n,r),d=eI(s,u),m=eI(c,s),p=eI(o,c);return{body:i,leg:`
m${u.x},${u.y}
l${d.x},${d.y}
l${m.x},${m.y}
l${p.x},${p.y}
z
`}}(e,n,r,l);return{viewBox:s,width:i,height:o,bg:`M${a},${a}`+u+`M${a},${a}`+c,fg:"M0,0"+u+"M0,0"+c}}(t,e._size);return(0,P.jsxs)("svg",{className:"balloon-svg",viewBox:function(e){let{x:t,y:n,width:r,height:l}=e;return`${t} ${n} ${r} ${l}`}(function(e,t){let{x:n,y:r,width:l,height:a}=e;return{x:t(n),y:t(r),width:t(l),height:t(a)}}(n,function(e){return Math.round(100*e)/100})),width:r,height:l,children:[(0,P.jsx)("path",{className:"bg",d:i}),(0,P.jsx)("path",{className:"fg",d:a}),(0,P.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function tY(e){let{_p:t,_hv:n,_size:r,_leg:l}=e,a=tI(),i=null!==t&&null!==n&&tF(a)?function(e,t,n,r,l){let{open:a,animating:i}=e,{bw:o,bh:s,width:u,height:c}=r,d=eI(l.q,l.p),m={x:(o/2+Math.abs(d.x))*n.h,y:(s/2+Math.abs(d.y))*n.v};if(i){let[e,n]=a?[0,1]:[1,0],[r,l]=a?[0,1]:[1,0],[i,o]=a?["0px","var(--dp-x)"]:["var(--dp-x)","0px"],[s,d]=a?["0px","var(--dp-y)"]:["var(--dp-y)","0px"],p=a?ec:ed;return`
.detail,
.balloon {
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --dp-x: ${m.x}px;
  --dp-y: ${m.y}px;
  --oa: ${e};
  --ob: ${n};
  --sa: ${r};
  --sb: ${l};
  --timing: ${p};
  --dxa: ${i};
  --dxb: ${o};
  --dya: ${s};
  --dyb: ${d};
  --pww: ${-u/2}px;
  --phh: ${-c/2}px;
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
  --q-x: ${t.x}px;
  --q-y: ${t.y}px;
  --sb: 1;
  --dp-x: ${m.x}px;
  --dp-y: ${m.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-u/2}px;
  --phh: ${-c/2}px;
}

.detail {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(-50%, -50%) translate3d(0px, 0px, 0px);
}

.balloon {
  transform-origin: 0 0;
  transform: translate(calc(var(--q-x) + var(--dxb)), calc(var(--q-y) + var(--dyb))) scale(var(--sb)) translate(var(--pww), var(--phh)) translate3d(0px, 0px, 0px);
}
`}(a,t,n,r,l):".balloon, .detail { visibility: hidden; }";return(0,P.jsx)("style",{children:i})}function tU(e){return"=+iI".indexOf(e)>=0?1:"-_oO".indexOf(e)>=0?-1:0}let tX=(0,U.cY)({types:{},actions:{getScroll:(0,X.a)({scroll:()=>(function(){let e=document.querySelector(".container");if(null!==e){let t=e.scrollLeft,n=e.scrollTop,r=e.scrollWidth,l=e.scrollHeight;return e.scrollLeft=Number(t)+1,e.scrollLeft=Number(t),eE(t,n,r,l)}return null})()}),syncScroll:(e,t)=>{let{pos:n}=t;return e2(n)}},actors:{syncScrollLogic:(0,eU.p4)(async e=>{let{input:t}=e;if(null===t)throw Error("input is null");if(!e2(t))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:e=>{let{event:t}=e;return{pos:t.pos}}}]},GET:{actions:["getScroll",(0,eX.e)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.GET.DONE",scroll:t}})]},SYNCSYNC:{actions:(0,X.a)({dest:e=>{let{event:t}=e;return t.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:e=>{let{context:t}=e;return t.dest},onDone:{actions:["getScroll",(0,eX.e)(e=>{let{context:{scroll:t}}=e;return{type:"SCROLL.SYNCSYNC.DONE",scroll:t}}),(0,X.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),tG={slideDoneCbs:new Set,getDoneCbs:new Set,syncSyncDoneCbs:new Set},tq=(0,G.c)(tX,{systemId:"system-scroll1"});function tB(e){tq.send(e)}tq.on("SCROLL.SLIDE.DONE",e=>tG.slideDoneCbs.forEach(t=>t(e))),tq.on("SCROLL.GET.DONE",e=>tG.getDoneCbs.forEach(t=>t(e))),tq.on("SCROLL.SYNCSYNC.DONE",e=>tG.syncSyncDoneCbs.forEach(t=>t(e)));let tK="panning",tV=(0,U.cY)({types:{},guards:{shouldReset:(e,t)=>{let{ev:n}=t;return"r"===n.key},shouldRecenter:(e,t)=>{let{ev:n}=t;return"c"===n.key},shouldRotate:(e,t)=>{let{ev:n}=t;return"t"===n.key},shouldZoom:(e,t)=>{let{ev:n}=t;return 0!==tU(n.key)},isTouching:e=>{let{context:{touching:t}}=e;return t},isHoming:e=>{let{context:{homing:t}}=e;return t},isZoomWanted:e=>{let{context:{want_animation:t}}=e;return"zoom"===t},isRotateWanted:e=>{let{context:{want_animation:t}}=e;return"rotate"===t},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>u.isMapRendered(),isUiRendered:()=>u.isUiRendered()},actions:{syncScroll:e=>{let{context:{layout:t}}=e;return tB({type:"SYNC",pos:t.scroll})},syncScrollSync:e=>{let{context:{layout:t}}=e;return tB({type:"SYNCSYNC",pos:t.scroll})},getScroll:()=>tB({type:"GET"}),zoomKey:(0,X.a)({z:(e,t)=>{let{ev:n}=t;return tU(n.key)}}),zoomHome:(0,X.a)({z:()=>null,zoom:()=>1,homing:()=>!0}),zoomEvent:(0,X.a)({z:(e,t)=>{let{z:n}=t;return n},cursor:(e,t)=>{let{context:{cursor:n}}=e,{p:r}=t;return null===r?n:r}}),startZoom:(0,X.a)({animation:e=>{let{context:{layout:t,cursor:n,z:r}}=e;return null===r?function(e,t){let n=ek(t.config.svg),r=e9(e).transformPoint(n),l=t.svgScale.s/e.svgScale.s,a=ek(e.container),i=new DOMMatrixReadOnly().translate(a.x,a.y).scale(1/l).translate(-r.x,-r.y);return{move:null,zoom:{svg:t.svg,svgScale:t.svgScale,q:i,o:null},rotate:null}}(t,function(e){let{config:t,content:n}=e,r=eQ(t),l=e5(n);return e1({config:t,...r},l)}(t)):function(e,t,n){var r,l;let a=e9(e).inverse().transformPoint(n),i=1/(l=t,Math.pow(u.zoomFactor,l)),o=new DOMMatrixReadOnly().scale(1/i,1/i);return{move:null,zoom:{svg:eL(e.svg,i,a.x,a.y),svgScale:(r=e.svgScale,"x"in r?{x:r.x*i,y:r.y*i}:{s:r.s*i}),q:o,o:n},rotate:null}}(t,r,n)}}),startRotate:(0,X.a)({animation:e=>{let{context:{layout:t,cursor:n}}=e;return{move:null,zoom:null,rotate:{deg:90,q:new DOMMatrixReadOnly().rotate(90),o:n}}}}),updateZoom:(0,X.a)({prevLayout:e=>{let{context:{layout:t}}=e;return t},layout:e=>{let{context:{layout:t,animation:n}}=e;return null===n?t:(0,ex.zG)(t,e=>{var t;return null===n.move?e:(t=n.move.move,{...e,scroll:e$(e.scroll,t)})},e=>{var t,r;return null===n.zoom?e:(t=n.zoom.svg,r=n.zoom.svgScale,{...e,svg:eM(t),svgScale:r})},e=>null===n.rotate?e:e1(e,n.rotate.deg))}}),endZoom:(0,X.a)({prevLayout:null,want_animation:null,animation:null,z:null,zoom:e=>{let{context:{z:t,zoom:n}}=e;return null===t?n:n*Math.pow(2,t)}}),endRotate:(0,X.a)({prevLayout:null,want_animation:null,animation:null}),wantZoom:(0,X.a)({want_animation:"zoom"}),wantRotate:(0,X.a)({want_animation:"rotate"}),syncAnimation:e=>{var t,n,r,l,a,i,o;let{context:{animation:s}}=e,u=(null==s||null==(t=s.move)?void 0:t.q)??(null==s||null==(n=s.zoom)?void 0:n.q)??(null==s||null==(r=s.rotate)?void 0:r.q)??null,c=(null==s||null==(l=s.move)?void 0:l.o)??(null==s||null==(a=s.zoom)?void 0:a.o)??(null==s||null==(i=s.rotate)?void 0:i.o)??null;null!==u&&(o={matrix:u,origin:c},$.forEach(e=>e(o)))},syncLayout:e=>{let{context:{layout:t,rendered:n}}=e;M.forEach(e=>e(t,n))},resetCursor:(0,X.a)({cursor:e=>{let{context:{layout:t}}=e;return ek(t.container)}}),cursor:(0,X.a)({cursor:(e,t)=>{let{ev:n}=t;return{x:n.pageX,y:n.pageY}}}),setModeToPanning:(0,X.a)({mode:tK,cursor:e=>{let{context:{layout:t}}=e;return ek(t.container)}}),setModeToTouching:(0,X.a)({mode:"touching"}),setModeToLocked:(0,X.a)({mode:"locked"}),startTouching:(0,X.a)({touching:!0}),endTouching:(0,X.a)({touching:!1}),notifyTouching:(0,G.r)({type:"TOUCHING"}),notifyTouchingDone:(0,G.r)({type:"TOUCHING.DONE"}),startAnimating:(0,X.a)({animating:()=>!0}),stopAnimating:(0,X.a)({animating:()=>!1}),resizeLayout:(0,X.a)({rendered:!1,origLayout:(e,t)=>{let{layout:n}=t;return n},layout:(e,t)=>{let{layout:n}=t;return e0(n,9)}}),updateLayoutFromScroll:(0,X.a)({layout:e=>{let{context:t}=e,{scroll:n}=e8;return e6(t.layout,n)}}),notifyZoomStart:(0,eX.e)(e=>{let{context:{layout:t,zoom:n,z:r}}=e;return{type:"ZOOM.START",layout:t,zoom:n,z:null===r?0:r}}),notifyZoomEnd:(0,eX.e)(e=>{let{context:{layout:t,zoom:n}}=e;return{type:"ZOOM.END",layout:t,zoom:n}}),notifySearch:(0,eX.e)(e=>{let{context:t}=e,{scroll:n}=e8;return{type:"SEARCH",psvg:e9(e6(t.layout,n)).inverse().transformPoint(t.cursor)}}),notifySearchDone:(0,G.r)({type:"SEARCH.DONE"}),notifySearchEndDone:(0,eX.e)((e,t)=>{let{context:n}=e,{res:r}=t,{scroll:l}=e8,a=e6(n.layout,l);return{type:"SEARCH.END.DONE",psvg:r.psvg,info:r.info,layout:a}}),endHoming:(0,X.a)({cursor:e=>{let{context:t}=e;return ek(t.origLayout.container)},layout:e=>{let{context:t}=e;return e1(e0(t.origLayout,9),e5(t.layout.content))},homing:()=>!1}),notifyMode:(0,eX.e)(e=>{let{context:{mode:t}}=e;return{type:"MODE",mode:t}}),notifyLock:(0,eX.e)({type:"LOCK",ok:!0}),setRendered:(0,X.a)({rendered:!0}),notifySwitch:(0,eX.e)((e,t)=>{let{fidx:n}=t;return{type:"SWITCH",fidx:n}}),notifySwitchDone:(0,eX.e)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"Resizing",context:{origLayout:e3,layout:e3,prevLayout:null,cursor:ek(e3.container),z:null,zoom:1,homing:!1,want_animation:null,animation:null,mode:tK,touching:!1,animating:!1,rendered:!1},on:{"TOUCH.LOCK":{actions:["startTouching","notifyTouching","setModeToTouching","notifyMode"]},"TOUCH.UNLOCK":{actions:["endTouching","notifyTouchingDone","setModeToPanning","notifyMode"]},"SEARCH.LOCK":{actions:["notifyLock","setModeToLocked","notifyMode"]},"SEARCH.UNLOCK":{actions:["setModeToPanning","notifyMode","notifySearchDone"]}},states:{Resizing:{initial:"WaitingForResizeRequest",onDone:"Appearing",states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:e=>{let{event:t}=e;return t}},target:"WaitingForMapRendered"}}},WaitingForWindowStabilized:{id:"Resizing-WaitingForWindowStabilized",after:{500:{target:"WaitingForMapRendered"}}},WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,G.a)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"syncLayout",on:{RENDERED:{actions:["setRendered","syncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"syncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Done"}}},Done:{type:"final"}}},Appearing:{on:{"ANIMATION.END":{target:"Panning"}}},Panning:{on:{RESIZE:{actions:[{type:"resizeLayout",params:e=>{let{event:t}=e;return t}}],target:"#Resizing-WaitingForWindowStabilized"},"LAYOUT.RESET":{actions:["zoomHome","wantZoom"],target:"Zooming"},"KEY.UP":[{guard:{type:"shouldZoom",params:e=>{let{event:t}=e;return{ev:t.ev}}},actions:[{type:"zoomKey",params:e=>{let{event:t}=e;return{ev:t.ev}}},"wantZoom"],target:"Zooming"},{guard:{type:"shouldRotate",params:e=>{let{event:t}=e;return{ev:t.ev}}},actions:"wantRotate",target:"Zooming"}],CLICK:{guard:()=>u.searchEntries.length>0,actions:[{type:"cursor",params:e=>{let{event:t}=e;return{ev:t.ev}}}],target:"Searching"},SWITCH:{actions:{type:"notifySwitch",params:e=>{let{event:t}=e;return t}},target:"Switching"},CONTEXTMENU:{target:"Recentering"},ROTATE:{actions:"wantRotate",target:"Zooming"},RECENTER:{target:"Recentering"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:e=>{let{event:{z:t,p:n}}=e;return{z:t,p:n}}},"wantZoom"],target:"Zooming"},TOUCHING:{target:"Touching"}}},Touching:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Waiting"}}},Waiting:{on:{"TOUCHING.DONE":{target:"Done"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:e=>{let{event:{z:t,p:n}}=e;return{z:t,p:n}}},"wantZoom"],target:"#Zooming"}}},Done:{type:"final"}}},Searching:{initial:"Starting",onDone:"Panning",states:{Starting:{always:{actions:"notifySearch",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"notifySearchEndDone",params:e=>{let{event:t}=e;return t}},target:"WaitingForSearchUnlock"}}},WaitingForSearchUnlock:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Panning",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"notifySwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","syncLayout","syncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:[{guard:"isZoomWanted",actions:["updateLayoutFromScroll","startZoom","updateZoom","notifyZoomStart"],target:"Animating"},{guard:"isRotateWanted",actions:["updateLayoutFromScroll","startRotate","updateZoom","notifyZoomStart"],target:"Animating"}]},Animating:{initial:"Starting",onDone:"Done",states:{Starting:{always:{actions:["startAnimating","syncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":[{guard:"isZoomWanted",actions:["endZoom","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"},{guard:"isRotateWanted",actions:["endRotate","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"}]}},Homing:{always:[{guard:"isHoming",actions:["endHoming","syncLayout","syncScroll"],target:"Done"},{target:"Done"}]},Done:{type:"final"}}},Done:{type:"final"}}}}});function tJ(e){tQ.send(e)}let tQ=(0,G.c)(tV,{systemId:"system-viewer1"});tQ.on("SEARCH",e=>{let{psvg:t}=e;d.forEach(e=>e(t))}),tQ.on("SEARCH.END.DONE",e=>{let{psvg:t,info:n,layout:r}=e;g.forEach(e=>e(t,n,r)),h.forEach(e=>e(t,n,r))}),tQ.on("LOCK",e=>{let{ok:t}=e;f.forEach(e=>e(t))}),tQ.on("ZOOM.START",e=>{let{layout:t,zoom:n,z:r}=e;k.forEach(e=>e(t,n,r))}),tQ.on("ZOOM.END",e=>{let{layout:t,zoom:n}=e;return I(t,n)}),tQ.on("LAYOUT",e=>{let{layout:t}=e;return I(t,1)}),tQ.on("MODE",e=>{let{mode:t}=e;C.forEach(e=>e(t))}),tQ.on("SWITCH",e=>{let{fidx:t}=e;v.forEach(e=>e(t))}),tQ.on("SWITCH.DONE",()=>void S.forEach(e=>e())),tQ.start(),w.add(function(e){tJ({type:"SWITCH",fidx:e})}),b.add(function(){tJ({type:"SWITCH.DONE"})}),y.add(function(e){tQ.send({type:"SEARCH.END",res:e})}),h.add(function(e){tQ.send({type:"SEARCH.LOCK",psvg:e})}),_.add(function(){tQ.send({type:"SEARCH.UNLOCK"})}),j.add(function(e,t){tJ({type:"RESIZE",layout:e,force:t})}),tG.getDoneCbs.add(function(e){null!==e.scroll&&tJ({type:"SCROLL.GET.DONE",scroll:e.scroll})}),tG.syncSyncDoneCbs.add(function(e){null!==e.scroll&&tJ({type:"SCROLL.SYNCSYNC.DONE",scroll:e.scroll})});let t9=!1,t3=!1;function t5(e,t){null==t||t.preventDefault,(null==t?void 0:t.stopPropagation)===!1||e.ev.stopPropagation(),tJ(e)}function t0(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=e.current;if(t)return t.addEventListener("wheel",t1),()=>{t.removeEventListener("wheel",t1)}},[e]),e}function t1(e){let t=e.currentTarget;t3&&t instanceof HTMLDivElement&&t.scrollWidth===t.clientWidth&&t.scrollHeight===t.clientHeight&&e.preventDefault()}function t6(e){let{_detail:t}=e,n=t0();return(0,P.jsxs)("div",{ref:n,className:"detail",onAnimationEnd:()=>{var e;return e={type:"DETAIL.ANIMATION.END"},void tP.send(e)},children:[u.renderInfo&&!function(e){let t=Object.values(e.info);return 1===t.length&&"string"==typeof t[0]&&""===t[0]}(t)&&u.renderInfo({info:t.info}),(0,P.jsx)("style",{children:t2})]})}C.add(function(e){t9="locked"===e,t3="locked"===e}),k.add(function(){t3=!0}),O.add(function(){t3=!1}),N.add(function(){tJ({type:"LAYOUT.RESET"})}),F.add(function(){tJ({type:"RECENTER"})}),L.add(function(){tJ({type:"ROTATE"})}),D.add(function(){tJ({type:"ZOOM.ZOOM",z:-1,p:null})}),T.add(function(){tJ({type:"ZOOM.ZOOM",z:1,p:null})}),E.add(function(){tJ({type:"RENDERED"})});let t2=`
.detail {
  ${q}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${es}
  ${et}
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
`;function t8(){return tg("detail",(0,P.jsx)(t4,{}),"ui"),(0,P.jsx)("div",{id:"detail"})}function t4(){return(0,P.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,P.jsx)(t7,{}),(0,P.jsx)(ne,{})]})}function t7(){let e=(0,Y.v9)(tP,e=>e.context.detail),t=function(e){let t=e.p,n=e.layout,r=function(e,t){let{x:n,y:r}=t,l=e.width/e.height,a={x:n/e.width,y:r/e.height},i=l>1?tM(a.x):tk(a.x);return{h:i,v:l>1?tk(a.y):tM(a.y),th:Math.atan2(e.height,e.width)}}(e.layout.container,t),l=n.container.width,a=n.container.height,i=function(e,t){let n=.01*Math.min(e,t),r=50*n,l=50*n,a=10*n,i=r/100;return{bw:r,bh:l,ll:a,d:i,width:r+2*a+2*i,height:l+2*a+2*i}}(l,a),o=tO(r,i.bw,i.bh,i.ll);return{_p:t,_hv:r,_W:l,_H:a,_size:i,_leg:o}}(e);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(tH,{...t}),(0,P.jsx)(t6,{_detail:e}),(0,P.jsx)(tY,{...t})]})}function ne(){return(0,P.jsx)("svg",{id:"ui-svg-defs",children:(0,P.jsx)("defs",{children:(0,P.jsx)(tE,{})})})}function nt(){return tg("footer",(0,P.jsx)(nn,{}),"ui"),(0,P.jsx)("div",{id:"footer"})}function nn(){let e=u;return(0,P.jsxs)("div",{className:"ui-content footer",children:[(0,P.jsx)("p",{children:e.copyright}),(0,P.jsxs)("style",{children:[nr,(0,P.jsx)(nl,{})]})]})}let nr=`
.footer {
  ${K}
  ${er}
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
`;function nl(){let{open:e,animating:t}=tA();if(t){let[t,n]=e?[0,1]:[1,0],r=e?ec:ed;return(0,P.jsx)(P.Fragment,{children:`
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
`})}return(0,P.jsx)(P.Fragment,{children:`
.footer {
  --b: ${+!!e};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}let na=void 0;function ni(e){return Math.round(100*e)/100}function no(e){return Math.round(1e7*e)/1e7}function ns(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)("g",{id:"measure",children:(0,P.jsx)(nd,{})})})}function nu(){let{svg:e}=tr();return(0,P.jsxs)("div",{id:"distance",children:[(0,P.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),ng.map(t=>(0,P.jsxs)(o.Fragment,{children:[(0,P.jsxs)("p",{id:`distance-x-${t+1}`,className:"distance distance-x",children:[e*(t+1),"m"]}),(0,P.jsxs)("p",{id:`distance-y-${t+1}`,className:"distance distance-y",children:[e*(t+1),"m"]})]},t)),(0,P.jsx)("style",{children:(0,P.jsx)(ny,{})})]})}function nc(){let e=(0,Y.v9)(te,e=>e.context.geoPoint),t=e.x>0?"E":"W",n=e.y>0?"N":"S",r=`${t} ${no(Math.abs(e.x))}`,l=`${n} ${no(Math.abs(e.y))}`;return(0,P.jsxs)("div",{id:"coordinate",children:[(0,P.jsx)("p",{id:"longitude",children:r}),(0,P.jsx)("p",{id:"latitude",children:l}),(0,P.jsx)("style",{children:(0,P.jsx)(np,{})})]})}function nd(){let{width:e,height:t}=tn(),{client:n}=tr(),r=`M0,${t/2} h${e}`,l=`M${e/2},0 v${t}`,a=ng.map(r=>(function(e){let{width:t,height:n,r}=e;return`M${t/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:e,height:t,r:n*(r+1)}));return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,P.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:l}),a.map((e,t)=>(0,P.jsx)("path",{id:`measure-ring-${t+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:e},t))]})}function nm(){let{open:e,animating:t}=tA(),[n,r]=e?[0,1]:[1,0],l=t?`
.guides {
  --timing: ${e?ec:ed};
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
`;return(0,P.jsx)(P.Fragment,{children:l})}function np(){let{width:e,height:t}=tn(),n=`
#distance,
#coordinate {
  ${q}
  width: ${e}px;
  height: ${t}px;
}
`,r=`
#longitude {
  ${V}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-e/2}px, ${-t/2}px) scale(0.5);
}
`,l=`
#latitude {
  ${K}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${e/2}px, ${-t/2}px) scale(0.5);
}
`;return(0,P.jsxs)(P.Fragment,{children:[n,r,l]})}function ny(){let{width:e,height:t}=tn(),{client:n}=tr(),r=`
.distance {
  ${q}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,l=`
#distance-origin {
  transform: translate(${e/2}px, ${t/2}px) scale(0.5);
}
`,a=ng.map(r=>`
#distance-x-${r+1} {
  transform: translate(${e/2+n*(r+1)}px, ${t/2}px) scale(0.5);
}
`),i=ng.map(r=>`
#distance-y-${r+1} {
  transform: translate(${e/2}px, ${t/2+n*(r+1)}px) scale(0.5);
}
`);return(0,P.jsxs)(P.Fragment,{children:[l,r,a,i]})}let ng=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function nh(){return tg("guides",(0,P.jsx)(nf,{}),"ui"),(0,P.jsx)("div",{id:"guides"})}function nf(){return u.mapCoord.matrix.isIdentity?(0,P.jsx)(P.Fragment,{}):(0,P.jsxs)("div",{className:"ui-content guides",children:[(0,P.jsx)("svg",{className:"guides",children:(0,P.jsx)(ns,{})}),(0,P.jsx)(nu,{}),(0,P.jsx)(nc,{}),(0,P.jsxs)("style",{children:[nx,(0,P.jsx)(nm,{})]})]})}let nx=`
.guides {
  ${q}
  ${en}
  ${eo}
  z-index: 2;
}

text {
  ${ea}
}
`;function n_(){let{fidx:e,fidxToOnClick:t}=eg(),n=u.floorsConfig;return void 0===n||n.floors.length<2?(0,P.jsx)(P.Fragment,{}):(0,P.jsxs)("div",{className:"floors",children:[(0,P.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:l}=n;return(0,P.jsx)("li",{className:`floor-item ${nS(r===e)}`,onClick:t(r),children:l},r)})}),(0,P.jsx)("style",{children:nw})]})}let nw=`
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
  ${eu}
}
.floor-item {
  text-align: center;
  padding: 0.5em 0.75em;
  border: 1.5px solid black;
  pointer-events: initial;
  will-change: opacity;
  transition: opacity ${em};
}
.floor-item.selected {
  opacity: 1;
}
.floor-item.unselected {
  opacity: 0.5;
}
`;function nv(){let{fidx:e}=eg(),t=u.floorsConfig;return void 0===t||t.floors.length<2?(0,P.jsx)(P.Fragment,{}):(0,P.jsxs)("div",{children:[t.floors.map((t,n)=>(0,P.jsx)("h2",{className:`floor-name ${nS(n===e)}`,children:t.name},n)),(0,P.jsx)("style",{children:nb})]})}let nb=`
.floor-name {
  position: absolute;
  transform: translate(-50%, 0);
  margin: 0.25em 0;
  font-size: 4em;
  will-change: opacity;
  transition: opacity ${em};
}
.floor-name.selected {
  opacity: 1;
}
.floor-name.unselected {
  opacity: 0;
}
`;function nS(e){return e?"selected":"unselected"}function nE(){return tg("header",(0,P.jsx)(nj,{}),"ui"),(0,P.jsx)("div",{id:"header"})}function nj(){let e=u;return(0,P.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var e;return e={type:"HEADER.ANIMATION.END"},void tP.send(e)},children:[(0,P.jsx)("h1",{className:"title",onClick:()=>void N.forEach(e=>e()),children:e.title}),(0,P.jsx)(nv,{}),(0,P.jsxs)("style",{children:[nM,(0,P.jsx)(nk,{})]})]})}let nM=`
.header {
  ${q}
  ${er}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${ea}
  ${es}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function nk(){let{open:e,animating:t}=tA();if(t){let[t,n]=e?[0,1]:[1,0],r=e?ec:ed;return(0,P.jsx)(P.Fragment,{children:`
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
`})}return(0,P.jsx)(P.Fragment,{children:`
.header {
  --b: ${+!!e};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function nO(){return tg("left",(0,P.jsx)(n$,{}),"ui"),(0,P.jsx)("div",{id:"left"})}function n$(){return(0,P.jsxs)("div",{className:"ui-content left bottom",children:[(0,P.jsx)(n_,{}),(0,P.jsx)("style",{children:nC})]})}let nC=`
.left {
  ${q}
  ${el}
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
`;function nT(){return tg("right",(0,P.jsx)(nD,{}),"ui"),(0,P.jsx)("div",{id:"right"})}function nD(){return(0,P.jsxs)("div",{className:"ui-content right bottom",children:[(0,P.jsx)(nF,{}),(0,P.jsx)("style",{children:nN})]})}let nN=`
.right {
  ${B}
  ${el}
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
`;function nF(){return(0,P.jsxs)("div",{className:"zoom",children:[(0,P.jsx)(nz,{}),(0,P.jsx)(nR,{}),(0,P.jsx)(nA,{}),(0,P.jsx)(nI,{}),(0,P.jsx)(nP,{}),(0,P.jsx)(nH,{}),(0,P.jsxs)("style",{children:[nL,(0,P.jsx)(nW,{})]})]})}let nL=`
.zoom {
  font-size: large;
  margin: 0;
  ${er}
}

.zoom-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${es}
  cursor: default;
  ${eu}
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
`;function nz(){return(0,P.jsx)("div",{className:"zoom-item fullscreen",onClick:()=>void R.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nK})})})}function nR(){return u.mapCoord.matrix.isIdentity?(0,P.jsx)(P.Fragment,{}):(0,P.jsx)("div",{className:"zoom-item position",onClick:()=>void z.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nB})})})}function nA(){return(0,P.jsx)("div",{className:"zoom-item recenter",onClick:()=>void F.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nX})})})}function nI(){return(0,P.jsx)("div",{className:"zoom-item rotate",onClick:()=>void L.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nU})})})}function nP(){return(0,P.jsx)("div",{className:"zoom-item zoom-out",onClick:()=>void D.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nY})})})}function nH(){return(0,P.jsx)("div",{className:"zoom-item zoom-in",onClick:()=>void T.forEach(e=>e()),children:(0,P.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,P.jsx)("path",{d:nZ})})})}function nW(){let{open:e,animating:t}=tA();if(t){let[t,n]=e?[0,1]:[1,0],r=e?ec:ed;return(0,P.jsx)(P.Fragment,{children:`
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
`,nG=3*Math.sqrt(2),nq=nG+6,nB=`
M 0,0
m 0,${nq/2}
l -3,-3
a ${nG},${nG} 0,1,1 6,0
z
m 0,${-nq+nG+nG/2}
a ${nG/2},${nG/2} 0,1,0 0,${-nG}
a ${nG/2},${nG/2} 0,1,0 0,${nG}
`.replaceAll(/([.]\d\d)\d*/g,"$1"),nK=`
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
`;function nV(){return tg("shadow",(0,P.jsx)(nJ,{}),"ui"),(0,P.jsx)("div",{id:"shadow"})}function nJ(){let e=t0();return(0,P.jsx)("div",{ref:e,className:"ui-content shadow",onClick:()=>void x.forEach(e=>e()),children:(0,P.jsxs)("style",{children:[nQ,(0,P.jsx)(n9,{})]})})}let nQ=`
.shadow {
  ${q}
  ${en}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function n9(){let{open:e,animating:t}=tI(),n=(0,Y.v9)(te,e=>e.context.animating);if(!t)return e?(0,P.jsx)(P.Fragment,{children:`
.shadow {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,P.jsx)(P.Fragment,{children:".shadow { display: initial; opacity: 0; }"}):(0,P.jsx)(P.Fragment,{children:".shadow { display: none; }"});{let[t,n]=e?[0,.3]:[.3,0],r=e?ec:ed;return(0,P.jsx)(P.Fragment,{children:`
.shadow {
  --duration: 400ms;
  --timing: ${r};
  --a: ${t};
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
`})}}function n3(){return tg("ui",(0,P.jsx)(n5,{})),(0,P.jsx)("div",{id:"ui"})}function n5(){return(0,P.jsxs)("div",{className:"ui",children:[(0,P.jsx)(nV,{}),(0,P.jsx)(nE,{}),(0,P.jsx)(nt,{}),(0,P.jsx)(nO,{}),(0,P.jsx)(nT,{}),(0,P.jsx)(nh,{}),(0,P.jsx)(t8,{})]})}function n0(){var e,t,n;let r=(null==(n=document.querySelector("#ui"))||null==(t=n.shadowRoot)||null==(e=t.children)?void 0:e.length)??null;return null!==r&&r>0}var n1=n(8544);let n6=eh.pR(eH),n2=n1.YH(eP.Df),n8=n1.qO(),n4=n1.uZ(eP.Eq,eh.jG());function n7(e){return(0,ex.zG)(e,n1.VO(n6),eh.DZ(e=>0===e.length?ef.YP:ef.G(e[0])))}function re(e){return e.length<2?null:function(e){let t=0===e.length?null:e.reduce((e,t)=>({x:e.x+t.x,y:e.y+t.y}));return null===t?null:eY(t,1/e.length)}(e)}function rt(e){return new Map((0,ex.zG)(e.changedTouches,Array.from,eh.UI(e=>[e.identifier,[{x:e.clientX,y:e.clientY}]])))}let rn=(0,U.cY)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:e=>{let{context:{touches:t}}=e;return 0===t.vecs.size},isSingleTouching:e=>{let{context:{touches:t}}=e;return 1===t.vecs.size},isDoubleTouching:e=>{let{context:{touches:t}}=e;return 2===t.vecs.size},isManyTouching:e=>{let{context:{touches:t}}=e;return t.vecs.size>2},isZooming:e=>{let{context:{touches:t}}=e;return null!==t.z}},actions:{handleTouchStart:(0,eX.a)(e=>{let{enqueue:t}=e;t.assign({touches:e=>{let{context:{touches:t},event:n}=e;return"TOUCH.START"!==n.type?t:function(e,t){let n=n4.concat(e.vecs,rt(t)),r=n7(n),l=re(r),a=2!==r.length?null:.5>Math.abs(function(e,t){let n=eI(e,t);return n.y/n.x}(r[0],r[1]));return{...e,vecs:n,points:r,cursor:l,horizontal:a}}(t,n.ev)}}),t.raise({type:"STARTED"})}),handleTouchMove:(0,eX.a)(e=>{let{enqueue:t}=e;t.assign({touches:e=>{let{context:{touches:t},event:n}=e;return"TOUCH.MOVE"!==n.type?t:function(e,t,n){var r,l;let a=rt(t),i=n2.mapWithIndex(e.vecs,(e,t)=>(0,ex.zG)(a.get(e),ef.ij,ef.g_(()=>t,eh.zo(t)))),o=n7(i),s=re(o),[u,c]=o;if(null===s||u===na||c===na)return{...e,vecs:i,points:o,cursor:s};let d=function(e,t,n){let r=Math.pow((e.length>0?e[0]:t)-t,2);return 0===e.length||r>0?[t,...e]:e}(e.dists,Math.sqrt((r=u,l=c,Math.pow(r.x-l.x,2)+Math.pow(r.y-l.y,2))),0),m=function(e){let[t,n,r,l]=e;return t===na||n===na||r===na||l===na?null:t<n&&n<r&&r<l?-1:t>n&&n>r&&r>l?1:null}(d);return{vecs:i,points:o,cursor:s,dists:d,z:m,horizontal:e.horizontal}}(t,n.ev,0)}}),t.raise({type:"MOVED"})}),handleTouchEnd:(0,eX.a)(e=>{let{enqueue:t}=e;t.assign({touches:e=>{let{context:{touches:t},event:n}=e;return"TOUCH.END"!==n.type?t:function(e,t){let n=rt(t),r=n8.filterMapWithIndex(e.vecs,(e,t)=>n.has(e)?ef.YP:ef.G(t)),l=n7(r),a=re(l);return{vecs:r,points:l,cursor:a,dists:0===r.size?[]:e.dists,z:0===r.size?null:e.z,horizontal:e.horizontal}}(t,n.ev)}}),t.raise({type:"ENDED"})}),resetTouches:(0,X.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),notifyTouching:(0,eX.a)(e=>{let{enqueue:t,context:n}=e;return t.emit(2===n.touches.vecs.size?{type:"MULTI.START"}:{type:"MULTI.END"})}),notifyZoom:(0,eX.a)(e=>{let{context:t,enqueue:n}=e,r=t.touches.cursor,l=t.touches.z;null!==r&&null!==l&&n.emit({type:"ZOOM",p:r,z:l})})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:"handleTouchStart"},"TOUCH.MOVE":{actions:"handleTouchMove"},"TOUCH.END":{actions:"handleTouchEnd"},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"notifyTouching",exit:"notifyTouching",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"notifyZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),rr=(0,G.c)(rn),rl=!1;function ra(e){rr.send({type:"TOUCH.START",ev:e})}function ri(e){rr.send({type:"TOUCH.MOVE",ev:e})}function ro(e){rr.send({type:"TOUCH.END",ev:e})}function rs(){rr.send({type:"CANCEL"})}function ru(e){t9||t5({type:"CLICK",ev:e})}function rc(e){t5({type:"CONTEXTMENU",ev:e})}function rd(e){t5({type:"WHEEL",ev:e})}function rm(e){null!==e&&e4.forEach(t=>t(e))}function rp(e){tJ({type:"KEY.DOWN",ev:e})}function ry(e){tJ({type:"KEY.UP",ev:e})}function rg(){let e=(0,o.useRef)(null);return(0,P.jsxs)("div",{ref:e,id:"viewer",className:"container",onTouchStart:ra,onTouchMove:ri,onTouchEnd:ro,onClick:ru,onContextMenu:rc,onScroll:rm,onWheel:rd,onAnimationEnd:e=>{t5({type:"ANIMATION.END",ev:e}),te.send({type:"STYLE.ANIMATION.END"})},children:[u.renderMap(),(0,P.jsx)("style",{children:rh}),(0,P.jsx)(rf,{}),(0,P.jsx)(rx,{}),(0,P.jsx)(r_,{})]})}rr.on("MULTI.START",()=>{rl=!0,tJ({type:"TOUCH.LOCK"})}),rr.on("MULTI.END",()=>{tJ({type:"TOUCH.UNLOCK"}),rl=!1}),rr.on("ZOOM",e=>{let{z:t,p:n}=e;tJ({type:"ZOOM.ZOOM",z:t>0?1:-1,p:n})}),rr.start(),N.add(rs),R.add(rs),z.add(rs),F.add(rs),D.add(rs),T.add(rs);let rh=`
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
`;function rf(){let e=(0,Y.v9)(te,e=>e.context.layout.content),t=`
.content {
  ${q}
  contain: strict;
  transform: ${e.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
}
`;return(0,P.jsx)("style",{children:t})}function rx(){let e=(0,Y.v9)(te,e=>e.context.animation),t=null===e?"":function(e){let{matrix:t,origin:n}=e,r=new DOMMatrixReadOnly;return`
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
`}(e);return(0,P.jsx)("style",{children:t})}function r_(){let{style:e}=eg();return null===e?(0,P.jsx)(P.Fragment,{}):(0,P.jsx)("style",{children:e})}function rw(){return null!==document.querySelector(".container")}let rv=(0,U.cY)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:ej,next:ej,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Busy"}}},Busy:{after:{500:{actions:[(0,X.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,G.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:e=>{let{context:t}=e;return t.waited>1e4},target:"Aborting"},{guard:e=>{let{context:{prev:t,next:n}}=e;return t.width===n.width&&.2>Math.abs(1-n.height/t.height)},actions:()=>console.log("resize: ignoring height-only change"),target:"Idle"},{guard:e=>{var t,n;let{context:r}=e;return t=r.prev,n=r.next,t.x!==n.x||t.y!==n.y||t.width!==n.width||t.height!==n.height},actions:[(0,X.a)({prev:e=>{let{context:t}=e;return t.next},waited:0}),(0,eX.e)(e=>{var t;let{context:n}=e;return{type:"LAYOUT",layout:(t=u.origViewBox,function(e){let t=eQ(e);return{config:e,...t}}(function(e,t,n){let[[r,l],a]=function(e,t){let n=e.width/e.height,r=t.width/t.height,[l,a]=n>r?[(e.width-e.height*r)/2,0]:[0,(e.height-e.width/r)/2];return[[l,a],n>r?t.height/e.height:t.width/e.width]}(n,t);return{fontSize:e,container:n,svgOffset:{x:-r,y:-l},svgScale:{s:a},svg:t}}(u.fontSize,t,n.next))),force:!n.first}}),(0,X.a)({first:!1})],target:"Idle"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,X.a)({waited:e=>{let{context:t}=e;return t.waited+500}})],target:"Busy"}},Aborting:{}}}),rb=(0,G.c)(rv);rb.on("LAYOUT",e=>{let{layout:t,force:n}=e;j.forEach(e=>e(t,n))}),rb.start(),window.addEventListener("resize",()=>{rb.send({type:"RESIZE"})});let rS=`
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
  ${et}
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
`,rE=function(){var e;let t=(null==(e=u.cartoConfig)?void 0:e.backgroundColor)??"darkgray";return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(rg,{}),(0,P.jsx)(n3,{}),(0,P.jsxs)("style",{children:[rS,`body { background-color: ${t}; }`]})]})};function rj(){let e=(0,Y.v9)(te,e=>e.context.rendered);(0,o.useEffect)(()=>{requestAnimationFrame(A)},[e]);let t=(0,Y.v9)(te,e=>e.context.shown),n=(0,Y.v9)(te,e=>e.context.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${ec};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",r=(0,Y.v9)(te,e=>e.context.layout.scroll),l=`
.content {
  width: ${ni(r.width)}px;
  height: ${ni(r.height)}px;
}
`;return(0,P.jsxs)("style",{children:[t?"":"#viewer, #ui { opacity: 0; }",n,l]})}var rM=n(2270),rk=n(5641),rO=n(360);let r$=`
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
`;var rC=n(5092),rT=n(1725),rD=n(2638);function rN(e){var t;let n=new Map([...Object.keys(e.properties).filter(e=>"other_tags"!==e&&!e.match(/^centroid|^area$/)).filter(t=>t in e.properties&&e.properties instanceof Object&&null!==e.properties[t]).map(t=>[t,String(e.properties[t])]),...(null==(t=e.properties.other_tags)?void 0:t.split(/","/g).map(e=>e.split(/"=>"/).map(e=>e.replace(/"/,""))))??[]]);return(0,P.jsx)("table",{className:"properties",style:{display:"block",fontSize:"x-small",borderSpacing:0,margin:"1em 0.5em",maxWidth:"calc(50vmin - 2em)",overflowX:"scroll",overscrollBehaviorX:"none",touchAction:"pan-x pan-y"},children:(0,P.jsx)("tbody",{style:{border:0},children:(0,P.jsx)(rF,{tags:n})})})}function rF(e){return(0,P.jsx)(P.Fragment,{children:Array.from(e.tags.entries()).map((e,t)=>{let[n,r]=e;return(0,P.jsx)(o.Fragment,{children:(0,P.jsx)("tr",{style:{margin:0,boxSizing:"border-box"},children:(0,P.jsxs)("td",{style:{border:"0.5px darkgray solid",margin:0,padding:"0.25em",boxSizing:"border-box",scrollbarWidth:"none",width:"calc(50vmin - 2em)"},children:[(0,P.jsxs)("span",{style:{color:"gray"},children:[n," "]}),(0,P.jsx)("span",{style:{},children:r})]})})},t)})})}let rL=[{filter:e=>{var t;return!!(null==e||null==(t=e.other_tags)?void 0:t.match(/"toilets"/))},getInfo:(e,t)=>({title:"toilets",x:{tag:"facility",title:"toilets",address:t,properties:e}})},{filter:e=>{var t;return!!(null==e||null==(t=e.other_tags)?void 0:t.match(/"bus_stop"/))},getInfo:(e,t)=>({title:"bus_stop",x:{tag:"facility",title:"bus_stop",address:t,properties:e}})},{filter:e=>{var t,n;return"highway"in e&&!!(null==(t=e.highway)?void 0:t.match(/elevator/))&&!(null==(n=e.other_tags)?void 0:n.match(/"level"=>"[1-9][^"]*"/))},getInfo:(e,t)=>({title:"elevator",x:{tag:"facility",title:"elevator",address:t,properties:e}})},{filter:e=>{var t,n;return"highway"in e&&!!(null==(t=e.highway)?void 0:t.match(/steps/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))},getInfo:(e,t)=>({title:"elevator",x:{tag:"facility",title:"escalator",address:t,properties:e}})},{filter:e=>{var t;return!!(null==e||null==(t=e.other_tags)?void 0:t.match(/"amenity"=>"drinking_water"/))},getInfo:(e,t)=>({title:"water",x:{tag:"facility",title:"water",address:t,properties:e}})},{filter:e=>{var t,n;return!!(null==(t=e.other_tags)?void 0:t.match(/"tourism"=>"information"/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"information"=>"office"/))},getInfo:(e,t)=>({title:"information",x:{tag:"facility",title:"information",address:t,properties:e}})},{filter:e=>{var t;return!!(null==(t=e.name)?void 0:t.match(/./))},getInfo:(e,t)=>({title:"shop",x:{tag:"shop",address:t,properties:e}})}],rz={getMapLayers:()=>{var e;return[{type:"multipolygon",name:"island",filter:e=>{var t;return!!(null==(t=e.natural)?void 0:t.match(/^coastline$/))}},{type:"multipolygon",name:"area",data:((null==(e=rO.Ow.cartoConfig)?void 0:e.internals)??rO.Ow.mapData.internals).features.map(e=>e.geometry.coordinates)},{type:"line",name:"cliff",filter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"natural"=>"(cliff)"/))}},{type:"multipolygon",name:"rock",filter:e=>{var t;return!!(null==(t=e.natural)?void 0:t.match(/rock|bare_rock/))}},{type:"multipolygon",name:"grass",filter:e=>{var t;return!!(null==(t=e.landuse)?void 0:t.match(/grass/))}},{type:"multipolygon",name:"forest",filter:e=>{var t,n;return!!(null==(t=e.landuse)?void 0:t.match(/forest/))||!!(null==(n=e.natural)?void 0:n.match(/wood/))}},{type:"multipolygon",name:"garden",filter:e=>{var t;return!!(null==(t=e.leisure)?void 0:t.match(/garden/))}},{type:"multipolygon",name:"farmland",filter:e=>{var t;return!!(null==(t=e.landuse)?void 0:t.match(/farmland/))}},{type:"multipolygon",name:"water",filter:e=>{var t;return!!(null==(t=e.natural)?void 0:t.match(/^water$/))}},{type:"line",name:"ditch",filter:e=>{var t;return!!(null==(t=e.waterway)?void 0:t.match(/^(ditch)$/))}},{type:"line",name:"stream",filter:e=>{var t;return!!(null==(t=e.waterway)?void 0:t.match(/^(stream)$/))}},{type:"line",name:"river",filter:e=>{var t;return!!(null==(t=e.waterway)?void 0:t.match(/^(river)$/))}},{type:"multipolygon",name:"wetland",filter:e=>{var t;return!!(null==(t=e.natural)?void 0:t.match(/wetland/))}},{type:"multipolygon",name:"playground",filter:e=>{var t,n,r;return!!(null==(t=e.tourism)?void 0:t.match(/zoo/))||!!(null==(n=e.leisure)?void 0:n.match(/ice_rink|pitch|playground/))||!!(null==(r=e.landuse)?void 0:r.match(/recreation_ground/))}},{type:"multipolygon",name:"grave_yard",filter:e=>{var t;return!!(null==(t=e.amenity)?void 0:t.match(/grave_yard/))}},{type:"multipolygon",name:"parking",filter:e=>{var t;return!!(null==(t=e.amenity)?void 0:t.match(/(parking|bicycle_parking)/))}},{type:"multipolygon",name:"building",filter:e=>{var t,n;return!!(null==(t=e.building)?void 0:t.match(/./))&&!(null==(n=e.building)?void 0:n.match(/roof/))}},{type:"line",name:"path",width:1,filter:e=>{var t;return!!(null==(t=e.highway)?void 0:t.match(/^(path|track)$/))}},{type:"line",name:"footway",width:1,filter:e=>{var t;return!!(null==(t=e.highway)?void 0:t.match(/^(footway|steps)$/))}},{type:"line",name:"steps",width:1,filter:e=>{var t;return!!(null==(t=e.highway)?void 0:t.match(/^(steps)$/))}},{type:"line",name:"cycleway",width:3,filter:e=>{var t;return!!(null==(t=e.highway)?void 0:t.match(/^(cycleway)$/))}},{type:"line",name:"service",width:4,filter:e=>{var t;return!!(null==(t=e.highway)?void 0:t.match(/^(service)$/))}},{type:"line",name:"pedestrian",width:8,filter:e=>{var t;return!!(null==(t=e.highway)?void 0:t.match(/^(pedestrian)$/))}},{type:"line",name:"road",width:6,filter:e=>{var t,n;return!!(null==(t=e.highway)?void 0:t.match(/./))&&!(null==(n=e.highway)?void 0:n.match(/^(footway|path|pedestrian|steps|cycleway|track|service)$/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/("highway"=>"service"|"area:highway"=>"service")/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var t;return!!(null==(t=e.man_made)?void 0:t.match(/bridge/))}},{type:"multipolygon",name:"pedestrian-area",filter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"pedestrian"/))}},{type:"line",name:"escalator background",filter:e=>{var t,n;return!!(null==(t=e.highway)?void 0:t.match(/^(steps)$/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))}},{type:"line",name:"escalator foreground",filter:e=>{var t,n;return!!(null==(t=e.highway)?void 0:t.match(/^(steps)$/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))}},{type:"line",name:"wall",filter:e=>{var t;return!!(null==(t=e.barrier)?void 0:t.match(/^(wall)$/))}},{type:"line",name:"fence",filter:e=>{var t;return!!(null==(t=e.barrier)?void 0:t.match(/^(fence)$/))}},{type:"line",name:"retaining-wall",filter:e=>{var t;return!!(null==(t=e.barrier)?void 0:t.match(/^(retaining_wall)$/))}},{type:"line",name:"bridge shadow",widthScale:1.8,filter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"bridge"/))}},{type:"line",name:"bridge edge",widthScale:1.4,filter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"bridge"/))}},{type:"line",name:"bridge road",filter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"bridge"/))}},{type:"line",name:"tunnel shadow",widthScale:1.8,filter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"tunnel"/))}},{type:"multipolygon",name:"roof",filter:e=>{var t,n;return!!(null==(t=e.building)?void 0:t.match(/./))&&!!(null==(n=e.building)?void 0:n.match(/roof/))}}]},getMapObjects:()=>[{name:"benches",path:rC.MX,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"bench"/))}},{name:"entrances",path:rC.TP,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"entrance"/))}},{name:"guide-posts",path:rC.Y0,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"guidepost"/))}},{name:"info-boards",path:rC.NQ,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"information"=>"(board|map)"/))}},{name:"trees1",path:rC.Tw,width:.15,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"tree"/))}},{name:"torii",path:rC.Yn,width:.05,pointsFilter:e=>{var t,n,r;return!!(null==(t=e.man_made)?void 0:t.match(/^torii$/))||!!(null==(n=e.other_tags)?void 0:n.match(/"amenity"=>"place_of_worship"/))&&!!(null==(r=e.other_tags)?void 0:r.match(/"religion"=>"shinto"/))}},{name:"monument",path:rC.KX,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"historic"=>"(monument|memorial|tomb)"/))}},{name:"statue",path:rC.$Y,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"artwork_type"=>"statue"/))}},{name:"vending-machine",path:rC.ps,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"amenity"=>"vending_machine"/))}},{name:"waste-basket",path:rC.R4,width:.05,pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"amenity"=>"waste_basket"/))}}],getMapSymbols:()=>[{name:"toilets",href:"#XToilets",pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"toilets"/))},polygonsFilter:e=>{var t;return"toilets"===e.building||"toilets"===e.amenity||!!(null==(t=e.other_tags)?void 0:t.match(/"toilets"/))}},{name:"parkings",href:"#XParking",pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"parking"/))},polygonsFilter:e=>{var t;return"parking"===e.amenity||!!(null==(t=e.other_tags)?void 0:t.match(/"parking"/))}},{name:"drinking-fountains",href:"#XDrinkingFountain",pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"amenity"=>"drinking_water"/))}},{name:"elevators",href:"#XElevator",pointsFilter:e=>{var t;return!!(null==(t=e.highway)?void 0:t.match(/elevator/))}},{name:"escalators",href:"#XEscalator",linesFilter:e=>{var t,n;return!!(null==(t=e.highway)?void 0:t.match(/steps/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"conveying"=>"yes"/))}},{name:"buses",href:"#XBus",pointsFilter:e=>{var t;return!!(null==(t=e.other_tags)?void 0:t.match(/"bus"=>"yes"/))}},{name:"informations",href:"#XInformation",pointsFilter:e=>{var t,n;return!!(null==(t=e.other_tags)?void 0:t.match(/"tourism"=>"information"/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"information"=>"office"/))},polygonsFilter:e=>{var t,n;return!!(null==(t=e.other_tags)?void 0:t.match(/"tourist"=>"information"/))&&!!(null==(n=e.other_tags)?void 0:n.match(/"information"=>"office"/))}}],getMapMarkers:()=>[{name:"all"}],getMapNames:rM.Qs,searchEntries:rL,renderInfo:function(e){let t=rO.Ow.mapMap,n=Number(e.info.x.address),r="address"in e.info.x?(0,rD.Ty)(n,t):null;return null===r?(0,P.jsxs)("p",{children:["XXX info not found (osm_id=",e.info.x.address,") XXX"]}):"shop"===e.info.x.tag?function(e){let t=(0,rD.SX)(e.properties,"website"),n=Number(e.properties.osm_id??""),r=Number(("osm_way_id"in e.properties&&e.properties.osm_way_id)??""),l=0!==n?n:0!==r?r:0;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("p",{children:[e.properties.name??e.x.name," ",0!==l&&(0,P.jsx)(rO.mN,{_id:l})]}),(0,P.jsxs)("p",{children:[null!==t&&(0,P.jsx)("a",{target:"_blank",href:t,children:"\uD83C\uDF10"}),0!==n&&(0,P.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/node/${n}`,children:"\uD83D\uDDFA️"}),0!==r&&(0,P.jsx)("a",{target:"_blank",href:`https://openstreetmap.org/way/${r}`,children:"\uD83D\uDDFA️"})]}),(0,P.jsx)(rN,{properties:e.properties})]})}({x:e.info.x,properties:r}):function(e){let t=void 0!==e.x.title&&rT.lm.get(e.x.title);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"1em"},children:(0,P.jsx)("svg",{style:{display:"block"},viewBox:"-36 -36 72 72",width:"3em",height:"3em",children:t&&(0,P.jsx)("use",{href:t})})}),(0,P.jsx)("p",{children:e.x.properties.name}),(0,P.jsx)(rN,{properties:e.properties})]})}({x:e.info.x,properties:r})},mapSvgStyle:r$,renderMap:rk.d,isMapRendered:rk.W};var rR=JSON.parse('{"type":"FeatureCollection","name":"areas","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"layer":"XXX","path":"polygon&uid={bb02eeed-1489-4ecc-a8a1-631f7fa6c99b}"},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6929791,35.2851671],[139.693194299999988,35.2850289],[139.69306370000001,35.2846503],[139.6930286,35.284593],[139.6931425,35.2845287],[139.6931779,35.2842196],[139.693266099999988,35.2840513],[139.693354199999987,35.283957],[139.6935135,35.2839879],[139.6936749,35.284055],[139.693984699999987,35.2842324],[139.694015400000012,35.2842012],[139.6940463,35.2841702],[139.694272399999988,35.2841847],[139.694345199999987,35.284185],[139.6944216,35.2842159],[139.6944685,35.2842978],[139.694493099999988,35.2843871],[139.6945088,35.2844592],[139.6945103,35.2845502],[139.694529,35.284628],[139.694487,35.284662],[139.694526,35.284707],[139.694534,35.284797],[139.694473,35.284833],[139.694443,35.284917],[139.694387,35.284932],[139.694384,35.28495],[139.694365,35.285053],[139.694374,35.285159],[139.694501,35.285517],[139.694656,35.285855],[139.694771,35.286002],[139.69492,35.286132],[139.695328,35.286325],[139.695642,35.286397],[139.6957,35.286397],[139.695775200000014,35.2863878],[139.6958474,35.2864076],[139.69599980000001,35.2865296],[139.695985799999988,35.2866079],[139.6960096,35.2866433],[139.696078199999988,35.2866484],[139.6961562,35.2866438],[139.6964216,35.2867489],[139.6964878,35.2867312],[139.6965893,35.2867594],[139.696608700000013,35.2868687],[139.696506199999988,35.2869024],[139.6963388,35.286926],[139.696305,35.286978],[139.69629,35.287058],[139.696205,35.287187],[139.696155,35.287208],[139.696086,35.287205],[139.696053,35.287273],[139.695992,35.287318],[139.695853,35.287345],[139.695833,35.28743],[139.6958,35.287468],[139.695764,35.28749],[139.695689,35.28747],[139.695664,35.287525],[139.695619,35.287555],[139.695594,35.28757],[139.69553,35.287562],[139.695555,35.287609],[139.695533,35.287679],[139.695567,35.287718],[139.69558,35.28778],[139.695511,35.287895],[139.695447,35.287918],[139.695372,35.287881],[139.695342,35.287954],[139.695228,35.287993],[139.695131,35.288093],[139.695045,35.288076],[139.695033,35.288145],[139.694973,35.288201],[139.694926,35.288204],[139.694868,35.288176],[139.694841,35.288112],[139.694845,35.288006],[139.694784,35.288004],[139.694732,35.287976],[139.694693,35.287901],[139.69459,35.287837],[139.694571,35.287725],[139.694515,35.287715],[139.694459,35.287673],[139.694454,35.287548],[139.694379,35.287495],[139.694374,35.28743],[139.694279,35.287393],[139.694284,35.287255],[139.694226,35.287203],[139.694221,35.28717],[139.694179,35.287165],[139.694132,35.287128],[139.694114,35.287075],[139.694062,35.287017],[139.694045,35.286908],[139.694012,35.28689],[139.693529,35.286317],[139.69311,35.285917],[139.693033,35.285812],[139.693028,35.28578],[139.692932,35.285757],[139.692912,35.285732],[139.692907,35.285683],[139.692965,35.285603],[139.692946,35.285495],[139.692996,35.285447],[139.693001,35.285328],[139.693022,35.28529],[139.6930542,35.2852895],[139.6930208,35.285237],[139.6929936,35.2851893],[139.6929854,35.2851768],[139.6929791,35.2851671]]]]}}]}'),rA=JSON.parse('{"type":"FeatureCollection","name":"areas","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"layer":"XXX","path":"polygon&uid={bb02eeed-1489-4ecc-a8a1-631f7fa6c99b}"},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6929791,35.2851671],[139.693194299999988,35.2850289],[139.69306370000001,35.2846503],[139.6930286,35.284593],[139.6931425,35.2845287],[139.6931779,35.2842196],[139.693266099999988,35.2840513],[139.693354199999987,35.283957],[139.6935135,35.2839879],[139.6936749,35.284055],[139.693984699999987,35.2842324],[139.694015400000012,35.2842012],[139.6940463,35.2841702],[139.694272399999988,35.2841847],[139.694345199999987,35.284185],[139.6944216,35.2842159],[139.6944685,35.2842978],[139.694493099999988,35.2843871],[139.6945088,35.2844592],[139.6945103,35.2845502],[139.694529,35.284628],[139.694487,35.284662],[139.694526,35.284707],[139.694534,35.284797],[139.694473,35.284833],[139.694443,35.284917],[139.694387,35.284932],[139.694384,35.28495],[139.694365,35.285053],[139.694374,35.285159],[139.694501,35.285517],[139.694656,35.285855],[139.694771,35.286002],[139.69492,35.286132],[139.695328,35.286325],[139.695642,35.286397],[139.6957,35.286397],[139.695775200000014,35.2863878],[139.6958474,35.2864076],[139.69599980000001,35.2865296],[139.695985799999988,35.2866079],[139.6960096,35.2866433],[139.696078199999988,35.2866484],[139.6961562,35.2866438],[139.6964216,35.2867489],[139.6964878,35.2867312],[139.6965893,35.2867594],[139.696608700000013,35.2868687],[139.696506199999988,35.2869024],[139.6963388,35.286926],[139.696305,35.286978],[139.69629,35.287058],[139.696205,35.287187],[139.696155,35.287208],[139.696086,35.287205],[139.696053,35.287273],[139.695992,35.287318],[139.695853,35.287345],[139.695833,35.28743],[139.6958,35.287468],[139.695764,35.28749],[139.695689,35.28747],[139.695664,35.287525],[139.695619,35.287555],[139.695594,35.28757],[139.69553,35.287562],[139.695555,35.287609],[139.695533,35.287679],[139.695567,35.287718],[139.69558,35.28778],[139.695511,35.287895],[139.695447,35.287918],[139.695372,35.287881],[139.695342,35.287954],[139.695228,35.287993],[139.695131,35.288093],[139.695045,35.288076],[139.695033,35.288145],[139.694973,35.288201],[139.694926,35.288204],[139.694868,35.288176],[139.694841,35.288112],[139.694845,35.288006],[139.694784,35.288004],[139.694732,35.287976],[139.694693,35.287901],[139.69459,35.287837],[139.694571,35.287725],[139.694515,35.287715],[139.694459,35.287673],[139.694454,35.287548],[139.694379,35.287495],[139.694374,35.28743],[139.694279,35.287393],[139.694284,35.287255],[139.694226,35.287203],[139.694221,35.28717],[139.694179,35.287165],[139.694132,35.287128],[139.694114,35.287075],[139.694062,35.287017],[139.694045,35.286908],[139.694012,35.28689],[139.693529,35.286317],[139.69311,35.285917],[139.693033,35.285812],[139.693028,35.28578],[139.692932,35.285757],[139.692912,35.285732],[139.692907,35.285683],[139.692965,35.285603],[139.692946,35.285495],[139.692996,35.285447],[139.693001,35.285328],[139.693022,35.28529],[139.6930542,35.2852895],[139.6930208,35.285237],[139.6929936,35.2851893],[139.6929854,35.2851768],[139.6929791,35.2851671]]]]}}]}'),rI=JSON.parse('{"type":"FeatureCollection","name":"map-lines","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"37865394","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69511090840953,"centroid_y":35.287122662156229},"geometry":{"type":"LineString","coordinates":[[139.6950285,35.2875107],[139.6949559,35.2874629],[139.694959399999988,35.2873887],[139.6950727,35.2872109],[139.695134,35.2870703],[139.6951805,35.2870094],[139.695256300000011,35.2868674],[139.6952219,35.2866992]]}},{"type":"Feature","properties":{"osm_id":"37865395","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69566916032014,"centroid_y":35.286935169594976},"geometry":{"type":"LineString","coordinates":[[139.6951805,35.2870094],[139.6953078,35.2869935],[139.6954194,35.2869935],[139.695625299999989,35.2869515],[139.6958228,35.2869304],[139.695998,35.2868888],[139.69610320000001,35.2867543]]}},{"type":"Feature","properties":{"osm_id":"37865405","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69505532951487,"centroid_y":35.286578493917837},"geometry":{"type":"LineString","coordinates":[[139.6949645,35.2865451],[139.6951156,35.2866],[139.695144699999986,35.2866152]]}},{"type":"Feature","properties":{"osm_id":"37865406","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.6951833,"centroid_y":35.2866572},"geometry":{"type":"LineString","coordinates":[[139.695144699999986,35.2866152],[139.6952219,35.2866992]]}},{"type":"Feature","properties":{"osm_id":"37865468","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"tunnel\\"=>\\"yes\\"","area":null,"centroid_x":139.6949152,"centroid_y":35.2866755},"geometry":{"type":"LineString","coordinates":[[139.694933600000013,35.2866066],[139.6948968,35.2867444]]}},{"type":"Feature","properties":{"osm_id":"37865469","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69501709495074,"centroid_y":35.28659710136435},"geometry":{"type":"LineString","coordinates":[[139.6951156,35.2866],[139.6950597,35.2866089],[139.6949449,35.2865801],[139.694933600000013,35.2866066]]}},{"type":"Feature","properties":{"osm_id":"37865483","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"cutting\\"=>\\"yes\\"","area":null,"centroid_x":139.69485670716199,"centroid_y":35.286890030994101},"geometry":{"type":"LineString","coordinates":[[139.6948968,35.2867444],[139.694830700000011,35.2869869],[139.694813,35.2870345]]}},{"type":"Feature","properties":{"osm_id":"37865490","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.6950905,"centroid_y":35.2870669},"geometry":{"type":"LineString","coordinates":[[139.695047,35.2870635],[139.695134,35.2870703]]}},{"type":"Feature","properties":{"osm_id":"37865491","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":-10,"other_tags":"\\"tunnel\\"=>\\"yes\\"","area":null,"centroid_x":139.6949625,"centroid_y":35.28705355},"geometry":{"type":"LineString","coordinates":[[139.694878,35.2870436],[139.695047,35.2870635]]}},{"type":"Feature","properties":{"osm_id":"37865492","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"cutting\\"=>\\"yes\\",\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.6948455,"centroid_y":35.28703905},"geometry":{"type":"LineString","coordinates":[[139.694813,35.2870345],[139.694878,35.2870436]]}},{"type":"Feature","properties":{"osm_id":"37865552","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"no\\"","area":null,"centroid_x":139.69508265954357,"centroid_y":35.287769515694144},"geometry":{"type":"LineString","coordinates":[[139.6950285,35.2875107],[139.6950846,35.287596],[139.6951018,35.2876801],[139.695033099999989,35.2877572],[139.6950019,35.2878642],[139.695141400000011,35.2879124],[139.6952487,35.2879299]]}},{"type":"Feature","properties":{"osm_id":"37865581","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"incline\\"=>\\"down\\"","area":null,"centroid_x":139.69617315,"centroid_y":35.28680365},"geometry":{"type":"LineString","coordinates":[[139.69610320000001,35.2867543],[139.6962431,35.286853]]}},{"type":"Feature","properties":{"osm_id":"37865610","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"incline\\"=>\\"down\\"","area":null,"centroid_x":139.69471343951238,"centroid_y":35.286504274694607},"geometry":{"type":"LineString","coordinates":[[139.6944495,35.286482],[139.6945782,35.286475],[139.6946383,35.2865101],[139.6947327,35.2864891],[139.694775600000014,35.2865171],[139.6948443,35.2864961],[139.69487860000001,35.2865451],[139.6949645,35.2865451]]}},{"type":"Feature","properties":{"osm_id":"37865621","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69399456853202,"centroid_y":35.285898448778127},"geometry":{"type":"LineString","coordinates":[[139.694092899999987,35.286134],[139.694071799999989,35.2861037],[139.6940117,35.2860337],[139.6939688,35.2859916],[139.6939516,35.2859356],[139.6939602,35.2858865],[139.693986200000012,35.2858317],[139.6939966,35.285769],[139.6939854,35.2857167],[139.69396230000001,35.2856377]]}},{"type":"Feature","properties":{"osm_id":"37865634","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69392705000001,"centroid_y":35.2856611},"geometry":{"type":"LineString","coordinates":[[139.693891799999989,35.2856845],[139.69396230000001,35.2856377]]}},{"type":"Feature","properties":{"osm_id":"37865643","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69381676115665,"centroid_y":35.285712441037695},"geometry":{"type":"LineString","coordinates":[[139.693891799999989,35.2856845],[139.6937853,35.2857067],[139.6937907,35.2857483],[139.6937633,35.2857586]]}},{"type":"Feature","properties":{"osm_id":"37865645","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"no\\"","area":null,"centroid_x":139.69415355000001,"centroid_y":35.2846266},"geometry":{"type":"LineString","coordinates":[[139.694114899999988,35.2846476],[139.6941922,35.2846056]]}},{"type":"Feature","properties":{"osm_id":"37865646","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69371935759929,"centroid_y":35.284688322185723},"geometry":{"type":"LineString","coordinates":[[139.693061300000011,35.2846047],[139.6931538,35.2845511],[139.6932979,35.2845017],[139.6936561,35.2845188],[139.6937888,35.2845075],[139.6939604,35.2845355],[139.6940549,35.2845846],[139.694114899999988,35.2846476],[139.6941321,35.2847387],[139.6940806,35.2848228],[139.693994800000013,35.2848648],[139.693806,35.2849629],[139.6935828,35.285131]]}},{"type":"Feature","properties":{"osm_id":"37865682","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"no\\"","area":null,"centroid_x":139.69420985,"centroid_y":35.2845993},"geometry":{"type":"LineString","coordinates":[[139.6941922,35.2846056],[139.694227500000011,35.284593]]}},{"type":"Feature","properties":{"osm_id":"37865693","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"no\\"","area":null,"centroid_x":139.69420505,"centroid_y":35.28467215},"geometry":{"type":"LineString","coordinates":[[139.694217900000012,35.2847387],[139.6941922,35.2846056]]}},{"type":"Feature","properties":{"osm_id":"37865735","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":"pier","z_order":0,"other_tags":null,"area":null,"centroid_x":139.69264691748052,"centroid_y":35.285344663373245},"geometry":{"type":"LineString","coordinates":[[139.6922853,35.2854132],[139.69254810000001,35.2854316],[139.6929854,35.2851768]]}},{"type":"Feature","properties":{"osm_id":"37865740","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69325390867897,"centroid_y":35.284886038541629},"geometry":{"type":"LineString","coordinates":[[139.6929854,35.2851768],[139.69328680000001,35.284981],[139.6933307,35.2849424],[139.6933618,35.2848915],[139.6933731,35.2848433],[139.6933549,35.284752],[139.6933282,35.2846594],[139.6933206,35.2846329],[139.6932979,35.2845017]]}},{"type":"Feature","properties":{"osm_id":"37865745","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69371490100065,"centroid_y":35.284654693852346},"geometry":{"type":"LineString","coordinates":[[139.6935533,35.2847778],[139.6935043,35.2847395],[139.693566,35.2846798],[139.6935962,35.2846601],[139.6936297,35.2846492],[139.693674,35.2846404],[139.6937357,35.2846448],[139.69382490000001,35.2846629],[139.6938466,35.2846397],[139.6939604,35.2845355]]}},{"type":"Feature","properties":{"osm_id":"37865880","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":-20,"other_tags":"\\"layer\\"=>\\"-1\\",\\"tunnel\\"=>\\"yes\\"","area":null,"centroid_x":139.6945066,"centroid_y":35.2866491},"geometry":{"type":"LineString","coordinates":[[139.694215899999989,35.286347],[139.6947973,35.2869512]]}},{"type":"Feature","properties":{"osm_id":"37865883","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"cutting\\"=>\\"yes\\",\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.694814,"centroid_y":35.28696905},"geometry":{"type":"LineString","coordinates":[[139.6947973,35.2869512],[139.694830700000011,35.2869869]]}},{"type":"Feature","properties":{"osm_id":"37865897","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"bridge\\"=>\\"boardwalk\\",\\"cutting\\"=>\\"yes\\"","area":null,"centroid_x":139.69382663866892,"centroid_y":35.285788180695555},"geometry":{"type":"LineString","coordinates":[[139.6935828,35.285131],[139.6937633,35.2857586],[139.6939219,35.2861238],[139.6941421,35.2862565],[139.694215899999989,35.286347]]}},{"type":"Feature","properties":{"osm_id":"37865985","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"yes\\",\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69395700831487,"centroid_y":35.285350582562302},"geometry":{"type":"LineString","coordinates":[[139.6939893,35.2850424],[139.6939635,35.2851826],[139.6939519,35.2852642],[139.6939175,35.2853763],[139.693972,35.2855713],[139.693997700000011,35.2856031],[139.69396230000001,35.2856377]]}},{"type":"Feature","properties":{"osm_id":"506006961","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.6933871,"centroid_y":35.28464335},"geometry":{"type":"LineString","coordinates":[[139.6933282,35.2846594],[139.693446,35.2846273]]}},{"type":"Feature","properties":{"osm_id":"506006962","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69365564999998,"centroid_y":35.28456135},"geometry":{"type":"LineString","coordinates":[[139.6936561,35.2845188],[139.6936552,35.2846039]]}},{"type":"Feature","properties":{"osm_id":"506006963","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69356942860972,"centroid_y":35.284627281621781},"geometry":{"type":"LineString","coordinates":[[139.6934708,35.2847291],[139.693446,35.2846273],[139.693625,35.2846032],[139.6936552,35.2846039],[139.693765899999988,35.2846065]]}},{"type":"Feature","properties":{"osm_id":"506006964","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.69380625,"centroid_y":35.2846231},"geometry":{"type":"LineString","coordinates":[[139.693765899999988,35.2846065],[139.6938466,35.2846397]]}},{"type":"Feature","properties":{"osm_id":"506006965","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":null,"area":null,"centroid_x":139.6934651958162,"centroid_y":35.284764550366191},"geometry":{"type":"LineString","coordinates":[[139.6935533,35.2847778],[139.6935064,35.2848172],[139.6934708,35.2847291],[139.6933549,35.284752]]}},{"type":"Feature","properties":{"osm_id":"1205649626","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"access\\"=>\\"no\\",\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69411390698215,"centroid_y":35.284897575053414},"geometry":{"type":"LineString","coordinates":[[139.694217900000012,35.2847387],[139.694178099999988,35.2848252],[139.6941352,35.2848953],[139.694058,35.2849584],[139.6939893,35.2850424]]}},{"type":"Feature","properties":{"osm_id":"1205650483","name":null,"highway":"footway","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"foot\\"=>\\"yes\\"","area":null,"centroid_x":139.69429635284868,"centroid_y":35.286343631058294},"geometry":{"type":"LineString","coordinates":[[139.6944495,35.286482],[139.694403599999987,35.286485],[139.6943346,35.286408],[139.6942769,35.2862935],[139.6941444,35.2861843]]}},{"type":"Feature","properties":{"osm_id":"1205650484","name":null,"highway":"steps","waterway":null,"aerialway":null,"barrier":null,"man_made":null,"z_order":0,"other_tags":"\\"foot\\"=>\\"yes\\",\\"incline\\"=>\\"down\\"","area":null,"centroid_x":139.69411709809194,"centroid_y":35.286160588039316},"geometry":{"type":"LineString","coordinates":[[139.6941444,35.2861843],[139.6941061,35.2861528],[139.694092899999987,35.286134]]}}]}'),rP=JSON.parse('{"type":"FeatureCollection","name":"map-multilinestrings","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[]}'),rH=JSON.parse('{"type":"FeatureCollection","name":"map-multipolygons","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"37865556","name":"卯の崎広場","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"park","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":283.46021494269371,"centroid_x":139.6960373811481,"centroid_y":35.286804780423338},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.695998,35.2868888],[139.6960336,35.2868858],[139.696065800000014,35.2869046],[139.696088800000012,35.2868625],[139.6960972,35.2867959],[139.69610320000001,35.2867543],[139.6961072,35.2867264],[139.6960188,35.2867324],[139.695978599999989,35.2867314],[139.695965699999988,35.286786],[139.695998,35.2868888]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"37865609","name":"展望広場","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"recreation_ground","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":890.88532818853855,"centroid_x":139.69430775333163,"centroid_y":35.286452419850548},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6943822,35.2866249],[139.6944916,35.2865674],[139.6944495,35.286482],[139.6943713,35.2864169],[139.694332300000013,35.2863182],[139.6942769,35.2862935],[139.694241,35.2862774],[139.694186800000011,35.2863592],[139.6941214,35.2864234],[139.6941682,35.286483],[139.694276,35.2865107],[139.6943822,35.2866249]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"37866004","name":"春日社跡広場","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"recreation_ground","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"access\\"=>\\"no\\"","area":384.25289569795132,"centroid_x":139.69426237799109,"centroid_y":35.284504019605279},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.694227500000011,35.284593],[139.6943178,35.2845757],[139.694359100000014,35.2845148],[139.694361,35.2844326],[139.6941899,35.2844417],[139.6941411,35.2844831],[139.694227500000011,35.284593]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"130990566","name":"猿島","type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"coastline","office":null,"place":"islet","shop":null,"sport":null,"tourism":null,"other_tags":"\\"contact:facebook\\"=>\\"yokosuka.sarushima\\",\\"contact:tripadvisor\\"=>\\"1311417\\",\\"contact:website\\"=>\\"https://sarushima.jp/\\",\\"contact:youtube\\"=>\\"UCqX9no6l6kz4f5ZLYnEV9Eg\\",\\"name:en\\"=>\\"Sarushima\\",\\"name:fr\\"=>\\"\xcele des Singes\\",\\"name:ja-Hira\\"=>\\"さるしま\\",\\"name:ja-Latn\\"=>\\"Saru-shima\\",\\"wikidata\\"=>\\"Q75413\\",\\"wikimedia_commons\\"=>\\"Category:Sarushima, Yokosuka\\",\\"wikipedia\\"=>\\"ja:猿島\\"","area":94609.531510770321,"centroid_x":139.69443059896759,"centroid_y":35.286121473030015},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6929791,35.2851671],[139.6929854,35.2851768],[139.6929936,35.2851893],[139.6930208,35.285237],[139.6930542,35.2852895],[139.693022,35.28529],[139.693001,35.285328],[139.692996,35.285447],[139.692946,35.285495],[139.692965,35.285603],[139.692907,35.285683],[139.692912,35.285732],[139.692932,35.285757],[139.693028,35.28578],[139.693033,35.285812],[139.69311,35.285917],[139.693529,35.286317],[139.694012,35.28689],[139.694045,35.286908],[139.694062,35.287017],[139.694114,35.287075],[139.694132,35.287128],[139.694179,35.287165],[139.694221,35.28717],[139.694226,35.287203],[139.694284,35.287255],[139.694279,35.287393],[139.694374,35.28743],[139.694379,35.287495],[139.694454,35.287548],[139.694459,35.287673],[139.694515,35.287715],[139.694571,35.287725],[139.69459,35.287837],[139.694693,35.287901],[139.694732,35.287976],[139.694784,35.288004],[139.694845,35.288006],[139.694841,35.288112],[139.694868,35.288176],[139.694926,35.288204],[139.694973,35.288201],[139.695033,35.288145],[139.695045,35.288076],[139.695131,35.288093],[139.695228,35.287993],[139.695342,35.287954],[139.695372,35.287881],[139.695447,35.287918],[139.695511,35.287895],[139.69558,35.28778],[139.695567,35.287718],[139.695533,35.287679],[139.695555,35.287609],[139.69553,35.287562],[139.695594,35.28757],[139.695619,35.287555],[139.695664,35.287525],[139.695689,35.28747],[139.695764,35.28749],[139.6958,35.287468],[139.695833,35.28743],[139.695853,35.287345],[139.695992,35.287318],[139.696053,35.287273],[139.696086,35.287205],[139.696155,35.287208],[139.696205,35.287187],[139.69629,35.287058],[139.696305,35.286978],[139.6963388,35.286926],[139.696506199999988,35.2869024],[139.696608700000013,35.2868687],[139.6965893,35.2867594],[139.6964878,35.2867312],[139.6964216,35.2867489],[139.6961562,35.2866438],[139.696078199999988,35.2866484],[139.6960096,35.2866433],[139.695985799999988,35.2866079],[139.69599980000001,35.2865296],[139.6958474,35.2864076],[139.695775200000014,35.2863878],[139.6957,35.286397],[139.695642,35.286397],[139.695328,35.286325],[139.69492,35.286132],[139.694771,35.286002],[139.694656,35.285855],[139.694501,35.285517],[139.694374,35.285159],[139.694365,35.285053],[139.694384,35.28495],[139.694387,35.284932],[139.694443,35.284917],[139.694473,35.284833],[139.694534,35.284797],[139.694526,35.284707],[139.694487,35.284662],[139.694529,35.284628],[139.6945103,35.2845502],[139.6945088,35.2844592],[139.694493099999988,35.2843871],[139.6944685,35.2842978],[139.6944216,35.2842159],[139.694345199999987,35.284185],[139.694272399999988,35.2841847],[139.6940463,35.2841702],[139.694015400000012,35.2842012],[139.693984699999987,35.2842324],[139.6936749,35.284055],[139.6935135,35.2839879],[139.693354199999987,35.283957],[139.693266099999988,35.2840513],[139.6931779,35.2842196],[139.6931425,35.2845287],[139.6930286,35.284593],[139.69306370000001,35.2846503],[139.693194299999988,35.2850289],[139.6929791,35.2851671]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"329599271","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":362.92240414023399,"centroid_x":139.6937190184471,"centroid_y":35.284701634878779},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6935948,35.2847565],[139.693664500000011,35.2847314],[139.6937342,35.2847247],[139.6937946,35.28474],[139.6938348,35.2847608],[139.693901899999986,35.2847133],[139.6938442,35.2846755],[139.6937289,35.2846536],[139.6936725,35.2846503],[139.6935934,35.2846678],[139.6935478,35.2847007],[139.6935948,35.2847565]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"329599272","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"beach","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"swimming\\"=>\\"no\\"","area":3635.7599737644196,"centroid_x":139.69348154595781,"centroid_y":35.284216126401205},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6931524,35.2845231],[139.6932799,35.2844706],[139.6932736,35.2844444],[139.6934943,35.284393],[139.6935667,35.2843503],[139.6937223,35.284301],[139.6938202,35.2842912],[139.693969,35.2842627],[139.6939925,35.2842599],[139.693984699999987,35.2842324],[139.6936749,35.284055],[139.6935135,35.2839879],[139.693354199999987,35.283957],[139.693266099999988,35.2840513],[139.6931779,35.2842196],[139.6931524,35.2845231]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"329599273","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"wood","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":65495.712924879044,"centroid_x":139.69439469941912,"centroid_y":35.286180967879105},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.694125899999989,35.2842441],[139.6939925,35.2842599],[139.693969,35.2842627],[139.6938202,35.2842912],[139.6937223,35.284301],[139.6935667,35.2843503],[139.6934943,35.284393],[139.693473899999987,35.2844278],[139.6934661,35.2844412],[139.693552,35.2844685],[139.6936351,35.2844226],[139.6937169,35.2844204],[139.693781800000011,35.2844291],[139.693814800000013,35.2844729],[139.6938619,35.2844743],[139.6938643,35.2845304],[139.693800900000014,35.2845397],[139.6937646,35.2845874],[139.6938391,35.2846644],[139.6939274,35.2847036],[139.694002500000011,35.2846355],[139.6940602,35.2846754],[139.694050800000014,35.2847214],[139.6939449,35.2847576],[139.693821500000013,35.2847663],[139.6937236,35.2847554],[139.6936351,35.2847586],[139.6935306,35.2848347],[139.693471499999987,35.2847523],[139.6934422,35.2847547],[139.6934456,35.2848031],[139.6934287,35.2848503],[139.6933984,35.2848723],[139.6934477,35.2849304],[139.6934177,35.2850278],[139.6932502,35.2850838],[139.6931992,35.285179],[139.693176099999988,35.2852472],[139.6930915,35.2853085],[139.693073199999986,35.285329],[139.6930759,35.2854275],[139.6930303,35.2855282],[139.6930061,35.285606],[139.6930544,35.2857297],[139.693113399999987,35.2857954],[139.693267600000013,35.2859256],[139.693336,35.2860023],[139.6934085,35.2860986],[139.6934393,35.2861884],[139.693531799999988,35.2862836],[139.6936378,35.286381],[139.6937974,35.2865146],[139.6939355,35.2866361],[139.694010600000013,35.2867729],[139.694052199999987,35.2868517],[139.69415140000001,35.286959],[139.6941876,35.2870225],[139.6942869,35.2871331],[139.6943365,35.2872644],[139.6944411,35.2874079],[139.6945149,35.2875064],[139.6945457,35.2876487],[139.6946342,35.2877385],[139.6947214,35.2878578],[139.6947777,35.2879245],[139.6948743,35.2879651],[139.69492120000001,35.2880034],[139.6949132,35.2879016],[139.6949373,35.2878052],[139.694984299999987,35.2877428],[139.695011099999988,35.2876399],[139.6950459,35.2875392],[139.695151900000013,35.2875195],[139.6952981,35.2875392],[139.6953557,35.2875261],[139.6954215,35.2874374],[139.69546840000001,35.2873312],[139.6954992,35.2872644],[139.695571699999988,35.2871823],[139.695691,35.2871112],[139.695864,35.2871057],[139.6959847,35.2870116],[139.6959928,35.286959],[139.6960336,35.2868858],[139.695998,35.2868888],[139.695965699999988,35.286786],[139.695978599999989,35.2867314],[139.6960188,35.2867324],[139.6961072,35.2867264],[139.696099,35.2866984],[139.6959981,35.2866744],[139.695949899999988,35.2866186],[139.6958412,35.2864916],[139.6957406,35.2864358],[139.6955743,35.2864171],[139.6953973,35.2864117],[139.695273899999989,35.2863799],[139.6950982,35.2863055],[139.6949641,35.2862398],[139.694733500000012,35.2860548],[139.694604700000014,35.285895],[139.6945001,35.2857231],[139.6944451,35.2855698],[139.694358,35.2853071],[139.6942922,35.2851517],[139.6942963,35.2850247],[139.6943003,35.284936],[139.694301599999989,35.2848254],[139.6943057,35.2847181],[139.69432710000001,35.2846579],[139.69435390000001,35.2845933],[139.6942995,35.2846197],[139.6942367,35.2846218],[139.694227500000011,35.284593],[139.6941411,35.2844831],[139.6941899,35.2844417],[139.694361,35.2844326],[139.6943325,35.2843525],[139.6943432,35.284301],[139.694308299999989,35.2842649],[139.694199700000013,35.2842441],[139.694125899999989,35.2842441]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"506006960","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"recreation_ground","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":179.19744963943958,"centroid_x":139.69497686089252,"centroid_y":35.287475432628611},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6950031,35.2875392],[139.69505,35.2874472],[139.6949521,35.2874002],[139.6949079,35.2875228],[139.6950031,35.2875392]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"506006966","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":34.83142277225852,"centroid_x":139.69442444349772,"centroid_y":35.286538433752831},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6944129,35.2865688],[139.6944632,35.2865359],[139.694436,35.2865081],[139.6943857,35.2865409],[139.6944129,35.2865688]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"506006967","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":78.44976906478405,"centroid_x":139.69400565000001,"centroid_y":35.28468985},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.693950300000012,35.2846995],[139.694008700000012,35.284736],[139.694061,35.2846802],[139.6940026,35.2846437],[139.693950300000012,35.2846995]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"506006968","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":511.69313269853592,"centroid_x":139.69346633277209,"centroid_y":35.284627581048198},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.693385,35.2847291],[139.693478199999987,35.2847143],[139.6935962,35.284647],[139.69356,35.2845337],[139.6933401,35.2845736],[139.693385,35.2847291]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650555851","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"bare_rock","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":11969.910735800862,"centroid_x":139.69546057531866,"centroid_y":35.287417780457119},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.69492120000001,35.2880034],[139.6948743,35.2879651],[139.6947777,35.2879245],[139.6947214,35.2878578],[139.6946342,35.2877385],[139.6945457,35.2876487],[139.6945149,35.2875064],[139.6944411,35.2874079],[139.6943365,35.2872644],[139.6942869,35.2871331],[139.6941876,35.2870225],[139.69415140000001,35.286959],[139.694052199999987,35.2868517],[139.694012,35.28689],[139.694045,35.286908],[139.694062,35.287017],[139.694114,35.287075],[139.694132,35.287128],[139.694179,35.287165],[139.694221,35.28717],[139.694226,35.287203],[139.694284,35.287255],[139.694279,35.287393],[139.694374,35.28743],[139.694379,35.287495],[139.694454,35.287548],[139.694459,35.287673],[139.694515,35.287715],[139.694571,35.287725],[139.69459,35.287837],[139.694693,35.287901],[139.694732,35.287976],[139.694784,35.288004],[139.694845,35.288006],[139.694841,35.288112],[139.694868,35.288176],[139.694926,35.288204],[139.694973,35.288201],[139.695033,35.288145],[139.695045,35.288076],[139.695131,35.288093],[139.695228,35.287993],[139.695342,35.287954],[139.695372,35.287881],[139.695447,35.287918],[139.695511,35.287895],[139.69558,35.28778],[139.695567,35.287718],[139.695533,35.287679],[139.695555,35.287609],[139.69553,35.287562],[139.695594,35.28757],[139.695619,35.287555],[139.695664,35.287525],[139.695689,35.28747],[139.695764,35.28749],[139.6958,35.287468],[139.695833,35.28743],[139.695853,35.287345],[139.695992,35.287318],[139.696053,35.287273],[139.696086,35.287205],[139.696155,35.287208],[139.696205,35.287187],[139.69629,35.287058],[139.696305,35.286978],[139.6963388,35.286926],[139.696506199999988,35.2869024],[139.696608700000013,35.2868687],[139.6965893,35.2867594],[139.6964878,35.2867312],[139.6964216,35.2867489],[139.6961562,35.2866438],[139.696078199999988,35.2866484],[139.6960096,35.2866433],[139.695985799999988,35.2866079],[139.695949899999988,35.2866186],[139.6959981,35.2866744],[139.696099,35.2866984],[139.6961072,35.2867264],[139.69610320000001,35.2867543],[139.6960972,35.2867959],[139.696088800000012,35.2868625],[139.696065800000014,35.2869046],[139.6960336,35.2868858],[139.6959928,35.286959],[139.6959847,35.2870116],[139.695864,35.2871057],[139.695691,35.2871112],[139.695571699999988,35.2871823],[139.6954992,35.2872644],[139.69546840000001,35.2873312],[139.6954215,35.2874374],[139.6953557,35.2875261],[139.6952981,35.2875392],[139.695151900000013,35.2875195],[139.6950459,35.2875392],[139.695011099999988,35.2876399],[139.694984299999987,35.2877428],[139.6949373,35.2878052],[139.6949132,35.2879016],[139.69492120000001,35.2880034]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558899","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"bare_rock","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":2278.3720363974571,"centroid_x":139.69338094011019,"centroid_y":35.286072519312185},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.694012,35.28689],[139.694052199999987,35.2868517],[139.694010600000013,35.2867729],[139.6939355,35.2866361],[139.6937974,35.2865146],[139.6936378,35.286381],[139.693531799999988,35.2862836],[139.6934393,35.2861884],[139.6934085,35.2860986],[139.693336,35.2860023],[139.693267600000013,35.2859256],[139.693113399999987,35.2857954],[139.6930544,35.2857297],[139.6930061,35.285606],[139.6930303,35.2855282],[139.6930759,35.2854275],[139.693073199999986,35.285329],[139.6930915,35.2853085],[139.693016,35.2851746],[139.6929936,35.2851893],[139.6930208,35.285237],[139.6930542,35.2852895],[139.693022,35.28529],[139.693001,35.285328],[139.692996,35.285447],[139.692946,35.285495],[139.692965,35.285603],[139.692907,35.285683],[139.692912,35.285732],[139.692932,35.285757],[139.693028,35.28578],[139.693033,35.285812],[139.69311,35.285917],[139.693529,35.286317],[139.694012,35.28689]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558902","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"bare_rock","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":4835.4567438960075,"centroid_x":139.69468048982338,"centroid_y":35.285301693924175},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.695949899999988,35.2866186],[139.695985799999988,35.2866079],[139.69599980000001,35.2865296],[139.6958474,35.2864076],[139.695775200000014,35.2863878],[139.6957,35.286397],[139.695642,35.286397],[139.695328,35.286325],[139.69492,35.286132],[139.694771,35.286002],[139.694656,35.285855],[139.694501,35.285517],[139.694374,35.285159],[139.694365,35.285053],[139.694384,35.28495],[139.694387,35.284932],[139.694443,35.284917],[139.694473,35.284833],[139.694534,35.284797],[139.694526,35.284707],[139.694487,35.284662],[139.694529,35.284628],[139.6945103,35.2845502],[139.6945088,35.2844592],[139.694493099999988,35.2843871],[139.6944685,35.2842978],[139.6944216,35.2842159],[139.694345199999987,35.284185],[139.694272399999988,35.2841847],[139.6940463,35.2841702],[139.694015400000012,35.2842012],[139.693984699999987,35.2842324],[139.6939925,35.2842599],[139.694125899999989,35.2842441],[139.694199700000013,35.2842441],[139.694308299999989,35.2842649],[139.6943432,35.284301],[139.6943325,35.2843525],[139.694361,35.2844326],[139.694359100000014,35.2845148],[139.69435390000001,35.2845933],[139.69432710000001,35.2846579],[139.6943057,35.2847181],[139.694301599999989,35.2848254],[139.6943003,35.284936],[139.6942963,35.2850247],[139.6942922,35.2851517],[139.694358,35.2853071],[139.6944451,35.2855698],[139.6945001,35.2857231],[139.694604700000014,35.285895],[139.694733500000012,35.2860548],[139.6949641,35.2862398],[139.6950982,35.2863055],[139.695273899999989,35.2863799],[139.6953973,35.2864117],[139.6955743,35.2864171],[139.6957406,35.2864358],[139.6958412,35.2864916],[139.695949899999988,35.2866186]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558907","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":21.610686056315899,"centroid_x":139.69341042179417,"centroid_y":35.284775042546599},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.693395900000013,35.2847962],[139.693433700000014,35.2847901],[139.693425,35.2847539],[139.6933871,35.28476],[139.693395900000013,35.2847962]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558909","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"meadow","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":78.336420528590679,"centroid_x":139.6943021855943,"centroid_y":35.284588990484423},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6942367,35.2846218],[139.6942995,35.2846197],[139.69435390000001,35.2845933],[139.694359100000014,35.2845148],[139.6943178,35.2845757],[139.694227500000011,35.284593],[139.6942367,35.2846218]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558911","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":"meadow","leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":766.34632037580013,"centroid_x":139.69322457226804,"centroid_y":35.285097889267455},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6930915,35.2853085],[139.693176099999988,35.2852472],[139.6931992,35.285179],[139.6932502,35.2850838],[139.6934177,35.2850278],[139.6934477,35.2849304],[139.6933984,35.2848723],[139.6933827,35.2848876],[139.6933285,35.2849626],[139.6933013,35.2849873],[139.693016,35.2851746],[139.6930915,35.2853085]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558913","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":"pier","military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":310.35171943902969,"centroid_x":139.69318487002971,"centroid_y":35.284549487592578},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.693284299999988,35.2845414],[139.6933395,35.2845201],[139.6933249,35.2844661],[139.6932799,35.2844706],[139.6931524,35.2845231],[139.6931425,35.2845287],[139.6930286,35.284593],[139.69306370000001,35.2846503],[139.6931758,35.2845822],[139.693284299999988,35.2845414]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558915","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"bare_rock","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":98.958059836179018,"centroid_x":139.69338020156607,"centroid_y":35.284435026337171},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6932799,35.2844706],[139.6933249,35.2844661],[139.693473899999987,35.2844278],[139.6934943,35.284393],[139.6932736,35.2844444],[139.6932799,35.2844706]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650558918","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":"yes","craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":212.76762706786394,"centroid_x":139.69366357353366,"centroid_y":35.284469841865871},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6937471,35.2845019],[139.6937816,35.2844995],[139.69377750000001,35.2844342],[139.693747699999989,35.2844323],[139.6936322,35.2844347],[139.6936292,35.2844499],[139.6935971,35.2844504],[139.6935942,35.2844742],[139.6935493,35.2844752],[139.693463400000013,35.284449],[139.693452900000011,35.2844695],[139.6935382,35.2844833],[139.6935388,35.2844966],[139.693569700000012,35.2844981],[139.6935703,35.2844857],[139.6935942,35.2844871],[139.693593600000014,35.2845052],[139.6936351,35.2845071],[139.6936351,35.2844771],[139.693666,35.284478],[139.6936689,35.2845076],[139.6937471,35.2845019]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"650559227","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":"pier","military":null,"natural":null,"office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":null,"area":763.23234976828098,"centroid_x":139.69264077594579,"centroid_y":35.285319145633707},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.6922085,35.2854383],[139.692480499999988,35.2854646],[139.6924813,35.2854716],[139.6925362,35.2854774],[139.6925379,35.28546],[139.6929936,35.2851893],[139.693016,35.2851746],[139.6933013,35.2849873],[139.6933285,35.2849626],[139.6933095,35.2849508],[139.693281,35.2849732],[139.693194299999988,35.2850289],[139.6929791,35.2851671],[139.6925455,35.2854199],[139.6925465,35.2853944],[139.6922166,35.2853622],[139.6922085,35.2854383]]]]}},{"type":"Feature","properties":{"osm_id":null,"osm_way_id":"1205469017","name":null,"type":null,"aeroway":null,"amenity":null,"admin_level":null,"barrier":null,"boundary":null,"building":null,"craft":null,"geological":null,"historic":null,"land_area":null,"landuse":null,"leisure":null,"man_made":null,"military":null,"natural":"beach","office":null,"place":null,"shop":null,"sport":null,"tourism":null,"other_tags":"\\"swimming\\"=>\\"no\\"","area":1300.213371142745,"centroid_x":139.6932211357483,"centroid_y":35.284771380444084},"geometry":{"type":"MultiPolygon","coordinates":[[[[139.69306370000001,35.2846503],[139.693194299999988,35.2850289],[139.693281,35.2849732],[139.693323099999986,35.2849291],[139.693353,35.2848296],[139.693284299999988,35.2845414],[139.6931758,35.2845822],[139.69306370000001,35.2846503]]]]}}]}'),rW=JSON.parse('{"type":"FeatureCollection","name":"map-points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"osm_id":"444313641","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"description\\"=>\\"高射砲座跡\\",\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6952134,"centroid_y":35.2867833},"geometry":{"type":"Point","coordinates":[139.6952134,35.2867833]}},{"type":"Feature","properties":{"osm_id":"444313651","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"description\\"=>\\"高射砲座跡\\",\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6953335,"centroid_y":35.2869304},"geometry":{"type":"Point","coordinates":[139.6953335,35.2869304]}},{"type":"Feature","properties":{"osm_id":"444313737","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"description\\"=>\\"高射砲座跡\\",\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6951189,"centroid_y":35.2872457},"geometry":{"type":"Point","coordinates":[139.695118900000011,35.2872457]}},{"type":"Feature","properties":{"osm_id":"444313871","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"description\\"=>\\"高射砲座跡\\",\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6949765,"centroid_y":35.2874872},"geometry":{"type":"Point","coordinates":[139.6949765,35.2874872]}},{"type":"Feature","properties":{"osm_id":"444315773","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"description\\"=>\\"展望台跡\\",\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6944295,"centroid_y":35.2865479},"geometry":{"type":"Point","coordinates":[139.694429500000012,35.2865479]}},{"type":"Feature","properties":{"osm_id":"444320430","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"generator:source\\"=>\\"oil\\",\\"power\\"=>\\"generator\\"","area":null,"centroid_x":139.6940155,"centroid_y":35.2846968},"geometry":{"type":"Point","coordinates":[139.6940155,35.2846968]}},{"type":"Feature","properties":{"osm_id":"444325703","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":"survey_point","other_tags":"\\"description\\"=>\\"三角点\\"","area":null,"centroid_x":139.6942954,"centroid_y":35.284515},"geometry":{"type":"Point","coordinates":[139.694295399999987,35.284515]}},{"type":"Feature","properties":{"osm_id":"833617813","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"amenity\\"=>\\"toilets\\"","area":null,"centroid_x":139.6936608,"centroid_y":35.284636},"geometry":{"type":"Point","coordinates":[139.6936608,35.284636]}},{"type":"Feature","properties":{"osm_id":"4716000959","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"tourism\\"=>\\"viewpoint\\"","area":null,"centroid_x":139.6960873,"centroid_y":35.2867865},"geometry":{"type":"Point","coordinates":[139.696087299999988,35.2867865]}},{"type":"Feature","properties":{"osm_id":"4958114755","name":"台場跡","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6960616,"centroid_y":35.2867834},"geometry":{"type":"Point","coordinates":[139.6960616,35.2867834]}},{"type":"Feature","properties":{"osm_id":"4958114760","name":"日蓮洞穴","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6949843,"centroid_y":35.2877122},"geometry":{"type":"Point","coordinates":[139.694984299999987,35.2877122]}},{"type":"Feature","properties":{"osm_id":"4958114762","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"shop\\"=>\\"convenience\\"","area":null,"centroid_x":139.6937451,"centroid_y":35.2846344},"geometry":{"type":"Point","coordinates":[139.6937451,35.2846344]}},{"type":"Feature","properties":{"osm_id":"4958114763","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"amenity\\"=>\\"restaurant\\"","area":null,"centroid_x":139.6933991,"centroid_y":35.2846744},"geometry":{"type":"Point","coordinates":[139.6933991,35.2846744]}},{"type":"Feature","properties":{"osm_id":"5919405685","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"office\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6935929,"centroid_y":35.2847247},"geometry":{"type":"Point","coordinates":[139.6935929,35.2847247]}},{"type":"Feature","properties":{"osm_id":"5919405686","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"leisure\\"=>\\"picnic_table\\"","area":null,"centroid_x":139.6934775,"centroid_y":35.2846464},"geometry":{"type":"Point","coordinates":[139.6934775,35.2846464]}},{"type":"Feature","properties":{"osm_id":"5919405687","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"leisure\\"=>\\"picnic_table\\"","area":null,"centroid_x":139.6936445,"centroid_y":35.2845791},"geometry":{"type":"Point","coordinates":[139.6936445,35.2845791]}},{"type":"Feature","properties":{"osm_id":"5919405688","name":"猿島公園　エコミュージアム猿島","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"map\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.693678,"centroid_y":35.2845441},"geometry":{"type":"Point","coordinates":[139.693678,35.2845441]}},{"type":"Feature","properties":{"osm_id":"5919405689","name":"猿島の自然と歴史資源","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"map\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6940582,"centroid_y":35.2845298},"geometry":{"type":"Point","coordinates":[139.6940582,35.2845298]}},{"type":"Feature","properties":{"osm_id":"5919405690","name":"第一砲台","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6948569,"centroid_y":35.2867653},"geometry":{"type":"Point","coordinates":[139.6948569,35.2867653]}},{"type":"Feature","properties":{"osm_id":"5919405691","name":"砲台地下施設","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6944639,"centroid_y":35.2866465},"geometry":{"type":"Point","coordinates":[139.694463899999988,35.2866465]}},{"type":"Feature","properties":{"osm_id":"5919405692","name":"フランス積れんが建造物","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6941843,"centroid_y":35.2862847},"geometry":{"type":"Point","coordinates":[139.694184299999989,35.2862847]}},{"type":"Feature","properties":{"osm_id":"5919405693","name":"弾薬庫","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6938443,"centroid_y":35.2858402},"geometry":{"type":"Point","coordinates":[139.6938443,35.2858402]}},{"type":"Feature","properties":{"osm_id":"5919405694","name":"猿島要塞","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6936847,"centroid_y":35.2851757},"geometry":{"type":"Point","coordinates":[139.6936847,35.2851757]}},{"type":"Feature","properties":{"osm_id":"5919405695","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"guidepost\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.694128,"centroid_y":35.2846546},"geometry":{"type":"Point","coordinates":[139.694128,35.2846546]}},{"type":"Feature","properties":{"osm_id":"5919405696","name":null,"barrier":null,"highway":null,"ref":"5","address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"emergency\\"=>\\"access_point\\",\\"information\\"=>\\"board\\"","area":null,"centroid_x":139.6949407,"centroid_y":35.2875206},"geometry":{"type":"Point","coordinates":[139.694940699999989,35.2875206]}},{"type":"Feature","properties":{"osm_id":"5919405697","name":null,"barrier":null,"highway":null,"ref":"8","address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"emergency\\"=>\\"access_point\\",\\"information\\"=>\\"board\\"","area":null,"centroid_x":139.6942151,"centroid_y":35.2845398},"geometry":{"type":"Point","coordinates":[139.6942151,35.2845398]}},{"type":"Feature","properties":{"osm_id":"5919405698","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"leisure\\"=>\\"picnic_table\\"","area":null,"centroid_x":139.6942813,"centroid_y":35.2845269},"geometry":{"type":"Point","coordinates":[139.6942813,35.2845269]}},{"type":"Feature","properties":{"osm_id":"5919405699","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"map\\",\\"map_type\\"=>\\"toposcope\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6943392,"centroid_y":35.2844444},"geometry":{"type":"Point","coordinates":[139.6943392,35.2844444]}},{"type":"Feature","properties":{"osm_id":"5919405700","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"historic\\"=>\\"ruins\\"","area":null,"centroid_x":139.6940877,"centroid_y":35.2859721},"geometry":{"type":"Point","coordinates":[139.694087700000011,35.2859721]}},{"type":"Feature","properties":{"osm_id":"5919405701","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"leisure\\"=>\\"picnic_table\\"","area":null,"centroid_x":139.694256,"centroid_y":35.2864779},"geometry":{"type":"Point","coordinates":[139.694256,35.2864779]}},{"type":"Feature","properties":{"osm_id":"5919405702","name":"頂上広場のパノラマ","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"map\\",\\"map_type\\"=>\\"toposcope\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6941957,"centroid_y":35.2864752},"geometry":{"type":"Point","coordinates":[139.6941957,35.2864752]}},{"type":"Feature","properties":{"osm_id":"5919405703","name":"案内図","barrier":null,"highway":null,"ref":"7","address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"emergency\\"=>\\"access_point\\",\\"information\\"=>\\"map\\",\\"map_size\\"=>\\"site\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6943346,"centroid_y":35.286408},"geometry":{"type":"Point","coordinates":[139.6943346,35.286408]}},{"type":"Feature","properties":{"osm_id":"5919405704","name":"台場跡","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"map\\",\\"map_size\\"=>\\"site\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6960173,"centroid_y":35.286773},"geometry":{"type":"Point","coordinates":[139.6960173,35.286773]}},{"type":"Feature","properties":{"osm_id":"5919405705","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"leisure\\"=>\\"picnic_table\\"","area":null,"centroid_x":139.6960461,"centroid_y":35.2868293},"geometry":{"type":"Point","coordinates":[139.6960461,35.2868293]}},{"type":"Feature","properties":{"osm_id":"5919405706","name":"卯の崎広場のパノラマ","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"map\\",\\"map_type\\"=>\\"toposcope\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6961067,"centroid_y":35.286897},"geometry":{"type":"Point","coordinates":[139.6961067,35.286897]}},{"type":"Feature","properties":{"osm_id":"5919405707","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"guidepost\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6951693,"centroid_y":35.2870753},"geometry":{"type":"Point","coordinates":[139.6951693,35.2870753]}},{"type":"Feature","properties":{"osm_id":"5919405708","name":"砲台跡","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6949655,"centroid_y":35.2874582},"geometry":{"type":"Point","coordinates":[139.6949655,35.2874582]}},{"type":"Feature","properties":{"osm_id":"5919405709","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"amenity\\"=>\\"bench\\"","area":null,"centroid_x":139.6949249,"centroid_y":35.287499},"geometry":{"type":"Point","coordinates":[139.6949249,35.287499]}},{"type":"Feature","properties":{"osm_id":"5919405710","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"guidepost\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6950366,"centroid_y":35.2875015},"geometry":{"type":"Point","coordinates":[139.6950366,35.2875015]}},{"type":"Feature","properties":{"osm_id":"5919405711","name":"日蓮洞窟に残された貝塚","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"information\\"=>\\"board\\",\\"tourism\\"=>\\"information\\"","area":null,"centroid_x":139.6949908,"centroid_y":35.2877089},"geometry":{"type":"Point","coordinates":[139.6949908,35.2877089]}},{"type":"Feature","properties":{"osm_id":"8837224188","name":"猿島","barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":"neighbourhood","man_made":null,"other_tags":"\\"name:en\\"=>\\"Sarushima\\",\\"name:fr\\"=>\\"\xcele des Singes\\",\\"name:ja-Hira\\"=>\\"さるしま\\",\\"name:ja-Latn\\"=>\\"Saru-shima\\",\\"postal_code\\"=>\\"238-0019\\"","area":null,"centroid_x":139.6940151,"centroid_y":35.2860861},"geometry":{"type":"Point","coordinates":[139.6940151,35.2860861]}},{"type":"Feature","properties":{"osm_id":"11171699179","name":null,"barrier":null,"highway":null,"ref":null,"address":null,"is_in":null,"place":null,"man_made":null,"other_tags":"\\"amenity\\"=>\\"toilets\\"","area":null,"centroid_x":139.6932971,"centroid_y":35.2850097},"geometry":{"type":"Point","coordinates":[139.6932971,35.2850097]}}]}'),rZ=JSON.parse('{"type":"FeatureCollection","name":"measures","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"direction":"x","distance":1.8487000000106946e-3,"ellipsoidal_distance":168.17496180416458},"geometry":{"type":"LineString","coordinates":[[139.69476,35.28608],[139.696608700000013,35.28608]]}},{"type":"Feature","properties":{"direction":"y","distance":2.1229999999974325e-3,"ellipsoidal_distance":235.53793988693923},"geometry":{"type":"LineString","coordinates":[[139.69476,35.28608],[139.69476,35.283957]]}}]}');let rY={areas:rR,internals:rA,origin:JSON.parse('{"type":"FeatureCollection","name":"origin","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[139.69476,35.28608]}}]}'),measures:rZ,viewbox:JSON.parse('{"type":"FeatureCollection","name":"viewbox","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"direction":null,"distance":null,"ellipsoidal_distance":null},"geometry":{"type":"LineString","coordinates":[[139.69476,35.28608],[139.692907,35.288204]]}},{"type":"Feature","properties":{"direction":null,"distance":null,"ellipsoidal_distance":null},"geometry":{"type":"LineString","coordinates":[[139.692907,35.288204],[139.696608700000013,35.283957]]}}]}'),points:rW,lines:rI,multilinestrings:rP,multipolygons:rH},rU={pointMap:(r=rY.points,(0,ex.zG)(r.features,eh.DZ(e=>{let t=e.properties.osm_id;return null===t?ef.YP:ef.G([Number(t),e])}),e=>new Map(e))),lineMap:(l=rY.lines,(0,ex.zG)(l.features,eh.DZ(e=>{let t=e.properties.osm_id;return null===t?ef.YP:ef.G([Number(t),e])}),e=>new Map(e))),multilinestringMap:(a=rY.multilinestrings,(0,ex.zG)(a.features,eh.DZ(e=>{let t=e.properties.osm_id;return null===t?ef.YP:ef.G([Number(t),e])}),e=>new Map(e))),multipolygonMap:(i=rY.multipolygons,(0,ex.zG)(i.features,eh.DZ(e=>{let t=e.properties.osm_id,n=e.properties.osm_way_id,r=null!==t?t:null!==n?n:null;return null===r?ef.YP:ef.G([Number(r),e])}),e=>new Map(e)))},{mapCoord:rX,mapViewBox:rG}=function(e){let{origin:t,measures:n,viewbox:r}=e,l=eZ(t.features[0].geometry.coordinates),a=n.features[0],i=n.features[1],o=eZ(a.geometry.coordinates[1]),s=eZ(i.geometry.coordinates[1]),u=function(e,t){let n=e.x/t.x,r=e.y/t.y;return{...e,x:n,y:r}}({x:a.properties.ellipsoidal_distance,y:i.properties.ellipsoidal_distance},{x:o.x-l.x,y:s.y-l.y});return{mapCoord:{matrix:new DOMMatrixReadOnly().scale(u.x,u.y).translate(-l.x,-l.y)},mapViewBox:eF(function(e){let t=e.features[0].geometry.coordinates,[n,r]=eR(t[1],t[0]),l=e.features[1].geometry.coordinates,[a,i]=eR(l[1],l[0]);return{x:n,y:r,width:a,height:i}}(r),eS(ez(u)))}}(rY);document.title=`svgmapviewer @ ${window.location.host}`,!function(e){var t,n,r;let l={x:0,y:0,width:"number"==typeof e.width?e.width:0,height:"number"==typeof e.height?e.height:0};c({origViewBox:l,isContainerRendered:rw,isUiRendered:n0,...e}),c({...u});let a={...u,origViewBox:l,...e};ey.start(),eB.start(),rb.start(),tq.start(),tc.start(),te.start(),rr.start(),tP.start(),tQ.start(),d.add(td),p.add(tm),e.getMapNames&&(t=e.getMapNames(),ti.trigger.set({names:t})),a.searchEntries.length>0&&(n=function(e,t){var n;let r=null==(n=u.cartoConfig)?void 0:n.skipNamePattern;return[...e.points.features.flatMap(e=>{let{properties:n}=e,l=to(n,t,r);return null===l?[]:[l]}),...e.multipolygons.features.flatMap(e=>{let{properties:n}=e,l=to(n,t,r);return null===l?[]:[l]})]}(a.mapData,a.searchEntries),ts.postMessage({type:"INIT",entries:n})),void 0!==a.floorsConfig&&(r=a.floorsConfig.fidx,ey.send({type:"SELECT",fidx:r,force:!0}));let i=document.getElementById(a.root);if(null===i)throw Error("#root not found!");i.onwheel=function(e){var t;let n=i.children[0];e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||t3)&&e.preventDefault()},i.oncontextmenu=function(e){e.preventDefault()},i.ontouchmove=function(e){if(t3){var t;if(e.target instanceof HTMLDivElement&&(null==(t=e.target)?void 0:t.id)==="ui")return;e.preventDefault()}else if(!rl)return;e.preventDefault()},document.title=a.title,document.body.onkeydown=rp,document.body.onkeyup=ry,(0,tp.createRoot)(i).render((0,P.jsx)(o.StrictMode,{children:(0,P.jsx)(rE,{})}));let s=document.getElementById("style-root");if(null===s)throw Error("#style-root not found!");(0,tp.createRoot)(s).render((0,P.jsx)(o.StrictMode,{children:(0,P.jsx)(rj,{})}))}({mapData:rY,mapMap:rU,mapCoord:rX,origViewBox:rG,...rz,title:"Sarushima",copyright:"@ Daiji Maps | map data @ OpenStreetMap contributers",zoomFactor:3,cartoConfig:{backgroundColor:"lightblue"},root:"root",map:"map1"})}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.u=e=>"static/js/async/"+e+"."+({469:"d9ca6725",547:"3a7af0ff"})[e]+".js",n.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=[];n.O=(t,r,l,a)=>{if(r){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,l,a];return}for(var o=1/0,i=0;i<e.length;i++){for(var[r,l,a]=e[i],s=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every(e=>n.O[e](r[u]))?r.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(i--,1);var c=l();void 0!==c&&(t=c)}}return t}})(),n.p="/",(()=>{n.b=document.baseURI||self.location.href;var e={980:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[i,o,s]=r,u=0;if(i.some(t=>0!==e[t])){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(s)var c=s(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,["361","825","639"],function(){return n(561)});r=n.O(r)})();