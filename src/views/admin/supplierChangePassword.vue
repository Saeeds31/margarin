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
            <b-form-group
            label="تکرار عبور :"
            
            >
            <b-form-input
            type="password"
                v-model="reNewPassword"
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
        newPassword:"",
        reNewPassword:""
      };
    },
    methods: {
        changePass(){
          if(this.newPassword!=this.reNewPassword){
            return this.$toast.error("تکرار رمز عبور صحیح نمی باشد")
          }
            this.$axios.post(`Users/changePassword?password=${this.newPassword}`).then(res=>{
                this.$toast.success(res.data.message);
                this.newPassword=""
                this.reNewPassword=""
                }).catch(err=>{
                    this.$toast.error(err.response.data.message)
                })
        }
    },
    
  
  };
  </script>
  <style scoped>
  
  
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
  .mainTable form {
    text-align: right;
    width: 60%;
}
@media (max-width:480px){
  .mainTable form {
    width:100%;

  }
}
  </style>
  