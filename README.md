# Probatem Funeral Director Demo Guide

This repository publishes a lightweight static microsite for the Probatem Funeral Director Demo Guide. It is designed to be linked from the Typeform thank-you page and the automatic follow-up email after funeral directors complete the expo lead capture form.

The site introduces Probatem as a trusted Virginia-focused aftercare resource for funeral homes and the families they serve. It includes expandable family question cards, funeral home use-case tabs, selectable demo topic cards, referral guardrails, and an FAQ accordion.

## Files

- `index.html` contains the page structure and content.
- `styles.css` contains the responsive visual design.
- `script.js` contains the interactive behaviors.
- `.nojekyll` tells GitHub Pages to publish the static files as-is.
- `.github/workflows/pages.yml` deploys the site to GitHub Pages with GitHub Actions.

## Replacing the Calendly Link

Every demo scheduling button currently uses this placeholder:

```html
YOUR_CALENDLY_LINK_HERE
```

Before launch, replace every instance of `YOUR_CALENDLY_LINK_HERE` in `index.html` with Jennifer's real Calendly scheduling link.

There are comments in `index.html` next to the CTA links to make those replacement points easy to find.

## Calendly Demo Question

The selected demo topic cards on the website are only for user experience. This static website does not save those selections and does not store visitor data.

Jennifer should add a required Calendly booking question:

**Question:** What would you like Jennifer to cover in the demo?

**Answer options:**

- The family intake experience
- What families receive after completion
- How Probatem fits into aftercare
- How staff should introduce Probatem
- How referral materials work
- Other

Calendly should capture the actual answer when the visitor schedules.

## Enabling GitHub Pages With Actions

1. Push this repository to GitHub.
2. Open the repository settings in GitHub.
3. Go to **Pages**.
4. Under **Build and deployment**, set the source to **GitHub Actions**.
5. Push changes to the `main` branch.
6. The workflow at `.github/workflows/pages.yml` will publish the static site.

## Static Site Notes

This site uses only HTML, CSS, and vanilla JavaScript. It has no React, no Next.js, no backend, no database, no authentication, no serverless functions, and no CRM integration.

The site should be linked from the Typeform thank-you page and the automatic email sent after the expo lead capture form is completed.
