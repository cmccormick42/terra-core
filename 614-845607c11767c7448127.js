(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{1607:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(96),c=n(158),u=n(819);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=i.a.bind(u.a),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,a=v(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={show:!1},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(p(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(p(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(p(e)),e.forceUpdateForTest=function(){e.forceUpdate()},e}return t=i,(n=[{key:"componentDidMount",value:function(){document.addEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"handleTriggerOverlay",value:function(){this.setState({show:!0,relative:!0,id:"terra-Overlay--container"})}},{key:"handleTriggerFullScreenOverlay",value:function(){this.setState({show:!0,relative:!1,id:"terra-Overlay--fullscreen"})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"addOverlay",value:function(){return o.a.createElement(l.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,onRequestClose:this.handleOnRequestESC,id:this.state.id,zIndex:"6000"},o.a.createElement("h3",null,"The onRequestClose prop gives the overlay close behaviors."),o.a.createElement("br",null),o.a.createElement("p",null,"Close by clicking inside the overlay or pressing the ESC key."))}},{key:"render",value:function(){return o.a.createElement(c.default,{className:b("overlay-container2"),overlay:this.addOverlay(),id:"test-overlay-container"},o.a.createElement("button",{type:"button",id:"trigger_container",onClick:this.handleTriggerOverlay},"Trigger Container Overlay"),o.a.createElement("button",{type:"button",id:"trigger_fullscreen",onClick:this.handleTriggerFullScreenOverlay},"Trigger Fullscreen Overlay"))}}])&&f(t.prototype,n),r&&f(t,r),i}(o.a.Component);t.default=g},819:function(e,t,n){"use strict";t.a={"overlay-container1":"OverlayTestCommon-module__overlay-container1___3U11R","overlay-container2":"OverlayTestCommon-module__overlay-container2___3hcqx"}}}]);