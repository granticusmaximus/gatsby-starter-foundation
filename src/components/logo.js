import React from "react"
import { Link } from "gatsby"
import logo from "../../static/assets/logo.png"

const Logo = props => (
  <div className="site-logo">
    <Link to="/"><img src={logo} style="max-width: 70px; max-height:70px;"/> &nbsp; {props.title}</Link>
  </div>
)

export default Logo
