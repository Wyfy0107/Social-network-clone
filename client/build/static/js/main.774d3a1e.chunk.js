(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){e.exports=n(56)},32:function(e,t,n){},33:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(25),c=n.n(r),o=(n(32),n(9)),u=(n(33),n(1)),i=n(10),s=n.n(i);var m=function(e){var t=e.setAuth,n=Object(a.useState)(null),r=Object(o.a)(n,2),c=r[0],u=r[1],i=Object(a.useState)(null),m=Object(o.a)(i,2),p=m[0],E=m[1];return l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"email",onChange:function(e){return u(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"password",placeholder:"password",onChange:function(e){return E(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){if(!c&&!p)return alert("please fill in email and password");s.a.post("/login",{email:c,password:p}).then((function(e){console.log(e.data),"success"===e.data&&t(!0)})).catch((function(e){return console.log(e)}))}},"Login"))};var p=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Profile page"),l.a.createElement("button",{onClick:function(){s.a.post("/logout").then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"Log out"))};var E=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/"},n?l.a.createElement(u.a,{to:"/profile"}):l.a.createElement(m,{setAuth:r})),l.a.createElement(u.b,{path:"/profile"},n?l.a.createElement(p,null):l.a.createElement(u.a,{to:"/"}))))},f=n(12);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f.a,null,l.a.createElement(E,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.774d3a1e.chunk.js.map