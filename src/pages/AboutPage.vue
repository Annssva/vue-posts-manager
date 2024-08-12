<template>
  <div>
    <div class="title-container">
      <h2>Учебный проект для изучения Vue.js</h2>
    </div>
    <h3>Описание:</h3>
    <p>Проект разработан для изучения Vue.js и представляет собой веб-приложение для управления постами. Приложение
      включает функционал создания, удаления, сортировки, поиска, а также реализации пагинации и динамической пагинации
      постов. В проекте использованы mixins и directives, а также применены Vuex и Composition API.</p>
    <h3>Основная функциональность:</h3>
    <ul class="list">
      <li> Создание и удаление постов </li>
      <li> Сортировка постов по заголовкам и описанию </li>
      <li> Поиск по ключевым словам </li>
      <li> Пагинация и динамическая пагинация постов </li>
      <li> Использование mixins и directives для повторного использования кода </li>
      <li> Управление состоянием приложения с помощью Vuex </li>
      <li> Применение Composition API для управления логикой компонентов </li>
    </ul>
    <h3>Используемые технологии: </h3>
    <ul class="list">
      <li> Vue.js 3 </li>
      <li> Vuex </li>
      <li> Composition API </li>
      <li> Vue Router </li>
      <li> Axios </li>
      <li> HTML, CSS, JavaScript </li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .title-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
  .list {
    margin-left: 20px;
  }
  h3 {
    margin: 10px 0;
  }
</style>