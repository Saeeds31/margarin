<template>
  <div id="articles" class="width100">
    <sectionHeader :data="articleHeader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="93"
        height="83"
        viewBox="0 0 93 83"
      >
        <image
          id="Layer_2765"
          data-name="Layer 2765"
          width="93"
          height="83"
          opacity="0.149"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABTCAYAAAD9ewuzAAAABHNCSVQICAgIfAhkiAAABlZJREFUeF7tnWmsJUMUx+/Y19hFiHj2MLbEB1sQeyyx7zJkLLEkRIQQieATkSASIfbBB8FgbDNiYk3MIMMIsQwhYhkSBEGsg//veTd66lX37b5dXVW3uyo5yXvd1afq/G7dqupTp+pO6fV6V0v+kfhIy6iQ9yUP+Cgs1jKmeATeZ/Cb/thb8nqsUJquVwjo2LRIsqvkh6YNjFF/KOiwoIs5OUYoTdcpJHRsO19yc9NGxqY/NPRO9u950C9U61gg4X7dxMxobck9knUsyj6c6N+/r1vQqDyfB30PGTDPsRHHSd9DOTo71b/nQd9PcJ53DB11N0r4FtlSZ/p339BXFO0XJLtZqHemf/cNHdbrS16TjFnAM3/fRfJjA9+yaFTWhb6sLDlFslYFi35V3iMkh+Q8M0fXn5YsV0FnjFlhO1fyrlm5utDpLj6RbBij1RHU6TzV4dYmoL8tpVtFYGCMVThTlborQff70STofnmPl+YVOm+hvnz0AVhOKpKx0fb27hX6c6rERTkViQGSyzrQuHaS3GtR6hX6w6rA8S4ti1zXzqofviozeYX+qEo/JnJQLqu3u5S9kqC7RDpYVxTQH1Q9Txxc19bk2F6W8L5iJlbGJi3Cu3gjtb0cseKf58ZtDemMIRvr79Mthj2hawuN64ubgt5GsK5sWpSgu0JZXs+CBL08LFc5E3RXJCvoaQz636rEXxUq0tasrAkQSphNjUF/RqWc21aSFey6TXkP9AV9pgpi9b/r6REBONoX9K65AfIa12O6cWSC7ve7l6D75T1eWnDoK6gSLNSuLvG5wMG7CL4gwveyCX/JURJmWnUS+r+R3G7RFRw6sL+SrFrHwiGfZTADQDbhK5m0aDyk/s/03OYSc5ocHPpqqtRHkg2GNKzOY4fr4ScNBdP0/311lGaefU9/75igL00zQXfUuqqosUE/TQpmVFFSkJfxYuootfTfVdmfJXVj4RmciTijGzOTDfoJykT0Vd1BnXp/INlrlKAzs7hAYvooqjZCZiHER7L5oAz0lZVpTUfQ/5Seby3lRjuQ3q3KnlGVcE7+Q3X9qZLQHRVZqCZa6DNU7emOCBANPCtB/59A3pQxQZ9gVHb7CwOXbWHa5vBK0P+D25g/fRSgE5V1kqOB9GvpuUFiuhRSn2709QzedzoaSz6Xns0kI+MGCNWnd9oNkKB3aCB16QbAkbdt6l6W7qxtbgCiim9yNJDie2EBOvXpGe426Cyq4Nuv63uhmCWSnyyDcpq9OJqpVFGToFeh5Shvgu4IZBU10UJnQffsKpYU5N1f99gabiZbn+6oyEI10UJnuvWyIwKbSA/gy0DnJA5XLuXF0nWVZGTcAI54F6qxtfROuwFCQe+0GyBBnyDQlD/9U+m3HZ7WNHiCOB83CumEG4C3v1clnGzkO9GVPGsUSii3qzMhcQPsI4nODUCoAuDrhloM84FxmpIJZHldW2kYZZZnmLX8YrkefMroyL6RUpOgB/i4EvQEPQCBAEWmlh4AOlERbDzIJq8hGAFsDl4kzjfTF/RGU9vU0+66Xo+VKQKxtjY++rkJenNfhm2k+i0J8LPplgS9OeiXSfU1FvXT86Dvq8yc/jwo5X2FGLXNncKDdLXpPnGbdC2bGkZxcvbUPOiH6SaHDA9KqygDB/iOGRk51YidDl1NtHBaupnw/xyUB52HLi9BjL2Yb0rME6Cv17WLSzzfxizE07C7hBO3zcT0cVZ/4+m6xt0v9P8OkkG/U8GenXMsyk/VtfvbSHSATcdO2G1zpPFzF+xLWgJ021sTupn2ceIc+2lsiZPYAGvuFcLbxshNJGtXEufHXyK51MIDBn9I9pSM/4oZ0A+WzM6h86KuXyGZLyGKicTJbLRuCrB9hdhoZTu5rW0fAK5h5uBsueGk0bECA2F1Xf8+0GmpHIpzQMFD7+jelxK2mm8nWaMgL3NTguTr7paL9UMiDI9Z20YSYtIH/aIBMfBnZY3pLyhsqYu05hBLabHCdVEvgNMr9HuJcZ3ZVRxaOv24bfOriwp0SQd9+JWSa21Gm0tnnBnLvk7TX9AlYHVtfUkKmKOzHmxNtvVKuhjm2ATjrFe3Bh15nhkbb/B3SDhtozD8umiRmCNC6HL4wdYtJP3B00U89yh/FjCj+/hO8rGEaSDHePMrOKXSvzifY2YF1xfBAAAAAElFTkSuQmCC"
        />
      </svg>
    </sectionHeader>
    <div id="sliderSection" class="width80 margin-auto hiddenInMobile" v-if="showSlider">
      <VueSlickCarousel
        :autoplay="mobileSize==true?true:false"
       
      >
        <div
          v-for="i in articleLength"
          :key="i*10"
          class="sliderItem"
        >
          <div class="firstRow d-flex justify-content-between width100">
            <smallCart :article="articles[4 * i - 4]" :key="i*544" />
            <wideCart
              :showComment="true"
              class="width60"
              :article="articles[4 * i - 3]"
              :key="i*500"
            />
          </div>
          <div class="secondRow d-flex justify-content-between width100">
            <wideCart
              :showComment="true"
              class="width60"
              :article="articles[4 * i - 2]"
              :key="i*100"
            />
            <smallCart :article="articles[4 * i - 1]" :key="i*528" />
          </div>
        </div>
        
      </VueSlickCarousel>
    </div>
        <div id="sliderSection" class="width80 margin-auto showInMobile" v-if="showSlider">
      <VueSlickCarousel
      >
     
        <div
          v-for="(item,index) in articles"
          :key="item"
          class="sliderItem"
        >
            <wideCart
              :showComment="false"
              class="width60"
              :article="item"
              :key="index"
            />
        </div>
      </VueSlickCarousel>
    </div>
    <footerLinker :data="articleHeader" />
  </div>
</template>
<script>
import footerLinker from "@/components/front/shared/footerLink.vue";
import VueSlickCarousel from "vue-slick-carousel";
import sectionHeader from "@/components/front/shared/sectionHeader.vue";
import wideCart from "@/components/front/blogs/weblogCart.vue";
import smallCart from "@/components/front/home/articles/smallCart.vue";
export default {
  components: {
    sectionHeader,
    smallCart,
    footerLinker,
    wideCart,
    VueSlickCarousel
  },
  props:{
    articles:Array
  },
  data() {
    return {
      mobileSize:false,
      articleLength: 0,
      showSlider: false,
      articleHeader: {
        route: "/",
        routeTitle: "مشاهده آرشیو مقالات",
        title: "مقــــــالات گــــــروه مارگاریــــــن",
        summary: "بـــا مـــا همیشـــه بـــروز باشیـــد",
        image: true
      },
      // articles: [
      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",
      //     title: "31 خاصیت منحصر‌به‌فرد چای سیاه برای سلامتی بدن، پوست و مو",
      //     date: "26 مرداد ماه 1400",
      //     comment: "45"
      //   },
      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "درمان کبد چرب؛ رژیم غذایی مناسب و روش‌های خانگی اثربخش",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "25 میان‌وعده‌ی خوشمزه که کمتر از 100 کیلوکالری انرژی دارند",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "آشپزی بدون پسماند چیست و چطور انجام می‌شود؟",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",
      //     title: "31 خاصیت منحصر‌به‌فرد چای سیاه برای سلامتی بدن، پوست و مو",
      //     date: "26 مرداد ماه 1400",
      //     comment: "45"
      //   },
      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "درمان کبد چرب؛ رژیم غذایی مناسب و روش‌های خانگی اثربخش",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clip_li5.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "25 میان‌وعده‌ی خوشمزه که کمتر از 100 کیلوکالری انرژی دارند",
      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   },

      //   {
      //     image: "https://s4.uupload.ir/files/clipa_nmye.png",
      //     category: "دسته بندی مقالات زندگی و سلامت",

      //     title: "آشپزی بدون پسماند چیست و چطور انجام می‌شود؟",

      //     date: "26 مرداد ماه 1400",
      //     comment: "36"
      //   }
      // ]
    };
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    setStyle() {
      if (screen.width> 1000) {
        if(screen.width>1495){
this.$root.setProportionStyle(
          "right",
          "%",
          "#sliderSection .slick-next",
          1920,
          76,
          1496,
          70
        );
        }else{
this.$root.setProportionStyle(
          "right",
          "%",
          "#sliderSection .slick-next",
          1496,
          70,
          1024,
          60
        );
        }
        this.mobileSize=false;
        // #sliderSection .slick-prev, #sliderSection .slick-next
        this.$root.setProportionStyle(
          "width",
          "px",
          "#sliderSection .slick-prev",
          1496,
          50,
          1024,
          45
        );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#sliderSection .slick-next",
          1496,
          50,
          1024,
          45
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#sliderSection .slick-prev",
          1496,
          50,
          1024,
          45
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#sliderSection .slick-next",
          1496,
          50,
          1024,
          45
        );
        this.$root.setProportionStyle(
          "top",
          "%",
          "#sliderSection .slick-prev",
          1496,
          -9,
          1024,
          -11
        );
        this.$root.setProportionStyle(
          "top",
          "%",
          "#sliderSection .slick-next",
          1496,
          -9,
          1024,
          -11
        );
        this.$root.setProportionStyle(
          "left",
          "%",
          "#sliderSection .slick-prev",
          1496,
          20,
          1024,
          25
        );
        
        //
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #articles #sliderSection .sliderItem .smallCart .innerContent .content p",
          1496,
          12,
          1024,
          10
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #articles #sliderSection .sliderItem .wideCart .innerContent .content p",
          1496,
          12,
          1024,
          10
        );
        // ,
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #articles #sliderSection .sliderItem .smallCart .innerContent .content h1",
          1496,
          20,
          1024,
          14
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#homeSection #articles #sliderSection .sliderItem .wideCart .innerContent .content h1",
          1496,
          20,
          1024,
          14
        );
      }else{
        this.mobileSize=true;
  this.$root.setProportionStyle(
          "font-size",
          "px",
          "#articles #sectionHeader #text div h1",
          1000,
          32,
          425,
          20
        );
      }
    }
  },
  mounted() {
    this.articleLength = Math.floor(this.articles.length / 4);
    this.showSlider = true;
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  }
};
</script>
<style>
.firstRow {
  margin-bottom: 3%;
}

#sliderSection .slick-prev:before,
#sliderSection .slick-next:before {
  opacity: 1;
}
#sliderSection .slick-prev {
  top: -8%;
  left: 14%;
}
#sliderSection .slick-next {
  top: -8%;
  right: 76%;
}
#sliderSection .slick-prev,
#sliderSection .slick-next {
  background: white;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  box-shadow: 0 0 18px #00000059;
  cursor: pointer;
  z-index: 100;
}
#sliderSection .slick-prev:before,
#sliderSection .slick-next:before {
  color: black;
  font-size: 15px;
}
#sliderSection .slick-prev:before {
  content: url("../../../assets/front/images/leftArrowHomeSlider.svg");
}
#sliderSection .slick-next:before {
  content: url("../../../assets/front/images/RightArrowHomeSlider.svg");
}
#sliderSection .slick-disabled {
  border: 5px solid #ebebeb;
  box-shadow: none;
}
</style>
