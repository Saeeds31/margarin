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
    <div v-if="items != null && items.length > 0" class="mainTable">
      <s-table
        v-model="items"
        @showEditModal="showEditModal"
        @callModalFromTable="callModalFromTable"
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
        :settings="settings"
        @submit="submit"
        :mode="mode"
        :folderRoute="'testAboutUs'"
        :bigData="bigData"
        :headers="headers"
      />
    </b-modal>

    <b-modal
      id="addRoleToUser"
      hide-footer
      ref="addRoleToUser"
      v-model="showAddRoleToUserModal"
      @hidden="resetModalRoleModal"
      title="افزودن نقش جدید به کاربر"
    >
      <div id="userRole">
        <treeselect
          v-if="roles.length > 0"
          :multiple="true"
          :clearable="false"
          :searchable="true"
          v-model="userRoles"
          :options="roles"
        />
        <b-button variant="primary" @click="changeUserRole()"
          >اعمال تغییرات</b-button
        >
      </div>
    </b-modal>
  </div>
</template>
<script>
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
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
    Treeselect,
  },
  data() {
    return {
      roles: [],
      userRoles: null,
      selectedUser: null,
      showAddRoleToUserModal: false,
      headers: [
        {
          style: "col-6",
          show_in_table: true,
          placeholder: "نام را وارد کنید",
          type: "string",
          multiData: false,
          name: "نام",
          key: "name",
        },

        {
          style: "col-6",
          show_in_table: true,
          placeholder: "نام خانوادگی را وارد کنید",
          type: "string",
          multiData: false,
          name: "نام خانوادگی",
          key: "lastName",
        },

        {
          style: "col-6",
          show_in_table: true,
          placeholder: "نام کاربری برای ورود",
          type: "string",
          multiData: false,
          name: "نام کاربری",
          key: "userName",
        },

        {
          style: "col-6",
          show_in_table: false,
          placeholder: "رمز عبور را وارد کنید",
          type: "string",
          multiData: false,
          name: "رمز عبور",
          key: "password",
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "ایمیل کاربر را وارد کنید",
          type: "string",
          multiData: false,
          name: "ایمیل کاربر",
          key: "email",
        },

        {
          style: "col-6",
          show_in_table: false,
          placeholder: "تصویر کاربر برای پروفایل",
          type: "image",
          multiData: false,
          name: "تصویر کاربر",
          key: "image",
        },
        {
          style: "col-6",
          show_in_table: false,
          placeholder: "جنسیت کاربر",
          type: "select",
          multiData: false,
          name: "جنسیت",
          key: "gender",
          multiple: false,
          selectIN: "genderOption",
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
          editLabel: "ویرایش",
          modal: true,
          buttonModalTitle: "افزودن نقش",
        },
      ],
      pageSize: 10,
      bigData: {
        persian: {},
        english: {},
        both: {},
      },
      title: "کاربران",
      editedId: null,
      apiRoute: "Users",
    };
  },
  mounted() {
    this.getRoles();
    if (this.$route.query.page) {
      this.currentPage = this.$route.query.page;
    } else {
      this.currentPage = 1;
    }
    this.settings["genderOption"] = [
      { id: "Male", label: "مرد" },
      { id: "Female", label: "زن" },
    ];

    this.loadItems(this.currentPage);
  },
  methods: {

    changeUserRole() {
      let finalString=[];
      if(this.userRoles!=null){
        this.userRoles.forEach((item)=>{
          finalString.push(item)
        })
      }
        console.log(finalString);

      this.$axios.post(`Users/AssignRole?Id=${this.selectedUser}`,`${JSON.stringify(finalString)}`,{headers:{'Content-Type': 'application/json'}}).then(response=>{
              this.$toast.success(response.data.message);
              this.showAddRoleToUserModal=false;
      })
      
    },
    getRoles() {
      this.$axios.get("Users/GetSystemRoles").then((resp) => {
        let res = resp.data.data;
        res.forEach((item) => {
          item.label = item.name;
          item.id=item.name
        });
        this.roles = res;
      });
    },
    resetModalRoleModal() {
      this.userRoles=null;
      this.selectedUser=null;

    },
     callModalFromTable(userId) {
      this.selectedUser = userId;
       this.$axios.post(`Users/GetUserRoles?Id=${this.selectedUser}`).then(res=>{
        this.userRoles=res.data.data
        this.showAddRoleToUserModal = true;
      })
    },
  },
  watch: {
    item(newVal) {
      this.bigData = newVal;
    },
  },
};
</script>
<style>
div#userRole {
    width: 90%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin: auto;
}
</style>
