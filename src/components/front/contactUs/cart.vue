<template>
    <div class="contactCart width100  d-flex flex-direction-column align-items-end">
        <slot name="image">
            </slot>
                <p class="d-flex flex-direction-column align-items-end">
                    <span class="blackColor06">{{$cookie.get("ltrTheme")?data.title1_en:data.title1_fa}}</span>
                    <span class="blackColor08">{{$cookie.get("ltrTheme")?data.title2_en:data.title2_fa}}</span>
                </p>
                <slot name="footer" >
                </slot>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    }
}
</script>
<style scoped>
.contactCart {
    padding: 2%;
    background: white;
    border-radius: 10px;
    box-shadow:0 0 10px #00000029;
}
.contactCart p {
    margin:50px 0 15px;
    white-space: pre-wrap;
}
.contactCart p span:first-child{
    font-size: 19px;
    font-family:'yekan-bold'
}
.contactCart p span:last-child{
    font-size: 28px;
    font-family:'yekan-heavy'
}
.contactCart .footerDetail{
        font-size: 18px;
    font-family:'yekan-bold';
    text-align: right;
    direction: rtl;
}

.contactCart .headerSvg{
border-radius: 100%;
box-shadow: 5px 8px 100px #b0090e7d;
}
</style>
<style>
    .ltrTheme .contactCart .footerDetail
{
    direction: ltr;
}
</style>