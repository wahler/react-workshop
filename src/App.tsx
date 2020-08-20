import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import { BookList } from './components/BookList';
import { BookDetail } from './components/BookDetail';
import { Counter } from './components/Counter';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/counter'>Counter</NavLink>
          </li>
          <li>
            <NavLink to='/books'>Book List</NavLink>
          </li>
        </ul>
      </nav>

      <div className='container'>
        <Switch>
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/books' component={BookList} />
          <Route path='/books/:isbn' component={BookDetail} />

          <Redirect to='/books' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
