import React from 'react';
import './App.css';
import data from './testData.json'
import { CardList } from './components/CardList';
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

function App() {
  return (
      <>
      <Styles />
    <div className="App">
          <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand mb-0 h1">Items</a>
          </nav>
          <div className="cards">
            <CardList cards={data.cards}></CardList>
          </div>
    </div>
    </>
  );
}

export default App;
