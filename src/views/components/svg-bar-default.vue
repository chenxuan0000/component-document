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
            <Demo title="开启openWatch">
                <div slot="demo">
                    <svg-bar value="65"></svg-bar>
                </div>
                <div slot="desc">
                    <p>基本用法。关闭openWatch <code>limitMoveNum > data.length</code>
                        3s后data变多后会滚动 <code>openWatch:true; 默认值</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.watch }}</i-code>
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
    computed: {},
    methods: {},
    created () {}
  }
</script>