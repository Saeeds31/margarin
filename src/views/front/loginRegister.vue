<template>
  <div
    id="loginRegisterSection"
    class="d-flex height100vh width100 align-items-center"
  >
    <img
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
      id="loginRegisterImage"
      src="@/assets/front/images/loginRegister.png"
      alt=""
    />

    <div
      id="content"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
      class="d-flex flex-direction-column align-items-end width45"
    >
      <router-link class="d-flex justify-content-end" to="/">
        <logo class="width80"
      /></router-link>
      <p>با ما در پروفایل کاربری همراه و همکار باشید</p>
      <!-- <h1>ســـامانه سهامـــداران مارگاریـــن</h1> -->
      <div id="userNameBox" class="width80">
        <img src="@/assets/front/images/userInput.svg" alt="نام کاربری" />
        <input
          v-model="username"
          placeholder="نام کاربری خود را وارد کنید"
          type="text"
        />
      </div>
      <div id="passWordBox" class="width80">
        <img
          id="icon"
          src="@/assets/front/images/passInput.svg"
          alt="نام کاربری"
        />
        <input
          @keypress.enter="login"
          v-model="password"
          placeholder="کلمه عبور خود را وارد کنید"
          type="password"
        />
        <div id="forgetPass">
          <span> بازیابی کلمه عبور </span>
          <img src="@/assets/front/images/forgetInput.svg" alt="نام کاربری" />
        </div>
      </div>
      <div
        id="loginRegisterOption"
        class="d-flex width80 justify-content-between align-items-center"
      >
        <a> ثبت نام کنید </a>
        <roundedButton
          @buttonClicked="login()"
          :class="{ disabled: disable }"
          :type="'button'"
          :title="'ورود به سامانه سهام داران'"
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
    </div>
  </div>
</template>
<script>
import Logo from "@/components/front/shared/logo.vue";
import roundedButton from "@/components/front/shared/roundedButton.vue";
export default {
  components: {
    Logo,
    roundedButton
  },
  methods: {
    login() {
      const formData = new FormData();
      formData.append("grant_type", "password");
      formData.append("username", this.username);
      formData.append("password", this.password);
      this.disable = true;
      this.$axios
        .post("Users/Token", formData)
        .then((response) => {
          this.$cookie.set("Authorization", response.data.access_token);
          this.$axios.defaults.headers.common["authorization"] =
            "Bearer " + response.data.access_token;
            this.$axios.get('Users/GetRole').then(res=>{
              this.$store.commit('adminPanelRole',res.data.data);
              this.$cookie.set('adminPanelRole',res.data.data)
                this.$toast.success("به پنل ادمین خوش آمدید");
              if(res.data.data.toLowerCase().includes('admin')){

                this.$router.push("/admin-panel/about-us");
              }else {
                this.$router.push("/admin-panel/recipes");

              }
            })
        })
        .catch((error) => {
          this.disable = false;
          this.$toast.error(error.response.data.message);
        });
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
          "height",
          "%",
          "#loginRegisterImage",
          1496,
          75,
          1100,
          70
        );
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
    }
  },
  data() {
    return { username: null, password: null, disable: false };
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "login Margarin"
        : "مارگارین - ورود",
      meta: [
        {
          name: "description",
          content: this.aboutUsData ? this.aboutUsData.aboutUs.meta : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme") ? "login Margarin" : "درباره ما"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  }
};
</script>
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
</style>
