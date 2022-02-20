<template>
  <div  id="faqSection" class="width100"
      v-if="faq"
  >
    <introduction class="width80 margin-auto" :title="
        $cookie.get('ltrTheme')
          ? 'Answers to your questions'
          : 'پـــاسخ بـــه ســـوالات شـــما'
      "
      :summary="faq.faqIntro.title"
      :image="$root.baseImageUrl + faq.faqIntro.image"
      :routes="routes">
      <p data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-once="true"        class="slotElements width80 blackColor06">
        {{ faq.faqIntro.text }}
      </p>
    </introduction>
    <div
      id="faq"
      class="width80 margin-auto justify-content-evenly d-flex"
    >
      <div id="questions">
        <template v-if="!showQuestionForm">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            id="searchBox"
          >
            <input
              v-model="search"
              type="text"
              :placeholder="$cookie.get('ltrTheme') ?'Start searching among the questions. . .':'جستجو در میان پرسش ها را شروع کنید . . .'"
              id="search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <image
                id="Layer_2499"
                data-name="Layer 2499"
                width="24"
                height="24"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAkxJREFUSEu1lUtIlUEUx7tU9FiYICEYBKabcqEgQeailfhIMbGFRFEI5iJ6gLhqoYsicKEIJj6SLCToAW4KKyTuwtKgdj3AlAi0RaQbIUOz/P1rRr47znfVDzvw43535sz5z5w5MxOb79i/xWO7aTsJlZALGbAAX+ElDMIQ/PENDrbFPAJncbgO+4yjgnyDHZAaGPyW78tGMFQnKLAdr5tQB7/hAdyGuJm9guyBUrgIR2ERLkFXmEJQoBun8zANSs9Y6LT+dWilCrwTzsEdn78VkHO/CX6E36k1gtvuY3w8B6UxH9674ySwi8ZPoI0shNF1BrduV/hog8dQ4RM4Q+NduA81Gwwud+3dB8g2TAZjaAWPaKgGbd7TCAIa0gxN0ACtrsC4UVbt/4wooL2Im0xoP1dMK5gzgfdGDK5hWTABw1DkCszSsBVU41HtEANVQU+g3BV4R0MOpIHEothxBqmKboEOakKKdFjqQdU0ECU6YzrgAij/qsgEgWL+qXpeQwGseYE5k9DKlX8Vic7SjCsQM8EPm+VpmRuxPpxroR106BLMXhWaedzMXpukaliPNeLUArq/8uB7mIDatTk9oBvyqpmR3gCfKS0KrJn/AJ2DNz5H9z04jVMv6Ib8DPfgBeih2QYHoAROgcpaMz9hgqvUl5KtwPYd5OMG6DULM62sE66BNlXiH+ELVIEO71/zvWi2L9OIKLfp8Avsk6mad89MnDalagTKrEgygSQL8Hal0PoM9J68AqVybjMFpLpKZLMFXJHh/yFgRR5qRcsd3pmAMJOq/gAAAABJRU5ErkJggg=="
              />
            </svg>
          </div>
          <div id="collapseBox">
            <div class="accordion" role="tablist">
              <collapseItem
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                v-for="(item, index) in faqList"
                :key="index"
                :data="item"
              />
            </div>
          </div>
        </template>
        <template v-else>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            id="formTop"
            class="width100 d-flex justify-content-between"
          >
            <div
              :class="{
                errorInput: $v.fullName.$dirty == true,
                successInput:
                  $v.fullName.$error == false && $v.fullName.$dirty == true
              }"
              class="faqInput d-flex justify-content-end align-items-center"
            >
              <p
                v-if="!writeFullName"
                @click="showSection('writeFullName', true)"
              >
                <span class="blackColor06">{{$cookie.get('ltrTheme') ?'Full Name':'نام و نام خانوادگی'}}</span>
                <span class="blackColor06" v-if="fullName">{{ fullName }}</span>
              </p>
              <input
                @keydown.enter.tab="showSection('writeMobile', true)"
                id="writeFullName"
                v-else
                v-model="fullName"
                @blur="writeFullName = false"
                type="text"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="22"
                height="24"
                viewBox="0 0 22 24"
              >
                <image
                  id="Layer_2510"
                  data-name="Layer 2510"
                  width="22"
                  height="24"
                  opacity="0.302"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAABHNCSVQICAgIfAhkiAAAAkRJREFUSEuVlftLVEEUxxuDHvY2e1BZGxkGPYii6JeiJ0J/cCRJSf0iFRWKBFma1W6lpb2zwLbPZ5krm965jRc+DHvPOd8598yZs6HZbK6qekIIe7DvhO7o94F1mrhGZVyVMKLHCD4AczADAXbDFpggdiwlHlLCiO4j6CTcx2e6XQDbLn6fgcfY6mXiVcKnCVgg8ElpYAhu2oH9UbYwGfnJ/TBG4OuEsF90FPvASoQ34HwZ7hL4OSFsnS/AID4/l/qUloKE1+N4Fe4R9CkhvJX35+EWPvO5wmtiKYYJshuWPWy+g5fnYACf31nCOhF4jWWSoOcJ4V7e17APZtc4Cp9itY5DBP9zi+LhXsQ2l+yaij72AA1+hs94e1YI9/HbjO9g+7GijGPWNVZv3yx4lX2srQc3iuirMtFWbMas2IbfwShmSWw/r3NptxQbpdrNrjgMPXB76alTCu2X4A2M/7crYgs5dJwFC/CUoKnSGoZgmY7AangPU+2t2coYwXUY7ILt4CSzdnVsiicf4hTdC/vBknkODqb5QthJ5bx1kn2sEkvZ2MSkzsIMGg8dNnIdKk85ZzPEzfw43FC0E65AcuDkiOqD8OJgUngjeMI2+7dckTI/hAutIYU9AEsxkuqA3M0QtqNOwM3i8Py38E/zO7yERtkoTGRpRxlbA8fAO2IfLF4QdtvEy0PRya9wBth6DnHHYjEavRzizLbFPCPb8i28QPSLCSy7eWzQwfsusP02w9oo5OrzK27i+hWc17MI/on21vIXNi0WCBE4xC0AAAAASUVORK5CYII="
                />
              </svg>
            </div>
            <div class="faqInput d-flex justify-content-end align-items-center">
              <p v-if="!writeEamil" @click="showSection('writeEamil', true)">
                <span class="blackColor06">{{$cookie.get('ltrTheme') ?'E-mail':'پست الکترونیک'}}</span>
                <span class="blackColor06" v-if="email">{{ email }}</span>
              </p>
              <input
                v-else
                id="writeEamil"
                @keydown.enter.tab="showSection('bodyMessage', false)"
                @blur="writeEamil = false"
                v-model="email"
                type="text"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="20"
                viewBox="0 0 24 20"
              >
                <image
                  id="Layer_2512"
                  data-name="Layer 2512"
                  width="24"
                  height="20"
                  opacity="0.302"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAABHNCSVQICAgIfAhkiAAAAc5JREFUOE+1lcsvZEEUxl3vVyZEIt6LwbAiwRi2xNJfzJ6RGQsboREhLMRCpDXD0H6/q3pymdu3vbqSL1W3zqnvq1N1Tt2oWCzW2KIoqqVrjj8+3m7gfYh5QT0YBUOg8ePcMcMtOAY5BYYDdugvP0ngCzxj4ECBhaC2Rz8ITgnv73uEOGZPoy/wjXgqCiyDTYnBErgBPxH58xYRyL2/H6AJrAShqX8CEJ7g1IphDji/ztzVa0RY1x7WebGuKzDXz/i5gGQYvGh3opiRXGSJ4N+JfRYUgr8XLE+6QDDW0c+ALvALkbM0EUh63CU4B7/xuy/5ZQoEEY9pEgyALRYfJUUgMK0ngOmo/amgQqsokHAcZ2yd7MCxG8S/0ZuGe8xtl4mu/BElyK1uj6AbOHa3NtPZ47BuvKf/0rpiBDh4D99BB9gADWAaeHSmtRlmxpnWZk58uYnNZV6yZGZGW1gcVziiVmgNZKVv7fPACBRRLG5ZaWqhuDNFXJRP7uzlGKKWIKJpDf/rsgLlnLMEAllpU9aQIvnUCJhcTIT71qfCiI3ciFZBL4grOX7sUM0hYDoeMr6rtOs0e3jsvmLz4fSVHqz2c71fzR+OlZ+Lqv3LfAQhAuSAb5rVeAAAAABJRU5ErkJggg=="
                />
              </svg>
            </div>
            <div class="faqInput d-flex justify-content-end align-items-center">
              <p v-if="!writeMobile" @click="showSection('writeMobile', true)">
                <span class="blackColor06">{{$cookie.get('ltrTheme') ?'Mobile':'شماره همراه'}}</span>
                <span class="blackColor06" v-if="mobile">{{ mobile }}</span>
              </p>
              <input
                @keydown.enter.tab="showSection('writeEamil', true)"
                id="writeMobile"
                v-model="mobile"
                v-else
                @blur="writeMobile = false"
                type="number"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <image
                  id="Layer_2511"
                  data-name="Layer 2511"
                  width="24"
                  height="24"
                  opacity="0.302"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAtVJREFUSEuVlQdPVUEQRr2gRoM9JnaCxt5b7L0k/mWNxgIxaIyKBBGliASNHQtRsDzPuew+l8srvJt82TY738zszNysVCrNaeTLsqwF+ePgA3gN3qOjqpIsPePyIi6sA+/Y/1yNGLmNnK0Hy8AkGEC+v5J8mYBLWxDYDn6AhWAUPKppXZYp1wo2g49BfiIlyglQvpXNbaBXS1ivZn4IvKlHojLk9UT5ueABOiTLvwwsBufAUw4GygdZtor54SIJypRfC94iP5bIq1wSyW5xlnsiwX5J2GiPwsml6Mljzg2Z1i5lOAIWgK/gIWffwtk8xjNgnL3OSHCFSX/VR8qyfcGAjtQAiFaw3g1MDA0wozRgOcNJ8CwPN5NLwFTrquDB/GDRKOe9Fc6b2NsLDFl74skO1j7+NQlOgOZiiLBE5ea7450Y0yokWtyEzO3ghV6dB50SmGJm0VUE/kQFEPhghuEu++NFxek6hOVU8CJ/ePbOMoxJ4GNdBKboYEJwjLmP1lGrFhL5y8xfIdsXCDS8NdbBHhZmzA0E/gYB01ErTN8ycTVPwqNPRG9Za3xLJLAiLwRlQ4lVO5m3gftctPc0/KWtIirzQb8HL8ySo8C3sG3kqdjIlxKo7HS4bMrFUFmhvocV2s3+cOKhnm8KZ0OVDKjUTa3EEYS7E0U+tm1jJbCAXhDiJcxN45/AzmveD6f38iiwMc1jLm5gw/YxyFlPQuKj2RDtup+AuW6LuGd6c89iO1gkmUGQs06R2CJmWjTVImzrWt5VqB3/JQeA4cqNq0gQSKLwCOsns6mFgnE3TdmqBEF4TXD7SyCxe9b8Qv7bQC3clzUJAont2YbmaI34yOWWUmSDIKb7deQm6xIEEh+4LcT+F+NzYIedRoRyk8C+ZkjzdJ4VQbQSBfatXcDQ/Qb+Gg2fqWiaWhc9KP/fDYppWi/GwSOJzDR/LhZgcyDqQ1/5f6zsP/fie4Jv/vNdAAAAAElFTkSuQmCC"
                />
              </svg>
            </div>
          </div>
          <div id="formBottom">
            <textarea
              id="bodyMessage"
              :placeholder="$cookie.get('ltrTheme') ?'Write down the text of your message or comment':'متن پیام یا نظر خود را یادداشت کنید'"
              v-model="text"
              cols="30"
              rows="10"
            ></textarea>
            <rounded-button
              @buttonClicked="sendMessage()"
              :type="'button'"
              :buttonType="'button'"
              :title="$cookie.get('ltrTheme') ?'Send Your Message':'پیام را ارسال کنید'"
            />
          </div>
        </template>
      </div>
      <div
        id="categories"
        class="width25 d-flex flex-direction-column align-items-center"
      >
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          id="addQuestion"
          @click="showQuestionFormFunc()"
        >
          {{$cookie.get('ltrTheme') ?'Create new questions':'ایجاد پرسش جدید'}} <span><i class="fa fa-plus"></i></span>
        </button>
        <selectListButton
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          v-for="(item, index) in faq.faq"
          :key="index"
          @categoryClicked="showQuestion"
          :id="item.id"
          :title="item.title"
          :summary="item.shortTitle"
          :class="{ active: item.id == activeQuestion }"
        >
          <img :src="$root.baseImageUrl + item.iconImage" :alt="item.title" />
        </selectListButton>
      </div>
      <button
        @click="moveToTop()"
        v-if="showMoveToTop"
        id="moveToTop"
        class="showInMobile"
      >
        <svg
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="10"
          viewBox="0 0 24 10"
        >
          <path
            id="_2_copy_5"
            data-name="2 copy 5"
            d="M1499,486v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm14-4v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Z"
            transform="translate(-1477 -476)"
          />
        </svg>
      </button>
    </div>
  </div>
    <loader v-else />
</template>
<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
import selectListButton from "@/components/front/faq/selectListButton.vue";
import collapseItem from "@/components/front/faq/collapseItem.vue";
import RoundedButton from "@/components/front/shared/roundedButton.vue";
import Introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    Introduction,
    collapseItem,
    selectListButton,
    Loader,
    RoundedButton
  },
  computed: {
    faq() {
      return this.$store.getters.getFaqList;
    }
  },
     metaInfo() {
    return {
      title:  this.$cookie.get("ltrTheme") ? "faq - margarin" : "مارگارین -پرسش متداول",
      meta: [
        {
          name: "description",
          content: this.faq ? this.faq.faqIntro.text : false
        },
        {
          property: "og:title",
          content:  this.$cookie.get("ltrTheme") ? "faq - margarin" : "مارگارین -پرسش متداول",
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  mounted() {
    if (this.faq == null) {
      this.$store.dispatch("getFaqListFromServer");
    }
  },
 
  methods: {
    moveToTop() {
      document
        .getElementById("categories")
        .scrollIntoView({ behavior: "smooth" });
      this.showMoveToTop = false;
    },
    showQuestion(id) {
      document
        .getElementById("questions")
        .scrollIntoView({ behavior: "smooth" });
      this.showMoveToTop = true;
this.showQuestionForm=false;
      this.activeQuestion = id;
      let helpList = null;
      this.faq.faq.forEach((list) => {
        if (list.id == id) {
          return (helpList = list);
        }
      });
      this.faqList = helpList.questions;
      this.faqListHelp = helpList.questions;
    },
    showSection(section, flag) {
      if (flag == true) {
        this[section] = true;
      }
      setTimeout(() => {
        document.getElementById(section).focus();
      }, 500);
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    showQuestionFormFunc(){
      this.showQuestionForm = true;
      if(window.innerWidth<768){
        setTimeout(() =>{
          document.getElementById('formBottom').scrollIntoView({behavior:'smooth'})
        },100)
      }
    },
    sendMessage() {
      
      if (this.$v.fullName.required == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'Enter name required':"وارد کردن نام الزامی است");
      } else if (this.$v.fullName.minLength == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'Your full name must be longer than six letters':"نام کامل شما باید بیش از شش حرف باشد");
      } else if (this.$v.email.required == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'Email is required':"وارد کردن ایمیل الزامی است");
      } else if (this.$v.email.email == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'Invalid imported email format':"فرمت وارد شده ایمیل نامعتبر است");
      }else  if (this.$v.mobile.required == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'Mobile is required':"وارد کردن شماره موبایل الزامی است");
      }else  if (this.$v.mobile.minLength == false || this.$v.mobile.minLength == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'The mobile number contains 11 digits':"شماره موبایل شامل 11 رقم است");
      }else  if (this.$v.text.required == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'Question is required':"وارد کردن پرسش الزامی است");
      }else  if (this.$v.text.minLength == false) {
        return this.$toast.error(this.$cookie.get('ltrTheme') ?'The minimum letters for a question are 20 letters':"حداقل حروف برای یک سوال شامل 20 حرف است");
      }
      const pack = {
        fullName: this.fullName,
        email: this.email,
        phone: this.mobile,
        question: this.text
      };
      this.disabled = true;
      this.$axios
        .post("UserQuestion", JSON.stringify(pack), {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          this.$toast.success(this.$cookie.get('ltrTheme') ?'Your message has reached us successfully':"پیام شما با موفقیت به دست ما رسید");
          this.fullName = "";
          this.text = "";
          this.disabled = false;
          this.email = "";
          this.mobile = "";
        })
        .catch((error) => {
          this.disabled = false;
          let arrayError = error.response.data.message.split("|");
          arrayError.forEach((err, index) => {
            if (index < 1) {
              this.$toast.error(err, {
                timeout: 1000 * (index + 4),
                pauseOnHover: true
              });
            }
          });
        });
    }
  },
  validations: {
    fullName: {
      required,
      minLength: minLength(5)
    },
    email: {
      required,
      email
    },
    text: {
      required,
      minLength: minLength(20)
    },
    mobile: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(5)
    }
  },
   data() {
    return {
      activeQuestion: null,
      showMoveToTop: false,
      writeEamil: false,
      writeMobile: false,
      writeFullName: false,
      fullName: "",
      mobile: "",
      email: "",
      text: "",
      showQuestionForm: false,
      routes:[{ route: "", routeTitle_fa: "پرسش های متداول", routeTitle_en:"common questions"}],

      search: null,
      faqList: null,
      faqListHelp: null
    };
  },
  watch: {
    faq(newVal) {
  
      this.activeQuestion = newVal.faq[0].id;
      this.faqList = newVal.faq[0].questions;
      this.faqListHelp = newVal.faq[0].questions;
    },
    search(newVal) {
      this.faqList = this.faqListHelp.filter((item) => {
        return item.question.includes(newVal);
      });
    }
  }
};
</script>
<style scoped>
button#moveToTop {
  width: max-content;
  padding: 15px;
  border-radius: 100%;
  border: none;
  transform: rotate(90deg) scale(1.2);
  position: fixed;
  z-index: 100;
  bottom: 30px;
  left: 30px;
  animation: moveToTop 1.5s infinite linear alternate;
}

button#moveToTop svg path {
  fill: #b11015;
}
@keyframes moveToTop {
  from {
    bottom: 0;
  }
  to {
    bottom: 30px;
  }
}
.successInput {
  border: 4px solid #00cb35 !important;
}
.errorInput {
  border: 4px solid #b11015 !important;
}
</style>
