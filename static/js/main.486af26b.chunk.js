(this.webpackJsonppersonality=this.webpackJsonppersonality||[]).push([[0],{24:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var r,n=i(0),c=i.n(n),s=i(15),o=i.n(s),a=(i(24),i(18)),l=i(2),j=i(19),d=i(5),p=i(8),h=i(1),b={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px"},O={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px",background:"lightblue"},x={background:"lightgreen",fontWeight:"bold"},u={background:"lightgreen"},m=function(e){var t=e.title;return Object(h.jsx)("td",{style:Object(p.a)(Object(p.a)({},b),u),children:t})},f=function(e){var t=e.personalities,i=e.title,r=e.state,n=t.map((function(e){return Object(h.jsx)("td",{style:Object(p.a)(Object(p.a)({},b),x),children:e.type})})),c=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,hero:!0})})),s=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,parent:!0})})),o=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,child:!0})})),a=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,nemesis:!0})})),l=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,inferior:!0})})),j=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,critic:!0})})),O=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,trickster:!0})})),u=t.map((function(e){return Object(h.jsx)(y,{personality:e,state:r,demon:!0})})),f=Object(h.jsx)(m,{title:"Type:"}),k=Object(h.jsx)(m,{title:"Hero:"}),g=Object(h.jsx)(m,{title:"Parent:"}),F=Object(h.jsx)(m,{title:"Child:"}),T=Object(h.jsx)(m,{title:"Nemesis:"}),S=Object(h.jsx)(m,{title:"Inferior:"}),v=Object(h.jsx)(m,{title:"Critic:"}),N=Object(h.jsx)(m,{title:"Trickster:"}),I=Object(h.jsx)(m,{title:"Demon:"});return Object(h.jsxs)("div",{style:{paddingRight:"10px"},children:[Object(h.jsx)("div",{style:{textAlign:"left",paddingLeft:"10px",fontWeight:"bold"},children:i}),Object(h.jsxs)("table",{children:[Object(h.jsx)("tr",{children:[f].concat(Object(d.a)(n))}),Object(h.jsx)("tr",{children:[k].concat(Object(d.a)(c))}),Object(h.jsx)("tr",{children:[g].concat(Object(d.a)(s))}),Object(h.jsx)("tr",{children:[F].concat(Object(d.a)(o))}),Object(h.jsx)("tr",{children:[S].concat(Object(d.a)(l))}),Object(h.jsx)("tr",{children:[T].concat(Object(d.a)(a))}),Object(h.jsx)("tr",{children:[v].concat(Object(d.a)(j))}),Object(h.jsx)("tr",{children:[N].concat(Object(d.a)(O))}),Object(h.jsx)("tr",{children:[I].concat(Object(d.a)(u))})]})]})},y=function(e){var t=Object(j.a)(e.state,2),i=t[0],r=t[1],n=e.personality.type===i?O:b,c=e.hero?e.personality.hero:e.parent?e.personality.parent:e.child?e.personality.child:e.inferior?e.personality.inferior:e.nemesis?e.personality.nemesis:e.trickster?e.personality.trickster:e.critic?e.personality.critic:e.demon?e.personality.demon:void 0;return Object(h.jsx)("td",{style:n,onMouseOver:function(){r(e.personality.type)},onMouseOut:function(){r("")},children:c})};!function(e){e.Ni="Ni",e.Ne="Ne",e.Ti="Ti",e.Te="Te",e.Si="Si",e.Se="Se",e.Fi="Fi",e.Fe="Fe"}(r||(r={}));var k=r.Ni,g=r.Si,F=r.Ti,T=r.Fi,S=r.Ne,v=r.Se,N=r.Te,I=r.Fe,E=[{type:"ENTJ",hero:N,parent:k,child:v,nemesis:F,inferior:T,critic:S,trickster:g,demon:I},{type:"ESTJ",hero:N,parent:g,child:S,nemesis:F,inferior:T,critic:v,trickster:k,demon:I},{type:"ENFJ",hero:I,parent:k,child:v,nemesis:T,inferior:F,critic:S,trickster:g,demon:N},{type:"ESFJ",hero:I,parent:g,child:S,nemesis:T,inferior:F,critic:v,trickster:k,demon:N},{type:"ENFP",hero:S,parent:T,child:N,nemesis:k,inferior:g,critic:I,trickster:F,demon:v},{type:"ENTP",hero:S,parent:F,child:I,nemesis:k,inferior:g,critic:N,trickster:T,demon:v},{type:"ESFP",hero:v,parent:T,child:N,nemesis:g,inferior:k,critic:I,trickster:F,demon:S},{type:"ESTP",hero:v,parent:F,child:I,nemesis:g,inferior:k,critic:N,trickster:T,demon:S},{type:"INFJ",hero:k,parent:I,child:F,nemesis:S,inferior:v,critic:T,trickster:N,demon:g},{type:"INTJ",hero:k,parent:N,child:T,nemesis:S,inferior:v,critic:F,trickster:I,demon:g},{type:"ISTJ",hero:g,parent:N,child:T,nemesis:v,inferior:S,critic:F,trickster:I,demon:k},{type:"ISFJ",hero:g,parent:I,child:F,nemesis:v,inferior:S,critic:T,trickster:N,demon:k},{type:"INTP",hero:F,parent:S,child:g,nemesis:N,inferior:I,critic:k,trickster:v,demon:T},{type:"ISTP",hero:F,parent:v,child:k,nemesis:N,inferior:I,critic:g,trickster:S,demon:T},{type:"INFP",hero:T,parent:S,child:g,nemesis:I,inferior:N,critic:k,trickster:v,demon:F},{type:"ISFP",hero:T,parent:v,child:k,nemesis:I,inferior:N,critic:g,trickster:S,demon:F}],P=E.filter((function(e){return e.type.startsWith("I")})),J=E.filter((function(e){return e.type.startsWith("E")})),C=function(){var e=Object(n.useState)("");return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{personalities:P,title:"Introverts:",state:e}),Object(h.jsx)(f,{personalities:J,title:"Extroverts:",state:e})]})};var w=function(){return Object(h.jsx)(a.a,{basename:"/",children:Object(h.jsx)("div",{children:Object(h.jsx)(l.c,{children:Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(C,{})})})})})},W=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),r(e),n(e),c(e),s(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),W()}},[[31,1,2]]]);
//# sourceMappingURL=main.486af26b.chunk.js.map