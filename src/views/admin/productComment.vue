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
      <s-table-comment
      :field="'productId'"
        :list="itemsWithChild(items)"
        :likeRoute="'ProductComment'"
        :ReplyByAdminRoute="'ProductComment/ReplyByAdmin'"
        @showEditModal="showEditModal"
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
  </div>
</template>
<script>
import SInputs from "@/components/admin/shared/sInputs.vue";
import STableComment from "@/components/admin/shared/sTableComment.vue";
import adminMixin from "@/libraries/adminController.js";
import { BModal, BButton, BOverlay, BSpinner } from "bootstrap-vue";
export default {
  mixins: [adminMixin],
  components: { SInputs, BModal, BButton, STableComment, BOverlay, BSpinner },
  data() {
    return {
      headers: [
        //           "blogId": 0,
        //   "replyTo": 0,
        //   "fullName": "string",
        //   "email": "string",
        //   "phone": "string",
        //   "text": "stringstringstringst",
        //   "isShow": true,
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "نام را وارد کنید",
          type: "string",
          multiData: false,
          name: "نام کامل",
          key: "fullName"
        },
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "نام را وارد کنید",
          type: "string",
          multiData: false,
          name: "ایمیل",
          key: "email"
        },
        
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "متن دیدگاه",
          type: "string",
          multiData: false,
          name: "متن دیدگاه",
          key: "text"
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
      bigData: {
        persian: {},
        english: {},
        both: {}
      },
      title: "دیدگاه ها",
      pageSize: 10,
      editedId: null,
      apiRoute: "ProductComment"
    };
  },
  mounted() {
    if (this.$route.query.page) {
      this.currentPage = this.$route.query.page;
    } else {
      this.currentPage = 1;
    }
    this.loadItems(this.currentPage);
  },
  watch: {
    item(newVal) {
      this.bigData = newVal;
    }
  },
  methods: {
    itemsWithChild(list) {
      let newList = [];
      list.forEach((element) => {
        element.replayId = element.id;
        newList.push(element);
        if (element.replyComments.length > 0) {
          element.replyComments.forEach((ele2) => {
            ele2.replayId = element.id;
            newList.push(ele2);
          });
        }
      });
      console.log(newList);
      return newList
    }
  }
};
</script>
<style></style>
