<template>
  <main v-if="blogsData != null" id="blogsSection" class="width80 margin-auto searchPage">
    <introduction
      :title="getTitle()"
      :summary="blogsData.data.webLogIntro.title"
      :image="$root.baseImageUrl + blogsData.data.webLogIntro.image"
      :routes="routes"
    >
      <p class="slotElements">
        {{ blogsData.data.webLogIntro.text }}
      </p>
    </introduction>
   iltered="filteredBlogs"
    />
    <section
      id="weblogsList"
      class="width100 d-flex f-wrap justify-content-between"
    >
     <template v-if="blogsData.data.blogs.length>0">
      
         
        <weblogCart
        
        :showComment="true"
        v-for="(weblog, index) in blogsData.data.blogs"
        :article="weblog"
        :key="index"
      />
     </template>

     <!-- magazine -->
     
     
     <template v-if="blogsData.data.magazines.length>0">
      
         
        <magazineCart
        
        :showComment="true"
        v-for="(weblog, index) in blogsData.data.magazines"
        :article="weblog"
        :key="index"
      />
     </template>
     <!-- reportage -->
     
     
     <template v-if="blogsData.data.reportages.length>0">
      
         
        <reportageCart
        
        :showComment="true"
        v-for="(weblog, index) in blogsData.data.reportages"
        :article="weblog"
        :key="index"
      />
     </template>
     <!-- social -->
     
     
     <template v-if="blogsData.data.socials.length>0">
      
         
        <socialCart
        
        :showComment="true"
        v-for="(weblog, index) in blogsData.data.socials"
        :article="weblog"
        :key="index"
      />
     </template>
     <!-- <p v-else id="notFound">{{$cookie.get("ltrTheme")? "No results found":"نتیجه ایی پیدا نشد"}}</p> -->
    </section>
    <section id="weblogPagination">
      <pagination
        v-if="false"
        :totalPages="blogsData.pagination.TotalPages"
        :currentPage="blogsData.pagination.CurrentPage"
        @pageChanged="pageChanged"
      />
    </section>
  </main>
  <loader v-else />
</template>
<script>
import reportageCart from "@/components/front/reportage/weblogCart.vue";
import magazineCart from "@/components/front/magazine/weblogCart.vue";

import pagination from "@/components/front/shared/pagination.vue";
import weblogCart from "@/components/front/blogs/weblogCart.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
import socialCart from "@/components/front/socialResposnibility/weblogCart.vue";

export default {
  components: {
    Loader,
    introduction,
    weblogCart,socialCart,reportageCart,magazineCart,
    pagination
  },
  data() {
    return {
      isDesendingSelected: "",

      typeSelected: "",
      searchPlaceHolder: "",
      routes: [{ route: "", routeTitle_fa: "وبلاگ", routeTitle_en: "weblogs" }]
    };
  },
  watch: {
    blogsData() {
      setTimeout(() => {
        this.setStyle();
      }, 500);
    },
    "$route.query": {
      handler(value) {
        if (Object.keys(value).length == 0) return;
        let pack = {
          page: value.page ? value.page : 1,
          isDesending: value.isDesending ? value.isDesending : "",
          type: value.type ? value.type : 1,
          search: value.search ? value.search : "",
          keyword: value.keyword ? value.keyword : ""
        };
        this.searchPlaceHolder = value.search ? value.search : "";
        (this.typeSelected = value.type ? value.type : ""),
          (this.categorySelected = value.category ? value.category : ""),
          // this.$store.dispatch("getBlogsFromServer", pack);
      this.checkRequest('getBlogsFromServer',JSON.stringify(pack));

      },
      deep: true,
      immediate: true
    }
  },
  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "weblog-list-margarin"
        : "مارگارین - پست ها",
      meta: [
        {
          name: "description",
          content: this.blogsData ? this.blogsData.data.webLogIntro.text : false
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "weblog-list-margarin"
            : "مارگارین - پست ها"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    blogsData() {
      return this.$store.getters.getBlogsData;
    }
  },
  mounted() {
    if (this.blogsData == null) {
      let pack = {
        page: this.$route.query.page ? this.$route.query.page : 1,
        type: this.$route.query.type ? this.$route.query.type : 1,
        category: this.$route.query.category ? this.$route.query.category : "",
        search: this.$route.query.search ? this.$route.query.search : "",
        keyword: this.$route.query.keyword ? this.$route.query.keyword : ""
      };
      // this.$store.dispatch("getBlogsFromServer", pack);
      this.checkRequest('getBlogsFromServer',JSON.stringify(pack));
      
    } else {
      this.setStyle();
    }
    if(this.$route.query.keyword){
      this.gotoSection("weblogsList");
    }
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods: {
     gotoSection(id) {
      let el = document.getElementById(id);
      if (el == null) {
        this.setTimeOutGoto = setTimeout(() => {
          this.gotoSection(id);
        }, 1000);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    getTitle() {
      if(this.$route.query.keyword){
         if (this.$cookie.get("ltrTheme")) return "Search Results";
        else return "نتایج جستجو";
      }
    else  if (this.$route.query.type) {
        if (this.$route.query.type ==2) {
          if (this.$cookie.get("ltrTheme")) return " Articles Archive";
          else return "آرشیــــو  مقــــالات";
        } else {
          if (this.$cookie.get("ltrTheme")) return "News  Archive";
          else return "آرشیــــو اخــــبار ";
        }
      } else {
        if (this.$cookie.get("ltrTheme")) return "News and Articles Archive";
        else return "آرشیــــو اخــــبار و مقــــالات";
      }
    },
    pageChanged(page) {
      this.$router.replace({
        name: "weblogs",
        query: {
          page: page,
          type: this.$route.query.type ? this.$route.query.type : 1,
          category: this.$route.query.category
            ? this.$route.query.category
            : "",
          search: this.$route.query.search ? this.$route.query.search : "",
          keyword: this.$route.query.keyword ? this.$route.query.keyword : ""
        }
      });

      document
        .getElementById("weblogsList")
        .scrollIntoView({ behavior: "smooth" });
    },
    filteredBlogs(filter) {
      filter.page = this.$route.query.page ? this.$route.query.page : 1;
      if (filter.search == "") {
        filter.search = this.$route.query.search
          ? this.$route.query.search
          : "";
      }
      this.$router.replace({
        name: "weblogs",
        query: {
          page: filter.page,
          search: filter.search,
          isDesending: filter.isDesending,
          type: filter.type
        }
      });
    },
    setStyle() {
      if (window.innerWidth > 1000) {
        // this.$root.setProportionStyle(
        //   "width",
        //   "%",
        //   "#blogsSection #weblogsList .blogCart",
        //   1920,
        //   49,
        //   1496,
        //   48
        // );
        this.$root.unsetInlineStyle(
          "font-size",
          "#blogsSection #weblogsList .blogCart .innerContent .content h1"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#blogsSection #weblogsList .blogCart .innerContent .content p"
        );
      } else {
        // this.$root.setProportionStyle(
        //   "width",
        //   "%",
        //   "#blogsSection #weblogsList .blogCart",
        //   999,
        //   60,
        //   375,
        //   96
        // );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#blogsSection #weblogsList .blogCart .innerContent .content h1",
          999,
          20,
          375,
          16
        );

        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#blogsSection #weblogsList .blogCart .innerContent .content p",
          999,
          12,
          375,
          8
        );
      }
    }
  }
};
</script>
<style>
#weblogsList .blogCart .innerContent {
  height: 100%;
}
#weblogsList .blogCart .innerContent img {
  height: 100%;
}
#blogsSection .slotElements {
  margin-top: 23%;
}
p#notFound {
    width: 100%;
    text-align: center;
    margin: 50px 0;
    font-size: 24px;
    font-family: 'yekan-bold';
}
.searchPage #introductionSection #content div h3,
.searchPage #doubleLine div,
.searchPage #currentPathSection,
.searchPage .slotElements,
.searchPage #introductionSection #content img,
.searchPage #filterBox,
.searchPage #backgroundOrange{
  display: none !important;
}
.searchPage #introductionSection #content .innerContent {
  width: 100%;
}
</style>
