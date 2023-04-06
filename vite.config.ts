import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              meaninglessFileNames: ['index', 'styles'],
              fileName: true,
              displayName: true,
            },
          ],
        ],
      },
    }),
  ],
});
