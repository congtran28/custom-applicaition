"use strict";(self.webpackChunkmy_new_custom_application_project=self.webpackChunkmy_new_custom_application_project||[]).push([[3111],{"./node_modules/@commercetools-frontend/application-shell/dist/get-mc-origin-fecfee07.esm.js":(e,o,s)=>{s.d(o,{g:()=>getMcOrigin});var n=s("./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js"),t=s("./node_modules/@babel/runtime-corejs3/core-js-stable/url.js"),r=s.n(t),l=s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js"),c=s.n(l);function getMcOrigin(e){var o,s;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;const l=new(r())(e),i=c()(o=l.hostname.split(".")).call(o),d=(0,n.Z)(i,4),a=d[0],m=d[1],u=d[2],j=d[3],b=c()(s=t.location.hostname.split(".")).call(s),p=(0,n.Z)(b,4),_=p[0],f=p[1],g=p[2],y=p[3];return a===_&&m===f&&u===g&&j===y?t.location.origin:l.origin.replace("mc-api","mc")}},"./node_modules/@commercetools-frontend/application-shell/dist/redirect-to-login-111a3b71.esm.js":(e,o,s)=>{s.r(o),s.d(o,{default:()=>RedirectToLogin});var n=s("./node_modules/react-router/esm/react-router.js"),t=s("./node_modules/@commercetools-frontend/application-shell/node_modules/uuid/dist/esm-browser/v4.js"),r=s("./node_modules/@commercetools-frontend/constants/dist/commercetools-frontend-constants.esm.js"),l=s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"),c=s.n(l),i=s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"),d=s.n(i);const a=/^\/|\/$/g,trimLeadingAndTrailingSlashes=e=>e.replace(a,""),joinPaths=function(){for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];const n=c()(o).call(o,(e=>{var o;if("string"!==typeof e)throw new Error(d()(o='Expected path "'.concat(e,'" to be a "string", but got "')).call(o,typeof e,'"'));return trimLeadingAndTrailingSlashes(e)})).join("/");return"/".concat(n)};var m=s("./node_modules/@commercetools-frontend/application-shell/dist/constants-16199962.esm.js"),u=s("./node_modules/@commercetools-frontend/application-shell/dist/use-is-served-by-proxy-77984220.esm.js"),j=s("./node_modules/@commercetools-frontend/application-shell/dist/get-mc-origin-fecfee07.esm.js"),b=s("./node_modules/@commercetools-frontend/application-shell/dist/oidc-cd2edc3c.esm.js"),p=s("./node_modules/@commercetools-frontend/application-shell/dist/configure-apollo-e01b60c3.esm.js"),_=s("./node_modules/@commercetools-frontend/application-shell/dist/redirector-368eeb0f.esm.js"),f=s("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");s("./node_modules/@commercetools-frontend/application-shell-connectors/dist/commercetools-frontend-application-shell-connectors.esm.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/url.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/has.js"),s("./node_modules/lodash/mapValues.js"),s("./node_modules/omit-empty-es/dist/omit-empty-es.esm.js"),s("./node_modules/@commercetools-frontend/notifications/dist/commercetools-frontend-notifications.esm.js"),s("./node_modules/@commercetools-frontend/sdk/dist/commercetools-frontend-sdk.esm.js"),s("./node_modules/react/index.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js"),s("./node_modules/@commercetools-frontend/sentry/dist/commercetools-frontend-sentry.esm.js"),s("./node_modules/@commercetools-frontend/react-notifications/dist/commercetools-frontend-react-notifications.esm.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js"),s("./node_modules/redux-logger/dist/redux-logger.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js"),s("./node_modules/apollo-link-logger/es/index.js"),s("./node_modules/@commercetools-frontend/browser-history/dist/commercetools-frontend-browser-history.esm.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js"),s("./node_modules/@commercetools/http-user-agent/dist/http-user-agent.umd.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js"),s("./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");const RedirectToLogin=()=>{var e,o;const s=(0,n.TH)(),l=(0,u.u)();if(null!==(e=window.app.__DEVELOPMENT__)&&void 0!==e&&null!==(o=e.oidc)&&void 0!==o&&o.authorizeUrl){var c,i,d,a,g,y,h,w;const e=(0,p.b)(),o=(e=>{const o=(0,t.Z)();return(0,p.p)(o,e),o})({applicationId:window.app.applicationId,query:{redirectTo:e?"/".concat(e):"/"}}),n=(0,b.b)({projectKey:null!==e&&void 0!==e?e:void 0,oAuthScopes:null===(c=window.app.__DEVELOPMENT__)||void 0===c||null===(i=c.oidc)||void 0===i?void 0:i.oAuthScopes,additionalOAuthScopes:null===(d=window.app.__DEVELOPMENT__)||void 0===d||null===(a=d.oidc)||void 0===a?void 0:a.additionalOAuthScopes,teamId:null===(g=window.app.__DEVELOPMENT__)||void 0===g||null===(y=g.oidc)||void 0===y?void 0:y.teamId});return(0,p.o)(n),(0,f.tZ)(_.R,{to:"",origin:null===(h=window.app.__DEVELOPMENT__)||void 0===h||null===(w=h.oidc)||void 0===w?void 0:w.authorizeUrl,location:s,queryParams:{reason:r.nt.UNAUTHORIZED,client_id:window.app.applicationId,response_type:m.b.ID_TOKEN,scope:n,state:o,nonce:o}})}const v=l?(0,j.g)(window.app.mcApiUrl):void 0;return(0,f.tZ)(_.R,{to:"login",origin:v,location:s,queryParams:{reason:r.nt.UNAUTHORIZED,redirectTo:trimLeadingAndTrailingSlashes(joinPaths(window.location.origin,s.pathname))}})};RedirectToLogin.displayName="RedirectToLogin"},"./node_modules/@commercetools-frontend/application-shell/dist/redirector-368eeb0f.esm.js":(e,o,s)=>{s.d(o,{R:()=>Redirector});var n=s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"),t=s.n(n),r=s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js"),l=s.n(r),c=s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"),i=s.n(c),d=s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js"),a=s.n(d),m=s("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"),u=s.n(m),j=s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js"),b=s.n(j),p=s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js"),_=s.n(p),f=s("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"),g=s.n(f),y=s("./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js"),h=s("./node_modules/prop-types/index.js"),w=s.n(h),v=s("./node_modules/@babel/runtime-corejs3/core-js-stable/url.js"),E=s.n(v),T=s("./node_modules/react/index.js"),O=s("./node_modules/qss/dist/qss.m.js"),x=s("./node_modules/@commercetools-frontend/application-shell/dist/use-is-served-by-proxy-77984220.esm.js");function ownKeys(e,o){var s=t()(e);if(l()){var n=l()(e);o&&(n=i()(n).call(n,(function(o){return a()(e,o).enumerable}))),s.push.apply(s,n)}return s}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var s,n,t=null!=arguments[o]?arguments[o]:{};o%2?u()(s=ownKeys(Object(t),!0)).call(s,(function(o){(0,y.Z)(e,o,t[o])})):b()?_()(e,b()(t)):u()(n=ownKeys(Object(t))).call(n,(function(o){g()(e,o,a()(t,o))}))}return e}const Redirector=e=>{var o,s,n;const t=null!==(o=e.origin)&&void 0!==o?o:window.location.origin,r=e.location||{},l=_objectSpread(_objectSpread({},null!==(s=e.queryParams)&&void 0!==s?s:{}),null!==(n=r.query)&&void 0!==n?n:{}),c=new(E())(t);c.pathname=e.to||c.pathname,c.search="?".concat((0,O.c)(l));const i=c.toString();return(0,T.useEffect)((()=>{(e=>{x.l.replace(e)})(i)}),[i]),null};Redirector.propTypes={to:w().string.isRequired,origin:w().string,queryParams:w().shape({redirectTo:w().string,client_id:w().string,response_type:w().string,scope:w().string,state:w().string,nonce:w().string})},Redirector.displayName="Redirector"}}]);
//# sourceMappingURL=3111.redirect-to-login.737fa8e14ac818710d25.js.map