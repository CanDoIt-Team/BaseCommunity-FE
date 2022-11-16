const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/users',
    createProxyMiddleware({
      target: 'http://118.67.128.16:8080',
      changeOrigin: true,
    }),
  )
  app.use(
    '/employments',
    createProxyMiddleware({
      target: 'http://118.67.128.16:8080',
      changeOrigin: true,
    }),
  )
  app.use(
    '/boards',
    createProxyMiddleware({
      target: 'http://118.67.128.16:8080',
      changeOrigin: true,
    }),
  )
  app.use(
    '/projects',
    createProxyMiddleware({
      target: 'http://118.67.128.16:8080',
      changeOrigin: true,
    }),
  )
  app.use(
    '/stomp',
    createProxyMiddleware({
      target: 'http://118.67.128.16:8080',
      changeOrigin: true,
    }),
  )
}
