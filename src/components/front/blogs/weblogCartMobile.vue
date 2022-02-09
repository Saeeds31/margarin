<template>
     <router-link class="blogCartMobile" :to="`/weblog-detail/${article.id}/${$root.slugGenerator(article.title)}`">
    <div class="innerContent width100">
      <img class="width100" :src="$root.baseImageUrl+article.image" :alt="article.title" />
        <p class="category width80 margin-auto">{{  `دسته بندی ${article.category}` }}</p>
      <div class="content width100 height100 d-flex flex-direction-column justify-content-end align-items-end">
       <p class="blackColor04">{{"منتشر شده در "+' article.createDate'}}</p>
        <h1 class="width80">{{ article.title }}</h1>
        <doubleLine />
   <div>
     <span>
       {{"دقیقه "+'Read'+" زمان مطالعه "}}
     </span>
     <span>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <image
          id="Layer_2708a"
          data-name="Layer 2708a"
          width="24"
          height="24"
          opacity="0.502"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAgJJREFUSEu1lssrRVEUh12vSAbeYSpGKAZGXpkw8MiMzAyUTDDgT2DCRMrATEaSx4CSvKIUA2ZKJkLyKEnkdX0/9tU5xz3HuXFP/dq7vdde395r7b3uDQSDwRi3byE9J4W5fJSHck0r83N0YdqzptvLBzcfgXAAHMeyoBJVoTjL4ifTT7KMvdHfRFuA3p2gHwCcZ2HUYnb+SHuIzsxub4yDDHMana4EJRubOSBXVogNgPNSJhtRPDpG8yy4dzu+xlmTStOMCtArWmTNQWjNN8DsvIsJJWUZo30vx8451pczVo8CaCJ0kk+AiXmnCYt2ENY5dkp2DPNK8o/PQBQBhXRSOQkBqhmoVVgYnHLbOQ56DWDUw6bDhGsNXxuB+bRsXcU+9IzGvWIOYNAAhjwAykk3SkQjAhTSaUe7OF/yirsfgNZj10BTgaYFqKEjzQLQlXT9IgDo6raidQHa6BShMQDX/wTIxE8POhKgn04CGgbgXje+jq4c6GWPYKtHGPbDTld1AL1EClCulLM7NAPkNBzBCYgkRDqpEliGVHdW0Y7z5ABsIarBSPo1yaHd4qCYvh6UruIKgG3rSZi3Jdn3NXU4UcGrQ3sAThxztmvq+6G5JdXh3P7QTC3yVSp8AuylIpJi9xvAtdhpYVTLteV2RO8HxwKJ3k+mBRK9H33Hlfvz35YP+zg06Jy4zIQAAAAASUVORK5CYII="
        />
      </svg>
     </span>
     <span>{{'نظر'+article.timeToRead}}</span>
     <span>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <image
          id="Layer_2710"
          data-name="Layer 2710"
          width="24"
          height="24"
          opacity="0.502"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAmVJREFUSEu1ls1LVFEYh50WKoGSYmqSH6UV4kINEYREAkGQUjdhpBGViKII+o+IE4QiDAjqyoW5aKG4EmtRposMESMbC/uAKTW1TU7PL88d5sM7EzPXAw/33nPPeZ9zzj1z3nH5/f4kuzKTmePiXRFUwgX4YzjieggrsNbk+6rnE4vrJAGB00xQBc6wHcHxi114DW8Q/QpvGyEguEZ6H86axt/VGd6DZnTGoHbVkG3a/eY6juRTsCREQPCLvGyHVFiHBTpsRZsBfYp4XwvFECEJCGhYSIM2SIZlmCG4/QcKsppv1UxVRbjkn4AGKbzoNyN/xfX5/wa3PEZym+frRuImxoElqKGyATaoHI+2JDGWS9/oLlyDOWItup5lZOuj9cE5GKPyQ7wC9WMmBVwewQ9wS1DGzR3YJvhIIsGDlqub+xyYkKCVm1KYRqAfTqAwGu2okhjSiGWlXxV9bsE7CawgHgRehwS5xOmCjxI84OYSjCL47NASWQKvBI8Jmg/DCL6chqCToHnwFME3h5doSzO4R9CrMIXgrUMCnVGNsCbBDW7q4QWCWYeWqIc452Ey+HewjmAyUQFbVBtGG+cnDEmgE7QDfAjciQjMeaRtr5N1nngLEqTzMAA7VAzGKzDBW+hfDjq2nxBvXwJtUW1VLxWeeARRj2sEdQS9Cavw0kzvMtc9WIp1+Jk8oo1yxYw8JKtpBg95oWRjV5QylSNCjhGe9e1ip0wEvTTMMtF9XJV7N41UGUoZLlrRsaykv6wEE95QM1Dy1tmxSQM1DhSmr9ysfxYarf5dZIKSipbP+jOg09Q2tf4FSIYH8ck2jp0AAAAASUVORK5CYII="
        />
      </svg>
     </span>
    
   </div>
      </div>

    </div>
  </router-link>
</template>
<script>
import doubleLine from "@/components/front/shared/doubleLine.vue"
export default {
  components:{
doubleLine
  },
  props: {
    article: Object,
    showComment:Boolean
  }
};
</script>
