# Personal Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, projects, and experiences as a full-stack developer.

## 🌐 Live Demo

[View Live Demo](https://adamya-kumar.github.io/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 📖 About

This portfolio website is designed to showcase my work, skills, and experiences as a full-stack developer. It features interactive 3D elements, responsive design, and smooth animations to create an engaging user experience.

## ✨ Features

- **Responsive Design**: Works on all device sizes
- **Interactive 3D Elements**: Built with Three.js and React Three Fiber
- **Smooth Animations**: Using Framer Motion and GSAP
- **Modern UI**: Styled with Tailwind CSS
- **Project Showcase**: Detailed project descriptions with live demos
- **Experience Timeline**: Interactive timeline of my professional journey
- **Contact Form**: Email integration with EmailJS
- **Performance Optimized**: Lazy loading and code splitting

## 🛠 Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion, GSAP
- **UI Components**: React Icons
- **Deployment**: GitHub Pages, Vercel (optional)
- **Utilities**: EmailJS (for contact form)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adamya-Kumar/Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## 👨‍💻 Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Vercel Deployment

#### Step-by-Step Vercel UI Deployment Guide

1. **Prepare Your Repository**
   - Ensure your code is pushed to a GitHub repository
   - Your repository should contain all the files from this project

2. **Sign Up/Log In to Vercel**
   - Visit [Vercel](https://vercel.com/)
   - Click "Sign Up" or "Log In" in the top right corner
   - You can sign up with GitHub, GitLab, or Bitbucket for easier integration

3. **Create a New Project**
   - After logging in, click the "New Project" button
   - If this is your first time, you'll see a "Create a New Project" option

4. **Import Your Git Repository**
   - Under "Import Git Repository", you'll see your GitHub repositories
   - Find and select your portfolio repository
   - Click "Import"

5. **Configure Project Settings**
   - Vercel will automatically detect this is a Vite project
   - Verify the following settings:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - These should be automatically filled in, but verify they match

6. **Deploy Your Project**
   - Click the "Deploy" button
   - Vercel will now:
     - Clone your repository
     - Install dependencies
     - Run the build command
     - Deploy your site

7. **View Your Deployment**
   - The deployment process will take 1-3 minutes
   - You'll see a live URL (e.g., `your-project-name.vercel.app`)
   - Click "Go to Dashboard" to view deployment details

8. **Configure Custom Domain (Optional)**
   - In your project dashboard, go to "Settings" → "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

#### Vercel Configuration

This project includes a `vercel.json` file that configures:
- Route rewrites for client-side routing
- Build settings for the static site generator

### Alternative Vercel CLI Deployment

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy using the CLI:
   ```bash
   vercel --prod
   ```
   
   Or use the project script:
   ```bash
   npm run vercel-deploy
   ```

## 📁 Project Structure

```
src/
├── components/        # Reusable components
├── constants/         # Application constants and data
├── sections/          # Main page sections
├── App.jsx           # Main application component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build locally
- `npm run deploy` - Deploys to GitHub Pages
- `npm run lint` - Runs ESLint

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Adamya Kumar - [@LinkedIn](https://www.linkedin.com/in/adamya-kumar) - [@GitHub](https://github.com/Adamya-Kumar)

Project Link: [https://github.com/Adamya-Kumar/Portfolio](https://github.com/Adamya-Kumar/Portfolio)