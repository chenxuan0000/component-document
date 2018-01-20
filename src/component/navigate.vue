<style lang="scss" scoped>
    @import "../style/navigate";
</style>
<template>
    <div class="navigate">
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
            <div class="navigate-group">vue组件</div>
            <Menu-group v-for="item in navigate.components" :key="item.type" :title="item.type">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path">
                    <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                    <template>
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                </Menu-item>
            </Menu-group>
        </Menu>
    </div>
</template>
<script>
  import navigate from '../data-manage/navigate';

  export default {
    props: {
      type: {
        type: [String, Number]
      }
    },
    data () {
      return {
        navigate: navigate,
        activeKey: this.$route.path,
      }
    },
    methods: {
      handleSelect (path) {
        this.$nextTick(() => {
          this.$router.push(path);
        });
      }
    },
    created () {
      this.activeKey = this.$route.path;
    },
    mounted () {
    }
  }
</script>