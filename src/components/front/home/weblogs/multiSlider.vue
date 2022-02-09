<template>
  <div id="multiSlider" class="width65">
      <VueSlickCarousel v-bind="sliderSettings">

      <cart v-for="blog in data" :blog="blog" :key="blog.id" />
      </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel"
import cart from "@/components/front/home/weblogs/multiSlider/cart.vue"
export default {
    components:{
        cart,VueSlickCarousel
    },
    props:{
      data:Array
    },
  data() {
    return {

      sliderSettings:{
           "dots": false,
           arrows: true,
  "focusOnSelect": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 2,
  "slidesToScroll": 1,
  "touchThreshold": 5
      }
    };
  },
 
};
</script>
<style>

#multiSlider .slick-prev:before,
#multiSlider .slick-next:before {
  opacity: 1;
}
#multiSlider .slick-prev,#multiSlider .slick-next {
    background: white;
    width: 60px;
    height: 60px;
    top:55%;
    border-radius: 50px;
    box-shadow: 0 0 18px #00000059;
    cursor: pointer;
    z-index: 20;
}
#multiSlider .slick-prev:before,#multiSlider .slick-next:before {
    color: black;
    font-size: 15px;
}
#multiSlider .slick-prev:before{
  content: url("../../../../assets/front/images/leftArrowHomeSlider.svg");
}
#multiSlider .slick-next:before{
  content: url("../../../../assets/front/images/RightArrowHomeSlider.svg");

}
#multiSlider .slick-disabled{

    border: 5px solid #ebebeb;
    box-shadow: none;
}
</style>
