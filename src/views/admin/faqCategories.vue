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
      :title="mode == 'create' ? 'افزودن ' + title : ' ویرایش ' + title"
    >
      <s-inputs
        :disabled="disabled"
        @submit="submit"
        :mode="mode"
        :folderRoute="'faqsCategory'"
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
          placeholder: "نام دسته بندی را وارد کنید",
          type: "string",
          multiData: true,
          name: "نام دسته بندی",
          key: "title"
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیح کوتاه را وارد کنید",
          type: "string",
          multiData: true,
          name: "توضیح کوتاه",
          key: "shortTitle"
        },
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "آیکن دسته بندی را انتخاب کنید",
          type: "image",
          multiData: false,
          name: "آیکن",
          key: "iconImage"
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
          delete: true
        }
      ],
      bigData: {
        persian: {},
        english: {},
        both: {}
      },
      title: "دسته بندی",
      editedId: null,
      apiRoute: "CommonQuestionCategory",
      pageSize:0,
    };
  },
  mounted() {
      this.loadItems();
  },
  watch:{
      item(newVal){
          this.bigData = newVal
      }
  }
};
</script>
<style></style>
