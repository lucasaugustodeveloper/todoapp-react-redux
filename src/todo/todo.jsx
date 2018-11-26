import React from 'react'

import PageHeader from '../templates/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
  <div>
    <PageHeader name='Todo' small='cadastro' />
    <div className='row'>
      <TodoForm />
    </div>
    <div className='row todoList'>
      <TodoList />
    </div>
  </div>
)
