import Vue 			from 'vue'
import Router 		from 'vue-router'
import Home 		from '@/components/Home'
import Contact 		from '@/components/Contact'
import Products 	from '@/components/Products'
import Git 			from '@/components/Git'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:
	[
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},
		{
			path: '/products/:id',
			name: 'Products',
			component: Products
		},
		{
			path: '/git',
			name: 'Git',
			component: Git
		},
	]
})
