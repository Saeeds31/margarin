<template>
<svg @click="landing()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="58" height="58" viewBox="0 0 72 72">
  <g id="Group_1asa" data-name="Group 1asa" transform="translate(-375 -123)">
    <circle id="Rounded_Rectangle_5" data-name="Rounded Rectangle 5" cx="36" cy="36" r="36" transform="translate(375 123)" fill="#f7941e"/>
    <circle id="Ellipse_583" data-name="Ellipse 583" cx="29.05" cy="29.05" r="29.05" transform="translate(382 129.9)" fill="#fff" opacity="0.2"/>
    <image id="Layer_2616" data-name="Layer 2616" width="24" height="22" transform="translate(399 148)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAb9JREFUSEu1ls0rBVEYxl0hkpWsWFiJslHEQmThL6Bkb4EQC/nIx/UdkfKVpYWkrOzV3YgSK0koZWHBSgpR1/g9daam08y9I+OtX/d8vOd5zpk5Z86NOY6T4YlqygPQBEXwCMewBmfeRMq10Af1UAzPkIBVOHdzY8YgRkMcxiDTElL1GxZgHJQ7AyOmbKdrxvMm13ENRmmY8xG2m1yDaavjnnoJ5HjalTsrgzIKV5AVwkArUXhX+UC9FPLMrIdMf5LfShmsU+gJIZ4q5ZLOPVgCPT49EcWWDG4oaBVRRLcx0gvX47qVwbtZXhQGR4g0wzWUw4cMXikURKGOxhdsQxdkw4sMTinURWRgyyRk0E+rDsd/RKcM8lHWViuM2EEvutQ9aBNUpiI2GERv2TXQITuBmohMpNUASddAuhVwATqRf4k3BlfBnUS8Bqq3wy74ffDCmOrz0AKHbrJtoHadxs0waj45vbRteNv9DNSvT/PwL020SeL2mCAD5Sl5MqTJYtCEUhlIO909octF23ElaCLpDDSuDXYg1xL5pN4B2hSBEcZAgxvhAHRPK56gFXRfp4ywBhLRlbhv1LQq/SFIGz/qnYt+6slTEgAAAABJRU5ErkJggg=="/>
  </g>
</svg>

</template>
<script>
export default {
  methods:{
    landing(){
      this.$router.push("/health-ambassador")
    }
  }
}
</script>