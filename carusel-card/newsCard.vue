<template>
  <div>
    <simple-photo-carusel/>

    <div class="date">20.12.2020</div>
    <div class="title">Title here</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi assumenda at consequuntur, cumque
      dignissimos dolorum eligendi eum fuga iure iusto magnam magni maxime nam nihil nostrum provident quam sit soluta
      tempora, ut velit voluptates! Assumenda cupiditate excepturi illo laboriosam laudantium omnis ullam. Accusamus
      eligendi molestiae non nulla porro quas quasi sequi, tempora! Adipisci corporis, deleniti dolore eligendi, eos hic
      id impedit officia praesentium quibusdam quidem quis, reprehenderit sint voluptatem voluptates! Ad aliquam cum
      dolorem dolores doloribus excepturi magni molestias mollitia omnis quas ratione reiciendis sapiente, sint sunt
      voluptatem. Aspernatur dolorem ex minima mollitia veniam. Beatae dolorum hic quo.
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
    margin-top: 30px;
  }

  .title {
    margin-top: 10px;
    color: $bg_blue;
  }

  .description {
    margin-top: 15px;
  }
</style>
