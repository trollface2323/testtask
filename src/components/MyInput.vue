<script>

export default {
  name: 'InputWithGhostSuggestion',
  props:{
    dictionary:{
      type: Array,
      default: () => []
    },
    rules:{
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      input: '',
      suggestion: ''
    }
  },
  methods: {
    updateSuggestion() {
      const match = this.dictionary.find((word) => word.startsWith(this.input) && word !== this.input)
      this.suggestion = this.input.length ? match : ''
    },
    applySuggestion(){
      if (!this.suggestion){ return }
      this.input = this.suggestion
      this.suggestion = ''
    }
  },
}
</script>

<template>
  <v-text-field
      v-model="input"
      label="Введите слово"
      class="my-input"
      :rules="rules"
      @input="updateSuggestion"
      @keydown.tab="applySuggestion"
  >
    <template #prepend-inner>
      <div class="my-input__suggestion" v-if="suggestion">
        {{ input }}<span class="my-input__suggestion-text">{{ suggestion.slice(input.length) }}</span>
      </div>
    </template>
  </v-text-field>
</template>

<style lang="scss" scoped>

.my-input {
  position: relative;

  &__suggestion {
    position: absolute;
    top: 68%;
    left: 18px;
    transform: translateY(-50%);
    font-size: 16px;
    color: transparent;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    font-family: inherit;
  }

  &__suggestion-text {
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
