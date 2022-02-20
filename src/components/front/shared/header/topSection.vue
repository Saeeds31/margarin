<template>
  <div
    id="topSection"
    class="d-flex justify-content-between align-items-center"
  >
    <div
      id="languageAndSwitcherBox"
      class="d-flex justify-content-between align-items-center width30"
    >
      <button @click="toggleMenuModal()" class="showInMobileFlex" id="toggleMenuModal">
    <i class="fa fa-bars"></i>
      </button>
      <div data-aos="fade-right" data-aos-duration="1000"    data-aos-once="false"  v-if="showMenuModal" id="mobileMenu">
        <button id="closeMenu" @click="toggleMenuModal()">
          <i class="fa fa-times"></i>
        </button>
        <switcher  />
        <logo  />
        <menuBar class="width100"  />
        <language  />
      </div>
      <switcher class="hiddenInMobile" />
      <div class="hiddenInMobile" id="verticalLine"></div>
      <language class="hiddenInMobile" />
    </div>
    <menuBar class="hiddenInMobile" />
  </div>
</template>
<script>
import logo from "@/components/front/shared/logo.vue"

import switcher from "@/components/front/shared/header/topSection/switcher.vue";
import Language from "@/components/front/shared/header/topSection/language.vue";
import menuBar from "@/components/front/shared/header/topSection/menu.vue";
export default {
  components: {
    switcher,
    Language,
    menuBar,logo
  },
  data(){
    return{
      showMenuModal:false,
    }
  },
  methods: {
    toggleMenuModal() {
     this.showMenuModal=!this.showMenuModal
    }
  }
};
</script>
<style >
 #mobileMenu nav ul {
        flex-direction: column !important;
    }
    
</style>
