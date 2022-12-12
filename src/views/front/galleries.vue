<template>
  <main
    v-if="galleryData != null"
    id="blogsSection"
    class="width80 margin-auto"
  >
    <introduction
      :title="getTitle()"
      :summary="galleryData.intro.title"
      :image="$root.baseImageUrl + galleryData.intro.image"
      :routes="routes"
    >
      <p class="slotElements">
        {{ galleryData.intro.text }}
      </p>
    </introduction>
    <section id="galleries">
      <div
        @click="setIndex(index)"
        v-for="(item, index) in galleryData.galleries"
        :key="index"
      >
        <img :src="$root.baseImageUrl + item.image" :alt="item.title" />
        <h3>{{ item.title}}</h3>
      </div>
    </section>
    <vue-gallery-slideshow
      :images="images"
      :index="index"
      @close="index = null"
    ></vue-gallery-slideshow>
  </main>
  <loader v-else />
</template>
<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

import introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    Loader,
    introduction,
    VueGallerySlideshow,
  },
  data() {
    return {
      images: [],
      index:null,
      routes: [{ route: "", routeTitle_fa: "گالری", routeTitle_en: "Gallery" }],
    };
  },

  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "Gallery-margarin"
        : "مارگارین - تصویر ها",
      meta: [
        {
          name: "description",
          content: this.galleryData ? this.galleryData.intro.text : false,
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "Gallery-margarin"
            : "مارگارین - تصویر ها",
        },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
  watch: {
    galleryData(newV) {
      let fakeThis = this;
      newV.galleries.forEach((element) => {
        fakeThis.images.push(fakeThis.$root.baseImageUrl + element.image);
      });
    },
  },
  computed: {
    galleryData() {
      return this.$store.getters.getGalleryData;
    },
  },
  mounted() {
    if (this.galleryData == null) {
      // this.$store.dispatch("getGalleriesDataFromServer");
      this.checkRequest("getGalleriesDataFromServer", null);
    }
  },

  methods: {
      setIndex(index){
          this.index=index
      },
    getTitle() {
      if (this.$cookie.get("ltrTheme")) return "Galleries Archive";
      else return "آرشیو تصاویر";
    },
  },
};
</script>
<style>
.vgs{
    z-index: 100000000 !important;
}</style>
