<template>
  <div class="cart d-flex justify-content-between align-items-center">
    <div class="content d-flex flex-direction-column align-items-end">
      <div class="titles d-flex align-items-center">
        <img
        @click="showModalMode"
          class="width50 showInMobile"
          :src="$root.baseImageUrl + certificate.image"
          :alt="certificate.title"
        />

        <div v-if="!modalMode" class="contentTitle">
          <h1>{{ certificate.title }}</h1>
          <div class="footerSection d-flex justify-content-end">
            <h4>{{ certificate.shortDescription }}</h4>
            <div class="verticalBorder"></div>
            <div class="verticalBorder"></div>
          </div>
        </div>
        <svg
          v-if="!modalMode"
          class="awardSvgHome"
          id="Capa_1"
          enable-background="new 0 0 512.001 512.001"
          height="70"
          viewBox="0 0 512.001 512.001"
          width="70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m507.609 391.94-53.302-53.319c-10.047 12.807-23.141 23.065-37.984 29.742-8.583 19.08-23.066 35.296-41.304 45.826-15.189 8.77-32.499 13.406-50.056 13.406-.001 0-.002 0-.003 0-3.445 0-6.885-.178-10.304-.531-.635.457-1.284.891-1.929 1.333l79.21 79.21c2.86 2.86 6.694 4.394 10.608 4.394 1.632 0 3.277-.267 4.872-.814 5.42-1.862 9.306-6.65 10.012-12.337l8.993-72.425 72.425-8.993c5.687-.706 10.475-4.591 12.337-10.011 1.865-5.421.476-11.428-3.575-15.481z"
            />
            <path
              d="m187.038 427.594c-17.559 0-34.869-4.636-50.059-13.406-18.236-10.529-32.719-26.745-41.302-45.825-14.842-6.677-27.936-16.936-37.984-29.742l-53.301 53.319c-4.051 4.053-5.44 10.06-3.577 15.48 1.862 5.419 6.65 9.305 12.337 10.011l72.425 8.993 8.993 72.425c.706 5.688 4.592 10.475 10.012 12.337 5.421 1.861 11.429.473 15.48-3.58l79.21-79.21c-.645-.442-1.295-.876-1.93-1.333-3.418.354-6.858.531-10.304.531z"
            />
            <path
              d="m306.1 395.016c18.013 5.02 37.47 2.689 53.92-6.809 16.45-9.497 28.197-25.183 32.856-43.292 18.109-4.66 33.794-16.407 43.291-32.856 9.498-16.45 11.828-35.907 6.809-53.919 13.353-13.09 21.063-31.105 21.063-50.1s-7.71-37.011-21.063-50.101c5.019-18.012 2.688-37.47-6.809-53.919-9.497-16.45-25.182-28.197-43.291-32.856-4.66-18.109-16.407-33.794-32.856-43.292-16.45-9.498-35.907-11.827-53.92-6.809-13.089-13.352-31.105-21.063-50.1-21.063s-37.01 7.71-50.1 21.063c-18.011-5.019-37.469-2.688-53.92 6.809-16.45 9.497-28.197 25.183-32.856 43.292-18.109 4.66-33.794 16.407-43.291 32.856-9.498 16.45-11.828 35.907-6.809 53.919-13.353 13.09-21.063 31.105-21.063 50.101 0 18.995 7.71 37.01 21.063 50.1-5.019 18.012-2.688 37.47 6.809 53.919 9.497 16.45 25.182 28.197 43.291 32.856 4.66 18.109 16.407 33.794 32.856 43.292 16.45 9.498 35.907 11.828 53.92 6.809 13.09 13.353 31.105 21.063 50.1 21.063s37.011-7.71 50.1-21.063zm-173.459-186.976c0-68.021 55.339-123.36 123.36-123.36s123.36 55.339 123.36 123.36-55.34 123.36-123.361 123.36-123.359-55.339-123.359-123.36z"
            />
            <path
              d="m256 301.4c51.479 0 93.36-41.881 93.36-93.36s-41.881-93.36-93.36-93.36-93.36 41.881-93.36 93.36 41.881 93.36 93.36 93.36zm36.147-57.213c-9.655 9.655-22.492 14.973-36.147 14.973s-26.492-5.317-36.147-14.973c-5.858-5.858-5.858-15.355 0-21.213 5.857-5.858 15.355-5.858 21.213 0 8.235 8.234 21.633 8.234 29.868 0 5.857-5.858 15.355-5.858 21.213 0s5.858 15.355 0 21.213z"
            />
          </g>
        </svg>
      </div>
      <p v-if="!modalMode" class="certificateText width60">
        {{ certificate.description }}
      </p>
      <div v-if="!modalMode" class="date d-flex align-items-center">
        <p class="d-flex flex-direction-column">
          <span>{{
            $cookie.get("ltrTheme") ? "recived Date" : "دریافت در تاریخ"
          }}</span>
          <span>{{ certificate.receivedDate }}</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="58"
          height="58"
          viewBox="0 0 70 70"
        >
          <g
            id="Group_41"
            data-name="Group 41"
            transform="translate(-844 -7421)"
          >
            <g
              id="Rounded_Rectangle_12"
              data-name="Rounded Rectangle 12"
              transform="translate(844 7421)"
              fill="rgba(255,255,255,0)"
              stroke="rgba(0,0,0,0.06)"
              stroke-linejoin="round"
              stroke-width="6"
            >
              <rect width="70" height="70" rx="15" stroke="none" />
              <rect x="3" y="3" width="64" height="64" rx="12" fill="none" />
            </g>
            <image
              id="Layer_2372"
              data-name="Layer 2372"
              width="24"
              height="24"
              transform="translate(867 7444)"
              opacity="0.6"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAeVJREFUSEvtlksohFEUx+dLGCuUMiJLpdjMThaiSElWLCwwKY2N95IVS4/YeOexsLCTlChSJJvZjCIbNRFTCiuDGL+j8003GWFMSW6dzjn/+d9z7j3nfveOFQ6HHZZltTgcji4kD7GQWEaYySfIMLGnJJgE70MGkDXkMZbozE1EqpBepF8SHCMjZJs0A7OrOvw98HMbBysSG2zfwLKxi8GW38z34ndIgmckF8KZMSkT+xIZAu8x8ENNUGBgg9jdiAtu0MBzsAOSQGqWxY8SMDJYbQWOD/zKmFSoCfwGloHthrfxZr4L/yJqApP8HZsF/if4uHCfLhHEUUKlargl1fWqb2luO5xpfDn/MmbAdr+SQE6XHFsZnapHVAcJ5iJYCD9ZMQ/Y/K9KUMPKUnR1PtVu1XesdoXV1uInKHYAdvruDgBLILUq8QFiA9gEfppiC6obVd/A8cJZxE9SbBxsJ1qCJkhzSryH6IT4cz0gWNwT5LJ6u75P7GCVpJVgTt2VfQe93kmMEJx1ONVGD+T+CkQrURnENqMHdRClZOmKzapuVn1NMA8cuartHoyBbf2tHkQeHLYlr5NdX+nBJlgpmP2VHmlp8o2Ttg2n3OiBX15BsMiD8+6TqQG+rUgQeTLj++jH+2/LC/kFaIqblwjUAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </div>
    </div>
    <img
    @click="showModalMode"
      class="width25 animationAboutCart1 hiddenInMobile"
      :src="$root.baseImageUrl + certificate.image"
      :alt="certificate.title"
    />
  </div>
</template>
<script>
export default {
  props: {
    certificate: Object,
    modalMode: Boolean,
  },
  methods:{
    showModalMode(){
      this.$emit('showModalModeHandler')
    }
  }
};
</script>
<style>
.awardSvgHome path {
  fill: #cacaca;
}
</style>
