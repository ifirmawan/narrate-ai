Here's a GitHub `README.md` template for your Narrate AI project with installation and running instructions for a Next.js 14 app, including required environment variables.

---

```markdown
# Narrate AI

Narrate AI is a demo application designed to generate stories, blogs, or journal entries based on key points or summaries, showcasing the power of Mistral AI for content creation.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Feedback and Contributions](#feedback-and-contributions)

## Features

- Create stories based on summary points.
- Generate polished content quickly using Mistral AI.
- Simple and intuitive UI for easy interaction.
- Integrated Google reCAPTCHA for security.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (version 18 or above)
- **npm** or **yarn**

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ifirmawan/narrate-ai.git
   cd narrate-ai
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Or, using yarn
   yarn install
   ```

## Environment Variables

To run this project, you’ll need to add the following environment variables in a `.env` file at the root of the project:

```plaintext
MISTRAL_API_KEY=your_mistral_api_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
GOOGLE_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

These keys are necessary for connecting to the Mistral AI API and securing the application with Google reCAPTCHA.

## Running the App

Once you have installed the dependencies and set up the environment variables, you can start the application:

```bash
# Using npm
npm run dev

# Or, using yarn
yarn dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

## Feedback and Contributions

We’d love to hear your feedback! If you encounter any issues or have suggestions for improvements, please [create an issue](https://github.com/ifirmawan/narrate-ai/issues) on GitHub.

---

© 2024 Narrate AI. Built by Iwan Firmawan.
```

---

This template is a solid starting point for users to understand the project, set it up, and get it running quickly. Let me know if there’s anything else you’d like to add!
