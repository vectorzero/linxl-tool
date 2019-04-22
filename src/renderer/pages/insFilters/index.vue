<template>
  <div class="ins-wrap">
    <md-field>
      <label>Only images</label>
      <md-file @md-change="changImg" accept="image/*"/>
    </md-field>
    <div>
      <figure>
        <img v-if="!imgUrl" src="~@/assets/demo.jpg">
        <img ref="hello" v-else :src="imgUrl">
      </figure>
      <p>原图</p>
    </div>
    <div v-for="(item,index) in filterList" :ref="item.name" :key="index">
      <figure @click="downloadFile(item.name)" :class="'filter-'+ item.name">
        <img v-if="!imgUrl" src="~@/assets/demo.jpg">
        <img v-else :src="imgUrl">
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
      imgWidth: 0,
      imgHeight: 0,
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
    };
  },
  methods: {
    changImg(FileList) {
      const that = this;
      if (FileList && FileList.length) {
        let file = FileList[0];
        let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(e){
              let img = new Image();
              img.src = e.target.result;//获取编码后的值,也可以用this.result获取
              img.onload = function () {
                that.imgWidth = this.width;
                that.imgHeight = this.height;
              }
          }
        this.imgUrl = file.path;
      }
    },
    downloadFile(refName) {
      const that = this;
      if (this.imgUrl) {
        let dom = this.$refs[refName][0];
        let cssRenderImage2PureImage = function(dom, callback) {
          // 尺寸
          let width = that.imgWidth; // dom.offsetWidth;
          let height =  that.imgHeight;// dom.offsetHeight;
          // 复制DOM节点
          let cloneDom = dom.cloneNode(true);
          cloneDom.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
          // 图像元素处理
          let eleImg = cloneDom.querySelector("img");
          // 图像变成base64
          let tempImg = new Image();
          tempImg.onload = function() {
            let canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            // 上下文
            let context = canvas.getContext("2d");
            // 绘制在画布上
            context.drawImage(tempImg, 0, 0, width, height);
            // 图像转换
            eleImg.src = canvas.toDataURL();
            // 进一步转换
            let svgImg = new Image();
            svgImg.onload = function() {
              // canvas绘制合成图
              context.clearRect(0, 0, width, height);
              context.drawImage(svgImg, 0, 0, width, height);
              // 使用jpeg格式
              callback && callback(canvas.toDataURL("image/jpeg"));
            };
            svgImg.src =
              'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="' +
              width +
              '" height="' +
              height +
              '"><foreignObject x="0" y="0" width="100%" height="100%">' +
              new XMLSerializer()
                .serializeToString(cloneDom)
                .replace(/#/g, "%23")
                .replace(/\n/g, "%0A") +
              document.querySelector("style").outerHTML +
              "</foreignObject></svg>";
          };
          tempImg.src = eleImg.src;
        };
        // 执行
        cssRenderImage2PureImage(dom, function(url) {
          let link = document.createElement("a");
          link.style.display = "none";
          link.href = url;
          link.setAttribute("download", refName);
          document.body.appendChild(link);
          link.click();
        });
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
  justify-content: center;
}
img {
  cursor: pointer;
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

