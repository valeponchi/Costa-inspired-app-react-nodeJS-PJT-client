import create from 'zustand'
import { devtools } from 'zustand/middleware'

const basicUrl = 'http://localhost:4000'

const useStore = create(
	devtools((set, get) => ({
		coffees: [],
		fetchCoffees: () => {
			fetch(`${basicUrl}/products/coffee`)
				.then(resp => resp.json())
				.then(fetchedCoffees => {
					console.log('fetchedCoffees in store: ', fetchedCoffees)
					set({ coffees: fetchedCoffees })
				})
		},

		drink: [],
		fetchDrinks: () => {
			fetch(`${basicUrl}/products/drink`)
				.then(resp => resp.json())
				.then(fetchedDrinks => {
					console.log('fetchedDrinks in store: ', fetchedDrinks)
					set({ drink: fetchedDrinks })
				})
		},

		frostino: [],
		fetchFrostino: () => {
			fetch(`${basicUrl}/products/frostino`)
				.then(resp => resp.json())
				.then(fetchedFrostinos => {
					console.log('fetchedSnack in store: ', fetchedFrostinos)
					set({ frostino: fetchedFrostinos })
				})
		},

		food: [],
		fetchFood: () => {
			fetch(`${basicUrl}/products/food`)
				.then(resp => resp.json())
				.then(fetchedFood => {
					console.log('fetchedFood in store: ', fetchedFood)
					set({ food: fetchedFood })
				})
		},

		snacks: [],
		fetchSnacks: () => {
			fetch(`${basicUrl}/products/snack`)
				.then(resp => resp.json())
				.then(fetchedSnacks => {
					console.log('fetchedSnack in store: ', fetchedSnacks)
					set({ snacks: fetchedSnacks })
				})
		},

		pastries: [],
		fetchPastries: () => {
			fetch(`${basicUrl}/products/pastries`)
				.then(resp => resp.json())
				.then(fetchedPastries => {
					console.log('fetchedPastries in store: ', fetchedPastries)
					set({ pastries: fetchedPastries })
				})
		},

		// currentUser: null,
		// login(user) {
		// 	set({ currentUser: user })
		// },
		// logout() {
		// 	set({ currentUser: null })
		// },

		basketItems: [],
		addItemBasket: newItem => {
			const exist = get().basketItems.find(item => item.id === newItem.id)
			if (exist) {
				set({
					basketItems: get().basketItems.map(item =>
						item.id === newItem.id ? { ...exist, qnt: exist.qnt + 1 } : item
					),
				})
			} else {
				set({ basketItems: [...get().basketItems, { ...newItem, qnt: 1 }] })
			}
		},

		removeItemBasket: targetItem => {
			const exist = get().basketItems.find(item => item.id === targetItem.id)
			if (exist.qnt === 1) {
				set({
					basketItems: get().basketItems.filter(
						item => item.id !== targetItem.id
					),
				})
			} else {
				set({
					basketItems: get().basketItems.map(item =>
						item.id === targetItem.id ? { ...exist, qnt: exist.qnt - 1 } : item
					),
				})
			}
		},

		removeAllBasketItems: () => set({ basketItems: [] }),

		totalToPay: 0,
		// setTotalToPay: ({
		// 	totalToPay: get().basketItems.reduce(
		// 			(accumulator, currentItem) =>
		// 				accumulator + currentItem.price * currentItem.qnt,
		// 			0
		// 		),
		// })
		// setTotalToPay: get().basketItems.reduce(
		// 	(accumulator, currentItem) =>
		// 		accumulator + currentItem.price * currentItem.qnt,
		// 	0
		// ),

		// deleteBasketItem: targetItem =>
		// 	set(store => ({
		// 		basketItems: get().basketItems.filter(
		// 			basketItem => basketItem != targetItem
		// 		),
		// 	})),
	}))
)

export default useStore

// EXAMPLE - add more items into an existing state
// expenses: monthlyExpenses,
// setExpenses: (newExpenses) => {
// 	console.log('Getting expenses', get, get().expenses);
// 	set({ expenses: [...get().expenses, newExpenses] });
// }
