(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{1626:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(817);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,r,a=c(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this)).state={breakpoint:void 0},e.handleOnChange=e.handleOnChange.bind(f(e)),e}return t=s,(n=[{key:"handleOnChange",value:function(e){this.setState({breakpoint:e})}},{key:"render",value:function(){var e=this.state.breakpoint,t=null;return"tiny"===e?t=o.a.createElement("div",null,"Tiny"):"small"===e?t=o.a.createElement("div",null,"Small"):"medium"===e?t=o.a.createElement("div",null,"Medium"):"large"===e?t=o.a.createElement("div",null,"Large"):"huge"===e?t=o.a.createElement("div",null,"Huge"):"enormous"===e&&(t=o.a.createElement("div",null,"Enormous")),o.a.createElement(i.a,{onChange:this.handleOnChange},t)}}])&&u(t.prototype,n),r&&u(t,r),s}(o.a.Component);t.default=h},817:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=n(122),l=n.n(u),c=n(160);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={children:a.a.node,onChange:a.a.func,onResize:a.a.func,tiny:a.a.element,small:a.a.element,medium:a.a.element,large:a.a.element,huge:a.a.element,enormous:a.a.element,responsiveTo:a.a.oneOf(["window","parent"])},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,i=h(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).state={element:null},e.setContainer=e.setContainer.bind(d(e)),e.handleResize=e.handleResize.bind(d(e)),e.handleWindowResize=e.handleWindowResize.bind(d(e)),e.animationFrameID=null,e}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new l.a((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,o=t.tiny,i=t.small,a=t.medium,u=t.large,l=t.huge,s=t.enormous;r&&r(e);var f,p=Object(c.activeBreakpointForSize)(e);n&&p!==this.breakpoint&&n(p),this.breakpoint=p,(o||i||a||u||l||s)&&(f=e>=c.default.enormous&&s?"enormous":e>=c.default.huge&&l?"huge":e>=c.default.large&&u?"large":e>=c.default.medium&&a?"medium":e>=c.default.small&&i?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:o.a.createElement(o.a.Fragment,null,"parent"===n&&!this.container&&o.a.createElement("div",{ref:this.setContainer}),t)}}])&&f(t.prototype,n),r&&f(t,r),a}(o.a.Component);v.propTypes=b,v.defaultProps={responsiveTo:"parent"},t.a=v}}]);