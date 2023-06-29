import React, { createContext, useState } from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"


export const HasBannerContext = createContext({} as any)

export default function Layout({ children }: any) {
  const [hasBanner, setHasBanner] = useState(true)

  return (
    <HasBannerContext.Provider value={{ hasBanner, setHasBanner }}>
      <div style={{ width: "100%" }}>
        <Header />
        <Footer />
        
      </div>
    </HasBannerContext.Provider>
  )
}


// First comment