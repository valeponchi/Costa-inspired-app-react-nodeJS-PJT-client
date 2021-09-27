import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useStore from '../store'
// import useStore from '../store'

const Title = styled.h1`
	margin: 10px;
	color: white;
	font-size: 3rem;
	line-height: 100%;
`

function Header() {
	const basketItems = useStore(store => store.basketItems)

	const arrayWithQnt = basketItems.map(item => item.qnt)
	console.log(`arrayWithQnt:`, arrayWithQnt)

	const quantityInCart = arrayWithQnt.reduce(
		(accumulator, currentItem) => accumulator + currentItem,
		0
	)

	console.log(`quantityInCart:`, quantityInCart)

	return (
		<header className="top-bar">
			<main>
				<nav className="header__nav">
					<ul>
						<li key={0}>
							<Link to="/">
								<img
									className="logo"
									src={`/assets/costa-coffee-logo.svg`}
									alt="Costa logo"
								/>
							</Link>{' '}
						</li>
						<li key={1}>
							{' '}
							<Link to="/coffee">Coffee</Link>{' '}
						</li>
						<li key={2}>
							<Link to="/food">Food</Link>{' '}
						</li>
						<li key={3}>
							<Link to="/frostino">Frostino</Link>{' '}
						</li>
						<li key={4}>
							<Link to="/pastries">Pastries</Link>{' '}
						</li>

						<li key={6}>
							<Link className="login_register" to="/login">
								Login
							</Link>{' '}
						</li>
						<li key={7}>
							<Link className="login_register" to="/register">
								Register
							</Link>{' '}
						</li>
						<li key={5}>
							<Link className="login_register" to="/cart">
								Cart <button className="badge">{quantityInCart}</button>
							</Link>{' '}
						</li>
						{/* <li> */}
						{/* <form onSubmit={handleSubmit}>
							<input type="text" name="search" placeholder="Search..."></input>
						</form> */}
						{/* </li> */}
					</ul>
				</nav>
				<Title>
					Perfect coffee. <br></br>
					Enjoy it here, <br></br>
					there, everywhere.
				</Title>
				{/* <Title>everywhere.</Title> */}
			</main>
		</header>
	)
}

export default Header
