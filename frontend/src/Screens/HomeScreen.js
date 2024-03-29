import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

import { listProducts } from '../actions/productActions'

function HomeScreen() {

	const dispatch = useDispatch()
	const productList = useSelector(state => state.productList);
	const {error, loading, products} = productList;
	useEffect(() => {
		dispatch(listProducts())
	}, [])

	return (
		<div>
			<h1>Latest Products</h1>
			{loading ? <Loader/>
				: error ? <Message variant='danger'>{error}</Message>
					:
					<Row>
						{products.map(product => (
							<Col key={product._id} sm={12} md={6} lg={4}>
								<Product product={product} />
							</Col>
						))}
					</Row>
			}
		</div>
	)
}

export default HomeScreen