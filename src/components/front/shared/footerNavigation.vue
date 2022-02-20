<template>
  <div v-if="showFooterNav"   data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="false" id="homeFooterNavigation">
    <a class="circleNavFooter" @click="showMenu=!showMenu" id="mobileMenuBar">
        <i class="fa fa-bars"></i>
    </a>
    <router-link v-if="!showMenu" :to="$route.name.includes('healthAmbassador')?'/health-ambassador':'/'" class="circleNavFooter" id="cuurentSection" :class="{'health':$route.name.includes('healthAmbassador')}">
        <svg
            v-if="$route.name.includes('healthAmbassador')"
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
            <img id="logoSvgfooter" v-else src="@/assets/front/images/logo.svg">
        
    </router-link>
    <router-link class="healthRoute circleNavFooter" :class="{'health':$route.name.includes('healthAmbassador')}" :to="$route.name.includes('healthAmbassador')?'/':'/health-ambassador'">
     <svg
            v-if="!$route.name.includes('healthAmbassador')"
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
                     <img id="logoSvgfooter" v-else src="@/assets/front/images/logo.svg">

    </router-link>
    <div data-aos="fade-up" v-if="showMenu"  data-aos-duration="1500" id="mobileMenuSection">
           <menuSection v-for="(item, index) in menu" :key="index" :header="item.header" :menuItem="item.menuItem" />
    </div>
  </div>
</template>
<script>
import menuSection from "@/components/front/shared/menuSection.vue"

export default {
  components:{
    menuSection
  },
  watch:{
    '$route':{
      handler(){
        this.showMenu=false
      }
    }
  },
  data(){
    return{
      showMenu:false,
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
  },
  methods: {
    showFooterNav(){
      if(this.$route.name.includes('home')){
        return true;
        
      }else{
        if (!this.$root.isInViewport(document.getElementById("Header"))) {
        this.showGotoTOp = true;
      } else {
        this.showGotoTOp = false;
      }
      }
    }
     
  }
};
</script>
<style>
</style>
