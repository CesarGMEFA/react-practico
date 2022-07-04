import React, { useContext } from 'react';
import '../styles/OrderItem.scss';

import AppContext from '@context/AppContext'

import close from '@icons/icon_close.png'

const OrderItem = ({ product, indexValue }) => {
	const { removeFromCart } = useContext(AppContext)

	// const handleRemove = index => {
		// removeFromCart(index)
	// }
	console.log(product)
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
				{/* <img  alt={"Foto de algun producto"} /> */}
			</figure>
			<p>{product.title}</p>
			{/* <p>Ropa</p> */}
			{/* <p>$  400</p> */}
			<p>${product.price}</p>
			<img 
				src={close} 
				alt="close" 
				className='OrderItem-close'
				onClick={() => removeFromCart(product)}
			/>
		</div>
	);
}

export { OrderItem };