<template>
  <div v-if="aboutUsData" class="width100 margin-auto" id="aboutSection">
    <introduction
      class="width80 margin-auto"
      :title="
        $cookie.get('ltrTheme')
          ? 'About Margarin '
          : 'دربــــاره  مارگاریــــن'
      "
      :summary="aboutUsData.aboutUs.title"
      :image="$root.baseImageUrl + aboutUsData.aboutUs.image"
      :routes="routes"
     
    >
      <p
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        class="slotElements width80 blackColor08"
      >
        {{ aboutUsData.aboutUs.text }}
      </p>
    </introduction>
    <slider
      :firstText="aboutUsData.aboutUs.description"
      :lastText="aboutUsData.aboutUs.description2"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
        data-aos-delay="500"
      class="width80 margin-auto"
    />
    <videoBox
    
      v-if="aboutUsData.aboutUs.video != null"
      :video="aboutUsData.aboutUs.video"
      :image="aboutUsData.aboutUs.videoCover"
      :title="aboutUsData.aboutUs.videoTitle"
      :shortTitle="aboutUsData.aboutUs.videoShortDescription"
      data-aos="fade-up"
      data-aos-duration="1500"
        data-aos-delay="500"
      data-aos-once="true"
      class="width80 margin-auto"
    />
    <statistics
    v-if="racemeItems"
      :chartImage="$root.baseImageUrl + aboutUsData.aboutUs.staticImage"
      :racemeItems="racemeItems"
        data-aos-delay="500"
      :text="aboutUsData.aboutUs.statisticText"
      class="width100"
    />
    
    <collapseBox
      v-if="collapseList"
      :list="collapseList"
      data-aos="flip-right"
        data-aos-delay="500"
      data-aos-duration="1500"
      data-aos-once="true"
      class="width80 margin-auto"
    />
    <awards
      :prizes="aboutUsData.prizes"
      data-aos="fade-up"
        data-aos-delay="500"
      data-aos-duration="1500"
      data-aos-once="true"
    />
  </div>
  <loader v-else />
</template>
<script>
import introduction from "@/components/front/shared/introduction.vue";
import slider from "@/components/front/aboutUs/slider.vue";
import videoBox from "@/components/front/aboutUs/videoBox.vue";
import statistics from "@/components/front/aboutUs/statistics.vue";
import awards from "@/components/front/aboutUs/awards.vue";
import collapseBox from "@/components/front/aboutUs/collapseBox.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    introduction,
    slider,
    videoBox,
    statistics,
    awards,
    collapseBox,
    Loader
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme") ? "about-us - margarin" : "مارگارین -درباره ما",
      meta: [
        {
          name: "description",
          content: this.aboutUsData ? this.aboutUsData.aboutUs.meta : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme") ? "about-us" : "درباره ما"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    aboutUsData() {
      return this.$store.getters.getAboutUsData;
    },
    racemeItems(){
      return this.$store.getters.getRacemeItems
    },
    collapseList(){
      return this.$store.getters.getAboutUsCollapseList;
    }
  },
  created() {
    if (this.aboutUsData == null) {
      this.$store.dispatch("getAboutUsFromServer");
    }
  },
  watch: {
    aboutUsData(newValue) {
    let racemeItems= [
        { number: newValue.aboutUs.fund, title_en:"Billion tomans of capital",title_fa: "میلیارد تومان سرمایه" },
        { number: newValue.aboutUs.brand, title_en:"Specialized brand",title_fa: "برند تخصصی" },
        { number: newValue.aboutUs.products, title_en:"Product produced",title_fa: "محصول تولید شده" },
        { number:newValue.aboutUs.personel, title_en:"Factory personnel",title_fa: "نفر پرسنل کارخانه" }
      ]
      this.$store.commit("setRacemeItems",racemeItems)
      let collapse=[
        {
          id: 1,
          image:  newValue.aboutUs.exteraTitle1Icon,
          question:newValue.aboutUs.exteraTitle1,
          answer: newValue.aboutUs.exteraText1
        },

        {
          id: 2,
           image:  newValue.aboutUs.exteraTitle2Icon,
          question:newValue.aboutUs.exteraTitle2,
          answer: newValue.aboutUs.exteraText2
        },

        {
          id: 3,
          image:  newValue.aboutUs.exteraTitle3Icon,
          question:newValue.aboutUs.exteraTitle3,
          answer: newValue.aboutUs.exteraText3
        }
      ];
      this.$store.commit('setAboutUSCollapseList',collapse)
    }
  },
  data() {
    return {
      routes:[{ route: "", routeTitle_fa: "درباره ما", routeTitle_en:"about us"}],
    };
  },
  mounted(){
    if(this.$route.query.section){
      setTimeout(()=>{
        document.getElementById(this.$route.query.section).scrollIntoView({behavior:'smooth'})
      },2000)
    }
  }
};
</script>
