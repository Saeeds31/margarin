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
      <table v-if="items.length > 0" class="table table-hover">
        <tr class="trHeader">
          <template v-for="(header, index) in headers">
            <th v-if="header.show_in_table == true" :key="index">
              {{ header.name }}
            </th>
          </template>
        </tr>
        <template v-if="items.length > 0">
          <tr class="trDetail" v-for="item in items" :key="item.id">
            <template v-for="(header, index) in headers">
              <td
                v-if="header.type != 'setting' && header.show_in_table == true"
                :key="index + 20"
              >
                <span v-if="header.type == 'string'">{{
                  header.multiData == true
                    ? item[`${header.key + "_fa"}`]
                    : item[`${header.key}`]
                }}</span>
              </td>
              <td v-if="header.type == 'setting'" :key="index + 20">
                <b-button
                  class="tableButtons"
                  v-if="header.edit == true"
                  variant="primary"
                  @click="showEditModal(item.id)"
                  >{{
                    header.editLabel ? header.editLabel : "ویرایش"
                  }}</b-button
                >
                <b-button
                  class="tableButtons"
                  v-if="header.delete == true"
                  variant="danger"
                  @click="deleteItem(item.id)"
                  >{{
                    header.deleteLabel ? header.deleteLabel : "حذف"
                  }}</b-button
                >
              </td>
            </template>
          </tr>
        </template>
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
      :title="mode == 'create' ? 'افزودن ' + title : ' ویرایش ' + title"
    >
      <b-form class="SForm">
        <b-tabs dir="rtl" content-class="mt-3">
          <b-tab class="persianTab" title="persian" active>
            <template v-for="(header, index) in headers">
              <b-form-group
                v-if="header.multiData"
                :key="index + 200"
                :label="header.type == 'setting' ? '' : header.name + ' :'"
                :class="header.style"
              >
                <template v-if="header.multiData && header.type == 'string'">
                  <b-form-input
                    v-model="bigData.persian[`${header.key}_fa`]"
                    :ref="header.key"
                    :placeholder="header.placeholder"
                  ></b-form-input>
                </template>
              </b-form-group>
            </template>
          </b-tab>
          <b-tab class="englishTab" title="English">
            <template v-for="(header, index) in headers">
              <b-form-group
                v-if="header.multiData"
                :key="index + 200"
                :label="header.type == 'setting' ? '' : header.name + ' :'"
                :class="header.style"
              >
                <template v-if="header.multiData && header.type == 'string'">
                  <b-form-input
                    v-model="bigData.english[`${header.key}_en`]"
                    :ref="header.key"
                    :placeholder="header.placeholder"
                  ></b-form-input>
                </template>
              </b-form-group>
            </template>
          </b-tab>
        </b-tabs>   
        <template v-for="(header, index) in headers">
              <b-form-group
                v-if="header.type=='image'"
                :key="index + 200"
                :label="header.type == 'setting' ? '' : header.name + ' :'"
                :class="header.style"
              >
          
              <b-form-file
              accept="image/*"
              v-model="image"
              @change="event_image_change"
              :state="Boolean(image)"
              :placeholder="header.placeholder"
              :drop-placeholder="header.placeholder"
            ></b-form-file>
            <enlargeable-image
            v-if="image!=null"
              class="photoPreview"
              :src="previewImage"
              :src_large="previewImage"
            />
           </b-form-group>
        </template>
        <div class="form_btn col-12">
          <b-button
            v-if="disabled == false"
            @click.prevent="submit()"
            type="button"
            variant="primary"
            >{{ mode == "create" ? "ارسال" : "بروز رسانی" }}</b-button
          >
          <b-button
            v-else
            class="disableLink"
            type="button"
            variant="primary"
            >{{
              mode == "create" ? "در حال ارسال" : "درحال بروز رسانی"
            }}</b-button
          >
        </div>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import SInputs from "@/components/admin/shared/sInputs.vue";
import EnlargeableImage from "@diracleo/vue-enlargeable-image";
import STable from "@/components/admin/shared/sTable.vue";
import { BModal, BButton, BOverlay, BSpinner,BFormInput,BFormGroup,BTab,BTabs,BForm,BFormFile } from "bootstrap-vue";
export default {
  components: { SInputs, BModal, BButton, STable, BOverlay, BSpinner,BFormInput,BFormGroup,BTab,BTabs ,BForm,BFormFile,EnlargeableImage},
  data() {
    return {
      image:null,previewImage:null,
      disabled: false,
      headers: [
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "عنوان مواد اولیه",
          type: "string",
          multiData: true,
          name: "عنوان",
          key: "title"
        },
        {
          style: "col-12",
          show_in_table: true,
          placeholder: "میزان مواد اولیه",
          type: "string",
          multiData: true,
          name: "میزان",
          key: "amount"
        },


        
        {
          style: "col-12",
          show_in_table: false,
          placeholder: "تصویر مواد اولیه با ارتفاع و عرض 64 پیکسل",
          type: "image",
          multiData: false,
          name: "تصویر",
          key: "image"
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
        english: {},innerDisabled:false,
        both: {}
      },
      title: "مواد اولیه",
      editedId: null,
      apiRoute: "Ingridients",
      recipeId: null,
      items: null,
      showModal:false,
      mode:'create',
        editedId:null,
  status:true,
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.recipeId = this.$route.query.id;
      this.loadItems();
    } else {
      this.$router.push("/admin-panel/recipes");
    }
  },
  methods: { event_image_change(e) {
      const file = e.target.files[0];
        this.previewImage= URL.createObjectURL(file);
    },
    loadItems() {
      this.$axios
     .get("Ingridients/GetProductFeature?ProoductId=" + this.$route.query.id)
        .then((resp) => {
          this.items = resp.data.data;
          this.status=false;
        });
    },
    convertToBigData(data) {
      let pack = {
        persian: {},
        english: {},
        both: {}
      };
      for (const key in data) {
        if (key.toString().endsWith("_fa")) {
          pack.persian[key] = data[key];
        } else if (key.toString().endsWith("_en")) {
          pack.english[key] = data[key];
        } else {
          pack.both[key] = data[key];
        }
      }
      return pack;
    },
  
    deleteItem(id) {
      window
        .swal({
          title: "آیتم حذف شود؟",
          text: "این عمل بازگشت پذیر نیست",
          icon: "warning",

          showCancelButton: true,
          showConfirmButton: true,
          dangerMode: true,
          buttons: ["خیر", "بله"]
        })
        .then((willDelete) => {
          if (willDelete) {
            this.$axios
              .delete(this.apiRoute + `/${id}`)
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
    showEditModal(id) {
      this.editedId = id;
      this.status = true;
      this.$axios.get(`${this.apiRoute}/${id}`).then((response) => {
        this.status = false;
        this.bigData = this.convertToBigData(response.data.data);
      });
      this.mode = "edit";
      this.showModal = true;
    },
    setErrorResponse(error) {
      let arrayError = error.split("|");
      arrayError.forEach((err, index) => {
        this.$toast.error(err, {
          timeout: 1000 * (index + 4),
          pauseOnHover: true
        });
      });
    },
  
     async uploadImage() {
      let url = "";

      let formData = new FormData();
      formData.append("files", this.image);
      var config = {
        onUploadProgress: () => {
          if (this.innerDisabled == false) {
            this.$toast.info("درحال آپلود تصویر");
          }
          this.innerDisabled = true;
        }
      };
      await this.$axios
        .post(
          `Files/UploadImage?folderName=RecipeImage`,
          formData,
          config
        )
        .then((response) => {
          url = response.data.data.filename;
        })
        .catch(() => {
          this.$toast.error(
            "خطایی در آپلود ویدیو به وجود آمده است , لطفا صفحه را بروز رسانی کنید"
          );
        });
      return url;
    },
    async submit() {
      if (this.image != undefined) {
            this.bigData.both.image = await this.uploadImage();
          } else {
            if (this.mode != "edit") this.bigData.both.image = "";
          }
        let pack = {
        mode: this.mode,
        data: {
          ...this.bigData.persian,
          ...this.bigData.english,
          ...this.bigData.both
        }
      };
      this.innerDisabled = false;
   
      this.disabled = true;
      if (pack.mode == "edit") {
        let putData = pack.data;
        putData.recipeId=this.recipeId
        putData.id = this.editedId;
         this.$axios
          .put(this.apiRoute, JSON.stringify(putData), {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json"
            }
          })
          .then((response) => {
            this.$toast.success(response.data.message);
            
            this.showModal = false;
            this.resetModal();
          })
          .catch((error) => {
            this.disabled = false;

            this.setErrorResponse(error.response.data.message);
          });
      } else {
        pack.data.recipeId=this.recipeId
    
         this.$axios
          .post(this.apiRoute, JSON.stringify(pack.data), {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json"
            }
          })
          .then((response) => {
            pack.data.id = response.data.data.id;
            this.$toast.success(response.data.message);
            this.items.push(pack.data);
            this.showModal = false;
            this.resetModal();
          })
          .catch((error) => {
            this.disabled = false;

            this.setErrorResponse(error.response.data.message);
          });
      }

    },
    // call in modal component
    resetModal() {
      this.editedId = null;

      this.disabled = false;
      this.image=null,
      this.mode = "create";
      this.bigData = {
        persian: {},
        english: {},
        both: {}
      };
      // this.headers.forEach((header) => {
      //     if (header.type == "boolean") {
      //         if (this.booleans[header.key] != undefined) {
      //             this.booleans[header.key] = false;
      //         }
      //     } else if (header.type == "image") {
      //         if (this.files[header.key] != undefined) {
      //             this.files[header.key] = null;
      //         }
      //     } else if (header.type == "select") {
      //         if (header.multiple == false) {
      //             this.selected[header.key] = null;
      //         } else {
      //             this.selected[header.key] = [];
      //         }
      //     } else if (header.type == "list") {
      //         this.listValue[header.key] = null;
      //     } else if (header.type == "specifications") {
      //         this.selectedSpecificationList = [];
      //         this.specification = null;
      //         this.selectedSpecification = {};
      //     } else if (header.type == "ckEditor") {
      //         this.editorData = null;
      //     } else if (header.type == "string") {
      //         if (this.string[header.key] != undefined) {
      //             this.string[header.key] = "";
      //         }
      //     } else if (header.type == "description") {
      //         if (this.description[header.key] != undefined) {
      //             this.description[header.key] = "";
      //         }
      //     }
      // });
    },

   
  },
  watch: {
    item(newVal) {
      this.bigData = newVal;
    }
  }
};
</script>
<style></style>
