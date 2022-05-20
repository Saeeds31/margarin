<template>
  <div
    @click="routeToAbout(cartIndex)"
    class="aboutCart d-flex flex-direction-column align-items-center"
  >
    <img
      data-aos="flip-left"
      :data-aos-duration="3000"
      data-aos-once="false"
      data-aos-delay="500"
      class="width40"
      :src="content.image"
      alt=""
    />
    <h2 class="blackColor06">{{ content.title }}</h2>
    <!-- <h3 class="width65 summary blackColor06">{{content.text}}</h3> -->
  </div>
</template>
<script>
export default {
  props: {
    content: Object,
    cartIndex: Number
  },
  methods: {
    routeToAbout(index) {
      if (index == 0) {
        this.$router.push("/about-us?#aboutMargarin");
      } else if(index==1){
        this.$router.push(
          "/about-us?section=vision" 
        );
      }else if(index==2){
        this.$router.push(
          "/about-us?section=mission" 
        );
      }else if(index==3){
        this.$router.push(
          "/about-us?section=fourSection" 
        );
      }
    }
  }
};
</script>
