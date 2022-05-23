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
        id="aboutMargarin"
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
      :chartImage="$root.baseImageUrl + aboutUsData.aboutUs.staticImage"
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
    <div id="margarinIntro">
      <div class="backAbout" id="mission">
        <div class="imageBox">
          <img
            class="margarinIntro_image"
            src="@/assets/front/images/vision.png"
            alt="ماموریت ما"
          />
        </div>
        <div class="descriptionSec">
          <h3>
            {{ this.$cookie.get("ltrTheme") ? "Mission" : "ماموریت  ما" }}
          </h3>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            مارگارین با نگاه به تاریخ درخشان خود، به عنوان اولین شرکت تولید روغن
            خوراکی و تکیه بر دانش فنی، مهارت و تخصص کارکنان و زیرساخت و تجهیزات
            مناسب و نیز تعهد همه جانبه به سلامت مشتریان و انجام مسئولیت های
            اجتماعی، تولید محصولات غذایی متنوع و با کیفیت بر مبنای انتظارات
            مشتریان را در کنار ایجاد ارزش و ثروت برای سایر ذینفعان ماموریت اصلی
            خود می داند.
          </p>
        </div>
      </div>

      <div class="backAbout" id="vision">
        <div class="imageBox">
          <img
            class="margarinIntro_image"
            src="@/assets/front/images/jobs.png"
            alt="ماموریت ما"
          />
        </div>
        <div class="descriptionSec">
          <h3>
            {{ this.$cookie.get("ltrTheme") ? "vision" : "چشم انداز ها" }}
          </h3>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <i class="fa fa-check"></i>کسب جايگاه اول در تنوع توليد <br />
            <i class="fa fa-check"></i> تبدیل شدن به اولین انتخاب مشتریان در
            محصولات تخصصي حوزه صنف و صنعت <br />
            <i class="fa fa-check"></i> حضور در پنج شرکت برتر حوزه محصولات
            خانوار با تکیه بر تولید محصولات سلامت محور و با کیفیت <br />
            <i class="fa fa-check"></i> ایجاد حداکثر سود برای سهامداران
          </p>
        </div>
      </div>
    </div>
    <section>
      <h3 id="margarinValuesTitle">ارزش های مارگارین</h3>

      <arzesh />
    </section>
    <awards
      :prizes="aboutUsData.prizes"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1500"
      data-aos-once="true"
    />
    <div
      v-if="racemeItems"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-once="true"
      id="racemeSection"
      class="width80 margin-auto margin-tb-20 d-flex justify-content-between"
    >
      <raceme v-for="(item, index) in racemeItems" :key="index" :data="item" />
    </div>
  </main>
  <loader v-else />
</template>
<script>
import arzesh from "@/components/front/aboutUs/arzesh.vue";
import raceme from "@/components/front/aboutUs/statistics/raceme.vue";
import fourItem from "@/components/front/aboutUs/fourItem.vue";
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
    fourItem,
    arzesh,
    introduction,
    slider,
    raceme,
    videoBox,
    statistics,
    awards,
    collapseBox,
    Loader,
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "about-us - margarin"
        : "مارگارین -درباره ما",
      meta: [
        {
          name: "description",
          content: this.aboutUsData ? this.aboutUsData.aboutUs.meta : false,
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme") ? "about-us" : "درباره ما",
        },
        { name: "robots", content: "index,follow" },
      ],
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
    },
  },
  created() {
    if (this.aboutUsData == null) {
      // this.$store.dispatch("getAboutUsFromServer");
      this.checkRequest("getAboutUsFromServer", JSON.stringify(null));
    }
  },
  watch: {
    $route: {
      handler() {
        if (this.$route.query.section) {
          this.gotoSection();
        }
      },
      immediate: true,
    },
    aboutUsData(newValue) {
      let racemeItems = [
        {
          number: newValue.aboutUs.brand,
          title_en: "Specialized brand",
          title_fa: "تنوع محصول",
        },
        {
          number: newValue.aboutUs.products,
          title_en: "Product produced",
          title_fa: "محصول تولید شده",
        },
        {
          number: newValue.aboutUs.personel,
          title_en: "Factory personnel",
          title_fa: "نفر پرسنل کارخانه",
        },
      ];
      this.$store.commit("setRacemeItems", racemeItems);
      let collapse = [
        // {
        //   id: 1,
        //   image: newValue.aboutUs.exteraTitle1Icon,
        //   question: newValue.aboutUs.exteraTitle1,
        //   answer: newValue.aboutUs.exteraText1
        // },

        {
          id: 2,
          cover: cover1,
          image: newValue.aboutUs.exteraTitle2Icon,
          question: newValue.aboutUs.exteraTitle2,
          answer: newValue.aboutUs.exteraText2,
        },

        {
          cover: cover2,
          id: 3,
          image: newValue.aboutUs.exteraTitle3Icon,
          question: newValue.aboutUs.exteraTitle3,
          answer: newValue.aboutUs.exteraText3,
        },

        {
          cover: cover3,
          id: 4,
          image: newValue.aboutUs.exteraTitle4Icon,
          question: newValue.aboutUs.exteraTitle4,
          answer: newValue.aboutUs.exteraText4,
        },
      ];
      this.$store.commit("setAboutUSCollapseList", collapse);
    },
  },
  data() {
    return {
      setTimeOutGoto: null,
      managementChart: chartImage,
      routes: [
        { route: "", routeTitle_fa: "درباره ما", routeTitle_en: "about us" },
      ],
    };
  },
  mounted() {
    if (this.$route.query.sectionId) {
      setTimeout(() => {
        document
          .getElementById("accordion" + this.$route.query.sectionId)
          .click();
      }, 2200);
    }
  },
  beforeDestroy() {
    clearTimeout(this.setTimeOutGoto);
  },
  methods: {
    gotoSection() {
      let el = document.getElementById(this.$route.query.section);
      if (el == null) {
        this.setTimeOutGoto = setTimeout(() => {
          this.gotoSection();
        }, 1000);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    unfocusSec(id) {
      let el = document.getElementById(id);
      el.style.backgroundColor = "white";
    },
    focusSec(id, color) {
      let el = document.getElementById(id);
      el.style.backgroundColor = "#" + color;
      if (this.$root.screenSize < 1000) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    showChartImage() {
      document.getElementById("chartImage").click();
    },
  },
};
</script>
<style>
img#chartImage {
  width: 0px;
  height: 0px;
}
section#managementIntro {
  width: 80%;
  margin: 7% auto;
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
  font-family: "yekan-bold";
  text-align: right;
}
section#managementIntro a {
  margin: 10px;
  cursor: pointer;
  display: flex;
}
.margin-tb-20 {
  margin-top: 20px;
  margin-bottom: 20px;
}
div#margarinIntro {
  width: 90%;
  margin: auto;
}
div#margarinIntro h3 {
  text-align: right;
  font-weight: bold;
  margin-bottom: 50px;
}
.ltrTheme div#margarinIntro h3 {
  text-align: left;
  font-weight: bold;
  margin-bottom: 50px;
}
div#margarinIntro .descriptionSec {
  position: relative;
}
div#margarinIntro .descriptionSec .margarinIntro_image {
  width: 100%;
}

div#margarinIntro .descriptionSec p {
  direction: rtl;
  text-align: justify;
  width: 80%;
  font-size: 25px;
  z-index: 10;
  opacity: 0.6;
  font-family: "yekan-bold";
  white-space: break-spaces;
}

.ltrTheme div#margarinIntro .descriptionSec p {
  direction: ltr;
  text-align: left;
}
@media (max-width: 768px) {
  div#margarinIntro .descriptionSec p {
    text-align: center;
    width: 70%;
    top: 10%;
    right: 15%;
    position: relative;
    top: unset;
    right: unset;
    margin: auto;
  }
  div#margarinIntro .descriptionSec {
    padding: 50px 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  div#margarinIntro h3 {
    margin-top: 50px;
  }
}
div#margarinValues {
  width: 90%;
  margin: 50px auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  height: auto;
}
div#margin_values_circle {
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  left: 50%;
  transform: translate(-50%);
  justify-content: center;
  align-items: center;
}
.margarin_values_desc {
  padding: 10px 15px;
  border: 1px solid grey;
  border-radius: 15px;
  direction: rtl;
  text-align: right;
  line-height: 36px;
  font-size: 22px;
  min-height: 170px;
  height: max-content;
  font-weight: bold;
}
.backAbout {
  background-image: url("../../assets/front/images/aboutUsBackgroundSlider.png");
  background-size: 50% auto;
  background-repeat: no-repeat;
  background-position: right;
}

.backAbout#mission {
  background-image: url("../../assets/front/images/backMission.png");
  background-size: 50% 90%;
}
.backAbout#vision {
  background-image: url("../../assets/front/images/backVision.png");
  background-size: 50% 90%;
}
.margarin_values_desc:nth-child(odd) {
  text-align: justify;
  padding-right: 30%;
}
#margarinValues_customer {
  border: 4px solid #36ff54;
}
#margarinValues_social {
  border: 4px solid #64f2ff;
}
#margarinValues_other {
  border: 4px solid #feff5c;
}
#margarinValues_staff {
  border: 4px solid #ff7f7e;
}
div#margin_values_circle div {
  width: 50%;
  display: flex;
  height: 50%;
}
div#margin_values_circle div img {
  width: 40%;
}
div#margin_values_circle div:nth-child(odd) {
  justify-content: flex-end;
}
#mission,
#vision {
  height: 100vh;
}
@media (max-width: 1000px) {
  #mission,
  #vision {
    height: auto;
  }
  div#margin_values_circle {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    order: -1;
  }
  div#margarinValues {
    grid-template-columns: 1fr;
  }
  .margarin_values_desc:nth-child(odd) {
    text-align: right;
    padding-right: 15px;
  }
  div#margin_values_circle div img {
    width: 60%;
  }
}
.backAbout {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.backAbout .descriptionSec {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}
.backAbout .imageBox {
  margin-right: 15%;
  background: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 10px #00000014;
}
.backAbout#mission .imageBox {
  width: 40%;
}
.backAbout#vision .imageBox {
  width: 40%;
}
.backAbout .imageBox img {
  width: 100%;
  border-radius: 15px;
  background: #f0f0f0;
}
@media (max-width: 1000px) {
  .backAbout,
  .backAbout#mission,
  .backAbout#vision {
    background: unset;
    flex-direction: column;
    background-position: top;
  }
  .backAbout .descriptionSec {
    width: 100%;
  }
  .backAbout .imageBox,
  .backAbout#vision .imageBox,
  .backAbout#mission .imageBox {
    margin-right: unset;
    width: 80%;
  }
}
h3#margarinValuesTitle {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 36px;
  font-family: "yekan-bold";
  position: relative;
  top: 50px;
}
@media (max-width:580px){
  h3#margarinValuesTitle{
    top: -20px;
  }
}
</style>
