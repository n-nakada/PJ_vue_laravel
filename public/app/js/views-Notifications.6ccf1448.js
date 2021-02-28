(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Notifications"],{"3f49":function(t,a,o){"use strict";o.r(a);var e=function(){var t,a=this,o=a.$createElement,e=a._self._c||o;return e("v-container",{attrs:{id:"alerts",fluid:"",tag:"section"}},[e("view-intro",{attrs:{heading:"Notifications",link:"components/alerts"}}),e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card",[e("v-card-text",[e("div",{staticClass:"text-h5 text--primary"},[a._v(" Notification Style ")]),e("material-alert",{attrs:{color:"info",dark:""}},[a._v(" This is a plain notification. ")]),e("material-alert",{attrs:{color:"info",dark:"",dismissible:""}},[a._v(" This is a notification with close button. ")]),e("material-alert",{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[a._v(" This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")]),e("material-alert",{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[a._v(" You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")])],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("app-card",[e("v-card-text",[e("div",{staticClass:"text-h5 text--primary"},[a._v(" Notification States ")]),a._l(a.colors,(function(t){return e("material-alert",{key:t,attrs:{color:t,dark:"",dismissible:""}},[e("span",{staticClass:"text-uppercase caption font-weight-medium",domProps:{textContent:a._s(t)}}),a._v(' — This is a regular alert made with the color of "'+a._s(t)+'" ')])})),e("material-alert",{attrs:{color:"secondary",dark:"",dismissible:""}},[e("span",{staticClass:"caption font-weight-medium"},[a._v("PRIMARY")]),a._v(' — This is a regular alert made with the color "secondary" ')]),e("material-alert",{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[e("span",{staticClass:"caption font-weight-medium"},[a._v("PINK DARKEN-1")]),a._v(' — This is a regular alert made with the color "pink darken-1" ')])],2)],1)],1),e("v-col",{attrs:{cols:"12"}},[e("app-card",[e("v-card-text",{staticClass:"text-center"},[e("div",{staticClass:"text-h5 text--primary"},[a._v(" Snackbar Locations ")]),e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"10",lg:"8"}},[e("v-row",a._l(a.directions,(function(t){return e("v-col",{key:t,attrs:{cols:"4"}},[e("v-btn",{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(o){a.randomColor(),a.direction=t,a.snackbar=!0}}},[a._v(" "+a._s(t)+" ")])],1)})),1)],1)],1),e("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"10",lg:"8"}},[e("v-row",{staticClass:"mt-5"},[e("v-col",{attrs:{cols:"4"}},[e("v-btn",{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(t){a.dialog=!0}}},[a._v(" Classic Dialog ")])],1),e("v-col",{attrs:{cols:"4"}},[e("v-btn",{attrs:{color:"info",default:"",rounded:""},on:{click:function(t){a.dialog2=!0}}},[a._v(" Notice Modal ")])],1),e("v-col",{attrs:{cols:"4"}},[e("v-btn",{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(t){a.dialog3=!0}}},[a._v(" Small Alert Modal ")])],1)],1)],1)],1)],1)],1)],1)],1),e("material-snackbar",a._b({attrs:{type:a.color,timeout:"-1"},model:{value:a.snackbar,callback:function(t){a.snackbar=t},expression:"snackbar"}},"material-snackbar",(t={},t[a.parsedDirection[0]]=!0,t[a.parsedDirection[1]]=!0,t),!1),[a._v(" Welcome to "),e("span",{staticClass:"font-weight-bold"},[a._v(" MATERIAL DASHBOARD PRO ")]),a._v(" — a beautiful admin panel for every web developer. ")]),e("v-dialog",{attrs:{"max-width":"500"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",{staticClass:"text-center"},[e("v-card-title",[a._v(" Dialog Title "),e("v-spacer"),e("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog=!1}}},[a._v(" mdi-close ")])],1),e("v-card-text",[a._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){a.dialog=!1}}},[a._v(" Close ")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500"},model:{value:a.dialog2,callback:function(t){a.dialog2=t},expression:"dialog2"}},[e("v-card",[e("v-card-title",[a._v(" How do you become an affiliate? "),e("v-spacer"),e("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog2=!1}}},[a._v(" mdi-close ")])],1),e("v-card-text",{staticClass:"body-1 text-center"},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"8"}},[e("div",[e("div",[e("strong",[a._v("1. Register")])]),e("div",{staticClass:"grey--text"},[a._v(" The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you. ")])])]),e("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[e("v-sheet",[e("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),e("v-col",{attrs:{cols:"12",md:"8"}},[e("div",[e("div",[e("strong",[a._v("2. Apply")])]),e("div",{staticClass:"grey--text"},[a._v(" The first step is to create an account at "),e("a",{attrs:{href:"http://www.creative-tim.com/"}},[a._v("Creative Tim")]),a._v(". You can choose a social network or go for the classic version, whatever works best for you. ")])])]),e("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[e("v-sheet",[e("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),e("v-col",{attrs:{cols:"12"}},[a._v(" If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help! ")])],1),e("v-btn",{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(t){a.dialog2=!1}}},[a._v(" Sounds good ")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"300"},model:{value:a.dialog3,callback:function(t){a.dialog3=t},expression:"dialog3"}},[e("v-card",[e("v-card-title",[a._v(" Are you sure? "),e("v-spacer"),e("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog3=!1}}},[a._v(" mdi-close ")])],1),e("v-card-text",{staticClass:"pb-6 pt-12 text-center"},[e("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(t){a.dialog3=!1}}},[a._v(" Nevermind ")]),e("v-btn",{attrs:{color:"success",text:""},on:{click:function(t){a.dialog3=!1}}},[a._v(" Yes ")])],1)],1)],1)],1)},i=[],s=(o("1276"),o("ac1f"),{name:"NotificationsView",data:function(){return{color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}},computed:{parsedDirection:function(){return this.direction.split(" ")}},methods:{randomColor:function(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}}),r=s,l=o("2877"),c=Object(l["a"])(r,e,i,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=views-Notifications.6ccf1448.js.map