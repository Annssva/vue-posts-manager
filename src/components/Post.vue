<template>
  <div class="post">
    <div>
      <div>
        <strong>
          Название:
        </strong>
        {{ post.title }}
      </div>
      <div>
        <strong>
          Описание:
        </strong>
        {{ post.body }}
      </div>
    </div>
    <div class="post__button">
      <button-u-i>Удалить</button-u-i>
    </div>
  </div>
</template>

<script>
import ButtonUI from '@/components/UI/ButtonUI.vue';

export default {
  components: {ButtonUI},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
  .post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid darkgreen;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>