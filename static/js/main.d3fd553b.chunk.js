(this.webpackJsonpsearch=this.webpackJsonpsearch||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),r=n.n(s),u=(n(12),n(2)),o=n(5),i=(n(13),n(14),n(15),n(0)),l=function(e){var t=e.name,n=e.nick,a=e.avatar,c=e.onClick;return Object(i.jsxs)("div",{className:"User",onClick:function(e){c&&c(e,t)},children:[Object(i.jsx)("div",{className:"User__avatar",children:Object(i.jsx)("img",{className:"User__img",src:a,alt:"User avatar"})}),Object(i.jsxs)("div",{className:"User__info",children:[Object(i.jsx)("p",{className:"User__name",children:t}),Object(i.jsx)("p",{className:"User__nick",children:n})]})]})},f=function(e){var t=e.errorMessage,n=e.inputValue,a=e.setInputValue,c=e.willClear,s=e.setWillClear,r=e.users,u=e.isSent,o=e.isLoad,f=function(e,t){e.preventDefault(),a&&a(t),s&&s(!0)},h=o&&r&&r.map((function(e){return function(e,t){for(var n=!1,a=0;a<e.length;a++)if(e[a].toLowerCase().includes(t.toLowerCase())){n=!0;break}return n}([e.username,e.name],n)?Object(i.jsx)(l,{onClick:f,name:e.name,nick:"@"+e.username,avatar:e.photo},e.id):null})),m="".concat(t);return Object(i.jsxs)("div",{className:u?"Results Results__preloader":"Results",children:[o&&!c&&!t&&h,!!t&&Object(i.jsx)("p",{className:"Results__error",children:m})]})},h=(n(17),n.p+"static/media/search.273f4b09.svg"),m=function(e){var t=e.setIsSent,n=e.setIsLoad,a=e.setWillClear,c=e.setInputValue,s=e.inputValue;return Object(i.jsxs)("form",{className:"Bar",onSubmit:function(e){e.preventDefault()},children:[Object(i.jsx)("button",{type:"submit",className:"Bar__submit",children:Object(i.jsx)("img",{className:"Bar__icon",src:h,alt:"search icon"})}),Object(i.jsx)("input",{value:s,autoComplete:"off",onFocus:function(){t&&t(!0),n&&n(!1),a&&a(!1)},onInput:function(e){!function(e){var s=e.currentTarget.value;t&&t(!0),n&&n(!1),a&&a(!1),c&&c(s)}(e)},name:"text",type:"text",className:"Bar__input",placeholder:"Search"})]})},j=n(6),d=n(7),p=function(){function e(t){Object(j.a)(this,e),this.url=t.url,this.key=t.key}return Object(d.a)(e,[{key:"getLastNews",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date;new Date(Date.parse(n)-864e5*t),new Date(Date.parse(n)-864e5*e);return fetch("".concat(this.url,"top-headlines?country=ru&pageSize=10&apiKey=").concat(this.key)).then((function(e){return e.ok?e.json():Promise.reject(console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"getNews",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=new Date,c=new Date(Date.parse(a)-864e5*n),s=new Date(Date.parse(a)-864e5*t);return fetch("".concat(this.url,"everything?q=").concat(e,"&from=").concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate(),"&to=").concat(s.getFullYear(),"-").concat(s.getMonth()+1,"-").concat(s.getDate(),"&sortBy=publishedAt&pageSize=100&apiKey=").concat(this.key)).then((function(e){return e.ok?e.json():Promise.reject(console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}}]),e}(),b=function(e){Object(o.a)(e);var t=c.a.useState(!1),n=Object(u.a)(t,2),a=n[0],s=n[1],r=c.a.useState(!1),l=Object(u.a)(r,2),h=l[0],j=l[1],d=c.a.useState([]),b=Object(u.a)(d,2),v=b[0],g=b[1],O=c.a.useState(!1),x=Object(u.a)(O,2),k=x[0],_=x[1],w=c.a.useState(""),N=Object(u.a)(w,2),S=N[0],y=N[1],C=c.a.useState(""),D=Object(u.a)(C,2),I=D[0],L=D[1],T=new p({url:"https://nomoreparties.co/news/v2/",key:"2356832b0876432c8814987efd07620a"});return c.a.useEffect((function(){var e=function(e){e.target instanceof HTMLElement&&!e.target.closest(".Search")&&_(!0)};return document.body.addEventListener("click",(function(t){return e(t)})),function(){return document.body.removeEventListener("click",(function(t){return e(t)}))}}),[]),c.a.useEffect((function(){a&&(""===S?T.getLastNews().then((function(e){var t=e.articles.map((function(e,t){return{id:t,name:e.title,username:e.source.name,photo:e.urlToImage}}));return g(t),t})).then((function(e){setTimeout((function(){s(!1),j(!0)}),100)})).catch((function(e){return L(e)})):T.getNews(S).then((function(e){var t=e.articles.map((function(e,t){return{id:t,name:e.title,username:e.source.name,photo:e.urlToImage}}));return g(t),t})).then((function(e){setTimeout((function(){s(!1),j(!0)}),100)})).catch((function(e){return L(e)})))}),[a]),Object(i.jsxs)("div",{className:"Search",children:[Object(i.jsx)(m,{setIsSent:s,setIsLoad:j,setWillClear:_,setInputValue:y,inputValue:S}),Object(i.jsx)(f,{errorMessage:I,inputValue:S,setInputValue:y,willClear:k,setWillClear:_,users:v,isSent:a,isLoad:h})]})},v=(n(18),function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(b,{})})}),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),g()}],[[19,1,2]]]);
//# sourceMappingURL=main.d3fd553b.chunk.js.map