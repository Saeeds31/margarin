<template>
  <div class="contactWay d-flex justify-content-end align-items-center">
    <p class="d-flex align-items-end flex-direction-column">
      <span class="blackColor06">
        {{ title }}
      </span>
      <span class="">
        {{ value }}
      </span>
    </p>
    <slot> </slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    value: String
  }
};
</script>

<style scoped>
p{
    margin: 0;
}
p span:first-child{
font-size: 15px;
font-family: 'yekan-bold';
}
p span:last-child{
    font-size:20px;
    font-family:'yekan-heavy';
    letter-spacing:1px;
    opacity: 0.8;
}
.contactWay p{
  margin-right: 15px;
}
</style>