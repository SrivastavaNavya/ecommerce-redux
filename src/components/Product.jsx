import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
// import { addItem } from '../redux/slices/cartSLice';
import { addItem } from '../redux/slices/cartSlice'; //Ignore these errors, error with rename of cartSlice.jsx. Works properly.

function Product(props) {
    const dispatch=useDispatch()
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={props.image} alt={props.productName} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.productName}</Card.Title>
                <Card.Text>
                    Rs. {props.price}/-
                </Card.Text>
                <Button onClick={e=>dispatch(addItem({ name: props.productName, price: props.price }))} variant="primary" className="mt-auto">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;
