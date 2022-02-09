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
        :settings="settings"
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
          placeholder: " سوال را وارد کنید",
          type: "description",
          multiData: true,
          name: "سوال",
          key: "question"
        },
            {
              style: "col-6",
              show_in_table: false,
              placeholder: "دسته بندی را انتخاب کنید",
                type: "select",
              multiData: false,
              name: " دسته بندی",
                multiple: false,
                selectIN: "CommonQuestionCategory",
              key: "catId"
            },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "پاسخ را وارد کنید",
          type: "description",
          multiData: true,
          name: "پاسخ",
          key: "answer"
        },
        {
            placeholder: "شماره جایگاه را وارد کنید",
          style: "col-6",
            type: "number",
          show_in_table: false,
          multiData: false,
          name: "شماره جایگاه",
          key: "order"
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
      title: "پرسش متداول",
      editedId: null,
      apiRoute: "CommonQuestion",
      pageSize:0,
    };
  },
  mounted() {
      this.loadSettings([{route:'CommonQuestionCategory',field:'title'}])
      this.loadItems(null);
  },
  watch:{
      item(newVal){
          this.bigData = newVal
      }
  }
};
</script>
<style></style>
