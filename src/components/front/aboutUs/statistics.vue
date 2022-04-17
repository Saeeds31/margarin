<template>
  <div id="statisticsSection">

    <div
      id="content"
     
      class="width90 d-flex justify-content-between"
    >
      <img       data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true" class="hiddenInMobile" :src="chartImage" alt="" />
      <div id="detail" class="d-flex flex-direction-column align-items-end">
        <h1 data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true" class="blackColor06">{{ $cookie.get('ltrTheme')?aboutData.title_en:aboutData.title_fa }}</h1>
        <h3  data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-once="true"  class="blackColor06">{{ $cookie.get('ltrTheme')?aboutData.summary_en:aboutData.summary_fa }}</h3>
        <img  data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-once="true"  class="showInMobile" :src="chartImage" :alt="aboutData.summary_fa" />

        <p  data-aos="fade-left"
      data-aos-duration="2000"
      data-aos-once="true"  class="blackColor06">{{text }}</p>
        <router-link  data-aos="fade-left"
      data-aos-duration="2000"
      data-aos-once="true"  class="blackColor06" to="/products">
         <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3287 11.0002V13.0002L7.50042 13.0002L10.7429 16.2428L9.32873 17.657L3.67188 12.0001L9.32873 6.34326L10.7429 7.75747L7.50019 11.0002L20.3287 11.0002Z" fill="black"/>
</svg>

          {{$cookie.get('ltrTheme')?"Margarin Products":'محصولات مارگارین'}}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
  props:{
    text:String,
    chartImage:String
  },
  data() {
    return {
    
      aboutData: {
        title_en:"In the language of statistics and figures",
        title_fa: "بـــــه زبـــــان آمـــــار و ارقـــــام",
        summary_en: "Examine the status of the margarine group",
        summary_fa: "بـــررسی وضـــعیت گـــروه مارگاریـــن",
      }
    };
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
            "width",
            "%",
            "#aboutSection #statisticsSection #racemeSection",
            1920,
            70,
            1496,
            80
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail h1",
            1920,
            52,
            1496,
            39
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail h3",
            1920,
            32,
            1496,
            25
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail p",
            1920,
            18,
            1496,
            13
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail a",
            1920,
            24,
            1496,
            14
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content h1",
            1920,
            48,
            1496,
            39
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content h3",
            1920,
            28,
            1496,
            25
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content p",
            1920,
            18,
            1496,
            14
          );

          this.$root.setProportionStyle(
            "width",
            "%",
            "#aboutSection #awardsSection .sliderItem .content .dateBox",
            1920,
            38,
            1496,
            45
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content .dateBox p span",
            1920,
            16,
            1496,
            14
          );
        } else {
          // ! 1495=>1100
          this.$root.setProportionStyle(
            "width",
            "%",
            "#aboutSection #statisticsSection #racemeSection",
            1496,
            80,
            1100,
            80
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail h1",
            1496,
            39,
            1100,
            39
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail h3",
            1496,
            25,
            1100,
            25
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail p",
            1496,
            13,
            1100,
            13
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #statisticsSection #content #detail a",
            1496,
            14,
            1100,
            14
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content h1",
            1496,
            39,
            1100,
            32
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content h3",
            1496,
            25,
            1100,
            18
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content p",
            1496,
            14,
            1100,
            11
          );

          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content .dateBox p span",
            1496,
            14,
            1100,
            9
          );
        }
        this.$root.unsetInlineStyle(
          "width",
          "#aboutSection #statisticsSection #content #detail a"
        );
      } else {
        // unset desktop config
        this.$root.unsetInlineStyle(
          "width",
          "#aboutSection #statisticsSection #racemeSection"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#aboutSection #statisticsSection #content #detail p"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#aboutSection #awardsSection .sliderItem .content h1"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#aboutSection #awardsSection .sliderItem .content h3"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#aboutSection #awardsSection .sliderItem .content p"
        );
        this.$root.unsetInlineStyle(
          "width",
          "#aboutSection #awardsSection .sliderItem .content .dateBox"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#aboutSection #awardsSection .sliderItem .content .dateBox p span"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#aboutSection #statisticsSection #content #detail a"
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#aboutSection #statisticsSection #content #detail h1",
          999,
          39,
          375,
          24
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#aboutSection #statisticsSection #content #detail h3",
          999,
          25,
          375,
          16
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#aboutSection #statisticsSection #content #detail a",
          999,
          17,
          375,
          77
        );
      }
    }
  }
};
</script>
<style>
@media only screen and (max-width: 1280px) and (min-width: 1000px) {
  #aboutSection #statisticsSection #racemeSection {
    flex-wrap: wrap;
    justify-content: center !important;
  }
  #aboutSection #statisticsSection #racemeSection .raceme {
    margin: 10px;
  }
}
</style>
