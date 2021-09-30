import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Coffee from './components/Coffee'
import Food from './components/Food'
import Frostino from './components/Frostino'
import Pastries from './components/Pastries'
import Basket from './pages/Basket'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PaymentReceived from './pages/PaymentReceived'

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
				<Route path="/cart">
					<Basket />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/paymentReceived">
					<PaymentReceived />
				</Route>
			</Switch>
			<a class="back-to-top-link" href="#top-of-the-page">
				Back to top
			</a>
			<Footer />
		</div>
	)
}

export default App
