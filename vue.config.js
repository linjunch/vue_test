module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.liulongbin.top:3005",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
