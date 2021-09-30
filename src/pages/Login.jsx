import { useState } from 'react'
import { useHistory } from 'react-router'

const initialForm = {
	email: '',
	password: '',
}

function Login() {
	const [loginForm, setLoginForm] = useState(initialForm)
	const history = useHistory()

	function handleChange(e) {
		// const {name, value} = e.target
		// setLoginForm({ ...loginForm, [name]: value })
	}

	function handleSubmit() {
		// fetch("", {
		//   method: "POST",
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		//   credentials: 'include',
		// 	body: JSON.stringify(loginForm),
		// }).then(resp => resp.json).then(
		//   user => {
		//    ❌❌❌❌❌❌❌
		//   }
		// )
	}

	return (
		<>
			<main className="loginWrapper">
				<h2 className="center space-down">Login</h2>
				<form
					className="loginForm container"
					onSubmit={e => {
						e.preventDefault()
						handleSubmit(loginForm)
					}}>
					<input
						onChange={handleChange}
						type="email"
						placeholder="Email"
						name="email"
						value={loginForm.email}
						required
					/>
					<input
						onChange={handleChange}
						type="password"
						placeholder="Password"
						name="password"
						value={loginForm.password}
						required
						min={10}
					/>
					<button className="button">Login</button>
					{/* <input type="submit" value="Login" /> */}
				</form>
			</main>
			{/* <Basket className="" /> */}
		</>
	)
}

export default Login
