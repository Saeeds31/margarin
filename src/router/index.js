import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",

    component: function() {
        return import ( /* webpackChunkName: "front" */ "../views/front/index.vue");
    },
    children: [{
            path: "/",
            name: "home",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/home.vue"
                );
            }
        },
        {
            path: "/about-us",
            name: "aboutUs",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/aboutUs.vue"
                );
            }
        },

        {
            path: "/weblogs",
            name: "weblogs",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/blogs.vue"
                );
            }
        },

        {
            path: "/products",
            name: "products",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/products.vue"
                );
            }
        },

        {
            path: "/product-detail/:id/:slug?",
            name: "productDetail",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/product.vue"
                );
            }
        },

        {
            path: "/catalogue",
            name: "catalogue",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/catalogue.vue"
                );
            }
        },

        {
            path: "/faq",
            name: "faq",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/faq.vue"
                );
            }
        },
        {
            path: "/health-ambassador",
            name: "healthAmbassador",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/healthAmbassador.vue"
                );
            }
        },


        {
            path: "/contact-us",
            name: "contactUs",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/contactUs.vue"
                );
            }
        },

        {
            path: "/cooking-archive",
            name: "cookings",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/cookings.vue"
                );
            }
        },

        {
            path: "/cooking-detail/:id/:slug?",
            name: "cookingDetail",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/cookingDetail.vue"
                );
            }
        },

        {
            path: "/cooperation",
            name: "cooperation",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/cooperation.vue"
                );
            }
        },
        {
            path: "/weblog-detail/:id/:slug?",
            name: "weblogs",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/blogDetail.vue"
                );
            }
        },
        {
            path: "/login",
            name: "loginRegister",

            component: function() {
                return import (
                    /* webpackChunkName: "front" */
                    "../views/front/loginRegister.vue"
                );
            }
        },
        {
            path: "/admin-panel",
            name: "adminPanel",

            component: function() {
                return import (
                    /* webpackChunkName: "admin" */
                    "../views/admin/index.vue"
                );
            },
            children: [

                {
                    path: "about-us",
                    name: "panelAboutUs",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/aboutUs.vue"
                        );
                    }
                },

                {
                    path: "contact-us",
                    name: "panelContactUs",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/contactUs.vue"
                        );
                    }
                },

                {
                    path: "contact-us-introduction",
                    name: "panelContactUsIntroduction",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/contactUsIntroduction.vue"
                        );
                    }
                },


                {
                    path: "weblogs",
                    name: "panelWeblogs",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/weblogs.vue"
                        );
                    }
                },


                {
                    path: "weblogs-introduction",
                    name: "panelWeblogsIntroduction",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/weblogsIntroduction.vue"
                        );
                    }
                },


                {
                    path: "weblog-categories",
                    name: "panelWeblogCategories",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/weblogCategories.vue"
                        );
                    }
                },

                {
                    path: "weblog-comments",
                    name: "panelWeblogComment",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/weblogComments.vue"
                        );
                    }
                },


                {
                    path: "products",
                    name: "panelProducts",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/products.vue"
                        );
                    }
                },


                {
                    path: "products-introduction",
                    name: "panelProductsIntroduction",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/productsIntroduction.vue"
                        );
                    }
                },
                {
                    path: "product-comments",
                    name: "panelProductComment",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/productComment.vue"
                        );
                    }
                },

                {
                    path: "product-categories",
                    name: "panelProductCategories",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/productCategory.vue"
                        );
                    }
                },

                {
                    path: "product-brand",
                    name: "panelProductBrand",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/productBrand.vue"
                        );
                    }
                },

                {
                    path: "product-feature",
                    name: "panelProductFeature",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/productFeature.vue"
                        );
                    }
                },
                {
                    path: "recipes",
                    name: "panelRecipes",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/recipes.vue"
                        );
                    }
                },

                {
                    path: "recipes-introduction",
                    name: "panelCookingIntroduction",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/cookingIntroduction.vue"
                        );
                    }
                },

                {
                    path: "recipes-raw_material",
                    name: "panelRecipesRawMaterial",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/recipesRawMaterial.vue"
                        );
                    }
                },
                {
                    path: "recipe-categories",
                    name: "panelRecipeCategories",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/recipeCategories.vue"
                        );
                    }
                },

                {
                    path: "recipe-comments",
                    name: "panelRecipeComment",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/recipeComments.vue"
                        );
                    }
                },

                {
                    path: "faq-categories",
                    name: "panelFaqCategories",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/faqCategories.vue"
                        );
                    }
                },
                {
                    path: "faq-introduction",
                    name: "panelFaqIntroduction",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/faqIntroduction.vue"
                        );
                    }
                },

                {
                    path: "settings",
                    name: "panelSettings",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/settings.vue"
                        );
                    }
                },

                {
                    path: "users",
                    name: "panelUsers",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/users.vue"
                        );
                    }
                },
                {
                    path: "user-role",
                    name: "panelUserRole",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/userRole.vue"
                        );
                    }
                },
                {
                    path: "faqs",
                    name: "panelFaqs",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/faqs.vue"
                        );
                    }
                },

                {
                    path: "sliders",
                    name: "panelSliders",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/sliders.vue"
                        );
                    }
                },

                {
                    path: "cooperation",
                    name: "panelCooperation",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/cooperation.vue"
                        );
                    }
                },

                {
                    path: "cooperation-introduction",
                    name: "panelCooperationIntroduction",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/cooperationIntroduction.vue"
                        );
                    }
                },
                {
                    path: "prize",
                    name: "panelPrize",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/prize.vue"
                        );
                    }
                },
                {
                    path: "user-question",
                    name: "panelUserQuestion",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/userQuestion.vue"
                        );
                    }
                },
                {
                    path: "catalogue-introduction",
                    name: "panelCatalogueIntroduction",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/catalogueIntroduction.vue"
                        );
                    }
                },
                {
                    path: "catalogues",
                    name: "panelCatalogue",

                    component: function() {
                        return import (
                            /* webpackChunkName: "admin" */
                            "../views/admin/catalogue.vue"
                        );
                    }
                },
            ]
        },
    ]
}];
// .vue
const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {

        if (to.name != from.name)
            window.scrollTo(0, 0)
            // ...
    },
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;