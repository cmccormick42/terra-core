(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1325:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(853),l=r.a.createElement("svg",{className:"terra-Icon",height:"4em",width:"4em",viewBox:"0 0 48 48"},r.a.createElement("path",{d:"M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z",fill:"#FFF"}));t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{icon:l,text:"icon",id:"text-right"})," ",r.a.createElement(i.a,{icon:l,text:"icon",isReversed:!0,id:"text-left"})," ",r.a.createElement(i.a,{icon:l,id:"no-text"}))}},853:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),l=n.n(i),o=n(10),_=n.n(o),d=n(4),c=n.n(d),u=n(6),s=n.n(u),m=n(156),g={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___1_NSn","orion-fusion-theme":"Badge-module__orion-fusion-theme___1_VxE",badge:"Badge-module__badge___3cyVx","is-reversed":"Badge-module__is-reversed___Q8Ud9","has-icon":"Badge-module__has-icon___EOPgO",text:"Badge-module__text___h_fHm",tiny:"Badge-module__tiny___1iDFx",small:"Badge-module__small___3jOYg",medium:"Badge-module__medium___1w2t1",large:"Badge-module__large___1thYY",huge:"Badge-module__huge___1P84W",default:"Badge-module__default___1UKop",primary:"Badge-module__primary___3CfWa",secondary:"Badge-module__secondary___dFSf3",positive:"Badge-module__positive___O_KD0",negative:"Badge-module__negative___tRub0",warning:"Badge-module__warning___3Fw_u",info:"Badge-module__info___3yimG"};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=c.a.bind(g),h={children:l.a.node,icon:l.a.element,intent:l.a.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:l.a.bool,size:l.a.oneOf(["tiny","small","medium","large","huge"]),text:l.a.string,visuallyHiddenText:l.a.string},O={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},w=function(e){var t=e.size,n=e.intent,a=e.isReversed,i=e.text,l=e.icon,o=e.visuallyHiddenText,d=v(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),c=r.a.useContext(s.a),u=_()(b("badge",{"has-icon":l},{"is-reversed":a},t,n,c.className),d.className),f=i?r.a.createElement("span",{className:g.text,"aria-hidden":"true"},i):null,y=o?r.a.createElement(m.default,{text:o}):null,h=a?[y,f,l,d.children]:[l,y,f,d.children];return r.a.createElement.apply(r.a,["span",p(p({},d),{},{className:u})].concat(h))};w.propTypes=h,w.defaultProps=O;t.a=w}}]);