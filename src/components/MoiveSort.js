import React from 'react'
import { Dropdown } from 'react-bootstrap';
export const MoiveSort = ({setSortType}) => {
  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="danger">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item onClick={()=>setSortType('popularity.desc')}>popularity.desc</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSortType('popularity.asc')}>popularity.asc</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSortType('release_date.desc')}>release_date.desc</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSortType('release_date.asc')}>release_date.asc</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSortType('vote_average.desc')}>vote_average.desc</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSortType('vote_average.asc')}>vote_average.asc</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSortType('revenue.desc')}>revenue.desc</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSortType('revenue.asc')}>revenue.asc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

  )
}
