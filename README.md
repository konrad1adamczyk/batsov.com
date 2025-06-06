# (think)

This is the source code of my personal blog (<https://batsov.com>).
It's a simple Jekyll-powered site, that I deploy on GitHub Pages.

## ✨ Recent Improvements (2025)

This blog has been significantly enhanced with modern features:

### 🚀 Performance & SEO
- Jekyll 4.3 with enhanced plugins
- Google Analytics 4 integration
- Structured data for better search results
- HTML compression and optimization
- Lighthouse CI for performance monitoring

### 📚 Content Organization
- **Series Navigation**: Posts are organized into series (Vim, Emacs, OCaml)
- **Enhanced Archives**: Year/month-based archives with Jekyll Archives
- **Popular Posts**: Curated collection of most-read articles
- **Tag Cloud**: Visual tag navigation with size-based popularity

### 🔍 Search & Discovery
- Full-content search with Lunr.js
- Dedicated search page at `/search/`
- Category and tag pages
- Related posts with series awareness

### 🎨 User Experience
- Dark mode support (automatic based on system preference)
- Newsletter signup component
- Series navigation between related posts
- Responsive design improvements
- Better social sharing

### 🤖 Automation
- GitHub Actions CI/CD pipeline
- Automated link checking
- HTML validation
- SEO audits

## 📖 Series

### [How to Vim](https://batsov.com/vim-series/)
A comprehensive guide to mastering Vim, from basic navigation to advanced techniques.

### [Emacs Deep Dive](https://batsov.com/emacs-series/)
Exploring the power and philosophy of Emacs, the extensible editor.

### [Learning OCaml](https://batsov.com/ocaml-series/)
My journey learning OCaml and functional programming concepts.

## 🛠 Development

### Prerequisites
- Ruby 3.2+
- Bundler
- Node.js 18+ (for tooling)

### Setup
```bash
# Install dependencies
bundle install
npm install

# Serve locally with live reload
npm run serve

# Build for production
npm run build

# Run tests
npm run test
```

### Available Scripts
- `npm run serve` - Local development server
- `npm run build` - Production build
- `npm run clean` - Clean build artifacts
- `npm run lint:html` - HTML validation
- `npm run lighthouse` - Performance audit

## 🤝 Contributing

Feel free to send PRs addressing typos, bad grammar, visual glitches, etc.

### Reporting Issues
- Broken links or typos
- Visual glitches or accessibility issues
- Performance problems
- SEO improvements

## 📊 Analytics & Monitoring

The site includes:
- Google Analytics 4 for visitor insights
- Lighthouse CI for performance monitoring
- Automated link checking
- HTML validation in CI

## 📄 License

The content of this project is licensed under the [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) license, and the underlying source code is licensed under the [MIT](LICENSE) license.

---

**Blog:** [batsov.com](https://batsov.com)  
**Author:** [Bozhidar Batsov](https://github.com/bbatsov)  
**Other Blogs:** [Emacs Redux](https://emacsredux.com) | [Meta Redux](https://metaredux.com)
