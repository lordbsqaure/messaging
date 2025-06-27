export const config = () => ({
  port: process.env.PORT,
  databasePort: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  databaseUser: process.env.DATABASE_USER,
  databaseUrl: process.env.DATABASE_URL,
  apiKey: process.env.WORDPRESS_API_KEY,
  synchronize: process.env.SYNCHRONIZE,
  campayApiKey: process.env.CAMPAY_API_KEY,
  campayBaseUrl: process.env.CAMPAY_BASE_URL,
});
