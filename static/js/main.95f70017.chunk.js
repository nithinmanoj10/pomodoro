(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(24),n=a.n(c),i=a(3),r=a(5),l=(a(42),a(7)),o=a(8),j=a(10),d=a(9),m=a(0),b=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={handleClick:e.handleClick,text:e.text,to:e.to},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(i.b,{href:"javascript:void(0)",className:"button button--basic",onClick:this.state.handleClick,to:this.state.to,children:this.props.text})}}]),a}(s.Component),_=a.p+"static/media/illustration-working-brown.24887bc9.svg",u=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"hero-box",children:[Object(m.jsx)("h3",{className:"greeting",children:"Good Morning"}),Object(m.jsx)("h2",{className:"user-name",children:"Nithin"}),Object(m.jsx)("img",{src:_,alt:"Girl looking at computer, being productive",className:"hero-box__image"}),Object(m.jsxs)("p",{className:"hero-box__description",children:["Pomodoro will make your work easier and more",Object(m.jsx)("span",{class:"bold-text",children:" productive"})]})]})}}]),a}(s.Component),h=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsx)(u,{}),Object(m.jsxs)("div",{class:"homepage__buttons",children:[Object(m.jsx)(b,{text:"View Tasks",to:"/Genskill-Project/taskmanager"}),Object(m.jsx)(b,{text:"Start",to:"/Genskill-Project/Session-Manager"})]})]})}}]),a}(s.Component),O=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"header",children:Object(m.jsxs)("div",{className:"mobile-navbar",children:[Object(m.jsx)("div",{className:"app-name",children:Object(m.jsx)(i.b,{to:"/Genskill-Project",children:Object(m.jsx)("h1",{children:"Pomodoro"})})}),Object(m.jsx)("a",{href:"javascript:void(0)",className:"hamburger-menu",children:Object(m.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"Hamburger Menu Icon",className:"hamburger-menu__icon"})})]})})}}]),a}(s.Component),x=(s.Component,a(25)),g=(s.Component,s.Component,s.Component,a(6));var k=function(){var e=Object(s.useState)(25),t=Object(g.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(10),i=Object(g.a)(n,2),r=i[0],l=i[1],o=Object(s.useState)(0),j=Object(g.a)(o,2),d=j[0],b=j[1],_=Object(s.useState)(8),u=Object(g.a)(_,2),h=u[0];return u[1],Object(s.useEffect)((function(){var e=setInterval((function(){if(clearInterval(e),0===r){if(0===a)return void b(d+1);c(a-1),l(59)}else l(r-1)}),1e3)}),[r]),Object(m.jsxs)("div",{className:"timer",children:[Object(m.jsxs)("h1",{className:"timer__value",children:[a<10?"0":"",a,":",r<10?"0":"",r]}),Object(m.jsxs)("p",{className:"timer__session",children:[d,"/",h]}),Object(m.jsx)("button",{children:"Start"})]})},p=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"timerpage",children:Object(m.jsx)(k,{})})}}]),a}(s.Component),N=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("nav",{className:"task-nav-bar",children:Object(m.jsxs)("ul",{className:"task-nav-bar__list",children:[Object(m.jsx)("li",{className:"task-nav-bar__list__item",children:Object(m.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/Genskill-Project/taskmanager/",children:"Tasks"})}),Object(m.jsx)("li",{className:"task-nav-bar__list__item",children:Object(m.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/Genskill-Project/taskmanager/completed",children:"Completed"})}),Object(m.jsx)("li",{className:"task-nav-bar__list__item",children:Object(m.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/Genskill-Project/taskmanager/tags",children:"Tags"})})]})})}}]),a}(s.Component),v=a(4),f=a(18),S=a.n(f);var C=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=e.toLocaleString("default",{month:"long"});return function(e){var t=Number(e);return t+(t>0?["th","st","nd","rd"][t>3&&t<21||t%10>3?0:t%10]:"")}(t)+", "+a};var y=function(e){var t=e.tasks,a=e.submitTaskHandle,c=JSON.parse(localStorage.getItem("tagsData")||"[]"),n=Object(s.useState)(""),r=Object(g.a)(n,2),l=r[0],o=r[1],j=Object(s.useState)(""),d=Object(g.a)(j,2),b=d[0],_=d[1],u=Object(s.useState)(""),h=Object(g.a)(u,2),O=h[0],x=h[1],k=Object(s.useState)(""),p=Object(g.a)(k,2),N=p[0],f=p[1],y=Object(s.useState)(Object(v.a)(c)),T=Object(g.a)(y,2),D=T[0];return T[1],Object(m.jsxs)("div",{className:"task-create",children:[Object(m.jsxs)("header",{className:"task-create__header",children:[Object(m.jsx)("h4",{className:"task-create__heading",children:"Create Task"}),Object(m.jsx)(i.b,{to:"/Genskill-Project/taskmanager",children:Object(m.jsx)(S.a,{className:"close-icon"})})]}),Object(m.jsxs)("form",{className:"task-create__form",children:[Object(m.jsx)("label",{htmlFor:"ttitle",className:"task-create__form__label",children:"Task Title"}),Object(m.jsx)("input",{type:"text",name:"tasktitle",id:"ttitle",placeholder:"Your Task Title",className:"input__text",onChange:function(e){o(e.target.value)}}),Object(m.jsx)("label",{htmlFor:"ttag",className:"task-create__form__label",children:"Tag"}),Object(m.jsxs)("select",{name:"tasktag",id:"ttag",className:"task-create__form__select",onChange:function(e){console.log(e.target),_(e.target.value)},children:[Object(m.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===D.length?Object(m.jsx)("option",{disabled:!0,children:"Make some Tags"}):D.map((function(e){return Object(m.jsx)("option",{value:"".concat(e.name),id:e.id,children:e.name})}))]}),Object(m.jsx)("label",{htmlFor:"testimate",className:"task-create__form__label",children:"Estimated Time to Complete"}),Object(m.jsx)("input",{type:"text",name:"taskestimate",id:"testimate",placeholder:"Time in Minutes",className:"input__text",onChange:function(e){x(e.target.value)}}),Object(m.jsx)("label",{htmlFor:"tdescription",className:"task-create__form__label",children:"Description"}),Object(m.jsx)("textarea",{name:"taskdescription",id:"tdescription",cols:"35",rows:"4",placeholder:"Description for your Task...",className:"task-create__form__description",onChange:function(e){f(e.target.value)}}),Object(m.jsx)("button",{className:"input__button",type:"submit",onClick:function(e){e.preventDefault();var s={};s.task_title=l,s.task_tag=b,s.task_estimate=O,s.task_desc=N,s.task_isCompleted=!1,s.task_startDate=C(),s.task_endDate="-",s.task_id=100*Math.random(),t.push(s),console.log(t),localStorage.setItem("tasksData",JSON.stringify(t)),a(t)},children:Object(m.jsx)(i.b,{to:"/Genskill-Project/taskmanager/",class:"input__button__link",children:Object(m.jsx)("h4",{children:"Create Task"})})})]})]})},T=a(22),D=a.n(T),P=a(33),G=a.n(P),w=a(28),I=a.n(w),M=a(34),F=a.n(M),J=a(35),R=a.n(J);var B=function(e){var t=JSON.parse(localStorage.getItem("tagsData")||"[]"),a=e.task,s=a.task_tag,c=a.task_title,n=a.task_desc,i=a.task_estimate,r=a.task_id,l=a.task_startDate,o=a.task_endDate,j=a.task_isCompleted,d={color:t.filter((function(e){if(e.name===s)return e.colour}))[0].colour};console.log(d);var b=e.tasks,_=e.setTasks;return Object(m.jsxs)("div",{className:"task-card ".concat(!0===j?"task-card--completed":""),children:[Object(m.jsxs)("div",{className:"task-info",children:[Object(m.jsx)("p",{className:"task-info__tag",style:d,children:s}),Object(m.jsx)("h4",{className:"task-info__name",children:c}),Object(m.jsx)("p",{className:"task-info__desc",children:n})]}),Object(m.jsxs)("div",{className:"task-card__actions",children:[Object(m.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=b.map((function(e){return r===e.task_id&&(e.task_isCompleted=!0,e.task_endDate=C()),e}));localStorage.setItem("tasksData",JSON.stringify(e)),_(Object(v.a)(e))},children:Object(m.jsx)(G.a,{className:"task-icon task-icon--done"})}),Object(m.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=b.filter((function(e){return r!==e.task_id}));localStorage.setItem("tasksData",JSON.stringify(e)),_(Object(v.a)(e))},children:Object(m.jsx)(I.a,{className:"task-icon task-icon--delete"})})]}),Object(m.jsxs)("div",{className:"task-card__time",children:[Object(m.jsx)(F.a,{className:"task-icon--time"}),Object(m.jsxs)("div",{className:"time-stat",children:[Object(m.jsx)("p",{className:"time-stat__name",children:"Estimated Time"}),Object(m.jsxs)("p",{className:"time-stat__value",children:[i," mins"]})]}),Object(m.jsx)(R.a,{className:"task-icon--time"}),Object(m.jsxs)("div",{className:"time-stat",children:[Object(m.jsx)("p",{className:"time-stat__name",children:"Start"}),Object(m.jsx)("p",{className:"time-stat__value",children:l})]}),Object(m.jsxs)("div",{className:"time-stat",children:[Object(m.jsx)("p",{className:"time-stat__name",children:"End"}),Object(m.jsx)("p",{className:"time-stat__value",children:o})]})]})]})},E=a.p+"static/media/Mordecai-Rigby-enjoying.89e2f180.png";var V=function(e){return Object(m.jsxs)("div",{className:"regular-show",children:[Object(m.jsx)("img",{src:e.image,alt:e.alt,className:"regular-show__pic"}),Object(m.jsx)("p",{className:"regular-show__text",children:e.text})]})};var Y=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(s.useState)(Object(v.a)(e)),a=Object(g.a)(t,2),c=a[0],n=a[1],l=e.filter((function(e){if(0==e.task_isCompleted)return e}));return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsxs)("header",{className:"task-section__header",children:[Object(m.jsx)("h2",{className:"heading",children:"Tasks"}),Object(m.jsxs)(i.b,{to:"/Genskill-Project/taskmanager/create-task",className:"add-task",children:[Object(m.jsx)("h4",{children:"New Task"}),Object(m.jsx)(D.a,{className:"add-task__icon"})]})]}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/Genskill-Project/taskmanager/create-task",children:Object(m.jsx)(y,{submitTaskHandle:function(e){n(Object(v.a)(e))},tasks:c})})}),0==l.length?Object(m.jsx)(V,{image:E,text:"You have no tasks for now. Go and have some fun :)",alt:"Moredecai and Rigby enjoying"}):Object(m.jsx)("ul",{className:"task-list",children:c.map((function(e){return 0==e.task_isCompleted?Object(m.jsx)(B,{task:e,tasks:c,setTasks:n},e.task_id):""}))})]})})},H=a.p+"static/media/Mordecai-Rigby-working.8610382c.png";var L=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(s.useState)(Object(v.a)(e)),a=Object(g.a)(t,2),c=a[0],n=a[1],i=e.filter((function(e){if(1==e.task_isCompleted)return e}));return Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsx)("header",{className:"task-section__header",children:Object(m.jsx)("h2",{className:"heading",children:"Completed Tasks"})}),0==i.length?Object(m.jsx)(V,{image:H,text:"You haven't completed any tasks. Now get back to work ;)",alt:"Moredecai and Rigby Working"}):Object(m.jsx)("ul",{className:"task-list",children:i.map((function(e){return Object(m.jsx)(B,{task:e,tasks:c,setTasks:n},e.task_id)}))})]})};var A=function(e){var t=e.tagColour,a=e.setTagColour,s=e.tagName,c=e.setTagName,n=e.setTagData,r=e.tagData;return Object(m.jsx)("div",{className:"tag-create",children:Object(m.jsxs)("form",{className:"tag-create__form",children:[Object(m.jsxs)("div",{className:"tag-create__data",children:[Object(m.jsx)("label",{htmlFor:"tgname",className:"tag-create__form__label",children:"Tag Name"}),Object(m.jsx)("input",{type:"text",name:"TagName",id:"tgname",className:"input__text",onChange:function(e){c(e.target.value)}}),Object(m.jsx)("label",{htmlFor:"tgcolour",className:"tag-create__form__label",children:"Tag Colour"}),Object(m.jsx)("div",{className:"input__colour",children:Object(m.jsx)("input",{type:"color",name:"TagColour",id:"tgcolour",className:"input__colour__picker",onChange:function(e){a(e.target.value)}})})]}),Object(m.jsx)("div",{className:"tag-create__close",children:Object(m.jsx)(i.b,{to:"/Genskill-Project/taskmanager/tags",children:Object(m.jsx)(S.a,{})})}),Object(m.jsx)("div",{className:"tag-create__submit",children:Object(m.jsx)("button",{className:"input__button",type:"submit",onClick:function(){var e={name:s,colour:t,id:100*Math.random()};r.push(e),localStorage.setItem("tagsData",JSON.stringify(r)),n(Object(v.a)(r))},children:Object(m.jsx)(i.b,{to:"/taskmanager/tags",class:"input__button__link",children:Object(m.jsx)("h4",{children:"Create Tag"})})})})]})})};var W=function(e){var t=e.name,a=e.colour,s=e.id,c=e.tagData,n=e.setTagData;console.log(t,a,s,c,n);var i={backgroundColor:a};return Object(m.jsxs)("div",{className:"tag-card",children:[Object(m.jsx)("div",{className:"tag-card__colour",style:i}),Object(m.jsx)("h3",{className:"tag-card__name",children:t}),Object(m.jsx)("div",{className:"tag-card__close",children:Object(m.jsx)(S.a,{className:"tag-card__close__icon",onClick:function(){var e=c.filter((function(e){if(e.id!==s)return e}));n(Object(v.a)(e)),localStorage.setItem("tagsData",JSON.stringify(e))}})})]})},q=a.p+"static/media/Mordecai-Rigby-pointing.e3f7fdfd.png";var z=function(){var e=Object(s.useState)("#000"),t=Object(g.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(g.a)(n,2),o=l[0],j=l[1],d=JSON.parse(localStorage.getItem("tagsData")||"[]"),b=Object(s.useState)(Object(v.a)(d)),_=Object(g.a)(b,2),u=_[0],h=_[1];return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsxs)("header",{className:"task-section__header",children:[Object(m.jsx)("h2",{className:"heading",children:"Tags"}),Object(m.jsxs)(i.b,{to:"/Genskill-Project/taskmanager/tags/create-tag",className:"add-task",children:[Object(m.jsx)("h4",{children:"New Tag"}),Object(m.jsx)(D.a,{className:"add-task__icon"})]})]}),Object(m.jsx)("p",{className:"warning",children:"Recommended that you don't delete any tags and you choose a dark colour"}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/Genskill-Project/taskmanager/tags/create-tag",children:Object(m.jsx)(A,{tagColour:a,setTagColour:c,tagName:o,setTagName:j,setTagData:h,tagData:u})})}),0===d.length?Object(m.jsx)(V,{image:q,text:"C'mon, create tags so you can track your tasks and be more productive :O",alt:"Moredecai and Rigby Pointing"}):Object(m.jsx)("div",{className:"tag-gallery",children:u.map((function(e){return Object(m.jsx)(W,{name:e.name,colour:e.colour,id:e.id,setTagData:h,tagData:u})}))})]})})};var K=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"task-manager",children:[Object(m.jsx)(N,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/Genskill-Project/taskmanager/",exact:!0,children:Object(m.jsx)(Y,{})}),Object(m.jsx)(r.a,{path:"/Genskill-Project/taskmanager/completed",children:Object(m.jsx)(L,{})}),Object(m.jsx)(r.a,{path:"/Genskill-Project/taskmanager/tags",children:Object(m.jsx)(z,{})})]})]})})};var Q=function(e){var t=e.sessionData,a=e.setSessionData;console.log(t,a);var s=JSON.parse(localStorage.getItem("tasksData")||"[]").filter((function(e){if(!1===e.task_isCompleted)return e})),c={id:100*Math.random(),activeTime:25,shortBreak:5,longBreak:30,intervals:4,isStarted:!1,isFinished:!1,currentInterval:0};return Object(m.jsxs)("div",{className:"task-create",children:[Object(m.jsxs)("header",{className:"session-create__header",children:[Object(m.jsx)("h4",{className:"session-create__heading",children:"Create Session"}),Object(m.jsx)(i.b,{to:"/Genskill-Project/Session-Manager",children:Object(m.jsx)(S.a,{className:"close-icon"})})]}),Object(m.jsxs)("form",{className:"session-create__form",children:[Object(m.jsx)("label",{htmlFor:"stitle",className:"session-create__form__label",children:"Session Title"}),Object(m.jsx)("input",{type:"text",name:"sessiontitle",id:"stitle",placeholder:"Your Session Title",className:"input__text",onChange:function(e){c.title=e.target.value}}),Object(m.jsxs)("label",{htmlFor:"sstudytime",className:"session-create__form__label",children:["Active Time ",Object(m.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(m.jsx)("input",{type:"number",name:"SessionStudyTime",id:"sstudytime",className:"input__number",onChange:function(e){c.activeTime=e.target.value},defaultValue:"25",min:"10",max:"120"}),Object(m.jsxs)("label",{htmlFor:"sshortbreaktime",className:"session-create__form__label",children:["Short Break Time ",Object(m.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(m.jsx)("input",{type:"number",name:"SessionShortBreakTime",id:"sshortbreaktime",className:"input__number",onChange:function(e){c.shortBreak=e.target.value},defaultValue:"5",min:"5",max:"20"}),Object(m.jsxs)("label",{htmlFor:"slongbreaktime",className:"session-create__form__label",children:["Long Break Time ",Object(m.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(m.jsx)("input",{type:"number",name:"SessionLongBreakTime",id:"slongbreaktime",className:"input__number",onChange:function(e){c.longBreak=e.target.value},defaultValue:"30",min:"20",max:"60"}),Object(m.jsx)("label",{htmlFor:"stask",className:"session-create__form__label",children:"Task"}),Object(m.jsxs)("select",{name:"sessiontask",id:"stask",className:"session-create__form__select",onChange:function(e){c.task=e.target.value},children:[Object(m.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===s.length?Object(m.jsx)("option",{disabled:!0,children:"Create some Tasks"}):s.map((function(e){return Object(m.jsx)("option",{value:"".concat(e.task_title),id:e.task_id,children:e.task_title})}))]}),Object(m.jsx)("label",{htmlFor:"sintervals",className:"session-create__form__label",children:"Number of Intervals"}),Object(m.jsx)("input",{type:"number",name:"sessionintervals",id:"sintervals",className:"input__number",onChange:function(e){c.intervals=e.target.value},defaultValue:"4",min:"1",max:"12"}),Object(m.jsx)("label",{htmlFor:"tdescription",className:"session-create__form__label",children:"Description"}),Object(m.jsx)("textarea",{name:"sessiondescription",id:"tdescription",cols:"35",rows:"4",placeholder:"Description for your Session...",className:"session-create__form__description",onChange:function(e){c.description=e.target.value}}),Object(m.jsx)("button",{className:"input__button",type:"submit",onClick:function(){t.push(c),a(Object(v.a)(t)),localStorage.setItem("sessionsData",JSON.stringify(t))},children:Object(m.jsx)(i.b,{to:"/Genskill-Project/sessionmanager/",class:"input__button__link",children:Object(m.jsx)("h4",{children:"Create Session"})})})]})]})},U=a(36),X=a.n(U);var Z=function(e){var t=e.session,a=t.id,s=t.isStarted,c=t.isFinised,n=t.title,i=t.task,r=t.currentInterval,l=t.intervals,o=t.description,j=e.sessionData,d=e.setSessionData;return Object(m.jsxs)("div",{className:"session-card",children:[Object(m.jsxs)("div",{className:"session-card__info",children:[Object(m.jsx)("h4",{className:"session-card__info__name",children:n}),Object(m.jsx)("p",{className:"session-card__info__task",children:i}),Object(m.jsx)("p",{className:"session-card__info__description",children:o})]}),Object(m.jsxs)("div",{className:"session-card__actions",children:[Object(m.jsx)("button",{className:"session-card__actions__button",onClick:function(){console.log(a),console.log(j,d);var e=j.filter((function(e){if(a!==e.id)return e}));d(Object(v.a)(e)),localStorage.setItem("sessionsData",JSON.stringify(e))},children:Object(m.jsx)(I.a,{})}),Object(m.jsx)("button",{className:"session-card__actions__button",children:Object(m.jsx)(X.a,{})})]}),Object(m.jsxs)("div",{className:"session-card__status",children:[Object(m.jsxs)("div",{className:"session-card__status__stat",children:[Object(m.jsx)("p",{className:"session-card__status__stat__name",children:"Status: "}),!0===c?Object(m.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--finished ",children:"Finished"}):!0===s?Object(m.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--started ",children:"Started"}):Object(m.jsx)("p",{className:"session-card__status__stat__value",children:"Not Started"})]}),Object(m.jsxs)("div",{className:"session-card__status__stat",children:[Object(m.jsx)("p",{className:"session-card__status__stat__name",children:"Progress:"}),Object(m.jsxs)("p",{className:"session-card__status__stat__value",children:[r,"/",l]})]})]})]})},$=a.p+"static/media/Rigby-reading.343b8b6a.png";var ee=function(){var e=Object(s.useState)(Object(v.a)(JSON.parse(localStorage.getItem("sessionsData")||"[]"))),t=Object(g.a)(e,2),a=t[0],c=t[1];return Object(m.jsx)(i.a,{children:Object(m.jsx)("div",{className:"task-manager",children:Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsxs)("header",{className:"task-section__header",children:[Object(m.jsx)("h2",{className:"heading",children:"Sessions"}),Object(m.jsxs)(i.b,{to:"/Genskill-Project/Session-Manager/create-tag",className:"add-task",children:[Object(m.jsx)("h4",{children:"New Session"}),Object(m.jsx)(D.a,{className:"add-task__icon"})]})]}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/Genskill-Project/Session-Manager/create-tag",children:Object(m.jsx)(Q,{sessionData:a,setSessionData:c})})}),0===a.length?Object(m.jsx)(V,{image:$,text:"Create a session and let's get productive :D",alt:"Rigby Reading"}):a.map((function(e){return Object(m.jsx)(Z,{session:e,sessionData:a,setSessionData:c})}))]})})})};var te=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(O,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/Genskill-Project",exact:!0,component:h}),Object(m.jsx)(r.a,{path:"/Genskill-Project/timer",component:p}),Object(m.jsx)(r.a,{path:"/Genskill-Project/taskmanager",component:K}),Object(m.jsx)(r.a,{path:"/Genskill-Project/Session-Manager",component:ee})]})]})})};n.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.95f70017.chunk.js.map