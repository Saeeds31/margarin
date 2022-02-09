<template>
  <div id="adminSection" class="d-flex">
    <router-view></router-view>
    <toolsHeader id="mainNavbarAdmin" v-if="$route.name != 'login'" />
  </div>
</template>
<script>
import toolsHeader from "@/components/admin/shared/toolsHeader.vue";
export default {
  components: {
    toolsHeader
  }
};
</script>
<style>

</style>
