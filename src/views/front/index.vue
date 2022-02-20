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
    methods:{
       
    },
    // mounted(){
    //     this.$router.push("/login-register")
    // }
}
</script>
