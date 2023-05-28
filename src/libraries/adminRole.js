export default {
  data() {
    return {
      roleData: {
        Admin:
          "/admin-panel/supplier-list,/admin-panel/supplier-message,/admin-panel/supplier-news,/admin-panel/supplier-news-categories,/admin-panel/galleries,/admin-panel/gallery-introduction,/admin-panel/partners-panel,/admin-panel/partners-introduction,/admin-panel/utility-menu,/admin-panel/InovativeIdea,/admin-panel/upload-file,/admin-panel/magazine-introduction,/admin-panel/magazine,/admin-panel/reportage-introduction,/admin-panel/reportage,/admin-panel/social-responsibily,/admin-panel/social-responsibily-introduction,/admin-panel/about-us,/admin-panel/menus,/admin-panel/management,/admin-panel/reports,/admin-panel/weblogs,/admin-panel/weblog-categories,/admin-panel/weblog-comments,/admin-panel/weblogs-introduction,/admin-panel/faqs,/admin-panel/faq-categories,/admin-panel/faq-introduction,/admin-panel/contact-us,/admin-panel/contact-us-introduction,/admin-panel/cooperation,/admin-panel/cooperation-introduction,/admin-panel/prize,/admin-panel/panelRecipes,/admin-panel/recipes,/admin-panel/recipe-categories,/admin-panel/recipes-introduction,/admin-panel/recipe-comments,/admin-panel/settings,/admin-panel/sliders,/admin-panel/products,/admin-panel/products-introduction,/admin-panel/product-categories,/admin-panel/product-brand,/admin-panel/product-comments,/admin-panel/catalogues,/admin-panel/catalogue-introduction,/admin-panel/users,/admin-panel/user-question",
        SuperAdmin:
          "/admin-panel/supplier-list,/admin-panel/supplier-message,/admin-panel/supplier-news,/admin-panel/supplier-news-categories/admin-panel/galleries,/admin-panel/gallery-introduction,/admin-panel/partners-panel,/admin-panel/partners-introduction,/admin-panel/utility-menu,/admin-panel/InovativeIdea,/admin-panel/upload-file,/admin-panel/magazine-introduction,/admin-panel/magazine/admin-panel/reportage-introduction,/admin-panel/reportage,/admin-panel/social-responsibily,/admin-panel/social-responsibily-introduction,/admin-panel/about-us,/admin-panel/menus,/admin-panel/management,/admin-panel/reports,/admin-panel/weblogs,/admin-panel/weblog-categories,/admin-panel/weblog-comments,/admin-panel/weblogs-introduction,/admin-panel/faqs,/admin-panel/faq-categories,/admin-panel/faq-introduction,/admin-panel/contact-us,/admin-panel/contact-us-introduction,/admin-panel/cooperation,/admin-panel/cooperation-introduction,/admin-panel/prize,/admin-panel/recipes,/admin-panel/recipe-categories,/admin-panel/recipes-introduction,/admin-panel/recipe-comments,/admin-panel/settings,/admin-panel/sliders,/admin-panel/products,/admin-panel/products-introduction,/admin-panel/product-categories,/admin-panel/product-brand,/admin-panel/product-comments,/admin-panel/catalogues,/admin-panel/catalogue-introduction,/admin-panel/users,/admin-panel/user-question",
        SocialResponsibility:
          "/admin-panel/social-responsibily,/admin-panel/social-responsibily-introduction",
        Reports:
          "/admin-panel/reports,/admin-panel/reportage,/admin-panel/reportage-introduction",
        ContactUs:
          "/admin-panel/contact-us-introduction,/admin-panel/contact-us,/admin-panel/faqs,/admin-panel/faq-categories,/admin-panel/faq-introduction,/admin-panel/cooperation,/admin-panel/cooperation-introduction",
        User: "/admin-panel/users",
        Gallery: "/admin-panel/galleries,/admin-panel/gallery-introduction,",
        AboutUs: "/admin-panel/about-us",
        CoworkerPanel:
          "/admin-panel/partners-panel,/admin-panel/partners-introduction,",
        Slider: "/admin-panel/sliders",
        MenuAndLink: "/admin-panel/utility-menu,/admin-panel/menus",
        Prize: "/admin-panel/prize",
        IntroductionManager: "/admin-panel/management",
        Blogs:
          "/admin-panel/weblogs,/admin-panel/weblog-categories,/admin-panel/weblog-comments,/admin-panel/weblogs-introduction",
        Product:
          "/admin-panel/products,/admin-panel/products-introduction,/admin-panel/product-categories,/admin-panel/product-brand,/admin-panel/product-comments",
        Chef: "/admin-panel/panelRecipes,/admin-panel/recipes,/admin-panel/recipe-categories,/admin-panel/recipes-introduction,/admin-panel/recipe-comments",
        Catalogue:
          "/admin-panel/catalogues,/admin-panel/catalogue-introduction",
        Magazine: "/admin-panel/magazine-introduction,/admin-panel/magazine",
        Marketing: "/admin-panel/magazine-introduction,/admin-panel/magazine",
        Supplier:"/admin-panel/supplier/message,/admin-panel/supplier/profile,/admin-panel/supplier/news,/admin-panel/supplier/change-password",
        Supplier_managment:"/admin-panel/supplier-list,/admin-panel/supplier-news,/admin-panel/supplier-message,/admin-panel/supplier-news-categories"  
      },
    };
  },
  methods: {
    showRoute(role, route) {
      let res = false;
      let roleArray = role.split(",");
      if (roleArray.length > 0) {
        
        roleArray.forEach((role) => {
          if (this.roleData[role].includes(route)) {
            return (res = true);
          }
        });
      } else {
        res = false;
      }

      return res;
    },
  },
};
