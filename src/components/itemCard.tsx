import React from 'react'
import { ITEM_TYPE, ITEM } from '../types/types';
import {Badge, Image, Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

//An Item card to display item information and icon.
export function ItemCard(props: {cardData: ITEM}) {
    let { title, cost, icon, count, type } = props.cardData

    let typeString = "success"
    let typeIcon
    switch (type) {
        case ITEM_TYPE.inventory:
            typeString = "success"
            typeIcon = <FontAwesomeIcon icon={faBoxOpen} />
            break
        case ITEM_TYPE.tool:
            typeString = "warning"
            typeIcon = <FontAwesomeIcon icon={faTools} />
            break
    }
    return (
        <Container fluid={true}>
            <Row>
            <Col xs={4} md={2} lg={1}>
                <div>
                    <Image src={require(`../images/${icon}`)} fluid rounded>
                    </Image>
                        <Badge className="typeBadge" variant={typeString as any}>{typeIcon}</Badge>
                </div>
            </Col>
            <Col xs={8} md={10} lg={11}>
                <span className="itemCardTitle">{title}</span>
                <div className="badges">
                    <Badge variant="primary">{cost.cost}</Badge>&nbsp;
                    <Badge variant="info">In Stock: {count}</Badge>
                </div>
            </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}