<template>
    <div
      class="swiper"
      v-swiper:swiper="swiperOptions"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div v-for="(img, index) in imgs"
             :key="index"
             class="swiper-slide"
             :style="{backgroundImage: 'url('+img+')'}"
        >
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
  export default {
    name: "simplePhotoCarosel",
    props: {
      imgs: {
        type: Array
      }
    },
    data: () => ({
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }),
    methods: {
      onSetTranslate() {
        console.log('onSetTranslate')
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('onSwiperSlideChangeTransitionStart')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    },
    mounted() {
      console.log('Swiper instances:', this.swiper)
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
    margin: 0  auto;
  }

  .swiper-wrapper {
    width: fit-content; /* дб оч большим, чтобы вобрать все карточки, не auto. Auto- ширина будет как у swiper-container'a*/
  }

  .swiper-slide {
    width: 100%;
    height: 100%;

    background-size: contain;
    background-repeat: no-repeat;
  }
</style>

