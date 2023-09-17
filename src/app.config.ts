export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/cate/index',
    'pages/hot/index',
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
        text: '大数据分析'
      },
      {
        pagePath: 'pages/hot/index',
        text: '解决方案'
      },
      {
        pagePath: 'pages/my/index',
        text: '个人中心'
      }
    ]
  }
})
