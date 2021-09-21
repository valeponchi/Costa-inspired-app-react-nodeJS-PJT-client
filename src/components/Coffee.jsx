import { useEffect } from 'react'
import useStore from '../store'
import Item from './Item'

function Coffee() {
	//import coffees from store
	const coffees = useStore(store => store.coffees)
	//import fetchCoffee from store
	const fetchCoffees = useStore(store => store.fetchCoffees)

	useEffect(() => {
		fetchCoffees()
		console.log('I am fetching coffees..')
	}, [])

	console.log('coffees in CoffeePage: ', coffees)

	return (
		<section className="section__style">
			<main>
				<h2>Coffee</h2>
				<ul className="list__section">
					{coffees.map(item => (
						<Item item={item} />
					))}
				</ul>
			</main>
		</section>
	)
}

export default Coffee
