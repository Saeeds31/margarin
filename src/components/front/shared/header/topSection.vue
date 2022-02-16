<template>
  <div
    id="topSection"
    class="d-flex justify-content-between align-items-center"
  >
    <div
      id="languageAndSwitcherBox"
      class="d-flex justify-content-between align-items-center width30"
    >
      <button @click="toggleMenuModal()" class="showInMobile" id="toggleMenuModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g id="Group_2" data-name="Group 2" transform="translate(-205 -120)">
            <rect
              id="Rectangle_839"
              data-name="Rectangle 839"
              width="30"
              height="6"
              rx="3"
              transform="translate(205 120)"
              fill="#F7941E"
            />
            <g id="Group_1" data-name="Group 1">
              <rect
                id="Rectangle_839_copy_2"
                data-name="Rectangle 839 copy 2"
                width="22"
                height="6"
                rx="3"
                transform="translate(205 132)"
                fill="#F7941E"
              />
            </g>
            <rect
              id="Rectangle_839_copy"
              data-name="Rectangle 839 copy"
              width="13"
              height="6"
              rx="3"
              transform="translate(205 144)"
              fill="#F7941E"
            />
          </g>
        </svg>
      </button>
      <div data-aos="fade-right" data-aos-duration="1000"    data-aos-once="false"  v-if="showMenuModal" id="mobileMenu">
        <button id="closeMenu" @click="toggleMenuModal()">
          <i class="fa fa-times"></i>
        </button>
        <switcher  />
        <logo id="mainLogo" />
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
