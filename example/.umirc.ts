import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/about', component: '@/pages/about' },
  ],
  dva: {
    immer: true,
    hmr: false,
  },
})
