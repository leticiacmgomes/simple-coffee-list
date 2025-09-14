import { useState } from 'react'
import axios from 'axios'

import { ListFilter } from './components/ListFilter/ListFilter'
import { CoffeeList } from './components/CoffeList/CoffeeList'

import './App.css'

function App() {

  const [filter, setFilter] = useState('all')

  return (
    <div className="App">
      <h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      <ListFilter filter={filter} setFilter={setFilter}/>
      <CoffeeList filter={filter}/>
    </div>
  )
}

export default App
