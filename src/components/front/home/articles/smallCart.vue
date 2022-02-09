<template>
  <router-link :to="`/weblog-detail/${article.id}/${$root.slugGenerator(article.title)}`" class="smallCart width30">
<div class="innerContent width100">
        <img class="width100" :src="$root.baseImageUrl+article.image" :alt="article.title" />
    <div class="content">
        <p class="width80 margin-auto">{{  `دسته بندی ${article.category}` }}</p>
    <h1 class="width80">{{ article.title }}</h1>
    <div class="articleDate d-flex justify-content-end width80 ">
      

      <p class="d-flex flex-direction-column">
        <span>منتشر شده</span>
        <span>{{article.createDate }}</span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="50"
        height="50"
        viewBox="0 0 70 70"
      >
        <g id="dateSvg" transform="translate(-593 -6102)">
          <g
            id="Rounded_Rectangle_12"
            data-name="Rounded Rectangle 12"
            transform="translate(593 6102)"
            fill="rgba(255,255,255,0)"
            stroke="rgba(255,255,255,0.2)"
            stroke-linejoin="round"
            stroke-width="6"
          >
            <rect width="70" height="70" rx="15" stroke="none" />
            <rect x="3" y="3" width="64" height="64" rx="12" fill="none" />
          </g>
          <image
            id="Layer_2388"
            data-name="Layer 2388"
            width="24"
            height="24"
            transform="translate(616 6125)"
            opacity="0.702"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAb1JREFUSEvtlssrRVEUh12PFBJhouSWCSURMVEGShh4TYwYSCZSMvE3mMhESTJgZIIoSRkoEyKSPAaKlBIioeRxfb9aR7tT1/uWZNXXWnudvdfa730CoVAoCqmGBsiEgBzfEAU8gWmYD5BAwZthAtbg8RvB1TQWSryYSjDkZfMFLqe8CxeOP9fsPceXhp0Hy772NZTrlWAGow3OnQop2OMwBaOOf9DsTsento3QAleOP11tlWAWoxUufT0oonwA144/aPah40vGzoENX/tUymNvJfDV/3TxP8G7U/bhKeogVIKFWzJdYfoOPQxdEGO+BfQOfDiBtqu2rWTEdLtpbUttz0mIM98AevFXJSijN/HWO50Lifa95B5WQKc+2nz76NNwI8jnQ61V1J3UDzq1iebT0CWVpm/ROt09oDtIMgfb4RKoYbdVfEA3wY+uQcQTZNBjb36fsVehGLwdcmSjy3ZGuY5dCt4aaJ3Owk1RAR/qnMZ9NmVJ5tMel1SZvkFrW/Y6ndDtvPW31sB9cPQ6BW34T+hN0LR5a3Bs37KcadR0FIJ3VRxi6xV8fXDCPZkW48vq9cmM+KOvLkbst+UFAkLnJQPZBAkAAAAASUVORK5CYII="
          />
        </g>
      </svg>
    </div>

    </div>
    <div class="backgroundGradient"></div>
</div>
  </router-link>
</template>
<script>
export default {
  props: {
    article: Object
  }
};
</script>
