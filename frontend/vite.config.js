// The most important thing about VITE is HMR
// HMR  =>  HOT MODULE REPLACEMENT



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
