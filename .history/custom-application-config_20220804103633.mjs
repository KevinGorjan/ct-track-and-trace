import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
  name: 'Track And Trace',
  entryPointUriPath,
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'prj-new-horizon-dev',
    },

    production: {
      applicationId: 'TODO',
      url: 'https://ct-track-and-trace.onrender.com',
    },
  },

  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },

  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Track And Trace',
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
  ],
};

export default config;
