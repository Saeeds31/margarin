<template>
  <div class="titleBox width100 d-flex justify-content-between align-items-center">
    <div class="endLine width75"></div>
    <div class="content width25 d-flex justify-content-end align-items-center">
      <h1 class="blackColor06">{{ title }}</h1>
      <slot></slot>
    </div>
    <div class="endLine width60 showInMobile"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style scoped>
.titleBox{
  margin: 70px 0;
}
.titleBox .content h1{
    font-size: 25px;
    font-family: 'yekan-heavy';
    margin: 0 15px;
    direction: rtl;
}
.titleBox .endLine{
    height:10px;
    background-color:var(--grayBackground)
}
</style>
