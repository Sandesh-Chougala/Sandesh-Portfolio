# Modern Personal Portfolio Website

Visit My Portfolio : https://sandesh-chougala.netlify.app/

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- ⚡ **Smooth Animations**: Framer Motion animations throughout
- 🎯 **Smooth Scrolling**: Seamless navigation between sections
- 📋 **Contact Form**: Functional contact form with validation
- 🎨 **Diagonal Dividers**: Beautiful diagonal transitions between sections

## Sections

- **Header**: Sticky navigation with mobile menu and theme toggle
- **Hero**: Full-screen introduction with call-to-action
- **About**: Personal information with skills and stats
- **Projects**: Showcase of featured projects with hover effects
- **Contact**: Contact form and information
- **Footer**: Social links and additional information

## Technologies Used

- **React 18** with TypeScript
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Icons** for additional icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Name, title, and bio
- `src/components/About.tsx` - About section content and skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer content and social links

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Custom styles in `src/index.css`
- Component-specific styles in individual component files

### Theme Customization

The dark/light mode toggle is implemented using Tailwind's dark mode feature. You can customize the color scheme by modifying the dark mode classes throughout the components.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── DiagonalDivider.tsx # Diagonal section dividers
├── App.tsx                # Main app component
├── index.css              # Global styles
└── index.tsx              # App entry point
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain (optional)

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.
