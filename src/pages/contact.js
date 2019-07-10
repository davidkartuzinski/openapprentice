import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1
      style={{
        fontSize: "3.157rem",
        lineHeight: "120%",
        padding: "0",
        margin: "0",
        letterSpacing: "-0.3rem",
        textAlign: "left",
        color: "black",
        fontFamily: '"Verdana", sans-serif',
      }}
    >
      Contact
    </h1>
    <h2
      style={{
        color: "grey",
        fontSize: "1.333rem",
        lineHeight: "120%",
        padding: "0",
        margin: "0",
        letterSpacing: "0.2rem",
        paddingLeft: "1em",
        fontFamily: '"Verdana", sans-serif',
      }}
    >
      It's okay. Get in touch
    </h2>
    <div
      style={{
        display: "block",
        margin: "0 auto",
        width: "85%",
        maxWidth: "600",
        minHeight: "415px",
      }}
    >
      <p
        style={{
          padding: "10px 0 10px ",
          fontSize: "1.4rem",
          lineHeight: "2.1rem",
          fontFamily: "Georgia, serif",
        }}
      >
        Problems in the world need solving... OpenApprentice is at once a place
        to truly master and apprentice on real projects, OpenApprentice
        learners, teachers and employment partners "know that they know" and can
        perform at each step of their learning experience. OpenApprentice aims
        to be the standard by which students, employees and employers are
        judged.
      </p>
    </div>
  </Layout>
)

export default ContactPage
