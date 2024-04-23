import React from 'react'
import '/src/App.css'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <ul>

          <li>{props.title}</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'ayyan nakai'
}
// setting proptypes here 
// props can be strings, numbers , objects etc
// if no prop is set in App.jsx it will render default props
