import React, { useContext } from 'react';

import AppContext from '@context/AppContext'

import { OrderItem } from '../components/OrderItem';
import { Menu } from '../components/Menu';

import '../styles/Checkout.scss';

const Checkout = () => {

	const { state } = useContext(AppContext);
	const date = new Date().toLocaleDateString();
	const today = date.split('/').join('.');

	const numberArticles = state.cart.length

	const total = state.cart.reduce((acum, product) => {
		return acum += product.price
	}, 0)

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{today}</span>
							<span>{`${numberArticles} articles`}</span>
						</p>
						<p>${total}</p>
					</div>
				</div>
				{state.cart.map((product) => (
					<OrderItem 
					product={product}
					key={`orderItem-${product.id}`}
					/>
				))}
			</div>
		</div>
	);
}

export { Checkout };