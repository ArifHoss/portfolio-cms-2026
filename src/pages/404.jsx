import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Page Not Found" />

      <section className="section-padding min-h-[80vh] flex items-center justify-center">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto animate-slide-up">
            {/* 404 Number */}
            <div className="relative mb-8">
              <span className="text-[150px] md:text-[200px] font-display font-bold text-dark-800 leading-none select-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-dark-50 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-dark-400 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Projects
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-dark-800">
              <p className="text-dark-500 text-sm mb-4">Or try these pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about" className="text-dark-300 hover:text-primary-500 transition-colors">
                  About
                </Link>
                <span className="text-dark-700">•</span>
                <Link to="/projects" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Projects
                </Link>
                <span className="text-dark-700">•</span>
                <Link to="/contact" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

