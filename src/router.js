import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/shop',
			name: 'shop',
			component: Shop
		},
		{
			path: '/shop/:id',
			name: 'product',
			component: ProductDetail
		}
	]
})