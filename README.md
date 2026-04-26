# RevoTale CMS

## Migration note

RevoTale used to be managed as one unified website from this CMS repository. The website is now split into separate applications so each surface can be owned, built, deployed, and optimized independently.

- The CMS remains in this repository and should stay focused on Payload/CMS concerns, content APIs, redirects, and CMS-owned frontend surfaces.
- Tools moved to https://github.com/RevoTale/tools-client and are included here only through the `apps/tools` submodule while the transition is in progress.
- The root RevoTale website moved to https://github.com/RevoTale/root-website.

Do not reintroduce the moved tools or root-website page implementations into this repository. Keep CMS links and redirects pointing to the dedicated applications instead.
