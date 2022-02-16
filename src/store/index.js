import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
        blogsData: null,
        blogCategory: null,
        blogData: null,
        contactUsData: null,
        cookingsData: null,
        cookingData: null,
        cookingCategory: null,
        productCategory: null,
        multiSliderNewsList: [],
        singleSliderNewsList: [],
        // inner data
        racemeItemsAboutUs: null,
        contactUsCartsData: null,
    },
    getters: {
        // inner data getters
        getMultiSliderNews(state) {
            return state.multiSliderNewsList
        },
        getSingleSliderNews(state) {
            return state.singleSliderNewsList

        },
        getRacemeItems(state) {
            return state.racemeItemsAboutUs
        },
        getContactUsCartsData(state) {
            return state.contactUsCartsData
        },
        // main sever data getters
        getProductCategory(state) {
            return state.productCategory
        },
        getCookingCategory(state) {
            return state.cookingCategory
        },
        getBlogCategory(state) {
            return state.blogCategory
        },
        getCookingData(state) {
            return state.cookingData
        },
        getCookingsData(state) {
            return state.cookingsData
        },
        getContactUsData(state) {
            return state.contactUsData
        },
        getBlogData(state) {
            return state.blogData
        },
        getBlogsData(state) {
            return state.blogsData
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
        }
    },
    mutations: {
        // inner data mutation
        setMultiSliderNews(state, list) {
            state.multiSliderNewsList = list;
        },
        setSingleSliderNews(state, list) {
            state.singleSliderNewsList = list;
        },
        setRacemeItems(state, list) {
            state.racemeItemsAboutUs = list
        },
        setContactUsCartsData(state, data) {
            state.contactUsCartsData = data;
        },
        // main server data mutations
        setProductCategory(state, list) {
            state.productCategory = list;
        },
        setCookingCategory(state, list) {
            state.cookingCategory = list;
        },
        setBlogCategory(state, list) {
            state.blogCategory = list
        },
        setCookingData(state, data) {
            state.cookingData = data;
        },
        setCookingsData(state, data) {
            state.cookingsData = data;
        },
        setContactUsData(state, data) {
            state.contactUsData = data
        },
        setBlogData(state, data) {
            state.blogData = data
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
            state.blogsData = data
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
                console.log(JSON.parse(step3))
                commit(pack.destination, JSON.parse(step3));
            }
        },
        getProductCategoryFromServer({ commit }) {
            axios.get("Home/GetProductCategories").then(response => {
                let list = [];
                response.data.data.forEach(element => {
                    if (element.name_en) {
                        list.push(element.name_en)
                    }
                    if (element.name_fa) {
                        list.push(element.name_fa)
                    }
                });
                commit("setProductCategory", list)
            })

        },
        getCookingCategoryFromServer({ commit }) {
            axios.get("Home/GetRecipeCategories").then(response => {
                let list = [];
                response.data.data.forEach(element => {
                    if (element.name_en) {
                        list.push(element.name_en)
                    }
                    if (element.name_fa) {
                        list.push(element.name_fa)
                    }
                });
                commit("setCookingCategory", list)
            })
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
            axios.get("Home/GetContactUsInfo").then(res => {
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
                    `Home/GetCookingArchive?search=${pack.search ? pack.search : ""}&cat=${
            pack.category ? pack.category : ""
          }&pageNumber=${pack.page ? pack.page : 1}&isDesending=${
            pack.isDesending ? pack.isDesending : true
          }`
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
            axios
                .get(
                    `Home/GetBlogArchive?search=${pack.search ? pack.search : ""}&cat=${
            pack.category ? pack.category : ""
          }&pageNumber=${pack.page ? pack.page : 1}&isDesending=true&type=${
            pack.type ? pack.type : 1
          }&keyword=${pack.keyword?pack.keyword:""}`
                )
                .then((res) => {
                    let pack = {
                        destination: "setBlogsData",
                        data: res.data.data,
                        pagination: JSON.parse(res.headers["x-pagination"])
                    };
                    dispatch("withoutEnAndFa", pack);
                });
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
        getProductsFromServer({ dispatch }, pack) {
            axios
                .get(
                    `Home/GetProductArchive?pageNumber=${pack.page}&search=${
            pack.search ? pack.search : ""
          }&cat=${pack.category ? pack.category : ""}&isDesending=${
            pack.isDesending ? pack.isDesending : true
          }`
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
                res.data.data.forEach(element => {
                    if (element.name_en) {
                        list.push(element.name_en)
                    }
                    if (element.name_fa) {
                        list.push(element.name_fa)
                    }
                });
                commit("setBlogCategory", list)

            });
        }
    },
    modules: {}
});