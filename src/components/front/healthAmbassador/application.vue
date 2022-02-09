<template>
  <div id="application" class="width80 margin-auto d-flex justify-content-around  align-items-center">
    <div id="content" class="width40 d-flex flex-direction-column align-items-end">
      <h2 class="blackColor06">{{ data.title }}</h2>
      <h1 class="blackColor06">{{ data.summary }}</h1>
      <div id="routes" class="d-flex">
        <a class="d-flex align-item-center" :href="data.iosRoute">
          <div class="d-flex flex-direction-column align-items-end">
            <span class="blackColor06">نسخه ای او اس</span>
            <span class="blackColor06">دریافت از پلی استور</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.004"
            height="23.002"
            viewBox="0 0 19.004 23.002"
          >
            <path
              id="iconIphone"
              d="M607.707,4439.74a5.264,5.264,0,0,1,3.437-1.743,5.027,5.027,0,0,1-1.215,3.673,4.345,4.345,0,0,1-3.461,1.627A4.768,4.768,0,0,1,607.707,4439.74Zm6.677,18.4c-.974,1.4-1.981,2.8-3.571,2.825-1.565.03-2.067-.913-3.852-.913s-2.347.884-3.825.942c-1.535.057-2.7-1.515-3.684-2.911-2.005-2.854-3.537-8.069-1.478-11.589a5.722,5.722,0,0,1,4.826-2.883c1.508-.028,2.932,1,3.852,1s2.651-1.235,4.469-1.054a5.476,5.476,0,0,1,4.267,2.278,5.2,5.2,0,0,0-2.519,4.38,5.087,5.087,0,0,0,3.131,4.652A12.579,12.579,0,0,1,614.384,4458.143Z"
              transform="translate(-596.996 -4437.997)"
              fill="#b10e14"
            />
          </svg>
        </a>
        <a class="d-flex align-item-center" :href="data.androidRoute">
          <div class="d-flex flex-direction-column align-items-end">
            <span class="blackColor06">نسخه اندروید</span>
            <span class="blackColor06">دریافت از گوگل پلی</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.999"
            height="23"
            viewBox="0 0 21.999 23"
          >
            <path
              id="iconAndroid"
              d="M804.431,4460.6l10.782-10.566,4.4,3.98-12.228,6.613a3.025,3.025,0,0,1-2.957-.027ZM803,4458.226v-17.458a2.64,2.64,0,0,1,.411-1.4l10.724,9.694-10.752,10.537A2.648,2.648,0,0,1,803,4458.226Zm13.25-9.211,3.85-3.771,3.426,1.853a2.692,2.692,0,0,1,0,4.8l-2.559,1.384Zm-11.77-10.64a3.03,3.03,0,0,1,2.907-.008l11.376,6.153-3.592,3.52Z"
              transform="translate(-803 -4437.999)"
              fill="#f7941e"
            />
          </svg>
        </a>
      </div>
    </div>
    <img class="width40" :src="data.image" :alt="data.title" />
    <div id="logos">
      <img :src="data.logos" alt="مارگارین" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
};
</script>
