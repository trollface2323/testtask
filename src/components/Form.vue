<script>
export default {
  name: "inputs",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <v-text-field
      v-for="(item,i) in items"
      :key="i"
      :label="item.label"
      :rules="item.rules"
  >
  </v-text-field>
</template>

<style scoped lang="scss">

</style>