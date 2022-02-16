<template>
  <div class="cookingCart d-flex flex-direction-column align-items-end">
    <div class="image">
      <img v-if="data.image!=null" :src="$root.baseImageUrl+data.image" :alt="data.title" />
      <div class="chef">
        <img v-if="data.userImage!=null&&data.userImage!='string'" :src="$root.baseImageUrl+data.userImage" :alt="data.userInfo" />
        <img v-else  src="@/assets/front/images/user.jpg" :alt="data.userInfo" />
        <h4 class="blackColor04">
          {{ data.userInfo!=" "?data.userInfo:this.$cookie.get("ltrTheme")?"Admin":"ادمین" }}
        </h4>
      </div>
    </div>
    <h1 class="blackColor06 width90 margin-auto">{{ data.title }}</h1>
    <double-line class="width50" />
    <div class="detail">
      <span> {{ `${data.commentCount} ${this.$cookie.get("ltrTheme")?'Comment':'نظر'}` }} </span>
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
      <span> {{ `${0} ${this.$cookie.get("ltrTheme")?"Like":"لایک"}` }} </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="22"
        viewBox="0 0 24 22"
      >
        <image
          id="Layer_2709a"
          data-name="Layer 2709a"
          width="24"
          height="22"
          opacity="0.502"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAphJREFUSEullctLVVEUh7uVWWn4qFSkhxiB5KMnOCgdmJOoTHtAkBZoOGkSKP0XDRo06k3ovUEDH6AOGmqIA1EsKFMxblgWKD4GZdHt+8U6dq6ec++BDnzsffZea/323mevdUKxWGyD83Rl5+bSPwEZsBWiMF4zN/tx1cjVwf4ArwdhL3yHORjF/pNjFpIAhpsYOAdHIOQRbJixXhx/ag77zTRn4aiHrVY8Bt2ydwTOM3AcVmAApmEj7IeTkAJa1VML2GBzsn8NUy77U2Y/gkBHqDMrp4iBqxb8IYNf3atitbt4r4dMeANaYSkswnPsv62x3837TUiFiAQu0imDPowH3cZOH5Ec+k3mpOEf8Bj7WR97fUcd+ZgEWumkwz0c5r0cNGYf9JrNt2M7kcB2B3MtsCSB27b9uzgt+TmZSL5a7GaS2G1n/g4sSKCRzj5ow/FDIsegc+xWV1e7jUqgnM4Z0Kr0kX8HDeRz/rp9zZAHvRJQDtyCbBhCoOc/BWrwPwZKuvtOHigTb4ASyPc2JRPmaJQD1fALnrHY6F8BPUyW0FyyIGEmx5MFdM/jf4j3Kzb2Ev+36q8KmEglbRUoQ3XPvwQRIfgeOwFl/Cv8+h2/OAETqaM9DMpUfXS1vg/Bs5hU5qbBMPZdbmMvAX3066A69Bme4KQdrXsIroqrDFd5mARd9bhbuE7AdqFEkeNOeA8RHP/VdQasAuuuF4Lq1yNsVELiHk8BE1FwbX0bDOLc5/ZE4ALvKtfL8ID5Ba9d+gqYSAGtSrOOrYcgQzZeQXsa9H/QEfqWjoQCFkw/oVrQ2YZhC1y21b4g+DuvlTtjSQVMRFdXV1hnrN0ETsigAvqNatXFtrLAJSWQgO1Cq1ad0S70fw5UFP8AhHYQ3T85bxcAAAAASUVORK5CYII="
        />
      </svg>
      <span>
        {{`${this.$cookie.get("ltrTheme")?data.timeToRead+'Minutes'+' Time training'  :data.timeToRead+'دقیقه'+' زمان آموزش'}`}}
        
        
        
      </span>
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
    </div>
    <div class="cookingRoute width90  d-flex justify-content-end">
        <router-link class="d-flex justify-content-around" :to="`cooking-detail/${data.id}/${$root.slugGenerator(data.title)}`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <image
          id="Layer_2716"
          data-name="Layer 2716"
          width="24"
          height="24"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAatJREFUSEu9lksrRVEUx91b3nkNMECSCRlIoShFBsrAQAkxMPcxfAcjAwbyKnXv4JaRAVEoGYiJ5DWQCXlcj8LvX3vfTqd7ziFtu37tffZaZ/3X3medfU4sUVGVE9KKsdVBDZRBofFN0z/ADVzCS1CMWICAArVBswn8Qf8MCqwmu8RzjdAJ/aHHntHLJqCM+6AS7uAULkwgCakpsFZUD00e303GV5noDPwCjcwNaB4O4AhevTdkGRcw1wrt8AUbcGb9vAK1TA7Bp3E6jwjsNzeY5OL0SbiWgxXQno5ACaTgt8GtmEQG4RHWIG0Furnogi3Y+0Hmpfg8mdX63TuZ6IFd2JFAEYNx0ANchvcIARXAPMzBTBbfPObGQIWwJAFVgZal7Pcjgvdi1/5qK6dgIcC/w6wiJYF+LlpgBW5DBJR5wgSfpp8N8a3GNgrHEhhmUA6L8BZwk5JYB+19VHCFyIcJuJeABipNrUC9v6m+t0HlNwmrIZlbk3y1gvi/CDjfIucP2XmZOn/R9OSdHhUScH7YScTpcW1fEKcfHCvi9JNpRZx+9L1HzZ9/W74BqCOenYm/r8wAAAAASUVORK5CYII="
        />
      </svg>
      <span>{{$cookie.get('ltrTheme')?'See More':'مشاهده جزئیات'}}</span>
    </router-link>
    </div>
  </div>
</template>
<script>
import doubleLine from "@/components/front/shared/doubleLine.vue";
export default {
  components: { doubleLine },
  props: {
    data: Object
  }
};
</script>
