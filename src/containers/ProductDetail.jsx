import React from 'react';

import { ProductInfo } from '../components/ProductInfo';

import '../styles/ProductDetail.scss';

import close from '@icons/icon_close.png'

const ProductDetail = ({product, handleCart, setToggleProduct}) => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick={() => setToggleProduct(false)}>
				<img src={close} alt="close" />
			</div>
			<ProductInfo
				product={product}
				setToggleProduct={setToggleProduct}
				handleCart={handleCart}
			/>
		</aside>
	);
}

export default ProductDetail;