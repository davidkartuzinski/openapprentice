import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ForTeachersPage = () => (
  <Layout>
    <SEO title="For Teachers and Mentors" />
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
      For Teachers and Mentors
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
      Teach for greater and meaningful impact
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
        You give your time to create a teaching platform, a method or
        instruction for others. Sometimes you deliver the impact and help you
        wanted. Mostly, your efforts fell flat. It wasn't your effort. Or what
        you were teaching. It was where and when you taught it.
      </p>
      <p
        style={{
          padding: "10px 0 10px ",
          fontSize: "1.4rem",
          lineHeight: "2.1rem",
          fontFamily: "Georgia, serif",
        }}
      >
        The OpenApprentice system we're implementing fixes that. It takes your
        valuable insights, that you already want to teach others, and places it
        in front of students exactly when they will most benefit from it. They
        should know what you know.
      </p>
    </div>
  </Layout>
)

export default ForTeachersPage
