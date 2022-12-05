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
     
      <div  class="mainTable">
        <router-link to="/login" id="notSuccessMessage" v-if="!isSuccess">
          اطلاعات شما مورد تایید نیست لطفا با پشتیبانی تماس بگیرید
        </router-link>
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
          :settings="settings"
          @submit="submit"
          :mode="mode"
          :folderRoute="'testAboutUs'"
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
      return {isSuccess:false
      };
    },
    mounted() {
        this.$axios.get("supplier/profile").then(res=>{
          this.$toast.success(res.data.message);
          this.isSuccess=true
          
        }).catch(err=>{
          this.isSuccess=false
            this.$toast.error(err.response.data.message);
        })
    },
    
  };
  </script>
  <style>

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
  </style>
  