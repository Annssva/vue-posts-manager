<template>
  <div>
    <h3>Список постов</h3>
    <post
        v-for="post in posts"
        :post="post"
    />
  </div>
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

</style>