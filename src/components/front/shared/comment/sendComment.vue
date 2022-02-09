<template>
  <form @submit.prevent="sendComment()" ref="commentForm" class="commentForm">
    <div id="commentFormTop" class="d-flex justify-content-between">
      <input
        @input="$v.mobile.$touch"
        :class="{ errorBorder: $v.mobile.$error }"
        v-model="mobile"
        name="mobile"
        type="number"
        :placeholder="$cookie.get('ltrTheme')?'Mobile':'شماره همراه'"
      />
      <input
        @input="$v.email.$touch"
        :class="{ errorBorder: $v.email.$error }"
        v-model="email"
        type="email"
        name="email"
        :placeholder="$cookie.get('ltrTheme')?'E-mail':'پست الکترونیک'"
      />
      <input
        @input="$v.fullName.$touch"
        :class="{ errorBorder: $v.fullName.$error }"
        v-model="fullName"
        name="fullName"
        type="text"
        :placeholder="$cookie.get('ltrTheme')?'Full Name':'نام و نام خانوادگی'"
      />
    </div>
    <textarea
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
  </form>
</template>
<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
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
      mobile:null,
      email:null,
      fullName:null,
      message:null,
     
    };
  },
  components: {
    roundedButton
  },
  methods: {
    sendComment(e) {
    //   اعتبار سنجی کامنت
      // if (!this.$v.fullName.$error) {
      //   if (!this.$v.fullName.required) {
           
      //     return this.$toast.error( "وارد کردن نام الزامی است");
      //   } else {
      //     return this.$toast.error(
         
      //       "نام باید بیش از سه حرف داشته باشد"
      //     );
      //   }
      // }
      // if (!this.$v.email.$error) {
      //   if (!this.$v.email.required) {
      //     return this.$toast.error("وارد کردن ایمیل الزامی است");
      //   } else {
      //     return this.$toast.error(
          
      //       "فرمت ایمیل وارد شده معتبر نیست"
      //     );
      //   }
      // }
      // if (!this.$v.mobile.$error) {
      //   if (!this.$v.mobile.required) {
      //     return this.$toast.error("وارد کردن تلفن الزامی است");
      //   } else {
      //     return this.$toast.error(
        
      //       "فرمت شماره وارد شده معتبر نیست"
      //     );
      //   }
      // }
      // if (!this.$v.message.$error) {
      //   if (!this.$v.message.required) {
      //     return this.$toast.error(
         
      //       "وارد کردن متن کامنت الزامی است"
      //     );
      //   } else  {
      //     return this.$toast.error(
       
      //       "تعداد حروف مورد نیاز برای درج پیام حداقل سه حرف است"
      //     );
      //   }
      // }
      let pack={
        blogId:this.$route.params.id,
        replyTo:this.replyTo,
        fullName:this.fullName,
        email:this.email,
        phone:this.mobile,
        text:this.message,
        isShow:true,
      }

    //   ارسال کامنت
      this.$axios.post(this.route, pack).then((response) => {
        this.$emit("changeReplatTo",0);
        this.fullName=null;
        this.email=null;
        this.mobile=null;
        this.message=null;
        return this.$toast.success("دیدگاه شما با موفقیت ثبت شد");
      });
    //   بازگردانی به حالت اولیه
       this.$refs.commentForm.reset();
    }
  },
  props: {
    route: String,
     replyTo:Number
  }
};
</script>
