<template>
    <div>
        <h1>Vue无缝滚动</h1>
        <Anchor title="概述" h2></Anchor>
        <p>基于vue的无缝滚动组件。</p>
        <Alert show-icon style="margin-top: 16px">注意：需要给父容器一个<code>height</code>和<code>:data='Array'</code>和<code>overfolw:hidden;</code>左右滚动需要给ul容器一个初始化 <code>css width</code>。
        </Alert>
        <Anchor title="代码示例" h2></Anchor>
    </div>
</template>
<style lang="scss">

</style>
<script>
  import Anchor from '../../component/anchor.vue'
  export default {
    data () {
      return {}
    },
    props: {},
    computed: {},
    components: {Anchor},
    methods: {},
    created () {
    }
  }
</script>