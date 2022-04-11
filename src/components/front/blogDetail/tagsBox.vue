<template>
  <section id="tagsSection" class="d-flex justify-content-between">
    <div
      class="d-flex justify-content-end align-items-center width60"
      id="tags"
    >
      <router-link class="blackColor06" v-for="(tag, index) in tags" :key="index" :to="`/weblogs?keyword=${tag}`">
        #{{ tag }}
      </router-link>
    </div>
    <div
   
      class="tagsTitles width20 d-flex justify-content-between align-items-center"
    >
  
      <p id="staticText" class="d-flex flex-direction-column align-items-end">
        <span class="blackColor06">{{$cookie.get('ltrTheme')?"Related topics":'موضوعات مرتبط'}}</span>
        <span class="blackColor08"> {{$cookie.get('ltrTheme')?"Read with this article":'با این مقاله را مطالعه کنید'}}</span>
      </p>
      <svg
        class="mainSvg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="70"
        height="70"
        viewBox="0 0 70 70"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.789"
            y1="1"
            x2="0.211"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#f7941e" />
            <stop offset="1" stop-color="#f0aa56" />
          </linearGradient>
        </defs>
        <g
          id="Group_286"
          data-name="Group 286"
          transform="translate(-1435 -2537)"
        >
          <g id="Group_1" data-name="Group 1">
            <circle
              id="Ellipse_4"
              data-name="Ellipse 4"
              cx="35"
              cy="35"
              r="35"
              transform="translate(1435 2537)"
              fill="url(#linear-gradient)"
            />
            <image
              id="Layer_2604"
              data-name="Layer 2604"
              width="24"
              height="20"
              transform="translate(1458 2562)"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAABHNCSVQICAgIfAhkiAAAAR9JREFUOE/dlTFqQkEQhn2IEgtBLIyIjSRiLxbmFGLjGfQCVh7AwkLSmEYQK0uPIGJhITZCQIKkSzCFBHKA5zfFQljHYgpf4YOvePPvv78zuw+DMAyHsctnTGkHmqYsv14KCAiRj/ALcXiGJszhv2bamMUZeHQBHV7eIA/fXoDTrAFtDKPIAjakHeABGl4HTrN28IShJh0sFGeP2go0zRQkASaDdbEEzBTTgJqMRtNMGe6QP3B9QRJevDNwmmljFhegHNktuvl38Ek7P5CAqjcip1lHlMNQkhFNFOcrtS1omikokmu6Vn5Sl9oSNM3cgXxpstEeUtDyzsBppo1ZXIH6/VzTE+38gfzhFL0ROc06ojSGrIyorzin1N5B00xBZ2tCn7V5BjJJAAAAAElFTkSuQmCC"
            />
          </g>
        </g>
      </svg>
    </div>

  </section>
</template>
<script>
export default {
  props: {
    tags: Array
  },


};
</script>
<style scoped>
@media (min-width: 1000px) and (max-width: 1200px) {
  #blogDetailSection #tagsSection #staticText span:last-child {
    font-size: 12px;
  }
  #blogDetailSection #tagsSection #staticText {
    margin-right: 10px;
  }
}
.rotate270{
  transform: rotate(270deg);
}
.rotate90{
  transform: rotate(90deg);
}
</style>
