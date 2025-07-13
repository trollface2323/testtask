<script>
import MyCarousel from "@/components/MyCarousel.vue";

export default {
  name: "carouselPage",
  components: {MyCarousel},
  data(){
    return{
      slides:[
        {
          type: 'text',
          content: '<h2>Привет, это текст!</h2>'
        },
        {
          type: 'form',
          items: [
            {
              label: 'name',
              rules: [value => {
                if (value) return true

                return 'Name is required.'
              }]
            },
            {
              label: 'age', rules: [value => {
                if (value?.length < 3) return true

                return 'less than 3 digits'
              }]
            },
          ],
        },
        {
          type: 'img',
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        {
          type: 'video',
          src: 'https://www.youtube.com/embed/LAq2502IDTU?si=P7_IkXg1SlK_0yI8'
        }
      ]
    }
  }
}
</script>

<template>
  <my-carousel :slides="slides">
    <template #1>
      можно к слайду добавить контент через слот
    </template>
  </my-carousel>
</template>

<style scoped lang="scss">

</style>