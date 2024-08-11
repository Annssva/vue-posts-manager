<template>
  <div >
    <h1 >Страница с постами</h1>
    <input-ui
        v-focus
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <div class="posts__buttons">
      <select-ui
          v-model="selectedSort"
          :options="sortOptions"
      >
      </select-ui>
    </div>
    <modal-ui v-model:show="isModalOpen">
    </modal-ui>
    <posts-list
        :posts="searchedSortedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostsList from '@/components/PostsList.vue';
import ModalUi from '@/components/UI/ModalUI.vue';
import ButtonUi from '@/components/UI/ButtonUI.vue';
import SelectUi from '@/components/UI/SelectUI.vue';
import InputUi from '@/components/UI/InputUI.vue';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSearchedSortedPosts from '@/hooks/useSearchedSortedPosts';
import {usePosts} from '@/hooks/usePosts';
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
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, searchedSortedPosts} = useSearchedSortedPosts(sortedPosts)

    return {
      posts, totalPages, isPostsLoading,
      sortedPosts, selectedSort,
      searchQuery, searchedSortedPosts
    }
  }
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