module.exports = {
  devServer:{
    // 自动打开浏览器
    open:true,
    // 设置端口为8888
    port:8888
  },
  // 配置px自动转rem
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // rem的单位， 因为使用了lib-flexible, lib-flexible会把所有的屏幕分成10份
            // 1rem 就应该配置为 设计图的  1/10   640
            remUnit: 36
          })
        ]
      }
    }
  }
}