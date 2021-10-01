import { Link } from 'react-router-dom'

export default function NotAuthorized() {
	return (
		<main>
			<h1>You are not an Admin.</h1>
			<p>
				Sign in as a normal user <Link to="/signin">here</Link>
			</p>
		</main>
	)
}
