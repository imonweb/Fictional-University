!function(e){function t(t){for(var n,o,l=t[0],a=t[1],c=t[2],h=0,p=[];h<l.length;h++)o=l[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,l=1;l<s.length;l++){var a=s[l];0!==r[a]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},r={0:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;i.push([3,1]),s()}([,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(2);var n=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},r=s(1);var i=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let s=0;s<e;s++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${s}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new r.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}};var o=class{constructor(){document.querySelectorAll(".acf-map").forEach(e=>{this.new_map(e)})}new_map(e){var t=e.querySelectorAll(".marker"),s={zoom:16,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(e,s);n.markers=[];var r=this;t.forEach((function(e){r.add_marker(e,n)})),this.center_map(n)}add_marker(e,t){var s=new google.maps.LatLng(e.getAttribute("data-lat"),e.getAttribute("data-lng")),n=new google.maps.Marker({position:s,map:t});if(t.markers.push(n),e.innerHTML){var r=new google.maps.InfoWindow({content:e.innerHTML});google.maps.event.addListener(n,"click",(function(){r.open(t,n)}))}}center_map(e){var t=new google.maps.LatLngBounds;e.markers.forEach((function(e){var s=new google.maps.LatLng(e.position.lat(),e.position.lng());t.extend(s)})),1==e.markers.length?(e.setCenter(t.getCenter()),e.setZoom(16)):e.fitBounds(t)}},l=s(0),a=s.n(l);var c=class{constructor(){this.resultsDiv=a()("#search-overlay__results"),this.openButton=a()(".js-search-trigger"),this.closeButton=a()(".search-overlay__close"),this.searchOverlay=a()(".search-overlay"),this.searchField=a()("#search-term"),this.events(),this.isOverlayOpen=!1,this.isSpinnerVisible=!1,this.previousValue,this.typingTimer}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),a()(document).on("keydown",this.keyPressDispatcher.bind(this)),this.searchField.on("keyup",this.typingLogic.bind(this))}typingLogic(){this.searchField.val()!=this.previousValue&&(clearTimeout(this.typingTimer),this.searchField.val()?(this.isSpinnerVisible||(this.resultsDiv.html('<div class="spinner-loader"></div>'),this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.getResults.bind(this),2e3)):(this.resultsDiv.html(""),this.isSpinnerVisible=!1)),this.previousValue=this.searchField.val()}getResults(){a.a.getJSON("http://localhost/wp/Fictional-University/wp-json/wp/v2/posts?search="+this.searchField.val(),e=>{this.resultsDiv.html(`\n        <h2 class="search-overlay__section-title">General Information</h2>\n        <ul class="link-list min-list">\n         \n         \n          ${e.map(e=>`<li><a href="${e.link}">${e.title.rendered}</a></li>`).join("")}\n        </ul>\n        \n      `)})}keyPressDispatcher(e){83!=e.keyCode||this.isOverlayOpen||a()("input",textarea).is(":focus")||this.openOverlay(),27!=e.keyCode||this.isOverlayOpen||this.closeOverlay()}openOverlay(){this.searchOverlay.addClass("search-overlay--active"),a()("body").addClass("body-no-scroll"),console.log("our open method just ran!"),this.isOverlyOpen=!0}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),a()("body").removeClass("body-no-scroll"),console.log("our close method just ran!"),this.isOverlayOpen=!0}};new n,new i;new o,new c,new c}]);