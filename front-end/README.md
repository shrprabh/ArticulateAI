## Usage

### Overview
AI Articulate is a frontend application built on top of Chat GPT, a product of OpenAI. It's designed to provide a seamless and interactive user experience.

### Backend
The backend is developed using Node.js, Express, and MongoDB. Future plans include deploying it to a server for enhanced accessibility and performance.

### Frontend
The user interface (UI) is crafted using React and TypeScript, utilizing Vite for initial setup due to its speed and efficiency.

### Running the Application
To run the UI locally, you need to install the necessary packages and start the development server:

1. Install the dependencies:
   npm install
2. npm run dev

## Features

- **React + TypeScript + Vite Integration**: This setup provides a minimal yet efficient environment for developing with React and TypeScript in Vite, including Hot Module Replacement (HMR) and basic ESLint rules.
- **Official Vite Plugins**: 
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses Babel for Fast Refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses SWC for Fast Refresh.

## Expanding the ESLint Configuration

For production applications, it's recommended to enhance the ESLint configuration for type-aware linting:

1. Update the `parserOptions` in your ESLint configuration:
   ```js
   parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module',
     project: ['./tsconfig.json', './tsconfig.node.json'],
     tsconfigRootDir: __dirname,
   }
   ```
2. Replace `plugin:@typescript-eslint/recommended` with either `plugin:@typescript-eslint/recommended-requiring-type-checking` or `plugin:@typescript-eslint/strict`.
3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and include `plugin:react/recommended` & `plugin:react/jsx-runtime` in the `extends` list of your ESLint configuration.

## Contributing

Your contributions are always welcome! Please open an issue first to discuss what you would like to change. For more details, see the [CONTRIBUTING.md](./CONTRIBUTING.md).

## References

- **Google Fonts - Work Sans**: [Work Sans Font](https://fonts.google.com/specimen/Work+Sans?preview.text=roboto%20&query=work+sans) - A link to the Work Sans font on Google Fonts, useful for typography in the project.
- **Material-UI - AppBar**: [Material-UI AppBar](https://mui.com/material-ui/react-app-bar/) - Documentation for using the AppBar component from Material-UI.
- **React Icons**: [React Icons Library](https://react-icons.github.io/react-icons/) - A comprehensive library of popular icons for React applications.
- **React Router**: [React Router on npm](https://www.npmjs.com/package/react-router-dom) - The npm page for React Router, detailing its installation and usage.
- **React Hot Toast**: [React Hot Toast](https://react-hot-toast.com/) - Official website for React Hot Toast, showcasing its features and documentation.


## Chat Completions API

For text generation, this project utilizes the Chat Completions API from OpenAI. Refer to the official OpenAI documentation for detailed information on using the API:

[OpenAI Chat Completions API Documentation](https://platform.openai.com/docs/guides/text-generation/chat-completions-api)

## License

This project is licensed under the [MIT License](./LICENSE).
```
