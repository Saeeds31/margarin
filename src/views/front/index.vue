<template>
  <div id="frontSection">
      <orgHeader v-if="!$route.name.includes('loginRegister')&&!$route.name.includes('home')&&!$route.name.includes('healthAmbassador')&&!$route.path.includes('admin-panel')" class="width80 margin-auto"  />
          <router-view></router-view>
      <footerSite v-if="!$route.name.includes('healthAmbassador')&&!$route.path.includes('admin-panel')&&!$route.name.includes('loginRegister')&&!$route.name.includes('home')" />
      <footerNavigation class="showInMobile" />
  </div>
</template>
<script>
import footerNavigation from "@/components/front/shared/footerNavigation.vue"
import footerSite from "@/components/front/shared/footer.vue"
import orgHeader from "@/components/front/shared/orgHeader.vue"
export default {
    components:{
        orgHeader,footerSite,footerNavigation
    },
    computed:{
       brands(){
           return this.$store.getters.getBrands
       },
       
       reports(){
           return this.$store.getters.getReports
       },
       mainMenu(){
           return this.$store.getters.getServerMenu
       }
    },
    mounted(){
        
        if(this.brands.length==0){
            // this.$store.dispatch('getBrandsFromServer')
      this.checkRequest('getBrandsFromServer',JSON.stringify(null));

        }
        
        if(this.reports==null){
            // this.$store.dispatch('getReportFromServer')
      this.checkRequest('getReportFromServer',JSON.stringify(null));

            
        }
        if(this.mainMenu==null){
            // this.$store.dispatch('getMainMenuFromServer')
      this.checkRequest('getMainMenuFromServer',JSON.stringify(null));

        }

    }
    // mounted(){
    //     this.$router.push("/login-register")
    // }
}
</script>
