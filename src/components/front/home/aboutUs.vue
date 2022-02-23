<template>
  <div id="aboutUsSection" class="d-flex justify-content-end">
    <div id="text" class="width50 d-flex flex-direction-column align-items-end">
      <img
      @mouseenter="animateToImage"
      data-aos="flip-right" data-aos-duration="2200" data-aos-delay="500"    data-aos-once="false"
      id="aboutUsSectionImage"
        class="width70"
        :src="`${$cookie.get('ltrTheme')?enImage:faImage}`"
        alt="درباره مارگارین"
      />
      <div id="sliderSection" class="showInMobile width100">
        <VueSlickCarousel v-bind="sliderSettings">
          <cart  v-for="item in aboutUsList" :content="item" :key="item.id" />
        </VueSlickCarousel>
      </div>
      <h1>{{$cookie.get('ltrTheme')?'About Margarine ':'دربــــــاره  مارگاریــــــن'}}</h1>
      <h3 class="summary">{{$cookie.get('ltrTheme')?'Importance for family health':'اهــــــمیت بــــــه ســــــلامت خانــــــواده'}}</h3>
      <p>
        
        {{$cookie.get('ltrTheme')? 'Margarine is the first vegetable oil company in Iran, which is known among the people with the brands of rooster, sun and golden sun. This company, which entered the field of industry in January 1943 with a refining capacity of 8 tons of vegetable oil per day, and now with the cooperation of experienced experts has been able to be a guest of many families and different industries in the country with a production capacity of 1000 tons per day.
This collection always tries to design and produce products with superior quality and in accordance with the needs of customers. Currently, the company produces 38 different types of oil products in two sections of industry and industry (B2B) and household consumption (B2C), which in addition to complying with the criteria of the Iranian Institute of Standards and Industrial Research and the Deputy Minister of Food and Drugs, with standards Internationals such as CODEX from the Swiss company SGS have also been adapted, which is why margarine products are now on the market in most Middle Eastern and even European countries.' :'مارگارين اولين شركت توليد كننده روغن گياهي در ايران است كه با برندهای خروس، آفتاب و آفتاب طلايي  در بين مردم شناخته شده است. اين شركت كه در دی ماه سال 1332 با ظرفیت تصفيه 8 تن روغن گياهي در روز پا به عرصه صنعت گذاشت و اکنون با همكاري كارشناسان مجرب توانسته است با ظرفیت توليدي 1000 تن در روز، میهمان بسیاری ازخانواده ها و صنایع مختلف کشور باشد.
اين مجموعه همواره سعي می نماید محصولاتی با کیفیت برتر و منطبق با نیاز مشتریان طراحی و تولید نماید. هم اکنون  38 نوع  محصول متنوع روغني در دو بخش صنف و صنعت (B2B) و مصارف خانوار (B2C) در این شرکت تولید می‌شود که علاوه بر مطابقت با ضوابط موسسه استاندارد و تحقیقات صنعتی ایران و معاونت غذا و دارو وزارت بهداشت، با استاندارد های بین¬المللی نظیر CODEX از شرکت SGS سوئیس نیز انطباق داده شده است، به همین سبب اینک محصولات مارگارین در بازار اغلب کشورهای خاورمیانه و حتی کشورهای اروپایی به چشم می خورد.'}}
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
          <template  v-for="(item, index) in aboutUsList">
            <cart 
            class="otherCart"
            :class="`animationAboutCart${index+1}`"
              v-if="index < 2" :content="item" :key="item.id" />
          </template>
        </div>
        <div id="column2" class="width90">
          <template v-for="(item, index) in aboutUsList">
            <cart 
            :id="index==2?'carts3':''"
            :class="{otherCart:index!=2,'animationAboutCart3':index==2, 'animationAboutCart4':index==3}"
  
            v-if="index > 1" :content="item" :key="item.id" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import enImage from "@/assets/front/images/aboutUSHomeEn.png"
import faImage from "@/assets/front/images/aboutUSHome.png"
import VueSlickCarousel from "vue-slick-carousel";
import cart from "@/components/front/home/aboutUs/cart.vue";
export default {
  components: {
    cart,
    VueSlickCarousel
  },
  data() {
    return {
      enImage:enImage,
      faImage:faImage,
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
          title:this.$cookie.get("ltrTheme")?"Introducing the collection": "معرفی مجموعه",
          text:this.$cookie.get("ltrTheme")?"":""
        },
          {
          id: 3,
          image: "https://s4.uupload.ir/files/b_mbnf.png",
          title:this.$cookie.get("ltrTheme")?"Perspectives": "چشم اندازها",
          text:this.$cookie.get("ltrTheme")?"":""
        },
        {
          id: 2,
          image: "https://s4.uupload.ir/files/aboutushomecart1_p0ia.png",
          title:this.$cookie.get("ltrTheme")?"Our mission": "ماموریت ما",
          text:this.$cookie.get("ltrTheme")?"":""
        },
      
        {
          id: 4,
          image: "https://s4.uupload.ir/files/-e-icon_2e8m.png",
          title:this.$cookie.get("ltrTheme")?"Group values": "ارزش های مارگارین",
          text:this.$cookie.get("ltrTheme")?"":""
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
    animateToImage(){
document.getElementById("aboutUsSectionImage").classList.add("aboutUsSectionImageHover");
setTimeout(()=>{
document.getElementById("aboutUsSectionImage").classList.remove("aboutUsSectionImageHover");

},4100)
    },
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
          this.$root.unsetInlineStyle(
          "margin-bottom",
          "#homeSection #aboutUsSection",
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
