import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: process.env.PORT || 3000, // Use PORT environment variable or default to 3000
    allowedHosts: ['databang-datathon25.onrender.com'], // Allow this specific host
  },
});
