<template>
  <form @submit.prevent="sendComment()" ref="commentForm" class="commentForm">
    <div id="commentFormTop" class="d-flex justify-content-between">
      <input
        tabindex="3"

        @input="$v.mobile.$touch"
        :class="{ errorBorder: $v.mobile.$error }"
        v-model="mobile"
        name="mobile"
        type="number"
        :placeholder="$cookie.get('ltrTheme')?'Mobile':'شماره همراه'"
      />
      <input
        tabindex="2"

        @input="$v.email.$touch"
        :class="{ errorBorder: $v.email.$error }"
        v-model="email"
        type="email"
        name="email"
        :placeholder="$cookie.get('ltrTheme')?'E-mail':'پست الکترونیک'"
      />
      <input
        tabindex="1"

        @input="$v.fullName.$touch"
        :class="{ errorBorder: $v.fullName.$error }"
        v-model="fullName"
        name="fullName"
        type="text"
        :placeholder="$cookie.get('ltrTheme')?'Full Name':'نام و نام خانوادگی'"
      />
    </div>
    <textarea
        tabindex="4"

      @input="$v.message.$touch"
      :class="{ errorBorder: $v.message.$error }"
      name="message"
      v-model="message"
      :placeholder="$cookie.get('ltrTheme')?'Write down the text of your message or comment in this section':'متن پیام یا نظر خود را در این بخش یادداشت کنید'"
      cols="30"
      rows="10"
    ></textarea>
    <div class="sendComment width40">
      <roundedButton 
        :type="'button'"
        :buttonType="'submit'"
        :title="$cookie.get('ltrTheme')?'Send Your Message':'پیام را ارسال کنید'"
      />
  
    </div>
      <Recaptcha :showRecaptcha="showRecaptcha" @rightAnswer="rightAnswer()" @closeRecaptcha="showRecaptcha=$event" />

  </form>
</template>
<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
import Recaptcha from "@/components/front/shared/recaptcha.vue";

import roundedButton from "@/components/front/shared/roundedButton.vue";
export default {
  validations: {
    mobile: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11)
    },
    email: {
      email,
      required
    },
    fullName: {
      required,
      minLength: minLength(4)
    },
    message: {
      required,
      minLength: minLength(3)
    }
  },
  data() {
    return {
      showRecaptcha:false,

      mobile:null,
      email:null,
      fullName:null,
      message:null,
     
    };
  },
  components: {
    roundedButton,
    Recaptcha
  },
  methods: {
      rightAnswer(){
        let pack={
        replyTo:this.replyTo,
        fullName:this.fullName,
        email:this.email,
        phone:this.mobile,
        text:this.message,
        isShow:false,
      }
        
      pack[this.field]=this.$route.params.id
    //   ارسال کامنت
      this.$axios.post(this.route, pack).then((response) => {
        this.$emit("changeReplatTo",null);
        this.fullName=null;
        this.email=null;
        this.mobile=null;
        this.message=null;
        return this.$toast.success(response.data.message);
      }).catch((error) =>{
        let arrayError = error.response.data.message.split("|");
            arrayError.forEach((err, index) => {
                this.$toast.error(err, {
                    timeout: 1000 * (index + 4),
                    pauseOnHover: true
                });
            });
      })
    //   بازگردانی به حالت اولیه
      //  this.$refs.commentForm.reset();
    this.showRecaptcha=false;
    },
    sendComment(e) {
   this.showRecaptcha=true;
      
    }
  },
  props: {
    route: String,
    field:String,
     replyTo:Number
  }
};
</script>
