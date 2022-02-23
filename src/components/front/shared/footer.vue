<template>
  <footer class="width100" id="footer">
    <div
      id="footerSection"
      class="d-flex justify-content-between width80 margin-auto"
    >
      <div id="mapSection" class="hiddenInMobile">
        <div id="map" class="width85">
          <img
            class="width100"
            src="https://s4.uupload.ir/files/rounded_rectangle_3_copy_pfy.png"
            alt=""
          />
        </div>
        <div id="buttons" class="d-flex justify-content-evenly">
          <button class="d-flex flex-direction-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="44"
              height="44"
              viewBox="0 0 64 64"
            >
              <image
                id="Layer_2767"
                data-name="Layer 2767"
                width="64"
                height="64"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAA0dJREFUeF7tWztrFVEQztVCUWxEQePrNqKiIAGJGgUbrawEEa18YAobX4WVWIhdQBIULBKINkZU8A/YCD6iCIIoPlIY31baiNpo/L7LvXAJ++3C7Nkl5+4cGLKZuXPOmW9n5pyd3VP7fXlll7GNQ2+z0D0A/g1jv0ptPwRjQvgY/C2W8WoOgHuAh4AldKjjOcCTYAeuArNwV/eBtoJ6QCtANREjS8CfI2QD4J8RsnPgHzHE3XzoLBJ6P8BfKGTLmsvnM/x9BLoJ+tf6bfsyuBrMUdA2w+Smq1wC47joZxD8EwHGaO/iJ/5ZIPqsg/+uTfYA14dBE+S1AFiP6yegeYEmNpMBoIm/QL2glwRgNi4eNhmB7O+a6QDQTt7wPgJwFBfDoSxv9hMDAJxqPwG4jgvu3UO2WAAYIwBvYTkTYMgWCwATBIBLglrqdkP2XSAzAj6TZ1LrB5PypLYKzKUGtHdB57zQew7+xpTxJoVsigBMpUyGE/0m5LFshQm4AqCxDDoARg+gi28QumfBv2tw8zSVnRBeED94AT5XMxVyhXhAYPsK666wEChsxoE7zgVANybzNfCEyu6OFZ/3atCsJOgAuAd4CFQ7B7Ca8qXsrBV4PFa1PliToAPgHqBD4CTAqQvXugY+i5BJbQ+YO4TsHvh3hIxF2oNCxq0ua41JrbAQsD4NphVFh2ABgU1q1pejuQBYjpl8FhOKBQDa8NGaBB0A9wAPAc8BKgnGsgzmSoJcQj6pDBoJn7tZaUNWPcABcA/wEKh2DmBBUW4jI0mCrGuqlSzzzVAaAHxRoT5Z4fcGqgjBp7o1Arw34KunSCvehQFQ9sOQA2BEwD0gTw7gayUVy7GEAF/xy8Ju1k7QAXAP0CFg/T6AT5Gs7yU1HrJQxU1jDmx8jlNICFgnVLaeA5DHA+pQlu/Wy76VxvH4Ubf8xiFrFXAA3AMqHgLb07aRxpgsW20xBuSX4YmNOYCHCRjrVWyTBOAWLN9bReth820CcAoXFysKwGkCMBfGswqztmIgvIa9Pa0zQzx4fB/E4zNVaH9hJBP8ePupMR4iugpa1+EIvIJ9h0CNlWH66XGGwzEQj85tArEe0AmN2/mnIB6ZuwL60zLqP5sJp05D2OwoAAAAAElFTkSuQmCC"
              />
            </svg>

            <span>{{$cookie.get('ltrTheme')?'Get the 2022 calendar':'دریافت تقویم سال 1400'}}</span>
          </button>
          <button @click="$router.push('/catalogue')" class="d-flex flex-direction-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="44"
              height="44"
              viewBox="0 0 64 64"
            >
              <image
                id="Layer_2768"
                data-name="Layer 2768"
                width="64"
                height="64"
                xlink:href="data:image/png;base64,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"
              />
            </svg>

            <span>{{$cookie.get('ltrTheme')?'Get the company introduction catalog':'دریافت کاتالوگ معرفی شرکت'}}</span>
          </button>
        </div>
      </div>
      <div
        id="aboutUs"
        class="width20 d-flex flex-direction-column align-items-end"
      >
        <h1 id="footerTitle" class="footerTitle">{{$cookie.get('ltrTheme')?'Headquarters address':'نشانی دفتر مرکزی'}}</h1>
        <p>{{$cookie.get('ltrTheme')?'Iran, Tehran, Rey city, 3 km of Varamin road, Shahid Tondgovian boulevard, Margarine industrial companies ':' ایران , تهران , شهر ري , كيلومتر 3 جاده ورامين , بلوار شهید تندگویان ,
           شرکت های صنعتی مارگارین'}}</p>
        <span> info@email.com </span>
        <h2> ۰۲۱- ۳۵۸۱۱</h2>
        <div v-if="$root.footerData" id="social" class="width100 d-flex justify-content-around">
         <a target="_blank" :href="'https://wa.me/'+$root.footerData.whatsApp">
           
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="70"
            height="70"
            viewBox="0 0 70 70"
          >
            <g
              id="Group_1d"
              data-name="Group 1d"
              transform="translate(-834 -8302)"
            >
              <g
                id="Rounded_Rectangle_12_copy_4"
                data-name="Rounded Rectangle 12 copy 4"
                transform="translate(834 8302)"
                fill="rgba(255,255,255,0)"
                stroke="rgba(247,148,30,0.1)"
                stroke-linejoin="round"
                stroke-width="6"
              >
                <rect width="70" height="70" rx="15" stroke="none" />
                <rect x="3" y="3" width="64" height="64" rx="12" fill="none" />
              </g>
              <image
                id="Layer_2386"
                data-name="Layer 2386"
                width="24"
                height="24"
                transform="translate(857 8325)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAmFJREFUSEulllmITmEYx40kyXZDiTSFEA0ZW1mmXHCjzAUjERejlCZLIksYUSRNskSWRk2R7c4FpRTKGI0S02TLDWUry1yIKL/fdF6dXt93nNO89es7z3mf5/m/63O+iu/HR/XKaH3pmwlToTr5NaAD2uERPIQn5XJUZAiY8DxMyhpB0neF33XwKfYtJeCod8E26JMjeXD5kIhcS8fEAoPovAOTCySOXU8mQt3vY4EzvFvTg+QhdAkP3TNJCyzEvhEld9pHoQrqCggbN9E9CQKDMZ7CyFSStzzPh/fwFRphTwERN74uCGzBOBQFO+L7cBuuwnZogZUFRKqCwGWClkaBA7D3wSb4mCzTYn5PFRCoDwIvCRodBc7AngKnk6VxL7xUYwoInFBgCAGfSwS55i6bN/ZWMhOXa24BgVYFZhNwr0TQD95Nh97QCrVgibA8DM0p0qWApaBcLTHhNFgLO8DyYbsAw+EwzIFyG9+hgJvZlTGiY/RtgEtQA6vAJRsI/eAdNEKpI9wSNvk1DpUZIsvo81yvh4PgjbewNcA58Ag7gPgybgwC++ncmSFglzPZCuPgIkxI/D2BLqNi5km3eUFgLG+f/0fAbvdkOZjUdVekCfrDXRiWymFlqA4C4zE6cwjo4uk6ANfhGSwCN3tEKv4Xz7OgPQjsxdidUyCPm0vlN+VvNX3Bc5EbmiXymE6rwM8goPEgz7By+JzFZzN8C74u0REMz3lP2huC/VDdjJMoEBc6bW+qR/E3rIYVUBkFv8IO/yosiH4z/mkKNPN2AXiRTNxWZireeEX8OHlcv+SZ8h8R2Zr1bGBPBwAAAABJRU5ErkJggg=="
              />
            </g>
          </svg>
         </a>
         <a target="_blank" :href="$root.footerData.instagrm">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="70"
            height="70"
            viewBox="0 0 70 70"
          >
            <g
              id="Group_2sd"
              data-name="Group 2sd"
              transform="translate(-914 -8302)"
            >
              <g
                id="Rounded_Rectangle_12_copy_3"
                data-name="Rounded Rectangle 12 copy 3"
                transform="translate(914 8302)"
                fill="rgba(255,255,255,0)"
                stroke="rgba(247,148,30,0.1)"
                stroke-linejoin="round"
                stroke-width="6"
              >
                <rect width="70" height="70" rx="15" stroke="none" />
                <rect x="3" y="3" width="64" height="64" rx="12" fill="none" />
              </g>
              <image
                id="Layer_2385"
                data-name="Layer 2385"
                width="24"
                height="24"
                transform="translate(937 8325)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAYVJREFUSEvNlk8oRUEUh93ITmJJWWFlRdiyl61srJCklGJDodhQSr0QVjayUrL3tpK3ssLWGlHyIr7f7Vw9f2beq3unTH3NvDlnzm9mztyZF73kWqpKSiftCeiCDqgtNXraRWxXcAk7UEh8IxOopmPBqKkwqMvtDcOK8Z4ILNKxlDLwz+GKtywBbcs5pJn5MePXoMdmXketlfRKYJfGWIrZPzO2yXKmHEho2uLtSUCdWoWvPGGU34U5dVPrIGimDybQT50Hbfec+RUk8MoP32nZxz4DEqm3gY8WfIN6FOSzCtqibWg0v6IEPjxTH8Z2BJOgZbea7y31JmzBEBy6YvgENKtxOIEBR4BT+gdBedRKfhWXgLajGUYg51mhTFNwAHegnHwrLoE8XkraNbSVEbjB3g5n0FepwDqOSto9RGUElMMGmIfZfyMQfIuCJ1lbGfSYJrnK5EPL4qpwHbT4qkh72flOcXzZpb2ufQLxdZ3Fg/OXyNeDI2PQJ1MCwR/9ZImZ/235BILFmQuYZM/pAAAAAElFTkSuQmCC"
              />
            </g>
          </svg>
         </a>
         <a target="_blank" :href="$root.footerData.telgram">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="70"
            height="70"
            viewBox="0 0 70 70"
          >
            <g
              id="Group_3sdsd"
              data-name="Group 3sdsd"
              transform="translate(-994 -8302)"
            >
              <g
                id="Rounded_Rectangle_12_copy_2"
                data-name="Rounded Rectangle 12 copy 2"
                transform="translate(994 8302)"
                fill="rgba(255,255,255,0)"
                stroke="rgba(247,148,30,0.1)"
                stroke-linejoin="round"
                stroke-width="6"
              >
                <rect width="70" height="70" rx="15" stroke="none" />
                <rect x="3" y="3" width="64" height="64" rx="12" fill="none" />
              </g>
              <image
                id="Layer_2384"
                data-name="Layer 2384"
                width="24"
                height="20"
                transform="translate(1017 8327)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAABHNCSVQICAgIfAhkiAAAAZJJREFUOE+1lD0oRWEcxh3KVxgpCoPiDqR8pKQwkE2K5GOyyILBZrXdDFJSl0EWk9ViYKEQA4MMVoNIlOTz9+g9dTrOPee9173/evq/5//xPO95v5zX1eqcLFk+vO9OhgUcSLvAJBgG15kSiEE2AcZBjWdFdv4jUAHRqJltS8AyvxCLpSpQTNOgmW0fPi9k/xbIxW0EcinsNTMdwpdYHIoraprBR5hAkyEdw1dakHpLuvk4UMAvUEVMhDoFjSmSuuXbpv/3WwJF+BET7MFrSdK1JxobwJ1LIIFdPrRxNvZGUUFI4Sy5FW9eAnsE+iPYD8nrZnaE1F2QawWffgFtYAIMBDQfE9sA0yDorLst3ww6wZGfw7vJUySXQRm4BItm1hJXLMw2Sar/j/lPUTkVteAUxMF8BLHSD6Ae3NsIuDV1DG4syFWi5VtPVpvsoukWnlsInFCjjf/KhoBI28FZ2ERs/2DLkOkSubbGYCbqL5MJlJo9eDZrvI8vBEtgDtyCNvCYroD69GQEra3eKz0Jeu8j7QeSZFvXISV9IAAAAABJRU5ErkJggg=="
              />
            </g>
          </svg>
         </a>
        </div>
        <div
          id="buttons"
          class="d-flex justify-content-between showInMobileFlex"
        >
          <button class="d-flex flex-direction-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="44"
              height="44"
              viewBox="0 0 64 64"
            >
              <image
                id="Layer_2767"
                data-name="Layer 2767"
                width="64"
                height="64"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAA0dJREFUeF7tWztrFVEQztVCUWxEQePrNqKiIAGJGgUbrawEEa18YAobX4WVWIhdQBIULBKINkZU8A/YCD6iCIIoPlIY31baiNpo/L7LvXAJ++3C7Nkl5+4cGLKZuXPOmW9n5pyd3VP7fXlll7GNQ2+z0D0A/g1jv0ptPwRjQvgY/C2W8WoOgHuAh4AldKjjOcCTYAeuArNwV/eBtoJ6QCtANREjS8CfI2QD4J8RsnPgHzHE3XzoLBJ6P8BfKGTLmsvnM/x9BLoJ+tf6bfsyuBrMUdA2w+Smq1wC47joZxD8EwHGaO/iJ/5ZIPqsg/+uTfYA14dBE+S1AFiP6yegeYEmNpMBoIm/QL2glwRgNi4eNhmB7O+a6QDQTt7wPgJwFBfDoSxv9hMDAJxqPwG4jgvu3UO2WAAYIwBvYTkTYMgWCwATBIBLglrqdkP2XSAzAj6TZ1LrB5PypLYKzKUGtHdB57zQew7+xpTxJoVsigBMpUyGE/0m5LFshQm4AqCxDDoARg+gi28QumfBv2tw8zSVnRBeED94AT5XMxVyhXhAYPsK666wEChsxoE7zgVANybzNfCEyu6OFZ/3atCsJOgAuAd4CFQ7B7Ca8qXsrBV4PFa1PliToAPgHqBD4CTAqQvXugY+i5BJbQ+YO4TsHvh3hIxF2oNCxq0ua41JrbAQsD4NphVFh2ABgU1q1pejuQBYjpl8FhOKBQDa8NGaBB0A9wAPAc8BKgnGsgzmSoJcQj6pDBoJn7tZaUNWPcABcA/wEKh2DmBBUW4jI0mCrGuqlSzzzVAaAHxRoT5Z4fcGqgjBp7o1Arw34KunSCvehQFQ9sOQA2BEwD0gTw7gayUVy7GEAF/xy8Ju1k7QAXAP0CFg/T6AT5Gs7yU1HrJQxU1jDmx8jlNICFgnVLaeA5DHA+pQlu/Wy76VxvH4Ubf8xiFrFXAA3AMqHgLb07aRxpgsW20xBuSX4YmNOYCHCRjrVWyTBOAWLN9bReth820CcAoXFysKwGkCMBfGswqztmIgvIa9Pa0zQzx4fB/E4zNVaH9hJBP8ePupMR4iugpa1+EIvIJ9h0CNlWH66XGGwzEQj85tArEe0AmN2/mnIB6ZuwL60zLqP5sJp05D2OwoAAAAAElFTkSuQmCC"
              />
            </svg>

            <span>{{$cookie.get('ltrTheme')?'Get the 2022 calendar':'دریافت تقویم سال 1400'}}</span>
          </button>
          <button @click="$router.push('/catalogue')" class="d-flex flex-direction-column align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="44"
              height="44"
              viewBox="0 0 64 64"
            >
              <image
                id="Layer_2768"
                data-name="Layer 2768"
                width="64"
                height="64"
                xlink:href="data:image/png;base64,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"
              />
            </svg>

            <span>{{$cookie.get('ltrTheme')?'Get the company introduction catalog':'دریافت کاتالوگ معرفی شرکت'}}</span>
          </button>
        </div>
      </div>
      <div id="bestRoute" class="hiddenInMobile">
        <h1 class="footerTitle">{{$cookie.get('ltrTheme')?'Applied links':'لینک های کاربردی'}}</h1>
        <ul>
          <li><router-link to="/about-us">{{$cookie.get('ltrTheme')?'About us':'درباره ما'}}</router-link></li>
          <li><router-link to="/">{{$cookie.get('ltrTheme')?'Products':'محصولات ما'}}</router-link></li>
          <li><router-link to="/">{{$cookie.get('ltrTheme')?'Cookings':'آشپزخانه'}}</router-link></li>
          <li><router-link to="/weblogs">{{$cookie.get('ltrTheme')?'weblogs':'وبلاگ'}}</router-link></li>
          <li><router-link to="/">{{$cookie.get('ltrTheme')?'Cooperation':'همکاری با ما'}}</router-link></li>
          <li><router-link to="/contact-us">{{$cookie.get('ltrTheme')?'Contact Us':'تماس با ما'}}</router-link></li>
        </ul>
      </div>
      <div id="route" class="hiddenInMobile">
        <h1 class="footerTitle">{{$cookie.get('ltrTheme')?'Our group services':'خدمات گروه ما'}}</h1>
        <ul>
          <li><router-link to="/">{{$cookie.get('ltrTheme')?'Industrial oils':'روغن های صنعت'}}</router-link></li>
          <li><router-link to="/">{{$cookie.get('ltrTheme')?'Class oils':'روغن های صنف'}}</router-link></li>
          <li><router-link to="/">{{$cookie.get('ltrTheme')?'Household oils':'روغن های خانوار'}}</router-link></li>
        </ul>
      </div>
      <button
        v-if="showGotoTOp&&$route.path!='/faq'"
        @click="goToTop()"
        data-aos="fade-up"
        data-aos-duration="1000"
        id="mainMoveToTopBotton"
      >
        <svg
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="10"
          viewBox="0 0 24 10"
        >
          <path
            id="_2_copy_5"
            data-name="2 copy 5"
            d="M1499,486v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm14-4v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Z"
            transform="translate(-1477 -476)"
            opacity="0.2"
          />
        </svg>
      </button>
    </div>
  </footer>
</template>
<script>

export default {
  mounted() {
   
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
    window.addEventListener("scroll", this.setGotoTop);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setGotoTop);

    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
    setGotoTop() {
      if (this.$root.isInViewport(document.getElementById("footerTitle"))) {
        this.showGotoTOp = true;
      } else {
        this.showGotoTOp = false;
      }
    },
    goToTop() {
      document
        .getElementById("frontSection")
        .scrollIntoView({ behavior: "smooth" });
    },
    setStyle() {
      if (window.innerWidth > 1000) {
        // #sliderSection .slick-prev, #sliderSection .slick-next
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#frontSection #footer #footerSection .footerTitle",
          1496,
          18,
          1024,
          14
        );
        // , ,
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#frontSection #footer #footerSection ul li a",
          1496,
          16,
          1024,
          13
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#frontSection #footer #footerSection #aboutUs p",
          1496,
          16,
          1024,
          13
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#frontSection #footer #footerSection #aboutUs span",
          1496,
          16,
          1024,
          13
        );
        //

        this.$root.setProportionStyle(
          "width",
          "px",
          "#frontSection #footer #footerSection #aboutUs #social svg",
          1496,
          70,
          1024,
          50
        );
        this.$root.setProportionStyle(
          "height",
          "px",
          "#frontSection #footer #footerSection #aboutUs #social svg",
          1496,
          70,
          1024,
          50
        );
      } else {
        this.$root.setProportionStyle(
          "width",
          "%",
          "#frontSection #footer #footerSection #buttons",
          1000,
          80,
          425,
          95
        );
      }
    }
  },
  data() {
    return {
      showGotoTOp: false
    };
  }
};
</script>
<style scoped>
button#mainMoveToTopBotton {
  width: max-content;
  height: max-content;
  padding: 15px;
  border-radius: 100%;
  transform: rotate(90deg);
  border: none;
  position: fixed;
  left: 10px;
  bottom: 70px;
  box-shadow: 0 0 40px #5e5e5eb0;
  background: white;
}
</style>
