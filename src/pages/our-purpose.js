import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OurPurposePage = () => (
  <Layout>
    <SEO title="Our Purpose" />
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
      Our Purpose
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
      Our Purpose - To solve getting the job done
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
        Who solves problems? People. Who hires people? Other people. We noticed
        the complexity, confusion and weirdness of the relationship between both
        these peoples. Our purpose is to deliver certainty of what to expect.
        Simple.
      </p>
      <p
        style={{
          padding: "10px 0 10px ",
          fontSize: "1.4rem",
          lineHeight: "2.1rem",
          fontFamily: "Georgia, serif",
        }}
      >
        We want the job to get job. There is a lot of worthy, profitable and
        necessary work to accomplish. Remove the biases, prejudices, false
        assertions and politics and we believe everyone in this industry will
        benefit.
      </p>
    </div>
  </Layout>
)

export default OurPurposePage
