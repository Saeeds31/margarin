<template>
  <nav id="navBarMenu" class="width45 hiddenInMobile">
    <ul class="width100 d-flex justify-content-between align-items-center">
      <li>
        <!-- <router-link to="/reportage" >{{$cookie.get('ltrTheme')?"Reportage":"گزارشات"}} -->
          <router-link to="/login" >{{$cookie.get('ltrTheme')?"Supplier system":"سامانه تامین کنندگان"}}
      <i class="fa fa-circle"></i></router-link></li>
      <li>
        <a  target="_blank"  href="https://saham.margarineco.com"
          >{{$cookie.get('ltrTheme')?"Shareholders":'سهامداران'}}
          <i class="fa fa-circle"></i>
        </a>
      </li>

      <li>
        <a target="_blank" href="https://crm.margarineco.com"
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
