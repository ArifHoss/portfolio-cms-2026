import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <Navigation />
      
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout

