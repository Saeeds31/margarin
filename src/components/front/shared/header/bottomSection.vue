<template>
  <div
    id="bottomSection"
    class="d-flex justify-content-between align-items-center"
  >
    <div id="buttons" class="d-flex justify-content-between">
      <heart />
      <svg
      @click="showSearchModal=true"
        class="searchSvg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="58"
        height="58"
        viewBox="0 0 72 72"
      >
        <g id="Search" transform="translate(-467 -123)">
          <circle
            id="Ellipse_5"
            data-name="Ellipse 5"
            cx="36"
            cy="36"
            r="36"
            transform="translate(467 123)"
            opacity="0.051"
          />
          <image
            id="Layer_2393"
            data-name="Layer 2393"
            width="20"
            height="20"
            transform="translate(493 149)"
            opacity="0.302"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAXZJREFUOE+dkw1Rw0AQhakDcBAcgIOgAHBQFEAVMCgAFBAHgALigDqgDsABvO+4d7PJXEjKzmyT7r17+/Ynq4O6rRU+l7fywwDp9f4q7+RftaurUfBE/5/lzUQihyHbZOIBNBKi6imcogI1qIIAtagGZ9VgriKjCVH2ng+2el7KdxMqIbvPxEBQ+mCsCT8UaOSQnWVFE3wlTDWoxY4tAEKCLrUczLHlcwvp9D+VDiFDuJCX4EIyYBZDj49M+KkX+kKp/R5kQLnHfexUvkXhdw6QobpbM0kYJkNNgiLheCeXin0TsK0R/qdkkrrCotAZ2CV2ah9jmAwVSxXycyNnUekfa7NPHy3mRff4GBIhk2KfeHbywaf0h1wLAVLa5UGsFfRyLyGNZAN8nGz8lHZKcCenlNgCenYtb4NyzlHIZ/vbyGAxs8MJKGPXoqGMBLSqkNZ2rxHgNoBHPEn1o7zPSRhMIZ1bZlQBtkEyNjCFdI6wcr8aMunmB4DjU5SWKf77AAAAAElFTkSuQmCC"
          />
        </g>
      </svg>
    </div>
    <searchModal v-if="showSearchModal" @exit="exitSearchModal()" />
    <menuBar />
  </div>
</template>
<script>
import   searchModal from "@/components/front/shared/searchModal.vue"
import heart from "@/components/front/shared/header/bottomSection/heart.vue";
import menuBar from "@/components/front/shared/header/bottomSection/menu.vue";
export default {
components: {
    heart,
    searchModal,
    menuBar
  },
  data(){
      return{
          showSearchModal:false,
      }
  },
  methods:{
      exitSearchModal(flag){
          this.showSearchModal=flag;
      }
  }
};
</script>
