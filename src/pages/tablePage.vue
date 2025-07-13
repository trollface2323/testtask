<script>
import MyTable from "@/components/MyTable.vue";

export default {
  name: "tablePage",
  components: {MyTable},
  data: function () {
    return {
      search: '',
      count: 0,
      groupBy: [{key: 'name', order: 'asc'}],
      users: [
        {name: 'Igor', secondName: 'Ivanov', age: 20},
        {name: 'Slava', secondName: 'Sidorov', age: 25},
        {name: 'Oleg', secondName: 'Zhokh', age: 29},
        {name: 'Seva', secondName: 'Ovin', age: 20},
        {name: 'Slava', secondName: 'Petrov', age: 18}
      ]
    }
  },
  methods: {
    changeGroupBy(key) {
      this.groupBy[0].key = key
    },

    addUser() {
      const user = {name: this.count % 2 === 0 ? 'Vitya' : 'Alex', secondName: 'Smirnov', age: this.count + 20}
      this.users.push(user)
      this.count++
    }
  }
}
</script>

<template>
  <div class="buttons">
    <v-btn @click="changeGroupBy('age')">group by age</v-btn>
    <v-btn @click="changeGroupBy('name')">group by name</v-btn>
    <v-btn @click="addUser">add user</v-btn>
  </div>

  <v-text-field
      v-model="search"
      label="Search"
      variant="outlined"
  ></v-text-field>

  <my-table :group-by="groupBy" :items="users" :search="search"></my-table>

</template>

<style scoped lang="scss">

.buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

</style>