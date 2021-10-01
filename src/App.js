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
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
// import Secure from './Secure'
import jwtDecode from 'jwt-decode'

function App() {
	const [authenticatedUser, setAuthenticatedUser] = useState(null)
	console.log('User Router: ', { authenticatedUser })

	useEffect(() => {
		if (authenticatedUser) return

		const token = localStorage.getItem('token')

		if (token) {
			const user = jwtDecode(token)
			setAuthenticatedUser(user)
		}
	}, [authenticatedUser])

	const handleLogout = () => {
		localStorage.removeItem('token')

		setAuthenticatedUser(null)
	}

	return (
		<div className="App">
			<Header
				handleLogout={handleLogout}
				authenticatedUser={authenticatedUser}
			/>

			<Switch>
				<Route path="/signup">
					<Signup setAuthenticatedUser={setAuthenticatedUser} />
				</Route>
				<Route path="/login">
					<Login setAuthenticatedUser={setAuthenticatedUser} />
				</Route>
				{/* <Route path="/secure">
					{authenticatedUser ? <Secure /> : <Redirect to="/signin" />}
				</Route> */}
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
					<Basket authenticatedUser={authenticatedUser} />
				</Route>
				{/* <Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route> */}
				<Route path="/paymentReceived">
					<PaymentReceived />
				</Route>
				<Route path="/admin">{/* <AdminRouter> */}</Route>
			</Switch>
			<a class="back-to-top-link" href="#top-of-the-page">
				Back to top
			</a>
			<Footer />
		</div>
	)
}

export default App
