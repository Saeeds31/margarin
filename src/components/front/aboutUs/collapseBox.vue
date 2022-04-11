<template>
  <section id="collapseSection">
      <div class="accordion" role="tablist">
    <collapseItem :listIndex="index" v-for="(item, index) in list" :key="index" :data="item">
      <img class="faqImage" :src="$root.baseImageUrl+item.image" :alt="item.answer" />
    </collapseItem>
      </div>
  </section>
</template>
<script>
import collapseItem from "@/components/front/aboutUs/collapseBox/collapseItem.vue";
export default {
  components: { collapseItem },
 props:{
   list:Array
 }
};
</script>
