<template>
  <div @click="gotoLink(blog.id,blog.title)" class="cart">
   <div class="content d-flex flex-direction-column align-items-end">
 <img :src="$root.baseImageUrl+blog.image" :alt="blog.title" />
    <h1>{{ $root.showWith3Dot(blog.title,9) }}</h1>
    <p class="description">{{ $root.showWith3Dot(blog.shortDescription,22)}}</p>
    <p class="date">
      <span>
        {{ blog.createDate }}
      </span>
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
   </div>
  </div>
</template>
<script>
export default {
  props: {
    blog: Object,
    route:{
      type:String,
      default:'weblog-detail'
    }
  },
  methods:{
    gotoLink(id,title){
          this.$router.push(`${this.route}/${id}/${this.$root.slugGenerator(title)}`);
      // window.open(`${window.location.origin}`+route.href);
    }
  }
};
</script>
