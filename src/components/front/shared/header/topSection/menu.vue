<template>
  <nav class="width50">
    <ul id="topMenu" class="width100 d-flex justify-content-between">
      <li><router-link to="/">CRM
      <i class="fa fa-circle"></i></router-link></li>
      <li>
        <router-link to="/"
          >
          {{$cookie.get('ltrTheme')?'Partners panel':'پنل همکاران'}}
          <i class="fa fa-circle"></i>
        </router-link>
      </li>

      <li>
        <router-link to="/login"
          >{{$cookie.get('ltrTheme')?'Membership':'عضویت'}}
          <i class="fa fa-circle"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/contact-us"
          >{{$cookie.get('ltrTheme')?'Contact Us':'تماس با ما'}}
          <i class="fa fa-circle"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          {{$cookie.get('ltrTheme')?'Honors':'افتخارات'}}
          <i class="fa fa-circle"></i>
        </router-link>
      </li>
      <li><router-link to="/">{{$cookie.get('ltrTheme')?'Home':'صفحه نخست'}} </router-link></li>
    </ul>
  </nav>
</template>
