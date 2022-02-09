<template>
  <div id="aboutUsSection" class="d-flex justify-content-end">
    <div id="text" class="width50 d-flex flex-direction-column align-items-end">
      <img
      data-aos="zoom-in" data-aos-duration="1500"    data-aos-once="true"
      id="aboutUsSectionImage"
        class="width70"
        src="@/assets/front/images/aboutUSHome.png"
        alt="درباره مارگارین"
      />
      <div id="sliderSection" class="showInMobile width100">
        <VueSlickCarousel v-bind="sliderSettings">
          <cart v-for="item in aboutUsList" :content="item" :key="item.id" />
        </VueSlickCarousel>
      </div>
      <h1>دربــــــاره گــــــروه مارگاریــــــن</h1>
      <h3 class="summary">اهــــــمیت بــــــه ســــــلامت خانــــــواده</h3>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
    <div id="pictures" class="width50 hiddenInMobile">
      <img
        id="back2"
        class="width100 height100"
        src="@/assets/front/images/aboutUsHomeBack.png"
        alt="background1"
      />
     
      <div id="carts" class="width100 height100 d-flex flex-direction-column">
        <div id="column1" class="width90">
          <template v-for="(item, index) in aboutUsList">
            <cart v-if="index < 2" :content="item" :key="item.id" />
          </template>
        </div>
        <div id="column2" class="width90">
          <template v-for="(item, index) in aboutUsList">
            <cart v-if="index > 1" :content="item" :key="item.id" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import cart from "@/components/front/home/aboutUs/cart.vue";
export default {
  components: {
    cart,
    VueSlickCarousel
  },
  data() {
    return {
      sliderSettings: {
        dots: false,
        arrows: false,
        edgeFriction: 0.35,
        infinite: false,
        autoplay: false,
        rtl: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: "20px",
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          }
        ]
      },
      aboutUsList: [
        {
          id: 1,
          image: "https://s4.uupload.ir/files/a_3j4x.png",
          title: "معرفی مجموعه",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ می باشد ."
        },
          {
          id: 3,
          image: "https://s4.uupload.ir/files/b_mbnf.png",
          title: "چشم اندازها",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ می باشد ."
        },
        {
          id: 2,
          image: "https://s4.uupload.ir/files/aboutushomecart1_p0ia.png",
          title: "ماموریت ما",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ می باشد ."
        },
      
        {
          id: 4,
          image: "https://s4.uupload.ir/files/-e-icon_2e8m.png",
          title: "ارزش های گروه",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ می باشد ."
        }
      ]
    };
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    setStyle() {
      if (window.innerWidth> 1000) {
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection #text h1",
          1496,
          44,
          1024,
          34
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection #text h3",
          1496,
          26,
          1024,
          21
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection #text p",
          1496,
          13,
          1024,
          11
        );
        //
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection #pictures #carts .aboutCart h2",
          1496,
          22,
          1024,
          18
        );
          this.$root.setProportionStyle(
          "margin-bottom",
          "px",
          "#homeSection #aboutUsSection",
          1496,
          10,
          1024,
          10
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection .aboutCart h3",
          1496,
          12,
          1024,
          12
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#homeSection #aboutUsSection .aboutCart h3",
          1496,
          65,
          1024,
          65
        );
      } else {
        this.$root.setProportionStyle(
          "margin",
          "%",
          "#homeSection #aboutUsSection #text #sliderSection",
          1000,
          5,
          425,
          10
        );
        this.$root.setProportionStyle(
          "margin",
          "%",
          "#homeSection #aboutUsSection #text #sliderSection",
          1000,
          5,
          425,
          10
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection .aboutCart h3",
          1000,
          26,
          425,
          22
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#homeSection #aboutUsSection .aboutCart h3",
          1000,
          65,
          425,
          80
        );
        this.$root.setProportionStyle(
          "margin-bottom",
          "%",
          "#homeSection #aboutUsSection",
          1000,
          50,
          425,
          80
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection #text h1",
          1000,
          44,
          425,
          32
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection #text .summary",
          1000,
          26,
          425,
          20
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #aboutUsSection #text p",
          1000,
          13,
          425,
          11
        );
    
        
      }
    }
  }
};
</script>
