(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1622:function(e,r,o){"use strict";o.r(r);var l=o(0),a=o.n(l),t=o(4),s=o.n(t),_=o(862),c=o(905),n=s.a.bind(c.a);r.default=function(){return a.a.createElement("div",null,a.a.createElement(_.a,{id:"progressbarWithNamedColor",valueText:"5%",value:5,max:10,colorClass:n(["color-bar-example-1"])}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(_.a,{id:"progressbarWithHexColor",valueText:"7.5%",value:7.5,max:10,colorClass:n(["color-bar-example-2"])}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(_.a,{id:"progressbarWithRGBColor",valueText:"10%",value:10,max:10,colorClass:n(["color-bar-example-3"])}))}},862:function(e,r,o){"use strict";var l=o(0),a=o.n(l),t=o(1),s=o.n(t),_=o(10),c=o.n(_),n=o(4),u=o.n(n),m=o(6),i=o.n(m);function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var o,l,a=function(e,r){if(null==e)return{};var o,l,a={},t=Object.keys(e);for(l=0;l<t.length;l++)o=t[l],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)o=t[l],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=u.a.bind({"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___3_Pay","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___2J6zD","progress-bar":"ProgressBar-module__progress-bar___16nhu","default-color":"ProgressBar-module__default-color___3RaSH",tiny:"ProgressBar-module__tiny___3R0tQ",small:"ProgressBar-module__small___2815r",medium:"ProgressBar-module__medium___2AyRE",large:"ProgressBar-module__large___1rsT2",huge:"ProgressBar-module__huge___1reDi"}),x={heightSize:s.a.oneOf(["tiny","small","medium","large","huge"]),value:s.a.number.isRequired,max:s.a.number,valueText:s.a.string,colorClass:s.a.string},g={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},h=function(e){var r=e.heightSize,o=e.value,l=e.max,t=e.valueText,s=e.colorClass,_=d(e,["heightSize","value","max","valueText","colorClass"]),n=a.a.useContext(i.a),u=c()(p("progress-bar",r,s,n.className),_.className),m=o/l*100;return a.a.createElement("progress",b({},_,{className:u,max:100,value:m,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,"aria-valuetext":t,tabIndex:"-1"}))};h.propTypes=x,h.defaultProps=g;r.a=h},905:function(e,r,o){"use strict";r.a={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___2kToJ","orion-fusion-theme":"colors-module__orion-fusion-theme___3sQ6v","color-bar-example-1":"colors-module__color-bar-example-1___2L-a8","color-bar-example-2":"colors-module__color-bar-example-2___2sE8q","color-bar-example-3":"colors-module__color-bar-example-3___29udM","two-colors-bar-2-colors-example-1":"colors-module__two-colors-bar-2-colors-example-1___3Kbie","two-colors-bar-2-colors-example-2":"colors-module__two-colors-bar-2-colors-example-2___kS5IF","two-colors-bar-2-colors-example-3":"colors-module__two-colors-bar-2-colors-example-3___2BAmi","customized-color-bar-example-1":"colors-module__customized-color-bar-example-1___2g5ZH","customized-color-bar-example-2":"colors-module__customized-color-bar-example-2___1iNzY"}}}]);