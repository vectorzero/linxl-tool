<template>
  <div class="ins-wrap">
    <md-field>
      <label>Only images</label>
      <md-file @md-change="changImg" accept="image/*" />
    </md-field>
    <div>
      <figure>
        <img v-if="!imgUrl" src="~@/assets/demo.jpg">
        <img v-else :src="imgUrl" />
      </figure>
      <p>原图</p>
    </div>
    <div v-for="(item,index) in filterList" :key="index">
      <figure :class="'filter-'+ item.name">
        <img v-if="!imgUrl" src="~@/assets/demo.jpg">
        <img v-else :src="imgUrl" />
      </figure>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
      filterList: [
        { name: "1977" },
        { name: "aden" },
        { name: "amaro" },
        { name: "ashby" },
        { name: "brannan" },
        { name: "brooklyn" },
        { name: "charmes" },
        { name: "clarendon" },
        { name: "crema" },
        { name: "dogpatch" },
        { name: "earlybird" },
        { name: "gingham" },
        { name: "ginza" },
        { name: "hefe" },
        { name: "helena" },
        { name: "hudson" },
        { name: "inkwell" },
        { name: "kelvin" },
        { name: "juno" },
        { name: "lark" },
        { name: "lofi" },
        { name: "ludwig" },
        { name: "maven" },
        { name: "mayfair" },
        { name: "moon" },
        { name: "nashville" },
        { name: "perpetua" },
        { name: "poprocket" },
        { name: "reyes" },
        { name: "rise" },
        { name: "sierra" },
        { name: "skyline" },
        { name: "slumber" },
        { name: "stinson" },
        { name: "sutro" },
        { name: "toaster" },
        { name: "valencia" },
        { name: "vesper" },
        { name: "walden" },
        { name: "willow" },
        { name: "xpro-ii" }
      ]
    }
  },
  methods: {
    changImg(FileList) {
      if (FileList && FileList.length) {
        this.imgUrl = FileList[0].path;
      }
    }
  }
};
</script>

<style scoped>
@import "./ins.css";
.ins-wrap {
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 150px;
  height: 150px;
}
p {
  margin: 0 auto;
  background: #fff;
  color: #333;
  text-align: center;
}
</style>

