<template>
  <div
    id="blogsSection"
    class="width80 margin-auto d-flex align-items-center flex-direction-column"
  >
    <h1 data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-once="false" class="blackColor06">{{ data.title }}</h1>
    <h2 data-aos="zoom-out"
      data-aos-duration="1500"
      data-aos-once="false" class="blackColor06">{{ data.summary }}</h2>
    <div data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-once="false" class="lineBreak">
      <span></span><span class="large"></span><span></span>
    </div>

    <div data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="false" id="weblogsList" class="width100">
        <VueSlickCarousel v-bind="sliderSettings">
      <cart v-for="(item, index) in blog" :key="index" :article="item" />
    </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import cart from "@/components/front/healthAmbassador/blogs/cart.vue";
export default {
  components: {
    VueSlickCarousel,
    cart
  },
  data() {
    return {
      sliderSettings: {
        centerPadding: "30px",
        dots: false,
        arrows: true,
        edgeFriction: 0.35,
        infinite: false,
        autoPlay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
          "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
      
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 1,
        arrows: false,
      }
    }
  ]
      }
    };
  },
  props: {
    data: Object,
    blog:Array
  }
};
</script>
<style>

#weblogsList .slick-prev:before,
#weblogsList .slick-next:before {
  opacity: 1;
}

#weblogsList .slick-prev,#weblogsList .slick-next {
     background: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 0 0 18px #00000059;
    cursor: pointer;
    z-index: 100;
}
#weblogsList .slick-prev:before,#weblogsList .slick-next:before {
    color: black;
    font-size: 15px;
}
#weblogsList .slick-prev:before{
  content: url("../../../assets/front/images/leftArrowHomeSlider.svg");
}
#weblogsList .slick-next:before{
  content: url("../../../assets/front/images/RightArrowHomeSlider.svg");

}
#weblogsList .slick-disabled{
    background: white

}
#weblogsList .slick-track{
  display: flex !important;
  align-items: center !important;
}
</style>