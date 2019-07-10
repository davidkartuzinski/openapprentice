import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ForEmployersPage = () => (
  <Layout>
    <SEO title="For Employers" />
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
      For Employers
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
      Hire with greater certainty
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
        We apprentice them. You hire them. We do it Open Source style. The
        difference betweeen what we're doing and others is you can hire people
        who have worked on the exact track you choose for your business needs -
        and you can supervise their learning each step of the way.
      </p>
      <p
        style={{
          padding: "10px 0 10px ",
          fontSize: "1.4rem",
          lineHeight: "2.1rem",
          fontFamily: "Georgia, serif",
        }}
      >
        More importantly, your existing employees can further develop on
        expanding their core competencies and general knowledge making their
        contributions to your business greater.
      </p>
    </div>
  </Layout>
)

export default ForEmployersPage
