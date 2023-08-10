import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
  name: 'Product Review',
  entryPointUriPath,
  cloudIdentifier: 'gcp-au',
  headers: {
    csp: {
      "connect-src": ["https://api.stripe.com"],
      "frame-src": ["https://js.stripe.com", "https://hooks.stripe.com"],
      "script-src": ["https://js.stripe.com"]
    }
  },
  env: {
    development: {
      initialProjectKey: 'cong_development',
    },
    production: {
      applicationId: 'cll546dm000010701iz7udyu5',
      url: 'https://fascinating-madeleine-fb940d.netlify.app',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
    {
      uriPath: 'reviews',
      defaultLabel: 'Reviews',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
