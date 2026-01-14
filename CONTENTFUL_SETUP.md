# Contentful Setup Guide

Follow these steps to set up your Contentful space for this portfolio website.

## 1. Create a Contentful Account & Space

1. Go to [Contentful](https://www.contentful.com/) and create a free account
2. Create a new space (e.g., "Portfolio")
3. Go to **Settings > API keys** and create a new API key
4. Copy the **Space ID** and **Content Delivery API - access token**

## 2. Configure Environment Variables

Create `.env.development` and `.env.production` files in the project root:

```
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

## 3. Create Content Types

Go to **Content model** in Contentful and create the following content types:

### Content Type 1: HomePage

| Field Name | Field ID | Type | Required |
|------------|----------|------|----------|
| Title | title | Short text | Yes |
| Presentation Text | presentationText | Rich text | Yes |
| Hero Image | heroImage | Media (single) | Yes |
| SEO Description | seoDescription | Long text | No |

### Content Type 2: Project

| Field Name | Field ID | Type | Required |
|------------|----------|------|----------|
| Title | title | Short text | Yes |
| Slug | slug | Short text | Yes (unique) |
| Description | description | Rich text | Yes |
| Image | image | Media (single) | Yes |
| Project URL | projectUrl | Short text | No |
| Technologies | technologies | Short text (list) | No |
| Featured | featured | Boolean | No |

### Content Type 3: AboutPage

| Field Name | Field ID | Type | Required |
|------------|----------|------|----------|
| Title | title | Short text | Yes |
| Bio | bio | Rich text | Yes |
| Profile Image | profileImage | Media (single) | Yes |
| Skills | skills | Short text (list) | No |

### Content Type 4: ContactInfo

| Field Name | Field ID | Type | Required |
|------------|----------|------|----------|
| Email | email | Short text | Yes |
| GitHub URL | githubUrl | Short text | No |
| LinkedIn URL | linkedinUrl | Short text | No |
| Twitter URL | twitterUrl | Short text | No |
| Additional Links | additionalLinks | JSON object | No |

### Content Type 5: Navigation

| Field Name | Field ID | Type | Required |
|------------|----------|------|----------|
| Label | label | Short text | Yes |
| Path | path | Short text | Yes |
| Order | order | Integer | Yes |

## 4. Create Sample Content

### Navigation Items (create 5 entries)

1. Label: "Home", Path: "/", Order: 1
2. Label: "Projects", Path: "/projects", Order: 2
3. Label: "About", Path: "/about", Order: 3
4. Label: "Contact", Path: "/contact", Order: 4

### HomePage (create 1 entry)

- Title: "Hi, I'm [Your Name]"
- Presentation Text: Your introduction text
- Hero Image: Upload a hero image
- SEO Description: A brief description for search engines

### AboutPage (create 1 entry)

- Title: "About Me"
- Bio: Your biography
- Profile Image: Upload your profile photo
- Skills: ["JavaScript", "React", "Node.js", "CSS", "Git"]

### ContactInfo (create 1 entry)

- Email: your.email@example.com
- GitHub URL: https://github.com/yourusername
- LinkedIn URL: https://linkedin.com/in/yourusername
- Twitter URL: https://twitter.com/yourusername

### Projects (create at least 5 entries)

Example project:
- Title: "E-Commerce Platform"
- Slug: "e-commerce-platform"
- Description: Description of your project
- Image: Upload a project screenshot
- Project URL: https://example.com
- Technologies: ["React", "Node.js", "MongoDB"]
- Featured: true

## 5. Publish All Content

Make sure to click "Publish" on each content entry after creating it.

## 6. Set Up Webhook for Auto-Deploy (Netlify)

1. In Contentful, go to **Settings > Webhooks**
2. Click "Add Webhook"
3. Name: "Netlify Deploy"
4. URL: Your Netlify build hook URL (get this from Netlify)
5. Triggers: Select "Publish" and "Unpublish" for Entry
6. Save the webhook

Now whenever you publish or update content in Contentful, your site will automatically rebuild on Netlify!

