<template>
  <main
    v-if="cookingData"
    id="blogDetailSection"
    class="width80 margin-auto cookingDetail"
  >
    <introduction
      :title="cookingData.title"
      :summary="cookingData.userInfo"
      :image="$root.baseImageUrl + cookingData.image"
      :routes="routes"
    >
      <div
        id="headerBlog"
        class="d-flex flex-direction-column align-items-end slotElements blackColor06"
      >
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
          class="cookingTitle"
        >
          {{ cookingData.shortDescription }}
        </p>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-once="true"
          class="headerBlogOption d-flex justify-content-between"
        >
          <div
            @click="shareCooking()"
            class="d-flex justify-content-between align-items-center width30"
          >
            <p class="shareBox d-flex flex-direction-column align-items-center">
              <span>{{
                $cookie.get("ltrTheme") ? "Share" : "اشتراک گذاری"
              }}</span>
              <span>{{
                $cookie.get("ltrTheme")
                  ? "On social networks"
                  : "در شبکه های اجتماعی"
              }}</span>
            </p>
            <a class="cookingDetailSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <image
                  id="Layer_2709"
                  data-name="Layer 2709"
                  width="24"
                  height="24"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAflJREFUSEutlk8oZVEcx8fQjMhKY5KxUiLKnzTDwsKYhZBoFnaSTJOEkmJhZp7FNCxmYqHJn6UNpVCaMaT8yUYpUxobZfEiLJUs5Pl8dW49r3ed+96dW59+9537O9/vuef8zrkvIRQKPfF5FdP/C5TBc9iDMfgl3QSfBi1oTMGzKIMcoW3Aj0EOAvuQ+sgM1Pox+I5wr2V6V/wYrCNeZTG4iMcgDdFLWINqi0EwFoOXiPVDG2RDH3y2GCyEGxSR3AGlcA27pkIOiXUwBylGsJm4AX8hw8XkhvY3jkEnP35AZLldmREvGcMCI3ZELAHV/iy8iDDRALtgWgavudmBRJeRaL5zoRBWTc4t8aMEIB26oQKSQRttAv4pVwaLxAYXcac5wM1XOAct7hAcWPrcP5ZBkJhlSV7geRNooc+8CDs5MlAHt4Vy8pa5qQctstbF8yUDHUo1lh7feD4Ix6C3GYYTLy4yeEfiH02XSwdVRL6Zxm2To7YPMAPWRVafAGjTRJqolntgErag3BicErVvVFnWMnUG/pYblVv4Rhvnt0q4EebhqUluJf4GzxvNZXYeNOeZt3xPzDRvFtNR4cVEOa9Apf3fD7vIAWzSUGkZVVzHtaM5aqbpMQ9fHxyVrs4dnT9ul69PpkTb4SckRXHw/dF3NFXWnyDq35Y7DCGnL4TvykUAAAAASUVORK5CYII="
                />
              </svg>
            </a>
          </div>
          <div
            class="d-flex justify-content-between align-items-center width30"
          >
            <p class="d-flex flex-direction-column align-items-center">
              <span>{{
                $cookie.get("ltrTheme") ? "Published At" : "تاریخ انتشار"
              }}</span>
              <span>{{ cookingData.createDate }}</span>
            </p>
            <a class="cookingDetailSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <image
                  id="Layer_2708"
                  data-name="Layer 2708"
                  width="24"
                  height="24"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAYRJREFUSEtj/P//vwwDA0MjEEcBMQcQUwP8ABqyDIjrGYEWzAUyktBMfQLk3wFiBzTxS1C+Hpr4ASBfBYhBjkUG80AWfMficm+g2DYgBlkkjaRDHMp+iST2FGqwF5DeimbBD5AF/7GEyT6g2HEgrkaTWwjlx6OJtwL5lkDshG4WLguw2Eme0KgFBMNtwIPoENCJyCmmB+rkEiSng1LWNSDuRBIDJXFNEJ+QD3YC1XggaVwAZScgie0Asi8AcQWSGIivPygseAZ0xW4kl9lA2UeQxFyB7HdAfBZJzA/IFkT3ASj7z0BS5AJkSwDxEiSxACh7A5JYDJD9Aoj3IIllANngYgU5Di4C+QZIijqgfKrFAc0tuAt0cQqSD9KAbFARXIYkBkspIN/BQBeQASraZyGJzQGyldGD6CdQ4AGSIlEgmx2IQUU2DEgCGXxIfIJMcuIAvajGa8nwsABWZf4G+hWUsWAAlFHYgBi5ehQB8rkJBjxCAbjKxFbpk2AGXqXgSp+mzRYApUuvH+Z9+yYAAAAASUVORK5CYII="
                />
              </svg>
            </a>
          </div>
          <div class="d-flex justify-content-end align-items-center width30">
            <p class="d-flex flex-direction-column align-items-center">
              <span>{{
                $cookie.get("ltrTheme") ? "Study time" : "زمان مطالعه"
              }}</span>
              <span>{{
                `${cookingData.timeToRead}  ${
                  $cookie.get("ltrTheme") ? "Minute" : "دقیقه"
                }`
              }}</span>
            </p>
            <a class="cookingDetailSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <image
                  id="Layer_2707"
                  data-name="Layer 2707"
                  width="24"
                  height="24"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAtZJREFUSEudlVmIj1EYh2ciS5FCiWkyciHlwq6UmrggZUkoZb1B2VOSTI2xTMhyQYgyuFCiJkrIekHZC5Erki3hRpaGaTzP9B59ff0XnHo631ne9/edc97znsq2traKEqU3Y6NgRDCSuhPcy3CX7/fFfFQWEeiAwTqoD4elfuIXg9uhAVryEwsJDGZSE4wu4PVTOOlbYOwRfQvhYXYsLzCfwUPQJSb5dwfhOtyHl9Hfj9ptGwcrMvN/8r0G9ieRrMCgUO8ag0+oF8BjGA/DA8/gQQheoe4PxyCtWJExaSVJwD2/GQP6PwLLQFGNh4XoF+pv0Cfaz6nnheDO+HuH3C6DoyUJbKCxNYzSoH+/D/zjVBbz8Q7OZfrcRrflANyCtBL9bVSgZxjpyChQuRLu5Jzrcw4YktcyAn4qMha+gtvXOfqqFZhI40IY7KZ2Ncb5kJyTUgKOuV1u5WZYG7ZTFaijYQxbpoN7fKmA83ICjk8Bz7M57BsUOBsD9lXBItjynwL12B2GN2F/XgH31Kjw8Ixv1aeVEHA7h+bGu9E28m6H7VtqL+MHBV7xUQ3eUnPPKZhVRMA7sa3AWHf6dsHFsP1I3QteK3CGjxlhNCAm7CgiUK7bADkJL2JiswLraTRGx8xYST4MyzlO45P4cLtOR0edAhNoXI4OL9ZqyN7qv3VukjNFGOrLw2iyAj1oeMDmoHRhTAkapKRXTsQL6lthiPo+dAT7qlKqWEVjb3h5Rm1imw3ZzFpMREf+8dFwniLM82hMAqaGq1AbXo5TL4EaaAKXXqiYcefCU9gDJkiLacbU0ZpN1zoz0RlyFldiwjO3mPfNUWLOchvkBgyEE+CqLT/iW/uK/INjuDZlRP71wfmO7VJwB9pLoSezhn73szZNytSlnkxvsSs26f0pxR59z2QleD/SC1dAr73LQ94EPvyt+UnFBNI8Q9jwS/ufzsBD9AxS/bmY+m+6RerADqOULAAAAABJRU5ErkJggg=="
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </introduction>
    <section v-if="cookingData.ingridients.length > 0" id="rawMaterial">
      <h3>
        {{
          $cookie.get("ltrTheme")
            ? "List of required raw materials"
            : "لیست مواد اولیه مورد نیاز"
        }}
      </h3>
      <div class="d-flex align-items-center justify-content-end material">
        <div v-for="(mate, index) in cookingData.ingridients" :key="index">
          <p>
            <span>{{ mate.title }}</span>
            <span>{{ mate.amount }}</span>
          </p>
          <img :src="$root.baseImageUrl + mate.image" :alt="mate.title" />
        </div>
      </div>
    </section>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="1000"
      data-aos-once="true"
      class="ckEditorOutput"
      v-html="cookingData.description"
    ></div>

    <commentBox
      :likeRoute="'RecipeComment'"
      :field="'recipeId'"
      :routeComment="'RecipeComment'"
      :comments="cookingData.comments"
    />
  </main>
  <Loader v-else />
</template>
<script>
import commentBox from "@/components/front/shared/commentBox.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    introduction,
    commentBox,
    Loader,
  },
  data() {
    return {
      routes: [
        {
          route: "",
          routeTitle_fa: "دستورات پخت",
          routeTitle_en: "Baking instructions",
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: this.cookingData ? this.cookingData.title : "جزئیات آشپزی",
      meta: [
        {
          name: "description",
          content: this.cookingData ? this.cookingData.meta : false,
        },
        {
          property: "og:title",
          content: this.cookingData ? this.cookingData.title : "جزئیات آشپزی",
        },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
  methods: {
    shareCooking() {
      window.open(
        `https://wa.me/?text=${this.$root.domainName + this.$route.path}`,
        "_blank"
      );

      //  navigator.share({
      //     title: this.cookingData ? this.cookingData.title:"پست مارگارین",
      //     text: this.cookingData ? this.cookingData.shortDescription:"این مطلب آشپزی رو حتما بخون",
      //     url:this.$root.domainName+this.$route.path,
      //   })
      //       .then(() => {})
      //       .catch((error) => console.error(error));
    },
  },
  computed: {
    cookingData() {
      return this.$store.getters.getCookingData;
    },
  },
  created() {
    this.checkRequest(
      "getCookingFromServer",
      JSON.stringify(this.$route.params.id)
    );

    // this.$store.dispatch("getCookingFromServer", this.$route.params.id);
  },
};
</script>
<style scoped>
#blogDetailSection {
  overflow: visible;
}
</style>
<style>
#relatedBlogs .slick-prev:before,
#relatedBlogs .slick-next:before {
  opacity: 1;
}
#relatedBlogs .slick-prev {
  top: -10%;
  left: 5%;
}

#relatedBlogs .slick-next {
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
.shareBox {
  cursor: pointer;
}
</style>
