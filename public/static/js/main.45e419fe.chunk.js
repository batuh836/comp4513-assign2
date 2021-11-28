(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,r){},45:function(e,t,r){},59:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(14),s=r.n(c),i=(r(41),r(4)),l=(r(43),r(11)),o=r.n(l),u=r(12),j=r(15),d=r(16),b=r(17),h=r(19),p=r(18),x=(r(45),r(23)),f=r(2),O=r(9),m=(r(59),r(0)),y=function(e){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("span",{children:"Play Browser"})}),Object(m.jsx)("a",{href:"https://comp4513-assign2.herokuapp.com/logout",children:Object(m.jsx)("button",{children:"Logout"})}),Object(m.jsx)("button",{onClick:function(){e.toggleModal()},children:"About"}),Object(m.jsx)("a",{href:"https://comp4513-assign2.herokuapp.com/profile",children:Object(m.jsx)("button",{children:"Profile"})})]})},v=(r(63),function(e){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("article",{className:"article",children:Object(m.jsxs)("form",{className:"form",children:[Object(m.jsx)("legend",{children:"Play Browser"}),Object(m.jsx)("label",{children:"Search Play Title"}),Object(m.jsx)("input",{id:"title",type:"text"}),Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{onClick:function(){var t=document.getElementById("title").value;e.setFilteredPlays({title:t},"title")},children:"Show Matching Plays"})}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{onClick:function(){e.setFilteredPlays({},"title")},children:"Show All Plays"})}),Object(m.jsx)("br",{})]})}),Object(m.jsx)("p",{children:"Phantom of the Opera at Istana Budaya, Kuala Lumpur. World Tour 2019."})]})}),g=(r(64),function(e){return Object(m.jsxs)("div",{className:"favourites-item",children:[Object(m.jsx)(i.b,{to:"/play-detail",children:Object(m.jsx)("span",{onClick:function(){var t;t=e.play,console.log(t),e.setCurrentPlay(t)},children:e.play.title})}),Object(m.jsx)("button",{onClick:function(){e.removeFromFavourites(e.play)},children:"Remove"})]})}),k=(r(65),function(e){var t=function(){var e=document.querySelector(".favourites-list").parentElement,t=document.getElementById("toggle-button");e.classList.contains("hide-favourites")?t.innerHTML="\u25b6":t.innerHTML="\u25c0"};return e.favourites?Object(m.jsxs)("div",{className:"favourites-list",children:[Object(m.jsx)("h1",{children:"Favourites"}),Object(m.jsx)("ul",{children:e.favourites.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)(g,{play:t,removeFromFavourites:e.removeFromFavourites,setCurrentPlay:e.setCurrentPlay})},t.id)}))}),Object(m.jsx)("button",{id:"toggle-button",onClick:function(){document.querySelector(".favourites-list").parentElement.classList.toggle("hide-favourites"),t()},children:"\u25c0"})]}):null}),C=(r(66),function(e){return Object(m.jsxs)("div",{className:"play-filters",children:[Object(m.jsxs)("form",{className:"filter-form",children:[Object(m.jsx)("h1",{className:"filter-header",children:"Play Filters"}),Object(m.jsx)("label",{className:"main",children:"Title"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"full",id:"title",type:"text"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"main",children:"Year"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"before-filters",children:[Object(m.jsx)("input",{id:"before",type:"checkbox"}),Object(m.jsx)("label",{className:"sub",children:"Before:"}),Object(m.jsx)("input",{className:"partial",id:"beforeYear",type:"text"})]}),Object(m.jsxs)("div",{className:"after-filters",children:[Object(m.jsx)("input",{id:"after",type:"checkbox"}),Object(m.jsx)("label",{className:"sub",children:"After:"}),Object(m.jsx)("input",{className:"partial",id:"afterYear",type:"text"})]}),Object(m.jsx)("label",{className:"main",children:"Genre"}),Object(m.jsx)("br",{}),Object(m.jsx)("select",{id:"genre",children:e.genres.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))})]}),Object(m.jsxs)("div",{className:"button-container",children:[Object(m.jsx)("button",{className:"filter-button",onClick:function(){var t=document.getElementById("title").value,r=document.getElementById("before").checked,a=document.getElementById("beforeYear").value,n=document.getElementById("after").checked,c=document.getElementById("afterYear").value,s=document.getElementById("genre").value;e.setFilteredPlays({title:t,before:r,beforeYear:a,after:n,afterYear:c,genre:s},null,!0)},children:"Filter"}),Object(m.jsx)("button",{className:"filter-button",onClick:function(){document.getElementById("title").value="",document.getElementById("before").checked=!1,document.getElementById("beforeYear").value="",document.getElementById("after").checked=!1,document.getElementById("afterYear").value="",document.getElementById("genre").value="",e.setFilteredPlays({},null,!0)},children:"Clear"})]})]})}),T=function(e){return Object(m.jsx)("button",{onClick:function(){e.addToFavourites(e.play)},children:"\u2665"})},P=(r(67),function(e){var t=function(t){e.setFilteredPlays({},t.target.title,!1)},r=function(t){e.setCurrentPlay(t)};return e.plays&&e.plays.length>0?Object(m.jsxs)("div",{className:"play-matches",children:[Object(m.jsx)("h1",{children:"List/Matches"}),Object(m.jsx)("table",{children:Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{title:"title",onClick:t,children:"Title"}),Object(m.jsx)("th",{title:"year",onClick:t,children:"Year"}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{})]})})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"table-body",children:Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{children:e.plays.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{onClick:function(){r(t)},children:Object(m.jsx)(i.b,{to:"/play-detail",children:t.title})}),Object(m.jsx)("td",{children:t.likelyDate}),Object(m.jsx)("td",{children:Object(m.jsx)(T,{play:t,addToFavourites:e.addToFavourites})}),Object(m.jsx)("td",{children:Object(m.jsx)(i.b,{to:"/play-detail",children:Object(m.jsx)("button",{onClick:function(){r(t)},children:"View"})})})]},t.id)}))})})}),Object(m.jsx)("hr",{})]}):Object(m.jsxs)("div",{className:"play-matches",children:[Object(m.jsx)("h1",{children:"List/Matches"}),Object(m.jsx)("p",{children:"No plays found!"})]})}),S=(r(68),function(e){return Object(m.jsxs)("div",{className:"play-list",children:[Object(m.jsx)(k,{favourites:e.favourites,removeFromFavourites:e.removeFromFavourites,setCurrentPlay:e.setCurrentPlay}),Object(m.jsx)(C,{filters:e.filters,setFilteredPlays:e.setFilteredPlays,genres:e.genres}),Object(m.jsx)(P,{plays:e.plays,setFilteredPlays:e.setFilteredPlays,addToFavourites:e.addToFavourites,setCurrentPlay:e.setCurrentPlay})]})}),F=(r(69),function(e){var t=function(){e.addToFavourites(e.play)},r=function(t){var r=t.target,a=r.name,n=r.value;e.setPlayFilter(a,n)};if("Text"===e.currentTab){var a=e.playData.acts,n=e.currentAct.scenes,c=["All Players"];return c.push.apply(c,Object(u.a)(Object(O.uniq)(e.currentScene.speeches.map((function(e){return e.speaker}))))),Object(m.jsxs)("div",{className:"play-overview",children:[Object(m.jsx)("h1",{children:e.play.title}),Object(m.jsx)("select",{name:"act",onChange:r,children:a.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.name)}))}),Object(m.jsx)("select",{name:"scene",onChange:r,children:n.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.name)}))}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("select",{name:"character",onChange:r,children:c.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))}),Object(m.jsx)("input",{type:"text",placeholder:"Enter a search term",onChange:function(t){e.setSearchText(t.target.value)}})]}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{children:"Close"})}),Object(m.jsx)("button",{onClick:t,children:"\u2665"})]})}return Object(m.jsxs)("div",{className:"play-overview",children:[Object(m.jsx)("h1",{children:e.play.title}),Object(m.jsx)("p",{children:e.play.synopsis}),Object(m.jsx)(i.b,{to:"/play-list",children:Object(m.jsx)("button",{children:"Close"})}),Object(m.jsx)("button",{onClick:t,children:"\u2665"})]})}),N=(r(70),function(e){var t=function(t){t.target.title!==e.currentTab&&(t.target.classList.toggle("active"),e.setCurrentTab(t.target.title))},r=function(t){return t===e.currentTab?"active":""};return Object(m.jsx)("div",{className:"tab-bar",children:e.tabs.map((function(e){return Object(m.jsx)("button",{className:r(e),title:e,onClick:t,children:e},e)}))})}),D=r(35),A=r.n(D),I=(r(71),function(e){return"Details"===e.currentTab?Object(m.jsxs)("div",{className:"data-view",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Likely date of composition:"})," ",e.play.likelyDate]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Genre:"})," ",e.play.genre]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Wiki Link:"})," ",Object(m.jsx)("a",{href:e.play.wiki,children:e.play.wiki})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Gutenberg:"})," ",Object(m.jsx)("a",{href:e.play.gutenberg,children:e.play.gutenberg})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Shakespeare.org Link:"})," ",Object(m.jsx)("a",{href:e.play.shakespeareOrg,children:e.play.shakespeareOrg})]}),Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:"Description:"})}),Object(m.jsx)("p",{children:e.play.desc})]}):null===e.playData||null===e.currentAct?Object(m.jsx)("div",{className:"data-view"}):"Characters"===e.currentTab?Object(m.jsx)("div",{className:"data-view",children:e.playData.persona.map((function(e){return Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:e.player})," - ",e.desc?e.desc:"No description"]},e.player)}))}):Object(m.jsxs)("div",{className:"data-view",children:[Object(m.jsx)("h2",{children:e.playData.title}),Object(m.jsxs)("article",{id:"actHere",children:[Object(m.jsx)("h3",{children:e.currentAct.name}),Object(m.jsxs)("div",{id:"sceneHere",children:[Object(m.jsx)("h4",{children:e.currentScene.name}),Object(m.jsx)("p",{children:e.currentScene.title}),Object(m.jsx)("p",{children:e.currentScene.stageDirection}),e.currentScene.speeches.filter((function(t){return"All Players"===e.currentCharacter||e.currentCharacter===t.speaker})).map((function(t,r){return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"speaker",children:Object(m.jsx)("strong",{children:t.speaker})}),t.lines.map((function(t,r){return Object(m.jsx)("p",{className:"line",children:Object(m.jsx)(A.a,{searchWords:[e.searchText],textToHighlight:t})},r)}))]},r)}))]})]})]})}),w=function(e){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(N,{tabs:e.tabs,currentTab:e.currentTab,setCurrentTab:e.setCurrentTab}),Object(m.jsx)("hr",{}),Object(m.jsx)(I,{currentTab:e.currentTab,play:e.play,playData:e.playData,currentAct:e.currentAct,currentScene:e.currentScene,currentCharacter:e.currentCharacter,searchText:e.searchText}),Object(m.jsx)("hr",{})]})},B=(r(72),function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var a;Object(d.a)(this,r);var n=["Details","Characters","Text"];return(a=t.call(this,e)).state={currentTab:n[0],tabs:e.play.filename?n:[n[0]],playData:[],currentAct:null,currentScene:null,currentCharacter:"All Players",searchText:""},a}return Object(b.a)(r,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,r,a,n,c,s=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.play.filename){e.next=26;break}if(t=this.props.savedPlayData.find((function(e){return e.id===s.props.play.id}))){e.next=23;break}return e.prev=3,r="https://comp4513-assign2.herokuapp.com/api/play/"+this.props.play.id,e.next=7,fetch(r);case 7:return a=e.sent,e.next=10,a.json();case 10:n=e.sent,c=n.playText,this.setState({playData:c}),this.setState({currentAct:c.acts[0]}),this.setState({currentScene:c.acts[0].scenes[0]}),this.props.savePlayData(this.props.play,c),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error("fetch error");case 21:e.next=26;break;case 23:this.setState({playData:t.data}),this.setState({currentAct:t.data.acts[0]}),this.setState({currentScene:t.data.acts[0].scenes[0]});case 26:case"end":return e.stop()}}),e,this,[[3,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"play-detail hide-favourites",children:[Object(m.jsx)(k,{favourites:this.props.favourites,removeFromFavourites:this.props.removeFromFavourites}),Object(m.jsx)(F,{currentTab:this.state.currentTab,play:this.props.play,playData:this.state.playData,currentAct:this.state.currentAct,currentScene:this.state.currentScene,addToFavourites:this.props.addToFavourites,setPlayFilter:function(t,r){if("act"===t){var a=e.state.playData.acts.find((function(e){return e.name===r}));e.setState({currentAct:a}),e.setState({currentScene:a.scenes[0]}),e.setState({currentCharacter:"All Players"})}else if("scene"===t){var n=e.state.currentAct.scenes.find((function(e){return e.name===r}));e.setState({currentScene:n}),e.setState({currentCharacter:"All Players"})}else"character"===t&&e.setState({currentCharacter:r})},setSearchText:function(t){e.setState({searchText:t})}}),Object(m.jsx)(w,{currentTab:this.state.currentTab,tabs:this.state.tabs,play:this.props.play,playData:this.state.playData,currentAct:this.state.currentAct,currentScene:this.state.currentScene,currentCharacter:this.state.currentCharacter,searchText:this.state.searchText,setCurrentTab:function(t){e.setState({currentTab:t})}})]})}}]),r}(n.a.Component)),L=B,E=r(36),M=r.n(E),Y=(r(82),function(e){return Object(m.jsxs)(M.a,{isOpen:e.modalIsOpen,contentLabel:"Example Modal",className:"about",children:[Object(m.jsx)("h1",{children:"About"}),Object(m.jsx)("p",{className:"subtitle",children:"Group Members"}),Object(m.jsx)("p",{children:"Brian Atuh"}),Object(m.jsx)("p",{className:"subtitle",children:"GitHub Link"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://github.com/batuh836/comp4513_assignment1",children:"Comp4513_Assignment1"})}),Object(m.jsx)("button",{onClick:function(){e.toggleModal()},children:"Close"})]})}),G=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(d.a)(this,r),(a=t.call(this,e)).state={plays:[],genres:[],currentPlay:null,filteredPlays:[],favourites:[],savedPlayData:[],modalIsOpen:!1},a}return Object(b.a)(r,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.plays.length){e.next=20;break}return e.prev=1,"https://comp4513-assign2.herokuapp.com/api/list",e.next=5,fetch("https://comp4513-assign2.herokuapp.com/api/list");case 5:return t=e.sent,e.next=8,t.json();case 8:r=e.sent,console.log(r),this.setState({plays:r}),this.setState({filteredPlays:r}),(a=[""]).push.apply(a,Object(u.a)(Object(O.uniq)(r.map((function(e){return e.genre}))))),this.setState({genres:a}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.error("fetch error");case 20:case"end":return e.stop()}}),e,this,[[1,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=function(){e.state.modalIsOpen?e.setState({modalIsOpen:!1}):e.setState({modalIsOpen:!0})},r=function(t,r,a){var n=a?Object(O.cloneDeep)(e.state.plays):Object(O.cloneDeep)(e.state.filteredPlays);t.title&&(n=n.filter((function(e){return e.title.toLowerCase().includes(t.title.toLowerCase())}))),t.before&&t.beforeYear&&(n=n.filter((function(e){return e.likelyDate<t.beforeYear}))),t.after&&t.afterYear&&(n=n.filter((function(e){return e.likelyDate>t.afterYear}))),t.genre&&(n=n.filter((function(e){return e.genre===t.genre}))),r&&("title"===r?n=n.sort((function(e,t){var r=e.title.toLowerCase(),a=t.title.toLowerCase();return r>a?1:r<a?-1:0})):"year"===r&&(n=n.sort((function(e,t){return Number(e.likelyDate)-Number(t.likelyDate)})))),e.setState({filteredPlays:n})},a=function(t){var r=Object(u.a)(e.state.favourites);r.find((function(e){return e.id===t.id}))||r.push(t),e.setState({favourites:r})},n=function(t){var r=Object(u.a)(e.state.favourites),a=r.findIndex((function(e){return e.id===t.id}));r.splice(a,1),e.setState({favourites:r})};return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(f.a,{path:"/",exact:!0,children:Object(m.jsx)(x.CSSTransitionGroup,{transitionName:"landing",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500,children:Object(m.jsx)(v,{setFilteredPlays:r})})}),Object(m.jsxs)(f.a,{path:"/play-list",exact:!0,children:[Object(m.jsx)(y,{toggleModal:t}),Object(m.jsx)(S,{plays:this.state.filteredPlays,genres:this.state.genres,favourites:this.state.favourites,filters:this.state.filters,setFilteredPlays:r,addToFavourites:a,removeFromFavourites:n,setCurrentPlay:function(t){e.setState({currentPlay:t})}})]}),Object(m.jsxs)(f.a,{path:"/play-detail",exact:!0,children:[Object(m.jsx)(y,{toggleModal:t}),Object(m.jsx)(L,{play:this.state.currentPlay,savedPlayData:this.state.savedPlayData,favourites:this.state.favourites,addToFavourites:a,removeFromFavourites:n,savePlayData:function(t,r){var a=Object(O.cloneDeep)(e.state.savedPlayData);a.push({id:t.id,data:r}),e.setState({savedPlayData:a})}})]}),Object(m.jsx)(Y,{modalIsOpen:this.state.modalIsOpen,toggleModal:t})]})}}]),r}(n.a.Component),H=G,q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,84)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(H,{})})}),document.getElementById("root")),q()}},[[83,1,2]]]);
//# sourceMappingURL=main.45e419fe.chunk.js.map