"use strict";(self.webpackChunkmy_new_custom_application_project=self.webpackChunkmy_new_custom_application_project||[]).push([[9462],{"./node_modules/@commercetools-frontend/application-shell/dist/oidc-callback-babe5797.esm.js":(s,r,l)=>{l.r(r),l.d(r,{default:()=>OidcCallback});var c=l("./node_modules/@babel/runtime-corejs3/core-js-stable/url.js"),i=l.n(c);function e(s){this.message=s}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var d="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(s){var r=String(s).replace(/=+$/,"");if(r.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var l,c,i=0,d=0,a="";c=r.charAt(d++);~c&&(l=i%4?64*l+c:c,i++%4)?a+=String.fromCharCode(255&l>>(-2*i&6)):0)c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c);return a};function t(s){var r=s.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(s){return decodeURIComponent(d(s).replace(/(.)/g,(function(s,r){var l=r.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l})))}(r)}catch(s){return d(r)}}function n(s){this.message=s}n.prototype=new Error,n.prototype.name="InvalidTokenError";const a=function o(s,r){if("string"!=typeof s)throw new n("Invalid token specified");var l=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(s.split(".")[l]))}catch(s){throw new n("Invalid token specified: "+s.message)}};var m=l("./node_modules/qss/dist/qss.m.js"),u=l("./node_modules/react-router/esm/react-router.js"),j=l("./node_modules/@commercetools-frontend/application-shell/dist/configure-apollo-e01b60c3.esm.js"),b=l("./node_modules/@commercetools-frontend/application-shell/dist/redirector-368eeb0f.esm.js"),p=l("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),f=l("./node_modules/@commercetools-frontend/application-components/dist/commercetools-frontend-application-components.esm.js"),_=l("./node_modules/@commercetools-frontend/assets/images/doors-closed.svg"),g=l.n(_),h=l("./node_modules/@commercetools-frontend/i18n/dist/commercetools-frontend-i18n.esm.js"),y=l("./node_modules/@commercetools-uikit/card/dist/commercetools-uikit-card.esm.js"),w=l("./node_modules/@commercetools-uikit/constraints/dist/commercetools-uikit-constraints.esm.js"),k=l("./node_modules/@commercetools-uikit/design-system/dist/commercetools-uikit-design-system.esm.js"),v=l("./node_modules/@commercetools-uikit/flat-button/dist/commercetools-uikit-flat-button.esm.js"),Z=l("./node_modules/@commercetools-uikit/icons/dist/commercetools-uikit-icons.esm.js"),x=l("./node_modules/@commercetools-uikit/notifications/dist/commercetools-uikit-notifications.esm.js"),C=l("./node_modules/@commercetools-uikit/spacings/dist/commercetools-uikit-spacings.esm.js"),I=l("./node_modules/@commercetools-uikit/text/dist/commercetools-uikit-text.esm.js"),S=l("./node_modules/@commercetools-frontend/application-shell/dist/index-58243680.esm.js"),T=l("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/has.js"),l("./node_modules/lodash/mapValues.js"),l("./node_modules/omit-empty-es/dist/omit-empty-es.esm.js"),l("./node_modules/@commercetools-frontend/constants/dist/commercetools-frontend-constants.esm.js"),l("./node_modules/@commercetools-frontend/notifications/dist/commercetools-frontend-notifications.esm.js"),l("./node_modules/@commercetools-frontend/sdk/dist/commercetools-frontend-sdk.esm.js"),l("./node_modules/react/index.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js"),l("./node_modules/@commercetools-frontend/sentry/dist/commercetools-frontend-sentry.esm.js"),l("./node_modules/@commercetools-frontend/application-shell/dist/constants-16199962.esm.js"),l("./node_modules/@commercetools-frontend/react-notifications/dist/commercetools-frontend-react-notifications.esm.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js"),l("./node_modules/redux-logger/dist/redux-logger.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js"),l("./node_modules/apollo-link-logger/es/index.js"),l("./node_modules/@commercetools-frontend/browser-history/dist/commercetools-frontend-browser-history.esm.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"),l("./node_modules/@commercetools/http-user-agent/dist/http-user-agent.umd.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js"),l("./node_modules/@commercetools-frontend/application-shell/dist/use-is-served-by-proxy-77984220.esm.js"),l("./node_modules/@commercetools-frontend/application-shell-connectors/dist/commercetools-frontend-application-shell-connectors.esm.js"),l("./node_modules/@commercetools-frontend/assets/images/logo.svg"),l("./node_modules/@commercetools-frontend/assets/images/ct-logo.svg"),l("./node_modules/@commercetools-frontend/l10n/dist/commercetools-frontend-l10n.esm.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js"),l("./node_modules/@flopflip/react-broadcast/dist/flopflip-react-broadcast.browser.esm.js"),l("./node_modules/classnames/index.js"),l("./node_modules/@commercetools-frontend/assets/images/diagonal-line.svg"),l("./node_modules/@commercetools-frontend/permissions/dist/commercetools-frontend-permissions.esm.js"),l("./node_modules/@commercetools-uikit/icons/inline-svg/dist/commercetools-uikit-icons-inline-svg.esm.js"),l("./node_modules/lodash/isNil.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js"),l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/flags.js"),l("./node_modules/@flopflip/combine-adapters/dist/flopflip-combine-adapters.esm.js"),l("./node_modules/@flopflip/http-adapter/dist/flopflip-http-adapter.esm.js"),l("./node_modules/@flopflip/launchdarkly-adapter/dist/flopflip-launchdarkly-adapter.esm.js"),l("./node_modules/react-redux/es/index.js"),l("./node_modules/lodash/upperFirst.js"),l("./node_modules/@commercetools-frontend/application-shell/dist/oidc-cd2edc3c.esm.js"),l("./node_modules/@commercetools-uikit/design-system/materials/resets.css"),l("./node_modules/@commercetools-frontend/actions-global/dist/commercetools-frontend-actions-global.esm.js"),l("./node_modules/@commercetools-frontend/application-config/ssr/dist/commercetools-frontend-application-config-ssr.esm.js");const q=(0,p.Z)("div",{target:"e57nw7s0"})("box-sizing:border-box;width:100%;margin:0;border:0;border-style:solid;border-top-width:1px;border-top-color:",k.ZT.colorNeutral,";"),AuthCallbackErrorPage=s=>{const r=(0,u.k6)();return(0,T.tZ)(h.cz,{locale:s.locale,applicationMessages:s.applicationMessages,children:l=>{let c=l.locale,i=l.messages;return(0,T.BX)(S.C,{locale:c,messages:i,children:[(0,T.tZ)(k.f6,{theme:"default",themeOverrides:f.yY.default}),(0,T.tZ)(f.bU,{contentScale:"wide",children:(0,T.tZ)(C.Z.Inline,{justifyContent:"center",children:(0,T.tZ)(w.Z.Horizontal,{max:11,children:(0,T.tZ)(y.Z,{insetScale:"xl",children:(0,T.BX)(C.Z.Stack,{scale:"l",children:[(0,T.tZ)(C.Z.Inline,{justifyContent:"center",children:(0,T.tZ)("img",{src:g(),alt:"Failed authentication"})}),(0,T.tZ)(I.Z.Headline,{as:"h2",children:"Authentication error"}),(0,T.tZ)(x.I,{type:"error",children:(0,T.tZ)(C.Z.Stack,{scale:"m",children:(0,T.tZ)(I.Z.Body,{children:s.message})})}),(0,T.BX)(C.Z.Stack,{scale:"m",children:[(0,T.tZ)(q,{}),(0,T.tZ)(v.Z,{label:"Try log in again",icon:(0,T.tZ)(Z.fP,{}),onClick:()=>{r.push("/")}})]})]})})})})})]})}})};AuthCallbackErrorPage.displayName="AuthCallbackErrorPage";const OidcCallback=s=>{const r=(0,u.TH)();let l;const c=(0,m.J)(r.hash.substring(1)),d=(0,j.t)(c.state),p=c.sessionToken;let f;try{p?f=a(p):l="Invalid client session (missing sessionToken)"}catch(g){l=g instanceof Error?g.message:"Unknown error"}if(!l){var _;const s=(null===(_=f)||void 0===_?void 0:_.nonce)===c.state,r=window.app.applicationId===(null===d||void 0===d?void 0:d.applicationId);d&&s&&r||(l="Invalid client session")}if(l)return(0,T.tZ)(AuthCallbackErrorPage,{message:l,locale:s.locale,applicationMessages:s.applicationMessages});if((0,j.u)(p),null!==d&&void 0!==d&&d.query.redirectTo)try{const s=new(i())(d.query.redirectTo);return(0,T.tZ)(b.R,{to:s.pathname})}catch(h){console.warn('Invalid "redirectTo" URL',d.query.redirectTo)}return(0,T.tZ)(b.R,{to:r.pathname.replace("/oidc/callback","")})};OidcCallback.displayName="OidcCallback"},"./node_modules/@commercetools-frontend/application-shell/dist/redirector-368eeb0f.esm.js":(s,r,l)=>{l.d(r,{R:()=>Redirector});var c=l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"),i=l.n(c),d=l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js"),a=l.n(d),m=l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"),u=l.n(m),j=l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js"),b=l.n(j),p=l("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"),f=l.n(p),_=l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js"),g=l.n(_),h=l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js"),y=l.n(h),w=l("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"),k=l.n(w),v=l("./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js"),Z=l("./node_modules/prop-types/index.js"),x=l.n(Z),C=l("./node_modules/@babel/runtime-corejs3/core-js-stable/url.js"),I=l.n(C),S=l("./node_modules/react/index.js"),T=l("./node_modules/qss/dist/qss.m.js"),q=l("./node_modules/@commercetools-frontend/application-shell/dist/use-is-served-by-proxy-77984220.esm.js");function ownKeys(s,r){var l=i()(s);if(a()){var c=a()(s);r&&(c=u()(c).call(c,(function(r){return b()(s,r).enumerable}))),l.push.apply(l,c)}return l}function _objectSpread(s){for(var r=1;r<arguments.length;r++){var l,c,i=null!=arguments[r]?arguments[r]:{};r%2?f()(l=ownKeys(Object(i),!0)).call(l,(function(r){(0,v.Z)(s,r,i[r])})):g()?y()(s,g()(i)):f()(c=ownKeys(Object(i))).call(c,(function(r){k()(s,r,b()(i,r))}))}return s}const Redirector=s=>{var r,l,c;const i=null!==(r=s.origin)&&void 0!==r?r:window.location.origin,d=s.location||{},a=_objectSpread(_objectSpread({},null!==(l=s.queryParams)&&void 0!==l?l:{}),null!==(c=d.query)&&void 0!==c?c:{}),m=new(I())(i);m.pathname=s.to||m.pathname,m.search="?".concat((0,T.c)(a));const u=m.toString();return(0,S.useEffect)((()=>{(s=>{q.l.replace(s)})(u)}),[u]),null};Redirector.propTypes={to:x().string.isRequired,origin:x().string,queryParams:x().shape({redirectTo:x().string,client_id:x().string,response_type:x().string,scope:x().string,state:x().string,nonce:x().string})},Redirector.displayName="Redirector"}}]);
//# sourceMappingURL=9462.oidc-callback.7ebdbdbccba3758d4d7b.js.map