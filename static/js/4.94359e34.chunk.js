(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[4],{303:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(60),s=t(61),r=t(63),c=t(62),i=t(0),o=t.n(i),m=t(11),l=t(9),u=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){Object(r.a)(i,a);var t=Object(c.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(m.a,{to:"/login"})}}]),i}(o.a.Component);return Object(l.b)(u)(a)}},305:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2ek4g",dialogs_item:"Dialogs_dialogs_item__3V7Nx",messages:"Dialogs_messages__3Hryw"}},306:function(e,a,t){},307:function(e,a,t){},312:function(e,a,t){"use strict";t.r(a);var n=t(4),s=t(114),r=t(0),c=t.n(r),i=t(305),o=t.n(i),m=t(306),l=t.n(m),u=t(15),g=function(e){var a="/dialogs/"+e.id;return c.a.createElement("div",{className:l.a.dialog},c.a.createElement(u.b,{to:a},e.name))},d=t(307),f=t.n(d),b=function(e){return c.a.createElement("div",{className:f.a.messages},c.a.createElement("div",{className:f.a.message},e.message))},p=t(34),E=t(96),v=t(137),h=t(29),_=t(74),j=Object(_.b)(100),O=Object(v.a)({form:"dialogsSendMessageForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(E.a,{placeholder:"Enter your message",name:"newMessageBody",component:h.b,validate:[_.a,j]})),c.a.createElement("div",null,c.a.createElement("button",null,"Send message")))})),N=function(e){return c.a.createElement("div",null,c.a.createElement(O,{onSubmit:function(a){e.sendNewMessage(a.newMessageBody)},onSubmitSuccess:function(e,a){a(Object(p.a)("dialogsSendMessageForm"))}}))},w=function(e){var a=e.messagesPage,t=a.dialogs.map((function(e){return c.a.createElement(g,{name:e.name,id:e.id})})),n=a.messages.map((function(e){return c.a.createElement(b,{message:e.message})}));return c.a.createElement("div",{className:o.a.dialogs},c.a.createElement("div",{className:o.a.dialogs_item},t),c.a.createElement("div",{className:o.a.messages},n,c.a.createElement(N,{sendNewMessage:e.sendNewMessage})))},S=t(9),M=t(10),y=t(303);a.default=Object(M.d)(Object(S.b)((function(e){return{messagesPage:e.messagesPage}}),Object(n.a)({},s.a)),y.a)(w)}}]);
//# sourceMappingURL=4.94359e34.chunk.js.map