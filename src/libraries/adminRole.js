export default {
    data() {
        return {
            roleData: {
                Admin: "/admin-panel/about-us,/admin-panel/menus,/admin-panel/management,/admin-panel/reports,/admin-panel/weblogs,/admin-panel/weblog-categories,/admin-panel/weblog-comments,/admin-panel/weblogs-introduction,/admin-panel/faqs,/admin-panel/faq-categories,/admin-panel/faq-introduction,/admin-panel/contact-us,/admin-panel/contact-us-introduction,/admin-panel/cooperation,/admin-panel/cooperation-introduction,/admin-panel/prize,/admin-panel/panelRecipes,/admin-panel/recipes,/admin-panel/recipe-categories,/admin-panel/recipes-introduction,/admin-panel/recipe-comments,/admin-panel/settings,/admin-panel/sliders,/admin-panel/products,/admin-panel/products-introduction,/admin-panel/product-categories,/admin-panel/product-brand,/admin-panel/product-comments,/admin-panel/catalogues,/admin-panel/catalogue-introduction,/admin-panel/users,/admin-panel/user-role,/admin-panel/user-question",
                SuperAdmin: "/admin-panel/about-us,/admin-panel/menus,/admin-panel/management,/admin-panel/reports,/admin-panel/weblogs,/admin-panel/weblog-categories,/admin-panel/weblog-comments,/admin-panel/weblogs-introduction,/admin-panel/faqs,/admin-panel/faq-categories,/admin-panel/faq-introduction,/admin-panel/contact-us,/admin-panel/contact-us-introduction,/admin-panel/cooperation,/admin-panel/cooperation-introduction,/admin-panel/prize,/admin-panel/recipes,/admin-panel/recipe-categories,/admin-panel/recipes-introduction,/admin-panel/recipe-comments,/admin-panel/settings,/admin-panel/sliders,/admin-panel/products,/admin-panel/products-introduction,/admin-panel/product-categories,/admin-panel/product-brand,/admin-panel/product-comments,/admin-panel/catalogues,/admin-panel/catalogue-introduction,/admin-panel/users,/admin-panel/user-role,/admin-panel/user-question",
                Chef: "/admin-panel/panelRecipes,/admin-panel/recipes,/admin-panel/recipe-categories,/admin-panel/recipes-introduction,",
                Marketing: "/admin-panel/weblogs,/admin-panel/weblog-categories,/admin-panel/weblog-comments,/admin-panel/weblogs-introduction,/admin-panel/recipes,/admin-panel/recipe-categories,/admin-panel/recipes-introduction,/admin-panel/recipe-comments,/admin-panel/products,/admin-panel/products-introduction,/admin-panel/product-categories,/admin-panel/product-brand,/admin-panel/product-comments"
            }
        };
    },
    methods: {
        showRoute(role, route) {
            let res = false;
            let roleList = role.split(',');
            roleList.forEach((role) => {
                if (this.roleData[role].includes(route)) {
                    return res = true;
                }
            })
            return res;
        }
    }
};