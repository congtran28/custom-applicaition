"use strict";(self.webpackChunkmy_new_custom_application_project=self.webpackChunkmy_new_custom_application_project||[]).push([[2874],{"./node_modules/@commercetools-uikit/notifications/dist/commercetools-uikit-notifications.esm.js":(e,o,t)=>{t.d(o,{I:()=>Z});var n=t("./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"),r=t.n(n),i=t("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js"),s=t.n(i),c=t("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"),a=t.n(c),l=t("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js"),d=t.n(l),u=t("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"),m=t.n(u),p=t("./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js"),b=t.n(p),f=t("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js"),j=t.n(f),h=t("./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"),g=t.n(h),C=t("./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js"),y=t("./node_modules/react/index.js"),W=t("./node_modules/react-intl/lib/src/components/message.js"),_=t("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),N=t("./node_modules/@commercetools-uikit/accessible-button/dist/commercetools-uikit-accessible-button.esm.js"),w=t("./node_modules/@commercetools-uikit/design-system/dist/commercetools-uikit-design-system.esm.js"),k=t("./node_modules/@commercetools-uikit/icons/dist/commercetools-uikit-icons.esm.js"),v=t("./node_modules/@commercetools-uikit/utils/dist/commercetools-uikit-utils.esm.js"),F=t("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,o){var t=r()(e);if(s()){var n=s()(e);o&&(n=a()(n).call(n,(function(o){return d()(e,o).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var t,n,r=null!=arguments[o]?arguments[o]:{};o%2?m()(t=ownKeys(Object(r),!0)).call(t,(function(o){(0,C.Z)(e,o,r[o])})):b()?j()(e,b()(r)):m()(n=ownKeys(Object(r))).call(n,(function(o){g()(e,o,d()(r,o))}))}return e}const getIconColor=e=>{switch(e.type){case"error":return w.Wp.fontColorForContentNotificationIconWhenError;case"info":return w.Wp.fontColorForContentNotificationIconWhenInfo;case"warning":return w.Wp.fontColorForContentNotificationIconWhenWarning;case"success":return w.Wp.fontColorForContentNotificationIconWhenSuccess;default:return""}},NotificationTypeIcon=e=>{const o=(e=>{switch(e.type){case"error":return k.Pz;case"info":return k.Yk;case"warning":return k.aN;default:return k.wN}})(e);return(0,F.tZ)("div",{css:(0,_.iv)("display:flex;align-items:center;fill:",getIconColor(e),";svg{margin:0 -3px;}",""),children:(0,F.tZ)(o,{})})};NotificationTypeIcon.propTypes={},NotificationTypeIcon.displayName="NotificationTypeIcon";const NotificationCloseIcon=e=>(0,F.tZ)(N.ZP,{label:"Remove",onClick:e.onRemove,css:(0,_.iv)("display:flex;align-items:center;fill:",w.Wp.colorSolid,";&:hover{fill:",w.Wp.colorNeutral40,";}",""),children:(0,F.tZ)(k.gH,{size:"medium"})});NotificationCloseIcon.displayName="NotificationCloseIcon";const getContentBorderColor=e=>{switch(e.type){case"error":return w.Wp.borderColorForContentNotificationWhenError;case"info":return w.Wp.borderColorForContentNotificationWhenInfo;case"warning":return w.Wp.borderColorForContentNotificationWhenWarning;case"success":return w.Wp.borderColorForContentNotificationWhenSuccess;default:return""}},getContainerBackgroundColor=e=>{switch(e.type){case"error":return w.Wp.backgroundColorForContentNotificationWhenError;case"info":return w.Wp.backgroundColorForContentNotificationWhenInfo;case"warning":return w.Wp.backgroundColorForContentNotificationWhenWarning;case"success":return w.Wp.backgroundColorForContentNotificationWhenSuccess;default:return""}},ContentNotification=e=>((e=>{Boolean(e.intlMessage)||Boolean(y.Children.count(e.children))})(e),(0,F.BX)("div",_objectSpread(_objectSpread({},(0,v.Ku)(e)),{},{css:(0,_.iv)("display:flex;align-items:stretch;text-align:left;word-break:break-word;hyphens:auto;font-size:",w.Wp.fontSizeForContentNotification,";color:",w.Wp.fontColorForContentNotification,";font-family:inherit;background-color:",getContainerBackgroundColor(e),";border-radius:",w.Wp.borderRadiusForContentNotification,";border-width:1px;border-style:solid;border-color:",getContentBorderColor(e),";padding:",w.Wp.paddingForContentNotification,";",""),children:[(0,F.tZ)(NotificationTypeIcon,{type:e.type}),(0,F.tZ)("div",{css:(0,_.iv)("flex-grow:1;display:flex;align-items:center;padding:",w.Wp.paddingForContentNotificationMessage,";",""),children:e.intlMessage?(0,F.tZ)("div",{children:(0,F.tZ)(W.Z,_objectSpread({},e.intlMessage))}):e.children}),e.onRemove&&(0,F.tZ)(NotificationCloseIcon,{onRemove:e.onRemove})]})));ContentNotification.propTypes={},ContentNotification.displayName="ContentNotification";var Z=ContentNotification}}]);
//# sourceMappingURL=2874.2874.29c8eb84640eb6a90f40.js.map