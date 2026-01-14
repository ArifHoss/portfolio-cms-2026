const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query all projects from Contentful
  const result = await graphql(`
    query {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create individual project pages
  const projectTemplate = path.resolve(`./src/templates/project.jsx`)
  
  result.data.allContentfulProject.nodes.forEach((node) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: projectTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}

