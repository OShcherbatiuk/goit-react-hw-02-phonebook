(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={item:"ContactList_item__1PLqk",btn:"ContactList_btn__2rLTJ"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(13),i=n.n(c),s=n(14),o=n(4),l=n(5),u=n(8),b=n(7),d=n(6),m=n(12),h=n(2),j=n.n(h),p=n(31),f=n(9),O=n.n(f),C=n(0),v={name:"",number:""},x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=Object(m.a)({},v),t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({id:Object(p.a)()},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState(Object(m.a)({},v))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(C.jsx)("input",{className:O.a.lable,type:"text",name:"name",id:this.nameInputId,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(C.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(C.jsx)("input",{className:O.a.lable,type:"tel",name:"number",id:this.numberInputId,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(C.jsx)("button",{className:O.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),g=n(10),y=n.n(g),S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:y.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(C.jsxs)("li",{className:y.a.item,children:[a,": ",r,Object(C.jsx)("button",{className:y.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},I=j.a.generate(),_=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{htmlFor:I,children:["Find contacts by name",Object(C.jsx)("input",{id:I,type:"text",value:e,onChange:n})]})},A=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is alredy in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContact=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContact(),e=this.state.filter;return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(x,{onSubmit:this.formSubmitHandler}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(_,{value:e,onChange:this.changeFilter}),Object(C.jsx)(S,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(28);i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={lable:"ContactForm_lable__3FeD7",btn:"ContactForm_btn__JpNUf"}}},[[29,1,2]]]);
//# sourceMappingURL=main.bf4cdca8.chunk.js.map