import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectCard from "../components/ProjectCard"

const ProjectsPage = ({ data }) => {
  const projects = data?.allContentfulProject?.nodes || []

  return (
    <Layout>
      <SEO 
        title="Projects" 
        description="Explore my portfolio of projects showcasing web development, design, and creative solutions."
      />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-50">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="mt-6 text-lg text-dark-300">
              A collection of projects I've worked on, showcasing my skills in 
              web development, design, and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container-custom">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-dark-800 flex items-center justify-center">
                <svg className="w-12 h-12 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-dark-200 mb-2">
                No projects yet
              </h3>
              <p className="text-dark-400">
                Projects will appear here once added to Contentful.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject(sort: { createdAt: DESC }) {
      nodes {
        title
        slug
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

export default ProjectsPage

