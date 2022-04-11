<template>
  <section id="weblogsSection" class="width100">
    <sectionHeader :data="weblogsHeaderData">
      <svg
      id="newsSvg"
            height="50"
            viewBox="0 0 511 511.99897"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
              d="m298.484375 24.015625c4.980469-6.621094 3.648437-16.023437-2.972656-21.003906-6.617188-4.976563-16.023438-3.648438-21.003907 2.972656l-63.933593 85.015625h37.535156zm0 0"
            />
            <path
              d="m143.777344 91h37.242187l-62.4375-84.886719c-4.910156-6.675781-14.296875-8.105469-20.96875-3.195312-6.675781 4.910156-8.105469 14.296875-3.199219 20.96875zm0 0"
            />
            <path
              d="m276.496094 211h-159.996094c-13.785156 0-25 11.214844-25 25v129.996094c0 13.785156 11.214844 25 25 25h159.996094c13.785156 0 25-11.214844 25-25v-129.996094c0-13.785156-11.214844-25-25-25zm0 0"
            />
            <path
              d="m406.496094 358.996094c-8.273438 0-15 6.730468-15 15 0 8.273437 6.726562 15 15 15 8.269531 0 15-6.726563 15-15 0-8.269532-6.730469-15-15-15zm0 0"
            />
            <path
              d="m467.496094 121h-421.996094c-24.8125 0-45 20.1875-45 45v268.996094c0 24.8125 20.1875 45 45 45h22.402344l-4.984375 10.632812c-3.515625 7.5-.285157 16.433594 7.214843 19.949219 7.496094 3.511719 16.429688.289063 19.949219-7.214844l10.953125-23.367187h310.925782l10.953124 23.367187c3.515626 7.503907 12.445313 10.730469 19.945313 7.214844 7.503906-3.519531 10.734375-12.449219 7.214844-19.949219l-4.980469-10.632812h22.398438c24.816406 0 45-20.1875 45-45v-268.996094c.003906-24.8125-20.183594-45-44.996094-45zm-136 244.996094c0 30.328125-24.671875 55-55 55h-159.996094c-30.328125 0-55-24.671875-55-55v-129.996094c0-30.328125 24.671875-55 55-55h159.996094c30.328125 0 55 24.671875 55 55zm75 53c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm30-148h-60c-8.285156 0-15-6.714844-15-15 0-8.28125 6.714844-15 15-15h60c8.28125 0 15 6.71875 15 15 0 8.285156-6.71875 15-15 15zm0-59.996094h-60c-8.285156 0-15-6.71875-15-15 0-8.285156 6.714844-15 15-15h60c8.28125 0 15 6.714844 15 15 0 8.28125-6.71875 15-15 15zm0 0"
            />
          </svg>
    </sectionHeader>
    <div class="sliderBOX width80 margin-auto d-flex justify-content-around">
      <multiSlider :data="multiSliderList" class="hiddenInMobile" />
      <singleSlider :data="singleSliderList" />
    </div>
        <footerLinker   :data="weblogsHeaderData"  />

  </section>
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
        route: "/weblogs?type=0",
        routeTitle:this.$cookie.get('ltrTheme')?"View news archive": "مشاهده آرشیو اخبار",
        title:this.$cookie.get('ltrTheme')?"News and Events": "اخبــــــار و رویداد هــــــا",
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
        "height",
        "px",
        "#homeSection #weblogsSection #multiSlider .cart .content img",
        1920,
        250,
        1495,
        200,
        "important"
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
         this.$root.unsetInlineStyle("height","#homeSection #weblogsSection #multiSlider .cart .content img")
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
