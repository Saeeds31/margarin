<template>
  <div id="sliderbox">
    <p id="lastText" class="blackColor06 hiddenInMobile">{{ firstText }}</p>
    <div id="sliderContent">
      <VueSlickCarousel v-bind="sliderSettings">
        <template v-for="(slider, index) in sliders">
          <div class="mainImage d-flex flex-direction-column align-items-center" :key="index">
            <img :src="slider.image" :alt="slider.title" />
            <h3 class="blackColor08">{{ slider.title }}</h3>
          </div>
          <div class="d-flex justify-content-center" v-if="index != sliders.length - 1" :key="index">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="129"
              height="15"
              viewBox="0 0 129 15"
            >
              <image
                id="arrow"
                width="129"
                height="15"
                opacity="0.2"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAPCAYAAADDGqz4AAAABHNCSVQICAgIfAhkiAAAA/xJREFUWEftmF2IVVUUgOf2q5ViggqhNKTig0rQgwgqmvYg9CP2oJaI4/gDPjT+l6IoZSAopFD0M6ViVCqJQwr6IiKKIKiQ2TiYPgyNWIqYRKllNX3fzDnDLu/M2XdmYMbrXfBxzr1n7X323mvttdY+ucbGxjIll8s9zaWB3/80/REIz/7/V+l3Ea2A1h0EX0AfuA5fwTac4e90niUnKCKLN0/lGXg0sfcVneB9WAgPJlO9zHUiTnC+5ARFZ3wn9BrMhxFwFip1gu9gZDDdO9zPwAn2RjqBfehARo7m3FKS7rgC2mkYfB9seMe51Qf74aVg1De4fxYn+DHCCR5JHGgK159Bx/Faku63Ag8wJO3UsrmTIdbpBMPhLXgefoFqHOCDcA6t1AR2OhqOB7oXuH8ZWlJJ91uLohiRa2847wvHoKV+y5jdEJ6fBOs/5Q+oyXk6wMj9+fEUGM5r+e+vCCfojc6bsDrQ/Z37TfB25FJbnIwCnfES1MNdp5PIvu4HNdfJU9w3oEG10yl4BVz7LDFyvwEVieJprlVNTpAlrUSCJxMHWBa0N5VshA1ZffJcL3Ywy+EJOAHvwtGItsWgMpBJGIUb4FzkhNx4iyHcZK75Kvg4sg/VPBH+Bkb+so44gV45GfaAHvYQfAuvQ13GgGw7Fg7C44mu3ngYXoicjAtSAZPgKuyGQ5FtVbOYdRz/iXoFtDd6uisNqRqyaUEjpCc6U2ERuBE8jX0EuyLaGsZXguk7lVvcfAJLItrnVemIE6QdGpZehT/hAFyErJBuTrPN18GobKMTWLzczJiQBpwHpp5eyfuMJAugNmIxTEPTYAs8BkdgBVg5x4g7WGO8mLx7O9e1oEHaEp3Ok5jfZdITmfM2T+v87s62JF9xd40Gc2FfzMDz6XSGE4T9Osns/NK8C5+DL2Fo0oFHU79ZhOmltXkN4IEOMCtQMCdqSHdVW+K7x4GGK08UdeCdUBGxkD3Q0QHWBboabyl8GvHuCegYPdPizPXymD4dYgpq2zlOndg04hpanDuHdklnO0Ehg3gYZY+mleBu/AHeA08YWaJ+NcwMFH/lvgp2ZDTWCYxCn4MGVayuTSUVkHXEtX7ZDEaiVEwp5mlrmizxa53vHhO8u4Z7P+CY32PEiGA0cy5Gn9jTQd6+u9IJwgFZTxSSm9XXgQzn5mWjyGewHn7KWEUXbjxYSKVRyHcboudEWMD6R2czEinuZGsCCzaNmSW29/2zoR9YP/luq/wuke7iBO2ZvAWWRhycGMLjjsaIEQ3hTn4HDK8WqGvgTERjU145mLZMaYpG/DCibapiH6Y065l60Im7TO5lJ+isRTMlGB1uQ6FhNf1c3llj6ZJ+/gWBL+ZW+xWrmgAAAABJRU5ErkJggg=="
              />
            </svg>
          </div>
        </template>
      </VueSlickCarousel>
    </div>
    <p id="lastAboutUsP">{{ lastText }}</p>
  </div>
</template>
<script>
import aboutUs32 from "@/assets/front/images/aboutUs32.png"
import aboutUs59 from "@/assets/front/images/aboutUs59.png"
import aboutUs71 from "@/assets/front/images/aboutUs71.png"
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel
  },
  props:{
       firstText:String
,
      lastText:String
  },
  data() {
    return {
   
      sliderSettings: {
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:2,
        touchThreshold: 5,
        
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
  ]
      },
      sliders: [
        {
          image: aboutUs32,
          title: "واگذاری سهام به صنایع بهشهر"
        },
        {
          image: aboutUs59,
          title: "تحت پوشش سازمان صنایع"
        },
        {
          image: aboutUs71,
          title: "تاسیس شرکت مارگارین"
        },
        
        {
          image: aboutUs32,
          title: "واگذاری سهام به صنایع بهشهر"
        },
        {
          image: aboutUs59,
          title: "تحت پوشش سازمان صنایع"
        },
        {
          image: aboutUs71,
          title: "تاسیس شرکت مارگارین"
        }
      ]
    };
  }
};
</script>
<style >

#sliderContent .slick-prev:before,
#sliderContent .slick-next:before {
  opacity: 1;
}

#sliderContent .slick-prev,#sliderContent .slick-next {
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 0 0 18px #00000059;
    cursor: pointer;
    z-index: 100;
}
#sliderContent .slick-prev:before,#sliderContent .slick-next:before {
    color: black;
    font-size: 15px;
}
#sliderContent .slick-prev:before{
  content: url("../../../assets/front/images/leftArrowHomeSlider.svg");
}
#sliderContent .slick-next:before{
  content: url("../../../assets/front/images/RightArrowHomeSlider.svg");

}
#sliderContent .slick-disabled{
display: none !important;
}
#sliderContent .slick-track{
  display: flex !important;
  align-items: center !important;
}
</style>
