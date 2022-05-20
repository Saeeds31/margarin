<template>
     <router-link  class="blogCart " :to="`/weblog-detail/${article.id}/${$root.slugGenerator(article.title)}`">
    <div class="innerContent width100">
      <img class="width100" :src="$root.baseImageUrl+article.image" :alt="article.title" />
      <div class="content width100 height100 d-flex flex-direction-column justify-content-end">
        <p class="category width80 margin-auto">{{ `${$cookie.get('ltrTheme')?"category:":'دسته بندی'} ${article.category}` }}</p>
        <h1 class="width80">{{ article.title }}</h1>
        <div class="articleDate">
          <div
            class="commentAndDate d-flex justify-content-end width80 margin-auto"
          >
            <div v-if="showComment" class="comment  d-flex align-items-center width50">
              <p class="d-flex flex-direction-column">
                <span>{{$cookie.get('ltrTheme')?"Comment":'تعداد نظرات'}}</span>
                <span>{{ `${article.commentCount} ${$cookie.get('ltrTheme')?"People":'نفر ثبت شده است'}` }}</span>
              </p>
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="50"
                height="50"
                viewBox="0 0 70 70"
              >
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="translate(-764 -6640)"
                >
                  <g
                    id="Rounded_Rectangle_12_copy"
                    data-name="Rounded Rectangle 12 copy"
                    transform="translate(764 6640)"
                    fill="rgba(255,255,255,0)"
                    stroke="rgba(255,255,255,0.1)"
                    stroke-linejoin="round"
                    stroke-width="6"
                  >
                    <rect width="70" height="70" rx="15" stroke="none" />
                    <rect
                      x="3"
                      y="3"
                      width="64"
                      height="64"
                      rx="12"
                      fill="none"
                    />
                  </g>
                  <image
                    id="Layer_2389"
                    data-name="Layer 2389"
                    width="24"
                    height="24"
                    transform="translate(787 6663)"
                    opacity="0.6"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAaxJREFUSEvNlr8rRlEYx12KGOTXYKBEosSOMihlQCKDDF6jgc3AH8Bgs0iKhVLvYmCQQVnEpCSDKJuF8iPl5/X51r1v1+2ee6+3+8qpT+95n+ec53vOeZ5z3teybXslL5m2TJhTfyjLETjBcZmlTjHzhiBUYJMBh1kKlDJv8V8JDLOauhi7WWXMI/x6B71Mqo0hsMWYJ4/APv0bU5KTyEHgmtwqSkJgDYUzj0oH/ZEgATmqDUd0hP0LOmEXXkNy0IVvLEhgAkejQWAD+wekYMGXA/89MArEyO+PIaYq+luBA0+CVGrPnjVWRpRtCf5xCD0i756X+HLuGNr4VE4UJKoZBXSGahUwCxK4gAHQpVPp6VK9Ryi84FcBuC2TA9ego5iHdWiHZthxsKOWH+A3CnwyOB8smAG9N9k0o8A10Y5hNBcCPQRNQytMgpLtPVf/Tq4w6JHT7VbTI9nv9HXkNbrJQduvx9gXcS4F+JtAZa283UILTIN+Hd803yQQETvjbqCXgnLYdkSm+JyDuyQEFKMQBqEbHqAsaQF3O3ogtZuqXAlIqAj0D2MP7mX4Bsc7ujkndWOAAAAAAElFTkSuQmCC"
                  />
                </g>
              </svg>
            </div>
            <div class="date d-flex align-items-center">
              <p class="d-flex flex-direction-column">
                <span>{{$cookie.get('ltrTheme')?"published":'منتشر شده'}}</span>
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
                    <rect
                      x="3"
                      y="3"
                      width="64"
                      height="64"
                      rx="12"
                      fill="none"
                    />
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
        </div>
      </div>
      <div class="backgroundGradient"></div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    article: Object,
    showComment:Boolean
  }
};
</script>