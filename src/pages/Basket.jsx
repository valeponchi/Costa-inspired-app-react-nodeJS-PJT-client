import React from 'react'
import useStore from '../store'
function Basket() {
	const onAdd = useStore(store => store.addItemBasket)
	const onRemove = useStore(store => store.removeItemBasket)
	const basketItems = useStore(store => store.basketItems)
	const itemsPrice = basketItems.reduce(
		(accumulator, currentItem) =>
			accumulator + currentItem.price * currentItem.qnt,
		0
	)
	// const taxPrice = itemsPrice * 0.14
	// const shippingPrice = itemsPrice > 2000 ? 0 : 5
	const totalPrice = itemsPrice
	return (
		<section className="block">
			<h2>Cart Items</h2>
			<div>
				{/* when cart item is 0 render this <div> */}
				{basketItems.length === 0 && <div>Cart Is Empty</div>}
			</div>
			{basketItems.map(item => (
				<div key={item.id} className="row">
					<div className="columns">
						<button
							onClick={() => onRemove(item)}
							className="quantity-btn center remove-btn">
							-
						</button>

						<div className="columns">
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
			{basketItems.length != 0 && (
				<>
					<hr></hr>
					{/* <div className="row">
						<div className="columns">Item Price</div>
						<div className="column-1 text-right">£{itemsPrice.toFixed(2)}</div>
					</div> */}
					{/* <div className="row">
						<div className="columns">Tax Price</div>
						<div className="column-1 text-right">£{taxPrice.toFixed(2)}</div>
					</div>
					<div className="row">
						<div className="columns">Shipping Price</div>
						<div className="column-1 text-right">
							£{shippingPrice.toFixed(2)}
						</div>
					</div> */}
					<div className="row">
						<div className="columns">
							<strong>Total Price</strong>
						</div>
						<div className="column-1 text-right">
							<strong>£{totalPrice.toFixed(2)}</strong>
						</div>
					</div>
					<hr />
					<div className="row">
						<button
							className="checkout-btn"
							onClick={() => alert('Implement Checkout')}>
							Checkout
						</button>
					</div>
				</>
			)}
		</section>
	)
}

export default Basket
