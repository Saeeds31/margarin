<style scoped>

</style>
<template>
    <section id="collapseSection" class="width95 margin-auto">
        <div v-for="(item, index) in list" :key="index" :id="'accordion' + index"
              :data-aos="index%2==0?'fade-right':'fade-left'"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="true"
         class="item">
            <strong>{{item.question}}</strong>
            <p>{{item.answer}}</p>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        list:Array
    }
}
</script>