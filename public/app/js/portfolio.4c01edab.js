(function(e){function t(t){for(var o,n,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={portfolio:0},s=[];function n(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"60aae305"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=a[e]=[t,o]}));t.push(r[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=n(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,r[1](l)}a[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/app/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("4ca8")},"05f3":function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},"4ca8":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view")],1)},s=[],n={name:"App"},i=n,c=r("2877"),l=Object(c["a"])(i,a,s,!1,null,null,null),u=l.exports,d=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400px"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[r("v-card-title",[r("h1",{staticClass:"display-1"},[e._v("Login")])])],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{label:"Email","prepend-icon":"mdi-email"},model:{value:e.account.email,callback:function(t){e.$set(e.account,"email",t)},expression:"account.email"}}),r("v-text-field",{attrs:{type:e.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.account.password,callback:function(t){e.$set(e.account,"password",t)},expression:"account.password"}}),r("v-card-actions",[r("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.doLogin}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-login")]),e._v(" ログイン ")],1)],1)],1)],1)],1)},f=[],m=(r("2b3d"),r("bc3a")),v=r.n(m),h={name:"Login",data:function(){return{showPassword:!1,account:{}}},props:{source:String},methods:{doLogin:function(){var e=this;v.a.post("/api/login",{email:this.account.email,password:this.account.password}).then((function(t){if(e.$store.dispatch("auth",{token:t.data}),e.$router.query)e.$router.push(e.$router.query.redirect);else{var r=new URL(window.location.href);r.query?e.$router.push({path:r.searchParams.get("redirect")}):e.$router.push({path:"/portfolio/home"})}}))}}},g=h,b=Object(c["a"])(g,p,f,!1,null,null,null),_=b.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400px"}},[o("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:r("5634")}},[o("v-card-title",[o("h1",{staticClass:"display-1"},[e._v("アカウント登録")])])],1),o("v-card-text",[o("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[o("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[o("validation-provider",{attrs:{name:"Name",rules:"required|max: 20"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[o("v-text-field",{attrs:{counter:20,"error-messages":r,label:"Name","prepend-icon":"mdi-account-circle"},model:{value:e.account.Name,callback:function(t){e.$set(e.account,"Name",t)},expression:"account.Name"}})]}}],null,!0)}),o("validation-provider",{attrs:{name:"Email",rules:"required|email|max: 255"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[o("v-text-field",{attrs:{"error-messages":r,label:"Email","prepend-icon":"mdi-email"},model:{value:e.account.Email,callback:function(t){e.$set(e.account,"Email",t)},expression:"account.Email"}})]}}],null,!0)}),o("validation-provider",{attrs:{name:"Password",rules:{required:!0,min:8,regex:"^.*((?=.*[A-Za-z])(?=.*[0-9])|(?=.*[A-Za-z])(?=.*[!_.@])|(?=.*[0-9])(?=.*[!_.@])).*$"}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[o("v-text-field",{attrs:{"error-messages":r,label:"Password",type:e.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.account.Password,callback:function(t){e.$set(e.account,"Password",t)},expression:"account.Password"}})]}}],null,!0)}),o("validation-provider",{attrs:{name:"ConfirmPassword",rules:"required|confirmed:Password"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[o("v-text-field",{attrs:{"error-messages":r,label:"Confirm Password",type:e.showConfirm?"text":"password","prepend-icon":"mdi-checkbox-marked-circle","append-icon":e.showConfirm?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showConfirm=!e.showConfirm}},model:{value:e.account.Password_confirmation,callback:function(t){e.$set(e.account,"Password_confirmation",t)},expression:"account.Password_confirmation"}})]}}],null,!0)}),o("v-card-actions",[o("v-btn",{attrs:{block:"",color:"primary",type:"submit",disabled:r}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-database-plus")]),e._v(" 登録 ")],1),o("ErrorDialog",{attrs:{dialog:e.errorDialog,messages:e.validateMessages},on:{result:e.errorDialogResponse}}),o("ConfirmDialog",{attrs:{dialog:e.confirmDialog,messages:e.finishMessage},on:{result:e.confirmDialogResponse}})],1)],1)]}}])})],1)],1)},k=[],x=r("5530"),j=(r("b0c0"),r("159b"),{VALIDATE_REQUIRED:"{_field_} は入力必須です",VALIDATE_MIN:"{_field_} は {length} 文字以上で入力してください",VALIDATE_MAX:"{_field_} は {length} 文字以内で入力してください",VALIDATE_REGEX:"{_field_} は半角全角英字・半角数字・記号（@_!.）のうち2種類以上を組み合わせて入力してください",VALIDATE_EMAIL:"メールアドレス形式で入力してください",VALIDATE_CONFIRMED:"パスワードと同じ値を再入力してください"}),y=r("4c93"),E=r("7bb1"),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{color:"error",dark:""}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-alert-octagram ")]),e._v(" エラー ")],1),r("v-card-text",{staticClass:"pt-6"},[r("p",{staticStyle:{"white-space":"pre"}},[e._v(e._s(e.messages))])]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{tile:""},on:{click:e.close}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-close-circle ")]),e._v(" 閉じる ")],1)],1)],1)],1)],1)},P=[],A={props:{messages:{type:String,default:"エラーが発生しました。",required:!0},dialog:{type:Boolean,default:!1,required:!0}},methods:{close:function(){this.$emit("result",{})}}},$=A,D=Object(c["a"])($,O,P,!1,null,null,null),C=D.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-information ")]),e._v(" 確認 ")],1),r("v-card-text",{staticClass:"pt-6"},[r("p",{staticStyle:{"white-space":"pre"}},[e._v(e._s(e.messages))])]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{tile:""},on:{click:e.close}},[r("v-icon",{attrs:{left:""}},[e._v(" mdi-close-circle ")]),e._v(" 閉じる ")],1)],1)],1)],1)],1)},T=[],L={props:{messages:{type:String,default:"",required:!0},dialog:{type:Boolean,default:!1,required:!0}},methods:{close:function(){this.$emit("result",{})}}},M=L,q=Object(c["a"])(M,I,T,!1,null,null,null),S=q.exports;Object(E["d"])("eager"),Object(E["c"])("required",Object(x["a"])(Object(x["a"])({},y["f"]),{},{message:j.VALIDATE_REQUIRED})),Object(E["c"])("min",Object(x["a"])(Object(x["a"])({},y["d"]),{},{message:j.VALIDATE_MIN})),Object(E["c"])("max",Object(x["a"])(Object(x["a"])({},y["c"]),{},{message:j.VALIDATE_MAX})),Object(E["c"])("regex",Object(x["a"])(Object(x["a"])({},y["e"]),{},{message:j.VALIDATE_REGEX})),Object(E["c"])("email",Object(x["a"])(Object(x["a"])({},y["b"]),{},{message:j.VALIDATE_EMAIL})),Object(E["c"])("confirmed",Object(x["a"])(Object(x["a"])({},y["a"]),{},{message:j.VALIDATE_CONFIRMED}));var N={name:"Register",components:{ValidationProvider:E["b"],ValidationObserver:E["a"],ErrorDialog:C,ConfirmDialog:S},data:function(){return{showPassword:!1,showConfirm:!1,account:{},errorDialog:!1,confirmDialog:!1,validateMessages:"",finishMessage:""}},methods:{submit:function(){var e=this;this.$refs.observer.validate(),v.a.post("/api/auth/register",{Name:this.account.Name,Email:this.account.Email,Password:this.account.Password,Password_confirmation:this.account.Password_confirmation}).then((function(t){e.finishMessage="Name「"+t.data.name+"」の登録が完了しました。",e.confirmDialog=!0,e.$refs.form.reset()})).catch((function(t){var r="";t.response.data.errorMessages.forEach((function(e){r+=e+"\n"})),e.validateMessages=r,e.errorDialog=!0}))},errorDialogResponse:function(){this.errorDialog=!1},confirmDialogResponse:function(){this.confirmDialog=!1}}},V=N,R=Object(c["a"])(V,w,k,!1,null,null,null),U=R.exports,H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("welcome "+e._s(e.$store.getters.UserId))]),o("p",[e._v(e._s(e.message))]),o("div",{},[o("img",{attrs:{alt:"Vue logo",src:r("05f3")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1),o("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"pink"},on:{click:e.next}},[o("v-icon",{attrs:{dark:""}},[e._v(" mdi-heart ")])],1),o("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:e.regist}},[o("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")])],1),o("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"teal"},on:{click:e.logout}},[o("v-icon",{attrs:{dark:""}},[e._v(" mdi-logout ")])],1)],1)},F=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},X=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],z={name:"HelloWorld",props:{msg:String}},B=z,G=(r("cc41"),Object(c["a"])(B,W,X,!1,null,"71da4482",null)),J=G.exports,Q={name:"Home",components:{HelloWorld:J},data:function(){return{message:""}},created:function(){},methods:{next:function(){this.$router.push({path:"/portfolio/next"})},regist:function(){this.$router.push({path:"/portfolio/register"})},logout:function(){var e=this;v.a.post("/api/logout",{token:this.$store.getters.UserToken}).then((function(t){e.$store.dispatch("init"),e.$router.push({path:"/portfolio"})}))},fetchHello:function(){var e=this,t="";this.axios.get(t).then((function(t){e.message=t.data.message}))}}},Z=Q,Y=Object(c["a"])(Z,H,F,!1,null,null,null),K=Y.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("welcome "+e._s(e.$store.getters.UserId))]),r("p",[e._v(e._s(e.message))]),e._m(0)])},te=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{},[o("img",{attrs:{alt:"Vue logo",src:r("05f3")}})])}],re={name:"Next",components:{},data:function(){return{message:"this is next page."}}},oe=re,ae=Object(c["a"])(oe,ee,te,!1,null,null,null),se=ae.exports,ne=r("2f62"),ie=r("0e44"),ce={userName:"",userToken:""},le={UserName:function(e){return e.userName},UserToken:function(e){return e.userToken}},ue={updateUser:function(e,t){e.userId=t.account,e.userToken=t.token}},de={init:function(e){e.commit("updateUser",{userId:"",userToken:""})},auth:function(e,t){e.commit("updateUser",t)}},pe={state:ce,getters:le,mutations:ue,actions:de};o["default"].use(ne["a"]);var fe=new ne["a"].Store({modules:{auth:pe},plugins:[Object(ie["a"])({key:"example",storage:window.sessionStorage})]}),me=fe,ve=[{path:"/portfolio",component:_},{path:"/portfolio/register",component:U,meta:{requiresAuth:!0}},{path:"/portfolio/home",component:K,meta:{requiresAuth:!0}},{path:"/portfolio/next",component:se,meta:{requiresAuth:!0}},{name:"About",path:"/about",component:function(){return r.e("about").then(r.bind(null,"cc3e"))}}];o["default"].use(d["a"]);var he=new d["a"]({mode:"history",routes:ve});he.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))&&!me.state.auth.userToken?r({path:"/portfolio",query:{redirect:e.fullPath}}):r()}));var ge=he,be=r("ce5b"),_e=r.n(be);r("bf40");o["default"].use(_e.a);var we={},ke=new _e.a(we),xe=r("31bd");o["default"].config.productionTip=!1,Object(xe["sync"])(me,ge),new o["default"]({router:ge,vuetify:ke,store:me,render:function(e){return e(u)}}).$mount("#app")},5634:function(e,t,r){e.exports=r.p+"img/register_header.bc3e13a2.jpg"},cc41:function(e,t,r){"use strict";r("f08b")},f08b:function(e,t,r){}});
//# sourceMappingURL=portfolio.4c01edab.js.map