import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product.component';
import { useEffect } from 'react';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
const HomeScreen = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const keyword = params.keyword;

	const productList = useSelector((state) => state.productList);
	const { error, products } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword));
	}, [dispatch, keyword]);

	return (
		<>
			<h1>Latest Products</h1>
			{products?.length === 0 ? (
				<Loader />
			) : error ? (
				<Message variant="danger" message={error} />
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomeScreen;
