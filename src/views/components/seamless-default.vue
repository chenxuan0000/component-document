<style lang="scss" scoped>
    .ivu-article .ivu-select li {
        margin-bottom: 0;
    }

    .ivu-article .ivu-select ul {
        padding-left: 0 !important;
        list-style-type: none;
    }

    .seamless-warp {
        height: 229px;
        overflow: hidden;
    }

    .seamless-warp2 {
        overflow: hidden;
        height: 25px;
        width: 380px;
        ul.item {
            width: 580px;
            li {
                float: left;
                margin-right: 10px;
            }
        }
    }
    .seamless-warp3 {
        overflow: hidden;
        height: 230px;
        width: 580px;
        ul.item {
            width: 1000px;
            li {
                float: left;
                img {
                    width: 250px;
                }
            }
        }
    }
</style>
<template>
    <i-article>
        <article>
            <seamless-brief></seamless-brief>
            <Demo title="向上滚动">
                <div slot="demo">
                    <vue-seamless-scroll :data="listData" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
                <div slot="desc">
                    <p>基本用法。默认参数</p>
                    <i-code lang="html" slot="code">
                        defaultOption () {
                        return {
                        step: 1, //数值越大速度滚动越快
                        limitMoveNum: 5, //开始无缝滚动的数据量  //this.dataList.length
                        hoverStop: true, //是否开启鼠标悬停stop
                        direction: 1, // 0向下 1向上 2向左 3向右
                        openWatch: true, //开启数据实时监控刷新dom
                        singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                        singleWidth: 0, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                        waitTime: 1000 //单步运动停止的时间(默认值1000ms)
                        }
                        }
                    </i-code>
                </div>
                <i-code lang="html" slot="code">{{ code.top }}</i-code>
            </Demo>
            <Demo title="向下滚动">
                <div slot="demo">
                    <vue-seamless-scroll :data="listData" :class-option="optionDown" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
                <div slot="desc">
                    <p>基本用法。向下滚动 <code>direction:0</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.bottom }}</i-code>
            </Demo>
            <Demo title="向左滚动">
                <div slot="demo">
                    <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
                        <ul class="item">
                            <li v-for="item in newsList" v-text="item.title"></li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
                <div slot="desc">
                    <p>基本用法。向左滚动 <code>direction:2</code><code>limitMoveNum: 2</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.left }}</i-code>
            </Demo>
            <Demo title="向右滚动">
                <div slot="demo">
                    <vue-seamless-scroll :data="imgList" :class-option="optionRight" class="seamless-warp3">
                        <ul class="item">
                            <li v-for="item in imgList">
                                <img :src="item.imgUrl" alt="">
                            </li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
                <div slot="desc">
                    <p>基本用法。向右滚动 <code>direction:2</code><code>limitMoveNum: 4</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.right }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>
<script>
  import iArticle from '../../component/article.vue'
  import iCode from '../../component/code.vue'
  import Demo from '../../component/demo.vue'
  import Code from '../../code/seamless'
  import seamlessBrief from '../brief/seamless.vue'

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      seamlessBrief
    },
    data () {
      return {
        code: Code,
        listData: [{
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第二行无缝滚动第二行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第三行无缝滚动第三行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第四行无缝滚动第四行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第五行无缝滚动第五行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第六行无缝滚动第六行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第七行无缝滚动第七行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第八行无缝滚动第八行',
          'date': '2017-12-16'
        }, {
          'title': '无缝滚动第九行无缝滚动第九行',
          'date': '2017-12-16'
        }],
        newsList: [{
          'title': 'A simple, seamless scrolling for Vue.js'
        }, {
          'title': 'A curated list of awesome things related to Vue.js'
        }],
        imgList:[{
          imgUrl: require('../../img/img1.jpg')
        },{
          imgUrl: require('../../img/img2.jpg')
        },{
          imgUrl: require('../../img/img3.jpg')
        },{
          imgUrl: require('../../img/img4.jpg')
        }]
      }
    },
    computed: {
      optionDown () {
        return {
          direction: 0
        }
      },
      optionLeft () {
        return {
          direction: 2,
          limitMoveNum: 2
        }
      },
      optionRight () {
        return {
          direction: 3,
          limitMoveNum: 4
        }
      }
    },
    methods: {}
  }
</script>