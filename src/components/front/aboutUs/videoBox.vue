<template>
  <section  id="videoSection">
    <div class="posterVideo">
<img class="width100" :src="$root.baseImageUrl+image"   :alt="title">
     <div class="backgroundGradientTheme"></div>
    </div>
    <div id="content" @click="showVideo()" class="d-flex flex-direction-column align-items-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="79.72"
        height="79.72"
        viewBox="0 0 79.72 79.72"
      >
        <g
          id="Group_100000"
          data-name="Group 100000"
          transform="translate(-1366 -2024.78)"
        >
          <circle
            id="Ellipse_3_copy_6"
            data-name="Ellipse 3 copy 6"
            cx="39.86"
            cy="39.86"
            r="39.86"
            transform="translate(1366 2024.78)"
            fill="#fff"
            opacity="0.149"
          />
          <image
            id="Layer_2504"
            data-name="Layer 2504"
            width="24"
            height="24"
            transform="translate(1394 2053)"
            opacity="0.8"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAWtJREFUSEvVlk0rhFEUx+ehJLMQCzSKncIH8AFkyUoWRmIxYmPlo5BIXosslI2tpQWKhWyVphRlIYXE4/eve+r21GCeee5ibv26586dc/5z7tuZKI7jnGsR/QAMwSNcQ9km0/aRE+gmwCoUEoFuGK/ARS0CXThvgPpK7ZyJZbitVkgZLOI07Ryv6HegFYrQlwh46jK9+6+QBPb4cj+8wQi8O2fticbz0OMF/MY+gXV4+EtIAkq/waVvmfh+jQzGoAQd3sQn9hFswnMlIQlcuklt6Mwvv6iJuQmYBS2hNWV+ALvwmvSvRsB88xhToD1q8QK+YG/DIXzY52kEzLfNZTNOr+ysPWHoVB7DVy0CFrATYw5GQXtp7QxjKQsBC9iLsQDDoBOotp+lgAkNYqxBM5TrSiDYEgXb5GDHNNhFS/1UBH/sgj/XyYKzxQVph0nIpOAEL5m64kGLvr0heqC0JPrbosKhQnTvvY6pzB+huLghB2V72AAAAABJRU5ErkJggg=="
          />
        </g>
      </svg>

      <h3 class="whiteColor08">
         {{ title }}
      </h3>
      <h1>
        {{ shortTitle }}
        <!--  -->
      </h1>
    </div>
     <div  id="showVideoBox" v-if="showVideoBox">
        <button id="closeModal" @click="showVideoBox=false">
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
        </button>
  <video-player  class="video-player-box"
                 ref="videoPlayer"
            
                 :options="playerOptions"
          >
  </video-player>

    </div>
   
  </section>
</template>
<script>
import VueCoreVideoPlayer from "vue-core-video-player";
export default {
  components: {
    VueCoreVideoPlayer
  },
  data() {
    return {
      showVideoBox:false,
       playerOptions: {
         autoplay: true,
          sources: [{
            type: "video/mp4",     
            src: this.video,
          }],
        },
     
    };
  },
  props:{
    title:String,
    shortTitle:String,
    poster:String,
    video:String,
    image:String
  },
  mounted(){
    this.setStyle();
  window.addEventListener("resize",this.setStyle)
  },
  beforeDestroy(){
window.removeEventListener("resize",this.setStyle)
  },
  methods:{
    showVideo(){
          
  this.playerOptions.sources[0].src=this.$root.baseImageUrl+this.video;
      this.showVideoBox=true;
    },
    setStyle(){
      if(window.innerWidth>1000){
        
          this.$root.setProportionStyle(
            "bottom",
            "%",
            "#videoSection #content",
            1920,
            15,
            1496,
            15
          );
          
          this.$root.setProportionStyle(
            "right",
            "%",
            "#videoSection #content",
            1920,
            10,
            1496,
            10
          );
          this.$root.unsetInlineStyle("font-size","#videoSection #content h1")
          this.$root.unsetInlineStyle("font-size","#videoSection #content h3")
          
          
      }else{
          this.$root.setProportionStyle(
            "bottom",
            "%",
            "#videoSection #content",
            999,
            15,
            375,
            5
          );
          
          this.$root.setProportionStyle(
            "right",
            "%",
            "#videoSection #content",
            999,
            10,
            375,
            7
          );
          
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#videoSection #content h1",
            999,
            38,
            375,
            18
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#videoSection #content h3",
            999,
            18,
            375,
            12
          );
      }
    }
  }
};
</script>

<style >
.posterVideo{
     background: white;
    position: relative;
    box-shadow: 0 0 10px #12131452;
    padding: 15px;
    border-radius: 15px;

}
#showVideoBox{
  position: fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
      display: flex;
    justify-content: center;
    align-items: center;
    background-color:#000000b3;
    z-index: 100;
}
button#closeModal {
    position: fixed;
    right: 1%;
    top: 1%;
    border-radius: 10px;
    padding: 10px;
    background: silver;
    z-index: 100000;
}
#showVideoBox .video-player{
    width: 80%;
    height: 80%;
    margin: 10%;
}
#showVideoBox .video-player .video-js{
  width: 100%;
  height: 100%;
}
</style>