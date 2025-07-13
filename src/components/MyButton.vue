<script>
export default {
  name: 'DonutButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      console.log('clicked')
    }
  }
}
</script>

<template>
  <div class="my-button">
    <slot name="prepend"></slot>

    <div class="my-button__wrapper" @click="handleClick">
      <div class="my-button__default-slot">
        <slot></slot>
      </div>

      <div class="my-button__hole" @click.stop></div>
    </div>

    <slot name="append"></slot>

    <div v-if="loading" class="my-button__loading-slot">
      <slot name="loading">
        <div class="my-button__loader"></div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">

.my-button {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  width: fit-content;

  &__wrapper{
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 16px solid red;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
  }

  &__default-slot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__hole {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    cursor: default;
  }

  &__loading-slot {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: grid;
    place-items: center;
  }

  &__loader {
    width: 48px;
    height: 48px;
    border: 5px solid #6ebeff;
    border-bottom-color: #337AB7;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>