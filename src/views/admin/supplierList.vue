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

    <div v-if="items" class="mainTable">
      <table v-if="items.length > 0" class="table table-hover">
        <tr class="trHeader">
          <th>نام کامل</th>
          <th>ایمیل</th>
          <th>شماره تماس</th>
          <th>دسترسی</th>
        </tr>
        <tr class="trDetail" v-for="item in items" :key="item.id">
          <td>
            {{ `${item.name} ${item.lastName}` }}
          </td>
          <td>
            {{ item.email }}
          </td>
          <td>
            {{ item.phoneNumber }}
          </td>
          <td class="handlerSUp">
            <b-button variant="primary" @click="showSendModal(item.id)"
              >پیام
            </b-button>
            <b-button variant="info" @click="showDetail(item)"
              >مشاهده
            </b-button>
            <b-button variant="dark" @click="report(item)">گزارش </b-button>
            <b-button variant="warning" @click="deleteSupplier(item.id)"
              >حذف
            </b-button>

            <b-button
              variant="danger"
              @click="adminConfirm(item.id, !item.isAdminConfirm)"
              v-if="item.isAdminConfirm"
              >غیرفعال کردن</b-button
            >
            <b-button
              variant="success"
              @click="adminConfirm(item.id, !item.isAdminConfirm)"
              v-else
              >فعال کردن</b-button
            >
          </td>
        </tr>
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
      id="categoryModal"
      hide-footer
      ref="categoryModal"
      no-close-on-backdrop
      v-model="showModal"
      @close="resetModal()"
      title="مشاهده جزئیات"
    >
      <div v-if="item" id="supplierContent">
        <img :src="item.image" :alt="item.title" />
        <div class="infoGroup">
          <div>
            <span>نام کامل :</span>
            <p>
              {{
                `${item.gender == "male" ? "آقای" : "خانم"} ${item.name} ${
                  item.lastName
                }`
              }}
            </p>
          </div>
          <div>
            <span>کدملی :</span>
            <p>
              {{ item.shenaseMelli }}
            </p>
          </div>
        </div>
        <div class="infoGroup">
          <div>
            <span>آدرس :</span>
            <p>
              {{
                `استان ${item.province}- شهر ${item.city} - ${item.address}- کدپستی ${item.postalCode}`
              }}
            </p>
          </div>
          <div>
            <span>ایمیل :</span>
            <p>
              {{ item.email }}
            </p>
          </div>
        </div>
        <div class="infoGroup">
          <div>
            <span>شماره تماس :</span>
            <p>
              {{ item.phoneNumber }}
            </p>
          </div>
          <div>
            <span>شماره ثابت :</span>
            <p>
              {{ item.phone }}
            </p>
          </div>
        </div>
        <div class="infoGroup">
          <div>
            <span>کد سامانه تجارت :</span>
            <p>
              {{ item.samaneTejaratCode }}
            </p>
          </div>
          <div>
            <span> نام نماینده : </span>
            <p>
              {{ item.namayendeName }}
            </p>
          </div>
        </div>
        <div class="infoGroup">
          <div>
            <span> حقیقی یا حقوقی : </span>
            <p>
              {{ item.isCompany ? "حقوقی" : "حقیقی" }}
            </p>
          </div>
          <div>
            <span> نام حقوقی : </span>
            <p>
              {{ item.companyName }}
            </p>
          </div>
        </div>
        <div class="infoGroup">
          <div></div>
          <div></div>
        </div>

        <div class="infoGroup">
          <div>
            <span> نام معرف : </span>
            <p>
              {{ item.relatedName }}
            </p>
          </div>
          <div>
            <template v-if="item.isCompany">
              <span> کد اقتصادی : </span>
              <p>
                {{ item.codeEqtesadi }}
              </p>
            </template>
          </div>
        </div>

        <b-button
          variant="primary"
          v-if="
            item.resumeFile && item.resumeFile.toString().includes('supplier')
          "
        >
          <a target="_blank" :href="`https://test.mmc.ir/${item.resumeFile}`"
            >دریافت رزومه</a
          >
        </b-button>
      </div>
    </b-modal>
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
import { BModal, BButton, BOverlay, BSpinner } from "bootstrap-vue";
export default {
  components: { BModal, BButton, BOverlay, BSpinner },
  data() {
    return {
      items: null,
      apiRoute: "Users/GetSuppliers",
      sendModal: false,
      showModal: false,
      status: true,
      item: null,
      userId: null,
      message: "",
    };
  },
  methods: {
    report(item) {
      this.$axios
        .get(`SuppliersNews/GetSupplierRequestsReport?id=${item.id}`, {
          headers: {
            "Content-Disposition": "attachment; filename=XYZ.xlsx",
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
          responseType: "arraybuffer",
        })
        .then((response) => {
          const temp = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = temp;
          link.setAttribute("download", "file.xlsx"); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        });
    },
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
    deleteSupplier(id) {
      window
        .swal({
          title: "کاربر حذف شود؟",
          text: "این عمل بازگشت پذیر نیست",
          icon: "warning",

          showCancelButton: true,
          showConfirmButton: true,
          dangerMode: true,
          buttons: ["خیر", "بله"],
        })
        .then((willDelete) => {
          if (willDelete) {
            this.$axios
              .delete(`Users/${id}`)
              .then((response) => {
                this.$toast.success(response.data.message);

                this.items = this.items.filter((item) => item.id != id);
              })
              .catch((error) => {
                this.$toast.error(error.response.data.message);
              });
          }
        })
        .catch(() => {});
    },
    showDetail(item) {
      this.item = item;
      this.showModal = true;
    },
    resetModal() {
      this.showModal = false;
      this.item = null;
    },
    loadItems() {
      this.$axios.get(this.apiRoute).then((res) => {
        this.status = false;
        this.items = res.data.data;
      });
    },
    adminConfirm(id, status) {
      this.$axios
        .post(`Users/ChangeSupplierAdminConfirm?id=${id}`)
        .then((res) => {
          let findItem = this.items.find((item) => item.id == id);
          if (findItem) {
            findItem.isAdminConfirm = status;
          }
          this.$toast.success(res.data.message);
        });
    },
  },
  mounted() {
    this.loadItems();
  },
  watch: {
    item(newVal) {
      this.bigData = newVal;
    },
  },
};
</script>
<style scoped>
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
.handlerSUp {
  display: flex;
  gap: 10px;
}
</style>
