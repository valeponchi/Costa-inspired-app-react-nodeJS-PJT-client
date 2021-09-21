import Coffee from '../components/Coffee'
import Drinks from '../components/Drinks'
import Food from '../components/Food'
import Frostino from '../components/Frostino'
import Pastries from '../components/Pastries'
import Snacks from '../components/Snacks'

function Home() {
	return (
		<main>
			<Coffee />
			<Frostino />
			<Food />
			<Pastries />
			<Drinks />
			<Snacks />
		</main>
	)
}

export default Home
