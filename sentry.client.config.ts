import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // Adjust sample rate in production - 1.0 = 100% of errors captured
  tracesSampleRate: 0.1,
  // Only enable in production
  enabled: process.env.NODE_ENV === "production",
});
