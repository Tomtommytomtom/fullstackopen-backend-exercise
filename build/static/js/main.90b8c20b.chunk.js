(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),l=function(e){var n=e.name,t=e.number,a=e.id,c=e.onClick;return r.a.createElement("div",null,r.a.createElement("li",null,n," ",t," ",r.a.createElement("button",{onClick:function(){return c(a,n)}},"delete")))},i=function(e){var n=e.persons,t=e.onClick;return r.a.createElement("div",null,function(e,n){return e.map((function(e){return r.a.createElement(l,{key:e.id,id:e.id,name:e.name,number:e.number,onClick:n})}))}(n,t))},m=function(e){var n=e.onSubmit,t=e.nameValue,a=e.nameOnChange,c=e.numberValue,u=e.numberOnChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter: ",r.a.createElement("input",{value:n,onChange:t}))},f=t(3),s=t.n(f),b="/api/persons",h=function(e){return s.a.get("".concat(b,"/").concat(e))},v=function(){return s.a.get(b).then((function(e){return e.data}))},g=function(e){return s.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return console.log("".concat(b,"/").concat(e)),s.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return s.a.delete("".concat(b,"/").concat(e))},C=function(e){var n=e.message,t=e.styles;return null===n?null:r.a.createElement("div",{style:t},r.a.createElement("p",null,n))},O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),f=l[0],s=l[1],b=Object(a.useState)(""),O=Object(o.a)(b,2),k=O[0],j=O[1],w=Object(a.useState)(""),y=Object(o.a)(w,2),x=y[0],S=y[1],D=Object(a.useState)(null),V=Object(o.a)(D,2),A=V[0],J=V[1],L=Object(a.useState)(null),N=Object(o.a)(L,2),P=N[0],R=N[1],T=function(e){console.log("error"),J(e),setTimeout((function(){J(null)}),5e3)},B=function(e){R(e),setTimeout((function(){R(null)}),5e3)};Object(a.useEffect)((function(){v().then((function(e){c(e)}))}),[]);var I,q=function(e){return t.find((function(n){return e===n.name}))},z=function(e,n){window.confirm("Delete ".concat(n," ?"))&&E(e).then((function(){var a=t.filter((function(n){return n.id!==e}));c(a),B("Deleted ".concat(n))})).catch((function(e){T("Deleted person couldnt be found"),v().then((function(e){c(e)}))}))};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(C,{message:A,styles:{color:"red",border:"solid red 4px",borderRadius:10,backgroundColor:"rgba(255,0,0,0.3)",margin:"20px 0px",textAlign:"center"}}),r.a.createElement(C,{message:P,styles:{color:"green",border:"solid green 4px",borderRadius:10,backgroundColor:"rgba(0,255,0,0.3)",margin:"20px 0px",textAlign:"center"}}),r.a.createElement(d,{value:x,onChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{onSubmit:function(e){if(q(f)){if(window.confirm("".concat(f," is already in the Phonebook, replace old Number with a new one?"))){var n=t.find((function(e){return e.name===f}));h(n.id).catch((function(e){return T("".concat(n.name," has already been removed."))}));var a={name:n.name,number:k};p(n.id,a).then((function(e){return c(e)}))}}else{e.preventDefault();var r={name:f,number:k};g(r).then((function(e){c(t.concat(e)),s(""),j(""),B("Added ".concat(r.name))})).catch((function(e){return T("".concat(r.name," has already been removed."))}))}},nameValue:f,nameOnChange:function(e){s(e.target.value)},numberValue:k,numberOnChange:function(e){j(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),""===x?r.a.createElement(i,{onClick:z,persons:t}):r.a.createElement(i,{onClick:z,persons:(I=x,t.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())})))}))};u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.90b8c20b.chunk.js.map