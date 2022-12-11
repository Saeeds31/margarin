<template>
    <div class="mainContentAdmin" id="weblogCategories">
    
  
      <div  class="mainTable">
        <b-form @submit.prevent="changePass()">
            <b-form-group
            label="رمز عبور :"
            
            >
            <b-form-input
                v-model="newPassword"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">تغییر</b-button>
        </b-form>
       
     
      </div>
    
    </div>
  </template>
  <script>
  import {BForm,BFormGroup,BFormInput,BButton} from "bootstrap-vue"
  export default {
    components:{
        BForm,BFormGroup,BFormInput,BButton
    },
    data() {
      return {
        newPassword:""
      };
    },
    methods: {
        changePass(){
            this.$axios.post(`Users/changePassword?password=${this.newPassword}`).then(res=>{
                this.$toast.success(res.data.message);
                this.newPassword=""
                }).catch(err=>{
                    this.$toast.error(err.response.data.message)
                })
        }
    },
    
  
  };
  </script>
  <style>
  
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
  div#sendMessageContent textarea{
    padding: 15px;
  }
    div#sendMessageContent input[type="submit"] {
    background: green;
    color: white;
    padding: 10px 24px;
    border: chartreuse;
    border-radius: 4px;
  }
  
  div#sendMessageContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    direction: rtl;
  }
  .handlerSUp{
    display: flex;
    gap: 10px;
  }
  .mainTable{
    direction: rtl;
  }
  .mainTable label{
    direction: rtl;
    text-align: right;
  }
  </style>
  