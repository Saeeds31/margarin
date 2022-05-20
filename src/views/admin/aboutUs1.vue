<template>
  <!-- Content Wrapper. Contains page content -->
   <div id="margarinValues">
        <div class="margarin_values_desc" id="margarinValues_social">
          تعهد به افزایش سطح سلامت جامعه
          <br />

          رعایت الزامات قانونی در تولید محصولات
          <br />

          رقابت حرفه ای و اخلاقی با سایر رقبا
          <br />

          پیشرو در طراحی و تولید محصولات جدید
        </div>
        <div class="margarin_values_desc" id="margarinValues_customer">
          جلب اعتماد و احترام به مشتریان
          <br />
          خلق نوآوری های فراتر از انتظارات مشتریان
          <br />
          تاکید بر حفظ و پایداری مشتریان
        </div>
        <div class="margarin_values_desc" id="margarinValues_staff">
          شایسته سالاری و استفاده از نیروهای متخصص و وفادار
          <br />

          تاکید بر اتحاد، همدلی، مشارکت و کارگروهی
          <br />

          تعهد به تعالی، پیشرفت و ایجاد انگیزه در کارکنان
          <br />

          تعهد به فراگیری آموزش و ثبت و انتقال دانش
        </div>
        <div class="margarin_values_desc" id="margarinValues_other">
          حفظ و صیانت از سرمایه های مادی و معنوی شرکای تجاری
          <br />

          التزام به سودآوری پایدار و بلندمدت
          <br />

          شفافیت و صداقت در انتقال اطلاعات به ذینفعان
        </div>

        <div id="margin_values_circle">
          <div
            @mouseleave="unfocusSec('margarinValues_social')"
            @mouseenter="focusSec('margarinValues_social', '64f2ff')"
          >
            <img
              src="@/assets/front/images/circle_tl.png"
              alt="margarin values"
            />
          </div>
          <div
            @mouseleave="unfocusSec('margarinValues_customer')"
            @mouseenter="focusSec('margarinValues_customer', '36ff54')"
          >
            <img
              src="@/assets/front/images/circle_tr.png"
              alt="margarin values"
            />
          </div>
          <div
            @mouseleave="unfocusSec('margarinValues_staff')"
            @mouseenter="focusSec('margarinValues_staff', 'ff7f7e')"
          >
            <img
              src="@/assets/front/images/circle_bl.png"
              alt="margarin values"
            />
          </div>
          <div
            @mouseleave="unfocusSec('margarinValues_other')"
            @mouseenter="focusSec('margarinValues_other', 'feff5c')"
          >
            <img
              src="@/assets/front/images/circle_br.png"
              alt="margarin values"
            />
          </div>
        </div>
      </div>
</template>
<script>
import PostModal from "@/components/mainComponent/postModal.vue";
import Loading from "@/components/admin/loading.vue";
import mixin from "../../mixins/mixins";
import STable from "@/components/mainComponent/STable.vue";
import { BFormInput } from "bootstrap-vue";
export default {
  components: {
    Loading,
    STable,
    PostModal,
    BFormInput
  },
  mixins: [mixin],  metaInfo() {
    return {
      title: " کتاب ها",
    }
  },
  data() {
    return {
      filterOption:[
        {id:"all",label:'همه'},
        {id:"local",label:'کتابخانه گلستان شناسی'},
        {id:"1",label:'وضعیت فعال'},
        {id:"0",label:'وضعیت غیرفعال'},
      ],
      filter:null,
      searchName: null,
      routeKey: "books",
      showpModal: false,
      headers: [
        {
          style: "col-12",
          show_in_tabel: true,
          placeholder: "عنوان  کتاب",
          type: "string",
          name: "نام ",
          key: "title"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " توضیحات کوتاه را وارد کنید",
          type: "string",
          name: "توضیحات کوتاه",
          key: "summary"
        },

        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " توضیحات کامل را وارد کنید",
          type: "description",
          name: "توضیحات کامل ",
          key: "description"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: "بیتا",
          type: "string",
          name: "سال انتشار",
          key: "publish_year"
        },
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: " تعداد صفحات را وارد کنید",
          type: "string",
          name: "تعداد صفحات",
          key: "pages_count"
        },
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: " تعداد جلدها را وارد کنید",
          type: "string",
          name: "تعداد جلدها",
          key: "copies_count"
        },
        {
          multiple: true,
          style: "col-6",
          show_in_tabel: false,
          placeholder: " دسته بندی ها  را وارد کنید",
          type: "select",
          name: "دسته بندی ها",
          key: "categories",
          selectIN: "categories"
        },

        {
          multiple: false,
          style: "col-6",
          show_in_tabel: true,
          placeholder: " ناشر را وارد کنید",
          type: "select",
          name: "ناشر",
          key: "publisher_id",
          selectIN: "publishers"
        },

        {
          multiple: true,
          style: "col-6",
          show_in_tabel: false,
          placeholder: " نویسنده را وارد کنید",
          type: "select",
          name: "نویسنده",
          key: "authors",
          selectIN: "authors"
        },

        {
          multiple: false,
          style: "col-6",
          show_in_tabel: true,
          placeholder: " نوع کتاب را وارد کنید",
          type: "select",
          name: "نوع کتاب",
          key: "book_type_id",
          selectIN: "bookTypes"
        },
        {
          style: "col-6",
          show_in_tabel: false,
          placeholder: " فایل  را وارد کنید",
          type: "file",
          name: "فایل",
          key: "file"
        },

        {
          style: "col-6",
          show_in_tabel: true,
          placeholder: " تصویر  را وارد کنید",
          type: "image",
          name: "تصویر",
          key: "image"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " تگ ها  را وارد کنید",
          type: "list",
          name: "برچسب ها",
          key: "tags"
        },
        {
          style: "col-12",
          show_in_tabel: false,
          placeholder: " ویژگی  را وارد کنید",
          type: "specifications",
          name: "ویژگی ها",
          key: "specifications",
          selectIN: "specifications"
        },

        {
          style: "col-6",
          show_in_tabel: true,
          placeholder: "نمایش",
          type: "boolean",
          name: "وضعیت",
          key: "status"
        },

        {
          style: "col-6",
          show_in_tabel: true,
          placeholder: "تایید",
          type: "boolean",
          name: "کتابخانه گلستان شناسی",
          key: "local_state"
        },
        {
          style: "col-12",
          show_in_tabel: true,
          placeholder: "",
          type: "setting",
          name: "تنظیمات",
          key: "",
          edit: true,
          delete: true
        }
      ],
      mode: "create",
      edit_item: null,
      current_url: "/admin/books"
    };
  },
  created() {
    if (this.settings == null) {
      this.$store.dispatch("getBookSelectDataFromServer");
    }
    if (this.Items == null) {
      this.getItemsFromServer(
        this.current_url,
        this.$route.query.page != undefined ? this.$route.query.page : "1",
        false,
        "",
        this.routeKey
      );
    }
  },
  
  computed: {
    settings() {
      return this.$store.getters.getBookSelectData;
    }
  },
  methods: {
    showpModalFunc(flag){
      this.showpModal=flag;
      this.mode="create";
      this.edit_item=null;
    },
    showPostModal() {
      // this.$bvModal.show("postModal");
      this.showpModal = true;
    }
  },
  watch: {
    filter(newVal){
      if(newVal=='local'){

        this.getItemsFromServer(
          this.current_url,
         "1",
        true,
        `&searchBy1=local_state&search1=${1}`,
        this.routeKey
      );
         }else if(newVal=="all"){
           
        this.getItemsFromServer(
          this.current_url,
         "1",
        false,
        ``,
        this.routeKey
      );
         }else if(newVal=="1"){
            this.getItemsFromServer(
          this.current_url,
         "1",
        false,
        `&searchBy1=status&search1=${1}`,
        this.routeKey
      );
         }else {
                    this.getItemsFromServer(
          this.current_url,
         "1",
        false,
        `&searchBy1=status&search1=${0}`,
        this.routeKey
      );
         }
    },
    searchName(newVal) {
      if (newVal == null || newVal == "" || newVal == " ") {
        this.$router.replace({ name: "books", query: { page: "1" } });
      } else {
        this.getItemsFromServer(
          this.current_url,
          1,
          true,
          `&searchBy1=title&search1=${newVal}`,
          this.routeKey
        );
      }
    }
  }
};
</script>
<style scoped>
  .d-flex{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width:80%
  }
  .cardH{
    min-height: 25vh;
  }
</style>
