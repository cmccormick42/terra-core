(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1556:function(e,l,i){"use strict";i.r(l);var n=i(0),t=i.n(n),a=i(826);l.default=function(){return t.a.createElement("div",null,t.a.createElement(a.a,{id:"heading-level-1",level:1},"Level 1"),t.a.createElement(a.a,{id:"heading-level-2",level:2},"Level 2"),t.a.createElement(a.a,{id:"heading-level-3",level:3},"Level 3"),t.a.createElement(a.a,{id:"heading-level-4",level:4},"Level 4"),t.a.createElement(a.a,{id:"heading-level-5",level:5},"Level 5"),t.a.createElement(a.a,{id:"heading-level-6",level:6},"Level 6"))}},826:function(e,l,i){"use strict";var n=i(0),t=i.n(n),a=i(1),r=i.n(a),_=i(4);function o(){return(o=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var i=arguments[l];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function d(e,l){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),i.push.apply(i,n)}return i}function c(e,l,i){return l in e?Object.defineProperty(e,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[l]=i,e}function u(e,l){if(null==e)return{};var i,n,t=function(e,l){if(null==e)return{};var i,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],l.indexOf(i)>=0||(t[i]=e[i]);return t}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],l.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=i.n(_).a.bind({heading:"Heading-module__heading___169ay",italic:"Heading-module__italic___18oYl","level-1":"Heading-module__level-1___13DjO","level-2":"Heading-module__level-2___iSNLy","level-3":"Heading-module__level-3___1PViN","level-4":"Heading-module__level-4___25wXl","level-5":"Heading-module__level-5___g4udu","level-6":"Heading-module__level-6___3cYFX","size-huge":"Heading-module__size-huge___1Brzq","size-large":"Heading-module__size-large___3gRQg","size-medium":"Heading-module__size-medium___QyKWR","size-small":"Heading-module__size-small___1UNZv","size-tiny":"Heading-module__size-tiny___1ib9-","size-mini":"Heading-module__size-mini___3OUl4","weight-200":"Heading-module__weight-200___1AeTq","weight-400":"Heading-module__weight-400___10I_t","weight-700":"Heading-module__weight-700___3RjhW","visually-hidden":"Heading-module__visually-hidden___2GYKF"}),g={children:r.a.node.isRequired,level:r.a.oneOf([1,2,3,4,5,6]).isRequired,isItalic:r.a.bool,isVisuallyHidden:r.a.bool,size:r.a.oneOf(["mini","tiny","small","medium","large","huge"]),weight:r.a.oneOf([200,400,700]),colorClass:r.a.string},v=function(e){var l=e.level,i=e.children,n=e.isVisuallyHidden,a=e.isItalic,r=e.size,_=e.weight,g=e.colorClass,v=function(e){for(var l=1;l<arguments.length;l++){var i=null!=arguments[l]?arguments[l]:{};l%2?d(Object(i),!0).forEach((function(l){c(e,l,i[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(i,l))}))}return e}({},u(e,["level","children","isVisuallyHidden","isItalic","size","weight","colorClass"])),m=s(["heading",{italic:a},{"visually-hidden":n},c({},"level-".concat(l),l),c({},"size-".concat(r),r),c({},"weight-".concat(_),_),g,v.className]),h="h".concat(l);return t.a.createElement(h,o({},v,{className:m}),i)};v.propTypes=g,v.defaultProps={isItalic:!1,isVisuallyHidden:!1,weight:700};l.a=v}}]);