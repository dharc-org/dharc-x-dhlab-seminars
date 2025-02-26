# DH Seminars - Next.js Page Deployment Guide

This repository contains a Next.js application with Tailwind CSS. Follow these instructions to deploy it successfully. 

## Prerequisites

- Node.js (version 18.x or higher recommended)
- npm 
- A GitHub account

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aschimmenti/dharc-x-dhlab-building-landscapes.git
   cd dharc-x-dhlab-building-landscapes
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server to double check the application:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions. The workflow file is already set up in `.github/workflows/nextjs.yml`. 
To set up GitHub Pages, follow these steps:

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions** => select the **Next.js ** suggested workflow
   - Click on **Save**

3. The first push to the `main` branch will automatically trigger the deployment workflow. 

## Important Configuration Files

- **next.config.js**: Contains Next.js-specific configurations
- **tailwind.config.js**: Contains Tailwind CSS configurations
- **postcss.config.js**: Contains PostCSS configurations for Tailwind
- **jsconfig.json**: Contains path aliases configuration
- **package.json**: Contains dependencies and scripts