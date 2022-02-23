<template>
  <div v-if="catalogueData" id="catalogueSection" class="width100">
    <introduction
      class="width80 margin-auto"
      :title="
        $cookie.get('ltrTheme')
          ? 'Get catalogs'
          : 'دریــــافت کاتالــــوگ هــــا'
      "
      :summary="catalogueData.catalogueIntro.title"
      :image="$root.baseImageUrl+catalogueData.catalogueIntro.image"
      :routes="routes"
    >
      <p
        data-aos-duration="1500"
        data-aos-once="true"
        data-aos="zoom-in"
        class="slotElements"
      >
        {{ catalogueData.catalogueIntro.text }}
      </p>
    </introduction>
    <div
      id="catalogues"
      class="width70 margin-auto d-flex justify-content-between"
    >
      <catalogue
        :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="500"
        v-for="(catalogue, index) in catalogueData.catalogueFiles"
        :key="index"
        :catalogue="catalogue"
      >
        <img :src="$root.baseImageUrl+catalogue.image" :alt="catalogue.title" />
      </catalogue>
    </div>
  </div>
  <loader v-else />
</template>
<script>
import catalogue from "@/components/front/catalogue/cart.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from '@/components/front/shared/loader.vue';
export default {
  components: {
    introduction,
    catalogue,Loader
  },
  data() {
    return {
      catalogues: [
        {
          title: "گــــــزارش تفسیــــــری مدیریــــــت",
          summary: "توسط واحد مالی و اداری مارگارین",
          date: "فروردین ماه 1400",
          file: "https://s4.uupload.ir/files/layer_2709asds_52lf.png",
          image: "https://s4.uupload.ir/files/layer_2707asd_gh3.png"
        },
        {
          title: "گــــــزارش تفسیــــــری مدیریــــــت",
          summary: "توسط واحد مالی و اداری مارگارین",
          date: "فروردین ماه 1400",
          file: "https://s4.uupload.ir/files/layer_2709asds_52lf.png",
          image: "https://s4.uupload.ir/files/layer_2709asds_52lf.png"
        },
        {
          title: "گــــــزارش تفسیــــــری مدیریــــــت",
          summary: "توسط واحد مالی و اداری مارگارین",
          date: "فروردین ماه 1400",
          file: "https://s4.uupload.ir/files/layer_2709asds_52lf.png",
          image: "https://s4.uupload.ir/files/layer_2707asd_gh3.png"
        },
        {
          title: "گــــــزارش تفسیــــــری مدیریــــــت",
          summary: "توسط واحد مالی و اداری مارگارین",
          date: "فروردین ماه 1400",
          file: "https://s4.uupload.ir/files/layer_2709asds_52lf.png",
          image: "https://s4.uupload.ir/files/layer_2709asds_52lf.png"
        }
      ],

      routes: [
        { route: "", routeTitle_fa: "کاتالوگ", routeTitle_en: "Catalogue" }
      ],

      description:
        "مارگارين اولين شركت توليد كننده روغن گياهي در ايران است كه با برندهای خروس، آفتاب و آفتاب طلايي  در بين مردم شناخته شده است. اين شركت كه در دی ماه سال 1332 با ظرفیت تصفيه 8 تن روغن گياهي در روز پا به عرصه صنعت گذاشت و اکنون با همكاري كارشناسان مجرب توانسته است با ظرفیت توليدي 1000 تن در روز، میهمان بسیاری ازخانواده ها و صنایع مختلف کشور باشد. اين مجموعه همواره سعي می نماید محصولاتی با کیفیت برتر و منطبق با نیاز مشتریان طراحی و تولید نماید ."
    };
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "Catalogue - margarin"
        : "مارگارین -کاتالوگ ها",
      meta: [
        {
          name: "description",
          content: this.description ? this.description : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "Catalogue - margarin"
            : "مارگارین -درباره ما"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  mounted() {
    if (this.catalogueData == null) {
      this.$store.dispatch("getCatalogueDataFromServer");
    } else {
      this.setStyle();
    }
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  watch: {
    catalogueData() {
      this.setStyle();
    }
  },
  computed: {
    catalogueData() {
      return this.$store.getters.getCatalogueData;
    }
  },
  methods: {
    setStyle() {
      if (window.innerWidth > 1000) {
        if (window.innerWidth > 1495) {
          this.$root.setProportionStyle(
            "font-size",
            "px",
            ".catalogue .content h3",
            1920,
            18,
            1495,
            13
          );
          this.$root.setProportionStyle(
            "margin-top",
            "%",
            "#catalogueSection .slotElements",
            1920,
            23,
            1495,
            21
          );
          this.$root.unsetInlineStyle("padding", ".catalogue .download a");
          this.$root.unsetInlineStyle("padding-top", ".catalogue .content");
        } else {
          this.$root.setProportionStyle(
            "padding",
            "px",
            ".catalogue .download a",
            1495,
            15,
            1100,
            10
          );
          this.$root.setProportionStyle(
            "padding-top",
            "%",
            ".catalogue .content",
            1495,
            15,
            1100,
            20
          );
          this.$root.unsetInlineStyle(
            "margin-top",
            "#catalogueSection .slotElements"
          );
          this.$root.unsetInlineStyle("font-size", ".catalogue .content h3");
          this.$root.unsetInlineStyle(
            "top",
            "#catalogueSection #introductionSection #backgroundOrange"
          );
        }
      } else {
        this.$root.unsetInlineStyle(
          "margin-top",
          "#catalogueSection .slotElements"
        );
        this.$root.unsetInlineStyle("padding-top", ".catalogue .content");
        this.$root.unsetInlineStyle("font-size", ".catalogue .content h3");
        this.$root.setProportionStyle(
          "top",
          "%",
          "#catalogueSection #introductionSection #backgroundOrange",
          999,
          5,
          375,
          10
        );

        this.$root.unsetInlineStyle("padding", ".catalogue .download a");
      }
    }
  }
};
</script>
Introduction
