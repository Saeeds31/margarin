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
      <a href="" id="notSuccessMessage" v-if="!isSuccess">
        درحال دریافت اطلاعات شما
      </a>
      <div id="supplierInfo">
        <div v-if="user" id="supplierContent">
          <img :src="user.image" :alt="user.title" />
          <div class="infoGroup">
            <div>
              <span>نام کامل :</span>
              <p>
                {{ ` ${user.name} ${user.lastName}` }}
              </p>
            </div>
            <div>
              <span>کدملی :</span>
              <p>
                {{ user.shenaseMelli }}
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

            <div>
              <span> شماره ملی : </span>
              <p>
                {{ user.shenaseMelli }}
              </p>
            </div>
          </div>

          <div class="infoGroup">
            <div>
              <span>کد نقش سامانه جامع تجارت ایران :</span>
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
            <div>
              <span> نام معرف : </span>
              <p>
                {{ user.relatedName }}
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
            <div>
                <span> کد اقتصادی : </span>
                <p>
                  {{ user.codeEqtesadi }}
                </p>
                
             
            </div>
          </div>
          <div v-if="user.isCompany" class="infoGroup">
            <div>
              <span> حقیقی یا حقوقی : </span>
              <p>
                {{ user.isCompany ? "حقوقی" : "حقیقی" }}
              </p>
            </div>
            <div >
              <span> نام شرکت : </span>
              <p>
                {{ user.companyName }}
              </p>
            </div>
            <div >
              <span> نام مدیر عامل : </span>
              <p>
                {{ user.ceoName }}
              </p>
            </div>
          </div>

          <div  v-if="user.isCompany" class="infoGroup">
            <div>
              <span>شماره تماس مدیر عامل :</span>
              <p>
                {{user.ceoPhone}}
              </p>
            </div>
            <div>
              <span>   نام نماینده اول :</span>
              <p>
                {{user.agent1Name}}
              </p>
            </div>
            <div>
              <span>شماره تماس  نماینده اول :</span>
              <p>
                {{user.agent1Phone}}
              </p>
            </div>
            </div>

            <div  v-if="user.isCompany" class="infoGroup">
             
              <div>
                <span>   نام نماینده دوم :</span>
                <p>
                  {{user.agent2Name}}
                </p>
              </div>
              
              <div>
                <span>شماره تماس  نماینده دوم :</span>
                <p>
                  {{user.agent2Phone}}
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
          </div>

          <div id="buttons">
            <b-button variant="primary" @click="editUser(user)"
              >ویرایش اطلاعات</b-button
            >
            <a
              variant="success"
              :href="`https://test.mmc.ir/${user.resumeFile}`"
              v-if="
                user.resumeFile &&
                user.resumeFile.toString().includes('supplier')
              "
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
          <div class="div">
            <label for="">نام : <span>*</span></label>
            <input type="text" v-model="name" class="supplierInputs input" />
          </div>

          <div class="div">
            <label for="">نام خانوادگی :<span>*</span></label>
            <input type="text" class="supplierInputs input" v-model="lastName" />
          </div>
        </div>

        <div class="supplierInputGroup">
          <div class="div">
            <label for="">ایمیل :<span>*</span></label>
            <input
              type="email"
              placeholder="yourEmail@domain.com"
              v-model="email"
              class="supplierInput input"
              id=""
            />
          </div>
          <div class="div">
            <label for="">شناسه ملی :<span>*</span></label>
            <input
              type="number"
              v-model="shenaseMelli"
              class="supplierInput input"
              id=""
            />
          </div>
        </div>

        <div class="supplierInputGroup">
          <div class="div">
            <label for=""> نام واحد صنفی :<span>*</span></label>
            <input
              type="text"
              v-model="companyName"
              class="supplierInput input"
              id=""
            />
          </div>

          <div class="div">
            <label for=""> کد نقش سامانه جامع تجارت ایران  :<span>*</span></label>
            <input
              type="tel"
              v-model="samaneTejaratCode"
              name=""
              class="supplierInput input"
              id=""
            />
          </div>
        </div>
        <div class="supplierInputGroup TreeselectBox">
          <div class="div">
            <label for=""> زمینه فعالیت:<span>*</span></label>
            <!-- <input
              type="tel"
              v-model="acitivityField"
              name=""
              class="supplierInput input"
              id=""
            /> -->
            <!-- <select class="select" v-model="acitivityField" name="" id="">
              <option v-for="cat in categories_second" :value="cat.name" :key="cat.id">{{cat.name}}</option>
            </select> -->
            <div id="categoriesContent">
          <treeselect
            :multiple="true"
            :limit="2"
            :clearable="false"
            :searchable="true"
            v-model="selectedCategories"
            :options="categoriesoptions"
          />
          
        </div>
          </div>
          <div class="div">
            <label for=""> شرح زمینه فعالیت :<span>*</span></label>
            <input
              type="text"
              v-model="descriptionField"
              class="supplierInput input"
              id=""
            />
          </div>
        </div>
        <div class="supplierInputGroup">
          <div class="div">
            <label for=""> نام نماینده :<span>*</span></label>
            <input
              type="text"
              v-model="namayendeName"
              class="supplierInput input"
              id=""
            />
          </div>
          <div class="div">
            <label for=""> نام معرف :<span>*</span></label>
            <input
              type="text"
              v-model="relatedName"
              class="supplierInput input"
              id=""
            />
          </div>
        </div>
        <div class="supplierInputGroup">
          <div class="div">
            <label for="">شماره تماس :<span>*</span></label>
            <input
              type="tel"
              v-model="phoneNumber"
              name=""
              placeholder="09120001234"
              class="supplierInput input"
              id=""
            />
          </div>

          <div class="div">
            <label for=""> شماره ثابت :<span>*</span></label>
            <input placeholder="02123456789" type="number" v-model="phone" class="supplierInput input" id="" />
          </div>
        </div>

        <div class="supplierInputGroup">
          <div class="div">
            <label for="">کدپستی :</label>
            <input v-model="postalCode" type="text" class="supplierInputs input" />
          </div>
          <div class="div">
            <label for=""> جنسیت :<span>*</span></label>
            <select class="select" v-model="gender">
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </div>
        </div>

        <div class="supplierInputGroup">
          <div class="div">
            <label for="">استان :<span>*</span></label>
            <select class="select" name="" id="" v-model="province">
              <option
                :value="prov.id"
                v-for="prov in provinceAndCity"
                :key="prov.id"
              >
                {{ prov.label }}
              </option>
            </select>
          </div>

          <div class="div">
            <label for="">شهر :<span>*</span></label>

            <select class="select" name="" id="" v-model="city">
              <option value="null" v-if="province == null">
                لطفا یک استان را انتخاب کنید
              </option>
              <option :value="cy" v-for="cy in cities" v-else :key="cy">
                {{ cy }}
              </option>
            </select>
          </div>
        </div>
        <div class="div" id="addressBox">
          <label for="">آدرس کامل :<span>*</span></label>
          <textarea
            v-model="address"
            class="textarea"
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div class="supplierInputGroup">
          <div style="width:200%" class="div">
            <label for=""> فایل رزومه:<span>*</span></label>
            <b-form-file
              v-model="resumeFileFile"
              class="supplierInput"
              :state="Boolean(resumeFileFile)"
            ></b-form-file>
          </div>
          
        </div>
        <div class="supplierInputGroup">
          <div class="div" id="isCompanySection">
            <label for="isCompany">آیا یک شخص حقوقی هستید؟</label>
            <input type="checkbox" name="" v-model="isCompany" id="isCompany" />
          </div>
          <div class="div" >
            <label for=""> کد اقتصادی :<span>*</span></label>
            <input
              type="text"
              v-model="codeEqtesadi"
              class="supplierInput input"
              id=""
            />
          </div>
        </div>
        <div v-if="isCompany" class="supplierInputGroup">
          <div class="div">
            <label for="">نام مدیرعامل :</label>
            <input
              type="tel"
              v-model="ceoName"
              name=""
              class="supplierInput input"
              id=""
            />
          </div>

          <div class="div">
            <label for=""> شماره مدیرعامل :</label>
            <input type="number" v-model="ceoPhone" class="supplierInput input" id="" />
          </div>
        </div>
        <div v-if="isCompany" class="supplierInputGroup">
          <div class="div">
            <label for="">نام نماینده اول :</label>
            <input
              type="tel"
              v-model="agent1Name"
              name=""
              class="supplierInput input"
              id=""
            />
          </div>

          <div class="div">
            <label for=""> شماره نماینده اول :</label>
            <input placeholder="09120001234" type="number" v-model="agent1Phone" class="supplierInput input" id="" />
          </div>
        </div>
        <div v-if="isCompany" class="supplierInputGroup">
          <div class="div">
            <label for="">نام نماینده دوم :</label>
            <input
              type="tel"
              v-model="agent2Name"
              name=""
              class="supplierInput input"
              id=""
            />
          </div>

          <div class="div">
            <label  for=""> شماره نماینده دوم :</label>
            <input placeholder="09120001234" type="number" v-model="agent2Phone" class="supplierInput input" id="" />
          </div>
        </div>
       
        <hr />
        
        <b-button variant="primary" @click="edit()">ویرایش</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import SInputs from "@/components/admin/shared/sInputs.vue";
import STable from "@/components/admin/shared/sTable.vue";
import adminMixin from "@/libraries/adminController.js";
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import rolemixin from "@/libraries/adminRole.js";
import cooperation from "@/libraries/cooperation";
import { BModal, BButton, BOverlay, BSpinner, BFormFile } from "bootstrap-vue";
export default {
  mixins: [adminMixin, rolemixin, cooperation],
  components: {
    SInputs,
    BModal,
    Treeselect,
    BButton,
    STable,
    BOverlay,
    BSpinner,
    BFormFile,
  },
  data() {
    return {
      categories_second:[],
      codeEqtesadi: "",
      innerDisabled: false,
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
      agent1Phone:"",
      agent2Phone:"",
      agent1Name:"",
      agent2Name:"",
      ceoName:"",
      ceoPhone:"",
      isAdminConfirm: false,
      resumeFile: "",
      resumeFileFile: null,
      relatedName: "",
      id: "",
      samaneTejaratCode: "",
      codeEqtesadi: "",
      shenaseMelli: "",
      cities: null,
      selectedCategories: null,
      categoriesoptions: [],

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
        .post(`Files/UploadFile?SavePath=supplier`, formData, config)
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
      this.$axios.get(`SuppliersCategory/GetParentsWithChild`).then((res) => {
        let categories=[];
        res.data.data.forEach((cate) => {
          let children = [];
          if (cate.childs.length) {
            cate.childs.forEach((cateChild) => {
              let item = {
                id: cateChild.id,
                label: cateChild.name,
              };
              children.push(item);
            });
          }
          let item = {
            id: cate.id,
            label: cate.name,
            children:children
          };
          categories.push(item);
        });
      
      this.categoriesoptions=categories;
        this.setUserCategories();
      });
      this.$axios.get("/SuppliersCategory").then(res=>{
        this.categories_second=res.data.data
      })
    },
    setUserCategories() {
     this.selectedCategories= this.user.categories;
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
        id: this.id,
        acitivityField: "-",
        descriptionField: this.descriptionField,
        isCompany: this.isCompany,
        isAdminConfirm: this.isAdminConfirm,
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
      if (this.resumeFileFile) {
        pack.resumeFile = await this.uploadImage();
      }
      let categories = [];
      
      pack.categories = this.selectedCategories;
      pack.codeEqtesadi = this.codeEqtesadi;
      if (this.isCompany) {
        pack.ceoName = this.ceoName;
        pack.ceoPhone = this.ceoPhone;
        pack.agent1Name = this.agent1Name;
        pack.agent1Phone = this.agent1Phone;
        pack.agent2Phone = this.agent2Phone;
        pack.agent2Name = this.agent2Name;
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
      this.codeEqtesadi = user.codeEqtesadi ? user.codeEqtesadi : "";
      this.image = user.image;
      this.isAdminConfirm = user.isAdminConfirm;
      this.lastName = user.lastName;
      this.namayendeName = user.namayendeName;
      this.name = user.name;
      this.phone = user.phone;
      this.phoneNumber = user.phoneNumber;
      this.postalCode = user.postalCode;
      this.id = user.id;
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
      this.isCompany = user.isCompany;
      if(this.isCompany){
        this.ceoName=user.ceoName;
        this.ceoPhone=user.ceoPhone;
        this.agent1Name=user.agent1Name;
        this.agent2Name=user.agent2Name;
        this.agent1Phone=user.agent1Phone;
        this.agent2Phone=user.agent2Phone;
      }
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
.supplierInputGroup .div {
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
div#register .input,
#register .textarea,
#register .select {
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
  padding: 10px 20px;
  min-width: 100%;
  min-height: 50px;
  direction: rtl;
  text-align: right;
}
div#supplierContent span {
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
  grid-template-columns: 1fr 1fr 1fr;
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
div#categoriesContent{
  direction: rtl;
  width: 100%;

}
#categoriesContent .vue-treeselect{
  text-align: right;
  width: 100%;
}
div#categoriesContent div label {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  #supplierContent .infoGroup {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
