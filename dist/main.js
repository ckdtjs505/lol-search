!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);class a{constructor(e,t,s){this.ele=e,this.modal=t,this.data=s,this.buildUI(),this.bindEventDefault()}buildUI(){this.modal.classList.add("on");const{alt_description:e,urls:t}=this.data;this.modal.innerHTML=` \n        <div class="modal-content">\n            <span class="close">&times;</span>\n            <img src="${t.thumb}"> </img> \n            <p> ${e} </p>\n        <div/>\n    `}bindEventDefault(){document.querySelector(".close").addEventListener("click",()=>{this.modal.classList.remove("on")}),window.onclick=e=>{e.target==this.modal&&this.modal.classList.remove("on")},window.onkeyup=e=>{27===e.keyCode&&this.modal.classList.remove("on")}}}class n{constructor(e,t,s){this.ele=e,this.modal=t,this.data=s,this.render(),this.bindEventDefault()}bindEventDefault(){this.data.results.forEach(e=>{document.getElementById(e.id).addEventListener("click",()=>{new a(this.ele,this.modal,e)})})}render(){this.$resultSearchBox=document.querySelector(".resultImg"),this.data.results.forEach(e=>{const{id:t,urls:s}=e,a=document.createElement("li");a.innerHTML=`\n          <img src="${s.thumb}" id="${t}" class="img" > </img>\n        `,this.$resultSearchBox.append(a)})}}new class{constructor(e){this.app=e,this.data,this.page=0,this.searchValue,this.modal,this.searchInput,this.searchResult,this.buildUI(),this.bindEventDefault()}createSearchInput(){this.searchInput=document.createElement("div"),this.searchInput.innerHTML=' \n      <input class ="search" placeholder ="사진을 검색하시오"/>\n    ',this.app.append(this.searchInput)}createSerachResult(){this.searchResult=document.createElement("ul"),this.searchResult.classList.add("resultImg"),this.app.append(this.searchResult)}createModal(){this.modal=document.createElement("div"),this.modal.id="myModal",this.modal.classList.add("modal"),this.app.append(this.modal)}createToggleButton(){this.darkModeToggle=document.createElement("input"),this.darkModeToggle.type="checkbox",this.app.append(this.darkModeToggle)}async searchEngine(){var e,t;this.searchResult.append(this.loader),this.data=await(e=++this.page,t=this.searchValue,fetch(`https://api.unsplash.com/search/photos?page=${e}&query=${t}`,{headers:{Authorization:"Client-ID NtxoFkRmWdaM8LtARKERKEzZp_h5B14z5jleLrQKeBg"}}).then(e=>e.json())),this.loader.remove(),new n(this.app,this.modal,this.data)}buildUI(){this.createSearchInput(),this.createToggleButton(),this.createSerachResult(),this.createModal(),this.loader=document.createElement("div"),this.loader.classList.add("loader")}bindEventDefault(){window.onscroll=e=>{window.innerHeight+Math.ceil(window.scrollY)>=document.body.offsetHeight&&this.searchEngine()};const e=document.querySelector(".search");e.addEventListener("keyup",async t=>{this.searchValue=e.value,t.preventDefault(),13===t.keyCode&&(this.searchResult.innerHTML="",this.searchEngine(),e.value="")}),this.darkModeToggle.addEventListener("change",e=>{e.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")})}}(document.getElementById("app"))}]);
//# sourceMappingURL=main.js.map