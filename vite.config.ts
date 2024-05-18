import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
   port: 8080,
   strictPort: true,
  },
  server: {
   port: 8080,
   strictPort: true,   //Set to true to exit if the port is already in use, instead of automatically trying the next available port.
   host: true,    //set to true to make the server accessible on your network 
   origin: "http://127.0.0.1:8080",
  },
 });