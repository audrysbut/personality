(this.webpackJsonppersonality=this.webpackJsonppersonality||[]).push([[0],{24:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var r,n=i(0),c=i.n(n),s=i(15),o=i.n(s),a=(i(24),i(18)),j=i(2),l=i(19),d=i(5),p=i(8),b=i(1),h={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px"},O={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px",background:"lightblue"},x={background:"lightgreen",fontWeight:"bold"},m={background:"lightgreen"},u=function(e){var t=e.title;return Object(b.jsx)("td",{style:Object(p.a)(Object(p.a)({},h),m),children:t})},f=function(e){var t=e.personalities,i=e.title,r=Object(n.useState)(""),c=t.map((function(e){return Object(b.jsx)("td",{style:Object(p.a)(Object(p.a)({},h),x),children:e.type})})),s=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,hero:!0})})),o=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,parent:!0})})),a=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,child:!0})})),j=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,nemesis:!0})})),l=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,inferior:!0})})),O=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,critic:!0})})),m=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,trickster:!0})})),f=t.map((function(e){return Object(b.jsx)(y,{personality:e,state:r,demon:!0})})),k=Object(b.jsx)(u,{title:"Type:"}),g=Object(b.jsx)(u,{title:"Hero:"}),F=Object(b.jsx)(u,{title:"Parent:"}),T=Object(b.jsx)(u,{title:"Child:"}),S=Object(b.jsx)(u,{title:"Nemesis:"}),v=Object(b.jsx)(u,{title:"Inferior:"}),N=Object(b.jsx)(u,{title:"Critic:"}),I=Object(b.jsx)(u,{title:"Trickster:"}),P=Object(b.jsx)(u,{title:"Demon:"});return Object(b.jsxs)("div",{style:{paddingRight:"10px"},children:[Object(b.jsx)("div",{style:{textAlign:"left",paddingLeft:"10px",fontWeight:"bold"},children:i}),Object(b.jsxs)("table",{children:[Object(b.jsx)("tr",{children:[k].concat(Object(d.a)(c))}),Object(b.jsx)("tr",{children:[g].concat(Object(d.a)(s))}),Object(b.jsx)("tr",{children:[F].concat(Object(d.a)(o))}),Object(b.jsx)("tr",{children:[T].concat(Object(d.a)(a))}),Object(b.jsx)("tr",{children:[v].concat(Object(d.a)(l))}),Object(b.jsx)("tr",{children:[S].concat(Object(d.a)(j))}),Object(b.jsx)("tr",{children:[N].concat(Object(d.a)(O))}),Object(b.jsx)("tr",{children:[I].concat(Object(d.a)(m))}),Object(b.jsx)("tr",{children:[P].concat(Object(d.a)(f))})]})]})},y=function(e){var t=Object(l.a)(e.state,2),i=t[0],r=t[1],n=e.personality.type===i?O:h,c=e.hero?e.personality.hero:e.parent?e.personality.parent:e.child?e.personality.child:e.inferior?e.personality.inferior:e.nemesis?e.personality.nemesis:e.trickster?e.personality.trickster:e.critic?e.personality.critic:e.demon?e.personality.demon:void 0;return Object(b.jsx)("td",{style:n,onMouseOver:function(){r(e.personality.type)},onMouseOut:function(){r("")},children:c})};!function(e){e.Ni="Ni",e.Ne="Ne",e.Ti="Ti",e.Te="Te",e.Si="Si",e.Se="Se",e.Fi="Fi",e.Fe="Fe"}(r||(r={}));var k=r.Ni,g=r.Si,F=r.Ti,T=r.Fi,S=r.Ne,v=r.Se,N=r.Te,I=r.Fe,P=[{type:"INTJ",hero:k,parent:N,child:T,nemesis:S,inferior:v,critic:F,trickster:I,demon:g},{type:"INFJ",hero:k,parent:I,child:F,nemesis:S,inferior:v,critic:T,trickster:N,demon:g},{type:"INTP",hero:F,parent:S,child:g,nemesis:N,inferior:I,critic:k,trickster:v,demon:T},{type:"INFP",hero:T,parent:S,child:g,nemesis:I,inferior:N,critic:k,trickster:v,demon:F},{type:"ISTJ",hero:g,parent:N,child:T,nemesis:v,inferior:S,critic:F,trickster:I,demon:k},{type:"ISFJ",hero:g,parent:I,child:F,nemesis:v,inferior:S,critic:T,trickster:N,demon:k},{type:"ISTP",hero:F,parent:v,child:k,nemesis:N,inferior:I,critic:g,trickster:S,demon:T},{type:"ISFP",hero:T,parent:v,child:k,nemesis:I,inferior:N,critic:g,trickster:S,demon:F}],E=[{type:"ENTJ",hero:N,parent:k,child:v,nemesis:F,inferior:T,critic:S,trickster:g,demon:I},{type:"ENFJ",hero:I,parent:k,child:v,nemesis:T,inferior:F,critic:S,trickster:g,demon:N},{type:"ENTP",hero:S,parent:F,child:I,nemesis:k,inferior:g,critic:N,trickster:T,demon:v},{type:"ENFP",hero:S,parent:T,child:N,nemesis:k,inferior:g,critic:I,trickster:F,demon:v},{type:"ESTJ",hero:N,parent:g,child:S,nemesis:F,inferior:T,critic:v,trickster:k,demon:I},{type:"ESFJ",hero:I,parent:g,child:S,nemesis:T,inferior:F,critic:v,trickster:k,demon:N},{type:"ESTP",hero:v,parent:F,child:I,nemesis:g,inferior:k,critic:N,trickster:T,demon:S},{type:"ESFP",hero:v,parent:T,child:N,nemesis:g,inferior:k,critic:I,trickster:F,demon:S}],J=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{personalities:P,title:"Introverts:"}),Object(b.jsx)(f,{personalities:E,title:"Extroverts:"})]})},C=function(){return Object(b.jsx)("div",{})};var w=function(){return Object(b.jsxs)(a.a,{basename:"/",children:[Object(b.jsx)(C,{}),Object(b.jsx)(j.c,{children:Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(J,{})})})]})},L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),r(e),n(e),c(e),s(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),L()}},[[31,1,2]]]);
//# sourceMappingURL=main.e9d02092.chunk.js.map