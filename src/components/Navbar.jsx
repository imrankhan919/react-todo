import React from 'react'
import PropTypes from 'prop-types'

function Navbar({logo}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light text-center w-100" href="#">{logo}</a>
  </div>
</nav>
  )
}


Navbar.defaultProps = {
    logo : "Todo List"
}

Navbar.propTypes = {
    logo : PropTypes.string
}


export default Navbar