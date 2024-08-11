import {computed, ref} from 'vue';

export default function useSearchedSortedPosts(sortedPosts) {
	const searchQuery = ref('')

	const searchedSortedPosts = computed(() => {
		return sortedPosts.value.filter( post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
	})

	return {
		searchQuery, searchedSortedPosts
	}
}