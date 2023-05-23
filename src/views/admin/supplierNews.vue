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
    <div class="filters d-flex align-items-center " style="gap:12px" >
      <b-button variant="primary" @click="showModalFunction">افزودن </b-button>
      <b-button variant="warning" @click="getReport()">گزارش </b-button>
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
      v-if="newsCode"
        :disabled="disabled"
        @submit="submit"
        :mode="mode"
        :folderRoute="'weblogs'"
        :bigData="bigData"
        :settings="settings"
        :headers="
          headers.filter((item) => {
            return item.show_in_Form != false;
          })
        "
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
          style: "col-6",
          show_in_table: true,
          placeholder: "کد خبر را وارد کنید",
          type: "string",
          multiData: false,
          name: "کد خبر",
          key: "code",
          disable:true
        },
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "اولویت خبر را وارد کنید",
          type: "select",
          multiData: false,
          key: "code",
          multiple: false,
          name: "اولویت بندی خبر",
          key: "priority",
          selectIN: "priorityList",
         
        },
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "عنوان خبر را وارد کنید",
          type: "string",
          multiData: true,
          name: "عنوان خبر",
          key: "title",
        },

        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیح کوتاه خبر را وارد کنید",
          type: "description",
          multiData: true,
          name: "توضیح کوتاه خبر",
          key: "shortDescription",
        },

        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات کامل",
          type: "ckEditor",
          multiData: true,
          name: "توضیحات کامل",
          key: "description",
        },
        //  {
        //     style: "col-6",
        //     show_in_table: false,
        //     placeholder: " زمان مطالعه خبر را وارد کنید",
        //     type: "number",
        //     multiData: false,
        //     name: "زمان مطالعه خبر",
        //     key: "timeToRead",
        //   },

        {
          style: "col-6",
          show_in_table: false,
          placeholder: "فایل موارد مورد نیاز",
          type: "file",
          multiData: false,
          name: " اطلاعات فایل مورد نیاز",
          key: "requirementFile",
        },

        {
          style: "col-6",
          show_in_table: false,
          placeholder: " دسته بندی خبر  را وارد کنید",
          type: "select",
          multiData: false,
          multiple: true,
          name: "دسته بندی خبر",
          key: "categorieIds",
          selectIN: "allCategories",
        },

        {
          style: "col-6",
          show_in_table: false,
          placeholder: " تاریخ انقضاء  را وارد کنید",
          type: "date",
          multiData: false,
          name: "تاریخ انقضاء",
          key: "expireDate",
          disable: true,
        },
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "تصویر خبر با ارتفاع 468 و عرض 529 پیکسل",
          type: "image",
          multiData: false,
          name: "تصویر خبر",
          key: "image",
        },
        {
          style: "col-6",
          show_in_table: true,
          show_in_Form: false,
          type: "string",
          name: "تعداد درخواست ها",
          key: "requestCount",
        },

        {
          style: "col-6",
          show_in_table: true,
          show_in_Form: false,
          type: "date",
          name: "تاریخ خبر ",
          key: "createDate",
        },
        {
          style: "col-6",
          show_in_table: false,
          name: "آگهی به صورت پیش فرض برای مناقصه ثبت میشود",
          type: "boolean",
          multiData: false,
          placeholder: "مزایده است؟",
          disable: true,
          key: "isAuction",
        },

        //  {
        //     style: "col-12",
        //     show_in_table: false,
        //     placeholder: "کلید واژه ها",
        //     type: "list",
        //     multiData: true,
        //     name: "کلید واژه ها",
        //     key: "keyWords",
        //   },
        //  {
        //     style: "col-12",
        //     show_in_table: false,
        //     placeholder: "توضیحات متا را وارد کنید",
        //     type: "description",
        //     multiData: true,
        //     name: "توضیحات متا ",
        //     key: "meta",
        //   },

        {
          style: "col-12",
          show_in_table: true,
          placeholder: "",
          type: "setting",
          name: "تنظیمات",
          multiData: false,
          key: "",
          edit: true,
          modal: true,
          buttonModalTitle: "درخواست ها",
          delete: true,
          editLabel: "ویرایش",
        },
      ],
      pageSize: 10,
      newsCode:null,
      bigData: {
        persian: {},
        english: {},
        both: {},
      },
      title: "تامین کنندگان",
      editedId: null,
      apiRoute: "SuppliersNews",
    };
  },
  mounted() {
    if (this.$route.query.page) {
      this.currentPage = this.$route.query.page;
    } else {
      this.currentPage = 1;
    }
    this.getId();
    this.loadItems(this.currentPage);
    this.settings["priorityList"] = [
      { id: 1, label: "بالا" },
      { id: 2, label: "معمولی" },
      { id: 3, label: "پایین" },
    ];

    this.settings["allCategories"] = [];
    this.$axios.get("/SuppliersCategory").then((res) => {
      res.data.data.forEach((cate) => {
        cate.label = cate.name;
      });
      this.settings["allCategories"] = res.data.data;
    });
  },
  watch: {
    item(newVal) {
      this.bigData = newVal;
    },
  },
  methods: {
    getReport() {
      this.$axios.get("SuppliersNews/GetSupplierNewsReports",{
          headers: {
            "Content-Disposition": "attachment; filename=XYZ.xlsx",
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
          responseType: "arraybuffer",
        }).then((response) => {
          const temp = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = temp;
          link.setAttribute("download", "file.xlsx"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
    },
    callModalFromTable(newsId) {
      //
      this.$router.push(`/admin-panel/supplier-requests?newsId=${newsId}`);
    },
    showModalFunction() {
      this.showModal = true;
      this.newsCode=null;
      this.$axios.get('SuppliersNews/GetLastNewsCode').then(
        (res)=>{

          this.bigData.both.code=res.data.data;
          this.newsCode=res.data.data
        }
      )
      setTimeout(() => {
        document
          .getElementById("blogModal___BV_modal_content_")
          .removeAttribute("tabindex");
      });
    },
  },
};
</script>
