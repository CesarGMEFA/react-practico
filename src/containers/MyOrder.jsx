import React, { useContext } from 'react';
import { OrderItem } from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '@context/AppContext'
import flechita from '@icons/flechita.svg'

const MyOrder = () => {
	const { state } = useContext(AppContext)

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue[0].price
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
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem 
					key={index} 
					indexValue={index}
					product={product[0]} 
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
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export { MyOrder };