module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection: env('DATABASE_CLIENT') === 'sqlite' ? {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    } : {
      connectionString: env('DATABASE_URL'),
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      username: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: env('DATABASE_CLIENT', 'sqlite') === 'sqlite',
  },
});