<template>
  <main id="managerSection" v-if="managerList">
    <introduction
      class="width80 margin-auto managerIntroHeader"
      :title="
        $route.query.manager && $route.query.manager == 0
          ? $cookie.get('ltrTheme')
            ? ' Board Members'
            : 'اعضای هیـــئت مدیره '
          : $cookie.get('ltrTheme')
          ? ' Director and Vice President  '
          : 'مدیرعامل و معاونیـــن '
      "
      :summary="
        $route.query.manager && $route.query.manager == 0
          ? $cookie.get('ltrTheme')
            ? 'Margarine Company '
            : ' شرکـــت مارگاریـــن'
          : $cookie.get('ltrTheme')
          ? ' Margarine Company '
          : ' شرکـــت مارگاریـــن'
      "
      :image="$root.baseImageUrl +''"
      :routes="route"
    >
    </introduction>
    <introduction
      v-for="(item, index) in managerList"
      :key="index"
      class="width80 margin-auto members"
      :title="item.fullName"
      :summary="item.title"
      :image="$root.baseImageUrl + item.image"
      :routes="[]"
    >
      <p
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        class="slotElements width80 blackColor08"
        v-html="item.resume"
      ></p>
    </introduction>
  </main>
  <loader v-else />
</template>
<script>
import loader from "@/components/front/shared/loader.vue";
import introduction from "@/components/front/shared/introduction.vue";

export default {
  components: { loader, introduction },
  data() {
    return {
      manager: false,
      route: [
        {
          route: "",
          routeTitle_fa: "معرفی اعضاء",
          routeTitle_en: "Introducing members"
        }
      ]
    };
  },
  computed: {
    managerList() {
      return this.$store.getters.getManagerList;
    }
  },
  mounted() {
    if (this.$route.query.manager) {
      if (this.$route.query.manager == 1) {
        this.manager = true;
      } else {
        this.manager = false;
      }
    } else {
      this.manager = false;
    }
    if (this.manager == true) {
      this.$axios.get("Home/GetManager").then((res) => {
        let step1 = JSON.stringify(res.data.data);
        let step2 = step1.replace(/_fa"/g, '"');
        let step3 = step2.replace(/_en"/g, '"');
        this.$store.commit("setManagers", JSON.parse(step3));
      });
    } else {
      this.$axios.get("Home/GetManagerMembers").then((res) => {
        let step1 = JSON.stringify(res.data.data);
        let step2 = step1.replace(/_fa"/g, '"');
        let step3 = step2.replace(/_en"/g, '"');
        this.$store.commit("setManagers", JSON.parse(step3));
      });
    }
  }
};
</script>
<style>
#managerSection .members #backgroundOrange,
#managerSection .members .currentPathSection {
  display: none !important;
}
#managerSection .slotElements {
  direction: rtl;
}
main#managerSection {
  margin-bottom: 200px;
}

.managerIntroHeader .introductionImage {
    display: none !important;
}

#managerSection .members .introductionImage{
  width: 460px !important;
  object-fit: cover;
}
#managerSection #introductionSection{
  margin-bottom: 120px;
}
.managerIntroHeader #content {
    justify-content: flex-end !important;
}
@media (max-width: 768px){
  .managerIntroHeader #content{
    justify-content: center !important;

  }
  #managerSection #introductionSection{
    margin-bottom: 0;
  }
}
</style>
