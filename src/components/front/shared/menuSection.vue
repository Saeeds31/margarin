<template>
    <div class="menuItem">
        <div class="menuHeader">
            <a >{{header.title}}</a>
        </div>
        <ul class="menuChild">
            <li  v-for="(item,index) in menuItem" :key="index">
                <a target="_blank" :href="item.route">
                    {{item.title}}
                </a>
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