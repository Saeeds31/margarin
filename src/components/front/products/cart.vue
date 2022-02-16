<template>
 <div @mouseover="customeHover(product.id,product.catColor)"  @mouseenter="customeHover(product.id,product.catColor)" @mouseleave="killCustomeHover(product.id)" class="productCart">
      <div :id="`product${product.id}`" class="product">
      <div class="image width100 height40vh d-flex justify-content-center">
    <img class="width30" :src="$root.baseImageUrl+product.image" :alt="product.name" />

      </div>
    <div
      class="content d-flex flex-direction-column align-items-end width80 margin-auto"
    >
      <h1>{{ product.name }}</h1>
      <h4>
        {{ product.shortDescription }}
      </h4>
      
      <router-link :id="`productRoute${product.id}`" :to="{
              name: 'productDetail',
              params: { id: product.id, slug:$root.slugGenerator(product.name) }
            }" class="width100 margin-auto  justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <image
            id="Layer_2696"
            data-name="Layer 2696"
            width="24"
            height="24"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAapJREFUSEu9lksrRVEUx91b3nlMZIAkEzKQQlFEBsrAQAkxMPcxfAcjAwbyKsXg1h0ZEIXIQEwkr4FMyON61OX3r71vp9M955C2Xb/2Pnuts/5r77POPieWPuzOCWnF2GqgCsqg0Pim6B/hFq7gNShGLEBAgVqg0QT+pH8BBVaTXeK5RuiU/shjz+hlE1DGvVAB93AGlyaQhNQUWCuqhQaP7ybj60x0Bn6Beub6NQ8HcAxv3huyjAuYa4ZW+IIknFs/r0A1k4OQNk4XEYH95jqTXJx+A27kYAW0p8NQAgn4bXArJpEBeIJVSFmBTi46YAv2fpB5KT7PZrV+93YmumAXdiRQxGAM9ACX4CNCQAUwB7MwncU3j7lRUCEsSkBVoGUp+/2I4D3Ytb/aykmYD/BvM6tISKCPiyZYhrsQAWW+boJP0c+E+FZiG4ETCQwxKIcFeA+4SUmsgfY+KrhC5MM4PEhAA5WmVqDe31Tf26Dym4CVkMytSb5aQfxfBJxvkfOH7LxMnb9oevJOjwoJOD/sJOL0uLYviNMPjhVx+sm0Ik4/+t6j5s+/Ld9Zy7tNgfptkQAAAABJRU5ErkJggg=="
          />
        </svg>
        <span :id="`productRouteSpan${product.id}`">{{$cookie.get('ltrTheme')?'See details':' مشاهده جزئیات'}} </span>
      </router-link>
    </div>
  </div>
 </div>
</template>
<script>
export default {
  props: {
    product: Object
  },
  methods:{
    customeHover(id,color){
      if(color!=null){

        document.getElementById(`product${id}`).style.border=`9px solid ${color}`
      document.getElementById(`productRoute${id}`).style.border=`4px solid ${color}`;
      document.getElementById(`productRouteSpan${id}`).style.color=color;
      }
    },
    killCustomeHover(id){
      this.$root.unsetInlineStyle('border',`#product${id}`)
      this.$root.unsetInlineStyle('border',`#productRoute${id}`)
      this.$root.unsetInlineStyle('color',`#productRouteSpan${id}`)
    }
  }
};
</script>
