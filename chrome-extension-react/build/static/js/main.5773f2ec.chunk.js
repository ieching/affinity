(this["webpackJsonpaffinity-react"]=this["webpackJsonpaffinity-react"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/icon-question.df60c05f.png"},,,function(e,t,a){e.exports=a.p+"static/media/logoface-affinity-grey.7f9b856d.png"},function(e,t,a){e.exports=a.p+"static/media/coloredScale.2b22049f.png"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c);a(16);var i={width:"26px",height:"26px",padding:"6px"},o={display:"block",margin:"auto",maxHeight:"100%",maxWidth:"100%"},s=function(e){return r.a.createElement("div",{className:"br-100 bg-white",style:i},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:e.icon,style:o})))},m=a(6),u=a.n(m),p=a(9),f=a.n(p);var h={height:"52px"},d={width:"50px",height:"17px"},b=function(e){return r.a.createElement("div",{class:"pa3 flex justify-between",style:h},r.a.createElement(s,{icon:u.a}),r.a.createElement("img",{src:f.a,style:d,className:"tc pv2",alt:"logo"}),r.a.createElement(s,{icon:u.a}))},E=a(1),v=a(2),g=a(4),x=a(3),y=a(5),w=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"f7 avenir fl ttu tracked gray fw6 mv2"},this.props.text)}}]),t}(r.a.Component);w.defaultProps={text:"Placeholder"};var j=w,O=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"f6 avenir ttm dark-gray fw5 fn mv2",style:k},this.props.text)}}]),t}(r.a.Component);O.defaultProps={text:"Placeholder"};var k={whiteSpace:"nowrap"},N=O,F=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(g.a)(this,Object(x.a)(t).call(this,e))).state={content:"",author:"",publisher:""},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;chrome.runtime.onMessage.addListener((function(t,a,n){if("AFFINITY_ARTICLE_INFO"===t.type){var r=t.author,c=t.content,l=t.publisher;e.setState({author:r,content:c,publisher:l})}}))}},{key:"render",value:function(){var e=this.state,t=e.content,a=e.author,n=e.publisher;return r.a.createElement("div",{className:"bg-white flex flex-column pa3 ph4"},r.a.createElement(j,{text:"Title"}),r.a.createElement(N,{text:t}),r.a.createElement(j,{text:"Author"}),r.a.createElement(N,{text:a}),r.a.createElement(j,{text:"Publisher"}),r.a.createElement(N,{text:n}))}}]),t}(r.a.Component),I=a(10),T=a.n(I);var A={fontSize:"0.6rem",textAlign:"center"},C={width:"75px",height:"20px",background:"gray",borderRadius:"1px",display:"flex",justifyContent:"center",alignItems:"center"},L={width:"0",height:"0",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"6px solid gray"},R=function(e){return r.a.createElement("div",{className:"flex flex-column items-center"},r.a.createElement("div",{style:C},r.a.createElement("p",{className:"avenir ttu tracked fw5",style:A},"25% Right")),r.a.createElement("div",{style:L}))},P=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex flex-column items-center justify-around"},r.a.createElement("div",{className:"ma4 br2 bg-white w-90"},r.a.createElement("p",{className:"ma2 baskerville f4 fw5 tc mid-gray"},"Slightly Left-Leaning")),r.a.createElement("div",{className:"mh3 mb3 f7 avenir fl ttu tracked fw5"},r.a.createElement("div",{className:"flex justify-between moon-gray"},r.a.createElement(R,null),r.a.createElement("p",null,"100%"),r.a.createElement("p",null,"0%"),r.a.createElement("p",null,"100%")),r.a.createElement("img",{src:T.a,alt:"scale"}),r.a.createElement("div",{className:"flex justify-between gray"},r.a.createElement("p",null,"LEFT"),r.a.createElement("p",null,"MODERATE"),r.a.createElement("p",null,"RIGHT"))))}}]),t}(r.a.Component);var S={minWidth:"314px",background:"#F8F8F8"},W=function(){return r.a.createElement("div",{className:"App",style:S},r.a.createElement(b,null),r.a.createElement(F,null),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.5773f2ec.chunk.js.map