
import React from 'react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemContainer from './components/ItemContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer >
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
      </ItemListContainer>
    </div>
  )
}

export default App;