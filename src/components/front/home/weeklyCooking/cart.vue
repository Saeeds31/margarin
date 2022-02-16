<template>
  <div class="cart width100 d-flex justify-content-between">
    <div  class="imageBox width60 d-flex justify-content-center align-items-end hiddenInMobile">
      <img class="width60" :src="$root.baseImageUrl+data.image" :alt="data.title" />
    </div>
    <div class="body width50 d-flex flex-direction-column align-items-end">
      <div  class="header d-flex justify-content-end">
          <img  class="showInMobile width15" src="@/assets/front/images/weeklyHome.png" :alt="data.title">

        <div class="titles">
          <h1>{{ $cookie.get('ltrTheme')?'Weekly cooking instructions':'دســـتورات پـــخت هفتـــه' }}</h1>
          <h4>{{ data.title }}</h4>
        </div>
        <div class="image showInMobile">
      <img class="width90" :src="$root.baseImageUrl+data.image" :alt="data.title" />

        </div>
          <img class="hiddenInMobile" src="@/assets/front/images/weeklyHome.png" :alt="data.title">
      </div>

      <p class="description width70">
        {{ data.shortDescription }}
      </p>
      <p class="seen">
        {{ $cookie.get('ltrTheme')?`to now ${data.viewCount} People have observed`
        :`تــا کنــون ${data.viewCount} نــفر مشاهــده کرده انــد` }}
      </p>
<div class="loading">
    <span></span>
</div>
      <div class="buttons width70 d-flex justify-content-between">
        <router-link class="kitchen width45" to="/cooking-archive">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="18" viewBox="0 0 20 18">
  <image id="Path_79_copy" data-name="Path 79 copy" width="20" height="18" opacity="0.6" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABHNCSVQICAgIfAhkiAAAAT5JREFUOE+l1M9KQkEUx/HGFM0CCQQNchESBb1JvUoQKoIuJC0XEkF7E59IXyAIooIiAjctTLPb99gxMO3OnduFHyPz5+OZ6zjG87wVv8cYk2X8kHld34k6aPxAsAzzaiRG+sxt29A/QbA0i+uKfdA2AZ9CgWCbLGyQOBGsBfZgw2R8ocJf2IQ5F2B3QbAFECxF5xlJEGdsDgTbkPdE1sgnuaSy26CVzeZNt6zYOZ1Jxa7ov3HFphUSqUy2ua7YPe1bGGwG7vGhoPhQ319Y7/tXZssHCMckolU+0spxcX5+jg3oPqtPFJVK63zZwFWcO4eguwBFRd9pT13RZQc7D1Qiq2REGqCvQStd+l+m0h2AsqJjOQWgL0FQv8shB1AhUSKoXA7PNtR2fW0DVBXtAV7/C5TFbH+L5gisY8Nk/AuevIxjAHKE/AAAAABJRU5ErkJggg=="/>
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
}
.kitchen svg{
    margin:0 15px;
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
