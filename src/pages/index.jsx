import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectCard from "../components/ProjectCard"

const HomePage = ({ data }) => {
  const home = data?.contentfulHomePage
  const featuredProjects = data?.allContentfulProject?.nodes || []
  const heroImage = home?.heroImage ? getImage(home.heroImage) : null

  return (
    <Layout>
      <SEO 
        title="Home" 
        description={home?.seoDescription || "Welcome to my portfolio"} 
      />
      
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-50 leading-tight">
                {home?.title || "Hi, I'm a Developer"}
              </h1>
              {home?.presentationText && (
                <div className="mt-6 text-lg text-dark-300 leading-relaxed prose prose-invert max-w-none">
                  {renderRichText(home.presentationText)}
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/projects" className="btn-primary">
                  View My Work
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slide-up animation-delay-200 relative">
              <div className="relative z-10">
                {heroImage ? (
                  <GatsbyImage
                    image={heroImage}
                    alt={home?.title || "Hero image"}
                    className="rounded-2xl shadow-2xl shadow-primary-500/10"
                  />
                ) : (
                  <div className="aspect-square bg-dark-800 rounded-2xl flex items-center justify-center">
                    <svg className="w-24 h-24 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-2xl -z-0" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="section-padding bg-dark-900/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-50">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="mt-4 text-dark-400 max-w-2xl mx-auto">
                A selection of my recent work showcasing various technologies and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/projects" className="btn-secondary">
                View All Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    contentfulHomePage {
      title
      presentationText {
        raw
      }
      heroImage {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      seoDescription
    }
    allContentfulProject(
      filter: { featured: { eq: true } }
      sort: { createdAt: DESC }
      limit: 3
    ) {
      nodes {
        title
        slug
        technologies
        featured
        image {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`

export default HomePage

