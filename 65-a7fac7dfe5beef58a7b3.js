(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1804:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n(0),r=n.n(a),i=n(302),o=n(914),l=n(160),c=Object(l.withActiveBreakpoint)((function(e){var t=e.activeBreakpoint;return r.a.createElement("div",null,r.a.createElement("p",null,"This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider."),r.a.createElement("p",null,"The active breakpoint is:"," ",t))})),m=function(){return r.a.createElement(l.ActiveBreakpointContext.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"This component interfaces with the ActiveBreakpointContext directly."),r.a.createElement("p",null,"The active breakpoint is:"," ",e))}))},d=function(){return r.a.createElement(l.ActiveBreakpointProvider,null,r.a.createElement(c,null),r.a.createElement("hr",null),r.a.createElement(m,null))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function b(e){var t=e.components,n=u(e,["components"]);return Object(i.mdx)("wrapper",p({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ActiveBreakpointProvider, withActiveBreakpoint, ActiveBreakpointContext } from 'terra-breakpoints';\n\nconst ActiveBreakpointConsumer1 = withActiveBreakpoint(({ activeBreakpoint }) => (\n  <div>\n    <p>This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider.</p>\n    <p>\n      The active breakpoint is:\n      {' '}\n      {activeBreakpoint}\n    </p>\n  </div>\n));\n\nconst ActiveBreakpointConsumer2 = () => (\n  <ActiveBreakpointContext.Consumer>\n    {\n      activeBreakpoint => (\n        <div>\n          <p>This component interfaces with the ActiveBreakpointContext directly.</p>\n          <p>\n            The active breakpoint is:\n            {' '}\n            {activeBreakpoint}\n          </p>\n        </div>\n      )\n    }\n  </ActiveBreakpointContext.Consumer>\n);\n\nconst ActiveBreakpointProviderExample = () => (\n  <ActiveBreakpointProvider>\n    <ActiveBreakpointConsumer1 />\n    <hr />\n    <ActiveBreakpointConsumer2 />\n  </ActiveBreakpointProvider>\n);\n\nexport default ActiveBreakpointProviderExample;\n\n")))}b.isMDXComponent=!0;var f=n(797),v=n.n(f),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(v.a,{title:t||"Active Breakpoint Provider Example",description:n,example:r.a.createElement(d,null),exampleSrc:r.a.createElement(b,null),isExpanded:a})},h=n(4),g=n.n(h).a.bind({content:"MixinsExample-module__content___3nUsB"}),O=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"This example uses Sass mixins to determine the active breakpoint."),r.a.createElement("p",{className:g("content")}))};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k={};function N(e){var t=e.components,n=y(e,["components"]);return Object(i.mdx)("wrapper",j({},k,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './MixinsExample.module.scss';\n\n/**\n  MixinsExample.module.scss\n\n  @import 'terra-breakpoints/mixins';\n\n  :local {\n    .content::after {\n      content: 'The active breakpoint is: tiny';\n\n      @include terra-mq-small-up {\n        content: 'The active breakpoint is: small';\n      }\n\n      @include terra-mq-medium-up {\n        content: 'The active breakpoint is: medium';\n      }\n\n      @include terra-mq-large-up {\n        content: 'The active breakpoint is: large';\n      }\n\n      @include terra-mq-huge-up {\n        content: 'The active breakpoint is: huge';\n      }\n\n      @include terra-mq-enormous-up {\n        content: 'The active breakpoint is: enormous';\n      }\n    }\n  }\n*/\n\nconst cx = classNames.bind(styles);\n\nconst MixinsExample = () => (\n  <div>\n    <p>This example uses Sass mixins to determine the active breakpoint.</p>\n    <p className={cx('content')} />\n  </div>\n);\n\nexport default MixinsExample;\n\n")))}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}N.isMDXComponent=!0;var E={};function A(e){var t=e.components,n=w(e,["components"]);return Object(i.mdx)("wrapper",_({},E,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../../media-queries';\n\n:local {\n  .content::after {\n    content: 'The active breakpoint is: tiny';\n  \n    @include terra-mq-small-up {\n      content: 'The active breakpoint is: small';\n    }\n  \n    @include terra-mq-medium-up {\n      content: 'The active breakpoint is: medium';\n    }\n  \n    @include terra-mq-large-up {\n      content: 'The active breakpoint is: large';\n    }\n  \n    @include terra-mq-huge-up {\n      content: 'The active breakpoint is: huge';\n    }\n\n    @include terra-mq-enormous-up {\n      content: 'The active breakpoint is: enormous';\n    }\n  }\n}\n\n")))}A.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(v.a,{title:t||"Mixins Example",description:n,example:r.a.createElement(O,null),exampleCssSrc:r.a.createElement(A,null),exampleSrc:r.a.createElement(N,null),isExpanded:a})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={};function P(e){var t=e.components,n=B(e,["components"]);return Object(i.mdx)("wrapper",C({},T,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-breakpoints"},"Terra Breakpoints"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," contains components and utilities related to Terra's supported responsive breakpoints."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm install terra-breakpoints"))))),Object(i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(i.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},"react"),Object(i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("h3",{id:"breakpoints"},"Breakpoints"),Object(i.mdx)("p",null,"An object containing the named breakpoint values is the default export of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," package. These named breakpoints are defined as minimum values."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:null},"Breakpoint Name"),Object(i.mdx)("th",{parentName:"tr",align:null},"Minimum Value"),Object(i.mdx)("th",{parentName:"tr",align:null},"Media Query"),Object(i.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"tiny")),Object(i.mdx)("td",{parentName:"tr",align:null},"0px"),Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 0px)")),Object(i.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 0px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"small")),Object(i.mdx)("td",{parentName:"tr",align:null},"544px"),Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 544px)")),Object(i.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 544px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"medium")),Object(i.mdx)("td",{parentName:"tr",align:null},"768px"),Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 768px)")),Object(i.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 768px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"large")),Object(i.mdx)("td",{parentName:"tr",align:null},"992px"),Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 992px)")),Object(i.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 992px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"huge")),Object(i.mdx)("td",{parentName:"tr",align:null},"1216px"),Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1216px)")),Object(i.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1216 and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"enormous")),Object(i.mdx)("td",{parentName:"tr",align:null},"1440px"),Object(i.mdx)("td",{parentName:"tr",align:null},Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1440px)")),Object(i.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1440px and up")))),Object(i.mdx)("p",null,"Utility functions are also provided to help determine what breakpoint is active for a given value."),Object(i.mdx)("h4",{id:"activebreakpointforsizewidthvalue"},Object(i.mdx)("inlineCode",{parentName:"h4"},"activeBreakpointForSize(widthValue)")),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"activeBreakpointForSize")," will return the closest active breakpoint that matches the given width value."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { activeBreakpointForSize } from 'terra-breakpoints';\n\nconsole.log(activeBreakpointForSize(300));  // 'tiny'\nconsole.log(activeBreakpointForSize(544));  // 'small'\nconsole.log(activeBreakpointForSize(800));  // 'medium'\nconsole.log(activeBreakpointForSize(1000)); // 'large'\nconsole.log(activeBreakpointForSize(1300)); // 'huge'\nconsole.log(activeBreakpointForSize(1500)); // 'enormous'\n")),Object(i.mdx)("h4",{id:"breakpointisactiveforsizebreakpointname-widthvalue"},Object(i.mdx)("inlineCode",{parentName:"h4"},"breakpointIsActiveForSize(breakpointName, widthValue)")),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"breakpointIsActiveForSize")," will return a boolean value indicating whether or not the given breakpoint name is active for the width value."),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},"Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active if the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint's range.")),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { breakpointIsActiveForSize } from 'terra-breakpoints';\n\nconsole.log(breakpointIsActiveForSize('tiny', 300));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 544));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 800));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 1000));     // true\n\nconsole.log(breakpointIsActiveForSize('medium', 300));    // false\nconsole.log(breakpointIsActiveForSize('medium', 544));    // false\nconsole.log(breakpointIsActiveForSize('medium', 800));    // true\nconsole.log(breakpointIsActiveForSize('medium', 1500));   // true\n\nconsole.log(breakpointIsActiveForSize('enormous', 300));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 544));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 800));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 1500)); // true\n")),Object(i.mdx)("h3",{id:"activebreakpointprovider"},"ActiveBreakpointProvider"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," also provides ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ActiveBreakpointProvider>"),". a component that provides the current active breakpoint to child components using a Context-based API. This can be used to minimize the number of required resize event listeners and ensure consistency across the component hierarchy."),Object(i.mdx)("p",null,"A component generator called ",Object(i.mdx)("inlineCode",{parentName:"p"},"withActiveBreakpoint()")," is included to provide simple interfacing with the ActiveBreakpointProvider. However, the ActiveBreakpointContext can also be imported and used directly, if needed."),Object(i.mdx)("h3",{id:"media-queries"},"Media Queries"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," includes ",Object(i.mdx)("inlineCode",{parentName:"p"},"_media-queries.scss"),", which contains a set of Sass mixins that define media queries for the supported breakpoints."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '~terra-breakpoints/lib/media-queries';\n\n.example {\n  color: blue;\n\n  @include terra-mq-small-up {\n    color: red;\n  }\n\n  @include terra-mq-medium-up {\n    color: purple;\n  }\n\n  @include terra-mq-large-up {\n    color: green;\n  }\n\n  @include terra-mq-huge-up {\n    color: yellow;\n  }\n\n  @include terra-mq-enormous-up {\n    color: orange;\n  }\n}\n")),Object(i.mdx)("h2",{id:"component-features"},"Component Features"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(x,{mdxType:"ActiveBreakpointProviderExample"}),Object(i.mdx)(S,{mdxType:"MixinsExample"}))}P.isMDXComponent=!0},797:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(0)),i=u(n(1)),o=u(n(4)),l=n(93),c=u(n(801)),m=u(n(155)),d=n(9),p=u(n(802));function u(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v=o.default.bind(p.default),x={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},O=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,i=e.title,o=e.description,p=e.isExpanded,u=b((0,r.useState)(p),2),s=u[0],f=u[1],x=b((0,r.useState)(!1),2),O=x[0],j=x[1],y=r.default.useContext(l.ThemeContext),k=void 0!==a,N=function(){j(!O),s&&f(!s)},_=function(){f(!s),O&&j(!O)},w=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:v("template",y.className)},r.default.createElement("div",{className:v("header")},i&&r.default.createElement("h2",{className:v("title")},i)),r.default.createElement("div",{className:v("content")},o&&r.default.createElement("div",{className:v("description")},o),t),r.default.createElement("div",{className:v("footer")},n?r.default.createElement("div",{className:v("button-container")},k&&r.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":O}),onClick:N,onKeyDown:function(e){return w(e,N)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:v("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(m.default,{className:v("chevron")})),r.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":s}),onClick:_,onKeyDown:function(e){return w(e,_)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:v("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(m.default,{className:v("chevron")}))):null,r.default.createElement("div",null,O&&r.default.createElement("div",{className:v("css")},a),s&&r.default.createElement("div",{className:v("code")},n))))};O.propTypes=x,O.defaultProps={isExpanded:!1};var j=O;t.default=j},798:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(1)),i=l(n(4)),o=l(n(799));function l(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(o.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},d=function(e){var t=e.src,n=e.name,r=e.url,i=e.version,o=a.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},a.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(i))),l=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},o,l)};d.propTypes=m;var p=d;t.default=p},799:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},801:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=o({},e);return r.a.createElement(i.a,t,r.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},802:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},914:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),i=n(798),o=n.n(i),l=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-breakpoints",name:"terra-breakpoints",version:"2.32.0",url:t})}}}]);