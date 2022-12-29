<template>
  <nav class="width55">
    <ul id="bottomMenu" class="d-flex justify-content-between width100">
      <li>
        <router-link to="/login">
          <i class="far fa-circle"></i>
          {{
            $cookie.get("ltrTheme")
              ?"Supplier system":"سامانه تامین کنندگان"
          }}
        </router-link>
      </li>
      <li>
        <a href="https://saham.margarineco.com/">
          <i class="far fa-circle"></i>
          {{ $cookie.get("ltrTheme") ? "Shareholders" : "سهامداران" }}
        </a>
      </li>
      <li>
        <router-link to="/weblogs">
          <i class="far fa-circle"></i>
          {{ $cookie.get("ltrTheme") ? "Blog" : "بلاگ" }}
        </router-link>
      </li>

      <li>
        <router-link to="/about-us">
          <i class="far fa-circle"></i>
          {{ $cookie.get("ltrTheme") ? "About Us" : "درباره ما" }}
        </router-link>
      </li>
      <li>
        <router-link to="/products">
          <i class="fa fa-angle-down blackColor04"></i>
          {{ $cookie.get("ltrTheme") ? "Products" : "محصولات" }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
