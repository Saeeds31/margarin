<template>
    <div
          class="simpleCooperationInput d-flex flex-direction-column align-items-end"
        >
          <label v-if="value||screenSize<999" class="cooperationFormLabel" :for="`${value}Input`">{{`: ${title} `}}</label>
          <input 
          :tabindex="tabindex"
            :id="`${value}Input`"
            v-model="mainValue"
            :type="type"
            :placeholder="screenSize>999?title:''"
          />
         
        </div>
</template>
<script>
export default {
  props:['value','title','type','tabindex'],
  data(){
    return{
      mainValue:this.value
    }
  },
  computed:{
    screenSize(){
     return this.$root.screenSize;
    }
  },
  watch:{
    mainValue(newVal){
      this.$emit('input',newVal)
    }
  }
}
</script>