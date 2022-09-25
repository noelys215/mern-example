import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer.component';

const submitHandler = (e) => {
	e.preventDefault();
};

const ShippingScreen = () => {
	const navigate = useNavigate();
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [postal, setPostal] = useState('');
	const [country, setCountry] = useState('');

	return (
		<FormContainer>
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				{/* Address */}
				<Form.Group controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Address"
						value={address}
						required
						onChange={(e) => setAddress(e.target.value)}
					/>
				</Form.Group>
				{/* City */}
				<Form.Group controlId="city">
					<Form.Label>City</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter City"
						value={city}
						required
						onChange={(e) => setCity(e.target.value)}
					/>
				</Form.Group>
				{/* Postal Code */}
				<Form.Group controlId="postal">
					<Form.Label>Postal</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter Postal"
						value={postal}
						required
						onChange={(e) => setPostal(e.target.value)}
					/>
				</Form.Group>
				{/* Country Code */}
				<Form.Group controlId="country">
					<Form.Label>Country</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter Country"
						value={country}
						required
						onChange={(e) => setCountry(e.target.value)}
					/>
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

export default ShippingScreen;
