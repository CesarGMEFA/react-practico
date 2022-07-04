import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { OrderItem } from '../components/OrderItem';

import '../styles/MyOrder.scss';

import AppContext from '@context/AppContext'

import flechita from '@icons/flechita.svg'

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	
	const { state } = useContext(AppContext)
	console.log('state', state)
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}

	const formatoPrecio = (valor) => {
		const formatoUSD = new Intl.NumberFormat('en-EN', {
				style: 'currency',
				currency: 'USD'
		}).format(valor)
		return formatoUSD
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow"  
					onClick={() => setToggleOrders(!toggleOrders)}
					className="title-container_arrow"
				/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem 
					key={`orderItem-${product.id}`} 
					indexValue={index}
					product={product} 
					/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>
						{formatoPrecio(sumTotal())}
					</p>
				</div>
				<Link rel="stylesheet" to="/checkout" >
					<button className="primary-button">
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
}

export { MyOrder };