(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,r){},45:function(e,t,r){},59:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){},84:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(14),c=r.n(s),i=(r(41),r(4)),l=(r(43),r(11)),o=r.n(l),u=r(12),j=r(15),b=r(16),d=r(17),h=r(20),p=r(19),x=(r(45),r(24)),O=r(2),f=r(9),m=(r(59),r(0)),y=function(e){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(i.b,{to:"/home",children:Object(m.jsx)("span",{children:"Play Browser"})}),Object(m.jsx)("a",{href:"https://comp4513-assign2.herokuapp.com/logout",children:Object(m.jsx)("button",{children:"Logout"})}),Object(m.jsx)("button",{onClick:function(){e.toggleAbout()},children:"About"}),Object(m.jsx)("button",{onClick:function(){e.toggleUser()},children:"Profile"})]})},v=(r(63),function(e){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("article",{className:"article",children:Object(m.jsxs)("form",{className:"form",children:[Object(m.jsx)("legend",{children:"Play Browser"}),Object(m.jsx)("label",{children:"Search Play Title"}),Object(m.jsx)("input",{id:"title",type:"text"}),Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{onClick:function(){var t=document.getElementById("title").value;e.setFilteredPlays({title:t},"title")},children:"Show Matching Plays"})}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{onClick:function(){e.setFilteredPlays({},"title")},children:"Show All Plays"})}),Object(m.jsx)("br",{})]})}),Object(m.jsx)("p",{children:"Phantom of the Opera at Istana Budaya, Kuala Lumpur. World Tour 2019."})]})}),g=(r(64),function(e){return Object(m.jsxs)("div",{className:"favourites-item",children:[Object(m.jsx)(i.b,{to:"/play-detail",children:Object(m.jsx)("span",{onClick:function(){var t;t=e.play,console.log(t),e.setCurrentPlay(t)},children:e.play.title})}),Object(m.jsx)("button",{onClick:function(){e.removeFromFavourites(e.play)},children:"Remove"})]})}),k=(r(65),function(e){var t=function(){var e=document.querySelector(".favourites-list").parentElement,t=document.getElementById("toggle-button");e.classList.contains("hide-favourites")?t.innerHTML="\u25b6":t.innerHTML="\u25c0"};return e.favourites?Object(m.jsxs)("div",{className:"favourites-list",children:[Object(m.jsx)("h1",{children:"Favourites"}),Object(m.jsx)("ul",{children:e.favourites.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)(g,{play:t,removeFromFavourites:e.removeFromFavourites,setCurrentPlay:e.setCurrentPlay})},t.id)}))}),Object(m.jsx)("button",{id:"toggle-button",onClick:function(){document.querySelector(".favourites-list").parentElement.classList.toggle("hide-favourites"),t()},children:"\u25c0"})]}):null}),C=(r(66),function(e){return Object(m.jsxs)("div",{className:"play-filters",children:[Object(m.jsxs)("form",{className:"filter-form",children:[Object(m.jsx)("h1",{className:"filter-header",children:"Play Filters"}),Object(m.jsx)("label",{className:"main",children:"Title"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"full",id:"title",type:"text"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"main",children:"Year"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"before-filters",children:[Object(m.jsx)("input",{id:"before",type:"checkbox"}),Object(m.jsx)("label",{className:"sub",children:"Before:"}),Object(m.jsx)("input",{className:"partial",id:"beforeYear",type:"text"})]}),Object(m.jsxs)("div",{className:"after-filters",children:[Object(m.jsx)("input",{id:"after",type:"checkbox"}),Object(m.jsx)("label",{className:"sub",children:"After:"}),Object(m.jsx)("input",{className:"partial",id:"afterYear",type:"text"})]}),Object(m.jsx)("label",{className:"main",children:"Genre"}),Object(m.jsx)("br",{}),Object(m.jsx)("select",{id:"genre",children:e.genres.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))})]}),Object(m.jsxs)("div",{className:"button-container",children:[Object(m.jsx)("button",{className:"filter-button",onClick:function(){var t=document.getElementById("title").value,r=document.getElementById("before").checked,n=document.getElementById("beforeYear").value,a=document.getElementById("after").checked,s=document.getElementById("afterYear").value,c=document.getElementById("genre").value;e.setFilteredPlays({title:t,before:r,beforeYear:n,after:a,afterYear:s,genre:c},null,!0)},children:"Filter"}),Object(m.jsx)("button",{className:"filter-button",onClick:function(){document.getElementById("title").value="",document.getElementById("before").checked=!1,document.getElementById("beforeYear").value="",document.getElementById("after").checked=!1,document.getElementById("afterYear").value="",document.getElementById("genre").value="",e.setFilteredPlays({},null,!0)},children:"Clear"})]})]})}),S=function(e){return Object(m.jsx)("button",{onClick:function(){e.addToFavourites(e.play)},children:"\u2665"})},P=(r(67),function(e){var t=function(t){e.setFilteredPlays({},t.target.title,!1)},r=function(t){e.setCurrentPlay(t)};return e.plays&&e.plays.length>0?Object(m.jsxs)("div",{className:"play-matches",children:[Object(m.jsx)("h1",{children:"List/Matches"}),Object(m.jsx)("table",{children:Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{title:"title",onClick:t,children:"Title"}),Object(m.jsx)("th",{title:"year",onClick:t,children:"Year"}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{})]})})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"table-body",children:Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{children:e.plays.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{onClick:function(){r(t)},children:Object(m.jsx)(i.b,{to:"/play-detail",children:t.title})}),Object(m.jsx)("td",{children:t.likelyDate}),Object(m.jsx)("td",{children:Object(m.jsx)(S,{play:t,addToFavourites:e.addToFavourites})}),Object(m.jsx)("td",{children:Object(m.jsx)(i.b,{to:"/play-detail",children:Object(m.jsx)("button",{onClick:function(){r(t)},children:"View"})})})]},t.id)}))})})}),Object(m.jsx)("hr",{})]}):Object(m.jsxs)("div",{className:"play-matches",children:[Object(m.jsx)("h1",{children:"List/Matches"}),Object(m.jsx)("p",{children:"No plays found!"})]})}),T=(r(68),function(e){return Object(m.jsxs)("div",{className:"play-list",children:[Object(m.jsx)(k,{favourites:e.favourites,removeFromFavourites:e.removeFromFavourites,setCurrentPlay:e.setCurrentPlay}),Object(m.jsx)(C,{filters:e.filters,setFilteredPlays:e.setFilteredPlays,genres:e.genres}),Object(m.jsx)(P,{plays:e.plays,setFilteredPlays:e.setFilteredPlays,addToFavourites:e.addToFavourites,setCurrentPlay:e.setCurrentPlay})]})}),N=(r(69),function(e){var t=function(){e.addToFavourites(e.play)},r=function(t){var r=t.target,n=r.name,a=r.value;e.setPlayFilter(n,a)};if("Text"===e.currentTab){var n=e.playData.acts,a=e.currentAct.scenes,s=["All Players"];return s.push.apply(s,Object(u.a)(Object(f.uniq)(e.currentScene.speeches.map((function(e){return e.speaker}))))),Object(m.jsxs)("div",{className:"play-overview",children:[Object(m.jsx)("h1",{children:e.play.title}),Object(m.jsx)("select",{name:"act",onChange:r,children:n.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.name)}))}),Object(m.jsx)("select",{name:"scene",onChange:r,children:a.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.name)}))}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("select",{name:"character",onChange:r,children:s.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))}),Object(m.jsx)("input",{type:"text",placeholder:"Enter a search term",onChange:function(t){e.setSearchText(t.target.value)}})]}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{children:"Close"})}),Object(m.jsx)("button",{onClick:t,children:"\u2665"})]})}return Object(m.jsxs)("div",{className:"play-overview",children:[Object(m.jsx)("h1",{children:e.play.title}),Object(m.jsx)("p",{children:e.play.synopsis}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{children:"Close"})}),Object(m.jsx)("button",{onClick:t,children:"\u2665"})]})}),F=(r(70),function(e){var t=function(t){t.target.title!==e.currentTab&&(t.target.classList.toggle("active"),e.setCurrentTab(t.target.title))},r=function(t){return t===e.currentTab?"active":""};return Object(m.jsx)("div",{className:"tab-bar",children:e.tabs.map((function(e){return Object(m.jsx)("button",{className:r(e),title:e,onClick:t,children:e},e)}))})}),D=r(36),I=r.n(D),A=(r(71),function(e){return"Details"===e.currentTab?Object(m.jsxs)("div",{className:"data-view",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Likely date of composition:"})," ",e.play.likelyDate]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Genre:"})," ",e.play.genre]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Wiki Link:"})," ",Object(m.jsx)("a",{href:e.play.wiki,children:e.play.wiki})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Gutenberg:"})," ",Object(m.jsx)("a",{href:e.play.gutenberg,children:e.play.gutenberg})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Shakespeare.org Link:"})," ",Object(m.jsx)("a",{href:e.play.shakespeareOrg,children:e.play.shakespeareOrg})]}),Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:"Description:"})}),Object(m.jsx)("p",{children:e.play.desc})]}):null===e.playData||null===e.currentAct?Object(m.jsx)("div",{className:"data-view"}):"Characters"===e.currentTab?Object(m.jsx)("div",{className:"data-view",children:e.playData.persona.map((function(e){return Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:e.player})," - ",e.desc?e.desc:"No description"]},e.player)}))}):Object(m.jsxs)("div",{className:"data-view",children:[Object(m.jsx)("h2",{children:e.playData.title}),Object(m.jsxs)("article",{id:"actHere",children:[Object(m.jsx)("h3",{children:e.currentAct.name}),Object(m.jsxs)("div",{id:"sceneHere",children:[Object(m.jsx)("h4",{children:e.currentScene.name}),Object(m.jsx)("p",{children:e.currentScene.title}),Object(m.jsx)("p",{children:e.currentScene.stageDirection}),e.currentScene.speeches.filter((function(t){return"All Players"===e.currentCharacter||e.currentCharacter===t.speaker})).map((function(t,r){return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"speaker",children:Object(m.jsx)("strong",{children:t.speaker})}),t.lines.map((function(t,r){return Object(m.jsx)("p",{className:"line",children:Object(m.jsx)(I.a,{searchWords:[e.searchText],textToHighlight:t})},r)}))]},r)}))]})]})]})}),w=function(e){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(F,{tabs:e.tabs,currentTab:e.currentTab,setCurrentTab:e.setCurrentTab}),Object(m.jsx)("hr",{}),Object(m.jsx)(A,{currentTab:e.currentTab,play:e.play,playData:e.playData,currentAct:e.currentAct,currentScene:e.currentScene,currentCharacter:e.currentCharacter,searchText:e.searchText}),Object(m.jsx)("hr",{})]})},L=(r(72),function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var n;Object(b.a)(this,r);var a=["Details","Characters","Text"];return(n=t.call(this,e)).state={currentTab:a[0],tabs:e.play.filename?a:[a[0]],playData:[],currentAct:null,currentScene:null,currentCharacter:"All Players",searchText:""},n}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,r,n,a,s,c=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.play.filename){e.next=26;break}if(t=this.props.savedPlayData.find((function(e){return e.id===c.props.play.id}))){e.next=23;break}return e.prev=3,r="https://comp4513-assign2.herokuapp.com/api/play/"+this.props.play.id,e.next=7,fetch(r);case 7:return n=e.sent,e.next=10,n.json();case 10:a=e.sent,s=a[0].playText,this.setState({playData:s}),this.setState({currentAct:s.acts[0]}),this.setState({currentScene:s.acts[0].scenes[0]}),this.props.savePlayData(this.props.play,s),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error("fetch error");case 21:e.next=26;break;case 23:this.setState({playData:t.data}),this.setState({currentAct:t.data.acts[0]}),this.setState({currentScene:t.data.acts[0].scenes[0]});case 26:case"end":return e.stop()}}),e,this,[[3,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"play-detail hide-favourites",children:[Object(m.jsx)(k,{favourites:this.props.favourites,removeFromFavourites:this.props.removeFromFavourites}),Object(m.jsx)(N,{currentTab:this.state.currentTab,play:this.props.play,playData:this.state.playData,currentAct:this.state.currentAct,currentScene:this.state.currentScene,addToFavourites:this.props.addToFavourites,setPlayFilter:function(t,r){if("act"===t){var n=e.state.playData.acts.find((function(e){return e.name===r}));e.setState({currentAct:n}),e.setState({currentScene:n.scenes[0]}),e.setState({currentCharacter:"All Players"})}else if("scene"===t){var a=e.state.currentAct.scenes.find((function(e){return e.name===r}));e.setState({currentScene:a}),e.setState({currentCharacter:"All Players"})}else"character"===t&&e.setState({currentCharacter:r})},setSearchText:function(t){e.setState({searchText:t})}}),Object(m.jsx)(w,{currentTab:this.state.currentTab,tabs:this.state.tabs,play:this.props.play,playData:this.state.playData,currentAct:this.state.currentAct,currentScene:this.state.currentScene,currentCharacter:this.state.currentCharacter,searchText:this.state.searchText,setCurrentTab:function(t){e.setState({currentTab:t})}})]})}}]),r}(a.a.Component)),B=L,E=r(18),M=r.n(E),Y=(r(82),function(e){return Object(m.jsxs)(M.a,{isOpen:e.modalIsOpen,contentLabel:"Example Modal",className:"about",children:[Object(m.jsx)("h1",{children:"About"}),Object(m.jsx)("p",{className:"subtitle",children:"Group Members"}),Object(m.jsx)("p",{children:"Brian Atuh"}),Object(m.jsx)("p",{className:"subtitle",children:"GitHub Link"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://github.com/batuh836/comp4513_assignment1",children:"Comp4513_Assignment1"})}),Object(m.jsx)("button",{onClick:function(){e.toggleModal()},children:"Close"})]})}),G=(r(83),function(e){if(e.user){var t=e.user.details,r=e.user.membership,n=e.user.picture;return Object(m.jsxs)(M.a,{isOpen:e.modalIsOpen,contentLabel:"Example Modal",className:"user",children:[Object(m.jsx)("h1",{children:"Profile"}),Object(m.jsxs)("span",{children:["Name: ",t.firstname," ",t.lastname]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["Location: ",t.city,", ",t.country]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["Joined: ",r.date_joined]}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{src:n.thumbnail,alt:"picture"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){e.toggleModal()},children:"Close"})]})}return null}),H=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(b.a)(this,r),(n=t.call(this,e)).state={user:null,plays:[],genres:[],currentPlay:null,filteredPlays:[],favourites:[],savedPlayData:[],aboutIsOpen:!1,userIsOpen:!1},n}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,r,n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://comp4513-assign2.herokuapp.com/user",e.next=4,fetch("https://comp4513-assign2.herokuapp.com/user");case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,this.setState({user:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("fetch error");case 14:if(this.state.plays.length){e.next=33;break}return e.prev=15,"https://comp4513-assign2.herokuapp.com/api/list",e.next=19,fetch("https://comp4513-assign2.herokuapp.com/api/list");case 19:return n=e.sent,e.next=22,n.json();case 22:a=e.sent,this.setState({plays:a}),this.setState({filteredPlays:a}),(s=[""]).push.apply(s,Object(u.a)(Object(f.uniq)(a.map((function(e){return e.genre}))))),this.setState({genres:s}),e.next=33;break;case 30:e.prev=30,e.t1=e.catch(15),console.error("fetch error");case 33:case"end":return e.stop()}}),e,this,[[0,11],[15,30]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=function(){e.state.aboutIsOpen?e.setState({aboutIsOpen:!1}):e.setState({aboutIsOpen:!0})},r=function(){e.state.userIsOpen?e.setState({userIsOpen:!1}):e.setState({userIsOpen:!0})},n=function(t,r,n){var a=n?Object(f.cloneDeep)(e.state.plays):Object(f.cloneDeep)(e.state.filteredPlays);t.title&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t.title.toLowerCase())}))),t.before&&t.beforeYear&&(a=a.filter((function(e){return e.likelyDate<t.beforeYear}))),t.after&&t.afterYear&&(a=a.filter((function(e){return e.likelyDate>t.afterYear}))),t.genre&&(a=a.filter((function(e){return e.genre===t.genre}))),r&&("title"===r?a=a.sort((function(e,t){var r=e.title.toLowerCase(),n=t.title.toLowerCase();return r>n?1:r<n?-1:0})):"year"===r&&(a=a.sort((function(e,t){return Number(e.likelyDate)-Number(t.likelyDate)})))),e.setState({filteredPlays:a})},a=function(t){var r=Object(u.a)(e.state.favourites);r.find((function(e){return e.id===t.id}))||r.push(t),e.setState({favourites:r})},s=function(t){var r=Object(u.a)(e.state.favourites),n=r.findIndex((function(e){return e.id===t.id}));r.splice(n,1),e.setState({favourites:r})};return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(O.a,{path:"/home",exact:!0,children:Object(m.jsx)(x.CSSTransitionGroup,{transitionName:"landing",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500,children:Object(m.jsx)(v,{setFilteredPlays:n})})}),Object(m.jsxs)(O.a,{path:"/play-list",exact:!0,children:[Object(m.jsx)(y,{toggleAbout:t,toggleUser:r}),Object(m.jsx)(T,{plays:this.state.filteredPlays,genres:this.state.genres,favourites:this.state.favourites,filters:this.state.filters,setFilteredPlays:n,addToFavourites:a,removeFromFavourites:s,setCurrentPlay:function(t){e.setState({currentPlay:t})}})]}),Object(m.jsxs)(O.a,{path:"/play-detail",exact:!0,children:[Object(m.jsx)(y,{toggleAbout:t,toggleUser:r}),Object(m.jsx)(B,{play:this.state.currentPlay,savedPlayData:this.state.savedPlayData,favourites:this.state.favourites,addToFavourites:a,removeFromFavourites:s,savePlayData:function(t,r){var n=Object(f.cloneDeep)(e.state.savedPlayData);n.push({id:t.id,data:r}),e.setState({savedPlayData:n})}})]}),Object(m.jsx)(Y,{modalIsOpen:this.state.aboutIsOpen,toggleModal:t}),Object(m.jsx)(G,{modalIsOpen:this.state.userIsOpen,toggleModal:r,user:this.state.user})]})}}]),r}(a.a.Component),q=H,J=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,85)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(q,{})})}),document.getElementById("root")),J()}},[[84,1,2]]]);
//# sourceMappingURL=main.058f8876.chunk.js.map