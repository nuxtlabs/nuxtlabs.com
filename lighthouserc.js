module.exports = {
  ci: {
    collect: {
      settings: {
        blockedUrlPatterns: [
          'https://*.googleapis.com',
        ],
        preset: 'desktop',
        throttling: {
          cpuSlowdownMultiplier: 0,
        },
      },
      isSinglePageApplication: true,
      url: [
        'http://localhost:4000',
      ],
      startServerCommand: 'npm run start',
      numberOfRuns: 2,
    },
    assert: {
      assertions: {
        // common
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
