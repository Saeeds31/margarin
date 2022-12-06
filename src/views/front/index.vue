<template>
  <div id="frontSection">
    <orgHeader
      v-if="
      !hiddenList.includes($route.name)  &&
        !$route.path.includes('admin-panel')
      "
      class="width80 margin-auto"
    />
    <router-view></router-view>
    <footerSite
      v-if="    
      !hiddenList.includes($route.name)   &&
        !$route.path.includes('admin-panel')
        
      "
    />
    <footerNavigation v-if="!$route.path.includes('/supplier-register')" class="showInMobileFlex" />
  </div>
</template>
<script>
import footerNavigation from "@/components/front/shared/footerNavigation.vue";
import footerSite from "@/components/front/shared/footer.vue";
import orgHeader from "@/components/front/shared/orgHeader.vue";
export default {
  components: {
    orgHeader,
    footerSite,
    footerNavigation,
  },
  data(){
    return{
      hiddenList:[
        'supplierRegister',
        'healthAmbassador',
        'loginRegister',
        'home'
      ]
    }
  },
  computed: {
    brands() {
      return this.$store.getters.getBrands;
    },

    reports() {
      return this.$store.getters.getReports;
    },
    mainMenu() {
      return this.$store.getters.getServerMenu;
    },
    utilityLink(){
        return this.$store.getters.getUtilityLinks;
    }
  },
  mounted() {
    if (this.brands.length == 0&&!this.$route.path.includes('admin')) {
      // this.$store.dispatch('getBrandsFromServer')
      this.checkRequest("getBrandsFromServer", JSON.stringify(null));
    }

    if (this.reports == null) {
      // this.$store.dispatch('getReportFromServer')
      //   this.checkRequest('getReportFromServer',JSON.stringify(null));
    }
    if (this.mainMenu == null&&!this.$route.path.includes('admin')) {
      // this.$store.dispatch('getMainMenuFromServer')
      this.checkRequest("getMainMenuFromServer", JSON.stringify(null));
    }
    if (this.utilityLink.length ==0 &&!this.$route.path.includes('admin')) {
      this.checkRequest("getUtilityLinksFromServer", JSON.stringify(null));
    }
  },
  // mounted(){
  //     this.$router.push("/login-register")
  // }
};
</script>
