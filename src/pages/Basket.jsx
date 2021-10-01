import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import useStore from '../store'

const placeholder = '../public/assets/costa-coffee-logo.svg'

function Basket({ authenticatedUser }) {
	const onAdd = useStore(store => store.addItemBasket)
	const onRemove = useStore(store => store.removeItemBasket)
	const basketItems = useStore(store => store.basketItems)
	const removeAllBasketItems = useStore(store => store.removeAllBasketItems)
	const getUsersUrl = useStore(store => store.getUsersUrl)

	const totalToPay = useStore(store => store.totalToPay)

	const [checkoutClicked, setCheckoutClicked] = useState(false)
	const [asGuestClicked, setAsGuestClicked] = useState(false)
	const [loginClicked, setLoginClicked] = useState(false)
	const [registerClicked, setRegisterClicked] = useState(false)

	const history = useHistory()

	const itemsPrice = basketItems.reduce(
		(accumulator, currentItem) =>
			accumulator + currentItem.price * currentItem.qnt,
		0
	)

	let totalPrice = itemsPrice
	if (authenticatedUser) totalPrice = itemsPrice * 0.95
	totalPrice = totalPrice.toFixed(2)
	let totalPriceHeading = 'Total Price'
	if (authenticatedUser) totalPriceHeading = 'Total Price with 5% discount'

	return (
		<section className="block">
			<h2>Cart Items</h2>
			{basketItems.length === 0 && <div>Empty</div>}
			{basketItems.map(item => (
				<div key={item.id} className="row">
					<div className="columns">
						<button
							onClick={() => onRemove(item)}
							className="quantity-btn center remove-btn">
							-
						</button>

						<div className="columns">
							{
								<img
									className="image smallImage"
									src={item.imageUrl ? item.imageUrl : placeholder}
									alt={item.name}
								/>
							}
							{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
						</div>
						<button
							onClick={() => onAdd(item)}
							className="quantity-btn center add-btn">
							+
						</button>
					</div>
					<div className="columns text-right">
						{item.qnt} x £{item.price.toFixed(2)}
					</div>
				</div>
			))}
			{basketItems.length !== 0 && (
				<>
					<hr></hr>
					<div className="row">
						<div className="columns">
							<strong>{totalPriceHeading}</strong>
						</div>
						<div className="column-1 text-right">
							<strong>£{totalPrice}</strong>
						</div>
					</div>
					<hr />
					<div className="row">
						{authenticatedUser && (
							<button
								onClick={() => {
									history.push('/paymentReceived')
									removeAllBasketItems()
								}}
								className="square">
								Pay
							</button>
						)}
						{!authenticatedUser && !checkoutClicked && (
							<button
								className="checkout-btn "
								onClick={() => setCheckoutClicked(!checkoutClicked)}>
								Checkout
							</button>
						)}
						{checkoutClicked ? (
							<>
								<div className="checkoutGridWrapper">
									<div>
										if you Login/Register you'll get 5% discount on all your
										orders!
									</div>
									<br></br>
									<div className="wrapperCheckout">
										{!asGuestClicked && (
											<>
												<button
													onClick={() => setAsGuestClicked(!asGuestClicked)}
													className="square">
													Checkout <br></br> as a <br></br> Guest
												</button>
												<button
													onClick={() => history.push('/login')}
													className="square">
													Login
												</button>
												<button
													onClick={() => history.push('/signup')}
													className="square">
													Register
												</button>
											</>
										)}
										{asGuestClicked && (
											<button
												onClick={() => {
													history.push('/paymentReceived')
													removeAllBasketItems()
												}}
												className="square">
												Pay
											</button>
										)}
									</div>
								</div>
							</>
						) : (
							''
						)}
					</div>
				</>
			)}
		</section>
	)
}

export default Basket
