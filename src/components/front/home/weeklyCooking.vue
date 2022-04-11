<template>
  <section id="weeklyCookingSection" class="width100 height100vh">
    <VueSlickCarousel v-bind="sliderSettings">
      <cart :style="{'zIndex':index}"  v-for="(item, index) in cookings" :key="index" :data="item" />
    </VueSlickCarousel>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import cart from "@/components/front/home/weeklyCooking/cart.vue";
export default {
  data() {
    return {
      sliderSettings: {
        fade:true,
        dots: false,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  },
  props: {
    cookings: Array
  },
  methods: {
    setStyle() {
      if (window.innerWidth > 1000) {
        if (window.innerWidth > 1495) {
          this.$root.setProportionStyle(
            "top",
            "%",
            "#weeklyCookingSection .slick-prev",
            1920,
            86,
            1495,
            86
          );
          this.$root.setProportionStyle(
            "top",
            "%",
            "#weeklyCookingSection .slick-next",
            1920,
            86,
            1495,
            86
          );
        } else {
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#homeSection #weeklyCookingSection .cart .body .header .titles h1",
            1496,
            39,
            1024,
            24
          );
          //
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#homeSection #weeklyCookingSection .cart .body .header .titles h4",
            1496,
            28,
            1024,
            20
          );
          // #homeSection #weeklyCookingSection .cart .body .buttons a
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#homeSection #weeklyCookingSection .cart .body .buttons a",
            1496,
            14,
            1024,
            11
          );
          this.$root.setProportionStyle(
            "width",
            "px",
            ".kitchen svg",
            1496,
            16,
            1024,
            10
          );
          this.$root.setProportionStyle(
            "margin-right",
            "px",
            ".kitchen svg",
            1496,
            15,
            1024,
            7
          );
          this.$root.setProportionStyle(
            "margin-left",
            "px",
            ".kitchen svg",
            1496,
            15,
            1024,
            7
          );
          // #weeklyCookingSection .slick-prev, #weeklyCookingSection .slick-next
          this.$root.setProportionStyle(
            "width",
            "px",
            "#weeklyCookingSection .slick-prev",
            1496,
            50,
            1024,
            45
          );
          this.$root.setProportionStyle(
            "width",
            "px",
            "#weeklyCookingSection .slick-next",
            1496,
            50,
            1024,
            45
          );
          this.$root.setProportionStyle(
            "top",
            "%",
            "#weeklyCookingSection .slick-prev",
            1496,
            86,
            1024,
            90
          );
          this.$root.setProportionStyle(
            "top",
            "%",
            "#weeklyCookingSection .slick-next",
            1496,
            86,
            1024,
            90
          );
        }
        if (document.body.classList.contains("ltrTheme")) {
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#homeSection #weeklyCookingSection .cart .body .header .titles h1",
            1920,
            35,
            1495,
            25
          );
        }
      } else {
        if (document.body.classList.contains("ltrTheme")) {
          this.$root.unsetInlineStyle(
            "font-size",
            "#homeSection #weeklyCookingSection .cart .body .header .titles h1"
          );
        }
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #weeklyCookingSection .cart .body .header .titles h1",
          1000,
          39,
          425,
          30
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #weeklyCookingSection .cart .body .header .titles h4",
          1000,
          28,
          425,
          23
        );
        this.$root.unsetInlineStyle(
          "top",
          "#weeklyCookingSection .slick-prev",
        );

        this.$root.unsetInlineStyle(
          "top",
          "#weeklyCookingSection .slick-next",
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #weeklyCookingSection .cart .body .buttons .kitchen",
          1000,
          14,
          425,
          10
        );
      }
    }
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  components: {
    cart,
    VueSlickCarousel
  }
};
</script>
<style scoped>
.disableButton {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.8;
}
#weeklyCookingSection {
  margin: 5% auto 2.5%;
  background-image: url("../../../assets/front/images/weeklyCookingBack.png");
background-size: 36% 88%;
    background-repeat: no-repeat;
    background-position-y: bottom;
}
</style>
<style>
#weeklyCookingSection .slick-prev:before,
#weeklyCookingSection .slick-next:before {
  opacity: 1;
}
#weeklyCookingSection .slick-prev,
#weeklyCookingSection .slick-next {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 0 18px #00000059;
  cursor: pointer;
}
#weeklyCookingSection .slick-prev:before,
#weeklyCookingSection .slick-next:before {
  color: black;
  font-size: 15px;
}
#weeklyCookingSection .slick-prev:before {
  content: url("../../../assets/front/images//leftArrowHomeSlider.svg");
}
#weeklyCookingSection .slick-next:before {
  content: url("../../../assets/front/images//RightArrowHomeSlider.svg");
}
#weeklyCookingSection .slick-disabled {
  border: 5px solid #ebebeb;
  box-shadow: none;
}
#weeklyCookingSection .slick-prev {
  left: 76%;
  top: 85%;
  z-index: 100;
}
#weeklyCookingSection .slick-next {
  right: 15%;
  top: 85%;
  z-index: 100;
}
</style>
