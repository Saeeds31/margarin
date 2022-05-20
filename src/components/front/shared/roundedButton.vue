<template>
  <a v-if="type == 'link'" id="roundedButton" :href="link">
 <span>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="16"
      height="18"
      viewBox="0 0 20 18"
    >
      <image
        id="Path_79_copy"
        data-name="Path 79 copy"
        width="20"
        height="18"
        opacity="0.6"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABHNCSVQICAgIfAhkiAAAAT5JREFUOE+l1M9KQkEUx/HGFM0CCQQNchESBb1JvUoQKoIuJC0XEkF7E59IXyAIooIiAjctTLPb99gxMO3OnduFHyPz5+OZ6zjG87wVv8cYk2X8kHld34k6aPxAsAzzaiRG+sxt29A/QbA0i+uKfdA2AZ9CgWCbLGyQOBGsBfZgw2R8ocJf2IQ5F2B3QbAFECxF5xlJEGdsDgTbkPdE1sgnuaSy26CVzeZNt6zYOZ1Jxa7ov3HFphUSqUy2ua7YPe1bGGwG7vGhoPhQ319Y7/tXZssHCMckolU+0spxcX5+jg3oPqtPFJVK63zZwFWcO4eguwBFRd9pT13RZQc7D1Qiq2REGqCvQStd+l+m0h2AsqJjOQWgL0FQv8shB1AhUSKoXA7PNtR2fW0DVBXtAV7/C5TFbH+L5gisY8Nk/AuevIxjAHKE/AAAAABJRU5ErkJggg=="
      />
    </svg>
 </span>
{{ title }} 
  </a>
 
    <button @click="clickedEvent()" v-else id="roundedButton" :type="buttonType" >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="18"
              height="16"
              viewBox="0 0 24 22"
            >
              <image
                id="Layer_647_copy_2"
                data-name="Layer 647 copy 2"
                width="24"
                height="22"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAKZJREFUSEtj3CggykAksAKqO0akWrgyRiItuAfUoQjE2UA8jRRLiLHgBtBAdSD+D8RuQLyHmhZQZDjIIfh8QLHh+CygiuG4LKCa4dgsoKrh6BZQ3XBkCx4AOfLkJkV8yRaUiu4DFSggKQKld6oBulgAci1Nwp+ukQwLc6r7BFtRQVVLcJVFVLNkwAo7qsXJgFc4MJ/AcnsmUGAGKdmcGB/AzCOr0gcAUdFMd5JVkjUAAAAASUVORK5CYII="
              /></svg
          ></span>
          {{title}}
        </button>

</template>
<script>
export default {
  props: {
    type: String,
    title: String,
    buttonType: String,
    link: String
  },
  methods:{
    clickedEvent(){
      this.$emit('buttonClicked')
    }
  }
};
</script>
<style scoped>
#roundedButton{}

</style>
