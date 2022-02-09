<template>
    <div class="cartStatistics width30 d-flex align-items-center">
        <div id="content" class="d-flex flex-direction-column align-items-end">
            <h1 class="blackColor06">{{data.title}}</h1>
            <h3 class="blackColor06">{{data.summary}}</h3>
        </div>
      <img :src="data.image" alt="">
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    }
}
</script>