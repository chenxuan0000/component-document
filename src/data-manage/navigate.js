// 定义左侧导航

const list = {
  components: [
    {
      type: 'vue-seamless-scroll',
      title: 'vue无缝滚动',
      list: [
        {
          title: 'seamless-方向',
          path: '/component/seamless-default',
          icon: 'ios-grid-view-outline'
        },
        {
          title: 'seamless-监听data',
          path: '/component/seamless-watch',
          icon: 'ios-grid-view-outline'
        },
        {
          title: 'seamless-其他参数',
          path: '/component/seamless-others',
          icon: 'ios-grid-view-outline'
        }
      ]
    }]
};

export default list;
