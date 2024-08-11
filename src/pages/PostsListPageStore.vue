<template>
  <div>
    <h1 >Страница с постами</h1>
    <input-ui
        v-focus
        :model-value="searchQuery"
        @update:module-value="setSearchQuery"
        placeholder="Поиск..."
    />
    <div class="posts__buttons">
      <button-ui
          @click="showModal"
      >
        Добавить новый пост
      </button-ui>
      <select-ui
          :model-value="selectedSort"
          @update:module-value="setSelectedSort"
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
        :posts="$sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" ref="observer" class="observer">
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostsList from '@/components/PostsList.vue';
import ModalUi from '@/components/UI/ModalUI.vue';
import ButtonUi from '@/components/UI/ButtonUI.vue';
import axios from 'axios';
import SelectUi from '@/components/UI/SelectUI.vue';
import InputUi from '@/components/UI/InputUI.vue';
import {
  mapState, mapGetters, mapActions, mapMutations
} from 'vuex'
export default {
  components: {
    InputUi,
    SelectUi,
    ButtonUi,
    ModalUi,
    PostForm, PostsList
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),

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
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
}
</script>

<style>


.posts__buttons {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
  background: green;
}

</style>