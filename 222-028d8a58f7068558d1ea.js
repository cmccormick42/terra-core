(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1724:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(816);e.default=function(){return o.a.createElement(a.a,{id:"iconOnlyToggleButton",closedButtonText:"Custom Text",isIconOnly:!0},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}},807:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),s=n.n(a),r=n(4),l=n.n(r),u=n(808),c=n.n(u);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=l.a.bind({toggle:"Toggle-module__toggle___1Qy4y"}),m={children:s.a.node.isRequired,isAnimated:s.a.bool,isOpen:s.a.bool},d=function(t){var e,n=t.isAnimated,i=t.isOpen,a=t.children,s=f(t,["isAnimated","isOpen","children"]),r=i?"auto":0;return e=n?o.a.createElement(c.a,{duration:250,height:r,easing:"ease-out"},a):i&&a,o.a.createElement("div",h({},s,{className:p("toggle",s.className),"aria-hidden":!i}),e)};d.propTypes=m,d.defaultProps={isAnimated:!1,isOpen:!1};e.a=d},808:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=u(n(0)),r=u(n(1)),l=u(n(10));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),s=0;s<a.length;s++){var r=a[s];-1===n.indexOf(r)&&(o[r]=t[r])}return o}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function d(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&d(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",a="visible";d(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},h,t.animationStateClasses);var s=n.getStaticStateClasses(i);return n.state={animationStateClasses:s,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,o=this,a=this.props,s=a.delay,r=a.duration,u=a.height,h=a.onAnimationEnd,f=a.onAnimationStart;if(this.contentElement&&u!==t.height){var p;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=r+s,O=null,S={height:null,overflow:"hidden"},C="auto"===e.height;d(u)?(O=u<0||"0"===u?0:u,S.height=O):g(u)?(O="0%"===u?0:u,S.height=O):(O=b,S.height="auto",S.overflow=null),C&&(S.height=O,O=b);var T=(0,l.default)((c(p={},this.animationStateClasses.animating,!0),c(p,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(p,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(p,this.animationStateClasses.animatingToHeightZero,0===S.height),c(p,this.animationStateClasses.animatingToHeightAuto,"auto"===S.height),c(p,this.animationStateClasses.animatingToHeightSpecific,S.height>0),p)),_=this.getStaticStateClasses(S.height);this.setState({animationStateClasses:T,height:O,overflow:"hidden",shouldUseTransitions:!C}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),C?(S.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(S),y(f,{newHeight:S.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:_,shouldUseTransitions:!1}),o.hideContent(S.height),y(h,{newHeight:S.height})}),v)):(y(f,{newHeight:O}),this.timeoutID=setTimeout((function(){S.animationStateClasses=_,S.shouldUseTransitions=!1,o.setState(S),"auto"!==u&&o.hideContent(O),y(h,{newHeight:O})}),v))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,r=n.children,u=n.className,h=n.contentClassName,m=n.delay,d=n.duration,g=n.easing,y=n.id,b=n.style,v=this.state,O=v.height,S=v.overflow,C=v.animationStateClasses,T=v.shouldUseTransitions,_=o({},b,{height:O,overflow:S||b.overflow});T&&a&&(_.transition="height "+d+"ms "+g+" "+m+"ms",b.transition&&(_.transition=b.transition+", "+_.transition),_.WebkitTransition=_.transition);var w={};i&&(w.transition="opacity "+d+"ms "+g+" "+m+"ms",w.WebkitTransition=w.transition,0===O&&(w.opacity=0));var I=(0,l.default)((c(t={},C,!0),c(t,u,u),t)),j="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===O;return s.default.createElement("div",o({},p.apply(void 0,[this.props].concat(f)),{"aria-hidden":j,className:I,id:y,style:_}),s.default.createElement("div",{className:h,style:w,ref:function(t){return e.contentElement=t}},r))}}]),e}(s.default.Component);b.propTypes={"aria-hidden":r.default.bool,animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,delay:r.default.number,duration:r.default.number,easing:r.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||g(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:r.default.string,onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},816:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),s=n.n(a),r=n(4),l=n.n(r),u=n(25),c=n(155),h=n(807);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=l.a.bind({"toggle-button":"ToggleButton-module__toggle-button___Nyogt",icon:"ToggleButton-module__icon___2IKaD","is-open":"ToggleButton-module__is-open___1zDcD","is-icon-animated":"ToggleButton-module__is-icon-animated___Upjep","button-text":"ToggleButton-module__button-text___2ULyt"}),C={children:s.a.node.isRequired,closedButtonText:s.a.string.isRequired,buttonAttrs:s.a.object,icon:s.a.element,isAnimated:s.a.bool,isIconAnimated:s.a.bool,isIconOnly:s.a.bool,isInitiallyOpen:s.a.bool,onClose:s.a.func,onOpen:s.a.func,openedButtonText:s.a.string},T={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:o.a.createElement(c.default,null)},_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,i,a=y(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).state={isOpen:t.isInitiallyOpen},e.handleOnClick=e.handleOnClick.bind(v(e)),e}return e=s,(n=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),i=t.icon,a=(t.isAnimated,t.isIconAnimated),s=t.isIconOnly,r=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),l=m(t,["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"]),c=r||n,f=this.state.isOpen?c:n,d=s?n:f,g=S(["button",{"is-open":this.state.isOpen},{"is-icon-animated":a},l.className]),y=o.a.createElement(u.default,p({},e,{isIconOnly:s,icon:o.a.createElement("span",{className:S("icon")},i),"aria-expanded":this.state.isOpen,text:d,onClick:this.handleOnClick}));return o.a.createElement("div",p({},l,{className:g}),y,o.a.createElement(h.a,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&d(e.prototype,n),i&&d(e,i),s}(o.a.Component);_.propTypes=C,_.defaultProps=T;e.a=_}}]);