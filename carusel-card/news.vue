<template>
  <div>
          <news-card
            :data="thisOneNews"
            class="this-one-news__cart"
          />
  </div>
</template>

<script>
  import newsCard from '~/components/commonSegments/newsCard'

  export default {
    components: {
      newsCard
    },
    data: () => ({
      thisOneNews: {
        news: {
          title: 'This one news',
          date: '12.11.2025',
          text: 'Lorem = ipsum dolor sit ame cumque dignuidem quis, reprehenderit sint voluptatem voluptates! Ad aliquam'
        },
        imgs: [
          '/imgs/news_imgs/vinny.jpg',
          '/imgs/news_imgs/vinny.jpg',
          '/imgs/news_imgs/vinny.jpg',
          '/imgs/news_imgs/vinny.jpg',
          '/imgs/news_imgs/vinny.jpg',
        ],
        style: {
          clampy: 7,
          marginDate: 50,
          marginTitle: 15,
          marginText: 25
        }
    })
  }
</script>

<style lang="scss" scoped>

    .this-one-news__cart {
      width: 100%; /*ширина карусели и карты*/
      height: 841px; /* Это высота_карты. А высота карусели= высота_карты - padding-bottom. */
      /*  Высота слайдера- height: 100%;, */
      /*поэтому он выжимает все остальное содержимое карты вниз, за пределы контейнера карты.*/
      /*  Это содержимое покрываем паддингом-барром.*/
      box-sizing: border-box;
      padding-bottom: 294px; /*высота для текста карты (под каруселью)*/
      overflow: hidden;
    }

</style>
