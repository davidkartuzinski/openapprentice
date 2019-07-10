import React from "react"
import { Link } from "gatsby"

const Footer = ({ menuLinks }) => (
  <>
    <footer
      style={{
        display: "block",
        margin: `0 auto`,
        width: "95%",
      }}
    >
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              flex: 1,
              flexWrap: "wrap",
              minHeight: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{ listStyleType: "None", paddingBottom: "20px" }}
              >
                <Link
                  style={{
                    color: "#1a1a23",
                    textDecoration: "none",
                    fontFamily: '"Verdana", sans-serif',
                  }}
                  to={link.link}
                >
                  {link.name} <span style={{ padding: "0 20px" }}>|</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontFamily: '"Verdana", sans-serif',
        backgroundColor: "#1a1a23",
        color: "#fff",
        height: 45,
      }}
    >
      © OpenApprentice Foundation {new Date().getFullYear()}, Built with
      {` `}
      <a
        style={{ color: "#fff", textDecoration: "none", paddingLeft: "5px" }}
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
    </div>
  </>
)

export default Footer
