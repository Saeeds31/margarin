<template>
  <section id="shopSection" class="width100">
    <div
      id="content"
      class="width80 margin-auto d-flex justify-content-between align-items-center"
    >
      <img
        data-aos="fade-right"
        data-aos-duration="1500"
        
        data-aos-once="false"
        :src="data.image"
        alt=""
      />
      <div id="titles" class="d-flex flex-direction-column align-items-end">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          
          data-aos-once="false"
        >
          {{ data.title }}
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
        </h1>
        <h3
          data-aos="fade-left"
          data-aos-duration="1500"
          
          data-aos-once="false"
        >
          {{ data.summary }}
        </h3>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          
          data-aos-once="false"
        >
          <span></span>
          <span></span>
        </div>
        <p
          data-aos="fade-left"
          data-aos-duration="2000"
          
          data-aos-once="false"
        >
          {{ data.text }}
        </p>
        <rounded-button
          data-aos="fade-left"
          data-aos-duration="1500"
          
          data-aos-once="false"
          :type="'link'"
          :link="'/products'"
          :title="'ورود به فروشگاه مارگارین'"
        />
      </div>
    </div>
    <img
      data-aos="fade-up"
      data-aos-duration="1500"
      
      data-aos-once="false"
      class="hiddenInMobile"
      id="cityBackground"
      src="@/assets/front/images/shopSectionBackground.png"
      alt=""
    />
  </section>
</template>
<script>
import roundedButton from "@/components/front/shared/roundedButton.vue";
export default {
  components: { roundedButton },
  props: {
    data: Object
  }
};
</script>
