import React from "react"
import { Link } from "gatsby"
import {logo} from "../static/assets/logo.png"

const Logo = props => (
  <div className="site-logo">
    <Link to="/">{logo}{" "}{props.title}</Link>
  </div>
)

export default Logo
