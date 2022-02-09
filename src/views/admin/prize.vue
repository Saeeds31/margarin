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
      <b-button variant="primary" @click="showModal = true">افزودن </b-button>
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
        @submit="submit"
        :mode="mode"
        :folderRoute="'prize'"
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
          style: "col-12",
          show_in_table: true,
          placeholder: "عنوان جایزه را وارد کنید",
          type: "string",
          multiData: true,
          name: "عنوان",
          key: "title",
        },
          
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات کوتاه جایزه را وارد کنید",
          type: "string",
          multiData: true,
          name: "توضیحات کوتاه",
          key: "shortDescription",
        },
          
       
          
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات جایزه را وارد کنید",
          type: "description",
          multiData: true,
          name: "توضیحات",
          key: "description",
        },
          
       
        {
          style: "col-12",
          show_in_table: false,
          placeholder: " زمان دریافت جایزه را وارد کنید",
          type: "date",
          multiData: false,
          name: "زمان دریافت",
          key: "receivedDate",
          disable:true
        },
          
         {
          style: "col-12",
          show_in_table: true,
          placeholder: "تصویر جایزه را وارد کنید",
          type: "image",
          multiData: false,
          name: "تصویر ",
          key: "image",
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
          editLabel:"ویرایش",
        }
      ],
      pageSize:10,
      bigData: {
        persian: {},
        english: {},
        both: {}
      },
      title: "جوایز",
      editedId: null,
      apiRoute: "Prize",
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
