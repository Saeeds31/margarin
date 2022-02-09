<template>
  <div v-if="homeData != null" id="homeSection">
    <div
      v-if="homeData.sliders.length > 0"
      id="sliderSection"
      class="d-flex width100 height100vh"
    >
      <div
        id="wall"
        class="width5 d-flex flex-direction-column justify-content-end hiddenInMobile"
      >
        <p>
          شــــــــــرکت مارگاریــــــــــن ( سهامــــــــــی عــــــــــام )
        </p>
        <div id="shadowWhite">
          <span></span>
        </div>
      </div>
      <slider :slider="homeData.sliders" class="width95 height100" />
    </div>
    <aboutUs data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />
    <selectedProduct
      v-if="homeData.products.length > 0"
      :products="homeData.products"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    />
    <weeklyCooking
      v-if="homeData.recipes.length > 0"
      :cookings="homeData.recipes"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    />
    <news
      v-if="multiSlider.length>0&&singleSlider.length>0"
      :singleSliderList="singleSlider"
      :multiSliderList="multiSlider"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    />
    <articles
    v-if="homeData.articles.length>0"
    :articles="homeData.articles"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    />
    <certificates
    :prizes="homeData.prizes"
    v-if="homeData.prizes.length>0"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    />
  </div>
  <Loader v-else />
</template>
<script>
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
    slider,
    aboutUs,
    selectedProduct,
    weeklyCooking,
    news,
    articles,
    certificates
  },
  created() {
    if (this.homeData == null) {
      this.$store.dispatch("getHomeDataFromServer");
    }
  },
  data(){
    return{
      singleSlider:[],
      multiSlider:[]
    }
  },
     metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme") ? "Home - Margarin" : "مارگارین - صفحه اصلی",
      meta: [
        {
          name: "description",
          content: this.blogData ? this.blogData.meta : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme") ? "Home - Margarin" : "مارگارین - صفحه اصلی"
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
        let counter = Math.floor(newVal.news.length/3);
        for (let index = 0; index < counter; index++) {
          this.singleSlider.push(newVal.news[index])
          
        }
        for (let index2 = counter; index2 < newVal.news.length; index2++) {
                    this.multiSlider.push(newVal.news[index2])

          
        }
      } else {
        this.singleSlider = newVal.news;
        this.multiSlider = newVal.news;
      }
    }
  },
  computed: {
    homeData() {
      return this.$store.getters.getHomeData;
    }
  }
};
</script>
<style>
#homeSection {
  background-color: #ededed;
}
</style>
