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
        customeFiledCallBack="userId"
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
      id="sendmodal"
      hide-footer
      ref="sendModal"
      no-close-on-backdrop
      v-model="sendModal"
      @close="resetSendModal()"
      title="ارسال پیام"
    >
      <div id="sendMessageContent">
        <label for="">پیام خود را وارد کنید</label>
        <textarea
          style="width: 320px; height: 280px"
          v-model="message"
        ></textarea>
        <input type="submit" value="ارسال" @click="sendMessage()" />
      </div>
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
      sendModal: false,
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
          placeholder: "",
          type: "setting",
          name: "ارسال پیام",
          multiData: false,
          key: "",
          edit: false,
          modal: true,
          buttonModalTitle: " پاسخ",
          delete: false,
          editLabel: "ویرایش",
        },

      ],
      pageSize: 10,
      bigData: {
        persian: {},
        english: {},
        both: {},
      },
      userId:null,
      title: "تامین کنندگان",
      editedId: null,
      apiRoute: "SupplierMessage",
      message:"",
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
  watch: {
    item(newVal) {
      this.bigData = newVal;
    },
  },
  methods: {
    callModalFromTable(userId) {
      this.sendModal=true;
      this.userId=userId;
      
     
    },
    sendMessage() {
      let pack = {
        userId: this.userId,
        message: this.message,
        forAdmin:false,
        isRead:false,
        replyTo:null,
      };
      this.$axios
        .post("SupplierMessage", JSON.stringify(pack), {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.resetSendModal();
          this.$toast.success(res.data.message);
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
    resetSendModal() {
      this.message = "";
      this.sendModal = false;
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
<style>

div#sendMessageContent textarea {
  padding: 15px;
}
div#sendMessageContent input[type="submit"] {
  background: green;
  color: white;
  padding: 10px 24px;
  border: chartreuse;
  border-radius: 4px;
}

div#sendMessageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  direction: rtl;
}</style>