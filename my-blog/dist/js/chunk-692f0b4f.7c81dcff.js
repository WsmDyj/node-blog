(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-692f0b4f"],{"00ca":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty-box"},[a("svg",{staticClass:"icon empty-icon",attrs:{width:"66",height:"68",viewBox:"0 0 66 68"}},[a("g",{attrs:{fill:"none","fill-rule":"evenodd",transform:"translate(4 3)"}},[a("g",{attrs:{fill:"#F7F7F7"}},[a("path",{attrs:{d:"M9 10h23.751v3.221H9zM9 16.494h41.083v4.026H9zM9 26.104h23.751v3.221H9zM9 42.208h23.751v3.221H9zM9 33.351h41.083v4.026H9zM9 49.455h41.083v4.026H9z"}})]),a("rect",{attrs:{width:"56",height:"60",x:"1.139",y:"1.338",stroke:"#EBEBEB","stroke-width":"2",rx:"6"}})])]),a("div",{staticClass:"empty-text"},[t._v(t._s(t.description))])])},n=[],s=a("9f12"),c=a("8b83"),r=a("c65a"),o=a("c03e"),l=a("9ab4"),u=a("60a3"),d=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(u["d"]);l["a"]([Object(u["c"])()],d.prototype,"description",void 0),d=l["a"]([u["a"]],d);var f=d,v=f,h=(a("824a"),a("2877")),b=Object(h["a"])(v,i,n,!1,null,"586efbdc",null);e["a"]=b.exports},"0f49":function(t,e,a){"use strict";var i=a("b314"),n=a.n(i);n.a},"1be4":function(t,e,a){var i=a("d066");t.exports=i("document","documentElement")},"37e8":function(t,e,a){var i=a("83ab"),n=a("9bf2"),s=a("825a"),c=a("df75");t.exports=i?Object.defineProperties:function(t,e){s(t);var a,i=c(e),r=i.length,o=0;while(r>o)n.f(t,a=i[o++],e[a]);return t}},"3bbe":function(t,e,a){var i=a("861d");t.exports=function(t){if(!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"45a2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",on:{click:t.checkAsk}},[a("div",{staticClass:"item-content"},[a("article-title",{attrs:{article:t.ask}}),a("div",{staticClass:"item-content__title"},[a("span",{staticClass:"item-content__text"},[t._v(t._s(t.ask.title))]),t.origin&&t.visible?a("span",{staticClass:"item-content__delete iconfont",on:{click:function(e){return e.stopPropagation(),t.deleteAsk(t.ask)}}},[t._v("")]):t._e()])],1),a("div",{staticClass:"item-action mobile-none"},[a("div",{staticClass:"item-action__votes",class:2==t.ask.status?"solve":"not-solve"},[a("div",{staticClass:"votes-count"},[t._v(t._s(t.ask.comments))]),a("div",{staticClass:"votes-txt"},[t._v(t._s(2==t.ask.status?"解决":"回答"))])]),a("div",{staticClass:"item-action__votes"},[a("div",{staticClass:"votes-count"},[t._v(t._s(t.ask.reviews))]),a("div",{staticClass:"votes-txt"},[t._v("浏览")])])])])},n=[],s=(a("96cf"),a("89ba")),c=a("9f12"),r=a("53fe"),o=a("8b83"),l=a("c65a"),u=a("c03e"),d=a("9ab4"),f=a("60a3"),v=a("9dba"),h=a("d93f"),b=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"handleClick",value:function(t){window.open("/author?author=".concat(t),"_blank")}},{key:"deleteAsk",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.question_id);case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"checkAsk",value:function(){window.open("/checkAsk?askId=".concat(this.ask.question_id),"_blank")}},{key:"nickname",get:function(){return v["a"].nickname}},{key:"visible",get:function(){return this.nickname==this.ask.author}}]),e}(f["d"]);d["a"]([Object(f["c"])()],b.prototype,"ask",void 0),d["a"]([Object(f["c"])()],b.prototype,"origin",void 0),d["a"]([Object(f["b"])("delete")],b.prototype,"deleteAsk",null),b=d["a"]([Object(f["a"])({components:{articleTitle:h["a"]}})],b);var p=b,k=p,_=(a("62af"),a("2877")),m=Object(_["a"])(k,i,n,!1,null,"822c7c3c",null);e["a"]=m.exports},"47cb":function(t,e,a){"use strict";var i=a("7b65"),n=a.n(i);n.a},"50db":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.title))])]),t._t("default")],2)])},n=[],s=a("9f12"),c=a("8b83"),r=a("c65a"),o=a("c03e"),l=a("9ab4"),u=a("60a3"),d=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(u["d"]);l["a"]([Object(u["c"])()],d.prototype,"title",void 0),d=l["a"]([u["a"]],d);var f=d,v=f,h=(a("cd63"),a("2877")),b=Object(h["a"])(v,i,n,!1,null,"5e246777",null);e["a"]=b.exports},5366:function(t,e,a){},"62af":function(t,e,a){"use strict";var i=a("71b7"),n=a.n(i);n.a},"63a2":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"f",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"g",(function(){return u}));var i=a("b32d"),n=function(t){return Object(i["a"])({url:"api/question/list",method:"get",params:t})},s=function(){return Object(i["a"])({url:"api/question/hot",method:"get"})},c=function(t){return Object(i["a"])({url:"api/question/answerList",method:"get",params:t})},r=function(t){return Object(i["a"])({url:"api/question/detail",method:"get",params:t})},o=function(t){return Object(i["a"])({url:"api/question/delete",method:"get",params:t})},l=function(t){return Object(i["a"])({url:"api/question/new",method:"post",data:t})},u=function(t){Object(i["a"])({url:"api/question/update",method:"post",data:t})}},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var s,c;return n&&"function"==typeof(s=e.constructor)&&s!==a&&i(c=s.prototype)&&c!==a.prototype&&n(t,c),t}},"71b7":function(t,e,a){},"7b65":function(t,e,a){},"7c73":function(t,e,a){var i=a("825a"),n=a("37e8"),s=a("7839"),c=a("d012"),r=a("1be4"),o=a("cc12"),l=a("f772"),u=l("IE_PROTO"),d="prototype",f=function(){},v=function(){var t,e=o("iframe"),a=s.length,i="<",n="script",c=">",l="java"+n+":";e.style.display="none",r.appendChild(e),e.src=String(l),t=e.contentWindow.document,t.open(),t.write(i+n+c+"document.F=Object"+i+"/"+n+c),t.close(),v=t.F;while(a--)delete v[d][s[a]];return v()};t.exports=Object.create||function(t,e){var a;return null!==t?(f[d]=i(t),a=new f,f[d]=null,a[u]=t):a=v(),void 0===e?a:n(a,e)},c[u]=!0},"824a":function(t,e,a){"use strict";var i=a("e51c"),n=a.n(i);n.a},"82e5":function(t,e,a){"use strict";var i=a("c4cb"),n=a.n(i);n.a},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),s=a("94ca"),c=a("6eeb"),r=a("5135"),o=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),v=a("241c").f,h=a("06cf").f,b=a("9bf2").f,p=a("58a8").trim,k="Number",_=n[k],m=_.prototype,y=o(f(m))==k,O=function(t){var e,a,i,n,s,c,r,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(s=l.slice(2),c=s.length,r=0;r<c;r++)if(o=s.charCodeAt(r),o<48||o>n)return NaN;return parseInt(s,i)}return+l};if(s(k,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var j,g=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof g&&(y?d((function(){m.valueOf.call(a)})):o(a)!=k)?l(new _(O(e)),a,g):O(e)},C=i?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)r(_,j=C[w])&&!r(g,j)&&b(g,j,h(_,j));g.prototype=m,m.constructor=g,c(n,k,g)}},b314:function(t,e,a){},b59f:function(t,e,a){"use strict";var i=a("b9bd"),n=a.n(i);n.a},b804:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:t.isSticky?t.className:"",style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position}},[t._t("default")],2)])},n=[],s=(a("0d03"),a("d3b7"),a("25f0"),a("9f12")),c=a("53fe"),r=a("8b83"),o=a("c65a"),l=a("c03e"),u=a("9ab4"),d=a("60a3"),f=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.active=!1,t.position="",t.isSticky=!1,t.height="auto",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.height=this.$el.getBoundingClientRect().height.toString()+"px",window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)}},{key:"activated",value:function(){this.handleScroll()}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)}},{key:"sticky",value:function(){this.active||(this.position="fixed",this.active=!0,this.isSticky=!0)}},{key:"handleReset",value:function(){this.active&&(this.position="",this.active=!1,this.isSticky=!1)}},{key:"handleScroll",value:function(){this.$el.getBoundingClientRect().width;var t=this.$el.getBoundingClientRect().top;this.$emit("scroll",!(t<this.fixedTop)),t<this.stickyTop?this.sticky():this.handleReset()}},{key:"handleResize",value:function(){this.isSticky}}]),e}(d["d"]);u["a"]([Object(d["c"])({default:0})],f.prototype,"stickyTop",void 0),u["a"]([Object(d["c"])({default:0})],f.prototype,"fixedTop",void 0),u["a"]([Object(d["c"])({default:1})],f.prototype,"zIndex",void 0),u["a"]([Object(d["c"])({default:""})],f.prototype,"className",void 0),f=u["a"]([Object(d["a"])({name:"Sticky"})],f);var v=f,h=v,b=a("2877"),p=Object(b["a"])(h,i,n,!1,null,null,null);e["a"]=p.exports},b9bd:function(t,e,a){},b9e5:function(t,e,a){"use strict";var i=a("e1d2"),n=a.n(i);n.a},bb44:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Header",{attrs:{visible:t.visible}}),a("sticky",{attrs:{"fixed-top":-236,"z-index":9,"sticky-top":60},on:{scroll:t.handleScroll}},[a("div",{staticClass:"navigation",class:{"navigation-fixed":!t.visible}},[a("tabs",{attrs:{tabs:t.options},on:{click:t.filterAsk}})],1)]),a("div",{staticClass:"main mg-top-126"},[a("div",{staticClass:"section"},[a("div",{staticClass:"questions-nav"},[a("div",{staticClass:"question-nav__tabs"},[a("tabs",{attrs:{splitLine:"true",tabs:t.tabs},on:{click:t.selectNav}})],1),a("router-link",{staticClass:"questions-nav__button mobile-none",attrs:{target:"_blank",to:"/ask"}},[a("i",{staticClass:"el-icon-plus"}),a("span",[t._v("提问")])])],1),a("div",{staticClass:"questions-content"},[t.isEmpty?a("div",{staticClass:"questions-empty"},[a("empty",{attrs:{description:"该类目下还没有问题"}})],1):t._e(),a("van-list",{attrs:{finished:t.noMore,"finished-text":t.isEmpty?"":"没有更多数据了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.asks,(function(t,e){return a("div",{key:e},[a("question-item",{attrs:{ask:t}})],1)})),0)],1)]),a("div",{staticClass:"asside"},[a("hotCard",{attrs:{hotList:t.hotList}})],1)])],1)},n=[],s=(a("99af"),a("96cf"),a("89ba")),c=a("9f12"),r=a("53fe"),o=a("8b83"),l=a("c65a"),u=a("c03e"),d=a("9ab4"),f=a("60a3"),v=a("e725"),h=a("f2b4"),b=a("00ca"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("cardModule",{attrs:{title:"🔥 热门问题"}},t._l(t.hotList,(function(e,i){return a("div",{key:i,staticClass:"content-item",on:{click:function(a){return t.handleClick(e)}}},[a("div",{staticClass:"content-title"},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"content-action"},[a("span",[a("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "+t._s(e.likeCount)+" ")]),a("span",{staticClass:"action-comment"},[a("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "+t._s(e.comments)+" ")])])])})),0)],1)},k=[],_=a("50db"),m=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"handleClick",value:function(t){window.open("/checkAsk?askId=".concat(t.question_id),"_blank")}}]),e}(f["d"]);d["a"]([Object(f["c"])()],m.prototype,"hotList",void 0),m=d["a"]([Object(f["a"])({components:{cardModule:_["a"]}})],m);var y=m,O=y,j=(a("0f49"),a("2877")),g=Object(j["a"])(O,p,k,!1,null,"1246458e",null),C=g.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"about-content"},[a("div",{staticClass:"about-item"},[a("div",{staticClass:"item-name"},[t._v("未回答")]),a("span",{staticClass:"item-count"},[t._v("332424244")])]),a("div",{staticClass:"about-item"},[a("div",{staticClass:"item-name"},[t._v("已解决")]),a("span",{staticClass:"item-count"},[t._v("343")])])])])}],E=function(t){function e(){return Object(c["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["d"]);E=d["a"]([f["a"]],E);var I=E,A=I,S=(a("b9e5"),Object(j["a"])(A,w,x,!1,null,"ac18af4c",null)),N=S.exports,T=a("45a2"),R=a("63a2"),q=a("b804"),L=a("04a9"),M=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.visible=!0,t.hotList=[],t.options=L["c"],t.tabs=L["d"],t.asks=[],t.loading=!1,t.noMore=!1,t.isEmpty=!1,t.filters={articleTag:"全部",page:0,status:"0"},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"filterAsk",value:function(t){this.filters.page=0,this.asks=[],this.noMore=!1,this.isEmpty=!1,this.filters.articleTag=t.value,this.fetchData()}},{key:"selectNav",value:function(t){this.filters.page=0,this.asks=[],this.noMore=!1,this.isEmpty=!1,this.filters.status=t.label,this.fetchData()}},{key:"onLoad",value:function(){this.filters.page=this.filters.page+1,this.fetchData()}},{key:"fetchData",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(R["e"])(this.filters);case 3:e=t.sent,a=e.data,a.length>0?(this.loading=!1,this.asks=this.asks.concat(a)):(this.isEmpty=!0,this.asks=[]),a.length<20&&(this.noMore=!0,this.loading=!1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.fetchData(),t.next=3,Object(R["f"])();case 3:e=t.sent,this.hotList=e.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"handleScroll",value:function(t){this.visible=t}}]),e}(f["d"]);M=d["a"]([Object(f["a"])({name:"question",components:{Header:v["a"],tabs:h["a"],questionItem:T["a"],hotCard:C,totalCard:N,Sticky:q["a"],empty:b["a"]}})],M);var z=M,$=z,F=(a("b59f"),Object(j["a"])($,i,n,!1,null,"77f0c36a",null));e["default"]=F.exports},c4cb:function(t,e,a){},cd63:function(t,e,a){"use strict";var i=a("5366"),n=a.n(i);n.a},d2bb:function(t,e,a){var i=a("825a"),n=a("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,a={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(a,[]),e=a instanceof Array}catch(s){}return function(a,s){return i(a),n(s),e?t.call(a,s):a.__proto__=s,a}}():void 0)},d93f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-header"},[t.isAvatar?a("div",{staticClass:"article-header__avatar",on:{click:function(e){return e.stopPropagation(),t.hanleClick(e)}}},[a("el-avatar",{attrs:{size:"medium",src:t.isAvatar}})],1):t._e(),a("div",{staticClass:"article-header__name",on:{click:function(e){return e.stopPropagation(),t.hanleClick(e)}}},[t._v(t._s(t.article.author.nickname||t.article.author))]),a("div",{staticClass:"article-header__time"},[t._v(t._s(t.articleTime))]),a("div",{staticClass:"article-header__tags"},[t._v(t._s(t.article.articleTag.replace(/\,/g," / ")))])])},n=[],s=a("9f12"),c=a("53fe"),r=a("8b83"),o=a("c65a"),l=a("c03e"),u=a("9ab4"),d=a("60a3"),f=a("b428"),v=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.articleTime="",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"hanleClick",value:function(){window.open("/author?author=".concat(this.article.author),"_blank")}},{key:"created",value:function(){this.articleTime=Object(f["a"])(this.article.createtime)}}]),e}(d["d"]);u["a"]([Object(d["c"])()],v.prototype,"article",void 0),u["a"]([Object(d["c"])()],v.prototype,"isAvatar",void 0),v=u["a"]([d["a"]],v);var h=v,b=h,p=(a("82e5"),a("2877")),k=Object(p["a"])(b,i,n,!1,null,"557f424d",null);e["a"]=k.exports},e1d2:function(t,e,a){},e51c:function(t,e,a){},f2b4:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs-container"},[a("van-tabs",{attrs:{"title-inactive-color":"#71777c","title-active-color":"#007fff",swipeable:"",border:!1,ellipsis:!1,"line-width":0},on:{change:t.handleClick},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},t._l(t.tabs,(function(e,i){return a("van-tab",{key:i,staticClass:"tabs-item",attrs:{"title-style":t.tabStyle,title:e.value}})})),1)],1)},n=[],s=(a("0d03"),a("a9e3"),a("d3b7"),a("25f0"),a("96cf"),a("89ba")),c=a("9f12"),r=a("53fe"),o=a("8b83"),l=a("c65a"),u=a("c03e"),d=a("9ab4"),f=a("60a3"),v=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.current=0,t.tabStyle={padding:"0 2rem 0 0"},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"watchAuthor",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.current=Number(e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"handleClick",value:function(t,e){var a={label:t.toString(),value:e};return a}}]),e}(f["d"]);d["a"]([Object(f["c"])()],v.prototype,"tabs",void 0),d["a"]([Object(f["c"])()],v.prototype,"activeIndex",void 0),d["a"]([Object(f["c"])()],v.prototype,"splitLine",void 0),d["a"]([Object(f["e"])("activeIndex")],v.prototype,"watchAuthor",null),d["a"]([Object(f["b"])("click")],v.prototype,"handleClick",null),v=d["a"]([f["a"]],v);var h=v,b=h,p=(a("47cb"),a("2877")),k=Object(p["a"])(b,i,n,!1,null,"5e69e148",null);e["a"]=k.exports}}]);