(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],p=0,m=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"0a06":function(e,t,a){e.exports=a.p+"img/csgo.0c83b02c.png"},3044:function(e,t,a){"use strict";var r=a("8c85"),n=a.n(r);n.a},"34cb":function(e,t,a){},"3e38":function(e,t,a){e.exports=a.p+"img/help-circle.a217347f.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("Header"),a("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("img",{attrs:{src:e.image}}),a("img",{attrs:{src:e.overwatch}}),a("img",{attrs:{src:e.csgo}})])},i=[],l={name:"Header",data:function(){return{image:a("cf05"),overwatch:a("d71e"),csgo:a("0a06")}}},c=l,u=(a("7309"),a("2877")),p=Object(u["a"])(c,s,i,!1,null,"5aad68e2",null),m=p.exports,f={name:"App",components:{Header:m}},v=f,g=(a("034f"),Object(u["a"])(v,n,o,!1,null,null,null)),d=g.exports,_=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Example"),a("section",{staticClass:"search"},[a("h1",[e._v("Track Player Stats")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"game"}},[e._v("Game")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.game,expression:"game"}],attrs:{name:"game",id:"game"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.game=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"overwatch"}},[e._v("Overwatch")]),a("option",{attrs:{value:"apex"}},[e._v("Apex Legends")]),a("option",{attrs:{value:"csgo"}},[e._v("Counter-Strike: Global Offensive")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"platform"}},[e._v(" Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.platform,expression:"platform"}],attrs:{name:"platform",id:"platform"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.platform=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"psn"}},[e._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[e._v("Xbox")]),a("option",{attrs:{value:"origin"}},[e._v("Origin")]),a("option",{attrs:{value:"battlenet"}},[e._v("Battlenet")]),a("option",{attrs:{value:"steam"}},[e._v("Steam")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"gamertag"}},[e._v("Gamertag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gamertag,expression:"gamertag"}],attrs:{type:"text",name:"text",id:"gamertag",placeholder:"Origin ID, Xbox Live, PSN ID, etc"},domProps:{value:e.gamertag},on:{input:function(t){t.target.composing||(e.gamertag=t.target.value)}}})]),e._m(0)])])],1)},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])}],x=(a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"example"},[a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Load Example Profile",expression:"'Load Example Profile'"}],staticClass:"exampleBox",on:{click:e.onClick}},[e._m(0)])])}),y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"exampleSymbol"},[r("img",{attrs:{src:a("3e38"),alt:"Example Profile",id:"exampleIcon"}})])}],w={name:"Example",methods:{onClick:function(){this.$router.push("/profile/apex/origin/Facilitatur")}}},D=w,O=(a("ff1d"),Object(u["a"])(D,x,y,!1,null,null,null)),k=O.exports,C={name:"Search",components:{Example:k},data:function(){return{game:"overwatch",platform:"psn",gamertag:""}},beforeCreate:function(){document.body.className="body-bg-image"},methods:{onSubmit:function(){this.gamertag?this.$router.push("/profile/".concat(this.game,"/").concat(this.platform,"/").concat(this.gamertag)):this.$toasted.show("Please enter a gamertag",{duration:3e3,icon:"exclamation-circle"})}}},P=C,j=Object(u["a"])(P,h,b,!1,null,null,null),S=j.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[e.loading?a("div",[a("h3",[e._v(" Loading ... ")])]):e._e(),e.error?a("div",[a("h3",[e._v(" "+e._s(e.error))]),a("router-link",{attrs:{to:"/"}},[e._v(" Go Back ")])],1):e._e(),e.profileData?a("div",{staticClass:"container"},[a("h1",{staticClass:"gamertag"},[a("img",{staticClass:"platform-avatar",attrs:{src:e.profileData.platformInfo.avatarUrl,alt:"Avatar"}}),e._v(" "+e._s(e.profileData.platformInfo.platformUserHandle)+" ")]),a("div",{staticClass:"grid"},[e.profileData.segments[1].metadata.imageUrl?a("div",[a("img",{attrs:{src:e.profileData.segments[1].metadata.imageUrl,alt:""}})]):e._e(),a("div",[a("ul",[e.profileData.metadata.activeLegendName?a("li",[a("h4",[e._v("Selected Legend")]),a("p",[e._v(e._s(e.profileData.metadata.activeLegendName))])]):e._e(),e.profileData.segments[0].stats.level?a("li",[a("h4",[e._v("Apex Level")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.level.displayValue)+" "),e.profileData.segments[0].stats.level.percentile?a("span",[e._v("("+e._s(e.profileData.segments[0].stats.level.percentile)+"%)")]):e._e()])]):e._e(),e.profileData.segments[0].stats.kills?a("li",[a("h4",[e._v("Lifetime Kills")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.kills.displayValue)+" "),e.profileData.segments[0].stats.kills.percentile?a("span",[e._v("("+e._s(e.profileData.segments[0].stats.kills.percentile)+"%)")]):e._e()])]):e._e(),e.profileData.segments[0].stats.damage?a("li",[a("h4",[e._v("Damage Done")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.damage.displayValue)+" "),e.profileData.segments[0].stats.damage.percentile?a("span",[e._v("("+e._s(e.profileData.segments[0].stats.damage.percentile)+"%)")]):e._e()])]):e._e()])])]),a("router-link",{staticClass:"back-btn",attrs:{to:"/"}},[e._v(" Go Back ")])],1):e._e()])},E=[],L=(a("96cf"),a("1da1")),N=a("bc3a"),A=a.n(N),G={name:"Profile",data:function(){return{loading:!1,error:null,profileData:null}},beforeCreate:function(){document.body.className="body-bg-no-image"},created:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,A.a.get("\n            /api/v1/profile/".concat(e.$route.params.game,"/").concat(e.$route.params.platform,"/").concat(e.$route.params.gamertag,"\n            "));case 4:a=t.sent,e.profileData=a.data.data,console.log(e.profileData),e.loading=!1,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),e.loading=!1,e.error=t.t0.response.data.message;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},I=G,B=(a("3044"),Object(u["a"])(I,$,E,!1,null,"a0225e78",null)),H=B.exports;r["a"].use(_["a"]);var M=new _["a"]({mode:"history",routes:[{path:"/",name:"search",component:S},{path:"/profile/:game/:platform/:gamertag",name:"profile",component:H}]}),T=a("a65d"),U=a.n(T),V=a("3222"),J=a.n(V);a("a04c");r["a"].config.productionTip=!1,r["a"].use(U.a,{iconPack:"fontawesome"}),r["a"].use(J.a),new r["a"]({router:M,render:function(e){return e(d)}}).$mount("#app")},7309:function(e,t,a){"use strict";var r=a("a109"),n=a.n(r);n.a},"85ec":function(e,t,a){},"8c85":function(e,t,a){},a109:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.badc059d.png"},d71e:function(e,t,a){e.exports=a.p+"img/overwatch.ba938810.png"},ff1d:function(e,t,a){"use strict";var r=a("34cb"),n=a.n(r);n.a}});
//# sourceMappingURL=app.92cd4a17.js.map