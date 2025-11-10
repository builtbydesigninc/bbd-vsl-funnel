import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        application: resolve(__dirname, 'application.html'),
        book: resolve(__dirname, 'book.html'),
        thankyou: resolve(__dirname, 'thank-you.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

