<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input-ui
        v-focus
        v-model="post.title"
        placeholder="Название"
    />
    <input-ui
        v-model="post.body"
        placeholder="Описание"
    />
    <button-ui
        class="button"
        @click="createPost"
    >
      Создать
    </button-ui>
  </form>
</template>

<script>

export default {
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

  .button {
    align-self: flex-end;
  }
</style>