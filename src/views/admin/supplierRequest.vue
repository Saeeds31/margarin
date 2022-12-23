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
    <div id="headersList">
      <router-link to="/admin-panel/supplier-news"> بازگشت </router-link>
      <h3>لیست درخواست ها</h3>
    </div>
    <div v-if="items" class="mainTable">
      <table v-if="items.length > 0" class="table table-hover">
        <tr class="trHeader">
          <th>نام کاربری</th>
          <th>فایل ارسالی</th>
          <th>ارسال پیام</th>
        </tr>
        <tr class="trDetail" v-for="item in items" :key="item.id">
          <td>
            {{ item.userName }}
          </td>
          <td>
            <a
              target="_blank"
              :href="`https://test.mmc.ir/${item.documentFile}`"
              >دانلود</a
            >
          </td>
          <td>
            <b-button @click="showSendModal(item.supplierId)" variant="success"
              >ارسال پیام</b-button
            >
          </td>
        </tr>
      </table> 
      <b-button :class="{disabled:disable==true}" v-if="items.length > 0" @click="getReport()" variant="primary">گزارش گیری</b-button>
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
              style="fill: #ff0000"
              inkscape:connector-curvature="0"
              d="m38.638 18.139c-1.798 1.5509-3.1446 4.3692-4.5312 5.8438-2.6315-2.177-3.8188-6.2358-6.6562-7.375-3.4407 0.91828-8.9042 4.1354-4.875 7.625 2.0576 3.0423 6.1945 5.7464 7.1562 8.9062-1.4673 3.7894-4.291 6.615-7.0312 9.375 1.3399 4.6754 7.7548 0.52478 10.344-1.75 2.0648-4.6338 3.5683 0.89824 5.4994 2.891 1.5405 6.2227 9.8042 4.4034 10.522-0.73944-2.8396-4.5489-6.7818-8.9244-9.521-13.402 1.0851-4.6542 5.6334-7.7704 6.6875-12.281-1.7893-3.1223-5.2813 0.35232-7.5938 0.90625z"
            />
            <path
              id="path3792"
              style="stroke: #a70000; fill: none"
              inkscape:connector-curvature="0"
              d="m38.638 18.139c-1.798 1.5509-3.1446 4.3692-4.5312 5.8438-2.6315-2.177-3.8188-6.2358-6.6562-7.375-3.4407 0.91828-8.9042 4.1354-4.875 7.625 2.0576 3.0423 6.1945 5.7464 7.1562 8.9062-1.4673 3.7894-4.291 6.615-7.0312 9.375 1.3399 4.6754 7.7548 0.52478 10.344-1.75 2.0648-4.6338 3.5683 0.89824 5.4994 2.891 1.5405 6.2227 9.8042 4.4034 10.522-0.73944-2.8396-4.5489-6.7818-8.9244-9.521-13.402 1.0851-4.6542 5.6334-7.7704 6.6875-12.281-1.7893-3.1223-5.2813 0.35232-7.5938 0.90625z"
            />
          </g>
          <metadata>
            <rdf:RDF>
              <cc:Work>
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                  rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                />
                <cc:license
                  rdf:resource="http://creativecommons.org/licenses/publicdomain/"
                />
                <dc:publisher>
                  <cc:Agent rdf:about="http://openclipart.org/">
                    <dc:title>Openclipart</dc:title>
                  </cc:Agent>
                </dc:publisher>
                <dc:title>red not OK / failure symbol</dc:title>
                <dc:date>2011-09-20T10:43:26</dc:date>
                <dc:description>red not OK / failure symbol</dc:description>
                <dc:source
                  >https://openclipart.org/detail/161515/red-not-ok--failure-symbol-by-antares42</dc:source
                >
                <dc:creator>
                  <cc:Agent>
                    <dc:title>Antares42</dc:title>
                  </cc:Agent>
                </dc:creator>
                <dc:subject>
                  <rdf:Bag>
                    <rdf:li>OK</rdf:li>
                    <rdf:li>button</rdf:li>
                    <rdf:li>failure</rdf:li>
                    <rdf:li>green</rdf:li>
                    <rdf:li>icon</rdf:li>
                    <rdf:li>not OK</rdf:li>
                    <rdf:li>red</rdf:li>
                    <rdf:li>success</rdf:li>
                  </rdf:Bag>
                </dc:subject>
              </cc:Work>
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
              </cc:License>
            </rdf:RDF>
          </metadata>
        </svg>

        <p>اطلاعاتی برای نمایش وجود ندارد</p>
      </div>
    </div>

    <b-modal
      id="sendmodal"
      hide-footer
      ref="sendModal"
      no-close-on-backdrop
      v-model="sendModal"
      @close="resetSendModal()"
      title="ارسال پیام"
    >
      <div id="sendMessageContent">
        <label for="">پیام خود را وارد کنید</label>
        <textarea
          style="width: 320px; height: 280px"
          v-model="message"
        ></textarea>
        <input type="submit" value="ارسال" @click="sendMessage()" />
      </div>
    </b-modal>
  </div>
</template>
<script>
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
      disable:false,
      status: true,
      headers: [
        {
          style: "col-12",
          show_in_table: true,
          type: "string",
          multiData: false,
          name: "عنوان خبر",
          key: "newsTitle",
        },
        {
          style: "col-12",
          show_in_table: true,
          type: "string",
          multiData: false,
          name: "نام کاربری",
          key: "userName",
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
          modal: true,
          buttonModalTitle: "درخواست ها",
          delete: true,
          editLabel: "ویرایش",
        },
      ],
      pageSize: 10,
      bigData: {
        persian: {},
        english: {},
        both: {},
      },
      userId: null,
      message: "",
      sendModal: false,
      title: "تامین کنندگان",
      editedId: null,
      apiRoute: "SuppliersNews",
    };
  },
  mounted() {
    this.getId();
    this.loadItems();
  },

  methods: {
    sendMessage() {
      let pack = {
        userId: this.userId,
        message: this.message,
      };
      this.$axios
        .post("SupplierMessage", JSON.stringify(pack), {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.resetSendModal();
          this.$toast.success(res.data.message);
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
    showSendModal(id) {
      this.userId = id;
      this.sendModal = true;
    },
    resetSendModal() {
      this.message = "";
      this.sendModal = false;
    },
    getReport(){
      this.disable=true;
      this.$axios.get(`SuppliersNews/GetReport?id=10${this.$route.query.newsId}`).then(res=>{
        console.log(res);
      this.disable=true;

      })
    },
    loadItems() {
      this.$axios
        .get(`SuppliersNews/GetNewsRequests?id=${this.$route.query.newsId}`)
        .then((res) => {
          this.status = false;

          this.items = res.data.data;
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
  },
};
</script>
<style>
div#headersList {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
div#sendMessageContent textarea {
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
</style>
