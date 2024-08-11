<template>
  <div class="navbar">
    <h3 @click="$router.push('/')">Vue 3 project</h3>
    <div class="navbar__buttons">
      <button-ui @click="$router.push('/posts')">Посты</button-ui>
      <button-ui @click="$router.push('/about')">О сайте</button-ui>
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