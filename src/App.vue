<template>
  <div class="app">
    <h1 >Страница с постами</h1>
    <button-ui
      @click="showModal"
      class="showButton"
    >
      Добавить новый пост
    </button-ui>
    <modal-ui v-model:show="isModalOpen">
      <post-form
          @create="createPost"
      />
    </modal-ui>
    <posts-list
        :posts="posts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostsList from './components/PostsList.vue';
import ModalUi from '@/components/UI/ModalUI.vue';
import ButtonUi from '@/components/UI/ButtonUI.vue';
import axios from 'axios';
export default {
  components: {
    ButtonUi,
    ModalUi,
    PostForm, PostsList
  },
  data() {
    return {
      posts: [
      ],
      isModalOpen: false,
      isPostsLoading: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.isModalOpen = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showModal() {
      this.isModalOpen = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка!')
      } finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
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

.showButton{
  margin: 15px 0;
}
</style>