<template>
  <div id="statisticsSection" class="d-flex flex-direction-column align-items-center width80 margin-auto">
    <h1  data-aos="zoom-out"
      data-aos-duration="1500"
      data-aos-once="false"  class="blackColor06">{{ data.title }}</h1>
    <h3  data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-once="false"  class="blackColor06">{{ data.summary }}</h3>
    <div data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-once="false" class="lineBreak"><span></span><span class="large"></span><span></span></div>
    <div id="carts" class="d-flex justify-content-between">
      <cart :data-aos="index%2==0?'zoom-in':'zoom-out'"
      data-aos-duration="1500"
      data-aos-once="false" :data="item" v-for="(item,index) in data.list" :key="index" >
      </cart>
    </div>
  </div>
</template>
<script>
import cart from "@/components/front/healthAmbassador/statistics/cart.vue"
export default {
  components: {
    cart
  },
  props: {
    data: Object
  }
};
</script>
