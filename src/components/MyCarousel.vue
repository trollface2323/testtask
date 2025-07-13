<script>
import Form from "@/components/Form.vue";

export default {
  name: 'MyCarousel',
  components: {Form},
  props:{
    slides:{
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
    >
      <div v-if="item.type === 'text'">
        <div v-html="item.content"></div>
      </div>
      <component v-else-if="item.type === 'form'" is="Form" :items="item.items"/>

      <v-img v-else-if="item.type === 'img'" :src="item.src"></v-img>
      <iframe
          v-else
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          :src="item.src"
          title="YouTube video player" width="100%" height="100%"></iframe>
      <slot :name="i + 1"></slot>
    </v-carousel-item>
  </v-carousel>
</template>
