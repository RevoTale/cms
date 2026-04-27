# RevoTale CMS

## Migration note

RevoTale used to be managed as one unified website from this CMS repository. The website is now split into separate applications so each surface can be owned, built, deployed, and optimized independently.

- The CMS remains in this repository and should stay focused on Payload/CMS concerns, content APIs, redirects, and CMS-owned frontend surfaces.
- Tools moved to https://github.com/RevoTale/tools-client and are included here only through the `apps/tools` submodule while the transition is in progress.
- The root RevoTale website moved to https://github.com/RevoTale/root-website.

Do not reintroduce the moved tools or root-website page implementations into this repository. Keep CMS links and redirects pointing to the dedicated applications instead.

## Deployment URLs

- Root website: set `ROOT_WEBSITE_URL` (required)
- CMS: `CMS_URL`, defaults to the `cms` subdomain of `ROOT_WEBSITE_URL`
- Blog: `BLOG_URL`, defaults to the `blog` subdomain of `ROOT_WEBSITE_URL`
- Tools: `TOOLS_URL`, defaults to the `tools` subdomain of `ROOT_WEBSITE_URL`
- Sea Battle: `SEA_BATTLE_URL`, defaults to the `sea-battle` subdomain of `ROOT_WEBSITE_URL`

Production uses `ROOT_WEBSITE_URL=https://revotale.com`.
All URL values must be URL origins with no trailing slash, path, query, or hash.
For Docker builds, pass non-production roots with `--build-arg ROOT_WEBSITE_URL=...` so build-time redirects match the target environment.
