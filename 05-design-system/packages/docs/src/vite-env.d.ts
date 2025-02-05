/// <reference types="vite/client" />
declare module 'vite-plugin-eslint' {
    import { Plugin } from 'vite';
    function eslintPlugin(options?: any): Plugin;
    export default eslintPlugin;
  }