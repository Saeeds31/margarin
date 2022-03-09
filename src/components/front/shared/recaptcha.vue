<template>
  <b-modal
    id="recaptchaModal"
    hide-footer
    ref="recaptchaModal"
    no-close-on-backdrop
    v-model="showRecaptcha"
    @close="resetModal()"
    :title="$cookie.get('ltrTheme')?'Answer the security question':'پاسخ به پرسش امنیتی'"
  >
   <div id="recaptchaBox">
 <p id="questionLabel">
      {{
        $cookie.get("ltrTheme")
          ? "Enter the result of the security phrase below"
          : "نتیجه عبارت امنیتی زیر را وارد کنید"
      }}
    </p>
    <div class="securityQuestion">
      <span>{{ number1 }}</span>
      <i class="fa fa-plus"></i>
      <span>{{ number2 }}</span>

      <svg
        class="resetQuestionSvg"
        @click="resetQuestion()"
        width="24"
        height="24"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 492 492"
        style="enable-background: new 0 0 492 492"
        xml:space="preserve"
      >
        <g>
          <g>
            <g>
              <path
                d="M464.9,284.408c0.053,0,0.105,0.004,0.157,0.004h0.055L464.9,284.408z"
              />
              <path
                d="M484.004,292.48c-5.063-5.086-11.821-8.025-18.947-8.068H330.468c-14.824,0-26.676,12.3-26.676,27.12v22.78
				c0,7.156,2.7,13.9,7.788,18.992c5.088,5.092,11.784,7.896,18.94,7.896l39.052,0.008c-32.06,34.332-76.68,53.864-123.672,53.864
				c-93.22,0-169.072-75.844-169.072-169.072s75.84-169.072,169.064-169.072c69.796,0,133.336,43.82,158.108,109.04
				c5.632,14.816,20.068,24.776,35.916,24.776c4.66,0,9.248-0.848,13.632-2.52c19.8-7.516,29.784-29.748,22.26-49.544
				C439.772,63.84,347.376,0.112,245.888,0.112C110.308,0.112,0,110.416,0,246s110.236,245.888,245.816,245.888
				c62.584,0,123.272-24.632,169.364-67.872v21.788c0,14.824,12.208,26.812,27.032,26.812h22.78
				c14.824,0,27.008-11.988,27.008-26.812v-134.18C492,304.444,489.116,297.564,484.004,292.48z"
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
    <b-form-input
    id="resultRecaptcha"
      v-model="result"
      :type="$root.screenSize > 1000 ? 'number' : 'tel'"
    ></b-form-input>
    <b-button class="applyRecaptcha" variant="primary" @click="checkAnswer">{{
      $cookie.get("ltrTheme") ? "Apply" : "تایید"
    }}</b-button>
   </div>
  </b-modal>
</template>
<script>
import { BModal,BFormInput,BButton } from "bootstrap-vue";
export default {
  components: {
    BModal,BFormInput,BButton
  },
  mounted() {
    this.number1 = Math.floor(Math.random() * 10);
    this.number2 = Math.floor(Math.random() * 10);
    this.mainResult = this.number1 + this.number2;
  },
  methods: {
    resetQuestion() {
      this.number1 = Math.floor(Math.random() * 10);
      this.number2 = Math.floor(Math.random() * 10);
      this.mainResult = this.number1 + this.number2;
    },
    resetModal(){
        this.$emit('closeRecaptcha',false);
        this.resetQuestion();
    },
    checkAnswer(){
        if(this.result==this.mainResult){
            this.$emit('rightAnswer',true)
        }else{
            this.$toast.error(this.$cookie.get('ltrTheme')?'Your answer is wrong, please try again':'پاسخ شما اشتباه است لطفا مجددا تلاش کنید');
            this.resetQuestion();
        }
    }
  },
  data() {
    return {
      number1: 0,
      number2: 0,
      result: null,
      mainResult: 0
    };
  },
  props: {
      showRecaptcha:Boolean
  }
};
</script>
<style>
div#recaptchaModal .modal-dialog {
    width: 350px;
}
div#recaptchaBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
p#questionLabel {
    font-size: 20px;
    text-shadow: 0 0 10px #00035236;
    font-family: 'yekan-bold';
}
.securityQuestion {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
}
.securityQuestion span {
    font-size: 22px;
    font-family: 'yekan-heavy';
    color:red

}
.securityQuestion span:first-child {
    color:var(--color-theme) !important;

}
.securityQuestion i {
    position: relative;
    bottom: 5px;
    margin: 0 10px;
}

.securityQuestion svg {
    margin-left: 20px;
    position: relative;
    bottom: 4px;
}
.applyRecaptcha{
    width: 150px;
    margin-top: 20px;
}
#resultRecaptcha{
    text-align: center;
}
</style>