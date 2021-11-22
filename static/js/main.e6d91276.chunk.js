(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=(c(15),c(10)),i=c(3),r=c(1),o=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.Plot,Object(o.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(l,{movie:e},e.imdbID)}))})},d=c(2),u=c.n(d),b=c(6),m=c(9),h=c.n(m),v=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a2b58a28","https://www.omdbapi.com/?apikey=",e.next=4,fetch("".concat("https://www.omdbapi.com/?apikey=").concat("a2b58a28","&t=").concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:if(n=e.sent,c.ok){e.next=10;break}throw new Error("Error with request");case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(c(21),function(e){var t=e.addMovie,c=Object(r.useState)(!1),n=Object(i.a)(c,2),s=n[0],a=n[1],j=Object(r.useState)(""),d=Object(i.a)(j,2),m=d[0],O=d[1],x=Object(r.useState)(null),f=Object(i.a)(x,2),p=f[0],N=f[1],g=function(){var e=Object(b.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v(m);case 3:if(!(c=e.sent).Error){e.next=7;break}return a(!0),e.abrupt("return");case 7:N(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{onSubmit:function(e){return g(e)},className:"find-movie",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",autoComplete:"off",className:h()("input",{"is-danger":s}),value:m,onChange:function(e){return(t=e.target.value)!==m&&a(!1),void O(t);var t}})}),s&&Object(o.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:"button is-light",children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){p&&(t(p),O(""),N(null))},children:"Add to the list"})})]})]}),Object(o.jsx)("div",{className:"container",children:p&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(l,{movie:p})]})})]})}),x=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(j,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(O,{addMovie:function(e){c.find((function(t){return t.imdbID===e.imdbID}))||n((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e6d91276.chunk.js.map