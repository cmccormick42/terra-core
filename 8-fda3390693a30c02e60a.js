(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{836:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),o=a.n(i),l=a(10),u=a.n(l),s=a(4),c=a.n(s),d=a(11),f=a(6),v=a.n(f),p="",b=function e(t,a,r,n){if(!r&&t===p)return n.formatMessage({id:"Terra.form.select.defaultDisplay"});if(a&&a.length)for(var i=0;i<a.length;i+=1){var o=a[i];if(o.value){if(o.value===t)return o.display}else if(o.options){var l=e(t,o.options);if(l)return l}}},m=function e(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!a)return p;if(t&&t.length)for(var r=0;r<t.length;r+=1){var n=t[r];if(n.value)return n.value;var i=e(n.options,a);if(i)return i}},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!t&&e===p},y=function(e){return null!=e},g=function(e,t){return"".concat(e,"-").concat(t)},h=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return a.indexOf(g(t,r))>=0?e(t,a,r+1):r},w=a(931);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function N(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var I=c.a.bind({"clinical-lowlight-theme":"NativeSelect-module__clinical-lowlight-theme___2iUyw","orion-fusion-theme":"NativeSelect-module__orion-fusion-theme___2jd0T",native:"NativeSelect-module__native___2HIuS",incomplete:"NativeSelect-module__incomplete___1xJGb",invalid:"NativeSelect-module__invalid___14s_J","arrow-icon":"NativeSelect-module__arrow-icon___ux03q",placeholder:"NativeSelect-module__placeholder___3-d3b",disabled:"NativeSelect-module__disabled___3L1p1",display:"NativeSelect-module__display___2yDJJ",frame:"NativeSelect-module__frame___796Ls",select:"NativeSelect-module__select___216El",arrow:"NativeSelect-module__arrow___1gucV"}),q={ariaDescribedBy:o.a.string,ariaLabel:o.a.string.isRequired,attrs:o.a.object,defaultValue:o.a.oneOfType([o.a.number,o.a.string]),disabled:o.a.bool,id:o.a.string,intl:o.a.shape({formatMessage:o.a.func}).isRequired,isFilterStyle:o.a.bool,isInvalid:o.a.bool,isIncomplete:o.a.bool,onChange:o.a.func,options:o.a.arrayOf(o.a.oneOfType([w.b,w.a])),refCallback:o.a.func,required:o.a.bool,value:o.a.oneOfType([o.a.number,o.a.string]),onBlur:o.a.func,onFocus:o.a.func,onMouseDown:o.a.func},E=function e(t){var a=[];return t.map((function(t){var r=t.disabled?{disabled:!0}:void 0;if(t.options){var i=h(t.display,a),o=g(t.display,i);return a.push(o),n.a.createElement("optgroup",j({},r,{key:o,label:t.display}),e(t.options))}return n.a.createElement("option",j({},r,{key:"".concat(t.value),value:t.value}),t.display)}))},A=function(e){var t=e.ariaDescribedBy,a=e.ariaLabel,i=e.attrs,o=e.disabled,l=e.defaultValue,s=e.id,c=e.intl,d=e.isFilterStyle,f=e.isInvalid,g=e.isIncomplete,h=e.onBlur,w=e.onChange,O=e.onFocus,q=e.onMouseDown,A=e.options,D=e.refCallback,T=e.required,k=e.value,C=N(e,["ariaDescribedBy","ariaLabel","attrs","disabled","defaultValue","id","intl","isFilterStyle","isInvalid","isIncomplete","onBlur","onChange","onFocus","onMouseDown","options","refCallback","required","value"]),F=S(Object(r.useState)(y(k)?void 0:l||m(A,d)),2),M=F[0],R=F[1],x=Object(r.useRef)(y(k)),B=Object(r.useRef)(),J=n.a.useContext(v.a),L=x.current?k:M,P=b(L,A,d,c);P||(L=m(A,d),P=b(L,A,d,c));var V={"aria-describedby":t,"aria-label":a,id:s,disabled:o,"aria-invalid":f||void 0,required:T,value:L},U=u()(I("native",J.className,{disabled:o},{invalid:f},{incomplete:T&&g},{placeholder:_(V.value,d)}),C.className);return n.a.createElement("div",j({},C,{className:U,ref:B,"data-focus-interaction":"none"}),n.a.createElement("div",{"aria-hidden":!0,className:I("frame")},n.a.createElement("div",{className:I("display"),"aria-disabled":o||void 0},P),n.a.createElement("div",{className:I("arrow")},n.a.createElement("div",{className:I("arrow-icon")}))),n.a.createElement("select",j({},i,V,{className:I("select"),onChange:function(e){x.current||R(e.currentTarget.value),w&&w(e)},onMouseDown:function(e){B.current.setAttribute("data-focus-interaction","mouse"),q&&q(e)},onFocus:function(e){"mouse"!==B.current.getAttribute("data-focus-interaction")&&B.current.setAttribute("data-focus-interaction","keyboard"),O&&O(e)},onBlur:function(e){B.current.setAttribute("data-focus-interaction","none"),h&&h(e)},ref:D}),function(e,t){if(!e)return n.a.createElement("option",{value:p},t.formatMessage({id:"Terra.form.select.defaultDisplay"}))}(d,c),E(A)))};A.propTypes=q,A.defaultProps={disabled:!1,isFilterStyle:!1,isIncomplete:!1,isInvalid:!1,options:[],required:!1};t.a=Object(d.injectIntl)(A)},931:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var r=a(1),n=a.n(r),i=n.a.shape({display:n.a.string.isRequired,disabled:n.a.bool,value:n.a.oneOfType([n.a.number,n.a.string]).isRequired}),o=n.a.shape({display:n.a.string.isRequired,disabled:n.a.bool,options:n.a.arrayOf(i).isRequired})}}]);