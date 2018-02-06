<template>
    <i-article>
        <article>
            <seamless-brief></seamless-brief>
            <Demo title="switch控制切换" :vertical="true">
                <div slot="demo">
                    <seamless :class-option="optionSwitch1" class="seamless-warp3">
                        <span slot="left-switch" class="left-arrow"></span>
                        <span slot="right-switch" class="right-arrow"></span>
                        <ul class="item">
                            <li v-for="item in listData">{{item}}</li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>基本用法。switch控制切换 <code>direction:2</code><code> autoPlay: false,switchSingleStep: 140</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.switch1 }}</i-code>
            </Demo>
            <Demo title="switch控制切换、自定义参数" :vertical="true">
                <div slot="demo">
                    <seamless :class-option="optionSwitch2" class="seamless-warp3">
                        <span slot="left-switch" class="left-arrow"></span>
                        <span slot="right-switch" class="right-arrow"></span>
                        <ul class="item">
                            <li v-for="item in listData">{{item}}</li>
                        </ul>
                    </seamless>
                </div>
                <div slot="desc">
                    <p>switch控制切换 自定义switchSingleStep(步数大小)和switchDelay(切换时间)<code>direction:2</code><code> autoPlay: false,switchSingleStep: 100,switchDelay:50</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.switch2 }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>
<style lang="scss" scoped>
    .ivu-article .ivu-select li {
        margin-bottom: 0;
    }

    .ivu-article .ivu-select ul {
        padding-left: 0 !important;
        list-style-type: none;
    }

    .seamless-warp3 {
        overflow: hidden;
        height: 140px;
        width: 140px * 4;
        margin: 0 auto;
        .disabled {
            .left-arrow, .right-arrow {
                background-color: #ccc;
                cursor: not-allowed;
                &:hover {
                    background-color: #ccc;
                }
            }
        }
        .left-arrow, .right-arrow {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #00a0e9;
            cursor: pointer;
            &:hover {
                background-color: #0f39fa;
            }
            &::before {
                position: absolute;
                content: '';
                width: 16px;
                height: 16px;
                top: 12px;
                left: 15px;
                border: 2px solid #fff;
            }
        }
        .left-arrow::before {
            border-right: 0;
            border-bottom: 0;
            transform: rotate(-45deg);
        }
        .right-arrow::before {
            border-left: 0;
            border-top: 0;
            left: 9px;
            transform: rotate(-45deg);
        }
        ul.item {
            width: 140px * 8;
            li {
                float: left;
                width: 120px;
                height: 120px;
                margin: 10px;
                line-height: 120px;
                background-color: #999;
                color: #fff;
                text-align: center;
                font-size: 30px;
            }
        }
    }
</style>
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
        listData: [1, 2, 3, 4, 5, 6, 7, 8],
      }
    },
    computed: {
      optionSwitch1 () {
        return {
          autoPlay: false,
          switchSingleStep: 140
        }
      },
      optionSwitch2 () {
        return {
          autoPlay: false,
          switchSingleStep: 100,
          switchDelay: 200
        }
      }
    },
    methods: {}
  }
</script>