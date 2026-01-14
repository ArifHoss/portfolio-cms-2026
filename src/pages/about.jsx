import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = ({ data }) => {
  const about = data?.contentfulAboutPage
  const profileImage = about?.profileImage ? getImage(about.profileImage) : null

  return (
    <Layout>
      <SEO 
        title="About" 
        description="Learn more about me, my background, skills, and experience."
      />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="animate-slide-up order-2 lg:order-1">
              <div className="relative">
                {profileImage ? (
                  <GatsbyImage
                    image={profileImage}
                    alt={about?.title || "Profile photo"}
                    className="rounded-2xl shadow-2xl shadow-primary-500/10"
                  />
                ) : (
                  <div className="aspect-square bg-dark-800 rounded-2xl flex items-center justify-center">
                    <svg className="w-32 h-32 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-up animation-delay-200 order-1 lg:order-2">
              <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-50">
                {about?.title || "About Me"}
              </h1>
              
              {about?.bio && (
                <div className="mt-6 text-lg text-dark-300 leading-relaxed prose prose-invert max-w-none">
                  {renderRichText(about.bio)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Hidden until skills field has data */}
      {/* Skills will appear here when added to Contentful */}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-50">
              Let's Work Together
            </h2>
            <p className="mt-4 text-dark-400">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="mt-8">
              <a href="/contact" className="btn-primary">
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query AboutPageQuery {
    contentfulAboutPage {
      title
      bio {
        raw
      }
      profileImage {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default AboutPage

