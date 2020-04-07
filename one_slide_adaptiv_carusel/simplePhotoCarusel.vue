<template>
  <div>
    <div
      class="swiper"
      v-swiper:swiper="swiperOptions"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in 6" :key="index">
          <span>Slide {{ index }}</span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "simplePhotoCarosel",
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
  }

  .swiper-wrapper {
    width: fit-content; /* дб оч большим, чтобы вобрать все карточки, не auto. Auto- ширина будет как у swiper-container'a*/
  }

  .swiper-slide {
    width: 100%;
    height: 100%;

    /*for dev*/
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>
