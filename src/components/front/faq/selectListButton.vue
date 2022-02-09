<template>
  <div @click="callBackClick" class="selectButton">
    <p>
      <span>
        {{ title }}
      </span>
      <span>
        {{ summary }}
      </span>
    </p>
    <slot> </slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    summary: String,
    id:Number
  },
  methods: {
    callBackClick(){
      this.$emit('categoryClicked',this.id)
    }
  }
};
</script>
