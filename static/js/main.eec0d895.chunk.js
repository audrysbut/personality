(this.webpackJsonppersonality=this.webpackJsonppersonality||[]).push([[0],{21:function(e,t,i){},28:function(e,t,i){"use strict";i.r(t);var r,c=i(0),n=i.n(c),s=i(13),o=i.n(s),j=(i(21),i(16)),l=i(2),d=i(5),a=i(7),h=i(1),b={width:"70px",border:"1px solid black",borderRadius:"3px",padding:"10px"},p={background:"lightgreen",fontWeight:"bold"},O={background:"lightgreen"},x=function(e){var t=e.title;return Object(h.jsx)("td",{style:Object(a.a)(Object(a.a)({},b),O),children:t})},m=function(e){var t=e.personalities,i=e.title,r=t.map((function(e){return Object(h.jsx)("td",{style:Object(a.a)(Object(a.a)({},b),p),children:e.type})})),c=t.map((function(e){return Object(h.jsx)(f,{title:e.hero})})),n=t.map((function(e){return Object(h.jsx)(f,{title:e.parent})})),s=t.map((function(e){return Object(h.jsx)(f,{title:e.child})})),o=t.map((function(e){return Object(h.jsx)(f,{title:e.nemesis})})),j=t.map((function(e){return Object(h.jsx)(f,{title:e.inferior})})),l=t.map((function(e){return Object(h.jsx)(f,{title:e.critic})})),O=t.map((function(e){return Object(h.jsx)(f,{title:e.trickster})})),m=t.map((function(e){return Object(h.jsx)(f,{title:e.demon})})),u=Object(h.jsx)(x,{title:"Type:"}),y=Object(h.jsx)(x,{title:"Hero:"}),k=Object(h.jsx)(x,{title:"Parent:"}),g=Object(h.jsx)(x,{title:"Child:"}),F=Object(h.jsx)(x,{title:"Nemesis:"}),T=Object(h.jsx)(x,{title:"Inferior:"}),S=Object(h.jsx)(x,{title:"Critic:"}),N=Object(h.jsx)(x,{title:"Trickster:"}),v=Object(h.jsx)(x,{title:"Demon:"});return Object(h.jsxs)("div",{style:{paddingRight:"10px"},children:[Object(h.jsx)("div",{style:{textAlign:"left",paddingLeft:"10px",fontWeight:"bold"},children:i}),Object(h.jsxs)("table",{children:[Object(h.jsx)("tr",{children:[u].concat(Object(d.a)(r))}),Object(h.jsx)("tr",{children:[y].concat(Object(d.a)(c))}),Object(h.jsx)("tr",{children:[k].concat(Object(d.a)(n))}),Object(h.jsx)("tr",{children:[g].concat(Object(d.a)(s))}),Object(h.jsx)("tr",{children:[T].concat(Object(d.a)(j))}),Object(h.jsx)("tr",{children:[F].concat(Object(d.a)(o))}),Object(h.jsx)("tr",{children:[S].concat(Object(d.a)(l))}),Object(h.jsx)("tr",{children:[N].concat(Object(d.a)(O))}),Object(h.jsx)("tr",{children:[v].concat(Object(d.a)(m))})]})]})},f=function(e){var t=e.title;return Object(h.jsx)("td",{style:b,children:t})};!function(e){e.Ni="Ni",e.Ne="Ne",e.Ti="Ti",e.Te="Te",e.Si="Si",e.Se="Se",e.Fi="Fi",e.Fe="Fe"}(r||(r={}));var u=r.Ni,y=r.Si,k=r.Ti,g=r.Fi,F=r.Ne,T=r.Se,S=r.Te,N=r.Fe,v=[{type:"ENTJ",hero:S,parent:u,child:T,nemesis:k,inferior:g,critic:F,trickster:y,demon:N},{type:"ESTJ",hero:S,parent:y,child:F,nemesis:k,inferior:g,critic:T,trickster:u,demon:N},{type:"ENFJ",hero:N,parent:u,child:T,nemesis:g,inferior:k,critic:F,trickster:y,demon:S},{type:"ESFJ",hero:N,parent:y,child:F,nemesis:g,inferior:k,critic:T,trickster:u,demon:S},{type:"ENFP",hero:F,parent:g,child:S,nemesis:u,inferior:y,critic:N,trickster:k,demon:T},{type:"ENTP",hero:F,parent:k,child:N,nemesis:u,inferior:y,critic:S,trickster:g,demon:T},{type:"ESFP",hero:T,parent:g,child:S,nemesis:y,inferior:u,critic:N,trickster:k,demon:F},{type:"ESTP",hero:T,parent:k,child:N,nemesis:y,inferior:u,critic:S,trickster:g,demon:F},{type:"INFJ",hero:u,parent:N,child:k,nemesis:F,inferior:T,critic:g,trickster:S,demon:y},{type:"INTJ",hero:u,parent:S,child:g,nemesis:F,inferior:T,critic:k,trickster:N,demon:y},{type:"ISTJ",hero:y,parent:S,child:g,nemesis:T,inferior:F,critic:k,trickster:N,demon:u},{type:"ISFJ",hero:y,parent:N,child:k,nemesis:T,inferior:F,critic:g,trickster:S,demon:u},{type:"INTP",hero:k,parent:F,child:y,nemesis:S,inferior:N,critic:u,trickster:T,demon:g},{type:"ISTP",hero:k,parent:T,child:u,nemesis:S,inferior:N,critic:y,trickster:F,demon:g},{type:"INFP",hero:g,parent:F,child:y,nemesis:N,inferior:S,critic:u,trickster:T,demon:k},{type:"ISFP",hero:g,parent:T,child:u,nemesis:N,inferior:S,critic:y,trickster:F,demon:k}],I=v.filter((function(e){return e.type.startsWith("I")})),E=v.filter((function(e){return e.type.startsWith("E")})),P=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{personalities:I,title:"Introverts:"}),Object(h.jsx)(m,{personalities:E,title:"Extroverts: "})]})};var J=function(){return Object(h.jsx)(j.a,{basename:"/",children:Object(h.jsx)("div",{children:Object(h.jsx)(l.c,{children:Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(P,{})})})})})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,29)).then((function(t){var i=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),r(e),c(e),n(e),s(e)}))};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),C()}},[[28,1,2]]]);
//# sourceMappingURL=main.eec0d895.chunk.js.map