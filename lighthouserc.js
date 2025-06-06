module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:4000/',
        'http://localhost:4000/about/',
        'http://localhost:4000/articles/2025/05/31/how-to-vim-jump-around/',
        'http://localhost:4000/categories/',
        'http://localhost:4000/tags/'
      ],
      startServerCommand: 'bundle exec jekyll serve --detach',
      startServerReadyPattern: 'Server running',
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.8}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['warn', {minScore: 0.8}],
        'categories:seo': ['error', {minScore: 0.9}],
        'categories:pwa': 'off'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}; 