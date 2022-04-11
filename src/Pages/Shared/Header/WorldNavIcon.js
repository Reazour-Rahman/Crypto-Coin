/* import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { render } from "react-dom";

import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineLanguage } from 'react-icons/md';

 */

import React from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineLanguage } from 'react-icons/md';
import { Dropdown } from "react-bootstrap";
import './Header.scss'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
    style={{paddingRight:"0px"}}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <RiArrowDropDownLine className="dropDown-icon"/>
    </a>
  ));

const WorldNavIcon = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} variant="link" id="dropdown-basic" style={{padding:"0px", display:"inline"}}>
          <MdOutlineLanguage className="world-icon"/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item >Bengal</Dropdown.Item>
          <Dropdown.Item >Hindi</Dropdown.Item>
          <Dropdown.Item >English</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default WorldNavIcon;
