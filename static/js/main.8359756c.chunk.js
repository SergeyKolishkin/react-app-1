(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[0],{100:function(e,t,n){e.exports={formControl:"ControlForms_formControl__1hgFK",error:"ControlForms_error__1o-bV"}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return v}));var r=n(42),a=n(6),c=n.n(a),u=n(14),o=n(46),i=n(4),s=n(38),l=n(47),f=n(34),m={posts:[{id:1,message:"Hi",likeCounts:12},{id:2,message:"Hey",likeCounts:20}],profile:null,status:""},d={addPostActionCreator:function(e){return{type:"network/profile/UPDATE-NEW-POST-TEXT",addPost:e}},setPhoto:function(e){return{type:"network/profile/SET-PHOTO",photos:e}},setStatus:function(e){return{type:"network/profile/SET-STATUS",status:e}},setUserProfile:function(e){return{type:"network/profile/SET-USER-PROFILE",profile:e}}},p=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getUserId(e);case 2:r=t.sent,n(d.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.getStatus(e);case 2:r=t.sent,n(d.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.updateStatus(e);case 2:0===t.sent.resultCode&&n(d.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n(d.setPhoto(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(c.a.mark((function t(n,a){var u,o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=a().auth.userId,t.next=3,s.a.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=13;break}if(null==u){t.next=9;break}n(p(u)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=16;break;case 13:return i=o.data.messages[0].slice(o.data.messages[0].indexOf(">")+1,o.data.messages[0].indexOf(")")).toLocaleLowerCase(),n(Object(f.b)("edit-profile",{contacts:Object(r.a)({},i,o.data.messages[0])})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 16:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/profile/UPDATE-NEW-POST-TEXT":var n={id:3,message:t.addPost,likeCounts:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n])});case"network/profile/SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"network/profile/SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"network/profile/SET-PHOTO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(46),a=n(4),c={dialogs:[{id:1,name:"Dima"},{id:2,name:"Valera"},{id:3,name:"Peter"},{id:4,name:"Jason"},{id:5,name:"John"},{id:6,name:"Mila"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hey"}]},u={sendNewMessage:function(e){return{type:"network/messages/SEND-MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/messages/SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:3,message:n}])});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r,a,c=n(139),u=n.n(c).a.create({withCredentials:!0,headers:{"API-KEY":"f204f603-a647-41de-80aa-0a1511661d17"},baseURL:"https://social-network.samuraijs.com/api/1.0/"});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequered=10]="CaptchaIsRequered"}(a||(a={}))},126:function(e,t){e.exports="data:image/png;base64,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"},143:function(e,t,n){},144:function(e,t,n){e.exports=n.p+"static/media/loader.3b00bc57.gif"},147:function(e,t,n){e.exports={user:"User_user__oXz-q"}},148:function(e,t,n){e.exports={pagination:"Users_pagination__2oyEq",user:"Users_user__3c80h"}},17:function(e,t,n){e.exports={nav:"Nav_nav__2r7Sk",item:"Nav_item__123gJ",active:"Nav_active__1Vsds"}},176:function(e,t,n){e.exports=n(302)},259:function(e,t,n){},260:function(e,t,n){},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(103),a=n(0),c=n.n(a),u=n(100),o=n.n(u),i=n(96),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,a),u&&c.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.children,Object(r.a)(e,["input","meta","children"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.children,Object(r.a)(e,["input","meta","children"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),u)}},302:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(10),a=n(104),c=n(114),u=n(6),o=n.n(u),i=n(14),s=n(46),l=n(4),f=n(47),m=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(l.a)(Object(l.a)({},e),r):e}))},d={users:[],totalItemsCount:0,pageSize:12,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},p=function(e){return{type:"network/usersPage/FOLLOW",userId:e}},g=function(e){return{type:"network/usersPage/UNFOLLOW",userId:e}},h=function(e){return{type:"network/usersPage/SET-USERS",users:e}},b=function(e){return{type:"network/usersPage/SET-TOTAL-COUNT",totalCount:e}},v=function(e){return{type:"IS-FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE-IS-FOLLOWING",inProgress:e,userId:t}},O=function(e){return{type:"network/usersPage/SET-CURRENT-PAGE",currentPage:e}},w=function(e){return{type:"network/usersPage/SET-FILTER",payload:e}},j=function(e,t,n){return function(){var r=Object(i.a)(o.a.mark((function r(a){var c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(v(!0)),a(O(e)),a(w(n)),r.next=5,f.a.getUsers(e,t,n.term,n.friend);case 5:c=r.sent,a(v(!1)),a(h(c.items)),a(b(c.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},P=function(){var e=Object(i.a)(o.a.mark((function e(t,n,r,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/usersPage/FOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:m(e.users,t.userId,"id",{followed:!0})});case"network/usersPage/UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:m(e.users,t.userId,"id",{followed:!1})});case"network/usersPage/SET-USERS":return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case"network/usersPage/SET-CURRENT-PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case"network/usersPage/SET-TOTAL-COUNT":return Object(l.a)(Object(l.a)({},e),{},{totalItemsCount:t.totalCount});case"IS-FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"network/usersPage/SET-FILTER":return Object(l.a)(Object(l.a)({},e),{},{filter:t.payload});case"TOGGLE-IS-FOLLOWING":return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.inProgress?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},S=n(12),k=function(){return S.c.get("/security/get-captcha-url").then((function(e){return e.data}))},A=function(){return S.c.get("auth/me").then((function(e){return e.data}))},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return S.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},N=function(){return S.c.delete("auth/login").then((function(e){return e.data}))},L=n(34),U={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},F=function(e,t,n,r){return{type:"network/auth/SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},T=function(e){return{type:"network/auth/SET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},I=function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r,a,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:(n=e.sent).resultCode===S.a.Success&&(r=n.data,a=r.id,c=r.login,u=r.email,t(F(a,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:n=e.sent,r=n.url,t(T(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/auth/SET-USER-DATA":case"network/auth/SET-CAPTCHA-URL-SUCCESS":return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},H=n(138),z=n(140),R={initialized:!1},G=function(){return{type:"network/App/INITIALIZED-SUCCESS"}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"network/App/INITIALIZED-SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});default:return e}},X=Object(r.c)({profilePage:a.b,messagesPage:c.b,usersPage:C,auth:M,form:H.a,app:K}),W=Object(r.e)(X,Object(r.a)(z.a)),D=W;window.store=W;var J=n(0),B=n.n(J),V=n(73),Z=n.n(V),q=(n(259),n(60)),Y=n(61),Q=n(63),_=n(62),$=(n(260),n(17)),ee=n.n($),te=n(15),ne=function(e){return B.a.createElement("nav",{className:ee.a.nav},B.a.createElement("div",{className:ee.a.item},B.a.createElement(te.b,{to:"/profile",activeClassName:ee.a.active},"Profile")),B.a.createElement("div",{className:ee.a.item},B.a.createElement(te.b,{to:"/dialogs",activeClassName:ee.a.active},"Messages")),B.a.createElement("div",{className:ee.a.item},B.a.createElement(te.b,{to:"/friends",activeClassName:ee.a.active},"Friends")),B.a.createElement("div",{className:ee.a.item},B.a.createElement(te.b,{to:"/users",activeClassName:ee.a.active},"Users")),B.a.createElement("div",{className:ee.a.item},B.a.createElement(te.b,{to:"/news",activeClassName:ee.a.active},"News")),B.a.createElement("div",{className:ee.a.item},B.a.createElement(te.b,{to:"/music",activeClassName:ee.a.active},"Music")),B.a.createElement("div",{className:ee.a.item},B.a.createElement(te.b,{to:"/settings",activeClassName:ee.a.active},"Settings")))},re=n(11),ae=n(143),ce=n.n(ae),ue=function(){return B.a.createElement("div",{className:ce.a.item},"News")},oe=function(){return B.a.createElement("div",null,"Music")},ie=function(){return B.a.createElement("div",null,"Settings")},se=n(9),le=n(48),fe=n.n(le),me=function(e){return B.a.createElement("header",{className:fe.a.header},B.a.createElement("div",{className:fe.a.rightSide},B.a.createElement("div",null,B.a.createElement("img",{className:fe.a.img,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEu5LZKIe4h-OR00uA6wj-qaES5TGp4g0kQnjkdujgJxZM7HjD",alt:""})),B.a.createElement("div",{className:fe.a.logo},"RIDERS CLUB")),B.a.createElement("div",{className:fe.a.loginBlock},e.isAuth?B.a.createElement("div",null,e.login," | ",B.a.createElement("button",{onClick:e.logout},"Logout")," "):B.a.createElement(te.b,{to:"/login/"},"login")))},de=function(e){Object(Q.a)(n,e);var t=Object(_.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"render",value:function(){return B.a.createElement(me,this.props)}}]),n}(B.a.Component),pe=Object(se.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:e.sent.resultCode===S.a.Success&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(de),ge=n(41),he=function(e){return B.a.createElement("div",null,"Friends")},be=function(e){return function(t){return B.a.createElement(B.a.Suspense,{fallback:ge.a},B.a.createElement(e,t))}},ve=n(145),Ee=Object(ve.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Oe=function(e){return e.usersPage.pageSize},we=function(e){return e.usersPage.totalItemsCount},je=function(e){return e.usersPage.currentPage},Pe=function(e){return e.usersPage.isFetching},Ce=function(e){return e.usersPage.followingInProgress},Se=function(e){return e.usersPage.filter},ke=n(42),Ae=n(105),ye=n(80),Ne=n.n(ye),Le=n(146),Ue=n.n(Le),Fe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.onPageChanged,a=e.currentPage,c=e.portionSize,u=void 0===c?10:c,o=Math.ceil(t/n),i=[],s=1;s<=o;s++)i.push(s);var l=Math.ceil(o/u),f=Object(J.useState)(1),m=Object(Ae.a)(f,2),d=m[0],p=m[1],g=(d-1)*u+1,h=d*u;return B.a.createElement("div",{className:Ne.a.paginationBlock},d>1&&B.a.createElement("button",{onClick:function(){p(d-1)}},"PREV"),i.filter((function(e){return e>=g&&e<=h})).map((function(e){return B.a.createElement("span",{className:Ue()(Object(ke.a)({},Ne.a.selectedPage,a===e),Ne.a.pageNumber),key:e,onClick:function(){r(e)}},e)})),l>d&&B.a.createElement("button",{onClick:function(){p(d+1)}},"NEXT"))},Te=n(126),Ie=n.n(Te),xe=n(147),Me=n.n(xe),He=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return B.a.createElement("div",{className:Me.a.user},B.a.createElement("div",null,B.a.createElement(te.b,{to:"/profile/"+t.id},B.a.createElement("div",null,B.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Ie.a,alt:""}))),B.a.createElement("div",null,t.followed?B.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):B.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow"))),B.a.createElement("div",null,t.name),B.a.createElement("div",null,t.status))},ze=n(148),Re=n.n(ze),Ge=n(59),Ke=function(e){return{}},Xe=B.a.memo((function(e){return B.a.createElement("div",null,B.a.createElement(Ge.c,{initialValues:{term:"",friend:"null"},validate:Ke,onSubmit:function(t,n){var r=n.setSubmitting,a={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(a),r(!1)}},(function(e){var t=e.isSubmitting;return B.a.createElement(Ge.b,null,B.a.createElement(Ge.a,{type:"text",name:"term"}),B.a.createElement(Ge.a,{name:"friend",as:"select"},B.a.createElement("option",{value:"null"},"All"),B.a.createElement("option",{value:"true"},"Followed"),B.a.createElement("option",{value:"false"},"Unfollowed")),B.a.createElement("button",{type:"submit",disabled:t},"Search"))})))})),We=B.a.memo((function(e){var t=Object(se.d)(Ee),n=Object(se.d)(we),r=Object(se.d)(je),a=Object(se.d)(Oe),c=Object(se.d)(Se),u=Object(se.d)(Ce),s=Object(se.c)();Object(J.useEffect)((function(){s(j(r,a,c))}),[s,r,c,a]);var l=function(e){s(function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(n,e,f.a.follow.bind(e),p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},m=function(e){s(function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(n,e,f.a.unfollow.bind(e),g);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return B.a.createElement("div",null,B.a.createElement(Xe,{onFilterChanged:function(e){s(j(1,a,e))}}),B.a.createElement(Fe,{totalItemsCount:n,pageSize:a,onPageChanged:function(e){s(O(e)),s(j(e,a,c))},currentPage:r}),B.a.createElement("div",{className:Re.a.user},t.map((function(e){return B.a.createElement(He,{key:e.id,user:e,followingInProgress:u,follow:l,unfollow:m})}))))})),De=function(e){var t=Object(se.d)(Pe);return B.a.createElement(B.a.Fragment,null,t?B.a.createElement(ge.a,null):null,B.a.createElement(We,null))},Je=n(137),Be=n(74),Ve=n(29),Ze=Object(Je.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return B.a.createElement("form",{onSubmit:t},Object(Ve.c)("Email","email",[Be.a],Ve.a),Object(Ve.c)("Password","password",[Be.a],Ve.a,{type:"password"}),Object(Ve.c)(null,"rememberMe",[],Ve.a,{type:"checkbox"},"Remember me"),r&&B.a.createElement("img",{src:r,alt:""}),r&&Object(Ve.c)("Enter correct symbols","captcha",[Be.a],Ve.a),B.a.createElement("div",null,B.a.createElement("button",null,"Login")),n&&B.a.createElement("div",null,n))})),qe=function(e){var t=Object(se.c)(),n=Object(se.d)((function(e){return e.auth.isAuth})),r=Object(se.d)((function(e){return e.auth.captchaUrl})),a=function(e,n,r,a){t(function(e,t,n,r){return function(){var a=Object(i.a)(o.a.mark((function a(c){var u,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y(e,t,n,r);case 2:(u=a.sent).resultCode===S.a.Success?c(I()):(u.resultCode===S.b.CaptchaIsRequered&&c(x()),i=u.messages.length>0?u.messages[0]:"some error",c(Object(L.b)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e,n,r,a))};return n?B.a.createElement(re.a,{to:"/profile"}):B.a.createElement("div",null,B.a.createElement("h1",null,"Login"),B.a.createElement(Ze,{onSubmit:function(e){a(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:r}),B.a.createElement("div",null,"For test",B.a.createElement("div",null," free@samuraijs.com "),B.a.createElement("div",null," free ")))},Ye=B.a.lazy((function(){return n.e(4).then(n.bind(null,312))})),Qe=B.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),_e=function(e){Object(Q.a)(n,e);var t=Object(_.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialize?B.a.createElement("div",{className:"app-wrapper"},B.a.createElement(pe,null),B.a.createElement(ne,null),B.a.createElement("div",{className:"app-wrapper-content"},B.a.createElement(re.b,{path:"/",render:function(){return B.a.createElement(re.a,{to:"/profile"})}}),B.a.createElement(re.b,{path:"/dialogs",render:be(Ye)}),B.a.createElement(re.b,{path:"/profile/:userId?",render:be(Qe)}),B.a.createElement(re.b,{path:"/friends",render:function(){return B.a.createElement(he,null)}}),B.a.createElement(re.b,{path:"/users",render:function(){return B.a.createElement(De,null)}}),B.a.createElement(re.b,{path:"/news",render:function(){return B.a.createElement(ue,null)}}),B.a.createElement(re.b,{path:"/music",render:function(){return B.a.createElement(oe,null)}}),B.a.createElement(re.b,{path:"/settings",render:function(){return B.a.createElement(ie,null)}}),B.a.createElement(re.b,{path:"/login",render:function(){return B.a.createElement(qe,null)}}))):B.a.createElement(ge.a,null)}}]),n}(B.a.Component),$e=Object(r.d)(re.f,Object(se.b)((function(e){return{initialize:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(I()),Promise.all([n]).then((function(){t(G())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(_e);Z.a.render(B.a.createElement(te.a,null,B.a.createElement(se.a,{store:D},B.a.createElement($e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(12),a={getProfile:function(e){return r.c.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.c.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.c.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.c.put("profile/photo",t,{headers:{"Content-type":"multipart-form-data"}})},saveProfile:function(e){return r.c.put("profile",e)}}},41:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(144),u=n.n(c);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a,alt:""}))}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(12),a=n(38),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===a?"":"&friend=".concat(a))).then((function(e){return e.data}))},follow:function(e){return r.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.c.delete("follow/".concat(e)).then((function(e){return e.data}))},getUserId:function(e){return a.a.getProfile(e)}}},48:function(e,t,n){e.exports={header:"Header_header__2zzqH",rightSide:"Header_rightSide__25hmY",img:"Header_img__2zhj8",rotation:"Header_rotation__UF0g_",logo:"Header_logo__DSpnV",loginBlock:"Header_loginBlock__bDLuC"}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));t.a=function(e){if(!e)return"Field is required"};var r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e)}}},80:function(e,t,n){e.exports={paginationBlock:"Pagination_paginationBlock__17IM8",pageNumber:"Pagination_pageNumber__2Ao92",selectedPage:"Pagination_selectedPage__3FDD4"}}},[[176,1,2]]]);
//# sourceMappingURL=main.8359756c.chunk.js.map