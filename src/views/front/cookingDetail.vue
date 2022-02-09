<template>
  <div v-if="cookingData" id="blogDetailSection" class="width80 margin-auto">
    <introduction :data="introduction">
      <div id="headerBlog" class="d-flex flex-direction-column align-items-end slotElements blackColor06">
        <p class="cookingTitle">
          {{ cooking.title }}
        </p>
        <div class="headerBlogOption d-flex justify-content-between">
          <div class="d-flex justify-content-between align-items-center width30">
            <p class="d-flex flex-direction-column align-items-center">
              <span>اشتراک گذاری</span>
              <span>در شبکه های اجتماعی</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="90"
              height="90"
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
          <div class="d-flex justify-content-between align-items-center width30">
            <p class="d-flex flex-direction-column align-items-center">
              <span>تاریخ انتشار</span>
              <span>{{ cooking.date }}</span>
            </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="90"
                height="90"
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
          <div class="d-flex justify-content-end align-items-center width30">
            <p class="d-flex flex-direction-column align-items-center">
              <span>زمان مطالعه</span>
              <span>{{ cooking.readyTime }}</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
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
    <div class="ckEditorOutput" v-html="cooking.html"></div>
   
    <commentBox :comments="cooking.comments" />
  </div>
  <Loader v-else />
</template>
<script>
import commentBox from "@/components/front/shared/commentBox.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from '@/components/front/shared/loader.vue';
export default {
  components: {
    introduction,
    commentBox,
    Loader
  },
  data() {
    return {
     
     
      blogDetailHeader: {
        route: "/",
        routeTitle: "مشاهده آرشیو مقالات",
        title: "اخــــبار , مقــــالات مرتبــــط",
        summary: "بـــا مـــا همیشـــه بـــروز باشیـــد",
        image: false
      },
      introduction: {
        image:
          "https://s4.uupload.ir/files/clipcooking_7sw0.png",
        routes: [
          { route: "", routeTitle: "دستورات پخت" }
        ],
        title: "کــــوردن بــــلو مــــرغ",
        summary: "ســـرآشپز هـــادی محمـــدی"
      },
      cooking: {
        title:
          "برای درست کردن کوردن بلو باید ابتدا استخوان سینه مرغ را جدا کنید و کف دستتان را روی سینه مرغ بگذارید و با یک چاقوی تیز از کنار به صورت عرضی آن را برش دهید و به دو قسمت تقسیم کنید. هر دو طرف برش ها را به نمک و فلفل آغشته کنید .",
        readyTime: "12 دقیقه",
        html: "",
        date: "26 اردیبهشت ماه 1400",
        tags: [
          { title: "تغذیه و سلامت" },
          { title: "بهداشت فردی" },
          { title: "بیماری یائسگی" }
        ],
        comments: [
          {
            id: "1",
            image: "https://s4.uupload.ir/files/rounded_rectangle_3sdsdsd_copy_90e.png",
            fullName: "سعید دهقان",
            date: "26 دی 1396",
            rate: 3.6,
            comment:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            answer: [
              {
                id: "10",
                image: null,
                fullName: "سعید دهقان",
                date: "26 دی 1396",
                rate: 4,
                comment:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
              }
            ]
          },

          {
            id: "2",
            image: null,
            rate: 3.6,
            fullName: "سعید دهقان",
            date: "26 دی 1396",
            comment:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            answer: null
          },
          {
            id: "3",
            image: null,
            fullName: "سعید دهقان",
            date: "26 دی 1396",
            rate:4,
            comment:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            answer: null
          }
        ]
      }
    };
  },
    //  metaInfo() {
  //   return {
  //     title: this.blogData?this.blogData.title:"جزئیات پست",
  //     meta: [
  //       {
  //         name: "description",
  //         content: this.blogData ? this.blogData.meta : false
  //       },
  //       {
  //         property: "og:title",
  //         content: this.blogData?this.blogData.title:"جزئیات پست"
  //       },
  //       { name: "robots", content: "index,follow" }
  //     ]
  //   };
  // },
  computed:{
    cookingData(){
      return this.$store.getters.getCookingData;
    }
  },
  mounted() {
   if(this.cookingData==null){
     this.$store.dispatch("getCookingFromServer",this.$route.params.id);
   }
  }
};
</script>
<style>
#relatedBlogs .slick-prev:before,
#relatedBlogs .slick-next:before {
  opacity: 1;
}
#relatedBlogs .slick-prev{
      top: -10%;
    left: 5%;
}

#relatedBlogs .slick-next{
      right: 84%;
    top: -10%;
}
#relatedBlogs .slick-prev,
#relatedBlogs .slick-next {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
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
</style>
