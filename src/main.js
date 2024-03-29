import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import requestMixin from "@/libraries/preFetchMixin.js";
AOS.init();
import * as MyMethods from "@/libraries/methods.js";
// import css
// import '@ocrv/vue-tailwind-pagination/styles'
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import 'sweetalert2/src/sweetalert2.scss'
import "vue-multiselect/dist/vue-multiselect.min.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/admin/css/main.css";
import "@/assets/front/css/main.css?version=1.02";
import "@/assets/front/css/dark.css?version=1.02";
import "@/assets/front/css/ltrTheme.css?version=1.02";
// plugins
import VueSlickCarouse from "vue-slick-carousel";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import Vuelidate from "vuelidate";
import Axios from "axios";
import VueImg from "v-img";
import VueCookie from "vue-cookie";
import VueLazyload from "vue-lazyload";

// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: "/assets/front/images/skeleton.gif",
  attempt: 1,
});
import * as VueMethods from "./libraries/vue-methods";
// import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
// Vue.component('date-picker', VuePersianDatetimePicker);
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import swal from "sweetalert";
import CKEditor from "ckeditor4-vue";
// CKEditor.replace('DescriptionRtl', {
//     customConfig: '/js/Config.js'
// });
Vue.use(CKEditor);
window.swal = swal;
Vue.use(Toast);
import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
Vue.use(VueVideoPlayer);
// componentnly
Vue.use(VueCookie);
Vue.use(VueImg);
import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = "https://test.mmc.ir/api/";
Vue.use(Vuelidate);
// Vue.use(Swal)
Vue.component("VueSlickCarouse", VueSlickCarouse);
Vue.config.productionTip = false;
// از بوتسترپ ویو به صورت محلی استفاده میکنیم
Vue.mixin(requestMixin);
new Vue({
  data() {
    // https://test.mmc.ir
    return {
      aboutUsCounter: 9,
      sectionIndexHome: 1,
      screenSize: 0,
      showUtilityModal:false,
      footerMapCursor: false,
      domainName: "https://mmc.ir",
      footerData: null,
      baseImageUrl: "https://test.mmc.ir/",
      // change vue x url
    };
  },
  methods: {
    ...MyMethods,
    ...VueMethods,
    setScreen() {
      this.screenSize = window.innerWidth;
    },
    showUtilityModalFunction(){
      this.showUtilityModal=true;
    },
    aboutCounterFunction() {
      let a = setInterval(() => {
        if (this.aboutUsCounter == 2) {
          clearInterval(a);
        }
        if(this.aboutUsCounter>1){
          this.aboutUsCounter--;
        }
       
      }, 1000);
    },
  },
  mounted() {
    this.setScreen();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setScreen);
  },
  created() {
    if (this.$cookie.get("adminPanelRole")) {
      this.$store.commit("adminPanelRole", this.$cookie.get("adminPanelRole"));
    }
    if (this.$cookie.get("ltrTheme")) {
      this.$axios.defaults.headers.common["Accept-Language"] = "en";
      if (!document.body.classList.contains("ltrTheme")) {
        document.body.classList.add("ltrTheme");
      }
    } else {
      this.$axios.defaults.headers.common["Accept-Language"] = "fa";
    }
    if (!this.$route.path.includes('admin')) {
      this.$axios.get("Home/GetFooterContactUs").then((res) => {
        let step1 = JSON.stringify(res.data.data);
        let step2 = step1.replace(/_fa"/g, '"');
        let step3 = step2.replace(/_en"/g, '"');

        this.footerData = JSON.parse(step3);
      });
    }
    if (this.$cookie.get("darkMode")) {
      if (!document.body.classList.contains("darkMode")) {
        document.body.classList.add("darkMode");
      }
    }
    window.addEventListener("resize", this.setScreen);
    this.$axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          // this.$notify({
          //     group: "foo",
          //     title: "پیام سیستم",
          //     text: error.response.data.message,
          //     type: "error",
          //     duration: "5000"
          // });
          this.$cookie.delete("Authorization");
          this.$axios.defaults.headers.common["authorization"] = "Bearer ";

          router.push("/login");
        } else if (error.response.status === 403) {
          this.$cookie.delete("Authorization");

          router.push("/login");
        }
        throw error;
      }
    );
    if (this.$cookie.get("Authorization")) {
      this.$axios.defaults.headers.common["authorization"] =
        "Bearer " + this.$cookie.get("Authorization");
    }
  },
  watch: {
    sectionIndexHome(newVal) {
      if (newVal == 2) {
        this.aboutUsCounter = 9;
        this.aboutCounterFunction();
      }
    },
  },

  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
