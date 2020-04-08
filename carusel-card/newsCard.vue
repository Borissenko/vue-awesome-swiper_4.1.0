<template>
  <div>
    <simple-photo-carusel :imgs="data.imgs"/>

    <div class="date"
         :style="{marginTop: data.style.marginDate + 'px'}"
    >
      {{data.news.date}}
    </div>
    <div class="title"
         :style="{marginTop: data.style.marginTitle + 'px'}"
    >
      {{data.news.title}}
    </div>
    <div v-clampy="data.style.clampy"
         class="text"
         :style="{marginTop: data.style.marginText + 'px'}"
    >
      {{data.news.text}}
    </div>
  </div>
</template>

<script>
  import simplePhotoCarusel from '~/components/commonSegments/simplePhotoCarusel'

  export default {
    name: "newsCard",
    components: {
      simplePhotoCarusel
    },
    props: {
      data: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>

  .date, .description, .title {
    font-style: normal;
    font-weight: 400;
    font-size: rem(14);
    line-height: rem(17);
    text-align: left;
    color: $secondary;
  }

  .date {
    margin-top: 50px;
  }

  .title {
    margin-top: 15px;
    color: $bg_blue;
    font-weight: 900;
  }

  .text {
    margin-top: 25px;
  }
</style>

