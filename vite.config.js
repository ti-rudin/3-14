import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import history from 'connect-history-api-fallback'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// Плагин для генерации robots.txt и sitemap.xml, а также замены URL в index.html
function generateSeoFiles() {
  let siteUrl = 'https://3-14.ru'
  
  return {
    name: 'generate-seo-files',
    configResolved(config) {
      const env = loadEnv(config.mode, process.cwd(), '')
      siteUrl = env.VITE_SITE_URL || 'https://3-14.ru'
    },
    buildStart() {
      const env = loadEnv('production', process.cwd(), '')
      const url = env.VITE_SITE_URL || 'https://3-14.ru'
      
      // Генерируем robots.txt
      const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${url}/sitemap.xml

# Disallow admin and private areas if any
# Disallow: /admin/
# Disallow: /private/
`
      writeFileSync(resolve(process.cwd(), 'public/robots.txt'), robotsContent)
      
      // Генерируем sitemap.xml
      const today = new Date().toISOString().split('T')[0]
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
      writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemapContent)
    },
    transformIndexHtml(html) {
      const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '')
      const url = env.VITE_SITE_URL || 'https://3-14.ru'
      
      // Заменяем все вхождения хардкода URL на переменную
      return html.replace(/https:\/\/3-14\.ru/g, url)
    }
  }
}

export default defineConfig(({ mode }) => {
  // Загружаем переменные окружения
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      generateSeoFiles()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: true,
      allowedHosts: env.VITE_ALLOWED_HOSTS ? env.VITE_ALLOWED_HOSTS.split(',') : ['all'],
      port: 3140,
      cors: false,
      strictPort: true,
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
        'Cross-Origin-Embedder-Policy': 'require-corp'
      },
      middleware: [
        history({
          verbose: true,
          disableDotRule: true,
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
        })
      ]
    },
    preview: {
      port: 3140,
      allowedHosts: env.VITE_ALLOWED_HOSTS ? env.VITE_ALLOWED_HOSTS.split(',') : ['all'],
    },
    base: '/',
    publicDir: 'public',
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    define: {
      __SITE_URL__: JSON.stringify(env.VITE_SITE_URL || 'https://3-14.ru')
    }
  }
})
