import { useState } from 'react';
import { Button } from 'react-bootstrap';
export default function BadgerSaleItem(props) {
    const [quantity, setQuantity] = useState(0);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    };

    const itemStyle = {
        backgroundColor: props.featured ? '#f5deb3' : 'transparent',
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        padding: '20px', 
    };

    return <div style={itemStyle}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{'$' + props.price}</p>
        <div>
            <Button 
                className="inline"
                onClick={decreaseQuantity}
                disabled={quantity <= 0}
            >-</Button>
            <p className="inline">{quantity}</p>
            <Button 
                className="inline"
                onClick={increaseQuantity}
            >+</Button>
        </div>
    </div>
}