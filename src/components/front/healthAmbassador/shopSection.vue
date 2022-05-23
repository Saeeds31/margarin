<template>
  <section id="shopSection" class="width100">
    <div
      id="content"
      class="width80 margin-auto d-flex justify-content-between align-items-center"
    >
      <img
        data-aos="fade-right"
        data-aos-duration="1500"
        id="tandis"
        data-aos-once="true"
        :src="data.image"
        alt=""
      />
      <div id="titles" class="d-flex flex-direction-column align-items-end">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
                  data-aos-once="true"

        >
          {{ data.title }}
        <img src="@/assets/front/images/heart.png" width="40" id="heartHealth" />

        </h1>
        <h3
          data-aos="fade-left"
          data-aos-duration="1500"        data-aos-once="true"

        >
          {{ data.summary }}
        </h3>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"        data-aos-once="true"

        >
          <span></span>
          <span></span>
        </div>
        <p
          data-aos="fade-left"
          data-aos-duration="2000"
                  data-aos-once="true"

        >
          {{ data.text }}
        </p>
        <rounded-button
          data-aos="fade-left"
          data-aos-duration="1500"
                  data-aos-once="true"

          :type="'link'"
          :link="'/products'"
          :title="'محصولات مارگارین'"
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
