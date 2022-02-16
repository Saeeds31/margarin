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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="22"
              viewBox="0 0 24 22"
            >
              <image
                id="Layer_2560_copy"
                data-name="Layer 2560 copy"
                width="24"
                height="22"
                opacity="0.4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAXBJREFUSEu1lT1LA0EQhu8EFT9AUKwsVBAb9QeohWBnbyFWVv4tKxERK20SQTuxCFYpBSOBoEUCokEhmPN5j11Y4oa7mNuBYXYns/Pszuxt4iiK5tBe+U6SpC1nHMczmCUNPXE+1w/OZ9Z/puvRY09UlYB7ku/w2+oAyW2qLoMzbdIFaMdTJsICDplP59x5b1gZQM0FXBOxgS6iwwLq5CgB6LqADs7RAk6g8rTQBwCNrB4MU6ImgMuQgBqAcijAOyW6AdAKBVAr1YvzkABB7kICmgCuQgFUnle0kgUYIWgZ3f3Hc6ESpU2e9DwFHW6APrxUeJO2MOueuCxXIyZRVpAA4wQdoLKufDF565PgA381F8CcYgG7h6psVlTrCzape++V3AADWcGqH65UADwWAjCQTaxeXSsvAEpFAsZIduQkbAM4LQxgTrGPnTVJ1YcTIPqr/CMD9cCu5latMd428yeS3xZ6AnOKeewEWgfQ967/AkEgwuejqML/AAAAAElFTkSuQmCC"
              />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="22"
              viewBox="0 0 24 22"
            >
              <image
                id="Layer_2560_copy"
                data-name="Layer 2560 copy"
                width="24"
                height="22"
                opacity="0.4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAXBJREFUSEu1lT1LA0EQhu8EFT9AUKwsVBAb9QeohWBnbyFWVv4tKxERK20SQTuxCFYpBSOBoEUCokEhmPN5j11Y4oa7mNuBYXYns/Pszuxt4iiK5tBe+U6SpC1nHMczmCUNPXE+1w/OZ9Z/puvRY09UlYB7ku/w2+oAyW2qLoMzbdIFaMdTJsICDplP59x5b1gZQM0FXBOxgS6iwwLq5CgB6LqADs7RAk6g8rTQBwCNrB4MU6ImgMuQgBqAcijAOyW6AdAKBVAr1YvzkABB7kICmgCuQgFUnle0kgUYIWgZ3f3Hc6ESpU2e9DwFHW6APrxUeJO2MOueuCxXIyZRVpAA4wQdoLKufDF565PgA381F8CcYgG7h6psVlTrCzape++V3AADWcGqH65UADwWAjCQTaxeXSsvAEpFAsZIduQkbAM4LQxgTrGPnTVJ1YcTIPqr/CMD9cCu5latMd428yeS3xZ6AnOKeewEWgfQ967/AkEgwuejqML/AAAAAElFTkSuQmCC"
              />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="22"
                viewBox="0 0 24 22"
              >
                <image
                  id="Layer_2560_copy"
                  data-name="Layer 2560 copy"
                  width="24"
                  height="22"
                  opacity="0.4"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAXBJREFUSEu1lT1LA0EQhu8EFT9AUKwsVBAb9QeohWBnbyFWVv4tKxERK20SQTuxCFYpBSOBoEUCokEhmPN5j11Y4oa7mNuBYXYns/Pszuxt4iiK5tBe+U6SpC1nHMczmCUNPXE+1w/OZ9Z/puvRY09UlYB7ku/w2+oAyW2qLoMzbdIFaMdTJsICDplP59x5b1gZQM0FXBOxgS6iwwLq5CgB6LqADs7RAk6g8rTQBwCNrB4MU6ImgMuQgBqAcijAOyW6AdAKBVAr1YvzkABB7kICmgCuQgFUnle0kgUYIWgZ3f3Hc6ESpU2e9DwFHW6APrxUeJO2MOueuCxXIyZRVpAA4wQdoLKufDF565PgA381F8CcYgG7h6psVlTrCzape++V3AADWcGqH65UADwWAjCQTaxeXSsvAEpFAsZIduQkbAM4LQxgTrGPnTVJ1YcTIPqr/CMD9cCu5latMd428yeS3xZ6AnOKeewEWgfQ967/AkEgwuejqML/AAAAAElFTkSuQmCC"
                />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="22"
                viewBox="0 0 24 22"
              >
                <image
                  id="Layer_2560_copy"
                  data-name="Layer 2560 copy"
                  width="24"
                  height="22"
                  opacity="0.4"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAXBJREFUSEu1lT1LA0EQhu8EFT9AUKwsVBAb9QeohWBnbyFWVv4tKxERK20SQTuxCFYpBSOBoEUCokEhmPN5j11Y4oa7mNuBYXYns/Pszuxt4iiK5tBe+U6SpC1nHMczmCUNPXE+1w/OZ9Z/puvRY09UlYB7ku/w2+oAyW2qLoMzbdIFaMdTJsICDplP59x5b1gZQM0FXBOxgS6iwwLq5CgB6LqADs7RAk6g8rTQBwCNrB4MU6ImgMuQgBqAcijAOyW6AdAKBVAr1YvzkABB7kICmgCuQgFUnle0kgUYIWgZ3f3Hc6ESpU2e9DwFHW6APrxUeJO2MOueuCxXIyZRVpAA4wQdoLKufDF565PgA381F8CcYgG7h6psVlTrCzape++V3AADWcGqH65UADwWAjCQTaxeXSsvAEpFAsZIduQkbAM4LQxgTrGPnTVJ1YcTIPqr/CMD9cCu5latMd428yeS3xZ6AnOKeewEWgfQ967/AkEgwuejqML/AAAAAElFTkSuQmCC"
                />
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
