<template>
    <div class="menuItem">
        <div class="menuHeader">
            <router-link :to="header.route">{{header.title}}</router-link>
        </div>
        <ul class="menuChild">
            <li data-aos="zoom-in" :data-aos-duration="1000+index*400"    data-aos-once="false" v-for="(item,index) in menuItem" :key="index">
                <router-link :to="item.route">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        header:Object,
        menuItem:Array
    }
}
</script>
<style lang="">
    
</style>