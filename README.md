# Green Point - Mental and Business Consulting

A professional, bilingual (English/Spanish) website for Green Point Consulting, offering mental and business consulting services.

## 🚀 Features

- **Bilingual Support**: English and Spanish with seamless language switching
- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional UI**: Modern, clean design with smooth animations
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Security**: Comprehensive security headers and best practices

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: CSS3 with modern features (backdrop-filter, CSS Grid, Flexbox)
- **Internationalization**: Custom React Context for translations
- **Build Tool**: Create React App with optimized configuration
- **Performance**: Lazy loading, memoization, and optimized rendering

## 📦 Installation

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/greenpoint/consulting-website.git
   cd consulting-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

### Development
- `npm start` - Start development server
- `npm test` - Run tests with coverage
- `npm run lint` - Check code quality
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - TypeScript type checking

### Production
- `npm run build` - Build for production (with security checks)
- `npm run build:prod` - Build for production (skip tests)
- `npm run security:audit` - Security vulnerability audit
- `npm run security:fix` - Fix security vulnerabilities

## 🚀 Deployment

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://api.greenpoint.com
REACT_APP_GA_TRACKING_ID=GA_MEASUREMENT_ID
NODE_ENV=production
GENERATE_SOURCEMAP=false
```

### Production Build

1. **Run security checks and build**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder**
   The build process creates an optimized production bundle in the `build` directory.

### Deployment Platforms

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard

#### Vercel
1. Connect your repository to Vercel
2. Vercel automatically detects React app
3. Add environment variables in Vercel dashboard

#### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `build` folder to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain and SSL

## 🔒 Security Features

### Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Code Security
- TypeScript for type safety
- ESLint with security rules
- Regular security audits
- No source maps in production
- Input validation and sanitization

### Performance Security
- Lazy loading to prevent code injection
- Content Security Policy ready
- Optimized bundle size
- No eval() or dangerous functions

## 📱 PWA Features

- **Offline Support**: Service worker for offline functionality
- **App-like Experience**: Full-screen mode and native feel
- **Installable**: Can be installed on mobile devices
- **Fast Loading**: Optimized assets and caching

## 🌐 Internationalization

The app supports multiple languages through a custom React Context:

```typescript
const { t, language, setLanguage } = useLanguage();
```

### Adding New Languages

1. Add translations to `src/context/LanguageContext.tsx`
2. Update the `Language` type
3. Add language validation in `setLanguage` function

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:ci

# Run specific test file
npm test -- --testPathPattern=Navbar
```

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Techniques
- Code splitting with React.lazy()
- Image optimization and lazy loading
- CSS optimization and critical path rendering
- Bundle size optimization
- Memory leak prevention

## 🔧 Configuration

### TypeScript Configuration
- Strict mode enabled
- No implicit any
- Strict null checks
- No unused variables

### ESLint Configuration
- React hooks rules
- TypeScript rules
- Security best practices
- Code quality standards

## 📈 Monitoring

### Error Tracking
- Error boundaries for graceful error handling
- Console logging for development
- Production error reporting ready

### Performance Monitoring
- Web Vitals tracking
- Bundle size monitoring
- Loading time optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain accessibility standards
- Write comprehensive tests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: support@greenpoint.com
- Website: https://greenpoint.com
- Documentation: [Wiki](https://github.com/greenpoint/consulting-website/wiki)

## 🔄 Changelog

### v1.0.0 (Current)
- Initial release
- Bilingual support (EN/ES)
- Responsive design
- Security optimizations
- Performance improvements
- PWA features

---

**Built with ❤️ by Green Point Consulting**
