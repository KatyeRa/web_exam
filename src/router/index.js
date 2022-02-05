import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import form from '../views/Form.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/formpage',
		component: form
	},
	{
		path: '/about',
		component: About
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
