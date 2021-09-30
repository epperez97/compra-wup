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


    const addCart = (item, setOrder, order) => {
        let newArr = cart;
        setOrder(order+1);
        console.log(cart);
        setLenCar(lenCar+1);
        let newTotal = total+item.price;
        setTotal(newTotal);
        let newms = message.concat(`${item.name} por ${item.price} `);
        setMessage(newms);
        const rawMessage = `Compra de ${newms} por un total de${newTotal}`;
        const send = rawMessage.split(' ').join('%20');
        setUrl(`https://api.whatsapp.com/send?phone=${numb}&text=%20${send}`);
        console.log(send);
        newArr.push({'item':item , 'order': order});
        setCart(newArr);
   }

   const buildMsg = () => {
       let newMsg = 'Compra de '
       cart.forEach(element => {
           if (element.order > 0){
            newMsg = newMsg
                .concat(`${element.order} ${element.item.name} por ${element.item.price*element.order} `)
           }
        });
       newMsg = newMsg.concat(`por un total de ${total}`)
       console.log(newMsg)
       return `https://api.whatsapp.com/send?phone=${numb}&text=%20${newMsg}`
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
            <a href={buildMsg()} target="_blank" rel="noreferrer noopener">comprar</a>
            <ListingProducts
                items={products}
                addCart={addCart}
            />
        </div>
    )
}
export default SellPage;