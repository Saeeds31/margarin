<template>
  <div id="currentPathSection" class="d-flex align-items-center">
    <template v-for="(route,index) in routes">
      <router-link class="blackColor04" v-if="route.route != ''" :key="index" :to="route.route">
        {{ $cookie.get('ltrTheme')?route.routeTitle_en:route.routeTitle_fa }}
      </router-link>
      <a class="blackColor04" :key="index" v-else> {{ $cookie.get('ltrTheme')?route.routeTitle_en:route.routeTitle_fa }}</a>
      <svg
      class="arrow"
        :key="index+'key'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="10"
        viewBox="0 0 24 10"
      >
        <path
          id="_2_copy_5"
          data-name="2 copy 5"
          d="M1499,486v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm14-4v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Z"
          transform="translate(-1477 -476)"
          opacity="0.2"
        />
      </svg>
    </template>
    <!-- home -->
      <a class="blackColor04 ">{{$cookie.get('ltrTheme')?'pages':'صفحات'}}</a>
      <svg
      class="arrow "
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="10"
        viewBox="0 0 24 10"
      >
        <path
          id="_2_copy_5"
          data-name="2 copy 5"
          d="M1499,486v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm-6,0v-2h-2v-2h2v2h2v2Zm14-4v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm20-2v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Zm-6,0v-2h2v2Z"
          transform="translate(-1477 -476)"
          opacity="0.2"
        />
      </svg>
    <router-link class="homeRoute" to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <image
          id="Layer_2397"
          data-name="Layer 2397"
          width="24"
          height="24"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAnZJREFUSEullkuoTVEYxx3PPIrEdT3SkZLymMjAgInIhIjyLFIoZaC8jRTl0WXicZm4EgmDe80oSahbjEgUcXG9TTzyyuv3O61d226dc7btq19r7b3X+v7fen1rl74cHNmljnXj+0pYCuNC27uUJ+E4/KrVv1RHYBidz8DU4OQjZQn6hedrlIvgRTWRWgLT6XQaGuAWrIfrwZGCB2ASvIElcDkmEhMwwk2wC5yeY7AOvmccdOd5J2yG37AXtsFfU5YVGEQD53YWfIJV4BTVsrl8bIH+cAUWw+ukQ1pgMi/PQhnuwwJwMfPYGBqdg4nQCa7LDTsmAvNCpD0pT8Ba+JzHc6pNH+qHYTk4nQuhVYHRVG5Dr+DYOf8fW0PnQ/ANJihwlMpq2Aq7I54d7g5wUdPmYjZDU6TPdt65AZoVeEJlKLjAHyKNN/BuX5UhHQmjzn52wd9BpwI/qHhQ6h7pf5y3Z7RvVMA93AGjcjhwIbuCW7iePaZBOa+AeWgLjA9eH1B6kl0DA4xZbgFP6Mbg4SnlTyMDT3wLmAhjIrkEZtD5ErhgHryrQchDeR5cN0dnzspaLgGdzIdlcCrjYSbPF8GMOq2owD06joXBYRRpPz14eA9fYWBRgcowwfmO2UteDoDetQTMG+b0EdUaFRQw6TW4TR+GKD3NbzMiRUfgJeXhfaTAfireVt6vbrm0FRXQ1wpoUqCRyh0wF/nBGyoZyXPqQyCb6JIgnAY3QF8w5Rj5nuBcH5VsauMpcCGIeJBeBQ/DKdvD98zgKo9tMCe0t5/Bes3q3Pft6RvNSL2LZ0MZzDk3wWlzu8bM6Bx18tfREQI1+1auzT8UCLj0oQU0NAAAAABJRU5ErkJggg=="
        />
      </svg>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    routes: Array
  }
};
</script>
<style scoped>
#currentPathSection a{
  font-size: 12px;
}
div#currentPathSection {
    margin: 20px 0;
    width: max-content;
}
.arrow{
  margin:0 10px
}
</style>
