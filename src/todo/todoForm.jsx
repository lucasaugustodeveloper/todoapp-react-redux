import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../templates/grid/grid'
import Button from '../templates/button/button'

import {
  changeDescription,
  search
} from './todoActions'

class todoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler() {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
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
                onClick={ this.props.handleAdd }
              />
              <Button
                style='default'
                icon='search'
                css='btn-lg'
                onClick={ this.props.handleSearch }
                />
              <Button
                style='default'
                icon='close'
                css='btn-lg'
                onClick={ this.props.handleClear }
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
  bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoForm)
