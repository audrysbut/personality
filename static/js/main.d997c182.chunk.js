(this.webpackJsonppersonality=this.webpackJsonppersonality||[]).push([[0],{24:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var r,c=i(1),n=i.n(c),s=i(17),j=i.n(s),o=(i(24),i(9)),a=i(2),l=i(6),d=i(5),p=i(10),b=i(0),h={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px"},O={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px",background:"lightblue"},x={background:"lightgreen",fontWeight:"bold"},y={background:"lightgreen"},u=function(e){var t=e.title;return Object(b.jsx)("td",{style:Object(p.a)(Object(p.a)({},h),y),children:t})},f=function(e){var t=e.personalities,i=e.title,r=Object(c.useState)(""),n=t.map((function(e){return Object(b.jsx)("td",{style:Object(p.a)(Object(p.a)({},h),x),children:e.type})})),s=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,hero:!0})})),j=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,parent:!0})})),o=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,child:!0})})),a=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,nemesis:!0})})),l=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,inferior:!0})})),O=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,critic:!0})})),y=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,trickster:!0})})),f=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,demon:!0})})),v=Object(b.jsx)(u,{title:"Type:"}),S=Object(b.jsx)(u,{title:"Hero:"}),T=Object(b.jsx)(u,{title:"Parent:"}),g=Object(b.jsx)(u,{title:"Child:"}),k=Object(b.jsx)(u,{title:"Nemesis:"}),F=Object(b.jsx)(u,{title:"Inferior:"}),N=Object(b.jsx)(u,{title:"Critic:"}),I=Object(b.jsx)(u,{title:"Trickster:"}),P=Object(b.jsx)(u,{title:"Demon:"});return Object(b.jsxs)("div",{style:{paddingRight:"10px"},children:[Object(b.jsx)("div",{style:{textAlign:"left",paddingLeft:"10px",fontWeight:"bold"},children:i}),Object(b.jsxs)("table",{children:[Object(b.jsx)("tr",{children:[v].concat(Object(d.a)(n))}),Object(b.jsx)("tr",{children:[S].concat(Object(d.a)(s))}),Object(b.jsx)("tr",{children:[T].concat(Object(d.a)(j))}),Object(b.jsx)("tr",{children:[g].concat(Object(d.a)(o))}),Object(b.jsx)("tr",{children:[F].concat(Object(d.a)(l))}),Object(b.jsx)("tr",{children:[k].concat(Object(d.a)(a))}),Object(b.jsx)("tr",{children:[N].concat(Object(d.a)(O))}),Object(b.jsx)("tr",{children:[I].concat(Object(d.a)(y))}),Object(b.jsx)("tr",{children:[P].concat(Object(d.a)(f))})]})]})},m=function(e){var t=Object(l.a)(e.state,2),i=t[0],r=t[1],c=e.personality.type===i?O:h,n=e.hero?e.personality.hero:e.parent?e.personality.parent:e.child?e.personality.child:e.inferior?e.personality.inferior:e.nemesis?e.personality.nemesis:e.trickster?e.personality.trickster:e.critic?e.personality.critic:e.demon?e.personality.demon:void 0;return Object(b.jsx)("td",{style:c,onMouseOver:function(){r(e.personality.type)},onMouseOut:function(){r("")},children:n})};!function(e){e.Ni="Ni",e.Ne="Ne",e.Ti="Ti",e.Te="Te",e.Si="Si",e.Se="Se",e.Fi="Fi",e.Fe="Fe"}(r||(r={}));var v=r.Ni,S=r.Si,T=r.Ti,g=r.Fi,k=r.Ne,F=r.Se,N=r.Te,I=r.Fe,P={type:"INTJ",hero:v,parent:N,child:g,nemesis:k,inferior:F,critic:T,trickster:I,demon:S},E={type:"ENTJ",hero:N,parent:v,child:F,nemesis:T,inferior:g,critic:k,trickster:S,demon:I},J={type:"ESTJ",hero:N,parent:S,child:k,nemesis:T,inferior:g,critic:F,trickster:v,demon:I},C={type:"ENFJ",hero:I,parent:v,child:F,nemesis:g,inferior:T,critic:k,trickster:S,demon:N},w={type:"ESFJ",hero:I,parent:S,child:k,nemesis:g,inferior:T,critic:F,trickster:v,demon:N},M={type:"ENFP",hero:k,parent:g,child:N,nemesis:v,inferior:S,critic:I,trickster:T,demon:F},R={type:"ENTP",hero:k,parent:T,child:I,nemesis:v,inferior:S,critic:N,trickster:g,demon:F},A={type:"ESFP",hero:F,parent:g,child:N,nemesis:S,inferior:v,critic:I,trickster:T,demon:k},L={type:"ESTP",hero:F,parent:T,child:I,nemesis:S,inferior:v,critic:N,trickster:g,demon:k},B={type:"INFJ",hero:v,parent:I,child:T,nemesis:k,inferior:F,critic:g,trickster:N,demon:S},D={type:"ISTJ",hero:S,parent:N,child:g,nemesis:F,inferior:k,critic:T,trickster:I,demon:v},H={type:"ISFJ",hero:S,parent:I,child:T,nemesis:F,inferior:k,critic:g,trickster:N,demon:v},W={type:"INTP",hero:T,parent:k,child:S,nemesis:N,inferior:I,critic:v,trickster:F,demon:g},q={type:"ISTP",hero:T,parent:F,child:v,nemesis:N,inferior:I,critic:S,trickster:k,demon:g},z={type:"INFP",hero:g,parent:k,child:S,nemesis:I,inferior:N,critic:v,trickster:F,demon:T},G={type:"ISFP",hero:g,parent:F,child:v,nemesis:I,inferior:N,critic:S,trickster:k,demon:T},K=[P,B,W,z,D,H,q,G],Q=[E,C,R,M,J,w,L,A],U=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{personalities:K,title:"Introverts:"}),Object(b.jsx)(f,{personalities:Q,title:"Extroverts:"})]})},V=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/",children:"Comparison"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/cognitiveFunctions",children:"Cognitive functions"})})]})})})},X=function(e){var t=e.personality,i=e.activeTypeState,r=e.selectedTypesState,c=Object(l.a)(i,2),n=c[0],s=c[1],j=Object(l.a)(r,2),o=j[0],a=j[1],p=n===t.type,h=o.includes(t.type),O={background:function(){var e=t.type,i="N"===e[1],r="S"===e[1],c="T"===e[2],n="F"===e[2],s="J"===e[3],j="P"===e[3],o=p||h;return i&&c&&o?"violet":i&&n&&o?"lightgreen":r&&s&&o?"lightblue":j&&o?"yellow":"white"}(),width:"6rem",height:"3rem",textAlign:"center",lineHeight:"3rem",border:"2px solid black",borderRadius:"6px"};return Object(b.jsx)("div",{style:O,onMouseOver:function(){return s(t.type)},onMouseOut:function(){return s("")},onClick:function(){var e=t.type,i=o.includes(e);a((function(t){return i?t.filter((function(t){return t!==e})):[].concat(Object(d.a)(t),[e])}))},children:t.type})},Y=function(e){var t=e.types,i=e.activeTypeState,r=e.selectedTypesState,c=Object(l.a)(t,4),n=c[0],s=c[1],j=c[2],o=c[3];return Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(X,{personality:n,activeTypeState:i,selectedTypesState:r})}),Object(b.jsx)("td",{children:Object(b.jsx)(X,{personality:s,activeTypeState:i,selectedTypesState:r})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(X,{personality:j,activeTypeState:i,selectedTypesState:r})}),Object(b.jsx)("td",{children:Object(b.jsx)(X,{personality:o,activeTypeState:i,selectedTypesState:r})})]})]})},Z={textAlign:"center"},$=function(){var e=[P,B,W,z],t=[D,H,q,G],i=[E,C,R,M],r=[J,w,L,A],n=Object(c.useState)(""),s=Object(c.useState)([]);return Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{style:Z,children:"Intuitives"})}),Object(b.jsx)("div",{style:Z,children:"Sensors"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Introverted"}),Object(b.jsx)("td",{children:Object(b.jsx)(Y,{types:e,activeTypeState:n,selectedTypesState:s})}),Object(b.jsx)("td",{children:Object(b.jsx)(Y,{types:t,activeTypeState:n,selectedTypesState:s})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("div",{children:"Extroverted"})}),Object(b.jsx)("td",{children:Object(b.jsx)(Y,{types:i,activeTypeState:n,selectedTypesState:s})}),Object(b.jsx)("td",{children:Object(b.jsx)(Y,{types:r,activeTypeState:n,selectedTypesState:s})})]})]})};var _=function(){return Object(b.jsxs)(o.a,{basename:"/",children:[Object(b.jsx)(V,{}),Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{exact:!0,path:"/",children:Object(b.jsx)($,{})}),Object(b.jsx)(a.a,{path:"/cognitiveFunctions",children:Object(b.jsx)(U,{})})]})]})},ee=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),r(e),c(e),n(e),s(e)}))};j.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),ee()}},[[31,1,2]]]);
//# sourceMappingURL=main.d997c182.chunk.js.map