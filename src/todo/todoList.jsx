import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  markAsDone,
  markAsPending,
  remove
} from './todoActions'

import Grid from '../templates/grid/grid'
import Button from '../templates/button/button'
import './todoList.css'

const todoList =  props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'done' : ''}>{todo.description}</td>
        <td>
          <div className="btn-group" role='group' aria-label='Actions Groups'>
            <Button
              style='success'
              css='btn-lg'
              icon='check'
              hide={ todo.done }
              onClick={ () => props.markAsDone(todo) }
            />
            <Button
              style='warning'
              css='btn-lg'
              icon='undo'
              hide={ !todo.done }
              onClick={ () => props.markAsPending(todo) }
            />
            <Button
              style='danger'
              css='btn-lg'
              icon='trash-o'
              hide={ !todo.done }
              onClick={ () => props.remove(todo) }
            />
          </div>
        </td>
      </tr>
    ))
  }

  return (
    <Grid cols="12 11 11 11">
      <table className='table table-striped'>
        <thead>
          <tr>
            <th width='85%'>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </Grid>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoList)
