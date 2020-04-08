<template>
  <div>
    <div class="page-container_common is-dt">
      <div class="title_common">
        Новости
      </div>
      <div class="content_common content_own">
        <static-content-menu :btns="btns" class="content__menu"/>

        <div class="content__body">

          <news-card class="simple-photo-carusel-card" />



<!--          <div class="another-news__title">Похожие новости</div>-->
<!--          <div class="another-news__carts"-->
<!--               v-for="(anotherOne, ind) in anotherNews"-->
<!--               :key="ind">-->
<!--            <news-card/>-->
<!--          </div>-->

        </div>
      </div>
    </div>
    <!--    мобильная версия страницы-->
    <div class="is-mobile">
      <!--      <News_m/>-->
    </div>
  </div>
</template>

<script>
  import staticContentMenu from '~/components/commonSegments/staticContentMenu'
  import newsCard from '~/components/commonSegments/newsCard'
  // import News_m from "../components/mobilePages/News_m";

  export default {
    name: "news",
    components: {
      staticContentMenu,
      newsCard
      // News_m
    },
    data: () => ({
      btns: [
        {
          name: 'СМИ о нас',
          sourse: ''
        },
        {
          name: 'Конференции',
          sourse: ''
        },
        {
          name: 'Интервью',
          sourse: ''
        },
        {
          name: 'Аналитик',
          sourse: ''
        }
      ],
      thisOneNews: {
        title: 'ThisOneNews',
        img: '',
        date: '12.11.2025',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi assumenda at consequuntur, cumque dignissimos dolorum eligendi eum fuga iure iusto magnam magni maxime nam nihil nostrum provident quam sit soluta tempora, ut velit voluptates! Assumenda cupiditate excepturi illo laboriosam laudantium omnis ullam. Accusamus eligendi molestiae non nulla porro quas quasi sequi, tempora! Adipisci corporis, deleniti dolore eligendi, eos hic id impedit officia praesentium quibusdam quidem quis, reprehenderit sint voluptatem voluptates! Ad aliquam cum dolorem dolores doloribus excepturi magni molestias mollitia omnis quas ratione reiciendis sapiente, sint sunt voluptatem. Aspernatur dolorem ex minima mollitia veniam. Beatae dolorum hic quo.'
      },
      anotherNews: [
        {
          title: 'Go-1!',
          img: '',
          date: '',
          text: 'lfkytdsrrdj'
        },
        {
          title: 'Go-2!',
          img: '',
          date: '',
          text: '987553465347697966'
        },
        {
          title: 'Go-3!',
          img: '',
          date: '',
          text: 'lkjlmlm'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .simple-photo-carusel-card {
    width: 100%;    /*ширина карусели и карты*/
    height: 547px;  /*  высота карусели. */
  /*  Высота слайдера- height: 100%;, */
  /*поэтому он выжимает все остальное содержимое карты вниз, за пределы контейнера карты.*/
  /*  Это содержимое покрываем маргином-барром.*/
    margin-bottom: 294px;   /*требуемая высота карты минус высота слайдера, 841−547=294*/
  }

  .content_own {
    display: grid;
    /*grid-template-rows: max-content;*/
    grid-template-columns: rem(180) calc(100% - 150px);     /*1fr здесь- дает ошибку в карусели;*/
    grid-column-gap: rem(27);
  }

  .content__menu {
    grid-area: 1 / 1 / span 1 / span 1;
  }

  .content__body {
    grid-area: 1 / 2 / span 1 / span 1;
    border: #5fcc89 1px dashed;

  }

  /*.this-one-news__carusel {*/
  /*    width: 996px !important;*/
  /*    height: 548px !important;*/

  /*    margin: 0 auto;*/
  /*    border: #482ca1 1px dashed;*/
  /*    @media (max-width: 1350px) {*/
  /*      width: 697px !important;*/
  /*      height: 383px !important;*/
  /*    }*/
  /*  }*/


</style>
