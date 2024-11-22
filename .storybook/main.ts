import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.app.json")],
      })
    );

    return {
      ...config,
      css: {
        ...config.css,
        preprocessorOptions: {
          css: {
            charset: false,
          },
        },
        modules: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
          scopeBehaviour: "local",
          globalModulePaths: [/global\.css$/],
        },
      },
    };
  },
};

export default config;