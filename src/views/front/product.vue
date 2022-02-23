<template>
  <div v-if="productData" id="productDetailSection">
    <div id="introductionSection" class="width80 margin-auto">
      <div id="content" class="d-flex justify-content-between width100">
        <div id="imageBox" class="width40">
          <div
            class="productTitles showInMobileFlex flex-direction-column align-items-center"
          >
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {{ productData.name }}
            </h1>
            <h3
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-once="true"
              class="blackColor06"
            >
              {{ productData.shortDescription }}
            </h3>
            <doubleLine
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-once="true"
              class="width25"
            />
            <currentPath
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
              :routes="product.routes"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            class="mainProductImage"
          >
            <div
              class="tools d-flex justify-content-between align-items-end width80 margin-auto"
            >
              <div
                class="discountRate d-flex flex-direction-column align-items-center"
              >
                <div
                 data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
                  v-if="product.discount"
                  class="discount d-flex flex-direction-column"
                >
                  <span> {{ product.discount }}%</span>
                  <span>{{$cookie.get('ltrTheme')?'rate':'تخفیف'}}</span>
                </div>
                <div
                 data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
                  class="rate d-flex justify-content-between align-items-center"
                >
                  <p class="d-flex flex-direction-column align-items-center">
                    <span>{{$cookie.get('ltrTheme')?'score':'امتیاز'}}</span>
                    <span>{{ productData.scroe }}</span>
                  </p>
                  <svg
                    class="rateSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="36.36"
                    height="36.36"
                    viewBox="0 0 36.36 36.36"
                  >
                    <g
                      id="Group_1ertgegvegerg"
                      data-name="Group 1ertgegvegerg"
                      transform="translate(-475.28 -353.36)"
                    >
                      <circle
                        id="circle_copy_2"
                        data-name="circle copy 2"
                        cx="18.18"
                        cy="18.18"
                        r="18.18"
                        transform="translate(475.28 353.36)"
                        fill="#f7941e"
                      />
                      <image
                        id="Layer_2707"
                        data-name="Layer 2707"
                        width="17"
                        height="18"
                        transform="translate(485 362)"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAABHNCSVQICAgIfAhkiAAAAYFJREFUOE+dk0srRVEUx+/xjKRMCBNkQBlSJupmYKCkfACiPMpIJKTMpBiYoFwGPoC5gQEZiAwlpZRueUwUeeV1/P63fWrf0zmHY9Wvvc9ea//PWnuv7bium4iwSnzNcAx3YXHOLyLtbJyDWTj4j0gRm5ZhCFZhAl6DhKIyaWXDNlTBNXTDSRyRAoLnYdzatGjKevcLKROHxVzIg3wzb2NMQYW1QQfbD4fwBR/wqblE+pjUQQ3UQzWUQWlA6o+s3ZvyLhivIC0RXV9LUK1/XDuTSAPBY6BbiGtrbFj3bqeEjyUYjqGyQuwkvNhXLKEFGATdTpi94diAKXhWkL9PGlnbBfVGmKVxdMC5F+AXSeLYgcIIkSd8XbAXJjKAYzNCQK5vGAH1Ucb8mahLp41PDXVkMutkVBuoKWU6Oy8uS0Ql6K2o3kvQo9uCB1Dz9cIo1BrhHkZ1bZZIMd96tTp9ZXRr/moPOvAZyAG9q8yrtsvRu0nCDZwGCHhLTUzKYR9UcuIHUW15Rx70dmoAAAAASUVORK5CYII="
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div  data-aos="zoom-in"
              data-aos-duration="2500"
              data-aos-once="true" class="zoom d-flex flex-direction-column align-items-end">
                <svg
                  @click="zoom('in')"
                  :class="{ disableButton: scale == 1.5 }"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <g id="dasdasdasdsad" transform="translate(-795 -285)">
                    <circle
                      id="Ellipse_16_copy_7"
                      data-name="Ellipse 16 copy 7"
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(795 285)"
                      fill="#ebebeb"
                    />
                    <image
                      id="Layer_2474_copy_3"
                      data-name="Layer 2474 copy 3"
                      width="18"
                      height="18"
                      transform="translate(811 301)"
                      opacity="0.302"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAFFJREFUOE9j/P//PwMuwMjI+AEoxw+V/whUK4BT7ahBoKAZamEEdDIoinEBPqAEI1QSlE4+4Yx+oATuhITHBnQpkG1UM4g6XhtN2UMxZVMr1gC8GHfHYVqy1wAAAABJRU5ErkJggg=="
                    />
                  </g>
                </svg>
                <svg
                  :class="{ disableButton: scale == 0.9 }"
                  @click="zoom('out')"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                >
                  <g
                    id="Group_1sadasdasdasd"
                    data-name="Group 1sadasdasdasd"
                    transform="translate(-795 -345)"
                  >
                    <circle
                      id="Ellipse_16_copy_8"
                      data-name="Ellipse 16 copy 8"
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(795 345)"
                      fill="#ebebeb"
                    />
                    <image
                      id="Layer_2474_copy_4"
                      data-name="Layer 2474 copy 4"
                      width="18"
                      height="4"
                      transform="translate(811 368)"
                      opacity="0.302"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAECAYAAACDQW/RAAAABHNCSVQICAgIfAhkiAAAACdJREFUGFdjZGBg+ADEuAAfUIIRKvkfSH/CpRCkCKSAYkBVg6jiNQDaVQfjxHXvZQAAAABJRU5ErkJggg=="
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="mainImage d-flex justify-content-center">
              <img
               data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-once="true"
                :src="$root.baseImageUrl + productData.image"
                :alt="productData.name"
              />
              <div class="background"></div>
            </div>

            <div v-if="productData.sizeImage" class="sizeImage">
              <img :src="productData.sizeImage" :alt="product.name" />
            </div>
          </div>
          <div class="imageColumn">
            <div
              v-if="productData.nutritionFactImage"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              class="chartImage"
            >
              <img
                :src="$root.baseImageUrl + productData.nutritionFactImage"
                :alt="product.name"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              class="commentShare d-flex justify-content-between width100 margin-auto"
            >
              <button class="share d-flex justify-content-around">
                <span>{{$cookie.get('ltrTheme')?'share':'اشتراک گذاری'}}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                >
                  <image
                    id="Layer_2503"
                    data-name="Layer 2503"
                    width="22"
                    height="24"
                    opacity="0.6"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAABHNCSVQICAgIfAhkiAAAAkRJREFUSEu9lUuIT1Ecx41HeSR55pVHww5Lj8mChQxm1rIZ/wxlLGTQ0HgUk4VIFAtkBgs77zSy81pSLMaOkRQb79mwMJ/P9Lt1O/4TTnLq07nn3Pv73nN/r1szJH+Mw7QNmmA6vIYzcBa+1WTqTsHuNiyGd/AK5sFkuA5bc4RHYHhKYzgGe+JwI5lPQAvsyxGeiOFbeAirki8ezfou1OYIr8SwG9rjhKk3j7LRlit8B+PWCFQqfJCNQ6mw/jMwffAptYj18nDDZeaNVZ4xePWF8KgIwnbm8fHwA+ad8CTWMwwKbAYP8BE2wY2S+Bauz0Gnwop2wXrohUcwFfSlJ2+G2hAdG6e9xKwvx8AteAZ1sA7eQIPClRC+Etc/4gT1zOdhZqx7mPXfNfgJC+P+krjvdB9MtxcKPw7jRcyfSw95uR864Agchu/J/aGs58JssEhkYCisr/z8xsTIpXnqp+4Fi+KPh8JGX+GGKlar2bsJVtdfCys6CxbAl0T8AGtdMJgrhnGv7IqXhb0nNhcvQhq8tezZqQYLnjExuDaiYljm9pCeIt0usNgAtj5vTgPT7SuYt3YuS7haupnHz2EZGCfTrbFcILvZ2AET4vWmjgXyNNZpgXxg3wIxBsXwEH7FQIGUhxVlT7Uw0tQrnitK2iKpJPYuzfM1/60JVTnAL1sr2LHn/vO2+btGf4+XzslxxXAMT8I2OA7+UB02M39Nplt7jrAik8Cf6VJ4D/aI+eDXXIWWXGHF/f3vggr4+++F02C69fUD6WaAgW0CVpYAAAAASUVORK5CYII="
                  />
                </svg>
              </button>
              <button class="comment d-flex justify-content-around">
                <span>
                  {{ `${productData.price} ${$cookie.get('ltrTheme')?'$':'تومان'}` }}
                </span>
          
<svg version="1.1" width="24" height="20" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 490.35 490.35" style="enable-background:new 0 0 490.35 490.35;" xml:space="preserve">
<g>
	<path d="M475.462,163.15l-279.8-161.5c-3.8-2.2-10.1-2.2-13.9,0l-166.8,96.9c-3.8,2.2-3.8,5.8,0,8.1l279.8,161.5
		c3.9,2.2,10.1,2.2,13.9,0l166.8-96.9C479.363,168.95,479.363,165.35,475.462,163.15z M329.663,230.85c-1.5-1.5-3.4-2.9-5.6-4.1
		c-14.2-8.2-37.2-8.2-51.4,0c-1.1,0.6-2,1.3-2.9,2l-188.5-108.9c1.8-0.7,3.5-1.5,5.2-2.5c14.1-8.2,14.1-21.5-0.2-29.8
		c-1.6-0.9-3.2-1.7-5-2.4l77.7-45.2c1.2,1,2.5,2,4.1,2.9c14.2,8.2,37.2,8.2,51.4,0c1.6-0.9,3-1.9,4.2-3l189.1,109.2
		c-2.5,0.9-4.9,1.9-7,3.2c-14.1,8.2-14.1,21.5,0.2,29.8c2.2,1.3,4.6,2.3,7.2,3.2L329.663,230.85z M352.462,189.65l-12.3,7.2
		c-1.9,1.1-5,1.1-6.9,0l-21.6-12.5c-1.9-1.1-1.9-2.9,0-4l12.3-7.2c1.9-1.1,5-1.1,6.9,0l21.6,12.5
		C354.363,186.75,354.363,188.55,352.462,189.65z M166.563,96.55c-1.9,1.1-5,1.1-6.9,0l-21.6-12.4c-1.9-1.1-1.9-2.9,0-4l12.3-7.2
		c1.9-1.1,5-1.1,6.9,0l21.6,12.5c1.9,1.1,1.9,2.9,0,4L166.563,96.55z M456.563,212.85l21.8,12.6l-174.8,101.5l-5.7-3.3l-16.1-9.3
		l-269.8-155.9l21.6-12.6l269.8,155.9L456.563,212.85z M282.063,369.05l-270.1-156.2l21.6-12.5l270.1,156.2l152.6-88.7l21.7,12.5
		l-174.1,101.2l-5.6-3.3L282.063,369.05z M456.563,321.55l21.8,12.6l-174.8,101.5l-5.7-3.3l-16.1-9.3l-269.8-155.8l21.6-12.6
		l269.8,155.9L456.563,321.55z M456.263,376.55l21.7,12.5l-174.1,101.3l-5.6-3.3l-16.1-9.3l-270.2-156.2l21.6-12.5l270.1,156.2
		L456.263,376.55z M300.462,102.65c-30.8-17.8-80.6-17.8-111.3,0c-30.6,17.8-30.4,46.6,0.4,64.4s80.6,17.8,111.2,0
		C331.363,149.35,331.263,120.45,300.462,102.65z M291.063,115.75l-7.8,4.5c3.6,3.2,5.3,6.5,4.8,9.9c-0.4,3.3-2.7,6.4-7,9.2
		c-1.1,0.7-3,0.7-4.1,0l-10.6-5.9c-1-0.6-1.2-1.6-0.3-2.2c2.1-1.4,3.2-2.8,3.5-4.1c0.3-1.6-0.5-3-2.6-4.2s-4.2-1.7-6.5-1.5
		c-2.2,0.2-4.4,0.8-6.3,2c-2,1.2-3.1,2.4-3.2,3.7c-0.2,1.3,0.5,3.2,2.2,5.6c3.9,5.5,6,10.1,6.3,13.6s-2.2,6.8-7.5,9.8
		c-5,2.9-10.6,4.4-16.9,4.3c-5.3,0-10.5-1.1-15.6-3.1l-7.3,4.3c-1,0.6-2.5,0.5-3.5,0l-6.3-3.7c-1-0.6-1-1.5,0-2l7.1-4.1
		c-4.7-3.5-7.3-7.2-7.6-11.1c-0.4-3.7,2.1-7.2,7.3-10.5c1.1-0.7,3-0.7,4.1,0l10.6,5.9c1,0.6,1.2,1.6,0.3,2.2
		c-2.4,1.7-3.6,3.2-3.6,4.7c0,1.8,1.2,3.5,3.7,4.9c2.1,1.2,4.3,1.8,6.6,1.7s4.5-0.7,6.4-1.8c2.3-1.3,3.5-2.7,3.6-4
		c0.2-1.4-0.6-3.2-2.2-5.5c-4.2-5.5-6.4-10-6.7-13.4c-0.4-3.4,2.2-6.7,7.6-9.9c4.9-2.8,10.6-4.2,17-4.1c5.9,0.1,11.6,1.3,17.1,3.7
		l7.6-4.4c1-0.6,2.6-0.6,3.5,0l6.3,3.7C292.063,114.35,292.063,115.25,291.063,115.75z"/>
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

              </button>
            </div>
            <div class="mainOption width100 d-flex justify-content-between">
              <optionButton
                v-for="item in productData.features"
                :key="item.id"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                :title="item.featureName"
                :value="item.featureDescription"
              />
            </div>
          </div>
        </div>
        <div
          class="productDesc d-flex flex-direction-column align-items-end width50"
        >
          <h1
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
            class="hiddenInMobile"
          >
            {{ productData.name }}
          </h1>
          <h3
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
            class="blackColor06 hiddenInMobile"
          >
            {{ productData.shortDescription }}
          </h3>
          <doubleLine
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
            class="width25 hiddenInMobile"
          />
          <currentPath
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-once="true"
            class="hiddenInMobile"
            :routes="product.routes"
          />
          <div class="productDescription slotElement width80">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              v-html="productData.text"
              class="blackColor06"
            ></div>
            <videoBox
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              :title="''"
              :shortTitle="''"
              :poster="''"
              :video="$root.baseImageUrl + productData.videoLink"
              v-if="
                productData.videoLink != '' && productData.videoLink != null
              "
            />
          </div>
        </div>
      </div>
      <img
        id="backgroundOrange"
        src="@/assets/front/images/introductionBackground.png"
        alt="مارگارین"
      />
    </div>
      <commentBox   data-aos="fade-up"
        data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-once="true" :likeRoute="'ProductComment'" :field="'productId'" :routeComment="'ProductComment'" :comments="productData.comments" />
  </div>
  <loader v-else />
</template>
<script>
import videoBox from "@/components/front/aboutUs/videoBox.vue";
import commentBox from "@/components/front/shared/commentBox.vue";
import Loader from "@/components/front/shared/loader.vue";
import optionButton from "@/components/front/productDetail/option.vue";
import doubleLine from "@/components/front/shared/doubleLine.vue";
import currentPath from "@/components/front/shared/currentPath.vue";
export default {
  components: {
    currentPath,commentBox,
    doubleLine,
    optionButton,
    videoBox,
    Loader
  },
  data() {
    return {
      scale: 1,
      product: {
        comments: [
          {
            id: "1",
            image:
              "https://s4.uupload.ir/files/rounded_rectangle_3sdsdsd_copy_90e.png",
            fullName: "سعید دهقان",
            date: "26 دی 1396",
            rate: 3.6,
            comment:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            answer: [
              {
                id: "10",
                image: null,
                fullName: "سعید دهقان",
                date: "26 دی 1396",
                rate: 4,
                comment:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
              }
            ]
          },

          {
            id: "2",
            image: null,
            rate: 3.6,
            fullName: "سعید دهقان",
            date: "26 دی 1396",
            comment:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            answer: null
          },
          {
            id: "3",
            image: null,
            fullName: "سعید دهقان",
            date: "26 دی 1396",
            rate: 4,
            comment:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            answer: null
          }
        ],
        palm: "ندارد",
        oil_mode: "مایع",
        type_vitamin: "ویتامین E",
        type_oil: "ذرت",
        gmo: "خیر",
        special: "سالاد و پخت و پز ",
        description:
          "مارگارين اولين شركت توليد كننده روغن گياهي در ايران است كه با برندهای خروس، آفتاب و آفتاب طلايي  در بين مردم شناخته شده است. اين شركت كه در دی ماه سال 1332 با ظرفیت تصفيه 8 تن روغن گياهي در روز پا به عرصه صنعت گذاشت و اکنون با همكاري كارشناسان مجرب توانسته است با ظرفیت توليدي 1000 تن در روز، میهمان بسیاری ازخانواده ها و صنایع مختلف کشور باشد.\nاين مجموعه همواره سعي می نماید محصولاتی با کیفیت برتر و منطبق با نیاز مشتریان طراحی و تولید نماید. هم اکنون  38 نوع  محصول متنوع روغني در دو بخش صنف و صنعت (B2B) و مصارف خانوار (B2C) در این شرکت تولید می‌شود که علاوه بر مطابقت با ضوابط موسسه استاندارد و تحقیقات صنعتی ایران و معاونت غذا و دارو وزارت بهداشت، با استاندارد های بین¬المللی نظیر CODEX از شرکت SGS سوئیس نیز انطباق داده شده است، به همین سبب اینک محصولات مارگارین در بازار اغلب کشورهای خاورمیانه و حتی کشورهای اروپایی به چشم می خورد.\nمارگارين اولين شركت توليد كننده روغن گياهي در ايران است كه با برندهای خروس، آفتاب و آفتاب طلايي  در بين مردم شناخته شده است. اين شركت كه در دی ماه سال 1332 با ظرفیت تصفيه 8 تن روغن گياهي در روز پا به عرصه صنعت گذاشت و اکنون با همكاري كارشناسان مجرب توانسته است با ظرفیت توليدي 1000 تن در روز، میهمان بسیاری ازخانواده ها و صنایع مختلف کشور باشد.\nاين مجموعه همواره سعي می نماید محصولاتی با کیفیت برتر و منطبق با نیاز مشتریان طراحی و تولید نماید. هم اکنون  38 نوع  محصول متنوع روغني در دو بخش صنف و صنعت (B2B) و مصارف خانوار (B2C) در این شرکت تولید می‌شود که علاوه بر مطابقت با ضوابط موسسه استاندارد و تحقیقات صنعتی ایران و معاونت  اروپایی به چشم می خورد.",
        discount: "10",
        rate: 5,
        mainImage: "https://s4.uupload.ir/files/layer_2706_izb5.png",
        sizeImage: "https://s4.uupload.ir/files/group_1asdasdasdasd_7ipq.png",
        chartImage: "https://s4.uupload.ir/files/layer_2712_1tgc.png",
        routes: [{ route: "/products", routeTitle_fa: "محصولات" , routeTitle_en: "products" }],
        title: "روغــــــــن آفتابــــــــگردان",
        summary: "پــالایش شــده مصــارف خانگــی"
      }
    };
  },
  methods: {
    setStyle() {
      if (window.innerWidth > 1000) {
        this.$root.unsetInlineStyle(
          "width",
          "#productDetailSection #introductionSection #content #imageBox"
        );
      } else {
        this.$root.setProportionStyle(
          "width",
          "%",
          "#productDetailSection #introductionSection #content #imageBox ",
          999,
          60,
          375,
          96
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#productDetailSection #introductionSection #content #imageBox .productTitles  .productTitles h1",
          999,
          44,
          375,
          24
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#productDetailSection #introductionSection #content #imageBox .productTitles  .productTitles h3",
          999,
          25,
          375,
          19
        );
      }
    },
    zoom(side) {
      if (side == "in") {
        this.scale = this.scale > 1.4 ? this.scale : (this.scale += 0.1);
      } else {
        this.scale = this.scale < 1 ? this.scale : (this.scale -= 0.1);
      }
      document.querySelectorAll(
        "#productDetailSection #introductionSection .mainProductImage .mainImage img"
      )[0].style.transform = `scale(${this.scale})`;
    }
  },
  computed: {
    productData() {
      return this.$store.getters.getProduct;
    }
  },
     metaInfo() {
    return {
      title: this.productData?this.productData.name:"جزئیات محصول",
      meta: [
        {
          name: "description",
          content: this.productData ? this.productData.meta : false
        },
        {
          property: "og:title",
          content: this.productData?this.productData.title:"جزئیات محصول"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  watch: {
    productData() {
      setTimeout(() => {
        this.setStyle();
      }, 500);
    }
  },
  mounted() {
    window.addEventListener("resize", this.setStyle);
      this.setStyle();
  },
  beforeCreate() {
      this.$store.dispatch("getProductFromServer", this.$route.params.id);

  },
  beforeDestroy(){
    window.removeEventListener("resize", this.setStyle);

  }
};
</script>
<style scoped>
#backgroundOrange {
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  width: 100%;
}
#content div h1 {
  color: var(--color-theme);
  font-size: 44px;
  font-family: "yekan-heavy";
}
#content div h3 {
  font-size: 25px;
}

.slotElements {
  margin-top: 20%;
  width: 80%;
  text-align: right;
  font-size: 18px;
}
</style>
