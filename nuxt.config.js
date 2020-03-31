
export default {
  css: [
    'swiper/css/swiper.css'
  ],
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    // { src: '@/plugins/vue-awesome-swiper.js', ssr: false }  //или-или, без разницы
  ]
}
