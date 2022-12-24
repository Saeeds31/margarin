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
      <!-- <b-button variant="primary" @click="showModalFunction">افزودن </b-button> -->
    </div>
    <div v-if="items" class="mainTable">
      <s-table
        @callModalFromTable="callModalFromTable"
        v-model="items"
        @showEditModal="showEditModal"
        :settings="settings"
        @deleteItem="deleteItem"
        :headers="headers"
      />
    </div>
    <div v-if="items != null && totalPages > 1">
      <div id="pagination">
        <pagination
          @pageChanged="pageChanged"
          :totalPages="totalPages"
          :currentPage="currentPage"
        />
      </div>
    </div>
    <b-modal
      id="blogModal"
      hide-footer
      ref="blogModal"
      no-close-on-backdrop
      v-model="showModal"
      @close="resetModal()"
      :title="mode == 'create' ? 'افزودن ' + title : ' مشاهده ' + title"
    >
      <s-inputs
        :disabled="disabled"
        @submit="submit"
        :mode="mode"
        :folderRoute="'weblogs'"
        :bigData="bigData"
        :settings="settings"
        :headers="headers.filter((item)=>{return item.show_in_Form!=false})"
      />
    </b-modal>

  </div>
</template>
<script>
import pagination from "@/components/front/shared/pagination.vue";
import SInputs from "@/components/admin/shared/sInputs.vue";
import STable from "@/components/admin/shared/sTable.vue";
import adminMixin from "@/libraries/adminController.js";
import { BModal, BButton, BOverlay, BSpinner } from "bootstrap-vue";
export default {
  mixins: [adminMixin],
  components: {
    SInputs,
    BModal,
    BButton,
    STable,
    BOverlay,
    BSpinner,
    pagination,
  },
  data() {
    return {
      headers: [
        {
          style: "col-12",
          show_in_table: true,
          type: "description",
          multiData: false,
          name: "پیام",
          key: "message",
        },
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "عنوان خبر را وارد کنید",
          type: "string",
          multiData: false,
          name: "نام کاربری",
          key: "username",
        },
        
        {
          style: "col-12",
          show_in_table: true,
          type: "boolean",
          multiData: false,
          name: "ارسالی توسط کاربر",
          key: "forAdmin",
        },

      ],
      pageSize: 10,
      bigData: {
        persian: {},
        english: {},
        both: {},
      },
      title: "تامین کنندگان",
      editedId: null,
      apiRoute: "SupplierMessage",
    };
  },
  mounted() {
   
    this.getId();
    this.loadItems();
    
  },
  watch: {
    item(newVal) {
      this.bigData = newVal;
    },
  },
  methods: {
    callModalFromTable(newsId) {
      // 
      this.$router.push(`/admin-panel/supplier-requests?newsId=${newsId}`)
     
    },
    showModalFunction() {
      this.showModal = true;
      setTimeout(() => {
        document
          .getElementById("blogModal___BV_modal_content_")
          .removeAttribute("tabindex");
      });
    },
  },
};
</script>
