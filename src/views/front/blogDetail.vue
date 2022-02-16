<template>
  <div v-if="blogData" id="blogDetailSection" class="width80 margin-auto">
    <introduction
       :title="$cookie.get('ltrTheme')?'News, Articles and Announcements':'اخــــبار , مقــــالات و اطلاعیــه'"
      :summary="$cookie.get('ltrTheme')?'Follow our useful content':'مــطاب مفیــد مارا دنبــال کنیــد'"
      :image="$root.baseImageUrl+this.blogData.image"
      :routes="routes">
      <div
        id="headerBlog"
        class="d-flex flex-direction-column align-items-end slotElements blackColor06"
      >
        <p class="imageBoxMobile">
          <img class="showInMobile width100" :src="$root.baseImageUrl+blogData.image" :alt="blogData.title" />
          <span>
            {{ blogData.title }}
          </span>
        </p>
        <div class="headerBlogOption d-flex justify-content-between">
          <div
            class="d-flex justify-content-between align-items-center "
          >
            <p @click="shareBlog()" class="d-flex flex-direction-column align-items-center">
              <span>{{$cookie.get('ltrTheme')?"share":'اشتراک گذاری'}}</span>
              <span>{{$cookie.get('ltrTheme')?"On social networks":'در شبکه های اجتماعی'}}</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="70"
              height="70"
              viewBox="0 0 60 60"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.789"
                  y1="1"
                  x2="0.211"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f7941e" />
                  <stop offset="1" stop-color="#f0aa56" />
                </linearGradient>
              </defs>
              <g
                id="Group_1aaaaaaaaa"
                data-name="Group 1aaaaaaaaa"
                transform="translate(-1079 -776)"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="30"
                  cy="30"
                  r="30"
                  transform="translate(1079 776)"
                  fill="url(#linear-gradient)"
                />
                <image
                  id="Layer_2709"
                  data-name="Layer 2709"
                  width="24"
                  height="24"
                  transform="translate(1097 794)"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAflJREFUSEutlk8oZVEcx8fQjMhKY5KxUiLKnzTDwsKYhZBoFnaSTJOEkmJhZp7FNCxmYqHJn6UNpVCaMaT8yUYpUxobZfEiLJUs5Pl8dW49r3ed+96dW59+9537O9/vuef8zrkvIRQKPfF5FdP/C5TBc9iDMfgl3QSfBi1oTMGzKIMcoW3Aj0EOAvuQ+sgM1Pox+I5wr2V6V/wYrCNeZTG4iMcgDdFLWINqi0EwFoOXiPVDG2RDH3y2GCyEGxSR3AGlcA27pkIOiXUwBylGsJm4AX8hw8XkhvY3jkEnP35AZLldmREvGcMCI3ZELAHV/iy8iDDRALtgWgavudmBRJeRaL5zoRBWTc4t8aMEIB26oQKSQRttAv4pVwaLxAYXcac5wM1XOAct7hAcWPrcP5ZBkJhlSV7geRNooc+8CDs5MlAHt4Vy8pa5qQctstbF8yUDHUo1lh7feD4Ix6C3GYYTLy4yeEfiH02XSwdVRL6Zxm2To7YPMAPWRVafAGjTRJqolntgErag3BicErVvVFnWMnUG/pYblVv4Rhvnt0q4EebhqUluJf4GzxvNZXYeNOeZt3xPzDRvFtNR4cVEOa9Apf3fD7vIAWzSUGkZVVzHtaM5aqbpMQ9fHxyVrs4dnT9ul69PpkTb4SckRXHw/dF3NFXWnyDq35Y7DCGnL4TvykUAAAAASUVORK5CYII="
                />
              </g>
            </svg>
          </div>
          <div
            class="d-flex justify-content-between align-items-center "
          >
            <p class="d-flex flex-direction-column align-items-center">
              <span>{{$cookie.get('ltrTheme')?"Release date":'تاریخ انتشار'}}</span>
              <span>{{ blogData.createDate }}</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="70"
              height="70"
              viewBox="0 0 60 60"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.789"
                  y1="1"
                  x2="0.211"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f7941e" />
                  <stop offset="1" stop-color="#f0aa56" />
                </linearGradient>
              </defs>
              <g
                id="Group_1aaaaaaasssss"
                data-name="Group 1aaaaaaasssss"
                transform="translate(-1300 -776)"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="30"
                  cy="30"
                  r="30"
                  transform="translate(1300 776)"
                  fill="url(#linear-gradient)"
                />
                <image
                  id="Layer_2708"
                  data-name="Layer 2708"
                  width="24"
                  height="24"
                  transform="translate(1318 794)"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAYRJREFUSEtj/P//vwwDA0MjEEcBMQcQUwP8ABqyDIjrGYEWzAUyktBMfQLk3wFiBzTxS1C+Hpr4ASBfBYhBjkUG80AWfMficm+g2DYgBlkkjaRDHMp+iST2FGqwF5DeimbBD5AF/7GEyT6g2HEgrkaTWwjlx6OJtwL5lkDshG4WLguw2Eme0KgFBMNtwIPoENCJyCmmB+rkEiSng1LWNSDuRBIDJXFNEJ+QD3YC1XggaVwAZScgie0Asi8AcQWSGIivPygseAZ0xW4kl9lA2UeQxFyB7HdAfBZJzA/IFkT3ASj7z0BS5AJkSwDxEiSxACh7A5JYDJD9Aoj3IIllANngYgU5Di4C+QZIijqgfKrFAc0tuAt0cQqSD9KAbFARXIYkBkspIN/BQBeQASraZyGJzQGyldGD6CdQ4AGSIlEgmx2IQUU2DEgCGXxIfIJMcuIAvajGa8nwsABWZf4G+hWUsWAAlFHYgBi5ehQB8rkJBjxCAbjKxFbpk2AGXqXgSp+mzRYApUuvH+Z9+yYAAAAASUVORK5CYII="
                />
              </g>
            </svg>
          </div>
          <div class="d-flex justify-content-end align-items-center ">
            <p class="d-flex flex-direction-column align-items-center">
              <span>{{$cookie.get('ltrTheme')?"Study time":'زمان مطالعه'}}</span>
              <span>{{ blogData.timeToRead+`${$cookie.get('ltrTheme')?"Minutes":'دقیقه'}` }}</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="70"
              height="70"
              viewBox="0 0 60 60"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.789"
                  y1="1"
                  x2="0.211"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f7941e" />
                  <stop offset="1" stop-color="#f0aa56" />
                </linearGradient>
              </defs>
              <g
                id="Group_1asdasdasdaasd"
                data-name="Group 1asdasdasdaasd"
                transform="translate(-1485 -776)"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="30"
                  cy="30"
                  r="30"
                  transform="translate(1485 776)"
                  fill="url(#linear-gradient)"
                />
                <image
                  id="Layer_2707"
                  data-name="Layer 2707"
                  width="24"
                  height="24"
                  transform="translate(1503 794)"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAtZJREFUSEudlVmIj1EYh2ciS5FCiWkyciHlwq6UmrggZUkoZb1B2VOSTI2xTMhyQYgyuFCiJkrIekHZC5Erki3hRpaGaTzP9B59ff0XnHo631ne9/edc97znsq2traKEqU3Y6NgRDCSuhPcy3CX7/fFfFQWEeiAwTqoD4elfuIXg9uhAVryEwsJDGZSE4wu4PVTOOlbYOwRfQvhYXYsLzCfwUPQJSb5dwfhOtyHl9Hfj9ptGwcrMvN/8r0G9ieRrMCgUO8ag0+oF8BjGA/DA8/gQQheoe4PxyCtWJExaSVJwD2/GQP6PwLLQFGNh4XoF+pv0Cfaz6nnheDO+HuH3C6DoyUJbKCxNYzSoH+/D/zjVBbz8Q7OZfrcRrflANyCtBL9bVSgZxjpyChQuRLu5Jzrcw4YktcyAn4qMha+gtvXOfqqFZhI40IY7KZ2Ncb5kJyTUgKOuV1u5WZYG7ZTFaijYQxbpoN7fKmA83ICjk8Bz7M57BsUOBsD9lXBItjynwL12B2GN2F/XgH31Kjw8Ixv1aeVEHA7h+bGu9E28m6H7VtqL+MHBV7xUQ3eUnPPKZhVRMA7sa3AWHf6dsHFsP1I3QteK3CGjxlhNCAm7CgiUK7bADkJL2JiswLraTRGx8xYST4MyzlO45P4cLtOR0edAhNoXI4OL9ZqyN7qv3VukjNFGOrLw2iyAj1oeMDmoHRhTAkapKRXTsQL6lthiPo+dAT7qlKqWEVjb3h5Rm1imw3ZzFpMREf+8dFwniLM82hMAqaGq1AbXo5TL4EaaAKXXqiYcefCU9gDJkiLacbU0ZpN1zoz0RlyFldiwjO3mPfNUWLOchvkBgyEE+CqLT/iW/uK/INjuDZlRP71wfmO7VJwB9pLoSezhn73szZNytSlnkxvsSs26f0pxR59z2QleD/SC1dAr73LQ94EPvyt+UnFBNI8Q9jwS/ufzsBD9AxS/bmY+m+6RerADqOULAAAAABJRU5ErkJggg=="
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </introduction>
    <p class="blogDescription">{{ blogData.shortDescription }}</p>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
        data-aos-delay="500"
      data-aos-once="true"
      class="ckEditorOutput"
      v-html="blogData.description"
    ></div>
    <tagsBox
    v-if="blogData.keyWords!=null"
      data-aos="fade-right"
        data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-once="true"
      :tags="blogData.keyWords.split(',')"
    />
    <sectionHeader :data="blogDetailHeader"> </sectionHeader>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
        data-aos-delay="500"
      class="hiddenInMobile"
      id="relatedBlogs"
    >
      <VueSlickCarousel v-bind="sliderSettings">
        <cart
          v-for="(blog, index) in blogData.related"
          :key="index"
          :article="blog"
          :showComment="true"
        />
      </VueSlickCarousel>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
        data-aos-delay="500"
      data-aos-once="true"
      class="showInMobile"
      id="relatedBlogs"
    >
      <VueSlickCarousel v-bind="sliderSettings">
        <cartMobile
          v-for="(blog, index) in blogData.related"
          :key="index"
          :article="blog"
          :showComment="true"
        />
      </VueSlickCarousel>
    </div>
    <commentBox   data-aos="fade-up"
        data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-once="true" :likeRoute="'BlogComment'" :field="'blogId'" :routeComment="'BlogComment'" :comments="blogData.comments" />
  </div>
  <loader v-else />
</template>
<script>
import commentBox from "@/components/front/shared/commentBox.vue";
import cart from "@/components/front/blogs/weblogCart.vue";
import cartMobile from "@/components/front/blogs/weblogCartMobile.vue";
import VueSlickCarousel from "vue-slick-carousel";
import sectionHeader from "@/components/front/shared/sectionHeader.vue";
import tagsBox from "@/components/front/blogDetail/tagsBox.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from '@/components/front/shared/loader.vue';
export default {
  components: {
    introduction,
    tagsBox,
    sectionHeader,
    VueSlickCarousel,
    cart,
    cartMobile,
    commentBox,
    Loader
  },
  data() {
    return {
    
      sliderSettings: {
        dots: false,
        arrows: true,
        edgeFriction: 0.35,
        infinite: false,
        autoPlay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "20px",
              focusOnSelect: true,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      },
      blogDetailHeader: {
        route: "/weblogs",
        routeTitle:this.$cookie.get('ltrTheme')?"View article archive": "مشاهده آرشیو مقالات",
        title:this.$cookie.get('ltrTheme')?"News, related articles": "اخــــبار , مقــــالات مرتبــــط",
        summary:this.$cookie.get('ltrTheme')?"Always be up to date with us": "بـــا مـــا همیشـــه بـــروز باشیـــد",
        image: false
      },
            routes:[{ route: "", routeTitle_fa: "جزئیات", routeTitle_en:"Detail"}],

      
    };
  },
  computed: {
    screenSize() {
      return this.$root.screenSize;
    },
    blogData() {
    return  this.$store.getters.getBlogData;
    }
  },
  watch: {
    '$route.params.id':{
      handler(){
      this.$store.dispatch("getBlogFromServer", this.$route.params.id);
      document.getElementById("blogDetailSection").scrollIntoView({behavior:'smooth'})

      }
    },
    blogData() {
      setTimeout(() => {
        this.setStyle();
      }, 500);
    }
  },
  mounted() {
    if (this.blogData == null) {
      this.$store.dispatch("getBlogFromServer", this.$route.params.id);
    } else {
      this.setStyle();
    }
    window.addEventListener("resize", this.setStyle);
  },
    metaInfo() {
    return {
      title: this.blogData?this.blogData.title:"جزئیات پست",
      meta: [
        {
          name: "description",
          content: this.blogData ? this.blogData.meta : false
        },
        {
          property: "og:title",
          content: this.blogData?this.blogData.title:"جزئیات پست"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    // set style to same hieght
shareBlog(){
   window.open(`whatsapp://send?text=${window.location.href}`,'_blank');  
},
    setStyle() {
      // setTimeout(() => {
      //   this.$root.setSliderHeight("#relatedBlogs .blogCart .innerContent img");
      // });
      if (screen.width > 1000) {
        if (screen.width > 1495) {
          this.$root.unsetInlineStyle(
            "width",
            "#blogDetailSection #commentBox .titleBox .content"
          );

          // this.$root.setProportionStyle("top","%","#relatedBlogs .slick-prev",1920,-13,1496,-10);
          this.$root.setProportionStyle(
            "margin-top",
            "%",
            "#blogDetailSection #introductionSection #headerBlog",
            1920,
            30,
            1496,
            20
          );
          this.$root.setProportionStyle(
            "margin-top",
            "%",
            "#blogDetailSection #introductionSection",
            1920,
            9,
            1496,
            7
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#blogDetailSection #tagsSection #staticText span:last-child",
            1920,
            17,
            1496,
            14
          );
        } else {
          this.$root.setProportionStyle(
            "width",
            "%",
            "#blogDetailSection #commentBox .titleBox .content",
            1495,
            25,
            1100,
            30
          );

          // this.$root.unsetInlineStyle('top','#relatedBlogs .slick-next')
          // this.$root.unsetInlineStyle('top','#relatedBlogs .slick-prev')

          this.$root.setProportionStyle(
            "margin-top",
            "%",
            "#blogDetailSection #introductionSection",
            1495,
            7,
            1100,
            2
          );
          this.$root.unsetInlineStyle(
            "margin-top",
            "#blogDetailSection #introductionSection #headerBlog"
          );
          this.$root.unsetInlineStyle(
            "font-size",
            "#blogDetailSection #tagsSection #staticText span:last-child"
          );
        }
        this.$root.unsetInlineStyle(
          "width",
          "#blogDetailSection #introductionSection #content .innerContent #headerBlog .imageBoxMobile"
        );
      } else {
        setTimeout(() => {
          this.$root.setSliderHeight(
            "#relatedBlogs .blogCartMobile .innerContent img"
          );
        });
        this.$root.unsetInlineStyle(
          "width",
          "#blogDetailSection #commentBox .titleBox .content"
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#blogDetailSection #introductionSection #content .innerContent #headerBlog .imageBoxMobile",
          999,
          50,
          375,
          90
        );

        this.$root.unsetInlineStyle(
          "margin-top",
          "#blogDetailSection #introductionSection"
        );

        this.$root.unsetInlineStyle(
          "margin-top",
          "#blogDetailSection #introductionSection #headerBlog"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#blogDetailSection #tagsSection #staticText span:last-child"
        );
      }
    }
  }
};
</script>
<style>
#relatedBlogs .slick-prev:before,
#relatedBlogs .slick-next:before {
  opacity: 1;
}
#relatedBlogs .slick-prev {
  top: -11%;
  left: 5%;
}

#relatedBlogs .slick-next {
  right: 84%;
  top: -11%;
}
#relatedBlogs .slick-prev,
#relatedBlogs .slick-next {
  background: white;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  top: -75px;
  box-shadow: 0 0 18px #00000059;
  cursor: pointer;
}
#relatedBlogs .slick-prev:before,
#relatedBlogs .slick-next:before {
  color: black;
  font-size: 15px;
}
#relatedBlogs .slick-prev:before {
  content: url("../../assets/front/images/leftArrowHomeSlider.svg");
}
#relatedBlogs .slick-next:before {
  content: url("../../assets/front/images/RightArrowHomeSlider.svg");
}
#relatedBlogs .slick-disabled {
  border: 5px solid #ebebeb;
  box-shadow: none;
}
#blogDetailSection {
  overflow: hidden;
}
#relatedBlogs .slick-slide {
  padding: 30px;
}
#relatedBlogs .blogCart {
  box-shadow: 0 0 40px #00000040;
}
#relatedBlogs .blogCart .innerContent {
  border-radius: 10px;
}

@media (max-width: 1000px) {
  #blogDetailSection #introductionSection #content #imageBox {
    display: none !important;
  }
  #blogDetailSection #introductionSection #headerBlog.slotElements {
    margin-top: 0 !important;
  }
  #blogDetailSection #introductionSection #headerBlog.slotElements p a {
    background: white;
    box-shadow: 0 0 40px #00000040;
    padding: 30px;
  }
}
</style>
