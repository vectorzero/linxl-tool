<template>
  <div class="ins-wrap">
    <figure>
      <img src="~@/assets/demo.jpg" />
      <md-tooltip>Origin</md-tooltip>
    </figure>
    <figure v-for="(item,index) in filterList" :key="index" :class="'filter-'+ item.name">
      <img src="~@/assets/demo.jpg" />
      <md-tooltip>{{item.name}}</md-tooltip>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterList: [
        {name:'1977'},
        {name:'aden'},
        {name:'amaro'},
        {name:'ashby'},
        {name:'brannan'},
        {name:'brooklyn'},
        {name:'charmes'},
        {name:'clarendon'},
        {name:'crema'},
        {name:'dogpatch'},
        {name:'earlybird'},
        {name:'gingham'},
        {name:'ginza'},
        {name:'hefe'},
        {name:'helena'},
        {name:'hudson'},
        {name:'inkwell'},
        {name:'kelvin'},
        {name:'juno'},
        {name:'lark'},
        {name:'lofi'},
        {name:'ludwig'},
        {name:'maven'},
        {name:'mayfair'},
        {name:'moon'},
        {name:'nashville'},
        {name:'perpetua'},
        {name:'poprocket'},
        {name:'reyes'},
        {name:'rise'},
        {name:'sierra'},
        {name:'skyline'},
        {name:'slumber'},
        {name:'stinson'},
        {name:'sutro'},
        {name:'toaster'},
        {name:'valencia'},
        {name:'vesper'},
        {name:'walden'},
        {name:'willow'},
        {name:'xpro-ii'}
      ]
    }
  }
}
</script>

<style scoped>
  @import './ins.css';
  .ins-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  img {
    width: 150px;
    height: 150px;
  }
</style>

