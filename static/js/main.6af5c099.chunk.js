(this["webpackJsonpcluster-map-react-typescript"]=this["webpackJsonpcluster-map-react-typescript"]||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(4),c=n.n(r),a=(n(23),n(17)),i=n(3),s=n(15),u=n(16),l=n(11),d=n.n(l),p=n(13),m=function(){var e=Object(p.a)(d.a.mark((function e(t,n){var o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return o=e.sent,e.abrupt("return",o.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=n(2),h=function(e){var t=e.title,n=e.id,o=e.zoomToPoint,r=e.setSeen,c=e.seen;return Object(f.jsxs)("div",{className:"my-1 bg-blue-200 flex justify-between px-10",role:"listitem",children:[Object(f.jsx)("h3",{className:"hover:underline cursor-pointer",onClick:o,children:t}),Object(f.jsx)("img",{onClick:r,src:"/seen.svg",width:30,height:30,alt:"product-card-button-".concat(n),className:"".concat(c?"opacity-40":"opacity-100"," cursor-pointer"),role:"button"})]})},j=function(e){var t=e.selectedMarkerProducts,n=e.zoomToPoint,o=e.setSeen,r=e.seen,c=e.turnSeen,a=e.setTurnSeen;return Object(f.jsxs)("div",{className:"flex flex-col flex-1 overflow-auto h-[50vh] max-h-[50vh] md:min-h-[100vh]",children:[Object(f.jsxs)("button",{type:"button",onClick:function(){return a()},className:"w-100 justify-center bg-yellow-600 rounded-full",children:["Seen ",c?"OFF":"ON"," the map"]}),Object(f.jsx)("div",{className:"flex flex-col",role:"list",children:!!t&&t.map((function(e){return Object(f.jsx)(h,{id:e.id,title:e.title,zoomToPoint:function(){return n(e)},setSeen:function(){return o(e)},seen:r.includes(e.id)},e.id)}))})]})},b=n(18),g=function(e){var t=e.children;e.key,e.lat,e.lng;return t},v=function(e){var t=e.mapRef,n=e.center,o=e.zoom,r=e.clusters,c=e.seen,a=e.mapChangeEvent,s=e.setZoomAndListFeatureHandler,u=e.setSelectedMarkerProducts,l=e.pointsLength;return Object(f.jsx)("div",{className:"flex flex-1 h-[50vh] min-h-[50vh] md:min-h-[100vh]",style:{width:"100%"},children:Object(f.jsx)(b.a,{bootstrapURLKeys:{key:"AIzaSyBLZ2D9NHQfbshkStdomOXVNCPboEfg6UE"},defaultCenter:{lat:51.7876,lng:-3.757171},defaultZoom:7,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var n=e.map;t.current=n},center:n,onChange:function(e){var t=e.zoom,n=e.bounds,o=e.center;return a(t,n,o)},zoom:o,children:r.map((function(e){var t=Object(i.a)(e.geometry.coordinates,2),n=t[0],o=t[1],r=e.properties,a=r.cluster,d=r.point_count;return a?Object(f.jsx)(g,{lat:o,lng:n,children:Object(f.jsx)("div",{className:"flex bg-red-700 rounded-full items-center justify-center",style:{width:"".concat(10+d/l*70,"px"),height:"".concat(10+d/l*70,"px")},onClick:function(){return s(e)},id:"cluster-".concat(e.id),children:d})},"cluster-".concat(e.id)):Object(f.jsx)(g,{lat:o,lng:n,children:Object(f.jsx)("button",{className:"".concat(c.includes(e.properties.markerId)?"opacity-40":"opacity-100"),onClick:function(){return u({latitude:o,longitude:n})},children:Object(f.jsx)("img",{src:"product"===e.type?"/hang-clothes.svg":"/diet.svg",width:30,height:30,alt:"point-".concat(e.properties.markerId)})})},"place-".concat(e.properties.markerId))}))})})};var O=function(){var e=Object(o.useRef)(),t=Object(o.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object(o.useState)(10),d=Object(i.a)(l,2),p=d[0],h=d[1],b=Object(o.useState)(),g=Object(i.a)(b,2),O=g[0],x=g[1],y=Object(o.useState)([]),w=Object(i.a)(y,2),k=w[0],S=w[1],N=Object(o.useState)([]),I=Object(i.a)(N,2),z=I[0],C=I[1],P=Object(o.useState)(!0),L=Object(i.a)(P,2),F=L[0],T=L[1],E=Object(s.a)("https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json",{fetcher:m}),Z=E.data,A=E.error,M=E.isValidating;Object(o.useEffect)((function(){S(Z)}),[Z]);var R=Z&&!A?Z:[],B=function(e,t,n){return e.map((function(e){return t?!n.includes(e.id)&&{type:e.section,properties:{cluster:!1,markerId:e.id,userId:e.user.id,category:e.status,product:e},geometry:{type:"Point",coordinates:[parseFloat(e.location.longitude),parseFloat(e.location.latitude)]}}:{type:e.section,properties:{cluster:!1,markerId:e.id,userId:e.user.id,category:e.status,product:e},geometry:{type:"Point",coordinates:[parseFloat(e.location.longitude),parseFloat(e.location.latitude)]}}}))}(R,F,z),G=Object(u.a)({points:B,bounds:r,zoom:p,options:{radius:100,maxZoom:22}}),H=G.clusters,U=G.supercluster;return M?Object(f.jsx)("h1",{children:"LOADING"}):Object(f.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(f.jsx)(j,{seen:z,selectedMarkerProducts:k,setSeen:function(e){return C((function(t){return t.includes(e.id)?t.filter((function(t){return t!==e.id})):[].concat(Object(a.a)(t),[e.id])}))},zoomToPoint:function(e){x({lat:e.location.latitude,lng:e.location.longitude}),h(20)},setTurnSeen:function(){return T((function(e){return!e}))},turnSeen:F}),Object(f.jsx)(v,{pointsLength:B.length,center:O,clusters:H,mapRef:e,seen:z,setZoomAndListFeatureHandler:function(t){var n=Object(i.a)(t.geometry.coordinates,2),o=n[0],r=n[1],c=Math.min(U.getClusterExpansionZoom(t.id),20);e.current.setZoom(c),e.current.panTo({lat:r,lng:o});var a=U.getLeaves(t.id,1/0,0).map((function(e){return e.properties.product}));S(a)},mapChangeEvent:function(e,t,n){x(n),h(e),c([t.nw.lng,t.se.lat,t.se.lng,t.nw.lat])},zoom:p,setSelectedMarkerProducts:function(e){var t=e.latitude,n=e.longitude;S(R.filter((function(e){return e.location.latitude===t&&e.location.longitude===n})))}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(28).config(),c.a.render(Object(f.jsx)(O,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6af5c099.chunk.js.map