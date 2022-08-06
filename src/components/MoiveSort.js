import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
export const MoiveSort = ({setSortType}) => {
  const [item,setItem]=useState("Sort Results By")
  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-secondary">
        {item}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('popularity.desc');setItem("Popularity (desc)")}}>Popularity (desc)</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('popularity.asc');setItem("Popularity (asc)")}}>Popularity (asc)</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('release_date.desc');setItem("Release Date (desc)")}}>Release Date (desc)</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('release_date.asc');setItem("Release Date (asc)")}}>Release Date (asc)</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('vote_average.desc');setItem("Vote Average (desc)")}}>Vote Average (desc)</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('vote_average.asc');setItem("Vote Average (asc)")}}>Vote Average (asc)</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('revenue.desc');setItem("Revenue (desc)")}}>Revenue (desc)</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{setSortType('revenue.asc');setItem("Revenue (asc)")}}>Revenue (asc)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  )
}
