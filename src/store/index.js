import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import cookie from "vue-cookie"
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
        menus: [{
                id: 1,
                header: {
                    title: cookie.get("ltrTheme") ? "Margarin" : "مارگارین",
                    route: "/"
                },
                menuItem: [{
                        title: cookie.get("ltrTheme") ?
                            "About us (introduction company, managers and board members)" : "درباره ما (معرفی شرکت,معرفی مدیران و اعضاء هیئت مدیره)",
                        route: "/about-us"
                    },
                    {
                        title: cookie.get("ltrTheme") ? "vision" : "چشم انداز",
                        route: "/about-us?section=collapseSection"
                    },
                    {
                        title: cookie.get("ltrTheme") ? "Mission" : "ماموریت",
                        route: "/about-us?section=collapseSection"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Goals and policies" : "اهداف و خط مشی",
                        route: "/about-us?section=collapseSection"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "certificates" : "گواهینامه ها",
                        route: "/about-us?section=awardsSection"
                    },
                    {
                        title: cookie.get("ltrTheme") ? "Catalog" : "کاتالوگ",
                        route: "/catalogue"
                    }
                ]
            },

            {
                id: 2,
                header: {
                    title: cookie.get("ltrTheme") ? "Products" : "محصولات",
                    route: "/products"
                },
                menuItem: [{
                        title: cookie.get("ltrTheme") ? "Family" : "خانوار",
                        route: `/products?type=${
              cookie.get("ltrTheme") ? "Family" : "خانوار"
            }`
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Class and industry" : "صنف و صنعت",
                        route: `/products?type=${
              cookie.get("ltrTheme") ? "Class and industry" : "صنف و صنعت"
            }`
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Product price list" : "لیست قیمت محصولات",
                        route: "/products"
                    }
                ]
            },

            {
                id: 3,
                header: {
                    title: cookie.get("ltrTheme") ?
                        "Margarine brands" : "برندهای مارگارین",
                    route: "/"
                },
                menuItem: []
            },

            {
                id: 4,
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
            },

            {
                id: 5,
                header: {
                    title: cookie.get("ltrTheme") ?
                        "public relations" : "روابط عمومی",
                    route: "/contact-us"
                },
                menuItem: [{
                        title: cookie.get("ltrTheme") ?
                            "public relations" : "ارتباط با روابط عمومی",
                        route: "/contact-us"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Partner panel (pay slip, survey form or feedback, internal news)" : "پنل همکاران(فیش حقوقی , فرم نظر سنجی یا انتقادات و پیشنهادات , خبرهای داخلی)",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "News and announcements" : "اخبار و اطلاعیه ها",
                        route: "/weblogs?weblogType=news"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Photo Gallery" : "گالری تصاویر",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Aftab Magazine" : "مجله آفتاب",
                        route: "/"
                    }
                ]
            },

            {
                id: 6,
                header: {
                    title: cookie.get("ltrTheme") ?
                        "Research and Development" : "تحقیق و توسعه",
                    route: "/"
                },
                menuItem: [{
                        title: cookie.get("ltrTheme") ?
                            "Research and Development" : "معرفی دپارتمان تحقیق و توسعه",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "new products" : "محصولات جدید",
                        route: "/products"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Accepting innovative offers" : "پذیرش پیشنهادات نوآورانه",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Collaborate with individuals" : "همکاری مشترک با افراد",
                        route: "/cooperation"
                    }
                ]
            },

            {
                id: 7,
                header: {
                    title: cookie.get("ltrTheme") ?
                        "Applied links" : "لینک های کاربردی",
                    route: "/"
                },
                menuItem: [{
                        title: cookie.get("ltrTheme") ?
                            "Applied links" : "لینک های مفید",
                        route: "/"
                    },
                    {
                        title: cookie.get("ltrTheme") ? "kitchen" : "آشپزخانه",
                        route: "/cooking-archive"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Cooperation with us (recruitment)" : "همکاری با ما (جذب نیرو)",
                        route: "/cooperation"
                    },
                    {
                        title: cookie.get("ltrTheme") ? "Contact us" : "ارتباط با ما",
                        route: "/contact-us"
                    },
                    {
                        title: cookie.get("ltrTheme") ?
                            "Frequently Asked Questions" : "سوالات متداول",
                        route: "/faq"
                    }
                ]
            }
        ],
        racemeItemsAboutUs: null,
        contactUsCartsData: null,
        aboutUsCollapseList: null
    },
    getters: {
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
        }
    },
    mutations: {
        setMenus(state, pack) {
            state.menus.forEach((menu) => {
                if (menu.id == pack.id) {
                    return (menu.menuItem = pack.menu);
                }
            });
        },
        // inner data mutation
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
            axios
                .get(
                    `Home/GetBlogArchive?search=${pack.search ? pack.search : ""}&cat=${
            pack.category ? pack.category : ""
          }&pageNumber=${pack.page ? pack.page : 1}&isDesending=true&type=${
            pack.type ? pack.type : 1
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
                commit("setMenus", { id: 3, menu: JSON.parse(step3) });
                // dispatch("withoutEnAndFa", pack);
            });
        },
        getProductsFromServer({ dispatch }, pack) {
            axios
                .get(
                    `Home/GetProductArchive?pageNumber=${pack.page}&search=${
            pack.search ? pack.search : ""
          }&cat=${pack.category ? pack.category : ""}&isDesending=${
            pack.isDesending ? pack.isDesending : true
          }${pack.type ? "&type=" + pack.type : ""}${
            pack.brand ? "&brand=" + pack.brand : ""
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