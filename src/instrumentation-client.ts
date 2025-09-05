import posthog from 'posthog-js';

import { env } from './env';

posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: '/G8Bcyc',
  ui_host: 'https://us.i.posthog.com',
  defaults: '2025-05-24',
  capture_exceptions: true, // This enables capturing exceptions using Error Tracking
  debug:
    process.env.NODE_ENV === 'development' && env.NEXT_PUBLIC_POSTHOG_ENABLED,
});
