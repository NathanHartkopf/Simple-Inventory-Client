import React from 'react'
import {Badge, Image, Container, Row, Col} from 'react-bootstrap'

//An Item card to be used in lists.
//Displays an icon, item Title, and item Cost
export function ItemCard(props: any) {
    let { title, cost, icon, count } = props
    return (
        <Container fluid={true}>
            <Row>
            <Col xs={4} md={2} lg={1}>
                <Image src={require(`../${icon}`)} fluid rounded></Image>
            </Col>
            <Col xs={8} md={10} lg={11}>
                <span className="itemCardTitle">{title}</span>
                <div className="badges">
                    <Badge variant="primary">{cost}</Badge>&nbsp;
                    <Badge variant="info">In Stock: {count}</Badge>
                </div>
            </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}