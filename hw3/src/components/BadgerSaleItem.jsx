import { useState } from 'react';
export default function BadgerSaleItem(props) {
    const [quantity, setQuantity] = useState(0);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    };

    const itemStyle = {
        backgroundColor: props.featured ? 'red' : 'transparent', // 根据 featured 属性更改背景颜色
    };

    return <div style={itemStyle}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{'$' + props.price}</p>
        <div>
            <button 
                className="inline"
                onClick={decreaseQuantity}
                disabled={quantity <= 0}
            >-</button>
            <p className="inline">{quantity}</p>
            <button 
                className="inline"
                onClick={increaseQuantity}
            >+</button>
        </div>
    </div>
}