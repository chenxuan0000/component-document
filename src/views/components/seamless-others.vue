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
            <Demo title="速度(step)">
                <div slot="demo">
                    <seamless :data="listData" :class-option="optionStep" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。向上滚动 <code>step:3</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.step }}</i-code>
            </Demo>
            <Demo title="鼠标悬停(hoverStop)">
                <div slot="demo">
                    <seamless :data="listData" :class-option="optionHover" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。鼠标悬停关闭 <code>hoverStop:false</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.hover }}</i-code>
            </Demo>
            <Demo title="单行停顿(singleHeight)">
                <div slot="demo">
                    <seamless :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。单行停顿 <code>singleHeight:26</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.singleHeight }}</i-code>
            </Demo>
            <Demo title="单行停顿时间(singleHeight,waitTime)">
                <div slot="demo">
                    <seamless :data="listData" :class-option="optionSingleHeightTime" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。单行停顿时间 <code>singleHeight:26</code><code>waitTime:2500</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.singleHeightTime }}</i-code>
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
        imgList: [{
          imgUrl: require('../../img/img1.jpg')
        }, {
          imgUrl: require('../../img/img2.jpg')
        }, {
          imgUrl: require('../../img/img3.jpg')
        }, {
          imgUrl: require('../../img/img4.jpg')
        }]
      }
    },
    computed: {
      optionStep () {
        return {
          step: 3
        }
      },
      optionHover () {
        return {
          hoverStop: false
        }
      },
      optionSingleHeight () {
        return {
          singleHeight: 26,
          waitTime: 2000
        }
      },
      optionSingleHeightTime () {
        return {
          singleHeight: 26,
          waitTime: 2500
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