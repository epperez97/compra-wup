import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import  ListingProducts  from '../components/ListingProducts';
import { products } from '../const/const';

const SellPage = ({props}) => {
    const [cart, setCart] = useState([]);
    const [lenCar, setLenCar] = useState(0);
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState('');

    const numb = '+5353966388';

    
    const sendmsg = () => {
        const rawMessage = `Compra de ${message} por un total de${total}`
        const send = rawMessage.split(' ').join('%20;')  
        return `https://api.whatsapp.com/send?phone=${numb}&text=%20${send}`
    }
    


    const addCart = (item) => {
        let newArr = cart;
        console.log(cart)
        newArr.push(item);
        setLenCar(lenCar+1)
        setTotal(total+item.price)
        let newms = message.concat(`${item.name} por ${item.price} `)
        setMessage(newms)
        const rawMessage = `Compra de ${newms} por un total de${total}`;
        const send = rawMessage.split(' ').join('%20');
        setUrl(`https://api.whatsapp.com/send?phone=${numb}&text=%20${send}`)
        console.log(send)
        setCart(newArr);
   }
   
    return (
        <div>
            <Row>
                <Col>
                    <h1>Productos del Carrito</h1>
                </Col>
                <Col>
                    {lenCar}
                </Col>
                <Col>
                    {total}
                </Col>
            </Row>
            <a href={url} target="_blank" rel="noreferrer noopener">comprar</a>
            <ListingProducts
                items={products}
                addCart={addCart}
            />
        </div>
    )
}
export default SellPage;