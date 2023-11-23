import { createProxyMiddleware } ("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:6600",
      changeOrigin: true,
    })
  );
};