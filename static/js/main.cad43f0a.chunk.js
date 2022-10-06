(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(5),a=(n(18),n(19),n(1)),r=n(2),i=(n(20),n(6)),j=n.n(i),o=n(0),l=function(e){var t=e.to,n=e.textLink;return Object(o.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:n})},b=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(l,{to:"/",textLink:"Home"}),Object(o.jsx)(l,{to:"people",textLink:"People"})]})})})},d=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},h=n(4);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(22);var O=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.person,n=e.name,c=n||"-";return Object(o.jsx)("td",{children:void 0===t?c:Object(o.jsx)(s.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:c})})},p=function(e){var t=e.people,n=e.selectedPerson,c=e.isLoader,s=e.messageError,a=e.isError,r=function(e){return e.slug===n},i=function(e){return t.find((function(t){return t.name===e}))};return Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[c&&Object(o.jsx)(O,{}),""!==s&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:s}),!a&&(null===t||void 0===t?void 0:t.length)>0&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.length>0&&t.map((function(e){var t=e.name,n=e.sex,c=e.born,s=e.died,a=e.fatherName,l=e.motherName,b=e.slug;return Object(o.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":r(e)}),children:[Object(o.jsx)(u,{name:t,person:i(t)}),Object(o.jsx)("td",{children:n}),Object(o.jsx)("td",{children:c}),Object(o.jsx)("td",{children:s}),Object(o.jsx)(u,{name:l,person:i(l)}),Object(o.jsx)(u,{name:a,person:i(a)})]},b)}))})]}),!a&&0===t.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})},m=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(h.a)(s,2),j=i[0],l=i[1],b=Object(a.useState)(!0),d=Object(h.a)(b,2),O=d[0],u=d[1],m=Object(a.useState)(""),f=Object(h.a)(m,2),v=f[0],g=f[1],N=Object(r.h)().slug,y=void 0===N?"":N;return Object(a.useEffect)((function(){u(!0),x().then((function(e){c(e),u(!1),g("")})).catch((function(){g("Something went wrong")})).finally((function(){l(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)(p,{people:n,selectedPerson:y,isLoader:j,messageError:v,isError:O})]})},f=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})}),Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(d,{})}),Object(o.jsx)(r.b,{path:"home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(m,{})}),Object(o.jsx)(r.b,{path:":slug",element:Object(o.jsx)(m,{})})]})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(s.a,{children:Object(o.jsx)(f,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.cad43f0a.chunk.js.map