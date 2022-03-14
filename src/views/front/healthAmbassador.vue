<template>
  <div id="healthAmbassador" class="width100">
    <mainHeader data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-once="false" />
    <shopSection  :data="healthAmbassador.shopSection" />
    <!-- <virtualTour :data="healthAmbassador.virtualTour" /> -->
    <ourProduct :data="healthAmbassador.ourProduct" />
    <goodFamily :data="healthAmbassador.goodFamily" />
    <!-- <statistics :data="healthAmbassador.statistics" /> -->
    <!-- <application :data="healthAmbassador.application" /> -->
    <div id="breaker"></div>
    <blogs v-if="homeData" :blog="homeData.articles" :data="healthAmbassador.blogs" />
    <healthFooter  class="hiddenInMobile" />
    <mainFooter  class="showInMobile" />
  </div>
</template>
<script>
import goodFamilyImage from "@/assets/front/images/goodFamily.png"

import shopImage from "@/assets/front/images/shopImage.jpeg"
import mainHeader from "@/components/front/home/slider/header.vue";
import shopSection from "@/components/front/healthAmbassador/shopSection.vue";
import virtualTour from "@/components/front/healthAmbassador/virtualTour.vue";
import ourProduct from "@/components/front/healthAmbassador/ourProduct.vue";
import goodFamily from "@/components/front/healthAmbassador/goodFamily.vue";
import statistics from "@/components/front/healthAmbassador/statistics.vue";
import application from "@/components/front/healthAmbassador/application.vue";
import blogs from "@/components/front/healthAmbassador/blogs.vue";
import mainFooter from "@/components/front/shared/footer.vue";
import healthFooter from "@/components/front/healthAmbassador/mainFooter.vue";
export default {
  components: {
    mainHeader,
    shopSection,
    virtualTour,
    ourProduct,
    goodFamily,
    statistics,
    application,
    healthFooter,
    blogs,
    mainFooter
  },
  data() {
    return {
      healthAmbassador: {
        shopSection: {
          image:shopImage,
          title: "مارگارين در محور سلامت",
          summary: "با مارگارین همیشه سالم باش !",
          text: 'از افتخارات شرکت مارگارین در حوزه خانوار , تلاش در زمینه تولید محصولات سلامت محور بوده و در این بخش موفق به دریافت "تندیس زرین از جشنواره ملی تولید سلامت محور "در بین شرکت های فعال در حوزه تولید روغن و صعنت غذا شده است '
        },
        virtualTour: {
          image: "https://s4.uupload.ir/files/layer_2661_copy_3_buj.png",
          title: "تور مجازی بازدید از خط تولید",
          summary: "کیفیت و برتری با  مارگارین"
        },
        ourProduct: {
          title: "اولین تولید کننده روغن در کشور",
          summary: "ويژگي محصولات آفتاب",
          carts: [
            {
              title: "	روغن ميتامينه آفتابگردان",
              text: "حاوي امگا 6 و 9\nغني شده با ويتامينه A   و D3"
            },
            {
              title: "	روغن ويتامينه كانولا",
              text: "حاوي امگا 6 و 9\nغني شده با ويتامينه A   و D3"
            },
            {
              title: "	روغن سرخ كردني شفاف",
              text: "بدون پالم\nغني شده با ويتامينه A   و D3"
            },
            {
              title: "	روغن سرخ كردني ويژه",
              text: "جذب كم در مواد غذايي "
            }
          ]
        },
        goodFamily: {
          image: goodFamilyImage,
          data: [
            {
              title: "با ما بهترین ها را تجربه  کنید",
              text: "خانواده، مهمترین رکن جامعه است که در ایجاد سبک زندگی سالم، نقش مهمی را ایفا می‏کند. تغذیه یکی از ابعاد مهم سبک زندگی است و رفتارهای تغذیه‏ای در انتخاب شیوۀ زندگی سالم و بهداشتی نقش بسیار حیاتی دارند. سلامت یک فرد به نوع و مقدار مادۀ غذایی که هر روز برای خوردن انتخاب می‏كند بستگی دارد. تغذیۀ مناسب یکی از عوامل مهم و حیاتی در تأمین سلامت و بهداشت هر شخص، خانواده و جامعه است. با استفاده از غذای مناسب، جنبش، کارآیی، رضایت خاطر و نشاط به زندگی روی آورده و قدرت مبارزه با مشکلات در انسان ایجاد می‏شود. بعلاوه تغذیۀ صحیح، سلامت و بهداشت نسل‏های بعد را نیز تضمین می‏کند",
              summary: "خانواده سالم و شاداب با محصولات آفتاب"
            },
            {
              title: "با ما بهترین ها را تجربه خواهید کرد",
              text: "تغذیه سالم براي کودکان نيز مانند اصول تغذیه بزرگسالان بايد برنامه‌ریزی شده باشد. بنابراين در تمامی رژیم‌هایی که برای تغذیه سالم ارائه می‌شوند، تمامی مواد غذایی از گروه‌های مختلف قرار داشته و باید به میزان لازم مصرف شوند، چرا كه غذاهای سالم برای کودکان به رشد و سلامت بدن آنان در سنين بالاتر کمک می‌کند.\n  عاد‏‏ت‏هاي خوب غذايي در كودكان\n 1. مصرف شکر و جایگزین‌های شکر را محدود کنید\n 2. به‌جای آبمیوه به کودک میوه بدهید\n 3. مصرف نمک را کنترل کنید\n 4. چربی‌های سالم را در رژیم غذایی كودك قرار دهید\n 5. برای غذاهای ناسالم جایگزین سالم پیدا کنید",
              summary: "خانواده سالم و شاداب با محصولات آفتاب"
            }
          ]
        },
        statistics: {
          title: "بـــــــا مـــــــا همـــــــراه شویـــــــد",
          summary: "آمــــــــار و ارقــــــــام مجموعــــــــه مــــــــا",
          list: [
            {
              title: "شرکت مارگارین",
              summary: "فروش بیشتر امسال",
              image: "https://s4.uupload.ir/files/group_1_b9ww.png"
            },
            {
              title: "شرکت مارگارین",
              summary: "بازدهی کارکنان ما",
              image: "https://s4.uupload.ir/files/group_298_pfi6.png"
            },
            {
              title: "شرکت مارگارین",
              summary: "افزایش خطوط تولید",
              image: "https://s4.uupload.ir/files/group_2401_es6c.png"
            }
          ]
        },
        application: {
          title: "همیشـــــــه در کـــــــنار شـــــــما",
          summary: "دریــــــــافت اپلیکیشـــــــــــن",
          iosRoute: "google.com",
          logos: "https://s4.uupload.ir/files/logo_mjtw.png",
          image: "https://s4.uupload.ir/files/group_2mobile_e7ai.png",
          androidRoute: "foo.com"
        },
        blogs: {
          title: "هـــــــمیشه بـــــــروز باشیـــــــد",
          summary:
            "اخــــــــبار , مقــــــــالات و اطلاعیــــــــه هــــــــا",
          blogs: [
            {
              image: "https://s4.uupload.ir/files/asdsadas_3pst.png",
              category: "زندگی و سلامت",
              title:
                "5 میان‌وعده‌ی خوشمزه که کمتر از 100 کیلو کالری انرژی دارند",
              like: 10,
              comment: 15,
              time: 15,

              date: "26 مرداد ماه 1400",
              comment: "45"
            },
            {
              image: "https://s4.uupload.ir/files/asdasdasdasd_fs1i.png",
              category: "زندگی و سلامت",
              like: 10,
              comment: 15,
              time: 15,
              title: "24 بمب انرژی که باید در رژیم غذایی خود بگنجانید",
              date: "26 مرداد ماه 1400",
              comment: "36"
            },

            {
              image: "https://s4.uupload.ir/files/clip_li5.png",
              category: "زندگی و سلامت",
              like: 10,
              comment: 15,
              time: 15,
              title: "درمان کبد چرب؛ رژیم غذایی مناسب و روش های خانگی اثربخش",
              date: "26 مرداد ماه 1400",
              comment: "36"
            },

            {
              image: "https://s4.uupload.ir/files/asdsadasdasdasdasd_p0eb.png",
              category: "زندگی و سلامت",
              like: 10,
              comment: 15,
              time: 15,
              title:
                "20 خاصیت بی‌نظیر خرما که از نظر علمی ثابت شده‌اند و به همه توصیه می شود",
              date: "26 مرداد ماه 1400",
              comment: "36"
            },

            {
              image: "https://s4.uupload.ir/files/asdasassssssa_b67n.png",
              category: "زندگی و سلامت",
              title:
                " خاصیت شگفت‌آور دمنوش زنجبیل و لیمو ترش ( و طرز تهیه‌ی آن )",

              like: 10,
              comment: 15,
              time: 15,

              date: "26 مرداد ماه 1400",
              comment: "45"
            },
            {
              image: "https://s4.uupload.ir/files/dddddddddddddddd_3ys.png",
              category: "زندگی و سلامت",
              like: 10,
              comment: 15,
              time: 15,
              title: "غذا خوردن به همراه خانواده چه فوایدی دارد ؟",
              date: "26 مرداد ماه 1400",
              comment: "36"
            }
          ]
        }
      }
    };
  },
       metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme") ? "Health Ambassador " : "مارگارین - سفیر سلامت",
      meta: [
        {
          name: "description",
          content: "مارگارین سفیر سلامت شما"
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme") ? "Health Ambassador " : "مارگارین - سفیر سلامت"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed:{
    homeData(){
      return this.$store.getters.getHomeData;

    }
  },
  created(){
    if (this.homeData == null) {
      this.$store.dispatch("getHomeDataFromServer");
    }
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.setStyle)
  },
  methods: {
    setStyle() {
      if (window.innerWidth > 1000) {
        if(window.innerWidth>1500){
          this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #shopSection #content #titles #roundedButton",
          1920,
          35,
          1440,
          60
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #tour #content #seeTour span",
          1920,
          23,
          1440,
          14
        );
        
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #ourProduct #carts .ourProductCart p",
          1920,
          18,
          1440,
          12
        );
        
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #goodFamily #content .choose button",
          1920,
          19,
          1440,
          13
        );
          this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection .blogCart .innerContent .content h1",
          1920,
          22,
          1440,
          18
        );
        
          this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection .blogCart .innerContent .content h5",
          1920,
          14,
          1440,
          10
        );
        
          this.$root.setProportionStyle(
          "margin-top",
          "%",
          "#healthAmbassador #blogsSection .blogCart .innerContent .content .breaker",
          1920,
          7,
          1440,
          15
        );
         this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection .blogCart .innerContent .content .detail span",
          1920,
          17,
          1440,
          13
        );
        }else{
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #headerContent #navBarMenu ul li a",
          1440,
          16,
          1013,
          11
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #shopSection #content #titles h1",
          1440,
          34,
          1013,
          25
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #shopSection #content #titles h3",
          1440,
          48,
          1013,
          34
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #shopSection #content #titles #roundedButton",
          1440,
          60,
          1013,
          67
        );
        this.$root.setProportionStyle(
          "margin-top",
          "%",
          "#healthAmbassador #tour",
          1440,
          10,
          1013,
          14
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #tour img",
          1440,
          40,
          1013,
          47
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #tour #content h1",
          1440,
          30,
          1013,
          26
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #tour #content h3",
          1440,
          44,
          1013,
          30
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #tour #content #seeTour",
          1440,
          45,
          1013,
          58
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #ourProduct h3",
          1440,
          44,
          1013,
          39
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #ourProduct h1",
          1440,
          30,
          1013,
          26
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#goodFamily #content",
          1440,
          40,
          1013,
          50
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #goodFamily #content .choose",
          1440,
          80,
          1013,
          91
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #goodFamily #content h1",
          1440,
          30,
          1013,
          26
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #goodFamily #content h3",
          1440,
          26,
          1013,
          23
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "div#carts .cartStatistics img",
          1440,
          66,
          1013,
          52
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #application #content h2",
          1440,
          28,
          1013,
          24
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #application #content h1",
          1440,
          38,
          1013,
          30
        );

        this.$root.setProportionStyle(
          "margin-top",
          "px",
          "#healthAmbassador #application #content #routes",
          1440,
          50,
          1013,
          25
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #application #content #routes a div span:last-child",
          1440,
          12,
          1013,
          8
        );

        this.$root.setProportionStyle(
          "bottom",
          "px",
          "#healthAmbassador #application div#logos",
          1440,
          -118,
          1013,
          -90
        );
        this.$root.setProportionStyle(
          "margin-bottom",
          "px",
          "#healthAmbassador #application ",
          1440,
          70,
          1013,
          46
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection h1",
          1440,
          28,
          1013,
          25
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection h2",
          1440,
          38,
          1013,
          29
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection .blogCart .innerContent .content h1",
          1440,
          18,
          1013,
          16
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection .blogCart .innerContent .content .detail span",
          1440,
          13,
          1013,
          11
        );
        }
      } else {
        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador .mainLogo",
          999,
          8,
          425,
          15
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #shopSection #content #titles h1",
          999,
          34,
          425,
          23
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #shopSection #content #titles h3",
          999,
          48,
          425,
          25
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #shopSection #content img",
          999,
          60,
          425,
          90
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #shopSection #content #titles #roundedButton",
          999,
          36,
          425,
          70
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #shopSection #content #titles #roundedButton",
          999,
          18,
          425,
          14
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #tour #content h1",
          999,
          30,
          425,
          18
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #tour #content h3",
          999,
          44,
          425,
          23
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #tour #content #seeTour",
          999,
          32,
          425,
          72
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #tour img",
          999,
          60,
          425,
          90
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #ourProduct h1",
          999,
          26,
          425,
          18
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #ourProduct h3",
          999,
          37,
          425,
          21
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #goodFamily #content .choose",
          999,
          55,
          425,
          95
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #goodFamily #content .choose button",
          999,
          13,
          425,
          9
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #goodFamily #content h3",
          999,
          24,
          425,
          17
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #goodFamily #content h1",
          999,
          30,
          425,
          21
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #goodFamily img",
          999,
          56,
          425,
          95
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #statisticsSection h1",
          999,
          26,
          425,
          16
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #statisticsSection h3",
          999,
          36,
          425,
          23
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #application #content h2",
          999,
          24,
          425,
          17
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #application #content h1",
          999,
          32,
          425,
          25
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #application #content #routes a div span:last-child",
          999,
          12,
          425,
          10
        );

        this.$root.setProportionStyle(
          "margin-top",
          "px",
          "#healthAmbassador #application #content #routes",
          999,
          50,
          425,
          30
        );
        this.$root.setProportionStyle(
          "margin-bottom",
          "px",
          "#healthAmbassador #application #content #routes",
          999,
          1,
          425,
          15
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#healthAmbassador #application div#logos",
          999,
          150,
          425,
          370
        );
        
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection h1",
          999,
          26,
          425,
          20
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection h2",
          999,
          33,
          425,
          22
        );
        
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#healthAmbassador #blogsSection .blogCart .innerContent .content .detail span",
          999,
          13,
          425,
          9
        );
        
      }
    }
  }
};
</script>
