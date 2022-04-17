<template>
  <section id="articles" class="width100">
    <sectionHeader :data="articleHeader" >
      <svg
            id="articleSvg"
            enable-background="new 0 0 510 510"
            height="45"
            viewBox="0 0 510 510"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="XMLID_3990_">
              <path id="XMLID_3994_" d="m90 90h390v60h-390z" />
              <path
                id="XMLID_4088_"
                d="m90 180v255 15c0 10.876-2.871 21.135-7.965 30h338.965c49.075 0 89-39.925 89-89v-211c-37.127 0-324.82 0-420 0zm225 195h-165v-150h165zm135 0h-105v-30h105zm0-60h-105v-30h105zm0-60h-105v-30h105z"
              />
              <path id="XMLID_4092_" d="m180 255h105v90h-105z" />
              <path
                id="XMLID_4093_"
                d="m157.5 30c-19.246 0-60.584 0-97.5 0-24.563 0-47.168 0-60 0v405 15c0 16.568 13.432 30 30 30 2.318 0 4.572-.272 6.74-.77 13.322-3.06 23.26-14.98 23.26-29.23v-390h120z"
              />
            </g>
          </svg>
    </sectionHeader>
    <div id="sliderSection" class="width80 margin-auto hiddenInMobile" v-if="showSlider">
      <VueSlickCarousel
        :autoplay="mobileSize==true?true:false"
       v-bind="sliderSettings"
      >
        <div
          v-for="i in articleLength"
          :key="'a'+i*10"
          class="sliderItem"
        >
          <div class="firstRow d-flex justify-content-between width100">
            <smallCart :article="articles[4 * i - 4]" :key="'b'+i*544" />
            <wideCart
              :showComment="true"
              class="width60"
              :article="articles[4 * i - 3]"
              :key="'c'+i*500"
            />
          </div>
          <div class="secondRow d-flex justify-content-between width100">
            <wideCart
              :showComment="true"
              class="width60"
              :article="articles[4 * i - 2]"
              :key="'d'+i*100"
            />
            <smallCart :article="articles[4 * i - 1]" :key="'e'+i*528" />
          </div>
        </div>
        
      </VueSlickCarousel>
    </div>
        <div id="sliderSection" class="width80 margin-auto showInMobile" v-if="showSlider">
      <VueSlickCarousel
      >
     
        <div
          v-for="(item,index) in articles"
          :key="'hj'+index"
          class="sliderItem"
        >
            <wideCart
              :showComment="false"
              class="width60"
              :article="item"
              :key="index"
            />
        </div>
      </VueSlickCarousel>
    </div>
    <footerLinker :data="articleHeader" />
  </section>
</template>
<script>
import footerLinker from "@/components/front/shared/footerLink.vue";
import VueSlickCarousel from "vue-slick-carousel";
import sectionHeader from "@/components/front/shared/sectionHeader.vue";
import wideCart from "@/components/front/blogs/weblogCart.vue";
import smallCart from "@/components/front/home/articles/smallCart.vue";
export default {
  components: {
    sectionHeader,
    smallCart,
    footerLinker,
    wideCart,
    VueSlickCarousel
  },
  props:{
    articles:Array
  },
  data() {
    return {
       sliderSettings: {
        dots: false,
        arrows: true,
        infinite: false ,
        slidesToShow: 1,
       
        slidesToScroll: 1,
        speed: 2000,
      },
      mobileSize:false,
      articleLength: 0,
      showSlider: false,
      articleHeader: {
        route: "/weblogs?page=1&search=&category=&type=2",
        routeTitle:this.$cookie.get('ltrTheme')?"View article archive": "مشاهده آرشیو مقالات",
        title:this.$cookie.get('ltrTheme')?"Margarine  Articles": "مقــــــالات  مارگاریــــــن",
        summary:this.$cookie.get('ltrTheme')?"Always be up to date with us": "بـــا مـــا همیشـــه بـــروز باشیـــد",
        image: true
      },
      // articles: [
      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",
      //     title: "31 خاصیت منحصر‌به‌فرد چای سیاه برای سلامتی بدن، پوست و مو",
      //     date: "26 مرداد ماه 1400",
      //     comment: "45"
      //   },
      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "درمان کبد چرب؛ رژیم غذایی مناسب و روش‌های خانگی اثربخش",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "25 میان‌وعده‌ی خوشمزه که کمتر از 100 کیلوکالری انرژی دارند",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "آشپزی بدون پسماند چیست و چطور انجام می‌شود؟",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",
      //     title: "31 خاصیت منحصر‌به‌فرد چای سیاه برای سلامتی بدن، پوست و مو",
      //     date: "26 مرداد ماه 1400",
      //     comment: "45"
      //   },
      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "درمان کبد چرب؛ رژیم غذایی مناسب و روش‌های خانگی اثربخش",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "25 میان‌وعده‌ی خوشمزه که کمتر از 100 کیلوکالری انرژی دارند",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "آشپزی بدون پسماند چیست و چطور انجام می‌شود؟",

      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   }
      // ]
    };
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    setStyle() {
      if (window.innerWidth> 1000) {
        if(window.innerWidth>1495){
this.$root.setProportionStyle(
          "right",
          "%",
          "#sliderSection .slick-next",
          1920,
          76,
          1496,
          70
        );
        }else{
this.$root.setProportionStyle(
          "right",
          "%",
          "#sliderSection .slick-next",
          1496,
          70,
          1024,
          60
        );
        }
        this.mobileSize=false;
        // #sliderSection .slick-prev, #sliderSection .slick-next
        this.$root.setProportionStyle(
          "width",
          "px",
          "#sliderSection .slick-prev",
          1496,
          50,
          1024,
          45
        );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#sliderSection .slick-next",
          1496,
          50,
          1024,
          45
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#sliderSection .slick-prev",
          1496,
          50,
          1024,
          45
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#sliderSection .slick-next",
          1496,
          50,
          1024,
          45
        );
       
        this.$root.setProportionStyle(
          "top",
          "%",
          "#sliderSection .slick-next",
          1496,
          -9,
          1024,
          -11
        );
        
        //
       
        // ,
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #articles #sliderSection .sliderItem .smallCart .innerContent .content h1",
          1496,
          20,
          1024,
          14
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #articles #sliderSection .sliderItem .wideCart .innerContent .content h1",
          1496,
          20,
          1024,
          14
        );
      }else{
        this.mobileSize=true;
  this.$root.setProportionStyle(
          "font-size",
          "px",
          "#articles #sectionHeader #text div h1",
          1000,
          32,
          375,
          16
        );
      }
    }
  },
  mounted() {
    this.articleLength = Math.floor(this.articles.length / 4);
    this.showSlider = true;
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  }
};
</script>
<style>
.firstRow {
  margin-bottom: 1%;
}

#sliderSection .slick-prev:before,
#sliderSection .slick-next:before {
  opacity: 1;
}

#sliderSection .slick-prev,
#sliderSection .slick-next {
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  box-shadow: 0 0 18px #00000059;
  cursor: pointer;
  z-index: 100;
}
#sliderSection .slick-prev{
  left: -70px;
}
#sliderSection .slick-prev:before,
#sliderSection .slick-next{
  right:-70px
}
#sliderSection .slick-next:before {
  color: black;
  font-size: 15px;
}
#sliderSection .slick-prev:before {
  content: url("../../../assets/front/images/leftArrowHomeSlider.svg");
}
#sliderSection .slick-next:before {
  content: url("../../../assets/front/images/RightArrowHomeSlider.svg");
}
#sliderSection .slick-disabled {
  border: 5px solid #ebebeb;
  box-shadow: none;
}
</style>
