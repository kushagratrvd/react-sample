# PopX React App

A pixel-perfect React.js application built for interview assessment.

## Live Demo
- **GitHub Repository**: [Add your repo URL here]
- **Live Site**: [Add your deployed URL here]

## Features
- 4 responsive pages: Home, Login, Signup, Profile
- Exact design implementation with Rubik font
- Mobile-first design (375x812 viewport)
- React Router for navigation
- Pixel-perfect styling

## Local Development

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation
1. Clone the repository
\`\`\`bash
git clone [your-repo-url]
cd popx-react-app
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start development server
\`\`\`bash
npm start
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000)

## Build for Production
\`\`\`bash
npm run build
\`\`\`

## Deployment

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run \`npm run build\`
2. Upload \`build\` folder to Netlify
3. Set redirects for SPA routing

## Project Structure
\`\`\`
src/
  pages/
    Home.js
    Login.js  
    Signup.js
    Profile.js
  App.js
  App.css
  index.js
public/
  index.html
  profile-image.png
  _redirects
\`\`\`

## Technologies
- React 18
- React Router DOM
- CSS3 with Rubik font
- Create React App

## Design Specifications
- Background: #F7F8F9
- Primary Blue: #6C25FF  
- Text Color: #1D2226
- Border Color: #CBCBCB
- Font: Rubik (Regular, Medium)
