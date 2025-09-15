# Image Change Examples

## Quick Image Replacement Examples

### 1. Hero Section - Change to Local Image
```typescript
// In src/components/Hero.tsx
// Change from:
backgroundImage: 'url("https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'

// To local image:
backgroundImage: 'url("/hero-image.jpg")'

// Or to different Unsplash image:
backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd6590b6891?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
```

### 2. Services - Change All Service Images
```typescript
// In src/components/Services.tsx
// Replace the entire backgroundImage line with:
backgroundImage: `url("/service-${index + 1}.jpg")`

// Or use specific images for each service:
backgroundImage: `url("${index === 0 ? '/plumbing.jpg' : 
                        index === 1 ? '/electrical.jpg' : 
                        index === 2 ? '/painting.jpg' : 
                        index === 3 ? '/masonry.jpg' : 
                        index === 4 ? '/sewage.jpg' : 
                        '/maintenance.jpg'}")`
```

### 3. About Section - Change Image
```typescript
// In src/components/About.tsx
// Change from:
src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

// To:
src="/about-us.jpg"
```

### 4. Contact Section - Change Image
```typescript
// In src/components/Contact.tsx
// Change from:
src="https://images.unsplash.com/photo-1558618666-fcd6590b6891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

// To:
src="/contact-us.jpg"
```

## Image Sources You Can Use

### Free Stock Images:
- **Unsplash**: `https://unsplash.com` - High-quality free images
- **Pexels**: `https://pexels.com` - Free stock photos
- **Pixabay**: `https://pixabay.com` - Free images and videos

### Example Unsplash Images for Handyman Services:
```typescript
// Plumbing: https://unsplash.com/photos/1581092795360-fd1ca04f0952
// Electrical: https://unsplash.com/photos/1558618666-fcd6590b6891  
// Painting: https://unsplash.com/photos/1565538810649-b0d5b0b2b2b2
// Tools: https://unsplash.com/photos/1581091228789-5d8f0a7e5c7e
// Construction: https://unsplash.com/photos/1558618048-b65003e7f4c7
// Maintenance: https://unsplash.com/photos/1560472354-b33ff0c25501
```

## Steps to Add Your Own Images

1. **Add images to public folder**:
   ```
   handy-pro/public/
   ├── hero-image.jpg (1920x1080)
   ├── about-image.jpg (800x600)
   ├── contact-image.jpg (800x600)
   ├── service-1.jpg (800x600) - Plumbing
   ├── service-2.jpg (800x600) - Electrical
   ├── service-3.jpg (800x600) - Painting
   ├── service-4.jpg (800x600) - Masonry
   ├── service-5.jpg (800x600) - Sewage
   └── service-6.jpg (800x600) - Maintenance
   ```

2. **Replace URLs in components** as shown above

3. **Test locally**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Deploy to Cloudflare Pages** (see DEPLOYMENT_GUIDE.md)
