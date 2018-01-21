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
            <Demo title="开启openWatch">
                <div slot="demo">
                    <seamless :data="listData" :class-option="optionWatch" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。关闭openWatch <code>limitMoveNum > data.length</code>
                        3s后data变多后会滚动 <code>openWatch:true; 默认值</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.watch }}</i-code>
            </Demo>
            <Demo title="关闭openWatch">
                <div slot="demo">
                    <seamless :data="listData" :class-option="optionNoWatch" class="seamless-warp">
                        <ul class="item">
                            <li v-for="item in listData"><span class="title" v-text="item.title"></span><span
                                    class="date"
                                    v-text="item.date"></span>
                            </li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。关闭openWatch <code>limitMoveNum > data.length</code> 3s后data变多后不会滚动 <code>openWatch:false;</code>
                    </p>
                </div>
                <i-code lang="html" slot="code">{{ code.noWatch }}</i-code>
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
        }]
      }
    },
    computed: {
      optionWatch () {
        return {
          limitMoveNum: 10
        }
      },
      optionNoWatch() {
        return {
          limitMoveNum: 10,
          openWatch: false
        }
      }
    },
    methods: {},
    created () {
      setTimeout(() => {
        this.listData = this.listData.concat(this.listData)
      }, 3000)
    }
  }
</script>