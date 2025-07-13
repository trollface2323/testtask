<script>
import MyButton from "@/components/MyButton.vue";

export default {
  name: "buttonPage",
  components: {MyButton},
  data() {
    return {
      loading: false,
      append: '',
      prepend: '',
      defaultSlot: '',
      loadingText: ''
    }
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    },
    toggle(name) {
      this[name] = this[name] === '' ? name : ''
    }
  }
}
</script>
<template>
  <div class="buttons">
    <v-btn
        @click="toggleLoading">
      toggle loading
    </v-btn>

    <v-btn
        @click="toggle('loadingText')">
      toggle loading text
    </v-btn>

    <v-btn
        @click="toggle('prepend')">
      toggle prepend
    </v-btn>

    <v-btn
        @click="toggle('defaultSlot')">
      toggle default
    </v-btn>

    <v-btn
        @click="toggle('append')">
      toggle append
    </v-btn>
  </div>

  <div class="wrapper">
    <div class="text">Текст под бубликом</div>

    <my-button :loading="loading">
      <template #prepend>{{ prepend }}</template>

      {{ defaultSlot }}

      <template #append>{{ append }}</template>

      <template v-if="loadingText" #loading>{{ loadingText }}</template>
    </my-button>
  </div>
</template>

<style scoped lang="scss">

.buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.wrapper {
  position: relative;
  margin-left: 20px;
}

.text {
  position: absolute;
  top: 50px;
}

</style>