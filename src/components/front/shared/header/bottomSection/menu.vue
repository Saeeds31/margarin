<template>
  <nav class="width55">
    <ul id="bottomMenu" class="d-flex justify-content-between width100">
      <li>
        <router-link to="/">
          <i class="far fa-circle"></i>
          {{
            $cookie.get("ltrTheme")
              ? "Domestic and foreign suppliers"
              : "تامین کنندگان داخلی و خارجی"
          }}
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <i class="far fa-circle"></i>
          {{ $cookie.get("ltrTheme") ? "Shareholders" : "سهامداران" }}
        </router-link>
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
        <router-link to="/">
          <i class="fa fa-angle-down blackColor04"></i>
          {{ $cookie.get("ltrTheme") ? "Products" : "محصولات" }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
