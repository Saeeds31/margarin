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

    <div v-if="items != null && items.length > 0" class="mainTable">
      <article v-for="item in items" :key="item">
        <div class="dateNews">
          <span class="newsDate">{{
                new Date(item.createDate).toLocaleDateString("fa")
              }}</span>
          <img
            :src="`https://test.mmc.ir/${item.image}`"
            :alt="item.title_fa"
          />
          <div class="dateNewsContent">
            

              <span>{{ item.title_fa }}</span>
              <p>
            {{item.shortDescription_fa}}
          </p>
           
          <div class="descBtn">
            <b-button
                class="setReq"
                variant="success"
                @click="showReqModal(item)"
                >ارسال درخواست</b-button
              >
            <b-button
                class="setReq"
                variant="primary"
                @click="showNews(item)"
                >مشاهده خبر </b-button
              >
          </div>
          </div>
        </div>
      </article>
    </div>

    <b-modal
      id="categoryModal"
      hide-footer
      ref="categoryModal"
      no-close-on-backdrop
      v-model="showNewsModal"
      @close="resetModal()"
      :title="`مشاهده خبر${selectedItem?selectedItem.title_fa:''}`"
    >
    <div v-if="selectedItem" id="contentNewsModal">
      <img class="mainImage" :src="`https://test.mmc.ir/${selectedItem.image}`" alt="">
      <div class="vhtmlContent">
        <div v-html="selectedItem.shortDescription_fa" />
      </div>
      <b-button
                class="setReq"
                variant="success"
                @click="showReqModal(selectedItem)"
                >ارسال درخواست</b-button
              >
    </div> 
  </b-modal>
    <b-modal
      id="categoryModal"
      hide-footer
      ref="categoryModal"
      no-close-on-backdrop
      v-model="showModal"
      @close="resetModal()"
      title="بارگذاری مدارک"
    >
      <div id="reqContent">
        <div>
          <label class="label" for=""> فایل مدارک:<span>*</span></label>
          <b-form-file
            accept=".zip"
            v-model="resumeFileFile"
            class="supplierInput"
            :state="Boolean(resumeFileFile)"
          ></b-form-file>
        </div>
        <b-button variant="success" @click="setReq()">ارسال درخواست</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
// import the styles
import adminMixin from "@/libraries/adminController.js";
import { BModal, BButton, BOverlay, BSpinner, BFormFile } from "bootstrap-vue";
export default {
  mixins: [adminMixin],
  components: {
    BModal,
    BFormFile,
    BButton,
    BOverlay,
    BSpinner,
  },
  data() {
    return {
      resumeFileFile: null,
      items: null,
      showModal: false,
      showNewsModal: false,
      selectedItem: null,
    };
  },
  methods: {
    showNews(item){
      this.showNewsModal= true;
      this.selectedItem=item;

    },
    async setReq() {
      if (!this.resumeFileFile) {
        return this.$toast.error("لطفا مدارک را بارگذاری کنید");
      } else {
        let pack = {
          supplierNewsId: this.selectedItem.id,
        };
        pack.documentFile = await this.uploadFile();
        this.$axios
          .post("supplier/SetRequest")
          .then((res) => {
            this.$toast.success(res.data.message);
            this.resumeFileFile = null;
            this.showModal = false;
          })
          .catch((err) => {
            this.$toast.error(err.response.data.message);
          });
      }
    },
    showReqModal(item) {
      if(this.showNewsModal){
        this.showNewsModal=false;
      }
      this.showModal = true;
      this.selectedItem = item;
    },
    async uploadFile() {
      let url = "";
      let formData = new FormData();
      formData.append("files", this.resumeFileFile);
      var config = {
        onUploadProgress: () => {
          if (this.innerDisabled == false) {
            this.$toast.info("درحال آپلود روزمه");
          }
          this.innerDisabled = true;
        },
      };
      await this.$axios
        .post(`Files/UploadFile?SavePath=supplier`, formData, config)
        .then((response) => {
          url = response.data.data;
        })
        .catch(() => {
          this.$toast.error(
            "خطایی در آپلود فایل به وجود آمده است , لطفا صفحه را بروز رسانی کنید"
          );
        });
      return url;
    },
  },
  mounted() {
    this.$axios
      .get("Supplier/GetRelatedNews")
      .then((res) => {
        this.items = res.data.data;
      })
      .catch((err) => {
        this.$toast.error(err.response.data.message);
      });
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
.mainTable article .dateNews p span {
  margin: 5px;
}
.mainTable article .dateNews p {
  direction: rtl;
}
.mainTable article .dateNews img {
  width: 150px;
}
.mainTable article .dateNews {
  display: flex;
  gap: 10px;
  flex-direction: row-reverse;
  align-items: flex-start;
}
.mainTable article {
  position: relative;
  width: 90%;
  margin: auto;
  box-shadow: 0 0 5px #1213;
  padding: 15px;
}
.mainTable {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.descNews .title {
  direction: rtl;
}
.descNews {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
span.newsDate {
    position: absolute;
    left: 0;
    top: 0;
    padding: 5px;
    background: #d5d5d5;
    box-shadow: 0 0 5px #1213;
}

.dateNewsContent {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    width: 100%;

}
.dateNewsContent .descBtn {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
div#reqContent .label{
  display: flex;
}
div#reqContent {
    display: flex;
    flex-direction: column;
    direction: rtl;
    gap: 20px;
}
div#contentNewsModal {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    gap: 20px;
}
div#contentNewsModal .mainImage {
    width: 450px;
}
</style>
