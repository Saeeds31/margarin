<template>
  <main v-if="productData" id="productDetailSection">
    <section id="introductionSection" class="width80 margin-auto">
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
              <img :src="$root.baseImageUrl + productData.sizeImage" :alt="product.name" />
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
              <button @click="shareProduct()" class="share d-flex justify-content-around">
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
                  {{ `${productData.comments.length} ${$cookie.get('ltrTheme')?'comments':'کامنت'}` }}
                </span>
          <i style="fontSize:20px" class="fa fa-comments"></i>


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
    </section>
      <commentBox   data-aos="fade-up"
        data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-once="true" :likeRoute="'ProductComment'" :field="'productId'" :routeComment="'ProductComment'" :comments="productData.comments" />
  </main>
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
    shareProduct(){
       window.open(`https://wa.me/?text=${this.$root.domainName+this.$route.path}`,'_blank'); 
      //  navigator.share({
      //     title: this.product.title,
      //     text: this.productData?this.productData.name:"این محصول رو بهت پیشنهاد میکنم",
      //     url:this.$root.domainName+this.$route.path,
      //   })
      //       .then(() => {})
      //       .catch((error) => console.error(error));
    },
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
  created() {
      // this.$store.dispatch("getProductFromServer", this.$route.params.id);
      this.checkRequest('getProductFromServer',JSON.stringify(this.$route.params.id));


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
