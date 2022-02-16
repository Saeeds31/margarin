<template>
  <nav id="navBarMenu" class="width40 hiddenInMobile">
    <ul class="width100 d-flex justify-content-between align-items-center">
      <li>
        <a to="/weblogs">{{$cookie.get('ltrTheme')?"Suppliers":"تامین کنندگان"}}
      <i class="fa fa-circle"></i></a></li>
      <li>
        <a 
          >{{$cookie.get('ltrTheme')?"Shareholders":'سهامداران'}}
          <i class="fa fa-circle"></i>
        </a>
      </li>

      <li>
        <a 
          >{{$cookie.get('ltrTheme')?"Customer service":'امور مشتریان'}}
          <i class="fa fa-circle"></i>
        </a>
      </li>
      <li>
        <router-link to="/products"
          >{{$cookie.get('ltrTheme')?"products":'محصولات'}}
          <i class="fa fa-circle"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/about-us">
          {{$cookie.get('ltrTheme')?"about us":'درباره ما'}}
          <i class="fa fa-circle"></i>

        </router-link>
      </li>
    </ul>
  </nav>
</template>
