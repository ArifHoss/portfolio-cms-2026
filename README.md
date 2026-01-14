# Portfolio Website with Gatsby + Contentful

A modern, responsive portfolio website built with Gatsby (SSG), Contentful CMS, and Tailwind CSS.

## Features

- **Static Site Generation (SSG)** - Fast, SEO-friendly pages generated at build time
- **Headless CMS** - Content managed through Contentful
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Image Optimization** - Automatic WebP/AVIF conversion with lazy loading
- **SEO Optimized** - Meta tags, Open Graph, sitemap
- **Dynamic Navigation** - Navigation links from CMS
- **Auto-Deploy** - Automatic rebuilds on content changes

## Tech Stack

- **Framework:** Gatsby 5
- **CMS:** Contentful
- **Styling:** Tailwind CSS
- **Hosting:** Netlify
- **Language:** JavaScript/React

## Pages

- `/` - Home page with hero section and featured projects
- `/projects` - Projects overview with all portfolio items
- `/projects/[slug]` - Individual project pages (dynamically generated)
- `/about` - About page with bio and skills
- `/contact` - Contact information and social links
- `/404` - Custom 404 error page

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Contentful account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-cms-2026
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Contentful:
   - Follow the instructions in `CONTENTFUL_SETUP.md`
   - Create the required content types
   - Add sample content

4. Configure environment variables:
   - Copy `.env.example` to `.env.development` and `.env.production`
   - Add your Contentful Space ID and Access Token:
     ```
     CONTENTFUL_SPACE_ID=your_space_id
     CONTENTFUL_ACCESS_TOKEN=your_access_token
     ```

5. Start the development server:
   ```bash
   npm run develop
   ```

6. Open [http://localhost:8000](http://localhost:8000) in your browser

### Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clear Gatsby cache

## Deployment to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and create a new site
3. Connect your GitHub repository
4. Add environment variables in Netlify:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
5. Deploy!

### Option 2: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Set Up Auto-Deploy on Content Changes

1. In Netlify, go to **Site settings > Build & deploy > Build hooks**
2. Create a new build hook (e.g., "Contentful Update")
3. Copy the webhook URL
4. In Contentful, go to **Settings > Webhooks**
5. Create a new webhook with the Netlify URL
6. Set triggers to "Publish" and "Unpublish" for Entry

Now your site will automatically rebuild when you publish content in Contentful!

## Content Types in Contentful

| Content Type | Description |
|--------------|-------------|
| HomePage | Home page content (title, text, hero image) |
| Project | Portfolio projects (min 5 required) |
| AboutPage | About page content |
| ContactInfo | Contact information and social links |
| Navigation | Navigation menu items |

See `CONTENTFUL_SETUP.md` for detailed field specifications.

## Project Structure

```
portfolio-cms-2026/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components
│   ├── templates/        # Dynamic page templates
│   └── styles/           # Global CSS styles
├── gatsby-config.js      # Gatsby plugins and configuration
├── gatsby-node.js        # Dynamic page generation
├── tailwind.config.js    # Tailwind CSS configuration
└── netlify.toml          # Netlify deployment configuration
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Built with ❤️ for the portfolio assignment.

