<template>
  <div id="aboutUs" class="mainContentAdmin">
    <b-overlay :show="status" no-wrap fixed z-index="9999">
      <template v-slot:overlay>
        <div class="d-flex align-items-center">
          <b-spinner small type="grow" variant="dark" class="mx-1"></b-spinner>
          <b-spinner type="grow" variant="dark" class="mx-1"></b-spinner>
          <b-spinner small type="grow" variant="dark" class="mx-1"></b-spinner>
        </div>
      </template>
    </b-overlay>
    <div v-if="users" id="addRole">
      <b-form-group label="انتخاب کاربر">
        <treeselect
          :multiple="false"
          :clearable="false"
          :searchable="true"
          v-model="id"
          :options="users"
        />
      </b-form-group>
      <b-form-group label="افزودن نقش">
        <treeselect
          :multiple="false"
          :clearable="false"
          :searchable="true"
          v-model="Role"
          :options="usersRole"
        />
     
      </b-form-group>
     <div id="buttons">
        <b-button
      class="col-md-6"
        :class="{ disabled: disabled == true }"
        @click.prevent="submitForm()"
        >افزودن</b-button
      >
      
      <b-button
      variant="danger"
      class="col-md-6"
        :class="{ disabled: disabled == true }"
        @click.prevent="deleteRole()"
        >حذف </b-button
      >
     </div>
    </div>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import {
  BOverlay,
  BSpinner,
  BFormGroup,
  BFormInput,
  BButton
} from "bootstrap-vue";
import mixins from "@/libraries/adminController.js";

export default {
  components: {
    Treeselect,
    BOverlay,
    BSpinner,
    BFormGroup,
    BFormInput,
    BButton
  },

  mixins: [mixins],
  data() {
    return {
      users: null,
      id: null,
      Role: null,
      status: true,
      usersRole:null,
      disabled: false
    };
  },
  mounted() {
    this.$axios.get("Users").then((response) => {
      let fakeList = [];
      response.data.data.forEach((ele) => {
        let pack = {
          id: ele.id,
          label: ele["userName"]
        };
        fakeList.push(pack);
      });
      this.users = fakeList;
      this.status = false;
      console.log(this.settings);
    });
    this.$axios.get("Users/GetSystemRoles").then(res=>{
     let fakeList = [];
      res.data.data.forEach((ele) => {
        let pack = {
          id: ele.name,
          label: ele.name
        };
        fakeList.push(pack);
      });
      this.usersRole = fakeList;
    })
  },
  methods: {
    submitForm() {
      this.disabled = true;
      this.$axios
        .post(
          `Users/AssignRole?Id=${this.id}&Role=${this.Role}`,
          {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json"
            }
          }
        )
        .then((response) => {
          this.$toast.success(response.data.message);
          this.disabled = false;
        })
        .catch((error) => {
          this.disabled = false;

          this.$toast.error(error.response.data.message);
        });
    },
    
    deleteRole() {
      this.disabled = true;
      this.$axios
        .post(
          `Users/DeleteRole?Id=${this.id}&Role=${this.Role}`,
          {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json"
            }
          }
        )
        .then((response) => {
          this.$toast.success(response.data.message);
          this.disabled = false;
        })
        .catch((error) => {
          this.disabled = false;

          this.$toast.error(error.response.data.message);
        });
    },
  },

  watch: {
    item(newVal) {
      this.bigData = newVal;
    }
  }
};
</script>
<style scoped>
#aboutUs .SForm {
  width: 90%;
  margin: auto;
}
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

div#addRole {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
}
#buttons {
  display: flex;
}
</style>
<style>
div#addRole .form-group {
    direction: rtl;
}
div#addRole .form-group .col-form-label{
    text-align:right
}


</style>
