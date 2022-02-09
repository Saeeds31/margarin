<template>
  <div
    id="goodFamily"
    class="d-flex justify-content-between width80 margin-auto align-items-center"
  >
    <img class="width40" :src="data.image" alt="data.title" />
    <div
      class="width40 d-flex flex-direction-column align-items-end width40"
      id="content"
    >
      <div class="choose">
        <button :class="{'active':index==0}" @click="showDetail(0)">تغذیه سالم در مدرسه</button>
        <button  :class="{'active':index==1}" @click="showDetail(1)">معرفی خانواده سالم</button>
      </div>
      <h3 class="blackColor06">
        {{ data.data[index].title }}
      </h3>
      <h1 class="blackColor06">
        {{ data.data[index].summary }}
      </h1>
      <div class="lineBreak"><span class="large"></span>
      <span></span></div>
      <p class="blackColor04">
        {{ data.data[index].text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    showDetail(index) {
      this.index = index;
    }
  }
};
</script>
