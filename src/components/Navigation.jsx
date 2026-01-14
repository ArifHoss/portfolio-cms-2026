import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Query navigation items from Contentful
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allContentfulNavigation(sort: { order: ASC }) {
        nodes {
          label
          path
          order
        }
      }
    }
  `)

  const navItems = data?.allContentfulNavigation?.nodes || []

  // Fallback navigation if Contentful data not available
  const defaultNavItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ]

  const items = navItems.length > 0 ? navItems : defaultNavItems

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/90 backdrop-blur-lg border-b border-dark-800"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl font-bold text-dark-50 hover:text-primary-500 transition-colors"
          >
            Portfolio<span className="text-primary-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {items.map((item, index) => (
              <li key={item.path || index}>
                <Link
                  to={item.path}
                  className="text-dark-300 hover:text-primary-500 font-medium transition-colors relative group"
                  activeClassName="text-primary-500"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-dark-100 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-dark-100 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-dark-100 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {items.map((item, index) => (
              <li key={item.path || index}>
                <Link
                  to={item.path}
                  className="block text-dark-300 hover:text-primary-500 font-medium transition-colors py-2"
                  activeClassName="text-primary-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navigation

