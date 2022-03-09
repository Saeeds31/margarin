<template>
  <div id="aboutUs" class="mainContentAdmin">
      <b-overlay :show="status" no-wrap fixed z-index="9999">
        <template v-slot:overlay>
          <div class="d-flex align-items-center">
            <b-spinner
              small
              type="grow"
              variant="dark"
              class="mx-1"
            ></b-spinner>
            <b-spinner type="grow" variant="dark" class="mx-1"></b-spinner>
            <b-spinner
              small
              type="grow"
              variant="dark"
              class="mx-1"
            ></b-spinner>
          </div>
        </template>
      </b-overlay>
      <sInputs
        :disabled="disabled"
        @submit="submit"
        :mode="'edit'"
        :folderRoute="'testAboutUs'"
        :bigData="bigData"
        :headers="headers" />  
  </div>
</template>

<script>
import sInputs from "@/components/admin/shared/sInputs.vue"
import {BModal,BOverlay,BSpinner} from "bootstrap-vue"
import mixins from "@/libraries/adminController.js";

export default {
  components:{
    sInputs,
    BModal,BOverlay,BSpinner
  },
 
  mixins: [mixins],
  data() {
    return {
        headers: [
          
        {
          style: "col-6",
          show_in_table: true,
          placeholder: " عنوان سایت را وارد کنید",
          type: "string",
          name: "عنوان ",
          key: "title",
          multiData:true,
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " شعار سایت را وارد کنید",
          type: "string",
          name: "شعار ",
          multiData:true,
          key: "slogan"
        },

        {
          style: "col-12",
          show_in_table: false,
          placeholder: "  توضیحات وبسایت را وارد کنید",
          type: "description",
          name: " توضیحات ",
          multiData:true,
          key: "webSiteDescription"
        },{
          style: "col-12",
          show_in_table: false,
          placeholder: "  آدرس وبسایت را وارد کنید",
          type: "description",
          name: " آدرس ",
          multiData:true,
          key: "address"
        },
      
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "  متن کپی رایت وبسایت را وارد کنید",
          type: "description",
          name: " متن کپی رایت ",
          multiData:true,
          key: "copyRight"
        },
      
        
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " اینستاگرام وبسایت را وارد کنید",
          type: "string",
          name: "اینستاگرام ",
          multiData:false,
          key: "instagrm"
        },
        
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " فیسبوک وبسایت را وارد کنید",
          type: "string",
          name: "فیسبوک ",
          multiData:false,
          key: "facebook"
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " توئیتر وبسایت را وارد کنید",
          type: "string",
          name: "توئیتر ",
          multiData:false,
          key: "twitter"
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " واتساپ وبسایت را وارد کنید",
          type: "string",
          name: "واتساپ ",
          multiData:false,
          key: "whatsApp"
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " تلگرام وبسایت را وارد کنید",
          type: "string",
          name: "تلگرام ",
          multiData:false,
          key: "telgram"
        },
          {
          style: "col-6",
          show_in_table: false,
          placeholder: " فاکس وبسایت را وارد کنید",
          type: "string",
          name: "فاکس ",
          multiData:false,
          key: "fax"
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " ایمیل وبسایت را وارد کنید",
          type: "string",
          name: "ایمیل ",
          multiData:false,
          key: "email"
        },
        
      
        
        
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " کد پستی وبسایت را وارد کنید",
          type: "string",
          name: "کد پستی ",
          multiData:false,
          key: "postal"
        },
        

        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات متا را وارد کنید",
          type: "description",
          multiData:true,
          name: "توضیحات متا",
          key: "meta"
        },
       
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "ایمیل مدیریت برای ارسال پیام های کاربران",
          type: "string",
          multiData:false,
          name: "ایمیل مدیریت",
          key: "emailManager"
        },
       
        
        {
          style: "col-12",
          show_in_table: true,
          placeholder: " تصویر لوگو را وارد کنید",
          type: "image",
          multiData:false,
          name: "تصویر",
          key: "logo"
        },
        // {
        //   style: "col-6",
        //   show_in_table: true,
        //   placeholder: " تصویر لوگو در پنل را وارد کنید",
        //   type: "image",
        //   multiData:false,
        //   name: " تصویر لوگو در پنل ادمین",
        //   key: "panelLogo"
        // },
        
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "",
          type: "setting",
          name: "تنظیمات",
          multiData:false,
          key: "",
          edit: true,
          delete: true
        }
      ],
        bigData: {
        persian: {},
        english: {},
        both: {}
      },
      editedId:1,
      apiRoute:"Setting"
    };
  },
  mounted() {
    this.loadItem(1);
  },
  methods: {
  },

watch:{
  item(newVal){
    
    this.bigData=newVal;
  }
}
};
</script>
<style>
#aboutUs .SForm{
  width:90%;
  margin:auto;
}
</style>
