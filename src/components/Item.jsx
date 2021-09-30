import useStore from '../store'

const placeholder = '../public/assets/costa-coffee-logo.svg'

function Item({ item, key }) {
	const addItemBasket = useStore(store => store.addItemBasket)
	const removeItemBasket = useStore(store => store.removeItemBasket)
	const basketItems = useStore(store => store.basketItems)

	const exist = basketItems.find(basketItem => basketItem.id === item.id)

	const name = item.name
	return (
		<li key={item.id}>
			<img
				className="image"
				src={item.imageUrl ? item.imageUrl : placeholder}
				alt={item.name}
			/>
			<span className="center">
				<h3 className="space-down">{name.toUpperCase()}</h3>£
				{item.price.toFixed(2)}
			</span>
			<p className="center">{item.description}</p>
			<div className="inline">
				<div className="space"></div>
				<button
					className="quantity-btn center remove-btn"
					onClick={() => (exist ? removeItemBasket(item) : null)}>
					-
				</button>
				<p>{exist ? exist.qnt : 0}</p>
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
