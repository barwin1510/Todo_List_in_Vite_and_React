import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Todo_List_in_Vite_and_React/',
  plugins: [react()],
})
