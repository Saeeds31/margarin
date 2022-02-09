<template>
  <div id="filterBox">
    <div id="filters" class="width100 d-flex justify-content-between">
      <multiSelect
        :placeholder="'براساس '"
        id="sortOption"
        track-by="name"
        label="name"
        v-model="sort"
        :options="sortOptions"
        class="hiddenInMobile"
      ></multiSelect>
      <multiSelect
      v-if="productCategory"
        id="categotyOption"
        track-by="name"
        label="name"
        :placeholder="'دسته بندی'"
        v-model="category"
        :options="productCategory"
      >
      </multiSelect>
      <div id="searchBox" class="width45">
        <input
          class="width100 blackColor06"
          type="text"
          placeholder="جستوجو را همین الان شروع کنید ..."
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

  data() {
    return {
      filterList: [],
      category: null,
    
      sort: null,
      sortOptions: [
        { name: "محبوب ترین ها", value: "poupular" },
        { name: "پر بازدید", value: "visited" }
      ]
    };
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
