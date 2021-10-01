import { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import Header from './components/Header'
import Signin from './Signin'
import Dashboard from './AdminDashboard'
import NotAuthorized from './Unauthorized'

export default function Router() {
	const [authenticatedUser, setAuthenticatedUser] = useState(null)

	console.log('Admin Router: ', { authenticatedUser })

	useEffect(() => {
		if (authenticatedUser) return

		const userAsJSON = localStorage.getItem('user')

		const user = JSON.parse(userAsJSON)

		if (user) {
			setAuthenticatedUser(user)
		}
	}, [authenticatedUser])

	const handleLogout = () => {
		localStorage.removeItem('user')

		setAuthenticatedUser(null)
	}

	const isAdminUser = authenticatedUser && authenticatedUser.role === 'ADMIN'

	return (
		<>
			<Header handleLogout={handleLogout} />
			<Switch>
				<Route path="/admin/signin">
					<Signin setAuthenticatedUser={setAuthenticatedUser} />
				</Route>
				<Route path="/admin/dashboard">
					{isAdminUser ? <Dashboard /> : <Redirect to="/admin/signin" />}
				</Route>
				<Route path="/admin/not-authorized">
					<NotAuthorized />
				</Route>
				<Route path="/admin">
					<Redirect to="/admin/signin" />
				</Route>
			</Switch>
		</>
	)
}
