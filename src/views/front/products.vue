<template>
  <div v-if="productsData" id="productsSection">
    <introduction  class="width80 margin-auto"   :title="
        $cookie.get('ltrTheme')
          ? 'Products Margarin Group'
          : 'مــــحصولات گــــروه مارگاریــــن'
      "
      :summary="productsData.data.productsIntro.title"
      :image="$root.baseImageUrl +productsData.data.productsIntro.image"
      :routes="routes">
      <p
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
        class="slotElements"
      >
        {{productsData.data.productsIntro.text }}
        <br>
      <a id="getListButton" :href="$root.baseImageUrl+productsData.data.productsIntro.priceListFile">{{$cookie.get('ltrTheme')?'Get approved price list':'دریافت لیست قیمت مصوب'}}
        <i class="fa fa-download"></i>
      </a>
      </p>
    </introduction>
    <filterBox
      :isDesendingSelected="isDesendingSelected"
      :categorySelected="categorySelected"
      :placeHolder="searchPlaceHolder"
      @filtered="filteredProducts"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      class="width80 margin-auto"
    />
    <div
      id="products"
      class="d-flex justify-content-between width80 margin-auto"
    >
      <cart
        :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
        data-aos-duration="1000"
        data-aos-once="true"
        class="width30"
        v-for="(product, index) in productsData.data.productArchives"
        :product="product"
        :key="index"
      />
    </div>
    <div  id="pagination">
      <pagination v-if="productsData.pagination.TotalPages>1"
        :totalPages="productsData.pagination.TotalPages"
        :currentPage="productsData.pagination.CurrentPage"
      @pageChanged="pageChanged"
      />
    </div>
  </div>
  <loader v-else />
</template>
<script>
import filterBox from "@/components/front/products/filterBox.vue";
import pagination from "@/components/front/shared/pagination.vue";
import cart from "@/components/front/products/cart.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    introduction,
    cart,
    pagination,
    filterBox,
    Loader
  },
  data() {
    return {
        categorySelected: "",
      isDesendingSelected: "",
      searchPlaceHolder: "",
       routes:[{ route: "", routeTitle_fa: "محصولات ", routeTitle_en:"Products"}],

    };
  },
  methods: {
     filteredProducts(filter) {
      this.$router.replace({
        name: "products",
        query: {
          page: this.$route.query.page ? this.$route.query.page : 1,
          category: filter.category ? filter.category : "",
          search: filter.search ? filter.search : "",
          isDesending: filter.isDesending ? filter.isDesending : true
        }
      });
      document
        .getElementById("productsSection")
        .scrollIntoView({ behavior: "smooth" });
    },
    pageChanged(page) {
      this.$router.replace({
        name: "products",
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
        .getElementById("productsSection")
        .scrollIntoView({ behavior: "smooth" });
    },
    },
       metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme") ? "Products - Margarin" : "مارگارین -محصولات",
      meta: [
        {
          name: "description",
          content: this.productsData ? this.productsData.data.productsIntro.text : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme") ? "Products - Margarin" : "مارگارین -محصولات"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    productsData() {
      return this.$store.getters.getProductsData;
    }
  },
  created() {
    if (this.productsData == null) {
      let pack = {
        page: this.$route.query.page ? this.$route.query.page : 1,
        brand: this.$route.query.brand ? this.$route.query.brand : "",
        type: this.$route.query.type ? this.$route.query.type : "",
        category: this.$route.query.category ? this.$route.query.category : "",
        search: this.$route.query.search ? this.$route.query.search : ""
      };

      this.$store.dispatch("getProductsFromServer", pack);
    }
  },
watch: {
    "$route.query": {
      handler(value) {
        if (Object.keys(value).length == 0) return;
        let pack = {
          page: value.page ? value.page : 1,
          category: value.category ? value.category : "",
        brand: this.$route.query.brand ? this.$route.query.brand : "",
        type: this.$route.query.type ? this.$route.query.type : "",
          search: value.search ? value.search : "",
          isDesending: value.isDesending ? value.isDesending : true
        };
        this.searchPlaceHolder = value.search ? value.search : "";
        (this.typeSelected = value.type ? value.type : ""),
          (this.isDesendingSelected = value.isDesendingSelected ? value.isDesendingSelected : ""),
          this.$store.dispatch("getProductsFromServer", pack);
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
};
</script>
<style>
a#getListButton {
    padding: 10px;
    text-shadow: 0 0 14px orange;
    font-family: 'yekan-bold';
    font-size: 22px;
}
</style>
