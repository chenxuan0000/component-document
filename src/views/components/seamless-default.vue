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
                    <seamless :data="listData" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。默认参数</p>
                </div>
                <i-code lang="html" slot="code">{{ code.top }}</i-code>
            </Demo>
            <Demo title="向下滚动">
                <div slot="demo">
                    <seamless :data="listData" :class-option="optionDown" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。向下滚动 <code>direction:0</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.bottom }}</i-code>
            </Demo>
            <Demo title="向左滚动">
                <div slot="demo">
                    <seamless :data="newsList" :class-option="optionLeft" class="seamless-warp2">
                        <ul class="item">
                            <li v-for="item in newsList" v-text="item.title"></li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。向左滚动 <code>direction:2</code><code>limitMoveNum: 2</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.left }}</i-code>
            </Demo>
            <Demo title="向右滚动" :vertical="true">
                <div slot="demo">
                    <seamless :data="imgList" :class-option="optionRight" class="seamless-warp3">
                        <ul class="item">
                            <li v-for="item in imgList">
                                <img :src="item.imgUrl" alt="">
                            </li>
                        </ul>
                    </seamless>
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