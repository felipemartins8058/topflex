import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import "../styles/global.css"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Topflex</title>
          <link rel="canonical" href="https://topflexoffice.com.br" />
        </Helmet>
      </div>
    )
  }
}

const IndexPage = () => {
  return (
    <main>
      <Layout/>
    </main>
  )
}

export default IndexPage
