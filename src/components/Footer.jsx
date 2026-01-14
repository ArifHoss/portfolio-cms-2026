import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulContactInfo {
        email
        githubUrl
        twitterUrl
      }
    }
  `)

  const contact = data?.contentfulContactInfo || {}

  return (
    <footer className="bg-dark-900/50 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-bold text-dark-50 hover:text-primary-500 transition-colors"
            >
              Portfolio<span className="text-primary-500">.</span>
            </Link>
            <p className="mt-4 text-dark-400 max-w-xs">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-dark-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-dark-400 hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-dark-400 hover:text-primary-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-dark-400 hover:text-primary-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-dark-400 hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-dark-100 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {contact.githubUrl && (
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-dark-950 transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {contact.twitterUrl && (
                <a
                  href={contact.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-dark-950 transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-dark-950 transition-all"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-800 text-center">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

