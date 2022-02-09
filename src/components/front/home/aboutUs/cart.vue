<template>
    <div class="aboutCart  d-flex flex-direction-column align-items-end">
        <img class="width40"  :src="content.image" alt="">
        <h2 class="blackColor06">{{content.title}}</h2>
        <h3 class="width65 summary blackColor06">{{content.text}}</h3>
    </div>
</template>
<script>
export default {
    props:{
        content:Object
    }
}
</script>