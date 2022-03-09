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
      <b-button variant="primary" @click="showModalFunction">افزودن </b-button>
    </div>
    <div v-if="items" class="mainTable">
      <s-table
        v-if="Object.keys(settings).length > 0"
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
        :folderRoute="'products'"
        :bigData="bigData"
        :settings="settings"
        :headers="headers"
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
    pagination
  },
  data() {
    return {
      headers: [
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "عنوان محصول را وارد کنید",
          type: "string",
          multiData: true,
          name: "عنوان محصول",
          key: "name"
        },
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "قیمت مصوب را (به تومان و دلار) وارد کنید",
          type: "string",
          multiData: true,
          name: "قیمت مصوب",
          key: "price"
        },
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "نوع محصول را وارد کنید",
          type: "string",
          multiData: true,
          name: "نوع محصول",
          key: "type"
        },
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "دسته بندی را انتخاب کنید",
          type: "select",
          multiData: false,
          name: " دسته بندی",
          multiple: false,
          selectIN: "ProductCategory",
          key: "categoryId"
        },
        
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "برند را انتخاب کنید",
          type: "select",
          multiData: false,
          name: " برند",
          multiple: false,
          selectIN: "Brand",
          key: "brandId"
        },

        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات کوتاه",
          type: "description",
          multiData: true,
          name: "توضیحات کوتاه",
          key: "shortDescription"
        },

        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات کامل",
          type: "ckEditor",
          multiData: true,
          name: "توضیحات کامل",
          key: "text"
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " امتیاز محصول را وارد کنید",
          type: "number",
          multiData: false,
          name: "امتیاز محصول",
          key: "scroe"
        },

        {
          style: "col-6",
          show_in_table: true,
          placeholder: "تصویر محصول با ارتفاع 467پیکسل و عرض 267 پیکسل",
          type: "image",
          multiData: false,
          name: "تصویر محصول ",
          key: "image"
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "تصویر جدول تغذیه با ارتفاع 250 و عرض 350 پیکسل",
          type: "image",
          multiData: false,
          name: "تصویر جدول تغذیه",
          key: "nutritionFactImage"
        },{
          style: "col-6",
          show_in_table: false,
          placeholder: "تصویر اندازه بطری ها با ارتفاع 300 و عرض 100 پیکسل",
          type: "image",
          multiData: false,
          name: "تصویر اندازه بطری ها",
          key: "sizeImage"
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "ویدیو محصول",
          type: "video",
          multiData: false,
          name: "ویدیو محصول",
          key: "videoLink"
        },

        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات متا را وارد کنید",
          type: "description",
          multiData: true,
          name: "توضیحات متا ",
          key: "meta"
        },

        {
          style: "col-12",
          show_in_table: true,
          placeholder: "",
          type: "setting",
          name: "تنظیمات",
          multiData: false,
          key: "",
          innerRoute: "/admin-panel/product-feature",
          edit: true,
          delete: true,
          editLabel: "ویرایش"
        }
      ],
      pageSize: 10,
      bigData: {
        persian: {},
        english: {},
        both: {}
      },
      title: "محصول",
      editedId: null,
      apiRoute: "Product"
    };
  },
 
  mounted() {
    if (this.$route.query.page) {
      this.currentPage = this.$route.query.page;
    } else {
      this.currentPage = 1;
    }
    this.loadSettings([{ route: "ProductCategory", field: "name" },{ route: "Brand", field: "title" }]);

    this.loadItems(this.currentPage);
  },
  watch: {
    item(newVal) {
      this.bigData = newVal;
    }
  },
  methods: {
    showModalFunction() {
      this.showModal = true;
      setTimeout(() => {
        document
          .getElementById("blogModal___BV_modal_content_")
          .removeAttribute("tabindex");
      });
    }
  }
};
</script>
<style></style>
