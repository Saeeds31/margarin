<template>
  <div id="filterBox">
    <div id="filters" class="width100 d-flex justify-content-between">
          <multiSelect
        class="hiddenInMobile"
        :placeholder="$cookie.get('ltrTheme') ? 'Sort By' : 'براساس '"
        id="sortOption"
        track-by="name"
        label="name"
        v-model="sort"
        :options="sortOptions"
      ></multiSelect>
    <multiSelect
        v-if="productCategory"
        id="categotyOption"
        :placeholder="$cookie.get('ltrTheme') ? 'Category' : 'دسته بندی'"
        v-model="category"
        :options="productCategory"
      >
      </multiSelect>
      <div id="searchBox" class="width45">
        <input
          v-model="search"
          class="width100"
          type="text"
          :placeholder="searchPlaceHolder"
        />
        <svg
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
    if(this.productCategory==null){
      this.$store.dispatch("getProductCategoryFromServer")
    }
  },
 computed:{
   productCategory (){
     return this.$store.getters.getProductCategory;
   }
 },

   watch: {
    sort(newVal) {
      // this.filterList.push(newVal);
      let filter = {
        category: this.category != null ? this.category : "",
        isDesending: newVal != null ?newVal.value: true,
        search: this.search
      };
      this.$emit("filtered", filter);
    },
    category(newVal) {
      // this.filterList.push(newVal);
      let filter = {
        category: newVal != null ? newVal : "",

        isDesending: this.sort != null ? this.sort.value : true,
        search: this.search
      };
      this.$emit("filtered", filter);
    },
    search() {
      let filter = {
        category: this.category != null ? this.category : "",

        isDesending: this.sort != null ? this.sort.value : true,
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
      sort:
        this.isDesendingSelected != ""
          ? this.isDesendingSelected == true
            ? {
                name: this.$cookie.get("ltrTheme") ? "Newest" : "جدیدترین",
                value: "true"
              }
            : {
                name: this.$cookie.get("ltrTheme") ? "Oldest" : "قدیمی ترین",
                value: "false"
              }
          : null,
      sortOptions: [
        {
          name: this.$cookie.get("ltrTheme") ? "Oldest" : "قدیمی ترین",
          value: "false"
        },
        {
          name: this.$cookie.get("ltrTheme") ? "Newest" : "جدیدترین",
          value: "true"
        }
      ]
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
</style>
<style scoped>
 #filterBox #searchBox {
    position: relative;
}
 #filterBox #searchBox input {
    padding: 20px;
    border-radius: 30px;
    direction:rtl;
    text-align: right;
    border: 3px solid var(--grayBackground);
    font-size: 13px;
    font-family: 'yekan-heavy';
}
#filterBox #searchBox svg {
    position: absolute;
    left: 2%;
    top: 20px;
}
</style>
