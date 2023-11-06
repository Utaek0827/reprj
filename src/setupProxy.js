const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api',
    createProxyMiddleware({
      target: 'http://uutt77.duckdns.org:10030',
      changeOrigin: true,
    }),
  );
};