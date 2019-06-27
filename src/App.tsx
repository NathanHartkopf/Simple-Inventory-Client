import React from 'react';
import './App.css';
import { CardList } from './components/CardList';
import { CreateItem } from './components/CreateItem';
import { ServerConnect } from './Utility';
import { ITEM, Unit } from './types/types';


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

new ServerConnect()

const data: ITEM[] = [{
        ID: 1,
        type: 0,
        title : "test",
        "description": "",
        count: 100,
        "dimensions": { unit: Unit.millimeter},
        "cost": { cost: 100},
        icon: 'carbon.jpg'
}]
 

function App() {
  return (
    <>
        <Styles></Styles>
        <div className="App">
            <CreateItem></CreateItem>
            <hr></hr>
            <CardList cards={data}></CardList>
        </div>
    </>
  );
}

export default App;
