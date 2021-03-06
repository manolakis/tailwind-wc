import { playwrightLauncher } from '@web/test-runner-playwright';
import { defaultReporter } from '@web/test-runner';
import { junitReporter } from '@web/test-runner-junit-reporter';

export default {
  nodeResolve: true,
  coverageConfig: {
    report: true,
    reportDir: 'coverage',
    threshold: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
    exclude: ['test/*'],
  },
  testFramework: {
    config: {
      timeout: '3000',
    },
  },
  browsers: [
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'webkit' }),
  ],
  files: ['test/**/*.test.js', 'test/**/*_test.html'],
  reporters: [
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    junitReporter(),
  ],
};
