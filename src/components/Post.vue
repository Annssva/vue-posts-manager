<template>
  <div class="post">
    <div>
      <div>
        <strong>
          № {{ post.id }}
        </strong>
      </div>
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
    <div class="post__buttons">
      <button-ui
        @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </button-ui>
      <button-ui
          @click="$emit('remove', post)"
      >
        Удалить
      </button-ui>
    </div>
  </div>
</template>

<script>
import ButtonUi from '@/components/UI/ButtonUI.vue';

export default {
  components: {ButtonUi},
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

  .post__buttons {
    display: flex;
    gap: 5px
  }
</style>