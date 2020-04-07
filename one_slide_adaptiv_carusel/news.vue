<template>
  <div>
    <simple-photo-carusel class="carusel"/>
  </div>
</template>

<script>
  import simplePhotoCarusel from '~/components/simplePhotoCarusel'

  export default {
    name: "news",
    components: {
      simplePhotoCarusel
    }
  }
</script>

<style lang="scss" scoped>
    .carusel {
        width: 500px !important;      /* ВАЖНО !important (!)*/
        height: 300px !important;
      }
</style>
