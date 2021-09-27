import { useEffect } from 'react'
import useStore from '../store'
import Item from './Item'

function Pastries() {
	//import coffees from store
	const pastries = useStore(store => store.pastries)
	//import fetchCoffee from store
	const fetchPastries = useStore(store => store.fetchPastries)

	useEffect(() => {
		fetchPastries()
		console.log('I am fetching pastries..')
	}, [fetchPastries])

	console.log('pastries in pastriesPage: ', pastries)

	return (
		<section className="section__style trending-now">
			<main>
				<h2>Pastries</h2>
				<ul className="list__section">
					{pastries.map((item, index) => (
						<Item item={item} key={index} />
					))}
				</ul>
			</main>
		</section>
	)
}

export default Pastries
