import { useState } from 'react'
import { useHistory } from 'react-router'
import useStore from '../store'
import jwtDecode from 'jwt-decode'

const initialForm = {
	email: '',
	password: '',
}

function Signup(props) {
	const { setAuthenticatedUser } = props

	const user = useStore(store => store.user)
	const setUser = useStore(store => store.setUser)
	const signinUrl = useStore(store => store.signinUrl)

	// const [user, setUser] = useState(initialForm)
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

		fetch(signinUrl, fetchOptions)
			.then(res => res.json())
			.then(data => {
				const token = data.token

				console.log('Inside Signup Fetch: ', { token })

				if (token) {
					const user = jwtDecode(token)

					setAuthenticatedUser(user)

					localStorage.setItem('token', token)

					setUser(initialForm)

					history.push('/cart')
				}
			})
	}

	return (
		<>
			<main className="loginWrapper">
				<h2 className="center space-down">Sign Up with us</h2>
				<form className="signupForm container" onSubmit={handleSubmit}>
					<input
						onChange={handleChange}
						type="email"
						placeholder="Email"
						name="email"
						required
						value={user.email}
					/>
					<input
						onChange={handleChange}
						type="password"
						placeholder="Password"
						name="password"
						required
						min={10}
						value={user.password}
					/>
					<button className="button btnSignup">Submit</button>
				</form>
			</main>
			{/* <Basket className="" /> */}
		</>
	)
}

export default Signup
