<template>
  <div id="buttons" class="d-flex justify-content-between">
    <button data-aos="zoom-in-up"
      data-aos-duration="2500"
      data-aos-delay="2500"

      data-aos-once="false"  v-if="$root.sectionIndexHome!=1" class="reStyleToggle" @click="toggleMenu()" id="toggleMenu">
      <i class="fa fa-bars"></i>
    </button>
    <button v-else @click="toggleMenu()" id="toggleMenu">
      <i class="fa fa-bars"></i>
    </button>
    <button v-if="$root.sectionIndexHome==1" id="phone" class="hiddenInMobile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="25"
        height="30"
        viewBox="0 0 30 30"
      >
        <image
          id="Layer_2572"
          data-name="Layer 2572"
          width="30"
          height="30"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAxVJREFUSEutl1uITVEYxw1yy/2SB7cR5R7lwa0YlweU+/VBHpCI8DDPygsvFC/iQRIpGXKXYsSMQkge1CBy52EwLuNu/H6nvafjOGfvfc6ZVb/Onr3++/uvb+1vr7WmpKGhoVkTtAnEGAH1UAcv4RF8yBW7JIvxFMRz4Rvsg5oEA5uHpj/8BDMpga/wAG7Dl8wY6cat6dwO69NE77heDmdjzLvSPxg6QQ/oEOibB1lf4fdZeozQWOFBmJPFwJEvSmAePtqOi1IYCd3gD/yGSngYijRuwx/HYGZEVr63WVAVoWkRGIQSZ3AM+O6dfs3PwXMFGm/kd2dEwLCrlovpcCuL1uyGw/sgKwsrrNrRwQB87CMch3qNr6d1xPlfQ1AGvzKEvoo+8CO4/4Lfy+BM2SYFA/Od34UqjR9zYUUmaZ8RDYXUdKU1nx8F3aEVWNV+SqcDc+8tAIvQr6VC4/tcDEniiuYp+M4+5dBb0eOgN5idA9TcAtPDT9X71Ro7536HSZrf9aoYYUv6LVSn3swvgNVsES+Gjg5I4xVcGDBJc4AnEgj9jOaDlf0ErGaLbQYMhDqNnXenu2eCgMMCbQJpak0YAG/hCFiQY2E8pKraIJthS4Jo09BcSqBTUgq+b5fcO8EzJlkGtaGx826nI4xqe+lck9BYme846y6Uvla7Mp2KCeryORlu5GGeVZq5O+1CtSEmqBXqgvC6GPNMY0v+Iri/RrWbdFrhrwo1z7Yf9yPYVegbE9S9diVUZ9G1514XyFzhGqXZjO20Gs+D+2tUc23eDxXwBgaBi8dUsGDvQTn8t7HkMtbMYjsKLgLFNHc1FxNnMTbjULCQi0NNYO4utQzOhIGjMg417iqHwR2mmPbPSSaJsWZNZW7mnkpqkhprPhsOQOdi0ubZHVCej7F+LvIu+HGfWtTY9tC5Nl9jA5YGmU8sMHM/tcpCjPXzCLsVPCjm03YjXucDhRqHZu652yDJ0ekkuiXwvSmMjeEKtQlWQ68c6XsCWQqNZ7ViM0738aDnDHi88d+ZtuAm4nLqFIdH39QzfwHruOtZJ12L2gAAAABJRU5ErkJggg=="
        />
      </svg>
    </button>
    <button v-if="$root.sectionIndexHome==1" @click="showSearch=true" id="search" class="hiddenInMobile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="25"
        height="30"
        viewBox="0 0 30 30"
      >
        <image
          id="Layer_2573"
          data-name="Layer 2573"
          width="30"
          height="30"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAlpJREFUSEvFl0tLVVEYhjtWWiQFhhekQSGSiag/QFSslAyESHKmDhIbVNRIcB44UQQHOggSBAcWkjjJoIEKEYg1SBDzgljSwJl4oayOzxt7H7aLffY+nPayBQ9nXb93fWuvy3di8Xj8REg6T3s11ME1KIAM+AHrMA9v4VOYIW97LEA4m44P4T4UhRj9Tfss9MFkKhNIJlzL4AEoS8WI0WeU8hPYChrrJ9zGgCE4k4aoO2SBzF34ksyGKdxMx5f/IOgdKlHti00/e17hEjp8gAsRCcvMFDTCH9OmKxyj4Q3URyjqmuog8zyZsAQ1OxtpDaMVsOM1Lo91Jl/BHRuqjs175t6RcCmVOoM5FoXHsN1ieqzjM2xRVKaXneXed3Xk8TMK3ZaF97CvU/PVKzxI4YFlYV2pV2HVK6xbqvN/CPcg2mVZWEutl23D63E7hReWhbXE5aAJ/E3aXKqYgSivStOPcSr0aCSShE9Reg23LXrdiu0RU1jlJpiwJKwjpHd920/4JJXvoMaC+GNsKqg4krzPor71ezgXofg0tm7AryBhtUV5feroaAXX/RzxC30e0bEf9Gqlm3R89Np9hizHY91eiZQs2NMO13e5koayNqmi029wCa7DLmjZEwFgUHibR8enoKNQmMIEPtKnFxRluqmWTCUcgF4m3RcragwSdgfnktEGuQm66C9qnGPsO79zoIBeRs3Y6jJ1t5x699PpD8BcKsKms2cdYX0z/ZsISwp7qsDd2ZnkF9MRDhPya5ewlvynM+nTxyWsZW6AYtBKxY9LWKugJZbn+bB0CEmyvRJthbuPAAAAAElFTkSuQmCC"
        />
      </svg>
    </button>
    <search @exit="exitSearch()" v-if="showSearch" />
    <router-link 
      class="hiddenInMobile"
      v-if="!$route.name.includes('healthAmbassador')&&$root.sectionIndexHome==1"
      to="/health-ambassador"
      id="ambassadorButton"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="31"
        height="30"
        viewBox="0 0 31 30"
      >
        <image
          id="Layer_2748"
          data-name="Layer 2748"
          width="31"
          height="30"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAAABHNCSVQICAgIfAhkiAAAAuVJREFUSEu9l0uITlEcwOfzjighomQniR0lC7FSXhslO6FsbWWNoshKKSxYyJDHJEOhRGhEMrHwyBSmvI3xfozfbzqnbvc73/fde2uc+vWdzj33/M75n8c9X21gYKAtkaZTthyWgPka/ISncAUuwZfMe+PIz4RpMDaU2/BHeAEv4U/eU8vJbWQbbIHJqV6Fsof87oZTMBfmgO/aSaViXpS+gzvwLNtmVj6LB8dgcRNp/tEBCu7CCPjb5D2fm+7BrdC5tiifRMFVmFdCbNWT0AFjEu/9pmxYwMdGYTR0wc3BghD2I+Q3lBRb/ThcSMiNwhTog/4gjR0YTuY89ChfROZG6FlZf0r+g0YWwmZwrk+A4XbUJqfgNZxWfojMxrLWUD8l/84zd8r6UMfw74cHuQ50KO+h0G1SJaXkrnTnehmsCUIdOyHuglHk7yt3K1i5Smo050o+w+pMBHaQfwKKDX2v8uQpU7AnjeS+/gumwq7QltvydoiEg+0bSrkr3i24HdzKduI5jAyR7h9KuQO2A4rthEdsnF5/Pym3ggdAldQs7LE9V7tT64hjcs5fKe8l4wehSioiT7XroutW3k5mbRUz71SVG4VO5avInPuPco9Xj9125YbAw35+hQ5UGbnHrF+2rvhhMeyGv2wqK3fUXkJ0fYtyV7ufxhUl7WXlRvkyPNKTv0wYDk+loqmM3HA/hosweKrmr1ErKTsDhqdIKip3dft5PWu4Y8N5ueWb4CAU+dgUkSt2nt1R77MjSsl97kXADrQ6+VrJneMPIdRv86FsJLfeOjgM8SqcmoZmcsVvgtgrdF1qJrfyUjgKM1IvU9ZIrtgLhCv7a4N36xZcqt7s0IEFiYd5uevExdoN16Huj0K2jVYjj3XHk9kHLsZsysr9UnmB8FqsvGUqKo8NKd8DE0OB8k6YAH4dr4E300KprNxG/Wu0F7yhun38y+Th4d8hR144VZHbuFtwK3hL8Vrsqi6d/gFmAP87hbs6GgAAAABJRU5ErkJggg=="
        />
      </svg>
      <span>{{$cookie.get('ltrTheme')?'Be a health ambassador':' سلامت باش'}}</span>
    </router-link>
    <div data-aos="fade-right" data-aos-duration="1000"    data-aos-once="false" v-if="showMenuModal" id="mobileMenu">
  
        <img id="closeArrow" @click="showMenuModal=false"  src="@/assets/front/images/arrowclose.png" alt="">
     
     <menuSection data-aos="zoom-in" :data-aos-duration="$root.screenSize>1000?8000-index*1000:1000"    data-aos-once="false" v-for="(item, index) in menu" :key="index" :header="item.header" :menuItem="item.menuItem" />
    </div>
  </div>
</template>
<script>
import search from "@/components/front/shared/searchModal.vue"
import menuBar from "@/components/front/home/slider/header/menu.vue"
import menuSection from "@/components/front/shared/menuSection.vue"
import logo from "@/components/front/shared/logo.vue"
export default {
  components:{
    logo,menuBar,search,menuSection
  },
  methods:{
    toggleMenu(){

      this.showMenuModal=!this.showMenuModal
    },
    exitSearch(flag){
      this.showSearch=flag
    }
  },
  data(){
    return{
      showSearch:false,
      showMenuModal:false,
      menu:[
        {
          header:{title:this.$cookie.get('ltrTheme')?'Margarin':'مارگارین',route:'/'},
          menuItem:[
            {title:this.$cookie.get('ltrTheme')?'About us (introduction company, managers and board members)':'درباره ما (معرفی شرکت,معرفی مدیران و اعضاء هیئت مدیره)',route:'/about-us'},
            {title:this.$cookie.get('ltrTheme')?'vision':'چشم انداز',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Mission':'ماموریت',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Goals and policies':'اهداف و خط مشی',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'certificates':'گواهینامه ها',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Catalog':'کاتالوگ',route:'/catalogue'},
          ]
        },
        
        {
          header:{title:this.$cookie.get('ltrTheme')?'Products':'محصولات',route:'/products'},
          menuItem:[
            {title:this.$cookie.get('ltrTheme')?'Family':'خانوار',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Class and industry':'صنف و صنعت',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Product price list':'لیست قیمت محصولات',route:'/'},
          ]
        },
        
        {
          header:{title:this.$cookie.get('ltrTheme')?'Margarine brands':'برندهای مارگارین',route:'/'},
          menuItem:[
            {title:this.$cookie.get('ltrTheme')?'Aftab':'آفتاب',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Khorous':'خروس',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Aftab Talaei':'آفتاب طلایی',route:'/'},
          ]
        },
        
        {
          header:{title:this.$cookie.get('ltrTheme')?'reports':'گزارشات',route:'/'},
          menuItem:[
            {title:this.$cookie.get('ltrTheme')?'Financial Statements':'صورت های مالی',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Interpretive management':'تفسیری مدیریت',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Board activities':'فعالیت های هیئت مدیره',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Internal control reports':'گزارشات کنترل داخلی',route:'/'},
          ]
        },
        
        {
          header:{title:this.$cookie.get('ltrTheme')?'public relations':'روابط عمومی',route:'/'},
          menuItem:[
            {title:this.$cookie.get('ltrTheme')?'public relations':'ارتباط با روابط عمومی',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Partner panel (pay slip, survey form or feedback, internal news)':'پنل همکاران(فیش حقوقی , فرم نظر سنجی یا انتقادات و پیشنهادات , خبرهای داخلی)',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'News and announcements':'اخبار و اطلاعیه ها',route:'/weblogs?weblogType=news'},
            {title:this.$cookie.get('ltrTheme')?'Photo Gallery':'گالری تصاویر',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Aftab Magazine':'مجله آفتاب',route:'/'},
          ]
        },
        
        {
          header:{title:this.$cookie.get('ltrTheme')?'Research and Development':'تحقیق و توسعه',route:'/'},
          menuItem:[
            {title:this.$cookie.get('ltrTheme')?'Research and Development':'معرفی دپارتمان تحقیق و توسعه',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'new products':'محصولات جدید',route:'/products'},
            {title:this.$cookie.get('ltrTheme')?'Accepting innovative offers':'پذیرش پیشنهادات نوآورانه',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'Collaborate with individuals':'همکاری مشترک با افراد',route:'/'},
          ]
        },
        
        {
          header:{title:this.$cookie.get('ltrTheme')?'Applied links':'لینک های کاربردی',route:'/'},
          menuItem:[
            {title:this.$cookie.get('ltrTheme')?'Applied links':'لینک های مفید',route:'/'},
            {title:this.$cookie.get('ltrTheme')?'kitchen':'آشپزخانه',route:'/cooking-archive'},
            {title:this.$cookie.get('ltrTheme')?'Cooperation with us (recruitment)':'همکاری با ما (جذب نیرو)',route:'/cooperation'},
            {title:this.$cookie.get('ltrTheme')?'Contact us':'ارتباط با ما',route:'/contact-us'},
            {title:this.$cookie.get('ltrTheme')?'Frequently Asked Questions':'سوالات متداول',route:'/faq'},
          ]
        },
        
      
      ]
    }
  }
}
</script>
<style >
 #mobileMenu nav ul {
        flex-direction: column !important;
    }
</style>
<style>

</style>
