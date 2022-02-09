<template>
  <div id="awardsSection" class="width70">
    <VueSlickCarousel v-bind="sliderSettings">
      <div
        class="sliderItem d-flex justify-content-start align-items-center"
        v-for="(slider, index) in prizes"
        :key="index"
      >
        <div class="content d-flex flex-direction-column align-items-end width40">
          <h1 class="hiddenInMobile blackColor06">{{ slider.title }}</h1>
          <h3 class="hiddenInMobile blackColor06">{{ slider.shortDescription }}</h3>
          <doubleLine class="hiddenInMobile width40" />
          <p class="blackColor04 width90">{{ slider.description}}</p>
          <div
            class="dateBox d-flex align-items-center width45 justify-content-between"
          >
            <p class="d-flex align-items-center flex-direction-column margin:0">
              <span class="blackColor06">{{$cookie.get('ltrTheme')?"recived Date":'دریافت در تاریخ'}} </span>
              <span class="blackColor06">{{ slider.receivedDate }}</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="70"
              height="70"
              viewBox="0 0 70 70"
            >
              <g
                id="Group_1asdasd"
                data-name="Group 1asdasd"
                transform="translate(-805 -3843)"
              >
                <g id="Group_1asdasd-2" data-name="Group 1asdasd">
                  <g
                    id="Rounded_Rectangle_12"
                    data-name="Rounded Rectangle 12"
                    transform="translate(805 3843)"
                    fill="#fff"
                    stroke="rgba(0,0,0,0.06)"
                    stroke-linejoin="round"
                    stroke-width="6"
                  >
                    <rect width="70" height="70" rx="15" stroke="none" />
                    <rect
                      x="3"
                      y="3"
                      width="64"
                      height="64"
                      rx="12"
                      fill="none"
                    />
                  </g>
                </g>
                <image
                  id="Layer_2619"
                  data-name="Layer 2619"
                  width="24"
                  height="24"
                  transform="translate(828 3866)"
                  opacity="0.6"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAeVJREFUSEvtlksohFEUx+dLGCuUMiJLpdjMThaiSElWLCwwKY2N95IVS4/YeOexsLCTlChSJJvZjCIbNRFTCiuDGL+j8003GWFMSW6dzjn/+d9z7j3nfveOFQ6HHZZltTgcji4kD7GQWEaYySfIMLGnJJgE70MGkDXkMZbozE1EqpBepF8SHCMjZJs0A7OrOvw98HMbBysSG2zfwLKxi8GW38z34ndIgmckF8KZMSkT+xIZAu8x8ENNUGBgg9jdiAtu0MBzsAOSQGqWxY8SMDJYbQWOD/zKmFSoCfwGloHthrfxZr4L/yJqApP8HZsF/if4uHCfLhHEUUKlargl1fWqb2luO5xpfDn/MmbAdr+SQE6XHFsZnapHVAcJ5iJYCD9ZMQ/Y/K9KUMPKUnR1PtVu1XesdoXV1uInKHYAdvruDgBLILUq8QFiA9gEfppiC6obVd/A8cJZxE9SbBxsJ1qCJkhzSryH6IT4cz0gWNwT5LJ6u75P7GCVpJVgTt2VfQe93kmMEJx1ONVGD+T+CkQrURnENqMHdRClZOmKzapuVn1NMA8cuartHoyBbf2tHkQeHLYlr5NdX+nBJlgpmP2VHmlp8o2Ttg2n3OiBX15BsMiD8+6TqQG+rUgQeTLj++jH+2/LC/kFaIqblwjUAAAAAElFTkSuQmCC"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          class="width30 imageCart d-flex flex-direction-column align-items-center"
        >
          <div class="imageBox  d-flex justify-content-center">
            <img class="width50" :id="`aboutSliderImage${index}`" v-img :src="$root.baseImageUrl+slider.image" :alt="slider.title" />
            <p class="d-flex align-items-center flex-direction-column roundedDate justify-content-center">
              <span>
                {{slider.receivedDate.substr(0,4)}}
              </span>
              <span>
                {{$root.getPersianMonth(slider.receivedDate.substr(5,2))}}
              </span>
            </p>
          </div>
          <button @click="showFullImage(index)">
            <span>{{$cookie.get('ltrTheme')?'See the full':'مشاهده کامل تندیس'}}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <image
                id="Layer_2400"
                data-name="Layer 2400"
                width="24"
                height="24"
                opacity="0.302"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAnpJREFUSEutlVuIjVEUxw0hREi535UXKbfS5JJiMniQB4Mo15TbgzfKg+LRgxJiwgOFiCR3oSQ1JUVJKSWTS5FcMzH8flqfTt/sb86Js+vXPmevtdd/39b6ajpU1jrhthAWwFQYAJ3hLTyAa3ACvuTD1VQQfz4+e2F0+P6MwD/o+0OXGH9HvxP2wa8sbjmB3ThuA/1uxGRX+y0CuLNpsAqWg/8vwGL4rk97AtuxK/A5Apwps9tJ2M/C8OgVaS0SmIixCVpgFtwvEzwzDwzfYfTroLFI4DbGmbABDhQE78F4m0tlbEqIeCcjUgKjMDyDpzAOvNR889LXwhh4lbD7opZBQ0pgK4Y9sAN2Faz+HOM+2wnwMOFTx9hVOJkSOByrm05/Nze5T/w/Tj8PPMZH8BX+vJpoXWPscUrgOsbZ4FE9L5nksWwp2NFHxsfC6xL7G353SwlcxjAXxsfqsjkr+LEZOoJJ1xuexEpf0i+FLD+M+wlaUgKNGNbAIvCsU63cHQxiUjMkj2glhqNwCNb/o4AvzLs8mNpBv1A3gz2KDwkRj6shyOeCMe+BRbGuKNGyC92P08aCXRQNW5eOgNlfWyTgLnzfg8GLtUJW0mbgdAV8CD7zpvaK3WQc7kB38D6squ8LVHz3LsTEtHyvhmP6pgQsuWKhs0KehyHgszsFN+EF+D2wuLnSJeBuTTiP6HS2kLxATwwXYSRYZxTpC5buTeBKU80PjOVcP+vY31Yq0ItRk6wWLBGWgdYSXxOrPuxD6d2lhc678iNjsrVpmYCl9xJ4ST4xA5n+/90UcOVWPt9tVYO7OgX8xs6JY7FCeplVawrcArPWYmVf1fYbDaaGgdTBfP4AAAAASUVORK5CYII="
              />
            </svg>
          </button>
        </div>
          <h3 class="showInMobile blackColor06">{{ slider.shortDescription }}</h3>
              <h1 class="showInMobile blackColor06">{{ slider.title }}</h1>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import doubleLine from "@/components/front/shared/doubleLine.vue";
export default {
  components: { doubleLine, VueSlickCarousel },
  data() {
    return {
      sliderSettings: {
          dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
        speed: 1500,
        fade:true,
        slidesToShow: 1,
        slidesToScroll:2,
        touchThreshold: 5
      },
    
    };
  },
  props:{
    prizes:Array
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize",this.setStyle)
},
beforeDestroy() {
  window.removeEventListener("resize",this.setStyle)

},
  methods: {
    showFullImage(index) {
      document.getElementById(`aboutSliderImage${index}`).click();
    },
    setStyle(){
      if(screen.width>1000){
         this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content h1",
            1920,
            39,
            1496,
            39
          );
         this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem .content h3",
            1920,
            25,
            1496,
            25
          );
          
      }else{

         this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem  h3",
            999,
            28,
            375,
            20
          );

         this.$root.setProportionStyle(
            "font-size",
            "px",
            "#aboutSection #awardsSection .sliderItem  h1",
            999,
            39,
            375,
            26
          );
      }
    }
  }
};
</script>
<style scoped>
#awardsSection {
  background-image: url("../../../assets/front/images/aboutUsBackgroundSlider.png");
  background-size: 50% auto;
  background-repeat: no-repeat;
  background-position: right;
}
.dateBox p span {
  font-size: 14px;
}
.dateBox p span:last-child {
  font-family: "yekan-heavy";
}
#doubleLine {
  margin: 15px 0;
}
</style>
<style>

#awardsSection .slick-prev:before,
#awardsSection .slick-next:before {
  opacity: 1;
}
#awardsSection .slick-prev{
  top:76%;
  left: 7%;
}
#awardsSection .slick-next{
  top:76%;
  right:80%
}

#awardsSection .slick-prev,#awardsSection .slick-next {
    background: white;
    width: 58px;
    height: 58px;
    border-radius: 50px;
    box-shadow: 0 0 18px #00000059;
    cursor: pointer;
    z-index: 100;
}
#awardsSection .slick-prev:before,#awardsSection .slick-next:before {
    color: black;
    font-size: 15px;
}
#awardsSection .slick-disabled{

    border: 5px solid #ebebeb;
    box-shadow: none;
}
#awardsSection .slick-prev:before{
  content: url("../../../assets/front/images/leftArrowHomeSlider.svg");
}
#awardsSection .slick-next:before{
  content: url("../../../assets/front/images/RightArrowHomeSlider.svg");

}

#awardsSection .slick-track{
  display: flex !important;
  align-items: center !important;
}
</style>
