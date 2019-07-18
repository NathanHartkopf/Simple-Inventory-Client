import React from 'react';
import './App.css';
import { CardList } from './components/CardList';
import { CreateItem } from './components/CreateItem';
import ItemUtil from './Utility';
import { ITEM } from './types/types';


function Styles() {
    return (
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
        />
    )
}

export default class App extends React.Component<{}, { data: ITEM[]}> {
    constructor(props:any) {
        super(props)
        this.state = {
            data: [undefined]
        }
        this.getAllItems()
        setInterval(() => {
            this.getAllItems()
        }, 1000)
    }

    private getAllItems() {
        ItemUtil.getItem(0).then(request => request.json())
            .then(items => {
                this.setState({
                    data: items
                })
                console.log(items)
            })
    }
    private createItem(item: ITEM) {
        console.log("create", item)
    }
    render () {
        return (
        <>
            <Styles></Styles>
            <CreateItem createItemHandler={this.createItem}></CreateItem>
            <CardList cards={this.state.data}></CardList>
        </>
        )
    }
}


//<CardList cards={this.state.data}></CardList>
