(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{1584:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(159),c=n(875);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,r,u=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=u.call(this,e)).state={errorImageId:void 0,loadedImageId:void 0},t}return t=s,(n=[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",null,"Loading Image Examples"),o.a.createElement("p",null,"Image is successfully loaded."),o.a.createElement("div",null,o.a.createElement(a.default,{id:this.state.loadedImageId,alt:"loading image",src:c.a,onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})}})),o.a.createElement("p",null,"Image fails to load."),o.a.createElement("div",null,o.a.createElement(a.default,{id:this.state.errorImageId,src:"invalid.jpg",onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})},alt:"Alt text for image with invalid source"})))}}])&&i(t.prototype,n),r&&i(t,r),s}(o.a.Component);t.default=p},875:function(e,t,n){"use strict";t.a=n.p+"51d085f765a7361bab659ffffdb9bb46.jpg"}}]);