<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название"
    >
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание"
    >
    <button-u-i
        class="button"
        @click="createPost"
    >
      Создать
    </button-u-i>
  </form>
</template>

<script>
import ButtonUI from '@/components/UI/ButtonUI.vue';

export default {
  components: { ButtonUI },
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
};
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  .input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
  }

  .button {
    align-self: flex-end;
  }
</style>