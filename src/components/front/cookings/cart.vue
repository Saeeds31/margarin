<template>
  <div @click="goToRoute(`/cooking-detail/${data.id}/${$root.slugGenerator(data.title)}`)" class="cookingCart d-flex flex-direction-column align-items-end">
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
    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"/></svg>
      <span> {{ `${0} ${this.$cookie.get("ltrTheme")?"Like":"لایک"}` }} </span>
    
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25" height="25"
	 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
<g>
	<g id="heart_x5F_stroke">
		<g>
			<path style="fill:#030104;" d="M23.113,6c2.457,0,4.492,1.82,4.836,4.188L16.004,23.906L4.051,10.188C4.395,7.82,6.43,6,8.887,6
				c2.016,0,3.855,2.164,3.855,2.164L16,11.625l3.258-3.461C19.258,8.164,21.098,6,23.113,6 M23.113,2
				c-2.984,0-5.5,1.578-7.113,3.844C14.387,3.578,11.871,2,8.887,2C3.984,2,0,5.992,0,10.891v0.734L16.008,30L32,11.625v-0.734
				C32,5.992,28.016,2,23.113,2L23.113,2z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

      <span>
        {{`${this.$cookie.get("ltrTheme")?data.timeToRead+'Minutes'+' Time training'  :data.timeToRead+'دقیقه'+' زمان آموزش'}`}}
        
        
        
      </span>
     <svg width="25" height="25" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 0v1h1v.03c-1.7.24-3 1.71-3 3.47 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.45-.1-.87-.25-1.25l-.91.38c.11.29.16.57.16.88 0 1.39-1.11 2.5-2.5 2.5s-2.5-1.11-2.5-2.5 1.11-2.5 2.5-2.5c.3 0 .59.05.88.16l.34-.94c-.23-.08-.47-.12-.72-.16v-.06h1v-1h-3zm5 1.16s-3.65 2.81-3.84 3c-.19.2-.19.49 0 .69.19.2.49.2.69 0 .2-.2 3.16-3.69 3.16-3.69z"
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
  },
  methods:{
    goToRoute(path){
      if(window.innerWidth<1000)
      this.$router.push(path)
    }
  }
};
</script>
