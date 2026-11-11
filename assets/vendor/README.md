# Vendored libraries

These files are checked into the project so GitHub Pages works without a runtime CDN dependency.

| File | Version | Source | License |
|---|---|---|---|
| `gsap.min.js` | 3.12.5 | https://cdn.jsdelivr.net/npm/gsap@3.12.5/ | GSAP Standard "No Charge" License; see `LICENSE-gsap.txt` |
| `ScrollTrigger.min.js` | 3.12.5 | https://cdn.jsdelivr.net/npm/gsap@3.12.5/ | Same GSAP terms |
| `lenis.min.js` | 1.1.14 | https://cdn.jsdelivr.net/npm/lenis@1.1.14/ | MIT; see `LICENSE-lenis.txt` |

The site degrades to normal CSS/JS without these files: `luxury.js` checks for each global before using it.
