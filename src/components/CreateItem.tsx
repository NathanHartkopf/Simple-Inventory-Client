import React from 'react';
import { Container, Col, Row, Image, FormControl } from 'react-bootstrap';
import styled from 'styled-components'

export function CreateItem(props: any) {

    function IconLoader () {
        let showIcon = false;
        if (showIcon) {
            return (
                <div className="icon">
                    <Image className="icon" src={require("../images/carbon.jpg")} fluid rounded></Image>
                </div>
            ) 
        } else {
            return(
                <div className="iconPlaceholder">
                    <Image className="icon" src={require("../images/placeholder.png")} fluid rounded></Image>
                </div>
            )
        }
    }

    const Nav = styled.nav`
    `
    const StyledContainer = styled(Container)`
    .icon {
        margin: 15px auto 15px auto;
    }
    .iconPlaceholder {
    }
    `
    
    return (
        <>
            <Nav className="navbar navbar-light bg-light">
                <a className="navbar-brand mb-0 h1">Create a New Item</a>
            </Nav>
            <StyledContainer fluid={true}>
                <Row className="justify-content-md-right justify-content-center">
                    <Col xs={6} md={2}>
                        <IconLoader></IconLoader>
                        <FormControl placeholder="Title"></FormControl>
                    </Col>
                </Row>
            </StyledContainer>
        </>
    )
}