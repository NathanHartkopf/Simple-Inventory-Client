import React from 'react'
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function PlaceholderCard() {
    let typeString = "success"
    let typeIcon = <FontAwesomeIcon icon={faBoxOpen} />
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={4} md={2} lg={1}>
                    <div>
                        <Image src={require(`../images/placeholder.png`)} fluid rounded>
                        </Image>
                        <Badge className="typeBadge" variant={typeString as any}>{typeIcon}</Badge>
                    </div>
                </Col>
                <Col xs={8} md={10} lg={11}>
                    <span className="itemCardTitle">Loading Items...</span>
                    <div className="badges">
                        <Badge variant="primary">$0</Badge>&nbsp;
                    <Badge variant="info">In Stock: 0</Badge>
                    </div>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}