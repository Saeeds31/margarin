<template>
    <div class="menuItem">
        <div class="menuHeader">
            <a >{{header.title}}</a>
        </div>
        <ul class="menuChild">
            <li  v-for="(item,index) in menuItem" :key="index">
                <a v-if="item.route!='#utilityLink#'" target="_blank" :href="item.route">
                    {{item.title}}
                </a>
                <a v-else style="cursor: pointer;" @click="$root.showUtilityModalFunction()">{{item.title}}</a>
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