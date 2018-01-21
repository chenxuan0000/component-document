<style lang="scss" scoped>
    .ivu-article .ivu-select li {
        margin-bottom: 0;
    }

    .ivu-article .ivu-select ul {
        padding-left: 0 !important;
        list-style-type: none;
    }
</style>
<template>
    <i-article>
        <article>
            <svg-bar-brief></svg-bar-brief>
            <Demo title="默认配置 circle圆环">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="65"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。默认参数</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>
            <Demo title="circle圆环 自定义半径和圆环宽度">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="90" :options="{radius:130,circleWidth:30}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。<code>:options="{radius:130,circleWidth:30}"</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.radiusCircleWidth }}</i-code>
            </Demo>
            <Demo title="默认配置 rect矩形">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="65" type="rect"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。默认参数 <code>type="rect"</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.rectDefault }}</i-code>
            </Demo>
            <Demo title="rect矩形 自定义宽高">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="55" type="rect" :options="{rectWidth:430,rectHeight:30}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。默认参数 <code>type="rect"</code><code>:options="{rectWidth:430,rectHeight:30}"</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.rectDefault }}</i-code>
            </Demo>
            <Demo title="rect矩形 圆角">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="55" type="rect" :options="{rectRadius:10}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。默认参数 <code>type="rect"</code><code>:options="{rectRadius:10}</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.rectRadius }}</i-code>
            </Demo>
            <Demo title="自定义路径颜色">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="65" :options="{pathColors: ['yellow','rgb(33, 150, 243)']}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。默认参数 <code>type="rect"</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.pathColors }}</i-code>
            </Demo>
            <Demo title="自定义两条路径宽度1">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="65" :options="{radius:100,circleLineCap: 'round',varyStrokeArray: [10,20]}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。自定义两条路径宽度 <code>:options="{radius:100,circleLineCap: 'round',varyStrokeArray: [10,20]}"</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.varyStrokeArray1 }}</i-code>
            </Demo>
            <Demo title="自定义两条路径宽度2">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="65" :options="{radius:100,circleLineCap: 'round',varyStrokeArray: [20,10]}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。自定义两条路径宽度 <code>:options="{radius:100,circleLineCap: 'round',varyStrokeArray: [20,10]}"</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.varyStrokeArray2 }}</i-code>
            </Demo>
            <Demo title="自定义两条路径宽度3">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="65" type="rect" :options="{varyStrokeArray: [20,10]}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。自定义两条路径宽度 <code>:options="{varyStrokeArray: [20,10]}"</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.varyStrokeArray3 }}</i-code>
            </Demo>
            <Demo title="自定义文本格式">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="68.88" :options="options"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。自定义文本格式 </p>
                </div>
                <i-code lang="html" slot="code">{{ code.text }}</i-code>
            </Demo>
            <Demo title="rect 渐变色gradientColor">
                <div slot="demo" style="text-align: center;">
                    <svg-bar value="62" type="rect" :options="{gradientColor: ['rgb(33, 150, 243)','yellow']}"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。渐变色gradientColor </p>
                </div>
                <i-code lang="html" slot="code">{{ code.gradientColor }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>
<script>
  import iArticle from '../../component/article.vue'
  import iCode from '../../component/code.vue'
  import Demo from '../../component/demo.vue'
  import Code from '../../code/svgBar'
  import svgBarBrief from '../brief/svgBar.vue'

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      svgBarBrief
    },
    data () {
      return {
        code: Code
      }
    },
    computed: {
      options () {
        return {
          radius: 80,
          text: function (value) {
            return this.htmlifyNumber(value) + '<span style="font-size: 0.4em;">%</span>';
          },
          textColor: 'rgb(33, 150, 243)'
        }
      }
    },
    methods: {},
    created () {
    }
  }
</script>