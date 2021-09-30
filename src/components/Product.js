import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Card, Row, Col, Button } from 'reactstrap'

const Product = ({
    item,
    addCart,
}) => {
    const [order, setOrder] = useState(0);

    return (
        <div>
            <Card className="mt-2">
                <Row>
                    <Col>
                        {item.name}
                    </Col>
                    <Col>
                        {item.price}
                    </Col> 
                    <Col>
                        <Button onClick={() => addCart(item, setOrder, order)}>Add Cart</Button>
                    </Col>
                    <Col>
                        {order}
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
export default Product;