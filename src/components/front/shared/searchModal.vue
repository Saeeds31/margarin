<template>
  <div data-aos="zoom-in" data-aos-duration="1000"    data-aos-once="false" id="searchModal">
    <div id="backgroundSearch" @click="exitSearch()"></div>
    <div data-aos="fade-down" data-aos-duration="2000" data-aos-once="false" id="searchBox">
      <div id="inputBox">
        <input
        v-model="search"
        @keypress.enter="searchInBlogs"
          class="width100"
          type="text"
          :placeholder="$cookie.get('ltrTheme')?'search right now ...':'جستجو را همین الان شروع کنید ...'"
        />
        <svg
        @click="searchInBlogs()"
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
        <button  @click="exitSearch()" id="closeSearchModal"><i class="fa fa-times"></i></button>
      <div id="resultBox"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    exitSearch() {
      this.$emit("exit", false);
    },
    searchInBlogs(){
      if(this.search==""){
        return;
      }else{
        this.$router.push(`/weblogs?keyword=${this.search}`)
      }
    }
  },
  data(){
    return{
      search:""
    }
  }
};
</script>
<style scoped>
#searchModal{
    position:fixed;
    width:100%;
    height:100vh;
    z-index: 10000;
    left:0;
    top:0;
}
#backgroundSearch{
    background-color:#000000bf;
    width: 100%;
    height: 100%;
}
#searchBox{
        position: fixed;
    top: 0;
    left: 0;
    z-index: 10001;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    background: #fffffffa;
}
div#inputBox svg {
    position: absolute;
    left: 10px;
    top: 20px;
}
div#inputBox input {
    width: 100%;
    border: none;
    height: 60px;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 18px;
    font-family: 'yekan-bold';
    text-align: right;
    box-shadow: 0 0 10px #00000024;
}
div#inputBox {
    position: relative;
    width: 80%;
}
button#closeSearchModal {
    position: absolute;
    top: 1%;
    left: 1%;
    font-size: 18px;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 15px;
}
</style>
