import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownSort = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">인기높은순</Dropdown.Item>
          <Dropdown.Item href="#/action-2">인기낮은순</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownSort;
