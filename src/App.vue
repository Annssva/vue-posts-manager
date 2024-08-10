<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <posts-list
        :posts="posts"
    />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostsList from './components/PostsList.vue';
export default {
  components: {
    PostForm, PostsList
  },
  data() {
    return {
      posts: [
        {id: 0, title: 'Пост о Vue.js №1', body: 'Описание поста лялялял'},
        {id: 1, title: 'Пост о Vue.js №2', body: 'Описание поста бебебебебебеббе'},
        {id: 2, title: 'Пост о Vue.js №3', body: 'Описание поста вот так вот да'},
        {id: 3, title: 'Пост о Vue.js №4', body: 'Описание поста ну туда сюда'},
        {id: 4, title: 'Пост о Vue.js №5', body: 'Описание поста получается так'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    inputTitle(event) {
      this.title = event.target.value;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 10px;
}
</style>