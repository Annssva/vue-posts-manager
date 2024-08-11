<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 class="titleError" v-else>
    Список пользователей пуст
  </h2>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  components: {Post},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped>
  .titleError {
    color: red;
  }
  .post-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all 0.3s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .post-list-move {
    transition: transform 0.3s ease;
  }
</style>