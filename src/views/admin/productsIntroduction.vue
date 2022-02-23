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
        :folderRoute="'products'"
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
          placeholder: "عنوان صفحه را وارد کنید",
          type: "description",
          name: "عنوان صفحه",
          key: "title",
          multiData:true,
        },
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: "متن  اصلی را وارد کنید",
          type: "description",
          name: "متن توضیحات",
          multiData:true,
          key: "text"
        },

       
        {
          style: "col-12",
          show_in_tabel: true,
         
          placeholder: " تصویر اصلی با ارتفاع 586 و عرض 460 پیکسل",
          type: "image",
          multiData:false,
          name: "تصویر",
          key: "image"
        },
        
       
        {
          style: "col-12",
          show_in_tabel: false,
         
          placeholder: " فایل قیمت مصوب را آپلود کنید",
          type: "file",
          multiData:false,
          name: "فایل قیمت مصوب",
          key: "priceListFile"
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
      apiRoute:"ProductsIntro"
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
