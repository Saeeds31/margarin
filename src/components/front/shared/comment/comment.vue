<template>
  <div class="comment">
    <div class="mainComment">
      <div class="headerComment align-items-center d-flex justify-content-between">
       
        <div class="rateToComment align-items-center d-flex justify-content-center hiddenInMobile">
           <button
          class="answerCommentButton blackColor06"
          @click="answerToComment(comment.id)"
        >
         {{$cookie.get('ltrTheme')?"answer":' پاسخ دادن'}}
        </button>
          <!-- <span class="rate">
            {{ comment.rate }} امتیاز
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <image
                id="Layer_2477_copy_3"
                data-name="Layer 2477 copy 3"
                width="24"
                height="24"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAcdJREFUSEutlUsoBVEYx90kJRJFSCwkhR07SrFR8ipZeWSFvFLY6lopugoJycJWnpFssGBHdkphozzSjcJC5Pp9NVfjmGNmrjn1a2a+833//z1zv3PGF1pNinIxqskNwZbTGp8LgzJE9w3hcq4HTkzcGGwgWGOIbnKt9dIgG7FLiDZEP7nmwpWdidMVjCE0oIiN8zzohUEcIteQrIg98ZwJr3+ZOFlBOwKzGpEO4nORGEjvpkEKzECBRuSMeCc8wB08qnmygnqCbYZguiEaa/duNfNvhtmtYbgoBkGL9xuh/q+yoBgECPd7pajoBMJ/ch8TE+DzyEiOkxHwm7uohcACxPzT5IP6LpgXHbVNK4itQGKEJi/UNcJOuN5qHxQyuQ1ZLk2kc6rg1Fyn22jdJE25NOghf1qt0Rkskdjs0kBqWp0aXJCY49JAauSE/TGsVpBKxr1L8XC6nARyZHwPK4M6Ztc0BtIlMuI183LsrNsZWJ39UiPfYelv6fNRaAJ1Y0rtkJ3BIQklpiQ5MaVD9pRfLd9l6bR8U/yI+1I7g2MSiuAZ/DAJ75pXIru+F4YhAU6g2M4gj4RKWIYbjbAaziDQALtwbp78AsnLcrMQQ2npAAAAAElFTkSuQmCC"
              />
            </svg>
          </span> -->

          <span  @click="sendReact('disLike',comment.id)" class="unLike blackColor04">
            {{comment.disLike}}
          
<svg class="disLikeSvg" width="22" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288H160
				c5.888,0,10.667-4.779,10.667-10.667V64C170.667,34.603,146.731,10.667,117.333,10.667z"/>
			<path d="M512,208c0-18.496-10.603-34.731-26.347-42.667c3.285-6.549,5.013-13.781,5.013-21.333
				c0-18.496-10.603-34.752-26.368-42.688c4.864-9.728,6.293-20.928,3.84-32.043C463.36,47.68,443.051,32,419.819,32H224
				c-7.232,0-16.405,1.173-25.771,3.285c-5.739,1.301-9.344,6.976-8.064,12.693C191.403,53.632,192,58.859,192,64v213.333
				c0,5.739-1.6,11.264-4.736,16.448c-1.835,3.029-2.048,6.763-0.555,9.984l47.957,103.893v72.32c0,3.243,1.472,6.293,3.989,8.341
				c0.683,0.555,16.512,13.013,38.677,13.013c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.96-85.333h131.755
				c28.715,0,53.141-21.248,55.637-48.341c1.387-15.189-3.669-29.824-13.632-40.725C506.901,232.768,512,220.821,512,208z"/>
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

          </span>
          <span @click="sendReact('like',comment.id)" class="like">
            {{comment.like}}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="22"
              viewBox="0 0 24 22"
            >
              <image
                id="Layer_2560"
                data-name="Layer 2560"
                width="24"
                height="22"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAV9JREFUSEtj3CggykAmMAHqkwDibUD8D5cZjGRakA00cArU0GVAOpraFlwEGqgHNfQPkOYF4h/YLCHHBwJAg94BMSPUwKdAWoaaPugDGlaIZOAmINufWhZEAQ1aguR6kLn1QNxEDQtcoCmGFcmwX0C2LhDfotQCIaABt4EYRCODV0DOcRyG3wOKTwJFMigto4OvQIHPSIKTgOxcXK7EI34AZMF/LAomAsUKgJgFiEOAGBTuzGRYcJmQBQ+AhsqTYTAobxwG4lpaWQBy0wUgdqClBSBLYmlpASgJq9PKAlC+ACUOmkUyKHg2AnEArXwAi2RDZAu+AEV5oEkSlg/ISaagJAoqzkuAGCWjOUEzlx+QpsQCUMbdCcSgEvYXsg+eAAWkgRhUzlNiASxfBgIZGwjFwVygogQgZoLpIpL+DVSnCMRPQRYYYNH0GiQJFVcFpQYgJrYs+glUuw6IH4L0AwAMPGjy1jzw1QAAAABJRU5ErkJggg=="
              />
            </svg>
          </span>
        </div>
        <div class="author d-flex justify-content-between align-items-center">
          <p class="d-flex flex-direction-column align-items-center">
            <span class="blackColor06">{{ comment.fullName }}</span>
            <span class="blackColor06">{{ comment.date }}</span>
          </p>
          <img v-if="comment.image" :src="comment.image" alt="" />
          <div class="noUserImage" v-else>
            <div class="empty">
            
            </div>
          </div>
        </div>
      </div>
      <div class="commentText">
        {{ comment.text }}
      </div>
         <div class="rateToComment align-items-center d-flex justify-content-center showInMobileFlex">
           <button
          class="answerCommentButton blackColor06"
          @click="answerToComment(comment.id)"
        >
        {{$cookie.get('ltrTheme')?"answer":' پاسخ دادن'}}
        </button>
          <!-- <span class="rate">
            {{ comment.rate }} امتیاز
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <image
                id="Layer_2477_copy_3"
                data-name="Layer 2477 copy 3"
                width="24"
                height="24"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAcdJREFUSEutlUsoBVEYx90kJRJFSCwkhR07SrFR8ipZeWSFvFLY6lopugoJycJWnpFssGBHdkphozzSjcJC5Pp9NVfjmGNmrjn1a2a+833//z1zv3PGF1pNinIxqskNwZbTGp8LgzJE9w3hcq4HTkzcGGwgWGOIbnKt9dIgG7FLiDZEP7nmwpWdidMVjCE0oIiN8zzohUEcIteQrIg98ZwJr3+ZOFlBOwKzGpEO4nORGEjvpkEKzECBRuSMeCc8wB08qnmygnqCbYZguiEaa/duNfNvhtmtYbgoBkGL9xuh/q+yoBgECPd7pajoBMJ/ch8TE+DzyEiOkxHwm7uohcACxPzT5IP6LpgXHbVNK4itQGKEJi/UNcJOuN5qHxQyuQ1ZLk2kc6rg1Fyn22jdJE25NOghf1qt0Rkskdjs0kBqWp0aXJCY49JAauSE/TGsVpBKxr1L8XC6nARyZHwPK4M6Ztc0BtIlMuI183LsrNsZWJ39UiPfYelv6fNRaAJ1Y0rtkJ3BIQklpiQ5MaVD9pRfLd9l6bR8U/yI+1I7g2MSiuAZ/DAJ75pXIru+F4YhAU6g2M4gj4RKWIYbjbAaziDQALtwbp78AsnLcrMQQ2npAAAAAElFTkSuQmCC"
              />
            </svg>
          </span> -->

          <span @click="sendReact('disLike',comment.id)" class="unLike blackColor04">
            {{comment.disLike}}
<svg class="disLikeSvg" width="22" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288H160
				c5.888,0,10.667-4.779,10.667-10.667V64C170.667,34.603,146.731,10.667,117.333,10.667z"/>
			<path d="M512,208c0-18.496-10.603-34.731-26.347-42.667c3.285-6.549,5.013-13.781,5.013-21.333
				c0-18.496-10.603-34.752-26.368-42.688c4.864-9.728,6.293-20.928,3.84-32.043C463.36,47.68,443.051,32,419.819,32H224
				c-7.232,0-16.405,1.173-25.771,3.285c-5.739,1.301-9.344,6.976-8.064,12.693C191.403,53.632,192,58.859,192,64v213.333
				c0,5.739-1.6,11.264-4.736,16.448c-1.835,3.029-2.048,6.763-0.555,9.984l47.957,103.893v72.32c0,3.243,1.472,6.293,3.989,8.341
				c0.683,0.555,16.512,13.013,38.677,13.013c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.96-85.333h131.755
				c28.715,0,53.141-21.248,55.637-48.341c1.387-15.189-3.669-29.824-13.632-40.725C506.901,232.768,512,220.821,512,208z"/>
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
          </span>
          <span @click="sendReact('like',comment.id)" class="like">
            {{comment.like}}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="22"
              viewBox="0 0 24 22"
            >
              <image
                id="Layer_2560"
                data-name="Layer 2560"
                width="24"
                height="22"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAV9JREFUSEtj3CggykAmMAHqkwDibUD8D5cZjGRakA00cArU0GVAOpraFlwEGqgHNfQPkOYF4h/YLCHHBwJAg94BMSPUwKdAWoaaPugDGlaIZOAmINufWhZEAQ1aguR6kLn1QNxEDQtcoCmGFcmwX0C2LhDfotQCIaABt4EYRCODV0DOcRyG3wOKTwJFMigto4OvQIHPSIKTgOxcXK7EI34AZMF/LAomAsUKgJgFiEOAGBTuzGRYcJmQBQ+AhsqTYTAobxwG4lpaWQBy0wUgdqClBSBLYmlpASgJq9PKAlC+ACUOmkUyKHg2AnEArXwAi2RDZAu+AEV5oEkSlg/ISaagJAoqzkuAGCWjOUEzlx+QpsQCUMbdCcSgEvYXsg+eAAWkgRhUzlNiASxfBgIZGwjFwVygogQgZoLpIpL+DVSnCMRPQRYYYNH0GiQJFVcFpQYgJrYs+glUuw6IH4L0AwAMPGjy1jzw1QAAAABJRU5ErkJggg=="
              />
            </svg>
          </span>
        </div>
    </div>
    <template v-if="comment.replyComments&&comment.replyComments.length>0">
      <div class="answerComment" v-for="(answer,index) in comment.replyComments" :key="index">
        <div class="headerComment align-items-center d-flex justify-content-between">
        
          <div class="rateToComment align-items-center d-flex justify-content-center hiddenInMobile">
              <button
            class="answerCommentButton "
            @click="answerToComment(comment.id)"
          >
           {{$cookie.get('ltrTheme')?"answer":' پاسخ دادن'}}
          </button>
            <!-- <span class="rate">
              {{ answer.rate }} امتیاز
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <image
                  id="Layer_2477_copy_3"
                  data-name="Layer 2477 copy 3"
                  width="24"
                  height="24"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAcdJREFUSEutlUsoBVEYx90kJRJFSCwkhR07SrFR8ipZeWSFvFLY6lopugoJycJWnpFssGBHdkphozzSjcJC5Pp9NVfjmGNmrjn1a2a+833//z1zv3PGF1pNinIxqskNwZbTGp8LgzJE9w3hcq4HTkzcGGwgWGOIbnKt9dIgG7FLiDZEP7nmwpWdidMVjCE0oIiN8zzohUEcIteQrIg98ZwJr3+ZOFlBOwKzGpEO4nORGEjvpkEKzECBRuSMeCc8wB08qnmygnqCbYZguiEaa/duNfNvhtmtYbgoBkGL9xuh/q+yoBgECPd7pajoBMJ/ch8TE+DzyEiOkxHwm7uohcACxPzT5IP6LpgXHbVNK4itQGKEJi/UNcJOuN5qHxQyuQ1ZLk2kc6rg1Fyn22jdJE25NOghf1qt0Rkskdjs0kBqWp0aXJCY49JAauSE/TGsVpBKxr1L8XC6nARyZHwPK4M6Ztc0BtIlMuI183LsrNsZWJ39UiPfYelv6fNRaAJ1Y0rtkJ3BIQklpiQ5MaVD9pRfLd9l6bR8U/yI+1I7g2MSiuAZ/DAJ75pXIru+F4YhAU6g2M4gj4RKWIYbjbAaziDQALtwbp78AsnLcrMQQ2npAAAAAElFTkSuQmCC"
                />
              </svg>
            </span > -->

            <span @click="sendReact('disLike',answer.id)" class="unLike blackColor04">
              {{answer.disLike}}
       <svg class="disLikeSvg" width="22" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288H160
				c5.888,0,10.667-4.779,10.667-10.667V64C170.667,34.603,146.731,10.667,117.333,10.667z"/>
			<path d="M512,208c0-18.496-10.603-34.731-26.347-42.667c3.285-6.549,5.013-13.781,5.013-21.333
				c0-18.496-10.603-34.752-26.368-42.688c4.864-9.728,6.293-20.928,3.84-32.043C463.36,47.68,443.051,32,419.819,32H224
				c-7.232,0-16.405,1.173-25.771,3.285c-5.739,1.301-9.344,6.976-8.064,12.693C191.403,53.632,192,58.859,192,64v213.333
				c0,5.739-1.6,11.264-4.736,16.448c-1.835,3.029-2.048,6.763-0.555,9.984l47.957,103.893v72.32c0,3.243,1.472,6.293,3.989,8.341
				c0.683,0.555,16.512,13.013,38.677,13.013c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.96-85.333h131.755
				c28.715,0,53.141-21.248,55.637-48.341c1.387-15.189-3.669-29.824-13.632-40.725C506.901,232.768,512,220.821,512,208z"/>
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
            </span>
            <span @click="sendReact('like',answer.id)" class="like">
              {{answer.like}}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="22"
                viewBox="0 0 24 22"
              >
                <image
                  id="Layer_2560"
                  data-name="Layer 2560"
                  width="24"
                  height="22"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAV9JREFUSEtj3CggykAmMAHqkwDibUD8D5cZjGRakA00cArU0GVAOpraFlwEGqgHNfQPkOYF4h/YLCHHBwJAg94BMSPUwKdAWoaaPugDGlaIZOAmINufWhZEAQ1aguR6kLn1QNxEDQtcoCmGFcmwX0C2LhDfotQCIaABt4EYRCODV0DOcRyG3wOKTwJFMigto4OvQIHPSIKTgOxcXK7EI34AZMF/LAomAsUKgJgFiEOAGBTuzGRYcJmQBQ+AhsqTYTAobxwG4lpaWQBy0wUgdqClBSBLYmlpASgJq9PKAlC+ACUOmkUyKHg2AnEArXwAi2RDZAu+AEV5oEkSlg/ISaagJAoqzkuAGCWjOUEzlx+QpsQCUMbdCcSgEvYXsg+eAAWkgRhUzlNiASxfBgIZGwjFwVygogQgZoLpIpL+DVSnCMRPQRYYYNH0GiQJFVcFpQYgJrYs+glUuw6IH4L0AwAMPGjy1jzw1QAAAABJRU5ErkJggg=="
                />
              </svg>
            </span>
          </div>
          <div class="author d-flex justify-content-between align-items-center">
            <p class="d-flex flex-direction-column align-items-center">
              <span  class="blackColor06">{{ answer.fullName }}</span>
              <span  class="blackColor06">{{ answer.date }}</span>
            </p>
            <img v-if="answer.image" :src="answer.image" alt="" />
            <div class="noUserImage" v-else>
              <div class="empty">
            
            </div>
            </div>
          </div>
        </div>
        <div class="commentText">
          {{ answer.text }}
        </div>
                  <div class="rateToComment align-items-center d-flex justify-content-center showInMobileFlex">
              <button
            class="answerCommentButton "
            @click="answerToComment(comment.id)"
          >
          {{$cookie.get('ltrTheme')?"answer":' پاسخ دادن'}}
          </button>
            <!-- <span class="rate">
              {{ answer.rate }} امتیاز
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <image
                  id="Layer_2477_copy_3"
                  data-name="Layer 2477 copy 3"
                  width="24"
                  height="24"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAcdJREFUSEutlUsoBVEYx90kJRJFSCwkhR07SrFR8ipZeWSFvFLY6lopugoJycJWnpFssGBHdkphozzSjcJC5Pp9NVfjmGNmrjn1a2a+833//z1zv3PGF1pNinIxqskNwZbTGp8LgzJE9w3hcq4HTkzcGGwgWGOIbnKt9dIgG7FLiDZEP7nmwpWdidMVjCE0oIiN8zzohUEcIteQrIg98ZwJr3+ZOFlBOwKzGpEO4nORGEjvpkEKzECBRuSMeCc8wB08qnmygnqCbYZguiEaa/duNfNvhtmtYbgoBkGL9xuh/q+yoBgECPd7pajoBMJ/ch8TE+DzyEiOkxHwm7uohcACxPzT5IP6LpgXHbVNK4itQGKEJi/UNcJOuN5qHxQyuQ1ZLk2kc6rg1Fyn22jdJE25NOghf1qt0Rkskdjs0kBqWp0aXJCY49JAauSE/TGsVpBKxr1L8XC6nARyZHwPK4M6Ztc0BtIlMuI183LsrNsZWJ39UiPfYelv6fNRaAJ1Y0rtkJ3BIQklpiQ5MaVD9pRfLd9l6bR8U/yI+1I7g2MSiuAZ/DAJ75pXIru+F4YhAU6g2M4gj4RKWIYbjbAaziDQALtwbp78AsnLcrMQQ2npAAAAAElFTkSuQmCC"
                />
              </svg>
            </span > -->

            <span @click="sendReact('disLike',answer.id)"  class="unLike blackColor04">
              {{answer.disLike}}
      <svg class="disLikeSvg" width="22" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288H160
				c5.888,0,10.667-4.779,10.667-10.667V64C170.667,34.603,146.731,10.667,117.333,10.667z"/>
			<path d="M512,208c0-18.496-10.603-34.731-26.347-42.667c3.285-6.549,5.013-13.781,5.013-21.333
				c0-18.496-10.603-34.752-26.368-42.688c4.864-9.728,6.293-20.928,3.84-32.043C463.36,47.68,443.051,32,419.819,32H224
				c-7.232,0-16.405,1.173-25.771,3.285c-5.739,1.301-9.344,6.976-8.064,12.693C191.403,53.632,192,58.859,192,64v213.333
				c0,5.739-1.6,11.264-4.736,16.448c-1.835,3.029-2.048,6.763-0.555,9.984l47.957,103.893v72.32c0,3.243,1.472,6.293,3.989,8.341
				c0.683,0.555,16.512,13.013,38.677,13.013c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.96-85.333h131.755
				c28.715,0,53.141-21.248,55.637-48.341c1.387-15.189-3.669-29.824-13.632-40.725C506.901,232.768,512,220.821,512,208z"/>
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
            </span>
            <span  @click="sendReact('like',answer.id)"  class="like">
              {{answer.like}}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="22"
                viewBox="0 0 24 22"
              >
                <image
                  id="Layer_2560"
                  data-name="Layer 2560"
                  width="24"
                  height="22"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAV9JREFUSEtj3CggykAmMAHqkwDibUD8D5cZjGRakA00cArU0GVAOpraFlwEGqgHNfQPkOYF4h/YLCHHBwJAg94BMSPUwKdAWoaaPugDGlaIZOAmINufWhZEAQ1aguR6kLn1QNxEDQtcoCmGFcmwX0C2LhDfotQCIaABt4EYRCODV0DOcRyG3wOKTwJFMigto4OvQIHPSIKTgOxcXK7EI34AZMF/LAomAsUKgJgFiEOAGBTuzGRYcJmQBQ+AhsqTYTAobxwG4lpaWQBy0wUgdqClBSBLYmlpASgJq9PKAlC+ACUOmkUyKHg2AnEArXwAi2RDZAu+AEV5oEkSlg/ISaagJAoqzkuAGCWjOUEzlx+QpsQCUMbdCcSgEvYXsg+eAAWkgRhUzlNiASxfBgIZGwjFwVygogQgZoLpIpL+DVSnCMRPQRYYYNH0GiQJFVcFpQYgJrYs+glUuw6IH4L0AwAMPGjy1jzw1QAAAABJRU5ErkJggg=="
                />
              </svg>
            </span>
          </div>
      </div>
    </template>
    <!-- <b-modal></b-modal> for rate -->
  </div>
</template>
<script>
// import {BModal} from "bootstrap-vue"
export default {
  props: {
    comment: Object,
    likeRoute:String
  },
  methods: {
    sendReact(type,id){
      
        this.$axios.post(`${this.likeRoute}/${type=='disLike'?'DisLike':'Like'}?id=${id}`).then(res=>{
          this.$toast.success(res.data.message);
          this.comment[type]++;
          }).catch(error=>{
          this.$toast.error(error.response.data.message);

          })
    },
    answerToComment(id){
      this.$emit("changeReplatTo",id);
      document.getElementById("commentFormTop").scrollIntoView({behavior:'smooth'})
    }
  }
};
</script>
