(this.webpackJsonpportfolio_front_end=this.webpackJsonpportfolio_front_end||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(58),s=a.n(c),i=(a(73),a(22)),o=a(3),l=a(1),u=a.n(l),m=a(2),p=a(8),d=a(9),f=a(11),h=a(10),v=a(59),E=a.n(v),b=a(23),k=a.n(b),x=a(60),w=a.n(x).a.create({baseURL:"https://jadersonaires-service.herokuapp.com"}),j=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/about/front-end");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(e){if(N(e)>=3){var t=g(e).slice(1,-1).join(" "),a=y(t);return g(e).slice(0,1)+" "+a+" "+g(e).slice(-1)}var n=g(e).slice(-1).join(" "),r=y(n);return g(e).slice(0,1)+" "+r},y=function(e){return"<span>"+e+"</span>"},g=function(e){return e.split(" ")},N=function(e){return e.split(" ").length},A=(a(137),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:"",email:"",address:"",description:"",image:"",loading:!1},e.componentDidMount=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:a=t.sent,e.setState({name:O(a.name),phone:a.phone,email:a.email,address:a.adress,description:a.description,image:null,loading:!0});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"auto",style:{width:"100%"}},r.a.createElement("h1",null,r.a.createElement(k.a,{type:"textRow",delay:2e3,showLoadingAnimation:!0,ready:this.state.loading,color:"#E0E0E0"},E()(this.state.name))),r.a.createElement("div",{className:"subheading"},r.a.createElement(k.a,{type:"textRow",delay:2e3,showLoadingAnimation:!0,ready:this.state.loading,color:"#E0E0E0"},this.state.address,"\xb7 ",this.state.phone," \xb7",r.a.createElement("a",{href:"/",className:"text-small-color"},this.state.email))),r.a.createElement("div",{className:"about-description"},r.a.createElement(k.a,{type:"text",delay:2e3,showLoadingAnimation:!0,ready:this.state.loading,rows:2,color:"#E0E0E0"},this.state.description)))))}}]),a}(n.Component)),L=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/awards");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=a(67),M=(a(138),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={awards:[]},e.componentDidMount=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:a=t.sent,e.setState({awards:a});case 4:case"end":return t.stop()}}),t)}))),e.eachAwards=function(){return(e.state.awards||[]).map((function(e){return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement(S.a,{color:"#ffc107",size:20}),r.a.createElement("div",null,e.certifications))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"awards"},r.a.createElement("div",{className:"auto"},r.a.createElement("h2",null,"Awards & Certifications"),r.a.createElement("article",null,this.eachAwards())))}}]),a}(n.Component)),C=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/education");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),H=a(26),D=a.n(H),R=(a(140),function(e,t,a){return D()(e).locale("pt-br").format("MMM [de] YYYY")}),G=(a(141),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={education:[]},e.componentDidMount=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:a=t.sent,e.setState({education:a});case 4:case"end":return t.stop()}}),t)}))),e.eachEducation=function(){return(e.state.education||[]).map((function(e){return r.a.createElement("article",{key:e.id},r.a.createElement("div",{className:"description"},r.a.createElement("h4",null,e.institution),r.a.createElement("p",null,e.course),r.a.createElement("div",null,e.description)),r.a.createElement("div",{className:"date"},R(e.dateStart)," - ",R(e.dateLast)))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"education"},r.a.createElement("div",{className:"auto"},r.a.createElement("h2",null,"Education"),this.eachEducation()))}}]),a}(n.Component)),Y=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/experience");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=(a(142),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={experience:[]},e.componentDidMount=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y();case 2:a=t.sent,e.setState({experience:a});case 4:case"end":return t.stop()}}),t)}))),e.eachExperience=function(){return(e.state.experience||[]).map((function(e){return r.a.createElement("article",{key:e.id},r.a.createElement("div",{className:"description"},r.a.createElement("h4",null,e.campany),r.a.createElement("p",null,e.occupation),r.a.createElement("div",null,e.description)),r.a.createElement("div",{className:"date"},R(e.dateStart)," - ",R(e.dateLast)))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"experience"},r.a.createElement("div",{className:"auto"},r.a.createElement("h2",null,"Experience"),this.eachExperience()))}}]),a}(n.Component)),F=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/interests");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=(a(143),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",description:""},e.componentDidMount=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F();case 2:a=t.sent,e.setState({name:a.name,description:a.description});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"interests"},r.a.createElement("div",{className:"auto"},r.a.createElement("h2",null,this.state.name),r.a.createElement("div",null,this.state.description)))}}]),a}(n.Component)),J=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/skills");case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=(a(144),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={skills:[]},e.componentDidMount=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:a=t.sent,e.setState({skills:a});case 4:case"end":return t.stop()}}),t)}))),e.eachSkills=function(){return(e.state.skills||[]).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("i",{className:e.icon}))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"skills"},r.a.createElement("div",{className:"auto"},r.a.createElement("h2",null,"Skills"),r.a.createElement("article",null,r.a.createElement("p",null,"PROGRAMMING LANGUAGES & TOOLS"),r.a.createElement("ul",null,this.eachSkills()))))}}]),a}(n.Component)),U=(a(145),a(146),a(61));function z(){var e=Object(U.a)(["\n    width: 100%;\n"]);return z=function(){return e},e}var P=a(62).a.div(z()),T=function(){return r.a.createElement(P,null,r.a.createElement(A,null),r.a.createElement(_,null),r.a.createElement(G,null),r.a.createElement(B,null),r.a.createElement(I,null),r.a.createElement(M,null))},q=a(13),K=a(66),Q=a.n(K),V=(a(151),function(){var e=Object(o.l)();return r.a.createElement("nav",{id:"navFixed"},r.a.createElement(q.HashLink,{smooth:!0,to:"#about",className:"profile"},r.a.createElement("img",{src:Q.a,width:"150",height:"150",alt:"Jaderson Aires Ferreira"})),r.a.createElement("menu",{className:"menu"},r.a.createElement("div",{className:"item"},r.a.createElement(q.HashLink,{smooth:!0,to:"#about",className:"#about"==="".concat(e.hash)||""==="".concat(e.hash)?"active":""},"About")),r.a.createElement("div",{className:"item"},r.a.createElement(q.HashLink,{smooth:!0,to:"#experience",className:"#experience"==="".concat(e.hash)?"active":""},"Experience")),r.a.createElement("div",{className:"item"},r.a.createElement(q.HashLink,{smooth:!0,to:"#education",className:"#education"==="".concat(e.hash)?"active":""},"Education")),r.a.createElement("div",{className:"item"},r.a.createElement(q.HashLink,{smooth:!0,to:"#skills",className:"#skills"==="".concat(e.hash)?"active":""},"Skills")),r.a.createElement("div",{className:"item"},r.a.createElement(q.HashLink,{smooth:!0,to:"#interests",className:"#interests"==="".concat(e.hash)?"active":""},"Interests")),r.a.createElement("div",{className:"item"},r.a.createElement(q.HashLink,{smooth:!0,to:"#awards",className:"#awards"==="".concat(e.hash)?"active":""},"Awards"))))}),W=function(){return r.a.createElement(i.BrowserRouter,null,r.a.createElement(V,null),r.a.createElement(o.g,null,r.a.createElement(o.d,{exact:!0,path:"/",component:T})))};var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};s.a.render(r.a.createElement(X,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a.p+"static/media/profile.6367b76e.jpg"},68:function(e,t,a){e.exports=a(152)},73:function(e,t,a){},99:function(e,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.03f81bbc.chunk.js.map