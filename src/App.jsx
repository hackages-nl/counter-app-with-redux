import React, { Suspense } from 'react'
import './App.css'
// import { Counter } from './components/Counter'
// import { TodoApp } from './components/TodoApp'
import {BrowserRouter as Routes, Route, Switch, NavLink} from 'react-router-dom'

const Counter = React.lazy(() => import('./components/Counter'))
const TodoApp = React.lazy(() => import('./components/TodoApp'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={() => 'App is loading....'}>
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
      </Suspense>
    </div>
  )
}

export default App
