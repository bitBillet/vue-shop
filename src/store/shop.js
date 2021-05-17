export default {
	state: {
		shopList: [
			{
				id: 1,
				title: 'Reebok',
				description: 'Ботинки из говна',
				img: require('../assets/img/reebok/1.png'),
				gallery: [
					require('../assets/img/reebok/1.png'),
					require('../assets/img/reebok/2.png'),
					require('../assets/img/reebok/3.png'),
					require('../assets/img/reebok/4.png')
				]
			},
			{
				id: 2,
				title: 'New Balance Grey',
				description: 'Ботинки из говна но серы',
				img: require('../assets/img/NB/1.png'),
				gallery: [
					require('../assets/img/NB/1.png'),
					require('../assets/img/NB/2.png'),
					require('../assets/img/NB/3.png'),
					require('../assets/img/NB/4.png')
				]
			},
			{
				id: 3,
				title: 'New Balance Black',
				description: 'Ботинки из говна но черные',
				img: require('../assets/img/nb2/1.png'),
				gallery: [
					require('../assets/img/nb2/1.png'),
					require('../assets/img/nb2/2.png'),
					require('../assets/img/nb2/3.png'),
					require('../assets/img/nb2/4.png')
				]
			}
		]
	},
	mutations: {
	},
	actions: {

	},
	getters: {
		getShopList(state) {
			return state.shopList
		},
		getProduct: (state) => (id) => {
			return state.shopList.find(product => product.id == id)
		}
	}
}