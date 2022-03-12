import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import cookie from "vue-cookie";
Vue.use(Vuex);
// front store
export default new Vuex.Store({
    state: {
        // server data
        faqList: null,
        aboutUsData: null,
        homeData: null,
        productsData: null,
        product: null,
        reports: null,
        blogsData: null,
        blogCategory: null,
        blogData: null,
        brands: [],
        contactUsData: null,
        cookingsData: null,
        cookingData: null,
        cookingCategory: null,
        productCategory: null,
        multiSliderNewsList: [],
        singleSliderNewsList: [],
        catalogueData: null,
        // inner data
        managerList: null,
        menus: [{
                id: 1,
                header: {
                    title: cookie.get("ltrTheme") ?
                        "Margarine brands" : "برندهای مارگارین",
                    route: "/"
                },
                menuItem: []
            },

            {
                id: 2,
                header: {
                    title: cookie.get("ltrTheme") ? "reports" : "گزارشات",
                    route: "/"
                },
                menuItem: [{
                        title: cookie.get("ltrTheme") ?
                            "Financial Statements" : "صورت های مالی",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Interpretive management" : "تفسیری مدیریت",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Board activities" : "فعالیت های هیئت مدیره",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Internal control reports" : "گزارشات کنترل داخلی",
                        route: "/"
                    }
                ]
            }
        ],
        racemeItemsAboutUs: null,
        contactUsCartsData: null,
        aboutUsCollapseList: null,
        adminPanelRole: null,
        mainMenu: null
    },
    getters: {
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
            return state.managerList
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
        getBlogsData(state) {
            return state.blogsData;
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
        }
    },

    mutations: {
        setFullMenuOneTime(state, menuList) {
            state.menus = menuList
        },
        setMenus(state, pack) {
            state.menus.forEach((menu) => {
                if (menu.id == pack.id) {
                    return (menu.menuItem = pack.menu);
                }
            });
        },
        pushMenu(state, pack) {
            state.menus.push(pack);
        },
        // inner data mutation
        setManagers(state, list) {
            state.managerList = list
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
        setBlogsData(state, data) {
            state.blogsData = data;
        },
        setReports(state, list) {
            state.reports = list;
        },
        setMainMenu(state, data) {
            state.mainMenu = data;
        }
    },
    actions: {
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
                    pagination: paginationData
                });
            } else {
                console.log(JSON.parse(step3));
                commit(pack.destination, JSON.parse(step3));
            }
        },
        getCatalogueDataFromServer({ dispatch }) {
            axios.get("Home/GetCatalogueInfo").then((res) => {
                let pack = {
                    destination: "setCataloguesData",
                    data: res.data.data
                };
                dispatch("withoutEnAndFa", pack);
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
            });
        },
        getCookingFromServer({ dispatch }, id) {
            axios.get(`Home/GetCookingSingle?id=${id}`).then((response) => {
                let pack = {
                    destination: "setCookingData",
                    data: response.data.data
                };
                dispatch("withoutEnAndFa", pack);
            });
        },
        getContactUsFromServer({ dispatch }) {
            axios.get("Home/GetContactUsInfo").then((res) => {
                let pack = {
                    destination: "setContactUsData",
                    data: res.data.data
                };
                dispatch("withoutEnAndFa", pack);
            });
        },
        getBlogFromServer({ dispatch }, id) {
            axios.get(`Home/GetBlogSingle?id=${id}`).then((response) => {
                let pack = {
                    destination: "setBlogData",
                    data: response.data.data
                };
                dispatch("withoutEnAndFa", pack);
            });
        },
        getCookingsFromServer({ dispatch }, pack) {
            axios
                .get(
                    `Home/GetCookingArchive?search=${
            pack.search ? pack.search : ""
          }&cat=${pack.category ? pack.category : ""}&pageNumber=${
            pack.page ? pack.page : 1
          }&isDesending=${pack.isDesending ? pack.isDesending : true}`
                )
                .then((res) => {
                    let pack = {
                        destination: "setCookingsData",
                        data: res.data.data,
                        pagination: JSON.parse(res.headers["x-pagination"])
                    };
                    dispatch("withoutEnAndFa", pack);
                });
        },
        getBlogsFromServer({ dispatch }, pack) {
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
                        let pack = {
                            destination: "setBlogsData",
                            data: res.data.data,
                            pagination: JSON.parse(res.headers["x-pagination"])
                        };
                        dispatch("withoutEnAndFa", pack);
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
                        let pack = {
                            destination: "setBlogsData",
                            data: res.data.data,
                            pagination: JSON.parse(res.headers["x-pagination"])
                        };
                        dispatch("withoutEnAndFa", pack);
                    });
            }
        },
        getProductFromServer({ dispatch }, id) {
            axios.get(`Home/GetProductSingle?id=${id}`).then((response) => {
                let pack = {
                    destination: "setProduct",
                    data: response.data.data
                };
                dispatch("withoutEnAndFa", pack);
            });
        },
        getHomeDataFromServer({ dispatch }) {
            axios.get("Home/GetHomeInfo").then((res) => {
                let pack = {
                    destination: "setHomeData",
                    data: res.data.data
                };
                dispatch("withoutEnAndFa", pack);
            });
        },
        getBrandsFromServer({ commit }) {
            axios.get("Home/GetBrands").then((res) => {
                res.data.data.forEach((item, index) => {
                    res.data.data[index].route = `/products?brand=${item.id}`;
                });
                let pack = {
                    destination: "setBrands",
                    data: res.data.data
                };
                let step1 = JSON.stringify(pack.data);
                let step2 = step1.replace(/_fa"/g, '"');
                let step3 = step2.replace(/_en"/g, '"');
                commit("setBrands", JSON.parse(step3));
                commit("setMenus", { id: 1, menu: JSON.parse(step3) });
                // dispatch("withoutEnAndFa", pack);
            });
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
            commit('setFullMenuOneTime', menus)

        },
        getMainMenuFromServer({ commit, dispatch }) {
            axios.get("Home/GetMenu").then((res) => {
                let step1 = JSON.stringify(res.data.data);
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
                            route: "/"
                        },
                        menuItem: []
                    };
                    menus[key].forEach((item) => {
                        pack.menuItem.push({
                            title: item.title,
                            route: item.url
                        });
                    });
                    commit("pushMenu", pack);
                }
                if (i >= 4) {
                    dispatch('setMainMenuOrder')
                }
            });
        },
        getReportFromServer({ commit }) {
            axios.get("Home/GetReport").then((res) => {
                let result = res.data.data;
                console.log(result);
                result.forEach((item) => {
                    item.route = "http://blogtest.ir/" + item.file;
                });
                console.log(result);

                let step1 = JSON.stringify(result);
                let step2 = step1.replace(/_fa"/g, '"');
                let step3 = step2.replace(/_en"/g, '"');
                commit("setMenus", { id: 2, menu: JSON.parse(step3) });
                commit("setReports", res.data.data);
                // dispatch("withoutEnAndFa", pack);
            });
        },
        getProductsFromServer({ dispatch }, pack) {
            axios
                .get(
                    `Home/GetProductArchive?pageNumber=${pack.page}&search=${
            pack.search ? pack.search : ""
          }&cat=${pack.category ? pack.category : ""}${
            pack.type ? "&type=" + pack.type : ""
          }${pack.brand ? "&brand=" + pack.brand : ""}`
                )
                .then((res) => {
                    let pack = {
                        destination: "setProductsData",
                        data: res.data.data,
                        pagination: JSON.parse(res.headers["x-pagination"])
                    };
                    dispatch("withoutEnAndFa", pack);
                });
        },
        getFaqListFromServer({ dispatch }) {
            axios.get("Home/GetFAQ").then((res) => {
                let pack = {
                    destination: "setFaqList",
                    data: res.data.data
                };
                dispatch("withoutEnAndFa", pack);
            });
        },
        getAboutUsFromServer({ dispatch }) {
            axios.get("Home/GetAboutUs").then((res) => {
                let pack = {
                    destination: "setAboutUsData",
                    data: res.data.data
                };
                dispatch("withoutEnAndFa", pack);
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
            });
        }
    },
    modules: {}
});