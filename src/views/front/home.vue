<template>
  <div v-if="homeData != null" id="homeSection">
    <div id="homeLeader">
      <headerSticky />
      <verticalMenu />
    </div>
    <div
      v-if="
        (homeData.sliders.length > 0 && $root.sectionIndexHome == 1) ||
        (homeData.sliders.length > 0 && $root.screenSize < 1000)
      "
      id="sliderSection"
      class="d-flex width100 height100vh"
    >
      <!-- <div
        id="wall"
        class="width5 d-flex flex-direction-column justify-content-end hiddenInMobile"
      >
        <p>
{{$cookie.get('ltrTheme')?'Margarine Company (public stock)':'شــــــــــرکت مارگاریــــــــــن ( سهامــــــــــی عــــــــــام )'}}
        </p>
        <div id="shadowWhite">
          <span></span>
        </div>
      </div> -->
      <slider :slider="homeData.sliders" class="width100 height100" />
    </div>
    <aboutUs
      v-if="$root.sectionIndexHome == 2 || $root.screenSize < 1000"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"
    />
    <selectedProduct
      v-if="
        (homeData.products.length > 0 && $root.sectionIndexHome == 3) ||
        (homeData.products.length > 0 && $root.screenSize < 1000)
      "
      :products="homeData.products"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"
    />
    <weeklyCooking
      v-if="
        (homeData.recipes.length > 0 && $root.sectionIndexHome == 4) ||
        (homeData.recipes.length > 0 && $root.screenSize < 1000)"
      :cookings="homeData.recipes"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"
    />
    <news
      v-if="
        (multiSlider.length > 0 &&
          singleSlider.length > 0 &&
          $root.sectionIndexHome == 5) ||
        $root.screenSize < 1000
      "
      :singleSliderList="singleSlider"
      :multiSliderList="multiSlider"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"
    />
    <articles
      v-if="
        (homeData.articles.length > 0 && $root.sectionIndexHome == 6) ||
        (homeData.articles.length > 0 && $root.screenSize < 1000)
      "
      :articles="homeData.articles"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"
    />
    <certificates
      :prizes="homeData.prizes"
      v-if="(homeData.prizes.length > 0 && $root.sectionIndexHome == 7) ||
        (homeData.prizes.length > 0 && $root.screenSize < 1000)"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"
    />
    <footerSite      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false" v-if="$root.sectionIndexHome == 8 ||$root.screenSize < 1000" />
    <footerNavigation class="showInMobile" />
  </div>
  <Loader v-else />
</template>
<script>
import headerSticky from "@/components/front/home/slider/header.vue";
import verticalMenu from "@/components/front/home/slider/verticalMenu.vue";
import footerSite from "@/components/front/shared/footer.vue";
import slider from "@/components/front/home/slider.vue";
import aboutUs from "@/components/front/home/aboutUs.vue";
import selectedProduct from "@/components/front/home/selectedProduct.vue";
import weeklyCooking from "@/components/front/home/weeklyCooking.vue";
import news from "@/components/front/home/weblogs.vue";
import articles from "@/components/front/home/articles.vue";
import certificates from "@/components/front/home/certificates.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    Loader,
    headerSticky,
    slider,
    verticalMenu,
    aboutUs,
    selectedProduct,
    weeklyCooking,
    news,
    articles,
    footerSite,
    certificates
  },
  created() {
    if (this.homeData == null) {
      this.$store.dispatch("getHomeDataFromServer");
    }
  },
  data() {
    return {
      wheelCounter: 0,
      lastWheel: 1
    };
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "Home - Margarin"
        : "مارگارین - صفحه اصلی",
      meta: [
        {
          name: "description",
          content: this.footerData ? this.footerData.meta : "وبسایت مارگارین"
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "Home - Margarin"
            : "مارگارین - صفحه اصلی"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  watch: {
    homeData(newVal) {
      // تنظیمات لیست خبرها

      if (newVal.news.length == 0) return;
      else if (newVal.news.length >= 3) {
        let sl = [];
        let ml = [];
        newVal.news.forEach((item)=>{
          if(item.isSpecial==true){

            sl.push(item);
          }else{

            ml.push(item);
          }
        })
        
        this.$store.commit("setMultiSliderNews", ml);
        this.$store.commit("setSingleSliderNews", sl);
      } else {
        this.$store.commit("setMultiSliderNews", newVal.news);
        this.$store.commit("setSingleSliderNews", newVal.news);
      }
      
    }
  },
  computed: {
    footerData(){
      return this.$root.footerData
    },
    multiSlider() {
      return this.$store.getters.getMultiSliderNews;
    },
    singleSlider() {
      return this.$store.getters.getSingleSliderNews;
    },
    homeData() {
      return this.$store.getters.getHomeData;
    }
  },
  mounted() {
    
    window.addEventListener("resize", this.setStyle);
    window.addEventListener("keydown", this.showSection);
    window.addEventListener("wheel", this.showSectionWithScroll);
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.showSectionWithScroll);
    window.removeEventListener("keydown", this.showSection);
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    showSectionWithScroll(event) {
      if(this.$root.footerMapCursor!=true){
        
      let oldLastWheel = this.lastWheel;
      this.lastWheel = event.deltaY;
      if (oldLastWheel > 0 && this.lastWheel > 0) {
        this.wheelCounter++;
      } else if (oldLastWheel < 0 && this.lastWheel < 0) {
        this.wheelCounter--;
      } else {
        this.wheelCounter = 0;
      }
      if (this.wheelCounter == 2) {
        this.wheelCounter = 0;
        if (this.$root.sectionIndexHome != 8) {
          this.$root.sectionIndexHome++;
        }
        window.removeEventListener("wheel", this.showSectionWithScroll);
        setTimeout(() => {
          window.addEventListener("wheel", this.showSectionWithScroll);
        }, 2000);
      }
      if (this.wheelCounter == -2) {
        this.wheelCounter = 0;
        if (this.$root.sectionIndexHome != 1) {
          this.$root.sectionIndexHome--;
        }
        window.removeEventListener("wheel", this.showSectionWithScroll);
        setTimeout(() => {
          window.addEventListener("wheel", this.showSectionWithScroll);
        }, 2000);
      }
      }
    },
    showSection(e) {
      if (e.key == "8" || e.key == "ArrowUp") {
        if (this.$root.sectionIndexHome != 1) {
          this.$root.sectionIndexHome--;
        }
      }
      if (e.key == "2" || e.key == "ArrowDown") {
        if (this.$root.sectionIndexHome != 8) {
          this.$root.sectionIndexHome++;
        }
      }
    },
    gotoLink(link) {
      if (link == null) return;
      window.open(link, "_blank");
    },
    setStyle() {
      if (window.innerWidth > 1000) {
        if (window.innerWidth > 1495) {
         
          // this.$root.setProportionStyle(
          //   "width",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #search svg",
          //   1996,
          //   28,
          //   1024,
          //   26
          // );
          // this.$root.setProportionStyle(
          //   "height",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #search svg",
          //   1996,
          //   28,
          //   1024,
          //   26
          // );

          // this.$root.setProportionStyle(
          //   "width",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #phone svg",
          //   1920,
          //   28,
          //   1496,
          //   26
          // );
          // this.$root.setProportionStyle(
          //   "height",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #phone svg",
          //   1920,
          //   28,
          //   1496,
          //   26
          // );
        } else {
        
       
          // this.$root.setProportionStyle(
          //   "width",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #phone svg",
          //   1496,
          //   26,
          //   1100,
          //   21
          // );
          // this.$root.setProportionStyle(
          //   "height",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #phone svg",
          //   1496,
          //   26,
          //   1100,
          //   21
          // );
          // this.$root.setProportionStyle(
          //   "width",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #search svg",
          //   1496,
          //   26,
          //   1024,
          //   20
          // );
          // this.$root.setProportionStyle(
          //   "height",
          //   "px",
          //   "#homeSection #homeLeader #headerContent #buttons #search svg",
          //   1496,
          //   26,
          //   1024,
          //   20
          // );
        }
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #homeLeader #headerContent #navBarMenu ul li a",
          1496,
          16,
          1024,
          11
        );
        // this.$root.setProportionStyle(
        //   "padding-top",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #ambassadorButton",
        //   1496,
        //   15,
        //   1024,
        //   10
        // );
        // this.$root.setProportionStyle(
        //   "padding-bottom",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #ambassadorButton",
        //   1496,
        //   15,
        //   1024,
        //   10
        // );
        // this.$root.setProportionStyle(
        //   "padding-left",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #ambassadorButton",
        //   1496,
        //   20,
        //   1024,
        //   10
        // );
        // this.$root.setProportionStyle(
        //   "padding-right",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #ambassadorButton",
        //   1496,
        //   20,
        //   1024,
        //   10
        // );
        // this.$root.setProportionStyle(
        //   "font-size",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #ambassadorButton span",
        //   1496,
        //   16,
        //   1024,
        //   11
        // );
        // this.$root.setProportionStyle(
        //   "width",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #ambassadorButton svg",
        //   1496,
        //   31,
        //   1024,
        //   15
        // );
        // this.$root.setProportionStyle(
        //   "width",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #phone",
        //   1496,
        //   60,
        //   1024,
        //   50
        // );
        // this.$root.setProportionStyle(
        //   "height",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #phone",
        //   1496,
        //   60,
        //   1024,
        //   50
        // );

        
        // this.$root.setProportionStyle(
        //   "width",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #search",
        //   1496,
        //   60,
        //   1024,
        //   50
        // );
        // this.$root.setProportionStyle(
        //   "height",
        //   "px",
        //   "#homeSection #homeLeader #headerContent #buttons #search",
        //   1496,
        //   60,
        //   1024,
        //   50
        // );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#homeSection #homeLeader #headerContent .mainLogo",
          1920,
          100,
          1495,
          85
        );
      } else {
        this.$root.setProportionStyle(
          "width",
          "%",
          "#homeSection #homeLeader #headerContent .mainLogo ",
          768,
          9,
          425,
          12
        );
      }
    }
  }
};
</script>
<style>
#homeSection {
  background-color: #ededed;
}
</style>
