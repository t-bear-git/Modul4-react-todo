(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(t,e,o){},61:function(t,e,o){},62:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),a=o.n(r),c=o(29),s=o.n(c),d=(o(38),o(32)),i=o(8),l=o(9),p=o(11),u=o(10),j=o(14),b=o(2);var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f={color:"#fff",textDecoration:"none"},m=function(){return Object(n.jsxs)("header",{style:h,children:[Object(n.jsx)("h1",{children:"TodoList"}),Object(n.jsx)(j.b,{style:f,to:"/Modul4-react-todo",children:"Home"})," ","|"," ",Object(n.jsx)(j.b,{style:f,to:"/about",children:"About"})]})},O=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o,Object(n.jsx)("button",{style:x,onClick:this.props.deleteTodo.bind(this,e),children:"x"})]})})}}]),o}(a.a.Component),x={background:"red",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},v=O,y=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(v,{todo:e,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo},e.id)}))}}]),o}(a.a.Component),g=o(31),k=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add todo ...",value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(a.a.Component);var C=function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"React crash course TodoList app v1.0.0."})]})},S=o(15),T=o.n(S),A=(o(61),function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={todos:[]},t.markComplete=function(e){var o=t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));t.setState({todos:o})},t.deleteTodo=function(e){T.a.delete("http://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(e){return t.setState({todos:o})}));var o=t.state.todos.filter((function(t){return!(t.id===e)}))},t.addTodo=function(e){T.a.post("http://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(d.a)(t.state.todos),[e.data])})}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;T.a.get("http://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{}),Object(n.jsx)(b.a,{exact:!0,path:"/Modul4-react-todo/",render:function(e){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(k,{addTodo:t.addTodo}),Object(n.jsx)(y,{todos:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo})]})}}),Object(n.jsx)(b.a,{path:"/about",component:C})]})})})}}]),o}(a.a.Component));s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.29b84cbc.chunk.js.map