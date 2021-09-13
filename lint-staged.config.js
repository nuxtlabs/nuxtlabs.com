module.exports = {
  '*.{js,ts,vue}': 'npm run lint:js && npm run lint:js:fix && git add .',
  '*.{css,scss,sass}': 'npm run lint:css && npm run lint:css:fix && git add .',
}
