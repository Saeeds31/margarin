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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <image
            id="Layer_2564_copy"
            data-name="Layer 2564 copy"
            width="18"
            height="18"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVtJREFUOE/NlMtKQlEUht0NQugy0BoEYVnRqCY1LUkQBJ9Ce7+GhQZR1FtEd4ICK7qgNDBP3x972fHA6XQadeDDtdde63etfXNBEGTsc85NYddgD//DYCJkxMU4YpahALKzMAN38O59YT39azRGvhsl1+ER2jABRbiEDoxEquozHgvFvGFPQ15C23BEKxeUPYm95cevMa0NxZCzoBwJNeAEoTOcqkA+lfu9eMOKmv+K4euTs4S9aRVpPYSEJCD/T5/FqFWtWdaEbhlonaJrkqCXkVAeZq21Q8q8SsqKWbN5/GUTOkbo/I9Ci+SV/pVQ+tbYanWgVnJ+d3veLqZqzZ+ZEsk6rB9+63Ub2mmF1knSSd6BUaj63/20QmskzkETKqBq9FI824E8YHCdtP20tkrMCnRhHHYlojwTOsW+TxJiXs+N7paSW4i8WI6ENkBv0m/umPKeQDdhICLnJzMRkVnGwA65AAAAAElFTkSuQmCC"
          />
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
