<template>
  <div >
    <h1 >Страница с постами</h1>
    <input-ui
        v-focus
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <div class="posts__buttons">
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
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" ref="observer" class="observer">

    </div>
    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--          v-for="pageNumber in totalPages"-->
    <!--          :key="pageNumber"-->
    <!--          class="page"-->
    <!--          :class="{-->
    <!--            'current-page': page === pageNumber-->
    <!--          }"-->
    <!--          @click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{pageNumber}}-->
    <!--      </div>-->
    <!--    </div>-->
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
      posts: [
      ],
      isModalOpen: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   // this.fetchPosts() // // это слишком изи, внизу с вотч сделали
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка!')
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка!')
      }
    }
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // }
    // const callback = (entries, observer) => {
    //   if(entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // }
    //
    // const observer = new IntersectionObserver(callback, options)
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter( post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    //   selectedSort(newValue) {
    //     this.posts.sort((post1, post2) => {
    //       return post1[newValue]?.localeCompare(post2[newValue])
    //     })
    //   }

    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>


.posts__buttons {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  gap: 5px
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
  padding: 9px;
}

.observer {
  height: 30px;
  background: green;
}

</style>