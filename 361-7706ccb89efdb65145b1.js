(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1445:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),u=n.n(a),i=n(809),l=n(818),c=u.a.bind(l.a);t.default=function(){return o.a.createElement("div",{className:c("content-wrapper")},o.a.createElement(i.a,{id:"form-input-value",value:"value",ariaLabel:"label"}))}},809:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),u=n.n(a),i=n(10),l=n.n(i),c=n(4),p=n.n(c),f=n(6),s=n.n(f);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=p.a.bind({"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2i8DL","orion-fusion-theme":"Input-module__orion-fusion-theme___2Cscj","form-input":"Input-module__form-input___3YNQv","form-error":"Input-module__form-error___DFrVY","form-incomplete":"Input-module__form-incomplete___1Jx-6"}),P={defaultValue:u.a.oneOfType([u.a.string,u.a.number]),disabled:u.a.bool,isIncomplete:u.a.bool,isInvalid:u.a.bool,onBlur:u.a.func,onChange:u.a.func,onFocus:u.a.func,onInput:u.a.func,name:u.a.string,pattern:u.a.string,refCallback:u.a.func,required:u.a.bool,type:u.a.string,value:u.a.oneOfType([u.a.string,u.a.number]),ariaLabel:u.a.string},k={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e);var t,n,r,a=g(u);function u(){return O(this,u),a.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,a=t.isIncomplete,u=t.isInvalid,i=t.onBlur,c=t.onChange,p=t.onFocus,f=t.onInput,s=t.name,b=t.pattern,O=t.refCallback,_=t.required,h=t.type,g=t.ariaLabel,w=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),P=this.context,k=l()(I("form-input",{"form-error":u},{"form-incomplete":a&&_&&!u},P.className),j.className);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=g||j["aria-label"]:g&&(e=g),j["aria-label"]=e,_&&(j["aria-required"]="true"),void 0!==w?j.value=w:void 0!==n&&(j.defaultValue=n),j.placeholder&&(j.placeholder=null),o.a.createElement("input",y({},j,{ref:function(e){O&&O(e)},name:s,type:h,pattern:b,onBlur:i,onChange:c,onFocus:p,onInput:f,disabled:r,required:_,className:k}))}}])&&_(t.prototype,n),r&&_(t,r),u}(o.a.Component);C.propTypes=P,C.defaultProps=k,C.contextType=s.a,C.isInput=!0;t.a=C},818:function(e,t,n){"use strict";t.a={"content-wrapper":"Input-test-module__content-wrapper___38ykk","programmatic-button":"Input-test-module__programmatic-button___3RPba"}}}]);