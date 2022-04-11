<template>
  <section id="pagination">
    <sliding-pagination
      :current="currentPage"
      :total="totalPages"
      @page-change="pageChangeHandler"
    ></sliding-pagination>
  </section>
</template>
<script>
import SlidingPagination from "vue-sliding-pagination";
export default {
  components: {
    SlidingPagination
  },
  props: {
    totalPages: Number,
    currentPage:Number
  },
  methods: {
    pageChangeHandler(event) {
      this.$emit('pageChanged',event)
    },
     
  },
 
};
</script>
<style>
#pagination .c-sliding-pagination__list {
  display: flex;
  justify-content: center;
}
#pagination .c-sliding-pagination__list .c-sliding-pagination__list-element {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: 2px solid var(--grayBackground);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
#pagination
  .c-sliding-pagination__list
  .c-sliding-pagination__list-element
  .c-sliding-pagination__page {
  font-size: 16px;
  color: black;
  opacity: 0.6;
  padding: 15px;
}
#pagination
  .c-sliding-pagination__list
  .c-sliding-pagination__list-element--active {
  background: var(--fontColor);
}
#pagination
  .c-sliding-pagination__list
  .c-sliding-pagination__list-element--active
  a {
  color: white !important;
  opacity: 1 !important;
}
</style>
