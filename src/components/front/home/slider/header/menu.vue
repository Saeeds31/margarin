<template>
  <nav id="navBarMenu" class="width40 hiddenInMobile">
    <ul class="width100 d-flex justify-content-between align-items-center">
      <li>
        <a to="/weblogs">تامین کنندگان
      <i class="fa fa-circle"></i></a></li>
      <li>
        <a 
          >سهامداران
          <i class="fa fa-circle"></i>
        </a>
      </li>

      <li>
        <a 
          >امور مشتریان
          <i class="fa fa-circle"></i>
        </a>
      </li>
      <li>
        <router-link to="/products"
          >محصولات
          <i class="fa fa-circle"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/about-us">
          درباره ما
          <i class="fa fa-circle"></i>

        </router-link>
      </li>
    </ul>
  </nav>
</template>
