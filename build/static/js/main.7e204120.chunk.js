(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=function(e){var n=e.name,t=e.number,a=e.id,u=e.onClick;return r.a.createElement("div",null,r.a.createElement("li",null,n," ",t," ",r.a.createElement("button",{onClick:function(){return u(a,n)}},"delete")))},i=function(e){var n=e.persons,t=e.onClick;return r.a.createElement("div",null,function(e,n){return e.map((function(e){return r.a.createElement(l,{key:e.id,id:e.id,name:e.name,number:e.number,onClick:n})}))}(n,t))},m=function(e){var n=e.onSubmit,t=e.nameValue,a=e.nameOnChange,u=e.numberValue,c=e.numberOnChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter: ",r.a.createElement("input",{value:n,onChange:t}))},d=t(3),f=t.n(d),b="/api/persons",p=function(e){return f.a.get("".concat(b,"/").concat(e))},h=function(){return f.a.get(b).then((function(e){return e.data}))},v=function(e){return f.a.post(b,e).then((function(e){return e.data}))},E=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return f.a.delete("".concat(b,"/").concat(e))},C=function(e){var n=e.message,t=e.styles;return null===n?null:r.a.createElement("div",{style:t},r.a.createElement("p",null,n))},O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),d=l[0],f=l[1],b=Object(a.useState)(""),O=Object(o.a)(b,2),k=O[0],j=O[1],w=Object(a.useState)(""),x=Object(o.a)(w,2),y=x[0],S=x[1],D=Object(a.useState)(null),V=Object(o.a)(D,2),A=V[0],J=V[1],L=Object(a.useState)(null),N=Object(o.a)(L,2),P=N[0],R=N[1],T=function(){h().then((function(e){u(e)}))},B=function(e){J(e),setTimeout((function(){J(null)}),5e3)},I=function(e){R(e),setTimeout((function(){R(null)}),5e3)};Object(a.useEffect)((function(){h().then((function(e){u(e)}))}),[]);var q,z=function(e){return t.find((function(n){return e===n.name}))},F=function(e,n){window.confirm("Delete ".concat(n," ?"))&&g(e).then((function(e){T(),I("Deleted ".concat(n))})).catch((function(e){B("Deleted person couldnt be found"),T()}))};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(C,{message:A,styles:{color:"red",border:"solid red 4px",borderRadius:10,backgroundColor:"rgba(255,0,0,0.3)",margin:"20px 0px",textAlign:"center"}}),r.a.createElement(C,{message:P,styles:{color:"green",border:"solid green 4px",borderRadius:10,backgroundColor:"rgba(0,255,0,0.3)",margin:"20px 0px",textAlign:"center"}}),r.a.createElement(s,{value:y,onChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{onSubmit:function(e){if(z(d)){if(window.confirm("".concat(d," is already in the Phonebook, replace old Number with a new one?"))){var n=t.find((function(e){return e.name===d}));p(n.id).catch((function(e){return B("".concat(n.name," has already been removed."))}));var a={name:n.name,number:k};E(n.id,a).then(T())}}else{e.preventDefault();var r={name:d,number:k};v(r).then((function(e){console.log("inside promise, not supposed to happen"),u(t.concat(e)),f(""),j(""),I("Added ".concat(r.name))})).catch((function(e){B(e.response.data.error)}))}},nameValue:d,nameOnChange:function(e){f(e.target.value)},numberValue:k,numberOnChange:function(e){j(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),""===y?r.a.createElement(i,{onClick:F,persons:t}):r.a.createElement(i,{onClick:F,persons:(q=y,t.filter((function(e){return e.name.toLowerCase().includes(q.toLowerCase())})))}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7e204120.chunk.js.map