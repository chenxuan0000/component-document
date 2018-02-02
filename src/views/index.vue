<template>
    <div>
        <div class="index">
            <div class="bg"><span></span></div>
            <Row type="flex" justify="center" align="middle" style="position: relative;z-index: 3">
                <Col span="24">
                <h2><img src="../img/logo-vue.png" width="65" alt="" style="vertical-align:middle;padding-right:10px;">插件在线演示文档
                </h2>
                <div class="list">
                    <router-link :to="item.link" v-for="(item,index) in list" :key="index">{{item.name}}</router-link>
                    <a href="https://github.com/chenxuan0000" target="_blank">
                        <Icon type="social-github"></Icon>
                        GitHub
                    </a>
                </div>
                </Col>
            </Row>
        </div>
        <neon-effect :options="{}"></neon-effect>
    </div>
</template>

<style scoped lang="scss">
    @import "../style/index";
</style>

<script>
  import {indexList} from '../data-manage/data'

  export default {
    data () {
      return {
        list: indexList,
        options: {
          len: 25,
          rate: 22
        }
      }
    },
    methods: {}
  }
</script>
