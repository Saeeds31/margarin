<template>
  <div id="switchTheme" class="d-flex justify-content-between align-items-end width25">
    <img id="moonSvg" src="@/assets/front/images/moon.svg" alt="" />
    <b-form-checkbox size="lg" v-model="switchTheme" switch> </b-form-checkbox>
    <img src="@/assets/front/images/sun.svg" alt="" />
  </div>
</template>
<script>
import { BFormCheckbox } from "bootstrap-vue";
export default {
  components: {
    BFormCheckbox
  },
  data(){
      return{

          switchTheme:true,
      }
  },
  watch:{
    switchTheme(val){
      if(val==false){
        document.body.classList.add("darkMode");
        this.$cookie.set("darkMode","true")
      }else{
        document.body.classList.remove("darkMode")
        this.$cookie.delete("darkMode")

      }
    }
  },
  mounted(){
    if(this.$cookie.get("darkMode")){
      document.body.classList.add("darkMode");
      this.switchTheme=false
    }
  }
};
</script>
<style >
.custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: #FEEFDD;
    background-color: #FEEFDD;
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::after{
 background-color: #F7941E;
}
</style>
