import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const MoiveSort = ({setSortType}) => {
  const [item,setItem]=useState("Sort Results By")
  const navigate = useNavigate();
  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-secondary">
        {item}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark" id="dropdown-button-dark-example2">
          <Dropdown.Item id="drop_item"onClick={()=>{navigate(`/movies`);setSortType('popularity.desc');setItem("Popularity");}}>Popularity</Dropdown.Item>
          <Dropdown.Item id="drop_item"onClick={()=>{navigate(`/movies`);setSortType('vote_count.desc');setItem("Vote Count")}}>Vote Count</Dropdown.Item>
          {/* <Dropdown.Item id="drop_item"onClick={()=>{navigate(`/movies`);setSortType('primary_release_date.desc');setItem("Release Date");}}>Release Date</Dropdown.Item> */}
          {/* <Dropdown.Item id="drop_item"onClick={()=>{navigate(`/movies`);setSortType('vote_average.desc');setItem("Vote Average")}}>Vote Average</Dropdown.Item> */}
          {/* <Dropdown.Item id="drop_item"onClick={()=>{navigate(`/movies`);setSortType('original_title.desc');setItem("Revenue")}}>Revenue</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
  )
}
