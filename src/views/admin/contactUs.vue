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
    <div v-if="items!=null&&items.length>0" class="mainTable">
       <s-table
                    v-model="items"
                    @showEditModal="showEditModal"
                    @deleteItem="deleteItem"
                    :headers="headers"
                  />
    </div>
    <div v-if="items!=null&&totalPages>1">
 <div id="pagination">
        <pagination @pageChanged="pageChanged" :totalPages="totalPages" :currentPage="currentPage" />

        </div>
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
        :mode="mode"
        :folderRoute="'testAboutUs'"
        :bigData="bigData"
        :headers="headers"
      />
    </b-modal>
  </div>
</template>
<script>
import pagination from "@/components/front/shared/pagination.vue"
import SInputs from "@/components/admin/shared/sInputs.vue";
import STable from "@/components/admin/shared/sTable.vue";
import adminMixin from "@/libraries/adminController.js"
import { BModal, BButton,BOverlay,BSpinner } from "bootstrap-vue";
export default {
mixins:[adminMixin],
  components: { SInputs, BModal, BButton, STable,BOverlay,BSpinner,pagination },
  data() {
    return {
      headers: [
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "نام",
          type: "string",
          multiData: false,
          name: "نام",
          key: "fullName",
          disable:true
        },
          
        {
          style: "col-6",
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
          show_in_table: true,
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
          placeholder: "برای مدیریت",
          type: "boolean",
          multiData: false,
          name: "برای مدیریت",
          key: "forManager",
          disable:true
        },
          
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "متن پیام",
          type: "description",
          multiData: false,
          name: "متن پیام",
          key: "text",
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
      title: "تماس با ما",
      editedId: null,
      apiRoute: "ContactUs",
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
