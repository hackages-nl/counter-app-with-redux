import React from 'react'
import './App.css'
import { Counter } from './components/Counter'
import {BrowserRouter as Routes, Route, Switch, NavLink} from 'react-router-dom'
import { TodoApp } from './components/TodoApp'


function App() {
  return (
    <div className="App">
      
      <Routes>
        <nav>
          <NavLink to='/todo'>Todo App</NavLink>
          <NavLink to='/counter'>Counter App</NavLink>
        </nav>
        <Switch>
          <Route path='/counter'>
            <Counter/>
          </Route>
          <Route path='/todo'>
            <TodoApp/>
          </Route>
        </Switch>
      </Routes>
    </div>
  )
}

export default App
