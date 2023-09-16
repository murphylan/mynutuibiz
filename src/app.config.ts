export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/cate/index',
    'pages/hot/index',
    'pages/cart/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#666',
    selectedColor: '#ed6c00',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/cate/index',
        text: '分类'
      },
      {
        pagePath: 'pages/hot/index',
        text: '热门'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车'
      },
      {
        pagePath: 'pages/my/index',
        text: '个人中心'
      }
    ]
  }
})
