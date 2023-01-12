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
    <router-link
      to="/admin-panel/supplier/profile"
      id="notSuccessMessage"
      v-if="isSuccess == false"
    >
      حساب کاربری شما تایید نشده است لطفا با پشتیبانی تماس بگیرید
    </router-link>
    <a id="notSuccessMessage" v-else-if="isSuccess == 'falsefalse'">
      درحال دریافت اطلاعات شما
    </a>
    <div id="selectOption">
      <h4>
        فیلتر سازی بر اساس :
      </h4>
      <div>
        <label for="isAuctionTrue">حراج</label>
        <input type="checkbox" v-model="isAuctionTrue" id="isAuctionTrue" />
      </div>
      <div>
        <label for="isAuctionFalse">مناقصه</label>
        <input type="checkbox" v-model="isAuctionFalse" id="isAuctionFalse" />
      </div>
    </div>
    <div v-if="items != null && items.length > 0" class="container">
      <template v-if="items&&items.length">
        <div class="SecendCardStyle" v-for="item in items" :key="item">
        <a class="card_link">
          <div class="contenCard" data-aos="fade-in">
            <img
              class="cardImg"
              :src="`https://test.mmc.ir/${item.image}`"
              :alt="item.title_fa"
            />
            <div class="cardbox">
              <div class="topCardBox">
                <p style="opacity: 0.5; text-align: left; font-size: 12px">
                  {{
                    item.code +
                    " - " +
                    new Date(item.createDate).toLocaleDateString("fa")
                  }}
                </p>
                <p>{{ item.title_fa }}</p>
                <!-- <img class="logo" :src="item.logo" :alt="item.title_fa" /> -->
              </div>

              <div class="cardText">
                <p>{{ item.short_description }}</p>
              </div>
              <div class="links">
                <b-button variant="info" @click="showNews(item)"
                  >مشاهده خبر</b-button
                >
                <b-button variant="primary" @click="showReqModal(item)"
                  >ارسال درخواست</b-button
                >
                <b-button
                  variant="warning"
                  @click="showModalMessageModalFunction(item)"
                  >ارسال پیام</b-button
                >
              </div>
            </div>
          </div>
        </a>
      </div>
      </template>
      <p v-else>موردی یافت نشد</p>
    </div>

    <!-- <div v-if="items != null && items.length > 0" class="mainTable">
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
    </div> -->

    <b-modal
      id="categoryModal"
      hide-footer
      ref="categoryModal"
      no-close-on-backdrop
      v-model="showNewsModal"
      @close="resetModal()"
      :title="`مشاهده خبر -${selectedItem ? selectedItem.code : ''}`"
    >
      <div v-if="selectedItem" id="contentNewsModal">
        <div class="headerNews">
          <span>
            <span class="title">{{ `  عنوان:` }}</span>
            <span>{{ selectedItem.title_fa }}</span>
          </span>
          <span>
            <span class="title">{{ `تاریخ درج خبر:` }}</span>
            <span>{{
              new Date(selectedItem.createDate).toLocaleDateString("fa")
            }}</span>
          </span>
          <span>
            <span class="title">{{ `مهلت ارسال درخواست تا:` }}</span>
            <span>{{
              new Date(selectedItem.expireDate).toLocaleDateString("fa")
            }}</span>
          </span>
        </div>
        <img
          class="mainImage"
          :src="`https://test.mmc.ir/${selectedItem.image}`"
          alt=""
        />
        <div class="vhtmlContent">
          <div v-html="selectedItem.description_fa" />
        </div>
        <div class="d-flex justify-content-between">
          <b-button
            class="setReq"
            variant="success"
            @click="showReqModal(selectedItem)"
            >ارسال درخواست</b-button
          >
          <a
            class="btn btn-primary ml-1"
            v-if="selectedItem.requirementFile"
            :href="`https://test.mmc.ir/${selectedItem.requirementFile}`"
            target="_blank"
          >
            دریافت مدارک مورد نیاز
          </a>
        </div>
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
            accept=".zip,.docx,.pdf"
            v-model="resumeFileFile"
            class="supplierInput"
            :state="Boolean(resumeFileFile)"
          ></b-form-file>
        </div>
        <b-button variant="success" @click="setReq()">ارسال درخواست</b-button>
      </div>
    </b-modal>
    <b-modal
      id="blogModal"
      hide-footer
      ref="blogModal"
      no-close-on-backdrop
      v-model="showModalMessageModal"
      @close="resetModal()"
      title="ارسال پیام"
    >
      <b-form-group label="پیام" class="headerStyle">
        <b-form-textarea v-model="message" placeholder="پیام را وارد کنید">
        </b-form-textarea>
      </b-form-group>
      <b-button variant="primary" @click="sendMessage()"> ارسال پیام </b-button>
    </b-modal>
  </div>
</template>
<script>
// import the styles
import adminMixin from "@/libraries/adminController.js";
import {
  BModal,
  BButton,
  BOverlay,
  BSpinner,
  BFormFile,
  BFormGroup,
  BFormTextarea,
} from "bootstrap-vue";
export default {
  mixins: [adminMixin],
  components: {
    BModal,
    BFormFile,
    BButton,
    BFormGroup,
    BFormTextarea,
    BOverlay,
    BSpinner,
  },
  data() {
    return {
      resumeFileFile: null,
      items: null,
      showModalMessageModal: false,
      showModal: false,
      isSuccess: "falsefalse",
      message: "",
      newsId: null,
      showNewsModal: false,
      selectedItem: null,
      userId: "",
      isAuctionFalse: false,
      isAuctionTrue: false,
    };
  },
  methods: {
    handlerRequest() {
      // isAuctionFalseisAuctionTrue
      this.isSuccess = "falsefalse";
      if ((this.isAuctionTrue == true && this.isAuctionFalse == true)||(this.isAuctionTrue == false && this.isAuctionFalse == false)) {
        this.$axios
          .get("Supplier/GetRelatedNews")
          .then((res) => {
            this.isSuccess = true;
            this.items = res.data.data;
          })
          .catch((err) => {
            this.isSuccess = false;
            this.$toast.error(err.response.data.message);
          });
      }else{
        this.$axios
          .get(`SuppliersNews/GetByAuctionFilter?isAuction=${this.isAuctionTrue==true?true:false}`)
          .then((res) => {
            this.isSuccess = true;
            this.items = res.data.data;
          })
          .catch((err) => {
            this.isSuccess = false;
            this.$toast.error(err.response.data.message);
          });
      }
    },
    sendMessage(item) {
      let pack = {
        userId: this.userId,
        message: this.message,
        newsId: this.newsId,
        isRead: false,
        forAdmin: true,
        replyTo: null,
      };
      this.$axios
        .post(`SupplierMessage`, pack)
        .then((res) => {
          this.$toast.success("پیام شما با موفقیت ارسال شد");
          this.message = "";
          this.showModalMessageModal = false;
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
    showModalMessageModalFunction(item) {
      this.newsId = item.id;
      this.showModalMessageModal = true;
      setTimeout(() => {
        document
          .getElementById("blogModal___BV_modal_content_")
          .removeAttribute("tabindex");
      });
    },
    showNews(item) {
      this.showNewsModal = true;
      this.selectedItem = item;
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
          .post("supplier/SetRequest", JSON.stringify(pack), {
            headers: {
              "Content-Type": "application/json",
            },
          })
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
      if (this.showNewsModal) {
        this.showNewsModal = false;
      }
      this.showModal = true;
      this.selectedItem = item;
    },
    async uploadFile() {
      let url = "";
      let formData = new FormData();
      formData.append("file", this.resumeFileFile);
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
    this.getId();

    this.$axios
      .get("Supplier/GetRelatedNews")
      .then((res) => {
        this.isSuccess = true;
        this.items = res.data.data;
      })
      .catch((err) => {
        this.isSuccess = false;
        this.$toast.error(err.response.data.message);
      });
  },
  watch: {
    isAuctionTrue() {
      this.handlerRequest();
    },
    isAuctionFalse() {
      this.handlerRequest();
    },
  },
};
</script>
<style scoped>
.mainContentAdmin {
  margin: auto;
}
</style>
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
div#reqContent .label {
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px auto 80px;
}

.card {
  width: 300px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}
.card:hover .card__caption {
  top: 50%;
  transform: translateY(-50%);
}
.card:hover .card__image {
  transform: translateY(-10px);
}
.card:hover .card__thumb::after {
  top: 0;
}
.card:hover .card__snippet {
  margin: 20px 0;
}

.card:hover .fshow {
  display: none;
}

#notSuccessMessage {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffffffe3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__thumb {
  position: relative;
  max-height: 400px;
  overflow: hidden;
}
@media (min-width: 1024px) {
  .card__thumb {
    max-height: 500px;
  }
}
.card__thumb::after {
  position: absolute;
  top: 0;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: 0.3s;
}
@media (min-width: 1024px) {
  .card__thumb::after {
    top: calc(100% - 140px);
  }
}
.card__image {
  transition: 0.5s ease-in-out;
  width: 100%;
}
.card__caption {
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 0 20px;
  color: white;
  transform: translateY(-50%);
  text-align: center;
  transition: 0.3s;
}
@media (min-width: 1024px) {
  .card__caption {
    top: calc(100% - 110px);
    transform: unset;
  }
}
.card__title {
  display: -webkit-box;
  max-height: 85px;
  overflow: hidden;
  font-family: "Playfair Display", serif;
  font-size: 23px;
  line-height: 28px;
  text-shadow: 0px 1px 5px black;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.card__snippet {
  display: -webkit-box;
  max-height: 150px;
  margin: 20px 0;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  transition: 0.5s ease-in-out;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
@media (min-width: 1024px) {
  .card__snippet {
    margin: 60px 0;
  }
}
.card__button {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  border: 1px solid white;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  background: rgb(6 14 104);
  cursor: pointer;
}
.card__button:hover {
  color: white;
  background-color: black;
}

.disclaimer {
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px;
  background-color: white;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-align: center;
}
.disclaimer__link {
  color: #755d87;
  text-decoration: none;
}
.vhtmlContent {
  direction: rtl;
  text-align: right;
}
.SecendCardStyle {
  display: grid;
  grid-template-columns: 1fr;
  background-color: #fff;
  border-radius: 10px;
  margin: 1rem 0;
  border: 1px solid #80808075;
  width: 100%;
}

.contenCard {
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
}

.cardbox {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
}

.topCardBox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topCardBox img {
  width: 100px;
}
.topCardBox p {
  font-weight: bold;
  color: black;
  width: 100%;
  direction: rtl;
  text-align: right;
}
.links {
  display: flex;
  gap: 8px;
}
.cardImg {
  width: 150px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  object-fit: cover;
  height: 150px;
}

.cardText {
  margin: 1rem 0;
  text-align: justify;
}

.cardText p {
  font-size: 14px;
  color: black;
}

.location {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  color: #0d6fed;
}

.locationicon {
  margin: 0;
}

.locationicon path {
  fill: #0d6fed;
}

.cardPhoneNumber {
  display: flex;
  justify-content: flex-end;
}
.cardPhoneNumber span {
  display: flex;
  align-items: center;
}

.headerNews {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  gap: 10px;
  border-bottom: 1px solid #1213;
  padding-bottom: 10px;
}

.headerNews .title {
  opacity: 0.8;
  direction: rtl;
}
.headerStyle {
  direction: rtl;
  text-align: right;
}
div#selectOption h4 {
  direction: rtl;
}
div#selectOption div * {
  margin: 0;
}
div#selectOption div {
  display: flex;
  gap: 8px;
}
div#selectOption {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  align-items: center;
  gap: 16px;
}
</style>
