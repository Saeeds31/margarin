<template>
  <div class="mainContentAdmin" id="weblogCategories">
    <b-overlay :show="status" no-wrap fixed z-index="9999">
      <template v-slot:overlay>
        <div class="d-flex align-items-center">
          <b-spinner small type="grow" variant="dark" class="mx-1"></b-spinner>
          <b-spinner type="grow" variant="dark" class="mx-1"></b-spinner>
          <b-spinner small type="grow" variant="dark" class="mx-1"></b-spinner>
        </div>
      </template>
    </b-overlay>
    <div class="filters">
      <!-- <b-button variant="primary" @click="showModal = true">افزودن </b-button> -->
    </div>
    <div v-if="items" class="mainTable">
       <s-table
                    v-model="items"
                    @showEditModal="showEditModal"
                    @deleteItem="deleteItem"
                    :headers="headers"
                  />
    </div>
    <b-modal
      id="categoryModal"
      hide-footer
      ref="categoryModal"
      no-close-on-backdrop
      v-model="showModal"
      @close="resetModal()"
      :title="mode == 'create' ? 'افزودن ' + title : ' مشاهده ' + title"
    >
      <s-inputs
        :disabled="disabled"
        :killButtons="true"
        @submit="submit"
        :mode="'edit'"
        :folderRoute="'testAboutUs'"
        :bigData="bigData"
        :headers="headers"
      />
    </b-modal>
  </div>
</template>
<script>
import SInputs from "@/components/admin/shared/sInputs.vue";
import STable from "@/components/admin/shared/sTable.vue";
import adminMixin from "@/libraries/adminController.js"
import { BModal, BButton,BOverlay,BSpinner } from "bootstrap-vue";
export default {
mixins:[adminMixin],
  components: { SInputs, BModal, BButton, STable,BOverlay,BSpinner },
  data() {
    return {
      headers: [
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "نام",
          type: "string",
          multiData: false,
          name: "نام",
          key: "name",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "نام خانوادگی",
          type: "string",
          multiData: false,
          name: "نام خانوادگی",
          key: "lastName",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "نام پدر",
          type: "string",
          multiData: false,
          name: "نام پدر",
          key: "fatherName",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "شماره ملی",
          type: "string",
          multiData: false,
          name: "شماره ملی",
          key: "shomareMelli",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "شماره شناسنامه",
          type: "string",
          multiData: false,
          name: "شماره شناسنامه",
          key: "shomareShenasname",
          disable:true
        },
         {
          style: "col-6",
          show_in_table: false,
          placeholder: "تاریخ تولد",
          type: "string",
          multiData: false,
          name: "تاریخ تولد",
          key: "birthDate",
          disable:true
        },
        {
          style: "col-4",
          show_in_table: false,
          placeholder: "جنسیت",
          type: "string",
          multiData: false,
          name: "جنسیت",
          key: "gender",
          disable:true
        },
        {
          style: "col-4",
          show_in_table: false,
          placeholder: "وضعیت تاهل",
          type: "string",
          multiData: false,
          name: "وضعیت تاهل",
          key: "maritalStatus",
          disable:true
        },
       
        {
          style: "col-4",
          show_in_table: false,
          placeholder: "مذهب",
          type: "string",
          multiData: false,
          name: "مذهب",
          key: "religion",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "شماره تماس",
          type: "string",
          multiData: false,
          name: "شماره تماس",
          key: "phone",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "موبایل",
          type: "string",
          multiData: false,
          name: "موبایل",
          key: "mobile",
          disable:true
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "ایمیل",
          type: "string",
          multiData: false,
          name: "ایمیل",
          key: "email",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "استان",
          type: "string",
          multiData: false,
          name: "استان",
          key: "province",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "شهر",
          type: "string",
          multiData: false,
          name: "شهر",
          key: "city",
          disable:true
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "آدرس",
          type: "description",
          multiData: false,
          name: "آدرس",
          key: "address",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "کد پستی",
          type: "string",
          multiData: false,
          name: "کد پستی",
          key: "pstalCode",
          disable:true
        },
        
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "فایل",
          type: "file",
          multiData: false,
          name: "فایل",
          key: "file",
          disable:true
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "تحصیلات",
          type: "string",
          multiData: false,
          name: "تحصیلات",
          key: "education",
          disable:true
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توانمندی ها",
          type: "string",
          multiData: false,
          name: "توانمندی ها",
          key: "capabilities",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "سابقه بیمه به سال",
          type: "string",
          multiData: false,
          name: "سابقه بیمه به سال",
          key: "yearInsurance",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "سابقه بیمه به ماه",
          type: "string",
          multiData: false,
          name: "سابقه بیمه به ماه",
          key: "monthInsurance",
          disable:true
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات اضافی",
          type: "description",
          multiData: false,
          name: "توضیحات اضافی",
          key: "extraDescription",
          disable:true
        },
           
      
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "",
          type: "setting",
          name: "تنظیمات",
          multiData: false,
          key: "",
          edit: true,
          delete: true,
          editLabel:"مشاهده",
        }
      ],
      pageSize:10,
      bigData: {
        persian: {},
        english: {},
        both: {}
      },
      title: "همکاری با ما",
      editedId: null,
      apiRoute: "Cooperation",
    };
  },
  mounted() {
    if(this.$route.query.page){
      this.currentPage=this.$route.query.page
    }else{

      this.currentPage=1;
    }
      this.loadItems(this.currentPage);
  },
  watch:{
      item(newVal){
          this.bigData = newVal
      }
  }
};
</script>
<style></style>
