/**
 * Setup for the `client` Vitest project.
 *
 * Browser-mode tests render into a real page, but that page has no stylesheet unless one
 * is imported here. Without it every Tailwind class is inert, and a test that asserts a
 * computed style is measuring browser defaults while appearing to pass or fail for the
 * wrong reason.
 *
 * This is the stylesheet the package ships, so a style assertion checks the real tokens.
 */

import '../src/styles/globals.css';
