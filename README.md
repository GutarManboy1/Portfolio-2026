<img width="1903" height="988" alt="Image" src="https://github.com/user-attachments/assets/169aa7ba-13ab-42f6-9f88-ae5255df0d03" />

<img width="1900" height="992" alt="Image" src="https://github.com/user-attachments/assets/7961cb2f-8af7-4ec5-a578-452ece3a5f14" />

<img width="1901" height="992" alt="Image" src="https://github.com/user-attachments/assets/610292ac-842a-411e-9c7c-cadee198eeb4" />

<img width="1902" height="992" alt="Image" src="https://github.com/user-attachments/assets/53c89994-2e07-42a2-8949-e09570f4e20a" />

<img width="1895" height="690" alt="Image" src="https://github.com/user-attachments/assets/9c462b40-1279-4e74-899c-b01f14feabcf" />

<img width="1902" height="607" alt="Image" src="https://github.com/user-attachments/assets/fc802e6c-a6a9-4328-9031-8100d46b30c6" />

<img width="1902" height="902" alt="Image" src="https://github.com/user-attachments/assets/5d3a3adb-2df5-4609-b614-6bad76449353" />

<img width="1901" height="993" alt="Image" src="https://github.com/user-attachments/assets/74b2e731-735e-4143-bacd-4c068d661863" />

<img width="1902" height="992" alt="Image" src="https://github.com/user-attachments/assets/c6b3ffca-ad3b-486e-9adc-b3c6b0713fc6" />

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Portfolio-2026
