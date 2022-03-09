<template>
  <div id="buttons" class="d-flex justify-content-between">
    <button
      data-aos="zoom-in-up"
      data-aos-duration="2500"
      data-aos-delay="2500"
      data-aos-once="false"
      v-if="$root.sectionIndexHome != 1"
      class="reStyleToggle"
      @click="toggleMenu()"
      id="toggleMenu"
    >
      <i class="fa fa-bars"></i>
    </button>
    <button v-else @click="toggleMenu()" id="toggleMenu">
      <i class="fa fa-bars"></i>
    </button>
    <button
      @click="showModal = true"
      v-if="$root.sectionIndexHome == 1"
      id="phone"
      v-b-tooltip.hover
      :title="
        $cookie.get('ltrTheme')
          ? 'Sending a message to the management'
          : 'ارســــال پــــیام بــــه مدیــــریت'
      "
      class="hiddenInMobile"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="20"
        height="25"
        viewBox="0 0 30 30"
      >
        <image
          id="Layer_2572"
          data-name="Layer 2572"
          width="30"
          height="30"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAxVJREFUSEutl1uITVEYxw1yy/2SB7cR5R7lwa0YlweU+/VBHpCI8DDPygsvFC/iQRIpGXKXYsSMQkge1CBy52EwLuNu/H6nvafjOGfvfc6ZVb/Onr3++/uvb+1vr7WmpKGhoVkTtAnEGAH1UAcv4RF8yBW7JIvxFMRz4Rvsg5oEA5uHpj/8BDMpga/wAG7Dl8wY6cat6dwO69NE77heDmdjzLvSPxg6QQ/oEOibB1lf4fdZeozQWOFBmJPFwJEvSmAePtqOi1IYCd3gD/yGSngYijRuwx/HYGZEVr63WVAVoWkRGIQSZ3AM+O6dfs3PwXMFGm/kd2dEwLCrlovpcCuL1uyGw/sgKwsrrNrRwQB87CMch3qNr6d1xPlfQ1AGvzKEvoo+8CO4/4Lfy+BM2SYFA/Od34UqjR9zYUUmaZ8RDYXUdKU1nx8F3aEVWNV+SqcDc+8tAIvQr6VC4/tcDEniiuYp+M4+5dBb0eOgN5idA9TcAtPDT9X71Ro7536HSZrf9aoYYUv6LVSn3swvgNVsES+Gjg5I4xVcGDBJc4AnEgj9jOaDlf0ErGaLbQYMhDqNnXenu2eCgMMCbQJpak0YAG/hCFiQY2E8pKraIJthS4Jo09BcSqBTUgq+b5fcO8EzJlkGtaGx826nI4xqe+lck9BYme846y6Uvla7Mp2KCeryORlu5GGeVZq5O+1CtSEmqBXqgvC6GPNMY0v+Iri/RrWbdFrhrwo1z7Yf9yPYVegbE9S9diVUZ9G1514XyFzhGqXZjO20Gs+D+2tUc23eDxXwBgaBi8dUsGDvQTn8t7HkMtbMYjsKLgLFNHc1FxNnMTbjULCQi0NNYO4utQzOhIGjMg417iqHwR2mmPbPSSaJsWZNZW7mnkpqkhprPhsOQOdi0ubZHVCej7F+LvIu+HGfWtTY9tC5Nl9jA5YGmU8sMHM/tcpCjPXzCLsVPCjm03YjXucDhRqHZu652yDJ0ekkuiXwvSmMjeEKtQlWQ68c6XsCWQqNZ7ViM0738aDnDHi88d+ZtuAm4nLqFIdH39QzfwHruOtZJ12L2gAAAABJRU5ErkJggg=="
        />
      </svg>
    </button>
    <button
      v-if="$root.sectionIndexHome == 1"
      @click="showSearch = true"
      id="search"
      class="hiddenInMobile"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="20"
        height="25"
        viewBox="0 0 30 30"
      >
        <image
          id="Layer_2573"
          data-name="Layer 2573"
          width="30"
          height="30"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAlpJREFUSEvFl0tLVVEYhjtWWiQFhhekQSGSiag/QFSslAyESHKmDhIbVNRIcB44UQQHOggSBAcWkjjJoIEKEYg1SBDzgljSwJl4oayOzxt7H7aLffY+nPayBQ9nXb93fWuvy3di8Xj8REg6T3s11ME1KIAM+AHrMA9v4VOYIW97LEA4m44P4T4UhRj9Tfss9MFkKhNIJlzL4AEoS8WI0WeU8hPYChrrJ9zGgCE4k4aoO2SBzF34ksyGKdxMx5f/IOgdKlHti00/e17hEjp8gAsRCcvMFDTCH9OmKxyj4Q3URyjqmuog8zyZsAQ1OxtpDaMVsOM1Lo91Jl/BHRuqjs175t6RcCmVOoM5FoXHsN1ieqzjM2xRVKaXneXed3Xk8TMK3ZaF97CvU/PVKzxI4YFlYV2pV2HVK6xbqvN/CPcg2mVZWEutl23D63E7hReWhbXE5aAJ/E3aXKqYgSivStOPcSr0aCSShE9Reg23LXrdiu0RU1jlJpiwJKwjpHd920/4JJXvoMaC+GNsKqg4krzPor71ezgXofg0tm7AryBhtUV5feroaAXX/RzxC30e0bEf9Gqlm3R89Np9hizHY91eiZQs2NMO13e5koayNqmi029wCa7DLmjZEwFgUHibR8enoKNQmMIEPtKnFxRluqmWTCUcgF4m3RcragwSdgfnktEGuQm66C9qnGPsO79zoIBeRs3Y6jJ1t5x699PpD8BcKsKms2cdYX0z/ZsISwp7qsDd2ZnkF9MRDhPya5ewlvynM+nTxyWsZW6AYtBKxY9LWKugJZbn+bB0CEmyvRJthbuPAAAAAElFTkSuQmCC"
        />
      </svg>
    </button>
    <search @exit="exitSearch()" v-if="showSearch" />
    <router-link
      class="hiddenInMobile"
      v-if="
        !$route.name.includes('healthAmbassador') && $root.sectionIndexHome == 1
      "
      to="/health-ambassador"
      id="ambassadorButton"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="31"
        height="30"
        viewBox="0 0 31 30"
      >
        <image
          id="Layer_2748"
          data-name="Layer 2748"
          width="31"
          height="30"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAABHNCSVQICAgIfAhkiAAAAuVJREFUSEu9l0uITlEcwOfzjighomQniR0lC7FSXhslO6FsbWWNoshKKSxYyJDHJEOhRGhEMrHwyBSmvI3xfozfbzqnbvc73/fde2uc+vWdzj33/M75n8c9X21gYKAtkaZTthyWgPka/ISncAUuwZfMe+PIz4RpMDaU2/BHeAEv4U/eU8vJbWQbbIHJqV6Fsof87oZTMBfmgO/aSaViXpS+gzvwLNtmVj6LB8dgcRNp/tEBCu7CCPjb5D2fm+7BrdC5tiifRMFVmFdCbNWT0AFjEu/9pmxYwMdGYTR0wc3BghD2I+Q3lBRb/ThcSMiNwhTog/4gjR0YTuY89ChfROZG6FlZf0r+g0YWwmZwrk+A4XbUJqfgNZxWfojMxrLWUD8l/84zd8r6UMfw74cHuQ50KO+h0G1SJaXkrnTnehmsCUIdOyHuglHk7yt3K1i5Smo050o+w+pMBHaQfwKKDX2v8uQpU7AnjeS+/gumwq7QltvydoiEg+0bSrkr3i24HdzKduI5jAyR7h9KuQO2A4rthEdsnF5/Pym3ggdAldQs7LE9V7tT64hjcs5fKe8l4wehSioiT7XroutW3k5mbRUz71SVG4VO5avInPuPco9Xj9125YbAw35+hQ5UGbnHrF+2rvhhMeyGv2wqK3fUXkJ0fYtyV7ufxhUl7WXlRvkyPNKTv0wYDk+loqmM3HA/hosweKrmr1ErKTsDhqdIKip3dft5PWu4Y8N5ueWb4CAU+dgUkSt2nt1R77MjSsl97kXADrQ6+VrJneMPIdRv86FsJLfeOjgM8SqcmoZmcsVvgtgrdF1qJrfyUjgKM1IvU9ZIrtgLhCv7a4N36xZcqt7s0IEFiYd5uevExdoN16Huj0K2jVYjj3XHk9kHLsZsysr9UnmB8FqsvGUqKo8NKd8DE0OB8k6YAH4dr4E300KprNxG/Wu0F7yhun38y+Th4d8hR144VZHbuFtwK3hL8Vrsqi6d/gFmAP87hbs6GgAAAABJRU5ErkJggg=="
        />
      </svg>
      <span>{{
        $cookie.get("ltrTheme") ? "Be a health ambassador" : " سلامت باش"
      }}</span>
    </router-link>
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
      v-if="showMenuModal"
      id="mobileMenu"
    >
      <i
        class="fa fa-times"
        id="closeSvg"
        @click="showMenuModal = false"
        aria-hidden="true"
      ></i>

      <menuSection
        
        :style="`animation:sFade 1s linear ${(index + 1) * 0.5}s forwards`"
        v-for="(item, index) in menu"
        :key="index"
        :header="item.header"
        :menuItem="item.menuItem"
      />
    </div>
    <b-modal
      id="managementMessageModal"
      hide-footer
      ref="managementMessageModal"
      v-model="showModal"
      @close="resetModal()"
      :title="
        $cookie.get('ltrTheme')
          ? 'Communication with management'
          : 'ارتباط با مدیریت'
      "
    >
      <div id="contactUsSection">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
          class="contactUsTitle width80 margin-auto"
        >
          <h1 class="blackColor06">
            {{
              $cookie.get("ltrTheme")
                ? "Sending a message to the management"
                : "ارســــال پــــیام بــــه مدیــــریت"
            }}
          </h1>
          <h3 class="blackColor04">
            {{
              $cookie.get("ltrTheme")
                ? "Respond in the shortest time"
                : "پاسخگویــــی در کمتریــــن زمــــان"
            }}
          </h3>
          <double-line class="hiddenInMobile width20 margin-auto" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          id="contactUsForm"
          class="width80 margin-auto"
        >
          <div id="formTop" class="width100 d-flex justify-content-between">
            <div
              class="contactUsInput d-flex justify-content-end align-items-center"
            >
              <p v-if="!writeEamil" @click="showSection('writeEamil', true)">
                <span class="blackColor06">{{
                  $cookie.get("ltrTheme") ? "E-mail" : "پست الکترونیک"
                }}</span>
                <span class="blackColor06" v-if="email">{{ email }}</span>
              </p>
              <input
                v-else
                id="writeEamil"
                @keydown.enter.tab="showSection('bodyMessage', false)"
                @blur="writeEamil = false"
                v-model="email"
                type="text"
              />

              <svg
                width="25"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 330.001 330.001"
                style="enable-background: new 0 0 330.001 330.001"
                xml:space="preserve"
              >
                <g id="XMLID_348_">
                  <path
                    id="XMLID_350_"
                    d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                  />
                  <polygon
                    id="XMLID_351_"
                    points="165.001,146.4 310.087,40.001 19.911,40 	"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
            <div
              class="contactUsInput d-flex justify-content-end align-items-center"
            >
              <p v-if="!writeMobile" @click="showSection('writeMobile', true)">
                <span class="blackColor06">{{
                  $cookie.get("ltrTheme") ? "Mobile number" : "شماره همراه"
                }}</span>
                <span class="blackColor06" v-if="mobile">{{ mobile }}</span>
              </p>
              <input
                @keydown.enter.tab="showSection('writeEamil', true)"
                id="writeMobile"
                v-model="mobile"
                v-else
                @blur="writeMobile = false"
                type="number"
              />

              <svg
                width="25"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 297 297"
                style="enable-background: new 0 0 297 297"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M108.66,51.642c16.03,0,29.073,13.044,29.073,29.077c0,5.53,4.483,10.013,10.013,10.013
		c5.529,0,10.013-4.482,10.013-10.013c0-27.074-22.025-49.104-49.099-49.104c-5.529,0-10.013,4.482-10.013,10.014
		C98.648,47.157,103.13,51.642,108.66,51.642z"
                  />
                  <path
                    d="M108.659,20.026c33.465,0.002,60.69,27.229,60.69,60.692c0,5.53,4.483,10.013,10.013,10.013
		c5.53,0,10.014-4.482,10.014-10.013c0-44.506-36.209-80.717-80.716-80.719c-5.529,0-10.013,4.482-10.013,10.013
		C98.648,15.544,103.13,20.026,108.659,20.026z"
                  />
                  <path
                    d="M273.714,238.342l-68.719-68.721c-1.877-1.877-4.424-2.934-7.08-2.934c-2.656,0-5.202,1.057-7.08,2.934l-30.273,30.27
		c-7.895-5.509-15.892-12.236-23.379-19.725c-7.49-7.49-14.218-15.486-19.727-23.382l30.273-30.271c3.91-3.91,3.91-10.25,0-14.161
		L79.009,43.629c-1.878-1.877-4.424-2.932-7.08-2.932c-2.656,0-5.203,1.055-7.08,2.932l-34.36,34.363
		c-13.311,13.31-13.517,36.962-0.578,66.599c11.665,26.716,32.887,56.229,59.754,83.099c26.866,26.866,56.377,48.088,83.093,59.753
		c14.597,6.374,27.74,9.558,38.913,9.558c11.512,0,20.93-3.381,27.685-10.137l34.359-34.36
		C277.624,248.593,277.624,242.253,273.714,238.342z M71.929,64.871l54.56,54.562l-20.2,20.2l-54.56-54.562L71.929,64.871z
		 M180.771,269.089c-24.479-10.689-51.806-30.421-76.945-55.561c-25.142-25.143-44.873-52.471-55.563-76.952
		c-6.075-13.914-8.705-25.912-7.77-34.418l51.592,51.593c7.236,13.539,17.901,27.54,30.938,40.574
		c13.029,13.03,27.027,23.697,40.57,30.937l51.596,51.597C206.684,277.795,194.687,275.165,180.771,269.089z M232.275,265.623
		l-54.56-54.561l20.2-20.2l54.559,54.562L232.275,265.623z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
            <div
              class="contactUsInput d-flex justify-content-end align-items-center"
            >
              <p
                v-if="!writeFullName"
                @click="showSection('writeFullName', true)"
              >
                <span class="blackColor06">{{
                  $cookie.get("ltrTheme") ? "Full Name" : "نام و نام خانوادگی"
                }}</span>
                <span class="blackColor06" v-if="fullName">{{ fullName }}</span>
              </p>
              <input
                @keydown.enter.tab="showSection('writeMobile', true)"
                id="writeFullName"
                v-else
                v-model="fullName"
                @blur="writeFullName = false"
                type="text"
              />

              <svg
                width="26"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                style="enable-background: new 0 0 60 60"
                xml:space="preserve"
              >
                <path
                  d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951
	c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319
	c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056
	v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309
	c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043
	C53,47.519,51.089,44.427,48.014,42.889z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
          </div>
          <div id="formBottom">
            <textarea
              id="bodyMessage"
              :placeholder="
                $cookie.get('ltrTheme')
                  ? 'Write down the text of your message or comment'
                  : 'متن پیام یا نظر خود را یادداشت کنید'
              "
              v-model="text"
              cols="30"
              rows="10"
            ></textarea>
            <rounded-button
              :class="{ disableButton: disabled }"
              @buttonClicked="sendMessage()"
              :type="'button'"
              :buttonType="'button'"
              :title="
                $cookie.get('ltrTheme')
                  ? 'Send Your Message'
                  : 'پیام را ارسال کنید'
              "
            />
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
import search from "@/components/front/shared/searchModal.vue";
import RoundedButton from "@/components/front/shared/roundedButton.vue";
import menuBar from "@/components/front/home/slider/header/menu.vue";
import menuSection from "@/components/front/shared/menuSection.vue";
import logo from "@/components/front/shared/logo.vue";
import { BModal } from "bootstrap-vue";
export default {
  components: {
    logo,
    menuBar,
    search,
    menuSection,
    BModal,
    RoundedButton
  },
  methods: {
    showSection(section, flag) {
      if (flag == true) {
        this[section] = true;
      }
      setTimeout(() => {
        document.getElementById(section).focus();
      }, 500);
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    sendMessage() {
      if (this.$v.fullName.required == false) {
        return this.$toast.error("وارد کردن نام الزامی است");
      } else if (this.$v.fullName.minLength == false) {
        return this.$toast.error("نام کامل شما باید بیش از شش حرف باشد");
      } else if (this.$v.mobile.required == false) {
        return this.$toast.error("وارد کردن شماره موبایل الزامی است");
      } else if (
        this.$v.mobile.minLength == false ||
        this.$v.mobile.minLength == false
      ) {
        return this.$toast.error("شماره موبایل شامل 11 رقم است");
      } else if (this.$v.text.required == false) {
        return this.$toast.error("وارد کردن پیام الزامی است");
      } else if (this.$v.text.minLength == false) {
        return this.$toast.error("حداقل حروف برای یک پیام شامل 20 حرف است");
      }
      const pack = {
        fullName: this.fullName,
        email: this.email,
        phone: this.mobile,
        forManager: true,
        text: this.text
      };
      this.disabled = true;
      this.$axios
        .post("ContactUs/SendMessageToManager", JSON.stringify(pack), {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          this.$toast.success("پیام شما با موفقیت به دست ما رسید");
          this.fullName = "";
          this.text = "";
          this.disabled = false;
          this.email = "";
          this.mobile = "";
          this.showModal = false;
        })
        .catch((error) => {
          this.disabled = false;
          let arrayError = error.response.data.message.split("|");
          arrayError.forEach((err, index) => {
            if (index < 1) {
              this.$toast.error(err, {
                timeout: 1000 * (index + 4),
                pauseOnHover: true
              });
            }
          });
        });
    },
    resetModal() {
      this.showModal = false;
      this.fullName = "";
      this.mobile = "";
      this.email = "";
      this.text = "";
    },
    toggleMenu() {
      this.showMenuModal = !this.showMenuModal;
    },
    exitSearch(flag) {
      this.showSearch = flag;
    }
  },
  validations: {
    fullName: {
      required,
      minLength: minLength(5)
    },
    email: {
      required,
      email
    },
    text: {
      required,
      minLength: minLength(20)
    },
    mobile: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(5)
    }
  },
  data() {
    return {
      showModal: false,
      showSearch: false,
      showMenuModal: false,
      disabled: false,
      fullName: "",
      mobile: "",
      email: "",
      text: "",
      writeEamil: false,
      writeMobile: false,
      writeFullName: false
    };
  },
  computed: {
    menu() {
      return this.$store.getters.getMenus;
    },
    brands() {
      this.$store.getters.getBrands;
    }
  }
};
</script>
<style>
#mobileMenu nav ul {
  flex-direction: column !important;
}
</style>
<style></style>
