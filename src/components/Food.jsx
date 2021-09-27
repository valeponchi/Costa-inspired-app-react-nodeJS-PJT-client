import { useEffect } from 'react'
import useStore from '../store'
import Item from './Item'

function Food() {
	//import coffees from store
	const food = useStore(store => store.food)
	//import fetchCoffee from store
	const fetchFood = useStore(store => store.fetchFood)

	useEffect(() => {
		fetchFood()
		console.log('I am fetching food..')
	}, [fetchFood])

	console.log('Food in FoodPage: ', food)

	return (
		<section className="section__style trending-now">
			<main>
				<h2>Food</h2>
				<ul className="list__section">
					{food.map(item => (
						<Item item={item} key={item.id} />
					))}
				</ul>
			</main>
		</section>
	)
}

export default Food
