(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(4),o=n.n(i),r=(n(16),n(5)),c=n(6),s=n(8),u=n(7),h=n(9),m=n(2),p=n(1),d=(n(19),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={display:"authenticator_disable"},n.onClick=n.onClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(e){console.log("display: ",e),this.setState({display:e})}},{key:"render",value:function(){this.state.display;var e=this.props;e.login,e.getPasswordStrength;return l.a.createElement("div",{className:"App",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:20}},l.a.createElement("h4",null,"Auth component (Sign-in/Sign-up flow, will need to have CORs plugin similar to",l.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en"}," ","this"),")"),l.a.createElement(p.Auth,{initialDisplayComponent:"login"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Password Reset"),l.a.createElement(p.Auth,{initialDisplayComponent:"password_update"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Setup Authenticator"),l.a.createElement(p.Auth,{initialDisplayComponent:"authenticator_setup"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Disable Authenticator"),l.a.createElement(p.Auth,{initialDisplayComponent:"authenticator_disable"}))}}]),t}(a.Component)),b=Object(p.withAuth)(d);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.ff8fd8c9.chunk.js.map