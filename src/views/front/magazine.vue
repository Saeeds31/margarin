<template>
  <main v-if="blogsData != null" id="blogsSection" class="width80 margin-auto">
    <introduction
      :title="getTitle()"
      :summary="blogsData.data.magazineIntro.title"
      :image="$root.baseImageUrl + blogsData.data.magazineIntro.image"
      :routes="routes"
    >
      <p class="slotElements">
        {{ blogsData.data.magazineIntro.text }}
      </p>
    </introduction>
    
    <section
      id="weblogsList"
      class="width100 d-flex f-wrap justify-content-between"
    >
      <weblogCart
        :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        :showComment="false"
        v-for="(weblog, index) in blogsData.data.magazines"
        :article="weblog"
        :key="index"
      />
    </section>
    <section id="weblogPagination">
      <pagination
        v-if="blogsData.pagination.TotalPages > 1"
        :totalPages="blogsData.pagination.TotalPages"
        :currentPage="blogsData.pagination.CurrentPage"
        @pageChanged="pageChanged"
      />
    </section>
  </main>
  <loader v-else />
</template>
<script>
import pagination from "@/components/front/shared/pagination.vue";
import weblogCart from "@/components/front/magazine/weblogCart.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    Loader,
    introduction,
    weblogCart,
    pagination
  },
  data() {
    return {

      routes: [{ route: "", routeTitle_fa: "مجله آفتاب", routeTitle_en: "magazine" }]
    };
  },
  watch: {
    blogsData() {
      setTimeout(() => {
        this.setStyle();
      }, 500);
    },
    "$route.query": {
      handler(value) {
        if (Object.keys(value).length == 0) return;
        let pack = {
          page: value.page ? value.page : 1,
        };
          // this.$store.dispatch("getMagazineFromServer", pack);
      this.checkRequest('getMagazineFromServer',JSON.stringify(pack));

      },
      deep: true,
      immediate: true
    }
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "magazine-margarin"
        : "مارگارین - مجله آفتاب",
      meta: [
        {
          name: "description",
          content: this.blogsData ? this.blogsData.data.magazineIntro.text : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "magazine-margarin"
            : "مارگارین - مجله آفتاب"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    blogsData() {
      return this.$store.getters.getMagazineData;
    }
  },
  mounted() {
    if (this.blogsData == null) {
      let pack = {
        page: this.$route.query.page ? this.$route.query.page : 1,
      };
      // this.$store.dispatch("getMagazineFromServer", pack);
      this.checkRequest('getMagazineFromServer',JSON.stringify(pack));
      
    } else {
      this.setStyle();
    }
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    getTitle() {
      
        if (this.$cookie.get("ltrTheme")) return "Aftab Magazine";
        else return "مجله آفتاب";
      
    },
    pageChanged(page) {
      this.$router.replace({
        name: "magazine",
        query: {
          page: page,
        }
      });

      document
        .getElementById("weblogsList")
        .scrollIntoView({ behavior: "smooth" });
    },
  
    setStyle() {
      if (window.innerWidth > 1000) {
        // this.$root.setProportionStyle(
        //   "width",
        //   "%",
        //   "#blogsSection #weblogsList .blogCart",
        //   1920,
        //   49,
        //   1496,
        //   48
        // );
        this.$root.unsetInlineStyle(
          "font-size",
          "#blogsSection #weblogsList .blogCart .innerContent .content h1"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#blogsSection #weblogsList .blogCart .innerContent .content p"
        );
      } else {
        // this.$root.setProportionStyle(
        //   "width",
        //   "%",
        //   "#blogsSection #weblogsList .blogCart",
        //   999,
        //   60,
        //   375,
        //   96
        // );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#blogsSection #weblogsList .blogCart .innerContent .content h1",
          999,
          20,
          375,
          16
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#blogsSection #weblogsList .blogCart .innerContent .content p",
          999,
          12,
          375,
          8
        );
      }
    }
  }
};
</script>
<style>
#weblogsList .blogCart .innerContent {
  height: 100%;
}
#weblogsList .blogCart .innerContent img {
  height: 100%;
}
#blogsSection .slotElements {
  margin-top: 23%;
}
</style>
