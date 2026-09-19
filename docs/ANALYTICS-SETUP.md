# Analytics & Monitoring Setup

This document explains how to set up and configure analytics and error monitoring for the FCAI E-Club application.

## Overview

The application uses:
- **Vercel Analytics** - Web analytics and performance monitoring
- **Sentry** - Error tracking and performance monitoring

---

## Vercel Analytics

Vercel Analytics is automatically enabled when deployed to Vercel. No additional setup is required for production.

### Installation

The package is already added to `package.json`:
```json
"@vercel/analytics": "^1.3.1"
```

### Usage

The `<Analytics />` component is added to `app/layout.tsx`:
```tsx
import { Analytics } from "@vercel/analytics/react";

// In the body
<Analytics />
```

### Viewing Analytics

1. Go to your Vercel project dashboard
2. Click on the "Analytics" tab
3. View page views, visitors, and Core Web Vitals

### Features

- Page view tracking
- Visitor analytics
- Core Web Vitals (LCP, FID, CLS)
- Geographic data
- Device and browser breakdown
- Real-time data

---

## Sentry

Sentry provides error tracking and performance monitoring.

### Setup Steps

#### 1. Create a Sentry Project

1. Go to [sentry.io](https://sentry.io)
2. Sign up or log in
3. Create a new project
4. Select "Next.js" as the platform
5. Copy your DSN (Data Source Name)

#### 2. Add Environment Variables

Add the following to your `.env.local` file:

```env
# Sentry Configuration
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=your-project-slug
```

**Important:** Never commit `.env.local` to git. These values should be added to your Vercel environment variables for production.

#### 3. Install Dependencies

The package is already added to `package.json`:
```json
"@sentry/nextjs": "^8.34.0"
```

Run:
```bash
pnpm install
```

#### 4. Configuration Files

The following Sentry configuration files have been created:

- `sentry.client.config.ts` - Client-side error tracking
- `sentry.server.config.ts` - Server-side error tracking
- `sentry.edge.config.ts` - Edge runtime error tracking
- `next.config.ts` - Updated with Sentry webpack plugin

#### 5. Configure Sentry (Optional)

If you want to customize Sentry settings, edit the config files:

**sentry.client.config.ts:**
```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0, // Adjust for production (0.1 = 10%)
  replaysSessionSampleRate: 0.1, // 10% of sessions
  replaysOnErrorSampleRate: 1.0, // 100% of error sessions
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true, // Privacy: mask all text
      blockAllMedia: true, // Privacy: block media
    }),
  ],
  environment: process.env.NODE_ENV, // 'development' or 'production'
});
```

### Viewing Errors

1. Go to your Sentry project dashboard
2. View error reports
3. Filter by environment (development/production)
4. View stack traces and user context
5. Set up alerts for critical errors

### Features

- Error tracking with stack traces
- Performance monitoring
- Session replay (with privacy masking)
- Release tracking
- Alerting and notifications
- User context and breadcrumbs

---

## Vercel Environment Variables

For production deployment, add these environment variables in Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Sentry
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=your-project-slug
```

---

## Development vs Production

### Development

- Vercel Analytics: Works in development mode
- Sentry: Captures errors with `environment: 'development'`
- Use development environment to test before production

### Production

- Vercel Analytics: Automatically enabled on Vercel
- Sentry: Captures errors with `environment: 'production'`
- Set appropriate sampling rates to control costs

---

## Privacy Considerations

### Vercel Analytics

- Vercel Analytics is GDPR compliant
- No personal data is collected by default
- Users can opt out via browser settings

### Sentry

- Session replays mask all text by default
- All media is blocked in replays
- PII (Personally Identifiable Information) should not be sent
- Configure sampling rates to reduce data collection

---

## Monitoring Checklist

### Daily
- [ ] Check Sentry for new errors
- [ ] Review error rates
- [ ] Check for critical issues

### Weekly
- [ ] Review Vercel Analytics
- [ ] Check page view trends
- [ ] Monitor Core Web Vitals
- [ ] Review performance data

### Monthly
- [ ] Review error trends
- [ ] Update sampling rates if needed
- [ ] Review alert configurations
- [ ] Check for unused features

---

## Troubleshooting

### Sentry Not Capturing Errors

1. Verify `NEXT_PUBLIC_SENTRY_DSN` is set correctly
2. Check browser console for Sentry initialization errors
3. Verify the config files are not throwing errors
4. Check Sentry dashboard for incoming data

### Vercel Analytics Not Showing Data

1. Verify the site is deployed to Vercel
2. Check that `<Analytics />` is in the layout
3. Wait a few minutes for data to appear
4. Check Vercel Analytics dashboard

### High Sentry Costs

1. Reduce `tracesSampleRate` (e.g., from 1.0 to 0.1)
2. Reduce `replaysSessionSampleRate` (e.g., from 0.1 to 0.01)
3. Set up filters to ignore certain errors
4. Review and adjust alert thresholds

---

## Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [GDPR Compliance](https://vercel.com/legal/gdpr)
- [Sentry Privacy](https://docs.sentry.io/platforms/javascript/guides/nextjs/session-replay/privacy/)

---

## Next Steps

1. Install dependencies: `pnpm install`
2. Add Sentry environment variables to `.env.local`
3. Test in development mode
4. Deploy to Vercel
5. Add environment variables to Vercel project settings
6. Verify analytics and error tracking are working
