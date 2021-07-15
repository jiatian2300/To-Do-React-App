(this["webpackJsonpto-do-react"]=this["webpackJsonpto-do-react"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(4),i=c.n(o),a=(c(16),c(2)),r=(c(17),c(3)),l=c.p+"static/media/icon-check.a8fb15d0.svg",d=c(1),j=function(e){var t=e.text,c=e.todo,n=e.todos,s=e.setTodos,o=e.provided,i=e.snapshot;return Object(d.jsxs)("div",Object(r.a)(Object(r.a)(Object(r.a)({className:"todo row ".concat(c.completed?"completed":""," ").concat(i.isDragging&&"dragging")},o.draggableProps),o.dragHandleProps),{},{ref:o.innerRef,children:[Object(d.jsx)("div",{className:"check_box ".concat(c.completed?"":"check_style"),onClick:function(){s(n.map((function(e){return e.id===c.id?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e})))},children:Object(d.jsx)("img",{src:l,alt:""})}),Object(d.jsx)("p",{children:t}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",onClick:function(){s(n.filter((function(e){return e.id!==c.id})))},children:Object(d.jsx)("path",{fill:"#494C6B",fillRule:"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"})})]}))},b=c(7),u=function(e){var t=e.todos,c=e.setTodos,s=e.setFilter,o=e.filteredTodos,i=Object(n.useState)(0),l=Object(a.a)(i,2),u=l[0],h=l[1],O=Object(n.useState)([!0,!1,!1]),f=Object(a.a)(O,2),g=f[0],m=f[1];function p(){c(t.filter((function(e){return!1===e.completed})))}return Object(n.useEffect)((function(){h(t.length)}),[t.length]),Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{onDragEnd:function(e){if(e.destination){var n=Array.from(t),s=n.splice(e.source.index,1),o=Object(a.a)(s,1)[0];n.splice(e.destination.index,0,o),c(n)}},children:Object(d.jsx)(b.c,{droppableId:"List",children:function(e){return Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:" todo-list"},e.droppableProps),{},{ref:e.innerRef,children:[o.map((function(e,n){return Object(d.jsx)(b.b,{draggableId:e.id,index:n,children:function(n,s){return Object(d.jsx)(j,{provided:n,snapshot:s,text:e.text,todo:e,todos:t,setTodos:c},e.id)}},e.id)})),e.placeholder,Object(d.jsxs)("div",{className:"details row",children:[Object(d.jsxs)("p",{children:[u," items left"]}),Object(d.jsx)("p",{className:"clear",onClick:p,children:"Clear Completed"})]})]}))}})}),Object(d.jsxs)("div",{className:"filters",onClick:function(e){switch(s(e.target.innerHTML),e.target.innerHTML){case"Active":m([!1,!0,!1]);break;case"Completed":m([!1,!1,!0]);break;default:m([!0,!1,!1])}},children:[Object(d.jsx)("h2",{className:"".concat(g[0]?"active_filter":""),children:"All"}),Object(d.jsx)("h2",{className:"".concat(g[1]?"active_filter":""),children:"Active"}),Object(d.jsx)("h2",{className:"".concat(g[2]?"active_filter":""),children:"Completed"})]})]})},h=c(11),O=c(25),f=function(e){var t=e.changeTheme,c=e.inputText,n=e.setInputText,s=e.todos,o=e.setTodos;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"TODO"}),Object(d.jsx)("div",{className:"theme_toggle",onClick:t})]}),Object(d.jsxs)("form",{className:"input row",children:[Object(d.jsx)("div",{className:"check_box"}),Object(d.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)},placeholder:"Create a new todo...",value:c}),Object(d.jsx)("input",{type:"submit",onClick:function(e){e.preventDefault(),o([].concat(Object(h.a)(s),[{text:c,completed:!1,id:Object(O.a)()}])),n("")},hidden:!0})]})]})};var g=function(){var e=Object(n.useState)("light"),t=Object(a.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)(""),i=Object(a.a)(o,2),r=i[0],l=i[1],j=Object(n.useState)([]),b=Object(a.a)(j,2),h=b[0],O=b[1],g=Object(n.useState)([]),m=Object(a.a)(g,2),p=m[0],x=m[1],v=Object(n.useState)("All"),S=Object(a.a)(v,2),N=S[0],T=S[1];return Object(n.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));O(e)}null===localStorage.getItem("theme")?localStorage.setItem("theme","light"):s(localStorage.getItem("theme"))}()}),[]),Object(n.useEffect)((function(){!function(){switch(N){case"Completed":x(h.filter((function(e){return!0===e.completed})));break;case"Active":x(h.filter((function(e){return!1===e.completed})));break;default:x(h)}}(),localStorage.setItem("todos",JSON.stringify(h)),localStorage.setItem("theme",c)}),[h,N,c]),Object(d.jsxs)("div",{className:"App ".concat(c),id:"bg",children:[Object(d.jsx)("div",{className:"hero_img"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(f,{changeTheme:function(){s("light"===c?"dark":"light")},todos:h,setTodos:O,inputText:r,setInputText:l}),Object(d.jsx)(u,{todos:h,setTodos:O,setFilter:T,filteredTodos:p}),Object(d.jsx)("p",{className:"drag",children:"Drag and drop to reorder list"})]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),m()}},[[23,1,2]]]);
//# sourceMappingURL=main.80cbb74a.chunk.js.map