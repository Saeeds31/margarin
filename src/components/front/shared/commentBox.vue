<template>
  <div id="commentBox">
    <titleBox v-if="comments.length>0" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true" :title="`${ comments.length} ${$cookie.get('ltrTheme')?'Comment provided ':'نظر ارائه شده است'}`">
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="64"
        height="64"
        viewBox="0 0 64 64"
      >
        <image
          id="Layer_2558"
          data-name="Layer 2558"
          width="64"
          height="64"
          opacity="0.102"
          xlink:href="data:image/png;base64,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"
        />
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
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
  <image id="Layer_2561" data-name="Layer 2561" width="64" height="64" opacity="0.102" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAA2VJREFUeF7tm9vLDVEYxn2S3Eg53Es+Sbl3oWwKfwL3PhckNw5/gfMp58SHUqKUJBfIMSTlQsknInJKDiHns99TMzVte89aM3v2mlmzvreeZu+Zd633fZ+99rsOs1bPkP9lGLfGg17wC1wDX1ro1eJWTyKKoXxeCFaBsYn7P/l8HWwHx8HfWkQeBRETMILvF8E0Q3ADPF8DjoLfdSAiJmAfwfRlCOgBuuvAIaAW4q2IgLngdM4InlBuA9gPvuWso9RiImAXWNyhFy8pvwnsAZ87rMtpcRFwF0wuyOob6tkKdoIPBdXZ1WpEwFswumArCn5HRIbqr6yIgEtgRpc8/BT9LTZz1d+kciICtoGlXfZMCbIfKGE+7bKtTNWLgAbQGMCF/MCIuk51oQ9dGDTZiMcB91CcZFIu8LkGUUeABlVKwqVJTMAyPFA35lr+YFDD69XglmvjshcToLH/czC8DCcim6e4ah5yw6UPycmQmuR8l8bb2DoXEXHZhS9JAhoYdJUMbWK7GhFxxkY5r06SANXhOhna+H0zIuIk18Kn4s0ELMfIRhuvStC5HSXLY1yVPAuRZgKqkAxNgamVrgWHgVasOpJmAlRZVZKhKbBHKKwHB4EGWLmkFQEzqelCrtrKKaTuW3/bveBrVhdaEaB7amZaFPVJXuHsFrAbfLR1vBUBKrsCaOLio7zDaU3wtIirz6nSjoBxlHoGyhwZmnw3PVcr0GqXWsXrdsrtCJC+Vn7nmax48FzvNJQflCdeNPubRsAslM97EKCti99RVI+hnuNxXCiNAD27DybaWvBETz3FEnBA/qYRoOcrI8Y8iS2Tm1rBXmQioA7JMI2VOSYCVFjLV6ZXZpmor5DygA0BFfK3eFcGCSieU79qHGwBFr9X0Ekw+G4w6IFQ8EPh4CdDQU+H65D8OloQCXpJLPhF0eCXxYN+MRL8q7HgX44G/Xq8wcww6A0SVUl+pWyRqULyK3WTVPDb5Fwnv0ptlHSZ/Cq5VTb4zdJX6P6mWyyO5lHxYrv8eyIblSe6lDJeHZi4QyBTCiLAyyMzOsiwoEMCvD40NZvgz+YkoBbH5hR70AcnRcBIcAJoKTxNant0Ng5ah6e1D3dMggXtqdEhBp0FrO3h6eSvrkXRCWAq0DZUHWXx+nxwWpP+B0M02fe7acj4AAAAAElFTkSuQmCC"/>
</svg>

    </titleBox>

    <sendComment :field="field" :replyTo="replyTo" @changeReplatTo="changeReplatTo" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true" :route="routeComment" />
  </div>
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
