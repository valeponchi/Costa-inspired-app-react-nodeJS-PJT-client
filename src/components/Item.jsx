import useStore from '../store'

const placeholder = '../public/assets/costa-coffee-logo.svg'

function Item({ item, key }) {
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
				<button className="quantity-btn center remove-btn">-</button>
				<p>To Cart</p>
				<button className="quantity-btn center add-btn">+</button>
				<div className="space"></div>
			</div>
		</li>
	)
}

export default Item
