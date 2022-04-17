<template>
  <main v-if="productsData" id="productsSection">
    <introduction  class="width80 margin-auto"   :title="
        $cookie.get('ltrTheme')
          ? 'Products Margarin '
          : 'مــــحصولات  مارگاریــــن'
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
        <br>
        <br>
      <a v-if="productsData.data.productsIntro.priceListFile!=null&&productsData.data.productsIntro.priceListFile!=''" id="getListButton" :href="$root.baseImageUrl+productsData.data.productsIntro.priceListFile">{{$cookie.get('ltrTheme')?'Get approved price list':'دریافت لیست قیمت مصوب'}}
        
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0px" y="0px"
	 viewBox="0 0 287 287" style="enable-background:new 0 0 287 287;" xml:space="preserve">
<g>
	<path d="M137.941,147.788c1.551,2.213,3.88,3.482,6.391,3.482c2.51,0,4.839-1.269,6.39-3.482l40.346-57.586
		c1.683-2.402,1.976-4.982,0.785-7.27c-1.191-2.287-3.653-3.432-6.586-3.432H165V24.51c0-4.963-3.244-9.01-8.207-9.01h-24.914
		c-4.963,0-8.879,4.047-8.879,9.01V79.5h-19.6c-2.934,0-5.396,1.146-6.587,3.436c-1.19,2.288-0.896,4.979,0.787,7.38
		L137.941,147.788z"/>
	<path d="M287,199.5c0-7.18-5.82-13-13-13H13c-7.18,0-13,5.82-13,13v59c0,7.18,5.82,13,13,13h261c7.18,0,13-5.82,13-13V199.5z
		 M58,244.5H19v-31h39V244.5z M113,244.5H74v-31h39V244.5z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

      </a>
      </p>
    </introduction>
    <filterBox
      :isBrandSelected="isBrandSelected"
      :categorySelected="categorySelected"
      :placeHolder="searchPlaceHolder"
      @filtered="filteredProducts"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      class="width80 margin-auto"
    />
    <section
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
    </section>
    <section  id="pagination">
      <pagination v-if="productsData.pagination.TotalPages>1"
        :totalPages="productsData.pagination.TotalPages"
        :currentPage="productsData.pagination.CurrentPage"
      @pageChanged="pageChanged"
      />
    </section>
  
  </main>
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
      isBrandSelected: "",
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
          brand: filter.brand ? filter.brand : ""
        }
      });
      document
        .getElementById("products")
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
          brand: this.$route.query.brand
            ? this.$route.query.brand
            : ""
        }
      });
      document
        .getElementById("products")
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

      // this.$store.dispatch("getProductsFromServer", pack);
      this.checkRequest('getProductsFromServer',JSON.stringify(pack));

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
        };
        this.searchPlaceHolder = value.search ? value.search : "";
        (this.typeSelected = value.type ? value.type : ""),
          // this.$store.dispatch("getProductsFromServer", pack);
      this.checkRequest('getProductsFromServer',JSON.stringify(pack));

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
