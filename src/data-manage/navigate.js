// 定义左侧导航

const list = {
  components: [
    {
      type: 'vue-seamless-scroll',
      title: 'vue无缝滚动',
      list: [
        {
          title: '方向(direction)',
          path: '/component/seamless-default',
          icon: 'ios-grid-view-outline'
        },
        {
          title: '监听data(watch)',
          path: '/component/seamless-watch',
          icon: 'ios-grid-view-outline'
        },
        {
          title: '其他参数(other)',
          path: '/component/seamless-others',
          icon: 'ios-grid-view-outline'
        }
      ]
    }]
};

export default list;
