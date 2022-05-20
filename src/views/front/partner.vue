<template>
  <main v-if="blogsData != null" id="blogsSection" class="width80 margin-auto">
    <introduction
      :title="getTitle()"
      :summary="blogsData.data.intro.title"
      :image="$root.baseImageUrl + blogsData.data.intro.image"
      :routes="routes"
    >
      <p class="slotElements">
        {{ blogsData.data.intro.text }}
      </p>
      <rounded-button
              :type="'link'"
          :link="blogsData.data.intro.panelLink"
          :title='$cookie.get("ltrTheme")?"View legal receipts":"مشاهده فیش حقوقی"'
      >
      </rounded-button>
   
    </introduction>
    
    <section
      id="weblogsList"
      class="width100 d-flex f-wrap justify-content-between"
    >
    <VueSlickCarousel v-bind="sliderSettings">

      <cart :route="'/report-detail'" v-for="blog in blogsData.data.news" :blog="blog" :key="blog.id" />
      </VueSlickCarousel>
     
    </section>
   
  </main>
  <loader v-else />
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel"
import cart from "@/components/front/home/weblogs/multiSlider/cart.vue"

import pagination from "@/components/front/shared/pagination.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
import RoundedButton from '@/components/front/shared/roundedButton.vue';
export default {
  components: {RoundedButton,
    Loader,
    introduction,
        cart,VueSlickCarousel,
    pagination
  },
  data() {
    return {
sliderSettings:{
           "dots": false,
           arrows: true,
  "focusOnSelect": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "touchThreshold": 5,
  "responsive": [
    {
      "breakpoint": 1400,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 2,
      }
    },
    
    {
      "breakpoint": 800,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
      }
    },
  ]
      },
      routes: [{ route: "", routeTitle_fa: "گزارشات", routeTitle_en: "reportage" }]
    };
  },
  watch: {
    blogsData() {
      setTimeout(() => {
        this.setStyle();
      }, 500);
    },
    "$route.query": {
      handler(value) {
        if (Object.keys(value).length == 0) return;
        let pack = {
          page: value.page ? value.page : 1,
        };
          // this.$store.dispatch("getPartnerFromServer", pack);
      this.checkRequest('getPartnerFromServer',JSON.stringify(pack));

      },
      deep: true,
      immediate: true
    }
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "reportage-margarin"
        : "مارگارین - گزارشات",
      meta: [
        {
          name: "description",
          content: this.blogsData ? this.blogsData.data.intro.text : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "reportage-margarin"
            : "مارگارین - گزارشات"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    blogsData() {
      return this.$store.getters.getPartnerPanelData;
    }
  },
  mounted() {
    if (this.blogsData == null) {
      let pack = {
        page: this.$route.query.page ? this.$route.query.page : 1,
      };
      // this.$store.dispatch("getPartnerFromServer", pack);
      this.checkRequest('getPartnerFromServer',JSON.stringify(pack));
      
    } else {
      this.setStyle();
    }
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    getTitle() {
        if (this.$cookie.get("ltrTheme")) return "partner panel";
        else return "پنل همکاران ";
      
    },
    pageChanged(page) {
      this.$router.replace({
        name: "magazine",
        query: {
          page: page,
        }
      });

      document
        .getElementById("weblogsList")
        .scrollIntoView({ behavior: "smooth" });
    },
  
    setStyle() {
      if (window.innerWidth > 1000) {
        // this.$root.setProportionStyle(
        //   "width",
        //   "%",
        //   "#blogsSection #weblogsList .blogCart",
        //   1920,
        //   49,
        //   1496,
        //   48
        // );
        this.$root.unsetInlineStyle(
          "font-size",
          "#blogsSection #weblogsList .blogCart .innerContent .content h1"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#blogsSection #weblogsList .blogCart .innerContent .content p"
        );
      } else {
        // this.$root.setProportionStyle(
        //   "width",
        //   "%",
        //   "#blogsSection #weblogsList .blogCart",
        //   999,
        //   60,
        //   375,
        //   96
        // );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#blogsSection #weblogsList .blogCart .innerContent .content h1",
          999,
          20,
          375,
          16
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#blogsSection #weblogsList .blogCart .innerContent .content p",
          999,
          12,
          375,
          8
        );
      }
    }
  }
};
</script>
<style scoped>
#weblogsList {
margin-bottom: 210px;
}</style>
<style>
.slick-slider.slick-initialized{
width:100%;}
#weblogsList .blogCart .innerContent {
  height: 100%;
}
#weblogsList .blogCart .innerContent img {
  height: 100%;
}
#blogsSection .slotElements {
  margin-top: 23%;
}
#weblogsList  .cart {
    background: white;
    border-radius: 10px;
    padding: 10px;
    margin: 0 10px;
    width: 97% !important;
    cursor: pointer;
}
#weblogsList  .cart .content {
    background: #f8f8f8;
    border-radius: 10px;
    padding: 10px;
}
#weblogsList  .cart .content img {
    width: 96%;
    margin: auto;
    border-radius: 10px;
    height: 250px !important;
    -o-object-fit: cover;
    object-fit: cover;
}
#weblogsList  .cart .content h1 {
    color: black;
    opacity: 0.6;
    font-family: "yekan-heavy";
    font-size: 16px;
    width: 80%;
    margin: 15px;
    text-align: right;
    direction: rtl;
}
#weblogsList  .cart .content .description {
    font-family: "yekan-bold";
    font-size: 12px;
    width: 83%;
    text-align: justify;
    direction: rtl;
    padding: 10px 12px;
    opacity: 0.4;
}
#weblogsList  .cart .content .date {
    color: var(--color-theme);
    font-size: 14px;
    padding: 0 10px;
}
#weblogsList  .cart .content .date span {
    margin: 0 10px;
}
#weblogsList .slick-disabled {
    border: 5px solid #ebebeb;
    box-shadow: none;
}
#weblogsList .slick-prev, #weblogsList .slick-next {
    background: white;
    width: 60px;
    height: 60px;
    top: 50%;
    border-radius: 50px;
    box-shadow: 0 0 18px #00000059;
    cursor: pointer;
    z-index: 20;
    transform: translateY(-50%);
}
#weblogsList .slick-prev:before{
  content: url("../../assets/front/images/leftArrowHomeSlider.svg");
}
#weblogsList .slick-prev:before, #weblogsList .slick-next:before {
    color: black;
    font-size: 15px;
}
#weblogsList .slick-prev:before, #weblogsList .slick-next:before {
    opacity: 1;
}
#weblogsList .slick-next:before {
    content: url("../../assets/front/images/RightArrowHomeSlider.svg");
}a#pLink {
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    background: var(--color-theme);
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
}

#blogsSection .slotElements{
  margin-top: 30%;
  padding-top: 50px;
}
</style>
