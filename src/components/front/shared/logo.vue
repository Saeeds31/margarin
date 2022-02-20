<template>
  <img
    @click="homeRoute()"
    class="mainLogo"
    src="@/assets/front/images/logo.svg"
    alt="لوگو مارگارین"
  />
</template>
<script>
export default {
  methods: {
    homeRoute() {
        this.$router.push("/");
    }
  },
  mounted() {
    if (window.innerWidth > 1000) {
      this.$root.setProportionStyle(
        "width",
        "px",
        "#homeSection #homeLeader #headerContent .mainLogo",
        1920,
        100,
        1495,
        85
      );
    } else {
      this.$root.setProportionStyle(
        "width",
        "%",
        "#homeSection #homeLeader #headerContent .mainLogo ",
        768,
        9,
        425,
        12
      );
    }
  }
};
</script>
