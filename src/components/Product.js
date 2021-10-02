import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Card, Row, Col, Button, CardImg, CardBody, CardSubtitle } from 'reactstrap'


const Product = ({
    item,
    addCart,
    removeCart
}) => {
    const [order, setOrder] = useState(0);


    return (
        <Col sm="6" lg="4" xl="3" className="mb-3">
                <Card>
                    <div> 
                        <CardImg top alt={item.name} src={item.image} />
                    </div>
                    <CardBody>
                        <Row className="mb-3">
                            <Col>
                                <CardSubtitle>{item.name}</CardSubtitle>
                            </Col>
                            <Col>
                                <CardSubtitle>{item.price}</CardSubtitle>
                            </Col> 
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={() => removeCart(item, setOrder, order)} disabled={!order}>-</Button>
                            </Col>
                            <Col>
                                {order}
                            </Col>
                            <Col>
                                <Button onClick={() => addCart(item, setOrder, order)}>+</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>    
        </Col>
    )
}
export default Product;