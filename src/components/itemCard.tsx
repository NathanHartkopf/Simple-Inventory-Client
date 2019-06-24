import React from 'react'
import {Badge, Image, Container, Row, Col} from 'react-bootstrap'
import { ItemType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faBoxOpen } from '@fortawesome/free-solid-svg-icons';


//An Item card to be used in lists.
//Displays an icon, item Title, and item Cost
export function ItemCard(props: any) {
    let { title, cost, icon, count, type } = props.cardData

    let typeString = "success"
    let typeIcon
    switch (type) {
        case ItemType.inventory:
            typeString = "success"
            typeIcon = <FontAwesomeIcon icon={faBoxOpen} />
            break
        case ItemType.tool:
            typeString = "warning"
            typeIcon = <FontAwesomeIcon icon={faTools} />
            break
    }
    return (
        <Container fluid={true}>
            <Row>
            <Col xs={4} md={2} lg={1}>
                <div>
                    <Image src={require(`../${icon}`)} fluid rounded>
                    </Image>
                        <Badge className="typeBadge" variant={typeString as any}>{typeIcon}</Badge>
                </div>
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