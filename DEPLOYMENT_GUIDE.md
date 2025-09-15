# Deployment Guide - Cloudflare Pages

## How to Change Images

### 1. Replace Image URLs in Components

**Hero Section** (`src/components/Hero.tsx`):
```typescript
// Change this line:
backgroundImage: 'url("https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'

// To your new image URL or local image:
backgroundImage: 'url("/your-image.jpg")' // For images in public folder
// OR
backgroundImage: 'url("https://your-image-url.com/image.jpg")' // For external URLs
```

**Services Section** (`src/components/Services.tsx`):
```typescript
// Find the image URLs in the services.map function:
backgroundImage: `url("https://images.unsplash.com/photo-${index === 0 ? '1581092795360-fd1ca04f0952' : 
                        index === 1 ? '1558618666-fcd6590b6891' : 
                        // ... etc`

// Replace with your own images:
backgroundImage: `url("/service-${index + 1}.jpg")` // For local images
// OR keep the conditional logic but change the image IDs
```

**About Section** (`src/components/About.tsx`):
```typescript
// Change this line:
src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

// To your image:
src="/about-image.jpg" // For local image
// OR
src="https://your-image-url.com/about.jpg" // For external URL
```

**Contact Section** (`src/components/Contact.tsx`):
```typescript
// Change this line:
src="https://images.unsplash.com/photo-1558618666-fcd6590b6891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

// To your image:
src="/contact-image.jpg" // For local image
```

### 2. Add Your Own Images

1. **Place images in the `public` folder**:
   ```
   handy-pro/public/
   ├── your-image.jpg
   ├── hero-image.jpg
   ├── service-1.jpg
   ├── service-2.jpg
   ├── about-image.jpg
   ├── contact-image.jpg
   └── favicon.ico
   ```

2. **Recommended image specifications**:
   - Hero images: 1920x1080px or larger
   - Service images: 800x600px
   - About/Contact images: 800x600px
   - Format: JPG, PNG, or WebP
   - Size: Keep under 500KB for fast loading

## Deploy to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Push your code to GitHub**:
   ```bash
   cd handy-pro
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `.next`
     - **Install command**: `npm install`
   - Click "Save and Deploy"

### Method 2: Direct Upload

1. **Build your project locally**:
   ```bash
   cd handy-pro
   npm run build
   ```

2. **Upload to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Click "Upload assets"
   - Drag and drop the `out` folder (after build) or use the CLI

### Method 3: Cloudflare CLI (Wrangler)

1. **Install Wrangler**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Create wrangler.toml**:
   ```toml
   name = "handy-pro"
   main = ".next"
   compatibility_date = "
