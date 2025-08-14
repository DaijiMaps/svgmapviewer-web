(()=>{"use strict";var t={609:function(t,e,n){var r=n(249);let i={type:"",name:"",crs:{type:"",properties:{name:""}},features:[]},o={root:"root",map:"map",href:"map.svg",width:0,height:0,fontSize:16,origViewBox:{x:0,y:0,width:0,height:0},title:"svgmapviewer",subtitle:"svgmapviewer - An (opinionated) interactive offline SVG map viewer",copyright:"@ Daiji Maps",zoomFactor:3,isContainerRendered:()=>!0,isUiRendered:()=>!0,getMapLayers:()=>[],getMapObjects:()=>[],getMapSymbols:()=>[],getMapMarkers:()=>[],getMapNames:()=>[],searchEntries:[],renderInfo:function(t){return(0,r.createElement)("p",{},t.info.title)},mapSvgStyle:"",renderMap:function(){return(0,r.createElement)("div")},isMapRendered:()=>!0,mapData:{areas:i,internals:i,origin:i,measures:i,viewbox:i,points:i,lines:i,multilinestrings:i,multipolygons:i},mapMap:{pointMap:new Map,lineMap:new Map,multilinestringMap:new Map,multipolygonMap:new Map},mapCoord:{matrix:new DOMMatrixReadOnly}};function a(t){o={...o,...t}}let l=new Set,s=new Set,c=new Set,d=new Set,u=new Set,g=new Set,h=new Set,x=new Set,f=new Set,p=new Set,m=new Set,y=new Set,v=new Set,w=new Set,E=new Set,S=new Set,j=new Set,M=new Set,O=new Set,T=new Set,b=new Set,$=new Set,D=new Set,N=new Set,C=new Set,R=new Set,L=new Set;function A(){w.forEach(t=>t())}function k(t,e){M.forEach(n=>n(t,e))}var z=n(586),I=n(649);n(701);let H={context:{ids:new Set}};(0,I.a)({context:function(){let t=function(t){if(!t)return;let e=JSON.parse(t);if("context"in e&&"ids"in e.context)return{...e,context:{...e.context,ids:new Set(e.context.ids)}}}(localStorage.getItem("svgmapviewer:likes"));return void 0===t?H:t}().context,on:{like:(t,e)=>({...t,ids:new Set(Array.from(t.ids.add(e.id)))}),unlike:(t,e)=>(t.ids.delete(e.id),{...t,ids:new Set(Array.from(t.ids))})}}).subscribe(function(t){localStorage.setItem("svgmapviewer:likes",JSON.stringify({...t,context:{...t.context,ids:Array.from(t.context.ids.keys())}}))});let W=`
.liked {
  color: orange;
}

.not-liked {
  color: black;
}
`;var Z=n(158),U=n(621),Y=n(64),F=n(662);let P=`
position: absolute;
left: 0;
top: 0;
`,q=`
position: absolute;
right: 0;
top: 0;
`,G=`
position: absolute;
left: 0;
bottom: 0;
`,X=`
position: absolute;
right: 0;
bottom: 0;
`,_=`
margin: 0;
`,K=`
padding: 0;
`,B=`
${_} ${K}
`,V=`
box-sizing: border-box;
`,J=`
width: 100vw;
height: 100vh;
height: 100svh;
`,Q=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,tt=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`,te=`
-webkit-user-select: none;
user-select: none;
`,tn=`
touch-action: none;
`,tr=`
pointer-events: none;
`,ti=`
pointer-events: initial;
`,to=`
background-color: rgba(255, 255, 255, 0.5);
`,ta=`
cubic-bezier(0, 0, 0, 1)
`,tl=`
cubic-bezier(1, 0, 1, 1)
`,ts="250ms",tc=(0,U.cY)({types:{context:{},events:{}}}).createMachine({id:"floors1",context:{fidx:0,prevFidx:null},initial:"Idle",states:{Idle:{on:{SELECT:[{guard:t=>{let{event:e}=t;return e.force??!1},actions:(0,Y.a)({fidx:t=>{let{event:e}=t;return e.fidx}})},{guard:t=>{let{context:e,event:n}=t;return e.fidx!==n.fidx},actions:(0,Y.a)({fidx:t=>{let{event:e}=t;return e.fidx},prevFidx:t=>{let{context:e}=t;return e.fidx}}),target:"Animating"}]}},Animating:{on:{DONE:{actions:(0,Y.a)({prevFidx:null}),target:"Idle"}}}}}),td=(0,F.c)(tc);function tu(){let{fidx:t,prevFidx:e}=(0,Z.v9)(td,t=>t.context),n=function(t,e){let n=o.floorsConfig;if(void 0===n)return null;let r=n.floors.map((n,r)=>r===t||r===e?"":`
.fidx-${r} {
  visibility: hidden;
}
`).join(""),i=null===e?"":`
.fidx-${e} {
  will-change: opacity;
  animation: xxx-disappearing ${ts} linear;
}
.fidx-${t} {
  will-change: opacity;
  animation: xxx-appearing ${ts} linear;
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
${i}
`}(t,e),i=(0,r.useCallback)(e=>e===t?()=>{y.forEach(t=>t(e))}:void 0,[t]),a=(0,r.useCallback)(n=>null!==e||n===t?void 0:()=>{p.forEach(t=>t(n))},[t,e]);return{fidx:t,prevFidx:e,style:n,fidxToOnAnimationEnd:i,fidxToOnClick:a}}function tg(t,e){let n=t.x+e.x,r=t.y+e.y;return{...t,x:n,y:r}}function th(t,e){let n=t.x-e.x,r=t.y-e.y;return{...t,x:n,y:r}}td.start(),m.add(function(t){td.send({type:"SELECT",fidx:t})}),y.add(function(t){td.send({type:"DONE",fidx:t})});var tx=n(592);let tf=n(750).Zt(function(t,e){return tx.Df.compare(t.x,e.x)||tx.Df.compare(t.y,e.y)}),tp={x:0,y:0};function tm(t,e){let n="number"==typeof e?e:e instanceof Array?e[0]:e.x,r="number"==typeof e?e:e instanceof Array?e[1]:e.y,i=t.x*n,o=t.y*r;return{...t,x:i,y:o}}var ty=n(11),tv=n(582);async function tw(){return new Promise((t,e)=>{navigator.geolocation.getCurrentPosition(function(e){t(e)},function(t){e(t)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}let tE=(0,U.cY)({types:{events:{},emitted:{}},actors:{api:(0,ty.p4)(tw)},delays:{TIMEOUT:5e3}}).createMachine({id:"geoloc",context:{position:null,error:null},initial:"Idle",states:{Idle:{on:{GET:{target:"Getting"}}},Getting:{invoke:{src:"api",onDone:{actions:[(0,Y.a)({position:t=>{let{event:e}=t;return e.output}}),(0,tv.e)(t=>{let{event:e}=t;return{type:"POSITION",position:e.output}})],target:"Idle"},onError:{actions:(0,Y.a)({error:t=>{let{event:e}=t;return JSON.stringify(e)}}),target:"Retrying"}}},Retrying:{after:{TIMEOUT:{target:"Getting"}}}}}),tS=(0,F.c)(tE);function tj(t,e,n,r){return{x:t,y:e,width:n,height:r}}tS.start(),R.add(function(){tS.send({type:"GET"})});let tM={x:0,y:0,width:1,height:1};function tO(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}function tT(t){return{x:t.x+.5*t.width,y:t.y+.5*t.height}}function tb(t,e){return{...t,x:t.x+e.x,y:t.y+e.y}}function t$(t,e){return{...t,x:e.x,y:e.y}}function tD(t){return function(t){let{x:e,y:n,width:r,height:i}=t;return`${e} ${n} ${r} ${i}`}(function(t,e){let{x:n,y:r,width:i,height:o}=t;return{x:e(n),y:e(r),width:e(i),height:e(o)}}(t,function(t){return Math.round(100*t)/100}))}let tN=[1,2,2.5,5,10,15,20,25,30,40,50],tC=(0,U.cY)({types:{events:{},emitted:{},context:{}},actions:{clear:(0,Y.a)({ticked:!1}),set:(0,Y.a)({ticked:!0}),call:(0,tv.e)({type:"CALL"})},delays:{DURATION:500}}).createMachine({id:"expire1",context:{ticked:!1},initial:"Idle",states:{Idle:{on:{TICK:{target:"Empty"}}},Empty:{after:{DURATION:{actions:["call","clear"],target:"Idle"}},on:{TICK:{guard:t=>{let{context:e}=t;return!e.ticked},actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Active"}}},Active:{after:{DURATION:{target:"Expired"}},on:{TICK:{actions:{type:"set",params:t=>{let{event:e}=t;return e}},target:"Restarting"}}},Restarting:{always:"Active"},Expired:{always:{actions:["call","clear"],target:"Idle"}}}}),tR=void 0;function tL(t){return Math.round(100*t)/100}function tA(t){return Math.round(1e7*t)/1e7}let tk={container:tM,scroll:tM,content:new DOMMatrixReadOnly,svgOffset:{x:0,y:0},svgScale:{s:1},svg:tM};function tz(t){let{container:e,svgOffset:n,svgScale:r,svg:i}=t;return{container:tO(e),scroll:tO(e),content:new DOMMatrixReadOnly,svgOffset:n,svgScale:r,svg:tO(i)}}function tI(t){let{scroll:e,content:n,svgOffset:r,svgScale:i,svg:o}=t;return new DOMMatrixReadOnly().translate(e.x,e.y).multiply(n).translate(-r.x,-r.y).scale(1/i.s,1/i.s).translate(-o.x,-o.y)}var tH=n(945);function tW(t,e,n){let[r,i,o]=t,[a,l]=e;return r*a+i*l+o*n}function tZ(t,e,n){return[tW(function(t){let[[e],[n],[r]]=t;return[e,n,r]}(t),e,n),tW(function(t){let[[,e],[,n],[,r]]=t;return[e,n,r]}(t),e,n)]}function tU(t,e){return[tZ(t,function(t){let[e]=t;return e}(e),0),tZ(t,function(t){let[,e]=t;return e}(e),0),tZ(t,function(t){let[,,e]=t;return e}(e),1)]}function tY(t){let[e,n]=t;return[[1,0],[0,1],[e,n]]}function tF(t){let{x:e,y:n,width:r,height:i}=t;return{tl:{x:e,y:n},br:{x:e+r,y:n+i}}}function tP(t){let{tl:e,br:n}=t;return{x:e.x,y:e.y,width:n.x-e.x,height:n.y-e.y}}function tq(t){let{tl:e,br:n}=t;return[[e.x,e.y],[n.x,n.y]]}function tG(t){let[[e,n],[r,i]]=t;return{tl:{x:e,y:n},br:{x:r,y:i}}}function tX(t,e,n,r){var i,o;return i=function(t,e){let[n,r]=e;return[tY(e),function(t){let[e,n]=t;return[[e,0],[0,n],[0,0]]}(t),tY([-n,-r])].reduce(tU)}("number"==typeof(o=e)?[o,o]:"x"in o?[o.x,o.y]:o,[n,r]),(0,tH.zG)(t,tF,tq,t=>(function(t,e){let[n,r]=t;return[e(n),e(r)]})(t,t=>tZ(i,t,1)),tG,tP)}let t_={...tk,config:{fontSize:16,container:tM,svgOffset:{x:0,y:0},svgScale:{s:1},svg:tM}};function tK(t){let{a:e,b:n,c:r,d:i}=t,o=new DOMMatrixReadOnly([e,n,r,i,0,0]).transformPoint({x:1,y:0});return Math.atan2(o.y,o.x)/Math.PI*180}function tB(t,e){return function(t,e,n){let r=tI(t).inverse().transformPoint(n),i=t.container.width/t.container.height,o=i<1?e/i:e,a=i<1?e:e*i;return{...t,scroll:tX(t.scroll,[o,a],n.x,n.y),svgOffset:tm(t.svgOffset,[o,a]),svg:tX(t.svg,[o,a],r.x,r.y)}}(t,e,tT(t.scroll))}function tV(t,e){let n=t.scroll.width/2,r=t.scroll.height/2,i=new DOMMatrixReadOnly().translate(n,r).rotate(e).translate(-n,-r).multiply(t.content);return{...t,content:i}}function tJ(t,e){let n=th(tm(e,-1),t.scroll);return(0,tH.zG)(t,t=>({...t,scroll:tb(t.scroll,n)}),e=>(function(t,e){let n=t.content.inverse(),r={x:t.scroll.width/2,y:t.scroll.height/2},i=tg(r,th(t.scroll,e)),o=n.transformPoint(r),a=tm(th(n.transformPoint(i),o),-t.svgScale.s);return{...t,scroll:t$(t.scroll,e),svg:tb(t.svg,a)}})(e,tO(t.scroll)))}function tQ(t){if(null===t)return!0;let e=document.querySelector(".container");if(null===e)return!1;let n=e.scrollLeft,r=e.scrollTop,i=e.scrollWidth,o=e.scrollHeight;if(null===n)return!1;let a=i-t.width,l=o-t.height;if(Math.abs(a)>1||Math.abs(l)>1)return console.log(`scroll: target ${a>0?"larger":"smaller"} than expected: target=[${i}, ${o}] vs. request=[${t.width}, ${t.height}]`),!1;let s=Math.round(-t.x),c=Math.round(-t.y);if(s<0||c<0)return console.error(`scroll: out-of-bound request: [${t.x}], [${t.y}]`),!1;n!==s&&(e.scrollLeft=s),r!==c&&(e.scrollTop=c);let d=e.scrollLeft;if(Math.abs(d-s)>1)return console.log(`scroll: scrollLeft not reflected: expected=${n} vs. real=${d}`),!1;let u=e.scrollTop;return!(Math.abs(u-c)>1)||(console.log(`scroll: scrollHeight not reflected: expected=${r} vs. real=${u}`),!1)}let t0={scroll:tM,client:{width:0,height:0},timeStamp:0},t1=new Set;t1.add(function(t){let e=t.currentTarget;null!==e&&(t0={scroll:{x:e.scrollLeft,y:e.scrollTop,width:e.scrollWidth,height:e.scrollHeight},client:{width:e.clientWidth,height:e.clientHeight},timeStamp:t.timeStamp})});let t5=(0,U.cY)({types:{events:{},context:{}},actions:{updateZoom:(0,Y.a)({zoom:(t,e)=>e.zoom,z:(t,e)=>e.z}),updateRotate:(0,Y.a)({}),updateSvgMatrix:(0,Y.a)({svgMatrix:t=>{let{context:{layout:e}}=t;return function(t){let{content:e,svgOffset:n,svgScale:r,svg:i}=t;return new DOMMatrixReadOnly().multiply(e).translate(-n.x,-n.y).scale(1/r.s,1/r.s).translate(-i.x,-i.y)}(e)}}),updateGeoMatrix:(0,Y.a)({geoMatrix:t=>{let{context:e}=t;return e.svgMatrix.multiply(o.mapCoord.matrix).inverse()}}),updateDistanceRadius:(0,Y.a)({distanceRadius:t=>{let{context:{layout:e}}=t;return function(t){var e;let{container:n,svgScale:r}=t,i=Math.max(n.width,n.height)/2*r.s,o=Math.round(Math.log10(i)),a=(e=i/Math.pow(10,o-1),tN.flatMap(t=>{let n=Math.floor(e/t);return n<3||n>=10?[]:[{u:t,n}]}));if(a.length<1)throw Error("findDiv");let{u:l}=a[0],s=l*Math.pow(10,o-1);return{svg:s,client:s/r.s}}(e)}}),updateScroll:(0,Y.a)({geoPoint:(t,e)=>{let{context:n}=t,{scroll:r,client:i}=e,o=n.geoMatrix,a={x:r.x+i.width/2,y:r.y+i.height/2};return o.transformPoint(a)},geoRange:(t,e)=>{let{context:n}=t,{scroll:r,client:i}=e,o=n.geoMatrix,a={x:r.x,y:r.y},l={x:r.x+i.width,y:r.y+i.height};return{start:o.transformPoint(a),end:o.transformPoint(l)}}})}}).createMachine({id:"style1",context:{rendered:!0,appearing:!1,shown:!1,animating:!1,layout:t_,zoom:1,z:null,rotate:null,svgMatrix:new DOMMatrixReadOnly,geoMatrix:new DOMMatrixReadOnly,geoPoint:tp,distanceRadius:{svg:0,client:0},geoRange:{start:tp,end:tp},mode:"panning",animation:null},on:{"STYLE.LAYOUT":{actions:[(0,Y.a)({rendered:t=>{let{event:e}=t;return e.rendered},layout:t=>{let{event:e}=t;return e.layout}}),"updateSvgMatrix","updateGeoMatrix","updateDistanceRadius",(0,F.r)(t=>{let{event:{rendered:e}}=t;return{type:"LAYOUT.DONE",rendered:e}})]},"STYLE.ZOOM":{actions:{type:"updateZoom",params:t=>{let{event:e}=t;return e}}},"STYLE.SCROLL":{actions:{type:"updateScroll",params:t=>{let{event:e}=t;return e.currentScroll}}},"STYLE.MODE":{actions:(0,Y.a)({mode:t=>{let{event:e}=t;return e.mode}})}},initial:"WaitingForLayout",states:{WaitingForLayout:{on:{"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return e.rendered},actions:(0,Y.a)({appearing:!0}),target:"Appearing"}}},Appearing:{on:{"STYLE.ANIMATION.END":{actions:(0,Y.a)({appearing:!1,shown:!0}),target:"Idle"}}},Idle:{on:{"STYLE.ANIMATION":{actions:(0,Y.a)({animation:t=>{let{event:{animation:e}}=t;return e},animating:!0}),target:"Animating"},"LAYOUT.DONE":{guard:t=>{let{event:e}=t;return!e.rendered},actions:(0,Y.a)({shown:!1}),target:"WaitingForLayout"}}},Animating:{on:{"STYLE.ANIMATION.END":{actions:(0,Y.a)({animation:null,animating:!1}),target:"Idle"}}}}}),t2=(0,F.c)(t5,{systemId:"system-viewer1"});function t3(t){t2.send(t)}function t6(){return(0,Z.v9)(t2,t=>t.context.layout.container)}function t4(){return(0,Z.v9)(t2,t=>t.context.distanceRadius)}function t7(){t3({type:"STYLE.SCROLL",currentScroll:t0})}t2.start(),S.add(function(t,e){t3({type:"STYLE.LAYOUT",layout:t,rendered:e}),requestAnimationFrame(()=>t7())}),j.add(function(t,e,n){t3({type:"STYLE.ZOOM",zoom:e,z:n})}),M.add(function(t,e){t3({type:"STYLE.ZOOM",zoom:e,z:null})}),O.add(function(t){t3({type:"STYLE.ANIMATION",animation:t})}),T.add(function(t){t3({type:"STYLE.MODE",mode:t})});let t8=function(t,e){let n=tC.provide({delays:{DURATION:500}}),r=(0,F.c)(n);return r.on("CALL",e),r.start(),{machine:n,actor:r,tick:function(){r.send({type:"TICK"})}}}(0,t7);t1.add(t8.tick);let t9=(0,I.a)({context:{names:[]},on:{set:(t,e)=>{let{names:n}=e;return{names:n}}}});function et(t,e,n){let r=function(t){let e="osm_id"in t&&"string"==typeof t.osm_id?t.osm_id:"osm_way_id"in t&&"string"==typeof t.osm_way_id?t.osm_way_id:null;return null===e?null:Number(e)}(t);if(null===r)return null;let i=t.name;if(null!==i&&void 0!==n&&i.match(n))return null;let{centroid_x:o,centroid_y:a}=t;return null===o||null===a||0===e.filter(e=>e.filter(t)).length?null:{a:r+"",lonlat:{x:o,y:a}}}let ee=new Worker(new URL(n.p+n.u("469"),n.b),Object.assign({},{type:"module"},{type:void 0}));ee.onmessage=t=>{let e=t.data;"INIT.DONE"===e.type||"SEARCH.DONE"===e.type&&function(t){var e;let n=function(t,e,n){let r=function(t,e){if(void 0===t)return null;let n=e.pointMap.get(t);if(void 0!==n)return n;let r=e.lineMap.get(t);if(void 0!==r)return r;let i=e.multipolygonMap.get(t);return void 0!==i?i:null}(Number(n.address),t);if(null===r)return null;let i=r.properties,o=e.flatMap(t=>t.filter(i)?[t.getInfo(i,n.address)]:[]);return 0===o.length?null:o[0]}(o.mapMap,o.searchEntries,t);null!==n&&(e=o.mapCoord.matrix.transformPoint(t.lonlat),c.forEach(t=>t({psvg:e,info:n})))}(e.res)},ee.onerror=t=>{console.log("error",t)},ee.onmessageerror=t=>{console.log("messageerror",t)},s.add(function(t){let e=o.mapCoord.matrix.inverse().transformPoint(t);ee.postMessage({type:"SEARCH",pgeo:e})});let en=(0,U.cY)({types:{},actions:{}}).createMachine({id:"search",context:{},initial:"Idle",states:{Idle:{on:{SEARCH:{actions:(0,tv.e)(t=>{let{event:e}=t;return e}),target:"Searching"}}},Searching:{on:{"SEARCH.DONE":{actions:(0,tv.e)(t=>{let{event:e}=t;return e}),target:"Done"},"SEARCH.CANCEL":{target:"Done"}}},Done:{always:"Idle"}}}),er=(0,F.c)(en);function ei(t){er.send({type:"SEARCH",psvg:t})}function eo(t){er.send(null===t?{type:"SEARCH.CANCEL"}:{type:"SEARCH.DONE",...t})}er.on("SEARCH",t=>{let{psvg:e}=t;s.forEach(t=>t(e))}),er.on("SEARCH.DONE",t=>{let{psvg:e,info:n}=t;d.forEach(t=>t({psvg:e,info:n}))}),er.start();var ea=n(428);let el=new Map;function es(t,e,n){(0,r.useEffect)(()=>(function(t,e,n){let r=void 0===n?document:el.get(n)??null;if(null===r)return;let i=r.querySelector(`#${t}`)??null;if(null===i||null!==i.shadowRoot)return;let o=i.attachShadow({mode:"open"});el.set(t,o),(0,ea.createRoot)(o).render(e)})(t,e,n),[t,n,e])}function ec(){return(0,z.jsxs)("g",{id:"XBus",transform:"translate(-36, -36)",children:[(0,z.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,z.jsx)("path",{d:"m 14,58 4,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 24,0 0,4 a 3,3 0 0 0 6,0 l 0,-4 4,0 0,-23 -2,-16 a 8,8 0 0 0 -6,-6 40,40 0 0 0 -28,0 8,8 0 0 0 -6,6 l -2,16 0,23 z M 22,20 a 2.5,2.5 0 0 0 -2.5,2 L 18,35 a 1.5,1.75 0 0 0 1.5,2 l 33,0 A 1.5,1.75 0 0 0 54,35 L 52.5,22 A 2.5,2.5 0 0 0 50,20 z",fill:"white",stroke:"none",fillRule:"evenodd"}),(0,z.jsx)("path",{d:"m 27,16.5 18,0",fill:"none",strokeWidth:"3",strokeLinecap:"round"}),(0,z.jsx)("circle",{cx:"21",cy:"48",r:"3",stroke:"none"}),(0,z.jsx)("circle",{cx:"51",cy:"48",r:"3",stroke:"none"})]})}function ed(){return(0,z.jsxs)("g",{id:"XDrinkingFountain",children:[(0,z.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,z.jsxs)("g",{fill:"white",stroke:"none",children:[(0,z.jsx)("circle",{cx:"9",cy:"-20",r:"5.5",id:"circle1"}),(0,z.jsx)("path",{d:"m -2,-7.5 v 5 a 2.5,2.5 0 0 0 0.75,1.75 l 6.5,6.5 a 2.475,2.475 0 0 0 3.5,-3.5 L 3,-3.5 v -10 a 5.5,5.5 0 0 0 -8,-5 l -12,6.5 a 5,5 0 0 0 -3,5 v 32.5 a 4,4 0 0 0 8,0 v -27 z",id:"path1"}),(0,z.jsx)("path",{d:"m 18.5,9 h 7 V -7 h -17 a 2.5,2.5 0 0 0 -1.75,4.25 z",id:"path2"}),(0,z.jsx)("circle",{cx:"11.75",cy:"-8.75",r:"0.7",id:"circle2"}),(0,z.jsx)("circle",{cx:"13.5",cy:"-8.75",r:"0.7",id:"circle3"}),(0,z.jsx)("circle",{cx:"11.75",cy:"-10.75",r:"0.7",id:"circle4"}),(0,z.jsx)("circle",{cx:"13.75",cy:"-10.75",r:"0.7",id:"circle5"}),(0,z.jsx)("circle",{cx:"12.5",cy:"-12.75",r:"0.7",id:"circle6"}),(0,z.jsx)("circle",{cx:"14.75",cy:"-12.25",r:"0.7",id:"circle7"}),(0,z.jsx)("circle",{cx:"13.75",cy:"-14.25",r:"0.75",id:"circle8"}),(0,z.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle9"}),(0,z.jsx)("circle",{cx:"15.5",cy:"-15",r:"0.75",id:"circle10"}),(0,z.jsx)("circle",{cx:"16.5",cy:"-13",r:"0.75",id:"circle11"}),(0,z.jsx)("circle",{cx:"17.75",cy:"-15",r:"0.85",id:"circle12"}),(0,z.jsx)("circle",{cx:"18.25",cy:"-12.5",r:"0.85",id:"circle13"}),(0,z.jsx)("circle",{cx:"19.5",cy:"-14",r:"0.9",id:"circle14"}),(0,z.jsx)("circle",{cx:"19.75",cy:"-10.75",r:"0.9",id:"circle15"}),(0,z.jsx)("circle",{cx:"21.25",cy:"-12.5",r:"0.9",id:"circle16"})]})]})}function eu(){return(0,z.jsxs)("g",{id:"XElevator",transform:"translate(-36, -36)",children:[(0,z.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,z.jsxs)("g",{fill:"none",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,z.jsx)("path",{d:"m 26.5,23.5 0,-17 M 20,14 26.5,6.5 33,14"}),(0,z.jsx)("path",{d:"m 45.5,6.5 0,17 M 39,16 45.5,23.5 52,16"})]}),(0,z.jsx)("rect",{x:"17",y:"28",width:"38",height:"38",ry:"5",fill:"white",stroke:"none"}),(0,z.jsx)("rect",{x:"22",y:"33",width:"28",height:"28",stroke:"none"}),(0,z.jsxs)("g",{id:"_person2",fill:"white",stroke:"none",children:[(0,z.jsx)("circle",{cx:"27.5",cy:"38.75",r:"1.75"}),(0,z.jsx)("path",{d:"m 24.5,41 a 1,1 0 0 0 -1,1 l 0,7 a 1,1 0 0 0 1,1 l 0.25,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.5,0 0,8.5 a 1.25,1.25 0 1 0 2.5,0 l 0,-8.5 0.25,0 a 1,1 0 0 0 1,-1 l 0,-7 a 1,1 0 0 0 -1,-1 l -6,0 z"})]}),(0,z.jsx)("use",{x:"8.5",href:"#_person2"}),(0,z.jsx)("use",{x:"17",href:"#_person2"})]})}function eg(){return(0,z.jsxs)("g",{id:"XEscalator",transform:"translate(-36, -36)",children:[(0,z.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,z.jsx)("path",{d:"m 55,28 c -1,0 -2,0 -3,1 L 27,54 c -2,2 -4,3 -6,3 l -9,0 a 6,6 270 1 1 0,-12 l 5,0 c 1,0 2,0 3,-1 L 45,19 c 2,-2 4,-3 6,-3 l 9,0 a 6,6 90 1 1 0,12 z",fill:"none",stroke:"white",strokeWidth:"4"}),(0,z.jsx)("path",{d:"m 27,35 9,-9 0,-3 a 4.5,4.5 0 0 0 -9,0 z",fill:"white",stroke:"none"}),(0,z.jsx)("circle",{cx:"31.5",cy:"13.5",r:"4.5",fill:"white",stroke:"none"})]})}function eh(){return(0,z.jsxs)("g",{id:"XInformation",transform:"translate(-36, -36)",children:[(0,z.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,z.jsx)("circle",{cx:"36",cy:"36",r:"24",fill:"none",stroke:"white",strokeWidth:"6"}),(0,z.jsx)("path",{d:"m 27,32 c 0,-5 1,-11 9,-11 4,0 8,3 8,7 0,4 -2,6 -4,7 -2,1 -4,2 -4,5 0,3 0,6 0,6",fill:"none",stroke:"white",strokeWidth:"6"}),(0,z.jsx)("rect",{x:"33",y:"48",width:"6",height:"6",fill:"white",stroke:"none"})]})}function ex(){return(0,z.jsxs)("g",{id:"XParking",children:[(0,z.jsx)("rect",{x:"-35.5",y:"-35.5",width:"71",height:"71",rx:"6",ry:"6",fill:"black",stroke:"white"}),(0,z.jsx)("path",{d:"M -11,24 V -21 H 3 A 12.5,12.5 0 0 1 3,4 h -9",fill:"none",stroke:"white",strokeWidth:10})]})}function ef(){return(0,z.jsxs)("g",{id:"XStairs",transform:"translate(-36, -36)",children:[(0,z.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,z.jsx)("path",{d:"m 9,56.5 12,0 0,-10 10,0 0,-10 10,0 0,-10 10,0 0,-10 12,0",fill:"none",stroke:"white",strokeWidth:"5"})]})}function ep(){return(0,z.jsxs)("g",{id:"XToilets",transform:"translate(-36,-36)",children:[(0,z.jsx)("rect",{x:"0.5",y:"0.5",width:"71",height:"71",ry:"6",stroke:"white"}),(0,z.jsxs)("g",{fill:"white",stroke:"none",children:[(0,z.jsx)("rect",{x:"33.5",y:"12",width:"5",height:"48"}),(0,z.jsx)("circle",{cx:"19.5",cy:"15",r:"4"}),(0,z.jsx)("path",{d:"m 19,44.5 0,14 a 2,2 0 0 1 -4,0 l 0,-14 -5,0 5.5,-18.5 -1,0 -3,10.5 A 1.821,1.821 0 0 1 8,35.5 l 3.5,-12 A 5.7,4.6 0 0 1 17,20 l 5,0 a 5.7,4.6 0 0 1 5.5,3.5 l 3.5,12 a 1.821,1.821 0 0 1 -3.5,1 l -3,-10.5 -1,0 5.5,18.5 -5,0 0,14 a 2,2 0 0 1 -4,0 l 0,-14 z"}),(0,z.jsx)("circle",{cx:"52.5",cy:"15",r:"4"}),(0,z.jsx)("path",{d:"m 43,25 0,13 a 1.75,1.75 0 0 0 3.5,0 l 0,-11.5 1,0 0,31.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-18.75 1,0 0,18.75 a 2.25,2.25 0 0 0 4.5,0 l 0,-31.75 1,0 0,11.5 a 1.75,1.75 0 0 0 3.5,0 l 0,-13 a 5,5 0 0 0 -5,-5 l -9,0 a 5,5 0 0 0 -5,5 z"})]})]})}function em(){return(0,z.jsx)("g",{className:"assets",children:(0,z.jsx)(ey,{})})}function ey(){return(0,z.jsxs)("g",{className:"symbols",children:[(0,z.jsx)(ec,{}),(0,z.jsx)(ed,{}),(0,z.jsx)(eu,{}),(0,z.jsx)(eg,{}),(0,z.jsx)(eh,{}),(0,z.jsx)(ex,{}),(0,z.jsx)(ef,{}),(0,z.jsx)(ep,{})]})}function ev(t){return t>.5?-1:+(t<.5)}function ew(t){return t<.3?1:t>.7?-1:0}function eE(t,e,n,r){let i=e/2,o=n/2,a=e/20,l=a/2,s={x:-i*t.h,y:-o*t.v},c=0===t.h||0===t.v?{x:-(i+r)*t.h,y:-(o+r)*t.v}:{x:-(i+r*Math.cos(t.th))*t.h,y:-(o+r*Math.sin(t.th))*t.v},[d,u]=0===t.h?[{x:-l,y:0},{x:l,y:0}]:0===t.v?[{x:0,y:-l},{x:0,y:l}]:t.th<Math.PI/4?[{x:0,y:0},{x:0,y:a*t.v}]:[{x:0,y:0},{x:a*t.h,y:0}],g=tg(s,d),h=tg(s,u);return{p:s,q:c,a:g,b:h}}function eS(t){return{open:t,animating:!1}}function ej(t){return t.open||t.animating?null:{open:!0,animating:!0}}function eM(t){return t.open&&t.animating?{open:!0,animating:!1}:null}function eO(t){return!t.open||t.animating?null:{open:!1,animating:!0}}function eT(t){return t.open||!t.animating?null:{open:!1,animating:!1}}function eb(t){let{open:e,animating:n}=t;return e||n}Object.entries({bus:"#XBus",elevator:"#XElevator",escalator:"#XEscalator",information:"#XInformation",parking:"#XParking",stairs:"#XStairs",toilets:"#XToilets",water:"#XDrinkingFountain"});let e$={p:tp,psvg:tp,layout:tk,info:{title:""}};function eD(t){return function(e,n){let r=e[n],i=t(r);return e[n]=null===i?r:i,e}}let eN=(0,U.cY)({types:{},guards:{isHeaderVisible:t=>{let{context:{m:e}}=t;return eb(e.header)},isDetailVisible:t=>{let{context:{m:e}}=t;return eb(e.detail)},animationEnded:t=>{let{context:{animationEnded:e}}=t;return e.header&&e.detail}},actions:{startCancel:(0,Y.a)({canceling:()=>!0}),endCancel:(0,Y.a)({canceling:()=>!1}),open:(0,Y.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:r}=e;return eD(ej)(n,r)}}),close:(0,Y.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:r}=e;return eD(eO)(n,r)}}),handle:(0,Y.a)({m:(t,e)=>{let{context:{m:n}}=t,{part:r}=e;return eD(n[r].open?eM:eT)(n,r)}})}}).createMachine({type:"parallel",id:"ui",context:t=>{let{input:e}=t;return{...e,all:{open:!1,animating:!1},canceling:!1,detail:e$,m:{header:eS(!0),detail:eS(!1)},animationEnded:{header:!0,detail:!0}}},states:{Ui:{initial:"Idle",states:{Idle:{on:{FLOOR:{target:"Floor"},MENU:{target:"Menu"},DETAIL:{actions:(0,Y.a)({detail:t=>{let{event:{psvg:e,info:n,layout:r}}=t;return{psvg:e,p:tI(r).transformPoint(e),info:n,layout:r}}}),target:"Detail"},HELP:{target:"Help"}}},Floor:{},Menu:{},Detail:{initial:"Waiting",onDone:"Idle",states:{Waiting:{on:{OPEN:[{guard:(0,F.n)("animationEnded")},{actions:(0,Y.a)({all:{open:!0,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Opening"}],CANCEL:{target:"Closed"}}},Opening:{entry:[{type:"close",params:{part:"header"}},{type:"open",params:{part:"detail"}}],on:{DONE:[{guard:"isHeaderVisible"},{guard:(0,F.n)("isDetailVisible")},{actions:(0,Y.a)({all:{open:!0,animating:!1}}),target:"Opened"}]}},Opened:{on:{CANCEL:[{guard:(0,F.n)("animationEnded")},{actions:(0,Y.a)({all:{open:!1,animating:!0},animationEnded:{header:!1,detail:!1}}),target:"Closing"}]}},Closing:{entry:["startCancel",{type:"open",params:{part:"header"}},{type:"close",params:{part:"detail"}}],exit:"endCancel",on:{DONE:[{guard:(0,F.n)("isHeaderVisible")},{guard:"isDetailVisible"},{actions:(0,Y.a)({all:{open:!1,animating:!1}}),target:"Closed"}]}},Closed:{entry:(0,tv.e)({type:"CLOSE.DONE"}),type:"final"}}},Help:{}}},Handler:{on:{"HEADER.ANIMATION.END":{actions:[{type:"handle",params:{part:"header"}},(0,Y.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,header:!0}}}),(0,F.r)({type:"DONE"})]},"DETAIL.ANIMATION.END":{actions:[{type:"handle",params:{part:"detail"}},(0,Y.a)({animationEnded:t=>{let{context:e}=t;return{...e.animationEnded,detail:!0}}}),(0,F.r)({type:"DONE"})]}}}}});function eC(){return(0,Z.v9)(eL,t=>t.context.m.header)}function eR(){return(0,Z.v9)(eL,t=>t.context.m.detail)}let eL=(0,F.c)(eN);eL.on("CLOSE.DONE",function(){f.forEach(t=>t())}),eL.start();function eA(t){return(0,z.jsxs)("div",{className:"balloon",children:[(0,z.jsx)(ez,{...t}),t.children,(0,z.jsx)("style",{children:ek})]})}u.add(function(t,e,n){eL.send({type:"DETAIL",psvg:t,info:e,layout:n})}),h.add(function(t){eL.send({type:t?"OPEN":"CANCEL"})}),x.add(function(){eL.send({type:"CANCEL"})}),f.add(function(){requestAnimationFrame(()=>(function(){let t=el.get("detail");if(void 0===t)return;let e=t.querySelector(".detail");null!==e&&e.scroll(0,0)})())});let ek=`
.balloon,
.balloon-svg {
  ${P}
  ${tr}
  z-index: 10;
  will-change: opacity, transform;
}
`;function ez(t){let e=t._hv;if(null===e)return(0,z.jsx)("svg",{});let{viewBox:n,width:r,height:i,fg:o,bg:a}=function(t,e){let{bw:n,bh:r,ll:i,d:o,width:a,height:l}=e,s=tj(-a/2,-a/2,a,l),{body:c,leg:d}=function(t,e,n,r){let i=e/2,o=n/2,a=`
m${-i},${-o}
h${e}
v${n}
h${-e}
z
`,{p:l,q:s,a:c,b:d}=eE(t,e,n,r),u=th(s,c),g=th(d,s),h=th(l,d);return{body:a,leg:`
m${c.x},${c.y}
l${u.x},${u.y}
l${g.x},${g.y}
l${h.x},${h.y}
z
`}}(t,n,r,i);return{viewBox:s,width:a,height:l,bg:`M${o},${o}`+c+`M${o},${o}`+d,fg:"M0,0"+c+"M0,0"+d}}(e,t._size);return(0,z.jsxs)("svg",{className:"balloon-svg",viewBox:tD(n),width:r,height:i,children:[(0,z.jsx)("path",{className:"bg",d:a}),(0,z.jsx)("path",{className:"fg",d:o}),(0,z.jsx)("style",{children:`
path.bg {
  fill: black;
  stroke: none;
}

path.fg {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
`})]})}function eI(t){let{_p:e,_hv:n,_size:r,_leg:i}=t,o=eR(),a=null!==e&&null!==n&&eb(o)?function(t,e,n,r,i){let{open:o,animating:a}=t,{bw:l,bh:s,width:c,height:d}=r,u=th(i.q,i.p),g={x:(l/2+Math.abs(u.x))*n.h,y:(s/2+Math.abs(u.y))*n.v};if(a){let[t,n]=o?[0,1]:[1,0],[r,i]=o?[0,1]:[1,0],[a,l]=o?["0px","var(--dp-x)"]:["var(--dp-x)","0px"],[s,u]=o?["0px","var(--dp-y)"]:["var(--dp-y)","0px"],h=o?ta:tl;return`
.detail,
.balloon {
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --dp-x: ${g.x}px;
  --dp-y: ${g.y}px;
  --oa: ${t};
  --ob: ${n};
  --sa: ${r};
  --sb: ${i};
  --timing: ${h};
  --dxa: ${a};
  --dxb: ${l};
  --dya: ${s};
  --dyb: ${u};
  --pww: ${-c/2}px;
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
  --q-x: ${e.x}px;
  --q-y: ${e.y}px;
  --sb: 1;
  --dp-x: ${g.x}px;
  --dp-y: ${g.y}px;
  --dxb: var(--dp-x);
  --dyb: var(--dp-y);
  --pww: ${-c/2}px;
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
`}(o,e,n,r,i):".balloon, .detail { visibility: hidden; }";return(0,z.jsx)("style",{children:a})}function eH(t){return"=+iI".indexOf(t)>=0?1:"-_oO".indexOf(t)>=0?-1:0}let eW=(0,U.cY)({types:{},actions:{getScroll:(0,Y.a)({scroll:()=>(function(){let t=document.querySelector(".container");if(null!==t){let e=t.scrollLeft,n=t.scrollTop,r=t.scrollWidth,i=t.scrollHeight;return t.scrollLeft=Number(e)+1,t.scrollLeft=Number(e),tj(e,n,r,i)}return null})()}),syncScroll:(t,e)=>{let{pos:n}=e;return tQ(n)}},actors:{syncScrollLogic:(0,ty.p4)(async t=>{let{input:e}=t;if(null===e)throw Error("input is null");if(!tQ(e))throw Error("syncScroll failed");return!0})}}).createMachine({id:"scroll",initial:"Idle",context:{dest:null,scroll:null},states:{Idle:{on:{SYNC:{actions:[{type:"syncScroll",params:t=>{let{event:e}=t;return{pos:e.pos}}}]},GET:{actions:["getScroll",(0,tv.e)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.GET.DONE",scroll:e}})]},SYNCSYNC:{actions:(0,Y.a)({dest:t=>{let{event:e}=t;return e.pos}}),target:"Syncing"}}},Syncing:{invoke:[{src:"syncScrollLogic",systemId:"syncscroll1",input:t=>{let{context:e}=t;return e.dest},onDone:{actions:["getScroll",(0,tv.e)(t=>{let{context:{scroll:e}}=t;return{type:"SCROLL.SYNCSYNC.DONE",scroll:e}}),(0,Y.a)({dest:null})],target:"Idle"},onError:{target:"Retrying"}}]},Retrying:{after:{1e3:{target:"Syncing"}}}}}),eZ={slideDoneCbs:new Set,getDoneCbs:new Set,syncSyncDoneCbs:new Set},eU=(0,F.c)(eW,{systemId:"system-scroll1"});function eY(t){eU.send(t)}eU.on("SCROLL.SLIDE.DONE",t=>eZ.slideDoneCbs.forEach(e=>e(t))),eU.on("SCROLL.GET.DONE",t=>eZ.getDoneCbs.forEach(e=>e(t))),eU.on("SCROLL.SYNCSYNC.DONE",t=>eZ.syncSyncDoneCbs.forEach(e=>e(t)));let eF="panning",eP=(0,U.cY)({types:{},guards:{shouldReset:(t,e)=>{let{ev:n}=e;return"r"===n.key},shouldRecenter:(t,e)=>{let{ev:n}=e;return"c"===n.key},shouldRotate:(t,e)=>{let{ev:n}=e;return"t"===n.key},shouldZoom:(t,e)=>{let{ev:n}=e;return 0!==eH(n.key)},isTouching:t=>{let{context:{touching:e}}=t;return e},isHoming:t=>{let{context:{homing:e}}=t;return e},isZoomWanted:t=>{let{context:{want_animation:e}}=t;return"zoom"===e},isRotateWanted:t=>{let{context:{want_animation:e}}=t;return"rotate"===e},isContainerRendered:()=>null!==document.querySelector(".container"),isMapRendered:()=>o.isMapRendered(),isUiRendered:()=>o.isUiRendered()},actions:{syncScroll:t=>{let{context:{layout:e}}=t;return eY({type:"SYNC",pos:e.scroll})},syncScrollSync:t=>{let{context:{layout:e}}=t;return eY({type:"SYNCSYNC",pos:e.scroll})},getScroll:()=>eY({type:"GET"}),zoomKey:(0,Y.a)({z:(t,e)=>{let{ev:n}=e;return eH(n.key)}}),zoomHome:(0,Y.a)({z:()=>null,zoom:()=>1,homing:()=>!0}),zoomEvent:(0,Y.a)({z:(t,e)=>{let{z:n}=e;return n},cursor:(t,e)=>{let{context:{cursor:n}}=t,{p:r}=e;return null===r?n:r}}),startZoom:(0,Y.a)({animation:t=>{let{context:{layout:e,cursor:n,z:r}}=t;return null===r?function(t,e){let n=tT(e.config.svg),r=tI(t).transformPoint(n),i=e.svgScale.s/t.svgScale.s,o=tT(t.container),a=new DOMMatrixReadOnly().translate(o.x,o.y).scale(1/i).translate(-r.x,-r.y);return{move:null,zoom:{svg:e.svg,svgScale:e.svgScale,q:a,o:null},rotate:null}}(e,function(t){let{config:e,content:n}=t,r=tz(e),i=tK(n);return tV({config:e,...r},i)}(e)):function(t,e,n){var r,i;let a=tI(t).inverse().transformPoint(n),l=1/(i=e,Math.pow(o.zoomFactor,i)),s=new DOMMatrixReadOnly().scale(1/l,1/l);return{move:null,zoom:{svg:tX(t.svg,l,a.x,a.y),svgScale:(r=t.svgScale,"x"in r?{x:r.x*l,y:r.y*l}:{s:r.s*l}),q:s,o:n},rotate:null}}(e,r,n)}}),startRotate:(0,Y.a)({animation:t=>{let{context:{layout:e,cursor:n}}=t;return{move:null,zoom:null,rotate:{deg:90,q:new DOMMatrixReadOnly().rotate(90),o:n}}}}),updateZoom:(0,Y.a)({prevLayout:t=>{let{context:{layout:e}}=t;return e},layout:t=>{let{context:{layout:e,animation:n}}=t;return null===n?e:(0,tH.zG)(e,t=>{var e;return null===n.move?t:(e=n.move.move,{...t,scroll:t$(t.scroll,e)})},t=>{var e,r;return null===n.zoom?t:(e=n.zoom.svg,r=n.zoom.svgScale,{...t,svg:tO(e),svgScale:r})},t=>null===n.rotate?t:tV(t,n.rotate.deg))}}),endZoom:(0,Y.a)({prevLayout:null,want_animation:null,animation:null,z:null,zoom:t=>{let{context:{z:e,zoom:n}}=t;return null===e?n:n*Math.pow(2,e)}}),endRotate:(0,Y.a)({prevLayout:null,want_animation:null,animation:null}),wantZoom:(0,Y.a)({want_animation:"zoom"}),wantRotate:(0,Y.a)({want_animation:"rotate"}),syncAnimation:t=>{var e,n,r,i,o,a,l;let{context:{animation:s}}=t,c=(null==s||null==(e=s.move)?void 0:e.q)??(null==s||null==(n=s.zoom)?void 0:n.q)??(null==s||null==(r=s.rotate)?void 0:r.q)??null,d=(null==s||null==(i=s.move)?void 0:i.o)??(null==s||null==(o=s.zoom)?void 0:o.o)??(null==s||null==(a=s.rotate)?void 0:a.o)??null;null!==c&&(l={matrix:c,origin:d},O.forEach(t=>t(l)))},syncLayout:t=>{let{context:{layout:e,rendered:n}}=t;S.forEach(t=>t(e,n))},resetCursor:(0,Y.a)({cursor:t=>{let{context:{layout:e}}=t;return tT(e.container)}}),cursor:(0,Y.a)({cursor:(t,e)=>{let{ev:n}=e;return{x:n.pageX,y:n.pageY}}}),setModeToPanning:(0,Y.a)({mode:eF,cursor:t=>{let{context:{layout:e}}=t;return tT(e.container)}}),setModeToTouching:(0,Y.a)({mode:"touching"}),setModeToLocked:(0,Y.a)({mode:"locked"}),startTouching:(0,Y.a)({touching:!0}),endTouching:(0,Y.a)({touching:!1}),notifyTouching:(0,F.r)({type:"TOUCHING"}),notifyTouchingDone:(0,F.r)({type:"TOUCHING.DONE"}),startAnimating:(0,Y.a)({animating:()=>!0}),stopAnimating:(0,Y.a)({animating:()=>!1}),resizeLayout:(0,Y.a)({rendered:!1,origLayout:(t,e)=>{let{layout:n}=e;return n},layout:(t,e)=>{let{layout:n}=e;return tB(n,9)}}),updateLayoutFromScroll:(0,Y.a)({layout:t=>{let{context:e}=t,{scroll:n}=t0;return tJ(e.layout,n)}}),notifyZoomStart:(0,tv.e)(t=>{let{context:{layout:e,zoom:n,z:r}}=t;return{type:"ZOOM.START",layout:e,zoom:n,z:null===r?0:r}}),notifyZoomEnd:(0,tv.e)(t=>{let{context:{layout:e,zoom:n}}=t;return{type:"ZOOM.END",layout:e,zoom:n}}),notifySearch:(0,tv.e)(t=>{let{context:e}=t,{scroll:n}=t0;return{type:"SEARCH",psvg:tI(tJ(e.layout,n)).inverse().transformPoint(e.cursor)}}),notifySearchDone:(0,F.r)({type:"SEARCH.DONE"}),notifySearchEndDone:(0,tv.e)((t,e)=>{let{context:n}=t,{res:r}=e,{scroll:i}=t0,o=tJ(n.layout,i);return{type:"SEARCH.END.DONE",psvg:r.psvg,info:r.info,layout:o}}),endHoming:(0,Y.a)({cursor:t=>{let{context:e}=t;return tT(e.origLayout.container)},layout:t=>{let{context:e}=t;return tV(tB(e.origLayout,9),tK(e.layout.content))},homing:()=>!1}),notifyMode:(0,tv.e)(t=>{let{context:{mode:e}}=t;return{type:"MODE",mode:e}}),notifyLock:(0,tv.e)({type:"LOCK",ok:!0}),setRendered:(0,Y.a)({rendered:!0}),notifySwitch:(0,tv.e)((t,e)=>{let{fidx:n}=e;return{type:"SWITCH",fidx:n}}),notifySwitchDone:(0,tv.e)(()=>({type:"SWITCH.DONE"}))}}).createMachine({id:"viewer",initial:"Resizing",context:{origLayout:t_,layout:t_,prevLayout:null,cursor:tT(t_.container),z:null,zoom:1,homing:!1,want_animation:null,animation:null,mode:eF,touching:!1,animating:!1,rendered:!1},on:{"TOUCH.LOCK":{actions:["startTouching","notifyTouching","setModeToTouching","notifyMode"]},"TOUCH.UNLOCK":{actions:["endTouching","notifyTouchingDone","setModeToPanning","notifyMode"]},"SEARCH.LOCK":{actions:["notifyLock","setModeToLocked","notifyMode"]},"SEARCH.UNLOCK":{actions:["setModeToPanning","notifyMode","notifySearchDone"]}},states:{Resizing:{initial:"WaitingForResizeRequest",onDone:"Appearing",states:{WaitingForResizeRequest:{on:{RESIZE:{actions:{type:"resizeLayout",params:t=>{let{event:e}=t;return e}},target:"WaitingForMapRendered"}}},WaitingForWindowStabilized:{id:"Resizing-WaitingForWindowStabilized",after:{500:{target:"WaitingForMapRendered"}}},WaitingForMapRendered:{after:{250:{target:"WaitingForMapRendered",reenter:!0}},always:{guard:(0,F.a)(["isContainerRendered","isMapRendered","isUiRendered"]),target:"Layouting"}},Layouting:{entry:"syncLayout",on:{RENDERED:{actions:["setRendered","syncLayout","resetCursor"],target:"Syncing"}}},Syncing:{entry:"syncScrollSync",on:{"SCROLL.SYNCSYNC.DONE":{target:"Done"}}},Done:{type:"final"}}},Appearing:{on:{"ANIMATION.END":{target:"Panning"}}},Panning:{on:{RESIZE:{actions:[{type:"resizeLayout",params:t=>{let{event:e}=t;return e}}],target:"#Resizing-WaitingForWindowStabilized"},"LAYOUT.RESET":{actions:["zoomHome","wantZoom"],target:"Zooming"},"KEY.UP":[{guard:{type:"shouldZoom",params:t=>{let{event:e}=t;return{ev:e.ev}}},actions:[{type:"zoomKey",params:t=>{let{event:e}=t;return{ev:e.ev}}},"wantZoom"],target:"Zooming"},{guard:{type:"shouldRotate",params:t=>{let{event:e}=t;return{ev:e.ev}}},actions:"wantRotate",target:"Zooming"}],CLICK:{guard:()=>o.searchEntries.length>0,actions:[{type:"cursor",params:t=>{let{event:e}=t;return{ev:e.ev}}}],target:"Searching"},SWITCH:{actions:{type:"notifySwitch",params:t=>{let{event:e}=t;return e}},target:"Switching"},CONTEXTMENU:{target:"Recentering"},ROTATE:{actions:"wantRotate",target:"Zooming"},RECENTER:{target:"Recentering"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:t=>{let{event:{z:e,p:n}}=t;return{z:e,p:n}}},"wantZoom"],target:"Zooming"},TOUCHING:{target:"Touching"}}},Touching:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Waiting"}}},Waiting:{on:{"TOUCHING.DONE":{target:"Done"},"ZOOM.ZOOM":{actions:[{type:"zoomEvent",params:t=>{let{event:{z:e,p:n}}=t;return{z:e,p:n}}},"wantZoom"],target:"#Zooming"}}},Done:{type:"final"}}},Searching:{initial:"Starting",onDone:"Panning",states:{Starting:{always:{actions:"notifySearch",target:"WaitingForSearchEnd"}},WaitingForSearchEnd:{on:{"SEARCH.END":{actions:{type:"notifySearchEndDone",params:t=>{let{event:e}=t;return e}},target:"WaitingForSearchUnlock"}}},WaitingForSearchUnlock:{on:{"SEARCH.DONE":{target:"Done"}}},Done:{type:"final"}}},Switching:{initial:"Animating",onDone:"Panning",states:{Animating:{on:{"SWITCH.DONE":{actions:{type:"notifySwitchDone"},target:"Done"}}},Done:{type:"final"}}},Recentering:{initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Layouting"}}},Layouting:{always:{actions:["updateLayoutFromScroll","syncLayout","syncScroll"],target:"Done"}},Done:{type:"final"}}},Zooming:{id:"Zooming",initial:"Stopping",onDone:"Panning",states:{Stopping:{entry:"getScroll",on:{"SCROLL.GET.DONE":{target:"Rendering"}}},Rendering:{after:{50:{target:"Starting"}}},Starting:{always:[{guard:"isZoomWanted",actions:["updateLayoutFromScroll","startZoom","updateZoom","notifyZoomStart"],target:"Animating"},{guard:"isRotateWanted",actions:["updateLayoutFromScroll","startRotate","updateZoom","notifyZoomStart"],target:"Animating"}]},Animating:{initial:"Starting",onDone:"Done",states:{Starting:{always:{actions:["startAnimating","syncAnimation"],target:"Ending"}},Ending:{on:{"ANIMATION.END":[{guard:"isZoomWanted",actions:["endZoom","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"},{guard:"isRotateWanted",actions:["endRotate","syncLayout","syncScroll","notifyZoomEnd","stopAnimating","syncAnimation"],target:"Homing"}]}},Homing:{always:[{guard:"isHoming",actions:["endHoming","syncLayout","syncScroll"],target:"Done"},{target:"Done"}]},Done:{type:"final"}}},Done:{type:"final"}}}}});function eq(t){eG.send(t)}let eG=(0,F.c)(eP,{systemId:"system-viewer1"});eG.on("SEARCH",t=>{let{psvg:e}=t;l.forEach(t=>t(e))}),eG.on("SEARCH.END.DONE",t=>{let{psvg:e,info:n,layout:r}=t;u.forEach(t=>t(e,n,r)),g.forEach(t=>t(e,n,r))}),eG.on("LOCK",t=>{let{ok:e}=t;h.forEach(t=>t(e))}),eG.on("ZOOM.START",t=>{let{layout:e,zoom:n,z:r}=t;j.forEach(t=>t(e,n,r))}),eG.on("ZOOM.END",t=>{let{layout:e,zoom:n}=t;return k(e,n)}),eG.on("LAYOUT",t=>{let{layout:e}=t;return k(e,1)}),eG.on("MODE",t=>{let{mode:e}=t;T.forEach(t=>t(e))}),eG.on("SWITCH",t=>{let{fidx:e}=t;m.forEach(t=>t(e))}),eG.on("SWITCH.DONE",()=>void v.forEach(t=>t())),eG.start(),p.add(function(t){eq({type:"SWITCH",fidx:t})}),y.add(function(){eq({type:"SWITCH.DONE"})}),d.add(function(t){eG.send({type:"SEARCH.END",res:t})}),g.add(function(t){eG.send({type:"SEARCH.LOCK",psvg:t})}),f.add(function(){eG.send({type:"SEARCH.UNLOCK"})}),E.add(function(t,e){eq({type:"RESIZE",layout:t,force:e})}),eZ.getDoneCbs.add(function(t){null!==t.scroll&&eq({type:"SCROLL.GET.DONE",scroll:t.scroll})}),eZ.syncSyncDoneCbs.add(function(t){null!==t.scroll&&eq({type:"SCROLL.SYNCSYNC.DONE",scroll:t.scroll})});let eX=!1,e_=!1;function eK(t,e){null==e||e.preventDefault,(null==e?void 0:e.stopPropagation)===!1||t.ev.stopPropagation(),eq(t)}function eB(){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=t.current;if(e)return e.addEventListener("wheel",eV),()=>{e.removeEventListener("wheel",eV)}},[t]),t}function eV(t){let e=t.currentTarget;e_&&e instanceof HTMLDivElement&&e.scrollWidth===e.clientWidth&&e.scrollHeight===e.clientHeight&&t.preventDefault()}function eJ(t){let{_detail:e}=t,n=eB();return(0,z.jsxs)("div",{ref:n,className:"detail",onAnimationEnd:()=>{var t;return t={type:"DETAIL.ANIMATION.END"},void eL.send(t)},children:[o.renderInfo&&!function(t){let e=Object.values(t.info);return 1===e.length&&"string"==typeof e[0]&&""===e[0]}(e)&&o.renderInfo({info:e.info}),(0,z.jsx)("style",{children:eQ})]})}T.add(function(t){eX="locked"===t,e_="locked"===t}),j.add(function(){e_=!0}),M.add(function(){e_=!1}),D.add(function(){eq({type:"LAYOUT.RESET"})}),N.add(function(){eq({type:"RECENTER"})}),C.add(function(){eq({type:"ROTATE"})}),$.add(function(){eq({type:"ZOOM.ZOOM",z:-1,p:null})}),b.add(function(){eq({type:"ZOOM.ZOOM",z:1,p:null})}),w.add(function(){eq({type:"RENDERED"})});let eQ=`
.detail {
  ${P}
  width: 50vmin;
  height: 50vmin;
  padding: 0.5em;
  overflow-x: hidden;
  overflow-y: scroll;
  ${ti}
  ${V}
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
  ${te}
  margin: 1.5em;
  text-align: center;
}

p {
  ${te}
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
`;function e0(){return es("detail",(0,z.jsx)(e1,{}),"ui"),(0,z.jsx)("div",{id:"detail"})}function e1(){return(0,z.jsxs)("div",{className:"ui-content detail-balloon",children:[(0,z.jsx)(e5,{}),(0,z.jsx)(e2,{})]})}function e5(){let t=(0,Z.v9)(eL,t=>t.context.detail),e=function(t){let e=t.p,n=t.layout,r=function(t,e){let{x:n,y:r}=e,i=t.width/t.height,o={x:n/t.width,y:r/t.height},a=i>1?ev(o.x):ew(o.x);return{h:a,v:i>1?ew(o.y):ev(o.y),th:Math.atan2(t.height,t.width)}}(t.layout.container,e),i=n.container.width,o=n.container.height,a=function(t,e){let n=.01*Math.min(t,e),r=50*n,i=50*n,o=10*n,a=r/100;return{bw:r,bh:i,ll:o,d:a,width:r+2*o+2*a,height:i+2*o+2*a}}(i,o),l=eE(r,a.bw,a.bh,a.ll);return{_p:e,_hv:r,_W:i,_H:o,_size:a,_leg:l}}(t);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(eA,{...e}),(0,z.jsx)(eJ,{_detail:t}),(0,z.jsx)(eI,{...e})]})}function e2(){return(0,z.jsx)("svg",{id:"ui-svg-defs",children:(0,z.jsx)("defs",{children:(0,z.jsx)(em,{})})})}function e3(){return es("footer",(0,z.jsx)(e6,{}),"ui"),(0,z.jsx)("div",{id:"footer"})}function e6(){let t=o;return(0,z.jsxs)("div",{className:"ui-content footer",children:[(0,z.jsx)("p",{children:t.copyright}),(0,z.jsxs)("style",{children:[e4,(0,z.jsx)(e7,{})]})]})}let e4=`
.footer {
  ${G}
  ${Q}
  padding: 0.4em;
  font-size: xx-small;
  pointer-events: none;
}

h2,
p {
  ${te}
  pointer-events: initial;
}

h2 {
  font-size: x-small;
  margin: 0;
}

p {
  margin: 0.25em;
}
`;function e7(){let{open:t,animating:e}=eC();if(e){let[e,n]=t?[0,1]:[1,0],r=t?ta:tl;return(0,z.jsx)(z.Fragment,{children:`
.footer {
  --duration: 300ms;
  --timing: ${r};
  --a: ${e};
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
`})}return(0,z.jsx)(z.Fragment,{children:`
.footer {
  --b: ${+!!t};
  transform-origin: 50% 100%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function e8(){return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)("g",{id:"measure",children:(0,z.jsx)(ne,{})})})}function e9(){let{svg:t}=t4();return(0,z.jsxs)("div",{id:"distance",children:[(0,z.jsx)("p",{id:"distance-origin",className:"distance",children:"0m"}),no.map(e=>(0,z.jsxs)(r.Fragment,{children:[(0,z.jsxs)("p",{id:`distance-x-${e+1}`,className:"distance distance-x",children:[t*(e+1),"m"]}),(0,z.jsxs)("p",{id:`distance-y-${e+1}`,className:"distance distance-y",children:[t*(e+1),"m"]})]},e)),(0,z.jsx)("style",{children:(0,z.jsx)(ni,{})})]})}function nt(){let t=(0,Z.v9)(t2,t=>t.context.geoPoint),e=t.x>0?"E":"W",n=t.y>0?"N":"S",r=`${e} ${tA(Math.abs(t.x))}`,i=`${n} ${tA(Math.abs(t.y))}`;return(0,z.jsxs)("div",{id:"coordinate",children:[(0,z.jsx)("p",{id:"longitude",children:r}),(0,z.jsx)("p",{id:"latitude",children:i}),(0,z.jsx)("style",{children:(0,z.jsx)(nr,{})})]})}function ne(){let{width:t,height:e}=t6(),{client:n}=t4(),r=`M0,${e/2} h${t}`,i=`M${t/2},0 v${e}`,o=no.map(r=>(function(t){let{width:e,height:n,r}=t;return`M${e/2},${n/2} m-${r},0 a${r},${r} 0,1,0 ${2*r},0 a${r},${r} 0,1,0 -${2*r},0`.replaceAll(/([.]\d)\d*/g,"$1")})({width:t,height:e,r:n*(r+1)}));return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("path",{id:"measure-horizontal",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:r}),(0,z.jsx)("path",{id:"measure-vertical",className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:i}),o.map((t,e)=>(0,z.jsx)("path",{id:`measure-ring-${e+1}`,className:"measure-line",stroke:"black",strokeWidth:"0.1px",fill:"none",d:t},e))]})}function nn(){let{open:t,animating:e}=eC(),[n,r]=t?[0,1]:[1,0],i=e?`
.guides {
  --timing: ${t?ta:tl};
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
`;return(0,z.jsx)(z.Fragment,{children:i})}function nr(){let{width:t,height:e}=t6(),n=`
#distance,
#coordinate {
  ${P}
  width: ${t}px;
  height: ${e}px;
}
`,r=`
#longitude {
  ${X}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: right bottom;
  transform: translate(${-t/2}px, ${-e/2}px) scale(0.5);
}
`,i=`
#latitude {
  ${G}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left bottom;
  transform: translate(${t/2}px, ${-e/2}px) scale(0.5);
}
`;return(0,z.jsxs)(z.Fragment,{children:[n,r,i]})}function ni(){let{width:t,height:e}=t6(),{client:n}=t4(),r=`
.distance {
  ${P}
  margin: 0.1em;
  padding: 0;
  font-weight: lighter;
  transform-origin: left top;
}
`,i=`
#distance-origin {
  transform: translate(${t/2}px, ${e/2}px) scale(0.5);
}
`,o=no.map(r=>`
#distance-x-${r+1} {
  transform: translate(${t/2+n*(r+1)}px, ${e/2}px) scale(0.5);
}
`),a=no.map(r=>`
#distance-y-${r+1} {
  transform: translate(${t/2}px, ${e/2+n*(r+1)}px) scale(0.5);
}
`);return(0,z.jsxs)(z.Fragment,{children:[i,r,o,a]})}let no=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function na(){return es("guides",(0,z.jsx)(nl,{}),"ui"),(0,z.jsx)("div",{id:"guides"})}function nl(){return o.mapCoord.matrix.isIdentity?(0,z.jsx)(z.Fragment,{}):(0,z.jsxs)("div",{className:"ui-content guides",children:[(0,z.jsx)("svg",{className:"guides",children:(0,z.jsx)(e8,{})}),(0,z.jsx)(e9,{}),(0,z.jsx)(nt,{}),(0,z.jsxs)("style",{children:[ns,(0,z.jsx)(nn,{})]})]})}let ns=`
.guides {
  ${P}
  ${J}
  ${tr}
  z-index: 2;
}

text {
  ${te}
}
`;function nc(){let{fidx:t,fidxToOnClick:e}=tu(),n=o.floorsConfig;return void 0===n||n.floors.length<2?(0,z.jsx)(z.Fragment,{}):(0,z.jsxs)("div",{className:"floors",children:[(0,z.jsx)("ul",{className:"floor-list",children:n.floors.map((n,r)=>{let{name:i}=n;return(0,z.jsx)("li",{className:`floor-item ${nh(r===t)}`,onClick:e(r),children:i},r)})}),(0,z.jsx)("style",{children:nd})]})}let nd=`
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
  ${to}
}
.floor-item {
  text-align: center;
  padding: 0.5em 0.75em;
  border: 1.5px solid black;
  pointer-events: initial;
  will-change: opacity;
  transition: opacity ${ts};
}
.floor-item.selected {
  opacity: 1;
}
.floor-item.unselected {
  opacity: 0.5;
}
`;function nu(){let{fidx:t}=tu(),e=o.floorsConfig;return void 0===e||e.floors.length<2?(0,z.jsx)(z.Fragment,{}):(0,z.jsxs)("div",{children:[e.floors.map((e,n)=>(0,z.jsx)("h2",{className:`floor-name ${nh(n===t)}`,children:e.name},n)),(0,z.jsx)("style",{children:ng})]})}let ng=`
.floor-name {
  position: absolute;
  transform: translate(-50%, 0);
  margin: 0.25em 0;
  font-size: 4em;
  will-change: opacity;
  transition: opacity ${ts};
}
.floor-name.selected {
  opacity: 1;
}
.floor-name.unselected {
  opacity: 0;
}
`;function nh(t){return t?"selected":"unselected"}function nx(){return es("header",(0,z.jsx)(nf,{}),"ui"),(0,z.jsx)("div",{id:"header"})}function nf(){let t=o;return(0,z.jsxs)("div",{className:"ui-content header",onAnimationEnd:()=>{var t;return t={type:"HEADER.ANIMATION.END"},void eL.send(t)},children:[(0,z.jsx)("h1",{className:"title",onClick:()=>void D.forEach(t=>t()),children:t.title}),(0,z.jsx)(nu,{}),(0,z.jsxs)("style",{children:[np,(0,z.jsx)(nm,{})]})]})}let np=`
.header {
  ${P}
  ${Q}
  padding: 0.5em;
  font-size: smaller;
  pointer-events: none;
}

h1,
h2,
p {
  ${te}
  ${ti}
}

h1,
h2 {
  margin: 0.25em;
  font-weight: 100;
  cursor: default;
  text-align: center;
  font-size: large;
}

`;function nm(){let{open:t,animating:e}=eC();if(e){let[e,n]=t?[0,1]:[1,0],r=t?ta:tl;return(0,z.jsx)(z.Fragment,{children:`
.header {
  --timing: ${r};
  --duration: 300ms;
  --a: ${e};
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
`})}return(0,z.jsx)(z.Fragment,{children:`
.header {
  --b: ${+!!t};
  transform-origin: 50% 0%;
  opacity: var(--b);
  transform: translate(calc(50vw - 50%), 0%) scale(var(--b));
  will-change: opacity, transform;
}
`})}function ny(){return es("left",(0,z.jsx)(nv,{}),"ui"),(0,z.jsx)("div",{id:"left"})}function nv(){return(0,z.jsxs)("div",{className:"ui-content left bottom",children:[(0,z.jsx)(nc,{}),(0,z.jsx)("style",{children:nw})]})}let nw=`
.left {
  ${P}
  ${tt}
  padding: 0.4em;
  font-size: smaller;
  ${tr}

  transform-origin: 100% 50%;
  transform: translateY(calc(-50% + 50vh));
  transform: translateY(calc(-50% + 50svh));
}

.left {
  top: initial;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nE(){return es("right",(0,z.jsx)(nS,{}),"ui"),(0,z.jsx)("div",{id:"right"})}function nS(){return(0,z.jsxs)("div",{className:"ui-content right bottom",children:[(0,z.jsx)(nM,{}),(0,z.jsx)("style",{children:nj})]})}let nj=`
.right {
  ${q}
  ${tt}
  padding: 0.4em;
  font-size: smaller;
  ${tr}

  transform-origin: 100% 50%;
}

.right {
  top: initial;
  bottom: 0;
  align-items: end;

  transform-origin: 100% 100%;
}
`;function nM(){return(0,z.jsxs)("div",{className:"zoom",children:[(0,z.jsx)(nT,{}),(0,z.jsx)(nb,{}),(0,z.jsx)(n$,{}),(0,z.jsx)(nD,{}),(0,z.jsx)(nN,{}),(0,z.jsx)(nC,{}),(0,z.jsxs)("style",{children:[nO,(0,z.jsx)(nR,{})]})]})}let nO=`
.zoom {
  font-size: large;
  margin: 0;
  ${Q}
}

.zoom-item {
  margin: 1.25px;
  padding: 0.25em;
  border: 1.25px black solid;
  ${ti}
  cursor: default;
  ${to}
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
`;function nT(){return(0,z.jsx)("div",{className:"zoom-item fullscreen",onClick:()=>void L.forEach(t=>t()),children:(0,z.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,z.jsx)("path",{d:nZ})})})}function nb(){return o.mapCoord.matrix.isIdentity?(0,z.jsx)(z.Fragment,{}):(0,z.jsx)("div",{className:"zoom-item position",onClick:()=>void R.forEach(t=>t()),children:(0,z.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,z.jsx)("path",{d:nW})})})}function n$(){return(0,z.jsx)("div",{className:"zoom-item recenter",onClick:()=>void N.forEach(t=>t()),children:(0,z.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,z.jsx)("path",{d:nz})})})}function nD(){return(0,z.jsx)("div",{className:"zoom-item rotate",onClick:()=>void C.forEach(t=>t()),children:(0,z.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,z.jsx)("path",{d:nk})})})}function nN(){return(0,z.jsx)("div",{className:"zoom-item zoom-out",onClick:()=>void $.forEach(t=>t()),children:(0,z.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,z.jsx)("path",{d:nA})})})}function nC(){return(0,z.jsx)("div",{className:"zoom-item zoom-in",onClick:()=>void b.forEach(t=>t()),children:(0,z.jsx)("svg",{viewBox:"-5.25 -5.25 10.5 10.5",children:(0,z.jsx)("path",{d:nL})})})}function nR(){let{open:t,animating:e}=eC();if(e){let[e,n]=t?[0,1]:[1,0],r=t?ta:tl;return(0,z.jsx)(z.Fragment,{children:`
.right {
  --timing: ${r};
  --a: ${e};
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
`})}return(0,z.jsx)(z.Fragment,{children:`
.right {
  --b: ${+!!t};
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
`})}let nL=`
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
`,nA=`
M0,0
m5,5
l-2,-2
a3,3 0,1,1 -6,-6
a3,3 0,1,1 6,6
m-3-3
m-2.5,0
h5
`,nk=`
M -4,-4
l 2,0
a 6,6 0,0,1 6,6
l 0,2
m -1,-2
l 1,2
l 1,-2
`,nz=`
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
`,nI=3*Math.sqrt(2),nH=nI+6,nW=`
M 0,0
m 0,${nH/2}
l -3,-3
a ${nI},${nI} 0,1,1 6,0
z
m 0,${-nH+nI+nI/2}
a ${nI/2},${nI/2} 0,1,0 0,${-nI}
a ${nI/2},${nI/2} 0,1,0 0,${nI}
`.replaceAll(/([.]\d\d)\d*/g,"$1"),nZ=`
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
`;function nU(){return es("shadow",(0,z.jsx)(nY,{}),"ui"),(0,z.jsx)("div",{id:"shadow"})}function nY(){let t=eB();return(0,z.jsx)("div",{ref:t,className:"ui-content shadow",onClick:()=>void x.forEach(t=>t()),children:(0,z.jsxs)("style",{children:[nF,(0,z.jsx)(nP,{})]})})}let nF=`
.shadow {
  ${P}
  ${J}
  background-color: black;
  cursor: default;
  pointer-events: initial;
  z-index: 5;
  will-change: opacity;
}
`;function nP(){let{open:t,animating:e}=eR(),n=(0,Z.v9)(t2,t=>t.context.animating);if(!e)return t?(0,z.jsx)(z.Fragment,{children:`
.shadow {
  opacity: 0.3;
  will-change: opacity;
}
`}):n?(0,z.jsx)(z.Fragment,{children:".shadow { display: initial; opacity: 0; }"}):(0,z.jsx)(z.Fragment,{children:".shadow { display: none; }"});{let[e,n]=t?[0,.3]:[.3,0],r=t?ta:tl;return(0,z.jsx)(z.Fragment,{children:`
.shadow {
  --duration: 400ms;
  --timing: ${r};
  --a: ${e};
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
`})}}function nq(){return es("ui",(0,z.jsx)(nG,{})),(0,z.jsx)("div",{id:"ui"})}function nG(){return(0,z.jsxs)("div",{className:"ui",children:[(0,z.jsx)(nU,{}),(0,z.jsx)(nx,{}),(0,z.jsx)(e3,{}),(0,z.jsx)(ny,{}),(0,z.jsx)(nE,{}),(0,z.jsx)(na,{}),(0,z.jsx)(e0,{})]})}function nX(){var t,e,n;let r=(null==(n=document.querySelector("#ui"))||null==(e=n.shadowRoot)||null==(t=e.children)?void 0:t.length)??null;return null!==r&&r>0}var n_=n(58),nK=n(544),nB=n(185);let nV=n_.pR(tf),nJ=nK.YH(tx.Df),nQ=nK.qO(),n0=nK.uZ(tx.Eq,n_.jG());function n1(t){return(0,tH.zG)(t,nK.VO(nV),n_.DZ(t=>0===t.length?nB.YP:nB.G(t[0])))}function n5(t){return t.length<2?null:function(t){let e=0===t.length?null:t.reduce((t,e)=>({x:t.x+e.x,y:t.y+e.y}));return null===e?null:tm(e,1/t.length)}(t)}function n2(t){return new Map((0,tH.zG)(t.changedTouches,Array.from,n_.UI(t=>[t.identifier,[{x:t.clientX,y:t.clientY}]])))}let n3=(0,U.cY)({types:{context:{},events:{},emitted:{}},guards:{isAllEnding:t=>{let{context:{touches:e}}=t;return 0===e.vecs.size},isSingleTouching:t=>{let{context:{touches:e}}=t;return 1===e.vecs.size},isDoubleTouching:t=>{let{context:{touches:e}}=t;return 2===e.vecs.size},isManyTouching:t=>{let{context:{touches:e}}=t;return e.vecs.size>2},isZooming:t=>{let{context:{touches:e}}=t;return null!==e.z}},actions:{handleTouchStart:(0,tv.a)(t=>{let{enqueue:e}=t;e.assign({touches:t=>{let{context:{touches:e},event:n}=t;return"TOUCH.START"!==n.type?e:function(t,e){let n=n0.concat(t.vecs,n2(e)),r=n1(n),i=n5(r),o=2!==r.length?null:.5>Math.abs(function(t,e){let n=th(t,e);return n.y/n.x}(r[0],r[1]));return{...t,vecs:n,points:r,cursor:i,horizontal:o}}(e,n.ev)}}),e.raise({type:"STARTED"})}),handleTouchMove:(0,tv.a)(t=>{let{enqueue:e}=t;e.assign({touches:t=>{let{context:{touches:e},event:n}=t;return"TOUCH.MOVE"!==n.type?e:function(t,e,n){var r,i;let o=n2(e),a=nJ.mapWithIndex(t.vecs,(t,e)=>(0,tH.zG)(o.get(t),nB.ij,nB.g_(()=>e,n_.zo(e)))),l=n1(a),s=n5(l),[c,d]=l;if(null===s||c===tR||d===tR)return{...t,vecs:a,points:l,cursor:s};let u=function(t,e,n){let r=Math.pow((t.length>0?t[0]:e)-e,2);return 0===t.length||r>0?[e,...t]:t}(t.dists,Math.sqrt((r=c,i=d,Math.pow(r.x-i.x,2)+Math.pow(r.y-i.y,2))),0),g=function(t){let[e,n,r,i]=t;return e===tR||n===tR||r===tR||i===tR?null:e<n&&n<r&&r<i?-1:e>n&&n>r&&r>i?1:null}(u);return{vecs:a,points:l,cursor:s,dists:u,z:g,horizontal:t.horizontal}}(e,n.ev,0)}}),e.raise({type:"MOVED"})}),handleTouchEnd:(0,tv.a)(t=>{let{enqueue:e}=t;e.assign({touches:t=>{let{context:{touches:e},event:n}=t;return"TOUCH.END"!==n.type?e:function(t,e){let n=n2(e),r=nQ.filterMapWithIndex(t.vecs,(t,e)=>n.has(t)?nB.YP:nB.G(e)),i=n1(r),o=n5(i);return{vecs:r,points:i,cursor:o,dists:0===r.size?[]:t.dists,z:0===r.size?null:t.z,horizontal:t.horizontal}}(e,n.ev)}}),e.raise({type:"ENDED"})}),resetTouches:(0,Y.a)({touches:()=>({vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null})}),notifyTouching:(0,tv.a)(t=>{let{enqueue:e,context:n}=t;return e.emit(2===n.touches.vecs.size?{type:"MULTI.START"}:{type:"MULTI.END"})}),notifyZoom:(0,tv.a)(t=>{let{context:e,enqueue:n}=t,r=e.touches.cursor,i=e.touches.z;null!==r&&null!==i&&n.emit({type:"ZOOM",p:r,z:i})})}}).createMachine({id:"touch1",initial:"Idle",context:{touches:{vecs:new Map,points:[],cursor:null,dists:[],z:null,horizontal:null}},on:{"TOUCH.START":{actions:"handleTouchStart"},"TOUCH.MOVE":{actions:"handleTouchMove"},"TOUCH.END":{actions:"handleTouchEnd"},CANCEL:{target:".Canceling"}},states:{Idle:{entry:"resetTouches",on:{STARTED:[{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}]}},SingleTouching:{on:{STARTED:[{guard:"isDoubleTouching",target:"DoubleTouching"},{guard:"isManyTouching",target:"ManyTouching"}],ENDED:[{guard:"isAllEnding",target:"Idle"}]}},DoubleTouching:{entry:"notifyTouching",exit:"notifyTouching",on:{STARTED:[{guard:"isManyTouching",target:"ManyTouching"}],MOVED:{guard:"isZooming",actions:"notifyZoom"},ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"}]}},ManyTouching:{on:{ENDED:[{guard:"isAllEnding",target:"Idle"},{guard:"isSingleTouching",target:"SingleTouching"},{guard:"isDoubleTouching",target:"DoubleTouching"}]}},Canceling:{on:{ENDED:[{target:"Idle"}]}}}}),n6=(0,F.c)(n3),n4=!1;function n7(t){n6.send({type:"TOUCH.START",ev:t})}function n8(t){n6.send({type:"TOUCH.MOVE",ev:t})}function n9(t){n6.send({type:"TOUCH.END",ev:t})}function rt(){n6.send({type:"CANCEL"})}function re(t){eX||eK({type:"CLICK",ev:t})}function rn(t){eK({type:"CONTEXTMENU",ev:t})}function rr(t){eK({type:"WHEEL",ev:t})}function ri(t){null!==t&&t1.forEach(e=>e(t))}function ro(t){eq({type:"KEY.DOWN",ev:t})}function ra(t){eq({type:"KEY.UP",ev:t})}function rl(){let t=(0,r.useRef)(null);return(0,z.jsxs)("div",{ref:t,id:"viewer",className:"container",onTouchStart:n7,onTouchMove:n8,onTouchEnd:n9,onClick:re,onContextMenu:rn,onScroll:ri,onWheel:rr,onAnimationEnd:t=>{eK({type:"ANIMATION.END",ev:t}),t2.send({type:"STYLE.ANIMATION.END"})},children:[o.renderMap(),(0,z.jsx)("style",{children:rs}),(0,z.jsx)(rc,{}),(0,z.jsx)(rd,{}),(0,z.jsx)(ru,{})]})}n6.on("MULTI.START",()=>{n4=!0,eq({type:"TOUCH.LOCK"})}),n6.on("MULTI.END",()=>{eq({type:"TOUCH.UNLOCK"}),n4=!1}),n6.on("ZOOM",t=>{let{z:e,p:n}=t;eq({type:"ZOOM.ZOOM",z:e>0?1:-1,p:n})}),n6.start(),D.add(rt),L.add(rt),R.add(rt),N.add(rt),$.add(rt),b.add(rt);let rs=`
.container {
  ${P}
  ${J}

  scrollbar-width: thin;

  overflow: scroll;
  overscroll-behavior: none;
  touch-action: pan-x pan-y;

  will-change: scroll-position;
  contain: strict;
}
`;function rc(){let t=(0,Z.v9)(t2,t=>t.context.layout.content),e=`
.content {
  ${P}
  contain: strict;
  transform: ${t.toString()} translate3d(0, 0, 0);
  transform-origin: left top;
}
`;return(0,z.jsx)("style",{children:e})}function rd(){let t=(0,Z.v9)(t2,t=>t.context.animation),e=null===t?"":function(t){let{matrix:e,origin:n}=t,r=new DOMMatrixReadOnly;return`
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
    transform: ${e.toString()} translate3d(0px, 0px, 0px);
  }
}
`}(t);return(0,z.jsx)("style",{children:e})}function ru(){let{style:t}=tu();return null===t?(0,z.jsx)(z.Fragment,{}):(0,z.jsx)("style",{children:t})}function rg(){return null!==document.querySelector(".container")}let rh=(0,U.cY)({types:{context:{},events:{},emitted:{}}}).createMachine({id:"resize1",context:{prev:tM,next:tM,waited:0,first:!0},initial:"Uninited",states:{Uninited:{always:{target:"Waiting"}},Idle:{on:{RESIZE:{target:"Busy"}}},Busy:{after:{500:{actions:[(0,Y.a)({next:()=>({x:0,y:0,width:document.body.clientWidth,height:document.body.clientHeight})}),(0,F.r)({type:"EXPIRED"})]}},on:{EXPIRED:[{guard:t=>{let{context:e}=t;return e.waited>1e4},target:"Aborting"},{guard:t=>{let{context:{prev:e,next:n}}=t;return e.width===n.width&&.2>Math.abs(1-n.height/e.height)},actions:()=>console.log("resize: ignoring height-only change"),target:"Idle"},{guard:t=>{var e,n;let{context:r}=t;return e=r.prev,n=r.next,e.x!==n.x||e.y!==n.y||e.width!==n.width||e.height!==n.height},actions:[(0,Y.a)({prev:t=>{let{context:e}=t;return e.next},waited:0}),(0,tv.e)(t=>{var e;let{context:n}=t;return{type:"LAYOUT",layout:(e=o.origViewBox,function(t){let e=tz(t);return{config:t,...e}}(function(t,e,n){let[[r,i],o]=function(t,e){let n=t.width/t.height,r=e.width/e.height,[i,o]=n>r?[(t.width-t.height*r)/2,0]:[0,(t.height-t.width/r)/2];return[[i,o],n>r?e.height/t.height:e.width/t.width]}(n,e);return{fontSize:t,container:n,svgOffset:{x:-r,y:-i},svgScale:{s:o},svg:e}}(o.fontSize,e,n.next))),force:!n.first}}),(0,Y.a)({first:!1})],target:"Idle"},{target:"Waiting"}]}},Waiting:{always:{actions:[(0,Y.a)({waited:t=>{let{context:e}=t;return e.waited+500}})],target:"Busy"}},Aborting:{}}}),rx=(0,F.c)(rh);rx.on("LAYOUT",t=>{let{layout:e,force:n}=t;E.forEach(t=>t(e,n))}),rx.start(),window.addEventListener("resize",()=>{rx.send({type:"RESIZE"})});let rf=`
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
  ${P}
  ${J}
  ${B}
  ${V}
  ${tn}
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

${W}
`,rp=function(){var t;let e=(null==(t=o.cartoConfig)?void 0:t.backgroundColor)??"darkgray";return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(rl,{}),(0,z.jsx)(nq,{}),(0,z.jsxs)("style",{children:[rf,`body { background-color: ${e}; }`]})]})};function rm(){let t=(0,Z.v9)(t2,t=>t.context.rendered);(0,r.useEffect)(()=>{requestAnimationFrame(A)},[t]);let e=(0,Z.v9)(t2,t=>t.context.shown),n=(0,Z.v9)(t2,t=>t.context.appearing)?`
#viewer, #ui {
  will-change: opacity;
  animation: xxx-appearing 2s ${ta};
}
@keyframes xxx-appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`:"",i=(0,Z.v9)(t2,t=>t.context.layout.scroll),o=`
.content {
  width: ${tL(i.width)}px;
  height: ${tL(i.height)}px;
}
`;return(0,z.jsxs)("style",{children:[e?"":"#viewer, #ui { opacity: 0; }",n,o]})}var ry=n(966);let rv=n.p+"static/svg/map.ede56c9e.svg";document.title=`svgmapviewer @ ${window.location.host}`,!function(t){var e,n,i;let s={x:0,y:0,width:"number"==typeof t.width?t.width:0,height:"number"==typeof t.height?t.height:0};a({origViewBox:s,isContainerRendered:rg,isUiRendered:nX,...t}),a({...o});let d={...o,origViewBox:s,...t};td.start(),tS.start(),rx.start(),eU.start(),er.start(),t2.start(),n6.start(),eL.start(),eG.start(),l.add(ei),c.add(eo),t.getMapNames&&(e=t.getMapNames(),t9.trigger.set({names:e})),d.searchEntries.length>0&&(n=function(t,e){var n;let r=null==(n=o.cartoConfig)?void 0:n.skipNamePattern;return[...t.points.features.flatMap(t=>{let{properties:n}=t,i=et(n,e,r);return null===i?[]:[i]}),...t.multipolygons.features.flatMap(t=>{let{properties:n}=t,i=et(n,e,r);return null===i?[]:[i]})]}(d.mapData,d.searchEntries),ee.postMessage({type:"INIT",entries:n})),void 0!==d.floorsConfig&&(i=d.floorsConfig.fidx,td.send({type:"SELECT",fidx:i,force:!0}));let u=document.getElementById(d.root);if(null===u)throw Error("#root not found!");u.onwheel=function(t){var e;let n=u.children[0];t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui"||(null!==n&&n.clientWidth===n.scrollWidth||e_)&&t.preventDefault()},u.oncontextmenu=function(t){t.preventDefault()},u.ontouchmove=function(t){if(e_){var e;if(t.target instanceof HTMLDivElement&&(null==(e=t.target)?void 0:e.id)==="ui")return;t.preventDefault()}else if(!n4)return;t.preventDefault()},document.title=d.title,document.body.onkeydown=ro,document.body.onkeyup=ra,(0,ea.createRoot)(u).render((0,z.jsx)(r.StrictMode,{children:(0,z.jsx)(rp,{})}));let g=document.getElementById("style-root");if(null===g)throw Error("#style-root not found!");(0,ea.createRoot)(g).render((0,z.jsx)(r.StrictMode,{children:(0,z.jsx)(rm,{})}))}({title:"Shikine-Jima",renderMap:function(){let{viewBox:t,width:e,height:n}=function(){let{scroll:t,svg:e}=(0,Z.v9)(t2,t=>t.context.layout);return{viewBox:tD(e),width:tL(t.width),height:tL(t.height)}}();return(0,ry.jsx)("svg",{viewBox:t,width:e,height:n,children:(0,ry.jsx)("image",{href:rv,x:"0",y:"0",width:"1280",height:"800"})})},isMapRendered:()=>!0,origViewBox:{x:0,y:0,width:1280,height:800}})}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.u=t=>"static/js/async/"+t+".eceb5ed5.js",n.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}})(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=[];n.O=(e,r,i,o)=>{if(r){o=o||0;for(var a=t.length;a>0&&t[a-1][2]>o;a--)t[a]=t[a-1];t[a]=[r,i,o];return}for(var l=1/0,a=0;a<t.length;a++){for(var[r,i,o]=t[a],s=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every(t=>n.O[t](r[c]))?r.splice(c--,1):(s=!1,o<l&&(l=o));if(s){t.splice(a--,1);var d=i();void 0!==d&&(e=d)}}return e}})(),n.p="/",(()=>{n.b=document.baseURI||self.location.href;var t={980:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var i,o,[a,l,s]=r,c=0;if(a.some(e=>0!==t[e])){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var d=s(n)}for(e&&e(r);c<a.length;c++)o=a[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var r=n.O(void 0,["361","825","984"],function(){return n(609)});r=n.O(r)})();