// import { useEffect, useState } from 'react'
// import { Redirect, Route, Switch } from 'react-router'

// import Header from './components/Header'
// import Home from './Home'
// import Secure from './Secure'
// import Signin from './Signin'
// import Signup from './Signup'

// export default function Router() {
// 	const [authenticatedUser, setAuthenticatedUser] = useState(null)

// 	console.log('User Router: ', { authenticatedUser })

// 	useEffect(() => {
// 		if (authenticatedUser) return

// 		const userAsJSON = localStorage.getItem('user')

// 		const user = JSON.parse(userAsJSON)

// 		if (user) {
// 			setAuthenticatedUser(user)
// 		}
// 	}, [authenticatedUser])

// 	const handleLogout = () => {
// 		localStorage.removeItem('user')

// 		setAuthenticatedUser(null)
// 	}

// 	return (
// 		<>
// 			<Header handleLogout={handleLogout} />
// 			<Switch>
// 				<Route path="/signup">
// 					<Signup setAuthenticatedUser={setAuthenticatedUser} />
// 				</Route>
// 				<Route path="/signin">
// 					<Signin setAuthenticatedUser={setAuthenticatedUser} />
// 				</Route>
// 				<Route path="/secure">
// 					{authenticatedUser ? <Secure /> : <Redirect to="/signin" />}
// 				</Route>
// 				<Route path="/">
// 					<Home />
// 				</Route>
// 			</Switch>
// 		</>
// 	)
// }
