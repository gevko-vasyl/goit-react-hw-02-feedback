(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),o=n(2),i=n(4),d=n(8),j=n(5),b=n.n(j),l=n(0);function u(e){var t=e.children;return Object(l.jsxs)("div",{className:b.a.section,children:[Object(l.jsx)("h1",{className:b.a.title,children:"Please leave feedback"}),t]})}var h=n(6),O=n.n(h);function x(e){var t=e.options,n=e.handleClick;return Object(l.jsx)("div",{className:O.a.container,children:t.map((function(e){return Object(l.jsx)("button",{className:O.a.button,name:e,onClick:n,children:e},e)}))})}function p(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercent;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]}),Object(l.jsxs)("p",{children:["Positive feedback: ",s,"%"]})]})}function v(e){var t=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:t})})}var f=function(){var e=Object(c.useState)({good:0,neutral:0,bad:0}),t=Object(d.a)(e,2),n=t[0],a=t[1],s=n.good,r=n.neutral,j=n.bad,b=function(){return s+r+j};return Object(l.jsxs)(u,{className:"App",children:[Object(l.jsx)(x,{options:Object.keys(n),handleClick:function(e){var t=e.target.name;console.log(t),a(Object(i.a)(Object(i.a)({},n),{},Object(o.a)({},t,n[t]+1)))}}),b()?Object(l.jsx)(p,{good:s,bad:j,neutral:r,total:b(),positivePercent:function(){var e=n.good;return Math.round(e/b()*100)}()}):Object(l.jsx)(v,{message:"No feedback given"})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={section:"Section_section__qx71B"}},6:function(e,t,n){e.exports={container:"FeedbackOptions_container__1PnSB",button:"FeedbackOptions_button__12Y5t"}}},[[14,1,2]]]);
//# sourceMappingURL=main.e2729214.chunk.js.map