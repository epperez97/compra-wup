import React from 'react'
import { Card, Row, Col, Button } from 'reactstrap'

const Product = ({
    item,
    addCart,
}) => {
    

    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        {item.name}
                    </Col>
                    <Col>
                        {item.price}
                    </Col> 
                    <Col>
                        <Button onClick={() => addCart(item)}>Add Cart</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
export default Product;