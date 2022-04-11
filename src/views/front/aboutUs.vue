<template>
  <main v-if="aboutUsData" class="width100 margin-auto" id="aboutSection">
    <introduction
      class="width80 margin-auto"
      :title="
        $cookie.get('ltrTheme') ? 'About Margarin ' : 'دربــــاره  مارگاریــــن'
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
    <section id="managementIntro">
      <img id="chartImage" v-img :src="managementChart" alt="چارت سازمانی" />
      <a @click="showChartImage()">
        <span>
          {{
            $cookie.get("ltrTheme")
              ? "Margarine Company Chart"
              : "چارت سازمانی شرکت مارگارین"
          }}
        </span>
        <svg
          class="when-closed"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g
            id="Group_1asdasdas"
            data-name="Group 1asdasdas"
            transform="translate(-1474 -4489)"
          >
            <g
              id="Rounded_Rectangle_38_copy"
              data-name="Rounded Rectangle 38 copy"
              transform="translate(1474 4489)"
              fill="#f1f1f1"
              stroke="#f1f1f1"
              stroke-width="2"
            >
              <rect width="30" height="30" rx="10" stroke="none" />
              <rect x="1" y="1" width="28" height="28" rx="9" fill="none" />
            </g>
            <image
              id="_copy"
              data-name="+ copy"
              width="10"
              height="10"
              transform="translate(1484 4499)"
              opacity="0.4"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAADJJREFUGFdj/P//PwMyYGRkvAvkKwGxK1BuD0yOcQAVAt2A6kgUFyM4jEQrHEDPEGs1AHb1QfFEtg0xAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </a>
      <router-link to="manager?manager=0">
        <span>{{
          $cookie.get("ltrTheme")
            ? "Margarine Company Board Members"
            : "اعضای هیئت مدیره شرکت مارگارین"
        }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g
            id="Group_1asdasdas"
            data-name="Group 1asdasdas"
            transform="translate(-1474 -4489)"
          >
            <g
              id="Rounded_Rectangle_38_copy"
              data-name="Rounded Rectangle 38 copy"
              transform="translate(1474 4489)"
              fill="#f1f1f1"
              stroke="#f1f1f1"
              stroke-width="2"
            >
              <rect width="30" height="30" rx="10" stroke="none" />
              <rect x="1" y="1" width="28" height="28" rx="9" fill="none" />
            </g>
            <image
              id="_copy"
              data-name="+ copy"
              width="10"
              height="10"
              transform="translate(1484 4499)"
              opacity="0.4"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAADJJREFUGFdj/P//PwMyYGRkvAvkKwGxK1BuD0yOcQAVAt2A6kgUFyM4jEQrHEDPEGs1AHb1QfFEtg0xAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </router-link>

      <router-link to="manager?manager=1">
        <span>
          {{
            $cookie.get("ltrTheme")
              ? "Managing Director and Vice President of Margarine Company"
              : "مدیرعامل و معاونین شرکت مارگارین"
          }}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g
            id="Group_1asdasdas"
            data-name="Group 1asdasdas"
            transform="translate(-1474 -4489)"
          >
            <g
              id="Rounded_Rectangle_38_copy"
              data-name="Rounded Rectangle 38 copy"
              transform="translate(1474 4489)"
              fill="#f1f1f1"
              stroke="#f1f1f1"
              stroke-width="2"
            >
              <rect width="30" height="30" rx="10" stroke="none" />
              <rect x="1" y="1" width="28" height="28" rx="9" fill="none" />
            </g>
            <image
              id="_copy"
              data-name="+ copy"
              width="10"
              height="10"
              transform="translate(1484 4499)"
              opacity="0.4"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAADJJREFUGFdj/P//PwMyYGRkvAvkKwGxK1BuD0yOcQAVAt2A6kgUFyM4jEQrHEDPEGs1AHb1QfFEtg0xAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </router-link>
    </section>
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
  </main>
  <loader v-else />
</template>
<script>
import chartImage from "@/assets/front/images/chartImage.jpg";
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
      title: this.$cookie.get("ltrTheme")
        ? "about-us - margarin"
        : "مارگارین -درباره ما",
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
    racemeItems() {
      return this.$store.getters.getRacemeItems;
    },
    collapseList() {
      return this.$store.getters.getAboutUsCollapseList;
    }
  },
  created() {
    if (this.aboutUsData == null) {
      // this.$store.dispatch("getAboutUsFromServer");
      this.checkRequest('getAboutUsFromServer',JSON.stringify(null));

    }
  },
  watch: {
    aboutUsData(newValue) {
      let racemeItems = [
        {
          number: newValue.aboutUs.fund,
          title_en: "Billion tomans of capital",
          title_fa: "میلیارد تومان سرمایه"
        },
        {
          number: newValue.aboutUs.brand,
          title_en: "Specialized brand",
          title_fa: "برند تخصصی"
        },
        {
          number: newValue.aboutUs.products,
          title_en: "Product produced",
          title_fa: "محصول تولید شده"
        },
        {
          number: newValue.aboutUs.personel,
          title_en: "Factory personnel",
          title_fa: "نفر پرسنل کارخانه"
        }
      ];
      this.$store.commit("setRacemeItems", racemeItems);
      let collapse = [
        {
          id: 1,
          image: newValue.aboutUs.exteraTitle1Icon,
          question: newValue.aboutUs.exteraTitle1,
          answer: newValue.aboutUs.exteraText1
        },

        {
          id: 2,
          image: newValue.aboutUs.exteraTitle2Icon,
          question: newValue.aboutUs.exteraTitle2,
          answer: newValue.aboutUs.exteraText2
        },

        {
          id: 3,
          image: newValue.aboutUs.exteraTitle3Icon,
          question: newValue.aboutUs.exteraTitle3,
          answer: newValue.aboutUs.exteraText3
        },

        {
          id: 4,
          image: newValue.aboutUs.exteraTitle4Icon,
          question: newValue.aboutUs.exteraTitle4,
          answer: newValue.aboutUs.exteraText4
        }
      ];
      this.$store.commit("setAboutUSCollapseList", collapse);
    }
  },
  data() {
    return {
      managementChart: chartImage,
      routes: [
        { route: "", routeTitle_fa: "درباره ما", routeTitle_en: "about us" }
      ]
    };
  },
  mounted() {
    if (this.$route.query.section) {
      setTimeout(() => {
        document
          .getElementById(this.$route.query.section)
          .scrollIntoView({ behavior: "smooth" });
      }, 2000);
    }
    if (this.$route.query.sectionId) {
      setTimeout(() => {
        document
          .getElementById("accordion" + this.$route.query.sectionId)
          .click();
      }, 2200);
    }
  },
  methods: {
    showChartImage() {
      document.getElementById("chartImage").click();
    }
  }
};
</script>
<style>
img#chartImage {
  width: 0px;
  height: 0px;
}
section#managementIntro {
  width: 80%;
  margin: 15px auto;
  border: 4px solid #00000006;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
section#managementIntro a span {
    margin: 0 10px;
    font-size: 18px;
    font-family: 'yekan-bold';
    text-align:right;
}
section#managementIntro a {
    margin: 10px;
    cursor: pointer;
    display:flex;
}
</style>
