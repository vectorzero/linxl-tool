<template>
  <div class="ratio-wrap">
    <div class="form-wrap">
      <md-field>
        <label>宽度</label>
        <md-input type="number" @input="changeWidth" v-model="widthVal"></md-input>
      </md-field>
      <md-field>
        <label>高度</label>
        <md-input type="number" @input="changeHeight" v-model="heightVal"></md-input>
      </md-field>
      <md-field>
        <label>比例</label>
        <md-input type="number" @input="changeRatio" v-model="aspectRatio"></md-input>
      </md-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widthVal: "",
      heightVal: "",
      aspectRatio: ""
    };
  },
  methods: {
    changeWidth() {
      if (this.aspectRatio && this.heightVal && this.widthVal) {
        this.heightVal = this.widthVal / this.aspectRatio;
      }
    },
    changeHeight() {
      if (this.aspectRatio && this.heightVal && this.widthVal) {
        this.widthVal = this.heightVal * this.aspectRatio;
      }
    },
    changeRatio() {
      if (this.aspectRatio && this.heightVal && this.widthVal) {
        this.heightVal = this.widthVal / this.aspectRatio;
        this.widthVal = this.heightVal * this.aspectRatio;
      }
    }
  }
};
</script>

<style scoped>
.ratio-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.form-wrap {
  width: 300px;
}
</style>
