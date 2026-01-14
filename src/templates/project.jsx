import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

// Rich text rendering options
const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-4 text-dark-300 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-display font-bold text-dark-50 mt-8 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl font-display font-semibold text-dark-100 mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside mb-4 text-dark-300 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside mb-4 text-dark-300 space-y-2">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-dark-400">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 hover:text-primary-400 underline"
      >
        {children}
      </a>
    ),
  },
}

const ProjectTemplate = ({ data }) => {
  const project = data?.contentfulProject
  const image = project?.image ? getImage(project.image) : null

  if (!project) {
    return (
      <Layout>
        <SEO title="Project Not Found" />
        <div className="section-padding min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-dark-100">Project not found</h1>
            <Link to="/projects" className="btn-primary mt-6 inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO 
        title={project.title} 
        description={project.description?.raw ? "View project details" : ""}
        article
      />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Back link */}
          <Link 
            to="/projects" 
            className="inline-flex items-center text-dark-400 hover:text-primary-500 transition-colors mb-8 group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="animate-slide-up">
              <div className="relative">
                {image ? (
                  <GatsbyImage
                    image={image}
                    alt={project.title}
                    className="rounded-2xl shadow-2xl shadow-primary-500/10"
                  />
                ) : (
                  <div className="aspect-video bg-dark-800 rounded-2xl flex items-center justify-center">
                    <svg className="w-24 h-24 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-dark-950 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-up animation-delay-200">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-50">
                {project.title}
              </h1>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-dark-800 text-dark-300 text-sm rounded-lg border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Project URL */}
              {project.projectUrl && (
                <div className="mt-8">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Live Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      {project.description && (
        <section className="pb-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-display font-bold text-dark-50 mb-6">
                About This Project
              </h2>
              <div className="prose prose-invert max-w-none">
                {renderRichText(project.description, richTextOptions)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="flex justify-between items-center pt-8 border-t border-dark-800">
            <Link 
              to="/projects" 
              className="text-dark-400 hover:text-primary-500 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Projects
            </Link>
            <Link 
              to="/contact" 
              className="text-dark-400 hover:text-primary-500 transition-colors flex items-center gap-2"
            >
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      description {
        raw
      }
      image {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      projectUrl
      technologies
      featured
    }
  }
`

export default ProjectTemplate

