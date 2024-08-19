/* eslint-disable */
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  compiler: {
    styledComponents: true
  },
  transpilePackages: [
    "antd",
    "rc-util",
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
  ],
};
