<template>
  <div id="filterBox">
    <div id="filters" class="width100 d-flex justify-content-between">
      <multiSelect
        v-if="productCategory"
        id="categotyOption"
        :placeholder="$cookie.get('ltrTheme') ? 'Category' : 'دسته بندی'"
        v-model="category"
        :show-labels="false"
        :options="productCategory"
      >
      </multiSelect>
      <multiSelect

        class="hiddenInMobile brandOption"
        :placeholder="$cookie.get('ltrTheme') ? 'product brand' : 'برند محصول '"
        id="brandOption"
        track-by="id"
        label="title"
        :show-labels="false"
        v-model="brand"
        :options="brands"
      >
        <template slot="singleLabel" slot-scope="props"
          ><img
            class="option__image"
            :src="$root.baseImageUrl+props.option.image"
          /><span class="option__desc"
            ><span class="option__title">{{ props.option.title }}</span></span
          ></template
        >
        <template slot="option" slot-scope="props"
          ><img
            class="option__image"
            :src="$root.baseImageUrl+props.option.image"
            alt="No Man’s Sky"
          />
          <div class="option__desc">
            <span class="option__title">{{ props.option.title }}</span
            >
          </div>
        </template>
      </multiSelect>

      <div id="searchBox" class="width45">
        <input
          @keypress.enter="searched()"
          v-model="search"
          class="width100"
          type="text"
          :placeholder="searchPlaceHolder"
        />
        <svg
          @click="searched()"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <image
            id="Layer_2492"
            data-name="Layer 2492"
            width="24"
            height="24"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAkxJREFUSEu1lUtIlUEUx7tU9FiYICEYBKabcqEgQeailfhIMbGFRFEI5iJ6gLhqoYsicKEIJj6SLCToAW4KKyTuwtKgdj3AlAi0RaQbIUOz/P1rRr47znfVDzvw43535sz5z5w5MxOb79i/xWO7aTsJlZALGbAAX+ElDMIQ/PENDrbFPAJncbgO+4yjgnyDHZAaGPyW78tGMFQnKLAdr5tQB7/hAdyGuJm9guyBUrgIR2ERLkFXmEJQoBun8zANSs9Y6LT+dWilCrwTzsEdn78VkHO/CX6E36k1gtvuY3w8B6UxH9674ySwi8ZPoI0shNF1BrduV/hog8dQ4RM4Q+NduA81Gwwud+3dB8g2TAZjaAWPaKgGbd7TCAIa0gxN0ACtrsC4UVbt/4wooL2Im0xoP1dMK5gzgfdGDK5hWTABw1DkCszSsBVU41HtEANVQU+g3BV4R0MOpIHEothxBqmKboEOakKKdFjqQdU0ECU6YzrgAij/qsgEgWL+qXpeQwGseYE5k9DKlX8Vic7SjCsQM8EPm+VpmRuxPpxroR106BLMXhWaedzMXpukaliPNeLUArq/8uB7mIDatTk9oBvyqpmR3gCfKS0KrJn/AJ2DNz5H9z04jVMv6Ib8DPfgBeih2QYHoAROgcpaMz9hgqvUl5KtwPYd5OMG6DULM62sE66BNlXiH+ELVIEO71/zvWi2L9OIKLfp8Avsk6mad89MnDalagTKrEgygSQL8Hal0PoM9J68AqVybjMFpLpKZLMFXJHh/yFgRR5qRcsd3pmAMJOq/gAAAABJRU5ErkJggg=="
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import multiSelect from "vue-multiselect";
export default {
  components: {
    multiSelect
  },
  mounted() {
    if (this.productCategory == null) {
      this.$store.dispatch("getProductCategoryFromServer");
    }
    if (this.brands == null) {
      this.$store.dispatch("getBrandsFromServer");
    }
  },
  methods: {
    searched() {
      let filter = {
        category: this.category != null ? this.category : "",

        brand: this.brand != null ? this.brand.id : true,
        search: this.search
      };
      this.$emit("filtered", filter);
    }
  },
  computed: {
    productCategory() {
      return this.$store.getters.getProductCategory;
    },
    brands() {
      return this.$store.getters.getBrands;
    }
  },

  watch: {
    brand(newVal) {
      
      // this.filterList.push(newVal);
      let filter = {
        category: this.category != null ? this.category : "",
        brand: newVal != null ? newVal.id : "",
        search: this.search
      };
      this.$emit("filtered", filter);
    },
    category(newVal) {
      // this.filterList.push(newVal);
      let filter = {
        category: newVal != null ? newVal : "",

        brand: this.brand != null ? this.brand.id : "",
        search: this.search
      };
      this.$emit("filtered", filter);
    }
  },
  data() {
    return {
      search: "",
      filterList: [],
      searchPlaceHolder:
        this.placeHolder != ""
          ? this.placeHolder
          : this.$cookie.get("ltrTheme")
          ? "Start searching now ..."
          : "جستجوی را همین الان شروع کنید ...",
      category: null,
      brand: null
    };
  },
  props: {
    placeHolder: String,
    isDesendingSelected: String,
    categorySelected: String
  }
};
</script>
<style>
#filterBox .multiselect {
  width: 25%;
}
.multiselect__select {
  right: unset;
  left: 1px;
  top: 12px;
}
#filterBox .multiselect .multiselect__tags {
  border-radius: 30px;
  padding: 12px 20px 12px 40px;
  text-align: right;
  border: 3px solid var(--grayBackground);
}
#filterBox .multiselect__element span {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-around;
}
#filterBox .brandOption .multiselect__single{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between
}
#filterBox .brandOption .multiselect__single img{
  width:50px
}
</style>
<style scoped>
#filterBox #searchBox {
  position: relative;
}
#filterBox #searchBox input {
  padding: 20px;
  border-radius: 30px;
  direction: rtl;
  text-align: right;
  border: 3px solid var(--grayBackground);
  font-size: 13px;
  font-family: "yekan-heavy";
}
#filterBox #searchBox svg {
  position: absolute;
  left: 2%;
  top: 15px;
}
</style>
