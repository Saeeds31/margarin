<template>
  <b-form class="SForm">
    <b-tabs v-if="showTabSection()" dir="rtl" content-class="mt-3">
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

            <template v-if="header.multiData && header.type == 'number'">
              <b-form-input
                v-model="bigData.persian[`${header.key}_fa`]"
                :type="'number'"
                :ref="header.key"
                :placeholder="header.placeholder"
              ></b-form-input>
            </template>
            <template v-if="header.multiData && header.type == 'boolean'">
              <b-form-checkbox
                switch
                v-model="bigData.persian[`${header.key}_fa`]"
              >
                {{ header.placeholder }}
              </b-form-checkbox>
            </template>
            <!-- <template v-if="header.multiData && header.type == 'image'">
              <b-form-file
                accept="image/*"
                v-model="image[header.key]"
                :state="Boolean(image[header.key])"
                :placeholder="header.placeholder"
                :drop-placeholder="header.placeholder"
              ></b-form-file>
            </template>

            <template v-if="header.multiData && header.type == 'video'">
              <b-form-file
                accept="video/*"
                v-model="video[header.key]"
                :state="Boolean(video[header.key])"
                :placeholder="header.placeholder"
                :drop-placeholder="header.placeholder"
              ></b-form-file>
            </template> -->
            <template v-if="header.multiData && header.type == 'description'">
              <b-form-textarea
                v-model="bigData.persian[`${header.key}_fa`]"
                :placeholder="header.placeholder"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </template>
            <!-- <template v-if="header.multiData && header.type == 'file'">
              <b-form-file
                v-model="files[header.key]"
                :state="Boolean(files[header.key])"
                :placeholder="header.placeholder"
                :drop-placeholder="header.placeholder"
              >
              </b-form-file>
            </template> -->
            <template
              v-if="
                header.multiData && settings != null && header.type == 'select'
              "
            >
              <treeselect
                :multiple="header.multiple"
                :clearable="false"
                :searchable="false"
                v-model="bigData.persian[`${header.key}_fa`]"
                :options="settings[header.selectIN]"
              />
            </template>

            <template v-if="header.multiData && header.type == 'list'">
              <b-form-input
                v-model="listName['_fa']"
                placeholder="محتوا را وارد کنید "
                @keypress.enter.prevent="addToList(header.key, '_fa')"
              >
              </b-form-input>
              <b-button
                type="button"
                class="col-10 insertBtn"
                variant="info"
                @click.prevent="addToList(header.key, '_fa')"
                >افزودن</b-button
              >
              <table
                v-if="listValue[header.key + '_fa'] != undefined"
                class="table table-hover"
              >
                <tr>
                  <th>مقدار</th>
                  <th>حذف</th>
                </tr>
                <template>
                  <tr
                    v-for="item in listValue[header.key + '_fa']"
                    :key="item.id"
                    :id="`tr${item.id}_fa`"
                  >
                    <td>
                      {{ item.value }}
                    </td>
                    <td>
                      <b-button
                        class="tableButtons"
                        variant="danger"
                        @click="
                          deleteValueFromInsertList(item.id, header.key, '_fa')
                        "
                        >حذف</b-button
                      >
                    </td>
                  </tr>
                </template>
              </table>
            </template>

            <template v-if="header.multiData && header.type == 'ckEditor'">
              <ckeditor
                name="DescriptionRtl"
                lan="fa"
                :config="ckEditorConfig"
                class="cke_rtl"
                v-model="bigData.persian[header.key + '_fa']"
              ></ckeditor>
            </template>
            <template v-if="header.multiData && header.type == 'menu_link'">
              <div>
                <b-form-input
                  :disabled="!show_Link"
                  v-model="menuLink"
                  :placeholder="header.placeholder"
                ></b-form-input>
              </div>
            </template>
            <template v-if="header.multiData && header.type == 'menu_select'">
              <treeselect
                :multiple="false"
                :clearable="false"
                :searchable="true"
                v-model="menuSelected"
                :options="settings[header.selectIN]"
              />
            </template>
            <template
              v-if="header.multiData && header.type == 'menu_detail_select'"
            >
              <treeselect
                :disabled="show_Link"
                :multiple="false"
                :clearable="false"
                :searchable="true"
                v-model="menuDetailSelected"
                :options="menuDetail"
              />
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
            <template v-if="header.multiData && header.type == 'number'">
              <b-form-input
                v-model="bigData.english[`${header.key}_en`]"
                type="'number'"
                :ref="header.key"
                :placeholder="header.placeholder"
              ></b-form-input>
            </template>
            <template v-if="header.multiData && header.type == 'boolean'">
              <b-form-checkbox
                switch
                v-model="bigData.english[`${header.key}_en`]"
              >
                {{ header.placeholder }}
              </b-form-checkbox>
            </template>
            <!-- <template v-if="header.multiData && header.type == 'image'">
              <b-form-file
                accept="image/*"
                v-model="image[header.key]"
                :state="Boolean(image[header.key])"
                :placeholder="header.placeholder"
                :drop-placeholder="header.placeholder"
              ></b-form-file>
            </template>

            <template v-if="header.multiData && header.type == 'video'">
              <b-form-file
                accept="video/*"
                v-model="video[header.key]"
                :state="Boolean(video[header.key])"
                :placeholder="header.placeholder"
                :drop-placeholder="header.placeholder"
              ></b-form-file>
            </template> -->
            <template v-if="header.multiData && header.type == 'description'">
              <b-form-textarea
                v-model="bigData.english[`${header.key}_en`]"
                :placeholder="header.placeholder"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </template>
            <!-- <template v-if="header.multiData && header.type == 'file'">
              <b-form-file
                v-model="files[header.key]"
                :state="Boolean(files[header.key])"
                :placeholder="header.placeholder"
                :drop-placeholder="header.placeholder"
              >
              </b-form-file>
            </template> -->
            <template
              v-if="
                header.multiData && settings != null && header.type == 'select'
              "
            >
              <treeselect
                :multiple="header.multiple"
                :clearable="false"
                :searchable="false"
                v-model="bigData.english[`${header.key}_en`]"
                :options="settings[header.selectIN]"
              />
            </template>

            <template v-if="header.multiData && header.type == 'list'">
              <b-form-input
                v-model="listName['_en']"
                placeholder="محتوا را وارد کنید "
                @keypress.enter.prevent="addToList(header.key, '_en')"
              >
              </b-form-input>
              <b-button
                type="button"
                class="col-10 insertBtn"
                variant="info"
                @click.prevent="addToList(header.key, '_en')"
                >افزودن</b-button
              >
              <table
                v-if="listValue[header.key + '_en'] != undefined"
                class="table table-hover"
              >
                <tr>
                  <th>مقدار</th>
                  <th>حذف</th>
                </tr>
                <template>
                  <tr
                    v-for="item in listValue[header.key + '_en']"
                    :key="item.id"
                    :id="`tr${item.id}_en`"
                  >
                    <td>
                      {{ item.value }}
                    </td>
                    <td>
                      <b-button
                        class="tableButtons"
                        variant="danger"
                        @click="
                          deleteValueFromInsertList(item.id, header.key, '_en')
                        "
                        >حذف</b-button
                      >
                    </td>
                  </tr>
                </template>
              </table>
            </template>

            <template v-if="header.multiData && header.type == 'ckEditor'">
              <ckeditor
                 name="Descriptionltr"
                lan="en"
               :config="ckEditorConfig1"
                class="cke_rtl"
                v-model="bigData.english[header.key + '_en']"
              ></ckeditor>
            </template>
            <template v-if="header.multiData && header.type == 'menu_link'">
              <div>
                <b-form-input
                  :disabled="!show_Link"
                  v-model="menuLink"
                  :placeholder="header.placeholder"
                ></b-form-input>
              </div>
            </template>
            <template v-if="header.multiData && header.type == 'menu_select'">
              <treeselect
                :multiple="false"
                :clearable="false"
                :searchable="true"
                v-model="menuSelected"
                :options="settings[header.selectIN]"
              />
            </template>
            <template
              v-if="header.multiData && header.type == 'menu_detail_select'"
            >
              <treeselect
                :disabled="show_Link"
                :multiple="false"
                :clearable="false"
                :searchable="true"
                v-model="menuDetailSelected"
                :options="menuDetail"
              />
            </template>
          </b-form-group>
        </template>
      </b-tab>
    </b-tabs>
    <div v-if="showBothSection()" id="bothLanguage">
      <template v-for="(header, index) in headers">
        <b-form-group
          v-if="!header.multiData"
          :key="index + 200"
          :label="header.type == 'setting' ? '' : header.name + ' :'"
          :class="header.style"
        >
          <template v-if="!header.multiData && header.type == 'string'">
            <b-form-input
              :disabled="header.disable ? header.disable : false"
              v-model="bigData.both[header.key]"
              :ref="header.key"
              :placeholder="header.placeholder"
            ></b-form-input>
          </template>
          <template v-if="!header.multiData && header.type == 'date'">
            <date-picker
              format="YYYY-MM-DD"
              display-format="jYYYY-jMM-jDD"
              id="chooseDate"
              v-model="bigData.both[header.key]"
            />
          </template>
          <template v-if="!header.multiData && header.type == 'boolean'">
            <b-form-checkbox switch v-model="bigData.both[header.key]">
              {{ header.placeholder }}
            </b-form-checkbox>
          </template>
          <template v-if="!header.multiData && header.type == 'image'">
            <b-form-file
              accept="image/*"
              v-model="image[header.key]"
              @change="event_image_change"
              :id="header.key"
              :state="Boolean(image[header.key])"
              :placeholder="header.placeholder"
              :drop-placeholder="header.placeholder"
            ></b-form-file>
            <enlargeable-image
              class="photoPreview"
              v-if="mode == 'create' && previewImage[header.key] != undefined"
              :src="previewImage[header.key]"
              :src_large="previewImage[header.key]"
            />

            <enlargeable-image
              class="photoPreview"
              v-if="mode == 'edit' && bigData.both[header.key] != ''"
              :src="baseMediaUrl + bigData.both[header.key]"
              :src_large="baseMediaUrl + bigData.both[header.key]"
            />

            <!-- <img
              class="photoPreview"
              v-if="mode == 'edit' && bigData.both[header.key] != ''"
              :src="baseMediaUrl + bigData.both[header.key]"
            /> -->
          </template>
          <template v-if="!header.multiData && header.type == 'video'">
            <b-form-file
              accept="video/*"
              v-model="video[header.key]"
              :state="Boolean(video[header.key])"
              :placeholder="header.placeholder"
              :drop-placeholder="header.placeholder"
            ></b-form-file>
            <a
              class="videoPreviewButton"
              v-if="mode == 'edit' && bigData.both[header.key] != ''"
              :href="baseMediaUrl + bigData.both[header.key]"
              target="_blank"
              >مشاهده</a
            >
          </template>
          <template v-if="!header.multiData && header.type == 'description'">
            <b-form-textarea
              :disabled="header.disable ? header.disable : false"
              v-model="bigData.both[header.key]"
              :placeholder="header.placeholder"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </template>
          <template v-if="!header.multiData && header.type == 'number'">
            <b-form-input
              :disabled="header.disable ? header.disable : false"
              v-model="bigData.both[header.key]"
              :type="'number'"
              :ref="header.key"
              :placeholder="header.placeholder"
            ></b-form-input>
          </template>
          <template v-if="!header.multiData && header.type == 'file'">
            <b-form-file
              v-model="files[header.key]"
              :state="Boolean(files[header.key])"
              :placeholder="header.placeholder"
              :drop-placeholder="header.placeholder"
            >
            </b-form-file>
            <a
              class="videoPreviewButton"
              v-if="mode == 'edit' && bigData.both[header.key] != ''"
              :href="baseMediaUrl + bigData.both[header.key]"
              target="_blank"
              >دریافت</a
            >
          </template>
          <template
            v-if="
              !header.multiData && settings != null && header.type == 'select'
            "
          >
            <treeselect
              :multiple="header.multiple"
              :clearable="false"
              :searchable="false"
              v-model="bigData.both[header.key]"
              :options="settings[header.selectIN]"
            />
          </template>
          <template v-if="!header.multiData && header.type == 'list'">
            <b-form-input
              v-model="listName[header.key]"
              placeholder="محتوا را وارد کنید "
              @keypress.enter="addToList(header.key)"
            >
            </b-form-input>
            <b-button
              type="button"
              class="col-10 insertBtn"
              variant="info"
              @click.prevent="addToList(header.key)"
              >افزودن</b-button
            >
            <table
              v-if="listValue[header.key] != undefined"
              class="table table-hover"
            >
              <tr>
                <th>مقدار</th>
                <th>حذف</th>
              </tr>
              <template>
                <tr
                  v-for="item in listValue[header.key]"
                  :key="item.id"
                  :id="`tr${item.id}`"
                >
                  <td>
                    {{ item.value }}
                  </td>
                  <td>
                    <b-button
                      class="tableButtons"
                      variant="danger"
                      @click="deleteValueFromInsertList(item.id, header.key)"
                      >حذف</b-button
                    >
                  </td>
                </tr>
              </template>
            </table>
          </template>
          <template v-if="!header.multiData && header.type == 'ckEditor'">
            <ckeditor
              :editor="editor"
               :config="ckEditorConfig"
              v-model="editorData"
            ></ckeditor>
          </template>
          <template v-if="!header.multiData && header.type == 'menu_link'">
            <div>
              <b-form-input
                :disabled="!show_Link"
                v-model="menuLink"
                :placeholder="header.placeholder"
              ></b-form-input>
            </div>
          </template>
          <template v-if="!header.multiData && header.type == 'menu_select'">
            <treeselect
              :multiple="false"
              :clearable="false"
              :searchable="true"
              v-model="menuSelected"
              :options="settings[header.selectIN]"
            />
          </template>
          <template
            v-if="!header.multiData && header.type == 'menu_detail_select'"
          >
            <treeselect
              :disabled="show_Link"
              :multiple="false"
              :clearable="false"
              :searchable="true"
              v-model="menuDetailSelected"
              :options="menuDetail"
            />
          </template>
        </b-form-group>
      </template>
    </div>
    <div v-if="!killButtons" class="form_btn col-12">
      <b-button
        v-if="disabled == false"
        @click.prevent="submitForm()"
        :class="{ disableLink: innerDisabled }"
        type="button"
        variant="primary"
        >{{ mode == "create" ? "ارسال" : "بروز رسانی" }}</b-button
      >
      <b-button v-else class="disableLink" type="button" variant="primary">{{
        mode == "create" ? "در حال ارسال" : "درحال بروز رسانی"
      }}</b-button>
    </div>
  </b-form>
</template>
<script>
import EnlargeableImage from "@diracleo/vue-enlargeable-image";
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import datePicker from "vue-persian-datetime-picker";

import {
  BTabs,
  BTab,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BRow,
  BFormFile,
  BFormCheckbox,
  BCol,
  BFormTextarea
} from "bootstrap-vue";

export default {
  methods: {

    event_image_change(e) {
      // return  console.log(e)
      const file = e.target.files[0];
      if (this.mode == "create") {
        this.previewImage[e.target.id] = URL.createObjectURL(file);
        console.log(e.target.files[0]);
        console.log(e.target.id);
        console.log(this.previewImage[e.target.id]);
      }
    },
    deleteValueFromInsertList(id, key, lang) {
      this.listValue[key + lang] = this.listValue[key + lang].filter((item) => {
        return item.id != id;
      });
      document.getElementById(`tr${id + lang}`).style.display = "none";
    },
    addToList(key, lang) {
      this.helpIndex[lang]++;
      if (this.listValue[key + lang] == undefined) {
        this.listValue[key + lang] = [];
      }
      this.listValue[key + lang].push({
        value: this.listName[lang],
        id: this.helpIndex[lang]
      });
      this.listName[lang] = "";
    },
    showTabSection() {
      if (this.mode == "edit") {
        if (this.killButtons == true) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    showBothSection() {
      console.log(this.bigData);
      if (this.mode == "edit") {
        if (Object.keys(this.bigData.both).length > 1) {
          return true;
        } else {
          return false;
        }
      } else {
        let allow = false;
        this.headers.forEach((header) => {
          if (header.multiData == false && header.type != "setting") {
            allow = true;
            return;
          }
        });
        return allow;
      }
    },
    async uploadImage(key) {
      let url = "";
      console.log(2.1);

      let formData = new FormData();
      formData.append("files", this.image[key]);
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
          `Files/UploadImage?folderName=${this.folderRoute}Image`,
          formData,
          config
        )
        .then((response) => {
          console.log(2.2);

          console.log(response);
          url = response.data.data.filename;
        })
        .catch(() => {
          this.$toast.error(
            "خطایی در آپلود ویدیو به وجود آمده است , لطفا صفحه را بروز رسانی کنید"
          );
        });
      return url;
    },
    async uploadFile(key, type) {
      let url = "";
      let formData = new FormData();
      if (type == "video") {
        formData.append("file", this.video[key]);
      } else {
        formData.append("file", this.files[key]);
      }

      var config = {
        onUploadProgress: () => {
          if (this.innerDisabled == false) {
            if (type == "video") {
              this.$toast.info("درحال آپلود ویدیو");
            } else {
              this.$toast.info("درحال آپلود فایل");
            }
          }
          this.innerDisabled = true;
        }
      };
      await this.$axios
        .post(
          `Files/UploadFile?SavePath=${this.folderRoute}${
            type == "video" ? "Video" : "File"
          }`,
          formData,
          config
        )
        .then((response) => {
          console.log(response);
          url = response.data.data;
        })
        .catch(() => {
          this.$toast.error(
            "خطایی در آپلود تصویر به وجود آمده است , لطفا صفحه را بروز رسانی کنید"
          );
        });
      return url;
    },
    async submitForm() {
      for (const header of this.headers) {
        if (header.type == "image") {
          if (this.image[header.key] != undefined) {
            console.log(1);
            this.bigData.both[header.key] = await this.uploadImage(header.key);
          } else {
            if (this.mode != "edit") this.bigData.both[header.key] = "";
          }
        } else if (header.type == "video") {
          if (this.video[header.key] != undefined) {
            this.bigData.both[header.key] = await this.uploadFile(
              header.key,
              "video"
            );
          } else {
            if (this.mode != "edit") this.bigData.both[header.key] = "";
          }
        } else if (header.type == "file") {
          if (this.files[header.key] != undefined) {
            this.bigData.both[header.key] = await this.uploadFile(
              header.key,
              "file"
            );
          } else {
            if (this.mode != "edit") this.bigData.both[header.key] = "";
          }
        }
      }
      let pack = {
        mode: this.mode,
        data: {
          ...this.bigData.persian,
          ...this.bigData.english,
          ...this.bigData.both
        }
      };
      // console.log(this.ckEditor)
      // console.log(this.listValue)
      // if (Object.keys(this.ckEditor).length > 0) {
      //   pack.data = {
      //     ...pack.data,
      //     ...this.ckEditor
      //   };
      // }
      if (Object.keys(this.listValue).length > 0) {
        let result = {};
        for (const key in this.listValue) {
          let helpArray = [];
          this.listValue[key].forEach((item) => {
            helpArray.push(item.value);
          });
          result[key] = helpArray.toString();
          helpArray = [];
        }
        pack.data = {
          ...pack.data,
          ...result
        };
      }
      this.innerDisabled = false;
      this.$emit("submit", pack);
      console.log(3);

      // let form_data = new FormData();
      // this.headers.forEach((header) => {
      //   if (header.type == "string") {
      //     if (header.key == "publish_year") {
      //       if (
      //         this.string[header.key] == undefined ||
      //         this.string[header.key] == ""
      //       ) {
      //         form_data.append(`${header.key}`, "بیتا");
      //       } else {
      //         form_data.append(`${header.key}`, this.string[header.key]);
      //       }
      //     } else {
      //       form_data.append(`${header.key}`, this.string[header.key]);
      //     }
      //   } else if (header.type == "description") {
      //     form_data.append(`${header.key}`, this.description[header.key]);
      //   } else if (header.type == "boolean") {
      //     form_data.append(
      //       `${header.key}`,
      //       this.booleans[header.key] == true ? 1 : 0
      //     );
      //   } else if (header.type == "image" || header.type == "file") {
      //     form_data.append(
      //       `${header.key}`,
      //       this.files[header.key] != undefined ? this.files[header.key] : ""
      //     );
      //   } else if (header.type == "select") {
      //     if (header.multiple) {
      //       if (this.selected[header.key] != undefined) {
      //         this.selected[header.key].forEach((item, index) => {
      //           console.log(item);
      //           form_data.append(`${header.key}[${index}]`, item);
      //         });
      //       }
      //     } else {
      //       form_data.append(
      //         `${header.key}`,
      //         this.selected[header.key] != undefined
      //           ? this.selected[header.key]
      //           : ""
      //       );
      //     }
      //   } else if (header.type == "list") {
      //     if (
      //       this.listValue[header.key] != undefined &&
      //       this.listValue[header.key].length > 0
      //     ) {
      //       this.listValue[header.key].forEach((item, index) => {
      //         form_data.append(`${header.key}[${index}]`, item.value);
      //       });
      //     }
      //   } else if (header.type == "ckEditor") {
      //     form_data.append(`${header.key}`, this.editorData);
      //   } else if (header.type == "menu_link") {
      //     form_data.append(
      //       `${header.key}`,
      //       this.menuSelected == null ? this.menuLink : ""
      //     );
      //   } else if (header.type == "menu_select") {
      //     if (this.menuSelected == null) {
      //       form_data.append(`linkable_type`, "");
      //     } else {
      //       this.settings.linksData.forEach((link) => {
      //         if (link.label == this.menuSelected) {
      //           form_data.append(`linkable_type`, link.linkable_type);

      //           if (link.models == null) {
      //             form_data.append(`linkable_id`, "");
      //           } else {
      //             form_data.append(`linkable_id`, this.menuDetailSelected);
      //           }
      //         }
      //       });
      //     }
      //     form_data.append(`group_id`, this.settings.group_id);
      //   }
      // });
      // this.$emit("submit", form_data);
    }
  },
  components: {
    BForm,
    BTabs,
    BTab,
    BFormGroup,
    BFormInput,
    BButton,
    BRow,
    BFormFile,
    BFormCheckbox,
    EnlargeableImage,
    Treeselect,
    BCol,
    BFormTextarea,
    datePicker
  },
  props: {
    bigData: Object,
    mode: String,
    killButtons: { type: Boolean, default: false },
    folderRoute: String,
    headers: Array,
    disabled: Boolean,
    settings: Object,
    edit_item: Object
  },
  watch: {
    bigData(newVal) {
      if (newVal.persian["keyWords_fa"]) {
        this.listValue["keyWords_fa"] = [];
        let helpArray=newVal.persian["keyWords_fa"].split(",")
        helpArray.forEach((item, index) => {
          this.listValue['keyWords_fa'].push({
            value: item,
            id: index
          });
          this.helpIndex['_fa'] = index + 1;
        });
      }
      if (newVal.english["keyWords_en"]) {
        this.listValue['keyWords_en'] = [];
        let helpArray=newVal.english["keyWords_en"].split(",")

        helpArray.forEach((item, index) => {
          this.listValue['keyWords_en'].push({
            value: item,
            id: index
          });
          this.helpIndex['_en'] = index + 1;
        });
      }
    }
  },
  data() {
    return {
     ckEditorConfig:{ contentsLangDirection: 'rtl',
    language : 'fa',
    filebrowserImageUploadUrl : 'http://www.blogtest.ir/api/files/uploadckfile',
    
     } ,
     
     ckEditorConfig1:{ contentsLangDirection: 'ltr',
    language : 'fa',
    filebrowserImageUploadUrl : 'http://www.blogtest.ir/api/files/uploadckfile',
    
     } ,
      previewImage: {},
      innerDisabled: false,
      baseMediaUrl: "http://blogtest.ir/",
      image: {},
      video: {},
      string: {},
      description: {},
      menuLink: null,
      menuDetail: [],
      menuDetailSelected: null,
      show_Link: true,
      menuSelected: null,
      ckEditor: {},
      files: {},
      booleans: {},
      selected: {},
      listName: {
        _fa: null,
        _en: null
      },
      listValue: {},
      helpIndex: {
        _fa: 1,
        _en: 1
      },
      // editor: ClassicEditor,
      editorData: "<p>محتوا را وارد کنید</p>",
      editorConfig: {
        language: "fa"
      }
    };
  }
};
</script>

<style scoped>
.disableLink {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
.image_in_form {
  width: 50%;
  transform: translateX(-50%);
}
.SForm {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  direction: rtl;
}
.insertBtn {
  margin: 20px 25%;
  width: 50%;
}
.mrbt {
  margin: 10px 0;
}
</style>
<style>
.SForm .col-form-label {
  text-align: right;
}
.SForm .tab-content > .active {
  display: flex;
  flex-wrap: wrap;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #ffffff;
  background-color: #b11015;
  border-color: #b11015;
}
.nav-tabs {
  border-bottom: 2px solid #b11015;
}
textarea.form-control {
  overflow-y: auto !important;
}
.form-control:focus {
  border-color: #f7941e;
  box-shadow: 0 0 0 0.2rem rgb(247 148 30);
}

.persianTab {
  background: #f8f8f847;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 0 30px #00000047;
}
.englishTab {
  background: #eae9e947;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 0 30px #00000063;
}
div#bothLanguage {
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  background: #edededd1;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 30px #0000003d;
  width: 100%;
}
.form_btn {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.form_btn button {
  width: 40%;
}
.photoPreview {
  width: 150px;
  margin: 30px 0;
  box-shadow: 0 0 40px #00000054;
  float: right;
  cursor: zoom-in;
}
</style>
