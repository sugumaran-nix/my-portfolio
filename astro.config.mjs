import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://sugumaran-portfolio.vercel.app',
  integrations: [tailwind({ applyBaseStyles: false }), react()],
});
