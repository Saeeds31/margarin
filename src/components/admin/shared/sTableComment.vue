<template>
  <table v-if="list.length>0" class="table table-hover">
    <tr class="trHeader">
      <template v-for="(header, index) in headers">
        <th v-if="header.show_in_table == true" :key="index">
          {{ header.name }}
        </th>
      </template>
    </tr>
    <template v-if="list.length > 0">
      <tr class="trDetail" v-for="item in list" :key="item.id">
   
  
         
       <template v-for="(header, index) in headers">
          <td
            v-if="header.type != 'setting' && header.show_in_table == true"
            :key="index + 20"
          >
            <span
              v-if="header.type == 'boolean'"
              class="badge"
              :class="{
                'badge-success': item[`${header.key+'_fa'}`] == 1,
                'badge-warning': item[`${header.key+'_fa'}`] == 0
              }"
            >
              {{ header.multiData==true? item[`${header.key+'_fa'}`] :item[`${header.key}`] == 1 ? "فعال" : "غیرفعال" }}
            </span>
            <img
              v-if="header.type == 'image'"
              class="image_in_table"
              :src="baseMediaUrl+item[`${header.key}`]"
            />
            <span v-if="header.type == 'string'">{{header.multiData==true? item[`${header.key+'_fa'}`] :item[`${header.key}`] }}</span>
            <span v-if="header.type == 'number'">{{header.multiData==true? item[`${header.key+'_fa'}`] :item[`${header.key}`] }}</span>
            <span class="longText" v-if="header.type == 'description'">{{
              item[`${header.key+'_fa'}`].length > 31
                ? item[`${header.key+'_fa'}`].slice(0, 31) + "..."
                : item[`${header.key+'_fa'}`]
            }}</span>
            <span v-if="header.type == 'select'">
              {{ getValue(header.selectIN, item[`${header.key}`]) }}
            </span>
            <span v-if="header.type == 'pageLink'">
              {{`pages/${item.id}/`}}
            </span>
          </td>
          <td v-if="header.type == 'setting'" :key="index + 20">
       
            <b-button
              class="tableButtons"
              variant="primary"
              @click="answerModal(item.replayId,item[field])"
              >پاسخ</b-button
            >
           
            <b-button
              class="tableButtons"
              variant="danger"
              @click="deleteItem(item.id)"
              >حذف</b-button
            >
           
            <b-button
              class="tableButtons"
              variant="success"
              @click="sendReact('like',item.id)"
              ><i class="fa fa-like"></i>like</b-button
            >
           
            <b-button
              class="tableButtons"
              variant="warning"
              @click="sendReact('disLike',item.id)"
              ><i class="fa fa-dislike"></i>disLike</b-button
            >
            <b-button
              class="tableButtons"
              variant="info"
              @click="changeStatus(item.id)"
              ><i class="fa fa-dislike"></i>{{item.isShow==false?'تایید':'عدم تایید'}}</b-button
            >
          </td>
        </template>
     
      </tr>
    </template>
     <b-modal
      id="commentModal"
      hide-footer
      ref="commentModal"
      no-close-on-backdrop
      v-model="showModal"
      title="پاسخ"
    >
     <b-form-group
        id="answerModalBox"
          label="پاسخ"
          class="col-12"
        >
            <b-form-textarea
              v-model="answer"
              placeholder="پاسخ را وارد کنید"
            ></b-form-textarea>
     </b-form-group>
     <b-button @click="sendAnswer()" variant="primary">ارسال پاسخ</b-button>
    </b-modal>
  </table>
  <div class="noItems" v-else>
    
<svg
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:ns1="http://sozi.baierouge.fr"
    id="svg2160"
    sodipodi:docname="OK-2.svg"
    viewBox="0 0 28.912 32.654"
    sodipodi:version="0.32"
    version="1.0"
    inkscape:output_extension="org.inkscape.output.svg.inkscape"
    inkscape:version="0.48.0 r9654"
  >
  <sodipodi:namedview
      id="base"
      fit-margin-left="0"
      inkscape:zoom="11"
      height="64px"
      borderopacity="1.0"
      inkscape:current-layer="layer1"
      inkscape:cx="10.569472"
      inkscape:cy="15.862443"
      fit-margin-right="2.7755576e-017"
      inkscape:grid-bbox="true"
      inkscape:window-maximized="0"
      showgrid="true"
      width="64px"
      inkscape:document-units="px"
      bordercolor="#666666"
      inkscape:window-x="137"
      inkscape:window-y="182"
      fit-margin-bottom="0"
      inkscape:window-width="1330"
      inkscape:pageopacity="0.0"
      inkscape:pageshadow="2"
      pagecolor="#ffffff"
      inkscape:window-height="900"
      fit-margin-top="0"
  />
  <g
      id="layer1"
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      transform="translate(-20.653 -15.447)"
    >
    <path
        id="path3207"
        style="fill:#ff0000"
        inkscape:connector-curvature="0"
        d="m38.638 18.139c-1.798 1.5509-3.1446 4.3692-4.5312 5.8438-2.6315-2.177-3.8188-6.2358-6.6562-7.375-3.4407 0.91828-8.9042 4.1354-4.875 7.625 2.0576 3.0423 6.1945 5.7464 7.1562 8.9062-1.4673 3.7894-4.291 6.615-7.0312 9.375 1.3399 4.6754 7.7548 0.52478 10.344-1.75 2.0648-4.6338 3.5683 0.89824 5.4994 2.891 1.5405 6.2227 9.8042 4.4034 10.522-0.73944-2.8396-4.5489-6.7818-8.9244-9.521-13.402 1.0851-4.6542 5.6334-7.7704 6.6875-12.281-1.7893-3.1223-5.2813 0.35232-7.5938 0.90625z"
    />
    <path
        id="path3792"
        style="stroke:#a70000;fill:none"
        inkscape:connector-curvature="0"
        d="m38.638 18.139c-1.798 1.5509-3.1446 4.3692-4.5312 5.8438-2.6315-2.177-3.8188-6.2358-6.6562-7.375-3.4407 0.91828-8.9042 4.1354-4.875 7.625 2.0576 3.0423 6.1945 5.7464 7.1562 8.9062-1.4673 3.7894-4.291 6.615-7.0312 9.375 1.3399 4.6754 7.7548 0.52478 10.344-1.75 2.0648-4.6338 3.5683 0.89824 5.4994 2.891 1.5405 6.2227 9.8042 4.4034 10.522-0.73944-2.8396-4.5489-6.7818-8.9244-9.521-13.402 1.0851-4.6542 5.6334-7.7704 6.6875-12.281-1.7893-3.1223-5.2813 0.35232-7.5938 0.90625z"
    />
  </g
  >
  <metadata
    >
    <rdf:RDF
      >
      <cc:Work
        >
        <dc:format
          >image/svg+xml</dc:format
        >
        <dc:type
            rdf:resource="http://purl.org/dc/dcmitype/StillImage"
        />
        <cc:license
            rdf:resource="http://creativecommons.org/licenses/publicdomain/"
        />
        <dc:publisher
          >
          <cc:Agent
              rdf:about="http://openclipart.org/"
            >
            <dc:title
              >Openclipart</dc:title
            >
          </cc:Agent
          >
        </dc:publisher
        >
        <dc:title
          >red not OK / failure symbol</dc:title
        >
        <dc:date
          >2011-09-20T10:43:26</dc:date
        >
        <dc:description
          >red not OK / failure symbol</dc:description
        >
        <dc:source
          >https://openclipart.org/detail/161515/red-not-ok--failure-symbol-by-antares42</dc:source
        >
        <dc:creator
          >
          <cc:Agent
            >
            <dc:title
              >Antares42</dc:title
            >
          </cc:Agent
          >
        </dc:creator
        >
        <dc:subject
          >
          <rdf:Bag
            >
            <rdf:li
              >OK</rdf:li
            >
            <rdf:li
              >button</rdf:li
            >
            <rdf:li
              >failure</rdf:li
            >
            <rdf:li
              >green</rdf:li
            >
            <rdf:li
              >icon</rdf:li
            >
            <rdf:li
              >not OK</rdf:li
            >
            <rdf:li
              >red</rdf:li
            >
            <rdf:li
              >success</rdf:li
            >
          </rdf:Bag
          >
        </dc:subject
        >
      </cc:Work
      >
      <cc:License
          rdf:about="http://creativecommons.org/licenses/publicdomain/"
        >
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Reproduction"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Distribution"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
        />
      </cc:License
      >
    </rdf:RDF
    >
  </metadata
  >
</svg
>

    <p>اطلاعاتی برای نمایش وجود ندارد</p>
  </div>
</template>
<script>
import { BButton,BModal,BFormGroup,BFormTextarea } from "bootstrap-vue";
export default {
  components: {
    BButton,BModal,BFormGroup,BFormTextarea 
  },
  props: {
    settings: Object,
    headers: Array,
    list: Array,
    field:String,
    likeRoute:String,
    ReplyByAdminRoute:String,
  },
  methods: {
    changeStatus(id){
      this.$axios.post(this.likeRoute+"/ChangeStatus?id="+id).then((response) => {
        this.$toast.success(response.data.message);
        this.list.forEach((item)=>{
          if(item.id==id){
            item.isShow=!item.isShow
          }
        })
      })

      // 
    },
    sendAnswer(){
     
     let pack={
        replyTo:this.answerId,
        text:this.answer,
        isShow:true,
      }
        
      pack['commentFor']=this.fieldId
    //   ارسال کامنت
      this.$axios.post(this.ReplyByAdminRoute, pack).then((response) => {
        this.$emit("changeReplatTo",null);
    this.showModal=false;
        return this.$toast.success(response.data.message);
      }).catch((error) =>{
        let arrayError = error.response.data.message.split("|");
            arrayError.forEach((err, index) => {
                this.$toast.error(err, {
                    timeout: 1000 * (index + 4),
                    pauseOnHover: true
                });
            });19
      })
    },
    answerModal(id,fieldId){
      this.answerId=id;
      this.fieldId=fieldId
      this.answer=null;
      this.showModal=true;
    },
     sendReact(type,id){
      
        this.$axios.post(`${this.likeRoute}/${type=='disLike'?'DisLike':'Like'}?id=${id}`).then(res=>{
          this.$toast.success(res.data.message);
          this.comment[type]++;
          }).catch(error=>{
          this.$toast.error(error.response.data.message);

          })
    },
    getValue(selectedIn, value) {
   
      let result = this.settings[selectedIn].filter((item) => {
        if (item.id == value) {
          return item;
        }
      });
      if (result.length == 0) return "";
      return result[0].name != undefined ? result[0].name : result[0].label;
    },
    showEditModal(item) {
      this.$emit("showEditModal", item);
    },
    deleteItem(id) {
      this.$emit("deleteItem", id);
    }
  },
  data(){
    return{
      fieldId:null,
      answerId:null,
      answer:null,
      showModal:false,
      baseMediaUrl: "http://test.mmc.ir/",
    }
  }
};
</script>
<style scoped>
.tableButtons {
  margin-right: 10px;
}
.image_in_table{
  width:50px;
}
a.innerRouteButton {
  cursor: pointer;
    background: #3fc115;
    padding: 0.375rem 0.75rem;    border-radius: 5px;
    color: white;
}
</style>
<style>
fieldset#answerModalBox div textarea {
    text-align: right;
}
fieldset#answerModalBox legend {
    text-align: right;
}
</style>