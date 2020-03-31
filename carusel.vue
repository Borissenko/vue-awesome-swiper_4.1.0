<template>
  <div class="example">
    <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
    <div
      class="swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in 10" :key="index">
          <span>Slide {{ index }}</span>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'swiper-nuxt',
    data() {
      return {
        swiperOptions: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }
      }
    },
    methods: {
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .example {
    height: auto;

    /*стационарный внешний контейнер*/
    /* автоматичекси добавляемые классы to .swiper:
    swiper-container
    swiper-container-initialized - функция непонятна
    swiper-container-horizontal" - функция непонятна
    */
    .swiper-container {
      width: 60%; /* 100%- по умолчанию */
      height: 200px; /* auto- по умолчанию. Надо прописывать самому(!) */
      border: #a8a8a8 3px solid;
    }
    /*альтернатива .swiper-container*/
    .swiper {
      /*width: 60%;*/
      /*height: 300px;*/

      /*слайдер-контейнер*/
      .swiper-wrapper {
        display: flex !important;
        width: fit-content; /* дб оч большим, чтобы вобрать все карточки, не auto. Auto- ширина будет как у swiper-container'a*/
        height: max-content; /* auto- по умолчанию, и это- достаточно */
        overflow: visible; /*лучше сделать visible*/
        border: #DD3D3D 1px dashed;

        /*отдельные слайды*/
        /*автоматичекси добавляемые классы к слайду
        .swiper-slide-duplicate {}
        .swiper-slide-duplicate-prev {}
        .swiper-slide-duplicate-active {}
        .swiper-slide-duplicate-next {}
        */
        .swiper-slide {
          width: 160px; /*ширина слайда */
          height: 150px; /*высота слайда */

          text-align: center;
          font-size: 38px;
          background-color: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .swiper-pagination {
        > .swiper-pagination-bullet {
          background-color: red;
          width: 100px;
          left: 20px;
        }
      }
    }
  }
</style>
