<template>
    <div id="shopSection" class="width100">
       <div id="content" class="width80  margin-auto d-flex justify-content-between align-items-center">
            <img :src="data.image" alt="">
        <div id="titles" class="d-flex flex-direction-column align-items-end">
            <h1>{{data.title}}</h1>
            <h3>{{data.summary}}</h3>
            <div>
                <span></span>
            <span></span>
            </div>
            <p>{{data.text}}</p>
            <rounded-button     :type="'link'" :link="'/products'" :title="'ورود به فروشگاه مارگارین'"  />
            
        </div>
       </div>
        <img class="hiddenInMobile" id="cityBackground" src="@/assets/front/images/shopSectionBackground.png" alt="">
    </div>
</template>
<script>
import roundedButton from '@/components/front/shared/roundedButton.vue'
export default {
  components: { roundedButton },
    props:{
        data:Object
    }
}
</script> 
