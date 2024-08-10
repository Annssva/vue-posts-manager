<template>
  <div class="app">
    <h1>Страница с постами</h1>
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
    />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostsList from './components/PostsList.vue';
import ModalUi from '@/components/UI/ModalUI.vue';
import ButtonUi from '@/components/UI/ButtonUI.vue';
export default {
  components: {
    ButtonUi,
    ModalUi,
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
      isModalOpen: false,
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

.showButton{
  margin: 15px 0;
}
</style>