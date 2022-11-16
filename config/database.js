module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdk0ljqen0honmedku8g-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_aqzv'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'sqAVh1sxWp4HCGSZT3EOh4kS7gtwmYGE'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
