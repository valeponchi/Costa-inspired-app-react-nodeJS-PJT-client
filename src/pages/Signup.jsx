import { useState } from 'react'
import { useHistory } from 'react-router'

const initialForm = {
	// email: '',
	// password: '',
	// role:''
}

function Login() {
	const [signupForm, setSignupForm] = useState(initialForm)
	const history = useHistory()

	function handleChange(e) {
		// const {name, value} = e.target
		// setLoginForm({ ...signupForm, [name]: value })
	}

	function handleSubmit() {
		// fetch("", {
		//   method: "POST",
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		//   credentials: 'include',
		// 	body: JSON.stringify(signupForm),
		// }).then(resp => resp.json).then(
		//   user => {
		//    ❌❌❌❌❌❌❌
		//   }
		// )
	}

	return (
		<>
			<main className="loginWrapper">
				<h2 className="center space-down">Sign Up with us</h2>
				<form
					className="signupForm container"
					// you have to send also role:host !!}
					onSubmit={e => {
						e.preventDefault()
						handleSubmit(signupForm)
					}}>
					<input
						onChange={handleChange}
						type="email"
						placeholder="Email"
						name="email"
						required
						value={signupForm.email}
					/>
					<input
						onChange={handleChange}
						type="password"
						placeholder="Password"
						name="password"
						required
						min={10}
						value={signupForm.password}
					/>
					<button className="button btnSignup">Submit</button>
				</form>
			</main>
			{/* <Basket className="" /> */}
		</>
	)
}

export default Login
