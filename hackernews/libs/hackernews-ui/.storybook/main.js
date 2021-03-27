const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
rootMain.addons.push(...['@storybook/addon-controls', '@storybook/addon-actions', '@storybook/addon-docs']);
rootMain.stories.push(
  ...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)']
);

module.exports = rootMain;
