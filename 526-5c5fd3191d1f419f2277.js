(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{1450:function(e,i,n){"use strict";n.r(i);var r=n(0),a=n.n(r),d=n(830),t=n(851);i.default=function(){return a.a.createElement(t.a,{legend:"Desired Department",showOptional:!0},a.a.createElement(d.a,{id:"ux-dept",name:"dept[]",labelText:"UX/Interaction Design",value:"ux"}),a.a.createElement(d.a,{id:"magazine-dept",name:"dept[]",labelText:"Magazine Advertisements",value:"magazine"}),a.a.createElement(d.a,{id:"website-dept",name:"dept[]",labelText:"Website Advertisements",value:"website"}),a.a.createElement(d.a,{id:"events-dept",name:"dept[]",labelText:"Event Promotions",value:"events"}))}},851:function(e,i,n){"use strict";var r=n(0),a=n.n(r),d=n(1),t=n.n(d),l=n(11),o=n(10),s=n.n(o),c=n(4),u=n.n(c),m=n(6),_=n.n(m),p=n(28),g=n.n(p),h=n(156);function f(){return(f=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,i){if(null==e)return{};var n,r,a=function(e,i){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=u.a.bind({"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___3b-Fy","orion-fusion-theme":"RadioField-module__orion-fusion-theme___1OOKK","radio-field":"RadioField-module__radio-field___ct8VD","is-inline":"RadioField-module__is-inline___2cCY2","legend-group":"RadioField-module__legend-group___9Aad-","legend-group-hidden":"RadioField-module__legend-group-hidden___1uTve",legend:"RadioField-module__legend___3dDrN","error-icon":"RadioField-module__error-icon___3-fM5","error-icon-hidden":"RadioField-module__error-icon-hidden___3ciPg",required:"RadioField-module__required___3B97W","required-hidden":"RadioField-module__required-hidden___RA9AV",optional:"RadioField-module__optional___2mnPg","help-text":"RadioField-module__help-text___3GS05","error-text":"RadioField-module__error-text___1Oz0b"}),R={children:t.a.node,error:t.a.node,help:t.a.node,hideRequired:t.a.bool,intl:t.a.shape({formatMessage:t.a.func}).isRequired,isInline:t.a.bool,isInvalid:t.a.bool,isLegendHidden:t.a.bool,legend:t.a.string.isRequired,legendAttrs:t.a.object,required:t.a.bool,showOptional:t.a.bool},E=function(e){var i=e.children,n=e.error,r=e.help,d=e.hideRequired,t=e.intl,l=e.isInvalid,o=e.isInline,c=e.isLegendHidden,u=e.legend,m=e.legendAttrs,p=e.required,R=e.showOptional,E=b(e,["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"]),O=a.a.useContext(_.a),q=s()(v("radio-field",{"is-inline":o},O.className),E.className),w=v(["legend",m.className]),x="terra-radio-field-description-".concat(g()()),F=r?"terra-radio-field-description-help-".concat(g()()):"",y=n?"terra-radio-field-description-error-".concat(g()()):"",N="".concat(x," ").concat(y," ").concat(F),I=a.a.createElement("legend",{id:x,className:v(["legend-group",{"legend-group-hidden":c}])},a.a.createElement("div",f({},m,{className:w}),l&&a.a.createElement("span",{className:v("error-icon")}),p&&(l||!d)&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{"aria-hidden":"true",className:v("required")},"*"),a.a.createElement(h.default,{text:t.formatMessage({id:"Terra.form.field.required"})})),u,p&&!l&&d&&a.a.createElement("span",{className:v("required-hidden")},"*"),R&&!p&&a.a.createElement("span",{className:v("optional")},t.formatMessage({id:"Terra.form.field.optional"})),!l&&a.a.createElement("span",{className:v("error-icon-hidden")}))),A=a.a.Children.map(i,(function(e){return e&&e.type.isRadio?a.a.cloneElement(e,{inputAttrs:{"aria-describedby":N}}):e}));return a.a.createElement("fieldset",f({},E,{required:p,className:q}),I,A,l&&n&&a.a.createElement("div",{id:y,className:v("error-text")},n),r&&a.a.createElement("div",{id:F,className:v("help-text")},r))};E.propTypes=R,E.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};i.a=Object(l.injectIntl)(E)}}]);