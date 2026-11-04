## New in v6 — interactive portrait

Move the mouse across the circular homepage photo to see its colors change with the cursor position. The original photo remains unchanged; a CSS color overlay is controlled by a small, local JavaScript file. The effect requires no external services, preserves the circular crop, and fades away when the cursor leaves. On touch devices, the original photo displays without hover effects.

- `assets/portrait-interaction.js`: pointer-tracking color changes (edit the hue calculations to tune them).
- `styles.css`: photo border, hover intensity, transitions, and color overlay.

**Note:** The standalone `preview.html` contains an embedded copy of the JavaScript and CSS. When editing the live site, modify the source files and rebuild the Quarto website; the preview is a convenient demonstration, not the source of truth.

## Visual update (v5)

- Softer cream-and-terracotta palette for a warmer, more personal feel.
- The circular homepage portrait stays small, with a subtle warm halo.
- The homepage introduction now says “I study” instead of “I investigate.”
- Previous text, publications, links, and structured metadata are retained.

# Bruno Gegenhuber — personal academic website

A minimalist, responsive researcher website inspired by the *layout approach* of joshtycko.com (not a copy of its content or assets). Built as a Quarto website, ready for GitHub Pages at **brunogegenhuber.com**.

## See the design now

Open `preview.html` in any web browser. This self-contained preview displays the same content and styles as the Quarto source. The preview is for reviewing the design; **edit `index.qmd` for the live website**.

## Publishing with GitHub Pages (automatic builds)

1. Create a **public** GitHub repository, e.g. `brunogegenhuber-site`. Do not add a README during repository creation.
2. Upload **all the files** from this folder to the repository, including the hidden `.github/workflows/deploy.yml` folder. (Use git or drag-and-drop files in the GitHub interface; upload hidden folders correctly.)
3. Open repository **Settings → Pages → Build and deployment**. Set **Source** to **GitHub Actions**.
4. Open the **Actions** tab to confirm that **Build and deploy Quarto website** ran successfully after your first commit.
5. In **Settings → Pages**, add `brunogegenhuber.com` as **Custom domain** when you own the domain. DNS changes are needed at your domain registrar (see next section).
6. Wait for GitHub Pages to validate the domain, then enable **Enforce HTTPS**.
7. Test both `https://brunogegenhuber.com` and `https://www.brunogegenhuber.com`.

> Note: the project includes a `CNAME` file for `brunogegenhuber.com`. Do not delete it unless you intend to use a different domain.

## DNS settings

For the root/apex domain `brunogegenhuber.com`, GitHub Pages currently documents these A records:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. Make sure you review [GitHub's current custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) before changing DNS (provider interfaces and guidance can change). Remove conflicting parked-domain A/AAAA records. Set up the domain in Pages settings; don't rely on DNS alone.

## Editing

- `index.qmd`: **all visible text**, sections, links, and publications. Edit in any text editor.
- `styles.css`: typography, colors, spacing, mobile layout.
- `_quarto.yml`: website settings, canonical domain.
- `head.html`: search metadata and structured data (`ProfilePage`/`Person`).
- `assets/bruno-gegenhuber-portrait.jpg`: the supplied homepage photograph.
- `assets/favicon.svg`: simple BG icon shown in browser tabs.
- `CNAME`: custom domain for GitHub Pages.
- `robots.txt`: crawling and sitemap.

You can preview locally with [Quarto](https://quarto.org/docs/get-started/):

```bash
quarto preview
```

You can generate the static site with:

```bash
quarto render
```

The generated website is in `_site/`. The included GitHub Actions workflow installs Quarto and handles rendering/deployment whenever you push to `main`.

## Important checks before publication

- **Review the first-person bio and research descriptions**: they're drafted from public information and should reflect your preferred wording.
- Confirm whether you want to publish the **publicly listed Harvard work email** (`Bruno_Gegenhuber@hms.harvard.edu`). Remove or replace it if not.
- The **ORCID** (`0000-0001-8628-1920`), **2022 and 2026 Nature papers**, and **CSHL doctorate** have been corroborated with public academic sources.
- **LinkedIn and X**: The Contact section and the `sameAs` structured data include the LinkedIn URL and the `@brunogegenhuber` X handle supplied directly by Bruno. LinkedIn: `https://www.linkedin.com/in/bruno-gegenhuber-973771440/` · X: `https://x.com/brunogegenhuber`.
- **Google Scholar**: the 2021 paper title links to the specific citation page you supplied. Add a full Scholar author-profile link to Contact if desired.
- Your portrait is included as `assets/bruno-gegenhuber-portrait.jpg` and used in the homepage hero and SEO metadata.
- The `ProfilePage`/`Person` JSON-LD helps clarify your identity to crawlers but **does not guarantee a Google Knowledge Panel**.
- Domain registration, connection to GitHub, and publication have **not** been performed for you.

## Sources used to draft the academic information

- [Greenberg Lab people](https://greenberg.hms.harvard.edu/people/)
- [Harvard Medical School article about 2026 research](https://hms.harvard.edu/news/research-reveals-link-between-stress-hormone-brain-plasticity-early-life)
- [2026 Nature article](https://doi.org/10.1038/s41586-026-10512-9)
- [2022 Nature article](https://doi.org/10.1038/s41586-022-04686-1)
- [2021 Nature article](https://doi.org/10.1038/s41586-021-04010-3)
- [Cold Spring Harbor Laboratory PhD dissertation record](https://repository.cshl.edu/id/eprint/40716/)
- [ORCID listed in PubMed](https://pubmed.ncbi.nlm.nih.gov/31106965/)

## License and design note

The original CSS and SVG are included for your use and modification. The site's prose and professional identity should be reviewed by Bruno Gegenhuber before public release. The design is an independent reinterpretation of minimalist academic portfolio conventions, not a reproduction of Josh Tycko's source code, text, or photo.
