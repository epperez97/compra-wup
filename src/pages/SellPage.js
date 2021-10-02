import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import  ListingProducts  from '../components/ListingProducts';
import { products } from '../const/const';
import Header from '../components/Header';


const SellPage = ({props}) => {
    const [cart, setCart] = useState([]);
    const [lenCar, setLenCar] = useState(0);
    const [total, setTotal] = useState(0);

    const numb = '+5353966388';

    const removeCart = (item, setOrder, order) => {
        let newArr = cart;
        if(order > 0){
            setOrder(order-1);
            setLenCar(lenCar-1);
            setTotal(total-item.price);
            newArr = cart.splice(cart.indexOf(item),1);
            setCart(newArr);
        }
    }

    const addCart = (item, setOrder, order) => {
        let newArr = cart;
        setOrder(order+1);
        console.log(cart);
        setLenCar(lenCar+1);
        let newTotal = total+item.price;
        setTotal(newTotal);
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
            <Header lenCar={lenCar} total={total} buildMsg={buildMsg}/>
            <Row className="mt-3">
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
            <div>
                <ListingProducts
                    items={products}
                    addCart={addCart}
                    removeCart={removeCart}
                />
            </div>
        </div>
    )
}
export default SellPage;