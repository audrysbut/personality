(this.webpackJsonppersonality=this.webpackJsonppersonality||[]).push([[0],{24:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var r,c=i(1),n=i.n(c),s=i(17),o=i.n(s),j=(i(24),i(9)),a=i(2),l=i(6),d=i(5),p=i(10),b=i(0),h={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px"},O={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px",background:"lightblue"},x={background:"lightgreen",fontWeight:"bold"},y={background:"lightgreen"},u=function(e){var t=e.title;return Object(b.jsx)("td",{style:Object(p.a)(Object(p.a)({},h),y),children:t})},f=function(e){var t=e.personalities,i=e.title,r=Object(c.useState)(""),n=t.map((function(e){return Object(b.jsx)("td",{style:Object(p.a)(Object(p.a)({},h),x),children:e.type})})),s=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,hero:!0})})),o=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,parent:!0})})),j=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,child:!0})})),a=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,nemesis:!0})})),l=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,inferior:!0})})),O=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,critic:!0})})),y=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,trickster:!0})})),f=t.map((function(e){return Object(b.jsx)(m,{personality:e,state:r,demon:!0})})),v=Object(b.jsx)(u,{title:"Type:"}),g=Object(b.jsx)(u,{title:"Hero:"}),S=Object(b.jsx)(u,{title:"Parent:"}),T=Object(b.jsx)(u,{title:"Child:"}),k=Object(b.jsx)(u,{title:"Nemesis:"}),F=Object(b.jsx)(u,{title:"Inferior:"}),N=Object(b.jsx)(u,{title:"Critic:"}),I=Object(b.jsx)(u,{title:"Trickster:"}),P=Object(b.jsx)(u,{title:"Demon:"});return Object(b.jsxs)("div",{style:{paddingRight:"10px"},children:[Object(b.jsx)("div",{style:{textAlign:"left",paddingLeft:"10px",fontWeight:"bold"},children:i}),Object(b.jsxs)("table",{children:[Object(b.jsx)("tr",{children:[v].concat(Object(d.a)(n))}),Object(b.jsx)("tr",{children:[g].concat(Object(d.a)(s))}),Object(b.jsx)("tr",{children:[S].concat(Object(d.a)(o))}),Object(b.jsx)("tr",{children:[T].concat(Object(d.a)(j))}),Object(b.jsx)("tr",{children:[F].concat(Object(d.a)(l))}),Object(b.jsx)("tr",{children:[k].concat(Object(d.a)(a))}),Object(b.jsx)("tr",{children:[N].concat(Object(d.a)(O))}),Object(b.jsx)("tr",{children:[I].concat(Object(d.a)(y))}),Object(b.jsx)("tr",{children:[P].concat(Object(d.a)(f))})]})]})},m=function(e){var t=Object(l.a)(e.state,2),i=t[0],r=t[1],c=e.personality.type===i?O:h,n=e.hero?e.personality.hero:e.parent?e.personality.parent:e.child?e.personality.child:e.inferior?e.personality.inferior:e.nemesis?e.personality.nemesis:e.trickster?e.personality.trickster:e.critic?e.personality.critic:e.demon?e.personality.demon:void 0;return Object(b.jsx)("td",{style:c,onMouseOver:function(){r(e.personality.type)},onMouseOut:function(){r("")},children:n})};!function(e){e.Ni="Ni",e.Ne="Ne",e.Ti="Ti",e.Te="Te",e.Si="Si",e.Se="Se",e.Fi="Fi",e.Fe="Fe"}(r||(r={}));var v=r.Ni,g=r.Si,S=r.Ti,T=r.Fi,k=r.Ne,F=r.Se,N=r.Te,I=r.Fe,P={type:"INTJ",hero:v,parent:N,child:T,nemesis:k,inferior:F,critic:S,trickster:I,demon:g},E={type:"ENTJ",hero:N,parent:v,child:F,nemesis:S,inferior:T,critic:k,trickster:g,demon:I},J={type:"ESTJ",hero:N,parent:g,child:k,nemesis:S,inferior:T,critic:F,trickster:v,demon:I},w={type:"ENFJ",hero:I,parent:v,child:F,nemesis:T,inferior:S,critic:k,trickster:g,demon:N},C={type:"ESFJ",hero:I,parent:g,child:k,nemesis:T,inferior:S,critic:F,trickster:v,demon:N},M={type:"ENFP",hero:k,parent:T,child:N,nemesis:v,inferior:g,critic:I,trickster:S,demon:F},R={type:"ENTP",hero:k,parent:S,child:I,nemesis:v,inferior:g,critic:N,trickster:T,demon:F},A={type:"ESFP",hero:F,parent:T,child:N,nemesis:g,inferior:v,critic:I,trickster:S,demon:k},L={type:"ESTP",hero:F,parent:S,child:I,nemesis:g,inferior:v,critic:N,trickster:T,demon:k},W={type:"INFJ",hero:v,parent:I,child:S,nemesis:k,inferior:F,critic:T,trickster:N,demon:g},B={type:"ISTJ",hero:g,parent:N,child:T,nemesis:F,inferior:k,critic:S,trickster:I,demon:v},D={type:"ISFJ",hero:g,parent:I,child:S,nemesis:F,inferior:k,critic:T,trickster:N,demon:v},H={type:"INTP",hero:S,parent:k,child:g,nemesis:N,inferior:I,critic:v,trickster:F,demon:T},q={type:"ISTP",hero:S,parent:F,child:v,nemesis:N,inferior:I,critic:g,trickster:k,demon:T},z={type:"INFP",hero:T,parent:k,child:g,nemesis:I,inferior:N,critic:v,trickster:F,demon:S},G={type:"ISFP",hero:T,parent:F,child:v,nemesis:I,inferior:N,critic:g,trickster:k,demon:S},K=[P,W,H,z,B,D,q,G],Q=[E,w,R,M,J,C,L,A],U=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{personalities:K,title:"Introverts:"}),Object(b.jsx)(f,{personalities:Q,title:"Extroverts:"})]})},V=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/",children:"Comparison"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:"/cognitiveFunctions",children:"Cognitive functions"})})]})})})},X=function(e){var t=e.selectedTypes,i=e.personality;return Object(b.jsx)("div",{style:{position:"absolute",right:"0.5rem",top:"0.1rem",background:"rgba(0,0,0,0.2)",padding:"0.1rem",borderRadius:"3px"},children:t.indexOf(i.type)+1})},Y=function(e){var t=e.personality,i=e.activeTypeState,r=e.selectedTypesState,c=Object(l.a)(i,2),n=c[0],s=c[1],o=Object(l.a)(r,2),j=o[0],a=o[1],p=n===t.type,h=j.includes(t.type);return Object(b.jsxs)("div",{onMouseOver:function(){return s(t.type)},onMouseOut:function(){return s("")},onClick:function(){var e=t.type,i=j.includes(e);a((function(t){return i?t.filter((function(t){return t!==e})):2===t.length?t:[].concat(Object(d.a)(t),[e])}))},style:{background:Z(t.type,h,p),width:"6rem",height:"3rem",border:"2px solid black",borderRadius:"6px",position:"relative",userSelect:"none"},children:[h&&Object(b.jsx)(X,{personality:t,selectedTypes:j}),Object(b.jsx)("div",{style:{width:"6rem",height:"3rem",textAlign:"center",lineHeight:"3rem",fontWeight:p?"bold":"initial",position:"absolute"},children:t.type})]})};function Z(e,t,i){var r="N"===e[1],c="S"===e[1],n="T"===e[2],s="F"===e[2],o="J"===e[3],j="P"===e[3];return r&&n&&t?"violet":r&&s&&t?"lightgreen":c&&o&&t?"lightblue":j&&t?"yellow":i?"lightgray":"white"}var $=function(e){var t=e.types,i=e.activeTypeState,r=e.selectedTypesState,c=Object(l.a)(t,4),n=c[0],s=c[1],o=c[2],j=c[3];return Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(Y,{personality:n,activeTypeState:i,selectedTypesState:r})}),Object(b.jsx)("td",{children:Object(b.jsx)(Y,{personality:s,activeTypeState:i,selectedTypesState:r})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(Y,{personality:o,activeTypeState:i,selectedTypesState:r})}),Object(b.jsx)("td",{children:Object(b.jsx)(Y,{personality:j,activeTypeState:i,selectedTypesState:r})})]})]})},_={textAlign:"center"},ee=function(){var e=[P,W,H,z],t=[B,D,q,G],i=[E,w,R,M],r=[J,C,L,A],n=Object(c.useState)(""),s=Object(c.useState)([]);return Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{style:_,children:"Intuitives"})}),Object(b.jsx)("div",{style:_,children:"Sensors"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Introverted"}),Object(b.jsx)("td",{children:Object(b.jsx)($,{types:e,activeTypeState:n,selectedTypesState:s})}),Object(b.jsx)("td",{children:Object(b.jsx)($,{types:t,activeTypeState:n,selectedTypesState:s})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("div",{children:"Extroverted"})}),Object(b.jsx)("td",{children:Object(b.jsx)($,{types:i,activeTypeState:n,selectedTypesState:s})}),Object(b.jsx)("td",{children:Object(b.jsx)($,{types:r,activeTypeState:n,selectedTypesState:s})})]})]})};var te=function(){return Object(b.jsxs)(j.a,{basename:"/",children:[Object(b.jsx)(V,{}),Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{exact:!0,path:"/",children:Object(b.jsx)(ee,{})}),Object(b.jsx)(a.a,{path:"/cognitiveFunctions",children:Object(b.jsx)(U,{})})]})]})},ie=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),r(e),c(e),n(e),s(e)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(te,{})}),document.getElementById("root")),ie()}},[[31,1,2]]]);
//# sourceMappingURL=main.a784c668.chunk.js.map