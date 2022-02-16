<template>
<div @click="gotoLink(weblog.id,weblog.title)" class="cartContent">
      <div class="cart">
    <img :src="$root.baseImageUrl+weblog.image" :alt="weblog.title" />
    <div class="backgroundGradient"></div>
    <div class="content">
      <p class="date d-flex justify-content-end width90 margin-auto">
        <span> {{weblog.createDate}} </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <image
            id="Layer_2709"
            data-name="Layer 2709"
            width="24"
            height="24"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAb5JREFUSEvdlc8rRFEUx40fsxELZctQZOPHguyUBUmWirKU/FwQ5V+QFGUI2SorC0WRhbKR2ZCNRjEs7CgLKYTPV/fV7TXvx0wm5dand945597vu/ec7ou8xivyPEY+/k+voMvvmRvxEOhggR3ohYMAkXbiu9AH++5cCZTgrHUFBnifggXYDhDoJz4Di7Dlyk1K4BZnLORRZJr2IIEvZr24tqcdNcI5XAesWkO8CS4gaeV2Yxc7AileqqzgOHYcRmA9QGCY+BpMwIqV+3MyXgLlBMdgGZ4CBMqIS2QDHsMKZHrW6fJ9d5BzgSKryB+WWiW2muLe8hViq8hqCDvXdwc6zyFYBRVcIwZXRqCO553xK2fU1EC1cIavwCZZg6Du0GQNdZktkDJ+5WhhzdFHhRKIktUMCXi3JlUb+8by6Thb0uT+bZGtD8za9N2BbshJ0GV3YiTULUugLtJF6HRMG/Y06LI7DlsDXdGdsAc9ZlIrz1PLPjO2cnTvaE5XWAEl6gqegyMzSYVXx2gHuqOc4uvfMQvzcBhWwMrL2vxnXfTGQVxmfRjpJ9bjjup/oD9Rwy8v7iyXkEABb6U5Enj+BlKFpp1VYkHZAAAAAElFTkSuQmCC"
          />
        </svg>
      </p>
      <h1 class="width90">{{ weblog.title }}</h1>
      <h3 class="width90">
        {{ $root.showWith3Dot(weblog.shortDescription,31) }}
      </h3>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    weblog: Object
  },
  methods:{
      gotoLink(id,title){
      this.$router.push(`weblog-detail/${id}/${this.$root.slugGenerator(title)}`)
    }
  }
};
</script>
