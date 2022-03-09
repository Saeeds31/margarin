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
          style: "col-12",
          show_in_tabel: true,
          placeholder: "عنوان کوتاه را وارد کنید",
          type: "string",
          name: "عنوان کوتاه",
          key: "title",
          multiData:true,
        },
             
        {
          style: "col-12",
          show_in_tabel: true,
          placeholder: "پاراگراف اول را وارد کنید",
          type: "description",
          name: "پاراگراف اول",
          key: "text",
          multiData:true,
        },
          
        {
          style: "col-6",
          show_in_tabel: true,
          placeholder: "متن پاراگراف اول را وارد کنید",
          type: "description",
          name: "پاراگراف اول",
          key: "description",
          multiData:true,
        },
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "متن پاراگراف دوم را وارد کنید",
          type: "description",
          name: "پاراگراف دوم",
          multiData:true,
          key: "description2"
        },

        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " متن آمار و ارقام را وارد کنید",
          type: "description",
          name: "متن آمار و ارقام",
          multiData:true,
          key: "statisticText"
        },
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "تعداد پرسنل",
          type: "number",
          name: "پرسنل",
          multiData:false,
          key: "personel"
        },
        
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "تعداد محصولات",
          type: "number",
          name: "محصولات",
          multiData:false,
          key: "products"
        },
        
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "تعداد برند ها",
          type: "number",
          multiData:false,
          name: "برند ها",
          key: "brand"
        },
        
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "به میلیارد تومان وارد کنید",
          type: "number",
          multiData:false,
          name: "میزان سرمایه",
          key: "fund"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          multiData:true,
          placeholder: " عنوان اول معرفی نامه را وارد کنید",
          type: "string",
          name: "عنوان اول معرفی نامه",
          key: "exteraTitle1"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          multiData:true,
       placeholder: " توضیح اول معرفی نامه را وارد کنید",
          type: "description",
          name: "توضیح اول معرفی نامه",
          key: "exteraText1"
        },
        
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " عنوان دوم معرفی نامه را وارد کنید",
          type: "string",
          multiData:true,
          name: "عنوان دوم معرفی نامه",
          key: "exteraTitle2"
        },
        {
          style: "col-12",
          show_in_tabel: false,
       placeholder: " توضیح دوم معرفی نامه را وارد کنید",
          type: "description",
          multiData:true,
          name: "توضیح دوم معرفی نامه",
          key: "exteraText2"
        },
        
        
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " عنوان سوم معرفی نامه را وارد کنید",
          type: "string",
          multiData:true,
          name: "عنوان سوم معرفی نامه",
          key: "exteraTitle3"
        },
        
        
         {
          style: "col-12",
          show_in_tabel: false,
       placeholder: " توضیح سوم معرفی نامه را وارد کنید",
          type: "description",
          multiData:true,
          name: "توضیح سوم معرفی نامه",
          key: "exteraText3"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " عنوان چهارم معرفی نامه را وارد کنید",
          type: "string",
          multiData:true,
          name: "عنوان چهارم معرفی نامه",
          key: "exteraTitle4"
        },
        
        
         {
          style: "col-12",
          show_in_tabel: false,
       placeholder: " توضیح چهارم معرفی نامه را وارد کنید",
          type: "description",
          multiData:true,
          name: "توضیح چهارم معرفی نامه",
          key: "exteraText4"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: "توضیحات متا را وارد کنید",
          type: "description",
          multiData:true,
          name: "توضیحات متا",
          key: "meta"
        },
       
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "عنوان ویدیو",
          type: "string",
          multiData:true,
          name: "عنوان ویدیو",
          key: "videoTitle"
        },
       
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "توضیحات ویدیو را وارد کنید",
          type: "string",
          multiData:true,
          name: "توضیحات ویدیو",
          key: "videoShortDescription"
        },
       
        
        {
          style: "col-6",
          show_in_tabel: true,
          placeholder: " تصویر اصلی با ارتفاع 586 و عرض 460 پیکسل",
          type: "image",
          multiData:false,
          name: "تصویر",
          key: "image"
        },
        {
          style: "col-6",
          show_in_tabel: true,
          placeholder: " تصویر کاور  با ارتفاع 517 و عرض 1130 پیکسل",
          type: "image",
          multiData:false,
          name: "کاور ویدیو",
          key: "videoCover"
        },
        
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "عکس آمار و ارقام  با ارتفاع 520 و عرض 964 پیکسل",
          type: "image",
          multiData:false,
          name: "تصویر آمار و ارقام",
          key: "staticImage"
        },
        
        {
          style: "col-6",
          show_in_tabel: true,
          placeholder: "آیکن معرفی نامه اول با ارتفاع 50 و عرض 50 پیکسل",
          type: "image",
          multiData:false,
          name: "آیکن معرفی نامه اول",
          key: "exteraTitle1Icon"
        },
        
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "آیکن معرفی نامه دوم  با ارتفاع 50 و عرض 50 پیکسل",
          type: "image",
          multiData:false,
          name: "آیکن معرفی نامه دوم",
          key: "exteraTitle2Icon"
        },
        
        
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "آیکن معرفی نامه سوم با ارتفاع 50 و عرض 50 پیکسل",
          type: "image",
          multiData:false,
          name: "آیکن معرفی نامه سوم",
          key: "exteraTitle3Icon"
        },
        
        
        
        
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: "آیکن معرفی نامه چهارم با ارتفاع 50 و عرض 50 پیکسل",
          type: "image",
          multiData:false,
          name: "آیکن معرفی نامه چهارم",
          key: "exteraTitle4Icon"
        },
        
        
        {
          style: "col-12",
          show_in_tabel: true,
          placeholder: "ویدیو را وارد کنید",
          type: "video",
          multiData:false,
          name: "ویدیو",
          key: "video"
        },
        {
          style: "col-12",
          show_in_tabel: true,
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
      apiRoute:"AboutUs"
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
