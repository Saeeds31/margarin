<template>
  <div class="collapseSection">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + data.id"  variant="dark">
       
       <svg class="when-open" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
  <g id="Icon" transform="translate(-407 -1191)">
    <g id="Rounded_Rectangle_38" data-name="Rounded Rectangle 38" transform="translate(407 1191)" fill="#f7941e" stroke="#f1f1f1" stroke-width="2">
      <rect width="30" height="30" rx="10" stroke="none"/>
      <rect x="1" y="1" width="28" height="28" rx="9" fill="none"/>
    </g>
    <image id="_" data-name="+" width="10" height="2" transform="translate(417 1205)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAABHNCSVQICAgIfAhkiAAAABJJREFUCFtj/A8EDEQARmIVAgDXBAf7U7iGLgAAAABJRU5ErkJggg=="/>
  </g>
</svg>

          <svg
            class="when-closed"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <g
              id="Group_1asdasdas"
              data-name="Group 1asdasdas"
              transform="translate(-1474 -4489)"
            >
              <g
                id="Rounded_Rectangle_38_copy"
                data-name="Rounded Rectangle 38 copy"
                transform="translate(1474 4489)"
                fill="#f1f1f1"
                stroke="#f1f1f1"
                stroke-width="2"
              >
                <rect width="30" height="30" rx="10" stroke="none" />
                <rect x="1" y="1" width="28" height="28" rx="9" fill="none" />
              </g>
              <image
                id="_copy"
                data-name="+ copy"
                width="10"
                height="10"
                transform="translate(1484 4499)"
                opacity="0.4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAADJJREFUGFdj/P//PwMyYGRkvAvkKwGxK1BuD0yOcQAVAt2A6kgUFyM4jEQrHEDPEGs1AHb1QfFEtg0xAAAAAElFTkSuQmCC"
              />
            </g>
          </svg>
             <span class="blackColor06">
            {{ data.question }}
          </span>
        </b-button>
      </b-card-header>
      <b-collapse
        :id="'accordion-' + data.id"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body class="d-flex justify-content-end">
          <b-card-text class="medium14 blackColor08">{{ data.answer }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import {
  BCard,
  BCardHeader,
  BButton,
  BCollapse,
  BCardBody,
  BCardText,VBToggle
} from "bootstrap-vue";
export default {
  components: {
    BCard,
    BCardHeader,
    BButton,
    BCollapse,
    BCardBody,
    BCardText
  },
  props: {
    data: Object
  },
  directives:{
'b-toggle':VBToggle
  }
};
</script>
<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}</style>
<style scoped>
.medium14{
  font-size: 16px;
      text-align: justify;
      direction: rtl;
      width: 90%;
}
.collapseSection .card{
  align-items: flex-end;
  border: none;
}
.collapseSection .card .card-header {
      width: 50%;
    background: transparent;
    border-bottom: none;
}
.collapseSection .card .card-header button{

  background: transparent;
    border: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.collapseSection .card .card-header button .faqImage{
  margin: 0 50px;
}

.collapseSection .card .card-header button span{
  font-size: 18px;
  font-family:'yekan-heavy'
}
.collapseSection .btn-dark:focus{
  box-shadow:none !important
}

</style>
