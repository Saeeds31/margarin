<template>
    <div
          class="iconCooperationInput justify-content-between d-flex align-items-center"
        >
        <slot>
            </slot>
          <input 
        :tabindex="tabindex"

            :id="`${value}Input`"
            v-model="mainValue"
            :type="type"
            :placeholder="title"
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
  watch:{
    mainValue(newValue){
      this.$emit("input",newValue)
    }
  }
}
</script>