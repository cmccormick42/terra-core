(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{1405:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),i=t(878),o={"grid-template-columns":"100px 100px","grid-template-rows":"100px","grid-gap":"10px"},c={"grid-column-start":1,"grid-row-start":1},l={"grid-column-start":2,"grid-row-start":1};r.default=function(){return a.a.createElement(i.a,{id:"defaultDynamicGrid",defaultTemplate:o},a.a.createElement(i.a.Region,{id:"region1",defaultPosition:c},"R1"),a.a.createElement(i.a.Region,{id:"region2",defaultPosition:l},"R2"))}},878:function(e,r,t){"use strict";var n=t(0),a=t.n(n),i=t(898),o=t(1),c=t.n(o),l=t(10),u=t.n(l);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=function(e,r){var t,n=r["grid-template-".concat(e)];if(void 0===n)return{};var a=(r["grid-gap"]||"0").split(/\s+/);return a="rows"===e?a[0]:a.slice(-1)[0],d(t={},"grid-template-".concat(e),n),d(t,"-ms-grid-".concat(e),n.split(/\s+/).join(" ".concat(a," "))),t},f=function(e,r){var t,n=r["grid-".concat(e,"-start")];return void 0===n?{}:(d(t={},"grid-".concat(e,"-start"),"".concat(n)),d(t,"-ms-grid-".concat(e),"".concat(2*n-1)),t)},m=function(e,r){var t;if(void 0===r["grid-".concat(e,"-end")])return{};var n=r["grid-".concat(e,"-start")]||r["grid-".concat(e,"-end")],a=r["grid-".concat(e,"-end")],i=n===a?1:2*(a-n)-1;return d(t={},"grid-".concat(e,"-end"),"".concat(a)),d(t,"-ms-grid-".concat(e,"-span"),"".concat(i)),t},b=function(e){return p(p(p(p(p({},(r=e,0===Object.keys(r).length?{}:{display:window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid")?"grid":"-ms-grid"})),function(e){return e["grid-gap"]?{"grid-gap":e["grid-gap"]}:{}}(e)),g("columns",e)),g("rows",e)),e.style||{});var r},O=function(e){return p(p(p(p(p({},f("column",e)),m("column",e)),f("row",e)),m("row",e)),e.style||{})},y=t(4),h=t.n(y),j="544px",w="768px",v="992px",P="1216px",S="1440px";function E(){return(E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){k(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function T(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var R=h.a.bind({"region-child-container":"Region-module__region-child-container___3WECH"}),N={"grid-column-start":c.a.number,"grid-column-end":c.a.number,"grid-row-start":c.a.number,"grid-row-end":c.a.number,style:c.a.object},_={children:c.a.node,defaultPosition:c.a.shape(N),tiny:c.a.shape(N),small:c.a.shape(N),medium:c.a.shape(N),large:c.a.shape(N),huge:c.a.shape(N)},C=function(e){var r=e.children,t=e.defaultPosition,n=e.tiny,o=e.small,c=e.medium,l=e.large,u=e.huge,s=T(e,["children","defaultPosition","tiny","small","medium","large","huge"]),p=function(e,r){return Object.keys(r).length?k({},"@media screen and (min-width: ".concat(e,")"),O(r)):{}},d=i.StyleSheet.create({region:D(D(D(D(D(D({},O(t)),p(j,n)),p(w,o)),p(v,c)),p(P,l)),p(S,u))}),g=h()(s.className,Object(i.css)(d.region));return a.a.createElement("div",E({},s,{className:g}),a.a.createElement("div",{className:R("region-child-container")},r))};C.propTypes=_,C.defaultProps={defaultPosition:{},tiny:{},small:{},medium:{},large:{},huge:{}};var I=C;function J(){return(J=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function G(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?G(Object(t),!0).forEach((function(r){W(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function W(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function q(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var z={"grid-template-columns":c.a.string,"grid-template-rows":c.a.string,"grid-gap":c.a.string,style:c.a.object},A={children:c.a.node,defaultTemplate:c.a.shape(z),tiny:c.a.shape(z),small:c.a.shape(z),medium:c.a.shape(z),large:c.a.shape(z),huge:c.a.shape(z)},B=function(e){var r=e.defaultTemplate,t=e.tiny,n=e.small,o=e.medium,c=e.large,l=e.huge,s=e.children,p=q(e,["defaultTemplate","tiny","small","medium","large","huge","children"]),d=function(e,r){return Object.keys(r).length?W({},"@media screen and (min-width: ".concat(e,")"),b(r)):{}},g=i.StyleSheet.create({grid:H(H(H(H(H(H({},b(r)),d(j,t)),d(w,n)),d(v,o)),d(P,c)),d(S,l))}),f=u()(p.className,Object(i.css)(g.grid));return a.a.createElement("div",J({},p,{className:f}),s)};B.propTypes=A,B.defaultProps={defaultTemplate:{},tiny:{},small:{},medium:{},large:{},huge:{}},B.Region=I;r.a=B}}]);