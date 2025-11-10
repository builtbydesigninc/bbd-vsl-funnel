# VSL Funnel Setup Guide

## Pages Overview

Your funnel has 4 pages:

1. **Homepage (VSL)**: `https://yourdomain.com/`
2. **Application**: `https://yourdomain.com/application.html`
3. **Booking**: `https://yourdomain.com/book.html`
4. **Thank You**: `https://yourdomain.com/thank-you.html`

## Setup Instructions

### 1. Typeform Configuration

In your Typeform (`01K9R1V3N8FZ9CWSNEDSVCXKBE`), you need to configure the redirect:

1. Go to your Typeform dashboard
2. Open the form settings
3. Navigate to "After submission" or "Redirect on completion"
4. Set the redirect URL to: **`https://yourdomain.com/book.html`**

Replace `yourdomain.com` with your actual deployed domain.

### 2. Calendly Configuration

In your Calendly event settings ([Built By Design Application Call](https://calendly.com/d/cwfs-hbf-n6q/built-by-design-application-call)):

1. Go to your Calendly dashboard
2. Select the "Built By Design Application Call" event
3. Edit event settings
4. Under "Notifications and Cancellation" or "After the event"
5. Set "Redirect to external site after booking" to: **`https://yourdomain.com/thank-you.html`**

Replace `yourdomain.com` with your actual deployed domain.

## Local Testing URLs

For development (localhost:3000):

- Homepage: `http://localhost:3000/`
- Application: `http://localhost:3000/application.html`
- Booking: `http://localhost:3000/book.html`
- Thank You: `http://localhost:3000/thank-you.html`

## User Flow

1. User lands on **Homepage** → Watches VSL → Clicks "BOOK YOUR FREE SESSION"
2. User goes to **Application page** → Fills Typeform → Typeform redirects to...
3. User goes to **Booking page** → Books call on Calendly → Calendly redirects to...
4. User sees **Thank You page** → Success message + logo wall

## Meta Pixel Events Tracked

- `PageView` - All pages
- `InitiateCheckout` - When CTA button clicked on homepage
- `PageView` - Application page loaded
- `PageView` - Booking page loaded
- `Schedule` - When Calendly booking completes
- `Lead` - Thank you page (final conversion)

## Deployment

When you deploy to production (Vercel, Netlify, etc.):

1. Make sure all HTML files are in the build output
2. Update Typeform redirect URL to production domain
3. Update Calendly redirect URL to production domain
4. Test the full funnel flow

## Need Help?

If pages show 404, make sure:
- You're using the correct URLs with `.html` extension
- Your hosting platform serves static HTML files correctly
- Build command is `npm run build`
- Output directory is `dist`

