import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import cookie from "vue-cookie";
Vue.use(Vuex);
// front store
export default new Vuex.Store({
  state: {
    // pre fetch state
    requestList: [],
    // server data
    faqList: null,
    aboutUsData: null,
    underDevProduct: null,
    singleReportage: null,
    homeData: null,
    productsData: null,
    product: null,
    socialResponsibilityData: null,
    reports: null,
    blogsData: null,
    magazineData: null,
    galleryData: null,
    singlePartner: null,
    blogCategory: null,
    socialResponse: null,
    blogData: null,
    brands: [],
    contactUsData: null,
    cookingsData: null,
    reportageData: null,
    pertnerData: null,
    singleMagazine: null,
    cookingData: null,
    cookingCategory: null,
    productCategory: null,
    multiSliderNewsList: [],
    singleSliderNewsList: [],
    catalogueData: null,
    utilityLinks: [],
    // inner data
    managerList: null,
    menus: [
      {
        id: 1,
        header: {
          title: cookie.get("ltrTheme")
            ? "Margarine brands"
            : "برندهای مارگارین",
          route: "/",
        },
        menuItem: [],
      },

      {
        id: 2,
        header: {
          title: cookie.get("ltrTheme") ? "reports" : "گزارشات",
          route: "/",
        },
        menuItem: [
          {
            title: cookie.get("ltrTheme")
              ? "Financial Statements"
              : "صورت های مالی",
            route:
              "https://test.mmc.ir/reportage-detail/5/%D8%B5%D9%88%D8%B1%D8%AA-%D9%87%D8%A7%DB%8C-%D9%85%D8%A7%D9%84%DB%8C",
          },
          {
            title: cookie.get("ltrTheme")
              ? "Interpretive management"
              : "تفسیری مدیریت",
            route:
              "https://test.mmc.ir/reportage-detail/3/%D8%AA%D9%81%D8%B3%DB%8C%D8%B1%DB%8C-%D9%85%D8%AF%D9%8A%D8%B1%D9%8A%D8%AA",
          },
          {
            title: cookie.get("ltrTheme")
              ? "Board activities"
              : "فعالیت های هیئت مدیره",
            route:
              "https://test.mmc.ir/reportage-detail/6/%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%AA-%D9%87%D8%A7%D9%8A-%D9%87%D9%8A%D8%A6%D8%AA-%D9%85%D8%AF%D9%8A%D8%B1%D9%87-",
          },
          {
            title: cookie.get("ltrTheme")
              ? "Internal control reports"
              : "گزارشات کنترل داخلی",
            route:
              "https://test.mmc.ir/reportage-detail/7/%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4%D8%A7%D8%AA-%D9%83%D9%86%D8%AA%D8%B1%D9%84-%D8%AF%D8%A7%D8%AE%D9%84%D9%8A",
          },
        ],
      },
    ],
    racemeItemsAboutUs: null,
    contactUsCartsData: null,
    aboutUsCollapseList: null,
    adminPanelRole: null,
    mainMenu: null,
  },
  getters: {
    getGalleryData(state) {
      return state.galleryData;
    },
    getUnderDevProducts(state) {
      return state.underDevProduct;
    },
    getSingleReportage(state) {
      return state.singleReportage;
    },
    getSinglePartner(state) {
      return state.singlePartner;
    },
    getSocialResponsibilitySingleData(state) {
      return state.socialResponsibilityData;
    },
    getRequestList(state) {
      return state.requestList;
    },
    getAdminPanelRole(state) {
      return state.adminPanelRole;
    },
    getMenus(state) {
      return state.menus;
    },
    getAboutUsCollapseList(state) {
      return state.aboutUsCollapseList;
    },
    // inner data getters
    getMultiSliderNews(state) {
      return state.multiSliderNewsList;
    },
    getSingleSliderNews(state) {
      return state.singleSliderNewsList;
    },
    getRacemeItems(state) {
      return state.racemeItemsAboutUs;
    },
    getContactUsCartsData(state) {
      return state.contactUsCartsData;
    },
    getManagerList(state) {
      return state.managerList;
    },
    // main sever data getters
    getBrands(state) {
      return state.brands;
    },
    getProductCategory(state) {
      return state.productCategory;
    },
    getCatalogueData(state) {
      return state.catalogueData;
    },
    getCookingCategory(state) {
      return state.cookingCategory;
    },
    getBlogCategory(state) {
      return state.blogCategory;
    },
    getCookingData(state) {
      return state.cookingData;
    },
    getCookingsData(state) {
      return state.cookingsData;
    },
    getContactUsData(state) {
      return state.contactUsData;
    },
    getBlogData(state) {
      return state.blogData;
    },
    getSingleMagazine(state) {
      return state.singleMagazine;
    },
    getBlogsData(state) {
      return state.blogsData;
    },

    getMagazineData(state) {
      return state.magazineData;
    },

    getSocialResponsibility(state) {
      return state.socialResponse;
    },
    getReportageData(state) {
      return state.reportageData;
    },
    getPartnerPanelData(state) {
      return state.pertnerData;
    },
    getProduct(state) {
      return state.product;
    },
    getProductsData(state) {
      return state.productsData;
    },
    getFaqList(state) {
      return state.faqList;
    },
    getAboutUsData(state) {
      return state.aboutUsData;
    },
    getHomeData(state) {
      return state.homeData;
    },
    getReports(state) {
      return state.reports;
    },
    getMainMenu(state) {
      return state.mainMenu;
    },
    getUtilityLinks(state) {
      return state.utilityLinks;
    },
  },
  mutations: {
    // pre fetch mutation
    setSingleReportage(state, data) {
      state.singleReportage = data;
    },
    setPartnerSingle(state, data) {
      state.singlePartner = data;
    },
    setReportageData(state, data) {
      state.reportageData = data;
    },
    setPartner(state, data) {
      state.pertnerData = data;
    },
    addToRequestList(state, reqObject) {
      state.requestList.push(reqObject);
      // reference of reqObject is exist in preFetch mixin
    },
    // end of pre fetch mutation
    setFullMenuOneTime(state, menuList) {
      state.menus = menuList;
    },
    setMenus(state, pack) {
      state.menus.forEach((menu) => {
        if (menu.id == pack.id) {
          return (menu.menuItem = pack.menu);
        }
      });
    },
    setSocialResponsibility(state, data) {
      state.socialResponse = data;
    },
    pushMenu(state, pack) {
      state.menus.push(pack);
    },
    // inner data mutation
    setManagers(state, list) {
      state.managerList = list;
    },
    adminPanelRole(state, role) {
      state.adminPanelRole = role;
    },
    setAboutUSCollapseList(state, list) {
      state.aboutUsCollapseList = list;
    },
    setMultiSliderNews(state, list) {
      state.multiSliderNewsList = list;
    },
    setSingleSliderNews(state, list) {
      state.singleSliderNewsList = list;
    },
    setRacemeItems(state, list) {
      state.racemeItemsAboutUs = list;
    },
    setContactUsCartsData(state, data) {
      state.contactUsCartsData = data;
    },
    // main server data mutations
    setBrands(state, data) {
      state.brands = data;
    },
    setCataloguesData(state, data) {
      state.catalogueData = data;
    },
    setProductCategory(state, list) {
      state.productCategory = list;
    },
    setCookingCategory(state, list) {
      state.cookingCategory = list;
    },
    setBlogCategory(state, list) {
      state.blogCategory = list;
    },
    setCookingData(state, data) {
      state.cookingData = data;
    },
    setCookingsData(state, data) {
      state.cookingsData = data;
    },
    setContactUsData(state, data) {
      state.contactUsData = data;
    },
    setBlogData(state, data) {
      state.blogData = data;
    },
    setMagazineSingledData(state, data) {
      state.singleMagazine = data;
    },
    setGalleryData(state, data) {
      state.galleryData = data;
    },
    setSocialResponsibilitySingleData(state, data) {
      state.socialResponsibilityData = data;
    },
    setHomeData(state, data) {
      state.homeData = data;
    },
    setAboutUsData(state, data) {
      state.aboutUsData = data;
    },
    setFaqList(state, list) {
      state.faqList = list;
    },
    setProductsData(state, data) {
      state.productsData = data;
    },
    setProduct(state, data) {
      state.product = data;
    },
    setUnderDevProducts(state, data) {
      state.underDevProduct = data;
    },
    setBlogsData(state, data) {
      state.blogsData = data;
    },
    setMagazineData(state, data) {
      state.magazineData = data;
    },

    setReports(state, list) {
      state.reports = list;
    },
    setMainMenu(state, data) {
      state.mainMenu = data;
    },
    setUtilityLinks(state, list) {
      state.utilityLinks = list;
    },
  },
  actions: {
    // بخش دوم هر تابع برای افزایش کارایی و سرعت وب سایت در نظر گرفته شده است
    // goto preFetchMixin.js file to understand this
    withoutEnAndFa({ commit }, pack) {
      let step1 = JSON.stringify(pack.data);
      let step2 = step1.replace(/_fa"/g, '"');
      let step3 = step2.replace(/_en"/g, '"');
      if (pack.pagination) {
        let paginationData = {};
        paginationData.TotalPages = pack.pagination.TotalPages;
        paginationData.CurrentPage = pack.pagination.CurrentPage;
        commit(pack.destination, {
          data: JSON.parse(step3),
          pagination: paginationData,
        });
      } else {
        commit(pack.destination, JSON.parse(step3));
      }
    },
    getCatalogueDataFromServer({ dispatch, commit }) {
      axios.get("Home/GetCatalogueInfo").then((res) => {
        let pack = {
          destination: "setCataloguesData",
          data: res.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getCatalogueDataFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    getProductCategoryFromServer({ commit }) {
      axios.get("Home/GetProductCategories").then((response) => {
        let list = [];
        response.data.data.forEach((element) => {
          if (element.name_en) {
            list.push(element.name_en);
          }
          if (element.name_fa) {
            list.push(element.name_fa);
          }
        });
        commit("setProductCategory", list);
        commit("addToRequestList", {
          actionName: "getProductCategoryFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "commit",
          functionName: "setProductCategory",
          data: JSON.stringify(list),
        });
      });
    },
    getCookingCategoryFromServer({ commit }) {
      axios.get("Home/GetRecipeCategories").then((response) => {
        let list = [];
        response.data.data.forEach((element) => {
          if (element.name_en) {
            list.push(element.name_en);
          }
          if (element.name_fa) {
            list.push(element.name_fa);
          }
        });
        commit("setCookingCategory", list);
        commit("addToRequestList", {
          actionName: "getCookingCategoryFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "commit",
          functionName: "setCookingCategory",
          data: JSON.stringify(list),
        });
      });
    },
    getCookingFromServer({ dispatch, commit }, id) {
      axios.get(`Home/GetCookingSingle?id=${id}`).then((response) => {
        let pack = {
          destination: "setCookingData",
          data: response.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getCookingFromServer",
          actionParam: JSON.stringify(id),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    getContactUsFromServer({ dispatch, commit }) {
      axios.get("Home/GetContactUsInfo").then((res) => {
        let pack = {
          destination: "setContactUsData",
          data: res.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getContactUsFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    getBlogFromServer({ dispatch, commit }, id) {
      axios.get(`Home/GetBlogSingle?id=${id}`).then((response) => {
        let pack = {
          destination: "setBlogData",
          data: response.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getBlogFromServer",
          actionParam: JSON.stringify(id),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },

    getMagazineSingle({ dispatch, commit }, id) {
      axios.get(`Home/GetMagazineSingle?id=${id}`).then((response) => {
        let pack = {
          destination: "setMagazineSingledData",
          data: response.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getMagazineSingle",
          actionParam: JSON.stringify(id),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },

    getReportageSingleFromServer({ dispatch, commit }, id) {
      axios.get(`Home/GetReportageSingle?id=${id}`).then((response) => {
        let pack = {
          destination: "setSingleReportage",
          data: response.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getReportageSingleFromServer",
          actionParam: JSON.stringify(id),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    // pertner detail
    getPartnerSingleFromServer({ dispatch, commit }, id) {
      axios.get(`Home/GetColleagueNewSingle?id=${id}`).then((response) => {
        let pack = {
          destination: "setPartnerSingle",
          data: response.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getPartnerSingleFromServer",
          actionParam: JSON.stringify(id),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    getSocialSingleResponsibilityFromServer({ dispatch, commit }, id) {
      axios
        .get(`Home/GetSocialResponsibilitySingle?id=${id}`)
        .then((response) => {
          let pack = {
            destination: "setSocialResponsibilitySingleData",
            data: response.data.data,
          };
          dispatch("withoutEnAndFa", pack);
          commit("addToRequestList", {
            actionName: "getSocialSingleResponsibilityFromServer",
            actionParam: JSON.stringify(id),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(pack),
          });
        });
    },
    getCookingsFromServer({ dispatch,commit }, pack) {
      axios
        .get(
          `Home/GetCookingArchive?search=${
            pack.search ? pack.search : ""
          }&cat=${pack.category ? pack.category : ""}&pageNumber=${
            pack.page ? pack.page : 1
          }&isDesending=${pack.isDesending ? pack.isDesending : true}`
        )
        .then((res) => {
          let resPack = {
            destination: "setCookingsData",
            data: res.data.data,
            pagination: JSON.parse(res.headers["x-pagination"]),
          };
          dispatch("withoutEnAndFa", resPack);
          commit("addToRequestList", {
            actionName: "getCookingsFromServer",
            actionParam: JSON.stringify(pack),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(resPack),
          });
        });
    },
    getBlogsFromServer({ dispatch, commit }, pack) {
      if (pack.keyword) {
        // Home/SearchBlogKewords?KeyWord=sadad&pageNumber=2&isDesending=true
        axios
          .get(
            `Home/SearchBlogKewords?pageNumber=${
              pack.page ? pack.page : 1
            }&isDesending=${
              pack.isDesending ? pack.isDesending : true
            }&keyword=${pack.keyword ? pack.keyword : ""}`
          )
          .then((res) => {
            let resPack = {
              destination: "setBlogsData",
              data: res.data.data,
              pagination: JSON.parse(res.headers["x-pagination"]),
            };
            dispatch("withoutEnAndFa", resPack);
            commit("addToRequestList", {
              actionName: "getBlogsFromServer",
              actionParam: JSON.stringify(pack),
              commitOrDispatch: "dispatch",
              functionName: "withoutEnAndFa",
              data: JSON.stringify(resPack),
            });
          });
      } else {
        axios
          .get(
            `Home/GetBlogArchive?search=${pack.search ? pack.search : ""}&cat=${
              pack.category ? pack.category : ""
            }&pageNumber=${pack.page ? pack.page : 1}&isDesending=${
              pack.isDesending ? pack.isDesending : true
            }&type=${pack.type ? pack.type : 1}`
          )
          .then((res) => {
            let resPack = {
              destination: "setBlogsData",
              data: res.data.data,
              pagination: JSON.parse(res.headers["x-pagination"]),
            };
            dispatch("withoutEnAndFa", resPack);
            commit("addToRequestList", {
              actionName: "getBlogsFromServer",
              actionParam: JSON.stringify(pack),
              commitOrDispatch: "dispatch",
              functionName: "withoutEnAndFa",
              data: JSON.stringify(resPack),
            });
          });
      }
    },
    // gallery

    getGalleriesDataFromServer({ dispatch, commit }) {
      axios.get(`Home/GetGallery`).then((res) => {
        let resPack = {
          destination: "setGalleryData",
          data: res.data.data,
        };
        dispatch("withoutEnAndFa", resPack);
        commit("addToRequestList", {
          actionName: "getGalleriesDataFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(resPack),
        });
      });
    },
    getMagazineFromServer({ dispatch, commit }, pack) {
      axios
        .get(
          `Home/GetSocialMagazineArchive?pageNumber=${
            pack.page ? pack.page : 1
          }`
        )
        .then((res) => {
          let resPack = {
            destination: "setMagazineData",
            data: res.data.data,
            pagination: JSON.parse(res.headers["x-pagination"]),
          };
          dispatch("withoutEnAndFa", resPack);
          commit("addToRequestList", {
            actionName: "getMagazineFromServer",
            actionParam: JSON.stringify(pack),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(resPack),
          });
        });
    },
    getReportageFromServer({ dispatch, commit }, pack) {
      axios
        .get(`Home/GetReportageArchive?pageNumber=${pack.page ? pack.page : 1}`)
        .then((res) => {
          let resPack = {
            destination: "setReportageData",
            data: res.data.data,
            pagination: JSON.parse(res.headers["x-pagination"]),
          };
          dispatch("withoutEnAndFa", resPack);
          commit("addToRequestList", {
            actionName: "getReportageFromServer",
            actionParam: JSON.stringify(pack),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(resPack),
          });
        });
    },
    // partner

    getPartnerFromServer({ dispatch, commit }, pack) {
      axios
        .get(
          `Home/GetColleagueNewsArchive?pageNumber=${pack.page ? pack.page : 1}`
        )
        .then((res) => {
          let resPack = {
            destination: "setPartner",
            data: res.data.data,
            pagination: JSON.parse(res.headers["x-pagination"]),
          };
          dispatch("withoutEnAndFa", resPack);
          commit("addToRequestList", {
            actionName: "getPartnerFromServer",
            actionParam: JSON.stringify(pack),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(resPack),
          });
        });
    },
    getSocialResponsibilityFromServer({ dispatch, commit }, pack) {
      axios
        .get(
          `Home/GetSocialResponsibilityArchive?pageNumber=${
            pack.page ? pack.page : 1
          }`
        )
        .then((res) => {
          let resPack = {
            destination: "setSocialResponsibility",
            data: res.data.data,
            pagination: JSON.parse(res.headers["x-pagination"]),
          };
          dispatch("withoutEnAndFa", resPack);
          commit("addToRequestList", {
            actionName: "getSocialResponsibilityFromServer",
            actionParam: JSON.stringify(pack),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(resPack),
          });
        });
    },
    getProductFromServer({ dispatch, commit }, id) {
      axios.get(`Home/GetProductSingle?id=${id}`).then((response) => {
        let pack = {
          destination: "setProduct",
          data: response.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getProductFromServer",
          actionParam: JSON.stringify(id),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },

    getHomeDataFromServer({ dispatch, commit }) {
      axios.get("Home/GetHomeInfo").then((res) => {
        let pack = {
          destination: "setHomeData",
          data: res.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getHomeDataFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    getBrandsFromServer({ dispatch, commit }) {
      axios.get("Home/GetBrands").then((res) => {
        res.data.data.forEach((item, index) => {
          res.data.data[index].route = `/products?brand=${item.id}`;
        });
        let pack = {
          destination: "setBrands",
          data: res.data.data,
        };
        dispatch("handlerGetBrand", pack);
        commit("addToRequestList", {
          actionName: "getBrandsFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "handlerGetBrand",
          data: JSON.stringify(pack),
        });
        // dispatch("withoutEnAndFa", pack);
      });
    },
    handlerGetBrand({ commit }, pack) {
      let step1 = JSON.stringify(pack.data);
      let step2 = step1.replace(/_fa"/g, '"');
      let step3 = step2.replace(/_en"/g, '"');
      commit("setBrands", JSON.parse(step3));
      commit("setMenus", { id: 1, menu: JSON.parse(step3) });
    },
    setMainMenuOrder({ state, commit }) {
      let menus = state.menus;
      let m0 = menus[0];
      let m1 = menus[1];
      let m2 = menus[2];
      let m3 = menus[3];
      menus[0] = m2;
      menus[1] = m3;
      menus[2] = m0;
      menus[3] = m1;
      commit("setFullMenuOneTime", menus);
    },
    getMainMenuFromServer({ commit, dispatch }) {
      axios.get("Home/GetMenu").then((res) => {
        dispatch("handlerGetMainMenu", res.data.data);
        commit("addToRequestList", {
          actionName: "getMainMenuFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "handlerGetMainMenu",
          data: JSON.stringify(res.data.data),
        });
      });
    },
    getUtilityLinksFromServer({ commit, dispatch }) {
      axios.get("utilityLink/GetUtilsLink").then((res) => {
        let pack = {
          destination: "setUtilityLinks",
          data: res.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getUtilityLinksFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    handlerGetMainMenu({ commit, dispatch }, data) {
      let step1 = JSON.stringify(data);
      let step2 = step1.replace(/_fa"/g, '"');
      let step3 = step2.replace(/_en"/g, '"');
      let menus = JSON.parse(step3);
      let i = 2;
      for (const key in menus) {
        i++;

        let pack = {
          id: i,
          header: {
            title: key,
            route: "/",
          },
          menuItem: [],
        };
        menus[key].forEach((item) => {
          pack.menuItem.push({
            title: item.title,
            route: item.url,
          });
        });
        commit("pushMenu", pack);
      }
      if (i >= 4) {
        dispatch("setMainMenuOrder");
      }
    },
    getReportFromServer({ dispatch, commit }) {
      axios.get("Home/GetReport").then((res) => {
        dispatch("handlerGetReport", res.data.data);
        commit("addToRequestList", {
          actionName: "getReportFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "handlerGetReport",
          data: JSON.stringify(res.data.data),
        });
        // dispatch("withoutEnAndFa", pack);
      });
    },
    handlerGetReport({ commit }, data) {
      let result = data;
      result.forEach((item) => {
        item.route = "https://test.mmc.ir/" + item.file;
      });
      let step1 = JSON.stringify(result);
      let step2 = step1.replace(/_fa"/g, '"');
      let step3 = step2.replace(/_en"/g, '"');
      commit("setMenus", { id: 2, menu: JSON.parse(step3) });
      commit("setReports", data);
    },
    getProductsFromServer({ dispatch, commit }, pack) {
      axios
        .get(
          `Home/GetProductArchive?pageNumber=${pack.page}&search=${
            pack.search ? pack.search : ""
          }&cat=${pack.category ? pack.category : ""}${
            pack.type ? "&type=" + pack.type : ""
          }${pack.brand ? "&brand=" + pack.brand : ""}`
        )
        .then((res) => {
          let resPack = {
            destination: "setProductsData",
            data: res.data.data,
            pagination: JSON.parse(res.headers["x-pagination"]),
          };
          dispatch("withoutEnAndFa", resPack);
          commit("addToRequestList", {
            actionName: "getProductsFromServer",
            actionParam: JSON.stringify(pack),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(resPack),
          });
        });
    },
    getUnderDevProductFromServer({ dispatch, commit }, pack) {
      axios
        .get(
          `Home/GetDevelopmentDepartment?pageNumber=${pack.page}&search=${
            pack.search ? pack.search : ""
          }&cat=${pack.category ? pack.category : ""}${
            pack.type ? "&type=" + pack.type : ""
          }${pack.brand ? "&brand=" + pack.brand : ""}`
        )
        .then((res) => {
          let resPack = {
            destination: "setUnderDevProducts",
            data: res.data.data,
            pagination: JSON.parse(res.headers["x-pagination"]),
          };
          dispatch("withoutEnAndFa", resPack);
          commit("addToRequestList", {
            actionName: "getUnderDevProductFromServer",
            actionParam: JSON.stringify(pack),
            commitOrDispatch: "dispatch",
            functionName: "withoutEnAndFa",
            data: JSON.stringify(resPack),
          });
        });
    },
    getFaqListFromServer({ dispatch, commit }) {
      axios.get("Home/GetFAQ").then((res) => {
        let pack = {
          destination: "setFaqList",
          data: res.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getFaqListFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    getAboutUsFromServer({ dispatch, commit }) {
      axios.get("Home/GetAboutUs").then((res) => {
        let pack = {
          destination: "setAboutUsData",
          data: res.data.data,
        };
        dispatch("withoutEnAndFa", pack);
        commit("addToRequestList", {
          actionName: "getAboutUsFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "dispatch",
          functionName: "withoutEnAndFa",
          data: JSON.stringify(pack),
        });
      });
    },
    getBlogCategoryFromServer({ commit }) {
      axios.get("Home/GetBlogCategories").then((res) => {
        let list = [];
        res.data.data.forEach((element) => {
          if (element.name_en) {
            list.push(element.name_en);
          }
          if (element.name_fa) {
            list.push(element.name_fa);
          }
        });
        commit("setBlogCategory", list);
        commit("addToRequestList", {
          actionName: "getBlogCategoryFromServer",
          actionParam: JSON.stringify(null),
          commitOrDispatch: "commit",
          functionName: "setBlogCategory",
          data: JSON.stringify(list),
        });
      });
    },
  },
});
