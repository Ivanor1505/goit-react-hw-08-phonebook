"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[683],{2683:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return D}});var r,i,a,o,s,c,l,u,d,x,m=t(2791),p=t(9434),f=t(8700),h=t(367),Z=function(n){return n.contacts.items},b=function(n){return n.filter},j=t(168),v=t(5867),g=v.ZP.div(r||(r=(0,j.Z)(["\nmargin-left: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n"]))),y=v.ZP.input(i||(i=(0,j.Z)(["\nwidth: 200px;\n"]))),w=t(184),P=function(){var n=(0,p.v9)(b),e=(0,p.I0)();return(0,w.jsxs)(g,{children:[(0,w.jsx)("label",{children:"Filter contacts by name:"}),(0,w.jsx)(y,{type:"text",name:"filter",onChange:function(n){return e((0,h.M)(n.target.value))},value:n})]})},k=v.ZP.button(a||(a=(0,j.Z)(["\ndisplay: block;\nmargin-top: 10px;\nheight: 25px;\n"]))),C=v.ZP.li(o||(o=(0,j.Z)(["\ndisplay: flex;\ngap: 20px;\n"]))),_=function(n){var e=n.contact,t=(0,p.I0)();return(0,w.jsxs)(C,{children:[(0,w.jsxs)("p",{children:[e.name,": ",e.number]}),(0,w.jsx)(k,{onClick:function(n){return t((0,f.GK)(n.target.id))},id:e.id,children:"Delete"})]})},I=v.ZP.ul(s||(s=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n"]))),N=function(){var n=(0,p.v9)(b),e=(0,p.v9)(Z);return(0,w.jsx)(I,{children:(n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e).map((function(n){return(0,w.jsx)(_,{contact:n},n.id)}))})},q=t(5705),A=t(6727),F=(0,v.ZP)(q.l0)(c||(c=(0,j.Z)(["\nmargin-left: 20px;\npadding: 10px;\nwidth: 400px;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nborder: 2px solid black;\nborder-radius: 10px;\n"]))),L=(0,v.ZP)(q.gN)(l||(l=(0,j.Z)(["\nwidth: 200px;\n"]))),z=v.ZP.button(u||(u=(0,j.Z)(["\nheight: 40px;\nwidth: 200px;\nborder: 2px solid black;\nborder-radius: 10px;\n"]))),K=v.ZP.label(d||(d=(0,j.Z)(["\nline-height: 20px;\ndisplay: flex;\nflex-direction: column;\n"]))),S=(0,v.ZP)(q.Bc)(x||(x=(0,j.Z)(["\ncolor: red;\n"]))),$=A.Ry({name:A.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name must contain only letters, apostrophe, dash, and spaces").required("Name is required"),number:A.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Invalid phone number format").required("Phone number is required")}),B=function(){var n=(0,p.I0)(),e=(0,p.v9)(Z),t=function(t){!function(n){return e.some((function(e){return n.name.toLowerCase()===e.name.toLowerCase()}))}(t)?n((0,f.uK)(t)):alert("the contact already exists")};return(0,w.jsx)(q.J9,{initialValues:{name:"",number:""},validationSchema:$,onSubmit:function(n,e){var r=e.resetForm;t(n),r()},children:(0,w.jsxs)(F,{children:[(0,w.jsxs)(K,{children:["Name",(0,w.jsx)(L,{name:"name",type:"text"}),(0,w.jsx)(S,{name:"name",component:"div"})]}),(0,w.jsxs)(K,{children:["Number",(0,w.jsx)(L,{name:"number",type:"tel"}),(0,w.jsx)(S,{name:"number",component:"div"})]}),(0,w.jsx)(z,{type:"submit",children:"Add contact"})]})})},D=function(){var n=(0,p.I0)();return(0,m.useEffect)((function(){n((0,f.yF)())}),[n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(B,{}),(0,w.jsx)(P,{}),(0,w.jsx)(N,{})]})}}}]);
//# sourceMappingURL=683.0ca38727.chunk.js.map