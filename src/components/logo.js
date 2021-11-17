import React from "react"
import { Link } from "gatsby"
import logo from "../../public/assets/logo.png"

const Logo = props => (
  <div className="site-logo">
    <Link to="/">{logo}{" "}{props.title}</Link>
  </div>
)

export default Logo
