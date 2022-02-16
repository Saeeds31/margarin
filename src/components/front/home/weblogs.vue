<template>
  <div id="weblogsSection" class="width100">
    <sectionHeader :data="weblogsHeaderData">
      <img 
        :alt="weblogsHeaderData.routeTitle"
        src="@/assets/front/images/weblogsIconHome.svg"
      />
    </sectionHeader>
    <div class="sliderBOX width80 margin-auto d-flex justify-content-around">
      <multiSlider :data="multiSliderList" class="hiddenInMobile" />
      <singleSlider :data="singleSliderList" />
    </div>
        <footerLinker   :data="weblogsHeaderData"  />

  </div>
</template>
<script>
import footerLinker from "@/components/front/shared/footerLink.vue"
import sectionHeader from "@/components/front/shared/sectionHeader.vue";
import multiSlider from "@/components/front/home/weblogs/multiSlider.vue";
import singleSlider from "@/components/front/home/weblogs/singleSlider.vue";
export default {
  components: {
    sectionHeader,
    multiSlider,footerLinker,
    singleSlider
  },
  props:{
    multiSliderList:Array,
    singleSliderList:Array,
  },
  watch:{
    
  },
  data() {
    return {
      weblogsHeaderData: {
        route: "/weblogs",
        routeTitle:this.$cookie.get('ltrTheme')?"View news archive": "مشاهده آرشیو اخبار",
        title:this.$cookie.get('ltrTheme')?"News and announcements": "اخبــــــار و اطلاعیــــــه هــــــا",
        summary:this.$cookie.get('ltrTheme')?"Study the latest": "مطالعـــه جدیـــدترین هـــا",
        image: true
      }
    };
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize",this.setStyle)
  },
  beforeDestroy() {
    window.removeEventListener("resize",this.setStyle)
  },
  methods: {
    setStyle(){
      // 
       if(window.innerWidth>1000){
        
      this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #weblogsSection #multiSlider .cart .content h1",
        1496,
        16,
        1024,
        13
      );   
     
       this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #weblogsSection #multiSlider .cart .content .description",
        1496,
        13,
        1024,
        10
      );
      this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #weblogsSection #singleSlider .cart .content .date span",
        1496,
        16,
        1024,
        13
      );
       this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #weblogsSection #singleSlider .cart .content h1",
        1496,
        16,
        1024,
        13
      );
      this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #weblogsSection #singleSlider .cart .content h3",
        1496,
        12,
        1024,
        10
      );
        this.$root.setProportionStyle(
        "font-size",
        "%",
        "#homeSection #weblogsSection #multiSlider .cart .content img",
        1496,
        96,
        1024,
        84
      );
       this.$root.setProportionStyle(
        "bottom",
        "%",
        "#singleSlider .slick-dots",
        1496,
        10,
        1024,
        5
      );
      //
 this.$root.setProportionStyle(
        "width",
        "%",
        "#weblogsSection .sliderBOX #singleSlider",
        1496,
        30,
        1024,
        30
      );
       }else{
          this.$root.setProportionStyle(
        "width",
        "%",
        "#weblogsSection .sliderBOX #singleSlider",
        1000,
        50,
        425,
        90,
      );
       }
    }
  },
};
</script>
<style>

#weblogsSection{
    height: 100vh;
}
</style>
