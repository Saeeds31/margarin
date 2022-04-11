<template>
    <header :class="{'reStyleHeaderContent':$root.sectionIndexHome!=1}" id="headerContent" class="d-flex width90 align-items-center justify-content-between hiddenInMobile">
        <buttons />
        <menuBar v-if="$root.sectionIndexHome==1" />
        <logo v-if="$root.sectionIndexHome==1" />
        <logo v-else  data-aos="flip-left"
      data-aos-duration="2500"

      data-aos-once="false" class="width5"/>
    </header>
</template>
<script>
import Logo from "@/components/front/shared/logo.vue"
import buttons from "@/components/front/home/slider/header/buttons.vue"
import menuBar from "@/components/front/home/slider/header/menu.vue"
export default {
    components:{
        buttons,menuBar,Logo
    }
}
</script>