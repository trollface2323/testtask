<script>
export default {
  name: "MyTable",
  props: {
    groupBy: {
      default: () => {
      }
    },
    search: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      headers: [
        {
          title: 'Name(123)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {title: 'secondName', key: 'secondName'},
        {title: 'old', key: 'age'},
      ]
    }
  },
}
</script>

<template>
  <v-data-table
      :items="items"
      :group-by="groupBy"
      :search="search"
      hide-default-footer
  >
  </v-data-table>
</template>

<style scoped lang="scss">

</style>