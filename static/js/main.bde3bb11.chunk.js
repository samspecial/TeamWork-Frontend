(this.webpackJsonpteamwork=this.webpackJsonpteamwork||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/teamwork.9e90d779.png"},23:function(e,a,t){},25:function(e,a,t){e.exports=t.p+"static/media/communicate.018a2474.png"},26:function(e,a,t){e.exports=t.p+"static/media/social.2b630837.png"},27:function(e,a,t){e.exports=t.p+"static/media/network.9cd3b33b.png"},28:function(e,a,t){e.exports=t.p+"static/media/team.de0ecb86.png"},35:function(e,a,t){e.exports=t(52)},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),s=(t(40),t(9)),m=t(13),i=(t(41),t(1)),o=t(2),p=t(4),u=t(3),d=t(5),b=t(34),h=t(12),f=t(25),E=t.n(f),v=t(26),w=t.n(v),g=t(27),N=t.n(g),y=t(28),k=t.n(y);function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(t,!0).forEach((function(a){Object(h.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var j=r.a.createContext(),S=function(e,a){switch(a.type){case"DELETE_ARTICLE":return O({},e,{articleData:e.articleData.filter((function(e){return e.id!==a.payload}))});case"ADD_POST":return O({},e,{articleData:[a.payload].concat(Object(b.a)(e.articleData))});default:return e}},x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={cardData:[{id:1,src:k.a,title:"Split view on teamwork",article:"Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",btnText:"Try it now"},{id:2,src:w.a,title:"Experience Unusual Bonding",article:"Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",btnText:"Learn more"},{id:3,src:E.a,title:"Commitment",article:"Those who you play and relate with at work are your most valuable people, hence they deserve to be cherished",btnText:"Stay plugged"},{id:4,src:N.a,title:"Unrivalry experience",article:"Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",btnText:"Create now"}],articleData:[],feed:[],dispatch:function(e){return t.setState((function(a){return S(a,e)}))}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){fetch("https://teamwork-a.herokuapp.com/api/v1/feed").then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),A=j.Consumer,D=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.article;return r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,t),r.a.createElement("span",null,r.a.createElement("p",null)))}}]),a}(n.Component),T=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).onDeletePost=function(e,a){fetch("/".concat(e,", method = 'DELETE'")).then((function(e){return e.json()})).then((function(t){a({type:"DELETE_ARTICLE",payload:e})}))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(A,null,(function(e){var a=e.articleData;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement(D,{title:e.title,article:e.article,key:e.id,url:e.url,id:e.authorId,created:e.createdOn})})))}))}}]),a}(n.Component),F=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"pa4 pa5-l black-70 bt b--black-10"},r.a.createElement("div",{className:"mb4-l cf"},r.a.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns"},r.a.createElement("h4",{className:"f5 f4-l fw6"},"SF"),r.a.createElement("span",{className:"f7 f6-l db black-70"},"837 Larkin St."),r.a.createElement("span",{className:"f7 f6-l black-70"},"San Francisco, CA 94109 "),r.a.createElement("a",{className:"f6 db fw6 pv3 black-70 link dim",title:"Call SF",href:"tel:+12075555555"},"+1 207-555-5555")),r.a.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns"},r.a.createElement("h4",{className:"f5 f4-l fw6"},"LA"),r.a.createElement("span",{className:"f7 f6-l db black-70"},"1111 Manor Way"),r.a.createElement("span",{className:"f7 f6-l di black-70"},"Los Angeles, CA 90048"),r.a.createElement("a",{href:"tel:+13235555555",className:"f6 db fw6 pv3 link dim black-70",title:"Call the LA office."},"+1 323-555-5555")),r.a.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns"},r.a.createElement("h4",{className:"f5 f4-l fw6"},"Company"),r.a.createElement("span",{className:"f7 f6-l db black-70"},"Careers"),r.a.createElement("span",{className:"f7 f6-l black-70"},"About Teamwork"),r.a.createElement("a",{href:"tel:+5555555555",className:"link dim f6 db fw6 pv3 black-70",title:"Call the London office"},"Partners")),r.a.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns"},r.a.createElement("h4",{className:"f5 f4-l fw6"},"Products"),r.a.createElement("span",{className:"f7 f6-l db black-70"},"Mobile App"),r.a.createElement("span",{className:"f7 f6-l"},"Customized Solutions"),r.a.createElement("a",{href:"tel:+2348066876531",className:"f6 db dim fw6 pv3 link black-70",title:"Call Tokyo Office"},"-2348066876531"))),r.a.createElement("section",{className:"cf mb5"},r.a.createElement("div",{className:"mb4 mb0-ns w-100 w-50-l fr"},r.a.createElement("a",{className:"black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l",href:"mailto:hello@impossible.com"},"hello@teamwork.com")),r.a.createElement("div",{className:"mb4 mb0-ns fl w-100 w-50-l"},r.a.createElement("p",{className:"f4 fw6 mb2 f6 mt0"},"Sign up for our newsletter."),r.a.createElement("input",{placeholder:"Email Address",className:"mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"}),r.a.createElement("input",{type:"submit",className:"input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"}))),r.a.createElement("div",{className:"dt dt--fixed w-100"},r.a.createElement("div",{className:"dn dtc-ns v-mid"},r.a.createElement("p",{className:"f7 black-70 dib pr3 mb3"},"Copyright \xa9 TeamWork 2019")),r.a.createElement("div",{className:"db dtc-ns black-70 tc tr-ns v-mid"},r.a.createElement("a",{href:"https://www.facebook.com/",className:"link dim dib mr3 black-70",title:"Impossible Labs on Facebook"},r.a.createElement("svg",{className:"db w2 h2","data-icon":"facebook",viewBox:"0 0 32 32",fill:"currentColor"},r.a.createElement("title",null,"facebook icon"),r.a.createElement("path",{d:"M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"}))),r.a.createElement("a",{href:"https://twitter.com/",className:"link dim dib mr3 black-70"},r.a.createElement("svg",{className:"db w2 h2","data-icon":"twitter",viewBox:"0 0 32 32",fill:"currentColor"},r.a.createElement("title",null,"twitter icon"),r.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))),r.a.createElement("a",{href:"https://medium.com/",className:"link dim dib mr3 black-70",title:"Impossible Labs on Medium"},r.a.createElement("svg",{className:"db w2 h2",x:"0px",y:"0px",viewBox:"0 0 290 248.6",fill:"currentColor"},r.a.createElement("g",null,r.a.createElement("path",{fill:"currentColor",className:"st0",d:"M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"}),r.a.createElement("polygon",{fill:"currentColor",points:"105.2,61.2 105.2,160.3 193.3,204.4 \t"}),r.a.createElement("path",{fill:"currentColor",d:"M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"}),r.a.createElement("path",{fill:"currentColor",d:"M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"})))),r.a.createElement("a",{href:"https://www.linkedin.com/company/",className:"link dim dib black-70"},r.a.createElement("svg",{className:"db w2 h2",x:"0px",y:"0px",viewBox:"0 0 48 48"},r.a.createElement("linearGradient",{gradientUnits:"userSpaceOnUse",x1:"23.9995",y1:"0",x2:"23.9995",y2:"48.0005"},r.a.createElement("stop",{offset:"0"}),r.a.createElement("stop",{offset:"1"})),r.a.createElement("path",{fill:"currentColor",d:"M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"}),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{fill:"#FFFFFF",d:"M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"}))))))),r.a.createElement("div",{className:"db dn-ns"},r.a.createElement("p",{className:"f7 black-70 mt4 tc"},"Copyright \xa9 TeamWork 2019")))}}]),a}(n.Component),L=t(29),P=(t(42),t(15)),M=t.n(P);function R(){return r.a.createElement("nav",{className:"db dt-l w-100 border-box pa3 ph5-l navbar"},r.a.createElement(s.b,{className:"db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l",to:"/",title:"Home"},r.a.createElement("img",{src:M.a,className:"dib w4",alt:"Teamwork"})),r.a.createElement("div",{className:"db dtc-l v-mid w-100 w-75-l tc tr-l"},r.a.createElement(s.b,{className:"link dim dark-gray f6 f5-l dib mr3 mr4-l",to:"/",title:"Home"},"Home"),r.a.createElement(s.b,{className:"link dim dark-gray f6 f5-l dib mr3 mr4-l",to:"/about",title:"How it Works"},"How it Works"),r.a.createElement(s.b,{className:"link dim dark-gray f6 f5-l dib",to:"/",title:"Contact"},"Contact")))}var V=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),t.props.nextStep()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.values,t=a.firstName,n=a.lastName,l=a.gender,c=a.formErrors,s=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement("article",{className:"br3 ba b--black-10 pa4 mv4 w-100 w-50-m w-50-l mw6 center shadow-5"},r.a.createElement("form",{className:"measure center",noValidate:!0,acceptCharset:"utf-8"},r.a.createElement("legend",{className:"pv4 mv4 fw7"},"Create User Account"),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent w-100",type:"text",noValidate:!0,name:"firstName",id:"firstName",defaultValue:t,placeholder:"Firstname",onChange:s}),c.firstName.length>0&&r.a.createElement("small",{className:"errorMessage"},c.firstName)),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent w-100",type:"text",noValidate:!0,name:"lastName",id:"lastName",defaultValue:n,placeholder:"Lastname",onChange:s}),c.lastName.length>0&&r.a.createElement("small",{className:"errorMessage"},c.lastName)),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"gender"},"Gender"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent w-100 measure",type:"text",noValidate:!0,name:"gender",id:"gender",placeholder:"Gender",defaultValue:l,onChange:s}),c.gender.length>0&&r.a.createElement("small",{className:"errorMessage"},c.gender)),r.a.createElement("button",{className:"",onClick:this.continue},"Continue"))))}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),t.props.nextStep()},t.back=function(e){e.preventDefault(),t.props.prevStep()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.values,t=a.email,n=a.password,l=a.address,c=a.formErrors,s=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement("article",{className:"br3 ba b--black-10 pa4 mv4 w-100 w-50-m w-50-l mw6 center shadow-5"},r.a.createElement("form",{className:"measure center",noValidate:!0,acceptCharset:"utf-8"},r.a.createElement("legend",{className:"pv4 mv4 fw7"},"User Details"),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent w-100",type:"email",noValidate:!0,name:"email",id:"email",placeholder:"Email",value:t,onChange:s}),c.email.length>0&&r.a.createElement("small",{className:"errorMessage"},c.email)),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent hover-bg-transparent w-100",type:"password",noValidate:!0,name:"password",id:"password",placeholder:"Password",value:n,onChange:s}),c.password.length>0&&r.a.createElement("small",{className:"errorMessage"},c.password)),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent w-100 measure",type:"text",noValidate:!0,name:"address",id:"address",placeholder:"address",value:l,onChange:s}),c.address.length>0&&r.a.createElement("small",{className:"errorMessage"},c.address)),r.a.createElement("button",{className:"",onClick:this.back},"Back"),r.a.createElement("button",{className:"",onClick:this.continue},"Continue"))))}}]),a}(n.Component),z=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).onSubmitDetails=function(e){e.preventDefault(),t.props.onClick()},t.back=function(e){e.preventDefault(),t.props.prevStep()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.values,t=a.jobRole,n=a.department,l=a.formErrors,c=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement("article",{className:"br3 ba b--black-10 pa4 mv4 w-100 w-30-m w-50-l mw6 center shadow-5"},r.a.createElement("form",{onSubmit:this.onSubmitDetails,className:"measure center",action:"sign-up_submit",method:"post",noValidate:!0,acceptCharset:"utf-8"},r.a.createElement("legend",{className:"pv4 mv4 fw7"},"Job Details"),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"jobRole"},"Job Role"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent w-100 measure",type:"text",noValidate:!0,name:"jobRole",id:"jobRole",placeholder:"Job Role",value:t,onChange:c}),l.jobRole.length>0&&r.a.createElement("small",{className:"errorMessage"},l.jobRole)),r.a.createElement("div",{className:"tl"},r.a.createElement("label",{htmlFor:"department"},"Department"),r.a.createElement("input",{className:"mt3 db pa2 input-reset ba bg-transparent w-100 measure",type:"text",noValidate:!0,name:"department",id:"department",placeholder:"Department",value:n,onChange:c}),l.department.length>0&&r.a.createElement("small",{className:"errorMessage"},l.department)),r.a.createElement("button",{className:"",onClick:this.back},"Back"),r.a.createElement("button",{className:"",type:"submit"},"Submit"))))}}]),a}(n.Component),B=RegExp(/\S+@\S+\.\S+/),_=RegExp(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/),H=function(e){var a=e.formErrors,t=Object(L.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){""===e&&(n=!1)})),n},U=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).nextStep=function(){var e=t.state.step;t.setState({step:e+1})},t.prevStep=function(){var e=t.state.step;t.setState({step:e-1})},t.onChange=function(e){e.preventDefault();var a=e.target,n=a.name,r=a.value,l=t.state.formErrors;switch(n){case"firstName":l.firstName=r.length<3?"minimum 3 characters required":"";break;case"lastName":l.lastName=r.length<3?"minimum 3 characters required":"";break;case"email":l.email=B.test(r)?"":"Invalid email address";break;case"password":l.password=_.test(r)?"":"contains uppercase, lowercase, alphanumeric, number and 8 characters";break;case"address":l.address=r.length<30?"minimum 30 characters required":"";break;case"gender":l.gender=r.length<3?"minimum 3 characters required":"";break;case"jobRole":l.jobRole=r.length<8?"minimum 8 characters required":"";break;case"department":l.department=r.length<6?"minimum 6 characters required":""}t.setState(Object(h.a)({formErrors:l},n,r))},t.onSubmitForm=function(){H(t.state)?(alert("Successfully Created account as ".concat(t.state.firstName," ").concat(t.state.lastName,"\n            Kindly check your email for further instructions")),console.log("Successfully Created account as ".concat(t.state.firstName," ").concat(t.state.lastName,"\n            FIRST NAME: ").concat(t.state.firstName,"\n           LAST NAME: ").concat(t.state.lastName,"\n            EMAIL: ").concat(t.state.email,"\n            PASSWORD: ").concat(t.state.password,"\n            GENDER: ").concat(t.state.gender,"\n            ADDRESS: ").concat(t.state.address,"\n            JOBROLE: ").concat(t.state.jobrole,"\n            DEPARTMENT: ").concat(t.state.department))):alert("Ooops!!! Account creation failed, fields cannot be empty")},t.state={step:1,firstName:"",lastName:"",email:"",password:"",address:"",gender:"",jobRole:"",department:"",formErrors:{firstName:"",lastName:"",email:"",password:"",address:"",gender:"",jobRole:"",department:""}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.formErrors,t=e.step,n=this.state,l={firstName:n.firstName,lastName:n.lastName,email:n.email,password:n.password,gender:n.gender,address:n.address,jobRole:n.jobRole,department:n.department,formErrors:a};switch(t){case 1:return r.a.createElement(V,{nextStep:this.nextStep,onChange:this.onChange,values:l});case 2:return r.a.createElement(I,{nextStep:this.nextStep,prevStep:this.prevStep,onChange:this.onChange,values:l});case 3:return r.a.createElement(z,{prevStep:this.prevStep,onClick:this.onSubmitForm,onChange:this.onChange,values:l})}}}]),a}(n.Component);var W=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).onChange=function(a){e.setState(Object(h.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t=e.state,n=function(e,a){var t=[];return e.length<5&&t.push("Email should be at least 5 characters long"),1!==e.split("").filter((function(e){return"@"===e})).length&&t.push("Email should contain @"),-1===e.indexOf(".")&&t.push("Email should conatin at least one dot"),a.length<6&&t.push("Password should be at least 6 characters long"),t}(t.email,t.password);n.length>0&&e.setState({errors:n})},e.state={email:"",password:"",errors:[]},e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.errors;return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("div",{className:"sign-in"},r.a.createElement("article",{className:"br2 ba dark-gray b--black-20 dib mv4 w-100 w-50-m w-40-l mw6 center"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"measure",action:"sign-in_submit",method:"post",acceptCharset:"utf-8"},n.map((function(e){return r.a.createElement("p",{key:e},"Error:",e)})),r.a.createElement("fieldset",{id:"sign_in",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"ph0 mh0 fw6 clip"},"Sign In"),r.a.createElement("div",{className:"mt3 db"},r.a.createElement("label",{className:"db fw4 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent w-100 measure",type:"email",name:"email",id:"email",placeholder:"Email",value:a,onChange:this.onChange})),r.a.createElement("div",{className:"mt3 db"},r.a.createElement("label",{className:"db fw4 lh-copy f6",htmlFor:"password"},"password"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent w-100 measure",type:"text",name:"password",id:"password",placeholder:"password",value:t,onChange:this.onChange}))),r.a.createElement("div",{className:"mt3"},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6",type:"submit",value:"Sign In"}))))))}}]),a}(n.Component),q=t(32),J=t.n(q),G=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).onSubmit=function(a,t){t.preventDefault();var n=e.state,r=n.title,l=n.article;a({type:"ADD_POST",payload:{id:J()(),title:r,article:l}}),e.setState({title:"",article:""})},e.onPostChange=function(a){e.setState(Object(h.a)({},a.target.name,a.target.value))},e.state={title:"",article:"",gifTitle:"",image:""},e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.title,n=a.article,l=a.image,c=a.gifTitle;return r.a.createElement(A,null,(function(a){var s=a.dispatch;return r.a.createElement("div",null,r.a.createElement("h3",null,"Share thoughts and how you feels with your colleagues"),r.a.createElement("p",null,"This is aim at increasing team bonding and relationship, feel free to interact and share knowledge."),r.a.createElement("p",null,"areas you are expected to share knowledge are but not limited to the followings: History, Entrepreneurship, Fitness, Family, Faith, Relationship, Entertainment, Fashion, Politics, Technology"),r.a.createElement("article",{className:"br2 ba pv5 ph4 dark-gray b--black-20 db mv4 w-100 w-50-m mw6 center shawdow-5"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s),className:"measure",action:"article-post",method:"post",acceptCharset:"utf-8"},r.a.createElement("legend",null,"Article Post"),r.a.createElement("fieldset",{id:"article-field",className:"ba b--transparent ph0 mh0"},r.a.createElement("div",{className:"mt3 db"},r.a.createElement("label",{className:"db lh-copy f6",htmlFor:"article-title"},"Title"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent w-100 measure",type:"text",name:"title",id:"title",placeholder:"Title",value:t,onChange:e.onPostChange})),r.a.createElement("div",{className:"mt3 db"},r.a.createElement("label",{className:"db fw4 lh-copy f6",htmlFor:"article"},"Article"),r.a.createElement("textarea",{id:"comment",name:"article","aria-describedby":"comment-desc",className:"pa2 input-reset ba bg-transparent w-100 measure",placeholder:"Publish your article",value:n,onChange:e.onPostChange}))),r.a.createElement("div",{className:"mt3"},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6",type:"submit",value:"Publish"}))),r.a.createElement("form",{onSubmit:e.onSubmit,className:"measure",action:"article-post",method:"post",encType:"multipart/form-data",acceptCharset:"utf-8"},r.a.createElement("legend",null,"GIF Post"),r.a.createElement("fieldset",{id:"article-field",className:"ba b--transparent ph0 mh0"},r.a.createElement("div",{className:"mt3 db"},r.a.createElement("label",{className:"db lh-copy f6",htmlFor:"image-title"},"Title"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent w-100 measure",type:"text",name:"gifTitle",id:"title",placeholder:"Title",value:c,onChange:e.onPostChange})),r.a.createElement("div",{className:"mt3 db"},r.a.createElement("label",{className:"db lh-copy f6",htmlFor:"image"},"Image"),r.a.createElement("input",{type:"file",id:"image",name:"image","aria-describedby":"image-desc",className:"pa2 input-reset",placeholder:"Publish your article",value:l,onChange:e.onPostChange}))),r.a.createElement("div",{className:"mt3"},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba bg-transparent grow pointer f6",type:"submit",value:"Publish"})))))}))}}]),a}(n.Component),$=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={title:"",article:"",url:"",authorId:"",id:"",createdOn:""},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("").then((function(e){return e.json()})).then((function(a){e.setState({title:a.title,article:a.article,url:a.url,authorId:a.authorId,id:a.id,createdOn:a.createdOn})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(R,null))}}]),a}(n.Component),K=(t(50),function(){return r.a.createElement("header",{className:"sans-serif"},r.a.createElement("div",{className:"cover bg-left bg-center-l"},r.a.createElement("div",{className:"bg-black-70 pb5 pb6-m pb7-l"},r.a.createElement("nav",{className:"dt w-100 mw8 center"},r.a.createElement("div",{className:"dtc w2 v-mid pa3"},r.a.createElement("a",{href:"/",className:"dib w4 grow-large"},r.a.createElement("img",{src:M.a,alt:"teamwork"}))),r.a.createElement("div",{className:"dtc v-mid tr pa3"},r.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3",href:"/"},"How it Works"),r.a.createElement("a",{className:"f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3",href:"/"},"Contact"),r.a.createElement(s.b,{className:"f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba grow",to:"/signup"},"Sign Up"))),r.a.createElement("div",{className:"tc-l mt4 mt5-m mt6-l ph3"},r.a.createElement("h1",{className:"f2 f1-l fw7 white-90 mb0 lh-title"},"Teamwork makes it easy to stay in touch"),r.a.createElement("h2",{className:"fw5 f4 white-80 mt3 mb4"},"Create.","Collaborate.","Talk.","Chat."),r.a.createElement(s.b,{className:"f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3",to:"/"},"Learn More"),r.a.createElement("span",{className:"dib v-mid ph3 white-70 mb3"},"or"),r.a.createElement(s.b,{className:"f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3",to:"/signup"},"Try Now")))))}),Z=(t(23),function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"br-4 ba b--black-40 card shadow-5"},r.a.createElement("img",{src:this.props.src,className:"card-img",alt:"Little kitten looking menacing."}),r.a.createElement("div",{className:"pa2 mh2 "},r.a.createElement("h3",null,this.props.title),r.a.createElement("p",{className:"f6 lh-copy measure mt2 mid-white"},this.props.article),r.a.createElement("a",{className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue",href:"/"},this.props.button)))}}]),a}(n.Component)),Q=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(A,null,(function(e){var a=e.cardData;return r.a.createElement("div",{className:"cardlist"},a.map((function(e){return r.a.createElement(Z,{class:"card",key:e.id,src:e.src,title:e.title,article:e.article,button:e.btnText})})))}))}}]),a}(n.Component),X=t(33),Y=t.n(X),ee=(t(51),{particles:{number:{value:35,density:{enable:!0,value_area:400}}}}),ae=function(){return r.a.createElement("div",{className:"w-100 bg-black-90"},r.a.createElement(Y.a,{className:"particles",params:ee}),r.a.createElement(K,null),r.a.createElement("div",{className:"container"},r.a.createElement(Q,null)))};var te=function(){return r.a.createElement(x,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.c,null," ",r.a.createElement(m.a,{exact:!0,path:"/",component:ae}),r.a.createElement(m.a,{exact:!0,path:"/post",component:G}),r.a.createElement(m.a,{exact:!0,path:"/signin",component:W}),r.a.createElement(m.a,{exact:!0,path:"/signup",component:U}),r.a.createElement(m.a,{exact:!0,path:"/Feed",component:$})),r.a.createElement(F,null),r.a.createElement(T,null))))};c.a.render(r.a.createElement(te,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.bde3bb11.chunk.js.map