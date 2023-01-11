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
      <!-- <b-button variant="primary" @click="showModalFunction"
        >ارسال پیام
      </b-button> -->
    </div>
    <div v-if="items" class="mainTable">
      <table class="table table-hover">
        <tr class="trHeader">
          <th>پیام</th>
          <th>عنوان خبر</th>
          <th>زمان ارسال</th>
          <th>جزئیات گفتگو </th>
        </tr>
        <tr class="trDetail" v-for="item in items" :key="item.id">
          <td>
            {{ item.message }}
          </td>
          <td>{{item.newsTitle}}</td>
          <td>
            {{ item.createDate }}
          </td>
          <td>
            <b-button variant="primary" @click="showDetail(item)">مشاهده</b-button>
             </td>
        </tr>
      </table>
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
    <div id="messageContent">
      <div id="messages">
        <p v-for="(message,index) in messages" :key="index" :class="{'supplierMessage':message.forAdmin==true}">
          {{message.message}}
        </p>
      </div>
      <div id="sendMessageBox">

        <b-form-group label="پیام" class="headerStyle">
          <b-form-textarea v-model="message" placeholder="پیام را وارد کنید">
          </b-form-textarea>
        </b-form-group>
        <b-button variant="primary" @click="sendMessage()"> ارسال پیام </b-button>
      </div>

    </div>
    </b-modal>
  </div>
</template>
<script>
import pagination from "@/components/front/shared/pagination.vue";
import SInputs from "@/components/admin/shared/sInputs.vue";
import STable from "@/components/admin/shared/sTable.vue";
import adminMixin from "@/libraries/adminController.js";
import {
  BModal,
  BButton,
  BOverlay,
  BSpinner,
  BFormTextarea,
  BFormGroup,
} from "bootstrap-vue";
export default {
  mixins: [adminMixin],
  components: {
    SInputs,
    BModal,
    BButton,
    STable,
    BOverlay,
    BSpinner,
    BFormTextarea,
    BFormGroup,
    pagination,
  },
  data() {
    return {
      showModal: false,
      selectedItem:"",
      messages:"",
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

          show_in_Form: false,
          multiData: false,
          name: "زمان ارسال",
          key: "createDate",
        },
        {
          style: "col-12",
          show_in_table: true,
          show_in_Form: false,
          type: "boolean",
          multiData: false,
          name: " ارسالی توسط کاربر",
          key: "forAdmin",
        },
      ],
      pageSize: 10,
      bigData: {
        persian: {},
        english: {},
        both: {},
      },
      message: "",
      userId: null,

      title: " پیام ها",
      editedId: null,
      apiRoute: "SupplierMessage/GetUserInbox",
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
    sendMessage() {
      let pack = {
        userId: this.userId,
        message: this.message,
        newsId:this.selectedItem.newsId,
        isRead: false,
        forAdmin: true,
        replyTo: null,
      };
      this.$axios
        .post(`SupplierMessage`, pack)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.message = "";
          this.showModal = false;
          this.loadItems();
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
    showDetail(item) {
      this.selectedItem=item;
      this.$toast.warning("درحال دریافت اطلاعات...")
      this.$axios.get(`SupplierMessage/GetUserMessage?newsId=${item.newsId}`).then(res=>{
        this.messages=res.data.data;
        this.showModal = true;
        setTimeout(() => {
          document
            .getElementById("blogModal___BV_modal_content_")
            .removeAttribute("tabindex");
        });
      }).catch(err=>{
        this.$toast.error(err.response.data.message)
      })
    },
  },
};
</script>
<style>
.headerStyle {
  direction: rtl;
  text-align: right;
}
div#messages p.supplierMessage {
  align-self: end;
  background: #0088cc;
}
div#messages {
  display: flex;
  flex-direction: column-reverse;
}
div#messages p {
  background: yellowgreen;
  width: 350px;
  color: white;
  align-self: start;
  text-align: right;
  padding: 8px;
  border-radius: 8px;
  direction: rtl;
  font-size: 16px;
  white-space: pre-wrap;
}
</style>
