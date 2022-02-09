<template>
  <div class="options width100">
    <h3 class="blackColor08">{{ title }}</h3>
    <button class="d-flex justify-content-end align-items-center">
      <span class="blackColor06">{{ value }}</span>
      <svg
        class="arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="10"
        viewBox="0 0 24 10"
      >
        <path
          id="_2_copy_5"
          data-name="2 copy 5"
          d="M1499,486v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm14-4v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Z"
          transform="translate(-1477 -476)"
          opacity="0.2"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    value: String
  }
};
</script>
<style scoped>
.options h3 {
  font-family: "yekan-heavy";
  font-size: 20px;
}
.options button span{
  font-size: 16px;
}
.options {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.options button {
    background: transparent;
    width: 100%;
    padding:25px 15px;
    border-radius: 15px;
    border: 2px solid var(--grayBackground);
}
.options button .arrow{
  margin:0 15px ;
}

</style>
