import MainPage from '@/pages/MainPage.vue';
import {createRouter, createWebHistory} from 'vue-router';
import PostsListPage from '@/pages/PostsListPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import PostPage from '@/pages/PostPage.vue';


const routes = [
	{
		path: '/',
		component: MainPage
	},
	{
		path: '/posts',
		component: PostsListPage
	},
	{
		path: '/about',
		component: AboutPage
	},
	{
		path: '/about',
		component: AboutPage
	},
	{
		path: '/posts/:id',
		component: PostPage
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});

export default router;