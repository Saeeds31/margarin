<template>
  <div class="catalogue width100">
    <div class="image d-flex justify-content-center width100">
      <slot> </slot>
    </div>
    <div class="content d-flex flex-direction-column align-items-center">
      <h3 class="blackColor06">{{ catalogue.summary }}</h3>
      <h1 class="blackColor08">{{ catalogue.title }}</h1>
      <double-line class="width40" />
      <p>
        <span class="blackColor04">
          {{ catalogue.date }}
        </span>
       
<svg class="calendarSvgCatalogue" width="18" height="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
<g id="XMLID_71_">
	<path id="XMLID_85_" d="M30,120H0v195c0,8.284,6.716,15,15,15h165v-30v-21.213V195c0-8.283,6.716-15,15-15h83.787H300h30v-60h-30
		H30z"/>
	<polygon id="XMLID_86_" points="278.787,210 210,210 210,278.787 210,321.213 321.213,210 	"/>
	<path id="XMLID_87_" d="M315,30h-85V15c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v15h-70V15c0-8.284-6.716-15-15-15
		c-8.284,0-15,6.716-15,15v15H15C6.716,30,0,36.716,0,45v45h30h270h30V45C330,36.716,323.284,30,315,30z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

      </p>
    </div>
   <div class="download d-flex justify-content-center width100">
        <a :href="catalogue.file" target="_blank" >
      <span> دریافت فایل </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="26"
        height="24"
        viewBox="0 0 26 24"
      >
        <image
          id="Layer_2708"
          data-name="Layer 2708"
          width="26"
          height="24"
          opacity="0.8"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAABHNCSVQICAgIfAhkiAAAAopJREFUSEutlluITVEYx89xjyFTipEYPJAypEiaJ7eSEg+EkETjAeUSIoUH93uSSy5FXtwLTUpOeCFKisITCbk8EEI4fr9ae9rGPrP3Ofnq1/rOXt9a/73Xt9a3Tr5YLOZSrB39vWEyDIBOUAWf4Cpch/fwq6V58ilC7Rk8CyZBd2gDvlk+TPqV9jWcgzOhL1GvJaGujFgP9fAGCvAQnoSZ+tKOhDFQDWdhN3xPUiolpMgOGArX4AC8THzVXK4fz+fDeGiEzfCleWySUCuCFsI8OA27SgjEH7uUG2ECbILzWYRM+FFwiZaCSc9inQnaC+ZyKpi/Jkv6ogX0NsAKKGRRiMVMD+P++aokoUME18AieFGmUC/iD0IPOA6X4blzxIVa83sUmMxHsBh+lClk+OiwdMNp3frr4EEkNChMPJi2A5yCPRWIREO64Lj118A3mK1QLc7+8LknaQvwDP5KZoWiExm3AY4ptBJnSlC/UeGEpYZ1pMMzWKXQTZz7sAqy5GRsiHNcFttJUL1C93CsVW6CLObSerasf2lmQd4HNQpZYp7CckisU81ms2Ir5JlJs2EEmP9GhZbgzAEP2UX4nTJaoY8wIyWuD/1uBCvNXIV64riVLY4X4C64JSO7gxPPXZKQR2IEeIW0hYFgGfKa2QqXonMUVeBxPIzumkjIQvkuJpwkVEu/10TczL3n8bYP45XBS60/eLe4LSO7heONatG0JF0Bl24m+IJv4SdYVTRX4wNYFZoKctoNG4lZjqbBMlgbhA7TboMjcCL2YoluViF3z3bwq82B/w/Mx2ewyj/+X0LOMwRMbLcw6asg4tFItaxfFE1Uh7MFzMNqyCTi4HKFHOMN6rK5CTLbH7fdyBvOemy9AAAAAElFTkSuQmCC"
        />
      </svg>
    </a>
   </div>
  </div>
</template>
<script>
import doubleLine from "@/components/front/shared/doubleLine.vue";
export default {
  components: { doubleLine },
  props: {
    catalogue: Object
  }
};
</script>
