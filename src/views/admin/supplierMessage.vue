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
  
      <div v-if="items != null && items.length > 0" class="mainTable"></div>
  
      <b-modal
        id="categoryModal"
        hide-footer
        ref="categoryModal"
        no-close-on-backdrop
        v-model="showModal"
        @close="resetModal()"
        :title="mode == 'create' ? 'افزودن ' + title : ' مشاهده ' + title"
      >
      </b-modal>
    </div>
  </template>
  <script>
  // import the styles
  import adminMixin from "@/libraries/adminController.js";
  import { BModal, BButton, BOverlay, BSpinner } from "bootstrap-vue";
  export default {
    mixins: [adminMixin],
    components: {
      BModal,
      BButton,
      BOverlay,
      BSpinner,
    },
    data() {
      return {
        items: null,
      };
    },
    mounted() {
      this.$axios
        .get("SupplierMessage/GetUserMessage")
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
  </style>
  