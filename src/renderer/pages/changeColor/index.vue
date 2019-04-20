<template>
  <div class="color-wrap">
    <div class="form-wrap">
      <div class="rgb-wrap">
        <md-field md-clearable>
          <label>R</label>
          <md-input @input="rgbToHex" @focus="focusRgb" v-model="rVal"></md-input>
        </md-field>
        <md-field md-clearable>
          <label>G</label>
          <md-input @input="rgbToHex" @focus="focusRgb" v-model="gVal"></md-input>
        </md-field>
        <md-field md-clearable>
          <label>B</label>
          <md-input @input="rgbToHex" @focus="focusRgb" v-model="bVal"></md-input>
        </md-field>
        <md-button @click="copyRGB" class="md-raised" :style="{background:hexVal}">复制</md-button>
      </div>
      <div class="hex-wrap">
        <md-field md-clearable>
          <label>HEX{{rVal}}</label>
          <md-input @input="hexToRgb" @focus="focusHex" v-model="hexVal"></md-input>
        </md-field>
        <md-button @click="copyHEX" class="md-raised" :style="{background:hexVal}">复制</md-button>
      </div>
    </div>
    <md-dialog-alert :md-active.sync="isShowDialog" md-title="复制成功!" :md-content="copyContent"/>
  </div>
</template>

<script>
import { fail } from "assert";
export default {
  data() {
    return {
      rVal: 255,
      gVal: 255,
      bVal: 255,
      hexVal: "#ffffff",
      isShowDialog: false,
      copyContent: "",
      isFocusRgb: false,
      isFocusHex: false
    };
  },
  methods: {
    focusRgb() {
      this.isFocusRgb = true;
      this.isFocusHex = false;
    },
    focusHex() {
      this.isFocusRgb = false;
      this.isFocusHex = true;
    },
    rgbToHex() {
      if (this.isFocusRgb) {
        this.hexVal =
          "#" +
          ((1 << 24) + (this.rVal << 16) + (this.gVal << 8) + this.bVal)
            .toString(16)
            .slice(1);
      }
    },
    hexToRgb() {
      if (this.isFocusHex) {
        if (!this.hexVal.includes("#")) {
          this.hexVal = "#" + this.hexVal;
        }
        let len = this.hexVal.length;
        if (len === 4 || len === 7) {
          let val = this.hexVal;
          val = val.substring(1);
          val = val.toLowerCase();
          let rgbList = new Array();
          for (let x = 0; x < 3; x++) {
            rgbList[0] = val.substr(x * 2, 2);
            rgbList[3] = "0123456789abcdef";
            rgbList[1] = rgbList[0].substr(0, 1);
            rgbList[2] = rgbList[0].substr(1, 1);
            rgbList[20 + x] =
              rgbList[3].indexOf(rgbList[1]) * 16 +
              rgbList[3].indexOf(rgbList[2]);
          }
          this.rVal = rgbList[20];
          this.gVal = rgbList[21];
          this.bVal = rgbList[22];
        }
      }
    },
    copyRGB() {
      this.isShowDialog = true;
      this.copyContent = `rgb(${this.rVal},${this.gVal},${this.bVal})`;
      this.copyValue();
    },
    copyHEX() {
      this.isShowDialog = true;
      this.copyContent = this.hexVal;
      this.copyValue();
    },
    copyValue() {
      const _input = document.createElement("input");
      _input.value = this.copyContent;
      document.body.appendChild(_input);
      _input.select();
      document.execCommand("Copy");
      document.body.removeChild(_input);
    }
  }
};
</script>

<style scoped>
.color-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.form-wrap {
  width: 400px;
}

.rgb-wrap,
.hex-wrap {
  display: flex;
}

.rgb-wrap .md-input {
  width: 100px;
}

.hex-wrap .md-input {
  width: 300px;
}
</style>
