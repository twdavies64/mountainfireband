# Mountain Fire Band Website

This is an archived website for the Mountain Fire Band, a bluegrass band that is no longer active.

## Security Updates

### jQuery Security Upgrade (Completed)

**Date:** November 2025

**Critical Issues Addressed:**
- Upgraded jQuery from vulnerable versions 1.2.6 and 1.4.4 to 3.7.1
- Fixed 7+ known CVEs including CVE-2020-11023 (on CISA's Known Exploited Vulnerabilities list)
- Removed deprecated Dreamweaver functions (MM_preloadImages, MM_swapImage, etc.)
- Modernized HTML from XHTML 1.0 to HTML5
- Updated all HTTP links to HTTPS where available
- Added comprehensive security meta tags (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Created robots.txt to discourage bot indexing
- Added noindex/nofollow meta tags to prevent search engine indexing

## Dependencies

### Third-Party Libraries
- **jQuery 3.7.1** (in `/audiojs/jquery.js`) - JavaScript library for DOM manipulation and event handling
- **audiojs library** (in `/audiojs/audio.js`) - HTML5 audio player
- **Custom popup script** (in `/js/pop.js`) - Modal/popup window functionality

## Content Protection Measures

The site implements multiple layers of protection for the archived band content:

1. **Content Security Policy (CSP):**
   - Blocks all HTTP resources via `upgrade-insecure-requests` directive
   - Only allows HTTPS resources to be loaded
   - Prevents unauthorized content embedding
   - Protects against XSS attacks

2. **Search Engine Protection:**
   - `robots.txt` file disallows all bots
   - Meta robots tags (`noindex, nofollow`) on all pages
   - Prevents archived content from appearing in search results

3. **Embedding Protection:**
   - X-Frame-Options DENY prevents clickjacking
   - Frame-ancestors 'none' in CSP prevents any framing

4. **Image Protection (photos.htm):**
   - Right-click context menu disabled with copyright notice
   - Copyright message: "All Images Copyright 2013 by Bill Davies"

## Maintenance Schedule

### Recommended Quarterly Tasks
- Check for jQuery updates at https://jquery.com/
- Test audio player functionality on all pages
- Verify all external HTTPS links are still accessible
- Review security headers and CSP policies

## Testing Checklist

After any updates, test the following:

### Audio Player (`clips.htm`, `contact.htm`, `gigs.htm`, `about.htm`, `music.htm`, `poetry.htm`)
- [ ] Audio playback starts/stops correctly
- [ ] Progress bar updates during playback
- [ ] Track switching works
- [ ] Keyboard shortcuts function (arrow keys, spacebar)
- [ ] No JavaScript console errors

### Popup Windows (`about.htm`)
- [ ] "Click to Read More" popup opens correctly
- [ ] Popup overlay displays properly
- [ ] Close button works
- [ ] No JavaScript console errors

### External Links
- [ ] All HTTPS links load correctly
- [ ] cowboypoetry.com links work
- [ ] wtdaviespoetry.com links work
- [ ] infiniteartsstudio.com links work
- [ ] YouTube embeds display and play

### Security Headers
- [ ] CSP is enforced (check browser console for violations)
- [ ] No mixed content warnings
- [ ] All resources load over HTTPS

## GitHub Pages Compatibility

All changes are client-side only and compatible with GitHub Pages static hosting:
- Security headers implemented via HTML meta tags (no server configuration required)
- HTTPS enforcement via CSP `upgrade-insecure-requests` directive
- All resources are static files (HTML, CSS, JS, images, audio)
- No backend/server-side processing required

## Known Technical Debt

### Legacy Code
- Popup implementation in `js/pop.js` uses older JavaScript patterns but is functional
- Inline styles throughout HTML files should be consolidated into CSS files
- Some external HTTP links don't support HTTPS (CSP will attempt to upgrade them)

### Future Improvements
- Consider replacing audiojs with native HTML5 `<audio>` elements with custom CSS
- Add keyboard accessibility (ESC key) to popup windows
- Add ARIA attributes for screen reader support
- Consolidate inline styles into external CSS files
- Consider migrating to a modern static site generator

## Site Purpose

This is an archived website for historical preservation of the Mountain Fire Band's content:
- Music clips and audio recordings
- Band member biographies
- Gig history and performance archive
- Bill Davies' photography and poetry
- Video performances

The band is no longer active. For historical inquiries: info@mountainfireband.com (note: this email may no longer be monitored).

## CVEs Addressed

The following critical vulnerabilities were addressed by upgrading jQuery:

- **CVE-2020-11023** - XSS vulnerability in jQuery (CISA KEV)
- **CVE-2020-11022** - XSS vulnerability in jQuery
- **CVE-2019-11358** - Prototype pollution vulnerability
- **CVE-2015-9251** - XSS vulnerability in jQuery 1.x
- Multiple other security issues in jQuery 1.2.6 and 1.4.4

## File Structure

```
/
├── index.htm          - Homepage with poetry and links
├── clips.htm          - Music audio player
├── about.htm          - Band member biographies
├── gigs.htm           - Gig archive
├── contact.htm        - Contact information
├── music.htm          - Video performances
├── poetry.htm         - Poetry content
├── photos.htm         - Photography gallery
├── robots.txt         - Bot disallow file
├── audiojs/
│   ├── jquery.js      - jQuery 3.7.1
│   └── audio.js       - audiojs HTML5 player
├── js/
│   ├── pop.js         - Popup window script
│   └── (other scripts)
├── css/               - Stylesheets
├── images/            - Site images
└── audio/             - Music files
```

## License

All content copyright Mountain Fire Band and Bill Davies. All rights reserved.
