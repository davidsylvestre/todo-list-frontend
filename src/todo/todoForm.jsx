import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => (
  <div>
    <div role="form" className="todoForm">
      <Grid cols='12 9 10'>
        <input
          id="description"
          type="text"
          className="form-control"
          onChange={props.handleChange}
          value={props.description}/>
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary"
          icon="plus"
          show={true}
          onClick={props.handleAdd}></IconButton>
      </Grid>
    </div>
  </div>
)
