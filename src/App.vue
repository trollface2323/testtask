<script>

</script>

<template>
  <div class="links">
    <router-link to="/buttonPage">Компонент кнопки</router-link>
    <router-link to="/inputPage">Компонент инпута</router-link>
    <router-link to="/carousel">Компонент карусели</router-link>
    <router-link to="/tablePage">Компонент таблицы</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="scss" scoped>

.links{
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

</style>
