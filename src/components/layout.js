/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <main
      style={{
        display: "flex",
        minHeight: "102vh",
        flexDirection: "column",
      }}
    >
      <article style={{ flex: "1" }}>
        <Header />
        <div
          style={{
            display: "block",
            margin: `0 auto`,
            width: "85%",
            maxWidth: 700,
          }}
        >
          {children}
        </div>
      </article>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
