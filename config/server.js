module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [
      'ai-powered-production-key-1-secure-2025',
      'ai-powered-production-key-2-secure-2025',
      'ai-powered-production-key-3-secure-2025',
      'ai-powered-production-key-4-secure-2025'
    ],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
