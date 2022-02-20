<template>
  <div
    id="languageSwitcher"
    class="d-flex justify-content-between align-items-center width40"
  >
    <i @click="showMoreLanguage()" class="fa fa-angle-down"></i>
    <div id="selectLanguage">
      <div @click="showMoreLanguage()" id="selectedLanguage">
        {{ currentLanguage }}
      </div>
      <div
        v-if="showOtherLanguage"
        @click="changeLanguage(currentLanguage, otherLanguage)"
        id="otherLanguage"
      >
        {{ otherLanguage }}
      </div>
    </div>
    <img
      @click="showMoreLanguage()"
      src="@/assets/front/images/earth.svg"
      alt="انتخاب زبان"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: "زبان فارسی",
      showOtherLanguage: false,
      otherLanguage: "English"
    };
  },
  methods: {
    changeLanguage(cur, oth) {
      this.showOtherLanguage = false;
      this.currentLanguage = oth;
      this.otherLanguage = cur;
      if (this.currentLanguage == "English") {
       
        this.$cookie.set("ltrTheme","true")
            this.$axios.defaults.headers.common["Accept-Language"] = "en";

      } else {
        this.$cookie.delete("ltrTheme")
            this.$axios.defaults.headers.common["Accept-Language"] = "fa";

      }
      this.$router.go(0)
    },
    showMoreLanguage() {
      this.showOtherLanguage = !this.showOtherLanguage;
    }
  },
  mounted(){
    if(this.$cookie.get("ltrTheme")){
      document.body.classList.add("ltrTheme");
         this.currentLanguage = "English";
      this.otherLanguage = "زبان فارسی";
    }
  }
};
</script>
<style scoped>
#languageSwitcher {
  cursor: pointer;
  position: relative;
}
div#otherLanguage {
  position: absolute;
  background: #8080808a;
  width: 100%;
  text-align: center;
  color: white;
  padding: 8px 20px;
  top: 40px;
  right: 50%;
  transform: translateX(50%);
  border-radius: 5px;
}
</style>
