(this["webpackJsonpthe-phonebook"]=this["webpackJsonpthe-phonebook"]||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(16),u=t.n(a),o=t(4),i=t(3),s=t.n(i),l="api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},j=function(e){return s.a.post(l,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},m=t(0),f=function(e){var n=e.onChange;return Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Filter shown with:",Object(m.jsx)("input",{name:"Filter shown with",onChange:n})]})})},O=function(e){var n=e.onSubmit,t=e.onNameChange,c=e.onNumberChange,r=e.nameValue,a=e.numberValue;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Name:",Object(m.jsx)("input",{name:"name",value:r,onChange:t})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Number:",Object(m.jsx)("input",{name:"number",type:"number",value:a,onChange:c})]})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.nameFilter,t=e.persons,c=e.deleteContact;return Object(m.jsx)("ul",{children:""===n?t.map((function(e,n){return Object(m.jsxs)("li",{children:[e.name," ",e.number,Object(m.jsx)("button",{onClick:function(){return c(e.id,e.name)},children:"delete"})]},n)})):t.filter((function(e){return e.name.toUpperCase().includes(n.toUpperCase())})).map((function(e,n){return Object(m.jsxs)("li",{children:[e.name," ",e.number,Object(m.jsx)("button",{onClick:function(){return c(e.id,e.name)},children:"delete"})]},n)}))})},x=function(e){var n=e.message;return null===n?null:n.includes("server")||n.includes("removed")?Object(m.jsx)("div",{className:"error",children:n}):Object(m.jsx)("div",{className:"sucess",children:n})},v=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),u=Object(o.a)(a,2),i=u[0],s=u[1],l=Object(c.useState)(""),v=Object(o.a)(l,2),g=v[0],C=v[1],w=Object(c.useState)(""),N=Object(o.a)(w,2),S=N[0],k=N[1],y=Object(c.useState)(null),F=Object(o.a)(y,2),T=F[0],U=F[1];Object(c.useEffect)((function(){d().then((function(e){r(e)}))}),[t]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(x,{message:T}),Object(m.jsx)(f,{onChange:function(e){return k(e.target.value)}}),Object(m.jsx)("h3",{children:"Add a New"}),Object(m.jsx)(O,{onSubmit:function(e){e.preventDefault();var n={name:i,number:g},c=t.filter((function(e){return e.name.toUpperCase()===n.name.toUpperCase()}));1===c.length?(window.confirm("".concat(c[0].name," is already added to phonebook, replace the old number with a new one?")),h(c[0].id,n).then((function(e){r(t.map((function(n){return n.id!==c[0].id?n:e}))),U("".concat(n.name," contact was updated")),setTimeout((function(){U(null)}),3e3)})).catch((function(e){U("Information of ".concat(c[0].name," has been removed from server")),setTimeout((function(){U(null)}),3e3),r(t.filter((function(e){return e.id!==c[0].id})))}))):j(n).then((function(e){r(t.concat(e)),s(""),C(""),U("Added ".concat(n.name)),setTimeout((function(){U(null)}),3e3)}))},onNameChange:function(e){return s(e.target.value)},onNumberChange:function(e){return C(e.target.value)},nameValue:i,numberValue:g}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(p,{nameFilter:S,persons:t,deleteContact:function(e,n){window.confirm("delete ".concat(n," contact?"))&&b(e).then((function(n){console.log(n),r(t.filter((function(n){return n.id!==e})))})).catch((function(c){U("".concat(n," was already removed")),r(t.filter((function(n){return n.id!==e}))),setTimeout((function(){U(null)}),3e3)}))}})]})};t(40);u.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.406673b0.chunk.js.map