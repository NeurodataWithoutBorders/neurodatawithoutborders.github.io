---
title: "Contributing to This Website"
description: "Guide for contributing to the NWB website through GitHub"
---

This guide provides instructions for contributing to the NWB website. Whether you want to fix a typo, add new content, or improve existing pages, we welcome your contributions!

## Overview

The NWB website is hosted on GitHub at [NeurodataWithoutBorders/neurodatawithoutborders.github.io](https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io). The site is built using [Hugo](https://gohugo.io/), a fast and flexible static site generator.

## Quick Edits (For Small Changes)

For minor edits like fixing typos or updating text, you can edit files directly on GitHub:

1. Navigate to the [repository](https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io)
2. Find the file you want to edit in the `content/` directory
3. Click the pencil icon (✏️) to edit the file
4. Make your changes
5. Scroll down and create a commit message describing your change
6. Select "Create a new branch for this commit and start a pull request"
7. Submit the pull request

## Local Development (For Larger Changes)

For more substantial contributions, we recommend setting up the site locally.

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Hugo](https://gohugo.io/installation/) (extended version recommended)
- [Node.js](https://nodejs.org/) (for asset processing)

### Step 1: Fork and Clone the Repository

1. Fork the repository by clicking the "Fork" button at [https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io](https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io)

2. Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/neurodatawithoutborders.github.io.git
cd neurodatawithoutborders.github.io
```

3. Add the upstream remote:

```bash
git remote add upstream https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io.git
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Development Server

```bash
hugo server -D
```

This will start a local server at `http://localhost:1313/`. The site will automatically reload when you make changes.

### Step 4: Make Your Changes

Create a new branch for your changes:

```bash
git checkout -b my-feature-branch
```

Make your edits to the relevant files in the `content/` directory.

### Step 5: Submit a Pull Request

1. Commit your changes:

```bash
git add .
git commit -m "Description of your changes"
```

2. Push to your fork:

```bash
git push origin my-feature-branch
```

3. Go to the [original repository](https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io) and click "New Pull Request"

4. Select your branch and submit the pull request with a clear description of your changes

## Content Structure

The website content is organized in the `content/` directory:

| Directory | Description |
|-----------|-------------|
| `content/about-nwb/` | Information about NWB |
| `content/events/` | Event pages and announcements |
| `content/news/` | News articles and updates |
| `content/tools/` | Software tools (core and community) |
| `content/publications/` | Publications, papers, and citations |
| `content/faq/` | Frequently asked questions |
| `content/community/` | Community resources |

## Adding New Content

### Adding a News Post

Create a new markdown file in `content/news/`:

```markdown
---
title: "Your News Title"
date: 2025-01-15
---

Your news content here...
```

### Adding an Event

Create a new markdown file in `content/events/`:

```markdown
---
title: "Event Name"
date: 2025-01-15
event_date: "January 20-22, 2025"
location: "Location Name"
---

Event description and details...
```

### Adding a Community Tool

See our dedicated guide: [Integrating Community Software with NWB](/contributing-tools/)

## Page Format

Most pages use Markdown with YAML front matter. The front matter includes metadata like:

```yaml
---
title: "Page Title"
description: "Brief description of the page"
weight: 1  # Optional: controls ordering in lists
---
```

## Style Guidelines

- Use clear, concise language
- Follow existing formatting conventions
- Include links to relevant resources
- Add images to `static/images/` and reference them in your content
- Test all links before submitting

## Getting Help

If you have questions or need assistance:

- Open an issue on [GitHub](https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io/issues)
- Visit the [NWB Help Desk](https://github.com/NeurodataWithoutBorders/helpdesk/discussions)
- Join the [NWB Slack workspace](https://nwb-users.slack.com/)
- Contact us through the [Contact Us](/contact-us/) page

## Code of Conduct

All contributors are expected to follow our [Code of Conduct](/code_of_conduct/).

Thank you for helping improve the NWB website!
