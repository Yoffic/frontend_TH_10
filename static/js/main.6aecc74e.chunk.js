(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{25:function(e,t,n){e.exports=n(55)},33:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),l=(n(33),n(56)),i=n(23),s=n(58),u=n(6),m=n(7),h=n(11),f=n(8),d=n(12),p=n(21),g=n.n(p),v=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:""}))},E=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No results found"),r.a.createElement("p",null,"That search did not return any results, please try again."))},w=function(e){var t,n=e.images;return t=n.length>0?n.map((function(e){return r.a.createElement(v,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id})})):r.a.createElement(E,null),r.a.createElement("ul",null,t)},y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],loading:!0},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("ccd3cbb40da951e1616089af7074f2b1","&tags=").concat(this.props.keyword,"&safe_search=1&content_type=1&per_page=12&format=json&nojsoncallback=1")).then((function(t){e.setState({images:t.data.photos.photo,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))}},{key:"render",value:function(){return this.state.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,this.props.keyword," results"),r.a.createElement(w,{images:this.state.images}))}}]),t}(a.Component),b=n(57),k=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.a,{to:"/cats"},"Cats")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/dogs"},"Dogs")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/birds"},"Birds"))))},j=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=n.keyword.value,a="/".concat(t);n.props.history.push(a)},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",required:!0,ref:function(t){return e.keyword=t}}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))),r.a.createElement(k,null))}}]),t}(a.Component),O=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Page Not Found"))},_=function(){return r.a.createElement(l.a,{basename:"/frontend_TH_10",forceRefresh:!0},r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{path:"/",component:j}),r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{keyword:"Sunset"})}}),r.a.createElement(i.a,{path:"/:keyword",render:function(e){var t=e.match;return r.a.createElement(y,{keyword:t.params.keyword})}}),r.a.createElement(i.a,{component:O}))))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/frontend_TH_10",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/frontend_TH_10","/service-worker.js");N?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.6aecc74e.chunk.js.map