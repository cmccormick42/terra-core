(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1819:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var r=n(0),i=n.n(r),a=n(302),o=n(945),s=n(989),u=n(4);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=n.n(u).a.bind({"signature-wrapper":"SignatureExample-module__signature-wrapper___1uh_Y"}),x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,e);var t,n,r,a=f(o);function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a.call(this)).state={lineSegments:[],lineWidth:s.a.Opts.Width.FINE},e.handleSingleLine=e.handleSingleLine.bind(g(e)),e.handleClear=e.handleClear.bind(g(e)),e.handleLineWidth=e.handleLineWidth.bind(g(e)),e}return t=o,(n=[{key:"handleSingleLine",value:function(){var e=p(p({},this.state),{},{lineSegments:[{x1:71,y1:8,x2:71,y2:8},{x1:71,y1:8,x2:71,y2:10},{x1:71,y1:10,x2:71,y2:17},{x1:71,y1:17,x2:71,y2:28},{x1:71,y1:28,x2:71,y2:44},{x1:71,y1:44,x2:71,y2:56},{x1:71,y1:56,x2:71,y2:68},{x1:71,y1:68,x2:71,y2:75},{x1:71,y1:75,x2:71,y2:81},{x1:71,y1:81,x2:71,y2:84},{x1:71,y1:84,x2:71,y2:86},{x1:71,y1:86,x2:71,y2:87},{x1:71,y1:87,x2:71,y2:87}]});this.setState(e)}},{key:"handleClear",value:function(){var e=p(p({},this.state),{},{lineSegments:[]});this.setState(e)}},{key:"handleLineWidth",value:function(e){this.setState(m({},e.target.name,e.target.value))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:b("signature-wrapper")},i.a.createElement(s.a,{id:"foo",lineWidth:this.state.lineWidth,lineSegments:this.state.lineSegments})),i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleClear},"Clear "),i.a.createElement("button",{type:"button",onClick:this.handleSingleLine},"Sign w/Line "),i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"lineWidth"},"Select a line width:")),i.a.createElement("select",{id:"lineWidth",name:"lineWidth",value:this.state.lineWidth,onChange:this.handleLineWidth},i.a.createElement("option",{value:"1"},"EXTRAFINE"),i.a.createElement("option",{value:"2"},"FINE"),i.a.createElement("option",{value:"4"},"MEDIUM"),i.a.createElement("option",{value:"6"},"HEAVY")))))}}])&&d(t.prototype,n),r&&d(t,r),o}(i.a.Component);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var w={};function j(e){var t=e.components,n=S(e,["components"]);return Object(a.mdx)("wrapper",O({},w,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Signature from \'terra-signature\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./SignatureExample.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass SignatureExample extends React.Component {\n  constructor() {\n    super();\n\n    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE };\n\n    this.handleSingleLine = this.handleSingleLine.bind(this);\n    this.handleClear = this.handleClear.bind(this);\n    this.handleLineWidth = this.handleLineWidth.bind(this);\n  }\n\n  handleSingleLine() {\n    const singleLine = [{\n      x1: 71, y1: 8, x2: 71, y2: 8,\n    }, {\n      x1: 71, y1: 8, x2: 71, y2: 10,\n    }, {\n      x1: 71, y1: 10, x2: 71, y2: 17,\n    }, {\n      x1: 71, y1: 17, x2: 71, y2: 28,\n    }, {\n      x1: 71, y1: 28, x2: 71, y2: 44,\n    }, {\n      x1: 71, y1: 44, x2: 71, y2: 56,\n    }, {\n      x1: 71, y1: 56, x2: 71, y2: 68,\n    }, {\n      x1: 71, y1: 68, x2: 71, y2: 75,\n    }, {\n      x1: 71, y1: 75, x2: 71, y2: 81,\n    }, {\n      x1: 71, y1: 81, x2: 71, y2: 84,\n    }, {\n      x1: 71, y1: 84, x2: 71, y2: 86,\n    }, {\n      x1: 71, y1: 86, x2: 71, y2: 87,\n    }, {\n      x1: 71, y1: 87, x2: 71, y2: 87,\n    }];\n    const newState = { ...this.state, lineSegments: singleLine };\n    this.setState(newState);\n  }\n\n  handleClear() {\n    const newState = { ...this.state, lineSegments: [] };\n    this.setState(newState);\n  }\n\n  handleLineWidth(event) {\n    this.setState({ [event.target.name]: event.target.value });\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={cx(\'signature-wrapper\')}>\n          <Signature id="foo" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} />\n        </div>\n        <div>\n          <button type="button" onClick={this.handleClear}>Clear </button>\n          <button type="button" onClick={this.handleSingleLine}>Sign w/Line </button>\n          <div>\n            <p><label htmlFor="lineWidth">Select a line width:</label></p>\n            <select id="lineWidth" name="lineWidth" value={this.state.lineWidth} onChange={this.handleLineWidth}>\n              <option value="1">EXTRAFINE</option>\n              <option value="2">FINE</option>\n              <option value="4">MEDIUM</option>\n              <option value="6">HEAVY</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default SignatureExample;\n\n')))}j.isMDXComponent=!0;var E=n(797),L=n.n(E);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var P={};function D(e){var t=e.components,n=N(e,["components"]);return Object(a.mdx)("wrapper",C({},P,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .signature-wrapper {\n    border: 1px solid rgb(0, 0, 0);\n    height: 100px;\n    padding: 5px;\n    width: 100%;\n  }\n}\n\n")))}D.isMDXComponent=!0;var W=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.a.createElement(L.a,{title:t||"Signature Example",description:n,example:i.a.createElement(x,null),exampleCssSrc:i.a.createElement(D,null),exampleSrc:i.a.createElement(j,null),isExpanded:r})},_=n(800),k=n.n(_);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var X=function(){return Object(a.mdx)(k.a,{rows:[{name:"lineWidth",type:function(){var e={};function t(t){var n=t.components,r=T(t,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "1",\n "2",\n "4",\n "6"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"2",description:function(){var e={};function t(t){var n=t.components,r=T(t,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The line width to use when drawing the signature on the canvas.\nOne of Signature.Opts.Width.EXTRA_FINE, Signature.Opts.Width.FINE, Signature.Opts.Width.MEDIUM, Signature.Opts.Width.HEAVY."))}return t.isMDXComponent=!0,t({})}},{name:"lineSegments",type:function(){var e={};function t(t){var n=t.components,r=T(t,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"array"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=T(t,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Line segments that define signature."))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=T(t,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=T(t,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function to execute when a line segment is drawn. The first parameter is the event, the\nsecond parameter is all the line segments, and the last parameter is the most recent line segment drawn."))}return t.isMDXComponent=!0,t({})}}]})};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A={};function U(e){var t=e.components,n=M(e,["components"]);return Object(a.mdx)("wrapper",I({},A,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(o.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-signature"},"Terra Signature"),Object(a.mdx)("p",null,"The terra-signature component provides users a way to define a signature with a series of line segments.\nThe component can define line width, line color, and optionally display a signature if the line segments have\nalready been recorded. Exiting the canvas then re-entering continues the drawing, as long as the pointer does not exit the confines of the browser. For mouse usage, only left click drawing is enabled."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-signature"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(a.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},"react"),Object(a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Signature from 'terra-signature';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(W,{title:"Default Signature",mdxType:"SignatureExample"}),Object(a.mdx)("h2",{id:"signature-props"},"Signature Props"),Object(a.mdx)(X,{mdxType:"SignaturePropsTable"}))}U.isMDXComponent=!0},801:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(12);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){var t=o({},e);return i.a.createElement(a.a,t,i.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};s.displayName="IconChevronLeft",s.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=s},945:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),i=n.n(r),a=n(798),o=n.n(a),s=function(e){var t=e.url;return i.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-signature",name:"terra-signature",version:"2.34.0",url:t})}},989:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(1),o=n.n(a),s=n(4),u=n.n(s),c=n(6),l=n.n(c);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var i=O(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=u.a.bind({"clinical-lowlight-theme":"Signature-module__clinical-lowlight-theme___3JNgu","orion-fusion-theme":"Signature-module__orion-fusion-theme___hQeIB",signature:"Signature-module__signature___327h9"}),w={EXTRA_FINE:1,FINE:2,MEDIUM:4,HEAVY:6},j=0,E={lineWidth:o.a.oneOf([w.EXTRA_FINE,w.FINE,w.MEDIUM,w.HEAVY]),lineSegments:o.a.array,onChange:o.a.func},L={lineWidth:w.FINE,lineSegments:[],onChange:void 0},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(o,e);var t,n,r,a=v(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).state={lineSegments:e.lineSegments},t.mouseInBounds=t.mouseInBounds.bind(x(t)),t.mouseDown=t.mouseDown.bind(x(t)),t.mouseUp=t.mouseUp.bind(x(t)),t.mouseXY=t.mouseXY.bind(x(t)),t.mouseLeave=t.mouseLeave.bind(x(t)),t.addLine=t.addLine.bind(x(t)),t.draw=t.draw.bind(x(t)),t.drawSignature=t.drawSignature.bind(x(t)),t.clearSignature=t.clearSignature.bind(x(t)),t.updateDimensions=t.updateDimensions.bind(x(t)),t}return t=o,(n=[{key:"componentDidMount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.addEventListener("touchstart",this.mouseDown,!1),this.canvas.addEventListener("touchmove",this.mouseXY,!0),this.canvas.addEventListener("touchend",this.mouseUp,!1),document.body.addEventListener("touchleave",this.mouseLeave,!1),document.body.addEventListener("touchcancel",this.mouseUp,!1)):(this.canvas.addEventListener("mousedown",this.mouseDown),this.canvas.addEventListener("mousemove",this.mouseXY),document.body.addEventListener("mouseleave",this.mouseLeave,!1),document.body.addEventListener("mouseup",this.mouseUp)),this.canvas.getContext("2d").lineWidth=this.props.lineWidth,this.updateDimensions(),this.canvas.addEventListener("resize",this.updateDimensions)}},{key:"componentDidUpdate",value:function(e){this.props.lineSegments===e.lineSegments&&this.props.lineWidth===e.lineWidth||(this.setState({lineSegments:this.props.lineSegments}),this.drawSignature(this.props.lineSegments,this.props.lineWidth))}},{key:"componentWillUnmount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.removeEventListener("touchstart",this.mouseDown),this.canvas.removeEventListener("touchmove",this.mouseXY),this.canvas.removeEventListener("touchend",this.mouseUp),document.body.removeEventListener("touchleave",this.mouseLeave),document.body.removeEventListener("touchcancel",this.mouseUp)):(this.canvas.removeEventListener("mousedown",this.mouseDown),this.canvas.removeEventListener("mousemove",this.mouseXY),document.body.removeEventListener("mouseleave",this.mouseLeave),document.body.removeEventListener("mouseup",this.mouseUp)),this.canvas.removeEventListener("resize",this.updateDimensions)}},{key:"mouseInBounds",value:function(e){var t=this.canvasRect;return t.top<e.pageY&&t.left<e.pageX&&t.bottom>e.pageY&&t.right>e.pageX}},{key:"mouseDown",value:function(e){"button"in e&&e.button!==j||(this.setState({lastLineSegments:[],painting:!0}),this.canvasRect=this.canvas.getBoundingClientRect(),this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!1),this.draw())}},{key:"mouseUp",value:function(e){this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments)}},{key:"mouseXY",value:function(e){this.state.painting&&this.mouseInBounds(e)&&(this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!0),this.draw())}},{key:"mouseLeave",value:function(e){this.state.painting&&(this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments))}},{key:"addLine",value:function(e,t,n){var r;if(n){var i=this.state.lineSegments[this.state.lineSegments.length-1];r={x1:i.x2,y1:i.y2,x2:e,y2:t}}else r={x1:e,y1:t,x2:e,y2:t};this.setState((function(e){return{lineSegments:[].concat(h(e.lineSegments),[r]),lastLineSegments:[].concat(h(e.lastLineSegments),[r])}}))}},{key:"draw",value:function(){var e=this.canvas.getContext("2d");if(this.state.lineSegments.length>0){var t=this.state.lineSegments[this.state.lineSegments.length-1],n=window.getComputedStyle(this.canvas).getPropertyValue("color");e.lineJoin="round",e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.strokeStyle=n,e.stroke()}}},{key:"drawSignature",value:function(e,t){var n=this.canvas.getContext("2d"),r=window.getComputedStyle(this.canvas).getPropertyValue("color");n.lineJoin="round",n.lineWidth=t,n.clearRect(0,0,this.canvasRect.width,this.canvasRect.height);for(var i=e.length,a=0;a<i;a+=1)n.beginPath(),n.moveTo(e[a].x1,e[a].y1),n.lineTo(e[a].x2,e[a].y2),n.strokeStyle=r,n.stroke()}},{key:"clearSignature",value:function(){this.setState({lineSegments:[]}),this.canvas.getContext("2d").clearRect(0,0,this.canvasRect.width,this.canvasRect.height)}},{key:"updateDimensions",value:function(){var e=this;setTimeout((function(){e.canvasRect=e.canvas.getBoundingClientRect(),e.canvas.width=e.canvasRect.width,e.canvas.height=e.canvasRect.height,e.drawSignature(e.state.lineSegments)}),250)}},{key:"render",value:function(){var e=this,t=this.context,n=this.props,r=(n.lineSegments,n.lineWidth,n.onChange,d(n,["lineSegments","lineWidth","onChange"]));return i.a.createElement("canvas",m({},r,{className:S("signature",t.className),ref:function(t){e.canvas=t}}))}}])&&y(t.prototype,n),r&&y(t,r),o}(i.a.Component);C.propTypes=E,C.defaultProps=L,C.contextType=l.a,C.Opts={},C.Opts.Width=w;t.a=C}}]);