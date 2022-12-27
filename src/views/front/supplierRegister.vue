<template>
  <main
    id="loginRegisterSection"
    class="supplierRegister d-flex  width100 align-items-center"
  >
    <img
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
      id="loginRegisterImage"
      src="@/assets/front/images/loginRegister.png"
      alt=""
    />

    <section
      id="content"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
      class="d-flex flex-direction-column align-items-end width45"
    >
      <router-link class="d-flex justify-content-end" to="/">
        <logo class="width80"
      /></router-link>
      <p>عضویت در ســـامانه تامین کنندگان مارگاریـــن</p>
      <!-- <h1>ســـامانه سهامـــداران مارگاریـــن</h1> -->
      <div v-if="!verifySection" id="register" class="width80">
        <div class="supplierInputGroup">
          <!-- <div>
            <label for=""> جنسیت :<span>*</span></label>
            <select v-model="gender">
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </div> -->
          
          <div id="isCompanySection">
            <label for="isCompany">آیا یک شخص حقوقی هستید؟</label>
            <input type="checkbox" name="" v-model="isCompany"  id="isCompany">
          </div>
          <div v-if="isCompany">
            <label for="">اسم شرکت :</label>
            <input v-model="companyName" type="text" class="supplierInputs" />
          </div>
       
        </div>
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
              placeholder="test@gmail.com"
              v-model="email"
              class="supplierInput"
              id=""
            />
          </div>

          <div>
            <label for="">شماره تماس :<span>*</span></label>
            <input
              type="tel"
              v-model="phoneNumber"
              placeholder="نام کاربری شما خواهد بود"

              name=""
              class="supplierInput"
              id=""
            />
          </div>
        </div> 
        <div class="supplierInputGroup">
          <div>
            <label for="">رمز عبور :<span>*</span></label>
            <input
              v-model="password"
              type="password"
              name=""
              class="supplierInput"
              id=""
            />
          </div>

          <div>
            <label for="">تکرار رمز عبور :<span>*</span></label>
            <input
              type="password"
              v-model="repassword"
              name=""
              class="supplierInput"
              id=""
            />
          </div>
        </div>
     
        <!-- <div class="supplierInputGroup">
          <div>
            <label for="">استان :<span>*</span></label>
            <select name="" id="" v-model="selectedProvince">
              <option
                :value="province.id"
                v-for="province in provinceAndCity"
                :key="province.id"
              >
                {{ province.label }}
              </option>
            </select>
          </div>

          <div>
            <label for="">شهر :<span>*</span></label>

            <select name="" id="" v-model="selectedCity">
              <option value="null" v-if="selectedProvince == null">
                لطفا یک استان را انتخاب کنید
              </option>
              <option :value="city" v-for="city in cities" v-else :key="city">
                {{ city }}
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
        </div> -->

      
      </div>
      <div v-else id="register" class="width80">
        <p dir="rtl">{{`کد تایید ارسال شده به شماره ${phoneNumber} را وارد کنید`}}</p>
        <PincodeInput
    v-model="code"
    length="6"
    placeholder="-"
  />
      </div>

      <div
        id="loginRegisterOption"
        class="d-flex width80 justify-content-between align-items-center"
      >
        <roundedButton
          @buttonClicked="registerOrVerify()"
          :class="{ disabled: disable }"
          :type="'button'"
          :title="verifySection?'تایید کد':'عضویت در سامانه'"
          :buttonType="'button'"
        />
      </div>
      <router-link
        id="gotoHome"
        class="d-flex align-items-center justify-content-between width30"
        to="/"
      >
        <span id="text"> بازگشت به صفحه نخست </span>
        <span id="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="14"
            viewBox="0 0 19 20"
          >
            <image
              id="Layer_641"
              data-name="Layer 641"
              width="19"
              height="20"
              opacity="0.302"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAABHNCSVQICAgIfAhkiAAAARxJREFUOE+t1D9LQlEcxnFFMBRBei+CgZtUIqEgIuQQBM419SqabAwCN3FSHDRwaQgHcdOxzQZpEkEcatDvI/fCxdB777ke+HAPeH4Px/MvHHJvQ4acoYD5seFh96zQmDEpfOESs0M1XsLOKe7jwgpSoIL/NS9hKkqgiyx+cI3JfprXMNXF0UYOC+Qxcgb6CVNdFE2UsUIRH3ag3zDVRfCGe6xRwkA/mITZdXU6j/hFVUtgGmYHPtN5wh8qCts4FzFA//vkYaaT0URe8OD8myZh2tFX1KwNuOXbMdkABTVwF/Ro6NC2rLO15HsDvSq75mdmuk4d6F4Guk5JAnrIQBf9CtP9xfYyMz1B70hDb1mgJ+ikj+Mns4nB9dneAls/NncWFI8cAAAAAElFTkSuQmCC"
            />
          </svg>
        </span>
      </router-link>
    </section>
  </main>
</template>

<style scoped>
.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.7;
  box-shadow: unset;
}
#content {
  margin-right: 5%;
}
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
div#register input,
#register textarea,
#register select {
  border-radius: 8px;
  border: 2px solid #ffffff;
  padding: 8px;
  box-shadow: 0 0 5px #11221163;
}
div#register textarea {
  width: 100%;
}
div#isCompanySection input {
    width: 30px;
    height: 30px;
}
div#isCompanySection label{
  margin-bottom: 0;
}
  div#isCompanySection {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
    justify-content: flex-end;
    align-items: end;
}
#loginRegisterSection.supplierRegister #loginRegisterImage{
  width:50%;
  height: auto;
}
#loginRegisterSection.supplierRegister  #content{
  top:0;
}
@media (max-width:1000px){
  .supplierInputGroup {
  display: grid;
  grid-template-columns: 1fr;
  }
#loginRegisterSection.supplierRegister #loginRegisterImage{
  width:100%;
  height: auto;
}
#loginRegisterSection.supplierRegister #content{
  margin-bottom: 80px;
}
  #loginRegisterSection.supplierRegister{
    overflow: visible;
  }
  
}

</style>

<script>
  
  import PincodeInput from 'vue-pincode-input';
import rolemixin from "@/libraries/adminRole.js";
// import cooperation from "../../libraries/cooperation";
import Logo from "@/components/front/shared/logo.vue";
import roundedButton from "@/components/front/shared/roundedButton.vue";
export default {
  components: {
    Logo,
    roundedButton,PincodeInput
  },
  mixins: [rolemixin
  // , cooperation
],
  methods: {
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    verifyCode(){
      let pack={
        token:this.code,
        id:this.userId
      }
      this.$axios
          .get(`Users/VerifyPhoneNumber?id=${this.userId}&token=${this.code}`)
          .then((res) => {
            if (!res.data.isSuccess) {
              this.$toast.error(res.data.message);
            }else{
              this.$toast.success(res.data.message);
              setTimeout(() => {
                this.$router.push("/login")
              }, 1500);
            }
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
    registerOrVerify() {
      if(this.verifySection){
        return this.verifyCode();
      }
      if (this.isCompany&&this.companyName.length<3) {
        this.$toast.error("لطفا نام شرکت را به صورت کامل وارد نمایید");
      }
      else if (!this.name) {
        this.$toast.error("نام را وارد کنید");
      } else if (!this.lastName) {
        this.$toast.error("نام خانوادگی را وارد کنید");
      } 
      else if (!this.email) {
        this.$toast.error("ایمیل را وارد کنید");
      } else if (this.email && !this.validateEmail(this.email)) {
        this.$toast.error("فرمت ایمیل به درستی وارد نشده است");
      } else if (!this.phoneNumber) {
        this.$toast.error("شماره تماس را وارد کنید");
      } else if (this.phoneNumber.length != 11) {
        this.$toast.error("شماره تماس را به صورت 11 رقمی  وارد کنید");
      } else if (!this.password) {
        this.$toast.error("رمز عبور را وارد کنید");
      } else if (this.password != this.repassword) {
        this.$toast.error("تکرار رمز عبور صحیح نمی باشد");
      }
      // else if (!this.gender) {
      //   this.$toast.error("جنسیت را وارد کنید");
      // }
      //  else if (!this.selectedProvince) {
      //   this.$toast.error("استان را انتخاب کنید");
      // } else if (!this.selectedCity) {
      //   this.$toast.error("شهر را انتخاب کنید");
      // } else if (!this.address) {
      //   this.$toast.error("ادرس کامل را وارد کنید");
      // } 
       else {
        let pack = {
          name: this.name,
          lastName: this.lastName,
          // address: this.address,
          // province: this.selectedProvinceLabel,
          // city: this.selectedCity,
          isCompany: this.isCompany,
          companyName:this.companyName,
          // postalCode: this.postalCode ? this.postalCode : " ",
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          image: " ",
        };
        this.$axios
          .post("Users/SignUpSupplier", JSON.stringify(pack), {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (!res.data.isSuccess) {
              this.$toast.error(res.data.message);
            }else{
              this.userId=res.data.data.id;
              this.$toast.success(res.data.message);
              this.verifySection=true;
              this.$axios.get(`Users/SendVerifyCodePhoneNumber?id=${this.userId}`).then(res=>{
              })
            }
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
      }
    },
    getPath(roles) {
      let roleArr = roles.split(",");
      let res = this.roleData[roleArr[0]].split(",")[0];
      return res;
    },
   
    setStyle() {
      if (window.innerWidth > 1000) {
        if (window.innerWidth > 1495) {
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#loginRegisterSection #content p",
            1920,
            21,
            1495,
            18
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            " #loginRegisterSection #userNameBox",
            1920,
            80,
            1496,
            80
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#loginRegisterSection #passWordBox",
            1920,
            80,
            1496,
            80
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#loginRegisterSection #gotoHome",
            1920,
            22,
            1496,
            30
          );
        } else {
          this.$root.setProportionStyle(
            "width",
            "%",
            " #loginRegisterSection #userNameBox",
            1496,
            80,
            1100,
            96
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#loginRegisterSection #passWordBox",
            1496,
            80,
            1100,
            96
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#loginRegisterSection #content p",
            1496,
            18,
            1100,
            17
          );
          this.$root.setProportionStyle(
            "width",
            "%",
            "#loginRegisterSection #gotoHome",
            1496,
            30,
            1100,
            40
          );
        }
      
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #content h1",
          1496,
          42,
          1100,
          36
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1496,
          18,
          1100,
          16
        );
        this.$root.setProportionStyle(
          "padding-top",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1496,
          5,
          1100,
          3
        );
        this.$root.setProportionStyle(
          "padding-bottom",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1496,
          5,
          1100,
          3
        );
        this.$root.setProportionStyle(
          "padding-left",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1496,
          5,
          1100,
          3
        );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton span",
          1496,
          50,
          1100,
          45
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton span",
          1496,
          50,
          1100,
          45
        );

        this.$root.unsetInlineStyle(
          "font-size",
          "#loginRegisterSection #passWordBox input"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#loginRegisterSection #userNameBox input"
        );
      } else {
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #content p",
          1000,
          18,
          425,
          12
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #content h1",
          1000,
          46,
          425,
          23
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#loginRegisterSection #passWordBox",
          1000,
          80,
          425,
          98
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#loginRegisterSection #userNameBox",
          1000,
          80,
          425,
          98
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #passWordBox input",
          1000,
          12,
          425,
          10
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #userNameBox input",
          1000,
          12,
          425,
          10
        );
        this.$root.setProportionStyle(
          "top",
          "px",
          "#loginRegisterSection #userNameBox img",
          1000,
          10,
          425,
          14
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#loginRegisterSection #userNameBox img",
          1000,
          5,
          425,
          6
        );
        this.$root.setProportionStyle(
          "top",
          "px",
          "#loginRegisterSection #passWordBox #icon",
          1000,
          10,
          425,
          14
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#loginRegisterSection #passWordBox #icon",
          1000,
          4,
          425,
          5
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #passWordBox #forgetPass span",
          1000,
          14,
          425,
          10
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1000,
          18,
          425,
          12
        );
        this.$root.setProportionStyle(
          "padding-top",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1000,
          5,
          425,
          3
        );
        this.$root.setProportionStyle(
          "padding-left",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1000,
          5,
          425,
          3
        );
        this.$root.setProportionStyle(
          "padding-bottom",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1000,
          5,
          425,
          3
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1000,
          60,
          425,
          74
        );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton span",
          1000,
          50,
          425,
          35
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton span",
          1000,
          50,
          425,
          35
        );
        this.$root.setProportionStyle(
          "padding-right",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton",
          1000,
          30,
          425,
          20
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#loginRegisterSection #loginRegisterOption a",
          1000,
          18,
          425,
          13
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#loginRegisterSection #loginRegisterOption",
          1000,
          80,
          425,
          90
        );
        this.$root.setProportionStyle(
          "border-radius",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton span",
          1000,
          50,
          42,
          35
        );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#loginRegisterSection #loginRegisterOption #loginButton span svg",
          1000,
          18,
          425,
          10
        );
        this.$root.setProportionStyle(
          "width",
          "%",
          "#loginRegisterSection #gotoHome",
          1000,
          30,
          425,
          60
        );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#loginRegisterSection #gotoHome span#arrow",
          1000,
          35,
          425,
          20
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#loginRegisterSection #gotoHome span#arrow",
          1000,
          35,
          425,
          20
        );
        this.$root.setProportionStyle(
          "border-radius",
          "px",
          "#loginRegisterSection #gotoHome span#arrow",
          1000,
          35,
          425,
          20
        );
        this.$root.setProportionStyle(
          "width",
          "px",
          "#loginRegisterSection #gotoHome span#arrow svg",
          1000,
          16,
          425,
          8
        );
      }
    },
  },

  // watch: {
  //   selectedProvince(newValue) {
  //     this.provinceAndCity.forEach((item) => {
  //       if (item.id == newValue) {
  //         this.cities = item.cities;
  //         this.selectedProvinceLabel=item.label
  //         return (this.selectedCity = item.cities[0]);
  //       }
  //     });
  //   },
  // },
  data() {
    return {
      companyName:"",
      isCompany:false,
      userId:null,
      code:null,
      name: null,
      lastName: null,
      phoneNumber: null,
      // address: null,
      // postalCode: null,
      gender: null,
      email: null,
      repassword: null,
      // selectedCity: null,
      // selectedProvince: null,
      // selectedProvinceLabel:null,
      // cities: null,
      password: null,
      disable: false,
      verifySection:false
    };
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "login Margarin"
        : "ورود به پنل همکاران",
      meta: [
        {
          name: "description",
          content: this.aboutUsData ? this.aboutUsData.aboutUs.meta : false,
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "login Margarin"
            : "درباره ما",
        },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
};
</script>

