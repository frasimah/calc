#!/usr/bin/env node
/*
 * Conditionally run react-snap.
 * - Skips in CI by default (ENABLE_REACT_SNAP must be 'true' to enable).
 * - Prevents deployment failures in environments without Chrome/Chromium libs.
 */

const { execSync } = require('child_process');

const enable = process.env.ENABLE_REACT_SNAP === 'true';

if (!enable) {
  console.log('[react-snap] Skipped. Set ENABLE_REACT_SNAP=true to enable snapshotting.');
  process.exit(0);
}

try {
  execSync('npx react-snap', { stdio: 'inherit' });
} catch (err) {
  console.warn('[react-snap] Failed:', err && err.message ? err.message : err);
  // Exit successfully to avoid breaking CI/deploy when snapshot fails.
  process.exit(0);
}