import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import { useEffect, useState } from "react"
import { Spin } from "antd"
export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  return !loading ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <Spin />
    </div>
  )
}
