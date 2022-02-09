<template>
  <div v-if="productsData" id="productsSection">
    <introduction v-if="introduction" class="width80 margin-auto" :data="introduction">
      <p
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
        class="slotElements"
      >
        {{ introduction.description }}
      </p>
    </introduction>
    <filterBox
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
      // products: {
      //   total: 8,
      //   prePage: 6,
      //   products: [
      //     {
      //       id: 1,
      //       title: "روغن کنجد",
      //       summary: "سرخ کردنی ویژه رژیم غذایی",
      //       image: "https://s4.uupload.ir/files/layer_2760_qxn6.png"
      //     },
      //     {
      //       id: 2,
      //       title: "روغن آفتاب گردان",
      //       summary: "پالایش شده و برای مصارف خانگی",
      //       // image: "https://s4.uupload.ir/files/layer_2695_iwrb.png"
      //       image: "https://s4.uupload.ir/files/layer_2759_yn0q.png"
      //     },
      //     {
      //       id: 3,
      //       title: "روغن زیتون پالایش شده",
      //       summary: "برای طعم دار کردن سالاد ها",
      //       image: "https://s4.uupload.ir/files/layer_2760_qxn6.png"
      //     },

      //     {
      //       id: 4,
      //       title: "روغن آفتاب گردان",
      //       summary: "پالایش شده و برای مصارف خانگی",
      //       // image: "https://s4.uupload.ir/files/layer_2695_iwrb.png"
      //       image: "https://s4.uupload.ir/files/layer_2759_yn0q.png"
      //     },
      //     {
      //       id: 1,
      //       title: "روغن کنجد",
      //       summary: "سرخ کردنی ویژه رژیم غذایی",
      //       image: "https://s4.uupload.ir/files/layer_2760_qxn6.png"
      //     },
      //     {
      //       id: 2,
      //       title: "روغن آفتاب گردان",
      //       summary: "پالایش شده و برای مصارف خانگی",
      //       // image: "https://s4.uupload.ir/files/layer_2695_iwrb.png"
      //       image: "https://s4.uupload.ir/files/layer_2759_yn0q.png"
      //     }
      //   ]
      // },

      introduction:null,
    };
  },
  methods: {
    pageChanged(page){
     this.$router.replace({ path: '/products' ,query:{page:page}})
    }
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
        category: this.$route.query.category ? this.$route.query.category : "",
        search: this.$route.query.search ? this.$route.query.search : ""
      };

      this.$store.dispatch("getProductsFromServer", pack);
    }
  },
  watch: {
    productsData(va) {
      this.introduction= {
        image:this.$root.baseImageUrl+va.data.productsIntro.image,
        description:va.data.productsIntro.text,
        routes: [{ route: "", routeTitle: "محصولات" }],
        title: "اخــــبار و مقــــاله و اطلاعیــــه",
        summary: va.data.productsIntro.title
      }
    }
  }
};
</script>
