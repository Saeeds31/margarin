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

    <div class="mainTable">
      <router-link to="/login" id="notSuccessMessage" v-if="!isSuccess">
        اطلاعات شما مورد تایید نیست لطفا با پشتیبانی تماس بگیرید
      </router-link>
      <div id="supplierInfo">
        <div v-if="user" id="supplierContent">
          <img :src="user.image" :alt="user.title" />
          <div class="infoGroup">
            <div>
              <span>نام کامل :</span>
              <p>
                {{
                  `${user.gender == "male" ? "آقای" : "خانم"} ${user.name} ${
                    user.lastName
                  }`
                }}
              </p>
            </div>
            <div>
              <span>کدملی :</span>
              <p>
                {{ user.shenaseMelli }}
              </p>
            </div>
          </div>
          <div class="infoGroup">
            <div>
              <span>آدرس :</span>
              <p>
                {{
                  `استان ${user.province}- شهر ${user.city} - ${user.address}- کدپستی ${user.postalCode}`
                }}
              </p>
            </div>
            <div>
              <span>ایمیل :</span>
              <p>
                {{ user.email }}
              </p>
            </div>
          </div>
          <div class="infoGroup">
            <div>
              <span>شماره تماس :</span>
              <p>
                {{ user.phoneNumber }}
              </p>
            </div>
            <div>
              <span>شماره ثابت :</span>
              <p>
                {{ user.phone }}
              </p>
            </div>
          </div>
          <div class="infoGroup">
            <div>
              <span>کد سامانه تجارت :</span>
              <p>
                {{ user.samaneTejaratCode }}
              </p>
            </div>
            <div>
              <span> نام نماینده : </span>
              <p>
                {{ user.namayendeName }}
              </p>
            </div>
          </div>
          <div class="infoGroup">
            <div>
              <span> حقیقی یا حقوقی : </span>
              <p>
                {{ user.isCompany ? "حقوقی" : "حقیقی" }}
              </p>
            </div>
            <div>
              <span> نام حقوقی : </span>
              <p>
                {{ user.companyName }}
              </p>
            </div>
          </div>
          <div class="infoGroup">
            <div>
              <span> شماره ثابت : </span>
              <p>
                {{ user.phone }}
              </p>
            </div>
            <div>
              <span> شماره ملی : </span>
              <p>
                {{ user.shenaseMelli }}
              </p>
            </div>
          </div>

          <div class="infoGroup">
            <div>
              <span> زمینه فعالیت : </span>
              <p>
                {{ user.acitivityField }}
              </p>
            </div>
            <div>
              <span> شرح زمینه فعالیت : </span>
              <p>
                {{ user.descriptionField }}
              </p>
            </div>
          </div>
          <div class="infoGroup">
            <div>
              <span> کد سامانه تجارت الکترونیک : </span>
              <p>
                {{ user.samaneTejaratCode }}
              </p>
            </div>
            <div>
              <span> نام نماینده : </span>
              <p>
                {{ user.namayendeName }}
              </p>
            </div>
          </div>

          <div class="infoGroup">
            <div>
              <span> نام معرف : </span>
              <p>
                {{ user.relatedName }}
              </p>
            </div>
            <div>
              <template v-if="user.isCompany">
                <span> کد اقتصادی : </span>
                <p>
                  {{ user.codeEqtesadi }}
                </p>
              </template>
            </div>
          </div>

          <div id="buttons">
            <b-button variant="primary" @click="editUser(user)"
            >ویرایش اطلاعات</b-button
          >
          <a variant="success" :href="`https://www.test.mmc.ir/${user.resumeFile}`" v-if="user.resumeFile.toString().includes('supplier')"
            >مشاهده رزومه ارسالی</a
          >
          </div>
        
        </div>
      </div>
    </div>
    <b-modal
      id="categoryModal"
      hide-footer
      ref="categoryModal"
      no-close-on-backdrop
      v-model="showModal"
      @close="resetModal()"
      title="ویرایش"
    >
      <div id="register" class="width80">
        <div class="supplierInputGroup">
          <div>
            <label for="">نام : <span>*</span></label>
            <input type="text" v-model="name" class="supplierInputs" />
          </div>

          <div>
            <label for="">نام خانوادگی :<span>*</span></label>
            <input type="text" class="supplierInputs" v-model="lastName" />
          </div>
        </div>

        <div class="supplierInputGroup">
          <div>
            <label for="">ایمیل :<span>*</span></label>
            <input
              type="email"
              placeholder="نام کاربری شما خواهد بود"
              v-model="email"
              class="supplierInput"
              id=""
            />
          </div>
          <div>
            <label for="">شناسه ملی :<span>*</span></label>
            <input
              type="number"
              v-model="shenaseMelli"
              class="supplierInput"
              id=""
            />
          </div>
        </div>

        <div class="supplierInputGroup">
          <div>
            <label for=""> نام واحد صنفی :<span>*</span></label>
            <input
              type="text"
              v-model="companyName"
              class="supplierInput"
              id=""
            />
          </div>

          <div>
            <label for=""> کد سامانه تجارت الکترونیک :<span>*</span></label>
            <input
              type="tel"
              v-model="samaneTejaratCode"
              name=""
              class="supplierInput"
              id=""
            />
          </div>
        </div>
        <div class="supplierInputGroup">
          <div>
            <label for=""> زمینه فعالیت:<span>*</span></label>
            <input
              type="tel"
              v-model="acitivityField"
              name=""
              class="supplierInput"
              id=""
            />
          </div>
          <div>
            <label for=""> شرح زمینه فعالیت :<span>*</span></label>
            <input
              type="text"
              v-model="descriptionField"
              class="supplierInput"
              id=""
            />
          </div>
        </div>
        <div class="supplierInputGroup">
          <div>
            <label for=""> نام نماینده :<span>*</span></label>
            <input
              type="text"
              v-model="namayendeName"
              class="supplierInput"
              id=""
            />
          </div>
          <div>
            <label for=""> نام معرف :<span>*</span></label>
            <input
              type="text"
              v-model="relatedName"
              class="supplierInput"
              id=""
            />
          </div>
        </div>
        <div class="supplierInputGroup">
          <div>
            <label for="">شماره تماس :<span>*</span></label>
            <input
              type="tel"
              v-model="phoneNumber"
              name=""
              class="supplierInput"
              id=""
            />
          </div>

          <div>
            <label for=""> شماره ثابت :<span>*</span></label>
            <input type="number" v-model="phone" class="supplierInput" id="" />
          </div>
        </div>

        <div class="supplierInputGroup">
          <div>
            <label for="">کدپستی :</label>
            <input v-model="postalCode" type="text" class="supplierInputs" />
          </div>
          <div>
            <label for=""> جنسیت :<span>*</span></label>
            <select v-model="gender">
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </div>
        </div>

        <div class="supplierInputGroup">
          <div>
            <label for="">استان :<span>*</span></label>
            <select name="" id="" v-model="province">
              <option
                :value="prov.id"
                v-for="prov in provinceAndCity"
                :key="prov.id"
              >
                {{ prov.label }}
              </option>
            </select>
          </div>

          <div>
            <label for="">شهر :<span>*</span></label>

            <select name="" id="" v-model="city">
              <option value="null" v-if="province == null">
                لطفا یک استان را انتخاب کنید
              </option>
              <option :value="cy" v-for="cy in cities" v-else :key="cy">
                {{ cy }}
              </option>
            </select>
          </div>
        </div>
        <div id="addressBox">
          <label for="">آدرس کامل :<span>*</span></label>
          <textarea
            v-model="address"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div class="supplierInputGroup">
          <div>
            <label for=""> فایل رزومه:<span>*</span></label>
            <b-form-file
              v-model="resumeFileFile"
              class="supplierInput"
              :state="Boolean(resumeFileFile)"
            ></b-form-file>
            
          </div>
          <div v-if="user&&user.isCompany||isCompany">
            <label for=""> کد اقتصادی :<span>*</span></label>
            <input
              type="text"
              v-model="codeEqtesadi"
              class="supplierInput"
              id=""
            />
          </div>
        </div>
        <div class="supplierInputGroup">
          <div id="isCompanySection">
            <label for="isCompany">آیا یک شخص حقوقی هستید؟</label>
            <input type="checkbox" name="" v-model="isCompany" id="isCompany" />
          </div>
        </div>
        <hr />
        <h3 style="text-align: right;direction: rtl;">انتخاب دسته بندی اخبار :</h3>
        <div id="categoriesContent">
          <div v-for="cate in selectedCategories" :key="cate">
            <label :for="`cate${cate.id}`">{{ cate.name }}</label>
            <input
              type="checkbox"
              :id="`cate${cate.id}`"
              v-model="cate.status"
            />
          </div>
        </div>
        <b-button variant="primary" @click="edit()">ویرایش</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import SInputs from "@/components/admin/shared/sInputs.vue";
import STable from "@/components/admin/shared/sTable.vue";
import adminMixin from "@/libraries/adminController.js";

import rolemixin from "@/libraries/adminRole.js";
import cooperation from "@/libraries/cooperation";
import { BModal, BButton, BOverlay, BSpinner, BFormFile } from "bootstrap-vue";
export default {
  mixins: [adminMixin, rolemixin, cooperation],
  components: {
    SInputs,
    BModal,
    BButton,
    STable,
    BOverlay,
    BSpinner,
    BFormFile,
  },
  data() {
    return {
      codeEqtesadi:"",
      innerDisabled:false,
      isSuccess: false,
      showCategoryModal: false,
      showModal: false,
      user: null,
      acitivityField: "",
      descriptionField: "",
      editedUser: null,
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      province: "",
      provinceLabel: "",
      city: "",
      address: "",
      postalCode: "",
      gender: "",
      isCompany: false,
      categories: "",
      companyName: "",
      namayendeName: "",
      phone: "",
      isAdminConfirm:false,
      resumeFile: "",
      resumeFileFile:null,
      relatedName: "",
      id:"",
      samaneTejaratCode: "",
      codeEqtesadi: "",
      shenaseMelli: "",
      cities: null,
      selectedCategories: [],
    };
  },
  methods: {
    async uploadImage() {
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
        .post(
          `Files/UploadFile?SavePath=supplier`,
          formData,
          config
        )
        .then((response) => {
          url = response.data.data;
        })
        .catch(() => {
          this.$toast.error(
            "خطایی در آپلود ویدیو به وجود آمده است , لطفا صفحه را بروز رسانی کنید"
          );
        });
      return url;
    },
    getAllCategories() {
      this.$axios.get(`SuppliersCategory`).then((res) => {
        res.data.data.forEach((cate) => {
          cate.status = false;
          this.selectedCategories.push(cate);
        });
        this.setUserCategories();
      });
    },
    setUserCategories() {
      this.user.categories.forEach((cate) => {
        if (this.selectedCategories.find((cat) => cat.id === cate)) {
          this.selectedCategories.find(
            (cat) => cat.id === cate
          ).status = true;
        }
      });
      console.log(this.selectedCategories);
    },
    showModalCategory(user) {
      this.showCategoryModal = true;
      this.editedCategories = user.categories;
    },
    
   async edit() {
      
      let pack = {
        address: this.address,
        categories: this.categories,
        city: this.city,
        companyName: this.companyName,
        email: this.email,
        gender: this.gender,
        image: this.image,
        id:this.id,
        acitivityField: this.acitivityField,
        descriptionField: this.descriptionField,
        isCompany: this.isCompany,
        isAdminConfirm:this.isAdminConfirm,
        lastName: this.lastName,
        namayendeName: this.namayendeName,
        name: this.name,
        phone: this.phone,
        phoneNumber: this.phoneNumber,
        postalCode: this.postalCode,
        relatedName: this.relatedName,
        resumeFile: this.resumeFile,
        codeEqtesadi: this.codeEqtesadi,
        samaneTejaratCode: this.samaneTejaratCode,
        shenaseMelli: this.shenaseMelli,
        province: this.provinceLabel,
      };
      if(this.resumeFileFile){
       pack.resumeFile=await this.uploadImage();
      }
      let categories = [];
      this.selectedCategories.forEach((cate) => {
        if (cate.status) {
          categories.push(cate.id);
        }
      });
      pack.categories = categories;
      if(this.isCompany){
        pack.codeEqtesadi=this.codeEqtesadi
      }
      this.$axios
        .post(
          `supplier/${
            this.isCompany ? "UpdateCompanyProfile" : "UpdateProfile"
          }`,
          JSON.stringify(pack),
          {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.$toast.success(res.data.message);
            this.showModal = false;
            this.getProfile();
         
        })
        .catch((error) => {
          let arrayError = error.response.data.message.split("|");
          arrayError.forEach((err, index) => {
            this.$toast.error(err, {
              timeout: 1000 * (index + 4),
              pauseOnHover: true,
            });
          });
        });
    },

    fillData(user) {
     this.acitivityField = user.acitivityField;
       this.descriptionField = user.descriptionField;
       this.address = user.address;
      this.categories = user.categories;
      this.city = user.ity;
      this.companyName = user.companyName;
      this.email = user.email;
      this.gender = user.gender;
      this.codeEqtesadi=user.codeEqtesadi?user.codeEqtesadi:"";

      this.image = user.image;
      this.isCompany = user.isCompany;
      this.isAdminConfirm=user.isAdminConfirm;
      this.lastName = user.lastName;
      this.namayendeName = user.namayendeName;
      this.name = user.name;
      this.phone = user.phone;
      this.phoneNumber = user.phoneNumber;
      this.postalCode = user.postalCode;
      this.id=user.id;
      this.relatedName = user.relatedName;
      this.resumeFile = user.resumeFile;
      this.codeEqtesadi = user.codeEqtesadi;
      this.samaneTejaratCode = user.samaneTejaratCode;
      this.shenaseMelli = user.shenaseMelli;
      this.provinceAndCity.forEach((item) => {
        if (item.label == user.province) {
          this.province = item.id;
        }
      });
    },
    editUser(user) {
      this.fillData(user);
      this.showModal = true;
    },
    getProfile(needCategories = false) {
      this.$axios
        .get("supplier/profile")
        .then((res) => {
          this.isSuccess = true;
          this.user = res.data.data;
          if (needCategories) this.getAllCategories();
        })
        .catch((err) => {
          this.isSuccess = false;
          this.$toast.error(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProfile(true);
  },
  watch: {
    province(newValue) {
      this.provinceAndCity.forEach((item) => {
        if (item.id == newValue) {
          this.cities = item.cities;
          this.provinceLabel = item.label;
          return (this.city = item.cities[0]);
        }
      });
    },
  },
};
</script>
<style>
div#register label {
  direction: rtl;
  font-size: 18px;
  font-weight: 700;
  margin: auto;
}
div#register {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  margin: auto;
}
.supplierInputGroup input,
.supplierInputGroup select {
  width: 100%;
}
div#addressBox label {
  text-align: right;
}
div#register label span {
  color: red;
}
div#addressBox {
  width: 100%;
  display: grid;
  direction: rtl;
}
.supplierInputGroup div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.supplierInputGroup {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  direction: rtl;
  width: 100%;
}
div#buttons a.disable {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
div#buttons a {
  background: green;
  padding: 8px 16px;
  color: white;
  border-radius: 5px;
}
div#buttons {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}
div#register input,
#register textarea,
#register select {
  border-radius: 8px;
  border: 2px solid #1a3fa2;
  padding: 4px;
}
div#register textarea {
  width: 100%;
}
div#isCompanySection input {
  width: 30px;
  height: 30px;
}
div#isCompanySection label {
  margin-bottom: 0;
}
div#isCompanySection {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  justify-content: flex-end;
  align-items: end;
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

div#supplierContent p {
  background: #80808042;
  padding: 10px 20px;
  min-width: 100%;
  min-height: 50px;
  direction: rtl;
  text-align: right;
}
div#supplierContent span {
  background: #80808042;
  padding: 10px 20px;
  min-width: 200px;
  text-align: right;
  direction: rtl;
  font-weight: bolder;
}
div#supplierContent img {
  width: 210px;
  margin: auto;
}
div#supplierContent {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  padding: 15px;
}
.infoGroup div {
  display: flex;
  flex-direction: column;
}

.infoGroup {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  direction: rtl;
}
@media (max-width: 1000px) {
  .supplierInputGroup {
    display: grid;
    grid-template-columns: 1fr;
  }
}
div#categoriesContent div label {
  margin-bottom: 0;
}
div#categoriesContent div {
  direction: ltr;
  display: flex;
  gap: 5px;
  align-items: center;
}
div#categoriesContent {
  display: flex;
  flex-wrap: wrap;
  direction: rtl;
  gap: 20px;
}
@media (max-width:768px){
  #supplierContent .infoGroup{
    grid-template-columns: 1fr;
  }
}
</style>
