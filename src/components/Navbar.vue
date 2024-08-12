<template>
  <div class="navbar">
    <h3 @click="$router.push('/')">Vue Posts Manager</h3>
    <div class="navbar__buttons">
      <button-ui @click="$router.push('/about')">О сайте</button-ui>
      <button-ui @click="$router.push('/posts')">Посты</button-ui>
      <button-ui @click="$router.push('/store')">Посты (Vuex)</button-ui>
      <button-ui @click="$router.push('/compApi')">Посты (CompositionApi)</button-ui>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  h3 {
    color: teal;
    cursor: pointer;
  }

  h3:hover {
    color: #006b6b;
    cursor: pointer;
  }

  .navbar {
    height: 50px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .navbar__buttons {
    margin-left: auto;
    display: flex;
    gap: 10px
  }
</style>