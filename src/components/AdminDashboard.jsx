import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

export default function Dashboard() {
	const [users, setUsers] = useState([])

	const history = useHistory()

	useEffect(() => {
		const userAsJSON = localStorage.getItem('user')

		const user = JSON.parse(userAsJSON)

		fetch('http://localhost:3030/users', {
			method: 'GET',
			headers: {
				authorization: user.id,
			},
		})
			.then(res => res.json())
			.then(data => {
				const users = data.users

				console.log('Users GET request: ', data)

				setUsers(users)
			})
			.catch(error => {
				console.error('[ERROR]: ', error)

				// history.push("/admin/not-authorized")
			})
	}, [])

	return (
		<main>
			<h1>Dashboard</h1>
			<p>The list of users is protected by the server.</p>
			<ul>
				{users.map((user, index) => {
					return <li key={index}>{user.email}</li>
				})}
			</ul>
		</main>
	)
}
