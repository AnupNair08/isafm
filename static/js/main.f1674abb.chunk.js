(this.webpackJsonpisafm=this.webpackJsonpisafm||[]).push([[0],{91:function(t,e,n){},92:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),i=n.n(r),s=n(54),o=n(16),u=n.n(o),l=n(27),j=n(17),f=n(13),b=n(135),h=n(141),d=n(136),p=n(137),O=n(142),x=n(143),m=n(127),v=n(138),g=n(5),y=function(t){var e=t.values,n=t.selectedValue,c=t.onSelect,a=t.classes,r=t.prefix;return Object(g.jsxs)(m.a,{variant:"outlined",className:a.formControl,children:[Object(g.jsx)(O.a,{id:"".concat(r,"-input-label"),className:"input-label",children:r}),Object(g.jsx)(v.a,{labelId:"".concat(r,"-input-label"),id:"".concat(r,"-input-select"),value:n,onChange:c,label:r,autoWidth:!0,children:e.map((function(t){var e=t.id,n=t.name;return Object(g.jsx)(x.a,{value:e,children:n},"prefix-".concat(e))}))})]})},w=n(140),S=n(134),k=n(63),_=n.n(k),C=n(61),D=n.n(C),E=n(62),N=n.n(E),z=D()(),Y=function(t){var e=t.district,n=t.age,a=Object(c.useState)(!1),r=Object(j.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)(0),f=Object(j.a)(o,2),b=f[0],h=f[1],d=Object(c.useState)(!1),p=Object(j.a)(d,2),O=p[0],x=p[1];return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(+n<18)){t.next=3;break}return h(0),t.abrupt("return");case 3:s(!0),c=z.format("DD-MM-YYYY"),a="".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?","district_id=").concat(e,"&date=").concat(c),fetch(a).then((function(t){return t.json()})).then((function(t){return t.centers.map((function(t){return t.sessions}))})).then((function(t){return N()(t)})).then((function(t){return t.map((function(t){return{capacity:t.available_capacity,min_age:t.min_age_limit}}))})).then((function(t){return t.filter((function(t){return t.capacity>0&&t.min_age<=+n}))})).then((function(t){return t.reduce((function(t,e){return t+e.capacity}),0)})).then((function(t){h(t),s(!1)}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,n]),Object(g.jsxs)(g.Fragment,{children:[i?"Loading":Object(g.jsxs)("div",{className:"flex",style:{flexDirection:"column",alignItems:"center"},children:[Object(g.jsxs)("h1",{align:"center",children:["There are ",b," slots in the next 7 days!"," ",0===b?"\ud83d\ude14":"\ud83d\ude80"]}),Object(g.jsxs)("span",{children:["Want to check back again later?"," ",Object(g.jsx)("u",{onClick:function(){navigator.clipboard.writeText(window.location.href).then((function(){return x(!0)}),(function(){return alert("error copying")}))},style:{cursor:"pointer"},children:"Copy the URL!"})]})]}),Object(g.jsx)(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:O,autoHideDuration:2e3,onClose:function(){return x(!1)},message:"Copied to clipboard",action:Object(g.jsx)(S.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return x(!1)},children:Object(g.jsx)(_.a,{fontSize:"small"})})})]})},F=function(){return Object(g.jsx)("footer",{style:{position:"fixed",left:"0px",bottom:"25px",width:"100%",fontSize:"1.2em",color:"grey",textAlign:"center"},children:Object(g.jsxs)("div",{className:"container",children:["By"," ",Object(g.jsx)("a",{href:"https://yashshah1.github.io",target:"_blank",children:"Yash Shah"})]})})},I=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(t){return t.json()})).then((function(t){return t.states})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(e)).then((function(t){return t.json()})).then((function(t){return t.districts})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(t){var e={};return t.length<=1?{state:"21",district:"363",age:"21"}:(t.slice(1).split("&").forEach((function(t){if(0!==t.trim().length){var n=t.split("="),c=Object(j.a)(n,2),a=c[0],r=c[1];r.trim().length>0&&(e[a]=r)}})),e)},M=Object(b.a)((function(t){return{formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(2)}}}));var T=Object(f.f)((function(){var t=Object(c.useState)(!0),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),s=i[0],o=i[1],b=Object(c.useState)(""),O=Object(j.a)(b,2),x=O[0],m=O[1],v=Object(c.useState)([]),w=Object(j.a)(v,2),S=w[0],k=w[1],_=Object(c.useState)(""),C=Object(j.a)(_,2),D=C[0],E=C[1],N=Object(c.useState)(""),z=Object(j.a)(N,2),T=z[0],V=z[1],A=M(),J=Object(f.d)(),L=Object(f.e)().search;Object(c.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:e=t.sent,o(e.map((function(t){return{id:t.state_id,name:t.state_name}}))),a(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){var t=B(L),e=t.state,n=t.district,c=t.age;e&&m(e),n&&E(n),V(c||"")}),[L]),Object(c.useEffect)((function(){a(!0),function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(x);case 2:e=t.sent,k(e.map((function(t){return{id:t.district_id,name:t.district_name}}))),a(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[x]);var H=function(t){return function(e){var n=B(L),c=e.target.value;"age"===t&&(c=c.replace(/\D/g,"")),n[t]=c.toString();var a,r=(a=n,Object.entries(a).map((function(t){var e=Object(j.a)(t,2),n=e[0],c=e[1];return c.trim().length>0?"".concat(n,"=").concat(c):""})).join("&"));J.push("?".concat(r))}};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(d.a,{maxWidth:"sm",children:[Object(g.jsx)("h1",{align:"center",children:"Is a slot available for me?"}),Object(g.jsx)("h3",{align:"center",children:"For people who are too lazy to login"}),Object(g.jsx)("br",{}),n?Object(g.jsx)("div",{className:"flex justify-center",children:Object(g.jsx)(p.a,{})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"flex justify-center",children:[Object(g.jsx)(y,{values:s,selectedValue:x,classes:A,onSelect:H("state"),prefix:"state"}),Object(g.jsx)(y,{values:S,selectedValue:D,classes:A,onSelect:H("district"),prefix:"district"})]}),Object(g.jsx)("br",{}),""!==D&&Object(g.jsx)("div",{className:"flex",style:{flexDirection:"column"},children:Object(g.jsx)(h.a,{id:"outlined-basic",label:"Age",variant:"outlined",width:"sm",value:T,onChange:H("age")})})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),""!==D&&""!==T&&Object(g.jsx)(Y,{district:D,age:T})]}),Object(g.jsx)(F,{})]})}));n(91);i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(s.a,{children:Object(g.jsx)(T,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.f1674abb.chunk.js.map