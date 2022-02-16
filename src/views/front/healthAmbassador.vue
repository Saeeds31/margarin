<template>
  <div id="healthAmbassador" class="width100">
    <mainHeader data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-once="false" />
    <shopSection  :data="healthAmbassador.shopSection" />
    <virtualTour :data="healthAmbassador.virtualTour" />
    <ourProduct :data="healthAmbassador.ourProduct" />
    <goodFamily :data="healthAmbassador.goodFamily" />
    <statistics :data="healthAmbassador.statistics" />
    <application :data="healthAmbassador.application" />
    <div id="breaker"></div>
    <blogs  :data="healthAmbassador.blogs" />
    <healthFooter  class="hiddenInMobile" />
    <mainFooter  class="showInMobile" />
  </div>
</template>
<script>
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
          image: "https://s4.uupload.ir/files/layer_2661_copy_4_cm4d.png",
          title: "جدیدترین محصولات ما",
          summary: "با مارگارین همیشه سالم باش !",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ."
        },
        virtualTour: {
          image: "https://s4.uupload.ir/files/layer_2661_copy_3_buj.png",
          title: "تور مجازی بازدید از خط تولید",
          summary: "کیفیت و برتری با گروه مارگارین"
        },
        ourProduct: {
          title: "اولین تولید کننده روغن در کشور",
          summary: "ویژگــــــــی هــــــــای محصــــــــولات مــــــــا",
          carts: [
            {
              title: "دارای کانولا",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
            },
            {
              title: "پالم ندارد",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
            },
            {
              title: "بدون کلسترول",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
            },
            {
              title: "فاقد آنتی اکسیدان",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
            }
          ]
        },
        goodFamily: {
          image: "https://s4.uupload.ir/files/layer_2661_copy_5_m8q.png",
          data: [
            {
              title: "با ما بهترین ها را تجربه  کنید",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .",
              summary: "خانواده ای سالم و شاداب در کنار هم"
            },
            {
              title: "با ما بهترین ها را تجربه خواهید کرد",
              text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد .",
              summary: "خانواده ای سالم و شاداب در کنار هم"
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
  mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
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
