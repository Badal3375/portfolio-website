# Badal Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills, projects, and experience as a Computer Science student.

## 🚀 Live Demo

[View Live Portfolio](https://your-username.github.io/portfolio-website)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and micro-interactions
- **Contact Form**: Functional contact form with email integration
- **Performance**: Optimized for fast loading and smooth performance
- **Accessibility**: Built with accessibility best practices

## 🛠️ Built With

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icons
- **Formspree** - Contact form backend service

## 📱 Sections

- **Hero** - Introduction with animated typing effect
- **About** - Personal information and highlights
- **Skills** - Technical skills with progress bars
- **Education** - Academic background and achievements
- **Projects** - Featured projects with descriptions and links
- **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Badal3375/portfolio-website.git
cd portfolio-website
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Education.tsx   # Education section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer component
├── assets/             # Static assets
│   ├── profileimg.jpg  # Profile image
│   └── Badal_resume.pdf # Resume file
├── App.tsx             # Main App component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors

The website uses a blue and purple gradient theme. You can customize colors in `tailwind.config.js` and the CSS files.

### Content

Update the content in each component file to match your information:

- Personal details in `Hero.tsx` and `About.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Contact information in `Contact.tsx`

### Images

Replace the images in the `src/assets/` folder with your own:

- `profileimg.jpg` - Your profile picture
- `Badal_resume.pdf` - Your resume

## 📧 Contact Form Setup

The contact form uses Formspree for handling form submissions. To set up your own:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Replace the form endpoint in `Contact.tsx`

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to `package.json`:

```json
{
  "homepage": "https://Badal3375.github.io/portfolio-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy to GitHub Pages:

```bash
npm run deploy
```

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:

- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## ⚡ Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size
- Fast loading animations
- Efficient CSS with Tailwind

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Badal Singh**

- GitHub: [@Badal3375](https://github.com/Badal3375)
- LinkedIn: [badalsingh91](https://www.linkedin.com/in/badalsingh91/)
- Email: singh.badal3375@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Pexels](https://www.pexels.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ Star this repository if you found it helpful!
