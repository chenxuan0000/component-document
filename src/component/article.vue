<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="19">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../style/article";
</style>
<script>
  import Navigate from './navigate.vue';
  import navigate from '../data-manage/navigate';
  import navMenu from './menu.vue';

  export default {
    components: {
      Navigate,
      navMenu
    },
    data () {
      return {
        need_api: false,
        activeKey: '',
        adCarousel: 0
      }
    },
    methods: {
      handleNavMenuChange (val) {
        this.activeKey = val;
      },
      updateActiveNav () {
        const route = this.$route.path;
        if (route.indexOf('component') > -1 ) {
          this.activeKey = 'component';
        }  else {
          this.activeKey = 'guide';
        }
      }
    },
    created () {
    },
    mounted () {
      this.updateActiveNav();
    }
  }
</script>