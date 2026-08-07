import { defineConfig } from 'vite';

// Served from https://arbiter09.github.io/Jas-Portfolio/, so every asset URL
// needs the repository name as a prefix. Anything referencing a file in
// public/ should build its path from import.meta.env.BASE_URL rather than
// hardcoding a leading slash.
export default defineConfig({
  base: '/Jas-Portfolio/',
});
