import { useState } from 'react'
import { useHistory } from 'react-router'
import useStore from '../store'
import jwtDecode from 'jwt-decode'

const initialForm = {
	email: '',
	password: '',
}

const basicUrl = require('../store')

function Login(props) {
	const { setAuthenticatedUser } = props

	const user = useStore(store => store.user)
	const setUser = useStore(store => store.setUser)
	const loginUrl = useStore(store => store.loginUrl)

	const history = useHistory()

	function handleChange(e) {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	function handleSubmit(event) {
		event.preventDefault()

		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...user }),
		}

		fetch(loginUrl, fetchOptions)
			.then(res => {
				if (res.status === 401) {
					throw Error(res.statusText)
				}
				return res.json()
			})
			.then(data => {
				const token = data.token

				console.log('Inside Login Fetch: ', { token })

				if (token) {
					const user = jwtDecode(token)

					setAuthenticatedUser(user)

					localStorage.setItem('token', token)

					setUser(initialForm)

					history.push('/cart')
				}
			})
			.catch(error => {
				console.error('[ERROR]: ', error)
			})
	}

	return (
		<>
			<main className="loginWrapper">
				<h2 className="center space-down">Login</h2>
				<form
					className="loginForm container"
					onSubmit={handleSubmit}
					// onSubmit={e => {
					// 	e.preventDefault()
					// 	handleSubmit(user)
					// }}
				>
					<input
						onChange={handleChange}
						type="email"
						placeholder="Email"
						name="email"
						value={user.email}
						required
					/>
					<input
						onChange={handleChange}
						type="password"
						placeholder="Password"
						name="password"
						value={user.password}
						required
						min={10}
					/>
					<button className="button">Login</button>
				</form>
			</main>
		</>
	)
}

export default Login
