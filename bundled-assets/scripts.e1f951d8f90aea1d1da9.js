!function(e){function t(t){for(var r,s,l=t[0],i=t[1],c=t[2],p=0,d=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={0:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;a.push([2,1]),n()}([,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},o=n(0);var a=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let n=0;n<e;n++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${n}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new o.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}};var s=class{constructor(){document.querySelectorAll(".acf-map").forEach(e=>{this.new_map(e)})}new_map(e){var t=e.querySelectorAll(".marker"),n={zoom:16,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP},r=new google.maps.Map(e,n);r.markers=[];var o=this;t.forEach((function(e){o.add_marker(e,r)})),this.center_map(r)}add_marker(e,t){var n=new google.maps.LatLng(e.getAttribute("data-lat"),e.getAttribute("data-lng")),r=new google.maps.Marker({position:n,map:t});if(t.markers.push(r),e.innerHTML){var o=new google.maps.InfoWindow({content:e.innerHTML});google.maps.event.addListener(r,"click",(function(){o.open(t,r)}))}}center_map(e){var t=new google.maps.LatLngBounds;e.markers.forEach((function(e){var n=new google.maps.LatLng(e.position.lat(),e.position.lng());t.extend(n)})),1==e.markers.length?(e.setCenter(t.getCenter()),e.setZoom(16)):e.fitBounds(t)}},l=n(3),i=n.n(l);var c=class{constructor(){this.openButton=i()(".js-search-trigger"),this.closeButton=i()(".search-overlay__close"),this.searchOverlay=i()(".search-overlay"),this.events()}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this))}openOverlay(){this.searchOverlay.addClass("search-overlay--active")}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active")}};new r,new a;new s,new c,new c}]);