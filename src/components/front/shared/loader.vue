<template>
  <div id="loader">
    <img src="@/assets/front/images/logo.svg" alt="" />
  </div>
</template>
<style scoped>
#loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: #000000e0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000000;
  height: 100vh;
}
#loader img {
  position: relative;
  animation:moveLogo 1.5s infinite linear alternate
}
@keyframes moveLogo {
  from {
    bottom: 50px;
  }
  to {
    bottom: 120px;
  }
}
</style>
