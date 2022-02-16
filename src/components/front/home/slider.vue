<template>
  <div id="sliderContent">
 
    <router-link
      class="showInMobile"
      v-if="!$route.name.includes('healthAmbassador')"
      to="/health-ambassador"
      id="ambassadorButton"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="31"
        height="30"
        viewBox="0 0 31 30"
      >
        <image
          id="Layer_2748"
          data-name="Layer 2748"
          width="31"
          height="30"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAABHNCSVQICAgIfAhkiAAAAuVJREFUSEu9l0uITlEcwOfzjighomQniR0lC7FSXhslO6FsbWWNoshKKSxYyJDHJEOhRGhEMrHwyBSmvI3xfozfbzqnbvc73/fde2uc+vWdzj33/M75n8c9X21gYKAtkaZTthyWgPka/ISncAUuwZfMe+PIz4RpMDaU2/BHeAEv4U/eU8vJbWQbbIHJqV6Fsof87oZTMBfmgO/aSaViXpS+gzvwLNtmVj6LB8dgcRNp/tEBCu7CCPjb5D2fm+7BrdC5tiifRMFVmFdCbNWT0AFjEu/9pmxYwMdGYTR0wc3BghD2I+Q3lBRb/ThcSMiNwhTog/4gjR0YTuY89ChfROZG6FlZf0r+g0YWwmZwrk+A4XbUJqfgNZxWfojMxrLWUD8l/84zd8r6UMfw74cHuQ50KO+h0G1SJaXkrnTnehmsCUIdOyHuglHk7yt3K1i5Smo050o+w+pMBHaQfwKKDX2v8uQpU7AnjeS+/gumwq7QltvydoiEg+0bSrkr3i24HdzKduI5jAyR7h9KuQO2A4rthEdsnF5/Pym3ggdAldQs7LE9V7tT64hjcs5fKe8l4wehSioiT7XroutW3k5mbRUz71SVG4VO5avInPuPco9Xj9125YbAw35+hQ5UGbnHrF+2rvhhMeyGv2wqK3fUXkJ0fYtyV7ufxhUl7WXlRvkyPNKTv0wYDk+loqmM3HA/hosweKrmr1ErKTsDhqdIKip3dft5PWu4Y8N5ueWb4CAU+dgUkSt2nt1R77MjSsl97kXADrQ6+VrJneMPIdRv86FsJLfeOjgM8SqcmoZmcsVvgtgrdF1qJrfyUjgKM1IvU9ZIrtgLhCv7a4N36xZcqt7s0IEFiYd5uevExdoN16Huj0K2jVYjj3XHk9kHLsZsysr9UnmB8FqsvGUqKo8NKd8DE0OB8k6YAH4dr4E300KprNxG/Wu0F7yhun38y+Th4d8hR144VZHbuFtwK3hL8Vrsqi6d/gFmAP87hbs6GgAAAABJRU5ErkJggg=="
        />
      </svg>
      <span>{{$cookie.get('ltrTheme')?'Be a health ambassador':'سفیر سلامت باش'}}</span>
    </router-link>
    <div id="slider">
      <VueSlickCarousel v-bind="sliderSettings">
        <div @click="gotoLink(item.link)" class="sliderItem" v-for="(item, index) in slider" :key="index">
          <img :src="$root.baseImageUrl+item.image" :alt="item.title" />
          <h3 v-if="item.title">{{ item.title }}</h3>
          <p v-if="item.shortDesc">{{ item.shortDesc }}</p>
          <!-- <div id="shadowBox"></div> -->
        </div>
      </VueSlickCarousel>
    </div>
    <div id="bottomWall" class="width100">
      <div
        id="content"
        class="d-flex justify-content-start width90 height100 hiddenInMobile"
      >
        <div id="orangeShadow"></div>
        <p
          id="wallTitle"
          class="d-flex justify-content-center align-items-center"
        >
{{$cookie.get('ltrTheme')?'The largest producer of vegetable oil in the country':'بزرگترین شرکت تولید کننده روغن نباتی در کشور'}}        </p>
        <div id="sliderPagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
  
    VueSlickCarousel
  },
  props:{
    slider:Array
  },
  data() {
    return {
      sliderSettings: {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      },

      
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
    gotoLink(link){
      if(link==null)return;
      window.open(link, '_blank');
    },
    setStyle() {
      if (screen.width > 1000) {
       this.$root.unsetInlineStyle("font-size","#homeSection #sliderSection #sliderContent #slider .sliderItem p")
       this.$root.unsetInlineStyle("font-size","#homeSection #sliderSection #sliderContent #slider .sliderItem h3")
      } else {
      
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #sliderSection #sliderContent #slider .sliderItem h3",
          1000,
          40,
          425,
          28
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #sliderSection #sliderContent #slider .sliderItem p",
          1000,
          36,
          425,
          26
        );
      }
    }
  }
};
</script>
<style>
#sliderContent #slider .slick-dots {
  z-index: 1;
  width: max-content;
  right: 6%;
  bottom: -2%;
}
#sliderContent #slider .slick-dots li button:before {
  content: "___";
}
#sliderContent #slider .slick-dots li button:before {
  font-size: 16px;
  font-weight: bolder;
  color: #c4beb8;
}
#sliderContent #slider .slick-dots li.slick-active button:before {
  color: #f8941c;
}
</style>
