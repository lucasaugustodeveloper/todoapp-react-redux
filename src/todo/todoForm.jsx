import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../templates/grid/grid'
import Button from '../templates/button/button'

import {
  changeDescription,
  search,
  add,
  clear,
} from './todoActions'

class todoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, clear, search, description } = this.props

    if (e.key === 'Enter') {
      e.shiftKey ? search(description) : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, description } = this.props

    return (
      <div className='todoForm'>
        <div className='todoForm_task row' role='form'>
          <Grid cols='12 10 9 6'>
            <input
              type='text'
              id='description'
              className='form-control input-lg'
              placeholder='Adicione uma tarefa'
              value={ this.props.description }
              onChange={ this.props.changeDescription }
              onKeyUp={ this.keyHandler }
            />
          </Grid>
          <Grid cols='12 3 3 2'>
            <div className="btn-group">
              <Button 
                style='primary'
                icon='plus'
                css='btn-lg'
                onClick={ () => add(description) }
              />
              <Button
                style='default'
                icon='search'
                css='btn-lg'
                onClick={ () => search(description) }
                />
              <Button
                style='default'
                icon='close'
                css='btn-lg'
                onClick={ this.props.clear }
                />
            </div>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoForm)
