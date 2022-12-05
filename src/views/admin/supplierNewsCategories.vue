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
      <b-button variant="primary" @click="showModal = true">افزودن </b-button>
    </div>
    <div v-if="items" class="mainTable">
       <s-table
                    v-model="items"
                    @showEditModal="showEditModal"
                    @deleteItem="deleteItem"
                    :headers="headers"
                  />
    </div>
    <b-modal
      id="categoryModal"
      hide-footer
      ref="categoryModal"
      no-close-on-backdrop
      v-model="showModal"
      @close="resetModal()"
      :title="mode == 'create' ? 'افزودن ' + title : ' ویرایش ' + title"
    >
      <s-inputs
        :disabled="disabled"
        @submit="submit"
        :settings="settings"
        :mode="mode"
        :bigData="bigData"
        :headers="headers"
      />
    </b-modal>
  </div>
</template>
<script>
import SInputs from "@/components/admin/shared/sInputs.vue";
import STable from "@/components/admin/shared/sTable.vue";
import adminMixin from "@/libraries/adminController.js"
import { BModal, BButton,BOverlay,BSpinner } from "bootstrap-vue";
export default {
mixins:[adminMixin],
  components: { SInputs, BModal, BButton, STable,BOverlay,BSpinner },
  data() {
    return {
      headers: [
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "نام دسته بندی را وارد کنید",
          type: "string",
          multiData: false,
          name: "نام دسته بندی",
          key: "name"
        },
        {
          style: "col-12",
          show_in_table: false,
          placeholder: " دسته بندی پدر را انتخاب کنید",
          type: "select",
          multiData: false,
          name: "انتخاب دسته بندی پدر",
          key: "parentId",
          selectIN:'allCategories'
        },
      
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "",
          type: "setting",
          name: "تنظیمات",
          multiData: false,
          key: "",
          edit: true,
          delete: true
        }
      ],
      bigData: {
        persian: {},
        english: {},
        both: {}
      },
      title: "دسته بندی",
      editedId: null,
      apiRoute: "SuppliersCategory",
    };
  },
  mounted() {
      this.loadItems();
      this.settings["allCategories"]=[]
      this.getAllCategories();
  },
  methods:{
    async submit(pack) {
            this.disabled = true;
            if (pack.mode == "edit") {

                let putData = pack.data;
                if (this.userId != null) {
                    putData.userId = this.userId
                }
                putData.id = this.editedId;
                if (putData.createDate && this.apiRoute != 'Blog') {
                    delete putData.createDate
                }
                await this.$axios
                    .put(this.apiRoute, JSON.stringify(putData), {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then((response) => {
                        this.$toast.success(response.data.message);
                        this[this.witchOneLoaded](this.AllListFlag == true ? null : this.currentPage)
                        this.showModal = false;
                        this.resetModal();
                        this.getAllCategories();

                    })
                    .catch((error) => {
                        this.disabled = false;

                        this.setErrorResponse(error.response.data.message);
                    });
            } else {
                if (this.userId != null) {
                    pack.data.userId = this.userId
                }
                await this.$axios
                    .post(this.apiRoute, JSON.stringify(pack.data), {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then((response) => {
                        pack.data.id = response.data.data.id;
                        this.$toast.success(response.data.message);
                        this.items.push(pack.data);
                        this.showModal = false;
                        this.resetModal();
      this.getAllCategories();

                    })
                    .catch((error) => {
                        this.disabled = false;

                        this.setErrorResponse(error.response.data.message);
                    });
            }
            
        },
    getAllCategories(){
      this.$axios.get(`SuppliersCategory/GetParent`).then(res=>{
        res.data.data.forEach(cate => {
          cate.label=cate.name
        });
        this.settings["allCategories"]=res.data.data
      })
    }
  },
  watch:{
      item(newVal){
          this.bigData = newVal
      }
  }
};
</script>
<style></style>
