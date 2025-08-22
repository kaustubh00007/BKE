module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',                    // Local development
        'https://fke-gamma.vercel.app',            // Your actual Vercel URL
        'https://*.vercel.app',                    // All Vercel deployments
        'https://ai-powered-ui-green.vercel.app',  // Keep existing if used
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      headers: [
        'Content-Type', 
        'Authorization', 
        'Origin', 
        'Accept',
        'X-Requested-With'
      ],
      exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
