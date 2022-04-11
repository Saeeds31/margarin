<template>
  <section id="introductionSection">
    <div id="content" class="d-flex justify-content-between">
      <img   data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true" :src="image" class="hiddenInMobile introductionImage" :alt="title" />
      <div class="innerContent d-flex flex-direction-column align-items-end">
        <h1   data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true">{{ title }}</h1>
        <h3 data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true" class="blackColor08">{{ summary }}</h3>
        <doubleLine data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true" class="width25 hiddenInMobile" />
        <currentPath class="currentPathSection" data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-once="true" :routes="routes" />
        <div data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true" id="imageBox" class="showInMobileFlex width100 d-flex justify-content-center">
          <img
          class="showInMobile mainImage introductionImage"
          :src="image"
          :alt="title"
        />
        </div>
        <slot ></slot>
      </div>
    </div>
    <img
    data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-once="true"
      id="backgroundOrange"
      src="@/assets/front/images/introductionBackground.png"
      alt="مارگارین"
    />
  </section>
</template>
<script>
import doubleLine from "@/components/front/shared/doubleLine.vue";
import currentPath from "@/components/front/shared/currentPath.vue";
export default {
  components: {
    currentPath,
    doubleLine
  },
  props: {
    summary: String,
    title:String,
    routes:Array,
    image:String
  },
  data() {
    return {};
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    setStyle() {
      if (window.innerWidth > 1000) {
        if (window.innerWidth > 1495) {
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#introductionSection #content div h1",
            1920,
            55,
            1496,
            44
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#introductionSection #content div h3",
            1920,
            30,
            1496,
            25
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#currentPathSection a",
            1920,
            18,
            1496,
            12
          );
          this.$root.setProportionStyle(
            "margin-top",
            "px",
            "div#currentPathSection",
            1920,
            20,
            1496,
            20
          );
        } else {
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#introductionSection #content div h1",
            1496,
            44,
            1100,
            32
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#introductionSection #content div h3",
            1496,
            25,
            1100,
            16
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#currentPathSection a",
            1496,
            12,
            1100,
            12
          );
          this.$root.setProportionStyle(
            "margin-top",
            "px",
            "div#currentPathSection",
            1496,
            20,
            1100,
            3
          );
        }
        // unset mobile Style
        this.$root.unsetInlineStyle("width", "#introductionSection #content .innerContent .mainImage");
        this.$root.unsetInlineStyle("margin-top", "#introductionSection");
        this.$root.unsetInlineStyle("top", "#backgroundOrange");
    
      } else {
        // unset desktop style
        this.$root.unsetInlineStyle("font-size", "#currentPathSection a");
        this.$root.unsetInlineStyle("margin-top", "div#currentPathSection");

        this.$root.setProportionStyle(
          "margin-top",
          "%",
          "#introductionSection",
          999,
          0,
          375,
          4
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#introductionSection #content div h1",
          999,
          44,
          375,
          22
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#introductionSection #content div h3",
          999,
          25,
          375,
          15
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#introductionSection #content .innerContent .mainImage",
          999,
          40,
          375,
          98
        );
        this.$root.setProportionStyle(
          "top",
          "%",
          "#backgroundOrange",
          999,
          3,
          375,
          10
        );
      }
    }
  }
};
</script>
<style scoped>
#backgroundOrange {
  position: absolute;
  top: 20px;
  z-index: -1;
  left: 0;
  width: 100%;
}
#introductionSection #content div h1 {
  color: var(--color-theme);
  font-size: 44px;
  font-family: "yekan-heavy";
}
#introductionSection #content div h3 {
  font-size: 25px;
}
#introductionSection #content img {
  border-radius: 20px;      padding: 15px;
    background: white;
    box-shadow: 0 0 40px #8d8d8d70;
     min-width: 450px;
}
@media (max-width:1000px){
  #introductionSection #content img{
    box-shadow: 0 0 10px #8d8d8d70;

  }
}
.slotElements {
  margin-top: 23%;
  width: 80%;
  text-align: justify;
  font-size: 18px;
  direction: rtl;
}
</style>
