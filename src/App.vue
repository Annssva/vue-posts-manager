<template>
  <div class="app">
    <h1 >Страница с постами</h1>
    <div class="app__buttons">
      <button-ui
          @click="showModal"
      >
        Добавить новый пост
      </button-ui>
      <select-ui
      v-model="selectedSort"
      :options="sortOptions"
      >
      </select-ui>
    </div>

    <modal-ui v-model:show="isModalOpen">
      <post-form
          @create="createPost"
      />
    </modal-ui>
    <posts-list
        :posts="sortedPosts"
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
import SelectUi from '@/components/UI/SelectUI.vue';
export default {
  components: {
    SelectUi,
    ButtonUi,
    ModalUi,
    PostForm, PostsList
  },
  data() {
    return {
      posts: [
      ],
      isModalOpen: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {
          value: 'title',
          name: 'По названию'
        },
        {
          value: 'body',
          name: 'По содержимому'
        }
      ]
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
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    // watch: {
    //   selectedSort(newValue) {
    //     this.posts.sort((post1, post2) => {
    //       return post1[newValue]?.localeCompare(post2[newValue])
    //     })
    //   }
    // }
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


.app__buttons {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}
</style>