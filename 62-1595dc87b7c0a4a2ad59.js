(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1828:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(0),o=n.n(a),r=n(302),i=n(823),l=n(94),c=n(811),s=n(4),d=n.n(s),u=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique1-1"},{title:"Item 1-2",key:"unique-1-2"}]}],m=n(838);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=d.a.bind(m.a),x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,a,r=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.call(this,e)).createSection=t.createSection.bind(S(t)),t.createSections=t.createSections.bind(S(t)),t.handleSectionSelection=t.handleSectionSelection.bind(S(t)),t.state={collapsedKeys:[]},t}return t=i,(n=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:l.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSection",value:function(e){return o.a.createElement(l.Section,{key:e.key,title:e.title,isCollapsed:this.state.collapsedKeys.indexOf(e.key)>=0,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},e.childItems.map((function(e){return t=e,o.a.createElement(l.Item,{key:t.key},o.a.createElement(c.c,{title:t.title,className:g("placeholder")}));var t})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return o.a.createElement(l.default,{role:"listbox"},this.createSections(u))}}])&&f(t.prototype,n),a&&f(t,a),i}(o.a.Component);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function k(e){var t=e.components,n=O(e,["components"]);return Object(r.mdx)("wrapper",_({},j,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { Item, Section, Utils } from 'terra-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List role=\"listbox\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionList;\n\n")))}k.isMDXComponent=!0;var w=n(797),D=n.n(w),E=n(839),N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.a.createElement(D.a,{title:t||"Section List",description:n,example:o.a.createElement(x,null),exampleCssSrc:o.a.createElement(E.a,null),exampleSrc:o.a.createElement(k,null),isExpanded:a})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var T={};function L(e){var t=e.components,n=I(e,["components"]);return Object(r.mdx)("wrapper",C({},T,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(i.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-list---sections"},"Terra List - Sections"),Object(r.mdx)("p",null,"List sections are available in both static and collapsible varieties. A list section that is collapsed will remove its children items from the DOM. This improves performance and accessiblilty, but may remove potentional state associated to a mounted list item. If your list item content has additional state, it needs to be stored externally and reapplied when thawed for the next render that shows its section open. Since this render occurs at the same time that a collapsible section state changes, for additional optimization, collapsed sections do not necessarily need to be provided with child items."),Object(r.mdx)("h2",{id:"state-management"},"State Management"),Object(r.mdx)("p",null,"As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern."),Object(r.mdx)("p",null,"First defaulting our state to an empty array in the constructor. "),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+   this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),Object(r.mdx)("p",null,"Next creating an event handler callback method to pass to the section's ",Object(r.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"onSelect")," callback will return the metaData prop passed to each section."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n   constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n   }\n  \n+  handleSectionSelection(event, metaData) {\n\n+  }\n")),Object(r.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleSectionSelection(event, metaData) {\n+   event.preventDefault();\n  }\n")),Object(r.mdx)("p",null,"Terra List comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method ",Object(r.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),Object(r.mdx)("p",null,"Settting state will trigger another render. So in the render method we need to generate our sections with the updated ",Object(r.mdx)("inlineCode",{parentName:"p"},"isCollapsed")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n",Object(r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n")),Object(r.mdx)("p",null,"Next we need to set up our ",Object(r.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",Object(r.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),Object(r.mdx)("p",null,"For rendering the collapsible section we set ",Object(r.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," for all sections."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),Object(r.mdx)("p",null,"Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use ",Object(r.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(r.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n")),Object(r.mdx)("p",null,"We can then implement the unpack of our data into our list items."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+      <Placeholder />\n+    </Item>\n+  );\n   return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  \n\n")),Object(r.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle="standard">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n')),Object(r.mdx)("p",null,"Using these steps we get the following example:"),Object(r.mdx)("h2",{id:"examples"},"Examples"),Object(r.mdx)(N,{mdxType:"SectionList"}))}L.isMDXComponent=!0},797:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=m(n(1)),i=m(n(4)),l=n(93),c=m(n(801)),s=m(n(155)),d=n(9),u=m(n(802));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var y=i.default.bind(u.default),b={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,u=e.isExpanded,m=f((0,o.useState)(u),2),p=m[0],h=m[1],b=f((0,o.useState)(!1),2),g=b[0],x=b[1],_=o.default.useContext(l.ThemeContext),O=void 0!==a,j=function(){x(!g),p&&h(!p)},k=function(){h(!p),g&&x(!g)},w=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",_.className)},o.default.createElement("div",{className:y("header")},r&&o.default.createElement("h2",{className:y("title")},r)),o.default.createElement("div",{className:y("content")},i&&o.default.createElement("div",{className:y("description")},i),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},O&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":g}),onClick:j,onKeyDown:function(e){return w(e,j)},onBlur:S,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":p}),onClick:k,onKeyDown:function(e){return w(e,k)},onBlur:S,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:y("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:y("css")},a),p&&o.default.createElement("div",{className:y("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var x=g;t.default=x},798:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(1)),r=l(n(4)),i=l(n(799));function l(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(i.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(e){var t=e.src,n=e.name,o=e.url,r=e.version,i=a.default.createElement("a",{className:c("badge"),href:o||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:c("badge-name")},o?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(r))),l=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},i,l)};d.propTypes=s;var u=d;t.default=u},799:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},801:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return o.a.createElement(r.a,t,o.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},802:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},823:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),r=n(798),i=n.n(r),l=function(e){var t=e.url;return o.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.44.0",url:t})}},838:function(e,t,n){"use strict";t.a={placeholder:"ListDocCommon-module__placeholder___3a1of"}},839:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var a=n(302);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={};function l(e){var t=e.components,n=r(e,["components"]);return Object(a.mdx)("wrapper",o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}l.isMDXComponent=!0}}]);