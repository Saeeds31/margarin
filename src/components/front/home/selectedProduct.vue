<template>
    <div id="selectedProductSection" class="">
        <sectionHeader   :data="headerData" />
        <slider :products="products" />
        <footerLinker   :data="headerData"  />
    </div>
</template>
<script>
import slider from "@/components/front/home/selectedProduct/slider.vue"
import sectionHeader from "@/components/front/shared/sectionHeader.vue"
import footerLinker from "@/components/front/shared/footerLink.vue"
export default {
    components:{
        sectionHeader,slider,footerLinker
    },
    data(){
        return{
            headerData:{
                title:this.$cookie.get('ltrTheme')?"Selected and superior products":"محصــــــولات مــــــنتخب و برتــــــر",
                summary:this.$cookie.get('ltrTheme')?"Production with the best raw materials":"تولیـــــد بـــــا بهتریـــــن مـــــواد اولیـــــه",
                routeTitle:this.$cookie.get('ltrTheme')?"Margarine products":"محصولات مارگارین",
                route:"/products",
                image:false
            }
        }
    },
    props:{
        products:Array,
    },
     mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods:{
    setStyle(){
      
    }
  }
}
</script>