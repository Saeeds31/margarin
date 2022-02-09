<template>
  <div id="singleSlider" class="width30">
    <VueSlickCarousel v-bind="sliderSettings">
      <cart v-for="blog in data" :weblog="blog" :key="blog.id" />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import cart from "@/components/front/home/weblogs/singleSlider/cart.vue";
export default {
  components: {
    VueSlickCarousel,
    cart
  },
  props:{
    data:Array
  },
  data() {
    return {
   
      sliderSettings: {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
    
  "cssEase": "linear",
  
  "responsive": [
    {
      "breakpoint": 480,
      "settings": {
        dots:false
      }
    }
  ]
      }
    };
  }
};
</script>
<style>
#singleSlider .slick-dots {
  bottom: 10%;
  z-index: 100;
}
#singleSlider .slick-dots li.slick-active button:before {
  color: var(--color-theme);
}
#singleSlider .slick-dots li button:before {
  color: #ececec;
}
</style>
