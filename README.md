# Arooza's Hen Do Website 🇮🇹✨

A beautiful, responsive website showcasing Arooza's hen do Italy trip itinerary (22nd-26th). Built with React, Tailwind CSS, and featuring themed daily sections with Italian romantic styling.

## Features

- 🎨 **Themed Daily Sections**: Each day has its own color theme matching the dress codes
- 📱 **Fully Responsive**: Optimized for both desktop and mobile devices
- ✨ **Interactive Elements**: Hover effects, smooth transitions, and beautiful animations
- 🇮🇹 **Italian Styling**: Romantic color palette with gradient backgrounds
- 🎯 **Modern Design**: Clean, professional layout with excellent typography

## Daily Themes

- **22nd - Arrival Day**: Welcome to Italy (Gold/Amber theme)
- **23rd - The Last Splash**: Blue theme for boat activities 🩵🌊
- **24th - Love is in the Air**: Red and pink theme ❤️💞
- **25th - Bridal Shower Day**: Blush & Bows theme 🌷🎀👰‍♀️
- **26th - Farewell**: Purple theme for departure 😢

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **shadcn/ui** components
- **Responsive design** with mobile-first approach

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm run dev
   ```

3. Build for production:
   ```bash
   pnpm run build
   ```

## GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8

    - name: Install dependencies
      run: pnpm install

    - name: Build
      run: pnpm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Option 2: Manual Deployment

1. Build the project: `pnpm run build`
2. Push the `dist` folder contents to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

## File Structure

```
arooza-hen-do/
├── public/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── App.jsx          # Main component with all the itinerary
│   ├── App.css          # Tailwind configuration
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── dist/                # Built files (after running build)
├── package.json
└── README.md
```

## Customization

To modify the itinerary or styling:

1. Edit `src/App.jsx` to change content, dates, or activities
2. Modify color themes in the `days` array
3. Update styling by editing Tailwind classes
4. Add new icons from Lucide React if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Created with ❤️ for Arooza's amazing Italian adventure! 🇮🇹✨

