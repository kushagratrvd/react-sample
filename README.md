# PopX React App

A pixel-perfect React.js application built for interview assessment.

## Features

- 4 responsive pages: Home, Login, Signup, Profile
- Exact design implementation with Rubik font
- Mobile-first design (375x812 viewport)
- React Router for navigation
- TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd popx-react-app
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm start
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

\`\`\`bash
npm run build
\`\`\`

This builds the app for production to the `build` folder.

## Deployment

This app is configured for deployment on Vercel, Netlify, or similar platforms.

### Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Manual Deployment

1. Run `npm run build`
2. Upload the `build` folder to your hosting service

## Project Structure

\`\`\`
src/
  pages/
    Home.tsx
    Login.tsx
    Signup.tsx
    Profile.tsx
  App.tsx
  App.css
  index.tsx
public/
  index.html
  profile-image.png
\`\`\`

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- CSS3 with Rubik font
- Create React App

## Design Specifications

- Background: #F7F8F9
- Primary Blue: #6C25FF
- Text Color: #1D2226
- Border Color: #CBCBCB
- Font: Rubik (Regular, Medium)
