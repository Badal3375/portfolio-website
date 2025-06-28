# Contributing to Portfolio Website

Thank you for your interest in contributing to this portfolio website! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use clear, descriptive titles** for issues
3. **Provide detailed descriptions** including:
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and device information

### Suggesting Enhancements

1. **Check if the enhancement has already been suggested**
2. **Provide a clear description** of the enhancement
3. **Explain why this enhancement would be useful**
4. **Include mockups or examples** if applicable

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the coding standards
4. **Test your changes** thoroughly
5. **Commit with clear messages**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** with:
   - Clear title and description
   - Reference to related issues
   - Screenshots of changes (if UI-related)

## 📝 Coding Standards

### TypeScript/React

- Use **TypeScript** for all new components
- Follow **React functional components** with hooks
- Use **proper typing** for props and state
- Follow **React best practices**

### Styling

- Use **Tailwind CSS** for styling
- Follow **mobile-first** responsive design
- Use **consistent spacing** (8px grid system)
- Maintain **accessibility** standards

### File Organization

- Keep components in `src/components/`
- Use **descriptive file names**
- Follow **single responsibility principle**
- Keep files under **300 lines** when possible

### Code Quality

- **Format code** with Prettier
- **Lint code** with ESLint
- **Write meaningful comments** for complex logic
- **Use semantic HTML** elements

## 🧪 Testing

- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on different screen sizes (mobile, tablet, desktop)
- Verify accessibility with screen readers
- Check performance with Lighthouse

## 📱 Responsive Design

- **Mobile-first** approach
- Test breakpoints:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- Ensure **touch-friendly** interactions on mobile

## ♿ Accessibility

- Use **semantic HTML** elements
- Provide **alt text** for images
- Ensure **keyboard navigation** works
- Maintain **color contrast** ratios
- Test with **screen readers**

## 🎨 Design Guidelines

- Follow **existing design patterns**
- Use **consistent colors** from the theme
- Maintain **visual hierarchy**
- Keep **animations smooth** and purposeful
- Ensure **loading states** are handled

## 📦 Dependencies

- **Minimize new dependencies**
- Use **well-maintained packages**
- Check **bundle size impact**
- Update **package.json** appropriately

## 🚀 Performance

- **Optimize images** and assets
- **Minimize bundle size**
- **Use lazy loading** where appropriate
- **Avoid unnecessary re-renders**

## 📋 Commit Message Format

Use clear, descriptive commit messages:

```
Type: Brief description

Detailed explanation if needed

- Add specific changes
- Fix specific issues
- Update specific features
```

**Types:**

- `Add:` New features or components
- `Fix:` Bug fixes
- `Update:` Updates to existing features
- `Remove:` Removing code or features
- `Refactor:` Code refactoring
- `Style:` Styling changes
- `Docs:` Documentation changes

## 🔍 Review Process

1. **Automated checks** must pass (linting, building)
2. **Manual review** by maintainers
3. **Testing** on different devices/browsers
4. **Feedback** and requested changes
5. **Approval** and merge

## 📞 Getting Help

- **Open an issue** for questions
- **Check existing documentation**
- **Review similar implementations**
- **Ask for clarification** in pull requests

## 🎯 Priority Areas

Current areas where contributions are especially welcome:

1. **Performance optimizations**
2. **Accessibility improvements**
3. **Mobile experience enhancements**
4. **Animation and interaction improvements**
5. **Code organization and refactoring**

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to make this portfolio website better! 🚀
