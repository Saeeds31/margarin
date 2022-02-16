<template>
  <div id="filterBox">
    <div
      id="filters"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      class="width100 d-flex justify-content-between"
    >
      <multiSelect
        class="hiddenInMobile"
        :placeholder="$cookie.get('ltrTheme') ? 'Sort By' : 'براساس '"
        id="sortOption"
        track-by="name"
        label="name"
        v-model="type"
        :options="typeOption"
      ></multiSelect>
      <multiSelect
        id="categotyOption"
        v-if="categories"
        :placeholder="$cookie.get('ltrTheme') ? 'Category' : 'دسته بندی'"
        v-model="category"
        :options="categories"
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
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
      v-if="filterList.length > 0"
      id="yourFilter"
      class="width100"
    >
      <div v-for="item in filterList" :key="item">
        <span class="removeFilter" @click="removeFromFilter(item.value)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <image
              id="Layer_2493_copy"
              data-name="Layer 2493 copy"
              width="24"
              height="24"
              opacity="0.302"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAbhJREFUSEu1lrtLxEAQxm/Bt62ojaKNjS+0UBAbH43/s2AjNopCTi1s9Gy8E0tfpwfx+8VsyCW7SfDMwldkNvm+mdmZ2ZgwDBu+ZYwZ196sMC1MCDyzPoR3oSO0xfHp5XAJiHhMHywJ84LxevC7gYdPwq24EO5bJisgcjzeEIZKiLPbPRkuxUdUyeoTEPmidpYreO3TJpobidzbFxIBkZPnrQHILSciFxJpY4gE4pzv/SEtvkhI1wmHbwXWZeBAXetLxmFHZHj6LYx4vmtJIKBCKL0DT2qoijNhSlhLvQN5ILwIOzFHVod3jhHgYFccXnRlO5UX1DtpJEJEWIHsj7Gd/tgVRh0cTQS2BQ7Y5UFClBJpWPKMsKtfOhj3hUmHgDU1Rfjg2k9F5WvGVzaOhLKmyolUIMenXlUBUtVKRyGBOT1TfUWjJBIoS1GO3ApVEIlSVPshL0hk1XGI/1amjOZDTy4Hb7R4FtU3Kmoadswohl23rnF9bi+eOi6c63Tnu67MGYW3WaG7s4VHWq4Kr8xUAzHjufQp4SqXPpP1zvV3kYsgMw4oYX4CiIqxzDOL35Q34Vko/G35ATfq3b9d/K4aAAAAAElFTkSuQmCC"
            />
          </svg>
        </span>
        <span>{{ item.name }}</span>
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
  computed: {
    categories() {
      return this.$store.getters.getBlogCategory;
    }
  },
  methods: {
    removeFromFilter(value) {
      this.filterList = this.filterList.filter((item) => {
        return item.value != value;
      });
      // حذف از فیلتر ها و گرفتن دوباره محتوا
    }
  },
  mounted() {
    if (this.categories == null) {
      this.$store.dispatch("getBlogCategoryFromServer");
    }
  },
  watch: {
    type(newVal) {
      // this.filterList.push(newVal);
      let filter = {
        category: this.category != null ? this.category : "",
        type: this.type != null ? this.type.value : 1,
        search: this.search
      };
      this.$emit("filtered", filter);
    },
    category(newVal) {
      console.log(newVal);
      // this.filterList.push(newVal);
      let filter = {
        category: newVal != null ? newVal : "",
        type: this.type != null ? this.type.value : "",
        search: this.search
      };
      this.$emit("filtered", filter);
    },
    search() {
      let filter = {
        category: this.category != null ? this.category : "",
        type: this.type != null ? this.type.value : "",
        search: this.search
      };
      this.$emit("filtered", filter);
    }
  },
  data() {
    return {
      searchPlaceHolder:
        this.placeHolder != ""
          ? this.placeHolder
          : this.$cookie.get("ltrTheme")
          ? "Start searching now ..."
          : "جستجو را همین الان شروع کنید ...",
      search: "",
      filterList: [],
      category: this.categorySelected != "" ? this.categorySelected : null,

      type:
        this.typeSelected != ""
          ? this.typeSelected == "1"
            ? {
                name: this.$cookie.get("ltrTheme") ? "News" : "اخبار",
                value: "1"
              }
            : {
                name: this.$cookie.get("ltrTheme") ? "Articles" : "مقالات",
                value: "2"
              }
          : null,
      typeOption: [
        {
          name: this.$cookie.get("ltrTheme") ? "Articles" : "مقالات",
          value: "2"
        },
        { name: this.$cookie.get("ltrTheme") ? "News" : "اخبار", value: "1" }
      ]
    };
  },
  props: {
    placeHolder: String,
    typeSelected: String,
    categorySelected: String
  }
};
</script>
<style>
#searchBox {
  position: relative;
}
#searchBox input {
  padding: 17px 20px;
  border-radius: 30px;
  text-align: right;
  border: 3px solid var(--grayBackground);
  font-size: 20px;
  font-family: "yekan-heavy";
  direction: rtl;
}
#searchBox svg {
  position: absolute;
  left: 2%;
  top: 20px;
}
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
#filterBox .multiselect__placeholder,
#filterBox .multiselect__single {
  color: #000000d4;
  font-size: 20px;
  font-family: "yekan-heavy";
}
</style>
