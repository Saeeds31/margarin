<template>
  <div
    id="blogsSection"
    class="width80 margin-auto d-flex align-items-center flex-direction-column"
  >
    <h1 class="blackColor06">{{ data.title }}</h1>
    <h2 class="blackColor06">{{ data.summary }}</h2>
    <div class="lineBreak">
      <span></span><span class="large"></span><span></span>
    </div>

    <div id="weblogsList" class="width100">
        <VueSlickCarousel v-bind="sliderSettings">
      <cart v-for="(blog, index) in data.blogs" :key="index" :article="blog" />
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
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2,
        arrows: false,
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        arrows: false,
        "slidesToScroll": 1,
            centerPadding: "30px", "centerMode": true,
      }
    }
  ]
      }
    };
  },
  props: {
    data: Object
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