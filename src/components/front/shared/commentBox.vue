<template>
  <section id="commentBox">
    <titleBox v-if="comments.length>0" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true" :title="`${ comments.length} ${$cookie.get('ltrTheme')?'Comment provided ':'نظر ارائه شده است'}`">
   
<svg opacity="0.5" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="64px" height="64px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 3333.33 3333.33"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path fill="black" d="M353.33 2207.11l0 -715.72c82.2,-306.19 314.15,-472.33 774.49,-468.99 641.9,27.09 1134.91,-118.91 1265.04,590.5 56.93,310.03 31.9,773.35 -227.33,989.74 -212.09,177.03 -380.89,102.7 -678.43,174.06 -383.4,91.95 -295.85,278.59 -552.52,299.96 -34.42,-147.74 -38.76,-154.06 -38.76,-348.76 -287.06,-23.89 -493.11,-222.02 -534.8,-472.69l-7.69 -48.1zm2092.48 55.79c328.25,-76.48 381.39,-337.91 387.52,-600.48l0 -145.5c-13.13,-894.63 -200.19,-915.96 -1048.74,-920.26l-270.94 0c-292.05,9.29 -576.54,87.78 -656.55,387.52l932.71 -2.74c757.28,18.12 656,755.13 656,1281.46zm-637.04 -543.33c92.96,0 168.33,75.37 168.33,168.33 0,92.96 -75.37,168.33 -168.33,168.33 -92.96,0 -168.33,-75.37 -168.33,-168.33 0,-92.96 75.37,-168.33 168.33,-168.33zm-470 0c92.96,0 168.33,75.37 168.33,168.33 0,92.96 -75.37,168.33 -168.33,168.33 -92.96,0 -168.33,-75.37 -168.33,-168.33 0,-92.96 75.37,-168.33 168.33,-168.33zm-470 0c92.96,0 168.33,75.37 168.33,168.33 0,92.96 -75.37,168.33 -168.33,168.33 -92.96,0 -168.33,-75.37 -168.33,-168.33 0,-92.96 75.37,-168.33 168.33,-168.33z"/>
 </g>
</svg>

    </titleBox>
    <div data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true" class="commentsBox">
      <comment :likeRoute="likeRoute" @changeReplatTo="changeReplatTo"  v-for="comment in comments" :comment="comment" :key="comment.id" />
    </div>
    <titleBox data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true" :title="` ${$cookie.get('ltrTheme')?'Post your comment':'نظر خود را ارسال کنید'}`">
     <svg  opacity="0.5"  xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="64px" height="64px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 3333.33 3333.33"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path fill="black" d="M956.67 2560.49c0,126.33 61.38,194.5 174.35,214.93 173.97,31.48 1217.81,-544.01 1396.34,-626.73 182.53,-84.57 457.37,-141.11 509.31,-335.69l-1820.01 0c-56.89,118.61 -259.99,607.31 -259.99,747.5zm0 -1657.48c0,182.41 186.44,626.69 259.99,780.01l1820.01 0c-45.18,-169.28 -249.51,-229.28 -394.57,-287.97 -254.16,-102.8 -1360.8,-687.04 -1457.91,-687.04 -91.97,0 -227.52,103.18 -227.52,195z"/>
 </g>
</svg>


    </titleBox>

    <sendComment :field="field" :replyTo="replyTo" @changeReplatTo="changeReplatTo" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true" :route="routeComment" />
  </section>
</template>
<script>
import comment from "@/components/front/shared/comment/comment.vue";
import sendComment from "@/components/front/shared/comment/sendComment.vue";
import titleBox from "@/components/front/shared/comment/titleBox.vue";
export default {
  methods:{
    changeReplatTo(number){
      this.replyTo=number
    }
  },
  components: {
    titleBox,
    sendComment,
    comment
  },
  data() {
    return {
      replyTo:null,
    };
  },
  props: {
    comments: Array,
    routeComment:String,
    field:String,
    likeRoute:String,
  }
};
</script>
