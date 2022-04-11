<template>
  <section
    id="ourProduct"
    class="width80 margin-auto d-flex flex-direction-column align-items-center"
  >
    <h1   data-aos="fade-right"
        data-aos-duration="1000"
        
        data-aos-once="false">{{ data.title }}</h1>
    <h3   data-aos="fade-left"
        data-aos-duration="15000"
        
        data-aos-once="false">{{ data.summary }}</h3>
    <div   data-aos="zoom-in"
        data-aos-duration="15000"
        
        data-aos-once="false" class="lineBreak">
        <span></span>
        <span class="large"></span>
        <span></span>
        </div>
    <div id="carts" class="d-flex justify-content-around">
      <cart   :data-aos="index%2==0?'fade-right':'fade-left'"
        data-aos-duration="1000"
        
        data-aos-once="false" v-for="(item,index) in data.carts" :key="index" :data="item" />
    </div>
  </section>
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
