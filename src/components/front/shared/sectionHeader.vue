<template>
  <div data-aos="fade-left"
    data-aos-duration="1000"
        data-aos-once="true" id="sectionHeader" class="d-flex justify-content-between width80">
    <div id="router" class="d-flex justify-content-between width20 align-items-center hiddenInMobile">
      <router-link :to="data.route">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="60"
        height="60"
        viewBox="0 0 80 80"
      >
        <g id="route" transform="translate(-252 -2627)">
          <circle
            id="Ellipse_3_copy_8"
            data-name="Ellipse 3 copy 8"
            cx="40"
            cy="40"
            r="40"
            transform="translate(252 2627)"
            fill="rgba(0,0,0,0.05)"
          />
          <image
            id="Layer_2694"
            data-name="Layer 2694"
            width="24"
            height="24"
            transform="translate(280 2655)"
            opacity="0.4"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAf1JREFUSEu1lc8rpVEYx+cORiyImihd3ZoQNrKgFIlsbOSmpmYhE4rSbJmFUjb+gpkFyVIohRSJsiG/NsosyB1RUhZ+T3QZn6/Oy0le9155T3065z3nOef7Ps/7nPfxfXhqZQx7ocqas4cHPHyHOZf1F6d9ZraGfhISYQYW4QiuQTYF0AUnUALb0YpocypsQiZ8gzGXzS3M98MaBGE/GhEJyO1B6IOfETb9Zr0N/hkBJwLadg5/YNq85I0mZTAMX6EQtiIIxLH+Axoh3bL9zzgF0szcMr2iEZLABgTAD5cRBOzlTzzoYKclM/gCHaCoKJTlEtgB9TlwF4PAa6YDLDZDkw5WRnyEXLh9J4E8ztH3mPJKQN8qBGGvBBSIJcj3UmAWgQqvBR6yyIuPrBDNQ6mbgD5SBqi3c90tyWSjf1fYMlhn7HcTCLBYH8O9iMd2wkTD0XhVIAkrXbxoPNBLygOF2v4TPAp4cZPlhQSypb6ifIUsOHMLcozzCdj/hSsJ/IJ2UCVbiPEgN/Ni48GIBCrNwSqFqmzv0UY5pAGCEhDjUGe86aS/eKOKSm4PqLyq7FY7FekzD1OgersLKkKrcArKELtyPdd2ik0RCypcqt8qXLWwZ29UReqGVlCdfktTmg4ZL451wEtvJm9KQfdAJTDSTdYZ8lTprow8tN/sHlkrcmYa/SDUAAAAAElFTkSuQmCC"
          />
        </g>
      </svg>
      <span class="blackColor04">{{ data.routeTitle }}</span>
      </router-link>
    </div>
    <div id="text" class="d-flex justify-content-end align-items-center width40">
      <div :class="{'ifImage':data.image!=false}" class="d-flex flex-direction-column align-items-end">
        <h1>{{ data.title }}</h1>
        <h4>{{ data.summary }}</h4>
      </div>
        <slot v-if="data.image!=''"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
     mounted() {
    this.setStyle();
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  },
  methods:{
    setStyle(){
      // 
      if(window.innerWidth>1000){
        if(window.innerWidth>1495){
          this.$root.setProportionStyle("font-size","px","#text div h1",1920,40,1495,28);
        }else{
          this.$root.setProportionStyle("font-size","px","#text div h1",1495,28,1024,16);

          
       this.$root.setProportionStyle("font-size","px","#text div h4",1496,22,1024,16);
       this.$root.setProportionStyle("width","%","#sectionHeader #router",1496,20,1024,28);
      
                this.$root.unsetInlineStyle('margin-top','#footerLinkRouter')
                this.$root.unsetInlineStyle('margin-bottom','#sectionHeader')
        }

      }else{
                this.$root.unsetInlineStyle('width','#sectionHeader #router')

          this.$root.setProportionStyle("font-size","px","#sectionHeader #text div h1",1000,32,375,14);
          this.$root.setProportionStyle("font-size","px","#sectionHeader #text div h4",1000,24,425,15);
         this.$root.setProportionStyle("margin-top","%","#footerLinkRouter",1000,10,425,15);
       this.$root.setProportionStyle("margin-bottom","%","#sectionHeader",768,2.5,425,5);
      }
    }
  }
};
</script>
<style scoped>
#sectionHeader {
  margin:5% auto 2.5%;
}
#text .ifImage{
  margin: 0 25px;
}
#text div h1{
font-size:32px;
font-family: 'yekan-heavy';
opacity:0.6;
color:black;
text-align:right;

}
#text div h4{
  font-size:22px;
font-family: 'yekan-medium';
opacity:0.6;
color:black;
}
#router span{
  margin: 0 10px;
  color:black;
}
</style>
