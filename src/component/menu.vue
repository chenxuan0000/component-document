<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <router-link to="/" class="wrapper-header-nav-logo">
                <img src="../img/logo-vue.png" width="55" alt="" style="vertical-align:middle;padding-right:10px;">插件在线演示文档
            </router-link>
            <div class="wrapper-header-nav-search">
                <i-select
                        ref="select"
                        v-model="search"
                        filterable
                        :placeholder="searchText"
                        :not-found-text="notFoundText"
                        @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template>{{ item.title }}</template>
                    </i-option>
                </i-select>
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="component">
                    <Icon type="ios-navigate"></Icon>
                    vue组件
                </Menu-item>
                <Menu-item name="personalItem">
                    <Icon type="ios-analytics"></Icon>
                    个人项目
                </Menu-item>
                <ButtonGroup>
                    <Button type="ghost" size="small" icon="social-github" @click="handleGoToGitHub"></Button>
                </ButtonGroup>
            </div>
        </div>
    </Menu>
</template>
<style>
    .wrapper-header-nav-logo {
        color: #fff;
        font-size: 15px;
        margin-top: 0!important;
    }
    .wrapper-header-nav-logo:hover {
        color: #44f60d;
    }
    .wrapper-header-nav .ivu-menu-item i {
        margin-right: 6px;
    }

    .wrapper-header .ivu-menu {
        z-index: 901;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
        border-bottom: 2px solid transparent;
        color: #fff;
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        color: #44f60d;
        border-bottom: 2px solid #44f60d;
    }

    .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-focus, .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item:hover {
        border: 0;
        color: #333;
    }

    .ivu-btn-ghost {
        border: 0;
        color: #fff;
        font-size: 19px;
    }

    .ivu-btn-group .ivu-btn-icon-only .ivu-icon {
        font-size: 22px;
    }
</style>
<script>
  import navigate from '../data-manage/navigate'

  export default {
    props: {
      activeKey: String
    },
    data () {
      return {
        search: '',
        navigateList: [],
        liveDot: false,
        currentActiveKey: this.activeKey,
        searchText: '搜索插件',
        notFoundText: '暂时没有这个插件'
      };
    },
    watch: {
      activeKey (val) {
        this.currentActiveKey = val;
      },
      currentActiveKey (val) {
        this.$emit('on-change', val);
      }
    },
    methods: {
      handleSearch (path) {
        this.search = '';
        this.$refs.select.setQuery('');
        this.$nextTick(() => {
          setTimeout(() => {
            this.$router.push(path);
          }, 300);
        });
      },
      handleSelect (type) {
        if (type === 'donate') {
        } else if (type === 'github') {
          window.open('https://github.com/iview/iview');
        } else if (type === 'guide') {
          this.$router.push(navigate.guide[0].path);
        } else if (type === 'component') {
          this.$router.push(navigate.beforeComponents[0].path);
        } else if (type === 'practice') {
          this.$router.push(navigate.practice[0].path);
        } else if (type === 'cli') {
          this.$router.push('/cli');
        } else if (type === 'live') {
          this.$router.push('/live');
        } else if (type === 'iview-loader') {
          this.$router.push('/docs/guide/iview-loader');
        } else if (type === 'iview-admin') {
          window.open('https://github.com/iview/iview-admin');
        } else if (type === 'iview-area') {
          window.open('https://github.com/iview/iview-area');
        }
        this.$nextTick(() => {
          this.updateActiveNav();
        });
      },
      updateActiveNav () {
        const componentList = [
          '/docs/guide/install',
          '/docs/guide/start',
          '/docs/guide/i18n',
          '/docs/guide/theme',
          '/docs/guide/iview-loader',
          '/overview',
          '/docs/guide/update'
        ];

        const route = this.$route.path;
        if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
          this.currentActiveKey = 'component';
        } else if (route.indexOf('practice') > -1) {
          this.currentActiveKey = 'practice';
        } else if (route.indexOf('live') > -1) {
          this.currentActiveKey = 'live';
        } else {
          this.currentActiveKey = 'guide';
        }
      },
      handleGoToGitHub () {
        window.open('https://github.com/chenxuan0000');
      },
    },
    created () {
      let list = [];
      for (let i = 0; i < navigate.components.length; i++) {
        for (let j = 0; j < navigate.components[i].list.length; j++) {
          list.push(navigate.components[i].list[j]);
        }
      }
      this.navigateList = list;
    }
  };
</script>