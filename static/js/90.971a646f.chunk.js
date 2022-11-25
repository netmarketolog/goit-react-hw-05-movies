"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[90],{90:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,o,s,c,u=t(885),p=t(791),d=t(689),l=t(873),x=t(927),f=t(168),h=t(444),g=h.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  margin: 0 auto;\n"]))),v=h.ZP.div(a||(a=(0,f.Z)(["\n  margin-right: 70px;\n"]))),b=h.ZP.img(i||(i=(0,f.Z)(["\n  width: 500px;\n  height: 700px;\n"]))),m=h.ZP.div(o||(o=(0,f.Z)(["\n  font-style: inherit;\n  font-size: 20px;\n"]))),w=t(184),Z=function(n){var e=n.poster_path,t=n.original_title,r=n.release_date,a=n.genres,i=n.overview,o=n.vote_average,s="https://image.tmdb.org/t/p/w500/".concat(e);return(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(b,{src:e?s:x,alt:t})}),(0,w.jsxs)(m,{children:[(0,w.jsxs)("h2",{children:[t," (",r.slice(.4),")"]}),(0,w.jsxs)("p",{children:["User Rating: ",10*o.toFixed(1),"%"]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:i})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:a.map((function(n){return n.name+" "}))})]})]})]})},_=t(327),j=t(731),k=h.ZP.div(s||(s=(0,f.Z)(["\n  margin: 20px;\n"]))),y=(0,h.ZP)(j.OL)(c||(c=(0,f.Z)(["\n  padding: 8px 16px;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition: all 350ms;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  width: 100px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  :focus {\n    background: linear-gradient(to bottom, #e8edec, #d2d1d3);\n    box-shadow: 0px 3px 20px 0px black;\n    transform: scale(1.05);\n    color: rgba(0, 0, 0, 0.4);\n    font-weight: bold;\n  }\n"]))),P=function(){var n,e,t,r,a,i,o=(0,p.useState)({}),s=(0,u.Z)(o,2),c=s[0],x=s[1],f=(0,d.UO)().movieId,h=(0,d.TH)();(0,p.useEffect)((function(){f&&(0,l.hG)(f).then((function(n){var e=n.id,t=n.poster_path,r=n.original_title,a=n.release_date,i=n.genres,o=n.overview,s=n.vote_average;x({id:e,poster_path:t,original_title:r,release_date:a,genres:i,overview:o,vote_average:s})}))}),[f]);var g=c.poster_path,v=c.original_title,b=c.release_date,m=c.vote_average,j=c.overview,P=c.genres;return(0,w.jsxs)(_.$0,{children:[(0,w.jsx)(k,{children:(0,w.jsx)(y,{to:null!==(n=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go Back"})}),c.id&&(0,w.jsx)(Z,{poster_path:g,original_title:null!==v&&void 0!==v?v:"none",release_date:b,genres:null!==P&&void 0!==P?P:[{id:1,name:"none"}],overview:null!==j&&void 0!==j?j:"none",vote_average:null!==m&&void 0!==m?m:0}),(0,w.jsxs)(k,{children:[(0,w.jsx)(y,{to:"cast",state:{from:null!==(t=null===(r=h.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"}),(0,w.jsx)(y,{to:"reviews",state:{from:null!==(a=null===(i=h.state)||void 0===i?void 0:i.from)&&void 0!==a?a:"/"},children:"Reviews"})]}),(0,w.jsx)(p.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(d.j3,{})})]})}},327:function(n,e,t){t.d(e,{$0:function(){return p},Fy:function(){return l},QZ:function(){return x},aV:function(){return f},l0:function(){return d}});var r,a,i,o,s,c=t(168),u=t(444),p=u.ZP.section(r||(r=(0,c.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 30px;\n"]))),d=u.ZP.form(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),l=u.ZP.input(i||(i=(0,c.Z)(["\n  width: 400px;\n  border: 0px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  padding: 15px;\n  margin-right: 20px;\n"]))),x=u.ZP.button(o||(o=(0,c.Z)(["\n  padding: 8px 16px;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  width: 100px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  :focus {\n    background: linear-gradient(to bottom, #e8edec, #d2d1d3);\n    box-shadow: 0px 3px 20px 0px black;\n    transform: scale(1.05);\n    color: rgba(0, 0, 0, 0.4);\n  }\n"]))),f=u.ZP.ul(s||(s=(0,c.Z)(["\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n"])))},873:function(n,e,t){t.d(e,{Cm:function(){return v},Jr:function(){return u},TW:function(){return h},hG:function(){return x},z1:function(){return d}});var r=t(861),a=t(757),i=t.n(a),o=t(44),s="?api_key=8fa17eefa9c2b424e1a30217c39bc412",c="https://api.themoviedb.org/3/";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){var e,t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"trending/movie/day").concat(s),n.next=3,o.ZP.get(e);case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.next=9,r.results;case 9:return a=n.sent,n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t,r,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"search/movie").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n.next=3,o.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return a=n.sent,n.next=9,a.results;case 9:return u=n.sent,n.abrupt("return",{filmList:u,data:a});case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"movie/").concat(e).concat(s,"&language=en-US"),n.next=3,o.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"movie/").concat(e,"/credits").concat(s,"&language=en-US"),n.next=3,o.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return a=n.sent,n.next=9,a.cast;case 9:return u=n.sent,n.abrupt("return",u);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(e){var t,r,a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"movie/").concat(e,"/reviews").concat(s,"&language=en-US&page=1"),n.next=3,o.ZP.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return a=n.sent,n.next=9,a.results;case 9:return u=n.sent,n.abrupt("return",u);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},927:function(n,e,t){n.exports=t.p+"static/media/error.0c791b507f2a08fa7e82.png"}}]);
//# sourceMappingURL=90.971a646f.chunk.js.map