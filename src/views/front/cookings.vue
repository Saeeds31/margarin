<template>
  <div v-if="cookingsData" id="cookingsSection" class="width100">
    <introduction
      v-if="cookingsData"
      :title="
        $cookie.get('ltrTheme')
          ? 'Archive of Cooking Commands'
          : 'آرشیــــو دســــتورات آشپــــزی'
      "
      :summary="cookingsData.data.cookingArchiveIntro.title"
      :image="$root.baseImageUrl + cookingsData.data.cookingArchiveIntro.image"
      :routes="routes"
      class="width80 margin-auto"
    >
      <p
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        class="slotElements width80 blackColor06"
      >
        {{ cookingsData.data.cookingArchiveIntro.text }}
      </p>
    </introduction>
    <filter-box
      :isDesendingSelected="isDesendingSelected"
      :categorySelected="categorySelected"
      :placeHolder="searchPlaceHolder"
      @filtered="filteredBlogs"
      class="width80 margin-auto"
    />
    <div
      :style="{
        marginBottom: cookingsData.pagination.TotalPages > 1 ? '5%' : '200px'
      }"
      id="cookings"
      class="d-flex justify-content-between width80"
    >
      <cart
        :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        :data="item"
        v-for="(item, index) in cookingsData.data.cookingArchives"
        :key="index"
      />
    </div>
    <pagination
      v-if="cookingsData.pagination.TotalPages > 1"
      :totalPages="cookingsData.pagination.TotalPages"
      :currentPage="cookingsData.pagination.CurrentPage"
      @pageChanged="pageChanged"
    />
  </div>
  <loader v-else />
</template>
<script>
import pagination from "@/components/front/shared/pagination.vue";
import cart from "@/components/front/cookings/cart.vue";
import introduction from "@/components/front/shared/introduction.vue";
import FilterBox from "@/components/front/cookings/filterBox.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    introduction,
    pagination,
    FilterBox,
    cart,
    Loader
  },
  data() {
    return {
      routes: [
        {
          route: "",
          routeTitle_fa: "دستورات پخت",
          routeTitle_en: "Baking orders"
        }
      ],

      cookings: {
        total: 6,
        cookings: [
          {
            chef: "سرآشپز مسعود قلی زاده",
            title: "لازانـــــیا گـــــوشت بـــــا ســـــس",
            time: 19,
            like: 36,
            comment: 19,
            chefImage:
              "https://s4.uupload.ir/files/rounded_rectangle_3sdsdsd_copy_90e.png",
            image: "https://s4.uupload.ir/files/clip2_wdky.png"
          },
          {
            chef: "سرآشپز سید هادی خوئینی",
            title: "کـــــوردن بـــــلو مـــــرغ ",
            time: 19,
            like: 36,
            comment: 19,
            chefImage:
              "https://s4.uupload.ir/files/rounded_rectangle_3sdsdsd_copy_90e.png",
            image: "https://s4.uupload.ir/files/clip2_wdky.png"
          },
          {
            chef: "سرآشپز سید هادی خوئینی",
            title: "رول مـــــرغ کریسپـــــی",
            time: 19,
            like: 36,
            comment: 19,
            chefImage:
              "https://s4.uupload.ir/files/rounded_rectangle_3sdsdsd_copy_90e.png",
            image: "https://s4.uupload.ir/files/clip3_98ml.png"
          },
          {
            chef: "سرآشپز مسعود قلی زاده",
            title: "مـــــک انـــــد چـــــیز آویـــــشن",
            time: 19,
            like: 36,
            comment: 19,
            chefImage:
              "https://s4.uupload.ir/files/rounded_rectangle_3sdsdsd_copy_90e.png",
            image: "https://s4.uupload.ir/files/clip1_vu5s.png"
          }
        ]
      },
      categorySelected: "",
      isDesendingSelected: "",
      searchPlaceHolder: ""
    };
  },
  methods: {
    filteredBlogs(filter) {
      this.$router.replace({
        name: "cookings",
        query: {
          page: this.$route.query.page ? this.$route.query.page : 1,
          category: filter.category ? filter.category : "",
          search: filter.search ? filter.search : "",
          isDesending: filter.isDesending ? filter.isDesending : true
        }
      });
      document
        .getElementById("cookingsSection")
        .scrollIntoView({ behavior: "smooth" });
    },
    pageChanged(page) {
      this.$router.replace({
        name: "cookings",
        query: {
          page: page,
          category: this.$route.query.category
            ? this.$route.query.category
            : "",
          search: this.$route.query.search ? this.$route.query.search : "",
          isDesending: this.$route.query.isDesending
            ? this.$route.query.isDesending
            : true
        }
      });
      document
        .getElementById("cookingsSection")
        .scrollIntoView({ behavior: "smooth" });
    },
    setStyle() {
      if (window.innerWidth > 1000) {
        if (window.innerWidth > 1495) {
          this.$root.setProportionStyle(
            "font-size",
            "px",
            ".cookingCart .image .chef h4",
            1920,
            17,
            1495,
            14
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#cookingsSection #filterBox #filters #searchBox input",
            1920,
            25,
            1495,
            20
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            ".cookingCart h1",
            1920,
            32,
            1495,
            29
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            ".cookingCart .detail span",
            1920,
            15,
            1495,
            12
          );

          this.$root.setProportionStyle(
            "padding-top",
            "px",
            "#filterBox .multiselect .multiselect__tags",
            1920,
            19,
            1495,
            12
          );
        } else {
          this.$root.unsetInlineStyle(
            "font-size",
            ".cookingCart .image .chef h4"
          );

          this.$root.unsetInlineStyle("font-size", ".cookingCart h1");

          this.$root.unsetInlineStyle("font-size", ".cookingCart .detail span");

          this.$root.unsetInlineStyle(
            "padding-top",
            "#filterBox .multiselect .multiselect__tags"
          );
          this.$root.unsetInlineStyle("width", ".cookingCart .cookingRoute a");
          this.$root.unsetInlineStyle(
            "padding-top",
            ".cookingCart .cookingRoute a"
          );
          this.$root.unsetInlineStyle(
            "padding-bottom",
            ".cookingCart .cookingRoute a"
          );
          this.$root.unsetInlineStyle(
            "bottom",
            ".cookingCart:hover .cookingRoute"
          );
        }
      } else {
        this.$root.unsetInlineStyle(
          "font-size",
          "#cookingsSection #filterBox #filters #searchBox input"
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          ".cookingCart .image .chef h4",
          999,
          14,
          375,
          11
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          ".cookingCart h1",
          999,
          29,
          375,
          20
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          ".cookingCart .cookingRoute a",
          999,
          40,
          375,
          57
        );

        this.$root.setProportionStyle(
          "bottom",
          "px",
          ".cookingCart .cookingRoute",
          999,
          30,
          375,
          -18
        );

        this.$root.setProportionStyle(
          "padding-top",
          "px",
          ".cookingCart .cookingRoute a",
          999,
          10,
          375,
          4
        );

        this.$root.setProportionStyle(
          "padding-bottom",
          "px",
          ".cookingCart .cookingRoute a",
          999,
          10,
          375,
          4
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          ".cookingCart .detail span",
          999,
          12,
          375,
          9
        );

        this.$root.setProportionStyle(
          "padding-top",
          "px",
          "#filterBox .multiselect .multiselect__tags",
          999,
          19,
          375,
          12
        );
      }
    }
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "Cooking Archive - Margarin"
        : "مارگارین -آشپزخانه",
      meta: [
        {
          name: "description",
          content: this.cookingsData
            ? this.cookingsData.data.cookingArchiveIntro.text
            : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "Cooking Archive - Margarin"
            : "مارگارین -آشپزخانه"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    cookingsData() {
      return this.$store.getters.getCookingsData;
    }
  },
  watch: {
    "$route.query": {
      handler(value) {
        if (Object.keys(value).length == 0) return;
        let pack = {
          page: value.page ? value.page : 1,
          category: value.category ? value.category : "",
          search: value.search ? value.search : "",
          isDesending: value.isDesending ? value.isDesending : true
        };
        this.searchPlaceHolder = value.search ? value.search : "";
        (this.typeSelected = value.type ? value.type : ""),
          (this.isDesendingSelected = value.isDesendingSelected
            ? value.isDesendingSelected
            : ""),
          this.$store.dispatch("getCookingsFromServer", pack);
      },
      deep: true,
      immediate: true
    },
    cookingsData() {
      setTimeout(() => {
        this.setStyle();
      }, 500);
    }
  },
  mounted() {
    if (this.cookingsData == null) {
      let pack = {
        page: this.$route.query.page ? this.$route.query.page : 1,
        isDesending: this.$route.query.isDesending
          ? this.$route.query.isDesending
          : true,
        category: this.$route.query.category ? this.$route.query.category : "",
        search: this.$route.query.search ? this.$route.query.search : ""
        // keyword: this.$route.query.keyword ? this.$route.query.keyword : ""
      };
      this.$store.dispatch("getCookingsFromServer", pack);
    } else {
      this.setStyle();
    }
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  }
};
</script>
