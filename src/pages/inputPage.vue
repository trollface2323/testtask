<script>
import MyInput from "@/components/MyInput.vue";

export default {
  name: "inputPage",
  components: {MyInput},
  data() {
    return {
      newWord: '',
      dictionary: [
        'котик', 'компас', 'команда', 'колесо', 'колос', 'коробка'
      ],
      rules:[
        value => {
          if (value) return true

          return 'Field is required.'
        }
      ]
    }
  },
  methods: {
    addToDictionary() {
      if (this.newWord === '' || this.dictionary.includes(this.newWord.trim())) {
        return
      }

      this.dictionary.push(this.newWord)
      this.newWord = ''
    }
  }
}
</script>
<template>
  <div class="wrapper">
    <div>
      <my-input :dictionary="dictionary" :rules="rules"></my-input>
    </div>
    <div>
      <div class="add-word">
        <v-text-field v-model="newWord" label="Добавьте слово" @keydown.enter="addToDictionary"></v-text-field>
        <v-btn @click="addToDictionary">add word</v-btn>
      </div>

      <div>
        Словарик:
        <p v-for="(item,i) in dictionary" :key="i">
          {{ item }}
        </p>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.add-word {
  display: flex;
  gap: 10px;
}

</style>