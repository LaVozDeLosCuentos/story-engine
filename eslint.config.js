import { defineConfig } from 'eslint-define-config';
import vue from 'eslint-plugin-vue';

export default defineConfig([
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "vue/max-attributes-per-line": "off"
    },
  },
  {
    files: ['*.vue'],
    processor: 'vue/.vue',
  }
]);
