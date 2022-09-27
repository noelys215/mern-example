import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer.component';
import CheckoutSteps from '../components/CheckoutSteps.component';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentScreen = () => {
	const navigate = useNavigate();

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	if (!shippingAddress) {
		navigate('/shipping');
	}

	const [paymentMethod, setPaymentMethod] = useState('PayPal');

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		navigate('/placeorder');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as="legend">Select Method</Form.Label>
					<Col>
						<Form.Check
							type="radio"
							label="PayPal or Credit Card"
							id="PayPal"
							name="paymentMethod"
							value="PayPal"
							onChange={(e) => setPaymentMethod(e.target.value)}
							checked
							style={{ marginBottom: '1rem' }}
						/>
						<Form.Check
							type="radio"
							label="Stripe or Credit Card"
							id="Stripe"
							name="paymentMethod"
							value="Stripe"
							disabled
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Button
					type="submit"
					variant="primary"
					style={{ width: '100%', marginTop: '1rem' }}>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default PaymentScreen;
