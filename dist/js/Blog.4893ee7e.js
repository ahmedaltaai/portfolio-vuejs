(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Blog"],{"3d68":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[t.$apollo.loading?n("LoadingComponent"):n("div",{staticClass:"publications__container"},t._l(t.user.publication.posts,(function(e){return n("section",{key:e.cuid,staticClass:"card"},[n("a",{attrs:{href:"https://ahmeds.tech/"+e.slug}},[n("div",{staticClass:"cover-image"},[n("img",{attrs:{src:e.coverImage}})]),n("div",{staticClass:"text"},[n("div",{staticClass:"title"},[n("h3",[t._v(t._s(e.title))])]),n("div",{staticClass:"description"},[n("p",[t._v(t._s(e.brief))])])])])])})),0)],1)},i=[];n("fb6a"),n("dca8");function a(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var c=n("9530"),o=n.n(c),s=n("45d0");function f(){var t=a(['\n      query {\n        user(username: "catalinpit") {\n          publication {\n            posts {\n              coverImage\n              title\n              brief\n              slug\n              cuid\n            }\n          }\n        }\n      }\n    ']);return f=function(){return t},t}var u={name:"blog",components:{LoadingComponent:s["a"]},apollo:{user:o()(f())}},l=u,d=(n("f12f"),n("2877")),b=Object(d["a"])(l,r,i,!1,null,"9022b94c",null);e["default"]=b.exports},"3f07":function(t,e,n){},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},dca8:function(t,e,n){var r=n("23e7"),i=n("bb2f"),a=n("d039"),c=n("861d"),o=n("f183").onFreeze,s=Object.freeze,f=a((function(){s(1)}));r({target:"Object",stat:!0,forced:f,sham:!i},{freeze:function(t){return s&&c(t)?s(o(t)):t}})},f12f:function(t,e,n){"use strict";var r=n("3f07"),i=n.n(r);i.a},f183:function(t,e,n){var r=n("d012"),i=n("861d"),a=n("5135"),c=n("9bf2").f,o=n("90e3"),s=n("bb2f"),f=o("meta"),u=0,l=Object.isExtensible||function(){return!0},d=function(t){c(t,f,{value:{objectID:"O"+ ++u,weakData:{}}})},b=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,f)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[f].objectID},p=function(t,e){if(!a(t,f)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[f].weakData},v=function(t){return s&&g.REQUIRED&&l(t)&&!a(t,f)&&d(t),t},g=t.exports={REQUIRED:!1,fastKey:b,getWeakData:p,onFreeze:v};r[f]=!0},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),a=n("e8b5"),c=n("23cb"),o=n("50c4"),s=n("fc6a"),f=n("8418"),u=n("b622"),l=n("1dde"),d=n("ae40"),b=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!b||!p},{slice:function(t,e){var n,r,u,l=s(this),d=o(l.length),b=c(t,d),p=c(void 0===e?d:e,d);if(a(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(l,b,p);for(r=new(void 0===n?Array:n)(m(p-b,0)),u=0;b<p;b++,u++)b in l&&f(r,u,l[b]);return r.length=u,r}})}}]);
//# sourceMappingURL=Blog.4893ee7e.js.map