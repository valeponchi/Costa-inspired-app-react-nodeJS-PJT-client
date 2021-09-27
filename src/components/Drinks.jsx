import { useEffect } from 'react'
import useStore from '../store'
import Item from './Item'

function Drinks() {
	//import coffees from store
	const drink = useStore(store => store.drink)
	//import fetchCoffee from store
	const fetchDrinks = useStore(store => store.fetchDrinks)

	useEffect(() => {
		fetchDrinks()
		console.log('I am fetching drink..')
	}, [fetchDrinks])

	console.log('drink in drinkPage: ', drink)

	return (
		<section className="section__style trending-now">
			<h2> Drinks </h2>

			<small> Coming soon.. </small>
			<ul className="list__section">
				{drink.map((item, index) => (
					<Item item={item} key={index} />
				))}
			</ul>
		</section>
	)
}

export default Drinks
