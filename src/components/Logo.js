import React from "react"
import logo from "./openapprenticelogo.png"

const Logo = () => {
  return (
    <div
      style={{
        display: "block",
        width: "85%",
        margin: "0 auto",
        textAlign: "left",
        marginBottom: 0,
      }}
    >
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  )
}

export default Logo
