/**
 * Unit Test for Portfolio Projects Dataset
 */

const assert = require('assert');
const { PORTFOLIO_PROJECTS } = require('../assets/js/projects-data.js');

console.log('--- Running JavaScript Projects Data Test Suite ---');

// 1. Verify Dataset Exists and has at least 8 key repositories
assert.ok(Array.isArray(PORTFOLIO_PROJECTS), 'PORTFOLIO_PROJECTS should be an array');
assert.ok(PORTFOLIO_PROJECTS.length >= 8, `Expected at least 8 projects, found ${PORTFOLIO_PROJECTS.length}`);

// Required repository IDs
const requiredRepoIds = [
  'url-shortener-api',
  'travel-data-scraper',
  'job-application-tracker-api',
  'house-prices-regression',
  'FoodOrderingApp',
  'deforestation-project',
  'customer-churn-prediction',
  'shopping-app'
];

const validCategories = new Set(['all', 'fullstack', 'backend', 'ml', 'automation']);
const seenIds = new Set();

requiredRepoIds.forEach(reqId => {
  const found = PORTFOLIO_PROJECTS.find(p => p.id === reqId);
  assert.ok(found, `Required project ID '${reqId}' is missing from projects-data.js`);
});

PORTFOLIO_PROJECTS.forEach(project => {
  // Check uniqueness
  assert.ok(!seenIds.has(project.id), `Duplicate project ID found: ${project.id}`);
  seenIds.add(project.id);

  // Check required fields
  assert.ok(project.id && typeof project.id === 'string', `Project missing valid id: ${JSON.stringify(project)}`);
  assert.ok(project.title && typeof project.title === 'string', `Project ${project.id} missing valid title`);
  assert.ok(validCategories.has(project.category), `Project ${project.id} has invalid category: ${project.category}`);
  assert.ok(project.description && project.description.length > 10, `Project ${project.id} missing description`);
  assert.ok(Array.isArray(project.tags) && project.tags.length > 0, `Project ${project.id} missing tags array`);
  assert.ok(project.githubUrl && project.githubUrl.startsWith('https://github.com/bilalfarid-1/'), `Project ${project.id} has invalid githubUrl: ${project.githubUrl}`);
  assert.ok(project.stats && typeof project.stats === 'object', `Project ${project.id} missing stats object`);
});

console.log(`[PASS] All ${PORTFOLIO_PROJECTS.length} project definitions validated successfully!`);
