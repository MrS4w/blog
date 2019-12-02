import PropTypes from "prop-types"
import React from "react"

import Profile from "./Profile"

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Profile></Profile>
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
