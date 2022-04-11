<template>
  <header id="Header" class="d-flex justify-content-between align-items-center">
    <div id="mainContent" class="d-flex flex-direction-column">
      <topSection
        data-aos="fade-right"
        data-aos-duration="1000"
      ></topSection>
      <doubleLine
        data-aos="zoom-in"
        data-aos-duration="1200"
        class="hiddenInMobile"
      />
      <bottomSection
        data-aos="fade-up"
        data-aos-duration="1000"
        class="hiddenInMobile"
      ></bottomSection>
    </div>
    <logo
      data-aos="fade-left"
      data-aos-duration="1500"
      id="mainLogo1"
    ></logo>
  </header>
</template>
<script>
import doubleLine from "@/components/front/shared/doubleLine.vue";
import Logo from "@/components/front/shared/logo.vue";
import topSection from "@/components/front/shared/header/topSection.vue";
import bottomSection from "@/components/front/shared/header/bottomSection.vue";
export default {
  components: {
    Logo,
    doubleLine,
    topSection,
    bottomSection
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
        // ! 1495=>1920
        if (window.innerWidth > 1495) {
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header  #mainLogo1",
            1920,
            6,
            1495,
            7
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#Header #mainContent #bottomSection nav #bottomMenu li a",
            1920,
            19,
            1496,
            15
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#Header #mainContent #topSection nav #topMenu li a",
            1920,
            16,
            1496,
            15
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#languageAndSwitcherBox",
            1920,
            25,
            1496,
            30
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header #mainContent #topSection nav",
            1920,
            48,
            1496,
            50
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header #mainContent #bottomSection nav",
            1920,
            50,
            1496,
            55
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header #mainContent #bottomSection #buttons",
            1920,
            10,
            1496,
            14
          );
        } else {
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header  #mainLogo1",
            1495,
            7,
            1100,
            8
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#Header #mainContent #topSection nav #topMenu li a",
            1495,
            15,
            1100,
            12
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#Header #mainContent #bottomSection nav #bottomMenu li a",
            1495,
            15,
            1100,
            12
          );
          // ! 1495 =>1100
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header #mainContent #bottomSection #buttons",
            1496,
            14,
            1100,
            17
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header #mainContent #bottomSection nav",
            1496,
            55,
            1100,
            65
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#languageAndSwitcherBox",
            1496,
            30,
            1100,
            35
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#Header #mainContent #topSection nav",
            1496,
            50,
            1100,
            60
          );
        }
        // * هردو حالت

        this.$root.setProportionStyle(
          "width",
          "%",
          "#languageSwitcher",
          1920,
          35,
          1496,
          40
        );
     
             this.$root.unsetInlineStyle(
          "width",
          "#topSection #mobileMenu #mainLogo"
        );
             this.$root.unsetInlineStyle(
          "width",
          "#topSection #mobileMenu #mainLogo"
        );
        // از بین بردن استایل های موبایلی
         
           this.$root.unsetInlineStyle(
          "width",
          "#topSection #mobileMenu #switchTheme"
        );
      } else {
        this.$root.unsetInlineStyle(
          "font-size",
          "#Header #mainContent #bottomSection nav #bottomMenu li a"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#Header #mainContent #topSection nav #topMenu li a"
        );
        // responsive
        this.$root.setProportionStyle(
          "width",
          "%",
          "#Header  #mainLogo1",
          999,
          6,
          375,
          16
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#topSection #mobileMenu #switchTheme",
          999,
          10,
          375,
          25
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#topSection #mobileMenu #mainLogo",
          999,
          6,
          375,
          15
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#topSection #mobileMenu #languageSwitcher",
          999,
          14,
          375,
          32
        );
      }
    }
  }
};
</script>
<style >
 #mobileMenu nav ul {
        flex-direction: column !important;
    }
</style>