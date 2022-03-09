<template>
  <div  class="selectCooperationInput d-flex justify-content-between align-items-center">
       <multiSelect
        :tabindex="tabindex"
       
        :allow-empty="false"
        :show-labels="false"
        
        v-model="selectedValue"
        deselect-label="یک گزینه باید انتخاب شود" 
        :options="value"
      >
     
      </multiSelect>
      <label class="blackColor06">{{title}}</label>

  </div>
</template>
<script>
import multiSelect from "vue-multiselect";

export default {
  components: {
    multiSelect
  },
  watch:{
      selectedValue(newVal){
          this.$emit("selectValue",newVal)
      }
  },
  data(){
      return{
          selectedValue:this.value[0],
        
      }
  },
  props:{
    tabindex:Number,
      title:String,
      value:Array
  }
};
</script>
<style scoped>
.blackColor06{
    font-size: 20px;
    width: 30%;
    text-align:right
}
@media (max-width:1000px){
.blackColor06{
  font-size:14px
}
}
</style>
<style>
.selectCooperationInput  .multiselect__single{
  font-size:20px;
}
</style>