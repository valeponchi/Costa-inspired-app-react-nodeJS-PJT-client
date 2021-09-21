import create from 'zustand'
import { devtools } from 'zustand/middleware'

const basicUrl = 'http://localhost:4000'

const useStore = create(
	devtools((set, get) => ({
		coffees: [],
		fetchCoffees: () => {
			fetch(`http://localhost:4000/products/coffee`)
				.then(resp => resp.json())
				.then(fetchedCoffees => {
					console.log('fetchedCoffees in store: ', fetchedCoffees)
					set({ coffees: fetchedCoffees })
				})
		},

		drink: [],
		fetchDrinks: () => {
			fetch(`http://localhost:4000/products/drink`)
				.then(resp => resp.json())
				.then(fetchedDrinks => {
					console.log('fetchedDrinks in store: ', fetchedDrinks)
					set({ drink: fetchedDrinks })
				})
		},

		frostino: [],
		fetchFrostino: () => {
			fetch(`http://localhost:4000/products/frostino`)
				.then(resp => resp.json())
				.then(fetchedFrostinos => {
					console.log('fetchedSnack in store: ', fetchedFrostinos)
					set({ frostino: fetchedFrostinos })
				})
		},

		food: [],
		fetchFood: () => {
			fetch(`http://localhost:4000/products/food`)
				.then(resp => resp.json())
				.then(fetchedFood => {
					console.log('fetchedFood in store: ', fetchedFood)
					set({ food: fetchedFood })
				})
		},

		snacks: [],
		fetchSnacks: () => {
			fetch(`http://localhost:4000/products/snack`)
				.then(resp => resp.json())
				.then(fetchedSnacks => {
					console.log('fetchedSnack in store: ', fetchedSnacks)
					set({ snacks: fetchedSnacks })
				})
		},

		pastries: [],
		fetchPastries: () => {
			fetch(`http://localhost:4000/products/pastries`)
				.then(resp => resp.json())
				.then(fetchedPastries => {
					console.log('fetchedPastries in store: ', fetchedPastries)
					set({ pastries: fetchedPastries })
				})
		},
	}))
)

export default useStore

// EXAMPLE - add more items into an existing state
// expenses: monthlyExpenses,
// setExpenses: (newExpenses) => {
// 	console.log('Getting expenses', get, get().expenses);
// 	set({ expenses: [...get().expenses, newExpenses] });
// }
