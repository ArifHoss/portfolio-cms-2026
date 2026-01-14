import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({ project, index = 0 }) => {
  const image = getImage(project.image)
  
  return (
    <article 
      className={`card group animate-slide-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/projects/${project.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          {image ? (
            <GatsbyImage
              image={image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-dark-800 flex items-center justify-center">
              <svg className="w-12 h-12 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary-500 text-dark-950 text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-semibold text-dark-50 group-hover:text-primary-500 transition-colors">
            {project.title}
          </h3>
          
          {/* Technologies - will appear when added to Contentful */}

          {/* Arrow indicator */}
          <div className="mt-4 flex items-center text-primary-500 font-medium">
            <span>View Project</span>
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProjectCard

