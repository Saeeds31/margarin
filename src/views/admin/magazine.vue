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
                    v-model="items"
                    @showEditModal="showEditModal"
        :settings="settings"
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
          placeholder: "عنوان پست را وارد کنید",
          type: "string",
          multiData: true,
          name: "عنوان پست",
          key: "title",
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیح کوتاه پست را وارد کنید",
          type: "description",
          multiData: true,
          name: "توضیح کوتاه پست",
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
           {
              style: "col-6",
              show_in_table: false,
              placeholder: " زمان مطالعه پست را وارد کنید",
              type: "number",
              multiData: false,
              name: "زمان مطالعه پست",
              key: "timeToRead",
            },
        
        {
          style: "col-6",
          show_in_table: false,
          placeholder: " تاریخ خبر  را وارد کنید",
          type: "date",
          multiData: false,
          name: "تاریخ خبر",
          key: "createDate",
          disable:true
        },
       {
          style: "col-6",
          show_in_table: true,
          placeholder: "تصویر پست با ارتفاع 468 و عرض 529 پیکسل",
          type: "image",
          multiData: false,
          name: "تصویر پست",
          key: "image",
        },
        
       {
          style: "col-12",
          show_in_table: false,
          placeholder: "کلید واژه ها",
          type: "list",
          multiData: true,
          name: "کلید واژه ها",
          key: "keyWords",
        },
       {
          style: "col-12",
          show_in_table: false,
          placeholder: "توضیحات متا را وارد کنید",
          type: "description",
          multiData: true,
          name: "توضیحات متا ",
          key: "meta",
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
      title: "مجله آفتاب",
      editedId: null,
      apiRoute: "Magazine",
    };
  },
  mounted() {
    if(this.$route.query.page){
      this.currentPage=this.$route.query.page
    }else{

      this.currentPage=1;
    }
      this.getId();
      this.loadItems(this.currentPage);
  },
  watch:{
      item(newVal){
          this.bigData = newVal
      }
  },
  methods:{
      showModalFunction(){
         this.showModal=true;
    setTimeout(()=>{
      document.getElementById('blogModal___BV_modal_content_').removeAttribute('tabindex')

      })
  }
  }
};
</script>
<style></style>
