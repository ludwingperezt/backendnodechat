const config = {
  dbUser: process.env.DB_USER || 'admin1',
  dbPassword: process.env.DB_PASSWORD || 'admin1',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '27017',
  dbName: process.env.DB_NAME || 'chatdb',
  dbUrl: process.env.DB_URL || `mongodb://admin1:admin1@localhost:27017/chatdb`,
  port: process.env.PORT || 8888,
  host: process.env.HOST || 'https://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files',
};

module.exports = config;