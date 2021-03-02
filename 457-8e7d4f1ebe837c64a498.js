(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1814:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r=n(0),a=n.n(r),o=n(302),i=n(954),l=n(156),c=function(){return a.a.createElement("p",null,"Focus in this section to hear screen reader only text",a.a.createElement(l.default,{tabIndex:"0",text:"This is read by a screen reader"}))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function p(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nexport default () => (\n  <p>\n    Focus in this section to hear screen reader only text\n    <VisuallyHiddenText tabIndex=\"0\" text=\"This is read by a screen reader\" />\n  </p>\n);\n\n")))}p.isMDXComponent=!0;var m=n(797),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Default Visually Hidden Text",description:n,example:a.a.createElement(c,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,r,o=v(i);function i(){return y(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"componentDidMount",value:function(){this.visuallyHiddenText.innerText="Text written via refCallback innerText update"}},{key:"render",value:function(){var e=this;return a.a.createElement("p",null,"Visually Hidden Text which uses refCallback to write innerText",a.a.createElement(l.default,{refCallback:function(t){e.visuallyHiddenText=t}}))}}])&&O(t.prototype,n),r&&O(t,r),i}(a.a.Component);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function C(e){var t=e.components,n=N(e,["components"]);return Object(o.mdx)("wrapper",T({},E,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nclass Example extends React.Component {\n  componentDidMount() {\n    this.visuallyHiddenText.innerText = 'Text written via refCallback innerText update';\n  }\n\n  render() {\n    return (\n      <p>\n        Visually Hidden Text which uses refCallback to write innerText\n        <VisuallyHiddenText refCallback={(ref) => { this.visuallyHiddenText = ref; }} />\n      </p>\n    );\n  }\n}\n\nexport default Example;\n\n")))}C.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Ref Callback Visually Hidden Text",description:n,example:a.a.createElement(w,null),exampleSrc:a.a.createElement(C,null),isExpanded:r})},k=n(800),H=n.n(k);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S=function(){return Object(o.mdx)(H.a,{rows:[{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback ref to pass into the dom element. This is useful when using terra-visually-hidden-text as an aria-live container."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Text to be read to the screen reader"))}return t.isMDXComponent=!0,t({})}}]})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L={};function R(e){var t=e.components,n=X(e,["components"]);return Object(o.mdx)("wrapper",M({},L,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-visually-hidden-text"},"Terra Visually Hidden Text"),Object(o.mdx)("p",null,"Visually Hidden Text is a component designed for screen readers that renders text on the dom, but is not visible to the UI. Some components such as badge will have a visual indication to note their hierarchy on the page, but that indication is lost when a screen reader is used on the web page. Visually Hidden text would allow your application to provide that additional context to a screen reader."),Object(o.mdx)("p",null,"Another reason for this component is when you want to produce more semantic markup for a screen reader only experience. Some various examples include:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"You may want to provide a visually hidden header to allow for better readability."),Object(o.mdx)("li",{parentName:"ul"},"You may need to provide different instructions for visual users vs non visual users."),Object(o.mdx)("li",{parentName:"ul"},"div nodes have a difficult understanding the aria-label attributes as well.")),Object(o.mdx)("p",null,"In these instances, it's recommended to use visually hidden text."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-visually-hidden-text"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(o.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"react"),Object(o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import VisuallyHiddenText from 'terra-visually-hidden-text';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features"},"Cross-Browser Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{title:"VisuallyHiddenText with empty string",mdxType:"DefaultVisuallyHiddenText"}),Object(o.mdx)(P,{title:"VisuallyHiddenText with ref Callback",mdxType:"RefCallbackVisuallyHiddenText"}),Object(o.mdx)("h2",{id:"visually-hidden-text-props"},"Visually Hidden Text Props"),Object(o.mdx)(S,{mdxType:"VisuallyHiddenTextPropsTable"}))}R.isMDXComponent=!0},801:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},954:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(798),i=n.n(o),l=function(e){var t=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-visually-hidden-text",name:"terra-visually-hidden-text",version:"2.31.0",url:t})}}}]);