<template>
  <div
    id="ourProduct"
    class="width80 margin-auto d-flex flex-direction-column align-items-center"
  >
    <h1>{{ data.title }}</h1>
    <h3>{{ data.summary }}</h3>
    <div class="lineBreak">
        <span></span>
        <span class="large"></span>
        <span></span>
        </div>
    <div id="carts" class="d-flex justify-content-around">
      <cart v-for="(item,index) in data.carts" :key="index" :data="item" />
    </div>
  </div>
</template>
<script>
import cart from "@/components/front/healthAmbassador/ourProduct/cart.vue";
export default {
  components: {
    cart
  },
  props: {
    data: Object
  }
};
</script>
