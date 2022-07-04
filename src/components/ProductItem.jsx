import React, { useContext, useState } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '@context/AppContext'
import ProductDetail from '../containers/ProductDetail';

import addBtn from '@icons/bt_add_to_cart.svg'
import addedBtn from '@icons/bt_added_to_cart.svg'

const ProductItem = ({product}) => {
	const [ toggleProduct, setToggleProduct ] = useState(false);
	const { addToCart, state } = useContext(AppContext)
	
	// const handleCart = item => {
	// 	addToCart([item])
	// }
	
	const handleCart = (item) => {
		if(state.cart.includes(item)) {
			return;
		} else {
			addToCart(item);
		}
	}
	
	const verifyAdded = (item) => {
		if(state.cart.includes(item)) {
			return addedBtn;
		} else {
			return addBtn;
		}
	}
	
	return (
		<div className="ProductItem">
			<img src={product.images[0]} 
					 alt={product.title} 
					 loading="lazy"
					 onClick={() => setToggleProduct(!toggleProduct)}
			/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleCart(product)} >
					<img src={verifyAdded(product)} alt="boton para agregar producto a lista de compras" />
				</figure>
			</div>
			{toggleProduct && <ProductDetail
				product={product}
				setToggleProduct={setToggleProduct}
				handleCart={handleCart}
			/>}
		</div>
	);
}

export { ProductItem };