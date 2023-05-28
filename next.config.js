const { withSentryConfig } = require("@sentry/nextjs");
/** @type {import('next').NextConfig} */
const nextConfig = {
  sentry: {
    //   'Configure Source Maps':
    //     - disableServerWebpackPlugin
    //     - disableClientWebpackPlugin
    //     - hideSourceMaps
    //     - widenClientFileUpload
  },
}

const sentryWebpackPluginOptions = {
  org: "example-org",
  project: "example-project",
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
