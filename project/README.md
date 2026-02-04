# Jan Anthony Alejo - Portfolio

A modern, responsive portfolio website with dark mode and activity showcase.

## Features

- Toggle between Midterm and Finals activities
- Dark mode support
- Responsive design
- Smooth animations and transitions
- Production-ready for Vercel deployment

## Adding Your Activities

To add your activity images and descriptions, edit the `src/data/activities.ts` file:

```typescript
export const activityData = {
  midterm: [
    {
      id: 1,
      title: 'Your Activity Title',
      description: 'Your activity description',
      imageUrl: '/path/to/your/image.jpg', // Add your image URL or path here
    },
    // Add more activities...
  ],
  finals: [
    // Same structure for finals activities
  ],
};
```

### Image Options

You can add images in two ways:

1. **Using URLs**: Place image URLs directly in the `imageUrl` field
2. **Using local images**:
   - Place your images in the `public` folder (e.g., `public/images/activity1.jpg`)
   - Reference them with `/images/activity1.jpg` in the `imageUrl` field

## Deploying to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Import Project"
4. Select your repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

That's it! Your portfolio will be live in minutes.

## Local Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
npm run preview
```
