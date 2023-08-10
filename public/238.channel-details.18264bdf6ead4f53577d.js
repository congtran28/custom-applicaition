"use strict";(self.webpackChunkmy_new_custom_application_project=self.webpackChunkmy_new_custom_application_project||[]).push([[238],{"./src/components/channel-details/channel-details.tsx":(e,o,n)=>{n.r(o),n.d(o,{default:()=>U});var s=n("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js"),t=n.n(s),l=n("./node_modules/react-intl/lib/src/components/useIntl.js"),a=n("./node_modules/react-router/esm/react-router.js"),r=n("./node_modules/@commercetools-frontend/application-components/dist/commercetools-frontend-application-components.esm.js"),i=n("./node_modules/@commercetools-uikit/notifications/dist/commercetools-uikit-notifications.esm.js"),d=n("./node_modules/@commercetools-uikit/text/dist/commercetools-uikit-text.esm.js"),c=n("./node_modules/@commercetools-uikit/spacings/dist/commercetools-uikit-spacings.esm.js"),m=n("./node_modules/@commercetools-uikit/loading-spinner/dist/commercetools-uikit-loading-spinner.esm.js"),u=n("./node_modules/react/index.js"),h=n("./node_modules/@commercetools-frontend/application-shell-connectors/dist/commercetools-frontend-application-shell-connectors.esm.js"),p=n("./node_modules/@commercetools-frontend/l10n/dist/commercetools-frontend-l10n.esm.js"),f=n("./node_modules/@commercetools-frontend/constants/dist/commercetools-frontend-constants.esm.js"),y=n("./node_modules/@commercetools-frontend/permissions/dist/commercetools-frontend-permissions.esm.js"),b=n("./node_modules/@commercetools-frontend/actions-global/dist/commercetools-frontend-actions-global.esm.js");const k=(0,n("./node_modules/@commercetools-frontend/application-shell/ssr/dist/commercetools-frontend-application-shell-ssr.esm.js").X7)("product-review");var g=n("./src/hooks/use-channels-connector/index.ts"),v=n("./node_modules/@commercetools-uikit/localized-text-input/dist/commercetools-uikit-localized-text-input.esm.js");const docToFormValues=(e,o)=>{var n,s,t,l;return{key:null!==(n=null===e||void 0===e?void 0:e.key)&&void 0!==n?n:"",roles:null!==(s=null===e||void 0===e?void 0:e.roles)&&void 0!==s?s:[],name:v.Z.createLocalizedString(o,null!==(t=(0,p.sM)(null!==(l=null===e||void 0===e?void 0:e.nameAllLocales)&&void 0!==l?l:[]))&&void 0!==t?t:{})}};var j=n("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"),_=n.n(j),C=n("./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"),E=n.n(C),Z=n("./node_modules/formik/dist/formik.esm.js"),x=n("./node_modules/@commercetools-uikit/localized-text-field/dist/commercetools-uikit-localized-text-field.esm.js"),D=n("./node_modules/@commercetools-uikit/text-field/dist/commercetools-uikit-text-field.esm.js"),L=n("./node_modules/@commercetools-uikit/select-field/dist/commercetools-uikit-select-field.esm.js");const M={inventorySupply:"InventorySupply",productDistribution:"ProductDistribution",orderExport:"OrderExport",orderImport:"OrderImport",primary:"Primary"};var B=n("./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"),R=n.n(B),S=n("./node_modules/@commercetools-uikit/text-input/dist/commercetools-uikit-text-input.esm.js"),w=n("./node_modules/omit-empty-es/dist/omit-empty-es.esm.js");const channel_details_validate=e=>{const o={key:{},roles:{}};return S.Z.isEmpty(e.key)&&(o.key.missing=!0),R()(e.roles)&&0===e.roles.length&&(o.roles.missing=!0),(0,w.Z)(o)};const O=(0,n("./node_modules/react-intl/lib/index.js").vU)({backToChannelsList:{id:"ChannelDetails.backToChannelsList",defaultMessage:"Back to channels list"},duplicateKey:{id:"ChannelDetails.duplicateKey",defaultMessage:"A channel with this key already exists."},channelUpdated:{id:"ChannelDetails.channelUpdated",defaultMessage:"Channel {channelName} updated"},channelKeyLabel:{id:"ChannelDetails.channelKeyLabel",defaultMessage:"Channel key"},channelNameLabel:{id:"ChannelDetails.channelNameLabel",defaultMessage:"Channel name"},channelRolesLabel:{id:"ChannelDetails.channelRolesLabel",defaultMessage:"Channel roles"},hint:{id:"ChannelDetails.hint",defaultMessage:"This page demonstrates for instance how to use forms, notifications and how to update data using GraphQL, etc."},modalTitle:{id:"ChannelDetails.modalTitle",defaultMessage:"Edit channel"},channelDetailsErrorMessage:{id:"ChannelDetails.errorMessage",defaultMessage:"We were unable to fetch the channel details. Please check your connection, the provided channel ID and try again."}});var I,z=n("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const P=_()(I=E()(M)).call(I,(e=>({label:M[e],value:M[e]}))),ChannelDetailsForm=e=>{const o=(0,l.Z)(),n=(0,Z.TA)({initialValues:e.initialValues,onSubmit:e.onSubmit,validate:channel_details_validate,enableReinitialize:!0}),s=(0,z.BX)(c.Z.Stack,{scale:"l",children:[(0,z.tZ)(D.Z,{name:"key",title:o.formatMessage(O.channelKeyLabel),value:t()(n).key,errors:D.Z.toFieldErrors(n.errors).key,touched:n.touched.key,onChange:n.handleChange,onBlur:n.handleBlur,isReadOnly:e.isReadOnly,renderError:e=>"duplicate"===e?o.formatMessage(O.duplicateKey):null,isRequired:!0,horizontalConstraint:13}),(0,z.tZ)(x.Z,{name:"name",title:o.formatMessage(O.channelNameLabel),value:t()(n).name,errors:D.Z.toFieldErrors(n.errors).name,touched:Boolean(n.touched.name),onChange:n.handleChange,onBlur:n.handleBlur,selectedLanguage:e.dataLocale,isReadOnly:e.isReadOnly,horizontalConstraint:13}),(0,z.tZ)(L.Z,{name:"roles",title:o.formatMessage(O.channelRolesLabel),value:t()(n).roles,errors:L.Z.toFieldErrors(n.errors).roles,touched:n.touched.roles,onChange:n.handleChange,onBlur:n.handleBlur,isMulti:!0,options:P,isReadOnly:e.isReadOnly,isRequired:!0,horizontalConstraint:13})]});return e.children({formElements:s,values:t()(n),isDirty:n.dirty,isSubmitting:n.isSubmitting,submitForm:n.handleSubmit,handleReset:n.handleReset})};ChannelDetailsForm.displayName="ChannelDetailsForm";const F=ChannelDetailsForm;var N=n("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js"),T=n.n(N);var K=n("./node_modules/@commercetools-frontend/application-shell/dist/commercetools-frontend-application-shell.esm.js");const ChannelDetails=e=>{const o=(0,l.Z)(),n=(0,a.UO)(),s=(0,g.wP)(n.id),j=s.loading,_=s.error,C=s.channel,E=(0,h.UV)((e=>{var o,n,s;return{dataLocale:null!==(o=e.dataLocale)&&void 0!==o?o:"",projectLanguages:null!==(n=null===(s=e.project)||void 0===s?void 0:s.languages)&&void 0!==n?n:[]}})),Z=E.dataLocale,x=E.projectLanguages,D=(0,y.bk)({demandedPermissions:[k.Manage]}),L=(0,b.E0)(),M=(0,b._F)(),B=(0,g.EE)(),S=(0,u.useCallback)((async(e,n)=>{const s=(t=e,{name:v.Z.omitEmptyTranslations(t.name),key:t.key,roles:t.roles});var t;try{await B.execute({originalDraft:C,nextDraft:s}),L({kind:"success",domain:f.w7.SIDE,text:o.formatMessage(O.channelUpdated,{channelName:(0,p.Wb)(e,{key:"name",locale:Z,fallbackOrder:x})})})}catch(l){const e=(e=>{const o=R()(e)?e:[e],n=T()(o).call(o,((e,o)=>{var n,s,t,l;const a=null!==(n=null===o||void 0===o||null===(s=o.extensions)||void 0===s?void 0:s.code)&&void 0!==n?n:o.code,r=null!==(t=null===o||void 0===o||null===(l=o.extensions)||void 0===l?void 0:l.field)&&void 0!==t?t:o.field;return"DuplicateField"===a?e.formErrors[r]={duplicate:!0}:e.unmappedErrors.push(o),e}),{formErrors:{},unmappedErrors:[]}),s=n.formErrors,t=n.unmappedErrors;return{formErrors:(0,w.Z)(s),unmappedErrors:t}})(l);e.unmappedErrors.length>0&&M({errors:e.unmappedErrors}),n.setErrors(e.formErrors)}}),[C,B,Z,o,x,M,L]);return(0,z.tZ)(F,{initialValues:docToFormValues(C,x),onSubmit:S,isReadOnly:!D,dataLocale:Z,children:n=>{var s;const l=(0,p.Wb)({name:null===(s=t()(n))||void 0===s?void 0:s.name},{key:"name",locale:Z,fallbackOrder:x,fallback:f.xL});return(0,z.BX)(r.ck,{title:l,isOpen:!0,onClose:e.onClose,isPrimaryButtonDisabled:n.isSubmitting||!n.isDirty||!D,isSecondaryButtonDisabled:!n.isDirty,onSecondaryButtonClick:n.handleReset,onPrimaryButtonClick:()=>n.submitForm(),labelPrimaryButton:r.ck.Intl.save,labelSecondaryButton:r.ck.Intl.revert,children:[j&&(0,z.tZ)(c.Z.Stack,{alignItems:"center",children:(0,z.tZ)(m.Z,{})}),_&&(0,z.tZ)(i.I,{type:"error",children:(0,z.tZ)(d.Z.Body,{children:o.formatMessage(O.channelDetailsErrorMessage)})}),C&&n.formElements,C&&(0,z.tZ)(K.H4,{additionalParts:[l]}),null===C&&(0,z.tZ)(r.uW,{})]})}})};ChannelDetails.displayName="ChannelDetails";const U=ChannelDetails}}]);
//# sourceMappingURL=238.channel-details.18264bdf6ead4f53577d.js.map