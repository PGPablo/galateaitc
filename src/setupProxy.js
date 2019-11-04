const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api/auth/login/", {
      target: "https://galateaitc-api.herokuapp.com",
      changeOrigin: true
    })
  )
  app.use(
    proxy("/api/EncuestaDiariaList/", {
      target: "https://galateaitc-api.herokuapp.com",
      changeOrigin: true
    })
  )
  app.use(
    proxy("/api/EncuestaInicialList/", {
      target: "https://galateaitc-api.herokuapp.com",
      changeOrigin: true
    })
  )
  app.use(
    proxy("/api/EncuestaFinalList/", {
      target: "https://galateaitc-api.herokuapp.com",
      changeOrigin: true
    })
  )

}
