(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1839:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return _}));var n=l(0),a=l.n(n),r=l(302),o=l(813),c=l(840),i=function(){return a.a.createElement(o.b,{summaryId:"example-scalar-table",summary:"This table shows an implementation of scalar width table columns.",numberOfColumns:4,cellPaddingStyle:"standard",columnWidths:[{scalar:2},{scalar:1},{scalar:3},{scalar:4}],dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"unique-cell-0",children:"Scalar 2"},{key:"cell-1",id:"unique-cell-1",children:"Scalar 1"},{key:"cell-2",id:"unique-cell-2",children:"Scalar 3"},{key:"cell-3",id:"unique-cell-3",children:"Scalar 4"}]},bodyData:[{rows:(e=c.a,e.map((function(e){return{key:(t=e).key,cells:(l=t.cells,l.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,l})))}]});var e};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d={};function m(e){var t=e.components,l=s(e,["components"]);return Object(r.mdx)("wrapper",u({},d,l,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => (\n  {\n    key: rowData.key,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map(childItem => createRow(childItem));\n\nconst ScalarWidthTable = () => (\n  <Table\n    summaryId=\"example-scalar-table\"\n    summary=\"This table shows an implementation of scalar width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    columnWidths={[\n      { scalar: 2 },\n      { scalar: 1 },\n      { scalar: 3 },\n      { scalar: 4 },\n    ]}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'unique-cell-0', children: 'Scalar 2' },\n        { key: 'cell-1', id: 'unique-cell-1', children: 'Scalar 1' },\n        { key: 'cell-2', id: 'unique-cell-2', children: 'Scalar 3' },\n        { key: 'cell-3', id: 'unique-cell-3', children: 'Scalar 4' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default ScalarWidthTable;\n\n")))}m.isMDXComponent=!0;var p=l(797),f=l.n(p),y=function(e){var t=e.title,l=e.description,n=e.isExpanded;return a.a.createElement(f.a,{title:t||"Scalar Width Table",description:l,example:a.a.createElement(i,null),exampleSrc:a.a.createElement(m,null),isExpanded:n})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var w={};function _(e){var t=e.components,l=h(e,["components"]);return Object(r.mdx)("wrapper",b({},w,l,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"terra-table---scalar-width-columns"},"Terra Table - Scalar Width Columns"),Object(r.mdx)("h2",{id:"create-row-and-cell-generation-functions"},"Create Row and Cell Generation Functions"),Object(r.mdx)("p",null,"First we declare our method of creating our rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n\n+ const createRows = data => data.map(childItem => createRow(childItem));\n")),Object(r.mdx)("p",null,"Followed by unpacking our cell data into those rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(r.mdx)("p",null,"And then we define the functional component returning our table."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const ScalarWidthTable = () => (\n+   <Table\n+     summaryId=\"example-scalar-table\"\n+     summary=\"This table shows an implementation of scalar width table columns.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: `unique-cell-0`, children: 'Scalar 2' },\n+         { key: 'cell-1', id: `unique-cell-1`, children: 'Scalar 1' },\n+         { key: 'cell-2', id: `unique-cell-2`, children: 'Scalar 3' },\n+         { key: 'cell-3', id: `unique-cell-3`, children: 'Scalar 4' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),Object(r.mdx)("p",null,"Then in order to adjust our columns, we set the ",Object(r.mdx)("inlineCode",{parentName:"p"},"columnWidths")," prop with your appropriate index based width values."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-diff"},"const ScalarWidthTable = () => (\n  <Table\n    summaryId=\"example-scalar-table\"\n    summary=\"This table shows an implementation of scalar width table columns.\"\n    numberOfColumns={3}\n    cellPaddingStyle=\"standard\"\n+   columnWidths={[\n+     { scalar: 2 },\n+     { scalar: 1 },\n+     { scalar: 3 },\n+     { scalar: 4 },\n+   ]}\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: `unique-cell-0`, children: 'Scalar 2' },\n        { key: 'cell-1', id: `unique-cell-1`, children: 'Scalar 1' },\n        { key: 'cell-2', id: `unique-cell-2`, children: 'Scalar 3' },\n        { key: 'cell-3', id: `unique-cell-3`, children: 'Scalar 4' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n")),Object(r.mdx)("p",null,"Using these steps we get the following example:"),Object(r.mdx)(y,{mdxType:"ScalarWidthTable"}))}_.isMDXComponent=!0},797:function(e,t,l){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e,t&&t.set(e,l);return l}(l(0)),r=m(l(1)),o=m(l(4)),c=l(93),i=m(l(801)),u=m(l(155)),s=l(9),d=m(l(802));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var l=[],n=!0,a=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(l.push(o.value),!t||l.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}var b=o.default.bind(d.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,l=e.exampleSrc,n=e.exampleCssSrc,r=e.title,o=e.description,d=e.isExpanded,m=f((0,a.useState)(d),2),p=m[0],y=m[1],h=f((0,a.useState)(!1),2),x=h[0],g=h[1],v=a.default.useContext(c.ThemeContext),k=void 0!==n,O=function(){g(!x),p&&y(!p)},S=function(){y(!p),x&&g(!x)},T=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:b("template",v.className)},a.default.createElement("div",{className:b("header")},r&&a.default.createElement("h2",{className:b("title")},r)),a.default.createElement("div",{className:b("content")},o&&a.default.createElement("div",{className:b("description")},o),t),a.default.createElement("div",{className:b("footer")},l?a.default.createElement("div",{className:b("button-container")},k&&a.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return T(e,O)},onBlur:w,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(i.default,{className:b("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(u.default,{className:b("chevron")})),a.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":p}),onClick:S,onKeyDown:function(e){return T(e,S)},onBlur:w,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(i.default,{className:b("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(u.default,{className:b("chevron")}))):null,a.default.createElement("div",null,x&&a.default.createElement("div",{className:b("css")},n),p&&a.default.createElement("div",{className:b("code")},l))))};x.propTypes=h,x.defaultProps={isExpanded:!1};var g=x;t.default=g},801:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),r=l(12);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}var c=function(e){var t=o({},e);return a.a.createElement(r.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=c},802:function(e,t,l){"use strict";l.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},840:function(e,t,l){"use strict";t.a=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}]}}]);