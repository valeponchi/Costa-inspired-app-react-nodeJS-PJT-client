import Coffee from '../components/Coffee'
import Drinks from '../components/Drinks'
import Food from '../components/Food'
import Frostino from '../components/Frostino'
import Pastries from '../components/Pastries'
import Snacks from '../components/Snacks'

function Home() {
	return (
		<>
			<main className="">
				<Coffee />
				<Frostino />
				<Food />
				<Pastries />
				<Drinks />
				<Snacks />
				{/* <a class="back-to-top-link" href="#top-of-the-page">
					Back to top
				</a> */}
			</main>
			{/* <Basket className="" /> */}
		</>
	)
}

export default Home
