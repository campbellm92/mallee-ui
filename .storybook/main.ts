import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { mergeConfig } from "vite";
import svgr from "@svgr/rollup";

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
  viteFinal: async (configFromStorybook) => {
    configFromStorybook.plugins?.push(tsconfigPaths());

    return mergeConfig(configFromStorybook, {
      plugins: [svgr()],
      css: {
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
    });
  },
};

export default config;
