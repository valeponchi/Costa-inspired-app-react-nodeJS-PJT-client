import { useState } from 'react'
import useStore from '../store'

const placeholder = '../public/assets/costa-coffee-logo.svg'

function Item({ item, key }) {
	const addItemBasket = useStore(store => store.addItemBasket)
	const removeItemBasket = useStore(store => store.removeItemBasket)

	const name = item.name
	return (
		<li key={key}>
			<img
				className="image"
				src={item.imageUrl ? item.imageUrl : placeholder}
				alt={item.name}
			/>
			<h3 className="space-down">{name.toUpperCase()}</h3>
			<p>{item.description}</p>
			<div className="inline">
				<div className="space"></div>
				<button
					className="quantity-btn center remove-btn"
					onClick={() => removeItemBasket(item)}>
					-
				</button>
				<p>£{item.price.toFixed(2)}</p>
				<button
					className="quantity-btn center add-btn"
					onClick={() => addItemBasket(item)}>
					+
				</button>
				<div className="space"></div>
			</div>
		</li>
	)
}

export default Item