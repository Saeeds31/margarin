<template>
  <div class="width80 height55vh margin-auto" id="selectedProductSlider">
    <VueSlickCarouse v-bind="sliderSettings">
      <!-- <cart :class="{productHomeAnimated1:index%3==0,productHomeAnimated2:index%3==1,productHomeAnimated3:index%3==2,}"  v-for="(item,index) in products" :key="item.id" :product="item" /> -->
       <cart   v-for="(item,index) in products" :key="index" :product="item" />
    </VueSlickCarouse>
  </div>
</template>
<script>
import cart from "@/components/front/products/cart.vue";
export default {
  components: {
    cart
  },
  props: {
    products:Array
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
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              initialSlide: 1
            }
          },
        ],
        touchThreshold: 5
      },
    
    };
  }
};
</script>
<style>

#selectedProductSlider .slick-prev{
left: -50px;
}

#selectedProductSlider .slick-next{
right: -50px;
}
#selectedProductSlider .slick-prev:before,
#selectedProductSlider .slick-next:before {
  opacity: 1;
}
#selectedProductSlider .slick-prev,
#selectedProductSlider .slick-next {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 0 18px #00000059;
  cursor: pointer;
}
#selectedProductSlider .slick-prev:before,
#selectedProductSlider .slick-next:before {
  color: black;
  font-size: 15px;
}
#selectedProductSlider .slick-prev:before {
  content: url("../../../../assets/front/images/leftArrowHomeSlider.svg");
}
#selectedProductSlider .slick-next:before {
  content: url("../../../../assets/front/images/RightArrowHomeSlider.svg");
}
#selectedProductSlider .slick-disabled {
  border: 5px solid #ebebeb;
  box-shadow: none;
}
</style>
