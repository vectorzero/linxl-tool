<template>
  <div class="home-wrap">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{activeName}}</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">linxl-tool</span>
      </md-toolbar>

      <md-list class="menu-wrap">
        <md-list-item v-for="(item,index) in menuList" @click="jumpToPage(item.path,index,item.name)" :key="index" :class="activeIndex == index ? 'active-item':''">
          <md-icon>{{item.icon}}</md-icon>
          <span class="md-list-item-text">{{item.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content class="content-wrap">
      <router-view></router-view>
    </md-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '',
      activeIndex: 0,
      showNavigation: false,
      menuList: [
        { name: "宽高比", icon: "move_to_inbox", path: "/aspectRatio" },
        { name: "INS滤镜", icon: "send", path: "/insFilters" },
        { name: "颜色转换器", icon: "error", path: "/changeColor" }
      ]
    };
  },
  mounted() {
    this.activeName = this.menuList[0].name;
  },
  methods: {
    jumpToPage(path,index,name) {
      this.activeIndex = index;
      this.activeName = name;
      this.$router.push({ path });
      this.showNavigation = false;
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>

.active-item {
  background: #ccc;
}

.md-drawer {
  width: 230px;
}
.md-list {
  padding: 0;
}
.menu-wrap {
  cursor: pointer;
}

.content-wrap {
  height: calc(100vh - 64px);
}

</style>


