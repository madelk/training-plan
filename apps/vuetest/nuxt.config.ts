import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  ssr: false,
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: '../tsconfig.app.json',
    },
  },
  imports: {
    autoImport: true,
  },
  css: ['~/assets/css/styles.scss'],
  vite: {
    plugins: [nxViteTsPaths()],
  },
  extends: [
    '@vuetest/increment',
    '@vuetest/traffic',
    '@vuetest/user-name',
    '@vuetest/todo',
  ],
  plugins: ['plugins/vue-query'],
});

// npm i
// rm -rf apps/vuetest/.output
// npx nx run @vuetest/vuetest:build --skip-nx-cache
