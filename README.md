# Praveen Ramkumar · AI Engineering Portfolio

A React, TypeScript, and Vite portfolio configured for **https://praveenramk.github.io/**.

## Publish on GitHub Pages

1. Sign in to the **praveenramk** GitHub account and create a public repository named **praveenramk.github.io**. If it already exists, back it up and merge these changes into it.
2. Extract this ZIP. Upload the **contents** of the `praveenramk.github.io` folder into the repository root, including `.github/workflows/deploy-pages.yml`. Do not upload the ZIP itself or an extra parent folder. GitHub Desktop is a convenient way to include hidden folders.
3. Commit and push to the **main** branch.
4. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
5. In **Actions**, open **Publish portfolio to GitHub Pages** and choose **Run workflow** if the first run did not succeed before Pages was enabled.
6. After both jobs succeed, visit **https://praveenramk.github.io/**. Further pushes to `main` redeploy automatically.

This package has been prepared locally; it has not been published or pushed to GitHub.

## Local development

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The build creates a `dist` folder with real entry documents for the homepage, project listing, and every project detail route. This lets direct links and refreshes work on GitHub Pages without hash routing or server rewrites. Keep project slugs unique, lowercase, and hyphenated in `src/data/projects.ts`.

This configuration targets the root-level user site above (or a root-level custom domain), not a repository subpath such as `/portfolio/`.

## Edit content

- Projects and technical descriptions: `src/data/projects.ts`
- Work experience: `src/components/Experience.tsx`
- Intro and about: `src/components/Hero.tsx`, `src/components/About.tsx`
- Contact and social links: `src/components/Contact.tsx`
- Résumé link: `src/components/Navigation.tsx`
- Design and responsive styles: `src/index.css`

## Review before publishing

The original project descriptions contain performance claims that need your verification, including 95%+ mIoU, 60% compute reduction, 30+ FPS, custom CUDA kernels, 90% review-time reduction, and 99.5% serial-number read rate. Retain only claims you can substantiate and clarify your personal contribution. Check that the linked résumé is current and publicly readable.

Production build and TypeScript checks are run locally. Browser visual review remains outstanding because a browser was unavailable in the editing environment.

GitHub deployment reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
