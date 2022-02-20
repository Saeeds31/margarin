<template>
  <div id="certificatesSlider" class="width80">
    <VueSlickCarousel v-bind="sliderSettings">
      <cart
        v-for="certificate in prizes"
        :certificate="certificate"
        :key="certificate.id"
      />
    </VueSlickCarousel>
  </div>
</template>
<script>
import cart from "@/components/front/home/certificate/cart.vue";
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel,
    cart
  },
  props:{
    prizes:Array
  },
  data() {
    return {
      // certificatesList: [
      //   {
      //     id: "1",
      //     image: "https://s4.uupload.ir/files/mockup_aisu.png",
      //     title: "گواهینامــه و تقدیــرنامه هــا",
      //     summary: "عنوان برترین شرکت صادراتی کشور",
      //     text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی می باشد .",
      //     date: "اردیبهشت ماه 1398"
      //   },
      //   {
      //     id: "1",
      //     image: "https://s4.uupload.ir/files/mockup_aisu.png",
      //     title: "گواهینامــه و تقدیــرنامه هــا",
      //     summary: "عنوان برترین شرکت صادراتی کشور",
      //     text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی می باشد .",
      //     date: "اردیبهشت ماه 1398"
      //   },
      //   {
      //     id: "1",
      //     image: "https://s4.uupload.ir/files/mockup_aisu.png",
      //     title: "گواهینامــه و تقدیــرنامه هــا",
      //     summary: "عنوان برترین شرکت صادراتی کشور",
      //     text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی می باشد .",
      //     date: "اردیبهشت ماه 1398"
      //   },
      //   {
      //     id: "1",
      //     image: "https://s4.uupload.ir/files/mockup_aisu.png",
      //     title: "گواهینامــه و تقدیــرنامه هــا",
      //     summary: "عنوان برترین شرکت صادراتی کشور",
      //     text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی می باشد .",
      //     date: "اردیبهشت ماه 1398"
      //   }
      // ],
      sliderSettings: {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        rtl:false,
        fade:true,
        slidesToScroll: 1,
        speed: 2000,
        cssEase: "linear",
      }
    };
  },
     mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods:{
    setStyle(){
      if(window.innerWidth>1000){
        // #sliderSection .slick-prev, #sliderSection .slick-next
         this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #certificatesSlider .cart .content .titles .contentTitle h1",
        1496,
        40,
        1024,
        31
      );
      // 
       this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #certificatesSlider .cart .content .titles .contentTitle .footerSection h4",
        1496,
        24,
        1024,
        20
      );
       this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #certificatesSlider .cart .content .certificateText",
        1496,
        14,
        1024,
        10
      );
       
      
        
       
      // 
      }else{
          this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #certificatesSlider .cart .content .titles .contentTitle h1",
        768,
        38,
        425,
        20
      );
          this.$root.setProportionStyle(
        "font-size",
        "px",
        "#homeSection #certificatesSlider .cart .content .titles .contentTitle .footerSection h4",
        1000,
        40,
        425,
        15
      );
      
      
      
      
        
      }
    }
  }
};
</script>
<style>
#certificatesSlider .slick-prev:before,
#certificatesSlider .slick-next:before {
  opacity: 1;
}
#certificatesSlider .slick-prev {
  top: 45%;
  left: 70%;
}
#certificatesSlider .slick-next {
  top: 45%;
  right: -5%;
}
#certificatesSlider .slick-prev,
#certificatesSlider .slick-next {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 0 18px #00000059;
  cursor: pointer;
  z-index: 100;
}
#certificatesSlider .slick-prev:before,
#certificatesSlider .slick-next:before {
  color: black;
  font-size: 15px;
}
#certificatesSlider .slick-prev:before {
  content: url("../../../assets/front/images/leftArrowHomeSlider.svg");
}
#certificatesSlider .slick-next:before {
  content: url("../../../assets/front/images/RightArrowHomeSlider.svg");
}
#certificatesSlider .slick-disabled {
  border: 5px solid #ebebeb;
  box-shadow: none;
}
</style>
