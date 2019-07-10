import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ForStudentsPage = () => (
  <Layout>
    <SEO title="For Students" />
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
      For Students
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
      Acquire competence for real life
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
        What matters most is the knowledge you can learn what you need as it's
        needed. Competence then is related to ones ability to learn. Your
        ability to learn is connected to your ability to communicate.
      </p>
      <p
        style={{
          padding: "10px 0 10px ",
          fontSize: "1.4rem",
          lineHeight: "2.1rem",
          fontFamily: "Georgia, serif",
        }}
      >
        The OpenApprentice system will get you there. You will be confident of
        your skills and what you can do - each step of the way. And with this
        you walk your own path forward.
      </p>
    </div>
  </Layout>
)

export default ForStudentsPage
