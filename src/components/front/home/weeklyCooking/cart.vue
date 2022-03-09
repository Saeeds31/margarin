<template>
  <div class="cart width100 d-flex justify-content-between">
    <div data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"  class="imageBox width60 d-flex justify-content-center align-items-end hiddenInMobile">
      <img  class="width60 " :src="$root.baseImageUrl+data.image" :alt="data.title" />
    </div>
    <div data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false" class="body width50 d-flex flex-direction-column align-items-end">
      <div  class="header d-flex justify-content-end align-items-start">
         	 <svg
			  id="cookingHomeSvg"
            version="1.1" height="80"   width="50" class="showInMobile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 469.333 469.333"
            style="enable-background: new 0 0 469.333 469.333"
            xml:space="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M394.667,384H74.75c-5.885,0-10.656,4.771-10.667,10.656l-0.042,31.104c-0.01,11.635,4.51,22.573,12.729,30.802
				c8.229,8.24,19.156,12.771,30.792,12.771h254.25c24,0,43.521-19.521,43.521-43.521v-31.146
				C405.333,388.771,400.563,384,394.667,384z"
                  />
                  <path
                    d="M352,42.667c-6.531,0-13.24,0.656-20.344,1.979C307.25,16.187,272.271,0,234.667,0c-70.583,0-128,57.417-128,128
				c0,5.885-4.781,10.667-10.667,10.667c-5.885,0-10.667-4.781-10.667-10.667c0-23.094,5.313-45.438,15.792-66.406
				c1.865-3.729,1.385-8.198-1.219-11.448c-2.604-3.229-6.865-4.667-10.906-3.677C36.594,59.542,0,106.229,0,160
				c0,44.333,25,84.635,64.25,104.562l-0.115,87.427c0,2.823,1.115,5.542,3.115,7.552c2.01,2,4.719,3.125,7.552,3.125h319.865
				c5.896,0,10.667-4.771,10.667-10.667v-87.594c39.104-19.979,64-60.219,64-104.406C469.333,95.302,416.698,42.667,352,42.667z
				 M156.104,296.25c-1.99,1.625-4.385,2.417-6.76,2.417c-3.083,0-6.146-1.333-8.26-3.896c-3.521-4.302-34.417-42.76-34.417-70.771
				c0-5.896,4.771-10.667,10.667-10.667c5.896,0,10.667,4.771,10.667,10.667c0,15.438,18.146,43.292,29.583,57.229
				C161.312,285.792,160.656,292.51,156.104,296.25z M245.333,288c0,5.896-4.771,10.667-10.667,10.667S224,293.896,224,288v-64
				c0-5.896,4.771-10.667,10.667-10.667s10.667,4.771,10.667,10.667V288z M328.25,294.771c-2.115,2.563-5.167,3.896-8.25,3.896
				c-2.385,0-4.781-0.792-6.76-2.417c-4.552-3.74-5.219-10.458-1.49-15.01c11.438-13.969,29.583-41.854,29.583-57.24
				c0-5.896,4.771-10.667,10.667-10.667c5.896,0,10.667,4.771,10.667,10.667C362.667,252.01,331.771,290.469,328.25,294.771z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>



        <div class="titles">
          <h1>{{ $cookie.get('ltrTheme')?'Weekly cooking instructions':'دســـتورات پـــخت هفتـــه' }}</h1>
          <h4>{{ data.title }}</h4>
        </div>
        <div class="image showInMobile">
      <img class="width90" :src="$root.baseImageUrl+data.image" :alt="data.title" />

        </div>
		 <svg
            version="1.1"
            id="cookingHomeSvg"  height="80"   width="50" class="hiddenInMobile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 469.333 469.333"
            style="enable-background: new 0 0 469.333 469.333"
            xml:space="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M394.667,384H74.75c-5.885,0-10.656,4.771-10.667,10.656l-0.042,31.104c-0.01,11.635,4.51,22.573,12.729,30.802
				c8.229,8.24,19.156,12.771,30.792,12.771h254.25c24,0,43.521-19.521,43.521-43.521v-31.146
				C405.333,388.771,400.563,384,394.667,384z"
                  />
                  <path
                    d="M352,42.667c-6.531,0-13.24,0.656-20.344,1.979C307.25,16.187,272.271,0,234.667,0c-70.583,0-128,57.417-128,128
				c0,5.885-4.781,10.667-10.667,10.667c-5.885,0-10.667-4.781-10.667-10.667c0-23.094,5.313-45.438,15.792-66.406
				c1.865-3.729,1.385-8.198-1.219-11.448c-2.604-3.229-6.865-4.667-10.906-3.677C36.594,59.542,0,106.229,0,160
				c0,44.333,25,84.635,64.25,104.562l-0.115,87.427c0,2.823,1.115,5.542,3.115,7.552c2.01,2,4.719,3.125,7.552,3.125h319.865
				c5.896,0,10.667-4.771,10.667-10.667v-87.594c39.104-19.979,64-60.219,64-104.406C469.333,95.302,416.698,42.667,352,42.667z
				 M156.104,296.25c-1.99,1.625-4.385,2.417-6.76,2.417c-3.083,0-6.146-1.333-8.26-3.896c-3.521-4.302-34.417-42.76-34.417-70.771
				c0-5.896,4.771-10.667,10.667-10.667c5.896,0,10.667,4.771,10.667,10.667c0,15.438,18.146,43.292,29.583,57.229
				C161.312,285.792,160.656,292.51,156.104,296.25z M245.333,288c0,5.896-4.771,10.667-10.667,10.667S224,293.896,224,288v-64
				c0-5.896,4.771-10.667,10.667-10.667s10.667,4.771,10.667,10.667V288z M328.25,294.771c-2.115,2.563-5.167,3.896-8.25,3.896
				c-2.385,0-4.781-0.792-6.76-2.417c-4.552-3.74-5.219-10.458-1.49-15.01c11.438-13.969,29.583-41.854,29.583-57.24
				c0-5.896,4.771-10.667,10.667-10.667c5.896,0,10.667,4.771,10.667,10.667C362.667,252.01,331.771,290.469,328.25,294.771z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

      </div>

      <p class="description width70">
        {{ data.shortDescription }}
      </p>
      <p class="seen">
        {{ $cookie.get('ltrTheme')?`Time to read the article ${data.timeToRead} Minutes`
        :`زمان  مطالعه مطلب ${data.timeToRead} دقیقه می باشد` }}
      </p>
<div class="loading">
    <span></span>
</div>
      <div class="buttons width75 d-flex justify-content-between">
        <router-link class="kitchen width45" to="/cooking-archive">
     <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3287 11.0002V13.0002L7.50042 13.0002L10.7429 16.2428L9.32873 17.657L3.67188 12.0001L9.32873 6.34326L10.7429 7.75747L7.50019 11.0002L20.3287 11.0002Z" fill="black"/>
</svg>


        <span>
          {{$cookie.get('ltrTheme')?"The Kitchen":"ورود به آشپزخانه"}}
        </span>
        </router-link>
        <router-link class="detail width45" :to="`/cooking-detail/${data.id}/${$root.slugGenerator(data.title)}`">{{$cookie.get('ltrTheme')?"See More":'جزئیات بیشتر'}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  methods:{
    gotoDetail(route){
      this.$router.push(route)
    }
  }
};
</script>
<style scoped>

.kitchen{
    color:black; 
    border: 4px solid #f0f0f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding:0 10px
}
.kitchen svg{
    margin:0 8px;
}

.detail{
    color: white;
    background: var(--color-theme);
    padding: 15px 25px;
    border-radius: 10px;
    text-align: center;
}
.imageBox{
    margin-top: 5%;
}
</style>
