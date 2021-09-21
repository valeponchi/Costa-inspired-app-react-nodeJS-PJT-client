import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Coffee from './components/Coffee'
import Food from './components/Food'
import Frostino from './components/Frostino'
import Pastries from './components/Pastries'

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/coffee" exact>
					<Coffee />
				</Route>
				<Route path="/food" exact>
					<Food />
				</Route>
				<Route path="/pastries" exact>
					<Pastries />
				</Route>
				<Route path="/frostino" exact>
					<Frostino />
				</Route>
			</Switch>

			<Footer />
		</div>
	)
}

export default App
