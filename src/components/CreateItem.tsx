import React from 'react';
import { Container, Col, Row, Image, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components'
import * as exif from 'exif-parser'

//UI for creating a new item
//Title, Description, and Icon
//

type createItemState = {
    icon: string
    title: string
    description: string
    creating: boolean
    created: boolean
}

const Uploader = styled.div`
    input[type="file"] {
        display: none;
    }
    .custom-icon-upload {
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
    i {
        position: relative;
        top: -90px;
        left: 40px
    }
    `
const Icon = styled(Image)`
    margin: 15px auto 15px auto;
    `

export class CreateItem extends React.Component<{ createItemHandler: Function}, createItemState> {
    private createItemHandler: Function
    constructor (props: any) {
        super(props)

        this.state = {
            icon: "placeholder.png",
            title: "",
            description: "",
            creating: false,
            created: false
        }
        this.createItemHandler = props.createItemHandler
    }
    titleHandler = (e: any) => {
        this.setState({
            title: e.target.value
        })
    }
    uploadIcon = (files: FileList | null) => {
        console.log("upload", files)
        let file = files ? files[0] : undefined
        let reader = new FileReader()
        let prev: any = document.getElementsByClassName("icon")[0]

        reader.onloadend = () => {
            prev.src = reader.result
            const ex = exif.create(reader.result)
            console.log(ex.parse())
        }

        if (file) {
            reader.readAsDataURL(file)
        } else {
            prev.src = ""
        }
    }
    render() {
        console.log("render")
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <a href="/" className="navbar-brand mb-0 h1">Create a New Item</a>
                </nav>
                <Container fluid={true}>
                    <Row className="justify-content-md-right justify-content-center">
                        <Col xs={6} md={2}>
                            <Uploader className="uploader">
                                <label htmlFor="icon-upload" className="custom-icon-upload">
                                    <Icon className="icon" src={require(`../images/${this.state.icon}`)} fluid rounded></Icon>
                                    <i>Add Icon</i>
                                </label>
                                <input onChange={e => this.uploadIcon(e.target.files)} id="icon-upload" type="file" />      
                            </Uploader>
                            <FormControl key="1" type="text" value={this.state.title} placeholder="Title" onChange={ (e:any) => this.titleHandler(e)}></FormControl>
                            <FormControl key="2" type="text" placeholder="Description"></FormControl>
                            <FormControl key="2" type="text" placeholder="Count"></FormControl>
                            <FormControl key="2" type="text" placeholder="Dimensions"></FormControl>
                            <FormControl key="2" type="text" placeholder="cost"></FormControl>
                            <FormControl key="2" type="text" placeholder="icon"></FormControl>
                            <FormControl key="2" type="text" placeholder="type"></FormControl>
                            <Button onClick={(e: React.MouseEvent) => this.createItemHandler(e)}>Create Item</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}